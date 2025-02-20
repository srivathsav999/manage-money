const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const User = require("./models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Account = require("./models/accounts");
const authenticate = require("./middleware/authenticate");
const Transaction = require("./models/transactions");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "Invalid email" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: "10m",
        });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    if (password.length < 8) {
        return res
            .status(400)
            .json({ error: "Password must be at least 8 characters long" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    User.create({ name, email, password: hashedPassword })
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json({ message: err.message }));
});

app.post("/accounts", authenticate, async (req, res) => {
    const { accountType, accountNumber, bankName, accountHolderName } =
        req.body;

    if (!accountType || !accountNumber || !bankName || !accountHolderName) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newAccount = new Account({
            accountType,
            accountNumber,
            bankName,
            accountHolderName,
            userId: req.user.userId,
        });

        await newAccount.save();
        res.status(201).json({
            message: "Account created successfully",
            account: newAccount,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add account" });
    }
});


app.get("/accounts", authenticate, async (req, res) => {
    try {
        const accounts = await Account.find({ userId: req.user.userId });
        res.status(200).json(accounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch accounts" });
    }
});


app.get("/accounts/:id", async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid account ID format" });
        }

        const account = await Account.findById(id).populate(
            "userId",
            "name email"
        );
        if (!account) {
            return res.status(404).json({ error: "Account not found" });
        }

        res.json(account);
    } catch (error) {
        console.error("Error fetching account:", error);
        res.status(500).json({ error: "Server error" });
    }
});


app.post(
    "/accounts/:accountId/transactions",
    authenticate,
    async (req, res) => {
        const { accountId } = req.params;
        const { amount, category, description } = req.body;

        if (!amount || !category) {
            return res
                .status(400)
                .json({ error: "Amount and category are required" });
        }

        try {
            if (!mongoose.Types.ObjectId.isValid(accountId)) {
                return res
                    .status(400)
                    .json({ error: "Invalid account ID format" });
            }

            const transaction = new Transaction({
                accountId,
                amount,
                category,
                description,
            });
            await transaction.save();

            res.status(201).json({
                message: "Transaction added successfully",
                transaction,
            });
        } catch (error) {
            console.error("Error adding transaction:", error);
            res.status(500).json({ error: "Failed to add transaction" });
        }
    }
);

app.get("/accounts/:accountId/transactions", authenticate, async (req, res) => {
    const { accountId } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(accountId)) {
            return res.status(400).json({ error: "Invalid account ID format" });
        }
        const transactions = await Transaction.find({ accountId });
        res.status(200).json(transactions);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ error: "Failed to fetch transactions" });
    }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
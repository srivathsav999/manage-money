const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        accountId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            enum: ["Receivables", "Payables"],
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        relatedTo: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true, 
    }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;

package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.Keys;

import java.time.Duration;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Demo_3_Login {
    public static void main(String[] args) throws InterruptedException {

        WebDriver driver = new ChromeDriver();

    driver.get("https://www.google.com");

    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    WebElement searchBox = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.name("q")));
    searchBox.sendKeys("selenium");
    searchBox.sendKeys(Keys.ENTER);

    WebElement resultsHeading = wait.until(
        ExpectedConditions.visibilityOfElementLocated(By.id("search")));
    System.out.println("Search completed: " + resultsHeading.isDisplayed());

    Thread.sleep(2000);

        driver.quit();
    }
}
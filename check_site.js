import { chromium } from 'playwright';
import path from 'path';

async function check_site() {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const errors = [];
    page.on('pageerror', error => {
        errors.push(error.message);
    });
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(msg.text());
        }
    });

    try {
        console.log("Navigating to site...");
        // Use the default dev port or build and serve. Let's try dev first.
        await page.goto('http://localhost:3000/');

        // Wait for some content to load
        await page.waitForSelector('#root');
        await page.waitForTimeout(2000); // Wait for 3D to init

        if (errors.length > 0) {
            console.error("Found JS errors:", errors);
        } else {
            console.log("No JS errors found.");
        }

        await page.screenshot({ path: 'check_desktop.png', fullPage: true });
        console.log("Desktop screenshot saved.");

        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'check_mobile.png' });
        console.log("Mobile screenshot saved.");

    } catch (e) {
        console.error("Error during check:", e);
    } finally {
        await browser.close();
    }
}

check_site();

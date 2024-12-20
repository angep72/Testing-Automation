describe('Navigate to Homepage after Delay', () => {
    it('should open a webpage, wait for 10 seconds, and then navigate to the homepage', async () => {
        // 1. Open the desired webpage
        await browser.url('http://localhost:8080/index.html'); // Replace with the URL of the webpage you want to test

        // 2. Pause for 10 seconds
        await browser.pause(10000); // 10000 milliseconds = 10 seconds

        // // 3. Locate and click on the homepage link (or button)
        // const homeLink = await $('#__button0-BDI-content'); // Replace this with your homepage link selector

        // // Ensure the element exists before interacting with it
        // await homeLink.waitForExist({ timeout: 5000 }); // Wait for up to 5 seconds for the element to appear

        // // 4. Click on the homepage link to navigate to the homepage
        // await homeLink.click();

        // // 5. Verify we are on the homepage (you can customize this check)
        // // await browser.waitUntil(async () => (await browser.getUrl()) === 'https://example.com/', {
        // //     timeout: 5000,
        // //     timeoutMsg: 'Expected to be on the homepage, but we are not.'
        // // });
    });
});

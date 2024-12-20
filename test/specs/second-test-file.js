describe('Page Redirection Test', () => {
    it('should redirect to another page and allow navigation back', async () => {
        // Step 1: Navigate to the initial page
        await browser.url('http://localhost:8080/index.html');

        // Step 2: Get the initial URL
        const initialUrl = await browser.getUrl();

        // Step 3: Find the button that triggers the page redirection
        const redirectButton = await $('#__button0-content');

        // Step 4: Click the button to trigger the redirection
        await redirectButton.click();

        // Step 5: Wait for the page to load after the redirection
        await browser.waitUntil(async () => {
            return (await browser.getUrl()) === 'http://localhost:8080/index.html#/home';
        }, {
            timeout: 5000,
            timeoutMsg: 'Expected page URL was not reached within 5 seconds'
        });

        // Step 6: Verify that the current URL is the target page
        const redirectedUrl = await browser.getUrl();
        expect(redirectedUrl).toBe('http://localhost:8080/index.html#/home');
        await browser.pause(10000)

        // Step 7: Navigate back to the previous page
        await browser.back();

        // Step 8: Verify that we're back to the initial page
        await browser.waitUntil(async () => {
            const currentUrl = await browser.getUrl();
            return currentUrl === initialUrl;
        }, {
            timeout: 5000,
            timeoutMsg: 'Failed to navigate back to the initial page within 5 seconds'
        });

        // Step 9: Final verification of the initial URL
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe(initialUrl);

        // Step 10: Wait for 10 seconds before closing the browser
        await browser.pause(10000); // Wait for 10 seconds
    });
});

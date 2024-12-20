describe('Google Search Bar Test', () => {
    it('should search for a query, display results, and close the browser', async () => {
        // Navigate to Google
        await browser.url('https://www.google.com');

        // Find search input (verify the correct selector)
        const searchInput = await $('textarea[name="q"]');
        
        // Wait and interact
        await searchInput.waitForExist({ timeout: 10000 });
        await searchInput.waitForDisplayed({ timeout: 10000 });
        
        // Input search query
        await searchInput.setValue('WebDriverIO');
        
        // Submit search (use browser.keys or alternative method)
        await browser.keys('Enter');
        // OR: await searchInput.addValue('Enter');

        // Wait for results
        await browser.waitUntil(
            async () => {
                const results = await $$('h3');
                return results.length > 0;
            },
            {
                timeout: 10000,
                timeoutMsg: 'Search results did not load'
            }
        );

        // Verify results
        const results = await $$('h3');
        expect(results.length).toBeGreaterThan(0);
    });
});
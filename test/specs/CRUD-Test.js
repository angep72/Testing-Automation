describe('for adding new product on my list ', () => {
    it('Should add new product after button is clicked', async () => {
        // Step 1: Navigate to the page
        await browser.url('http://localhost:8080/index.html');

        // Step 2: Wait for the page to be fully loaded
        await browser.waitUntil(async () => {
            return await browser.execute(() => document.readyState === 'complete');
        }, {
            timeout: 10000,
            timeoutMsg: 'Page load timed out'
        });
        await browser.pause(5000);

        //step 3 navigating on different pages 
        const deleteButton = await $('#__button0-BDI-content');
        await deleteButton.click();
        await browser.pause(5000);

    });
});
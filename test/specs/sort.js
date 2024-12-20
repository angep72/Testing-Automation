describe('Product Sorting Test', () => {
    before(async () => {
        // Navigate to the product page
        await browser.url('http://localhost:8080/index.html'); // Update the URL as needed
    });

    it('should sort products by price in ascending order', async () => {
        // Step 1: Find and click the "Price" column header to sort by price in ascending order
        const priceColumnHeader = await $('th[data-column="price"]'); // Replace with correct column selector
        await priceColumnHeader.click(); // Clicking to sort ascending
        
        // Step 2: Wait for the table to update after sorting
        await browser.pause(1000); // Add a small pause for UI to reflect sorting, adjust as needed

        // Step 3: Get the list of product prices and verify the sorting
        const productPrices = await $$('td[data-column="price"]'); // Replace with correct product price cell selector

        // Extract text from the price cells and convert to numbers
        const prices = [];
        for (let price of productPrices) {
            const priceText = await price.getText();
            prices.push(parseFloat(priceText.replace('$', '').trim())); // Assumes prices are prefixed with a $ symbol
        }

        // Step 4: Verify if the prices are sorted in ascending order
        const sortedAscending = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sortedAscending);
    });

    it('should sort products by price in descending order', async () => {
        // Step 1: Find and click the "Price" column header again to sort by price in descending order
        const priceColumnHeader = await $('th[data-column="price"]'); // Replace with correct column selector
        await priceColumnHeader.click(); // Clicking again to sort descending
        
        // Step 2: Wait for the table to update after sorting
        await browser.pause(1000); // Add a small pause for UI to reflect sorting, adjust as needed

        // Step 3: Get the list of product prices and verify the sorting
        const productPrices = await $$('td[data-column="price"]'); // Replace with correct product price cell selector

        // Extract text from the price cells and convert to numbers
        const prices = [];
        for (let price of productPrices) {
            const priceText = await price.getText();
            prices.push(parseFloat(priceText.replace('$', '').trim())); // Assumes prices are prefixed with a $ symbol
        }

        // Step 4: Verify if the prices are sorted in descending order
        const sortedDescending = [...prices].sort((a, b) => b - a);
        expect(prices).toEqual(sortedDescending);
    });
});

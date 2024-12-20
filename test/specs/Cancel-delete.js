describe('Element Deletion Cancellation Test', () => {
    it('should cancel the deletion when the cancel button is clicked', async () => {
        // Step 1: Navigate to the page
        await browser.url('http://localhost:8080/index.html');

        // Step 2: Wait for the page to be fully loaded
        await browser.waitUntil(async () => {
            return await browser.execute(() => document.readyState === 'complete');
        }, {
            timeout: 10000,
            timeoutMsg: 'Page load timed out'
        });

        // Step 3: Find the element to be potentially deleted
        const elementToDelete = await $('#__item0-__component0---main--suppliersTable-1');
        await browser.pause(5000);


        // Step 4: Wait for the element to be displayed
        await elementToDelete.waitForExist({ 
            timeout: 10000, 
            timeoutMsg: 'Element not found' 
        });
        await browser.pause(5000);
        await elementToDelete.waitForDisplayed({ 
            timeout: 5000, 
            timeoutMsg: 'Element not visible' 
        });
        await browser.pause(5000);


        // Capture the initial state of the element and its count
        const initialElementText = await elementToDelete.getText();
        const initialElementCount = await $$('#__item0-__component0---main--suppliersTable-1').length;

        // Step 5: Find and click the delete button to open confirmation modal
        const deleteButton = await $('#__button6-__component0---main--suppliersTable-2-inner');
        await deleteButton.click();

        // Step 6: Find and click the cancel button in the confirmation modal
        const cancelDeleteButton = await $('#__button11');
        await cancelDeleteButton.waitForExist({ 
            timeout: 5000, 
            timeoutMsg: 'Cancel button not found' 
        });
        await cancelDeleteButton.click();
        await browser.pause(5000);


        // Step 7: Verify that the element remains unchanged
        // Check element count
        const finalElementCount = await $$('#__item0-__component0---main--suppliersTable-1').length;
        expect(finalElementCount).toBe(initialElementCount);

        // Check the specific element still exists with the same text
        const remainingElement = await $('#__item0-__component0---main--suppliersTable-1');
        const finalElementText = await remainingElement.getText();
        expect(finalElementText).toBe(initialElementText);

        // Optional: Additional logging for debugging
        console.log('Initial Element Count:', initialElementCount);
        console.log('Final Element Count:', finalElementCount);
        console.log('Initial Element Text:', initialElementText);
        console.log('Final Element Text:', finalElementText);
    });
});
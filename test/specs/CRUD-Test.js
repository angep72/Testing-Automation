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
        const addButton = await $('#__button0-BDI-content');
        await addButton.click();
        await browser.pause(5000);
        const ID = await $('#__component0---main--creating-id-inner');
        await ID.setValue('134');
        const name = await $('#__component0---main--creating-name-inner');
        await name.setValue('John Doe');
        const email= await $('#__component0---main--creating-email-inner');
        await email.setValue('g@alustudent.com');
        const city = await $('#__component0---main--creating-city-inner');
        await city.setValue('New York');
        const occupation = await $('#__component0---main--creating-occupation-inner');
        await occupation.setValue('Doctor');
        await browser.pause(5000);
        const saveBUtton = await $('#__button4-inner');
        await saveBUtton.click();
        await browser.pause(2000);
    });
    it('should delete the product', async () => {
        // to delete the product
        const addButton = await $('#__button3-__component0---main--suppliers-0-inner');
        await addButton.click();
        const confirmButton = await $('#__button8-content');
        await confirmButton.click();
        await browser.pause(5000);
        
    });
    it('should update the products', async () => {
        const updateButton = await $('#__button2-__component0---main--suppliers-3-inner');
        await updateButton.click();
        const updateID = await $("#__component0---main--updating-id-inner")
        await updateID.setValue('134');
        const saveUpdated = await $('#__button6-inner');
            await saveUpdated.click();
        await browser.pause(5000);

    })
});
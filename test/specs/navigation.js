describe('for navigating to different pages in my application ', () => {
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
        await browser.pause(5000);

        //step 3 navigating on different pages 
        const deleteButton = await $('#__button0-BDI-content');
        await deleteButton.click();
        await browser.pause(5000);
        const secondButton = await $('#__component0---home--employeeListBtn-BDI-content');
        await secondButton.click();
        await browser.pause(5000);
        const thirdButton = await $('#__item2-__component0---employeeList--employeeList-0');
        await thirdButton.click();
        await browser.pause(5000);
        const fourButton = await $('#__component0---employeeDetail--employeePage-navButton-inner');
        await fourButton.click();
        await browser.pause(5000);
        const fifthButton = await $('#__component0---employeeList--employeeListPage-navButton-inner');
        await fifthButton.click();
        await browser.pause(5000);
        const sevenButton = await $('#__component0---home--validation-inner');
         await sevenButton.click();
         await browser.pause(5000);
         const EithButton = await $('#__component0---validate--openDialog-inner');
         await EithButton.click();
         await browser.pause(5000);
         const NineButton = await $('#__component0---validate--submitBtn-inner');
         await NineButton.click();
         console.log("as you can see we need in put validation")
         const nameInput = await $('#__component0---validate--nameInput-inner'); 
         await nameInput.setValue('John Doe');
 
         // 5. Fill in the "Email" field
         const emailInput = await $('#__component0---validate--emailInput-inner'); 
         await emailInput.setValue('johndoe@example.com');

         const ageInput = await $('#__component0---validate--ageInput-inner');
         await ageInput.setValue('54');
 
 
         // 6. Submit the form by clicking the submit button
         const submitButton = await $('#__component0---validate--submitBtn-inner'); 
         await submitButton.click();
 
         // 7. Optionally, wait for a success message or other verification of submission
         const successMessage = await $('#__success0-header-BarPH'); 
         await successMessage.waitForDisplayed({ timeout: 5000 });
         await browser.pause(5000);

         const clickOk =await $('#__mbox-btn-0-inner');
         await clickOk.click();
         await browser.pause(5000);
          
         const backHome =await $('#__component0---validate--validationpage-navButton-inner');
         await backHome.click();
         await browser.pause(5000);       
         
         const backToMain = await $('#__page1-navButton-inner');
         await backToMain.click();
         await browser.pause(5000);

    });
});
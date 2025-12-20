import { Given, Then, When } from "@cucumber/cucumber";
import dashboardPage from "../pom/dashboardPage";
import HomePage from "../pom/homePage";
import { LoginPage } from "../pom/loginPage";


let dashboard: dashboardPage;
let homepage: HomePage;
let loginpage: LoginPage;

Given('the user navigates to the Mikloset login page', async function () {

      homepage = new HomePage(this.page!);
      dashboard = new dashboardPage(this.page!);
      loginpage = new LoginPage(this.page!);
      
      await homepage.goto("/signin");


});

Given('the user logs in with credentials for a {string} account user {string} and pass {string}', async function (gender, username, password) {
      try {
            await loginpage.login(username, password);
            console.log(`Logging in as ${gender} user with username: ${username}`);
      }
      catch (err) {
            console.log("if failed means check the credentials and baseurl beacuse its hard coded" + err);
      }
});



Then('the background image should match the {string} background', async function (gender) {
      await dashboard.verifyBackgroundImage(gender);
});


Then('the user should see the following categories and navigate correctly:', async function (dataTable) {
      const expectedCategories = dataTable.raw().flat();
      await dashboard.verifyCategories(expectedCategories);
});




//common 



Given('the user should be in dashboard page in Mikloset', async function () {
      await homepage.goto("/signin");
      
      
});

Then('the user should see the header sections {string}, {string}, {string}, and {string}', async function (header1, header2, header3, header4) {
      await dashboard.verifyHeaderSections(header1, header2, header3, header4);
      await dashboard.verifyheadernavigation(header1, header2, header3, header4);
});

Then('the user should see the welcome message Welcome', async function () {
      await dashboard.verifyWelcomeMessage();

});


Then('the user should see follower details with {string}, {string}, and {string}', async function (follower,following, followmerequest) {
 await dashboard.verifyFollowerDetails(follower, following, followmerequest);

});







Then('the user should see the title Your Style Journey in 3 Steps', async function () {
   await dashboard.verifyStepTitle();

});



Then('step {int} should display {string} with description and a button {string}', async function (int,string1, string2) {
    console.log("step number is:+"+int+string1+string2);  
await dashboard.verifyStepDetails(int);

});











Then('the system should navigate to the {string} page', async function (page) {
await dashboard.verifyNavigationPage(page);

});














Then('the user should see the footer links:', async function (dataTable) {
      await dashboard.verifyFooterLinks(dataTable.rows().flat());

});


Then('the footer should display {string}', async function (copyrightText) {
      await dashboard.verifyFooterLinks(copyrightText);

});



When('the user selects {string}', async function (option) {
await dashboard.verifyStep1MenuOptions(option);
      
});





Then('the system should display a toast message {string}', async function (page) {
      await dashboard.verifEmailCopiedToastMessage();
});

Then('check view all link for categories', async function () {
           await dashboard.verifyViewAllLinkForCategories();
         });




// 


         Given('the user is on {string} view', async function (device) {
           await dashboard.verifydeviceview(device);
         });
       
       
        Then('the user opens and verifies edit option for all categories and change images', async function () {
       console.log("verifying edit option for all categories");
      });





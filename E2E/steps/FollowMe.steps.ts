import { Given, Then, When } from "../pageFixture/page.fIxture";



Given('user logs in with sender account', async ({dashboardPage}) => {
    dashboardPage.dashboardPage(1);
 console.log("logged in with sender account");

});

Given('user navigates to Follow Me page', async ({FollowMePage}) => {
 FollowMePage.navigateToFollowMePage();
 console.log("navigated to Follow Me page");
});

Given('user clicks on Find Creators tab', async ({FollowMePage}) => {
FollowMePage.clickOnFindCreatorsTab();
console.log("clicked on Find Creators tab");

});


When('user searches for a user', async ({}) => {
    


});

When('user sends follow request', async ({}) => {

});

Then('follow request should be sent successfully', async ({}) => {

});

Then('follow request sent notification should be displayed', async ({}) => {

});

When('user opens Mailinator application', async ({}) => {

});

When('user enters receiver Mailinator inbox', async ({}) => {

});

When('user opens follow request email', async ({}) => {

});

Then('follow request email should be displayed correctly', async ({}) => {

});


When('user clicks follow request action button from email', async ({}) => {

});

Then('a new browser tab should be opened', async ({}) => {

});

Then('user should be navigated to follow request page', async ({}) => {

});

When('user logs in with receiver account in new tab', async ({}) => {

});

Then('follow request should be visible in follow requests list', async ({}) => {

});

Given('user logs in with receiver account', async ({}) => {

});

When('user accepts the follow request', async ({}) => {

});

Then('follow request accepted notification should be displayed', async ({}) => {

});

Then('user should be added to followers list', async ({}) => {

});

When('user enters sender Mailinator inbox', async ({}) => {

});

When('user opens follow request accepted email', async ({}) => {

});

Then('follow request accepted email should be displayed correctly', async ({}) => {

});

When('user clicks view profile button from email', async ({}) => {

});

Then('user should be navigated to user profile page', async ({}) => {

});

When('user clicks on Followers tab', async ({}) => {

});

Then('followers list should be displayed', async ({}) => {

});

Then('followers count should match followers card count', async ({}) => {

});

When('user clicks on a user name from followers list', async ({}) => {

});

Then('user should be navigated to selected user profile', async ({}) => {

});

Then('curation section should be visible', async ({}) => {

});
Then('if curation is not available no curation available message should be displayed', async ({}) => {

});

When('user clicks on Following button from profile', async ({}) => {

});

Then('following page or slide should be displayed', async ({}) => {

});

When('user notes a user name from followers list', async ({}) => {

});

When('user searches using noted user name', async ({}) => {

});

Then('searched user should be displayed', async ({}) => {

});

When('user searches using a random name', async ({}) => {

});

Then('no results found message should be displayed', async ({}) => {

});

When('user clicks on Following tab', async ({}) => {

});

When('user clicks on Follow Requests tab', async ({}) => {

});
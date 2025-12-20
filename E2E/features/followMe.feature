Feature: Follow Me Page Validation with Mailinator End to End Flow

Scenario: Send follow request and validate via Mailinator and application
  Given user logs in with sender account
  And user navigates to Follow Me page
  When user searches for a user
  And user sends follow request
  Then follow request should be sent successfully
  And follow request sent notification should be displayed

  When user opens Mailinator application
  And user enters receiver Mailinator inbox
  And user opens follow request email
  Then follow request email should be displayed correctly

  When user clicks follow request action button from email
  Then a new browser tab should be opened
  And user should be navigated to follow request page

  When user logs in with receiver account in new tab
  Then follow request should be visible in follow requests list

Scenario: Accept follow request and validate via Mailinator and followers list
  Given user logs in with receiver account
  And user navigates to Follow Me page
  When user accepts the follow request
  Then follow request accepted notification should be displayed
  And user should be added to followers list

  When user opens Mailinator application
  And user enters sender Mailinator inbox
  And user opens follow request accepted email
  Then follow request accepted email should be displayed correctly

  When user clicks view profile button from email
  Then a new browser tab should be opened
  And user should be navigated to user profile page

  When user navigates to Follow Me page
  And user clicks on Followers tab
  Then followers list should be displayed
  And followers count should match followers card count

Scenario: Validate followers and following after follow accepted
  Given user logs in with receiver account
  And user navigates to Follow Me page
  When user clicks on Followers tab
  Then followers list should be displayed

  When user clicks on a user name from followers list
  Then user should be navigated to selected user profile
  And curation section should be visible
  And if curation is not available no curation available message should be displayed

  When user clicks on Following button from profile
  Then following page or slide should be displayed

Scenario: Validate search in followers following and follow requests
  Given user logs in with receiver account
  And user navigates to Follow Me page

  When user clicks on Followers tab
  And user notes a user name from followers list
  And user searches using noted user name
  Then searched user should be displayed

  When user searches using a random name
  Then no results found message should be displayed

  When user clicks on Following tab
  And user searches using a random name
  Then no results found message should be displayed

  When user clicks on Follow Requests tab
  And user searches using a random name
  Then no results found message should be displayed

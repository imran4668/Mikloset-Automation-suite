Feature: Home Page - Common UI and Functional Sections

  As a registered user
  I want to view my personalized home dashboard
  So that I can start my style journey by adding, styling, and sharing my looks

  
  Background:
    Given the user should be in dashboard page in Mikloset 

  @positive @loggedIn 
  Scenario: [loggedIn] Verify the Home Page displays user profile and navigation sections
  # Given the user should be in dashboard page in Mikloset 
    Then the user should see the header sections "add items", "style me", "curate me", and "follow me"
    And the user should see the welcome message Welcome
    And the user should see follower details with "Followers", "Following", and "Follow Request"

  @positive @loggedIn @error
  Scenario: [loggedIn] Verify 'Your Style Journey in 3 Steps' section is displayed correctly
  # Given the user should be in dashboard page in Mikloset 
    Then the user should see the title Your Style Journey in 3 Steps
    And step 1 should display "Add Items" with description and a button "Add Items"
    And step 2 should display "Style a Look" with description and a button "Style a Look"
    And step 3 should display "Share Your Looks" with description and a button "Share Your Looks"

  
  @positive @loggedIn @error
    Scenario:[loggedIn] Verify each "Add Items" menu option navigates correctly
    # Given the user should be in dashboard page in Mikloset 
    When step 1 should display "Add Items" with description and a button "Add Items"
    

    When the user selects "Forward Online Receipts"
    Then the system should display a toast message "Email copied to clipboard"

    When the user selects "Add Items from Digital Closet"
    Then the system should navigate to the "autoscanreceipts" page

    When the user selects "Upload Item Image/URL"
    Then the system should navigate to the "uploadfile" page

  @positive @loggedIn 
  Scenario: Verify footer links are displayed correctly
  # Given the user should be in dashboard page in Mikloset 
    Then the user should see the footer links:
      | About Us                                        |
      | Contact Us                                      |
      | FAQ                                             |
      | Privacy Policy                                  |
      | Terms & Conditions                              |
      | Don't Sell/Share My Info (California Only)      |
      | Limit use of personal information (California Only) |
    And the footer should display "2025 FashionForwardInnovations, LLC. All rights reserved."



  

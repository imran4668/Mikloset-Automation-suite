Feature: Home Page - Gender Based UI and Category Verification

  As a registered user with a specific gender
  I want the Home page to show gender-specific content
  So that my browsing experience matches my profile preferences

  Background:
    Given the user navigates to the Mikloset login page

  @male
  Scenario: Verify Home page for Male user
    Given the user logs in with credentials for a "male" account user "imrans" and pass "Mikloset@123"
    Then the background image should match the "male" background
    And the user should see the following categories and navigate correctly:
      | Accessories   |
      | Activewear    |
      | Beachwear     |
      | Beauty        |
      | Jeans         |
      | Miscellaneous |
      | Outerwear     |
      | Pants         |
      | Shirts        |
      | Shoes         |
      | Shorts        |
      | Suits         |
      And check view all link for categories
    # And the user should see the header sections "add your style", "style me", "curate me", and "follow me"

  @female
  Scenario: Verify Home page for Female user
    Given the user logs in with credentials for a "female" account user "tester500" and pass "Tester500!"
    Then the background image should match the "female" background
    And the user should see the following categories and navigate correctly:
      | Accessories   |
      | Activewear    |
      | Beachwear     |
      | Beauty        |
      | Dresses       |
      | Handbags      |
      | Jeans         |
      | Jumpsuit      |
      | Loungewear    |
      | Miscellaneous |
      | Outerwear     |
      | Pants         |
      | Shoes         |
      | Shorts        |
      | Skirts        |
      | Tops          |
      And check view all link for categories
    # And the user should see the header sections "add your style", "style me", "curate me", and "follow me"

  @genderNeutral
  Scenario: Verify Home page for Gender Neutral user
    Given the user logs in with credentials for a "gender neutral" account user "neu_qa" and pass "Mikloset@123"
    Then the background image should match the "neutral" background
    And the user should see the following categories and navigate correctly:
      | Accessories   |
      | Activewear    |
      | Beachwear     |
      | Beauty        |
      | Dresses       |
      | Handbags      |
      | Jeans         |
      | Loungewear    |
      | Miscellaneous |
      | Outerwear     |
      | Pants         |
      | Shirts        |
      | Shoes         |
      | Shorts        |
      | Skirts        |
      | Tops          |
      And check view all link for categories
    # And the user should see the header sections "add your style", "style me", "curate me", and "follow me"


 @editOption @fail
  Scenario Outline: Verify Edit option for all categories across user types and devices 
    Given the user logs in with credentials for a "<gender>" account user "<username>" and pass "<password>"
    And the user is on "<device>" view
    Then the user opens and verifies edit option for all categories and change images
   

  Examples:
    | gender          | username   | password      | device   |
    | male            | imrans     | Mikloset@123  | desktop  |
    # | male            | imrans     | Mikloset@123  | mobile   |
    # | female          | tester500  | Tester500!    | desktop  |
    # | female          | tester500  | Tester500!    | mobile   |
    # | gender neutral  | neu_qa     | Mikloset@123  | desktop  |
    # | gender neutral  | neu_qa     | Mikloset@123  | mobile   |
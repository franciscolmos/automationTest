Feature: Google Searching

Scenario: Search from the search bar produces correct links
Given A web browser is at the Google home page
When The user enters "gato" into the search bar
Then Links releated to "gato" are shown on the results page
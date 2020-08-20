const homePage = require('../../pages/home')
/**
 * @param { String } keyword keyword to search
 * @param { object } inputField WebdriverIo input field element
 * @param { object } submitButton WebdriverIo submit button element
 */

 module.exports = function search(keyword){
     homePage.searchField.waitForDisplayed(5000)
     homePage.searchField.click()
     homePage.searchField.setValue(keyword)
     homePage.searchButton.waitForDisplayed(5000)
     homePage.searchButton.click()
 }
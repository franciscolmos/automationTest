const homePage = require('../../pages/home')
/**Navigate to url
 * @param { String } url URL to load
*/

module.exports = function goToURL(url){
    browser.url(homePage.url)
}
let  assert  = require('assert')
const searchResultsLinks = require ('../../pages/searchResult')
/**
 * @param { Array.Object } links List of WebdriverIo elements results from search
 * @param { String } keyword Search keyword
 */

 module.exports = function verifySearchResults(keyword){
    searchResultsLinks.searchResutsLinks.forEach(link => {
        const linkText = link.getText().toLowerCase()
        if(linkText){
            assert(
                linkText.includes(keyword),
                `Link does not include ${keyword}`
            )
        }
    })
 }
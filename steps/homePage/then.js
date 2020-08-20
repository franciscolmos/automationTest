const { Then } = require('cucumber')
const googleSearch = require('../../support/assertions/verifySearchResult')


Then(/^Links releated to "(.*)" are shown on the results page$/, keyword => {
    googleSearch(keyword)
})
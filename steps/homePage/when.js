const { When } = require('cucumber')
const search = require('../../support/actions/search')

When(/^The user enters "(.*)" into the search bar$/, keyword => {
    search(keyword)
})
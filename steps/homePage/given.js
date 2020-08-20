const { Given } = require("cucumber");
const goToURL = require('../../support/actions/goToUrl')

Given("A web browser is at the Google home page", () => {
    goToURL("/");
})
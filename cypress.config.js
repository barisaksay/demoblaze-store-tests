const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https://www.demoblaze.com/index.html",
    watchForFileChanges: false
  },
})
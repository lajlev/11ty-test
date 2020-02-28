module.exports = config => {

  config.addCollection('products', collection => {
    return collection.getFilteredByGlob('src/site/products/*.md')    
  })

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "views"
    },
    templateFormats: ["html", "md"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  }
}
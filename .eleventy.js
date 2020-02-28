module.exports = config => {

  config.setDataDeepMerge(true);
  
  config.addFilter("starwarsify", value => { 
    var value = value.replace(/Luke/g, 'Lillefar 💪')
    var value = value.replace(/Republic/g, 'Republic 👺')
    var value = value.replace(/peace/g, 'peace ✌')
		return value;
  });
  
  config.addCollection('products', collection => {
    return collection.getFilteredByGlob('src/site/products/*.md')    
  })

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_views",
      data: "_data"
    },
    templateFormats: ["html", "md"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    pathPrefix: "/11ty-test/"
  }
}
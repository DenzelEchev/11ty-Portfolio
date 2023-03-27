const sass = require("sass")

module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("src/assets/")
    eleventyConfig.addTemplateFormats("scss");
    eleventyConfig.addCollection('post', function(collectionApi) {
        return collectionApi.getFilteredByGlob('src/blog/posts/**/*.md')
    })

    eleventyConfig.addExtension("scss", {
        outputFileExtension: "css",

        compile: async function(inputContent) {
            let result = sass.compileString(inputContent);

            return async (data) => {
                return result.css
            }
        }
    })

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    }
}
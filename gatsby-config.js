const { isNil  } = require('lodash')
const mapPagesUrls = {
	  index: '/',
	  intro: 'intro/overview/'
}

const path = require('path');
const themeOptions = require("./theme-options.js");

module.exports = {
  pathPrefix: '/docs/apollo-server',
  siteMetadata: {
      siteTitle: `Railflow Docs`,
      defaultTitle: `Railflow Docs`,
      siteName: 'Railflow Docs',
      siteTitleShort: `Railflow Docs`,
      siteDescription: `Documentation for Railflow - TestRail Integration solutions for Jenkins, Bamboo, TeamCity, NPM, Gitlab, CircleCI, TravisCI, Drone.`,
      siteUrl: `https://docs.railflow.io/documentation`,
      siteAuthor: ``,
      siteImage: '',
      siteLanguage: `en`,
      themeColor: `#8257E6`,
      basePath: ``,
  },
  plugins: [
  {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        languages: ['en'],
        type: 'MarkdownRemark',
        fields: [
          {
            name: 'title',
            indexed: true,
            resolver: 'frontmatter.title',
            attributes: {
              encode: 'balance',
              tokenize: 'strict',
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: 'description',
            indexed: true,
            resolver: 'frontmatter.description',
            attributes: {
              encode: 'balance',
              tokenize: 'strict',
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: 'url',
            indexed: false,
            resolver: 'fields.slug',
            store: true,
          },
        ],
      },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: { name: `images`,
            path: path.join(__dirname, `src`, `images`),
        },
    },
	  /**
	{
		resolve: 'gatsby-plugin-pdf',
		options: {
			paths: ['/', '/terms/terms-of-use/'],
			outputPath: '/public/exports',
		},
	}
	  
	{
		resolve: 'gatsby-plugin-pdf',
		options: {
			paths: ['/', '/terms/terms-of-use/'],
			outputPath: '/public/exports',
		},
	},**/
  
	{
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
      },
    },
	'gatsby-plugin-antd',
    `gatsby-plugin-offline`,
	`gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        basePath: `/docs`,
        contentDir: '/src/content',
        siteName: 'Railflow Docs',
        description: "Documentation for Railflow - TestRail Integration solutions for Jenkins, Bamboo, TeamCity, NPM, Gitlab, CircleCI, TravisCI, Drone.",
        algoliaApiKey: "4b32675294f67943cf8c3c5e2ceb7cad",
        algoliaIndexName: "railflow",
        sidebarCategories: {
          'Getting Started': [
            'intro/overview'
          ],
          'Railflow CLI':[
            'cli/overview',
            'cli/railflow-npm'
        ],
          'CICD Apps': [
              'cicd/overview',
              'cicd/jenkins',
              'cicd/teamcity',
              'cicd/gitlab',
              'cicd/circleci',
              'cicd/travisci',
              'cicd/github'
          ],
          'Testing Frameworks': [
            'frameworks/overview',
            'frameworks/testng',
            'frameworks/junit',
            'frameworks/pytest'
        ],
          'Testing Tools': [
            'tools/overview',
            'tools/readyapi',
            'tools/postman'
        ],
          'Release Notes':[
              'changelog/npm',
              'changelog/jenkins',
              'changelog/teamcity',
              'changelog/readyapi'
          ],
          'Terms of Use':[
              'terms/terms-of-use',
              'terms/privacy-policy',
              'terms/evaluation-agreement'
          ],
          'FAQ': [
              'faq/jenkins',
              'faq/teamcity',
              'faq/railflow-cli',
              'faq/licensing'
          ],
          'Customer Support': [
              '[User Forums](https://forums.railflow.io/)',
              '[Customer Support](https://support.railflow.io/)',
              '[Chat with us on Slack](https://support.railflow.io/)'
          ],
        }
      }
    }
  ]
};

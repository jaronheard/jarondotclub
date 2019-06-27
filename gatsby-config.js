const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

const {
  firebase_type,
  firebase_project_id,
  firebase_private_key_id,
  firebase_private_key,
  firebase_client_email,
  firebase_client_id,
  firebase_auth_uri,
  firebase_token_uri,
  firebase_auth_provider_x509_cert_url,
  firebase_client_x509_cert_url,
} = process.env

const firebaseAuth = {
  type: firebase_type,
  project_id: firebase_project_id,
  private_key_id: firebase_private_key_id,
  private_key: firebase_private_key.replace(/\\n/g, "\n"),
  client_email: firebase_client_email,
  client_id: firebase_client_id,
  auth_uri: firebase_auth_uri,
  token_uri: firebase_token_uri,
  auth_provider_x509_cert_url: firebase_auth_provider_x509_cert_url,
  client_x509_cert_url: firebase_client_x509_cert_url,
}

console.log(firebaseAuth)

module.exports = {
  siteMetadata: {
    title: `🛹jaronDOTclub🛹`,
    author: `Jaron Heard`,
    description: `INTERNET`,
    siteUrl: `https://dazzling-newton-967394.netlify.com/`,
    social: {
      twitter: `jaronheard`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hack Oregon Weekly Updates`,
        short_name: `Weekly updates`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-firebase`,
      options: {
        // point to the firebase private key downloaded
        credential: firebaseAuth,

        // your firebase database root url
        databaseURL: "https://jarondotclub.firebaseio.com/",

        // you can have multiple "types" that point to different paths
        types: [
          {
            type: "posts",
            path: "posts",
          },
        ],
      },
    },
  ],
}

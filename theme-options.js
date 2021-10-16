const navConfig = {
    'Railflow Basics': {
      category: 'Core',
      url: 'https://www.apollographql.com/docs',
      description:
        'Learn about each part of the Railflow platform and how they all work together.',
      omitLandingPage: true
    },
    'Railflow Client (React)': {
      category: 'Railflow Client',
      shortName: 'React / JS',
      url: 'https://www.apollographql.com/docs/react',
      description:
        "Manage the entirety of your React app's state and seamlessly execute GraphQL operations."
    },
    'Railflow Client (iOS)': {
      category: 'Railflow Client',
      shortName: 'iOS',
      url: 'https://railflow.io',
      description:
        "Manage the entirety of your iOS app's state and seamlessly execute GraphQL operations."
    },
    'Railflow Client (Android)': {
      category: 'Railflow Client',
      shortName: 'Android',
      url: 'https://railflow.io',
      description:
        "Manage the entirety of your Android app's state and seamlessly execute GraphQL operations."
    },
    'Railflow Server': {
      category: 'Backend',
      url: 'https://railflow.io',
      description:
        'Configure a production-ready GraphQL server to fetch and combine data from multiple sources.'
    },
    'Railflow Federation': {
      category: 'Backend',
      url: 'https://railflow.io',
      description: 'Implement a single data graph across multiple services.'
    },
    'Railflow Studio': {
      category: 'Tools',
      url: 'https://railflow.io',
      description:
        'Build your graph with your team, evolve it safely, and keep it running smoothly.'
    }
  };

  const footerNavConfig = {
    Blog: {
      href: 'https://railflow.io',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    'Raiflow Docs': {
      href: 'https://railflow.io',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  };

  const titleFont = encodeURIComponent('Source Sans Pro');
  const shareImageConfig = {
    titleFont,
    titleFontSize: 80,
    titleExtraConfig: '_bold',
    taglineFont: titleFont,
    textColor: 'FFFFFF',
    textLeftOffset: 80,
    textAreaWidth: 1120,
    cloudName: 'railflow_apollo',
    imagePublicID: 'apollo-docs-template2_dohzxt'
  };

  module.exports = {
    siteName: 'Railflow Docs',
    pageTitle: 'Railflow Docs',
    menuTitle: 'Railflow Docs',
    gaTrackingId: 'UA-74643563-13',
    //algoliaApiKey: '4b32675294f67943cf8c3c5e2ceb7cad',
    //algoliaIndexName: 'railflow',
    baseUrl: 'https://docs.railflow.io',
    twitterHandle: 'railflow_apollo',
    youtubeUrl: 'https://www.youtube.com/channel/UC0pEW_GOrMJ23l8QcrGdKSw',
    logoLink: 'https://docs.railflow.io',
    navConfig,
    footerNavConfig,
    ffWidgetId: '3131c43c-bfb5-44e6-9a72-b4094f7ec028',
    shareImageConfig
  };

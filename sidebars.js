/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  /*tutorialSidebar: ['tutorial/getting-started', 'tutorial/learning-path'],
  docsSidebar: ['doc/git', 'doc/build'],
  sampleSidebar: ['samples/sample-HLS', 'samples/sample-RTMP'],*/

  docsSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: ['gettingStarted/build', 'gettingStarted/sampleRtmp', 'gettingStarted/log', , 'gettingStarted/deploy'],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: ['guides/Forward', 'guides/Ingest', 'guides/Snapshot'],
    },
    {
      type: 'category',
      label: 'Advanced Guides',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Cluster Guides',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'advancedGuides/clusterGuides/EdgeClusterFLV',
            'advancedGuides/clusterGuides/EdgeClusterRTMP',
            'advancedGuides/clusterGuides/OriginCluster',
          ],
        },
        {
          type: 'category',
          label: 'Integration Guides',
          link: {
            type: 'generated-index',
          },
          collapsed: true,
          items: [
            'advancedGuides/integrationGuides/HttpApi',
            'advancedGuides/integrationGuides/HttpCallback',
            'advancedGuides/integrationGuides/LinuxService',
            'advancedGuides/integrationGuides/SpecialControl',
          ],
        },
      ],
    },
  ],
  communitySidebar: [
    'community/Support',
    'community/Team',
    'community/AwesomeResources',
    'community/Contributing',
    'community/Release',
    'community/Changelog',
    'community/Showcase',
    'community/Chat',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;

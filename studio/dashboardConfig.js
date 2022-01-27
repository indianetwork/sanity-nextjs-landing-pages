export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f2bfb5cfbbe626ebb65608',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-udt6g6xf',
                  apiId: 'dce46864-8ff0-4dd3-ba0e-286e3d5bd4e8'
                },
                {
                  buildHookId: '61f2bfb5775a8f2e5b92d911',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jdezrjno',
                  apiId: '47e5579d-eff5-444d-8bbb-b487414c21b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/indianetwork/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jdezrjno.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

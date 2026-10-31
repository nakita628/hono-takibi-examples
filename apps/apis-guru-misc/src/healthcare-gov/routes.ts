import { createRoute, z } from '@hono/zod-openapi'

const ArticlesListSchema = z
  .object({
    articles: z
      .array(
        z
          .object({
            bite: z.string().exactOptional(),
            categories: z.array(z.array(z.string())).exactOptional(),
            content: z.string().exactOptional(),
            date: z.string().exactOptional(),
            excerpt: z.string().exactOptional(),
            featured: z.boolean().exactOptional(),
            id: z.string().exactOptional(),
            lang: z.string().exactOptional(),
            layout: z.string().exactOptional(),
            'meta-description': z.string().exactOptional(),
            'meta-title': z.string().exactOptional(),
            path: z.string().exactOptional(),
            published: z.boolean().exactOptional(),
            related: z.array(z.array(z.string())).exactOptional(),
            'seo-keywords': z.string().exactOptional(),
            sort: z.number().exactOptional(),
            tags: z.array(z.array(z.any())).exactOptional(),
            title: z.string().exactOptional(),
            'title-short': z.string().exactOptional(),
            topics: z.array(z.array(z.string())).exactOptional(),
            url: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ArticlesList')

const BlogListSchema = z
  .object({
    blog: z
      .array(
        z.array(
          z
            .object({
              categories: z.array(z.array(z.string())).exactOptional(),
              content: z.string().exactOptional(),
              date: z.string().exactOptional(),
              lang: z.string().exactOptional(),
              layout: z.string().exactOptional(),
              'meta-description': z.string().exactOptional(),
              'meta-title': z.string().exactOptional(),
              published: z.boolean().exactOptional(),
              'seo-keywords': z.string().exactOptional(),
              sort: z.number().exactOptional(),
              tags: z.array(z.array(z.any())).exactOptional(),
              title: z.string().exactOptional(),
              topics: z.array(z.array(z.string())).exactOptional(),
              url: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        ),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlogList')

const BlogPageSchema = z
  .object({
    categories: z.array(z.array(z.string())).exactOptional(),
    content: z.string().exactOptional(),
    date: z.string().exactOptional(),
    excerpt: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lang: z.string().exactOptional(),
    layout: z.string().exactOptional(),
    'meta-description': z.string().exactOptional(),
    'meta-title': z.string().exactOptional(),
    path: z.string().exactOptional(),
    published: z.boolean().exactOptional(),
    'seo-keywords': z.string().exactOptional(),
    sort: z.number().exactOptional(),
    tags: z.array(z.array(z.any())).exactOptional(),
    title: z.string().exactOptional(),
    topics: z.array(z.array(z.string())).exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlogPage')

const GlossaryListSchema = z
  .object({
    glossary: z
      .array(
        z
          .object({
            categories: z.array(z.string()).exactOptional(),
            content: z.string().exactOptional(),
            date: z.string().exactOptional(),
            excerpt: z.string().exactOptional(),
            id: z.string().exactOptional(),
            lang: z.string().exactOptional(),
            layout: z.string().exactOptional(),
            path: z.string().exactOptional(),
            published: z.boolean().exactOptional(),
            sort: z.number().exactOptional(),
            tags: z.array(z.string()).exactOptional(),
            title: z.string().exactOptional(),
            url: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GlossaryList')

const GlossaryPageSchema = z
  .object({
    categories: z.array(z.string()).exactOptional(),
    content: z.string().exactOptional(),
    date: z.string().exactOptional(),
    excerpt: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lang: z.string().exactOptional(),
    layout: z.string().exactOptional(),
    path: z.string().exactOptional(),
    published: z.boolean().exactOptional(),
    sort: z.number().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    title: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GlossaryPage')

const PageSchema = z
  .object({
    categories: z.array(z.array(z.any())).exactOptional(),
    content: z.string().exactOptional(),
    date: z.string().exactOptional(),
    excerpt: z.string().exactOptional(),
    experience: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lang: z.string().exactOptional(),
    layout: z.string().exactOptional(),
    path: z.string().exactOptional(),
    published: z.boolean().exactOptional(),
    sort: z.number().exactOptional(),
    tags: z.array(z.array(z.any())).exactOptional(),
    title: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Page')

const QuestionPageSchema = z
  .object({
    categories: z.array(z.string()).exactOptional(),
    content: z.string().exactOptional(),
    date: z.string().exactOptional(),
    excerpt: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lang: z.string().exactOptional(),
    path: z.string().exactOptional(),
    published: z.boolean().exactOptional(),
    sort: z.number().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    title: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuestionPage')

const QuestionsListSchema = z
  .object({
    questions: z
      .array(
        z
          .object({
            categories: z.array(z.string()).exactOptional(),
            content: z.string().exactOptional(),
            date: z.string().exactOptional(),
            excerpt: z.string().exactOptional(),
            id: z.string().exactOptional(),
            lang: z.string().exactOptional(),
            path: z.string().exactOptional(),
            published: z.boolean().exactOptional(),
            sort: z.number().exactOptional(),
            tags: z.array(z.string()).exactOptional(),
            title: z.string().exactOptional(),
            url: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QuestionsList')

const StatePageSchema = z
  .object({
    categories: z.array(z.array(z.any())).exactOptional(),
    content: z.string().exactOptional(),
    date: z.string().exactOptional(),
    excerpt: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lang: z.string().exactOptional(),
    path: z.string().exactOptional(),
    sort: z.number().exactOptional(),
    stateurl: z.string().exactOptional(),
    tags: z.array(z.array(z.string())).exactOptional(),
    title: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatePage')

const StatesListSchema = z
  .object({
    states: z
      .array(
        z.array(
          z
            .object({
              categories: z.array(z.array(z.any())).exactOptional(),
              content: z.string().exactOptional(),
              date: z.string().exactOptional(),
              excerpt: z.string().exactOptional(),
              id: z.string().exactOptional(),
              lang: z.string().exactOptional(),
              path: z.string().exactOptional(),
              sort: z.number().exactOptional(),
              stateurl: z.string().exactOptional(),
              tags: z.array(z.array(z.string())).exactOptional(),
              title: z.string().exactOptional(),
              url: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        ),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StatesList')

const TopicsListSchema = z
  .object({
    topics: z
      .array(
        z
          .object({
            articleorder: z.array(z.array(z.string())).exactOptional(),
            categories: z.array(z.array(z.any())).exactOptional(),
            content: z.string().exactOptional(),
            date: z.string().exactOptional(),
            excerpt: z.string().exactOptional(),
            id: z.string().exactOptional(),
            lang: z.string().exactOptional(),
            layout: z.string().exactOptional(),
            'meta-description': z.string().exactOptional(),
            'meta-title': z.string().exactOptional(),
            order: z.number().exactOptional(),
            path: z.string().exactOptional(),
            published: z.boolean().exactOptional(),
            sort: z.number().exactOptional(),
            tags: z.array(z.array(z.string())).exactOptional(),
            title: z.string().exactOptional(),
            url: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TopicsList')

export const getApiArticlesMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/api/articles{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: ArticlesListSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getApiBlogMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/api/blog{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: BlogListSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getApiGlossaryMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/api/glossary{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: GlossaryListSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getApiQuestionsMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/api/questions{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: QuestionsListSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getApiStatesMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/api/states{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: StatesListSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getApiTopicsMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/api/topics{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TopicsListSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getBlogPageNameMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/blog/{pageName}{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
      pageName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/html': { schema: BlogPageSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getEsBlogPageNameMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/es/blog/{pageName}{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
      pageName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/html': { schema: BlogPageSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getEsGlossaryPageNameMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/es/glossary/{pageName}{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
      pageName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/html': { schema: GlossaryPageSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getEsQuestionPageNameMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/es/question/{pageName}{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
      pageName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: QuestionPageSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getEsPageNameMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/es/{pageName}{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
      pageName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/html': { schema: PageSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getEsStateNameMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/es/{stateName}{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
      stateName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'stateName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: StatePageSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getGlossaryPageNameMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/glossary/{pageName}{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
      pageName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/html': { schema: GlossaryPageSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getQuestionPageNameMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/question/{pageName}{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
      pageName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: QuestionPageSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getPageNameMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/{pageName}{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
      pageName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'pageName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/html': { schema: PageSchema } } },
    404: { description: 'Resource not found.' },
  },
})

export const getStateNameMediaTypeExtensionRoute = createRoute({
  method: 'get',
  path: '/{stateName}{mediaTypeExtension}',
  description: 'Returns pages content.',
  request: {
    params: z.object({
      mediaTypeExtension: z
        .literal('.json')
        .openapi({
          param: {
            description: 'Omiting the param causes html to be returned.',
            in: 'path',
            name: 'mediaTypeExtension',
            required: true,
            schema: { enum: ['.json'], type: 'string' },
          },
        }),
      stateName: z
        .string()
        .openapi({
          param: { in: 'path', name: 'stateName', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: StatePageSchema } } },
    404: { description: 'Resource not found.' },
  },
})

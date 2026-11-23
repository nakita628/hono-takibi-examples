type ArticlesList = {
  articles?:
    | {
        bite?: string | undefined
        categories?: string[][] | undefined
        content?: string | undefined
        date?: string | undefined
        excerpt?: string | undefined
        featured?: boolean | undefined
        id?: string | undefined
        lang?: string | undefined
        layout?: string | undefined
        'meta-description'?: string | undefined
        'meta-title'?: string | undefined
        path?: string | undefined
        published?: boolean | undefined
        related?: string[][] | undefined
        'seo-keywords'?: string | undefined
        sort?: number | undefined
        tags?: { [x: string]: unknown }[][] | undefined
        title?: string | undefined
        'title-short'?: string | undefined
        topics?: string[][] | undefined
        url?: string | undefined
      }[]
    | undefined
}
type BlogList = {
  blog?:
    | {
        categories?: string[][] | undefined
        content?: string | undefined
        date?: string | undefined
        lang?: string | undefined
        layout?: string | undefined
        'meta-description'?: string | undefined
        'meta-title'?: string | undefined
        published?: boolean | undefined
        'seo-keywords'?: string | undefined
        sort?: number | undefined
        tags?: { [x: string]: unknown }[][] | undefined
        title?: string | undefined
        topics?: string[][] | undefined
        url?: string | undefined
      }[][]
    | undefined
}
type GlossaryList = {
  glossary?:
    | {
        categories?: string[] | undefined
        content?: string | undefined
        date?: string | undefined
        excerpt?: string | undefined
        id?: string | undefined
        lang?: string | undefined
        layout?: string | undefined
        path?: string | undefined
        published?: boolean | undefined
        sort?: number | undefined
        tags?: string[] | undefined
        title?: string | undefined
        url?: string | undefined
      }[]
    | undefined
}
type QuestionsList = {
  questions?:
    | {
        categories?: string[] | undefined
        content?: string | undefined
        date?: string | undefined
        excerpt?: string | undefined
        id?: string | undefined
        lang?: string | undefined
        path?: string | undefined
        published?: boolean | undefined
        sort?: number | undefined
        tags?: string[] | undefined
        title?: string | undefined
        url?: string | undefined
      }[]
    | undefined
}
type StatesList = {
  states?:
    | {
        categories?: { [x: string]: unknown }[][] | undefined
        content?: string | undefined
        date?: string | undefined
        excerpt?: string | undefined
        id?: string | undefined
        lang?: string | undefined
        path?: string | undefined
        sort?: number | undefined
        stateurl?: string | undefined
        tags?: string[][] | undefined
        title?: string | undefined
        url?: string | undefined
      }[][]
    | undefined
}
type TopicsList = {
  topics?:
    | {
        articleorder?: string[][] | undefined
        categories?: { [x: string]: unknown }[][] | undefined
        content?: string | undefined
        date?: string | undefined
        excerpt?: string | undefined
        id?: string | undefined
        lang?: string | undefined
        layout?: string | undefined
        'meta-description'?: string | undefined
        'meta-title'?: string | undefined
        order?: number | undefined
        path?: string | undefined
        published?: boolean | undefined
        sort?: number | undefined
        tags?: string[][] | undefined
        title?: string | undefined
        url?: string | undefined
      }[]
    | undefined
}
type BlogPage = {
  categories?: string[][] | undefined
  content?: string | undefined
  date?: string | undefined
  excerpt?: string | undefined
  id?: string | undefined
  lang?: string | undefined
  layout?: string | undefined
  'meta-description'?: string | undefined
  'meta-title'?: string | undefined
  path?: string | undefined
  published?: boolean | undefined
  'seo-keywords'?: string | undefined
  sort?: number | undefined
  tags?: { [x: string]: unknown }[][] | undefined
  title?: string | undefined
  topics?: string[][] | undefined
  url?: string | undefined
}
type GlossaryPage = {
  categories?: string[] | undefined
  content?: string | undefined
  date?: string | undefined
  excerpt?: string | undefined
  id?: string | undefined
  lang?: string | undefined
  layout?: string | undefined
  path?: string | undefined
  published?: boolean | undefined
  sort?: number | undefined
  tags?: string[] | undefined
  title?: string | undefined
  url?: string | undefined
}
type QuestionPage = {
  categories?: string[] | undefined
  content?: string | undefined
  date?: string | undefined
  excerpt?: string | undefined
  id?: string | undefined
  lang?: string | undefined
  path?: string | undefined
  published?: boolean | undefined
  sort?: number | undefined
  tags?: string[] | undefined
  title?: string | undefined
  url?: string | undefined
}
type Page = {
  categories?: { [x: string]: unknown }[][] | undefined
  content?: string | undefined
  date?: string | undefined
  excerpt?: string | undefined
  experience?: string | undefined
  id?: string | undefined
  lang?: string | undefined
  layout?: string | undefined
  path?: string | undefined
  published?: boolean | undefined
  sort?: number | undefined
  tags?: { [x: string]: unknown }[][] | undefined
  title?: string | undefined
  url?: string | undefined
}
type StatePage = {
  categories?: { [x: string]: unknown }[][] | undefined
  content?: string | undefined
  date?: string | undefined
  excerpt?: string | undefined
  id?: string | undefined
  lang?: string | undefined
  path?: string | undefined
  sort?: number | undefined
  stateurl?: string | undefined
  tags?: string[][] | undefined
  title?: string | undefined
  url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/articles{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: ArticlesList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/blog{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: BlogList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/glossary{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: GlossaryList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/questions{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: QuestionsList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/states{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: StatesList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/topics{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: TopicsList
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json' } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/blog/:pageName{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: BlogPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/es/blog/:pageName{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: BlogPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/es/glossary/:pageName{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: GlossaryPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/es/question/:pageName{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: QuestionPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/es/:pageName{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: Page
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/es/:stateName{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json'; stateName: string } }
            output: StatePage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json'; stateName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/glossary/:pageName{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: GlossaryPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/question/:pageName{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: QuestionPage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/:pageName{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: Page
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json'; pageName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/:stateName{mediaTypeExtension}': {
      $get:
        | {
            input: { param: { mediaTypeExtension: '.json'; stateName: string } }
            output: StatePage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { mediaTypeExtension: '.json'; stateName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes

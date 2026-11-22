type Article = {
  link?: string | undefined
  pubdate?: string | undefined
  title?: string | undefined
}
type ContentProCompany = {
  companyName?: string | undefined
  description?: string | undefined
  employee?: string | undefined
  industry?: string | undefined
  linkedin?: string | undefined
  twitter?: string | undefined
  website?: string | undefined
}
type ContentProSnippets = {
  description?: string[] | undefined
  text?: string[] | undefined
  title?: string[] | undefined
}
type Snippet = {
  description?: string[] | undefined
  text?: string[] | undefined
  title?: string[] | undefined
}
type SimilarCompanySearch = {
  companyName?: string | undefined
  description?: string | undefined
  employee?: string | undefined
  industry?: string | undefined
  linkedin?: string | undefined
  snippets?: Snippet[] | undefined
  title?: string | undefined
  twitter?: string | undefined
  website?: string | undefined
}
type SimilarCompany = {
  companyName?: string | undefined
  description?: string | undefined
  employee?: string | undefined
  industry?: string | undefined
  linkedin?: string | undefined
  title?: string | undefined
  twitter?: string | undefined
  website?: string | undefined
}
type InputCompany = {
  companyName?: string | undefined
  country?: string | undefined
  employee?: string | undefined
  industry?: string | undefined
  linkedin?: string | undefined
  twitter?: string | undefined
  website?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/contentpro-search': {
      $get:
        | {
            input: { query: { terms: string } }
            output: {
              calls_per_month?: string | undefined
              count_remaining?: string | undefined
              data?:
                | {
                    article?: Article | undefined
                    company?: ContentProCompany | undefined
                    snippets?: ContentProSnippets | undefined
                  }[]
                | undefined
              renewal_date?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { terms: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { terms: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { terms: string } }; output: {}; outputFormat: string; status: 501 }
    }
  } & {
    '/contentpro-similar-text': {
      $post:
        | {
            input: { json: { text: string } }
            output: {
              calls_per_month?: string | undefined
              count_remaining?: string | undefined
              data?:
                | {
                    article?: Article | undefined
                    company?: ContentProCompany | undefined
                    snippets?: ContentProSnippets | undefined
                  }[]
                | undefined
              renewal_date?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: { text: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: { text: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: { text: string } }; output: {}; outputFormat: string; status: 501 }
    }
  } & {
    '/search': {
      $get:
        | {
            input: { query: { terms: string; page?: string | undefined } }
            output: {
              calls_per_month?: string | undefined
              companies?: SimilarCompanySearch[] | undefined
              count_remaining?: string | undefined
              renewal_date?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { terms: string; page?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { terms: string; page?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { terms: string; page?: string | undefined } }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  } & {
    '/similar': {
      $get:
        | {
            input: { query: { link: string; page?: string | undefined } }
            output: {
              calls_per_month?: string | undefined
              companies?: SimilarCompany[] | undefined
              count_remaining?: string | undefined
              input_company?: InputCompany | undefined
              renewal_date?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { link: string; page?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { link: string; page?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { link: string; page?: string | undefined } }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  },
  '/'
>
export default routes

type ValidationError = { loc: string[]; msg: string; type: string }
type HTTPValidationError = { detail?: ValidationError[] | undefined }
type SerpData = { query: string; website: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | { input: {}; output: { status?: boolean | undefined }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v1/crawl/:query': {
      $get:
        | {
            input: { param: { query: string } }
            output: {
              answer?: string | undefined
              results?: string[] | undefined
              total?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { query: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { query: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | { input: { param: { query: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/images/:query': {
      $get:
        | {
            input: { param: { query: string } }
            output: {
              answers?: string[] | undefined
              image_results?:
                | {
                    image?: { alt?: string | undefined; src?: string | undefined } | undefined
                    link?:
                      | {
                          domain?: string | undefined
                          href?: string | undefined
                          title?: string | undefined
                        }
                      | undefined
                  }[]
                | undefined
              results?: { [x: string]: unknown }[] | undefined
              total?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { query: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/news/:query': {
      $get:
        | {
            input: { param: { query: string } }
            output: {
              entries?:
                | {
                    guidislink?: string | undefined
                    id?: string | undefined
                    link?: string | undefined
                    links?: string | undefined
                    published?: string | undefined
                    published_parsed?: string | undefined
                    source?: string | undefined
                    sub_articles?: string | undefined
                    summary?: string | undefined
                    summary_detail?: string | undefined
                    title?: string | undefined
                    title_detail?: string | undefined
                  }[]
                | undefined
              feed?:
                | {
                    generator?: string | undefined
                    generator_detail?: string | undefined
                    language?: string | undefined
                    link?: string | undefined
                    links?: string | undefined
                    publisher?: string | undefined
                    publisher_detail?: string | undefined
                    rights?: string | undefined
                    rights_detail?: string | undefined
                    subtitle?: string | undefined
                    subtitle_detail?: string | undefined
                    title?: string | undefined
                    updated?: string | undefined
                    updated_parsed?: string | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { query: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { query: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | { input: { param: { query: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/search/:query': {
      $get:
        | {
            input: { param: { query: string } }
            output: {
              answer?: string | undefined
              results?:
                | {
                    description?: string | undefined
                    link?: string | undefined
                    title?: string | undefined
                  }[]
                | undefined
              total?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { query: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { query: string } }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | { input: { param: { query: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/v1/serp/': {
      $post:
        | {
            input: { json: SerpData }
            output: {
              position?: number | undefined
              query?: string | undefined
              searched_results?: number | undefined
              website?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SerpData }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { json: SerpData }
            output: HTTPValidationError
            outputFormat: 'json'
            status: 422
          }
        | { input: { json: SerpData }; output: {}; outputFormat: string; status: 429 }
    }
  },
  '/'
>
export default routes

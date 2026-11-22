type Doc = {
  _id?: string | undefined
  abstract?: string | undefined
  blog?: { [x: string]: unknown }[] | undefined
  byline?:
    | {
        organization?: string | undefined
        original?: string | undefined
        person?: { [x: string]: unknown }[] | undefined
      }
    | undefined
  document_type?: string | undefined
  headline?: { kicker?: string | undefined; main?: string | undefined } | undefined
  keywords?:
    | { name?: string | undefined; rank?: string | undefined; value?: string | undefined }
    | undefined
  lead_paragraph?: string | undefined
  multimedia?:
    | {
        caption?: string | undefined
        copyright?: string | undefined
        format?: string | undefined
        height?: number | undefined
        subtype?: string | undefined
        type?: string | undefined
        url?: string | undefined
        width?: number | undefined
      }[]
    | undefined
  news_desk?: string | undefined
  print_page?: string | undefined
  pub_date?: string | undefined
  section_name?: string | undefined
  slideshow_credits?: string | undefined
  snippet?: string | undefined
  source?: string | undefined
  subsection_name?: string | undefined
  type_of_material?: string | undefined
  web_url?: string | undefined
  word_count?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:year/:month.json': {
      $get: {
        input: { param: { year: number; month: number } }
        output: {
          response?:
            | {
                docs?: Doc[] | undefined
                meta?:
                  | {
                      hits?: number | undefined
                      offset?: number | undefined
                      time?: number | undefined
                    }
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

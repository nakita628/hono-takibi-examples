type Critic = {
  bio?: string | undefined
  display_name?: string | undefined
  multimedia?:
    | {
        resource?:
          | {
              credit?: string | undefined
              height?: number | undefined
              src?: string | undefined
              type?: string | undefined
              width?: number | undefined
            }
          | undefined
      }
    | undefined
  seo_name?: string | undefined
  sort_name?: string | undefined
  status?: string | undefined
}
type Movie = {
  byline?: string | undefined
  critics_pick?: number | undefined
  date_updated?: string | undefined
  display_title?: string | undefined
  headline?: string | undefined
  link?:
    | {
        suggested_link_text?: string | undefined
        type?: string | undefined
        url?: string | undefined
      }
    | undefined
  mpaa_rating?: string | undefined
  multimedia?:
    | {
        resource?:
          | {
              height?: number | undefined
              src?: string | undefined
              type?: string | undefined
              width?: number | undefined
            }
          | undefined
      }
    | undefined
  opening_date?: string | undefined
  publication_date?: string | undefined
  summary_short?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/critics/:resource-type.json': {
      $get: {
        input: { param: { 'resource-type': string } }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?: Critic[] | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reviews/search.json': {
      $get: {
        input: {
          query: {
            query?: string | undefined
            'critics-pick'?: 'Y' | 'N' | undefined
            reviewer?: string | undefined
            'publication-date'?: string | undefined
            'opening-date'?: string | undefined
            offset?: number | undefined
            order?: string | undefined
          }
        }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?: Movie[] | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reviews/:resource-type.json': {
      $get: {
        input: { param: { 'resource-type': 'all' | 'picks' } } & {
          query: {
            offset?: number | undefined
            order?: 'by-title' | 'by-publication-date' | 'by-opening-date' | undefined
          }
        }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?: Movie[] | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

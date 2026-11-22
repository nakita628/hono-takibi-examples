type Article = {
  abstract?: string | undefined
  blog_name?: string | undefined
  byline?: string | undefined
  created_date?: string | undefined
  des_facet?: string[] | undefined
  geo_facet?: string[] | undefined
  headline?: string | undefined
  item_type?: string | undefined
  kicker?: string | undefined
  material_type_facet?: string | undefined
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
  org_facet?: string | undefined
  per_facet?: string[] | undefined
  published_date?: string | undefined
  related_urls?:
    | { suggested_link_text?: string | undefined; url?: string | undefined }[]
    | undefined
  section?: string | undefined
  short_url?: string | undefined
  source?: string | undefined
  subsection?: string | undefined
  thumbnail_standard?: string | undefined
  title?: string | undefined
  updated_date?: string | undefined
  url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/content.json': {
      $get: {
        input: { query: { url: string } }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?: Article[] | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/content/:source/:section.json': {
      $get: {
        input: { param: { source: 'all' | 'nyt' | 'iht'; section: string } } & {
          query: { limit?: number | undefined; offset?: number | undefined }
        }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?: Article[] | undefined
          status?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/content/:source/:section/:time-period.json': {
      $get: {
        input: {
          param: { source: 'all' | 'nyt' | 'iht'; section: string; 'time-period': number }
        } & { query: { limit?: number | undefined; offset?: number | undefined } }
        output: {
          copyright?: string | undefined
          num_results?: number | undefined
          results?: Article[] | undefined
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

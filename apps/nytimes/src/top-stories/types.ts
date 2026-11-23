type Article = {
  abstract?: string | undefined
  byline?: string | undefined
  created_date?: string | undefined
  des_facet?: string[] | undefined
  geo_facet?: string[] | undefined
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
  org_facet?: string[] | undefined
  per_facet?: string[] | undefined
  published_date?: string | undefined
  related_urls?:
    | { suggested_link_text?: string | undefined; url?: string | undefined }[]
    | undefined
  section?: string | undefined
  short_url?: string | undefined
  subsection?: string | undefined
  thumbnail_standard?: string | undefined
  title?: string | undefined
  updated_date?: string | undefined
  url?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:section.{format}': {
      $get: {
        input: {
          param: {
            section:
              | 'home'
              | 'opinion'
              | 'world'
              | 'national'
              | 'politics'
              | 'upshot'
              | 'nyregion'
              | 'business'
              | 'technology'
              | 'science'
              | 'health'
              | 'sports'
              | 'arts'
              | 'books'
              | 'movies'
              | 'theater'
              | 'sundayreview'
              | 'fashion'
              | 'tmagazine'
              | 'food'
              | 'travel'
              | 'magazine'
              | 'realestate'
              | 'automobiles'
              | 'obituaries'
              | 'insider'
            format: 'json' | 'jsonp'
          }
        } & { query: { callback?: string | undefined } }
        output: { results?: Article[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

type Media = {
  account_id?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  max_downloads_allowed?: number | undefined
  media_size?: number | undefined
  metadata_primary?: string | undefined
  metadata_secondary?: string | undefined
  mime_type?: string | undefined
  original_file_name?: string | undefined
  public?: boolean | undefined
  store_id?: string | undefined
  time_created?: string | undefined
  time_last_updated?: string | undefined
  times_downloaded?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: {
        input: {
          query: {
            order?: 'ascending' | 'descending' | undefined
            page_index?: number | undefined
            page_size?: number | undefined
            start_time?: string | undefined
            end_time?: string | undefined
          }
        }
        output: {
          _embedded?: { media?: Media[] | undefined } | undefined
          _links?:
            | {
                first?: { href?: string | undefined } | undefined
                last?: { href?: string | undefined } | undefined
                self?: { href?: string | undefined } | undefined
              }
            | undefined
          count?: number | undefined
          page_index?: number | undefined
          page_size?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/:id': { $delete: { input: {}; output: {}; outputFormat: string; status: 204 } } } & {
    '/:id/info': {
      $get: { input: {}; output: Media; outputFormat: 'json'; status: 200 }
      $put: {
        input: {
          form: {
            description?: string | undefined
            max_downloads_allowed?: number | undefined
            metadata_primary?: string | undefined
            metadata_secondary?: string | undefined
            mime_type?: string | undefined
            public?: boolean | undefined
            title?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  },
  '/'
>
export default routes

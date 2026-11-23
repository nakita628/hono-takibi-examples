type SearchResponse = {
  '@context'?: { [x: string]: unknown } | undefined
  '@type'?: { [x: string]: unknown } | undefined
  itemListElement?: { [x: string]: unknown }[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/entities:search': {
      $get: {
        input: {
          query: {
            ids?: string[] | undefined
            indent?: boolean | undefined
            languages?: string[] | undefined
            limit?: number | undefined
            prefix?: boolean | undefined
            query?: string | undefined
            types?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

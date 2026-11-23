type Axis = { end?: number | undefined; start?: number | undefined; tag?: string | undefined }
type Webfont = {
  axes?: Axis[] | undefined
  category?: string | undefined
  family?: string | undefined
  files?: { [x: string]: string } | undefined
  kind?: string | undefined
  lastModified?: string | undefined
  menu?: string | undefined
  subsets?: string[] | undefined
  variants?: string[] | undefined
  version?: string | undefined
}
type WebfontList = { items?: Webfont[] | undefined; kind?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/webfonts': {
      $get: {
        input: {
          query: {
            capability?: ('CAPABILITY_UNSPECIFIED' | 'WOFF2' | 'VF')[] | undefined
            family?: string[] | undefined
            sort?:
              | 'SORT_UNDEFINED'
              | 'ALPHA'
              | 'DATE'
              | 'POPULARITY'
              | 'STYLE'
              | 'TRENDING'
              | undefined
            subset?: string | undefined
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
        output: WebfontList
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

type Organization = { organizationId?: string | undefined; organizationName?: string | undefined }
type CustomApp = {
  languageCode?: string | undefined
  organizations?: Organization[] | undefined
  packageName?: string | undefined
  title?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/playcustomapp/v1/accounts/:account/customApps': {
      $post: {
        input: { param: { account: string } } & {
          query: {
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
        } & { json: CustomApp }
        output: CustomApp
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

type SiteVerificationWebResourceGettokenRequest = {
  site?: { identifier?: string | undefined; type?: string | undefined } | undefined
  verificationMethod?: string | undefined
}
type SiteVerificationWebResourceGettokenResponse = {
  method?: string | undefined
  token?: string | undefined
}
type SiteVerificationWebResourceResource = {
  id?: string | undefined
  owners?: string[] | undefined
  site?: { identifier?: string | undefined; type?: string | undefined } | undefined
}
type SiteVerificationWebResourceListResponse = {
  items?: SiteVerificationWebResourceResource[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/token': {
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: SiteVerificationWebResourceGettokenRequest }
        output: SiteVerificationWebResourceGettokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webResource': {
      $get: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: SiteVerificationWebResourceListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            verificationMethod: string
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: SiteVerificationWebResourceResource }
        output: SiteVerificationWebResourceResource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webResource/:id': {
      $delete: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: SiteVerificationWebResourceResource
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: SiteVerificationWebResourceResource }
        output: SiteVerificationWebResourceResource
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: SiteVerificationWebResourceResource }
        output: SiteVerificationWebResourceResource
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

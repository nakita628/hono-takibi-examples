type Tokeninfo = {
  audience?: string | undefined
  email?: string | undefined
  expires_in?: number | undefined
  issued_to?: string | undefined
  scope?: string | undefined
  user_id?: string | undefined
  verified_email?: boolean | undefined
}
type Userinfo = {
  email?: string | undefined
  family_name?: string | undefined
  gender?: string | undefined
  given_name?: string | undefined
  hd?: string | undefined
  id?: string | undefined
  link?: string | undefined
  locale?: string | undefined
  name?: string | undefined
  picture?: string | undefined
  verified_email?: boolean | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/oauth2/v2/tokeninfo': {
      $post: {
        input: {
          query: {
            access_token?: string | undefined
            id_token?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Tokeninfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/oauth2/v2/userinfo': {
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
        output: Userinfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userinfo/v2/me': {
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
        output: Userinfo
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

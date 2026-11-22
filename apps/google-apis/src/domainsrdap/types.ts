type HttpBody = {
  contentType?: string | undefined
  data?: string | undefined
  extensions?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type Link = {
  href?: string | undefined
  hreflang?: string | undefined
  media?: string | undefined
  rel?: string | undefined
  title?: string | undefined
  type?: string | undefined
  value?: string | undefined
}
type Notice = {
  description?: string[] | undefined
  links?: Link[] | undefined
  title?: string | undefined
  type?: string | undefined
}
type RdapResponse = {
  description?: string[] | undefined
  errorCode?: number | undefined
  jsonResponse?: HttpBody | undefined
  lang?: string | undefined
  notices?: Notice[] | undefined
  rdapConformance?: string[] | undefined
  title?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/autnum/:autnumId': {
      $get: {
        input: { param: { autnumId: string } } & {
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
        }
        output: RdapResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/domain/:domainName': {
      $get: {
        input: { param: { domainName: string } } & {
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
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/domains': {
      $get: {
        input: {
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
        }
        output: RdapResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/entities': {
      $get: {
        input: {
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
        }
        output: RdapResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/entity/:entityId': {
      $get: {
        input: { param: { entityId: string } } & {
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
        }
        output: RdapResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/help': {
      $get: {
        input: {
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
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ip': {
      $get: {
        input: {
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
        }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/ip/:ipId/:ipId1': {
      $get: {
        input: { param: { ipId: string; ipId1: string } } & {
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
        }
        output: RdapResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/nameserver/:nameserverId': {
      $get: {
        input: { param: { nameserverId: string } } & {
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
        }
        output: RdapResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/nameservers': {
      $get: {
        input: {
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
        }
        output: RdapResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

type AccountName = string
type RoleType = string
type ResourceID = string
type Kind = string
type Offset = number
type Limit = number
type Count = boolean
type ResourceVersion = number
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/authenticators': {
      $get: {
        input: { header: { 'X-Request-Id'?: string | undefined } }
        output: {
          configured?: string[] | undefined
          enabled?: string[] | undefined
          installed?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/authn-azure/:service_id/:account/:login/authenticate': {
      $post:
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn-gcp/:account/authenticate': {
      $post:
        | {
            input: { param: { account: string } } & {
              header: {
                'Accept-Encoding'?: 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { account: string } } & {
              header: {
                'Accept-Encoding'?: 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: string } } & {
              header: {
                'Accept-Encoding'?: 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: string } } & {
              header: {
                'Accept-Encoding'?: 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn-gcp/:account/status': {
      $get:
        | {
            input: { param: { account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: { error?: string | undefined; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: { error?: string | undefined; status: string }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: { error?: string | undefined; status: string }
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/authn-iam/:service_id/:account/:login/authenticate': {
      $post:
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn-jwt/:service_id/:account/authenticate': {
      $post:
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn-jwt/:service_id/:account/:id/authenticate': {
      $post:
        | {
            input: { param: { account: AccountName; id: string; service_id: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { account: AccountName; id: string; service_id: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; id: string; service_id: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; id: string; service_id: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; id: string; service_id: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { jwt?: string | undefined } } & { form: { jwt?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn-k8s/:service_id/inject_client_cert': {
      $post:
        | {
            input: { param: { service_id: string } } & {
              header: { 'Host-Id-Prefix'?: string | undefined; 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { service_id: string } } & {
              header: { 'Host-Id-Prefix'?: string | undefined; 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { service_id: string } } & {
              header: { 'Host-Id-Prefix'?: string | undefined; 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { service_id: string } } & {
              header: { 'Host-Id-Prefix'?: string | undefined; 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/authn-k8s/:service_id/:account/:login/authenticate': {
      $post:
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn-ldap/:service_id/:account/login': {
      $get:
        | {
            input: { param: { service_id: string; account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { service_id: string; account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { service_id: string; account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { service_id: string; account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { service_id: string; account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { service_id: string; account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn-ldap/:service_id/:account/:login/authenticate': {
      $post:
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { service_id: string; account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn-oidc/:service_id/:account/authenticate': {
      $post:
        | {
            input: { param: { service_id: string; account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { id_token?: string | undefined } } & {
              form: { id_token?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { service_id: string; account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { id_token?: string | undefined } } & {
              form: { id_token?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { service_id: string; account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { id_token?: string | undefined } } & {
              form: { id_token?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { service_id: string; account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: { id_token?: string | undefined } } & {
              form: { id_token?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/authn/:account/api_key': {
      $put:
        | {
            input: { param: { account: AccountName } } & {
              query: { role?: RoleType | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { account: AccountName } } & {
              query: { role?: RoleType | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName } } & {
              query: { role?: RoleType | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName } } & {
              query: { role?: RoleType | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { account: AccountName } } & {
              query: { role?: RoleType | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn/:account/login': {
      $get:
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn/:account/password': {
      $put:
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { account: AccountName } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/authn/:account/:login/authenticate': {
      $post:
        | {
            input: { param: { account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; login: string } } & {
              header: {
                'Accept-Encoding'?: 'application/json' | 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ca/:account/:service_id/sign': {
      $post:
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { Accept?: string | undefined; 'X-Request-Id'?: string | undefined }
            } & { json: { csr: string; ttl: string } } & { form: { csr: string; ttl: string } }
            output: { certificate?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { Accept?: string | undefined; 'X-Request-Id'?: string | undefined }
            } & { json: { csr: string; ttl: string } } & { form: { csr: string; ttl: string } }
            output: string
            outputFormat: 'text'
            status: 201
          }
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { Accept?: string | undefined; 'X-Request-Id'?: string | undefined }
            } & { json: { csr: string; ttl: string } } & { form: { csr: string; ttl: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { Accept?: string | undefined; 'X-Request-Id'?: string | undefined }
            } & { json: { csr: string; ttl: string } } & { form: { csr: string; ttl: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { Accept?: string | undefined; 'X-Request-Id'?: string | undefined }
            } & { json: { csr: string; ttl: string } } & { form: { csr: string; ttl: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; service_id: string } } & {
              header: { Accept?: string | undefined; 'X-Request-Id'?: string | undefined }
            } & { json: { csr: string; ttl: string } } & { form: { csr: string; ttl: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/health': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
    }
  } & {
    '/host_factories/hosts': {
      $post:
        | {
            input: { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { annotations?: { [x: string]: unknown } | undefined; id: string }
            } & { form: { annotations?: { [x: string]: unknown } | undefined; id: string } }
            output: {
              annotations: string[]
              api_key: string
              created_at: string
              id: string
              owner: string
              permissions: string[]
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { annotations?: { [x: string]: unknown } | undefined; id: string }
            } & { form: { annotations?: { [x: string]: unknown } | undefined; id: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { annotations?: { [x: string]: unknown } | undefined; id: string }
            } & { form: { annotations?: { [x: string]: unknown } | undefined; id: string } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/host_factory_tokens': {
      $post:
        | {
            input: { header: { 'X-Request-Id'?: string | undefined } } & {
              json: {
                cidr?: string[] | undefined
                count?: number | undefined
                expiration: string
                host_factory: string
              }
            } & {
              form: {
                cidr?: string[] | undefined
                count?: number | undefined
                expiration: string
                host_factory: string
              }
            }
            output: { cidr: string[]; expiration: string; token: string }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Request-Id'?: string | undefined } } & {
              json: {
                cidr?: string[] | undefined
                count?: number | undefined
                expiration: string
                host_factory: string
              }
            } & {
              form: {
                cidr?: string[] | undefined
                count?: number | undefined
                expiration: string
                host_factory: string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'X-Request-Id'?: string | undefined } } & {
              json: {
                cidr?: string[] | undefined
                count?: number | undefined
                expiration: string
                host_factory: string
              }
            } & {
              form: {
                cidr?: string[] | undefined
                count?: number | undefined
                expiration: string
                host_factory: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Request-Id'?: string | undefined } } & {
              json: {
                cidr?: string[] | undefined
                count?: number | undefined
                expiration: string
                host_factory: string
              }
            } & {
              form: {
                cidr?: string[] | undefined
                count?: number | undefined
                expiration: string
                host_factory: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { header: { 'X-Request-Id'?: string | undefined } } & {
              json: {
                cidr?: string[] | undefined
                count?: number | undefined
                expiration: string
                host_factory: string
              }
            } & {
              form: {
                cidr?: string[] | undefined
                count?: number | undefined
                expiration: string
                host_factory: string
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/host_factory_tokens/:token': {
      $delete:
        | {
            input: { param: { token: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { token: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { token: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { token: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/info': {
      $get: {
        input: {}
        output: {
          authenticators?:
            | {
                configured?: string[] | undefined
                enabled?: string[] | undefined
                installed?: string[] | undefined
              }
            | undefined
          configuration?: { [x: string]: unknown } | undefined
          container?: string | undefined
          release?: string | undefined
          role?: string | undefined
          services?: { [x: string]: unknown } | undefined
          version?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/policies/:account/policy/:identifier': {
      $patch:
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {
              created_roles?: { [x: string]: unknown } | undefined
              version?: number | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 422
          }
      $post:
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {
              created_roles?: { [x: string]: unknown } | undefined
              version?: number | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 422
          }
      $put:
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {
              created_roles?: { [x: string]: unknown } | undefined
              version?: number | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { account: AccountName; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            } & { json: string }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/public_keys/:account/:kind/:identifier': {
      $get:
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/remote_health/:remote': {
      $get:
        | {
            input: { param: { remote: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { remote: string } }; output: {}; outputFormat: string; status: 502 }
    }
  } & {
    '/resources': {
      $get:
        | {
            input: {
              query: {
                account?: AccountName | undefined
                kind?: Kind | undefined
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {
              annotations?: string[] | undefined
              created_at?: string | undefined
              id?: string | undefined
              owner?: string | undefined
              permissions?:
                | {
                    policy?: string | undefined
                    privilege?: string | undefined
                    role?: string | undefined
                  }[]
                | undefined
              policy?: string | undefined
              policy_versions?:
                | {
                    client_ip?: string | undefined
                    created_at?: string | undefined
                    finished_at?: string | undefined
                    id?: string | undefined
                    policy_sha256?: string | undefined
                    policy_text?: string | undefined
                    role?: string | undefined
                    version?: number | undefined
                  }[]
                | undefined
              restricted_to?: string[] | undefined
              secrets?:
                | { expires_at?: string | undefined; version?: number | undefined }[]
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                account?: AccountName | undefined
                kind?: Kind | undefined
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                account?: AccountName | undefined
                kind?: Kind | undefined
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                account?: AccountName | undefined
                kind?: Kind | undefined
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/resources/:account': {
      $get:
        | {
            input: { param: { account: AccountName } } & {
              query: {
                kind?: Kind | undefined
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {
              annotations?: string[] | undefined
              created_at?: string | undefined
              id?: string | undefined
              owner?: string | undefined
              permissions?:
                | {
                    policy?: string | undefined
                    privilege?: string | undefined
                    role?: string | undefined
                  }[]
                | undefined
              policy?: string | undefined
              policy_versions?:
                | {
                    client_ip?: string | undefined
                    created_at?: string | undefined
                    finished_at?: string | undefined
                    id?: string | undefined
                    policy_sha256?: string | undefined
                    policy_text?: string | undefined
                    role?: string | undefined
                    version?: number | undefined
                  }[]
                | undefined
              restricted_to?: string[] | undefined
              secrets?:
                | { expires_at?: string | undefined; version?: number | undefined }[]
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: AccountName } } & {
              query: {
                kind?: Kind | undefined
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName } } & {
              query: {
                kind?: Kind | undefined
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName } } & {
              query: {
                kind?: Kind | undefined
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName } } & {
              query: {
                kind?: Kind | undefined
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/resources/:account/:kind': {
      $get:
        | {
            input: { param: { account: AccountName; kind: Kind } } & {
              query: {
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {
              annotations?: string[] | undefined
              created_at?: string | undefined
              id?: string | undefined
              owner?: string | undefined
              permissions?:
                | {
                    policy?: string | undefined
                    privilege?: string | undefined
                    role?: string | undefined
                  }[]
                | undefined
              policy?: string | undefined
              policy_versions?:
                | {
                    client_ip?: string | undefined
                    created_at?: string | undefined
                    finished_at?: string | undefined
                    id?: string | undefined
                    policy_sha256?: string | undefined
                    policy_text?: string | undefined
                    role?: string | undefined
                    version?: number | undefined
                  }[]
                | undefined
              restricted_to?: string[] | undefined
              secrets?:
                | { expires_at?: string | undefined; version?: number | undefined }[]
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: AccountName; kind: Kind } } & {
              query: {
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; kind: Kind } } & {
              query: {
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; kind: Kind } } & {
              query: {
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; kind: Kind } } & {
              query: {
                search?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                role?: RoleType | undefined
                acting_as?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/resources/:account/:kind/:identifier': {
      $get:
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                permitted_roles?: boolean | undefined
                privilege?: string | undefined
                check?: boolean | undefined
                role?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {
              annotations?: string[] | undefined
              created_at?: string | undefined
              id?: string | undefined
              owner?: string | undefined
              permissions?:
                | {
                    policy?: string | undefined
                    privilege?: string | undefined
                    role?: string | undefined
                  }[]
                | undefined
              policy?: string | undefined
              policy_versions?:
                | {
                    client_ip?: string | undefined
                    created_at?: string | undefined
                    finished_at?: string | undefined
                    id?: string | undefined
                    policy_sha256?: string | undefined
                    policy_text?: string | undefined
                    role?: string | undefined
                    version?: number | undefined
                  }[]
                | undefined
              restricted_to?: string[] | undefined
              secrets?:
                | { expires_at?: string | undefined; version?: number | undefined }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                permitted_roles?: boolean | undefined
                privilege?: string | undefined
                check?: boolean | undefined
                role?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                permitted_roles?: boolean | undefined
                privilege?: string | undefined
                check?: boolean | undefined
                role?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                permitted_roles?: boolean | undefined
                privilege?: string | undefined
                check?: boolean | undefined
                role?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                permitted_roles?: boolean | undefined
                privilege?: string | undefined
                check?: boolean | undefined
                role?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                permitted_roles?: boolean | undefined
                privilege?: string | undefined
                check?: boolean | undefined
                role?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                permitted_roles?: boolean | undefined
                privilege?: string | undefined
                check?: boolean | undefined
                role?: RoleType | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/roles/:account/:kind/:identifier': {
      $delete:
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
      $get:
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                all?: string | undefined
                memberships?: string | undefined
                members?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                search?: string | undefined
                graph?: string | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                all?: string | undefined
                memberships?: string | undefined
                members?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                search?: string | undefined
                graph?: string | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                all?: string | undefined
                memberships?: string | undefined
                members?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                search?: string | undefined
                graph?: string | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                all?: string | undefined
                memberships?: string | undefined
                members?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                search?: string | undefined
                graph?: string | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                all?: string | undefined
                memberships?: string | undefined
                members?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                search?: string | undefined
                graph?: string | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: {
                all?: string | undefined
                memberships?: string | undefined
                members?: string | undefined
                offset?: Offset | undefined
                limit?: Limit | undefined
                count?: Count | undefined
                search?: string | undefined
                graph?: string | undefined
              }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
      $post:
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { members: string; member: RoleType }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/secrets': {
      $get:
        | {
            input: { query: { variable_ids: string } } & {
              header: {
                'Accept-Encoding'?: 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { variable_ids: string } } & {
              header: {
                'Accept-Encoding'?: 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { variable_ids: string } } & {
              header: {
                'Accept-Encoding'?: 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { variable_ids: string } } & {
              header: {
                'Accept-Encoding'?: 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { variable_ids: string } } & {
              header: {
                'Accept-Encoding'?: 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { variable_ids: string } } & {
              header: {
                'Accept-Encoding'?: 'base64' | undefined
                'X-Request-Id'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/secrets/:account/:kind/:identifier': {
      $get:
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { version?: ResourceVersion | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { version?: ResourceVersion | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { version?: ResourceVersion | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { version?: ResourceVersion | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { version?: ResourceVersion | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { version?: ResourceVersion | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 422
          }
      $post:
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { expirations?: string | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } } & { json: string }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { expirations?: string | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } } & { json: string }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { expirations?: string | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } } & { json: string }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { expirations?: string | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } } & { json: string }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { account: AccountName; kind: Kind; identifier: ResourceID } } & {
              query: { expirations?: string | undefined }
            } & { header: { 'X-Request-Id'?: string | undefined } } & { json: string }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/whoami': {
      $get:
        | {
            input: { header: { 'X-Request-Id'?: string | undefined } }
            output: {
              account?: string | undefined
              client_ip?: string | undefined
              token_issued_at?: string | undefined
              user_agent?: string | undefined
              username?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Request-Id'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/:authenticator/:account': {
      $patch:
        | {
            input: {
              param: {
                authenticator:
                  | 'authn-iam'
                  | 'authn-oidc'
                  | 'authn-ldap'
                  | 'authn-k8s'
                  | 'authn-gcp'
                  | 'authn-azure'
                  | 'authn-jwt'
                account: string
              }
            } & { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { enabled?: boolean | undefined }
            } & { form: { enabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                authenticator:
                  | 'authn-iam'
                  | 'authn-oidc'
                  | 'authn-ldap'
                  | 'authn-k8s'
                  | 'authn-gcp'
                  | 'authn-azure'
                  | 'authn-jwt'
                account: string
              }
            } & { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { enabled?: boolean | undefined }
            } & { form: { enabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                authenticator:
                  | 'authn-iam'
                  | 'authn-oidc'
                  | 'authn-ldap'
                  | 'authn-k8s'
                  | 'authn-gcp'
                  | 'authn-azure'
                  | 'authn-jwt'
                account: string
              }
            } & { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { enabled?: boolean | undefined }
            } & { form: { enabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                authenticator:
                  | 'authn-iam'
                  | 'authn-oidc'
                  | 'authn-ldap'
                  | 'authn-k8s'
                  | 'authn-gcp'
                  | 'authn-azure'
                  | 'authn-jwt'
                account: string
              }
            } & { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { enabled?: boolean | undefined }
            } & { form: { enabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                authenticator:
                  | 'authn-iam'
                  | 'authn-oidc'
                  | 'authn-ldap'
                  | 'authn-k8s'
                  | 'authn-gcp'
                  | 'authn-azure'
                  | 'authn-jwt'
                account: string
              }
            } & { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { enabled?: boolean | undefined }
            } & { form: { enabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/:authenticator/:service_id/:account': {
      $patch:
        | {
            input: {
              param: {
                authenticator:
                  | 'authn-iam'
                  | 'authn-oidc'
                  | 'authn-ldap'
                  | 'authn-k8s'
                  | 'authn-gcp'
                  | 'authn-azure'
                  | 'authn-jwt'
                service_id: string
                account: string
              }
            } & { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { enabled?: boolean | undefined }
            } & { form: { enabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                authenticator:
                  | 'authn-iam'
                  | 'authn-oidc'
                  | 'authn-ldap'
                  | 'authn-k8s'
                  | 'authn-gcp'
                  | 'authn-azure'
                  | 'authn-jwt'
                service_id: string
                account: string
              }
            } & { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { enabled?: boolean | undefined }
            } & { form: { enabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                authenticator:
                  | 'authn-iam'
                  | 'authn-oidc'
                  | 'authn-ldap'
                  | 'authn-k8s'
                  | 'authn-gcp'
                  | 'authn-azure'
                  | 'authn-jwt'
                service_id: string
                account: string
              }
            } & { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { enabled?: boolean | undefined }
            } & { form: { enabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                authenticator:
                  | 'authn-iam'
                  | 'authn-oidc'
                  | 'authn-ldap'
                  | 'authn-k8s'
                  | 'authn-gcp'
                  | 'authn-azure'
                  | 'authn-jwt'
                service_id: string
                account: string
              }
            } & { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { enabled?: boolean | undefined }
            } & { form: { enabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                authenticator:
                  | 'authn-iam'
                  | 'authn-oidc'
                  | 'authn-ldap'
                  | 'authn-k8s'
                  | 'authn-gcp'
                  | 'authn-azure'
                  | 'authn-jwt'
                service_id: string
                account: string
              }
            } & { header: { 'X-Request-Id'?: string | undefined } } & {
              json: { enabled?: boolean | undefined }
            } & { form: { enabled?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/:authenticator/:service_id/:account/status': {
      $get:
        | {
            input: { param: { authenticator: string; service_id: string; account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: { error?: string | undefined; status: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { authenticator: string; service_id: string; account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { authenticator: string; service_id: string; account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { authenticator: string; service_id: string; account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { authenticator: string; service_id: string; account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { authenticator: string; service_id: string; account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: { error?: string | undefined; status: string }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { authenticator: string; service_id: string; account: string } } & {
              header: { 'X-Request-Id'?: string | undefined }
            }
            output: { error?: string | undefined; status: string }
            outputFormat: 'json'
            status: 501
          }
    }
  },
  '/'
>
export default routes

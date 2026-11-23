type GetAllAccountResponse = {
  access_token: string
  api_key: string
  applications?: string[] | undefined
  external_id: string
  name?: string | undefined
  provider: string
}
type _401Response = { detail?: string | undefined; title?: string | undefined }
type MessengerAccountResponse = {
  access_token: string
  api_key: string
  applications?: string[] | undefined
  external_id: string
  name?: string | undefined
  provider: string
}
type _403Response = { title?: string | undefined }
type VSMAccountResponse = {
  api_key: string
  applications?: string[] | undefined
  external_id: string
  name?: string | undefined
  provider: string
}
type WAAccountResponse = {
  api_key: string
  applications?: string[] | undefined
  external_id: string
  name?: string | undefined
  provider: string
}
type AccountResponse = {
  access_token?: string | undefined
  api_key: string
  applications?: string[] | undefined
  external_id: string
  name?: string | undefined
  provider: 'messenger' | 'viber_service_msg' | 'whatsapp'
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get:
        | {
            input: {
              query: {
                provider?: 'messenger' | 'viber_service_msg' | 'whatsapp' | undefined
                page_number?: number | undefined
                page_size?: number | undefined
              }
            }
            output: {
              _embedded?: GetAllAccountResponse[] | undefined
              _links?:
                | {
                    first?: { href?: string | undefined } | undefined
                    last?: { href?: string | undefined } | undefined
                    next?: { href?: string | undefined } | undefined
                    prev?: { href?: string | undefined } | undefined
                    self?: { href?: string | undefined } | undefined
                  }
                | undefined
              page_number?: number | undefined
              page_size?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                provider?: 'messenger' | 'viber_service_msg' | 'whatsapp' | undefined
                page_number?: number | undefined
                page_size?: number | undefined
              }
            }
            output: _401Response
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/messenger': {
      $post:
        | {
            input: {
              json: {
                access_token: string
                applications?: string[] | undefined
                external_id: string
                name?: string | undefined
              }
            }
            output: MessengerAccountResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                access_token: string
                applications?: string[] | undefined
                external_id: string
                name?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              invalid_params?:
                | { name?: string | undefined; reason?: string | undefined }[]
                | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                access_token: string
                applications?: string[] | undefined
                external_id: string
                name?: string | undefined
              }
            }
            output: _401Response
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                access_token: string
                applications?: string[] | undefined
                external_id: string
                name?: string | undefined
              }
            }
            output: _403Response
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/messenger/:external_id': {
      $delete:
        | {
            input: { param: { external_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { external_id: string } }
            output: _401Response
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } }
            output: _403Response
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get:
        | {
            input: { param: { external_id: string } }
            output: MessengerAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } }
            output: _401Response
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { external_id: string } } & {
              json: {
                access_token?: string | undefined
                applications?: string[] | undefined
                name?: string | undefined
              }
            }
            output: {
              access_token: string
              api_key: string
              applications?: string[] | undefined
              external_id: string
              name?: string | undefined
              provider: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              json: {
                access_token?: string | undefined
                applications?: string[] | undefined
                name?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              instance?: string | undefined
              invalid_params?:
                | { name?: string | undefined; reason?: string | undefined }[]
                | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_id: string } } & {
              json: {
                access_token?: string | undefined
                applications?: string[] | undefined
                name?: string | undefined
              }
            }
            output: _401Response
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              json: {
                access_token?: string | undefined
                applications?: string[] | undefined
                name?: string | undefined
              }
            }
            output: _403Response
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string } } & {
              json: {
                access_token?: string | undefined
                applications?: string[] | undefined
                name?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/viber_service_msg/:external_id': {
      $get:
        | {
            input: { param: { external_id: string } }
            output: VSMAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } }
            output: _401Response
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/whatsapp/:external_id': {
      $get:
        | {
            input: { param: { external_id: string } }
            output: WAAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } }
            output: _401Response
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/:provider/:external_id/applications': {
      $post:
        | {
            input: {
              param: {
                provider: 'messenger' | 'viber_service_msg' | 'whatsapp'
                external_id: string
              }
            } & { json: { application: string } }
            output: AccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                provider: 'messenger' | 'viber_service_msg' | 'whatsapp'
                external_id: string
              }
            } & { json: { application: string } }
            output: _401Response
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                provider: 'messenger' | 'viber_service_msg' | 'whatsapp'
                external_id: string
              }
            } & { json: { application: string } }
            output: {
              detail?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                provider: 'messenger' | 'viber_service_msg' | 'whatsapp'
                external_id: string
              }
            } & { json: { application: string } }
            output: {
              detail?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/:provider/:external_id/applications/:application_id': {
      $delete:
        | {
            input: {
              param: {
                provider: 'messenger' | 'viber_service_msg' | 'whatsapp'
                external_id: string
                application_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                provider: 'messenger' | 'viber_service_msg' | 'whatsapp'
                external_id: string
                application_id: string
              }
            }
            output: _401Response
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                provider: 'messenger' | 'viber_service_msg' | 'whatsapp'
                external_id: string
                application_id: string
              }
            }
            output: {
              detail?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                provider: 'messenger' | 'viber_service_msg' | 'whatsapp'
                external_id: string
                application_id: string
              }
            }
            output: {
              detail?: string | undefined
              title?: string | undefined
              type?: string | undefined
            }
            outputFormat: 'json'
            status: 409
          }
    }
  },
  '/'
>
export default routes

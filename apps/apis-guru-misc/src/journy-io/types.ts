declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts': {
      $delete:
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
              }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/upsert': {
      $post:
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              rejected?: { [x: string]: string } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                identification: { accountId?: string | undefined; domain?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/users/add': {
      $post:
        | {
            input: {
              json: {
                account: { accountId?: string | undefined; domain?: string | undefined }
                users: {
                  identification: { email?: string | undefined; userId?: string | undefined }
                }[]
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                account: { accountId?: string | undefined; domain?: string | undefined }
                users: {
                  identification: { email?: string | undefined; userId?: string | undefined }
                }[]
              }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                account: { accountId?: string | undefined; domain?: string | undefined }
                users: {
                  identification: { email?: string | undefined; userId?: string | undefined }
                }[]
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                account: { accountId?: string | undefined; domain?: string | undefined }
                users: {
                  identification: { email?: string | undefined; userId?: string | undefined }
                }[]
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                account: { accountId?: string | undefined; domain?: string | undefined }
                users: {
                  identification: { email?: string | undefined; userId?: string | undefined }
                }[]
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/accounts/users/remove': {
      $post:
        | {
            input: {
              json: {
                account: { accountId?: string | undefined; domain?: string | undefined }
                users: {
                  identification: { email?: string | undefined; userId?: string | undefined }
                }[]
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 204
          }
        | {
            input: {
              json: {
                account: { accountId?: string | undefined; domain?: string | undefined }
                users: {
                  identification: { email?: string | undefined; userId?: string | undefined }
                }[]
              }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                account: { accountId?: string | undefined; domain?: string | undefined }
                users: {
                  identification: { email?: string | undefined; userId?: string | undefined }
                }[]
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                account: { accountId?: string | undefined; domain?: string | undefined }
                users: {
                  identification: { email?: string | undefined; userId?: string | undefined }
                }[]
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                account: { accountId?: string | undefined; domain?: string | undefined }
                users: {
                  identification: { email?: string | undefined; userId?: string | undefined }
                }[]
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {}
            output: {
              meta: { requestId: string; status: number }
              data: { group?: { id: string; name: string } | undefined; id: string; name: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/link': {
      $post:
        | {
            input: {
              json: {
                deviceId: string
                identification: { email?: string | undefined; userId?: string | undefined }
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                deviceId: string
                identification: { email?: string | undefined; userId?: string | undefined }
              }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                deviceId: string
                identification: { email?: string | undefined; userId?: string | undefined }
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                deviceId: string
                identification: { email?: string | undefined; userId?: string | undefined }
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                deviceId: string
                identification: { email?: string | undefined; userId?: string | undefined }
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                deviceId: string
                identification: { email?: string | undefined; userId?: string | undefined }
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/properties/accounts': {
      $get:
        | {
            input: {}
            output: {
              meta: { requestId: string; status: number }
              data: {
                group?: { id: string; name: string } | undefined
                isComputed: boolean
                label: string
                name: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/properties/users': {
      $get:
        | {
            input: {}
            output: {
              meta: { requestId: string; status: number }
              data: {
                group?: { id: string; name: string } | undefined
                isComputed: boolean
                label: string
                name: string
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/segments/accounts': {
      $get:
        | {
            input: {}
            output: {
              meta: { requestId: string; status: number }
              data: { id: string; name: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/segments/users': {
      $get:
        | {
            input: {}
            output: {
              meta: { requestId: string; status: number }
              data: { id: string; name: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/track': {
      $post:
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number | string } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number | string } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number | string } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number | string } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number | string } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                identification: {
                  account?:
                    | { accountId?: string | undefined; domain?: string | undefined }
                    | undefined
                  user?: { email?: string | undefined; userId?: string | undefined } | undefined
                }
                metadata?: { [x: string]: string | boolean | number | string } | undefined
                name: string
                triggeredAt?: string | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/tracking/snippet': {
      $get:
        | {
            input: { query: { domain: string } }
            output: {
              meta: { requestId: string; status: number }
              data: { domain: string; snippet: string }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { domain: string } }
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { domain: string } }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { domain: string } }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { domain: string } }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { domain: string } }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { domain: string } }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users': {
      $delete:
        | {
            input: {
              json: { identification: { email?: string | undefined; userId?: string | undefined } }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: { identification: { email?: string | undefined; userId?: string | undefined } }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: { identification: { email?: string | undefined; userId?: string | undefined } }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: { identification: { email?: string | undefined; userId?: string | undefined } }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: { identification: { email?: string | undefined; userId?: string | undefined } }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: { identification: { email?: string | undefined; userId?: string | undefined } }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/users/upsert': {
      $post:
        | {
            input: {
              json: {
                identification: { email?: string | undefined; userId?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              rejected?: { [x: string]: string } | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                identification: { email?: string | undefined; userId?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: {
              meta: { requestId: string; status: number }
              message: string
              errors: {
                fields?: { [x: string]: string } | undefined
                parameters?:
                  | {
                      header?: { [x: string]: string } | undefined
                      path?: { [x: string]: string } | undefined
                      query?: { [x: string]: string } | undefined
                    }
                  | undefined
              }
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                identification: { email?: string | undefined; userId?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                identification: { email?: string | undefined; userId?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                identification: { email?: string | undefined; userId?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                identification: { email?: string | undefined; userId?: string | undefined }
                properties?:
                  | { [x: string]: (string | null) | boolean | number | string[] }
                  | undefined
              }
            }
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/validate': {
      $get:
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; data: { permissions: string[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {}
            output: { meta: { requestId: string; status: number }; message: string }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes

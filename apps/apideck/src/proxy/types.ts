declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/proxy': {
      $delete:
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              error?: string | undefined
              message?: string | undefined
              ref?: string | undefined
              status_code?: number | undefined
              type_name?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              error?: string | undefined
              message?: string | undefined
              ref?: string | undefined
              status_code?: number | undefined
              type_name?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
      $options:
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              error?: string | undefined
              message?: string | undefined
              ref?: string | undefined
              status_code?: number | undefined
              type_name?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              error?: string | undefined
              message?: string | undefined
              ref?: string | undefined
              status_code?: number | undefined
              type_name?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              error?: string | undefined
              message?: string | undefined
              ref?: string | undefined
              status_code?: number | undefined
              type_name?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
      $put:
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: {
              detail?: string | undefined
              error?: string | undefined
              message?: string | undefined
              ref?: string | undefined
              status_code?: number | undefined
              type_name?: string | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id': string
                'x-apideck-downstream-url': string
                'x-apideck-downstream-authorization'?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes

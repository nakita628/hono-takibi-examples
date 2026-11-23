declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/iec/:iec': {
      $get:
        | {
            input: { param: { iec: string } }
            output: {
              addressLine1: string
              addressLine2: string
              branch: {
                badd1: string
                badd2: string
                branchCode: string
                city: string
                pin: string
                state: string
              }[]
              city: string
              dataAsOn: string
              directors: { name: string }[]
              entityName: string
              exporterType: string
              iec: string
              iecIssueDate: string
              iecModificationDate: string
              iecStatus: string
              natureOfConcern: string
              pan: string
              pin: string
              state: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { iec: string } }
            output: {
              error?: 'invalid parameter' | 'missing parameter' | undefined
              errorDescription?:
                | 'Bad request'
                | 'Please provide all mandatory parameters.'
                | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { iec: string } }
            output: {
              error?: 'invalid_authentication' | 'invalid_authorization' | undefined
              errorDescription?:
                | 'Authentication failed'
                | 'You are not authorized to use this API'
                | undefined
            }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { iec: string } }
            output: {
              error?: 'record_not_found' | 'Url not found' | undefined
              errorDescription?:
                | 'No record found'
                | 'Your API url or path is incorrect.'
                | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { iec: string } }
            output: {
              error?: 'internal_server_error' | undefined
              errorDescription?: 'Internal server error' | undefined
            }
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { iec: string } }
            output: {
              error?: 'bad gateway' | undefined
              errorDescription?: 'Publisher service returned an invalid response.' | undefined
            }
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { iec: string } }
            output: {
              error?: 'service_unavailable' | undefined
              errorDescription?: 'Publisher service is temporarily unavailable' | undefined
            }
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { iec: string } }
            output: {
              error?: 'gateway_timeout' | undefined
              errorDescription?: 'Publisher service did not respond in time' | undefined
            }
            outputFormat: 'json'
            status: 504
          }
    }
  },
  '/'
>
export default routes

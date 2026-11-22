type LegalAgreement = {
  agreementKey: string
  content: string
  title: string
  url?: string | undefined
}
type ErrorField = {
  code: string
  message?: string | undefined
  path: string
  pathRelated?: string | undefined
}
type Error = { code: string; fields?: ErrorField[] | undefined; message?: string | undefined }
type ErrorLimit = {
  code: string
  fields?: ErrorField[] | undefined
  message?: string | undefined
  retryAfterSec: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/agreements': {
      $get:
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: LegalAgreement[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: LegalAgreement[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: LegalAgreement[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: LegalAgreement[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: LegalAgreement[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 400
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 401
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 403
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: ErrorLimit
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: ErrorLimit
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
        | {
            input: { query: { keys: string[] } } & {
              header: {
                'X-Private-Label-Id'?: number | undefined
                'X-Market-Id'?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 500
          }
    }
  },
  '/'
>
export default routes

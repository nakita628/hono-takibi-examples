type Webhook = { name?: string | undefined; transform?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/events': {
      $get:
        | {
            input: {
              query: {
                received_before?: string | undefined
                received_after?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                cursor?: string | undefined
              }
            } & { header: { 'x-inngest-env'?: string | undefined } }
            output: {
              data: {
                internal_id: string
                accountID: string
                environmentID: string
                source: string
                sourceID?: string | undefined
                receivedAt: string
                id: string
                name: string
                data: { [x: string]: unknown }
                user?: ({ [x: string]: unknown } | null) | undefined
                ts: number
                v?: (string | null) | undefined
              }[]
              metadata: { fetchedAt: string; cachedUntil?: (string | null) | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                received_before?: string | undefined
                received_after?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                cursor?: string | undefined
              }
            } & { header: { 'x-inngest-env'?: string | undefined } }
            output: {
              error?: string | undefined
              data?: ({ [x: string]: unknown } | string | null) | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/v1/events/:internalID': {
      $get:
        | {
            input: { param: { internalID: string } } & {
              header: { 'x-inngest-env'?: string | undefined }
            }
            output: {
              data: {
                internal_id: string
                accountID: string
                environmentID: string
                source: string
                sourceID?: string | undefined
                receivedAt: string
                id: string
                name: string
                data: { [x: string]: unknown }
                user?: ({ [x: string]: unknown } | null) | undefined
                ts: number
                v?: (string | null) | undefined
              }
              metadata: { fetchedAt: string; cachedUntil?: (string | null) | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { internalID: string } } & {
              header: { 'x-inngest-env'?: string | undefined }
            }
            output: {
              error?: string | undefined
              data?: ({ [x: string]: unknown } | string | null) | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/events/:internalID/runs': {
      $get:
        | {
            input: { param: { internalID: string } } & {
              header: { 'x-inngest-env'?: string | undefined }
            }
            output: {
              data: {
                run_id: string
                run_started_at: string
                ended_at?: (string | null) | undefined
                status: 'Running' | 'Completed' | 'Failed' | 'Cancelled'
                output?:
                  | ({ [x: string]: unknown } | unknown[] | number | string | boolean | null)
                  | undefined
                function_id: string
                function_version: number
                environment_id: string
                event_id?: (string | null) | undefined
                batch_id?: (string | null) | undefined
                original_run_id?: (string | null) | undefined
                cron?: (string | null) | undefined
              }[]
              metadata: { fetchedAt: string; cachedUntil?: (string | null) | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { internalID: string } } & {
              header: { 'x-inngest-env'?: string | undefined }
            }
            output: {
              error?: string | undefined
              data?: ({ [x: string]: unknown } | string | null) | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/runs/:runID': {
      $get:
        | {
            input: { param: { runID: string } } & {
              header: { 'x-inngest-env'?: string | undefined }
            }
            output: {
              data: {
                run_id: string
                run_started_at: string
                ended_at?: (string | null) | undefined
                status: 'Running' | 'Completed' | 'Failed' | 'Cancelled'
                output?:
                  | ({ [x: string]: unknown } | unknown[] | number | string | boolean | null)
                  | undefined
                function_id: string
                function_version: number
                environment_id: string
                event_id?: (string | null) | undefined
                batch_id?: (string | null) | undefined
                original_run_id?: (string | null) | undefined
                cron?: (string | null) | undefined
              }
              metadata: { fetchedAt: string; cachedUntil?: (string | null) | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { runID: string } } & {
              header: { 'x-inngest-env'?: string | undefined }
            }
            output: {
              error?: string | undefined
              data?: ({ [x: string]: unknown } | string | null) | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { runID: string } } & {
              header: { 'x-inngest-env'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { runID: string } } & {
              header: { 'x-inngest-env'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
    }
  } & {
    '/v1/runs/:runID/jobs': {
      $get: {
        input: { param: { runID: string } } & { header: { 'x-inngest-env'?: string | undefined } }
        output: {
          data: {
            at?: string | undefined
            position?: number | undefined
            attempt?: number | undefined
          }[]
          metadata: { fetchedAt: string; cachedUntil?: (string | null) | undefined }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/signals': {
      $post:
        | {
            input: { header: { 'x-inngest-env'?: string | undefined } } & {
              json: {
                signal?: string | undefined
                data?:
                  | { [x: string]: unknown }
                  | unknown[]
                  | number
                  | number
                  | string
                  | boolean
                  | undefined
              }
            }
            output: { run_id?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'x-inngest-env'?: string | undefined } } & {
              json: {
                signal?: string | undefined
                data?:
                  | { [x: string]: unknown }
                  | unknown[]
                  | number
                  | number
                  | string
                  | boolean
                  | undefined
              }
            }
            output: {
              error?: string | undefined
              data?: ({ [x: string]: unknown } | string | null) | undefined
              status?: number | undefined
            }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/v1/cancellations': {
      $get: {
        input: { header: { 'x-inngest-env'?: string | undefined } }
        output: {
          data?:
            | {
                id: string
                environment_id: string
                function_internal_id: string
                function_id: string
                started_before: string
                started_after?: string | undefined
                if?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'x-inngest-env'?: string | undefined } } & {
          json: {
            app_id: string
            function_id: string
            started_before: string
            started_after?: string | undefined
            if?: string | undefined
          }
        }
        output: {
          data?:
            | {
                id: string
                environment_id: string
                function_internal_id: string
                function_id: string
                started_before: string
                started_after?: string | undefined
                if?: string | undefined
              }
            | undefined
          error?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/cancellations/:id': {
      $delete: {
        input: { param: { id: string } } & { header: { 'x-inngest-env'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/webhooks': {
      $get: { input: {}; output: unknown; outputFormat: 'json'; status: 200 }
      $post: { input: { json: unknown }; output: unknown; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/webhooks/:id': {
      $get: { input: { param: { id: string } }; output: unknown; outputFormat: 'json'; status: 200 }
      $put: {
        input: { param: { id: string } } & { json: Webhook }
        output: unknown
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: { data?: { id?: string | undefined } | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

type CheckDetail = {
  ok: boolean
  errors?: string[] | undefined
  consecutiveFailures?: number | undefined
  runDuration?: bigint | undefined
  namespace?: string | undefined
  currentUUID?: string | undefined
  lastRunUnix?: bigint | undefined
  successCount?: number | undefined
  failureCount?: number | undefined
  lastOKUnix?: bigint | undefined
  lastFailureUnix?: bigint | undefined
  additionalMetadata?: string | undefined
  nextRunUnix?: bigint | undefined
  podName?: string | undefined
  timeoutSeconds?: bigint | undefined
  runIntervalSeconds?: bigint | undefined
}
type State = {
  OK: boolean
  Errors: string[]
  CheckDetails: { [x: string]: CheckDetail }
  CurrentMaster?: string | undefined
  Metadata?: { [x: string]: string } | undefined
}
type EventSummary = {
  message: string
  reason: string
  type: string
  lastTimestamp?: bigint | undefined
}
type Report = { errors?: string[] | undefined; ok: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/metrics': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } } & {
    '/healthz': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/json': {
      $get: {
        input: { query: { namespace?: string | undefined } }
        output: State
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/events': {
      $get:
        | {
            input: { query: { namespace: string; healthcheck: string } }
            output: EventSummary[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { namespace: string; healthcheck: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/logs': {
      $get:
        | {
            input: {
              query: { namespace: string; healthcheck: string; pod: string; format: 'text' }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: { namespace: string; healthcheck: string; pod: string; format: 'text' }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { namespace: string; healthcheck: string; pod: string; format: 'text' }
            }
            output: {}
            outputFormat: string
            status: 406
          }
    }
  } & {
    '/api/logs/stream': {
      $get:
        | {
            input: { query: { namespace: string; healthcheck: string; pod: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { namespace: string; healthcheck: string; pod: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { namespace: string; healthcheck: string; pod: string } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/openapi.yaml': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/openapi.json': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/run': {
      $post:
        | {
            input: { query: { namespace: string; healthcheck: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { namespace: string; healthcheck: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { namespace: string; healthcheck: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { namespace: string; healthcheck: string } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/check': {
      $post:
        | {
            input: { header: { 'kh-run-uuid': string } } & { json: Report }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'kh-run-uuid': string } } & { json: Report }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & { '/': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } } },
  '/'
>
export default routes

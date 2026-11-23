type Batch = {
  completed?: boolean | undefined
  count?: number | undefined
  created_at?: string | undefined
  id?: string | undefined
  operation?: string | undefined
  results?: { [x: string]: unknown }[] | undefined
  status?: string | undefined
}
type ArrayOfBatch = { batches?: Batch[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/batch': {
      $get: { input: {}; output: ArrayOfBatch; outputFormat: 'json'; status: 200 }
      $post: {
        input: {
          json: {
            domains: string[]
            operation: 'whois' | 'check'
            options?: { format?: 'raw' | 'formatted' | 'json' | undefined } | undefined
          }
        }
        output: Batch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/batch/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: { input: { param: { id: string } }; output: Batch; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/db': {
      $get: {
        input: { query: { query: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/:domain/check': {
      $get: {
        input: { param: { domain: string } }
        output: { isAvailable?: boolean | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/:domain/rank': {
      $get: {
        input: { param: { domain: string } }
        output: { rank?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/domains/:domain/whois': {
      $get: {
        input: { param: { domain: string } } & {
          query: { format?: 'raw' | 'formatted' | 'json' | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes

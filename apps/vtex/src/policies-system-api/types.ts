type EvaluatePolicyRequest = { context: { [x: string]: unknown }; resource: string }
type PolicyActionGetResponse = {
  id?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type StatementGetResponse = {
  actions?: { [x: string]: unknown }[] | undefined
  condition?:
    | {
        conditions?:
          | {
              conditions?: string[] | undefined
              key?: string | undefined
              operation?: string | undefined
              values?: string[] | undefined
            }[]
          | undefined
      }
    | undefined
  effect: string
  operation?: string | undefined
  resource?: string | undefined
}
type PolicyGetResponse = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  statements?: StatementGetResponse[] | undefined
}
type PolicySaveRequest = { description: string; name: string; statements: StatementGetResponse[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/policy-engine/evaluate': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: EvaluatePolicyRequest
        }
        output: PolicyActionGetResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/policy-engine/policies': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: PolicyGetResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/policy-engine/policies/:id': {
      $delete: {
        input: { param: { id: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { id: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: PolicyGetResponse[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { id: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: PolicySaveRequest }
        output: PolicyGetResponse[]
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { id: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: PolicySaveRequest }
        output: PolicyGetResponse[]
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes

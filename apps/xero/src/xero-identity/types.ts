type Connection = {
  id?: string | undefined
  tenantId?: string | undefined
  authEventId?: string | undefined
  tenantType?: string | undefined
  tenantName?: string | undefined
  createdDateUtc?: string | undefined
  updatedDateUtc?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/Connections': {
      $get: {
        input: { query: { authEventId?: string | undefined } }
        output: Connection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/Connections/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes

declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/hackathons/coming.json': {
      $get: {
        input: { query: { page?: number | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/hackathons/:id.json': {
      $get: { input: { param: { id: number } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/swagger_doc.json': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/swagger_doc/:name.json': {
      $get: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 200 }
    }
  },
  '/'
>
export default routes

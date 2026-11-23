declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1/cloud-plugin': {
      $get:
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/api/v1/llm-api': {
      $get:
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 501 }
        | { input: { query: { input: string } }; output: {}; outputFormat: string; status: 503 }
    }
  },
  '/'
>
export default routes

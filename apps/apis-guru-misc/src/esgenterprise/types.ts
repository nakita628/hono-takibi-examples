declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/search': {
      $get: {
        input: { query: { q: string } }
        output: {
          company_name?: string | undefined
          environment_score?: number | undefined
          governance_score?: number | undefined
          last_processing_date?: string | undefined
          social_score?: number | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

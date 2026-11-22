type ErrorMessage = {
  statusCode?: number | undefined
  error?: (string | null) | undefined
  inner?: ErrorMessage | undefined
  canBeRetried?: 'Unknown' | 'Yes' | 'No' | undefined
  detailedErrorCode?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/anything': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 404 }
    }
  },
  '/'
>
export default routes

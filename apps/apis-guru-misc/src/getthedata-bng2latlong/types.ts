declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bng2latlong/:easting/:northing': {
      $get: {
        input: { param: { easting: number; northing: number } }
        output: {
          easting?: number | undefined
          error?: string | undefined
          latitude?: number | undefined
          longitude?: number | undefined
          northing?: number | undefined
          status?: 'ok' | 'error' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/magnetic_field': {
      $get: {
        input: { query: { altitude: number; latitude: number; longitude: number; year: number } }
        output: {
          declination?: { units?: string | undefined; value?: number | undefined } | undefined
          grid_variation?: { units?: string | undefined; value?: number | undefined } | undefined
          inclination?: { units?: string | undefined; value?: number | undefined } | undefined
          total_intensity?: { units?: string | undefined; value?: number | undefined } | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

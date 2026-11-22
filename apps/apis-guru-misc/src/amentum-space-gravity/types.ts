type Height = { height?: { units?: string | undefined; value?: number | undefined } | undefined }
type Anomaly = {
  eta?: { units?: string | undefined; value?: number | undefined } | undefined
  gravity_anomaly?: { units?: string | undefined; value?: number | undefined } | undefined
  xi?: { units?: string | undefined; value?: number | undefined } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/egm2008/geoid_height': {
      $get: {
        input: { query: { latitude: number; longitude: number } }
        output: Height
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/egm2008/gravity_anomaly': {
      $get: {
        input: { query: { latitude: number; longitude: number } }
        output: Anomaly
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

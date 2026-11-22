type Forecast = { uv: number; uv_time: string }
type ForecastResult = Forecast[]
type ProtectionResult = {
  ozone: number
  ozone_time: string
  uv: number
  uv_max: number
  uv_max_time: string
  uv_time: string
}
type UvIndexResult = { from_time: string; from_uv: number; to_time: string; to_uv: number }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/forecast': {
      $get: {
        input: {
          query: {
            lat: number
            lng: number
            alt?: number | undefined
            ozone?: number | undefined
            dt?: string | undefined
          }
        } & { header: { 'x-access-token': string } }
        output: ForecastResult[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/protection': {
      $get: {
        input: {
          query: {
            lat: number
            lng: number
            from: number
            to: number
            alt?: number | undefined
            ozone?: number | undefined
          }
        } & { header: { 'x-access-token': string } }
        output: ProtectionResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/uv': {
      $get: {
        input: {
          query: {
            lat: number
            lng: number
            alt?: number | undefined
            ozone?: number | undefined
            dt?: string | undefined
          }
        } & { header: { 'x-access-token': string } }
        output: UvIndexResult
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

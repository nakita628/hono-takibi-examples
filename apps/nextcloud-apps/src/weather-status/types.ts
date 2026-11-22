type OCSMeta = {
  status: string
  statuscode: number
  message?: string | undefined
  totalitems?: string | undefined
  itemsperpage?: string | undefined
}
type Success = { success: boolean }
type LocationWithSuccess = {
  lat?: string | undefined
  lon?: string | undefined
  address?: (string | null) | undefined
  success: boolean
}
type LocationWithMode = {
  lat?: string | undefined
  lon?: string | undefined
  address?: (string | null) | undefined
  mode: bigint
}
type Forecast = {
  time: string
  data: {
    instant: {
      details: {
        air_pressure_at_sea_level: number
        air_temperature: number
        cloud_area_fraction: number
        relative_humidity: number
        wind_from_direction: number
        wind_speed: number
      }
    }
    next_12_hours: {
      summary: { symbol_code: string }
      details: { precipitation_amount?: number | undefined }
    }
    next_1_hours: {
      summary: { symbol_code: string }
      details: { precipitation_amount?: number | undefined }
    }
    next_6_hours: {
      summary: { symbol_code: string }
      details: { precipitation_amount?: number | undefined }
    }
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ocs/v2.php/apps/weather_status/api/v1/mode': {
      $put:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { mode: bigint } }
            output: { ocs: { meta: OCSMeta; data: Success } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { mode: bigint } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/weather_status/api/v1/use-personal': {
      $put:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: LocationWithSuccess } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/weather_status/api/v1/location': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: LocationWithMode } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                address?: (string | null) | undefined
                lat?: (number | null) | undefined
                lon?: (number | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: LocationWithSuccess } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & {
              json: {
                address?: (string | null) | undefined
                lat?: (number | null) | undefined
                lon?: (number | null) | undefined
              }
            }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/ocs/v2.php/apps/weather_status/api/v1/forecast': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Forecast[] | { error: string } } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: Success } }
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/ocs/v2.php/apps/weather_status/api/v1/favorites': {
      $get:
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: string[] } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { favorites: string[] } }
            output: { ocs: { meta: OCSMeta; data: Success } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'OCS-APIRequest': boolean } } & { json: { favorites: string[] } }
            output: { ocs: { meta: OCSMeta; data: { [x: string]: unknown } } }
            outputFormat: 'json'
            status: 401
          }
    }
  },
  '/'
>
export default routes

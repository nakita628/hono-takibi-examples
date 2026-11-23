type DateTimeJsonResponse = {
  abbreviation: string
  client_ip: string
  datetime: string
  day_of_week: number
  day_of_year: number
  dst: boolean
  dst_from?: string | undefined
  dst_offset: number
  dst_until?: string | undefined
  raw_offset?: number | undefined
  timezone: string
  unixtime: number
  utc_datetime: string
  utc_offset: string
  week_number: number
}
type ErrorJsonResponse = { error: string }
type DateTimeTextResponse = string
type ErrorTextResponse = string
type ListJsonResponse = string[]
type ListTextResponse = string
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ip': {
      $get:
        | { input: {}; output: DateTimeJsonResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorJsonResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/ip.txt': {
      $get:
        | { input: {}; output: DateTimeTextResponse; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErrorTextResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/ip/:ipv4': {
      $get:
        | {
            input: { param: { ipv4: string } }
            output: DateTimeJsonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ipv4: string } }
            output: ErrorJsonResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ip/:ipv4.txt': {
      $get:
        | {
            input: { param: { ipv4: string } }
            output: DateTimeTextResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ipv4: string } }
            output: ErrorTextResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/timezone': {
      $get: { input: {}; output: ListJsonResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/timezone.txt': {
      $get: { input: {}; output: ListTextResponse; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/timezone/:area': {
      $get:
        | {
            input: { param: { area: string } }
            output: ListJsonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { area: string } }
            output: ErrorJsonResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/timezone/:area.txt': {
      $get:
        | {
            input: { param: { area: string } }
            output: ListTextResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { area: string } }
            output: ErrorTextResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/timezone/:area/:location': {
      $get:
        | {
            input: { param: { area: string; location: string } }
            output: DateTimeJsonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { area: string; location: string } }
            output: ErrorJsonResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/timezone/:area/:location.txt': {
      $get:
        | {
            input: { param: { area: string; location: string } }
            output: DateTimeTextResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { area: string; location: string } }
            output: ErrorTextResponse
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/timezone/:area/:location/:region': {
      $get:
        | {
            input: { param: { area: string; location: string; region: string } }
            output: DateTimeJsonResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { area: string; location: string; region: string } }
            output: ErrorJsonResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/timezone/:area/:location/:region.txt': {
      $get:
        | {
            input: { param: { area: string; location: string; region: string } }
            output: DateTimeTextResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { area: string; location: string; region: string } }
            output: ErrorTextResponse
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes

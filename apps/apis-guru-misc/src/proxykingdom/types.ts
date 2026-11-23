type Isp = { id?: number | undefined; name?: (string | null) | undefined }
type Continent = { code?: (string | null) | undefined; name?: (string | null) | undefined }
type Country = { code?: (string | null) | undefined; name?: (string | null) | undefined }
type Subdivision = { code?: (string | null) | undefined; name?: (string | null) | undefined }
type Location = {
  accuracyRadius?: number | undefined
  cityName?: (string | null) | undefined
  continent?: Continent | undefined
  country?: Country | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  postalCode?: (string | null) | undefined
  subdivisions?: (Subdivision[] | null) | undefined
  timezone?: (string | null) | undefined
}
type Timings = {
  connectTime?: number | undefined
  firstByteTime?: number | undefined
  responseTime?: number | undefined
}
type Proxy = {
  accessType?: (string | null) | undefined
  address?: (string | null) | undefined
  isSsl?: boolean | undefined
  isp?: Isp | undefined
  lastTested?: (string | null) | undefined
  location?: Location | undefined
  port?: number | undefined
  protocol?: (string | null) | undefined
  timings?: Timings | undefined
  uptime?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/proxy': {
      $get:
        | {
            input: {
              query: {
                Token?: string | undefined
                Address?: string | undefined
                Port?: string | undefined
                Protocol?: string | undefined
                AccessType?: string | undefined
                ResponseTime?: string | undefined
                IsSsl?: string | undefined
                Uptime?: string | undefined
                Country?: string | undefined
                Continent?: string | undefined
                Timezone?: string | undefined
                LastTested?: string | undefined
              }
            } & { header: { correlation_id: string } }
            output: Proxy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                Token?: string | undefined
                Address?: string | undefined
                Port?: string | undefined
                Protocol?: string | undefined
                AccessType?: string | undefined
                ResponseTime?: string | undefined
                IsSsl?: string | undefined
                Uptime?: string | undefined
                Country?: string | undefined
                Continent?: string | undefined
                Timezone?: string | undefined
                LastTested?: string | undefined
              }
            } & { header: { correlation_id: string } }
            output: Proxy
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Token?: string | undefined
                Address?: string | undefined
                Port?: string | undefined
                Protocol?: string | undefined
                AccessType?: string | undefined
                ResponseTime?: string | undefined
                IsSsl?: string | undefined
                Uptime?: string | undefined
                Country?: string | undefined
                Continent?: string | undefined
                Timezone?: string | undefined
                LastTested?: string | undefined
              }
            } & { header: { correlation_id: string } }
            output: Proxy
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                Token?: string | undefined
                Address?: string | undefined
                Port?: string | undefined
                Protocol?: string | undefined
                AccessType?: string | undefined
                ResponseTime?: string | undefined
                IsSsl?: string | undefined
                Uptime?: string | undefined
                Country?: string | undefined
                Continent?: string | undefined
                Timezone?: string | undefined
                LastTested?: string | undefined
              }
            } & { header: { correlation_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                Token?: string | undefined
                Address?: string | undefined
                Port?: string | undefined
                Protocol?: string | undefined
                AccessType?: string | undefined
                ResponseTime?: string | undefined
                IsSsl?: string | undefined
                Uptime?: string | undefined
                Country?: string | undefined
                Continent?: string | undefined
                Timezone?: string | undefined
                LastTested?: string | undefined
              }
            } & { header: { correlation_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                Token?: string | undefined
                Address?: string | undefined
                Port?: string | undefined
                Protocol?: string | undefined
                AccessType?: string | undefined
                ResponseTime?: string | undefined
                IsSsl?: string | undefined
                Uptime?: string | undefined
                Country?: string | undefined
                Continent?: string | undefined
                Timezone?: string | undefined
                LastTested?: string | undefined
              }
            } & { header: { correlation_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                Token?: string | undefined
                Address?: string | undefined
                Port?: string | undefined
                Protocol?: string | undefined
                AccessType?: string | undefined
                ResponseTime?: string | undefined
                IsSsl?: string | undefined
                Uptime?: string | undefined
                Country?: string | undefined
                Continent?: string | undefined
                Timezone?: string | undefined
                LastTested?: string | undefined
              }
            } & { header: { correlation_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes

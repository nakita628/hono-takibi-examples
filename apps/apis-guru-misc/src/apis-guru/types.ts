type ApiVersion = {
  added: string
  externalDocs?: { [x: string]: unknown } | undefined
  info: { [x: string]: unknown }
  link?: string | undefined
  openapiVer: string
  swaggerUrl: string
  swaggerYamlUrl: string
  updated: string
}
type API = { added: string; preferred: string; versions: { [x: string]: ApiVersion } }
type APIs = { [x: string]: API }
type Metrics = {
  datasets?: { [x: string]: unknown }[] | undefined
  fixedPct?: number | undefined
  fixes?: number | undefined
  invalid?: number | undefined
  issues?: number | undefined
  numAPIs: number
  numDrivers?: number | undefined
  numEndpoints: number
  numProviders?: number | undefined
  numSpecs: number
  stars?: number | undefined
  thisWeek?: { added?: number | undefined; updated?: number | undefined } | undefined
  unofficial?: number | undefined
  unreachable?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  { '/list.json': { $get: { input: {}; output: APIs; outputFormat: 'json'; status: 200 } } } & {
    '/metrics.json': { $get: { input: {}; output: Metrics; outputFormat: 'json'; status: 200 } }
  } & {
    '/providers.json': {
      $get: {
        input: {}
        output: { data?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/specs/:provider/:api.json': {
      $get: {
        input: { param: { provider: string; api: string } }
        output: API
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/specs/:provider/:service/:api.json': {
      $get: {
        input: { param: { provider: string; service: string; api: string } }
        output: API
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:provider.json': {
      $get: {
        input: { param: { provider: string } }
        output: APIs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:provider/services.json': {
      $get: {
        input: { param: { provider: string } }
        output: { data?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

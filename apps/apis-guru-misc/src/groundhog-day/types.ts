type Prediction = {
  details: string
  groundhog?: Groundhog | undefined
  shadow: number | null
  year: number
}
type Groundhog = {
  active: 0 | 1
  city: string
  contact: string
  coordinates: string
  country: string
  currentPrediction: string
  description: string
  id: number
  image: string
  isGroundhog: number
  name: string
  predictions?: Prediction[] | undefined
  predictionsCount?: number | undefined
  region: string
  shortname: string
  slug: string
  source: string
  type: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v1': {
      $get: {
        input: {}
        output: {
          _links?:
            | {
                groundhog?: { href: string } | undefined
                groundhogs?: { href: string } | undefined
                predictions?: { href: string } | undefined
                self?: { href: string } | undefined
                spec?: { href: string } | undefined
              }
            | undefined
          message: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/groundhogs': {
      $get: {
        input: {
          query: {
            country?: string | undefined
            isGroundhog?: '1' | '0' | 'true' | 'false' | undefined
          }
        }
        output: { groundhogs?: Groundhog[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/groundhogs/:slug': {
      $get:
        | {
            input: { param: { slug: string } }
            output: { groundhog?: Groundhog | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { slug: string } }
            output: { error?: { message: string; status: number; timestamp: string } | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v1/predictions': {
      $get:
        | {
            input: { query: { year?: number | undefined } }
            output: { predictions?: Prediction[] | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { year?: number | undefined } }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: { query: { year?: number | undefined } }
            output: { error?: { message: string; status: number; timestamp: string } | undefined }
            outputFormat: 'json'
            status: 400
          }
    }
  } & { '/api/v1/spec': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } },
  '/'
>
export default routes

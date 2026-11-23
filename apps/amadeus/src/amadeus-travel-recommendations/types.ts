type RecommendedLocation = {
  geoCode?: { latitude?: number | undefined; longitude?: number | undefined } | undefined
  iataCode?: string | undefined
  name?: string | undefined
  subtype?: string | undefined
  relevance?: number | undefined
  type?: string | undefined
}
type Meta = { count?: bigint | undefined; links?: { self?: string | undefined } | undefined }
type Warning = {
  code: number
  detail?: string | undefined
  source?:
    | { example?: string | undefined; parameter?: string | undefined; pointer?: string | undefined }
    | undefined
  title: string
}
type Error_400 = {
  errors?:
    | {
        code?: number | undefined
        detail?: string | undefined
        source?:
          | {
              example?: string | undefined
              parameter?: string | undefined
              pointer?: string | undefined
            }
          | undefined
        status?: number | undefined
        title?: string | undefined
      }[]
    | undefined
}
type Error_500 = {
  errors?:
    | {
        code?: number | undefined
        detail?: string | undefined
        source?:
          | {
              example?: string | undefined
              parameter?: string | undefined
              pointer?: string | undefined
            }
          | undefined
        status?: number | undefined
        title?: string | undefined
      }[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/reference-data/recommended-locations': {
      $get:
        | {
            input: {
              query: {
                cityCodes: string
                travelerCountryCode?: string | undefined
                destinationCountryCodes?: string | undefined
              }
            }
            output: {
              data?: RecommendedLocation[] | undefined
              meta?: Meta | undefined
              warnings?: Warning[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cityCodes: string
                travelerCountryCode?: string | undefined
                destinationCountryCodes?: string | undefined
              }
            }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cityCodes: string
                travelerCountryCode?: string | undefined
                destinationCountryCodes?: string | undefined
              }
            }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes

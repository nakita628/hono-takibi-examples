type CategoryRatedAreas = {
  categoryScores?:
    | {
        nightLife?: { overall?: number | undefined } | undefined
        restaurant?: { overall?: number | undefined; vegetarian?: number | undefined } | undefined
        shopping?: { luxury?: number | undefined; overall?: number | undefined } | undefined
        sight?:
          | {
              beachAndPark?: number | undefined
              historical?: number | undefined
              overall?: number | undefined
            }
          | undefined
      }
    | undefined
  geoCode?: { latitude?: number | undefined; longitude?: number | undefined } | undefined
  radius?: number | undefined
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
    '/location/analytics/category-rated-areas': {
      $get:
        | {
            input: { query: { latitude: number; longitude: number } }
            output: {
              data?: CategoryRatedAreas[] | undefined
              meta?: Meta | undefined
              warnings?: Warning[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { latitude: number; longitude: number } }
            output: Error_400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { latitude: number; longitude: number } }
            output: Error_500
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes

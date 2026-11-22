type OpeningTime = string[]
type TravelCenter = {
  address?: string | undefined
  city?: string | undefined
  id?: number | undefined
  lat?: number | undefined
  lon?: number | undefined
  name?: string | undefined
  openingTimes?:
    | {
        fri?: OpeningTime | undefined
        mon?: OpeningTime | undefined
        sat?: OpeningTime | undefined
        sun?: OpeningTime | undefined
        thu?: OpeningTime | undefined
        tue?: OpeningTime | undefined
        wed?: OpeningTime | undefined
      }
    | undefined
  postCode?: string | undefined
  type?: 'Reisezentrum' | 'Mobility Center' | undefined
}
type TravelCenterList = TravelCenter[]
type Error = { code?: number | undefined; message?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/reisezentren': {
      $get:
        | {
            input: { query: { name?: string | undefined } }
            output: TravelCenterList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { name?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 416
          }
    }
  } & {
    '/reisezentren/loc/:lat/:lon': {
      $get: {
        input: { param: { lat: number; lon: number } }
        output: TravelCenter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reisezentren/loc/:lat/:lon/:dist': {
      $get: {
        input: { param: { lat: number; lon: number; dist: number } }
        output: TravelCenter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/reisezentren/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TravelCenter
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'text'; status: 404 }
    }
  },
  '/'
>
export default routes

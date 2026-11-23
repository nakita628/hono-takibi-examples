declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1.0/compareStation/:stationName/': {
      $get: {
        input: { param: { stationName: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1.0/getAemetStation/:stationName/:period/': {
      $get: {
        input: { param: { stationName: string; period: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1.0/getEasyWind/:easywindId/': {
      $get: {
        input: { param: { easywindId: string } } & { query: { period: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1.0/getEventStations/:eventId/': {
      $get: { input: { param: { eventId: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1.0/getForecastPoints/:yatchclubid/language/:language': {
      $get: {
        input: { param: { yatchclubid: string; language: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1.0/getForecastTimeSeries/:latitude/:longitude/': {
      $get: {
        input: { param: { latitude: number; longitude: number } } & {
          query: {
            inittime?: string | undefined
            endtime?: string | undefined
            days?: number | undefined
            hours?: number | undefined
            weather: string
            wave?: string | undefined
            entryid?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1.0/getForecastTimeSeriesWrf/:latitude/:longitude/': {
      $get: {
        input: { param: { latitude: number; longitude: number } } & {
          query: {
            inittime?: string | undefined
            endtime?: string | undefined
            days?: number | undefined
            hours?: number | undefined
            weather: string
            wave?: string | undefined
            entryid?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1.0/getSocibWeatherStation/:stationName/:period/': {
      $get: {
        input: { param: { stationName: string; period: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1.0/getWeatherDisplay/:stationName/': {
      $get: {
        input: { param: { stationName: string } } & { query: { period: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1.0/getWebCams/': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  },
  '/'
>
export default routes

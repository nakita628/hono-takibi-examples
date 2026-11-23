declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/VisualCrossingWebServices/rest/services/timeline/:location': {
      $get: {
        input: { param: { location: string } } & {
          query: {
            contentType?: string | undefined
            unitGroup?: string | undefined
            include?: string | undefined
            lang?: string | undefined
            key: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/VisualCrossingWebServices/rest/services/timeline/:location/:startdate': {
      $get: {
        input: { param: { location: string; startdate: string } } & {
          query: {
            contentType?: string | undefined
            unitGroup?: string | undefined
            include?: string | undefined
            lang?: string | undefined
            key: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/VisualCrossingWebServices/rest/services/timeline/:location/:startdate/:enddate': {
      $get: {
        input: { param: { location: string; startdate: string; enddate: string } } & {
          query: {
            contentType?: string | undefined
            unitGroup?: string | undefined
            include?: string | undefined
            lang?: string | undefined
            key: string
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/VisualCrossingWebServices/rest/services/weatherdata/forecast': {
      $get: {
        input: {
          query: {
            sendAsDatasource?: boolean | undefined
            allowAsynch?: boolean | undefined
            shortColumnNames?: boolean | undefined
            locations?: string | undefined
            aggregateHours?: string | undefined
            contentType?: string | undefined
            unitGroup?: string | undefined
            key?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/VisualCrossingWebServices/rest/services/weatherdata/history': {
      $get: {
        input: {
          query: {
            maxDistance?: string | undefined
            shortColumnNames?: boolean | undefined
            endDateTime?: string | undefined
            aggregateHours?: string | undefined
            collectStationContributions?: boolean | undefined
            startDateTime?: string | undefined
            maxStations?: string | undefined
            allowAsynch?: boolean | undefined
            locations?: string | undefined
            includeNormals?: boolean | undefined
            contentType?: string | undefined
            unitGroup?: string | undefined
            key?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes

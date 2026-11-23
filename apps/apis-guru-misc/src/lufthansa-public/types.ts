type Name = { $?: string | undefined; '@LanguageCode'?: string | undefined }
type Coordinate = { Latitude?: number | undefined; Longitude?: number | undefined }
type Airport = {
  AirportCode?: string | undefined
  CityCode?: string | undefined
  CountryCode?: string | undefined
  LocationType?: string | undefined
  Names?: { Name?: Name[] | undefined } | undefined
  Position?: { Coordinate?: Coordinate | undefined } | undefined
  TimeZoneId?: string | undefined
  UtcOffset?: number | undefined
}
type Link = { '@Href'?: string | undefined; '@Rel'?: string | undefined }
type AirportResource = {
  Airports?: { Airport?: Airport | undefined } | undefined
  Meta?:
    | {
        '@Version'?: string | undefined
        Link?: Link[] | undefined
        TotalCount?: number | undefined
      }
    | undefined
}
type AirportResponse = { AirportResource?: AirportResource | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/cargo/getRoute/:origin-{destination}/:fromDate/:productCode': {
      $get: {
        input: {
          param: {
            origin: string
            destination: string
            fromDate: string
            productCode:
              | 'FAN'
              | 'FCO'
              | 'FCP'
              | 'FDG'
              | 'FTF'
              | 'FUN'
              | 'FWN'
              | 'YCO'
              | 'YCP'
              | 'YDG'
              | 'YNB'
              | 'YNZ'
              | 'YTF'
              | 'YUN'
              | 'ZXB'
              | 'ZXF'
              | 'ZXR'
          }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cargo/shipmentTracking/:aWBPrefix-{aWBNumber}': {
      $get: {
        input: { param: { aWBPrefix: string; aWBNumber: string } } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/lounges/:location': {
      $get: {
        input: { param: { location: string } } & {
          query: {
            cabinClass?: string | undefined
            tierCode?: string | undefined
            lang?: string | undefined
          }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/offers/seatmaps/:flightNumber/:origin/:destination/:date/:cabinClass': {
      $get: {
        input: {
          param: {
            flightNumber: string
            origin: string
            destination: string
            date: string
            cabinClass: string
          }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/operations/flightstatus/arrivals/:airportCode/:fromDateTime': {
      $get: {
        input: { param: { airportCode: string; fromDateTime: string } } & {
          query: { limit?: string | undefined; offset?: string | undefined }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/operations/flightstatus/departures/:airportCode/:fromDateTime': {
      $get: {
        input: { param: { airportCode: string; fromDateTime: string } } & {
          query: { limit?: string | undefined; offset?: string | undefined }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/operations/flightstatus/route/:origin/:destination/:date': {
      $get: {
        input: { param: { origin: string; destination: string; date: string } } & {
          query: { limit?: string | undefined; offset?: string | undefined }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/operations/flightstatus/:flightNumber/:date': {
      $get: {
        input: { param: { flightNumber: string; date: string } } & {
          query: { limit?: string | undefined; offset?: string | undefined }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/operations/schedules/:origin/:destination/:fromDateTime': {
      $get: {
        input: { param: { origin: string; destination: string; fromDateTime: string } } & {
          query: {
            directFlights?: boolean | undefined
            limit?: string | undefined
            offset?: string | undefined
          }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/references/aircraft/:aircraftCode': {
      $get: {
        input: { param: { aircraftCode: string } } & {
          query: { limit?: string | undefined; offset?: string | undefined }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/references/airlines/:airlineCode': {
      $get: {
        input: { param: { airlineCode: string } } & {
          query: { limit?: string | undefined; offset?: string | undefined }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/references/airports/nearest/:latitude,{longitude}': {
      $get: {
        input: { param: { latitude: number; longitude: number } } & {
          query: { lang?: string | undefined }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/references/airports/:airportCode': {
      $get: {
        input: { param: { airportCode: string } } & {
          query: {
            lang?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
            LHoperated?: boolean | undefined
          }
        } & { header: { Accept: string } }
        output: AirportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/references/cities/:cityCode': {
      $get: {
        input: { param: { cityCode: string } } & {
          query: {
            lang?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
          }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/references/countries/:countryCode': {
      $get: {
        input: { param: { countryCode: string } } & {
          query: {
            lang?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
          }
        } & { header: { Accept: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

import { createRoute, z } from '@hono/zod-openapi'

const NameSchema = z
  .object({ $: z.string().exactOptional(), '@LanguageCode': z.string().exactOptional() })
  .openapi({
    description: '2-letter ISO 639-1 language code for the corresponding item.',
    required: [],
  })
  .openapi('Name')

const CoordinateSchema = z
  .object({
    Latitude: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Decimal latitude. Range: -90 (South Pole) to +90 (North Pole), e.g. “51.540”.',
      }),
    Longitude: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Decimal longitude. Range: -180 (West of Prime Meridian) to +180 (East of Prime Meridian).',
      }),
  })
  .openapi({ description: 'Container for coordinates.', required: [] })
  .openapi('Coordinate')

const AirportSchema = z
  .object({
    AirportCode: z
      .string()
      .exactOptional()
      .openapi({ description: '3-letter IATA airport code, e.g. “TXL”.' }),
    CityCode: z
      .string()
      .exactOptional()
      .openapi({ description: '3-letter IATA city code, e.g. “BER”.' }),
    CountryCode: z
      .string()
      .exactOptional()
      .openapi({ description: '2-letter ISO 3166-1 country code, e.g. “DE”.' }),
    LocationType: z
      .string()
      .exactOptional()
      .openapi({ description: ' “Airport”, “RailwayStation” or “BusStation”.' }),
    Names: z
      .object({
        Name: z
          .array(NameSchema)
          .exactOptional()
          .openapi({ description: 'Array: language specific full name of airport.' }),
      })
      .exactOptional()
      .openapi({ description: 'Container for airport names.', required: [] }),
    Position: z
      .object({ Coordinate: CoordinateSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description:
          'Physical location of an airport. This data section is optional and therefore not always present.',
        required: [],
      }),
    TimeZoneId: z.string().exactOptional().openapi({ description: 'Time zone name airport is in' }),
    UtcOffset: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Hour offset of airport to UTC time zone' }),
  })
  .openapi({
    description: 'Array of all available airports or one airport matching the request.',
    required: [],
  })
  .openapi('Airport')

const LinkSchema = z
  .object({
    '@Href': z.string().exactOptional().openapi({ description: 'Link to actual a resource.' }),
    '@Rel': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifying kind of link such as ‘self’ (link that returned this response), ‘alternate’ (link that points to another resource) or ‘related’ (link that points to related resource).',
      }),
  })
  .openapi({ required: [] })
  .openapi('Link')

const AirportResourceSchema = z
  .object({
    Airports: z
      .object({ Airport: AirportSchema.exactOptional() })
      .exactOptional()
      .openapi({ description: 'Container for airport elements.', required: [] }),
    Meta: z
      .object({
        '@Version': z.string().exactOptional(),
        Link: z
          .array(LinkSchema)
          .exactOptional()
          .openapi({ description: 'Array: links to resource itself and other related resources.' }),
        TotalCount: z.int32().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Container for meta links.', required: [] }),
  })
  .openapi({ description: 'Root element of airport response.', required: [] })
  .openapi('AirportResource')

const AirportResponseSchema = z
  .object({ AirportResource: AirportResourceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AirportResponse')

const AuthSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://api.lufthansa.com/v1/oauth/token',
      scopes: { 'read:LH Open API': 'read access' },
      tokenUrl: 'https://api.lufthansa.com/v1/oauth/token',
    },
  },
  type: 'oauth2',
}

export const getCargoGetRouteOriginDestinationFromDateProductCodeRoute = createRoute({
  method: 'get',
  path: '/cargo/getRoute/{origin}-{destination}/{fromDate}/{productCode}',
  tags: ['Cargo'],
  summary: 'Retrieve all flights',
  description:
    'Retrieve a list of all possible flights (both direct and connecting) between two airports on a given date. Routes are available for today and up to days in the future.',
  operationId: 'CargoGetRouteFromDateProductCodeByOriginAndDestinationGet',
  request: {
    params: z.object({
      origin: z
        .string()
        .openapi({
          param: {
            description: 'Departure Airport : 3-letter IATA airport code, e.g. FRA.',
            in: 'path',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description: 'Arrival airport : 3-letter IATA airport code, e.g. HKG.',
            in: 'path',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fromDate: z
        .string()
        .openapi({
          param: {
            description:
              'Departure date in the local time of the departure airport. Based on LAT (Latest Acceptance Time). format : yyyy-MM-dd eg : 2017-07-15',
            in: 'path',
            name: 'fromDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      productCode: z
        .enum([
          'FAN',
          'FCO',
          'FCP',
          'FDG',
          'FTF',
          'FUN',
          'FWN',
          'YCO',
          'YCP',
          'YDG',
          'YNB',
          'YNZ',
          'YTF',
          'YUN',
          'ZXB',
          'ZXF',
          'ZXR',
        ])
        .openapi({
          param: {
            description: 'Product code for requested service and specials : 3-letter eg: YNZ',
            in: 'path',
            name: 'productCode',
            required: true,
            schema: {
              enum: [
                'FAN',
                'FCO',
                'FCP',
                'FDG',
                'FTF',
                'FUN',
                'FWN',
                'YCO',
                'YCP',
                'YDG',
                'YNB',
                'YNZ',
                'YTF',
                'YUN',
                'ZXB',
                'ZXF',
                'ZXR',
              ],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getCargoShipmentTrackingAWBPrefixAWBNumberRoute = createRoute({
  method: 'get',
  path: '/cargo/shipmentTracking/{aWBPrefix}-{aWBNumber}',
  tags: ['Cargo'],
  summary: 'Shipment Tracking',
  description:
    'With this tracking service you can easily retrieve your shipment or flight status information.',
  operationId: 'CargoShipmentTrackingByAWBPrefixAndAWBNumberGet',
  request: {
    params: z.object({
      aWBPrefix: z
        .string()
        .openapi({
          param: {
            description:
              'aWBPrefix : Represents the airline that is the owner of this AWB, i.e. "020" = Lufthansa Cargo, format : [0-9]{3} e.g. 020',
            in: 'path',
            name: 'aWBPrefix',
            required: true,
            schema: { type: 'string' },
          },
        }),
      aWBNumber: z
        .string()
        .openapi({
          param: {
            description: 'aWBNumber : The Air Waybill Number , format : [0-9]{8} e.g. 08002050',
            in: 'path',
            name: 'aWBNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getOffersLoungesLocationRoute = createRoute({
  method: 'get',
  path: '/offers/lounges/{location}',
  tags: ['Offers'],
  summary: 'Lounges',
  description: 'Lounge information',
  operationId: 'OffersLoungesByLocationGet',
  request: {
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description: "3-leter IATA airport or city code (e.g. 'ZRH')",
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      cabinClass: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cabin class: \'M\', \'E\', \'C\', \'F\' (Acceptable values are: "", "M", "E", "C", "F")',
            in: 'query',
            name: 'cabinClass',
            required: false,
            schema: { type: 'string' },
          },
        }),
      tierCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Frequent flyer level (\'FTL\', \'SGC\', \'SEN\', \'HON\') (Acceptable values are: "", "FTL", "SGC", "SEN", "HON")',
            in: 'query',
            name: 'tierCode',
            required: false,
            schema: { type: 'string' },
          },
        }),
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Language code.',
            in: 'query',
            name: 'lang',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getOffersSeatmapsFlightNumberOriginDestinationDateCabinClassRoute = createRoute({
  method: 'get',
  path: '/offers/seatmaps/{flightNumber}/{origin}/{destination}/{date}/{cabinClass}',
  tags: ['Offers'],
  summary: 'Seat Maps',
  description: 'Cabin layout and seat characteristics.',
  operationId: 'OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet',
  request: {
    params: z.object({
      flightNumber: z
        .string()
        .openapi({
          param: {
            description: "Flight number including carrier code and any suffix (e.g. 'LH2037')",
            in: 'path',
            name: 'flightNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
      origin: z
        .string()
        .openapi({
          param: {
            description: "Departure airport. 3-letter IATA airport code (e.g. 'TXL')",
            in: 'path',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description: "Destination airport. 3-letter IATA airport code (e.g. 'MUC')",
            in: 'path',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description: 'Departure date (YYYY-MM-DD)',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cabinClass: z
        .string()
        .openapi({
          param: {
            description:
              'Cabin class: \'M\', \'E\', \'C\', \'F\'. Some flights have fewer classes (Acceptable values are: "M", "E", "C", "F")',
            in: 'path',
            name: 'cabinClass',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getOperationsFlightstatusArrivalsAirportCodeFromDateTimeRoute = createRoute({
  method: 'get',
  path: '/operations/flightstatus/arrivals/{airportCode}/{fromDateTime}',
  tags: ['Operations'],
  summary: 'Flight Status at Arrival Airport',
  description:
    'Status of all arrivals at a given airport up to 4 hours from the provided date time.',
  operationId: 'OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet',
  request: {
    params: z.object({
      airportCode: z
        .string()
        .openapi({
          param: {
            description: "3-letter IATA aiport code (e.g. 'ZRH')",
            in: 'path',
            name: 'airportCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fromDateTime: z
        .string()
        .openapi({
          param: {
            description: 'Start of time range in local time of arrival airport (YYYY-MM-DDTHH:mm)',
            in: 'path',
            name: 'fromDateTime',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records skipped. Defaults to 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getOperationsFlightstatusDeparturesAirportCodeFromDateTimeRoute = createRoute({
  method: 'get',
  path: '/operations/flightstatus/departures/{airportCode}/{fromDateTime}',
  tags: ['Operations'],
  summary: 'Flight Status at Departure Airport',
  description:
    'Status of all departures from a given airport up to 4 hours from the provided date time.',
  operationId: 'OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet',
  request: {
    params: z.object({
      airportCode: z
        .string()
        .openapi({
          param: {
            description: "Departure airport. 3-letter IATA airport code (e.g. 'HAM')",
            in: 'path',
            name: 'airportCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fromDateTime: z
        .string()
        .openapi({
          param: {
            description:
              'Start of time range in local time of departure airport (YYYY-MM-DDTHH:mm)',
            in: 'path',
            name: 'fromDateTime',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records skipped. Defaults to 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getOperationsFlightstatusRouteOriginDestinationDateRoute = createRoute({
  method: 'get',
  path: '/operations/flightstatus/route/{origin}/{destination}/{date}',
  tags: ['Operations'],
  summary: 'Flight Status by Route',
  description: 'Status of flights between a given origin and destination on a given date.',
  operationId: 'OperationsFlightstatusRouteDateByOriginAndDestinationGet',
  request: {
    params: z.object({
      origin: z
        .string()
        .openapi({
          param: {
            description: "3-letter IATA airport (e.g. 'FRA')",
            in: 'path',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description: "3-letter IATA airport code (e.g. 'JFK')",
            in: 'path',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description: 'Departure date (YYYY-MM-DD) in local time of departure airport',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records skipped. Defaults to 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getOperationsFlightstatusFlightNumberDateRoute = createRoute({
  method: 'get',
  path: '/operations/flightstatus/{flightNumber}/{date}',
  tags: ['Operations'],
  summary: 'Flight Status',
  description: 'Status of a particular flight (boarding, delayed, etc.).',
  operationId: 'OperationsFlightstatusByFlightNumberAndDateGet',
  request: {
    params: z.object({
      flightNumber: z
        .string()
        .openapi({
          param: {
            description: "Flight number including carrier code and any suffix (e.g. 'LH400')",
            in: 'path',
            name: 'flightNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The departure date (YYYY-MM-DD) in the local time of the departure airport',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records skipped. Defaults to 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getOperationsSchedulesOriginDestinationFromDateTimeRoute = createRoute({
  method: 'get',
  path: '/operations/schedules/{origin}/{destination}/{fromDateTime}',
  tags: ['Operations'],
  summary: 'Flight Schedules',
  description: 'Scheduled flights between given airports on a given date.',
  operationId: 'OperationsSchedulesFromDateTimeByOriginAndDestinationGet',
  request: {
    params: z.object({
      origin: z
        .string()
        .openapi({
          param: {
            description: "Departure airport. 3-letter IATA airport code (e.g. 'ZRH')",
            in: 'path',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description: "Destination airport. 3-letter IATA airport code (e.g. 'FRA')",
            in: 'path',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fromDateTime: z
        .string()
        .openapi({
          param: {
            description:
              'Local departure date and optionally departure time (YYYY-MM-DD or YYYY-MM-DDTHH:mm). When not provided, time is assumed to be 00:01',
            in: 'path',
            name: 'fromDateTime',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      directFlights: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Show only direct flights (false=0, true=1). Default is false',
            in: 'query',
            name: 'directFlights',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records skipped. Defaults to 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getReferencesAircraftAircraftCodeRoute = createRoute({
  method: 'get',
  path: '/references/aircraft/{aircraftCode}',
  tags: ['Reference Data'],
  summary: 'Aircraft',
  description: 'List all aircraft types or one specific aircraft type.',
  operationId: 'ReferencesAircraftByAircraftCodeGet',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      aircraftCode: z
        .string()
        .default('33P')
        .openapi({
          param: {
            description: '3-character IATA aircraft code',
            in: 'path',
            name: 'aircraftCode',
            required: true,
            schema: { default: '33P', type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .default('20')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '20', type: 'string' },
          },
        }),
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records skipped. Defaults to 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getReferencesAirlinesAirlineCodeRoute = createRoute({
  method: 'get',
  path: '/references/airlines/{airlineCode}',
  tags: ['Reference Data'],
  summary: 'Airlines',
  description: 'List all airlines or one specific airline.',
  operationId: 'ReferencesAirlinesByAirlineCodeGet',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      airlineCode: z
        .string()
        .default('LH')
        .openapi({
          param: {
            description: '2-character IATA airline/carrier code',
            in: 'path',
            name: 'airlineCode',
            required: true,
            schema: { default: 'LH', type: 'string' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .default('20')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '20', type: 'string' },
          },
        }),
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records skipped. Defaults to 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getReferencesAirportsNearestLatitudeLongitudeRoute = createRoute({
  method: 'get',
  path: '/references/airports/nearest/{latitude},{longitude}',
  tags: ['Reference Data'],
  summary: 'Nearest Airports',
  description:
    'List the 5 closest airports to the given latitude and longitude, irrespective of the radius of the reference point.',
  operationId: 'ReferencesAirportsNearestByLatitudeAndLongitudeGet',
  request: {
    params: z.object({
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Latitude in decimal format to at most 3 decimal places',
            in: 'path',
            name: 'latitude',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'Longitude in decimal format to at most 3 decimal places',
            in: 'path',
            name: 'longitude',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '2 letter ISO 3166-1 language code',
            in: 'query',
            name: 'lang',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getReferencesAirportsAirportCodeRoute = createRoute({
  method: 'get',
  path: '/references/airports/{airportCode}',
  tags: ['Reference Data'],
  summary: 'Airports',
  description:
    'List all airports or one specific airport. All airports response is very large. It is possible to request the response in a specific language.',
  operationId: 'ReferencesAirportsByAirportCodeGet',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      airportCode: z
        .string()
        .default('TXL')
        .openapi({
          param: {
            description: '3-letter IATA airport code',
            in: 'path',
            name: 'airportCode',
            required: true,
            schema: { default: 'TXL', type: 'string' },
          },
        }),
    }),
    query: z.object({
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '2-letter ISO 3166-1 language code',
            in: 'query',
            name: 'lang',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('20')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '20', type: 'string' },
          },
        }),
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records skipped. Defaults to 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
      LHoperated: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Restrict the results to locations with flights operated by LH (false=0, true=1)',
            in: 'query',
            name: 'LHoperated',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: AirportResponseSchema } } },
  },
  security: [{ auth: [] }],
})

export const getReferencesCitiesCityCodeRoute = createRoute({
  method: 'get',
  path: '/references/cities/{cityCode}',
  tags: ['Reference Data'],
  summary: 'Cities',
  description:
    'List all cities or one specific city. It is possible to request the response in a specific language.',
  operationId: 'ReferencesCitiesByCityCodeGet',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      cityCode: z
        .string()
        .default('BER')
        .openapi({
          param: {
            description: '3-letter IATA city code',
            in: 'path',
            name: 'cityCode',
            required: true,
            schema: { default: 'BER', type: 'string' },
          },
        }),
    }),
    query: z.object({
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '2 letter ISO 3166-1 language code',
            in: 'query',
            name: 'lang',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('20')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '20', type: 'string' },
          },
        }),
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records skipped. Defaults to 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

export const getReferencesCountriesCountryCodeRoute = createRoute({
  method: 'get',
  path: '/references/countries/{countryCode}',
  tags: ['Reference Data'],
  summary: 'Countries',
  description:
    'List all countries or one specific country. It is possible to request the response in a specific language.',
  operationId: 'ReferencesCountriesByCountryCodeGet',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      countryCode: z
        .string()
        .default('DK')
        .openapi({
          param: {
            description: '2-letter ISO 3166-1 country code',
            in: 'path',
            name: 'countryCode',
            required: true,
            schema: { default: 'DK', type: 'string' },
          },
        }),
    }),
    query: z.object({
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '2 letter ISO 3166-1 language code',
            in: 'query',
            name: 'lang',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .default('20')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of records returned per request. Defaults to 20, maximum is 100 (if a value bigger than 100 is given, 100 will be taken)',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: '20', type: 'string' },
          },
        }),
      offset: z
        .string()
        .default('0')
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of records skipped. Defaults to 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: '0', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.object({}) } } },
  },
  security: [{ auth: [] }],
})

import { createRoute, z } from '@hono/zod-openapi'

const AuthSecurityScheme = {
  flows: {
    clientCredentials: {
      scopes: { 'read:LH Open API': 'read access' },
      tokenUrl: 'https://api.lufthansa.com/v1/partners/oauth/token',
    },
  },
  type: 'oauth2',
}

export const getBaggageBaggagetripandcontactSearchIDRoute = createRoute({
  method: 'get',
  path: '/baggage/baggagetripandcontact/{searchID}',
  tags: ['Baggage'],
  summary: 'Baggage Trip and Contact',
  description:
    'Retrieve passenger trip, contact and baggage details. This service is only accessible for LH privileged partners',
  operationId: 'Baggage Trip and Contact',
  request: {
    params: z.object({
      searchID: z
        .string()
        .openapi({
          param: {
            description: 'Bag tag number, PNR, boarding card or FQTV ID',
            in: 'path',
            name: 'searchID',
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersFaresAllfaresRoute = createRoute({
  method: 'get',
  path: '/offers/fares/allfares',
  tags: ['Offers'],
  summary: 'All Fares',
  description:
    'Retrieves all available fares for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS',
  operationId: 'All Fares',
  request: {
    query: z.object({
      catalogues: z
        .string()
        .openapi({
          param: {
            description:
              "Specifies in which catalogue the fares need to be searched (e.g.'4U;OS').",
            in: 'query',
            name: 'catalogues',
            required: true,
            schema: { type: 'string' },
          },
        }),
      origin: z
        .string()
        .openapi({
          param: {
            description: "Enter journey origin (e.g 'FRA').",
            in: 'query',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description: "Enter journey destination (e.g 'MAD').",
            in: 'query',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'travel-date': z
        .string()
        .openapi({
          param: {
            description: 'Enter journey travel-date (e.g 2016-10-20)',
            in: 'query',
            name: 'travel-date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'return-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Enter journey return-date (e.g 2016-10-31)'.",
            in: 'query',
            name: 'return-date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'cabin-class': z
        .string()
        .default('economy')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enter the required cabin class (e.g econonmy, business etc.). (Acceptable values are: "", "economy", "premium economy", "business", "first")',
            in: 'query',
            name: 'cabin-class',
            required: false,
            schema: { default: 'economy', type: 'string' },
          },
        }),
      travelers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specifies the type and number of travelers (e.g. '(adult=2;child=2;infant=1)') For LH only (adult=1) possible.",
            in: 'query',
            name: 'travelers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'fare-family': z
        .string()
        .default('smart')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Mandatory for 4U. Specifies, which fares to be returned, such as basic, smart, best, smartflex, bestflex . (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")',
            in: 'query',
            name: 'fare-family',
            required: false,
            schema: { default: 'smart', type: 'string' },
          },
        }),
      trackingid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Austrian Airlines only - specify the web tracking id to be used in OS Deep link.',
            in: 'query',
            name: 'trackingid',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      Accept: z
        .string()
        .default('application/json')
        .exactOptional()
        .openapi({
          param: {
            description: 'Mandatory http header:  application/xml or application/json',
            in: 'header',
            name: 'Accept',
            required: false,
            schema: { default: 'application/json', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersFaresBestfaresRoute = createRoute({
  method: 'get',
  path: '/offers/fares/bestfares',
  tags: ['Offers'],
  summary: 'Best Fares',
  description:
    'Retrieve best fares for the requested journey across multiple days or multiple months.',
  operationId: 'Best Fares',
  request: {
    query: z.object({
      catalogues: z
        .string()
        .openapi({
          param: {
            description: "Search fares from these carriers' catalogues (e.g. '4U;OS;LH')",
            in: 'query',
            name: 'catalogues',
            required: true,
            schema: { type: 'string' },
          },
        }),
      origin: z
        .string()
        .openapi({
          param: {
            description: "Journey origin. 3-letter IATA airport code (e.g. 'FRA')",
            in: 'query',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description: "Journey destination. 3-letter IATA airport code (e.g. 'MAD')",
            in: 'query',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'travel-date': z
        .string()
        .openapi({
          param: {
            description: 'Journey travel-date (YYYY-MM-DD)',
            in: 'query',
            name: 'travel-date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'trip-duration': z
        .string()
        .openapi({
          param: {
            description: "Trip duration in days (e.g. '7')",
            in: 'query',
            name: 'trip-duration',
            required: true,
            schema: { type: 'string' },
          },
        }),
      range: z
        .string()
        .openapi({
          param: {
            description:
              'Fare range: \'byday\' or \'bymonth\' (Acceptable values are: "byday", "bymonth")',
            in: 'query',
            name: 'range',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'cabin-class': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cabin class: \'economy\', \'premium_economy\', \'business\', \'first\' (Acceptable values are: "", "economy", "premium_economy", "business", "first")',
            in: 'query',
            name: 'cabin-class',
            required: false,
            schema: { type: 'string' },
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de')",
            in: 'query',
            name: 'country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      trackingid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Austrian Airlines only - specify the web tracking id to be used in OS Deep link.',
            in: 'query',
            name: 'trackingid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'fare-family': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")',
            in: 'query',
            name: 'fare-family',
            required: false,
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersFaresDeeplinkRoute = createRoute({
  method: 'get',
  path: '/offers/fares/deeplink',
  tags: ['Offers'],
  summary: 'Deep Links',
  description: 'Returns valid deep links for the provided input parameters',
  operationId: 'Deep Links',
  request: {
    query: z.object({
      catalogues: z
        .string()
        .openapi({
          param: {
            description: "Carrier for which the deep link will be created (e.g. 'LH')",
            in: 'query',
            name: 'catalogues',
            required: true,
            schema: { type: 'string' },
          },
        }),
      trackingid: z
        .string()
        .openapi({
          param: {
            description: 'Deep link tracking ID',
            in: 'query',
            name: 'trackingid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      country: z
        .string()
        .openapi({
          param: {
            description: '2-letter ISO 3166-1 country code',
            in: 'query',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lang: z
        .string()
        .openapi({
          param: {
            description: '2-letter ISO 3166-1 language code',
            in: 'query',
            name: 'lang',
            required: true,
            schema: { type: 'string' },
          },
        }),
      origin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')",
            in: 'query',
            name: 'origin',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'origin-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Journey origin airport or city name (e.g. 'frankfurt')",
            in: 'query',
            name: 'origin-name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')",
            in: 'query',
            name: 'destination',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'destination-name': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Journey destination airport or city name (e.g. 'madrid')",
            in: 'query',
            name: 'destination-name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'travel-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Journey travel-date (YYYY-MM-DD)',
            in: 'query',
            name: 'travel-date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'return-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Journey return-date (YYYY-MM-DD)',
            in: 'query',
            name: 'return-date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'cabin-class': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cabin class: \'economy\', \'premium_economy\', \'business\', \'first\' (Acceptable values are: "", "economy", "premium_economy", "business", "first")',
            in: 'query',
            name: 'cabin-class',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'outbound-segments': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480')",
            in: 'query',
            name: 'outbound-segments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'return-segments': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Flight segments in the sequence of travel (e.g. 'LH7465;LH431')",
            in: 'query',
            name: 'return-segments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      travelers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')",
            in: 'query',
            name: 'travelers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      fare: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Travel fare (e.g. '1341.45')",
            in: 'query',
            name: 'fare',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'net-fare': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Travel net fare. Total fare less taxes and charges (e.g. '1140')",
            in: 'query',
            name: 'net-fare',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'fare-currency': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Fare currency (e.g. 'EUR')",
            in: 'query',
            name: 'fare-currency',
            required: false,
            schema: { type: 'string' },
          },
        }),
      partnerid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Deep link partner id (e.g. '1247')",
            in: 'query',
            name: 'partnerid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'encryption-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deep link encryption-key',
            in: 'query',
            name: 'encryption-key',
            required: false,
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersFaresDeeplinkFfpRoute = createRoute({
  method: 'get',
  path: '/offers/fares/deeplink/ffp',
  tags: ['Offers'],
  summary: 'LH Deep Links - FFP',
  description: 'Returns valid LH deep links (FFP - links to flight selection screen on LH.COM)',
  operationId: 'LH Deep Links - FFP',
  request: {
    query: z.object({
      catalogues: z
        .string()
        .openapi({
          param: {
            description: "Carrier for which the deep link will be created (e.g. 'LH')",
            in: 'query',
            name: 'catalogues',
            required: true,
            schema: { type: 'string' },
          },
        }),
      origin: z
        .string()
        .openapi({
          param: {
            description: "Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')",
            in: 'query',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description: "Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')",
            in: 'query',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'travel-date': z
        .string()
        .openapi({
          param: {
            description: 'Journey travel-date (YYYY-MM-DD)',
            in: 'query',
            name: 'travel-date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      trackingid: z
        .string()
        .openapi({
          param: {
            description: 'Deep link tracking ID',
            in: 'query',
            name: 'trackingid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      country: z
        .string()
        .openapi({
          param: {
            description: '2-letter ISO 3166-1 country code',
            in: 'query',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lang: z
        .string()
        .openapi({
          param: {
            description: '2-letter ISO 3166-1 language code',
            in: 'query',
            name: 'lang',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'return-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Journey return-date (YYYY-MM-DD)',
            in: 'query',
            name: 'return-date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'cabin-class': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cabin class: \'economy\', \'premium_economy\', \'business\', \'first\' (Acceptable values are: "", "economy", "premium_economy", "business", "first")',
            in: 'query',
            name: 'cabin-class',
            required: false,
            schema: { type: 'string' },
          },
        }),
      travelers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')",
            in: 'query',
            name: 'travelers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      partnerid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Deep link partner id (e.g. '1247')",
            in: 'query',
            name: 'partnerid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'encryption-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deep link encryption-key',
            in: 'query',
            name: 'encryption-key',
            required: false,
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersFaresDeeplinkItcoRoute = createRoute({
  method: 'get',
  path: '/offers/fares/deeplink/itco',
  tags: ['Offers'],
  summary: 'LH Deep Links - ITCO',
  description: 'Returns valid LH deep links (ITCO - links to shopping cart on LH.COM)',
  operationId: 'LH Deep Links - ITCO',
  request: {
    query: z.object({
      catalogues: z
        .string()
        .openapi({
          param: {
            description: "Carrier for which the deep link will be created (e.g. 'LH')",
            in: 'query',
            name: 'catalogues',
            required: true,
            schema: { type: 'string' },
          },
        }),
      origin: z
        .string()
        .openapi({
          param: {
            description: "Journey origin. 3-letter IATA airport or city code (e.g. 'FRA')",
            in: 'query',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description: "Journey destination. 3-letter IATA airport or city code (e.g. 'MAD')",
            in: 'query',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'travel-date': z
        .string()
        .openapi({
          param: {
            description: 'Journey travel-date (YYYY-MM-DD)',
            in: 'query',
            name: 'travel-date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'outbound-segments': z
        .string()
        .openapi({
          param: {
            description: "Outbound flight segments in the sequence of travel (e.g. 'LH096;LH480')",
            in: 'query',
            name: 'outbound-segments',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fare: z
        .string()
        .openapi({
          param: {
            description: "Travel fare (e.g. '1341.45')",
            in: 'query',
            name: 'fare',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'fare-currency': z
        .string()
        .openapi({
          param: {
            description: "Fare currency (e.g. 'EUR')",
            in: 'query',
            name: 'fare-currency',
            required: true,
            schema: { type: 'string' },
          },
        }),
      trackingid: z
        .string()
        .openapi({
          param: {
            description: 'Deep link tracking ID',
            in: 'query',
            name: 'trackingid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      country: z
        .string()
        .openapi({
          param: {
            description: '2-letter ISO 3166-1 country code',
            in: 'query',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lang: z
        .string()
        .openapi({
          param: {
            description: '2-letter ISO 3166-1 language code',
            in: 'query',
            name: 'lang',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'return-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Journey return-date (YYYY-MM-DD)',
            in: 'query',
            name: 'return-date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'cabin-class': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cabin class: \'economy\', \'premium_economy\', \'business\', \'first\' (Acceptable values are: "", "economy", "premium_economy", "business", "first")',
            in: 'query',
            name: 'cabin-class',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'return-segments': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Flight segments in the sequence of travel (e.g. 'LH7465;LH431')",
            in: 'query',
            name: 'return-segments',
            required: false,
            schema: { type: 'string' },
          },
        }),
      travelers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Type and number of travelers (e.g. '(adult=2;child=2;infant=1)')",
            in: 'query',
            name: 'travelers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'net-fare': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Travel net fare. Total fare less taxes and charges (e.g. '1140')",
            in: 'query',
            name: 'net-fare',
            required: false,
            schema: { type: 'string' },
          },
        }),
      partnerid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Deep link partner id (e.g. '1247')",
            in: 'query',
            name: 'partnerid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'encryption-key': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Deep link encryption-key',
            in: 'query',
            name: 'encryption-key',
            required: false,
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersFaresFaresRoute = createRoute({
  method: 'get',
  path: '/offers/fares/fares',
  tags: ['Offers'],
  summary: 'Fares',
  description:
    'Retrieve all available fares per fare family for a specific Origin & Destination on a given date',
  operationId: 'Fares',
  request: {
    query: z.object({
      catalogues: z
        .string()
        .openapi({
          param: {
            description:
              "Search fares from these carriers' catalogues - currently active for Germanwings only  (4U)",
            in: 'query',
            name: 'catalogues',
            required: true,
            schema: { type: 'string' },
          },
        }),
      segments: z
        .string()
        .openapi({
          param: {
            description:
              'Journey details  e.g. (origin=TXL;destination=CGN;travel-date=2016-12-15;return-date=2016-12-20;cabin=Economy)',
            in: 'query',
            name: 'segments',
            required: true,
            schema: { type: 'string' },
          },
        }),
      carriers: z
        .string()
        .openapi({
          param: {
            description: "Include fares for these carriers e.g. ('4U;LH')",
            in: 'query',
            name: 'carriers',
            required: true,
            schema: { type: 'string' },
          },
        }),
      travelers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type and number of travelers e.g. (adult=1;child=1;infant=1)',
            in: 'query',
            name: 'travelers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'fare-types': z
        .string()
        .default('basic')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Fares family: basic,smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")',
            in: 'query',
            name: 'fare-types',
            required: false,
            schema: { default: 'basic', type: 'string' },
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersFaresLowestfaresRoute = createRoute({
  method: 'get',
  path: '/offers/fares/lowestfares',
  tags: ['Offers'],
  summary: 'Lowest Fares',
  description:
    'Retrieve lowest fare for a specific Origin & Destination pair on a given date. Available fares are: One-way and Return for 4U. Return only for OS & LH',
  operationId: 'Lowest Fares',
  request: {
    query: z.object({
      catalogues: z
        .string()
        .openapi({
          param: {
            description: "Search fares from these carriers' catalogues e.g. '4U;OS;LH'",
            in: 'query',
            name: 'catalogues',
            required: true,
            schema: { type: 'string' },
          },
        }),
      origin: z
        .string()
        .openapi({
          param: {
            description: "Journey origin. 3-letter IATA aiport code e.g. 'FRA'",
            in: 'query',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description: "Journey destination. 3-letter IATA airport code e.g. 'MAD'",
            in: 'query',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'travel-date': z
        .string()
        .openapi({
          param: {
            description: 'Journey travel-date YYYY-MM-DD',
            in: 'query',
            name: 'travel-date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'return-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Journey return-date - mandatory for OS and LH searches YYYY-MM-DD',
            in: 'query',
            name: 'return-date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'cabin-class': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cabin class: \'economy\', \'premium_economy\', \'business\', \'first\' (Acceptable values are: "", "economy", "premium_economy", "business", "first")',
            in: 'query',
            name: 'cabin-class',
            required: false,
            schema: { type: 'string' },
          },
        }),
      travelers: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Type and number of travelers e.g. '(adult=2;child=2;infant=1)'. For LH only (adult=1) possible",
            in: 'query',
            name: 'travelers',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'fare-family': z
        .string()
        .default('basic')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Fare family: basic, smart, best, smartflex, bestflex - Germanwings only (Acceptable values are: "", "basic", "smart", "best", "smartflex", "bestflex")',
            in: 'query',
            name: 'fare-family',
            required: false,
            schema: { default: 'basic', type: 'string' },
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Country code of requestor. 2-letter ISO 3166-1 country code (e.g. 'de')",
            in: 'query',
            name: 'country',
            required: false,
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersFaresSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/offers/fares/subscriptions',
  tags: ['Offers'],
  summary: 'Fares Subscriptions',
  description: 'Create a subscription for best price O&D. Receive regular updates on lowest fares',
  operationId: 'Fares Subscriptions',
  request: {
    query: z.object({
      origin: z
        .string()
        .openapi({
          param: {
            description: "Journey origin. 3-leter IATA airport code (e.g. 'FRA')",
            in: 'query',
            name: 'origin',
            required: true,
            schema: { type: 'string' },
          },
        }),
      destination: z
        .string()
        .openapi({
          param: {
            description: "Journey destination. 3-letter IATA airport code (e.g. 'MAD')",
            in: 'query',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'cabin-class': z
        .string()
        .openapi({
          param: {
            description:
              'Cabin class: \'economy\', \'premium_economy\', \'business\', \'first\' (Acceptable values are: "", "economy", "premium_economy", "business", "first")',
            in: 'query',
            name: 'cabin-class',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'trip-duration': z
        .string()
        .openapi({
          param: {
            description: "Trip duration in days (e.g. '7')",
            in: 'query',
            name: 'trip-duration',
            required: true,
            schema: { type: 'string' },
          },
        }),
      email: z
        .string()
        .openapi({
          param: {
            description: "Email Address')",
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
      lang: z
        .string()
        .openapi({
          param: {
            description: '2-letter ISO 3166-1 language code',
            in: 'query',
            name: 'lang',
            required: true,
            schema: { type: 'string' },
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '2-letter ISO 3166-1 country code',
            in: 'query',
            name: 'country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      trackingid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Tracking parameter',
            in: 'query',
            name: 'trackingid',
            required: false,
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersOndRouteOriginDestinationRoute = createRoute({
  method: 'get',
  path: '/offers/ond/route/{origin}/{destination}',
  tags: ['Offers'],
  summary: 'OND Route',
  description: 'Returns LH route origin & destination information',
  operationId: 'OND Route',
  request: {
    params: z.object({
      origin: z
        .string()
        .openapi({
          param: {
            description:
              "Enter either the orgin city or orgin country code (e.g 'FRA' or 'DE'). Enter '*' for all",
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
            description:
              "Enter either the destination city or country code (e.g 'MAD' or 'ES'). Enter '*' for all",
            in: 'path',
            name: 'destination',
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
            description: 'Mandatory http header:  application/xml or application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      catalogues: z
        .string()
        .default('LH')
        .exactOptional()
        .openapi({
          param: {
            description: "Carrier for which the OND will be retrieved (e.g. 'LH')",
            in: 'query',
            name: 'catalogues',
            required: false,
            schema: { default: 'LH', type: 'string' },
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersOndStatusRoute = createRoute({
  method: 'get',
  path: '/offers/ond/status',
  tags: ['Offers'],
  summary: 'OND Status',
  description:
    'Returns LH network route status information. Search for recently added or retired routes',
  operationId: 'OND Status',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description: 'Mandatory http header:  application/xml or application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      catalogues: z
        .string()
        .default('LH')
        .exactOptional()
        .openapi({
          param: {
            description: "Carrier for which the OND will be retrieved (e.g. 'LH')",
            in: 'query',
            name: 'catalogues',
            required: false,
            schema: { default: 'LH', type: 'string' },
          },
        }),
      'new-routes': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enter if newly added routes should be returned in the response. (Acceptable values are: "", "true", "false")',
            in: 'query',
            name: 'new-routes',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'old-routes': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enter if old (deleted) routes should be returned in the response. (Acceptable values are: "", "true", "false")',
            in: 'query',
            name: 'old-routes',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOffersOndTopRoute = createRoute({
  method: 'get',
  path: '/offers/ond/top',
  tags: ['Offers'],
  summary: 'Top OND',
  description: 'Returns LH Top routes per country or across all countries',
  operationId: 'Top OND',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description: 'Mandatory http header:  application/xml or application/json',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      catalogues: z
        .string()
        .default('LH')
        .exactOptional()
        .openapi({
          param: {
            description: "Carrier for which the OND will be retrieved (e.g. 'LH')",
            in: 'query',
            name: 'catalogues',
            required: false,
            schema: { default: 'LH', type: 'string' },
          },
        }),
      origin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Enter the origin country code (e.g. 'DE'). Leave empty to search Top OND across all countries",
            in: 'query',
            name: 'origin',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getOrdersOrdersOrderIDNameRoute = createRoute({
  method: 'get',
  path: '/orders/orders/{orderID}/{name}',
  tags: ['Orders'],
  summary: 'Orders',
  description:
    'Retrieve order by ID and optionally name. This service is only accessible for LH privileged partners',
  operationId: 'Orders',
  request: {
    params: z.object({
      orderID: z
        .string()
        .openapi({
          param: {
            description: 'Unique order identifier',
            in: 'path',
            name: 'orderID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'Surname of traveller',
            in: 'path',
            name: 'name',
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const putPreflightAutocheckinTicketnumberRoute = createRoute({
  method: 'put',
  path: '/preflight/autocheckin/{ticketnumber}',
  tags: ['Preflight'],
  summary: 'Auto Check-In',
  description:
    'Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners',
  operationId: 'Auto Check-In',
  request: {
    params: z.object({
      ticketnumber: z
        .string()
        .openapi({
          param: {
            description: 'Ticket number',
            in: 'path',
            name: 'ticketnumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      emailAddress: z
        .string()
        .openapi({
          param: {
            description: 'Email address',
            in: 'query',
            name: 'emailAddress',
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
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getPromotionsPriceoffersFlightsOndOriginDestinationRoute = createRoute({
  method: 'get',
  path: '/promotions/priceoffers/flights/ond/{origin}/{destination}',
  tags: ['Promotions'],
  summary: 'Price Offers',
  description: 'Retrieve a best price offer given an origin and destination.',
  operationId: 'Price Offers',
  request: {
    params: z.object({
      origin: z
        .string()
        .openapi({
          param: {
            description: 'Departure city. 3-letter IATA city code',
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
            description: 'Destination city. 3-letter IATA city code',
            in: 'path',
            name: 'destination',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      departureDate: z
        .string()
        .openapi({
          param: {
            description: 'Departure date in local time (YYYY-MM-DD)',
            in: 'query',
            name: 'departureDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      returnDate: z
        .string()
        .openapi({
          param: {
            description: 'Return date in local time (YYYY-MM-DD)',
            in: 'query',
            name: 'returnDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      service: z
        .string()
        .default('amadeusBestPrice')
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional parameter.',
            in: 'query',
            name: 'service',
            required: false,
            schema: { default: 'amadeusBestPrice', type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

export const getReferencesSeatdetailsAircraftCodeCabinCodeRoute = createRoute({
  method: 'get',
  path: '/references/seatdetails/{aircraftCode}/{cabinCode}',
  tags: ['Reference Data'],
  summary: 'Seat Details',
  description:
    'A description of all available seat details by aircraft type. You can retrieve the full set or details for a particular aircraft type.',
  operationId: 'Seat Details',
  request: {
    params: z.object({
      aircraftCode: z
        .string()
        .openapi({
          param: {
            description: 'Aircraft type. 3-character IATA equipment code',
            in: 'path',
            name: 'aircraftCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cabinCode: z
        .string()
        .default('C')
        .openapi({
          param: {
            description: 'Cabin class: M, E, C, F (Acceptable values are: "", "M", "E", "C", "F")',
            in: 'path',
            name: 'cabinCode',
            required: true,
            schema: { default: 'C', type: 'string' },
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
            description: '2-letter ISO 3166-1 language code',
            in: 'query',
            name: 'lang',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: { 'application/json': { schema: z.string() } } } },
  security: [{ auth: [] }],
})

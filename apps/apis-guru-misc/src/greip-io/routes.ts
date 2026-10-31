import { createRoute, z } from '@hono/zod-openapi'

export const getBulkLookupRoute = createRoute({
  method: 'get',
  path: '/BulkLookup',
  description: 'BulkLookup endpoint: Returns the geolocation data of multiple IP Addresses.',
  externalDocs: {
    description: 'Greip API - Bulk Lookup',
    url: 'https://docs.greip.io/methods/bulk-lookup',
  },
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              "Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.",
            in: 'query',
            name: 'key',
            required: true,
            schema: {
              example: '2517bc4fc3f790e8f09bc808bb63b899',
              externalDocs: {
                description: 'Greip API - Authentication',
                url: 'https://docs.greip.io/get-started/authentication',
              },
              type: 'string',
            },
          },
          example: '2517bc4fc3f790e8f09bc808bb63b899',
          externalDocs: {
            description: 'Greip API - Authentication',
            url: 'https://docs.greip.io/get-started/authentication',
          },
        }),
      ips: z
        .string()
        .openapi({
          param: {
            description: "The IP Addresses you want to lookup. It's a CSV (Comma Separated Values)",
            examples: {
              '0': {
                summary: 'Lookup a single IP Address',
                description: 'Lookup only `1.1.1.1` IP Address.',
                value: '1.1.1.1',
              },
              '1': {
                summary: 'Lookup multiple IP Addresses',
                description: 'Use `1.1.1.1` and `2.2.2.2` IP Addresses.',
                value: '1.1.1.1,2.2.2.2',
              },
            },
            explode: true,
            in: 'query',
            name: 'ips',
            required: true,
            schema: {
              example: '1.1.1.1,2.2.2.2',
              externalDocs: {
                description: 'Greip API - Bulk Lookup',
                url: 'https://docs.greip.io/methods/bulk-lookup',
              },
              type: 'string',
            },
            style: 'form',
          },
          example: '1.1.1.1,2.2.2.2',
          externalDocs: {
            description: 'Greip API - Bulk Lookup',
            url: 'https://docs.greip.io/methods/bulk-lookup',
          },
        }),
      params: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The modules you want to use of the request. It's a CSV (Comma Separated Values)",
            examples: {
              '0': {
                summary: 'Using a single module',
                description: 'Use only `currency` module.',
                value: 'currency',
              },
              '1': {
                summary: 'Using multiple modules',
                description: 'Use `security`, `timezone`, `currency` and `device` modules.',
                value: 'security,timezone,currency,device',
              },
            },
            explode: true,
            in: 'query',
            name: 'params',
            required: false,
            schema: {
              example: 'currency',
              externalDocs: {
                description: 'Greip API - Custom Modules Response',
                url: 'https://docs.greip.io/options/custom-modules-response',
              },
              type: 'string',
            },
            style: 'form',
          },
          example: 'currency',
          externalDocs: {
            description: 'Greip API - Custom Modules Response',
            url: 'https://docs.greip.io/options/custom-modules-response',
          },
        }),
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Used to inform the API to retrieve the response in your native language.',
            examples: {
              '0': { summary: 'Arabic Response', value: 'AR' },
              '1': { summary: 'Russian Response', value: 'RU' },
              '2': { summary: 'Spanish Response', value: 'ES' },
              '3': { summary: 'Danish Response', value: 'DE' },
              '4': { summary: 'French Response', value: 'FR' },
              '5': { summary: 'Japanese Response', value: 'JA' },
              '6': { summary: 'Chinese Response', value: 'ZH' },
              '7': { summary: 'English Response', value: 'EN' },
            },
            in: 'query',
            name: 'lang',
            required: false,
            schema: {
              example: 'AR',
              externalDocs: {
                description: 'Greip API - Localization',
                url: 'https://docs.greip.io/options/localization',
              },
              type: 'string',
            },
          },
          example: 'AR',
          externalDocs: {
            description: 'Greip API - Localization',
            url: 'https://docs.greip.io/options/localization',
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the format of the API response. JSON is the default format.',
            examples: {
              '0': { summary: 'JSON Response', value: 'JSON' },
              '1': { summary: 'XML Response', value: 'XML' },
              '2': { summary: 'CSV Response', value: 'CSV' },
              '3': { summary: 'Newline Response', value: 'Newline' },
            },
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              example: 'XML',
              externalDocs: {
                description: 'Greip API - Response Format',
                url: 'https://docs.greip.io/options/response-format',
              },
              type: 'string',
            },
          },
          example: 'XML',
          externalDocs: {
            description: 'Greip API - Response Format',
            url: 'https://docs.greip.io/options/response-format',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getCountryRoute = createRoute({
  method: 'get',
  path: '/Country',
  description:
    'Country endpoint: Returns the information of a specific country by passing the `countrCode`.',
  externalDocs: {
    description: 'Greip API - Country Data API',
    url: 'https://docs.greip.io/methods/country-data-api',
  },
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              "Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.",
            in: 'query',
            name: 'key',
            required: true,
            schema: {
              example: '2517bc4fc3f790e8f09bc808bb63b899',
              externalDocs: {
                description: 'Greip API - Authentication',
                url: 'https://docs.greip.io/get-started/authentication',
              },
              type: 'string',
            },
          },
          example: '2517bc4fc3f790e8f09bc808bb63b899',
          externalDocs: {
            description: 'Greip API - Authentication',
            url: 'https://docs.greip.io/get-started/authentication',
          },
        }),
      CountryCode: z
        .string()
        .openapi({
          param: {
            description: "The Country Code of the country you want to fetch it's data.",
            in: 'query',
            name: 'CountryCode',
            required: true,
            schema: { example: 'PS', type: 'string' },
          },
          example: 'PS',
        }),
      params: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The modules you want to use of the request. It's a CSV (Comma Separated Values)",
            examples: {
              '0': {
                summary: 'Using a single module',
                description: 'Use only `language` module.',
                value: 'language',
              },
              '1': {
                summary: 'Using multiple modules',
                description: 'Use `language`, `flag`, `currency` and `timezone` modules.',
                value: 'language,flag,currency,timezone',
              },
            },
            explode: true,
            in: 'query',
            name: 'params',
            required: false,
            schema: {
              example: 'language',
              externalDocs: {
                description: 'Greip API - Country - Possible Param',
                url: 'https://docs.greip.io/methods/country-data-api#possible-param',
              },
              type: 'string',
            },
            style: 'form',
          },
          example: 'language',
          externalDocs: {
            description: 'Greip API - Country - Possible Param',
            url: 'https://docs.greip.io/methods/country-data-api#possible-param',
          },
        }),
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Used to inform the API to retrieve the response in your native language.',
            examples: {
              '0': { summary: 'Arabic Response', value: 'AR' },
              '1': { summary: 'Russian Response', value: 'RU' },
              '2': { summary: 'Spanish Response', value: 'ES' },
              '3': { summary: 'Danish Response', value: 'DE' },
              '4': { summary: 'French Response', value: 'FR' },
              '5': { summary: 'Japanese Response', value: 'JA' },
              '6': { summary: 'Chinese Response', value: 'ZH' },
              '7': { summary: 'English Response', value: 'EN' },
            },
            in: 'query',
            name: 'lang',
            required: false,
            schema: {
              example: 'AR',
              externalDocs: {
                description: 'Greip API - Localization',
                url: 'https://docs.greip.io/options/localization',
              },
              type: 'string',
            },
          },
          example: 'AR',
          externalDocs: {
            description: 'Greip API - Localization',
            url: 'https://docs.greip.io/options/localization',
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the format of the API response. JSON is the default format.',
            examples: {
              '0': { summary: 'JSON Response', value: 'JSON' },
              '1': { summary: 'XML Response', value: 'XML' },
              '2': { summary: 'CSV Response', value: 'CSV' },
              '3': { summary: 'Newline Response', value: 'Newline' },
            },
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              example: 'XML',
              externalDocs: {
                description: 'Greip API - Response Format',
                url: 'https://docs.greip.io/options/response-format',
              },
              type: 'string',
            },
          },
          example: 'XML',
          externalDocs: {
            description: 'Greip API - Response Format',
            url: 'https://docs.greip.io/options/response-format',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getGeoIPRoute = createRoute({
  method: 'get',
  path: '/GeoIP',
  description: 'GeoIP endpoint: Returns the geolocation data of the visitor.',
  externalDocs: {
    description: 'Greip API - Retrieve Visitor Info',
    url: 'https://docs.greip.io/methods/retrieve-visitor-info',
  },
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              "Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.",
            in: 'query',
            name: 'key',
            required: true,
            schema: {
              example: '2517bc4fc3f790e8f09bc808bb63b899',
              externalDocs: {
                description: 'Greip API - Authentication',
                url: 'https://docs.greip.io/get-started/authentication',
              },
              type: 'string',
            },
          },
          example: '2517bc4fc3f790e8f09bc808bb63b899',
          externalDocs: {
            description: 'Greip API - Authentication',
            url: 'https://docs.greip.io/get-started/authentication',
          },
        }),
      params: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The modules you want to use of the request. It's a CSV (Comma Separated Values)",
            examples: {
              '0': {
                summary: 'Using a single module',
                description: 'Use only `currency` module.',
                value: 'currency',
              },
              '1': {
                summary: 'Using multiple modules',
                description: 'Use `security`, `timezone`, `currency` and `device` modules.',
                value: 'security,timezone,currency,device',
              },
            },
            explode: true,
            in: 'query',
            name: 'params',
            required: false,
            schema: {
              example: 'currency',
              externalDocs: {
                description: 'Greip API - Custom Modules Response',
                url: 'https://docs.greip.io/options/custom-modules-response',
              },
              type: 'string',
            },
            style: 'form',
          },
          example: 'currency',
          externalDocs: {
            description: 'Greip API - Custom Modules Response',
            url: 'https://docs.greip.io/options/custom-modules-response',
          },
        }),
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Used to inform the API to retrieve the response in your native language.',
            examples: {
              '0': { summary: 'Arabic Response', value: 'AR' },
              '1': { summary: 'Russian Response', value: 'RU' },
              '2': { summary: 'Spanish Response', value: 'ES' },
              '3': { summary: 'Danish Response', value: 'DE' },
              '4': { summary: 'French Response', value: 'FR' },
              '5': { summary: 'Japanese Response', value: 'JA' },
              '6': { summary: 'Chinese Response', value: 'ZH' },
              '7': { summary: 'English Response', value: 'EN' },
            },
            in: 'query',
            name: 'lang',
            required: false,
            schema: {
              example: 'AR',
              externalDocs: {
                description: 'Greip API - Localization',
                url: 'https://docs.greip.io/options/localization',
              },
              type: 'string',
            },
          },
          example: 'AR',
          externalDocs: {
            description: 'Greip API - Localization',
            url: 'https://docs.greip.io/options/localization',
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the format of the API response. JSON is the default format.',
            examples: {
              '0': { summary: 'JSON Response', value: 'JSON' },
              '1': { summary: 'XML Response', value: 'XML' },
              '2': { summary: 'CSV Response', value: 'CSV' },
              '3': { summary: 'Newline Response', value: 'Newline' },
            },
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              example: 'XML',
              externalDocs: {
                description: 'Greip API - Response Format',
                url: 'https://docs.greip.io/options/response-format',
              },
              type: 'string',
            },
          },
          example: 'XML',
          externalDocs: {
            description: 'Greip API - Response Format',
            url: 'https://docs.greip.io/options/response-format',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getIPLookupRoute = createRoute({
  method: 'get',
  path: '/IPLookup',
  description: 'IPLookup endpoint: Returns the geolocation data of a specific IP Address.',
  externalDocs: {
    description: 'Greip API - Lookup IP Address',
    url: 'https://docs.greip.io/methods/lookup-ip-address',
  },
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              "Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.",
            in: 'query',
            name: 'key',
            required: true,
            schema: {
              example: '2517bc4fc3f790e8f09bc808bb63b899',
              externalDocs: {
                description: 'Greip API - Authentication',
                url: 'https://docs.greip.io/get-started/authentication',
              },
              type: 'string',
            },
          },
          example: '2517bc4fc3f790e8f09bc808bb63b899',
          externalDocs: {
            description: 'Greip API - Authentication',
            url: 'https://docs.greip.io/get-started/authentication',
          },
        }),
      ip: z
        .string()
        .openapi({
          param: {
            description: 'The IP Address you want to lookup.',
            in: 'query',
            name: 'ip',
            required: true,
            schema: {
              example: '1.1.1.1',
              externalDocs: {
                description: 'Greip API - Lookup IP Address',
                url: 'https://docs.greip.io/methods/lookup-ip-address',
              },
              type: 'string',
            },
          },
          example: '1.1.1.1',
          externalDocs: {
            description: 'Greip API - Lookup IP Address',
            url: 'https://docs.greip.io/methods/lookup-ip-address',
          },
        }),
      params: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The modules you want to use of the request. It's a CSV (Comma Separated Values)",
            examples: {
              '0': {
                summary: 'Using a single module',
                description: 'Use only `currency` module.',
                value: 'currency',
              },
              '1': {
                summary: 'Using multiple modules',
                description: 'Use `security`, `timezone`, `currency` and `device` modules.',
                value: 'security,timezone,currency,device',
              },
            },
            explode: true,
            in: 'query',
            name: 'params',
            required: false,
            schema: {
              example: 'currency',
              externalDocs: {
                description: 'Greip API - Custom Modules Response',
                url: 'https://docs.greip.io/options/custom-modules-response',
              },
              type: 'string',
            },
            style: 'form',
          },
          example: 'currency',
          externalDocs: {
            description: 'Greip API - Custom Modules Response',
            url: 'https://docs.greip.io/options/custom-modules-response',
          },
        }),
      lang: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Used to inform the API to retrieve the response in your native language.',
            examples: {
              '0': { summary: 'Arabic Response', value: 'AR' },
              '1': { summary: 'Russian Response', value: 'RU' },
              '2': { summary: 'Spanish Response', value: 'ES' },
              '3': { summary: 'Danish Response', value: 'DE' },
              '4': { summary: 'French Response', value: 'FR' },
              '5': { summary: 'Japanese Response', value: 'JA' },
              '6': { summary: 'Chinese Response', value: 'ZH' },
              '7': { summary: 'English Response', value: 'EN' },
            },
            in: 'query',
            name: 'lang',
            required: false,
            schema: {
              example: 'AR',
              externalDocs: {
                description: 'Greip API - Localization',
                url: 'https://docs.greip.io/options/localization',
              },
              type: 'string',
            },
          },
          example: 'AR',
          externalDocs: {
            description: 'Greip API - Localization',
            url: 'https://docs.greip.io/options/localization',
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the format of the API response. JSON is the default format.',
            examples: {
              '0': { summary: 'JSON Response', value: 'JSON' },
              '1': { summary: 'XML Response', value: 'XML' },
              '2': { summary: 'CSV Response', value: 'CSV' },
              '3': { summary: 'Newline Response', value: 'Newline' },
            },
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              example: 'XML',
              externalDocs: {
                description: 'Greip API - Response Format',
                url: 'https://docs.greip.io/options/response-format',
              },
              type: 'string',
            },
          },
          example: 'XML',
          externalDocs: {
            description: 'Greip API - Response Format',
            url: 'https://docs.greip.io/options/response-format',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

export const getBadWordsRoute = createRoute({
  method: 'get',
  path: '/badWords',
  description: 'badWords endpoint: Detects whether user inputs contain profanity or not.',
  externalDocs: {
    description: 'Greip API - Profanity Detection',
    url: 'https://docs.greip.io/methods/profanity-detection',
  },
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description:
              "Your API Key. Each user has a unique API Key that can be used to access the API functions. If you don't have an account yet, please create new account first.",
            in: 'query',
            name: 'key',
            required: true,
            schema: {
              example: '2517bc4fc3f790e8f09bc808bb63b899',
              externalDocs: {
                description: 'Greip API - Authentication',
                url: 'https://docs.greip.io/get-started/authentication',
              },
              type: 'string',
            },
          },
          example: '2517bc4fc3f790e8f09bc808bb63b899',
          externalDocs: {
            description: 'Greip API - Authentication',
            url: 'https://docs.greip.io/get-started/authentication',
          },
        }),
      text: z
        .string()
        .openapi({
          param: {
            description: 'The text you want to check.',
            in: 'query',
            name: 'text',
            required: true,
            schema: { example: 'This is a sample text without profanity!', type: 'string' },
          },
          example: 'This is a sample text without profanity!',
        }),
      listBadWords: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to `yes` to list the bad-words as an Array.',
            examples: {
              '0': {
                summary: 'NO',
                description: "Don't return the found bad-words as an Array.",
                value: 'no',
              },
              '1': {
                summary: 'YES',
                description: 'Return the found bad-words as an Array.',
                value: 'yes',
              },
            },
            in: 'query',
            name: 'listBadWords',
            required: false,
            schema: { example: 'no', type: 'string' },
          },
          example: 'no',
        }),
      scoreOnly: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Set to `yes` to return only the score of the text and whether it's safe or not.",
            examples: {
              '0': {
                summary: 'NO',
                description: 'Return full information about the text.',
                value: 'no',
              },
              '1': {
                summary: 'YES',
                description: 'Return only the safety score of the text.',
                value: 'yes',
              },
            },
            in: 'query',
            name: 'scoreOnly',
            required: false,
            schema: { example: 'no', type: 'string' },
          },
          example: 'no',
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sets the format of the API response. JSON is the default format.',
            examples: {
              '0': { summary: 'JSON Response', value: 'JSON' },
              '1': { summary: 'XML Response', value: 'XML' },
              '2': { summary: 'CSV Response', value: 'CSV' },
              '3': { summary: 'Newline Response', value: 'Newline' },
            },
            in: 'query',
            name: 'format',
            required: false,
            schema: {
              example: 'JSON',
              externalDocs: {
                description: 'Greip API - Response Format',
                url: 'https://docs.greip.io/options/response-format',
              },
              type: 'string',
            },
          },
          example: 'JSON',
          externalDocs: {
            description: 'Greip API - Response Format',
            url: 'https://docs.greip.io/options/response-format',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad Request' },
    500: { description: 'Internal Server Error' },
  },
})

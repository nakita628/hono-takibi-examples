import { createRoute, z } from '@hono/zod-openapi'

export const getDataIpGeolocationFullRoute = createRoute({
  method: 'get',
  path: '/data/ip-geolocation-full',
  summary: 'IP Geolocation with Confidence Area and Hazard Report API',
  description:
    'This API returns additional security hazard report in addition to confidence area and locality information.',
  operationId: 'ipGeolocationWithConfidenceAreaAndHazardReportApi',
  request: {
    query: z.object({
      ip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'IPv4 IP address in a string or numeric format. If omitted, the caller’s IP address is assumed\n',
            in: 'query',
            name: 'ip',
            schema: { example: '193.114.112.122', type: 'string' },
            required: false,
          },
          example: '193.114.112.122',
        }),
      localityLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Preferred language for locality names in ISO 639-1 format, such as 'en' for English, 'es' for Spanish etc. Please note: 147 common world languages are supported, full list here, but not all languages are available for every location. If requested language is not available for a requested location it will default to English, if no English is available, the native, local names will be provided\n",
            in: 'query',
            name: 'localityLanguage',
            schema: { example: 'en', type: 'string' },
            required: false,
          },
          example: 'en',
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your API key\n',
            in: 'query',
            name: 'key',
            schema: { example: '{{API KEY}}', type: 'string' },
            required: false,
          },
          example: '{{API KEY}}',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getDataIpGeolocationWithConfidenceRoute = createRoute({
  method: 'get',
  path: '/data/ip-geolocation-with-confidence',
  summary: 'IP Geolocation with Confidence Area API',
  description:
    'Returns list of geocoordinates which represents estimated geolocation confidence area.',
  operationId: 'ipGeolocationWithConfidenceAreaApi',
  request: {
    query: z.object({
      ip: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'IPv4 IP address in a string or numeric format. If omitted, the caller’s IP address is assumed\n',
            in: 'query',
            name: 'ip',
            schema: { example: '193.114.112.122', type: 'string' },
            required: false,
          },
          example: '193.114.112.122',
        }),
      localityLanguage: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Preferred language for locality names in ISO 639-1 format, such as 'en' for English, 'es' for Spanish etc. Please note: 147 common world languages are supported, full list here, but not all languages are available for every location. If requested language is not available for a requested location it will default to English, if no English is available, the native, local names will be provided\n",
            in: 'query',
            name: 'localityLanguage',
            schema: { example: 'en', type: 'string' },
            required: false,
          },
          example: 'en',
        }),
      key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your API key\n',
            in: 'query',
            name: 'key',
            schema: { example: '{{API KEY}}', type: 'string' },
            required: false,
          },
          example: '{{API KEY}}',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

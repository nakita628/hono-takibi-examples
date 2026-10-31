import { createRoute, z } from '@hono/zod-openapi'

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  description: "Geolocate user's location information via IP address",
  request: {
    query: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'API key.',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ip: z
        .string()
        .openapi({
          param: {
            description:
              'IP address (IPv4 or IPv6) for reverse IP location lookup purposes. If not present, the server IP address will be used for the location lookup.',
            in: 'query',
            name: 'ip',
            required: true,
            schema: { example: '8.8.8.8', type: 'string' },
          },
          example: '8.8.8.8',
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Format of the response message.',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
      lang: z
        .enum([
          'ar',
          'cs',
          'da',
          'de',
          'en',
          'es',
          'et',
          'fi',
          'fr',
          'ga',
          'it',
          'ja',
          'ko',
          'ms',
          'nl',
          'pt',
          'ru',
          'sv',
          'tr',
          'vi',
          'zh-cn',
          'zh-tw',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Translation information. The translation only applicable for continent, country, region and city name. This parameter is only available for Plus and Security plan only.',
            in: 'query',
            name: 'lang',
            schema: {
              enum: [
                'ar',
                'cs',
                'da',
                'de',
                'en',
                'es',
                'et',
                'fi',
                'fr',
                'ga',
                'it',
                'ja',
                'ko',
                'ms',
                'nl',
                'pt',
                'ru',
                'sv',
                'tr',
                'vi',
                'zh-cn',
                'zh-tw',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'Get response from IP lookup', content: {} } },
})

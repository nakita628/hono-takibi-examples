import { createRoute, z } from '@hono/zod-openapi'

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  description: 'Get geolocation information via IP address',
  request: {
    query: z.object({
      package: z
        .enum([
          'WS1',
          'WS2',
          'WS3',
          'WS4',
          'WS5',
          'WS6',
          'WS7',
          'WS8',
          'WS9',
          'WS10',
          'WS11',
          'WS12',
          'WS13',
          'WS14',
          'WS15',
          'WS16',
          'WS17',
          'WS18',
          'WS19',
          'WS20',
          'WS21',
          'WS22',
          'WS23',
          'WS24',
          'WS25',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Web service package of different granularity of return information.',
            in: 'query',
            name: 'package',
            schema: {
              enum: [
                'WS1',
                'WS2',
                'WS3',
                'WS4',
                'WS5',
                'WS6',
                'WS7',
                'WS8',
                'WS9',
                'WS10',
                'WS11',
                'WS12',
                'WS13',
                'WS14',
                'WS15',
                'WS16',
                'WS17',
                'WS18',
                'WS19',
                'WS20',
                'WS21',
                'WS22',
                'WS23',
                'WS24',
                'WS25',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      addon: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.enum([
              'continent',
              'country',
              'region',
              'city',
              'geotargeting',
              'country_groupings',
              'time_zone_info',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Extra information in addition to the above selected package.',
            explode: false,
            in: 'query',
            name: 'addon',
            schema: {
              example: 'continent,country',
              items: {
                enum: [
                  'continent',
                  'country',
                  'region',
                  'city',
                  'geotargeting',
                  'country_groupings',
                  'time_zone_info',
                ],
                type: 'string',
              },
              type: 'array',
            },
            required: false,
          },
          example: 'continent,country',
        }),
      ip: z
        .string()
        .openapi({
          param: {
            description:
              'IP address (IPv4 or IPv6) for reverse IP location lookup purpose. If not present, the server IP address will be used for the location lookup.',
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
              'Translation information. The translation only applicable for continent, country, region and city name for the addon package.',
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
      key: z
        .string()
        .openapi({
          param: {
            description: 'API Key. Please sign up free trial license key at ip2location.com',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get response from IP lookup',
      content: {
        'application/json; charset=utf-8': {
          schema: z.string(),
          examples: {
            '0': {
              value:
                '{"country_code":"","country_name":"","region_name":"","city_name":"","latitude":"","longitude":"","zip_code":"","time_zone":"","isp":"","domain":"","net_speed":"","idd_code":"","area_code":"","weather_station_code":"","weather_station_name":"","mcc":"","mnc":"","mobile_brand":"","elevation":"","usage_type":"","address_type":"","category":"","category_name":"","continent":{"name":"","code":"","hemisphere":"","translations":""},"country":{"name":"","alpha3_code":"","numeric_code":"","demonym":"","flag":"","capital":"","total_area":"","population":"","currency":"{"code":"","name":"","symbol":""}","language":"{"code":"","name":""}"","idd_code":"","tld":"","translations":""},"region":{"name":"","code":"","translations":""},"city":{"name":"","translations":"[]"},"geotargeting":{"metro": ""},"country_groupings":{"acronym":"","name": ""},"time_zone_info":{"olson":"","current_time":"","gmt_offset":"","is_dst":"","sunrise":"","sunset":""}}',
            },
          },
        },
      },
    },
  },
})

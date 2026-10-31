import { createRoute, z } from '@hono/zod-openapi'

const InlineResponse_200Schema = z
  .object({
    city: z.string().exactOptional(),
    city_geoname_id: z.int().exactOptional(),
    connection: z
      .object({
        autonomous_system_number: z.int().exactOptional(),
        autonomous_system_organization: z.string().exactOptional(),
        connection_type: z.string().exactOptional(),
        isp_name: z.string().exactOptional(),
        organization_name: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    continent: z.string().exactOptional(),
    continent_code: z.string().exactOptional(),
    continent_geoname_id: z.int().exactOptional(),
    country: z.string().exactOptional(),
    country_code: z.string().exactOptional(),
    country_geoname_id: z.int().exactOptional(),
    country_is_eu: z.boolean().exactOptional(),
    currency: z
      .object({
        currency_code: z.string().exactOptional(),
        currency_name: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    flag: z
      .object({
        emoji: z.string().exactOptional(),
        png: z.string().exactOptional(),
        svg: z.string().exactOptional(),
        unicode: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    ip_address: z.string().exactOptional(),
    latitude: z.number().exactOptional(),
    longitude: z.number().exactOptional(),
    postal_code: z.string().exactOptional(),
    region: z.string().exactOptional(),
    region_geoname_id: z.int().exactOptional(),
    region_iso_code: z.string().exactOptional(),
    security: z
      .object({ is_vpn: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    timezone: z
      .object({
        abbreviation: z.string().exactOptional(),
        current_time: z.string().exactOptional(),
        gmt_offset: z.int().exactOptional(),
        is_dst: z.boolean().exactOptional(),
        name: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('InlineResponse_200')

export const getV1IndexRoute = createRoute({
  method: 'get',
  path: '/v1/',
  description: 'Retrieve the location of an IP address',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
      ip_address: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'ip_address',
            required: false,
            schema: { example: '195.154.25.40', type: 'string' },
            style: 'form',
          },
          example: '195.154.25.40',
        }),
      fields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'fields',
            required: false,
            schema: { example: 'country,city,timezone', type: 'string' },
            style: 'form',
          },
          example: 'country,city,timezone',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Location of geolocated IP',
      content: {
        'application/json': {
          schema: InlineResponse_200Schema,
          examples: {
            '0': {
              value:
                '{"ip_address":"195.154.25.40","city":"Paris","city_geoname_id":2988507,"region":"Île-de-France","region_iso_code":"IDF","region_geoname_id":3012874,"postal_code":"75008","country":"France","country_code":"FR","country_geoname_id":3017382,"country_is_eu":true,"continent":"Europe","continent_code":"EU","continent_geoname_id":6255148,"longitude":2.4075,"latitude":48.8323,"security":{"is_vpn":false},"timezone":{"name":"Europe/Paris","abbreviation":"CEST","gmt_offset":2,"current_time":"15:42:18","is_dst":true},"flag":{"emoji":"<ë<÷","unicode":"U+1F1EB U+1F1F7","png":"https://static.abstractapi.com/country-flags/FR_flag.png","svg":"https://static.abstractapi.com/country-flags/FR_flag.svg"},"currency":{"currency_name":"Euros","currency_code":"EUR"},"connection":{"autonomous_system_number":12876,"autonomous_system_organization":"Online S.a.s.","connection_type":"Corporate","isp_name":"Online S.A.S.","organization_name":"ONLINE"}}',
            },
          },
        },
      },
    },
  },
  servers: [{ url: 'https://ipgeolocation.abstractapi.com' }],
})

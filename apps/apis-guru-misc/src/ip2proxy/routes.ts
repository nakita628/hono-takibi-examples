import { createRoute, z } from '@hono/zod-openapi'

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  description: 'Check if an IP address is proxy',
  request: {
    query: z.object({
      package: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Package name from PX1 to PX11. If not present, the web service will assume the PX1 package query.',
            in: 'query',
            name: 'package',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ip: z
        .string()
        .openapi({
          param: {
            description:
              'IP address (IPv4) for lookup purpose. If not present, the server IP address will be used for the lookup.',
            in: 'query',
            name: 'ip',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'If not present, json format will be returned as the search result.',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'API key. Please sign up free trial license key at ip2location.com',
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
      description: 'Get response from IP2Proxy',
      content: {
        'text/html; charset=UTF-8': {
          schema: z.string(),
          examples: {
            '0': {
              value:
                '{"response": "","countryCode": "","countryName": "","regionName": "","cityName": "","isp": "","domain": "","usageType":"","asn":"","as": "","lastSeen": "","proxyType":"","isProxy": "","threat": "","provider": ""}',
            },
          },
        },
      },
    },
  },
})

import { createRoute, z } from '@hono/zod-openapi'

const RequestSchema = z
  .object({ ip: z.ipv4().exactOptional() })
  .openapi({ required: [] })
  .openapi('Request')

const ResponseSchema = z
  .object({
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    country_code: z.string().exactOptional(),
    ip: z.ipv4().exactOptional(),
    latitude: z.float32().exactOptional(),
    longitude: z.float32().exactOptional(),
    state: z.string().exactOptional(),
    timezone: z.string().exactOptional(),
    zip: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Response')

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-IPTWIST-TOKEN', type: 'apiKey' }

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['Main'],
  summary: 'Geolocate a given IP address',
  request: {
    body: {
      description: 'IP address',
      content: { 'application/json': { schema: RequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful IP geolocation',
      content: { 'application/json': { schema: ResponseSchema } },
    },
    401: { description: 'Invalid authentication.' },
    403: { description: 'Monthly quota exceeded.' },
  },
  security: [{ ApiKeyAuth: [] }],
})

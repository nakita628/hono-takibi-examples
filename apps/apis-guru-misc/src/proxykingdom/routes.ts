import { createRoute, z } from '@hono/zod-openapi'

const ContinentSchema = z
  .strictObject({
    code: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    name: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Continent')

const CountrySchema = z
  .strictObject({
    code: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    name: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Country')

const IspSchema = z
  .strictObject({
    id: z.int32().exactOptional().openapi({ readOnly: true }),
    name: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Isp')

const SubdivisionSchema = z
  .strictObject({
    code: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    name: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Subdivision')

const LocationSchema = z
  .strictObject({
    accuracyRadius: z.int32().exactOptional().openapi({ readOnly: true }),
    cityName: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    continent: ContinentSchema.exactOptional(),
    country: CountrySchema.exactOptional(),
    latitude: z.float32().exactOptional().openapi({ readOnly: true }),
    longitude: z.float32().exactOptional().openapi({ readOnly: true }),
    postalCode: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    subdivisions: z.array(SubdivisionSchema).nullable().exactOptional().openapi({ readOnly: true }),
    timezone: z.string().nullable().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Location')

const TimingsSchema = z
  .strictObject({
    connectTime: z.float32().exactOptional().openapi({ readOnly: true }),
    firstByteTime: z.float32().exactOptional().openapi({ readOnly: true }),
    responseTime: z.float32().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Timings')

const ProxySchema = z
  .strictObject({
    accessType: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    address: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    isSsl: z.boolean().exactOptional().openapi({ readOnly: true }),
    isp: IspSchema.exactOptional(),
    lastTested: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    location: LocationSchema.exactOptional(),
    port: z.int32().exactOptional().openapi({ readOnly: true }),
    protocol: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    timings: TimingsSchema.exactOptional(),
    uptime: z.float32().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Proxy')

export const getProxyRoute = createRoute({
  method: 'get',
  path: '/proxy',
  tags: ['Proxy'],
  summary: 'Gets a random proxy for chosen parameters.',
  request: {
    query: z.object({
      Token: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'Token', schema: { type: 'string' }, required: false },
        }),
      Address: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'Address', schema: { type: 'string' }, required: false },
        }),
      Port: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'Port', schema: { type: 'string' }, required: false },
        }),
      Protocol: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'Protocol', schema: { type: 'string' }, required: false },
        }),
      AccessType: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'AccessType', schema: { type: 'string' }, required: false },
        }),
      ResponseTime: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'ResponseTime', schema: { type: 'string' }, required: false },
        }),
      IsSsl: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'IsSsl', schema: { type: 'string' }, required: false },
        }),
      Uptime: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'Uptime', schema: { type: 'string' }, required: false },
        }),
      Country: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'Country', schema: { type: 'string' }, required: false },
        }),
      Continent: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'Continent', schema: { type: 'string' }, required: false },
        }),
      Timezone: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'Timezone', schema: { type: 'string' }, required: false },
        }),
      LastTested: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'LastTested', schema: { type: 'string' }, required: false },
        }),
    }),
    headers: z.object({
      correlation_id: z
        .string()
        .default('d85ab6a3-51a9-4359-b9d3-41f5dffb366e')
        .openapi({
          param: {
            description: 'Correlation Id header field',
            in: 'header',
            name: 'correlation_id',
            required: true,
            schema: { default: 'd85ab6a3-51a9-4359-b9d3-41f5dffb366e', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ProxySchema,
          example: {
            accessType: 'Elite',
            address: '86.125.112.230',
            isSsl: true,
            isp: { id: 10232, name: 'Comcast' },
            lastTested: '2023-03-20T18:36:08Z',
            location: {
              accuracyRadius: 1,
              cityName: 'Timișoara',
              continent: { code: 'EU', name: 'Europe' },
              country: { code: 'RO', name: 'Romania' },
              latitude: 45.7537,
              longitude: 21.7537,
              postalCode: '300011',
              subdivisions: [{ code: 'TM', name: 'Timis' }],
              timezone: 'Europe/Bucharest',
            },
            port: 30897,
            protocol: 'Socks4',
            timings: { connectTime: 0.506, firstByteTime: 0.607, responseTime: 1.092 },
            uptime: 0.88,
          },
        },
        'text/json': {
          schema: ProxySchema,
          example: {
            accessType: 'Elite',
            address: '86.125.112.230',
            isSsl: true,
            isp: { id: 10232, name: 'Comcast' },
            lastTested: '2023-03-20T18:36:08Z',
            location: {
              accuracyRadius: 1,
              cityName: 'Timișoara',
              continent: { code: 'EU', name: 'Europe' },
              country: { code: 'RO', name: 'Romania' },
              latitude: 45.7537,
              longitude: 21.7537,
              postalCode: '300011',
              subdivisions: [{ code: 'TM', name: 'Timis' }],
              timezone: 'Europe/Bucharest',
            },
            port: 30897,
            protocol: 'Socks4',
            timings: { connectTime: 0.506, firstByteTime: 0.607, responseTime: 1.092 },
            uptime: 0.88,
          },
        },
        'text/plain': {
          schema: ProxySchema,
          example: {
            accessType: 'Elite',
            address: '86.125.112.230',
            isSsl: true,
            isp: { id: 10232, name: 'Comcast' },
            lastTested: '2023-03-20T18:36:08Z',
            location: {
              accuracyRadius: 1,
              cityName: 'Timișoara',
              continent: { code: 'EU', name: 'Europe' },
              country: { code: 'RO', name: 'Romania' },
              latitude: 45.7537,
              longitude: 21.7537,
              postalCode: '300011',
              subdivisions: [{ code: 'TM', name: 'Timis' }],
              timezone: 'Europe/Bucharest',
            },
            port: 30897,
            protocol: 'Socks4',
            timings: { connectTime: 0.506, firstByteTime: 0.607, responseTime: 1.092 },
            uptime: 0.88,
          },
        },
      },
    },
    400: { description: 'Invalid proxy filter provided.' },
    404: { description: 'No Proxy found for GetProxy by filter.' },
    429: { description: 'Subscription limit reached.' },
    500: { description: 'Technical Error.' },
  },
})

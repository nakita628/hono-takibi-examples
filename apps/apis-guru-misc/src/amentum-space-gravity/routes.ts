import { createRoute, z } from '@hono/zod-openapi'

const AnomalySchema = z
  .object({
    eta: z
      .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
      .exactOptional()
      .openapi({
        description: 'Eta (arcsec) - easterly component of deflection of vertical.',
        required: [],
      }),
    gravity_anomaly: z
      .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
      .exactOptional()
      .openapi({ description: 'Gravity anomaly (mGal)\n', required: [] }),
    xi: z
      .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
      .exactOptional()
      .openapi({
        description: 'Xi (arcsec) - northerly component of deflection of vertical.\n',
        required: [],
      }),
  })
  .openapi({ required: [] })
  .openapi('Anomaly')

const HeightSchema = z
  .object({
    height: z
      .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
      .exactOptional()
      .openapi({ description: 'Geoid height (m)\n', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Height')

const LatitudeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .openapi({
    param: {
      description: 'Geographic latitude (-90 to 90 deg).',
      in: 'query',
      name: 'latitude',
      required: true,
      schema: { example: -45, type: 'number' },
    },
    example: -45,
  })

const LongitudeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.number(),
  )
  .openapi({
    param: {
      description: 'Geographic longitude (-180 to 180 deg).',
      in: 'query',
      name: 'longitude',
      required: true,
      schema: { example: 45, type: 'number' },
    },
    example: 45,
  })

export const getEgm2008GeoidHeightRoute = createRoute({
  method: 'get',
  path: '/egm2008/geoid_height',
  tags: ['egm2008'],
  summary: 'Calculate the geoid height\n',
  description: 'for a given latitude / longitude. \n',
  operationId: 'app.api_egm2008.endpoints.EGM2008.calculate_height',
  request: {
    query: z.object({ latitude: LatitudeParamsSchema, longitude: LongitudeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful geoid height calculation',
      content: {
        'application/json': {
          schema: HeightSchema,
          example: { height: { units: 'm', value: 45.88107058892659 } },
        },
      },
    },
  },
})

export const getEgm2008GravityAnomalyRoute = createRoute({
  method: 'get',
  path: '/egm2008/gravity_anomaly',
  tags: ['egm2008'],
  summary: 'Calculate gravity anomaly values\n',
  description: 'for a given latitude / longitude.\n',
  operationId: 'app.api_egm2008.endpoints.EGM2008.calculate_anomaly',
  request: {
    query: z.object({ latitude: LatitudeParamsSchema, longitude: LongitudeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful anomaly calculation',
      content: {
        'application/json': {
          schema: AnomalySchema,
          example: {
            eta: { units: 'arcsec', value: -0.9413662219916251 },
            gravity_anomaly: { units: 'mGal', value: 27.954737031742376 },
            xi: { units: 'arcsec', value: 1.371151956763653 },
          },
        },
      },
    },
  },
})

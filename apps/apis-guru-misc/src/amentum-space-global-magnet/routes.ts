import { createRoute, z } from '@hono/zod-openapi'

const AltitudeParamsSchema = z
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
      description: 'Geodetic Altitude 0 km to 600 km.',
      in: 'query',
      name: 'altitude',
      required: true,
      schema: { example: 10, type: 'number' },
    },
    example: 10,
  })

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
      description: 'Geodetic Latitude. -90 deg (S) to 90 deg (N).',
      in: 'query',
      name: 'latitude',
      required: true,
      schema: { example: 80, type: 'number' },
    },
    example: 80,
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
      description: 'Geodetic Longitude. -180 deg (W) to 180 deg (E).',
      in: 'query',
      name: 'longitude',
      required: true,
      schema: { example: 100, type: 'number' },
    },
    example: 100,
  })

const YearParamsSchema = z
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
      description:
        'Year as a decimal in the range 2015-2025 (2017.5 would be half way through 2017).',
      in: 'query',
      name: 'year',
      required: true,
      schema: { example: 2020.5, type: 'number' },
    },
    example: 2020.5,
  })

export const getMagneticFieldRoute = createRoute({
  method: 'get',
  path: '/magnetic_field',
  summary:
    'Calculate magnetic declination, inclination, total field intensity, and grid variation\n',
  description: 'at specified conditions.\n',
  operationId: 'app.api_wmm.endpoints.WMM.magnetic_field',
  request: {
    query: z.object({
      altitude: AltitudeParamsSchema,
      latitude: LatitudeParamsSchema,
      longitude: LongitudeParamsSchema,
      year: YearParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful magnetic field intensity calculation',
      content: {
        'application/json': {
          schema: z
            .object({
              declination: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    'The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.\n',
                  required: [],
                }),
              grid_variation: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    'Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).\n',
                  required: [],
                }),
              inclination: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    "Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing. \n",
                  required: [],
                }),
              total_intensity: z
                .object({ units: z.string().exactOptional(), value: z.number().exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'Total magnetic field intensity in nano Teslas.\n',
                  required: [],
                }),
            })
            .openapi({
              example: {
                declination: { units: 'Deg', value: 34.144142150878906 },
                grid_variation: { units: -65.8558578491211, value: 'Deg' },
                inclination: { units: 'Deg', value: 87.98262786865234 },
                total_intensity: { units: 'nT', value: 58421.87109375 },
              },
              required: [],
            }),
        },
      },
    },
  },
})

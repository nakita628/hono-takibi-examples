import { createRoute, z } from '@hono/zod-openapi'

export const getBng2latlongEastingNorthingRoute = createRoute({
  method: 'get',
  path: '/bng2latlong/{easting}/{northing}',
  summary: 'Returns latitude and longitude for the given easting and northing.',
  description:
    'Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.\n#### A successful request returns the following fields:\n* status - this will be `ok`\n* easting - the easting provided in the request\n* northing - the northing provided in the request\n* latitude - the latitude of the converted coordinates\n* longitude - the longitude of the converted coordinates\n#### An unsuccessful request returns the following fields:\n* status - this will be `error`\n* error - an error message\n',
  request: {
    params: z.object({
      easting: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'An OSGB36 (British National Grid) easting.',
            example: 326897,
            in: 'path',
            name: 'easting',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      northing: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'An OSGB36 (British National Grid) northing.',
            example: 673919,
            in: 'path',
            name: 'northing',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A JSON object containing the original easting and northing, and the converted latitude and longitude.',
      content: {
        'application/json': {
          schema: z
            .object({
              easting: z.int().exactOptional().openapi({ example: 326897 }),
              error: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'Both <easting> and <northing> must be provided, must be positive integers, and must be within range.',
                }),
              latitude: z.number().exactOptional().openapi({ example: 55.95271 }),
              longitude: z.number().exactOptional().openapi({ example: -3.17227 }),
              northing: z.int().exactOptional().openapi({ example: 673919 }),
              status: z.enum(['ok', 'error']).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

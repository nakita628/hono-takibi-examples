import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({ code: z.int32().exactOptional(), message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Error')

const OpeningTimeSchema = z.array(z.string()).openapi('OpeningTime')

const TravelCenterSchema = z
  .object({
    address: z.string().exactOptional().openapi({ description: 'Street address of travel center' }),
    city: z.string().exactOptional().openapi({ description: 'City of travel center' }),
    id: z.int().exactOptional().openapi({ description: 'Identifying number' }),
    lat: z.number().exactOptional().openapi({ description: 'Latitude of travel center location' }),
    lon: z.number().exactOptional().openapi({ description: 'Longitude of travel center location' }),
    name: z.string().exactOptional().openapi({ description: 'Name of travel center' }),
    openingTimes: z
      .object({
        fri: OpeningTimeSchema.exactOptional(),
        mon: OpeningTimeSchema.exactOptional(),
        sat: OpeningTimeSchema.exactOptional(),
        sun: OpeningTimeSchema.exactOptional(),
        thu: OpeningTimeSchema.exactOptional(),
        tue: OpeningTimeSchema.exactOptional(),
        wed: OpeningTimeSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        description: 'Opening times of the travel center, ordered by week day',
        required: [],
      }),
    postCode: z.string().exactOptional().openapi({ description: 'Post code of travel center' }),
    type: z
      .enum(['Reisezentrum', 'Mobility Center'])
      .exactOptional()
      .openapi({ description: 'Type of travel center' }),
  })
  .openapi({ required: [] })
  .openapi('TravelCenter')

const TravelCenterListSchema = z.array(TravelCenterSchema).openapi('TravelCenterList')

export const getReisezentrenRoute = createRoute({
  method: 'get',
  path: '/reisezentren',
  summary: 'Get all station infos',
  description: 'Get all station infos',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A station name or part of it',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List has been created',
      content: { 'application/json': { schema: TravelCenterListSchema } },
    },
    404: {
      description: 'No travel centers could be found matching the given name',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    416: {
      description: 'Filtering required - specify a name fragment of at least 3 characters',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getReisezentrenLocLatLonRoute = createRoute({
  method: 'get',
  path: '/reisezentren/loc/{lat}/{lon}',
  summary: 'Get information about a station near a location',
  description: 'Get information about a station near a location',
  request: {
    params: z.object({
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Latitude',
            in: 'path',
            name: 'lat',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      lon: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Longitude',
            in: 'path',
            name: 'lon',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A station was found',
      content: { 'application/json': { schema: TravelCenterSchema } },
    },
  },
})

export const getReisezentrenLocLatLonDistRoute = createRoute({
  method: 'get',
  path: '/reisezentren/loc/{lat}/{lon}/{dist}',
  summary: 'Get stations in a given radius',
  description: 'Get stations in a given radius',
  request: {
    params: z.object({
      lat: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Latitude',
            in: 'path',
            name: 'lat',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      lon: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Longitude',
            in: 'path',
            name: 'lon',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
      dist: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            description: 'Radius',
            in: 'path',
            name: 'dist',
            required: true,
            schema: { format: 'float', type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A station was found',
      content: { 'application/json': { schema: TravelCenterSchema } },
    },
  },
})

export const getReisezentrenIdRoute = createRoute({
  method: 'get',
  path: '/reisezentren/{id}',
  summary: 'Get information about a specific station',
  description: 'Get information about a specific station',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Station id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The travel center was found',
      content: { '*/*': { schema: TravelCenterSchema } },
    },
    404: { description: 'No travel center found', content: { '*/*': { schema: ErrorSchema } } },
  },
})

import { createRoute, z } from '@hono/zod-openapi'

export const getCountryRoute = createRoute({
  method: 'get',
  path: '/{country}',
  tags: ['Tanzania regions'],
  summary: 'Returns all regions present in Tanzania',
  description: 'Fetches all regions present in Tanzania and then return a response as json',
  operationId: 'Tanzania-regions',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'Country name in lowercase eg (Tanzania)',
            in: 'path',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
})

export const getCountryRegionRoute = createRoute({
  method: 'get',
  path: '/{country}/{region}',
  tags: ['Districts in region'],
  summary: 'Returns all districts in region',
  description: 'Returns a post code and all districts in a specified region',
  operationId: 'Districts-in-a-region',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'Country name in lowercase eg( tanzania)',
            in: 'path',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Name of the region eg (Mbeya)',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful response' },
    404: { description: 'Resource not Found' },
  },
})

export const getCountryRegionDistrictRoute = createRoute({
  method: 'get',
  path: '/{country}/{region}/{district}',
  tags: ['Wards in a district'],
  summary: 'Returns all wards in a district',
  description: 'Returns all wards in a  specified district and district postcode',
  operationId: 'Wards-in-a-district',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'Country name in lowercase eg( tanzania)',
            in: 'path',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Name of the region eg (Mbeya)',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      district: z
        .string()
        .openapi({
          param: {
            description: 'Name of the District eg (Rungwe)',
            in: 'path',
            name: 'district',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful response' },
    404: { description: 'Resource not Found' },
  },
})

export const getCountryRegionDistrictWardRoute = createRoute({
  method: 'get',
  path: '/{country}/{region}/{district}/{ward}',
  tags: ['Streets in a ward'],
  summary: 'Returns all streets in a ward',
  description: 'Returns all streets in a specified ward and ward postcode',
  operationId: 'streets-in-a-ward',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'Country name in lowercase eg( tanzania)',
            in: 'path',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Name of the region eg (Mbeya)',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      district: z
        .string()
        .openapi({
          param: {
            description: 'Name of the District eg (Rungwe)',
            in: 'path',
            name: 'district',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ward: z
        .string()
        .openapi({
          param: {
            description: 'Name of the Ward eg (Kiwira)',
            in: 'path',
            name: 'ward',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful response' },
    404: { description: 'Resource not Found' },
  },
})

export const getCountryRegionDistrictWardStreetRoute = createRoute({
  method: 'get',
  path: '/{country}/{region}/{district}/{ward}/{street}',
  tags: ['neighborhood in a street'],
  summary: 'Returns all neighborhood in a street',
  description: 'Returns all neighborhood in a specified street',
  operationId: 'neighborhood-in-a-street-',
  request: {
    params: z.object({
      country: z
        .string()
        .openapi({
          param: {
            description: 'Country name in lowercase eg( tanzania)',
            in: 'path',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      region: z
        .string()
        .openapi({
          param: {
            description: 'Name of the region eg (Mbeya)',
            in: 'path',
            name: 'region',
            required: true,
            schema: { type: 'string' },
          },
        }),
      district: z
        .string()
        .openapi({
          param: {
            description: 'Name of the District eg (Rungwe)',
            in: 'path',
            name: 'district',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ward: z
        .string()
        .openapi({
          param: {
            description: 'Name of the Ward eg (Kiwira)',
            in: 'path',
            name: 'ward',
            required: true,
            schema: { type: 'string' },
          },
        }),
      street: z
        .string()
        .openapi({
          param: {
            description: 'Name of the Street eg (Ilundo)',
            in: 'path',
            name: 'street',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Successful response' },
    404: { description: 'Resource not Found' },
  },
})

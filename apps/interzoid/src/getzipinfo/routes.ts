import { createRoute, z } from '@hono/zod-openapi'

export const getGetzipcodeinfoRoute = createRoute({
  method: 'get',
  path: '/getzipcodeinfo',
  tags: ['Detailed Zip Code Information'],
  summary: 'Gets detailed zip code information',
  description:
    'For a given zip code, detailed information is returned, including city, state, latitude, longitude, area size, and various population demographics, including income, age, and presence of farming data.',
  operationId: 'getzipcodeinfo',
  request: {
    query: z.object({
      license: z
        .string()
        .openapi({
          param: {
            description: 'Your Interzoid license API key. Register at www.interzoid.com/register',
            in: 'query',
            name: 'license',
            required: true,
            schema: { type: 'string' },
          },
        }),
      zip: z
        .string()
        .openapi({
          param: {
            description: 'Zip code to retrieve detailed information',
            in: 'query',
            name: 'zip',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Zip code detailed code information',
      content: {
        'application/json': {
          schema: z
            .object({
              AreaSquareMiles: z.string().exactOptional(),
              City: z.string().exactOptional(),
              Code: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              ElderlyHouseholdPercent: z.string().exactOptional(),
              FarmerHouseholdPercent: z.string().exactOptional(),
              IncomePercent100k: z.string().exactOptional(),
              IncomePercent200k: z.string().exactOptional(),
              IncomePercent50k: z.string().exactOptional(),
              Latitude: z.string().exactOptional(),
              Longitude: z.string().exactOptional(),
              MarriedHouseholdPercent: z.string().exactOptional(),
              Population: z.string().exactOptional(),
              State: z.string().exactOptional(),
              ZipCode: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'bad request - insufficient parameters' },
    402: { description: 'credits exhausted' },
    403: { description: 'invalid license API key' },
    404: { description: 'zip code not found' },
    405: { description: 'method not allowed' },
    500: { description: 'internal server error' },
  },
})

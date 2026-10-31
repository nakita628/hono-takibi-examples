import { createRoute, z } from '@hono/zod-openapi'

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getApiV1DonationsCarbonCalculateRoute = createRoute({
  method: 'get',
  path: '/api/v1/donations/carbon_calculate',
  summary: 'Calculate shipping carbon offset',
  description:
    'Calculates the donation amount (to CarbonFund 501\\(c\\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.',
  request: {
    query: z.object({
      origin_address: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The origin zip code (US only) of the shipment. If you send this parameter, also send `destination_address`.',
            examples: { illinois: { summary: 'An Illinois zip code.', value: 60148 } },
            in: 'query',
            name: 'origin_address',
            schema: { type: 'number' },
            required: false,
          },
        }),
      destination_address: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The destination zip code (US only) of the shipment. If you send this parameter, also send `origin_address`.',
            examples: { california: { summary: 'A California zip code.', value: 94133 } },
            in: 'query',
            name: 'destination_address',
            schema: { type: 'number' },
            required: false,
          },
        }),
      distance_mi: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The total distance (in miles) of the shipment. You can use this parameter in place of `origin_address` and `destination_address`.',
            in: 'query',
            name: 'distance_mi',
            schema: { type: 'number' },
            required: false,
          },
        }),
      weight_lb: z
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
            description: 'The total weight (in pounds) of the shipment.',
            examples: { '3.5': { summary: 'A 3.5 pound shipment.', value: 3.5 } },
            in: 'query',
            name: 'weight_lb',
            required: true,
            schema: { type: 'number' },
          },
        }),
      transportation_method: z
        .enum(['air', 'truck', 'rail', 'sea'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The primary transportation method of the shipment.',
            examples: {
              air: { summary: 'The shipment will be primarily by plane.', value: 'air' },
            },
            in: 'query',
            name: 'transportation_method',
            schema: { enum: ['air', 'truck', 'rail', 'sea'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'successful', content: {} } },
  security: [{ basic_auth: [] }],
})

export const getApiV1DonationsCarbonStatsRoute = createRoute({
  method: 'get',
  path: '/api/v1/donations/carbon_stats',
  summary: 'Retrieve carbon offset stats',
  description:
    'Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The id of a donation to the CarbonFund nonprofit. Ids are returned when a donation is created. If an ID is not provided, the total stats for all donations to CarbonFund are returned.',
            examples: {
              donation: { summary: 'A donation id.', value: 'd_NuYL6M2C1kjecXpWzKVODw7W' },
            },
            in: 'query',
            name: 'id',
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'successful', content: {} } },
  security: [{ basic_auth: [] }],
})

export const postApiV1DonationsCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/donations/create',
  summary: 'Create a donation',
  description:
    'Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.',
  request: {
    query: z.object({
      amount: z
        .string()
        .openapi({
          param: {
            description: 'The amount of the donation in cents.',
            examples: { five: { summary: 'A $5.00 donation.', value: 500 } },
            in: 'query',
            name: 'amount',
            required: true,
            schema: { type: 'string' },
          },
        }),
      nonprofit_id: z
        .string()
        .openapi({
          param: {
            description: 'The id of a nonprofit from the CHANGE network.',
            examples: {
              watsi: {
                summary: 'The id for Watsi (https://watsi.org)',
                value: 'n_IfEoPCaPqVsFAUI5xl0CBUOx',
              },
            },
            in: 'query',
            name: 'nonprofit_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      funding_source: z
        .enum(['merchant', 'customer'])
        .openapi({
          param: {
            description:
              'Source of the donation funds. If you are collecting payment from your customer for the donation, use `customer`.',
            examples: { customer: { summary: 'A customer-funded donation.', value: 'customer' } },
            in: 'query',
            name: 'funding_source',
            required: true,
            schema: { enum: ['merchant', 'customer'], type: 'string' },
          },
        }),
      zip_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The customer's zip code. Provide this to unlock geographic insights.",
            examples: { valid: { summary: 'A valid zip code.', value: '94104' } },
            in: 'query',
            name: 'zip_code',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Donation successful', content: {} },
    400: { description: 'Param `nonprofit_id` invalid', content: {} },
  },
  security: [{ basic_auth: [] }],
})

export const getApiV1DonationsCryptoCalculateRoute = createRoute({
  method: 'get',
  path: '/api/v1/donations/crypto_calculate',
  summary: 'Calculate crypto carbon offset',
  description:
    'Calculates the donation amount (to CarbonFund 501\\(c\\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.',
  request: {
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of transactions to offset.',
            examples: { two: { summary: 'Represents two transactions.', value: 2 } },
            in: 'query',
            name: 'count',
            schema: { type: 'number' },
            required: false,
          },
        }),
      currency: z
        .enum(['eth', 'btc'])
        .openapi({
          param: {
            description: 'The currency of the transaction.',
            examples: { ethereum: { summary: 'The ETH currency.', value: 'eth' } },
            in: 'query',
            name: 'currency',
            required: true,
            schema: { enum: ['eth', 'btc'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'successful', content: {} } },
  security: [{ basic_auth: [] }],
})

export const getApiV1DonationsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v1/donations/index',
  summary: 'List your donations',
  description:
    "Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.",
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Which page to return. This endpoint is paginated, and returns maximum 30 donations per page.',
            examples: { 'page 1': { summary: 'The first 30 donations.', value: '1' } },
            in: 'query',
            name: 'page',
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'successful', content: {} } },
  security: [{ basic_auth: [] }],
})

export const getApiV1DonationsShowRoute = createRoute({
  method: 'get',
  path: '/api/v1/donations/show',
  summary: 'Retrieve a donation',
  description: "Retrieves the details of a donation you've previously made.",
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of a donation. Ids are returned when a donation is created.',
            examples: {
              donation: { summary: 'A donation id.', value: 'd_NuYL6M2C1kjecXpWzKVODw7W' },
            },
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'successful', content: {} } },
  security: [{ basic_auth: [] }],
})

export const getApiV1NonprofitsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/nonprofits/list',
  summary: 'Search a nonprofit',
  description:
    'Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A string to search.',
            examples: {
              'some nonprofit': { summary: 'The name of some nonprofit.', value: 'Some Nonprofit' },
            },
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The page to return. This endpoint is paginated, and returns up to 30 nonprofits at a time.',
            examples: { 'page 1': { summary: 'The first 30 nonprofits.', value: '1' } },
            in: 'query',
            name: 'page',
            schema: { type: 'number' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'List successful', content: {} } },
  security: [{ basic_auth: [] }],
})

export const getApiV1NonprofitsShowRoute = createRoute({
  method: 'get',
  path: '/api/v1/nonprofits/show',
  summary: 'Show a nonprofit',
  description: 'Retrieves information for a nonprofit.',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The id of a nonprofit from the CHANGE network.',
            examples: {
              watsi: {
                summary: 'The id for Watsi (https://watsi.org)',
                value: 'n_IfEoPCaPqVsFAUI5xl0CBUOx',
              },
            },
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Show successful', content: {} } },
  security: [{ basic_auth: [] }],
})

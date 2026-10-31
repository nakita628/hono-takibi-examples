import { createRoute, z } from '@hono/zod-openapi'

const ProductSchema = z
  .object({
    product_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.',
      }),
    description: z.string().exactOptional().openapi({ description: 'Description of product.' }),
    display_name: z.string().exactOptional().openapi({ description: 'Display name of product.' }),
    capacity: z
      .int()
      .exactOptional()
      .openapi({ description: 'Capacity of product. For example, 4 people.' }),
    image: z
      .string()
      .exactOptional()
      .openapi({ description: 'Image URL representing the product.' }),
  })
  .openapi({ required: [] })
  .openapi('Product')

const ProductListSchema = z
  .object({
    products: z
      .array(ProductSchema)
      .exactOptional()
      .openapi({ description: 'Contains the list of products' }),
  })
  .openapi({ required: [] })
  .openapi('ProductList')

const PriceEstimateSchema = z
  .object({
    product_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles',
      }),
    currency_code: z
      .string()
      .exactOptional()
      .openapi({ description: '[ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.' }),
    display_name: z.string().exactOptional().openapi({ description: 'Display name of product.' }),
    estimate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI.',
      }),
    low_estimate: z
      .number()
      .exactOptional()
      .openapi({ description: 'Lower bound of the estimated price.' }),
    high_estimate: z
      .number()
      .exactOptional()
      .openapi({ description: 'Upper bound of the estimated price.' }),
    surge_multiplier: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PriceEstimate')

const ProfileSchema = z
  .object({
    first_name: z.string().exactOptional().openapi({ description: 'First name of the Uber user.' }),
    last_name: z.string().exactOptional().openapi({ description: 'Last name of the Uber user.' }),
    email: z.string().exactOptional().openapi({ description: 'Email address of the Uber user' }),
    picture: z.string().exactOptional().openapi({ description: 'Image URL of the Uber user.' }),
    promo_code: z.string().exactOptional().openapi({ description: 'Promo code of the Uber user.' }),
  })
  .openapi({ required: [] })
  .openapi('Profile')

const ActivitySchema = z
  .object({
    uuid: z.string().exactOptional().openapi({ description: 'Unique identifier for the activity' }),
  })
  .openapi({ required: [] })
  .openapi('Activity')

const ActivitiesSchema = z
  .object({
    offset: z.int32().exactOptional().openapi({ description: 'Position in pagination.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of items to retrieve (100 max).' }),
    count: z.int32().exactOptional().openapi({ description: 'Total number of items available.' }),
    history: z.array(ActivitySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Activities')

const ErrorSchema = z
  .object({
    code: z.int32().exactOptional(),
    message: z.string().exactOptional(),
    fields: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Error')

const ApikeySecurityScheme = { type: 'apiKey', name: 'server_token', in: 'query' }

export const getProductsRoute = createRoute({
  method: 'get',
  path: '/products',
  tags: ['Products'],
  summary: 'Product Types',
  description:
    'The Products endpoint returns information about the Uber products offered at a given location. The response includes the display name and other details about each product, and lists the products in the proper display order.',
  request: {
    query: z.object({
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            name: 'latitude',
            in: 'query',
            description: 'Latitude component of location.',
            required: true,
            schema: { type: 'number', format: 'double' },
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            name: 'longitude',
            in: 'query',
            description: 'Longitude component of location.',
            required: true,
            schema: { type: 'number', format: 'double' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of products',
      content: { 'application/json': { schema: ProductListSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ apikey: [] }],
})

export const getEstimatesPriceRoute = createRoute({
  method: 'get',
  path: '/estimates/price',
  tags: ['Estimates'],
  summary: 'Price Estimates',
  description:
    'The Price Estimates endpoint returns an estimated price range for each product offered at a given location. The price estimate is provided as a formatted string with the full price range and the localized currency symbol.<br><br>The response also includes low and high estimates, and the [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code for situations requiring currency conversion. When surge is active for a particular product, its surge_multiplier will be greater than 1, but the price estimate already factors in this multiplier.',
  request: {
    query: z.object({
      start_latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            name: 'start_latitude',
            in: 'query',
            description: 'Latitude component of start location.',
            required: true,
            schema: { type: 'number', format: 'double' },
          },
        }),
      start_longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            name: 'start_longitude',
            in: 'query',
            description: 'Longitude component of start location.',
            required: true,
            schema: { type: 'number', format: 'double' },
          },
        }),
      end_latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            name: 'end_latitude',
            in: 'query',
            description: 'Latitude component of end location.',
            required: true,
            schema: { type: 'number', format: 'double' },
          },
        }),
      end_longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            name: 'end_longitude',
            in: 'query',
            description: 'Longitude component of end location.',
            required: true,
            schema: { type: 'number', format: 'double' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of price estimates by product',
      content: { 'application/json': { schema: z.array(PriceEstimateSchema) } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getEstimatesTimeRoute = createRoute({
  method: 'get',
  path: '/estimates/time',
  tags: ['Estimates'],
  summary: 'Time Estimates',
  description:
    'The Time Estimates endpoint returns ETAs for all products offered at a given location, with the responses expressed as integers in seconds. We recommend that this endpoint be called every minute to provide the most accurate, up-to-date ETAs.',
  request: {
    query: z.object({
      start_latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            name: 'start_latitude',
            in: 'query',
            description: 'Latitude component of start location.',
            required: true,
            schema: { type: 'number', format: 'double' },
          },
        }),
      start_longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .openapi({
          param: {
            name: 'start_longitude',
            in: 'query',
            description: 'Longitude component of start location.',
            required: true,
            schema: { type: 'number', format: 'double' },
          },
        }),
      customer_uuid: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            name: 'customer_uuid',
            in: 'query',
            schema: { type: 'string', format: 'uuid' },
            description: 'Unique customer identifier to be used for experience customization.',
            required: false,
          },
        }),
      product_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'product_id',
            in: 'query',
            schema: { type: 'string' },
            description:
              'Unique identifier representing a specific product for a given latitude & longitude.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of products',
      content: { 'application/json': { schema: z.array(ProductSchema) } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['User'],
  summary: 'User Profile',
  description:
    'The User Profile endpoint returns information about the Uber user that has authorized with the application.',
  responses: {
    200: {
      description: 'Profile information for a user',
      content: { 'application/json': { schema: ProfileSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

export const getHistoryRoute = createRoute({
  method: 'get',
  path: '/history',
  tags: ['User'],
  summary: 'User Activity',
  description:
    "The User Activity endpoint returns data about a user's lifetime activity with Uber. The response will include pickup locations and times, dropoff locations and times, the distance of past requests, and information about which products were requested.<br><br>The history array in the response will have a maximum length based on the limit parameter. The response value count may exceed limit, therefore subsequent API requests may be necessary.",
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            description: 'Offset the list of returned results by this amount. Default is zero.',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', format: 'int32' },
            description: 'Number of items to retrieve. Default is 5, maximum is 100.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'History information for the given user',
      content: { 'application/json': { schema: ActivitiesSchema } },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
})

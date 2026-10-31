import { createRoute, z } from '@hono/zod-openapi'

const BuyRecommendationResponseSchema = z
  .object({
    buyRecommendations: z.array(z.string()).exactOptional(),
    numberOfProducts: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    responseMessage: z.string().exactOptional().openapi({ example: 'Product successfully found!' }),
    responseStatus: z.string().exactOptional().openapi({ example: 'PRODUCT_FOUND_RESPONSE' }),
  })
  .openapi({ required: [] })
  .openapi('BuyRecommendationResponse')

const KeywordSearchResponseSchema = z
  .object({
    domainCode: z.string().exactOptional().openapi({ example: 'com' }),
    foundProducts: z.array(z.string()).exactOptional(),
    keyword: z.string().exactOptional().openapi({ example: 'Playstation 4' }),
    numberOfProducts: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    responseMessage: z.string().exactOptional().openapi({ example: 'Product successfully found!' }),
    responseStatus: z.string().exactOptional().openapi({ example: 'PRODUCT_FOUND_RESPONSE' }),
    sortStrategy: z.string().exactOptional().openapi({ example: 'date-desc-rank' }),
  })
  .openapi({ required: [] })
  .openapi('KeywordSearchResponse')

const ProductDetailsResponseSchema = z
  .object({
    answeredQuestions: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    asin: z.string().exactOptional().openapi({ example: 'B077Q3YRP5' }),
    countReview: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    features: z.array(z.string()).exactOptional(),
    fulfilledBy: z.string().exactOptional().openapi({ example: 'Amazon' }),
    manufacturer: z.string().exactOptional().openapi({ example: 'Sony' }),
    price: z.number().exactOptional(),
    priceSaving: z.string().exactOptional().openapi({ example: 'You Save: $59,58 (43%)' }),
    priceShippingInformation: z.string().exactOptional().openapi({ example: 'free' }),
    prime: z.boolean().exactOptional(),
    productRating: z.string().exactOptional().openapi({ example: '4.4 out of 5 stars' }),
    productTitle: z.string().exactOptional().openapi({ example: 'Playstation 4' }),
    responseMessage: z.string().exactOptional().openapi({ example: 'Product successfully found!' }),
    responseStatus: z.string().exactOptional().openapi({ example: 'PRODUCT_FOUND_RESPONSE' }),
    retailPrice: z.number().exactOptional(),
    sizeSelection: z.array(z.string()).exactOptional(),
    soldBy: z.string().exactOptional().openapi({ example: 'Sony' }),
    warehouseAvailability: z.string().exactOptional().openapi({ example: 'In Stock' }),
  })
  .openapi({ required: [] })
  .openapi('ProductDetailsResponse')

const SortOptionResponseSchema = z
  .object({
    responseMessage: z.string().exactOptional().openapi({ example: 'Product successfully found!' }),
    responseStatus: z.string().exactOptional().openapi({ example: 'PRODUCT_FOUND_RESPONSE' }),
    resultSize: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    sortOptions: z
      .array(
        z
          .object({
            order: z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .exactOptional()
              .openapi({ type: 'integer', format: 'int64' }),
            sortName: z.string().exactOptional().openapi({ example: 'relevanceblender' }),
            strategy: z.string().exactOptional().openapi({ example: 'AMAZON_FEATURED' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SortOptionResponse')

export const getAmzAmazonLookupBuyRecommendationsRoute = createRoute({
  method: 'get',
  path: '/amz/amazon-lookup-buy-recommendations',
  tags: ['amz'],
  summary: 'request buy recommendations to a given product',
  operationId: 'requestBuyRecommendation',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            description: 'The url of the requested product.',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: BuyRecommendationResponseSchema } },
    },
    400: { description: 'Bad Request - Missing parameter' },
    404: { description: 'Not Found - Product not Found' },
    406: { description: 'Not Acceptable - Wrong parameter' },
  },
})

export const getAmzAmazonLookupProductRoute = createRoute({
  method: 'get',
  path: '/amz/amazon-lookup-product',
  tags: ['amz'],
  summary: 'lookup product information',
  operationId: 'requestProduct',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            description: 'The url of the requested product.',
            in: 'query',
            name: 'url',
            required: true,
            schema: { type: 'string' },
          },
        }),
      size: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Size parameter if available.',
            in: 'query',
            name: 'size',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: ProductDetailsResponseSchema } },
    },
    400: { description: 'Bad Request - Missing parameter' },
    404: { description: 'Not Found - Product not Found' },
    406: { description: 'Not Acceptable - Wrong parameter' },
  },
  security: [],
})

export const getAmzAmazonSearchByKeywordRoute = createRoute({
  method: 'get',
  path: '/amz/amazon-search-by-keyword',
  tags: ['amz'],
  summary: 'fetch results auf a keyword search on Amazon',
  operationId: 'keywordSearch',
  request: {
    query: z.object({
      keyword: z
        .string()
        .openapi({
          param: {
            description: 'keyword to search',
            in: 'query',
            name: 'keyword',
            required: true,
            schema: { type: 'string' },
          },
        }),
      domainCode: z
        .string()
        .openapi({
          param: {
            description: 'domain for the search',
            in: 'query',
            name: 'domainCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
      sortBy: z
        .string()
        .default('relevanceblender')
        .exactOptional()
        .openapi({
          param: {
            description: 'sort option',
            in: 'query',
            name: 'sortBy',
            schema: { default: 'relevanceblender', type: 'string' },
            required: false,
          },
        }),
      numberOfProducts: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of the results (max 20)',
            in: 'query',
            name: 'numberOfProducts',
            schema: { default: '20', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: KeywordSearchResponseSchema } },
    },
    400: { description: 'Bad Request - Missing parameter' },
    404: { description: 'Not Found - Product not Found' },
  },
  security: [],
})

export const getAmzSortOptionsRoute = createRoute({
  method: 'get',
  path: '/amz/sort-options',
  tags: ['amz'],
  summary: 'request available sort options to use in keyword search',
  operationId: 'sortOptions',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SortOptionResponseSchema } },
    },
  },
})

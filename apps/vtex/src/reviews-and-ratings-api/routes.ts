import { createRoute, z } from '@hono/zod-openapi'

const SaveMultipleReviewsRequestSchema = z
  .object({
    approved: z
      .boolean()
      .openapi({ description: 'If the review was approved (`true`) or not (`false`).' }),
    id: z.string().exactOptional().openapi({ description: 'Review ID.' }),
    productId: z.string().openapi({ description: 'Product ID.' }),
    rating: z.number().openapi({ description: 'Customer rating.' }),
    reviewerName: z.string().openapi({ description: 'Reviewer name.' }),
    text: z.string().openapi({ description: "Review's text." }),
    title: z.string().openapi({ description: "Review's title." }),
    verifiedPurchaser: z
      .boolean()
      .openapi({
        description: 'If the reviewer is a verified purchaser (`true`) or not (`false`).',
      }),
  })
  .openapi({
    example: {
      approved: false,
      productId: '1',
      rating: 4,
      reviewerName: 'Arturo',
      text: 'Great product!',
      title: 'Great product',
      verifiedPurchaser: false,
    },
    required: [
      'productId',
      'rating',
      'title',
      'text',
      'reviewerName',
      'approved',
      'verifiedPurchaser',
    ],
    title: 'SaveMultipleReviewsRequest',
  })
  .openapi('SaveMultipleReviewsRequest')

const SaveReviewRequestSchema = z
  .object({
    productId: z.string().openapi({ description: 'Product ID.' }),
    rating: z.int32().openapi({ description: 'Customer rating.' }),
    reviewerName: z.string().openapi({ description: 'Reviewer name.' }),
    text: z.string().openapi({ description: "Review's text." }),
    title: z.string().openapi({ description: "Review's title." }),
  })
  .openapi({
    example: {
      productId: '65444',
      rating: 5,
      reviewerName: 'Arturo',
      text: 'It is the best product that I have seen',
      title: 'Good Product',
    },
    required: ['productId', 'rating', 'title', 'text', 'reviewerName'],
    title: 'SaveReviewRequest',
  })
  .openapi('SaveReviewRequest')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getRatingProductIdRoute = createRoute({
  method: 'get',
  path: '/rating/{productId}',
  tags: ['Rating'],
  summary: 'Get Product Rating',
  description: 'Retrieves the rating of a specific product.',
  operationId: 'GetProductRating',
  request: {
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            description: 'Product ID.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              average: z
                .number()
                .exactOptional()
                .openapi({ description: 'Avarage rating of the product.', example: 3.86 }),
              totalCount: z
                .number()
                .exactOptional()
                .openapi({ description: 'Total amount of ranting of the product.', example: 7 }),
            })
            .openapi({ description: '', example: { average: 3.86, totalCount: 7 }, required: [] }),
        },
      },
    },
  },
})

export const postReviewRoute = createRoute({
  method: 'post',
  path: '/review',
  tags: ['Review'],
  summary: 'Create a Review',
  description: 'Creates a single review',
  operationId: 'SaveReview',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: SaveReviewRequestSchema,
          example: {
            productId: '65444',
            rating: 5,
            reviewerName: 'Arturo',
            text: 'It is the best product that I have seen',
            title: 'Good Product',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              approved: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the review was approved (`true`) or not (`false`).' }),
              id: z.string().exactOptional().openapi({ description: 'Review ID.' }),
              locale: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: "Review's locale." }),
              location: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: "Review's origin location." }),
              pastReviews: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Past reviews of the same product.' }),
              productId: z.string().exactOptional().openapi({ description: 'Product ID.' }),
              rating: z.number().exactOptional().openapi({ description: 'Customer rating.' }),
              reviewDateTime: z
                .string()
                .exactOptional()
                .openapi({ description: "Review's date and time." }),
              reviewerName: z.string().exactOptional().openapi({ description: 'Reviewer name.' }),
              searchDate: z
                .string()
                .exactOptional()
                .openapi({ description: "Review's search date." }),
              shopperId: z.string().exactOptional().openapi({ description: 'Shopper email.' }),
              sku: z.string().nullable().exactOptional().openapi({ description: 'SKU ID.' }),
              text: z.string().exactOptional().openapi({ description: "Review's text." }),
              title: z.string().exactOptional().openapi({ description: "Review's title." }),
              verifiedPurchaser: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If the reviewer is a verified purchaser (`true`) or not (`false`).',
                }),
            })
            .openapi({
              description: '',
              example: {
                approved: false,
                id: '5323fdaa-c012-11ec-835d-0ebee58edbb3',
                locale: 'en-US',
                location: null,
                pastReviews: null,
                productId: '65444',
                rating: 5,
                reviewDateTime: '04/19/2022 18:55:58',
                reviewerName: 'Arturo',
                searchDate: '2022-04-19T18:55:58Z',
                shopperId: 'user@email.com',
                sku: '2',
                text: 'It is the best product that I have seen',
                title: 'Good Product',
                verifiedPurchaser: false,
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getReviewReviewIdRoute = createRoute({
  method: 'get',
  path: '/review/{reviewId}',
  tags: ['Review'],
  summary: 'Get Review by Review ID',
  description: 'Retrieves information of a product review by its ID.',
  operationId: 'GetReviewbyReviewId',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: {
            description: 'Review ID.',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              approved: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the review was approved (`true`) or not (`false`).' }),
              id: z.string().exactOptional().openapi({ description: 'Review ID.' }),
              locale: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: "Review's locale." }),
              location: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: "Review's origin location." }),
              pastReviews: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Past reviews of the same product.' }),
              productId: z.string().exactOptional().openapi({ description: 'Product ID.' }),
              rating: z.number().exactOptional().openapi({ description: 'Customer rating.' }),
              reviewDateTime: z
                .string()
                .exactOptional()
                .openapi({ description: "Review's date and time." }),
              reviewerName: z.string().exactOptional().openapi({ description: 'Reviewer name.' }),
              searchDate: z
                .string()
                .exactOptional()
                .openapi({ description: "Review's search date." }),
              shopperId: z.string().exactOptional().openapi({ description: 'Shopper email.' }),
              sku: z.string().nullable().exactOptional().openapi({ description: 'SKU ID.' }),
              text: z.string().exactOptional().openapi({ description: "Review's text." }),
              title: z.string().exactOptional().openapi({ description: "Review's title." }),
              verifiedPurchaser: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If the reviewer is a verified purchaser (`true`) or not (`false`).',
                }),
            })
            .openapi({
              description: '',
              example: {
                approved: false,
                id: '5323fdaa-c012-11ec-835d-0ebee58edbb3',
                locale: 'en-US',
                location: null,
                pastReviews: null,
                productId: '1',
                rating: 5,
                reviewDateTime: '04/19/2022 18:55:58',
                reviewerName: 'Arturo',
                searchDate: '2022-04-19T18:55:58Z',
                shopperId: 'user@email.com',
                sku: '2',
                text: 'Great product.',
                title: 'Great product',
                verifiedPurchaser: false,
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const deleteReviewReviewIdRoute = createRoute({
  method: 'delete',
  path: '/review/{reviewId}',
  tags: ['Review'],
  summary: 'Delete Review',
  description: 'Deletes an existing review.',
  operationId: 'DeleteReview',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: {
            description: 'Review ID.',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .boolean()
            .openapi({
              description: 'If the review was deleted (`true`) or not (`false`).',
              example: true,
            }),
        },
      },
    },
  },
})

export const patchReviewReviewIdRoute = createRoute({
  method: 'patch',
  path: '/review/{reviewId}',
  tags: ['Review'],
  summary: 'Update a Review',
  description: 'Updates the information of a review.',
  operationId: 'EditReview',
  request: {
    params: z.object({
      reviewId: z
        .string()
        .openapi({
          param: {
            description: 'Review ID.',
            in: 'path',
            name: 'reviewId',
            required: true,
            schema: { example: '5323fdaa-c012-11ec-835d-0ebee58edbb3', type: 'string' },
            style: 'simple',
          },
          example: '5323fdaa-c012-11ec-835d-0ebee58edbb3',
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              locale: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: "Review's locale." }),
              productId: z.string().openapi({ description: 'Product ID.' }),
              rating: z.number().openapi({ description: 'Customer rating.' }),
              reviewerName: z.string().openapi({ description: 'Reviewer name.' }),
              shopperId: z.string().exactOptional().openapi({ description: 'Shopper email.' }),
              text: z.string().openapi({ description: "Review's text." }),
              title: z.string().openapi({ description: "Review's title." }),
              verifiedPurchaser: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If the reviewer is a verified purchaser (`true`) or not (`false`).',
                }),
            })
            .openapi({
              description: '',
              example: {
                locale: 'en-US',
                productId: '1',
                rating: 5,
                reviewerName: 'Arturo',
                shopperId: 'user@email.com',
                text: 'Great product.',
                title: 'Great product',
                verifiedPurchaser: false,
              },
              required: ['productId', 'rating', 'title', 'text', 'reviewerName'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              approved: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the review was approved (`true`) or not (`false`).' }),
              id: z.string().exactOptional().openapi({ description: 'Review ID.' }),
              locale: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: "Review's locale." }),
              location: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: "Review's origin location." }),
              pastReviews: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Past reviews of the same product.' }),
              productId: z.string().exactOptional().openapi({ description: 'Product ID.' }),
              rating: z.number().exactOptional().openapi({ description: 'Customer rating.' }),
              reviewDateTime: z
                .string()
                .exactOptional()
                .openapi({ description: "Review's date and time." }),
              reviewerName: z.string().exactOptional().openapi({ description: 'Reviewer name.' }),
              searchDate: z
                .string()
                .exactOptional()
                .openapi({ description: "Review's search date." }),
              shopperId: z.string().exactOptional().openapi({ description: 'Shopper email.' }),
              sku: z.string().nullable().exactOptional().openapi({ description: 'SKU ID.' }),
              text: z.string().exactOptional().openapi({ description: "Review's text." }),
              title: z.string().exactOptional().openapi({ description: "Review's title." }),
              verifiedPurchaser: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If the reviewer is a verified purchaser (`true`) or not (`false`).',
                }),
            })
            .openapi({
              description: '',
              example: {
                approved: false,
                id: '5323fdaa-c012-11ec-835d-0ebee58edbb3',
                locale: 'en-US',
                location: null,
                pastReviews: null,
                productId: '1',
                rating: 5,
                reviewDateTime: '04/19/2022 18:55:58',
                reviewerName: 'Arturo',
                searchDate: '2022-04-19T18:55:58Z',
                shopperId: 'user@email.com',
                sku: '2',
                text: 'Great product.',
                title: 'Great product',
                verifiedPurchaser: false,
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const getReviewsRoute = createRoute({
  method: 'get',
  path: '/reviews',
  tags: ['Review'],
  summary: 'Get a list of Reviews',
  description: 'Retrieves a list of reviews.',
  operationId: 'GetalistofReviews',
  request: {
    query: z.object({
      search_term: z
        .string()
        .openapi({
          param: {
            description:
              'Returns Reviews that contain the search term in `productId`, `sku`, `shopperId`, or `reviewerName`.',
            explode: true,
            in: 'query',
            name: 'search_term',
            required: true,
            schema: { example: 'search_term', type: 'string' },
            style: 'form',
          },
          example: 'search_term',
        }),
      from: z
        .string()
        .openapi({
          param: {
            description: 'Zero base starting record number, `0` is the default value.',
            explode: true,
            in: 'query',
            name: 'from',
            required: true,
            schema: { example: '0', type: 'string' },
            style: 'form',
          },
          example: '0',
        }),
      to: z
        .string()
        .openapi({
          param: {
            description: 'Zero base ending record number, `3` is the default value.',
            explode: true,
            in: 'query',
            name: 'to',
            required: true,
            schema: { example: '3', type: 'string' },
            style: 'form',
          },
          example: '3',
        }),
      order_by: z
        .string()
        .openapi({
          param: {
            description:
              'Case-sensitive fieldName to order records (optionally add `:asc` or `:desc`).',
            explode: true,
            in: 'query',
            name: 'order_by',
            required: true,
            schema: { example: ':asc', type: 'string' },
            style: 'form',
          },
          example: ':asc',
        }),
      status: z
        .stringbool()
        .openapi({
          param: {
            description: 'Status of the review, approved (`true`) or not (`false`).',
            explode: true,
            in: 'query',
            name: 'status',
            required: true,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
      product_id: z
        .string()
        .openapi({
          param: {
            description: 'Filter the reviews by product ID.',
            explode: true,
            in: 'query',
            name: 'product_id',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'form',
          },
          example: '1',
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      approved: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'If the review was approved (`true`) or not (`false`).',
                        }),
                      id: z.string().exactOptional().openapi({ description: 'Review ID.' }),
                      locale: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: "Review's locale." }),
                      location: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: "Review's origin location." }),
                      pastReviews: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'Past reviews of the same product.' }),
                      productId: z.string().exactOptional().openapi({ description: 'Product ID.' }),
                      rating: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'Customer rating.' }),
                      reviewDateTime: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "Review's date and time." }),
                      reviewerName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Reviewer name.' }),
                      searchDate: z
                        .string()
                        .exactOptional()
                        .openapi({ description: "Review's search date." }),
                      shopperId: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Shopper email.' }),
                      sku: z
                        .string()
                        .nullable()
                        .exactOptional()
                        .openapi({ description: 'SKU ID.' }),
                      text: z.string().exactOptional().openapi({ description: "Review's text." }),
                      title: z.string().exactOptional().openapi({ description: "Review's title." }),
                      verifiedPurchaser: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If the reviewer is a verified purchaser (`true`) or not (`false`).',
                        }),
                    })
                    .openapi({ description: "Review's information.", required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Array of reviews.' }),
              range: z
                .object({
                  from: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Zero base starting record number.' }),
                  to: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Zero base ending record number.' }),
                  total: z
                    .number()
                    .exactOptional()
                    .openapi({ description: 'Total number of reviews on the list.' }),
                })
                .exactOptional()
                .openapi({ description: "Range of the review's list.", required: [] }),
            })
            .openapi({
              description: '',
              example: {
                data: [
                  {
                    approved: true,
                    id: '1',
                    locale: null,
                    location: '',
                    pastReviews: null,
                    productId: '880035',
                    rating: 3,
                    reviewDateTime: '06/02/2021 20:58:43',
                    reviewerName: 'anon',
                    searchDate: '2021-06-02T20:58:43Z',
                    shopperId: 'anon@email.com',
                    sku: null,
                    text: 'anon',
                    title: 'anon',
                    verifiedPurchaser: false,
                  },
                  {
                    approved: true,
                    id: '2',
                    locale: null,
                    location: '',
                    pastReviews: null,
                    productId: '880035',
                    rating: 5,
                    reviewDateTime: '06/02/2021 21:00:00',
                    reviewerName: 'Brian',
                    searchDate: '2021-06-02T21:00:00Z',
                    shopperId: 'brian@email.com.br',
                    sku: null,
                    text: "it's cool",
                    title: 'logged in',
                    verifiedPurchaser: false,
                  },
                  {
                    approved: true,
                    id: 'c66d8bc0-787c-11ec-82ac-028dd4526e77',
                    locale: 'ko-KR',
                    location: null,
                    pastReviews: null,
                    productId: '880035',
                    rating: 3,
                    reviewDateTime: '01/18/2022 16:36:33',
                    reviewerName: 'ko-KR',
                    searchDate: '2022-01-18T16:36:33Z',
                    shopperId: 'user@email.com',
                    sku: null,
                    text: 'ko-KR',
                    title: 'Korean',
                    verifiedPurchaser: false,
                  },
                ],
                range: { from: 0, to: 3, total: 26 },
              },
              required: [],
            }),
        },
      },
    },
  },
})

export const postReviewsRoute = createRoute({
  method: 'post',
  path: '/reviews',
  tags: ['Review'],
  summary: 'Create Multiple Reviews',
  description: 'Creates multiple reviews.',
  operationId: 'SaveMultipleReviews',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(SaveMultipleReviewsRequestSchema).openapi({ description: '' }),
          example: [
            {
              approved: false,
              productId: '1',
              rating: 4,
              reviewerName: 'Arturo',
              text: 'test multiple reviews',
              title: 'test multiple reviews',
              verifiedPurchaser: false,
            },
            {
              approved: false,
              productId: '2',
              rating: 4,
              reviewerName: 'Arturo',
              text: 'test review 2 multiple reviews',
              title: 'test review 2 multiple reviews',
              verifiedPurchaser: false,
            },
          ],
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ description: 'Review ID.' }))
            .openapi({ description: 'List of review IDs.' }),
          example: ['8e1a5e11-c0c9-11ec-835d-0a591b8a3ec1', '9257c203-c0c9-11ec-835d-0e02dd207951'],
        },
      },
    },
  },
})

export const deleteReviewsRoute = createRoute({
  method: 'delete',
  path: '/reviews',
  tags: ['Review'],
  summary: 'Delete Multiple Reviews',
  description: 'Deletes multiple reviews at once.',
  operationId: 'DeleteMultipleReviews',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ description: 'Review ID.' }))
            .default(['1', '2', 'c66d8bc0-787c-11ec-82ac-028dd4526e77'])
            .openapi({ description: 'Array of reviews IDs.' }),
          example: [
            'babefcf4-e0f7-11ec-835d-16c4e59c4351',
            'qweqweee-e0f7-11ec-835d-16c4e59c4351',
            'asdffggg-e0f7-11ec-835d-16c4e59c4351',
          ],
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .boolean()
            .openapi({
              description: 'If the review was deleted (`true`) or not (`false`).',
              example: true,
            }),
        },
      },
    },
  },
})

import { createRoute, z } from '@hono/zod-openapi'

export const getApiV2ListFederationsRoute = createRoute({
  method: 'get',
  path: '/api/v2/list-federations',
  description: 'Returns an array of all the available federations.',
  request: {
    headers: z.object({
      'X-RapidApi-Key': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your key obtained from https://boggio-analytics.com/fp-api/',
            in: 'header',
            name: 'X-RapidApi-Key',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Static response, shows available federations.',
      content: {
        'application/json': {
          schema: z.object({ data: z.array(z.string()).exactOptional() }).openapi({ required: [] }),
          examples: {
            '0': { value: '{"data": ["UEFA", "OFC", "CAF", "CONCACAF", "CONMEBOL", "AFC"]}' },
          },
        },
      },
    },
    404: {
      description: 'Bad request, check response for detailed errors.',
      content: {
        'application/json': {
          schema: z.object({ errors: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getApiV2ListMarketsRoute = createRoute({
  method: 'get',
  path: '/api/v2/list-markets',
  description: 'Returns an array of all the supported prediction markets',
  request: {
    headers: z.object({
      'X-RapidApi-Key': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your key obtained from https://boggio-analytics.com/fp-api/',
            in: 'header',
            name: 'X-RapidApi-Key',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Static response, shows available markets for the current subscription and all available markets in general.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  all: z.array(z.string()).exactOptional(),
                  allowed_for_your_subscription: z.array(z.string()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            '0': {
              value:
                '{"data": {"all": ["over_25", "away_over_15", "away_over_05", "classic", "home_over_05", "home_over_15", "btts", "over_35"], "allowed_for_your_subscription": ["over_25", "away_over_15", "away_over_05", "classic", "home_over_05", "home_over_15", "btts", "over_35"]}}',
            },
          },
        },
      },
    },
    404: {
      description: 'Bad request, check response for detailed errors.',
      content: {
        'application/json': {
          schema: z.object({ errors: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getApiV2PerformanceStatsRoute = createRoute({
  method: 'get',
  path: '/api/v2/performance-stats',
  description: 'Returns predictions accuracy in the last 1, 7, 14, 30 days.',
  request: {
    headers: z.object({
      'X-RapidApi-Key': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your key obtained from https://boggio-analytics.com/fp-api/',
            in: 'header',
            name: 'X-RapidApi-Key',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Good request, returns object that contains accuracy and other datails about predictions.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  accuracy: z
                    .object({
                      last_14_days: z.number().exactOptional(),
                      last_30_days: z.number().exactOptional(),
                      last_7_days: z.number().exactOptional(),
                      yesterday: z.number().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  details: z
                    .object({
                      last_14_days: z
                        .object({
                          lost: z.int().exactOptional(),
                          pending: z.int().exactOptional(),
                          postponed: z.int().exactOptional(),
                          total: z.int().exactOptional(),
                          won: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      last_30_days: z
                        .object({
                          lost: z.int().exactOptional(),
                          pending: z.int().exactOptional(),
                          postponed: z.int().exactOptional(),
                          total: z.int().exactOptional(),
                          won: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      last_7_days: z
                        .object({
                          lost: z.int().exactOptional(),
                          pending: z.int().exactOptional(),
                          postponed: z.int().exactOptional(),
                          total: z.int().exactOptional(),
                          won: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      yesterday: z
                        .object({
                          lost: z.int().exactOptional(),
                          pending: z.int().exactOptional(),
                          postponed: z.int().exactOptional(),
                          total: z.int().exactOptional(),
                          won: z.int().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  market: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Bad request, check response for detailed errors.',
      content: {
        'application/json': {
          schema: z.object({ errors: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getApiV2PredictionsRoute = createRoute({
  method: 'get',
  path: '/api/v2/predictions',
  description:
    'This endpoint returns by default the next non-expired football predictions. URL parameters can be specified to show specific date in the past or future or to filter by federation and prediction market name.',
  request: {
    headers: z.object({
      'X-RapidApi-Key': z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            description: 'Your key obtained from https://boggio-analytics.com/fp-api/',
            in: 'header',
            name: 'X-RapidApi-Key',
            schema: { format: 'uuid', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Good request, returns object that contains data array with all predictions.',
    },
    404: {
      description: 'Bad request, check response for detailed errors.',
      content: {
        'application/json': {
          schema: z.object({ errors: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getApiV2PredictionsIdRoute = createRoute({
  method: 'get',
  path: '/api/v2/predictions/{id}',
  description: 'Returns all predictions available for a match id.',
  request: {
    params: z.object({
      id: z
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
            description: 'ID of match',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Good request, returns object that contains all the predictions for a certain event.',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(z.object({})).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Bad request, check response for detailed errors.',
      content: {
        'application/json': {
          schema: z.object({ errors: z.object({}).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

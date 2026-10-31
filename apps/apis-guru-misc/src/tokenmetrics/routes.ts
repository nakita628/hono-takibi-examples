import { createRoute, z } from '@hono/zod-openapi'

export const getV1CorrelationRoute = createRoute({
  method: 'get',
  path: '/v1/correlation',
  summary: 'Correlation',
  description: 'Correlation',
  operationId: 'correlation',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1IndicesRoute = createRoute({
  method: 'get',
  path: '/v1/indices',
  summary: 'Indices',
  description: 'Indices',
  operationId: 'indices',
  request: {
    query: z.object({
      exchanges: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'exchanges',
            schema: { example: 'binance', type: 'string' },
            required: false,
          },
          example: 'binance',
        }),
      timeHorizon: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'timeHorizon',
            schema: { example: 'daily', type: 'string' },
            required: false,
          },
          example: 'daily',
        }),
      lowCap: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'lowCap',
            schema: { example: 'true', type: 'string' },
            required: false,
          },
          example: 'true',
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            schema: { example: '2023-01-10', type: 'string' },
            required: false,
          },
          example: '2023-01-10',
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            schema: { example: '2023-01-11', type: 'string' },
            required: false,
          },
          example: '2023-01-11',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1InvestorGradesRoute = createRoute({
  method: 'get',
  path: '/v1/investor-grades',
  summary: 'Investor Grades',
  description: 'Investor Grades',
  operationId: 'investorGrades',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            schema: { example: '2023-01-10', type: 'string' },
            required: false,
          },
          example: '2023-01-10',
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            schema: { example: '2023-01-11', type: 'string' },
            required: false,
          },
          example: '2023-01-11',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1MarketIndicatorRoute = createRoute({
  method: 'get',
  path: '/v1/market-indicator',
  summary: 'Market Indicator',
  description: 'Market Indicator',
  operationId: 'marketIndicator',
  request: {
    query: z.object({
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            schema: { example: '2023-01-10', type: 'string' },
            required: false,
          },
          example: '2023-01-10',
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            schema: { example: '2023-01-11', type: 'string' },
            required: false,
          },
          example: '2023-01-11',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1PriceRoute = createRoute({
  method: 'get',
  path: '/v1/price',
  summary: 'Price',
  description: 'Price',
  operationId: 'price',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            schema: { example: '2023-01-10', type: 'string' },
            required: false,
          },
          example: '2023-01-10',
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            schema: { example: '2023-01-11', type: 'string' },
            required: false,
          },
          example: '2023-01-11',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            schema: { example: '1', type: 'string' },
            required: false,
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1PricePredictionRoute = createRoute({
  method: 'get',
  path: '/v1/price-prediction',
  summary: 'Price Prediction',
  description: 'Price Prediction',
  operationId: 'pricePrediction',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            schema: { example: '2023-02-01', type: 'string' },
            required: false,
          },
          example: '2023-02-01',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1QuantmetricsTier1Route = createRoute({
  method: 'get',
  path: '/v1/quantmetrics-tier-1',
  summary: 'Quantmetrics Tier 1',
  description: 'Quantmetrics Tier 1',
  operationId: 'quantmetricsTier1',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            schema: { example: '2023-02-01', type: 'string' },
            required: false,
          },
          example: '2023-02-01',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1QuantmetricsTier2Route = createRoute({
  method: 'get',
  path: '/v1/quantmetrics-tier-2',
  summary: 'Quantmetrics Tier 2',
  description: 'Quantmetrics Tier 2',
  operationId: 'quantmetricsTier2',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            schema: { example: '2023-02-01', type: 'string' },
            required: false,
          },
          example: '2023-02-01',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1ResistanceSupportRoute = createRoute({
  method: 'get',
  path: '/v1/resistance-support',
  summary: 'Resistance & Support',
  description: 'Resistance & Support',
  operationId: 'resistanceSupport',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            schema: { example: '2023-01-10', type: 'string' },
            required: false,
          },
          example: '2023-01-10',
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            schema: { example: '2023-01-11', type: 'string' },
            required: false,
          },
          example: '2023-01-11',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1ScenarioAnalysisRoute = createRoute({
  method: 'get',
  path: '/v1/scenario-analysis',
  summary: 'Scenario Analysis',
  description: 'Scenario Analysis',
  operationId: 'scenarioAnalysis',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1SentimentsRoute = createRoute({
  method: 'get',
  path: '/v1/sentiments',
  summary: 'Sentiments',
  description: 'Sentiments',
  operationId: 'sentiments',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            schema: { example: '2023-01-10', type: 'string' },
            required: false,
          },
          example: '2023-01-10',
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            schema: { example: '2023-01-11', type: 'string' },
            required: false,
          },
          example: '2023-01-11',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1TokensRoute = createRoute({
  method: 'get',
  path: '/v1/tokens',
  summary: 'Tokens',
  description: 'Tokens',
  operationId: 'tokens',
  request: {
    query: z.object({
      token_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'token_ids',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      token_names: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'token_names',
            schema: { example: 'Hivemapper, Sei_Network, Layer_Zero, Lyra Huobi', type: 'string' },
            required: false,
          },
          example: 'Hivemapper, Sei_Network, Layer_Zero, Lyra Huobi',
        }),
      token_symbols: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'token_symbols',
            schema: { example: 'bds, bds, btc', type: 'string' },
            required: false,
          },
          example: 'bds, bds, btc',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1TraderGradesRoute = createRoute({
  method: 'get',
  path: '/v1/trader-grades',
  summary: 'Trader Grades',
  description: 'Trader Grades',
  operationId: 'traderGrades',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startDate',
            schema: { example: '2023-01-10', type: 'string' },
            required: false,
          },
          example: '2023-01-10',
        }),
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'endDate',
            schema: { example: '2023-01-11', type: 'string' },
            required: false,
          },
          example: '2023-01-11',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const getV1TradingIndicatorRoute = createRoute({
  method: 'get',
  path: '/v1/trading-indicator',
  summary: 'Trading Indicator',
  description: 'Trading Indicator',
  operationId: 'tradingIndicator',
  request: {
    query: z.object({
      tokens: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'tokens',
            schema: { example: '3375, 3306', type: 'string' },
            required: false,
          },
          example: '3375, 3306',
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { example: '1000', type: 'string' },
            required: false,
          },
          example: '1000',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

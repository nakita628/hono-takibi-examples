import { createRoute, z } from '@hono/zod-openapi'

const IntervalSchema = z
  .strictObject({
    change: z.float64().nullable().exactOptional(),
    changePercent: z.float64().nullable().exactOptional(),
    end: z.iso.datetime({ offset: true }).exactOptional(),
    high: z.float64().nullable().exactOptional(),
    last: z.float64().nullable().exactOptional(),
    low: z.float64().nullable().exactOptional(),
    open: z.float64().nullable().exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Interval')

const IntervalCollectionSchema = z
  .strictObject({
    baseCurrency: z.string().nullable().exactOptional(),
    intervals: z.array(IntervalSchema).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    symbol: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IntervalCollection')

const IntervalCollectionResponseSchema = z
  .strictObject({
    data: IntervalCollectionSchema.exactOptional(),
    error: z.string().nullable().exactOptional(),
    requestedCurrency: z.string().nullable().exactOptional(),
    requestedSymbol: z.string().nullable().exactOptional(),
    requestedUnitOfMeasure: z.string().nullable().exactOptional(),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('IntervalCollectionResponse')

const RateSchema = z
  .strictObject({
    symbol: z.string().nullable().exactOptional(),
    timestamp: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    value: z.float64().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Rate')

const RateResponseSchema = z
  .strictObject({
    data: RateSchema.exactOptional(),
    error: z.string().nullable().exactOptional(),
    requestedCurrency: z.string().nullable().exactOptional(),
    requestedSymbol: z.string().nullable().exactOptional(),
    requestedUnitOfMeasure: z.string().nullable().exactOptional(),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RateResponse')

const SummarySchema = z
  .strictObject({
    ask: z.float64().nullable().exactOptional(),
    baseCurrency: z.string().nullable().exactOptional(),
    bid: z.float64().nullable().exactOptional(),
    fiftyTwoWeekHigh: z.float64().nullable().exactOptional(),
    fiftyTwoWeekLow: z.float64().nullable().exactOptional(),
    fiftyTwoWeekPercentChange: z.float64().nullable().exactOptional(),
    fourWeekPercentChange: z.float64().nullable().exactOptional(),
    high: z.float64().nullable().exactOptional(),
    last: z.float64().nullable().exactOptional(),
    low: z.float64().nullable().exactOptional(),
    oneDayChange: z.float64().nullable().exactOptional(),
    oneDayPercentChange: z.float64().nullable().exactOptional(),
    oneDayValue: z.float64().nullable().exactOptional(),
    open: z.float64().nullable().exactOptional(),
    symbol: z.string().nullable().exactOptional(),
    timeStamp: z.iso.datetime({ offset: true }).exactOptional(),
    twelveWeekPercentChange: z.float64().nullable().exactOptional(),
    yearToDatePercentChange: z.float64().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Summary')

const SummaryResponseSchema = z
  .strictObject({
    data: SummarySchema.exactOptional(),
    error: z.string().nullable().exactOptional(),
    requestedCurrency: z.string().nullable().exactOptional(),
    requestedSymbol: z.string().nullable().exactOptional(),
    requestedUnitOfMeasure: z.string().nullable().exactOptional(),
    success: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SummaryResponse')

const TokenSecurityScheme = {
  description: 'authorization token',
  in: 'query',
  name: 'token',
  type: 'apiKey',
}

export const getApiV1CurrenciesHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/Currencies/history',
  tags: ['Currencies'],
  summary: 'Get historical prices for requested currency pairs',
  description:
    'Historical OHLC data for the specified period and interval size\r\n\r\nThe combination of the interval parameter and start and end dates can result in results\r\nbeing truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.',
  operationId: 'Currencies_History_GET',
  request: {
    query: z.object({
      pairs: z
        .string()
        .openapi({
          param: {
            description:
              'comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD',
            in: 'query',
            name: 'pairs',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'start date of time period. format is <i>yyyy-mm-dd</i>',
            in: 'query',
            name: 'start',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.',
            in: 'query',
            name: 'end',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      interval: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), \r\nfollowed by a type string which must be one of the following values:\r\ny=year,\r\nm=month,\r\nw=week,\r\nd=day,\r\nh=hour,\r\nmi=minute\r\n\r\nFor example, a yearly interval can be specified as "y" and 6 month interval as "6m". \r\n\r\nIf not specified the interval parameter default is 1 Day.',
            in: 'query',
            name: 'interval',
            schema: { type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(IntervalCollectionResponseSchema) },
        'application/xml': { schema: z.array(IntervalCollectionResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1CurrenciesHistorySupportedRoute = createRoute({
  method: 'get',
  path: '/api/v1/Currencies/history/supported',
  tags: ['Currencies'],
  summary: 'Get list of currency pairs supported by the history endpoint',
  description:
    'Only the currency pairs in the direction noted can be used with the history endpoint.\r\nFor example: USD/CAD is not the same as CAD/USD',
  operationId: 'Currencies_SupportedCurrencies_History_GET',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1CurrenciesRateRoute = createRoute({
  method: 'get',
  path: '/api/v1/Currencies/rate',
  tags: ['Currencies'],
  summary: 'Get latest mid rate for requested currency pairs',
  description: 'Current Mid Rate',
  operationId: 'Currencies_Rate_GET',
  request: {
    query: z.object({
      pairs: z
        .string()
        .openapi({
          param: {
            description:
              'comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD',
            in: 'query',
            name: 'pairs',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(RateResponseSchema) },
        'application/xml': { schema: z.array(RateResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1CurrenciesRateSupportedRoute = createRoute({
  method: 'get',
  path: '/api/v1/Currencies/rate/supported',
  tags: ['Currencies'],
  summary: 'Get list of currencies supported by the rate endpoint',
  description:
    'Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.\r\nFor example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD',
  operationId: 'Currencies_SupportedCurrencies_Rate_GET',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1CurrenciesSummaryRoute = createRoute({
  method: 'get',
  path: '/api/v1/Currencies/summary',
  tags: ['Currencies'],
  summary: 'Get latest Summary for requested currency pairs',
  description: 'Current and daily summary information combined into a single quote',
  operationId: 'Currencies_Summary_GET',
  request: {
    query: z.object({
      pairs: z
        .string()
        .openapi({
          param: {
            description:
              'comma separated list of currency pairs. For example: USD/CAD,USD/EUR,USD/AUD',
            in: 'query',
            name: 'pairs',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SummaryResponseSchema) },
        'application/xml': { schema: z.array(SummaryResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1CurrenciesSummarySupportedRoute = createRoute({
  method: 'get',
  path: '/api/v1/Currencies/summary/supported',
  tags: ['Currencies'],
  summary: 'Get list of currency pairs supported by the Summary endpoint',
  description:
    'Only the currency pairs in the direction noted can be used with the Summary endpoint.\r\nFor example: USD/CAD is not the same as CAD/USD',
  operationId: 'Currencies_SupportedCurrencies_Summary_GET',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsBenchmarkHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/benchmark/history',
  tags: ['Metals'],
  summary: 'Get historical benchmark prices for requested metals',
  description:
    "Historical OHLC data for the specified period and interval size\r\n\r\nThe combination of the interval parameter and start and end dates can result in results\r\nbeing truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.\r\n\r\nThe historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.",
  operationId: 'Metals_BenchmarkHistory_GET',
  request: {
    query: z.object({
      metals: z
        .string()
        .openapi({
          param: {
            description: 'comma separated list of metals',
            in: 'query',
            name: 'metals',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'start date of time period. format is <i>yyyy-mm-dd</i>',
            in: 'query',
            name: 'start',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.',
            in: 'query',
            name: 'end',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      interval: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), \r\nfollowed by a type string which must be one of the following values:\r\ny=year,\r\nm=month,\r\nw=week,\r\nd=day,\r\nh=hour,\r\nmi=minute\r\n\r\nFor example, a yearly interval can be specified as "y" and 6 month interval as "6m". \r\n\r\nIf not specified the interval parameter default is 1 Day.',
            in: 'query',
            name: 'interval',
            schema: { type: 'string' },
            required: false,
          },
        }),
      historicalfx: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if true use historical currency rates otherwise current currency rates. Defaults to true.',
            in: 'query',
            name: 'historicalfx',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma separated list of conversion currencies, defaults to USD',
            in: 'query',
            name: 'currency',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitofmeasure: z
        .enum(['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'unit of meaure, defaults to troy ounces. allowed values are:\r\nmg=milligram\r\ng=gram\r\nkg=kilogram\r\ngr=grain\r\noz=ounce\r\ntoz=troy ounce\r\nct=carat\r\ndwt=pennyweight',
            in: 'query',
            name: 'unitofmeasure',
            schema: { enum: ['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'], type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(IntervalCollectionResponseSchema) },
        'application/xml': { schema: z.array(IntervalCollectionResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsBenchmarkSummaryRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/benchmark/summary',
  tags: ['Metals'],
  summary: 'Get latest Benchmark prices for requested metals',
  description: 'Benchmark price information',
  operationId: 'Metals_BenchmarkSummary_GET',
  request: {
    query: z.object({
      metals: z
        .string()
        .openapi({
          param: {
            description: 'comma separated list of metals',
            in: 'query',
            name: 'metals',
            required: true,
            schema: { type: 'string' },
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma separated list of conversion currencies, defaults to USD',
            in: 'query',
            name: 'currency',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitofmeasure: z
        .enum(['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'unit of meaure, defaults to troy ounces. allowed values are:\r\nmg=milligram\r\ng=gram\r\nkg=kilogram\r\ngr=grain\r\noz=ounce\r\ntoz=troy ounce\r\nct=carat\r\ndwt=pennyweight',
            in: 'query',
            name: 'unitofmeasure',
            schema: { enum: ['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'], type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SummaryResponseSchema) },
        'application/xml': { schema: z.array(SummaryResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsBenchmarkSupportedRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/benchmark/supported',
  tags: ['Metals'],
  summary: 'Get list of symbols supported by the benchmark endpoints',
  operationId: 'Metals_BenchmarkSupportedMetals_GET',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsSpotHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/spot/history',
  tags: ['Metals'],
  summary: 'Get historical Spot prices for requested metals',
  description:
    "Historical OHLC data for the specified period and interval size\r\n\r\nThe combination of the interval parameter and start and end dates can result in results\r\nbeing truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.\r\n\r\nThe historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.",
  operationId: 'Metals_SpotHistory_GET',
  request: {
    query: z.object({
      metals: z
        .string()
        .openapi({
          param: {
            description: 'comma separated list of metals',
            in: 'query',
            name: 'metals',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'start date of time period. format is <i>yyyy-mm-dd</i>',
            in: 'query',
            name: 'start',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.',
            in: 'query',
            name: 'end',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      interval: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), \r\nfollowed by a type string which must be one of the following values:\r\ny=year,\r\nm=month,\r\nw=week,\r\nd=day,\r\nh=hour,\r\nmi=minute\r\n\r\nFor example, a yearly interval can be specified as "y" and 6 month interval as "6m". \r\n\r\nIf not specified the interval parameter default is 1 Day.',
            in: 'query',
            name: 'interval',
            schema: { type: 'string' },
            required: false,
          },
        }),
      historicalfx: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'if true use historical currency rates otherwise current currency rates. Defaults to true.',
            in: 'query',
            name: 'historicalfx',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma separated list of conversion currencies, defaults to USD',
            in: 'query',
            name: 'currency',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitofmeasure: z
        .enum(['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'unit of meaure, defaults to troy ounces. allowed values are:\r\nmg=milligram\r\ng=gram\r\nkg=kilogram\r\ngr=grain\r\noz=ounce\r\ntoz=troy ounce\r\nct=carat\r\ndwt=pennyweight',
            in: 'query',
            name: 'unitofmeasure',
            schema: { enum: ['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'], type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(IntervalCollectionResponseSchema) },
        'application/xml': { schema: z.array(IntervalCollectionResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsSpotPerformanceRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/spot/performance',
  tags: ['Metals'],
  summary: 'Get Historical Performance for requested metals',
  description: 'Historical Performance information',
  operationId: 'Metals_SpotHistoricalPerformance_GET',
  request: {
    query: z.object({
      metals: z
        .string()
        .openapi({
          param: {
            description: 'comma separated list of metals',
            in: 'query',
            name: 'metals',
            required: true,
            schema: { type: 'string' },
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma separated list of conversion currencies, defaults to USD',
            in: 'query',
            name: 'currency',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitofmeasure: z
        .enum(['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'unit of meaure, defaults to troy ounces. allowed values are:\r\nmg=milligram\r\ng=gram\r\nkg=kilogram\r\ngr=grain\r\noz=ounce\r\ntoz=troy ounce\r\nct=carat\r\ndwt=pennyweight',
            in: 'query',
            name: 'unitofmeasure',
            schema: { enum: ['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'], type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(IntervalCollectionResponseSchema) },
        'application/xml': { schema: z.array(IntervalCollectionResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsSpotPerformanceAnnualRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/spot/performance/annual',
  tags: ['Metals'],
  summary: 'Get Historical Annual Performance for requested metals',
  description: 'Annual Historical Performance information',
  operationId: 'Metals_SpotAnnualHistoricalPerformance_GET',
  request: {
    query: z.object({
      metals: z
        .string()
        .openapi({
          param: {
            description: 'comma separated list of metals',
            in: 'query',
            name: 'metals',
            required: true,
            schema: { type: 'string' },
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma separated list of conversion currencies, defaults to USD',
            in: 'query',
            name: 'currency',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitofmeasure: z
        .enum(['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'unit of meaure, defaults to troy ounces. allowed values are:\r\nmg=milligram\r\ng=gram\r\nkg=kilogram\r\ngr=grain\r\noz=ounce\r\ntoz=troy ounce\r\nct=carat\r\ndwt=pennyweight',
            in: 'query',
            name: 'unitofmeasure',
            schema: { enum: ['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'], type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
      years: z
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
            description: 'Number of years of history to return. Defaults to 10.',
            in: 'query',
            name: 'years',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(IntervalCollectionResponseSchema) },
        'application/xml': { schema: z.array(IntervalCollectionResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsSpotRatioHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/spot/ratio/history',
  tags: ['Metals'],
  summary: 'Get historical Spot Ratio prices for requested metals',
  description:
    'Historical data for the specified period and interval size\r\n\r\nThe combination of the interval parameter and start and end dates can result in results\r\nbeing truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.',
  operationId: 'Metals_SpotRatioHistory_GET',
  request: {
    query: z.object({
      pairs: z
        .string()
        .openapi({
          param: {
            description: 'comma separated list of metals',
            in: 'query',
            name: 'pairs',
            required: true,
            schema: { type: 'string' },
          },
        }),
      start: z.iso
        .datetime({ offset: true })
        .openapi({
          param: {
            description: 'start date of time period. format is <i>yyyy-mm-dd</i>',
            in: 'query',
            name: 'start',
            required: true,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'end date of time period. format is <i>yyyy-mm-dd</i>. Default is current date.',
            in: 'query',
            name: 'end',
            schema: { format: 'date-time', type: 'string' },
            required: false,
          },
        }),
      interval: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'aggregation interval. Composed of an optional integer value (which defaults to 1 when not specified), \r\nfollowed by a type string which must be one of the following values:\r\ny=year,\r\nm=month,\r\nw=week,\r\nd=day,\r\nh=hour,\r\nmi=minute\r\n\r\nFor example, a yearly interval can be specified as "y" and 6 month interval as "6m". \r\n\r\nIf not specified the interval parameter default is 1 Day.',
            in: 'query',
            name: 'interval',
            schema: { type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(IntervalCollectionResponseSchema) },
        'application/xml': { schema: z.array(IntervalCollectionResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsSpotRatioSummaryRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/spot/ratio/summary',
  tags: ['Metals'],
  summary: 'Get latest Spot Summary for requested metal ratios',
  description: 'Ratios between prices of two metals',
  operationId: 'Metals_SpotRatioSummary_GET',
  request: {
    query: z.object({
      pairs: z
        .string()
        .openapi({
          param: {
            description:
              'comma separated list of metal pairs. For example: gold/silver,gold/platinum,silver/palladium',
            in: 'query',
            name: 'pairs',
            required: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SummaryResponseSchema) },
        'application/xml': { schema: z.array(SummaryResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsSpotSummaryRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/spot/summary',
  tags: ['Metals'],
  summary: 'Get latest Spot Summary for requested metals',
  description: 'Current and daily summary information combined into a single quote',
  operationId: 'Metals_SpotSummary_GET',
  request: {
    query: z.object({
      metals: z
        .string()
        .openapi({
          param: {
            description: 'comma separated list of metals',
            in: 'query',
            name: 'metals',
            required: true,
            schema: { type: 'string' },
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'comma separated list of conversion currencies, defaults to USD',
            in: 'query',
            name: 'currency',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitofmeasure: z
        .enum(['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'unit of meaure, defaults to troy ounces. allowed values are:\r\nmg=milligram\r\ng=gram\r\nkg=kilogram\r\ngr=grain\r\noz=ounce\r\ntoz=troy ounce\r\nct=carat\r\ndwt=pennyweight',
            in: 'query',
            name: 'unitofmeasure',
            schema: { enum: ['mg', 'g', 'kg', 'gr', 'oz', 'toz', 'ct', 'dwt'], type: 'string' },
            required: false,
          },
        }),
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(SummaryResponseSchema) },
        'application/xml': { schema: z.array(SummaryResponseSchema) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsSpotSupportedRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/spot/supported',
  tags: ['Metals'],
  summary: 'Get list of symbols supported by the spot endpoints',
  operationId: 'Metals_SpotSupportedMetals_GET',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

export const getApiV1MetalsSupportedCurrencyRoute = createRoute({
  method: 'get',
  path: '/api/v1/Metals/supported/currency',
  tags: ['Metals'],
  summary: 'Get list of currencies supported by metals endpoints for currency conversion',
  operationId: 'Metals_SupportedCurrencies_Metals_GET',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'to override content negotiation specify a value of json or xml',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: z.array(z.string()) },
        'application/xml': { schema: z.array(z.string()) },
      },
    },
    400: { description: 'Bad Request' },
    401: { description: 'Unauthorized' },
  },
})

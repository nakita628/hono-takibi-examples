import { createRoute, z } from '@hono/zod-openapi'

const LabelsSchema = z
  .looseObject({})
  .openapi({ description: 'Label set represented as a key-value map.' })
  .openapi('Labels')

const FloatSampleSchema = z
  .strictObject({
    metric: LabelsSchema,
    value: z
      .array(z.xor([z.number(), z.string()]))
      .length(2)
      .openapi({
        description: 'Timestamp and float value as [unixTimestamp, stringValue].',
        example: [1767436620, '1'],
      }),
  })
  .openapi({ required: ['metric', 'value'], description: 'A sample with a float value.' })
  .openapi('FloatSample')

const HistogramValueSchema = z
  .strictObject({
    count: z.string().openapi({ description: 'Total count of observations.' }),
    sum: z.string().openapi({ description: 'Sum of all observed values.' }),
    buckets: z
      .array(z.array(z.xor([z.number(), z.string()])))
      .exactOptional()
      .openapi({ description: 'Histogram buckets as [boundary_rule, lower, upper, count].' }),
  })
  .openapi({ required: ['count', 'sum'], description: 'Native histogram value representation.' })
  .openapi('HistogramValue')

const HistogramSampleSchema = z
  .strictObject({
    metric: LabelsSchema,
    histogram: z
      .array(z.xor([z.number(), HistogramValueSchema]))
      .length(2)
      .openapi({
        description: 'Timestamp and histogram value as [unixTimestamp, histogramObject].',
        example: [1767436620, { buckets: [], count: '60', sum: '120' }],
      }),
  })
  .openapi({
    required: ['metric', 'histogram'],
    description: 'A sample with a native histogram value.',
  })
  .openapi('HistogramSample')

const QueryStatsSchema = z
  .object({
    timings: z
      .object({
        evalTotalTime: z
          .number()
          .exactOptional()
          .openapi({ description: 'Total evaluation time in seconds.' }),
        resultSortTime: z
          .number()
          .exactOptional()
          .openapi({ description: 'Time spent sorting results in seconds.' }),
        queryPreparationTime: z
          .number()
          .exactOptional()
          .openapi({ description: 'Query preparation time in seconds.' }),
        innerEvalTime: z
          .number()
          .exactOptional()
          .openapi({ description: 'Inner evaluation time in seconds.' }),
        execQueueTime: z
          .number()
          .exactOptional()
          .openapi({ description: 'Execution queue wait time in seconds.' }),
        execTotalTime: z
          .number()
          .exactOptional()
          .openapi({ description: 'Total execution time in seconds.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    samples: z
      .object({
        totalQueryableSamples: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'Logical underlying sample consumption, including subqueries but excluding their materialized results. Overlapping windows can count the same sample repeatedly.',
          }),
        peakSamples: z
          .int()
          .exactOptional()
          .openapi({ description: 'Peak number of samples in memory.' }),
        totalQueryableSamplesPerStep: z
          .array(
            z
              .array(z.number())
              .length(2)
              .openapi({ description: 'Timestamp and sample count as [timestamp, count].' }),
          )
          .exactOptional()
          .openapi({
            description:
              'Logical underlying sample consumption per step (only included with stats=all).',
          }),
        seriesTouched: z
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
          .openapi({
            type: 'integer',
            format: 'int64',
            description:
              'Number of series consumed during execution, summed across selectors. Repeated selectors can count the same series more than once.',
          }),
        samplesRead: z
          .int()
          .exactOptional()
          .openapi({
            description:
              'Evaluator input samples, counting only new points across overlapping range-vector windows. With query-cost enabled, includes all evaluated subquery steps; otherwise only consumed windows. Not physical storage I/O.',
          }),
        samplesReadPerStep: z
          .array(
            z
              .array(z.number())
              .length(2)
              .openapi({ description: 'Timestamp and sample count as [timestamp, count].' }),
          )
          .exactOptional()
          .openapi({
            description:
              'Samples read per step (only included with stats=all when per-step stats enabled).',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'Query execution statistics (included when the stats query parameter is provided).',
    required: [],
  })
  .openapi('QueryStats')

const CostEstimateSchema = z
  .strictObject({
    seriesTouched: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Estimated series reads, summed across explicit selectors. Shared series may be counted repeatedly; implicit info() reads are omitted with a warning.',
      }),
    samplesRead: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Storage input in sample units: one per float, weighted by in-memory size for native histograms.',
      }),
  })
  .openapi({
    required: ['seriesTouched', 'samplesRead'],
    description:
      'Estimated storage input. Values may overestimate or underestimate actual cost; warnings identify incomplete estimates.',
  })
  .openapi('CostEstimate')

const ActualCostSchema = z
  .strictObject({
    seriesTouched: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Number of series the query loaded, summed per selector. Series shared between selectors may be counted more than once, so this is an upper bound.',
      }),
    samplesRead: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          "Samples read by the evaluator in the engine's sample units; the same quantity as the samplesRead query statistic.",
      }),
    peakSamples: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Highest number of samples held in memory at once. Omitted when zero.',
      }),
  })
  .openapi({
    required: ['seriesTouched', 'samplesRead'],
    description: 'Actual resource cost measured while the query executed.',
  })
  .openapi('ActualCost')

const QueryCostComparisonSchema = z
  .strictObject({ estimated: CostEstimateSchema, actual: ActualCostSchema })
  .openapi({
    required: ['estimated', 'actual'],
    description:
      'Estimated storage input paired with the actual cost measured during execution. The estimated cost has no peakSamples; the actual cost includes it. Requires the query-cost feature flag (--enable-feature=query-cost).',
  })
  .openapi('QueryCostComparison')

const FloatSeriesSchema = z
  .strictObject({
    metric: LabelsSchema,
    values: z
      .array(z.array(z.xor([z.number(), z.string()])).length(2))
      .openapi({ description: 'Array of [timestamp, stringValue] pairs for float values.' }),
  })
  .openapi({ required: ['metric', 'values'], description: 'A time series with float values.' })
  .openapi('FloatSeries')

const HistogramSeriesSchema = z
  .strictObject({
    metric: LabelsSchema,
    histograms: z
      .array(z.array(z.xor([z.number(), HistogramValueSchema])).length(2))
      .openapi({
        description: 'Array of [timestamp, histogramObject] pairs for histogram values.',
      }),
  })
  .openapi({
    required: ['metric', 'histograms'],
    description: 'A time series with native histogram values.',
  })
  .openapi('HistogramSeries')

type QueryDataType =
  | {
      resultType: 'vector'
      result: (z.infer<typeof FloatSampleSchema> | z.infer<typeof HistogramSampleSchema>)[]
      stats?: z.infer<typeof QueryStatsSchema>
      cost?: z.infer<typeof QueryCostComparisonSchema>
    }
  | {
      resultType: 'matrix'
      result: (z.infer<typeof FloatSeriesSchema> | z.infer<typeof HistogramSeriesSchema>)[]
      stats?: z.infer<typeof QueryStatsSchema>
      cost?: z.infer<typeof QueryCostComparisonSchema>
    }
  | {
      resultType: 'scalar'
      result: (number | string)[]
      stats?: z.infer<typeof QueryStatsSchema>
      cost?: z.infer<typeof QueryCostComparisonSchema>
    }
  | {
      resultType: 'string'
      result: string[]
      stats?: z.infer<typeof QueryStatsSchema>
      cost?: z.infer<typeof QueryCostComparisonSchema>
    }

const QueryDataSchema: z.ZodType<QueryDataType> = z
  .union([
    z
      .strictObject({
        resultType: z.literal('vector'),
        result: z
          .array(z.union([FloatSampleSchema, HistogramSampleSchema]))
          .openapi({ description: 'Array of samples (either float or histogram).' }),
        stats: QueryStatsSchema.exactOptional(),
        cost: QueryCostComparisonSchema.exactOptional(),
      })
      .openapi({ required: ['resultType', 'result'] }),
    z
      .strictObject({
        resultType: z.literal('matrix'),
        result: z
          .array(z.union([FloatSeriesSchema, HistogramSeriesSchema]))
          .openapi({ description: 'Array of time series (either float or histogram).' }),
        stats: QueryStatsSchema.exactOptional(),
        cost: QueryCostComparisonSchema.exactOptional(),
      })
      .openapi({ required: ['resultType', 'result'] }),
    z
      .strictObject({
        resultType: z.literal('scalar'),
        result: z
          .array(z.xor([z.number(), z.string()]))
          .length(2)
          .openapi({ description: 'Scalar value as [timestamp, stringValue].' }),
        stats: QueryStatsSchema.exactOptional(),
        cost: QueryCostComparisonSchema.exactOptional(),
      })
      .openapi({ required: ['resultType', 'result'] }),
    z
      .strictObject({
        resultType: z.literal('string'),
        result: z
          .array(z.string())
          .length(2)
          .openapi({ description: 'String value as [timestamp, stringValue].' }),
        stats: QueryStatsSchema.exactOptional(),
        cost: QueryCostComparisonSchema.exactOptional(),
      })
      .openapi({ required: ['resultType', 'result'] }),
  ])
  .openapi({
    description: "Query result data. The structure of 'result' depends on 'resultType'.",
    example: {
      result: [{ metric: { __name__: 'up', job: 'prometheus' }, value: [1627845600, '1'] }],
      resultType: 'vector',
    },
  })
  .openapi('QueryData')

type QueryOutputBodyType = {
  status: 'success' | 'error'
  data: z.infer<typeof QueryDataSchema>
  warnings?: string[]
  infos?: string[]
}

type QueryRangeOutputBodyType = {
  status: 'success' | 'error'
  data: z.infer<typeof QueryDataSchema>
  warnings?: string[]
  infos?: string[]
}

const ErrorSchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    errorType: z
      .string()
      .openapi({ description: 'Type of error that occurred.', example: 'bad_data' }),
    error: z
      .string()
      .openapi({ description: 'Human-readable error message.', example: 'invalid parameter' }),
  })
  .openapi({ required: ['status', 'errorType', 'error'], description: 'Error response.' })
  .openapi('Error')

const QueryOutputBodySchema: z.ZodType<QueryOutputBodyType> = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: QueryDataSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Response body for instant query.' })
  .openapi('QueryOutputBody')

const QueryRangeOutputBodySchema: z.ZodType<QueryRangeOutputBodyType> = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: QueryDataSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Response body for range query.' })
  .openapi('QueryRangeOutputBody')

const QueryPostInputBodySchema = z
  .strictObject({
    query: z
      .string()
      .openapi({ description: 'Form field: The PromQL query to execute.', example: 'up' }),
    time: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The evaluation timestamp (optional, defaults to current time).',
        example: '2023-07-21T20:10:51.781Z',
      }),
    limit: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Form field: The maximum number of metrics to return.',
        example: 100,
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
        example: '30s',
      }),
    lookback_delta: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: Override the lookback period for this query (optional).',
        example: '5m',
      }),
    stats: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Form field: When provided, include query statistics in the response (the special value 'all' enables more comprehensive statistics).",
        example: 'all',
      }),
    cost: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Form field: When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).',
      }),
    max_series: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
        example: 1000,
      }),
    max_samples_read: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
        example: 100000,
      }),
    max_query_duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
        example: '30s',
      }),
  })
  .openapi({ required: ['query'], description: 'POST request body for instant query.' })
  .openapi('QueryPostInputBody')

const QueryRangePostInputBodySchema = z
  .strictObject({
    query: z
      .string()
      .openapi({
        description: 'Form field: The query to execute.',
        example: 'rate(http_requests_total[5m])',
      }),
    start: z
      .string()
      .openapi({
        description: 'Form field: The start time of the query.',
        example: '2023-07-21T20:10:30.781Z',
      }),
    end: z
      .string()
      .openapi({
        description: 'Form field: The end time of the query.',
        example: '2023-07-21T20:20:30.781Z',
      }),
    step: z
      .string()
      .openapi({ description: 'Form field: The step size of the query.', example: '15s' }),
    limit: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Form field: The maximum number of metrics to return.',
        example: 100,
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
        example: '30s',
      }),
    lookback_delta: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: Override the lookback period for this query (optional).',
        example: '5m',
      }),
    stats: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Form field: When provided, include query statistics in the response (the special value 'all' enables more comprehensive statistics).",
        example: 'all',
      }),
    cost: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Form field: When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).',
      }),
    max_series: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
        example: 1000,
      }),
    max_samples_read: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
        example: 100000,
      }),
    max_query_duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
        example: '30s',
      }),
  })
  .openapi({
    required: ['query', 'start', 'end', 'step'],
    description: 'POST request body for range query.',
  })
  .openapi('QueryRangePostInputBody')

const QueryExemplarsOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z
      .any()
      .openapi({
        description: 'Response data (structure varies by endpoint).',
        example: { result: 'ok' },
      }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Generic response body.' })
  .openapi('QueryExemplarsOutputBody')

const QueryExemplarsPostInputBodySchema = z
  .strictObject({
    query: z
      .string()
      .openapi({
        description: 'Form field: The query to execute.',
        example: 'http_requests_total',
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The start time of the query.',
        example: '2023-07-21T20:00:00.000Z',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The end time of the query.',
        example: '2023-07-21T21:00:00.000Z',
      }),
  })
  .openapi({ required: ['query'], description: 'POST request body for exemplars query.' })
  .openapi('QueryExemplarsPostInputBody')

const FormatQueryOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z
      .string()
      .openapi({
        description: 'Formatted query string.',
        example: 'sum by(status) (rate(http_requests_total[5m]))',
      }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for format query endpoint.',
  })
  .openapi('FormatQueryOutputBody')

const FormatQueryPostInputBodySchema = z
  .strictObject({
    query: z
      .string()
      .openapi({
        description: 'Form field: The query to format.',
        example: 'sum(rate(http_requests_total[5m])) by (status)',
      }),
  })
  .openapi({ required: ['query'], description: 'POST request body for format query.' })
  .openapi('FormatQueryPostInputBody')

const ParseQueryOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z
      .any()
      .openapi({
        description: 'Response data (structure varies by endpoint).',
        example: { result: 'ok' },
      }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Generic response body.' })
  .openapi('ParseQueryOutputBody')

const ParseQueryPostInputBodySchema = z
  .strictObject({
    query: z
      .string()
      .openapi({
        description: 'Form field: The query to parse.',
        example: 'sum(rate(http_requests_total[5m]))',
      }),
  })
  .openapi({ required: ['query'], description: 'POST request body for parse query.' })
  .openapi('ParseQueryPostInputBody')

const QueryCostDataSchema = z
  .strictObject({ estimate: CostEstimateSchema })
  .openapi({
    required: ['estimate'],
    description: 'Estimated cost of a query computed without executing it.',
  })
  .openapi('QueryCostData')

const QueryCostOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: QueryCostDataSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for query cost estimation.',
  })
  .openapi('QueryCostOutputBody')

const QueryCostPostInputBodySchema = z
  .strictObject({
    query: z
      .string()
      .openapi({ description: 'Form field: The PromQL query to estimate.', example: 'up' }),
    time: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The evaluation timestamp (optional, defaults to current time).',
        example: '2023-07-21T20:10:51.781Z',
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
        example: '30s',
      }),
    lookback_delta: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: Override the lookback period for this query (optional).',
        example: '5m',
      }),
    limit: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.',
        example: 100,
      }),
    stats: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form field: Validated identically to /api/v1/query but ignored, as no query statistics are returned.',
        example: 'all',
      }),
    cost: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Form field: Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.',
      }),
    max_series: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
        example: 1000,
      }),
    max_samples_read: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
        example: 100000,
      }),
    max_query_duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
        example: '30s',
      }),
  })
  .openapi({
    required: ['query'],
    description: 'POST request body for instant query cost estimation.',
  })
  .openapi('QueryCostPostInputBody')

const QueryRangeCostPostInputBodySchema = z
  .strictObject({
    query: z
      .string()
      .openapi({
        description: 'Form field: The PromQL query to estimate.',
        example: 'rate(http_requests_total[5m])',
      }),
    start: z
      .string()
      .openapi({
        description: 'Form field: The start time of the query.',
        example: '2023-07-21T20:10:30.781Z',
      }),
    end: z
      .string()
      .openapi({
        description: 'Form field: The end time of the query.',
        example: '2023-07-21T20:20:30.781Z',
      }),
    step: z
      .string()
      .openapi({ description: 'Form field: The step size of the query.', example: '15s' }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
        example: '30s',
      }),
    lookback_delta: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: Override the lookback period for this query (optional).',
        example: '5m',
      }),
    limit: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.',
        example: 100,
      }),
    stats: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form field: Validated identically to /api/v1/query but ignored, as no query statistics are returned.',
        example: 'all',
      }),
    cost: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Form field: Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.',
      }),
    max_series: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
        example: 1000,
      }),
    max_samples_read: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
        example: 100000,
      }),
    max_query_duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
        example: '30s',
      }),
  })
  .openapi({
    required: ['query', 'start', 'end', 'step'],
    description: 'POST request body for range query cost estimation.',
  })
  .openapi('QueryRangeCostPostInputBody')

const LabelsOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z.array(z.string()).openapi({ example: ['__name__', 'job', 'instance'] }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Response body with an array of strings.' })
  .openapi('LabelsOutputBody')

const LabelsPostInputBodySchema = z
  .strictObject({
    start: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The start time of the query.',
        example: '2023-07-21T20:00:00.000Z',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The end time of the query.',
        example: '2023-07-21T21:00:00.000Z',
      }),
    'match[]': z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Form field: Series selector argument that selects the series from which to read the label names.',
        example: ['{job="prometheus"}'],
      }),
    limit: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Form field: The maximum number of label names to return.',
        example: 100,
      }),
  })
  .openapi({ description: 'POST request body for labels query.', required: [] })
  .openapi('LabelsPostInputBody')

const LabelValuesOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z.array(z.string()).openapi({ example: ['__name__', 'job', 'instance'] }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Response body with an array of strings.' })
  .openapi('LabelValuesOutputBody')

const SearchMetricNamesPostInputBodySchema = z
  .strictObject({
    'match[]': z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Form field: Series selector argument used to scope metric discovery.',
        example: ['{job="prometheus"}'],
      }),
    'search[]': z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Form field: One or more search terms matched against metric names (OR logic).',
        example: ['http_req'],
      }),
    fuzz_threshold: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.',
        example: 80,
      }),
    fuzz_alg: z
      .enum(['subsequence', 'jarowinkler'])
      .exactOptional()
      .openapi({
        description:
          'Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.',
        example: 'subsequence',
      }),
    case_sensitive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Form field: Whether matching is case-sensitive.' }),
    sort_by: z
      .enum(['alpha', 'score'])
      .exactOptional()
      .openapi({
        description:
          'Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.',
        example: 'alpha',
      }),
    sort_dir: z
      .enum(['asc', 'dsc'])
      .exactOptional()
      .openapi({
        description:
          'Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.',
        example: 'asc',
      }),
    include_score: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Form field: Include the relevance score in each result record.' }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The start time of the query.',
        example: '2026-01-02T12:37:00.000Z',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The end time of the query.',
        example: '2026-01-02T13:37:00.000Z',
      }),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .default(100n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        default: 100,
        description: 'Form field: The maximum number of results to return.',
        example: 20,
      }),
    batch_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .default(100n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        default: 100,
        description:
          'Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.',
        example: 20,
      }),
    include_metadata: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Form field: Include metric metadata in each result.' }),
  })
  .openapi({ description: 'POST request body for metric name search.', required: [] })
  .openapi('SearchMetricNamesPostInputBody')

const SearchLabelNamesPostInputBodySchema = z
  .strictObject({
    'match[]': z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Form field: Series selector argument used to scope label discovery.',
        example: ['{__name__="up"}'],
      }),
    'search[]': z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Form field: One or more search terms matched against label names (OR logic).',
        example: ['inst'],
      }),
    fuzz_threshold: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.',
        example: 80,
      }),
    fuzz_alg: z
      .enum(['subsequence', 'jarowinkler'])
      .exactOptional()
      .openapi({
        description:
          'Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.',
        example: 'subsequence',
      }),
    case_sensitive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Form field: Whether matching is case-sensitive.' }),
    sort_by: z
      .enum(['alpha', 'score'])
      .exactOptional()
      .openapi({
        description:
          'Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.',
        example: 'alpha',
      }),
    sort_dir: z
      .enum(['asc', 'dsc'])
      .exactOptional()
      .openapi({
        description:
          'Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.',
        example: 'asc',
      }),
    include_score: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Form field: Include the relevance score in each result record.' }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The start time of the query.',
        example: '2026-01-02T12:37:00.000Z',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The end time of the query.',
        example: '2026-01-02T13:37:00.000Z',
      }),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .default(100n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        default: 100,
        description: 'Form field: The maximum number of results to return.',
        example: 20,
      }),
    batch_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .default(100n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        default: 100,
        description:
          'Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.',
        example: 20,
      }),
  })
  .openapi({ description: 'POST request body for label name search.', required: [] })
  .openapi('SearchLabelNamesPostInputBody')

const SearchLabelValuesPostInputBodySchema = z
  .strictObject({
    label: z
      .string()
      .openapi({
        description: 'Form field: Label name whose values should be searched.',
        example: 'instance',
      }),
    'match[]': z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Form field: Series selector argument used to scope label value discovery.',
        example: ['up'],
      }),
    'search[]': z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Form field: One or more search terms matched against label values (OR logic).',
        example: ['909'],
      }),
    fuzz_threshold: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.',
        example: 80,
      }),
    fuzz_alg: z
      .enum(['subsequence', 'jarowinkler'])
      .exactOptional()
      .openapi({
        description:
          'Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.',
        example: 'subsequence',
      }),
    case_sensitive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Form field: Whether matching is case-sensitive.' }),
    sort_by: z
      .enum(['alpha', 'score'])
      .exactOptional()
      .openapi({
        description:
          'Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.',
        example: 'alpha',
      }),
    sort_dir: z
      .enum(['asc', 'dsc'])
      .exactOptional()
      .openapi({
        description:
          'Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.',
        example: 'asc',
      }),
    include_score: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Form field: Include the relevance score in each result record.' }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The start time of the query.',
        example: '2026-01-02T12:37:00.000Z',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The end time of the query.',
        example: '2026-01-02T13:37:00.000Z',
      }),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .default(100n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        default: 100,
        description: 'Form field: The maximum number of results to return.',
        example: 20,
      }),
    batch_size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .default(100n)
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        default: 100,
        description:
          'Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.',
        example: 20,
      }),
  })
  .openapi({ required: ['label'], description: 'POST request body for label value search.' })
  .openapi('SearchLabelValuesPostInputBody')

const SeriesOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z
      .array(LabelsSchema)
      .openapi({ example: [{ __name__: 'up', instance: 'localhost:9090', job: 'prometheus' }] }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body with an array of label sets.',
  })
  .openapi('SeriesOutputBody')

const SeriesPostInputBodySchema = z
  .strictObject({
    start: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The start time of the query.',
        example: '2023-07-21T20:00:00.000Z',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Form field: The end time of the query.',
        example: '2023-07-21T21:00:00.000Z',
      }),
    'match[]': z
      .array(z.string())
      .openapi({
        description: 'Form field: Series selector argument that selects the series to return.',
        example: ['{job="prometheus"}'],
      }),
    limit: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Form field: The maximum number of series to return.',
        example: 100,
      }),
  })
  .openapi({ required: ['match[]'], description: 'POST request body for series query.' })
  .openapi('SeriesPostInputBody')

const MetadataSchema = z
  .strictObject({
    type: z
      .string()
      .openapi({ description: 'Metric type (counter, gauge, histogram, summary, or untyped).' }),
    unit: z.string().openapi({ description: 'Unit of the metric.' }),
    help: z.string().openapi({ description: 'Help text describing the metric.' }),
  })
  .openapi({ required: ['type', 'unit', 'help'], description: 'Metric metadata.' })
  .openapi('Metadata')

const MetadataOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z.record(z.string(), z.array(MetadataSchema)),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Response body for metadata endpoint.' })
  .openapi('MetadataOutputBody')

const MetricMetadataSchema = z
  .strictObject({
    target: LabelsSchema,
    metric: z.string().exactOptional().openapi({ description: 'Metric name.' }),
    type: z
      .string()
      .openapi({ description: 'Metric type (counter, gauge, histogram, summary, or untyped).' }),
    help: z.string().openapi({ description: 'Help text describing the metric.' }),
    unit: z.string().openapi({ description: 'Unit of the metric.' }),
  })
  .openapi({ required: ['target', 'type', 'help', 'unit'], description: 'Target metric metadata.' })
  .openapi('MetricMetadata')

const TargetSchema = z
  .strictObject({
    discoveredLabels: LabelsSchema,
    labels: LabelsSchema,
    scrapePool: z.string().openapi({ description: 'Name of the scrape pool.' }),
    scrapeUrl: z.string().openapi({ description: 'URL of the target.' }),
    globalUrl: z.string().openapi({ description: 'Global URL of the target.' }),
    lastError: z.string().openapi({ description: 'Last error message from scraping.' }),
    lastScrape: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of the last scrape.' }),
    lastScrapeDuration: z
      .float64()
      .openapi({ description: 'Duration of the last scrape in seconds.' }),
    health: z
      .string()
      .openapi({ description: 'Health status of the target (up, down, or unknown).' }),
    scrapeInterval: z.string().openapi({ description: 'Scrape interval for this target.' }),
    scrapeTimeout: z.string().openapi({ description: 'Scrape timeout for this target.' }),
  })
  .openapi({
    required: [
      'discoveredLabels',
      'labels',
      'scrapePool',
      'scrapeUrl',
      'globalUrl',
      'lastError',
      'lastScrape',
      'lastScrapeDuration',
      'health',
      'scrapeInterval',
      'scrapeTimeout',
    ],
    description: 'Scrape target information.',
  })
  .openapi('Target')

const DroppedTargetSchema = z
  .strictObject({
    discoveredLabels: LabelsSchema,
    scrapePool: z.string().openapi({ description: 'Name of the scrape pool.' }),
  })
  .openapi({
    required: ['discoveredLabels', 'scrapePool'],
    description: 'Dropped target information.',
  })
  .openapi('DroppedTarget')

const TargetDiscoverySchema = z
  .strictObject({
    activeTargets: z.array(TargetSchema),
    droppedTargets: z.array(DroppedTargetSchema),
    droppedTargetCounts: z.record(
      z.string(),
      z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({ type: 'integer', format: 'int64' }),
    ),
  })
  .openapi({
    required: ['activeTargets', 'droppedTargets', 'droppedTargetCounts'],
    description: 'Target discovery information including active and dropped targets.',
  })
  .openapi('TargetDiscovery')

const TargetsOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: TargetDiscoverySchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Response body for targets endpoint.' })
  .openapi('TargetsOutputBody')

const TargetMetadataOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z
      .array(MetricMetadataSchema)
      .openapi({
        example: [
          {
            help: 'The current health status of the target',
            metric: 'up',
            target: { instance: 'localhost:9090', job: 'prometheus' },
            type: 'gauge',
            unit: '',
          },
        ],
      }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body with an array of metric metadata.',
  })
  .openapi('TargetMetadataOutputBody')

const ScrapePoolsDiscoverySchema = z
  .strictObject({ scrapePools: z.array(z.string()) })
  .openapi({ required: ['scrapePools'], description: 'List of all configured scrape pools.' })
  .openapi('ScrapePoolsDiscovery')

const ScrapePoolsOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: ScrapePoolsDiscoverySchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for scrape pools endpoint.',
  })
  .openapi('ScrapePoolsOutputBody')

const ScrapePoolConfigDataSchema = z
  .strictObject({
    yaml: z
      .string()
      .openapi({ description: 'Effective scrape pool configuration in YAML format.' }),
  })
  .openapi({ required: ['yaml'], description: 'Effective configuration for a scrape pool.' })
  .openapi('ScrapePoolConfigData')

const ScrapePoolConfigOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: ScrapePoolConfigDataSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for scrape pool config endpoint.',
  })
  .openapi('ScrapePoolConfigOutputBody')

const ConfigSchema = z
  .strictObject({
    source_labels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Source labels for relabeling.' }),
    separator: z
      .string()
      .exactOptional()
      .openapi({ description: 'Separator for source label values.' }),
    regex: z.string().exactOptional().openapi({ description: 'Regular expression for matching.' }),
    modulus: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Modulus for hash-based relabeling.',
      }),
    target_label: z.string().exactOptional().openapi({ description: 'Target label name.' }),
    replacement: z.string().exactOptional().openapi({ description: 'Replacement value.' }),
    action: z.string().exactOptional().openapi({ description: 'Relabel action.' }),
  })
  .openapi({ description: 'Relabel configuration.', required: [] })
  .openapi('Config')

const RelabelStepSchema = z
  .strictObject({ rule: ConfigSchema, output: LabelsSchema, keep: z.boolean() })
  .openapi({
    required: ['rule', 'output', 'keep'],
    description: 'Relabel step showing the rule, output, and whether the target was kept.',
  })
  .openapi('RelabelStep')

const RelabelStepsResponseSchema = z
  .strictObject({ steps: z.array(RelabelStepSchema) })
  .openapi({ required: ['steps'], description: 'Relabeling steps response.' })
  .openapi('RelabelStepsResponse')

const TargetRelabelStepsOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: RelabelStepsResponseSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for target relabel steps endpoint.',
  })
  .openapi('TargetRelabelStepsOutputBody')

const RuleGroupSchema = z
  .strictObject({
    name: z.string().openapi({ description: 'Name of the rule group.' }),
    file: z.string().openapi({ description: 'File containing the rule group.' }),
    rules: z
      .array(z.looseObject({}).openapi({ description: 'Rule definition.' }))
      .openapi({ description: 'Rules in this group.' }),
    interval: z.float64().openapi({ description: 'Evaluation interval in seconds.' }),
    limit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Maximum number of alerts for this group.',
      }),
    evaluationTime: z
      .float64()
      .openapi({ description: 'Time taken to evaluate the group in seconds.' }),
    lastEvaluation: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Timestamp of the last evaluation.' }),
  })
  .openapi({
    required: ['name', 'file', 'rules', 'interval', 'limit', 'evaluationTime', 'lastEvaluation'],
    description: 'Rule group information.',
  })
  .openapi('RuleGroup')

const RuleDiscoverySchema = z
  .strictObject({
    groups: z.array(RuleGroupSchema),
    groupNextToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token for the next page of groups.' }),
  })
  .openapi({
    required: ['groups'],
    description: 'Rule discovery information containing all rule groups.',
  })
  .openapi('RuleDiscovery')

const RulesOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: RuleDiscoverySchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Response body for rules endpoint.' })
  .openapi('RulesOutputBody')

const AlertSchema = z
  .strictObject({
    labels: LabelsSchema,
    annotations: LabelsSchema,
    state: z
      .string()
      .openapi({ description: 'State of the alert (pending, firing, or inactive).' }),
    value: z.string().openapi({ description: 'Value of the alert expression.' }),
    activeAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp when the alert became active.' }),
    keepFiringSince: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Timestamp since the alert has been kept firing.' }),
  })
  .openapi({
    required: ['labels', 'annotations', 'state', 'value'],
    description: 'Alert information.',
  })
  .openapi('Alert')

const AlertDiscoverySchema = z
  .strictObject({ alerts: z.array(AlertSchema) })
  .openapi({
    required: ['alerts'],
    description: 'Alert discovery information containing all active alerts.',
  })
  .openapi('AlertDiscovery')

const AlertsOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: AlertDiscoverySchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Response body for alerts endpoint.' })
  .openapi('AlertsOutputBody')

const AlertmanagerTargetSchema = z
  .strictObject({ url: z.string().openapi({ description: 'URL of the Alertmanager instance.' }) })
  .openapi({ required: ['url'], description: 'Alertmanager target information.' })
  .openapi('AlertmanagerTarget')

const AlertmanagerDiscoverySchema = z
  .strictObject({
    activeAlertmanagers: z.array(AlertmanagerTargetSchema),
    droppedAlertmanagers: z.array(AlertmanagerTargetSchema),
  })
  .openapi({
    required: ['activeAlertmanagers', 'droppedAlertmanagers'],
    description: 'Alertmanager discovery information including active and dropped instances.',
  })
  .openapi('AlertmanagerDiscovery')

const AlertmanagersOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: AlertmanagerDiscoverySchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for alertmanagers endpoint.',
  })
  .openapi('AlertmanagersOutputBody')

const StatusConfigDataSchema = z
  .strictObject({
    yaml: z.string().openapi({ description: 'Prometheus configuration in YAML format.' }),
  })
  .openapi({ required: ['yaml'], description: 'Prometheus configuration.' })
  .openapi('StatusConfigData')

const StatusConfigOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: StatusConfigDataSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for status config endpoint.',
  })
  .openapi('StatusConfigOutputBody')

const RuntimeInfoSchema = z
  .strictObject({
    startTime: z.iso.datetime({ offset: true }),
    CWD: z.string(),
    hostname: z.string(),
    serverTime: z.iso.datetime({ offset: true }),
    reloadConfigSuccess: z.boolean(),
    lastConfigTime: z.iso.datetime({ offset: true }),
    corruptionCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    goroutineCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    GOMAXPROCS: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    GOMEMLIMIT: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    GOGC: z.string(),
    GODEBUG: z.string(),
    storageRetention: z.string(),
  })
  .openapi({
    required: [
      'startTime',
      'CWD',
      'hostname',
      'serverTime',
      'reloadConfigSuccess',
      'lastConfigTime',
      'corruptionCount',
      'goroutineCount',
      'GOMAXPROCS',
      'GOMEMLIMIT',
      'GOGC',
      'GODEBUG',
      'storageRetention',
    ],
    description: 'Prometheus runtime information.',
  })
  .openapi('RuntimeInfo')

const StatusRuntimeInfoOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: RuntimeInfoSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for status runtime info endpoint.',
  })
  .openapi('StatusRuntimeInfoOutputBody')

const PrometheusVersionSchema = z
  .strictObject({
    version: z.string(),
    revision: z.string(),
    branch: z.string(),
    buildUser: z.string(),
    buildDate: z.string(),
    goVersion: z.string(),
  })
  .openapi({
    required: ['version', 'revision', 'branch', 'buildUser', 'buildDate', 'goVersion'],
    description: 'Prometheus version information.',
  })
  .openapi('PrometheusVersion')

const StatusBuildInfoOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: PrometheusVersionSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for status build info endpoint.',
  })
  .openapi('StatusBuildInfoOutputBody')

const StatusFlagsOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z.record(z.string(), z.string()),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for status flags endpoint.',
  })
  .openapi('StatusFlagsOutputBody')

const HeadStatsSchema = z
  .strictObject({
    numSeries: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    numLabelPairs: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    chunkCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    minTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    maxTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: ['numSeries', 'numLabelPairs', 'chunkCount', 'minTime', 'maxTime'],
    description: 'TSDB head statistics.',
  })
  .openapi('HeadStats')

const TSDBStatSchema = z
  .strictObject({
    name: z.string(),
    value: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['name', 'value'], description: 'TSDB statistic.' })
  .openapi('TSDBStat')

const TSDBStatusSchema = z
  .strictObject({
    headStats: HeadStatsSchema,
    seriesCountByMetricName: z.array(TSDBStatSchema),
    labelValueCountByLabelName: z.array(TSDBStatSchema),
    memoryInBytesByLabelName: z.array(TSDBStatSchema),
    seriesCountByLabelValuePair: z.array(TSDBStatSchema),
  })
  .openapi({
    required: [
      'headStats',
      'seriesCountByMetricName',
      'labelValueCountByLabelName',
      'memoryInBytesByLabelName',
      'seriesCountByLabelValuePair',
    ],
    description: 'TSDB status information.',
  })
  .openapi('TSDBStatus')

const StatusTSDBOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: TSDBStatusSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Response body for status TSDB endpoint.' })
  .openapi('StatusTSDBOutputBody')

const BlockDescSchema = z
  .strictObject({
    ulid: z.string(),
    minTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    maxTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['ulid', 'minTime', 'maxTime'], description: 'Block descriptor.' })
  .openapi('BlockDesc')

const BlockStatsSchema = z
  .strictObject({
    numSamples: z
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
    numSeries: z
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
    numChunks: z
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
    numTombstones: z
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
    numFloatSamples: z
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
    numHistogramSamples: z
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
  })
  .openapi({ description: 'Block statistics.', required: [] })
  .openapi('BlockStats')

const BlockMetaCompactionSchema = z
  .strictObject({
    level: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    sources: z.array(z.string()).exactOptional(),
    parents: z.array(BlockDescSchema).exactOptional(),
    failed: z.boolean().exactOptional(),
    deletable: z.boolean().exactOptional(),
    hints: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: ['level'], description: 'Block compaction metadata.' })
  .openapi('BlockMetaCompaction')

const BlockMetaSchema = z
  .strictObject({
    ulid: z.string(),
    minTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    maxTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    stats: BlockStatsSchema.exactOptional(),
    compaction: BlockMetaCompactionSchema,
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    required: ['ulid', 'minTime', 'maxTime', 'compaction', 'version'],
    description: 'Block metadata.',
  })
  .openapi('BlockMeta')

const StatusTSDBBlocksDataSchema = z
  .strictObject({ blocks: z.array(BlockMetaSchema) })
  .openapi({ required: ['blocks'], description: 'TSDB blocks information.' })
  .openapi('StatusTSDBBlocksData')

const StatusTSDBBlocksOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: StatusTSDBBlocksDataSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for status TSDB blocks endpoint.',
  })
  .openapi('StatusTSDBBlocksOutputBody')

const StatusWALReplayDataSchema = z
  .strictObject({
    min: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    max: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    current: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['min', 'max', 'current'], description: 'WAL replay status.' })
  .openapi('StatusWALReplayData')

const StatusWALReplayOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: StatusWALReplayDataSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body for status WAL replay endpoint.',
  })
  .openapi('StatusWALReplayOutputBody')

const StatusSelfMetricsOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z
      .any()
      .openapi({
        description: 'Response data (structure varies by endpoint).',
        example: { result: 'ok' },
      }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Generic response body.' })
  .openapi('StatusSelfMetricsOutputBody')

const DeleteSeriesOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status'], description: 'Response body containing only status.' })
  .openapi('DeleteSeriesOutputBody')

const CleanTombstonesOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status'], description: 'Response body containing only status.' })
  .openapi('CleanTombstonesOutputBody')

const DataStructSchema = z
  .strictObject({ name: z.string() })
  .openapi({ required: ['name'], description: 'Generic data structure with a name field.' })
  .openapi('DataStruct')

const SnapshotOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: DataStructSchema,
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Response body for snapshot endpoint.' })
  .openapi('SnapshotOutputBody')

const NotificationSchema = z
  .strictObject({ text: z.string(), date: z.iso.datetime({ offset: true }), active: z.boolean() })
  .openapi({ required: ['text', 'date', 'active'], description: 'Server notification.' })
  .openapi('Notification')

const NotificationsOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z
      .array(NotificationSchema)
      .openapi({
        example: [{ active: true, date: '2023-07-21T20:00:00.000Z', text: 'Server is running' }],
      }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({
    required: ['status', 'data'],
    description: 'Response body with an array of notifications.',
  })
  .openapi('NotificationsOutputBody')

const FeaturesOutputBodySchema = z
  .strictObject({
    status: z
      .enum(['success', 'error'])
      .openapi({ description: 'Response status.', example: 'success' }),
    data: z
      .any()
      .openapi({
        description: 'Response data (structure varies by endpoint).',
        example: { result: 'ok' },
      }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Only set if there were warnings while executing the request. There will still be data in the data field.',
      }),
    infos: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Only set if there were info-level annotations while executing the request.',
      }),
  })
  .openapi({ required: ['status', 'data'], description: 'Generic response body.' })
  .openapi('FeaturesOutputBody')

export const getQueryRoute = createRoute({
  method: 'get',
  path: '/query',
  tags: ['query'],
  summary: 'Evaluate an instant query',
  operationId: 'query',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of metrics to return.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100 } },
          },
        }),
      time: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'time',
            in: 'query',
            description: 'The evaluation timestamp (optional, defaults to current time).',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'The PromQL query to execute.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'up' } },
          },
        }),
      timeout: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '1m30s' }, number: { value: '90' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
      lookback_delta: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'lookback_delta',
            in: 'query',
            description: 'Override the lookback period for this query. Optional.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '5m' }, number: { value: '300' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
      stats: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'stats',
            in: 'query',
            description:
              "Include query statistics in the response. Supported values: 'true' (basic statistics) and 'all' (basic plus per-step statistics). Other non-empty values are deprecated (they behave like 'true') and will be rejected in the next major release.",
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'all' } },
          },
        }),
      cost: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'cost',
            in: 'query',
            description:
              'When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      max_series: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'max_series',
            in: 'query',
            description:
              'Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 1000 } },
          },
        }),
      max_samples_read: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'max_samples_read',
            in: 'query',
            description:
              'Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100000 } },
          },
        }),
      max_query_duration: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_query_duration',
            in: 'query',
            description:
              'Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '30s' }, number: { value: '30' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query executed successfully.',
      content: {
        'application/json': {
          schema: QueryOutputBodySchema,
          examples: {
            vectorResult: {
              summary: 'Instant vector query: up',
              value: {
                status: 'success',
                data: {
                  resultType: 'vector',
                  result: [
                    {
                      metric: {
                        __name__: 'up',
                        instance: 'demo.prometheus.io:9090',
                        job: 'prometheus',
                      },
                      value: [1767436620, '1'],
                    },
                    {
                      metric: {
                        __name__: 'up',
                        env: 'demo',
                        instance: 'demo.prometheus.io:9093',
                        job: 'alertmanager',
                      },
                      value: [1767436620, '1'],
                    },
                  ],
                },
              },
            },
            scalarResult: {
              summary: 'Scalar query: scalar(42)',
              value: {
                data: { result: [1767436620, '42'], resultType: 'scalar' },
                status: 'success',
              },
            },
            matrixResult: {
              summary: 'Range vector query: up[5m]',
              value: {
                status: 'success',
                data: {
                  resultType: 'matrix',
                  result: [
                    {
                      metric: {
                        __name__: 'up',
                        instance: 'demo.prometheus.io:9090',
                        job: 'prometheus',
                      },
                      values: [
                        [1767436320, '1'],
                        [1767436620, '1'],
                      ],
                    },
                  ],
                },
              },
            },
            histogramResult: {
              summary: 'Instant vector query with native histograms',
              value: {
                status: 'success',
                data: {
                  resultType: 'vector',
                  result: [
                    {
                      metric: {
                        __name__: 'http_request_duration_seconds',
                        instance: 'demo.prometheus.io:9090',
                        job: 'prometheus',
                      },
                      histogram: [
                        1767436620,
                        {
                          count: '12.5',
                          sum: '42.1',
                          buckets: [
                            [0, '0.7071067811865475', '1', '5'],
                            [0, '1', '1.414213562373095', '7.5'],
                          ],
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error executing query.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postQueryRoute = createRoute({
  method: 'post',
  path: '/query',
  tags: ['query'],
  summary: 'Evaluate an instant query',
  operationId: 'query-post',
  request: {
    body: {
      description:
        'Submit an instant query. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .strictObject({
              query: z
                .string()
                .openapi({
                  description: 'Form field: The PromQL query to execute.',
                  example: 'up',
                }),
              time: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: The evaluation timestamp (optional, defaults to current time).',
                  example: '2023-07-21T20:10:51.781Z',
                }),
              limit: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'Form field: The maximum number of metrics to return.',
                  example: 100,
                }),
              timeout: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
                  example: '30s',
                }),
              lookback_delta: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Override the lookback period for this query (optional).',
                  example: '5m',
                }),
              stats: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Form field: When provided, include query statistics in the response (the special value 'all' enables more comprehensive statistics).",
                  example: 'all',
                }),
              cost: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).',
                }),
              max_series: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
                  example: 1000,
                }),
              max_samples_read: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
                  example: 100000,
                }),
              max_query_duration: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
                  example: '30s',
                }),
            })
            .openapi({ required: ['query'], description: 'POST request body for instant query.' }),
          examples: {
            simpleQuery: { summary: 'Simple instant query', value: { query: 'up' } },
            queryWithTime: {
              summary: 'Query with specific timestamp',
              value: { query: 'up{job="prometheus"}', time: '2026-01-02T13:37:00.000Z' },
            },
            queryWithLimit: {
              summary: 'Query with limit and statistics',
              value: {
                limit: 100,
                query: 'rate(prometheus_http_requests_total{handler="/api/v1/query"}[5m])',
                stats: 'all',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Instant query executed successfully.',
      content: {
        'application/json': {
          schema: QueryOutputBodySchema,
          examples: {
            vectorResult: {
              summary: 'Instant vector query: up',
              value: {
                status: 'success',
                data: {
                  resultType: 'vector',
                  result: [
                    {
                      metric: {
                        __name__: 'up',
                        instance: 'demo.prometheus.io:9090',
                        job: 'prometheus',
                      },
                      value: [1767436620, '1'],
                    },
                    {
                      metric: {
                        __name__: 'up',
                        env: 'demo',
                        instance: 'demo.prometheus.io:9093',
                        job: 'alertmanager',
                      },
                      value: [1767436620, '1'],
                    },
                  ],
                },
              },
            },
            scalarResult: {
              summary: 'Scalar query: scalar(42)',
              value: {
                data: { result: [1767436620, '42'], resultType: 'scalar' },
                status: 'success',
              },
            },
            matrixResult: {
              summary: 'Range vector query: up[5m]',
              value: {
                status: 'success',
                data: {
                  resultType: 'matrix',
                  result: [
                    {
                      metric: {
                        __name__: 'up',
                        instance: 'demo.prometheus.io:9090',
                        job: 'prometheus',
                      },
                      values: [
                        [1767436320, '1'],
                        [1767436620, '1'],
                      ],
                    },
                  ],
                },
              },
            },
            histogramResult: {
              summary: 'Instant vector query with native histograms',
              value: {
                status: 'success',
                data: {
                  resultType: 'vector',
                  result: [
                    {
                      metric: {
                        __name__: 'http_request_duration_seconds',
                        instance: 'demo.prometheus.io:9090',
                        job: 'prometheus',
                      },
                      histogram: [
                        1767436620,
                        {
                          count: '12.5',
                          sum: '42.1',
                          buckets: [
                            [0, '0.7071067811865475', '1', '5'],
                            [0, '1', '1.414213562373095', '7.5'],
                          ],
                        },
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error executing instant query.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getQueryRangeRoute = createRoute({
  method: 'get',
  path: '/query_range',
  tags: ['query'],
  summary: 'Evaluate a range query',
  operationId: 'query-range',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of metrics to return.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100 } },
          },
        }),
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      ).openapi({
        param: {
          name: 'start',
          in: 'query',
          description: 'The start time of the query.',
          required: true,
          explode: false,
          schema: {
            oneOf: [
              { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
              { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
            ],
            description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
          },
          examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
        },
        description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
      }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      ).openapi({
        param: {
          name: 'end',
          in: 'query',
          description: 'The end time of the query.',
          required: true,
          explode: false,
          schema: {
            oneOf: [
              { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
              { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
            ],
            description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
          },
          examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
        },
        description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
      }),
      step: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      ).openapi({
        param: {
          name: 'step',
          in: 'query',
          description: 'The step size of the query.',
          required: true,
          explode: false,
          schema: {
            oneOf: [
              {
                type: 'string',
                format: 'duration',
                description:
                  'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
              },
              { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
            ],
            description: 'Duration in human-readable or numeric format.',
          },
          examples: { duration: { value: '15s' }, number: { value: '15' } },
        },
        description: 'Duration in human-readable or numeric format.',
      }),
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'The query to execute.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: {
              example: {
                value: 'rate(prometheus_http_requests_total{handler="/api/v1/query"}[5m])',
              },
            },
          },
        }),
      timeout: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '1m30s' }, number: { value: '90' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
      lookback_delta: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'lookback_delta',
            in: 'query',
            description: 'Override the lookback period for this query. Optional.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '5m' }, number: { value: '300' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
      stats: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'stats',
            in: 'query',
            description:
              "Include query statistics in the response. Supported values: 'true' (basic statistics) and 'all' (basic plus per-step statistics). Other non-empty values are deprecated (they behave like 'true') and will be rejected in the next major release.",
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'all' } },
          },
        }),
      cost: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'cost',
            in: 'query',
            description:
              'When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      max_series: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'max_series',
            in: 'query',
            description:
              'Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 1000 } },
          },
        }),
      max_samples_read: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'max_samples_read',
            in: 'query',
            description:
              'Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100000 } },
          },
        }),
      max_query_duration: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_query_duration',
            in: 'query',
            description:
              'Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '30s' }, number: { value: '30' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Range query executed successfully.',
      content: {
        'application/json': {
          schema: QueryRangeOutputBodySchema,
          examples: {
            matrixResult: {
              summary: 'Range query: rate(prometheus_http_requests_total[5m])',
              value: {
                status: 'success',
                data: {
                  resultType: 'matrix',
                  result: [
                    {
                      metric: {
                        __name__: 'up',
                        instance: 'demo.prometheus.io:9090',
                        job: 'prometheus',
                      },
                      values: [
                        [1767433020, '1'],
                        [1767434820, '1'],
                        [1767436620, '1'],
                      ],
                    },
                  ],
                },
              },
            },
            histogramResult: {
              summary: 'Range query with native histograms',
              value: {
                status: 'success',
                data: {
                  resultType: 'matrix',
                  result: [
                    {
                      metric: {
                        __name__: 'http_request_duration_seconds',
                        instance: 'demo.prometheus.io:9090',
                        job: 'prometheus',
                      },
                      histograms: [
                        [
                          1767433020,
                          {
                            count: '12.5',
                            sum: '42.1',
                            buckets: [
                              [0, '0.7071067811865475', '1', '5'],
                              [0, '1', '1.414213562373095', '7.5'],
                            ],
                          },
                        ],
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error executing range query.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postQueryRangeRoute = createRoute({
  method: 'post',
  path: '/query_range',
  tags: ['query'],
  summary: 'Evaluate a range query',
  operationId: 'query-range-post',
  request: {
    body: {
      description:
        'Submit a range query. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .strictObject({
              query: z
                .string()
                .openapi({
                  description: 'Form field: The query to execute.',
                  example: 'rate(http_requests_total[5m])',
                }),
              start: z
                .string()
                .openapi({
                  description: 'Form field: The start time of the query.',
                  example: '2023-07-21T20:10:30.781Z',
                }),
              end: z
                .string()
                .openapi({
                  description: 'Form field: The end time of the query.',
                  example: '2023-07-21T20:20:30.781Z',
                }),
              step: z
                .string()
                .openapi({
                  description: 'Form field: The step size of the query.',
                  example: '15s',
                }),
              limit: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'Form field: The maximum number of metrics to return.',
                  example: 100,
                }),
              timeout: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
                  example: '30s',
                }),
              lookback_delta: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Override the lookback period for this query (optional).',
                  example: '5m',
                }),
              stats: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "Form field: When provided, include query statistics in the response (the special value 'all' enables more comprehensive statistics).",
                  example: 'all',
                }),
              cost: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: When true, include an estimated-vs-actual cost comparison in the response. Any non-boolean value is an error. Requires the query-cost feature flag (--enable-feature=query-cost).',
                }),
              max_series: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
                  example: 1000,
                }),
              max_samples_read: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
                  example: 100000,
                }),
              max_query_duration: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
                  example: '30s',
                }),
            })
            .openapi({
              required: ['query', 'start', 'end', 'step'],
              description: 'POST request body for range query.',
            }),
          examples: {
            basicRange: {
              summary: 'Basic range query',
              value: {
                end: '2026-01-02T13:37:00.000Z',
                query: 'up',
                start: '2026-01-02T12:37:00.000Z',
                step: '15s',
              },
            },
            rateQuery: {
              summary: 'Rate calculation over time range',
              value: {
                end: '2026-01-02T13:37:00.000Z',
                query: 'rate(prometheus_http_requests_total{handler="/api/v1/query"}[5m])',
                start: '2026-01-02T12:37:00.000Z',
                step: '30s',
                timeout: '30s',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Range query executed successfully.',
      content: {
        'application/json': {
          schema: QueryRangeOutputBodySchema,
          examples: {
            matrixResult: {
              summary: 'Range query: rate(prometheus_http_requests_total[5m])',
              value: {
                status: 'success',
                data: {
                  resultType: 'matrix',
                  result: [
                    {
                      metric: {
                        __name__: 'up',
                        instance: 'demo.prometheus.io:9090',
                        job: 'prometheus',
                      },
                      values: [
                        [1767433020, '1'],
                        [1767434820, '1'],
                        [1767436620, '1'],
                      ],
                    },
                  ],
                },
              },
            },
            histogramResult: {
              summary: 'Range query with native histograms',
              value: {
                status: 'success',
                data: {
                  resultType: 'matrix',
                  result: [
                    {
                      metric: {
                        __name__: 'http_request_duration_seconds',
                        instance: 'demo.prometheus.io:9090',
                        job: 'prometheus',
                      },
                      histograms: [
                        [
                          1767433020,
                          {
                            count: '12.5',
                            sum: '42.1',
                            buckets: [
                              [0, '0.7071067811865475', '1', '5'],
                              [0, '1', '1.414213562373095', '7.5'],
                            ],
                          },
                        ],
                      ],
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error executing range query.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getQueryCostRoute = createRoute({
  method: 'get',
  path: '/query_cost',
  tags: ['query'],
  summary: 'Estimate the cost of an instant query',
  description:
    'Estimates the resource cost of an instant query without executing it. Requires the query-cost feature flag (--enable-feature=query-cost).',
  operationId: 'query-cost',
  request: {
    query: z.object({
      time: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'time',
            in: 'query',
            description: 'The evaluation timestamp (optional, defaults to current time).',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'The PromQL query to estimate.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'up' } },
          },
        }),
      timeout: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '1m30s' }, number: { value: '90' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
      lookback_delta: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'lookback_delta',
            in: 'query',
            description: 'Override the lookback period for this query. Optional.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '5m' }, number: { value: '300' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100 } },
          },
        }),
      stats: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'stats',
            in: 'query',
            description:
              'Validated identically to /api/v1/query but ignored, as no query statistics are returned.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'all' } },
          },
        }),
      cost: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'cost',
            in: 'query',
            description:
              'Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      max_series: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'max_series',
            in: 'query',
            description:
              'Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 1000 } },
          },
        }),
      max_samples_read: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'max_samples_read',
            in: 'query',
            description:
              'Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100000 } },
          },
        }),
      max_query_duration: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_query_duration',
            in: 'query',
            description:
              'Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '30s' }, number: { value: '30' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query cost estimated successfully.',
      content: {
        'application/json': {
          schema: QueryCostOutputBodySchema,
          examples: {
            estimate: {
              summary: 'Cost estimate for a query',
              value: {
                data: { estimate: { samplesRead: 5040, seriesTouched: 42 } },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error estimating query cost.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postQueryCostRoute = createRoute({
  method: 'post',
  path: '/query_cost',
  tags: ['query'],
  summary: 'Estimate the cost of an instant query',
  description:
    'Estimates the resource cost of an instant query without executing it. Requires the query-cost feature flag (--enable-feature=query-cost).',
  operationId: 'query-cost-post',
  request: {
    body: {
      description:
        'Submit an instant query for cost estimation. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .strictObject({
              query: z
                .string()
                .openapi({
                  description: 'Form field: The PromQL query to estimate.',
                  example: 'up',
                }),
              time: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: The evaluation timestamp (optional, defaults to current time).',
                  example: '2023-07-21T20:10:51.781Z',
                }),
              timeout: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
                  example: '30s',
                }),
              lookback_delta: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Override the lookback period for this query (optional).',
                  example: '5m',
                }),
              limit: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.',
                  example: 100,
                }),
              stats: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Validated identically to /api/v1/query but ignored, as no query statistics are returned.',
                  example: 'all',
                }),
              cost: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.',
                }),
              max_series: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
                  example: 1000,
                }),
              max_samples_read: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
                  example: 100000,
                }),
              max_query_duration: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
                  example: '30s',
                }),
            })
            .openapi({
              required: ['query'],
              description: 'POST request body for instant query cost estimation.',
            }),
          examples: {
            simpleQuery: {
              summary: 'Estimate the cost of an instant query',
              value: { query: 'up' },
            },
            queryWithTime: {
              summary: 'Estimate the cost at a specific timestamp',
              value: {
                query: 'rate(prometheus_http_requests_total[5m])',
                time: '2026-01-02T13:37:00.000Z',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Query cost estimated successfully.',
      content: {
        'application/json': {
          schema: QueryCostOutputBodySchema,
          examples: {
            estimate: {
              summary: 'Cost estimate for a query',
              value: {
                data: { estimate: { samplesRead: 5040, seriesTouched: 42 } },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error estimating query cost.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getQueryRangeCostRoute = createRoute({
  method: 'get',
  path: '/query_range_cost',
  tags: ['query'],
  summary: 'Estimate the cost of a range query',
  description:
    'Estimates the resource cost of a range query without executing it. Requires the query-cost feature flag (--enable-feature=query-cost).',
  operationId: 'query-range-cost',
  request: {
    query: z.object({
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      ).openapi({
        param: {
          name: 'start',
          in: 'query',
          description: 'The start time of the query.',
          required: true,
          explode: false,
          schema: {
            oneOf: [
              { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
              { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
            ],
            description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
          },
          examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
        },
        description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
      }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      ).openapi({
        param: {
          name: 'end',
          in: 'query',
          description: 'The end time of the query.',
          required: true,
          explode: false,
          schema: {
            oneOf: [
              { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
              { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
            ],
            description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
          },
          examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
        },
        description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
      }),
      step: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      ).openapi({
        param: {
          name: 'step',
          in: 'query',
          description: 'The step size of the query.',
          required: true,
          explode: false,
          schema: {
            oneOf: [
              {
                type: 'string',
                format: 'duration',
                description:
                  'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
              },
              { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
            ],
            description: 'Duration in human-readable or numeric format.',
          },
          examples: { duration: { value: '15s' }, number: { value: '15' } },
        },
        description: 'Duration in human-readable or numeric format.',
      }),
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'The PromQL query to estimate.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: {
              example: {
                value: 'rate(prometheus_http_requests_total{handler="/api/v1/query"}[5m])',
              },
            },
          },
        }),
      timeout: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '1m30s' }, number: { value: '90' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
      lookback_delta: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'lookback_delta',
            in: 'query',
            description: 'Override the lookback period for this query. Optional.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '5m' }, number: { value: '300' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100 } },
          },
        }),
      stats: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'stats',
            in: 'query',
            description:
              'Validated identically to /api/v1/query but ignored, as no query statistics are returned.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'all' } },
          },
        }),
      cost: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'cost',
            in: 'query',
            description:
              'Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      max_series: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'max_series',
            in: 'query',
            description:
              'Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 1000 } },
          },
        }),
      max_samples_read: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'max_samples_read',
            in: 'query',
            description:
              'Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100000 } },
          },
        }),
      max_query_duration: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso
            .duration()
            .openapi({
              description:
                'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
            }),
          z.float32().openapi({ description: 'Fractional number of seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'max_query_duration',
            in: 'query',
            description:
              'Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                {
                  type: 'string',
                  format: 'duration',
                  description:
                    'Human-readable form such as 15s or 2m30s. Supported units are ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks) and y (years).',
                },
                { type: 'number', format: 'float', description: 'Fractional number of seconds.' },
              ],
              description: 'Duration in human-readable or numeric format.',
            },
            examples: { duration: { value: '30s' }, number: { value: '30' } },
          },
          description: 'Duration in human-readable or numeric format.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Range query cost estimated successfully.',
      content: {
        'application/json': {
          schema: QueryCostOutputBodySchema,
          examples: {
            estimate: {
              summary: 'Cost estimate for a query',
              value: {
                data: { estimate: { samplesRead: 5040, seriesTouched: 42 } },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error estimating range query cost.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postQueryRangeCostRoute = createRoute({
  method: 'post',
  path: '/query_range_cost',
  tags: ['query'],
  summary: 'Estimate the cost of a range query',
  description:
    'Estimates the resource cost of a range query without executing it. Requires the query-cost feature flag (--enable-feature=query-cost).',
  operationId: 'query-range-cost-post',
  request: {
    body: {
      description:
        'Submit a range query for cost estimation. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .strictObject({
              query: z
                .string()
                .openapi({
                  description: 'Form field: The PromQL query to estimate.',
                  example: 'rate(http_requests_total[5m])',
                }),
              start: z
                .string()
                .openapi({
                  description: 'Form field: The start time of the query.',
                  example: '2023-07-21T20:10:30.781Z',
                }),
              end: z
                .string()
                .openapi({
                  description: 'Form field: The end time of the query.',
                  example: '2023-07-21T20:20:30.781Z',
                }),
              step: z
                .string()
                .openapi({
                  description: 'Form field: The step size of the query.',
                  example: '15s',
                }),
              timeout: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Evaluation timeout. Optional. Must be positive. Defaults to and is capped by the effective server-side maximum: global.query_max_duration when the query-cost feature is enabled and the value is set, otherwise the -query.timeout flag.',
                  example: '30s',
                }),
              lookback_delta: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Override the lookback period for this query (optional).',
                  example: '5m',
                }),
              limit: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: The maximum number of metrics to return. Validated identically to /api/v1/query but ignored, as no series are returned.',
                  example: 100,
                }),
              stats: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Validated identically to /api/v1/query but ignored, as no query statistics are returned.',
                  example: 'all',
                }),
              cost: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Validated identically to /api/v1/query but ignored, as the response is already a cost estimate. Any non-boolean value is an error.',
                }),
              max_series: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Lower the maximum number of series this query may load. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_series ceiling, never raise it: a higher value is rejected.',
                  example: 1000,
                }),
              max_samples_read: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Lower the maximum number of samples this query may read. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the query_max_samples_read ceiling, never raise it: a higher value is rejected.',
                  example: 100000,
                }),
              max_query_duration: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Lower the maximum execution duration of this query. Optional. Honored only with the query-cost feature flag (--enable-feature=query-cost). It may only lower the effective duration ceiling (query_max_duration when set, otherwise the -query.timeout flag), never raise it: a higher value is rejected.',
                  example: '30s',
                }),
            })
            .openapi({
              required: ['query', 'start', 'end', 'step'],
              description: 'POST request body for range query cost estimation.',
            }),
          examples: {
            rangeQuery: {
              summary: 'Estimate the cost of a range query',
              value: {
                end: '2026-01-02T13:37:00.000Z',
                query: 'rate(prometheus_http_requests_total[5m])',
                start: '2026-01-02T12:37:00.000Z',
                step: '30s',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Range query cost estimated successfully.',
      content: {
        'application/json': {
          schema: QueryCostOutputBodySchema,
          examples: {
            estimate: {
              summary: 'Cost estimate for a query',
              value: {
                data: { estimate: { samplesRead: 5040, seriesTouched: 42 } },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error estimating range query cost.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getQueryExemplarsRoute = createRoute({
  method: 'get',
  path: '/query_exemplars',
  tags: ['query'],
  summary: 'Query exemplars',
  operationId: 'query-exemplars',
  request: {
    query: z.object({
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start timestamp for exemplars query.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End timestamp for exemplars query.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'PromQL query to extract exemplars for.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'prometheus_http_requests_total' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Exemplars retrieved successfully.',
      content: {
        'application/json': {
          schema: QueryExemplarsOutputBodySchema,
          examples: {
            exemplarsResult: {
              summary: 'Exemplars for a metric with trace IDs',
              value: {
                data: [
                  {
                    exemplars: [
                      {
                        labels: { traceID: 'abc123def456' },
                        timestamp: 1689956451.781,
                        value: '1.5',
                      },
                    ],
                    seriesLabels: {
                      __name__: 'http_requests_total',
                      job: 'api-server',
                      method: 'GET',
                    },
                  },
                ],
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving exemplars.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postQueryExemplarsRoute = createRoute({
  method: 'post',
  path: '/query_exemplars',
  tags: ['query'],
  summary: 'Query exemplars',
  operationId: 'query-exemplars-post',
  request: {
    body: {
      description:
        'Submit an exemplars query. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: QueryExemplarsPostInputBodySchema,
          examples: {
            basicExemplar: {
              summary: 'Query exemplars for a metric',
              value: { query: 'prometheus_http_requests_total' },
            },
            exemplarWithTimeRange: {
              summary: 'Exemplars within specific time range',
              value: {
                end: '2026-01-02T13:37:00.000Z',
                query: 'prometheus_http_requests_total{job="prometheus"}',
                start: '2026-01-02T12:37:00.000Z',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Exemplars query completed successfully.',
      content: {
        'application/json': {
          schema: QueryExemplarsOutputBodySchema,
          examples: {
            exemplarsResult: {
              summary: 'Exemplars for a metric with trace IDs',
              value: {
                data: [
                  {
                    exemplars: [
                      {
                        labels: { traceID: 'abc123def456' },
                        timestamp: 1689956451.781,
                        value: '1.5',
                      },
                    ],
                    seriesLabels: {
                      __name__: 'http_requests_total',
                      job: 'api-server',
                      method: 'GET',
                    },
                  },
                ],
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error processing exemplars query.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getFormatQueryRoute = createRoute({
  method: 'get',
  path: '/format_query',
  tags: ['query'],
  summary: 'Format a PromQL query',
  operationId: 'format-query',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'PromQL expression to format.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'sum(rate(http_requests_total[5m])) by (job)' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query formatted successfully.',
      content: {
        'application/json': {
          schema: FormatQueryOutputBodySchema,
          examples: {
            formattedQuery: {
              summary: 'Formatted PromQL query',
              value: {
                data: 'sum by(job, status) (rate(http_requests_total[5m]))',
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error formatting query.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postFormatQueryRoute = createRoute({
  method: 'post',
  path: '/format_query',
  tags: ['query'],
  summary: 'Format a PromQL query',
  operationId: 'format-query-post',
  request: {
    body: {
      description:
        'Submit a PromQL query to format. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: FormatQueryPostInputBodySchema,
          examples: {
            simpleFormat: {
              summary: 'Format a simple query',
              value: { query: 'up{job="prometheus"}' },
            },
            complexFormat: {
              summary: 'Format a complex query',
              value: { query: 'sum(rate(http_requests_total[5m])) by (job, status)' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Query formatting completed successfully.',
      content: {
        'application/json': {
          schema: FormatQueryOutputBodySchema,
          examples: {
            formattedQuery: {
              summary: 'Formatted PromQL query',
              value: {
                data: 'sum by(job, status) (rate(http_requests_total[5m]))',
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error formatting query.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getParseQueryRoute = createRoute({
  method: 'get',
  path: '/parse_query',
  tags: ['query'],
  summary: 'Parse a PromQL query',
  operationId: 'parse-query',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            name: 'query',
            in: 'query',
            description: 'PromQL expression to parse.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'up{job="prometheus"}' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query parsed successfully.',
      content: {
        'application/json': {
          schema: ParseQueryOutputBodySchema,
          examples: {
            parsedQuery: {
              summary: 'Parsed PromQL expression tree',
              value: { data: { resultType: 'vector' }, status: 'success' },
            },
          },
        },
      },
    },
    default: {
      description: 'Error parsing query.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postParseQueryRoute = createRoute({
  method: 'post',
  path: '/parse_query',
  tags: ['query'],
  summary: 'Parse a PromQL query',
  operationId: 'parse-query-post',
  request: {
    body: {
      description:
        'Submit a PromQL query to parse. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: ParseQueryPostInputBodySchema,
          examples: {
            simpleParse: { summary: 'Parse a simple query', value: { query: 'up' } },
            complexParse: {
              summary: 'Parse a complex query',
              value: { query: 'rate(http_requests_total{job="api"}[5m])' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Query parsed successfully via POST.',
      content: {
        'application/json': {
          schema: ParseQueryOutputBodySchema,
          examples: {
            parsedQuery: {
              summary: 'Parsed PromQL expression tree',
              value: { data: { resultType: 'vector' }, status: 'success' },
            },
          },
        },
      },
    },
    default: {
      description: 'Error parsing query via POST.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getLabelsRoute = createRoute({
  method: 'get',
  path: '/labels',
  tags: ['labels'],
  summary: 'Get label names',
  operationId: 'labels',
  request: {
    query: z.object({
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start timestamp for label names query.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End timestamp for label names query.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      'match[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'match[]',
            in: 'query',
            description: 'Series selector argument.',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['{job="prometheus"}'] } },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of label names to return.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100 } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Label names retrieved successfully.',
      content: {
        'application/json': {
          schema: LabelsOutputBodySchema,
          examples: {
            labelNames: {
              summary: 'List of label names',
              value: {
                data: [
                  '__name__',
                  'active',
                  'address',
                  'alertmanager',
                  'alertname',
                  'alertstate',
                  'backend',
                  'branch',
                  'code',
                  'collector',
                  'component',
                  'device',
                  'env',
                  'endpoint',
                  'fstype',
                  'handler',
                  'instance',
                  'job',
                  'le',
                  'method',
                  'mode',
                  'name',
                ],
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving label names.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postLabelsRoute = createRoute({
  method: 'post',
  path: '/labels',
  tags: ['labels'],
  summary: 'Get label names',
  operationId: 'labels-post',
  request: {
    body: {
      description:
        'Submit a label names query. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .strictObject({
              start: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Form field: The start time of the query.',
                  example: '2023-07-21T20:00:00.000Z',
                }),
              end: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Form field: The end time of the query.',
                  example: '2023-07-21T21:00:00.000Z',
                }),
              'match[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Series selector argument that selects the series from which to read the label names.',
                  example: ['{job="prometheus"}'],
                }),
              limit: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'Form field: The maximum number of label names to return.',
                  example: 100,
                }),
            })
            .openapi({ description: 'POST request body for labels query.', required: [] }),
          examples: {
            allLabels: { summary: 'Get all label names', value: {} },
            labelsWithTimeRange: {
              summary: 'Get label names within time range',
              value: { end: '2026-01-02T13:37:00.000Z', start: '2026-01-02T12:37:00.000Z' },
            },
            labelsWithMatch: {
              summary: 'Get label names matching series selector',
              value: { 'match[]': ['up', 'process_start_time_seconds{job="prometheus"}'] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Label names retrieved successfully via POST.',
      content: {
        'application/json': {
          schema: LabelsOutputBodySchema,
          examples: {
            labelNames: {
              summary: 'List of label names',
              value: {
                data: [
                  '__name__',
                  'active',
                  'address',
                  'alertmanager',
                  'alertname',
                  'alertstate',
                  'backend',
                  'branch',
                  'code',
                  'collector',
                  'component',
                  'device',
                  'env',
                  'endpoint',
                  'fstype',
                  'handler',
                  'instance',
                  'job',
                  'le',
                  'method',
                  'mode',
                  'name',
                ],
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving label names via POST.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getLabelNameValuesRoute = createRoute({
  method: 'get',
  path: '/label/{name}/values',
  tags: ['labels'],
  summary: 'Get label values',
  operationId: 'label-values',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'path',
            description: 'Label name.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start timestamp for label values query.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End timestamp for label values query.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      'match[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'match[]',
            in: 'query',
            description: 'Series selector argument.',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['{job="prometheus"}'] } },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of label values to return.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 1000 } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Label values retrieved successfully.',
      content: {
        'application/json': {
          schema: LabelValuesOutputBodySchema,
          examples: {
            labelValues: {
              summary: 'List of values for a label',
              value: {
                data: [
                  'alertmanager',
                  'blackbox',
                  'caddy',
                  'cadvisor',
                  'grafana',
                  'node',
                  'prometheus',
                  'random',
                ],
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving label values.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getSearchMetricNamesRoute = createRoute({
  method: 'get',
  path: '/search/metric_names',
  tags: ['metadata'],
  summary: 'Search metric names',
  operationId: 'search-metric-names',
  request: {
    query: z.object({
      'match[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'match[]',
            in: 'query',
            description: 'Series selector argument used to scope metric discovery.',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['{job="prometheus"}'] } },
          },
        }),
      'search[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'search[]',
            in: 'query',
            description: 'One or more search terms matched against metric names (OR logic).',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['http_req'] } },
          },
        }),
      fuzz_threshold: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'fuzz_threshold',
            in: 'query',
            description:
              'Fuzzy threshold in the range 0-100. A value of 0 is the lowest fuzzy threshold.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 80 } },
          },
        }),
      fuzz_alg: z
        .enum(['subsequence', 'jarowinkler'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fuzz_alg',
            in: 'query',
            description:
              'Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.',
            required: false,
            explode: false,
            schema: {
              type: 'string',
              enum: ['subsequence', 'jarowinkler'],
              example: 'subsequence',
            },
          },
          example: 'subsequence',
        }),
      case_sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'case_sensitive',
            in: 'query',
            description: 'Whether matching is case-sensitive.',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      sort_by: z
        .enum(['alpha', 'score'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_by',
            in: 'query',
            description: 'Sort mode. Supported values are alpha and score.',
            required: false,
            explode: false,
            schema: { type: 'string', enum: ['alpha', 'score'], example: 'alpha' },
          },
          example: 'alpha',
        }),
      sort_dir: z
        .enum(['asc', 'dsc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_dir',
            in: 'query',
            description:
              'Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.',
            required: false,
            explode: false,
            schema: { type: 'string', enum: ['asc', 'dsc'], example: 'asc' },
          },
          example: 'asc',
        }),
      include_score: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_score',
            in: 'query',
            description: 'Include the relevance score in each result.',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      include_metadata: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_metadata',
            in: 'query',
            description: 'Include metric metadata in each result.',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start timestamp for metric name search.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End timestamp for metric name search.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of metric names to return.',
            required: false,
            explode: false,
            schema: { type: 'integer', minimum: 1, format: 'int64', default: 100 },
            examples: { example: { value: 20 } },
          },
        }),
      batch_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            name: 'batch_size',
            in: 'query',
            description:
              'Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.',
            required: false,
            explode: false,
            schema: { type: 'integer', minimum: 1, format: 'int64', default: 100 },
            examples: { example: { value: 20 } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Metric names streamed successfully.',
      content: {
        'application/x-ndjson': {
          schema: z.string().openapi({ description: 'NDJSON response stream.' }),
          examples: {
            metricNamesStream: {
              summary: 'NDJSON stream of metric names',
              value:
                '{"results":[{"name":"http_requests_total","type":"counter","help":"Total HTTP requests."}]}\n{"status":"success","has_more":false}\n',
            },
          },
        },
      },
    },
    default: {
      description: 'Error searching metric names.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postSearchMetricNamesRoute = createRoute({
  method: 'post',
  path: '/search/metric_names',
  tags: ['metadata'],
  summary: 'Search metric names',
  operationId: 'search-metric-names-post',
  request: {
    body: {
      description:
        'Submit a metric name search. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .strictObject({
              'match[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Series selector argument used to scope metric discovery.',
                  example: ['{job="prometheus"}'],
                }),
              'search[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: One or more search terms matched against metric names (OR logic).',
                  example: ['http_req'],
                }),
              fuzz_threshold: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.',
                  example: 80,
                }),
              fuzz_alg: z
                .enum(['subsequence', 'jarowinkler'])
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.',
                  example: 'subsequence',
                }),
              case_sensitive: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Form field: Whether matching is case-sensitive.' }),
              sort_by: z
                .enum(['alpha', 'score'])
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.',
                  example: 'alpha',
                }),
              sort_dir: z
                .enum(['asc', 'dsc'])
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.',
                  example: 'asc',
                }),
              include_score: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Form field: Include the relevance score in each result record.',
                }),
              start: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Form field: The start time of the query.',
                  example: '2026-01-02T12:37:00.000Z',
                }),
              end: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Form field: The end time of the query.',
                  example: '2026-01-02T13:37:00.000Z',
                }),
              limit: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64().min(1n))
                .default(100n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  default: 100,
                  description: 'Form field: The maximum number of results to return.',
                  example: 20,
                }),
              batch_size: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64().min(1n))
                .default(100n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  default: 100,
                  description:
                    'Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.',
                  example: 20,
                }),
              include_metadata: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Form field: Include metric metadata in each result.' }),
            })
            .openapi({ description: 'POST request body for metric name search.', required: [] }),
          examples: {
            metricAutocomplete: {
              summary: 'Search metric names for autocomplete',
              value: {
                include_metadata: true,
                limit: 20,
                'search[]': ['http_req'],
                sort_by: 'score',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Metric names streamed successfully via POST.',
      content: {
        'application/x-ndjson': {
          schema: z.string().openapi({ description: 'NDJSON response stream.' }),
          examples: {
            metricNamesStream: {
              summary: 'NDJSON stream of metric names',
              value:
                '{"results":[{"name":"http_requests_total","type":"counter","help":"Total HTTP requests."}]}\n{"status":"success","has_more":false}\n',
            },
          },
        },
      },
    },
    default: {
      description: 'Error searching metric names via POST.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getSearchLabelNamesRoute = createRoute({
  method: 'get',
  path: '/search/label_names',
  tags: ['labels'],
  summary: 'Search label names',
  operationId: 'search-label-names',
  request: {
    query: z.object({
      'match[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'match[]',
            in: 'query',
            description: 'Series selector argument used to scope label discovery.',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['{__name__="up"}'] } },
          },
        }),
      'search[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'search[]',
            in: 'query',
            description: 'One or more search terms matched against label names (OR logic).',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['inst'] } },
          },
        }),
      fuzz_threshold: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'fuzz_threshold',
            in: 'query',
            description:
              'Fuzzy threshold in the range 0-100. A value of 0 is the lowest fuzzy threshold.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 80 } },
          },
        }),
      fuzz_alg: z
        .enum(['subsequence', 'jarowinkler'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fuzz_alg',
            in: 'query',
            description:
              'Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.',
            required: false,
            explode: false,
            schema: {
              type: 'string',
              enum: ['subsequence', 'jarowinkler'],
              example: 'subsequence',
            },
          },
          example: 'subsequence',
        }),
      case_sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'case_sensitive',
            in: 'query',
            description: 'Whether matching is case-sensitive.',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      sort_by: z
        .enum(['alpha', 'score'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_by',
            in: 'query',
            description: 'Sort mode. Supported values are alpha and score.',
            required: false,
            explode: false,
            schema: { type: 'string', enum: ['alpha', 'score'], example: 'alpha' },
          },
          example: 'alpha',
        }),
      sort_dir: z
        .enum(['asc', 'dsc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_dir',
            in: 'query',
            description:
              'Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.',
            required: false,
            explode: false,
            schema: { type: 'string', enum: ['asc', 'dsc'], example: 'asc' },
          },
          example: 'asc',
        }),
      include_score: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_score',
            in: 'query',
            description: 'Include the relevance score in each result.',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start timestamp for label name search.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End timestamp for label name search.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of label names to return.',
            required: false,
            explode: false,
            schema: { type: 'integer', minimum: 1, format: 'int64', default: 100 },
            examples: { example: { value: 20 } },
          },
        }),
      batch_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            name: 'batch_size',
            in: 'query',
            description:
              'Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.',
            required: false,
            explode: false,
            schema: { type: 'integer', minimum: 1, format: 'int64', default: 100 },
            examples: { example: { value: 20 } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Label names streamed successfully.',
      content: {
        'application/x-ndjson': {
          schema: z.string().openapi({ description: 'NDJSON response stream.' }),
          examples: {
            labelNamesStream: {
              summary: 'NDJSON stream of label names',
              value:
                '{"results":[{"name":"instance"},{"name":"job"}]}\n{"status":"success","has_more":false}\n',
            },
          },
        },
      },
    },
    default: {
      description: 'Error searching label names.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postSearchLabelNamesRoute = createRoute({
  method: 'post',
  path: '/search/label_names',
  tags: ['labels'],
  summary: 'Search label names',
  operationId: 'search-label-names-post',
  request: {
    body: {
      description:
        'Submit a label name search. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .strictObject({
              'match[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Series selector argument used to scope label discovery.',
                  example: ['{__name__="up"}'],
                }),
              'search[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: One or more search terms matched against label names (OR logic).',
                  example: ['inst'],
                }),
              fuzz_threshold: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.',
                  example: 80,
                }),
              fuzz_alg: z
                .enum(['subsequence', 'jarowinkler'])
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.',
                  example: 'subsequence',
                }),
              case_sensitive: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Form field: Whether matching is case-sensitive.' }),
              sort_by: z
                .enum(['alpha', 'score'])
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.',
                  example: 'alpha',
                }),
              sort_dir: z
                .enum(['asc', 'dsc'])
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.',
                  example: 'asc',
                }),
              include_score: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Form field: Include the relevance score in each result record.',
                }),
              start: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Form field: The start time of the query.',
                  example: '2026-01-02T12:37:00.000Z',
                }),
              end: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Form field: The end time of the query.',
                  example: '2026-01-02T13:37:00.000Z',
                }),
              limit: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64().min(1n))
                .default(100n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  default: 100,
                  description: 'Form field: The maximum number of results to return.',
                  example: 20,
                }),
              batch_size: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64().min(1n))
                .default(100n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  default: 100,
                  description:
                    'Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.',
                  example: 20,
                }),
            })
            .openapi({ description: 'POST request body for label name search.', required: [] }),
          examples: {
            labelsForMetric: {
              summary: 'Search label names for a metric',
              value: {
                limit: 20,
                'match[]': ['{__name__="http_requests_total"}'],
                'search[]': ['sta'],
                sort_by: 'score',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Label names streamed successfully via POST.',
      content: {
        'application/x-ndjson': {
          schema: z.string().openapi({ description: 'NDJSON response stream.' }),
          examples: {
            labelNamesStream: {
              summary: 'NDJSON stream of label names',
              value:
                '{"results":[{"name":"instance"},{"name":"job"}]}\n{"status":"success","has_more":false}\n',
            },
          },
        },
      },
    },
    default: {
      description: 'Error searching label names via POST.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getSearchLabelValuesRoute = createRoute({
  method: 'get',
  path: '/search/label_values',
  tags: ['labels'],
  summary: 'Search label values',
  operationId: 'search-label-values',
  request: {
    query: z.object({
      label: z
        .string()
        .openapi({
          param: {
            name: 'label',
            in: 'query',
            description: 'Label name whose values should be searched.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'instance' } },
          },
        }),
      'match[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'match[]',
            in: 'query',
            description: 'Series selector argument used to scope label value discovery.',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['up'] } },
          },
        }),
      'search[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'search[]',
            in: 'query',
            description: 'One or more search terms matched against label values (OR logic).',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['909'] } },
          },
        }),
      fuzz_threshold: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'fuzz_threshold',
            in: 'query',
            description:
              'Fuzzy threshold in the range 0-100. A value of 0 is the lowest fuzzy threshold.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 80 } },
          },
        }),
      fuzz_alg: z
        .enum(['subsequence', 'jarowinkler'])
        .exactOptional()
        .openapi({
          param: {
            name: 'fuzz_alg',
            in: 'query',
            description:
              'Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.',
            required: false,
            explode: false,
            schema: {
              type: 'string',
              enum: ['subsequence', 'jarowinkler'],
              example: 'subsequence',
            },
          },
          example: 'subsequence',
        }),
      case_sensitive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'case_sensitive',
            in: 'query',
            description: 'Whether matching is case-sensitive.',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      sort_by: z
        .enum(['alpha', 'score'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_by',
            in: 'query',
            description: 'Sort mode. Supported values are alpha and score.',
            required: false,
            explode: false,
            schema: { type: 'string', enum: ['alpha', 'score'], example: 'alpha' },
          },
          example: 'alpha',
        }),
      sort_dir: z
        .enum(['asc', 'dsc'])
        .exactOptional()
        .openapi({
          param: {
            name: 'sort_dir',
            in: 'query',
            description:
              'Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.',
            required: false,
            explode: false,
            schema: { type: 'string', enum: ['asc', 'dsc'], example: 'asc' },
          },
          example: 'asc',
        }),
      include_score: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'include_score',
            in: 'query',
            description: 'Include the relevance score in each result.',
            required: false,
            explode: false,
            schema: { type: 'boolean' },
            examples: { example: { value: true } },
          },
        }),
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start timestamp for label value search.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End timestamp for label value search.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of label values to return.',
            required: false,
            explode: false,
            schema: { type: 'integer', minimum: 1, format: 'int64', default: 100 },
            examples: { example: { value: 10 } },
          },
        }),
      batch_size: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(1n))
        .default(100n)
        .exactOptional()
        .openapi({
          param: {
            name: 'batch_size',
            in: 'query',
            description:
              'Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.',
            required: false,
            explode: false,
            schema: { type: 'integer', minimum: 1, format: 'int64', default: 100 },
            examples: { example: { value: 10 } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Label values streamed successfully.',
      content: {
        'application/x-ndjson': {
          schema: z.string().openapi({ description: 'NDJSON response stream.' }),
          examples: {
            labelValuesStream: {
              summary: 'NDJSON stream of label values',
              value:
                '{"results":[{"value":"localhost:9090"},{"value":"localhost:9091"}]}\n{"status":"success","has_more":true}\n',
            },
          },
        },
      },
    },
    default: {
      description: 'Error searching label values.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postSearchLabelValuesRoute = createRoute({
  method: 'post',
  path: '/search/label_values',
  tags: ['labels'],
  summary: 'Search label values',
  operationId: 'search-label-values-post',
  request: {
    body: {
      description:
        'Submit a label value search. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .strictObject({
              label: z
                .string()
                .openapi({
                  description: 'Form field: Label name whose values should be searched.',
                  example: 'instance',
                }),
              'match[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Series selector argument used to scope label value discovery.',
                  example: ['up'],
                }),
              'search[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Form field: One or more search terms matched against label values (OR logic).',
                  example: ['909'],
                }),
              fuzz_threshold: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description:
                    'Form field: Fuzzy threshold in the range 0-100. Default is 0, the lowest fuzzy threshold.',
                  example: 80,
                }),
              fuzz_alg: z
                .enum(['subsequence', 'jarowinkler'])
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Fuzzy algorithm. Supported values are subsequence (default) and jarowinkler.',
                  example: 'subsequence',
                }),
              case_sensitive: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Form field: Whether matching is case-sensitive.' }),
              sort_by: z
                .enum(['alpha', 'score'])
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Sort mode. Supported values are alpha and score. If unset, results are returned in natural order.',
                  example: 'alpha',
                }),
              sort_dir: z
                .enum(['asc', 'dsc'])
                .exactOptional()
                .openapi({
                  description:
                    'Form field: Sort direction. Only valid with sort_by=alpha. Supported values are asc and dsc.',
                  example: 'asc',
                }),
              include_score: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Form field: Include the relevance score in each result record.',
                }),
              start: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Form field: The start time of the query.',
                  example: '2026-01-02T12:37:00.000Z',
                }),
              end: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Form field: The end time of the query.',
                  example: '2026-01-02T13:37:00.000Z',
                }),
              limit: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64().min(1n))
                .default(100n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  default: 100,
                  description: 'Form field: The maximum number of results to return.',
                  example: 20,
                }),
              batch_size: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64().min(1n))
                .default(100n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  minimum: 1,
                  default: 100,
                  description:
                    'Form field: Preferred number of results per NDJSON batch. Clamped to 1000 and the effective result limit.',
                  example: 20,
                }),
            })
            .openapi({
              required: ['label'],
              description: 'POST request body for label value search.',
            }),
          examples: {
            valuesForLabel: {
              summary: 'Search values for a label',
              value: {
                label: 'instance',
                limit: 10,
                'match[]': ['up'],
                'search[]': ['909'],
                sort_by: 'score',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Label values streamed successfully via POST.',
      content: {
        'application/x-ndjson': {
          schema: z.string().openapi({ description: 'NDJSON response stream.' }),
          examples: {
            labelValuesStream: {
              summary: 'NDJSON stream of label values',
              value:
                '{"results":[{"value":"localhost:9090"},{"value":"localhost:9091"}]}\n{"status":"success","has_more":true}\n',
            },
          },
        },
      },
    },
    default: {
      description: 'Error searching label values via POST.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getSeriesRoute = createRoute({
  method: 'get',
  path: '/series',
  tags: ['series'],
  summary: 'Find series by label matchers',
  operationId: 'series',
  request: {
    query: z.object({
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start timestamp for series query.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End timestamp for series query.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      'match[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'match[]',
            in: 'query',
            description: 'Series selector argument.',
            required: true,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['{job="prometheus"}'] } },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of series to return.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100 } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Series returned matching the provided label matchers.',
      content: {
        'application/json': {
          schema: SeriesOutputBodySchema,
          examples: {
            seriesList: {
              summary: 'List of series matching the selector',
              value: {
                data: [
                  {
                    __name__: 'up',
                    env: 'demo',
                    instance: 'demo.prometheus.io:8080',
                    job: 'cadvisor',
                  },
                  {
                    __name__: 'up',
                    env: 'demo',
                    instance: 'demo.prometheus.io:9093',
                    job: 'alertmanager',
                  },
                  { __name__: 'up', env: 'demo', instance: 'demo.prometheus.io:9100', job: 'node' },
                  { __name__: 'up', instance: 'demo.prometheus.io:3000', job: 'grafana' },
                  { __name__: 'up', instance: 'demo.prometheus.io:8996', job: 'random' },
                ],
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving series.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postSeriesRoute = createRoute({
  method: 'post',
  path: '/series',
  tags: ['series'],
  summary: 'Find series by label matchers',
  operationId: 'series-post',
  request: {
    body: {
      description:
        'Submit a series query. This endpoint accepts the same parameters as the GET version.',
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .strictObject({
              start: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Form field: The start time of the query.',
                  example: '2023-07-21T20:00:00.000Z',
                }),
              end: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Form field: The end time of the query.',
                  example: '2023-07-21T21:00:00.000Z',
                }),
              'match[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .openapi({
                  description:
                    'Form field: Series selector argument that selects the series to return.',
                  example: ['{job="prometheus"}'],
                }),
              limit: z
                .preprocess((val) => {
                  if (
                    typeof val !== 'string' ||
                    !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val)
                  )
                    return val
                  if (/^-?\d+$/.test(val)) return BigInt(val)
                  const num = Number(val)
                  return Number.isSafeInteger(num) ? BigInt(num) : val
                }, z.int64())
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  description: 'Form field: The maximum number of series to return.',
                  example: 100,
                }),
            })
            .openapi({ required: ['match[]'], description: 'POST request body for series query.' }),
          examples: {
            seriesMatch: { summary: 'Find series by label matchers', value: { 'match[]': ['up'] } },
            seriesWithTimeRange: {
              summary: 'Find series with time range',
              value: {
                end: '2026-01-02T13:37:00.000Z',
                'match[]': ['up', 'process_cpu_seconds_total{job="prometheus"}'],
                start: '2026-01-02T12:37:00.000Z',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Series returned matching the provided label matchers via POST.',
      content: {
        'application/json': {
          schema: SeriesOutputBodySchema,
          examples: {
            seriesList: {
              summary: 'List of series matching the selector',
              value: {
                data: [
                  {
                    __name__: 'up',
                    env: 'demo',
                    instance: 'demo.prometheus.io:8080',
                    job: 'cadvisor',
                  },
                  {
                    __name__: 'up',
                    env: 'demo',
                    instance: 'demo.prometheus.io:9093',
                    job: 'alertmanager',
                  },
                  { __name__: 'up', env: 'demo', instance: 'demo.prometheus.io:9100', job: 'node' },
                  { __name__: 'up', instance: 'demo.prometheus.io:3000', job: 'grafana' },
                  { __name__: 'up', instance: 'demo.prometheus.io:8996', job: 'random' },
                ],
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving series via POST.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getMetadataRoute = createRoute({
  method: 'get',
  path: '/metadata',
  tags: ['metadata'],
  summary: 'Get metadata',
  operationId: 'get-metadata',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of metrics to return.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100 } },
          },
        }),
      limit_per_metric: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit_per_metric',
            in: 'query',
            description: 'The maximum number of metadata entries per metric.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 10 } },
          },
        }),
      metric: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'metric',
            in: 'query',
            description: 'A metric name to filter metadata for.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'http_requests_total' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Metric metadata retrieved successfully.',
      content: {
        'application/json': {
          schema: MetadataOutputBodySchema,
          examples: {
            metricMetadata: {
              summary: 'Metadata for metrics',
              value: {
                data: {
                  go_gc_stack_starting_size_bytes: [
                    {
                      help: 'The stack size of new goroutines. Sourced from /gc/stack/starting-size:bytes.',
                      type: 'gauge',
                      unit: '',
                    },
                  ],
                  prometheus_rule_group_iterations_missed_total: [
                    {
                      help: 'The total number of rule group evaluations missed due to slow rule group evaluation.',
                      type: 'counter',
                      unit: '',
                    },
                  ],
                  prometheus_sd_updates_total: [
                    {
                      help: 'Total number of update events sent to the SD consumers.',
                      type: 'counter',
                      unit: '',
                    },
                  ],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving metadata.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getScrapePoolsRoute = createRoute({
  method: 'get',
  path: '/scrape_pools',
  tags: ['targets'],
  summary: 'Get scrape pools',
  operationId: 'get-scrape-pools',
  responses: {
    200: {
      description: 'Scrape pools retrieved successfully.',
      content: {
        'application/json': {
          schema: ScrapePoolsOutputBodySchema,
          examples: {
            scrapePoolsList: {
              summary: 'List of scrape pool names',
              value: {
                data: {
                  scrapePools: [
                    'alertmanager',
                    'blackbox',
                    'caddy',
                    'cadvisor',
                    'grafana',
                    'node',
                    'prometheus',
                    'random',
                  ],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving scrape pools.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getScrapePoolsConfigRoute = createRoute({
  method: 'get',
  path: '/scrape_pools/config',
  tags: ['targets'],
  summary: 'Get scrape pool configuration',
  operationId: 'get-scrape-pool-config',
  request: {
    query: z.object({
      scrapePool: z
        .string()
        .openapi({
          param: {
            name: 'scrapePool',
            in: 'query',
            description: 'Name of the scrape pool.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'prometheus' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Scrape pool configuration retrieved successfully.',
      content: {
        'application/json': {
          schema: ScrapePoolConfigOutputBodySchema,
          examples: {
            scrapePoolConfig: {
              summary: 'Effective configuration for a scrape pool',
              value: {
                data: {
                  yaml: 'job_name: prometheus\nscrape_interval: 15s\nscrape_timeout: 10s\nmetrics_path: /metrics\nscheme: http\n',
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving scrape pool configuration.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getTargetsRoute = createRoute({
  method: 'get',
  path: '/targets',
  tags: ['targets'],
  summary: 'Get targets',
  operationId: 'get-targets',
  request: {
    query: z.object({
      scrapePool: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'scrapePool',
            in: 'query',
            description: 'Filter targets by scrape pool name.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'prometheus' } },
          },
        }),
      state: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description: 'Filter by state: active, dropped, or any.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'active' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Target discovery information retrieved successfully.',
      content: {
        'application/json': {
          schema: TargetsOutputBodySchema,
          examples: {
            targetsList: {
              summary: 'Active and dropped targets',
              value: {
                data: {
                  activeTargets: [
                    {
                      discoveredLabels: {
                        __address__: 'demo.prometheus.io:9093',
                        __meta_filepath: '/etc/prometheus/file_sd/alertmanager.yml',
                        __metrics_path__: '/metrics',
                        __scheme__: 'http',
                        env: 'demo',
                        job: 'alertmanager',
                      },
                      globalUrl: 'http://demo.prometheus.io:9093/metrics',
                      health: 'up',
                      labels: {
                        env: 'demo',
                        instance: 'demo.prometheus.io:9093',
                        job: 'alertmanager',
                      },
                      lastError: '',
                      lastScrape: '2026-01-02T13:36:40.200Z',
                      lastScrapeDuration: 0.006576866,
                      scrapeInterval: '15s',
                      scrapePool: 'alertmanager',
                      scrapeTimeout: '10s',
                      scrapeUrl: 'http://demo.prometheus.io:9093/metrics',
                    },
                  ],
                  droppedTargetCounts: {
                    alertmanager: 0,
                    blackbox: 0,
                    caddy: 0,
                    cadvisor: 0,
                    grafana: 0,
                    node: 0,
                    prometheus: 0,
                    random: 0,
                  },
                  droppedTargets: [],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving targets.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getTargetsMetadataRoute = createRoute({
  method: 'get',
  path: '/targets/metadata',
  tags: ['targets'],
  summary: 'Get targets metadata',
  operationId: 'get-targets-metadata',
  request: {
    query: z.object({
      match_target: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'match_target',
            in: 'query',
            description: 'Label selector to filter targets.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: '{job="prometheus"}' } },
          },
        }),
      metric: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'metric',
            in: 'query',
            description: 'Metric name to retrieve metadata for.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'http_requests_total' } },
          },
        }),
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of targets to match.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 10 } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Target metadata retrieved successfully.',
      content: {
        'application/json': {
          schema: TargetMetadataOutputBodySchema,
          examples: {
            targetMetadata: {
              summary: 'Metadata for targets',
              value: {
                data: [
                  {
                    help: 'The current health status of the target',
                    metric: 'up',
                    target: { instance: 'localhost:9090', job: 'prometheus' },
                    type: 'gauge',
                    unit: '',
                  },
                ],
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving target metadata.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getTargetsRelabelStepsRoute = createRoute({
  method: 'get',
  path: '/targets/relabel_steps',
  tags: ['targets'],
  summary: 'Get targets relabel steps',
  operationId: 'get-targets-relabel-steps',
  request: {
    query: z.object({
      scrapePool: z
        .string()
        .openapi({
          param: {
            name: 'scrapePool',
            in: 'query',
            description: 'Name of the scrape pool.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'prometheus' } },
          },
        }),
      labels: z
        .string()
        .openapi({
          param: {
            name: 'labels',
            in: 'query',
            description: 'JSON-encoded labels to apply relabel rules to.',
            required: true,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: '{"__address__":"localhost:9090","job":"prometheus"}' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Relabel steps retrieved successfully.',
      content: {
        'application/json': {
          schema: TargetRelabelStepsOutputBodySchema,
          examples: {
            relabelSteps: {
              summary: 'Relabel steps for a target',
              value: {
                data: {
                  steps: [
                    {
                      keep: true,
                      output: {
                        __address__: 'localhost:9090',
                        instance: 'localhost:9090',
                        job: 'prometheus',
                      },
                      rule: {
                        action: 'replace',
                        regex: '(.*)',
                        replacement: '$1',
                        source_labels: ['__address__'],
                        target_label: 'instance',
                      },
                    },
                  ],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving relabel steps.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getRulesRoute = createRoute({
  method: 'get',
  path: '/rules',
  tags: ['rules'],
  summary: 'Get alerting and recording rules',
  operationId: 'rules',
  request: {
    query: z.object({
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Filter by rule type: alert or record.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'alert' } },
          },
        }),
      'rule_name[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'rule_name[]',
            in: 'query',
            description: 'Filter by rule name.',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['HighErrorRate'] } },
          },
        }),
      'rule_group[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'rule_group[]',
            in: 'query',
            description: 'Filter by rule group name.',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['example_alerts'] } },
          },
        }),
      'file[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'file[]',
            in: 'query',
            description: 'Filter by file path.',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['/etc/prometheus/rules.yml'] } },
          },
        }),
      'match[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'match[]',
            in: 'query',
            description: 'Label matchers to filter rules.',
            required: false,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['{severity="critical"}'] } },
          },
        }),
      exclude_alerts: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'exclude_alerts',
            in: 'query',
            description: 'Exclude active alerts from response.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'false' } },
          },
        }),
      group_limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'group_limit',
            in: 'query',
            description: 'Maximum number of rule groups to return.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 100 } },
          },
        }),
      group_next_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'group_next_token',
            in: 'query',
            description: 'Pagination token for next page.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'abc123' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Rules retrieved successfully.',
      content: {
        'application/json': {
          schema: RulesOutputBodySchema,
          examples: {
            ruleGroups: {
              summary: 'Alerting and recording rules',
              value: {
                data: {
                  groups: [
                    {
                      evaluationTime: 0.000561635,
                      file: '/etc/prometheus/rules/ansible_managed.yml',
                      interval: 15,
                      lastEvaluation: '2026-01-02T13:36:56.874Z',
                      limit: 0,
                      name: 'ansible managed alert rules',
                      rules: [
                        {
                          annotations: {
                            description:
                              'This is an alert meant to ensure that the entire alerting pipeline is functional. This alert is always firing, therefore it should always be firing in Alertmanager and always fire against a receiver. There are integrations with various notification mechanisms that send a notification when this alert is not firing. For example the "DeadMansSnitch" integration in PagerDuty.',
                            summary: 'Ensure entire alerting pipeline is functional',
                          },
                          duration: 600,
                          evaluationTime: 0.000356688,
                          health: 'ok',
                          keepFiringFor: 0,
                          labels: { severity: 'warning' },
                          lastEvaluation: '2026-01-02T13:36:56.874Z',
                          name: 'Watchdog',
                          query: 'vector(1)',
                          state: 'firing',
                          type: 'alerting',
                        },
                      ],
                    },
                  ],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving rules.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getAlertsRoute = createRoute({
  method: 'get',
  path: '/alerts',
  tags: ['alerts'],
  summary: 'Get active alerts',
  operationId: 'alerts',
  responses: {
    200: {
      description: 'Active alerts retrieved successfully.',
      content: {
        'application/json': {
          schema: AlertsOutputBodySchema,
          examples: {
            activeAlerts: {
              summary: 'Currently active alerts',
              value: {
                data: {
                  alerts: [
                    {
                      activeAt: '2026-01-02T13:30:00.000Z',
                      annotations: {
                        description:
                          'This is an alert meant to ensure that the entire alerting pipeline is functional. This alert is always firing, therefore it should always be firing in Alertmanager and always fire against a receiver. There are integrations with various notification mechanisms that send a notification when this alert is not firing. For example the "DeadMansSnitch" integration in PagerDuty.',
                        summary: 'Ensure entire alerting pipeline is functional',
                      },
                      labels: { alertname: 'Watchdog', severity: 'warning' },
                      state: 'firing',
                      value: '1e+00',
                    },
                  ],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving alerts.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getAlertmanagersRoute = createRoute({
  method: 'get',
  path: '/alertmanagers',
  tags: ['alerts'],
  summary: 'Get Alertmanager discovery',
  operationId: 'alertmanagers',
  responses: {
    200: {
      description: 'Alertmanager targets retrieved successfully.',
      content: {
        'application/json': {
          schema: AlertmanagersOutputBodySchema,
          examples: {
            alertmanagerDiscovery: {
              summary: 'Alertmanager discovery results',
              value: {
                data: {
                  activeAlertmanagers: [{ url: 'http://demo.prometheus.io:9093/api/v2/alerts' }],
                  droppedAlertmanagers: [],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving Alertmanager targets.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getStatusConfigRoute = createRoute({
  method: 'get',
  path: '/status/config',
  tags: ['status'],
  summary: 'Get status config',
  operationId: 'get-status-config',
  responses: {
    200: {
      description: 'Configuration retrieved successfully.',
      content: {
        'application/json': {
          schema: StatusConfigOutputBodySchema,
          examples: {
            configYAML: {
              summary: 'Prometheus configuration',
              value: {
                data: {
                  yaml: 'global:\n  scrape_interval: 15s\n  scrape_timeout: 10s\n  evaluation_interval: 15s\n  external_labels:\n    environment: demo-prometheus-io\nalerting:\n  alertmanagers:\n  - scheme: http\n    static_configs:\n    - targets:\n      - demo.prometheus.io:9093\nrule_files:\n- /etc/prometheus/rules/*.yml\n',
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving configuration.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getStatusRuntimeinfoRoute = createRoute({
  method: 'get',
  path: '/status/runtimeinfo',
  tags: ['status'],
  summary: 'Get status runtimeinfo',
  operationId: 'get-status-runtimeinfo',
  responses: {
    200: {
      description: 'Runtime information retrieved successfully.',
      content: {
        'application/json': {
          schema: StatusRuntimeInfoOutputBodySchema,
          examples: {
            runtimeInfo: {
              summary: 'Runtime information',
              value: {
                data: {
                  CWD: '/',
                  GODEBUG: '',
                  GOGC: '75',
                  GOMAXPROCS: 2,
                  GOMEMLIMIT: 3703818240,
                  corruptionCount: 0,
                  goroutineCount: 88,
                  hostname: 'demo-prometheus-io',
                  lastConfigTime: '2026-01-01T13:37:00.000Z',
                  reloadConfigSuccess: true,
                  serverTime: '2026-01-02T13:37:00.000Z',
                  startTime: '2026-01-01T13:37:00.000Z',
                  storageRetention: '31d',
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving runtime information.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getStatusBuildinfoRoute = createRoute({
  method: 'get',
  path: '/status/buildinfo',
  tags: ['status'],
  summary: 'Get status buildinfo',
  operationId: 'get-status-buildinfo',
  responses: {
    200: {
      description: 'Build information retrieved successfully.',
      content: {
        'application/json': {
          schema: StatusBuildInfoOutputBodySchema,
          examples: {
            buildInfo: {
              summary: 'Build information',
              value: {
                data: {
                  branch: 'HEAD',
                  buildDate: '20251030-07:26:10',
                  buildUser: 'root@08c890a84441',
                  goVersion: 'go1.25.3',
                  revision: '0a41f0000705c69ab8e0f9a723fc73e39ed62b07',
                  version: '3.7.3',
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving build information.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getStatusFlagsRoute = createRoute({
  method: 'get',
  path: '/status/flags',
  tags: ['status'],
  summary: 'Get status flags',
  operationId: 'get-status-flags',
  responses: {
    200: {
      description: 'Command-line flags retrieved successfully.',
      content: {
        'application/json': {
          schema: StatusFlagsOutputBodySchema,
          examples: {
            flags: {
              summary: 'Command-line flags',
              value: {
                data: {
                  agent: 'false',
                  'alertmanager.notification-queue-capacity': '10000',
                  'config.file': '/etc/prometheus/prometheus.yml',
                  'enable-feature': 'exemplar-storage,native-histograms',
                  'query.max-concurrency': '20',
                  'query.timeout': '2m',
                  'storage.tsdb.path': '/prometheus',
                  'storage.tsdb.retention.time': '15d',
                  'web.console.libraries': '/usr/share/prometheus/console_libraries',
                  'web.console.templates': '/usr/share/prometheus/consoles',
                  'web.enable-admin-api': 'true',
                  'web.enable-lifecycle': 'true',
                  'web.listen-address': '0.0.0.0:9090',
                  'web.page-title': 'Prometheus Time Series Collection and Processing Server',
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving flags.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getStatusTsdbRoute = createRoute({
  method: 'get',
  path: '/status/tsdb',
  tags: ['status'],
  summary: 'Get TSDB status',
  operationId: 'status-tsdb',
  request: {
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The maximum number of items to return per category.',
            required: false,
            explode: false,
            schema: { type: 'integer', format: 'int64' },
            examples: { example: { value: 10 } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'TSDB status retrieved successfully.',
      content: {
        'application/json': {
          schema: StatusTSDBOutputBodySchema,
          examples: {
            tsdbStats: {
              summary: 'TSDB statistics',
              value: {
                data: {
                  headStats: {
                    chunkCount: 37525,
                    maxTime: 1767436620000,
                    minTime: 1767362400712,
                    numLabelPairs: 2512,
                    numSeries: 9925,
                  },
                  labelValueCountByLabelName: [
                    { name: '__name__', value: 5 },
                    { name: 'job', value: 3 },
                  ],
                  memoryInBytesByLabelName: [
                    { name: '__name__', value: 1024 },
                    { name: 'job', value: 512 },
                  ],
                  seriesCountByLabelValuePair: [
                    { name: 'job=prometheus', value: 100 },
                    { name: 'instance=localhost:9090', value: 100 },
                  ],
                  seriesCountByMetricName: [
                    { name: 'up', value: 100 },
                    { name: 'http_requests_total', value: 500 },
                  ],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving TSDB status.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getStatusTsdbBlocksRoute = createRoute({
  method: 'get',
  path: '/status/tsdb/blocks',
  tags: ['status'],
  summary: 'Get TSDB blocks information',
  operationId: 'status-tsdb-blocks',
  responses: {
    200: {
      description: 'TSDB blocks information retrieved successfully.',
      content: {
        'application/json': {
          schema: StatusTSDBBlocksOutputBodySchema,
          examples: {
            tsdbBlocks: {
              summary: 'TSDB block information',
              value: {
                data: {
                  blocks: [
                    {
                      compaction: {
                        level: 4,
                        sources: [
                          '01KBCJ7TR8A4QAJ3AA1J651P5S',
                          '01KBCS3J0E34567YPB8Y5W0E24',
                          '01KBCZZ9KRTYGG3E7HVQFGC3S3',
                        ],
                      },
                      maxTime: 1764763200000,
                      minTime: 1764568801099,
                      stats: { numChunks: 1073962, numSamples: 129505582, numSeries: 10661 },
                      ulid: '01KC4D6GXQA4CRHYKV78NEBVAE',
                      version: 1,
                    },
                  ],
                },
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving TSDB blocks.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getStatusWalreplayRoute = createRoute({
  method: 'get',
  path: '/status/walreplay',
  tags: ['status'],
  summary: 'Get status walreplay',
  operationId: 'get-status-walreplay',
  responses: {
    200: {
      description: 'WAL replay status retrieved successfully.',
      content: {
        'application/json': {
          schema: StatusWALReplayOutputBodySchema,
          examples: {
            walReplay: {
              summary: 'WAL replay status',
              value: { data: { current: 3214, max: 3214, min: 3209 }, status: 'success' },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving WAL replay status.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getStatusSelfMetricsRoute = createRoute({
  method: 'get',
  path: '/status/self_metrics',
  tags: ['status'],
  summary: 'Get Prometheus self-instrumentation metrics',
  description:
    "Returns Prometheus' own instrumentation metrics from its internal client registry, as structured JSON. Supports optional regex filtering via the metric_name_pattern parameter.",
  operationId: 'get-status-self-metrics',
  request: {
    query: z.object({
      metric_name_pattern: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'metric_name_pattern',
            in: 'query',
            description:
              'Regular expression filter for metric names (fully anchored, like PromQL label matchers). Only metric families whose names fully match the pattern are returned.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'prometheus_tsdb_.*' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Self metrics retrieved successfully.',
      content: {
        'application/json': {
          schema: StatusSelfMetricsOutputBodySchema,
          examples: {
            selfMetrics: {
              summary: 'Prometheus self-instrumentation metrics in ProtoJSON format',
              value: {
                data: [
                  {
                    help: "A metric with a constant '1' value labeled by version, revision, branch, goversion from which prometheus was built, and the goos and goarch for the build.",
                    metric: [
                      {
                        gauge: { value: 1 },
                        label: [
                          { name: 'branch', value: 'HEAD' },
                          { name: 'goarch', value: 'amd64' },
                          { name: 'goos', value: 'linux' },
                          { name: 'goversion', value: 'go1.23.0' },
                          { name: 'revision', value: 'abc1234' },
                          { name: 'tags', value: 'netgo,builtinassets,stringlabels' },
                          { name: 'version', value: '3.0.0' },
                        ],
                      },
                    ],
                    name: 'prometheus_build_info',
                    type: 'GAUGE',
                  },
                  {
                    help: 'Total number of chunks in the head block.',
                    metric: [{ gauge: { value: 1024 } }],
                    name: 'prometheus_tsdb_head_chunks',
                    type: 'GAUGE',
                  },
                ],
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving self metrics.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const putAdminTsdbDeleteSeriesRoute = createRoute({
  method: 'put',
  path: '/admin/tsdb/delete_series',
  tags: ['admin'],
  summary: 'Delete series matching selectors via PUT',
  description: 'Deletes data for a selection of series in a time range using PUT method.',
  operationId: 'deleteSeriesPut',
  request: {
    query: z.object({
      'match[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'match[]',
            in: 'query',
            description: 'Series selectors to identify series to delete.',
            required: true,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['{__name__=~"test.*"}'] } },
          },
        }),
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start timestamp for deletion.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End timestamp for deletion.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Series deleted successfully via PUT.',
      content: {
        'application/json': {
          schema: DeleteSeriesOutputBodySchema,
          examples: {
            deletionSuccess: {
              summary: 'Successful series deletion',
              value: { status: 'success' },
            },
          },
        },
      },
    },
    default: {
      description: 'Error deleting series via PUT.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postAdminTsdbDeleteSeriesRoute = createRoute({
  method: 'post',
  path: '/admin/tsdb/delete_series',
  tags: ['admin'],
  summary: 'Delete series matching selectors',
  description: 'Deletes data for a selection of series in a time range.',
  operationId: 'deleteSeriesPost',
  request: {
    query: z.object({
      'match[]': z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'match[]',
            in: 'query',
            description: 'Series selectors to identify series to delete.',
            required: true,
            explode: false,
            schema: { type: 'array', items: { type: 'string' } },
            examples: { example: { value: ['{__name__=~"test.*"}'] } },
          },
        }),
      start: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            description: 'Start timestamp for deletion.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T12:37:00Z' }, epoch: { value: 1767357420 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
      end: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(
        z.xor([
          z.iso.datetime({ offset: true }).openapi({ description: 'RFC3339 timestamp.' }),
          z.number().openapi({ description: 'Unix timestamp in seconds.' }),
        ]),
      )
        .exactOptional()
        .openapi({
          param: {
            name: 'end',
            in: 'query',
            description: 'End timestamp for deletion.',
            required: false,
            explode: false,
            schema: {
              oneOf: [
                { type: 'string', format: 'date-time', description: 'RFC3339 timestamp.' },
                { type: 'number', format: 'unixtime', description: 'Unix timestamp in seconds.' },
              ],
              description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
            },
            examples: { RFC3339: { value: '2026-01-02T13:37:00Z' }, epoch: { value: 1767361020 } },
          },
          description: 'Timestamp in RFC3339 format or Unix timestamp in seconds.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Series deleted successfully.',
      content: {
        'application/json': {
          schema: DeleteSeriesOutputBodySchema,
          examples: {
            deletionSuccess: {
              summary: 'Successful series deletion',
              value: { status: 'success' },
            },
          },
        },
      },
    },
    default: {
      description: 'Error deleting series.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const putAdminTsdbCleanTombstonesRoute = createRoute({
  method: 'put',
  path: '/admin/tsdb/clean_tombstones',
  tags: ['admin'],
  summary: 'Clean tombstones in the TSDB via PUT',
  description: 'Removes deleted data from disk and cleans up existing tombstones using PUT method.',
  operationId: 'cleanTombstonesPut',
  responses: {
    200: {
      description: 'Tombstones cleaned successfully via PUT.',
      content: {
        'application/json': {
          schema: CleanTombstonesOutputBodySchema,
          examples: {
            tombstonesCleaned: {
              summary: 'Tombstones cleaned successfully',
              value: { status: 'success' },
            },
          },
        },
      },
    },
    default: {
      description: 'Error cleaning tombstones via PUT.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postAdminTsdbCleanTombstonesRoute = createRoute({
  method: 'post',
  path: '/admin/tsdb/clean_tombstones',
  tags: ['admin'],
  summary: 'Clean tombstones in the TSDB',
  description: 'Removes deleted data from disk and cleans up existing tombstones.',
  operationId: 'cleanTombstonesPost',
  responses: {
    200: {
      description: 'Tombstones cleaned successfully.',
      content: {
        'application/json': {
          schema: CleanTombstonesOutputBodySchema,
          examples: {
            tombstonesCleaned: {
              summary: 'Tombstones cleaned successfully',
              value: { status: 'success' },
            },
          },
        },
      },
    },
    default: {
      description: 'Error cleaning tombstones.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const putAdminTsdbSnapshotRoute = createRoute({
  method: 'put',
  path: '/admin/tsdb/snapshot',
  tags: ['admin'],
  summary: 'Create a snapshot of the TSDB via PUT',
  description: 'Creates a snapshot of all current data using PUT method.',
  operationId: 'snapshotPut',
  request: {
    query: z.object({
      skip_head: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'skip_head',
            in: 'query',
            description: 'If true, do not snapshot data in the head block.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'false' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snapshot created successfully via PUT.',
      content: {
        'application/json': {
          schema: SnapshotOutputBodySchema,
          examples: {
            snapshotCreated: {
              summary: 'Snapshot created successfully',
              value: { data: { name: '20260102T133700Z-a1b2c3d4e5f67890' }, status: 'success' },
            },
          },
        },
      },
    },
    default: {
      description: 'Error creating snapshot via PUT.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postAdminTsdbSnapshotRoute = createRoute({
  method: 'post',
  path: '/admin/tsdb/snapshot',
  tags: ['admin'],
  summary: 'Create a snapshot of the TSDB',
  description: 'Creates a snapshot of all current data.',
  operationId: 'snapshotPost',
  request: {
    query: z.object({
      skip_head: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'skip_head',
            in: 'query',
            description: 'If true, do not snapshot data in the head block.',
            required: false,
            explode: false,
            schema: { type: 'string' },
            examples: { example: { value: 'false' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snapshot created successfully.',
      content: {
        'application/json': {
          schema: SnapshotOutputBodySchema,
          examples: {
            snapshotCreated: {
              summary: 'Snapshot created successfully',
              value: { data: { name: '20260102T133700Z-a1b2c3d4e5f67890' }, status: 'success' },
            },
          },
        },
      },
    },
    default: {
      description: 'Error creating snapshot.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const postReadRoute = createRoute({
  method: 'post',
  path: '/read',
  tags: ['remote'],
  summary: 'Remote read endpoint',
  description:
    'Prometheus remote read endpoint for federated queries. Accepts and returns Protocol Buffer encoded data.',
  operationId: 'remoteRead',
  responses: {
    204: { description: 'No Content' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postWriteRoute = createRoute({
  method: 'post',
  path: '/write',
  tags: ['remote'],
  summary: 'Remote write endpoint',
  description:
    'Prometheus remote write endpoint for sending metrics. Accepts Protocol Buffer encoded write requests.',
  operationId: 'remoteWrite',
  responses: {
    204: { description: 'No Content' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const postOtlpV1MetricsRoute = createRoute({
  method: 'post',
  path: '/otlp/v1/metrics',
  tags: ['otlp'],
  summary: 'OTLP metrics write endpoint',
  description:
    'OpenTelemetry Protocol metrics ingestion endpoint. Accepts OTLP/HTTP metrics in Protocol Buffer format.',
  operationId: 'otlpWrite',
  responses: {
    204: { description: 'No Content' },
    default: { description: 'Error', content: { 'application/json': { schema: ErrorSchema } } },
  },
})

export const getNotificationsRoute = createRoute({
  method: 'get',
  path: '/notifications',
  tags: ['notifications'],
  summary: 'Get notifications',
  operationId: 'get-notifications',
  responses: {
    200: {
      description: 'Notifications retrieved successfully.',
      content: {
        'application/json': {
          schema: NotificationsOutputBodySchema,
          examples: {
            notifications: {
              summary: 'Server notifications',
              value: {
                data: [
                  {
                    active: true,
                    date: '2026-01-02T16:14:50.046Z',
                    text: 'Configuration reload has failed.',
                  },
                ],
                status: 'success',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving notifications.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

export const getFeaturesRoute = createRoute({
  method: 'get',
  path: '/features',
  tags: ['features'],
  summary: 'Get features',
  operationId: 'get-features',
  responses: {
    200: {
      description: 'Feature flags retrieved successfully.',
      content: {
        'application/json': {
          schema: FeaturesOutputBodySchema,
          examples: {
            enabledFeatures: {
              summary: 'Enabled feature flags',
              value: { data: ['exemplar-storage', 'remote-write-receiver'], status: 'success' },
            },
          },
        },
      },
    },
    default: {
      description: 'Error retrieving features.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            tsdbNotReady: {
              summary: 'TSDB not ready',
              value: { error: 'TSDB not ready', errorType: 'internal', status: 'error' },
            },
          },
        },
      },
    },
  },
})

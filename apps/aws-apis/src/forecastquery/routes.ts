import { createRoute, z } from '@hono/zod-openapi'

const TimestampSchema = z.string().openapi('Timestamp')

const DoubleSchema = z.float64().openapi('Double')

const DataPointSchema = z
  .object({
    Timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The timestamp of the specific forecast.' }),
    ).exactOptional(),
    Value: DoubleSchema.and(
      z.any().openapi({ description: 'The forecast value.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The forecast value for a specific date. Part of the <a>Forecast</a> object.',
    required: [],
  })
  .openapi('DataPoint')

const TimeSeriesSchema = z.array(DataPointSchema).openapi('TimeSeries')

const PredictionsSchema = z.record(z.string(), TimeSeriesSchema).openapi('Predictions')

const ForecastSchema = z
  .object({
    Predictions: PredictionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The forecast.</p> <p>The <i>string</i> of the string-to-array map is one of the following values:</p> <ul> <li> <p>p10</p> </li> <li> <p>p50</p> </li> <li> <p>p90</p> </li> </ul> <p>The default setting is <code>["0.1", "0.5", "0.9"]</code>. Use the optional <code>ForecastTypes</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateForecast.html">CreateForecast</a> operation to change the values. The values will vary depending on how this is set, with a minimum of <code>1</code> and a maximum of <code>5.</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides information about a forecast. Returned as part of the <a>QueryForecast</a> response.',
    required: [],
  })
  .openapi('Forecast')

const QueryForecastResponseSchema = z
  .object({
    Forecast: ForecastSchema.and(z.any().openapi({ description: 'The forecast.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('QueryForecastResponse')

const ArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):forecast:.*:.*:.+/)
  .max(256)
  .openapi('Arn')

const DateTimeSchema = z.string().openapi('DateTime')

const AttributeValueSchema = z.string().max(256).openapi('AttributeValue')

const FiltersSchema = z
  .record(z.string(), AttributeValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('Filters')

const NextTokenSchema = z.string().min(1).max(3000).openapi('NextToken')

const QueryForecastRequestSchema = z
  .object({
    ForecastArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the forecast to query.' }),
    ),
    StartDate: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The start date for the forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T08:00:00.",
        }),
    ).exactOptional(),
    EndDate: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The end date for the forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T20:00:00. ",
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filtering criteria to apply when retrieving the forecast. For example, to get the forecast for <code>client_21</code> in the electricity usage dataset, specify the following:</p> <p> <code>{"item_id" : "client_21"}</code> </p> <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ForecastArn', 'Filters'], title: 'QueryForecastRequest' })
  .openapi('QueryForecastRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const QueryWhatIfForecastResponseSchema = z
  .object({ Forecast: ForecastSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('QueryWhatIfForecastResponse')

const LongArnSchema = z
  .string()
  .regex(/arn:([a-z\d-]+):forecast:.*:.*:.+/)
  .max(300)
  .openapi('LongArn')

const QueryWhatIfForecastRequestSchema = z
  .object({
    WhatIfForecastArn: LongArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the what-if forecast to query.',
        }),
    ),
    StartDate: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The start date for the what-if forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T08:00:00.",
        }),
    ).exactOptional(),
    EndDate: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The end date for the what-if forecast. Specify the date using this format: yyyy-MM-dd'T'HH:mm:ss (ISO 8601 format). For example, 2015-01-01T20:00:00. ",
        }),
    ).exactOptional(),
    Filters: FiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The filtering criteria to apply when retrieving the forecast. For example, to get the forecast for <code>client_21</code> in the electricity usage dataset, specify the following:</p> <p> <code>{"item_id" : "client_21"}</code> </p> <p>To get the full what-if forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateWhatIfForecastExport.html">CreateForecastExportJob</a> operation.</p>',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WhatIfForecastArn', 'Filters'], title: 'QueryWhatIfForecastRequest' })
  .openapi('QueryWhatIfForecastRequest')

const AttributeNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\_\-]+$/)
  .max(256)
  .openapi('AttributeName')

const StatisticSchema = z.string().max(4).openapi('Statistic')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const postXAmzTargetAmazonForecastRuntimeQueryForecastRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecastRuntime.QueryForecast',
  description:
    '<p>Retrieves a forecast for a single item, filtered by the supplied criteria.</p> <p>The criteria is a key-value pair. The key is either <code>item_id</code> (or the equivalent non-timestamp, non-target field) from the <code>TARGET_TIME_SERIES</code> dataset, or one of the forecast dimensions specified as part of the <code>FeaturizationConfig</code> object.</p> <p>By default, <code>QueryForecast</code> returns the complete date range for the filtered forecast. You can request a specific date range.</p> <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p> <note> <p>The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was used to create the predictor.</p> </note>',
  operationId: 'QueryForecast',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecastRuntime.QueryForecast')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecastRuntime.QueryForecast'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: QueryForecastRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QueryForecastResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetAmazonForecastRuntimeQueryWhatIfForecastRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AmazonForecastRuntime.QueryWhatIfForecast',
  description: 'Retrieves a what-if forecast.',
  operationId: 'QueryWhatIfForecast',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AmazonForecastRuntime.QueryWhatIfForecast')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AmazonForecastRuntime.QueryWhatIfForecast'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: QueryWhatIfForecastRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QueryWhatIfForecastResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

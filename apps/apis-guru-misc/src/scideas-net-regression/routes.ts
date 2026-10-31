import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'an error description', example: 'invalid key' }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const ResultCallsSchema = z
  .object({
    limit: z
      .int()
      .exactOptional()
      .openapi({ description: 'number of api calls allowed per month', example: 100 }),
    limit_reached: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'true if monthly limit has been reached', example: false }),
    this_month: z
      .int()
      .exactOptional()
      .openapi({ description: 'number of api calls this month', example: 47 }),
  })
  .openapi({ required: [] })
  .openapi('ResultCalls')

const ResultStandardizedCoefficientsSchema = z
  .object({
    coefficient: z
      .int()
      .exactOptional()
      .openapi({ description: 'standardized regression coefficient for variable' }),
    variable: z.string().exactOptional().openapi({ description: 'name of variable' }),
  })
  .openapi({ required: [] })
  .openapi('ResultStandardizedCoefficients')

const ResultSchema = z
  .object({
    'calls"': ResultCallsSchema.exactOptional(),
    data_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'number of data rows processed', example: 9500 }),
    dates_converted_to: z
      .string()
      .exactOptional()
      .openapi({ description: 'either month or week', example: 'week' }),
    footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'text for pdf footer', example: 'acme products ltd' }),
    header: z
      .string()
      .exactOptional()
      .openapi({ description: 'text for pdf header', example: 'sales regression analysis' }),
    number_observations: z
      .int()
      .exactOptional()
      .openapi({ description: 'number of data rows used for analysis', example: 9000 }),
    number_tests: z
      .int()
      .exactOptional()
      .openapi({ description: 'number of data rows used to test model accuracy', example: 500 }),
    outcome_variable: z
      .string()
      .exactOptional()
      .openapi({
        description: 'the name of the variable processed as the outcome',
        example: 'sales',
      }),
    paid: z
      .string()
      .exactOptional()
      .openapi({ description: 'yes if paid subscriber, otherwise no', example: 'true' }),
    pdf: z
      .string()
      .exactOptional()
      .openapi({
        description: 'url of pdf summary',
        example: 'https://scideas.net/services/regression/api/pdf/abc123-1641901999.9268.pdf',
      }),
    prediction_mean_accuracy: z
      .int()
      .exactOptional()
      .openapi({ description: 'percentage accuracy of model created', example: 106 }),
    standardized_coefficients: z
      .array(ResultStandardizedCoefficientsSchema)
      .exactOptional()
      .openapi({
        example: [
          { coefficient: 0, variable: 'state' },
          { coefficient: 2, variable: 'discount' },
        ],
      }),
    summary: z
      .array(
        z
          .object({})
          .openapi({ description: 'array of text summaries, one per contributing varible' }),
      )
      .exactOptional()
      .openapi({
        example: [
          'state has a negligible (0) influence.',
          'discount has a small (2) influence. More discount makes sales higher',
        ],
      }),
    tested_variables: z
      .array(
        z.string().openapi({ description: 'array of variable names included in the analysis' }),
      )
      .exactOptional()
      .openapi({ example: ['state', 'date', 'discount'] }),
  })
  .openapi({ required: [] })
  .openapi('Result')

const InlineResponse_200Schema = z.xor([ResultSchema, ErrorSchema]).openapi('InlineResponse_200')

const RegressionApiBodySchema = z
  .object({
    convert_date_to: z
      .string()
      .exactOptional()
      .openapi({
        description: 'convert dates to either month (1-12) or week (1-52)',
        example: 'month',
      }),
    data: z
      .array(
        z
          .object({})
          .openapi({
            description:
              'array of comma separated variable strings, one element from each line of the csv file',
          }),
      )
      .openapi({
        example: [
          '25,female,30.2,0,yes,southwest,33900.65',
          '19,female,20.6,0,no,southwest,1731.677',
        ],
      }),
    ignore_variables: z
      .array(
        z.object({}).openapi({ description: 'array of variable names to ignore when processing' }),
      )
      .exactOptional()
      .openapi({ example: ['VAT', 'post code'] }),
    key: z.string().openapi({ description: 'api key', example: 'abc123' }),
    outcome_variable: z
      .string()
      .openapi({ description: 'name of the desired outcome variable', example: 'sales' }),
  })
  .openapi({ required: ['data', 'key', 'outcome_variable'] })
  .openapi('RegressionApiBody')

export const postRegressionApiRoute = createRoute({
  method: 'post',
  path: '/regression/api',
  summary: 'Returns regression analysis.',
  request: {
    body: { content: { 'application/json': { schema: RegressionApiBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'A JSON array of data',
      content: { 'application/json': { schema: InlineResponse_200Schema } },
    },
  },
})

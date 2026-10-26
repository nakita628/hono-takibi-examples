import { createRoute, z } from '@hono/zod-openapi'

const AmountSchema = z
  .object({
    currency: z
      .string()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes).',
      }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).',
      }),
  })
  .openapi({ required: ['currency', 'value'] })
  .openapi('Amount')

const ExchangeSideSchema = z.enum(['buy', 'sell']).openapi('ExchangeSide')

const RateTypeSchema = z
  .enum(['splitPayment', 'balanceConversion', 'transfer', 'splitRefund'])
  .openapi('RateType')

const CalculateRateRequestItemSchema = z
  .object({
    exchangeSide: ExchangeSideSchema.openapi({
      description:
        'The operation performed on the source amount. Possible values:\n* **buy**\n* **sell**',
    }),
    sourceAmount: AmountSchema.openapi({
      description:
        'An object specifying the currency and value for which you want to perform an exchange calculation.',
    }),
    targetCurrency: z
      .string()
      .openapi({ description: 'The currency to which you want to convert the source amount.' }),
    type: RateTypeSchema.openapi({
      description:
        'The type of transaction. Possible values:\n* **splitPayment**: for payments\n* **splitRefund**: for refunds',
    }),
  })
  .openapi({
    required: ['exchangeSide', 'sourceAmount', 'targetCurrency', 'type'],
    description: 'The request parameters required to calculate an amount in a different currency.',
  })
  .openapi('CalculateRateRequestItem')

const CalculateRateRequestSchema = z
  .object({
    exchangeCalculations: z
      .array(CalculateRateRequestItemSchema)
      .min(1)
      .max(1000)
      .openapi({
        description:
          'An array of objects, where each object defines a currency and value for which you want to perform an exchange calculation.',
      }),
  })
  .openapi({
    required: ['exchangeCalculations'],
    description: 'The request to calculate an amount in a different currency.',
  })
  .openapi('CalculateRateRequest')

const CalculateRateResponseItemSchema = z
  .object({
    appliedExchangeRate: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The exchange rate to convert the source currency to the target currency. This includes Adyen's markup.",
      }),
    exchangeSide: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The operation performed on the source amount. Possible values:\n* **buy**\n* **sell**',
      }),
    sourceAmount: AmountSchema.exactOptional().openapi({
      description: 'The currency of the amount you converted (the source amount).',
    }),
    targetAmount: AmountSchema.exactOptional().openapi({
      description:
        'An object specifying the currency and value to which you want to convert the source amount (the target amount).',
    }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of transaction. Possible values:\n* **splitPayment**: for payments\n* **splitRefund**: for refunds',
      }),
  })
  .openapi({
    description:
      'The response parameters returned when you calculate an amount in a different currency.',
    required: [],
  })
  .openapi('CalculateRateResponseItem')

const CalculateRateResponseSchema = z
  .object({
    exchangeCalculations: z
      .array(CalculateRateResponseItemSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of objects, where each object returns a currency and value for which you performed an exchange calculation. You can use the calculated amounts in your payment requests.',
      }),
  })
  .openapi({
    description: 'The response returned when you calculate an amount in a different currency.',
    required: [],
  })
  .openapi('CalculateRateResponse')

const InvalidFieldSchema = z
  .object({
    name: z.string().openapi({ description: 'The field that has an invalid value.' }),
    value: z.string().openapi({ description: 'The invalid value.' }),
    message: z.string().openapi({ description: 'Description of the validation error.' }),
  })
  .openapi({ required: ['message', 'name', 'value'] })
  .openapi('InvalidField')

const DefaultErrorResponseEntitySchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
      }),
    errorCode: z.string().exactOptional().openapi({ description: 'Unique business error code.' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URI that identifies the specific occurrence of the problem if applicable.',
      }),
    invalidFields: z
      .array(InvalidFieldSchema)
      .exactOptional()
      .openapi({ description: 'Array of fields with validation errors when applicable.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique reference for the request.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP status code.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short, human-readable summary of the problem type.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI that identifies the validation error type. It points to human-readable documentation for the problem type.',
      }),
  })
  .openapi({
    description: 'Standardized error response following RFC-7807 format',
    externalDocs: { url: 'https://www.rfc-editor.org/rfc/rfc7807' },
    required: [],
  })
  .openapi('DefaultErrorResponseEntity')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postRatesCalculateRoute = createRoute({
  method: 'post',
  path: '/rates/calculate',
  tags: ['Rates'],
  summary: 'Calculate amount in a different currency',
  description:
    'Returns the calculated amounts and rates required to convert the currency of a transaction.',
  operationId: 'post-rates-calculate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CalculateRateRequestSchema,
          examples: {
            calculate: {
              summary: 'Calculate an amount in a different currency',
              description: 'The request to calculate an amount in a different currency.',
              value: {
                exchangeCalculations: [
                  {
                    type: 'splitPayment',
                    sourceAmount: { currency: 'CZK', value: 112300 },
                    targetCurrency: 'EUR',
                    exchangeSide: 'buy',
                  },
                  {
                    type: 'splitRefund',
                    sourceAmount: { currency: 'CZK', value: 24000 },
                    targetCurrency: 'USD',
                    exchangeSide: 'sell',
                  },
                ],
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
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: CalculateRateResponseSchema,
          examples: {
            calculate: {
              summary: 'Amount calculated in a different currency',
              description:
                'The response returned when you calculate an amount in a different currency.',
              value: {
                exchangeCalculations: [
                  {
                    type: 'splitPayment',
                    exchangeSide: 'buy',
                    sourceAmount: { value: 112300, currency: 'CZK' },
                    targetAmount: { value: 4480, currency: 'EUR' },
                    appliedExchangeRate: 0.039893143366,
                  },
                  {
                    type: 'splitRefund',
                    exchangeSide: 'sell',
                    sourceAmount: { value: 24000, currency: 'CZK' },
                    targetAmount: { value: 992, currency: 'USD' },
                    appliedExchangeRate: 0.0413333333333,
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'calculate-401': {
              summary: 'Unauthorized',
              description: 'Authentication failed.',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                title: 'Unauthorized',
                status: 401,
                errorCode: '00_401',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'calculate-403': {
              summary: 'Forbidden',
              description:
                "Most commonly happens when user does not have sufficient roles or doesn't own requested resource.",
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                detail: "User doesn't have access to all token policy resources",
                requestId: 'd42c493b5176df89e51516c6060cc34c',
                status: 403,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'calculate-422': {
              summary: 'Bad request',
              description:
                'Response returned when request parsing has failed or some request fields were invalid.',
              value: {
                type: 'https://docs.adyen.com/errors/unprocessable-entity',
                errorCode: '999_422_000',
                title: 'Validation failure',
                detail: 'Input data validation failed',
                requestId: '0890cfb8f4278217bd457b49ce572265',
                status: 422,
                invalidFields: [
                  {
                    name: 'exchangeCalculations[0].sourceAmount.currency',
                    message: 'The currency is invalid.',
                  },
                  {
                    name: 'exchangeCalculations[0].sourceAmount.value',
                    message: "The value can't be negative.",
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

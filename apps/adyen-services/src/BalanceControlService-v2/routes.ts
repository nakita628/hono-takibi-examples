import { createRoute, z } from '@hono/zod-openapi'

const AmountSchema = z
  .object({
    currency: z
      .string()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.',
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
          'The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).',
      }),
  })
  .openapi({ required: ['currency', 'value'] })
  .openapi('Amount')

const BalanceTransferTypeSchema = z
  .enum(['tax', 'fee', 'terminalSale', 'credit', 'debit', 'adjustment'])
  .openapi('BalanceTransferType')

const BalanceTransferRequestSchema = z
  .object({
    amount: AmountSchema.openapi({ description: 'The amount of the transfer.' }),
    fromMerchant: z
      .string()
      .min(1)
      .openapi({
        description:
          'The unique identifier of the source merchant account from which funds are deducted.',
      }),
    reference: z
      .string()
      .min(0)
      .max(80)
      .exactOptional()
      .openapi({
        description: 'A reference for the balance transfer. Maximum length: 80 characters.',
      }),
    toMerchant: z
      .string()
      .min(1)
      .openapi({
        description:
          'The unique identifier of the destination merchant account to which funds are transferred.',
      }),
    type: BalanceTransferTypeSchema.openapi({
      description:
        'The type of balance transfer. Possible values: **tax**, **fee**, **terminalSale**, **credit**, **debit**, and **adjustment**.',
    }),
  })
  .openapi({ required: ['amount', 'fromMerchant', 'toMerchant', 'type'] })
  .openapi('BalanceTransferRequest')

const BalanceTransferResponseSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date when the balance transfer was performed.' }),
    pspReference: z
      .string()
      .openapi({
        description: "Adyen's 16-character string reference associated with the balance transfer.",
      }),
  })
  .openapi({ required: ['createdAt', 'pspReference'] })
  .openapi('BalanceTransferResponse')

const MerchantBalanceSchema = z
  .object({
    availableFund: AmountSchema.exactOptional(),
    deposit: AmountSchema.exactOptional(),
    merchantAccount: z.string().exactOptional(),
    nextPayout: AmountSchema.exactOptional(),
    pendingBalance: AmountSchema.exactOptional(),
    reserve: AmountSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MerchantBalance')

const CompanyBalancesSchema = z
  .object({ merchantBalancesOverview: z.array(MerchantBalanceSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('CompanyBalances')

const InvalidFieldSchema = z
  .object({
    message: z.string().openapi({ description: 'Description of the validation error.' }),
    name: z.string().openapi({ description: 'The field that has an invalid value.' }),
    value: z.string().openapi({ description: 'The invalid value.' }),
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

export const getBalanceOverviewCompaniesCompanyAccountCodeBalancesRoute = createRoute({
  method: 'get',
  path: '/balanceOverview/companies/{companyAccountCode}/balances',
  tags: ['Balances overview'],
  summary: 'View the available balances for all merchant accounts under your company.',
  description:
    'Returns an array with details about the balances available for all merchant accounts under your company account. For each merchant account, the response returns the following:\n\n\n* **Available funds**: The funds in the merchant account that have been settled and are available for use.\n\n\n* **Pending balance**: The funds in the merchant account that have not been settled yet.\n\n\n* **Next payout amount**: The amount that will be settled to your bank account with the next payout.\n\n\n* **Reserve**: The available amount to cover refunds, payouts, chargebacks, and other operational expenses that cannot be covered by your in-process funds.\n\n\n* **Deposit**: The amount withheld by Adyen to cover potential losses and liabilities due to payment processing.\n',
  operationId: 'get-balanceOverview-companies-companyAccountCode-balances',
  request: {
    params: z.object({
      companyAccountCode: z
        .string()
        .openapi({
          param: {
            name: 'companyAccountCode',
            in: 'path',
            description: 'The unique identifier of your company account.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      currency: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'currency',
            in: 'query',
            description: 'The currency for which you want a balances overview.',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: CompanyBalancesSchema,
          examples: {
            'Response code 200: balances overview for company account': {
              summary: 'Response code 200: balances overview for company account',
              description: 'Response code 200: balance details for company account',
              value:
                '{\n    "merchantBalancesOverview": [\n        {\n            "merchantAccount": "MERCHANT_ACCOUNT_1",\n            "availableFund": {\n                "value": 3191,\n                "currency": "EUR"\n            },\n            "pendingBalance": {\n                "value": -112845,\n                "currency": "EUR"\n            },\n            "nextPayout": {\n                "value": 3191,\n                "currency": "EUR"\n            },\n            "reserve": {\n                "value": 0,\n                "currency": "EUR"\n            }\n        },\n        {\n            "merchantAccount": "MERCHANT_ACCOUNT_2",\n            "availableFund": {\n                "value": 0,\n                "currency": "USD"\n            },\n            "reserve": {\n                "value": 0,\n                "currency": "USD"\n            },\n            "deposit": {\n                "value": 50000,\n                "currency": "USD"\n            }\n        }\n    }\n}\n',
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getBalanceOverviewMerchantsMerchantAccountCodeBalancesRoute = createRoute({
  method: 'get',
  path: '/balanceOverview/merchants/{merchantAccountCode}/balances',
  tags: ['Balances overview'],
  summary: 'View all balances available for your merchant account.',
  description:
    'Returns an overview of the different balances available for the merchant account. This includes details about the following:\n\n\n* **Available funds**: The funds in the merchant account that have been settled and are available for use.\n\n\n* **Pending balance**: The funds in the merchant account that have not been settled yet.\n\n\n* **Next payout amount**: The amount that will be settled to your bank account with the next payout.\n\n\n* **Reserve**: The available amount to cover refunds, payouts, chargebacks, and other operational expenses that cannot be covered by your in-process funds.\n\n\n* **Deposit**: The amount withheld by Adyen to cover potential losses and liabilities due to payment processing.\n',
  operationId: 'get-balanceOverview-merchants-merchantAccountCode-balances',
  request: {
    params: z.object({
      merchantAccountCode: z
        .string()
        .openapi({
          param: {
            name: 'merchantAccountCode',
            in: 'path',
            description: 'The unique identifier of your merchant account.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      currency: z
        .string()
        .min(1)
        .openapi({
          param: {
            name: 'currency',
            in: 'query',
            description: 'The currency for which you want a balances overview.',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: MerchantBalanceSchema,
          examples: {
            'Response code 200: balances overview for merchant account': {
              summary: 'Response code 200: balances overview for merchant account',
              description: 'Response code 200: balance details for merchant account',
              value:
                '{\n    "merchantBalancesOverview": [\n        {\n            "merchantAccount": "MERCHANT_ACCOUNT_1",\n            "availableFund": {\n                "value": 3191,\n                "currency": "EUR"\n            },\n            "pendingBalance": {\n                "value": -112845,\n                "currency": "EUR"\n            },\n            "nextPayout": {\n                "value": 3191,\n                "currency": "EUR"\n            },\n            "reserve": {\n                "value": 0,\n                "currency": "EUR"\n            }\n        },\n        {\n            "merchantAccount": "MERCHANT_ACCOUNT_2",\n            "availableFund": {\n                "value": 0,\n                "currency": "USD"\n            },\n            "reserve": {\n                "value": 0,\n                "currency": "USD"\n            },\n            "deposit": {\n                "value": 50000,\n                "currency": "USD"\n            }\n        }\n    }\n}\n',
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postBalanceTransfersRoute = createRoute({
  method: 'post',
  path: '/balanceTransfers',
  tags: ['Balance transfers'],
  summary: 'Performs a balance transfer',
  description:
    'Performs a balance transfer between merchant accounts. The following conditions must be met before you can successfully transfer balances:\n* The source and destination merchant accounts must be under the same company account and legal entity.\n* The source merchant account must have sufficient funds.\n* The source and destination merchant accounts must have at least one common processing currency.\\n\\n\nWhen sending multiple API requests with the same source and destination merchant accounts, send the requests sequentially and *not* in parallel. Some requests may not be processed if the requests are sent in parallel.\n',
  operationId: 'post-balanceTransfers',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BalanceTransferRequestSchema,
          examples: {
            'Create balance transfer': {
              summary: 'Create balance transfer',
              description: 'Create balance transfer',
              value: {
                amount: { currency: 'EUR', value: 3000 },
                fromMerchant: 'SOURCE_MERCHANT_ACCOUNT',
                reference: 'Your reference for the balance transfer.',
                toMerchant: 'DESTINATION_MERCHANT_ACCOUNT',
                type: 'adjustment',
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
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: BalanceTransferResponseSchema,
          examples: {
            'Response code 200: balance transfer created.': {
              summary: 'Response code 200: balance transfer created.',
              description: 'Response code 200: balance transfer created.',
              value: { createdAt: '2025-10-27T07:06:15+00:00', pspReference: '993617895204576J' },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

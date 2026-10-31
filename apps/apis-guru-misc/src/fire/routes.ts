import { createRoute, z } from '@hono/zod-openapi'

const UnauthorisedErrorResponse = { description: 'Access Token is Invalid or missing' }

const LimitParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().max(200),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description: 'The number of records to return. Defaults to 10 - max is 200.',
      in: 'query',
      name: 'limit',
      required: false,
      schema: { default: 10, maximum: 200, type: 'integer' },
    },
  })

const OffsetParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .default(0)
  .exactOptional()
  .openapi({
    param: {
      description:
        'The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. `offset = 40` and `limit = 20` will return records 40 to 59.',
      in: 'query',
      name: 'offset',
      required: false,
      schema: { default: 0, type: 'integer' },
    },
  })

const OrderByParamParamsSchema = z
  .literal('DATE')
  .exactOptional()
  .openapi({
    param: {
      description: 'Currently defaults to `DATE` No other options at this time.',
      in: 'query',
      name: 'orderBy',
      required: false,
      schema: { enum: ['DATE'] },
    },
  })

const OrderParamParamsSchema = z
  .enum(['ASC', 'DESC'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Either `ASC` or `DESC`',
      in: 'query',
      name: 'order',
      required: false,
      schema: { enum: ['ASC', 'DESC'] },
    },
  })

const BearerAuthSecurityScheme = {
  bearerFormat: 'API Access Token',
  scheme: 'bearer',
  type: 'http',
}

export const getV1AccountsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts',
  tags: ['Accounts'],
  summary: 'List all fire.com Accounts',
  description: 'Returns all your fire.com Accounts. Ordered by Alias ascending. Can be paginated.',
  operationId: 'getAccounts',
  responses: {
    200: {
      description: 'An array of account objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              accounts: z
                .array(
                  z
                    .object({
                      balance: z
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
                            'the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).',
                          example: 23950,
                        }),
                      cbic: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'the BIC of the account (provided if currency is EUR).',
                          example: 'CPAYIE2D',
                        }),
                      ccan: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'the Account Number of the account.',
                          example: '11111111',
                        }),
                      ciban: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'the IBAN of the account (provided if currency is EUR).',
                          example: 'IE54CPAY99119911111111',
                        }),
                      cnsc: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'the Sort Code of the account.',
                          example: '232221',
                        }),
                      colour: z
                        .string()
                        .exactOptional()
                        .openapi({
                          deprecated: true,
                          description: 'Internal Use',
                          example: 'ORANGE',
                        }),
                      currency: z
                        .object({
                          code: z
                            .enum(['EUR', 'GBP'])
                            .exactOptional()
                            .openapi({
                              description:
                                'The three letter code for the currency - either `EUR` or `GBP`.',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the currency', example: 'Euro' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The currency.', title: 'currency', required: [] }),
                      defaultAccount: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees).',
                          example: true,
                        }),
                      directDebitsAllowed: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Whether or not direct debits can be set up on this account.',
                          example: false,
                        }),
                      fopOnly: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned.',
                          example: false,
                        }),
                      ican: z
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
                          description: 'identifier for the fire.com account (assigned by fire.com)',
                          example: 42,
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'the name the user gives to the account to help them identify it.',
                          example: 'Main Account',
                        }),
                      status: z
                        .enum(['LIVE', 'BREXIT_MIGRATED'])
                        .exactOptional()
                        .openapi({
                          description:
                            'Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only.',
                        }),
                    })
                    .openapi({ title: 'Account', required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ title: 'accounts', required: [] }),
        },
      },
    },
    401: { description: 'Access Token is Invalid or missing' },
  },
})

export const postV1AccountsRoute = createRoute({
  method: 'post',
  path: '/v1/accounts',
  tags: ['Accounts'],
  summary: 'Add a new account',
  description:
    'Creates a new fire.com account.\n\n**Please note there is a charge associated with creating a new account.**\n',
  operationId: 'addAccount',
  request: {
    body: {
      description: 'Details of the new account',
      content: {
        'application/json': {
          schema: z
            .object({
              acceptFeesAndCharges: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'a field to indicate you accept the fee for a new account',
                }),
              accountName: z
                .string()
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'Name to give the new account',
                  example: 'Operating Account',
                }),
              currency: z
                .enum(['EUR', 'GBP'])
                .exactOptional()
                .openapi({ description: 'The currency of the new account' }),
            })
            .openapi({ title: 'newAccount', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The details of the new account',
      content: {
        'application/json': {
          schema: z
            .object({
              balance: z
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
                    'the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).',
                  example: 23950,
                }),
              cbic: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'the BIC of the account (provided if currency is EUR).',
                  example: 'CPAYIE2D',
                }),
              ccan: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'the Account Number of the account.',
                  example: '11111111',
                }),
              ciban: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'the IBAN of the account (provided if currency is EUR).',
                  example: 'IE54CPAY99119911111111',
                }),
              cnsc: z
                .string()
                .exactOptional()
                .openapi({ description: 'the Sort Code of the account.', example: '232221' }),
              colour: z
                .string()
                .exactOptional()
                .openapi({ deprecated: true, description: 'Internal Use', example: 'ORANGE' }),
              currency: z
                .object({
                  code: z
                    .enum(['EUR', 'GBP'])
                    .exactOptional()
                    .openapi({
                      description:
                        'The three letter code for the currency - either `EUR` or `GBP`.',
                    }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the currency', example: 'Euro' }),
                })
                .exactOptional()
                .openapi({ description: 'The currency.', title: 'currency', required: [] }),
              defaultAccount: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees).',
                  example: true,
                }),
              directDebitsAllowed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether or not direct debits can be set up on this account.',
                  example: false,
                }),
              fopOnly: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned.',
                  example: false,
                }),
              ican: z
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
                  description: 'identifier for the fire.com account (assigned by fire.com)',
                  example: 42,
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'the name the user gives to the account to help them identify it.',
                  example: 'Main Account',
                }),
              status: z
                .enum(['LIVE', 'BREXIT_MIGRATED'])
                .exactOptional()
                .openapi({
                  description:
                    'Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only.',
                }),
            })
            .openapi({ title: 'Account', required: [] }),
        },
      },
    },
  },
})

export const getV1AccountsIcanRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{ican}',
  tags: ['Accounts'],
  summary: 'Retrieve the details of a fire.com Account',
  description: 'You can retrieve the details of a fire.com Account by its `ican`.',
  operationId: 'getAccountById',
  request: {
    params: z.object({
      ican: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'ican',
            required: true,
            schema: {
              description: 'The ican of the account to retrieve',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The ican of the account to retrieve',
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of account objects.',
      content: {
        'application/json': {
          schema: z
            .object({
              balance: z
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
                    'the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).',
                  example: 23950,
                }),
              cbic: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'the BIC of the account (provided if currency is EUR).',
                  example: 'CPAYIE2D',
                }),
              ccan: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'the Account Number of the account.',
                  example: '11111111',
                }),
              ciban: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'the IBAN of the account (provided if currency is EUR).',
                  example: 'IE54CPAY99119911111111',
                }),
              cnsc: z
                .string()
                .exactOptional()
                .openapi({ description: 'the Sort Code of the account.', example: '232221' }),
              colour: z
                .string()
                .exactOptional()
                .openapi({ deprecated: true, description: 'Internal Use', example: 'ORANGE' }),
              currency: z
                .object({
                  code: z
                    .enum(['EUR', 'GBP'])
                    .exactOptional()
                    .openapi({
                      description:
                        'The three letter code for the currency - either `EUR` or `GBP`.',
                    }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the currency', example: 'Euro' }),
                })
                .exactOptional()
                .openapi({ description: 'The currency.', title: 'currency', required: [] }),
              defaultAccount: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'true if this is the default account for this currency. This will be the account that general fees are taken from (as opposed to per-transaction fees).',
                  example: true,
                }),
              directDebitsAllowed: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether or not direct debits can be set up on this account.',
                  example: false,
                }),
              fopOnly: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates that this account is for collecting Fire Open Payments only. All other payments to this account will be returned.',
                  example: false,
                }),
              ican: z
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
                  description: 'identifier for the fire.com account (assigned by fire.com)',
                  example: 42,
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'the name the user gives to the account to help them identify it.',
                  example: 'Main Account',
                }),
              status: z
                .enum(['LIVE', 'BREXIT_MIGRATED'])
                .exactOptional()
                .openapi({
                  description:
                    'Live accounts can be used as normal. Migrated accounts were used before Brexit and are read-only.',
                }),
            })
            .openapi({ title: 'Account', required: [] }),
        },
      },
    },
    401: { description: 'Access Token is Invalid or missing' },
  },
})

export const getV1AccountsIcanTransactionsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{ican}/transactions',
  tags: ['Transactions'],
  summary: 'List transactions for an account (v1)',
  description:
    'Retrieve a list of transactions against an account. Recommended to use the v3 endpoint instead.',
  operationId: 'getTransactionsByIdv1',
  request: {
    params: z.object({
      ican: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'ican',
            required: true,
            schema: {
              description: 'The ican of the account to retrieve',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The ican of the account to retrieve',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: true,
            schema: {
              description: 'The number of records to return. Defaults to 10 - max is 200.',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The number of records to return. Defaults to 10 - max is 200.',
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: true,
            schema: {
              description:
                'The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.',
              format: 'int64',
              type: 'integer',
            },
          },
          description:
            'The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of transaction objects for the account with a count (`total`).',
      content: {
        'application/json': {
          schema: z
            .object({
              dateRangeTo: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'milisecond timestamp of date range to value.',
                  example: 1547744156603,
                }),
              total: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The total number of card transactions in the list.',
                  example: 1,
                }),
              transactions: z
                .array(
                  z
                    .object({
                      amountAfterCharges: z
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
                            'Net amount lodged or taken from the account after fees and charges were applied.',
                          example: 5000,
                        }),
                      amountBeforeCharges: z
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
                            'Amount of the transaction before the fees and taxes were applied.',
                          example: 5000,
                        }),
                      balance: z
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
                            'the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).',
                          example: 8500,
                        }),
                      batchItemDetails: z
                        .object({
                          batchItemPublicUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for this item in the batch.',
                              example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                            }),
                          batchName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The optional name given to the batch at creation time.',
                              example: 'Payroll 2022-11',
                            }),
                          batchPublicUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for this batch.',
                              example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                            }),
                          jobNumber: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The optional job number given to the batch to link it to your own system.',
                              example: '2018-01-PR',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Details of the batch run if this transaction was part of a batch.',
                          title: 'batchItemDetails',
                          required: [],
                        }),
                      card: z
                        .object({
                          alias: z.string().exactOptional(),
                          cardId: z
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
                          embossBusinessName: z.string().exactOptional(),
                          embossCardName: z.string().exactOptional(),
                          expiryDate: z.iso.datetime({ offset: true }).exactOptional(),
                          maskedPan: z.string().exactOptional(),
                          provider: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Details of the card used (if applicable)',
                          title: 'relatedCard',
                          required: [],
                        }),
                      currency: z
                        .object({
                          code: z
                            .enum(['EUR', 'GBP'])
                            .exactOptional()
                            .openapi({
                              description:
                                'The three letter code for the currency - either `EUR` or `GBP`.',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the currency', example: 'Euro' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The currency.', title: 'currency', required: [] }),
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'Date of the transaction',
                          example: '2021-04-13T11:06:32.437Z',
                        }),
                      dateAcknowledged: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ example: '2021-04-13T11:06:32.437Z' }),
                      directDebitDetails: z
                        .object({
                          directDebitReference: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The direct debit reference.',
                              example: 'VODA-ABC453-1',
                            }),
                          directDebitUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for the direct debit payment',
                              example: '42de0705-e3f1-44fa-8c41-79973eb80eb2',
                            }),
                          mandateReference: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'the reference of the mandate',
                              example: 'CRZ-102190123',
                            }),
                          mandateUUid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for the mandate',
                              example: 'f171b143-e3eb-47de-85a6-1c1f1108c701',
                            }),
                          mandateUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for the mandate',
                              example: '28d627c3-1889-44c8-ae59-6f6b20239260',
                            }),
                          originatorAlias: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The Alias of the party who sets up the direct debit.',
                              example: 'Three',
                            }),
                          originatorLogoUrlLarge: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'URL pointing to a large version of the Originator Logo (if available)',
                              example:
                                'https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png',
                            }),
                          originatorLogoUrlSmall: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'URL pointing to a small version of the Originator Logo (if available)',
                              example:
                                'https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png',
                            }),
                          originatorName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The creator of the party who sets up the direct debit.',
                              example: 'Vodafone PLC',
                            }),
                          originatorReference: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Set by party who sets up the direct debit.',
                              example: 'VODA-123456',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Details of the direct debit (if applicable)',
                          title: 'directDebitDetails',
                          required: [],
                        }),
                      eventUuid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'An internal Fire reference for the transaction (UUID)',
                          example: '42de0705-e3f1-44fa-8c41-79973eb80eb2',
                        }),
                      feeAmount: z
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
                          description: 'The amount of the fee, if any.',
                          example: 0,
                        }),
                      fxTradeDetails: z
                        .object({
                          buyAmount: z
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
                              description: 'amount of buyCurrency being bought',
                              example: 359,
                            }),
                          buyCurrency: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'currency which is being bought',
                              example: 'GBP',
                            }),
                          fixedSide: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'type of trade - BUY or SELL',
                              example: 'SELL',
                            }),
                          provider: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The FX provider used to make the trade.',
                              example: 'TCC',
                            }),
                          rate4d: z
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
                              description: 'exchange rate',
                              example: 7180,
                            }),
                          sellAmount: z
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
                              description: 'amount of sellCurrency being sold',
                              example: 500,
                            }),
                          sellCurrency: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'currency which is being sold',
                              example: 'EUR',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Details of the FX trade (if applicable)',
                          title: 'fxTrade',
                          required: [],
                        }),
                      ican: z
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
                            'identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version.',
                          example: 1951,
                        }),
                      myRef: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The comment/reference on the transaction',
                          example: 'Transfer to main account',
                        }),
                      paymentRequestPublicCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '(FOP payments only) The FOP Payment Code that was used to make this payment.',
                          example: '1abcdefg',
                        }),
                      proprietarySchemeDetails: z
                        .array(
                          z
                            .object({
                              data: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'the scheme proprietary data - key pairs separated by | and key/values separated by ^',
                                  example:
                                    'remittanceInfoUnstructured^FIRE440286865OD1|instructionId^O223151336499079',
                                }),
                              type: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc.',
                                  example: 'SCT',
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Extra details about the transaction based on the scheme used to make the payment.',
                          title: 'proprietarySchemeDetails',
                        }),
                      refId: z
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
                          description: 'The id of the transaction.',
                          example: 26774,
                        }),
                      relatedParty: z
                        .xor([
                          z
                            .object({
                              account: z
                                .object({
                                  accountNumber: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Account Number of the account.',
                                      example: '11111111',
                                    }),
                                  alias: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the name the user gives to the account to help them identify it.',
                                      example: 'Main Account',
                                    }),
                                  bic: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the BIC of the account (provided if currency is EUR).',
                                      example: 'CPAYIE2D',
                                    }),
                                  iban: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the IBAN of the account (provided if currency is EUR).',
                                      example: 'IE54CPAY99119911111111',
                                    }),
                                  id: z
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
                                        'identifier for the fire.com account (assigned by fire.com)',
                                      example: 42,
                                    }),
                                  nsc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Sort Code of the account.',
                                      example: '232221',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.literal('FIRE_ACCOUNT').exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyFireAccount', required: [] }),
                          z
                            .object({
                              account: z
                                .object({
                                  accountNumber: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Account Number of the account.',
                                      example: '11111111',
                                    }),
                                  alias: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the name the user gives to the account to help them identify it.',
                                      example: 'Main Account',
                                    }),
                                  bic: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the BIC of the account (provided if currency is EUR).',
                                      example: 'CPAYIE2D',
                                    }),
                                  iban: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the IBAN of the account (provided if currency is EUR).',
                                      example: 'IE54CPAY99119911111111',
                                    }),
                                  id: z
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
                                  nsc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Sort Code of the account.',
                                      example: '232221',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.literal('EXTERNAL_ACCOUNT').exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyExternalAccount', required: [] }),
                          z
                            .object({
                              account: z
                                .object({
                                  accountNumber: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The account number of the Withdrawl account in reference',
                                      example: '00000000',
                                    }),
                                  alias: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The Alias name of the Withdrawl account in reference',
                                      example: 'Smyth and Co.',
                                    }),
                                  bic: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'The BIC of the Withdrawl account in reference',
                                      example: 'CPAYIE2D',
                                    }),
                                  iban: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'The BIC of the Withdrawl account in reference',
                                      example: 'IE76CPAY99119900000000',
                                    }),
                                  id: z
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
                                        'The ID number of the Withdrawl account in reference',
                                      example: 123,
                                    }),
                                  nsc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        '(Conditional) Provide this field if using Mode 2 and the payee account is in GBP.',
                                      example: '991199',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.literal('WITHDRAWAL_ACCOUNT').exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyPayee', required: [] }),
                          z
                            .object({
                              cardMerchant: z
                                .object({
                                  acquirerIdDe32: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 6011329 }),
                                  additionalAmtDe54: z.string().exactOptional(),
                                  additionalDataDe124: z.string().exactOptional(),
                                  additionalDataDe48: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '010X610500000' }),
                                  authCodeDe38: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '177449' }),
                                  authorisedByGps: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'N' }),
                                  avsResult: z.string().exactOptional().openapi({ example: 'N' }),
                                  billAmt: z
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
                                    .openapi({ type: 'integer', format: 'int64', example: -1000 }),
                                  billCcy: z.string().exactOptional().openapi({ example: '978' }),
                                  expiryDate: z.string().exactOptional(),
                                  mccCode: z.string().exactOptional().openapi({ example: '5521' }),
                                  merchIdDe42: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 13152429 }),
                                  merchNameDe43: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'ABC Coffee Shop' }),
                                  mtId: z.string().exactOptional().openapi({ example: '0100' }),
                                  posDataDe22: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '051' }),
                                  posDataDe61: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 1000030037299999 }),
                                  posTermnlDe41: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '80266721' }),
                                  procCode: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '000000' }),
                                  recordDataDe120: z.string().exactOptional(),
                                  respCodeDe39: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '00' }),
                                  retRefNoDe37: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 10900006720 }),
                                  statusCode: z.string().exactOptional().openapi({ example: '00' }),
                                  token: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '976307363' }),
                                  txnAmt4d: z
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
                                    .openapi({ type: 'integer', format: 'int64', example: 1000 }),
                                  txnCcy: z.string().exactOptional().openapi({ example: '978' }),
                                  txnCtry: z.string().exactOptional().openapi({ example: 'IRL' }),
                                  txnDesc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'ABC Coffee Shop' }),
                                  txnStatCode: z.string().exactOptional().openapi({ example: 'A' }),
                                  txnType: z.string().exactOptional().openapi({ example: 'A' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.enum(['CARD_MERCHANT', 'CARD_ATM']).exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyCardPayment', required: [] }),
                        ])
                        .exactOptional()
                        .openapi({
                          description:
                            'Details of the related third party involved in the transaction.',
                          title: 'relatedParty',
                        }),
                      taxAmount: z
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
                            'The amount of the tax, if any (e.g. Stamp duty for ATM transactions)',
                          example: 0,
                        }),
                      txnId: z
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
                            'The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction.',
                          example: 30157,
                        }),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The type of the transaction:\n* `LODGEMENT` - Bank Transfer received\n* `PIS_LODGEMENT` - Fire Open Payments Lodgement received\n* `MANUAL_TRANSFER` - Manual Transfer to\n* `WITHDRAWAL` - Bank Transfer sent\n* `REVERSAL` - Credit Reversal\n* `DIRECT_DEBIT` - A direct debit.\n* `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.\n* `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.\n* `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)\n* `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)\n* `WITHDRAWAL_RETURNED` - Bank Transfer sent returned\n* `LODGEMENT_REVERSED` - Bank Transfer received returned\n* `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)\n* `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)\n* `CREATE_CARD` - The fee taken when a debit card is issued.\n* `ADD_ACCOUNT` - The fee taken when an account is created.\n* `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.       \n* `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin\n* `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin\n* `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC\n* `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC\n* `CARD_ECOMMERCE_DEBIT` - Card used on the internet\n* `CARD_ECOMMERCE_CREDIT` - Card used on the internet\n* `CARD_ATM_DEBIT` - Card used in an ATM\n* `CARD_ATM_CREDIT` - Card used in an ATM\n* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin\n* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC\n* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT\t` - Card used on the internet in non-processing currency\n* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency\n* `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency\n* `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency\n* `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed\n* `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed\n* `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed\n* `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed\n* `CARD_ECOMMERCE_DEBIT_REVERSAL\t` - Card used on the internet - reversed\n* `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed\n* `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed\n* `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed\n* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed\n* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.\n* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed\n* `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed\n',
                          example: 'WITHDRAWAL',
                        }),
                      yourRef: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals',
                          example: 'From John Smith',
                        }),
                    })
                    .openapi({ title: 'transaction', required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ title: 'cardTransactionsv1', required: [] }),
        },
      },
    },
  },
  deprecated: true,
})

export const getV1AccountsIcanTransactionsFilterRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{ican}/transactions/filter',
  tags: ['Transactions'],
  summary: 'Filtered list of transactions for an account (v1)',
  description:
    'Retrieve a filtered list of transactions against an account. Recommended to use the v3 endpoint instead.\n* `dateRangeFrom` - A millisecond epoch time specifying the date range start date.\n* `dateRangeTo` - A millisecond epoch time specifying the date range end date.\n* `searchKeyword` - Search term to filter by from the reference field (`myRef`).\n* `transactionTypes` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.\n* `offset` - The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.\n',
  operationId: 'getTransactionsFilteredById',
  request: {
    params: z.object({
      ican: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'ican',
            required: true,
            schema: {
              description: 'The ican of the account to retrieve',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The ican of the account to retrieve',
        }),
    }),
    query: z.object({
      dateRangeFrom: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'query',
            name: 'dateRangeFrom',
            required: true,
            schema: {
              description: 'A millisecond epoch time specifying the date range start date.',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'A millisecond epoch time specifying the date range start date.',
        }),
      dateRangeTo: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'query',
            name: 'dateRangeTo',
            required: true,
            schema: {
              description: 'A millisecond epoch time specifying the date range end date.',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'A millisecond epoch time specifying the date range end date.',
        }),
      searchKeyword: z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'searchKeyword',
            required: true,
            schema: {
              description: 'Search term to filter by from the reference field (`myRef`).',
              type: 'string',
            },
          },
          description: 'Search term to filter by from the reference field (`myRef`).',
        }),
      transactionTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            in: 'query',
            name: 'transactionTypes',
            required: true,
            schema: {
              description:
                'One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.',
              items: { type: 'string' },
              type: 'array',
            },
          },
          description:
            'One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.',
        }),
      offset: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            required: true,
            schema: {
              description:
                'The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.',
              format: 'int64',
              type: 'integer',
            },
          },
          description:
            'The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.',
        }),
    }),
  },
  responses: {
    200: {
      description:
        'An array of transaction objects for the account with a count (`total`) filtered by the specified query parameter.',
      content: {
        'application/json': {
          schema: z
            .object({
              dateRangeTo: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'milisecond timestamp of date range to value.',
                  example: 1547744156603,
                }),
              total: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The total number of card transactions in the list.',
                  example: 1,
                }),
              transactions: z
                .array(
                  z
                    .object({
                      amountAfterCharges: z
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
                            'Net amount lodged or taken from the account after fees and charges were applied.',
                          example: 5000,
                        }),
                      amountBeforeCharges: z
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
                            'Amount of the transaction before the fees and taxes were applied.',
                          example: 5000,
                        }),
                      balance: z
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
                            'the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).',
                          example: 8500,
                        }),
                      batchItemDetails: z
                        .object({
                          batchItemPublicUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for this item in the batch.',
                              example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                            }),
                          batchName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The optional name given to the batch at creation time.',
                              example: 'Payroll 2022-11',
                            }),
                          batchPublicUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for this batch.',
                              example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                            }),
                          jobNumber: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The optional job number given to the batch to link it to your own system.',
                              example: '2018-01-PR',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Details of the batch run if this transaction was part of a batch.',
                          title: 'batchItemDetails',
                          required: [],
                        }),
                      card: z
                        .object({
                          alias: z.string().exactOptional(),
                          cardId: z
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
                          embossBusinessName: z.string().exactOptional(),
                          embossCardName: z.string().exactOptional(),
                          expiryDate: z.iso.datetime({ offset: true }).exactOptional(),
                          maskedPan: z.string().exactOptional(),
                          provider: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Details of the card used (if applicable)',
                          title: 'relatedCard',
                          required: [],
                        }),
                      currency: z
                        .object({
                          code: z
                            .enum(['EUR', 'GBP'])
                            .exactOptional()
                            .openapi({
                              description:
                                'The three letter code for the currency - either `EUR` or `GBP`.',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the currency', example: 'Euro' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The currency.', title: 'currency', required: [] }),
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'Date of the transaction',
                          example: '2021-04-13T11:06:32.437Z',
                        }),
                      dateAcknowledged: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ example: '2021-04-13T11:06:32.437Z' }),
                      directDebitDetails: z
                        .object({
                          directDebitReference: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The direct debit reference.',
                              example: 'VODA-ABC453-1',
                            }),
                          directDebitUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for the direct debit payment',
                              example: '42de0705-e3f1-44fa-8c41-79973eb80eb2',
                            }),
                          mandateReference: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'the reference of the mandate',
                              example: 'CRZ-102190123',
                            }),
                          mandateUUid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for the mandate',
                              example: 'f171b143-e3eb-47de-85a6-1c1f1108c701',
                            }),
                          mandateUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for the mandate',
                              example: '28d627c3-1889-44c8-ae59-6f6b20239260',
                            }),
                          originatorAlias: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The Alias of the party who sets up the direct debit.',
                              example: 'Three',
                            }),
                          originatorLogoUrlLarge: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'URL pointing to a large version of the Originator Logo (if available)',
                              example:
                                'https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png',
                            }),
                          originatorLogoUrlSmall: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'URL pointing to a small version of the Originator Logo (if available)',
                              example:
                                'https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png',
                            }),
                          originatorName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The creator of the party who sets up the direct debit.',
                              example: 'Vodafone PLC',
                            }),
                          originatorReference: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Set by party who sets up the direct debit.',
                              example: 'VODA-123456',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Details of the direct debit (if applicable)',
                          title: 'directDebitDetails',
                          required: [],
                        }),
                      eventUuid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'An internal Fire reference for the transaction (UUID)',
                          example: '42de0705-e3f1-44fa-8c41-79973eb80eb2',
                        }),
                      feeAmount: z
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
                          description: 'The amount of the fee, if any.',
                          example: 0,
                        }),
                      fxTradeDetails: z
                        .object({
                          buyAmount: z
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
                              description: 'amount of buyCurrency being bought',
                              example: 359,
                            }),
                          buyCurrency: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'currency which is being bought',
                              example: 'GBP',
                            }),
                          fixedSide: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'type of trade - BUY or SELL',
                              example: 'SELL',
                            }),
                          provider: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The FX provider used to make the trade.',
                              example: 'TCC',
                            }),
                          rate4d: z
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
                              description: 'exchange rate',
                              example: 7180,
                            }),
                          sellAmount: z
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
                              description: 'amount of sellCurrency being sold',
                              example: 500,
                            }),
                          sellCurrency: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'currency which is being sold',
                              example: 'EUR',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Details of the FX trade (if applicable)',
                          title: 'fxTrade',
                          required: [],
                        }),
                      ican: z
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
                            'identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version.',
                          example: 1951,
                        }),
                      myRef: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The comment/reference on the transaction',
                          example: 'Transfer to main account',
                        }),
                      paymentRequestPublicCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '(FOP payments only) The FOP Payment Code that was used to make this payment.',
                          example: '1abcdefg',
                        }),
                      proprietarySchemeDetails: z
                        .array(
                          z
                            .object({
                              data: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'the scheme proprietary data - key pairs separated by | and key/values separated by ^',
                                  example:
                                    'remittanceInfoUnstructured^FIRE440286865OD1|instructionId^O223151336499079',
                                }),
                              type: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc.',
                                  example: 'SCT',
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Extra details about the transaction based on the scheme used to make the payment.',
                          title: 'proprietarySchemeDetails',
                        }),
                      refId: z
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
                          description: 'The id of the transaction.',
                          example: 26774,
                        }),
                      relatedParty: z
                        .xor([
                          z
                            .object({
                              account: z
                                .object({
                                  accountNumber: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Account Number of the account.',
                                      example: '11111111',
                                    }),
                                  alias: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the name the user gives to the account to help them identify it.',
                                      example: 'Main Account',
                                    }),
                                  bic: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the BIC of the account (provided if currency is EUR).',
                                      example: 'CPAYIE2D',
                                    }),
                                  iban: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the IBAN of the account (provided if currency is EUR).',
                                      example: 'IE54CPAY99119911111111',
                                    }),
                                  id: z
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
                                        'identifier for the fire.com account (assigned by fire.com)',
                                      example: 42,
                                    }),
                                  nsc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Sort Code of the account.',
                                      example: '232221',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.literal('FIRE_ACCOUNT').exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyFireAccount', required: [] }),
                          z
                            .object({
                              account: z
                                .object({
                                  accountNumber: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Account Number of the account.',
                                      example: '11111111',
                                    }),
                                  alias: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the name the user gives to the account to help them identify it.',
                                      example: 'Main Account',
                                    }),
                                  bic: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the BIC of the account (provided if currency is EUR).',
                                      example: 'CPAYIE2D',
                                    }),
                                  iban: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the IBAN of the account (provided if currency is EUR).',
                                      example: 'IE54CPAY99119911111111',
                                    }),
                                  id: z
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
                                  nsc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Sort Code of the account.',
                                      example: '232221',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.literal('EXTERNAL_ACCOUNT').exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyExternalAccount', required: [] }),
                          z
                            .object({
                              account: z
                                .object({
                                  accountNumber: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The account number of the Withdrawl account in reference',
                                      example: '00000000',
                                    }),
                                  alias: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The Alias name of the Withdrawl account in reference',
                                      example: 'Smyth and Co.',
                                    }),
                                  bic: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'The BIC of the Withdrawl account in reference',
                                      example: 'CPAYIE2D',
                                    }),
                                  iban: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'The BIC of the Withdrawl account in reference',
                                      example: 'IE76CPAY99119900000000',
                                    }),
                                  id: z
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
                                        'The ID number of the Withdrawl account in reference',
                                      example: 123,
                                    }),
                                  nsc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        '(Conditional) Provide this field if using Mode 2 and the payee account is in GBP.',
                                      example: '991199',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.literal('WITHDRAWAL_ACCOUNT').exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyPayee', required: [] }),
                          z
                            .object({
                              cardMerchant: z
                                .object({
                                  acquirerIdDe32: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 6011329 }),
                                  additionalAmtDe54: z.string().exactOptional(),
                                  additionalDataDe124: z.string().exactOptional(),
                                  additionalDataDe48: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '010X610500000' }),
                                  authCodeDe38: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '177449' }),
                                  authorisedByGps: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'N' }),
                                  avsResult: z.string().exactOptional().openapi({ example: 'N' }),
                                  billAmt: z
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
                                    .openapi({ type: 'integer', format: 'int64', example: -1000 }),
                                  billCcy: z.string().exactOptional().openapi({ example: '978' }),
                                  expiryDate: z.string().exactOptional(),
                                  mccCode: z.string().exactOptional().openapi({ example: '5521' }),
                                  merchIdDe42: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 13152429 }),
                                  merchNameDe43: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'ABC Coffee Shop' }),
                                  mtId: z.string().exactOptional().openapi({ example: '0100' }),
                                  posDataDe22: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '051' }),
                                  posDataDe61: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 1000030037299999 }),
                                  posTermnlDe41: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '80266721' }),
                                  procCode: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '000000' }),
                                  recordDataDe120: z.string().exactOptional(),
                                  respCodeDe39: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '00' }),
                                  retRefNoDe37: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 10900006720 }),
                                  statusCode: z.string().exactOptional().openapi({ example: '00' }),
                                  token: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '976307363' }),
                                  txnAmt4d: z
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
                                    .openapi({ type: 'integer', format: 'int64', example: 1000 }),
                                  txnCcy: z.string().exactOptional().openapi({ example: '978' }),
                                  txnCtry: z.string().exactOptional().openapi({ example: 'IRL' }),
                                  txnDesc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'ABC Coffee Shop' }),
                                  txnStatCode: z.string().exactOptional().openapi({ example: 'A' }),
                                  txnType: z.string().exactOptional().openapi({ example: 'A' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.enum(['CARD_MERCHANT', 'CARD_ATM']).exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyCardPayment', required: [] }),
                        ])
                        .exactOptional()
                        .openapi({
                          description:
                            'Details of the related third party involved in the transaction.',
                          title: 'relatedParty',
                        }),
                      taxAmount: z
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
                            'The amount of the tax, if any (e.g. Stamp duty for ATM transactions)',
                          example: 0,
                        }),
                      txnId: z
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
                            'The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction.',
                          example: 30157,
                        }),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The type of the transaction:\n* `LODGEMENT` - Bank Transfer received\n* `PIS_LODGEMENT` - Fire Open Payments Lodgement received\n* `MANUAL_TRANSFER` - Manual Transfer to\n* `WITHDRAWAL` - Bank Transfer sent\n* `REVERSAL` - Credit Reversal\n* `DIRECT_DEBIT` - A direct debit.\n* `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.\n* `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.\n* `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)\n* `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)\n* `WITHDRAWAL_RETURNED` - Bank Transfer sent returned\n* `LODGEMENT_REVERSED` - Bank Transfer received returned\n* `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)\n* `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)\n* `CREATE_CARD` - The fee taken when a debit card is issued.\n* `ADD_ACCOUNT` - The fee taken when an account is created.\n* `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.       \n* `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin\n* `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin\n* `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC\n* `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC\n* `CARD_ECOMMERCE_DEBIT` - Card used on the internet\n* `CARD_ECOMMERCE_CREDIT` - Card used on the internet\n* `CARD_ATM_DEBIT` - Card used in an ATM\n* `CARD_ATM_CREDIT` - Card used in an ATM\n* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin\n* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC\n* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT\t` - Card used on the internet in non-processing currency\n* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency\n* `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency\n* `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency\n* `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed\n* `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed\n* `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed\n* `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed\n* `CARD_ECOMMERCE_DEBIT_REVERSAL\t` - Card used on the internet - reversed\n* `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed\n* `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed\n* `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed\n* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed\n* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.\n* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed\n* `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed\n',
                          example: 'WITHDRAWAL',
                        }),
                      yourRef: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals',
                          example: 'From John Smith',
                        }),
                    })
                    .openapi({ title: 'transaction', required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ title: 'cardTransactionsv1', required: [] }),
        },
      },
    },
  },
  deprecated: true,
})

export const postV1AppsRoute = createRoute({
  method: 'post',
  path: '/v1/apps',
  tags: ['API'],
  summary: 'Create a new API Application',
  description: 'Create a new API Application with specified permissions',
  operationId: 'createApiApplication',
  request: {
    body: {
      description: 'Details of the new API Application',
      content: {
        'application/json': {
          schema: z
            .object({
              applicationName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A name for the API Application to help you identify it',
                  example: 'Batch Processing API',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether or not this API Application can be used',
                  example: true,
                }),
              expiry: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The date that this API Application can no longer be used.',
                  example: '2019-08-22T07:48:56.460Z',
                }),
              ican: z
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
                    'The ICAN of one of your Fire accounts. Restrict this API Application to a certan account.',
                }),
              numberOfPayeeApprovalsRequired: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of approvals required to create a payee in a batch',
                  example: 1,
                }),
              numberOfPaymentApprovalsRequired: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of approvals required to process a payment in a batch',
                  example: 1,
                }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The list of permissions required',
                  example: ['PERM_BUSINESS_POST_PAYMENT_REQUEST', 'PERM_BUSINESS_GET_ASPSPS'],
                }),
            })
            .openapi({ title: 'newApiApplication', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'API Application created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              applicationId: z
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
                  description: 'The ID of the API Application',
                  example: 45345,
                }),
              clientId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The Client ID of the new API Application',
                  example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
                }),
              clientKey: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The Client Key of the new API Application',
                  example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
                }),
              enabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Whether or not this API Application can be used',
                  example: true,
                }),
              expiry: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The date that this API Application can no longer be used.',
                  example: '2019-08-22T07:48:56.460Z',
                }),
              ican: z
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
                    'The ICAN of one of your Fire accounts. Restrict this API Application to a certan account.',
                }),
              numberOfPayeeApprovalsRequired: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of approvals required to create a payee in a batch',
                  example: 1,
                }),
              numberOfPaymentApprovalsRequired: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of approvals required to process a payment in a batch',
                  example: 1,
                }),
              refreshToken: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The Refresh Token of the new API Application',
                  example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
                }),
            })
            .openapi({ title: 'apiApplication', required: [] }),
        },
      },
    },
  },
})

export const postV1AppsAccesstokensRoute = createRoute({
  method: 'post',
  path: '/v1/apps/accesstokens',
  tags: ['Authentication'],
  summary: 'Authenticate with the API.',
  description:
    'Access to the API is by Bearer Tokens. The process is somewhat similar to OAuth2.0, but with some changes to improve security.\n\n  1. You must first log into the firework online application and create a new Application in the Profile > API page. (You will need your PIN digits and 2-Factor Authentication device).\n  \n  2. Give your application a Name and select the scope/permissions you need the application to have (more on Scopes below).\n  \n  3. You will be provided with three pieces of information - the App Refresh Token, Client ID and Client Key. You need to take note of the Client Key when it is displayed - it will not be shown again.\n  \n  \n  You now use these pieces of data to retrieve a short-term Access Token which you can use to access the API. The Access Token expires within a relatively short time, so even if it is compromised, the attacker will not have long to use it. The Client Key is the most important piece of information to keep secret. This should only ever be stored on a backend server, and never in a front end client or mobile app.\n\n\n  **If you ever accidentally reveal the Client Key (or accidentally commit it to Github for instance) it is vital that you log into firework online and delete/recreate the App Tokens as soon as possible. Anyone who has these three pieces of data can access the API to view your data and set up payments from your account (depending on the scope of the tokens).**\n  \n  \n  Once you have the access token, pass it as a header for every call, like so:\n\n  `Authorization: Bearer $ACCESS_TOKEN`\n\n  Whenever it expires, create a new nonce and get a new access token again.\n',
  operationId: 'authenticate',
  request: {
    body: {
      description: 'Authentication data',
      content: {
        'application/json': {
          schema: z
            .object({
              clientId: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The Client ID for this API Application',
                  example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
                }),
              clientSecret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The SHA256 hash of the nonce above and the app’s Client Key. The Client Key will only be shown to you when you create the app, so don’t forget to save it somewhere safe. SECRET=( `/bin/echo -n $NONCE$CLIENT_KEY | sha256sum` ).',
                  example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
                }),
              grantType: z
                .literal('AccessToken')
                .exactOptional()
                .openapi({
                  description:
                    'Always `AccessToken`. (This will change to `refresh_token` in a future release.)',
                }),
              nonce: z
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
                    'A random non-repeating number used as a salt for the `clientSecret` below. The simplest nonce is a unix time.',
                  example: 728345638475,
                }),
              refreshToken: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The Refresh Token for this API Application',
                  example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
                }),
            })
            .openapi({ title: 'authentication', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully authenticated',
      content: {
        'application/json': {
          schema: z
            .object({
              accessToken: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The App Bearer Access Token you can use in further API calls.',
                  example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
                }),
              apiApplicationId: z
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
                  description: 'The ID of the application you are using.',
                  example: 433,
                }),
              businessId: z
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
                  description: 'The business ID for the business.',
                  example: 248,
                }),
              expiry: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The expiry date and time for this token (ISO-8601).',
                  example: '2020-10-22T07:48:56.460Z',
                }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    'The permissions assigned to the Access Token as an array of strings. This provides information on what API access it is allowed. See the section on Scope below.',
                  example: [
                    'PERM_BUSINESSES_GET_ACCOUNTS',
                    'PERM_BUSINESSES_GET_ACCOUNT_TRANSACTIONS',
                  ],
                }),
            })
            .openapi({ title: 'accessToken', required: [] }),
        },
      },
    },
  },
  security: [],
})

export const getV1AspspsRoute = createRoute({
  method: 'get',
  path: '/v1/aspsps',
  tags: ['Open Banking'],
  summary: 'Get list of ASPSPs / Banks',
  description:
    'Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.\n***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***\n',
  operationId: 'getListOfAspsps',
  request: {
    query: z.object({
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The three letter code for the currency - either `EUR` or `GBP`. Use this to filter the list for banks that can be used to pay in a certain currency.',
            example: 'EUR',
            in: 'query',
            name: 'currency',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of ASPSPs the customers can use to pay a payment.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              aspsps: z
                .array(
                  z
                    .object({
                      alias: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The name of the ASPSP / bank.',
                          example: 'Demo Bank',
                        }),
                      aspspUuid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The UUID associated with the ASPSP / bank.',
                          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
                        }),
                      country: z
                        .object({
                          code: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The 2-letter code for the country - e.g. `IE`, `GP`...',
                              example: 'GB',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The name of the country',
                              example: 'United Kingdom',
                            }),
                        })
                        .exactOptional()
                        .openapi({ title: 'country', required: [] }),
                      currency: z
                        .object({
                          code: z
                            .enum(['EUR', 'GBP'])
                            .exactOptional()
                            .openapi({
                              description:
                                'The three letter code for the currency - either `EUR` or `GBP`.',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the currency', example: 'Euro' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The currency.', title: 'currency', required: [] }),
                      dateCreated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'The date the ASPSP / bank was created.',
                          example: '2019-08-22T07:48:56.460Z',
                        }),
                      lastUpdated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'The date the ASPSP / bank was last updated.',
                          example: '2019-08-22T07:48:56.460Z',
                        }),
                      logoUrl: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: "A link to the ASPSP / bank's logo in SVG format.",
                          example: 'https://assets.fire.com/pisp/demo.svg',
                        }),
                    })
                    .openapi({ title: 'aspsp', required: [] }),
                )
                .exactOptional(),
              total: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of ASPSPs in the list.', example: 10 }),
            })
            .openapi({ title: 'aspsps', required: [] }),
        },
      },
    },
  },
})

export const getV1BatchesRoute = createRoute({
  method: 'get',
  path: '/v1/batches',
  tags: ['Payment Batches'],
  summary: 'List batches',
  description: 'Returns the list of batch with the specified types and statuses.\n',
  operationId: 'getBatches',
  request: {
    query: z.object({
      batchStatus: z
        .enum(['SUBMITTED', 'REMOVED', 'SUCCEEDED', 'FAILED'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'batchStatus',
            schema: {
              description: 'The status of the batch if internal transfer.',
              enum: ['SUBMITTED', 'REMOVED', 'SUCCEEDED', 'FAILED'],
              example: 'SUBMITTED',
              type: 'string',
            },
            required: false,
          },
          description: 'The status of the batch if internal transfer.',
          example: 'SUBMITTED',
        }),
      batchTypes: z
        .enum(['INTERNAL_TRANSFER', 'BANK_TRANSFER', 'NEW_PAYEE'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'batchTypes',
            schema: {
              description: 'The type of the batch. Can be one of the 3 listed enums.',
              enum: ['INTERNAL_TRANSFER', 'BANK_TRANSFER', 'NEW_PAYEE'],
              example: 'INTERNAL_TRANSFER',
              type: 'string',
            },
            required: false,
          },
          description: 'The type of the batch. Can be one of the 3 listed enums.',
          example: 'INTERNAL_TRANSFER',
        }),
      orderBy: z
        .literal('DATE')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'orderBy',
            schema: {
              description: 'You can order the batches by date. No other options at this time',
              enum: ['DATE'],
              example: 'DATE',
              type: 'string',
            },
            required: false,
          },
          description: 'You can order the batches by date. No other options at this time',
          example: 'DATE',
        }),
      order: z
        .enum(['DESC', 'ASC'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            schema: {
              description: 'You can order the batches by ascending or descending order.',
              enum: ['DESC', 'ASC'],
              example: 'DESC',
              type: 'string',
            },
            required: false,
          },
          description: 'You can order the batches by ascending or descending order.',
          example: 'DESC',
        }),
    }),
  },
  responses: {
    200: {
      description: 'List all batches.',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .array(
                  z
                    .object({
                      amount: z
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
                          description: 'The amount of funds to send. In cent or pence',
                          example: 10000,
                        }),
                      amountAfterCharges: z
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
                            'The amount of the transfer after fees and taxes. in pence or cent.',
                          example: 10000,
                        }),
                      batchItemUuid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'A UUID for this item.',
                          example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                        }),
                      dateCreated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z',
                          example: '2021-04-04T10:48:53.540Z',
                        }),
                      feeAmount: z
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
                            'The fee charged by fire.com for the payment. In pence or cent.',
                          example: 0,
                        }),
                      icanFrom: z
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
                          description: 'The Fire account ID of the source account.',
                          example: 2150,
                        }),
                      icanTo: z
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
                            'The Fire account ID for the fire.com account the funds are sent to.',
                          example: 1002,
                        }),
                      lastUpdated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z',
                          example: '2021-04-04T10:48:53.540Z',
                        }),
                      ref: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The reference on the transaction.',
                          example: 'Testing a transfer via batch',
                        }),
                      refId: z
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
                            'The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint.',
                          example: 123782,
                        }),
                      result: z
                        .object({
                          code: z
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
                            .openapi({ type: 'integer', format: 'int64', example: 500001 }),
                          message: z.string().exactOptional().openapi({ example: 'SUCCESS' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'The outcome of the attempted transaction.',
                          required: [],
                        }),
                      status: z
                        .enum(['SUBMITTED', 'REMOVED', 'SUCCEEDED', 'FAILED'])
                        .exactOptional()
                        .openapi({
                          description: 'status of the batch if internal trasnfer',
                          example: 'SUCCEEDED',
                        }),
                      taxAmount: z
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
                            'Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent.',
                          example: 0,
                        }),
                    })
                    .openapi({ title: 'batchItem', required: [] }),
                )
                .exactOptional(),
              total: z
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
                  description: 'total number of batches returned',
                  example: 1,
                }),
            })
            .openapi({ title: 'batchItems', required: [] }),
        },
      },
    },
  },
})

export const postV1BatchesRoute = createRoute({
  method: 'post',
  path: '/v1/batches',
  tags: ['Payment Batches'],
  summary: 'Create a new batch of payments',
  description:
    'The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.\n\nFor added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.\n\n\nThe process is as follows:\n\n**1.**Create a new batch\n\n**2.**Add payments to the batch\n\n**3.**Submit the batch for approval\n\nOnce the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.\n\n**Batch Life Cycle Events**\n\nA batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.\n\nThe following events are triggered during a batch:\n\n**batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.\n\n**batch.item-added:** Details of the item added to the batch\n\n**batch.item-removed:** Details of the item removed from the batch\n\n**batch.cancelled:** Notifies that the batch was cancelled.\n\n**batch.submitted:** Notifes that the batch was submitted\n\n**batch.approved:** Notifies that the batch was approved.\n\n**batch.rejected:** Notifies that the batch was rejected.\n\n**batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)\n\n**batch.completed:** Notifies that the batch completed successfully. Includes a summary.\n\nPush notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.\n\nThis is the first step in creating a batch payment.\n',
  operationId: 'createBatchPayment',
  request: {
    body: {
      description: 'Details of the batch payment',
      content: {
        'application/json': {
          schema: z
            .object({
              batchName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'An optional name you give to the batch at creation time.',
                  example: 'January 2018 Payroll',
                }),
              callbackUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional POST URL that all events for this batch will be sent to.',
                  example: 'https://my.webserver.com/cb/payroll',
                }),
              currency: z
                .string()
                .exactOptional()
                .openapi({ description: 'GBP or EUR', example: 'EUR' }),
              jobNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional job number you can give to the batch to help link it to your own system.',
                  example: '2022-01-PR',
                }),
              type: z
                .enum(['BANK_TRANSFER', 'INTERNAL_TRANSFER'])
                .exactOptional()
                .openapi({ description: 'The type of the batch - can be one of the listed 3' }),
            })
            .openapi({ title: 'newBatch', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Batch created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              batchUuid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A UUID for this item.',
                  example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                }),
            })
            .openapi({ title: 'newBatchResponse', required: [] }),
        },
      },
    },
  },
})

export const getV1BatchesBatchUuidRoute = createRoute({
  method: 'get',
  path: '/v1/batches/{batchUuid}',
  tags: ['Payment Batches'],
  summary: 'Get details of a single Batch',
  description: 'Returns the details of the batch specified in the API endpoint - {batchUuid}.',
  operationId: 'getDetailsSingleBatch',
  request: {
    params: z.object({
      batchUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'batchUuid',
            required: true,
            schema: {
              description: 'The uuid of the batch.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the batch.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the details of the batch specified in the API endpoint - {batchUuid}.',
      content: {
        'application/json': {
          schema: z
            .object({
              batchName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'An optional name you give to the batch at creation time',
                  example: 'January 2018 Payroll',
                }),
              batchUuid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A UUID for this item.',
                  example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                }),
              callbackUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional POST URL that all events for this batch will be sent to.',
                  example: 'https://my.webserver.com/cb/payroll',
                }),
              currency: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'All payments in the batch must be the same currency - either EUR or GBP',
                  example: 'EUR',
                }),
              dateCreated: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z',
                  example: '2021-04-04T10:48:53.540Z',
                }),
              jobNumber: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'An optional job number you can give to the batch to help link it to your own system.',
                  example: '2018-01-PR',
                }),
              lastUpdated: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z',
                  example: '2021-04-04T10:48:53.540Z',
                }),
              numberOfItemsFailed: z
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
                    'Once processed, a count of the number of items that didn’t process successfully.',
                  example: 0,
                }),
              numberOfItemsSubmitted: z
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
                  description: 'A count of the number of items in the batch',
                  example: 1,
                }),
              numberOfItemsSucceeded: z
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
                    'Once processed, a count of the number of items that processed successfully.',
                  example: 1,
                }),
              sourceName: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A string describing where the batch originated - for instance the name of the API token that was used, or showing that the batch was automatically created by fire.com (in the case of a new payee batch).',
                  example: 'Payment API',
                }),
              status: z
                .enum([
                  'PENDING_APPROVAL',
                  'REJECTED',
                  'COMPLETE',
                  'OPEN',
                  'CANCELLED',
                  'PENDING_PARENT_BATCH_APPROVAL',
                  'READY_FOR_PROCESSING',
                  'PROCESSING',
                ])
                .exactOptional()
                .openapi({ description: 'status of the batch object', example: 'COMPLETE' }),
              type: z
                .enum(['INTERNAL_TRANSFER', 'BANK_TRANSFER', 'NEW_PAYEE'])
                .exactOptional()
                .openapi({ description: 'The type of the batch - can be one of the listed 3' }),
              valueOfItemsFailed: z
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
                    'Once processed, a sum of the value of items that didn’t process successfully. Specified in pence or cent.',
                  example: 0,
                }),
              valueOfItemsSubmitted: z
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
                    'A sum of the value of items in the batch. Specified in pence or cent.',
                  example: 10000,
                }),
              valueOfItemsSucceeded: z
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
                    'Once processed, a sum of the value of items that processed successfully. Specified in pence or cent.',
                  example: 10000,
                }),
            })
            .openapi({ title: 'batch', required: [] }),
        },
      },
    },
  },
})

export const putV1BatchesBatchUuidRoute = createRoute({
  method: 'put',
  path: '/v1/batches/{batchUuid}',
  tags: ['Payment Batches'],
  summary: 'Submit a batch for approval',
  description:
    'Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.\n\nYou can only submit a batch while it is in the OPEN state.\n',
  operationId: 'submitBatch',
  request: {
    params: z.object({
      batchUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'batchUuid',
            required: true,
            schema: {
              description: 'The uuid of the batch.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the batch.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: {
    204: {
      description:
        'No body is returned - a HTTP 204 No Content response signifies the call was successful.',
    },
  },
})

export const deleteV1BatchesBatchUuidRoute = createRoute({
  method: 'delete',
  path: '/v1/batches/{batchUuid}',
  tags: ['Payment Batches'],
  summary: 'Cancel a batch',
  description:
    'Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).',
  operationId: 'cancelBatchPayment',
  request: {
    params: z.object({
      batchUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'batchUuid',
            required: true,
            schema: {
              description: 'The uuid of the batch.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the batch.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: { 200: { description: 'Batch payment deleted successfully.' } },
})

export const getV1BatchesBatchUuidApprovalsRoute = createRoute({
  method: 'get',
  path: '/v1/batches/{batchUuid}/approvals',
  tags: ['Payment Batches'],
  summary: 'List Approvers for a Batch',
  description: 'Returns a list of approvers for this batch.',
  operationId: 'getListofApproversForBatch',
  request: {
    params: z.object({
      batchUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'batchUuid',
            required: true,
            schema: {
              description: 'The uuid of the batch.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the batch.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of approvers for this batch.',
      content: {
        'application/json': {
          schema: z
            .object({
              approvals: z
                .array(
                  z
                    .object({
                      emailAddress: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'User email address',
                          example: 'jane.doe@example.com',
                        }),
                      firstName: z.string().exactOptional().openapi({ example: 'Jane' }),
                      lastName: z.string().exactOptional().openapi({ example: 'Doe' }),
                      lastUpdated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z',
                          example: '2021-04-04T10:48:53.540Z',
                        }),
                      mobileNumber: z.string().exactOptional().openapi({ example: 353871234567 }),
                      status: z.string().exactOptional().openapi({ example: 'PENDING_APPROVAL' }),
                      userId: z
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
                          description: 'User id assigned by fire.com',
                          example: 3138,
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ title: 'batchApprovers', required: [] }),
        },
      },
    },
  },
})

export const getV1BatchesBatchUuidBanktransfersRoute = createRoute({
  method: 'get',
  path: '/v1/batches/{batchUuid}/banktransfers',
  tags: ['Payment Batches'],
  summary: 'List items in a Batch',
  description: 'Returns a paginated list of items in the specified batch.',
  operationId: 'getItemsBatchBankTransfer',
  request: {
    params: z.object({
      batchUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'batchUuid',
            required: true,
            schema: {
              description: 'The uuid of the batch.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the batch.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
    query: z.object({
      offset: z
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
            in: 'query',
            name: 'offset',
            schema: {
              description:
                'The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.',
              example: '0',
              format: 'int64',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.',
          example: '0',
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
            in: 'query',
            name: 'limit',
            schema: {
              description: 'The number of records to return. Defaults to 10 - max is 200.',
              example: '10',
              format: 'int64',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of records to return. Defaults to 10 - max is 200.',
          example: '10',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A fire.com list object of Batch Items (Internal transfers or Bank transfers).',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .array(
                  z
                    .object({
                      amount: z
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
                          description: 'The amount of funds to send. In cent or pence',
                          example: 10000,
                        }),
                      amountAfterCharges: z
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
                            'The amount of the transfer after fees and taxes. in pence or cent.',
                          example: 10000,
                        }),
                      batchItemUuid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'A UUID for this item.',
                          example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                        }),
                      dateCreated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z',
                          example: '2021-04-04T10:48:53.540Z',
                        }),
                      feeAmount: z
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
                            'The fee charged by fire.com for the payment. In pence or cent.',
                          example: 0,
                        }),
                      icanFrom: z
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
                          description: 'The Fire account ID of the source account.',
                          example: 2150,
                        }),
                      icanTo: z
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
                            'The Fire account ID for the fire.com account the funds are sent to.',
                          example: 1002,
                        }),
                      lastUpdated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z',
                          example: '2021-04-04T10:48:53.540Z',
                        }),
                      ref: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The reference on the transaction.',
                          example: 'Testing a transfer via batch',
                        }),
                      refId: z
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
                            'The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint.',
                          example: 123782,
                        }),
                      result: z
                        .object({
                          code: z
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
                            .openapi({ type: 'integer', format: 'int64', example: 500001 }),
                          message: z.string().exactOptional().openapi({ example: 'SUCCESS' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'The outcome of the attempted transaction.',
                          required: [],
                        }),
                      status: z
                        .enum(['SUBMITTED', 'REMOVED', 'SUCCEEDED', 'FAILED'])
                        .exactOptional()
                        .openapi({
                          description: 'status of the batch if internal trasnfer',
                          example: 'SUCCEEDED',
                        }),
                      taxAmount: z
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
                            'Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent.',
                          example: 0,
                        }),
                    })
                    .openapi({ title: 'batchItem', required: [] }),
                )
                .exactOptional(),
              total: z
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
                  description: 'total number of batches returned',
                  example: 1,
                }),
            })
            .openapi({ title: 'batchItems', required: [] }),
        },
      },
    },
  },
})

export const postV1BatchesBatchUuidBanktransfersRoute = createRoute({
  method: 'post',
  path: '/v1/batches/{batchUuid}/banktransfers',
  tags: ['Payment Batches'],
  summary: 'Add a bank transfer payment to the batch.',
  description:
    'There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).\n\n**Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.\n\n**Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.\n',
  operationId: 'addBankTransferBatchPayment',
  request: {
    params: z.object({
      batchUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'batchUuid',
            required: true,
            schema: {
              description: 'The uuid of the batch.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the batch.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
    body: {
      description: 'Details of **Mode 1** & **Mode 2**.',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                amount: z
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
                    description: 'The value of the transaction',
                    example: 500,
                  }),
                destAccountHolderName: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The destination account holder name',
                    example: 'John Smith',
                  }),
                destAccountNumber: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The destination Account Number if a GBP bank transfer',
                    example: '12345678',
                  }),
                destIban: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The destination IBAN if a Euro Bank transfer',
                    example: 'IE00AIBK93123412341234',
                  }),
                destNsc: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The destination Nsc if a GBP bank transfer',
                    example: '123456',
                  }),
                icanFrom: z
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
                      'The Fire account ID for the fire.com account the funds are taken from.',
                    example: 2001,
                  }),
                myRef: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The reference on the transaction for your records - not shown to the beneficiary.',
                    example: 'Payment to John Smith for Consultancy in device.',
                  }),
                payeeType: z
                  .literal('ACCOUNT_DETAILS')
                  .exactOptional()
                  .openapi({
                    description:
                      'Use ACCOUNT_DETAILS if you are providing account numbers/sort codes/IBANs (Mode 2). Specify the account details in the destIban, destAccountHolderName, destNsc or destAccountNumber fields as appropriate.',
                    example: 'ACCOUNT_DETAILS',
                  }),
                yourRef: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The reference on the transaction - displayed on the beneficiary bank statement.',
                    example: 'ACME LTD - INV 23434',
                  }),
              })
              .openapi({ title: 'batchItemBankTransferMode2', required: [] }),
            z
              .object({
                amount: z
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
                    description: 'The value of the transaction',
                    example: 500,
                  }),
                icanFrom: z
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
                      'The Fire account ID for the fire.com account the funds are taken from.',
                    example: 2001,
                  }),
                myRef: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The reference on the transaction for your records - not shown to the beneficiary.',
                    example: 'Payment to John Smith for Consultancy in device.',
                  }),
                payeeId: z
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
                    description: 'The ID of the existing or automatically created payee',
                    example: 15002,
                  }),
                payeeType: z
                  .literal('PAYEE_ID')
                  .exactOptional()
                  .openapi({
                    description:
                      'Use PAYEE_ID if you are paying existing approved payees (Mode 1).',
                    example: 'PAYEE_ID',
                  }),
                yourRef: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The reference on the transaction - displayed on the beneficiary bank statement.',
                    example: 'ACME LTD - INV 23434',
                  }),
              })
              .openapi({ title: 'batchItemBankTransferMode1', required: [] }),
          ]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Batch payment added successfully. **Note*** Please use batchUuid when submitting a batch, not batchItemUuid.',
      content: {
        'application/json': {
          schema: z
            .object({
              batchItemUuid: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch.',
                  example: 'fba4a76a-ce51-4fc1-b562-98ec01299e4d',
                }),
            })
            .openapi({ title: 'newBatchItemResponse', required: [] }),
        },
      },
    },
  },
})

export const deleteV1BatchesBatchUuidBanktransfersItemUuidRoute = createRoute({
  method: 'delete',
  path: '/v1/batches/{batchUuid}/banktransfers/{itemUuid}',
  tags: ['Payment Batches'],
  summary: 'Remove a Payment from the Batch (Bank Transfers)',
  description:
    'Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).',
  operationId: 'deleteBankTransferBatchPayment',
  request: {
    params: z.object({
      batchUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'batchUuid',
            required: true,
            schema: {
              description: 'The uuid of the batch.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the batch.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
      itemUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'itemUuid',
            required: true,
            schema: { description: 'The uuid of the item to remove.', type: 'string' },
          },
          description: 'The uuid of the item to remove.',
        }),
    }),
  },
  responses: { 200: { description: 'Batch payment deleted successfully.' } },
})

export const getV1BatchesBatchUuidInternaltransfersRoute = createRoute({
  method: 'get',
  path: '/v1/batches/{batchUuid}/internaltransfers',
  tags: ['Payment Batches'],
  summary: 'List items in a Batch',
  description: 'Returns a paginated list of items in the specified batch.',
  operationId: 'getItemsBatchInternalTrasnfer',
  request: {
    params: z.object({
      batchUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'batchUuid',
            required: true,
            schema: {
              description: 'The uuid of the batch.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the batch.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
    query: z.object({
      offset: z
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
            in: 'query',
            name: 'offset',
            schema: {
              description:
                'The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.',
              example: '0',
              format: 'int64',
              type: 'integer',
            },
            required: false,
          },
          description:
            'The page offset. Defaults to 0. This is the record number that the returned list will start at. E.g. offset = 40 and limit = 20 will return records 40 to 59.',
          example: '0',
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
            in: 'query',
            name: 'limit',
            schema: {
              description: 'The number of records to return. Defaults to 10 - max is 200.',
              example: '10',
              format: 'int64',
              type: 'integer',
            },
            required: false,
          },
          description: 'The number of records to return. Defaults to 10 - max is 200.',
          example: '10',
        }),
    }),
  },
  responses: {
    200: {
      description: 'A fire.com list object of Batch Items (Internal transfers or Bank transfers).',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z
                .array(
                  z
                    .object({
                      amount: z
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
                          description: 'The amount of funds to send. In cent or pence',
                          example: 10000,
                        }),
                      amountAfterCharges: z
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
                            'The amount of the transfer after fees and taxes. in pence or cent.',
                          example: 10000,
                        }),
                      batchItemUuid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'A UUID for this item.',
                          example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                        }),
                      dateCreated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z',
                          example: '2021-04-04T10:48:53.540Z',
                        }),
                      feeAmount: z
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
                            'The fee charged by fire.com for the payment. In pence or cent.',
                          example: 0,
                        }),
                      icanFrom: z
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
                          description: 'The Fire account ID of the source account.',
                          example: 2150,
                        }),
                      icanTo: z
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
                            'The Fire account ID for the fire.com account the funds are sent to.',
                          example: 1002,
                        }),
                      lastUpdated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z',
                          example: '2021-04-04T10:48:53.540Z',
                        }),
                      ref: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The reference on the transaction.',
                          example: 'Testing a transfer via batch',
                        }),
                      refId: z
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
                            'The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint.',
                          example: 123782,
                        }),
                      result: z
                        .object({
                          code: z
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
                            .openapi({ type: 'integer', format: 'int64', example: 500001 }),
                          message: z.string().exactOptional().openapi({ example: 'SUCCESS' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'The outcome of the attempted transaction.',
                          required: [],
                        }),
                      status: z
                        .enum(['SUBMITTED', 'REMOVED', 'SUCCEEDED', 'FAILED'])
                        .exactOptional()
                        .openapi({
                          description: 'status of the batch if internal trasnfer',
                          example: 'SUCCEEDED',
                        }),
                      taxAmount: z
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
                            'Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent.',
                          example: 0,
                        }),
                    })
                    .openapi({ title: 'batchItem', required: [] }),
                )
                .exactOptional(),
              total: z
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
                  description: 'total number of batches returned',
                  example: 1,
                }),
            })
            .openapi({ title: 'batchItems', required: [] }),
        },
      },
    },
  },
})

export const postV1BatchesBatchUuidInternaltransfersRoute = createRoute({
  method: 'post',
  path: '/v1/batches/{batchUuid}/internaltransfers',
  tags: ['Payment Batches'],
  summary: 'Add an internal transfer payment to the batch',
  description: 'Simply specify the source account, destination account, amount and a reference.',
  operationId: 'addInternalTransferBatchPayment',
  request: {
    params: z.object({
      batchUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'batchUuid',
            required: true,
            schema: {
              description: 'The uuid of the batch.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the batch.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
    body: {
      description: 'Details of the source account, destination account, amount and a reference.',
      content: {
        'application/json': {
          schema: z
            .object({
              amount: z
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
                  description: 'amount of funds to be transfered',
                  example: 10000,
                }),
              icanFrom: z
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
                  description: 'The account ID for the fire.com account the funds are taken from',
                  example: 2001,
                }),
              icanTo: z
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
                  description: 'The account ID for the fire.com account the funds are directed to',
                  example: 3221,
                }),
              ref: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The reference on the transaction',
                  example: 'Moving funds to Operating Account',
                }),
            })
            .openapi({ title: 'batchItemInternalTransfer', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Batch payment added successfully. Note* Please use batchUuid when submitting a batch, not batchItemUuid.',
      content: {
        'application/json': {
          schema: z
            .object({
              batchItemUuid: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch.',
                  example: 'fba4a76a-ce51-4fc1-b562-98ec01299e4d',
                }),
            })
            .openapi({ title: 'newBatchItemResponse', required: [] }),
        },
      },
    },
  },
})

export const deleteV1BatchesBatchUuidInternaltransfersItemUuidRoute = createRoute({
  method: 'delete',
  path: '/v1/batches/{batchUuid}/internaltransfers/{itemUuid}',
  tags: ['Payment Batches'],
  summary: 'Remove a Payment from the Batch (Internal Transfer)',
  description:
    'Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).',
  operationId: 'deleteInternalTransferBatchPayment',
  request: {
    params: z.object({
      batchUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'batchUuid',
            required: true,
            schema: {
              description: 'The uuid of the batch.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the batch.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
      itemUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'itemUuid',
            required: true,
            schema: {
              description: 'The uuid of the item to remove.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the item to remove.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: { 200: { description: 'Batch payment deleted successfully.' } },
})

export const getV1CardsRoute = createRoute({
  method: 'get',
  path: '/v1/cards',
  tags: ['Cards'],
  summary: 'View List of Cards.',
  description: 'Returns a list of cards related to your fire.com account.',
  operationId: 'getListofCards',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              cards: z
                .array(
                  z
                    .object({
                      blocked: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Whether the card is blocked or not',
                          example: false,
                        }),
                      cardId: z
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
                          description: 'card id assigned by fire.com',
                          example: 51,
                        }),
                      dateCreated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'The date-time the card was created',
                          example: '2017-01-19T16:38:15.803Z',
                        }),
                      emailAddress: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'card user email address',
                          example: 'user@example.com',
                        }),
                      eurIcan: z
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
                            'identifier for the eur fire.com account (assigned by fire.com)',
                          example: 2150,
                        }),
                      expiryDate: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'card expiry date',
                          example: '2019-01-31T00:00:00.000Z',
                        }),
                      firstName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'card user first name', example: 'John' }),
                      gbpIcan: z
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
                            'identifier for the gbp fire.com account (assigned by fire.com)',
                          example: 2152,
                        }),
                      lastName: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'card user last name', example: 'Doe' }),
                      maskedPan: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'card number (masked)',
                          example: '537455******1111',
                        }),
                      provider: z
                        .literal('MASTERCARD')
                        .exactOptional()
                        .openapi({ description: 'card provider', example: 'MASTERCARD' }),
                      status: z
                        .enum(['LIVE', 'CREATED_ACTIVE', 'CREATED_INACTIVE', 'DEACTIVATED'])
                        .exactOptional()
                        .openapi({ description: 'card status', example: 'LIVE' }),
                      statusReason: z
                        .enum(['LOST_CARD', 'STOLEN_CARD', 'CARD_DESTROYED'])
                        .exactOptional()
                        .openapi({ description: 'reason for card status', example: 'LOST_CARD' }),
                      userId: z
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
                          description: 'card user id assigned by fire.com',
                          example: 3138,
                        }),
                    })
                    .openapi({ title: 'card', required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ title: 'cards', required: [] }),
        },
      },
    },
    401: { description: 'Access Token is Invalid or missing' },
    403: { description: 'Access Token is Invalid or missing' },
  },
})

export const postV1CardsRoute = createRoute({
  method: 'post',
  path: '/v1/cards',
  tags: ['Cards'],
  summary: 'Create a new debit card.',
  description: 'You can create multiple debit cards which can be linked to your fire.com accounts.',
  operationId: 'createNewCard',
  request: {
    body: {
      description: 'Details of the new card',
      content: {
        'application/json': {
          schema: z
            .object({
              acceptFeesAndCharges: z.boolean().exactOptional().openapi({ example: true }),
              addressType: z
                .enum(['HOME', 'BUSINESS'])
                .exactOptional()
                .openapi({ example: 'BUSINESS' }),
              cardPin: z.string().exactOptional().openapi({ example: 5345 }),
              eurIcan: z
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
                .openapi({ type: 'integer', format: 'int64', example: 2150 }),
              gbpIcan: z
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
                .openapi({ type: 'integer', format: 'int64', example: 2152 }),
              userId: z
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
                .openapi({ type: 'integer', format: 'int64', example: 3245 }),
            })
            .openapi({ title: 'newCard', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Card created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              cardId: z
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
                .openapi({ type: 'integer', format: 'int64', example: 51 }),
              expiryDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ example: '2019-01-31T00:00:00.000Z' }),
              maskedPan: z.string().exactOptional().openapi({ example: '537455******1111' }),
              status: z
                .enum(['CREATED_ACTIVE', 'CREATED_INACTIVE'])
                .exactOptional()
                .openapi({ example: 'CREATED_ACTIVE' }),
            })
            .openapi({ title: 'newCardResponse', required: [] }),
        },
      },
    },
  },
})

export const postV1CardsCardIdBlockRoute = createRoute({
  method: 'post',
  path: '/v1/cards/{cardId}/block',
  tags: ['Cards'],
  summary: 'Block a card',
  description:
    'Updates status of an existing card to block which prevents any transactions being carried out with that card.',
  operationId: 'blockCard',
  request: {
    params: z.object({
      cardId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'cardId',
            required: true,
            schema: {
              description: 'The cardid of the card to block',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The cardid of the card to block',
        }),
    }),
  },
  responses: {
    204: {
      description:
        'No body is returned - “Status 204 No Content” signifies the call was successful.',
    },
  },
})

export const getV1CardsCardIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/v1/cards/{cardId}/transactions',
  tags: ['Cards'],
  summary: 'List Card Transactions.',
  description: 'Returns a list of cards transactions related to your fire.com card.',
  operationId: 'getListofCardTransactions',
  request: {
    params: z.object({
      cardId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'cardId',
            required: true,
            schema: {
              description: 'The cardid of the card to retrieve the associated transactions',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The cardid of the card to retrieve the associated transactions',
        }),
    }),
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
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              description: 'The number of records to return',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The number of records to return',
        }),
      offset: z
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
            in: 'query',
            name: 'offset',
            required: false,
            schema: {
              description: 'The page of records to return',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The page of records to return',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                dateRangeTo: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'milisecond timestamp of date range to value.',
                    example: 1547744156603,
                  }),
                total: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description: 'The total number of card transactions in the list.',
                    example: 1,
                  }),
                transactions: z
                  .array(
                    z
                      .object({
                        amountAfterCharges: z
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
                              'Net amount lodged or taken from the account after fees and charges were applied.',
                            example: 5000,
                          }),
                        amountBeforeCharges: z
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
                              'Amount of the transaction before the fees and taxes were applied.',
                            example: 5000,
                          }),
                        balance: z
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
                              'the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).',
                            example: 8500,
                          }),
                        batchItemDetails: z
                          .object({
                            batchItemPublicUuid: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The UUID for this item in the batch.',
                                example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                              }),
                            batchName: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The optional name given to the batch at creation time.',
                                example: 'Payroll 2022-11',
                              }),
                            batchPublicUuid: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The UUID for this batch.',
                                example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                              }),
                            jobNumber: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The optional job number given to the batch to link it to your own system.',
                                example: '2018-01-PR',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              'Details of the batch run if this transaction was part of a batch.',
                            title: 'batchItemDetails',
                            required: [],
                          }),
                        card: z
                          .object({
                            alias: z.string().exactOptional(),
                            cardId: z
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
                            embossBusinessName: z.string().exactOptional(),
                            embossCardName: z.string().exactOptional(),
                            expiryDate: z.iso.datetime({ offset: true }).exactOptional(),
                            maskedPan: z.string().exactOptional(),
                            provider: z.string().exactOptional(),
                          })
                          .exactOptional()
                          .openapi({
                            description: 'Details of the card used (if applicable)',
                            title: 'relatedCard',
                            required: [],
                          }),
                        currency: z
                          .object({
                            code: z
                              .enum(['EUR', 'GBP'])
                              .exactOptional()
                              .openapi({
                                description:
                                  'The three letter code for the currency - either `EUR` or `GBP`.',
                              }),
                            description: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The name of the currency',
                                example: 'Euro',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description: 'The currency.',
                            title: 'currency',
                            required: [],
                          }),
                        date: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({
                            description: 'Date of the transaction',
                            example: '2021-04-13T11:06:32.437Z',
                          }),
                        dateAcknowledged: z.iso
                          .datetime({ offset: true })
                          .exactOptional()
                          .openapi({ example: '2021-04-13T11:06:32.437Z' }),
                        directDebitDetails: z
                          .object({
                            directDebitReference: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The direct debit reference.',
                                example: 'VODA-ABC453-1',
                              }),
                            directDebitUuid: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The UUID for the direct debit payment',
                                example: '42de0705-e3f1-44fa-8c41-79973eb80eb2',
                              }),
                            mandateReference: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'the reference of the mandate',
                                example: 'CRZ-102190123',
                              }),
                            mandateUUid: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The UUID for the mandate',
                                example: 'f171b143-e3eb-47de-85a6-1c1f1108c701',
                              }),
                            mandateUuid: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The UUID for the mandate',
                                example: '28d627c3-1889-44c8-ae59-6f6b20239260',
                              }),
                            originatorAlias: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The Alias of the party who sets up the direct debit.',
                                example: 'Three',
                              }),
                            originatorLogoUrlLarge: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'URL pointing to a large version of the Originator Logo (if available)',
                                example:
                                  'https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png',
                              }),
                            originatorLogoUrlSmall: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'URL pointing to a small version of the Originator Logo (if available)',
                                example:
                                  'https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png',
                              }),
                            originatorName: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The creator of the party who sets up the direct debit.',
                                example: 'Vodafone PLC',
                              }),
                            originatorReference: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'Set by party who sets up the direct debit.',
                                example: 'VODA-123456',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description: 'Details of the direct debit (if applicable)',
                            title: 'directDebitDetails',
                            required: [],
                          }),
                        eventUuid: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'An internal Fire reference for the transaction (UUID)',
                            example: '42de0705-e3f1-44fa-8c41-79973eb80eb2',
                          }),
                        feeAmount: z
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
                            description: 'The amount of the fee, if any.',
                            example: 0,
                          }),
                        fxTradeDetails: z
                          .object({
                            buyAmount: z
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
                                description: 'amount of buyCurrency being bought',
                                example: 359,
                              }),
                            buyCurrency: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'currency which is being bought',
                                example: 'GBP',
                              }),
                            fixedSide: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'type of trade - BUY or SELL',
                                example: 'SELL',
                              }),
                            provider: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'The FX provider used to make the trade.',
                                example: 'TCC',
                              }),
                            rate4d: z
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
                                description: 'exchange rate',
                                example: 7180,
                              }),
                            sellAmount: z
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
                                description: 'amount of sellCurrency being sold',
                                example: 500,
                              }),
                            sellCurrency: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'currency which is being sold',
                                example: 'EUR',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description: 'Details of the FX trade (if applicable)',
                            title: 'fxTrade',
                            required: [],
                          }),
                        ican: z
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
                              'identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version.',
                            example: 1951,
                          }),
                        myRef: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'The comment/reference on the transaction',
                            example: 'Transfer to main account',
                          }),
                        paymentRequestPublicCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '(FOP payments only) The FOP Payment Code that was used to make this payment.',
                            example: '1abcdefg',
                          }),
                        proprietarySchemeDetails: z
                          .array(
                            z
                              .object({
                                data: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'the scheme proprietary data - key pairs separated by | and key/values separated by ^',
                                    example:
                                      'remittanceInfoUnstructured^FIRE440286865OD1|instructionId^O223151336499079',
                                  }),
                                type: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc.',
                                    example: 'SCT',
                                  }),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              'Extra details about the transaction based on the scheme used to make the payment.',
                            title: 'proprietarySchemeDetails',
                          }),
                        refId: z
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
                            description: 'The id of the transaction.',
                            example: 26774,
                          }),
                        relatedParty: z
                          .xor([
                            z
                              .object({
                                account: z
                                  .object({
                                    accountNumber: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'the Account Number of the account.',
                                        example: '11111111',
                                      }),
                                    alias: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'the name the user gives to the account to help them identify it.',
                                        example: 'Main Account',
                                      }),
                                    bic: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'the BIC of the account (provided if currency is EUR).',
                                        example: 'CPAYIE2D',
                                      }),
                                    iban: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'the IBAN of the account (provided if currency is EUR).',
                                        example: 'IE54CPAY99119911111111',
                                      }),
                                    id: z
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
                                          'identifier for the fire.com account (assigned by fire.com)',
                                        example: 42,
                                      }),
                                    nsc: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'the Sort Code of the account.',
                                        example: '232221',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                type: z.literal('FIRE_ACCOUNT').exactOptional(),
                              })
                              .openapi({ title: 'relatedPartyFireAccount', required: [] }),
                            z
                              .object({
                                account: z
                                  .object({
                                    accountNumber: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'the Account Number of the account.',
                                        example: '11111111',
                                      }),
                                    alias: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'the name the user gives to the account to help them identify it.',
                                        example: 'Main Account',
                                      }),
                                    bic: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'the BIC of the account (provided if currency is EUR).',
                                        example: 'CPAYIE2D',
                                      }),
                                    iban: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'the IBAN of the account (provided if currency is EUR).',
                                        example: 'IE54CPAY99119911111111',
                                      }),
                                    id: z
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
                                    nsc: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description: 'the Sort Code of the account.',
                                        example: '232221',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                type: z.literal('EXTERNAL_ACCOUNT').exactOptional(),
                              })
                              .openapi({ title: 'relatedPartyExternalAccount', required: [] }),
                            z
                              .object({
                                account: z
                                  .object({
                                    accountNumber: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The account number of the Withdrawl account in reference',
                                        example: '00000000',
                                      }),
                                    alias: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The Alias name of the Withdrawl account in reference',
                                        example: 'Smyth and Co.',
                                      }),
                                    bic: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The BIC of the Withdrawl account in reference',
                                        example: 'CPAYIE2D',
                                      }),
                                    iban: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          'The BIC of the Withdrawl account in reference',
                                        example: 'IE76CPAY99119900000000',
                                      }),
                                    id: z
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
                                          'The ID number of the Withdrawl account in reference',
                                        example: 123,
                                      }),
                                    nsc: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '(Conditional) Provide this field if using Mode 2 and the payee account is in GBP.',
                                        example: '991199',
                                      }),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                type: z.literal('WITHDRAWAL_ACCOUNT').exactOptional(),
                              })
                              .openapi({ title: 'relatedPartyPayee', required: [] }),
                            z
                              .object({
                                cardMerchant: z
                                  .object({
                                    acquirerIdDe32: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: 6011329 }),
                                    additionalAmtDe54: z.string().exactOptional(),
                                    additionalDataDe124: z.string().exactOptional(),
                                    additionalDataDe48: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: '010X610500000' }),
                                    authCodeDe38: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: '177449' }),
                                    authorisedByGps: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: 'N' }),
                                    avsResult: z.string().exactOptional().openapi({ example: 'N' }),
                                    billAmt: z
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
                                        example: -1000,
                                      }),
                                    billCcy: z.string().exactOptional().openapi({ example: '978' }),
                                    expiryDate: z.string().exactOptional(),
                                    mccCode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: '5521' }),
                                    merchIdDe42: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: 13152429 }),
                                    merchNameDe43: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: 'ABC Coffee Shop' }),
                                    mtId: z.string().exactOptional().openapi({ example: '0100' }),
                                    posDataDe22: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: '051' }),
                                    posDataDe61: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: 1000030037299999 }),
                                    posTermnlDe41: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: '80266721' }),
                                    procCode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: '000000' }),
                                    recordDataDe120: z.string().exactOptional(),
                                    respCodeDe39: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: '00' }),
                                    retRefNoDe37: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: 10900006720 }),
                                    statusCode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: '00' }),
                                    token: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: '976307363' }),
                                    txnAmt4d: z
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
                                      .openapi({ type: 'integer', format: 'int64', example: 1000 }),
                                    txnCcy: z.string().exactOptional().openapi({ example: '978' }),
                                    txnCtry: z.string().exactOptional().openapi({ example: 'IRL' }),
                                    txnDesc: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: 'ABC Coffee Shop' }),
                                    txnStatCode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ example: 'A' }),
                                    txnType: z.string().exactOptional().openapi({ example: 'A' }),
                                  })
                                  .exactOptional()
                                  .openapi({ required: [] }),
                                type: z.enum(['CARD_MERCHANT', 'CARD_ATM']).exactOptional(),
                              })
                              .openapi({ title: 'relatedPartyCardPayment', required: [] }),
                          ])
                          .exactOptional()
                          .openapi({
                            description:
                              'Details of the related third party involved in the transaction.',
                            title: 'relatedParty',
                          }),
                        taxAmount: z
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
                              'The amount of the tax, if any (e.g. Stamp duty for ATM transactions)',
                            example: 0,
                          }),
                        txnId: z
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
                              'The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction.',
                            example: 30157,
                          }),
                        type: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The type of the transaction:\n* `LODGEMENT` - Bank Transfer received\n* `PIS_LODGEMENT` - Fire Open Payments Lodgement received\n* `MANUAL_TRANSFER` - Manual Transfer to\n* `WITHDRAWAL` - Bank Transfer sent\n* `REVERSAL` - Credit Reversal\n* `DIRECT_DEBIT` - A direct debit.\n* `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.\n* `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.\n* `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)\n* `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)\n* `WITHDRAWAL_RETURNED` - Bank Transfer sent returned\n* `LODGEMENT_REVERSED` - Bank Transfer received returned\n* `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)\n* `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)\n* `CREATE_CARD` - The fee taken when a debit card is issued.\n* `ADD_ACCOUNT` - The fee taken when an account is created.\n* `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.       \n* `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin\n* `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin\n* `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC\n* `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC\n* `CARD_ECOMMERCE_DEBIT` - Card used on the internet\n* `CARD_ECOMMERCE_CREDIT` - Card used on the internet\n* `CARD_ATM_DEBIT` - Card used in an ATM\n* `CARD_ATM_CREDIT` - Card used in an ATM\n* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin\n* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC\n* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT\t` - Card used on the internet in non-processing currency\n* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency\n* `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency\n* `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency\n* `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed\n* `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed\n* `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed\n* `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed\n* `CARD_ECOMMERCE_DEBIT_REVERSAL\t` - Card used on the internet - reversed\n* `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed\n* `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed\n* `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed\n* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed\n* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.\n* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed\n* `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed\n',
                            example: 'WITHDRAWAL',
                          }),
                        yourRef: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals',
                            example: 'From John Smith',
                          }),
                      })
                      .openapi({ title: 'transaction', required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ title: 'cardTransactionsv1', required: [] }),
          ),
        },
      },
    },
    401: { description: 'Access Token is Invalid or missing' },
    403: { description: 'Access Token is Invalid or missing' },
  },
})

export const postV1CardsCardIdUnblockRoute = createRoute({
  method: 'post',
  path: '/v1/cards/{cardId}/unblock',
  tags: ['Cards'],
  summary: 'Unblock a card',
  description:
    'Updates status of an existing card to unblock which means that transactions can be carried out with that card.',
  operationId: 'unblockCard',
  request: {
    params: z.object({
      cardId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'cardId',
            required: true,
            schema: {
              description: 'The cardid of the card to unblock',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The cardid of the card to unblock',
        }),
    }),
  },
  responses: {
    204: {
      description:
        'No body is returned - “Status 204 No Content” signifies the call was successful.',
    },
  },
})

export const getV1DirectdebitsRoute = createRoute({
  method: 'get',
  path: '/v1/directdebits',
  tags: ['Direct Debits'],
  summary: 'Get all DD payments associated with a direct debit mandate',
  description:
    'Retrieve all direct debit payments associated with a direct debit mandate.\nThe permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS\n',
  operationId: 'getDirectDebitsForMandateUuid',
  request: {
    query: z.object({
      mandateUuid: z
        .string()
        .openapi({
          param: {
            description: 'The mandate UUID to retrieve',
            example: '1A07774B-1461-4595-BC4B-423B739712AF',
            in: 'query',
            name: 'mandateUuid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieve all direct debit payments associated with a direct debit mandate.',
      content: {
        'application/json': {
          schema: z
            .object({
              directdebits: z
                .array(
                  z
                    .object({
                      amount: z
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
                          description: 'Value of the payment',
                          example: 100,
                        }),
                      currency: z
                        .object({
                          code: z
                            .enum(['EUR', 'GBP'])
                            .exactOptional()
                            .openapi({
                              description:
                                'The three letter code for the currency - either `EUR` or `GBP`.',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the currency', example: 'Euro' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The currency.', title: 'currency', required: [] }),
                      dateCreated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'Date the direct debit was created. Milliseconds since the epoch (1970).',
                          example: '2016-12-15T22:56:05.937Z',
                        }),
                      directDebitReference: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The direct debit reference.',
                          example: 'VODA-ABC453-1',
                        }),
                      directDebitUuid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The UUID for the direct debit payment',
                          example: '42de0705-e3f1-44fa-8c41-79973eb80eb2',
                        }),
                      isDDIC: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'DDIC is a Direct Debit Indemnity Claim (i.e.a refund). If if the DD is requested to be refunded it is marked isDDIC true.',
                          example: false,
                        }),
                      lastUpdated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'Date the direct debit was last updated. Milliseconds since the epoch (1970).',
                          example: '2016-12-15T22:56:05.937Z',
                        }),
                      mandateUUid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The UUID for the mandate',
                          example: 'f171b143-e3eb-47de-85a6-1c1f1108c701',
                        }),
                      originatorAlias: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The Alias of the party who sets up the direct debit.',
                          example: 'Three',
                        }),
                      originatorName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The creator of the party who sets up the direct debit.',
                          example: 'Vodafone PLC',
                        }),
                      originatorReference: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Set by party who sets up the direct debit.',
                          example: 'VODA-123456',
                        }),
                      schemeRejectReason: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Reason why rejected',
                          example: 'eg. Instruction cancelled by payer',
                        }),
                      schemeRejectReasonCode: z
                        .enum(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B'])
                        .exactOptional()
                        .openapi({
                          description:
                            'The reject code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.',
                          example: 'for BACS (ARUDD) 0|1|2|3|5|6|7|8|9|A|B',
                        }),
                      status: z
                        .enum([
                          'RECIEVED',
                          'REJECT_REQUESTED',
                          'REJECT_READY_FOR_PROCESSING',
                          'REJECT_RECORD_IN_PROGRESS',
                          'REJECT_RECORDED',
                          'REJECT_FILE_CREATED',
                          'REJECT_FILE_SENT',
                          'COLLECTED',
                          'REFUND_REQUESTED',
                          'REFUND_RECORD_IN_PROGRESS',
                          'REFUND_RECORDED',
                          'REFUND_FILE_CREATED',
                          'REFUND_FILE_SENT',
                        ])
                        .exactOptional()
                        .openapi({
                          description:
                            "The statuses of the direct debit payments associated with the mandate.\n* 'RECIEVED' - Direct Debit has been recieved\n* 'REJECT_REQUESTED' - The direct debit has a rejected request associated with it\n* 'REJECT_READY_FOR_PROCESSING' \n* 'REJECT_RECORD_IN_PROGRESS'\n* 'REJECT_RECORDED'\n* 'REJECT_FILE_CREATED'\n* 'REJECT_FILE_SENT'\n* 'COLLECTED' - Direct debit collected\n* 'REFUND_REQUESTED' - Refund requested on direct debit\n* 'REFUND_RECORD_IN_PROGRESS' - Refund in progress on direct debit\n* 'REFUND_RECORDED'\n* 'REFUND_FILE_CREATED'\n* 'REFUND_FILE_SENT' \n",
                          example: 'RECIEVED',
                        }),
                      targetIcan: z
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
                            'The ican of your fire account that the money was taken from',
                          example: 42,
                        }),
                      targetPayeeId: z
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
                          description: 'The payee that was created when the DD was processed',
                          example: 12,
                        }),
                      type: z
                        .enum([
                          'FIRST_COLLECTION',
                          'ONGOING_COLLECTION',
                          'REPRESENTED_COLLECTION',
                          'FINAL_COLLECTION',
                        ])
                        .exactOptional()
                        .openapi({
                          description: 'The type of the direct debit.',
                          example: 'FIRST_COLLECTION',
                        }),
                    })
                    .openapi({ title: 'directDebit', required: [] }),
                )
                .exactOptional(),
              total: z
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
                  description: 'Number of direct debits found',
                  example: 1,
                }),
            })
            .openapi({ title: 'directDebits', required: [] }),
        },
      },
    },
  },
})

export const getV1DirectdebitsDirectDebitUuidRoute = createRoute({
  method: 'get',
  path: '/v1/directdebits/{directDebitUuid}',
  tags: ['Direct Debits'],
  summary: 'Get the details of a direct debit',
  description:
    'Retrieve all details of a single direct debit collection/payment, whether successful or not.\nThe permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**\n',
  operationId: 'getDirectDebitByUuid',
  request: {
    params: z.object({
      directDebitUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'directDebitUuid',
            required: true,
            schema: {
              description: 'The uuid of the direct debit to retrieve.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the direct debit to retrieve.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieve all details of a single direct debit collection/payment',
      content: {
        'application/json': {
          schema: z
            .object({
              amount: z
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
                  description: 'Value of the payment',
                  example: 100,
                }),
              currency: z
                .object({
                  code: z
                    .enum(['EUR', 'GBP'])
                    .exactOptional()
                    .openapi({
                      description:
                        'The three letter code for the currency - either `EUR` or `GBP`.',
                    }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the currency', example: 'Euro' }),
                })
                .exactOptional()
                .openapi({ description: 'The currency.', title: 'currency', required: [] }),
              dateCreated: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date the direct debit was created. Milliseconds since the epoch (1970).',
                  example: '2016-12-15T22:56:05.937Z',
                }),
              directDebitReference: z
                .string()
                .exactOptional()
                .openapi({ description: 'The direct debit reference.', example: 'VODA-ABC453-1' }),
              directDebitUuid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The UUID for the direct debit payment',
                  example: '42de0705-e3f1-44fa-8c41-79973eb80eb2',
                }),
              isDDIC: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'DDIC is a Direct Debit Indemnity Claim (i.e.a refund). If if the DD is requested to be refunded it is marked isDDIC true.',
                  example: false,
                }),
              lastUpdated: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date the direct debit was last updated. Milliseconds since the epoch (1970).',
                  example: '2016-12-15T22:56:05.937Z',
                }),
              mandateUUid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The UUID for the mandate',
                  example: 'f171b143-e3eb-47de-85a6-1c1f1108c701',
                }),
              originatorAlias: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The Alias of the party who sets up the direct debit.',
                  example: 'Three',
                }),
              originatorName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The creator of the party who sets up the direct debit.',
                  example: 'Vodafone PLC',
                }),
              originatorReference: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Set by party who sets up the direct debit.',
                  example: 'VODA-123456',
                }),
              schemeRejectReason: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Reason why rejected',
                  example: 'eg. Instruction cancelled by payer',
                }),
              schemeRejectReasonCode: z
                .enum(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B'])
                .exactOptional()
                .openapi({
                  description:
                    'The reject code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.',
                  example: 'for BACS (ARUDD) 0|1|2|3|5|6|7|8|9|A|B',
                }),
              status: z
                .enum([
                  'RECIEVED',
                  'REJECT_REQUESTED',
                  'REJECT_READY_FOR_PROCESSING',
                  'REJECT_RECORD_IN_PROGRESS',
                  'REJECT_RECORDED',
                  'REJECT_FILE_CREATED',
                  'REJECT_FILE_SENT',
                  'COLLECTED',
                  'REFUND_REQUESTED',
                  'REFUND_RECORD_IN_PROGRESS',
                  'REFUND_RECORDED',
                  'REFUND_FILE_CREATED',
                  'REFUND_FILE_SENT',
                ])
                .exactOptional()
                .openapi({
                  description:
                    "The statuses of the direct debit payments associated with the mandate.\n* 'RECIEVED' - Direct Debit has been recieved\n* 'REJECT_REQUESTED' - The direct debit has a rejected request associated with it\n* 'REJECT_READY_FOR_PROCESSING' \n* 'REJECT_RECORD_IN_PROGRESS'\n* 'REJECT_RECORDED'\n* 'REJECT_FILE_CREATED'\n* 'REJECT_FILE_SENT'\n* 'COLLECTED' - Direct debit collected\n* 'REFUND_REQUESTED' - Refund requested on direct debit\n* 'REFUND_RECORD_IN_PROGRESS' - Refund in progress on direct debit\n* 'REFUND_RECORDED'\n* 'REFUND_FILE_CREATED'\n* 'REFUND_FILE_SENT' \n",
                  example: 'RECIEVED',
                }),
              targetIcan: z
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
                  description: 'The ican of your fire account that the money was taken from',
                  example: 42,
                }),
              targetPayeeId: z
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
                  description: 'The payee that was created when the DD was processed',
                  example: 12,
                }),
              type: z
                .enum([
                  'FIRST_COLLECTION',
                  'ONGOING_COLLECTION',
                  'REPRESENTED_COLLECTION',
                  'FINAL_COLLECTION',
                ])
                .exactOptional()
                .openapi({
                  description: 'The type of the direct debit.',
                  example: 'FIRST_COLLECTION',
                }),
            })
            .openapi({ title: 'directDebit', required: [] }),
        },
      },
    },
  },
})

export const postV1DirectdebitsDirectDebitUuidRejectRoute = createRoute({
  method: 'post',
  path: '/v1/directdebits/{directDebitUuid}/reject',
  tags: ['Direct Debits'],
  summary: 'Reject a direct debit payment',
  description:
    'This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.\nPermission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT\n',
  operationId: 'rejectDirectDebit',
  request: {
    params: z.object({
      directDebitUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'directDebitUuid',
            required: true,
            schema: {
              description: 'The uuid of the direct debit to retrieve.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the direct debit to retrieve.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: { 204: { description: '204 no content' } },
})

export const getV1MandatesRoute = createRoute({
  method: 'get',
  path: '/v1/mandates',
  tags: ['Direct Debits'],
  summary: 'List all direct debit mandates',
  description: 'The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES\n',
  operationId: 'getDirectDebitMandates',
  responses: {
    200: {
      description: 'List all direct debit mandates.',
      content: {
        'application/json': {
          schema: z
            .object({
              mandates: z
                .array(
                  z
                    .object({
                      alias: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The name of the alias', example: 'Vodaphone' }),
                      currency: z
                        .object({
                          code: z
                            .enum(['EUR', 'GBP'])
                            .exactOptional()
                            .openapi({
                              description:
                                'The three letter code for the currency - either `EUR` or `GBP`.',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the currency', example: 'Euro' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The currency.', title: 'currency', required: [] }),
                      dateCancelled: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'Date the direct debit was canceled. Milliseconds since the epoch (1970).',
                          example: '2016-12-15T22:56:05.937Z',
                        }),
                      dateCompleted: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'Date the direct debit was completed. Milliseconds since the epoch (1970).',
                          example: '2016-12-15T22:56:05.937Z',
                        }),
                      dateCreated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'Date the direct debit was created. Milliseconds since the epoch (1970).',
                          example: '2016-12-15T22:56:05.937Z',
                        }),
                      fireRejectionReason: z
                        .enum([
                          'ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS',
                          'DDIC',
                          'ACCOUNT_NOT_FOUND',
                          'ACCOUNT_NOT_LIVE',
                          'CUSTOMER_NOT_FOUND',
                          'BUSINESS_NOT_LIVE',
                          'BUSINESS_NOT_FULL',
                          'PERSONAL_USER_NOT_LIVE',
                          'PERSONAL_USER_NOT_FULL',
                          'MANDATE_ALREADY_EXISTS',
                          'MANDATE_WITH_DIFERENT_ACCOUNT',
                          'NULL_MANDATE_REFERENCE',
                          'INVALID_ACCOUNT_CURRENCY',
                          'INVALID_MANDATE_REFERENCE',
                          'REQUESTED_BY_CUSTOMER_VIA_SUPPORT',
                          'CUSTOMER_ACCOUNT_CLOSED',
                          'CUSTOMER_DECEASED',
                          'ACCOUNT_TRANSFERRED',
                          'MANDATE_NOT_FOUND',
                          'ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT',
                          'INVALID_ACCOUNT_TYPE',
                          'MANDATE_EXPIRED',
                          'MANDATE_CANCELLED',
                          'REQUESTED_BY_CUSTOMER',
                        ])
                        .exactOptional()
                        .openapi({
                          description: 'Rejection reason if transaction is rejected',
                          example: 'ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS',
                        }),
                      lastUpdated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description:
                            'Date the direct debit was last updated. Milliseconds since the epoch (1970).',
                          example: '2016-12-15T22:56:05.937Z',
                        }),
                      latestDirectDebitAmount: z
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
                          description: 'The value of largest direct debit collected',
                          example: 2,
                        }),
                      latestDirectDebitDate: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'The date of latest direct debit collected',
                          example: '2016-12-15T22:56:05.937Z',
                        }),
                      mandateReference: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'the reference of the mandate',
                          example: 'CRZ-102190123',
                        }),
                      mandateUuid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The UUID for the mandate',
                          example: '28d627c3-1889-44c8-ae59-6f6b20239260',
                        }),
                      numberOfDirectDebitCollected: z
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
                          description: 'The number of direct debits collected',
                          example: 2,
                        }),
                      originatorAlias: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The name of the alias',
                          example: 'Vodaphone PLC',
                        }),
                      originatorLogoUrlLarge: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Logo url from party who sets up the direct debit.',
                          example: 'originatorLogoLarge',
                        }),
                      originatorLogoUrlSmall: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Logo url from party who sets up the direct debit.',
                          example: 'originatorLogoSmall',
                        }),
                      originatorName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The creator of the party who sets up the direct debit.',
                          example: 'Vodafone PLC',
                        }),
                      originatorReference: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Set by party who sets up the direct debit.',
                          example: 'VODA-123456',
                        }),
                      schemeCancelReason: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Reason for cancelation',
                          example: 'e.g. Instruction cancelled by payer',
                        }),
                      schemeCancelReasonCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The cancelation code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.',
                          example: 'For BACS (ADDACS) - 0|1|2|3|B|C|D|E|R',
                        }),
                      status: z
                        .enum([
                          'CREATED',
                          'LIVE',
                          'REJECT_REQUESTED',
                          'REJECT_RECORD_IN_PROGRESS',
                          'REJECT_RECORDED',
                          'REJECT_FILE_CREATED',
                          'REJECT_FILE_SENT',
                          'CANCEL_REQUESTED',
                          'CANCEL_RECORD_IN_PROGRESS',
                          'CANCEL_RECORDED',
                          'CANCEL_FILE_CREATED',
                          'CANCEL_FILE_SENT',
                          'COMPLETE',
                          'DORMANT',
                        ])
                        .exactOptional()
                        .openapi({
                          description:
                            "The status of the mandate.\n* 'CREATED'\n* 'LIVE'\n* 'REJECT_REQUESTED'\n* 'REJECT_RECORD_IN_PROGRESS'\n* 'REJECT_RECORDED'\n* 'REJECT_FILE_CREATED'\n* 'REJECT_FILE_SENT'\n* 'CANCEL_REQUESTED'\n* 'CANCEL_RECORD_IN_PROGRESS'\n* 'CANCEL_RECORDED'\n* 'CANCEL_FILE_CREATED'\n* 'CANCEL_FILE_SENT'\n* 'COMPLETE'\n* 'DORMANT'\n",
                          example: 'RECIEVED',
                        }),
                      targetIcan: z
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
                          description: 'Identifier for the fire.com account (assigned by fire.com)',
                          example: 1,
                        }),
                      valueOfDirectDebitCollected: z
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
                          description: 'The value of direct debits collected',
                          example: 2,
                        }),
                    })
                    .openapi({ title: 'mandate', required: [] }),
                )
                .exactOptional(),
              total: z
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
                  description: 'Number of direct debits found',
                  example: 1,
                }),
            })
            .openapi({ title: 'mandates', required: [] }),
        },
      },
    },
  },
})

export const getV1MandatesMandateUuidRoute = createRoute({
  method: 'get',
  path: '/v1/mandates/{mandateUuid}',
  tags: ['Direct Debits'],
  summary: 'Get direct debit mandate details',
  description:
    'Retrieve all details for a direct debit mandate.\nThe permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE\n',
  operationId: 'getMandate',
  request: {
    params: z.object({
      mandateUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'mandateUuid',
            required: true,
            schema: {
              description: 'The uuid of the mandate to retrieve.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the mandate to retrieve.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieve all details for a direct debit mandate.',
      content: {
        'application/json': {
          schema: z
            .object({
              alias: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the alias', example: 'Vodaphone' }),
              currency: z
                .object({
                  code: z
                    .enum(['EUR', 'GBP'])
                    .exactOptional()
                    .openapi({
                      description:
                        'The three letter code for the currency - either `EUR` or `GBP`.',
                    }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the currency', example: 'Euro' }),
                })
                .exactOptional()
                .openapi({ description: 'The currency.', title: 'currency', required: [] }),
              dateCancelled: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date the direct debit was canceled. Milliseconds since the epoch (1970).',
                  example: '2016-12-15T22:56:05.937Z',
                }),
              dateCompleted: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date the direct debit was completed. Milliseconds since the epoch (1970).',
                  example: '2016-12-15T22:56:05.937Z',
                }),
              dateCreated: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date the direct debit was created. Milliseconds since the epoch (1970).',
                  example: '2016-12-15T22:56:05.937Z',
                }),
              fireRejectionReason: z
                .enum([
                  'ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS',
                  'DDIC',
                  'ACCOUNT_NOT_FOUND',
                  'ACCOUNT_NOT_LIVE',
                  'CUSTOMER_NOT_FOUND',
                  'BUSINESS_NOT_LIVE',
                  'BUSINESS_NOT_FULL',
                  'PERSONAL_USER_NOT_LIVE',
                  'PERSONAL_USER_NOT_FULL',
                  'MANDATE_ALREADY_EXISTS',
                  'MANDATE_WITH_DIFERENT_ACCOUNT',
                  'NULL_MANDATE_REFERENCE',
                  'INVALID_ACCOUNT_CURRENCY',
                  'INVALID_MANDATE_REFERENCE',
                  'REQUESTED_BY_CUSTOMER_VIA_SUPPORT',
                  'CUSTOMER_ACCOUNT_CLOSED',
                  'CUSTOMER_DECEASED',
                  'ACCOUNT_TRANSFERRED',
                  'MANDATE_NOT_FOUND',
                  'ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT',
                  'INVALID_ACCOUNT_TYPE',
                  'MANDATE_EXPIRED',
                  'MANDATE_CANCELLED',
                  'REQUESTED_BY_CUSTOMER',
                ])
                .exactOptional()
                .openapi({
                  description: 'Rejection reason if transaction is rejected',
                  example: 'ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS',
                }),
              lastUpdated: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'Date the direct debit was last updated. Milliseconds since the epoch (1970).',
                  example: '2016-12-15T22:56:05.937Z',
                }),
              latestDirectDebitAmount: z
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
                  description: 'The value of largest direct debit collected',
                  example: 2,
                }),
              latestDirectDebitDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description: 'The date of latest direct debit collected',
                  example: '2016-12-15T22:56:05.937Z',
                }),
              mandateReference: z
                .string()
                .exactOptional()
                .openapi({ description: 'the reference of the mandate', example: 'CRZ-102190123' }),
              mandateUuid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The UUID for the mandate',
                  example: '28d627c3-1889-44c8-ae59-6f6b20239260',
                }),
              numberOfDirectDebitCollected: z
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
                  description: 'The number of direct debits collected',
                  example: 2,
                }),
              originatorAlias: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the alias', example: 'Vodaphone PLC' }),
              originatorLogoUrlLarge: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Logo url from party who sets up the direct debit.',
                  example: 'originatorLogoLarge',
                }),
              originatorLogoUrlSmall: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Logo url from party who sets up the direct debit.',
                  example: 'originatorLogoSmall',
                }),
              originatorName: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The creator of the party who sets up the direct debit.',
                  example: 'Vodafone PLC',
                }),
              originatorReference: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Set by party who sets up the direct debit.',
                  example: 'VODA-123456',
                }),
              schemeCancelReason: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Reason for cancelation',
                  example: 'e.g. Instruction cancelled by payer',
                }),
              schemeCancelReasonCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The cancelation code returned by the bank indicating an issue with the direct debit. Each ARRUD code represents a rejection reason.',
                  example: 'For BACS (ADDACS) - 0|1|2|3|B|C|D|E|R',
                }),
              status: z
                .enum([
                  'CREATED',
                  'LIVE',
                  'REJECT_REQUESTED',
                  'REJECT_RECORD_IN_PROGRESS',
                  'REJECT_RECORDED',
                  'REJECT_FILE_CREATED',
                  'REJECT_FILE_SENT',
                  'CANCEL_REQUESTED',
                  'CANCEL_RECORD_IN_PROGRESS',
                  'CANCEL_RECORDED',
                  'CANCEL_FILE_CREATED',
                  'CANCEL_FILE_SENT',
                  'COMPLETE',
                  'DORMANT',
                ])
                .exactOptional()
                .openapi({
                  description:
                    "The status of the mandate.\n* 'CREATED'\n* 'LIVE'\n* 'REJECT_REQUESTED'\n* 'REJECT_RECORD_IN_PROGRESS'\n* 'REJECT_RECORDED'\n* 'REJECT_FILE_CREATED'\n* 'REJECT_FILE_SENT'\n* 'CANCEL_REQUESTED'\n* 'CANCEL_RECORD_IN_PROGRESS'\n* 'CANCEL_RECORDED'\n* 'CANCEL_FILE_CREATED'\n* 'CANCEL_FILE_SENT'\n* 'COMPLETE'\n* 'DORMANT'\n",
                  example: 'RECIEVED',
                }),
              targetIcan: z
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
                  description: 'Identifier for the fire.com account (assigned by fire.com)',
                  example: 1,
                }),
              valueOfDirectDebitCollected: z
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
                  description: 'The value of direct debits collected',
                  example: 2,
                }),
            })
            .openapi({ title: 'mandate', required: [] }),
        },
      },
    },
  },
})

export const postV1MandatesMandateUuidRoute = createRoute({
  method: 'post',
  path: '/v1/mandates/{mandateUuid}',
  tags: ['Direct Debits'],
  summary: 'Update a direct debit mandate alias',
  description:
    'Update Direct Debit Mandate Alias\nThe permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE\n',
  operationId: 'updateMandateAlias',
  request: {
    params: z.object({
      mandateUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'mandateUuid',
            required: true,
            schema: {
              description: 'The uuid of the mandate to update.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the mandate to update.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: { 204: { description: '204 no content' } },
})

export const postV1MandatesMandateUuidActivateRoute = createRoute({
  method: 'post',
  path: '/v1/mandates/{mandateUuid}/activate',
  tags: ['Direct Debits'],
  summary: 'Activate a direct debit mandate',
  description:
    'This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.\nThe permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE\n',
  operationId: 'activateMandate',
  request: {
    params: z.object({
      mandateUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'mandateUuid',
            required: true,
            schema: {
              description: 'The uuid of the mandate to activate.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the mandate to activate.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: { 204: { description: '204 no content' } },
})

export const postV1MandatesMandateUuidCancelRoute = createRoute({
  method: 'post',
  path: '/v1/mandates/{mandateUuid}/cancel',
  tags: ['Direct Debits'],
  summary: 'Cancel a direct debit mandate',
  description:
    'This endpoint allows you to cancel a direct debit mandate.\nThe permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL\n',
  operationId: 'cancelMandateByUuid',
  request: {
    params: z.object({
      mandateUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'mandateUuid',
            required: true,
            schema: {
              description: 'The uuid of the mandate to cancel.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The uuid of the mandate to cancel.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: { 204: { description: '204 no content' } },
})

export const getV1PayeesRoute = createRoute({
  method: 'get',
  path: '/v1/payees',
  tags: ['Payee Bank Accounts'],
  summary: 'List all Payee Bank Accounts',
  description:
    'Returns all your payee bank accounts. \n\nOrdered by payee name ascending. \n\nCan be paginated.\n',
  operationId: 'getPayees',
  responses: {
    200: {
      description: 'An array of Payee Bank Accounts',
      content: {
        'application/json': {
          schema: z
            .object({
              fundingSources: z
                .array(
                  z
                    .object({
                      accountHolderName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The name on the payee bank account.',
                          example: 'Joe Bloggs',
                        }),
                      accountName: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The alias attributed to the payee, usually set by the user when creating the payee.',
                          example: 'Joe',
                        }),
                      accountNumber: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The Account Number of the account if currency is GBP.',
                          example: '12345678',
                        }),
                      bic: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The BIC of the account if currency is EUR.',
                          example: 'BOFIIE2DXXX',
                        }),
                      createdBy: z
                        .enum([
                          'CUSTOMER',
                          'LODGEMENT',
                          'DIRECT DEBIT',
                          'OPEN BANKING',
                          'FIRE OPEN PAYMENT',
                          'FIRE DIRECT',
                        ])
                        .exactOptional()
                        .openapi({
                          description: 'The creation source of the payee.',
                          example: 'CUSTOMER',
                        }),
                      currency: z
                        .object({
                          code: z
                            .enum(['EUR', 'GBP'])
                            .exactOptional()
                            .openapi({
                              description:
                                'The three letter code for the currency - either `EUR` or `GBP`.',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the currency', example: 'Euro' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The currency.', title: 'currency', required: [] }),
                      dateCreated: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'The date the payee was created. ISO Date Time.',
                          example: '2019-08-22T07:48:56.460Z',
                        }),
                      iban: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The IBAN of the account if currency is EUR.',
                          example: 'IE86BOFI90535211111111',
                        }),
                      id: z
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
                            'Identifier for the fire.com payee bank account (assigned by fire.com).',
                          example: 742,
                        }),
                      nsc: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The Sort Code of the account if currency is GBP.',
                          example: '998822',
                        }),
                      status: z
                        .enum(['CREATED', 'LIVE', 'CLOSED', 'ARCHIVED'])
                        .exactOptional()
                        .openapi({
                          description:
                            "The status of the payee. Only payees in LIVE status can be selected as a destination account for an outgoing payment.\n  * 'CREATED' - The payee has been set-up via Bank Transfer Received, Direct Debit, or Open Banking. This payee must be converted to LIVE status to select as a destination account for an outgoing payment.\n  * 'LIVE' - The payee can be selected as a destination account for an outgoing payment.\n  * 'CLOSED'\n  * 'ARCHIVED' - The payee has been deleted and must be added again to be selected as a destination account for an outgoing payment.\n",
                          example: 'LIVE',
                        }),
                    })
                    .openapi({ title: 'payee', required: [] }),
                )
                .exactOptional(),
              total: z
                .int()
                .exactOptional()
                .openapi({ description: 'The total number of payees in the list.', example: 1 }),
            })
            .openapi({ title: 'payeeBankAccounts', required: [] }),
        },
      },
    },
  },
})

export const postV1PaymentrequestsRoute = createRoute({
  method: 'post',
  path: '/v1/paymentrequests',
  tags: ['Open Banking'],
  summary: 'Create a Fire Open Payment request',
  description:
    'Fire Open Payments is a feature of the fire.com business account that leverages Open Banking to allow your customers to pay you via bank transfer and to reconcile those payments as they are received into your fire.com GBP or EUR account.\n\nTo set up each Fire Open Payment you first need to create a payment request. This contains the details of the payment such as the amount, destination account, description as well as various other specific fields that you want to associate with the payment. The payment request is represented as a URL with a unique code which can then be incorporated into an eCommerce shopping cart as an alternative form of payment. For example, you can put “Pay by Bank” on your website along with “Pay by Card” and “Pay by PayPal”. It can also be distributed by a variety of means such as by email, SMS, WhatsApp, encoded as a QR code, NFC tag, etc.\n\nConsumers confirm the payment details such as the amount are correct, select their bank and authorise the payment. Payments can be made from all major UK banks.\n\nThe funds are settled into your fire.com account, fully reconciled, with your specified fields provided.\n\nThere are two implementation options you can use to display payment pages with Fire Open Payments.\n1. **Hosted Payment Pages:** fire.com hosts the payment pages - this option allows you to re-direct your customer to the hosted fire.com payment pages displaying the payment details confirmation, bank selection, consent and response pages.\n2. **Integrated Payment Pages:** You host the payments page yourself - this option allows you to have control of the UI and UX for displaying the payment details confirmation, bank selection and response pages. Once the response is received, fire.com can re-direct the payer back to your website.\n\n## Hosted Payment Pages Option\n![Image](https://fire.com/docs/images/fop-hosted-flow.png)\n\nThe payer is brought through 5 stages to complete the payment:\n1. **View Payment Details page:** The payer must first be clear on the amount of the payment, who they are paying and the reason for the payment.\n2. **Select Bank / Account Provider page:** The payer then selects their bank. Again this step is offered as part of the fire.com payment UI.\n3. **Consent page:**  The payer must provide consent to the PISP (fire.com) prior to authorising the payment. This is a regulatory requirement, this page must be hosted by fire.com.\n4. **Authenticate and Authorise Payment:** The payer will be redirected to their bank’s online site or mobile banking app. After authenticating, the details of the payment will be displayed, and the payer will authorise the payment.\n5. **Response page:** It is a regulatory requirement that the PISP (fire.com) display the results of the payment and provide the same information that would be provided if the payer had made the payment via their banking application. fire.com must display this page, before optionally redirecting the payer back to your website.\n\nTo implement the hosted Fire Open Payments option you need to do the following:\n1. You can create a new Fire Open Payment request either within Firework Online or via the API.\n2. Create your new API application with the appropriate permissions required in Firework Online, as outlined in the “Authentication” steps. The permissions needed are:\n    - “Create a Payment Request”\n    - “Get Payment Details”\n\n3. Use the Refresh Token, Client ID and Client Key to create an access token as outlined in the “Authentication” steps.\n4. On your website, create a “Pay by Bank” button alongside your other available payment methods, such as Cards and PayPal.\n5. After the user clicks on “Pay by Bank”, you need to create a new Fire Open Payment request as outlined in the “Create a Fire Open Payment” steps. The Create a Fire Open Payment request endpoint returns a unique code for the payment request.\n6. Create a URL using the code returned in this format: `https://payments.fire.com/{code}` and redirect your customer to this page.\n7. fire.com will host all the pages that the customer needs to review and authorise the payment. fire.com will will return the paymentUUID of the successful or failed transaction to the returnUrl that you supplied when creating the Fire Open Payment request. fire.com can also optionally send a “webhook” to your website notifying you of the transaction’s outcome.\n8. Once fire.com responds with the paymentUUID and/or the webhook to your website, you need to call the “Get Payment Details” endpoint to get the details of the transaction. This will let you know whether the transaction was successful or not. You can set up the “Payment Request Payment Authorised” webhook to notify you once the payment is authorised or cancelled.\n9. The funds will be received into your GBP or EUR account. Funding will typically be within 6 business hours.\n\nOnce the code is returned the payment can be viewed and paid by going to the following URL: `https://payments.fire.com/{code}`\n\nThis request creates a new Fire Open Payment Payment. A code is returned that can be shared to your customers as a URL by any channel you wish.\nYou will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.\n',
  operationId: 'newPaymentRequest',
  request: {
    body: {
      description: 'Details of the new payment request',
      content: {
        'application/json': {
          schema: z
            .object({
              additionalFields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'These fields will be dispalyed to the payer when using the hosted option. You can choose to display any of `ORDER_ID`, `PRODUCT_ID`, `CUSTOMER_ID`, `CUSTOMER_NUMBER` and `COMMENT2` to the payer.',
                  example: 'ORDER_ID|PRODUCT_ID|CUSTOMER_ID|CUSTOMER_NUMBER|COMMENT2',
                }),
              amount: z
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
                    'The requested amount to pay. Note the last two digits represent pennies/cents, (e.g., £1.00 = 100).',
                  example: 1000,
                }),
              collectFields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "For the hosted option, the payer will be asked to fill in these fields but they will not be mandatory. You can choose to collect any of the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.",
                  example: 'ADDRESS|REFERENCE|COMMENT1',
                }),
              currency: z
                .enum(['EUR', 'GBP'])
                .openapi({
                  description:
                    'Either `EUR` or `GBP`, and must correspond to the currency of the account the funds are being lodged into in the `icanTo`.',
                }),
              description: z
                .string()
                .openapi({
                  description:
                    'A public facing description of the request. This will be shown to the user when they tap or scan the request.',
                  example: 'Gym Fees Oct 2020',
                }),
              expiry: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'This is the expiry of the payment request. After this time, the payment cannot be paid.',
                  example: '2020-10-22T07:48:56.460Z',
                }),
              icanTo: z
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
                    'The ican of the account to collect the funds into. Must be one of your fire.com Accounts.',
                  example: 42,
                }),
              mandatoryFields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "For the hosted option, these fields will be madatory for the payer to fill in on the hosted payment page. You can choose to collect any the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.",
                  example: 'ADDRESS|REFERENCE|COMMENT1',
                }),
              maxNumberPayments: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The max number of people who can pay this request. Must be set to 1 for the ECOMMERCE_GOODS and ECOMMERCE_SERVICES types.',
                  example: 1,
                }),
              myRef: z
                .string()
                .openapi({
                  description: 'An internal description of the request.',
                  example: 'Fees',
                }),
              orderDetails: z
                .object({
                  comment1: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'This is your own comment for the transaction.',
                      example: 'Additional comments about the transaction',
                    }),
                  comment2: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'This is your own comment for the transaction.',
                      example: 'Additional comments about the transaction',
                    }),
                  customerNumber: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Use this field to store a customer number for the transaction (for example).',
                      example: '123645',
                    }),
                  deliveryAddressLine1: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The first line of the delivery address.',
                      example: '12 The Street',
                    }),
                  deliveryAddressLine2: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The second line of the delivery address.',
                      example: 'The Way',
                    }),
                  deliveryCity: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Delivery address city', example: 'London' }),
                  deliveryCountry: z
                    .string()
                    .exactOptional()
                    .openapi({ description: '2-digit code for the country', example: 'GB' }),
                  deliveryPostCode: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Delivery address post code', example: 'EC15155' }),
                  merchantCustomerIdentification: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'This is a reference you use to uniquely identify each of your customers.',
                      example: 8303863544,
                    }),
                  merchantNumber: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Your Merchant Number (if applicable).',
                      example: '1234567',
                    }),
                  orderId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Use this field to store the order id for the transaction. The Order Id cannot be set unless the `maxNumberPayments` is 1.',
                      example: '6c28a47d-4502-4111',
                    }),
                  productId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Use this field to store a product id for the transaction (for example).',
                      example: 'ZFDAA-1221',
                    }),
                  variableReference: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Use this field to store any other reference for the transaction (for example, a phone number).',
                      example: 'John Doe',
                    }),
                })
                .exactOptional()
                .openapi({ title: 'orderDetails', required: [] }),
              returnUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The merchant return URL where the customer will be re-directed to with the result of the transaction.',
                  example: 'https://example.com/callback',
                }),
              type: z
                .literal('OTHER')
                .openapi({ description: 'The type of Fire Open Payment that was created' }),
            })
            .openapi({
              required: ['type', 'icanTo', 'currency', 'myRef', 'description'],
              title: 'newPaymentRequest',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Payment Request created successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z
                .string()
                .length(8)
                .exactOptional()
                .openapi({
                  description:
                    'The code for this request. Create a URL in this format: `https://payments.fire.com/{code}` and share to your customers.\n',
                  example: '1234abcd',
                }),
              type: z
                .literal('OTHER')
                .exactOptional()
                .openapi({ description: 'The type of Fire Open Payment that was created.' }),
            })
            .openapi({ title: 'newPaymentRequestResponse', required: [] }),
        },
      },
    },
  },
})

export const getV1PaymentsPaymentUuidRoute = createRoute({
  method: 'get',
  path: '/v1/payments/{paymentUuid}',
  tags: ['Open Banking'],
  summary: 'Get Payment Details',
  description:
    'Returns the details of a specific payment.\n\nAs the customer goes through the process of making the payment the status of the payment will change.\n\n* `AWAITING_AUTHORISATION` -This is the initial status of all your payments.\n* `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.\n* `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.\n* `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.\n* `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.\n* `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.\n\n\nYou will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.\n',
  operationId: 'getPaymentDetails',
  request: {
    params: z.object({
      paymentUuid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'paymentUuid',
            required: true,
            schema: {
              description: 'The unique id for the transaction.',
              example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
              type: 'string',
            },
          },
          description: 'The unique id for the transaction.',
          example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The Payment Request details object',
      content: {
        'application/json': {
          schema: z
            .object({
              additionalFields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'These fields will be dispalyed to the payer when using the hosted option. You can choose to display any of `ORDER_ID`, `PRODUCT_ID`, `CUSTOMER_ID`, `CUSTOMER_NUMBER` and `COMMENT2` to the payer.',
                  example: 'ORDER_ID|PRODUCT_ID|CUSTOMER_ID|CUSTOMER_NUMBER|COMMENT2',
                }),
              amount: z
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
                    'The requested amount to pay. Note the last two digits represent pennies/cents, (e.g., £1.00 = 100).',
                  example: 1000,
                }),
              collectFields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "For the hosted option, the payer will be asked to fill in these fields but they will not be mandatory. You can choose to collect any of the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.",
                  example: 'ADDRESS|REFERENCE|COMMENT1',
                }),
              currency: z
                .object({
                  code: z
                    .enum(['EUR', 'GBP'])
                    .exactOptional()
                    .openapi({
                      description:
                        'The three letter code for the currency - either `EUR` or `GBP`.',
                    }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name of the currency', example: 'Euro' }),
                })
                .exactOptional()
                .openapi({ description: 'The currency.', title: 'currency', required: [] }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A public facing description of the request. This will be shown to the user when they tap or scan the request.',
                  example: 'Gym Fees Oct 2020',
                }),
              expiry: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'This is the expiry of the payment request. After this time, the payment cannot be paid.',
                  example: '2024-10-22T07:48:56.460Z',
                }),
              icanTo: z
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
                    'The ican of the account to collect the funds into. Must be one of your fire.com Accounts.',
                  example: 42,
                }),
              mandatoryFields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "For the hosted option, these fields will be madatory for the payer to fill in on the hosted payment page. You can choose to collect any the payer's `ADDRESS`, `REFERENCE` and/or `COMMENT1`. If you choose to collect these fields from the payer, you cannot set 'delivery’, 'variableReference’ or 'comment1’ fields respectively.",
                  example: 'ADDRESS|REFERENCE|COMMENT1',
                }),
              maxNumberPayments: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The max number of people who can pay this request. Must be set to 1 for the ECOMMERCE_GOODS and ECOMMERCE_SERVICES types.',
                  example: 1,
                }),
              myRef: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'An internal description of the request.',
                  example: 'Fees',
                }),
              orderDetails: z
                .object({
                  comment1: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'This is your own comment for the transaction.',
                      example: 'Additional comments about the transaction',
                    }),
                  comment2: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'This is your own comment for the transaction.',
                      example: 'Additional comments about the transaction',
                    }),
                  customerNumber: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Use this field to store a customer number for the transaction (for example).',
                      example: '123645',
                    }),
                  deliveryAddressLine1: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The first line of the delivery address.',
                      example: '12 The Street',
                    }),
                  deliveryAddressLine2: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The second line of the delivery address.',
                      example: 'The Way',
                    }),
                  deliveryCity: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Delivery address city', example: 'London' }),
                  deliveryCountry: z
                    .string()
                    .exactOptional()
                    .openapi({ description: '2-digit code for the country', example: 'GB' }),
                  deliveryPostCode: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Delivery address post code', example: 'EC15155' }),
                  merchantCustomerIdentification: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'This is a reference you use to uniquely identify each of your customers.',
                      example: 8303863544,
                    }),
                  merchantNumber: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Your Merchant Number (if applicable).',
                      example: '1234567',
                    }),
                  orderId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Use this field to store the order id for the transaction. The Order Id cannot be set unless the `maxNumberPayments` is 1.',
                      example: '6c28a47d-4502-4111',
                    }),
                  productId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Use this field to store a product id for the transaction (for example).',
                      example: 'ZFDAA-1221',
                    }),
                  variableReference: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Use this field to store any other reference for the transaction (for example, a phone number).',
                      example: 'John Doe',
                    }),
                })
                .exactOptional()
                .openapi({ title: 'orderDetails', required: [] }),
              paymentRequestCode: z
                .string()
                .length(8)
                .exactOptional()
                .openapi({
                  description: 'The code that was returned when you created the payment request.',
                  example: '1234abcd',
                }),
              paymentUuid: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A unique id for the transaction.',
                  example: '4ADFB67A-0F5B-4A9A-9D74-34437250045C',
                }),
              returnUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The merchant return URL where the customer will be re-directed to with the result of the transaction.',
                  example: 'https://example.com/callback',
                }),
              status: z
                .enum([
                  'AWAITING_AUTHORISATION',
                  'AUTHORISED',
                  'AWAITING_MULTI_AUTHORISATION',
                  'NOT_AUTHORISED',
                  'PAID',
                  'REJECTED',
                  'ACCEPTED',
                  'RECEIVED',
                ])
                .exactOptional()
                .openapi({ description: 'The status of the transaction' }),
              transactionType: z
                .enum(['REFUND_REQUEST', 'PAYMENT'])
                .exactOptional()
                .openapi({ description: 'The type of payment request payment' }),
              type: z
                .literal('OTHER')
                .exactOptional()
                .openapi({ description: 'The type of Fire Open Payment that was created' }),
              webhookUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A URL to be called in the background with the details of the payment after the payment is complete',
                  example: 'https://example.com/webhook',
                }),
            })
            .openapi({ title: 'paymentRequest', required: [] }),
        },
      },
    },
  },
})

export const getV1UserUserIdRoute = createRoute({
  method: 'get',
  path: '/v1/user/{userId}',
  tags: ['Users'],
  summary: 'Returns details of a specific fire.com user.',
  description: 'You can retrieve the details of a specific fire.com user',
  operationId: 'getUser',
  request: {
    params: z.object({
      userId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'userId',
            required: true,
            schema: {
              description: 'Lists a specific User',
              example: 14059,
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'Lists a specific User',
          example: 14059,
        }),
    }),
  },
  responses: {
    200: {
      description: 'Unique information about a User.',
      content: {
        'application/json': {
          schema: z
            .object({
              emailAddress: z
                .string()
                .exactOptional()
                .openapi({ description: 'email address for user', example: 'user@example.com' }),
              firstName: z
                .string()
                .exactOptional()
                .openapi({ description: 'User first name', example: 'Colm' }),
              id: z
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
                  description: 'The User ID for this User',
                  example: 14059,
                }),
              lastName: z
                .string()
                .exactOptional()
                .openapi({ description: 'User second name', example: 'User' }),
              lastlogin: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Timestamp on when user last logged in.',
                  example: '2012-01-20T11:21:35.000Z',
                }),
              mobileApplicationDetails: z
                .object({
                  OS: z
                    .enum(['Android', 'IOS', 'OTHER'])
                    .exactOptional()
                    .openapi({ description: 'Operating system of device.' }),
                  businessUserId: z
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
                      description: 'Business user ID',
                      example: '14059',
                    }),
                  clientID: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Client ID of user.',
                      example: 'EBB10F29-A653-4DBA-9C8C-BA79F72F78B0',
                    }),
                  deviceName: z
                    .enum(['iPhone', 'Android', 'Other'])
                    .exactOptional()
                    .openapi({ description: 'type of device.' }),
                  deviceOSVersion: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'OS version for device.', example: '14.4' }),
                  mobileApplicationId: z
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
                      description: 'Mobile application id for user.',
                      example: '18967',
                    }),
                  status: z
                    .enum(['LIVE', 'CLOSED', 'LOCKED', 'SMS_SENT'])
                    .exactOptional()
                    .openapi({ description: 'Status of user' }),
                })
                .exactOptional()
                .openapi({ title: 'mobileApplication', required: [] }),
              mobileNumber: z
                .string()
                .exactOptional()
                .openapi({ description: 'User mobile number', example: '+353871234567' }),
              role: z
                .enum(['ADMIN', 'FULL_USER', 'READ_ONLY', 'CARD_ONLY'])
                .exactOptional()
                .openapi({ description: 'User role' }),
              status: z
                .enum(['LIVE', 'CLOSED', 'FROZEN', 'INVITE_SENT', 'SMS_CODE_SENT'])
                .exactOptional()
                .openapi({ description: 'Status of user' }),
              userCvl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Users Cvl type ID (shows up when status is LIVE)',
                  example: 'FULL',
                }),
            })
            .openapi({ title: 'user', required: [] }),
        },
      },
    },
  },
})

export const getV1UsersRoute = createRoute({
  method: 'get',
  path: '/v1/users',
  tags: ['Users'],
  summary: 'Returns list of all users on your fire.com account',
  description: 'You can retrieve the details of all fire.com users on your acount.',
  operationId: 'getUsers',
  responses: {
    200: {
      description: 'List of all Users.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                emailAddress: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'email address for user', example: 'user@example.com' }),
                firstName: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'User first name', example: 'Colm' }),
                id: z
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
                    description: 'The User ID for this User',
                    example: 14059,
                  }),
                lastName: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'User second name', example: 'User' }),
                lastlogin: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Timestamp on when user last logged in.',
                    example: '2012-01-20T11:21:35.000Z',
                  }),
                mobileApplicationDetails: z
                  .object({
                    OS: z
                      .enum(['Android', 'IOS', 'OTHER'])
                      .exactOptional()
                      .openapi({ description: 'Operating system of device.' }),
                    businessUserId: z
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
                        description: 'Business user ID',
                        example: '14059',
                      }),
                    clientID: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'Client ID of user.',
                        example: 'EBB10F29-A653-4DBA-9C8C-BA79F72F78B0',
                      }),
                    deviceName: z
                      .enum(['iPhone', 'Android', 'Other'])
                      .exactOptional()
                      .openapi({ description: 'type of device.' }),
                    deviceOSVersion: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'OS version for device.', example: '14.4' }),
                    mobileApplicationId: z
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
                        description: 'Mobile application id for user.',
                        example: '18967',
                      }),
                    status: z
                      .enum(['LIVE', 'CLOSED', 'LOCKED', 'SMS_SENT'])
                      .exactOptional()
                      .openapi({ description: 'Status of user' }),
                  })
                  .exactOptional()
                  .openapi({ title: 'mobileApplication', required: [] }),
                mobileNumber: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'User mobile number', example: '+353871234567' }),
                role: z
                  .enum(['ADMIN', 'FULL_USER', 'READ_ONLY', 'CARD_ONLY'])
                  .exactOptional()
                  .openapi({ description: 'User role' }),
                status: z
                  .enum(['LIVE', 'CLOSED', 'FROZEN', 'INVITE_SENT', 'SMS_CODE_SENT'])
                  .exactOptional()
                  .openapi({ description: 'Status of user' }),
                userCvl: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'Users Cvl type ID (shows up when status is LIVE)',
                    example: 'FULL',
                  }),
              })
              .openapi({ title: 'user', required: [] }),
          ),
        },
      },
    },
  },
})

export const getV3AccountsIcanTransactionsRoute = createRoute({
  method: 'get',
  path: '/v3/accounts/{ican}/transactions',
  tags: ['Transactions'],
  summary: 'List transactions for an account (v3)',
  description:
    'Retrieve a list of transactions against an account. Initially, use the optional `limit`, `dateRangeFrom` and `dateRangeTo` query params to limit your query, then use the embedded `next` or `prev` links in the response to get newer or older pages.\n',
  operationId: 'getTransactionsByIdv3',
  request: {
    params: z.object({
      ican: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            in: 'path',
            name: 'ican',
            required: true,
            schema: {
              description: 'The ican of the account to retrieve',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The ican of the account to retrieve',
        }),
    }),
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
            in: 'query',
            name: 'limit',
            required: false,
            schema: {
              description: 'The number of records to return. Defaults to 10 - max is 200.',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'The number of records to return. Defaults to 10 - max is 200.',
        }),
      dateRangeFrom: z
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
            in: 'query',
            name: 'dateRangeFrom',
            required: false,
            schema: {
              description: 'A millisecond epoch time specifying the date range start date.',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'A millisecond epoch time specifying the date range start date.',
        }),
      dateRangeTo: z
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
            in: 'query',
            name: 'dateRangeTo',
            required: false,
            schema: {
              description: 'A millisecond epoch time specifying the date range end date.',
              format: 'int64',
              type: 'integer',
            },
          },
          description: 'A millisecond epoch time specifying the date range end date.',
        }),
      startAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'startAfter',
            required: false,
            schema: {
              description:
                'A pointer to the position in the resultset to start from. Used when paging through results using the linked pages.',
              type: 'string',
            },
          },
          description:
            'A pointer to the position in the resultset to start from. Used when paging through results using the linked pages.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'An array of transaction objects for the account with a count (`total`).',
      content: {
        'application/json': {
          schema: z
            .object({
              content: z
                .array(
                  z
                    .object({
                      amountAfterCharges: z
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
                            'Net amount lodged or taken from the account after fees and charges were applied.',
                          example: 5000,
                        }),
                      amountBeforeCharges: z
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
                            'Amount of the transaction before the fees and taxes were applied.',
                          example: 5000,
                        }),
                      balance: z
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
                            'the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).',
                          example: 8500,
                        }),
                      batchItemDetails: z
                        .object({
                          batchItemPublicUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for this item in the batch.',
                              example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                            }),
                          batchName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The optional name given to the batch at creation time.',
                              example: 'Payroll 2022-11',
                            }),
                          batchPublicUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for this batch.',
                              example: 'F2AF3F2B-4406-4199-B249-B354F2CC6019',
                            }),
                          jobNumber: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The optional job number given to the batch to link it to your own system.',
                              example: '2018-01-PR',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Details of the batch run if this transaction was part of a batch.',
                          title: 'batchItemDetails',
                          required: [],
                        }),
                      card: z
                        .object({
                          alias: z.string().exactOptional(),
                          cardId: z
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
                          embossBusinessName: z.string().exactOptional(),
                          embossCardName: z.string().exactOptional(),
                          expiryDate: z.iso.datetime({ offset: true }).exactOptional(),
                          maskedPan: z.string().exactOptional(),
                          provider: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Details of the card used (if applicable)',
                          title: 'relatedCard',
                          required: [],
                        }),
                      currency: z
                        .object({
                          code: z
                            .enum(['EUR', 'GBP'])
                            .exactOptional()
                            .openapi({
                              description:
                                'The three letter code for the currency - either `EUR` or `GBP`.',
                            }),
                          description: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'The name of the currency', example: 'Euro' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'The currency.', title: 'currency', required: [] }),
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({
                          description: 'Date of the transaction',
                          example: '2021-04-13T11:06:32.437Z',
                        }),
                      dateAcknowledged: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ example: '2021-04-13T11:06:32.437Z' }),
                      directDebitDetails: z
                        .object({
                          directDebitReference: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The direct debit reference.',
                              example: 'VODA-ABC453-1',
                            }),
                          directDebitUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for the direct debit payment',
                              example: '42de0705-e3f1-44fa-8c41-79973eb80eb2',
                            }),
                          mandateReference: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'the reference of the mandate',
                              example: 'CRZ-102190123',
                            }),
                          mandateUUid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for the mandate',
                              example: 'f171b143-e3eb-47de-85a6-1c1f1108c701',
                            }),
                          mandateUuid: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The UUID for the mandate',
                              example: '28d627c3-1889-44c8-ae59-6f6b20239260',
                            }),
                          originatorAlias: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The Alias of the party who sets up the direct debit.',
                              example: 'Three',
                            }),
                          originatorLogoUrlLarge: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'URL pointing to a large version of the Originator Logo (if available)',
                              example:
                                'https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png',
                            }),
                          originatorLogoUrlSmall: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'URL pointing to a small version of the Originator Logo (if available)',
                              example:
                                'https://s3-eu-west-1.amazonaws.com/live-fire-assets/prod/49dc9a01-8261-4d98-bebf-c3842c2d3c5d-small.png',
                            }),
                          originatorName: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The creator of the party who sets up the direct debit.',
                              example: 'Vodafone PLC',
                            }),
                          originatorReference: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Set by party who sets up the direct debit.',
                              example: 'VODA-123456',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Details of the direct debit (if applicable)',
                          title: 'directDebitDetails',
                          required: [],
                        }),
                      eventUuid: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'An internal Fire reference for the transaction (UUID)',
                          example: '42de0705-e3f1-44fa-8c41-79973eb80eb2',
                        }),
                      feeAmount: z
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
                          description: 'The amount of the fee, if any.',
                          example: 0,
                        }),
                      fxTradeDetails: z
                        .object({
                          buyAmount: z
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
                              description: 'amount of buyCurrency being bought',
                              example: 359,
                            }),
                          buyCurrency: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'currency which is being bought',
                              example: 'GBP',
                            }),
                          fixedSide: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'type of trade - BUY or SELL',
                              example: 'SELL',
                            }),
                          provider: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The FX provider used to make the trade.',
                              example: 'TCC',
                            }),
                          rate4d: z
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
                              description: 'exchange rate',
                              example: 7180,
                            }),
                          sellAmount: z
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
                              description: 'amount of sellCurrency being sold',
                              example: 500,
                            }),
                          sellCurrency: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'currency which is being sold',
                              example: 'EUR',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Details of the FX trade (if applicable)',
                          title: 'fxTrade',
                          required: [],
                        }),
                      ican: z
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
                            'identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version.',
                          example: 1951,
                        }),
                      myRef: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The comment/reference on the transaction',
                          example: 'Transfer to main account',
                        }),
                      paymentRequestPublicCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '(FOP payments only) The FOP Payment Code that was used to make this payment.',
                          example: '1abcdefg',
                        }),
                      proprietarySchemeDetails: z
                        .array(
                          z
                            .object({
                              data: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'the scheme proprietary data - key pairs separated by | and key/values separated by ^',
                                  example:
                                    'remittanceInfoUnstructured^FIRE440286865OD1|instructionId^O223151336499079',
                                }),
                              type: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc.',
                                  example: 'SCT',
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Extra details about the transaction based on the scheme used to make the payment.',
                          title: 'proprietarySchemeDetails',
                        }),
                      refId: z
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
                          description: 'The id of the transaction.',
                          example: 26774,
                        }),
                      relatedParty: z
                        .xor([
                          z
                            .object({
                              account: z
                                .object({
                                  accountNumber: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Account Number of the account.',
                                      example: '11111111',
                                    }),
                                  alias: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the name the user gives to the account to help them identify it.',
                                      example: 'Main Account',
                                    }),
                                  bic: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the BIC of the account (provided if currency is EUR).',
                                      example: 'CPAYIE2D',
                                    }),
                                  iban: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the IBAN of the account (provided if currency is EUR).',
                                      example: 'IE54CPAY99119911111111',
                                    }),
                                  id: z
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
                                        'identifier for the fire.com account (assigned by fire.com)',
                                      example: 42,
                                    }),
                                  nsc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Sort Code of the account.',
                                      example: '232221',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.literal('FIRE_ACCOUNT').exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyFireAccount', required: [] }),
                          z
                            .object({
                              account: z
                                .object({
                                  accountNumber: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Account Number of the account.',
                                      example: '11111111',
                                    }),
                                  alias: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the name the user gives to the account to help them identify it.',
                                      example: 'Main Account',
                                    }),
                                  bic: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the BIC of the account (provided if currency is EUR).',
                                      example: 'CPAYIE2D',
                                    }),
                                  iban: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'the IBAN of the account (provided if currency is EUR).',
                                      example: 'IE54CPAY99119911111111',
                                    }),
                                  id: z
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
                                  nsc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'the Sort Code of the account.',
                                      example: '232221',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.literal('EXTERNAL_ACCOUNT').exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyExternalAccount', required: [] }),
                          z
                            .object({
                              account: z
                                .object({
                                  accountNumber: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The account number of the Withdrawl account in reference',
                                      example: '00000000',
                                    }),
                                  alias: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'The Alias name of the Withdrawl account in reference',
                                      example: 'Smyth and Co.',
                                    }),
                                  bic: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'The BIC of the Withdrawl account in reference',
                                      example: 'CPAYIE2D',
                                    }),
                                  iban: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description: 'The BIC of the Withdrawl account in reference',
                                      example: 'IE76CPAY99119900000000',
                                    }),
                                  id: z
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
                                        'The ID number of the Withdrawl account in reference',
                                      example: 123,
                                    }),
                                  nsc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        '(Conditional) Provide this field if using Mode 2 and the payee account is in GBP.',
                                      example: '991199',
                                    }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.literal('WITHDRAWAL_ACCOUNT').exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyPayee', required: [] }),
                          z
                            .object({
                              cardMerchant: z
                                .object({
                                  acquirerIdDe32: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 6011329 }),
                                  additionalAmtDe54: z.string().exactOptional(),
                                  additionalDataDe124: z.string().exactOptional(),
                                  additionalDataDe48: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '010X610500000' }),
                                  authCodeDe38: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '177449' }),
                                  authorisedByGps: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'N' }),
                                  avsResult: z.string().exactOptional().openapi({ example: 'N' }),
                                  billAmt: z
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
                                    .openapi({ type: 'integer', format: 'int64', example: -1000 }),
                                  billCcy: z.string().exactOptional().openapi({ example: '978' }),
                                  expiryDate: z.string().exactOptional(),
                                  mccCode: z.string().exactOptional().openapi({ example: '5521' }),
                                  merchIdDe42: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 13152429 }),
                                  merchNameDe43: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'ABC Coffee Shop' }),
                                  mtId: z.string().exactOptional().openapi({ example: '0100' }),
                                  posDataDe22: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '051' }),
                                  posDataDe61: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 1000030037299999 }),
                                  posTermnlDe41: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '80266721' }),
                                  procCode: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '000000' }),
                                  recordDataDe120: z.string().exactOptional(),
                                  respCodeDe39: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '00' }),
                                  retRefNoDe37: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 10900006720 }),
                                  statusCode: z.string().exactOptional().openapi({ example: '00' }),
                                  token: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: '976307363' }),
                                  txnAmt4d: z
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
                                    .openapi({ type: 'integer', format: 'int64', example: 1000 }),
                                  txnCcy: z.string().exactOptional().openapi({ example: '978' }),
                                  txnCtry: z.string().exactOptional().openapi({ example: 'IRL' }),
                                  txnDesc: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'ABC Coffee Shop' }),
                                  txnStatCode: z.string().exactOptional().openapi({ example: 'A' }),
                                  txnType: z.string().exactOptional().openapi({ example: 'A' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              type: z.enum(['CARD_MERCHANT', 'CARD_ATM']).exactOptional(),
                            })
                            .openapi({ title: 'relatedPartyCardPayment', required: [] }),
                        ])
                        .exactOptional()
                        .openapi({
                          description:
                            'Details of the related third party involved in the transaction.',
                          title: 'relatedParty',
                        }),
                      taxAmount: z
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
                            'The amount of the tax, if any (e.g. Stamp duty for ATM transactions)',
                          example: 0,
                        }),
                      txnId: z
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
                            'The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction.',
                          example: 30157,
                        }),
                      type: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The type of the transaction:\n* `LODGEMENT` - Bank Transfer received\n* `PIS_LODGEMENT` - Fire Open Payments Lodgement received\n* `MANUAL_TRANSFER` - Manual Transfer to\n* `WITHDRAWAL` - Bank Transfer sent\n* `REVERSAL` - Credit Reversal\n* `DIRECT_DEBIT` - A direct debit.\n* `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.\n* `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.\n* `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)\n* `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)\n* `WITHDRAWAL_RETURNED` - Bank Transfer sent returned\n* `LODGEMENT_REVERSED` - Bank Transfer received returned\n* `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)\n* `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)\n* `CREATE_CARD` - The fee taken when a debit card is issued.\n* `ADD_ACCOUNT` - The fee taken when an account is created.\n* `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.       \n* `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin\n* `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin\n* `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC\n* `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC\n* `CARD_ECOMMERCE_DEBIT` - Card used on the internet\n* `CARD_ECOMMERCE_CREDIT` - Card used on the internet\n* `CARD_ATM_DEBIT` - Card used in an ATM\n* `CARD_ATM_CREDIT` - Card used in an ATM\n* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin\n* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC\n* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT\t` - Card used on the internet in non-processing currency\n* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency\n* `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency\n* `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency\n* `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed\n* `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed\n* `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed\n* `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed\n* `CARD_ECOMMERCE_DEBIT_REVERSAL\t` - Card used on the internet - reversed\n* `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed\n* `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed\n* `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed\n* `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed\n* `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.\n* `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed\n* `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed\n* `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed\n',
                          example: 'WITHDRAWAL',
                        }),
                      yourRef: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals',
                          example: 'From John Smith',
                        }),
                    })
                    .openapi({ title: 'transaction', required: [] }),
                )
                .exactOptional(),
              links: z
                .array(
                  z
                    .object({
                      href: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'https://api.fire.com/business/v3/accounts/1/transactions?startAfter=eyJpY2F',
                          example: 'The URL of the linked page',
                        }),
                      rel: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The relationship of this link to the current object - self, next, prev page.',
                          example: 'self',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ title: 'cardTransactionsv3', required: [] }),
        },
      },
    },
  },
})

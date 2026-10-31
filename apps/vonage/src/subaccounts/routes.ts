import { createRoute, z } from '@hono/zod-openapi'

const InvalidNumberTransferErrorResponseSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        example:
          'Failed to perform transfer number {number} from account {from} to {to} - The relationship between these two accounts does not allow for number transfer',
      }),
    instance: z.string().openapi({ example: '158b8f199c45014ab7b08bfe9cc1c12c' }),
    title: z.string().openapi({ example: 'Invalid Number Transfer' }),
    type: z
      .string()
      .openapi({
        example: 'https://developer.nexmo.com/api-errors/subaccounts#invalid-number-transfer',
      }),
  })
  .openapi({ description: 'Invalid Transfer', required: ['type', 'title', 'detail', 'instance'] })
  .openapi('InvalidNumberTransferErrorResponse')

const TransferBalanceResponseSchema = z
  .object({
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Balance transfer amount', example: 123.45 }),
    balance_transfer_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique balance transfer ID',
        example: '07b5-46e1-a527-85530e625800',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time when the balance transfer was executed',
        example: '2019-03-02T16:34:49Z',
      }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account the balance is transferred from', example: '7c9738e6' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reference for the balance transfer',
        example: 'This gets added to the audit log',
      }),
    to: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account the balance is transferred to', example: 'ad6dc56f' }),
  })
  .openapi({ required: [] })
  .openapi('TransferBalanceResponse')

const ListBalanceTransfersResponseSchema = z
  .object({
    _embedded: z
      .object({ balance_transfers: z.array(TransferBalanceResponseSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ListBalanceTransfersResponse')

const TransferCreditResponseSchema = z
  .object({
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Credit transfer amount', example: 123.45 }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date and time when the credit transfer was executed',
        example: '2019-03-02T16:34:49Z',
      }),
    credit_transfer_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique credit transfer ID',
        example: '07b5-46e1-a527-85530e625800',
      }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account the credit is transferred from', example: '7c9738e6' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reference for the credit transfer',
        example: 'This gets added to the audit log',
      }),
    to: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account the credit is transferred to', example: 'ad6dc56f' }),
  })
  .openapi({ required: [] })
  .openapi('TransferCreditResponse')

const ListCreditTransfersResponseSchema = z
  .object({
    _embedded: z
      .object({ 'credit-transfers': z.array(TransferCreditResponseSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ListCreditTransfersResponse')

const ModifySubaccountRequestSchema = z
  .object({
    name: z.string().exactOptional().openapi({ example: 'Subaccount department B' }),
    suspended: z.boolean().exactOptional().openapi({ example: true }),
    use_primary_account_balance: z.boolean().exactOptional().openapi({ example: false }),
  })
  .openapi({ required: [] })
  .openapi('ModifySubaccountRequest')

const NewSubaccountRequestSchema = z
  .object({
    name: z.string().max(80).openapi({ example: 'Subaccount department A' }),
    secret: z.string().exactOptional().openapi({ example: 'Password123' }),
    use_primary_account_balance: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ example: false }),
  })
  .openapi({ required: ['name'] })
  .openapi('NewSubaccountRequest')

const ShortcodeNotFoundSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        example:
          'Could not transfer number {number} from account {from} to {to} - ShortCode not found',
      }),
    instance: z.string().openapi({ example: '158b8f199c45014ab7b08bfe9cc1c12c' }),
    title: z.string().openapi({ example: 'Invalid Number Transfer' }),
    type: z
      .string()
      .openapi({
        example: 'https://developer.nexmo.com/api-errors/subaccounts#missing-number-transfer',
      }),
  })
  .openapi({
    description: 'Shortcode Not Found',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('ShortcodeNotFound')

const SubaccountResponseSchema = z
  .object({
    api_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique subaccount ID.', example: 'bbe6222f' }),
    balance: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Balance of the subAccount. Value is null if balance is shared with primary account.',
        example: 100.25,
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Subaccount creation date and time.',
        example: '2018-03-02T16:34:49Z',
      }),
    credit_limit: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Credit limit of the subAccount. Value is null if balance is shared with primary account.',
        example: -100.25,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the subaccount.', example: 'Subaccount department A' }),
    primary_account_api_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique primary account ID.', example: 'acc6111f' }),
    suspended: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Subaccount suspension status.', example: false }),
    use_primary_account_balance: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag showing if balance is shared with primary account.',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('SubaccountResponse')

const SubaccountCreateResponseSchema = z
  .object({
    secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'API secret of the subaccount.', example: 'Password123' }),
  })
  .openapi({ required: [] })
  .and(SubaccountResponseSchema)
  .openapi('SubaccountCreateResponse')

const SubaccountsAllResponseSchema = z
  .object({
    _embedded: z
      .object({
        primary_account: SubaccountResponseSchema.exactOptional(),
        subaccounts: z.array(SubaccountResponseSchema).exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('SubaccountsAllResponse')

const TransferBalanceOrCreditRequestSchema = z
  .object({
    amount: z.number().openapi({ example: '123.45' }),
    from: z.string().openapi({ example: '7c9738e6' }),
    reference: z.string().exactOptional().openapi({ example: 'This gets added to the audit log' }),
    to: z.string().openapi({ example: 'ad6dc56f' }),
  })
  .openapi({ required: ['from', 'to', 'amount'] })
  .openapi('TransferBalanceOrCreditRequest')

const TransferNumberRequestSchema = z
  .object({
    country: z.string().exactOptional().openapi({ example: 'GB' }),
    from: z.string().exactOptional().openapi({ example: '7c9738e6' }),
    number: z.number().exactOptional().openapi({ example: '23507703696' }),
    to: z.string().exactOptional().openapi({ example: 'ad6dc56f' }),
  })
  .openapi({ required: [] })
  .openapi('TransferNumberRequest')

const TransferNumberResponseSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The two character country code in ISO 3166-1 alpha-2 format',
        example: 'GB',
      }),
    from: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account the number is transferred from', example: '7c9738e6' }),
    number: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number transfered', example: '235077036' }),
    to: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account the number is transferred to', example: 'ad6dc56f' }),
  })
  .openapi({ required: [] })
  .openapi('TransferNumberResponse')

const UnprovisionedErrorResponseSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        example: 'Account acc6111f is not provisioned to access Subaccount Provisioning API',
      }),
    instance: z.string().openapi({ example: '158b8f199c45014ab7b08bfe9cc1c12c' }),
    title: z.string().openapi({ example: 'Authorisation error' }),
    type: z.string().openapi({ example: 'https://developer.nexmo.com/api-errors#unprovisioned' }),
  })
  .openapi({ description: 'Unprovisioned', required: ['type', 'title', 'detail', 'instance'] })
  .openapi('UnprovisionedErrorResponse')

const AccountIdNotFoundErrorResponse = {
  description: 'The account ID provided does not exist in our system or you do not have access',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .string()
            .openapi({ example: "API key 'acc6111f' does not exist, or you do not have access" }),
          instance: z.string().openapi({ example: '158b8f199c45014ab7b08bfe9cc1c12c' }),
          title: z.string().openapi({ example: 'Invalid API Key' }),
          type: z
            .string()
            .openapi({ example: 'https://developer.nexmo.com/api-errors#invalid-api-key' }),
        })
        .openapi({
          description: 'Invalid API Key',
          required: ['type', 'title', 'detail', 'instance'],
        }),
    },
  },
}

const ForbiddenErrorResponse = {
  description: 'Action is forbidden',
  content: { 'application/json': { schema: UnprovisionedErrorResponseSchema } },
}

const InternalErrorResponse = {
  description: 'An internal error has occurred',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .string()
            .openapi({ example: 'An internal error occurred. Please try again shortly' }),
          instance: z.string().openapi({ example: '158b8f199c45014ab7b08bfe9cc1c12c' }),
          title: z.string().openapi({ example: 'Internal Error' }),
          type: z
            .string()
            .openapi({ example: 'https://developer.nexmo.com/api-errors#internal-error' }),
        })
        .openapi({ required: ['type', 'title', 'detail', 'instance'] }),
    },
  },
}

const NumberTransferConflictResponseResponse = {
  description: 'Conflict',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z
            .string()
            .openapi({
              example:
                'Could not transfer number {number} from account {from} to {to} - ShortCode is already owned by requesting account',
            }),
          instance: z.string().openapi({ example: '158b8f199c45014ab7b08bfe9cc1c12c' }),
          title: z.string().openapi({ example: 'Transfer Conflict' }),
          type: z
            .string()
            .openapi({
              example: 'https://developer.nexmo.com/api-errors/subaccounts#transfer-conflict',
            }),
        })
        .openapi({ required: ['type', 'title', 'detail', 'instance'] }),
    },
  },
}

const UnauthorizedErrorResponse = {
  description: 'Credential is missing or invalid',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z.string().openapi({ example: 'You did not provide correct credentials' }),
          instance: z.string().openapi({ example: '798b8f199c45014ab7b08bfe9cc1c12c' }),
          title: z.string().openapi({ example: 'Invalid credentials supplied' }),
          type: z
            .string()
            .openapi({ example: 'https://developer.nexmo.com/api-errors#unauthorized' }),
        })
        .openapi({ required: ['type', 'title', 'detail', 'instance'] }),
    },
  },
}

const UnprocessableEntityErrorResponse = {
  description: 'Validation Error',
  content: {
    'application/json': {
      schema: z
        .object({
          detail: z.string().openapi({ example: 'The request failed due to validation errors' }),
          instance: z.string().openapi({ example: '158b8f199c45014ab7b08bfe9cc1c12c' }),
          invalid_parameters: z.array(
            z
              .object({
                name: z
                  .string()
                  .exactOptional()
                  .openapi({ example: 'use_primary_account_balance' }),
                reason: z
                  .string()
                  .exactOptional()
                  .openapi({ example: "Should be either 'true' or 'false'" }),
              })
              .openapi({ required: [] }),
          ),
          title: z.string().openapi({ example: 'Bad Request' }),
          type: z
            .string()
            .openapi({ example: 'https://developer.nexmo.com/api-errors/subaccounts#validation' }),
        })
        .openapi({ required: ['type', 'title', 'detail', 'invalid_parameters', 'instance'] }),
    },
  },
}

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const getApiKeyBalanceTransfersRoute = createRoute({
  method: 'get',
  path: '/{api_key}/balance-transfers',
  tags: ['Transfers'],
  summary: 'Retrieve list of balance transfers',
  description:
    'Retrieve a list of balance transfers that have taken place for a primary account within a specified time period.\n',
  operationId: 'retrieveBalanceTransfers',
  request: {
    params: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the primary account.',
            in: 'path',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start of the retrieval period.',
            example: '2019-07-15T13:11:44Z',
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'End of the retrieval period. If absent then all transfers until now is returned.',
            example: '2019-07-15T14:11:44Z',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      subaccount: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts',
            in: 'query',
            name: 'subaccount',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List balance transfers response',
      content: { 'application/json': { schema: ListBalanceTransfersResponseSchema } },
    },
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: AccountIdNotFoundErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const postApiKeyBalanceTransfersRoute = createRoute({
  method: 'post',
  path: '/{api_key}/balance-transfers',
  tags: ['Transfers'],
  summary: 'Transfer balance',
  description:
    'Transfer balance between a primary account and one of its subaccounts. Note that balance_available_for_transfer = |account_balance - credit_limit| of the source account.\n',
  operationId: 'transferBalance',
  request: {
    params: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the primary account',
            in: 'path',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TransferBalanceOrCreditRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Balance transfer response',
      content: { 'application/json': { schema: TransferBalanceResponseSchema } },
    },
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: AccountIdNotFoundErrorResponse,
    422: UnprocessableEntityErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const getApiKeyCreditTransfersRoute = createRoute({
  method: 'get',
  path: '/{api_key}/credit-transfers',
  tags: ['Transfers'],
  summary: 'Retrieve list of credit transfers',
  description:
    'Retrieve a list of credit transfers that have taken place for a primary account within a specified time period.\n',
  operationId: 'retrieveCreditTransfers',
  request: {
    params: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the primary account.',
            in: 'path',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      start_date: z
        .string()
        .openapi({
          param: {
            description: 'Start of the retrieval period.',
            example: '2019-07-15T13:11:44Z',
            in: 'query',
            name: 'start_date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      end_date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'End of the retrieval period. If absent then all transfers until now is returned.',
            example: '2019-07-15T14:11:44Z',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      subaccount: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Subaccount to filter by. You may send this multiple times to filter on multiple subaccounts',
            in: 'query',
            name: 'subaccount',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List credit transfers response',
      content: { 'application/json': { schema: ListCreditTransfersResponseSchema } },
    },
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: AccountIdNotFoundErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const postApiKeyCreditTransfersRoute = createRoute({
  method: 'post',
  path: '/{api_key}/credit-transfers',
  tags: ['Transfers'],
  summary: 'Transfer credit',
  description: 'Transfer credit limit between a primary account and one of its subaccounts.\n',
  operationId: 'transferCredit',
  request: {
    params: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the primary account',
            in: 'path',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TransferBalanceOrCreditRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Credit transfer response',
      content: { 'application/json': { schema: TransferCreditResponseSchema } },
    },
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: AccountIdNotFoundErrorResponse,
    422: UnprocessableEntityErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const getApiKeySubaccountsRoute = createRoute({
  method: 'get',
  path: '/{api_key}/subaccounts',
  tags: ['Subaccount Management'],
  summary: 'Retrieve list of subaccounts',
  description: 'Get the information of all the subaccounts owned by the primary account.\n',
  operationId: 'retrieveSubaccountsList',
  request: {
    params: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the primary account',
            in: 'path',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Subaccounts response',
      content: { 'application/json': { schema: SubaccountsAllResponseSchema } },
    },
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: AccountIdNotFoundErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const postApiKeySubaccountsRoute = createRoute({
  method: 'post',
  path: '/{api_key}/subaccounts',
  tags: ['Subaccount Management'],
  summary: 'Create subaccount',
  description: 'Create a subaccount for a given primary account.\n',
  operationId: 'createSubAccount',
  request: {
    params: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the primary account',
            in: 'path',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: NewSubaccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Subaccount response',
      content: { 'application/json': { schema: SubaccountCreateResponseSchema } },
    },
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: AccountIdNotFoundErrorResponse,
    422: UnprocessableEntityErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const getApiKeySubaccountsSubaccountKeyRoute = createRoute({
  method: 'get',
  path: '/{api_key}/subaccounts/{subaccount_key}',
  tags: ['Subaccount Management'],
  summary: 'Retrieve a subaccount',
  description: 'Get the information of a subaccount specified with its API key.\n',
  operationId: 'retrieveSubaccount',
  request: {
    params: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the primary account',
            in: 'path',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      subaccount_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the subaccount',
            in: 'path',
            name: 'subaccount_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Subaccount response',
      content: { 'application/json': { schema: SubaccountResponseSchema } },
    },
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: AccountIdNotFoundErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const patchApiKeySubaccountsSubaccountKeyRoute = createRoute({
  method: 'patch',
  path: '/{api_key}/subaccounts/{subaccount_key}',
  tags: ['Subaccount Management'],
  summary: 'Modify a subaccount',
  description: 'Change one or more properties of a subaccount.\n',
  operationId: 'modifySubaccount',
  request: {
    params: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the primary account',
            in: 'path',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
      subaccount_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the subaccount',
            in: 'path',
            name: 'subaccount_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ModifySubaccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Subaccount response',
      content: { 'application/json': { schema: SubaccountResponseSchema } },
    },
    401: UnauthorizedErrorResponse,
    403: ForbiddenErrorResponse,
    404: AccountIdNotFoundErrorResponse,
    422: UnprocessableEntityErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

export const postApiKeyTransferNumberRoute = createRoute({
  method: 'post',
  path: '/{api_key}/transfer-number',
  tags: ['Transfers'],
  summary: 'Transfer number',
  description: 'Transfer number from one account to another.\n',
  operationId: 'transferNumber',
  request: {
    params: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'ID of the primary account.',
            in: 'path',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TransferNumberRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Number transfer response',
      content: { 'application/json': { schema: TransferNumberResponseSchema } },
    },
    401: UnauthorizedErrorResponse,
    403: {
      description: 'Action is forbidden',
      content: {
        'application/json': {
          schema: z.xor([
            UnprovisionedErrorResponseSchema,
            InvalidNumberTransferErrorResponseSchema,
          ]),
        },
      },
    },
    404: {
      description: 'Action is forbidden',
      content: {
        'application/json': {
          schema: z.xor([
            z
              .object({
                detail: z
                  .string()
                  .openapi({
                    example: "API key 'acc6111f' does not exist, or you do not have access",
                  }),
                instance: z.string().openapi({ example: '158b8f199c45014ab7b08bfe9cc1c12c' }),
                title: z.string().openapi({ example: 'Invalid API Key' }),
                type: z
                  .string()
                  .openapi({ example: 'https://developer.nexmo.com/api-errors#invalid-api-key' }),
              })
              .openapi({
                description: 'Invalid API Key',
                required: ['type', 'title', 'detail', 'instance'],
              }),
            ShortcodeNotFoundSchema,
          ]),
        },
      },
    },
    409: NumberTransferConflictResponseResponse,
    422: UnprocessableEntityErrorResponse,
  },
  security: [{ basicAuth: [] }],
})

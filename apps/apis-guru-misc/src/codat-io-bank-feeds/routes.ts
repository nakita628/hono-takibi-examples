import { createRoute, z } from '@hono/zod-openapi'

const DateTimeSchema = z
  .string()
  .openapi({
    description:
      'In Codat\'s data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:\n\n```\n2020-10-08T22:40:50Z\n2021-01-01T00:00:00\n```\n\n\n\nWhen syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:\n\n- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`\n- Unqualified local time: `2021-11-15T01:00:00`\n- UTC time offsets: `2021-11-15T01:00:00-05:00`\n\n> Time zones\n> \n> Not all dates from Codat will contain information about time zones.  \n> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.',
    example: '2022-10-23T00:00:00Z',
    title: 'Date time',
  })
  .openapi('DateTime')

const BankFeedAccountSchema = z
  .strictObject({
    accountName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The bank account name' }),
    accountNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The account number' }),
    accountType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The type of bank account e.g. Credit' }),
    balance: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The latest balance for the bank account' }),
    currency: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The currency e.g. USD' }),
    feedStartDate: DateTimeSchema.nullable().exactOptional(),
    id: z.string().openapi({ description: 'Unique ID for the bank feed account' }),
    modifiedDate: DateTimeSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The last date the bank account was modified' }),
    sortCode: z.string().nullable().exactOptional().openapi({ description: 'The sort code' }),
    status: z.string().nullable().exactOptional(),
  })
  .openapi({
    description:
      'The target bank account in a supported accounting package for ingestion into a bank feed.',
    examples: [
      {
        accountName: 'account-081',
        accountNumber: '12345670',
        accountType: 'Credit',
        balance: 99.99,
        currency: 'GBP',
        id: 'acc-002',
        modifiedDate: '2023-01-09T14:14:14.1057478Z',
        sortCode: '123456',
        status: 'pending',
      },
      {
        accountName: 'account-095',
        accountNumber: '12345671',
        accountType: 'Credit',
        balance: 0,
        currency: 'USD',
        id: 'acc-003',
        modifiedDate: '2023-01-09T14:14:14.1057478Z',
        sortCode: '123456',
        status: 'pending',
      },
    ],
    required: ['id'],
    title: 'Bank Feed Account',
  })
  .openapi('BankFeedAccount')

const BankFeedAccountsSchema = z
  .array(BankFeedAccountSchema)
  .openapi({ 'x-internal': true })
  .openapi('BankFeedAccounts')

const BankTransactionsSchema = z
  .object({
    accountId: z.string().nullable().exactOptional(),
    transactions: z
      .array(
        z
          .object({
            amount: z.number().exactOptional(),
            balance: z.number().exactOptional(),
            clearedOnDate: DateTimeSchema.exactOptional(),
            counterparty: z.string().nullable().exactOptional(),
            description: z.string().nullable().exactOptional(),
            id: z.string().exactOptional(),
            reconciled: z.boolean().exactOptional(),
            reference: z.string().nullable().exactOptional(),
            transactionType: z
              .enum([
                'Unknown',
                'Credit',
                'Debit',
                'Int',
                'Div',
                'Fee',
                'SerChg',
                'Dep',
                'Atm',
                'Pos',
                'Xfer',
                'Check',
                'Payment',
                'Cash',
                'DirectDep',
                'DirectDebit',
                'RepeatPmt',
                'Other',
              ])
              .exactOptional()
              .openapi({
                description: 'Type of transaction for the bank statement line',
                title: 'Bank transaction type',
              }),
          })
          .openapi({ required: [] })
          .and(
            z
              .object({
                modifiedDate: DateTimeSchema.exactOptional().openapi({
                  description: 'The date on which this record was last modified in Codat.',
                }),
              })
              .openapi({ title: 'ModifiedDate', 'x-internal': true, required: [] })
              .and(
                z
                  .object({
                    sourceModifiedDate: DateTimeSchema.exactOptional().openapi({
                      description:
                        'The date on which this record was last modified in the originating system',
                    }),
                  })
                  .openapi({ title: 'Source Modified Date', 'x-internal': true, required: [] }),
              )
              .openapi({ 'x-internal': true }),
          )
          .openapi({
            required: ['amount', 'balance', 'date', 'reconciled', 'transactionType'],
            title: 'Bank transaction line',
          }),
      )
      .nullable()
      .exactOptional(),
  })
  .openapi({
    description:
      '> **Accessing Bank Accounts through Banking API**\n> \n> This datatype was originally used for accessing bank account data both in accounting integrations and open banking aggregators. \n>\n> To view bank account data through the Banking API, please refer to the new datatype [here](https://docs.codat.io/banking-api#/operations/list-all-banking-transactions)\n\n> View the coverage for bank transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions" target="_blank">Data coverage explorer</a>.\n\n## Overview\n\nTransactional banking data for a specific company and account.\n\nBank transactions include the:\n* Amount of the transaction.\n* Current account balance.\n* Transaction type, for example, credit, debit, or transfer.',
    title: 'Bank account transactions',
    required: [],
  })
  .openapi('BankTransactions')

const HRefSchema = z
  .object({ href: z.string().exactOptional() })
  .openapi({ title: 'Hypertext reference', 'x-internal': true, required: [] })
  .openapi('HRef')

const LinksSchema = z
  .object({
    current: HRefSchema,
    next: HRefSchema.exactOptional(),
    previous: HRefSchema.exactOptional(),
    self: HRefSchema,
  })
  .openapi({
    examples: [
      {
        current: { href: '/companies/{id}/data/{dataType}?page=1&pageSize=10' },
        self: { href: '/companies/{id}/data/{dataType}' },
      },
    ],
    required: ['self', 'current'],
    'x-internal': true,
  })
  .openapi('Links')

const BankTransactionsResponseSchema = z
  .object({ results: z.array(BankTransactionsSchema).exactOptional() })
  .openapi({ required: [] })
  .and(
    z
      .object({
        _links: LinksSchema,
        pageNumber: z.int(),
        pageSize: z.int(),
        totalResults: z.int(),
      })
      .openapi({
        examples: [
          {
            _links: {
              current: { href: '/companies/{id}/data/{dataType}?page=1&pageSize=10' },
              pageNumber: 1,
              pageSize: 10,
              self: { href: '/companies/{id}/data/{dataType}' },
              totalResults: 1,
            },
          },
        ],
        required: ['pageNumber', 'pageSize', 'totalResults', '_links'],
        'x-internal': true,
      }),
  )
  .openapi({ 'x-internal': true })
  .openapi('BankTransactionsResponse')

const DataTypeSchema = z
  .enum([
    'accountTransactions',
    'balanceSheet',
    'bankAccounts',
    'bankTransactions',
    'billCreditNotes',
    'billPayments',
    'bills',
    'cashFlowStatement',
    'chartOfAccounts',
    'company',
    'creditNotes',
    'customers',
    'directCosts',
    'directIncomes',
    'invoices',
    'items',
    'journalEntries',
    'journals',
    'paymentMethods',
    'payments',
    'profitAndLoss',
    'purchaseOrders',
    'salesOrders',
    'suppliers',
    'taxRates',
    'trackingCategories',
    'transfers',
    'banking-accountBalances',
    'banking-accounts',
    'banking-transactionCategories',
    'banking-transactions',
    'commerce-companyInfo',
    'commerce-customers',
    'commerce-disputes',
    'commerce-locations',
    'commerce-orders',
    'commerce-paymentMethods',
    'commerce-payments',
    'commerce-productCategories',
    'commerce-products',
    'commerce-taxComponents',
    'commerce-transactions',
  ])
  .openapi({ description: 'Available Data types', example: 'invoices', 'x-internal': true })
  .openapi('DataType')

const PushOperationSchema = z
  .object({
    changes: z
      .array(
        z
          .object({
            attachmentId: z.string().nullable().exactOptional(),
            recordRef: z
              .strictObject({
                dataType: DataTypeSchema.nullable().exactOptional(),
                id: z.string().exactOptional(),
              })
              .exactOptional()
              .openapi({ title: 'Push operation reference', 'x-internal': true, required: [] }),
            type: z
              .enum(['Unknown', 'Created', 'Modified', 'Deleted', 'AttachmentUploaded'])
              .exactOptional()
              .openapi({ title: 'Push change type' }),
          })
          .openapi({ required: [] }),
      )
      .nullable()
      .exactOptional(),
    companyId: z
      .uuid()
      .openapi({
        description: 'Unique identifier for your SMB in Codat.',
        example: '8a210b68-6988-11ed-a1eb-0242ac120002',
      }),
    completedOnUtc: DateTimeSchema.exactOptional().openapi({
      description: 'The datetime when the push was completed, null if Pending.',
    }),
    dataConnectionKey: z
      .uuid()
      .openapi({
        description: "Unique identifier for a company's data connection.",
        example: '2e9d2c44-f675-40ba-8049-353bfcb5e171',
      }),
    dataType: DataTypeSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The type of data being pushed, eg invoices, customers.' }),
    errorMessage: z.string().nullable().exactOptional(),
    pushOperationKey: z
      .uuid()
      .openapi({
        description:
          'A unique identifier generated by Codat to represent this single push operation. This identifier can be used to track the status of the push, and should be persisted.',
      }),
    requestedOnUtc: DateTimeSchema.openapi({
      description: 'The datetime when the push was requested.',
    }),
    status: z
      .enum(['Pending', 'Failed', 'Success', 'TimedOut'])
      .openapi({
        description: 'The status of the push operation.',
        title: 'Push operation status',
      }),
    statusCode: z.int(),
    timeoutInMinutes: z.int32().nullable().exactOptional(),
    timeoutInSeconds: z.int32().nullable().exactOptional().openapi({ deprecated: true }),
    validation: z
      .object({
        errors: z
          .array(
            z
              .strictObject({
                itemId: z.string().nullable().exactOptional(),
                message: z.string().nullable().exactOptional(),
                validatorName: z.string().nullable().exactOptional(),
              })
              .openapi({ title: 'Validation item', required: [] }),
          )
          .nullable()
          .exactOptional(),
        warnings: z
          .array(
            z
              .strictObject({
                itemId: z.string().nullable().exactOptional(),
                message: z.string().nullable().exactOptional(),
                validatorName: z.string().nullable().exactOptional(),
              })
              .openapi({ title: 'Validation item', required: [] }),
          )
          .nullable()
          .exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          'A human-readable object describing validation decisions Codat has made when pushing data into the platform. If a push has failed because of validation errors, they will be detailed here.',
        title: 'Validation',
        required: [],
      }),
  })
  .openapi({
    required: [
      'companyId',
      'pushOperationKey',
      'dataConnectionKey',
      'requestedOnUtc',
      'status',
      'statusCode',
    ],
    'x-internal': true,
  })
  .openapi('PushOperation')

const CreateBankTransactionsResponseSchema = z
  .object({ data: BankTransactionsSchema.exactOptional() })
  .openapi({ required: [] })
  .and(PushOperationSchema)
  .openapi({ 'x-internal': true })
  .openapi('CreateBankTransactionsResponse')

const PushOptionSchema = z
  .object({
    description: z.string().exactOptional(),
    displayName: z.string().min(1),
    options: z
      .array(
        z
          .object({
            description: z.string().exactOptional(),
            displayName: z.string().exactOptional(),
            required: z.boolean().exactOptional(),
            type: z
              .enum([
                'Array',
                'Object',
                'String',
                'Number',
                'Boolean',
                'DateTime',
                'File',
                'MultiPart',
              ])
              .exactOptional()
              .openapi({ title: 'Option Type' }),
            value: z
              .string()
              .min(1)
              .exactOptional()
              .openapi({ description: 'Allowed value for field.' }),
          })
          .openapi({ title: 'Push Option Choice', required: [] }),
      )
      .nullable()
      .exactOptional(),
    properties: z
      .record(
        z.string(),
        z
          .object({
            description: z.string().min(1),
            displayName: z.string().min(1),
            options: z
              .array(
                z
                  .object({
                    description: z.string().exactOptional(),
                    displayName: z.string().exactOptional(),
                    required: z.boolean().exactOptional(),
                    type: z
                      .enum([
                        'Array',
                        'Object',
                        'String',
                        'Number',
                        'Boolean',
                        'DateTime',
                        'File',
                        'MultiPart',
                      ])
                      .exactOptional()
                      .openapi({ title: 'Option Type' }),
                    value: z
                      .string()
                      .min(1)
                      .exactOptional()
                      .openapi({ description: 'Allowed value for field.' }),
                  })
                  .openapi({ title: 'Push Option Choice', required: [] }),
              )
              .nullable()
              .exactOptional(),
            properties: z.record(z.string(), PushOptionPropertySchema).nullable().exactOptional(),
            required: z.boolean(),
            type: z
              .enum([
                'Array',
                'Object',
                'String',
                'Number',
                'Boolean',
                'DateTime',
                'File',
                'MultiPart',
              ])
              .openapi({ title: 'Option Type' }),
            validation: z
              .strictObject({
                information: z
                  .array(
                    z
                      .strictObject({
                        details: z.string().min(1),
                        field: z.string().exactOptional(),
                        ref: z.url().nullable().exactOptional(),
                      })
                      .openapi({ required: ['details'], title: 'Push field validation' }),
                  )
                  .nullable()
                  .exactOptional(),
                warnings: z
                  .array(
                    z
                      .strictObject({
                        details: z.string().min(1),
                        field: z.string().exactOptional(),
                        ref: z.url().nullable().exactOptional(),
                      })
                      .openapi({ required: ['details'], title: 'Push field validation' }),
                  )
                  .nullable()
                  .exactOptional(),
              })
              .exactOptional()
              .openapi({ title: 'Push validation info', required: [] }),
          })
          .openapi({
            required: ['description', 'displayName', 'required', 'type'],
            title: 'Push Option Property',
          }),
      )
      .nullable()
      .exactOptional(),
    required: z.boolean(),
    type: z
      .enum(['Array', 'Object', 'String', 'Number', 'Boolean', 'DateTime', 'File', 'MultiPart'])
      .openapi({ title: 'Option Type' }),
    validation: z
      .strictObject({
        information: z
          .array(
            z
              .strictObject({
                details: z.string().min(1),
                field: z.string().exactOptional(),
                ref: z.url().nullable().exactOptional(),
              })
              .openapi({ required: ['details'], title: 'Push field validation' }),
          )
          .nullable()
          .exactOptional(),
        warnings: z
          .array(
            z
              .strictObject({
                details: z.string().min(1),
                field: z.string().exactOptional(),
                ref: z.url().nullable().exactOptional(),
              })
              .openapi({ required: ['details'], title: 'Push field validation' }),
          )
          .nullable()
          .exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ title: 'Push validation info', required: [] }),
  })
  .openapi({
    required: ['displayName', 'required', 'type'],
    title: 'Push Option',
    'x-internal': true,
  })
  .openapi('PushOption')

const AccountIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier for an account',
      in: 'path',
      name: 'accountId',
      required: true,
      schema: { example: '8a210b68-6988-11ed-a1eb-0242ac120002', format: 'uuid', type: 'string' },
    },
    example: '8a210b68-6988-11ed-a1eb-0242ac120002',
  })

const CompanyIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      in: 'path',
      name: 'companyId',
      required: true,
      schema: {
        description: 'Unique identifier for your SMB in Codat.',
        example: '8a210b68-6988-11ed-a1eb-0242ac120002',
        format: 'uuid',
        type: 'string',
      },
    },
    description: 'Unique identifier for your SMB in Codat.',
    example: '8a210b68-6988-11ed-a1eb-0242ac120002',
  })

const ConnectionIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      in: 'path',
      name: 'connectionId',
      required: true,
      schema: {
        description: "Unique identifier for a company's data connection.",
        example: '2e9d2c44-f675-40ba-8049-353bfcb5e171',
        format: 'uuid',
        type: 'string',
      },
    },
    description: "Unique identifier for a company's data connection.",
    example: '2e9d2c44-f675-40ba-8049-353bfcb5e171',
  })

const OrderByParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).',
      in: 'query',
      name: 'orderBy',
      required: false,
      schema: { example: '-modifiedDate', type: 'string' },
      'x-stoplight': { id: '4je9lwo02netu' },
    },
    example: '-modifiedDate',
  })

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(0),
  )
  .default(1)
  .openapi({
    param: {
      description: 'Page number. [Read more](https://docs.codat.io/using-the-api/paging).',
      in: 'query',
      name: 'page',
      required: true,
      schema: { default: 1, example: 1, format: 'int32', minimum: 0, type: 'integer' },
      'x-stoplight': { id: '1318joqblpp4e' },
    },
    example: 1,
  })

const PageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int32().min(1).max(5000),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      description:
        'Number of records to return in a page. [Read more](https://docs.codat.io/using-the-api/paging).',
      in: 'query',
      name: 'pageSize',
      schema: {
        default: 100,
        example: 100,
        format: 'int32',
        maximum: 5000,
        minimum: 1,
        type: 'integer',
      },
      'x-stoplight': { id: 's2ika6rltk5y6' },
      required: false,
    },
    example: 100,
  })

const QueryParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).',
      in: 'query',
      name: 'query',
      required: false,
      schema: { type: 'string' },
      'x-stoplight': { id: 'gupdb9kt30hfq' },
    },
  })

const AuthHeaderSecurityScheme = {
  description:
    'The word "Basic" followed by a space and your API Key, base64 encoded, which can be found [here](https://app.codat.io/developers/api-keys)',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts',
    tags: ['Bank feed accounts'],
    summary: 'List bank feed bank accounts',
    description:
      'Get BankFeed BankAccounts for a single data source connected to a single company.',
    operationId: 'get-bank-feeds',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: BankFeedAccountsSchema } },
      },
    },
  })

export const putCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRoute =
  createRoute({
    method: 'put',
    path: '/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts',
    tags: ['Bank feed accounts'],
    summary: 'Create bank feed bank accounts',
    description:
      'Put BankFeed BankAccounts for a single data source connected to a single company.',
    operationId: 'create-bank-feed',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
      }),
      body: { content: { 'application/json': { schema: BankFeedAccountsSchema } } },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: BankFeedAccountsSchema } },
      },
    },
  })

export const patchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsAccountIdRoute =
  createRoute({
    method: 'patch',
    path: '/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{accountId}',
    tags: ['Bank feed accounts'],
    summary: 'Update bank feed bank account',
    description:
      'Update a single BankFeed BankAccount for a single data source connected to a single company.',
    operationId: 'update-bank-feed',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
        accountId: AccountIdParamsSchema,
      }),
      body: { content: { 'application/json': { schema: BankFeedAccountSchema } } },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: BankFeedAccountSchema } },
      },
    },
  })

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactionsRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}/bankTransactions',
    tags: ['Bank account transactions'],
    summary: 'List bank transactions for bank account',
    description: 'Gets bank transactions for a given bank account ID',
    operationId: 'list-bank-account-transactions',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
        accountId: AccountIdParamsSchema,
      }),
      query: z.object({
        page: PageParamsSchema,
        pageSize: PageSizeParamsSchema,
        query: QueryParamsSchema,
        orderBy: OrderByParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: BankTransactionsResponseSchema } },
      },
    },
  })

export const getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/options/bankAccounts/{accountId}/bankTransactions',
    tags: ['Bank account transactions'],
    summary: 'List push options for bank account bank transactions',
    description: 'Gets the options of pushing bank account transactions.',
    operationId: 'get-create-bank-account-model',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
        accountId: AccountIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: PushOptionSchema } },
      },
    },
  })

export const postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsRoute =
  createRoute({
    method: 'post',
    path: '/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions',
    tags: ['Bank account transactions'],
    summary: 'Create bank transactions',
    description:
      'Posts bank transactions to the accounting package for a given company.\n\n> **Supported Integrations**\n> \n> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.',
    operationId: 'create-bank-transactions',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
        accountId: AccountIdParamsSchema,
      }),
      query: z.object({
        allowSyncOnPushComplete: z
          .stringbool()
          .default(true)
          .exactOptional()
          .openapi({
            param: {
              in: 'query',
              name: 'allowSyncOnPushComplete',
              schema: { default: true, type: 'boolean' },
              'x-stoplight': { id: 'kc8ehjqr6p02q' },
              required: false,
            },
          }),
        timeoutInMinutes: z
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
              in: 'query',
              name: 'timeoutInMinutes',
              schema: { format: 'int32', type: 'integer' },
              'x-stoplight': { id: 'irz50qjbs3yef' },
              required: false,
            },
          }),
      }),
      body: { content: { 'application/json': { schema: BankTransactionsSchema } } },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateBankTransactionsResponseSchema } },
      },
    },
  })

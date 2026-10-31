import { createRoute, z } from '@hono/zod-openapi'

const AccountTypeSchema = z
  .enum(['Unknown', 'Credit', 'Debit'])
  .openapi({
    description:
      'The type of transactions and balances on the account.  \nFor Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.  \nFor Debit accounts, positive balances are assets, and positive transactions **increase** assets.',
    title: 'Bank Account Type',
    'x-internal': true,
  })
  .openapi('AccountType')

const DateTimeSchema = z
  .string()
  .openapi({
    description:
      'In Codat\'s data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:\n\n```\n2020-10-08T22:40:50Z\n2021-01-01T00:00:00\n```\n\n\n\nWhen syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:\n\n- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`\n- Unqualified local time: `2021-11-15T01:00:00`\n- UTC time offsets: `2021-11-15T01:00:00-05:00`\n\n> Time zones\n> \n> Not all dates from Codat will contain information about time zones.  \n> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.',
    example: '2022-10-23T00:00:00Z',
    title: 'Date time',
  })
  .openapi('DateTime')

const ModifiedDateSchema = z
  .object({
    modifiedDate: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which this record was last modified in Codat.',
    }),
  })
  .openapi({ title: 'ModifiedDate', 'x-internal': true, required: [] })
  .openapi('ModifiedDate')

const SourceModifiedDateSchema = z
  .object({
    sourceModifiedDate: DateTimeSchema.exactOptional().openapi({
      description: 'The date on which this record was last modified in the originating system',
    }),
  })
  .openapi({ title: 'Source Modified Date', 'x-internal': true, required: [] })
  .openapi('SourceModifiedDate')

const ModifiedDatesSchema = ModifiedDateSchema.and(SourceModifiedDateSchema)
  .openapi({ 'x-internal': true })
  .openapi('ModifiedDates')

const AccountSchema = z
  .object({
    balance: z
      .strictObject({
        available: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "The balance available in the account, including any pending transactions. This doesn't include additional funds available from any overdrafts.",
          }),
        current: z
          .number()
          .exactOptional()
          .openapi({
            description: 'The balance of the account only including cleared transactions.',
          }),
        limit: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The minimum allowed balance for the account. For example, a $100.00 overdraft would show as a limit of `-100.00`.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'An object containing bank balance data.',
        title: 'Account Balance Amounts',
        'x-internal': true,
        required: [],
      }),
    currency: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The currency code for the account.' }),
    holder: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the person or company who holds the account.' }),
    id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The ID of the account from the provider.' }),
    identifiers: z
      .strictObject({
        bankCode: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The local (usually national) routing number for the account.\n\nThis is known by different names in different countries:\n* BSB code (Australia)\n* routing number (Canada, USA)\n* sort code (UK)',
          }),
        bic: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The ISO 9362 code (commonly called SWIFT code, SWIFT-BIC or BIC) for the account.',
          }),
        iban: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The international bank account number (IBAN) for the account, if known.',
          }),
        maskedAccountNumber: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'A portion of the actual account `number` to help account identification where number is tokenised (Plaid only)',
          }),
        number: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The account number for the account. When combined with the`bankCode`, this is usually enough to uniquely identify an account within a jurisdiction.',
          }),
        subtype: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Detailed account category' }),
        type: z
          .enum(['Account', 'Card', 'Credit', 'Depository', 'Investment', 'Loan', 'Other'])
          .openapi({ description: 'Type of account', 'x-internal': true }),
      })
      .exactOptional()
      .openapi({
        description: 'An object containing bank account identification information.',
        required: ['type'],
        title: 'Account Identifiers',
        'x-internal': true,
      }),
    informalName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The friendly name of the account, chosen by the holder. This may not have been set by the account holder and therefore is not always available.',
      }),
    institution: z
      .strictObject({
        id: z
          .string()
          .exactOptional()
          .openapi({ description: "The institution's ID, according to the provider." }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description: "The institution's name, according to the underlying provider.",
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The bank or other financial institution providing the account.',
        title: 'Account Institution',
        'x-internal': true,
        required: [],
      }),
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The name of the account according to the provider.' }),
    type: AccountTypeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      "This data type provides a list of all the SMB's bank accounts, with rich data like balances, account numbers, and institutions holding the accounts.\n\nExplore our [data coverage](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-accounts).\n\nResponses are paged, so you should provide `page` and `pageSize` query parameters in your request.",
    examples: [
      {
        results: [
          {
            balance: { available: -459987.97, current: -459964.9, limit: 5000 },
            currency: 'GBP',
            holder: 'Codat Ltd',
            id: '1703194f-7805-4da8-bac0-2ba5da4a4216',
            identifiers: {
              bankCode: '009911',
              bic: 'LOYDGB21006',
              iban: 'GB29 LOYD 4773 2346 7626 29',
              maskedAccountNumber: 'LOYDGB21006',
              number: '46762629',
              subtype: 'checking',
              type: 'Depository',
            },
            informalName: 'Codat',
            institution: { id: 'lloyds-bank', name: 'Lloyds Bank' },
            modifiedDate: '2022-05-23T16:32:50Z',
            name: 'Business Current Account',
            sourceModifiedDate: '2021-08-14T05:04:12',
            type: 'Debit',
          },
        ],
      },
    ],
    required: ['id', 'name', 'type', 'balance', 'identifiers', 'currency', 'institution'],
    title: 'Account',
  })
  .openapi('Account')

const AccountBalanceSchema = z
  .object({
    accountId: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The unique identifier of the account.' }),
    balance: z
      .strictObject({
        available: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              "The balance available in the account, including any pending transactions. This doesn't include additional funds available from any overdrafts.",
          }),
        current: z
          .number()
          .exactOptional()
          .openapi({
            description: 'The balance of the account only including cleared transactions.',
          }),
        limit: z
          .number()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The minimum allowed balance for the account. For example, a $100.00 overdraft would show as a limit of `-100.00`.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Depending on the data provided by the underlying bank, not all balances are always available.',
        title: 'Account Balance Amounts',
        'x-internal': true,
        required: [],
      }),
    date: DateTimeSchema.exactOptional().openapi({ description: 'Date of the balance.' }),
  })
  .openapi({ required: [] })
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      'The Banking Account Balances data type provides a list of balances for a bank account including end-of-day batch balance or running balances per transaction.\n\nResponses are paged, so you should provide `page` and `pageSize` query parameters in your request.\n\n> **How often should I pull Account Balances?**\n>\n> Because these balances are closing balances, we recommend you pull Account Balance no more frequently than daily. If you require a live intraday balance, this can be found for each account on the [Account](https://docs.codat.io/banking-api#/schemas/Account) data type.\n> \n> Whilst you can choose to sync hourly, this may incur usage charges from Plaid or TrueLayer.',
    examples: [
      {
        accountBalances: [
          {
            accountId: 'cce404db-27f7-4286-95db-622b53596cf4',
            balance: { available: 714374.48, current: 714374.57, limit: 5000 },
            date: '2021-03-18T00:00:00',
          },
          {
            accountId: 'cce404db-27f7-4286-95db-622b53596cf4',
            balance: { available: 714374.48, current: 714374.57, limit: 5000 },
            date: '2021-03-19T00:00:00',
          },
          {
            accountId: 'cce404db-27f7-4286-95db-622b53596cf4',
            balance: { available: 714195.66, current: 714204.39, limit: 5000 },
            date: '2021-03-22T00:00:00',
          },
          {
            accountId: '2f593774-1075-4805-a552-84eecc7eb264',
            balance: { available: -644945.42, current: -644925.84, limit: 0 },
            date: '2022-03-09T00:00:00',
          },
        ],
      },
    ],
    required: ['accountId', 'balance', 'date'],
    title: 'Account Balance',
  })
  .openapi('AccountBalance')

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

const PagingInfoSchema = z
  .object({ _links: LinksSchema, pageNumber: z.int(), pageSize: z.int(), totalResults: z.int() })
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
  })
  .openapi('PagingInfo')

const AccountBalancesSchema = z
  .object({ results: z.array(AccountBalanceSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('AccountBalances')

const AccountsSchema = z
  .object({ results: z.array(AccountSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Accounts')

const TransactionSchema = z
  .object({
    accountId: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The unique identifier of the bank account.' }),
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount of the bank transaction.' }),
    authorizedDate: DateTimeSchema.exactOptional().openapi({
      description: 'The date the bank transaction was authorized.',
    }),
    code: z
      .enum([
        'Unknown',
        'Fee',
        'Payment',
        'Cash',
        'Transfer',
        'Interest',
        'Cashback',
        'Cheque',
        'DirectDebit',
        'Purchase',
        'StandingOrder',
        'Adjustment',
        'Credit',
        'Other',
        'NotSupported',
      ])
      .exactOptional()
      .openapi({ description: 'Code to identify the underlying transaction.', 'x-internal': true }),
    currency: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The currency of the bank transaction.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the bank transaction.' }),
    id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The unique identifier of the bank transaction.' }),
    merchantName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the merchant.' }),
    postedDate: DateTimeSchema.exactOptional().openapi({
      description: 'The date the bank transaction was cleared.',
    }),
    transactionCategoryRef: z
      .object({
        id: z
          .string()
          .min(1)
          .openapi({ description: 'The unique category reference id for the bank transaction.' }),
        name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The category name reference for the bank transaction.' }),
      })
      .exactOptional()
      .openapi({
        description: 'An object of bank transaction category reference data.',
        required: ['id'],
        'x-internal': true,
      }),
  })
  .openapi({ required: [] })
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      'The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.\n\nResponses are paged, so you should provide `page` and `pageSize` query parameters in your request.\n\nView the coverage for banking transactions in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions).',
    examples: [
      {
        accountId: '1703194f-7805-4da8-bac0-2ba5da4a4216',
        amount: 5062.39,
        authorizedDate: '2021-07-06T00:00:00',
        currency: 'GBP',
        description: 'Payments for direct income ce149943-c157-43fc-aac7-42a716b655b6',
        id: '0130b5bb-1419-40f6-8a27-7362d0381229',
        merchantName: 'New Look',
        modifiedDate: '2022-05-23T16:32:50Z',
        postedDate: '2021-07-06T00:00:00',
        sourceModifiedDate: '2021-06-28T10:48:12',
        transactionCategoryRef: { id: 'health-and-fitness-sports' },
      },
    ],
    required: ['id', 'accountId', 'currency'],
    title: 'Transaction',
  })
  .openapi('Transaction')

const TransactionCategorySchema = z
  .object({
    hasChildren: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A Boolean indicating whether there are other bank transaction categories beneath this one in the hierarchy.',
      }),
    id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The unique identifier of the bank transaction category.' }),
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The name of the bank transaction category.' }),
    parentId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the parent bank transaction category.' }),
    status: z
      .enum(['Unknown', 'Active', 'Archived'])
      .exactOptional()
      .openapi({ 'x-internal': true }),
  })
  .openapi({ description: 'Status of the bank transaction category.', required: [] })
  .and(ModifiedDatesSchema)
  .openapi({
    description:
      'The Banking Transaction Categories data type provides a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.\n\nResponses are paged, so you should provide `page` and `pageSize` query parameters in your request.',
    examples: [
      {
        hasChildren: true,
        id: 'auto-and-transport',
        modifiedDate: '2022-05-23T16:32:50',
        name: 'Auto & Transport',
        sourceModifiedDate: '2021-04-24T07:59:10',
        status: 'Active',
      },
    ],
    required: ['id', 'name'],
    title: 'Transaction Category',
  })
  .openapi('TransactionCategory')

const TransactionCategoriesSchema = z
  .object({ results: z.array(TransactionCategorySchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('TransactionCategories')

const TransactionsSchema = z
  .object({ results: z.array(TransactionSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Transactions')

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

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountBalancesRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/banking-accountBalances',
    tags: ['Account balances'],
    summary: 'List account balances',
    description:
      'Gets a list of balances for a bank account including end-of-day batch balance or running balances per transaction.',
    operationId: 'list-account-balances',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
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
        content: { 'application/json': { schema: AccountBalancesSchema } },
      },
    },
  })

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/connections/{connectionId}/data/banking-accounts',
  tags: ['Accounts'],
  summary: 'List accounts',
  description:
    'Gets a list of all bank accounts of the SMB, with rich data like balances, account numbers and institutions holdingthe accounts.',
  operationId: 'list-accounts',
  request: {
    params: z.object({ companyId: CompanyIdParamsSchema, connectionId: ConnectionIdParamsSchema }),
    query: z.object({
      page: PageParamsSchema,
      pageSize: PageSizeParamsSchema,
      query: QueryParamsSchema,
      orderBy: OrderByParamsSchema,
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: AccountsSchema } } },
  },
})

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsAccountIdRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/banking-accounts/{accountId}',
    tags: ['Accounts'],
    summary: 'Get account',
    description: 'Gets a specified bank account for a given company',
    operationId: 'get-account',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
        accountId: z
          .uuid()
          .openapi({
            param: {
              description: 'Unique identifier for an account',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: {
                example: '8a210b68-6988-11ed-a1eb-0242ac120002',
                format: 'uuid',
                type: 'string',
              },
            },
            example: '8a210b68-6988-11ed-a1eb-0242ac120002',
          }),
      }),
    },
    responses: {
      200: { description: 'Success', content: { 'application/json': { schema: AccountSchema } } },
    },
    deprecated: true,
  })

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories',
    tags: ['Transaction categories'],
    summary: 'List all transaction categories',
    description:
      'Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transactionactivity.',
    operationId: 'list-transaction-categories',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
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
        content: { 'application/json': { schema: TransactionCategoriesSchema } },
      },
    },
  })

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryIdRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories/{transactionCategoryId}',
    tags: ['Transaction categories'],
    summary: 'Get transaction category',
    description: 'Gets a specified bank transaction category for a given company',
    operationId: 'get-transaction-category',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
        transactionCategoryId: z
          .string()
          .openapi({
            param: {
              description: 'The unique identifier for a banking transaction category',
              in: 'path',
              name: 'transactionCategoryId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: TransactionCategorySchema } },
      },
    },
    deprecated: true,
  })

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsRoute = createRoute(
  {
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/banking-transactions',
    tags: ['Transactions'],
    summary: 'List transactions',
    description: 'Gets a list of transactions incurred by a bank account.',
    operationId: 'list-transactions',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        connectionId: ConnectionIdParamsSchema,
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
        content: { 'application/json': { schema: TransactionsSchema } },
      },
    },
  },
)

export const getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/connections/{connectionId}/data/banking-transactions/{transactionId}',
    tags: ['Transactions'],
    summary: 'Get bank transaction',
    description: 'Gets a specified bank transaction for a given company',
    operationId: 'get-transaction',
    request: {
      params: z.object({
        companyId: CompanyIdParamsSchema,
        transactionId: z
          .string()
          .openapi({
            param: {
              description: 'The unique identifier for a transaction',
              in: 'path',
              name: 'transactionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        connectionId: ConnectionIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: TransactionSchema } },
      },
    },
    deprecated: true,
  })

export const getCompaniesCompanyIdDataBankingTransactionsRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/data/banking-transactions',
  tags: ['Transactions'],
  summary: 'List banking transactions',
  description: 'Gets a list of transactions incurred by a company across all bank accounts.',
  operationId: 'list-bank-transactions',
  request: {
    params: z.object({ companyId: CompanyIdParamsSchema }),
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
      content: { 'application/json': { schema: TransactionsSchema } },
    },
  },
})

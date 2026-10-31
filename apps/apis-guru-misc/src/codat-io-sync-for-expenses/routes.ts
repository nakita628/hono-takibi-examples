import { createRoute, z } from '@hono/zod-openapi'

type DataConnectionType = {
  additionalProperties?: unknown
  connectionInfo?: { [key: string]: string }
  created: string
  dataConnectionErrors?: {
    errorMessage?: string
    erroredOnUtc?: DataConnectionType
    statusCode?: string
    statusText?: string
  }[]
  id: string
  integrationId: string
  integrationKey: string
  lastSync?: DataConnectionType
  linkUrl: string
  platformName: string
  sourceId: string
  sourceType: 'Accounting' | 'Banking' | 'Commerce' | 'Other' | 'Unknown'
  status: 'PendingAuth' | 'Linked' | 'Unlinked' | 'Deauthorized'
}

const AccountMappingInfoSchema = z
  .strictObject({
    accountType: z
      .enum(['Asset', 'Liability', 'Income', 'Expense', 'Equity'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Type of the account.', example: 'Expense' }),
    currency: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Currency of the account.', example: 'GBP' }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifier of account.', example: '6' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Name of the account as it appears in the companies accounting software.',
        example: 'Purchases',
      }),
    validTransactionTypes: z
      .array(
        z
          .enum([
            'Payment',
            'Refund',
            'Reward',
            'Chargeback',
            'TransferIn',
            'TransferOut',
            'AdjustmentIn',
            'AdjustmentOut',
          ])
          .openapi({ example: 'Payment' }),
      )
      .min(0)
      .max(8)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Supported transaction types for the account.' }),
  })
  .openapi({
    title: 'Account mapping info.',
    'x-examples': {
      'Example AccountInfo': {
        accountType: 'Expense',
        currency: 'GBP',
        id: '313a4dbe-b3a4-42f0-a5f5-43e382e62db9',
        name: 'Travel',
        validTransactionTypes: ['Payment', 'Refund'],
      },
    },
    required: [],
  })
  .openapi('AccountMappingInfo')

const AttachmentSchema = z
  .object({
    companyId: z.uuid().exactOptional().openapi({ description: 'Unique ID of company in Codat' }),
    id: z.string().exactOptional().openapi({ description: 'Unique identifier of attachment' }),
    transactionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of transaction' }),
  })
  .openapi({
    title: 'Attachment',
    'x-examples': {
      'Attachment Example': {
        companyId: 'bf1e0242-5b7a-418b-a307-9e09dbf9f39a',
        id: '1400000000122699154',
        transactionId: 'f8f00edd-ddb0-4ca5-b36b-8f932e6b5160',
      },
    },
    required: [],
  })
  .openapi('Attachment')

const BankAccountSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the account from which purchases are made',
        example: '32',
      }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('BankAccount')

const CodatErrorMessageSchema = z
  .object({
    canBeRetried: z.string().exactOptional(),
    correlationId: z.string().exactOptional(),
    detailedErrorCode: z.int().exactOptional(),
    error: z.string().exactOptional(),
    inner: z.string().exactOptional(),
    service: z.string().exactOptional(),
    statusCode: z.int().exactOptional(),
    validation: z
      .object({
        errors: z
          .array(
            z
              .object({
                itemId: z.string().exactOptional(),
                message: z.string().exactOptional(),
                ruleId: z.string().exactOptional(),
                validatorName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        hasErrors: z.boolean().exactOptional(),
        hasInternals: z.boolean().exactOptional(),
        hasWarnings: z.boolean().exactOptional(),
        internals: z
          .array(
            z
              .object({
                itemId: z.string().exactOptional(),
                message: z.string().exactOptional(),
                ruleId: z.string().exactOptional(),
                validatorName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
        warnings: z
          .array(
            z
              .object({
                itemId: z.string().exactOptional(),
                message: z.string().exactOptional(),
                ruleId: z.string().exactOptional(),
                validatorName: z.string().exactOptional(),
              })
              .openapi({ required: [] }),
          )
          .exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    title: 'Error message',
    'x-examples': {
      'Invalid Dataset': {
        canBeRetried: 'No',
        correlationId: '2201579598a29055025d2e0f829fa89a',
        detailedErrorCode: 0,
        error: 'There are problems with the request, see the Validation property for more detail.',
        service: 'ExpenseSyncApi',
        statusCode: 400,
        validation: {
          errors: [
            {
              itemId: 'Items[0].Lines[0].NetAmount',
              message: 'The field NetAmount must be between 0 and 5000000.',
            },
            {
              itemId: 'Items[0].Lines[0].TaxAmount',
              message: 'The field TaxAmount must be between 0 and 5000000.',
            },
          ],
          warnings: [],
        },
      },
      'Not Found': {
        canBeRetried: 'Unknown',
        correlationId: '',
        detailedErrorCode: 0,
        error: 'NotFound',
        service: 'ExpenseSyncApi',
        statusCode: 404,
      },
    },
    required: [],
  })
  .openapi('CodatErrorMessage')

const CustomerSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'id of the customer for all income related activities to be associated to.',
        example: '142',
      }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('Customer')

const SupplierSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'id of the supplier for all purchases to be associated to',
        example: '124',
      }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('Supplier')

const CompanyConfigurationSchema = z
  .object({
    bankAccount: BankAccountSchema.exactOptional(),
    customer: CustomerSchema.exactOptional(),
    supplier: SupplierSchema.exactOptional(),
  })
  .openapi({
    title: 'Company configuration',
    'x-examples': {
      'Config Example': {
        bankAccount: { id: '89' },
        customer: { id: '140' },
        supplier: { id: '124' },
      },
    },
    required: [],
  })
  .openapi('CompanyConfiguration')

const DataConnectionSchema: z.ZodType<DataConnectionType> = z
  .lazy(() =>
    z
      .object({
        additionalProperties: z.never().exactOptional(),
        connectionInfo: z.record(z.string(), z.string()).exactOptional(),
        created: z
          .string()
          .openapi({
            description:
              'In Codat\'s data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:\n\n```\n2020-10-08T22:40:50Z\n2021-01-01T00:00:00\n```\n\n\n\nWhen syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:\n\n- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`\n- Unqualified local time: `2021-11-15T01:00:00`\n- UTC time offsets: `2021-11-15T01:00:00-05:00`\n\n> Time zones\n> \n> Not all dates from Codat will contain information about time zones.  \n> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.',
            example: '2022-10-23T00:00:00Z',
            title: 'Date time',
          }),
        dataConnectionErrors: z
          .array(
            z
              .object({
                errorMessage: z.string().exactOptional(),
                erroredOnUtc: z.lazy(() => DataConnectionSchema).exactOptional(),
                statusCode: z.string().exactOptional(),
                statusText: z.string().exactOptional(),
              })
              .openapi({ title: 'Data connection error', required: [] }),
          )
          .exactOptional(),
        id: z
          .uuid()
          .openapi({
            description: "Unique identifier for a company's data connection.",
            example: '2e9d2c44-f675-40ba-8049-353bfcb5e171',
          }),
        integrationId: z
          .uuid()
          .openapi({
            description: 'A Codat ID representing the integration.',
            example: 'fd321cb6-7963-4506-b873-e99593a45e30',
          }),
        integrationKey: z
          .string()
          .openapi({
            description:
              "A unique four-character ID that identifies the platform of the company's data connection. This ensures continuity if the platform changes its name in the future.",
          }),
        lastSync: z.lazy(() => DataConnectionSchema).exactOptional(),
        linkUrl: z
          .url()
          .openapi({
            example:
              'https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/2e2eb431-c1fa-4dc9-93fa-d29781c12bcd/start',
          }),
        platformName: z.string(),
        sourceId: z
          .uuid()
          .openapi({
            description:
              'A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.',
            example: '35b92968-9851-4095-ad60-395c95cbcba4',
          }),
        sourceType: z
          .enum(['Accounting', 'Banking', 'Commerce', 'Other', 'Unknown'])
          .openapi({
            description: 'The type of platform of the connection.',
            example: 'Accounting',
            title: 'Source Type',
            'x-internal': true,
          }),
        status: z
          .enum(['PendingAuth', 'Linked', 'Unlinked', 'Deauthorized'])
          .openapi({
            description: 'The current authorization status of the data connection.',
            title: 'Data connection status',
          }),
      })
      .openapi({
        description: 'A connection represents the link between a `company` and a source of data.',
        example: {
          created: '2022-10-27T09:53:29Z',
          id: 'ee2eb431-c0fa-4dc9-93fa-d29781c12bcd',
          integrationId: 'bf083d72-62c7-493e-aec9-81b4dbba7e2c',
          integrationKey: 'dfxm',
          lastSync: '2022-10-27T10:22:43.6464237Z',
          linkUrl:
            'https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start',
          platformName: 'Basiq',
          sourceId: 'bdd831ce-eebd-4896-89a7-20e5ee8989ee',
          sourceType: 'Banking',
          status: 'Linked',
        },
        required: [
          'id',
          'integrationId',
          'integrationKey',
          'sourceId',
          'platformName',
          'linkUrl',
          'status',
          'created',
          'sourceType',
        ],
        title: 'Connection',
      }),
  )
  .openapi('DataConnection')

const CompanySyncStatusSchema = z
  .strictObject({
    companyId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for your SMB in Codat.',
        example: 'd4d73051-ed31-42b6-99f6-d288cd940992',
      }),
    dataPushed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean of whether the sync resulted in data being pushed.' }),
    errorMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Error message of the sync.' }),
    syncExceptionMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Exception message of the sync.' }),
    syncId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the sync.',
        example: 'a6a22aff-a43a-411d-a910-2dae73217cce',
      }),
    syncStatus: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Text status of the sync.', example: 'Completed' }),
    syncStatusCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Status code of the sync.', example: 2000 }),
    syncUtc: z
      .lazy(() => DataConnectionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Datetime of the sync.' }),
  })
  .openapi({
    title: 'Company sync status',
    'x-examples': {
      'Success Data Pushed': {
        companyId: '20803807-4e9a-4cb7-b67b-9f889a3916e1',
        dataPushed: true,
        errorMessage: '',
        syncExceptionMessage: '',
        syncId: 'aa4c9dfd-e945-4424-9628-9e724f14c267',
        syncStatus: 'Complete',
        syncStatusCode: 2000,
        syncUtc: '2023-01-24T14:15:22Z',
      },
      'Success No Data Pushed': {
        companyId: '20803807-4e9a-4cb7-b67b-9f889a3916e1',
        dataPushed: false,
        errorMessage: '',
        syncExceptionMessage: '',
        syncId: 'aa4c9dfd-e945-4424-9628-9e724f14c267',
        syncStatus: 'Complete',
        syncStatusCode: 2040,
        syncUtc: '2023-01-24T14:15:22Z',
      },
    },
    required: [],
  })
  .openapi('CompanySyncStatus')

const RecordRefSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'identifier of linked reference from mapping options.',
        example: '40e3e57c-2322-4898-966c-ca41adfd23fd',
      }),
  })
  .openapi({ title: 'Record reference', 'x-internal': true, required: [] })
  .openapi('RecordRef')

const ExpenseTransactionLineSchema = z
  .object({
    accountRef: RecordRefSchema,
    netAmount: z
      .number()
      .openapi({ description: 'Amount of the line, exclusive of tax.', example: 110.42 }),
    taxAmount: z.number().openapi({ description: 'Amount of tax for the line.', example: 14.43 }),
    taxRateRef: RecordRefSchema.exactOptional(),
    trackingRefs: z.array(RecordRefSchema).min(1).max(10).exactOptional(),
  })
  .openapi({
    required: ['netAmount', 'taxAmount', 'accountRef'],
    title: 'Expense transaction line',
    'x-examples': {
      ExpenseTransactionLine: {
        accountRef: { id: '16989b16-96d4-401a-9054-f5c620c655a6' },
        netAmount: 110.42,
        taxAmount: 14.43,
        taxRateRef: { id: '08d37c46-8d5d-441b-8bad-76286c43047e' },
        trackingRefs: [{ id: 'e9a1b63d-9ff0-40e7-8038-016354b987e6' }],
      },
    },
    'x-internal': true,
  })
  .openapi('ExpenseTransactionLine')

const ExpenseTransactionSchema = z
  .object({
    currency: z
      .string()
      .openapi({ description: 'Currency the transaction was recorded in.', example: 'GBP' }),
    currencyRate: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Rate to convert the total amount of the payment into the base currency for the company at the time of the payment.\n\nCurrency rates in Codat are implemented as the multiple of foreign currency units to each base currency unit.  \n\nWhere the currency rate is provided by the underlying accounting platform, it will be available from Codat with the same precision (up to a maximum of 9 decimal places). \n\nFor accounting platforms which do not provide an explicit currency rate, it is calculated as `baseCurrency / foreignCurrency` and will be returned to 9 decimal places.\n\n## Examples with base currency of GBP\n\n| Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (GBP) |\n| :--------------- | :------------- | :------------ | :------------------------- |\n| **USD**          | $20            | 0.781         | £15.62                     |\n| **EUR**          | €20            | 0.885         | £17.70                     |\n| **RUB**          | ₽20            | 0.011         | £0.22                      |\n\n## Examples with base currency of USD\n\n| Foreign Currency | Foreign Amount | Currency Rate | Base Currency Amount (USD) |\n| :--------------- | :------------- | :------------ | :------------------------- |\n| **GBP**          | £20            | 1.277         | $25.54                     |\n| **EUR**          | €20            | 1.134         | $22.68                     |\n| **RUB**          | ₽20            | 0.015         | $0.30                      |',
        title: 'Currency rate',
      }),
    id: z
      .uuid()
      .openapi({
        description: 'Your unique idenfier for the transaction.',
        example: '4d7c6929-7770-412b-91bb-44d3bc71d111',
      }),
    issueDate: z
      .lazy(() => DataConnectionSchema)
      .openapi({ description: 'Date of the transaction was recorded.' }),
    lines: z
      .array(ExpenseTransactionLineSchema)
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({ description: 'Array of transaction lines.' }),
    merchantName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the merchant where the purchase took place',
        example: 'Amazon UK',
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Any private, company notes about the transaction.',
        example: 'APPLE.COM/BILL - 09001077498 - Card Ending: 4590',
      }),
    type: z
      .enum([
        'Payment',
        'Refund',
        'Reward',
        'Chargeback',
        'TransferIn',
        'TransferOut',
        'AdjustmentIn',
        'AdjustmentOut',
      ])
      .openapi({ description: 'The type of transaction.', example: 'Payment' }),
  })
  .openapi({
    required: ['id', 'type', 'issueDate', 'currency'],
    title: 'Expense transaction',
    'x-examples': {
      Payment: {
        currency: 'GBP',
        currencyRate: 1.18,
        id: 'a44135b0-6882-489a-83fe-a0c57a4afb19',
        issueDate: '2021-05-21T00:00:00+00:00',
        lines: [
          {
            accountRef: { id: 'a505cb47-0f7d-4e8b-90aa-9f9c2308b7bc' },
            netAmount: 110.42,
            taxAmount: 14.43,
            taxRateRef: { id: '7e2ccb60-de1a-4c2b-9bd9-2f98a1c6be3f' },
            trackingRefs: [{ id: '31a7e93c-4bb2-474c-b26d-10b2b75f7a25' }],
          },
        ],
        merchantName: 'Amazon UK',
        notes: 'amazon purchase',
        type: 'Payment',
      },
    },
  })
  .openapi('ExpenseTransaction')

const CreateExpenseRequestSchema = z
  .object({ items: z.array(ExpenseTransactionSchema).min(1).max(50).exactOptional() })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('CreateExpenseRequest')

const CreateExpenseResponseSchema = z
  .object({
    datasetId: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Unique id of dataset created',
        example: 'cd937d46-8e41-43a9-9477-a79158ffd98a',
      }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('CreateExpenseResponse')

const HalLinkSchema = z
  .object({ href: z.string().exactOptional() })
  .openapi({ title: 'Hypertext reference', 'x-internal': true, required: [] })
  .openapi('HalLink')

const IntegrationTypeSchema = z
  .enum(['expenses', 'bankfeeds'])
  .nullable()
  .default('expenses')
  .openapi({
    description: 'Type of transaction that has been processed e.g. Expense or Bank Feed.',
    example: 'expenses',
    'x-internal': true,
  })
  .openapi('IntegrationType')

const TaxRateMappingInfoSchema = z
  .strictObject({
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Code for the tax rate from the accounting platform.',
        example: 'UK Standard Rate (Bills)',
      }),
    effectiveTaxRate: z
      .number()
      .exactOptional()
      .openapi({ description: 'Effective tax rate.', example: 20 }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifier of tax rate.', example: '59_Bills' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Name of the tax rate in the accounting platform.',
        example: 'UK Standard Rate (Bills) Bills',
      }),
    totalTaxRate: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Total (not compounded) sum of the components of a tax rate.',
        example: 20,
      }),
    validTransactionTypes: z
      .array(
        z
          .enum([
            'Payment',
            'Refund',
            'Reward',
            'Chargeback',
            'TransferIn',
            'TransferOut',
            'AdjustmentIn',
            'AdjustmentOut',
          ])
          .openapi({ example: 'Payment' }),
      )
      .min(0)
      .max(8)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Supported transaction types for the account.' }),
  })
  .openapi({
    title: 'Tax rate mapping info.',
    'x-examples': {
      'UK Tax Rate': {
        code: 'UK Standard Rate (Bills)',
        effectiveTaxRate: 20,
        id: '59_Bills',
        name: 'UK Standard Rate (Bills) Bills',
        totalTaxRate: 20,
        validTransactionTypes: ['Payment', 'Reward'],
      },
    },
    required: [],
  })
  .openapi('TaxRateMappingInfo')

const TrackingCategoryMappingInfoSchema = z
  .strictObject({
    hasChildren: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean of whether the tracking category has child categories.' }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the tracking category.',
        example: 'DEPARTMENT_2',
      }),
    modifiedDate: z
      .lazy(() => DataConnectionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Datetime when the tracking category was last modified.' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Name of the tracking category as it appears in the accounting software.',
        example: 'New York',
      }),
    parentId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID of the parent tracking category', example: 'DEPARTMENTS' }),
  })
  .openapi({
    title: 'Tracking category mapping info.',
    'x-examples': {
      'Parent Tracking Category': {
        hasChildren: true,
        id: 'DEPARTMENTS',
        modifiedDate: '2023-02-09T11:42:41Z',
        name: 'Departments',
      },
      'Tracking Category with parentId': {
        hasChildren: false,
        id: 'DEPARTMENT_1',
        modifiedDate: '2023-02-09T11:42:41Z',
        name: 'TestLocation',
        parentId: 'DEPARTMENTS',
      },
    },
    required: [],
  })
  .openapi('TrackingCategoryMappingInfo')

const MappingOptionsSchema = z
  .strictObject({
    accounts: z
      .array(AccountMappingInfoSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of available accounts for mapping.' }),
    expenseProvider: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the expense integration.', example: 'Partner Expense' }),
    taxRates: z
      .array(TaxRateMappingInfoSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of available tax rates for mapping.' }),
    trackingCategories: z
      .array(TrackingCategoryMappingInfoSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of available tracking categories for mapping.' }),
  })
  .openapi({ title: 'Mapping options', 'x-examples': {}, required: [] })
  .openapi('MappingOptions')

const PagingInfoSchema = z
  .object({
    _links: z
      .object({
        current: HalLinkSchema,
        next: HalLinkSchema.exactOptional(),
        previous: HalLinkSchema.exactOptional(),
        self: HalLinkSchema,
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
      }),
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
  })
  .openapi('PagingInfo')

const PostSyncSchema = z
  .strictObject({ datasetIds: z.array(z.uuid()).min(1).nullable().exactOptional() })
  .openapi({ title: 'Post sync', required: [] })
  .openapi('PostSync')

const SyncInitiatedSchema = z
  .strictObject({ syncId: z.uuid().exactOptional() })
  .openapi({ title: 'Sync initiated', required: [] })
  .openapi('SyncInitiated')

const TransactionStatusSchema = z
  .enum(['Unknown', 'Pending', 'ValidationError', 'Completed', 'PushError'])
  .nullable()
  .openapi({ description: 'Status of the transaction.', example: 'Completed', 'x-internal': true })
  .openapi('TransactionStatus')

const TransactionMetadataSchema = z
  .strictObject({
    integrationType: IntegrationTypeSchema.exactOptional(),
    message: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Metadata such as validation errors or the resulting record created in the accounting software.',
      }),
    status: TransactionStatusSchema.exactOptional(),
    transactionId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Your unique idenfier of the transaction.',
        example: 'aa02271d-ed5f-47f5-be76-778d5905225a',
      }),
  })
  .openapi({
    title: 'Transaction metadata',
    'x-examples': {
      'Successful Transaction': {
        integrationType: 'expense',
        status: 'Completed',
        transactionId: '8fdba4ed-e327-4925-be1a-b7a2b04627f7',
      },
      'Unsuccessful Transaction': {
        integrationType: 'string',
        message:
          'The line item total -208.10((-195.01 + -1.09) + (-10.01 + -1.99)) must equal the transaction total -1.1',
        status: 'ValidationError',
        transactionId: '3d694cd1-4cd9-4136-91db-32408195c6fc',
      },
    },
    required: [],
  })
  .openapi('TransactionMetadata')

const TransactionMetadataListSchema = z
  .object({ results: z.array(TransactionMetadataSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({
    'x-examples': {
      'Example 1': {
        links: { current: { href: 'string' }, self: { href: 'string' } },
        pageNumber: 1,
        pageSize: 100,
        results: [
          {
            integrationType: 'expenses',
            status: 'Completed',
            transactionId: 'aa02271d-ed5f-47f5-be76-778d5905225a',
          },
          {
            integrationType: 'expenses',
            status: 'Completed',
            transactionId: '730177a2-8505-410a-9ebc-c2dd52e4bea9',
          },
        ],
        totalResults: 2,
      },
    },
    'x-internal': true,
  })
  .openapi('TransactionMetadataList')

const SyncIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: 'Unique identifier for a sync.',
      in: 'path',
      name: 'syncId',
      required: true,
      schema: { example: '6fb40d5e-b13e-11ed-afa1-0242ac120002', format: 'uuid', type: 'string' },
    },
    example: '6fb40d5e-b13e-11ed-afa1-0242ac120002',
  })

const TransactionIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      description: "The unique identifier for your SMB's transaction.",
      in: 'path',
      name: 'transactionId',
      required: true,
      schema: { example: '336694d8-2dca-4cb5-a28d-3ccb83e55eee', format: 'uuid', type: 'string' },
    },
    example: '336694d8-2dca-4cb5-a28d-3ccb83e55eee',
  })

const AuthHeaderSecurityScheme = {
  description:
    'The word "Basic" followed by a space and your API Key, base64 encoded, which can be found [here](https://app.codat.io/developers/api-keys)',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getCompaniesCompanyIdSyncExpensesConfigRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/sync/expenses/config',
  tags: ['Configuration'],
  summary: 'Get company configuration',
  description: 'Gets a companies expense sync configuration',
  operationId: 'get-company-configuration',
  request: {
    params: z.object({
      companyId: z
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
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanyConfigurationSchema } },
    },
  },
})

export const postCompaniesCompanyIdSyncExpensesConfigRoute = createRoute({
  method: 'post',
  path: '/companies/{companyId}/sync/expenses/config',
  tags: ['Configuration'],
  summary: 'Set company configuration',
  description: 'Sets a companies expense sync configuration',
  operationId: 'save-company-configuration',
  request: {
    params: z.object({
      companyId: z
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
        }),
    }),
    body: { content: { 'application/json': { schema: CompanyConfigurationSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanyConfigurationSchema } },
    },
    400: {
      description: 'Bad Request',
      content: { 'application/json': { schema: CodatErrorMessageSchema } },
    },
  },
})

export const postCompaniesCompanyIdSyncExpensesConnectionsPartnerExpenseRoute = createRoute({
  method: 'post',
  path: '/companies/{companyId}/sync/expenses/connections/partnerExpense',
  tags: ['Connections'],
  summary: 'Create Partner Expense connection',
  description: 'Creates a Partner Expense data connection',
  operationId: 'create-partner-expense-connection',
  request: {
    params: z.object({
      companyId: z
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
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DataConnectionSchema } },
    },
  },
})

export const postCompaniesCompanyIdSyncExpensesDataExpenseTransactionsRoute = createRoute({
  method: 'post',
  path: '/companies/{companyId}/sync/expenses/data/expense-transactions',
  tags: ['Expenses'],
  summary: 'Create expense-transactions',
  description: 'Create an expense transaction',
  operationId: 'create-expense-dataset',
  request: {
    params: z.object({
      companyId: z
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
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: CreateExpenseRequestSchema,
          examples: {
            Payment: {
              value: {
                items: [
                  {
                    currency: 'GBP',
                    currencyRate: 1.18,
                    id: '4d7c6929-7770-412b-91bb-44d3bc71d111',
                    issueDate: '2021-05-21T00:00:00+00:00',
                    lines: [
                      {
                        accountRef: { id: '9aa5b894-1be9-4f97-96cd-ffde90766b3e' },
                        netAmount: 110.42,
                        taxAmount: 14.43,
                        taxRateRef: { id: '77a32ee2-60c7-4ab9-917a-bd82e2e43a26' },
                        trackingRefs: [{ id: 'dde5b35f-5d33-40bd-a34f-ee529f4c785c' }],
                      },
                    ],
                    merchantName: 'Amazon UK',
                    notes: 'APPLE.COM/BILL - 09001077498 - Card Ending: 4590',
                    type: 'Payment',
                  },
                ],
              },
            },
            Refund: {
              value: {
                items: [
                  {
                    currency: 'GBP',
                    id: '7008d3f2-aeb4-11ed-afa1-0242ac120002',
                    issueDate: '2023-02-17T00:00:00+00:00',
                    lines: [
                      {
                        accountRef: { id: '42' },
                        netAmount: 110.42,
                        taxAmount: 14.43,
                        taxRateRef: { id: '23_Bills' },
                        trackingRefs: [{ id: 'DEPARTMENT_6' }],
                      },
                    ],
                    merchantName: 'Amazon UK',
                    notes: 'APPLE.COM/BILL - 09001077498 - Card Ending: 4590',
                    type: 'Refund',
                  },
                ],
              },
            },
            Transfer: {
              value: {
                items: [
                  {
                    currency: 'GBP',
                    id: '979a7ee8-aeb4-11ed-afa1-0242ac120002',
                    issueDate: '2021-05-21T00:00:00+00:00',
                    lines: [
                      {
                        accountRef: { id: '40e3e57c-2322-4898-966c-ca41adfd23fd' },
                        netAmount: 180.93,
                        taxAmount: 0,
                      },
                    ],
                    notes: 'Credit Card Payment',
                    type: 'TransferIn',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CreateExpenseResponseSchema,
          examples: {
            'Example 1': { value: { datasetId: 'cd937d46-8e41-43a9-9477-a79158ffd98a' } },
          },
        },
      },
    },
  },
})

export const getCompaniesCompanyIdSyncExpensesMappingOptionsRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/sync/expenses/mappingOptions',
  tags: ['Mapping options'],
  summary: 'Mapping options',
  description: 'Gets the expense mapping options for a companies accounting software',
  operationId: 'get-mapping-options',
  request: {
    params: z.object({
      companyId: z
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
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MappingOptionsSchema } },
    },
  },
})

export const postCompaniesCompanyIdSyncExpensesSyncsRoute = createRoute({
  method: 'post',
  path: '/companies/{companyId}/sync/expenses/syncs',
  tags: ['Sync'],
  summary: 'Initiate sync',
  description: 'Initiate sync of pending transactions.',
  operationId: 'intiate-sync',
  request: {
    params: z.object({
      companyId: z
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
        }),
    }),
    body: { content: { 'application/json': { schema: PostSyncSchema } } },
  },
  responses: {
    202: {
      description: 'Returns the newly created SyncId',
      content: { 'application/json': { schema: SyncInitiatedSchema } },
    },
    400: {
      description: 'If model is incorrect',
      content: { 'application/json': { schema: CodatErrorMessageSchema } },
    },
    404: {
      description: 'If company not found',
      content: { 'application/json': { schema: CodatErrorMessageSchema } },
    },
    422: {
      description: 'If the specified company does not have a valid set of DataConnections setup',
      content: { 'application/json': { schema: CodatErrorMessageSchema } },
    },
  },
})

export const getCompaniesCompanyIdSyncExpensesSyncsLastSuccessfulStatusRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/sync/expenses/syncs/lastSuccessful/status',
  tags: ['Sync status'],
  summary: 'Last successful sync',
  description: 'Gets the status of the last successfull sync',
  operationId: 'get-last-successful-sync',
  request: {
    params: z.object({
      companyId: z
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
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanySyncStatusSchema } },
    },
  },
})

export const getCompaniesCompanyIdSyncExpensesSyncsLatestStatusRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/sync/expenses/syncs/latest/status',
  tags: ['Sync status'],
  summary: 'Latest sync status',
  description: 'Gets the latest sync status',
  operationId: 'get-latest-sync',
  request: {
    params: z.object({
      companyId: z
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
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanySyncStatusSchema } },
    },
  },
})

export const getCompaniesCompanyIdSyncExpensesSyncsListStatusRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/sync/expenses/syncs/list/status',
  tags: ['Sync status'],
  summary: 'List sync statuses',
  description: 'Gets a list of sync statuses',
  operationId: 'list-syncs',
  request: {
    params: z.object({
      companyId: z
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
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.array(CompanySyncStatusSchema) } },
    },
  },
})

export const getCompaniesCompanyIdSyncExpensesSyncsSyncIdStatusRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/sync/expenses/syncs/{syncId}/status',
  tags: ['Sync status'],
  summary: 'Get Sync status',
  description: 'Get the sync status for a specified sync',
  operationId: 'get-sync-by-id',
  request: {
    params: z.object({
      companyId: z
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
        }),
      syncId: SyncIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CompanySyncStatusSchema } },
    },
  },
})

export const getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions',
  tags: ['Transaction status'],
  summary: 'Get Sync transactions',
  description: "Get's the transactions and status for a sync",
  operationId: 'list-sync-transactions',
  request: {
    params: z.object({
      companyId: z
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
        }),
      syncId: SyncIdParamsSchema,
    }),
    query: z.object({
      page: z
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
        }),
      pageSize: z
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
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TransactionMetadataListSchema } },
    },
  },
})

export const getCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdRoute =
  createRoute({
    method: 'get',
    path: '/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}',
    tags: ['Transaction status'],
    summary: 'Get Sync Transaction',
    description: 'Gets the status of a transaction for a sync',
    operationId: 'get-sync-transaction',
    request: {
      params: z.object({
        companyId: z
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
          }),
        syncId: SyncIdParamsSchema,
        transactionId: TransactionIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: z.array(TransactionMetadataSchema) } },
      },
    },
  })

export const postCompaniesCompanyIdSyncExpensesSyncsSyncIdTransactionsTransactionIdAttachmentsRoute =
  createRoute({
    method: 'post',
    path: '/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments',
    tags: ['Expenses'],
    summary: 'Upload attachment',
    description: 'Creates an attachment in the accounting software against the given transactionId',
    operationId: 'upload-attachment',
    request: {
      params: z.object({
        companyId: z
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
          }),
        transactionId: TransactionIdParamsSchema,
        syncId: SyncIdParamsSchema,
      }),
      body: {
        content: {
          'multipart/form-data': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
        },
      },
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: AttachmentSchema } } },
    },
  })

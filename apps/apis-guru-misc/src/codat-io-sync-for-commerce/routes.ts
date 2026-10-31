import { createRoute, z } from '@hono/zod-openapi'

type BrandingType = {
  button?: { default?: unknown; hover?: unknown }
  logo?: { full?: { image?: { alt?: string; src?: string } }; square?: unknown }
  sourceId?: string
}

const ConnectionSchema: z.ZodType<ConnectionType> = z
  .lazy(() =>
    z
      .object({
        additionalProperties: z.never().exactOptional(),
        connectionInfo: z.record(z.string(), z.string()).exactOptional(),
        created: z.lazy(() => CompanySchema),
        dataConnectionErrors: z
          .array(
            z
              .object({
                errorMessage: z.string().exactOptional(),
                erroredOnUtc: z.lazy(() => CompanySchema).exactOptional(),
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
            examples: ['2e9d2c44-f675-40ba-8049-353bfcb5e171'],
          }),
        integrationId: z
          .uuid()
          .openapi({
            description: 'A Codat ID representing the integration.',
            examples: ['fd321cb6-7963-4506-b873-e99593a45e30'],
          }),
        integrationKey: z
          .string()
          .openapi({
            description:
              "A unique four-character ID that identifies the platform of the company's data connection. This ensures continuity if the platform changes its name in the future.",
          }),
        lastSync: z.lazy(() => CompanySchema).exactOptional(),
        linkUrl: z
          .url()
          .openapi({
            examples: [
              'https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/2e2eb431-c1fa-4dc9-93fa-d29781c12bcd/start',
            ],
          }),
        platformName: z.string(),
        sourceId: z.lazy(() => BrandingSchema),
        sourceType: z
          .enum(['Accounting', 'Banking', 'Commerce', 'Other', 'Unknown'])
          .openapi({
            description: 'The type of platform of the connection.',
            examples: ['Accounting'],
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
        examples: [
          {
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
        ],
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
  .openapi('Connection')

type CompanyType = {
  created?: string
  createdByUserName?: string
  dataConnections?: z.infer<typeof ConnectionSchema>[]
  description?: string
  id: string
  lastSync?: CompanyType
  name: string
  platform?: string
  redirect: string
}

const CompanySchema: z.ZodType<CompanyType> = z
  .lazy(() =>
    z
      .object({
        created: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'In Codat\'s data model, dates and times are represented using the <a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 standard</a>. Date and time fields are formatted as strings; for example:\n\n```\n2020-10-08T22:40:50Z\n2021-01-01T00:00:00\n```\n\n\n\nWhen syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:\n\n- Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`\n- Unqualified local time: `2021-11-15T01:00:00`\n- UTC time offsets: `2021-11-15T01:00:00-05:00`\n\n> Time zones\n> \n> Not all dates from Codat will contain information about time zones.  \n> Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.',
            examples: ['2022-10-23T00:00:00Z'],
            title: 'Date time',
          }),
        createdByUserName: z.string().exactOptional(),
        dataConnections: z.array(ConnectionSchema).exactOptional(),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Additional information about the company. This can be used to store foreign IDs, references, etc.',
          }),
        id: z
          .uuid()
          .openapi({
            description: 'Unique identifier for your SMB in Codat.',
            examples: ['8a210b68-6988-11ed-a1eb-0242ac120002'],
          }),
        lastSync: z.lazy(() => CompanySchema).exactOptional(),
        name: z
          .string()
          .openapi({ description: 'The name of the company', examples: ['Codat Ltd.'] }),
        platform: z
          .string()
          .exactOptional()
          .openapi({ deprecated: true, examples: ['Xero'] }),
        redirect: z
          .url()
          .openapi({
            description:
              'The `redirect` [Link URL](https://docs.codat.io/auth-flow/authorize-hosted-link) enabling the customer to start their auth flow journey for the company.',
            examples: ['https://link.codat.io/company/27628208-459c-46a2-a705-5641ce25f739'],
          }),
      })
      .openapi({
        description:
          'A company in Codat represent a small or medium sized business, whose data you wish to share',
        examples: [
          {
            created: '2022-01-01T12:00:00.000Z',
            createdByUserName: 'string',
            dataConnections: [
              {
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
            ],
            id: '0498e921-9b53-4396-a412-4f2f5983b0a2',
            lastSync: '2022-01-01T12:00:00.000Z',
            name: 'string',
            platform: 'string',
            redirect: 'https://link.codat.io/company/27628208-459c-46a2-a705-5641ce25f739',
          },
        ],
        required: ['id', 'name', 'redirect'],
        title: 'Company',
      }),
  )
  .openapi('Company')

const BrandingSchema: z.ZodType<BrandingType> = z
  .object({
    button: z
      .object({ default: z.any().exactOptional(), hover: z.any().exactOptional() })
      .exactOptional()
      .openapi({ description: 'Button branding references.', 'x-internal': true, required: [] }),
    logo: z
      .object({
        full: z
          .object({
            image: z
              .object({
                alt: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Alternative text when image is not available.' }),
                src: z.url().exactOptional().openapi({ description: 'Source URL for image.' }),
              })
              .exactOptional()
              .openapi({ description: 'Image reference.', 'x-internal': true, required: [] }),
          })
          .exactOptional()
          .openapi({ examples: [], title: 'Branding Image', 'x-internal': true, required: [] }),
        square: z.any().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Logo branding references.', 'x-internal': true, required: [] }),
    sourceId: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'A source-specific ID used to distinguish between different sources originating from the same data connection. In general, a data connection is a single data source. However, for TrueLayer, `sourceId` is associated with a specific bank and has a many-to-one relationship with the `integrationId`.',
        examples: ['35b92968-9851-4095-ad60-395c95cbcba4'],
      }),
  })
  .openapi({
    examples: [
      {
        button: {
          default: {
            image: {
              alt: 'xero default button icon',
              src: 'https://static.codat.io/public/officialButtons/Full/8A156A5A-39CB-4F9D-856E-76EF9Q7A9607.png',
            },
          },
          hover: {
            image: {
              alt: 'xero hover button icon',
              src: 'https://static.codat.io/public/officialLogos/Full/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png',
            },
          },
        },
        logo: {
          full: {
            image: {
              alt: 'xero full icon',
              src: 'https://static.codat.io/public/officialLogos/Full/8A156A5A-39CB-4F9D-856E-76EF9B9A9607.png',
            },
          },
          square: {
            image: {
              alt: 'xero square icon',
              src: 'https://static.codat.io/public/officialLogos/Square/8A156A5A-39CB-4F9D-856E-76EF9B2W3607.png',
            },
          },
        },
        sourceId: '35b92968-9851-4095-ad60-395c95cbcba4',
      },
    ],
    title: 'Branding',
    required: [],
  })
  .openapi('Branding')

type ConnectionType = {
  additionalProperties?: unknown
  connectionInfo?: { [key: string]: string }
  created: z.infer<typeof CompanySchema>
  dataConnectionErrors?: {
    errorMessage?: string
    erroredOnUtc?: z.infer<typeof CompanySchema>
    statusCode?: string
    statusText?: string
  }[]
  id: string
  integrationId: string
  integrationKey: string
  lastSync?: z.infer<typeof CompanySchema>
  linkUrl: string
  platformName: string
  sourceId: z.infer<typeof BrandingSchema>
  sourceType: 'Accounting' | 'Banking' | 'Commerce' | 'Other' | 'Unknown'
  status: 'PendingAuth' | 'Linked' | 'Unlinked' | 'Deauthorized'
}

const AccountOptionSchema = z
  .strictObject({
    classification: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Classification of the type of G/L account.',
        examples: ['Bank Nominal'],
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier for the account, unique for the company.' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Name of the account.' }),
    nominalCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Reference given to each nominal account for a business. It ensures money is allocated to the correct account. This code isn't a unique identifier in the Codat system.",
      }),
  })
  .openapi({ title: 'Account option', 'x-internal': true, required: [] })
  .openapi('AccountOption')

const HalRefSchema = z
  .object({ href: z.string().exactOptional() })
  .openapi({ title: 'Hypertext reference', 'x-internal': true, required: [] })
  .openapi('HalRef')

const LinksSchema = z
  .object({
    current: HalRefSchema,
    next: HalRefSchema.exactOptional(),
    previous: HalRefSchema.exactOptional(),
    self: HalRefSchema,
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

const CompaniesSchema = z
  .object({ results: z.array(CompanySchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Companies')

const ConfigAccountSchema = z
  .strictObject({
    accountOptions: z
      .array(AccountOptionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Object containing account options.' }),
    descriptionText: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Descriprtive text for sales configuration section.' }),
    labelText: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Label text for sales configuration section.' }),
    required: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Required section to be configured for sync.' }),
    selectedAccountId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Selected account id from the list of available accounts.' }),
  })
  .openapi({
    description: 'G/L account object for configuration.',
    title: 'Account configuration',
    'x-internal': true,
    required: [],
  })
  .openapi('ConfigAccount')

const OptionSchema = z
  .strictObject({
    id: z.string().exactOptional().openapi({ description: 'Unique identifier for the option.' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name value of the option.' }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('Option')

const FeesSupplierSchema = z
  .strictObject({
    selectedSupplierId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Selected supplier id from the list of supplier records on the accounting software.',
      }),
    supplierOptions: z
      .array(OptionSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'List of supplier options from the list of supplier records on the accounting software.',
      }),
  })
  .openapi({ title: 'Supplier fees', 'x-internal': true, required: [] })
  .openapi('FeesSupplier')

const FeesSchema = z
  .strictObject({
    accounts: z.record(z.string(), ConfigAccountSchema).nullable().exactOptional(),
    feesSupplier: FeesSupplierSchema.exactOptional(),
    syncFees: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean indicator to enable syncing fees.' }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('Fees')

const NewPaymentsSchema = z
  .strictObject({
    accounts: z.record(z.string(), ConfigAccountSchema).nullable().exactOptional(),
    syncPayments: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean indicator for syncing payments.' }),
  })
  .openapi({ title: 'New payments', 'x-internal': true, required: [] })
  .openapi('NewPayments')

const PaymentsSchema = z
  .strictObject({
    accounts: z.record(z.string(), ConfigAccountSchema).nullable().exactOptional(),
    syncPayments: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean indicator for syncing sales.' }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('Payments')

const InvoiceLevelSelectionSchema = z
  .strictObject({
    groupByOptions: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Options for grouping sales.' }),
    selectedGroupByOptions: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Selected array of grouping options.' }),
  })
  .openapi({ title: 'Invoice level selection', 'x-internal': true, required: [] })
  .openapi('InvoiceLevelSelection')

const InvoiceLineLevelSelectionSchema = z
  .strictObject({
    groupByOptions: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Options for grouping on invoice lines.' }),
    selectedGroupByOptions: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Invoice line level selection.' }),
  })
  .openapi({ title: 'Invoice line level selection', 'x-internal': true, required: [] })
  .openapi('InvoiceLineLevelSelection')

const GroupingLevelsSchema = z
  .strictObject({
    invoiceLevel: InvoiceLevelSelectionSchema.exactOptional(),
    invoiceLineLevel: InvoiceLineLevelSelectionSchema.exactOptional(),
  })
  .openapi({ title: 'Grouping levels', 'x-internal': true, required: [] })
  .openapi('GroupingLevels')

const GroupingPeriodSchema = z
  .strictObject({
    groupingPeriodOptions: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of grouping period options.' }),
    selectedGroupingPeriod: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Grouping period i.e. Daily sales.' }),
  })
  .openapi({ title: 'Grouping period', 'x-internal': true, required: [] })
  .openapi('GroupingPeriod')

const GroupingSchema = z
  .strictObject({
    groupingLevels: GroupingLevelsSchema.exactOptional(),
    groupingPeriod: GroupingPeriodSchema.exactOptional(),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('Grouping')

const InvoiceStatusSchema = z
  .strictObject({
    invoiceStatusOptions: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Options for invoice statuses.' }),
    selectedInvoiceStatus: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Selected option for invoice status for invoice to be synced.',
        examples: ['Submitted'],
      }),
  })
  .openapi({ title: 'Invoice status', 'x-internal': true, required: [] })
  .openapi('InvoiceStatus')

const TaxRateMappingSchema = z
  .strictObject({
    selectedAccountingTaxRateId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Selected tax rate id from the list of tax rates on the accounting software.',
      }),
    selectedCommerceTaxRateIds: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Selected tax component id from the list of tax components on the commerce software.',
      }),
  })
  .openapi({ title: 'Tax rate mapping', 'x-internal': true, required: [] })
  .openapi('TaxRateMapping')

const NewTaxRatesSchema = z
  .strictObject({
    accountingTaxRateOptions: z
      .array(OptionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of accounting tax rate options.' }),
    commerceTaxRateOptions: z
      .array(OptionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of tax component options.' }),
    defaultZeroTaxRateOptions: z
      .array(OptionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Default zero tax rate selected for sync.' }),
    selectedDefaultZeroTaxRateId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Default tax rate selected for sync.' }),
    taxRateMappings: z
      .array(TaxRateMappingSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of tax component to rate mapppings.' }),
  })
  .openapi({ title: 'New tax rates', 'x-internal': true, required: [] })
  .openapi('NewTaxRates')

const CustomerSchema = z
  .strictObject({
    customerOptions: z
      .array(OptionSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'List of customer options from the list of customer records on the accounting software.',
      }),
    selectedCustomerId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Selected customer id from the list of customer records on the accounting software.',
      }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('Customer')

const TaxRateAmountSchema = z
  .strictObject({
    selectedTaxRateId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Selected tax rate id from the list of tax rates on the accounting software.',
      }),
    taxRateOptions: z
      .array(OptionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array of tax rate options object.' }),
  })
  .openapi({ title: 'Tax rate amount', 'x-internal': true, required: [] })
  .openapi('TaxRateAmount')

const SalesSchema = z
  .strictObject({
    accounts: z.record(z.string(), ConfigAccountSchema).nullable().exactOptional(),
    grouping: GroupingSchema.exactOptional(),
    invoiceStatus: InvoiceStatusSchema.exactOptional(),
    newTaxRates: NewTaxRatesSchema.exactOptional(),
    salesCustomer: CustomerSchema.exactOptional(),
    syncSales: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean indicator for syncing sales.' }),
    taxRates: z.record(z.string(), TaxRateAmountSchema).nullable().exactOptional(),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('Sales')

const ConfigurationSchema = z
  .strictObject({
    fees: FeesSchema.exactOptional(),
    newPayments: NewPaymentsSchema.exactOptional(),
    payments: PaymentsSchema.exactOptional(),
    sales: SalesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Configuration')

const ConnectionsSchema = z
  .object({ results: z.array(ConnectionSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Connections')

const CreateCompanySchema = z
  .strictObject({
    name: z
      .string()
      .openapi({
        description: 'Name of the company in Codat with a partner-commerce data connection.',
        examples: ["Bob's Burgers"],
      }),
  })
  .openapi({ required: ['name'], 'x-internal': true })
  .openapi('CreateCompany')

const DateRangeSchema = z
  .strictObject({
    finish: z
      .lazy(() => CompanySchema)
      .exactOptional()
      .openapi({ description: 'Finish date of the Sync.' }),
    start: z
      .lazy(() => CompanySchema)
      .exactOptional()
      .openapi({ description: 'Start date of the Sync.' }),
  })
  .openapi({ title: 'Data range', 'x-internal': true, required: [] })
  .openapi('DateRange')

const IntegrationSchema = z
  .object({
    dataProvidedBy: z.string().exactOptional(),
    datatypeFeatures: z
      .array(
        z
          .object({
            dataType: z
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
              .exactOptional()
              .openapi({
                description: 'Available Data types',
                example: 'invoices',
                'x-internal': true,
              }),
            supportedFeatures: z.array(
              z
                .object({
                  featureState: z
                    .enum(['Release', 'Beta', 'Deprecated', 'NotSupported', 'NotImplemented'])
                    .openapi({ example: 'Release', title: 'Feature state' }),
                  featureType: z
                    .enum([
                      'Get',
                      'Post',
                      'Categorization',
                      'Delete',
                      'Put',
                      'GetAsPdf',
                      'DownloadAttachment',
                      'GetAttachment',
                      'GetAttachments',
                      'UploadAttachment',
                    ])
                    .openapi({ example: 'Get', 'x-internal': true }),
                })
                .openapi({ required: ['featureType', 'featureState'], 'x-internal': true }),
            ),
          })
          .openapi({
            description: 'Describes support for a given datatype and associated operations',
            examples: [
              {
                datatype: 'invoices',
                supportedFeatures: [{ featureState: 'Release', featureType: 'Get' }],
              },
            ],
            required: ['datatype', 'supportedFeatures'],
            title: 'Data type feature',
          }),
      )
      .exactOptional(),
    enabled: z
      .boolean()
      .openapi({ description: 'Whether this integration is enabled for your customers to use' }),
    integrationId: z.lazy(() => ConnectionSchema).exactOptional(),
    isBeta: z.boolean().exactOptional(),
    isOfflineConnector: z.boolean().exactOptional(),
    key: z
      .string()
      .regex(/[a-z]{4}/)
      .length(4)
      .openapi({
        description:
          'A unique 4-letter key to represent a platform in each integration. View [accounting](https://docs.codat.io/integrations/accounting/accounting-platform-keys), [banking](https://docs.codat.io/integrations/banking/banking-platform-keys), and [commerce](https://docs.codat.io/integrations/commerce/commerce-platform-keys) platform keys. ',
        examples: ['gbol'],
      }),
    logoUrl: z.url(),
    name: z.string().openapi({ examples: ['Xero'] }),
    sourceId: z.lazy(() => BrandingSchema).exactOptional(),
    sourceType: z.lazy(() => ConnectionSchema).exactOptional(),
  })
  .openapi({
    description: 'An integration that Codat supports',
    examples: [
      {
        dataProvidedBy: 'string',
        datatypeFeatures: [
          {
            datatype: 'invoices',
            supportedFeatures: [{ featureState: 'release', featureType: 'get' }],
          },
        ],
        enabled: true,
        integrationId: '497a18ca-284e-40c0-985d-f72be35d468e',
        isBeta: true,
        isOfflineConnector: true,
        key: 'gbol',
        logoUrl: 'http://example.com',
        name: 'Xero',
        sourceId: 'accounting',
        sourceType: '8193a927-ab7a-45a3-9dc2-d357a4932dfe',
      },
    ],
    required: ['key', 'logoUrl', 'name', 'enabled'],
    title: 'Integration',
  })
  .openapi('Integration')

const IntegrationsSchema = z
  .object({ results: z.array(IntegrationSchema).exactOptional() })
  .openapi({ required: [] })
  .and(PagingInfoSchema)
  .openapi({ 'x-internal': true })
  .openapi('Integrations')

const LocalizationSchema = z
  .object({
    required: z.boolean().exactOptional(),
    text: z.string().nullable().exactOptional().openapi({ description: 'Value of the property.' }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('Localization')

const LocalizationInfoSchema = z
  .record(z.string(), LocalizationSchema)
  .openapi({ title: 'Localization info.' })
  .openapi('LocalizationInfo')

const SyncFlowUrlSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sync flow URL.',
        examples: [
          'https://sync-flow-integration.codat.io/57b6fad9-e3ca-447b-89db-e4ffa21e6ef3/aiwb/mqjo/start?otp=836415',
        ],
      }),
  })
  .openapi({ title: 'Sync flow url', required: [] })
  .openapi('SyncFlowUrl')

const SyncSummarySchema = z
  .strictObject({
    commerceSyncId: z
      .guid()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the sync in Codat.',
        examples: ['8d0a044e-b683-4fc9-bd0d-bfb2ca5731b7'],
      }),
    companyId: z
      .guid()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for your SMB in Codat.',
        examples: ['f4637ec9-9fc0-4a02-8df0-c90d6dc86208'],
      }),
    dataConnections: z
      .array(ConnectionSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Array of containing objects data connection information for the company.',
      }),
    dataPushed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean indicator for data being pushed during a sync operation.',
        examples: [true],
      }),
    errorMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Friendly error message for the sync operation.',
        examples: [
          'Customer 3b9bf2ed-a618-4af2-80f2-f2b57fddc748 is not in an Active state. (Archived)',
        ],
      }),
    syncDateRangeUtc: DateRangeSchema.exactOptional(),
    syncExceptionMessage: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Exception message for the sync operation.',
        examples: [
          'Customer 3b9bf2ed-a618-4af2-80f2-f2b57fddc748 is not in an Active state. (Archived)',
        ],
      }),
    syncStatus: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Status of the sync of the company data. This is linked to status code.',
        examples: ['ValidateError, Pending'],
      }),
    syncStatusCode: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Numerical status code sync of the company data.',
        examples: [4000],
      }),
    syncUtc: z
      .lazy(() => CompanySchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'UTC DateTime for the Sync.' }),
  })
  .openapi({ required: [] })
  .openapi('SyncSummary')

const SyncToLatestArgsSchema = z
  .object({
    syncTo: z
      .lazy(() => CompanySchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The DateTime, upto which Sync will run up to starting from the previous successful sync',
      }),
  })
  .openapi({ title: 'Sync To Latest Args', 'x-internal': true, required: [] })
  .openapi('SyncToLatestArgs')

const UpdateConnectionSchema = z
  .strictObject({
    status: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The current authorization status of the data connection.',
        examples: ['Linked'],
      }),
  })
  .openapi({ 'x-internal': true, required: [] })
  .openapi('UpdateConnection')

const VisibleAccountsSchema = z
  .object({
    visibleAccounts: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Visible accounts on sync flow.' }),
  })
  .openapi({ title: 'Visible accounts', required: [] })
  .openapi('VisibleAccounts')

const AuthHeaderSecurityScheme = {
  description:
    'The word "Basic" followed by a space and your API Key, base64 encoded, which can be found [here](https://app.codat.io/developers/api-keys)',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getClientsClientIdConfigUiAccountsPlatformPlatformKeyRoute = createRoute({
  method: 'get',
  path: '/clients/{clientId}/config/ui/accounts/platform/{platformKey}',
  tags: ['Sync flow preferences'],
  summary: 'List visible accounts',
  description: 'Enable retrieval for accounts which are visible on sync flow.',
  operationId: 'get-visible-accounts',
  request: {
    params: z.object({
      clientId: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'clientId',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      platformKey: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'platformKey',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VisibleAccountsSchema } },
    },
  },
})

export const postCompaniesCompanyIdSyncCommerceLatestRoute = createRoute({
  method: 'post',
  path: '/companies/{companyId}/sync/commerce/latest',
  tags: ['Sync'],
  summary: 'Run a Commerce sync from the last successful sync',
  description:
    'Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.\r\nIf there was no previously successful sync, the start date in the config is used.',
  operationId: 'request-sync',
  request: {
    params: z.object({
      companyId: z
        .lazy(() => CompanySchema)
        .openapi({
          param: {
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { $ref: '#/components/schemas/Company/properties/id' },
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: SyncToLatestArgsSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SyncSummarySchema } } },
  },
})

export const getConfigCompaniesCompanyIdSyncCommerceRoute = createRoute({
  method: 'get',
  path: '/config/companies/{companyId}/sync/commerce',
  tags: ['Configuration'],
  summary: 'Retrieve config preferences set for a company.',
  description: 'Retrieve current config preferences.',
  operationId: 'get-configuration',
  request: {
    params: z.object({
      companyId: z
        .lazy(() => CompanySchema)
        .openapi({
          param: {
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { $ref: '#/components/schemas/Company/properties/id' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigurationSchema } },
    },
  },
})

export const postConfigCompaniesCompanyIdSyncCommerceRoute = createRoute({
  method: 'post',
  path: '/config/companies/{companyId}/sync/commerce',
  tags: ['Configuration'],
  summary: 'Create or update configuration.',
  description: 'Make changes to configuration preferences.',
  operationId: 'set-configuration',
  request: {
    params: z.object({
      companyId: z
        .lazy(() => CompanySchema)
        .openapi({
          param: {
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { $ref: '#/components/schemas/Company/properties/id' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ConfigurationSchema } },
    },
  },
})

export const getConfigIntegrationsRoute = createRoute({
  method: 'get',
  path: '/config/integrations',
  tags: ['Integrations'],
  summary: "List information on Codat's supported integrations",
  description:
    'Retrieve a list of available integrations support by datatype and state of release.',
  operationId: 'list-integrations',
  request: {
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
            schema: { default: 1, examples: [1], format: 'int32', minimum: 0, type: 'integer' },
            'x-stoplight': { id: '1318joqblpp4e' },
          },
          examples: [1],
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
              examples: [100],
              format: 'int32',
              maximum: 5000,
              minimum: 1,
              type: 'integer',
            },
            'x-stoplight': { id: 's2ika6rltk5y6' },
            required: false,
          },
          examples: [100],
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
            'x-stoplight': { id: 'gupdb9kt30hfq' },
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).',
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: { examples: ['-modifiedDate'], type: 'string' },
            'x-stoplight': { id: '4je9lwo02netu' },
          },
          examples: ['-modifiedDate'],
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IntegrationsSchema } },
    },
  },
})

export const getConfigIntegrationsPlatformKeyBrandingRoute = createRoute({
  method: 'get',
  path: '/config/integrations/{platformKey}/branding',
  tags: ['Integrations'],
  summary: 'Get branding for an integration',
  description: 'Retrieve Integration branding assets.',
  operationId: 'get-integration-branding',
  request: {
    params: z.object({
      platformKey: z
        .string()
        .openapi({
          param: {
            description: 'PlatformKey',
            in: 'path',
            name: 'platformKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: BrandingSchema } } },
  },
})

export const getConfigSyncCommerceCommerceKeyAccountingKeyStartRoute = createRoute({
  method: 'get',
  path: '/config/sync/commerce/{commerceKey}/{accountingKey}/start',
  tags: ['Sync flow preferences'],
  summary: 'Retrieve sync flow url',
  description: 'Get a URL for Sync Flow including a one time passcode.',
  operationId: 'get-sync-flow-url',
  request: {
    params: z.object({
      commerceKey: z
        .string()
        .openapi({
          param: {
            description: 'Commerce platform key',
            in: 'path',
            name: 'commerceKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountingKey: z
        .string()
        .openapi({
          param: {
            description: 'Accounting platform key',
            in: 'path',
            name: 'accountingKey',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      merchantIdentifier: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Identifier for your merchant, can be the merchant name or Codat company id.',
            in: 'query',
            name: 'merchantIdentifier',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SyncFlowUrlSchema } } },
  },
})

export const getMetaCompaniesRoute = createRoute({
  method: 'get',
  path: '/meta/companies',
  tags: ['Company management'],
  summary: 'List companies',
  description: 'Retrieve a list of all companies the client has created.',
  operationId: 'list-companies',
  request: {
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
            schema: { default: 1, examples: [1], format: 'int32', minimum: 0, type: 'integer' },
            'x-stoplight': { id: '1318joqblpp4e' },
          },
          examples: [1],
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
              examples: [100],
              format: 'int32',
              maximum: 5000,
              minimum: 1,
              type: 'integer',
            },
            'x-stoplight': { id: 's2ika6rltk5y6' },
            required: false,
          },
          examples: [100],
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
            'x-stoplight': { id: 'gupdb9kt30hfq' },
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).',
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: { examples: ['-modifiedDate'], type: 'string' },
            'x-stoplight': { id: '4je9lwo02netu' },
          },
          examples: ['-modifiedDate'],
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CompaniesSchema } } },
  },
})

export const postMetaCompaniesSyncRoute = createRoute({
  method: 'post',
  path: '/meta/companies/sync',
  tags: ['Company management'],
  summary: 'Create a sync for commerce company',
  description: 'Creates a Codat company with a commerce partner data connection.',
  operationId: 'create-company',
  request: {
    body: {
      content: { 'application/json': { schema: CreateCompanySchema, example: { name: 'string' } } },
    },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: CompanySchema } } },
  },
})

export const getMetaCompaniesCompanyIdConnectionsRoute = createRoute({
  method: 'get',
  path: '/meta/companies/{companyId}/connections',
  tags: ['Company management'],
  summary: 'List data connections',
  description: 'Retrieve previously created data connections.',
  operationId: 'list-connections',
  request: {
    params: z.object({
      companyId: z
        .lazy(() => CompanySchema)
        .openapi({
          param: {
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { $ref: '#/components/schemas/Company/properties/id' },
          },
        }),
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
            schema: { default: 1, examples: [1], format: 'int32', minimum: 0, type: 'integer' },
            'x-stoplight': { id: '1318joqblpp4e' },
          },
          examples: [1],
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
              examples: [100],
              format: 'int32',
              maximum: 5000,
              minimum: 1,
              type: 'integer',
            },
            'x-stoplight': { id: 's2ika6rltk5y6' },
            required: false,
          },
          examples: [100],
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Codat query string. [Read more](https://docs.codat.io/using-the-api/querying).',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
            'x-stoplight': { id: 'gupdb9kt30hfq' },
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field to order results by. [Read more](https://docs.codat.io/using-the-api/ordering-results).',
            in: 'query',
            name: 'orderBy',
            required: false,
            schema: { examples: ['-modifiedDate'], type: 'string' },
            'x-stoplight': { id: '4je9lwo02netu' },
          },
          examples: ['-modifiedDate'],
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionsSchema } } },
  },
})

export const postMetaCompaniesCompanyIdConnectionsRoute = createRoute({
  method: 'post',
  path: '/meta/companies/{companyId}/connections',
  tags: ['Company management'],
  summary: 'Create a data connection',
  description: 'Create a data connection for company.',
  operationId: 'create-connection',
  request: {
    params: z.object({
      companyId: z
        .lazy(() => CompanySchema)
        .openapi({
          param: {
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { $ref: '#/components/schemas/Company/properties/id' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.string() } } },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionSchema } } },
  },
})

export const patchMetaCompaniesCompanyIdConnectionsConnectionIdRoute = createRoute({
  method: 'patch',
  path: '/meta/companies/{companyId}/connections/{connectionId}',
  tags: ['Company management'],
  summary: 'Update data connection',
  description: 'Update a data connection',
  operationId: 'update-connection',
  request: {
    params: z.object({
      companyId: z
        .lazy(() => CompanySchema)
        .openapi({
          param: {
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { $ref: '#/components/schemas/Company/properties/id' },
          },
        }),
      connectionId: z
        .lazy(() => ConnectionSchema)
        .openapi({
          param: {
            in: 'path',
            name: 'connectionId',
            required: true,
            schema: { $ref: '#/components/schemas/Connection/properties/id' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateConnectionSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ConnectionSchema } } },
  },
})

export const postMetaCompaniesCompanyIdSyncCommerceHistoricRoute = createRoute({
  method: 'post',
  path: '/meta/companies/{companyId}/sync/commerce/historic',
  tags: ['Sync'],
  summary: 'Run a Commerce sync from a given date range',
  description:
    'Run a Commerce sync from the specified start date to the specified finish date in the request payload.',
  operationId: 'request-sync-for-date-range',
  request: {
    params: z.object({
      companyId: z
        .lazy(() => CompanySchema)
        .openapi({
          param: {
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { $ref: '#/components/schemas/Company/properties/id' },
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: DateRangeSchema } } },
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: SyncSummarySchema } } },
  },
})

export const getMetaCompaniesCompanyIdSyncCommerceStatusRoute = createRoute({
  method: 'get',
  path: '/meta/companies/{companyId}/sync/commerce/status',
  tags: ['Configuration'],
  summary: "Get status for a company's syncs",
  description: 'Check the sync history and sync status for a company.',
  operationId: 'get-sync-status',
  request: {
    params: z.object({
      companyId: z
        .lazy(() => CompanySchema)
        .openapi({
          param: {
            in: 'path',
            name: 'companyId',
            required: true,
            schema: { $ref: '#/components/schemas/Company/properties/id' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRoute = createRoute({
  method: 'patch',
  path: '/sync/commerce/config/ui/accounts/platform/{commerceKey}',
  tags: ['Sync flow preferences'],
  summary: 'Update the visible accounts on Sync Flow',
  description: 'To enable update of accounts visible preferences set on Sync Flow.',
  operationId: 'update-visible-accounts-sync-flow',
  request: {
    params: z.object({
      commerceKey: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'commerceKey',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: { description: '', content: { 'application/json': { schema: VisibleAccountsSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VisibleAccountsSchema } },
    },
  },
})

export const getSyncCommerceConfigUiTextRoute = createRoute({
  method: 'get',
  path: '/sync/commerce/config/ui/text',
  tags: ['Sync flow preferences'],
  summary: 'Retrieve preferences for text fields on Sync Flow',
  description: 'To enable retrieval of preferences set for the text fields on Sync Flow.',
  operationId: 'get-config-text-sync-flow',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocalizationInfoSchema } },
    },
  },
})

export const patchSyncCommerceConfigUiTextRoute = createRoute({
  method: 'patch',
  path: '/sync/commerce/config/ui/text',
  tags: ['Sync flow preferences'],
  summary: 'Update preferences for text fields on sync flow',
  description: 'To enable update of preferences set for the text fields on sync flow.',
  operationId: 'update-config-text-sync-flow',
  request: {
    body: { description: '', content: { 'application/json': { schema: LocalizationInfoSchema } } },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: LocalizationInfoSchema } },
    },
  },
})

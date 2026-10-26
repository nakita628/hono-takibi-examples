import { createRoute, z } from '@hono/zod-openapi'

type AddressType = {
  AddressType?: 'POBOX' | 'STREET'
  AddressLine1?: string
  AddressLine2?: string
  AddressLine3?: string
  AddressLine4?: string
  City?: string
  Region?: string
  PostalCode?: string
  Country?: string
  AttentionTo?: string
}

type PhoneType = {
  PhoneType?: 'DEFAULT' | 'DDI' | 'MOBILE' | 'FAX' | 'OFFICE'
  PhoneNumber?: string
  PhoneAreaCode?: string
  PhoneCountryCode?: string
}

const AccountTypeSchema = z
  .enum([
    'BANK',
    'CURRENT',
    'CURRLIAB',
    'DEPRECIATN',
    'DIRECTCOSTS',
    'EQUITY',
    'EXPENSE',
    'FIXED',
    'INVENTORY',
    'LIABILITY',
    'NONCURRENT',
    'OTHERINCOME',
    'OVERHEADS',
    'PREPAYMENT',
    'REVENUE',
    'SALES',
    'TERMLIAB',
    'PAYG',
  ])
  .openapi({ description: 'See Account Types' })
  .openapi('AccountType')

type CurrencyCodeType =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EEK'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LTL'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SKK'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'STD'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VES'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
  | 'ZMK'
  | 'ZWD'

const CurrencyCodeSchema: z.ZodType<CurrencyCodeType> = z
  .enum([
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BRL',
    'BSD',
    'BTN',
    'BWP',
    'BYN',
    'BYR',
    'BZD',
    'CAD',
    'CDF',
    'CHF',
    'CLF',
    'CLP',
    'CNY',
    'COP',
    'CRC',
    'CUC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EEK',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'GBP',
    'GEL',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KMF',
    'KPW',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'LTL',
    'LVL',
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRO',
    'MRU',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MXV',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SHP',
    'SKK',
    'SLE',
    'SLL',
    'SOS',
    'SRD',
    'STD',
    'STN',
    'SVC',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'UYU',
    'UZS',
    'VEF',
    'VES',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XCD',
    'XOF',
    'XPF',
    'YER',
    'ZAR',
    'ZMW',
    'ZMK',
    'ZWD',
  ])
  .openapi({
    description: '3 letter alpha code for the currency – see list of currency codes',
    'x-enum-varnames': [
      'AED',
      'AFN',
      'ALL',
      'AMD',
      'ANG',
      'AOA',
      'ARS',
      'AUD',
      'AWG',
      'AZN',
      'BAM',
      'BBD',
      'BDT',
      'BGN',
      'BHD',
      'BIF',
      'BMD',
      'BND',
      'BOB',
      'BRL',
      'BSD',
      'BTN',
      'BWP',
      'BYN',
      'BYR',
      'BZD',
      'CAD',
      'CDF',
      'CHF',
      'CLF',
      'CLP',
      'CNY',
      'COP',
      'CRC',
      'CUC',
      'CUP',
      'CVE',
      'CZK',
      'DJF',
      'DKK',
      'DOP',
      'DZD',
      'EEK',
      'EGP',
      'ERN',
      'ETB',
      'EUR',
      'FJD',
      'FKP',
      'GBP',
      'GEL',
      'GHS',
      'GIP',
      'GMD',
      'GNF',
      'GTQ',
      'GYD',
      'HKD',
      'HNL',
      'HRK',
      'HTG',
      'HUF',
      'IDR',
      'ILS',
      'INR',
      'IQD',
      'IRR',
      'ISK',
      'JMD',
      'JOD',
      'JPY',
      'KES',
      'KGS',
      'KHR',
      'KMF',
      'KPW',
      'KRW',
      'KWD',
      'KYD',
      'KZT',
      'LAK',
      'LBP',
      'LKR',
      'LRD',
      'LSL',
      'LTL',
      'LVL',
      'LYD',
      'MAD',
      'MDL',
      'MGA',
      'MKD',
      'MMK',
      'MNT',
      'MOP',
      'MRO',
      'MRU',
      'MUR',
      'MVR',
      'MWK',
      'MXN',
      'MXV',
      'MYR',
      'MZN',
      'NAD',
      'NGN',
      'NIO',
      'NOK',
      'NPR',
      'NZD',
      'OMR',
      'PAB',
      'PEN',
      'PGK',
      'PHP',
      'PKR',
      'PLN',
      'PYG',
      'QAR',
      'RON',
      'RSD',
      'RUB',
      'RWF',
      'SAR',
      'SBD',
      'SCR',
      'SDG',
      'SEK',
      'SGD',
      'SHP',
      'SKK',
      'SLE',
      'SLL',
      'SOS',
      'SRD',
      'STN',
      'STD',
      'SVC',
      'SYP',
      'SZL',
      'THB',
      'TJS',
      'TMT',
      'TND',
      'TOP',
      'TRY_LIRA',
      'TTD',
      'TWD',
      'TZS',
      'UAH',
      'UGX',
      'USD',
      'UYU',
      'UZS',
      'VEF',
      'VES',
      'VND',
      'VUV',
      'WST',
      'XAF',
      'XCD',
      'XOF',
      'XPF',
      'YER',
      'ZAR',
      'ZMW',
      'ZMK',
      'ZWD',
      'EMPTY_CURRENCY',
    ],
  })
  .openapi('CurrencyCode')

type ValidationErrorType = { Message?: string }

const ValidationErrorSchema: z.ZodType<ValidationErrorType> = z
  .object({
    Message: z.string().exactOptional().openapi({ description: 'Validation error message' }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/http-response-codes' },
    required: [],
  })
  .openapi('ValidationError')

type AccountType = {
  Code?: string
  Name?: string
  AccountID?: string
  Type?: z.infer<typeof AccountTypeSchema>
  BankAccountNumber?: string
  Status?: 'ACTIVE' | 'ARCHIVED' | 'DELETED'
  Description?: string
  BankAccountType?: 'BANK' | 'CREDITCARD' | 'PAYPAL' | 'NONE' | ''
  CurrencyCode?: z.infer<typeof CurrencyCodeSchema>
  TaxType?: string
  EnablePaymentsToAccount?: boolean
  ShowInExpenseClaims?: boolean
  Class?: 'ASSET' | 'EQUITY' | 'EXPENSE' | 'LIABILITY' | 'REVENUE'
  SystemAccount?:
    | 'DEBTORS'
    | 'CREDITORS'
    | 'BANKCURRENCYGAIN'
    | 'GST'
    | 'GSTONIMPORTS'
    | 'HISTORICAL'
    | 'REALISEDCURRENCYGAIN'
    | 'RETAINEDEARNINGS'
    | 'ROUNDING'
    | 'TRACKINGTRANSFERS'
    | 'UNPAIDEXPCLM'
    | 'UNREALISEDCURRENCYGAIN'
    | 'WAGEPAYABLES'
    | 'CISASSETS'
    | 'CISASSET'
    | 'CISLABOUR'
    | 'CISLABOUREXPENSE'
    | 'CISLABOURINCOME'
    | 'CISLIABILITY'
    | 'CISMATERIALS'
    | ''
  ReportingCode?: string
  ReportingCodeName?: string
  HasAttachments?: boolean
  UpdatedDateUTC?: string
  AddToWatchlist?: boolean
  ValidationErrors?: z.infer<typeof ValidationErrorSchema>[]
}

type AttachmentType = {
  AttachmentID?: string
  FileName?: string
  Url?: string
  MimeType?: string
  ContentLength?: number
  IncludeOnline?: boolean
}

type LineAmountTypesType = 'Exclusive' | 'Inclusive' | 'NoTax'

const LineItemItemSchema = z
  .object({
    Code: z
      .string()
      .max(30)
      .exactOptional()
      .openapi({ description: 'User defined item code (max length = 30)' }),
    Name: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ description: 'The name of the item (max length = 50)' }),
    ItemID: z.uuid().exactOptional().openapi({ description: 'The Xero identifier for an Item' }),
  })
  .openapi({ required: [] })
  .openapi('LineItemItem')

const LineItemTrackingSchema = z
  .object({
    TrackingCategoryID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for a tracking category',
        example: '00000000-0000-0000-0000-000000000000',
      }),
    TrackingOptionID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for a tracking category option',
        example: '00000000-0000-0000-0000-000000000000',
      }),
    Name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The name of the tracking category', example: 'Region' }),
    Option: z
      .string()
      .exactOptional()
      .openapi({ description: 'See Tracking Options', example: 'North' }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/invoices#post' },
    required: [],
  })
  .openapi('LineItemTracking')

const TaxBreakdownComponentSchema = z
  .object({
    TaxComponentId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The unique ID number of this component' }),
    Type: z
      .enum([
        'SYSGST/USCOUNTRY',
        'SYSGST/USSTATE',
        'SYSGST/USCOUNTY',
        'SYSGST/USCITY',
        'SYSGST/USSPECIAL',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the jurisdiction' }),
    Name: z.string().exactOptional().openapi({ description: 'The name of the jurisdiction' }),
    TaxPercentage: z.number().exactOptional().openapi({ description: 'The percentage of the tax' }),
    TaxAmount: z.number().exactOptional().openapi({ description: 'The amount of the tax' }),
    TaxableAmount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount that is taxable' }),
    NonTaxableAmount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount that is not taxable' }),
    ExemptAmount: z.number().exactOptional().openapi({ description: 'The amount that is exempt' }),
    StateAssignedNo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state assigned number of the jurisdiction' }),
    JurisdictionRegion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name identifying the region within the country' }),
  })
  .openapi({ required: [] })
  .openapi('TaxBreakdownComponent')

type LineItemType = {
  LineItemID?: string
  Description?: string
  Quantity?: number
  UnitAmount?: number
  ItemCode?: string
  AccountCode?: string
  AccountID?: string
  TaxType?: string
  TaxAmount?: number
  Item?: z.infer<typeof LineItemItemSchema>
  LineAmount?: number
  Tracking?: z.infer<typeof LineItemTrackingSchema>[]
  DiscountRate?: number
  DiscountAmount?: number
  RepeatingInvoiceID?: string
  Taxability?: 'TAXABLE' | 'NON_TAXABLE' | 'EXEMPT' | 'PART_TAXABLE' | 'NOT_APPLICABLE'
  SalesTaxCodeId?: number
  TaxBreakdown?: z.infer<typeof TaxBreakdownComponentSchema>[]
}

const AccountSchema: z.ZodType<AccountType> = z
  .object({
    Code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Customer defined alpha numeric account code e.g 200 or SALES (max length = 10)',
        example: 4400,
      }),
    Name: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({ description: 'Name of account (max length = 150)', example: 'Food Sales' }),
    AccountID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The Xero identifier for an account – specified as a string following  the endpoint name   e.g. /297c2dc5-cc47-4afd-8ec8-74990b8761e9',
        example: '00000000-0000-0000-0000-000000000000',
      }),
    Type: AccountTypeSchema.exactOptional(),
    BankAccountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'For bank accounts only (Account Type BANK)' }),
    Status: z
      .enum(['ACTIVE', 'ARCHIVED', 'DELETED'])
      .exactOptional()
      .openapi({
        description:
          'Accounts with a status of ACTIVE can be updated to ARCHIVED. See Account Status Codes',
      }),
    Description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of the Account. Valid for all types of accounts except bank accounts (max length = 4000)',
      }),
    BankAccountType: z
      .enum(['BANK', 'CREDITCARD', 'PAYPAL', 'NONE', ''])
      .exactOptional()
      .openapi({ description: 'For bank accounts only. See Bank Account types' }),
    CurrencyCode: CurrencyCodeSchema.exactOptional(),
    TaxType: z.string().exactOptional().openapi({ description: 'The tax type from taxRates' }),
    EnablePaymentsToAccount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean – describes whether account can have payments applied to it',
      }),
    ShowInExpenseClaims: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean – describes whether account code is available for use with expense claims',
      }),
    Class: z
      .enum(['ASSET', 'EQUITY', 'EXPENSE', 'LIABILITY', 'REVENUE'])
      .exactOptional()
      .openapi({ description: 'See Account Class Types', readOnly: true }),
    SystemAccount: z
      .enum([
        'DEBTORS',
        'CREDITORS',
        'BANKCURRENCYGAIN',
        'GST',
        'GSTONIMPORTS',
        'HISTORICAL',
        'REALISEDCURRENCYGAIN',
        'RETAINEDEARNINGS',
        'ROUNDING',
        'TRACKINGTRANSFERS',
        'UNPAIDEXPCLM',
        'UNREALISEDCURRENCYGAIN',
        'WAGEPAYABLES',
        'CISASSETS',
        'CISASSET',
        'CISLABOUR',
        'CISLABOUREXPENSE',
        'CISLABOURINCOME',
        'CISLIABILITY',
        'CISMATERIALS',
        '',
      ])
      .exactOptional()
      .openapi({
        description:
          'If this is a system account then this element is returned. See System Account types. Note that non-system accounts may have this element set as either “” or null.',
        readOnly: true,
      }),
    ReportingCode: z.string().exactOptional().openapi({ description: 'Shown if set' }),
    ReportingCodeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Shown if set', readOnly: true }),
    HasAttachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'boolean to indicate if an account has an attachment (read only)',
        readOnly: true,
        example: 'false',
      }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified date UTC format',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    AddToWatchlist: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean – describes whether the account is shown in the watchlist widget on the dashboard',
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/accounts/' },
    required: [],
  })
  .openapi('Account')

const PaymentSchema: z.ZodType<PaymentType> = z
  .lazy(() =>
    z
      .object({
        Invoice: InvoiceSchema.exactOptional(),
        CreditNote: CreditNoteSchema.exactOptional(),
        Prepayment: PrepaymentSchema.exactOptional(),
        Overpayment: OverpaymentSchema.exactOptional(),
        InvoiceNumber: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Number of invoice or credit note you are applying payment to e.g.INV-4003',
          }),
        CreditNoteNumber: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Number of invoice or credit note you are applying payment to e.g. INV-4003',
          }),
        BatchPayment: BatchPaymentSchema.exactOptional(),
        Account: AccountSchema.exactOptional(),
        Code: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Code of account you are using to make the payment e.g. 001 (note- not all accounts have a code value)',
          }),
        Date: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Date the payment is being made (YYYY-MM-DD) e.g. 2009-09-06',
            'x-is-msdate': true,
          }),
        CurrencyRate: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'Exchange rate when payment is received. Only used for non base currency invoices and credit notes e.g. 0.7500',
            'x-is-money': true,
          }),
        Amount: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'The amount of the payment. Must be less than or equal to the outstanding amount owing on the invoice e.g. 200.00',
            'x-is-money': true,
          }),
        BankAmount: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The amount of the payment in the currency of the bank account.',
            'x-is-money': true,
          }),
        Reference: z
          .string()
          .exactOptional()
          .openapi({ description: 'An optional description for the payment e.g. Direct Debit' }),
        IsReconciled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'An optional parameter for the payment. A boolean indicating whether you would like the payment to be created as reconciled when using PUT, or whether a payment has been reconciled when using GET',
          }),
        Status: z
          .enum(['AUTHORISED', 'DELETED'])
          .exactOptional()
          .openapi({ description: 'The status of the payment.' }),
        PaymentType: z
          .enum([
            'ACCRECPAYMENT',
            'ACCPAYPAYMENT',
            'ARCREDITPAYMENT',
            'APCREDITPAYMENT',
            'AROVERPAYMENTPAYMENT',
            'ARPREPAYMENTPAYMENT',
            'APPREPAYMENTPAYMENT',
            'APOVERPAYMENTPAYMENT',
          ])
          .exactOptional()
          .openapi({ description: 'See Payment Types.', readOnly: true }),
        UpdatedDateUTC: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC timestamp of last update to the payment',
            'x-is-msdate-time': true,
            example: '/Date(1573755038314)/',
            readOnly: true,
          }),
        UpdatedDateUTCString: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC ISO-8601 formatted timestamp of last update to the payment',
            example: '2019-11-14T18:10:38Z',
            readOnly: true,
          }),
        PaymentID: z
          .uuid()
          .exactOptional()
          .openapi({
            description:
              'The Xero identifier for an Payment e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9',
            example: '00000000-0000-0000-0000-000000000000',
          }),
        BatchPaymentID: z
          .uuid()
          .exactOptional()
          .openapi({
            description: 'Present if the payment was created as part of a batch.',
            example: '00000000-0000-0000-0000-000000000000',
          }),
        BankAccountNumber: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The suppliers bank account number the payment is being made to',
          }),
        Particulars: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The suppliers bank account number the payment is being made to',
          }),
        Details: z
          .string()
          .exactOptional()
          .openapi({ description: "The information to appear on the supplier's bank account" }),
        HasAccount: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description: 'A boolean to indicate if a contact has an validation errors',
            example: 'false',
          }),
        HasValidationErrors: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description: 'A boolean to indicate if a contact has an validation errors',
            example: 'false',
          }),
        StatusAttributeString: z
          .string()
          .exactOptional()
          .openapi({ description: 'A string to indicate if a invoice status' }),
        ValidationErrors: z
          .array(ValidationErrorSchema)
          .exactOptional()
          .openapi({ description: 'Displays array of validation error messages from the API' }),
        Warnings: z
          .array(ValidationErrorSchema)
          .exactOptional()
          .openapi({ description: 'Displays array of warning messages from the API' }),
      })
      .openapi({
        externalDocs: { url: 'http://developer.xero.com/documentation/api/payments/' },
        required: [],
      }),
  )
  .openapi('Payment')

type BatchPaymentType = {
  Account?: z.infer<typeof AccountSchema>
  Reference?: string
  Particulars?: string
  Code?: string
  Details?: string
  Narrative?: string
  BatchPaymentID?: string
  DateString?: string
  Date?: string
  Amount?: number
  Payments?: z.infer<typeof PaymentSchema>[]
  Type?: 'PAYBATCH' | 'RECBATCH'
  Status?: 'AUTHORISED' | 'DELETED'
  TotalAmount?: number
  UpdatedDateUTC?: string
  IsReconciled?: boolean
  ValidationErrors?: z.infer<typeof ValidationErrorSchema>[]
}

type BatchPaymentDetailsType = {
  BankAccountNumber?: string
  BankAccountName?: string
  Details?: string
  Code?: string
  Reference?: string
}

type BrandingThemeType = {
  BrandingThemeID?: string
  Name?: string
  LogoUrl?: string
  Type?: 'INVOICE'
  SortOrder?: number
  CreatedDateUTC?: string
}

type ContactPersonType = {
  FirstName?: string
  LastName?: string
  EmailAddress?: string
  IncludeInEmails?: boolean
}

const ContactPersonSchema: z.ZodType<ContactPersonType> = z
  .object({
    FirstName: z.string().exactOptional().openapi({ description: 'First name of person' }),
    LastName: z.string().exactOptional().openapi({ description: 'Last name of person' }),
    EmailAddress: z.string().exactOptional().openapi({ description: 'Email address of person' }),
    IncludeInEmails: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'boolean to indicate whether contact should be included on emails with invoices etc.',
      }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/contacts/' },
    required: [],
  })
  .openapi('ContactPerson')

const AddressSchema: z.ZodType<AddressType> = z
  .object({
    AddressType: z
      .enum(['POBOX', 'STREET'])
      .exactOptional()
      .openapi({ description: 'define the type of address' }),
    AddressLine1: z.string().max(500).exactOptional().openapi({ description: 'max length = 500' }),
    AddressLine2: z.string().max(500).exactOptional().openapi({ description: 'max length = 500' }),
    AddressLine3: z.string().max(500).exactOptional().openapi({ description: 'max length = 500' }),
    AddressLine4: z.string().max(500).exactOptional().openapi({ description: 'max length = 500' }),
    City: z.string().max(255).exactOptional().openapi({ description: 'max length = 255' }),
    Region: z.string().max(255).exactOptional().openapi({ description: 'max length = 255' }),
    PostalCode: z.string().max(50).exactOptional().openapi({ description: 'max length = 50' }),
    Country: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ description: 'max length = 50, [A-Z], [a-z] only' }),
    AttentionTo: z.string().max(255).exactOptional().openapi({ description: 'max length = 255' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/types' },
    required: [],
  })
  .openapi('Address')

const PhoneSchema: z.ZodType<PhoneType> = z
  .object({
    PhoneType: z.enum(['DEFAULT', 'DDI', 'MOBILE', 'FAX', 'OFFICE']).exactOptional(),
    PhoneNumber: z.string().max(50).exactOptional().openapi({ description: 'max length = 50' }),
    PhoneAreaCode: z.string().max(10).exactOptional().openapi({ description: 'max length = 10' }),
    PhoneCountryCode: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({ description: 'max length = 20' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/types' },
    required: [],
  })
  .openapi('Phone')

type SalesTrackingCategoryType = { TrackingCategoryName?: string; TrackingOptionName?: string }

const SalesTrackingCategorySchema: z.ZodType<SalesTrackingCategoryType> = z
  .object({
    TrackingCategoryName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default sales tracking category name for contacts' }),
    TrackingOptionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default purchase tracking category name for contacts' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/tracking-categories/' },
    required: [],
  })
  .openapi('SalesTrackingCategory')

const PaymentTermTypeSchema = z
  .enum(['DAYSAFTERBILLDATE', 'DAYSAFTERBILLMONTH', 'OFCURRENTMONTH', 'OFFOLLOWINGMONTH'])
  .openapi('PaymentTermType')

const BillSchema = z
  .object({
    Day: z.int().exactOptional().openapi({ description: 'Day of Month (0-31)' }),
    Type: PaymentTermTypeSchema.exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/organisation/' },
    required: [],
  })
  .openapi('Bill')

type PaymentTermType = { Bills?: z.infer<typeof BillSchema>; Sales?: z.infer<typeof BillSchema> }

const PaymentTermSchema: z.ZodType<PaymentTermType> = z
  .object({ Bills: BillSchema.exactOptional(), Sales: BillSchema.exactOptional() })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/organisation/' },
    required: [],
  })
  .openapi('PaymentTerm')

const ContactGroupSchema: z.ZodType<ContactGroupType> = z
  .lazy(() =>
    z
      .object({
        Name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The Name of the contact group. Required when creating a new contact  group',
          }),
        Status: z
          .enum(['ACTIVE', 'DELETED'])
          .exactOptional()
          .openapi({
            description:
              'The Status of a contact group. To delete a contact group update the status to DELETED. Only contact groups with a status of ACTIVE are returned on GETs.',
          }),
        ContactGroupID: z
          .uuid()
          .exactOptional()
          .openapi({
            description:
              'The Xero identifier for an contact group – specified as a string following the endpoint name. e.g. /297c2dc5-cc47-4afd-8ec8-74990b8761e9',
          }),
        Contacts: z
          .array(ContactSchema)
          .exactOptional()
          .openapi({
            description:
              'The ContactID and Name of Contacts in a contact group. Returned on GETs when the ContactGroupID is supplied in the URL.',
          }),
      })
      .openapi({
        externalDocs: { url: 'http://developer.xero.com/documentation/api/contactgroups/' },
        required: [],
      }),
  )
  .openapi('ContactGroup')

const BrandingThemeSchema: z.ZodType<BrandingThemeType> = z
  .object({
    BrandingThemeID: z.uuid().exactOptional().openapi({ description: 'Xero identifier' }),
    Name: z.string().exactOptional().openapi({ description: 'Name of branding theme' }),
    LogoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The location of the image file used as the logo on this branding theme',
      }),
    Type: z.literal('INVOICE').exactOptional().openapi({ description: 'Always INVOICE' }),
    SortOrder: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Integer – ranked order of branding theme. The default branding theme has a value of 0',
      }),
    CreatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UTC timestamp of creation date of branding theme',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/branding-themes/' },
    required: [],
  })
  .openapi('BrandingTheme')

const BatchPaymentDetailsSchema: z.ZodType<BatchPaymentDetailsType> = z
  .object({
    BankAccountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Bank account number for use with Batch Payments',
        example: '123-456-1111111',
      }),
    BankAccountName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of bank for use with Batch Payments', example: 'ACME Bank' }),
    Details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '(Non-NZ Only) These details are sent to the org’s bank as a reference for the batch payment transaction. They will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement imported into Xero. Maximum field length = 18',
        example: 'Hello World',
      }),
    Code: z
      .string()
      .max(12)
      .exactOptional()
      .openapi({
        description:
          '(NZ Only) Optional references for the batch payment transaction. It will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement you import into Xero.',
        example: 'ABC',
      }),
    Reference: z
      .string()
      .max(12)
      .exactOptional()
      .openapi({
        description:
          '(NZ Only) Optional references for the batch payment transaction. It will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement you import into Xero.',
        example: 'Foobar',
      }),
  })
  .openapi({
    description: 'Bank details for use on a batch payment stored with each contact',
    externalDocs: { url: 'http://developer.xero.com/documentation/api/Contact/' },
    required: [],
  })
  .openapi('BatchPaymentDetails')

const AccountsReceivableSchema = z
  .object({
    Outstanding: z.float64().exactOptional().openapi({ 'x-is-money': true }),
    Overdue: z.float64().exactOptional().openapi({ 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('AccountsReceivable')

const AccountsPayableSchema = z
  .object({
    Outstanding: z.float64().exactOptional().openapi({ 'x-is-money': true }),
    Overdue: z.float64().exactOptional().openapi({ 'x-is-money': true }),
  })
  .openapi({ required: [] })
  .openapi('AccountsPayable')

type BalancesType = {
  AccountsReceivable?: z.infer<typeof AccountsReceivableSchema>
  AccountsPayable?: z.infer<typeof AccountsPayableSchema>
}

const BalancesSchema: z.ZodType<BalancesType> = z
  .object({
    AccountsReceivable: AccountsReceivableSchema.exactOptional(),
    AccountsPayable: AccountsPayableSchema.exactOptional(),
  })
  .openapi({
    description:
      'The raw AccountsReceivable(sales invoices) and AccountsPayable(bills) outstanding and overdue amounts, not converted to base currency (read only)',
    required: [],
  })
  .openapi('Balances')

const AttachmentSchema: z.ZodType<AttachmentType> = z
  .object({
    AttachmentID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Unique ID for the file',
        example: '00000000-0000-0000-0000-000000000000',
      }),
    FileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the file', example: 'xero-dev.jpg' }),
    Url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL to the file on xero.com',
        example:
          'https://api.xero.com/api.xro/2.0/Accounts/da962997-a8bd-4dff-9616-01cdc199283f/Attachments/sample5.jpg',
      }),
    MimeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of file', example: 'image/jpg' }),
    ContentLength: z.int().exactOptional().openapi({ description: 'Length of the file content' }),
    IncludeOnline: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Include the file with the online invoice' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/attachments/' },
    required: [],
  })
  .openapi('Attachment')

type ContactType = {
  ContactID?: string
  MergedToContactID?: string
  ContactNumber?: string
  AccountNumber?: string
  ContactStatus?: 'ACTIVE' | 'ARCHIVED' | 'GDPRREQUEST'
  Name?: string
  FirstName?: string
  LastName?: string
  CompanyNumber?: string
  EmailAddress?: string
  ContactPersons?: z.infer<typeof ContactPersonSchema>[]
  BankAccountDetails?: string
  TaxNumber?: string
  TaxNumberType?: 'SSN' | 'EIN' | 'ITIN' | 'ATIN'
  AccountsReceivableTaxType?: string
  AccountsPayableTaxType?: string
  Addresses?: z.infer<typeof AddressSchema>[]
  Phones?: z.infer<typeof PhoneSchema>[]
  IsSupplier?: boolean
  IsCustomer?: boolean
  SalesDefaultLineAmountType?: 'INCLUSIVE' | 'EXCLUSIVE' | 'NONE'
  PurchasesDefaultLineAmountType?: 'INCLUSIVE' | 'EXCLUSIVE' | 'NONE'
  DefaultCurrency?: z.infer<typeof CurrencyCodeSchema>
  XeroNetworkKey?: string
  SalesDefaultAccountCode?: string
  PurchasesDefaultAccountCode?: string
  SalesTrackingCategories?: z.infer<typeof SalesTrackingCategorySchema>[]
  PurchasesTrackingCategories?: z.infer<typeof SalesTrackingCategorySchema>[]
  TrackingCategoryName?: string
  TrackingCategoryOption?: string
  PaymentTerms?: z.infer<typeof PaymentTermSchema>
  UpdatedDateUTC?: string
  ContactGroups?: z.infer<typeof ContactGroupSchema>[]
  Website?: string
  BrandingTheme?: z.infer<typeof BrandingThemeSchema>
  BatchPayments?: z.infer<typeof BatchPaymentDetailsSchema>
  Discount?: number
  Balances?: z.infer<typeof BalancesSchema>
  Attachments?: z.infer<typeof AttachmentSchema>[]
  HasAttachments?: boolean
  ValidationErrors?: z.infer<typeof ValidationErrorSchema>[]
  HasValidationErrors?: boolean
  StatusAttributeString?: string
}

const ContactSchema: z.ZodType<ContactType> = z
  .lazy(() =>
    z
      .object({
        ContactID: z.uuid().exactOptional().openapi({ description: 'Xero identifier' }),
        MergedToContactID: z
          .uuid()
          .exactOptional()
          .openapi({
            description:
              'ID for the destination of a merged contact. Only returned when using paging or when fetching a contact by ContactId or ContactNumber.',
          }),
        ContactNumber: z
          .string()
          .max(50)
          .exactOptional()
          .openapi({
            description:
              'This can be updated via the API only i.e. This field is read only on the Xero contact screen, used to identify contacts in external systems (max length = 50). If the Contact Number is used, this is displayed as Contact Code in the Contacts UI in Xero.',
          }),
        AccountNumber: z
          .string()
          .max(50)
          .exactOptional()
          .openapi({
            description:
              'A user defined account number. This can be updated via the API and the Xero UI (max length = 50)',
          }),
        ContactStatus: z
          .enum(['ACTIVE', 'ARCHIVED', 'GDPRREQUEST'])
          .exactOptional()
          .openapi({ description: 'Current status of a contact – see contact status types' }),
        Name: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({ description: 'Full name of contact/organisation (max length = 255)' }),
        FirstName: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({ description: 'First name of contact person (max length = 255)' }),
        LastName: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({ description: 'Last name of contact person (max length = 255)' }),
        CompanyNumber: z
          .string()
          .max(50)
          .exactOptional()
          .openapi({ description: 'Company registration number (max length = 50)' }),
        EmailAddress: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({
            description:
              'Email address of contact person (umlauts not supported) (max length  = 255)',
          }),
        ContactPersons: z
          .array(ContactPersonSchema)
          .exactOptional()
          .openapi({ description: 'See contact persons' }),
        BankAccountDetails: z
          .string()
          .exactOptional()
          .openapi({ description: 'Bank account number of contact' }),
        TaxNumber: z
          .string()
          .max(50)
          .exactOptional()
          .openapi({
            description:
              'Tax number of contact – this is also known as the ABN (Australia), GST Number (New Zealand), VAT Number (UK) or Tax ID Number (US and global) in the Xero UI depending on which regionalized version of Xero you are using (max length = 50)',
          }),
        TaxNumberType: z
          .enum(['SSN', 'EIN', 'ITIN', 'ATIN'])
          .exactOptional()
          .openapi({
            description:
              'Identifier of the regional type of tax number, such as US, UK, or other regional tax identifiers',
          }),
        AccountsReceivableTaxType: z
          .string()
          .exactOptional()
          .openapi({ description: 'The tax type from TaxRates' }),
        AccountsPayableTaxType: z
          .string()
          .exactOptional()
          .openapi({ description: 'The tax type from TaxRates' }),
        Addresses: z
          .array(AddressSchema)
          .exactOptional()
          .openapi({
            description: 'Store certain address types for a contact – see address types',
          }),
        Phones: z
          .array(PhoneSchema)
          .exactOptional()
          .openapi({ description: 'Store certain phone types for a contact – see phone types' }),
        IsSupplier: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'true or false – Boolean that describes if a contact that has any AP  invoices entered against them. Cannot be set via PUT or POST – it is automatically set when an accounts payable invoice is generated against this contact.',
          }),
        IsCustomer: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'true or false – Boolean that describes if a contact has any AR invoices entered against them. Cannot be set via PUT or POST – it is automatically set when an accounts receivable invoice is generated against this contact.',
          }),
        SalesDefaultLineAmountType: z
          .enum(['INCLUSIVE', 'EXCLUSIVE', 'NONE'])
          .exactOptional()
          .openapi({
            description:
              'The default sales line amount type for a contact. Only available when summaryOnly parameter or paging is used, or when fetch by ContactId or ContactNumber.',
          }),
        PurchasesDefaultLineAmountType: z
          .enum(['INCLUSIVE', 'EXCLUSIVE', 'NONE'])
          .exactOptional()
          .openapi({
            description:
              'The default purchases line amount type for a contact Only available when summaryOnly parameter or paging is used, or when fetch by ContactId or ContactNumber.',
          }),
        DefaultCurrency: CurrencyCodeSchema.exactOptional(),
        XeroNetworkKey: z
          .string()
          .exactOptional()
          .openapi({ description: 'Store XeroNetworkKey for contacts.' }),
        SalesDefaultAccountCode: z
          .string()
          .exactOptional()
          .openapi({ description: 'The default sales account code for contacts' }),
        PurchasesDefaultAccountCode: z
          .string()
          .exactOptional()
          .openapi({ description: 'The default purchases account code for contacts' }),
        SalesTrackingCategories: z
          .array(SalesTrackingCategorySchema)
          .exactOptional()
          .openapi({ description: 'The default sales tracking categories for contacts' }),
        PurchasesTrackingCategories: z
          .array(SalesTrackingCategorySchema)
          .exactOptional()
          .openapi({ description: 'The default purchases tracking categories for contacts' }),
        TrackingCategoryName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The name of the Tracking Category assigned to the contact under SalesTrackingCategories and PurchasesTrackingCategories',
          }),
        TrackingCategoryOption: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The name of the Tracking Option assigned to the contact under SalesTrackingCategories and PurchasesTrackingCategories',
          }),
        PaymentTerms: PaymentTermSchema.exactOptional(),
        UpdatedDateUTC: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC timestamp of last update to contact',
            'x-is-msdate-time': true,
            example: '/Date(1573755038314)/',
            readOnly: true,
          }),
        ContactGroups: z
          .array(ContactGroupSchema)
          .exactOptional()
          .openapi({ description: 'Displays which contact groups a contact is included in' }),
        Website: z
          .string()
          .exactOptional()
          .openapi({ description: 'Website address for contact (read only)', readOnly: true }),
        BrandingTheme: BrandingThemeSchema.exactOptional(),
        BatchPayments: BatchPaymentDetailsSchema.exactOptional(),
        Discount: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The default discount rate for the contact (read only)',
            readOnly: true,
            'x-is-money': true,
          }),
        Balances: BalancesSchema.exactOptional(),
        Attachments: z
          .array(AttachmentSchema)
          .exactOptional()
          .openapi({ description: 'Displays array of attachments from the API' }),
        HasAttachments: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description: 'A boolean to indicate if a contact has an attachment',
            example: 'false',
          }),
        ValidationErrors: z
          .array(ValidationErrorSchema)
          .exactOptional()
          .openapi({ description: 'Displays validation errors returned from the API' }),
        HasValidationErrors: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description: 'A boolean to indicate if a contact has an validation errors',
            example: 'false',
          }),
        StatusAttributeString: z
          .string()
          .exactOptional()
          .openapi({ description: 'Status of object' }),
      })
      .openapi({
        externalDocs: { url: 'http://developer.xero.com/documentation/api/contacts/' },
        required: [],
      }),
  )
  .openapi('Contact')

type ContactGroupType = {
  Name?: string
  Status?: 'ACTIVE' | 'DELETED'
  ContactGroupID?: string
  Contacts?: z.infer<typeof ContactSchema>[]
}

const LineAmountTypesSchema: z.ZodType<LineAmountTypesType> = z
  .enum(['Exclusive', 'Inclusive', 'NoTax'])
  .openapi({
    description:
      'Line amounts are exclusive of tax by default if you don’t specify this element. See Line Amount Types',
  })
  .openapi('LineAmountTypes')

const LineItemSchema: z.ZodType<LineItemType> = z
  .object({
    LineItemID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'LineItem unique ID',
        example: '00000000-0000-0000-0000-000000000000',
      }),
    Description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description needs to be at least 1 char long. A line item with just a description (i.e no unit amount or quantity) can be created by specifying just a <Description> element that contains at least 1 character',
      }),
    Quantity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'LineItem Quantity', 'x-is-money': true }),
    UnitAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'LineItem Unit Amount', 'x-is-money': true }),
    ItemCode: z.string().exactOptional().openapi({ description: 'See Items' }),
    AccountCode: z.string().exactOptional().openapi({ description: 'See Accounts' }),
    AccountID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The associated account ID related to this line item',
        example: '00000000-0000-0000-0000-000000000000',
      }),
    TaxType: z.string().exactOptional().openapi({ description: 'The tax type from TaxRates' }),
    TaxAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The tax amount is auto calculated as a percentage of the line amount (see below) based on the tax rate. This value can be overriden if the calculated <TaxAmount> is not correct.',
        'x-is-money': true,
      }),
    Item: LineItemItemSchema.exactOptional(),
    LineAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'If you wish to omit either the Quantity or UnitAmount you can provide a LineAmount and Xero will calculate the missing amount for you. The line amount reflects the discounted price if either a DiscountRate or DiscountAmount has been used i.e. LineAmount = Quantity * Unit Amount * ((100 - DiscountRate)/100) or LineAmount = (Quantity * UnitAmount) - DiscountAmount',
        'x-is-money': true,
      }),
    Tracking: z
      .array(LineItemTrackingSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional Tracking Category – see Tracking.  Any LineItem can have a  maximum of 2 <TrackingCategory> elements.',
      }),
    DiscountRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Percentage discount being applied to a line item (only supported on  ACCREC invoices – ACC PAY invoices and credit notes in Xero do not support discounts',
        'x-is-money': true,
      }),
    DiscountAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Discount amount being applied to a line item. Only supported on ACCREC invoices and quotes. ACCPAY invoices and credit notes in Xero do not support discounts.',
        'x-is-money': true,
      }),
    RepeatingInvoiceID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Xero identifier for a Repeating Invoice',
        example: '00000000-0000-0000-0000-000000000000',
      }),
    Taxability: z
      .enum(['TAXABLE', 'NON_TAXABLE', 'EXEMPT', 'PART_TAXABLE', 'NOT_APPLICABLE'])
      .exactOptional()
      .openapi({ description: 'The type of taxability' }),
    SalesTaxCodeId: z
      .number()
      .exactOptional()
      .openapi({ description: 'The ID of the sales tax code' }),
    TaxBreakdown: z
      .array(TaxBreakdownComponentSchema)
      .exactOptional()
      .openapi({ description: 'An array of tax components defined for this line item' }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/invoices#post' },
    required: [],
  })
  .openapi('LineItem')

const AllocationSchema: z.ZodType<AllocationType> = z
  .lazy(() =>
    z
      .object({
        AllocationID: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Xero generated unique identifier' }),
        Invoice: InvoiceSchema,
        Overpayment: OverpaymentSchema.exactOptional(),
        Prepayment: PrepaymentSchema.exactOptional(),
        CreditNote: CreditNoteSchema.exactOptional(),
        Amount: z
          .float64()
          .openapi({ description: 'the amount being applied to the invoice', 'x-is-money': true }),
        Date: z
          .string()
          .openapi({
            description: 'the date the allocation is applied YYYY-MM-DD.',
            'x-is-msdate': true,
          }),
        IsDeleted: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'A flag that returns true when the allocation is succesfully deleted',
            readOnly: true,
          }),
        StatusAttributeString: z
          .string()
          .exactOptional()
          .openapi({ description: 'A string to indicate if a invoice status' }),
        ValidationErrors: z
          .array(ValidationErrorSchema)
          .exactOptional()
          .openapi({ description: 'Displays array of validation error messages from the API' }),
      })
      .openapi({
        externalDocs: { url: 'http://developer.xero.com/documentation/api/prepayments/' },
        required: ['Amount', 'Invoice', 'Date'],
      }),
  )
  .openapi('Allocation')

type InvoiceAddressType = {
  InvoiceAddressType?: 'FROM' | 'TO'
  AddressLine1?: string
  AddressLine2?: string
  AddressLine3?: string
  AddressLine4?: string
  City?: string
  Region?: string
  PostalCode?: string
  Country?: string
}

const InvoiceAddressSchema: z.ZodType<InvoiceAddressType> = z
  .object({
    InvoiceAddressType: z
      .enum(['FROM', 'TO'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the address is defined as origin (FROM) or destination (TO)',
      }),
    AddressLine1: z
      .string()
      .exactOptional()
      .openapi({ description: 'First line of a physical address' }),
    AddressLine2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Second line of a physical address' }),
    AddressLine3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Third line of a physical address' }),
    AddressLine4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fourth line of a physical address' }),
    City: z.string().exactOptional().openapi({ description: 'City of a physical address' }),
    Region: z
      .string()
      .exactOptional()
      .openapi({ description: 'Region or state of a physical address' }),
    PostalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code of a physical address' }),
    Country: z.string().exactOptional().openapi({ description: 'Country of a physical address' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceAddress')

type CreditNoteType = {
  Type?: 'ACCPAYCREDIT' | 'ACCRECCREDIT'
  Contact?: z.infer<typeof ContactSchema>
  Date?: string
  DueDate?: string
  Status?: 'DRAFT' | 'SUBMITTED' | 'DELETED' | 'AUTHORISED' | 'PAID' | 'VOIDED'
  LineAmountTypes?: z.infer<typeof LineAmountTypesSchema>
  LineItems?: z.infer<typeof LineItemSchema>[]
  SubTotal?: number
  TotalTax?: number
  Total?: number
  CISDeduction?: number
  CISRate?: number
  UpdatedDateUTC?: string
  UpdatedDateUTCString?: string
  CurrencyCode?: z.infer<typeof CurrencyCodeSchema>
  FullyPaidOnDate?: string
  CreditNoteID?: string
  CreditNoteNumber?: string
  Reference?: string
  SentToContact?: boolean
  CurrencyRate?: number
  RemainingCredit?: number
  Allocations?: z.infer<typeof AllocationSchema>[]
  AppliedAmount?: number
  Payments?: z.infer<typeof PaymentSchema>[]
  BrandingThemeID?: string
  StatusAttributeString?: string
  HasAttachments?: boolean
  HasErrors?: boolean
  ValidationErrors?: z.infer<typeof ValidationErrorSchema>[]
  Warnings?: z.infer<typeof ValidationErrorSchema>[]
  InvoiceAddresses?: z.infer<typeof InvoiceAddressSchema>[]
}

const InvoiceSchema: z.ZodType<InvoiceType> = z
  .lazy(() =>
    z
      .object({
        Type: z
          .enum([
            'ACCPAY',
            'ACCPAYCREDIT',
            'APOVERPAYMENT',
            'APPREPAYMENT',
            'ACCREC',
            'ACCRECCREDIT',
            'AROVERPAYMENT',
            'ARPREPAYMENT',
          ])
          .exactOptional()
          .openapi({ description: 'See Invoice Types' }),
        Contact: ContactSchema.exactOptional(),
        LineItems: z
          .array(LineItemSchema)
          .exactOptional()
          .openapi({ description: 'See LineItems' }),
        Date: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Date invoice was issued – YYYY-MM-DD. If the Date element is not specified it will default to the current date based on the timezone setting of the organisation',
            'x-is-msdate': true,
          }),
        DueDate: z
          .string()
          .exactOptional()
          .openapi({ description: 'Date invoice is due – YYYY-MM-DD', 'x-is-msdate': true }),
        LineAmountTypes: LineAmountTypesSchema.exactOptional(),
        InvoiceNumber: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({
            description:
              'ACCREC – Unique alpha numeric code identifying invoice (when missing will auto-generate from your Organisation Invoice Settings) (max length = 255)',
          }),
        Reference: z
          .string()
          .exactOptional()
          .openapi({ description: 'ACCREC only – additional reference number' }),
        BrandingThemeID: z.uuid().exactOptional().openapi({ description: 'See BrandingThemes' }),
        Url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'URL link to a source document – shown as “Go to [appName]” in the Xero app',
          }),
        CurrencyCode: CurrencyCodeSchema.exactOptional(),
        CurrencyRate: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used. (max length = [18].[6])',
            'x-is-money': true,
          }),
        Status: z
          .enum(['DRAFT', 'SUBMITTED', 'DELETED', 'AUTHORISED', 'PAID', 'VOIDED'])
          .exactOptional()
          .openapi({ description: 'See Invoice Status Codes' }),
        SentToContact: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Boolean to set whether the invoice in the Xero app should be marked as “sent”. This can be set only on invoices that have been approved',
          }),
        ExpectedPaymentDate: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Shown on sales invoices (Accounts Receivable) when this has been set',
            'x-is-msdate': true,
          }),
        PlannedPaymentDate: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Shown on bills (Accounts Payable) when this has been set',
            'x-is-msdate': true,
          }),
        CISDeduction: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'CIS deduction for UK contractors',
            readOnly: true,
            'x-is-money': true,
          }),
        CISRate: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'CIS Deduction rate for the organisation',
            readOnly: true,
            'x-is-money': true,
          }),
        SubTotal: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              "Total of invoice excluding taxes. Calculated automatically by Xero from the invoice's line items. Only for ACCPAY and ACCREC invoices, where this opt-in capability is enabled for your organisation, can SubTotal be supplied on write – on a SUBMITTED or AUTHORISED invoice supplied together with TotalTax and Total, it is validated against the calculated line item totals (see RoundingAmount); it is ignored in all other cases. This write behaviour, and the returned value reflecting it, only applies to the Create and Update endpoints (POST/PUT) and to retrieving a single invoice by ID (GET by ID) – it does not apply when listing invoices (GET)\n",
            'x-is-money': true,
          }),
        TotalTax: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              "Total tax on invoice. Calculated automatically by Xero from the invoice's line items. Only for ACCPAY and ACCREC invoices, where this opt-in capability is enabled for your organisation, can TotalTax be supplied on write – on a SUBMITTED or AUTHORISED invoice supplied together with SubTotal and Total, it is validated against the calculated line item totals (see RoundingAmount); it is ignored in all other cases. This write behaviour, and the returned value reflecting it, only applies to the Create and Update endpoints (POST/PUT) and to retrieving a single invoice by ID (GET by ID) – it does not apply when listing invoices (GET)\n",
            'x-is-money': true,
          }),
        Total: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              "Total of Invoice tax inclusive (i.e. SubTotal + TotalTax + RoundingAmount). Calculated automatically by Xero from the invoice's line items. Only for ACCPAY and ACCREC invoices, where this opt-in capability is enabled for your organisation, can Total be supplied on write – on a SUBMITTED or AUTHORISED invoice supplied together with SubTotal and TotalTax, it is validated against the calculated line item totals plus RoundingAmount; in all other cases this will be ignored if it does not equal the sum of the LineAmounts. This write behaviour, and the returned value reflecting it, only applies to the Create and Update endpoints (POST/PUT) and to retrieving a single invoice by ID (GET by ID) – it does not apply when listing invoices (GET)\n",
            'x-is-money': true,
          }),
        TotalDiscount: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'Total of discounts applied on the invoice line items',
            readOnly: true,
            'x-is-money': true,
          }),
        RoundingAmount: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'An optional rounding adjustment added to SubTotal + TotalTax to give Total (i.e. Total = SubTotal + TotalTax + RoundingAmount). Only applies to ACCPAY and ACCREC invoices, and only if this opt-in capability has been enabled for your organisation. Not validated while the invoice is DRAFT. For SUBMITTED and AUTHORISED invoices, RoundingAmount is only applied when SubTotal, TotalTax and Total are all supplied together, and must be between -0.10 and 0.10 – values outside this range are rejected with a validation error (on DRAFT invoices, an out-of-range value is ignored instead). This field is only settable and only returned via the Create and Update endpoints (POST/PUT) and when retrieving a single invoice by ID (GET by ID) – it is not returned when listing invoices (GET)\n',
            'x-is-money': true,
          }),
        EnteredTotal: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'The total amount as originally entered for the invoice, before any RoundingAmount adjustment is applied. Only applies to ACCPAY and ACCREC invoices, and only if this opt-in capability has been enabled for your organisation. Can only be set while the invoice is DRAFT; once the invoice is no longer DRAFT this reflects Total. This field is only settable and only returned via the Create and Update endpoints (POST/PUT) and when retrieving a single invoice by ID (GET by ID) – it is not returned when listing invoices (GET)\n',
            'x-is-money': true,
          }),
        InvoiceID: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Xero generated unique identifier for invoice' }),
        RepeatingInvoiceID: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Xero generated unique identifier for repeating invoices' }),
        HasAttachments: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description: 'boolean to indicate if an invoice has an attachment',
            readOnly: true,
            example: 'false',
          }),
        IsDiscounted: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'boolean to indicate if an invoice has a discount',
            readOnly: true,
          }),
        Payments: z
          .array(PaymentSchema)
          .exactOptional()
          .openapi({ description: 'See Payments', readOnly: true }),
        Prepayments: z
          .array(PrepaymentSchema)
          .exactOptional()
          .openapi({ description: 'See Prepayments', readOnly: true }),
        Overpayments: z
          .array(OverpaymentSchema)
          .exactOptional()
          .openapi({ description: 'See Overpayments', readOnly: true }),
        AmountDue: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'Amount remaining to be paid on invoice',
            readOnly: true,
            'x-is-money': true,
          }),
        AmountPaid: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'Sum of payments received for invoice',
            readOnly: true,
            'x-is-money': true,
          }),
        FullyPaidOnDate: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The date the invoice was fully paid. Only returned on fully paid invoices',
            readOnly: true,
            'x-is-msdate': true,
          }),
        AmountCredited: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'Sum of all credit notes, over-payments and pre-payments applied to invoice',
            readOnly: true,
            'x-is-money': true,
          }),
        UpdatedDateUTC: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC timestamp of last update to the invoice',
            'x-is-msdate-time': true,
            example: '/Date(1573755038314)/',
            readOnly: true,
          }),
        UpdatedDateUTCString: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC ISO-8601 formatted timestamp of last update to the invoice',
            example: '2019-11-14T18:10:38Z',
            readOnly: true,
          }),
        CreditNotes: z
          .array(CreditNoteSchema)
          .exactOptional()
          .openapi({
            description: 'Details of credit notes that have been applied to an invoice',
            readOnly: true,
          }),
        Attachments: z
          .array(AttachmentSchema)
          .exactOptional()
          .openapi({ description: 'Displays array of attachments from the API' }),
        HasErrors: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description: 'A boolean to indicate if a invoice has an validation errors',
            example: 'false',
          }),
        StatusAttributeString: z
          .string()
          .exactOptional()
          .openapi({ description: 'A string to indicate if a invoice status' }),
        ValidationErrors: z
          .array(ValidationErrorSchema)
          .exactOptional()
          .openapi({ description: 'Displays array of validation error messages from the API' }),
        Warnings: z
          .array(ValidationErrorSchema)
          .exactOptional()
          .openapi({ description: 'Displays array of warning messages from the API' }),
        InvoiceAddresses: z
          .array(InvoiceAddressSchema)
          .exactOptional()
          .openapi({ description: 'An array of addresses used to auto calculate sales tax' }),
      })
      .openapi({
        externalDocs: { url: 'http://developer.xero.com/documentation/api/invoices/' },
        required: [],
      }),
  )
  .openapi('Invoice')

const OverpaymentSchema: z.ZodType<OverpaymentType> = z
  .lazy(() =>
    z
      .object({
        Type: z
          .enum(['RECEIVE-OVERPAYMENT', 'SPEND-OVERPAYMENT', 'AROVERPAYMENT'])
          .exactOptional()
          .openapi({ description: 'See Overpayment Types' }),
        Contact: ContactSchema.exactOptional(),
        Date: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The date the overpayment is created YYYY-MM-DD',
            'x-is-msdate': true,
          }),
        Status: z
          .enum(['AUTHORISED', 'PAID', 'VOIDED'])
          .exactOptional()
          .openapi({ description: 'See Overpayment Status Codes' }),
        LineAmountTypes: LineAmountTypesSchema.exactOptional(),
        LineItems: z
          .array(LineItemSchema)
          .exactOptional()
          .openapi({ description: 'See Overpayment Line Items' }),
        SubTotal: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The subtotal of the overpayment excluding taxes',
            'x-is-money': true,
          }),
        TotalTax: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The total tax on the overpayment', 'x-is-money': true }),
        Total: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The total of the overpayment (subtotal + total tax)',
            'x-is-money': true,
          }),
        UpdatedDateUTC: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC timestamp of last update to the overpayment',
            'x-is-msdate-time': true,
            example: '/Date(1573755038314)/',
            readOnly: true,
          }),
        UpdatedDateUTCString: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC ISO-8601 formatted timestamp of last update to the overpayment',
            example: '2019-11-14T18:10:38Z',
            readOnly: true,
          }),
        CurrencyCode: CurrencyCodeSchema.exactOptional(),
        OverpaymentID: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Xero generated unique identifier' }),
        CurrencyRate: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'The currency rate for a multicurrency overpayment. If no rate is specified, the XE.com day rate is used',
            'x-is-money': true,
          }),
        RemainingCredit: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The remaining credit balance on the overpayment',
            'x-is-money': true,
          }),
        Allocations: z
          .array(AllocationSchema)
          .exactOptional()
          .openapi({ description: 'See Allocations' }),
        AppliedAmount: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The amount of applied to an invoice', example: 2 }),
        Payments: z.array(PaymentSchema).exactOptional().openapi({ description: 'See Payments' }),
        HasAttachments: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description: 'boolean to indicate if a overpayment has an attachment',
            readOnly: true,
            example: 'false',
          }),
        Reference: z
          .string()
          .exactOptional()
          .openapi({
            description: 'An optional description for Overpayment',
            example: 'Ref for payment',
          }),
        Attachments: z
          .array(AttachmentSchema)
          .exactOptional()
          .openapi({ description: 'See Attachments' }),
      })
      .openapi({
        externalDocs: { url: 'http://developer.xero.com/documentation/api/overpayments/' },
        required: [],
      }),
  )
  .openapi('Overpayment')

const PrepaymentSchema: z.ZodType<PrepaymentType> = z
  .lazy(() =>
    z
      .object({
        Type: z
          .enum(['RECEIVE-PREPAYMENT', 'SPEND-PREPAYMENT', 'ARPREPAYMENT', 'APPREPAYMENT'])
          .exactOptional()
          .openapi({ description: 'See Prepayment Types' }),
        Contact: ContactSchema.exactOptional(),
        Date: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The date the prepayment is created YYYY-MM-DD',
            'x-is-msdate': true,
          }),
        Status: z
          .enum(['AUTHORISED', 'PAID', 'VOIDED'])
          .exactOptional()
          .openapi({ description: 'See Prepayment Status Codes' }),
        LineAmountTypes: LineAmountTypesSchema.exactOptional(),
        LineItems: z
          .array(LineItemSchema)
          .exactOptional()
          .openapi({ description: 'See Prepayment Line Items' }),
        SubTotal: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The subtotal of the prepayment excluding taxes',
            'x-is-money': true,
          }),
        TotalTax: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The total tax on the prepayment', 'x-is-money': true }),
        Total: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The total of the prepayment(subtotal + total tax)',
            'x-is-money': true,
          }),
        Reference: z
          .string()
          .exactOptional()
          .openapi({
            description: "Returns Invoice number field. Reference field isn't available.",
            readOnly: true,
          }),
        InvoiceNumber: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Returns Invoice number for prepayment receive document only.',
            readOnly: true,
          }),
        UpdatedDateUTC: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC timestamp of last update to the prepayment',
            'x-is-msdate-time': true,
            example: '/Date(1573755038314)/',
            readOnly: true,
          }),
        UpdatedDateUTCString: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC ISO-8601 formatted timestamp of last update to the prepayment',
            example: '2019-11-14T18:10:38Z',
            readOnly: true,
          }),
        CurrencyCode: CurrencyCodeSchema.exactOptional(),
        PrepaymentID: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Xero generated unique identifier' }),
        BrandingThemeID: z
          .uuid()
          .exactOptional()
          .openapi({
            description:
              'The unique identifier of the branding template applied to a receive prepayment',
            readOnly: true,
          }),
        CurrencyRate: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'The currency rate for a multicurrency prepayment. If no rate is specified, the XE.com day rate is used',
            'x-is-money': true,
          }),
        RemainingCredit: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The remaining credit balance on the prepayment',
            'x-is-money': true,
          }),
        Allocations: z
          .array(AllocationSchema)
          .exactOptional()
          .openapi({ description: 'See Allocations' }),
        Payments: z.array(PaymentSchema).exactOptional().openapi({ description: 'See Payments' }),
        AppliedAmount: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The amount of applied to an invoice', example: 2 }),
        HasAttachments: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description: 'boolean to indicate if a prepayment has an attachment',
            readOnly: true,
            example: 'false',
          }),
        Attachments: z
          .array(AttachmentSchema)
          .exactOptional()
          .openapi({ description: 'See Attachments' }),
      })
      .openapi({
        externalDocs: { url: 'http://developer.xero.com/documentation/api/prepayments/' },
        required: [],
      }),
  )
  .openapi('Prepayment')

const CreditNoteSchema: z.ZodType<CreditNoteType> = z
  .lazy(() =>
    z
      .object({
        Type: z
          .enum(['ACCPAYCREDIT', 'ACCRECCREDIT'])
          .exactOptional()
          .openapi({ description: 'See Credit Note Types' }),
        Contact: ContactSchema.exactOptional(),
        Date: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The date the credit note is issued YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation',
            'x-is-msdate': true,
          }),
        DueDate: z
          .string()
          .exactOptional()
          .openapi({ description: 'Date invoice is due – YYYY-MM-DD', 'x-is-msdate': true }),
        Status: z
          .enum(['DRAFT', 'SUBMITTED', 'DELETED', 'AUTHORISED', 'PAID', 'VOIDED'])
          .exactOptional()
          .openapi({ description: 'See Credit Note Status Codes' }),
        LineAmountTypes: LineAmountTypesSchema.exactOptional(),
        LineItems: z
          .array(LineItemSchema)
          .exactOptional()
          .openapi({ description: 'See Invoice Line Items' }),
        SubTotal: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The subtotal of the credit note excluding taxes',
            'x-is-money': true,
          }),
        TotalTax: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The total tax on the credit note', 'x-is-money': true }),
        Total: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The total of the Credit Note(subtotal + total tax)',
            'x-is-money': true,
          }),
        CISDeduction: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'CIS deduction for UK contractors',
            readOnly: true,
            'x-is-money': true,
          }),
        CISRate: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'CIS Deduction rate for the organisation',
            readOnly: true,
            'x-is-money': true,
          }),
        UpdatedDateUTC: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC timestamp of last update to the credit note',
            'x-is-msdate-time': true,
            example: '/Date(1573755038314)/',
            readOnly: true,
          }),
        UpdatedDateUTCString: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC ISO-8601 formatted timestamp of last update to the credit note',
            example: '2019-11-14T18:10:38Z',
            readOnly: true,
          }),
        CurrencyCode: CurrencyCodeSchema.exactOptional().openapi({
          description: 'The specified currency code',
        }),
        FullyPaidOnDate: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Date when credit note was fully paid(UTC format)',
            'x-is-msdate': true,
          }),
        CreditNoteID: z
          .uuid()
          .exactOptional()
          .openapi({ description: 'Xero generated unique identifier' }),
        CreditNoteNumber: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'ACCRECCREDIT – Unique alpha numeric code identifying credit note (when missing will auto-generate from your Organisation Invoice Settings)',
          }),
        Reference: z
          .string()
          .exactOptional()
          .openapi({ description: 'ACCRECCREDIT only – additional reference number' }),
        SentToContact: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Boolean to set whether the credit note in the Xero app should be marked as “sent”. This can be set only on credit notes that have been approved',
          }),
        CurrencyRate: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used',
            'x-is-money': true,
          }),
        RemainingCredit: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The remaining credit balance on the Credit Note',
            'x-is-money': true,
          }),
        Allocations: z
          .array(AllocationSchema)
          .exactOptional()
          .openapi({ description: 'See Allocations' }),
        AppliedAmount: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The amount of applied to an invoice',
            example: 2,
            'x-is-money': true,
          }),
        Payments: z.array(PaymentSchema).exactOptional().openapi({ description: 'See Payments' }),
        BrandingThemeID: z.uuid().exactOptional().openapi({ description: 'See BrandingThemes' }),
        StatusAttributeString: z
          .string()
          .exactOptional()
          .openapi({ description: 'A string to indicate if a invoice status' }),
        HasAttachments: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description: 'boolean to indicate if a credit note has an attachment',
            example: 'false',
          }),
        HasErrors: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description: 'A boolean to indicate if a credit note has an validation errors',
            example: 'false',
          }),
        ValidationErrors: z
          .array(ValidationErrorSchema)
          .exactOptional()
          .openapi({ description: 'Displays array of validation error messages from the API' }),
        Warnings: z
          .array(ValidationErrorSchema)
          .exactOptional()
          .openapi({ description: 'Displays array of warning messages from the API' }),
        InvoiceAddresses: z
          .array(InvoiceAddressSchema)
          .exactOptional()
          .openapi({ description: 'An array of addresses used to auto calculate sales tax' }),
      })
      .openapi({
        externalDocs: { url: 'http://developer.xero.com/documentation/api/credit-notes/' },
        required: [],
      }),
  )
  .openapi('CreditNote')

type AllocationType = {
  AllocationID?: string
  Invoice: z.infer<typeof InvoiceSchema>
  Overpayment?: z.infer<typeof OverpaymentSchema>
  Prepayment?: z.infer<typeof PrepaymentSchema>
  CreditNote?: z.infer<typeof CreditNoteSchema>
  Amount: number
  Date: string
  IsDeleted?: boolean
  StatusAttributeString?: string
  ValidationErrors?: z.infer<typeof ValidationErrorSchema>[]
}

type InvoiceType = {
  Type?:
    | 'ACCPAY'
    | 'ACCPAYCREDIT'
    | 'APOVERPAYMENT'
    | 'APPREPAYMENT'
    | 'ACCREC'
    | 'ACCRECCREDIT'
    | 'AROVERPAYMENT'
    | 'ARPREPAYMENT'
  Contact?: z.infer<typeof ContactSchema>
  LineItems?: z.infer<typeof LineItemSchema>[]
  Date?: string
  DueDate?: string
  LineAmountTypes?: z.infer<typeof LineAmountTypesSchema>
  InvoiceNumber?: string
  Reference?: string
  BrandingThemeID?: string
  Url?: string
  CurrencyCode?: z.infer<typeof CurrencyCodeSchema>
  CurrencyRate?: number
  Status?: 'DRAFT' | 'SUBMITTED' | 'DELETED' | 'AUTHORISED' | 'PAID' | 'VOIDED'
  SentToContact?: boolean
  ExpectedPaymentDate?: string
  PlannedPaymentDate?: string
  CISDeduction?: number
  CISRate?: number
  SubTotal?: number
  TotalTax?: number
  Total?: number
  TotalDiscount?: number
  RoundingAmount?: number
  EnteredTotal?: number
  InvoiceID?: string
  RepeatingInvoiceID?: string
  HasAttachments?: boolean
  IsDiscounted?: boolean
  Payments?: z.infer<typeof PaymentSchema>[]
  Prepayments?: z.infer<typeof PrepaymentSchema>[]
  Overpayments?: z.infer<typeof OverpaymentSchema>[]
  AmountDue?: number
  AmountPaid?: number
  FullyPaidOnDate?: string
  AmountCredited?: number
  UpdatedDateUTC?: string
  UpdatedDateUTCString?: string
  CreditNotes?: z.infer<typeof CreditNoteSchema>[]
  Attachments?: z.infer<typeof AttachmentSchema>[]
  HasErrors?: boolean
  StatusAttributeString?: string
  ValidationErrors?: z.infer<typeof ValidationErrorSchema>[]
  Warnings?: z.infer<typeof ValidationErrorSchema>[]
  InvoiceAddresses?: z.infer<typeof InvoiceAddressSchema>[]
}

const CountryCodeSchema = z
  .enum([
    'AD',
    'AE',
    'AF',
    'AG',
    'AI',
    'AL',
    'AM',
    'AN',
    'AO',
    'AQ',
    'AR',
    'AS',
    'AT',
    'AU',
    'AW',
    'AZ',
    'BA',
    'BB',
    'BD',
    'BE',
    'BF',
    'BG',
    'BH',
    'BI',
    'BJ',
    'BL',
    'BM',
    'BN',
    'BO',
    'BR',
    'BS',
    'BT',
    'BW',
    'BY',
    'BZ',
    'CA',
    'CC',
    'CD',
    'CF',
    'CG',
    'CH',
    'CI',
    'CK',
    'CL',
    'CM',
    'CN',
    'CO',
    'CR',
    'CU',
    'CV',
    'CW',
    'CX',
    'CY',
    'CZ',
    'DE',
    'DJ',
    'DK',
    'DM',
    'DO',
    'DZ',
    'EC',
    'EE',
    'EG',
    'EH',
    'ER',
    'ES',
    'ET',
    'FI',
    'FJ',
    'FK',
    'FM',
    'FO',
    'FR',
    'GA',
    'GB',
    'GD',
    'GE',
    'GG',
    'GH',
    'GI',
    'GL',
    'GM',
    'GN',
    'GQ',
    'GR',
    'GT',
    'GU',
    'GW',
    'GY',
    'HK',
    'HN',
    'HR',
    'HT',
    'HU',
    'ID',
    'IE',
    'IL',
    'IM',
    'IN',
    'IO',
    'IQ',
    'IR',
    'IS',
    'IT',
    'JE',
    'JM',
    'JO',
    'JP',
    'KE',
    'KG',
    'KH',
    'KI',
    'KM',
    'KN',
    'KP',
    'KR',
    'KW',
    'KY',
    'KZ',
    'LA',
    'LB',
    'LC',
    'LI',
    'LK',
    'LR',
    'LS',
    'LT',
    'LU',
    'LV',
    'LY',
    'MA',
    'MC',
    'MD',
    'ME',
    'MF',
    'MG',
    'MH',
    'MK',
    'ML',
    'MM',
    'MN',
    'MO',
    'MP',
    'MR',
    'MS',
    'MT',
    'MU',
    'MV',
    'MW',
    'MX',
    'MY',
    'MZ',
    'NA',
    'NC',
    'NE',
    'NG',
    'NI',
    'NL',
    'NO',
    'NP',
    'NR',
    'NU',
    'NZ',
    'OM',
    'PA',
    'PE',
    'PF',
    'PG',
    'PH',
    'PK',
    'PL',
    'PM',
    'PN',
    'PR',
    'PS',
    'PT',
    'PW',
    'PY',
    'QA',
    'RE',
    'RO',
    'RS',
    'RU',
    'RW',
    'SA',
    'SB',
    'SC',
    'SD',
    'SE',
    'SG',
    'SH',
    'SI',
    'SJ',
    'SK',
    'SL',
    'SM',
    'SN',
    'SO',
    'SR',
    'SS',
    'ST',
    'SV',
    'SX',
    'SY',
    'SZ',
    'TC',
    'TD',
    'TG',
    'TH',
    'TJ',
    'TK',
    'TL',
    'TM',
    'TN',
    'TO',
    'TR',
    'TT',
    'TV',
    'TW',
    'TZ',
    'UA',
    'UG',
    'US',
    'UY',
    'UZ',
    'VA',
    'VC',
    'VE',
    'VG',
    'VI',
    'VN',
    'VU',
    'WF',
    'WS',
    'XK',
    'YE',
    'YT',
    'ZA',
    'ZM',
    'ZW',
  ])
  .openapi('CountryCode')

const TimeZoneSchema = z
  .enum([
    'AFGHANISTANSTANDARDTIME',
    'ALASKANSTANDARDTIME',
    'ALEUTIANSTANDARDTIME',
    'ALTAISTANDARDTIME',
    'ARABIANSTANDARDTIME',
    'ARABICSTANDARDTIME',
    'ARABSTANDARDTIME',
    'ARGENTINASTANDARDTIME',
    'ASTRAKHANSTANDARDTIME',
    'ATLANTICSTANDARDTIME',
    'AUSCENTRALSTANDARDTIME',
    'AUSCENTRALWSTANDARDTIME',
    'AUSEASTERNSTANDARDTIME',
    'AZERBAIJANSTANDARDTIME',
    'AZORESSTANDARDTIME',
    'BAHIASTANDARDTIME',
    'BANGLADESHSTANDARDTIME',
    'BELARUSSTANDARDTIME',
    'BOUGAINVILLESTANDARDTIME',
    'CANADACENTRALSTANDARDTIME',
    'CAPEVERDESTANDARDTIME',
    'CAUCASUSSTANDARDTIME',
    'CENAUSTRALIASTANDARDTIME',
    'CENTRALAMERICASTANDARDTIME',
    'CENTRALASIASTANDARDTIME',
    'CENTRALBRAZILIANSTANDARDTIME',
    'CENTRALEUROPEANSTANDARDTIME',
    'CENTRALEUROPESTANDARDTIME',
    'CENTRALPACIFICSTANDARDTIME',
    'CENTRALSTANDARDTIME',
    'CENTRALSTANDARDTIME(MEXICO)',
    'CHATHAMISLANDSSTANDARDTIME',
    'CHINASTANDARDTIME',
    'CUBASTANDARDTIME',
    'DATELINESTANDARDTIME',
    'EAFRICASTANDARDTIME',
    'EASTERISLANDSTANDARDTIME',
    'EASTERNSTANDARDTIME',
    'EASTERNSTANDARDTIME(MEXICO)',
    'EAUSTRALIASTANDARDTIME',
    'EEUROPESTANDARDTIME',
    'EGYPTSTANDARDTIME',
    'EKATERINBURGSTANDARDTIME',
    'ESOUTHAMERICASTANDARDTIME',
    'FIJISTANDARDTIME',
    'FLESTANDARDTIME',
    'GEORGIANSTANDARDTIME',
    'GMTSTANDARDTIME',
    'GREENLANDSTANDARDTIME',
    'GREENWICHSTANDARDTIME',
    'GTBSTANDARDTIME',
    'HAITISTANDARDTIME',
    'HAWAIIANSTANDARDTIME',
    'INDIASTANDARDTIME',
    'IRANSTANDARDTIME',
    'ISRAELSTANDARDTIME',
    'JORDANSTANDARDTIME',
    'KALININGRADSTANDARDTIME',
    'KAMCHATKASTANDARDTIME',
    'KOREASTANDARDTIME',
    'LIBYASTANDARDTIME',
    'LINEISLANDSSTANDARDTIME',
    'LORDHOWESTANDARDTIME',
    'MAGADANSTANDARDTIME',
    'MAGALLANESSTANDARDTIME',
    'MARQUESASSTANDARDTIME',
    'MAURITIUSSTANDARDTIME',
    'MIDATLANTICSTANDARDTIME',
    'MIDDLEEASTSTANDARDTIME',
    'MONTEVIDEOSTANDARDTIME',
    'MOROCCOSTANDARDTIME',
    'MOUNTAINSTANDARDTIME',
    'MOUNTAINSTANDARDTIME(MEXICO)',
    'MYANMARSTANDARDTIME',
    'NAMIBIASTANDARDTIME',
    'NCENTRALASIASTANDARDTIME',
    'NEPALSTANDARDTIME',
    'NEWFOUNDLANDSTANDARDTIME',
    'NEWZEALANDSTANDARDTIME',
    'NORFOLKSTANDARDTIME',
    'NORTHASIAEASTSTANDARDTIME',
    'NORTHASIASTANDARDTIME',
    'NORTHKOREASTANDARDTIME',
    'OMSKSTANDARDTIME',
    'PACIFICSASTANDARDTIME',
    'PACIFICSTANDARDTIME',
    'PACIFICSTANDARDTIME(MEXICO)',
    'PAKISTANSTANDARDTIME',
    'PARAGUAYSTANDARDTIME',
    'QYZYLORDASTANDARDTIME',
    'ROMANCESTANDARDTIME',
    'RUSSIANSTANDARDTIME',
    'RUSSIATIMEZONE10',
    'RUSSIATIMEZONE11',
    'RUSSIATIMEZONE3',
    'SAEASTERNSTANDARDTIME',
    'SAINTPIERRESTANDARDTIME',
    'SAKHALINSTANDARDTIME',
    'SAMOASTANDARDTIME',
    'SAOTOMESTANDARDTIME',
    'SAPACIFICSTANDARDTIME',
    'SARATOVSTANDARDTIME',
    'SAWESTERNSTANDARDTIME',
    'SEASIASTANDARDTIME',
    'SINGAPORESTANDARDTIME',
    'SOUTHAFRICASTANDARDTIME',
    'SOUTHSUDANSTANDARDTIME',
    'SRILANKASTANDARDTIME',
    'SUDANSTANDARDTIME',
    'SYRIASTANDARDTIME',
    'TAIPEISTANDARDTIME',
    'TASMANIASTANDARDTIME',
    'TOCANTINSSTANDARDTIME',
    'TOKYOSTANDARDTIME',
    'TOMSKSTANDARDTIME',
    'TONGASTANDARDTIME',
    'TRANSBAIKALSTANDARDTIME',
    'TURKEYSTANDARDTIME',
    'TURKSANDCAICOSSTANDARDTIME',
    'ULAANBAATARSTANDARDTIME',
    'USEASTERNSTANDARDTIME',
    'USMOUNTAINSTANDARDTIME',
    'UTC',
    'UTC+12',
    'UTC+13',
    'UTC02',
    'UTC08',
    'UTC09',
    'UTC11',
    'VENEZUELASTANDARDTIME',
    'VLADIVOSTOKSTANDARDTIME',
    'VOLGOGRADSTANDARDTIME',
    'WAUSTRALIASTANDARDTIME',
    'WCENTRALAFRICASTANDARDTIME',
    'WESTASIASTANDARDTIME',
    'WESTBANKSTANDARDTIME',
    'WESTPACIFICSTANDARDTIME',
    'WEUROPESTANDARDTIME',
    'WMONGOLIASTANDARDTIME',
    'YAKUTSKSTANDARDTIME',
    'YUKONSTANDARDTIME',
  ])
  .openapi({ description: 'Timezone specifications' })
  .openapi('TimeZone')

const AddressForOrganisationSchema = z
  .object({
    AddressType: z
      .enum(['POBOX', 'STREET', 'DELIVERY'])
      .exactOptional()
      .openapi({ description: 'define the type of address' }),
    AddressLine1: z.string().max(500).exactOptional().openapi({ description: 'max length = 500' }),
    AddressLine2: z.string().max(500).exactOptional().openapi({ description: 'max length = 500' }),
    AddressLine3: z.string().max(500).exactOptional().openapi({ description: 'max length = 500' }),
    AddressLine4: z.string().max(500).exactOptional().openapi({ description: 'max length = 500' }),
    City: z.string().max(255).exactOptional().openapi({ description: 'max length = 255' }),
    Region: z.string().max(255).exactOptional().openapi({ description: 'max length = 255' }),
    PostalCode: z.string().max(50).exactOptional().openapi({ description: 'max length = 50' }),
    Country: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ description: 'max length = 50, [A-Z], [a-z] only' }),
    AttentionTo: z.string().max(255).exactOptional().openapi({ description: 'max length = 255' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/types' },
    required: [],
  })
  .openapi('AddressForOrganisation')

const ExternalLinkSchema = z
  .object({
    LinkType: z
      .enum(['Facebook', 'GooglePlus', 'LinkedIn', 'Twitter', 'Website'])
      .exactOptional()
      .openapi({ description: 'See External link types' }),
    Url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for service e.g. http://twitter.com/xeroapi' }),
    Description: z.string().exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/organisation/' },
    required: [],
  })
  .openapi('ExternalLink')

type OrganisationType = {
  OrganisationID?: string
  APIKey?: string
  Name?: string
  LegalName?: string
  PaysTax?: boolean
  Version?:
    | 'AU'
    | 'NZ'
    | 'GLOBAL'
    | 'UK'
    | 'US'
    | 'AUONRAMP'
    | 'NZONRAMP'
    | 'GLOBALONRAMP'
    | 'UKONRAMP'
    | 'USONRAMP'
  OrganisationType?:
    | 'ACCOUNTING_PRACTICE'
    | 'COMPANY'
    | 'CHARITY'
    | 'CLUB_OR_SOCIETY'
    | 'INDIVIDUAL'
    | 'LOOK_THROUGH_COMPANY'
    | 'NOT_FOR_PROFIT'
    | 'PARTNERSHIP'
    | 'S_CORPORATION'
    | 'SELF_MANAGED_SUPERANNUATION_FUND'
    | 'SOLE_TRADER'
    | 'SUPERANNUATION_FUND'
    | 'TRUST'
    | 'PERSONAL'
    | 'SINGLEMEMBERLLC'
    | 'CCORPORATIONLLC'
    | 'PARTNERSHIPLLC'
    | 'SCORPORATIONLLC'
    | 'LLC'
    | 'NOTLLC'
    | 'UNSPECIFIED'
  BaseCurrency?: z.infer<typeof CurrencyCodeSchema>
  CountryCode?: z.infer<typeof CountryCodeSchema>
  IsDemoCompany?: boolean
  OrganisationStatus?: string
  RegistrationNumber?: string
  EmployerIdentificationNumber?: string
  TaxNumber?: string
  FinancialYearEndDay?: number
  FinancialYearEndMonth?: number
  SalesTaxBasis?:
    | 'PAYMENTS'
    | 'INVOICE'
    | 'NONE'
    | 'CASH'
    | 'ACCRUAL'
    | 'FLATRATECASH'
    | 'FLATRATEACCRUAL'
    | 'ACCRUALS'
  SalesTaxPeriod?:
    | 'MONTHLY'
    | 'QUARTERLY1'
    | 'QUARTERLY2'
    | 'QUARTERLY3'
    | 'ANNUALLY'
    | 'ONEMONTHS'
    | 'TWOMONTHS'
    | 'SIXMONTHS'
    | '1MONTHLY'
    | '2MONTHLY'
    | '3MONTHLY'
    | '6MONTHLY'
    | 'QUARTERLY'
    | 'YEARLY'
    | 'NONE'
  DefaultSalesTax?: string
  DefaultPurchasesTax?: string
  PeriodLockDate?: string
  EndOfYearLockDate?: string
  CreatedDateUTC?: string
  Timezone?: z.infer<typeof TimeZoneSchema>
  OrganisationEntityType?:
    | 'ACCOUNTING_PRACTICE'
    | 'COMPANY'
    | 'CHARITY'
    | 'CLUB_OR_SOCIETY'
    | 'INDIVIDUAL'
    | 'LOOK_THROUGH_COMPANY'
    | 'NOT_FOR_PROFIT'
    | 'PARTNERSHIP'
    | 'S_CORPORATION'
    | 'SELF_MANAGED_SUPERANNUATION_FUND'
    | 'SOLE_TRADER'
    | 'SUPERANNUATION_FUND'
    | 'TRUST'
    | 'PERSONAL'
    | 'SINGLEMEMBERLLC'
    | 'CCORPORATIONLLC'
    | 'PARTNERSHIPLLC'
    | 'SCORPORATIONLLC'
    | 'LLC'
    | 'NOTLLC'
    | 'UNSPECIFIED'
  ShortCode?: string
  Class?:
    | 'DEMO'
    | 'TRIAL'
    | 'STARTER'
    | 'STANDARD'
    | 'PREMIUM'
    | 'PREMIUM_20'
    | 'PREMIUM_50'
    | 'PREMIUM_100'
    | 'LEDGER'
    | 'GST_CASHBOOK'
    | 'NON_GST_CASHBOOK'
    | 'ULTIMATE'
    | 'LITE'
    | 'ULTIMATE_10'
    | 'ULTIMATE_20'
    | 'ULTIMATE_50'
    | 'ULTIMATE_100'
    | 'IGNITE'
    | 'GROW'
    | 'COMPREHENSIVE'
    | 'SIMPLE'
    | 'BASICLITE'
    | 'ULTRA'
  Edition?: 'BUSINESS' | 'PARTNER'
  LineOfBusiness?: string
  Addresses?: z.infer<typeof AddressForOrganisationSchema>[]
  Phones?: z.infer<typeof PhoneSchema>[]
  ExternalLinks?: z.infer<typeof ExternalLinkSchema>[]
  PaymentTerms?: z.infer<typeof PaymentTermSchema>
}

type OverpaymentType = {
  Type?: 'RECEIVE-OVERPAYMENT' | 'SPEND-OVERPAYMENT' | 'AROVERPAYMENT'
  Contact?: z.infer<typeof ContactSchema>
  Date?: string
  Status?: 'AUTHORISED' | 'PAID' | 'VOIDED'
  LineAmountTypes?: z.infer<typeof LineAmountTypesSchema>
  LineItems?: z.infer<typeof LineItemSchema>[]
  SubTotal?: number
  TotalTax?: number
  Total?: number
  UpdatedDateUTC?: string
  UpdatedDateUTCString?: string
  CurrencyCode?: z.infer<typeof CurrencyCodeSchema>
  OverpaymentID?: string
  CurrencyRate?: number
  RemainingCredit?: number
  Allocations?: z.infer<typeof AllocationSchema>[]
  AppliedAmount?: number
  Payments?: z.infer<typeof PaymentSchema>[]
  HasAttachments?: boolean
  Reference?: string
  Attachments?: z.infer<typeof AttachmentSchema>[]
}

const BatchPaymentSchema: z.ZodType<BatchPaymentType> = z
  .lazy(() =>
    z
      .object({
        Account: AccountSchema.exactOptional(),
        Reference: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({
            description:
              '(NZ Only) Optional references for the batch payment transaction. It will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement you import into Xero.',
          }),
        Particulars: z
          .string()
          .max(12)
          .exactOptional()
          .openapi({
            description:
              '(NZ Only) Optional references for the batch payment transaction. It will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement you import into Xero.',
          }),
        Code: z
          .string()
          .max(12)
          .exactOptional()
          .openapi({
            description:
              '(NZ Only) Optional references for the batch payment transaction. It will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement you import into Xero.',
          }),
        Details: z
          .string()
          .exactOptional()
          .openapi({
            description:
              '(Non-NZ Only) These details are sent to the org’s bank as a reference for the batch payment transaction. They will also show with the batch payment transaction in the bank reconciliation Find & Match screen. Depending on your individual bank, the detail may also show on the bank statement imported into Xero. Maximum field length = 18',
          }),
        Narrative: z
          .string()
          .max(18)
          .exactOptional()
          .openapi({
            description: '(UK Only) Only shows on the statement line in Xero. Max length =18',
          }),
        BatchPaymentID: z
          .uuid()
          .exactOptional()
          .openapi({
            description:
              'The Xero generated unique identifier for the bank transaction (read-only)',
            readOnly: true,
          }),
        DateString: z
          .string()
          .exactOptional()
          .openapi({ description: 'Date the payment is being made (YYYY-MM-DD) e.g. 2009-09-06' }),
        Date: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Date the payment is being made (YYYY-MM-DD) e.g. 2009-09-06',
            'x-is-msdate': true,
          }),
        Amount: z
          .float64()
          .exactOptional()
          .openapi({
            description:
              'The amount of the payment. Must be less than or equal to the outstanding amount owing on the invoice e.g. 200.00',
            'x-is-money': true,
          }),
        Payments: z
          .array(PaymentSchema)
          .exactOptional()
          .openapi({ description: 'An array of payments' }),
        Type: z
          .enum(['PAYBATCH', 'RECBATCH'])
          .exactOptional()
          .openapi({
            description:
              'PAYBATCH for bill payments or RECBATCH for sales invoice payments (read-only)',
            readOnly: true,
          }),
        Status: z
          .enum(['AUTHORISED', 'DELETED'])
          .exactOptional()
          .openapi({
            description:
              'AUTHORISED or DELETED (read-only). New batch payments will have a status of AUTHORISED. It is not possible to delete batch payments via the API.',
            readOnly: true,
          }),
        TotalAmount: z
          .float64()
          .exactOptional()
          .openapi({
            description: 'The total of the payments that make up the batch (read-only)',
            'x-is-money': true,
            readOnly: true,
          }),
        UpdatedDateUTC: z
          .string()
          .exactOptional()
          .openapi({
            description: 'UTC timestamp of last update to the payment',
            'x-is-msdate-time': true,
            example: '/Date(1573755038314)/',
            readOnly: true,
          }),
        IsReconciled: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Booelan that tells you if the batch payment has been reconciled (read-only)',
            readOnly: true,
          }),
        ValidationErrors: z
          .array(ValidationErrorSchema)
          .exactOptional()
          .openapi({ description: 'Displays array of validation error messages from the API' }),
      })
      .openapi({
        externalDocs: { url: 'http://developer.xero.com/documentation/api/BatchPayments/' },
        required: [],
      }),
  )
  .openapi('BatchPayment')

type PaymentType = {
  Invoice?: z.infer<typeof InvoiceSchema>
  CreditNote?: z.infer<typeof CreditNoteSchema>
  Prepayment?: z.infer<typeof PrepaymentSchema>
  Overpayment?: z.infer<typeof OverpaymentSchema>
  InvoiceNumber?: string
  CreditNoteNumber?: string
  BatchPayment?: z.infer<typeof BatchPaymentSchema>
  Account?: z.infer<typeof AccountSchema>
  Code?: string
  Date?: string
  CurrencyRate?: number
  Amount?: number
  BankAmount?: number
  Reference?: string
  IsReconciled?: boolean
  Status?: 'AUTHORISED' | 'DELETED'
  PaymentType?:
    | 'ACCRECPAYMENT'
    | 'ACCPAYPAYMENT'
    | 'ARCREDITPAYMENT'
    | 'APCREDITPAYMENT'
    | 'AROVERPAYMENTPAYMENT'
    | 'ARPREPAYMENTPAYMENT'
    | 'APPREPAYMENTPAYMENT'
    | 'APOVERPAYMENTPAYMENT'
  UpdatedDateUTC?: string
  UpdatedDateUTCString?: string
  PaymentID?: string
  BatchPaymentID?: string
  BankAccountNumber?: string
  Particulars?: string
  Details?: string
  HasAccount?: boolean
  HasValidationErrors?: boolean
  StatusAttributeString?: string
  ValidationErrors?: z.infer<typeof ValidationErrorSchema>[]
  Warnings?: z.infer<typeof ValidationErrorSchema>[]
}

type PrepaymentType = {
  Type?: 'RECEIVE-PREPAYMENT' | 'SPEND-PREPAYMENT' | 'ARPREPAYMENT' | 'APPREPAYMENT'
  Contact?: z.infer<typeof ContactSchema>
  Date?: string
  Status?: 'AUTHORISED' | 'PAID' | 'VOIDED'
  LineAmountTypes?: z.infer<typeof LineAmountTypesSchema>
  LineItems?: z.infer<typeof LineItemSchema>[]
  SubTotal?: number
  TotalTax?: number
  Total?: number
  Reference?: string
  InvoiceNumber?: string
  UpdatedDateUTC?: string
  UpdatedDateUTCString?: string
  CurrencyCode?: z.infer<typeof CurrencyCodeSchema>
  PrepaymentID?: string
  BrandingThemeID?: string
  CurrencyRate?: number
  RemainingCredit?: number
  Allocations?: z.infer<typeof AllocationSchema>[]
  Payments?: z.infer<typeof PaymentSchema>[]
  AppliedAmount?: number
  HasAttachments?: boolean
  Attachments?: z.infer<typeof AttachmentSchema>[]
}

const AccountsSchema = z
  .object({ Accounts: z.array(AccountSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'accounts', required: [] })
  .openapi('Accounts')

const AttachmentsSchema = z
  .object({ Attachments: z.array(AttachmentSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'attachments', required: [] })
  .openapi('Attachments')

const PaginationSchema = z
  .object({
    page: z.int().exactOptional(),
    pageSize: z.int().exactOptional(),
    pageCount: z.int().exactOptional(),
    itemCount: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const BankTransactionSchema = z
  .object({
    Type: z
      .enum([
        'RECEIVE',
        'RECEIVE-OVERPAYMENT',
        'RECEIVE-PREPAYMENT',
        'SPEND',
        'SPEND-OVERPAYMENT',
        'SPEND-PREPAYMENT',
        'RECEIVE-TRANSFER',
        'SPEND-TRANSFER',
      ])
      .openapi({ description: 'See Bank Transaction Types' }),
    Contact: ContactSchema.exactOptional(),
    LineItems: z.array(LineItemSchema).openapi({ description: 'See LineItems' }),
    BankAccount: AccountSchema,
    IsReconciled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean to show if transaction is reconciled' }),
    Date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date of transaction – YYYY-MM-DD', 'x-is-msdate': true }),
    Reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reference for the transaction. Only supported for SPEND and RECEIVE transactions.',
      }),
    CurrencyCode: CurrencyCodeSchema.exactOptional(),
    CurrencyRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Exchange rate to base currency when money is spent or received. e.g.0.7500 Only used for bank transactions in non base currency. If this isn’t specified for non base currency accounts then either the user-defined rate (preference) or the XE.com day rate will be used. Setting currency is only supported on overpayments.',
        'x-is-money': true,
      }),
    Url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL link to a source document – shown as “Go to App Name”' }),
    Status: z
      .enum(['AUTHORISED', 'DELETED', 'VOIDED'])
      .exactOptional()
      .openapi({ description: 'See Bank Transaction Status Codes' }),
    LineAmountTypes: LineAmountTypesSchema.exactOptional(),
    SubTotal: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total of bank transaction excluding taxes', 'x-is-money': true }),
    TotalTax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total tax on bank transaction', 'x-is-money': true }),
    Total: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total of bank transaction tax inclusive', 'x-is-money': true }),
    BankTransactionID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero generated unique identifier for bank transaction',
        example: '00000000-0000-0000-0000-000000000000',
      }),
    PrepaymentID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Xero generated unique identifier for a Prepayment. This will be returned on BankTransactions with a Type of SPEND-PREPAYMENT or RECEIVE-PREPAYMENT',
        readOnly: true,
        example: '00000000-0000-0000-0000-000000000000',
      }),
    OverpaymentID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Xero generated unique identifier for an Overpayment. This will be returned on BankTransactions with a Type of SPEND-OVERPAYMENT or RECEIVE-OVERPAYMENT',
        readOnly: true,
        example: '00000000-0000-0000-0000-000000000000',
      }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified date UTC format',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    HasAttachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean to indicate if a bank transaction has an attachment',
        readOnly: true,
        example: 'false',
      }),
    StatusAttributeString: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string to indicate if a invoice status' }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/banktransactions/' },
    required: ['Type', 'LineItems', 'BankAccount'],
  })
  .openapi('BankTransaction')

const BankTransactionsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    BankTransactions: z.array(BankTransactionSchema).exactOptional(),
  })
  .openapi({ 'x-objectArrayKey': 'bank_transactions', required: [] })
  .openapi('BankTransactions')

const TrackingReferenceSchema = z
  .object({
    TrackingCategoryID: z
      .uuid()
      .openapi({ description: 'The Xero identifier for a tracking category' }),
    TrackingOptionID: z
      .uuid()
      .openapi({ description: 'The Xero identifier for a tracking category option' }),
    Name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The name of the tracking category', readOnly: true }),
    Option: z
      .string()
      .exactOptional()
      .openapi({ description: 'See Tracking Options', readOnly: true }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/tracking-categories/' },
    required: ['TrackingCategoryID', 'TrackingOptionID'],
  })
  .openapi('TrackingReference')

const BankTransferSchema = z
  .object({
    FromBankAccount: AccountSchema,
    ToBankAccount: AccountSchema,
    Amount: z.float64().openapi({ description: 'amount of the transaction', 'x-is-money': true }),
    Date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of the Transfer YYYY-MM-DD', 'x-is-msdate': true }),
    BankTransferID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The identifier of the Bank Transfer', readOnly: true }),
    CurrencyRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The currency rate', readOnly: true, 'x-is-money': true }),
    FromBankTransactionID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Bank Transaction ID for the source account', readOnly: true }),
    ToBankTransactionID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The Bank Transaction ID for the destination account',
        readOnly: true,
      }),
    FromIsReconciled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'The Bank Transaction boolean to show if it is reconciled for the source account',
        example: 'false',
      }),
    ToIsReconciled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'The Bank Transaction boolean to show if it is reconciled for the destination account',
        example: 'false',
      }),
    Reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reference for the transactions.' }),
    HasAttachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean to indicate if a Bank Transfer has an attachment',
        readOnly: true,
        example: 'false',
      }),
    CreatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UTC timestamp of creation date of bank transfer',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    Status: z
      .enum(['AUTHORISED', 'DELETED'])
      .exactOptional()
      .openapi({
        description:
          'AUTHORISED or DELETED (read-only). New bank transfers will have a status of AUTHORISED.',
        readOnly: true,
      }),
    FromTracking: z
      .array(TrackingReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional Tracking Category for the source account – see Tracking. A bank transfer can have a maximum of 2 tracking categories per account.',
      }),
    ToTracking: z
      .array(TrackingReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional Tracking Category for the destination account – see Tracking. A bank transfer can have a maximum of 2 tracking categories per account.',
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/bank-transfers/' },
    required: ['FromBankAccount', 'ToBankAccount', 'Amount'],
  })
  .openapi('BankTransfer')

const BankTransfersSchema = z
  .object({ BankTransfers: z.array(BankTransferSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'bank_transfers', required: [] })
  .openapi('BankTransfers')

const BankTransferDeleteSchema = z
  .object({
    BankTransferID: z.uuid().openapi({ description: 'The Xero identifier for a bank transfer' }),
    Status: z
      .string()
      .default('DELETED')
      .openapi({ description: 'The status of the bank transfer.' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/bank-transfers/' },
    required: ['Status', 'BankTransferID'],
  })
  .openapi('BankTransferDelete')

const BankTransferDeleteByUrlParamSchema = z
  .object({
    Status: z
      .string()
      .default('DELETED')
      .openapi({ description: 'The status of the bank transfer.' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/bank-transfers/' },
    required: ['Status'],
  })
  .openapi('BankTransferDeleteByUrlParam')

const BankTransfersDeleteSchema = z
  .object({ BankTransfers: z.array(BankTransferDeleteSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'bank_transfers', required: [] })
  .openapi('BankTransfersDelete')

const BatchPaymentsSchema = z
  .object({ BatchPayments: z.array(BatchPaymentSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'batch_payments', required: [] })
  .openapi('BatchPayments')

const BatchPaymentDeleteSchema = z
  .object({
    BatchPaymentID: z
      .uuid()
      .openapi({
        description: 'The Xero generated unique identifier for the bank transaction (read-only)',
      }),
    Status: z
      .string()
      .default('DELETED')
      .openapi({ description: 'The status of the batch payment.' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/accounting/batchpayments' },
    required: ['Status', 'BatchPaymentID'],
  })
  .openapi('BatchPaymentDelete')

const BatchPaymentDeleteByUrlParamSchema = z
  .object({
    Status: z
      .string()
      .default('DELETED')
      .openapi({ description: 'The status of the batch payment.' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/accounting/batchpayments' },
    required: ['Status'],
  })
  .openapi('BatchPaymentDeleteByUrlParam')

const BrandingThemesSchema = z
  .object({ BrandingThemes: z.array(BrandingThemeSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'branding_themes', required: [] })
  .openapi('BrandingThemes')

const PaymentServiceSchema = z
  .object({
    PaymentServiceID: z.uuid().exactOptional().openapi({ description: 'Xero identifier' }),
    PaymentServiceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of payment service' }),
    PaymentServiceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The custom payment URL' }),
    PayNowText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text displayed on the Pay Now button in Xero Online Invoicing. If this is not set it will default to Pay by credit card',
      }),
    PaymentServiceType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This will always be CUSTOM for payment services created via the API.',
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/branding-themes/' },
    required: [],
  })
  .openapi('PaymentService')

const PaymentServicesSchema = z
  .object({ PaymentServices: z.array(PaymentServiceSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'payment_services', required: [] })
  .openapi('PaymentServices')

const ContactsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    Contacts: z.array(ContactSchema).exactOptional(),
  })
  .openapi({ 'x-objectArrayKey': 'contacts', required: [] })
  .openapi('Contacts')

const BudgetBalanceSchema = z
  .object({
    Period: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Period the amount applies to (e.g. “2019-08”)',
        'x-is-msdate': true,
      }),
    Amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'LineItem Quantity', 'x-is-money': true }),
    UnitAmount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Budgeted amount', 'x-is-money': true }),
    Notes: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Any footnotes associated with this balance' }),
  })
  .openapi({ required: [] })
  .openapi('BudgetBalance')

const BudgetLineSchema = z
  .object({
    AccountID: z.uuid().exactOptional().openapi({ description: 'See Accounts' }),
    AccountCode: z.string().exactOptional().openapi({ description: 'See Accounts', example: 90 }),
    BudgetBalances: z.array(BudgetBalanceSchema).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/budgets/' },
    required: [],
  })
  .openapi('BudgetLine')

const TrackingOptionSchema = z
  .object({
    TrackingOptionID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The Xero identifier for a tracking option e.g. ae777a87-5ef3-4fa0-a4f0-d10e1f13073a',
      }),
    Name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description: 'The name of the tracking option e.g. Marketing, East (max length = 100)',
      }),
    Status: z
      .enum(['ACTIVE', 'ARCHIVED', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'The status of a tracking option' }),
    TrackingCategoryID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Filter by a tracking category e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9',
      }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/tracking-categories/' },
    required: [],
  })
  .openapi('TrackingOption')

const TrackingCategorySchema = z
  .object({
    TrackingCategoryID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The Xero identifier for a tracking category e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9',
      }),
    TrackingOptionID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The Xero identifier for a tracking option e.g. dc54c220-0140-495a-b925-3246adc0075f',
      }),
    Name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description: 'The name of the tracking category e.g. Department, Region (max length = 100)',
      }),
    Option: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description: 'The option name of the tracking option e.g. East, West (max length = 100)',
      }),
    Status: z
      .enum(['ACTIVE', 'ARCHIVED', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'The status of a tracking category' }),
    Options: z
      .array(TrackingOptionSchema)
      .exactOptional()
      .openapi({ description: 'See Tracking Options' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/tracking-categories/' },
    required: [],
  })
  .openapi('TrackingCategory')

const BudgetSchema = z
  .object({
    BudgetID: z.uuid().exactOptional().openapi({ description: 'Xero identifier' }),
    Type: z
      .enum(['OVERALL', 'TRACKING'])
      .exactOptional()
      .openapi({ description: 'Type of Budget. OVERALL or TRACKING' }),
    Description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'The Budget description' }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UTC timestamp of last update to budget',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    BudgetLines: z.array(BudgetLineSchema).exactOptional(),
    Tracking: z.array(TrackingCategorySchema).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/budgets/' },
    required: [],
  })
  .openapi('Budget')

const BudgetsSchema = z
  .object({ Budgets: z.array(BudgetSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'budgets', required: [] })
  .openapi('Budgets')

const CISSettingSchema = z
  .object({
    CISEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean that describes if the contact is a CIS Subcontractor' }),
    Rate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'CIS Deduction rate for the contact if he is a subcontractor. If the contact is not CISEnabled, then the rate is not returned',
        readOnly: true,
        'x-is-money': true,
      }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/contacts/' },
    required: [],
  })
  .openapi('CISSetting')

const CISSettingsSchema = z
  .object({ CISSettings: z.array(CISSettingSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'cis_settings', required: [] })
  .openapi('CISSettings')

const CISOrgSettingSchema = z
  .object({
    CISContractorEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'true or false - Boolean that describes if the organisation is a CIS Contractor',
      }),
    CISSubContractorEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'true or false - Boolean that describes if the organisation is a CIS SubContractor',
      }),
    Rate: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'CIS Deduction rate for the organisation',
        readOnly: true,
        'x-is-money': true,
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/organisation' },
    required: [],
  })
  .openapi('CISOrgSetting')

const CISOrgSettingsSchema = z
  .object({ CISSettings: z.array(CISOrgSettingSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'cis_settings', required: [] })
  .openapi('CISOrgSettings')

const ContactGroupsSchema = z
  .object({ ContactGroups: z.array(ContactGroupSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'contact_groups', required: [] })
  .openapi('ContactGroups')

const RequestEmptySchema = z
  .object({
    Status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Need at least one field to create an empty JSON payload' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/invoice/' },
    required: [],
  })
  .openapi('RequestEmpty')

const CreditNotesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    CreditNotes: z.array(CreditNoteSchema).exactOptional(),
  })
  .openapi({ 'x-objectArrayKey': 'credit_notes', required: [] })
  .openapi('CreditNotes')

const AllocationsSchema = z
  .object({ Allocations: z.array(AllocationSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'allocations', required: [] })
  .openapi('Allocations')

const CurrencySchema = z
  .object({
    Code: CurrencyCodeSchema.exactOptional(),
    Description: z.string().exactOptional().openapi({ description: 'Name of Currency' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/currencies/' },
    required: [],
  })
  .openapi('Currency')

const CurrenciesSchema = z
  .object({ Currencies: z.array(CurrencySchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'currencies', required: [] })
  .openapi('Currencies')

const EmployeeSchema = z
  .object({
    EmployeeID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The Xero identifier for an employee e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9',
      }),
    Status: z
      .enum(['ACTIVE', 'ARCHIVED', 'GDPRREQUEST', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'Current status of an employee – see contact status types' }),
    FirstName: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'First name of an employee (max length = 255)' }),
    LastName: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Last name of an employee (max length = 255)' }),
    ExternalLink: ExternalLinkSchema.exactOptional(),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({ 'x-is-msdate-time': true, example: '/Date(1573755038314)/', readOnly: true }),
    StatusAttributeString: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string to indicate if a invoice status', example: 'ERROR' }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/employees/' },
    required: [],
  })
  .openapi('Employee')

const EmployeesSchema = z
  .object({ Employees: z.array(EmployeeSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'employees', required: [] })
  .openapi('Employees')

const UserSchema = z
  .object({
    UserID: z.uuid().exactOptional().openapi({ description: 'Xero identifier' }),
    EmailAddress: z.string().exactOptional().openapi({ description: 'Email address of user' }),
    FirstName: z.string().exactOptional().openapi({ description: 'First name of user' }),
    LastName: z.string().exactOptional().openapi({ description: 'Last name of user' }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of last change to user',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    IsSubscriber: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean to indicate if user is the subscriber' }),
    OrganisationRole: z
      .enum([
        'READONLY',
        'INVOICEONLY',
        'STANDARD',
        'FINANCIALADVISER',
        'MANAGEDCLIENT',
        'CASHBOOKCLIENT',
        'UNKNOWN',
        'REMOVED',
      ])
      .exactOptional()
      .openapi({
        description:
          'User role that defines permissions in Xero and via API (READONLY, INVOICEONLY, STANDARD, FINANCIALADVISER, etc)',
      }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/users/' },
    required: [],
  })
  .openapi('User')

const ReceiptSchema = z
  .object({
    Date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date of receipt – YYYY-MM-DD', 'x-is-msdate': true }),
    Contact: ContactSchema.exactOptional(),
    LineItems: z.array(LineItemSchema).exactOptional(),
    User: UserSchema.exactOptional(),
    Reference: z.string().exactOptional().openapi({ description: 'Additional reference number' }),
    LineAmountTypes: LineAmountTypesSchema.exactOptional(),
    SubTotal: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total of receipt excluding taxes', 'x-is-money': true }),
    TotalTax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total tax on receipt', 'x-is-money': true }),
    Total: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total of receipt tax inclusive (i.e. SubTotal + TotalTax)',
        'x-is-money': true,
      }),
    ReceiptID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero generated unique identifier for receipt' }),
    Status: z
      .enum(['DRAFT', 'SUBMITTED', 'AUTHORISED', 'DECLINED', 'VOIDED'])
      .exactOptional()
      .openapi({ description: 'Current status of receipt – see status types' }),
    ReceiptNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Xero generated sequence number for receipt in current claim for a given user',
        readOnly: true,
      }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified date UTC format',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    HasAttachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'boolean to indicate if a receipt has an attachment',
        readOnly: true,
        example: 'false',
      }),
    Url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL link to a source document – shown as “Go to [appName]” in the Xero app',
        readOnly: true,
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    Attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of attachments from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/receipts/' },
    required: [],
  })
  .openapi('Receipt')

const ExpenseClaimSchema = z
  .object({
    ExpenseClaimID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero generated unique identifier for an expense claim' }),
    Status: z
      .enum(['SUBMITTED', 'AUTHORISED', 'PAID', 'VOIDED', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'Current status of an expense claim – see status types' }),
    Payments: z.array(PaymentSchema).exactOptional().openapi({ description: 'See Payments' }),
    User: UserSchema.exactOptional(),
    Receipts: z.array(ReceiptSchema).exactOptional(),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified date UTC format',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    Total: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total of an expense claim being paid',
        readOnly: true,
        'x-is-money': true,
      }),
    AmountDue: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The amount due to be paid for an expense claim',
        readOnly: true,
        'x-is-money': true,
      }),
    AmountPaid: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The amount still to pay for an expense claim',
        readOnly: true,
        'x-is-money': true,
      }),
    PaymentDueDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date when the expense claim is due to be paid YYYY-MM-DD',
        readOnly: true,
        'x-is-msdate': true,
      }),
    ReportingDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date the expense claim will be reported in Xero YYYY-MM-DD',
        readOnly: true,
        'x-is-msdate': true,
      }),
    ReceiptID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The Xero identifier for the Receipt e.g. e59a2c7f-1306-4078-a0f3-73537afcbba9',
      }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/expense-claims/' },
    required: [],
  })
  .openapi('ExpenseClaim')

const ExpenseClaimsSchema = z
  .object({ ExpenseClaims: z.array(ExpenseClaimSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'expense_claims', required: [] })
  .openapi('ExpenseClaims')

const HistoryRecordSchema = z
  .object({
    Details: z.string().exactOptional().openapi({ description: 'details' }),
    Changes: z.string().exactOptional().openapi({ description: 'Name of branding theme' }),
    User: z.string().exactOptional().openapi({ description: 'has a value of 0' }),
    DateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'UTC timestamp of creation date of branding theme',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/history-and-notes' },
    required: [],
  })
  .openapi('HistoryRecord')

const HistoryRecordsSchema = z
  .object({ HistoryRecords: z.array(HistoryRecordSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'history_records', required: [] })
  .openapi('HistoryRecords')

const InvoicesSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    Invoices: z.array(InvoiceSchema).exactOptional(),
  })
  .openapi({ 'x-objectArrayKey': 'invoices', required: [] })
  .openapi('Invoices')

const OnlineInvoiceSchema = z
  .object({
    OnlineInvoiceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'the URL to an online invoice' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/invoices/' },
    required: [],
  })
  .openapi('OnlineInvoice')

const OnlineInvoicesSchema = z
  .object({ OnlineInvoices: z.array(OnlineInvoiceSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'online_invoices', required: [] })
  .openapi('OnlineInvoices')

const InvoiceReminderSchema = z
  .object({
    Enabled: z.boolean().exactOptional().openapi({ description: 'setting for on or off' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/invoice-reminders/' },
    required: [],
  })
  .openapi('InvoiceReminder')

const InvoiceRemindersSchema = z
  .object({ InvoiceReminders: z.array(InvoiceReminderSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'invoice_reminders', required: [] })
  .openapi('InvoiceReminders')

const PurchaseSchema = z
  .object({
    UnitPrice: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Unit Price of the item. By default UnitPrice is rounded to two decimal places. You can use 4 decimal places by adding the unitdp=4 querystring parameter to your request.',
        'x-is-money': true,
      }),
    AccountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Default account code to be used for purchased/sale. Not applicable to the purchase details of tracked items',
      }),
    COGSAccountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cost of goods sold account. Only applicable to the purchase details of tracked items.',
      }),
    TaxType: z.string().exactOptional().openapi({ description: 'The tax type from TaxRates' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/items/' },
    required: [],
  })
  .openapi('Purchase')

const ItemSchema = z
  .object({
    Code: z.string().max(30).openapi({ description: 'User defined item code (max length = 30)' }),
    InventoryAssetAccountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The inventory asset account for the item. The account must be of type INVENTORY. The  COGSAccountCode in PurchaseDetails is also required to create a tracked item',
      }),
    Name: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({ description: 'The name of the item (max length = 50)' }),
    IsSold: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value, defaults to true. When IsSold is true the item will be available on sales transactions in the Xero UI. If IsSold is updated to false then Description and SalesDetails values will be nulled.',
      }),
    IsPurchased: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value, defaults to true. When IsPurchased is true the item is available for purchase transactions in the Xero UI. If IsPurchased is updated to false then PurchaseDescription and PurchaseDetails values will be nulled.',
      }),
    Description: z
      .string()
      .max(4000)
      .exactOptional()
      .openapi({ description: 'The sales description of the item (max length = 4000)' }),
    PurchaseDescription: z
      .string()
      .max(4000)
      .exactOptional()
      .openapi({ description: 'The purchase description of the item (max length = 4000)' }),
    PurchaseDetails: PurchaseSchema.exactOptional(),
    SalesDetails: PurchaseSchema.exactOptional(),
    IsTrackedAsInventory: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True for items that are tracked as inventory. An item will be tracked as inventory if the InventoryAssetAccountCode and COGSAccountCode are set.',
      }),
    TotalCostPool: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The value of the item on hand. Calculated using average cost accounting.',
        'x-is-money': true,
      }),
    QuantityOnHand: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of the item on hand. This will be 0 if `QuantityOnBackOrder` is greater than 0.',
        'x-is-money': true,
      }),
    QuantityAvailable: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of the item available. This is equal to `QuantityOnHand` - `QuantityOnBackOrder`. This value will be negative if `QuantityOnBackOrder` is greater than 0.',
        readOnly: true,
      }),
    QuantityOnBackOrder: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of the item on backorder. This will be 0 if `QuantityOnHand` is greater than 0.',
        readOnly: true,
      }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified date in UTC format',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    ItemID: z.uuid().exactOptional().openapi({ description: 'The Xero identifier for an Item' }),
    StatusAttributeString: z.string().exactOptional().openapi({ description: 'Status of object' }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/items/' },
    required: ['Code'],
  })
  .openapi('Item')

const ItemsSchema = z
  .object({ Items: z.array(ItemSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'items', required: [] })
  .openapi('Items')

const JournalLineSchema = z
  .object({
    JournalLineID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Xero identifier for Journal',
        example: '7be9db36-3598-4755-ba5c-c2dbc8c4a7a2',
      }),
    AccountID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'See Accounts', example: 'ceef66a5-a545-413b-9312-78a53caadbc4' }),
    AccountCode: z.string().exactOptional().openapi({ description: 'See Accounts', example: 90 }),
    AccountType: AccountTypeSchema.exactOptional(),
    AccountName: z
      .string()
      .exactOptional()
      .openapi({ description: 'See AccountCodes', example: 'Checking Account' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description from the source transaction line item. Only returned if populated.',
        example: 'My business checking account',
      }),
    NetAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Net amount of journal line. This will be a positive value for a debit and negative for a credit',
        'x-is-money': true,
        example: 4130.98,
      }),
    GrossAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Gross amount of journal line (NetAmount + TaxAmount).',
        'x-is-money': true,
        example: 4130.98,
      }),
    TaxAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total tax on a journal line',
        'x-is-money': true,
        readOnly: true,
        example: 0,
      }),
    TaxType: z.string().exactOptional().openapi({ description: 'The tax type from taxRates' }),
    TaxName: z
      .string()
      .exactOptional()
      .openapi({ description: 'see TaxRates', example: 'Tax Exempt' }),
    TrackingCategories: z
      .array(TrackingCategorySchema)
      .exactOptional()
      .openapi({
        description:
          'Optional Tracking Category – see Tracking. Any JournalLine can have a maximum of 2 <TrackingCategory> elements.',
      }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/journals#JournalLines' },
    required: [],
  })
  .openapi('JournalLine')

const JournalSchema = z
  .object({
    JournalID: z.uuid().exactOptional().openapi({ description: 'Xero identifier' }),
    JournalDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date the journal was posted', 'x-is-msdate': true }),
    JournalNumber: z
      .int()
      .exactOptional()
      .openapi({ description: 'Xero generated journal number' }),
    CreatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Created date UTC format',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    Reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'reference field for additional indetifying information' }),
    SourceID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The identifier for the source transaction (e.g. InvoiceID)' }),
    SourceType: z
      .enum([
        'ACCREC',
        'ACCPAY',
        'ACCRECCREDIT',
        'ACCPAYCREDIT',
        'ACCRECPAYMENT',
        'ACCPAYPAYMENT',
        'ARCREDITPAYMENT',
        'APCREDITPAYMENT',
        'CASHREC',
        'CASHPAID',
        'TRANSFER',
        'ARPREPAYMENT',
        'APPREPAYMENT',
        'AROVERPAYMENT',
        'APOVERPAYMENT',
        'EXPCLAIM',
        'EXPPAYMENT',
        'MANJOURNAL',
        'PAYSLIP',
        'WAGEPAYABLE',
        'INTEGRATEDPAYROLLPE',
        'INTEGRATEDPAYROLLPT',
        'EXTERNALSPENDMONEY',
        'INTEGRATEDPAYROLLPTPAYMENT',
        'INTEGRATEDPAYROLLCN',
      ])
      .exactOptional()
      .openapi({
        description: 'The journal source type. The type of transaction that created the journal',
      }),
    JournalLines: z
      .array(JournalLineSchema)
      .exactOptional()
      .openapi({ description: 'See JournalLines' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/journals/' },
    required: [],
  })
  .openapi('Journal')

const JournalsSchema = z
  .object({
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    Journals: z.array(JournalSchema).exactOptional(),
  })
  .openapi({ 'x-objectArrayKey': 'journals', required: [] })
  .openapi('Journals')

const LinkedTransactionSchema = z
  .object({
    SourceTransactionID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Filter by the SourceTransactionID. Get all the linked transactions created from a particular ACCPAY invoice',
      }),
    SourceLineItemID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The line item identifier from the source transaction.' }),
    ContactID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.',
      }),
    TargetTransactionID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Filter by the TargetTransactionID. Get all the linked transactions  allocated to a particular ACCREC invoice',
      }),
    TargetLineItemID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The line item identifier from the target transaction. It is possible  to link multiple billable expenses to the same TargetLineItemID.',
      }),
    LinkedTransactionID: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The Xero identifier for an Linked Transaction e.g./LinkedTransactions/297c2dc5-cc47-4afd-8ec8-74990b8761e9',
      }),
    Status: z
      .enum(['APPROVED', 'DRAFT', 'ONDRAFT', 'BILLED', 'VOIDED'])
      .exactOptional()
      .openapi({
        description:
          'Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.',
      }),
    Type: z
      .literal('BILLABLEEXPENSE')
      .exactOptional()
      .openapi({
        description: 'This will always be BILLABLEEXPENSE. More types may be added in future.',
      }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last modified date in UTC format',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    SourceTransactionTypeCode: z
      .enum(['ACCPAY', 'SPEND'])
      .exactOptional()
      .openapi({
        description:
          'The Type of the source tranasction. This will be ACCPAY if the linked transaction was created from an invoice and SPEND if it was created from a bank transaction.',
      }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/linked-transactions/' },
    required: [],
  })
  .openapi('LinkedTransaction')

const LinkedTransactionsSchema = z
  .object({ LinkedTransactions: z.array(LinkedTransactionSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'linked_transactions', required: [] })
  .openapi('LinkedTransactions')

const ManualJournalLineSchema = z
  .object({
    LineAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'total for line. Debits are positive, credits are negative value',
        'x-is-money': true,
        example: -2569,
      }),
    AccountCode: z.string().exactOptional().openapi({ description: 'See Accounts', example: 720 }),
    AccountID: z.uuid().exactOptional().openapi({ description: 'See Accounts' }),
    Description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description for journal line',
        example: 'Coded incorrectly Office Equipment should be Computer Equipment',
      }),
    TaxType: z.string().exactOptional().openapi({ description: 'The tax type from TaxRates' }),
    Tracking: z
      .array(TrackingCategorySchema)
      .exactOptional()
      .openapi({
        description:
          'Optional Tracking Category – see Tracking. Any JournalLine can have a maximum of 2 <TrackingCategory> elements.',
      }),
    TaxAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The calculated tax amount based on the TaxType and LineAmount',
        'x-is-money': true,
        example: 0,
      }),
    IsBlank: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'is the line blank', example: false }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/manual-journals/' },
    required: [],
  })
  .openapi('ManualJournalLine')

const ManualJournalSchema = z
  .object({
    Narration: z.string().openapi({ description: 'Description of journal being posted' }),
    JournalLines: z
      .array(ManualJournalLineSchema)
      .exactOptional()
      .openapi({ description: 'See JournalLines' }),
    Date: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date journal was posted – YYYY-MM-DD', 'x-is-msdate': true }),
    LineAmountTypes: LineAmountTypesSchema.exactOptional(),
    Status: z
      .enum(['DRAFT', 'POSTED', 'DELETED', 'VOIDED', 'ARCHIVED'])
      .exactOptional()
      .openapi({ description: 'See Manual Journal Status Codes' }),
    Url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Url link to a source document – shown as “Go to [appName]” in the Xero app',
      }),
    ShowOnCashBasisReports: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean – default is true if not specified' }),
    HasAttachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean to indicate if a manual journal has an attachment',
        readOnly: true,
        example: 'false',
      }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified date UTC format',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    ManualJournalID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The Xero identifier for a Manual Journal' }),
    StatusAttributeString: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string to indicate if a invoice status', example: 'ERROR' }),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
    Attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of attachments from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/manual-journals/' },
    required: ['Narration'],
  })
  .openapi('ManualJournal')

const ManualJournalsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    ManualJournals: z.array(ManualJournalSchema).exactOptional(),
  })
  .openapi({ 'x-objectArrayKey': 'manual_journals', required: [] })
  .openapi('ManualJournals')

const ActionSchema = z
  .object({
    Name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the actions for this organisation',
        example: 'UseMulticurrency',
      }),
    Status: z
      .enum(['ALLOWED', 'NOT-ALLOWED'])
      .exactOptional()
      .openapi({ description: 'Status of the action for this organisation' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/organisation/' },
    required: [],
  })
  .openapi('Action')

const ActionsSchema = z
  .object({ Actions: z.array(ActionSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'actions', required: [] })
  .openapi('Actions')

const OrganisationSchema: z.ZodType<OrganisationType> = z
  .lazy(() =>
    z
      .object({
        OrganisationID: z
          .uuid()
          .exactOptional()
          .openapi({
            description: 'Unique Xero identifier',
            example: '8be9db36-3598-4755-ba5c-c2dbc8c4a7a2',
          }),
        APIKey: z
          .string()
          .exactOptional()
          .openapi({ description: 'Display a unique key used for Xero-to-Xero transactions' }),
        Name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Display name of organisation shown in Xero' }),
        LegalName: z
          .string()
          .exactOptional()
          .openapi({ description: 'Organisation name shown on Reports' }),
        PaysTax: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Boolean to describe if organisation is registered with a local tax authority i.e. true, false',
          }),
        Version: z
          .enum([
            'AU',
            'NZ',
            'GLOBAL',
            'UK',
            'US',
            'AUONRAMP',
            'NZONRAMP',
            'GLOBALONRAMP',
            'UKONRAMP',
            'USONRAMP',
          ])
          .exactOptional()
          .openapi({ description: 'See Version Types' }),
        OrganisationType: z
          .enum([
            'ACCOUNTING_PRACTICE',
            'COMPANY',
            'CHARITY',
            'CLUB_OR_SOCIETY',
            'INDIVIDUAL',
            'LOOK_THROUGH_COMPANY',
            'NOT_FOR_PROFIT',
            'PARTNERSHIP',
            'S_CORPORATION',
            'SELF_MANAGED_SUPERANNUATION_FUND',
            'SOLE_TRADER',
            'SUPERANNUATION_FUND',
            'TRUST',
            'PERSONAL',
            'SINGLEMEMBERLLC',
            'CCORPORATIONLLC',
            'PARTNERSHIPLLC',
            'SCORPORATIONLLC',
            'LLC',
            'NOTLLC',
            'UNSPECIFIED',
          ])
          .exactOptional()
          .openapi({ description: 'Organisation Type' }),
        BaseCurrency: CurrencyCodeSchema.exactOptional(),
        CountryCode: CountryCodeSchema.exactOptional(),
        IsDemoCompany: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Boolean to describe if organisation is a demo company.' }),
        OrganisationStatus: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Will be set to ACTIVE if you can connect to organisation via the Xero API',
          }),
        RegistrationNumber: z
          .string()
          .exactOptional()
          .openapi({ description: 'Shows for New Zealand, Australian and UK organisations' }),
        EmployerIdentificationNumber: z
          .string()
          .exactOptional()
          .openapi({ description: 'Shown if set. US Only.' }),
        TaxNumber: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Shown if set. Displays in the Xero UI as Tax File Number (AU), GST Number (NZ), VAT Number (UK) and Tax ID Number (US & Global).',
          }),
        FinancialYearEndDay: z
          .int()
          .exactOptional()
          .openapi({ description: 'Calendar day e.g. 0-31' }),
        FinancialYearEndMonth: z
          .int()
          .exactOptional()
          .openapi({ description: 'Calendar Month e.g. 1-12' }),
        SalesTaxBasis: z
          .enum([
            'PAYMENTS',
            'INVOICE',
            'NONE',
            'CASH',
            'ACCRUAL',
            'FLATRATECASH',
            'FLATRATEACCRUAL',
            'ACCRUALS',
          ])
          .exactOptional()
          .openapi({
            description: 'The accounting basis used for tax returns. See Sales Tax Basis',
          }),
        SalesTaxPeriod: z
          .enum([
            'MONTHLY',
            'QUARTERLY1',
            'QUARTERLY2',
            'QUARTERLY3',
            'ANNUALLY',
            'ONEMONTHS',
            'TWOMONTHS',
            'SIXMONTHS',
            '1MONTHLY',
            '2MONTHLY',
            '3MONTHLY',
            '6MONTHLY',
            'QUARTERLY',
            'YEARLY',
            'NONE',
          ])
          .exactOptional()
          .openapi({
            description: 'The frequency with which tax returns are processed. See Sales Tax Period',
          }),
        DefaultSalesTax: z
          .string()
          .exactOptional()
          .openapi({ description: 'The default for LineAmountTypes on sales transactions' }),
        DefaultPurchasesTax: z
          .string()
          .exactOptional()
          .openapi({ description: 'The default for LineAmountTypes on purchase transactions' }),
        PeriodLockDate: z
          .string()
          .exactOptional()
          .openapi({ description: 'Shown if set. See lock dates', 'x-is-msdate': true }),
        EndOfYearLockDate: z
          .string()
          .exactOptional()
          .openapi({ description: 'Shown if set. See lock dates', 'x-is-msdate': true }),
        CreatedDateUTC: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Timestamp when the organisation was created in Xero',
            'x-is-msdate-time': true,
            example: '/Date(1573755038314)/',
            readOnly: true,
          }),
        Timezone: TimeZoneSchema.exactOptional(),
        OrganisationEntityType: z
          .enum([
            'ACCOUNTING_PRACTICE',
            'COMPANY',
            'CHARITY',
            'CLUB_OR_SOCIETY',
            'INDIVIDUAL',
            'LOOK_THROUGH_COMPANY',
            'NOT_FOR_PROFIT',
            'PARTNERSHIP',
            'S_CORPORATION',
            'SELF_MANAGED_SUPERANNUATION_FUND',
            'SOLE_TRADER',
            'SUPERANNUATION_FUND',
            'TRUST',
            'PERSONAL',
            'SINGLEMEMBERLLC',
            'CCORPORATIONLLC',
            'PARTNERSHIPLLC',
            'SCORPORATIONLLC',
            'LLC',
            'NOTLLC',
            'UNSPECIFIED',
          ])
          .exactOptional()
          .openapi({ description: 'Organisation Entity Type' }),
        ShortCode: z
          .string()
          .exactOptional()
          .openapi({ description: 'A unique identifier for the organisation. Potential uses.' }),
        Class: z
          .enum([
            'DEMO',
            'TRIAL',
            'STARTER',
            'STANDARD',
            'PREMIUM',
            'PREMIUM_20',
            'PREMIUM_50',
            'PREMIUM_100',
            'LEDGER',
            'GST_CASHBOOK',
            'NON_GST_CASHBOOK',
            'ULTIMATE',
            'LITE',
            'ULTIMATE_10',
            'ULTIMATE_20',
            'ULTIMATE_50',
            'ULTIMATE_100',
            'IGNITE',
            'GROW',
            'COMPREHENSIVE',
            'SIMPLE',
            'BASICLITE',
            'ULTRA',
          ])
          .exactOptional()
          .openapi({
            description:
              'Organisation Classes describe which plan the Xero organisation is on (e.g. DEMO, TRIAL, PREMIUM)',
          }),
        Edition: z
          .enum(['BUSINESS', 'PARTNER'])
          .exactOptional()
          .openapi({
            description:
              'BUSINESS or PARTNER. Partner edition organisations are sold exclusively through accounting partners and have restricted functionality (e.g. no access to invoicing)',
          }),
        LineOfBusiness: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Description of business type as defined in Organisation settings',
          }),
        Addresses: z
          .array(AddressForOrganisationSchema)
          .exactOptional()
          .openapi({ description: 'Address details for organisation – see Addresses' }),
        Phones: z
          .array(PhoneSchema)
          .exactOptional()
          .openapi({ description: 'Phones details for organisation – see Phones' }),
        ExternalLinks: z
          .array(ExternalLinkSchema)
          .exactOptional()
          .openapi({
            description:
              'Organisation profile links for popular services such as Facebook,Twitter, GooglePlus and LinkedIn. You can also add link to your website here. Shown if Organisation settings  is updated in Xero. See ExternalLinks below',
          }),
        PaymentTerms: PaymentTermSchema.exactOptional(),
      })
      .openapi({
        externalDocs: { url: 'http://developer.xero.com/documentation/api/organisation/' },
        required: [],
      }),
  )
  .openapi('Organisation')

const OrganisationsSchema = z
  .object({ Organisations: z.array(OrganisationSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'organisations', required: [] })
  .openapi('Organisations')

const OverpaymentsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    Overpayments: z.array(OverpaymentSchema).exactOptional(),
  })
  .openapi({ 'x-objectArrayKey': 'overpayments', required: [] })
  .openapi('Overpayments')

const PaymentsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    Payments: z.array(PaymentSchema).exactOptional(),
  })
  .openapi({ 'x-objectArrayKey': 'payments', required: [] })
  .openapi('Payments')

const PaymentDeleteSchema = z
  .object({
    Status: z.string().default('DELETED').openapi({ description: 'The status of the payment.' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/payments/' },
    required: ['Status'],
  })
  .openapi('PaymentDelete')

const PrepaymentsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    Prepayments: z.array(PrepaymentSchema).exactOptional(),
  })
  .openapi({ 'x-objectArrayKey': 'prepayments', required: [] })
  .openapi('Prepayments')

const PurchaseOrderSchema = z
  .object({
    Contact: ContactSchema.exactOptional(),
    LineItems: z.array(LineItemSchema).exactOptional().openapi({ description: 'See LineItems' }),
    Date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date purchase order was issued – YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation',
        'x-is-msdate': true,
      }),
    DeliveryDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Date the goods are to be delivered – YYYY-MM-DD',
        'x-is-msdate': true,
      }),
    LineAmountTypes: LineAmountTypesSchema.exactOptional(),
    PurchaseOrderNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique alpha numeric code identifying purchase order (when missing will auto-generate from your Organisation Invoice Settings)',
      }),
    Reference: z.string().exactOptional().openapi({ description: 'Additional reference number' }),
    BrandingThemeID: z.uuid().exactOptional().openapi({ description: 'See BrandingThemes' }),
    CurrencyCode: CurrencyCodeSchema.exactOptional(),
    Status: z
      .enum(['DRAFT', 'SUBMITTED', 'AUTHORISED', 'BILLED', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'See Purchase Order Status Codes' }),
    SentToContact: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean to set whether the purchase order should be marked as “sent”. This can be set only on purchase orders that have been approved or billed',
      }),
    DeliveryAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The address the goods are to be delivered to' }),
    AttentionTo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The person that the delivery is going to' }),
    Telephone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number for the person accepting the delivery' }),
    DeliveryInstructions: z
      .string()
      .exactOptional()
      .openapi({ description: 'A free text feild for instructions (500 characters max)' }),
    ExpectedArrivalDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the goods are expected to arrive.', 'x-is-msdate': true }),
    PurchaseOrderID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero generated unique identifier for purchase order' }),
    CurrencyRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The currency rate for a multicurrency purchase order. If no rate is specified, the XE.com day rate is used.',
        'x-is-money': true,
      }),
    SubTotal: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total of purchase order excluding taxes',
        readOnly: true,
        'x-is-money': true,
      }),
    TotalTax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total tax on purchase order', readOnly: true, 'x-is-money': true }),
    Total: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total of Purchase Order tax inclusive (i.e. SubTotal + TotalTax)',
        readOnly: true,
        'x-is-money': true,
      }),
    TotalDiscount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total of discounts applied on the purchase order line items',
        readOnly: true,
        'x-is-money': true,
      }),
    HasAttachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'boolean to indicate if a purchase order has an attachment',
        readOnly: true,
        example: 'false',
      }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified date UTC format',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    StatusAttributeString: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string to indicate if a invoice status' }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    Attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of attachments from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/purchase-orders/' },
    required: [],
  })
  .openapi('PurchaseOrder')

const PurchaseOrdersSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    Warnings: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of warning messages from the API' }),
    PurchaseOrders: z.array(PurchaseOrderSchema).exactOptional(),
  })
  .openapi({ 'x-objectArrayKey': 'purchase_orders', required: [] })
  .openapi('PurchaseOrders')

const QuoteStatusCodesSchema = z
  .enum(['DRAFT', 'SENT', 'DECLINED', 'ACCEPTED', 'INVOICED', 'DELETED'])
  .openapi({ description: 'The status of the quote.' })
  .openapi('QuoteStatusCodes')

const QuoteLineAmountTypesSchema = z
  .enum(['EXCLUSIVE', 'INCLUSIVE', 'NOTAX'])
  .openapi({
    description:
      'Line amounts are exclusive of tax by default if you don’t specify this element. See Line Amount Types',
  })
  .openapi('QuoteLineAmountTypes')

const QuoteSchema = z
  .object({
    QuoteID: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'QuoteID GUID is automatically generated and is returned after create or GET.',
      }),
    QuoteNumber: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({ description: 'Unique alpha numeric code identifying a quote (Max Length = 255)' }),
    Reference: z
      .string()
      .max(4000)
      .exactOptional()
      .openapi({ description: 'Additional reference number' }),
    Terms: z.string().max(4000).exactOptional().openapi({ description: 'Terms of the quote' }),
    Contact: ContactSchema.exactOptional(),
    LineItems: z.array(LineItemSchema).exactOptional().openapi({ description: 'See LineItems' }),
    Date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date quote was issued – YYYY-MM-DD. If the Date element is not specified it will default to the current date based on the timezone setting of the organisation',
        'x-is-msdate': true,
      }),
    DateString: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date the quote was issued (YYYY-MM-DD)' }),
    ExpiryDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date the quote expires – YYYY-MM-DD.', 'x-is-msdate': true }),
    ExpiryDateString: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date the quote expires – YYYY-MM-DD.' }),
    Status: QuoteStatusCodesSchema.exactOptional(),
    CurrencyCode: CurrencyCodeSchema.exactOptional(),
    CurrencyRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The currency rate for a multicurrency quote' }),
    SubTotal: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total of quote excluding taxes.',
        readOnly: true,
        'x-is-money': true,
      }),
    TotalTax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total tax on quote', readOnly: true, 'x-is-money': true }),
    Total: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total of Quote tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn’t equal the sum of the LineAmounts',
        readOnly: true,
        'x-is-money': true,
      }),
    TotalDiscount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total of discounts applied on the quote line items',
        readOnly: true,
        'x-is-money': true,
      }),
    Title: z.string().max(100).exactOptional().openapi({ description: 'Title text for the quote' }),
    Summary: z
      .string()
      .max(3000)
      .exactOptional()
      .openapi({ description: 'Summary text for the quote' }),
    BrandingThemeID: z.uuid().exactOptional().openapi({ description: 'See BrandingThemes' }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last modified date UTC format',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    LineAmountTypes: QuoteLineAmountTypesSchema.exactOptional().openapi({
      description: 'See Quote Line Amount Types',
    }),
    StatusAttributeString: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string to indicate if a invoice status' }),
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of validation error messages from the API' }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/Quotes/' },
    required: [],
  })
  .openapi('Quote')

const QuotesSchema = z
  .object({ Quotes: z.array(QuoteSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'quotes', required: [] })
  .openapi('Quotes')

const ReceiptsSchema = z
  .object({ Receipts: z.array(ReceiptSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'receipts', required: [] })
  .openapi('Receipts')

const ScheduleSchema = z
  .object({
    Period: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Integer used with the unit e.g. 1 (every 1 week), 2 (every 2 months)',
      }),
    Unit: z
      .enum(['WEEKLY', 'MONTHLY'])
      .exactOptional()
      .openapi({ description: 'One of the following - WEEKLY or MONTHLY' }),
    DueDate: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Integer used with due date type e.g 20 (of following month), 31 (of current month)',
      }),
    DueDateType: z
      .enum([
        'DAYSAFTERBILLDATE',
        'DAYSAFTERBILLMONTH',
        'DAYSAFTERINVOICEDATE',
        'DAYSAFTERINVOICEMONTH',
        'OFCURRENTMONTH',
        'OFFOLLOWINGMONTH',
      ])
      .exactOptional()
      .openapi({ description: 'the payment terms' }),
    StartDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date the first invoice of the current version of the repeating schedule was generated (changes when repeating invoice is edited)',
        'x-is-msdate': true,
      }),
    NextScheduledDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The calendar date of the next invoice in the schedule to be generated',
        'x-is-msdate': true,
      }),
    EndDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Invoice end date – only returned if the template has an end date set',
        'x-is-msdate': true,
      }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/repeating-invoices/' },
    required: [],
  })
  .openapi('Schedule')

const RepeatingInvoiceSchema = z
  .object({
    Type: z
      .enum(['ACCPAY', 'ACCREC'])
      .exactOptional()
      .openapi({ description: 'See Invoice Types' }),
    Contact: ContactSchema.exactOptional(),
    Schedule: ScheduleSchema.exactOptional(),
    LineItems: z.array(LineItemSchema).exactOptional().openapi({ description: 'See LineItems' }),
    LineAmountTypes: LineAmountTypesSchema.exactOptional(),
    Reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'ACCREC only – additional reference number' }),
    BrandingThemeID: z.uuid().exactOptional().openapi({ description: 'See BrandingThemes' }),
    CurrencyCode: CurrencyCodeSchema.exactOptional(),
    Status: z
      .enum(['DRAFT', 'AUTHORISED', 'DELETED'])
      .exactOptional()
      .openapi({
        description: 'One of the following - DRAFT or AUTHORISED – See Invoice Status Codes',
      }),
    SubTotal: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total of invoice excluding taxes', 'x-is-money': true }),
    TotalTax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total tax on invoice', 'x-is-money': true }),
    Total: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Total of Invoice tax inclusive (i.e. SubTotal + TotalTax)',
        'x-is-money': true,
      }),
    RepeatingInvoiceID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero generated unique identifier for repeating invoice template' }),
    ID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Xero generated unique identifier for repeating invoice template' }),
    HasAttachments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean to indicate if an invoice has an attachment',
        readOnly: true,
        example: 'false',
      }),
    Attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'Displays array of attachments from the API' }),
    ApprovedForSending: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean to indicate whether the invoice has been approved for sending',
        example: 'false',
      }),
    SendCopy: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: "Boolean to indicate whether a copy is sent to sender's email",
        example: 'false',
      }),
    MarkAsSent: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean to indicate whether the invoice in the Xero app displays as "sent"',
        example: 'false',
      }),
    IncludePDF: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description: 'Boolean to indicate whether to include PDF attachment',
        example: 'false',
      }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/repeating-invoices/' },
    required: [],
  })
  .openapi('RepeatingInvoice')

const RepeatingInvoicesSchema = z
  .object({ RepeatingInvoices: z.array(RepeatingInvoiceSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'repeating_invoices', required: [] })
  .openapi('RepeatingInvoices')

const RowTypeSchema = z.enum(['Header', 'Section', 'Row', 'SummaryRow']).openapi('RowType')

const ReportAttributeSchema = z
  .object({ Id: z.string().exactOptional(), Value: z.string().exactOptional() })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/reports/' },
    required: [],
  })
  .openapi('ReportAttribute')

const ReportCellSchema = z
  .object({
    Value: z.string().exactOptional(),
    Attributes: z.array(ReportAttributeSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportCell')

const ReportRowSchema = z
  .object({
    RowType: RowTypeSchema.exactOptional(),
    Title: z.string().exactOptional(),
    Cells: z.array(ReportCellSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportRow')

const ReportRowsSchema = z
  .object({
    RowType: RowTypeSchema.exactOptional(),
    Title: z.string().exactOptional(),
    Cells: z.array(ReportCellSchema).exactOptional(),
    Rows: z.array(ReportRowSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportRows')

const ReportFieldsSchema = z
  .object({
    FieldID: z.string().exactOptional(),
    Description: z.string().exactOptional(),
    Value: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportFields')

const ReportWithRowSchema = z
  .object({
    ReportID: z.string().exactOptional().openapi({ description: 'ID of the Report' }),
    ReportName: z.string().exactOptional().openapi({ description: 'Name of the report' }),
    ReportTitle: z.string().exactOptional().openapi({ description: 'Title of the report' }),
    ReportType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of report (BalanceSheet,ProfitLoss, etc)' }),
    ReportTitles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Report titles array (3 to 4 strings with the report name, orgnisation name and time frame of report)',
      }),
    ReportDate: z.string().exactOptional().openapi({ description: 'Date of report' }),
    Rows: z.array(ReportRowsSchema).exactOptional(),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Updated Date',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    Fields: z.array(ReportFieldsSchema).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/reports/' },
    required: [],
  })
  .openapi('ReportWithRow')

const ReportWithRowsSchema = z
  .object({ Reports: z.array(ReportWithRowSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportWithRows')

const TenNinetyNineContactSchema = z
  .object({
    Box1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 1 on 1099 Form', 'x-is-money': true }),
    Box2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 2 on 1099 Form', 'x-is-money': true }),
    Box3: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 3 on 1099 Form', 'x-is-money': true }),
    Box4: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 4 on 1099 Form', 'x-is-money': true }),
    Box5: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 5 on 1099 Form', 'x-is-money': true }),
    Box6: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 6 on 1099 Form', 'x-is-money': true }),
    Box7: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 7 on 1099 Form', 'x-is-money': true }),
    Box8: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 8 on 1099 Form', 'x-is-money': true }),
    Box9: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 9 on 1099 Form', 'x-is-money': true }),
    Box10: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 10 on 1099 Form', 'x-is-money': true }),
    Box11: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 11 on 1099 Form', 'x-is-money': true }),
    Box13: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 13 on 1099 Form', 'x-is-money': true }),
    Box14: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Box 14 on 1099 Form', 'x-is-money': true }),
    Name: z.string().exactOptional().openapi({ description: 'Contact name on 1099 Form' }),
    FederalTaxIDType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contact Fed Tax ID type' }),
    City: z.string().exactOptional().openapi({ description: 'Contact city on 1099 Form' }),
    Zip: z.string().exactOptional().openapi({ description: 'Contact zip on 1099 Form' }),
    State: z.string().exactOptional().openapi({ description: 'Contact State on 1099 Form' }),
    Email: z.string().exactOptional().openapi({ description: 'Contact email on 1099 Form' }),
    StreetAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Contact address on 1099 Form' }),
    TaxID: z.string().exactOptional().openapi({ description: 'Contact tax id on 1099 Form' }),
    ContactId: z.uuid().exactOptional().openapi({ description: 'Contact contact id' }),
    LegalName: z.string().exactOptional().openapi({ description: 'Contact legal name' }),
    BusinessName: z.string().exactOptional().openapi({ description: 'Contact business name' }),
    FederalTaxClassification: z
      .enum([
        'SOLE_PROPRIETOR',
        'PARTNERSHIP',
        'TRUST_OR_ESTATE',
        'NONPROFIT',
        'C_CORP',
        'S_CORP',
        'OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'Contact federal tax classification' }),
  })
  .openapi({ required: [] })
  .openapi('TenNinetyNineContact')

const ReportSchema = z
  .object({
    ReportName: z.string().exactOptional().openapi({ description: 'See Prepayment Types' }),
    ReportType: z
      .literal('AgedPayablesByContact')
      .exactOptional()
      .openapi({ description: 'See Prepayment Types' }),
    ReportTitle: z.string().exactOptional().openapi({ description: 'See Prepayment Types' }),
    ReportDate: z.string().exactOptional().openapi({ description: 'Date of report' }),
    UpdatedDateUTC: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Updated Date',
        'x-is-msdate-time': true,
        example: '/Date(1573755038314)/',
        readOnly: true,
      }),
    Contacts: z.array(TenNinetyNineContactSchema).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/reports/' },
    required: [],
  })
  .openapi('Report')

const ReportsSchema = z
  .object({ Reports: z.array(ReportSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'reports', required: [] })
  .openapi('Reports')

const TaxComponentSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'Name of Tax Component' }),
    Rate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Tax Rate (up to 4dp)', 'x-is-money': true }),
    IsCompound: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Boolean to describe if Tax rate is compounded.' }),
    IsNonRecoverable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean to describe if tax rate is non-recoverable. Non-recoverable rates are only applicable to Canadian organisations',
      }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/tax-rates/' },
    required: [],
  })
  .openapi('TaxComponent')

const TaxRateSchema = z
  .object({
    Name: z.string().exactOptional().openapi({ description: 'Name of tax rate' }),
    TaxType: z.string().exactOptional().openapi({ description: 'The tax type' }),
    TaxComponents: z
      .array(TaxComponentSchema)
      .exactOptional()
      .openapi({ description: 'See TaxComponents' }),
    Status: z
      .enum(['ACTIVE', 'DELETED', 'ARCHIVED', 'PENDING'])
      .exactOptional()
      .openapi({ description: 'See Status Codes' }),
    ReportTaxType: z
      .enum([
        'AVALARA',
        'BASEXCLUDED',
        'CAPITALSALESOUTPUT',
        'CAPITALEXPENSESINPUT',
        'ECOUTPUT',
        'ECOUTPUTSERVICES',
        'ECINPUT',
        'ECACQUISITIONS',
        'EXEMPTEXPENSES',
        'EXEMPTINPUT',
        'EXEMPTOUTPUT',
        'GSTONIMPORTS',
        'INPUT',
        'INPUTTAXED',
        'MOSSSALES',
        'NONE',
        'NONEOUTPUT',
        'OUTPUT',
        'PURCHASESINPUT',
        'SALESOUTPUT',
        'EXEMPTCAPITAL',
        'EXEMPTEXPORT',
        'CAPITALEXINPUT',
        'GSTONCAPIMPORTS',
        'GSTONCAPITALIMPORTS',
        'REVERSECHARGES',
        'PAYMENTS',
        'INVOICE',
        'CASH',
        'ACCRUAL',
        'FLATRATECASH',
        'FLATRATEACCRUAL',
        'ACCRUALS',
        'TXCA',
        'SRCAS',
        'DSOUTPUT',
        'BLINPUT2',
        'EPINPUT',
        'IMINPUT2',
        'MEINPUT',
        'IGDSINPUT2',
        'ESN33OUTPUT',
        'OPINPUT',
        'OSOUTPUT',
        'TXN33INPUT',
        'TXESSINPUT',
        'TXREINPUT',
        'TXPETINPUT',
        'NRINPUT',
        'ES33OUTPUT',
        'ZERORATEDINPUT',
        'ZERORATEDOUTPUT',
        'DRCHARGESUPPLY',
        'DRCHARGE',
        'CAPINPUT',
        'CAPIMPORTS',
        'IMINPUT',
        'INPUT2',
        'CIUINPUT',
        'SRINPUT',
        'OUTPUT2',
        'SROUTPUT',
        'CAPOUTPUT',
        'SROUTPUT2',
        'CIUOUTPUT',
        'ZROUTPUT',
        'ZREXPORT',
        'ACC28PLUS',
        'ACCUPTO28',
        'OTHEROUTPUT',
        'SHOUTPUT',
        'ZRINPUT',
        'BADDEBT',
        'OTHERINPUT',
        'BADDEBTRELIEF',
        'IGDSINPUT3',
        'SROVR',
        'TOURISTREFUND',
        'TXRCN33',
        'TXRCRE',
        'TXRCESS',
        'TXRCTS',
        'CAPEXINPUT',
        'UNDEFINED',
        'CAPEXOUTPUT',
        'ZEROEXPOUTPUT',
        'GOODSIMPORT',
        'NONEINPUT',
        'NOTREPORTED',
        'SROVRRS',
        'SROVRLVG',
        'SRLVG',
        'IM',
        'IMESS',
        'IMN33',
        'IMRE',
        'BADDEBTRECOVERY',
        'USSALESTAX',
        'BLINPUT3',
      ])
      .exactOptional()
      .openapi({ description: 'See ReportTaxTypes' }),
    CanApplyToAssets: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean to describe if tax rate can be used for asset accounts i.e.  true,false',
        readOnly: true,
      }),
    CanApplyToEquity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean to describe if tax rate can be used for equity accounts i.e true,false',
        readOnly: true,
      }),
    CanApplyToExpenses: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean to describe if tax rate can be used for expense accounts  i.e. true,false',
        readOnly: true,
      }),
    CanApplyToLiabilities: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean to describe if tax rate can be used for liability accounts  i.e. true,false',
        readOnly: true,
      }),
    CanApplyToRevenue: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean to describe if tax rate can be used for revenue accounts i.e. true,false',
        readOnly: true,
      }),
    DisplayTaxRate: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Tax Rate (decimal to 4dp) e.g 12.5000',
        readOnly: true,
        'x-is-money': true,
      }),
    EffectiveRate: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Effective Tax Rate (decimal to 4dp) e.g 12.5000',
        readOnly: true,
        'x-is-money': true,
      }),
  })
  .openapi({
    externalDocs: { url: 'http://developer.xero.com/documentation/api/tax-rates/' },
    required: [],
  })
  .openapi('TaxRate')

const TaxRatesSchema = z
  .object({ TaxRates: z.array(TaxRateSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'tax_rates', required: [] })
  .openapi('TaxRates')

const TaxTypeSchema = z
  .enum([
    'OUTPUT',
    'INPUT',
    'CAPEXINPUT',
    'EXEMPTEXPORT',
    'EXEMPTEXPENSES',
    'EXEMPTCAPITAL',
    'EXEMPTOUTPUT',
    'INPUTTAXED',
    'BASEXCLUDED',
    'GSTONCAPIMPORTS',
    'GSTONIMPORTS',
    'NONE',
    'INPUT2',
    'ZERORATED',
    'OUTPUT2',
    'CAPEXINPUT2',
    'CAPEXOUTPUT',
    'CAPEXOUTPUT2',
    'CAPEXSRINPUT',
    'CAPEXSROUTPUT',
    'ECACQUISITIONS',
    'ECZRINPUT',
    'ECZROUTPUT',
    'ECZROUTPUTSERVICES',
    'EXEMPTINPUT',
    'REVERSECHARGES',
    'RRINPUT',
    'RROUTPUT',
    'SRINPUT',
    'SROUTPUT',
    'ZERORATEDINPUT',
    'ZERORATEDOUTPUT',
    'BLINPUT',
    'DSOUTPUT',
    'EPINPUT',
    'ES33OUTPUT',
    'ESN33OUTPUT',
    'IGDSINPUT2',
    'IMINPUT2',
    'MEINPUT',
    'NRINPUT',
    'OPINPUT',
    'OSOUTPUT',
    'TXESSINPUT',
    'TXN33INPUT',
    'TXPETINPUT',
    'TXREINPUT',
    'INPUT3',
    'INPUT4',
    'OUTPUT3',
    'OUTPUT4',
    'SROUTPUT2',
    'TXCA',
    'SRCAS',
    'BLINPUT2',
    'DRCHARGESUPPLY20',
    'DRCHARGE20',
    'DRCHARGESUPPLY5',
    'DRCHARGE5',
    'BADDEBTRELIEF',
    'IGDSINPUT3',
    'SROVR',
    'TOURISTREFUND',
    'TXRCN33',
    'TXRCRE',
    'TXRCESS',
    'TXRCTS',
    'OUTPUTY23',
    'DSOUTPUTY23',
    'INPUTY23',
    'IMINPUT2Y23',
    'IGDSINPUT2Y23',
    'TXPETINPUTY23',
    'TXESSINPUTY23',
    'TXN33INPUTY23',
    'TXREINPUTY23',
    'TXCAY23',
    'BADDEBTRELIEFY23',
    'IGDSINPUT3Y23',
    'SROVRRSY23',
    'SROVRLVGY23',
    'SRLVGY23',
    'TXRCN33Y23',
    'TXRCREY23',
    'TXRCESSY23',
    'TXRCTSY23',
    'IM',
    'IMY23',
    'IMESS',
    'IMESSY23',
    'IMN33',
    'IMN33Y23',
    'IMRE',
    'IMREY23',
    'BADDEBTRECOVERY',
    'BADDEBTRECOVERYY23',
    'OUTPUTY24',
    'DSOUTPUTY24',
    'INPUTY24',
    'IGDSINPUT2Y24',
    'TXPETINPUTY24',
    'TXESSINPUTY24',
    'TXN33INPUTY24',
    'TXREINPUTY24',
    'TXCAY24',
    'BADDEBTRELIEFY24',
    'IGDSINPUT3Y24',
    'SROVRRSY24',
    'SROVRLVGY24',
    'SRLVGY24',
    'TXRCTSY24',
    'TXRCESSY24',
    'TXRCN33Y24',
    'TXRCREY24',
    'IMY24',
    'IMESSY24',
    'IMN33Y24',
    'IMREY24',
    'BADDEBTRECOVERYY24',
    'OSOUTPUT2',
    'BLINPUT3',
    'BLINPUT3Y23',
    'BLINPUT3Y24',
  ])
  .openapi({ description: 'See Tax Types – can only be used on update calls' })
  .openapi('TaxType')

const ConversionDateSchema = z
  .object({
    Month: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The month the organisation starts using Xero. Value is an integer between 1 and 12',
        example: 1,
      }),
    Year: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The year the organisation starts using Xero. Value is an integer greater than 2006',
        example: 2020,
      }),
  })
  .openapi({ description: 'The date when the organisation starts using Xero', required: [] })
  .openapi('ConversionDate')

const BalanceDetailsSchema = z
  .object({
    Balance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The opening balances of the account. Debits are positive, credits are negative values',
      }),
    CurrencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency of the balance (Not required for base currency)' }),
    CurrencyRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          '(Optional) Exchange rate to base currency when money is spent or received. If not specified, XE rate for the day is applied',
        'x-is-money': true,
      }),
  })
  .openapi({
    description: 'An array to specify multiple currency balances of an account',
    required: [],
  })
  .openapi('BalanceDetails')

const ConversionBalancesSchema = z
  .object({
    AccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account code for a account' }),
    Balance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The opening balances of the account. Debits are positive, credits are negative values',
      }),
    BalanceDetails: z.array(BalanceDetailsSchema).exactOptional(),
  })
  .openapi({
    description: 'Balance supplied for each account that has a value as at the conversion date.',
    required: [],
  })
  .openapi('ConversionBalances')

const SetupSchema = z
  .object({
    ConversionDate: ConversionDateSchema.exactOptional(),
    ConversionBalances: z
      .array(ConversionBalancesSchema)
      .exactOptional()
      .openapi({
        description:
          'Balance supplied for each account that has a value as at the conversion date.',
      }),
    Accounts: z.array(AccountSchema).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api-guides/conversions' },
    required: [],
  })
  .openapi('Setup')

const ImportSummaryAccountsSchema = z
  .object({
    Total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of accounts in the org' }),
    New: z.int32().exactOptional().openapi({ description: 'The number of new accounts created' }),
    Updated: z.int32().exactOptional().openapi({ description: 'The number of accounts updated' }),
    Deleted: z.int32().exactOptional().openapi({ description: 'The number of accounts deleted' }),
    Locked: z.int32().exactOptional().openapi({ description: 'The number of locked accounts' }),
    System: z.int32().exactOptional().openapi({ description: 'The number of system accounts' }),
    Errored: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of accounts that had an error' }),
    Present: z.boolean().exactOptional(),
    NewOrUpdated: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of new or updated accounts' }),
  })
  .openapi({ description: 'A summary of the accounts changes', required: [] })
  .openapi('ImportSummaryAccounts')

const ImportSummaryOrganisationSchema = z
  .object({ Present: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('ImportSummaryOrganisation')

const ImportSummarySchema = z
  .object({
    Accounts: ImportSummaryAccountsSchema.exactOptional(),
    Organisation: ImportSummaryOrganisationSchema.exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api-guides/conversions' },
    description: 'A summary of the import from setup endpoint',
    required: [],
  })
  .openapi('ImportSummary')

const ImportSummaryObjectSchema = z
  .object({ ImportSummary: ImportSummarySchema.exactOptional() })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api-guides/conversions' },
    required: [],
  })
  .openapi('ImportSummaryObject')

const TrackingCategoriesSchema = z
  .object({ TrackingCategories: z.array(TrackingCategorySchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'tracking_categories', required: [] })
  .openapi('TrackingCategories')

const TrackingOptionsSchema = z
  .object({ Options: z.array(TrackingOptionSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'options', required: [] })
  .openapi('TrackingOptions')

const UsersSchema = z
  .object({ Users: z.array(UserSchema).exactOptional() })
  .openapi({ 'x-objectArrayKey': 'users', required: [] })
  .openapi('Users')

const ElementSchema = z
  .object({
    ValidationErrors: z
      .array(ValidationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Array of Validation Error message' }),
    BatchPaymentID: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique ID for batch payment object with validation error' }),
    BankTransactionID: z.uuid().exactOptional(),
    CreditNoteID: z.uuid().exactOptional(),
    ContactID: z.uuid().exactOptional(),
    InvoiceID: z.uuid().exactOptional(),
    ItemID: z.uuid().exactOptional(),
    PurchaseOrderID: z.uuid().exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/http-response-codes' },
    required: [],
  })
  .openapi('Element')

const ErrorSchema = z
  .object({
    ErrorNumber: z.int().exactOptional().openapi({ description: 'Exception number' }),
    Type: z.string().exactOptional().openapi({ description: 'Exception type' }),
    Message: z.string().exactOptional().openapi({ description: 'Exception message' }),
    Elements: z
      .array(ElementSchema)
      .exactOptional()
      .openapi({ description: 'Array of Elements of validation Errors' }),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/api/http-response-codes' },
    required: [],
  })
  .openapi('Error')

const _400ErrorResponse = {
  description: 'A failed request due to validation error',
  content: { 'application/json': { schema: ErrorSchema } },
}

const HistoryRecordCreatedResponse = {
  description: 'Success - return response of type HistoryRecords array of HistoryRecord objects',
  content: {
    'application/json': {
      schema: HistoryRecordsSchema,
      example: {
        Id: 'd7525479-3392-44c0-bb37-ff4a0b5df5bd',
        Status: 'OK',
        ProviderName: 'Xero API Partner',
        DateTimeUTC: '/Date(1550899400362)/',
        HistoryRecords: [
          {
            DateUTCString: '2019-02-23T05:23:20',
            DateUTC: '/Date(1550899400362)/',
            Details: 'Hello World',
            ValidationErrors: [],
          },
        ],
      },
    },
  },
}

const HistoryRetrievedResponse = {
  description: 'Success - return response of HistoryRecords array of 0 to N HistoryRecord',
  content: {
    'application/json': {
      schema: HistoryRecordsSchema,
      example: {
        Id: 'cd54cc7b-b721-4207-b11d-7d13c7902f91',
        Status: 'OK',
        ProviderName: 'Xero API Partner',
        DateTimeUTC: '/Date(1551311321819)/',
        HistoryRecords: [
          {
            Changes: 'Attached a file',
            DateUTCString: '2018-11-08T15:01:21',
            DateUTC: '/Date(1541689281470+0000)/',
            User: 'System Generated',
            Details: 'Attached the file sample2.jpg through the Xero API using Xero API Partner',
          },
          {
            Changes: 'Credit Applied',
            DateUTCString: '2016-10-17T20:46:01',
            DateUTC: '/Date(1476737161173+0000)/',
            User: 'System Generated',
            Details:
              'Bank transfer from Business Wells Fargo to My Savings on November 12, 2016 for 20.00.',
          },
        ],
      },
    },
  },
}

const RequiredHeaderParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'xero-tenant-id',
      'x-snake': 'xero_tenant_id',
      description: 'Xero identifier for Tenant',
      example: 'YOUR_XERO_TENANT_ID',
      schema: { type: 'string' },
      required: true,
    },
  })

const SummarizeErrorsParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'summarizeErrors',
      'x-snake': 'summarize_errors',
      description:
        'If false return 200 OK and mix of successfully created objects and any with validation errors',
      example: true,
      'x-example-python': 'True',
      schema: { type: 'boolean', default: false },
      required: false,
    },
  })

const UnitdpParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'unitdp',
      description:
        'e.g. unitdp=4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts',
      example: 4,
      schema: { type: 'integer' },
      required: false,
    },
  })

const IfModifiedSinceParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'If-Modified-Since',
      'x-snake': 'if_modified_since',
      description: 'Only records created or modified since this timestamp will be returned',
      example: '2020-02-06T12:17:43.202-08:00',
      schema: { type: 'string', format: 'date-time' },
      required: false,
    },
  })

const IdempotencyKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Idempotency-Key',
      'x-snake': 'idempotency_key',
      description:
        'This allows you to safely retry requests without the risk of duplicate processing. 128 character max.',
      example: 'KEY_VALUE',
      schema: { type: 'string' },
      required: false,
    },
  })

const AllowBackordersParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'allowBackorders',
      'x-snake': 'allow_backorders',
      description:
        'Allows an invoice to be created even when one or more line items contain tracked inventory where the invoice quantity would cause the available quantity to go negative',
      example: true,
      schema: { type: 'boolean' },
      required: false,
    },
  })

const IncludeOnlineParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'IncludeOnline',
      'x-snake': 'include_online',
      description:
        'Allows an attachment to be seen by the end customer within their online invoice',
      example: true,
      'x-example-python': 'True',
      schema: { type: 'boolean', default: false },
      required: false,
    },
  })

const SummaryOnlyParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'summaryOnly',
      'x-snake': 'summary_only',
      description:
        'Use summaryOnly=true in GET Contacts and Invoices endpoint to retrieve a smaller version of the response object. This returns only lightweight fields, excluding computation-heavy fields from the response, making the API calls quick and efficient.',
      example: true,
      'x-example-python': 'True',
      schema: { type: 'boolean', default: false },
      required: false,
    },
  })

const SearchTermParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'searchTerm',
      'x-snake': 'search_term',
      description:
        'Search parameter that performs a case-insensitive text search across the fields e.g. InvoiceNumber, Reference.',
      example: 'SearchTerm=REF12',
      'x-example-python': 'True',
      schema: { type: 'string' },
      required: false,
    },
  })

const FromDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'fromDate',
      'x-snake': 'from_date',
      description: 'filter by the from date of the report e.g. 2021-02-01',
      example: '2019-10-31',
      schema: { type: 'string', format: 'date' },
      required: false,
    },
  })

const ToDateParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'toDate',
      'x-snake': 'to_date',
      description: 'filter by the to date of the report e.g. 2021-02-28',
      example: '2019-10-31',
      schema: { type: 'string', format: 'date' },
      required: false,
    },
  })

const PageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .exactOptional()
  .openapi({
    param: {
      in: 'query',
      name: 'pageSize',
      description: 'Number of records to retrieve per page',
      example: 100,
      schema: { type: 'integer' },
      required: false,
    },
  })

const AccountIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'AccountID',
      'x-snake': 'account_id',
      description: 'Unique identifier for Account object',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const AllocationIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'AllocationID',
      'x-snake': 'allocation_id',
      description: 'Unique identifier for Allocation object',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const AttachmentIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'AttachmentID',
      'x-snake': 'attachment_id',
      description: 'Unique identifier for Attachment object',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ContentTypeParamsSchema = z
  .string()
  .openapi({
    param: {
      required: true,
      in: 'header',
      name: 'contentType',
      'x-snake': 'content_type',
      description:
        'The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf',
      example: 'image/jpg',
      schema: { type: 'string' },
    },
  })

const FileNameParamsSchema = z
  .string()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'FileName',
      'x-snake': 'file_name',
      description: 'Name of the attachment',
      example: 'xero-dev.jpg',
      schema: { type: 'string' },
    },
  })

const BatchPaymentIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'BatchPaymentID',
      'x-snake': 'batch_payment_id',
      description: 'Unique identifier for BatchPayment',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const BankTransactionIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'BankTransactionID',
      'x-snake': 'bank_transaction_id',
      description: 'Xero generated unique identifier for a bank transaction',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const BankTransferIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'BankTransferID',
      'x-snake': 'bank_transfer_id',
      description: 'Xero generated unique identifier for a bank transfer',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const BrandingThemeIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'BrandingThemeID',
      'x-snake': 'branding_theme_id',
      description: 'Unique identifier for a Branding Theme',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const BudgetIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'BudgetID',
      'x-snake': 'budget_id',
      description: 'Unique identifier for Budgets',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ContactIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'ContactID',
      'x-snake': 'contact_id',
      description: 'Unique identifier for a Contact',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ContactGroupIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'ContactGroupID',
      'x-snake': 'contact_group_id',
      description: 'Unique identifier for a Contact Group',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const CreditNoteIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'CreditNoteID',
      'x-snake': 'credit_note_id',
      description: 'Unique identifier for a Credit Note',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const EmployeeIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'EmployeeID',
      'x-snake': 'employee_id',
      description: 'Unique identifier for a Employee',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ExpenseClaimIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'ExpenseClaimID',
      'x-snake': 'expense_claim_id',
      description: 'Unique identifier for a ExpenseClaim',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const InvoiceIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'InvoiceID',
      'x-snake': 'invoice_id',
      description: 'Unique identifier for an Invoice',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ItemIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'ItemID',
      'x-snake': 'item_id',
      description: 'Unique identifier for an Item',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const JournalIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'JournalID',
      'x-snake': 'journal_id',
      description: 'Unique identifier for a Journal',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const JournalNumberParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int(),
  )
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'JournalNumber',
      'x-snake': 'journal_number',
      description: 'Number of a Journal',
      example: 1000,
      schema: { type: 'integer' },
    },
  })

const LinkedTransactionIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'LinkedTransactionID',
      'x-snake': 'linked_transaction_id',
      description: 'Unique identifier for a LinkedTransaction',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ManualJournalIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'ManualJournalID',
      'x-snake': 'manual_journal_id',
      description: 'Unique identifier for a ManualJournal',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const OrganisationIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'OrganisationID',
      'x-snake': 'organisation_id',
      description: 'The unique Xero identifier for an organisation',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const OverpaymentIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'OverpaymentID',
      'x-snake': 'overpayment_id',
      description: 'Unique identifier for a Overpayment',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const PaymentIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'PaymentID',
      'x-snake': 'payment_id',
      description: 'Unique identifier for a Payment',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const PrepaymentIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'PrepaymentID',
      'x-snake': 'prepayment_id',
      description: 'Unique identifier for a PrePayment',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const PurchaseOrderIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'PurchaseOrderID',
      'x-snake': 'purchase_order_id',
      description: 'Unique identifier for an Purchase Order',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const QuoteIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'QuoteID',
      'x-snake': 'quote_id',
      description: 'Unique identifier for an Quote',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const ReceiptIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'ReceiptID',
      'x-snake': 'receipt_id',
      description: 'Unique identifier for a Receipt',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const RepeatingInvoiceIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'RepeatingInvoiceID',
      'x-snake': 'repeating_invoice_id',
      description: 'Unique identifier for a Repeating Invoice',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const TrackingCategoryIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'TrackingCategoryID',
      'x-snake': 'tracking_category_id',
      description: 'Unique identifier for a TrackingCategory',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const TrackingOptionIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'TrackingOptionID',
      'x-snake': 'tracking_option_id',
      description: 'Unique identifier for a Tracking Option',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const UserIDParamsSchema = z
  .uuid()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'UserID',
      'x-snake': 'user_id',
      description: 'Unique identifier for a User',
      example: '00000000-0000-0000-0000-000000000000',
      schema: { type: 'string', format: 'uuid' },
    },
  })

const TaxTypeParamsSchema = z
  .string()
  .openapi({
    param: {
      required: true,
      in: 'path',
      name: 'TaxType',
      description: 'A valid TaxType code',
      example: 'INPUT2',
      schema: { type: 'string' },
    },
  })

const HistoryRecordsRequestBody = {
  description: 'HistoryRecords containing an array of HistoryRecord objects in body of request',
  content: {
    'application/json': {
      schema: HistoryRecordsSchema,
      example: { HistoryRecords: [{ Details: 'Hello World' }] },
    },
  },
  required: true,
}

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description: 'For more information',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://login.xero.com/identity/connect/authorize',
      tokenUrl: 'https://identity.xero.com/connect/token',
      scopes: {
        email: 'Grant read-only access to your email',
        openid: 'Grant read-only access to your open id',
        profile: 'your profile information',
        'accounting.attachments': 'Grant read-write access to attachments',
        'accounting.attachments.read': 'Grant read-only access to attachments',
        'accounting.budgets.read': 'Grant read-only access to read budgets',
        'accounting.contacts': 'Grant read-write access to contacts and contact groups',
        'accounting.contacts.read': 'Grant read-only access to contacts and contact groups',
        'accounting.journals.read': 'Grant read-only access to journals',
        'accounting.reports.read': 'Grant read-only access to accounting reports',
        'accounting.reports.tenninetynine.read': 'Grant read-only access to 1099 reports',
        'accounting.settings': 'Grant read-write access to organisation and account settings',
        'accounting.settings.read': 'Grant read-only access to organisation and account settings',
        'accounting.transactions':
          'Grant read-write access to bank transactions, credit notes, invoices, repeating invoices',
        'accounting.transactions.read': 'Grant read-only access to invoices',
        paymentservices: 'Grant read-write access to payment services',
      },
    },
  },
}

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/Accounts',
  tags: ['Accounting'],
  summary: 'Retrieves the full chart of accounts',
  operationId: 'getAccounts',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status==&quot;ACTIVE&quot; AND Type==&quot;BANK&quot;',
            'x-example-csharp': 'Status==\\"ACTIVE\\"',
            'x-example-java': 'Status==&quot;&apos; + Account.StatusEnum.ACTIVE+ &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\Account::STATUS_ACTIVE . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::Account::ACTIVE}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Name ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Accounts array with 0 to n Account',
      content: {
        'application/json': {
          schema: AccountsSchema,
          example: {
            Accounts: [
              {
                AccountID: 'ebd06280-af70-4bed-97c6-7451a454ad85',
                Code: '091',
                Name: 'Business Savings Account',
                Type: 'BANK',
                TaxType: 'NONE',
                EnablePaymentsToAccount: false,
                BankAccountNumber: '0209087654321050',
                BankAccountType: 'BANK',
                CurrencyCode: 'NZD',
              },
              {
                AccountID: '7d05a53d-613d-4eb2-a2fc-dcb6adb80b80',
                Code: '200',
                Name: 'Sales',
                Type: 'REVENUE',
                TaxType: 'OUTPUT2',
                Description: 'Income from any normal business activity',
                EnablePaymentsToAccount: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const putAccountsRoute = createRoute({
  method: 'put',
  path: '/Accounts',
  tags: ['Accounting'],
  summary: 'Creates a new chart of accounts',
  operationId: 'createAccount',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'Account object in body of request',
      content: {
        'application/json': {
          schema: AccountSchema,
          example: { Code: '123456', Name: 'Foobar', Type: 'EXPENSE', Description: 'Hello World' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - created new Account and return response of type Accounts array with new Account',
      content: {
        'application/json': {
          schema: AccountsSchema,
          example: {
            Id: '11814c9d-3b5e-492e-93b0-fad16bf3244f',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550793549392)/',
            Accounts: [
              {
                AccountID: '66b262e2-561e-423e-8937-47d558f13442',
                Code: '123456',
                Name: 'Foobar',
                Status: 'ACTIVE',
                Type: 'EXPENSE',
                TaxType: 'INPUT',
                Description: 'Hello World',
                Class: 'EXPENSE',
                EnablePaymentsToAccount: false,
                ShowInExpenseClaims: false,
                ReportingCode: 'EXP',
                ReportingCodeName: 'Expense',
                UpdatedDateUTC: '/Date(1550793549320+0000)/',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Validation Error - some data was incorrect returns response of type Error',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            ErrorNumber: 10,
            Type: 'ValidationException',
            Message: 'A validation exception occurred',
            Elements: [
              {
                AccountID: '00000000-0000-0000-0000-000000000000',
                Code: '123456',
                Name: 'Foobar',
                Type: 'EXPENSE',
                Description: 'Hello World',
                ValidationErrors: [{ Message: 'Please enter a unique Name.' }],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const getAccountsAccountIDRoute = createRoute({
  method: 'get',
  path: '/Accounts/{AccountID}',
  tags: ['Accounting'],
  summary: 'Retrieves a single chart of accounts by using a unique account Id',
  operationId: 'getAccount',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ AccountID: AccountIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Accounts array with one Account',
      content: {
        'application/json': {
          schema: AccountsSchema,
          example: {
            Id: '323455cc-9511-4451-a873-248d2983f38e',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550797359081)/',
            Accounts: [
              {
                AccountID: '99ce6032-0678-4aa0-8148-240c75fee33a',
                Code: '123456',
                Name: 'FooBar',
                Status: 'ACTIVE',
                Type: 'EXPENSE',
                TaxType: 'INPUT',
                Description: 'Hello World',
                Class: 'EXPENSE',
                EnablePaymentsToAccount: false,
                ShowInExpenseClaims: false,
                ReportingCode: 'EXP',
                ReportingCodeName: 'Expense',
                UpdatedDateUTC: '/Date(1550797359120+0000)/',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const postAccountsAccountIDRoute = createRoute({
  method: 'post',
  path: '/Accounts/{AccountID}',
  tags: ['Accounting'],
  summary: 'Updates a chart of accounts',
  operationId: 'updateAccount',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ AccountID: AccountIDParamsSchema }),
    body: {
      description: 'Request of type Accounts array with one Account',
      content: {
        'application/json': {
          schema: AccountsSchema,
          example: {
            Accounts: [
              {
                Code: '123456',
                Name: 'BarFoo',
                AccountID: '99ce6032-0678-4aa0-8148-240c75fee33a',
                Type: 'EXPENSE',
                Description: 'GoodBye World',
                TaxType: 'INPUT',
                EnablePaymentsToAccount: false,
                ShowInExpenseClaims: false,
                Class: 'EXPENSE',
                ReportingCode: 'EXP',
                ReportingCodeName: 'Expense',
                UpdatedDateUTC: '2019-02-21T16:29:47.96-08:00',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - update existing Account and return response of type Accounts array with updated Account',
      content: {
        'application/json': {
          schema: AccountsSchema,
          example: {
            Id: '9012e75c-ec08-40a9-ae15-153fc1f35c4d',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550795389340)/',
            Accounts: [
              {
                AccountID: '99ce6032-0678-4aa0-8148-240c75fee33a',
                Code: '654321',
                Name: 'BarFoo',
                Status: 'ACTIVE',
                Type: 'EXPENSE',
                TaxType: 'INPUT',
                Description: 'Good Bye World',
                Class: 'EXPENSE',
                EnablePaymentsToAccount: false,
                ShowInExpenseClaims: false,
                ReportingCode: 'EXP',
                ReportingCodeName: 'Expense',
                UpdatedDateUTC: '/Date(1550795389333+0000)/',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Validation Error - some data was incorrect returns response of type Error',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            ErrorNumber: 10,
            Type: 'ValidationException',
            Message: 'A validation exception occurred',
            Elements: [
              {
                AccountID: '00000000-0000-0000-0000-000000000000',
                Code: '123456',
                Name: 'Foobar',
                Type: 'EXPENSE',
                Description: 'Hello World',
                ValidationErrors: [{ Message: 'Please enter a unique Name.' }],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const deleteAccountsAccountIDRoute = createRoute({
  method: 'delete',
  path: '/Accounts/{AccountID}',
  tags: ['Accounting'],
  summary: 'Deletes a chart of accounts',
  operationId: 'deleteAccount',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ AccountID: AccountIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - delete existing Account and return response of type Accounts array with deleted Account',
      content: {
        'application/json': {
          schema: AccountsSchema,
          example: {
            Id: '76bb0543-8efe-4acc-b7f6-67dfcdec37b4',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550798217216)/',
            Accounts: [
              {
                AccountID: '7f3c0bec-f3e7-4073-b4d6-cc56dd027ef1',
                Code: '123456',
                Name: 'FooBar',
                Status: 'DELETED',
                Type: 'EXPENSE',
                TaxType: 'INPUT',
                Description: 'Hello World',
                Class: 'EXPENSE',
                EnablePaymentsToAccount: false,
                ShowInExpenseClaims: false,
                ReportingCode: 'EXP',
                ReportingCodeName: 'Expense',
                UpdatedDateUTC: '/Date(1550798217210+0000)/',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Validation Error - some data was incorrect returns response of type Error',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            ErrorNumber: 10,
            Type: 'ValidationException',
            Message: 'A validation exception occurred',
            Elements: [
              {
                AccountID: '00000000-0000-0000-0000-000000000000',
                Code: '123456',
                Name: 'Foobar',
                Type: 'EXPENSE',
                Description: 'Hello World',
                ValidationErrors: [{ Message: 'Please enter a unique Name.' }],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const getAccountsAccountIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/Accounts/{AccountID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves attachments for a specific accounts by using a unique account Id',
  operationId: 'getAccountAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ AccountID: AccountIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array of Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '439c1573-3cd8-4697-a9f6-81fa651ee8f3',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550852630329)/',
            Attachments: [
              {
                AttachmentID: '52a643be-cd5c-489f-9778-53a9fd337756',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Accounts/da962997-a8bd-4dff-9616-01cdc199283f/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getAccountsAccountIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/Accounts/{AccountID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment from a specific account using a unique attachment Id',
  operationId: 'getAccountAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ AccountID: AccountIDParamsSchema, AttachmentID: AttachmentIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Account as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getAccountsAccountIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/Accounts/{AccountID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves an attachment for a specific account by filename',
  operationId: 'getAccountAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ AccountID: AccountIDParamsSchema, FileName: FileNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Account as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putAccountsAccountIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/Accounts/{AccountID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Creates an attachment on a specific account',
  operationId: 'createAccountAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ AccountID: AccountIDParamsSchema, FileName: FileNameParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array of Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '724cdff5-bcd1-4c5c-977e-e864c24258e0',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550856817769)/',
            Attachments: [
              {
                AttachmentID: 'ab95b276-9dce-4925-9077-439818ba270f',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Accounts/da962997-a8bd-4dff-9616-01cdc199283f/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postAccountsAccountIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/Accounts/{AccountID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Updates attachment on a specific account by filename',
  operationId: 'updateAccountAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ AccountID: AccountIDParamsSchema, FileName: FileNameParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array of Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'c8d6413a-1da2-4faa-9848-21f60443e906',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550859714477)/',
            Attachments: [
              {
                AttachmentID: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Accounts/da962997-a8bd-4dff-9616-01cdc199283f/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Validation Error - some data was incorrect returns response of type Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getBatchPaymentsRoute = createRoute({
  method: 'get',
  path: '/BatchPayments',
  tags: ['Accounting'],
  summary: 'Retrieves either one or many batch payments for invoices',
  operationId: 'getBatchPayments',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="AUTHORISED"',
            'x-example-csharp': 'Status==\\&quot;AUTHORISED\\&quot;',
            'x-example-java':
              'Status==&quot;&apos; + BatchPayment.StatusEnum.AUTHORISED + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . XeroAPI\\XeroPHP\\Models\\Accounting\\BatchPayment::STATUS_AUTHORISED . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::BatchPayment::AUTHORISED}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Date ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type BatchPayments array of BatchPayment objects',
      content: {
        'application/json': {
          schema: BatchPaymentsSchema,
          example: {
            Id: '6ab84949-4fe5-4788-a135-4d8f690d24d7',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550866184006)/',
            BatchPayments: [
              {
                Account: { AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9', CurrencyCode: 'NZD' },
                Reference: 'Hello World',
                BatchPaymentID: 'd0e9bbbf-5b8a-48b6-906a-035591fcb061',
                DateString: '2017-11-28T00:00:00',
                Date: '/Date(1511827200000+0000)/',
                Payments: [
                  {
                    Invoice: {
                      InvoiceID: '0975dec2-0cf6-498d-9c9f-c6775b45c61d',
                      CurrencyCode: 'NZD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: '97ec2ef8-f4d6-4de5-9f2a-385d41cdc2fc',
                    Amount: 200,
                    BankAmount: 200,
                  },
                  {
                    Invoice: {
                      InvoiceID: '600982d9-6605-4e11-afa1-d8dec2be7b52',
                      CurrencyCode: 'NZD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: 'e232795f-b919-4865-a754-12f6ae8402c0',
                    Amount: 200,
                    BankAmount: 200,
                  },
                  {
                    Invoice: {
                      InvoiceID: '99a2bd54-4ab1-413c-90bb-57f6464fe5d6',
                      CurrencyCode: 'NZD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: 'c2d571a5-38ff-4d37-9d43-dfadb4ad53ff',
                    Amount: 200,
                    BankAmount: 200,
                  },
                  {
                    Invoice: {
                      InvoiceID: 'c81942c8-bfc5-4c88-a21a-b892a4a8c1c5',
                      CurrencyCode: 'NZD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: '0f3c18dc-49bd-47a4-a875-03c84a29978f',
                    Amount: 200,
                    BankAmount: 200,
                  },
                  {
                    Invoice: {
                      InvoiceID: '6c9a1d89-8319-42f6-87d6-7690e748af85',
                      CurrencyCode: 'NZD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: '43541eed-f3ac-44ac-88cb-9fe1cb7ed8b8',
                    Amount: 200,
                    BankAmount: 200,
                  },
                ],
                Type: 'RECBATCH',
                Status: 'AUTHORISED',
                TotalAmount: 1000,
                UpdatedDateUTC: '/Date(1511893792820+0000)/',
                IsReconciled: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putBatchPaymentsRoute = createRoute({
  method: 'put',
  path: '/BatchPayments',
  tags: ['Accounting'],
  summary: 'Creates one or many batch payments for invoices',
  operationId: 'createBatchPayment',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'BatchPayments with an array of Payments in body of request',
      content: {
        'application/json': {
          schema: BatchPaymentsSchema,
          example: {
            BatchPayments: [
              {
                Account: { AccountID: '00000000-0000-0000-0000-000000000000' },
                Reference: 'ref',
                Date: '2018-08-01',
                Payments: [
                  {
                    Account: { Code: '001' },
                    Date: '2019-12-31',
                    Amount: 500,
                    Invoice: {
                      InvoiceID: '00000000-0000-0000-0000-000000000000',
                      LineItems: [],
                      Contact: {},
                      Type: 'ACCPAY',
                    },
                  },
                ],
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type BatchPayments array of BatchPayment objects',
      content: {
        'application/json': {
          schema: BatchPaymentsSchema,
          example: {
            Id: '424745ed-6356-46ad-87d4-3585f9062fb4',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550865988111)/',
            BatchPayments: [
              {
                Account: { AccountID: '5ec2f302-cd60-4f8b-a915-9229dd45e6fa', CurrencyCode: 'NZD' },
                Reference: 'Foobar123',
                BatchPaymentID: 'd318c343-208e-49fe-b04a-45642349bcf1',
                DateString: '2019-02-22T00:00:00',
                Date: '/Date(1550793600000+0000)/',
                Payments: [
                  {
                    Invoice: {
                      InvoiceID: '3323652c-155e-433b-8a73-4dde7cfbf410',
                      CurrencyCode: 'NZD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: 'c05098fa-ae3c-4f00-80ec-0a9df07dedff',
                    Amount: 1,
                    BankAmount: 1,
                  },
                  {
                    Invoice: {
                      InvoiceID: 'e4abafb4-1f5b-4d9f-80b3-9a7b815bc302',
                      CurrencyCode: 'NZD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: '96409489-2f7d-4804-9a6d-6b939b0e038a',
                    Amount: 1,
                    BankAmount: 1,
                  },
                  {
                    Invoice: {
                      InvoiceID: 'e6039672-b161-40cd-b07b-a0178e7186ad',
                      CurrencyCode: 'NZD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: 'd2796067-bf71-4f06-b386-81f1454fa866',
                    Amount: 1,
                    BankAmount: 1,
                  },
                ],
                Type: 'RECBATCH',
                Status: 'AUTHORISED',
                TotalAmount: 3,
                UpdatedDateUTC: '/Date(1550865987783+0000)/',
                IsReconciled: false,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const postBatchPaymentsRoute = createRoute({
  method: 'post',
  path: '/BatchPayments',
  tags: ['Accounting'],
  summary: 'Updates a specific batch payment for invoices and credit notes',
  operationId: 'deleteBatchPayment',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: BatchPaymentDeleteSchema,
          example: { BatchPaymentID: '9bf296e9-0748-4d29-a3dc-24dde1098030', Status: 'DELETED' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type BatchPayments array for updated BatchPayment',
      content: {
        'application/json': {
          schema: BatchPaymentsSchema,
          example: {
            Id: 'ee23328c-4a8b-4ee7-8fb6-9796ffab9cb0',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1583945852489)/',
            BatchPayments: [
              {
                Account: { AccountID: 'efb6e3a4-3156-4cee-bfe1-a282a3cc1d8f', CurrencyCode: 'NZD' },
                BatchPaymentID: 'b649632e-2782-4c74-95a5-d994d7140ed9',
                DateString: '2022-08-01T00:00:00',
                Date: '/Date(1659312000000+0000)/',
                Payments: [],
                Type: 'PAYBATCH',
                Status: 'DELETED',
                TotalAmount: 18,
                UpdatedDateUTC: '/Date(1659377631813+0000)/',
                IsReconciled: false,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getBatchPaymentsBatchPaymentIDRoute = createRoute({
  method: 'get',
  path: '/BatchPayments/{BatchPaymentID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific batch payment using a unique batch payment Id',
  operationId: 'getBatchPayment',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BatchPaymentID: BatchPaymentIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type BatchPayments array with matching batch payment Id',
      content: {
        'application/json': {
          schema: BatchPaymentsSchema,
          example: {
            Id: '6ab84949-4fe5-4788-a135-4d8f690d24d7',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550866184006)/',
            BatchPayments: [
              {
                Account: { AccountID: '13918178-849a-4823-9a31-57b7eac713d7', CurrencyCode: 'NZD' },
                Reference: 'ref',
                BatchPaymentID: '44a1013e-4946-4a73-b207-dfe5424a5ea5',
                DateString: '2018-10-03T00:00:00',
                Date: '/Date(1538524800000+0000)/',
                Payments: [
                  {
                    Invoice: {
                      InvoiceID: '5aa9451d-95d1-4f95-a966-bbab2573f71c',
                      CurrencyCode: 'NZD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: 'a22a64cb-364e-43fa-9a1f-bb2cd1f4adde',
                    Reference: 'ref/cheque',
                    Amount: 913.55,
                    BankAmount: 913.55,
                  },
                  {
                    Invoice: {
                      InvoiceID: '30a87092-31b5-4a2c-831e-327486533dd2',
                      CurrencyCode: 'AUD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: '6e20be79-32d8-4ae1-978e-f76d9b245c02',
                    Amount: 495,
                    BankAmount: 540,
                  },
                  {
                    Invoice: {
                      InvoiceID: '86d6e00f-ef56-49f7-9a54-796ccd5ca057',
                      CurrencyCode: 'NZD',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                    PaymentID: '4ba761b8-5940-4a3f-bcdf-7775adb00332',
                    Amount: 3080,
                    BankAmount: 3080,
                  },
                ],
                Type: 'RECBATCH',
                Status: 'AUTHORISED',
                TotalAmount: 4533.55,
                UpdatedDateUTC: '/Date(1538525239370+0000)/',
                IsReconciled: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postBatchPaymentsBatchPaymentIDRoute = createRoute({
  method: 'post',
  path: '/BatchPayments/{BatchPaymentID}',
  tags: ['Accounting'],
  summary: 'Updates a specific batch payment for invoices and credit notes',
  operationId: 'deleteBatchPaymentByUrlParam',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ BatchPaymentID: BatchPaymentIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: BatchPaymentDeleteByUrlParamSchema,
          example: { Status: 'DELETED' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type BatchPayments array for updated BatchPayment',
      content: {
        'application/json': {
          schema: BatchPaymentsSchema,
          example: {
            Id: 'ee23328c-4a8b-4ee7-8fb6-9796ffab9cb0',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1583945852489)/',
            BatchPayments: [
              {
                Account: { AccountID: 'efb6e3a4-3156-4cee-bfe1-a282a3cc1d8f', CurrencyCode: 'NZD' },
                BatchPaymentID: 'b649632e-2782-4c74-95a5-d994d7140ed9',
                DateString: '2022-08-01T00:00:00',
                Date: '/Date(1659312000000+0000)/',
                Payments: [],
                Type: 'PAYBATCH',
                Status: 'DELETED',
                TotalAmount: 18,
                UpdatedDateUTC: '/Date(1659377631813+0000)/',
                IsReconciled: false,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getBatchPaymentsBatchPaymentIDHistoryRoute = createRoute({
  method: 'get',
  path: '/BatchPayments/{BatchPaymentID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history from a specific batch payment',
  operationId: 'getBatchPaymentHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BatchPaymentID: BatchPaymentIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of HistoryRecords array of 0 to N HistoryRecord',
      content: {
        'application/json': {
          schema: HistoryRecordsSchema,
          example: {
            Id: 'c58e2f9c-baad-42a4-8bb7-f32b6f88fa04',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550898452503)/',
            HistoryRecords: [
              {
                Changes: 'Approved',
                DateUTCString: '2017-11-28T18:29:52',
                DateUTC: '/Date(1511893792813+0000)/',
                User: 'Buzz Lightyear',
                Details: '',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putBatchPaymentsBatchPaymentIDHistoryRoute = createRoute({
  method: 'put',
  path: '/BatchPayments/{BatchPaymentID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific batch payment',
  operationId: 'createBatchPaymentHistoryRecord',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ BatchPaymentID: BatchPaymentIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: {
    200: {
      description:
        'Success - return response of type HistoryRecords array of HistoryRecord objects',
      content: {
        'application/json': {
          schema: HistoryRecordsSchema,
          example: {
            Id: 'd7525479-3392-44c0-bb37-ff4a0b5df5bd',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550899400362)/',
            HistoryRecords: [
              {
                DateUTCString: '2019-02-23T05:23:20',
                DateUTC: '/Date(1550899400362)/',
                Details: 'Hello World',
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getBankTransactionsRoute = createRoute({
  method: 'get',
  path: '/BankTransactions',
  tags: ['Accounting'],
  summary: 'Retrieves any spent or received money transactions',
  operationId: 'getBankTransactions',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="AUTHORISED"',
            'x-example-java':
              'Status==&quot;&apos; + BankTransaction.StatusEnum.AUTHORISED + &apos;&quot;',
            'x-example-csharp': 'Status==\\"AUTHORISED\\"',
            'x-example-php':
              'Status==&quot;&apos; . XeroAPI\\XeroPHP\\Models\\Accounting\\BankTransaction::STATUS_AUTHORISED . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::BankTransaction::AUTHORISED}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Type ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Up to 100 bank transactions will be returned in a single API call with line items details',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      unitdp: UnitdpParamsSchema,
      pageSize: PageSizeParamsSchema,
      References: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'References',
            'x-snake': 'references',
            description: 'Filter by a comma-separated list of References',
            style: 'form',
            explode: false,
            example: '&quot;Ref1&quot;, &quot;Ref2&quot;',
            'x-example-java': 'Arrays.asList("Ref1","Ref2")',
            'x-example-php': '&quot;Ref1&quot;, &quot;Ref2&quot;',
            'x-example-csharp': 'new List&lt;string&gt;{&quot;Ref1&quot;,&quot;Ref2&quot;}',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type BankTransactions array with 0 to n BankTransaction',
      content: {
        'application/json': {
          schema: BankTransactionsSchema,
          example: {
            Id: '18e7e80c-5dca-4a57-974e-8b572cc5efe8',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551212901659)/',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 3 },
            BankTransactions: [
              {
                BankTransactionID: 'db54aab0-ad40-4ced-bcff-0940ba20db2c',
                BankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Code: '088',
                  Name: 'Business Wells Fargo',
                },
                BatchPayment: {
                  Account: { AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9' },
                  BatchPaymentID: 'b54aa50c-794c-461b-89d1-846e1b84d9c0',
                  Date: '/Date(1476316800000+0000)/',
                  Type: 'RECBATCH',
                  Status: 'AUTHORISED',
                  TotalAmount: '12.00',
                  UpdatedDateUTC: '/Date(1476392487037+0000)/',
                  IsReconciled: 'false',
                },
                Type: 'RECEIVE',
                IsReconciled: false,
                PrepaymentID: 'cb62750f-b49c-464b-a45b-e2e2c514c8a9',
                HasAttachments: true,
                Contact: {
                  ContactID: '9c2c64de-12c9-4167-b503-e2c0e1aa1f49',
                  Name: 'sam',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2016-10-13T00:00:00',
                Date: '/Date(1476316800000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [],
                SubTotal: 10,
                TotalTax: 0,
                Total: 10,
                UpdatedDateUTC: '/Date(1476389616437+0000)/',
                CurrencyCode: 'USD',
              },
              {
                BankTransactionID: '29a69c45-64ca-4805-a1cc-34990de837b3',
                BankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Code: '088',
                  Name: 'Business Wells Fargo',
                },
                Type: 'SPEND-OVERPAYMENT',
                IsReconciled: false,
                OverpaymentID: '7d457db3-3b0a-47e9-8b79-81252a7bcdcb',
                HasAttachments: false,
                Contact: {
                  ContactID: '9c2c64de-12c9-4167-b503-e2c0e1aa1f49',
                  Name: 'sam',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2016-10-13T00:00:00',
                Date: '/Date(1476316800000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'NoTax',
                LineItems: [],
                SubTotal: 9,
                TotalTax: 0,
                Total: 9,
                UpdatedDateUTC: '/Date(1476389930500+0000)/',
                CurrencyCode: 'USD',
              },
              {
                BankTransactionID: '0b89bf5c-d40b-4514-96be-36a739fb0188',
                BankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Code: '088',
                  Name: 'Business Wells Fargo',
                },
                Type: 'SPEND-OVERPAYMENT',
                IsReconciled: false,
                OverpaymentID: 'bf9b5f33-c0d6-4182-84a2-40848023e5a1',
                HasAttachments: false,
                Contact: {
                  ContactID: '9c2c64de-12c9-4167-b503-e2c0e1aa1f49',
                  Name: 'sam',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2016-10-13T00:00:00',
                Date: '/Date(1476316800000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'NoTax',
                LineItems: [],
                SubTotal: 8,
                TotalTax: 0,
                Total: 8,
                UpdatedDateUTC: '/Date(1476392487037+0000)/',
                CurrencyCode: 'USD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putBankTransactionsRoute = createRoute({
  method: 'put',
  path: '/BankTransactions',
  tags: ['Accounting'],
  summary: 'Creates one or more spent or received money transaction',
  operationId: 'createBankTransactions',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema, unitdp: UnitdpParamsSchema }),
    body: {
      description: 'BankTransactions with an array of BankTransaction objects in body of request',
      content: {
        'application/json': {
          schema: BankTransactionsSchema,
          example: {
            bankTransactions: [
              {
                type: 'BankTransaction.TypeEnum.SPEND',
                contact: { contactID: '00000000-0000-0000-0000-000000000000' },
                lineItems: [
                  { description: 'Foobar', quantity: 1, unitAmount: 20, accountCode: '000' },
                ],
                bankAccount: { code: '000' },
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type BankTransactions array with new BankTransaction',
      content: {
        'application/json': {
          schema: BankTransactionsSchema,
          example: {
            Id: '5bc1d776-3c7f-4fe8-9b2d-09e747077a88',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551213568047)/',
            BankTransactions: [
              {
                BankTransactionID: '1289c190-e46d-434b-9628-463ffdb52f00',
                BankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Code: '088',
                  Name: 'Business Wells Fargo',
                },
                Type: 'SPEND',
                Reference: '',
                IsReconciled: false,
                CurrencyRate: 1,
                Contact: {
                  ContactID: '5cc8cf28-567e-4d43-b287-687cfcaec47c',
                  ContactStatus: 'ACTIVE',
                  Name: 'Katherine Warren',
                  FirstName: 'Katherine',
                  LastName: 'Warren',
                  EmailAddress: 'kat.warren@clampett.com',
                  BankAccountDetails: '',
                  Addresses: [
                    { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                    {
                      AddressType: 'POBOX',
                      AddressLine1: '',
                      AddressLine2: '',
                      AddressLine3: '',
                      AddressLine4: '',
                      City: 'Palo Alto',
                      Region: 'CA',
                      PostalCode: '94020',
                      Country: 'United States',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '847-1294',
                      PhoneAreaCode: '(626)',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '',
                      PhoneAreaCode: '',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1503348544227+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-02-26T00:00:00',
                Date: '/Date(1551139200000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Inclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'TAX001',
                    TaxAmount: 1.74,
                    LineAmount: 20,
                    AccountCode: '400',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: 'd2a06879-da49-4d6c-83b5-72a93a523ec6',
                    AccountID: 'ebd06280-af70-4bed-97c6-7451a454ad85',
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 18.26,
                TotalTax: 1.74,
                Total: 20,
                UpdatedDateUTC: '/Date(1551213567813+0000)/',
                CurrencyCode: 'USD',
                StatusAttributeString: 'ERROR',
                ValidationErrors: [
                  {
                    Message:
                      'The Contact must contain at least 1 of the following elements to identify the contact: Name, ContactID, ContactNumber',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const postBankTransactionsRoute = createRoute({
  method: 'post',
  path: '/BankTransactions',
  tags: ['Accounting'],
  summary: 'Updates or creates one or more spent or received money transaction',
  operationId: 'updateOrCreateBankTransactions',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema, unitdp: UnitdpParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: BankTransactionsSchema,
          example: {
            BankTransactions: [
              {
                Type: 'SPEND',
                Contact: { ContactID: '00000000-0000-0000-0000-000000000000' },
                Lineitems: [
                  { Description: 'Foobar', Quantity: 1, UnitAmount: 20, AccountCode: '400' },
                ],
                BankAccount: { Code: '088' },
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type BankTransactions array with new BankTransaction',
      content: {
        'application/json': {
          schema: BankTransactionsSchema,
          example: {
            Id: '5bc1d776-3c7f-4fe8-9b2d-09e747077a88',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551213568047)/',
            BankTransactions: [
              {
                BankTransactionID: '1289c190-e46d-434b-9628-463ffdb52f00',
                BankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Code: '088',
                  Name: 'Business Wells Fargo',
                },
                Type: 'SPEND',
                Reference: '',
                IsReconciled: false,
                CurrencyRate: 1,
                Contact: {
                  ContactID: '5cc8cf28-567e-4d43-b287-687cfcaec47c',
                  ContactStatus: 'ACTIVE',
                  Name: 'Katherine Warren',
                  FirstName: 'Katherine',
                  LastName: 'Warren',
                  EmailAddress: 'kat.warren@clampett.com',
                  BankAccountDetails: '',
                  Addresses: [
                    { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                    {
                      AddressType: 'POBOX',
                      AddressLine1: '',
                      AddressLine2: '',
                      AddressLine3: '',
                      AddressLine4: '',
                      City: 'Palo Alto',
                      Region: 'CA',
                      PostalCode: '94020',
                      Country: 'United States',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '847-1294',
                      PhoneAreaCode: '(626)',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '',
                      PhoneAreaCode: '',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1503348544227+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-02-26T00:00:00',
                Date: '/Date(1551139200000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Inclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'TAX001',
                    TaxAmount: 1.74,
                    LineAmount: 20,
                    AccountCode: '400',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: 'd2a06879-da49-4d6c-83b5-72a93a523ec6',
                    AccountID: 'ebd06280-af70-4bed-97c6-7451a454ad85',
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 18.26,
                TotalTax: 1.74,
                Total: 20,
                UpdatedDateUTC: '/Date(1551213567813+0000)/',
                CurrencyCode: 'USD',
                StatusAttributeString: 'ERROR',
                ValidationErrors: [
                  {
                    Message:
                      'The Contact must contain at least 1 of the following elements to identify the contact: Name, ContactID, ContactNumber',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getBankTransactionsBankTransactionIDRoute = createRoute({
  method: 'get',
  path: '/BankTransactions/{BankTransactionID}',
  tags: ['Accounting'],
  summary:
    'Retrieves a single spent or received money transaction by using a unique bank transaction Id',
  operationId: 'getBankTransaction',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BankTransactionID: BankTransactionIDParamsSchema }),
    query: z.object({ unitdp: UnitdpParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type BankTransactions array with a specific BankTransaction',
      content: {
        'application/json': {
          schema: BankTransactionsSchema,
          example: {
            Id: '612e204d-21ab-469b-ac84-afe0697b4461',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551212902962)/',
            BankTransactions: [
              {
                BankTransactionID: 'db54aab0-ad40-4ced-bcff-0940ba20db2c',
                BankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Code: '088',
                  Name: 'Business Wells Fargo',
                },
                BatchPayment: {
                  Account: { AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9' },
                  BatchPaymentID: 'b54aa50c-794c-461b-89d1-846e1b84d9c0',
                  Date: '/Date(1476316800000+0000)/',
                  Type: 'RECBATCH',
                  Status: 'AUTHORISED',
                  TotalAmount: '12.00',
                  UpdatedDateUTC: '/Date(1476392487037+0000)/',
                  IsReconciled: 'false',
                },
                Type: 'RECEIVE',
                IsReconciled: false,
                CurrencyRate: 1,
                PrepaymentID: 'cb62750f-b49c-464b-a45b-e2e2c514c8a9',
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '45dd3143-9856-42d2-9a6c-53814f67a33e',
                    FileName: 'sample2.jpg',
                    Url: 'https://api.xero.com/api.xro/2.0/banktransaction/db54aab0-ad40-4ced-bcff-0940ba20db2c/Attachments/sample2.jpg',
                    MimeType: 'image/jpg',
                    ContentLength: 2878711,
                  },
                ],
                Contact: {
                  ContactID: '9c2c64de-12c9-4167-b503-e2c0e1aa1f49',
                  ContactStatus: 'ACTIVE',
                  Name: 'sam',
                  EmailAddress: '',
                  BankAccountDetails: '',
                  Addresses: [
                    { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                    { AddressType: 'POBOX', City: '', Region: '', PostalCode: '', Country: '' },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '',
                      PhoneAreaCode: '',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '',
                      PhoneAreaCode: '',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1518821703467+0000)/',
                  ContactGroups: [],
                  DefaultCurrency: 'USD',
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2016-10-13T00:00:00',
                Date: '/Date(1476316800000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'hello',
                    UnitAmount: 10,
                    TaxType: 'OUTPUT',
                    TaxAmount: 0,
                    LineAmount: 10,
                    AccountCode: '400',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '40bec527-a744-4149-96c5-0ab643b51158',
                    AccountID: 'ebd06280-af70-4bed-97c6-7451a454ad85',
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 10,
                TotalTax: 0,
                Total: 10,
                UpdatedDateUTC: '/Date(1476389616437+0000)/',
                CurrencyCode: 'USD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postBankTransactionsBankTransactionIDRoute = createRoute({
  method: 'post',
  path: '/BankTransactions/{BankTransactionID}',
  tags: ['Accounting'],
  summary: 'Updates a single spent or received money transaction',
  operationId: 'updateBankTransaction',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ BankTransactionID: BankTransactionIDParamsSchema }),
    query: z.object({ unitdp: UnitdpParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: BankTransactionsSchema,
          example: {
            BankTransactions: [
              {
                Type: 'SPEND',
                Contact: {
                  ContactID: '00000000-0000-0000-0000-000000000000',
                  ContactStatus: 'ACTIVE',
                  Name: 'Buzz Lightyear',
                  FirstName: 'Buzz',
                  LastName: 'Lightyear',
                  EmailAddress: 'buzz.Lightyear@email.com',
                  ContactPersons: [],
                  BankAccountDetails: '',
                  Addresses: [
                    { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                    {
                      AddressType: 'POBOX',
                      AddressLine1: '',
                      AddressLine2: '',
                      AddressLine3: '',
                      AddressLine4: '',
                      City: 'Palo Alto',
                      Region: 'CA',
                      PostalCode: '94020',
                      Country: 'United States',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '847-1294',
                      PhoneAreaCode: '(626)',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '',
                      PhoneAreaCode: '',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '2017-08-21T13:49:04.227-07:00',
                  ContactGroups: [],
                },
                Lineitems: [],
                BankAccount: {
                  Code: '088',
                  Name: 'Business Wells Fargo',
                  AccountID: '00000000-0000-0000-0000-000000000000',
                },
                IsReconciled: false,
                Date: '2019-02-25',
                Reference: 'You just updated',
                CurrencyCode: 'USD',
                CurrencyRate: 1,
                Status: 'AUTHORISED',
                LineAmountTypes: 'Inclusive',
                TotalTax: 1.74,
                BankTransactionID: '00000000-0000-0000-0000-000000000000',
                UpdatedDateUTC: '2019-02-26T12:39:27.813-08:00',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type BankTransactions array with updated BankTransaction',
      content: {
        'application/json': {
          schema: BankTransactionsSchema,
          example: {
            Id: 'f2c7f037-96fc-49bd-8f59-d3c7bfdd4746',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551213568875)/',
            BankTransactions: [
              {
                BankTransactionID: '1289c190-e46d-434b-9628-463ffdb52f00',
                BankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Code: '088',
                  Name: 'Business Wells Fargo',
                },
                Type: 'SPEND',
                Reference: 'You just updated',
                IsReconciled: false,
                CurrencyRate: 1,
                HasAttachments: false,
                Attachments: [],
                Contact: {
                  ContactID: '5cc8cf28-567e-4d43-b287-687cfcaec47c',
                  ContactStatus: 'ACTIVE',
                  Name: 'Katherine Warren',
                  FirstName: 'Katherine',
                  LastName: 'Warren',
                  EmailAddress: 'kat.warren@clampett.com',
                  BankAccountDetails: '',
                  Addresses: [
                    { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                    {
                      AddressType: 'POBOX',
                      AddressLine1: '',
                      AddressLine2: '',
                      AddressLine3: '',
                      AddressLine4: '',
                      City: 'Palo Alto',
                      Region: 'CA',
                      PostalCode: '94020',
                      Country: 'United States',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '847-1294',
                      PhoneAreaCode: '(626)',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '',
                      PhoneAreaCode: '',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1503348544227+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-02-25T00:00:00',
                Date: '/Date(1551052800000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Inclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'TAX001',
                    TaxAmount: 1.74,
                    LineAmount: 20,
                    AccountCode: '400',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: 'd2a06879-da49-4d6c-83b5-72a93a523ec6',
                    AccountID: 'ebd06280-af70-4bed-97c6-7451a454ad85',
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 18.26,
                TotalTax: 1.74,
                Total: 20,
                UpdatedDateUTC: '/Date(1551213568733+0000)/',
                CurrencyCode: 'USD',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getBankTransactionsBankTransactionIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/BankTransactions/{BankTransactionID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves any attachments from a specific bank transactions',
  operationId: 'getBankTransactionAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BankTransactionID: BankTransactionIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array with 0 to n Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'c50798e1-29e9-4a30-a452-bb6e42e400c8',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551303999577)/',
            Attachments: [
              {
                AttachmentID: '4508a692-e52c-4ad8-a138-2f13e22bf57b',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/BankTransactions/db54aab0-ad40-4ced-bcff-0940ba20db2c/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
              {
                AttachmentID: '45dd3143-9856-42d2-9a6c-53814f67a33e',
                FileName: 'sample2.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/BankTransactions/db54aab0-ad40-4ced-bcff-0940ba20db2c/Attachments/sample2.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getBankTransactionsBankTransactionIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/BankTransactions/{BankTransactionID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary:
    'Retrieves specific attachments from a specific BankTransaction using a unique attachment Id',
  operationId: 'getBankTransactionAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      BankTransactionID: BankTransactionIDParamsSchema,
      AttachmentID: AttachmentIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for BankTransaction as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getBankTransactionsBankTransactionIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/BankTransactions/{BankTransactionID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment from a specific bank transaction by filename',
  operationId: 'getBankTransactionAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      BankTransactionID: BankTransactionIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for BankTransaction as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putBankTransactionsBankTransactionIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/BankTransactions/{BankTransactionID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Creates an attachment for a specific bank transaction by filename',
  operationId: 'createBankTransactionAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      BankTransactionID: BankTransactionIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of Attachments array of Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '572ad2fe-8c23-45aa-82f9-864485327685',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551286166630)/',
            Attachments: [
              {
                AttachmentID: '4508a692-e52c-4ad8-a138-2f13e22bf57b',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/BankTransactions/db54aab0-ad40-4ced-bcff-0940ba20db2c/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postBankTransactionsBankTransactionIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/BankTransactions/{BankTransactionID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Updates a specific attachment from a specific bank transaction by filename',
  operationId: 'updateBankTransactionAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      BankTransactionID: BankTransactionIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of Attachments array of Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '572ad2fe-8c23-45aa-82f9-864485327685',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551286166630)/',
            Attachments: [
              {
                AttachmentID: '4508a692-e52c-4ad8-a138-2f13e22bf57b',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/BankTransactions/db54aab0-ad40-4ced-bcff-0940ba20db2c/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getBankTransactionsBankTransactionIDHistoryRoute = createRoute({
  method: 'get',
  path: '/BankTransactions/{BankTransactionID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history from a specific bank transaction using a unique bank transaction Id',
  operationId: 'getBankTransactionsHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BankTransactionID: BankTransactionIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putBankTransactionsBankTransactionIDHistoryRoute = createRoute({
  method: 'put',
  path: '/BankTransactions/{BankTransactionID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific bank transactions',
  operationId: 'createBankTransactionHistoryRecord',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ BankTransactionID: BankTransactionIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse, 400: _400ErrorResponse },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getBankTransfersRoute = createRoute({
  method: 'get',
  path: '/BankTransfers',
  tags: ['Accounting'],
  summary: 'Retrieves all bank transfers',
  operationId: 'getBankTransfers',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'HasAttachments==true',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Amount ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeDeleted',
            'x-snake': 'include_deleted',
            description:
              'e.g. includeDeleted=true - Bank transfers with a status of DELETED will be included in the response',
            example: true,
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of BankTransfers array of 0 to N BankTransfer',
      content: {
        'application/json': {
          schema: BankTransfersSchema,
          example: {
            Id: 'dfc0d130-9007-4a98-a5ef-6f01700f18e2',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551311318988)/',
            BankTransfers: [
              {
                BankTransferID: '6221458a-ef7a-4d5f-9b1c-1b96ce03833c',
                CreatedDateUTCString: '2016-10-17T20:46:01',
                CreatedDateUTC: '/Date(1476737161140+0000)/',
                DateString: '2016-11-12T21:10:00',
                Date: '/Date(1478985000000+0000)/',
                Status: 'AUTHORISED',
                FromBankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Name: 'Business Wells Fargo',
                },
                ToBankAccount: {
                  AccountID: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa',
                  Name: 'My Savings',
                },
                Amount: 20,
                FromBankTransactionID: 'a3eca480-bc04-4292-9bbd-5c57b8ba12b4',
                ToBankTransactionID: '4ca13f40-f3a0-4530-a442-a600f5696118',
                FromIsReconciled: true,
                ToIsReconciled: true,
                Reference: 'Sub 098801',
                HasAttachments: true,
                FromTracking: [
                  {
                    TrackingCategoryID: 'e2f2f732-e92a-4f3a-9c4d-ee4da0182a13',
                    TrackingOptionID: 'cd0a4b7e-3c6b-4b3c-8e2a-1f2d3c4b5a69',
                    Name: 'Region',
                    Option: 'North',
                  },
                ],
                ToTracking: [
                  {
                    TrackingCategoryID: 'e2f2f732-e92a-4f3a-9c4d-ee4da0182a13',
                    TrackingOptionID: '9f8e7d6c-5b4a-3c2d-1e0f-a9b8c7d6e5f4',
                    Name: 'Region',
                    Option: 'South',
                  },
                ],
              },
              {
                BankTransferID: '9f0153d5-617c-4903-887b-3875807aa27a',
                CreatedDateUTCString: '2016-10-21T23:28:42',
                CreatedDateUTC: '/Date(1477092522333+0000)/',
                DateString: '2016-10-19T20:10:00',
                Date: '/Date(1476907800000+0000)/',
                Status: 'AUTHORISED',
                FromBankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Name: 'Business Wells Fargo',
                },
                ToBankAccount: {
                  AccountID: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa',
                  Name: 'My Savings',
                },
                Amount: 20,
                FromBankTransactionID: 'cb74287e-5682-4973-b354-93e2c7a836d3',
                ToBankTransactionID: '4c48ba6c-f318-4405-aee6-b5efa2c70f55',
                FromIsReconciled: false,
                ToIsReconciled: false,
                Reference: 'Sub 098801',
                HasAttachments: false,
                FromTracking: [],
                ToTracking: [],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putBankTransfersRoute = createRoute({
  method: 'put',
  path: '/BankTransfers',
  tags: ['Accounting'],
  summary: 'Creates a bank transfer',
  operationId: 'createBankTransfer',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'BankTransfers with array of BankTransfer objects in request body',
      content: {
        'application/json': {
          schema: BankTransfersSchema,
          example: {
            BankTransfers: [
              {
                FromBankAccount: {
                  Code: '090',
                  Name: 'My Savings',
                  AccountID: '00000000-0000-0000-0000-000000000000',
                  Type: 'BANK',
                  BankAccountNumber: '123455',
                  Status: 'ACTIVE',
                  BankAccountType: 'BANK',
                  CurrencyCode: 'USD',
                  TaxType: 'NONE',
                  EnablePaymentsToAccount: false,
                  ShowInExpenseClaims: false,
                  Class: 'ASSET',
                  ReportingCode: 'ASS',
                  ReportingCodeName: 'Assets',
                  HasAttachments: false,
                  UpdatedDateUTC: '2016-10-17T13:45:33.993-07:00',
                },
                ToBankAccount: {
                  Code: '088',
                  Name: 'Business Wells Fargo',
                  AccountID: '00000000-0000-0000-0000-000000000000',
                  Type: 'BANK',
                  BankAccountNumber: '123455',
                  Status: 'ACTIVE',
                  BankAccountType: 'BANK',
                  CurrencyCode: 'USD',
                  TaxType: 'NONE',
                  EnablePaymentsToAccount: false,
                  ShowInExpenseClaims: false,
                  Class: 'ASSET',
                  ReportingCode: 'ASS',
                  ReportingCodeName: 'Assets',
                  HasAttachments: false,
                  UpdatedDateUTC: '2016-06-03T08:31:14.517-07:00',
                },
                Amount: '50.00',
                FromIsReconciled: true,
                ToIsReconciled: true,
                Reference: 'Sub 098801',
                FromTracking: [
                  {
                    TrackingCategoryID: 'e2f2f732-e92a-4f3a-9c4d-ee4da0182a13',
                    TrackingOptionID: 'cd0a4b7e-3c6b-4b3c-8e2a-1f2d3c4b5a69',
                  },
                ],
                ToTracking: [
                  {
                    TrackingCategoryID: 'e2f2f732-e92a-4f3a-9c4d-ee4da0182a13',
                    TrackingOptionID: '9f8e7d6c-5b4a-3c2d-1e0f-a9b8c7d6e5f4',
                  },
                ],
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of BankTransfers array of one BankTransfer',
      content: {
        'application/json': {
          schema: BankTransfersSchema,
          example: {
            Id: 'ae767b68-affd-4e17-bac0-83eaf1854dcd',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551311317475)/',
            BankTransfers: [
              {
                BankTransferID: '76eea4b6-f026-464c-b6f3-5fb39a196145',
                DateString: '2019-02-27T00:00:00',
                Date: '/Date(1551225600000+0000)/',
                Status: 'AUTHORISED',
                FromBankAccount: {
                  AccountID: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa',
                  Code: '090',
                  Name: 'My Savings',
                },
                ToBankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Code: '088',
                  Name: 'Business Wells Fargo',
                },
                Amount: 50,
                FromBankTransactionID: 'e4059952-5acb-4a56-b076-53fad85f2930',
                ToBankTransactionID: '88e4ac17-293b-4e5a-8d8b-3ce3a0b1ee17',
                FromIsReconciled: true,
                ToIsReconciled: true,
                Reference: 'Sub 098801',
                CurrencyRate: 1,
                FromTracking: [
                  {
                    TrackingCategoryID: 'e2f2f732-e92a-4f3a-9c4d-ee4da0182a13',
                    TrackingOptionID: 'cd0a4b7e-3c6b-4b3c-8e2a-1f2d3c4b5a69',
                    Name: 'Region',
                    Option: 'North',
                  },
                ],
                ToTracking: [
                  {
                    TrackingCategoryID: 'e2f2f732-e92a-4f3a-9c4d-ee4da0182a13',
                    TrackingOptionID: '9f8e7d6c-5b4a-3c2d-1e0f-a9b8c7d6e5f4',
                    Name: 'Region',
                    Option: 'South',
                  },
                ],
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const postBankTransfersRoute = createRoute({
  method: 'post',
  path: '/BankTransfers',
  tags: ['Accounting'],
  summary: 'Deletes one or more bank transfers',
  operationId: 'deleteBankTransfers',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'BankTransfers with array of BankTransfer objects in request body',
      content: {
        'application/json': {
          schema: BankTransfersDeleteSchema,
          example: {
            BankTransfers: [
              { BankTransferID: '6221458a-ef7a-4d5f-9b1c-1b96ce03833c', Status: 'DELETED' },
              { BankTransferID: '9f0153d5-617c-4903-887b-3875807aa27a', Status: 'DELETED' },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of BankTransfers array of deleted BankTransfer',
      content: {
        'application/json': {
          schema: BankTransfersSchema,
          example: {
            Id: 'dfc0d130-9007-4a98-a5ef-6f01700f18e2',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551311318988)/',
            BankTransfers: [
              {
                BankTransferID: '6221458a-ef7a-4d5f-9b1c-1b96ce03833c',
                Status: 'DELETED',
                FromBankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Name: 'Business Wells Fargo',
                },
                ToBankAccount: {
                  AccountID: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa',
                  Name: 'My Savings',
                },
                Amount: 20,
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getBankTransfersBankTransferIDRoute = createRoute({
  method: 'get',
  path: '/BankTransfers/{BankTransferID}',
  tags: ['Accounting'],
  summary: 'Retrieves specific bank transfers by using a unique bank transfer Id',
  operationId: 'getBankTransfer',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BankTransferID: BankTransferIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of BankTransfers array with one BankTransfer',
      content: {
        'application/json': {
          schema: BankTransfersSchema,
          example: {
            Id: '1a5fa46d-5ece-4ef2-89b1-77c293b5d833',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551311320368)/',
            BankTransfers: [
              {
                BankTransferID: '6221458a-ef7a-4d5f-9b1c-1b96ce03833c',
                CreatedDateUTCString: '2016-10-17T20:46:01',
                CreatedDateUTC: '/Date(1476737161140+0000)/',
                DateString: '2016-11-12T21:10:00',
                Date: '/Date(1478985000000+0000)/',
                Status: 'AUTHORISED',
                FromBankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Code: '088',
                  Name: 'Business Wells Fargo',
                },
                ToBankAccount: {
                  AccountID: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa',
                  Code: '090',
                  Name: 'My Savings',
                },
                Amount: 20,
                FromBankTransactionID: 'a3eca480-bc04-4292-9bbd-5c57b8ba12b4',
                ToBankTransactionID: '4ca13f40-f3a0-4530-a442-a600f5696118',
                FromIsReconciled: false,
                ToIsReconciled: false,
                Reference: 'Sub 098801',
                CurrencyRate: 1,
                HasAttachments: true,
                FromTracking: [
                  {
                    TrackingCategoryID: 'e2f2f732-e92a-4f3a-9c4d-ee4da0182a13',
                    TrackingOptionID: 'cd0a4b7e-3c6b-4b3c-8e2a-1f2d3c4b5a69',
                    Name: 'Region',
                    Option: 'North',
                  },
                ],
                ToTracking: [
                  {
                    TrackingCategoryID: 'e2f2f732-e92a-4f3a-9c4d-ee4da0182a13',
                    TrackingOptionID: '9f8e7d6c-5b4a-3c2d-1e0f-a9b8c7d6e5f4',
                    Name: 'Region',
                    Option: 'South',
                  },
                ],
                Attachments: [
                  {
                    AttachmentID: 'e05a6fd8-0e47-47a9-9799-b809c8267260',
                    FileName: 'HelloWorld.jpg',
                    Url: 'https://api.xero.com/api.xro/2.0/banktransfer/6221458a-ef7a-4d5f-9b1c-1b96ce03833c/Attachments/HelloWorld.jpg',
                    MimeType: 'image/jpg',
                    ContentLength: 2878711,
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postBankTransfersBankTransferIDRoute = createRoute({
  method: 'post',
  path: '/BankTransfers/{BankTransferID}',
  tags: ['Accounting'],
  summary: 'Deletes a specific bank transfer',
  operationId: 'deleteBankTransfer',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ BankTransferID: BankTransferIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: BankTransferDeleteByUrlParamSchema,
          example: { Status: 'DELETED' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of BankTransfers array with one deleted BankTransfer',
      content: {
        'application/json': {
          schema: BankTransfersSchema,
          example: {
            Id: '1a5fa46d-5ece-4ef2-89b1-77c293b5d833',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551311320368)/',
            BankTransfers: [
              {
                BankTransferID: '6221458a-ef7a-4d5f-9b1c-1b96ce03833c',
                Status: 'DELETED',
                FromBankAccount: {
                  AccountID: '6f7594f2-f059-4d56-9e67-47ac9733bfe9',
                  Code: '088',
                  Name: 'Business Wells Fargo',
                },
                ToBankAccount: {
                  AccountID: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa',
                  Code: '090',
                  Name: 'My Savings',
                },
                Amount: 20,
                Reference: 'Sub 098801',
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getBankTransfersBankTransferIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/BankTransfers/{BankTransferID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves attachments from a specific bank transfer',
  operationId: 'getBankTransferAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BankTransferID: BankTransferIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of Attachments array of 0 to N Attachment for a Bank Transfer',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '5cb6b587-7b02-46b6-97fe-d8ad8f20321b',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551397557272)/',
            Attachments: [
              {
                AttachmentID: 'e05a6fd8-0e47-47a9-9799-b809c8267260',
                FileName: 'HelloWorld.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/BankTransfers/6221458a-ef7a-4d5f-9b1c-1b96ce03833c/Attachments/HelloWorld.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getBankTransfersBankTransferIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/BankTransfers/{BankTransferID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary:
    'Retrieves a specific attachment from a specific bank transfer using a unique attachment ID',
  operationId: 'getBankTransferAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      BankTransferID: BankTransferIDParamsSchema,
      AttachmentID: AttachmentIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'Success - return response of binary data from the Attachment to a Bank Transfer',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getBankTransfersBankTransferIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/BankTransfers/{BankTransferID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment on a specific bank transfer by file name',
  operationId: 'getBankTransferAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      BankTransferID: BankTransferIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'Success - return response of binary data from the Attachment to a Bank Transfer',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putBankTransfersBankTransferIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/BankTransfers/{BankTransferID}/Attachments/{FileName}',
  tags: ['Accounting'],
  operationId: 'createBankTransferAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      BankTransferID: BankTransferIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of Attachments array of 0 to N Attachment for a Bank Transfer',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'b73ba149-76a9-4e7c-a5c6-b9230022f416',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551397998372)/',
            Attachments: [
              {
                AttachmentID: '9478be4c-c707-48c1-b4a7-83d8eaf442b5',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/BankTransfers/6221458a-ef7a-4d5f-9b1c-1b96ce03833c/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postBankTransfersBankTransferIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/BankTransfers/{BankTransferID}/Attachments/{FileName}',
  tags: ['Accounting'],
  operationId: 'updateBankTransferAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      BankTransferID: BankTransferIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of Attachments array of 0 to N Attachment for a Bank Transfer',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'c7810140-19c2-4ff7-b3ec-b7e95ce7becf',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551398138226)/',
            Attachments: [
              {
                AttachmentID: '0851935c-c4c5-4de8-9247-ce22efde6f82',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/BankTransfers/6221458a-ef7a-4d5f-9b1c-1b96ce03833c/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getBankTransfersBankTransferIDHistoryRoute = createRoute({
  method: 'get',
  path: '/BankTransfers/{BankTransferID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history from a specific bank transfer using a unique bank transfer Id',
  operationId: 'getBankTransferHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BankTransferID: BankTransferIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putBankTransfersBankTransferIDHistoryRoute = createRoute({
  method: 'put',
  path: '/BankTransfers/{BankTransferID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific bank transfer',
  operationId: 'createBankTransferHistoryRecord',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ BankTransferID: BankTransferIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse, 400: _400ErrorResponse },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getBrandingThemesRoute = createRoute({
  method: 'get',
  path: '/BrandingThemes',
  tags: ['Accounting'],
  summary: 'Retrieves all the branding themes',
  operationId: 'getBrandingThemes',
  request: { headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'Success - return response of type BrandingThemes',
      content: {
        'application/json': {
          schema: BrandingThemesSchema,
          example: {
            Id: 'd1a1beea-bdfe-4ee4-9dbc-27226a26cd68',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550881711906)/',
            BrandingThemes: [
              {
                BrandingThemeID: 'dabc7637-62c1-4941-8a6e-ee44fa5090e7',
                Name: 'Standard',
                SortOrder: 0,
                CreatedDateUTC: '/Date(1464967643813+0000)/',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const getBrandingThemesBrandingThemeIDRoute = createRoute({
  method: 'get',
  path: '/BrandingThemes/{BrandingThemeID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific branding theme using a unique branding theme Id',
  operationId: 'getBrandingTheme',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BrandingThemeID: BrandingThemeIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type BrandingThemes with one BrandingTheme',
      content: {
        'application/json': {
          schema: BrandingThemesSchema,
          example: {
            Id: 'df671650-cf14-4a7f-b609-4166933719bc',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550881713071)/',
            BrandingThemes: [
              {
                BrandingThemeID: 'dabc7637-62c1-4941-8a6e-ee44fa5090e7',
                Name: 'Standard',
                SortOrder: 0,
                CreatedDateUTC: '/Date(1464967643813+0000)/',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const getBrandingThemesBrandingThemeIDPaymentServicesRoute = createRoute({
  method: 'get',
  path: '/BrandingThemes/{BrandingThemeID}/PaymentServices',
  tags: ['Accounting'],
  summary: 'Retrieves the payment services for a specific branding theme',
  operationId: 'getBrandingThemePaymentServices',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BrandingThemeID: BrandingThemeIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type PaymentServices array with 0 to N PaymentService',
      content: {
        'application/json': {
          schema: PaymentServicesSchema,
          example: {
            Id: 'bfd5adbe-0e92-48f0-8c5a-39072f6c4ed3',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551139339419)/',
            PaymentServices: [
              {
                PaymentServiceID: '8cc53aa4-ae01-45b9-b06c-69c42eeae61f',
                PaymentServiceName: 'Buzz Lightyear',
                PaymentServiceType: 'PayPal',
              },
              {
                PaymentServiceID: 'dede7858-14e3-4a46-bf95-4d4cc491e645',
                PaymentServiceName: 'ACME Payment',
                PaymentServiceUrl: 'https://www.payupnow.com/',
                PaymentServiceType: 'Custom',
                PayNowText: 'Pay Now',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['paymentservices'] }],
})

export const postBrandingThemesBrandingThemeIDPaymentServicesRoute = createRoute({
  method: 'post',
  path: '/BrandingThemes/{BrandingThemeID}/PaymentServices',
  tags: ['Accounting'],
  summary: 'Creates a new custom payment service for a specific branding theme',
  operationId: 'createBrandingThemePaymentServices',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ BrandingThemeID: BrandingThemeIDParamsSchema }),
    body: {
      description: 'PaymentServices array with PaymentService object in body of request',
      content: {
        'application/json': {
          schema: PaymentServicesSchema,
          example: {
            PaymentServices: [
              {
                PaymentServiceID: '54b3b4f6-0443-4fba-bcd1-61ec0c35ca55',
                PaymentServiceName: 'PayUpNow',
                PaymentServiceUrl: 'https://www.payupnow.com/',
                PaymentServiceType: 'Custom',
                PayNowText: 'Time To Pay',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type PaymentServices array with newly created PaymentService',
      content: {
        'application/json': {
          schema: PaymentServicesSchema,
          example: {
            Id: '918feecb-067a-4ed9-841b-571c04eaada3',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551139338915)/',
            PaymentServices: [
              {
                PaymentServiceID: '00000000-0000-0000-0000-000000000000',
                PaymentServiceName: 'ACME Payments',
                PaymentServiceUrl: 'https://www.payupnow.com/',
                PaymentServiceType: 'Custom',
                PayNowText: 'Pay Now',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['paymentservices'] }],
})

export const getBudgetsRoute = createRoute({
  method: 'get',
  path: '/Budgets',
  tags: ['Accounting'],
  summary: 'Retrieve a list of budgets',
  operationId: 'getBudgets',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      IDs: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'IDs',
            'x-snake': 'ids',
            description: 'Filter by BudgetID. Allows you to retrieve a specific individual budget.',
            style: 'form',
            explode: false,
            example: '&quot;00000000-0000-0000-0000-000000000000&quot;',
            'x-example-java': 'UUID.fromString("00000000-0000-0000-0000-000000000000")',
            'x-example-php': '&quot;00000000-0000-0000-0000-000000000000&quot;',
            'x-example-csharp': 'Guid.Parse("00000000-0000-0000-0000-000000000000");',
            schema: { type: 'string', items: { type: 'string', format: 'uuid' } },
            required: false,
          },
        }),
      DateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DateTo',
            'x-snake': 'date_to',
            description: 'Filter by start date',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      DateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DateFrom',
            'x-snake': 'date_from',
            description: 'Filter by end date',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Budgets array with 0 to N Budgets',
      content: {
        'application/json': {
          schema: BudgetsSchema,
          example: {
            Id: '04e93d48-e72f-4775-b7dd-15a041fab972',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551399323399)/',
            Budgets: [
              {
                BudgetID: '847da917-9565-466c-a9cd-3ecf7eb9d094',
                Status: 'APPROVED',
                Description: 'FY2021 budget',
                Type: 'TRACKING',
                UpdatedDateUTC: '/Date(1622138002077+0000)/',
                BudgetLines: [],
                Tracking: [],
              },
              {
                BudgetID: '93a4bab1-0021-4320-a2ec-c250528b4bc5',
                Status: 'APPROVED',
                Description: 'Overall Budget',
                Type: 'OVERALL',
                UpdatedDateUTC: '/Date(1622137786913+0000)/',
                BudgetLines: [],
                Tracking: [],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.budgets.read'] }],
})

export const getBudgetsBudgetIDRoute = createRoute({
  method: 'get',
  path: '/Budgets/{BudgetID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific budget, which includes budget lines',
  operationId: 'getBudget',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ BudgetID: BudgetIDParamsSchema }),
    query: z.object({
      DateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DateTo',
            'x-snake': 'date_to',
            description: 'Filter by start date',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      DateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DateFrom',
            'x-snake': 'date_from',
            description: 'Filter by end date',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Invoices array with specified Invoices',
      content: {
        'application/json': {
          schema: BudgetsSchema,
          example: {
            Id: '04e93d48-e72f-4775-b7dd-15a041fab972',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551399323399)/',
            Budgets: {
              BudgetID: 'c1d195d4-92aa-4abd-867a-7ac2f9d60500',
              Type: 'TRACKING',
              Description: 'Daniels Northern Budget',
              UpdatedDateUTC: '2017-08-14T01:18:26.74',
              Tracking: [
                {
                  TrackingCategoryID: 'e94ba240-3edf-4ef3-8317-10147b968f94',
                  Name: 'Region',
                  TrackingOptionID: 'e94ba240-3edf-4ef3-8317-10147b968f94',
                  Option: 'North',
                },
                {
                  TrackingCategoryID: 'd8580491-4167-4a81-9624-ad3bdd8e46ce',
                  Name: 'Salesperson',
                  TrackingOptionID: '9c24de87-a2b7-439d-a216-35d1af7bdec3',
                  Option: 'Daniel',
                },
              ],
              BudgetLines: [
                {
                  AccountID: '9c24de87-a2b7-439d-a216-35d1af7bdec3',
                  AccountCode: '200',
                  BudgetBalances: [
                    { Period: '2019-08', Amount: '1000', Notes: 'Sample note' },
                    { Period: '2019-09', Amount: '1050', Notes: '' },
                    { Period: '2019-10', Amount: '1102', Notes: '' },
                  ],
                },
                {
                  AccountID: '385f90ae-e798-4990-9b1c-db8eb8b735c2',
                  AccountCode: '420',
                  BudgetBalances: [
                    { Period: '2019-08', Amount: '500', Notes: '' },
                    { Period: '2019-09', Amount: '505', Notes: 'Special Month' },
                    { Period: '2019-10', Amount: '510', Notes: '' },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.budgets.read'] }],
})

export const getContactsRoute = createRoute({
  method: 'get',
  path: '/Contacts',
  tags: ['Accounting'],
  summary: 'Retrieves all contacts in a Xero organisation',
  operationId: 'getContacts',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'ContactStatus==&quot;ACTIVE&quot;',
            'x-example-csharp': 'ContactStatus==\\&quot;ACTIVE\\&quot;',
            'x-example-java':
              'ContactStatus==&quot;&apos; + Contact.ContactStatusEnum.ACTIVE + &apos;&quot;',
            'x-example-php':
              'ContactStatus==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\Contact::CONTACT_STATUS_ACTIVE . &apos;&quot;',
            'x-example-ruby': 'ContactStatus==#{XeroRuby::Accounting::Contact::ACTIVE}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Name ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      IDs: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'IDs',
            'x-snake': 'ids',
            description:
              'Filter by a comma separated list of ContactIDs. Allows you to retrieve a specific set of contacts in a single call.',
            style: 'form',
            explode: false,
            example: '&quot;00000000-0000-0000-0000-000000000000&quot;',
            'x-example-java':
              'Arrays.asList(UUID.fromString("00000000-0000-0000-0000-000000000000"))',
            'x-example-php': '&quot;00000000-0000-0000-0000-000000000000&quot;',
            'x-example-csharp':
              'new List&lt;Guid&gt;{Guid.Parse("00000000-0000-0000-0000-000000000000")};',
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description: 'e.g. page=1 - Up to 100 contacts will be returned in a single API call.',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      includeArchived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeArchived',
            'x-snake': 'include_archived',
            description:
              'e.g. includeArchived=true - Contacts with a status of ARCHIVED will be included in the response',
            example: true,
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      summaryOnly: SummaryOnlyParamsSchema,
      searchTerm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'searchTerm',
            'x-snake': 'search_term',
            description:
              'Search parameter that performs a case-insensitive text search across the Name, FirstName, LastName, ContactNumber and EmailAddress fields.',
            example: 'Joe Bloggs',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: PageSizeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Contacts array with 0 to N Contact',
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Id: '04e93d48-e72f-4775-b7dd-15a041fab972',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551399323399)/',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            Contacts: [
              {
                ContactID: '5cc8cf28-567e-4d43-b287-687cfcaec47c',
                ContactStatus: 'ACTIVE',
                Name: 'Katherine Warren',
                FirstName: 'Katherine',
                LastName: 'Warren',
                CompanyNumber: 'NumberBusiness1234',
                EmailAddress: 'kat.warren@clampett.com',
                BankAccountDetails: '',
                TaxNumber: '',
                TaxNumbeType: '',
                Addresses: [
                  { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                  {
                    AddressType: 'POBOX',
                    AddressLine1: '',
                    AddressLine2: '',
                    AddressLine3: '',
                    AddressLine4: '',
                    City: 'Palo Alto',
                    Region: 'CA',
                    PostalCode: '94020',
                    Country: 'United States',
                  },
                ],
                Phones: [
                  { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  {
                    PhoneType: 'DEFAULT',
                    PhoneNumber: '847-1294',
                    PhoneAreaCode: '(626)',
                    PhoneCountryCode: '',
                  },
                  { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  { PhoneType: 'MOBILE', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                ],
                UpdatedDateUTC: '/Date(1503348544227+0000)/',
                ContactGroups: [],
                IsSupplier: true,
                IsCustomer: true,
                SalesDefaultLineAmountType: 'INCLUSIVE',
                PurchasesDefaultLineAmountType: 'INCLUSIVE',
                Balances: {
                  AccountsReceivable: { Outstanding: 760, Overdue: 920 },
                  AccountsPayable: { Outstanding: 231.6, Overdue: 360 },
                },
                ContactPersons: [],
                HasAttachments: false,
                HasValidationErrors: false,
              },
              {
                ContactID: '3ec601ad-eddc-4ccb-a8ac-736e88293b1b',
                ContactStatus: 'ACTIVE',
                Name: 'Lisa Parker',
                FirstName: 'Lisa',
                LastName: 'Parker',
                EmailAddress: 'lparker@parkerandco.com',
                BankAccountDetails: '',
                TaxNumber: '',
                TaxNumbeType: '',
                Addresses: [
                  { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                  {
                    AddressType: 'POBOX',
                    AddressLine1: '',
                    AddressLine2: '',
                    AddressLine3: '',
                    AddressLine4: '',
                    City: 'Anchorage',
                    Region: 'AK',
                    PostalCode: '99501',
                    Country: 'United States',
                  },
                ],
                Phones: [
                  { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  {
                    PhoneType: 'DEFAULT',
                    PhoneNumber: '266-3583',
                    PhoneAreaCode: '(510)',
                    PhoneCountryCode: '',
                  },
                  { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  { PhoneType: 'MOBILE', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                ],
                UpdatedDateUTC: '/Date(1503348546760+0000)/',
                ContactGroups: [],
                IsSupplier: false,
                IsCustomer: false,
                ContactPersons: [],
                HasAttachments: false,
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.contacts', 'accounting.contacts.read'] }],
})

export const putContactsRoute = createRoute({
  method: 'put',
  path: '/Contacts',
  tags: ['Accounting'],
  summary: 'Creates multiple contacts (bulk) in a Xero organisation',
  operationId: 'createContacts',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'Contacts with an array of Contact objects to create in body of request',
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Contacts: [
              {
                ContactID: '3ff6d40c-af9a-40a3-89ce-3c1556a25591',
                ContactStatus: 'ACTIVE',
                Name: 'Foo9987',
                EmailAddress: 'sid32476@blah.com',
                BankAccountDetails: '',
                Addresses: [
                  { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                  { AddressType: 'POBOX', City: '', Region: '', PostalCode: '', Country: '' },
                ],
                Phones: [
                  {
                    PhoneType: 'DEFAULT',
                    PhoneNumber: '',
                    PhoneAreaCode: '',
                    PhoneCountryCode: '',
                  },
                  { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  {
                    PhoneType: 'MOBILE',
                    PhoneNumber: '555-1212',
                    PhoneAreaCode: '415',
                    PhoneCountryCode: '',
                  },
                ],
                UpdatedDateUTC: '/Date(1551399321043+0000)/',
                ContactGroups: [],
                IsSupplier: false,
                IsCustomer: false,
                SalesTrackingCategories: [],
                PurchasesTrackingCategories: [],
                PaymentTerms: {
                  Bills: { Day: 15, Type: 'OFCURRENTMONTH' },
                  Sales: { Day: 10, Type: 'DAYSAFTERBILLMONTH' },
                },
                ContactPersons: [],
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Contacts array with newly created Contact',
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Id: 'e997d6d7-6dad-4458-beb8-d9c1bf7f2edf',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551399321121)/',
            Contacts: [
              {
                ContactID: '3ff6d40c-af9a-40a3-89ce-3c1556a25591',
                ContactStatus: 'ACTIVE',
                CompanyNumber: 'NumberBusiness1234',
                Name: 'Foo9987',
                EmailAddress: 'sid32476@blah.com',
                BankAccountDetails: '',
                Addresses: [
                  { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                  { AddressType: 'POBOX', City: '', Region: '', PostalCode: '', Country: '' },
                ],
                Phones: [
                  {
                    PhoneType: 'DEFAULT',
                    PhoneNumber: '',
                    PhoneAreaCode: '',
                    PhoneCountryCode: '',
                  },
                  { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  {
                    PhoneType: 'MOBILE',
                    PhoneNumber: '555-1212',
                    PhoneAreaCode: '415',
                    PhoneCountryCode: '',
                  },
                ],
                UpdatedDateUTC: '/Date(1551399321043+0000)/',
                ContactGroups: [],
                IsSupplier: false,
                IsCustomer: false,
                SalesDefaultLineAmountType: 'INCLUSIVE',
                PurchasesDefaultLineAmountType: 'INCLUSIVE',
                SalesTrackingCategories: [],
                PurchasesTrackingCategories: [],
                PaymentTerms: {
                  Bills: { Day: 15, Type: 'OFCURRENTMONTH' },
                  Sales: { Day: 10, Type: 'DAYSAFTERBILLMONTH' },
                },
                ContactPersons: [],
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Validation Error - some data was incorrect returns response of type Error',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            ErrorNumber: 10,
            Type: 'ValidationException',
            Message: 'A validation exception occurred',
            Elements: [
              {
                ContactID: '00000000-0000-0000-0000-000000000000',
                AccountNumber: '12345-ABCD',
                Name: 'Buzz Lightyear',
                EmailAddress: 'buzzlightyear@email.com',
                AccountsReceivableTaxType: 'NONE',
                AccountsPayableTaxType: 'INPUT',
                Addresses: [
                  {
                    AddressType: 'STREET',
                    AddressLine1: '101 Green St',
                    AddressLine2: '5th floor',
                    City: 'San Francisco',
                    Region: 'CA',
                    PostalCode: '94041',
                    Country: 'US',
                    AttentionTo: 'Rod Drury',
                    ValidationErrors: [],
                  },
                ],
                Phones: [
                  {
                    PhoneType: 'MOBILE',
                    PhoneNumber: '555-1212',
                    PhoneAreaCode: '415',
                    ValidationErrors: [],
                  },
                ],
                ContactGroups: [],
                PaymentTerms: {
                  Bills: { Day: 15, Type: 'OFCURRENTMONTH', ValidationErrors: [] },
                  Sales: { Day: 10, Type: 'DAYSAFTERBILLMONTH', ValidationErrors: [] },
                },
                ContactPersons: [],
                HasValidationErrors: true,
                ValidationErrors: [
                  {
                    Message:
                      'The contact name Buzz Lightyear is already assigned to another contact. The contact name must be unique across all active contacts.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.contacts'] }],
})

export const postContactsRoute = createRoute({
  method: 'post',
  path: '/Contacts',
  tags: ['Accounting'],
  summary: 'Updates or creates one or more contacts in a Xero organisation',
  operationId: 'updateOrCreateContacts',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Contacts: [
              {
                Name: 'Bruce Banner',
                EmailAddress: 'hulk@avengers.com',
                Phones: [{ PhoneType: 'MOBILE', PhoneNumber: '555-1212', PhoneAreaCode: '415' }],
                PaymentTerms: {
                  Bills: { Day: 15, Type: 'OFCURRENTMONTH' },
                  Sales: { Day: 10, Type: 'DAYSAFTERBILLMONTH' },
                },
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Contacts array with newly created Contact',
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Id: 'e997d6d7-6dad-4458-beb8-d9c1bf7f2edf',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551399321121)/',
            Contacts: [
              {
                ContactID: '00000000-0000-0000-0000-000000000000',
                ContactStatus: 'ACTIVE',
                Name: 'Bruce Banner',
                CompanyNumber: 'NumberBusiness1234',
                EmailAddress: 'bruce@banner.com',
                BankAccountDetails: '',
                Addresses: [
                  { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                  { AddressType: 'POBOX', City: '', Region: '', PostalCode: '', Country: '' },
                ],
                Phones: [
                  {
                    PhoneType: 'DEFAULT',
                    PhoneNumber: '',
                    PhoneAreaCode: '',
                    PhoneCountryCode: '',
                  },
                  { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  {
                    PhoneType: 'MOBILE',
                    PhoneNumber: '555-1212',
                    PhoneAreaCode: '415',
                    PhoneCountryCode: '',
                  },
                ],
                UpdatedDateUTC: '/Date(1551399321043+0000)/',
                ContactGroups: [],
                IsSupplier: false,
                IsCustomer: false,
                SalesDefaultLineAmountType: 'INCLUSIVE',
                PurchasesDefaultLineAmountType: 'INCLUSIVE',
                SalesTrackingCategories: [],
                PurchasesTrackingCategories: [],
                PaymentTerms: {
                  Bills: { Day: 15, Type: 'OFCURRENTMONTH' },
                  Sales: { Day: 10, Type: 'DAYSAFTERBILLMONTH' },
                },
                ContactPersons: [],
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Validation Error - some data was incorrect returns response of type Error',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            ErrorNumber: 10,
            Type: 'ValidationException',
            Message: 'A validation exception occurred',
            Elements: [
              {
                ContactID: '00000000-0000-0000-0000-000000000000',
                AccountNumber: '12345-ABCD',
                Name: 'Buzz Lightyear',
                EmailAddress: 'buzzlightyear@email.com',
                AccountsReceivableTaxType: 'NONE',
                AccountsPayableTaxType: 'INPUT',
                Addresses: [
                  {
                    AddressType: 'STREET',
                    AddressLine1: '101 Green St',
                    AddressLine2: '5th floor',
                    City: 'San Francisco',
                    Region: 'CA',
                    PostalCode: '94041',
                    Country: 'US',
                    AttentionTo: 'Rod Drury',
                    ValidationErrors: [],
                  },
                ],
                Phones: [
                  {
                    PhoneType: 'MOBILE',
                    PhoneNumber: '555-1212',
                    PhoneAreaCode: '415',
                    ValidationErrors: [],
                  },
                ],
                ContactGroups: [],
                PaymentTerms: {
                  Bills: { Day: 15, Type: 'OFCURRENTMONTH', ValidationErrors: [] },
                  Sales: { Day: 10, Type: 'DAYSAFTERBILLMONTH', ValidationErrors: [] },
                },
                ContactPersons: [],
                HasValidationErrors: true,
                ValidationErrors: [
                  {
                    Message:
                      'The contact name Buzz Lightyear is already assigned to another contact. The contact name must be unique across all active contacts.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.contacts'] }],
})

export const getContactsContactNumberRoute = createRoute({
  method: 'get',
  path: '/Contacts/{ContactNumber}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific contact by contact number in a Xero organisation',
  operationId: 'getContactByContactNumber',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      ContactNumber: z
        .string()
        .openapi({
          param: {
            required: true,
            in: 'path',
            name: 'ContactNumber',
            'x-snake': 'contact_number',
            description:
              'This field is read only on the Xero contact screen, used to identify contacts in external systems (max length = 50).',
            example: 'SB2',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Contacts array with a unique Contact',
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Id: '5c83b115-a6e8-4f2a-877f-ba63d009235b',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551462703288)/',
            Contacts: [
              {
                ContactID: '8138a266-fb42-49b2-a104-014b7045753d',
                ContactNumber: 'SB2',
                AccountNumber: '1234567',
                ContactStatus: 'ACTIVE',
                Name: 'Acme Parts Co.',
                FirstName: 'Blake',
                LastName: 'Kohler',
                CompanyNumber: 'NumberBusiness1234',
                EmailAddress: 'bk@krave.co',
                BankAccountDetails: '12334567',
                TaxNumber: '123-22-3456',
                AccountsReceivableTaxType: 'TAX003',
                AccountsPayableTaxType: 'TAX022',
                Addresses: [
                  {
                    AddressType: 'STREET',
                    AddressLine1: '123 Fake Street',
                    City: 'Vancouver',
                    Region: 'British Columbia',
                    PostalCode: 'V6B 2T4',
                    Country: '',
                    AttentionTo: '',
                  },
                  {
                    AddressType: 'POBOX',
                    AddressLine1: '1234 Fake Street',
                    City: 'Vancouver',
                    Region: 'British Columbia',
                    PostalCode: 'V6B 2T4',
                    Country: '',
                    AttentionTo: 'Blake',
                  },
                ],
                Phones: [
                  {
                    PhoneType: 'DDI',
                    PhoneNumber: '489-44493',
                    PhoneAreaCode: '345',
                    PhoneCountryCode: '4',
                  },
                  {
                    PhoneType: 'DEFAULT',
                    PhoneNumber: '408-0914',
                    PhoneAreaCode: '604',
                    PhoneCountryCode: '1',
                  },
                  {
                    PhoneType: 'FAX',
                    PhoneNumber: '123-9933',
                    PhoneAreaCode: '123',
                    PhoneCountryCode: '2',
                  },
                  {
                    PhoneType: 'MOBILE',
                    PhoneNumber: '999-44',
                    PhoneAreaCode: '234',
                    PhoneCountryCode: '3',
                  },
                ],
                UpdatedDateUTC: '/Date(1551459777193+0000)/',
                ContactGroups: [],
                IsSupplier: true,
                IsCustomer: true,
                SalesDefaultLineAmountType: 'INCLUSIVE',
                PurchasesDefaultLineAmountType: 'INCLUSIVE',
                DefaultCurrency: 'USD',
                Discount: 13,
                Website: 'http://www.google.com',
                BrandingTheme: {
                  BrandingThemeID: 'dabc7637-62c1-4941-8a6e-ee44fa5090e7',
                  Name: 'Standard',
                },
                PurchasesDefaultAccountCode: '660',
                SalesDefaultAccountCode: '002',
                BatchPayments: {
                  BankAccountNumber: '12334567',
                  BankAccountName: 'Citi Bank',
                  Details: 'biz checking',
                  Code: '',
                  Reference: '',
                },
                Balances: {
                  AccountsReceivable: { Outstanding: 118.9, Overdue: 136.9 },
                  AccountsPayable: { Outstanding: -43.6, Overdue: 40 },
                },
                PaymentTerms: {
                  Bills: { Day: 12, Type: 'OFFOLLOWINGMONTH' },
                  Sales: { Day: 14, Type: 'OFCURRENTMONTH' },
                },
                ContactPersons: [
                  {
                    FirstName: 'Sue',
                    LastName: 'Johnson',
                    EmailAddress: 'sue.johnson@krave.com',
                    IncludeInEmails: true,
                  },
                ],
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '04e0a3e3-b116-456a-9f32-9706f0d33afa',
                    FileName: 'sample5.jpg',
                    Url: 'https://api.xero.com/api.xro/2.0/contact/8138a266-fb42-49b2-a104-014b7045753d/Attachments/sample5.jpg',
                    MimeType: 'image/jpg',
                    ContentLength: 2878711,
                  },
                ],
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.contacts', 'accounting.contacts.read'] }],
})

export const getContactsContactIDRoute = createRoute({
  method: 'get',
  path: '/Contacts/{ContactID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific contacts in a Xero organisation using a unique contact Id',
  operationId: 'getContact',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ContactID: ContactIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Contacts array with a unique Contact',
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Id: '5c83b115-a6e8-4f2a-877f-ba63d009235b',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551462703288)/',
            Contacts: [
              {
                ContactID: '8138a266-fb42-49b2-a104-014b7045753d',
                ContactNumber: 'SB2',
                AccountNumber: '1234567',
                ContactStatus: 'ACTIVE',
                Name: 'Acme Parts Co.',
                FirstName: 'Blake',
                LastName: 'Kohler',
                CompanyNumber: 'NumberBusiness1234',
                EmailAddress: 'bk@krave.co',
                BankAccountDetails: '12334567',
                TaxNumber: '123-22-3456',
                AccountsReceivableTaxType: 'TAX003',
                AccountsPayableTaxType: 'TAX022',
                Addresses: [
                  {
                    AddressType: 'STREET',
                    AddressLine1: '123 Fake Street',
                    City: 'Vancouver',
                    Region: 'British Columbia',
                    PostalCode: 'V6B 2T4',
                    Country: '',
                    AttentionTo: '',
                  },
                  {
                    AddressType: 'POBOX',
                    AddressLine1: '1234 Fake Street',
                    City: 'Vancouver',
                    Region: 'British Columbia',
                    PostalCode: 'V6B 2T4',
                    Country: '',
                    AttentionTo: 'Blake',
                  },
                ],
                Phones: [
                  {
                    PhoneType: 'DDI',
                    PhoneNumber: '489-44493',
                    PhoneAreaCode: '345',
                    PhoneCountryCode: '4',
                  },
                  {
                    PhoneType: 'DEFAULT',
                    PhoneNumber: '408-0914',
                    PhoneAreaCode: '604',
                    PhoneCountryCode: '1',
                  },
                  {
                    PhoneType: 'FAX',
                    PhoneNumber: '123-9933',
                    PhoneAreaCode: '123',
                    PhoneCountryCode: '2',
                  },
                  {
                    PhoneType: 'MOBILE',
                    PhoneNumber: '999-44',
                    PhoneAreaCode: '234',
                    PhoneCountryCode: '3',
                  },
                ],
                UpdatedDateUTC: '/Date(1551459777193+0000)/',
                ContactGroups: [],
                IsSupplier: true,
                IsCustomer: true,
                SalesDefaultLineAmountType: 'INCLUSIVE',
                PurchasesDefaultLineAmountType: 'INCLUSIVE',
                DefaultCurrency: 'USD',
                Discount: 13,
                Website: 'http://www.google.com',
                BrandingTheme: {
                  BrandingThemeID: 'dabc7637-62c1-4941-8a6e-ee44fa5090e7',
                  Name: 'Standard',
                },
                PurchasesDefaultAccountCode: '660',
                SalesDefaultAccountCode: '002',
                BatchPayments: {
                  BankAccountNumber: '12334567',
                  BankAccountName: 'Citi Bank',
                  Details: 'biz checking',
                  Code: '',
                  Reference: '',
                },
                Balances: {
                  AccountsReceivable: { Outstanding: 118.9, Overdue: 136.9 },
                  AccountsPayable: { Outstanding: -43.6, Overdue: 40 },
                },
                PaymentTerms: {
                  Bills: { Day: 12, Type: 'OFFOLLOWINGMONTH' },
                  Sales: { Day: 14, Type: 'OFCURRENTMONTH' },
                },
                ContactPersons: [
                  {
                    FirstName: 'Sue',
                    LastName: 'Johnson',
                    EmailAddress: 'sue.johnson@krave.com',
                    IncludeInEmails: true,
                  },
                ],
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '04e0a3e3-b116-456a-9f32-9706f0d33afa',
                    FileName: 'sample5.jpg',
                    Url: 'https://api.xero.com/api.xro/2.0/contact/8138a266-fb42-49b2-a104-014b7045753d/Attachments/sample5.jpg',
                    MimeType: 'image/jpg',
                    ContentLength: 2878711,
                  },
                ],
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.contacts', 'accounting.contacts.read'] }],
})

export const postContactsContactIDRoute = createRoute({
  method: 'post',
  path: '/Contacts/{ContactID}',
  tags: ['Accounting'],
  summary: 'Updates a specific contact in a Xero organisation',
  operationId: 'updateContact',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ContactID: ContactIDParamsSchema }),
    body: {
      description:
        'an array of Contacts containing single Contact object with properties to update',
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Contacts: [{ ContactID: '00000000-0000-0000-0000-000000000000', Name: 'Thanos' }],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Contacts array with an updated Contact',
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Id: '4166b727-c3f0-4881-acd0-d4f7c0e8fcda',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551400031795)/',
            Contacts: [
              {
                ContactID: 'd5be01fb-b09f-4c3a-9c67-e10c2a03412c',
                ContactStatus: 'ACTIVE',
                Name: 'FooBar',
                EmailAddress: 'sid30680@blah.com',
                BankAccountDetails: '',
                Addresses: [
                  { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                  { AddressType: 'POBOX', City: '', Region: '', PostalCode: '', Country: '' },
                ],
                Phones: [
                  {
                    PhoneType: 'DEFAULT',
                    PhoneNumber: '',
                    PhoneAreaCode: '',
                    PhoneCountryCode: '',
                  },
                  { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                  {
                    PhoneType: 'MOBILE',
                    PhoneNumber: '555-1212',
                    PhoneAreaCode: '415',
                    PhoneCountryCode: '',
                  },
                ],
                UpdatedDateUTC: '/Date(1551400031763+0000)/',
                ContactGroups: [],
                IsSupplier: false,
                IsCustomer: false,
                SalesDefaultLineAmountType: 'INCLUSIVE',
                PurchasesDefaultLineAmountType: 'INCLUSIVE',
                SalesTrackingCategories: [],
                PurchasesTrackingCategories: [],
                PaymentTerms: {
                  Bills: { Day: 15, Type: 'OFCURRENTMONTH' },
                  Sales: { Day: 10, Type: 'DAYSAFTERBILLMONTH' },
                },
                ContactPersons: [],
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.contacts'] }],
})

export const getContactsContactIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/Contacts/{ContactID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves attachments for a specific contact in a Xero organisation',
  operationId: 'getContactAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ContactID: ContactIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array with 0 to N Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '0f63b631-a205-496d-b1d2-e6b13a9b497b',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1551483890413)/',
            Attachments: [
              {
                AttachmentID: '04e0a3e3-b116-456a-9f32-9706f0d33afa',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Contacts/8138a266-fb42-49b2-a104-014b7045753d/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getContactsContactIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/Contacts/{ContactID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment from a specific contact using a unique attachment Id',
  operationId: 'getContactAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ ContactID: ContactIDParamsSchema, AttachmentID: AttachmentIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Contact as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getContactsContactIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/Contacts/{ContactID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment from a specific contact by file name',
  operationId: 'getContactAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ ContactID: ContactIDParamsSchema, FileName: FileNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Contact as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putContactsContactIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/Contacts/{ContactID}/Attachments/{FileName}',
  tags: ['Accounting'],
  operationId: 'createContactAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ContactID: ContactIDParamsSchema, FileName: FileNameParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with an newly created Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'a5eddf71-86aa-42f5-99e2-0aaf9caf96b6',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551484292734)/',
            Attachments: [
              {
                AttachmentID: '27e37b01-6996-4ebe-836c-95fd472ad674',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Contacts/8138a266-fb42-49b2-a104-014b7045753d/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postContactsContactIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/Contacts/{ContactID}/Attachments/{FileName}',
  tags: ['Accounting'],
  operationId: 'updateContactAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ContactID: ContactIDParamsSchema, FileName: FileNameParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array with an updated Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '8543ae1a-297c-49b8-bf91-47decac452d5',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551485146555)/',
            Attachments: [
              {
                AttachmentID: '8b537c1b-bbb5-47fd-857e-370c369dda7c',
                FileName: 'HelloWorld.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Contacts/8138a266-fb42-49b2-a104-014b7045753d/Attachments/HelloWorld.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getContactsContactIDCISSettingsRoute = createRoute({
  method: 'get',
  path: '/Contacts/{ContactID}/CISSettings',
  tags: ['Accounting'],
  summary: 'Retrieves CIS settings for a specific contact in a Xero organisation',
  operationId: 'getContactCISSettings',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ContactID: ContactIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type CISSettings for a specific Contact',
      content: {
        'application/json': {
          schema: CISSettingsSchema,
          example: {
            CISSetting: [{ CISContractorEnabled: true, CISSubContractorEnabled: true, Rate: 100 }],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const getContactsContactIDHistoryRoute = createRoute({
  method: 'get',
  path: '/Contacts/{ContactID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history records for a specific contact',
  operationId: 'getContactHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ContactID: ContactIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.contacts', 'accounting.contacts.read'] }],
})

export const putContactsContactIDHistoryRoute = createRoute({
  method: 'put',
  path: '/Contacts/{ContactID}/History',
  tags: ['Accounting'],
  summary: 'Creates a new history record for a specific contact',
  operationId: 'createContactHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ContactID: ContactIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse, 400: _400ErrorResponse },
  security: [{ OAuth2: ['accounting.contacts'] }],
})

export const getContactGroupsRoute = createRoute({
  method: 'get',
  path: '/ContactGroups',
  tags: ['Accounting'],
  summary: 'Retrieves the contact Id and name of each contact group',
  operationId: 'getContactGroups',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="ACTIVE"',
            'x-example-csharp': 'Status==\\"ACTIVE\\"',
            'x-example-java':
              'Status==&quot;&apos; + ContactGroup.StatusEnum.ACTIVE + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\ContactGroup::STATUS_ACTIVE . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::ContactGroup::ACTIVE}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Name ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Contact Groups array of Contact Group',
      content: {
        'application/json': {
          schema: ContactGroupsSchema,
          example: {
            Id: 'b825df86-1a72-49c9-97dd-36afc7d04bd5',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551746015603)/',
            ContactGroups: [
              {
                ContactGroupID: 'd7a86b80-8dac-4d89-a334-9dcf5753676c',
                Name: 'Suppliers',
                Status: 'ACTIVE',
                Contacts: [],
                HasValidationErrors: false,
              },
              {
                ContactGroupID: 'ab089fd4-012f-4043-a6e4-e7be01e87e50',
                Name: 'Old Group84262',
                Status: 'ACTIVE',
                Contacts: [],
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.contacts', 'accounting.contacts.read'] }],
})

export const putContactGroupsRoute = createRoute({
  method: 'put',
  path: '/ContactGroups',
  tags: ['Accounting'],
  summary: 'Creates a contact group',
  operationId: 'createContactGroup',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'ContactGroups with an array of names in request body',
      content: {
        'application/json': {
          schema: ContactGroupsSchema,
          example: { ContactGroups: [{ Name: 'VIPs' }] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Contact Groups array of newly created Contact Group',
      content: {
        'application/json': {
          schema: ContactGroupsSchema,
          example: {
            Id: '5afe53f9-2271-45b8-9767-88d023b71d34',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551745740920)/',
            ContactGroups: [
              {
                ContactGroupID: 'd7a86b80-8dac-4d89-a334-9dcf5753676c',
                Name: 'Suppliers',
                Status: 'ACTIVE',
                Contacts: [],
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Validation Error - some data was incorrect returns response of type Error',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            ErrorNumber: 10,
            Type: 'ValidationException',
            Message: 'A validation exception occurred',
            Elements: [
              {
                ContactGroupID: '00000000-0000-0000-0000-000000000000',
                Name: 'Suppliers',
                Contacts: [],
                HasValidationErrors: true,
                ValidationErrors: [{ Message: 'You’ve reached the limit of 100 contact groups.' }],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.contacts'] }],
})

export const getContactGroupsContactGroupIDRoute = createRoute({
  method: 'get',
  path: '/ContactGroups/{ContactGroupID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific contact group by using a unique contact group Id',
  operationId: 'getContactGroup',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ContactGroupID: ContactGroupIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type Contact Groups array with a specific Contact Group',
      content: {
        'application/json': {
          schema: ContactGroupsSchema,
          example: {
            Id: '079c14f6-2c2d-464e-a2c7-0edf7e465723',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551746772976)/',
            ContactGroups: [
              {
                ContactGroupID: '17b44ed7-4389-4162-91cb-3dd5766e4e22',
                Name: 'Oasis',
                Status: 'ACTIVE',
                Contacts: [
                  {
                    ContactID: '4e1753b9-018a-4775-b6aa-1bc7871cfee3',
                    Name: 'Noel Gallagher',
                    Addresses: [],
                    Phones: [],
                    ContactGroups: [],
                    ContactPersons: [],
                    HasValidationErrors: false,
                  },
                  {
                    ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                    Name: 'Liam Gallagher',
                    Addresses: [],
                    Phones: [],
                    ContactGroups: [],
                    ContactPersons: [],
                    HasValidationErrors: false,
                  },
                ],
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.contacts', 'accounting.contacts.read'] }],
})

export const postContactGroupsContactGroupIDRoute = createRoute({
  method: 'post',
  path: '/ContactGroups/{ContactGroupID}',
  tags: ['Accounting'],
  summary: 'Updates a specific contact group',
  operationId: 'updateContactGroup',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ContactGroupID: ContactGroupIDParamsSchema }),
    body: {
      description: 'an array of Contact groups with Name of specific group to update',
      content: {
        'application/json': {
          schema: ContactGroupsSchema,
          example: { ContactGroups: [{ Name: 'Suppliers' }] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Contact Groups array of updated Contact Group',
      content: {
        'application/json': {
          schema: ContactGroupsSchema,
          example: {
            Id: 'b1ba6cdb-1637-4209-bb92-bd0c593f3243',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551746288544)/',
            ContactGroups: [
              {
                ContactGroupID: '13f47537-7c1d-4e62-966e-617d76558fc5',
                Name: 'Supplier Vendor',
                Status: 'ACTIVE',
                Contacts: [],
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.contacts'] }],
})

export const putContactGroupsContactGroupIDContactsRoute = createRoute({
  method: 'put',
  path: '/ContactGroups/{ContactGroupID}/Contacts',
  tags: ['Accounting'],
  summary: 'Creates contacts to a specific contact group',
  operationId: 'createContactGroupContacts',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ContactGroupID: ContactGroupIDParamsSchema }),
    body: {
      description:
        'Contacts with array of contacts specifying the ContactID to be added to ContactGroup in body of request',
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Contacts: [
              { ContactID: 'a3675fc4-f8dd-4f03-ba5b-f1870566bcd7' },
              { ContactID: '4e1753b9-018a-4775-b6aa-1bc7871cfee3' },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Contacts array of added Contacts',
      content: {
        'application/json': {
          schema: ContactsSchema,
          example: {
            Id: '99db8024-6895-45c8-a1b5-54805aa8689c',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551747495785)/',
            Contacts: [
              {
                ContactID: 'a3675fc4-f8dd-4f03-ba5b-f1870566bcd7',
                Addresses: [],
                Phones: [],
                ContactGroups: [],
                ContactPersons: [],
                HasValidationErrors: false,
                ValidationErrors: [],
              },
              {
                ContactID: '4e1753b9-018a-4775-b6aa-1bc7871cfee3',
                Addresses: [],
                Phones: [],
                ContactGroups: [],
                ContactPersons: [],
                HasValidationErrors: false,
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.contacts'] }],
})

export const deleteContactGroupsContactGroupIDContactsRoute = createRoute({
  method: 'delete',
  path: '/ContactGroups/{ContactGroupID}/Contacts',
  tags: ['Accounting'],
  summary: 'Deletes all contacts from a specific contact group',
  operationId: 'deleteContactGroupContacts',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ContactGroupID: ContactGroupIDParamsSchema }),
  },
  responses: { 204: { description: 'Success - return response 204 no content' } },
  security: [{ OAuth2: ['accounting.contacts'] }],
})

export const deleteContactGroupsContactGroupIDContactsContactIDRoute = createRoute({
  method: 'delete',
  path: '/ContactGroups/{ContactGroupID}/Contacts/{ContactID}',
  tags: ['Accounting'],
  summary: 'Deletes a specific contact from a contact group using a unique contact Id',
  operationId: 'deleteContactGroupContact',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      ContactGroupID: ContactGroupIDParamsSchema,
      ContactID: ContactIDParamsSchema,
    }),
  },
  responses: {
    204: { description: 'Success - return response 204 no content' },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.contacts'] }],
})

export const getCreditNotesRoute = createRoute({
  method: 'get',
  path: '/CreditNotes',
  tags: ['Accounting'],
  summary: 'Retrieves any credit notes',
  operationId: 'getCreditNotes',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="DRAFT"',
            'x-example-csharp': 'Status==\\"DRAFT\\"',
            'x-example-java': 'Status==&quot;&apos; + CreditNote.StatusEnum.DRAFT + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\CreditNote::STATUS_DRAFT . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::CreditNote::DRAFT}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'CreditNoteNumber ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'e.g. page=1 – Up to 100 credit notes will be returned in a single API call with line items shown for each credit note',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      unitdp: UnitdpParamsSchema,
      pageSize: PageSizeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Credit Notes array of CreditNote',
      content: {
        'application/json': {
          schema: CreditNotesSchema,
          example: {
            Id: '306379b0-3d75-4c77-953a-be08fa0efae8',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551812506620)/',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            CreditNotes: [
              {
                CreditNoteID: '249f15fa-f2a7-4acc-8769-0984103f2225',
                CreditNoteNumber: 'CN-0005',
                Payments: [
                  {
                    PaymentID: '6b037c9b-2e5d-4905-84d3-eabfb3438242',
                    Date: '/Date(1552521600000+0000)/',
                    Amount: 2,
                    Reference: 'Too much',
                    CurrencyRate: 1,
                    HasAccount: false,
                    HasValidationErrors: false,
                  },
                ],
                ID: '249f15fa-f2a7-4acc-8769-0984103f2225',
                CurrencyRate: 1,
                Type: 'ACCRECCREDIT',
                Reference: 'US Tour',
                RemainingCredit: 32.5,
                Allocations: [],
                HasAttachments: true,
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-05T00:00:00',
                Date: '/Date(1551744000000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [],
                SubTotal: 30,
                TotalTax: 4.5,
                Total: 34.5,
                UpdatedDateUTC: '/Date(1551812346157+0000)/',
                UpdatedDateUTCString: '2019-03-05T18:59:06Z',
                CurrencyCode: 'NZD',
              },
              {
                CreditNoteID: 'f8021bd2-9a6a-4c19-8477-163da0b9290f',
                CreditNoteNumber: '',
                Payments: [],
                ID: 'f8021bd2-9a6a-4c19-8477-163da0b9290f',
                CurrencyRate: 1,
                Type: 'ACCPAYCREDIT',
                Reference: '',
                RemainingCredit: 46,
                Allocations: [],
                HasAttachments: false,
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-01-05T00:00:00',
                Date: '/Date(1546646400000+0000)/',
                Status: 'DRAFT',
                LineAmountTypes: 'Exclusive',
                LineItems: [],
                SubTotal: 40,
                TotalTax: 6,
                Total: 46,
                UpdatedDateUTC: '/Date(1551812506153+0000)/',
                UpdatedDateUTCString: '2019-03-05T19:01:46Z',
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putCreditNotesRoute = createRoute({
  method: 'put',
  path: '/CreditNotes',
  tags: ['Accounting'],
  summary: 'Creates a new credit note',
  operationId: 'createCreditNotes',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema, unitdp: UnitdpParamsSchema }),
    body: {
      description: 'Credit Notes with array of CreditNote object in body of request',
      content: {
        'application/json': {
          schema: CreditNotesSchema,
          example: {
            CreditNotes: [
              {
                Type: 'ACCPAYCREDIT',
                Contact: { ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8' },
                Date: '2019-01-05',
                LineItems: [
                  { Description: 'Foobar', Quantity: 2, UnitAmount: 20, AccountCode: '400' },
                ],
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Credit Notes array of newly created CreditNote',
      content: {
        'application/json': {
          schema: CreditNotesSchema,
          example: {
            Id: '5e57a661-42da-4a19-96a0-00405a0e946d',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551812702713)/',
            CreditNotes: [
              {
                CreditNoteID: 'f9256f04-5a99-4680-acb9-6b4639cc439a',
                CreditNoteNumber: '',
                Payments: [],
                ID: 'f9256f04-5a99-4680-acb9-6b4639cc439a',
                CurrencyRate: 1,
                Type: 'ACCPAYCREDIT',
                Reference: '',
                RemainingCredit: 46,
                Allocations: [],
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-01-05T00:00:00',
                Date: '/Date(1546646400000+0000)/',
                Status: 'DRAFT',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'INPUT2',
                    TaxAmount: 6,
                    LineAmount: 40,
                    AccountCode: '400',
                    Tracking: [],
                    Quantity: 2,
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 40,
                TotalTax: 6,
                Total: 46,
                UpdatedDateUTC: '/Date(1551812702650+0000)/',
                UpdatedDateUTCString: '2019-03-05T19:05:02Z',
                CurrencyCode: 'NZD',
                StatusAttributeString: 'OK',
                ValidationErrors: [
                  {
                    Message:
                      'An existing Credit Note with the specified CreditNoteID could not be found',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const postCreditNotesRoute = createRoute({
  method: 'post',
  path: '/CreditNotes',
  tags: ['Accounting'],
  summary: 'Updates or creates one or more credit notes',
  operationId: 'updateOrCreateCreditNotes',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema, unitdp: UnitdpParamsSchema }),
    body: {
      description: 'an array of Credit Notes with a single CreditNote object.',
      content: {
        'application/json': {
          schema: CreditNotesSchema,
          example: {
            CreditNotes: [
              {
                Type: 'ACCPAYCREDIT',
                Contact: { ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8' },
                Date: '2019-01-05',
                Status: 'AUTHORISED',
                Reference: 'HelloWorld',
                LineItems: [
                  { Description: 'Foobar', Quantity: 2, UnitAmount: 20, AccountCode: '400' },
                ],
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Credit Notes array of newly created CreditNote',
      content: {
        'application/json': {
          schema: CreditNotesSchema,
          example: {
            Id: '5e57a661-42da-4a19-96a0-00405a0e946d',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551812702713)/',
            CreditNotes: [
              {
                CreditNoteID: 'f9256f04-5a99-4680-acb9-6b4639cc439a',
                CreditNoteNumber: '',
                Payments: [],
                ID: 'f9256f04-5a99-4680-acb9-6b4639cc439a',
                CurrencyRate: 1,
                Type: 'ACCPAYCREDIT',
                Reference: '',
                SentToContact: true,
                RemainingCredit: 46,
                Allocations: [],
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-01-05T00:00:00',
                Date: '/Date(1546646400000+0000)/',
                Status: 'DRAFT',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'INPUT2',
                    TaxAmount: 6,
                    LineAmount: 40,
                    AccountCode: '400',
                    Tracking: [],
                    Quantity: 2,
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 40,
                TotalTax: 6,
                Total: 46,
                UpdatedDateUTC: '/Date(1551812702650+0000)/',
                UpdatedDateUTCString: '2019-03-05T19:05:02Z',
                CurrencyCode: 'NZD',
                StatusAttributeString: 'OK',
                ValidationErrors: [
                  {
                    Message:
                      'An existing Credit Note with the specified CreditNoteID could not be found',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getCreditNotesCreditNoteIDRoute = createRoute({
  method: 'get',
  path: '/CreditNotes/{CreditNoteID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific credit note using a unique credit note Id',
  operationId: 'getCreditNote',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ CreditNoteID: CreditNoteIDParamsSchema }),
    query: z.object({ unitdp: UnitdpParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Credit Notes array with a unique CreditNote',
      content: {
        'application/json': {
          schema: CreditNotesSchema,
          example: {
            Id: 'dd5c5da7-08ab-486a-ac34-aea295f1614b',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551812703811)/',
            CreditNotes: [
              {
                CreditNoteID: '249f15fa-f2a7-4acc-8769-0984103f2225',
                CreditNoteNumber: 'CN-0005',
                Payments: [
                  {
                    PaymentID: '6b037c9b-2e5d-4905-84d3-eabfb3438242',
                    Date: '/Date(1552521600000+0000)/',
                    Amount: 2,
                    Reference: 'Too much',
                    CurrencyRate: 1,
                    HasAccount: false,
                    HasValidationErrors: false,
                  },
                ],
                ID: '249f15fa-f2a7-4acc-8769-0984103f2225',
                CurrencyRate: 1,
                Type: 'ACCRECCREDIT',
                Reference: 'US Tour',
                RemainingCredit: 32.5,
                Allocations: [],
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '9b9c9b62-069e-4f5a-a172-183195f084bb',
                    FileName: 'Screen Shot 2019-03-04 at 9.00.06 AM.png',
                    Url: 'https://api.xero.com/api.xro/2.0/creditnotes/249f15fa-f2a7-4acc-8769-0984103f2225/Attachments/Screen%20Shot%202019-03-04%20at%209.00.06%20AM.png',
                    MimeType: 'image/png',
                    ContentLength: 82334,
                  },
                ],
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-05T00:00:00',
                Date: '/Date(1551744000000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Mic Stand',
                    UnitAmount: 30,
                    TaxType: 'OUTPUT2',
                    TaxAmount: 4.5,
                    LineAmount: 30,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 30,
                TotalTax: 4.5,
                Total: 34.5,
                UpdatedDateUTC: '/Date(1551812346157+0000)/',
                UpdatedDateUTCString: '2019-03-05T18:59:06Z',
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postCreditNotesCreditNoteIDRoute = createRoute({
  method: 'post',
  path: '/CreditNotes/{CreditNoteID}',
  tags: ['Accounting'],
  summary: 'Updates a specific credit note',
  operationId: 'updateCreditNote',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ CreditNoteID: CreditNoteIDParamsSchema }),
    query: z.object({ unitdp: UnitdpParamsSchema }),
    body: {
      description: 'an array of Credit Notes containing credit note details to update',
      content: {
        'application/json': {
          schema: CreditNotesSchema,
          example: {
            CreditNotes: [
              {
                Type: 'ACCPAYCREDIT',
                Contact: { ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8' },
                Date: '2019-01-05',
                Status: 'AUTHORISED',
                Reference: 'HelloWorld',
                SentToContact: true,
                LineItems: [
                  { Description: 'Foobar', Quantity: 2, UnitAmount: 20, AccountCode: '400' },
                ],
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Credit Notes array with updated CreditNote',
      content: {
        'application/json': {
          schema: CreditNotesSchema,
          example: {
            Id: 'db2f7659-6044-418d-a4c6-d4b93eba4e1e',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551812704253)/',
            CreditNotes: [
              {
                CreditNoteID: 'f9256f04-5a99-4680-acb9-6b4639cc439a',
                CreditNoteNumber: '',
                Payments: [],
                ID: 'f9256f04-5a99-4680-acb9-6b4639cc439a',
                CurrencyRate: 1,
                Type: 'ACCPAYCREDIT',
                Reference: 'HelloWorld',
                RemainingCredit: 46,
                Allocations: [],
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-01-05T00:00:00',
                Date: '/Date(1546646400000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'INPUT2',
                    TaxAmount: 6,
                    LineAmount: 40,
                    AccountCode: '400',
                    Tracking: [],
                    Quantity: 2,
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 40,
                TotalTax: 6,
                Total: 46,
                UpdatedDateUTC: '/Date(1551812704223+0000)/',
                UpdatedDateUTCString: '2019-03-05T19:05:04Z',
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getCreditNotesCreditNoteIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/CreditNotes/{CreditNoteID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves attachments for a specific credit notes',
  operationId: 'getCreditNoteAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ CreditNoteID: CreditNoteIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with all Attachment for specific Credit Note',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '2bb15054-3868-4f85-a9c6-0402ec8c1201',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551822670731)/',
            Attachments: [
              {
                AttachmentID: 'b7eb1fc9-a0f9-4e8e-9373-6689f5350832',
                FileName: 'HelloWorld.png',
                Url: 'https://api.xero.com/api.xro/2.0/CreditNotes/249f15fa-f2a7-4acc-8769-0984103f2225/Attachments/HelloWorld.png',
                MimeType: 'image/png',
                ContentLength: 76091,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getCreditNotesCreditNoteIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/CreditNotes/{CreditNoteID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary:
    'Retrieves a specific attachment from a specific credit note using a unique attachment Id',
  operationId: 'getCreditNoteAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      CreditNoteID: CreditNoteIDParamsSchema,
      AttachmentID: AttachmentIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Credit Note as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getCreditNotesCreditNoteIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/CreditNotes/{CreditNoteID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment on a specific credit note by file name',
  operationId: 'getCreditNoteAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ CreditNoteID: CreditNoteIDParamsSchema, FileName: FileNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Credit Note as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putCreditNotesCreditNoteIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/CreditNotes/{CreditNoteID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Creates an attachment for a specific credit note',
  operationId: 'createCreditNoteAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ CreditNoteID: CreditNoteIDParamsSchema, FileName: FileNameParamsSchema }),
    query: z.object({ IncludeOnline: IncludeOnlineParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with newly created Attachment for specific Credit Note',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '22a8d402-5dea-40ed-9d01-26896429f649',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551822953320)/',
            Attachments: [
              {
                AttachmentID: '91bbae3f-5de5-4e3d-875f-8662f25897bd',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/CreditNotes/249f15fa-f2a7-4acc-8769-0984103f2225/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postCreditNotesCreditNoteIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/CreditNotes/{CreditNoteID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Updates attachments on a specific credit note by file name',
  operationId: 'updateCreditNoteAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ CreditNoteID: CreditNoteIDParamsSchema, FileName: FileNameParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with updated Attachment for specific Credit Note',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '27253066-8c4d-4e34-a251-7a749b72de40',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551828247939)/',
            Attachments: [
              {
                AttachmentID: '103e49f1-e47c-4b4d-b5e8-77d9d00fa70a',
                FileName: 'HelloWorld.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/CreditNotes/249f15fa-f2a7-4acc-8769-0984103f2225/Attachments/HelloWorld.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getCreditNotesCreditNoteIDPdfRoute = createRoute({
  method: 'get',
  path: '/CreditNotes/{CreditNoteID}/pdf',
  tags: ['Accounting'],
  summary: 'Retrieves credit notes as PDF files',
  operationId: 'getCreditNoteAsPdf',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ CreditNoteID: CreditNoteIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of binary data from the Attachment to a Credit Note',
      content: {
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putCreditNotesCreditNoteIDAllocationsRoute = createRoute({
  method: 'put',
  path: '/CreditNotes/{CreditNoteID}/Allocations',
  tags: ['Accounting'],
  summary: 'Creates allocation for a specific credit note',
  operationId: 'createCreditNoteAllocation',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ CreditNoteID: CreditNoteIDParamsSchema }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'Allocations with array of Allocation object in body of request.',
      content: {
        'application/json': {
          schema: AllocationsSchema,
          example: {
            Allocations: [
              {
                Invoice: { LineItems: [], InvoiceID: 'c45720a1-ade3-4a38-a064-d15489be6841' },
                Amount: 1,
                Date: '2019-03-05',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Allocations array with newly created Allocation for specific Credit Note',
      content: {
        'application/json': {
          schema: AllocationsSchema,
          example: {
            Id: '73452751-6eaa-4bcb-86f5-4c013316f4cf',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551828543255)/',
            Allocations: [
              {
                Amount: 1,
                Date: '/Date(1551744000000+0000)/',
                Invoice: {
                  InvoiceID: 'c45720a1-ade3-4a38-a064-d15489be6841',
                  Payments: [],
                  CreditNotes: [],
                  Prepayments: [],
                  Overpayments: [],
                  HasErrors: false,
                  IsDiscounted: false,
                  LineItems: [],
                  ValidationErrors: [],
                },
                CreditNote: {
                  CreditNoteID: '7be578f5-63af-45c8-9b00-dcc4732baf0b',
                  ID: '7be578f5-63af-45c8-9b00-dcc4732baf0b',
                  LineItems: [],
                },
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const deleteCreditNotesCreditNoteIDAllocationsAllocationIDRoute = createRoute({
  method: 'delete',
  path: '/CreditNotes/{CreditNoteID}/Allocations/{AllocationID}',
  tags: ['Accounting'],
  summary: 'Deletes an Allocation from a Credit Note',
  operationId: 'deleteCreditNoteAllocations',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      CreditNoteID: CreditNoteIDParamsSchema,
      AllocationID: AllocationIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Allocation with the isDeleted flag as true',
      content: {
        'application/json': {
          schema: AllocationSchema,
          example: {
            AllocationId: '2bb15054-3868-4f85-a9c6-0402ec8c1201',
            Date: '/Date(1551822670731)/',
            Invoice: [{ InvoiceID: 'b7eb1fc9-a0f9-4e8e-9373-6689f5350832' }],
            IsDeleted: true,
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getCreditNotesCreditNoteIDHistoryRoute = createRoute({
  method: 'get',
  path: '/CreditNotes/{CreditNoteID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history records of a specific credit note',
  operationId: 'getCreditNoteHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ CreditNoteID: CreditNoteIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putCreditNotesCreditNoteIDHistoryRoute = createRoute({
  method: 'put',
  path: '/CreditNotes/{CreditNoteID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history records of a specific credit note',
  operationId: 'createCreditNoteHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ CreditNoteID: CreditNoteIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse, 400: _400ErrorResponse },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getCurrenciesRoute = createRoute({
  method: 'get',
  path: '/Currencies',
  tags: ['Accounting'],
  summary: 'Retrieves currencies for your Xero organisation',
  operationId: 'getCurrencies',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Code=="USD"',
            'x-example-csharp': 'Code==\\"USD\\"',
            'x-example-php':
              'Code==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\CurrencyCode::USD . &apos;&quot;',
            'x-example-ruby': 'Code==#{XeroRuby::Accounting::CurrencyCode::USD}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Code ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Currencies array with all Currencies',
      content: {
        'application/json': {
          schema: CurrenciesSchema,
          example: {
            Id: 'e6803fc8-8035-4251-b3e4-39d6b2de0f4a',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552322853043)/',
            Currencies: [{ Code: 'NZD', Description: 'New Zealand Dollar' }],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const putCurrenciesRoute = createRoute({
  method: 'put',
  path: '/Currencies',
  tags: ['Accounting'],
  summary: 'Create a new currency for a Xero organisation',
  operationId: 'createCurrency',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'Currency object in the body of request',
      content: {
        'application/json': {
          schema: CurrencySchema,
          example: { Code: 'USD', Description: 'United States Dollar' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Unsupported - return response incorrect exception, API is not able to create new Currency',
      content: {
        'application/json': {
          schema: CurrenciesSchema,
          example: { Currencies: [{ Code: 'USD', Description: 'United States Dollar' }] },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const getExpenseClaimsRoute = createRoute({
  method: 'get',
  path: '/ExpenseClaims',
  tags: ['Accounting'],
  summary: 'Retrieves expense claims',
  operationId: 'getExpenseClaims',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="SUBMITTED"',
            'x-example-csharp': 'Status==\\"SUBMITTED\\"',
            'x-example-java':
              'Status==&quot;&apos; + ExpenseClaim.StatusEnum.SUBMITTED + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\ExpenseClaim::STATUS_SUBMITTED . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::ExpenseClaim::SUBMITTED}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Status ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type ExpenseClaims array with all ExpenseClaims',
      content: {
        'application/json': {
          schema: ExpenseClaimsSchema,
          example: {
            Id: 'f6a8867e-af29-41ee-8f77-855f5ff214fe',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552325853538)/',
            ExpenseClaims: [
              {
                ExpenseClaimID: '646b15ab-b874-4e13-82ae-f4385b2ac4b6',
                Status: 'AUTHORISED',
                UpdatedDateUTC: '/Date(1552325851767+0000)/',
                User: {
                  UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                  EmailAddress: 'api@xero.com',
                  FirstName: 'API ',
                  LastName: 'Team',
                  UpdatedDateUTC: '/Date(1511957179217+0000)/',
                  IsSubscriber: true,
                  OrganisationRole: 'FINANCIALADVISER',
                },
                Receipts: [],
                Payments: [],
                Total: 40,
                AmountDue: 40,
                AmountPaid: 0,
                ReportingDate: '/Date(1552262400000+0000)/',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putExpenseClaimsRoute = createRoute({
  method: 'put',
  path: '/ExpenseClaims',
  tags: ['Accounting'],
  summary: 'Creates expense claims',
  operationId: 'createExpenseClaims',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'ExpenseClaims with array of ExpenseClaim object in body of request',
      content: {
        'application/json': {
          schema: ExpenseClaimsSchema,
          example: {
            ExpenseClaims: [
              {
                Status: 'SUBMITTED',
                User: { UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273' },
                Receipts: [{ Lineitems: [], ReceiptID: 'dc1c7f6d-0a4c-402f-acac-551d62ce5816' }],
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type ExpenseClaims array with newly created ExpenseClaim',
      content: {
        'application/json': {
          schema: ExpenseClaimsSchema,
          example: {
            Id: '4a0879a6-3860-4b73-adc6-f6a0e0f68fc8',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552325850201)/',
            ExpenseClaims: [
              {
                ExpenseClaimID: '646b15ab-b874-4e13-82ae-f4385b2ac4b6',
                Status: 'SUBMITTED',
                UpdatedDateUTC: '/Date(1552325850107+0000)/',
                User: {
                  UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                  EmailAddress: 'api@xero.com',
                  FirstName: 'API ',
                  LastName: 'Team',
                  UpdatedDateUTC: '/Date(1511957179217+0000)/',
                  IsSubscriber: true,
                  OrganisationRole: 'FINANCIALADVISER',
                },
                Receipts: [
                  {
                    ReceiptID: 'dc1c7f6d-0a4c-402f-acac-551d62ce5816',
                    ReceiptNumber: 1,
                    Status: 'SUBMITTED',
                    User: {
                      UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                      EmailAddress: 'api@xero.com',
                      FirstName: 'API ',
                      LastName: 'Team',
                      UpdatedDateUTC: '/Date(1511957179217+0000)/',
                      IsSubscriber: true,
                      OrganisationRole: 'FINANCIALADVISER',
                    },
                    Contact: {
                      ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                      Name: 'Liam Gallagher',
                      Addresses: [],
                      Phones: [],
                      ContactGroups: [],
                      ContactPersons: [],
                      HasValidationErrors: false,
                    },
                    Date: '/Date(1552348800000+0000)/',
                    UpdatedDateUTC: '/Date(1552325848457+0000)/',
                    Reference: '',
                    LineAmountTypes: 'NoTax',
                    LineItems: [
                      {
                        Description: 'Foobar',
                        UnitAmount: 20,
                        TaxType: 'NONE',
                        TaxAmount: 0,
                        LineAmount: 40,
                        Tracking: [],
                        Quantity: 2,
                      },
                    ],
                    SubTotal: 40,
                    TotalTax: 0,
                    Total: 40,
                    ID: 'dc1c7f6d-0a4c-402f-acac-551d62ce5816',
                    HasAttachments: false,
                  },
                ],
                Payments: [],
                Total: 40,
                AmountDue: 40,
                AmountPaid: 0,
                StatusAttributeString: 'OK',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getExpenseClaimsExpenseClaimIDRoute = createRoute({
  method: 'get',
  path: '/ExpenseClaims/{ExpenseClaimID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific expense claim using a unique expense claim Id',
  operationId: 'getExpenseClaim',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ExpenseClaimID: ExpenseClaimIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type ExpenseClaims array with specified ExpenseClaim',
      content: {
        'application/json': {
          schema: ExpenseClaimsSchema,
          example: {
            Id: 'b54bb45d-37da-4f53-9f1d-536302d6bad7',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552325854864)/',
            ExpenseClaims: [
              {
                ExpenseClaimID: '646b15ab-b874-4e13-82ae-f4385b2ac4b6',
                Status: 'AUTHORISED',
                UpdatedDateUTC: '/Date(1552325851767+0000)/',
                User: {
                  UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                  EmailAddress: 'api@xero.com',
                  FirstName: 'API ',
                  LastName: 'Team',
                  UpdatedDateUTC: '/Date(1511957179217+0000)/',
                  IsSubscriber: true,
                  OrganisationRole: 'FINANCIALADVISER',
                },
                Receipts: [
                  {
                    ReceiptID: 'dc1c7f6d-0a4c-402f-acac-551d62ce5816',
                    ReceiptNumber: 1,
                    Status: 'AUTHORISED',
                    User: {
                      UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                      EmailAddress: 'api@xero.com',
                      FirstName: 'API ',
                      LastName: 'Team',
                      UpdatedDateUTC: '/Date(1511957179217+0000)/',
                      IsSubscriber: true,
                      OrganisationRole: 'FINANCIALADVISER',
                    },
                    Contact: {
                      ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                      Name: 'Liam Gallagher',
                      Addresses: [],
                      Phones: [],
                      ContactGroups: [],
                      ContactPersons: [],
                      HasValidationErrors: false,
                    },
                    Date: '/Date(1552348800000+0000)/',
                    UpdatedDateUTC: '/Date(1552325848457+0000)/',
                    Reference: '',
                    LineAmountTypes: 'NoTax',
                    LineItems: [
                      {
                        Description: 'Foobar',
                        UnitAmount: 20,
                        TaxType: 'NONE',
                        TaxAmount: 0,
                        LineAmount: 40,
                        AccountCode: '400',
                        Tracking: [],
                        Quantity: 2,
                      },
                    ],
                    SubTotal: 40,
                    TotalTax: 0,
                    Total: 40,
                    ID: 'dc1c7f6d-0a4c-402f-acac-551d62ce5816',
                    HasAttachments: false,
                  },
                ],
                Payments: [],
                Total: 40,
                AmountDue: 40,
                AmountPaid: 0,
                ReportingDate: '/Date(1552262400000+0000)/',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postExpenseClaimsExpenseClaimIDRoute = createRoute({
  method: 'post',
  path: '/ExpenseClaims/{ExpenseClaimID}',
  tags: ['Accounting'],
  summary: 'Updates a specific expense claims',
  operationId: 'updateExpenseClaim',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ExpenseClaimID: ExpenseClaimIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ExpenseClaimsSchema,
          example: {
            ExpenseClaims: [
              {
                Status: 'SUBMITTED',
                User: { UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273' },
                Receipts: [{ Lineitems: [], ReceiptID: 'dc1c7f6d-0a4c-402f-acac-551d62ce5816' }],
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type ExpenseClaims array with updated ExpenseClaim',
      content: {
        'application/json': {
          schema: ExpenseClaimsSchema,
          example: {
            Id: '8ee87f9c-058b-4f1b-b5b2-29569bf055d7',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552325851907)/',
            ExpenseClaims: [
              {
                ExpenseClaimID: '646b15ab-b874-4e13-82ae-f4385b2ac4b6',
                Status: 'AUTHORISED',
                UpdatedDateUTC: '/Date(1552325851767+0000)/',
                User: {
                  UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                  EmailAddress: 'api@xero.com',
                  FirstName: 'API ',
                  LastName: 'Team',
                  UpdatedDateUTC: '/Date(1511957179217+0000)/',
                  IsSubscriber: true,
                  OrganisationRole: 'FINANCIALADVISER',
                },
                Receipts: [
                  {
                    ReceiptID: 'dc1c7f6d-0a4c-402f-acac-551d62ce5816',
                    ReceiptNumber: 1,
                    Status: 'AUTHORISED',
                    User: {
                      UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                      EmailAddress: 'api@xero.com',
                      FirstName: 'API ',
                      LastName: 'Team',
                      UpdatedDateUTC: '/Date(1511957179217+0000)/',
                      IsSubscriber: true,
                      OrganisationRole: 'FINANCIALADVISER',
                    },
                    Contact: {
                      ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                      Name: 'Liam Gallagher',
                      Addresses: [],
                      Phones: [],
                      ContactGroups: [],
                      ContactPersons: [],
                      HasValidationErrors: false,
                    },
                    Date: '/Date(1552348800000+0000)/',
                    UpdatedDateUTC: '/Date(1552325848457+0000)/',
                    Reference: '',
                    LineAmountTypes: 'NoTax',
                    LineItems: [
                      {
                        Description: 'Foobar',
                        UnitAmount: 20,
                        TaxType: 'NONE',
                        TaxAmount: 0,
                        LineAmount: 40,
                        AccountCode: '400',
                        Tracking: [],
                        Quantity: 2,
                      },
                    ],
                    SubTotal: 40,
                    TotalTax: 0,
                    Total: 40,
                    ID: 'dc1c7f6d-0a4c-402f-acac-551d62ce5816',
                    HasAttachments: false,
                  },
                ],
                Payments: [],
                Total: 40,
                AmountDue: 40,
                AmountPaid: 0,
                ReportingDate: '/Date(1552262400000+0000)/',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getExpenseClaimsExpenseClaimIDHistoryRoute = createRoute({
  method: 'get',
  path: '/ExpenseClaims/{ExpenseClaimID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history records of a specific expense claim',
  operationId: 'getExpenseClaimHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ExpenseClaimID: ExpenseClaimIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putExpenseClaimsExpenseClaimIDHistoryRoute = createRoute({
  method: 'put',
  path: '/ExpenseClaims/{ExpenseClaimID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific expense claim',
  operationId: 'createExpenseClaimHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ExpenseClaimID: ExpenseClaimIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getInvoicesRoute = createRoute({
  method: 'get',
  path: '/Invoices',
  tags: ['Accounting'],
  summary: 'Retrieves sales invoices or purchase bills',
  operationId: 'getInvoices',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="DRAFT"',
            'x-example-java': 'Status==&quot;&apos; + Invoice.StatusEnum.DRAFT + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\Invoice::STATUS_DRAFT . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::Invoice::DRAFT}',
            'x-example-csharp': 'Status==\\"DRAFT\\"',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'InvoiceNumber ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      IDs: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'IDs',
            'x-snake': 'ids',
            description: 'Filter by a comma-separated list of InvoicesIDs.',
            style: 'form',
            explode: false,
            example: '&quot;00000000-0000-0000-0000-000000000000&quot;',
            'x-example-java':
              'Arrays.asList(UUID.fromString("00000000-0000-0000-0000-000000000000"))',
            'x-example-php': '&quot;00000000-0000-0000-0000-000000000000&quot;',
            'x-example-csharp':
              'new List&lt;Guid&gt;{Guid.Parse("00000000-0000-0000-0000-000000000000")};',
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
            required: false,
          },
        }),
      InvoiceNumbers: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'InvoiceNumbers',
            'x-snake': 'invoice_numbers',
            description: 'Filter by a comma-separated list of InvoiceNumbers.',
            style: 'form',
            explode: false,
            example: '&quot;INV-001&quot;, &quot;INV-002&quot;',
            'x-example-java': 'Arrays.asList("INV-001","INV-002")',
            'x-example-php': '&quot;INV-001&quot;, &quot;INV-002&quot;',
            'x-example-csharp': 'new List&lt;string&gt;{&quot;INV-001&quot;,&quot;INV-002&quot;};',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      ContactIDs: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ContactIDs',
            'x-snake': 'contact_ids',
            description: 'Filter by a comma-separated list of ContactIDs.',
            style: 'form',
            explode: false,
            example: '&quot;00000000-0000-0000-0000-000000000000&quot;',
            'x-example-java':
              'Arrays.asList(UUID.fromString("00000000-0000-0000-0000-000000000000"))',
            'x-example-php': '&quot;00000000-0000-0000-0000-000000000000&quot;',
            'x-example-csharp':
              'new List&lt;Guid&gt;{Guid.Parse(&quot00000000-0000-0000-0000-000000000000&quot)};',
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
            required: false,
          },
        }),
      Statuses: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Statuses',
            'x-snake': 'statuses',
            description:
              'Filter by a comma-separated list Statuses. For faster response times we recommend using these explicit parameters instead of passing OR conditions into the Where filter.',
            explode: false,
            example: '&quot;DRAFT&quot;, &quot;SUBMITTED&quot;',
            'x-example-java': 'Arrays.asList("DRAFT","SUBMITTED")',
            'x-example-php': '&quot;DRAFT&quot;, &quot;SUBMITTED&quot;',
            'x-example-csharp': 'new List&lt;string&gt;{&quotDRAFT&quot,&quotSUBMITTED&quot};',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'e.g. page=1 – Up to 100 invoices will be returned in a single API call with line items shown for each invoice',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      includeArchived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeArchived',
            'x-snake': 'include_archived',
            description:
              'e.g. includeArchived=true - Invoices with a status of ARCHIVED will be included in the response',
            example: true,
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      createdByMyApp: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'createdByMyApp',
            'x-snake': 'created_by_my_app',
            description: "When set to true you'll only retrieve Invoices created by your app",
            example: false,
            'x-example-python': 'False',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      unitdp: UnitdpParamsSchema,
      summaryOnly: SummaryOnlyParamsSchema,
      pageSize: PageSizeParamsSchema,
      searchTerm: SearchTermParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Invoices array with all Invoices',
      content: {
        'application/json': {
          schema: InvoicesSchema,
          example: {
            Id: '900c500b-e83c-4ce2-902a-b8ba04751748',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552326816230)/',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 3 },
            Invoices: [
              {
                Type: 'ACCREC',
                InvoiceID: 'd4956132-ed94-4dd7-9eaa-aa22dfdf06f2',
                InvoiceNumber: 'INV-0001',
                Reference: 'Red Fish, Blue Fish',
                Payments: [],
                CreditNotes: [],
                Prepayments: [],
                Overpayments: [],
                AmountDue: 0,
                AmountPaid: 0,
                AmountCredited: 0,
                SentToContact: true,
                CurrencyRate: 1,
                HasErrors: false,
                IsDiscounted: false,
                HasAttachments: false,
                RepeatingInvoiceID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Contact: {
                  ContactID: 'a3675fc4-f8dd-4f03-ba5b-f1870566bcd7',
                  Name: 'Barney Rubble-83203',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2018-10-20T00:00:00',
                Date: '/Date(1539993600000+0000)/',
                DueDateString: '2018-12-30T00:00:00',
                DueDate: '/Date(1546128000000+0000)/',
                Status: 'VOIDED',
                LineAmountTypes: 'Exclusive',
                LineItems: [],
                SubTotal: 40,
                TotalTax: 0,
                Total: 40,
                UpdatedDateUTC: '/Date(1541176290160+0000)/',
                UpdatedDateUTCString: '2018-11-02T16:31:30Z',
                CurrencyCode: 'NZD',
              },
              {
                Type: 'ACCREC',
                InvoiceID: '046d8a6d-1ae1-4b4d-9340-5601bdf41b87',
                InvoiceNumber: 'INV-0002',
                Reference: 'Red Fish, Blue Fish',
                Payments: [
                  {
                    PaymentID: '99ea7f6b-c513-4066-bc27-b7c65dcd76c2',
                    Date: '/Date(1543449600000+0000)/',
                    Amount: 46,
                    CurrencyRate: 1,
                    HasAccount: false,
                    HasValidationErrors: false,
                  },
                ],
                CreditNotes: [],
                Prepayments: [],
                Overpayments: [],
                AmountDue: 0,
                AmountPaid: 46,
                AmountCredited: 0,
                SentToContact: true,
                CurrencyRate: 1,
                HasErrors: false,
                IsDiscounted: false,
                HasAttachments: false,
                Contact: {
                  ContactID: 'a3675fc4-f8dd-4f03-ba5b-f1870566bcd7',
                  Name: 'Barney Rubble-83203',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2018-10-20T00:00:00',
                Date: '/Date(1539993600000+0000)/',
                DueDateString: '2018-12-30T00:00:00',
                DueDate: '/Date(1546128000000+0000)/',
                Status: 'PAID',
                LineAmountTypes: 'Exclusive',
                LineItems: [],
                SubTotal: 40,
                TotalTax: 6,
                Total: 46,
                UpdatedDateUTC: '/Date(1541176592690+0000)/',
                UpdatedDateUTCString: '2018-11-02T16:36:32Z',
                CurrencyCode: 'NZD',
                FullyPaidOnDate: '/Date(1543449600000+0000)/',
              },
              {
                Type: 'ACCREC',
                InvoiceID: '7ef31b20-de17-4312-8382-412f869b1510',
                InvoiceNumber: 'INV-0003',
                Reference: '',
                Payments: [],
                CreditNotes: [],
                Prepayments: [],
                Overpayments: [],
                AmountDue: 115,
                AmountPaid: 0,
                AmountCredited: 0,
                CurrencyRate: 1,
                HasErrors: false,
                IsDiscounted: false,
                HasAttachments: false,
                Contact: {
                  ContactID: 'a3675fc4-f8dd-4f03-ba5b-f1870566bcd7',
                  Name: 'Barney Rubble-83203',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2018-11-02T00:00:00',
                Date: '/Date(1541116800000+0000)/',
                DueDateString: '2018-11-07T00:00:00',
                DueDate: '/Date(1541548800000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [],
                SubTotal: 100,
                TotalTax: 15,
                Total: 115,
                UpdatedDateUTC: '/Date(1541176648927+0000)/',
                UpdatedDateUTCString: '2018-11-02T16:37:28Z',
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putInvoicesRoute = createRoute({
  method: 'put',
  path: '/Invoices',
  tags: ['Accounting'],
  summary: 'Creates one or more sales invoices or purchase bills',
  operationId: 'createInvoices',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({
      summarizeErrors: SummarizeErrorsParamsSchema,
      unitdp: UnitdpParamsSchema,
      allowBackorders: AllowBackordersParamsSchema,
    }),
    body: {
      description: 'Invoices with an array of invoice objects in body of request',
      content: {
        'application/json': {
          schema: InvoicesSchema,
          example: {
            Invoices: [
              {
                Type: 'ACCREC',
                Contact: { ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8' },
                LineItems: [
                  {
                    Description: 'Acme Tires',
                    Quantity: 2,
                    UnitAmount: 20,
                    AccountCode: '200',
                    TaxType: 'NONE',
                    LineAmount: 40,
                  },
                ],
                Date: '2019-03-11',
                DueDate: '2018-12-10',
                Reference: 'Website Design',
                Status: 'AUTHORISED',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Invoices array with newly created Invoice',
      content: {
        'application/json': {
          schema: InvoicesSchema,
          example: {
            Id: 'ccece84a-075c-4fcd-9073-149d4f7a91cf',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552327126164)/',
            Invoices: [
              {
                Type: 'ACCREC',
                InvoiceID: 'ed255415-e141-4150-aab7-89c3bbbb851c',
                InvoiceNumber: 'INV-0007',
                Reference: 'Website Design',
                Prepayments: [],
                Overpayments: [],
                AmountDue: 40,
                AmountPaid: 0,
                SentToContact: false,
                CurrencyRate: 1,
                HasErrors: false,
                IsDiscounted: false,
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [
                    {
                      ContactGroupID: '17b44ed7-4389-4162-91cb-3dd5766e4e22',
                      Name: 'Oasis',
                      Status: 'ACTIVE',
                      Contacts: [],
                      HasValidationErrors: false,
                    },
                  ],
                  IsSupplier: true,
                  IsCustomer: true,
                  SalesTrackingCategories: [],
                  PurchasesTrackingCategories: [],
                  ContactPersons: [
                    {
                      FirstName: 'Debbie',
                      LastName: 'Gwyther',
                      EmailAddress: 'debbie@rockstar.com',
                      IncludeInEmails: false,
                    },
                  ],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-11T00:00:00',
                Date: '/Date(1552262400000+0000)/',
                DueDateString: '2018-12-10T00:00:00',
                DueDate: '/Date(1544400000000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Acme Tires',
                    UnitAmount: 20,
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: 40,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 2,
                    LineItemID: '5f7a612b-fdcc-4d33-90fa-a9f6bc6db32f',
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 40,
                TotalTax: 0,
                Total: 40,
                UpdatedDateUTC: '/Date(1552327126117+0000)/',
                UpdatedDateUTCString: '2019-03-11T17:58:46Z',
                CurrencyCode: 'NZD',
                StatusAttributeString: 'OK',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const postInvoicesRoute = createRoute({
  method: 'post',
  path: '/Invoices',
  tags: ['Accounting'],
  summary: 'Updates or creates one or more sales invoices or purchase bills',
  operationId: 'updateOrCreateInvoices',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({
      summarizeErrors: SummarizeErrorsParamsSchema,
      unitdp: UnitdpParamsSchema,
      allowBackorders: AllowBackordersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: InvoicesSchema,
          example: {
            Invoices: [
              {
                Type: 'ACCREC',
                Contact: { ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8' },
                LineItems: [
                  {
                    Description: 'Acme Tires',
                    Quantity: 2,
                    UnitAmount: 20,
                    AccountCode: '200',
                    TaxType: 'NONE',
                    LineAmount: 40,
                  },
                ],
                Date: '2019-03-11',
                DueDate: '2018-12-10',
                Reference: 'Website Design',
                Status: 'AUTHORISED',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Invoices array with newly created Invoice',
      content: {
        'application/json': {
          schema: InvoicesSchema,
          example: {
            Id: 'ccece84a-075c-4fcd-9073-149d4f7a91cf',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552327126164)/',
            Invoices: [
              {
                Type: 'ACCREC',
                InvoiceID: 'ed255415-e141-4150-aab7-89c3bbbb851c',
                InvoiceNumber: 'INV-0007',
                Reference: 'Website Design',
                Prepayments: [],
                Overpayments: [],
                AmountDue: 40,
                AmountPaid: 0,
                SentToContact: false,
                CurrencyRate: 1,
                HasErrors: false,
                IsDiscounted: false,
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [
                    {
                      ContactGroupID: '17b44ed7-4389-4162-91cb-3dd5766e4e22',
                      Name: 'Oasis',
                      Status: 'ACTIVE',
                      Contacts: [],
                      HasValidationErrors: false,
                    },
                  ],
                  IsSupplier: true,
                  IsCustomer: true,
                  SalesTrackingCategories: [],
                  PurchasesTrackingCategories: [],
                  ContactPersons: [
                    {
                      FirstName: 'Debbie',
                      LastName: 'Gwyther',
                      EmailAddress: 'debbie@rockstar.com',
                      IncludeInEmails: false,
                    },
                  ],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-11T00:00:00',
                Date: '/Date(1552262400000+0000)/',
                DueDateString: '2018-12-10T00:00:00',
                DueDate: '/Date(1544400000000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Acme Tires',
                    UnitAmount: 20,
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: 40,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 2,
                    LineItemID: '5f7a612b-fdcc-4d33-90fa-a9f6bc6db32f',
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 40,
                TotalTax: 0,
                Total: 40,
                UpdatedDateUTC: '/Date(1552327126117+0000)/',
                UpdatedDateUTCString: '2019-03-11T17:58:46Z',
                CurrencyCode: 'NZD',
                StatusAttributeString: 'OK',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getInvoicesInvoiceIDRoute = createRoute({
  method: 'get',
  path: '/Invoices/{InvoiceID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific sales invoice or purchase bill using a unique invoice Id',
  operationId: 'getInvoice',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema }),
    query: z.object({ unitdp: UnitdpParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Invoices array with specified Invoices',
      content: {
        'application/json': {
          schema: InvoicesSchema,
          example: {
            Id: '516f400a-b764-4c88-831b-12d2b210fa24',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1551981658323)/',
            Invoices: [
              {
                Type: 'ACCREC',
                InvoiceID: 'a03ffcd2-5d91-4c7e-b483-318584e9e439',
                InvoiceNumber: 'INV-0006',
                Reference: 'Tour',
                Payments: [
                  {
                    PaymentID: '38928000-e9a0-420c-8884-f624bab2a351',
                    Date: '/Date(1552953600000+0000)/',
                    Amount: 148062.76,
                    Reference: 'Yahoo',
                    CurrencyRate: 1,
                    HasAccount: false,
                    HasValidationErrors: false,
                  },
                ],
                Prepayments: [],
                Overpayments: [],
                AmountDue: 0,
                AmountPaid: 148062.76,
                SentToContact: false,
                CurrencyRate: 1,
                HasErrors: false,
                IsDiscounted: false,
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '3a2fe7e0-fac7-4ea2-afb2-31cedaabd294',
                    FileName: 'helo-heros.jpg',
                    Url: 'https://api.xero.com/api.xro/2.0/Invoices/a03ffcd2-5d91-4c7e-b483-318584e9e439/Attachments/helo-heros.jpg',
                    MimeType: 'image/jpeg',
                    ContentLength: 2878711,
                  },
                ],
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [
                    {
                      ContactGroupID: '17b44ed7-4389-4162-91cb-3dd5766e4e22',
                      Name: 'Oasis',
                      Status: 'ACTIVE',
                      Contacts: [],
                      HasValidationErrors: false,
                    },
                  ],
                  IsSupplier: true,
                  IsCustomer: true,
                  SalesTrackingCategories: [],
                  PurchasesTrackingCategories: [],
                  ContactPersons: [
                    {
                      FirstName: 'Debbie',
                      LastName: 'Gwyther',
                      EmailAddress: 'debbie@rockstar.com',
                      IncludeInEmails: false,
                    },
                  ],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-07T00:00:00',
                Date: '/Date(1551916800000+0000)/',
                DueDateString: '2019-03-13T00:00:00',
                DueDate: '/Date(1552435200000+0000)/',
                Status: 'PAID',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    ItemCode: '123',
                    Description: 'Guitars Fender Strat',
                    UnitAmount: 148062.76,
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: 148062.76,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: 'b18f39d9-7739-4246-9288-72afe939d2d5',
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 148062.76,
                TotalTax: 0,
                Total: 148062.76,
                UpdatedDateUTC: '/Date(1551981568133+0000)/',
                UpdatedDateUTCString: '2019-03-07T17:59:28Z',
                CurrencyCode: 'NZD',
                FullyPaidOnDate: '/Date(1552953600000+0000)/',
                StatusAttributeString: 'ERROR',
                ValidationErrors: [{ Message: 'Invoice # must be unique.' }],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postInvoicesInvoiceIDRoute = createRoute({
  method: 'post',
  path: '/Invoices/{InvoiceID}',
  tags: ['Accounting'],
  summary: 'Updates a specific sales invoices or purchase bills',
  operationId: 'updateInvoice',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema }),
    query: z.object({ unitdp: UnitdpParamsSchema, allowBackorders: AllowBackordersParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: InvoicesSchema,
          example: {
            Invoices: [
              {
                Reference: 'May the force be with you',
                InvoiceID: '00000000-0000-0000-0000-000000000000',
                LineItems: [],
                Contact: {},
                Type: 'ACCPAY',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Invoices array with updated Invoice',
      content: {
        'application/json': {
          schema: InvoicesSchema,
          example: {
            Id: 'bd83b60e-9d16-4a3b-9f59-0a2d0ccd35f2',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552329729002)/',
            Invoices: [
              {
                Type: 'ACCREC',
                InvoiceID: '4074292c-09b3-456d-84e7-add864c6c39b',
                InvoiceNumber: 'INV-0008',
                Reference: 'My the Force be With You',
                Prepayments: [],
                Overpayments: [],
                AmountDue: 575,
                AmountPaid: 0,
                SentToContact: false,
                CurrencyRate: 1,
                HasErrors: false,
                IsDiscounted: false,
                Contact: {
                  ContactID: 'be392c72-c121-4f83-9512-03ac71e54c20',
                  ContactStatus: 'ACTIVE',
                  Name: 'Luke Skywalker',
                  EmailAddress: '',
                  BankAccountDetails: '',
                  Addresses: [
                    { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                    { AddressType: 'POBOX', City: '', Region: '', PostalCode: '', Country: '' },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '',
                      PhoneAreaCode: '',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '',
                      PhoneAreaCode: '',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1552329691573+0000)/',
                  ContactGroups: [],
                  IsSupplier: false,
                  IsCustomer: true,
                  DefaultCurrency: 'NZD',
                  SalesTrackingCategories: [],
                  PurchasesTrackingCategories: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-11T00:00:00',
                Date: '/Date(1552262400000+0000)/',
                DueDateString: '2019-03-12T00:00:00',
                DueDate: '/Date(1552348800000+0000)/',
                Status: 'SUBMITTED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Light Saber',
                    UnitAmount: 500,
                    TaxType: 'OUTPUT2',
                    TaxAmount: 75,
                    LineAmount: 500,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '6de1bf9f-de95-4c47-9287-37305db758c9',
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 500,
                TotalTax: 75,
                Total: 575,
                UpdatedDateUTC: '/Date(1552329728987+0000)/',
                UpdatedDateUTCString: '2019-03-11T18:42:08Z',
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getInvoicesInvoiceIDPdfRoute = createRoute({
  method: 'get',
  path: '/Invoices/{InvoiceID}/pdf',
  tags: ['Accounting'],
  summary: 'Retrieves invoices or purchase bills as PDF files',
  operationId: 'getInvoiceAsPdf',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of byte array pdf version of specified Invoices',
      content: {
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const getInvoicesInvoiceIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/Invoices/{InvoiceID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves attachments for a specific invoice or purchase bill',
  operationId: 'getInvoiceAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array of Attachments for specified Invoices',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '7e357a45-69f5-4e8f-8d7b-15da8ef50aab',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552330258523)/',
            Attachments: [
              {
                AttachmentID: '9808ad7f-c8d4-41cf-995e-bc29cb76fd2c',
                FileName: 'foobar.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Invoices/4074292c-09b3-456d-84e7-add864c6c39b/Attachments/foobar.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
              {
                AttachmentID: '5a500c1a-5a02-48de-939e-1d234fd170d4',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Invoices/4074292c-09b3-456d-84e7-add864c6c39b/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getInvoicesInvoiceIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/Invoices/{InvoiceID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary:
    'Retrieves a specific attachment from a specific invoices or purchase bills by using a unique attachment Id',
  operationId: 'getInvoiceAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema, AttachmentID: AttachmentIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Invoice as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getInvoicesInvoiceIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/Invoices/{InvoiceID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves an attachment from a specific invoice or purchase bill by filename',
  operationId: 'getInvoiceAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema, FileName: FileNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Invoice as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putInvoicesInvoiceIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/Invoices/{InvoiceID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Creates an attachment for a specific invoice or purchase bill by filename',
  operationId: 'createInvoiceAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema, FileName: FileNameParamsSchema }),
    query: z.object({ IncludeOnline: IncludeOnlineParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with newly created Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '971fbd18-c850-453a-825f-63f2fee096ee',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552330001318)/',
            Attachments: [
              {
                AttachmentID: '5a500c1a-5a02-48de-939e-1d234fd170d4',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Invoices/4074292c-09b3-456d-84e7-add864c6c39b/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postInvoicesInvoiceIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/Invoices/{InvoiceID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Updates an attachment from a specific invoices or purchase bill by filename',
  operationId: 'updateInvoiceAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema, FileName: FileNameParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array with updated Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'acd7d618-5fef-4d45-849c-a339ea31a973',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552330524005)/',
            Attachments: [
              {
                AttachmentID: '08085449-fda3-45f4-a685-ff44c8a29ee3',
                FileName: 'HelloWorld.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Invoices/4074292c-09b3-456d-84e7-add864c6c39b/Attachments/HelloWorld.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getInvoicesInvoiceIDOnlineInvoiceRoute = createRoute({
  method: 'get',
  path: '/Invoices/{InvoiceID}/OnlineInvoice',
  tags: ['Accounting'],
  summary: 'Retrieves a URL to an online invoice',
  operationId: 'getOnlineInvoice',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type OnlineInvoice array with one OnlineInvoice',
      content: {
        'application/json': {
          schema: OnlineInvoicesSchema,
          example: {
            Id: 'd20705fb-fe1c-4366-835b-98de7474da3c',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552331100745)/',
            OnlineInvoices: [
              { OnlineInvoiceUrl: 'https://in.xero.com/bCWCCfytGdTXoJam9HENWlQt07G6zcDaj4gQojHu' },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postInvoicesInvoiceIDEmailRoute = createRoute({
  method: 'post',
  path: '/Invoices/{InvoiceID}/Email',
  tags: ['Accounting'],
  summary: 'Sends a copy of a specific invoice to related contact via email',
  operationId: 'emailInvoice',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema }),
    body: {
      content: { 'application/json': { schema: RequestEmptySchema, example: {} } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Success - return response 204 no content' },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getInvoicesInvoiceIDHistoryRoute = createRoute({
  method: 'get',
  path: '/Invoices/{InvoiceID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history records for a specific invoice',
  operationId: 'getInvoiceHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putInvoicesInvoiceIDHistoryRoute = createRoute({
  method: 'put',
  path: '/Invoices/{InvoiceID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific invoice',
  operationId: 'createInvoiceHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ InvoiceID: InvoiceIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse, 400: _400ErrorResponse },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getInvoiceRemindersSettingsRoute = createRoute({
  method: 'get',
  path: '/InvoiceReminders/Settings',
  tags: ['Accounting'],
  summary: 'Retrieves invoice reminder settings',
  operationId: 'getInvoiceReminders',
  request: { headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'Success - return response of Invoice Reminders',
      content: {
        'application/json': {
          schema: InvoiceRemindersSchema,
          example: {
            Id: 'c7cd0953-c012-4be8-b618-63ce4c2c3494',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552331430618)/',
            InvoiceReminders: [{ Enabled: false }],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const getItemsRoute = createRoute({
  method: 'get',
  path: '/Items',
  tags: ['Accounting'],
  summary: 'Retrieves items',
  operationId: 'getItems',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'IsSold==true',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Code ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitdp: UnitdpParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Items array with all Item',
      content: {
        'application/json': {
          schema: ItemsSchema,
          example: {
            Id: '8487e8d7-5fb3-4f02-b949-dec8f1e38182',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552331874897)/',
            Items: [
              {
                ItemID: 'c8c54d65-f3f2-452d-926e-bf450b12fb07',
                Code: '123',
                Description: 'Guitars Fender Strat',
                UpdatedDateUTC: '/Date(1551981476267+0000)/',
                PurchaseDetails: {},
                SalesDetails: { UnitPrice: 5000, AccountCode: '200', TaxType: 'OUTPUT2' },
                Name: 'Guitars',
                IsTrackedAsInventory: false,
                IsSold: true,
                IsPurchased: false,
              },
              {
                ItemID: 'a4544d51-48f6-441f-a623-99ecbced6ab7',
                Code: 'abc65591',
                Description: 'Barfoo',
                UpdatedDateUTC: '/Date(1552331873580+0000)/',
                PurchaseDetails: {},
                SalesDetails: {},
                Name: 'Hello11350',
                IsTrackedAsInventory: false,
                IsSold: true,
                IsPurchased: true,
              },
              {
                ItemID: '5a70a272-a481-4bcf-a8ca-efffd923ab48',
                Code: 'fg78Ac',
                Description: 'Fender Stratocaster Sunburst',
                PurchaseDescription: 'Fender Stratocaster Sunburst',
                UpdatedDateUTC: '/Date(1552331874000+0000)/',
                PurchaseDetails: { UnitPrice: 1500, COGSAccountCode: '500', TaxType: '' },
                SalesDetails: { UnitPrice: 5000, AccountCode: '200', TaxType: 'OUTPUT2' },
                Name: 'Fender Stratocaster',
                IsTrackedAsInventory: true,
                InventoryAssetAccountCode: '140',
                TotalCostPool: 0,
                QuantityOnHand: 0,
                QuantityAvailable: 0,
                QuantityOnBackOrder: 0,
                IsSold: true,
                IsPurchased: true,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const putItemsRoute = createRoute({
  method: 'put',
  path: '/Items',
  tags: ['Accounting'],
  summary: 'Creates one or more items',
  operationId: 'createItems',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema, unitdp: UnitdpParamsSchema }),
    body: {
      description: 'Items with an array of Item objects in body of request',
      content: {
        'application/json': {
          schema: ItemsSchema,
          example: {
            Items: [
              {
                Code: 'code123',
                Name: 'Item Name XYZ',
                Description: 'Foobar',
                InventoryAssetAccountCode: '140',
                PurchaseDetails: { COGSAccountCode: '500' },
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Items array with newly created Item',
      content: {
        'application/json': {
          schema: ItemsSchema,
          example: {
            Id: 'ae7ef7c8-9024-4d42-8d59-5f26ed3f508b',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552331871904)/',
            Items: [
              {
                ItemID: 'a4544d51-48f6-441f-a623-99ecbced6ab7',
                Code: 'abc65591',
                Description: 'foobar',
                UpdatedDateUTC: '/Date(1552331871707)/',
                PurchaseDetails: {},
                SalesDetails: {},
                Name: 'Hello11350',
                IsTrackedAsInventory: false,
                IsSold: true,
                IsPurchased: true,
                ValidationErrors: [{ Message: "Price List Item with Code ''abc'' already exists" }],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const postItemsRoute = createRoute({
  method: 'post',
  path: '/Items',
  tags: ['Accounting'],
  summary: 'Updates or creates one or more items',
  operationId: 'updateOrCreateItems',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema, unitdp: UnitdpParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ItemsSchema,
          example: {
            Items: [
              { Code: 'ItemCode123', Name: 'ItemName XYZ', Description: 'Item Description ABC' },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Items array with newly created Item',
      content: {
        'application/json': {
          schema: ItemsSchema,
          example: {
            Id: 'ae7ef7c8-9024-4d42-8d59-5f26ed3f508b',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552331871904)/',
            Items: [
              {
                ItemID: 'a4544d51-48f6-441f-a623-99ecbced6ab7',
                Code: 'abc65591',
                Description: 'foobar',
                UpdatedDateUTC: '/Date(1552331871707)/',
                PurchaseDetails: {},
                SalesDetails: {},
                Name: 'Hello11350',
                IsTrackedAsInventory: false,
                IsSold: true,
                IsPurchased: true,
                ValidationErrors: [{ Message: "Price List Item with Code ''abc'' already exists" }],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const getItemsItemIDRoute = createRoute({
  method: 'get',
  path: '/Items/{ItemID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific item using a unique item Id',
  operationId: 'getItem',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ItemID: ItemIDParamsSchema }),
    query: z.object({ unitdp: UnitdpParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Items array with specified Item',
      content: {
        'application/json': {
          schema: ItemsSchema,
          example: {
            Id: '0bbd8a92-9ba7-4711-8040-8d6a609ca7e8',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552333420160)/',
            Items: [
              {
                ItemID: 'c8c54d65-f3f2-452d-926e-bf450b12fb07',
                Code: '123',
                Description: 'Guitars Fender Strat',
                PurchaseDescription: 'Brand new Fender Strats',
                UpdatedDateUTC: '/Date(1552333309387+0000)/',
                PurchaseDetails: { UnitPrice: 2500, COGSAccountCode: '310', TaxType: 'INPUT2' },
                SalesDetails: { UnitPrice: 5000, AccountCode: '200', TaxType: 'OUTPUT2' },
                Name: 'Guitars',
                IsTrackedAsInventory: true,
                InventoryAssetAccountCode: '630',
                TotalCostPool: 25000,
                QuantityOnHand: 10,
                QuantityAvailable: 10,
                QuantityOnBackOrder: 0,
                IsSold: true,
                IsPurchased: true,
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const postItemsItemIDRoute = createRoute({
  method: 'post',
  path: '/Items/{ItemID}',
  tags: ['Accounting'],
  summary: 'Updates a specific item',
  operationId: 'updateItem',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ItemID: ItemIDParamsSchema }),
    query: z.object({ unitdp: UnitdpParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ItemsSchema,
          example: { Items: [{ Code: 'ItemCode123', Description: 'Description 123' }] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Items array with updated Item',
      content: {
        'application/json': {
          schema: ItemsSchema,
          example: {
            Id: '24feb629-6b14-499e-9aa1-fc2c596c0280',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552332558975)/',
            Items: [
              {
                ItemID: 'a7e87086-e0ae-4df2-83d7-e26e9a6b7786',
                Code: 'abc38306',
                Description: 'Hello Xero',
                UpdatedDateUTC: '/Date(1552332558924)/',
                PurchaseDetails: {},
                SalesDetails: {},
                Name: 'Hello8746',
                IsTrackedAsInventory: false,
                IsSold: true,
                IsPurchased: true,
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const deleteItemsItemIDRoute = createRoute({
  method: 'delete',
  path: '/Items/{ItemID}',
  tags: ['Accounting'],
  summary: 'Deletes a specific item',
  operationId: 'deleteItem',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ItemID: ItemIDParamsSchema }),
  },
  responses: {
    204: { description: 'Success - return response 204 no content' },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const getItemsItemIDHistoryRoute = createRoute({
  method: 'get',
  path: '/Items/{ItemID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history for a specific item',
  operationId: 'getItemHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ItemID: ItemIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const putItemsItemIDHistoryRoute = createRoute({
  method: 'put',
  path: '/Items/{ItemID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific item',
  operationId: 'createItemHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ItemID: ItemIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const getJournalsRoute = createRoute({
  method: 'get',
  path: '/Journals',
  tags: ['Accounting'],
  summary: 'Retrieves journals',
  operationId: 'getJournals',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            description:
              'Offset by a specified journal number. e.g. journals with a JournalNumber greater than the offset will be returned',
            example: 10,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      paymentsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'paymentsOnly',
            'x-snake': 'payments_only',
            description:
              'Filter to retrieve journals on a cash basis. Journals are returned on an accrual basis by default.',
            example: true,
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Journals array with all Journals',
      content: {
        'application/json': {
          schema: JournalsSchema,
          example: {
            Id: '49a09a97-df50-4679-8043-02c86e0dcf5f',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552335214210)/',
            Journals: [
              {
                JournalID: '1b31feeb-aa23-404c-8c19-24c827c53661',
                JournalDate: '/Date(1539993600000+0000)/',
                JournalNumber: 1,
                CreatedDateUTC: '/Date(1541176243467+0000)/',
                Reference: 'Red Fish, Blue Fish',
                SourceID: 'd4956132-ed94-4dd7-9eaa-aa22dfdf06f2',
                SourceType: 'ACCREC',
                JournalLines: [
                  {
                    JournalLineID: '81e6b1bf-d812-4f87-8dc4-698558ae043e',
                    AccountID: 'b94495d0-44ab-4199-a1d0-427a4877e100',
                    AccountCode: '610',
                    AccountType: 'CURRENT',
                    AccountName: 'Accounts Receivable',
                    Description: '',
                    NetAmount: 40,
                    GrossAmount: 40,
                    TaxAmount: 0,
                    TrackingCategories: [],
                  },
                  {
                    JournalLineID: 'ad221a8c-ebee-4c1b-88ed-d574e27e8803',
                    AccountID: 'e0a5d892-9f9f-44f0-a153-5cb7db125170',
                    AccountCode: '200',
                    AccountType: 'REVENUE',
                    AccountName: 'Sales',
                    Description: 'Acme Tires',
                    NetAmount: -40,
                    GrossAmount: -40,
                    TaxAmount: 0,
                    TaxType: 'NONE',
                    TaxName: 'No GST',
                    TrackingCategories: [],
                  },
                ],
              },
              {
                JournalID: '2be66e45-805b-46de-921d-c67e1d3dad2a',
                JournalDate: '/Date(1539993600000+0000)/',
                JournalNumber: 9,
                CreatedDateUTC: '/Date(1541176504083+0000)/',
                Reference: 'Red Fish, Blue Fish',
                SourceID: '046d8a6d-1ae1-4b4d-9340-5601bdf41b87',
                SourceType: 'ACCREC',
                JournalLines: [
                  {
                    JournalLineID: 'ba8a5680-a753-4a35-b3dd-0bc72e5c26a1',
                    AccountID: 'b94495d0-44ab-4199-a1d0-427a4877e100',
                    AccountCode: '610',
                    AccountType: 'CURRENT',
                    AccountName: 'Accounts Receivable',
                    Description: '',
                    NetAmount: 40,
                    GrossAmount: 40,
                    TaxAmount: 0,
                    TrackingCategories: [],
                  },
                  {
                    JournalLineID: '09a0b9b9-0222-4e24-8c31-efef472e22f1',
                    AccountID: 'e0a5d892-9f9f-44f0-a153-5cb7db125170',
                    AccountCode: '200',
                    AccountType: 'REVENUE',
                    AccountName: 'Sales',
                    Description: 'Acme Tires',
                    NetAmount: -40,
                    GrossAmount: -40,
                    TaxAmount: 0,
                    TaxType: 'NONE',
                    TaxName: 'No GST',
                    TrackingCategories: [],
                  },
                ],
              },
              {
                JournalID: 'd0ed2957-ebba-4d3a-8367-ae9ccd574885',
                JournalDate: '/Date(1543449600000+0000)/',
                JournalNumber: 14,
                CreatedDateUTC: '/Date(1541176592673+0000)/',
                SourceID: '99ea7f6b-c513-4066-bc27-b7c65dcd76c2',
                SourceType: 'ACCRECPAYMENT',
                JournalLines: [
                  {
                    JournalLineID: '1bdae2b7-3035-40ec-b344-b12b1c23adc4',
                    AccountID: 'b94495d0-44ab-4199-a1d0-427a4877e100',
                    AccountCode: '610',
                    AccountType: 'CURRENT',
                    AccountName: 'Accounts Receivable',
                    Description: '',
                    NetAmount: -46,
                    GrossAmount: -46,
                    TaxAmount: 0,
                    TrackingCategories: [],
                  },
                  {
                    JournalLineID: '353be85e-ae79-4bb3-9483-5ea7682fc0a3',
                    AccountID: '5690f1e8-1d02-4893-90c2-ee1a69eff942',
                    AccountCode: '970',
                    AccountType: 'EQUITY',
                    AccountName: 'Owner A Funds Introduced',
                    Description: '',
                    NetAmount: 46,
                    GrossAmount: 46,
                    TaxAmount: 0,
                    TrackingCategories: [],
                  },
                ],
              },
              {
                JournalID: '772e8133-7f12-4edc-ab98-aa6dceb16c9d',
                JournalDate: '/Date(1552262400000+0000)/',
                JournalNumber: 30,
                CreatedDateUTC: '/Date(1552333389227+0000)/',
                Reference: '',
                SourceID: '5376633d-0456-43a3-8234-e457a3f50a12',
                SourceType: 'ACCPAY',
                JournalLines: [
                  {
                    JournalLineID: '33469836-642f-4973-a708-0e99339dff4a',
                    AccountID: 'a2a4795b-a01f-40eb-afa6-a34b4514875d',
                    AccountCode: '800',
                    AccountType: 'CURRLIAB',
                    AccountName: 'Accounts Payable',
                    Description: '',
                    NetAmount: -28750,
                    GrossAmount: -28750,
                    TaxAmount: 0,
                    TrackingCategories: [],
                  },
                  {
                    JournalLineID: '4f3b6462-5cf6-4b55-a2ae-de4039878215',
                    AccountID: '53a12a15-7e9b-4a31-85f4-a7cee6d04215',
                    AccountCode: '630',
                    AccountType: 'CURRENT',
                    AccountName: 'Inventory',
                    Description: 'Brand new Fender Strats',
                    NetAmount: 25000,
                    GrossAmount: 28750,
                    TaxAmount: 3750,
                    TaxType: 'INPUT2',
                    TaxName: '15% GST on Expenses',
                    TrackingCategories: [],
                  },
                  {
                    JournalLineID: '534e822e-d441-48a7-8e57-5ad54729e83e',
                    AccountID: '17d9a4a0-3181-4803-a96b-f0dbe589091b',
                    AccountCode: '820',
                    AccountType: 'CURRLIAB',
                    AccountName: 'GST',
                    Description: '',
                    NetAmount: 3750,
                    GrossAmount: 3750,
                    TaxAmount: 0,
                    TrackingCategories: [],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.journals.read'] }],
})

export const getJournalsJournalIDRoute = createRoute({
  method: 'get',
  path: '/Journals/{JournalID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific journal using a unique journal Id.',
  operationId: 'getJournal',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ JournalID: JournalIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Journals array with specified Journal',
      content: {
        'application/json': {
          schema: JournalsSchema,
          example: {
            Id: '39ab8367-eb14-420d-83a9-e01ddddd21f8',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552335613002)/',
            Journals: [
              {
                JournalID: '1b31feeb-aa23-404c-8c19-24c827c53661',
                JournalDate: '/Date(1539993600000+0000)/',
                JournalNumber: 1,
                CreatedDateUTC: '/Date(1541176243467+0000)/',
                Reference: 'Red Fish, Blue Fish',
                JournalLines: [
                  {
                    JournalLineID: '81e6b1bf-d812-4f87-8dc4-698558ae043e',
                    AccountID: 'b94495d0-44ab-4199-a1d0-427a4877e100',
                    AccountCode: '610',
                    AccountType: 'CURRENT',
                    AccountName: 'Accounts Receivable',
                    Description: '',
                    NetAmount: 40,
                    GrossAmount: 40,
                    TaxAmount: 0,
                    TaxType: '',
                    TaxName: '',
                    TrackingCategories: [],
                  },
                  {
                    JournalLineID: 'ad221a8c-ebee-4c1b-88ed-d574e27e8803',
                    AccountID: 'e0a5d892-9f9f-44f0-a153-5cb7db125170',
                    AccountCode: '200',
                    AccountType: 'REVENUE',
                    AccountName: 'Sales',
                    Description: 'Acme Tires',
                    NetAmount: -40,
                    GrossAmount: -40,
                    TaxAmount: 0,
                    TaxType: 'NONE',
                    TaxName: 'No GST',
                    TrackingCategories: [],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.journals.read'] }],
})

export const getJournalsJournalNumberRoute = createRoute({
  method: 'get',
  path: '/Journals/{JournalNumber}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific journal using a unique journal number.',
  operationId: 'getJournalByNumber',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ JournalNumber: JournalNumberParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Journals array with specified Journal',
      content: {
        'application/json': {
          schema: JournalsSchema,
          example: {
            Id: '39ab8367-eb14-420d-83a9-e01ddddd21f8',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552335613002)/',
            Journals: [
              {
                JournalID: '1b31feeb-aa23-404c-8c19-24c827c53661',
                JournalDate: '/Date(1539993600000+0000)/',
                JournalNumber: 1,
                CreatedDateUTC: '/Date(1541176243467+0000)/',
                Reference: 'Red Fish, Blue Fish',
                JournalLines: [
                  {
                    JournalLineID: '81e6b1bf-d812-4f87-8dc4-698558ae043e',
                    AccountID: 'b94495d0-44ab-4199-a1d0-427a4877e100',
                    AccountCode: '610',
                    AccountType: 'CURRENT',
                    AccountName: 'Accounts Receivable',
                    Description: '',
                    NetAmount: 40,
                    GrossAmount: 40,
                    TaxAmount: 0,
                    TaxType: '',
                    TaxName: '',
                    TrackingCategories: [],
                  },
                  {
                    JournalLineID: 'ad221a8c-ebee-4c1b-88ed-d574e27e8803',
                    AccountID: 'e0a5d892-9f9f-44f0-a153-5cb7db125170',
                    AccountCode: '200',
                    AccountType: 'REVENUE',
                    AccountName: 'Sales',
                    Description: 'Acme Tires',
                    NetAmount: -40,
                    GrossAmount: -40,
                    TaxAmount: 0,
                    TaxType: 'NONE',
                    TaxName: 'No GST',
                    TrackingCategories: [],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.journals.read'] }],
})

export const getLinkedTransactionsRoute = createRoute({
  method: 'get',
  path: '/LinkedTransactions',
  tags: ['Accounting'],
  summary: 'Retrieves linked transactions (billable expenses)',
  operationId: 'getLinkedTransactions',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'Up to 100 linked transactions will be returned in a single API call. Use the page parameter to specify the page to be returned e.g. page=1.',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      LinkedTransactionID: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'LinkedTransactionID',
            'x-snake': 'linked_transaction_id',
            description: 'The Xero identifier for an Linked Transaction',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      SourceTransactionID: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'SourceTransactionID',
            'x-snake': 'source_transaction_id',
            description:
              'Filter by the SourceTransactionID. Get the linked transactions created from a particular ACCPAY invoice',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      ContactID: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ContactID',
            'x-snake': 'contact_id',
            description:
              'Filter by the ContactID. Get all the linked transactions that have been assigned to a particular customer.',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      Status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Status',
            'x-snake': 'status',
            description:
              'Filter by the combination of ContactID and Status. Get  the linked transactions associated to a  customer and with a status',
            example: 'APPROVED',
            schema: { type: 'string' },
            required: false,
          },
        }),
      TargetTransactionID: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'TargetTransactionID',
            'x-snake': 'target_transaction_id',
            description:
              'Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type LinkedTransactions array with all LinkedTransaction',
      content: {
        'application/json': {
          schema: LinkedTransactionsSchema,
          example: {
            Id: '516aabd0-e670-48d5-b0eb-10dce4494dd8',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552348338096)/',
            LinkedTransactions: [
              {
                LinkedTransactionID: '5cf7d9c0-b9a7-4433-a2dc-ae3c11bba39b',
                SourceTransactionID: 'aec416dd-38ea-40dc-9f0b-813c8c71f87f',
                SourceLineItemID: '77e0b23b-5b79-4f4b-ae20-c9031d41442f',
                ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                TargetTransactionID: '83693fc1-5b05-4807-b190-109d4a85dd5f',
                TargetLineItemID: 'd5128ff1-0f39-4d2a-a6d5-46dfaf5f075c',
                Status: 'ONDRAFT',
                Type: 'BILLABLEEXPENSE',
                UpdatedDateUTC: '/Date(1552347991000+0000)/',
                SourceTransactionTypeCode: 'ACCPAY',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putLinkedTransactionsRoute = createRoute({
  method: 'put',
  path: '/LinkedTransactions',
  tags: ['Accounting'],
  summary: 'Creates linked transactions (billable expenses)',
  operationId: 'createLinkedTransaction',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'LinkedTransaction object in body of request',
      content: {
        'application/json': {
          schema: LinkedTransactionSchema,
          example: {
            LinkedTransactions: [
              {
                SourceTransactionID: 'a848644a-f20f-4630-98c3-386bd7505631',
                SourceLineItemID: 'b0df260d-3cc8-4ced-9bd6-41924f624ed3',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type LinkedTransactions array with newly created LinkedTransaction',
      content: {
        'application/json': {
          schema: LinkedTransactionsSchema,
          example: {
            Id: 'f32b30e5-32d1-42a8-bcc9-5b22828f725c',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552351054646)/',
            LinkedTransactions: [
              {
                LinkedTransactionID: 'e9684b6c-4df9-45a0-917b-85cc29857008',
                SourceTransactionID: 'a848644a-f20f-4630-98c3-386bd7505631',
                SourceLineItemID: 'b0df260d-3cc8-4ced-9bd6-41924f624ed3',
                Status: 'DRAFT',
                Type: 'BILLABLEEXPENSE',
                UpdatedDateUTC: '/Date(1552351055000+0000)/',
                SourceTransactionTypeCode: 'ACCPAY',
                ValidationErrors: [
                  { Message: 'The SourceLineItemID and SourceTransactionID do not match' },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getLinkedTransactionsLinkedTransactionIDRoute = createRoute({
  method: 'get',
  path: '/LinkedTransactions/{LinkedTransactionID}',
  tags: ['Accounting'],
  summary:
    'Retrieves a specific linked transaction (billable expenses) using a unique linked transaction Id',
  operationId: 'getLinkedTransaction',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ LinkedTransactionID: LinkedTransactionIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type LinkedTransactions array with a specified LinkedTransaction',
      content: {
        'application/json': {
          schema: LinkedTransactionsSchema,
          example: {
            Id: '171ca542-874d-44e2-8930-db9bccd7d88b',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552348339875)/',
            LinkedTransactions: [
              {
                LinkedTransactionID: '5cf7d9c0-b9a7-4433-a2dc-ae3c11bba39b',
                SourceTransactionID: 'aec416dd-38ea-40dc-9f0b-813c8c71f87f',
                SourceLineItemID: '77e0b23b-5b79-4f4b-ae20-c9031d41442f',
                ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                TargetTransactionID: '83693fc1-5b05-4807-b190-109d4a85dd5f',
                TargetLineItemID: 'd5128ff1-0f39-4d2a-a6d5-46dfaf5f075c',
                Status: 'ONDRAFT',
                Type: 'BILLABLEEXPENSE',
                UpdatedDateUTC: '/Date(1552347991000+0000)/',
                SourceTransactionTypeCode: 'ACCPAY',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postLinkedTransactionsLinkedTransactionIDRoute = createRoute({
  method: 'post',
  path: '/LinkedTransactions/{LinkedTransactionID}',
  tags: ['Accounting'],
  summary: 'Updates a specific linked transactions (billable expenses)',
  operationId: 'updateLinkedTransaction',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ LinkedTransactionID: LinkedTransactionIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: LinkedTransactionsSchema,
          example: {
            LinkedTransactions: [
              {
                SourceTransactionID: '00000000-0000-0000-0000-000000000000',
                SourceLineItemID: '00000000-0000-0000-0000-000000000000',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type LinkedTransactions array with updated LinkedTransaction',
      content: {
        'application/json': {
          schema: LinkedTransactionsSchema,
          example: {
            Id: 'bd364af7-08f0-432b-81db-c1e5ba05f3dd',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552351488159)/',
            LinkedTransactions: [
              {
                LinkedTransactionID: 'e9684b6c-4df9-45a0-917b-85cc29857008',
                SourceTransactionID: 'a848644a-f20f-4630-98c3-386bd7505631',
                SourceLineItemID: 'b0df260d-3cc8-4ced-9bd6-41924f624ed3',
                ContactID: '4e1753b9-018a-4775-b6aa-1bc7871cfee3',
                Status: 'DRAFT',
                Type: 'BILLABLEEXPENSE',
                UpdatedDateUTC: '/Date(1552351055000+0000)/',
                SourceTransactionTypeCode: 'ACCPAY',
              },
            ],
          },
        },
      },
    },
    400: {
      description:
        'Success - return response of type LinkedTransactions array with updated LinkedTransaction',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            ErrorNumber: 10,
            Type: 'ValidationException',
            Message: 'A validation exception occurred',
            Elements: [
              {
                LinkedTransactionID: '5a68b5b4-8cf0-4af5-8c3c-513cc19e1c73',
                SourceTransactionID: 'aec416dd-38ea-40dc-9f0b-813c8c71f87f',
                SourceLineItemID: '77e0b23b-5b79-4f4b-ae20-c9031d41442f',
                ContactID: '4e1753b9-018a-4775-b6aa-1bc7871cfee3',
                TargetTransactionID: '83693fc1-5b05-4807-b190-109d4a85dd5f',
                TargetLineItemID: 'd5128ff1-0f39-4d2a-a6d5-46dfaf5f075c',
                Status: 'ONDRAFT',
                Type: 'BILLABLEEXPENSE',
                UpdatedDateUTC: '/Date(1552349706000+0000)/',
                SourceTransactionTypeCode: 'ACCPAY',
                ValidationErrors: [
                  { Message: 'The ContactID and the TargetTransaction ContactID do not match' },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const deleteLinkedTransactionsLinkedTransactionIDRoute = createRoute({
  method: 'delete',
  path: '/LinkedTransactions/{LinkedTransactionID}',
  tags: ['Accounting'],
  summary: 'Deletes a specific linked transactions (billable expenses)',
  operationId: 'deleteLinkedTransaction',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ LinkedTransactionID: LinkedTransactionIDParamsSchema }),
  },
  responses: {
    204: { description: 'Success - return response 204 no content' },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getManualJournalsRoute = createRoute({
  method: 'get',
  path: '/ManualJournals',
  tags: ['Accounting'],
  summary: 'Retrieves manual journals',
  operationId: 'getManualJournals',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="DRAFT"',
            'x-example-csharp': 'Status==\\"DRAFT\\"',
            'x-example-java':
              'Status==&quot;&apos; + ManualJournal.StatusEnum.DRAFT + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\ManualJournal::STATUS_DRAFT . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::ManualJournal::DRAFT}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Date ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'e.g. page=1 – Up to 100 manual journals will be returned in a single API call with line items shown for each overpayment',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageSize: PageSizeParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type ManualJournals array with a all ManualJournals',
      content: {
        'application/json': {
          schema: ManualJournalsSchema,
          example: {
            Id: '8a508ec1-b578-48bf-97df-020c918fbf7d',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552357217359)/',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 3 },
            ManualJournals: [
              {
                Date: '/Date(1553126400000+0000)/',
                Status: 'POSTED',
                LineAmountTypes: 'NoTax',
                UpdatedDateUTC: '/Date(1552357188083+0000)/',
                ManualJournalID: '0b159335-606b-485f-b51b-97b3b32bad32',
                Narration: "Reversal: These aren''t the droids you are looking for",
                JournalLines: [],
                ShowOnCashBasisReports: true,
                HasAttachments: false,
              },
              {
                Date: '/Date(1552348800000+0000)/',
                Status: 'POSTED',
                LineAmountTypes: 'NoTax',
                UpdatedDateUTC: '/Date(1552357188147+0000)/',
                ManualJournalID: '99cb8353-ce73-4a5d-8e0d-8b0edf86cfc4',
                Narration: "These aren''t the droids you are looking for",
                JournalLines: [],
                ShowOnCashBasisReports: true,
                HasAttachments: true,
              },
              {
                Date: '/Date(1552262400000+0000)/',
                Status: 'DRAFT',
                LineAmountTypes: 'NoTax',
                UpdatedDateUTC: '/Date(1552357216843+0000)/',
                ManualJournalID: 'ecb6b362-c78f-462a-a229-a66abf115e92',
                Narration: 'Foo bar',
                JournalLines: [],
                ShowOnCashBasisReports: true,
                HasAttachments: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putManualJournalsRoute = createRoute({
  method: 'put',
  path: '/ManualJournals',
  tags: ['Accounting'],
  summary: 'Creates one or more manual journals',
  operationId: 'createManualJournals',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'ManualJournals array with ManualJournal object in body of request',
      content: {
        'application/json': {
          schema: ManualJournalsSchema,
          example: {
            ManualJournals: [
              {
                Narration: 'Journal Desc',
                JournalLines: [
                  { LineAmount: 100, AccountCode: '400', Description: 'Money Movement' },
                  {
                    LineAmount: -100,
                    AccountCode: '400',
                    Description: 'Prepayment of things',
                    Tracking: [{ Name: 'North', Option: 'Region' }],
                  },
                ],
                Date: '2019-03-14',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type ManualJournals array with newly created ManualJournal',
      content: {
        'application/json': {
          schema: ManualJournalsSchema,
          example: {
            Id: '45dfa608-0fcb-4f30-a377-c82cd348569c',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552595972952)/',
            ManualJournals: [
              {
                Date: '/Date(1552521600000+0000)/',
                Status: 'DRAFT',
                LineAmountTypes: 'NoTax',
                UpdatedDateUTC: '/Date(1552595972920+0000)/',
                ManualJournalID: 'd312dd5e-a53e-46d1-9d51-c569ef4570b7',
                Narration: 'Foo bar',
                JournalLines: [
                  {
                    Description: 'Hello there',
                    TaxType: 'NONE',
                    LineAmount: 100,
                    AccountCode: '400',
                    Tracking: [],
                    AccountID: 'c4f29c22-28c2-4a13-9eab-ecbbd641ffdf',
                    IsBlank: false,
                  },
                  {
                    Description: 'Goodbye',
                    TaxType: 'NONE',
                    LineAmount: -100,
                    AccountCode: '400',
                    Tracking: [
                      {
                        Name: 'Simpsons',
                        Option: 'Bart',
                        TrackingCategoryID: '6a68adde-f210-4465-b0a9-0d8cc6f50762',
                        TrackingOptionID: 'dc54c220-0140-495a-b925-3246adc0075f',
                      },
                    ],
                    AccountID: 'c4f29c22-28c2-4a13-9eab-ecbbd641ffdf',
                    IsBlank: false,
                  },
                ],
                ShowOnCashBasisReports: true,
                Warnings: [
                  {
                    Message:
                      "Account code ''476'' has been removed as it does not match a recognised account.",
                  },
                ],
                ValidationErrors: [
                  { Message: 'The total debits (100.00) must equal total credits (-10.00)' },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const postManualJournalsRoute = createRoute({
  method: 'post',
  path: '/ManualJournals',
  tags: ['Accounting'],
  summary: 'Updates or creates a single manual journal',
  operationId: 'updateOrCreateManualJournals',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'ManualJournals array with ManualJournal object in body of request',
      content: {
        'application/json': {
          schema: ManualJournalsSchema,
          example: {
            ManualJournals: [
              {
                Narration: 'Journal Desc',
                JournalLines: [
                  { LineAmount: 100, AccountCode: '400', Description: 'Money Movement' },
                  {
                    LineAmount: -100,
                    AccountCode: '400',
                    Description: 'Prepayment of things',
                    Tracking: [{ Name: 'North', Option: 'Region' }],
                  },
                ],
                Date: '2019-03-14',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type ManualJournals array with newly created ManualJournal',
      content: {
        'application/json': {
          schema: ManualJournalsSchema,
          example: {
            Id: '45dfa608-0fcb-4f30-a377-c82cd348569c',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552595972952)/',
            ManualJournals: [
              {
                Date: '/Date(1552521600000+0000)/',
                Status: 'DRAFT',
                LineAmountTypes: 'NoTax',
                UpdatedDateUTC: '/Date(1552595972920+0000)/',
                ManualJournalID: 'd312dd5e-a53e-46d1-9d51-c569ef4570b7',
                Narration: 'Foo bar',
                JournalLines: [
                  {
                    Description: 'Hello there',
                    TaxType: 'NONE',
                    LineAmount: 100,
                    AccountCode: '400',
                    Tracking: [],
                    AccountID: 'c4f29c22-28c2-4a13-9eab-ecbbd641ffdf',
                    IsBlank: false,
                  },
                  {
                    Description: 'Goodbye',
                    TaxType: 'NONE',
                    LineAmount: -100,
                    AccountCode: '400',
                    Tracking: [
                      {
                        Name: 'Simpsons',
                        Option: 'Bart',
                        TrackingCategoryID: '6a68adde-f210-4465-b0a9-0d8cc6f50762',
                        TrackingOptionID: 'dc54c220-0140-495a-b925-3246adc0075f',
                      },
                    ],
                    AccountID: 'c4f29c22-28c2-4a13-9eab-ecbbd641ffdf',
                    IsBlank: false,
                  },
                ],
                ShowOnCashBasisReports: true,
                Warnings: [
                  {
                    Message:
                      "Account code ''476'' has been removed as it does not match a recognised account.",
                  },
                ],
                ValidationErrors: [
                  { Message: 'The total debits (100.00) must equal total credits (-10.00)' },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getManualJournalsManualJournalIDRoute = createRoute({
  method: 'get',
  path: '/ManualJournals/{ManualJournalID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific manual journal',
  operationId: 'getManualJournal',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ManualJournalID: ManualJournalIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type ManualJournals array with a specified ManualJournals',
      content: {
        'application/json': {
          schema: ManualJournalsSchema,
          example: {
            Id: '7321fc21-1a13-4f40-ae47-df59cff5676d',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552399859139)/',
            ManualJournals: [
              {
                Date: '/Date(1552348800000+0000)/',
                Status: 'POSTED',
                LineAmountTypes: 'NoTax',
                UpdatedDateUTC: '/Date(1552357188147+0000)/',
                ManualJournalID: '99cb8353-ce73-4a5d-8e0d-8b0edf86cfc4',
                Narration: "These aren''t the droids you are looking for",
                JournalLines: [
                  {
                    Description: "These aren''t the droids you are looking for",
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: 100,
                    AccountCode: '429',
                    Tracking: [],
                    AccountID: '160bad11-c1b7-4c7e-8903-dca925d78721',
                    IsBlank: false,
                  },
                  {
                    Description: 'Yes the are',
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: -100,
                    AccountCode: '200',
                    Tracking: [],
                    AccountID: 'e0a5d892-9f9f-44f0-a153-5cb7db125170',
                    IsBlank: false,
                  },
                ],
                ShowOnCashBasisReports: true,
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '166ca8f8-8bc6-4780-8466-a0e474d586ea',
                    FileName: 'giphy.gif',
                    Url: 'https://api.xero.com/api.xro/2.0/manualjournal/99cb8353-ce73-4a5d-8e0d-8b0edf86cfc4/Attachments/giphy.gif',
                    MimeType: 'image/gif',
                    ContentLength: 495727,
                  },
                  {
                    AttachmentID: '5e5036f9-b1e0-4c5d-a93f-61900137e40b',
                    FileName: 'ridehistory.pdf',
                    Url: 'https://api.xero.com/api.xro/2.0/manualjournal/99cb8353-ce73-4a5d-8e0d-8b0edf86cfc4/Attachments/ridehistory.pdf',
                    MimeType: 'application/pdf',
                    ContentLength: 4423,
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postManualJournalsManualJournalIDRoute = createRoute({
  method: 'post',
  path: '/ManualJournals/{ManualJournalID}',
  tags: ['Accounting'],
  summary: 'Updates a specific manual journal',
  operationId: 'updateManualJournal',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ManualJournalID: ManualJournalIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ManualJournalsSchema,
          example: {
            ManualJournals: [
              {
                Narration: 'Hello Xero',
                ManualJournalID: '00000000-0000-0000-0000-000000000000',
                JournalLines: [],
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type ManualJournals array with an updated ManualJournal',
      content: {
        'application/json': {
          schema: ManualJournalsSchema,
          example: {
            Id: 'b694559c-686c-4047-b657-661ba6c0dd1f',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552357736850)/',
            ManualJournals: [
              {
                Date: '/Date(1552262400000+0000)/',
                Status: 'DRAFT',
                LineAmountTypes: 'NoTax',
                UpdatedDateUTC: '/Date(1552357736820+0000)/',
                ManualJournalID: '07eac261-78ef-47a0-a0eb-a57b74137877',
                Narration: 'Hello Xero',
                JournalLines: [
                  {
                    Description: 'Hello there',
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: 100,
                    AccountCode: '400',
                    Tracking: [],
                    AccountID: 'c4f29c22-28c2-4a13-9eab-ecbbd641ffdf',
                    IsBlank: false,
                  },
                  {
                    Description: 'Goodbye',
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: -100,
                    AccountCode: '400',
                    Tracking: [],
                    AccountID: 'c4f29c22-28c2-4a13-9eab-ecbbd641ffdf',
                    IsBlank: false,
                  },
                ],
                ShowOnCashBasisReports: true,
                HasAttachments: false,
                Attachments: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getManualJournalsManualJournalIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/ManualJournals/{ManualJournalID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves attachment for a specific manual journal',
  operationId: 'getManualJournalAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ManualJournalID: ManualJournalIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with all Attachments for a ManualJournals',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '5fa4b3ef-7945-45a7-9bab-10e830673dfb',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552404121471)/',
            Attachments: [
              {
                AttachmentID: '16e86f32-3e25-4209-8662-c0dfd91b654c',
                FileName: 'HelloWorld.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/ManualJournals/0b159335-606b-485f-b51b-97b3b32bad32/Attachments/HelloWorld.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
              {
                AttachmentID: 'ff7c439e-a057-4807-ac2c-b558d7df7511',
                FileName: 'foobar.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/ManualJournals/0b159335-606b-485f-b51b-97b3b32bad32/Attachments/foobar.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getManualJournalsManualJournalIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/ManualJournals/{ManualJournalID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary:
    'Allows you to retrieve a specific attachment from a specific manual journal using a unique attachment Id',
  operationId: 'getManualJournalAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      ManualJournalID: ManualJournalIDParamsSchema,
      AttachmentID: AttachmentIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Manual Journal as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getManualJournalsManualJournalIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/ManualJournals/{ManualJournalID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment from a specific manual journal by file name',
  operationId: 'getManualJournalAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      ManualJournalID: ManualJournalIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Manual Journal as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putManualJournalsManualJournalIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/ManualJournals/{ManualJournalID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Creates a specific attachment for a specific manual journal by file name',
  operationId: 'createManualJournalAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      ManualJournalID: ManualJournalIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with a newly created Attachment for a ManualJournals',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'a864994c-e7d7-4dee-b5ca-0a729fde2f39',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552400898428)/',
            Attachments: [
              {
                AttachmentID: '47ac97ff-d4f9-48a0-8a8e-49fae29129e7',
                FileName: 'foobar.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/ManualJournals/0b159335-606b-485f-b51b-97b3b32bad32/Attachments/foobar.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postManualJournalsManualJournalIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/ManualJournals/{ManualJournalID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Updates a specific attachment from a specific manual journal by file name',
  operationId: 'updateManualJournalAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      ManualJournalID: ManualJournalIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with an update Attachment for a ManualJournals',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'e1cb9deb-a8f0-477f-b4d1-cf0c6c39e080',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552401039306)/',
            Attachments: [
              {
                AttachmentID: '16e86f32-3e25-4209-8662-c0dfd91b654c',
                FileName: 'HelloWorld.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/ManualJournals/0b159335-606b-485f-b51b-97b3b32bad32/Attachments/HelloWorld.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getManualJournalsManualJournalIDHistoryRoute = createRoute({
  method: 'get',
  path: '/ManualJournals/{ManualJournalID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history for a specific manual journal',
  operationId: 'getManualJournalsHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ManualJournalID: ManualJournalIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putManualJournalsManualJournalIDHistoryRoute = createRoute({
  method: 'put',
  path: '/ManualJournals/{ManualJournalID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific manual journal',
  operationId: 'createManualJournalHistoryRecord',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ManualJournalID: ManualJournalIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse, 400: _400ErrorResponse },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getOrganisationRoute = createRoute({
  method: 'get',
  path: '/Organisation',
  tags: ['Accounting'],
  summary: 'Retrieves Xero organisation details',
  operationId: 'getOrganisations',
  request: { headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'Success - return response of type Organisation array with all Organisation',
      content: {
        'application/json': {
          schema: OrganisationsSchema,
          example: {
            Id: '27b7a645-a3ee-43c8-b2c6-a2fa7b84c8c5',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552404447003)/',
            Organisations: [
              {
                APIKey: 'CTJ60UH519MXQIXEJSDPDALS3EOZ5Y',
                Name: 'Dev Evangelist - Sid Test 3 (NZ-2016-02)',
                LegalName: 'Dev Evangelist - Sid Test 3 (NZ-2016-02)',
                PaysTax: true,
                Version: 'NZ',
                OrganisationType: 'COMPANY',
                BaseCurrency: 'NZD',
                CountryCode: 'NZ',
                IsDemoCompany: false,
                OrganisationStatus: 'ACTIVE',
                TaxNumber: '071-138-054',
                FinancialYearEndDay: 31,
                FinancialYearEndMonth: 3,
                SalesTaxBasis: 'PAYMENTS',
                SalesTaxPeriod: 'TWOMONTHS',
                DefaultSalesTax: 'Tax Exclusive',
                DefaultPurchasesTax: 'Tax Exclusive',
                PeriodLockDate: '/Date(1546214400000+0000)/',
                EndOfYearLockDate: '/Date(1546214400000+0000)/',
                CreatedDateUTC: '/Date(1455827393000)/',
                OrganisationEntityType: 'COMPANY',
                Timezone: 'NEWZEALANDSTANDARDTIME',
                ShortCode: '!mBdtL',
                OrganisationID: 'b2c885a9-4bb9-4a00-9b6e-6c2bf60b1a2b',
                Edition: 'BUSINESS',
                Class: 'PREMIUM',
                Addresses: [],
                Phones: [],
                ExternalLinks: [],
                PaymentTerms: {},
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const getOrganisationActionsRoute = createRoute({
  method: 'get',
  path: '/Organisation/Actions',
  tags: ['Accounting'],
  summary:
    'Retrieves a list of the key actions your app has permission to perform in the connected Xero organisation.',
  operationId: 'getOrganisationActions',
  request: { headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'Success - return response of type Actions array with all key actions',
      content: {
        'application/json': {
          schema: ActionsSchema,
          example: {
            Id: 'f02c0dd1-1917-4d57-9853-997f6bcaf2bc',
            Status: 'OK',
            ProviderName: 'Java OA2 dev 01',
            DateTimeUTC: '/Date(1602883301013)/',
            Actions: [
              { Name: 'CreateApprovedInvoice', Status: 'ALLOWED' },
              { Name: 'CreateDraftPurchaseOrder', Status: 'ALLOWED' },
              { Name: 'CreateApprovedBill', Status: 'ALLOWED' },
              { Name: 'AttachFilesIntoInvoice', Status: 'ALLOWED' },
              { Name: 'UseMulticurrency', Status: 'ALLOWED' },
              { Name: 'CreateDraftInvoice', Status: 'ALLOWED' },
              { Name: 'CreateRepeatingInvoice', Status: 'ALLOWED' },
              { Name: 'CreateRepeatingBill', Status: 'ALLOWED' },
              { Name: 'CreateSentQuote', Status: 'ALLOWED' },
              { Name: 'CreateInvoicePayment', Status: 'ALLOWED' },
              { Name: 'CreateApprovedPurchaseOrder', Status: 'ALLOWED' },
              { Name: 'CreateDraftQuote', Status: 'ALLOWED' },
              { Name: 'CreateDraftBill', Status: 'ALLOWED' },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const getOrganisationOrganisationIDCISSettingsRoute = createRoute({
  method: 'get',
  path: '/Organisation/{OrganisationID}/CISSettings',
  tags: ['Accounting'],
  summary: 'Retrieves the CIS settings for the Xero organistaion.',
  operationId: 'getOrganisationCISSettings',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ OrganisationID: OrganisationIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type Organisation array with specified Organisation',
      content: {
        'application/json': {
          schema: CISOrgSettingsSchema,
          example: { CISSettings: [{ CISEnambed: true, Rate: 10 }] },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const getOverpaymentsRoute = createRoute({
  method: 'get',
  path: '/Overpayments',
  tags: ['Accounting'],
  summary: 'Retrieves overpayments',
  operationId: 'getOverpayments',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="AUTHORISED"',
            'x-example-csharp': 'Status==\\"AUTHORISED\\"',
            'x-example-java':
              'Status==&quot;&apos; + Overpayment.StatusEnum.AUTHORISED + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\Overpayment::STATUS_AUTHORISED . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::Overpayment::AUTHORISED}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Status ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'e.g. page=1 – Up to 100 overpayments will be returned in a single API call with line items shown for each overpayment',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      unitdp: UnitdpParamsSchema,
      pageSize: PageSizeParamsSchema,
      References: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'References',
            'x-snake': 'references',
            description: 'Filter by a comma-separated list of References',
            style: 'form',
            explode: false,
            example: '&quot;Ref1&quot;, &quot;Ref2&quot;',
            'x-example-java': 'Arrays.asList("Ref1","Ref2")',
            'x-example-php': '&quot;Ref1&quot;, &quot;Ref2&quot;',
            'x-example-csharp': 'new List&lt;string&gt;{&quot;Ref1&quot;,&quot;Ref2&quot;}',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Overpayments array with all Overpayments',
      content: {
        'application/json': {
          schema: OverpaymentsSchema,
          example: {
            Id: 'c0ce675e-e5bc-4b2a-a20e-76a9eaedf89d',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552428951416)/',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 5 },
            Overpayments: [
              {
                OverpaymentID: '098b4dcb-5622-4699-87f8-9d40c4ccceb3',
                ID: '098b4dcb-5622-4699-87f8-9d40c4ccceb3',
                Type: 'SPEND-OVERPAYMENT',
                Reference: 'Reference for payment1',
                RemainingCredit: 500,
                Allocations: [],
                Payments: [],
                HasAttachments: false,
                Contact: {
                  ContactID: 'af3ffcc1-c578-4658-82f3-5d8d458cc7af',
                  Name: 'Daddy Warbucks',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-12T00:00:00',
                Date: '/Date(1552348800000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'NoTax',
                LineItems: [],
                SubTotal: 500,
                TotalTax: 0,
                Total: 500,
                UpdatedDateUTC: '/Date(1552428535123+0000)/',
                UpdatedDateUTCString: '2019-03-12T22:08:55Z',
                CurrencyCode: 'NZD',
              },
              {
                OverpaymentID: '2a8bda49-8908-473b-8bcf-1f90990460eb',
                ID: '2a8bda49-8908-473b-8bcf-1f90990460eb',
                Type: 'RECEIVE-OVERPAYMENT',
                Reference: 'Reference for payment2',
                RemainingCredit: 20,
                Allocations: [],
                Payments: [],
                HasAttachments: false,
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-13T00:00:00',
                Date: '/Date(1552435200000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'NoTax',
                LineItems: [],
                SubTotal: 20,
                TotalTax: 0,
                Total: 20,
                UpdatedDateUTC: '/Date(1552428568250+0000)/',
                UpdatedDateUTCString: '2019-03-12T22:09:28Z',
                CurrencyCode: 'NZD',
              },
              {
                OverpaymentID: 'ed7f6041-c915-4667-bd1d-54c48e92161e',
                ID: 'ed7f6041-c915-4667-bd1d-54c48e92161e',
                Type: 'SPEND-OVERPAYMENT',
                Reference: 'Reference for payment3',
                RemainingCredit: 3000,
                Allocations: [],
                Payments: [],
                HasAttachments: false,
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-12T00:00:00',
                Date: '/Date(1552348800000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'NoTax',
                LineItems: [],
                SubTotal: 3000,
                TotalTax: 0,
                Total: 3000,
                UpdatedDateUTC: '/Date(1552428781527+0000)/',
                UpdatedDateUTCString: '2019-03-12T22:13:01Z',
                CurrencyCode: 'NZD',
              },
              {
                OverpaymentID: '0859adbc-ea00-40cd-a877-258cf8644975',
                ID: '0859adbc-ea00-40cd-a877-258cf8644975',
                Type: 'RECEIVE-OVERPAYMENT',
                Reference: 'Reference for payment4',
                RemainingCredit: 20,
                Allocations: [],
                Payments: [],
                HasAttachments: false,
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-13T00:00:00',
                Date: '/Date(1552435200000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'NoTax',
                LineItems: [],
                SubTotal: 20,
                TotalTax: 0,
                Total: 20,
                UpdatedDateUTC: '/Date(1552428842190+0000)/',
                UpdatedDateUTCString: '2019-03-12T22:14:02Z',
                CurrencyCode: 'NZD',
              },
              {
                OverpaymentID: '687b877f-634a-415d-92b2-74e62977de30',
                ID: '687b877f-634a-415d-92b2-74e62977de30',
                Type: 'RECEIVE-OVERPAYMENT',
                Reference: 'Reference for payment5',
                RemainingCredit: 20,
                Allocations: [],
                Payments: [],
                HasAttachments: false,
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-13T00:00:00',
                Date: '/Date(1552435200000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'NoTax',
                LineItems: [],
                SubTotal: 20,
                TotalTax: 0,
                Total: 20,
                UpdatedDateUTC: '/Date(1552428950730+0000)/',
                UpdatedDateUTCString: '2019-03-12T22:15:50Z',
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const getOverpaymentsOverpaymentIDRoute = createRoute({
  method: 'get',
  path: '/Overpayments/{OverpaymentID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific overpayment using a unique overpayment Id',
  operationId: 'getOverpayment',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ OverpaymentID: OverpaymentIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type Overpayments array with specified Overpayments',
      content: {
        'application/json': {
          schema: OverpaymentsSchema,
          example: {
            Id: '46c9e8e2-9410-4e75-9297-f0ca8fa76c32',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553278835158)/',
            Overpayments: [
              {
                OverpaymentID: 'ed7f6041-c915-4667-bd1d-54c48e92161e',
                ID: 'ed7f6041-c915-4667-bd1d-54c48e92161e',
                CurrencyRate: 1,
                Type: 'SPEND-OVERPAYMENT',
                Reference: 'Reference for payment',
                RemainingCredit: 2999,
                Allocations: [
                  {
                    Amount: 1,
                    Date: '/Date(1552348800000+0000)/',
                    Invoice: {
                      InvoiceID: 'c45720a1-ade3-4a38-a064-d15489be6841',
                      InvoiceNumber: '',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                  },
                ],
                Payments: [],
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '247dd942-5245-47a7-adb1-4d9ea075b431',
                    FileName: 'giphy.gif',
                    Url: 'https://api.xero.com/api.xro/2.0/banktransaction/ed7f6041-c915-4667-bd1d-54c48e92161e/Attachments/giphy.gif',
                    MimeType: 'image/gif',
                    ContentLength: 495727,
                  },
                ],
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-12T00:00:00',
                Date: '/Date(1552348800000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'NoTax',
                LineItems: [
                  {
                    Description: 'Broken TV deposit',
                    UnitAmount: 3000,
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: 3000,
                    AccountCode: '800',
                    Tracking: [],
                    Quantity: 1,
                    DiscountEnteredAsPercent: true,
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 3000,
                TotalTax: 0,
                Total: 3000,
                UpdatedDateUTC: '/Date(1552428952890+0000)/',
                UpdatedDateUTCString: '2019-03-12T22:15:52Z',
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putOverpaymentsOverpaymentIDAllocationsRoute = createRoute({
  method: 'put',
  path: '/Overpayments/{OverpaymentID}/Allocations',
  tags: ['Accounting'],
  summary: 'Creates a single allocation for a specific overpayment',
  operationId: 'createOverpaymentAllocations',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ OverpaymentID: OverpaymentIDParamsSchema }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'Allocations array with Allocation object in body of request',
      content: {
        'application/json': {
          schema: AllocationsSchema,
          example: {
            Allocations: [
              {
                Invoice: {
                  InvoiceID: '00000000-0000-0000-0000-000000000000',
                  LineItems: [],
                  Contact: {},
                  Type: 'ACCPAY',
                },
                Amount: 10,
                Date: '2019-03-12',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Allocations array with all Allocation for Overpayments',
      content: {
        'application/json': {
          schema: AllocationsSchema,
          example: {
            Id: '3b7f7be2-384a-4703-bcfb-c56e9116c914',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552428952968)/',
            Allocations: [
              {
                Amount: 1,
                Date: '/Date(1552348800000+0000)/',
                Invoice: {
                  InvoiceID: 'c45720a1-ade3-4a38-a064-d15489be6841',
                  Payments: [],
                  CreditNotes: [],
                  Prepayments: [],
                  Overpayments: [],
                  HasErrors: false,
                  IsDiscounted: false,
                  LineItems: [],
                  ValidationErrors: [],
                },
                Overpayment: {
                  OverpaymentID: 'ed7f6041-c915-4667-bd1d-54c48e92161e',
                  ID: 'ed7f6041-c915-4667-bd1d-54c48e92161e',
                  LineItems: [],
                },
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const deleteOverpaymentsOverpaymentIDAllocationsAllocationIDRoute = createRoute({
  method: 'delete',
  path: '/Overpayments/{OverpaymentID}/Allocations/{AllocationID}',
  tags: ['Accounting'],
  summary: 'Deletes an Allocation from an overpayment',
  operationId: 'deleteOverpaymentAllocations',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      OverpaymentID: OverpaymentIDParamsSchema,
      AllocationID: AllocationIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Allocation with the isDeleted flag as true',
      content: {
        'application/json': {
          schema: AllocationSchema,
          example: {
            AllocationId: '2bb15054-3868-4f85-a9c6-0402ec8c1201',
            Date: '/Date(1551822670731)/',
            Invoice: [{ InvoiceID: 'b7eb1fc9-a0f9-4e8e-9373-6689f5350832' }],
            IsDeleted: true,
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getOverpaymentsOverpaymentIDHistoryRoute = createRoute({
  method: 'get',
  path: '/Overpayments/{OverpaymentID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history records of a specific overpayment',
  operationId: 'getOverpaymentHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ OverpaymentID: OverpaymentIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putOverpaymentsOverpaymentIDHistoryRoute = createRoute({
  method: 'put',
  path: '/Overpayments/{OverpaymentID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific overpayment',
  operationId: 'createOverpaymentHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ OverpaymentID: OverpaymentIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: {
    200: HistoryRecordCreatedResponse,
    400: {
      description:
        'A failed request due to validation error - API is not able to create HistoryRecord for Overpayments',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            ErrorNumber: 10,
            Type: 'ValidationException',
            Message: 'A validation exception occurred',
            Elements: [
              {
                DateUTCString: '2019-03-12T22:30:13',
                DateUTC: '/Date(1552429813667)/',
                Details: 'Hello World',
                ValidationErrors: [
                  { Message: 'The document with the supplied id was not found for this endpoint.' },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getPaymentsRoute = createRoute({
  method: 'get',
  path: '/Payments',
  tags: ['Accounting'],
  summary: 'Retrieves payments for invoices and credit notes',
  operationId: 'getPayments',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="AUTHORISED"',
            'x-example-csharp': 'Status==\\"AUTHORISED\\"',
            'x-example-java': 'Status==&quot;&apos; + Payment.StatusEnum.AUTHORISED + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\Payment::STATUS_AUTHORISED . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::Payment::AUTHORISED}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Amount ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description: 'Up to 100 payments will be returned in a single API call',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageSize: PageSizeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Payments array for all Payments',
      content: {
        'application/json': {
          schema: PaymentsSchema,
          example: {
            Id: '9f310473-e1b5-4704-a25c-eec653deb596',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552431874205)/',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            Payments: [
              {
                PaymentID: '99ea7f6b-c513-4066-bc27-b7c65dcd76c2',
                BatchPaymentID: 'b54aa50c-794c-461b-89d1-846e1b84d9c0',
                BatchPayment: {
                  Account: { AccountID: '5690f1e8-1d02-4893-90c2-ee1a69eff942' },
                  BatchPaymentID: 'b54aa50c-794c-461b-89d1-846e1b84d9c0',
                  Date: '/Date(1552521600000+0000)/',
                  Type: 'RECBATCH',
                  Status: 'AUTHORISED',
                  TotalAmount: '50.00',
                  UpdatedDateUTC: '/Date(1541176592690+0000)/',
                  IsReconciled: 'false',
                },
                Date: '/Date(1543449600000+0000)/',
                BankAmount: 46,
                Amount: 46,
                Reference: '',
                CurrencyRate: 1,
                PaymentType: 'ACCRECPAYMENT',
                Status: 'AUTHORISED',
                UpdatedDateUTC: '/Date(1541176592690+0000)/',
                UpdatedDateUTCString: '2018-11-02T16:36:32Z',
                HasAccount: true,
                IsReconciled: false,
                Account: { AccountID: '5690f1e8-1d02-4893-90c2-ee1a69eff942', Code: '970' },
                Invoice: {
                  Type: 'ACCREC',
                  InvoiceID: '046d8a6d-1ae1-4b4d-9340-5601bdf41b87',
                  InvoiceNumber: 'INV-0002',
                  Payments: [],
                  CreditNotes: [],
                  Prepayments: [],
                  Overpayments: [],
                  HasErrors: false,
                  IsDiscounted: false,
                  Contact: {
                    ContactID: 'a3675fc4-f8dd-4f03-ba5b-f1870566bcd7',
                    ContactNumber: '',
                    Name: 'Barney Rubble-83203',
                    Addresses: [],
                    Phones: [],
                    ContactGroups: [],
                    ContactPersons: [],
                    HasValidationErrors: false,
                  },
                  LineItems: [],
                  CurrencyCode: 'NZD',
                },
                HasValidationErrors: false,
              },
              {
                PaymentID: '6b037c9b-2e5d-4905-84d3-eabfb3438242',
                Date: '/Date(1552521600000+0000)/',
                BankAmount: 2,
                Amount: 2,
                Reference: 'Too much',
                CurrencyRate: 1,
                PaymentType: 'ARCREDITPAYMENT',
                Status: 'AUTHORISED',
                UpdatedDateUTC: '/Date(1551812346173+0000)/',
                UpdatedDateUTCString: '2019-03-05T18:59:06Z',
                HasAccount: true,
                IsReconciled: false,
                Account: { AccountID: '136ebd08-60ea-4592-8982-be92c153b53a', Code: '980' },
                Invoice: {
                  Type: 'ACCRECCREDIT',
                  InvoiceID: '249f15fa-f2a7-4acc-8769-0984103f2225',
                  InvoiceNumber: 'CN-0005',
                  Payments: [],
                  CreditNotes: [],
                  Prepayments: [],
                  Overpayments: [],
                  HasErrors: false,
                  IsDiscounted: false,
                  Contact: {
                    ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                    ContactNumber: '',
                    Name: 'Liam Gallagher',
                    Addresses: [],
                    Phones: [],
                    ContactGroups: [],
                    ContactPersons: [],
                    HasValidationErrors: false,
                  },
                  LineItems: [],
                  CurrencyCode: 'NZD',
                },
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putPaymentsRoute = createRoute({
  method: 'put',
  path: '/Payments',
  tags: ['Accounting'],
  summary: 'Creates multiple payments for invoices or credit notes',
  operationId: 'createPayments',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'Payments array with Payment object in body of request',
      content: {
        'application/json': {
          schema: PaymentsSchema,
          example: {
            Payments: [
              {
                Invoice: { LineItems: [], InvoiceID: '00000000-0000-0000-0000-000000000000' },
                Account: { Code: '970' },
                Date: '2019-03-12',
                Amount: 1,
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Payments array for newly created Payment',
      content: {
        'application/json': {
          schema: PaymentsSchema,
          example: {
            Id: '83b5715a-6a77-4c16-b5b8-2da08b5fde44',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552432238716)/',
            Payments: [
              {
                PaymentID: '61ed71fc-01bf-4eb8-8419-8a18789ff45f',
                Date: '/Date(1552348800000+0000)/',
                BankAmount: 1,
                Amount: 1,
                CurrencyRate: 1,
                PaymentType: 'ACCRECPAYMENT',
                Status: 'AUTHORISED',
                UpdatedDateUTC: '/Date(1552432238623+0000)/',
                UpdatedDateUTCString: '2019-03-12T23:10:38Z',
                HasAccount: true,
                IsReconciled: false,
                Account: {
                  AccountID: '5690f1e8-1d02-4893-90c2-ee1a69eff942',
                  Code: '970',
                  Name: 'Owner A Funds Introduced',
                },
                Invoice: {
                  Type: 'ACCREC',
                  InvoiceID: 'c7c37b83-ac95-45ea-88ba-8ad83a5f22fe',
                  InvoiceNumber: 'INV-0004',
                  Reference: '',
                  Prepayments: [],
                  Overpayments: [],
                  AmountDue: 229,
                  AmountPaid: 1,
                  SentToContact: false,
                  CurrencyRate: 1,
                  HasErrors: false,
                  IsDiscounted: false,
                  Contact: {
                    ContactID: 'a3675fc4-f8dd-4f03-ba5b-f1870566bcd7',
                    Name: 'Barney Rubble-83203',
                    ContactPersons: [],
                    HasValidationErrors: false,
                  },
                  DateString: '2018-10-10T00:00:00',
                  Date: '/Date(1539129600000+0000)/',
                  DueDateString: '2018-10-18T00:00:00',
                  DueDate: '/Date(1539820800000+0000)/',
                  Status: 'AUTHORISED',
                  LineAmountTypes: 'Exclusive',
                  LineItems: [
                    {
                      Description: 'boo',
                      UnitAmount: 200,
                      TaxType: 'OUTPUT2',
                      TaxAmount: 30,
                      LineAmount: 200,
                      AccountCode: '200',
                      Tracking: [],
                      Quantity: 1,
                      LineItemID: '173dfdb9-43b5-4bd2-ae25-9419e662a3a7',
                      ValidationErrors: [],
                    },
                  ],
                  SubTotal: 200,
                  TotalTax: 30,
                  Total: 230,
                  UpdatedDateUTC: '/Date(1552432238623+0000)/',
                  UpdatedDateUTCString: '2019-03-12T23:10:38Z',
                  CurrencyCode: 'NZD',
                },
                HasValidationErrors: true,
                ValidationErrors: [
                  { Message: 'Payment amount exceeds the amount outstanding on this document' },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const postPaymentsRoute = createRoute({
  method: 'post',
  path: '/Payments',
  tags: ['Accounting'],
  summary: 'Creates a single payment for invoice or credit notes',
  operationId: 'createPayment',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'Request body with a single Payment object',
      content: {
        'application/json': {
          schema: PaymentSchema,
          example: {
            Payments: [
              {
                Invoice: { LineItems: [], InvoiceID: '00000000-0000-0000-0000-000000000000' },
                Account: { Code: '970' },
                Date: '2019-03-12',
                Amount: 1,
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Payments array for newly created Payment',
      content: {
        'application/json': {
          schema: PaymentsSchema,
          example: {
            Id: '83b5715a-6a77-4c16-b5b8-2da08b5fde44',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552432238716)/',
            Payments: [
              {
                PaymentID: '61ed71fc-01bf-4eb8-8419-8a18789ff45f',
                Date: '/Date(1552348800000+0000)/',
                BankAmount: 1,
                Amount: 1,
                CurrencyRate: 1,
                PaymentType: 'ACCRECPAYMENT',
                Status: 'AUTHORISED',
                UpdatedDateUTC: '/Date(1552432238623+0000)/',
                UpdatedDateUTCString: '2019-03-12T23:10:38Z',
                HasAccount: true,
                IsReconciled: false,
                Account: {
                  AccountID: '5690f1e8-1d02-4893-90c2-ee1a69eff942',
                  Code: '970',
                  Name: 'Owner A Funds Introduced',
                },
                Invoice: {
                  Type: 'ACCREC',
                  InvoiceID: 'c7c37b83-ac95-45ea-88ba-8ad83a5f22fe',
                  InvoiceNumber: 'INV-0004',
                  Reference: '',
                  Prepayments: [],
                  Overpayments: [],
                  AmountDue: 229,
                  AmountPaid: 1,
                  SentToContact: false,
                  CurrencyRate: 1,
                  HasErrors: false,
                  IsDiscounted: false,
                  Contact: {
                    ContactID: 'a3675fc4-f8dd-4f03-ba5b-f1870566bcd7',
                    Name: 'Barney Rubble-83203',
                    ContactPersons: [],
                    HasValidationErrors: false,
                  },
                  DateString: '2018-10-10T00:00:00',
                  Date: '/Date(1539129600000+0000)/',
                  DueDateString: '2018-10-18T00:00:00',
                  DueDate: '/Date(1539820800000+0000)/',
                  Status: 'AUTHORISED',
                  LineAmountTypes: 'Exclusive',
                  LineItems: [
                    {
                      Description: 'boo',
                      UnitAmount: 200,
                      TaxType: 'OUTPUT2',
                      TaxAmount: 30,
                      LineAmount: 200,
                      AccountCode: '200',
                      Tracking: [],
                      Quantity: 1,
                      LineItemID: '173dfdb9-43b5-4bd2-ae25-9419e662a3a7',
                      ValidationErrors: [],
                    },
                  ],
                  SubTotal: 200,
                  TotalTax: 30,
                  Total: 230,
                  UpdatedDateUTC: '/Date(1552432238623+0000)/',
                  UpdatedDateUTCString: '2019-03-12T23:10:38Z',
                  CurrencyCode: 'NZD',
                },
                HasValidationErrors: true,
                ValidationErrors: [
                  { Message: 'Payment amount exceeds the amount outstanding on this document' },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getPaymentsPaymentIDRoute = createRoute({
  method: 'get',
  path: '/Payments/{PaymentID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific payment for invoices and credit notes using a unique payment Id',
  operationId: 'getPayment',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ PaymentID: PaymentIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Payments array for specified Payment',
      content: {
        'application/json': {
          schema: PaymentsSchema,
          example: {
            Id: '4876f9ee-3a17-47d8-8c1b-84377c8f2998',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552431874852)/',
            Payments: [
              {
                PaymentID: '99ea7f6b-c513-4066-bc27-b7c65dcd76c2',
                BatchPaymentID: 'b54aa50c-794c-461b-89d1-846e1b84d9c0',
                BatchPayment: {
                  Account: { AccountID: '5690f1e8-1d02-4893-90c2-ee1a69eff942' },
                  BatchPaymentID: 'b54aa50c-794c-461b-89d1-846e1b84d9c0',
                  Date: '/Date(1543449600000+0000)/',
                  Type: 'RECBATCH',
                  Status: 'AUTHORISED',
                  TotalAmount: '50.00',
                  UpdatedDateUTC: '/Date(1541176592690+0000)/',
                  IsReconciled: 'false',
                },
                Date: '/Date(1543449600000+0000)/',
                BankAmount: 46,
                Amount: 46,
                CurrencyRate: 1,
                PaymentType: 'ACCRECPAYMENT',
                Status: 'AUTHORISED',
                UpdatedDateUTC: '/Date(1541176592690+0000)/',
                UpdatedDateUTCString: '2018-11-02T16:36:32Z',
                HasAccount: true,
                IsReconciled: false,
                Account: {
                  AccountID: '5690f1e8-1d02-4893-90c2-ee1a69eff942',
                  Code: '970',
                  Name: 'Owner A Funds Introduced',
                },
                Invoice: {
                  Type: 'ACCREC',
                  InvoiceID: '046d8a6d-1ae1-4b4d-9340-5601bdf41b87',
                  InvoiceNumber: 'INV-0002',
                  Reference: 'Red Fish, Blue Fish',
                  Payments: [
                    {
                      PaymentID: '99ea7f6b-c513-4066-bc27-b7c65dcd76c2',
                      Date: '/Date(1543449600000+0000)/',
                      Amount: 46,
                      CurrencyRate: 1,
                      HasAccount: false,
                      HasValidationErrors: false,
                    },
                  ],
                  Prepayments: [],
                  Overpayments: [],
                  AmountDue: 0,
                  AmountPaid: 46,
                  SentToContact: true,
                  CurrencyRate: 1,
                  HasErrors: false,
                  IsDiscounted: false,
                  Contact: {
                    ContactID: 'a3675fc4-f8dd-4f03-ba5b-f1870566bcd7',
                    Name: 'Barney Rubble-83203',
                    ContactPersons: [],
                    HasValidationErrors: false,
                  },
                  DateString: '2018-10-20T00:00:00',
                  Date: '/Date(1539993600000+0000)/',
                  DueDateString: '2018-12-30T00:00:00',
                  DueDate: '/Date(1546128000000+0000)/',
                  Status: 'PAID',
                  LineAmountTypes: 'Exclusive',
                  LineItems: [
                    {
                      Description: 'Acme Tires',
                      UnitAmount: 20,
                      TaxType: 'OUTPUT2',
                      TaxAmount: 6,
                      LineAmount: 40,
                      AccountCode: '200',
                      Tracking: [],
                      Quantity: 2,
                      LineItemID: '878d1688-a905-4866-ae91-5a772c2540c7',
                      ValidationErrors: [],
                    },
                  ],
                  SubTotal: 40,
                  TotalTax: 6,
                  Total: 46,
                  UpdatedDateUTC: '/Date(1541176592690+0000)/',
                  UpdatedDateUTCString: '2018-11-02T16:36:32Z',
                  CurrencyCode: 'NZD',
                  FullyPaidOnDate: '/Date(1543449600000+0000)/',
                },
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postPaymentsPaymentIDRoute = createRoute({
  method: 'post',
  path: '/Payments/{PaymentID}',
  tags: ['Accounting'],
  summary: 'Updates a specific payment for invoices and credit notes',
  operationId: 'deletePayment',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ PaymentID: PaymentIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PaymentDeleteSchema,
          example: { Payments: [{ Status: 'DELETED' }] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Payments array for updated Payment',
      content: {
        'application/json': {
          schema: PaymentsSchema,
          example: {
            Id: 'ee23328c-4a8b-4ee7-8fb6-9796ffab9cb0',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1583945852489)/',
            Payments: [
              {
                PaymentID: 'c94c996b-1ab3-4ff3-ad19-1cdc77f30817',
                Date: '/Date(1567382400000+0000)/',
                BankAmount: 2,
                Amount: 2,
                Reference: 'foobar',
                CurrencyRate: 1,
                PaymentType: 'APCREDITPAYMENT',
                Status: 'DELETED',
                UpdatedDateUTC: '/Date(1583945852373+0000)/',
                UpdatedDateUTCString: '2020-03-11T16:57:32Z',
                HasAccount: true,
                IsReconciled: false,
                Account: {
                  AccountID: '57f261f0-e32d-4a7f-be82-22cd992c6367',
                  Code: '033',
                  Name: 'Checking account',
                },
                Invoice: {
                  Type: 'ACCPAYCREDIT',
                  InvoiceID: 'dba68ebc-c05a-4e2d-b97d-964349e5b8d6',
                  InvoiceNumber: '',
                  Reference: '',
                  Prepayments: [],
                  Overpayments: [],
                  AmountDue: 22,
                  AmountPaid: 0,
                  SentToContact: false,
                  CurrencyRate: 1,
                  IsDiscounted: false,
                  HasErrors: false,
                  Contact: {
                    ContactID: '216830cb-9a68-487e-928b-c1a7ccc4fc81',
                    Name: 'FooBar73005',
                    ContactPersons: [],
                    HasValidationErrors: false,
                  },
                  DateString: '2017-01-02T00:00:00',
                  Date: '/Date(1483315200000+0000)/',
                  Status: 'AUTHORISED',
                  LineAmountTypes: 'Exclusive',
                  LineItems: [
                    {
                      Description: 'Sample Item72716',
                      UnitAmount: 20,
                      TaxType: 'INPUT',
                      TaxAmount: 2,
                      LineAmount: 20,
                      AccountCode: '400',
                      Tracking: [],
                      Quantity: 1,
                      ValidationErrors: [],
                    },
                  ],
                  SubTotal: 20,
                  TotalTax: 2,
                  Total: 22,
                  UpdatedDateUTC: '/Date(1583945852363+0000)/',
                  UpdatedDateUTCString: '2020-03-11T16:57:32Z',
                  CurrencyCode: 'AUD',
                },
                HasValidationErrors: false,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getPaymentsPaymentIDHistoryRoute = createRoute({
  method: 'get',
  path: '/Payments/{PaymentID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history records of a specific payment',
  operationId: 'getPaymentHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ PaymentID: PaymentIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putPaymentsPaymentIDHistoryRoute = createRoute({
  method: 'put',
  path: '/Payments/{PaymentID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific payment',
  operationId: 'createPaymentHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ PaymentID: PaymentIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: {
    200: HistoryRecordCreatedResponse,
    400: {
      description:
        'A failed request due to validation error - API is not able to create HistoryRecord for Payments',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            ErrorNumber: 10,
            Type: 'ValidationException',
            Message: 'A validation exception occurred',
            Elements: [
              {
                DateUTCString: '2019-03-12T22:30:13',
                DateUTC: '/Date(1552429813667)/',
                Details: 'Hello World',
                ValidationErrors: [
                  { Message: 'The document with the supplied id was not found for this endpoint.' },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getPaymentServicesRoute = createRoute({
  method: 'get',
  path: '/PaymentServices',
  tags: ['Accounting'],
  summary: 'Retrieves payment services',
  operationId: 'getPaymentServices',
  request: { headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'Success - return response of type PaymentServices array for all PaymentService',
      content: {
        'application/json': {
          schema: PaymentServicesSchema,
          example: {
            Id: 'ab82a7dd-5070-4e82-b841-0af52909fe04',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552488713171)/',
            PaymentServices: [
              {
                PaymentServiceID: '54b3b4f6-0443-4fba-bcd1-61ec0c35ca55',
                PaymentServiceName: 'PayUpNow',
                PaymentServiceUrl: 'https://www.payupnow.com/',
                PaymentServiceType: 'Custom',
                PayNowText: 'Time To Pay',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['paymentservices'] }],
})

export const putPaymentServicesRoute = createRoute({
  method: 'put',
  path: '/PaymentServices',
  tags: ['Accounting'],
  summary: 'Creates a payment service',
  operationId: 'createPaymentService',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'PaymentServices array with PaymentService object in body of request',
      content: {
        'application/json': {
          schema: PaymentServicesSchema,
          example: {
            PaymentServices: [
              {
                PaymentServiceName: 'PayUpNow',
                PaymentServiceUrl: 'https://www.payupnow.com/',
                PayNowText: 'Time To Pay',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type PaymentServices array for newly created PaymentService',
      content: {
        'application/json': {
          schema: PaymentServicesSchema,
          example: {
            Id: '7ed8b3c0-2155-49ee-a583-f2dce6607dfb',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552488712813)/',
            PaymentServices: [
              {
                PaymentServiceID: '54b3b4f6-0443-4fba-bcd1-61ec0c35ca55',
                PaymentServiceName: 'PayUpNow',
                PaymentServiceUrl: 'https://www.payupnow.com/',
                PaymentServiceType: 'Custom',
                PayNowText: 'Time To Pay',
                ValidationErrors: [{ Message: 'Payment service could not be found' }],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['paymentservices'] }],
})

export const getPrepaymentsRoute = createRoute({
  method: 'get',
  path: '/Prepayments',
  tags: ['Accounting'],
  summary: 'Retrieves prepayments',
  operationId: 'getPrepayments',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="AUTHORISED"',
            'x-example-csharp': 'Status==\\"AUTHORISED\\"',
            'x-example-java':
              'Status==&quot;&apos; + Prepayment.StatusEnum.AUTHORISED + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\Prepayment::STATUS_AUTHORISED . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::Prepayment::AUTHORISED}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Reference ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'e.g. page=1 – Up to 100 prepayments will be returned in a single API call with line items shown for each prepayment',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      unitdp: UnitdpParamsSchema,
      pageSize: PageSizeParamsSchema,
      InvoiceNumbers: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'InvoiceNumbers',
            'x-snake': 'invoice_numbers',
            description: 'Filter by a comma-separated list of InvoiceNumbers',
            style: 'form',
            explode: false,
            example: '&quot;INV-001&quot;, &quot;INV-002&quot;',
            'x-example-java': 'Arrays.asList("INV-001","INV-002")',
            'x-example-php': '&quot;INV-001&quot;, &quot;INV-002&quot;',
            'x-example-csharp': 'new List&lt;string&gt;{&quot;INV-001&quot;,&quot;INV-002&quot;}',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
      References: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'References',
            'x-snake': 'references',
            description: 'Filter by a comma-separated list of References',
            style: 'form',
            explode: false,
            example: '&quot;Ref1&quot;, &quot;Ref2&quot;',
            'x-example-java': 'Arrays.asList("Ref1","Ref2")',
            'x-example-php': '&quot;Ref1&quot;, &quot;Ref2&quot;',
            'x-example-csharp': 'new List&lt;string&gt;{&quot;Ref1&quot;,&quot;Ref2&quot;}',
            schema: { type: 'array', items: { type: 'string' } },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Prepayments array for all Prepayment',
      content: {
        'application/json': {
          schema: PrepaymentsSchema,
          example: {
            Id: 'd7a9ca0c-6159-4c26-ad2e-715440c50b7d',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552489227595)/',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 1 },
            Prepayments: [
              {
                PrepaymentID: 'ce0cddef-cf5a-4e59-b638-f225679115a7',
                ID: 'ce0cddef-cf5a-4e59-b638-f225679115a7',
                Type: 'RECEIVE-PREPAYMENT',
                Reference: 'INV-0011',
                InvoiceNumber: 'INV-0011',
                RemainingCredit: 3450,
                Allocations: [],
                Payments: [],
                HasAttachments: true,
                Contact: {
                  ContactID: 'be392c72-c121-4f83-9512-03ac71e54c20',
                  Name: 'Luke Skywalker',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-13T00:00:00',
                Date: '/Date(1552435200000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [],
                SubTotal: 3000,
                TotalTax: 450,
                Total: 3450,
                UpdatedDateUTC: '/Date(1552489187730+0000)/',
                UpdatedDateUTCString: '2019-03-13T14:59:47Z',
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const getPrepaymentsPrepaymentIDRoute = createRoute({
  method: 'get',
  path: '/Prepayments/{PrepaymentID}',
  tags: ['Accounting'],
  summary: 'Allows you to retrieve a specified prepayments',
  operationId: 'getPrepayment',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ PrepaymentID: PrepaymentIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Prepayments array for a specified Prepayment',
      content: {
        'application/json': {
          schema: PrepaymentsSchema,
          example: {
            Id: '18e5f578-ef28-4096-a7aa-d06d65574b99',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553540376847)/',
            Prepayments: [
              {
                PrepaymentID: 'ce0cddef-cf5a-4e59-b638-f225679115a7',
                ID: 'ce0cddef-cf5a-4e59-b638-f225679115a7',
                CurrencyRate: 1,
                Type: 'RECEIVE-PREPAYMENT',
                BrandingThemeID: '414d4a87-46d6-4cfc-ab42-4e29d22e5076',
                Reference: 'INV-0011',
                InvoiceNumber: 'INV-0011',
                RemainingCredit: 3449,
                Allocations: [
                  {
                    Amount: 1,
                    Date: '/Date(1552435200000+0000)/',
                    Invoice: {
                      InvoiceID: 'c7c37b83-ac95-45ea-88ba-8ad83a5f22fe',
                      InvoiceNumber: 'INV-0004',
                      Payments: [],
                      CreditNotes: [],
                      Prepayments: [],
                      Overpayments: [],
                      HasErrors: false,
                      IsDiscounted: false,
                      LineItems: [],
                    },
                  },
                ],
                Payments: [],
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '2ca06aa0-3629-474a-9401-553d4b7fa9b0',
                    FileName: 'giphy.gif',
                    Url: 'https://api.xero.com/api.xro/2.0/banktransaction/ce0cddef-cf5a-4e59-b638-f225679115a7/Attachments/giphy.gif',
                    MimeType: 'image/gif',
                    ContentLength: 495727,
                  },
                ],
                Contact: {
                  ContactID: 'be392c72-c121-4f83-9512-03ac71e54c20',
                  ContactStatus: 'ACTIVE',
                  Name: 'Luke Skywalker',
                  EmailAddress: '',
                  BankAccountDetails: '',
                  Addresses: [
                    { AddressType: 'STREET', City: '', Region: '', PostalCode: '', Country: '' },
                    { AddressType: 'POBOX', City: '', Region: '', PostalCode: '', Country: '' },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '',
                      PhoneAreaCode: '',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    { PhoneType: 'FAX', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '',
                      PhoneAreaCode: '',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1552329691573+0000)/',
                  ContactGroups: [],
                  DefaultCurrency: 'NZD',
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                DateString: '2019-03-13T00:00:00',
                Date: '/Date(1552435200000+0000)/',
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Light Speeder',
                    UnitAmount: 3000,
                    TaxType: 'OUTPUT2',
                    TaxAmount: 450,
                    LineAmount: 3000,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    DiscountEnteredAsPercent: true,
                    ValidationErrors: [],
                  },
                ],
                SubTotal: 3000,
                TotalTax: 450,
                Total: 3450,
                UpdatedDateUTC: '/Date(1552522424850+0000)/',
                UpdatedDateUTCString: '2019-03-14T00:13:44Z',
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putPrepaymentsPrepaymentIDAllocationsRoute = createRoute({
  method: 'put',
  path: '/Prepayments/{PrepaymentID}/Allocations',
  tags: ['Accounting'],
  summary: 'Allows you to create an Allocation for prepayments',
  operationId: 'createPrepaymentAllocations',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ PrepaymentID: PrepaymentIDParamsSchema }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'Allocations with an array of Allocation object in body of request',
      content: {
        'application/json': {
          schema: AllocationsSchema,
          example: {
            Allocations: [
              {
                Invoice: { LineItems: [], InvoiceID: '00000000-0000-0000-0000-000000000000' },
                Amount: 1,
                Date: '2019-01-10',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Allocations array of Allocation for all Prepayment',
      content: {
        'application/json': {
          schema: AllocationsSchema,
          example: {
            Id: 'd4758808-d14d-45d5-851a-52787ae5739a',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552522424927)/',
            Allocations: [
              {
                Amount: 1,
                Date: '/Date(1552435200000+0000)/',
                Invoice: {
                  InvoiceID: 'c7c37b83-ac95-45ea-88ba-8ad83a5f22fe',
                  Payments: [],
                  CreditNotes: [],
                  Prepayments: [],
                  Overpayments: [],
                  HasErrors: false,
                  IsDiscounted: false,
                  LineItems: [],
                  ValidationErrors: [],
                },
                Prepayment: {
                  PrepaymentID: 'ce0cddef-cf5a-4e59-b638-f225679115a7',
                  ID: 'ce0cddef-cf5a-4e59-b638-f225679115a7',
                  LineItems: [],
                },
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const deletePrepaymentsPrepaymentIDAllocationsAllocationIDRoute = createRoute({
  method: 'delete',
  path: '/Prepayments/{PrepaymentID}/Allocations/{AllocationID}',
  tags: ['Accounting'],
  summary: 'Deletes an Allocation from a Prepayment',
  operationId: 'deletePrepaymentAllocations',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      PrepaymentID: PrepaymentIDParamsSchema,
      AllocationID: AllocationIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Allocation with the isDeleted flag as true',
      content: {
        'application/json': {
          schema: AllocationSchema,
          example: {
            AllocationId: '2bb15054-3868-4f85-a9c6-0402ec8c1201',
            Date: '/Date(1551822670731)/',
            Invoice: [{ InvoiceID: 'b7eb1fc9-a0f9-4e8e-9373-6689f5350832' }],
            IsDeleted: true,
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getPrepaymentsPrepaymentIDHistoryRoute = createRoute({
  method: 'get',
  path: '/Prepayments/{PrepaymentID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history record for a specific prepayment',
  operationId: 'getPrepaymentHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ PrepaymentID: PrepaymentIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putPrepaymentsPrepaymentIDHistoryRoute = createRoute({
  method: 'put',
  path: '/Prepayments/{PrepaymentID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific prepayment',
  operationId: 'createPrepaymentHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ PrepaymentID: PrepaymentIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: {
    200: HistoryRecordCreatedResponse,
    400: {
      description:
        'Unsupported - return response incorrect exception, API is not able to create HistoryRecord for Expense Claims',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example:
            ' { "ErrorNumber": 10, "Type": "ValidationException", "Message": "A validation exception occurred", "Elements": [ { "DateUTCString": "2019-03-14T00:15:35", "DateUTC": "/Date(1552522535440)/", "Details": "Hello World", "ValidationErrors": [ { "Message": "The document with the supplied id was not found for this endpoint." } ] } ] }',
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getPurchaseOrdersRoute = createRoute({
  method: 'get',
  path: '/PurchaseOrders',
  tags: ['Accounting'],
  summary: 'Retrieves purchase orders',
  operationId: 'getPurchaseOrders',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      Status: z
        .enum(['DRAFT', 'SUBMITTED', 'AUTHORISED', 'BILLED', 'DELETED'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Status',
            'x-snake': 'status',
            description: 'Filter by purchase order status',
            example: 'SUBMITTED',
            schema: {
              type: 'string',
              enum: ['DRAFT', 'SUBMITTED', 'AUTHORISED', 'BILLED', 'DELETED'],
            },
            required: false,
          },
        }),
      DateFrom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DateFrom',
            'x-snake': 'date_from',
            description:
              'Filter by purchase order date (e.g. GET https://.../PurchaseOrders?DateFrom=2015-12-01&DateTo=2015-12-31',
            example: '2019-12-01',
            schema: { type: 'string' },
            required: false,
          },
        }),
      DateTo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DateTo',
            'x-snake': 'date_to',
            description:
              'Filter by purchase order date (e.g. GET https://.../PurchaseOrders?DateFrom=2015-12-01&DateTo=2015-12-31',
            example: '2019-12-31',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'PurchaseOrderNumber ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'To specify a page, append the page parameter to the URL e.g. ?page=1. If there are 100 records in the response you will need to check if there is any more data by fetching the next page e.g ?page=2 and continuing this process until no more results are returned.',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageSize: PageSizeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type PurchaseOrder array of all PurchaseOrder',
      content: {
        'application/json': {
          schema: PurchaseOrdersSchema,
          example: {
            Id: '66910bfc-15cc-4692-bd4c-cc8f671e653c',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552523977238)/',
            pagination: { page: 1, pageSize: 100, pageCount: 1, itemCount: 2 },
            PurchaseOrders: [
              {
                PurchaseOrderID: 'f9627f0d-b715-4039-bb6a-96dc3eae5ec5',
                PurchaseOrderNumber: 'PO-0001',
                DateString: '2019-03-12T00:00:00',
                Date: '/Date(1552348800000+0000)/',
                AttentionTo: 'Jimmy',
                HasErrors: false,
                IsDiscounted: false,
                Type: 'PURCHASEORDER',
                CurrencyRate: 1,
                CurrencyCode: 'NZD',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  Addresses: [
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Status: 'DELETED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxAmount: 0,
                    LineAmount: 20,
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '0f7b54b8-bfa4-4c5d-9c22-73dbd5796e54',
                  },
                ],
                SubTotal: 20,
                TotalTax: 0,
                Total: 20,
                UpdatedDateUTC: '/Date(1552522703443+0000)/',
                HasAttachments: false,
              },
              {
                PurchaseOrderID: '6afa2e02-c514-4964-ab89-b5c0179b8c50',
                PurchaseOrderNumber: 'PO-0002',
                DateString: '2019-03-12T00:00:00',
                Date: '/Date(1552348800000+0000)/',
                AttentionTo: 'Jimmy',
                HasErrors: false,
                IsDiscounted: false,
                Type: 'PURCHASEORDER',
                CurrencyRate: 1,
                CurrencyCode: 'NZD',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  Addresses: [
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Status: 'DELETED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxAmount: 0,
                    LineAmount: 20,
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '3e4ec232-32b9-491b-84dd-48fb9aa8916f',
                  },
                ],
                SubTotal: 20,
                TotalTax: 0,
                Total: 20,
                UpdatedDateUTC: '/Date(1552522834733+0000)/',
                HasAttachments: false,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putPurchaseOrdersRoute = createRoute({
  method: 'put',
  path: '/PurchaseOrders',
  tags: ['Accounting'],
  summary: 'Creates one or more purchase orders',
  operationId: 'createPurchaseOrders',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'PurchaseOrders with an array of PurchaseOrder object in body of request',
      content: {
        'application/json': {
          schema: PurchaseOrdersSchema,
          example: {
            PurchaseOrders: [
              {
                Contact: { ContactID: '00000000-0000-0000-0000-000000000000' },
                LineItems: [
                  { Description: 'Foobar', Quantity: 1, UnitAmount: 20, AccountCode: '710' },
                ],
                Date: '2019-03-13',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type PurchaseOrder array for specified PurchaseOrder',
      content: {
        'application/json': {
          schema: PurchaseOrdersSchema,
          example: {
            Id: 'aa2f9d23-fd76-4bee-9600-30c0f0f34036',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552522946173)/',
            PurchaseOrders: [
              {
                PurchaseOrderID: '56204648-8fbe-46f8-b09c-2125f7939533',
                PurchaseOrderNumber: 'PO-0004',
                DateString: '2019-03-13T00:00:00',
                Date: '/Date(1552435200000+0000)/',
                HasErrors: false,
                IsDiscounted: false,
                TotalDiscount: 0,
                SentToContact: false,
                Type: 'PURCHASEORDER',
                CurrencyRate: 1,
                CurrencyCode: 'NZD',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    null,
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    null,
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [
                    {
                      ContactGroupID: '17b44ed7-4389-4162-91cb-3dd5766e4e22',
                      Name: 'Oasis',
                      Status: 'ACTIVE',
                      Contacts: [],
                      HasValidationErrors: false,
                    },
                  ],
                  IsSupplier: true,
                  IsCustomer: true,
                  SalesTrackingCategories: [],
                  PurchasesTrackingCategories: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Status: 'DRAFT',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'INPUT2',
                    TaxAmount: 3,
                    LineAmount: 20,
                    AccountCode: '710',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '792b7e40-b9f2-47f0-8624-b09f4b0166dd',
                  },
                ],
                SubTotal: 20,
                TotalTax: 3,
                Total: 23,
                UpdatedDateUTC: '/Date(1552522946077+0000)/',
                StatusAttributeString: 'ERROR',
                Warnings: [
                  {
                    Message:
                      'Only AUTHORISED and BILLED purchase orders may have SentToContact updated.',
                  },
                ],
                ValidationErrors: [{ Message: 'Order number must be unique' }],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const postPurchaseOrdersRoute = createRoute({
  method: 'post',
  path: '/PurchaseOrders',
  tags: ['Accounting'],
  summary: 'Updates or creates one or more purchase orders',
  operationId: 'updateOrCreatePurchaseOrders',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PurchaseOrdersSchema,
          example: {
            PurchaseOrders: [
              {
                Contact: { ContactID: '00000000-0000-0000-0000-000000000000' },
                LineItems: [
                  { Description: 'Foobar', Quantity: 1, UnitAmount: 20, AccountCode: '710' },
                ],
                Date: '2019-03-13',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type PurchaseOrder array for specified PurchaseOrder',
      content: {
        'application/json': {
          schema: PurchaseOrdersSchema,
          example: {
            Id: 'aa2f9d23-fd76-4bee-9600-30c0f0f34036',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552522946173)/',
            PurchaseOrders: [
              {
                PurchaseOrderID: '56204648-8fbe-46f8-b09c-2125f7939533',
                PurchaseOrderNumber: 'PO-0004',
                DateString: '2019-03-13T00:00:00',
                Date: '/Date(1552435200000+0000)/',
                HasErrors: false,
                IsDiscounted: false,
                TotalDiscount: 0,
                SentToContact: false,
                Type: 'PURCHASEORDER',
                CurrencyRate: 1,
                CurrencyCode: 'NZD',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    null,
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    null,
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [
                    {
                      ContactGroupID: '17b44ed7-4389-4162-91cb-3dd5766e4e22',
                      Name: 'Oasis',
                      Status: 'ACTIVE',
                      Contacts: [],
                      HasValidationErrors: false,
                    },
                  ],
                  IsSupplier: true,
                  IsCustomer: true,
                  SalesTrackingCategories: [],
                  PurchasesTrackingCategories: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Status: 'DRAFT',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'INPUT2',
                    TaxAmount: 3,
                    LineAmount: 20,
                    AccountCode: '710',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '792b7e40-b9f2-47f0-8624-b09f4b0166dd',
                  },
                ],
                SubTotal: 20,
                TotalTax: 3,
                Total: 23,
                UpdatedDateUTC: '/Date(1552522946077+0000)/',
                StatusAttributeString: 'ERROR',
                Warnings: [
                  {
                    Message:
                      'Only AUTHORISED and BILLED purchase orders may have SentToContact updated.',
                  },
                ],
                ValidationErrors: [{ Message: 'Order number must be unique' }],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getPurchaseOrdersPurchaseOrderIDPdfRoute = createRoute({
  method: 'get',
  path: '/PurchaseOrders/{PurchaseOrderID}/pdf',
  tags: ['Accounting'],
  summary: 'Retrieves specific purchase order as PDF files using a unique purchase order Id',
  operationId: 'getPurchaseOrderAsPdf',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ PurchaseOrderID: PurchaseOrderIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of byte array pdf version of specified Purchase Orders',
      content: {
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const getPurchaseOrdersPurchaseOrderIDRoute = createRoute({
  method: 'get',
  path: '/PurchaseOrders/{PurchaseOrderID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific purchase order using a unique purchase order Id',
  operationId: 'getPurchaseOrder',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ PurchaseOrderID: PurchaseOrderIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type PurchaseOrder array for specified PurchaseOrder',
      content: {
        'application/json': {
          schema: PurchaseOrdersSchema,
          example: {
            Id: '53a8c7a5-92e8-475b-a037-acf7c55c3afd',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553626110950)/',
            PurchaseOrders: [
              {
                PurchaseOrderID: '15369a9f-17b6-4235-83c4-0029256d1c37',
                PurchaseOrderNumber: 'PO-0006',
                DateString: '2019-03-26T00:00:00',
                Date: '/Date(1553558400000+0000)/',
                DeliveryDateString: '2019-03-28T00:00:00',
                DeliveryDate: '/Date(1553731200000+0000)/',
                DeliveryAddress: '101 Grafton Road\nRoseneath\nWellington\n6011\nNew Zealand',
                AttentionTo: 'CEO',
                Telephone: '64 123-2222',
                DeliveryInstructions: 'Drop off at front  door',
                HasErrors: false,
                IsDiscounted: true,
                TotalDiscount: 250,
                SentToContact: false,
                Reference: 'foobar',
                Type: 'PURCHASEORDER',
                CurrencyRate: 1,
                CurrencyCode: 'NZD',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    null,
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    null,
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1553672800957+0000)/',
                  ContactGroups: [
                    {
                      ContactGroupID: '17b44ed7-4389-4162-91cb-3dd5766e4e22',
                      Name: 'Oasis',
                      Status: 'ACTIVE',
                      Contacts: [],
                      HasValidationErrors: false,
                    },
                  ],
                  IsSupplier: true,
                  IsCustomer: true,
                  DefaultCurrency: 'NZD',
                  SalesTrackingCategories: [],
                  PurchasesTrackingCategories: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                BrandingThemeID: '414d4a87-46d6-4cfc-ab42-4e29d22e5076',
                Status: 'DRAFT',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    ItemCode: '123',
                    Description: 'Brand new Fender Strats',
                    UnitAmount: 2500,
                    TaxType: 'INPUT2',
                    TaxAmount: 337.5,
                    LineAmount: 2250,
                    AccountCode: '630',
                    Tracking: [
                      {
                        Name: 'Simpsons',
                        Option: 'Homer',
                        TrackingCategoryID: '6a68adde-f210-4465-b0a9-0d8cc6f50762',
                        TrackingOptionID: '94faf12f-f65c-4331-8004-b0b7c5a2da23',
                      },
                    ],
                    Quantity: 1,
                    DiscountRate: 10,
                    LineItemID: '8a9d3eca-e052-43bc-9b87-221d0648c045',
                  },
                ],
                SubTotal: 2250,
                TotalTax: 337.5,
                Total: 2587.5,
                UpdatedDateUTC: '/Date(1553626029823+0000)/',
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '7d94ccdc-ef7b-4806-87ac-8442f25e593b',
                    FileName: 'HelloWorld.png',
                    Url: 'https://api.xero.com/api.xro/2.0/PurchaseOrders/15369a9f-17b6-4235-83c4-0029256d1c37/Attachments/HelloWorld.png',
                    MimeType: 'image/png',
                    ContentLength: 76091,
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postPurchaseOrdersPurchaseOrderIDRoute = createRoute({
  method: 'post',
  path: '/PurchaseOrders/{PurchaseOrderID}',
  tags: ['Accounting'],
  summary: 'Updates a specific purchase order',
  operationId: 'updatePurchaseOrder',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ PurchaseOrderID: PurchaseOrderIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PurchaseOrdersSchema,
          example: {
            PurchaseOrders: [{ AttentionTo: 'Peter Parker', LineItems: [], Contact: {} }],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type PurchaseOrder array for updated PurchaseOrder',
      content: {
        'application/json': {
          schema: PurchaseOrdersSchema,
          example: {
            Id: '0e9bb3f8-d68b-4bb2-a54d-7da240a4f51a',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552523976885)/',
            PurchaseOrders: [
              {
                PurchaseOrderID: 'f9fc1120-c937-489e-84bc-e822190cfe9c',
                PurchaseOrderNumber: 'PO-0005',
                DateString: '2019-03-13T00:00:00',
                Date: '/Date(1552435200000+0000)/',
                AttentionTo: 'Jimmy',
                HasErrors: false,
                IsDiscounted: false,
                TotalDiscount: 0,
                SentToContact: false,
                Type: 'PURCHASEORDER',
                CurrencyRate: 1,
                CurrencyCode: 'NZD',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    null,
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    null,
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [
                    {
                      ContactGroupID: '17b44ed7-4389-4162-91cb-3dd5766e4e22',
                      Name: 'Oasis',
                      Status: 'ACTIVE',
                      Contacts: [],
                      HasValidationErrors: false,
                    },
                  ],
                  IsSupplier: true,
                  IsCustomer: true,
                  SalesTrackingCategories: [],
                  PurchasesTrackingCategories: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Status: 'DRAFT',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'INPUT2',
                    TaxAmount: 3,
                    LineAmount: 20,
                    AccountCode: '710',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: 'd1d9b2cd-c9f2-4445-8d98-0b8096cf4dae',
                  },
                ],
                SubTotal: 20,
                TotalTax: 3,
                Total: 23,
                UpdatedDateUTC: '/Date(1552523976853+0000)/',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getPurchaseOrdersPurchaseOrderNumberRoute = createRoute({
  method: 'get',
  path: '/PurchaseOrders/{PurchaseOrderNumber}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific purchase order using purchase order number',
  operationId: 'getPurchaseOrderByNumber',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      PurchaseOrderNumber: z
        .string()
        .openapi({
          param: {
            required: true,
            in: 'path',
            name: 'PurchaseOrderNumber',
            'x-snake': 'purchase_order_number',
            description: 'Unique identifier for a PurchaseOrder',
            example: 'PO1234',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type PurchaseOrder array for specified PurchaseOrder',
      content: {
        'application/json': {
          schema: PurchaseOrdersSchema,
          example: {
            Id: '53a8c7a5-92e8-475b-a037-acf7c55c3afd',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553626110950)/',
            PurchaseOrders: [
              {
                PurchaseOrderID: '15369a9f-17b6-4235-83c4-0029256d1c37',
                PurchaseOrderNumber: 'PO-0006',
                DateString: '2019-03-26T00:00:00',
                Date: '/Date(1553558400000+0000)/',
                DeliveryDateString: '2019-03-28T00:00:00',
                DeliveryDate: '/Date(1553731200000+0000)/',
                DeliveryAddress: '101 Grafton Road\nRoseneath\nWellington\n6011\nNew Zealand',
                AttentionTo: 'CEO',
                Telephone: '64 123-2222',
                DeliveryInstructions: 'Drop off at front  door',
                HasErrors: false,
                IsDiscounted: true,
                TotalDiscount: 250,
                SentToContact: false,
                Reference: 'foobar',
                Type: 'PURCHASEORDER',
                CurrencyRate: 1,
                CurrencyCode: 'NZD',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    null,
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    null,
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1553672800957+0000)/',
                  ContactGroups: [
                    {
                      ContactGroupID: '17b44ed7-4389-4162-91cb-3dd5766e4e22',
                      Name: 'Oasis',
                      Status: 'ACTIVE',
                      Contacts: [],
                      HasValidationErrors: false,
                    },
                  ],
                  IsSupplier: true,
                  IsCustomer: true,
                  DefaultCurrency: 'NZD',
                  SalesTrackingCategories: [],
                  PurchasesTrackingCategories: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                BrandingThemeID: '414d4a87-46d6-4cfc-ab42-4e29d22e5076',
                Status: 'DRAFT',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    ItemCode: '123',
                    Description: 'Brand new Fender Strats',
                    UnitAmount: 2500,
                    TaxType: 'INPUT2',
                    TaxAmount: 337.5,
                    LineAmount: 2250,
                    AccountCode: '630',
                    Tracking: [
                      {
                        Name: 'Simpsons',
                        Option: 'Homer',
                        TrackingCategoryID: '6a68adde-f210-4465-b0a9-0d8cc6f50762',
                        TrackingOptionID: '94faf12f-f65c-4331-8004-b0b7c5a2da23',
                      },
                    ],
                    Quantity: 1,
                    DiscountRate: 10,
                    LineItemID: '8a9d3eca-e052-43bc-9b87-221d0648c045',
                  },
                ],
                SubTotal: 2250,
                TotalTax: 337.5,
                Total: 2587.5,
                UpdatedDateUTC: '/Date(1553626029823+0000)/',
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '7d94ccdc-ef7b-4806-87ac-8442f25e593b',
                    FileName: 'HelloWorld.png',
                    Url: 'https://api.xero.com/api.xro/2.0/PurchaseOrders/15369a9f-17b6-4235-83c4-0029256d1c37/Attachments/HelloWorld.png',
                    MimeType: 'image/png',
                    ContentLength: 76091,
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const getPurchaseOrdersPurchaseOrderIDHistoryRoute = createRoute({
  method: 'get',
  path: '/PurchaseOrders/{PurchaseOrderID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history for a specific purchase order',
  operationId: 'getPurchaseOrderHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ PurchaseOrderID: PurchaseOrderIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putPurchaseOrdersPurchaseOrderIDHistoryRoute = createRoute({
  method: 'put',
  path: '/PurchaseOrders/{PurchaseOrderID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific purchase orders',
  operationId: 'createPurchaseOrderHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ PurchaseOrderID: PurchaseOrderIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse, 400: _400ErrorResponse },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getPurchaseOrdersPurchaseOrderIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/PurchaseOrders/{PurchaseOrderID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves attachments for a specific purchase order',
  operationId: 'getPurchaseOrderAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ PurchaseOrderID: PurchaseOrderIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array of Purchase Orders',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'dfc29f55-8ddd-4921-a82c-bcc0798d207f',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1602100184437)/',
            Attachments: [
              {
                AttachmentID: 'dce4eaa7-c8a9-4867-9434-95832b427d3b',
                FileName: 'xero-dev1.png',
                Url: 'https://api.xero.com/api.xro/2.0/PurchaseOrders/93369c9b-c481-4e21-aaab-bb19e9a26efe/Attachments/2D_2.png',
                MimeType: 'image/png',
                ContentLength: 98715,
              },
              {
                AttachmentID: 'e58bd37b-e47f-451a-a42c-f946ef229c3e',
                FileName: 'xero-dev2.png',
                Url: 'https://api.xero.com/api.xro/2.0/PurchaseOrders/93369c9b-c481-4e21-aaab-bb19e9a26efe/Attachments/2D.png',
                MimeType: 'image/png',
                ContentLength: 82529,
              },
              {
                AttachmentID: 'c8faa564-223f-45e4-a5a1-94430a5b52c1',
                FileName: 'xero-dev3.png',
                Url: 'https://api.xero.com/api.xro/2.0/PurchaseOrders/93369c9b-c481-4e21-aaab-bb19e9a26efe/Attachments/Screen%20Shot%202020-09-12%20at%204.31.14%20pm.png',
                MimeType: 'image/png',
                ContentLength: 146384,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getPurchaseOrdersPurchaseOrderIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/PurchaseOrders/{PurchaseOrderID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary:
    'Retrieves specific attachment for a specific purchase order using a unique attachment Id',
  operationId: 'getPurchaseOrderAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      PurchaseOrderID: PurchaseOrderIDParamsSchema,
      AttachmentID: AttachmentIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Account as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment for a specific purchase order by filename',
  operationId: 'getPurchaseOrderAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      PurchaseOrderID: PurchaseOrderIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Purchase Order as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Creates attachment for a specific purchase order',
  operationId: 'createPurchaseOrderAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      PurchaseOrderID: PurchaseOrderIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array of Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'c728a4a4-179e-4bbd-a2d5-63e7f9ceba92',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1602099934723)/',
            Attachments: [
              {
                AttachmentID: 'e58bd37b-e47f-451a-a42c-f946ef229c3e',
                FileName: 'xero-dev.png',
                Url: 'https://api.xero.com/api.xro/2.0/PurchaseOrders/93369c9b-c481-4e21-aaab-bb19e9a26efe/Attachments/2D.png',
                MimeType: 'image/png',
                ContentLength: 82529,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postPurchaseOrdersPurchaseOrderIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/PurchaseOrders/{PurchaseOrderID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Updates a specific attachment for a specific purchase order by filename',
  operationId: 'updatePurchaseOrderAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      PurchaseOrderID: PurchaseOrderIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array of Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'aeff9be0-54c2-45dd-8e3d-aa4f8af0fbd7',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1602100086197)/',
            Attachments: [
              {
                AttachmentID: 'dce4eaa7-c8a9-4867-9434-95832b427d3b',
                FileName: 'xero-dev.png',
                Url: 'https://api.xero.com/api.xro/2.0/PurchaseOrders/93369c9b-c481-4e21-aaab-bb19e9a26efe/Attachments/2D_2.png',
                MimeType: 'image/png',
                ContentLength: 98715,
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Validation Error - some data was incorrect returns response of type Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getQuotesRoute = createRoute({
  method: 'get',
  path: '/Quotes',
  tags: ['Accounting'],
  summary: 'Retrieves sales quotes',
  operationId: 'getQuotes',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      DateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DateFrom',
            'x-snake': 'date_from',
            description: 'Filter for quotes after a particular date',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      DateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'DateTo',
            'x-snake': 'date_to',
            description: 'Filter for quotes before a particular date',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      ExpiryDateFrom: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ExpiryDateFrom',
            'x-snake': 'expiry_date_from',
            description: 'Filter for quotes expiring after a particular date',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      ExpiryDateTo: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ExpiryDateTo',
            'x-snake': 'expiry_date_to',
            description: 'Filter for quotes before a particular date',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      ContactID: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ContactID',
            'x-snake': 'contact_id',
            description: 'Filter for quotes belonging to a particular contact',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string', format: 'uuid' },
            required: false,
          },
        }),
      Status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'Status',
            'x-snake': 'status',
            description: 'Filter for quotes of a particular Status',
            example: 'DRAFT',
            schema: { type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description:
              'e.g. page=1 – Up to 100 Quotes will be returned in a single API call with line items shown for each quote',
            example: 1,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Status ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      QuoteNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'QuoteNumber',
            'x-snake': 'quote_number',
            description: 'Filter by quote number (e.g. GET https://.../Quotes?QuoteNumber=QU-0001)',
            example: 'QU-0001',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type quotes array with all quotes',
      content: {
        'application/json': {
          schema: QuotesSchema,
          example: {
            Id: 'bb583e7e-9b6b-471e-88da-4cbfcfad7a57',
            Status: 'OK',
            ProviderName: 'Adams OAuth2 App',
            DateTimeUTC: '/Date(1571876635477)/',
            Quotes: [
              {
                QuoteID: 'be59294f-2a9c-4cee-8c64-0f0ddbc1883a',
                QuoteNumber: 'QU-0001',
                Reference: 'REF-123',
                Terms: 'Not valid after the expiry date',
                Contact: { ContactID: '060816db-0ed7-44de-ab58-8fee9316fcd5', Name: 'Adam' },
                LineItems: [
                  {
                    LineItemID: 'ccf5e45c-73b6-4659-83e8-520f4c6126fd',
                    AccountCode: '200',
                    Description: 'Fish out of Water',
                    UnitAmount: 19.95,
                    DiscountRate: 10,
                    LineAmount: 17.96,
                    ItemCode: 'BOOK',
                    Quantity: 1,
                    TaxAmount: 2.69,
                    TaxType: 'OUTPUT2',
                    Tracking: [
                      {
                        TrackingCategoryID: '351953c4-8127-4009-88c3-f9cd8c9cbe9f',
                        TrackingOptionID: 'ce205173-7387-4651-9726-2cf4c5405ba2',
                        Name: 'Region',
                        Option: 'Eastside',
                      },
                    ],
                  },
                ],
                Date: '/Date(1571875200000)/',
                DateString: '2019-10-24T00:00:00',
                ExpiryDate: '/Date(1571961600000)/',
                ExpiryDateString: '2019-10-25T00:00:00',
                Status: 'ACCEPTED',
                CurrencyRate: 0.937053,
                CurrencyCode: 'AUD',
                SubTotal: 17.96,
                TotalTax: 2.69,
                Total: 20.65,
                TotalDiscount: 1.99,
                Title: 'Your Quote',
                Summary: 'Please buy this',
                BrandingThemeID: '4c82c365-35cb-467f-bb11-dce1f2f2f67c',
                UpdatedDateUTC: '/Date(1571869373890)/',
                LineAmountTypes: 'EXCLUSIVE',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putQuotesRoute = createRoute({
  method: 'put',
  path: '/Quotes',
  tags: ['Accounting'],
  summary: 'Create one or more quotes',
  operationId: 'createQuotes',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description: 'Quotes with an array of Quote object in body of request',
      content: {
        'application/json': {
          schema: QuotesSchema,
          example: {
            Quotes: [
              {
                Contact: { ContactID: '00000000-0000-0000-0000-000000000000' },
                LineItems: [
                  { Description: 'Foobar', Quantity: 1, UnitAmount: 20, AccountCode: '12775' },
                ],
                Date: '2020-02-01',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Quotes with array with newly created Quote',
      content: {
        'application/json': {
          schema: QuotesSchema,
          example: {
            SummarizeErrors: false,
            Id: '29571f5a-bf73-4bb6-9de5-86be44e6bf2e',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1580607782916)/',
            Quotes: [
              {
                QuoteID: '60031d53-6488-4321-9cbd-c1db6dbf9ba4',
                QuoteNumber: 'QU-0008',
                Terms: '',
                Contact: {
                  ContactID: '6a65f055-b0e0-471a-a933-d1ffdd89393f',
                  Name: 'John Smith-82160',
                  EmailAddress: '',
                },
                LineItems: [
                  {
                    LineItemID: '26995857-0eea-45fb-b46c-f8ea896ec46e',
                    AccountCode: '12775',
                    Description: 'Foobar',
                    UnitAmount: 20,
                    LineAmount: 20,
                    ItemCode: '',
                    Quantity: 1,
                    TaxAmount: 0,
                    Tracking: [],
                  },
                ],
                Date: '/Date(1580515200000)/',
                DateString: '2020-02-01T00:00:00',
                Status: 'DRAFT',
                CurrencyRate: 1,
                CurrencyCode: 'USD',
                SubTotal: 20,
                TotalTax: 0,
                Total: 20,
                UpdatedDateUTC: '/Date(1580607782913)/',
                LineAmountTypes: 'EXCLUSIVE',
                StatusAttributeString: 'OK',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const postQuotesRoute = createRoute({
  method: 'post',
  path: '/Quotes',
  tags: ['Accounting'],
  summary: 'Updates or creates one or more quotes',
  operationId: 'updateOrCreateQuotes',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: QuotesSchema,
          example: {
            Quotes: [
              {
                Contact: { ContactID: '00000000-0000-0000-0000-000000000000' },
                LineItems: [
                  { Description: 'Foobar', Quantity: 1, UnitAmount: 20, AccountCode: '12775' },
                ],
                Date: '2020-02-01',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Quotes array with updated or created Quote',
      content: {
        'application/json': {
          schema: QuotesSchema,
          example: {
            SummarizeErrors: false,
            Id: 'b425754f-0512-481d-827b-c8958db7667e',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1580607783833)/',
            Quotes: [
              {
                QuoteID: 'fd53e0b7-4d24-4c20-be85-043a62ea5847',
                QuoteNumber: 'QU-0009',
                Terms: '',
                Contact: {
                  ContactID: '6a65f055-b0e0-471a-a933-d1ffdd89393f',
                  Name: 'John Smith-82160',
                  EmailAddress: '',
                },
                LineItems: [
                  {
                    LineItemID: '898c7fd6-0d94-4ac0-ace8-87e350a042de',
                    AccountCode: '12775',
                    Description: 'Foobar',
                    UnitAmount: 20,
                    LineAmount: 20,
                    ItemCode: '',
                    Quantity: 1,
                    TaxAmount: 0,
                    Tracking: [],
                  },
                ],
                Date: '/Date(1580515200000)/',
                DateString: '2020-02-01T00:00:00',
                Status: 'DRAFT',
                CurrencyRate: 1,
                CurrencyCode: 'USD',
                SubTotal: 20,
                TotalTax: 0,
                Total: 20,
                UpdatedDateUTC: '/Date(1580607783467)/',
                LineAmountTypes: 'EXCLUSIVE',
                StatusAttributeString: 'OK',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getQuotesQuoteIDRoute = createRoute({
  method: 'get',
  path: '/Quotes/{QuoteID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific quote using a unique quote Id',
  operationId: 'getQuote',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ QuoteID: QuoteIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Quotes array with specified Quote',
      content: {
        'application/json': {
          schema: QuotesSchema,
          example: {
            SummarizeErrors: true,
            Id: 'e3626c45-77f1-4ab0-ba9b-3593c7bcd25c',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1580607864786)/',
            Quotes: [
              {
                QuoteID: '1f90e77a-7b88-4462-874f-1aa675be8fef',
                QuoteNumber: 'QU-0007',
                Reference: 'MyQuote',
                Terms: 'These are my terms',
                Contact: {
                  ContactID: '4bc3ecb2-8e2a-4267-a171-0e0ce7e5ac2a',
                  Name: 'ABC Limited',
                  EmailAddress: 'john.smith@gmail.com',
                  FirstName: 'John',
                  LastName: 'Smith',
                },
                LineItems: [
                  {
                    LineItemID: '09b47d9f-f78d-4bab-b226-957f55bfb1b5',
                    AccountCode: '400',
                    Description: 'Half day training - Microsoft Office',
                    UnitAmount: 500,
                    LineAmount: 500,
                    ItemCode: 'Train-MS',
                    Quantity: 1,
                    TaxAmount: 0,
                    TaxType: 'NONE',
                    Tracking: [
                      {
                        TrackingCategoryID: '9bd3f506-6d91-4625-81f0-0f9147f099f4',
                        TrackingOptionID: 'd30e2a0d-ae6f-4806-88ca-d8ebdba2af73',
                        Name: 'Avengers',
                        Option: 'IronMan',
                      },
                    ],
                  },
                ],
                Date: '/Date(1580515200000)/',
                DateString: '2020-02-01T00:00:00',
                ExpiryDate: '/Date(1581724800000)/',
                ExpiryDateString: '2020-02-15T00:00:00',
                Status: 'DRAFT',
                CurrencyRate: 1.54715,
                CurrencyCode: 'NZD',
                SubTotal: 500,
                TotalTax: 0,
                Total: 500,
                TotalDiscount: 0,
                Title: '',
                Summary: '',
                BrandingThemeID: '324587a9-7eed-46c0-ad64-fa941a1b5b3e',
                UpdatedDateUTC: '/Date(1580607757040)/',
                LineAmountTypes: 'EXCLUSIVE',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postQuotesQuoteIDRoute = createRoute({
  method: 'post',
  path: '/Quotes/{QuoteID}',
  tags: ['Accounting'],
  summary: 'Updates a specific quote',
  operationId: 'updateQuote',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ QuoteID: QuoteIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: QuotesSchema,
          example: {
            Quotes: [
              {
                Reference: 'I am an update',
                Contact: { ContactID: '00000000-0000-0000-0000-000000000000' },
                Date: '2020-02-01',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Quotes array with updated Quote',
      content: {
        'application/json': {
          schema: QuotesSchema,
          example: {
            SummarizeErrors: true,
            Id: 'be4f43a7-ef02-497a-96c2-fc0bc047a82a',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1580605644385)/',
            Quotes: [
              {
                QuoteID: '8ce6b14c-ef87-4f45-93f0-853137c6d0e1',
                QuoteNumber: 'QU-0008',
                Reference: 'I am an update',
                Terms: '',
                Contact: {
                  ContactID: '8ed7dd03-4e6a-4078-a807-c5309abfec52',
                  Name: 'Orlena Greenville 35',
                  EmailAddress: '',
                },
                LineItems: [
                  {
                    LineItemID: 'be69f44e-9c72-4fcd-9152-0174867cce49',
                    AccountCode: '12775',
                    Description: 'Foobar',
                    UnitAmount: 20,
                    LineAmount: 20,
                    ItemCode: '',
                    Quantity: 1,
                    TaxAmount: 0,
                    Tracking: [],
                  },
                ],
                Date: '/Date(1580515200000)/',
                DateString: '2020-02-01T00:00:00',
                Status: 'DRAFT',
                CurrencyRate: 1,
                CurrencyCode: 'USD',
                SubTotal: 20,
                TotalTax: 0,
                Total: 20,
                UpdatedDateUTC: '/Date(1580605644360)/',
                LineAmountTypes: 'EXCLUSIVE',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getQuotesQuoteIDHistoryRoute = createRoute({
  method: 'get',
  path: '/Quotes/{QuoteID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history records of a specific quote',
  operationId: 'getQuoteHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ QuoteID: QuoteIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putQuotesQuoteIDHistoryRoute = createRoute({
  method: 'put',
  path: '/Quotes/{QuoteID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific quote',
  operationId: 'createQuoteHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ QuoteID: QuoteIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse, 400: _400ErrorResponse },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getQuotesQuoteIDPdfRoute = createRoute({
  method: 'get',
  path: '/Quotes/{QuoteID}/pdf',
  tags: ['Accounting'],
  summary: 'Retrieves a specific quote as a PDF file using a unique quote Id',
  operationId: 'getQuoteAsPdf',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ QuoteID: QuoteIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of byte array pdf version of specified Quotes',
      content: {
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const getQuotesQuoteIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/Quotes/{QuoteID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves attachments for a specific quote',
  operationId: 'getQuoteAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ QuoteID: QuoteIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array of Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '439c1573-3cd8-4697-a9f6-81fa651ee8f3',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550852630329)/',
            Attachments: [
              {
                AttachmentID: '52a643be-cd5c-489f-9778-53a9fd337756',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Quotes/da962997-a8bd-4dff-9616-01cdc199283f/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getQuotesQuoteIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/Quotes/{QuoteID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment from a specific quote using a unique attachment Id',
  operationId: 'getQuoteAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ QuoteID: QuoteIDParamsSchema, AttachmentID: AttachmentIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Quote as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getQuotesQuoteIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/Quotes/{QuoteID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment from a specific quote by filename',
  operationId: 'getQuoteAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ QuoteID: QuoteIDParamsSchema, FileName: FileNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Quote as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putQuotesQuoteIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/Quotes/{QuoteID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Creates attachment for a specific quote',
  operationId: 'createQuoteAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ QuoteID: QuoteIDParamsSchema, FileName: FileNameParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array of Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '724cdff5-bcd1-4c5c-977e-e864c24258e0',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550856817769)/',
            Attachments: [
              {
                AttachmentID: 'ab95b276-9dce-4925-9077-439818ba270f',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Quotes/da962997-a8bd-4dff-9616-01cdc199283f/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postQuotesQuoteIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/Quotes/{QuoteID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Updates a specific attachment from a specific quote by filename',
  operationId: 'updateQuoteAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ QuoteID: QuoteIDParamsSchema, FileName: FileNameParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Attachments array of Attachment',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'c8d6413a-1da2-4faa-9848-21f60443e906',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550859714477)/',
            Attachments: [
              {
                AttachmentID: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                FileName: 'sample5.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Quotes/da962997-a8bd-4dff-9616-01cdc199283f/Attachments/sample5.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Validation Error - some data was incorrect returns response of type Error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getReceiptsRoute = createRoute({
  method: 'get',
  path: '/Receipts',
  tags: ['Accounting'],
  summary: 'Retrieves draft expense claim receipts for any user',
  operationId: 'getReceipts',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="DRAFT"',
            'x-example-csharp': 'Status==\\"DRAFT\\"',
            'x-example-java': 'Status==&quot;&apos; + Receipt.StatusEnum.DRAFT + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\Receipt::STATUS_DRAFT . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::Receipt::DRAFT}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'ReceiptNumber ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unitdp: UnitdpParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Receipts array for all Receipt',
      content: {
        'application/json': {
          schema: ReceiptsSchema,
          example: {
            Id: '078b2a2c-902f-4154-8739-357ece5982e5',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552524584695)/',
            Receipts: [
              {
                ReceiptID: 'a44fd147-af4e-4fe8-a09a-55332df74162',
                ReceiptNumber: 1,
                Status: 'DRAFT',
                User: {
                  UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                  FirstName: 'API ',
                  LastName: 'Team',
                  ValidationErrors: [],
                  Warnings: [],
                },
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  SalesTrackingCategories: [],
                  PurchasesTrackingCategories: [],
                  ContactPersons: [],
                  Attachments: [],
                  HasValidationErrors: false,
                  ValidationErrors: [],
                  Warnings: [],
                },
                Date: '/Date(1552435200000+0000)/',
                UpdatedDateUTC: '/Date(1552524583983+0000)/',
                Reference: '',
                LineAmountTypes: 'NoTax',
                LineItems: [],
                SubTotal: 40,
                TotalTax: 0,
                Total: 40,
                ID: 'a44fd147-af4e-4fe8-a09a-55332df74162',
                HasAttachments: false,
                Attachments: [],
                ValidationErrors: [],
                Warnings: [],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putReceiptsRoute = createRoute({
  method: 'put',
  path: '/Receipts',
  tags: ['Accounting'],
  summary: 'Creates draft expense claim receipts for any user',
  operationId: 'createReceipt',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ unitdp: UnitdpParamsSchema }),
    body: {
      description: 'Receipts with an array of Receipt object in body of request',
      content: {
        'application/json': {
          schema: ReceiptsSchema,
          example: {
            Receipts: [
              {
                Contact: { ContactID: '00000000-0000-0000-0000-000000000000' },
                Lineitems: [
                  {
                    Description: 'Foobar',
                    Quantity: 2,
                    UnitAmount: 20,
                    AccountCode: '400',
                    TaxType: 'NONE',
                    LineAmount: 40,
                  },
                ],
                User: { UserID: '00000000-0000-0000-0000-000000000000' },
                LineAmountTypes: 'NoTax',
                Status: 'DRAFT',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Receipts array for newly created Receipt',
      content: {
        'application/json': {
          schema: ReceiptsSchema,
          example: {
            Id: '35898898-5361-4b42-b6ca-9d2c584fc53d',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552524583429)/',
            Receipts: [
              {
                ReceiptID: 'a44fd147-af4e-4fe8-a09a-55332df74162',
                ReceiptNumber: 1,
                Status: 'DRAFT',
                User: {
                  UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                  EmailAddress: 'api@xero.com',
                  FirstName: 'API ',
                  LastName: 'Team',
                  UpdatedDateUTC: '/Date(1511957179217+0000)/',
                  IsSubscriber: true,
                  OrganisationRole: 'FINANCIALADVISER',
                },
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Date: '/Date(1552521600000+0000)/',
                UpdatedDateUTC: '/Date(1552524583367+0000)/',
                Reference: '',
                LineAmountTypes: 'NoTax',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: 40,
                    AccountCode: '400',
                    Tracking: [],
                    Quantity: 2,
                  },
                ],
                SubTotal: 40,
                TotalTax: 0,
                Total: 40,
                ID: 'a44fd147-af4e-4fe8-a09a-55332df74162',
                HasAttachments: false,
                ValidationErrors: [
                  { Message: 'A valid user should be identified using the UserID.' },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getReceiptsReceiptIDRoute = createRoute({
  method: 'get',
  path: '/Receipts/{ReceiptID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific draft expense claim receipt by using a unique receipt Id',
  operationId: 'getReceipt',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ReceiptID: ReceiptIDParamsSchema }),
    query: z.object({ unitdp: UnitdpParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Receipts array for a specified Receipt',
      content: {
        'application/json': {
          schema: ReceiptsSchema,
          example: {
            Id: '2c99af06-d278-4580-8c8c-463c806af5b6',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553800357225)/',
            Receipts: [
              {
                ReceiptID: 'a44fd147-af4e-4fe8-a09a-55332df74162',
                ReceiptNumber: 1,
                Status: 'DRAFT',
                User: {
                  UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                  EmailAddress: 'api@xero.com',
                  FirstName: 'API ',
                  LastName: 'Team',
                  UpdatedDateUTC: '/Date(1511957179217+0000)/',
                  IsSubscriber: true,
                  OrganisationRole: 'FINANCIALADVISER',
                },
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1553672800957+0000)/',
                  ContactGroups: [],
                  DefaultCurrency: 'NZD',
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Date: '/Date(1552435200000+0000)/',
                UpdatedDateUTC: '/Date(1552524583983+0000)/',
                Reference: 'Foobar',
                LineAmountTypes: 'NoTax',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: 40,
                    AccountCode: '400',
                    Tracking: [],
                    Quantity: 2,
                    DiscountEnteredAsPercent: true,
                  },
                ],
                SubTotal: 40,
                TotalTax: 0,
                Total: 40,
                ID: 'a44fd147-af4e-4fe8-a09a-55332df74162',
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: 'e02a84f6-b83a-4983-b3b9-35cd8880c7bc',
                    FileName: 'HelloWorld.jpg',
                    Url: 'https://api.xero.com/api.xro/2.0/receipts/a44fd147-af4e-4fe8-a09a-55332df74162/Attachments/HelloWorld.jpg',
                    MimeType: 'image/jpg',
                    ContentLength: 2878711,
                  },
                  {
                    AttachmentID: '3451e34c-66a6-42b0-91e2-88618bdc169b',
                    FileName: 'foobar.jpg',
                    Url: 'https://api.xero.com/api.xro/2.0/receipts/a44fd147-af4e-4fe8-a09a-55332df74162/Attachments/foobar.jpg',
                    MimeType: 'image/jpg',
                    ContentLength: 2878711,
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postReceiptsReceiptIDRoute = createRoute({
  method: 'post',
  path: '/Receipts/{ReceiptID}',
  tags: ['Accounting'],
  summary: 'Updates a specific draft expense claim receipts',
  operationId: 'updateReceipt',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ReceiptID: ReceiptIDParamsSchema }),
    query: z.object({ unitdp: UnitdpParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: ReceiptsSchema,
          example: {
            Receipts: [
              {
                Lineitems: [],
                User: { UserID: '00000000-0000-0000-0000-000000000000' },
                Reference: 'Foobar',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type Receipts array for updated Receipt',
      content: {
        'application/json': {
          schema: ReceiptsSchema,
          example: {
            Id: '05b76bf7-4734-4633-a399-7d569a6a25c6',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552675557052)/',
            Receipts: [
              {
                ReceiptID: 'e3686fdc-c661-4581-b9df-cbb20782ea66',
                ReceiptNumber: 2,
                Status: 'DRAFT',
                User: {
                  UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                  EmailAddress: 'api@xero.com',
                  FirstName: 'API ',
                  LastName: 'Team',
                  UpdatedDateUTC: '/Date(1511957179217+0000)/',
                  IsSubscriber: true,
                  OrganisationRole: 'FINANCIALADVISER',
                },
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  ContactStatus: 'ACTIVE',
                  Name: 'Liam Gallagher',
                  FirstName: 'Liam',
                  LastName: 'Gallagher',
                  EmailAddress: 'liam@rockstar.com',
                  BankAccountDetails: '',
                  Addresses: [
                    {
                      AddressType: 'STREET',
                      City: '',
                      Region: '',
                      PostalCode: '',
                      Country: '',
                      AttentionTo: '',
                    },
                    {
                      AddressType: 'POBOX',
                      City: 'Anytown',
                      Region: 'NY',
                      PostalCode: '10101',
                      Country: 'USA',
                      AttentionTo: '',
                    },
                  ],
                  Phones: [
                    {
                      PhoneType: 'DEFAULT',
                      PhoneNumber: '222-2222',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    { PhoneType: 'DDI', PhoneNumber: '', PhoneAreaCode: '', PhoneCountryCode: '' },
                    {
                      PhoneType: 'FAX',
                      PhoneNumber: '333-2233',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                    {
                      PhoneType: 'MOBILE',
                      PhoneNumber: '444-3433',
                      PhoneAreaCode: '212',
                      PhoneCountryCode: '',
                    },
                  ],
                  UpdatedDateUTC: '/Date(1551747281053+0000)/',
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Date: '/Date(1552694400000+0000)/',
                UpdatedDateUTC: '/Date(1552675556927+0000)/',
                Reference: 'Foobar',
                LineAmountTypes: 'NoTax',
                LineItems: [
                  {
                    Description: 'Foobar',
                    UnitAmount: 20,
                    TaxType: 'NONE',
                    TaxAmount: 0,
                    LineAmount: 40,
                    AccountCode: '400',
                    Tracking: [],
                    Quantity: 2,
                  },
                ],
                SubTotal: 40,
                TotalTax: 0,
                Total: 40,
                ID: 'e3686fdc-c661-4581-b9df-cbb20782ea66',
                HasAttachments: false,
                ValidationErrors: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getReceiptsReceiptIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/Receipts/{ReceiptID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves attachments for a specific expense claim receipt',
  operationId: 'getReceiptAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ReceiptID: ReceiptIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array of Attachments for a specified Receipt',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'd379c04d-d3aa-4034-95b8-af69a449bd78',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552686430436)/',
            Attachments: [
              {
                AttachmentID: '11e5ca6b-d38c-42ab-a29f-c1710d171aa1',
                FileName: 'giphy.gif',
                Url: 'https://api.xero.com/api.xro/2.0/Receipts/7923c00d-163d-404c-a608-af3de333db29/Attachments/giphy.gif',
                MimeType: 'image/gif',
                ContentLength: 495727,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getReceiptsReceiptIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/Receipts/{ReceiptID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary:
    'Retrieves a specific attachments from a specific expense claim receipts by using a unique attachment Id',
  operationId: 'getReceiptAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ ReceiptID: ReceiptIDParamsSchema, AttachmentID: AttachmentIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Receipt as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getReceiptsReceiptIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/Receipts/{ReceiptID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment from a specific expense claim receipts by file name',
  operationId: 'getReceiptAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({ ReceiptID: ReceiptIDParamsSchema, FileName: FileNameParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Receipt as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putReceiptsReceiptIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/Receipts/{ReceiptID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Creates an attachment on a specific expense claim receipts by file name',
  operationId: 'createReceiptAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ReceiptID: ReceiptIDParamsSchema, FileName: FileNameParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with newly created Attachment for a specified Receipt',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '01c9a720-b1f1-4477-8de8-ff46d945fd1d',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552686599884)/',
            Attachments: [
              {
                AttachmentID: '3451e34c-66a6-42b0-91e2-88618bdc169b',
                FileName: 'foobar.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Receipts/a44fd147-af4e-4fe8-a09a-55332df74162/Attachments/foobar.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postReceiptsReceiptIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/Receipts/{ReceiptID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Updates a specific attachment on a specific expense claim receipts by file name',
  operationId: 'updateReceiptAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ReceiptID: ReceiptIDParamsSchema, FileName: FileNameParamsSchema }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with updated Attachment for a specified Receipt',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'aeca1ea8-8fd9-4757-96a6-397dc4957a69',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1552686602761)/',
            Attachments: [
              {
                AttachmentID: 'e02a84f6-b83a-4983-b3b9-35cd8880c7bc',
                FileName: 'HelloWorld.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/Receipts/a44fd147-af4e-4fe8-a09a-55332df74162/Attachments/HelloWorld.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getReceiptsReceiptIDHistoryRoute = createRoute({
  method: 'get',
  path: '/Receipts/{ReceiptID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves a history record for a specific receipt',
  operationId: 'getReceiptHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ ReceiptID: ReceiptIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putReceiptsReceiptIDHistoryRoute = createRoute({
  method: 'put',
  path: '/Receipts/{ReceiptID}/History',
  tags: ['Accounting'],
  summary: 'Creates a history record for a specific receipt',
  operationId: 'createReceiptHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ ReceiptID: ReceiptIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: {
    200: HistoryRecordCreatedResponse,
    400: {
      description:
        'Unsupported - return response incorrect exception, API is not able to create HistoryRecord for Receipts',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            ErrorNumber: 10,
            Type: 'ValidationException',
            Message: 'A validation exception occurred',
            Elements: [
              {
                DateUTCString: '2019-03-15T21:51:50',
                DateUTC: '/Date(1552686710791)/',
                Details: 'Hello World',
                ValidationErrors: [
                  { Message: 'The document with the supplied id was not found for this endpoint.' },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getRepeatingInvoicesRoute = createRoute({
  method: 'get',
  path: '/RepeatingInvoices',
  tags: ['Accounting'],
  summary: 'Retrieves repeating invoices',
  operationId: 'getRepeatingInvoices',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="DRAFT"',
            'x-example-csharp': 'Status==\\"DRAFT\\"',
            'x-example-java':
              'Status==&quot;&apos; + RepeatingInvoice.StatusEnum.DRAFT + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\RepeatingInvoice::STATUS_DRAFT . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::RepeatingInvoice::DRAFT}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Total ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type Repeating Invoices array for all Repeating Invoice',
      content: {
        'application/json': {
          schema: RepeatingInvoicesSchema,
          example: {
            Id: 'b336833d-a3a8-4a67-ab4c-6280b3ad87b0',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553805183228)/',
            RepeatingInvoices: [
              {
                Schedule: {
                  Period: 1,
                  Unit: 'MONTHLY',
                  DueDate: 10,
                  DueDateType: 'OFFOLLOWINGMONTH',
                  StartDate: '/Date(1555286400000+0000)/',
                  EndDate: '/Date(1569801600000+0000)/',
                  NextScheduledDate: '/Date(1555286400000+0000)/',
                },
                RepeatingInvoiceID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Type: 'ACCREC',
                Reference: '[Week]',
                HasAttachments: true,
                ApprovedForSending: false,
                SendCopy: false,
                MarkAsSent: false,
                IncludePDF: false,
                ID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Guitars Fender Strat',
                    UnitAmount: 5000,
                    TaxType: 'OUTPUT2',
                    TaxAmount: 750,
                    LineAmount: 5000,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '13a8353c-d2af-4d5b-920c-438449f08900',
                    DiscountEnteredAsPercent: true,
                  },
                ],
                SubTotal: 5000,
                TotalTax: 750,
                Total: 5750,
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putRepeatingInvoicesRoute = createRoute({
  method: 'put',
  path: '/RepeatingInvoices',
  tags: ['Accounting'],
  summary: 'Creates one or more repeating invoice templates',
  operationId: 'createRepeatingInvoices',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description:
        'RepeatingInvoices with an array of repeating invoice objects in body of request',
      content: {
        'application/json': {
          schema: RepeatingInvoicesSchema,
          example: {
            RepeatingInvoices: [
              {
                Schedule: {
                  Period: 1,
                  Unit: 'MONTHLY',
                  DueDate: 10,
                  DueDateType: 'OFFOLLOWINGMONTH',
                  StartDate: '/Date(1555286400000+0000)/',
                },
                Type: 'ACCREC',
                Reference: '[Week]',
                ApprovedForSending: false,
                SendCopy: false,
                MarkAsSent: false,
                IncludePDF: false,
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                },
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Guitars Fender Strat',
                    UnitAmount: 5000,
                    TaxType: 'OUTPUT2',
                    TaxAmount: 750,
                    LineAmount: 5000,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '13a8353c-d2af-4d5b-920c-438449f08900',
                    DiscountEnteredAsPercent: true,
                  },
                ],
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type RepeatingInvoices array with newly created RepeatingInvoice',
      content: {
        'application/json': {
          schema: RepeatingInvoicesSchema,
          example: {
            Id: 'b336833d-a3a8-4a67-ab4c-6280b3ad87b0',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553805183228)/',
            RepeatingInvoices: [
              {
                Schedule: {
                  Period: 1,
                  Unit: 'MONTHLY',
                  DueDate: 10,
                  DueDateType: 'OFFOLLOWINGMONTH',
                  StartDate: '/Date(1555286400000+0000)/',
                  EndDate: '/Date(1569801600000+0000)/',
                  NextScheduledDate: '/Date(1555286400000+0000)/',
                },
                RepeatingInvoiceID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Type: 'ACCREC',
                Reference: '[Week]',
                HasAttachments: true,
                ApprovedForSending: false,
                SendCopy: false,
                MarkAsSent: false,
                IncludePDF: false,
                ID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Guitars Fender Strat',
                    UnitAmount: 5000,
                    TaxType: 'OUTPUT2',
                    TaxAmount: 750,
                    LineAmount: 5000,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '13a8353c-d2af-4d5b-920c-438449f08900',
                    DiscountEnteredAsPercent: true,
                  },
                ],
                SubTotal: 5000,
                TotalTax: 750,
                Total: 5750,
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const postRepeatingInvoicesRoute = createRoute({
  method: 'post',
  path: '/RepeatingInvoices',
  tags: ['Accounting'],
  summary: 'Creates or deletes one or more repeating invoice templates',
  operationId: 'updateOrCreateRepeatingInvoices',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    query: z.object({ summarizeErrors: SummarizeErrorsParamsSchema }),
    body: {
      description:
        'RepeatingInvoices with an array of repeating invoice objects in body of request',
      content: {
        'application/json': {
          schema: RepeatingInvoicesSchema,
          example: {
            RepeatingInvoices: [
              {
                Schedule: {
                  Period: 1,
                  Unit: 'MONTHLY',
                  DueDate: 10,
                  DueDateType: 'OFFOLLOWINGMONTH',
                  StartDate: '/Date(1555286400000+0000)/',
                },
                Type: 'ACCREC',
                Reference: '[Week]',
                ApprovedForSending: false,
                SendCopy: false,
                MarkAsSent: false,
                IncludePDF: false,
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                },
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Guitars Fender Strat',
                    UnitAmount: 5000,
                    TaxType: 'OUTPUT2',
                    TaxAmount: 750,
                    LineAmount: 5000,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '13a8353c-d2af-4d5b-920c-438449f08900',
                    DiscountEnteredAsPercent: true,
                  },
                ],
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type RepeatingInvoices array with newly created RepeatingInvoice',
      content: {
        'application/json': {
          schema: RepeatingInvoicesSchema,
          example: {
            Id: 'b336833d-a3a8-4a67-ab4c-6280b3ad87b0',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553805183228)/',
            RepeatingInvoices: [
              {
                Schedule: {
                  Period: 1,
                  Unit: 'MONTHLY',
                  DueDate: 10,
                  DueDateType: 'OFFOLLOWINGMONTH',
                  StartDate: '/Date(1555286400000+0000)/',
                  EndDate: '/Date(1569801600000+0000)/',
                  NextScheduledDate: '/Date(1555286400000+0000)/',
                },
                RepeatingInvoiceID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Type: 'ACCREC',
                Reference: '[Week]',
                HasAttachments: true,
                ApprovedForSending: false,
                SendCopy: false,
                MarkAsSent: false,
                IncludePDF: false,
                ID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Guitars Fender Strat',
                    UnitAmount: 5000,
                    TaxType: 'OUTPUT2',
                    TaxAmount: 750,
                    LineAmount: 5000,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '13a8353c-d2af-4d5b-920c-438449f08900',
                    DiscountEnteredAsPercent: true,
                  },
                ],
                SubTotal: 5000,
                TotalTax: 750,
                Total: 5750,
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getRepeatingInvoicesRepeatingInvoiceIDRoute = createRoute({
  method: 'get',
  path: '/RepeatingInvoices/{RepeatingInvoiceID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific repeating invoice by using a unique repeating invoice Id',
  operationId: 'getRepeatingInvoice',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ RepeatingInvoiceID: RepeatingInvoiceIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type Repeating Invoices array with a specified Repeating Invoice',
      content: {
        'application/json': {
          schema: RepeatingInvoicesSchema,
          example: {
            Id: 'd9ac3755-7b81-4e3a-bef0-fa8a4f171442',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553805184820)/',
            RepeatingInvoices: [
              {
                Schedule: {
                  Period: 1,
                  Unit: 'MONTHLY',
                  DueDate: 10,
                  DueDateType: 'OFFOLLOWINGMONTH',
                  StartDate: '/Date(1555286400000+0000)/',
                  EndDate: '/Date(1569801600000+0000)/',
                  NextScheduledDate: '/Date(1555286400000+0000)/',
                },
                RepeatingInvoiceID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Type: 'ACCREC',
                Reference: '[Week]',
                HasAttachments: true,
                Attachments: [
                  {
                    AttachmentID: '2a488b0f-3966-4b6e-a7e1-b6d3286351f2',
                    FileName: 'HelloWorld.jpg',
                    Url: 'https://api.xero.com/api.xro/2.0/Invoices/428c0d75-909f-4b04-8403-a48dc27283b0/Attachments/HelloWorld.jpg',
                    MimeType: 'image/jpg',
                    ContentLength: 2878711,
                  },
                  {
                    AttachmentID: '48294e40-bfd2-4027-a365-f034383cb7aa',
                    FileName: 'foobar.jpg',
                    Url: 'https://api.xero.com/api.xro/2.0/Invoices/428c0d75-909f-4b04-8403-a48dc27283b0/Attachments/foobar.jpg',
                    MimeType: 'image/jpg',
                    ContentLength: 2878711,
                  },
                  {
                    AttachmentID: '528e978a-87b8-44c4-9465-9456ec2f7ee6',
                    FileName: 'helo-heros.jpg',
                    Url: 'https://api.xero.com/api.xro/2.0/Invoices/428c0d75-909f-4b04-8403-a48dc27283b0/Attachments/helo-heros.jpg',
                    MimeType: 'image/jpeg',
                    ContentLength: 2878711,
                  },
                ],
                ID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Status: 'AUTHORISED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Guitars Fender Strat',
                    UnitAmount: 5000,
                    TaxType: 'OUTPUT2',
                    TaxAmount: 750,
                    LineAmount: 5000,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '13a8353c-d2af-4d5b-920c-438449f08900',
                    DiscountEnteredAsPercent: true,
                  },
                ],
                SubTotal: 5000,
                TotalTax: 750,
                Total: 5750,
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const postRepeatingInvoicesRepeatingInvoiceIDRoute = createRoute({
  method: 'post',
  path: '/RepeatingInvoices/{RepeatingInvoiceID}',
  tags: ['Accounting'],
  summary: 'Deletes a specific repeating invoice template',
  operationId: 'updateRepeatingInvoice',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ RepeatingInvoiceID: RepeatingInvoiceIDParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: RepeatingInvoicesSchema,
          example: {
            Schedule: {
              Period: 1,
              Unit: 'MONTHLY',
              DueDate: 10,
              DueDateType: 'OFFOLLOWINGMONTH',
              StartDate: '/Date(1555286400000+0000)/',
              EndDate: '/Date(1569801600000+0000)/',
              NextScheduledDate: '/Date(1555286400000+0000)/',
            },
            RepeatingInvoiceID: '428c0d75-909f-4b04-8403-a48dc27283b0',
            Type: 'ACCREC',
            Reference: '[Week]',
            HasAttachments: true,
            ApprovedForSending: false,
            SendCopy: false,
            MarkAsSent: false,
            IncludePDF: false,
            ID: '428c0d75-909f-4b04-8403-a48dc27283b0',
            Contact: {
              ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
              Name: 'Liam Gallagher',
              Addresses: [],
              Phones: [],
              ContactGroups: [],
              ContactPersons: [],
              HasValidationErrors: false,
            },
            Status: 'DELETED',
            LineAmountTypes: 'Exclusive',
            LineItems: [
              {
                Description: 'Guitars Fender Strat',
                UnitAmount: 5000,
                TaxType: 'OUTPUT2',
                TaxAmount: 750,
                LineAmount: 5000,
                AccountCode: '200',
                Tracking: [],
                Quantity: 1,
                LineItemID: '13a8353c-d2af-4d5b-920c-438449f08900',
                DiscountEnteredAsPercent: true,
              },
            ],
            SubTotal: 5000,
            TotalTax: 750,
            Total: 5750,
            CurrencyCode: 'NZD',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type RepeatingInvoices array with deleted Invoice',
      content: {
        'application/json': {
          schema: RepeatingInvoicesSchema,
          example: {
            Id: 'b336833d-a3a8-4a67-ab4c-6280b3ad87b0',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553805183228)/',
            RepeatingInvoices: [
              {
                Schedule: {
                  Period: 1,
                  Unit: 'MONTHLY',
                  DueDate: 10,
                  DueDateType: 'OFFOLLOWINGMONTH',
                  StartDate: '/Date(1555286400000+0000)/',
                  EndDate: '/Date(1569801600000+0000)/',
                  NextScheduledDate: '/Date(1555286400000+0000)/',
                },
                RepeatingInvoiceID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Type: 'ACCREC',
                Reference: '[Week]',
                HasAttachments: true,
                ApprovedForSending: false,
                SendCopy: false,
                MarkAsSent: false,
                IncludePDF: false,
                ID: '428c0d75-909f-4b04-8403-a48dc27283b0',
                Contact: {
                  ContactID: '430fa14a-f945-44d3-9f97-5df5e28441b8',
                  Name: 'Liam Gallagher',
                  Addresses: [],
                  Phones: [],
                  ContactGroups: [],
                  ContactPersons: [],
                  HasValidationErrors: false,
                },
                Status: 'DELETED',
                LineAmountTypes: 'Exclusive',
                LineItems: [
                  {
                    Description: 'Guitars Fender Strat',
                    UnitAmount: 5000,
                    TaxType: 'OUTPUT2',
                    TaxAmount: 750,
                    LineAmount: 5000,
                    AccountCode: '200',
                    Tracking: [],
                    Quantity: 1,
                    LineItemID: '13a8353c-d2af-4d5b-920c-438449f08900',
                    DiscountEnteredAsPercent: true,
                  },
                ],
                SubTotal: 5000,
                TotalTax: 750,
                Total: 5750,
                CurrencyCode: 'NZD',
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getRepeatingInvoicesRepeatingInvoiceIDAttachmentsRoute = createRoute({
  method: 'get',
  path: '/RepeatingInvoices/{RepeatingInvoiceID}/Attachments',
  tags: ['Accounting'],
  summary: 'Retrieves attachments from a specific repeating invoice',
  operationId: 'getRepeatingInvoiceAttachments',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ RepeatingInvoiceID: RepeatingInvoiceIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with all Attachments for a specified Repeating Invoice',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: 'b88b807b-3087-474b-a4f9-d8f1b4f5a899',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553805762049)/',
            Attachments: [
              {
                AttachmentID: '2a488b0f-3966-4b6e-a7e1-b6d3286351f2',
                FileName: 'HelloWorld.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/RepeatingInvoices/428c0d75-909f-4b04-8403-a48dc27283b0/Attachments/HelloWorld.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
              {
                AttachmentID: '48294e40-bfd2-4027-a365-f034383cb7aa',
                FileName: 'foobar.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/RepeatingInvoices/428c0d75-909f-4b04-8403-a48dc27283b0/Attachments/foobar.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
              {
                AttachmentID: '528e978a-87b8-44c4-9465-9456ec2f7ee6',
                FileName: 'helo-heros.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/RepeatingInvoices/428c0d75-909f-4b04-8403-a48dc27283b0/Attachments/helo-heros.jpg',
                MimeType: 'image/jpeg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getRepeatingInvoicesRepeatingInvoiceIDAttachmentsAttachmentIDRoute = createRoute({
  method: 'get',
  path: '/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{AttachmentID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment from a specific repeating invoice',
  operationId: 'getRepeatingInvoiceAttachmentById',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      RepeatingInvoiceID: RepeatingInvoiceIDParamsSchema,
      AttachmentID: AttachmentIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Repeating Invoice as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const getRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute = createRoute({
  method: 'get',
  path: '/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific attachment from a specific repeating invoices by file name',
  operationId: 'getRepeatingInvoiceAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      contentType: ContentTypeParamsSchema,
    }),
    params: z.object({
      RepeatingInvoiceID: RepeatingInvoiceIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of attachment for Repeating Invoice as binary data',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.attachments', 'accounting.attachments.read'] }],
})

export const putRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute = createRoute({
  method: 'put',
  path: '/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Creates an attachment from a specific repeating invoices by file name',
  operationId: 'createRepeatingInvoiceAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      RepeatingInvoiceID: RepeatingInvoiceIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with updated Attachment for a specified Repeating Invoice',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '219de8c0-ee70-48af-a000-594eba14b417',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553805866696)/',
            Attachments: [
              {
                AttachmentID: 'e078e56c-9a2b-4f6c-a1fa-5d19b0dab611',
                FileName: 'foobar.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/RepeatingInvoices/428c0d75-909f-4b04-8403-a48dc27283b0/Attachments/foobar.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const postRepeatingInvoicesRepeatingInvoiceIDAttachmentsFileNameRoute = createRoute({
  method: 'post',
  path: '/RepeatingInvoices/{RepeatingInvoiceID}/Attachments/{FileName}',
  tags: ['Accounting'],
  summary: 'Updates a specific attachment from a specific repeating invoices by file name',
  operationId: 'updateRepeatingInvoiceAttachmentByFileName',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      RepeatingInvoiceID: RepeatingInvoiceIDParamsSchema,
      FileName: FileNameParamsSchema,
    }),
    body: {
      description: 'Byte array of file in body of request',
      content: { 'application/octet-stream': { schema: z.string() } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type Attachments array with specified Attachment for a specified Repeating Invoice',
      content: {
        'application/json': {
          schema: AttachmentsSchema,
          example: {
            Id: '61b24d5c-4d6e-468f-9de1-abbc234b239a',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553805873362)/',
            Attachments: [
              {
                AttachmentID: 'd086d5f4-9c3d-4edc-a87e-906248eeb652',
                FileName: 'HelloWorld.jpg',
                Url: 'https://api.xero.com/api.xro/2.0/RepeatingInvoices/428c0d75-909f-4b04-8403-a48dc27283b0/Attachments/HelloWorld.jpg',
                MimeType: 'image/jpg',
                ContentLength: 2878711,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.attachments'] }],
})

export const getRepeatingInvoicesRepeatingInvoiceIDHistoryRoute = createRoute({
  method: 'get',
  path: '/RepeatingInvoices/{RepeatingInvoiceID}/History',
  tags: ['Accounting'],
  summary: 'Retrieves history record for a specific repeating invoice',
  operationId: 'getRepeatingInvoiceHistory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ RepeatingInvoiceID: RepeatingInvoiceIDParamsSchema }),
  },
  responses: { 200: HistoryRetrievedResponse },
  security: [{ OAuth2: ['accounting.transactions', 'accounting.transactions.read'] }],
})

export const putRepeatingInvoicesRepeatingInvoiceIDHistoryRoute = createRoute({
  method: 'put',
  path: '/RepeatingInvoices/{RepeatingInvoiceID}/History',
  tags: ['Accounting'],
  summary: 'Creates a  history record for a specific repeating invoice',
  operationId: 'createRepeatingInvoiceHistory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ RepeatingInvoiceID: RepeatingInvoiceIDParamsSchema }),
    body: HistoryRecordsRequestBody,
  },
  responses: { 200: HistoryRecordCreatedResponse, 400: _400ErrorResponse },
  security: [{ OAuth2: ['accounting.transactions'] }],
})

export const getReportsTenNinetyNineRoute = createRoute({
  method: 'get',
  path: '/Reports/TenNinetyNine',
  tags: ['Accounting'],
  summary: 'Retrieve reports for 1099',
  operationId: 'getReportTenNinetyNine',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      reportYear: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'reportYear',
            'x-snake': 'report_year',
            description: 'The year of the 1099 report',
            example: '2019',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Reports',
      content: {
        'application/json': {
          schema: ReportsSchema,
          example: {
            Id: '8b474ddb-9ef4-457c-8640-1c0e3670ea0e',
            Status: 'OK',
            ProviderName: 'Java Public Example',
            DateTimeUTC: '/Date(1691540171754)/',
            Reports: [
              {
                ReportName: '1099-NEC report',
                ReportDate: '1 Jan 2023 to 31 Dec 2023',
                Fields: [],
                Contacts: [
                  {
                    Box1: 0,
                    Box2: 0,
                    Box4: 1150,
                    Name: 'Bank West',
                    FederalTaxIDType: 'SSN',
                    City: 'Pinehaven',
                    Zip: '12345',
                    State: 'CA',
                    Email: 'jack@bowest.com',
                    StreetAddress: 'Procurement Services\r\nGPO 1234\r\n\r\n\r\n',
                    TaxID: '234-22-2223',
                    ContactId: '81d5706a-8057-4338-8511-747cd85f4c68',
                    LegalName: 'Jack Sparrow',
                    BusinessName: 'Bank West',
                    FederalTaxClassification: 'PARTNERSHIP',
                  },
                ],
              },
              {
                ReportName: '1099-MISC report',
                ReportDate: '1 Jan 2023 to 31 Dec 2023',
                Fields: [],
                Contacts: [
                  {
                    Box1: 0,
                    Box2: 0,
                    Box3: 1000,
                    Box4: 0,
                    Box5: 0,
                    Box6: 0,
                    Box7: 0,
                    Box8: 0,
                    Box9: 0,
                    Box10: 0,
                    Box11: 0,
                    Box14: 0,
                    Name: 'Bank West',
                    FederalTaxIDType: 'SSN',
                    City: 'Pinehaven',
                    Zip: '12345',
                    State: 'CA',
                    Email: 'jack@bowest.com',
                    StreetAddress: 'Procurement Services\r\nGPO 1234\r\n\r\n\r\n',
                    TaxID: '234-22-2223',
                    ContactId: '81d5706a-8057-4338-8511-747cd85f4c68',
                    LegalName: 'Jack Sparrow',
                    BusinessName: 'Bank West',
                    FederalTaxClassification: 'PARTNERSHIP',
                  },
                  {
                    Box1: 0,
                    Box2: 0,
                    Box3: 1000,
                    Box4: 0,
                    Box5: 0,
                    Box6: 0,
                    Box7: 0,
                    Box8: 0,
                    Box9: 0,
                    Box10: 0,
                    Box11: 0,
                    Box14: 0,
                    Name: 'Hoyt Productions',
                    FederalTaxIDType: 'SSN',
                    City: 'Oaktown',
                    Zip: '45123',
                    State: 'NY',
                    Email: 'accounts@hoytmadeupdemo.com',
                    StreetAddress: '100 Rusty Ridge Road\r\nSuite 100\r\n\r\n\r\n',
                    TaxID: '123-45-6780',
                    ContactId: '19732b6a-9a5c-4651-b33c-3f8f682e2a2b',
                    LegalName: 'Raymond Holt',
                    BusinessName: 'Hoyt productions',
                    FederalTaxClassification: 'S_CORP',
                  },
                  {
                    Box1: 5543.75,
                    Box2: 0,
                    Box3: 0,
                    Box4: 0,
                    Box5: 0,
                    Box6: 0,
                    Box7: 0,
                    Box8: 0,
                    Box9: 0,
                    Box10: 0,
                    Box11: 0,
                    Box14: 0,
                    Name: 'Truxton Property Management',
                    FederalTaxIDType: 'EIN',
                    City: 'Coppertown',
                    Zip: '21321',
                    State: 'FL',
                    Email: 'accounts@truxtonmadeupdemo.com',
                    StreetAddress: '1000 Copper Avenue\r\nSuite 1000\r\n\r\n\r\n',
                    TaxID: '33-3332233',
                    ContactId: '018355fc-c67e-4352-b443-ef3873031983',
                    LegalName: 'Jake Peralta',
                    BusinessName: 'Truxton Property Management',
                    FederalTaxClassification: 'C_CORP',
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read', 'accounting.reports.tenninetynine.read'] }],
})

export const getReportsAgedPayablesByContactRoute = createRoute({
  method: 'get',
  path: '/Reports/AgedPayablesByContact',
  tags: ['Accounting'],
  summary: 'Retrieves report for aged payables by contact',
  operationId: 'getReportAgedPayablesByContact',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      contactId: z
        .uuid()
        .openapi({
          param: {
            in: 'query',
            required: true,
            name: 'contactId',
            'x-snake': 'contact_id',
            description: 'Unique identifier for a Contact',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            description: 'The date of the Aged Payables By Contact report',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      fromDate: FromDateParamsSchema,
      toDate: ToDateParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type ReportWithRows',
      content: {
        'application/json': {
          schema: ReportWithRowsSchema,
          example: {
            Id: '5a33f9d4-44a6-4467-a812-4f025506ee35',
            Status: 'OK',
            ProviderName: 'Java Public Example',
            DateTimeUTC: '/Date(1555971088085)/',
            Reports: [
              {
                ReportName: 'Aged Payables By Contact',
                ReportType: 'AgedPayablesByContact',
                ReportTitles: [
                  'Invoices',
                  'ABC',
                  'From 10 October 2017 to 22 April 2019',
                  'Showing payments to 22 April 2019',
                ],
                ReportDate: '22 April 2019',
                UpdatedDateUTC: '/Date(1555971088085)/',
                Fields: [],
                Rows: [
                  {
                    RowType: 'Header',
                    Cells: [
                      { Value: 'Date' },
                      { Value: 'Reference' },
                      { Value: 'Due Date' },
                      { Value: '' },
                      { Value: 'Total' },
                      { Value: 'Paid' },
                      { Value: 'Credited' },
                      { Value: 'Due' },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: '2017-10-10T00:00:00' },
                          { Value: 'Opening Balance' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '0.00' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: '2018-10-09T00:00:00',
                            Attributes: [
                              { Value: '1f3960ae-0537-4438-a4dd-76d785e6d7d8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '1f3960ae-0537-4438-a4dd-76d785e6d7d8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '2018-10-23T00:00:00',
                            Attributes: [
                              { Value: '1f3960ae-0537-4438-a4dd-76d785e6d7d8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '181 days overdue',
                            Attributes: [
                              { Value: '1f3960ae-0537-4438-a4dd-76d785e6d7d8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '250.00',
                            Attributes: [
                              { Value: '1f3960ae-0537-4438-a4dd-76d785e6d7d8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '1f3960ae-0537-4438-a4dd-76d785e6d7d8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '1f3960ae-0537-4438-a4dd-76d785e6d7d8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '250.00',
                            Attributes: [
                              { Value: '1f3960ae-0537-4438-a4dd-76d785e6d7d8', Id: 'invoiceID' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '250.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '250.00' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Closing Balance' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '250.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '250.00' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read'] }],
})

export const getReportsAgedReceivablesByContactRoute = createRoute({
  method: 'get',
  path: '/Reports/AgedReceivablesByContact',
  tags: ['Accounting'],
  summary: 'Retrieves report for aged receivables by contact',
  operationId: 'getReportAgedReceivablesByContact',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      contactId: z
        .uuid()
        .openapi({
          param: {
            in: 'query',
            required: true,
            name: 'contactId',
            'x-snake': 'contact_id',
            description: 'Unique identifier for a Contact',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            description: 'The date of the Aged Receivables By Contact report',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      fromDate: FromDateParamsSchema,
      toDate: ToDateParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type ReportWithRows',
      content: {
        'application/json': {
          schema: ReportWithRowsSchema,
          example: {
            Id: 'b977b607-955d-47cb-92fd-7c29b3dd755c',
            Status: 'OK',
            ProviderName: 'Java Public Example',
            DateTimeUTC: '/Date(1556032862815)/',
            Reports: [
              {
                ReportName: 'Aged Receivables By Contact',
                ReportType: 'AgedReceivablesByContact',
                ReportTitles: [
                  'Invoices',
                  'ABC',
                  'From 10 October 2017 to 23 April 2019',
                  'Showing payments to 23 April 2019',
                ],
                ReportDate: '23 April 2019',
                UpdatedDateUTC: '/Date(1556032862815)/',
                Fields: [],
                Rows: [
                  {
                    RowType: 'Header',
                    Cells: [
                      { Value: 'Date' },
                      { Value: 'Number' },
                      { Value: 'Due Date' },
                      { Value: '' },
                      { Value: 'Total' },
                      { Value: 'Paid' },
                      { Value: 'Credited' },
                      { Value: 'Due' },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: '2017-10-10T00:00:00' },
                          { Value: 'Opening Balance' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '0.00' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: '2018-05-13T00:00:00',
                            Attributes: [
                              { Value: '40ebad47-24e2-4dc9-a5f5-579df427671b', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: 'IV1242016',
                            Attributes: [
                              { Value: '40ebad47-24e2-4dc9-a5f5-579df427671b', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '2018-06-22T00:00:00',
                            Attributes: [
                              { Value: '40ebad47-24e2-4dc9-a5f5-579df427671b', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '305 days overdue',
                            Attributes: [
                              { Value: '40ebad47-24e2-4dc9-a5f5-579df427671b', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '100.00',
                            Attributes: [
                              { Value: '40ebad47-24e2-4dc9-a5f5-579df427671b', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '40ebad47-24e2-4dc9-a5f5-579df427671b', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '40ebad47-24e2-4dc9-a5f5-579df427671b', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '100.00',
                            Attributes: [
                              { Value: '40ebad47-24e2-4dc9-a5f5-579df427671b', Id: 'invoiceID' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: '2019-04-23T00:00:00',
                            Attributes: [
                              { Value: 'ca0483ce-fa43-4335-8512-751e655337b8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: 'INV-0086',
                            Attributes: [
                              { Value: 'ca0483ce-fa43-4335-8512-751e655337b8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '2019-05-07T00:00:00',
                            Attributes: [
                              { Value: 'ca0483ce-fa43-4335-8512-751e655337b8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'ca0483ce-fa43-4335-8512-751e655337b8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '50.00',
                            Attributes: [
                              { Value: 'ca0483ce-fa43-4335-8512-751e655337b8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'ca0483ce-fa43-4335-8512-751e655337b8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'ca0483ce-fa43-4335-8512-751e655337b8', Id: 'invoiceID' },
                            ],
                          },
                          {
                            Value: '50.00',
                            Attributes: [
                              { Value: 'ca0483ce-fa43-4335-8512-751e655337b8', Id: 'invoiceID' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '150.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '150.00' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Closing Balance' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '150.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '150.00' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read'] }],
})

export const getReportsBalanceSheetRoute = createRoute({
  method: 'get',
  path: '/Reports/BalanceSheet',
  tags: ['Accounting'],
  summary: 'Retrieves report for balancesheet',
  operationId: 'getReportBalanceSheet',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            description: 'The date of the Balance Sheet report',
            example: '2019-11-01',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      periods: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'periods',
            description: 'The number of periods for the Balance Sheet report',
            example: 3,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      timeframe: z
        .enum(['MONTH', 'QUARTER', 'YEAR'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'timeframe',
            description: 'The period size to compare to (MONTH, QUARTER, YEAR)',
            example: 'MONTH',
            schema: { type: 'string', enum: ['MONTH', 'QUARTER', 'YEAR'] },
            required: false,
          },
        }),
      trackingOptionID1: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'trackingOptionID1',
            'x-snake': 'tracking_option_id_1',
            description: 'The tracking option 1 for the Balance Sheet report',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string' },
            required: false,
          },
        }),
      trackingOptionID2: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'trackingOptionID2',
            'x-snake': 'tracking_option_id_2',
            description: 'The tracking option 2 for the Balance Sheet report',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string' },
            required: false,
          },
        }),
      standardLayout: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'standardLayout',
            'x-snake': 'standard_layout',
            description: 'The standard layout boolean for the Balance Sheet report',
            example: true,
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      paymentsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'paymentsOnly',
            'x-snake': 'payments_only',
            description: 'return a cash basis for the Balance Sheet report',
            example: false,
            'x-example-python': 'False',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type ReportWithRows',
      content: {
        'application/json': {
          schema: ReportWithRowsSchema,
          example: {
            Id: '2ddba304-6ed3-4da4-b185-3b6289699653',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555099412778)/',
            Reports: [
              {
                ReportName: 'Balance Sheet',
                ReportType: 'BalanceSheet',
                ReportTitles: [
                  'Balance Sheet',
                  'Dev Evangelist - Sid Test 3 (NZ-2016-02)',
                  'As at 30 April 2019',
                ],
                ReportDate: '12 April 2019',
                UpdatedDateUTC: '/Date(1555099412778)/',
                Fields: [],
                Rows: [
                  {
                    RowType: 'Header',
                    Cells: [
                      { Value: '' },
                      { Value: '30 Apr 2019' },
                      { Value: '31 Mar 2019' },
                      { Value: '28 Feb 2019' },
                    ],
                  },
                  { RowType: 'Section', Title: 'Assets', Rows: [] },
                  {
                    RowType: 'Section',
                    Title: 'Bank',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Country Savings',
                            Attributes: [
                              { Value: '041207d2-3d61-4e5d-8c1a-b9236955a71c', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-1850.00',
                            Attributes: [
                              { Value: '041207d2-3d61-4e5d-8c1a-b9236955a71c', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-1850.00',
                            Attributes: [
                              { Value: '041207d2-3d61-4e5d-8c1a-b9236955a71c', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '041207d2-3d61-4e5d-8c1a-b9236955a71c', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'My Big Bank',
                            Attributes: [
                              { Value: '300f3bde-3a5c-4035-9ec5-45b09777679a', Id: 'account' },
                            ],
                          },
                          {
                            Value: '2146.37',
                            Attributes: [
                              { Value: '300f3bde-3a5c-4035-9ec5-45b09777679a', Id: 'account' },
                            ],
                          },
                          {
                            Value: '2020.00',
                            Attributes: [
                              { Value: '300f3bde-3a5c-4035-9ec5-45b09777679a', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '300f3bde-3a5c-4035-9ec5-45b09777679a', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total Bank' },
                          { Value: '296.37' },
                          { Value: '170.00' },
                          { Value: '0.00' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Current Assets',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Accounts Receivable',
                            Attributes: [
                              { Value: 'b94495d0-44ab-4199-a1d0-427a4877e100', Id: 'account' },
                            ],
                          },
                          {
                            Value: '154355.72',
                            Attributes: [
                              { Value: 'b94495d0-44ab-4199-a1d0-427a4877e100', Id: 'account' },
                            ],
                          },
                          {
                            Value: '154351.78',
                            Attributes: [
                              { Value: 'b94495d0-44ab-4199-a1d0-427a4877e100', Id: 'account' },
                            ],
                          },
                          {
                            Value: '356.50',
                            Attributes: [
                              { Value: 'b94495d0-44ab-4199-a1d0-427a4877e100', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Inventory',
                            Attributes: [
                              { Value: '53a12a15-7e9b-4a31-85f4-a7cee6d04215', Id: 'account' },
                            ],
                          },
                          {
                            Value: '25000.00',
                            Attributes: [
                              { Value: '53a12a15-7e9b-4a31-85f4-a7cee6d04215', Id: 'account' },
                            ],
                          },
                          {
                            Value: '25000.00',
                            Attributes: [
                              { Value: '53a12a15-7e9b-4a31-85f4-a7cee6d04215', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '53a12a15-7e9b-4a31-85f4-a7cee6d04215', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total Current Assets' },
                          { Value: '179355.72' },
                          { Value: '179351.78' },
                          { Value: '356.50' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Fixed Assets',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Office Equipment',
                            Attributes: [
                              { Value: '7132cab3-ce56-4389-8e47-8f60d4c137f8', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-119.00',
                            Attributes: [
                              { Value: '7132cab3-ce56-4389-8e47-8f60d4c137f8', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-119.00',
                            Attributes: [
                              { Value: '7132cab3-ce56-4389-8e47-8f60d4c137f8', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '7132cab3-ce56-4389-8e47-8f60d4c137f8', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total Fixed Assets' },
                          { Value: '-119.00' },
                          { Value: '-119.00' },
                          { Value: '0.00' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total Assets' },
                          { Value: '179533.09' },
                          { Value: '179402.78' },
                          { Value: '356.50' },
                        ],
                      },
                    ],
                  },
                  { RowType: 'Section', Title: 'Liabilities', Rows: [] },
                  {
                    RowType: 'Section',
                    Title: 'Current Liabilities',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Accounts Payable',
                            Attributes: [
                              { Value: 'a2a4795b-a01f-40eb-afa6-a34b4514875d', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-3469.00',
                            Attributes: [
                              { Value: 'a2a4795b-a01f-40eb-afa6-a34b4514875d', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-3469.00',
                            Attributes: [
                              { Value: 'a2a4795b-a01f-40eb-afa6-a34b4514875d', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-184.00',
                            Attributes: [
                              { Value: 'a2a4795b-a01f-40eb-afa6-a34b4514875d', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'GST',
                            Attributes: [
                              { Value: '17d9a4a0-3181-4803-a96b-f0dbe589091b', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-2446.21',
                            Attributes: [
                              { Value: '17d9a4a0-3181-4803-a96b-f0dbe589091b', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-2461.89',
                            Attributes: [
                              { Value: '17d9a4a0-3181-4803-a96b-f0dbe589091b', Id: 'account' },
                            ],
                          },
                          {
                            Value: '76.50',
                            Attributes: [
                              { Value: '17d9a4a0-3181-4803-a96b-f0dbe589091b', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total Current Liabilities' },
                          { Value: '-5915.21' },
                          { Value: '-5930.89' },
                          { Value: '-107.50' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total Liabilities' },
                          { Value: '-5915.21' },
                          { Value: '-5930.89' },
                          { Value: '-107.50' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Net Assets' },
                          { Value: '185448.30' },
                          { Value: '185333.67' },
                          { Value: '464.00' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Equity',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Current Year Earnings',
                            Attributes: [
                              { Value: '00000000-0000-0000-0000-000000000000', Id: 'account' },
                            ],
                          },
                          {
                            Value: '114.62',
                            Attributes: [
                              { Value: '00000000-0000-0000-0000-000000000000', Id: 'account' },
                              { Value: '4/1/2019', Id: 'fromDate' },
                              { Value: '4/30/2019', Id: 'toDate' },
                            ],
                          },
                          {
                            Value: '156621.67',
                            Attributes: [
                              { Value: '00000000-0000-0000-0000-000000000000', Id: 'account' },
                              { Value: '4/1/2018', Id: 'fromDate' },
                              { Value: '3/31/2019', Id: 'toDate' },
                            ],
                          },
                          {
                            Value: '500.00',
                            Attributes: [
                              { Value: '00000000-0000-0000-0000-000000000000', Id: 'account' },
                              { Value: '4/1/2018', Id: 'fromDate' },
                              { Value: '2/28/2019', Id: 'toDate' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Owner A Drawings',
                            Attributes: [
                              { Value: '136ebd08-60ea-4592-8982-be92c153b53a', Id: 'account' },
                            ],
                          },
                          {
                            Value: '28752.00',
                            Attributes: [
                              { Value: '136ebd08-60ea-4592-8982-be92c153b53a', Id: 'account' },
                            ],
                          },
                          {
                            Value: '28752.00',
                            Attributes: [
                              { Value: '136ebd08-60ea-4592-8982-be92c153b53a', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '136ebd08-60ea-4592-8982-be92c153b53a', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Owner A Funds Introduced',
                            Attributes: [
                              { Value: '5690f1e8-1d02-4893-90c2-ee1a69eff942', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-50.00',
                            Attributes: [
                              { Value: '5690f1e8-1d02-4893-90c2-ee1a69eff942', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-50.00',
                            Attributes: [
                              { Value: '5690f1e8-1d02-4893-90c2-ee1a69eff942', Id: 'account' },
                            ],
                          },
                          {
                            Value: '-46.00',
                            Attributes: [
                              { Value: '5690f1e8-1d02-4893-90c2-ee1a69eff942', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Retained Earnings',
                            Attributes: [
                              { Value: '7fc16c06-c342-4f32-995f-889b5f9996fd', Id: 'account' },
                            ],
                          },
                          {
                            Value: '156631.67',
                            Attributes: [
                              { Value: '7fc16c06-c342-4f32-995f-889b5f9996fd', Id: 'account' },
                              { Value: '', Id: 'fromDate' },
                              { Value: '4/30/2019', Id: 'toDate' },
                            ],
                          },
                          {
                            Value: '10.00',
                            Attributes: [
                              { Value: '7fc16c06-c342-4f32-995f-889b5f9996fd', Id: 'account' },
                              { Value: '', Id: 'fromDate' },
                              { Value: '3/31/2019', Id: 'toDate' },
                            ],
                          },
                          {
                            Value: '10.00',
                            Attributes: [
                              { Value: '7fc16c06-c342-4f32-995f-889b5f9996fd', Id: 'account' },
                              { Value: '', Id: 'fromDate' },
                              { Value: '2/28/2019', Id: 'toDate' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total Equity' },
                          { Value: '185448.29' },
                          { Value: '185333.67' },
                          { Value: '464.00' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read'] }],
})

export const getReportsBankSummaryRoute = createRoute({
  method: 'get',
  path: '/Reports/BankSummary',
  tags: ['Accounting'],
  summary: 'Retrieves report for bank summary',
  operationId: 'getReportBankSummary',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({ fromDate: FromDateParamsSchema, toDate: ToDateParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type ReportWithRows',
      content: {
        'application/json': {
          schema: ReportWithRowsSchema,
          example: {
            Id: 'ae58d0ec-9c5c-455f-b96e-690107579257',
            Status: 'OK',
            ProviderName: 'Java Public Example',
            DateTimeUTC: '/Date(1556035526223)/',
            Reports: [
              {
                ReportName: 'Bank Summary',
                ReportType: 'BankSummary',
                ReportTitles: [
                  'Bank Summary',
                  'MindBody Test 10 (AU-2016-02)',
                  'From 1 April 2019 to 30 April 2019',
                ],
                ReportDate: '23 April 2019',
                UpdatedDateUTC: '/Date(1556035526223)/',
                Fields: [],
                Rows: [
                  {
                    RowType: 'Header',
                    Cells: [
                      { Value: 'Bank Accounts' },
                      { Value: 'Opening Balance' },
                      { Value: 'Cash Received' },
                      { Value: 'Cash Spent' },
                      { Value: 'Closing Balance' },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Big City Bank',
                            Attributes: [
                              { Value: '03f9cf1e-2deb-4bf1-b0a8-b57f08672eb8', Id: 'accountID' },
                            ],
                          },
                          { Value: '0.00' },
                          {
                            Value: '110.00',
                            Attributes: [
                              { Value: '03f9cf1e-2deb-4bf1-b0a8-b57f08672eb8', Id: 'account' },
                            ],
                          },
                          {
                            Value: '100.00',
                            Attributes: [
                              { Value: '03f9cf1e-2deb-4bf1-b0a8-b57f08672eb8', Id: 'account' },
                            ],
                          },
                          { Value: '10.00' },
                        ],
                      },
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total' },
                          { Value: '0.00' },
                          { Value: '110.00' },
                          { Value: '100.00' },
                          { Value: '10.00' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read'] }],
})

export const getReportsReportIDRoute = createRoute({
  method: 'get',
  path: '/Reports/{ReportID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific report using a unique ReportID',
  operationId: 'getReportFromId',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      ReportID: z
        .string()
        .openapi({
          param: {
            in: 'path',
            required: true,
            name: 'ReportID',
            'x-snake': 'report_id',
            description: 'Unique identifier for a Report',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type ReportWithRows',
      content: { 'application/json': { schema: ReportWithRowsSchema } },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read'] }],
})

export const getReportsBudgetSummaryRoute = createRoute({
  method: 'get',
  path: '/Reports/BudgetSummary',
  tags: ['Accounting'],
  summary: 'Retrieves report for budget summary',
  operationId: 'getReportBudgetSummary',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            description: 'The date for the Bank Summary report e.g. 2018-03-31',
            example: '2019-03-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      periods: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'periods',
            description: 'The number of periods to compare (integer between 1 and 12)',
            example: 2,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      timeframe: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'timeframe',
            description: 'The period size to compare to (1=month, 3=quarter, 12=year)',
            example: 3,
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success- return a Report with Rows object',
      content: {
        'application/json': {
          schema: ReportWithRowsSchema,
          example: {
            Id: '9f1e2722-0d98-4669-890f-f8f4217c968b',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573755037865)/',
            Reports: [
              {
                ReportName: 'Budget Summary',
                ReportType: 'BudgetSummary',
                ReportTitles: [
                  'Overall Budget',
                  'Budget Summary',
                  'Online Test 11',
                  'November 2019 to October 2022',
                ],
                ReportDate: '14 November 2019',
                UpdatedDateUTC: '/Date(1573755037865)/',
                Fields: [],
                Rows: [
                  {
                    RowType: 'Header',
                    Cells: [
                      { Value: 'Account' },
                      { Value: 'Jan-20' },
                      { Value: 'Apr-20' },
                      { Value: 'Jul-20' },
                      { Value: 'Oct-20' },
                      { Value: 'Jan-21' },
                      { Value: 'Apr-21' },
                      { Value: 'Jul-21' },
                      { Value: 'Oct-21' },
                      { Value: 'Jan-22' },
                      { Value: 'Apr-22' },
                      { Value: 'Jul-22' },
                      { Value: 'Oct-22' },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Gross Profit' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total Expenses' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Net Profit' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read'] }],
})

export const getReportsExecutiveSummaryRoute = createRoute({
  method: 'get',
  path: '/Reports/ExecutiveSummary',
  tags: ['Accounting'],
  summary: 'Retrieves report for executive summary',
  operationId: 'getReportExecutiveSummary',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            description: 'The date for the Bank Summary report e.g. 2018-03-31',
            example: '2019-03-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type ReportWithRows',
      content: {
        'application/json': {
          schema: ReportWithRowsSchema,
          example: {
            Id: '068d3505-ac37-43f3-8135-f912a5963d8a',
            Status: 'OK',
            ProviderName: 'provider-name',
            DateTimeUTC: '/Date(1573755038314)/',
            Reports: [
              {
                ReportName: 'Executive Summary',
                ReportType: 'ExecutiveSummary',
                ReportTitles: [
                  'Executive Summary',
                  'Online Test 11',
                  'For the month of November 2019',
                ],
                ReportDate: '14 November 2019',
                UpdatedDateUTC: '/Date(1573755038314)/',
                Fields: [],
                Rows: [
                  {
                    RowType: 'Header',
                    Cells: [
                      { Value: '' },
                      { Value: 'Nov 2019' },
                      { Value: 'Oct 2019' },
                      { Value: 'Variance' },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Cash',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Cash received' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Cash spent' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Cash surplus (deficit)' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Closing bank balance' },
                          { Value: '79.01' },
                          { Value: '79.01' },
                          { Value: '0.0%' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Profitability',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Income' },
                          { Value: '40.00' },
                          { Value: '0.00' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Direct costs' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Gross profit (loss)' },
                          { Value: '40.00' },
                          { Value: '0.00' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Other Income' },
                          { Value: '0.00' },
                          { Value: '0.00' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Expenses' },
                          { Value: '205.40' },
                          { Value: '0.00' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Profit (loss)' },
                          { Value: '-165.40' },
                          { Value: '0.00' },
                          { Value: '0.0%' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Balance Sheet',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Debtors' },
                          { Value: '590.00' },
                          { Value: '550.00' },
                          { Value: '7.3%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Creditors' },
                          { Value: '-44.00' },
                          { Value: '-44.00' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Net assets' },
                          { Value: '594.16' },
                          { Value: '759.56' },
                          { Value: '-21.8%' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Income',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Number of invoices issued' },
                          { Value: '1' },
                          { Value: '0' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Average value of invoices' },
                          { Value: '40.00' },
                          { Value: '0.00' },
                          { Value: '0.0%' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Performance',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Gross profit margin' },
                          { Value: '100.0%' },
                          { Value: '' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Net profit margin' },
                          { Value: '-413.5%' },
                          { Value: '' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Return on investment (p.a.)' },
                          { Value: '-334.1%' },
                          { Value: '0.0%' },
                          { Value: '0.0%' },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Position',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Average debtors days' },
                          { Value: '442.50' },
                          { Value: '0' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Average creditors days' },
                          { Value: '-6.426484907497565725413826680' },
                          { Value: '0' },
                          { Value: '0.0%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Short term cash forecast' },
                          { Value: '634.00' },
                          { Value: '594.00' },
                          { Value: '6.7%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Current assets to liabilities' },
                          { Value: '4.0729764675459012154124644427' },
                          { Value: '-62.034024896265560165975103734' },
                          { Value: '106.6%' },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          { Value: 'Term assets to liabilities' },
                          { Value: '' },
                          { Value: '' },
                          { Value: '0.0%' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read'] }],
})

export const getReportsRoute = createRoute({
  method: 'get',
  path: '/Reports',
  tags: ['Accounting'],
  summary: 'Retrieves a list of the organistaions unique reports that require a uuid to fetch',
  operationId: 'getReportsList',
  request: { headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }) },
  responses: {
    200: {
      description: 'Success - return response of type ReportWithRows',
      content: { 'application/json': { schema: ReportWithRowsSchema } },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read'] }],
})

export const getReportsProfitAndLossRoute = createRoute({
  method: 'get',
  path: '/Reports/ProfitAndLoss',
  tags: ['Accounting'],
  summary: 'Retrieves report for profit and loss',
  operationId: 'getReportProfitAndLoss',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      fromDate: FromDateParamsSchema,
      toDate: ToDateParamsSchema,
      periods: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'periods',
            description: 'The number of periods to compare (integer between 1 and 12)',
            example: 3,
            schema: { type: 'integer' },
            required: false,
          },
        }),
      timeframe: z
        .enum(['MONTH', 'QUARTER', 'YEAR'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'timeframe',
            description: 'The period size to compare to (MONTH, QUARTER, YEAR)',
            example: 'MONTH',
            schema: { type: 'string', enum: ['MONTH', 'QUARTER', 'YEAR'] },
            required: false,
          },
        }),
      trackingCategoryID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'trackingCategoryID',
            'x-snake': 'tracking_category_id',
            description: 'The trackingCategory 1 for the ProfitAndLoss report',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string' },
            required: false,
          },
        }),
      trackingCategoryID2: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'trackingCategoryID2',
            'x-snake': 'tracking_category_id_2',
            description: 'The trackingCategory 2 for the ProfitAndLoss report',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string' },
            required: false,
          },
        }),
      trackingOptionID: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'trackingOptionID',
            'x-snake': 'tracking_option_id',
            description: 'The tracking option 1 for the ProfitAndLoss report',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string' },
            required: false,
          },
        }),
      trackingOptionID2: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'trackingOptionID2',
            'x-snake': 'tracking_option_id_2',
            description: 'The tracking option 2 for the ProfitAndLoss report',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string' },
            required: false,
          },
        }),
      standardLayout: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'standardLayout',
            'x-snake': 'standard_layout',
            description: 'Return the standard layout for the ProfitAndLoss report',
            example: 'true',
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      paymentsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'paymentsOnly',
            'x-snake': 'payments_only',
            description: 'Return cash only basis for the ProfitAndLoss report',
            example: 'false',
            'x-example-python': 'False',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type ReportWithRows',
      content: { 'application/json': { schema: ReportWithRowsSchema } },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read'] }],
})

export const getReportsTrialBalanceRoute = createRoute({
  method: 'get',
  path: '/Reports/TrialBalance',
  tags: ['Accounting'],
  summary: 'Retrieves report for trial balance',
  operationId: 'getReportTrialBalance',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'date',
            description: 'The date for the Trial Balance report e.g. 2018-03-31',
            example: '2019-10-31',
            schema: { type: 'string', format: 'date' },
            required: false,
          },
        }),
      paymentsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'paymentsOnly',
            'x-snake': 'payments_only',
            description: 'Return cash only basis for the Trial Balance report',
            example: 'true',
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type ReportWithRows',
      content: {
        'application/json': {
          schema: ReportWithRowsSchema,
          example: {
            Id: '0b3ee35e-b97c-4b3c-b7e2-9a465233e329',
            Status: 'OK',
            ProviderName: 'Java Public Example',
            DateTimeUTC: '/Date(1556129558740)/',
            Reports: [
              {
                ReportName: 'Trial Balance',
                ReportType: 'TrialBalance',
                ReportTitles: [
                  'Trial Balance',
                  'Dev Evangelist - Sid Test 1 (US-2016-06)',
                  'As at 24 April 2019',
                ],
                ReportDate: '24 April 2019',
                UpdatedDateUTC: '/Date(1556129558724)/',
                Fields: [],
                Rows: [
                  {
                    RowType: 'Header',
                    Cells: [
                      { Value: 'Account' },
                      { Value: 'Debit' },
                      { Value: 'Credit' },
                      { Value: 'YTD Debit' },
                      { Value: 'YTD Credit' },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Revenue',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Big Expense (002)',
                            Attributes: [
                              { Value: 'da962997-a8bd-4dff-9616-01cdc199283f', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'da962997-a8bd-4dff-9616-01cdc199283f', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'da962997-a8bd-4dff-9616-01cdc199283f', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'da962997-a8bd-4dff-9616-01cdc199283f', Id: 'account' },
                            ],
                          },
                          {
                            Value: '80.00',
                            Attributes: [
                              { Value: 'da962997-a8bd-4dff-9616-01cdc199283f', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Sales (400)',
                            Attributes: [
                              { Value: '02439bca-5fdc-4b62-b281-0bdf9f16fd5b', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '02439bca-5fdc-4b62-b281-0bdf9f16fd5b', Id: 'account' },
                            ],
                          },
                          {
                            Value: '200.00',
                            Attributes: [
                              { Value: '02439bca-5fdc-4b62-b281-0bdf9f16fd5b', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '02439bca-5fdc-4b62-b281-0bdf9f16fd5b', Id: 'account' },
                            ],
                          },
                          {
                            Value: '1020.22',
                            Attributes: [
                              { Value: '02439bca-5fdc-4b62-b281-0bdf9f16fd5b', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Sales-35325 (1302)',
                            Attributes: [
                              { Value: '3f50db14-1fe6-450b-bfe8-b2d894f18c62', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '3f50db14-1fe6-450b-bfe8-b2d894f18c62', Id: 'account' },
                            ],
                          },
                          {
                            Value: '1000.00',
                            Attributes: [
                              { Value: '3f50db14-1fe6-450b-bfe8-b2d894f18c62', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '3f50db14-1fe6-450b-bfe8-b2d894f18c62', Id: 'account' },
                            ],
                          },
                          {
                            Value: '1000.00',
                            Attributes: [
                              { Value: '3f50db14-1fe6-450b-bfe8-b2d894f18c62', Id: 'account' },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Expenses',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Foobar14043 (123)',
                            Attributes: [
                              { Value: 'd1602f69-f900-4616-8d34-90af393fa368', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'd1602f69-f900-4616-8d34-90af393fa368', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'd1602f69-f900-4616-8d34-90af393fa368', Id: 'account' },
                            ],
                          },
                          {
                            Value: '40.00',
                            Attributes: [
                              { Value: 'd1602f69-f900-4616-8d34-90af393fa368', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'd1602f69-f900-4616-8d34-90af393fa368', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'MyExp51937 (1231239)',
                            Attributes: [
                              { Value: '90f10e0a-a043-46fe-b87e-630e9a951dae', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '90f10e0a-a043-46fe-b87e-630e9a951dae', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '90f10e0a-a043-46fe-b87e-630e9a951dae', Id: 'account' },
                            ],
                          },
                          {
                            Value: '80.00',
                            Attributes: [
                              { Value: '90f10e0a-a043-46fe-b87e-630e9a951dae', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '90f10e0a-a043-46fe-b87e-630e9a951dae', Id: 'account' },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Assets',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Accounts Receivable (120)',
                            Attributes: [
                              { Value: '31ae5bb4-611c-4f89-a369-86e4d56e90b6', Id: 'account' },
                            ],
                          },
                          {
                            Value: '1190.00',
                            Attributes: [
                              { Value: '31ae5bb4-611c-4f89-a369-86e4d56e90b6', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '31ae5bb4-611c-4f89-a369-86e4d56e90b6', Id: 'account' },
                            ],
                          },
                          {
                            Value: '36555.04',
                            Attributes: [
                              { Value: '31ae5bb4-611c-4f89-a369-86e4d56e90b6', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '31ae5bb4-611c-4f89-a369-86e4d56e90b6', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Business Wells Fargo (088)',
                            Attributes: [
                              { Value: '6f7594f2-f059-4d56-9e67-47ac9733bfe9', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '6f7594f2-f059-4d56-9e67-47ac9733bfe9', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '6f7594f2-f059-4d56-9e67-47ac9733bfe9', Id: 'account' },
                            ],
                          },
                          {
                            Value: '7639.04',
                            Attributes: [
                              { Value: '6f7594f2-f059-4d56-9e67-47ac9733bfe9', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '6f7594f2-f059-4d56-9e67-47ac9733bfe9', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Generic Cash Clearing (8003)',
                            Attributes: [
                              { Value: 'f4be973a-25fc-48d0-a7df-7f719f239729', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'f4be973a-25fc-48d0-a7df-7f719f239729', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'f4be973a-25fc-48d0-a7df-7f719f239729', Id: 'account' },
                            ],
                          },
                          {
                            Value: '1443.00',
                            Attributes: [
                              { Value: 'f4be973a-25fc-48d0-a7df-7f719f239729', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'f4be973a-25fc-48d0-a7df-7f719f239729', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Generic Credit Card Clearing (8002)',
                            Attributes: [
                              { Value: 'a10867ac-0bc4-4aa5-af00-b9e5b207c6c3', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'a10867ac-0bc4-4aa5-af00-b9e5b207c6c3', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'a10867ac-0bc4-4aa5-af00-b9e5b207c6c3', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'a10867ac-0bc4-4aa5-af00-b9e5b207c6c3', Id: 'account' },
                            ],
                          },
                          {
                            Value: '96.49',
                            Attributes: [
                              { Value: 'a10867ac-0bc4-4aa5-af00-b9e5b207c6c3', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Generic Inventory (1400)',
                            Attributes: [
                              { Value: '7422f1b6-619f-488c-89e1-91bdde20216c', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '7422f1b6-619f-488c-89e1-91bdde20216c', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '7422f1b6-619f-488c-89e1-91bdde20216c', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '7422f1b6-619f-488c-89e1-91bdde20216c', Id: 'account' },
                            ],
                          },
                          {
                            Value: '160.00',
                            Attributes: [
                              { Value: '7422f1b6-619f-488c-89e1-91bdde20216c', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'My Savings (090)',
                            Attributes: [
                              { Value: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa', Id: 'account' },
                            ],
                          },
                          {
                            Value: '219.92',
                            Attributes: [
                              { Value: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '7e5e243b-9fcd-4aef-8e3a-c70be1e39bfa', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Payment Wall Clearing Account (8001)',
                            Attributes: [
                              { Value: 'bc06840c-12c5-4e22-bb57-fef4d64bac10', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'bc06840c-12c5-4e22-bb57-fef4d64bac10', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'bc06840c-12c5-4e22-bb57-fef4d64bac10', Id: 'account' },
                            ],
                          },
                          {
                            Value: '1.00',
                            Attributes: [
                              { Value: 'bc06840c-12c5-4e22-bb57-fef4d64bac10', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'bc06840c-12c5-4e22-bb57-fef4d64bac10', Id: 'account' },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Liabilities',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Accounts Payable (200)',
                            Attributes: [
                              { Value: 'e9132ee7-4dcf-4fad-b76c-86e212af645a', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'e9132ee7-4dcf-4fad-b76c-86e212af645a', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'e9132ee7-4dcf-4fad-b76c-86e212af645a', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'e9132ee7-4dcf-4fad-b76c-86e212af645a', Id: 'account' },
                            ],
                          },
                          {
                            Value: '9223.00',
                            Attributes: [
                              { Value: 'e9132ee7-4dcf-4fad-b76c-86e212af645a', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Deferred Revenue (2300)',
                            Attributes: [
                              { Value: 'f22cd74e-f59d-4f38-a08d-07e14df28c24', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'f22cd74e-f59d-4f38-a08d-07e14df28c24', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'f22cd74e-f59d-4f38-a08d-07e14df28c24', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'f22cd74e-f59d-4f38-a08d-07e14df28c24', Id: 'account' },
                            ],
                          },
                          {
                            Value: '1854.24',
                            Attributes: [
                              { Value: 'f22cd74e-f59d-4f38-a08d-07e14df28c24', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Rounding (260)',
                            Attributes: [
                              { Value: 'f0072999-8f7c-4b01-bce9-bd9352f98e02', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'f0072999-8f7c-4b01-bce9-bd9352f98e02', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'f0072999-8f7c-4b01-bce9-bd9352f98e02', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'f0072999-8f7c-4b01-bce9-bd9352f98e02', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.01',
                            Attributes: [
                              { Value: 'f0072999-8f7c-4b01-bce9-bd9352f98e02', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Sales Tax (220)',
                            Attributes: [
                              { Value: 'af0be362-45fe-4730-a8af-634c2fb93f4d', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'af0be362-45fe-4730-a8af-634c2fb93f4d', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: 'af0be362-45fe-4730-a8af-634c2fb93f4d', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: 'af0be362-45fe-4730-a8af-634c2fb93f4d', Id: 'account' },
                            ],
                          },
                          {
                            Value: '1578.35',
                            Attributes: [
                              { Value: 'af0be362-45fe-4730-a8af-634c2fb93f4d', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Suspense (250)',
                            Attributes: [
                              { Value: '5ec2f302-cd60-4f8b-a915-9229dd45e6fa', Id: 'account' },
                            ],
                          },
                          {
                            Value: '10.00',
                            Attributes: [
                              { Value: '5ec2f302-cd60-4f8b-a915-9229dd45e6fa', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '5ec2f302-cd60-4f8b-a915-9229dd45e6fa', Id: 'account' },
                            ],
                          },
                          {
                            Value: '41.00',
                            Attributes: [
                              { Value: '5ec2f302-cd60-4f8b-a915-9229dd45e6fa', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '5ec2f302-cd60-4f8b-a915-9229dd45e6fa', Id: 'account' },
                            ],
                          },
                        ],
                      },
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Unpaid Expense Claims (210)',
                            Attributes: [
                              { Value: '38e6967d-4da1-4a93-85f1-ea3c93b61041', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '38e6967d-4da1-4a93-85f1-ea3c93b61041', Id: 'account' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '38e6967d-4da1-4a93-85f1-ea3c93b61041', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '38e6967d-4da1-4a93-85f1-ea3c93b61041', Id: 'account' },
                            ],
                          },
                          {
                            Value: '135.00',
                            Attributes: [
                              { Value: '38e6967d-4da1-4a93-85f1-ea3c93b61041', Id: 'account' },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: 'Equity',
                    Rows: [
                      {
                        RowType: 'Row',
                        Cells: [
                          {
                            Value: 'Retained Earnings (320)',
                            Attributes: [
                              { Value: '6ef53919-b47d-4341-b11a-735a3f8a6515', Id: 'account' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '6ef53919-b47d-4341-b11a-735a3f8a6515', Id: 'account' },
                              { Value: '', Id: 'fromDate' },
                              { Value: '12/31/2018', Id: 'toDate' },
                            ],
                          },
                          {
                            Value: '0.00',
                            Attributes: [
                              { Value: '6ef53919-b47d-4341-b11a-735a3f8a6515', Id: 'account' },
                              { Value: '', Id: 'fromDate' },
                              { Value: '12/31/2018', Id: 'toDate' },
                            ],
                          },
                          {
                            Value: '',
                            Attributes: [
                              { Value: '6ef53919-b47d-4341-b11a-735a3f8a6515', Id: 'account' },
                              { Value: '', Id: 'fromDate' },
                              { Value: '12/31/2018', Id: 'toDate' },
                            ],
                          },
                          {
                            Value: '30871.69',
                            Attributes: [
                              { Value: '6ef53919-b47d-4341-b11a-735a3f8a6515', Id: 'account' },
                              { Value: '', Id: 'fromDate' },
                              { Value: '12/31/2018', Id: 'toDate' },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    RowType: 'Section',
                    Title: '',
                    Rows: [
                      {
                        RowType: 'SummaryRow',
                        Cells: [
                          { Value: 'Total' },
                          { Value: '1200.00' },
                          { Value: '1200.00' },
                          { Value: '46019.00' },
                          { Value: '46019.00' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.reports.read'] }],
})

export const postSetupRoute = createRoute({
  method: 'post',
  path: '/Setup',
  tags: ['Accounting'],
  summary: 'Sets the chart of accounts, the conversion date and conversion balances',
  operationId: 'postSetup',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description:
        'Object including an accounts array, a conversion balances array and a conversion date object in body of request',
      content: {
        'application/json': {
          schema: SetupSchema,
          example: {
            ConversionDate: {},
            ConversionBalances: [],
            Accounts: [
              { Code: '200', Name: 'Sales', Type: 'SALES', ReportingCode: 'REV.TRA.GOO' },
              { Code: '400', Name: 'Advertising', Type: 'OVERHEADS', ReportingCode: 'EXP' },
              {
                Code: '610',
                Name: 'Accounts Receivable',
                Type: 'CURRENT',
                SystemAccount: 'DEBTORS',
                ReportingCode: 'ASS.CUR.REC.TRA',
              },
              {
                Code: '800',
                Name: 'Accounts Payable',
                Type: 'CURRLIAB',
                SystemAccount: 'CREDITORS',
                ReportingCode: 'LIA.CUR.PAY',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - returns a summary of the chart of accounts updates',
      content: {
        'application/json': {
          schema: ImportSummaryObjectSchema,
          example: {
            Id: '80dcb65b-4d14-4350-84e6-1438a809244a',
            Status: 'OK',
            ProviderName: 'Java Public Example',
            DateTimeUTC: '/Date(1604457589645)/',
            ImportSummary: {
              Accounts: {
                Total: 17,
                New: 0,
                Updated: 8,
                Deleted: 0,
                Locked: 0,
                System: 9,
                Errored: 0,
                Present: true,
                NewOrUpdated: 8,
              },
              Organisation: { Present: false },
            },
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const getTaxRatesRoute = createRoute({
  method: 'get',
  path: '/TaxRates',
  tags: ['Accounting'],
  summary: 'Retrieves tax rates',
  operationId: 'getTaxRates',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="ACTIVE"',
            'x-example-csharp': 'Status==\\"ACTIVE\\"',
            'x-example-java': 'Status==&quot;&apos; + TaxRate.StatusEnum.ACTIVE + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\TaxRate::STATUS_ACTIVE . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::TaxRate::ACTIVE}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Name ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type TaxRates array with TaxRates',
      content: {
        'application/json': {
          schema: TaxRatesSchema,
          example: {
            Id: '455d494d-9706-465b-b584-7086ca406b27',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555086839841)/',
            TaxRates: [
              {
                Name: '15% GST on Expenses',
                TaxType: 'INPUT2',
                ReportTaxType: 'INPUT',
                CanApplyToAssets: true,
                CanApplyToEquity: true,
                CanApplyToExpenses: true,
                CanApplyToLiabilities: true,
                CanApplyToRevenue: false,
                DisplayTaxRate: 15,
                EffectiveRate: 15,
                Status: 'ACTIVE',
                TaxComponents: [
                  { Name: 'GST', Rate: 15, IsCompound: false, IsNonRecoverable: false },
                ],
              },
              {
                Name: '15% GST on Income',
                TaxType: 'OUTPUT2',
                ReportTaxType: 'OUTPUT',
                CanApplyToAssets: true,
                CanApplyToEquity: true,
                CanApplyToExpenses: false,
                CanApplyToLiabilities: true,
                CanApplyToRevenue: true,
                DisplayTaxRate: 15,
                EffectiveRate: 15,
                Status: 'ACTIVE',
                TaxComponents: [
                  { Name: 'GST', Rate: 15, IsCompound: false, IsNonRecoverable: false },
                ],
              },
              {
                Name: 'GST on Imports',
                TaxType: 'GSTONIMPORTS',
                ReportTaxType: 'GSTONIMPORTS',
                CanApplyToAssets: false,
                CanApplyToEquity: false,
                CanApplyToExpenses: false,
                CanApplyToLiabilities: true,
                CanApplyToRevenue: false,
                DisplayTaxRate: 0,
                EffectiveRate: 0,
                Status: 'ACTIVE',
                TaxComponents: [
                  { Name: 'GST', Rate: 0, IsCompound: false, IsNonRecoverable: false },
                ],
              },
              {
                Name: 'No GST',
                TaxType: 'NONE',
                ReportTaxType: 'NONE',
                CanApplyToAssets: true,
                CanApplyToEquity: true,
                CanApplyToExpenses: true,
                CanApplyToLiabilities: true,
                CanApplyToRevenue: true,
                DisplayTaxRate: 0,
                EffectiveRate: 0,
                Status: 'ACTIVE',
                TaxComponents: [
                  { Name: 'GST', Rate: 0, IsCompound: false, IsNonRecoverable: false },
                ],
              },
              {
                Name: 'Zero Rated',
                TaxType: 'ZERORATED',
                ReportTaxType: 'OUTPUT',
                CanApplyToAssets: false,
                CanApplyToEquity: false,
                CanApplyToExpenses: false,
                CanApplyToLiabilities: true,
                CanApplyToRevenue: true,
                DisplayTaxRate: 0,
                EffectiveRate: 0,
                Status: 'ACTIVE',
                TaxComponents: [
                  { Name: 'GST', Rate: 0, IsCompound: false, IsNonRecoverable: false },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const putTaxRatesRoute = createRoute({
  method: 'put',
  path: '/TaxRates',
  tags: ['Accounting'],
  summary: 'Creates one or more tax rates',
  operationId: 'createTaxRates',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'TaxRates array with TaxRate object in body of request',
      content: {
        'application/json': {
          schema: TaxRatesSchema,
          example: {
            TaxRates: [
              { Name: 'CA State Tax', TaxComponents: [{ Name: 'State Tax', Rate: 2.25 }] },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type TaxRates array newly created TaxRate',
      content: {
        'application/json': {
          schema: TaxRatesSchema,
          example: {
            Id: '9d2c5e56-fab4-450b-a5ff-d47409508eab',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555086839080)/',
            TaxRates: [
              {
                Name: 'SDKTax29067',
                TaxType: 'TAX002',
                ReportTaxType: 'INPUT',
                CanApplyToAssets: true,
                CanApplyToEquity: true,
                CanApplyToExpenses: true,
                CanApplyToLiabilities: true,
                CanApplyToRevenue: false,
                DisplayTaxRate: 2.25,
                EffectiveRate: 2.25,
                Status: 'ACTIVE',
                TaxComponents: [
                  { Name: 'State Tax', Rate: 2.25, IsCompound: false, IsNonRecoverable: false },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const postTaxRatesRoute = createRoute({
  method: 'post',
  path: '/TaxRates',
  tags: ['Accounting'],
  summary: 'Updates tax rates',
  operationId: 'updateTaxRate',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: TaxRatesSchema,
          example: {
            TaxRates: [
              {
                Name: 'State Tax NY',
                TaxComponents: [{ Name: 'State Tax', Rate: 2.25 }],
                Status: 'DELETED',
                ReportTaxType: 'INPUT',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - return response of type TaxRates array updated TaxRate',
      content: {
        'application/json': {
          schema: TaxRatesSchema,
          example: {
            Id: '12f4c453-2e25-41aa-a52f-6faaf6c05832',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555086839658)/',
            TaxRates: [
              {
                Name: 'SDKTax29067',
                TaxType: 'TAX002',
                ReportTaxType: 'INPUT',
                CanApplyToAssets: true,
                CanApplyToEquity: true,
                CanApplyToExpenses: true,
                CanApplyToLiabilities: true,
                CanApplyToRevenue: false,
                DisplayTaxRate: 2.25,
                EffectiveRate: 2.25,
                Status: 'DELETED',
                TaxComponents: [
                  { Name: 'State Tax', Rate: 2.25, IsCompound: false, IsNonRecoverable: false },
                ],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const getTaxRatesTaxTypeRoute = createRoute({
  method: 'get',
  path: '/TaxRates/{TaxType}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific tax rate according to given TaxType code',
  operationId: 'getTaxRateByTaxType',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ TaxType: TaxTypeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type TaxRates array with one TaxRate',
      content: {
        'application/json': {
          schema: TaxRatesSchema,
          example: {
            Id: '455d494d-9706-465b-b584-7086ca406b27',
            Status: 'OK',
            ProviderName: 'Xero API Partner',
            DateTimeUTC: '/Date(1550797359081)/',
            TaxRates: [
              {
                Name: '15% GST on Expenses',
                TaxType: 'INPUT2',
                ReportTaxType: 'INPUT',
                CanApplyToAssets: true,
                CanApplyToEquity: true,
                CanApplyToExpenses: true,
                CanApplyToLiabilities: true,
                CanApplyToRevenue: false,
                DisplayTaxRate: 15,
                EffectiveRate: 15,
                Status: 'ACTIVE',
                TaxComponents: [
                  { Name: 'GST', Rate: 15, IsCompound: false, IsNonRecoverable: false },
                ],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const getTrackingCategoriesRoute = createRoute({
  method: 'get',
  path: '/TrackingCategories',
  tags: ['Accounting'],
  summary: 'Retrieves tracking categories and options',
  operationId: 'getTrackingCategories',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'Status=="ACTIVE"',
            'x-example-csharp': 'Status==\\"ACTIVE\\"',
            'x-example-java':
              'Status==&quot;&apos; + TrackingCategory.StatusEnum.ACTIVE + &apos;&quot;',
            'x-example-php':
              'Status==&quot;&apos; . \\XeroAPI\\XeroPHP\\Models\\Accounting\\TrackingCategory::STATUS_ACTIVE . &apos;&quot;',
            'x-example-ruby': 'Status==#{XeroRuby::Accounting::TrackingCategory::ACTIVE}',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'Name ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeArchived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'includeArchived',
            'x-snake': 'include_archived',
            description:
              'e.g. includeArchived=true - Categories and options with a status of ARCHIVED will be included in the response',
            example: true,
            'x-example-python': 'True',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type TrackingCategories array of TrackingCategory',
      content: {
        'application/json': {
          schema: TrackingCategoriesSchema,
          example: {
            Id: 'cec55068-8061-48e5-ac83-c77e7c54cf3d',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555085855047)/',
            TrackingCategories: [
              {
                Name: 'BarFoo',
                Status: 'ACTIVE',
                TrackingCategoryID: '22f10184-0deb-44ae-a312-b1f6ea70e51f',
                Options: [],
              },
              {
                Name: 'HelloWorld',
                Status: 'ACTIVE',
                TrackingCategoryID: '0c9fce3e-a111-4d99-803a-62cf3f40e633',
                Options: [],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const putTrackingCategoriesRoute = createRoute({
  method: 'put',
  path: '/TrackingCategories',
  tags: ['Accounting'],
  summary: 'Create tracking categories',
  operationId: 'createTrackingCategory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'TrackingCategory object in body of request',
      content: {
        'application/json': { schema: TrackingCategorySchema, example: { name: 'FooBar' } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type TrackingCategories array of newly created TrackingCategory',
      content: {
        'application/json': {
          schema: TrackingCategoriesSchema,
          example: {
            Id: '1a9f8e03-9916-4a42-93a9-e8fa4902d49c',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555085855988)/',
            TrackingCategories: [
              {
                Name: 'FooBar',
                Status: 'ACTIVE',
                TrackingCategoryID: 'b1df776b-b093-4730-b6ea-590cca40e723',
                Options: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const getTrackingCategoriesTrackingCategoryIDRoute = createRoute({
  method: 'get',
  path: '/TrackingCategories/{TrackingCategoryID}',
  tags: ['Accounting'],
  summary: 'Retrieves specific tracking categories and options using a unique tracking category Id',
  operationId: 'getTrackingCategory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ TrackingCategoryID: TrackingCategoryIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type TrackingCategories array of specified TrackingCategory',
      content: {
        'application/json': {
          schema: TrackingCategoriesSchema,
          example: {
            Id: 'b75b8862-39c0-45a8-82b8-30ab4831996b',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555085855442)/',
            TrackingCategories: [
              {
                Name: 'Foo41157',
                Status: 'DELETED',
                TrackingCategoryID: '22f10184-0deb-44ae-a312-b1f6ea70e51f',
                Options: [],
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const postTrackingCategoriesTrackingCategoryIDRoute = createRoute({
  method: 'post',
  path: '/TrackingCategories/{TrackingCategoryID}',
  tags: ['Accounting'],
  summary: 'Updates a specific tracking category',
  operationId: 'updateTrackingCategory',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ TrackingCategoryID: TrackingCategoryIDParamsSchema }),
    body: {
      content: {
        'application/json': { schema: TrackingCategorySchema, example: { Name: 'Avengers' } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type TrackingCategories array of updated TrackingCategory',
      content: {
        'application/json': {
          schema: TrackingCategoriesSchema,
          example: {
            Id: '55438774-f87d-4731-b586-799cf0f914ed',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555085856275)/',
            TrackingCategories: [
              {
                Name: 'BarFoo',
                Status: 'ACTIVE',
                TrackingCategoryID: 'b1df776b-b093-4730-b6ea-590cca40e723',
                Options: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const deleteTrackingCategoriesTrackingCategoryIDRoute = createRoute({
  method: 'delete',
  path: '/TrackingCategories/{TrackingCategoryID}',
  tags: ['Accounting'],
  summary: 'Deletes a specific tracking category',
  operationId: 'deleteTrackingCategory',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ TrackingCategoryID: TrackingCategoryIDParamsSchema }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type TrackingCategories array of deleted TrackingCategory',
      content: {
        'application/json': {
          schema: TrackingCategoriesSchema,
          example: {
            Id: 'ca7f8145-c8a5-4366-a2fb-784edc0cfbb7',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555086457922)/',
            TrackingCategories: [
              {
                Name: 'Foo46189',
                Status: 'DELETED',
                TrackingCategoryID: '0390bdfd-94f2-49d6-b7a0-4a38c46ebf03',
                Options: [],
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const putTrackingCategoriesTrackingCategoryIDOptionsRoute = createRoute({
  method: 'put',
  path: '/TrackingCategories/{TrackingCategoryID}/Options',
  tags: ['Accounting'],
  summary: 'Creates options for a specific tracking category',
  operationId: 'createTrackingOptions',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ TrackingCategoryID: TrackingCategoryIDParamsSchema }),
    body: {
      description: 'TrackingOption object in body of request',
      content: { 'application/json': { schema: TrackingOptionSchema, example: { name: ' Bar' } } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type TrackingOptions array of options for a specified category',
      content: {
        'application/json': {
          schema: TrackingOptionsSchema,
          example: {
            Id: '923be702-d124-4f5c-a568-760906538d8e',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555085857061)/',
            Options: [
              {
                TrackingOptionID: '34669548-b989-487a-979f-0787d04568a2',
                Name: 'Bar40423',
                Status: 'ACTIVE',
                HasValidationErrors: false,
                IsDeleted: false,
                IsArchived: false,
                IsActive: true,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const postTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute = createRoute({
  method: 'post',
  path: '/TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}',
  tags: ['Accounting'],
  summary: 'Updates a specific option for a specific tracking category',
  operationId: 'updateTrackingOptions',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({
      TrackingCategoryID: TrackingCategoryIDParamsSchema,
      TrackingOptionID: TrackingOptionIDParamsSchema,
    }),
    body: {
      content: {
        'application/json': { schema: TrackingOptionSchema, example: { name: 'Vision' } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Success - return response of type TrackingOptions array of options for a specified category',
      content: {
        'application/json': {
          schema: TrackingOptionsSchema,
          example: {
            Id: '923be702-d124-4f5c-a568-760906538d8e',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555085857061)/',
            Options: [
              {
                TrackingOptionID: '34669548-b989-487a-979f-0787d04568a2',
                Name: 'Bar40423',
                Status: 'ACTIVE',
                HasValidationErrors: false,
                IsDeleted: false,
                IsArchived: false,
                IsActive: true,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const deleteTrackingCategoriesTrackingCategoryIDOptionsTrackingOptionIDRoute = createRoute({
  method: 'delete',
  path: '/TrackingCategories/{TrackingCategoryID}/Options/{TrackingOptionID}',
  tags: ['Accounting'],
  summary: 'Deletes a specific option for a specific tracking category',
  operationId: 'deleteTrackingOptions',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({
      TrackingCategoryID: TrackingCategoryIDParamsSchema,
      TrackingOptionID: TrackingOptionIDParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'Success - return response of type TrackingOptions array of remaining options for a specified category',
      content: {
        'application/json': {
          schema: TrackingOptionsSchema,
          example: {
            Id: 'd985866e-0831-418f-a07c-4d843ff66d25',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1555085857338)/',
            Options: [
              {
                TrackingOptionID: '34669548-b989-487a-979f-0787d04568a2',
                Name: 'Bar40423',
                Status: 'DELETED',
                HasValidationErrors: false,
                IsDeleted: true,
                IsArchived: false,
                IsActive: false,
              },
            ],
          },
        },
      },
    },
    400: _400ErrorResponse,
  },
  security: [{ OAuth2: ['accounting.settings'] }],
})

export const getUsersRoute = createRoute({
  method: 'get',
  path: '/Users',
  tags: ['Accounting'],
  summary: 'Retrieves users',
  operationId: 'getUsers',
  request: {
    headers: z.object({
      'xero-tenant-id': RequiredHeaderParamsSchema,
      'If-Modified-Since': IfModifiedSinceParamsSchema,
    }),
    query: z.object({
      where: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'where',
            description: 'Filter by an any element',
            example: 'IsSubscriber==true',
            schema: { type: 'string' },
            required: false,
          },
        }),
      order: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'order',
            description: 'Order by an any element',
            example: 'LastName ASC',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Users array of all User',
      content: {
        'application/json': {
          schema: UsersSchema,
          example: {
            Id: '17932a4e-4948-4d50-8672-4ef0e1dd90c5',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553880796393)/',
            Users: [
              {
                UserID: '3c37ef1d-cd49-4589-9787-3c418ed8b6ac',
                EmailAddress: 'test@email.com',
                FirstName: 'Test',
                LastName: 'Xero',
                UpdatedDateUTC: '/Date(1508523261613+0000)/',
                IsSubscriber: false,
                OrganisationRole: 'FINANCIALADVISER',
              },
              {
                UserID: 'd1164823-0ac1-41ad-987b-b4e30fe0b273',
                EmailAddress: 'api@xero.com',
                FirstName: 'API ',
                LastName: 'Team',
                UpdatedDateUTC: '/Date(1511957179217+0000)/',
                IsSubscriber: true,
                OrganisationRole: 'FINANCIALADVISER',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

export const getUsersUserIDRoute = createRoute({
  method: 'get',
  path: '/Users/{UserID}',
  tags: ['Accounting'],
  summary: 'Retrieves a specific user',
  operationId: 'getUser',
  request: {
    headers: z.object({ 'xero-tenant-id': RequiredHeaderParamsSchema }),
    params: z.object({ UserID: UserIDParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Users array of specified User',
      content: {
        'application/json': {
          schema: UsersSchema,
          example: {
            Id: '51250ce8-1b35-4ba4-b404-dc94ff75bd87',
            Status: 'OK',
            ProviderName: 'Provider Name Example',
            DateTimeUTC: '/Date(1553880796732)/',
            Users: [
              {
                UserID: '3c37ef1d-cd49-4589-9787-3c418ed8b6ac',
                EmailAddress: 'test@email.com',
                FirstName: 'Test',
                LastName: 'Xero',
                UpdatedDateUTC: '/Date(1508523261613+0000)/',
                IsSubscriber: false,
                OrganisationRole: 'FINANCIALADVISER',
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['accounting.settings', 'accounting.settings.read'] }],
})

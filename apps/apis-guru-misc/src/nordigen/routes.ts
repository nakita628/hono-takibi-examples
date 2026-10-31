import { createRoute, z } from '@hono/zod-openapi'

const AccountV2StatusEnumSchema = z
  .enum(['DISCOVERED', 'PROCESSING', 'READY', 'ERROR', 'SUSPENDED'])
  .openapi('AccountV2StatusEnum')

const AccountV2Schema = z
  .object({
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date & time at which the account object was created.',
        readOnly: true,
        title: 'Created date/time',
      }),
    iban: z.string().exactOptional().openapi({ description: 'The Account IBAN', readOnly: true }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'The ID of this Account, used to refer to this account in other API calls.',
        readOnly: true,
        title: 'Account ID',
      }),
    institution_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ASPSP associated with this account.',
        readOnly: true,
        title: 'ASPSP ID',
      }),
    last_accessed: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date & time at which the account object was last accessed.',
        readOnly: true,
        title: 'Last accessed date/time',
      }),
    owner_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the account owner.',
        readOnly: true,
        title: 'Account Owner Name',
      }),
    status: AccountV2StatusEnumSchema.exactOptional().openapi({
      description: 'The processing status of this account.',
      readOnly: true,
      title: 'Account Status',
    }),
  })
  .openapi({ description: 'AccountV2Serializer.', required: [] })
  .openapi('AccountV2')

const AddressCountryEnumSchema = z
  .enum([
    'AT',
    'BE',
    'BG',
    'HR',
    'CY',
    'CZ',
    'DK',
    'EE',
    'FI',
    'FR',
    'DE',
    'GR',
    'HU',
    'IS',
    'IE',
    'IT',
    'LV',
    'LI',
    'LT',
    'LU',
    'MT',
    'NL',
    'NO',
    'PL',
    'PT',
    'RO',
    'SK',
    'SI',
    'ES',
    'SE',
    'GB',
  ])
  .openapi('AddressCountryEnum')

const CountryEnumSchema = z
  .enum([
    'AT',
    'BE',
    'BG',
    'HR',
    'CY',
    'CZ',
    'DK',
    'EE',
    'FI',
    'FR',
    'DE',
    'GR',
    'HU',
    'IS',
    'IE',
    'IT',
    'LV',
    'LI',
    'LT',
    'LU',
    'MT',
    'NL',
    'NO',
    'PL',
    'PT',
    'RO',
    'SK',
    'SI',
    'ES',
    'SE',
    'GB',
  ])
  .openapi('CountryEnum')

const TypeEnumSchema = z.enum(['IBAN', 'SCAN']).openapi('TypeEnum')

const CreditorAccountSchema = z
  .object({
    account: z.string().max(128).openapi({ description: 'Creditor account type identifier' }),
    address_country: z
      .string()
      .max(2)
      .exactOptional()
      .openapi({ description: 'Creditor account address country' }),
    currency: z.string().max(3).openapi({ description: 'Creditor account currency' }),
    id: z.uuid().exactOptional().openapi({ description: 'Unique entry ID', readOnly: true }),
    name: z.string().max(70).openapi({ description: 'Creditor account name' }),
    type: TypeEnumSchema.default('IBAN')
      .exactOptional()
      .openapi({ description: 'Creditor account type' }),
  })
  .openapi({
    description: 'Creditor account read serializer.',
    required: ['account', 'currency', 'name'],
  })
  .openapi('CreditorAccount')

const CreditorAccountWriteSchema = z
  .object({
    account: z.string().max(128).openapi({ description: 'Creditor account type identifier' }),
    address_country: AddressCountryEnumSchema.exactOptional(),
    address_street: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: 'Creditor account address street' }),
    agent: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({ description: 'Creditor account BICFI Identifier' }),
    agent_name: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: 'Creditor account agent name' }),
    currency: z.string().max(3).openapi({ description: 'Creditor account currency' }),
    id: z.uuid().exactOptional().openapi({ description: 'Unique entry ID', readOnly: true }),
    institution_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'an Institution ID for this CreditorAccount' }),
    name: z.string().max(70).openapi({ description: 'Creditor account name' }),
    post_code: z
      .string()
      .max(30)
      .exactOptional()
      .openapi({ description: 'Creditor account address post code' }),
    type: TypeEnumSchema.default('IBAN')
      .exactOptional()
      .openapi({ description: 'Creditor account type' }),
  })
  .openapi({
    description: 'Creditor account write serializer.',
    required: ['account', 'currency', 'name'],
  })
  .openapi('CreditorAccountWrite')

const CreditorAccountWriteRequestSchema = z
  .object({
    account: z.string().max(128).openapi({ description: 'Creditor account type identifier' }),
    address_country: AddressCountryEnumSchema.exactOptional(),
    address_street: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: 'Creditor account address street' }),
    agent: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({ description: 'Creditor account BICFI Identifier' }),
    agent_name: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: 'Creditor account agent name' }),
    currency: z.string().max(3).openapi({ description: 'Creditor account currency' }),
    institution_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'an Institution ID for this CreditorAccount' }),
    name: z.string().max(70).openapi({ description: 'Creditor account name' }),
    post_code: z
      .string()
      .max(30)
      .exactOptional()
      .openapi({ description: 'Creditor account address post code' }),
    type: TypeEnumSchema.default('IBAN')
      .exactOptional()
      .openapi({ description: 'Creditor account type' }),
  })
  .openapi({
    description: 'Creditor account write serializer.',
    required: ['account', 'currency', 'name'],
  })
  .openapi('CreditorAccountWriteRequest')

const DebtorAccountWriteSchema = z
  .object({
    account: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({ description: 'Debtor account type identifier' }),
    address_country: z
      .string()
      .max(2)
      .exactOptional()
      .openapi({ description: 'Debtor account address country' }),
    address_street: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: 'Debtor account address street' }),
    currency: z.string().max(3).exactOptional().openapi({ description: 'Debtor account currency' }),
    name: z.string().max(70).openapi({ description: 'Debtor account name' }),
    post_code: z
      .string()
      .max(30)
      .exactOptional()
      .openapi({ description: 'Debtor account post code' }),
    type: TypeEnumSchema.default('IBAN')
      .exactOptional()
      .openapi({ description: 'Debtor account type' }),
    type_number: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({ description: 'Debtor account type identifier' }),
  })
  .openapi({ description: 'Debtor account write serializer.', required: ['name'] })
  .openapi('DebtorAccountWrite')

const DebtorAccountWriteRequestSchema = z
  .object({
    account: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({ description: 'Debtor account type identifier' }),
    address_country: z
      .string()
      .max(2)
      .exactOptional()
      .openapi({ description: 'Debtor account address country' }),
    address_street: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: 'Debtor account address street' }),
    currency: z.string().max(3).exactOptional().openapi({ description: 'Debtor account currency' }),
    name: z.string().max(70).openapi({ description: 'Debtor account name' }),
    post_code: z
      .string()
      .max(30)
      .exactOptional()
      .openapi({ description: 'Debtor account post code' }),
    type: TypeEnumSchema.default('IBAN')
      .exactOptional()
      .openapi({ description: 'Debtor account type' }),
    type_number: z
      .string()
      .max(128)
      .exactOptional()
      .openapi({ description: 'Debtor account type identifier' }),
  })
  .openapi({ description: 'Debtor account write serializer.', required: ['name'] })
  .openapi('DebtorAccountWriteRequest')

const EndUserAgreementSchema = z
  .object({
    accepted: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date & time at which the end user accepted the agreement.',
        readOnly: true,
        title: 'Accepted Date',
      }),
    access_scope: z
      .array(
        z
          .array(z.any().default(['balances', 'details', 'transactions']))
          .openapi({ title: 'Level of information to access (by default all)' }),
      )
      .exactOptional()
      .openapi({
        description:
          "Array containing one or several values of ['balances', 'details', 'transactions']",
        title: 'Level of information to access (by default all)',
        default: ['balances', 'details', 'transactions'],
      }),
    access_valid_for_days: z
      .int()
      .min(1)
      .max(90)
      .default(90)
      .exactOptional()
      .openapi({
        description: 'Number of days from acceptance that the access can be used.',
        title: 'Access Valid For (Days)',
      }),
    created: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date & time at which the end user agreement was created.',
        readOnly: true,
        title: 'Created Date',
      }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of this End User Agreement, used to refer to this end user agreement in other API calls.',
        readOnly: true,
        title: 'End User Agreement ID',
      }),
    institution_id: z.string().openapi({ description: 'an Institution ID for this EUA' }),
    max_historical_days: z
      .int()
      .min(1)
      .max(730)
      .default(90)
      .exactOptional()
      .openapi({
        description: 'Maximum number of days of transaction data to retrieve.',
        title: 'Maximum Historical Days',
      }),
  })
  .openapi({ description: 'EndUserAgreement.', required: ['institution_id'] })
  .openapi('EndUserAgreement')

const EndUserAgreementRequestSchema = z
  .object({
    access_scope: z
      .array(
        z
          .array(z.any().default(['balances', 'details', 'transactions']))
          .openapi({ title: 'Level of information to access (by default all)' }),
      )
      .exactOptional()
      .openapi({
        description:
          "Array containing one or several values of ['balances', 'details', 'transactions']",
        title: 'Level of information to access (by default all)',
        default: ['balances', 'details', 'transactions'],
      }),
    access_valid_for_days: z
      .int()
      .min(1)
      .max(90)
      .default(90)
      .exactOptional()
      .openapi({
        description: 'Number of days from acceptance that the access can be used.',
        title: 'Access Valid For (Days)',
      }),
    institution_id: z.string().openapi({ description: 'an Institution ID for this EUA' }),
    max_historical_days: z
      .int()
      .min(1)
      .max(730)
      .default(90)
      .exactOptional()
      .openapi({
        description: 'Maximum number of days of transaction data to retrieve.',
        title: 'Maximum Historical Days',
      }),
  })
  .openapi({ description: 'EndUserAgreement.', required: ['institution_id'] })
  .openapi('EndUserAgreementRequest')

const EnduserAcceptanceDetailsRequestSchema = z
  .object({
    ip_address: z.string().openapi({ title: 'end user IP address' }),
    user_agent: z.string().openapi({ title: 'user agent string for the end user' }),
  })
  .openapi({ description: 'Represents end-user details.', required: ['ip_address', 'user_agent'] })
  .openapi('EnduserAcceptanceDetailsRequest')

const ExecutionRuleEnumSchema = z.enum(['following', 'preceding']).openapi('ExecutionRuleEnum')

const FrequencyEnumSchema = z
  .enum([
    'Daily',
    'Weekly',
    'EveryTwoWeeks',
    'Monthly',
    'EveryTwoMonths',
    'Quarterly',
    'SemiAnnual',
    'Annual',
    'MonthlyVariable',
  ])
  .openapi('FrequencyEnum')

const InstructedAmountSchema = z
  .object({
    amount: z
      .string()
      .regex(/^\d{0,10}(\.\d{0,2})?$/)
      .openapi({ description: 'Instructed amount' }),
    currency: z.string().max(3).openapi({ description: 'Instructed amount currency' }),
  })
  .openapi({ description: 'InstructedAmountSerializer.', required: ['amount', 'currency'] })
  .openapi('InstructedAmount')

const InstructedAmountRequestSchema = z
  .object({
    amount: z
      .string()
      .regex(/^\d{0,10}(\.\d{0,2})?$/)
      .openapi({ description: 'Instructed amount' }),
    currency: z.string().max(3).openapi({ description: 'Instructed amount currency' }),
  })
  .openapi({ description: 'InstructedAmountSerializer.', required: ['amount', 'currency'] })
  .openapi('InstructedAmountRequest')

const IntegrationSchema = z
  .object({
    bic: z.string().exactOptional(),
    countries: z.array(z.string()),
    id: z.string(),
    logo: z.string(),
    name: z.string(),
    transaction_total_days: z.string().default('90').exactOptional(),
  })
  .openapi({
    description: 'Represents an Integration.',
    required: ['countries', 'id', 'logo', 'name'],
  })
  .openapi('Integration')

const JWTObtainPairRequestSchema = z
  .object({
    secret_id: z.string().openapi({ description: 'Secret id from /user-secrets/' }),
    secret_key: z.string().openapi({ description: 'Secret key from /user-secrets/' }),
  })
  .openapi({ description: 'Obtain JWT pair.', required: ['secret_id', 'secret_key'] })
  .openapi('JWTObtainPairRequest')

const JWTRefreshRequestSchema = z
  .object({ refresh: z.string() })
  .openapi({ description: 'Refresh access token.', required: ['refresh'] })
  .openapi('JWTRefreshRequest')

const PaginatedCreditorAccountListSchema = z
  .object({
    count: z.int().exactOptional().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(CreditorAccountSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaginatedCreditorAccountList')

const PaginatedEndUserAgreementListSchema = z
  .object({
    count: z.int().exactOptional().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        example: 'https://ob.nordigen.com/api/v2/agreements/enduser/?limit=100&offset=0',
      }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({
        example: 'https://ob.nordigen.com/api/v2/agreements/enduser/?limit=100&offset=0',
      }),
    results: z.array(EndUserAgreementSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaginatedEndUserAgreementList')

const PaymentProductEnumSchema = z
  .enum(['T2P', 'SCT', 'ISCT', 'CBCT'])
  .openapi('PaymentProductEnum')

const PaymentStatusEnumSchema = z
  .enum([
    'INIT',
    'ERRE',
    'ERRS',
    'ACCC',
    'ACCP',
    'ACSC',
    'ACSP',
    'ACTC',
    'ACWC',
    'ACWP',
    'RCVD',
    'PDNG',
    'RJCT',
    'CANC',
    'ACFC',
    'PATC',
    'PART',
  ])
  .openapi('PaymentStatusEnum')

const PaymentTypeEnumSchema = z
  .enum(['single-payment', 'bulk-payment', 'periodic-payment'])
  .openapi('PaymentTypeEnum')

const PaymentReadSchema = z
  .object({
    creditor_account: z.uuid().openapi({ description: 'Registered creditor account' }),
    custom_payment_id: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Payment Custom Payment ID',
        title: 'Payment end to end identification.',
      }),
    debtor_account: DebtorAccountWriteSchema,
    description: z
      .string()
      .default('GOCARDLESS')
      .exactOptional()
      .openapi({ description: 'Payment description' }),
    instructed_amount: InstructedAmountSchema.openapi({ description: 'Instructed amount' }),
    payment_id: z.string().exactOptional().openapi({ description: 'Payment ID', readOnly: true }),
    payment_product: PaymentProductEnumSchema.default('ISCT')
      .exactOptional()
      .openapi({ description: 'Payment product' }),
    payment_status: PaymentStatusEnumSchema.exactOptional().openapi({
      description: 'Payment end to end identification',
      readOnly: true,
    }),
    payment_type: PaymentTypeEnumSchema.exactOptional().openapi({
      description: 'Payment Type',
      readOnly: true,
    }),
    redirect: z
      .url()
      .max(1024)
      .nullable()
      .openapi({ description: 'Redirect URL to your application after payment is done' }),
  })
  .openapi({
    description: 'PaymentReadSerializer.',
    required: ['creditor_account', 'debtor_account', 'instructed_amount', 'redirect'],
  })
  .openapi('PaymentRead')

const PaginatedPaymentReadListSchema = z
  .object({
    count: z.int().exactOptional().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=400&limit=100' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://api.example.org/accounts/?offset=200&limit=100' }),
    results: z.array(PaymentReadSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaginatedPaymentReadList')

const Status1c5EnumSchema = z
  .enum(['CR', 'ID', 'LN', 'RJ', 'ER', 'SU', 'EX', 'GC', 'UA', 'GA', 'SA'])
  .openapi('Status1c5Enum')

const RequisitionV2Schema = z
  .object({
    account_selection: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'option to enable account selection view for the end user' }),
    accounts: z
      .array(z.uuid().openapi({ title: 'accounts' }))
      .exactOptional()
      .openapi({
        description: 'array of account IDs retrieved within a scope of this requisition',
        readOnly: true,
      }),
    agreement: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'EUA associated with this requisition' }),
    created: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date & time at which the requisition was created.',
        readOnly: true,
        title: 'Created Date',
      }),
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    institution_id: z.string().openapi({ description: 'an Institution ID for this Requisition' }),
    link: z
      .url()
      .default(
        'https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}',
      )
      .exactOptional()
      .openapi({ description: 'link to initiate authorization with Institution', readOnly: true }),
    redirect: z
      .url()
      .max(1024)
      .nullable()
      .openapi({
        description: 'redirect URL to your application after end-user authorization with ASPSP',
      }),
    redirect_immediate: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'enable redirect back to the client after account list received' }),
    reference: z
      .string()
      .max(256)
      .exactOptional()
      .openapi({ description: 'additional ID to identify the end user' }),
    ssn: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({ description: 'optional SSN field to verify ownership of the account' }),
    status: Status1c5EnumSchema.exactOptional().openapi({
      description: 'status of this requisition',
      readOnly: true,
      title: 'Requisition status',
    }),
    user_language: z
      .string()
      .max(5)
      .exactOptional()
      .openapi({ description: 'A two-letter country code (ISO 639-1)' }),
  })
  .openapi({ description: 'RequisitionV2Serializer.', required: ['institution_id', 'redirect'] })
  .openapi('RequisitionV2')

const PaginatedRequisitionV2ListSchema = z
  .object({
    count: z.int().exactOptional().openapi({ example: 123 }),
    next: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'https://ob.nordigen.com/api/v2/requisitions/?limit=100&offset=0' }),
    previous: z
      .url()
      .nullable()
      .exactOptional()
      .openapi({ example: 'https://ob.nordigen.com/api/v2/requisitions/?limit=100&offset=0' }),
    results: z.array(RequisitionV2Schema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaginatedRequisitionV2List')

const PeriodicPaymentSchema = z
  .object({
    day_of_execution: z.string().exactOptional(),
    end_date: z.iso.date().exactOptional(),
    execution_rule: ExecutionRuleEnumSchema.default('following')
      .exactOptional()
      .openapi({ description: 'Behavior when periodic payment dates fall on holiday.' }),
    frequency: FrequencyEnumSchema.default('Monthly').exactOptional(),
    start_date: z.iso.date(),
  })
  .openapi({ description: 'Periodic Payment Serializer.', required: ['start_date'] })
  .openapi('PeriodicPayment')

const PaymentWriteSchema = z
  .object({
    creditor_account: z.uuid().openapi({ description: 'Registered creditor account' }),
    custom_payment_id: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Payment Custom Payment ID',
        title: 'Payment end to end identification.',
      }),
    description: z
      .string()
      .default('GOCARDLESS')
      .exactOptional()
      .openapi({ description: 'Payment description' }),
    instructed_amount: InstructedAmountSchema.openapi({ description: 'Instructed amount' }),
    link: z
      .url()
      .default(
        'https://ob.nordigen.com/pis/start/83ca8de5-dbef-45fc-a137-f185d0e7a0d8/{$INSTITUTION_ID}',
      )
      .exactOptional()
      .openapi({ description: 'Link to initiate authorization with Institution', readOnly: true }),
    payment_id: z.string().exactOptional().openapi({ description: 'Payment ID', readOnly: true }),
    payment_product: PaymentProductEnumSchema.default('ISCT')
      .exactOptional()
      .openapi({ description: 'Payment product' }),
    payment_status: PaymentStatusEnumSchema.exactOptional().openapi({
      description: 'Payment end to end identification',
      readOnly: true,
    }),
    payment_type: PaymentTypeEnumSchema.exactOptional().openapi({
      description: 'Payment Type',
      readOnly: true,
    }),
    periodic_payment: PeriodicPaymentSchema.exactOptional(),
    redirect: z
      .url()
      .max(1024)
      .nullable()
      .openapi({ description: 'Redirect URL to your application after payment is done' }),
    requested_execution_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Payment Execution date (for periodic payments)' }),
  })
  .openapi({
    description: 'PaymentWriteSerializer.',
    required: ['creditor_account', 'instructed_amount', 'redirect'],
  })
  .openapi('PaymentWrite')

const PeriodicPaymentRequestSchema = z
  .object({
    day_of_execution: z.string().exactOptional(),
    end_date: z.iso.date().exactOptional(),
    execution_rule: ExecutionRuleEnumSchema.default('following')
      .exactOptional()
      .openapi({ description: 'Behavior when periodic payment dates fall on holiday.' }),
    frequency: FrequencyEnumSchema.default('Monthly').exactOptional(),
    start_date: z.iso.date(),
  })
  .openapi({ description: 'Periodic Payment Serializer.', required: ['start_date'] })
  .openapi('PeriodicPaymentRequest')

const PaymentWriteRequestSchema = z
  .object({
    creditor_account: z.uuid().openapi({ description: 'Registered creditor account' }),
    custom_payment_id: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Payment Custom Payment ID',
        title: 'Payment end to end identification.',
      }),
    debtor_account: DebtorAccountWriteRequestSchema.exactOptional().openapi({
      description: 'Debtor account',
      writeOnly: true,
    }),
    description: z
      .string()
      .default('GOCARDLESS')
      .exactOptional()
      .openapi({ description: 'Payment description' }),
    institution_id: z
      .string()
      .default('SWEDBANK_SANDBOX_SANDLV22')
      .exactOptional()
      .openapi({ description: 'Institution ID for Payment', writeOnly: true }),
    instructed_amount: InstructedAmountRequestSchema.openapi({ description: 'Instructed amount' }),
    payment_product: PaymentProductEnumSchema.default('ISCT')
      .exactOptional()
      .openapi({ description: 'Payment product' }),
    periodic_payment: PeriodicPaymentRequestSchema.exactOptional(),
    redirect: z
      .url()
      .max(1024)
      .nullable()
      .openapi({ description: 'Redirect URL to your application after payment is done' }),
    requested_execution_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Payment Execution date (for periodic payments)' }),
  })
  .openapi({
    description: 'PaymentWriteSerializer.',
    required: ['creditor_account', 'instructed_amount', 'redirect'],
  })
  .openapi('PaymentWriteRequest')

const PremiumAccountQuerySchema = z
  .object({
    country: CountryEnumSchema.exactOptional(),
    date_from: z.iso.date().exactOptional(),
    date_to: z.iso.date().exactOptional(),
  })
  .openapi({ description: 'Filter country.', required: [] })
  .openapi('PremiumAccountQuery')

const RequisitionLinkParamsRequestSchema = z
  .object({
    aspsp_id: z
      .string()
      .openapi({
        description:
          "ASPSP ID. Should match one used while creating EUA, if it's linked to this requisition",
      }),
  })
  .openapi({ description: 'RequisitionLinkParamsSerializer.', required: ['aspsp_id'] })
  .openapi('RequisitionLinkParamsRequest')

const RequisitionLinksSchema = z
  .object({ initiate: z.url().exactOptional().openapi({ readOnly: true }) })
  .openapi({ description: 'RequisitionLinksSerializer.', required: [] })
  .openapi('RequisitionLinks')

const RequisitionV2RequestSchema = z
  .object({
    account_selection: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'option to enable account selection view for the end user' }),
    agreement: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'EUA associated with this requisition' }),
    institution_id: z.string().openapi({ description: 'an Institution ID for this Requisition' }),
    redirect: z
      .url()
      .max(1024)
      .nullable()
      .openapi({
        description: 'redirect URL to your application after end-user authorization with ASPSP',
      }),
    redirect_immediate: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'enable redirect back to the client after account list received' }),
    reference: z
      .string()
      .max(256)
      .exactOptional()
      .openapi({ description: 'additional ID to identify the end user' }),
    ssn: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({ description: 'optional SSN field to verify ownership of the account' }),
    user_language: z
      .string()
      .max(5)
      .exactOptional()
      .openapi({ description: 'A two-letter country code (ISO 639-1)' }),
  })
  .openapi({ description: 'RequisitionV2Serializer.', required: ['institution_id', 'redirect'] })
  .openapi('RequisitionV2Request')

const SpectacularJWTObtainSchema = z
  .object({
    access: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your access token', readOnly: true }),
    access_expires: z
      .int()
      .default(86400)
      .exactOptional()
      .openapi({ description: 'Access token expires in seconds', readOnly: true }),
    refresh: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your refresh token', readOnly: true }),
    refresh_expires: z
      .int()
      .default(2592000)
      .exactOptional()
      .openapi({ description: 'Refresh token expires in seconds', readOnly: true }),
  })
  .openapi({ description: 'Obtain new JWT pair.', required: [] })
  .openapi('SpectacularJWTObtain')

const SpectacularJWTRefreshSchema = z
  .object({
    access: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your access token', readOnly: true }),
    access_expires: z
      .int()
      .default(86400)
      .exactOptional()
      .openapi({ description: 'Access token expires in seconds', readOnly: true }),
  })
  .openapi({ description: 'Refresh Access token.', required: [] })
  .openapi('SpectacularJWTRefresh')

const SpectacularRequisitionV2Schema = z
  .object({
    account_selection: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'option to enable account selection view for the end user' }),
    accounts: z
      .array(z.any())
      .default([])
      .exactOptional()
      .openapi({
        description: 'array of account IDs retrieved within a scope of this requisition',
        readOnly: true,
      }),
    agreement: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'EUA associated with this requisition' }),
    created: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date & time at which the requisition was created.',
        readOnly: true,
        title: 'Created Date',
      }),
    id: z.uuid().exactOptional().openapi({ readOnly: true }),
    institution_id: z.string().openapi({ description: 'an Institution ID for this Requisition' }),
    link: z
      .url()
      .default(
        'https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}',
      )
      .exactOptional()
      .openapi({ description: 'link to initiate authorization with Institution', readOnly: true }),
    redirect: z
      .url()
      .max(1024)
      .nullable()
      .openapi({
        description: 'redirect URL to your application after end-user authorization with ASPSP',
      }),
    redirect_immediate: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'enable redirect back to the client after account list received' }),
    reference: z
      .string()
      .max(256)
      .exactOptional()
      .openapi({ description: 'additional ID to identify the end user' }),
    ssn: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({ description: 'optional SSN field to verify ownership of the account' }),
    status: Status1c5EnumSchema.exactOptional().openapi({
      description: 'status of this requisition',
      readOnly: true,
      title: 'Requisition status',
    }),
    user_language: z
      .string()
      .max(5)
      .exactOptional()
      .openapi({ description: 'A two-letter country code (ISO 639-1)' }),
  })
  .openapi({ description: 'Create requisition.', required: ['institution_id', 'redirect'] })
  .openapi('SpectacularRequisitionV2')

const JwtAuthSecurityScheme = { bearerFormat: 'Bearer', scheme: 'bearer', type: 'http' }

export const getApiV2AccountsPremiumIdTransactionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/premium/{id}/transactions/',
  tags: ['premium'],
  description: 'Access account premium transactions.',
  operationId: 'retrieve account transactions v2',
  request: {
    query: z.object({
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 3166 two-character country code',
            examples: {
              Austria: {
                summary: 'Austria',
                description: 'ISO 3166 two-character code for Austria',
                value: 'AT',
              },
              Belgium: {
                summary: 'Belgium',
                description: 'ISO 3166 two-character code for Belgium',
                value: 'BE',
              },
              Bulgaria: {
                summary: 'Bulgaria',
                description: 'ISO 3166 two-character code for Bulgaria',
                value: 'BG',
              },
              Croatia: {
                summary: 'Croatia',
                description: 'ISO 3166 two-character code for Croatia',
                value: 'HR',
              },
              Cyprus: {
                summary: 'Cyprus',
                description: 'ISO 3166 two-character code for Cyprus',
                value: 'CY',
              },
              Czechia: {
                summary: 'Czechia',
                description: 'ISO 3166 two-character code for Czechia',
                value: 'CZ',
              },
              Denmark: {
                summary: 'Denmark',
                description: 'ISO 3166 two-character code for Denmark',
                value: 'DK',
              },
              Estonia: {
                summary: 'Estonia',
                description: 'ISO 3166 two-character code for Estonia',
                value: 'EE',
              },
              Finland: {
                summary: 'Finland',
                description: 'ISO 3166 two-character code for Finland',
                value: 'FI',
              },
              France: {
                summary: 'France',
                description: 'ISO 3166 two-character code for France',
                value: 'FR',
              },
              Germany: {
                summary: 'Germany',
                description: 'ISO 3166 two-character code for Germany',
                value: 'DE',
              },
              Greece: {
                summary: 'Greece',
                description: 'ISO 3166 two-character code for Greece',
                value: 'GR',
              },
              Hungary: {
                summary: 'Hungary',
                description: 'ISO 3166 two-character code for Hungary',
                value: 'HU',
              },
              Iceland: {
                summary: 'Iceland',
                description: 'ISO 3166 two-character code for Iceland',
                value: 'IS',
              },
              Ireland: {
                summary: 'Ireland',
                description: 'ISO 3166 two-character code for Ireland',
                value: 'IE',
              },
              Italy: {
                summary: 'Italy',
                description: 'ISO 3166 two-character code for Italy',
                value: 'IT',
              },
              Latvia: {
                summary: 'Latvia',
                description: 'ISO 3166 two-character code for Latvia',
                value: 'LV',
              },
              Liechtenstein: {
                summary: 'Liechtenstein',
                description: 'ISO 3166 two-character code for Liechtenstein',
                value: 'LI',
              },
              Lithuania: {
                summary: 'Lithuania',
                description: 'ISO 3166 two-character code for Lithuania',
                value: 'LT',
              },
              Luxembourg: {
                summary: 'Luxembourg',
                description: 'ISO 3166 two-character code for Luxembourg',
                value: 'LU',
              },
              Malta: {
                summary: 'Malta',
                description: 'ISO 3166 two-character code for Malta',
                value: 'MT',
              },
              Netherlands: {
                summary: 'Netherlands',
                description: 'ISO 3166 two-character code for Netherlands',
                value: 'NL',
              },
              Norway: {
                summary: 'Norway',
                description: 'ISO 3166 two-character code for Norway',
                value: 'NO',
              },
              Poland: {
                summary: 'Poland',
                description: 'ISO 3166 two-character code for Poland',
                value: 'PL',
              },
              Portugal: {
                summary: 'Portugal',
                description: 'ISO 3166 two-character code for Portugal',
                value: 'PT',
              },
              Romania: {
                summary: 'Romania',
                description: 'ISO 3166 two-character code for Romania',
                value: 'RO',
              },
              Slovakia: {
                summary: 'Slovakia',
                description: 'ISO 3166 two-character code for Slovakia',
                value: 'SK',
              },
              Slovenia: {
                summary: 'Slovenia',
                description: 'ISO 3166 two-character code for Slovenia',
                value: 'SI',
              },
              Spain: {
                summary: 'Spain',
                description: 'ISO 3166 two-character code for Spain',
                value: 'ES',
              },
              Sweden: {
                summary: 'Sweden',
                description: 'ISO 3166 two-character code for Sweden',
                value: 'SE',
              },
              UnitedKingdom: {
                summary: 'United Kingdom',
                description: 'ISO 3166 two-character code for United Kingdom',
                value: 'GB',
              },
            },
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      date_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            examples: {
              '2022-12-03': {
                summary: '2022-12-03',
                description: 'ISO 8601 format date',
                value: '2022-12-03',
              },
            },
            in: 'query',
            name: 'date_from',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      date_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            examples: {
              '2023-03-03': {
                summary: '2023-03-03',
                description: 'ISO 8601 format date',
                value: '2023-03-03',
              },
            },
            in: 'query',
            name: 'date_to',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'A UUID string identifying this account.',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'A UUID string identifying this account.',
        }),
    }),
  },
  responses: {
    200: { description: 'No response body' },
    400: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()),
          examples: {
            DateRangeError: {
              summary: 'Date range error',
              description: 'Incorrect date range in query parameters',
              value: {
                detail:
                  "Starting date '2023-03-13' is greater than end date '2023-03-03'. When specifying date range, starting date must precede the end date",
                status_code: 400,
                summary: 'Incorrect date range',
              },
            },
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid Account ID',
              value: {
                detail: '$ACCOUNT_ID is not a valid Account UUID. ',
                status_code: 400,
                summary: 'Invalid Account ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()),
          examples: {
            AccessExpiredError: {
              summary: 'Access Expired Error',
              description: "Couldn't update account transactions",
              value: {
                detail:
                  'Access has expired or it has been revoked. To restore access reconnect the account.',
                status_code: 401,
                summary: "Couldn't update account transactions",
                type: 'AccessExpiredError',
              },
            },
            AccountInactiveError: {
              summary: 'Account Inactive Error',
              description: "Couldn't update account transactions",
              value: {
                detail: 'Account has been deactivated or it no longer exists.',
                status_code: 401,
                summary: "Couldn't update account transactions",
                type: 'AccountInactiveError',
              },
            },
            FailedAuthentication: {
              summary: 'Failed Authentication',
              description: "Couldn't update account transactions",
              value: {
                detail: 'SSN Verification has failed',
                status_code: 401,
                summary: "Couldn't update account transactions",
                type: 'FailedAuthentication',
              },
            },
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()),
          examples: {
            AccountAccessForbidden: {
              summary: 'Account Access Forbidden',
              description: "Couldn't update account transactions",
              value: {
                detail:
                  'Access to account is forbidden. The user might not have the necessary permissions.',
                status_code: 403,
                summary: "Couldn't update account transactions",
                type: 'AccountAccessForbidden',
              },
            },
            AccountEUAScopeError: {
              summary: 'Account EUA scope error',
              description: "EUA doesn't allow access to account transactions.",
              value: {
                detail:
                  "EUA doesn't allow access to account transactions. Check EUA access scope. Or create new EUA with correct access scope",
                status_code: 403,
                summary: 'End User Agreement (EUA) access scope error',
              },
            },
            AccountValidEUAError: {
              summary: 'Account valid EUA error',
              description: 'Account has no valid End User Agreement',
              value: {
                detail:
                  'Account exists but there is no valid End User Agreement permitting you to access it',
                status_code: 403,
                summary: 'No valid End User Agreement',
              },
            },
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()),
          examples: {
            AccountNotFoundError: {
              summary: 'Account not found error',
              description: 'Account not found',
              value: {
                detail: 'Please check whether you specified a valid Account ID',
                status_code: 404,
                summary: 'Account ID $ACC_ID not found',
              },
            },
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
    409: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()),
          examples: {
            AccountStateError: {
              summary: 'Account state error',
              description: 'Account state does not support this operation',
              value: {
                aspsp_identifier: 'string',
                created: '2023-03-03 17:05:05.270281+00:00',
                iban: 'string',
                id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                last_accessed: '2023-03-03 17:05:05.270299+00:00',
                status: 'ERROR',
              },
            },
            AccountSuspendedError: {
              summary: 'Account suspended error',
              description: 'Account or its requisition suspended',
              value: {
                detail:
                  'This account or its requisition was suspended due to numerous errors that occurred while accessing it.',
                status_code: 409,
                summary: 'Account suspended',
              },
            },
          },
        },
      },
    },
    429: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()),
          examples: {
            RateLimitError: {
              summary: 'Rate Limit Error',
              description: "Couldn't update account transactions",
              value: {
                detail: 'Daily request limit set by the Institution has been exceeded.',
                status_code: 429,
                summary: "Couldn't update account transactions",
                type: 'RateLimitError',
              },
            },
          },
        },
      },
    },
    500: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()),
          examples: {
            UnknownRequestError: {
              summary: 'Unknown Request Error',
              description: "Couldn't update account transactions",
              value: {
                detail: 'Request to Institution returned an error',
                status_code: 500,
                summary: "Couldn't update account transactions",
                type: 'UnknownRequestError',
              },
            },
          },
        },
      },
    },
    503: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()),
          examples: {
            ConnectionError: {
              summary: 'Connection Error',
              description: "Couldn't update account transactions",
              value: {
                detail: "Couldn't connect to Institution",
                status_code: 503,
                summary: "Couldn't update account transactions",
                type: 'ConnectionError',
              },
            },
            ServiceError: {
              summary: 'Service Error',
              description: "Couldn't update account transactions",
              value: {
                detail: 'Institution service unavailable',
                status_code: 503,
                summary: "Couldn't update account transactions",
                type: 'ServiceError',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2AccountsIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{id}/',
  tags: ['accounts'],
  description:
    'Access account metadata.\n\nInformation about the account record, such as the processing status and IBAN.\n\nAccount status is recalculated based on the error count in the latest req.',
  operationId: 'retrieve account metadata',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'A UUID string identifying this account.',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'A UUID string identifying this account.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'sample account metadata',
      content: { 'application/json': { schema: AccountV2Schema } },
    },
    401: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: '',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.any()),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Account not found',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountNotFoundError: {
              summary: 'Account not found error',
              description: 'Account not found',
              value: {
                detail: 'Please check whether you specified a valid Account ID',
                status_code: 404,
                summary: 'Account ID $ACC_ID not found',
              },
            },
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
  },
})

export const getApiV2AccountsIdBalancesIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{id}/balances/',
  tags: ['accounts'],
  description: 'Access account balances.\n\nBalances will be returned in Berlin Group PSD2 format.',
  operationId: 'accounts_balances_retrieve',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'A UUID string identifying this account.',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'A UUID string identifying this account.',
        }),
    }),
  },
  responses: {
    400: {
      description: 'Date range error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            DateRangeError: {
              summary: 'Date range error',
              description: 'Incorrect date range in query parameters',
              value: {
                detail:
                  "Starting date '2023-03-13' is greater than end date '2023-03-03'. When specifying date range, starting date must precede the end date",
                status_code: 400,
                summary: 'Incorrect date range',
              },
            },
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid Account ID',
              value: {
                detail: '$ACCOUNT_ID is not a valid Account UUID. ',
                status_code: 400,
                summary: 'Invalid Account ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Failed Authentication',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccessExpiredError: {
              summary: 'Access Expired Error',
              description: "Couldn't update account balances",
              value: {
                detail:
                  'Access has expired or it has been revoked. To restore access reconnect the account.',
                status_code: 401,
                summary: "Couldn't update account balances",
                type: 'AccessExpiredError',
              },
            },
            AccountInactiveError: {
              summary: 'Account Inactive Error',
              description: "Couldn't update account balances",
              value: {
                detail: 'Account has been deactivated or it no longer exists.',
                status_code: 401,
                summary: "Couldn't update account balances",
                type: 'AccountInactiveError',
              },
            },
            FailedAuthentication: {
              summary: 'Failed Authentication',
              description: "Couldn't update account balances",
              value: {
                detail: 'SSN Verification has failed',
                status_code: 401,
                summary: "Couldn't update account balances",
                type: 'FailedAuthentication',
              },
            },
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Account Access Forbidden',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountAccessForbidden: {
              summary: 'Account Access Forbidden',
              description: "Couldn't update account balances",
              value: {
                detail:
                  'Access to account is forbidden. The user might not have the necessary permissions.',
                status_code: 403,
                summary: "Couldn't update account balances",
                type: 'AccountAccessForbidden',
              },
            },
            AccountEUAScopeError: {
              summary: 'Account EUA scope error',
              description: "EUA doesn't allow access to account balances.",
              value: {
                detail:
                  "EUA doesn't allow access to account balances. Check EUA access scope. Or create new EUA with correct access scope",
                status_code: 403,
                summary: 'End User Agreement (EUA) access scope error',
              },
            },
            AccountValidEUAError: {
              summary: 'Account valid EUA error',
              description: 'Account has no valid End User Agreement',
              value: {
                detail:
                  'Account exists but there is no valid End User Agreement permitting you to access it',
                status_code: 403,
                summary: 'No valid End User Agreement',
              },
            },
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Account not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountNotFoundError: {
              summary: 'Account not found error',
              description: 'Account not found',
              value: {
                detail: 'Please check whether you specified a valid Account ID',
                status_code: 404,
                summary: 'Account ID $ACC_ID not found',
              },
            },
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
    409: {
      description: 'Account state error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountStateError: {
              summary: 'Account state error',
              description: 'Account state does not support this operation',
              value: {
                aspsp_identifier: 'string',
                created: '2023-03-03 17:05:05.270281+00:00',
                iban: 'string',
                id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                last_accessed: '2023-03-03 17:05:05.270299+00:00',
                status: 'ERROR',
              },
            },
            AccountSuspendedError: {
              summary: 'Account suspended error',
              description: 'Account or its requisition suspended',
              value: {
                detail:
                  'This account or its requisition was suspended due to numerous errors that occurred while accessing it.',
                status_code: 409,
                summary: 'Account suspended',
              },
            },
          },
        },
      },
    },
    429: {
      description: 'Rate Limit Error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            RateLimitError: {
              summary: 'Rate Limit Error',
              description: "Couldn't update account balances",
              value: {
                detail: 'Daily request limit set by the Institution has been exceeded.',
                status_code: 429,
                summary: "Couldn't update account balances",
                type: 'RateLimitError',
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Unknown Request Error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            UnknownRequestError: {
              summary: 'Unknown Request Error',
              description: "Couldn't update account balances",
              value: {
                detail: 'Request to Institution returned an error',
                status_code: 500,
                summary: "Couldn't update account balances",
                type: 'UnknownRequestError',
              },
            },
          },
        },
      },
    },
    503: {
      description: 'Connection Error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            ConnectionError: {
              summary: 'Connection Error',
              description: "Couldn't update account balances",
              value: {
                detail: "Couldn't connect to Institution",
                status_code: 503,
                summary: "Couldn't update account balances",
                type: 'ConnectionError',
              },
            },
            ServiceError: {
              summary: 'Service Error',
              description: "Couldn't update account balances",
              value: {
                detail: 'Institution service unavailable',
                status_code: 503,
                summary: "Couldn't update account balances",
                type: 'ServiceError',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2AccountsIdDetailsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{id}/details/',
  tags: ['accounts'],
  description:
    'Access account details.\n\nAccount details will be returned in Berlin Group PSD2 format.',
  operationId: 'accounts_details_retrieve',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'A UUID string identifying this account.',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'A UUID string identifying this account.',
        }),
    }),
  },
  responses: {
    400: {
      description: 'Date range error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            DateRangeError: {
              summary: 'Date range error',
              description: 'Incorrect date range in query parameters',
              value: {
                detail:
                  "Starting date '2023-03-13' is greater than end date '2023-03-03'. When specifying date range, starting date must precede the end date",
                status_code: 400,
                summary: 'Incorrect date range',
              },
            },
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid Account ID',
              value: {
                detail: '$ACCOUNT_ID is not a valid Account UUID. ',
                status_code: 400,
                summary: 'Invalid Account ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Failed Authentication',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccessExpiredError: {
              summary: 'Access Expired Error',
              description: "Couldn't update account details",
              value: {
                detail:
                  'Access has expired or it has been revoked. To restore access reconnect the account.',
                status_code: 401,
                summary: "Couldn't update account details",
                type: 'AccessExpiredError',
              },
            },
            AccountInactiveError: {
              summary: 'Account Inactive Error',
              description: "Couldn't update account details",
              value: {
                detail: 'Account has been deactivated or it no longer exists.',
                status_code: 401,
                summary: "Couldn't update account details",
                type: 'AccountInactiveError',
              },
            },
            FailedAuthentication: {
              summary: 'Failed Authentication',
              description: "Couldn't update account details",
              value: {
                detail: 'SSN Verification has failed',
                status_code: 401,
                summary: "Couldn't update account details",
                type: 'FailedAuthentication',
              },
            },
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Account Access Forbidden',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountAccessForbidden: {
              summary: 'Account Access Forbidden',
              description: "Couldn't update account details",
              value: {
                detail:
                  'Access to account is forbidden. The user might not have the necessary permissions.',
                status_code: 403,
                summary: "Couldn't update account details",
                type: 'AccountAccessForbidden',
              },
            },
            AccountEUAScopeError: {
              summary: 'Account EUA scope error',
              description: "EUA doesn't allow access to account details.",
              value: {
                detail:
                  "EUA doesn't allow access to account details. Check EUA access scope. Or create new EUA with correct access scope",
                status_code: 403,
                summary: 'End User Agreement (EUA) access scope error',
              },
            },
            AccountValidEUAError: {
              summary: 'Account valid EUA error',
              description: 'Account has no valid End User Agreement',
              value: {
                detail:
                  'Account exists but there is no valid End User Agreement permitting you to access it',
                status_code: 403,
                summary: 'No valid End User Agreement',
              },
            },
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Account not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountNotFoundError: {
              summary: 'Account not found error',
              description: 'Account not found',
              value: {
                detail: 'Please check whether you specified a valid Account ID',
                status_code: 404,
                summary: 'Account ID $ACC_ID not found',
              },
            },
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
    409: {
      description: 'Account state error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountStateError: {
              summary: 'Account state error',
              description: 'Account state does not support this operation',
              value: {
                aspsp_identifier: 'string',
                created: '2023-03-03 17:05:05.270281+00:00',
                iban: 'string',
                id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                last_accessed: '2023-03-03 17:05:05.270299+00:00',
                status: 'ERROR',
              },
            },
            AccountSuspendedError: {
              summary: 'Account suspended error',
              description: 'Account or its requisition suspended',
              value: {
                detail:
                  'This account or its requisition was suspended due to numerous errors that occurred while accessing it.',
                status_code: 409,
                summary: 'Account suspended',
              },
            },
          },
        },
      },
    },
    429: {
      description: 'Rate Limit Error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            RateLimitError: {
              summary: 'Rate Limit Error',
              description: "Couldn't update account details",
              value: {
                detail: 'Daily request limit set by the Institution has been exceeded.',
                status_code: 429,
                summary: "Couldn't update account details",
                type: 'RateLimitError',
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Unknown Request Error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            UnknownRequestError: {
              summary: 'Unknown Request Error',
              description: "Couldn't update account details",
              value: {
                detail: 'Request to Institution returned an error',
                status_code: 500,
                summary: "Couldn't update account details",
                type: 'UnknownRequestError',
              },
            },
          },
        },
      },
    },
    503: {
      description: 'Connection Error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            ConnectionError: {
              summary: 'Connection Error',
              description: "Couldn't update account details",
              value: {
                detail: "Couldn't connect to Institution",
                status_code: 503,
                summary: "Couldn't update account details",
                type: 'ConnectionError',
              },
            },
            ServiceError: {
              summary: 'Service Error',
              description: "Couldn't update account details",
              value: {
                detail: 'Institution service unavailable',
                status_code: 503,
                summary: "Couldn't update account details",
                type: 'ServiceError',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2AccountsIdTransactionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/accounts/{id}/transactions/',
  tags: ['accounts'],
  description:
    'Access account transactions.\n\nTransactions will be returned in Berlin Group PSD2 format.',
  operationId: 'accounts_transactions_retrieve',
  request: {
    query: z.object({
      date_from: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            examples: {
              '2022-12-03': {
                summary: '2022-12-03',
                description: 'ISO 8601 format date',
                value: '2022-12-03',
              },
            },
            in: 'query',
            name: 'date_from',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
      date_to: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            examples: {
              '2023-03-03': {
                summary: '2023-03-03',
                description: 'ISO 8601 format date',
                value: '2023-03-03',
              },
            },
            in: 'query',
            name: 'date_to',
            schema: { format: 'date', type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'A UUID string identifying this account.',
              format: 'uuid',
              type: 'string',
            },
          },
          description: 'A UUID string identifying this account.',
        }),
    }),
  },
  responses: {
    400: {
      description: 'Date range error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            DateRangeError: {
              summary: 'Date range error',
              description: 'Incorrect date range in query parameters',
              value: {
                detail:
                  "Starting date '2023-03-13' is greater than end date '2023-03-03'. When specifying date range, starting date must precede the end date",
                status_code: 400,
                summary: 'Incorrect date range',
              },
            },
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid Account ID',
              value: {
                detail: '$ACCOUNT_ID is not a valid Account UUID. ',
                status_code: 400,
                summary: 'Invalid Account ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Failed Authentication',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccessExpiredError: {
              summary: 'Access Expired Error',
              description: "Couldn't update account transactions",
              value: {
                detail:
                  'Access has expired or it has been revoked. To restore access reconnect the account.',
                status_code: 401,
                summary: "Couldn't update account transactions",
                type: 'AccessExpiredError',
              },
            },
            AccountInactiveError: {
              summary: 'Account Inactive Error',
              description: "Couldn't update account transactions",
              value: {
                detail: 'Account has been deactivated or it no longer exists.',
                status_code: 401,
                summary: "Couldn't update account transactions",
                type: 'AccountInactiveError',
              },
            },
            FailedAuthentication: {
              summary: 'Failed Authentication',
              description: "Couldn't update account transactions",
              value: {
                detail: 'SSN Verification has failed',
                status_code: 401,
                summary: "Couldn't update account transactions",
                type: 'FailedAuthentication',
              },
            },
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Account Access Forbidden',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountAccessForbidden: {
              summary: 'Account Access Forbidden',
              description: "Couldn't update account transactions",
              value: {
                detail:
                  'Access to account is forbidden. The user might not have the necessary permissions.',
                status_code: 403,
                summary: "Couldn't update account transactions",
                type: 'AccountAccessForbidden',
              },
            },
            AccountEUAScopeError: {
              summary: 'Account EUA scope error',
              description: "EUA doesn't allow access to account transactions.",
              value: {
                detail:
                  "EUA doesn't allow access to account transactions. Check EUA access scope. Or create new EUA with correct access scope",
                status_code: 403,
                summary: 'End User Agreement (EUA) access scope error',
              },
            },
            AccountValidEUAError: {
              summary: 'Account valid EUA error',
              description: 'Account has no valid End User Agreement',
              value: {
                detail:
                  'Account exists but there is no valid End User Agreement permitting you to access it',
                status_code: 403,
                summary: 'No valid End User Agreement',
              },
            },
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Account not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountNotFoundError: {
              summary: 'Account not found error',
              description: 'Account not found',
              value: {
                detail: 'Please check whether you specified a valid Account ID',
                status_code: 404,
                summary: 'Account ID $ACC_ID not found',
              },
            },
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
    409: {
      description: 'Account state error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountStateError: {
              summary: 'Account state error',
              description: 'Account state does not support this operation',
              value: {
                aspsp_identifier: 'string',
                created: '2023-03-03 17:05:05.270281+00:00',
                iban: 'string',
                id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
                last_accessed: '2023-03-03 17:05:05.270299+00:00',
                status: 'ERROR',
              },
            },
            AccountSuspendedError: {
              summary: 'Account suspended error',
              description: 'Account or its requisition suspended',
              value: {
                detail:
                  'This account or its requisition was suspended due to numerous errors that occurred while accessing it.',
                status_code: 409,
                summary: 'Account suspended',
              },
            },
          },
        },
      },
    },
    429: {
      description: 'Rate Limit Error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            RateLimitError: {
              summary: 'Rate Limit Error',
              description: "Couldn't update account transactions",
              value: {
                detail: 'Daily request limit set by the Institution has been exceeded.',
                status_code: 429,
                summary: "Couldn't update account transactions",
                type: 'RateLimitError',
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Unknown Request Error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            UnknownRequestError: {
              summary: 'Unknown Request Error',
              description: "Couldn't update account transactions",
              value: {
                detail: 'Request to Institution returned an error',
                status_code: 500,
                summary: "Couldn't update account transactions",
                type: 'UnknownRequestError',
              },
            },
          },
        },
      },
    },
    503: {
      description: 'Connection Error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            ConnectionError: {
              summary: 'Connection Error',
              description: "Couldn't update account transactions",
              value: {
                detail: "Couldn't connect to Institution",
                status_code: 503,
                summary: "Couldn't update account transactions",
                type: 'ConnectionError',
              },
            },
            ServiceError: {
              summary: 'Service Error',
              description: "Couldn't update account transactions",
              value: {
                detail: 'Institution service unavailable',
                status_code: 503,
                summary: "Couldn't update account transactions",
                type: 'ServiceError',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2AgreementsEnduserIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/agreements/enduser/',
  tags: ['agreements'],
  description: 'Retrieve all end user agreements belonging to the company',
  operationId: 'retrieve all EUAs for an end user v2',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieve all end user agreements',
      content: { 'application/json': { schema: PaginatedEndUserAgreementListSchema } },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
  },
})

export const postApiV2AgreementsEnduserIndexRoute = createRoute({
  method: 'post',
  path: '/api/v2/agreements/enduser/',
  tags: ['agreements'],
  description: 'Create an end user agreement',
  operationId: 'create EUA v2',
  request: {
    body: {
      content: {
        'application/json': { schema: EndUserAgreementRequestSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              access_scope: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(z.any().default(['balances', 'details', 'transactions'])),
                      )
                      .openapi({ title: 'Level of information to access (by default all)' }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Array containing one or several values of ['balances', 'details', 'transactions']",
                  title: 'Level of information to access (by default all)',
                  default: ['balances', 'details', 'transactions'],
                }),
              access_valid_for_days: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(1).max(90),
                )
                .default(90)
                .exactOptional()
                .openapi({
                  description: 'Number of days from acceptance that the access can be used.',
                  title: 'Access Valid For (Days)',
                }),
              institution_id: z.string().openapi({ description: 'an Institution ID for this EUA' }),
              max_historical_days: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(1).max(730),
                )
                .default(90)
                .exactOptional()
                .openapi({
                  description: 'Maximum number of days of transaction data to retrieve.',
                  title: 'Maximum Historical Days',
                }),
            })
            .openapi({ description: 'EndUserAgreement.', required: ['institution_id'] }),
        },
        'multipart/form-data': {
          schema: z
            .object({
              access_scope: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .preprocess(
                        (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                        z.array(z.any().default(['balances', 'details', 'transactions'])),
                      )
                      .openapi({ title: 'Level of information to access (by default all)' }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Array containing one or several values of ['balances', 'details', 'transactions']",
                  title: 'Level of information to access (by default all)',
                  default: ['balances', 'details', 'transactions'],
                }),
              access_valid_for_days: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(1).max(90),
                )
                .default(90)
                .exactOptional()
                .openapi({
                  description: 'Number of days from acceptance that the access can be used.',
                  title: 'Access Valid For (Days)',
                }),
              institution_id: z.string().openapi({ description: 'an Institution ID for this EUA' }),
              max_historical_days: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int().min(1).max(730),
                )
                .default(90)
                .exactOptional()
                .openapi({
                  description: 'Maximum number of days of transaction data to retrieve.',
                  title: 'Maximum Historical Days',
                }),
            })
            .openapi({ description: 'EndUserAgreement.', required: ['institution_id'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Create enduser agreement',
      content: { 'application/json': { schema: EndUserAgreementSchema } },
    },
    400: {
      description: 'Agreement field errors',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccessScopeFieldErrors: {
              summary: 'Access scope field errors',
              description: "Errors related to 'access_scope' field.",
              value: {
                access_scope: [
                  {
                    detail: "Choose one or several from ['balances', 'details', 'transactions']",
                    summary: "Unknown value '$SCOPE' in access_scope",
                  },
                  {
                    detail:
                      "For this institution the following scopes are required together: ['balances', 'details']",
                    summary: 'Institution access scope dependencies error',
                  },
                  {
                    detail:
                      "The following scopes are mandatory for this institution: ['transactions']",
                    summary: 'Institution access scope dependencies error',
                  },
                ],
                status_code: 400,
              },
            },
            AccessValidForDaysFieldErrors: {
              summary: 'Access valid for days field errors',
              description: "Errors related to 'access_valid_for_days' field.",
              value: {
                access_valid_for_days: [
                  {
                    detail: 'access_valid_for_days must be > 0 and <= 90',
                    summary: 'Incorrect access_valid_for_days',
                  },
                ],
                status_code: 400,
              },
            },
            AgreementFieldErrors: {
              summary: 'Agreement field errors',
              description: "Errors related to 'agreement' field.",
              value: {
                agreement: {
                  detail:
                    "Provided Institution ID: '$INSTITUTION_ID' for requisition does not match EUA institution ID '$EUA_INSTITUTION_ID'. Please provide correct institution ID: '$EUA_INSTITUTION_ID'",
                  summary: 'Incorrect Institution ID $INSTITUTION_ID',
                },
                status_code: 400,
              },
            },
            InstitutionFieldErrors: {
              summary: 'Institution field errors',
              description: "Errors related to 'institution' field.",
              value: {
                institution_id: {
                  detail: 'Get Institution IDs from /institutions/?country={$COUNTRY_CODE}',
                  summary: 'Unknown Institution ID $INSTITUTION_ID',
                },
                status_code: 400,
              },
            },
            MaxHistoricalDaysFieldErrors: {
              summary: 'Max historical days field errors',
              description: "Errors related to 'max_historical_days' field.",
              value: {
                max_historical_days: [
                  {
                    detail:
                      'max_historical_days must be > 0 and <= N26_NTSBDEB1 transaction_total_days (730)',
                    summary: 'Incorrect max_historical_days',
                  },
                ],
                status_code: 400,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2AgreementsEnduserIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/agreements/enduser/{id}/',
  tags: ['agreements'],
  description: 'Retrieve end user agreement by ID',
  operationId: 'retrieve EUA by id v2',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'A UUID string identifying this end user agreement.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieve end user agreement by ID',
      content: { 'application/json': { schema: EndUserAgreementSchema } },
    },
    400: {
      description: 'Invalid ID',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid ID',
              value: {
                detail: '272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.',
                status_code: 400,
                summary: 'Invalid ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
  },
})

export const deleteApiV2AgreementsEnduserIdIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v2/agreements/enduser/{id}/',
  tags: ['agreements'],
  description: 'Delete an end user agreement',
  operationId: 'delete EUA by id v2',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'A UUID string identifying this end user agreement.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Invalid ID',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            CannotDeleteEUA: {
              summary: 'Cannot delete EUA',
              description: 'Cannot delete End User Agreement',
              value: {
                detail:
                  'Cannot delete accepted End User Agreement: $EUA_ID. Only non accepted agreements can be deleted',
                status_code: 400,
                summary: 'Cannot delete End User Agreement',
              },
            },
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid ID',
              value: {
                detail: '272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.',
                status_code: 400,
                summary: 'Invalid ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
  },
})

export const putApiV2AgreementsEnduserIdAcceptIndexRoute = createRoute({
  method: 'put',
  path: '/api/v2/agreements/enduser/{id}/accept/',
  tags: ['agreements'],
  description: 'Accept an end-user agreement via the API',
  operationId: 'accept EUA',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'A UUID string identifying this end user agreement.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: EnduserAcceptanceDetailsRequestSchema },
        'application/x-www-form-urlencoded': { schema: EnduserAcceptanceDetailsRequestSchema },
        'multipart/form-data': { schema: EnduserAcceptanceDetailsRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'EUA',
      content: { 'application/json': { schema: EndUserAgreementSchema } },
    },
    400: {
      description: 'Invalid ID',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid ID',
              value: {
                detail: '272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.',
                status_code: 400,
                summary: 'Invalid ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
            InsufficientPermissions: {
              summary: 'Insufficient permissions',
              description: "Company doesn't have permission to accept EUA",
              value: {
                detail:
                  "Your company doesn't have permission to accept EUA. You'll have to use our default form for this action.",
                status_code: 403,
                summary: 'Insufficient permissions',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
    405: {
      description: 'EUA accepted',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            EUAAccepted: {
              summary: 'EUA accepted',
              description: 'End User Agreements cannot be accepted more than once',
              value: {
                detail: 'End User Agreements cannot be accepted more than once',
                status_code: 405,
                summary: 'EUA cannot be accepted more than once',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2InstitutionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/institutions/',
  tags: ['institutions'],
  description: 'List all available institutions',
  operationId: 'retrieve all supported Institutions in a given country',
  request: {
    query: z.object({
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'ISO 3166 two-character country code',
            examples: {
              Austria: {
                summary: 'Austria',
                description: 'ISO 3166 two-character code for Austria',
                value: 'AT',
              },
              Belgium: {
                summary: 'Belgium',
                description: 'ISO 3166 two-character code for Belgium',
                value: 'BE',
              },
              Bulgaria: {
                summary: 'Bulgaria',
                description: 'ISO 3166 two-character code for Bulgaria',
                value: 'BG',
              },
              Croatia: {
                summary: 'Croatia',
                description: 'ISO 3166 two-character code for Croatia',
                value: 'HR',
              },
              Cyprus: {
                summary: 'Cyprus',
                description: 'ISO 3166 two-character code for Cyprus',
                value: 'CY',
              },
              Czechia: {
                summary: 'Czechia',
                description: 'ISO 3166 two-character code for Czechia',
                value: 'CZ',
              },
              Denmark: {
                summary: 'Denmark',
                description: 'ISO 3166 two-character code for Denmark',
                value: 'DK',
              },
              Estonia: {
                summary: 'Estonia',
                description: 'ISO 3166 two-character code for Estonia',
                value: 'EE',
              },
              Finland: {
                summary: 'Finland',
                description: 'ISO 3166 two-character code for Finland',
                value: 'FI',
              },
              France: {
                summary: 'France',
                description: 'ISO 3166 two-character code for France',
                value: 'FR',
              },
              Germany: {
                summary: 'Germany',
                description: 'ISO 3166 two-character code for Germany',
                value: 'DE',
              },
              Greece: {
                summary: 'Greece',
                description: 'ISO 3166 two-character code for Greece',
                value: 'GR',
              },
              Hungary: {
                summary: 'Hungary',
                description: 'ISO 3166 two-character code for Hungary',
                value: 'HU',
              },
              Iceland: {
                summary: 'Iceland',
                description: 'ISO 3166 two-character code for Iceland',
                value: 'IS',
              },
              Ireland: {
                summary: 'Ireland',
                description: 'ISO 3166 two-character code for Ireland',
                value: 'IE',
              },
              Italy: {
                summary: 'Italy',
                description: 'ISO 3166 two-character code for Italy',
                value: 'IT',
              },
              Latvia: {
                summary: 'Latvia',
                description: 'ISO 3166 two-character code for Latvia',
                value: 'LV',
              },
              Liechtenstein: {
                summary: 'Liechtenstein',
                description: 'ISO 3166 two-character code for Liechtenstein',
                value: 'LI',
              },
              Lithuania: {
                summary: 'Lithuania',
                description: 'ISO 3166 two-character code for Lithuania',
                value: 'LT',
              },
              Luxembourg: {
                summary: 'Luxembourg',
                description: 'ISO 3166 two-character code for Luxembourg',
                value: 'LU',
              },
              Malta: {
                summary: 'Malta',
                description: 'ISO 3166 two-character code for Malta',
                value: 'MT',
              },
              Netherlands: {
                summary: 'Netherlands',
                description: 'ISO 3166 two-character code for Netherlands',
                value: 'NL',
              },
              Norway: {
                summary: 'Norway',
                description: 'ISO 3166 two-character code for Norway',
                value: 'NO',
              },
              Poland: {
                summary: 'Poland',
                description: 'ISO 3166 two-character code for Poland',
                value: 'PL',
              },
              Portugal: {
                summary: 'Portugal',
                description: 'ISO 3166 two-character code for Portugal',
                value: 'PT',
              },
              Romania: {
                summary: 'Romania',
                description: 'ISO 3166 two-character code for Romania',
                value: 'RO',
              },
              Slovakia: {
                summary: 'Slovakia',
                description: 'ISO 3166 two-character code for Slovakia',
                value: 'SK',
              },
              Slovenia: {
                summary: 'Slovenia',
                description: 'ISO 3166 two-character code for Slovenia',
                value: 'SI',
              },
              Spain: {
                summary: 'Spain',
                description: 'ISO 3166 two-character code for Spain',
                value: 'ES',
              },
              Sweden: {
                summary: 'Sweden',
                description: 'ISO 3166 two-character code for Sweden',
                value: 'SE',
              },
              UnitedKingdom: {
                summary: 'United Kingdom',
                description: 'ISO 3166 two-character code for United Kingdom',
                value: 'GB',
              },
            },
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      payments_enabled: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Boolean value, indicating if payments are enabled',
            examples: {
              PaymentsEnabled: {
                summary: 'payments_enabled',
                description:
                  'Boolean value representing whether                            payments are enabled',
                value: 'false',
              },
            },
            in: 'query',
            name: 'payments_enabled',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'list of supported Institutions in the country',
      content: {
        'application/json': {
          schema: z.array(IntegrationSchema),
          examples: {
            SupportedInstitutions: {
              summary: 'Supported Institutions',
              description: 'some of supported Institutions',
              value: [
                {
                  bic: 'NTSBDEB1',
                  countries: [
                    'GB',
                    'NO',
                    'SE',
                    'FI',
                    'DK',
                    'EE',
                    'LV',
                    'LT',
                    'NL',
                    'CZ',
                    'ES',
                    'PL',
                    'BE',
                    'DE',
                    'AT',
                    'BG',
                    'HR',
                    'CY',
                    'FR',
                    'GR',
                    'HU',
                    'IS',
                    'IE',
                    'IT',
                    'LI',
                    'LU',
                    'MT',
                    'PT',
                    'RO',
                    'SK',
                    'SI',
                  ],
                  id: 'N26_NTSBDEB1',
                  logo: 'https://cdn.nordigen.com/ais/N26_SANDBOX_NTSBDEB1.png',
                  name: 'N26 Bank',
                  transaction_total_days: '90',
                },
                {
                  bic: 'FTSBDEFAXXX',
                  countries: ['DE'],
                  id: 'ABNAMRO_FTSBDEFAXXX',
                  logo: 'https://cdn.nordigen.com/ais/ABNAMRO_FTSBDEFAXXX.png',
                  name: 'ABN AMRO Bank Commercial',
                  transaction_total_days: '558',
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'Unknown Fields',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotAValidChoice: {
              summary: 'Not a valid choice',
              description: 'Provided country is not valid',
              value: {
                country: ['GBA is not a valid choice.'],
                status_code: 400,
                summary: 'Invalid country choice.',
              },
            },
            UnknownFields: {
              summary: 'Unknown Fields',
              description: 'Unknown Fields',
              value: {
                detail: 'Unknown fields {${FIELD}} in {${LOCATION}}',
                status_code: 400,
                summary: 'Unknown fields',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
  },
})

export const getApiV2InstitutionsIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/institutions/{id}/',
  tags: ['institutions'],
  description: 'Get details about a specific Institution',
  operationId: 'retrieve institution',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            examples: {
              N26: {
                summary: 'N26',
                description: "Nordigen's Institution ID for N26",
                value: 'N26_NTSBDEB1',
              },
            },
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieve institution by id',
      content: {
        'application/json': {
          schema: IntegrationSchema,
          examples: {
            ABNAMROBank: {
              summary: 'ABN AMRO Bank',
              description: 'ABN AMRO Bank',
              value: {
                bic: 'FTSBDEFAXXX',
                countries: ['DE'],
                id: 'ABNAMRO_FTSBDEFAXXX',
                logo: 'https://cdn.nordigen.com/ais/ABNAMRO_FTSBDEFAXXX.png',
                name: 'ABN AMRO Bank Commercial',
                transaction_total_days: '558',
              },
            },
            N26Bank: {
              summary: 'N26 Bank',
              description: 'N26 Bank',
              value: {
                bic: 'NTSBDEB1',
                countries: [
                  'GB',
                  'NO',
                  'SE',
                  'FI',
                  'DK',
                  'EE',
                  'LV',
                  'LT',
                  'NL',
                  'CZ',
                  'ES',
                  'PL',
                  'BE',
                  'DE',
                  'AT',
                  'BG',
                  'HR',
                  'CY',
                  'FR',
                  'GR',
                  'HU',
                  'IS',
                  'IE',
                  'IT',
                  'LI',
                  'LU',
                  'MT',
                  'PT',
                  'RO',
                  'SK',
                  'SI',
                ],
                id: 'N26_NTSBDEB1',
                logo: 'https://cdn.nordigen.com/ais/N26_SANDBOX_NTSBDEB1.png',
                name: 'N26 Bank',
                transaction_total_days: '90',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
  },
})

export const getApiV2PaymentsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/payments/',
  tags: ['payments'],
  description: 'Retrieve all payments belonging to the company',
  operationId: 'list payments',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List payments',
      content: { 'application/json': { schema: PaginatedPaymentReadListSchema } },
    },
    400: {
      description: 'Unknown Fields',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            UnknownFields: {
              summary: 'Unknown Fields',
              description: 'Unknown Fields',
              value: {
                detail: 'Unknown fields {${FIELD}} in {${LOCATION}}',
                status_code: 400,
                summary: 'Unknown fields',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV2PaymentsIndexRoute = createRoute({
  method: 'post',
  path: '/api/v2/payments/',
  tags: ['payments'],
  description: 'Create payment',
  operationId: 'create payment',
  request: {
    body: {
      content: {
        'application/json': { schema: PaymentWriteRequestSchema },
        'application/x-www-form-urlencoded': { schema: PaymentWriteRequestSchema },
        'multipart/form-data': { schema: PaymentWriteRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Create payment',
      content: { 'application/json': { schema: PaymentWriteSchema } },
    },
    400: {
      description: 'Unknown Fields',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            UnknownFields: {
              summary: 'Unknown Fields',
              description: 'Unknown Fields',
              value: {
                detail: 'Unknown fields {${FIELD}} in {${LOCATION}}',
                status_code: 400,
                summary: 'Unknown fields',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2PaymentsAccountIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/payments/account/',
  tags: ['payments'],
  description: 'Retrieve all payment creditor accounts',
  operationId: 'retrieve all payment creditor accounts',
  responses: {
    200: {
      description: 'Retrieve all payment creditor accounts',
      content: { 'application/json': { schema: z.array(CreditorAccountSchema) } },
    },
    400: {
      description: 'Unknown Fields',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            UnknownFields: {
              summary: 'Unknown Fields',
              description: 'Unknown Fields',
              value: {
                detail: 'Unknown fields {${FIELD}} in {${LOCATION}}',
                status_code: 400,
                summary: 'Unknown fields',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2PaymentsCreditorsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/payments/creditors/',
  tags: ['payments'],
  description: 'API endpoints related to creditor accounts.',
  operationId: 'payments_creditors_list',
  request: {
    query: z.object({
      account: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'account', schema: { type: 'string' }, required: false },
        }),
      address_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'address_country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      agent: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'agent', schema: { type: 'string' }, required: false },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'currency', schema: { type: 'string' }, required: false },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, minimum: 1, type: 'integer' },
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', schema: { type: 'string' }, required: false },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'type', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: PaginatedCreditorAccountListSchema } },
    },
  },
})

export const postApiV2PaymentsCreditorsIndexRoute = createRoute({
  method: 'post',
  path: '/api/v2/payments/creditors/',
  tags: ['payments'],
  description: 'API endpoints related to creditor accounts.',
  operationId: 'payments_creditors_create',
  request: {
    body: {
      content: {
        'application/json': { schema: CreditorAccountWriteRequestSchema },
        'application/x-www-form-urlencoded': { schema: CreditorAccountWriteRequestSchema },
        'multipart/form-data': { schema: CreditorAccountWriteRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: CreditorAccountWriteSchema } },
    },
  },
})

export const getApiV2PaymentsCreditorsIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/payments/creditors/{id}/',
  tags: ['payments'],
  description: 'API endpoints related to creditor accounts.',
  operationId: 'payments_creditors_retrieve',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'Unique entry ID', format: 'uuid', type: 'string' },
          },
          description: 'Unique entry ID',
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: CreditorAccountSchema } } },
  },
})

export const deleteApiV2PaymentsCreditorsIdIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v2/payments/creditors/{id}/',
  tags: ['payments'],
  description: 'API endpoints related to creditor accounts.',
  operationId: 'payments_creditors_destroy',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'Unique entry ID', format: 'uuid', type: 'string' },
          },
          description: 'Unique entry ID',
        }),
    }),
  },
  responses: { 204: { description: 'No response body' } },
})

export const getApiV2PaymentsFieldsInstitutionIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/payments/fields/{institution_id}/',
  tags: ['payments'],
  description: 'List minimum required fields for institution',
  operationId: 'list minimum required fields for institution',
  request: {
    params: z.object({
      institution_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'institution_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Minimum required fields',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            MinimumRequiredFields: {
              summary: 'Minimum required fields',
              description: 'Fields to be used in API request for specific Institution',
              value: {
                'single-payment': {
                  SCT: {
                    creditor_account: '<creditor_account_id>',
                    custom_payment_id: '<custom_payment_id>',
                    description: '<payment_description>',
                    institution_id: '<institution_id>',
                    instructed_amount: { amount: 10, currency: 'EUR' },
                    payment_product: 'SCT',
                    redirect: '<https://example.com>',
                  },
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Unknown Fields',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            UnknownFields: {
              summary: 'Unknown Fields',
              description: 'Unknown Fields',
              value: {
                detail: 'Unknown fields {${FIELD}} in {${LOCATION}}',
                status_code: 400,
                summary: 'Unknown fields',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2PaymentsIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/payments/{id}/',
  tags: ['payments'],
  description: 'Retrieve payment',
  operationId: 'retrieve payment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'Unique entry ID', format: 'uuid', type: 'string' },
          },
          description: 'Unique entry ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieve payment information',
      content: { 'application/json': { schema: PaymentReadSchema } },
    },
    400: {
      description: 'Invalid ID',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid ID',
              value: {
                detail: '272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.',
                status_code: 400,
                summary: 'Invalid ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
  },
})

export const deleteApiV2PaymentsIdIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v2/payments/{id}/',
  tags: ['payments'],
  description: 'Delete periodic payment',
  operationId: 'delete periodic payment',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            in: 'path',
            name: 'id',
            required: true,
            schema: { description: 'Unique entry ID', format: 'uuid', type: 'string' },
          },
          description: 'Unique entry ID',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Payment deleted',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            PaymentDeleted: {
              summary: 'Payment deleted',
              description: 'Periodic payment is deleted',
              value: {
                detail: "Periodic payment '$PAYMENT_ID' deleted",
                summary: 'Periodic payment deleted',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Invalid ID',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid ID',
              value: {
                detail: '272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.',
                status_code: 400,
                summary: 'Invalid ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
    409: {
      description: 'Payment delete error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            PaymentDeleteError: {
              summary: 'Payment delete error',
              description: 'Periodic payment cannot be deleted',
              value: {
                detail:
                  "Periodic payment '$PAYMENT_ID' cannot be deleted at this moment. Please try again later.",
                status_code: 409,
                summary: 'Periodic payment cannot be deleted',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2RequisitionsIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/requisitions/',
  tags: ['requisitions'],
  description: 'Retrieve all requisitions belonging to the company',
  operationId: 'retrieve all requisitions',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to return per page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, minimum: 1, type: 'integer' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The initial index from which to return the results.',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 1, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Retrieve all requisitions',
      content: { 'application/json': { schema: PaginatedRequisitionV2ListSchema } },
    },
    400: {
      description: 'Unknown Fields',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            UnknownFields: {
              summary: 'Unknown Fields',
              description: 'Unknown Fields',
              value: {
                detail: 'Unknown fields {${FIELD}} in {${LOCATION}}',
                status_code: 400,
                summary: 'Unknown fields',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
  },
})

export const postApiV2RequisitionsIndexRoute = createRoute({
  method: 'post',
  path: '/api/v2/requisitions/',
  tags: ['requisitions'],
  description: 'Create a new requisition',
  operationId: 'requisition created',
  request: {
    body: {
      content: {
        'application/json': { schema: RequisitionV2RequestSchema },
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              account_selection: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'option to enable account selection view for the end user',
                }),
              agreement: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'EUA associated with this requisition' }),
              institution_id: z
                .string()
                .openapi({ description: 'an Institution ID for this Requisition' }),
              redirect: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.url().max(1024).nullable(),
              ).openapi({
                description:
                  'redirect URL to your application after end-user authorization with ASPSP',
              }),
              redirect_immediate: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'enable redirect back to the client after account list received',
                }),
              reference: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'additional ID to identify the end user' }),
              ssn: z
                .string()
                .max(64)
                .exactOptional()
                .openapi({ description: 'optional SSN field to verify ownership of the account' }),
              user_language: z
                .string()
                .max(5)
                .exactOptional()
                .openapi({ description: 'A two-letter country code (ISO 639-1)' }),
            })
            .openapi({
              description: 'RequisitionV2Serializer.',
              required: ['institution_id', 'redirect'],
            }),
        },
        'multipart/form-data': {
          schema: z
            .object({
              account_selection: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'option to enable account selection view for the end user',
                }),
              agreement: z
                .uuid()
                .exactOptional()
                .openapi({ description: 'EUA associated with this requisition' }),
              institution_id: z
                .string()
                .openapi({ description: 'an Institution ID for this Requisition' }),
              redirect: ((schema) =>
                z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
                z.url().max(1024).nullable(),
              ).openapi({
                description:
                  'redirect URL to your application after end-user authorization with ASPSP',
              }),
              redirect_immediate: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description: 'enable redirect back to the client after account list received',
                }),
              reference: z
                .string()
                .max(256)
                .exactOptional()
                .openapi({ description: 'additional ID to identify the end user' }),
              ssn: z
                .string()
                .max(64)
                .exactOptional()
                .openapi({ description: 'optional SSN field to verify ownership of the account' }),
              user_language: z
                .string()
                .max(5)
                .exactOptional()
                .openapi({ description: 'A two-letter country code (ISO 639-1)' }),
            })
            .openapi({
              description: 'RequisitionV2Serializer.',
              required: ['institution_id', 'redirect'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Requisition has been successfully created',
      content: { 'application/json': { schema: SpectacularRequisitionV2Schema } },
    },
    400: {
      description: 'Fields required',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AccountSelectionFieldErrors: {
              summary: 'Account selection field errors',
              description: "Errors related to 'account_selection' field.",
              value: {
                account_selection: {
                  detail: 'Account selection not supported for $INSTITUTION_ID',
                  summary: 'Account selection not supported',
                },
                status_code: 400,
              },
            },
            AgreementFieldErrors: {
              summary: 'Agreement field errors',
              description: "Errors related to 'agreement' field.",
              value: {
                agreement: [
                  {
                    detail: 'Get Institution IDs from /institutions/?country={$COUNTRY_CODE}',
                    summary: 'Unknown Institution ID $ASPSP_ID',
                  },
                  {
                    detail:
                      '$AGREEMENT_ID is not a valid EndUserAgreement UUID.  Please specify valid agreement from /api/agreements/enduser/?={$ENDUSER_ID} or create a new one',
                    summary: 'Invalid EndUserAgreement ID',
                  },
                ],
                status_code: 400,
              },
            },
            FieldsRequired: {
              summary: 'Fields required',
              description: 'Field is required',
              value: {
                institution_id: ['This field is required.'],
                redirect: ['This field is required.'],
                status_code: 400,
              },
            },
            InstitutionFieldErrors: {
              summary: 'Institution field errors',
              description: "Errors related to 'institution' field.",
              value: {
                institution_id: {
                  detail: 'Get Institution IDs from /institutions/?country={$COUNTRY_CODE}',
                  summary: 'Unknown Institution ID $INSTITUTION_ID',
                },
                status_code: 400,
              },
            },
            RedirectFieldErrors: {
              summary: 'Redirect field errors',
              description: "Errors related to 'redirect' field.",
              value: {
                redirect: [
                  {
                    detail:
                      'Where an end user will be redirected after finishing authentication in ASPSP',
                    summary: 'Redirect URL is required',
                  },
                  {
                    detail: 'Redirect URI must have a valid URI structure',
                    summary: 'Invalid redirect URI',
                  },
                ],
                status_code: 400,
              },
            },
            ReferenceFieldErrors: {
              summary: 'Reference field errors',
              description: "Errors related to 'reference' field.",
              value: {
                reference: {
                  detail: 'Client reference: $REFERENCE_ID already exists',
                  summary: 'Client reference must be unique',
                },
                status_code: 400,
              },
            },
            SSNFieldErrors: {
              summary: 'SSN field errors',
              description: "Errors related to 'ssn' field.",
              value: {
                ssn: {
                  detail: 'SSN verification not supported for $INSTITUTION_ID',
                  summary: 'SSN verification not supported',
                },
                status_code: 400,
              },
            },
            UnknownFields: {
              summary: 'Unknown Fields',
              description: 'Unknown Fields',
              value: {
                detail: 'Unknown fields {${FIELD}} in {${LOCATION}}',
                status_code: 400,
                summary: 'Unknown fields',
              },
            },
            UserLanguageFieldErrors: {
              summary: 'User language field errors',
              description: "Errors related to 'user_language' field.",
              value: {
                status_code: 400,
                user_language: {
                  detail: "'$LNG_CODE' is an invalid or unsupported language",
                  summary: 'Provided user_language is invalid or not supported',
                },
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Agreement not found errors',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AgreementNotFoundErrors: {
              summary: 'Agreement not found errors',
              description: "Errors related to 'agreement' field.",
              value: {
                agreement: {
                  detail: 'Please check whether you specified a valid ID',
                  summary: 'ID $AGREEMENT_ID not found',
                },
                status_code: 404,
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV2RequisitionsIdIndexRoute = createRoute({
  method: 'get',
  path: '/api/v2/requisitions/{id}/',
  tags: ['requisitions'],
  description: 'Retrieve a requisition by ID',
  operationId: 'requisition by id',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'A UUID string identifying this requisition.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get requisition by ID',
      content: { 'application/json': { schema: RequisitionV2Schema } },
    },
    400: {
      description: 'Invalid ID',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid ID',
              value: {
                detail: '272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.',
                status_code: 400,
                summary: 'Invalid ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
  },
})

export const deleteApiV2RequisitionsIdIndexRoute = createRoute({
  method: 'delete',
  path: '/api/v2/requisitions/{id}/',
  tags: ['requisitions'],
  description: 'Delete requisition and its end user agreement',
  operationId: 'delete requisition by id v2',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            description: 'A UUID string identifying this requisition.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    400: {
      description: 'Invalid ID',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidID: {
              summary: 'Invalid ID',
              description: 'Invalid ID',
              value: {
                detail: '272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.',
                status_code: 400,
                summary: 'Invalid ID',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found error',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            NotFoundError: {
              summary: 'Not found error',
              description: 'Not found error',
              value: { detail: 'Not found.', status_code: 404, summary: 'Not found.' },
            },
          },
        },
      },
    },
  },
})

export const postApiV2TokenNewIndexRoute = createRoute({
  method: 'post',
  path: '/api/v2/token/new/',
  tags: ['token'],
  description: 'Obtain JWT pair',
  operationId: 'JWT Obtain',
  request: {
    body: {
      content: {
        'application/json': { schema: JWTObtainPairRequestSchema },
        'application/x-www-form-urlencoded': { schema: JWTObtainPairRequestSchema },
        'multipart/form-data': { schema: JWTObtainPairRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Obtain JWT response.',
      content: { 'application/json': { schema: SpectacularJWTObtainSchema } },
    },
    401: {
      description: 'Authentication failed',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            AuthenticationFailed: {
              summary: 'Authentication failed',
              description: 'Incorrect secret key or id',
              value: {
                detail: 'No active account found with the given credentials',
                status_code: 401,
                summary: 'Authentication failed',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV2TokenRefreshIndexRoute = createRoute({
  method: 'post',
  path: '/api/v2/token/refresh/',
  tags: ['token'],
  description: 'Refresh access token',
  operationId: 'JWT Refresh',
  request: {
    body: {
      content: {
        'application/json': { schema: JWTRefreshRequestSchema },
        'application/x-www-form-urlencoded': { schema: JWTRefreshRequestSchema },
        'multipart/form-data': { schema: JWTRefreshRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Refresh access token.',
      content: { 'application/json': { schema: SpectacularJWTRefreshSchema } },
    },
    401: {
      description: 'Invalid token',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            InvalidToken: {
              summary: 'Invalid token',
              description: 'Token is invalid or expired',
              value: {
                detail: 'Token is invalid or expired',
                status_code: 401,
                summary: 'Invalid token',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'IP Access denied',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.any())
            .openapi({ description: 'Unspecified response body' }),
          examples: {
            IPAccessDenied: {
              summary: 'IP Access denied',
              description: 'IP address not whitelisted',
              value: {
                detail: "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
                status_code: 403,
                summary: 'IP address access denied',
              },
            },
          },
        },
      },
    },
  },
})

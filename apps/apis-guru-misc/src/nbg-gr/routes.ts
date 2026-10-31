import { createRoute, z } from '@hono/zod-openapi'

const ErrorCodeSchema = z
  .enum([
    'UK.OBIE.Field.Expected',
    'UK.OBIE.Field.Invalid',
    'UK.OBIE.Field.InvalidDate',
    'UK.OBIE.Field.Missing',
    'UK.OBIE.Field.Unexpected',
    'UK.OBIE.Header.Invalid',
    'UK.OBIE.Header.Missing',
    'UK.OBIE.Resource.ConsentMismatch',
    'UK.OBIE.Resource.InvalidConsentStatus',
    'UK.OBIE.Resource.InvalidFormat',
    'UK.OBIE.Resource.NotFound',
    'UK.OBIE.Rules.AfterCutOffDateTime',
    'UK.OBIE.Rules.DuplicateReference',
    'UK.OBIE.Signature.Invalid',
    'UK.OBIE.Signature.InvalidClaim',
    'UK.OBIE.Signature.MissingClaim',
    'UK.OBIE.Signature.Malformed',
    'UK.OBIE.Signature.Missing',
    'UK.OBIE.Signature.Unexpected',
    'UK.OBIE.Unsupported.AccountIdentifier',
    'UK.OBIE.Unsupported.AccountSecondaryIdentifier',
    'UK.OBIE.Unsupported.Currency',
    'UK.OBIE.Unsupported.EventType',
    'UK.OBIE.Unsupported.Frequency',
    'UK.OBIE.Unsupported.LocalInstrument',
    'UK.OBIE.Unsupported.Scheme',
    'UK.OBIE.Reauthenticate',
    'UK.OBIE.Rules.ResourceAlreadyExists',
    'UK.OBIE.UnexpectedError',
  ])
  .openapi({
    description:
      'This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given.',
  })
  .openapi('ErrorCode')

const ErrorResponseSchema = z
  .strictObject({ errorMessage: z.string().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const LinksSchema = z
  .strictObject({
    First: z.string().nullable().exactOptional().openapi({ description: '' }),
    Last: z.string().nullable().exactOptional().openapi({ description: '' }),
    Next: z.string().nullable().exactOptional().openapi({ description: '' }),
    Prev: z.string().nullable().exactOptional().openapi({ description: '' }),
    Self: z.string().openapi({ description: '' }),
  })
  .openapi({ description: 'Links relevant to the payload', required: ['Self'] })
  .openapi('Links')

const MetaSchema = z
  .strictObject({
    FirstAvailableDateTime: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
    LastAvailableDateTime: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
    TotalPages: z.int32().nullable().exactOptional().openapi({ description: '' }),
  })
  .openapi({ description: 'Meta Data relevant to the payload', required: [] })
  .openapi('Meta')

const OBCashAccount5Schema = z
  .strictObject({
    Identification: z
      .string()
      .min(1)
      .max(256)
      .openapi({
        description:
          'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
      }),
    Name: z
      .string()
      .min(1)
      .max(70)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\r\nNote, the account name is not the product name or the nickname of the account.",
      }),
    SchemeName: z
      .string()
      .openapi({
        description:
          'Name of the identification scheme, in a coded form as published in an external list.',
        example:
          '[ "UK.OBIE.BBAN", "UK.OBIE.IBAN", "UK.OBIE.PAN", "UK.OBIE.Paym", "UK.OBIE.SortCodeAccountNumber" ]',
      }),
    SecondaryIdentification: z
      .string()
      .min(1)
      .max(34)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This is secondary identification of the account, as assigned by the account servicing institution.\r\nThis can be used by building societies to additionally identify accounts with a roll number(in addition to a sort code and account number combination).',
      }),
  })
  .openapi({ description: '', required: ['Identification', 'SchemeName'] })
  .openapi('OBCashAccount5')

const OBExternalAccountSubType1CodeSchema = z
  .enum([
    'ChargeCard',
    'CreditCard',
    'CurrentAccount',
    'EMoney',
    'Loan',
    'Mortgage',
    'PrePaidCard',
    'Savings',
  ])
  .openapi({ description: '' })
  .openapi('OBExternalAccountSubType1Code')

const OBExternalAccountType1CodeSchema = z
  .enum(['Business', 'Personal'])
  .openapi({ description: '' })
  .openapi('OBExternalAccountType1Code')

const OBBranchAndFinancialInstitutionIdentification5Schema = z
  .strictObject({
    Identification: z
      .string()
      .min(1)
      .max(35)
      .openapi({
        description: 'Unique and unambiguous identification of the servicing institution.',
      }),
    SchemeName: z
      .string()
      .openapi({
        description:
          'Name of the identification scheme, in a coded form as published in an external list.',
        example: '[ "UK.OBIE.BICFI" ]',
      }),
  })
  .openapi({ description: '', required: ['Identification', 'SchemeName'] })
  .openapi('OBBranchAndFinancialInstitutionIdentification5')

const OBAccount6Schema = z
  .strictObject({
    Account: z
      .array(OBCashAccount5Schema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Provides the details to identify an account.' }),
    AccountId: z
      .string()
      .min(1)
      .max(40)
      .openapi({
        description:
          'A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.',
      }),
    AccountSubType: OBExternalAccountSubType1CodeSchema,
    AccountType: OBExternalAccountType1CodeSchema,
    Currency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .openapi({
        description:
          'Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.',
      }),
    Description: z
      .string()
      .min(1)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Specifies the description of the account type.' }),
    Nickname: z
      .string()
      .min(1)
      .max(70)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.',
      }),
    OpeningDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00',
      }),
    Servicer: OBBranchAndFinancialInstitutionIdentification5Schema.exactOptional(),
  })
  .openapi({
    description:
      'Unambiguous identification of the account to which credit and debit entries are made.',
    required: ['AccountId', 'AccountSubType', 'AccountType', 'Currency'],
  })
  .openapi('OBAccount6')

const OBActiveOrHistoricCurrencyAndAmountSchema = z
  .strictObject({
    Amount: z
      .string()
      .regex(/^\d{1,13}$|^\d{1,13}[\.,]\d{1,5}$/)
      .openapi({
        description:
          'A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.',
      }),
    Currency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .openapi({
        description:
          'A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".',
      }),
  })
  .openapi({ description: '', required: ['Amount', 'Currency'] })
  .openapi('OBActiveOrHistoricCurrencyAndAmount')

const OBBalanceType1CodeSchema = z
  .enum([
    'ClosingAvailable',
    'ClosingBooked',
    'ClosingCleared',
    'Expected',
    'ForwardAvailable',
    'Information',
    'InterimAvailable',
    'InterimBooked',
    'InterimCleared',
    'OpeningAvailable',
    'OpeningBooked',
    'OpeningCleared',
    'PreviouslyClosedBooked',
  ])
  .openapi({ description: '' })
  .openapi('OBBalanceType1Code')

const OBBeneficiaryType1CodeSchema = z
  .enum(['Trusted', 'Ordinary'])
  .openapi({ description: 'Specifies the Beneficiary Type.' })
  .openapi('OBBeneficiaryType1Code')

const OBBeneficiary5Schema = z
  .strictObject({
    AccountId: z
      .string()
      .min(1)
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.',
      }),
    BeneficiaryType: OBBeneficiaryType1CodeSchema.exactOptional(),
    CreditorAccount: OBCashAccount5Schema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('OBBeneficiary5')

const OBCashAccount6Schema = z
  .strictObject({
    Identification: z
      .string()
      .min(1)
      .max(256)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
      }),
    Name: z
      .string()
      .min(1)
      .max(70)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\r\nNote, the account name is not the product name or the nickname of the account.",
      }),
    SchemeName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Name of the identification scheme, in a coded form as published in an external list.',
        example:
          '[ "UK.OBIE.BBAN", "UK.OBIE.IBAN", "UK.OBIE.PAN", "UK.OBIE.Paym", "UK.OBIE.SortCodeAccountNumber" ]',
      }),
  })
  .openapi({
    description:
      'Unambiguous identification of the account of the creditor, in the case of a debit transaction.',
    required: [],
  })
  .openapi('OBCashAccount6')

const OBCreditDebitCodeSchema = z
  .enum(['Credit', 'Debit'])
  .openapi({ description: '' })
  .openapi('OBCreditDebitCode')

const OBExternalLimitType1CodeSchema = z
  .enum(['Available', 'Credit', 'Emergency', 'Pre-Agreed', 'Temporary'])
  .openapi({ description: '' })
  .openapi('OBExternalLimitType1Code')

const OBCreditLine1Schema = z
  .strictObject({
    Amount: OBActiveOrHistoricCurrencyAndAmountSchema.exactOptional(),
    Included: z
      .boolean()
      .openapi({
        description:
          'Indicates whether or not the credit line is included in the balance of the account.\r\nUsage: If not present, credit line is not included in the balance amount of the account.',
      }),
    Type: OBExternalLimitType1CodeSchema.exactOptional(),
  })
  .openapi({ description: '', required: ['Included'] })
  .openapi('OBCreditLine1')

const OBCashBalance1Schema = z
  .strictObject({
    AccountId: z
      .string()
      .min(1)
      .max(40)
      .openapi({
        description:
          'A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.',
      }),
    Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
    CreditDebitIndicator: OBCreditDebitCodeSchema,
    CreditLine: z
      .array(OBCreditLine1Schema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Set of elements used to provide details on the credit line.' }),
    DateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Indicates the date (and time) of the balance.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00',
      }),
    Type: OBBalanceType1CodeSchema,
  })
  .openapi({
    description: 'Set of elements used to define the balance details.',
    required: ['AccountId', 'Amount', 'CreditDebitIndicator', 'DateTime', 'Type'],
  })
  .openapi('OBCashBalance1')

const OBEntryStatus1CodeSchema = z
  .enum(['Booked', 'Pending'])
  .openapi({ description: '' })
  .openapi('OBEntryStatus1Code')

const OBError1Schema = z
  .strictObject({
    ErrorCode: ErrorCodeSchema,
    Message: z
      .string()
      .min(1)
      .max(500)
      .openapi({
        description:
          "A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'OBIE doesn't standardise this field",
      }),
    Path: z
      .string()
      .min(1)
      .max(500)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency',
      }),
  })
  .openapi({ description: '', required: ['ErrorCode', 'Message'] })
  .openapi('OBError1')

const OBErrorResponse1Schema = z
  .strictObject({
    Code: z
      .string()
      .min(1)
      .max(40)
      .openapi({ description: 'High level textual error code, to help categorize the errors.' }),
    Errors: z.array(OBError1Schema).openapi({ description: 'Gets or Sets Errors' }),
    Id: z
      .string()
      .min(1)
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.',
      }),
    Message: z
      .string()
      .min(1)
      .max(500)
      .openapi({
        description:
          "Brief Error message, e.g., 'There is something wrong with the request parameters provided'",
      }),
  })
  .openapi({
    description:
      'An array of detail error codes, and messages, and URLs to documentation to help remediation.',
    required: ['Code', 'Errors', 'Message'],
  })
  .openapi('OBErrorResponse1')

const OBExternalPermissions1CodeSchema = z
  .enum([
    'ReadAccountsBasic',
    'ReadAccountsDetail',
    'ReadBalances',
    'ReadBeneficiariesBasic',
    'ReadBeneficiariesDetail',
    'ReadDirectDebits',
    'ReadOffers',
    'ReadPAN',
    'ReadParty',
    'ReadPartyPSU',
    'ReadProducts',
    'ReadScheduledPaymentsBasic',
    'ReadScheduledPaymentsDetail',
    'ReadStandingOrdersBasic',
    'ReadStandingOrdersDetail',
    'ReadStatementsBasic',
    'ReadStatementsDetail',
    'ReadTransactionsBasic',
    'ReadTransactionsCredits',
    'ReadTransactionsDebits',
    'ReadTransactionsDetail',
  ])
  .openapi({
    description:
      'Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.',
  })
  .openapi('OBExternalPermissions1Code')

const OBExternalRequestStatus1CodeSchema = z
  .enum(['Authorised', 'AwaitingAuthorisation', 'Rejected', 'Revoked'])
  .openapi({ description: 'Specifies the status of consent resource in code form.' })
  .openapi('OBExternalRequestStatus1Code')

const OBExternalScheduleType1CodeSchema = z
  .enum(['Arrival', 'Execution'])
  .openapi({ description: '' })
  .openapi('OBExternalScheduleType1Code')

const OBExternalStandingOrderStatus1CodeSchema = z
  .enum(['Active', 'Inactive'])
  .openapi({ description: '' })
  .openapi('OBExternalStandingOrderStatus1Code')

const OBExternalStatementType1CodeSchema = z
  .enum(['AccountClosure', 'AccountOpening', 'Annual', 'Interim', 'RegularPeriodic'])
  .openapi({ description: '' })
  .openapi('OBExternalStatementType1Code')

const OBParty2Schema = z
  .strictObject({
    Name: z
      .string()
      .min(1)
      .max(70)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Name by which a party is known and which is usually used to identify that party.',
      }),
    PartyId: z
      .string()
      .min(1)
      .max(40)
      .openapi({
        description:
          'A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.',
      }),
  })
  .openapi({ description: '', required: ['PartyId'] })
  .openapi('OBParty2')

const OBReadDataAccount5Schema = z
  .strictObject({
    Account: z
      .array(OBAccount6Schema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unambiguous identification of the account to which credit and debit entries are made.',
      }),
  })
  .openapi({ description: '', required: [] })
  .openapi('OBReadDataAccount5')

const OBReadAccount5Schema = z
  .strictObject({
    Data: OBReadDataAccount5Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ description: '', required: ['Data'] })
  .openapi('OBReadAccount5')

const OBReadDataBalance1Schema = z
  .strictObject({
    Balance: z
      .array(OBCashBalance1Schema)
      .openapi({ description: 'Set of elements used to define the balance details.' }),
  })
  .openapi({ description: '', required: ['Balance'] })
  .openapi('OBReadDataBalance1')

const OBReadBalance1Schema = z
  .strictObject({ Data: OBReadDataBalance1Schema, Links: LinksSchema, Meta: MetaSchema })
  .openapi({ description: '', required: ['Data', 'Links', 'Meta'] })
  .openapi('OBReadBalance1')

const OBReadDataBeneficiary5Schema = z
  .strictObject({
    Beneficiary: z
      .array(OBBeneficiary5Schema)
      .nullable()
      .exactOptional()
      .openapi({ description: '' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('OBReadDataBeneficiary5')

const OBReadBeneficiary5Schema = z
  .strictObject({
    Data: OBReadDataBeneficiary5Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ description: '', required: ['Data'] })
  .openapi('OBReadBeneficiary5')

const OBReadData1Schema = z
  .strictObject({
    ExpirationDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00',
      }),
    Permissions: z
      .array(OBExternalPermissions1CodeSchema)
      .openapi({
        description:
          'Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.',
      }),
    TransactionFromDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00',
      }),
    TransactionToDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00',
      }),
  })
  .openapi({ description: '', required: ['Permissions'] })
  .openapi('OBReadData1')

const OBRisk2Schema = z
  .strictObject({})
  .openapi({
    description:
      'The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.',
  })
  .openapi('OBRisk2')

const OBReadConsent1Schema = z
  .strictObject({ Data: OBReadData1Schema, Risk: OBRisk2Schema })
  .openapi({ description: '', required: ['Data', 'Risk'] })
  .openapi('OBReadConsent1')

const OBReadDataConsentResponse1Schema = z
  .strictObject({
    ConsentId: z
      .string()
      .openapi({
        description:
          'Unique identification as assigned to identify the account access consent resource.',
      }),
    CreationDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00',
      }),
    ExpirationDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00',
      }),
    Permissions: z
      .array(OBExternalPermissions1CodeSchema)
      .openapi({
        description:
          'Specifies the Open Banking account access data types. This is a list of the data clusters being consented by the PSU, and requested for authorisation with the ASPSP.',
      }),
    Status: OBExternalRequestStatus1CodeSchema,
    StatusUpdateDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00',
      }),
    TransactionFromDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00',
      }),
    TransactionToDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00',
      }),
  })
  .openapi({
    description: '',
    required: ['ConsentId', 'CreationDateTime', 'Permissions', 'Status', 'StatusUpdateDateTime'],
  })
  .openapi('OBReadDataConsentResponse1')

const OBReadConsentResponse1Schema = z
  .strictObject({
    Data: OBReadDataConsentResponse1Schema,
    Links: LinksSchema,
    Meta: MetaSchema,
    Risk: OBRisk2Schema,
  })
  .openapi({ description: '', required: ['Data', 'Links', 'Meta', 'Risk'] })
  .openapi('OBReadConsentResponse1')

const OBReadDataParty2Schema = z
  .strictObject({ Party: OBParty2Schema.exactOptional() })
  .openapi({ description: '', required: [] })
  .openapi('OBReadDataParty2')

const OBReadDataParty3Schema = z
  .strictObject({
    Party: z.array(OBParty2Schema).nullable().exactOptional().openapi({ description: '' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('OBReadDataParty3')

const OBScheduledPayment3Schema = z
  .strictObject({
    AccountId: z
      .string()
      .min(1)
      .max(40)
      .openapi({
        description:
          'A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.',
      }),
    CreditorAccount: OBCashAccount5Schema.exactOptional(),
    DebtorReference: z
      .string()
      .min(1)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A reference value provided by the PSU to the PISP while setting up the scheduled payment.',
      }),
    InstructedAmount: OBActiveOrHistoricCurrencyAndAmountSchema,
    Reference: z
      .string()
      .min(1)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\r\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\r\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
      }),
    ScheduledPaymentDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
    ScheduledPaymentId: z
      .string()
      .min(1)
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.',
      }),
    ScheduledType: OBExternalScheduleType1CodeSchema,
  })
  .openapi({
    description: '',
    required: ['AccountId', 'InstructedAmount', 'ScheduledPaymentDateTime', 'ScheduledType'],
  })
  .openapi('OBScheduledPayment3')

const OBReadDataScheduledPayment3Schema = z
  .strictObject({
    ScheduledPayment: z
      .array(OBScheduledPayment3Schema)
      .nullable()
      .exactOptional()
      .openapi({ description: '' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('OBReadDataScheduledPayment3')

const OBStandingOrder5Schema = z
  .strictObject({
    AccountId: z
      .string()
      .min(1)
      .max(40)
      .openapi({
        description:
          'A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.',
      }),
    CreditorAccount: OBCashAccount5Schema.exactOptional(),
    FinalPaymentAmount: OBActiveOrHistoricCurrencyAndAmountSchema.exactOptional(),
    FinalPaymentDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
    FirstPaymentAmount: OBActiveOrHistoricCurrencyAndAmountSchema.exactOptional(),
    FirstPaymentDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
    Frequency: z
      .string()
      .regex(/^(IntrvlMnthDay:(0[1,2,3,4,6]|12|24):(0[1-9]|[12] [0-9]|3[01]))$/)
      .openapi({
        description:
          'Individual Definitions:\r\nIntrvlMnthDay - An interval specified in months(between 01, 02, 03, 04, 06, 12, 24), specifying the day within the month(01 to 31)\r\nFull Regular Expression:\r\n^(IntrvlMnthDay:(0[1,2,3,4,6]|12|24):(0[1-9]|[12] [0-9]|3[01]))$',
      }),
    LastPaymentAmount: OBActiveOrHistoricCurrencyAndAmountSchema.exactOptional(),
    LastPaymentDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
    NextPaymentAmount: OBActiveOrHistoricCurrencyAndAmountSchema.exactOptional(),
    NextPaymentDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
    Reference: z
      .string()
      .min(1)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\r\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\r\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
      }),
    StandingOrderId: z
      .string()
      .min(1)
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.',
      }),
    StandingOrderStatusCode: OBExternalStandingOrderStatus1CodeSchema.exactOptional(),
  })
  .openapi({ description: '', required: ['AccountId', 'Frequency'] })
  .openapi('OBStandingOrder5')

const OBReadDataStandingOrder5Schema = z
  .strictObject({
    StandingOrder: z
      .array(OBStandingOrder5Schema)
      .nullable()
      .exactOptional()
      .openapi({ description: '' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('OBReadDataStandingOrder5')

const OBStatement2Schema = z
  .strictObject({
    AccountId: z
      .string()
      .min(1)
      .max(40)
      .openapi({
        description:
          'A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.',
      }),
    CreationDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
    EndDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
    StartDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
    StatementId: z
      .string()
      .min(1)
      .max(40)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.',
      }),
    StatementReference: z
      .string()
      .min(1)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unique reference for the statement. This reference may be optionally populated if available.',
      }),
    Type: OBExternalStatementType1CodeSchema,
  })
  .openapi({
    description: 'Provides further details on a statement resource.',
    required: ['AccountId', 'CreationDateTime', 'EndDateTime', 'StartDateTime', 'Type'],
  })
  .openapi('OBStatement2')

const OBReadDataStatement2Schema = z
  .strictObject({
    Statement: z
      .array(OBStatement2Schema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Provides further details on a statement resource.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('OBReadDataStatement2')

const OBTransactionCashBalanceSchema = z
  .strictObject({
    Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
    CreditDebitIndicator: OBCreditDebitCodeSchema,
    Type: OBBalanceType1CodeSchema,
  })
  .openapi({
    description:
      'Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.',
    required: ['Amount', 'CreditDebitIndicator', 'Type'],
  })
  .openapi('OBTransactionCashBalance')

const ProprietaryBankTransactionCodeStructure1Schema = z
  .strictObject({
    Code: z
      .string()
      .min(1)
      .max(35)
      .openapi({
        description: 'Proprietary bank transaction code to identify the underlying transaction.',
      }),
    Issuer: z
      .string()
      .min(1)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Identification of the issuer of the proprietary bank transaction code.',
      }),
  })
  .openapi({
    description: 'Set of elements to fully identify a proprietary bank transaction code.',
    required: ['Code'],
  })
  .openapi('ProprietaryBankTransactionCodeStructure1')

const OBTransaction6Schema = z
  .strictObject({
    AccountId: z
      .string()
      .min(1)
      .max(40)
      .openapi({
        description:
          'A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.',
      }),
    Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
    Balance: OBTransactionCashBalanceSchema.exactOptional(),
    BookingDateTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          "Date and time when a transaction entry is posted to an account on the account servicer's books.\r\nUsage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00",
      }),
    CreditDebitIndicator: OBCreditDebitCodeSchema,
    CreditorAccount: OBCashAccount6Schema.exactOptional(),
    DebtorAccount: OBCashAccount6Schema.exactOptional(),
    ProprietaryBankTransactionCode: ProprietaryBankTransactionCodeStructure1Schema.exactOptional(),
    Status: OBEntryStatus1CodeSchema,
    TransactionInformation: z
      .string()
      .min(1)
      .max(500)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Further details of the transaction.\r\nThis is the transaction narrative, which is unstructured text.',
      }),
    TransactionReference: z
      .string()
      .min(1)
      .max(210)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.',
      }),
    ValueDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.\r\nUsage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.\r\nFor transaction entries subject to availability/float and for which availability information is provided, the value date must not be used.In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format.\r\nAll date-time fields in responses must include the timezone.An example is below:\r\n2017-04-05T10:43:07+00:00',
      }),
  })
  .openapi({
    description: 'Provides further details on an entry in the report.',
    required: ['AccountId', 'Amount', 'BookingDateTime', 'CreditDebitIndicator', 'Status'],
  })
  .openapi('OBTransaction6')

const OBReadDataTransaction6Schema = z
  .strictObject({
    Transaction: z
      .array(OBTransaction6Schema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Provides further details on an entry in the report.' }),
  })
  .openapi({ description: '', required: [] })
  .openapi('OBReadDataTransaction6')

const OBReadParty2Schema = z
  .strictObject({
    Data: OBReadDataParty2Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ description: '', required: ['Data'] })
  .openapi('OBReadParty2')

const OBReadParty3Schema = z
  .strictObject({
    Data: OBReadDataParty3Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ description: '', required: ['Data'] })
  .openapi('OBReadParty3')

const OBReadScheduledPayment3Schema = z
  .strictObject({
    Data: OBReadDataScheduledPayment3Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ description: '', required: ['Data'] })
  .openapi('OBReadScheduledPayment3')

const OBReadStandingOrder6Schema = z
  .strictObject({
    Data: OBReadDataStandingOrder5Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ description: '', required: ['Data'] })
  .openapi('OBReadStandingOrder6')

const OBReadStatement2Schema = z
  .strictObject({
    Data: OBReadDataStatement2Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ description: '', required: ['Data'] })
  .openapi('OBReadStatement2')

const OBReadTransaction6Schema = z
  .strictObject({
    Data: OBReadDataTransaction6Schema,
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ description: '', required: ['Data'] })
  .openapi('OBReadTransaction6')

const SandboxBeneficiarySchema = z
  .strictObject({
    name: z.string().nullable().exactOptional().openapi({ description: 'Beneficiary name' }),
  })
  .openapi({ description: 'Beneficiary information', required: [] })
  .openapi('SandboxBeneficiary')

const SandboxBankAccountInfoSchema = z
  .strictObject({
    accountSubType: z
      .string()
      .openapi({ description: "Account's sub-type (ChargeCard, CreditCard, CurrentAccount ...)" }),
    accountType: z.string().openapi({ description: "Account's type (Business, Personal)" }),
    alias: z
      .string()
      .min(1)
      .max(70)
      .nullable()
      .exactOptional()
      .openapi({ description: "Account's alias" }),
    availableBalance: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: "Account's available balance" }),
    currency: z
      .string()
      .regex(/^[A-Z]{3,3}$/)
      .openapi({ description: 'Currency (EUR, USD ...)' }),
    description: z
      .string()
      .min(1)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({ description: "Account's description" }),
    iban: z.string().openapi({ description: "Account's IBAN" }),
    ledgerBalance: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: "Account's ledger balance" }),
    openingDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: "Account's opening date" }),
    overdraftLimit: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: "Account's overdraft limit" }),
  })
  .openapi({
    description: 'General account information',
    required: ['accountSubType', 'accountType', 'currency', 'iban'],
  })
  .openapi('SandboxBankAccountInfo')

const SandboxPartySchema = z
  .strictObject({
    id: z.string().nullable().exactOptional().openapi({ description: 'Party id' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Name' }),
  })
  .openapi({ description: 'Connected party information', required: [] })
  .openapi('SandboxParty')

const SandboxScheduledPaymentSchema = z
  .strictObject({
    amount: z.float64().exactOptional().openapi({ description: 'Amount' }),
    description: z
      .string()
      .min(1)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({ description: "Scheduled payment's short description" }),
    executionDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: "Scheduled payment's execution date" }),
    senderReference: z
      .string()
      .min(1)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Debtor / Sender reference' }),
  })
  .openapi({ description: 'Scheduled payment information', required: [] })
  .openapi('SandboxScheduledPayment')

const SandboxStandingOrderSchema = z
  .strictObject({
    amount: z.float64().exactOptional().openapi({ description: 'Standing order amount' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Standing order short description' }),
    finalPaymentDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Standing order final collection date' }),
    firstPaymentDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Standing order first collection date' }),
    frequency: z.string().min(1).max(35).openapi({ description: 'Standing order frequency' }),
    lastPaymentDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Standing order last executed payment date' }),
    nextPaymentDate: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Standing order next collection date' }),
    status: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Standing order status (Active, Inactive)' }),
  })
  .openapi({ description: 'Standing order information', required: ['frequency'] })
  .openapi('SandboxStandingOrder')

const SandboxStatementSchema = z
  .strictObject({
    month: z.int32().exactOptional().openapi({ description: 'Statement month' }),
    number: z.string().nullable().exactOptional().openapi({ description: 'Statement number' }),
    year: z.int32().exactOptional().openapi({ description: 'Statement year' }),
  })
  .openapi({ description: 'Statement information', required: [] })
  .openapi('SandboxStatement')

const SandboxTransactionSchema = z
  .strictObject({
    accountingBalance: z.float64().exactOptional().openapi({ description: 'Balance' }),
    amount: z.float64().exactOptional().openapi({ description: 'Amount' }),
    bookingDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Booking date time' }),
    creditDebit: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Credit / Debit indicator' }),
    currency: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Currency (EUR, USD ...)' }),
    description: z.string().nullable().exactOptional().openapi({ description: 'Description' }),
    reference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Transaction reference' }),
    relatedAccount: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Related account' }),
    relatedName: z.string().nullable().exactOptional().openapi({ description: 'Related account' }),
    transactionCode: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Transaction code' }),
    valueDateTime: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Valeur' }),
  })
  .openapi({ description: 'Transaction information', required: [] })
  .openapi('SandboxTransaction')

const SandboxBankAccountSchema = z
  .strictObject({
    beneficiaries: z
      .array(SandboxBeneficiarySchema)
      .nullable()
      .exactOptional()
      .openapi({ description: "List of account's beneficiaries" }),
    info: SandboxBankAccountInfoSchema.exactOptional(),
    party: SandboxPartySchema.exactOptional(),
    scheduledPayments: z
      .array(SandboxScheduledPaymentSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: "List of account's scheduled payments" }),
    standingOrders: z
      .array(SandboxStandingOrderSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: "List of account's standing orders" }),
    statements: z
      .array(SandboxStatementSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: "List of account's statements" }),
    transactions: z
      .array(SandboxTransactionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: "List of account's transactions" }),
  })
  .openapi({ description: 'Sandbox bank account', required: [] })
  .openapi('SandboxBankAccount')

const SandboxCardInfoSchema = z
  .strictObject({
    availableBalance: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Available balance' }),
    creditLimit: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Credit limit ( applicable to credit cards )' }),
    description: z.string().nullable().exactOptional().openapi({ description: 'Description' }),
    expiration: z.string().min(1).max(7).openapi({ description: 'Expiration date (05/2022)' }),
    holderName: z.string().openapi({ description: 'Holder name' }),
    ledgerBalance: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Ledger balance' }),
    number: z.string().min(1).max(16).openapi({ description: 'Card number' }),
    subType: z.string().nullable().exactOptional().openapi({ description: 'Sub type' }),
    type: z.string().nullable().exactOptional().openapi({ description: 'Type' }),
  })
  .openapi({
    description: 'Sandbox card information',
    required: ['expiration', 'holderName', 'number'],
  })
  .openapi('SandboxCardInfo')

const SandboxCardSchema = z
  .strictObject({
    info: SandboxCardInfoSchema.exactOptional(),
    party: SandboxPartySchema.exactOptional(),
    statements: z
      .array(SandboxStatementSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Card statements' }),
    transactions: z
      .array(SandboxTransactionSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Card transactions' }),
  })
  .openapi({ description: 'Sandbox card', required: [] })
  .openapi('SandboxCard')

const SandboxRetryCacheEntrySchema = z
  .strictObject({
    cacheKey: z.string().nullable().exactOptional().openapi({ description: 'Cache key' }),
    count: z.int32().exactOptional().openapi({ description: 'Number of retries ( up to 4 )' }),
    expirationTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Expiration timestamp of the entry' }),
  })
  .openapi({
    description: 'Keeps the number of calls without x-fapi-customer-ip-address header present',
    required: [],
  })
  .openapi('SandboxRetryCacheEntry')

const SandboxUserSchema = z
  .strictObject({
    accounts: z
      .array(SandboxBankAccountSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of accounts' }),
    cards: z
      .array(SandboxCardSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of cards' }),
    retryCacheEntries: z
      .array(SandboxRetryCacheEntrySchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Retry cache entries' }),
    userId: z.string().nullable().exactOptional().openapi({ description: 'Connected user id' }),
  })
  .openapi({ description: 'User data', required: [] })
  .openapi('SandboxUser')

const SandboxSchema = z
  .strictObject({
    sandboxId: z
      .string()
      .regex(/^[a-zA-Z0-9_-]+$/)
      .openapi({ description: 'Sandbox id' }),
    users: z
      .array(SandboxUserSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'List of users' }),
  })
  .openapi({ description: 'Sandbox model', required: ['sandboxId'] })
  .openapi('Sandbox')

const SandboxRequestSchema = z
  .strictObject({
    sandboxId: z
      .string()
      .regex(/^[a-zA-Z0-9_-]+$/)
      .openapi({ description: 'Sandbox Id' }),
  })
  .openapi({ description: 'Request to create a new sandbox', required: ['sandboxId'] })
  .openapi('SandboxRequest')

const AuthorizationCodeTokenSecurityScheme = {
  description: 'OAuth2 Authorization Code Flow',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://my.nbg.gr/identity/connect/authorize',
      scopes: {
        'accounts offline_access': 'Production Scope',
        'sandbox-uk-account-info-api-v1 offline_access': 'Sandbox Scope',
      },
      tokenUrl: 'https://my.nbg.gr/identity/connect/token',
    },
  },
  type: 'oauth2',
}

const ClientCredentialsTokenSecurityScheme = {
  description: 'OAuth2 Client Credentials Flow',
  flows: {
    clientCredentials: {
      scopes: { accounts: 'Production Scope', 'sandbox-uk-account-info-api-v1': 'Sandbox Scope' },
      tokenUrl: 'https://my.nbg.gr/identity/connect/token',
    },
  },
  type: 'oauth2',
}

const ClientIdSecurityScheme = {
  description: "Application's Id",
  in: 'header',
  name: 'Client-Id',
  type: 'apiKey',
}

export const postAccountAccessConsentsRoute = createRoute({
  method: 'post',
  path: '/account-access-consents',
  tags: ['AccountAccess'],
  summary: 'Create Account Access Consents',
  description: 'Create Account Access Consents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Default',
      content: {
        'application/json': { schema: OBReadConsent1Schema },
        'application/json; charset=utf-8': { schema: OBReadConsent1Schema },
      },
    },
  },
  responses: {
    201: {
      description: 'Account Access Consents Created',
      content: {
        'application/json': { schema: OBReadConsentResponse1Schema },
        'application/json; charset=utf-8': { schema: OBReadConsentResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    415: {
      description: 'Unsupported Media Type',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    { 'Client-Credentials-Token': ['sandbox-uk-account-info-api-v1', 'accounts'], 'Client-Id': [] },
  ],
})

export const getAccountAccessConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/account-access-consents/{consentId}',
  tags: ['AccountAccess'],
  summary: 'Get Account Access Consents',
  description: 'Get Account Access Consents by Consent ID',
  request: {
    params: z.object({
      consentId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'ConsentId',
            in: 'path',
            name: 'consentId',
            required: true,
            schema: { description: 'ConsentId', nullable: true, type: 'string' },
          },
          description: 'ConsentId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Account Access Consents Read',
      content: {
        'application/json': { schema: OBReadConsentResponse1Schema },
        'application/json; charset=utf-8': { schema: OBReadConsentResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    { 'Client-Credentials-Token': ['sandbox-uk-account-info-api-v1', 'accounts'], 'Client-Id': [] },
  ],
})

export const deleteAccountAccessConsentsConsentIdRoute = createRoute({
  method: 'delete',
  path: '/account-access-consents/{consentId}',
  tags: ['AccountAccess'],
  summary: 'Delete Account Access Consents',
  description: 'Delete Account Access Consents by Consent ID',
  request: {
    params: z.object({
      consentId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'ConsentId',
            in: 'path',
            name: 'consentId',
            required: true,
            schema: { description: 'ConsentId', nullable: true, type: 'string' },
          },
          description: 'ConsentId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Account Access Consents Deleted',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    { 'Client-Credentials-Token': ['sandbox-uk-account-info-api-v1', 'accounts'], 'Client-Id': [] },
  ],
})

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Get Accounts',
  description: 'Get Accounts',
  request: {
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Accounts Read',
      content: {
        'application/json': { schema: OBReadAccount5Schema },
        'application/json; charset=utf-8': { schema: OBReadAccount5Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}',
  tags: ['Accounts'],
  summary: 'Get Accounts',
  description: 'Get Accounts by Account ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Accounts Read',
      content: {
        'application/json': { schema: OBReadAccount5Schema },
        'application/json; charset=utf-8': { schema: OBReadAccount5Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdBalancesRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/balances',
  tags: ['Balances'],
  summary: 'Get Balances',
  description: 'Get Balances by Account ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Balances Read',
      content: {
        'application/json': { schema: OBReadBalance1Schema },
        'application/json; charset=utf-8': { schema: OBReadBalance1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdBeneficiariesRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/beneficiaries',
  tags: ['Beneficiaries'],
  summary: 'Get Beneficiaries',
  description: 'Get Beneficiaries by Account ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Beneficiaries Read',
      content: {
        'application/json': { schema: OBReadBeneficiary5Schema },
        'application/json; charset=utf-8': { schema: OBReadBeneficiary5Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdPartiesRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/parties',
  tags: ['Parties'],
  summary: 'Get Parties',
  description: 'Get Parties by Account ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Party Read',
      content: {
        'application/json': { schema: OBReadParty3Schema },
        'application/json; charset=utf-8': { schema: OBReadParty3Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdPartyRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/party',
  tags: ['Parties'],
  summary: 'Get Party',
  description: 'Get Party by Account ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Party Read',
      content: {
        'application/json': { schema: OBReadParty2Schema },
        'application/json; charset=utf-8': { schema: OBReadParty2Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdScheduledPaymentsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/scheduled-payments',
  tags: ['ScheduledPayments'],
  summary: 'Get Scheduled Payments',
  description: 'Get Scheduled Payments by Account ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Scheduled Payments Read',
      content: {
        'application/json': { schema: OBReadScheduledPayment3Schema },
        'application/json; charset=utf-8': { schema: OBReadScheduledPayment3Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdStandingOrdersRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/standing-orders',
  tags: ['StandingOrders'],
  summary: 'Get Standing Orders',
  description: 'Get Standing Orders by Account ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Standing Orders Read',
      content: {
        'application/json': { schema: OBReadStandingOrder6Schema },
        'application/json; charset=utf-8': { schema: OBReadStandingOrder6Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdStatementsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/statements',
  tags: ['Statements'],
  summary: 'Get Statements',
  description: 'Get Statements by Account ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
    }),
    query: z.object({
      fromStatementDateTime: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
            in: 'query',
            name: 'fromStatementDateTime',
            schema: {
              description:
                'The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'The UTC ISO 8601 Date Time to filter statements FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
        }),
      toStatementDateTime: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
            in: 'query',
            name: 'toStatementDateTime',
            schema: {
              description:
                'The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'The UTC ISO 8601 Date Time to filter statements TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Statements Read',
      content: {
        'application/json': { schema: OBReadStatement2Schema },
        'application/json; charset=utf-8': { schema: OBReadStatement2Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdStatementsStatementIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/statements/{statementId}',
  tags: ['Statements'],
  summary: 'Get Statements',
  description: 'Get Statements by Account ID and Statement ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
      statementId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'StatementId',
            in: 'path',
            name: 'statementId',
            required: true,
            schema: { description: 'StatementId', nullable: true, type: 'string' },
          },
          description: 'StatementId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Statements Read',
      content: {
        'application/json': { schema: OBReadStatement2Schema },
        'application/json; charset=utf-8': { schema: OBReadStatement2Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdStatementsStatementIdFileRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/statements/{statementId}/file',
  tags: ['Statements'],
  summary: 'Get Statements',
  description: 'Get Statement PDF File by Account ID and Statement ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
      statementId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'StatementId',
            in: 'path',
            name: 'statementId',
            required: true,
            schema: { description: 'StatementId', nullable: true, type: 'string' },
          },
          description: 'StatementId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Statements Read',
      content: {
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: { 'application/pdf': { schema: OBErrorResponse1Schema } },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: { 'application/pdf': { schema: OBErrorResponse1Schema } },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/pdf': { schema: OBErrorResponse1Schema } },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdStatementsStatementIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/statements/{statementId}/transactions',
  tags: ['Transactions'],
  summary: 'Get Transactions',
  description: 'Get Transactions by Account ID and Statement ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
      statementId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'StatementId',
            in: 'path',
            name: 'statementId',
            required: true,
            schema: { description: 'StatementId', nullable: true, type: 'string' },
          },
          description: 'StatementId',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Transactions Read',
      content: {
        'application/json': { schema: OBReadTransaction6Schema },
        'application/json; charset=utf-8': { schema: OBReadTransaction6Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getAccountsAccountIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/transactions',
  tags: ['Transactions'],
  summary: 'Get Transactions',
  description: 'Get Transactions by Account ID',
  request: {
    params: z.object({
      accountId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'AccountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { description: 'AccountId', nullable: true, type: 'string' },
          },
          description: 'AccountId',
        }),
    }),
    query: z.object({
      fromBookingDateTime: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
            in: 'query',
            name: 'fromBookingDateTime',
            schema: {
              description:
                'The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
        }),
      toBookingDateTime: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(
        z.iso.datetime({ offset: true }).nullable(),
      )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
            in: 'query',
            name: 'toBookingDateTime',
            schema: {
              description:
                'The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
              format: 'date-time',
              nullable: true,
              type: 'string',
            },
            required: false,
          },
          description:
            'The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.',
        }),
    }),
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Transactions Read',
      content: {
        'application/json': { schema: OBReadTransaction6Schema },
        'application/json; charset=utf-8': { schema: OBReadTransaction6Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getPartyRoute = createRoute({
  method: 'get',
  path: '/party',
  tags: ['Parties'],
  summary: 'Get Party',
  description: 'Get Party',
  request: {
    headers: z.object({
      'x-fapi-auth-date': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The time when the PSU last logged in with the TPP.\r\nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:\r\nSun, 10 Sep 2017 19:43:31 UTC',
            in: 'header',
            name: 'x-fapi-auth-date',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-customer-ip-address': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
            in: 'header',
            name: 'x-fapi-customer-ip-address',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-fapi-interaction-id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'An RFC4122 UID used as a correlation id.',
            in: 'header',
            name: 'x-fapi-interaction-id',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-customer-user-agent': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates the user-agent that the PSU is using.',
            in: 'header',
            name: 'x-customer-user-agent',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'sandbox-id': z
        .string()
        .openapi({
          param: {
            description: 'The unique id of the sandbox to be used',
            in: 'header',
            name: 'sandbox-id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Party Read',
      content: {
        'application/json': { schema: OBReadParty2Schema },
        'application/json; charset=utf-8': { schema: OBReadParty2Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: OBErrorResponse1Schema },
        'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const putSandboxRoute = createRoute({
  method: 'put',
  path: '/sandbox',
  tags: ['Sandbox'],
  summary: 'Import Sandbox',
  description: 'Import Sandbox',
  request: {
    body: {
      description: 'Sandbox',
      content: {
        'application/json': { schema: SandboxSchema },
        'application/json; charset=utf-8': { schema: SandboxSchema },
      },
    },
  },
  responses: {
    204: {
      description: 'No Content',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/json; charset=utf-8': { schema: ErrorResponseSchema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    415: {
      description: 'Unsupported Media Type',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/json; charset=utf-8': { schema: ErrorResponseSchema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const postSandboxRoute = createRoute({
  method: 'post',
  path: '/sandbox',
  tags: ['Sandbox'],
  summary: 'Create Sandbox',
  description: 'Create Sandbox',
  request: {
    body: {
      description: 'SandboxRequest',
      content: {
        'application/json': { schema: SandboxRequestSchema },
        'application/json; charset=utf-8': { schema: SandboxRequestSchema },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': { schema: SandboxSchema },
        'application/json; charset=utf-8': { schema: SandboxSchema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/json; charset=utf-8': { schema: ErrorResponseSchema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    415: {
      description: 'Unsupported Media Type',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/json; charset=utf-8': { schema: ErrorResponseSchema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const getSandboxSandboxIdRoute = createRoute({
  method: 'get',
  path: '/sandbox/{sandboxId}',
  tags: ['Sandbox'],
  summary: 'Export Sandbox',
  description: 'Export Sandbox',
  request: {
    params: z.object({
      sandboxId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Sandbox Id',
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { description: 'Sandbox Id', nullable: true, type: 'string' },
          },
          description: 'Sandbox Id',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SandboxSchema },
        'application/json; charset=utf-8': { schema: SandboxSchema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/json; charset=utf-8': { schema: ErrorResponseSchema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/json; charset=utf-8': { schema: ErrorResponseSchema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

export const deleteSandboxSandboxIdRoute = createRoute({
  method: 'delete',
  path: '/sandbox/{sandboxId}',
  tags: ['Sandbox'],
  summary: 'Delete Sandbox',
  description: 'Delete Sandbox',
  request: {
    params: z.object({
      sandboxId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Sandbox Id',
            in: 'path',
            name: 'sandboxId',
            required: true,
            schema: { description: 'Sandbox Id', nullable: true, type: 'string' },
          },
          description: 'Sandbox Id',
        }),
    }),
  },
  responses: {
    204: {
      description: 'No Content',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/json; charset=utf-8': { schema: ErrorResponseSchema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    401: {
      description: 'Unauthorized',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    404: {
      description: 'Not Found',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    405: {
      description: 'Method Not Allowed',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    406: {
      description: 'Not Acceptable',
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': { schema: ErrorResponseSchema },
        'application/json; charset=utf-8': { schema: ErrorResponseSchema },
      },
      headers: z.object({
        'x-fapi-interaction-id': {
          description: 'An RFC4122 UID used as a correlation id',
          schema: z
            .string()
            .exactOptional()
            .openapi({
              description: 'An RFC4122 UID used as a correlation id',
              param: { required: false },
            }),
        },
      }),
    },
  },
  security: [
    {
      'Authorization-Code-Token': [
        'sandbox-uk-account-info-api-v1 offline_access',
        'accounts offline_access',
      ],
      'Client-Id': [],
    },
  ],
})

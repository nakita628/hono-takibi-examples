import { createRoute, z } from '@hono/zod-openapi'

const HrefEntrySchema = z
  .string()
  .openapi({
    description: 'Link to a resource.',
    example: '/v1/payments/swiss-sepa-credit-transfers/1234-wertiq-983',
  })
  .openapi('HrefEntry')

const HrefTypeSchema = z
  .object({ href: HrefEntrySchema.exactOptional() })
  .openapi({ description: 'Link to a resource.', required: [] })
  .openapi('HrefType')

const LinksAccountDetailsSchema = z
  .object({
    balances: HrefTypeSchema.exactOptional(),
    transactions: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      'Links to the account, which can be directly used for retrieving account information from this dedicated account.\n\nLinks to "balances" and/or "transactions"\n\nThese links are only supported, when the corresponding consent has been already granted.\n',
  })
  .openapi('LinksAccountDetails')

const AmountValueSchema = z
  .string()
  .regex(/-?[0-9]{1,14}(\.[0-9]{1,3})?/)
  .openapi({
    description:
      'The amount given with fractional digits, where fractions must be compliant to the currency definition.\nUp to 14 significant figures. Negative amounts are signed by minus.\nThe decimal separator is a dot.\n\n**Example:**\nValid representations for EUR with up to two decimals are:\n\n  * 1056\n  * 5768.2\n  * -1.50\n  * 5877.78\n',
    example: '5877.78',
  })
  .openapi('AmountValue')

const CurrencyCodeSchema = z
  .string()
  .regex(/[A-Z]{3}/)
  .openapi({ description: 'ISO 4217 Alpha 3 currency code.\n', example: 'EUR' })
  .openapi('CurrencyCode')

const AmountSchema = z
  .object({ amount: AmountValueSchema, currency: CurrencyCodeSchema })
  .openapi({ example: { amount: '123', currency: 'EUR' }, required: ['currency', 'amount'] })
  .openapi('Amount')

const BalanceTypeSchema = z
  .enum([
    'closingBooked',
    'expected',
    'openingBooked',
    'interimAvailable',
    'interimBooked',
    'forwardAvailable',
    'nonInvoiced',
  ])
  .openapi({
    description:
      'The following balance types are defined:\n  - "closingBooked":\n    Balance of the account at the end of the pre-agreed account reporting period.\n    It is the sum of the opening booked balance at the beginning of the period and all entries booked\n    to the account during the pre-agreed account reporting period.\n\n    For card-accounts, this is composed of\n\n      - invoiced, but not yet paid entries\n\n  - "expected":\n    Balance composed of booked entries and pending items known at the time of calculation,\n    which projects the end of day balance if everything is booked on the account and no other entry is posted.\n    \n    For card accounts, this is composed of:\n      - invoiced, but not yet paid entries\n      - not yet invoiced but already booked entries and\n      - pending items (not yet booked)\n    \n    For card-accounts:\n\n    "money to spend with the value of a pre-approved credit limit on the card account"\n\n  - "openingBooked":\n    Book balance of the account at the beginning of the account reporting period.\n    It always equals the closing book balance from the previous report.\n  - "interimAvailable":\n    Available balance calculated in the course of the account ?servicer?s business day,\n    at the time specified, and subject to further changes during the business day.\n    The interim balance is calculated on the basis of booked credit and debit items during the calculation\n    time/period specified.\n    \n    For card-accounts, this is composed of:\n      - invoiced, but not yet paid entries\n      - not yet invoiced but already booked entries\n  - "interimBooked":\n    Balance calculated in the course of the account servicer\'s business day, at the time specified,\n    and subject to further changes during the business day.\n    The interim balance is calculated on the basis of booked credit and debit items during the calculation time/period\n    specified.\n  - "forwardAvailable":\n    Forward available balance of money that is at the disposal of the account owner on the date specified.\n  - "nonInvoiced":\n    Only for card accounts, to be checked yet.\n',
  })
  .openapi('BalanceType')

const BalanceSchema = z
  .object({
    balanceAmount: AmountSchema,
    balanceType: BalanceTypeSchema,
    creditLimitIncluded: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag indicating if the credit limit of the corresponding account\nis included in the calculation of the balance, where applicable.\n',
        example: false,
      }),
    lastChangeDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'This data element might be used to indicate e.g. with the expected or booked balance that no action is known\non the account, which is not yet booked.\n',
      }),
    lastCommittedTransaction: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({
        description:
          '"entryReference" of the last commited transaction to support the TPP in identifying whether all\nPSU transactions are already known.\n',
      }),
    referenceDate: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Indicates the date of the balance.' }),
  })
  .openapi({
    description: 'A single balance element.\n',
    required: ['balanceAmount', 'balanceType'],
  })
  .openapi('Balance')

const BalanceListSchema = z
  .array(BalanceSchema)
  .openapi({
    description:
      'A list of balances regarding this account, e.g. the current balance, the last booked balance.\nThe list might be restricted to the current balance.\n',
  })
  .openapi('BalanceList')

const BbanSchema = z
  .string()
  .regex(/[a-zA-Z0-9]{1,30}/)
  .openapi({
    description:
      'Basic Bank Account Number (BBAN) Identifier.\n\nThis data element can be used in the body of the consent request.\n  Message for retrieving account access consent from this account. This\n  data elements is used for payment accounts which have no IBAN.\n  ISO20022: Basic Bank Account Number (BBAN). \n  \n  Identifier used nationally by financial institutions, i.e., in individual countries, \n  generally as part of a National Account Numbering Scheme(s), \n  which uniquely identifies the account of a customer.\n',
    example: 'BARC12345612345678',
  })
  .openapi('Bban')

const BicfiSchema = z
  .string()
  .regex(/[A-Z]{6,6}[A-Z2-9][A-NP-Z0-9]([A-Z0-9]{3,3}){0,1}/)
  .openapi({ description: 'BICFI\n', example: 'AAAADEBBXXX' })
  .openapi('Bicfi')

const CashAccountTypeSchema = z
  .string()
  .openapi({ description: 'ExternalCashAccountType1Code from ISO 20022.\n' })
  .openapi('CashAccountType')

const DisplayNameSchema = z
  .string()
  .max(70)
  .openapi({ description: 'Name of the account as defined by the PSU within online channels.\n' })
  .openapi('DisplayName')

const IbanSchema = z
  .string()
  .regex(/[A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}/)
  .openapi({ description: 'IBAN of an account.', example: 'FR7612345987650123456789014' })
  .openapi('Iban')

const MsisdnSchema = z
  .string()
  .max(35)
  .openapi({ description: 'Mobile phone number.', example: '+49 170 1234567' })
  .openapi('Msisdn')

const OwnerNameSchema = z
  .string()
  .max(140)
  .openapi({
    description:
      'Name of the legal account owner. \nIf there is more than one owner, then e.g. two names might be noted here.\n\nFor a corporate account, the corporate name is used for this attribute.\nEven if supported by the ASPSP, the provision of this field might depend on the fact whether an explicit consent to this specific additional account information has been given by the PSU.\n',
    example: 'John Doe',
  })
  .openapi('OwnerName')

const AccountStatusSchema = z
  .enum(['enabled', 'deleted', 'blocked'])
  .openapi({
    description:
      'Account status. The value is one of the following:\n  - "enabled": account is available\n  - "deleted": account is terminated\n  - "blocked": account is blocked e.g. for legal reasons\nIf this field is not used, than the account is available in the sense of this specification.\n',
  })
  .openapi('AccountStatus')

type AccountDetailsType = {
  _links?: z.infer<typeof LinksAccountDetailsSchema>
  balances?: z.infer<typeof BalanceListSchema>
  bban?: z.infer<typeof BbanSchema>
  bic?: z.infer<typeof BicfiSchema>
  cashAccountType?: z.infer<typeof CashAccountTypeSchema>
  currency: z.infer<typeof CurrencyCodeSchema>
  details?: string
  displayName?: z.infer<typeof DisplayNameSchema>
  iban?: z.infer<typeof IbanSchema>
  linkedAccounts?: string
  msisdn?: z.infer<typeof MsisdnSchema>
  name?: string
  ownerName?: z.infer<typeof OwnerNameSchema>
  product?: string
  resourceId?: string
  status?: z.infer<typeof AccountStatusSchema>
  usage?: 'PRIV' | 'ORGA'
}

const LinksAccountReportSchema = z
  .object({
    account: HrefTypeSchema,
    first: HrefTypeSchema.exactOptional(),
    last: HrefTypeSchema.exactOptional(),
    next: HrefTypeSchema.exactOptional(),
    previous: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({ required: ['account'] })
  .openapi('LinksAccountReport')

const LinksTransactionDetailsSchema = z
  .object({ transactionDetails: HrefTypeSchema })
  .catchall(HrefTypeSchema)
  .openapi({ required: ['transactionDetails'] })
  .openapi('LinksTransactionDetails')

const AdditionalInformationSchema = z
  .string()
  .max(500)
  .openapi({
    description:
      'Might be used by the ASPSP to transport additional transaction related information to the PSU\n',
    example: 'Some additional transaction related information.',
  })
  .openapi('AdditionalInformation')

const DayOfExecutionSchema = z
  .enum([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ])
  .openapi({
    description:
      'Day of execution as string.\n\nThis string consists of up two characters.\nLeading zeroes are not allowed.\n\n31 is ultimo of the month.\n',
  })
  .openapi('DayOfExecution')

const EndDateSchema = z.iso
  .date()
  .openapi({
    description:
      'The last applicable day of execution.\nIf not given, it is an infinite standing order.\n',
  })
  .openapi('EndDate')

const ExecutionRuleSchema = z
  .enum(['following', 'preceding'])
  .openapi({
    description:
      '"following" or "preceding" supported as values.\nThis data attribute defines the behaviour when recurring payment dates falls on a weekend or bank holiday.\nThe payment is then executed either the "preceding" or "following" working day.\nASPSP might reject the request due to the communicated value, if rules in Online-Banking are not supporting\nthis execution rule.\n',
  })
  .openapi('ExecutionRule')

const FrequencyCodeSchema = z
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
  .openapi({
    description:
      'The following codes from the "EventFrequency7Code" of ISO 20022 are supported:\n- "Daily"\n- "Weekly"\n- "EveryTwoWeeks"\n- "Monthly"\n- "EveryTwoMonths"\n- "Quarterly"\n- "SemiAnnual"\n- "Annual"\n- "MonthlyVariable"\n',
  })
  .openapi('FrequencyCode')

const MonthsOfExecutionSchema = z
  .array(z.enum(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']))
  .openapi({
    description:
      'The format is following the regular expression \\d{1,2}. \nThe array is restricted to 11 entries. \nThe values contained in the array entries shall all be different and the maximum value of one entry is 12.\nThis attribute is contained if and only if the frequency equals "MonthlyVariable".\nExample: An execution on January, April and October each year is addressed by ["1", "4", "10"].\n',
  })
  .openapi('MonthsOfExecution')

const StartDateSchema = z.iso
  .date()
  .openapi({
    description:
      'The first applicable day of execution starting from this date is the first payment.\n',
  })
  .openapi('StartDate')

const StandingOrderDetailsSchema = z
  .object({
    dayOfExecution: DayOfExecutionSchema.exactOptional(),
    endDate: EndDateSchema.exactOptional(),
    executionRule: ExecutionRuleSchema.exactOptional(),
    frequency: FrequencyCodeSchema,
    limitAmount: AmountSchema.exactOptional(),
    monthsOfExecution: MonthsOfExecutionSchema.exactOptional(),
    multiplicator: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'This is multiplying the given frequency resulting the exact frequency,\ne.g. Frequency=weekly and multiplicator=3 means every 3 weeks.\nRemark: This attribute is rarely supported in the market.\n',
      }),
    startDate: StartDateSchema,
    withinAMonthFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This element is only used in case of frequency equals "Monthly".\n\nIf this element equals false it has no effect.\nIf this element equals true, then the execution rule is overruled if the day of execution would fall into a different month using the execution rule.\n\nExample: executionRule equals "preceding", dayOfExecution equals "02" and the second of a month is a Sunday. \nIn this case, the transaction date would be on the last day of the month before.\n This would be overruled if withinAMonthFlag equals true and the payment is processed on Monday the third of the Month.\nRemark: This attribute is rarely supported in the market.\n',
      }),
  })
  .openapi({
    description: 'Details of underlying standing orders.\n',
    required: ['startDate', 'frequency'],
  })
  .openapi('StandingOrderDetails')

const AdditionalInformationStructuredSchema = z
  .object({ standingOrderDetails: StandingOrderDetailsSchema })
  .openapi({
    description:
      'Is used if and only if the bookingStatus entry equals "information". \nEvery active standing order related to the dedicated payment account result into one entry.\n',
    required: ['standingOrderDetails'],
  })
  .openapi('AdditionalInformationStructured')

const BankTransactionCodeSchema = z
  .string()
  .openapi({
    description:
      "Bank transaction code as used by the ASPSP and using the sub elements of this structured code defined by ISO 20022.\n\nThis code type is concatenating the three ISO20022 Codes\n  * Domain Code,\n  * Family Code, and\n  * SubFamiliy Code\nby hyphens, resulting in 'DomainCode'-'FamilyCode'-'SubFamilyCode'.\n",
    example: 'PMNT-RDDT-ESDD',
  })
  .openapi('BankTransactionCode')

const BookingDateSchema = z.iso
  .date()
  .openapi({ description: 'The date when an entry is posted to an account on the ASPSPs books.\n' })
  .openapi('BookingDate')

const OtherAccountIdentification1CHSchema = z
  .string()
  .max(34)
  .openapi({
    description:
      'Other payment account Identifier.\nadapted from ISO pain.001.001.03.ch.02 GenericAccountIdentification1-CH\n',
    example: '90-100100-0',
  })
  .openapi('OtherAccountIdentification1CH')

const AccountReference16CHSchema = z
  .object({
    cashAccountType: CashAccountTypeSchema.exactOptional(),
    currency: CurrencyCodeSchema.exactOptional(),
    iban: IbanSchema.exactOptional(),
    otherAccountIdentification: OtherAccountIdentification1CHSchema.exactOptional(),
  })
  .openapi({
    description:
      'Reference to an account by either\n  * IBAN, of a payment accounts, or\n  * otherAccountIdentification, for payment accounts if there is no IBAN\nadapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy\n',
    required: [],
  })
  .openapi('AccountReference16CH')

const CreditorIdSchema = z
  .string()
  .max(35)
  .openapi({
    description: 'Identification of Creditors, e.g. a SEPA Creditor ID.',
    example: 'Creditor Id 5678',
  })
  .openapi('CreditorId')

const CreditorNameSchema = z
  .string()
  .max(70)
  .openapi({ description: 'Creditor name.', example: 'Creditor Name' })
  .openapi('CreditorName')

const ReportExchangeRateSchema = z
  .object({
    contractIdentification: z.string().exactOptional(),
    exchangeRate: z.string(),
    quotationDate: z.iso.date(),
    sourceCurrency: CurrencyCodeSchema,
    targetCurrency: CurrencyCodeSchema,
    unitCurrency: z.string(),
  })
  .openapi({
    description: 'Exchange Rate.',
    required: ['sourceCurrency', 'exchangeRate', 'unitCurrency', 'targetCurrency', 'quotationDate'],
  })
  .openapi('ReportExchangeRate')

const ReportExchangeRateListSchema = z
  .array(ReportExchangeRateSchema)
  .openapi({ description: 'Array of exchange rates.' })
  .openapi('ReportExchangeRateList')

const DebtorNameSchema = z
  .string()
  .max(70)
  .openapi({ description: 'Debtor name.', example: 'Debtor Name' })
  .openapi('DebtorName')

const PurposeCodeSchema = z
  .enum(['SALA', 'PENS'])
  .openapi({
    description:
      'ExternalPurpose1Code from ISO 20022.\n\nValues from ISO 20022 External Code List ExternalCodeSets_1Q2018 June 2018.\n',
  })
  .openapi('PurposeCode')

const RemittanceInformationStructuredSchema = z
  .object({
    SCORorQRRorIPI: z.enum(['SCOR', 'QRR', 'IPI']).exactOptional().openapi({ example: 'SCOR' }),
    additionalRemittanceInformation: z.string().max(140).exactOptional(),
    reference: z.string().max(35).openapi({ example: '15 00011 23456 78901 23456 78901' }),
    referenceIssuer: z.string().max(35).exactOptional(),
    referenceType: z.string().max(35).exactOptional(),
  })
  .openapi({ description: 'Structured remittance information.\n', required: ['reference'] })
  .openapi('RemittanceInformationStructured')

const RemittanceInformationStructuredArraySchema = z
  .array(RemittanceInformationStructuredSchema)
  .openapi({ description: 'Array of structured remittance information.\n' })
  .openapi('RemittanceInformationStructuredArray')

const RemittanceInformationUnstructuredSchema = z
  .string()
  .max(140)
  .openapi({
    description: 'Unstructured remittance information.\n',
    example: 'Ref Number Merchant',
  })
  .openapi('RemittanceInformationUnstructured')

const RemittanceInformationUnstructuredArraySchema = z
  .array(RemittanceInformationUnstructuredSchema)
  .openapi({
    description: 'Array of unstructured remittance information.\n',
    example: ['Ref Number Merchant', 'Some Other Text'],
  })
  .openapi('RemittanceInformationUnstructuredArray')

const UltimateCreditorSchema = z
  .string()
  .max(70)
  .openapi({ description: 'Ultimate creditor.', example: 'Ultimate Creditor' })
  .openapi('UltimateCreditor')

const UltimateDebtorSchema = z
  .string()
  .max(70)
  .openapi({ description: 'Ultimate debtor.', example: 'Ultimate Debtor' })
  .openapi('UltimateDebtor')

const EntryDetailsElementSchema = z
  .object({
    checkId: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({ description: 'Identification of a Cheque.' }),
    creditorAccount: AccountReference16CHSchema.exactOptional(),
    creditorAgent: BicfiSchema.exactOptional(),
    creditorId: CreditorIdSchema.exactOptional(),
    creditorName: CreditorNameSchema.exactOptional(),
    currencyExchange: ReportExchangeRateListSchema.exactOptional(),
    debtorAccount: AccountReference16CHSchema.exactOptional(),
    debtorAgent: BicfiSchema.exactOptional(),
    debtorName: DebtorNameSchema.exactOptional(),
    endToEndId: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({ description: 'Unique end to end identity.' }),
    mandateId: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({ description: 'Identification of Mandates, e.g. a SEPA Mandate ID.' }),
    purposeCode: PurposeCodeSchema.exactOptional(),
    remittanceInformationStructured: RemittanceInformationStructuredSchema.exactOptional(),
    remittanceInformationStructuredArray:
      RemittanceInformationStructuredArraySchema.exactOptional(),
    remittanceInformationUnstructured: RemittanceInformationUnstructuredSchema.exactOptional(),
    remittanceInformationUnstructuredArray:
      RemittanceInformationUnstructuredArraySchema.exactOptional(),
    transactionAmount: AmountSchema,
    ultimateCreditor: UltimateCreditorSchema.exactOptional(),
    ultimateDebtor: UltimateDebtorSchema.exactOptional(),
  })
  .openapi({ required: ['transactionAmount'] })
  .openapi('EntryDetailsElement')

const EntryDetailsSchema = z
  .array(EntryDetailsElementSchema)
  .openapi({
    description:
      'Might be used by the ASPSP to transport details about transactions within a batch.\n',
  })
  .openapi('EntryDetails')

const EntryReferenceSchema = z
  .string()
  .max(35)
  .openapi({
    description:
      'Is the identification of the transaction as used e.g. for reference for deltafunction on application level.\nThe same identification as for example used within camt.05x messages.\n',
  })
  .openapi('EntryReference')

const ProprietaryBankTransactionCodeSchema = z
  .string()
  .max(35)
  .openapi({
    description:
      'Proprietary bank transaction code as used within a community or within an ASPSP e.g.\nfor MT94x based transaction reports.\n',
  })
  .openapi('ProprietaryBankTransactionCode')

const RemittanceInformationStructuredMax140Schema = z
  .string()
  .max(140)
  .openapi({ description: 'Structured remittance information Max\n' })
  .openapi('RemittanceInformationStructuredMax140')

const TransactionIdSchema = z
  .string()
  .openapi({
    description:
      'This identification is given by the attribute transactionId of the corresponding entry of a transaction list.\n',
    example: '3dc3d5b3-7023-4848-9853-f5400a64e80f',
  })
  .openapi('TransactionId')

const TransactionsSchema = z
  .object({
    _links: LinksTransactionDetailsSchema.exactOptional(),
    additionalInformation: AdditionalInformationSchema.exactOptional(),
    additionalInformationStructured: AdditionalInformationStructuredSchema.exactOptional(),
    balanceAfterTransaction: BalanceSchema.exactOptional(),
    bankTransactionCode: BankTransactionCodeSchema.exactOptional(),
    batchIndicator: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If this indicator equals true, then the related entry is a batch entry.\n',
      }),
    batchNumberOfTransactions: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Shall be used if and only if the batchIndicator is contained and equals true.\n',
      }),
    bookingDate: BookingDateSchema.exactOptional(),
    checkId: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({ description: 'Identification of a Cheque.' }),
    creditorAccount: AccountReference16CHSchema.exactOptional(),
    creditorAgent: BicfiSchema.exactOptional(),
    creditorId: CreditorIdSchema.exactOptional(),
    creditorName: CreditorNameSchema.exactOptional(),
    currencyExchange: ReportExchangeRateListSchema.exactOptional(),
    debtorAccount: AccountReference16CHSchema.exactOptional(),
    debtorAgent: BicfiSchema.exactOptional(),
    debtorName: DebtorNameSchema.exactOptional(),
    endToEndId: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({ description: 'Unique end to end identity.' }),
    entryDetails: EntryDetailsSchema.exactOptional(),
    entryReference: EntryReferenceSchema.exactOptional(),
    mandateId: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({ description: 'Identification of Mandates, e.g. a SEPA Mandate ID.' }),
    proprietaryBankTransactionCode: ProprietaryBankTransactionCodeSchema.exactOptional(),
    purposeCode: PurposeCodeSchema.exactOptional(),
    remittanceInformationStructured: RemittanceInformationStructuredMax140Schema.exactOptional(),
    remittanceInformationStructuredArray:
      RemittanceInformationStructuredArraySchema.exactOptional(),
    remittanceInformationUnstructured: RemittanceInformationUnstructuredSchema.exactOptional(),
    remittanceInformationUnstructuredArray:
      RemittanceInformationUnstructuredArraySchema.exactOptional(),
    transactionAmount: AmountSchema,
    transactionId: TransactionIdSchema.exactOptional(),
    ultimateCreditor: UltimateCreditorSchema.exactOptional(),
    ultimateDebtor: UltimateDebtorSchema.exactOptional(),
    valueDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The Date at which assets become available to the account owner in case of a credit.',
      }),
  })
  .openapi({ description: 'Transaction details.', required: ['transactionAmount'] })
  .openapi('Transactions')

const TransactionListSchema = z
  .array(TransactionsSchema)
  .openapi({ description: 'Array of transaction details.' })
  .openapi('TransactionList')

type AccountReportType = {
  _links: z.infer<typeof LinksAccountReportSchema>
  booked?: z.infer<typeof TransactionListSchema>
  information?: z.infer<typeof TransactionListSchema>
  pending?: z.infer<typeof TransactionListSchema>
}

const LinksCardAccountReportSchema = z
  .object({
    card: HrefTypeSchema.exactOptional(),
    cardAccount: HrefTypeSchema.exactOptional(),
    first: HrefTypeSchema.exactOptional(),
    last: HrefTypeSchema.exactOptional(),
    next: HrefTypeSchema.exactOptional(),
    previous: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi('LinksCardAccountReport')

const CountryCodeSchema = z
  .string()
  .regex(/[A-Z]{2}/)
  .openapi({ description: 'ISO 3166 ALPHA2 country code.', example: 'SE' })
  .openapi('CountryCode')

const AddressSchema = z
  .object({
    buildingNumber: z.string().exactOptional(),
    country: CountryCodeSchema,
    postCode: z.string().exactOptional(),
    streetName: z.string().max(70).exactOptional(),
    townName: z.string().exactOptional(),
  })
  .openapi({
    example: {
      buildingnNumber: '89',
      country: 'FR',
      postCode: '75000',
      streetName: 'rue blue',
      townName: 'Paris',
    },
    required: ['country'],
  })
  .openapi('Address')

const CardAcceptorPhoneSchema = z
  .string()
  .regex(/\+[0-9]{1,3}\-[0-9()+\-]{1,30}/)
  .openapi({
    description:
      'Merchant phone number\nIt consists of a "+" followed by the country code (from 1 to 3 characters) then a "-" and finally, any\ncombination of numbers, "(", ")", "+" and "-" (up to 30 characters).\npattern according to ISO20022 \\+[0-9]{1,3}-[0-9()+\\-]{1,30}\n',
  })
  .openapi('CardAcceptorPhone')

const CardTransactionIdSchema = z
  .string()
  .max(35)
  .openapi({ description: 'Unique end to end identity.' })
  .openapi('CardTransactionId')

const MaskedPanSchema = z
  .string()
  .max(35)
  .openapi({ description: 'Masked Primary Account Number.\n', example: '123456xxxxxx1234' })
  .openapi('MaskedPan')

const MerchantCategoryCodeSchema = z
  .string()
  .length(4)
  .openapi({ description: 'Merchant category code.' })
  .openapi('MerchantCategoryCode')

const TerminalIdSchema = z
  .string()
  .max(35)
  .openapi({ description: 'Identification of the Terminal, where the card has been used.' })
  .openapi('TerminalId')

const TransactionDateSchema = z.iso
  .date()
  .openapi({ description: 'Date of the actual card transaction.' })
  .openapi('TransactionDate')

const CardTransactionSchema = z
  .object({
    acceptorTransactionDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Timestamp of the actual card transaction within the acceptance system',
      }),
    bookingDate: BookingDateSchema.exactOptional(),
    cardAcceptorAddress: AddressSchema.exactOptional(),
    cardAcceptorId: z.string().max(35).exactOptional(),
    cardAcceptorPhone: CardAcceptorPhoneSchema.exactOptional(),
    cardTransactionId: CardTransactionIdSchema.exactOptional(),
    currencyExchange: ReportExchangeRateListSchema.exactOptional(),
    invoiced: z.boolean().exactOptional(),
    markupFee: AmountSchema.exactOptional(),
    markupFeePercentage: z.string().exactOptional().openapi({ example: '0.3' }),
    maskedPAN: MaskedPanSchema.exactOptional(),
    merchantCategoryCode: MerchantCategoryCodeSchema.exactOptional(),
    originalAmount: AmountSchema.exactOptional(),
    proprietaryBankTransactionCode: ProprietaryBankTransactionCodeSchema.exactOptional(),
    terminalId: TerminalIdSchema.exactOptional(),
    transactionAmount: AmountSchema,
    transactionDate: TransactionDateSchema.exactOptional(),
    transactionDetails: z.string().max(140).exactOptional(),
  })
  .openapi({ description: 'Card transaction information.', required: ['transactionAmount'] })
  .openapi('CardTransaction')

const CardTransactionListSchema = z
  .array(CardTransactionSchema)
  .openapi({ description: 'Array of transaction details.' })
  .openapi('CardTransactionList')

type CardAccountReportType = {
  _links: z.infer<typeof LinksCardAccountReportSchema>
  booked: z.infer<typeof CardTransactionListSchema>
  pending?: z.infer<typeof CardTransactionListSchema>
}

const LinksAllSchema = z
  .object({
    account: HrefTypeSchema.exactOptional(),
    authoriseTransaction: HrefTypeSchema.exactOptional(),
    balances: HrefTypeSchema.exactOptional(),
    cardAccount: HrefTypeSchema.exactOptional(),
    cardTransactions: HrefTypeSchema.exactOptional(),
    confirmation: HrefTypeSchema.exactOptional(),
    download: HrefTypeSchema.exactOptional(),
    first: HrefTypeSchema.exactOptional(),
    last: HrefTypeSchema.exactOptional(),
    next: HrefTypeSchema.exactOptional(),
    previous: HrefTypeSchema.exactOptional(),
    scaOAuth: HrefTypeSchema.exactOptional(),
    scaRedirect: HrefTypeSchema.exactOptional(),
    scaStatus: HrefTypeSchema.exactOptional(),
    selectAuthenticationMethod: HrefTypeSchema.exactOptional(),
    self: HrefTypeSchema.exactOptional(),
    startAuthorisation: HrefTypeSchema.exactOptional(),
    startAuthorisationWithAuthenticationMethodSelection: HrefTypeSchema.exactOptional(),
    startAuthorisationWithEncryptedPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithProprietaryData: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuIdentification: HrefTypeSchema.exactOptional(),
    startAuthorisationWithTransactionAuthorisation: HrefTypeSchema.exactOptional(),
    status: HrefTypeSchema.exactOptional(),
    transactionDetails: HrefTypeSchema.exactOptional(),
    transactions: HrefTypeSchema.exactOptional(),
    updateAdditionalEncryptedPsuAuthentication: HrefTypeSchema.exactOptional(),
    updateAdditionalPsuAuthentication: HrefTypeSchema.exactOptional(),
    updateEncryptedPsuAuthentication: HrefTypeSchema.exactOptional(),
    updateProprietaryData: HrefTypeSchema.exactOptional(),
    updatePsuAuthentication: HrefTypeSchema.exactOptional(),
    updatePsuIdentification: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({ description: 'A _link object with all availabel link types.\n' })
  .openapi('LinksAll')

const MessageCode400AISSchema = z
  .enum([
    'FORMAT_ERROR',
    'PARAMETER_NOT_CONSISTENT',
    'PARAMETER_NOT_SUPPORTED',
    'SERVICE_INVALID',
    'RESOURCE_UNKNOWN',
    'RESOURCE_EXPIRED',
    'RESOURCE_BLOCKED',
    'TIMESTAMP_INVALID',
    'PERIOD_INVALID',
    'SCA_METHOD_UNKNOWN',
    'SCA_INVALID',
    'CONSENT_UNKNOWN',
    'SESSIONS_NOT_SUPPORTED',
  ])
  .openapi({ description: 'Message codes defined for AIS for HTTP Error code 400 (BAD_REQUEST).' })
  .openapi('MessageCode400AIS')

const TppErrorDetailSchema = z
  .string()
  .max(500)
  .openapi({
    description:
      'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
  })
  .openapi('TppErrorDetail')

const TppErrorTitleSchema = z
  .string()
  .max(70)
  .openapi({
    description:
      'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
  })
  .openapi('TppErrorTitle')

const Error400AISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode400AISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode400AISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 400 for AIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error400AIS')

const TppMessageCategorySchema = z
  .enum(['ERROR', 'WARNING'])
  .openapi({ description: 'Category of the TPP message category.' })
  .openapi('TppMessageCategory')

const TppMessageTextSchema = z
  .string()
  .max(500)
  .openapi({ description: 'Additional explaining text to the TPP.' })
  .openapi('TppMessageText')

const TppMessage400AISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode400AISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage400AIS')

const Error400NGAISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage400AISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 400.\n',
    required: [],
  })
  .openapi('Error400NGAIS')

const MessageCode400PIISSchema = z
  .enum([
    'FORMAT_ERROR',
    'PARAMETER_NOT_CONSISTENT',
    'PARAMETER_NOT_SUPPORTED',
    'SERVICE_INVALID',
    'RESOURCE_UNKNOWN',
    'RESOURCE_EXPIRED',
    'RESOURCE_BLOCKED',
    'TIMESTAMP_INVALID',
    'PERIOD_INVALID',
    'SCA_METHOD_UNKNOWN',
    'SCA_INVALID',
    'CONSENT_UNKNOWN',
    'CARD_INVALID',
    'NO_PIIS_ACTIVATION',
  ])
  .openapi({ description: 'Message codes defined for PIIS for HTTP Error code 400 (BAD_REQUEST).' })
  .openapi('MessageCode400PIIS')

const TppMessage400PIISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode400PIISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage400PIIS')

const Error400NGPIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage400PIISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 400.\n',
    required: [],
  })
  .openapi('Error400NGPIIS')

const MessageCode400PISSchema = z
  .enum([
    'FORMAT_ERROR',
    'PARAMETER_NOT_CONSISTENT',
    'PARAMETER_NOT_SUPPORTED',
    'SERVICE_INVALID',
    'RESOURCE_UNKNOWN',
    'RESOURCE_EXPIRED',
    'RESOURCE_BLOCKED',
    'TIMESTAMP_INVALID',
    'PERIOD_INVALID',
    'SCA_METHOD_UNKNOWN',
    'SCA_INVALID',
    'CONSENT_UNKNOWN',
    'PAYMENT_FAILED',
    'EXECUTION_DATE_INVALID',
  ])
  .openapi({ description: 'Message codes defined for PIS for HTTP Error code 400 (BAD_REQUEST).' })
  .openapi('MessageCode400PIS')

const TppMessage400PISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode400PISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage400PIS')

const Error400NGPISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage400PISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 400.\n',
    required: [],
  })
  .openapi('Error400NGPIS')

const MessageCode400SBSSchema = z
  .enum([
    'FORMAT_ERROR',
    'PARAMETER_NOT_CONSISTENT',
    'PARAMETER_NOT_SUPPORTED',
    'SERVICE_INVALID',
    'RESOURCE_UNKNOWN',
    'RESOURCE_EXPIRED',
    'RESOURCE_BLOCKED',
    'TIMESTAMP_INVALID',
    'PERIOD_INVALID',
    'SCA_METHOD_UNKNOWN',
    'SCA_INVALID',
    'CONSENT_UNKNOWN',
    'REFERENCE_MIX_INVALID',
  ])
  .openapi({
    description: 'Message codes defined for signing baskets for HTTP Error code 400 (BAD_REQUEST).',
  })
  .openapi('MessageCode400SBS')

const TppMessage400SBSSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode400SBSSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage400SBS')

const Error400NGSBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage400SBSSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 400.\n',
    required: [],
  })
  .openapi('Error400NGSBS')

const Error400PIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode400PIISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode400PIISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 400 for PIIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error400PIIS')

const Error400PISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode400PISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode400PISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 400 for PIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error400PIS')

const Error400SBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode400SBSSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode400SBSSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 400 for signing baskets.\n',
    required: ['type', 'code'],
  })
  .openapi('Error400SBS')

const MessageCode401AISSchema = z
  .enum([
    'CERTIFICATE_INVALID',
    'ROLE_INVALID',
    'CERTIFICATE_EXPIRED',
    'CERTIFICATE_BLOCKED',
    'CERTIFICATE_REVOKE',
    'CERTIFICATE_MISSING',
    'SIGNATURE_INVALID',
    'SIGNATURE_MISSING',
    'CORPORATE_ID_INVALID',
    'PSU_CREDENTIALS_INVALID',
    'CONSENT_INVALID',
    'CONSENT_EXPIRED',
    'TOKEN_UNKNOWN',
    'TOKEN_INVALID',
    'TOKEN_EXPIRED',
  ])
  .openapi({ description: 'Message codes defined for AIS for HTTP Error code 401 (UNAUTHORIZED).' })
  .openapi('MessageCode401AIS')

const Error401AISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode401AISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode401AISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 401 for AIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error401AIS')

const TppMessage401AISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode401AISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage401AIS')

const Error401NGAISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage401AISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 401.\n',
    required: [],
  })
  .openapi('Error401NGAIS')

const MessageCode401PIISSchema = z
  .enum([
    'CERTIFICATE_INVALID',
    'ROLE_INVALID',
    'CERTIFICATE_EXPIRED',
    'CERTIFICATE_BLOCKED',
    'CERTIFICATE_REVOKE',
    'CERTIFICATE_MISSING',
    'SIGNATURE_INVALID',
    'SIGNATURE_MISSING',
    'CORPORATE_ID_INVALID',
    'PSU_CREDENTIALS_INVALID',
    'CONSENT_INVALID',
    'CONSENT_EXPIRED',
    'TOKEN_UNKNOWN',
    'TOKEN_INVALID',
    'TOKEN_EXPIRED',
  ])
  .openapi({
    description: 'Message codes defined for PIIS for HTTP Error code 401 (UNAUTHORIZED).',
  })
  .openapi('MessageCode401PIIS')

const TppMessage401PIISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode401PIISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage401PIIS')

const Error401NGPIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage401PIISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 401.\n',
    required: [],
  })
  .openapi('Error401NGPIIS')

const MessageCode401PISSchema = z
  .enum([
    'CERTIFICATE_INVALID',
    'ROLE_INVALID',
    'CERTIFICATE_EXPIRED',
    'CERTIFICATE_BLOCKED',
    'CERTIFICATE_REVOKE',
    'CERTIFICATE_MISSING',
    'SIGNATURE_INVALID',
    'SIGNATURE_MISSING',
    'CORPORATE_ID_INVALID',
    'PSU_CREDENTIALS_INVALID',
    'CONSENT_INVALID',
    'CONSENT_EXPIRED',
    'TOKEN_UNKNOWN',
    'TOKEN_INVALID',
    'TOKEN_EXPIRED',
    'REQUIRED_KID_MISSING',
  ])
  .openapi({ description: 'Message codes defined for PIS for HTTP Error code 401 (UNAUTHORIZED).' })
  .openapi('MessageCode401PIS')

const TppMessage401PISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode401PISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage401PIS')

const Error401NGPISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage401PISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 401.\n',
    required: [],
  })
  .openapi('Error401NGPIS')

const MessageCode401SBSSchema = z
  .enum([
    'CERTIFICATE_INVALID',
    'ROLE_INVALID',
    'CERTIFICATE_EXPIRED',
    'CERTIFICATE_BLOCKED',
    'CERTIFICATE_REVOKE',
    'CERTIFICATE_MISSING',
    'SIGNATURE_INVALID',
    'SIGNATURE_MISSING',
    'CORPORATE_ID_INVALID',
    'PSU_CREDENTIALS_INVALID',
    'CONSENT_INVALID',
    'CONSENT_EXPIRED',
    'TOKEN_UNKNOWN',
    'TOKEN_INVALID',
    'TOKEN_EXPIRED',
  ])
  .openapi({
    description:
      'Message codes defined for signing baskets for HTTP Error code 401 (UNAUTHORIZED).',
  })
  .openapi('MessageCode401SBS')

const TppMessage401SBSSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode401SBSSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage401SBS')

const Error401NGSBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage401SBSSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 401.\n',
    required: [],
  })
  .openapi('Error401NGSBS')

const Error401PIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode401PIISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode401PISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 401 for PIIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error401PIIS')

const Error401PISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode401PISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode401PISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 401 for PIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error401PIS')

const Error401SBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode401SBSSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode401SBSSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 401 for signing baskets.\n',
    required: ['type', 'code'],
  })
  .openapi('Error401SBS')

const MessageCode403AISSchema = z
  .enum(['CONSENT_UNKNOWN', 'SERVICE_BLOCKED', 'RESOURCE_UNKNOWN', 'RESOURCE_EXPIRED'])
  .openapi({ description: 'Message codes defined for AIS for HTTP Error code 403 (FORBIDDEN).' })
  .openapi('MessageCode403AIS')

const Error403AISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode403AISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode403AISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 403 for AIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error403AIS')

const TppMessage403AISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode403AISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage403AIS')

const Error403NGAISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage403AISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 403.\n',
    required: [],
  })
  .openapi('Error403NGAIS')

const MessageCode403PIISSchema = z
  .enum(['CONSENT_UNKNOWN', 'SERVICE_BLOCKED', 'RESOURCE_UNKNOWN', 'RESOURCE_EXPIRED'])
  .openapi({ description: 'Message codes defined for PIIS for HTTP Error code 403 (FORBIDDEN).' })
  .openapi('MessageCode403PIIS')

const TppMessage403PIISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode403PIISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage403PIIS')

const Error403NGPIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage403PIISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 403.\n',
    required: [],
  })
  .openapi('Error403NGPIIS')

const MessageCode403PISSchema = z
  .enum([
    'CONSENT_UNKNOWN',
    'SERVICE_BLOCKED',
    'RESOURCE_UNKNOWN',
    'RESOURCE_EXPIRED',
    'PRODUCT_INVALID',
  ])
  .openapi({
    description:
      'Message codes defined defined for PIS for PIS for HTTP Error code 403 (FORBIDDEN).',
  })
  .openapi('MessageCode403PIS')

const TppMessage403PISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode403PISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage403PIS')

const Error403NGPISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage403PISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 403.\n',
    required: [],
  })
  .openapi('Error403NGPIS')

const MessageCode403SBSSchema = z
  .enum(['CONSENT_UNKNOWN', 'SERVICE_BLOCKED', 'RESOURCE_UNKNOWN', 'RESOURCE_EXPIRED'])
  .openapi({
    description: 'Message codes defined for signing baskets for HTTP Error code 403 (FORBIDDEN).',
  })
  .openapi('MessageCode403SBS')

const TppMessage403SBSSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode403SBSSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage403SBS')

const Error403NGSBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage403SBSSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 403.\n',
    required: [],
  })
  .openapi('Error403NGSBS')

const Error403PIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode403PIISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode403PIISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 403 for PIIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error403PIIS')

const Error403PISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode403PISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode403PISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 403 for PIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error403PIS')

const Error403SBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode403SBSSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode403SBSSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 403 for signing baskets.\n',
    required: ['type', 'code'],
  })
  .openapi('Error403SBS')

const MessageCode404AISSchema = z
  .literal('RESOURCE_UNKNOWN')
  .openapi({ description: 'Message codes defined for AIS for HTTP Error code 404 (NOT FOUND).' })
  .openapi('MessageCode404AIS')

const Error404AISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode404AISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode404AISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 404 for AIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error404AIS')

const TppMessage404AISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode404AISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage404AIS')

const Error404NGAISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage404AISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 404.\n',
    required: [],
  })
  .openapi('Error404NGAIS')

const MessageCode404PIISSchema = z
  .literal('RESOURCE_UNKNOWN')
  .openapi({ description: 'Message codes defined for PIIS for HTTP Error code 404 (NOT FOUND).' })
  .openapi('MessageCode404PIIS')

const TppMessage404PIISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode404PIISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage404PIIS')

const Error404NGPIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage404PIISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 404.\n',
    required: [],
  })
  .openapi('Error404NGPIIS')

const MessageCode404PISSchema = z
  .enum(['RESOURCE_UNKNOWN', 'PRODUCT_UNKNOWN'])
  .openapi({ description: 'Message codes defined for PIS for HTTP Error code 404 (NOT FOUND).' })
  .openapi('MessageCode404PIS')

const TppMessage404PISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode404PISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage404PIS')

const Error404NGPISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage404PISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 404.\n',
    required: [],
  })
  .openapi('Error404NGPIS')

const MessageCode404SBSSchema = z
  .literal('RESOURCE_UNKNOWN')
  .openapi({
    description: 'Message codes defined for signing baskets for HTTP Error code 404 (NOT FOUND).',
  })
  .openapi('MessageCode404SBS')

const TppMessage404SBSSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode404SBSSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage404SBS')

const Error404NGSBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage404SBSSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 404.\n',
    required: [],
  })
  .openapi('Error404NGSBS')

const Error404PIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode404PIISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode404PIISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 404 for PIIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error404PIIS')

const Error404PISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode404PISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode404PISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 404 for PIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error404PIS')

const Error404SBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode404SBSSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode404SBSSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 404 for signing baskets.\n',
    required: ['type', 'code'],
  })
  .openapi('Error404SBS')

const MessageCode405AISSchema = z
  .literal('SERVICE_INVALID')
  .openapi({
    description: 'Message codes defined for AIS for HTTP Error code 405 (METHOD NOT ALLOWED).',
  })
  .openapi('MessageCode405AIS')

const Error405AISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode405AISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode405AISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 405 for AIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error405AIS')

const TppMessage405AISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode405AISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage405AIS')

const Error405NGAISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage405AISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 401.\n',
    required: [],
  })
  .openapi('Error405NGAIS')

const MessageCode405PIISSchema = z
  .literal('SERVICE_INVALID')
  .openapi({
    description: 'Message codes defined for PIIS for HTTP Error code 405 (METHOD NOT ALLOWED).',
  })
  .openapi('MessageCode405PIIS')

const TppMessage405PIISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode405PIISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage405PIIS')

const Error405NGPIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage405PIISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 401.\n',
    required: [],
  })
  .openapi('Error405NGPIIS')

const MessageCode405PISSchema = z
  .literal('SERVICE_INVALID')
  .openapi({
    description:
      'Message codes defined for payment cancelations PIS for HTTP Error code 405 (METHOD NOT ALLOWED).',
  })
  .openapi('MessageCode405PIS')

const TppMessage405PISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode405PISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage405PIS')

const Error405NGPISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage405PISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 401.\n',
    required: [],
  })
  .openapi('Error405NGPIS')

const MessageCode405PISCANCSchema = z
  .enum(['CANCELLATION_INVALID', 'SERVICE_INVALID'])
  .openapi({
    description:
      'Message codes defined for payment cancelations PIS for HTTP Error code 405 (METHOD NOT ALLOWED).',
  })
  .openapi('MessageCode405PISCANC')

const TppMessage405PISCANCSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode405PISCANCSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage405PISCANC')

const Error405NGPISCANCSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage405PISCANCSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 401.\n',
    required: [],
  })
  .openapi('Error405NGPISCANC')

const MessageCode405SBSSchema = z
  .literal('SERVICE_INVALID')
  .openapi({
    description: 'Message codes defined for SBS for HTTP Error code 405 (METHOD NOT ALLOWED).',
  })
  .openapi('MessageCode405SBS')

const TppMessage405SBSSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode405SBSSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage405SBS')

const Error405NGSBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage405SBSSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 401.\n',
    required: [],
  })
  .openapi('Error405NGSBS')

const Error405PIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode405PIISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode405PIISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 405 for PIIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error405PIIS')

const Error405PISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode405PISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode405PISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 405 for PIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error405PIS')

const Error405PISCANCSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode405PISCANCSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode405PISCANCSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 405 for a pament cancelation (PIS).\n',
    required: ['type', 'code'],
  })
  .openapi('Error405PISCANC')

const Error405SBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode405SBSSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode405SBSSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 405 for signing baskets.\n',
    required: ['type', 'code'],
  })
  .openapi('Error405SBS')

const MessageCode406AISSchema = z
  .literal('REQUESTED_FORMATS_INVALID')
  .openapi({
    description: 'Message codes defined for AIS for HTTP Error code 406 (NOT ACCEPTABLE).',
  })
  .openapi('MessageCode406AIS')

const Error406AISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode406AISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode406AISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 406 for AIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error406AIS')

const TppMessage406AISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode406AISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage406AIS')

const Error406NGAISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage406AISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 406.\n',
    required: [],
  })
  .openapi('Error406NGAIS')

const MessageCode409AISSchema = z
  .literal('STATUS_INVALID')
  .openapi({ description: 'Message codes defined for AIS for HTTP Error code 409 (CONFLICT).' })
  .openapi('MessageCode409AIS')

const Error409AISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode409AISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode409AISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 409 for AIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error409AIS')

const TppMessage409AISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode409AISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage409AIS')

const Error409NGAISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage409AISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 409.\n',
    example: [
      {
        category: 'ERROR',
        code: 'STATUS_INVALID',
        text: 'additional text information of the ASPSP up to 500 characters',
      },
    ],
    required: [],
  })
  .openapi('Error409NGAIS')

const MessageCode409PIISSchema = z
  .literal('STATUS_INVALID')
  .openapi({ description: 'Message codes defined for PIIS for HTTP Error code 409 (CONFLICT).' })
  .openapi('MessageCode409PIIS')

const TppMessage409PIISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode409PIISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage409PIIS')

const Error409NGPIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage409PIISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 409.\n',
    example: [
      {
        category: 'ERROR',
        code: 'STATUS_INVALID',
        text: 'additional text information of the ASPSP up to 500 characters',
      },
    ],
    required: [],
  })
  .openapi('Error409NGPIIS')

const MessageCode409PISSchema = z
  .literal('STATUS_INVALID')
  .openapi({ description: 'Message codes defined for PIS for HTTP Error code 409 (CONFLICT).' })
  .openapi('MessageCode409PIS')

const TppMessage409PISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode409PISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage409PIS')

const Error409NGPISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage409PISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 409.\n',
    example: [
      {
        category: 'ERROR',
        code: 'STATUS_INVALID',
        text: 'additional text information of the ASPSP up to 500 characters',
      },
    ],
    required: [],
  })
  .openapi('Error409NGPIS')

const MessageCode409SBSSchema = z
  .enum(['REFERENCE_STATUS_INVALID', 'STATUS_INVALID'])
  .openapi({
    description: 'Message codes defined for signing baskets for HTTP Error code 409 (CONFLICT).',
  })
  .openapi('MessageCode409SBS')

const TppMessage409SBSSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode409SBSSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage409SBS')

const Error409NGSBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage409SBSSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 409.\n',
    example: [
      {
        category: 'ERROR',
        code: 'STATUS_INVALID',
        text: 'additional text information of the ASPSP up to 500 characters',
      },
    ],
    required: [],
  })
  .openapi('Error409NGSBS')

const Error409PIISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode409PIISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode409PIISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 409 for PIIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error409PIIS')

const Error409PISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode409PISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode409PISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 409 for PIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error409PIS')

const Error409SBSSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode409SBSSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807].',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode409SBSSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 409 for signing baskets.\n',
    required: ['type', 'code'],
  })
  .openapi('Error409SBS')

const MessageCode429AISSchema = z
  .literal('ACCESS_EXCEEDED')
  .openapi({ description: 'Message codes for HTTP Error code 429 (TOO MANY REQUESTS).' })
  .openapi('MessageCode429AIS')

const Error429AISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    additionalErrors: z
      .array(
        z
          .object({
            code: MessageCode429AISSchema,
            detail: TppErrorDetailSchema.exactOptional(),
            title: TppErrorTitleSchema.exactOptional(),
          })
          .openapi({
            description:
              'This is a data element to support the declaration of additional errors in the context of [RFC7807]\nin case of a HTTP error code 429 for.\n',
            required: ['code'],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Array of Error Information Blocks.\n\nMight be used if more than one error is to be communicated\n',
      }),
    code: MessageCode429AISSchema,
    detail: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Detailed human readable text specific to this instance of the error.\nXPath might be used to point to the issue generating the error in addition.\nRemark for Future: In future, a dedicated field might be introduced for the XPath.\n',
      }),
    title: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Short human readable description of error type.\nCould be in local language.\nTo be provided by ASPSPs.\n',
      }),
    type: z
      .url()
      .max(70)
      .openapi({
        description:
          'A URI reference [RFC3986] that identifies the problem type.\nRemark For Future: These URI will be provided by NextGen in future.\n',
      }),
  })
  .openapi({
    description:
      'Standardised definition of reporting error information according to [RFC7807]\nin case of a HTTP error code 429 for AIS.\n',
    required: ['type', 'code'],
  })
  .openapi('Error429AIS')

const TppMessage429AISSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode429AISSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage429AIS')

const Error429NGAISSchema = z
  .object({
    _links: LinksAllSchema.exactOptional(),
    tppMessages: z.array(TppMessage429AISSchema).exactOptional(),
  })
  .openapi({
    description:
      'NextGen specific definition of reporting error information in case of a HTTP error code 429.\n',
    example: [
      {
        category: 'ERROR',
        code: 'ACCESS_EXCEEDED',
        text: 'additional text information of the ASPSP up to 500 characters',
      },
    ],
    required: [],
  })
  .openapi('Error429NGAIS')

const MessageCode2XXSchema = z
  .literal('WARNING')
  .openapi({ description: 'Message codes for HTTP Error codes 2XX.' })
  .openapi('MessageCode2XX')

const LinksAuthorisationConfirmationSchema = z
  .object({ scaStatus: HrefTypeSchema.exactOptional() })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      "A list of hyperlinks to be recognised by the TPP. The actual hyperlinks used in the response depend on the dynamical decisions of the ASPSP when processing the request.\n\n**Remark:** All links can be relative or full links, to be decided by the ASPSP.\n\nType of links admitted in this response, (further links might be added for ASPSP \ndefined extensions):\n\n- 'scaStatus': The link to retrieve the status of the corresponding transaction resource.\n",
  })
  .openapi('LinksAuthorisationConfirmation')

const LinksConsentsSchema = z
  .object({
    confirmation: HrefTypeSchema.exactOptional(),
    scaOAuth: HrefTypeSchema.exactOptional(),
    scaRedirect: HrefTypeSchema.exactOptional(),
    scaStatus: HrefTypeSchema.exactOptional(),
    self: HrefTypeSchema.exactOptional(),
    startAuthorisation: HrefTypeSchema.exactOptional(),
    startAuthorisationWithAuthenticationMethodSelection: HrefTypeSchema.exactOptional(),
    startAuthorisationWithEncryptedPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuIdentification: HrefTypeSchema.exactOptional(),
    startAuthorisationWithTransactionAuthorisation: HrefTypeSchema.exactOptional(),
    status: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      "A list of hyperlinks to be recognised by the TPP.\n\nType of links admitted in this response (which might be extended by single ASPSPs as indicated in its XS2A\ndocumentation):\n  * 'scaRedirect': \n    In case of an SCA Redirect Approach, the ASPSP is transmitting the link to which to redirect the \n    PSU browser.\n  * 'scaOAuth': \n    In case of an OAuth2 based Redirect Approach, the ASPSP is transmitting the link where the configuration \n    of the OAuth2 Server is defined. \n    The configuration follows the OAuth 2.0 Authorisation Server Metadata specification. \n* 'confirmation': \n  Might be added by the ASPSP if either the \"scaRedirect\" or \"scaOAuth\" hyperlink is returned \n  in the same response message. \n  This hyperlink defines the URL to the resource which needs to be updated with \n    * a confirmation code as retrieved after the plain redirect authentication process with the ASPSP authentication server or\n    * an access token as retrieved by submitting an authorization code after the integrated OAuth based authentication process with the ASPSP authentication server.\n  * 'startAuthorisation': \n    In case, where an explicit start of the transaction authorisation is needed, \n    but no more data needs to be updated (no authentication method to be selected, \n    no PSU identification nor PSU authentication data to be uploaded).\n  * 'startAuthorisationWithPsuIdentification': \n    The link to the authorisation end-point, where the authorisation sub-resource has to be generated \n    while uploading the PSU identification data.\n  * 'startAuthorisationWithPsuAuthentication':\n    The link to the authorisation end-point, where the authorisation sub-resource has to be generated \n    while uploading the PSU authentication data.\n  * 'startAuthorisationWithEncryptedPsuAuthentication':\n    Same as startAuthorisactionWithPsuAuthentication where the authentication data need to be encrypted on\n    application layer in uploading.\n  * 'startAuthorisationWithAuthenticationMethodSelection':\n    The link to the authorisation end-point, where the authorisation sub-resource has to be generated \n    while selecting the authentication method. This link is contained under exactly the same conditions \n    as the data element 'scaMethods' \n  * 'startAuthorisationWithTransactionAuthorisation':\n    The link to the authorisation end-point, where the authorisation sub-resource has to be generated \n    while authorising the transaction e.g. by uploading an OTP received by SMS.\n  * 'self': \n    The link to the Establish Account Information Consent resource created by this request. \n    This link can be used to retrieve the resource data. \n  * 'status': \n    The link to retrieve the status of the account information consent.\n  * 'scaStatus': The link to retrieve the scaStatus of the corresponding authorisation sub-resource. \n    This link is only contained, if an authorisation sub-resource has been already created.\n",
  })
  .openapi('LinksConsents')

const LinksDownloadSchema = z
  .object({ download: HrefTypeSchema })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      'A list of hyperlinks to be recognised by the TPP.\n\nType of links admitted in this response:\n  - "download": a link to a resource, where the transaction report might be downloaded from in\n  case where transaction reports have a huge size.\n\nRemark: This feature shall only be used where camt-data is requested which has a huge size.\n',
    required: ['download'],
  })
  .openapi('LinksDownload')

const LinksGetConsentSchema = z
  .object({
    account: HrefTypeSchema.exactOptional(),
    'card-account': HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      'A list of hyperlinks to be recognised by the TPP.\n\nLinks of type "account" and/or "cardAccount", depending on the nature of the consent.\n',
  })
  .openapi('LinksGetConsent')

const LinksPaymentInitiationSchema = z
  .object({
    confirmation: HrefTypeSchema.exactOptional(),
    scaOAuth: HrefTypeSchema.exactOptional(),
    scaRedirect: HrefTypeSchema.exactOptional(),
    scaStatus: HrefTypeSchema.exactOptional(),
    self: HrefTypeSchema.exactOptional(),
    startAuthorisation: HrefTypeSchema.exactOptional(),
    startAuthorisationWithAuthenticationMethodSelection: HrefTypeSchema.exactOptional(),
    startAuthorisationWithEncryptedPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuIdentification: HrefTypeSchema.exactOptional(),
    startAuthorisationWithTransactionAuthorisation: HrefTypeSchema.exactOptional(),
    status: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      "A list of hyperlinks to be recognised by the TPP.\nThe actual hyperlinks used in the response depend on the dynamical decisions of the ASPSP when\nprocessing the request.\n\n**Remark:** All links can be relative or full links, to be decided by the ASPSP.\n\nType of links admitted in this response, (further links might be added for ASPSP defined extensions):\n\n* 'scaRedirect':\n  In case of an SCA Redirect Approach, the ASPSP is transmitting the link to which to redirect the PSU browser.\n* 'scaOAuth':\n  In case of a SCA OAuth2 Approach, the ASPSP is transmitting the URI where the configuration of the Authorisation\n  Server can be retrieved. The configuration follows the OAuth 2.0 Authorisation Server Metadata specification.\n* 'confirmation': \n  Might be added by the ASPSP if either the \"scaRedirect\" or \"scaOAuth\" hyperlink is returned \n  in the same response message. \n  This hyperlink defines the URL to the resource which needs to be updated with \n    * a confirmation code as retrieved after the plain redirect authentication process with the ASPSP authentication server or\n    * an access token as retrieved by submitting an authorization code after the integrated OAuth based authentication process with the ASPSP authentication server. \n* 'startAuthorisation': \n  In case, where an explicit start of the transaction authorisation is needed, but no more data needs to be updated \n  (no authentication method to be selected, no PSU identification nor PSU authentication data to be uploaded).\n* 'startAuthorisationWithPsuIdentification':\n  The link to the authorisation end-point, where the authorisation sub-resource has to be generated while\n  uploading the PSU identification data.\n* 'startAuthorisationWithPsuAuthentication':\n  The link to the authorisation end-point, where the authorisation sub-resource has to be generated while\n  uploading the PSU authentication data.\n  * 'startAuthorisationWithEncryptedPsuAuthentication':\n    Same as startAuthorisactionWithPsuAuthentication where the authentication data need to be encrypted on\n    application layer in uploading.\n* 'startAuthorisationWithAuthenticationMethodSelection':\n  The link to the authorisation end-point, where the authorisation sub-resource has to be generated while\n  selecting the authentication method.\n  This link is contained under exactly the same conditions as the data element \"scaMethods\"\n* 'startAuthorisationWithTransactionAuthorisation':\n  The link to the authorisation end-point, where the authorisation sub-resource has to be generated while\n  authorising the transaction e.g. by uploading an OTP received by SMS.\n* 'self':\n  The link to the payment initiation resource created by this request.\n  This link can be used to retrieve the resource data.\n* 'status':\n  The link to retrieve the transaction status of the payment initiation.\n* 'scaStatus':\n  The link to retrieve the scaStatus of the corresponding authorisation sub-resource.\n  This link is only contained, if an authorisation sub-resource has been already created.\n",
    example: {
      scaRedirect: { href: 'https://www.testbank.com/asdfasdfasdf' },
      self: { href: '/v1/payments/swiss-sepa-credit-transfers/1234-wertiq-983' },
    },
  })
  .openapi('LinksPaymentInitiation')

const LinksPaymentInitiationCancelSchema = z
  .object({
    startAuthorisation: HrefTypeSchema.exactOptional(),
    startAuthorisationWithAuthenticationMethodSelection: HrefTypeSchema.exactOptional(),
    startAuthorisationWithEncryptedPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuIdentification: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      "A list of hyperlinks to be recognised by the TPP. The actual hyperlinks used in the response depend on the\ndynamical decisions of the ASPSP when processing the request.\n\nRemark: All links can be relative or full links, to be decided by the ASPSP.\n\nType of links admitted in this response, (further links might be added for ASPSP defined extensions):\n\n  * 'startAuthorisation':\n    In case, where just the authorisation process of the cancellation needs to be started,\n    but no additional data needs to be updated for time being (no authentication method to be selected,\n    no PSU identification nor PSU authentication data to be uploaded).\n  * 'startAuthorisationWithPsuIdentification': \n    In case where a PSU identification needs to be updated when starting the cancellation authorisation:\n    The link to the cancellation-authorisations end-point, where the cancellation sub-resource has to be \n    generated while uploading the PSU identification data.\n  * 'startAuthorisationWithPsuAuthentication':\n    In case of a yet to be created authorisation sub-resource: The link to the cancalation authorisation end-point,\n    where the authorisation sub-resource has to be generated while uploading the PSU authentication data.\n  * 'startAuthorisationWithEncryptedPsuAuthentication':\n    Same as startAuthorisactionWithPsuAuthentication where the authentication data need to be encrypted on\n    application layer in uploading.\n  * 'startAuthorisationWithAuthenticationMethodSelection':\n    The link to the authorisation end-point, where the cancellation-authorisation sub-resource has to be\n    generated while selecting the authentication method. This link is contained under exactly the same\n    conditions as the data element 'scaMethods'\n",
  })
  .openapi('LinksPaymentInitiationCancel')

const LinksSelectPsuAuthenticationMethodSchema = z
  .object({
    authoriseTransaction: HrefTypeSchema.exactOptional(),
    confirmation: HrefTypeSchema.exactOptional(),
    scaOAuth: HrefTypeSchema.exactOptional(),
    scaRedirect: HrefTypeSchema.exactOptional(),
    scaStatus: HrefTypeSchema.exactOptional(),
    updateAdditionalEncryptedPsuAuthentication: HrefTypeSchema.exactOptional(),
    updateAdditionalPsuAuthentication: HrefTypeSchema.exactOptional(),
    updatePsuAuthentication: HrefTypeSchema.exactOptional(),
    updatePsuIdentification: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      "A list of hyperlinks to be recognised by the TPP. The actual hyperlinks used in\nthe response depend on the dynamical decisions of the ASPSP when processing the request.\n\n**Remark:** All links can be relative or full links, to be decided by the ASPSP.\n\n**Remark:** This method can be applied before or after PSU identification.\nThis leads to many possible hyperlink responses.\nType of links admitted in this response, (further links might be added for ASPSP defined\nextensions):\n\n- 'scaRedirect':\n  In case of an SCA Redirect Approach, the ASPSP is transmitting the link to which to\n  redirect the PSU browser.\n- 'scaOAuth':\n  In case of a SCA OAuth2 Approach, the ASPSP is transmitting the URI where the\n  configuration of the Authorisation Server can be retrieved.\n  The configuration follows the OAuth 2.0 Authorisation Server Metadata specification.\n* 'confirmation': \n  Might be added by the ASPSP if either the \"scaRedirect\" or \"scaOAuth\" hyperlink is returned \n  in the same response message. \n  This hyperlink defines the URL to the resource which needs to be updated with \n    * a confirmation code as retrieved after the plain redirect authentication process with the ASPSP authentication server or\n    * an access token as retrieved by submitting an authorization code after the integrated OAuth based authentication process with the ASPSP authentication server.\n- 'updatePsuIdentification': \n  The link to the authorisation or cancellation authorisation sub-resource, \n  where PSU identification data needs to be uploaded.\n- 'updatePsuAuthentication':\n  The link to the authorisation or cancellation authorisation sub-resource,\n  where PSU authentication data needs to be uploaded.\n  - 'updateEncryptedPsuAuthentication':\n  The link to the authorisation or cancellation authorisation sub-resource,\n  where PSU authentication encrypted data needs to be uploaded.\n- 'updateAdditionalPsuAuthentication':\n    The link to the payment initiation or account information resource,\n    which needs to be updated by an additional PSU password.\n- 'updateAdditionalEncryptedPsuAuthentication':\n    The link to the payment initiation or account information resource,\n    which needs to be updated by an additional encrypted PSU password.\n- 'authoriseTransaction':\n  The link to the authorisation or cancellation authorisation sub-resource,\n  where the authorisation data has to be uploaded, e.g. the TOP received by SMS.\n- 'scaStatus':\n  The link to retrieve the scaStatus of the corresponding authorisation sub-resource.\n",
  })
  .openapi('LinksSelectPsuAuthenticationMethod')

const LinksSigningBasketSchema = z
  .object({
    scaOAuth: HrefTypeSchema.exactOptional(),
    scaRedirect: HrefTypeSchema.exactOptional(),
    scaStatus: HrefTypeSchema.exactOptional(),
    self: HrefTypeSchema.exactOptional(),
    startAuthorisation: HrefTypeSchema.exactOptional(),
    startAuthorisationWithAuthenticationMethodSelection: HrefTypeSchema.exactOptional(),
    startAuthorisationWithEncryptedPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuIdentification: HrefTypeSchema.exactOptional(),
    startAuthorisationWithTransactionAuthorisation: HrefTypeSchema.exactOptional(),
    status: HrefTypeSchema.exactOptional(),
  })
  .openapi({
    description:
      "A list of hyperlinks to be recognised by the TPP. The actual hyperlinks used in the\nresponse depend on the dynamical decisions of the ASPSP when processing the request.\n\nRemark: All links can be relative or full links, to be decided by the ASPSP.\nType of links admitted in this response, (further links might be added for ASPSP defined\nextensions):\n\n  * 'scaRedirect':\n    In case of an SCA Redirect Approach, the ASPSP is transmitting the link to\n    which to redirect the PSU browser.\n  * 'scaOAuth':\n    In case of a SCA OAuth2 Approach, the ASPSP is transmitting the URI where the configuration of\n    the Authorisation Server can be retrieved. The configuration follows the\n    OAuth 2.0 Authorisation Server Metadata specification.\n  * 'startAuthorisation':\n    In case, where an explicit start of the transaction authorisation is needed,\n    but no more data needs to be updated (no authentication method to be selected,\n    no PSU identification nor PSU authentication data to be uploaded).\n  * 'startAuthorisationWithPsuIdentification':\n    The link to the authorisation end-point, where the authorisation sub-resource\n    has to be generated while uploading the PSU identification data.\n  * 'startAuthorisationWithPsuAuthentication':\n    The link to the authorisation end-point, where the authorisation sub-resource\n    has to be generated while uploading the PSU authentication data.\n  * 'startAuthorisationWithEncryptedPsuAuthentication':\n    The link to the authorisation end-point, where the authorisation sub-resource has\n    to be generated while uploading the encrypted PSU authentication data.\n  * 'startAuthorisationWithAuthenticationMethodSelection':\n    The link to the authorisation end-point, where the authorisation sub-resource\n    has to be generated while selecting the authentication method.\n    This link is contained under exactly the same conditions as the data element 'scaMethods'\n  * 'startAuthorisationWithTransactionAuthorisation':\n    The link to the authorisation end-point, where the authorisation sub-resource\n    has to be generated while authorising the transaction e.g. by uploading an\n    OTP received by SMS.\n  * 'self':\n    The link to the payment initiation resource created by this request.\n    This link can be used to retrieve the resource data.\n  * 'status':\n    The link to retrieve the transaction status of the payment initiation.\n  * 'scaStatus':\n    The link to retrieve the scaStatus of the corresponding authorisation sub-resource.\n    This link is only contained, if an authorisation sub-resource has been already created.\n",
    required: [],
  })
  .openapi('LinksSigningBasket')

const LinksStartScaProcessSchema = z
  .object({
    authoriseTransaction: HrefTypeSchema.exactOptional(),
    confirmation: HrefTypeSchema.exactOptional(),
    scaOAuth: HrefTypeSchema.exactOptional(),
    scaRedirect: HrefTypeSchema.exactOptional(),
    scaStatus: HrefTypeSchema.exactOptional(),
    selectAuthenticationMethod: HrefTypeSchema.exactOptional(),
    startAuthorisationWithEncryptedPsuAuthentication: HrefTypeSchema.exactOptional(),
    startAuthorisationWithPsuAuthentication: HrefTypeSchema.exactOptional(),
    updatePsuIdentification: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      "A list of hyperlinks to be recognised by the TPP. The actual hyperlinks used in the\nresponse depend on the dynamical decisions of the ASPSP when processing the request.\n\n**Remark:** All links can be relative or full links, to be decided by the ASPSP.\n\nType of links admitted in this response, (further links might be added for ASPSP defined\nextensions):\n\n- 'scaRedirect':\n  In case of an SCA Redirect Approach, the ASPSP is transmitting the link to which to\n  redirect the PSU browser.\n- 'scaOAuth':\n  In case of a SCA OAuth2 Approach, the ASPSP is transmitting the URI where the configuration of the Authorisation Server can be retrieved. The configuration follows the OAuth 2.0 Authorisation Server Metadata specification.\n* 'confirmation': \n  Might be added by the ASPSP if either the \"scaRedirect\" or \"scaOAuth\" hyperlink is returned \n  in the same response message. \n  This hyperlink defines the URL to the resource which needs to be updated with \n    * a confirmation code as retrieved after the plain redirect authentication process with the ASPSP authentication server or\n    * an access token as retrieved by submitting an authorization code after the integrated OAuth based authentication process with the ASPSP authentication server.\n- 'updatePsuIdentification': \n  The link to the authorisation or cancellation authorisation sub-resource, \n  where PSU identification data needs to be uploaded.\n- 'startAuthorisationWithPsuAuthentication':\n  The link to the authorisation or cancellation authorisation sub-resource,\n  where PSU authentication data needs to be uploaded.\n- 'startAuthorisationWithEncryptedPsuAuthentication':\n    Same as startAuthorisactionWithPsuAuthentication where the authentication data need to be encrypted on\n    application layer in uploading.\n- 'selectAuthenticationMethod':\n  The link to the authorisation or cancellation authorisation sub-resource,\n  where the selected authentication method needs to be uploaded.\n  This link is contained under exactly the same conditions as the data element 'scaMethods'.\n- 'authoriseTransaction':\n  The link to the authorisation or cancellation authorisation sub-resource,\n  where the authorisation data has to be uploaded, e.g. the TOP received by SMS.\n- 'scaStatus':\n  The link to retrieve the scaStatus of the corresponding authorisation sub-resource.\n",
  })
  .openapi('LinksStartScaProcess')

const LinksUpdatePsuAuthenticationSchema = z
  .object({
    authoriseTransaction: HrefTypeSchema.exactOptional(),
    scaStatus: HrefTypeSchema.exactOptional(),
    selectAuthenticationMethod: HrefTypeSchema.exactOptional(),
    updateAdditionalEncryptedPsuAuthentication: HrefTypeSchema.exactOptional(),
    updateAdditionalPsuAuthentication: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      "A list of hyperlinks to be recognised by the TPP. Might be contained, if several authentication methods\nare available for the PSU.\nType of links admitted in this response:\n  * 'updateAdditionalPsuAuthentication':\n    The link to the payment initiation or account information resource,\n    which needs to be updated by an additional PSU password.\n    This link is only contained in rare cases,\n    where such additional passwords are needed for PSU authentications.\n  * 'updateAdditionalEncryptedPsuAuthentication':\n    The link to the payment initiation or account information resource,\n    which needs to be updated by an additional encrypted PSU password.\n    This link is only contained in rare cases, where such additional passwords are needed for PSU authentications.\n  * 'selectAuthenticationMethod':\n    This is a link to a resource, where the TPP can select the applicable second factor authentication\n    methods for the PSU, if there were several available authentication methods.\n    This link is only contained, if the PSU is already identified or authenticated with the first relevant\n    factor or alternatively an access token, if SCA is required and if the PSU has a choice between different\n    authentication methods.\n    If this link is contained, then there is also the data element 'scaMethods' contained in the response body.\n  * 'authoriseTransaction': \n    The link to the resource, where the \"Transaction authorisation request\" is sent to. \n    This is the link to the resource which will authorise the transaction by checking the SCA authentication \n    data within the Embedded SCA approach.\n  * 'scaStatus':\n    The link to retrieve the scaStatus of the corresponding authorisation sub-resource.\n",
  })
  .openapi('LinksUpdatePsuAuthentication')

const LinksUpdatePsuIdentificationSchema = z
  .object({
    scaStatus: HrefTypeSchema.exactOptional(),
    selectAuthenticationMethod: HrefTypeSchema.exactOptional(),
  })
  .catchall(HrefTypeSchema)
  .openapi({
    description:
      "A list of hyperlinks to be recognised by the TPP. The actual hyperlinks used in the response depend on the dynamical decisions of the ASPSP when processing the request.\n\n**Remark:** All links can be relative or full links, to be decided by the ASPSP.\n\nType of links admitted in this response, (further links might be added for ASPSP\ndefined extensions):\n\n- 'scaStatus': The link to retrieve the scaStatus of the corresponding authorisation sub-resource.\n- 'selectAuthenticationMethod': This is a link to a resource, where the TPP can select the applicable second factor authentication methods for the PSU, if there are several available authentication methods and if the PSU is already sufficiently authenticated.. If this link is contained, then there is also the data element \"scaMethods\" contained in the response body.\n",
  })
  .openapi('LinksUpdatePsuIdentification')

const AdditionalInformationAccessSchema = z
  .object({
    ownerName: z
      .array(AccountReference16CHSchema)
      .exactOptional()
      .openapi({
        description:
          'Is asking for account owner name of the accounts referenced within. \nIf the array is empty in the request, the TPP is asking for the account \nowner name of all accessible accounts. \nThis may be restricted in a PSU/ASPSP authorization dialogue. \nIf the array is empty, also the arrays for accounts, balances or transactions shall be empty, if used.\nThe ASPSP will indicate in the consent resource after a successful authorisation, \nwhether the ownerName consent can be accepted by providing the accounts on which the ownerName will \nbe delivered. \nThis array can be empty.\n',
      }),
    trustedBeneficiaries: z
      .array(AccountReference16CHSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional if supported by API provider.\nIs asking for the trusted beneficiaries related to the accounts referenced within and related to the PSU.\nIf the array is empty in the request, the TPP is asking for the lists of trusted beneficiaries of all accessible accounts. \nThis may be restricted in a PSU/ASPSP authorization dialogue by the PSU if also the account lists addressed \nby the tags “accounts”, “balances” or “transactions” are empty.\nThe ASPSP will indicate in the consent resource after a successful authorisation, \nwhether the trustedBeneficiaries consent can be accepted by providing the accounts on which the list of trusted beneficiaries will be delivered. \nThis array can be empty.\n',
      }),
  })
  .openapi({
    description:
      'Optional if supported by API provider.\n\nIs asking for additional information as added within this structured object.\nThe usage of this data element requires at least one of the entries "accounts", \n"transactions" or "balances" also to be contained in the object. \nIf detailed accounts are referenced, it is required in addition that any account addressed within \nthe additionalInformation attribute is also addressed by at least one of the attributes "accounts", \n"transactions" or "balances".\n',
    required: [],
  })
  .openapi('AdditionalInformationAccess')

const AccountAccessSchema = z
  .object({
    accounts: z
      .array(AccountReference16CHSchema)
      .exactOptional()
      .openapi({
        description:
          'Is asking for detailed account information. \n\nIf the array is empty in a request, the TPP is asking for an accessible account list. \nThis may be restricted in a PSU/ASPSP authorization dialogue. \nIf the array is empty, also the arrays for balances, additionalInformation sub attributes or transactions shall be empty, if used.\n',
      }),
    additionalInformation: AdditionalInformationAccessSchema.exactOptional(),
    allPsd2: z
      .enum(['allAccounts', 'allAccountsWithOwnerName'])
      .exactOptional()
      .openapi({
        description:
          'Optional if supported by API provider.\n\nThe values "allAccounts" and "allAccountsWithOwnerName" are admitted. \nThe support of the "allAccountsWithOwnerName" value by the ASPSP is optional.\n',
      }),
    availableAccounts: z
      .enum(['allAccounts', 'allAccountsWithOwnerName'])
      .exactOptional()
      .openapi({
        description:
          'Optional if supported by API provider.\n\nThe values "allAccounts" and "allAccountsWithOwnerName" are admitted. \nThe support of the "allAccountsWithOwnerName" value by the ASPSP is optional.\n',
      }),
    availableAccountsWithBalance: z
      .enum(['allAccounts', 'allAccountsWithOwnerName'])
      .exactOptional()
      .openapi({
        description:
          'Optional if supported by API provider.\n\nThe values "allAccounts" and "allAccountsWithOwnerName" are admitted. \nThe support of the "allAccountsWithOwnerName" value by the ASPSP is optional.\n',
      }),
    balances: z
      .array(AccountReference16CHSchema)
      .exactOptional()
      .openapi({
        description:
          'Is asking for balances of the addressed accounts.\n\nIf the array is empty in the request, the TPP is asking for the balances of all accessible account lists. \nThis may be restricted in a PSU/ASPSP authorization dialogue. \nIf the array is empty, also the arrays for accounts, additionalInformation sub attributes or transactions shall be empty, if used.\n',
      }),
    restrictedTo: z
      .array(CashAccountTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'If the TPP requests access to accounts via availableAccounts (List of available accounts), global \nor bank driven consents, the TPP may include this element to restrict access to the referred \naccount types. Absence of the element is interpreted as "no restriction" (therefore access to \naccounts of all types is requested). The element may only occur, if each of the elements \n  - accounts \n  - balances \n  - transactions \nis either not present or contains an empty array. \n',
      }),
    transactions: z
      .array(AccountReference16CHSchema)
      .exactOptional()
      .openapi({
        description:
          'Is asking for transactions of the addressed accounts. \n\nIf the array is empty in the request, the TPP is asking for the transactions of all accessible account lists. \nThis may be restricted in a PSU/ASPSP authorization dialogue. \nIf the array is empty, also the arrays for accounts, additionalInformation sub attributes or balances shall be empty, if used.\n',
      }),
  })
  .openapi({ description: 'Requested access services for a consent.\n', required: [] })
  .openapi('AccountAccess')

const AccountDetailsSchema: z.ZodType<AccountDetailsType> = z
  .lazy(() =>
    z
      .object({
        _links: LinksAccountDetailsSchema.exactOptional(),
        balances: BalanceListSchema.exactOptional(),
        bban: BbanSchema.exactOptional(),
        bic: BicfiSchema.exactOptional(),
        cashAccountType: CashAccountTypeSchema.exactOptional(),
        currency: CurrencyCodeSchema,
        details: z
          .string()
          .max(500)
          .exactOptional()
          .openapi({
            description:
              'Specifications that might be provided by the ASPSP:\n  - characteristics of the account\n  - characteristics of the relevant card\n',
          }),
        displayName: DisplayNameSchema.exactOptional(),
        iban: IbanSchema.exactOptional(),
        linkedAccounts: z
          .string()
          .max(70)
          .exactOptional()
          .openapi({
            description:
              'Case of a set of pending card transactions, the APSP will provide the relevant cash account the card is set up on.',
          }),
        msisdn: MsisdnSchema.exactOptional(),
        name: z
          .string()
          .max(70)
          .exactOptional()
          .openapi({
            description:
              'Name of the account, as assigned by the ASPSP, in agreement with the account owner in order to provide an additional means of identification of the account.',
          }),
        ownerName: OwnerNameSchema.exactOptional(),
        product: z
          .string()
          .max(35)
          .exactOptional()
          .openapi({
            description: 'Product name of the bank for this account, proprietary definition.',
          }),
        resourceId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This shall be filled, if addressable resource are created by the ASPSP on the /accounts or /card-accounts endpoint.',
          }),
        status: AccountStatusSchema.exactOptional(),
        usage: z
          .enum(['PRIV', 'ORGA'])
          .exactOptional()
          .openapi({
            description:
              'Specifies the usage of the account:\n  * PRIV: private personal account\n  * ORGA: professional account\n',
          }),
      })
      .openapi({
        description:
          'The ASPSP shall give at least one of the account reference identifiers:\n  - iban\n  - bban\n  - pan\n  - maskedPan\n  - msisdn\nIf the account is a multicurrency account currency code in "currency" is set to "XXX".\n',
        required: ['currency'],
      }),
  )
  .openapi('AccountDetails')

const AccountIdSchema = z
  .string()
  .openapi({
    description:
      'This identification is denoting the addressed account, where the transaction has been performed.',
    example: 'qwer3456tzui7890',
  })
  .openapi('AccountId')

const AccountListSchema = z
  .object({ accounts: z.array(AccountDetailsSchema) })
  .openapi({ description: 'List of accounts with details.\n', required: ['accounts'] })
  .openapi('AccountList')

const AccountReportSchema: z.ZodType<AccountReportType> = z
  .lazy(() =>
    z
      .object({
        _links: LinksAccountReportSchema,
        booked: TransactionListSchema.exactOptional(),
        information: TransactionListSchema.exactOptional(),
        pending: TransactionListSchema.exactOptional(),
      })
      .openapi({
        description:
          'JSON based account report.\nThis account report contains transactions resulting from the query parameters.\n\n\'booked\' shall be contained if bookingStatus parameter is set to "booked" or "both".\n\n\'pending\' is not contained if the bookingStatus parameter is set to "booked" or "information".\n\n\'information\' Only contained if the bookingStatus is set to "information" and if supported by ASPSP.\n',
        required: ['_links'],
      }),
  )
  .openapi('AccountReport')

const AuthenticationMethodIdSchema = z
  .string()
  .max(35)
  .openapi({
    description:
      'An identification provided by the ASPSP for the later identification of the authentication method selection.\n',
    example: 'myAuthenticationID',
  })
  .openapi('AuthenticationMethodId')

const AuthenticationTypeSchema = z
  .enum(['SMS_OTP', 'CHIP_OTP', 'PHOTO_OTP', 'PUSH_OTP', 'SMTP_OTP'])
  .openapi({
    description:
      "Type of the authentication method.\n\nMore authentication types might be added during implementation projects and documented in the ASPSP documentation.\n\n  - 'SMS_OTP': An SCA method, where an OTP linked to the transaction to be authorised is sent to the PSU through a SMS channel.\n  - 'CHIP_OTP': An SCA method, where an OTP is generated by a chip card, e.g. a TOP derived from an EMV cryptogram. \n    To contact the card, the PSU normally needs a (handheld) device. \n    With this device, the PSU either reads the challenging data through a visual interface like flickering or \n    the PSU types in the challenge through the device key pad. \n    The device then derives an OTP from the challenge data and displays the OTP to the PSU.\n  - 'PHOTO_OTP': An SCA method, where the challenge is a QR code or similar encoded visual data\n    which can be read in by a consumer device or specific mobile app.\n    The device resp. the specific app than derives an OTP from the visual challenge data and displays\n    the OTP to the PSU.\n  - 'PUSH_OTP': An OTP is pushed to a dedicated authentication APP and displayed to the PSU.\n  - 'SMTP_OTP': An OTP is sent via email to the PSU.\n",
  })
  .openapi('AuthenticationType')

const AuthenticationObjectSchema = z
  .object({
    authenticationMethodId: AuthenticationMethodIdSchema,
    authenticationType: AuthenticationTypeSchema,
    authenticationVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Depending on the "authenticationType".\nThis version can be used by differentiating authentication tools used within performing OTP generation in the same authentication type.\nThis version can be referred to in the ASPSP?s documentation.\n',
      }),
    explanation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Detailed information about the SCA method for the PSU.\n',
        example: 'Detailed information about the SCA method for the PSU.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the name of the authentication method defined by the PSU in the Online Banking frontend of the ASPSP.\nAlternatively this could be a description provided by the ASPSP like "SMS OTP on phone +49160 xxxxx 28".\nThis name shall be used by the TPP when presenting a list of authentication methods to the PSU, if available.\n',
        example: 'SMS OTP on phone +49160 xxxxx 28',
      }),
  })
  .openapi({
    description: 'Authentication object.\n',
    required: ['authenticationType', 'authenticationMethodId'],
  })
  .openapi('AuthenticationObject')

const AuthorisationConfirmationSchema = z
  .object({
    confirmationCode: z
      .string()
      .openapi({
        description:
          'Confirmation Code as retrieved by the TPP from the redirect based SCA process.',
      }),
  })
  .openapi({
    description: 'Content of the body of an authorisation confirmation request\n',
    required: ['confirmationCode'],
  })
  .openapi('AuthorisationConfirmation')

const PsuMessageTextSchema = z
  .string()
  .max(500)
  .openapi({ description: 'Text to be displayed to the PSU.' })
  .openapi('PsuMessageText')

const ScaStatusAuthorisationConfirmationSchema = z
  .enum(['finalised', 'failed'])
  .openapi({
    description:
      "This data element is containing information about the status of the SCA method in an authorisation confirmation response. \n\nThe following codes are defined for this data type.\n\n  * 'finalised': if the transaction authorisation and confirmation was successfule.\n  * 'failed': if the transaction authorisation or confirmation was not successful.\n",
  })
  .openapi('ScaStatusAuthorisationConfirmation')

const AuthorisationConfirmationResponseSchema = z
  .object({
    _links: LinksAuthorisationConfirmationSchema,
    psuMessage: PsuMessageTextSchema.exactOptional(),
    scaStatus: ScaStatusAuthorisationConfirmationSchema,
  })
  .openapi({
    description: 'Body of the JSON response for an authorisation confirmation request.',
    required: ['scaStatus', '_links'],
  })
  .openapi('AuthorisationConfirmationResponse')

const AuthorisationIdSchema = z
  .string()
  .openapi({ description: 'Resource identification of the related SCA.', example: '123auth456' })
  .openapi('AuthorisationId')

const AuthorisationsListSchema = z
  .array(AuthorisationIdSchema)
  .openapi({ description: 'An array of all authorisationIds.' })
  .openapi('AuthorisationsList')

const AuthorisationsSchema = z
  .object({ authorisationIds: AuthorisationsListSchema })
  .openapi({ description: 'An array of all authorisationIds.', required: ['authorisationIds'] })
  .openapi('Authorisations')

const AuthorizationSchema = z
  .string()
  .openapi({ description: 'Authorization by OAuth2 based Protocol.\n' })
  .openapi('Authorization')

const BasketIdSchema = z
  .string()
  .openapi({
    description: 'Resource identification of the generated signing basket resource.',
    example: '1234-basket-567',
  })
  .openapi('BasketId')

const BatchBookingPreferredSchema = z
  .boolean()
  .openapi({
    description:
      "If this element equals 'true', the PSU prefers only one booking entry.\nIf this element equals 'false', the PSU prefers individual booking of all contained individual transactions.\n\nThe ASPSP will follow this preference according to contracts agreed on with the PSU.\n",
    example: false,
  })
  .openapi('BatchBookingPreferred')

const ChargeBearerSchema = z
  .enum(['DEBT', 'CRED', 'SHAR', 'SLEV'])
  .openapi({ description: 'Charge Bearer. ChargeBearerType1Code from ISO20022.' })
  .openapi('ChargeBearer')

const PostalAddress6CHSchema = z
  .object({
    addressLine1: z.string().max(70).exactOptional(),
    addressLine2: z.string().max(70).exactOptional(),
    buildingNumber: z.string().max(16).exactOptional(),
    country: CountryCodeSchema.exactOptional(),
    postCode: z.string().max(16).exactOptional(),
    streetName: z.string().max(70).exactOptional(),
    townName: z.string().max(35).exactOptional(),
  })
  .openapi({
    description:
      'as in ISO pain.001.001.03.ch.02 PostalAddress6\nIf possible structured. Simultaneous use of the structured elements <StrtNm>/ <BldgNb>/<PstCd>/<TwnNm> and the unstructured element <AdrLine> is not permitted.\nas in ISO pain.001.001.03.ch.02 PostalAddress6-CH\n',
    required: [],
  })
  .openapi('PostalAddress6CH')

const InstitutionalIdentification2Schema = z
  .object({
    clearingSystemIdCode: z.string().min(1).max(5),
    clearingSystemMemberId: z.string().max(35),
  })
  .openapi({
    description:
      'Institiutional identification of a bank (Clearing System Member ID)\nadapted from ISO pain.001.001.03.ch.02 ClearingSystemMemberIdentification2\n',
    required: ['clearingSystemIdCode', 'clearingSystemMemberId'],
  })
  .openapi('InstitutionalIdentification2')

const CreditorAgent7CHSchema = z
  .object({
    address: PostalAddress6CHSchema.exactOptional(),
    bic: BicfiSchema.exactOptional(),
    iid: InstitutionalIdentification2Schema.exactOptional(),
    name: z.string().max(35).exactOptional(),
  })
  .openapi({
    description:
      'Reference to an creditorAgent by either\n  * BIC, of the creditor bank, or\n  * IID, of the creditor bank, or\n  * IID and optional name and address of the creditor bank or\n  * Name and address of the creditor bank\nadapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH\n',
    required: [],
  })
  .openapi('CreditorAgent7CH')

const CreditorAgentNameSchema = z
  .string()
  .max(35)
  .openapi({ description: 'Creditor agent name.', example: 'Creditor Id 1234' })
  .openapi('CreditorAgentName')

const CreditorNameAndAddressSchema = z
  .string()
  .max(140)
  .openapi({
    description: 'Creditor Name and Address in a free text field.',
    example: 'Max Masters, Main Street 1, 12345 City, Example Country',
  })
  .openapi('CreditorNameAndAddress')

const DebtorIdSchema = z
  .string()
  .max(35)
  .openapi({ description: 'Debtor Id.', example: 'Debtor Id 1234' })
  .openapi('DebtorId')

const ExchangeRateInformation1Schema = z
  .object({
    contractIdentification: z.string().max(35).exactOptional(),
    exchangeRate: z.string().exactOptional(),
    rateType: z.enum(['SPOT', 'SALE', 'AGRD']).exactOptional(),
  })
  .openapi({
    description: 'as in ISO pain.001.001.03.ch.02 ExchangeRateInformation1',
    required: [],
  })
  .openapi('ExchangeRateInformation1')

const ExternalServiceLevel1CodeSchema = z
  .enum(['SEPA', 'PRPT', 'SDVA', 'URGP'])
  .openapi({
    description:
      'Specifies the external service level code in the format of character string with a maximum length of 4 characters.',
  })
  .openapi('ExternalServiceLevel1Code')

const PaymentInitiationBulkElementJsonSchema = z
  .object({
    chargeBearer: ChargeBearerSchema.exactOptional(),
    creditorAccount: AccountReference16CHSchema,
    creditorAddress: AddressSchema.exactOptional(),
    creditorAgent: CreditorAgent7CHSchema.exactOptional(),
    creditorAgentName: CreditorAgentNameSchema.exactOptional(),
    creditorId: CreditorIdSchema.exactOptional(),
    creditorName: CreditorNameSchema,
    creditorNameAndAddress: CreditorNameAndAddressSchema.exactOptional(),
    debtorId: DebtorIdSchema.exactOptional(),
    debtorName: DebtorNameSchema,
    endToEndIdentification: z.string().max(35),
    equivalentAmount: AmountSchema.exactOptional(),
    exchangeRateInformation: ExchangeRateInformation1Schema.exactOptional(),
    instructedAmount: AmountSchema.exactOptional(),
    intermediaryAgent: BicfiSchema.exactOptional(),
    purposeCode: PurposeCodeSchema.exactOptional(),
    remittanceInformationStructured: RemittanceInformationStructuredSchema.exactOptional(),
    remittanceInformationUnstructured: RemittanceInformationUnstructuredSchema.exactOptional(),
    serviceLevel: ExternalServiceLevel1CodeSchema.exactOptional(),
    transactionCurrency: CurrencyCodeSchema.exactOptional(),
    ultimateCreditor: UltimateCreditorSchema.exactOptional(),
    ultimateDebtor: UltimateDebtorSchema.exactOptional(),
  })
  .openapi({
    description:
      'Generic body for a bulk payment initation entry.\n\nThe bulk entry type is a type which follows the JSON formats for the supported products for single payments\nexcluding the data elements (if supported):\n  * debtorAccount\n  * requestedExecutionDate,\n  * requestedExecutionTime.\nThese data elements may not be contained in any bulk entry.\n\nThis data object can be used to represent valid bulk payment initiations entry for the following JSON based payment product,\nwhich where defined in the Implementation Guidelines:\n\n  * domestic-swiss-credit-transfers-isr\n  * domestic-swiss-credit-transfers\n  * domestic-swiss-credit-transfers-qr\n  * domestic-swiss-foreign-credit-transfers\n  * swiss-sepa-credit-transfers\n  * swiss-cross-border-credit-transfers\n\nFor the convenience of the implementer additional which are already predefinded in the Implementation Guidelines\nare included (but commented in source code), such that an ASPSP may add them easily.\n\nTake care: Since the format is intended to fit for all payment products\nthere are additional conditions which are NOT covered by this specification.\nPlease check the SIX Swiss Payment Standards implementation guidelines for details.\n\n\nThe following data element are depending on the actual payment product available (in source code):\n\n<table style="width:100%">\n<tr><td></td><td>Payment Type 1: ISR</td><td>Payment Type 3: IBAN/postal account and IID/BIC</td><td>Payment Type 3: QR-bill</td><td>Payment Type 4: Foreign currency</td><td>Payment Type 5: Foreign SEPA</td><td>Payment Type 6: Foreign</td></tr>\n<tr><td>CH Domestic Data Element</td><td>domestic-swiss-credit-transfers-isr</td><td>domestic-swiss-credit-transfers</td><td>domestic-swiss-credit-transfers-qr</td><td>domestic-swiss-foreign-credit-transfers</td><td>swiss-sepa-credit-transfers</td><td>swiss-cross-border-credit-transfers</td></tr>\n<tr><td>endToEndIdentification</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>instructionIdentification</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>debtorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>debtorId</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td></tr>\n<tr><td>ultimateDebtor</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>instructedAmount (incl. currency)</td><td>mandatory</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>\n<tr><td>equivalentAmount</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>\n<tr><td>transactionCurrency</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>\n<tr><td>exchangeRateInformation</td><td>n.a.</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td></tr>\n<tr><td>creditorAccount</td><td>mandatory</td><td>mandatory</td><td>mandatory 8)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>creditorAgent</td><td>n.a.</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td></tr>\n<tr><td>creditorAgentName</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>dependent 5)</td><td>n.a.</td><td>dependent 5)</td></tr>\n<tr><td>creditorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>creditorId</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>creditorAddress</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>creditorNameAndAddress</td><td>n.a.</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td></tr>\n<tr><td>ultimateCreditor</td><td>n.a.</td><td>optional</td><td>n.a. (for future use)</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>chargeBearer</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>\n<tr><td>purposeCode</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>serviceLevel</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>\n<tr><td>remittanceInformationUnstructured</td><td>n.a.</td><td>optional</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>remittanceInformationUnstructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>remittanceInformationStructured</td><td>mandatory</td><td>optional</td><td>mandatory 6)</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>remittanceInformationStructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>intermediaryAgent</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>optional 2)</td><td>n.a.</td><td>optional 2)</td></tr>\n</table>\n\nFootnotes from the table:\n1) This element may only be used by agreement with the instructed financial institution.\n2) The element may only be used in consultation with the financial institution commissioned.\n3) The element is currently ignored by financial institutions.\n4) Dependence on creditorAccount, see SIX Swiss Payments Standards implementation guidelines.\n5) Type 4(V3), 6(V2, V3): Must be present. Type 4(V2): May be present. Other species: May not be present.\n6) QR-reference, creditor reference or IPI reference\n7) currencyOfTransfer is a subfield of equivalentAmount and may only be used if equivalentAmount is used instead of instructedAmount.\n8) QR-IBAN (CH/LI) must be present.\n\nIMPORTANT: In this API definition the following holds:\n  *  All data elements mentioned above are defined, but some of them are commented,\n    i.e. they are only visible in the source code and can be used by uncommenting them.\n  * Data elements which are mandatory in the table above for all payment products\n    are set to be mandatory in this specification.\n  * Data elements which are indicated in the table above as n.a. for all payment products are commented in the source code.\n  * Data elements which are indicated to be option, conditional or mandatory for at least one payment product\n    in the table above are set to be optional in the s specification except the case where all are definde to be mandatory.\n  * Data element which are inticated to be n.a. can be used by the ASPS if needed.\n    In this case uncomment tthe the relatetd lines in the source code.\n  * If one uses this data types for some payment products he has to ensure that the used data type is\n    valid according to the underlying payment product, e.g. by some appropriate validations.\n',
    required: ['endToEndIdentification', 'debtorName', 'creditorAccount', 'creditorName'],
  })
  .openapi('PaymentInitiationBulkElementJson')

const TransactionStatusSchema = z
  .enum([
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
  .openapi({
    description:
      "The transaction status is filled with codes of the ISO 20022 data table:\n- 'ACCC': 'AcceptedSettlementCompleted' -\n  Settlement on the creditor's account has been completed.\n- 'ACCP': 'AcceptedCustomerProfile' -\n  Preceding check of technical validation was successful.\n  Customer profile check was also successful.\n- 'ACSC': 'AcceptedSettlementCompleted' -\n  Settlement on the debtoro?=s account has been completed.\n\n  **Usage:** this can be used by the first agent to report to the debtor that the transaction has been completed.\n\n  **Warning:** this status is provided for transaction status reasons, not for financial information.\n  It can only be used after bilateral agreement.\n- 'ACSP': 'AcceptedSettlementInProcess' -\n  All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution.\n- 'ACTC': 'AcceptedTechnicalValidation' -\n  Authentication and syntactical and semantical validation are successful.\n- 'ACWC': 'AcceptedWithChange' -\n  Instruction is accepted but a change will be made, such as date or remittance not sent.\n- 'ACWP': 'AcceptedWithoutPosting' -\n  Payment instruction included in the credit transfer is accepted without being posted to the creditor customero?=s account.\n- 'RCVD': 'Received' -\n  Payment initiation has been received by the receiving agent.\n- 'PDNG': 'Pending' -\n  Payment initiation or individual transaction included in the payment initiation is pending.\n  Further checks and status update will be performed.\n- 'RJCT': 'Rejected' -\n  Payment initiation or individual transaction included in the payment initiation has been rejected.\n- 'CANC': 'Cancelled'\n  Payment initiation has been cancelled before execution\n  Remark: This codeis accepted as new code by ISO20022.\n- 'ACFC': 'AcceptedFundsChecked' -\n  Preceding check of technical validation and customer profile was successful and an automatic funds check was positive .\n  Remark: This code is accepted as new code by ISO20022.\n- 'PATC': 'PartiallyAcceptedTechnical'\n  Correct The payment initiation needs multiple authentications, where some but not yet all have been performed. Syntactical and semantical validations are successful.\n  Remark: This code is accepted as new code by ISO20022.\n- 'PART': 'PartiallyAccepted' -\n  A number of transactions have been accepted, whereas another number of transactions have not yet achieved 'accepted' status.\n  Remark: This code may be used only in case of bulk payments. It is only used in a situation where all mandated authorisations have been applied, but some payments have been rejected.\n",
    example: 'ACCP',
  })
  .openapi('TransactionStatus')

const BulkPaymentInitiationWithStatusResponseSchema = z
  .object({
    acceptorTransactionDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    batchBookingPreferred: BatchBookingPreferredSchema.exactOptional(),
    debtorAccount: AccountReference16CHSchema,
    paymentInformationId: z.string().max(35).exactOptional(),
    payments: z
      .array(PaymentInitiationBulkElementJsonSchema)
      .openapi({
        description:
          'A list of generic JSON bodies payment initations for bulk payments via JSON.\n\nNote: Some fields from single payments do not occcur in a bulk payment element\n',
      }),
    requestedExecutionDate: z.iso.date().exactOptional(),
    transactionStatus: TransactionStatusSchema.exactOptional(),
  })
  .openapi({
    description:
      'Generic JSON response body consistion of the corresponding bulk payment initation JSON body together with an optional transaction status field.\n',
    required: ['payments', 'debtorAccount'],
  })
  .openapi('BulkPaymentInitiationWithStatusResponse')

const DebtorAgent7CHSchema = z
  .object({
    bic: BicfiSchema.exactOptional(),
    iid: InstitutionalIdentification2Schema.exactOptional(),
  })
  .openapi({
    description:
      'Reference to an debtorAgent by either\n  * BIC, of the debtor bank, or\n  * IID, of the debtor bank\nadapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH_BicOrClrId\n',
    required: [],
  })
  .openapi('DebtorAgent7CH')

const BulkPaymentInitiationJsonSchema = z
  .object({
    batchBookingPreferred: BatchBookingPreferredSchema.exactOptional(),
    debtorAccount: AccountReference16CHSchema,
    debtorAgent: DebtorAgent7CHSchema,
    payments: z
      .array(PaymentInitiationBulkElementJsonSchema)
      .openapi({
        description:
          'A list of generic JSON bodies payment initations for bulk payments via JSON.\n\nNote: Some fields from single payments do not occcur in a bulk payment element\n',
      }),
    requestedExecutionDate: z.iso.date().exactOptional(),
    requestedExecutionTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({
    description:
      'Generic Body for a bulk payment initation via JSON.\n\npaymentInformationId is contained in code but commented since it is n.a.\nand not all ASPSP are able to support this field now.\nIn a later version the field will be mandatory.\n',
    required: ['payments', 'debtorAccount', 'debtorAgent'],
  })
  .openapi('BulkPaymentInitiationJson')

const Camt_052Schema = z
  .string()
  .openapi({ description: 'camt.052 XML message.\n' })
  .openapi('Camt_052')

const Camt_053Schema = z
  .string()
  .openapi({
    description: 'camt.053 XML message.\n',
    example: { $ref: '#/components/examples/camt.053_simple_xml' },
  })
  .openapi('Camt_053')

const Camt_054Schema = z
  .string()
  .openapi({ description: 'camt.054 XML message.\n' })
  .openapi('Camt_054')

const DebitAccountingSchema = z
  .boolean()
  .openapi({
    description:
      'If true, the amounts of debits on the reports are quoted positive with the related consequence for balances.\nIf false, the amount of debits on the reports are quoted negative.\n',
  })
  .openapi('DebitAccounting')

const CardAccountDetailsSchema = z
  .object({
    _links: LinksAccountDetailsSchema.exactOptional(),
    balances: BalanceListSchema.exactOptional(),
    creditLimit: AmountSchema.exactOptional(),
    currency: CurrencyCodeSchema,
    debitAccounting: DebitAccountingSchema.exactOptional(),
    details: z
      .string()
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Specifications that might be provided by the ASPSP:\n  - characteristics of the account\n  - characteristics of the relevant card\n',
      }),
    displayName: DisplayNameSchema.exactOptional(),
    maskedPan: MaskedPanSchema,
    name: z
      .string()
      .max(70)
      .exactOptional()
      .openapi({
        description:
          'Name of the account, as assigned by the ASPSP, \nin agreement with the account owner in order to provide an additional means of identification of the account.\n',
      }),
    ownerName: OwnerNameSchema.exactOptional(),
    product: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({
        description: 'Product Name of the Bank for this account, proprietary definition.\n',
      }),
    resourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the data element to be used in the path when retrieving data from a dedicated account.\nThis shall be filled, if addressable resource are created by the ASPSP on the /card-accounts endpoint.\n',
      }),
    status: AccountStatusSchema.exactOptional(),
    usage: z
      .enum(['PRIV', 'ORGA'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the usage of the account:\n  * PRIV: private personal account\n  * ORGA: professional account\n',
      }),
  })
  .openapi({ description: 'Card account details.\n', required: ['maskedPan', 'currency'] })
  .openapi('CardAccountDetails')

const CardAccountListSchema = z
  .object({ cardAccounts: z.array(CardAccountDetailsSchema) })
  .openapi({ description: 'List of card accounts with details.\n', required: ['cardAccounts'] })
  .openapi('CardAccountList')

const CardAccountReportSchema: z.ZodType<CardAccountReportType> = z
  .lazy(() =>
    z
      .object({
        _links: LinksCardAccountReportSchema,
        booked: CardTransactionListSchema,
        pending: CardTransactionListSchema.exactOptional(),
      })
      .openapi({
        description:
          'JSON based card account report.\n\nThis card account report contains transactions resulting from the query parameters.\n',
        required: ['booked', '_links'],
      }),
  )
  .openapi('CardAccountReport')

const CardAccountsTransactionsResponse200Schema = z
  .object({
    _links: LinksDownloadSchema.exactOptional(),
    balances: BalanceListSchema.exactOptional(),
    cardAccount: AccountReference16CHSchema.exactOptional(),
    cardTransactions: CardAccountReportSchema.exactOptional(),
    debitAccounting: DebitAccountingSchema.exactOptional(),
  })
  .openapi({
    description:
      'Body of the JSON response for a successful read card account transaction list request.\nThis card account report contains transactions resulting from the query parameters.\n',
    required: [],
  })
  .openapi('CardAccountsTransactionsResponse200')

const ChallengeDataSchema = z
  .object({
    additionalInformation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional explanation for the PSU to explain\ne.g. fallback mechanism for the chosen SCA method.\nThe TPP is obliged to show this to the PSU.\n',
      }),
    data: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A collection of strings as challenge data.' }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PNG data (max. 512 kilobyte) to be displayed to the PSU,\nBase64 encoding, cp. [RFC4648].\nThis attribute is used only, when PHOTO_OTP or CHIP_OTP\nis the selected SCA method.\n',
      }),
    imageLink: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A link where the ASPSP will provides the challenge image for the TPP.',
      }),
    otpFormat: z
      .enum(['characters', 'integer'])
      .exactOptional()
      .openapi({
        description:
          'The format type of the OTP to be typed in. The admitted values are "characters" or "integer".',
      }),
    otpMaxLength: z
      .int()
      .exactOptional()
      .openapi({ description: 'The maximal length for the OTP to be typed in by the PSU.' }),
  })
  .openapi({
    description:
      "It is contained in addition to the data element 'chosenScaMethod' if challenge data is needed for SCA.\nIn rare cases this attribute is also used in the context of the 'startAuthorisationWithPsuAuthentication' link.\n",
    required: [],
  })
  .openapi('ChallengeData')

const ChosenScaMethodSchema = AuthenticationObjectSchema.openapi('ChosenScaMethod')

const CombinedServiceIndicatorSchema = z
  .boolean()
  .openapi({
    description:
      'If "true" indicates that a payment initiation service will be addressed in the same "session".\n',
    example: false,
  })
  .openapi('CombinedServiceIndicator')

const ConfirmationOfFundsSchema = z
  .object({
    account: AccountReference16CHSchema,
    cardNumber: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({
        description:
          'Card Number of the card issued by the PIISP.\nShould be delivered if available.\n',
      }),
    instructedAmount: AmountSchema,
    payee: z.string().max(70).exactOptional().openapi({ description: 'Name payee.' }),
  })
  .openapi({
    description:
      'JSON Request body for the "Confirmation of funds service".\n\n<table> \n<tr> \n  <td>cardNumber</td> \n  <td>String </td>\n  <td>Optional</td>\n  <td>Card Number of the card issued by the PIISP. Should be delivered if available.</td>\n</tr>\n<tr>\n  <td>account</td>\n  <td> Account Reference</td>\n  <td>Mandatory</td>\n  <td>PSU\'s account number.</td>\n</tr>\n<tr>\n  <td>payee</td>\n  <td>Max70Text</td>\n  <td>Optional</td>\n  <td>The merchant where the card is accepted as an information to the PSU.</td>\n</tr>\n<tr>\n  <td>instructedAmount</td>\n  <td>Amount</td>\n  <td>Mandatory</td>\n  <td>Transaction amount to be checked within the funds check mechanism.</td>\n</tr>\n</table>\n',
    required: ['account', 'instructedAmount'],
  })
  .openapi('ConfirmationOfFunds')

const ConsentIdSchema = z
  .string()
  .openapi({
    description:
      'ID of the corresponding consent object as returned by an account information consent request.\n',
  })
  .openapi('ConsentId')

const ConsentIdListSchema = z
  .array(ConsentIdSchema)
  .min(1)
  .openapi({ description: 'A list of consentIds.' })
  .openapi('ConsentIdList')

const ConsentStatusSchema = z
  .enum([
    'received',
    'rejected',
    'valid',
    'revokedByPsu',
    'expired',
    'terminatedByTpp',
    'partiallyAuthorised',
  ])
  .openapi({
    description:
      "This is the overall lifecycle status of the consent.\n\nValid values are:\n  - 'received': The consent data have been received and are technically correct.\n    The data is not authorised yet.\n  - 'rejected': The consent data have been rejected e.g. since no successful authorisation has taken place.\n  - 'valid': The consent is accepted and valid for GET account data calls and others as specified in the consent object.\n  - 'revokedByPsu': The consent has been revoked by the PSU towards the ASPSP.\n  - 'expired': The consent expired.\n  - 'terminatedByTpp': The corresponding TPP has terminated the consent by applying the DELETE method to the consent resource.\n  - 'partiallyAuthorised': The consent is due to a multi-level authorisation, some but not all mandated authorisations have been performed yet.\n\nThe ASPSP might add further codes. These codes then shall be contained in the ASPSP's documentation of the XS2A interface \nand has to be added to this API definition as well.\n",
  })
  .openapi('ConsentStatus')

const FrequencyPerDaySchema = z
  .int()
  .min(1)
  .openapi({
    description:
      'This field indicates the requested maximum frequency for an access without PSU involvement per day.\nFor a one-off access, this attribute is set to "1".\n\nThe frequency needs to be greater equal to one.\n\nIf not otherwise agreed bilaterally between TPP and ASPSP, the frequency is less equal to 4.\n',
    example: 4,
  })
  .openapi('FrequencyPerDay')

const LastActionDateSchema = z.iso
  .date()
  .openapi({
    description:
      'This date is containing the date of the last action on the consent object either through\nthe XS2A interface or the PSU/ASPSP interface having an impact on the status.\n',
    example: '2018-07-01',
  })
  .openapi('LastActionDate')

const RecurringIndicatorSchema = z
  .boolean()
  .openapi({
    description:
      '"true", if the consent is for recurring access to the account data.\n\n"false", if the consent is for one access to the account data.\n',
    example: false,
  })
  .openapi('RecurringIndicator')

const ValidUntilSchema = z.iso
  .date()
  .openapi({
    description:
      'This parameter is defining a valid until date (including the mentioned date) for the requested consent. \nThe content is the local ASPSP date in ISO-Date format, e.g. 2017-10-30.\n\nFuture dates might get adjusted by ASPSP. \n\nIf a maximal available date is requested, a date in far future is to be used: "9999-12-31". \n\nIn both cases the consent object to be retrieved by the get consent request will contain the adjusted date.\n',
    example: '2020-12-31',
  })
  .openapi('ValidUntil')

const ConsentInformationResponse_200JsonSchema = z
  .object({
    _links: LinksGetConsentSchema.exactOptional(),
    access: AccountAccessSchema,
    consentStatus: ConsentStatusSchema,
    frequencyPerDay: FrequencyPerDaySchema,
    lastActionDate: LastActionDateSchema,
    recurringIndicator: RecurringIndicatorSchema,
    validUntil: ValidUntilSchema,
  })
  .openapi({
    description: 'Body of the JSON response for a successfull get consent request.',
    required: [
      'access',
      'recurringIndicator',
      'validUntil',
      'frequencyPerDay',
      'lastActionDate',
      'consentStatus',
    ],
  })
  .openapi('ConsentInformationResponse_200Json')

const ConsentStatusResponse_200Schema = z
  .object({ consentStatus: ConsentStatusSchema, psuMessage: PsuMessageTextSchema.exactOptional() })
  .openapi({
    description: 'Body of the JSON response for a successful get status request for a consent.',
    required: ['consentStatus'],
  })
  .openapi('ConsentStatusResponse_200')

const ConsentsSchema = z
  .object({
    access: AccountAccessSchema,
    combinedServiceIndicator: z
      .boolean()
      .openapi({
        description:
          'If "true" indicates that a payment initiation service will be addressed in the same "session".\n',
        example: false,
      }),
    frequencyPerDay: FrequencyPerDaySchema,
    recurringIndicator: RecurringIndicatorSchema,
    validUntil: ValidUntilSchema,
  })
  .openapi({
    description: 'Content of the body of a consent request.\n',
    required: [
      'access',
      'recurringIndicator',
      'validUntil',
      'frequencyPerDay',
      'combinedServiceIndicator',
    ],
  })
  .openapi('Consents')

const ScaMethodsSchema = z
  .array(AuthenticationObjectSchema)
  .openapi({
    description:
      "This data element might be contained, if SCA is required and if the PSU has a choice between different\nauthentication methods.\n\nDepending on the risk management of the ASPSP this choice might be offered before or after the PSU\nhas been identified with the first relevant factor, or if an access token is transported.\n\nIf this data element is contained, then there is also a hyperlink of type 'startAuthorisationWithAuthenticationMethodSelection'\ncontained in the response body.\n\nThese methods shall be presented towards the PSU for selection by the TPP.\n",
  })
  .openapi('ScaMethods')

const ConsentsResponse_201Schema = z
  .object({
    _links: LinksConsentsSchema,
    challengeData: ChallengeDataSchema.exactOptional(),
    chosenScaMethod: AuthenticationObjectSchema.exactOptional(),
    consentId: ConsentIdSchema,
    consentStatus: ConsentStatusSchema,
    psuMessage: PsuMessageTextSchema.exactOptional(),
    scaMethods: ScaMethodsSchema.exactOptional(),
  })
  .openapi({
    description: 'Body of the JSON response for a successful consent request.',
    required: ['consentStatus', 'consentId', '_links'],
  })
  .openapi('ConsentsResponse_201')

const FundsAvailableSchema = z
  .boolean()
  .openapi({
    description:
      'Equals true if sufficient funds are available at the time of the request, false otherwise.\n\nThis datalemenet is allways contained in a confirmation of funds response.\n\nThis data element is contained in a payment status response, \nif supported by the ASPSP, if a funds check has been performed and \nif the transactionStatus is "ACTC", "ACWC" or "ACCP".\n',
  })
  .openapi('FundsAvailable')

const Mt940Schema = z
  .string()
  .openapi({ description: 'Data MT940 format in a text structure.\n' })
  .openapi('Mt940')

const Mt942Schema = z
  .string()
  .openapi({ description: 'Data MT942 format in a text structure.\n' })
  .openapi('Mt942')

const PanSchema = z
  .string()
  .max(35)
  .openapi({
    description: 'Primary Account Number according to ISO/IEC 7812.\n',
    example: '5409050000000000',
  })
  .openapi('Pan')

const PaymentIdSchema = z
  .string()
  .openapi({
    description: 'Resource identification of the generated payment initiation resource.',
    example: '1234-wertiq-983',
  })
  .openapi('PaymentId')

const PaymentIdListSchema = z
  .array(PaymentIdSchema)
  .min(1)
  .openapi({ description: 'A list of paymentIds.' })
  .openapi('PaymentIdList')

const TppMessage2XXSchema = z
  .object({
    category: TppMessageCategorySchema,
    code: MessageCode2XXSchema,
    path: z.string().exactOptional(),
    text: TppMessageTextSchema.exactOptional(),
  })
  .openapi({ required: ['category', 'code'] })
  .openapi('TppMessage2XX')

const TransactionFeeIndicatorSchema = z
  .boolean()
  .openapi({
    description:
      "If equals 'true', the transaction will involve specific transaction cost as shown by the ASPSP in\ntheir public price list or as agreed between ASPSP and PSU.\nIf equals 'false', the transaction will not involve additional specific transaction costs to the PSU unless the fee amount is given specifically in the data elements transactionFees and/or currencyConversionFees.\nIf this data element is not used, there is no information about transaction fees unless the fee amount is given explicitly in the data element transactionFees and/or currencyConversionFees.\n",
  })
  .openapi('TransactionFeeIndicator')

const PaymentInitationRequestResponse_201Schema = z
  .object({
    _links: LinksPaymentInitiationSchema,
    challengeData: ChallengeDataSchema.exactOptional(),
    chosenScaMethod: AuthenticationObjectSchema.exactOptional(),
    currencyConversionFee: AmountSchema.exactOptional(),
    estimatedInterbankSettlementAmount: AmountSchema.exactOptional(),
    estimatedTotalAmount: AmountSchema.exactOptional(),
    paymentId: PaymentIdSchema,
    psuMessage: PsuMessageTextSchema.exactOptional(),
    scaMethods: ScaMethodsSchema.exactOptional(),
    tppMessages: z.array(TppMessage2XXSchema).exactOptional(),
    transactionFeeIndicator: TransactionFeeIndicatorSchema.exactOptional(),
    transactionFees: AmountSchema.exactOptional(),
    transactionStatus: TransactionStatusSchema,
  })
  .openapi({
    description: 'Body of the response for a successful payment initiation request.',
    required: ['transactionStatus', 'paymentId', '_links'],
  })
  .openapi('PaymentInitationRequestResponse_201')

const PaymentInitiationCancelResponse_202Schema = z
  .object({
    _links: LinksPaymentInitiationCancelSchema.exactOptional(),
    challengeData: ChallengeDataSchema.exactOptional(),
    chosenScaMethod: AuthenticationObjectSchema.exactOptional(),
    scaMethods: ScaMethodsSchema.exactOptional(),
    transactionStatus: TransactionStatusSchema,
  })
  .openapi({
    description: 'Body of the response for a successful cancel payment request.',
    required: ['transactionStatus'],
  })
  .openapi('PaymentInitiationCancelResponse_202')

const PaymentInitiationCrossBorderPain_001Schema = z
  .string()
  .openapi({
    description:
      'A pain.001 structure corresponding to the cross-border schema.\n\nFor cross-border payments only community wide pain.001 schemes do exist.\n',
  })
  .openapi('PaymentInitiationCrossBorderPain_001')

const PaymentInitiationSctInstPain_001Schema = z
  .string()
  .openapi({ description: 'A pain.001 structure corresponding to the SCT INST schema.\n' })
  .openapi('PaymentInitiationSctInstPain_001')

const PaymentInitiationSctPain_001Schema = z
  .string()
  .openapi({
    description:
      'A pain.001 structure corresponding to the SCT schema\n\nurn:iso:std:iso:20022:tech:xsd:pain.001.001.03\n',
    example:
      '<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.001.001.03"> <CstmrCdtTrfInitn> <GrpHdr> <MsgId>MIPI-123456789RI-123456789</MsgId> <CreDtTm>2017-02-14T20:23:34.000Z</CreDtTm> <NbOfTxs>1</NbOfTxs> <CtrlSum>123</CtrlSum> <InitgPty> <Nm>PaymentInitiator</Nm> <Id><OrgId><Othr><Id>DE10000000012</Id> <SchmeNm><Prptry>PISP</Prptry></SchmeNm></Othr></OrgId></Id> </InitgPty> </GrpHdr> <PmtInf> <PmtInfId>BIPI-123456789RI-123456789</PmtInfId> <PmtMtd>TRF</PmtMtd> <NbOfTxs>1</NbOfTxs> <CtrlSum>123</CtrlSum> <PmtTpInf><SvcLvl><Cd>SEPA</Cd></SvcLvl></PmtTpInf> <ReqdExctnDt>2017-02-15</ReqdExctnDt> <Dbtr><Nm>PSU Name</Nm></Dbtr> <DbtrAcct><Id><IBAN>DE87200500001234567890</IBAN></Id></DbtrAcct> <ChrgBr>SLEV</ChrgBr> <CdtTrfTxInf> <PmtId><EndToEndId>RI-123456789</EndToEndId></PmtId> <Amt><InstdAmt Ccy="EUR">123</InstdAmt></Amt> <Cdtr><Nm>Merchant123</Nm></Cdtr> <CdtrAcct><Id><IBAN> DE23100120020123456789</IBAN></Id></CdtrAcct> <RmtInf><Ustrd>Ref Number Merchant-123456</Ustrd></RmtInf> </CdtTrfTxInf> </PmtInf> </CstmrCdtTrfInitn> </Document>',
  })
  .openapi('PaymentInitiationSctPain_001')

const PaymentInitiationStatusResponse_200JsonSchema = z
  .object({
    fundsAvailable: FundsAvailableSchema.exactOptional(),
    psuMessage: PsuMessageTextSchema.exactOptional(),
    transactionStatus: TransactionStatusSchema,
  })
  .openapi({
    description:
      'Body of the response for a successful payment initiation status request in case of an JSON based endpoint.',
    required: ['transactionStatus'],
  })
  .openapi('PaymentInitiationStatusResponse_200Json')

const PaymentInitiationStatusResponse_200XmlSchema = z
  .string()
  .openapi({
    description:
      'Body of the response for a successful payment initiation status request in case of an XML based endpoint.\n\nThe status is returned as a pain.002 structure.\n\nurn:iso:std:iso:20022:tech:xsd:pain.002.001.03\n\nThe chosen XML schema of the status request is following the XML schema definitions of the original pain.001 schema.\n',
  })
  .openapi('PaymentInitiationStatusResponse_200Xml')

const PaymentInitiationSwissSixPain_001Schema = z
  .string()
  .openapi({
    description:
      'A pain.001 structure corresponding to the swiss schema pain.001.001.03.ch.02.xsd\n',
  })
  .openapi('PaymentInitiationSwissSixPain_001')

const PaymentInitiationTarget2Pain_001Schema = z
  .string()
  .openapi({
    description:
      'A pain.001 structure corresponding to the target-2 schema.\n\nFor TARGET-2 payments only community wide pain.001 schemes do exist.\n',
  })
  .openapi('PaymentInitiationTarget2Pain_001')

const PaymentInitiationWithStatusResponseSchema = z
  .object({
    creditorAccount: AccountReference16CHSchema,
    creditorAddress: AddressSchema.exactOptional(),
    creditorAgent: CreditorAgent7CHSchema.exactOptional(),
    creditorName: CreditorNameSchema,
    debtorAccount: AccountReference16CHSchema,
    endToEndIdentification: z.string().max(35).exactOptional(),
    instructedAmount: AmountSchema,
    purposeCode: PurposeCodeSchema.exactOptional(),
    remittanceInformationStructured: RemittanceInformationStructuredSchema.exactOptional(),
    remittanceInformationUnstructured: RemittanceInformationUnstructuredSchema.exactOptional(),
    remittanceInformationUnstructuredArray:
      RemittanceInformationUnstructuredArraySchema.exactOptional(),
    requestedExecutionDate: z.iso.date().exactOptional(),
    requestedExecutionTime: z.iso.datetime({ offset: true }).exactOptional(),
    transactionStatus: TransactionStatusSchema.exactOptional(),
    ultimateCreditor: UltimateCreditorSchema.exactOptional(),
    ultimateDebtor: UltimateDebtorSchema.exactOptional(),
  })
  .openapi({
    description:
      'Generic JSON response body consistion of the corresponding payment initation JSON body together with an optional transaction status field.\n',
    required: ['debtorAccount', 'instructedAmount', 'creditorAccount', 'creditorName'],
  })
  .openapi('PaymentInitiationWithStatusResponse')

const PaymentInitiationJsonSchema = z
  .object({
    chargeBearer: ChargeBearerSchema.exactOptional(),
    creditorAccount: AccountReference16CHSchema,
    creditorAddress: AddressSchema.exactOptional(),
    creditorAgent: CreditorAgent7CHSchema.exactOptional(),
    creditorAgentName: CreditorAgentNameSchema.exactOptional(),
    creditorId: CreditorIdSchema.exactOptional(),
    creditorName: CreditorNameSchema,
    creditorNameAndAddress: CreditorNameAndAddressSchema.exactOptional(),
    debtorAccount: AccountReference16CHSchema,
    debtorAgent: DebtorAgent7CHSchema.exactOptional(),
    debtorId: DebtorIdSchema.exactOptional(),
    debtorName: DebtorNameSchema,
    endToEndIdentification: z.string().max(35),
    equivalentAmount: AmountSchema.exactOptional(),
    exchangeRateInformation: ExchangeRateInformation1Schema.exactOptional(),
    instructedAmount: AmountSchema.exactOptional(),
    intermediaryAgent: BicfiSchema.exactOptional(),
    purposeCode: PurposeCodeSchema.exactOptional(),
    remittanceInformationStructured: RemittanceInformationStructuredSchema.exactOptional(),
    remittanceInformationUnstructured: RemittanceInformationUnstructuredSchema.exactOptional(),
    requestedExecutionDate: z.iso.date(),
    serviceLevel: ExternalServiceLevel1CodeSchema.exactOptional(),
    transactionCurrency: CurrencyCodeSchema.exactOptional(),
    ultimateCreditor: UltimateCreditorSchema.exactOptional(),
    ultimateDebtor: UltimateDebtorSchema.exactOptional(),
  })
  .openapi({
    description:
      'Generic Body for a payment initation via JSON.\n\nThis generic JSON body can be used to represent valid payment initiations for the following JSON based payment product,\nwhich where defined in the Implementation Guidelines:\n\n  * domestic-swiss-credit-transfers-isr\n  * domestic-swiss-credit-transfers\n  * domestic-swiss-credit-transfers-qr\n  * domestic-swiss-foreign-credit-transfers\n  * swiss-sepa-credit-transfers\n  * swiss-cross-border-credit-transfers\n\nFor the convenience of the implementer additional which are already predefinded in the Implementation Guidelines\nare included (but commented in source code), such that an ASPSP may add them easily.\n\nTake care: Since the format is intended to fit for all payment products\nthere are additional conditions which are NOT covered by this specification.\nPlease check the SIX Swiss Payment Standards implementation guidelines for details.\n\n\nThe following data element are depending on the actual payment product available (in source code):\n\n<table style="width:100%">\n<tr><td></td><td>Payment Type 1: ISR</td><td>Payment Type 3: IBAN/postal account and IID/BIC</td><td>Payment Type 3: QR-bill</td><td>Payment Type 4: Foreign currency</td><td>Payment Type 5: Foreign SEPA</td><td>Payment Type 6: Foreign</td></tr>\n<tr><td>CH Domestic Data Element</td><td>domestic-swiss-credit-transfers-isr</td><td>domestic-swiss-credit-transfers</td><td>domestic-swiss-credit-transfers-qr</td><td>domestic-swiss-foreign-credit-transfers</td><td>swiss-sepa-credit-transfers</td><td>swiss-cross-border-credit-transfers</td></tr>\n<tr><td>endToEndIdentification</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>instructionIdentification</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>debtorAccount (incl. type)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>debtorAgent</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>optional</td></tr>\n<tr><td>debtorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>debtorId</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td></tr>\n<tr><td>ultimateDebtor</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>instructedAmount (incl. currency)</td><td>mandatory</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>\n<tr><td>equivalentAmount</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>\n<tr><td>transactionCurrency</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>\n<tr><td>exchangeRateInformation</td><td>n.a.</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td></tr>\n<tr><td>creditorAccount</td><td>mandatory</td><td>mandatory</td><td>mandatory 8)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>creditorAgent</td><td>n.a.</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td></tr>\n<tr><td>creditorAgentName</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>dependent 5)</td><td>n.a.</td><td>dependent 5)</td></tr>\n<tr><td>creditorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>creditorId</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>creditorAddress</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>creditorNameAndAddress</td><td>n.a.</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td></tr>\n<tr><td>ultimateCreditor</td><td>n.a.</td><td>optional</td><td>n.a. (for future use)</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>chargeBearer</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>\n<tr><td>purposeCode</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>serviceLevel</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>\n<tr><td>remittanceInformationUnstructured</td><td>n.a.</td><td>optional</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>remittanceInformationUnstructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>remittanceInformationStructured</td><td>mandatory</td><td>optional</td><td>mandatory 6)</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>remittanceInformationStructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>requestedExecutionDate</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>requestedExecutionTime</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>intermediaryAgent</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>optional 2)</td><td>n.a.</td><td>optional 2)</td></tr>\n</table>\n\nFootnotes from the table:\n1) This element may only be used by agreement with the instructed financial institution.\n2) The element may only be used in consultation with the financial institution commissioned.\n3) The element is currently ignored by financial institutions.\n4) Dependence on creditorAccount, see SIX Swiss Payments Standards implementation guidelines.\n5) Type 4(V3), 6(V2, V3): Must be present. Type 4(V2): May be present. Other species: May not be present.\n6) QR-reference, creditor reference or IPI reference\n7) transactionCurrency is a subfield of equivalentAmount and may only be used if equivalentAmount is used instead of instructedAmount.\n8) QR-IBAN (CH/LI) must be present.\n\nIMPORTANT: In this API definition the following holds:\n  *  All data elements mentioned above are defined, but some of them are commented,\n    i.e. they are only visible in the source code and can be used by uncommenting them.\n  * Data elements which are mandatory in the table above for all payment products\n    are set to be mandatory in this specification.\n  * Data elements which are indicated in the table above as n.a. for all payment products are commented in the source code.\n  * Data elements which are indicated to be option, conditional or mandatory for at least one payment product\n    in the table above are set to be optional in the s specification except the case where all are definde to be mandatory.\n  * Data element which are inticated to be n.a. can be used by the ASPS if needed.\n    In this case uncomment tthe the relatetd lines in the source code.\n  * If one uses this data types for some payment products he has to ensure that the used data type is\n    valid according to the underlying payment product, e.g. by some appropriate validations.\n',
    required: [
      'endToEndIdentification',
      'debtorAccount',
      'debtorName',
      'creditorAccount',
      'creditorName',
      'requestedExecutionDate',
    ],
  })
  .openapi('PaymentInitiationJson')

const PeriodicPaymentInitiationXmlPart2StandingorderTypeJsonSchema = z
  .object({
    dayOfExecution: DayOfExecutionSchema.exactOptional(),
    endDate: EndDateSchema.exactOptional(),
    executionRule: ExecutionRuleSchema.exactOptional(),
    frequency: FrequencyCodeSchema,
    startDate: StartDateSchema,
  })
  .openapi({
    description:
      'The body part 2 of a periodic payment initation request containes the execution related informations\nof the periodic payment.\n',
    required: ['startDate', 'frequency'],
  })
  .openapi('PeriodicPaymentInitiationXmlPart2StandingorderTypeJson')

const PeriodicPaymentInitiationMultipartBodySchema = z
  .object({
    json_standingorderType:
      PeriodicPaymentInitiationXmlPart2StandingorderTypeJsonSchema.exactOptional(),
    xml_sct: z
      .xor([
        PaymentInitiationSctPain_001Schema,
        PaymentInitiationSctInstPain_001Schema,
        PaymentInitiationTarget2Pain_001Schema,
        PaymentInitiationCrossBorderPain_001Schema,
        PaymentInitiationSwissSixPain_001Schema,
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'The multipart message definition for the initiation of a periodic payment initiation \nwhere the information of the payment is contained in a pain.001 message (Part 1) and \nthe additional informations related to the periodic payment is an additional JSON message (Part 2).\n',
    required: [],
  })
  .openapi('PeriodicPaymentInitiationMultipartBody')

const PeriodicPaymentInitiationWithStatusResponseSchema = z
  .object({
    creditorAccount: AccountReference16CHSchema,
    creditorAddress: AddressSchema.exactOptional(),
    creditorAgent: CreditorAgent7CHSchema.exactOptional(),
    creditorName: CreditorNameSchema,
    dayOfExecution: DayOfExecutionSchema.exactOptional(),
    debtorAccount: AccountReference16CHSchema,
    endDate: EndDateSchema.exactOptional(),
    endToEndIdentification: z.string().max(35).exactOptional(),
    executionRule: ExecutionRuleSchema.exactOptional(),
    frequency: FrequencyCodeSchema,
    instructedAmount: AmountSchema,
    purposeCode: PurposeCodeSchema.exactOptional(),
    remittanceInformationStructured: RemittanceInformationStructuredSchema.exactOptional(),
    remittanceInformationUnstructured: RemittanceInformationUnstructuredSchema.exactOptional(),
    remittanceInformationUnstructuredArray:
      RemittanceInformationUnstructuredArraySchema.exactOptional(),
    requestedExecutionDate: z.iso.date().exactOptional(),
    requestedExecutionTime: z.iso.datetime({ offset: true }).exactOptional(),
    startDate: StartDateSchema,
    transactionStatus: TransactionStatusSchema.exactOptional(),
    ultimateCreditor: UltimateCreditorSchema.exactOptional(),
    ultimateDebtor: UltimateDebtorSchema.exactOptional(),
  })
  .openapi({
    description:
      'Generic JSON response body consistion of the corresponding periodic payment initation JSON body together with an optional transaction status field.\n',
    required: [
      'debtorAccount',
      'instructedAmount',
      'creditorAccount',
      'creditorName',
      'startDate',
      'frequency',
    ],
  })
  .openapi('PeriodicPaymentInitiationWithStatusResponse')

const PeriodicPaymentInitiationJsonSchema = z
  .object({
    chargeBearer: ChargeBearerSchema.exactOptional(),
    creditorAccount: AccountReference16CHSchema,
    creditorAddress: AddressSchema.exactOptional(),
    creditorAgent: CreditorAgent7CHSchema.exactOptional(),
    creditorAgentName: CreditorAgentNameSchema.exactOptional(),
    creditorId: CreditorIdSchema.exactOptional(),
    creditorName: CreditorNameSchema,
    creditorNameAndAddress: CreditorNameAndAddressSchema.exactOptional(),
    dayOfExecution: DayOfExecutionSchema.exactOptional(),
    debtorAccount: AccountReference16CHSchema,
    debtorAgent: DebtorAgent7CHSchema.exactOptional(),
    debtorId: DebtorIdSchema.exactOptional(),
    debtorName: DebtorNameSchema,
    endDate: EndDateSchema.exactOptional(),
    endToEndIdentification: z.string().max(35),
    equivalentAmount: AmountSchema.exactOptional(),
    exchangeRateInformation: ExchangeRateInformation1Schema.exactOptional(),
    executionRule: ExecutionRuleSchema.exactOptional(),
    frequency: FrequencyCodeSchema,
    instructedAmount: AmountSchema.exactOptional(),
    intermediaryAgent: BicfiSchema.exactOptional(),
    purposeCode: PurposeCodeSchema.exactOptional(),
    remittanceInformationStructured: RemittanceInformationStructuredSchema.exactOptional(),
    remittanceInformationUnstructured: RemittanceInformationUnstructuredSchema.exactOptional(),
    serviceLevel: ExternalServiceLevel1CodeSchema.exactOptional(),
    startDate: StartDateSchema,
    transactionCurrency: CurrencyCodeSchema.exactOptional(),
    ultimateCreditor: UltimateCreditorSchema.exactOptional(),
    ultimateDebtor: UltimateDebtorSchema.exactOptional(),
  })
  .openapi({
    description:
      'Generic Body for a periodic payment initation via JSON.\n\nThis generic JSON body can be used to represent valid periodic payment initiations for the following JSON based payment product,\nwhich where defined in the Implementation Guidelines:\n\n  * domestic-swiss-credit-transfers-isr\n  * domestic-swiss-credit-transfers\n  * domestic-swiss-credit-transfers-qr\n  * domestic-swiss-foreign-credit-transfers\n  * swiss-sepa-credit-transfers\n  * swiss-cross-border-credit-transfers\n\nFor the convenience of the implementer additional which are already predefinded in the Implementation Guidelines\nare included (but commented in source code), such that an ASPSP may add them easily.\n\nTake care: Since the format is intended to fit for all payment products\nthere are additional conditions which are NOT covered by this specification.\nPlease check the SIX Swiss Payment Standards implementation guidelines for details.\n\n\nThe following data element are depending on the actual payment product available (in source code):\n\n<table style="width:100%">\n<tr><td></td><td>Payment Type 1: ISR</td><td>Payment Type 3: IBAN/postal account and IID/BIC</td><td>Payment Type 3: QR-bill</td><td>Payment Type 4: Foreign currency</td><td>Payment Type 5: Foreign SEPA</td><td>Payment Type 6: Foreign</td></tr>\n<tr><td>CH Domestic Data Element</td><td>domestic-swiss-credit-transfers-isr</td><td>domestic-swiss-credit-transfers</td><td>domestic-swiss-credit-transfers-qr</td><td>domestic-swiss-foreign-credit-transfers</td><td>swiss-sepa-credit-transfers</td><td>swiss-cross-border-credit-transfers</td></tr>\n<tr><td>endToEndIdentification</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>instructionIdentification</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>debtorAccount (incl. type)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>debtorAgent</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>optional</td></tr>\n<tr><td>debtorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>debtorId</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td><td>optional 3)</td></tr>\n<tr><td>ultimateDebtor</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>instructedAmount (incl. currency)</td><td>mandatory</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>\n<tr><td>equivalentAmount</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>\n<tr><td>transactionCurrency</td><td>n.a.</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td><td>dependent 1)</td></tr>\n<tr><td>exchangeRateInformation</td><td>n.a.</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td><td>optional 2)</td></tr>\n<tr><td>creditorAccount</td><td>mandatory</td><td>mandatory</td><td>mandatory 8)</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>creditorAgent</td><td>n.a.</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td><td>dependent 4)</td></tr>\n<tr><td>creditorAgentName</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>dependent 5)</td><td>n.a.</td><td>dependent 5)</td></tr>\n<tr><td>creditorName</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>creditorId</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>creditorAddress</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>creditorNameAndAddress</td><td>n.a.</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td><td>dependent</td></tr>\n<tr><td>ultimateCreditor</td><td>n.a.</td><td>optional</td><td>n.a. (for future use)</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>chargeBearer</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>\n<tr><td>purposeCode</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>serviceLevel</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td><td>mandatory</td><td>optional</td></tr>\n<tr><td>remittanceInformationUnstructured</td><td>n.a.</td><td>optional</td><td>n.a.</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>remittanceInformationUnstructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>remittanceInformationStructured</td><td>mandatory</td><td>optional</td><td>mandatory 6)</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>remittanceInformationStructuredArray</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>requestedExecutionDate</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>requestedExecutionTime</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>n.a.</td></tr>\n<tr><td>intermediaryAgent</td><td>n.a.</td><td>n.a.</td><td>n.a.</td><td>optional 2)</td><td>n.a.</td><td>optional 2)</td></tr>\n<tr><td>startDate</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>endDate</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>executionRule</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td><td>optional</td></tr>\n<tr><td>frequency</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td><td>mandatory</td></tr>\n<tr><td>dayOfExecution</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td><td>conditional</td></tr>\n</table>\n\nFootnotes from the table:\n1) This element may only be used by agreement with the instructed financial institution.\n2) The element may only be used in consultation with the financial institution commissioned.\n3) The element is currently ignored by financial institutions.\n4) Dependence on creditorAccount, see SIX Swiss Payments Standards implementation guidelines.\n5) Type 4(V3), 6(V2, V3): Must be present. Type 4(V2): May be present. Other species: May not be present.\n6) QR-reference, creditor reference or IPI reference\n7) currencyOfTransfer is a subfield of equivalentAmount and may only be used if equivalentAmount is used instead of instructedAmount.\n8) QR-IBAN (CH/LI) must be present.\n\nIMPORTANT: In this API definition the following holds:\n  *  All data elements mentioned above are defined, but some of them are commented,\n    i.e. they are only visible in the source code and can be used by uncommenting them.\n  * Data elements which are mandatory in the table above for all payment products\n    are set to be mandatory in this specification.\n  * Data elements which are indicated in the table above as n.a. for all payment products are commented in the source code.\n  * Data elements which are indicated to be option, conditional or mandatory for at least one payment product\n    in the table above are set to be optional in the s specification except the case where all are definde to be mandatory.\n  * Data element which are inticated to be n.a. can be used by the ASPS if needed.\n    In this case uncomment tthe the relatetd lines in the source code.\n  * If one uses this data types for some payment products he has to ensure that the used data type is\n    valid according to the underlying payment product, e.g. by some appropriate validations.\n',
    required: [
      'endToEndIdentification',
      'debtorAccount',
      'debtorName',
      'creditorAccount',
      'creditorName',
      'startDate',
      'frequency',
    ],
  })
  .openapi('PeriodicPaymentInitiationJson')

const PsuDataSchema = z
  .object({
    additionalEncryptedPassword: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional encrypted password.' }),
    additionalPassword: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional password in plaintext.' }),
    encryptedPassword: z.string().exactOptional().openapi({ description: 'Encrypted password.' }),
    password: z.string().exactOptional().openapi({ description: 'Password.' }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ description: 'PSU Data for Update PSU authentication.', required: [] })
  .openapi('PsuData')

const ReadAccountBalanceResponse_200Schema = z
  .object({ account: AccountReference16CHSchema.exactOptional(), balances: BalanceListSchema })
  .openapi({
    description: 'Body of the response for a successful read balance for an account request.',
    required: ['balances'],
  })
  .openapi('ReadAccountBalanceResponse_200')

const ReadCardAccountBalanceResponse_200Schema = z
  .object({
    balances: BalanceListSchema,
    cardAccount: AccountReference16CHSchema.exactOptional(),
    debitAccounting: DebitAccountingSchema.exactOptional(),
  })
  .openapi({
    description: 'Body of the response for a successful read balance for a card account request.',
    required: ['balances'],
  })
  .openapi('ReadCardAccountBalanceResponse_200')

const ScaAuthenticationDataSchema = z
  .string()
  .openapi({
    description:
      'SCA authentication data, depending on the chosen authentication method.\nIf the data is binary, then it is base64 encoded.\n',
  })
  .openapi('ScaAuthenticationData')

const ScaStatusSchema = z
  .enum([
    'received',
    'psuIdentified',
    'psuAuthenticated',
    'scaMethodSelected',
    'started',
    'unconfirmed',
    'finalised',
    'failed',
    'exempted',
  ])
  .openapi({
    description:
      "This data element is containing information about the status of the SCA method applied.\n\nThe following codes are defined for this data type.\n\n  * 'received':\n    An authorisation or cancellation-authorisation resource has been created successfully.\n  * 'psuIdentified':\n    The PSU related to the authorisation or cancellation-authorisation resource has been identified.\n  * 'psuAuthenticated':\n    The PSU related to the authorisation or cancellation-authorisation resource has been identified and authenticated e.g. by a password or by an access token.\n  * 'scaMethodSelected':\n    The PSU/TPP has selected the related SCA routine.\n    If the SCA method is chosen implicitly since only one SCA method is available,\n    then this is the first status to be reported instead of 'received'.\n  * 'unconfirmed':\n    SCA is technically successfully finalised by the PSU, but the authorisation resource needs a confirmation command by the TPP yet. \n  * 'started':\n    The addressed SCA routine has been started.\n  * 'finalised':\n    The SCA routine has been finalised successfully (including a potential confirmation command). \n    This is a final status of the authorisation resource.\n  * 'failed':\n    The SCA routine failed.\n    This is a final status of the authorisation resource.\n  * 'exempted':\n    SCA was exempted for the related transaction, the related authorisation is successful.\n    This is a final status of the authorisation resource.\n",
    example: 'psuAuthenticated',
  })
  .openapi('ScaStatus')

const TrustedBeneficiaryFlagSchema = z
  .boolean()
  .openapi({
    description:
      'Additional Service: Trusted Benificiaries\nWithin this data element, the ASPSP might optionally communicate towards the TPP whether the creditor was part of the related trusted beneficiary list. \nThis attribute is only contained in case of a final scaStatus.\n',
    example: false,
  })
  .openapi('TrustedBeneficiaryFlag')

const ScaStatusResponseSchema = z
  .object({
    psuMessage: PsuMessageTextSchema.exactOptional(),
    scaStatus: ScaStatusSchema,
    trustedBeneficiaryFlag: TrustedBeneficiaryFlagSchema.exactOptional(),
  })
  .openapi({ description: 'Body of the JSON response with SCA Status.', required: ['scaStatus'] })
  .openapi('ScaStatusResponse')

const SelectPsuAuthenticationMethodSchema = z
  .object({ authenticationMethodId: AuthenticationMethodIdSchema })
  .openapi({
    description: 'Content of the body of a Select PSU authentication method request\n',
    required: ['authenticationMethodId'],
  })
  .openapi('SelectPsuAuthenticationMethod')

const SelectPsuAuthenticationMethodResponseSchema = z
  .object({
    _links: LinksSelectPsuAuthenticationMethodSchema.exactOptional(),
    challengeData: ChallengeDataSchema.exactOptional(),
    chosenScaMethod: AuthenticationObjectSchema.exactOptional(),
    currencyConversionFees: AmountSchema.exactOptional(),
    estimatedInterbankSettlementAmount: AmountSchema.exactOptional(),
    estimatedTotalAmount: AmountSchema.exactOptional(),
    psuMessage: PsuMessageTextSchema.exactOptional(),
    scaStatus: ScaStatusSchema,
    transactionFees: AmountSchema.exactOptional(),
  })
  .openapi({
    description:
      'Body of the JSON response for a successful select PSU authentication method request.',
    required: ['scaStatus'],
  })
  .openapi('SelectPsuAuthenticationMethodResponse')

const SigningBasketSchema = z
  .object({
    consentIds: ConsentIdListSchema.exactOptional(),
    paymentIds: PaymentIdListSchema.exactOptional(),
  })
  .openapi({
    description:
      'JSON Body of a establish signing basket request.\nThe body shall contain at least one entry.\n',
    required: [],
  })
  .openapi('SigningBasket')

const TransactionStatusSBSSchema = z
  .enum(['ACSC', 'ACTC', 'PATC', 'RCVD', 'RJCT', 'CANC'])
  .openapi({
    description:
      "The transaction status is filled with codes of the ISO 20022 data table.\nOnly the codes RCVD, PATC, ACTC, ACWC and RJCT are used:\n- 'ACSP': 'AcceptedSettlementInProcess' -\n  All preceding checks such as technical validation and customer profile were successful and therefore the payment initiation has been accepted for execution.\n- 'ACTC': 'AcceptedTechnicalValidation' -\n  Authentication and syntactical and semantical validation are successful.\n- 'ACWC': 'AcceptedWithChange' -\n  Instruction is accepted but a change will be made, such as date or remittance not sent.\n- 'RCVD': 'Received' -\n  Payment initiation has been received by the receiving agent.\n- 'RJCT': 'Rejected' -\n  Payment initiation or individual transaction included in the payment initiation has been rejected.\n",
    example: 'RCVD',
  })
  .openapi('TransactionStatusSBS')

const SigningBasketResponse_200Schema = z
  .object({
    _links: LinksSigningBasketSchema.exactOptional(),
    consents: ConsentIdListSchema.exactOptional(),
    payments: PaymentIdListSchema.exactOptional(),
    transactionStatus: TransactionStatusSBSSchema,
  })
  .openapi({
    description:
      "Body of the JSON response for a successful get signing basket request.\n\n  * 'payments': payment initiations which shall be authorised through this signing basket.\n  * 'consents': consent objects which shall be authorised through this signing basket.\n  * 'transactionStatus': Only the codes RCVD, ACTC, RJCT are used.\n  * '_links': The ASPSP might integrate hyperlinks to indicate next (authorisation) steps to be taken.\n",
    required: ['transactionStatus'],
  })
  .openapi('SigningBasketResponse_200')

const SigningBasketResponse_201Schema = z
  .object({
    _links: LinksSigningBasketSchema,
    basketId: BasketIdSchema,
    challengeData: ChallengeDataSchema.exactOptional(),
    chosenScaMethod: AuthenticationObjectSchema.exactOptional(),
    psuMessage: PsuMessageTextSchema.exactOptional(),
    scaMethods: ScaMethodsSchema.exactOptional(),
    tppMessages: z.array(TppMessage2XXSchema).exactOptional(),
    transactionStatus: TransactionStatusSBSSchema,
  })
  .openapi({
    description: 'Body of the JSON response for a successful create signing basket request.',
    required: ['transactionStatus', 'basketId', '_links'],
  })
  .openapi('SigningBasketResponse_201')

const SigningBasketStatusResponse_200Schema = z
  .object({ transactionStatus: TransactionStatusSBSSchema })
  .openapi({ required: ['transactionStatus'] })
  .openapi('SigningBasketStatusResponse_200')

const StartScaprocessResponseSchema = z
  .object({
    _links: LinksStartScaProcessSchema,
    authorisationId: AuthorisationIdSchema,
    challengeData: ChallengeDataSchema.exactOptional(),
    chosenScaMethod: AuthenticationObjectSchema.exactOptional(),
    psuMessage: PsuMessageTextSchema.exactOptional(),
    scaMethods: ScaMethodsSchema.exactOptional(),
    scaStatus: ScaStatusSchema,
  })
  .openapi({
    description: 'Body of the JSON response for a Start SCA authorisation request.',
    required: ['scaStatus', 'authorisationId', '_links'],
  })
  .openapi('StartScaprocessResponse')

const TransactionAuthorisationSchema = z
  .object({ scaAuthenticationData: ScaAuthenticationDataSchema })
  .openapi({
    description: 'Content of the body of a transaction authorisation request\n',
    required: ['scaAuthenticationData'],
  })
  .openapi('TransactionAuthorisation')

const TransactionDetailsBodySchema = z
  .object({ transactionDetails: TransactionsSchema })
  .openapi({ description: 'Transaction details.', required: ['transactionDetails'] })
  .openapi('TransactionDetailsBody')

const TransactionsResponse_200JsonSchema = z
  .object({
    _links: LinksDownloadSchema.exactOptional(),
    account: AccountReference16CHSchema.exactOptional(),
    balances: BalanceListSchema.exactOptional(),
    transactions: AccountReportSchema.exactOptional(),
  })
  .openapi({
    description:
      'Body of the JSON response for a successful read transaction list request.\nThis account report contains transactions resulting from the query parameters.\n',
    required: [],
  })
  .openapi('TransactionsResponse_200Json')

const UpdatePsuAuthenticationSchema = z
  .object({ psuData: PsuDataSchema })
  .openapi({
    description:
      'Content of the body of a Update PSU authentication request\n\nPassword subfield is used.\n',
    required: ['psuData'],
  })
  .openapi('UpdatePsuAuthentication')

const UpdatePsuAuthenticationResponseSchema = z
  .object({
    _links: LinksUpdatePsuAuthenticationSchema.exactOptional(),
    authorisationId: AuthorisationIdSchema.exactOptional(),
    challengeData: ChallengeDataSchema.exactOptional(),
    chosenScaMethod: AuthenticationObjectSchema.exactOptional(),
    currencyConversionFees: AmountSchema.exactOptional(),
    estimatedInterbankSettlementAmount: AmountSchema.exactOptional(),
    estimatedTotalAmount: AmountSchema.exactOptional(),
    psuMessage: PsuMessageTextSchema.exactOptional(),
    scaMethods: ScaMethodsSchema.exactOptional(),
    scaStatus: ScaStatusSchema,
    transactionFees: AmountSchema.exactOptional(),
  })
  .openapi({
    description: 'Body of the JSON response for a successful update PSU authentication request.',
    required: ['scaStatus'],
  })
  .openapi('UpdatePsuAuthenticationResponse')

const UpdatePsuIdenticationResponseSchema = z
  .object({
    _links: LinksUpdatePsuIdentificationSchema,
    currencyConversionFees: AmountSchema.exactOptional(),
    estimatedInterbankSettlementAmount: AmountSchema.exactOptional(),
    estimatedTotalAmount: AmountSchema.exactOptional(),
    psuMessage: PsuMessageTextSchema.exactOptional(),
    scaMethods: ScaMethodsSchema.exactOptional(),
    scaStatus: ScaStatusSchema,
    transactionFees: AmountSchema.exactOptional(),
  })
  .openapi({
    description: 'Body of the JSON response for a successful update PSU identification request.',
    required: ['_links', 'scaStatus'],
  })
  .openapi('UpdatePsuIdenticationResponse')

const LocationHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({ description: 'Location of the created resource.\n', param: { required: false } })

const XRequestIDHeaderSchema = z
  .string()
  .openapi({
    description: 'ID of the request, unique to the call, as determined by the initiating party.',
    example: '99391c7e-ad88-49ec-a2ad-99ddcb1f7721',
  })

const BADREQUEST_400AISResponse = {
  description: 'Bad Request',
  content: {
    'application/json': { schema: Error400NGAISSchema },
    'application/problem+json': { schema: Error400AISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const BADREQUEST_400PIISResponse = {
  description: 'Bad Request',
  content: {
    'application/json': { schema: Error400NGAISSchema },
    'application/problem+json': { schema: Error400AISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const BADREQUEST_400PISResponse = {
  description: 'Bad Request',
  content: {
    'application/json': { schema: Error400NGPISSchema },
    'application/problem+json': { schema: Error400PISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const BADREQUEST_400SBSResponse = {
  description: 'Bad Request',
  content: {
    'application/json': { schema: Error400NGSBSSchema },
    'application/problem+json': { schema: Error400SBSSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const CONFLICT_409AISResponse = {
  description: 'Conflict',
  content: {
    'application/json': { schema: Error409NGAISSchema },
    'application/problem+json': { schema: Error409AISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const CONFLICT_409PIISResponse = {
  description: 'Conflict',
  content: {
    'application/json': { schema: Error409NGPIISSchema },
    'application/problem+json': { schema: Error409PIISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const CONFLICT_409PISResponse = {
  description: 'Conflict',
  content: {
    'application/json': { schema: Error409NGPISSchema },
    'application/problem+json': { schema: Error409PISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const CONFLICT_409SBSResponse = {
  description: 'Conflict',
  content: {
    'application/json': { schema: Error409NGSBSSchema },
    'application/problem+json': { schema: Error409SBSSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const ConsentResponseExample1aRedirectExample = {
  description: 'Consent request response in case of a redirect.',
  value: {
    _links: {
      scaRedirect: { href: 'https://www.testbank.com/authentication/1234-wertiq-983' },
      scaStatus: { href: 'v1/consents/1234-wertiq-983/authorisations/123auth567' },
      status: { href: '/v1/consents/1234-wertiq-983/status' },
    },
    consentId: '1234-wertiq-983',
    consentStatus: 'received',
  },
}

const ConsentResponseExample1bRedirectExample = {
  description:
    'Consent request response in case of a redirect with a dedicated start of the authorisation process.',
  value: {
    _links: { startAuthorisation: { href: 'v1/consents/1234-wertiq-983/authorisations' } },
    consentId: '1234-wertiq-983',
    consentStatus: 'received',
  },
}

const ConsentResponseExample2OAuth2Example = {
  description:
    'Response in case of the OAuth2 approach with an implicit generated authorisation resource.',
  value: {
    _links: {
      scaOAuth: { href: 'https://www.testbank.com/oauth/.well-known/oauth-authorization-server' },
      scaStatus: { href: 'v1/consents/1234-wertiq-983/authorisations/123auth567' },
      self: { href: '/v1/consents/1234-wertiq-983' },
    },
    consentId: '1234-wertiq-983',
    consentStatus: 'received',
  },
}

const ConsentResponseExample3DecoupledExample = {
  description: 'Response in case of the decoupled approach.',
  value: {
    _links: {
      startAuthorisationWithPsuIdentification: {
        href: '/v1/consents/1234-wertiq-983/authorisations',
      },
    },
    consentId: '1234-wertiq-983',
    consentStatus: 'received',
  },
}

const ConsentResponseExample4EmbeddedExample = {
  description: 'Response in case of the embedded approach.',
  value: {
    _links: {
      startAuthorisationWithPsuAuthentication: {
        href: '/v1/consents/1234-wertiq-983/authorisations',
      },
    },
    consentId: '1234-wertiq-983',
    consentStatus: 'received',
  },
}

const ASPSPNotificationContentHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description:
      'The string has the form\nstatus=X1, ..., Xn\nwhere Xi is one of the constants SCA, PROCESS, LAST and where constants are not repeated.\nThe usage of the constants supports the following semantics\nSCA - Notification on every change of the scaStatus attribute for all related authorisation processes is provided by the ASPSP for the related resource.\nPROCESS - Notification on all changes of consentStatus or transactionStatus attributes is provided by the ASPSP for the related resource\nLAST - Notification on the last consentStatus or transactionStatus as available in the XS2A interface is provided by the ASPSP for the related resource.\nThis field must be provided if the ASPSP-Notification-Support=true. The ASPSP might consider the notification content as preferred by the TPP, but can also respond independently of the preferred request\n',
    param: { required: false },
  })

const ASPSPNotificationSupportHeaderSchema = z
  .boolean()
  .exactOptional()
  .openapi({
    description:
      'true if the ASPSP supports resource status notification services.\n\nfalse if the ASPSP supports resource status notification in general, but not for the current request.\n\nNot used, if resource status notification services are generally not supported by the ASPSP.\n\nShall be supported if the ASPSP supports resource status notification services.\n',
    param: { required: false },
  })

const ASPSPSCAApproachHeaderSchema = z
  .enum(['EMBEDDED', 'DECOUPLED', 'REDIRECT'])
  .exactOptional()
  .openapi({
    description:
      'This data element must be contained, if the SCA Approach is already fixed.\nPossible values are\n  * EMBEDDED\n  * DECOUPLED\n  * REDIRECT\nThe OAuth SCA approach will be subsumed by REDIRECT.\n',
    param: { required: false },
    example: 'EMBEDDED',
  })

const CREATED_201ConsentsResponse = {
  description: 'Created',
  content: {
    'application/json': {
      schema: ConsentsResponse_201Schema,
      examples: {
        'Response in case of a redirect': ConsentResponseExample1aRedirectExample,
        'Response in case of a redirect with a dedicated start of the authorisation process':
          ConsentResponseExample1bRedirectExample,
        'Response in case of the OAuth2 approach with an implicit generated authorisation resource':
          ConsentResponseExample2OAuth2Example,
        'Response in case of the decoupled approach': ConsentResponseExample3DecoupledExample,
        'Response in case of the embedded approach': ConsentResponseExample4EmbeddedExample,
      },
    },
  },
  headers: z.object({
    'ASPSP-Notification-Content': ASPSPNotificationContentHeaderSchema,
    'ASPSP-Notification-Support': ASPSPNotificationSupportHeaderSchema,
    'ASPSP-SCA-Approach': ASPSPSCAApproachHeaderSchema,
    Location: LocationHeaderSchema,
    'X-Request-ID': XRequestIDHeaderSchema,
  }),
}

const PaymentInitiationExampleJsonRedirectExplicitAuthorisationExample = {
  description: 'Response in case of a redirect with an explicit authorisation start',
  value: {
    _links: {
      self: { href: '/v1/payments/1234-wertiq-983' },
      startAuthorisation: { href: '/v1/payments1234-wertiq-983/authorisations' },
      status: { href: '/v1/payments/1234-wertiq-983/status' },
    },
    paymentId: '1234-wertiq-983',
    transactionStatus: 'RCVD',
  },
}

const PaymentInitiationExampleJsonRedirectExample = {
  description:
    'Response in case of a redirect with an implicitly created authorisation sub-resource',
  value: {
    _links: {
      scaRedirect: { href: 'https://www.testbank.com/asdfasdfasdf' },
      scaStatus: { href: '/v1/payments/1234-wertiq-983/authorisations/123auth456' },
      self: { href: '/v1/payments/swiss-sepa-credit-transfers/1234-wertiq-983' },
      status: { href: '/v1/payments/1234-wertiq-983/status' },
    },
    paymentId: '1234-wertiq-983',
    transactionStatus: 'RCVD',
  },
}

const PaymentInitiationExampleJsonOAuth2Example = {
  description:
    'Response in case of an OAuth2 SCA approach approach with implicitly creating an authorisation sub-resource',
  value: {
    _links: {
      scaOAuth: { href: 'https://www.testbank.com/oauth/.well-known/oauth-authorization-server' },
      scaStatus: { href: '/v1/payments/1234-wertiq-983/authorisations/123auth456' },
      self: { href: '/v1/payments/1234-wertiq-983' },
      status: { href: '/v1/payments/1234-wertiq-983/status' },
    },
    paymentId: '1234-wertiq-983',
    transactionStatus: 'RCVD',
  },
}

const PaymentInitiationExampleJsonDecoupledExample = {
  description:
    'Response in case of the decoupled approach with explicit start of authorisation needed',
  value: {
    _links: {
      self: { href: '/v1/payments/1234-wertiq-983' },
      startAuthorisationWithPsuIdentification: {
        href: '/v1/payments/1234-wertiq-983/authorisations',
      },
    },
    paymentId: '1234-wertiq-983',
    transactionStatus: 'RCVD',
  },
}

const PaymentInitiationExampleJsonEmbeddedExample = {
  description: 'Response in case of the embedded approach with explicit start of authorisation',
  value: {
    _links: {
      self: { href: '/v1/payments/1234-wertiq-983' },
      startAuthenticationWithPsuAuthentication: {
        href: '/v1/payments/1234-wertiq-983/authorisations',
      },
    },
    paymentId: '1234-wertiq-983',
    transactionStatus: 'RCVD',
  },
}

const CREATED_201PaymentInitiationResponse = {
  description: 'CREATED',
  content: {
    'application/json': {
      schema: PaymentInitationRequestResponse_201Schema,
      examples: {
        'Response in case of a redirect where an explicit authorisation start is needed':
          PaymentInitiationExampleJsonRedirectExplicitAuthorisationExample,
        'Response in case of a redirect with an implicitly created authorisation sub-resource':
          PaymentInitiationExampleJsonRedirectExample,
        'Response in case of an OAuth2 SCA approach approach with implicitly creating an authorisation sub-resource':
          PaymentInitiationExampleJsonOAuth2Example,
        'Response in case of the decoupled approach with explicit start of authorisation needed (will be done with the update PSU identification function)':
          PaymentInitiationExampleJsonDecoupledExample,
        'Response in case of the embedded approach with explicit start of authorisation':
          PaymentInitiationExampleJsonEmbeddedExample,
      },
    },
  },
  headers: z.object({
    'ASPSP-Notification-Content': ASPSPNotificationContentHeaderSchema,
    'ASPSP-Notification-Support': ASPSPNotificationSupportHeaderSchema,
    'ASPSP-SCA-Approach': ASPSPSCAApproachHeaderSchema,
    Location: LocationHeaderSchema,
    'X-Request-ID': XRequestIDHeaderSchema,
  }),
}

const CreateSigningBasketResponseExample1Example = {
  description: 'Response (always with explicit authorisation start).',
  value: {
    _links: {
      self: { href: '/v1/signing-baskets/1234-basket-567' },
      startAuthorisation: { href: '/v1/signing-baskets/1234-basket-567/authorisations' },
      status: { href: '/v1/signing-baskets/1234-basket-567/status' },
    },
    basketId: '1234-basket-567',
    transactionStatus: 'RCVD',
  },
}

const CREATED_201SigningBasketResponse = {
  description: 'Created',
  content: {
    'application/json': {
      schema: SigningBasketResponse_201Schema,
      examples: {
        'Response (always with explicit authorization start)':
          CreateSigningBasketResponseExample1Example,
      },
    },
  },
  headers: z.object({
    'ASPSP-Notification-Content': ASPSPNotificationContentHeaderSchema,
    'ASPSP-Notification-Support': ASPSPNotificationSupportHeaderSchema,
    'ASPSP-SCA-Approach': ASPSPSCAApproachHeaderSchema,
    Location: LocationHeaderSchema,
    'X-Request-ID': XRequestIDHeaderSchema,
  }),
}

const StartScaProcessResponseExample1Example = {
  value: {
    _links: { scaStatus: { href: '/v1/payments/qwer3456tzui7890/authorisations/123auth456' } },
    authorisationId: '123auth456',
    psuMessage: 'Please use your BankApp for transaction Authorisation.',
    scaStatus: 'received',
  },
}

const CREATED_201StartScaProcessResponse = {
  description: 'Created',
  content: {
    'application/json': {
      schema: StartScaprocessResponseSchema,
      examples: {
        'Example 1: payments - Decoupled Approach': StartScaProcessResponseExample1Example,
      },
    },
  },
  headers: z.object({
    'ASPSP-SCA-Approach': ASPSPSCAApproachHeaderSchema,
    'X-Request-ID': XRequestIDHeaderSchema,
  }),
}

const FORBIDDEN_403AISResponse = {
  description: 'Forbidden',
  content: {
    'application/json': { schema: Error403NGAISSchema },
    'application/problem+json': { schema: Error403AISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const FORBIDDEN_403PIISResponse = {
  description: 'Forbidden',
  content: {
    'application/json': { schema: Error403NGPIISSchema },
    'application/problem+json': { schema: Error403PIISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const FORBIDDEN_403PISResponse = {
  description: 'Forbidden',
  content: {
    'application/json': { schema: Error403NGPISSchema },
    'application/problem+json': { schema: Error403PISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const FORBIDDEN_403SBSResponse = {
  description: 'Forbidden',
  content: {
    'application/json': { schema: Error403NGSBSSchema },
    'application/problem+json': { schema: Error403SBSSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const INTERNALSERVERERROR_500AISResponse = {
  description: 'Internal Server Error',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const INTERNALSERVERERROR_500PIISResponse = {
  description: 'Internal Server Error',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const INTERNALSERVERERROR_500PISResponse = {
  description: 'Internal Server Error',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const INTERNALSERVERERROR_500SBSResponse = {
  description: 'Internal Server Error',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const METHODNOTALLOWED_405AISResponse = {
  description: 'Method Not Allowed',
  content: {
    'application/json': { schema: Error405NGAISSchema },
    'application/problem+json': { schema: Error405AISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const METHODNOTALLOWED_405PIISResponse = {
  description: 'Method Not Allowed',
  content: {
    'application/json': { schema: Error405NGPIISSchema },
    'application/problem+json': { schema: Error405PIISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const METHODNOTALLOWED_405PISResponse = {
  description: 'Method Not Allowed',
  content: {
    'application/json': { schema: Error405NGPISSchema },
    'application/problem+json': { schema: Error405PISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const METHODNOTALLOWED_405PISCANCResponse = {
  description: 'Method Not Allowed',
  content: {
    'application/json': { schema: Error405NGPISCANCSchema },
    'application/problem+json': { schema: Error405PISCANCSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const METHODNOTALLOWED_405SBSResponse = {
  description: 'Method Not Allowed',
  content: {
    'application/json': { schema: Error405NGSBSSchema },
    'application/problem+json': { schema: Error405SBSSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOTACCEPTABLE_406AISResponse = {
  description: 'Not Acceptable',
  content: {
    'application/json': { schema: Error406NGAISSchema },
    'application/problem+json': { schema: Error406AISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOTACCEPTABLE_406PIISResponse = {
  description: 'Not Acceptable',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOTACCEPTABLE_406PISResponse = {
  description: 'Not Acceptable',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOTACCEPTABLE_406SBSResponse = {
  description: 'Not Acceptable',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOTFOUND_404AISResponse = {
  description: 'Not found',
  content: {
    'application/json': { schema: Error404NGAISSchema },
    'application/problem+json': { schema: Error404AISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOTFOUND_404PIISResponse = {
  description: 'Not found',
  content: {
    'application/json': { schema: Error404NGPIISSchema },
    'application/problem+json': { schema: Error404PIISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOTFOUND_404PISResponse = {
  description: 'Not found',
  content: {
    'application/json': { schema: Error404NGPISSchema },
    'application/problem+json': { schema: Error404PISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOTFOUND_404SBSResponse = {
  description: 'Not found',
  content: {
    'application/json': { schema: Error404NGSBSSchema },
    'application/problem+json': { schema: Error404SBSSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOCONTENT_204ConsentsResponse = {
  description: 'No Content',
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOCONTENT_204PaymentInitiationCancelResponse = {
  description: 'No Content',
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const NOCONTENT_204SigningBasketResponse = {
  description: 'No Content',
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const AccountDetailsMulticurrencyAccountExample = {
  description: 'Account details for a multicurrency account.',
  value: {
    account: {
      _links: {
        balances: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f/balances' },
        transactions: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f/transactions' },
      },
      cashAccountType: 'CACC',
      currency: 'XXX',
      iban: 'FR7612345987650123456789014',
      name: 'Aggregation Account',
      ownerName: 'Heike Mustermann',
      product: 'Multicurrency Account',
      resourceId: '3dc3d5b3-7023-4848-9853-f5400a64e80f',
    },
  },
}

const AccountDetailsRegularAccountExample = {
  description: 'Account details for a regular Account.',
  value: {
    account: {
      _links: {
        balances: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f/balances' },
        transactions: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f/transactions' },
      },
      cashAccountType: 'CACC',
      currency: 'EUR',
      iban: 'FR7612345987650123456789014',
      name: 'Main Account',
      ownerName: 'Heike Mustermann',
      product: 'Girokonto',
      resourceId: '3dc3d5b3-7023-4848-9853-f5400a64e80f',
    },
  },
}

const OK_200AccountDetailsResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.object({ account: AccountDetailsSchema }).openapi({ required: ['account'] }),
      examples: {
        'Multicurrency Account': AccountDetailsMulticurrencyAccountExample,
        'Regular Account': AccountDetailsRegularAccountExample,
      },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const AccountListExample1Example = {
  description:
    'Response in case of an example, where the consent has been given on two different IBANs.',
  summary: 'Account list Example 1',
  value: {
    accounts: [
      {
        _links: {
          balances: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f/balances' },
          transactions: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f/transactions' },
        },
        cashAccountType: 'CACC',
        currency: 'EUR',
        iban: 'DE2310010010123456789',
        name: 'Main Account',
        product: 'Girokonto',
        resourceId: '3dc3d5b3-7023-4848-9853-f5400a64e80f',
      },
      {
        _links: {
          balances: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e81g/balances' },
        },
        cashAccountType: 'CACC',
        currency: 'USD',
        iban: 'DE2310010010123456788',
        name: 'US Dollar Account',
        product: 'FremdwC$hrungskonto',
        resourceId: '3dc3d5b3-7023-4848-9853-f5400a64e81g',
      },
    ],
  },
}

const AccountListExample2Example = {
  description:
    'Response in case of an example where consent on transactions and balances has been given to a multicurrency account which has two sub-accounts with currencies EUR and USD, and where the ASPSP is giving the data access only on sub-account level.\n',
  summary: 'Account list Example 2',
  value: {
    accounts: [
      {
        _links: {
          balances: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f/balances' },
          transactions: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f/transactions' },
        },
        cashAccountType: 'CACC',
        currency: 'EUR',
        iban: 'DE2310010010123456788',
        name: 'Main Account',
        product: 'Girokonto',
        resourceId: '3dc3d5b3-7023-4848-9853-f5400a64e80f',
      },
      {
        _links: {
          balances: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e81g/balances' },
          transactions: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e81g/transactions' },
        },
        cashAccountType: 'CACC',
        currency: 'USD',
        iban: 'DE2310010010123456788',
        name: 'US Dollar Account',
        product: 'FremdwC$hrungskonto',
        resourceId: '3dc3d5b3-7023-4848-9853-f5400a64e81g',
      },
    ],
  },
}

const AccountListExample3Example = {
  description:
    'Account list response in case of an example where consent on balances and transactions has been given to \na multicurrency account which has two sub-accounts with currencies EUR and USD and where the ASPSP is giving \nthe data access on aggregation level and on sub-account level.\n',
  summary: 'Account list Example 3',
  value: {
    accounts: [
      {
        _links: {
          balances: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e333/balances' },
          transactions: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e333/transactions' },
        },
        cashAccountType: 'CACC',
        currency: 'XXX',
        iban: 'DE2310010010123456788',
        name: 'Aggregation Account',
        product: 'Multi currency account',
        resourceId: '3dc3d5b3-7023-4848-9853-f5400a64e80f',
      },
      {
        _links: {
          balances: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f/balances' },
          transactions: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f/transactions' },
        },
        cashAccountType: 'CACC',
        currency: 'EUR',
        iban: 'DE2310010010123456788',
        name: 'Main Account',
        product: 'Girokonto',
        resourceId: '3dc3d5b3-7023-4848-9853-f5400a64e80f',
      },
      {
        _links: {
          balances: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e81g/balances' },
          transactions: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e81g/transactions' },
        },
        cashAccountType: 'CACC',
        currency: 'USD',
        iban: 'DE2310010010123456788',
        name: 'US Dollar Account',
        product: 'FremdwC$hrungskonto',
        resourceId: '3dc3d5b3-7023-4848-9853-f5400a64e81g',
      },
    ],
  },
}

const OK_200AccountListResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: AccountListSchema,
      examples: {
        'Example 1': AccountListExample1Example,
        'Example 2': AccountListExample2Example,
        'Example 3': AccountListExample3Example,
      },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const TransactionsExample1RegularAccountJsonExample = {
  description: 'Response in JSON format for an access on a regular account.',
  value: {
    account: { iban: 'DE2310010010123456788' },
    transactions: {
      _links: { account: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f' } },
      booked: [
        {
          bookingDate: '2017-10-25',
          creditorAccount: { iban: 'DE67100100101306118605' },
          creditorName: 'John Miles',
          remittanceInformationUnstructured: 'Example 1',
          transactionAmount: { amount: '256.67', currency: 'EUR' },
          transactionId: '1234567',
          valueDate: '2017-10-26',
        },
        {
          bookingDate: '2017-10-25',
          debtorAccount: { iban: 'NL76RABO0359400371' },
          debtorName: 'Paul Simpson',
          remittanceInformationUnstructured: 'Example 2',
          transactionAmount: { amount: '343.01', currency: 'EUR' },
          transactionId: '1234568',
          valueDate: '2017-10-26',
        },
      ],
      pending: [
        {
          creditorAccount: { iban: 'FR7612345987650123456789014' },
          creditorName: 'Claude Renault',
          remittanceInformationUnstructured: 'Example 3',
          transactionAmount: { amount: '-100.03', currency: 'EUR' },
          transactionId: '1234569',
          valueDate: '2017-10-26',
        },
      ],
    },
  },
}

const TransactionsExample2DownloadJsonExample = {
  description: 'Response in case of huge data amount as a download.',
  value: {
    _links: {
      download: { href: 'www.test-api.com/xs2a/v1/accounts/12345678999/transactions/download/' },
    },
  },
}

const TransactionsExample3MulticurrencyAccountJsonExample = {
  description:
    'Response in JSON format for an access on a multicurrency account on aggregation level',
  value: {
    account: { iban: 'DE40100100103307118608' },
    transactions: {
      _links: { account: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f' } },
      booked: [
        {
          bookingDate: '2017-10-25',
          creditorAccount: { iban: 'DE67100100101306118605' },
          creditorName: 'John Miles',
          remittanceInformationUnstructured: 'Example 1',
          transactionAmount: { amount: '-256.67', currency: 'EUR' },
          transactionId: '1234567',
          valueDate: '2017-10-26',
        },
        {
          bookingDate: '2017-10-25',
          debtorAccount: { iban: 'NL76RABO0359400371' },
          debtorName: 'Paul Simpson',
          remittanceInformationUnstructured: 'Example 2',
          transactionAmount: { amount: '343.01', currency: 'EUR' },
          transactionId: '1234568',
          valueDate: '2017-10-26',
        },
        {
          bookingDate: '2017-10-25',
          debtorAccount: { iban: 'SE9412309876543211234567' },
          debtorName: 'Pepe Martin',
          remittanceInformationUnstructured: 'Example 3',
          transactionAmount: { amount: '100', currency: 'USD' },
          transactionId: '1234569',
          valueDate: '2017-10-26',
        },
      ],
      pending: [
        {
          creditorAccount: { iban: 'FR7612345987650123456789014' },
          creditorName: 'Claude Renault',
          remittanceInformationUnstructured: 'Example 4',
          transactionAmount: { amount: '-100.03', currency: 'EUR' },
          transactionId: '1234570',
          valueDate: '2017-10-26',
        },
      ],
    },
  },
}

const TransactionsExampleCHMulticurrencyAccountJsonExample = {
  description: 'Response in JSON format for an access on a swiss account on aggregation level',
  value: {
    account: { iban: 'CH2808397020020195606' },
    transactions: {
      _links: { account: { href: '/v1/accounts/3dc3d5b3-7023-4848-9853-f5400a64e80f' } },
      booked: [
        {
          debtorAccount: { bban: '01-43884-8' },
          debtorName: 'Ricardo Schweiz',
          instructedAmount: { amount: '123.50', currency: 'CHF' },
          remittanceInformationStructured: '15 00011 23456 78901 23456 78901',
          transactionId: '1234573',
        },
        {
          bookingDate: '2019-05-29',
          debtorAccount: { iban: 'CH9109000000400018554' },
          debtorName: 'GlC<ckskette',
          remittanceInformationUnstructured: 'FC<r Ferien im Oberland.',
          transactionAmount: { amount: '123.45', currency: 'CHF' },
          transactionId: '1234571',
          valueDate: '2019-05-30',
        },
        {
          bookingDate: '2019-05-29',
          debtorAccount: { iban: 'CH8209000000100150006' },
          debtorName: 'Stiftung Denk an mich',
          remittanceInformationUnstructured: 'FC<r Yemen.',
          transactionAmount: { amount: '234.55', currency: 'CHF' },
          transactionId: '1234572',
          valueDate: '2019-05-30',
        },
        {
          bookingDate: '2017-10-25',
          creditorAccount: { iban: 'DE67100100101306118605' },
          creditorName: 'John Miles',
          remittanceInformationUnstructured: 'Example 1',
          transactionAmount: { amount: '-256.67', currency: 'EUR' },
          transactionId: '1234567',
          valueDate: '2017-10-26',
        },
        {
          bookingDate: '2017-10-25',
          debtorAccount: { iban: 'NL76RABO0359400371' },
          debtorName: 'Paul Simpson',
          remittanceInformationUnstructured: 'Example 2',
          transactionAmount: { amount: '343.01', currency: 'EUR' },
          transactionId: '1234568',
          valueDate: '2017-10-26',
        },
        {
          bookingDate: '2017-10-25',
          debtorAccount: { iban: 'SE9412309876543211234567' },
          debtorName: 'Pepe Martin',
          remittanceInformationUnstructured: 'Example 3',
          transactionAmount: { amount: '100', currency: 'USD' },
          transactionId: '1234569',
          valueDate: '2017-10-26',
        },
      ],
      pending: [
        {
          creditorAccount: { iban: 'FR7612345987650123456789014' },
          creditorName: 'Claude Renault',
          remittanceInformationUnstructured: 'Example 4',
          transactionAmount: { amount: '-100.03', currency: 'EUR' },
          transactionId: '1234570',
          valueDate: '2017-10-26',
        },
      ],
    },
  },
}

const Camt_053SimpleXmlExample = {
  description: 'A camt.053 message',
  value:
    '<?xml version="1.0" encoding="UTF-8"?> <Document xsi:schemaLocation="urn:iso:std:iso:20022:tech:xsd:camt.053.001.04 camt.053.001.04.xsd" xmlns="urn:iso:std:iso:20022:tech:xsd:camt.053.001.04" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n  <BkToCstmrStmt>\n    <GrpHdr>\n      <MsgId>MSGID-C053.01.00.10-110725163809-01</MsgId>\n      <CreDtTm>2017-07-25T19:30:47</CreDtTm>\n      <MsgPgntn>\n        <PgNb>1</PgNb>\n        <LastPgInd>true</LastPgInd>\n      </MsgPgntn>\n    </GrpHdr>\n    <Stmt>\n      <Id>STMID-C053.01.00.10-110725163809-01</Id>\n      <ElctrncSeqNb>147</ElctrncSeqNb>\n      <CreDtTm>2017-07-25T19:30:47</CreDtTm>\n      <Acct>\n        <Id>\n          <IBAN>CH9581320000001998736</IBAN>\n        </Id>\n      </Acct>\n      <Bal>\n        <Tp>\n          <CdOrPrtry>\n            <Cd>OPBD</Cd>\n          </CdOrPrtry>\n        </Tp>\n        <Amt Ccy="CHF">2501.50</Amt>\n        <CdtDbtInd>CRDT</CdtDbtInd>\n        <Dt>\n          <Dt>2017-07-24</Dt>\n        </Dt>\n      </Bal>\n      <Bal>\n        <Tp>\n          <CdOrPrtry>\n            <Cd>CLBD</Cd>\n          </CdOrPrtry>\n        </Tp>\n        <Amt Ccy="CHF">2397.2</Amt>\n        <CdtDbtInd>CRDT</CdtDbtInd>\n        <Dt>\n          <Dt>2017-07-25</Dt>\n        </Dt>\n      </Bal>\n      <Ntry>\n        <NtryRef>010001628</NtryRef>\n        <Amt Ccy="CHF">145.70</Amt>\n        <CdtDbtInd>CRDT</CdtDbtInd>\n        <Sts>BOOK</Sts>\n        <BookgDt>\n          <Dt>2017-07-25</Dt>\n        </BookgDt>\n        <ValDt>\n          <Dt>2017-07-25</Dt>\n        </ValDt>\n        <AcctSvcrRef>P001.01.00.01-110718163809</AcctSvcrRef>\n        <BkTxCd>\n          <Domn>\n            <Cd>PMNT</Cd>\n            <Fmly>\n              <Cd>RCDT</Cd>\n              <SubFmlyCd>VCOM</SubFmlyCd>\n            </Fmly>\n          </Domn>\n        </BkTxCd>\n        <NtryDtls>\n          <Btch>\n            <NbOfTxs>2</NbOfTxs>\n          </Btch>\n          <TxDtls>\n            <Refs>\n              <AcctSvcrRef>P001.01.00.01-110718163809-01</AcctSvcrRef>\n            </Refs>\n            <Amt Ccy="CHF">100</Amt>\n            <CdtDbtInd>CRDT</CdtDbtInd>\n            <BkTxCd>\n              <Domn>\n                <Cd>PMNT</Cd>\n                <Fmly>\n                  <Cd>RCDT</Cd>\n                  <SubFmlyCd>VCOM</SubFmlyCd>\n                </Fmly>\n              </Domn>\n            </BkTxCd>\n            <RmtInf>\n              <Strd>\n                <CdtrRefInf>\n                  <Tp>\n                    <CdOrPrtry>\n                      <Prtry>ISR Reference</Prtry>\n                    </CdOrPrtry>\n                  </Tp>\n                  <Ref>123456789012345678901234567</Ref>\n                </CdtrRefInf>\n              </Strd>\n            </RmtInf>\n          </TxDtls>\n          <TxDtls>\n            <Refs>\n              <AcctSvcrRef>P001.01.00.01-110718163809-02</AcctSvcrRef>\n            </Refs>\n            <Amt Ccy="CHF">45.70</Amt>\n            <CdtDbtInd>CRDT</CdtDbtInd>\n            <BkTxCd>\n              <Domn>\n                <Cd>PMNT</Cd>\n                <Fmly>\n                  <Cd>RCDT</Cd>\n                  <SubFmlyCd>VCOM</SubFmlyCd>\n                </Fmly>\n              </Domn>\n            </BkTxCd>\n            <RmtInf>\n              <Strd>\n                <CdtrRefInf>\n                  <Tp>\n                    <CdOrPrtry>\n                      <Prtry>ISR Reference</Prtry>\n                    </CdOrPrtry>\n                  </Tp>\n                  <Ref>123456000012345678901234567</Ref>\n                </CdtrRefInf>\n              </Strd>\n            </RmtInf>\n          </TxDtls>\n        </NtryDtls>\n      </Ntry>\n      <Ntry>\n        <Amt Ccy="CHF">250.00</Amt>\n        <CdtDbtInd>DBIT</CdtDbtInd>\n        <Sts>BOOK</Sts>\n        <BookgDt>\n          <Dt>2017-07-25</Dt>\n        </BookgDt>\n        <ValDt>\n          <Dt>2017-07-25</Dt>\n        </ValDt>\n        <AcctSvcrRef>P001.01.00.02-110718163809</AcctSvcrRef>\n        <BkTxCd>\n          <Domn>\n            <Cd>PMNT</Cd>\n            <Fmly>\n              <Cd>ICDT</Cd>\n              <SubFmlyCd>AUTT</SubFmlyCd>\n            </Fmly>\n          </Domn>\n        </BkTxCd>\n        <NtryDtls>\n          <TxDtls>\n            <Refs>\n            <AcctSvcrRef>P001.01.00.02-110718163809-01</AcctSvcrRef>\n            </Refs>\n            <Amt Ccy="CHF">250.00</Amt>\n            <CdtDbtInd>DBIT</CdtDbtInd>\n            <BkTxCd>\n              <Domn>\n                <Cd>PMNT</Cd>\n                <Fmly>\n                  <Cd>ICDT</Cd>\n                  <SubFmlyCd>AUTT</SubFmlyCd>\n                </Fmly>\n              </Domn>\n            </BkTxCd>\n          </TxDtls>\n        </NtryDtls>\n      </Ntry>\n    </Stmt>\n  </BkToCstmrStmt>\n</Document>\n',
}

const OK_200AccountsTransactionsResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: TransactionsResponse_200JsonSchema,
      examples: {
        'Example 1': TransactionsExample1RegularAccountJsonExample,
        'Example 2': TransactionsExample2DownloadJsonExample,
        'Example 3': TransactionsExample3MulticurrencyAccountJsonExample,
        'Swiss Example': TransactionsExampleCHMulticurrencyAccountJsonExample,
      },
    },
    'application/xml': {
      schema: z
        .xor([Camt_052Schema, Camt_053Schema, Camt_054Schema])
        .openapi({
          description:
            'Body of the XML response for a successful read transaction list request.\nThe body has the structure of a either a camt.052 or camt.053 message.\nThe camt.052 may include pending payments which are not yet finally booked. The ASPSP will decide on the format due to the chosen parameters, specifically on the chosen dates relative to the time of the request. In addition the ASPSP might offer camt.054x structure e.g. in a corporate setting.',
        }),
      examples: { 'Example camt.053': Camt_053SimpleXmlExample },
    },
    'text/plain': {
      schema: z
        .xor([Mt940Schema, Mt942Schema])
        .openapi({
          description:
            'Body of the Text response for a successful read transaction list request.\nThe body has the structure of a MT94x message.\nThe response body consists of an MT940 or MT942 format in a text structure. The MT942 may include pending payments which are not yet finally booked. The ASPSP will decide on the format due to the chosen parameters, specifically on the chosen dates relative to the time of the request.',
        }),
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const AuthorisationListExampleExample = { value: { authorisationIds: ['123auth456'] } }

const OK_200AuthorisationsResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: AuthorisationsSchema,
      examples: { Example: AuthorisationListExampleExample },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const BalancesExample1RegularAccountExample = {
  description: 'Response for a read balance request in case of a regular account.',
  value: {
    account: { iban: 'FR7612345987650123456789014' },
    balances: [
      {
        balanceAmount: { amount: '500.00', currency: 'EUR' },
        balanceType: 'closingBooked',
        referenceDate: '2017-10-25',
      },
      {
        balanceAmount: { amount: '900.00', currency: 'EUR' },
        balanceType: 'expected',
        lastChangeDateTime: '2017-10-25T15:30:35.035Z',
      },
    ],
  },
}

const BalancesExample2MulticurrencyAcountExample = {
  description:
    'Response in case of a multicurrency account with one account in EUR,\none in USD, where the ASPSP has delivered a link to the balance endpoint relative to the aggregated\nmulticurrency account (aggregation level).\n',
  value: {
    balances: [
      {
        balanceAmount: { amount: '500.00', currency: 'EUR' },
        balanceType: 'closingBooked',
        referenceDate: '2017-10-25',
      },
      {
        balanceAmount: { amount: '900.00', currency: 'EUR' },
        balanceType: 'expected',
        lastChangeDateTime: '2017-10-25T15:30:35.035Z',
      },
      {
        balanceAmount: { amount: '350.00', currency: 'USD' },
        balanceType: 'closingBooked',
        referenceDate: '2017-10-25',
      },
      {
        balanceAmount: { amount: '350.00', currency: 'USD' },
        balanceType: 'expected',
        lastChangeDateTime: '2017-10-24T14:30:21Z',
      },
    ],
  },
}

const BalancesExample3RegularAccountExample = {
  description:
    'Response in case of a regular account where the corresponding balances in the online channel is reported independently from account statements with fixed dates, i.e. always displaying running balance for current time.',
  value: {
    balances: [
      { balanceAmount: { amount: '1000.00', currency: 'EUR' }, balanceType: 'interimBooked' },
      { balanceAmount: { amount: '300.00', currency: 'EUR' }, balanceType: 'interimAvailable' },
      {
        balanceAmount: { amount: '5300.00', currency: 'EUR' },
        balanceType: 'interimAvailable',
        creditLimitIncluded: true,
      },
    ],
  },
}

const OK_200BalancesResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: ReadAccountBalanceResponse_200Schema,
      examples: {
        'Example 1: Regular Account': BalancesExample1RegularAccountExample,
        'Example 2: Multicurrency Account': BalancesExample2MulticurrencyAcountExample,
        'Example 3:': BalancesExample3RegularAccountExample,
      },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const BalancesExampleCardAccountExample = {
  description: 'Response in case of card account balance request.\n',
  value: {
    balances: [
      { debitAccounting: true },
      { balanceAmount: { amount: '14355.78', currency: 'EUR' }, balanceType: 'interimBooked' },
      { balanceAmount: { amount: '4175.86', currency: 'EUR' }, balanceType: 'nonInvoiced' },
    ],
    cardAccount: { maskedPan: '525412******3241' },
  },
}

const OK_200CardAccountBalancesResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: ReadCardAccountBalanceResponse_200Schema,
      examples: { 'Example:': BalancesExampleCardAccountExample },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const CardAccountDetailsExampleExample = {
  description: 'Card account details example.\n',
  summary: 'Card account details example 1',
  value: {
    cardAccount: {
      _links: {
        transactions: {
          href: '/v1/card-accounts/3d9a81b3-a47d-4130-8765-a9c0ff861b99/transactions',
        },
      },
      balances: [
        { balanceAmount: { amount: '14355.78', currency: 'EUR' }, balanceType: 'interimBooked' },
        { balanceAmount: { amount: '4175.86', currency: 'EUR' }, balanceType: 'nonInvoiced' },
      ],
      creditLimit: { amount: '15000', currency: 'EUR' },
      currency: 'EUR',
      debitAccounting: true,
      maskedPan: '525412******3241',
      name: 'Main',
      ownerName: 'Heike Mustermann',
      product: 'Basic Credit',
      resourceId: '3d9a81b3-a47d-4130-8765-a9c0ff861b99',
      status: 'enabled',
    },
  },
}

const OK_200CardAccountDetailsResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z
        .object({ cardAccount: CardAccountDetailsSchema })
        .openapi({ required: ['cardAccount'] }),
      examples: { 'Card Account': CardAccountDetailsExampleExample },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const CardAccountListExample1Example = {
  description: 'Card account list example.\n',
  summary: 'Card account list example 1',
  value: {
    cardAccounts: [
      {
        _links: {
          transactions: {
            href: '/v1/card-accounts/3d9a81b3-a47d-4130-8765-a9c0ff861b99/transactions',
          },
        },
        balances: [
          { balanceAmount: { amount: '14355.78', currency: 'EUR' }, balanceType: 'interimBooked' },
          { balanceAmount: { amount: '4175.86', currency: 'EUR' }, balanceType: 'nonInvoiced' },
        ],
        creditLimit: { amount: '15000', currency: 'EUR' },
        currency: 'EUR',
        maskedPan: '525412******3241',
        name: 'Main',
        product: 'Basic Credit',
        resourceId: '3d9a81b3-a47d-4130-8765-a9c0ff861b99',
        status: 'enabled',
      },
    ],
  },
}

const OK_200CardAccountListResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: CardAccountListSchema,
      examples: { 'Example 1': CardAccountListExample1Example },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const OK_200CardAccountsTransactionsResponse = {
  description: 'OK',
  content: { 'application/json': { schema: CardAccountsTransactionsResponse200Schema } },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const ConfirmationOfFundsResponseExampleExample = {
  description: 'Response for a confirmation of funds request.',
  value: { fundsAvailable: 'true' },
}

const OK_200ConfirmationOfFundsResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z
        .object({ fundsAvailable: FundsAvailableSchema })
        .openapi({
          description:
            'Equals "true" if sufficient funds are available at the time of the request,\n"false" otherwise.\n',
          required: ['fundsAvailable'],
        }),
      examples: { Example: ConfirmationOfFundsResponseExampleExample },
    },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const ConsentsInformationResponseExampleExample = {
  description: 'Consent request on account list or without indication of accounts.',
  value: {
    _links: { account: { href: '/v1/accounts' } },
    access: {
      balances: [{ iban: 'DE2310010010123456789' }],
      transactions: [{ iban: 'DE2310010010123456789' }, { pan: '123456xxxxxx3457' }],
    },
    consentStatus: 'valid',
    frequencyPerDay: 4,
    recurringIndicator: 'true',
    validUntil: '2017-11-01',
  },
}

const OK_200ConsentInformationResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: ConsentInformationResponse_200JsonSchema,
      examples: { Example: ConsentsInformationResponseExampleExample },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const ConsentStatusResponseExample1Example = {
  description: 'Response for a consent status request.',
  value: { consentStatus: 'valid' },
}

const OK_200ConsentStatusResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: ConsentStatusResponse_200Schema,
      examples: { Example: ConsentStatusResponseExample1Example },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const GetSigningBasketResponseExample1Example = {
  value: { payments: ['1234pay567', '1234pay568', '1234pay888'], transactionStatus: 'ACTC' },
}

const OK_200GetSigningBasketResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: SigningBasketResponse_200Schema,
      examples: { Example: GetSigningBasketResponseExample1Example },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const Pain_001_001SCTSingleTransactionExample = {
  description: 'A pain.001.001.03 message in case of SCT',
  value:
    '<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.001.001.03">\n  <CstmrCdtTrfInitn>\n    <GrpHdr>\n      <MsgId>MIPI-123456789RI-123456789</MsgId>\n      <CreDtTm>2017-02-14T20:23:34.000Z</CreDtTm>\n      <NbOfTxs>1</NbOfTxs>\n      <CtrlSum>123</CtrlSum>\n      <InitgPty>\n        <Nm>PaymentInitiator</Nm>\n        <Id><OrgId><Othr><Id>DE10000000012</Id>\n          <SchmeNm><Prptry>PISP</Prptry></SchmeNm></Othr></OrgId></Id>\n      </InitgPty>\n    </GrpHdr>\n    <PmtInf>\n      <PmtInfId>BIPI-123456789RI-123456789</PmtInfId>\n      <PmtMtd>TRF</PmtMtd>\n      <NbOfTxs>1</NbOfTxs>\n      <CtrlSum>123</CtrlSum>\n      <PmtTpInf><SvcLvl><Cd>SEPA</Cd></SvcLvl></PmtTpInf>\n      <ReqdExctnDt>2017-02-15</ReqdExctnDt>\n      <Dbtr><Nm>PSU Name</Nm></Dbtr>\n      <DbtrAcct><Id><IBAN>DE87200500001234567890</IBAN></Id></DbtrAcct>\n      <ChrgBr>SLEV</ChrgBr>\n      <CdtTrfTxInf>\n        <PmtId><EndToEndId>RI-123456789</EndToEndId></PmtId>\n        <Amt><InstdAmt Ccy="EUR">123</InstdAmt></Amt>\n        <Cdtr><Nm>Merchant123</Nm></Cdtr>\n        <CdtrAcct><Id><IBAN> DE23100120020123456789</IBAN></Id></CdtrAcct>\n        <RmtInf><Ustrd>Ref Number Merchant-123456</Ustrd></RmtInf>\n      </CdtTrfTxInf>\n    </PmtInf>\n  </CstmrCdtTrfInitn>\n</Document>\n',
}

const OK_200PaymentInitiationInformationResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.xor([
        PaymentInitiationWithStatusResponseSchema,
        PeriodicPaymentInitiationWithStatusResponseSchema,
        BulkPaymentInitiationWithStatusResponseSchema,
      ]),
    },
    'application/xml': {
      schema: z.xor([
        PaymentInitiationSctPain_001Schema,
        PaymentInitiationSctInstPain_001Schema,
        PaymentInitiationTarget2Pain_001Schema,
        PaymentInitiationCrossBorderPain_001Schema,
        PaymentInitiationSwissSixPain_001Schema,
      ]),
      examples: {
        "Example 1: 'payments' - 'pain.001-sepa-credit-transfers'":
          Pain_001_001SCTSingleTransactionExample,
      },
    },
    'multipart/form-data': { schema: PeriodicPaymentInitiationMultipartBodySchema },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const PaymentInitiationStatusResponseJsonExtendedExample = {
  value: '{\n  "transactionStatus": "ACCP",\n  "scaStatus": "received"\n}\n',
}

const PaymentInitiationStatusResponseJsonSimpleExample = { value: { transactionStatus: 'ACCP' } }

const Pain_002_001SCTSingleTransactionExample = {
  description: 'A pain.002.001.03 message in case of SCT',
  value:
    '<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.002.001.03">\n  <CstmrPmtStsRpt>\n    <GrpHdr>\n      <MsgId>4572457256725689726906</MsgId>\n      <CreDtTm>2017-02-14T20:24:56.021Z</CreDtTm>\n      <DbtrAgt><FinInstnId><BIC>ABCDDEFF</BIC></FinInstnId></DbtrAgt>\n      <CdtrAgt><FinInstnId><BIC>DCBADEFF</BIC></FinInstnId></CdtrAgt>\n    </GrpHdr>\n    <OrgnlGrpInfAndSts>\n      <OrgnlMsgId>MIPI-123456789RI-123456789</OrgnlMsgId>\n      <OrgnlMsgNmId>pain.001.001.03</OrgnlMsgNmId>\n      <OrgnlCreDtTm>2017-02-14T20:23:34.000Z</OrgnlCreDtTm>\n      <OrgnlNbOfTxs>1</OrgnlNbOfTxs>\n      <OrgnlCtrlSum>123</OrgnlCtrlSum>\n      <GrpSts>ACCT</GrpSts>\n    </OrgnlGrpInfAndSts>\n    <OrgnlPmtInfAndSts>\n      <OrgnlPmtInfId>BIPI-123456789RI-123456789</OrgnlPmtInfId>\n      <OrgnlNbOfTxs>1</OrgnlNbOfTxs>\n      <OrgnlCtrlSum>123</OrgnlCtrlSum>\n      <PmtInfSts>ACCT</PmtInfSts>\n    </OrgnlPmtInfAndSts>\n  </CstmrPmtStsRpt>\n</Document>\n',
}

const OK_200PaymentInitiationStatusResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: PaymentInitiationStatusResponse_200JsonSchema,
      examples: {
        extended: PaymentInitiationStatusResponseJsonExtendedExample,
        simple: PaymentInitiationStatusResponseJsonSimpleExample,
      },
    },
    'application/xml': {
      schema: PaymentInitiationStatusResponse_200XmlSchema,
      examples: {
        'Payment Initiation Status Response Body XML for SCT':
          Pain_002_001SCTSingleTransactionExample,
      },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const OK_200ScaStatusResponse = {
  description: 'OK',
  content: { 'application/json': { schema: ScaStatusResponseSchema } },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const OK_200SigningBasketStatusResponse = {
  description: 'OK',
  content: { 'application/json': { schema: SigningBasketStatusResponse_200Schema } },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const TransactionDetailsExampleExample = {
  description: 'Example for transaction details.',
  value: {
    transactionsDetails: {
      bankTransactionCode: 'PMNT-RDDT-ESDD',
      bookingDate: '2017-10-25',
      creditorAccount: { iban: 'DE67100100101306118605' },
      creditorName: 'John Miles',
      mandateId: 'Mandate-2018-04-20-1234',
      remittanceInformationUnstructured: 'Example 1',
      transactionAmount: { amount: '-256.67', currency: 'EUR' },
      transactionId: '1234567',
      valueDate: '2017-10-26',
    },
  },
}

const OK_200TransactionDetailsResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z
        .object({ transactionsDetails: TransactionDetailsBodySchema })
        .openapi({ required: ['transactionsDetails'] }),
      examples: { 'Example 1: Regular Account': TransactionDetailsExampleExample },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const AuthorisationConfirmationResponseExampleExample = {
  description: 'Response of an authorisation confirmation request.',
  value: {
    _links: { status: { href: '/v1/payments/sepa-credit-transfers/qwer3456tzui7890/status' } },
    scaStatus: 'finalised',
  },
}

const SelectPsuAuthenticationMethodResponseExampleEmbeddedPaymentsExample = {
  description:
    'Response of a select PSU authentication method payment initiation request for the embedded approach',
  value: {
    _links: {
      authoriseTransaction: { href: '/v1/payments/1234-wertiq-983/authorisations/123auth456' },
    },
    challengeData: { otpFormat: 'integer', otpMaxLength: '6' },
    chosenScaMethod: {
      authenticationMethodId: 'myAuthenticationID',
      authenticationType: 'SMS_OTP',
    },
    scaStatus: 'scaMethodSelected',
  },
}

const TransactionAuthorisationResponseExampleExample = {
  description: 'Response of a Transaction Authorisation request for the embedded approach.',
  value: { scaStatus: 'finalised' },
}

const UpdatePsuAuthenticationResponseExampleEmbeddedPaymentsExample = {
  description:
    'Response of an update PSU authentication for a consent request for the embedded approach.',
  value: {
    _links: {
      authoriseTransaction: { href: '/v1/payments/1234-wertiq-983/authorisations/123auth456' },
    },
    scaStatus: 'psuAuthenticated',
  },
}

const UpdatePsuIdentificationResponseExampleDecoupledPaymentsExample = {
  description:
    'Response of an update PSU identification for a payment initiation request for the decoupled approach.',
  value: {
    _links: { scaStatus: { href: '/v1/payments/qwer3456tzui7890/authorisations/123auth456' } },
    psuMessage: 'Please use your BankApp for transaction Authorisation.',
    scatransactionStatus: 'psuIdentified',
  },
}

const OK_200UpdatePsuDataResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.xor([
        UpdatePsuIdenticationResponseSchema,
        UpdatePsuAuthenticationResponseSchema,
        SelectPsuAuthenticationMethodResponseSchema,
        ScaStatusResponseSchema,
        AuthorisationConfirmationResponseSchema,
      ]),
      examples: {
        'Authorisation confirmation': AuthorisationConfirmationResponseExampleExample,
        'Select PSU authentication - payment initiation method (Embedded Approach)':
          SelectPsuAuthenticationMethodResponseExampleEmbeddedPaymentsExample,
        'Transaction authorisation (Embedded Approach)':
          TransactionAuthorisationResponseExampleExample,
        'Update PSU authentication - payment pnitiation (Embedded Approach)':
          UpdatePsuAuthenticationResponseExampleEmbeddedPaymentsExample,
        'Update PSU identification - payment pnitiation (Decoupled Approach)':
          UpdatePsuIdentificationResponseExampleDecoupledPaymentsExample,
      },
    },
  },
  headers: z.object({
    'ASPSP-SCA-Approach': ASPSPSCAApproachHeaderSchema,
    'X-Request-ID': XRequestIDHeaderSchema,
  }),
}

const PaymentInitiationCancelResponse_202Example = {
  value: {
    _links: {
      self: { href: '/v1/payments/123456scheduled789' },
      startAuthorisation: { href: '/v1/payments/123456scheduled789/cancellation-authorisations' },
      status: { href: '/v1/payments/123456scheduled789/status' },
    },
    transactionStatus: 'ACTC',
  },
}

const RECEIVED_202PaymentInitiationCancelResponse = {
  description: 'Received',
  content: {
    'application/json': {
      schema: PaymentInitiationCancelResponse_202Schema,
      examples: { Example: PaymentInitiationCancelResponse_202Example },
    },
  },
  headers: z.object({ 'X-Request-ID': XRequestIDHeaderSchema }),
}

const REQUESTTIMEOUT_408AISResponse = {
  description: 'Request Timeout',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const REQUESTTIMEOUT_408PIISResponse = {
  description: 'Request Timeout',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const REQUESTTIMEOUT_408PISResponse = {
  description: 'Request Timeout',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const REQUESTTIMEOUT_408SBSResponse = {
  description: 'Request Timeout',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const SERVICEUNAVAILABLE_503AISResponse = {
  description: 'Service Unavailable',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const SERVICEUNAVAILABLE_503PIISResponse = {
  description: 'Service Unavailable',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const SERVICEUNAVAILABLE_503PISResponse = {
  description: 'Service Unavailable',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const SERVICEUNAVAILABLE_503SBSResponse = {
  description: 'Service Unavailable',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const TOOMANYREQUESTS_429AISResponse = {
  description: 'Too Many Requests',
  content: {
    'application/json': { schema: Error429NGAISSchema },
    'application/problem+json': { schema: Error429AISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const TOOMANYREQUESTS_429PIISResponse = {
  description: 'Too Many Requests',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const TOOMANYREQUESTS_429PISResponse = {
  description: 'Too Many Requests',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const TOOMANYREQUESTS_429SBSResponse = {
  description: 'Too Many Requests',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const UNAUTHORIZED_401AISResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': { schema: Error401NGAISSchema },
    'application/problem+json': { schema: Error401AISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const UNAUTHORIZED_401PIISResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': { schema: Error401NGPIISSchema },
    'application/problem+json': { schema: Error401PIISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const UNAUTHORIZED_401PISResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': { schema: Error401NGPISSchema },
    'application/problem+json': { schema: Error401PISSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const UNAUTHORIZED_401SBSResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': { schema: Error401NGSBSSchema },
    'application/problem+json': { schema: Error401SBSSchema },
  },
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const UNSUPPORTEDMEDIATYPE_415AISResponse = {
  description: 'Unsupported Media Type',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const UNSUPPORTEDMEDIATYPE_415PIISResponse = {
  description: 'Unsupported Media Type',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const UNSUPPORTEDMEDIATYPE_415PISResponse = {
  description: 'Unsupported Media Type',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const UNSUPPORTEDMEDIATYPE_415SBSResponse = {
  description: 'Unsupported Media Type',
  headers: z.object({ Location: LocationHeaderSchema, 'X-Request-ID': XRequestIDHeaderSchema }),
}

const AuthorizationParamsSchema = AuthorizationSchema.openapi({
  param: {
    description:
      'This field  might be used in case where a consent was agreed between ASPSP and PSU through an OAuth2 based protocol,\nfacilitated by the TPP.\n',
    in: 'header',
    name: 'Authorization',
    required: false,
    schema: { $ref: '#/components/schemas/authorization' },
  },
}).exactOptional()

const DigestParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Is contained if and only if the "Signature" element is contained in the header of the request.',
      example: 'SHA-256=hl1/Eps8BEQW58FJhDApwJXjGY4nr1ArGDHIT25vq6A=',
      in: 'header',
      name: 'Digest',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUAcceptParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.\n',
      in: 'header',
      name: 'PSU-Accept',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUAcceptCharsetParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.\n',
      in: 'header',
      name: 'PSU-Accept-Charset',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUAcceptEncodingParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.\n',
      in: 'header',
      name: 'PSU-Accept-Encoding',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUAcceptLanguageParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.\n',
      in: 'header',
      name: 'PSU-Accept-Language',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUCorporateIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "Might be mandated in the ASPSP's documentation. Only used in a corporate context.\n",
      in: 'header',
      name: 'PSU-Corporate-ID',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUCorporateIDTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "Might be mandated in the ASPSP's documentation. Only used in a corporate context.\n",
      in: 'header',
      name: 'PSU-Corporate-ID-Type',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUDeviceIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'UUID (Universally Unique Identifier) for a device, which is used by the PSU, if available.\nUUID identifies either a device or a device dependant application installation.\nIn case of an installation identification this ID needs to be unaltered until removal from device.\n',
      example: '99435c7e-ad88-49ec-a2ad-99ddcb1f5555',
      in: 'header',
      name: 'PSU-Device-ID',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUGeoLocationParamsSchema = z
  .string()
  .regex(/GEO:-?[0-9]{1,2}\.[0-9]{6};-?[0-9]{1,3}\.[0-9]{6}/)
  .exactOptional()
  .openapi({
    param: {
      description:
        'The forwarded Geo Location of the corresponding http request between PSU and TPP if available.\n',
      example: 'GEO:52.506931;13.144558',
      in: 'header',
      name: 'PSU-Geo-Location',
      required: false,
      schema: { pattern: 'GEO:-?[0-9]{1,2}\\.[0-9]{6};-?[0-9]{1,3}\\.[0-9]{6}', type: 'string' },
    },
  })

const PSUHttpMethodParamsSchema = z
  .enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
  .exactOptional()
  .openapi({
    param: {
      description:
        'HTTP method used at the PSU ? TPP interface, if available.\nValid values are:\n* GET\n* POST\n* PUT\n* PATCH\n* DELETE\n',
      in: 'header',
      name: 'PSU-Http-Method',
      required: false,
      schema: { enum: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], type: 'string' },
    },
  })

const PSUIDParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "Client ID of the PSU in the ASPSP client interface.\n\nMight be mandated in the ASPSP's documentation.\n\nIt might be contained even if an OAuth2 based authentication was performed in a pre-step or an OAuth2 based SCA was performed in an preceding\nAIS service in the same session.\nIn this case the ASPSP might check whether PSU-ID and token match,\naccording to ASPSP documentation.\n",
      example: 'PSU-1234',
      in: 'header',
      name: 'PSU-ID',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUIDTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "Type of the PSU-ID, needed in scenarios where PSUs have several PSU-IDs as access possibility.\n\nIn this case, the mean and use are then defined in the ASPSP's documentation.\n",
      in: 'header',
      name: 'PSU-ID-Type',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUIPAddressConditionalForAisParamsSchema = z
  .ipv4()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The forwarded IP Address header field consists of the corresponding HTTP request\nIP Address field between PSU and TPP.\nIt shall be contained if and only if this request was actively initiated by the PSU.\n',
      example: '192.168.8.78',
      in: 'header',
      name: 'PSU-IP-Address',
      required: false,
      schema: { format: 'ipv4', type: 'string' },
    },
  })

const PSUIPAddressMandatoryParamsSchema = z
  .ipv4()
  .openapi({
    param: {
      description:
        'The forwarded IP Address header field consists of the corresponding http request IP Address field between PSU and TPP.\nIf not available, the TPP shall use the IP Address used by the TPP when submitting this request.\n',
      example: '192.168.8.78',
      in: 'header',
      name: 'PSU-IP-Address',
      required: true,
      schema: { format: 'ipv4', type: 'string' },
    },
  })

const PSUIPAddressOptionalParamsSchema = z
  .ipv4()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The forwarded IP Address header field consists of the corresponding http request IP Address field between PSU and TPP.\n',
      example: '192.168.8.78',
      in: 'header',
      name: 'PSU-IP-Address',
      required: false,
      schema: { format: 'ipv4', type: 'string' },
    },
  })

const PSUIPPortParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The forwarded IP Port header field consists of the corresponding HTTP request IP Port field between PSU and TPP, if available.\n',
      example: '1234',
      in: 'header',
      name: 'PSU-IP-Port',
      required: false,
      schema: { type: 'string' },
    },
  })

const PSUUserAgentParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The forwarded Agent header field of the HTTP request between PSU and TPP, if available.\n',
      in: 'header',
      name: 'PSU-User-Agent',
      required: false,
      schema: { type: 'string' },
    },
  })

const SignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'A signature of the request by the TPP on application level. This might be mandated by ASPSP.\n',
      example:
        'keyId="SN=9FA1,CA=CN=D-TRUST%20CA%202-1%202015,O=D-Trust%20GmbH,C=DE",algorithm="rsa-sha256", headers="Digest X-Request-ID PSU-ID TPP-Redirect-URI Date", signature="Base64(RSA-SHA256(signing string))"\n',
      in: 'header',
      name: 'Signature',
      required: false,
      schema: { type: 'string' },
    },
  })

const TPPBrandLoggingInformationParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'This header might be used by TPPs to inform the ASPSP about the brand used by the TPP towards the PSU. \nThis information is meant for logging entries to enhance communication between ASPSP and PSU or ASPSP and TPP. \nThis header might be ignored by the ASPSP.\n',
      in: 'header',
      name: 'TPP-Brand-Logging-Information',
      required: false,
      schema: { type: 'string' },
    },
  })

const TPPExplicitAuthorisationPreferredParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If it equals "true", the TPP prefers to start the authorisation process separately,\ne.g. because of the usage of a signing basket.\nThis preference might be ignored by the ASPSP, if a signing basket is not supported as functionality.\n\nIf it equals "false" or if the parameter is not used, there is no preference of the TPP.\nThis especially indicates that the TPP assumes a direct authorisation of the transaction in the next step,\nwithout using a signing basket.\n',
      in: 'header',
      name: 'TPP-Explicit-Authorisation-Preferred',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const TPPNokRedirectURIParamsSchema = z
  .url()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If this URI is contained, the TPP is asking to redirect the transaction flow to this address instead of the TPP-Redirect-URI in case\nof a negative result of the redirect SCA method. This might be ignored by the ASPSP.\n',
      in: 'header',
      name: 'TPP-Nok-Redirect-URI',
      required: false,
      schema: { format: 'uri', type: 'string' },
    },
  })

const TPPNotificationContentPreferredParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The string has the form\n\nstatus=X1, ..., Xn\n\nwhere Xi is one of the constants SCA, PROCESS, LAST and where constants are not\nrepeated.\nThe usage of the constants supports the of following semantics:\n\n  SCA: A notification on every change of the scaStatus attribute for all related authorisation processes is preferred by the TPP.\n\n  PROCESS: A notification on all changes of consentStatus or transactionStatus attributes is preferred by the TPP.\n  LAST: Only a notification on the last consentStatus or transactionStatus as available in the XS2A interface is preferred by the TPP.\n\nThis header field may be ignored, if the ASPSP does not support resource notification services for the related TPP.\n',
      in: 'header',
      name: 'TPP-Notification-Content-Preferred',
      required: false,
      schema: { type: 'string' },
    },
  })

const TPPNotificationURIParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'URI for the Endpoint of the TPP-API to which the status of the payment initiation should be sent.\nThis header field may by ignored by the ASPSP.\n\nFor security reasons, it shall be ensured that the TPP-Notification-URI as introduced above is secured by the TPP eIDAS QWAC used for identification of the TPP. The following applies:\n\nURIs which are provided by TPPs in TPP-Notification-URI shall comply with the domain secured by the eIDAS QWAC certificate of the TPP in the field CN or SubjectAltName of the certificate. Please note that in case of example-TPP.com as certificate entry TPP- Notification-URI like www.example-TPP.com/xs2a-client/v1/ASPSPidentifcation/mytransaction- id/notifications or notifications.example-TPP.com/xs2a-client/v1/ASPSPidentifcation/mytransaction- id/notifications would be compliant.\n\nWildcard definitions shall be taken into account for compliance checks by the ASPSP.\n ASPSPs may respond with ASPSP-Notification-Support set to false, if the provided URIs do not comply.\n',
      in: 'header',
      name: 'TPP-Notification-URI',
      required: false,
      schema: { type: 'string' },
    },
  })

const TPPRedirectPreferredParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If it equals "true", the TPP prefers a redirect over an embedded SCA approach.\nIf it equals "false", the TPP prefers not to be redirected for SCA. The ASPSP will then choose between the Embedded or the Decoupled\nSCA approach, depending on the choice of the SCA procedure by the TPP/PSU.\nIf the parameter is not used, the ASPSP will choose the SCA approach to be applied depending on the SCA method chosen by the\nTPP/PSU.\n',
      in: 'header',
      name: 'TPP-Redirect-Preferred',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const TPPRedirectURIParamsSchema = z
  .url()
  .exactOptional()
  .openapi({
    param: {
      description:
        'URI of the TPP, where the transaction flow shall be redirected to after a Redirect.\n\nMandated for the Redirect SCA Approach, specifically\nwhen TPP-Redirect-Preferred equals "true".\nIt is recommended to always use this header field.\n\n**Remark for Future:**\nThis field might be changed to mandatory in the next version of the specification.\n',
      in: 'header',
      name: 'TPP-Redirect-URI',
      required: false,
      schema: { format: 'uri', type: 'string' },
    },
  })

const TPPRejectionNoFundsPreferredParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If it equals "true" then the TPP prefers a rejection of the payment initiation in case the ASPSP is\nproviding an integrated confirmation of funds request an the result of this is that not sufficient\nfunds are available.\n\nIf it equals "false" then the TPP prefers that the ASPSP is dealing with the payment initiation like\nin the ASPSPs online channel, potentially waiting for a certain time period for funds to arrive to initiate the payment.\n\nThis parameter might be ignored by the ASPSP.\n',
      in: 'header',
      name: 'TPP-Rejection-NoFunds-Preferred',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const TPPSignatureCertificateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The certificate used for signing the request, in base64 encoding.\nMust be contained if a signature is contained.\n',
      in: 'header',
      name: 'TPP-Signature-Certificate',
      required: false,
      schema: { format: 'byte', type: 'string' },
    },
  })

const XRequestIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the request, unique to the call, as determined by the initiating party.',
      example: '99391c7e-ad88-49ec-a2ad-99ddcb1f7721',
      in: 'header',
      name: 'X-Request-ID',
      required: true,
      schema: { type: 'string' },
    },
  })

const AccountIdParamsSchema = AccountIdSchema.openapi({
  param: {
    description:
      'This identification is denoting the addressed (card) account. \nThe account-id is retrieved by using a "Read Account List" or "Read Card Account list" call. \nThe account-id is the "resourceId" attribute of the account structure. \nIts value is constant at least throughout the lifecycle of a given consent.\n',
    in: 'path',
    name: 'account-id',
    required: true,
    schema: { $ref: '#/components/schemas/accountId' },
  },
})

const AuthorisationIdParamsSchema = AuthorisationIdSchema.openapi({
  param: {
    description: 'Resource identification of the related SCA.',
    in: 'path',
    name: 'authorisationId',
    required: true,
    schema: { $ref: '#/components/schemas/authorisationId' },
  },
})

const BasketIdPATHParamsSchema = BasketIdSchema.openapi({
  param: {
    description: 'This identification of the corresponding signing basket object.\n',
    in: 'path',
    name: 'basketId',
    required: true,
    schema: { $ref: '#/components/schemas/basketId' },
  },
})

const BookingStatusParamsSchema = z
  .enum(['information', 'booked', 'pending', 'both'])
  .openapi({
    param: {
      description:
        'Permitted codes are \n  * "information",\n  * "booked",\n  * "pending", and \n  * "both"\n"booked" shall be supported by the ASPSP.\nTo support the "pending" and "both" feature is optional for the ASPSP,\nError code if not supported in the online banking frontend\n',
      in: 'query',
      name: 'bookingStatus',
      required: true,
      schema: { enum: ['information', 'booked', 'pending', 'both'], type: 'string' },
    },
  })

const ConsentIdHEADERMandatoryParamsSchema = ConsentIdSchema.openapi({
  param: {
    description:
      'This then contains the consentId of the related AIS consent, which was performed prior to this payment initiation.\n',
    in: 'header',
    name: 'Consent-ID',
    required: true,
    schema: { $ref: '#/components/schemas/consentId' },
  },
})

const ConsentIdHEADEROptionalParamsSchema = ConsentIdSchema.openapi({
  param: {
    description:
      'This data element may be contained, if the payment initiation transaction is part of a session, i.e. combined AIS/PIS service.\nThis then contains the consentId of the related AIS consent, which was performed prior to this payment initiation.\n',
    in: 'header',
    name: 'Consent-ID',
    required: false,
    schema: { $ref: '#/components/schemas/consentId' },
  },
}).exactOptional()

const ConsentIdPATHParamsSchema = ConsentIdSchema.openapi({
  param: {
    description:
      'ID of the corresponding consent object as returned by an account information consent request.\n',
    in: 'path',
    name: 'consentId',
    required: true,
    schema: { $ref: '#/components/schemas/consentId' },
  },
})

const DateFromParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Conditional: Starting date (inclusive the date dateFrom) of the transaction list, mandated if no delta access is required\nand if bookingStatus does not equal "information".\n\nFor booked transactions, the relevant date is the booking date. \n\nFor pending transactions, the relevant date is the entry date, which may not be transparent \nneither in this API nor other channels of the ASPSP.\n',
      in: 'query',
      name: 'dateFrom',
      required: false,
      schema: { format: 'date', type: 'string' },
    },
  })

const DateToParamsSchema = z.iso
  .date()
  .exactOptional()
  .openapi({
    param: {
      description:
        'End date (inclusive the data dateTo) of the transaction list, default is "now" if not given.\n\nMight be ignored if a delta function is used.\n\nFor booked transactions, the relevant date is the booking date.\n\nFor pending transactions, the relevant date is the entry date, which may not be transparent\nneither in this API nor other channels of the ASPSP.\n',
      in: 'query',
      name: 'dateTo',
      required: false,
      schema: { format: 'date', type: 'string' },
    },
  })

const DeltaListParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'This data attribute is indicating that the AISP is in favour to get all transactions after the last report access for this PSU on the addressed account. This is another implementation of a delta access-report.\nThis delta indicator might be rejected by the ASPSP if this function is not supported.\nOptional if supported by API provider',
      in: 'query',
      name: 'deltaList',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const EntryReferenceFromParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'This data attribute is indicating that the AISP is in favour to get all transactions after\nthe transaction with identification entryReferenceFrom alternatively to the above defined period.\nThis is a implementation of a delta access.\nIf this data element is contained, the entries "dateFrom" and "dateTo" might be ignored by the ASPSP\nif a delta report is supported.\n\nOptional if supported by API provider.\n',
      in: 'query',
      name: 'entryReferenceFrom',
      required: false,
      schema: { type: 'string' },
    },
  })

const PaymentIdParamsSchema = PaymentIdSchema.openapi({
  param: {
    description: 'Resource identification of the generated payment initiation resource.',
    in: 'path',
    name: 'paymentId',
    required: true,
    schema: { $ref: '#/components/schemas/paymentId' },
  },
})

const PaymentProductParamsSchema = z
  .enum([
    'domestic-swiss-credit-transfers-isr',
    'domestic-swiss-credit-transfers',
    'domestic-swiss-credit-transfers-qr',
    'domestic-swiss-foreign-credit-transfers',
    'swiss-sepa-credit-transfers',
    'swiss-cross-border-credit-transfers',
    'pain.001-sepa-credit-transfers',
    'pain.001-cross-border-credit-transfers',
    'pain.001-swiss-six-credit-transfers',
  ])
  .openapi({
    param: {
      description:
        'The addressed payment product endpoint, e.g. for SEPA Credit Transfers (SCT).\nThe ASPSP will publish which of the payment products/endpoints will be supported.\n\nThe following payment products are supported:\n  - domestic-swiss-credit-transfers-isr\n  - domestic-swiss-credit-transfers\n  - domestic-swiss-credit-transfers-qr\n  - domestic-swiss-foreign-credit-transfers\n  - swiss-sepa-credit-transfers\n  - swiss-cross-border-credit-transfers\n  - pain.001-sepa-credit-transfers\n  - pain.001-cross-border-credit-transfers\n  - pain.001-swiss-six-credit-transfers\n\n**Remark:** For all SEPA Credit Transfer based endpoints which accept XML encoding,\nthe XML pain.001 schemes provided by EPC are supported by the ASPSP as a minimum for the body content.\nFurther XML schemes might be supported by some communities.\n\n**Remark:** For cross-border and TARGET-2 payments only community wide pain.001 schemes do exist.\nThere are plenty of country specificic scheme variants.\n',
      in: 'path',
      name: 'payment-product',
      required: true,
      schema: {
        enum: [
          'domestic-swiss-credit-transfers-isr',
          'domestic-swiss-credit-transfers',
          'domestic-swiss-credit-transfers-qr',
          'domestic-swiss-foreign-credit-transfers',
          'swiss-sepa-credit-transfers',
          'swiss-cross-border-credit-transfers',
          'pain.001-sepa-credit-transfers',
          'pain.001-cross-border-credit-transfers',
          'pain.001-swiss-six-credit-transfers',
        ],
        type: 'string',
      },
    },
  })

const PaymentServiceParamsSchema = z
  .enum(['payments', 'bulk-payments', 'periodic-payments'])
  .openapi({
    param: {
      description:
        'Payment service:\n\nPossible values are:\n* payments\n* bulk-payments\n* periodic-payments\n',
      in: 'path',
      name: 'payment-service',
      required: true,
      schema: { enum: ['payments', 'bulk-payments', 'periodic-payments'], type: 'string' },
    },
  })

const TransactionIdParamsSchema = TransactionIdSchema.openapi({
  param: {
    description:
      'This identification is given by the attribute transactionId of the corresponding entry of a transaction list.\n',
    in: 'path',
    name: 'transactionId',
    required: true,
    schema: { $ref: '#/components/schemas/transactionId' },
  },
})

const WithBalanceQueryParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        'If contained, this function reads the list of accessible payment accounts including the booking balance,\nif granted by the PSU in the related consent and available by the ASPSP.\nThis parameter might be ignored by the ASPSP.\n',
      in: 'query',
      name: 'withBalance',
      required: false,
      schema: { type: 'boolean' },
    },
  })

const AuthorisationConfirmationExampleRedirectExample = {
  description: 'Authorisation confirmation request body for the redirect approach.',
  value: { confirmationCode: '2256ffgh' },
}

const BbanExampleIsrCH_01Example = { value: '01-43884-8' }

const ConfirmationOfFundsExampleExample = {
  description: 'Request body for a confirmation of funds.',
  value: {
    account: { iban: 'DE23100120020123456789' },
    cardNumber: '12345678901234',
    instructedAmount: { amount: '123', currency: 'EUR' },
  },
}

const ConsentsExampleAccountListExample = {
  description: 'Consent on account list of available accounts.',
  value: {
    access: { availableAccounts: 'allAccounts' },
    frequencyPerDay: 1,
    recurringIndicator: 'false',
    validUntil: '2017-08-06',
  },
}

const ConsentsExampleDedicatedAccountsExample = {
  description: 'Consent request on dedicated accounts.',
  value: {
    access: {
      balances: [
        { iban: 'DE40100100103307118608' },
        { currency: 'USD', iban: 'DE02100100109307118603' },
        { iban: 'DE67100100101306118605' },
      ],
      transactions: [{ iban: 'DE40100100103307118608' }, { maskedPan: '123456xxxxxx1234' }],
    },
    frequencyPerDay: 4,
    recurringIndicator: 'true',
    validUntil: '2017-11-01',
  },
}

const ConsentsExampleWithoutAccountsExample = {
  description: 'Consent request on account list or without indication of accounts.',
  value: {
    access: { balances: [], transactions: [] },
    frequencyPerDay: 4,
    recurringIndicator: 'true',
    validUntil: '2017-11-01',
  },
}

const IbanExampleCH_01Example = { value: 'CH02100100109307118603' }

const IbanExampleDe_01Example = { value: 'DE02100100109307118603' }

const IbanExampleDe_02Example = { value: 'DE23100120020123456789' }

const IbanExampleDe_03Example = { value: 'DE40100100103307118608' }

const IbanExampleDe_04Example = { value: 'DE67100100101306118605' }

const IbanExampleDe_05Example = { value: 'DE87200500001234567890' }

const IbanExampleFr_01Example = { value: 'FR7612345987650123456789014' }

const IbanExampleNl_01Example = { value: 'NL76RABO0359400371' }

const IbanExampleSe_01Example = { value: 'SE9412309876543211234567' }

const MaskedPanExampleExample = { value: '123456xxxxxx1234' }

const PaymentInitiationSctBodyBulkPaymentsJsonExample = {
  value: {
    batchBookingPreferred: 'true',
    debtorAccount: { iban: 'DE40100100103307118608' },
    paymentInformationId: 'my-bulk-identification-1234',
    payments: [
      {
        creditorAccount: { iban: 'DE02100100109307118603' },
        creditorName: 'Merchant123',
        'instructedAmount"': { amount: '123.50', currency: 'EUR' },
        remittanceInformationUnstructured: 'Ref Number Merchant 1',
      },
      {
        creditorAccount: { iban: 'FR7612345987650123456789014' },
        creditorName: 'Merchant456',
        'instructedAmount"': { amount: '34.10', currency: 'EUR' },
        remittanceInformationUnstructured: 'Ref Number Merchant 2',
      },
    ],
    requestedExecutionDate: '2018-08-01',
  },
}

const PaymentInitiationSctBodyPaymentsJsonExample = {
  value: {
    creditorAccount: { iban: 'DE02100100109307118603' },
    creditorName: 'Merchant123',
    debtorAccount: { iban: 'DE40100100103307118608' },
    instructedAmount: { amount: '123.50', currency: 'EUR' },
    remittanceInformationUnstructured: 'Ref Number Merchant',
  },
}

const PaymentInitiationSctBodyPeriodicPaymentsJsonExample = {
  value: {
    creditorAccount: { iban: 'DE23100120020123456789' },
    creditorName: 'Merchant123',
    dayOfExecution: '01',
    debtorAccount: { iban: 'DE40100100103307118608' },
    executionRule: 'preceding',
    frequency: 'Monthly',
    instructedAmount: { amount: '123', currency: 'EUR' },
    remittanceInformationUnstructured: 'Ref Number Abonnement',
    startDate: '2018-03-01',
  },
}

const PaymentInitiationDomesticSwissCreditTransfersIsrJson_1Example = {
  value: {
    creditorAccount: { otherAccountIdentification: '010391391' },
    creditorAddress: {
      buildingNumber: '1',
      country: 'CH',
      postCode: '9300',
      streetName: 'Kundenstrasse',
      townName: 'Wittenbach',
    },
    creditorName: 'Kunde 1',
    debtorAccount: { iban: 'CH2781412000006944106' },
    debtorAgent: { bic: 'KBTGCH22XXX' },
    debtorName: 'Example Isrone',
    endToEndIdentification: '54947df80e9e4471a2f99af509fb5889',
    instructedAmount: { amount: '1000.00', currency: 'CHF' },
    remittanceInformationStructured: '210000000003139471430009017',
    requestedExecutionDate: '2019-10-22',
  },
}

const PaymentInitiationDomesticSwissCreditTransfersIsrJson_2Example = {
  value: {
    creditorAccount: { otherAccountIdentification: '010391391' },
    creditorAddress: {
      buildingNumber: '1',
      postCode: '9300',
      streetName: 'Kundenstrasse',
      townName: 'Wittenbach',
    },
    creditorName: 'Kunde 1',
    debtorAccount: { iban: 'CH0900784152046193205' },
    debtorAgent: { bic: 'KBTGCH22XXX' },
    debtorName: 'Example Isrtwo',
    endToEndIdentification: '54947df80e9e4471a2f99af509fb5889',
    instructedAmount: { amount: '1000.00', currency: 'EUR' },
    remittanceInformationStructured: '210000000003139471430009017',
    requestedExecutionDate: '2019-10-22',
  },
}

const PaymentInitiationDomesticSwissCreditTransfersQrJson_1Example = {
  value: {
    creditorAccount: { iban: 'CH3630005200123456789' },
    creditorAddress: {
      buildingNumber: '1',
      country: 'CH',
      postCode: '9300',
      streetName: 'Kundenstrasse',
      townName: 'Wittenbach',
    },
    creditorName: 'Kunde 1',
    debtorAccount: { iban: 'CH900025425440020003X' },
    debtorAgent: { bic: 'UBSWCHZH90A' },
    debtorName: 'Example Qrone',
    endToEndIdentification: '8ff86bf0908a4b5f99a582220bbe0033',
    instructedAmount: { amount: '100.00', currency: 'CHF' },
    remittanceInformationStructured: {
      SCORorQRRorIPI: 'QRR',
      reference: '000000000000000000000000011',
    },
    requestedExecutionDate: '2019-10-22',
  },
}

const PaymentInitiationDomesticSwissCreditTransfersJson_1Example = {
  value: {
    creditorAccount: { iban: 'CH450021721745521840J' },
    creditorAddress: {
      country: 'CH',
      postCode: '2501',
      streetName: 'Rue de la gare',
      townName: 'Biel',
    },
    creditorAgent: { bic: 'UBSWCHZH82P' },
    creditorName: 'Kunde 2',
    debtorAccount: { iban: 'CH2781412000006944106' },
    debtorAgent: { bic: 'RAIFCH22E12' },
    debtorName: 'Example Swissone',
    endToEndIdentification: '54947df80e9e4471a2f99af509fb5889',
    instructedAmount: { amount: '4000.00', currency: 'CHF' },
    requestedExecutionDate: '2019-10-22',
  },
}

const PaymentInitiationDomesticSwissCreditTransfersJson_2Example = {
  value: {
    creditorAccount: { iban: 'CH5309000000800053446' },
    creditorAddress: {
      country: 'CH',
      postCode: '2501',
      streetName: 'Rue de la gare',
      townName: 'Biel/Bienne',
    },
    creditorAgent: { bic: 'POFICHBEXXX' },
    creditorName: 'Kunde 2',
    debtorAccount: { iban: 'CH0900784152046193205' },
    debtorAgent: { bic: 'KBTGCH22XXX' },
    debtorName: 'Example Swisstwo',
    endToEndIdentification: '54947df80e9e4471a2f99af509fb5889',
    instructedAmount: { amount: '4000.00', currency: 'EUR' },
    requestedExecutionDate: '2019-10-22',
  },
}

const PaymentInitiationDomesticSwissForeignCreditTransfersJson_1Example = {
  value: {
    creditorAccount: { iban: 'CH450021721745521840J' },
    creditorAddress: {
      buildingNumber: '1',
      country: 'CH',
      postCode: '2501',
      streetName: 'Rue de la gare',
      townName: 'Biel/Bienne',
    },
    creditorAgent: { bic: 'UBSWCHZH82P' },
    creditorName: 'Kunde 2',
    debtorAccount: { iban: 'CH2781412000006944106' },
    debtorAgent: { bic: 'RAIFCH22E12' },
    debtorName: 'Example Swissforeignone',
    endToEndIdentification: '54947df80e9e4471a2f99af509fb5889',
    instructedAmount: { amount: '5000.00', currency: 'USD' },
    requestedExecutionDate: '2019-10-22',
  },
}

const PaymentInitiationDomesticSwissForeignCreditTransfersJson_2Example = {
  value: {
    creditorAccount: { iban: 'CH5309000000800053446' },
    creditorAddress: {
      country: 'CH',
      postCode: '2501',
      streetName: 'Rue de la gare',
      townName: 'Biel/Bienne',
    },
    creditorAgent: { bic: 'POFICHBEXXX' },
    creditorName: 'Kunde 2',
    debtorAccount: { iban: 'CH0900784152046193205' },
    debtorAgent: { bic: 'KBTGCH22XXX' },
    debtorName: 'Example Swissforeigntwo',
    endToEndIdentification: '54947df80e9e4471a2f99af509fb5889',
    instructedAmount: { amount: '4000.00', currency: 'USD' },
    requestedExecutionDate: '2019-10-22',
  },
}

const PaymentInitiationSwissCrossBorderCreditTransfersJson_1Example = {
  value: {
    chargeBearer: 'SHAR',
    creditorAccount: { otherAccountIdentification: '474-8512-007' },
    creditorAddress: { addressLine1: 'Timesquare', addressLine2: '10036 New York', country: 'US' },
    creditorAgent: {
      address: { country: 'US', postCode: '10036', streetName: 'Timesquare', townName: 'New York' },
      name: 'US Bank',
    },
    creditorName: 'Max Mueller',
    debtorAccount: { iban: 'CH0900784152046193205' },
    debtorAgent: { bic: 'KBTGCH22XXX' },
    debtorName: 'Example Crossborderone',
    endToEndIdentification: '54947df80e9e4471a2f99af509fb5889',
    instructedAmount: { amount: '6000.00', currency: 'USD' },
    requestedExecutionDate: '2019-10-22',
  },
}

const PaymentInitiationSwissCrossBorderCreditTransfersJson_2Example = {
  value: {
    chargeBearer: 'SHAR',
    creditorAccount: { iban: 'DE80690700240048159800' },
    creditorAddress: {
      country: 'DE',
      postCode: '80036',
      streetName: 'Rosenauweg',
      townName: 'Muenchen',
    },
    creditorAgent: { bic: 'DEUTDEDB690' },
    creditorName: 'Kunde 3',
    debtorAccount: { iban: 'CH2781412000006944106' },
    debtorAgent: { bic: 'RAIFCH22E12' },
    debtorName: 'Example Crossbordertwo',
    endToEndIdentification: '54947df80e9e4471a2f99af509fb5889',
    instructedAmount: { amount: '6000.00', currency: 'GBP' },
    requestedExecutionDate: '2019-10-22',
  },
}

const PaymentInitiationSwissSepaCreditTransfersJson_1Example = {
  value: {
    chargeBearer: 'SLEV',
    creditorAccount: { iban: 'DE80690700240048159800' },
    creditorAddress: {
      country: 'DE',
      postCode: '80036',
      streetName: 'Rosenauweg',
      townName: 'Muenchen',
    },
    creditorName: 'Kunde 3',
    debtorAccount: { iban: 'CH2781412000006944106' },
    debtorAgent: { bic: 'RAIFCH22E12' },
    debtorName: 'Example Sepaone',
    endToEndIdentification: '54947df80e9e4471a2f99af509fb5889',
    instructedAmount: { amount: '5000.00', currency: 'EUR' },
    requestedExecutionDate: '2019-10-22',
    serviceLevel: 'SEPA',
  },
}

const PaymentInitiationSwissSepaCreditTransfersJson_2Example = {
  value: {
    chargeBearer: 'SLEV',
    creditorAccount: { iban: 'DE80690700240048159800' },
    creditorAddress: {
      country: 'DE',
      postCode: '80036',
      streetName: 'Rosenauweg',
      townName: 'Muenchen',
    },
    creditorAgent: { bic: 'DEUTDEDB690' },
    creditorName: 'Kunde 3',
    debtorAccount: { iban: 'CH6309000000250097798' },
    debtorAgent: { bic: 'POFICHBEXXX' },
    debtorName: 'Example Sepatwo',
    endToEndIdentification: '54947df80e9e4471a2f99af509fb5889',
    instructedAmount: { amount: '5000.00', currency: 'EUR' },
    requestedExecutionDate: '2019-10-22',
    serviceLevel: 'SEPA',
  },
}

const SelectPsuAuthenticationMethodExampleEmbeddedExample = {
  description: 'Select PSU authentication method request body for the embedded approach.',
  value: { authenticationMethodId: 'myAuthenticationID' },
}

const SigningBasketExampleExample = {
  description: 'JSON Body of a signing basket request',
  value: { paymentIds: ['123qwert456789', '12345qwert7899'] },
}

const TransactionAuthorisationExampleEmbeddedExample = {
  description: 'Transaction authorisation request body for the embedded approach.',
  value: { scaAuthenticationData: '123456' },
}

const UpdatePsuAuthenticationExampleEmbeddedExample = {
  description: 'Update PSU authentication request body for the embedded approach.',
  value: { psuData: { password: 'start12' } },
}

const UuidExampleExample = { value: '99391c7e-ad88-49ec-a2ad-99ddcb1f7721' }

const ConfirmationOfFundsRequestBody = {
  description: 'Request body for a confirmation of funds request.\n',
  content: {
    'application/json': {
      schema: ConfirmationOfFundsSchema,
      examples: { Example: ConfirmationOfFundsExampleExample },
    },
  },
  required: true,
}

const ConsentsRequestBody = {
  description: 'Request body for a consents request.\n',
  content: {
    'application/json': {
      schema: ConsentsSchema,
      examples: {
        'Consent Request on Account List or without Indication of dedicated Accounts':
          ConsentsExampleWithoutAccountsExample,
        'Consent Request on Dedicated Accounts': ConsentsExampleDedicatedAccountsExample,
        'Consent on Account List of Available Accounts': ConsentsExampleAccountListExample,
      },
    },
  },
}

const PaymentInitiationRequestBody = {
  description:
    'JSON request body for a payment inition request message.\n\nThere are the following payment-products supported:\n  * "domestic-swiss-credit-transfers-isr"\n  * "domestic-swiss-credit-transfers"\n  * "domestic-swiss-credit-transfers-qr"\n  * "domestic-swiss-foreign-credit-transfers"\n  * "swiss-sepa-credit-transfers" with JSON-Body\n  * "swiss-cross-border-credit-transfers" with JSON-Body\n  * "pain.001-sepa-credit-transfers" with XML pain.001.001.03 body for SCT scheme\n    Only country specific schemes are currently available\n  * "pain.001-cross-border-credit-transfers" with pain.001 body.\n    Only country specific schemes are currently available\n  * "pain.001-swiss-six-credit-transfers"\n\nThere are the following payment-services supported:\n  * "payments"\n  * "periodic-payments"\n  * "bulk-paments"\n\nAll optional, conditional and predefined but not yet used fields are defined.\n',
  content: {
    'application/json': {
      schema: z.xor([
        PaymentInitiationJsonSchema,
        PeriodicPaymentInitiationJsonSchema,
        BulkPaymentInitiationJsonSchema,
      ]),
      examples: {
        "Example 10: 'payments' - 'paymentInitiation_swiss-cross-border-credit-transfers_json_1'":
          PaymentInitiationSwissCrossBorderCreditTransfersJson_1Example,
        "Example 11: 'payments' - 'paymentInitiation_swiss-cross-border-credit-transfers_json_2'":
          PaymentInitiationSwissCrossBorderCreditTransfersJson_2Example,
        "Example 12 (generic NextGenPSD2): 'periodic-payments' - 'sepa-credit-transfers'":
          PaymentInitiationSctBodyPeriodicPaymentsJsonExample,
        "Example 13 (generic NextGenPSD2): 'bulk-payments' - 'sepa-credit-transfers'":
          PaymentInitiationSctBodyBulkPaymentsJsonExample,
        "Example 1: 'payments' - 'paymentInitiation_domestic-swiss-credit-transfers-isr_json_1'":
          PaymentInitiationDomesticSwissCreditTransfersIsrJson_1Example,
        "Example 2: 'payments' - 'paymentInitiation_domestic-swiss-credit-transfers-isr_json_2'":
          PaymentInitiationDomesticSwissCreditTransfersIsrJson_2Example,
        "Example 3: 'payments' - 'paymentInitiation_domestic-swiss-credit-transfers_json_1'":
          PaymentInitiationDomesticSwissCreditTransfersJson_1Example,
        "Example 4: 'payments' - 'paymentInitiation_domestic-swiss-credit-transfers_json_2'":
          PaymentInitiationDomesticSwissCreditTransfersJson_2Example,
        "Example 5: 'payments' - 'paymentInitiation_domestic-swiss-credit-transfers-qr_json_1'":
          PaymentInitiationDomesticSwissCreditTransfersQrJson_1Example,
        "Example 6: 'payments' - 'paymentInitiation_domestic-swiss-foreign-credit-transfers_json_1'":
          PaymentInitiationDomesticSwissForeignCreditTransfersJson_1Example,
        "Example 7: 'payments' - 'paymentInitiation_domestic-swiss-foreign-credit-transfers_json_2'":
          PaymentInitiationDomesticSwissForeignCreditTransfersJson_2Example,
        "Example 8: 'payments' - 'paymentInitiation_swiss-sepa-credit-transfers_json_1'":
          PaymentInitiationSwissSepaCreditTransfersJson_1Example,
        "Example 9: 'payments' - 'paymentInitiation_swiss-sepa-credit-transfers_json_2'":
          PaymentInitiationSwissSepaCreditTransfersJson_2Example,
      },
    },
    'application/xml': {
      schema: z.xor([
        PaymentInitiationSctPain_001Schema,
        PaymentInitiationSctInstPain_001Schema,
        PaymentInitiationTarget2Pain_001Schema,
        PaymentInitiationCrossBorderPain_001Schema,
        PaymentInitiationSwissSixPain_001Schema,
      ]),
      examples: {
        "Example 1: 'payments' - 'pain.001-sepa-credit-transfers'":
          Pain_001_001SCTSingleTransactionExample,
      },
    },
    'multipart/form-data': { schema: PeriodicPaymentInitiationMultipartBodySchema },
  },
  required: true,
}

const SigningBasketRequestBody = {
  description: 'Request body for a confirmation of an establishing signing basket request.\n',
  content: {
    'application/json': {
      schema: SigningBasketSchema,
      examples: { Example: SigningBasketExampleExample },
    },
  },
}

const ASPSPMultipleConsentSupportHeaderSchema = z
  .boolean()
  .exactOptional()
  .openapi({
    description:
      'true if the ASPSP supports the Multiple Consent Service.\n\nfalse if the ASPSP does not support the Multiple Consent Service.\n\nIf not provided, this also implies that the ASPSP does not support the Multiple Consent Service.\n',
    param: { required: false },
  })

const BearerAuthOAuthSecurityScheme = {
  description:
    'Bearer Token. \n\nIs contained only, if an OAuth2 based authentication was performed in a pre-step or \nan OAuth2 based SCA was performed in a preceding AIS service in the same session.\n',
  scheme: 'bearer',
  type: 'http',
}

export const getV1AccountsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts',
  tags: ['Account Information Service (AIS)'],
  summary: 'Read account list',
  description:
    'Read the identifiers of the available payment account together with \nbooking balance information, depending on the consent granted.\n\nIt is assumed that a consent of the PSU to this access is already given and stored on the ASPSP system.\nThe addressed list of accounts depends then on the PSU ID and the stored consent addressed by consentId,\nrespectively the OAuth2 access token.\n\nReturns all identifiers of the accounts, to which an account access has been granted to through\nthe /consents endpoint by the PSU.\nIn addition, relevant information about the accounts and hyperlinks to corresponding account\ninformation resources are provided if a related consent has been already granted.\n\nRemark: Note that the /consents endpoint optionally offers to grant an access on all available\npayment accounts of a PSU.\nIn this case, this endpoint will deliver the information about all available payment accounts\nof the PSU at this ASPSP.\n',
  operationId: 'getAccountList',
  request: {
    query: z.object({ withBalance: WithBalanceQueryParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'Consent-ID': ConsentIdHEADERMandatoryParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200AccountListResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1AccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account-id}',
  tags: ['Account Information Service (AIS)'],
  summary: 'Read account details',
  description:
    'Reads details about an account, with balances where required. \nIt is assumed that a consent of the PSU to \nthis access is already given and stored on the ASPSP system. \nThe addressed details of this account depends then on the stored consent addressed by consentId, \nrespectively the OAuth2 access token.\n\n**NOTE:** The account-id can represent a multicurrency account.\nIn this case the currency code is set to "XXX".\n\nGive detailed information about the addressed account.\n\nGive detailed information about the addressed account together with balance information\n',
  operationId: 'readAccountDetails',
  request: {
    params: z.object({ 'account-id': AccountIdParamsSchema }),
    query: z.object({ withBalance: WithBalanceQueryParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'Consent-ID': ConsentIdHEADERMandatoryParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200AccountDetailsResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1AccountsAccountIdBalancesRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account-id}/balances',
  tags: ['Account Information Service (AIS)'],
  summary: 'Read balance',
  description:
    'Reads account data from a given account addressed by "account-id". \n\n**Remark:** This account-id can be a tokenised identification due to data protection reason since the path \ninformation might be logged on intermediary servers within the ASPSP sphere. \nThis account-id then can be retrieved by the "Get account list" call.\n\nThe account-id is constant at least throughout the lifecycle of a given consent.\n',
  operationId: 'getBalances',
  request: {
    params: z.object({ 'account-id': AccountIdParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'Consent-ID': ConsentIdHEADERMandatoryParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200BalancesResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1AccountsAccountIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account-id}/transactions',
  tags: ['Account Information Service (AIS)'],
  summary: 'Read transaction list of an account',
  description:
    'Read transaction reports or transaction lists of a given account ddressed by "account-id", depending on the steering parameter\n"bookingStatus" together with balances.\n\nFor a given account, additional parameters are e.g. the attributes "dateFrom" and "dateTo".\nThe ASPSP might add balance information, if transaction lists without balances are not supported.\n',
  operationId: 'getTransactionList',
  request: {
    params: z.object({ 'account-id': AccountIdParamsSchema }),
    query: z.object({
      dateFrom: DateFromParamsSchema,
      dateTo: DateToParamsSchema,
      entryReferenceFrom: EntryReferenceFromParamsSchema,
      bookingStatus: BookingStatusParamsSchema,
      deltaList: DeltaListParamsSchema,
      withBalance: WithBalanceQueryParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'Consent-ID': ConsentIdHEADERMandatoryParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200AccountsTransactionsResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1AccountsAccountIdTransactionsTransactionIdRoute = createRoute({
  method: 'get',
  path: '/v1/accounts/{account-id}/transactions/{transactionId}',
  tags: ['Account Information Service (AIS)'],
  summary: 'Read transaction details',
  description:
    'Reads transaction details from a given transaction addressed by "transactionId" on a given account addressed by "account-id".\nThis call is only available on transactions as reported in a JSON format.\n\n**Remark:** Please note that the PATH might be already given in detail by the corresponding entry of the response of the\n"Read Transaction List" call within the _links subfield.\n',
  operationId: 'getTransactionDetails',
  request: {
    params: z.object({
      'account-id': AccountIdParamsSchema,
      transactionId: TransactionIdParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'Consent-ID': ConsentIdHEADERMandatoryParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200TransactionDetailsResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const postV1ConsentsRoute = createRoute({
  method: 'post',
  path: '/v1/consents',
  tags: ['Account Information Service (AIS)'],
  summary: 'Create consent',
  description:
    'This method create a consent resource, defining access rights to dedicated accounts of \na given PSU-ID. These accounts are addressed explicitly in the method as \nparameters as a core function.\n\n**Side Effects**\nWhen this consent request is a request where the "recurringIndicator" equals "true",\nand if it exists already a former consent for recurring access on account information \nfor the addressed PSU, then the former consent automatically expires as soon as the new \nconsent request is authorised by the PSU.\n\nOptional Extension:\nAs an option, an ASPSP might optionally accept a specific access right on the access on all PSD2 related services for all available accounts.\n\nAs another option an ASPSP might optionally also accept a command, where only access rights are inserted without mentioning the addressed account. \nThe relation to accounts is then handled afterwards between PSU and ASPSP. \nThis option is not supported for the Embedded SCA Approach. \nAs a last option, an ASPSP might in addition accept a command with access rights\n  * to see the list of available payment accounts or\n  * to see the list of available payment accounts with balances.\n',
  operationId: 'createConsent',
  request: {
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-ID': PSUIDParamsSchema,
      'PSU-ID-Type': PSUIDTypeParamsSchema,
      'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
      'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
      'TPP-Redirect-Preferred': TPPRedirectPreferredParamsSchema,
      'TPP-Redirect-URI': TPPRedirectURIParamsSchema,
      'TPP-Nok-Redirect-URI': TPPNokRedirectURIParamsSchema,
      'TPP-Explicit-Authorisation-Preferred': TPPExplicitAuthorisationPreferredParamsSchema,
      'TPP-Brand-Logging-Information': TPPBrandLoggingInformationParamsSchema,
      'TPP-Notification-URI': TPPNotificationURIParamsSchema,
      'TPP-Notification-Content-Preferred': TPPNotificationContentPreferredParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-IP-Address': PSUIPAddressMandatoryParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
    body: ConsentsRequestBody,
  },
  responses: {
    201: CREATED_201ConsentsResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1ConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/v1/consents/{consentId}',
  tags: ['Account Information Service (AIS)'],
  summary: 'Get consent request',
  description:
    'Returns the content of an account information consent object. \nThis is returning the data for the TPP especially in cases, \nwhere the consent was directly managed between ASPSP and PSU e.g. in a redirect SCA Approach.\n',
  operationId: 'getConsentInformation',
  request: {
    params: z.object({ consentId: ConsentIdPATHParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200ConsentInformationResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const deleteV1ConsentsConsentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/consents/{consentId}',
  tags: ['Account Information Service (AIS)'],
  summary: 'Delete Consent',
  description: 'The TPP can delete an account information consent object if needed.',
  operationId: 'deleteConsent',
  request: {
    params: z.object({ consentId: ConsentIdPATHParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    204: NOCONTENT_204ConsentsResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1ConsentsConsentIdAuthorisationsRoute = createRoute({
  method: 'get',
  path: '/v1/consents/{consentId}/authorisations',
  tags: ['Account Information Service (AIS)'],
  summary: 'Get consent authorisation sub-resources request',
  description:
    'Return a list of all authorisation subresources IDs which have been created.\n\nThis function returns an array of hyperlinks to all generated authorisation sub-resources.\n',
  operationId: 'getConsentAuthorisation',
  request: {
    params: z.object({ consentId: ConsentIdPATHParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200AuthorisationsResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const postV1ConsentsConsentIdAuthorisationsRoute = createRoute({
  method: 'post',
  path: '/v1/consents/{consentId}/authorisations',
  tags: ['Account Information Service (AIS)', 'Common Services'],
  summary: 'Start the authorisation process for a consent',
  description:
    "Create an authorisation sub-resource and start the authorisation process of a consent.\nThe message might in addition transmit authentication and authorisation related data.\n\nhis method is iterated n times for a n times SCA authorisation in a\ncorporate context, each creating an own authorisation sub-endpoint for\nthe corresponding PSU authorising the consent.\n\nThe ASPSP might make the usage of this access method unnecessary,\nsince the related authorisation resource will be automatically created by\nthe ASPSP after the submission of the consent data with the first POST consents call.\n\nThe start authorisation process is a process which is needed for creating a new authorisation\nor cancellation sub-resource.\n\nThis applies in the following scenarios:\n\n  * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding Payment \n    initiation response that an explicit start of the authorisation process is needed by the TPP. \n    The 'startAuthorisation' hyperlink can transport more information about data which needs to be \n    uploaded by using the extended forms:\n    * 'startAuthorisationWithPsuIdentfication', \n    * 'startAuthorisationWithPsuAuthentication' \n    * 'startAuthorisationWithEncryptedPsuAuthentication'\n    * 'startAuthorisationWithAuthentciationMethodSelection'\n  * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.\n  * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding \n    payment cancellation response that an explicit start of the authorisation process is needed by the TPP. \n    The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded \n    by using the extended forms as indicated above.\n  * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for\n    executing the cancellation.\n  * The signing basket needs to be authorised yet.\n",
  operationId: 'startConsentAuthorisation',
  request: {
    params: z.object({ consentId: ConsentIdPATHParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-ID': PSUIDParamsSchema,
      'PSU-ID-Type': PSUIDTypeParamsSchema,
      'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
      'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
      'TPP-Redirect-Preferred': TPPRedirectPreferredParamsSchema,
      'TPP-Redirect-URI': TPPRedirectURIParamsSchema,
      'TPP-Nok-Redirect-URI': TPPNokRedirectURIParamsSchema,
      'TPP-Notification-URI': TPPNotificationURIParamsSchema,
      'TPP-Notification-Content-Preferred': TPPNotificationContentPreferredParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z.any(),
            UpdatePsuAuthenticationSchema,
            SelectPsuAuthenticationMethodSchema,
            TransactionAuthorisationSchema,
          ]),
        },
      },
    },
  },
  responses: {
    201: CREATED_201StartScaProcessResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute = createRoute({
  method: 'get',
  path: '/v1/consents/{consentId}/authorisations/{authorisationId}',
  tags: ['Account Information Service (AIS)', 'Common Services'],
  summary: 'Read the SCA status of the consent authorisation',
  description:
    "This method returns the SCA status of a consent initiation's authorisation sub-resource.\n",
  operationId: 'getConsentScaStatus',
  request: {
    params: z.object({
      consentId: ConsentIdPATHParamsSchema,
      authorisationId: AuthorisationIdParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200ScaStatusResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const putV1ConsentsConsentIdAuthorisationsAuthorisationIdRoute = createRoute({
  method: 'put',
  path: '/v1/consents/{consentId}/authorisations/{authorisationId}',
  tags: ['Account Information Service (AIS)', 'Common Services'],
  summary: 'Update PSU Data for consents',
  description:
    'This method update PSU data on the consents  resource if needed.\nIt may authorise a consent within the Embedded SCA Approach where needed.\n\nIndependently from the SCA Approach it supports e.g. the selection of\nthe authentication method and a non-SCA PSU authentication.\n\nThere are several possible update PSU data requests in the context of a consent request if needed, \nwhich depends on the SCA approach:\n\n* Redirect SCA Approach:\n  A specific Update PSU data request is applicable for \n    * the selection of authentication methods, before choosing the actual SCA approach.\n* Decoupled SCA Approach:\n  A specific update PSU data request is only applicable for\n  * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or\n  * the selection of authentication methods.\n* Embedded SCA Approach: \n  The Update PSU data request might be used \n  * to add credentials as a first factor authentication data of the PSU and\n  * to select the authentication method and\n  * transaction authorisation.\n\nThe SCA Approach might depend on the chosen SCA method. \nFor that reason, the following possible update PSU data request can apply to all SCA approaches:\n\n* Select an SCA method in case of several SCA methods are available for the customer.\n\nThere are the following request types on this access path:\n  * Update PSU identification\n  * Update PSU authentication\n  * Select PSU autorization method \n    WARNING: This method needs a reduced header, \n    therefore many optional elements are not present. \n    Maybe in a later version the access path will change.\n  * Transaction Authorisation\n    WARNING: This method needs a reduced header, \n    therefore many optional elements are not present. \n    Maybe in a later version the access path will change.\n',
  operationId: 'updateConsentsPsuData',
  request: {
    params: z.object({
      consentId: ConsentIdPATHParamsSchema,
      authorisationId: AuthorisationIdParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-ID': PSUIDParamsSchema,
      'PSU-ID-Type': PSUIDTypeParamsSchema,
      'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
      'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z.any(),
            UpdatePsuAuthenticationSchema,
            SelectPsuAuthenticationMethodSchema,
            TransactionAuthorisationSchema,
            AuthorisationConfirmationSchema,
          ]),
          examples: {
            'Authorisation confirmation (Redirect Approach)':
              AuthorisationConfirmationExampleRedirectExample,
            'Select PSU authentication method (Embedded Approach)':
              SelectPsuAuthenticationMethodExampleEmbeddedExample,
            'Transaction authorisation (Embedded Approach)':
              TransactionAuthorisationExampleEmbeddedExample,
            'Update PSU authentication (Embedded Approach)':
              UpdatePsuAuthenticationExampleEmbeddedExample,
            'Update PSU identification/additional SCA process (Embedded Approach)': { value: {} },
          },
        },
      },
    },
  },
  responses: {
    200: OK_200UpdatePsuDataResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1ConsentsConsentIdStatusRoute = createRoute({
  method: 'get',
  path: '/v1/consents/{consentId}/status',
  tags: ['Account Information Service (AIS)'],
  summary: 'Consent status request',
  description: 'Read the status of an account information consent resource.',
  operationId: 'getConsentStatus',
  request: {
    params: z.object({ consentId: ConsentIdPATHParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressConditionalForAisParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200ConsentStatusResponse,
    400: BADREQUEST_400AISResponse,
    401: UNAUTHORIZED_401AISResponse,
    403: FORBIDDEN_403AISResponse,
    404: NOTFOUND_404AISResponse,
    405: METHODNOTALLOWED_405AISResponse,
    406: NOTACCEPTABLE_406AISResponse,
    408: REQUESTTIMEOUT_408AISResponse,
    409: CONFLICT_409AISResponse,
    415: UNSUPPORTEDMEDIATYPE_415AISResponse,
    429: TOOMANYREQUESTS_429AISResponse,
    500: INTERNALSERVERERROR_500AISResponse,
    503: SERVICEUNAVAILABLE_503AISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const postV1FundsConfirmationsRoute = createRoute({
  method: 'post',
  path: '/v1/funds-confirmations',
  tags: ['Confirmation of Funds Service (PIIS)'],
  summary: 'Confirmation of funds request',
  description:
    'Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.\nIf the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.',
  operationId: 'checkAvailabilityOfFunds',
  request: {
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Authorization: AuthorizationParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
    }),
    body: ConfirmationOfFundsRequestBody,
  },
  responses: {
    200: OK_200ConfirmationOfFundsResponse,
    400: BADREQUEST_400PIISResponse,
    401: UNAUTHORIZED_401PIISResponse,
    403: FORBIDDEN_403PIISResponse,
    404: NOTFOUND_404PIISResponse,
    405: METHODNOTALLOWED_405PIISResponse,
    406: NOTACCEPTABLE_406PIISResponse,
    408: REQUESTTIMEOUT_408PIISResponse,
    409: CONFLICT_409PIISResponse,
    415: UNSUPPORTEDMEDIATYPE_415PIISResponse,
    429: TOOMANYREQUESTS_429PIISResponse,
    500: INTERNALSERVERERROR_500PIISResponse,
    503: SERVICEUNAVAILABLE_503PIISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const postV1SigningBasketsRoute = createRoute({
  method: 'post',
  path: '/v1/signing-baskets',
  tags: ['Signing Baskets Service (SBS)'],
  summary: 'Create a signing basket resource',
  description:
    'Create a signing basket resource for authorising several transactions with one SCA method. \nThe resource identifications of these transactions are contained in the payload of this access method\n',
  operationId: 'createSigningBasket',
  request: {
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-ID': PSUIDParamsSchema,
      'PSU-ID-Type': PSUIDTypeParamsSchema,
      'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
      'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
      'Consent-ID': ConsentIdHEADEROptionalParamsSchema,
      'PSU-IP-Address': PSUIPAddressMandatoryParamsSchema,
      'TPP-Redirect-Preferred': TPPRedirectPreferredParamsSchema,
      'TPP-Redirect-URI': TPPRedirectURIParamsSchema,
      'TPP-Nok-Redirect-URI': TPPNokRedirectURIParamsSchema,
      'TPP-Explicit-Authorisation-Preferred': TPPExplicitAuthorisationPreferredParamsSchema,
      'TPP-Notification-URI': TPPNotificationURIParamsSchema,
      'TPP-Notification-Content-Preferred': TPPNotificationContentPreferredParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
    body: SigningBasketRequestBody,
  },
  responses: {
    201: CREATED_201SigningBasketResponse,
    400: BADREQUEST_400SBSResponse,
    401: UNAUTHORIZED_401SBSResponse,
    403: FORBIDDEN_403SBSResponse,
    404: NOTFOUND_404SBSResponse,
    405: METHODNOTALLOWED_405SBSResponse,
    406: NOTACCEPTABLE_406SBSResponse,
    408: REQUESTTIMEOUT_408SBSResponse,
    409: CONFLICT_409SBSResponse,
    415: UNSUPPORTEDMEDIATYPE_415SBSResponse,
    429: TOOMANYREQUESTS_429SBSResponse,
    500: INTERNALSERVERERROR_500SBSResponse,
    503: SERVICEUNAVAILABLE_503SBSResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1SigningBasketsBasketIdRoute = createRoute({
  method: 'get',
  path: '/v1/signing-baskets/{basketId}',
  tags: ['Signing Baskets Service (SBS)'],
  summary: 'Returns the content of an signing basket object',
  description: 'Returns the content of a signing basket object.',
  operationId: 'getSigningBasket',
  request: {
    params: z.object({ basketId: BasketIdPATHParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200GetSigningBasketResponse,
    400: BADREQUEST_400SBSResponse,
    401: UNAUTHORIZED_401SBSResponse,
    403: FORBIDDEN_403SBSResponse,
    404: NOTFOUND_404SBSResponse,
    405: METHODNOTALLOWED_405SBSResponse,
    406: NOTACCEPTABLE_406SBSResponse,
    408: REQUESTTIMEOUT_408SBSResponse,
    409: CONFLICT_409SBSResponse,
    415: UNSUPPORTEDMEDIATYPE_415SBSResponse,
    429: TOOMANYREQUESTS_429SBSResponse,
    500: INTERNALSERVERERROR_500SBSResponse,
    503: SERVICEUNAVAILABLE_503SBSResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const deleteV1SigningBasketsBasketIdRoute = createRoute({
  method: 'delete',
  path: '/v1/signing-baskets/{basketId}',
  tags: ['Signing Baskets Service (SBS)', 'Common Services'],
  summary: 'Delete the signing basket',
  description:
    'Delete the signing basket structure as long as no (partial) authorisation has yet been applied.\nThe undlerying transactions are not affected by this deletion.\n\nRemark: The signing basket as such is not deletable after a first (partial) authorisation has been applied.\nNevertheless, single transactions might be cancelled on an individual basis on the XS2A interface.\n',
  operationId: 'deleteSigningBasket',
  request: {
    params: z.object({ basketId: BasketIdPATHParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    204: NOCONTENT_204SigningBasketResponse,
    400: BADREQUEST_400SBSResponse,
    401: UNAUTHORIZED_401SBSResponse,
    403: FORBIDDEN_403SBSResponse,
    404: NOTFOUND_404SBSResponse,
    405: METHODNOTALLOWED_405SBSResponse,
    406: NOTACCEPTABLE_406SBSResponse,
    408: REQUESTTIMEOUT_408SBSResponse,
    409: CONFLICT_409SBSResponse,
    415: UNSUPPORTEDMEDIATYPE_415SBSResponse,
    429: TOOMANYREQUESTS_429SBSResponse,
    500: INTERNALSERVERERROR_500SBSResponse,
    503: SERVICEUNAVAILABLE_503SBSResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1SigningBasketsBasketIdAuthorisationsRoute = createRoute({
  method: 'get',
  path: '/v1/signing-baskets/{basketId}/authorisations',
  tags: ['Signing Baskets Service (SBS)', 'Common Services'],
  summary: 'Get signing basket authorisation sub-resources request',
  description:
    'Read a list of all authorisation subresources IDs which have been created.\n\nThis function returns an array of hyperlinks to all generated authorisation sub-resources.\n',
  operationId: 'getSigningBasketAuthorisation',
  request: {
    params: z.object({ basketId: BasketIdPATHParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200AuthorisationsResponse,
    400: BADREQUEST_400SBSResponse,
    401: UNAUTHORIZED_401SBSResponse,
    403: FORBIDDEN_403SBSResponse,
    404: NOTFOUND_404SBSResponse,
    405: METHODNOTALLOWED_405SBSResponse,
    406: NOTACCEPTABLE_406SBSResponse,
    408: REQUESTTIMEOUT_408SBSResponse,
    409: CONFLICT_409SBSResponse,
    415: UNSUPPORTEDMEDIATYPE_415SBSResponse,
    429: TOOMANYREQUESTS_429SBSResponse,
    500: INTERNALSERVERERROR_500SBSResponse,
    503: SERVICEUNAVAILABLE_503SBSResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const postV1SigningBasketsBasketIdAuthorisationsRoute = createRoute({
  method: 'post',
  path: '/v1/signing-baskets/{basketId}/authorisations',
  tags: ['Signing Baskets Service (SBS)', 'Common Services'],
  summary: 'Start the authorisation process for a signing basket',
  description:
    "Create an authorisation sub-resource and start the authorisation process of a signing basket.\nThe message might in addition transmit authentication and authorisation related data.\n\nThis method is iterated n times for a n times SCA authorisation in a\ncorporate context, each creating an own authorisation sub-endpoint for\nthe corresponding PSU authorising the signing-baskets.\n\nThe ASPSP might make the usage of this access method unnecessary in case\nof only one SCA process needed, since the related authorisation resource\nmight be automatically created by the ASPSP after the submission of the\npayment data with the first POST signing basket call.\n\nThe start authorisation process is a process which is needed for creating a new authorisation\nor cancellation sub-resource.\n\nThis applies in the following scenarios:\n\n  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding payment \n    initiation response that an explicit start of the authorisation process is needed by the TPP. \n    The 'startAuthorisation' hyperlink can transport more information about data which needs to be \n    uploaded by using the extended forms:\n    * 'startAuthorisationWithPsuIdentfication', \n    * 'startAuthorisationWithPsuAuthentication' \n    * 'startAuthorisationWithEncryptedPsuAuthentication'\n    * 'startAuthorisationWithAuthentciationMethodSelection'\n  * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.\n  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding \n    payment cancellation response that an explicit start of the authorisation process is needed by the TPP.\n    The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded\n    by using the extended forms as indicated above.\n  * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for\n    executing the cancellation.\n  * The signing basket needs to be authorised yet.\n",
  operationId: 'startSigningBasketAuthorisation',
  request: {
    params: z.object({ basketId: BasketIdPATHParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-ID': PSUIDParamsSchema,
      'PSU-ID-Type': PSUIDTypeParamsSchema,
      'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
      'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
      'TPP-Redirect-Preferred': TPPRedirectPreferredParamsSchema,
      'TPP-Redirect-URI': TPPRedirectURIParamsSchema,
      'TPP-Nok-Redirect-URI': TPPNokRedirectURIParamsSchema,
      'TPP-Notification-URI': TPPNotificationURIParamsSchema,
      'TPP-Notification-Content-Preferred': TPPNotificationContentPreferredParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z.any(),
            UpdatePsuAuthenticationSchema,
            SelectPsuAuthenticationMethodSchema,
            TransactionAuthorisationSchema,
          ]),
        },
      },
    },
  },
  responses: {
    201: CREATED_201StartScaProcessResponse,
    400: BADREQUEST_400SBSResponse,
    401: UNAUTHORIZED_401SBSResponse,
    403: FORBIDDEN_403SBSResponse,
    404: NOTFOUND_404SBSResponse,
    405: METHODNOTALLOWED_405SBSResponse,
    406: NOTACCEPTABLE_406SBSResponse,
    408: REQUESTTIMEOUT_408SBSResponse,
    409: CONFLICT_409SBSResponse,
    415: UNSUPPORTEDMEDIATYPE_415SBSResponse,
    429: TOOMANYREQUESTS_429SBSResponse,
    500: INTERNALSERVERERROR_500SBSResponse,
    503: SERVICEUNAVAILABLE_503SBSResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute = createRoute({
  method: 'get',
  path: '/v1/signing-baskets/{basketId}/authorisations/{authorisationId}',
  tags: ['Signing Baskets Service (SBS)', 'Common Services'],
  summary: 'Read the SCA status of the signing basket authorisation',
  description:
    "This method returns the SCA status of a signing basket's authorisation sub-resource.\n",
  operationId: 'getSigningBasketScaStatus',
  request: {
    params: z.object({
      basketId: BasketIdPATHParamsSchema,
      authorisationId: AuthorisationIdParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200ScaStatusResponse,
    400: BADREQUEST_400SBSResponse,
    401: UNAUTHORIZED_401SBSResponse,
    403: FORBIDDEN_403SBSResponse,
    404: NOTFOUND_404SBSResponse,
    405: METHODNOTALLOWED_405SBSResponse,
    406: NOTACCEPTABLE_406SBSResponse,
    408: REQUESTTIMEOUT_408SBSResponse,
    409: CONFLICT_409SBSResponse,
    415: UNSUPPORTEDMEDIATYPE_415SBSResponse,
    429: TOOMANYREQUESTS_429SBSResponse,
    500: INTERNALSERVERERROR_500SBSResponse,
    503: SERVICEUNAVAILABLE_503SBSResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const putV1SigningBasketsBasketIdAuthorisationsAuthorisationIdRoute = createRoute({
  method: 'put',
  path: '/v1/signing-baskets/{basketId}/authorisations/{authorisationId}',
  tags: ['Signing Baskets Service (SBS)', 'Common Services'],
  summary: 'Update PSU data for signing basket',
  description:
    'This method update PSU data on the signing basket resource if needed. \nIt may authorise a igning basket within the embedded SCA approach where needed.\n\nIndependently from the SCA Approach it supports e.g. the selection of \nthe authentication method and a non-SCA PSU authentication.\n\nThere are several possible update PSU data requests in the context of a consent request if needed, \nwhich depends on the SCA approach:\n\n* Redirect SCA Approach:\n  A specific Update PSU data request is applicable for \n    * the selection of authentication methods, before choosing the actual SCA approach.\n* Decoupled SCA Approach:\n  A specific Update PSU data request is only applicable for\n  * adding the PSU Identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or\n  * the selection of authentication methods.\n* Embedded SCA Approach: \n  The update PSU data request might be used \n  * to add credentials as a first factor authentication data of the PSU and\n  * to select the authentication method and\n  * transaction authorisation.\n\nThe SCA approach might depend on the chosen SCA method. \nFor that reason, the following possible update PSU data request can apply to all SCA approaches:\n\n* Select an SCA method in case of several SCA methods are available for the customer.\n\nThere are the following request types on this access path:\n  * Update PSU identification\n  * Update PSU authentication\n  * Select PSU autorization Method \n    WARNING: This method needs a reduced header, \n    therefore many optional elements are not present. \n    Maybe in a later version the access path will change.\n  * Transaction Authorisation\n    WARNING: This method needs a reduced header, \n    therefore many optional elements are not present. \n    Maybe in a later version the access path will change.\n',
  operationId: 'updateSigningBasketPsuData',
  request: {
    params: z.object({
      basketId: BasketIdPATHParamsSchema,
      authorisationId: AuthorisationIdParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-ID': PSUIDParamsSchema,
      'PSU-ID-Type': PSUIDTypeParamsSchema,
      'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
      'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z.any(),
            UpdatePsuAuthenticationSchema,
            SelectPsuAuthenticationMethodSchema,
            TransactionAuthorisationSchema,
            AuthorisationConfirmationSchema,
          ]),
          examples: {
            'Authorisation confirmation (Redirect Approach)':
              AuthorisationConfirmationExampleRedirectExample,
            'Select PSU authentication method (Embedded Approach)':
              SelectPsuAuthenticationMethodExampleEmbeddedExample,
            'Transaction authorisation (Embedded Approach)':
              TransactionAuthorisationExampleEmbeddedExample,
            'Update PSU authentication (Embedded Approach)':
              UpdatePsuAuthenticationExampleEmbeddedExample,
            'Update PSU identification (Embedded Approach)': { value: {} },
          },
        },
      },
    },
  },
  responses: {
    200: OK_200UpdatePsuDataResponse,
    400: BADREQUEST_400SBSResponse,
    401: UNAUTHORIZED_401SBSResponse,
    403: FORBIDDEN_403SBSResponse,
    404: NOTFOUND_404SBSResponse,
    405: METHODNOTALLOWED_405SBSResponse,
    406: NOTACCEPTABLE_406SBSResponse,
    408: REQUESTTIMEOUT_408SBSResponse,
    409: CONFLICT_409SBSResponse,
    415: UNSUPPORTEDMEDIATYPE_415SBSResponse,
    429: TOOMANYREQUESTS_429SBSResponse,
    500: INTERNALSERVERERROR_500SBSResponse,
    503: SERVICEUNAVAILABLE_503SBSResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1SigningBasketsBasketIdStatusRoute = createRoute({
  method: 'get',
  path: '/v1/signing-baskets/{basketId}/status',
  tags: ['Signing Baskets Service (SBS)', 'Common Services'],
  summary: 'Read the status of the signing basket',
  description: 'Returns the status of a signing basket object.\n',
  operationId: 'getSigningBasketStatus',
  request: {
    params: z.object({ basketId: BasketIdPATHParamsSchema }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-ID': PSUIDParamsSchema,
      'PSU-ID-Type': PSUIDTypeParamsSchema,
      'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
      'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200SigningBasketStatusResponse,
    400: BADREQUEST_400SBSResponse,
    401: UNAUTHORIZED_401SBSResponse,
    403: FORBIDDEN_403SBSResponse,
    404: NOTFOUND_404SBSResponse,
    405: METHODNOTALLOWED_405SBSResponse,
    406: NOTACCEPTABLE_406SBSResponse,
    408: REQUESTTIMEOUT_408SBSResponse,
    409: CONFLICT_409SBSResponse,
    415: UNSUPPORTEDMEDIATYPE_415SBSResponse,
    429: TOOMANYREQUESTS_429SBSResponse,
    500: INTERNALSERVERERROR_500SBSResponse,
    503: SERVICEUNAVAILABLE_503SBSResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const postV1PaymentServicePaymentProductRoute = createRoute({
  method: 'post',
  path: '/v1/{payment-service}/{payment-product}',
  tags: ['Payment Initiation Service (PIS)'],
  summary: 'Payment initiation request',
  description:
    "This method is used to initiate a payment at the ASPSP.\n\n## Variants of payment initiation requests\n\nThis method to initiate a payment initiation at the ASPSP can be sent with either a JSON body or an pain.001 body depending on the payment product in the path.\n\nThere are the following **payment products**:\n\n  - Payment products with payment information in *JSON* format:\n    - ***domestic-swiss-credit-transfers-isr***\n    - ***domestic-swiss-credit-transfers***\n    - ***domestic-swiss-credit-transfers-qr***\n    - ***domestic-swiss-foreign-credit-transfers***\n    - ***swiss-sepa-credit-transfers***\n    - ***swiss-cross-border-credit-transfers***\n  - Payment products with payment information in *SIX pain.001* XML format:\n    - ***pain.001-sepa-credit-transfers***\n    - ***pain.001-cross-border-credit-transfers***\n    - ***pain.001-swiss-six-credit-transfers***\n\nFurthermore the request body depends on the **payment-service**:\n  * ***payments***: A single payment initiation request.\n  * ***bulk-payments***: A collection of several payment initiation requests.\n  \n    In case of a *pain.001* message there are more than one payments contained in the *pain.001 message.\n\n    In case of a *JSON* there are several JSON payment blocks contained in a joining list.\n  * ***periodic-payments***:\n    Create a standing order initiation resource for recurrent i.e. periodic payments addressable under {paymentId}\n     with all data relevant for the corresponding payment product and the execution of the standing order contained in a JSON body.\n\nThis is the first step in the API to initiate the related recurring/periodic payment.\n\n## Single and mulitilevel SCA Processes\n\nThe payment initiation requests are independent from the need of one or multilevel \nSCA processing, i.e. independent from the number of authorisations needed for the execution of payments. \n\nBut the response messages are specific to either one SCA processing or multilevel SCA processing. \n\nFor payment initiation with multilevel SCA, this specification requires an explicit start of the authorisation, \ni.e. links directly associated with SCA processing like 'scaRedirect' or 'scaOAuth' cannot be contained in the \nresponse message of a Payment Initation Request for a payment, where multiple authorisations are needed. \nAlso if any data is needed for the next action, like selecting an SCA method is not supported in the response, \nsince all starts of the multiple authorisations are fully equal. \nIn these cases, first an authorisation sub-resource has to be generated following the 'startAuthorisation' link.\n",
  operationId: 'initiatePayment',
  request: {
    params: z.object({
      'payment-service': PaymentServiceParamsSchema,
      'payment-product': PaymentProductParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-ID': PSUIDParamsSchema,
      'PSU-ID-Type': PSUIDTypeParamsSchema,
      'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
      'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
      'Consent-ID': ConsentIdHEADEROptionalParamsSchema,
      'PSU-IP-Address': PSUIPAddressMandatoryParamsSchema,
      'TPP-Redirect-Preferred': TPPRedirectPreferredParamsSchema,
      'TPP-Redirect-URI': TPPRedirectURIParamsSchema,
      'TPP-Nok-Redirect-URI': TPPNokRedirectURIParamsSchema,
      'TPP-Explicit-Authorisation-Preferred': TPPExplicitAuthorisationPreferredParamsSchema,
      'TPP-Rejection-NoFunds-Preferred': TPPRejectionNoFundsPreferredParamsSchema,
      'TPP-Brand-Logging-Information': TPPBrandLoggingInformationParamsSchema,
      'TPP-Notification-URI': TPPNotificationURIParamsSchema,
      'TPP-Notification-Content-Preferred': TPPNotificationContentPreferredParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
    body: PaymentInitiationRequestBody,
  },
  responses: {
    201: CREATED_201PaymentInitiationResponse,
    400: BADREQUEST_400PISResponse,
    401: UNAUTHORIZED_401PISResponse,
    403: FORBIDDEN_403PISResponse,
    404: NOTFOUND_404PISResponse,
    405: METHODNOTALLOWED_405PISResponse,
    406: NOTACCEPTABLE_406PISResponse,
    408: REQUESTTIMEOUT_408PISResponse,
    409: CONFLICT_409PISResponse,
    415: UNSUPPORTEDMEDIATYPE_415PISResponse,
    429: TOOMANYREQUESTS_429PISResponse,
    500: INTERNALSERVERERROR_500PISResponse,
    503: SERVICEUNAVAILABLE_503PISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1PaymentServicePaymentProductPaymentIdRoute = createRoute({
  method: 'get',
  path: '/v1/{payment-service}/{payment-product}/{paymentId}',
  tags: ['Payment Initiation Service (PIS)'],
  summary: 'Get payment information',
  description: 'Returns the content of a payment object',
  operationId: 'getPaymentInformation',
  request: {
    params: z.object({
      'payment-service': PaymentServiceParamsSchema,
      'payment-product': PaymentProductParamsSchema,
      paymentId: PaymentIdParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200PaymentInitiationInformationResponse,
    400: BADREQUEST_400PISResponse,
    401: UNAUTHORIZED_401PISResponse,
    403: FORBIDDEN_403PISResponse,
    404: NOTFOUND_404PISResponse,
    405: METHODNOTALLOWED_405PISResponse,
    406: NOTACCEPTABLE_406PISResponse,
    408: REQUESTTIMEOUT_408PISResponse,
    409: CONFLICT_409PISResponse,
    415: UNSUPPORTEDMEDIATYPE_415PISResponse,
    429: TOOMANYREQUESTS_429PISResponse,
    500: INTERNALSERVERERROR_500PISResponse,
    503: SERVICEUNAVAILABLE_503PISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const deleteV1PaymentServicePaymentProductPaymentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/{payment-service}/{payment-product}/{paymentId}',
  tags: ['Payment Initiation Service (PIS)'],
  summary: 'Payment cancellation request',
  description:
    "This method initiates the cancellation of a payment. \nDepending on the payment-service, the payment-product and the ASPSP's implementation, \nthis TPP call might be sufficient to cancel a payment. \nIf an authorisation of the payment cancellation is mandated by the ASPSP, \na corresponding hyperlink will be contained in the response message.\n\nCancels the addressed payment with resource identification paymentId if applicable to the payment-service, payment-product and received in product related timelines (e.g. before end of business day for scheduled payments of the last business day before the scheduled execution day). \n\nThe response to this DELETE command will tell the TPP whether the\n  * access method was rejected,\n  * access method was successful, or\n  * access method is generally applicable, but further authorisation processes are needed.\n",
  operationId: 'cancelPayment',
  request: {
    params: z.object({
      'payment-service': PaymentServiceParamsSchema,
      'payment-product': PaymentProductParamsSchema,
      paymentId: PaymentIdParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'TPP-Redirect-Preferred': TPPRedirectPreferredParamsSchema,
      'TPP-Nok-Redirect-URI': TPPNokRedirectURIParamsSchema,
      'TPP-Redirect-URI': TPPRedirectURIParamsSchema,
      'TPP-Explicit-Authorisation-Preferred': TPPExplicitAuthorisationPreferredParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    202: RECEIVED_202PaymentInitiationCancelResponse,
    204: NOCONTENT_204PaymentInitiationCancelResponse,
    400: BADREQUEST_400PISResponse,
    401: UNAUTHORIZED_401PISResponse,
    403: FORBIDDEN_403PISResponse,
    404: NOTFOUND_404PISResponse,
    405: METHODNOTALLOWED_405PISCANCResponse,
    406: NOTACCEPTABLE_406PISResponse,
    408: REQUESTTIMEOUT_408PISResponse,
    409: CONFLICT_409PISResponse,
    415: UNSUPPORTEDMEDIATYPE_415PISResponse,
    429: TOOMANYREQUESTS_429PISResponse,
    500: INTERNALSERVERERROR_500PISResponse,
    503: SERVICEUNAVAILABLE_503PISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute = createRoute({
  method: 'get',
  path: '/v1/{payment-service}/{payment-product}/{paymentId}/authorisations',
  tags: ['Payment Initiation Service (PIS)', 'Common Services'],
  summary: 'Get payment initiation authorisation sub-resources request',
  description:
    'Read a list of all authorisation subresources IDs which have been created.\n\nThis function returns an array of hyperlinks to all generated authorisation sub-resources.\n',
  operationId: 'getPaymentInitiationAuthorisation',
  request: {
    params: z.object({
      'payment-service': PaymentServiceParamsSchema,
      'payment-product': PaymentProductParamsSchema,
      paymentId: PaymentIdParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200AuthorisationsResponse,
    400: BADREQUEST_400PISResponse,
    401: UNAUTHORIZED_401PISResponse,
    403: FORBIDDEN_403PISResponse,
    404: NOTFOUND_404PISResponse,
    405: METHODNOTALLOWED_405PISResponse,
    406: NOTACCEPTABLE_406PISResponse,
    408: REQUESTTIMEOUT_408PISResponse,
    409: CONFLICT_409PISResponse,
    415: UNSUPPORTEDMEDIATYPE_415PISResponse,
    429: TOOMANYREQUESTS_429PISResponse,
    500: INTERNALSERVERERROR_500PISResponse,
    503: SERVICEUNAVAILABLE_503PISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const postV1PaymentServicePaymentProductPaymentIdAuthorisationsRoute = createRoute({
  method: 'post',
  path: '/v1/{payment-service}/{payment-product}/{paymentId}/authorisations',
  tags: ['Payment Initiation Service (PIS)', 'Common Services'],
  summary: 'Start the authorisation process for a payment initiation',
  description:
    "Create an authorisation sub-resource and start the authorisation process.\nThe message might in addition transmit authentication and authorisation related data.\n\nThis method is iterated n times for a n times SCA authorisation in a\ncorporate context, each creating an own authorisation sub-endpoint for\nthe corresponding PSU authorising the transaction.\n\nThe ASPSP might make the usage of this access method unnecessary in case\nof only one SCA process needed, since the related authorisation resource\nmight be automatically created by the ASPSP after the submission of the\npayment data with the first POST payments/{payment-product} call.\n\nThe start authorisation process is a process which is needed for creating a new authorisation\nor cancellation sub-resource.\n\nThis applies in the following scenarios:\n\n  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding Payment \n    initiation response that an explicit start of the authorisation process is needed by the TPP. \n    The 'startAuthorisation' hyperlink can transport more information about data which needs to be \n    uploaded by using the extended forms:\n    * 'startAuthorisationWithPsuIdentfication'\n    * 'startAuthorisationWithPsuAuthentication'\n    * 'startAuthorisationWithEncryptedPsuAuthentication'\n    * 'startAuthorisationWithAuthentciationMethodSelection'\n  * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.\n  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding \n    Payment cancellation response that an explicit start of the authorisation process is needed by the TPP. \n    The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded \n    by using the extended forms as indicated above.\n  * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for\n    executing the cancellation.\n  * The signing basket needs to be authorised yet.\n",
  operationId: 'startPaymentAuthorisation',
  request: {
    params: z.object({
      'payment-service': PaymentServiceParamsSchema,
      'payment-product': PaymentProductParamsSchema,
      paymentId: PaymentIdParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      'PSU-ID': PSUIDParamsSchema,
      'PSU-ID-Type': PSUIDTypeParamsSchema,
      'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
      'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
      'TPP-Redirect-Preferred': TPPRedirectPreferredParamsSchema,
      'TPP-Redirect-URI': TPPRedirectURIParamsSchema,
      'TPP-Nok-Redirect-URI': TPPNokRedirectURIParamsSchema,
      'TPP-Notification-URI': TPPNotificationURIParamsSchema,
      'TPP-Notification-Content-Preferred': TPPNotificationContentPreferredParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z.xor([
            z.any(),
            UpdatePsuAuthenticationSchema,
            SelectPsuAuthenticationMethodSchema,
            TransactionAuthorisationSchema,
          ]),
        },
      },
    },
  },
  responses: {
    201: CREATED_201StartScaProcessResponse,
    400: BADREQUEST_400PISResponse,
    401: UNAUTHORIZED_401PISResponse,
    403: FORBIDDEN_403PISResponse,
    404: NOTFOUND_404PISResponse,
    405: METHODNOTALLOWED_405PISResponse,
    406: NOTACCEPTABLE_406PISResponse,
    408: REQUESTTIMEOUT_408PISResponse,
    409: CONFLICT_409PISResponse,
    415: UNSUPPORTEDMEDIATYPE_415PISResponse,
    429: TOOMANYREQUESTS_429PISResponse,
    500: INTERNALSERVERERROR_500PISResponse,
    503: SERVICEUNAVAILABLE_503PISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

export const getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute =
  createRoute({
    method: 'get',
    path: '/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}',
    tags: ['Payment Initiation Service (PIS)', 'Common Services'],
    summary: 'Read the SCA status of the payment authorisation',
    description:
      "This method returns the SCA status of a payment initiation's authorisation sub-resource.\n",
    operationId: 'getPaymentInitiationScaStatus',
    request: {
      params: z.object({
        'payment-service': PaymentServiceParamsSchema,
        'payment-product': PaymentProductParamsSchema,
        paymentId: PaymentIdParamsSchema,
        authorisationId: AuthorisationIdParamsSchema,
      }),
      headers: z.object({
        'X-Request-ID': XRequestIDParamsSchema,
        Digest: DigestParamsSchema,
        Signature: SignatureParamsSchema,
        'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
        'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
        'PSU-IP-Port': PSUIPPortParamsSchema,
        'PSU-Accept': PSUAcceptParamsSchema,
        'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
        'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
        'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
        'PSU-User-Agent': PSUUserAgentParamsSchema,
        'PSU-Http-Method': PSUHttpMethodParamsSchema,
        'PSU-Device-ID': PSUDeviceIDParamsSchema,
        'PSU-Geo-Location': PSUGeoLocationParamsSchema,
      }),
    },
    responses: {
      200: OK_200ScaStatusResponse,
      400: BADREQUEST_400PISResponse,
      401: UNAUTHORIZED_401PISResponse,
      403: FORBIDDEN_403PISResponse,
      404: NOTFOUND_404PISResponse,
      405: METHODNOTALLOWED_405PISResponse,
      406: NOTACCEPTABLE_406PISResponse,
      408: REQUESTTIMEOUT_408PISResponse,
      409: CONFLICT_409PISResponse,
      415: UNSUPPORTEDMEDIATYPE_415PISResponse,
      429: TOOMANYREQUESTS_429PISResponse,
      500: INTERNALSERVERERROR_500PISResponse,
      503: SERVICEUNAVAILABLE_503PISResponse,
    },
    security: [{}, { BearerAuthOAuth: [] }],
  })

export const putV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdRoute =
  createRoute({
    method: 'put',
    path: '/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}',
    tags: ['Payment Initiation Service (PIS)', 'Common Services'],
    summary: 'Update PSU data for payment initiation',
    description:
      'This methods updates PSU data on the authorisation resource if needed.\nIt may authorise a payment within the Embedded SCA Approach where needed.\n\nIndependently from the SCA Approach it supports e.g. the selection of\nthe authentication method and a non-SCA PSU authentication.\n\nThere are several possible update PSU data requests in the context of payment initiation services needed, \nwhich depends on the SCA approach:\n\n* Redirect SCA Approach:\n  A specific update PSU data request is applicable for \n    * the selection of authentication methods, before choosing the actual SCA approach.\n* Decoupled SCA Approach:\n  A specific update PSU data request is only applicable for\n  * adding the PSU identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or\n  * the selection of authentication methods.\n* Embedded SCA Approach: \n  The Update PSU Data request might be used \n  * to add credentials as a first factor authentication data of the PSU and\n  * to select the authentication method and\n  * transaction authorisation.\n\nThe SCA Approach might depend on the chosen SCA method. \nFor that reason, the following possible Update PSU data request can apply to all SCA approaches:\n\n* Select an SCA method in case of several SCA methods are available for the customer.\n\nThere are the following request types on this access path:\n  * Update PSU identification\n  * Update PSU authentication\n  * Select PSU autorization method \n    WARNING: This method needs a reduced header, \n    therefore many optional elements are not present. \n    Maybe in a later version the access path will change.\n  * Transaction authorisation\n    WARNING: This method needs a reduced header, \n    therefore many optional elements are not present. \n    Maybe in a later version the access path will change.\n',
    operationId: 'updatePaymentPsuData',
    request: {
      params: z.object({
        'payment-service': PaymentServiceParamsSchema,
        'payment-product': PaymentProductParamsSchema,
        paymentId: PaymentIdParamsSchema,
        authorisationId: AuthorisationIdParamsSchema,
      }),
      headers: z.object({
        'X-Request-ID': XRequestIDParamsSchema,
        Digest: DigestParamsSchema,
        Signature: SignatureParamsSchema,
        'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
        'PSU-ID': PSUIDParamsSchema,
        'PSU-ID-Type': PSUIDTypeParamsSchema,
        'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
        'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
        'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
        'PSU-IP-Port': PSUIPPortParamsSchema,
        'PSU-Accept': PSUAcceptParamsSchema,
        'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
        'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
        'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
        'PSU-User-Agent': PSUUserAgentParamsSchema,
        'PSU-Http-Method': PSUHttpMethodParamsSchema,
        'PSU-Device-ID': PSUDeviceIDParamsSchema,
        'PSU-Geo-Location': PSUGeoLocationParamsSchema,
      }),
      body: {
        content: {
          'application/json': {
            schema: z.xor([
              z.any(),
              UpdatePsuAuthenticationSchema,
              SelectPsuAuthenticationMethodSchema,
              TransactionAuthorisationSchema,
              AuthorisationConfirmationSchema,
            ]),
            examples: {
              'Authorisation confirmation (Redirect Approach)':
                AuthorisationConfirmationExampleRedirectExample,
              'Select PSU authentication method (Embedded Approach)':
                SelectPsuAuthenticationMethodExampleEmbeddedExample,
              'Transaction authorisation (Embedded Approach)':
                TransactionAuthorisationExampleEmbeddedExample,
              'Update PSU authentication (Embedded Approach)':
                UpdatePsuAuthenticationExampleEmbeddedExample,
              'Update PSU identification (Decoupled Approach)': { value: {} },
            },
          },
        },
      },
    },
    responses: {
      200: OK_200UpdatePsuDataResponse,
      400: BADREQUEST_400PISResponse,
      401: UNAUTHORIZED_401PISResponse,
      403: FORBIDDEN_403PISResponse,
      404: NOTFOUND_404PISResponse,
      405: METHODNOTALLOWED_405PISResponse,
      406: NOTACCEPTABLE_406PISResponse,
      408: REQUESTTIMEOUT_408PISResponse,
      409: CONFLICT_409PISResponse,
      415: UNSUPPORTEDMEDIATYPE_415PISResponse,
      429: TOOMANYREQUESTS_429PISResponse,
      500: INTERNALSERVERERROR_500PISResponse,
      503: SERVICEUNAVAILABLE_503PISResponse,
    },
    security: [{}, { BearerAuthOAuth: [] }],
  })

export const getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute =
  createRoute({
    method: 'get',
    path: '/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations',
    tags: ['Payment Initiation Service (PIS)'],
    summary:
      'Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources',
    description: 'Retrieve a list of all created cancellation authorisation sub-resources.\n',
    operationId: 'getPaymentInitiationCancellationAuthorisationInformation',
    request: {
      params: z.object({
        'payment-service': PaymentServiceParamsSchema,
        'payment-product': PaymentProductParamsSchema,
        paymentId: PaymentIdParamsSchema,
      }),
      headers: z.object({
        'X-Request-ID': XRequestIDParamsSchema,
        Digest: DigestParamsSchema,
        Signature: SignatureParamsSchema,
        'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
        'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
        'PSU-IP-Port': PSUIPPortParamsSchema,
        'PSU-Accept': PSUAcceptParamsSchema,
        'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
        'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
        'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
        'PSU-User-Agent': PSUUserAgentParamsSchema,
        'PSU-Http-Method': PSUHttpMethodParamsSchema,
        'PSU-Device-ID': PSUDeviceIDParamsSchema,
        'PSU-Geo-Location': PSUGeoLocationParamsSchema,
      }),
    },
    responses: {
      200: OK_200AuthorisationsResponse,
      400: BADREQUEST_400PISResponse,
      401: UNAUTHORIZED_401PISResponse,
      403: FORBIDDEN_403PISResponse,
      404: NOTFOUND_404PISResponse,
      405: METHODNOTALLOWED_405PISResponse,
      406: NOTACCEPTABLE_406PISResponse,
      408: REQUESTTIMEOUT_408PISResponse,
      409: CONFLICT_409PISResponse,
      415: UNSUPPORTEDMEDIATYPE_415PISResponse,
      429: TOOMANYREQUESTS_429PISResponse,
      500: INTERNALSERVERERROR_500PISResponse,
      503: SERVICEUNAVAILABLE_503PISResponse,
    },
    security: [{}, { BearerAuthOAuth: [] }],
  })

export const postV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsRoute =
  createRoute({
    method: 'post',
    path: '/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations',
    tags: ['Payment Initiation Service (PIS)', 'Common Services'],
    summary: 'Start the authorisation process for the cancellation of the addressed payment',
    description:
      "Creates an authorisation sub-resource and start the authorisation process of the cancellation of the addressed payment.\nThe message might in addition transmit authentication and authorisation related data.\n\nThis method is iterated n times for a n times SCA authorisation in a\ncorporate context, each creating an own authorisation sub-endpoint for\nthe corresponding PSU authorising the cancellation-authorisation.\n\nThe ASPSP might make the usage of this access method unnecessary in case\nof only one SCA process needed, since the related authorisation resource\nmight be automatically created by the ASPSP after the submission of the\npayment data with the first POST payments/{payment-product} call.\n\nThe start authorisation process is a process which is needed for creating a new authorisation\nor cancellation sub-resource.\n\nThis applies in the following scenarios:\n\n  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding payment \n    initiation response that an explicit start of the authorisation process is needed by the TPP. \n    The 'startAuthorisation' hyperlink can transport more information about data which needs to be \n    uploaded by using the extended forms:\n    * 'startAuthorisationWithPsuIdentfication'\n    * 'startAuthorisationWithPsuAuthentication'\n    * 'startAuthorisationWithAuthentciationMethodSelection' \n  * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.\n  * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding \n    payment cancellation response that an explicit start of the authorisation process is needed by the TPP. \n    The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded \n    by using the extended forms as indicated above.\n  * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for\n    executing the cancellation.\n  * The signing basket needs to be authorised yet.\n",
    operationId: 'startPaymentInitiationCancellationAuthorisation',
    request: {
      params: z.object({
        'payment-service': PaymentServiceParamsSchema,
        'payment-product': PaymentProductParamsSchema,
        paymentId: PaymentIdParamsSchema,
      }),
      headers: z.object({
        'X-Request-ID': XRequestIDParamsSchema,
        Digest: DigestParamsSchema,
        Signature: SignatureParamsSchema,
        'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
        'PSU-ID': PSUIDParamsSchema,
        'PSU-ID-Type': PSUIDTypeParamsSchema,
        'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
        'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
        'TPP-Redirect-Preferred': TPPRedirectPreferredParamsSchema,
        'TPP-Redirect-URI': TPPRedirectURIParamsSchema,
        'TPP-Nok-Redirect-URI': TPPNokRedirectURIParamsSchema,
        'TPP-Notification-URI': TPPNotificationURIParamsSchema,
        'TPP-Notification-Content-Preferred': TPPNotificationContentPreferredParamsSchema,
        'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
        'PSU-IP-Port': PSUIPPortParamsSchema,
        'PSU-Accept': PSUAcceptParamsSchema,
        'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
        'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
        'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
        'PSU-User-Agent': PSUUserAgentParamsSchema,
        'PSU-Http-Method': PSUHttpMethodParamsSchema,
        'PSU-Device-ID': PSUDeviceIDParamsSchema,
        'PSU-Geo-Location': PSUGeoLocationParamsSchema,
      }),
      body: {
        content: {
          'application/json': {
            schema: z.xor([
              z.any(),
              UpdatePsuAuthenticationSchema,
              SelectPsuAuthenticationMethodSchema,
              TransactionAuthorisationSchema,
            ]),
          },
        },
      },
    },
    responses: {
      201: CREATED_201StartScaProcessResponse,
      400: BADREQUEST_400PISResponse,
      401: UNAUTHORIZED_401PISResponse,
      403: FORBIDDEN_403PISResponse,
      404: NOTFOUND_404PISResponse,
      405: METHODNOTALLOWED_405PISResponse,
      406: NOTACCEPTABLE_406PISResponse,
      408: REQUESTTIMEOUT_408PISResponse,
      409: CONFLICT_409PISResponse,
      415: UNSUPPORTEDMEDIATYPE_415PISResponse,
      429: TOOMANYREQUESTS_429PISResponse,
      500: INTERNALSERVERERROR_500PISResponse,
      503: SERVICEUNAVAILABLE_503PISResponse,
    },
    security: [{}, { BearerAuthOAuth: [] }],
  })

export const getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute =
  createRoute({
    method: 'get',
    path: '/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}',
    tags: ['Payment Initiation Service (PIS)', 'Common Services'],
    summary: "Read the SCA status of the payment cancellation's authorisation",
    description:
      "This method returns the SCA status of a payment initiation's authorisation sub-resource.\n",
    operationId: 'getPaymentCancellationScaStatus',
    request: {
      params: z.object({
        'payment-service': PaymentServiceParamsSchema,
        'payment-product': PaymentProductParamsSchema,
        paymentId: PaymentIdParamsSchema,
        authorisationId: AuthorisationIdParamsSchema,
      }),
      headers: z.object({
        'X-Request-ID': XRequestIDParamsSchema,
        Digest: DigestParamsSchema,
        Signature: SignatureParamsSchema,
        'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
        'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
        'PSU-IP-Port': PSUIPPortParamsSchema,
        'PSU-Accept': PSUAcceptParamsSchema,
        'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
        'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
        'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
        'PSU-User-Agent': PSUUserAgentParamsSchema,
        'PSU-Http-Method': PSUHttpMethodParamsSchema,
        'PSU-Device-ID': PSUDeviceIDParamsSchema,
        'PSU-Geo-Location': PSUGeoLocationParamsSchema,
      }),
    },
    responses: {
      200: OK_200ScaStatusResponse,
      400: BADREQUEST_400PISResponse,
      401: UNAUTHORIZED_401PISResponse,
      403: FORBIDDEN_403PISResponse,
      404: NOTFOUND_404PISResponse,
      405: METHODNOTALLOWED_405PISResponse,
      406: NOTACCEPTABLE_406PISResponse,
      408: REQUESTTIMEOUT_408PISResponse,
      409: CONFLICT_409PISResponse,
      415: UNSUPPORTEDMEDIATYPE_415PISResponse,
      429: TOOMANYREQUESTS_429PISResponse,
      500: INTERNALSERVERERROR_500PISResponse,
      503: SERVICEUNAVAILABLE_503PISResponse,
    },
    security: [{}, { BearerAuthOAuth: [] }],
  })

export const putV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdRoute =
  createRoute({
    method: 'put',
    path: '/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}',
    tags: ['Payment Initiation Service (PIS)', 'Common Services'],
    summary: 'Update PSU data for payment initiation cancellation',
    description:
      'This method updates PSU data on the cancellation authorisation resource if needed. \nIt may authorise a cancellation of the payment within the Embedded SCA Approach where needed.\n\nIndependently from the SCA Approach it supports e.g. the selection of\nthe authentication method and a non-SCA PSU authentication.\n\nThere are several possible update PSU data requests in the context of a cancellation authorisation within the payment initiation services needed, \nwhich depends on the SCA approach:\n\n* Redirect SCA Approach:\n  A specific Update PSU data request is applicable for \n    * the selection of authentication methods, before choosing the actual SCA approach.\n* Decoupled SCA Approach:\n  A specific Update PSU data request is only applicable for\n  * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or\n  * the selection of authentication methods.\n* Embedded SCA Approach: \n  The Update PSU data request might be used \n  * to add credentials as a first factor authentication data of the PSU and\n  * to select the authentication method and\n  * transaction authorisation.\n\nThe SCA approach might depend on the chosen SCA method. \nFor that reason, the following possible update PSU data request can apply to all SCA approaches:\n\n* Select an SCA method in case of several SCA methods are available for the customer.\n\nThere are the following request types on this access path:\n  * Update PSU identification\n  * Update PSU authentication\n  * Select PSU autorization method \n    WARNING: This method needs a reduced header, \n    therefore many optional elements are not present. \n    Maybe in a later version the access path will change.\n  * Transaction Authorisation\n    WARNING: This method needs a reduced header, \n    therefore many optional elements are not present. \n    Maybe in a later version the access path will change.\n',
    operationId: 'updatePaymentCancellationPsuData',
    request: {
      params: z.object({
        'payment-service': PaymentServiceParamsSchema,
        'payment-product': PaymentProductParamsSchema,
        paymentId: PaymentIdParamsSchema,
        authorisationId: AuthorisationIdParamsSchema,
      }),
      headers: z.object({
        'X-Request-ID': XRequestIDParamsSchema,
        Digest: DigestParamsSchema,
        Signature: SignatureParamsSchema,
        'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
        'PSU-ID': PSUIDParamsSchema,
        'PSU-ID-Type': PSUIDTypeParamsSchema,
        'PSU-Corporate-ID': PSUCorporateIDParamsSchema,
        'PSU-Corporate-ID-Type': PSUCorporateIDTypeParamsSchema,
        'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
        'PSU-IP-Port': PSUIPPortParamsSchema,
        'PSU-Accept': PSUAcceptParamsSchema,
        'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
        'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
        'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
        'PSU-User-Agent': PSUUserAgentParamsSchema,
        'PSU-Http-Method': PSUHttpMethodParamsSchema,
        'PSU-Device-ID': PSUDeviceIDParamsSchema,
        'PSU-Geo-Location': PSUGeoLocationParamsSchema,
      }),
      body: {
        content: {
          'application/json': {
            schema: z.xor([
              z.any(),
              UpdatePsuAuthenticationSchema,
              SelectPsuAuthenticationMethodSchema,
              TransactionAuthorisationSchema,
              AuthorisationConfirmationSchema,
            ]),
            examples: {
              'Authorisation confirmation (Redirect Approach)':
                AuthorisationConfirmationExampleRedirectExample,
              'Select PSU Authentication Method (Embedded Approach)':
                SelectPsuAuthenticationMethodExampleEmbeddedExample,
              'Transaction Authorisation (Embedded Approach)':
                TransactionAuthorisationExampleEmbeddedExample,
              'Update PSU Identification (Embedded Approach)': { value: {} },
              'Update PSU authentication (Embedded Approach)':
                UpdatePsuAuthenticationExampleEmbeddedExample,
            },
          },
        },
      },
    },
    responses: {
      200: OK_200UpdatePsuDataResponse,
      400: BADREQUEST_400PISResponse,
      401: UNAUTHORIZED_401PISResponse,
      403: FORBIDDEN_403PISResponse,
      404: NOTFOUND_404PISResponse,
      405: METHODNOTALLOWED_405PISResponse,
      406: NOTACCEPTABLE_406PISResponse,
      408: REQUESTTIMEOUT_408PISResponse,
      409: CONFLICT_409PISResponse,
      415: UNSUPPORTEDMEDIATYPE_415PISResponse,
      429: TOOMANYREQUESTS_429PISResponse,
      500: INTERNALSERVERERROR_500PISResponse,
      503: SERVICEUNAVAILABLE_503PISResponse,
    },
    security: [{}, { BearerAuthOAuth: [] }],
  })

export const getV1PaymentServicePaymentProductPaymentIdStatusRoute = createRoute({
  method: 'get',
  path: '/v1/{payment-service}/{payment-product}/{paymentId}/status',
  tags: ['Payment Initiation Service (PIS)'],
  summary: 'Payment initiation status request',
  description: 'Check the transaction status of a payment initiation.',
  operationId: 'getPaymentInitiationStatus',
  request: {
    params: z.object({
      'payment-service': PaymentServiceParamsSchema,
      'payment-product': PaymentProductParamsSchema,
      paymentId: PaymentIdParamsSchema,
    }),
    headers: z.object({
      'X-Request-ID': XRequestIDParamsSchema,
      Digest: DigestParamsSchema,
      Signature: SignatureParamsSchema,
      'TPP-Signature-Certificate': TPPSignatureCertificateParamsSchema,
      'PSU-IP-Address': PSUIPAddressOptionalParamsSchema,
      'PSU-IP-Port': PSUIPPortParamsSchema,
      'PSU-Accept': PSUAcceptParamsSchema,
      'PSU-Accept-Charset': PSUAcceptCharsetParamsSchema,
      'PSU-Accept-Encoding': PSUAcceptEncodingParamsSchema,
      'PSU-Accept-Language': PSUAcceptLanguageParamsSchema,
      'PSU-User-Agent': PSUUserAgentParamsSchema,
      'PSU-Http-Method': PSUHttpMethodParamsSchema,
      'PSU-Device-ID': PSUDeviceIDParamsSchema,
      'PSU-Geo-Location': PSUGeoLocationParamsSchema,
    }),
  },
  responses: {
    200: OK_200PaymentInitiationStatusResponse,
    400: BADREQUEST_400PISResponse,
    401: UNAUTHORIZED_401PISResponse,
    403: FORBIDDEN_403PISResponse,
    404: NOTFOUND_404PISResponse,
    405: METHODNOTALLOWED_405PISResponse,
    406: NOTACCEPTABLE_406PISResponse,
    408: REQUESTTIMEOUT_408PISResponse,
    409: CONFLICT_409PISResponse,
    415: UNSUPPORTEDMEDIATYPE_415PISResponse,
    429: TOOMANYREQUESTS_429PISResponse,
    500: INTERNALSERVERERROR_500PISResponse,
    503: SERVICEUNAVAILABLE_503PISResponse,
  },
  security: [{}, { BearerAuthOAuth: [] }],
})

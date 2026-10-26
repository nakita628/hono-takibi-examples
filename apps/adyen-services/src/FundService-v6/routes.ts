import { createRoute, z } from '@hono/zod-openapi'

const AmountSchema = z
  .strictObject({
    currency: z
      .string()
      .length(3)
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).',
      }),
    value: z
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
          'The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
      }),
  })
  .openapi({ required: ['value', 'currency'] })
  .openapi('Amount')

const DetailBalanceSchema = z
  .strictObject({
    balance: z
      .array(AmountSchema)
      .exactOptional()
      .openapi({ description: 'The list of balances held by the account.' }),
    onHoldBalance: z
      .array(AmountSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'The list of on hold balances held by the account.',
      }),
    pendingBalance: z
      .array(AmountSchema)
      .exactOptional()
      .openapi({ description: 'The list of pending balances held by the account.' }),
  })
  .openapi({ required: [] })
  .openapi('DetailBalance')

const AccountDetailBalanceSchema = z
  .strictObject({
    accountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the account that holds the balance.' }),
    detailBalance: DetailBalanceSchema.exactOptional().openapi({
      description: 'Details of the balance held by the account.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AccountDetailBalance')

const AccountHolderBalanceRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({ description: 'The code of the Account Holder of which to retrieve the balance.' }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('AccountHolderBalanceRequest')

const FieldTypeSchema = z
  .strictObject({
    field: z.string().exactOptional().openapi({ description: 'The full name of the property.' }),
    fieldName: z
      .enum([
        'accountCode',
        'accountHolderCode',
        'accountHolderDetails',
        'accountNumber',
        'accountStateType',
        'accountStatus',
        'accountType',
        'address',
        'balanceAccount',
        'balanceAccountActive',
        'balanceAccountCode',
        'balanceAccountId',
        'bankAccount',
        'bankAccountCode',
        'bankAccountName',
        'bankAccountUUID',
        'bankBicSwift',
        'bankCity',
        'bankCode',
        'bankName',
        'bankStatement',
        'branchCode',
        'businessContact',
        'cardToken',
        'checkCode',
        'city',
        'companyRegistration',
        'constitutionalDocument',
        'controller',
        'country',
        'countryCode',
        'currency',
        'currencyCode',
        'dateOfBirth',
        'description',
        'destinationAccountCode',
        'document',
        'documentContent',
        'documentExpirationDate',
        'documentIssuerCountry',
        'documentIssuerState',
        'documentName',
        'documentNumber',
        'documentType',
        'doingBusinessAs',
        'drivingLicence',
        'drivingLicenceBack',
        'drivingLicenceFront',
        'drivingLicense',
        'email',
        'firstName',
        'formType',
        'fullPhoneNumber',
        'gender',
        'hopWebserviceUser',
        'houseNumberOrName',
        'iban',
        'idCard',
        'idCardBack',
        'idCardFront',
        'idNumber',
        'identityDocument',
        'individualDetails',
        'infix',
        'jobTitle',
        'lastName',
        'lastReviewDate',
        'legalArrangement',
        'legalArrangementCode',
        'legalArrangementEntity',
        'legalArrangementEntityCode',
        'legalArrangementLegalForm',
        'legalArrangementMember',
        'legalArrangementMembers',
        'legalArrangementName',
        'legalArrangementReference',
        'legalArrangementRegistrationNumber',
        'legalArrangementTaxNumber',
        'legalArrangementType',
        'legalBusinessName',
        'legalEntity',
        'legalEntityType',
        'linkedViasVirtualAccount',
        'logo',
        'merchantAccount',
        'merchantCategoryCode',
        'merchantHouseNumber',
        'merchantReference',
        'microDeposit',
        'name',
        'nationality',
        'originalReference',
        'ownerCity',
        'ownerCountryCode',
        'ownerDateOfBirth',
        'ownerHouseNumberOrName',
        'ownerName',
        'ownerPostalCode',
        'ownerState',
        'ownerStreet',
        'passport',
        'passportNumber',
        'payoutMethod',
        'payoutMethodCode',
        'payoutSchedule',
        'pciSelfAssessment',
        'personalData',
        'phoneCountryCode',
        'phoneNumber',
        'postalCode',
        'primaryCurrency',
        'reason',
        'registrationNumber',
        'returnUrl',
        'schedule',
        'shareholder',
        'shareholderCode',
        'shareholderCodeAndSignatoryCode',
        'shareholderCodeOrSignatoryCode',
        'shareholderType',
        'shareholderTypes',
        'shopperInteraction',
        'signatory',
        'signatoryCode',
        'socialSecurityNumber',
        'sourceAccountCode',
        'splitAccount',
        'splitConfigurationUUID',
        'splitCurrency',
        'splitValue',
        'splits',
        'stateOrProvince',
        'status',
        'stockExchange',
        'stockNumber',
        'stockTicker',
        'store',
        'storeDetail',
        'storeName',
        'storeReference',
        'street',
        'taxId',
        'tier',
        'tierNumber',
        'transferCode',
        'ultimateParentCompany',
        'ultimateParentCompanyAddressDetails',
        'ultimateParentCompanyAddressDetailsCountry',
        'ultimateParentCompanyBusinessDetails',
        'ultimateParentCompanyBusinessDetailsLegalBusinessName',
        'ultimateParentCompanyBusinessDetailsRegistrationNumber',
        'ultimateParentCompanyCode',
        'ultimateParentCompanyStockExchange',
        'ultimateParentCompanyStockNumber',
        'ultimateParentCompanyStockNumberOrStockTicker',
        'ultimateParentCompanyStockTicker',
        'unknown',
        'value',
        'verificationType',
        'virtualAccount',
        'visaNumber',
        'webAddress',
        'year',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the field.' }),
    shareholderCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FieldType')

const ErrorFieldTypeSchema = z
  .strictObject({
    errorCode: z.int32().exactOptional().openapi({ description: 'The validation error code.' }),
    errorDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the validation error.' }),
    fieldType: FieldTypeSchema.exactOptional().openapi({ description: 'The type of error field.' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorFieldType')

const AccountHolderBalanceResponseSchema = z
  .strictObject({
    balancePerAccount: z
      .array(AccountDetailBalanceSchema)
      .exactOptional()
      .openapi({ description: 'A list of each account and their balances.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
    totalBalance: DetailBalanceSchema.exactOptional().openapi({
      description: 'The total balance of the account holder.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AccountHolderBalanceResponse')

const TransactionListForAccountSchema = z
  .strictObject({
    accountCode: z
      .string()
      .openapi({ description: 'The account for which to retrieve the transactions.' }),
    page: z
      .int32()
      .openapi({
        description:
          'The page of transactions to retrieve.\nEach page lists fifty (50) transactions.  The most recent transactions are included on page 1.',
      }),
  })
  .openapi({ required: ['accountCode', 'page'] })
  .openapi('TransactionListForAccount')

const AccountHolderTransactionListRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({
        description:
          'The code of the account holder that owns the account(s) of which retrieve the transaction list.',
      }),
    transactionListsPerAccount: z
      .array(TransactionListForAccountSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included.',
      }),
    transactionStatuses: z
      .array(
        z.enum([
          'BalanceNotPaidOutTransfer',
          'BalancePlatformFundTransfer',
          'BalancePlatformSweep',
          'BalancePlatformSweepReturned',
          'Chargeback',
          'ChargebackCorrection',
          'ChargebackCorrectionReceived',
          'ChargebackReceived',
          'ChargebackReversed',
          'ChargebackReversedCorrection',
          'ChargebackReversedCorrectionReceived',
          'ChargebackReversedReceived',
          'Converted',
          'CreditClosed',
          'CreditFailed',
          'CreditReversed',
          'CreditReversedReceived',
          'CreditSuspended',
          'Credited',
          'DebitFailed',
          'DebitReversedReceived',
          'Debited',
          'DebitedReversed',
          'DepositCorrectionCredited',
          'DepositCorrectionDebited',
          'DepositCorrectionReceived',
          'Fee',
          'FeeReceived',
          'FundTransfer',
          'FundTransferReversed',
          'InvoiceDeductionCredited',
          'InvoiceDeductionDebited',
          'InvoiceDeductionReceived',
          'ManualCorrected',
          'ManualCorrectionCredited',
          'ManualCorrectionDebited',
          'MerchantPayin',
          'MerchantPayinReceived',
          'MerchantPayinReversed',
          'Payout',
          'PayoutReversed',
          'PendingCredit',
          'PendingDebit',
          'PendingFundTransfer',
          'ReCredited',
          'ReCreditedReceived',
          'SecondChargeback',
          'SecondChargebackCorrection',
          'SecondChargebackCorrectionReceived',
          'SecondChargebackReceived',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of statuses to include in the transaction list. If left blank, all transactions will be included.\n>Permitted values:\n>* `PendingCredit` - a pending balance credit.\n>* `CreditFailed` - a pending credit failure; the balance will not be credited.\n>* `Credited` - a credited balance.\n>* `PendingDebit` - a pending balance debit (e.g., a refund).\n>* `CreditClosed` - a pending credit closed; the balance will not be credited.\n>* `CreditSuspended` - a pending credit closed; the balance will not be credited.\n>* `DebitFailed` - a pending debit failure; the balance will not be debited.\n>* `Debited` - a debited balance (e.g., a refund).\n>* `DebitReversedReceived` - a pending refund reversal.\n>* `DebitedReversed` - a reversed refund.\n>* `ChargebackReceived` - a received chargeback request.\n>* `Chargeback` - a processed chargeback.\n>* `ChargebackReversedReceived` - a pending chargeback reversal.\n>* `ChargebackReversed` - a reversed chargeback.\n>* `Converted` - converted.\n>* `ManualCorrected` - manual booking/adjustment by Adyen.\n>* `Payout` - a payout.\n>* `PayoutReversed` - a reversed payout.\n>* `PendingFundTransfer` - a pending transfer of funds from one account to another.\n>* `FundTransfer` - a transfer of funds from one account to another.',
      }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('AccountHolderTransactionListRequest')

const BankAccountDetailSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bank account number (without separators).\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of bank account.\nOnly applicable to bank accounts held in the USA.\nThe permitted values are: `checking`, `savings`.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    bankAccountName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the bank account.' }),
    bankAccountReference: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'Merchant reference to the bank account.' }),
    bankAccountUUID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier (UUID) of the Bank Account.\n>If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.\n\n>If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.\n\n>If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.\n\n>If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated.\n',
      }),
    bankBicSwift: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bank identifier code.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    bankCity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The city in which the bank branch is located.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    bankCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bank code of the banking institution with which the bank account is registered.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    bankName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the banking institution with which the bank account is held.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    branchCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:\n* United States - Routing number\n* United Kingdom - Sort code\n* Germany - Bankleitzahl\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    checkCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The check code of the bank account.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The two-letter country code in which the bank account is registered.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.",
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The currency in which the bank account deals.\n>The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').\n",
      }),
    iban: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The international bank account number.\n>The IBAN standard is defined in ISO-13616.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerCity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The city of residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerCountryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The country code of the country of residence of the bank account owner.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.",
      }),
    ownerDateOfBirth: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The date of birth of the bank account owner.\nThe date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).',
      }),
    ownerHouseNumberOrName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The house name or number of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerNationality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The country code of the country of nationality of the bank account owner.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.",
      }),
    ownerPostalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state of residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerStreet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The street name of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    primaryAccount: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true, the bank account is a primary account.' }),
    taxId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tax ID number.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    urlForVerification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to be used for bank account verification.\nThis may be generated on bank account creation.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BankAccountDetail')

const TransactionSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({ description: 'The amount of the transaction.' }),
    bankAccountDetail: BankAccountDetailSchema.exactOptional().openapi({
      description: 'The details of the bank account to where a payout was made.',
    }),
    captureMerchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant reference of a related capture.' }),
    capturePspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The psp reference of a related capture.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date on which the transaction was performed.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the transaction.' }),
    destinationAccountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the account to which funds were credited during an outgoing fund transfer.',
      }),
    disputePspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The psp reference of the related dispute.' }),
    disputeReasonCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason code of a dispute.' }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant reference of a transaction.' }),
    paymentPspReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The psp reference of the related authorisation or transfer.',
      }),
    payoutPspReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The psp reference of the related payout.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The psp reference of a transaction.' }),
    sourceAccountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the account from which funds were debited during an incoming fund transfer.',
      }),
    transactionStatus: z
      .enum([
        'BalanceNotPaidOutTransfer',
        'BalancePlatformFundTransfer',
        'BalancePlatformSweep',
        'BalancePlatformSweepReturned',
        'Chargeback',
        'ChargebackCorrection',
        'ChargebackCorrectionReceived',
        'ChargebackReceived',
        'ChargebackReversed',
        'ChargebackReversedCorrection',
        'ChargebackReversedCorrectionReceived',
        'ChargebackReversedReceived',
        'Converted',
        'CreditClosed',
        'CreditFailed',
        'CreditReversed',
        'CreditReversedReceived',
        'CreditSuspended',
        'Credited',
        'DebitFailed',
        'DebitReversedReceived',
        'Debited',
        'DebitedReversed',
        'DepositCorrectionCredited',
        'DepositCorrectionDebited',
        'DepositCorrectionReceived',
        'Fee',
        'FeeReceived',
        'FundTransfer',
        'FundTransferReversed',
        'InvoiceDeductionCredited',
        'InvoiceDeductionDebited',
        'InvoiceDeductionReceived',
        'ManualCorrected',
        'ManualCorrectionCredited',
        'ManualCorrectionDebited',
        'MerchantPayin',
        'MerchantPayinReceived',
        'MerchantPayinReversed',
        'Payout',
        'PayoutReversed',
        'PendingCredit',
        'PendingDebit',
        'PendingFundTransfer',
        'ReCredited',
        'ReCreditedReceived',
        'SecondChargeback',
        'SecondChargebackCorrection',
        'SecondChargebackCorrectionReceived',
        'SecondChargebackReceived',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status of the transaction.\n>Permitted values: `PendingCredit`, `CreditFailed`, `CreditClosed`, `CreditSuspended`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`.',
      }),
    transferCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transfer code of the transaction.' }),
  })
  .openapi({ required: [] })
  .openapi('Transaction')

const AccountTransactionListSchema = z
  .strictObject({
    accountCode: z.string().exactOptional().openapi({ description: 'The code of the account.' }),
    hasNextPage: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether there is a next page of transactions available.',
      }),
    transactions: z
      .array(TransactionSchema)
      .exactOptional()
      .openapi({ description: 'The list of transactions.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountTransactionList')

const AccountHolderTransactionListResponseSchema = z
  .strictObject({
    accountTransactionLists: z
      .array(AccountTransactionListSchema)
      .exactOptional()
      .openapi({ description: 'A list of the transactions.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountHolderTransactionListResponse')

const SplitAmountSchema = z
  .strictObject({
    currency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). By default, this is the original payment currency.',
      }),
    value: z
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
          'The value of the split amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
      }),
  })
  .openapi({ required: ['value'] })
  .openapi('SplitAmount')

const SplitSchema = z
  .strictObject({
    account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the account to which the split amount is booked. Required if `type` is **MarketPlace** or **BalanceAccount**.\n\n* [Classic Platforms integration](https://docs.adyen.com/classic-platforms): The [`accountCode`](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccount#request-accountCode) of the account to which the split amount is booked.\n* [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model): The [`balanceAccountId`](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/balanceAccounts/_id_#path-id) of the account to which the split amount is booked.',
      }),
    amount: SplitAmountSchema.exactOptional().openapi({
      description:
        'The amount of the split item.\n\n* Required for all split types in the [Classic Platforms integration](https://docs.adyen.com/classic-platforms).\n* Required if `type` is **BalanceAccount**, **Commission**, **Default**, or **VAT** in your [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model) integration.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your description for the split item.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your unique reference for the part of the payment booked to the specified `account`.\n\nThis is required if `type` is **MarketPlace** ([Classic Platforms integration](https://docs.adyen.com/classic-platforms)) or **BalanceAccount** ([Balance Platform](https://docs.adyen.com/adyen-for-platforms-model)).\n\nFor the other types, we also recommend providing a **unique** reference so you can reconcile the split and the associated payment in the transaction overview and in the reports.',
      }),
    type: z
      .enum([
        'AcquiringFees',
        'AdyenCommission',
        'AdyenFees',
        'AdyenMarkup',
        'BalanceAccount',
        'Commission',
        'Default',
        'Interchange',
        'MarketPlace',
        'PaymentFee',
        'Remainder',
        'SchemeFee',
        'Surcharge',
        'Tip',
        'VAT',
      ])
      .openapi({
        description:
          "The part of the payment you want to book to the specified `account`.\n\nPossible values for the [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model):\n* **BalanceAccount**: books part of the payment (specified in `amount`) to the specified `account`.\n* Transaction fees types that you can book to the specified `account`:\n   * **AcquiringFees**: the aggregated amount of the interchange and scheme fees.\n   * **PaymentFee**: the aggregated amount of all transaction fees.\n   * **AdyenFees**: the aggregated amount of Adyen's commission and markup fees.\n   * **AdyenCommission**: the transaction fees due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained).\n   * **AdyenMarkup**: the transaction fees due to Adyen under [Interchange ++ pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained).\n   * **Interchange**: the fees paid to the issuer for each payment made with the card network.\n   * **SchemeFee**: the fees paid to the card scheme for using their network. \n* **Commission**: your platform's commission on the payment (specified in `amount`), booked to your liable balance account.\n* **Remainder**: the amount left over after a currency conversion, booked to the specified `account`.\n* **TopUp**: allows you and your users to top up balance accounts using direct debit, card payments, or other payment methods.\n* **VAT**: the value-added tax charged on the payment, booked to your platforms liable balance account.\n* **Commission**: your platform's commission (specified in `amount`) on the payment, booked to your liable balance account.\n* **Default**: in very specific use cases, allows you to book the specified `amount` to the specified `account`. For more information, contact Adyen support.\n\nPossible values for the [Classic Platforms integration](https://docs.adyen.com/classic-platforms): **Commission**, **Default**, **Marketplace**, **PaymentFee**, **VAT**.",
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('Split')

const DebitAccountHolderRequestSchema = z
  .strictObject({
    accountHolderCode: z.string().openapi({ description: 'The code of the account holder.' }),
    amount: AmountSchema.openapi({
      description: "The amount to be debited from the account holder's bank account.",
    }),
    bankAccountUUID: z
      .string()
      .openapi({
        description:
          "The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.",
      }),
    description: z
      .string()
      .max(35)
      .exactOptional()
      .openapi({
        description:
          'A description of the direct debit. Maximum length: 35 characters.\n\nAllowed characters: **a-z**, **A-Z**, **0-9**, and special characters **/?:().,\'+ ";**.',
      }),
    merchantAccount: z.string().openapi({ description: 'Your merchant account.' }),
    splits: z
      .array(SplitSchema)
      .openapi({
        description:
          'Contains instructions on how to split the funds between the accounts in your platform. The request must have at least one split item.',
      }),
  })
  .openapi({
    required: ['accountHolderCode', 'bankAccountUUID', 'amount', 'splits', 'merchantAccount'],
  })
  .openapi('DebitAccountHolderRequest')

const DebitAccountHolderResponseSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the account holder.' }),
    bankAccountUUID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.",
      }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    merchantReferences: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of the `reference` values from the `split` array in the request.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('DebitAccountHolderResponse')

const PayoutAccountHolderRequestSchema = z
  .strictObject({
    accountCode: z
      .string()
      .openapi({ description: 'The code of the account from which the payout is to be made.' }),
    accountHolderCode: z
      .string()
      .openapi({
        description:
          'The code of the Account Holder who owns the account from which the payout is to be made.\nThe Account Holder is the party to which the payout will be made.',
      }),
    amount: AmountSchema.exactOptional().openapi({
      description:
        'An object containing the currency and value of the payout.\nIf the account has multiple currencies, specify the currency to be used.\nIf the `bankAccountUUID` is provided in the request, the currency supported by the bank is used.\nIf the `payoutMethodCode` is provided in the request, the specified payout method is selected.',
    }),
    bankAccountUUID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.\nIf left blank, a bank account is automatically selected.',
      }),
    description: z
      .string()
      .max(200)
      .exactOptional()
      .openapi({
        description:
          'A description of the payout. Maximum 200 characters.\nAllowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,\'+ ";**',
      }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description:
          'A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.',
      }),
    payoutMethodCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The unique ID of the payout method held by the Account Holder to which the payout is to be made.\nIf left blank, a payout instrument is automatically selected.',
      }),
    payoutSpeed: z
      .enum(['INSTANT', 'SAME_DAY', 'STANDARD'])
      .default('STANDARD')
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.',
      }),
  })
  .openapi({ required: ['accountHolderCode', 'accountCode'] })
  .openapi('PayoutAccountHolderRequest')

const PayoutAccountHolderResponseSchema = z
  .strictObject({
    bankAccountUUID: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the Bank Account to which the payout was made.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description:
          'The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.',
      }),
    payoutSpeed: z
      .enum(['INSTANT', 'SAME_DAY', 'STANDARD'])
      .default('STANDARD')
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('PayoutAccountHolderResponse')

const RefundFundsTransferRequestSchema = z
  .strictObject({
    amount: AmountSchema.openapi({ description: 'The amount to be transferred.' }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.',
      }),
    originalReference: z
      .string()
      .openapi({ description: 'A PSP reference of the original fund transfer.' }),
  })
  .openapi({ required: ['originalReference', 'amount'] })
  .openapi('RefundFundsTransferRequest')

const RefundFundsTransferResponseSchema = z
  .strictObject({
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value supplied by the executing user when initiating the transfer refund; may be used to link multiple transactions.',
      }),
    message: z.string().exactOptional().openapi({ description: 'The message of the response.' }),
    originalReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'A PSP reference of the original fund transfer.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('RefundFundsTransferResponse')

const RefundNotPaidOutTransfersRequestSchema = z
  .strictObject({
    accountCode: z
      .string()
      .openapi({ description: 'The code of the account from which to perform the refund(s).' }),
    accountHolderCode: z
      .string()
      .openapi({
        description:
          'The code of the Account Holder which owns the account from which to perform the refund(s).',
      }),
  })
  .openapi({ required: ['accountHolderCode', 'accountCode'] })
  .openapi('RefundNotPaidOutTransfersRequest')

const RefundNotPaidOutTransfersResponseSchema = z
  .strictObject({
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('RefundNotPaidOutTransfersResponse')

const ServiceErrorSchema = z
  .strictObject({
    errorCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error code mapped to the error message.' }),
    errorType: z.string().exactOptional().openapi({ description: 'The category of the error.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short explanation of the issue.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PSP reference of the payment.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP response status.' }),
  })
  .openapi({ required: [] })
  .openapi('ServiceError')

const SetupBeneficiaryRequestSchema = z
  .strictObject({
    destinationAccountCode: z.string().openapi({ description: 'The destination account code.' }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A value that can be supplied at the discretion of the executing user.',
      }),
    sourceAccountCode: z.string().openapi({ description: 'The benefactor account.' }),
  })
  .openapi({ required: ['sourceAccountCode', 'destinationAccountCode'] })
  .openapi('SetupBeneficiaryRequest')

const SetupBeneficiaryResponseSchema = z
  .strictObject({
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('SetupBeneficiaryResponse')

const TransferFundsRequestSchema = z
  .strictObject({
    amount: AmountSchema.openapi({ description: 'The amount to be transferred.' }),
    destinationAccountCode: z
      .string()
      .openapi({
        description:
          'The code of the account to which the funds are to be credited.\n>The state of the Account Holder of this account must be Active.',
      }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description:
          'A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.',
      }),
    sourceAccountCode: z
      .string()
      .openapi({
        description:
          'The code of the account from which the funds are to be debited.\n>The state of the Account Holder of this account must be Active and allow payouts.',
      }),
    transferCode: z
      .string()
      .openapi({
        description:
          'The code related to the type of transfer being performed.\n>The permitted codes differ for each platform account and are defined in their service level agreement.',
      }),
  })
  .openapi({ required: ['sourceAccountCode', 'destinationAccountCode', 'transferCode', 'amount'] })
  .openapi('TransferFundsRequest')

const TransferFundsResponseSchema = z
  .strictObject({
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description:
          'The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: [] })
  .openapi('TransferFundsResponse')

const PostAccountHolderBalanceBasicExample = {
  summary: 'Review the account holder balance',
  value: { accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER' },
}

const PostAccountHolderTransactionListBasicExample = {
  summary: 'Retrieve transactions page by page',
  value: {
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    transactionListsPerAccount: [{ accountCode: '195752115', page: 1 }],
  },
}

const PostAccountHolderTransactionListSpecificExample = {
  summary: 'Retrieve transactions with specific statuses.',
  value: {
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    transactionStatuses: ['PendingCredit', 'Credited', 'Debited'],
    transactionListsPerAccount: [{ accountCode: '2e64b396-1200-4474-b848-0cb06b52b3c7', page: 2 }],
  },
}

const PostDebitAccountHolderDebitAccountHolderExample = {
  summary: 'Send a bank account direct debit',
  description: 'Example request to send a direct debit from a bank account',
  value: {
    accountHolderCode: 'ACCOUNT_HOLDER_CODE',
    description: 'YOUR_DESCRIPTION',
    bankAccountUUID: '000b81aa-ae7e-4492-aa7e-72b2129dce0c',
    amount: { value: 6200, currency: 'USD' },
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    splits: [
      {
        amount: { value: 6000 },
        type: 'MarketPlace',
        account: '8535516988037431',
        reference: 'YOUR_SPLIT_REFERENCE_1',
      },
      { amount: { value: 200 }, type: 'Commission', reference: 'YOUR_SPLIT_REFERENCE_2' },
    ],
  },
}

const PostDebitAccountHolderDebitAccountHolder_200Example = {
  summary: 'Direct debit request sent',
  description: 'Example response for requesting a direct debit from a bank account',
  value: { pspReference: '8816480354727275', submittedAsync: 'false' },
}

const PostPayoutAccountHolderOneOffExample = {
  summary: 'One-off payout',
  value: {
    accountCode: '118731451',
    amount: { currency: 'EUR', value: 99792 },
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    description: '12345 – Test',
    bankAccountUUID: '000b81aa-ae7e-4492-aa7e-72b2129dce0c',
  },
}

const PostRefundFundsTransferBasicExample = {
  summary: 'Refund the fund transfer',
  value: {
    originalReference: 'PSP_REFERENCE_OF_TRANSFER_TO_REFUND',
    amount: { currency: 'EUR', value: 1000 },
    merchantReference: 'YOUR_REFERENCE_ID',
  },
}

const PostRefundNotPaidOutTransfersBasicExample = {
  summary: 'Refund last transactions',
  value: { accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER', accountCode: '189184578' },
}

const PostSetupBeneficiaryBasicExample = {
  summary: 'Set up a beneficiary',
  value: {
    destinationAccountCode: '128952522',
    merchantReference: 'YOUR_REFERENCE_ID',
    sourceAccountCode: '134498192',
  },
}

const PostTransferFundsBasicExample = {
  summary: 'Transfer funds from one account to another',
  value: {
    sourceAccountCode: '100000000',
    destinationAccountCode: '190324759',
    amount: { currency: 'EUR', value: 2000 },
    transferCode: 'TransferCode_1',
  },
}

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postAccountHolderBalanceRoute = createRoute({
  method: 'post',
  path: '/accountHolderBalance',
  tags: ['General'],
  summary: 'Get the balances of an account holder',
  description:
    "Returns the account balances of an account holder. An account's balances are organized according by currencies. This mean that an account may have multiple balances: one for each currency.",
  operationId: 'post-accountHolderBalance',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderBalanceRequestSchema,
          examples: { basic: PostAccountHolderBalanceBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: AccountHolderBalanceResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: AccountHolderBalanceResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postAccountHolderTransactionListRoute = createRoute({
  method: 'post',
  path: '/accountHolderTransactionList',
  tags: ['General'],
  summary: 'Get a list of transactions',
  description:
    "Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.",
  operationId: 'post-accountHolderTransactionList',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderTransactionListRequestSchema,
          examples: {
            basic: PostAccountHolderTransactionListBasicExample,
            specific: PostAccountHolderTransactionListSpecificExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: AccountHolderTransactionListResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: AccountHolderTransactionListResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postDebitAccountHolderRoute = createRoute({
  method: 'post',
  path: '/debitAccountHolder',
  tags: ['General'],
  summary: 'Send a direct debit request',
  description:
    "Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.\n\n To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/classic-platforms/top-up-accounts).",
  operationId: 'post-debitAccountHolder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DebitAccountHolderRequestSchema,
          examples: { 'debit-account-holder': PostDebitAccountHolderDebitAccountHolderExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: DebitAccountHolderResponseSchema,
          examples: { 'debit-account-holder': PostDebitAccountHolderDebitAccountHolder_200Example },
        },
      },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: DebitAccountHolderResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postPayoutAccountHolderRoute = createRoute({
  method: 'post',
  path: '/payoutAccountHolder',
  tags: ['General'],
  summary: 'Pay out from an account to the account holder',
  description: 'Pays out a specified amount from an account to the bank account of account holder.',
  operationId: 'post-payoutAccountHolder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PayoutAccountHolderRequestSchema,
          examples: { oneOff: PostPayoutAccountHolderOneOffExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: PayoutAccountHolderResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: PayoutAccountHolderResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postRefundFundsTransferRoute = createRoute({
  method: 'post',
  path: '/refundFundsTransfer',
  tags: ['General'],
  summary: 'Refund a funds transfer',
  description:
    'Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders. ',
  operationId: 'post-refundFundsTransfer',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RefundFundsTransferRequestSchema,
          examples: { basic: PostRefundFundsTransferBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: RefundFundsTransferResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: RefundFundsTransferResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postRefundNotPaidOutTransfersRoute = createRoute({
  method: 'post',
  path: '/refundNotPaidOutTransfers',
  tags: ['General'],
  summary: 'Refund all transactions of an account since the most recent payout',
  description:
    "Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.",
  operationId: 'post-refundNotPaidOutTransfers',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RefundNotPaidOutTransfersRequestSchema,
          examples: { basic: PostRefundNotPaidOutTransfersBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: RefundNotPaidOutTransfersResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: RefundNotPaidOutTransfersResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postSetupBeneficiaryRoute = createRoute({
  method: 'post',
  path: '/setupBeneficiary',
  tags: ['General'],
  summary: "Designate a beneficiary account and transfer the benefactor's current balance",
  description:
    'Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.',
  operationId: 'post-setupBeneficiary',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SetupBeneficiaryRequestSchema,
          examples: { basic: PostSetupBeneficiaryBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: SetupBeneficiaryResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: SetupBeneficiaryResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postTransferFundsRoute = createRoute({
  method: 'post',
  path: '/transferFunds',
  tags: ['General'],
  summary: 'Transfer funds between platform accounts',
  description:
    'Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.',
  operationId: 'post-transferFunds',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TransferFundsRequestSchema,
          examples: { basic: PostTransferFundsBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TransferFundsResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: TransferFundsResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

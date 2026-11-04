import { createRoute, z } from '@hono/zod-openapi'

const AULocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(5)
      .max(9)
      .openapi({ description: 'The bank account number, without separators or whitespace.' }),
    bsbCode: z
      .string()
      .length(6)
      .openapi({
        description:
          'The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.',
      }),
    type: z.literal('auLocal').default('auLocal').openapi({ description: '**auLocal**' }),
  })
  .openapi({ required: ['type', 'accountNumber', 'bsbCode'] })
  .openapi('AULocalAccountIdentification')

const AdditionalBankIdentificationSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the additional bank identification.' }),
    type: z
      .enum(['gbSortCode', 'usRoutingNumber'])
      .exactOptional()
      .openapi({
        description:
          'The type of additional bank identification, depending on the country.\n\nPossible values:\n\n * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces\n * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdditionalBankIdentification')

const Address_2Schema = z
  .object({
    city: z.string().exactOptional().openapi({ description: 'The name of the city.' }),
    country: z
      .string()
      .openapi({
        description:
          "The two-character ISO 3166-1 alpha-2 country code. For example, **US**.\n>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
      }),
    line1: z.string().exactOptional().openapi({ description: 'First line of the street address.' }),
    line2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Second line of the street address.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code.\nMaximum length:\n* 5 digits for an address in the US.\n* 10 characters for an address in all other countries.',
      }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n> Required for the US and Canada.',
      }),
  })
  .openapi({ required: ['country'] })
  .openapi('Address_2')

const AmountSchema = z
  .object({
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

const AmountAdjustmentSchema = z
  .object({
    amount: AmountSchema.exactOptional().openapi({
      'x-addedInVersion': '3',
      description: 'The adjustment amount.',
    }),
    amountAdjustmentType: z
      .enum(['atmMarkup', 'authHoldReserve', 'exchange', 'forexMarkup'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The type of markup that is applied to an authorised payment.\n\nPossible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.',
      }),
    basepoints: z
      .int32()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The basepoints associated with the applied markup.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AmountAdjustment')

const BRLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(1)
      .max(10)
      .openapi({ description: 'The bank account number (without separators or whitespace).' }),
    bankCode: z
      .string()
      .length(3)
      .openapi({ description: 'The 3-digit Brazilian bank code (with leading zeros).' }),
    branchNumber: z
      .string()
      .min(1)
      .max(4)
      .openapi({
        description: 'The bank account branch number (without separators or whitespace).',
      }),
    type: z.literal('brLocal').default('brLocal').openapi({ description: '**brLocal**' }),
  })
  .openapi({ required: ['type', 'branchNumber', 'accountNumber', 'bankCode'] })
  .openapi('BRLocalAccountIdentification')

const BalanceMutationSchema = z
  .object({
    balance: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-addedInVersion': '3',
        description:
          "The amount in the payment's currency that is debited or credited on the balance accounting register.",
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).',
      }),
    received: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-addedInVersion': '3',
        description:
          "The amount in the payment's currency that is debited or credited on the received accounting register.",
      }),
    reserved: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-addedInVersion': '3',
        description:
          "The amount in the payment's currency that is debited or credited on the reserved accounting register.",
      }),
  })
  .openapi({ required: [] })
  .openapi('BalanceMutation')

const BalancePlatformNotificationResponseSchema = z
  .object({
    notificationResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Respond with **HTTP 200 OK** and `[accepted]` in the response body to [accept the webhook](https://docs.adyen.com/development-resources/webhooks#accept-notifications).',
      }),
  })
  .openapi({ required: [] })
  .openapi('BalancePlatformNotificationResponse')

const PartyIdentification_2Schema = z
  .object({
    address: Address_2Schema.exactOptional().openapi({
      description: 'Address of the bank account owner.',
    }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'First name of the individual. Required when `type` is **individual**.',
      }),
    fullName: z.string().openapi({ description: 'The name of the entity.' }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last name of the individual. Required when `type` is **individual**.',
      }),
    type: z
      .enum(['individual', 'organization', 'unknown'])
      .default('unknown')
      .exactOptional()
      .openapi({
        description:
          'The type of entity that owns the bank account.\n\n Possible values: **individual**, **organization**, or **unknown**.',
      }),
  })
  .openapi({ required: ['fullName'] })
  .openapi('PartyIdentification_2')

const CALocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(5)
      .max(12)
      .openapi({
        description: 'The 5- to 12-digit bank account number, without separators or whitespace.',
      }),
    institutionNumber: z
      .string()
      .length(3)
      .openapi({
        description: 'The 3-digit institution number, without separators or whitespace.',
      }),
    transitNumber: z
      .string()
      .length(5)
      .openapi({ description: 'The 5-digit transit number, without separators or whitespace.' }),
    type: z.literal('caLocal').default('caLocal').openapi({ description: '**caLocal**' }),
  })
  .openapi({ required: ['type', 'accountNumber', 'institutionNumber', 'transitNumber'] })
  .openapi('CALocalAccountIdentification')

const CZLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(2)
      .max(17)
      .openapi({
        description:
          'The 2- to 16-digit bank account number (Číslo účtu) in the following format:\n\n- The optional prefix (předčíslí).\n\n- The required second part (základní část) which must be at least two non-zero digits.\n\nExamples:\n\n- **19-123457** (with prefix)\n\n- **123457** (without prefix)\n\n- **000019-0000123457** (with prefix, normalized)\n\n- **000000-0000123457** (without prefix, normalized)',
      }),
    bankCode: z
      .string()
      .length(4)
      .openapi({
        description: 'The 4-digit bank code (Kód banky), without separators or whitespace.',
      }),
    type: z.literal('czLocal').default('czLocal').openapi({ description: '**czLocal**' }),
  })
  .openapi({ required: ['type', 'accountNumber', 'bankCode'] })
  .openapi('CZLocalAccountIdentification')

const DKLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(4)
      .max(10)
      .openapi({
        description:
          'The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).',
      }),
    bankCode: z
      .string()
      .length(4)
      .openapi({
        description:
          'The 4-digit bank code (Registreringsnummer) (without separators or whitespace).',
      }),
    type: z.literal('dkLocal').default('dkLocal').openapi({ description: '**dkLocal**' }),
  })
  .openapi({ required: ['type', 'accountNumber', 'bankCode'] })
  .openapi('DKLocalAccountIdentification')

const HULocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .length(24)
      .openapi({
        description: 'The 24-digit bank account number, without separators or whitespace.',
      }),
    type: z.literal('huLocal').default('huLocal').openapi({ description: '**huLocal**' }),
  })
  .openapi({ required: ['type', 'accountNumber'] })
  .openapi('HULocalAccountIdentification')

const IbanAccountIdentificationSchema = z
  .strictObject({
    iban: z
      .string()
      .openapi({
        description:
          'The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.',
      }),
    type: z.literal('iban').default('iban').openapi({ description: '**iban**' }),
  })
  .openapi({ required: ['type', 'iban'] })
  .openapi('IbanAccountIdentification')

const NOLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .length(11)
      .openapi({
        description: 'The 11-digit bank account number, without separators or whitespace.',
      }),
    type: z.literal('noLocal').default('noLocal').openapi({ description: '**noLocal**' }),
  })
  .openapi({ required: ['type', 'accountNumber'] })
  .openapi('NOLocalAccountIdentification')

const NumberAndBicAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .max(34)
      .openapi({
        description:
          'The bank account number, without separators or whitespace. The length and format depends on the bank or country.',
      }),
    additionalBankIdentification: AdditionalBankIdentificationSchema.exactOptional().openapi({
      description:
        'Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers.',
    }),
    bic: z
      .string()
      .min(8)
      .max(11)
      .openapi({ description: "The bank's 8- or 11-character BIC or SWIFT code." }),
    type: z
      .literal('numberAndBic')
      .default('numberAndBic')
      .openapi({ description: '**numberAndBic**' }),
  })
  .openapi({ required: ['type', 'accountNumber', 'bic'] })
  .openapi('NumberAndBicAccountIdentification')

const PLLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .length(26)
      .openapi({
        description:
          'The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.',
      }),
    type: z.literal('plLocal').default('plLocal').openapi({ description: '**plLocal**' }),
  })
  .openapi({ required: ['type', 'accountNumber'] })
  .openapi('PLLocalAccountIdentification')

const SELocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(7)
      .max(10)
      .openapi({
        description:
          'The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.',
      }),
    clearingNumber: z
      .string()
      .min(4)
      .max(5)
      .openapi({
        description:
          'The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.',
      }),
    type: z.literal('seLocal').default('seLocal').openapi({ description: '**seLocal**' }),
  })
  .openapi({ required: ['type', 'accountNumber', 'clearingNumber'] })
  .openapi('SELocalAccountIdentification')

const SGLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(4)
      .max(19)
      .openapi({
        description: 'The 4- to 19-digit bank account number, without separators or whitespace.',
      }),
    bic: z
      .string()
      .min(8)
      .max(11)
      .openapi({ description: "The bank's 8- or 11-character BIC or SWIFT code." }),
    type: z
      .literal('sgLocal')
      .default('sgLocal')
      .exactOptional()
      .openapi({ description: '**sgLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'bic'] })
  .openapi('SGLocalAccountIdentification')

const UKLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .length(8)
      .openapi({
        description: 'The 8-digit bank account number, without separators or whitespace.',
      }),
    sortCode: z
      .string()
      .length(6)
      .openapi({
        description:
          'The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.',
      }),
    type: z.literal('ukLocal').default('ukLocal').openapi({ description: '**ukLocal**' }),
  })
  .openapi({ required: ['type', 'accountNumber', 'sortCode'] })
  .openapi('UKLocalAccountIdentification')

const USLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(2)
      .max(18)
      .openapi({ description: 'The bank account number, without separators or whitespace.' }),
    accountType: z
      .enum(['checking', 'savings'])
      .default('checking')
      .exactOptional()
      .openapi({
        description:
          'The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.',
      }),
    routingNumber: z
      .string()
      .length(9)
      .openapi({
        description:
          'The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.',
      }),
    type: z.literal('usLocal').default('usLocal').openapi({ description: '**usLocal**' }),
  })
  .openapi({ required: ['type', 'accountNumber', 'routingNumber'] })
  .openapi('USLocalAccountIdentification')

const BankAccountV3Schema = z
  .object({
    accountHolder: PartyIdentification_2Schema.openapi({
      description: 'Information about the owner of the bank account.',
    }),
    accountIdentification: z
      .xor([
        AULocalAccountIdentificationSchema,
        BRLocalAccountIdentificationSchema,
        CALocalAccountIdentificationSchema,
        CZLocalAccountIdentificationSchema,
        DKLocalAccountIdentificationSchema,
        HULocalAccountIdentificationSchema,
        IbanAccountIdentificationSchema,
        NOLocalAccountIdentificationSchema,
        NumberAndBicAccountIdentificationSchema,
        PLLocalAccountIdentificationSchema,
        SELocalAccountIdentificationSchema,
        SGLocalAccountIdentificationSchema,
        UKLocalAccountIdentificationSchema,
        USLocalAccountIdentificationSchema,
      ])
      .openapi({
        description:
          'Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.',
      }),
  })
  .openapi({ required: ['accountIdentification', 'accountHolder'] })
  .openapi('BankAccountV3')

const NameLocationSchema = z
  .object({
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city where the merchant is located.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The country where the merchant is located in [three-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.',
      }),
    countryOfOrigin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The home country in [three-digit country code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) format, used for government-controlled merchants such as embassies.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The name of the merchant's shop or service." }),
    rawData: z.string().exactOptional().openapi({ description: 'The raw data.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state where the merchant is located.' }),
  })
  .openapi({ required: [] })
  .openapi('NameLocation')

const MerchantDataSchema = z
  .object({
    mcc: z.string().exactOptional().openapi({ description: 'The merchant category code.' }),
    merchantId: z.string().exactOptional().openapi({ description: 'The merchant identifier.' }),
    nameLocation: NameLocationSchema.exactOptional().openapi({
      description: "Contains the merchant's name and location.",
    }),
    postalCode: z.string().exactOptional().openapi({ description: 'The merchant postal code.' }),
  })
  .openapi({ required: [] })
  .openapi('MerchantData')

const CounterpartyV3Schema = z
  .object({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).',
      }),
    bankAccount: BankAccountV3Schema.exactOptional().openapi({
      description: 'Contains information about the bank account.',
    }),
    merchant: MerchantDataSchema.exactOptional().openapi({
      description: 'Contains information about the merchant.',
    }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).',
      }),
  })
  .openapi({ required: [] })
  .openapi('CounterpartyV3')

const PaymentInstrumentSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference for the resource.' }),
    tokenType: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The type of wallet the network token is associated with.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PaymentInstrument')

const RelayedAuthorisationData_2Schema = z
  .object({
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'Contains key-value pairs of your references and descriptions, for example, `customId`:`your-own-custom-field-12345`.',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'Your reference for the relayed authorisation data.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RelayedAuthorisationData_2')

const ResourceSchema = z
  .object({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('Resource')

const ResourceReferenceSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference for the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('ResourceReference')

const TransactionRuleReferenceSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference for the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRuleReference')

const TransactionRuleSourceSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of the resource, when applicable.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of resource for which the transaction rule is defined.\n\nPossible values:\n\n * **PaymentInstrumentGroup**\n\n* **PaymentInstrument**\n\n* **BalancePlatform**\n\n* **EntityUsageConfiguration**\n\n* **PlatformRule**: The transaction rule is a platform-wide rule imposed by Adyen.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRuleSource')

const TransactionEventViolationSchema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'An explanation about why the transaction rule failed.' }),
    transactionRule: TransactionRuleReferenceSchema.exactOptional().openapi({
      description: 'Contains information about the transaction rule.',
    }),
    transactionRuleSource: TransactionRuleSourceSchema.exactOptional().openapi({
      description:
        'Contains the type and ID of the resource to which the transaction rule is linked.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TransactionEventViolation')

const TransactionRulesResultSchema = z
  .object({
    advice: z
      .string()
      .exactOptional()
      .openapi({ description: 'The advice given by the Risk analysis.' }),
    allRulesPassed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the transaction passed the evaluation for all transaction rules.',
      }),
    failedTransactionRules: z
      .array(TransactionEventViolationSchema)
      .exactOptional()
      .openapi({
        description:
          'Array containing all the transaction rules that the transaction violated. This list is only sent when `allRulesPassed` is **false**.',
      }),
    score: z.int32().exactOptional().openapi({ description: 'The score of the Risk analysis.' }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRulesResult')

const TransferEventSchema = z
  .object({
    amountAdjustments: z
      .array(AmountAdjustmentSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The amount adjustments in this transfer.',
      }),
    bookingDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The date when the transfer request was sent.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The unique identifier of the transfer event.',
      }),
    mutations: z
      .array(BalanceMutationSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The list of the balance mutation per event.',
      }),
    originalAmount: AmountSchema.exactOptional().openapi({
      'x-addedInVersion': '3',
      description: 'The amount in the original currency.',
    }),
    reason: z
      .enum([
        'amountLimitExceded',
        'approved',
        'counterpartyAccountBlocked',
        'counterpartyAccountClosed',
        'counterpartyAccountNotFound',
        'counterpartyAddressRequired',
        'counterpartyBankTimedOut',
        'counterpartyBankUnavailable',
        'error',
        'notEnoughBalance',
        'refusedByCounterpartyBank',
        'routeNotFound',
        'unknown',
      ])
      .exactOptional()
      .openapi({ 'x-addedInVersion': '3', description: 'The reason for the transfer status.' }),
    status: z
      .enum([
        'atmWithdrawal',
        'atmWithdrawalReversalPending',
        'atmWithdrawalReversed',
        'authAdjustmentAuthorised',
        'authAdjustmentError',
        'authAdjustmentRefused',
        'authorised',
        'bankTransfer',
        'bankTransferPending',
        'booked',
        'bookingPending',
        'cancelled',
        'capturePending',
        'captureReversalPending',
        'captureReversed',
        'captured',
        'chargeback',
        'chargebackPending',
        'chargebackReversalPending',
        'chargebackReversed',
        'credited',
        'depositCorrection',
        'depositCorrectionPending',
        'dispute',
        'disputeClosed',
        'disputeExpired',
        'disputeNeedsReview',
        'error',
        'expired',
        'failed',
        'fee',
        'feePending',
        'internalTransfer',
        'internalTransferPending',
        'invoiceDeduction',
        'invoiceDeductionPending',
        'manualCorrectionPending',
        'manuallyCorrected',
        'matchedStatement',
        'matchedStatementPending',
        'merchantPayin',
        'merchantPayinPending',
        'merchantPayinReversed',
        'merchantPayinReversedPending',
        'miscCost',
        'miscCostPending',
        'paymentCost',
        'paymentCostPending',
        'received',
        'refundPending',
        'refundReversalPending',
        'refundReversed',
        'refunded',
        'refused',
        'reserveAdjustment',
        'reserveAdjustmentPending',
        'returned',
        'secondChargeback',
        'secondChargebackPending',
        'undefined',
      ])
      .exactOptional()
      .openapi({ 'x-addedInVersion': '3', description: 'The status of the transfer event.' }),
    transactionId: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The id of the transaction that is related to this accounting event. Only sent for events of type **accounting** where the balance changes.',
      }),
    type: z
      .enum(['accounting', 'tracking'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The type of the transfer event. Possible values: **accounting**, **tracking**.',
      }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The date when the tracking status was updated.',
      }),
    valueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'A future date, when the funds are expected to be deducted from or credited to the balance account.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransferEvent')

const TransferNotificationTransferTrackingSchema = z
  .object({
    status: z
      .literal('credited')
      .exactOptional()
      .openapi({ 'x-addedInVersion': '3', description: 'The tracking status of the transfer.' }),
  })
  .openapi({ required: [] })
  .openapi('TransferNotificationTransferTracking')

const TransferNotificationValidationFactSchema = z
  .object({
    result: z
      .string()
      .exactOptional()
      .openapi({ description: 'The evaluation result of the validation fact.' }),
    type: z.string().exactOptional().openapi({ description: 'The type of the validation fact.' }),
  })
  .openapi({ required: [] })
  .openapi('TransferNotificationValidationFact')

const TransferNotificationDataSchema = z
  .object({
    accountHolder: ResourceReferenceSchema.exactOptional().openapi({
      'x-addedInVersion': '3',
      description: 'The account holder associated with the balance account used in the transfer.',
    }),
    amount: AmountSchema.openapi({
      'x-addedInVersion': '1',
      description: 'The amount of the transfer.',
    }),
    balanceAccount: ResourceReferenceSchema.exactOptional().openapi({
      'x-addedInVersion': '3',
      description: 'Contains information about the balance account involved in the transfer.',
    }),
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        deprecated: true,
        'x-deprecatedInVersion': '3',
        'x-deprecatedMessage':
          'Use the [id](https://docs.adyen.com/api-explorer/accounting-webhooks/latest/post/balancePlatform.transfer.created#request-data-balanceAccount-id) in the `balanceAccount` object instead.',
        description:
          'The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).',
      }),
    balances: z
      .array(BalanceMutationSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The list of the latest balance statuses in the transfer.',
      }),
    category: z
      .enum(['bank', 'internal', 'issuedCard', 'platformPayment'])
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The type of transfer.\n\nPossible values:\n\n - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\n- **issuedCard**: Transfer initiated by a Adyen-issued card.\n\n- **platformPayment**: Fund movements related to payments that are acquired for your users.',
      }),
    counterparty: CounterpartyV3Schema.openapi({
      'x-addedInVersion': '3',
      description: 'The other party in the transfer.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '1',
        description:
          'A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.',
      }),
    direction: z
      .enum(['incoming', 'outgoing'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description:
          'The direction of the transfer.\n\nPossible values: **incoming**, **outgoing**.',
      }),
    events: z
      .array(TransferEventSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The list of events leading up to the current status of the transfer.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    modificationMerchantReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: "The capture's merchant reference included in the transfer.",
      }),
    modificationPspReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The capture reference included in the transfer.',
      }),
    panEntryMode: z
      .enum(['chip', 'cof', 'contactless', 'ecommerce', 'magstripe', 'manual', 'token'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'Indicates the method used for entering the PAN to initiate a transaction.\n\nPossible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.',
      }),
    paymentInstrument: PaymentInstrumentSchema.exactOptional().openapi({
      'x-addedInVersion': '3',
      description: 'Contains information about the payment instrument used in the transfer.',
    }),
    paymentInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id).',
      }),
    paymentMerchantReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: "The payment's merchant reference included in the transfer.",
      }),
    priority: z
      .enum(['crossBorder', 'directDebit', 'fast', 'instant', 'regular', 'wire'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.\n\n* **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html)\n\n.* **crossBorder**: High value transfer to receipt in a different country. ',
      }),
    processingType: z
      .enum([
        'atmWithdraw',
        'balanceInquiry',
        'ecommerce',
        'moto',
        'pos',
        'purchaseWithCashback',
        'recurring',
        'token',
      ])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'Contains information about how the payment was processed. For example, **ecommerce** for online or **pos** for in-person payments.',
      }),
    pspPaymentReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The payment reference included in the transfer.',
      }),
    reason: z
      .enum([
        'amountLimitExceded',
        'approved',
        'counterpartyAccountBlocked',
        'counterpartyAccountClosed',
        'counterpartyAccountNotFound',
        'counterpartyAddressRequired',
        'counterpartyBankTimedOut',
        'counterpartyBankUnavailable',
        'error',
        'notEnoughBalance',
        'refusedByCounterpartyBank',
        'routeNotFound',
        'unknown',
      ])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description: 'Additional information about the status of the transfer.',
      }),
    reference: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description:
          "Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.",
      }),
    referenceForBeneficiary: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description:
          ' A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.\n\n Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.\n\n- **internal**: 80 characters\n\n- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.',
      }),
    relayedAuthorisationData: RelayedAuthorisationData_2Schema.exactOptional().openapi({
      'x-addedInVersion': '3',
      description:
        'If you are using relayed authorisation, this object contains information from the relayed authorisation response from your server.',
    }),
    sequenceNumber: z
      .int32()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The sequence number of the transfer notification. The numbers start from 1 and increase with each new notification for a specific transfer.\n\nIt can help you restore the correct sequence of events even if they arrive out of order.',
      }),
    status: z
      .enum([
        'atmWithdrawal',
        'atmWithdrawalReversalPending',
        'atmWithdrawalReversed',
        'authAdjustmentAuthorised',
        'authAdjustmentError',
        'authAdjustmentRefused',
        'authorised',
        'bankTransfer',
        'bankTransferPending',
        'booked',
        'bookingPending',
        'cancelled',
        'capturePending',
        'captureReversalPending',
        'captureReversed',
        'captured',
        'chargeback',
        'chargebackPending',
        'chargebackReversalPending',
        'chargebackReversed',
        'credited',
        'depositCorrection',
        'depositCorrectionPending',
        'dispute',
        'disputeClosed',
        'disputeExpired',
        'disputeNeedsReview',
        'error',
        'expired',
        'failed',
        'fee',
        'feePending',
        'internalTransfer',
        'internalTransferPending',
        'invoiceDeduction',
        'invoiceDeductionPending',
        'manualCorrectionPending',
        'manuallyCorrected',
        'matchedStatement',
        'matchedStatementPending',
        'merchantPayin',
        'merchantPayinPending',
        'merchantPayinReversed',
        'merchantPayinReversedPending',
        'miscCost',
        'miscCostPending',
        'paymentCost',
        'paymentCostPending',
        'received',
        'refundPending',
        'refundReversalPending',
        'refundReversed',
        'refunded',
        'refused',
        'reserveAdjustment',
        'reserveAdjustmentPending',
        'returned',
        'secondChargeback',
        'secondChargebackPending',
        'undefined',
      ])
      .openapi({
        'x-addedInVersion': '2',
        description:
          'The result of the transfer.\n\n For example, **authorised**, **refused**, or **error**.',
      }),
    tracking: TransferNotificationTransferTrackingSchema.exactOptional().openapi({
      'x-addedInVersion': '3',
      description: 'The tracking information for the transfer.',
    }),
    transactionId: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        deprecated: true,
        'x-deprecatedInVersion': '3',
        'x-deprecatedMessage':
          'Use the [transactionId](https://docs.adyen.com/api-explorer/accounting-webhooks/latest/post/balancePlatform.transfer.created#request-data-events-transactionId) in the `events` array instead.',
        description: 'The ID of the transaction that is created based on the transfer.',
      }),
    transactionRulesResult: TransactionRulesResultSchema.exactOptional().openapi({
      'x-addedInVersion': '3',
      description: 'Contains the results of the evaluation of the transaction rules.',
    }),
    type: z
      .enum([
        'atmWithdrawal',
        'atmWithdrawalReversal',
        'balanceAdjustment',
        'balanceRollover',
        'bankTransfer',
        'capture',
        'captureReversal',
        'chargeback',
        'chargebackReversal',
        'depositCorrection',
        'fee',
        'grant',
        'installment',
        'installmentReversal',
        'internalTransfer',
        'invoiceDeduction',
        'leftover',
        'manualCorrection',
        'miscCost',
        'payment',
        'paymentCost',
        'refund',
        'refundReversal',
        'repayment',
        'reserveAdjustment',
        'secondChargeback',
      ])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.',
      }),
    validationFacts: z
      .array(TransferNotificationValidationFactSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information.',
      }),
  })
  .openapi({ required: ['category', 'amount', 'counterparty', 'status'] })
  .openapi('TransferNotificationData')

const TransferNotificationRequestSchema = z
  .object({
    data: TransferNotificationDataSchema.openapi({
      description: 'Contains details about the event.',
    }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    type: z
      .enum(['balancePlatform.transfer.created', 'balancePlatform.transfer.updated'])
      .exactOptional()
      .openapi({ description: 'The type of the notification.' }),
  })
  .openapi({ required: ['environment', 'data'] })
  .openapi('TransferNotificationRequest')

const WebhookAckExample = {
  summary: 'Acknowledge Webhook',
  value: { notificationResponse: '[accepted]' },
}

const PostBalancePlatformTransferCreatedBalancePlatformTransferCreatedExample = {
  summary: 'Incoming transfer',
  description: 'Example webhook for an incoming transfer',
  value: {
    data: {
      accountHolder: {
        description: 'Your description for the account holder',
        id: 'AH00000000000000000000001',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 9999 },
      balanceAccount: { id: 'BA00000000000000000000001' },
      balanceAccountId: 'BA00000000000000000000001',
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      category: 'platformPayment',
      creationDate: '2022-08-15T13:30:05+02:00',
      description: 'Your description for the transfer',
      direction: 'incoming',
      events: [{ bookingDate: '2022-08-15T13:30:18+02:00', mutations: [], status: 'received' }],
      id: '3JY1Y65VWIRGUETT',
      modificationMerchantReference: '<auto>',
      modificationPspReference: '8026605630053940',
      paymentMerchantReference: 'Payment reference',
      pspPaymentReference: 'CWBC43ZX2VTFWR82',
      reason: 'approved',
      reference: 'Your reference for the transfer',
      sequenceNumber: 1,
      status: 'received',
      type: 'capture',
    },
    environment: 'test',
    type: 'balancePlatform.transfer.created',
  },
}

const PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedExample = {
  summary: 'Incoming transfer status changed',
  description: "Example webhook when an incoming transfer's status changes",
  value: {
    data: {
      accountHolder: {
        description: 'Your description for the account holder',
        id: 'AH00000000000000000000001',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 9999 },
      balanceAccount: { id: 'BA00000000000000000000001' },
      balanceAccountId: 'BA00000000000000000000001',
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ currency: 'EUR', reserved: 9999 }],
      category: 'platformPayment',
      creationDate: '2022-08-15T13:30:05+02:00',
      description: 'Your description for the transfer',
      direction: 'incoming',
      events: [
        { bookingDate: '2022-08-15T13:30:18+02:00', mutations: [], status: 'received' },
        {
          bookingDate: '2022-08-15T13:30:18+02:00',
          mutations: [{ currency: 'EUR', reserved: 9999 }],
          status: 'authorised',
        },
      ],
      id: '3JY1Y65VWIRGUETT',
      modificationMerchantReference: '<auto>',
      modificationPspReference: '8026605630053940',
      paymentMerchantReference: 'Payment reference',
      pspPaymentReference: 'CWBC43ZX2VTFWR82',
      reason: 'approved',
      reference: 'Your reference for the transfer',
      sequenceNumber: 2,
      status: 'authorised',
      type: 'capture',
    },
    environment: 'test',
    type: 'balancePlatform.transfer.updated',
  },
}

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const balancePlatformTransferCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.transfer.created',
  tags: ['General'],
  summary: 'Transfer created',
  description: 'Adyen sends this webhook when there are fund movements on your platform.',
  operationId: 'post-balancePlatform.transfer.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TransferNotificationRequestSchema,
          examples: {
            'balancePlatform-transfer-created':
              PostBalancePlatformTransferCreatedBalancePlatformTransferCreatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalancePlatformNotificationResponseSchema,
          examples: { 'balancePlatform-transfer-created': WebhookAckExample },
        },
      },
    },
  },
  security: [{ ApiKeyAuth: [] }],
}

export const balancePlatformTransferUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.transfer.updated',
  tags: ['General'],
  summary: 'Transfer updated',
  description:
    'Adyen sends this webhook when the status of a transfer changes. Use the `data.id` to track the original transfer resource in the [balancePlatform.transfer.created](https://docs.adyen.com/api-explorer/accounting-webhooks/1/post/balancePlatform.transfer.created) webhook.\n\nThe `status` field indicates the event that triggered the webhook. \n\n',
  operationId: 'post-balancePlatform.transfer.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TransferNotificationRequestSchema,
          examples: {
            'balancePlatform-transfer-updated':
              PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalancePlatformNotificationResponseSchema,
          examples: { 'balancePlatform-transfer-updated': WebhookAckExample },
        },
      },
    },
  },
  security: [{ ApiKeyAuth: [] }],
}

import { createRoute, z } from '@hono/zod-openapi'

const ResourceReferenceSchema = z
  .strictObject({
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

const AmountSchema = z
  .strictObject({
    currency: z
      .string()
      .length(3)
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.',
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
          'The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).',
      }),
  })
  .openapi({ required: ['currency', 'value'] })
  .openapi('Amount')

const BalanceMutationSchema = z
  .strictObject({
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
        description:
          "The amount in the payment's currency that is debited or credited on the balance accounting register.",
        'x-addedInVersion': '3',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).',
        'x-addedInVersion': '3',
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
        description:
          "The amount in the payment's currency that is debited or credited on the received accounting register.",
        'x-addedInVersion': '3',
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
        description:
          "The amount in the payment's currency that is debited or credited on the reserved accounting register.",
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: [] })
  .openapi('BalanceMutation')

const BankCategoryDataSchema = z
  .strictObject({
    priority: z
      .enum(['crossBorder', 'fast', 'instant', 'internal', 'regular', 'wire'])
      .exactOptional()
      .openapi({
        description:
          'The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.\n\n* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: For high-value transfers to a recipient in a different country.\n\n* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).',
        'x-addedInVersion': '4',
      }),
    type: z.literal('bank').default('bank').exactOptional().openapi({ description: '**bank**' }),
  })
  .openapi({ required: [] })
  .openapi('BankCategoryData')

const InternalCategoryDataSchema = z
  .strictObject({
    modificationMerchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description: "The capture's merchant reference included in the transfer.",
        'x-addedInVersion': '4',
      }),
    modificationPspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The capture reference included in the transfer.',
        'x-addedInVersion': '4',
      }),
    type: z
      .literal('internal')
      .default('internal')
      .exactOptional()
      .openapi({ description: '**internal**' }),
  })
  .openapi({ required: [] })
  .openapi('InternalCategoryData')

const RelayedAuthorisationDataSchema = z
  .strictObject({
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Contains key-value pairs of your references and descriptions, for example, `customId`:`your-own-custom-field-12345`.',
        'x-addedInVersion': '3',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your reference for the relayed authorisation data.',
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: [] })
  .openapi('RelayedAuthorisationData')

const ThreeDSecureSchema = z
  .strictObject({
    acsTransactionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The transaction identifier for the Access Control Server',
        'x-addedInVersion': '4',
      }),
  })
  .openapi({ required: [] })
  .openapi('ThreeDSecure')

const TransferNotificationValidationFactSchema = z
  .strictObject({
    result: z
      .string()
      .exactOptional()
      .openapi({ description: 'The evaluation result of the validation fact.' }),
    type: z.string().exactOptional().openapi({ description: 'The type of the validation fact.' }),
  })
  .openapi({ required: [] })
  .openapi('TransferNotificationValidationFact')

const IssuedCardSchema = z
  .strictObject({
    authorisationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The authorisation type. For example, **defaultAuthorisation**, **preAuthorisation**, **finalAuthorisation**',
        'x-addedInVersion': '4',
      }),
    networkVariant: z
      .enum(['maestro_us', 'mastercard', 'visa'])
      .exactOptional()
      .openapi({
        description:
          'The card variant associated with the payment network used to route or process the transaction. For single-network cards, this matches the `brandVariant`. For US dual-network cards routed over an alternate network, this value reflects the specific tier or sub-type under that processing network.',
        'x-addedInVersion': '4',
      }),
    panEntryMode: z
      .enum(['chip', 'cof', 'contactless', 'ecommerce', 'magstripe', 'manual', 'token'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the method used for entering the PAN to initiate a transaction.\n\nPossible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.',
        'x-addedInVersion': '4',
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
        description:
          'Contains information about how the payment was processed.\n\nPossible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **purchaseWithCashback**, **recurring**, **token**.',
        'x-addedInVersion': '4',
      }),
    relayedAuthorisationData: RelayedAuthorisationDataSchema.exactOptional().openapi({
      description:
        'If you are using relayed authorisation, this object contains information from the relayed authorisation response from your server.',
      'x-addedInVersion': '4',
    }),
    schemeTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the original payment. This ID is provided by the scheme and can be alphanumeric or numeric, depending on the scheme. The `schemeTraceID` should refer to an original `schemeUniqueTransactionID` provided in an earlier payment (not necessarily processed by Adyen). A `schemeTraceId` is typically available for authorization adjustments or recurring payments.',
        'x-addedInVersion': '4',
      }),
    schemeUniqueTransactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending on the scheme.',
        'x-addedInVersion': '4',
      }),
    threeDSecure: ThreeDSecureSchema.exactOptional().openapi({
      description: 'The data of the result from the 3DS authentication.',
      'x-addedInVersion': '4',
    }),
    type: z
      .literal('issuedCard')
      .default('issuedCard')
      .exactOptional()
      .openapi({ description: '**issuedCard**' }),
    validationFacts: z
      .array(TransferNotificationValidationFactSchema)
      .exactOptional()
      .openapi({
        description:
          'The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information.',
        'x-addedInVersion': '4',
      }),
  })
  .openapi({ required: [] })
  .openapi('IssuedCard')

const PlatformPaymentSchema = z
  .strictObject({
    modificationMerchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description: "The capture's merchant reference included in the transfer.",
        'x-addedInVersion': '4',
      }),
    modificationPspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The capture reference included in the transfer.',
        'x-addedInVersion': '4',
      }),
    paymentMerchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description: "The payment's merchant reference included in the transfer.",
        'x-addedInVersion': '4',
      }),
    platformPaymentType: z
      .enum([
        'AcquiringFees',
        'AdyenCommission',
        'AdyenFees',
        'AdyenMarkup',
        'BalanceAccount',
        'ChargebackRemainder',
        'Commission',
        'DCCMarkup',
        'DCCPlatformCommission',
        'Default',
        'Interchange',
        'PaymentFee',
        'Remainder',
        'SchemeFee',
        'Surcharge',
        'Tip',
        'TopUp',
        'VAT',
      ])
      .exactOptional()
      .openapi({
        description:
          "Specifies the nature of the transfer. This parameter helps categorize transfers so you can reconcile transactions at a later time, using the Balance Platform Accounting Report for [marketplaces](https://docs.adyen.com/marketplaces/reports-and-fees/balance-platform-accounting-report/) or [platforms](https://docs.adyen.com/platforms/reports-and-fees/balance-platform-accounting-report/).\n\nPossible values:\n\n* **AcquiringFees**: The acquiring fee (the aggregated amount of interchange and scheme fee) incurred on a transaction.\n\n* **AdyenCommission**: The transaction fee due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing).\n\n* **AdyenFees**: All transaction fees due to Adyen. This is the aggregated amount of Adyen's commission and markup.\n\n* **AdyenMarkup**: The transaction fee due to Adyen under [Interchange++ pricing](https://www.adyen.com/pricing).\n\n* **BalanceAccount**: The amount booked to your user after the deduction of the relevant fees.\n\n* **Commission**: Your platform's or marketplace's commission on a transaction.\n\n* **DCCPlatformCommission**: **deprecated** The Dynamic Currency Conversion (DCC) fee on a transaction.\n\n* **DCCMarkup**: The Dynamic Currency Conversion (DCC) fee on a transaction.\n\n* **Interchange**: The interchange fee (fee paid to the issuer) incurred on a transaction.\n\n* **PaymentFee**: The aggregated amount of all transaction fees.\n\n* **Remainder**: The leftover amount after currency conversion.\n\n* **SchemeFee**: The scheme fee incurred on a transaction.\n\n* **Surcharge**: The surcharge paid by the customer on a transaction.\n\n* **Tip**: The tip paid by the customer.\n\n* **TopUp**: An incoming transfer to top up your user's balance account.\n\n* **VAT**: The value-added tax charged on the payment.",
        'x-addedInVersion': '4',
      }),
    pspPaymentReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment reference included in the transfer.',
        'x-addedInVersion': '4',
      }),
    type: z
      .literal('platformPayment')
      .default('platformPayment')
      .exactOptional()
      .openapi({ description: '**platformPayment**' }),
  })
  .openapi({ required: [] })
  .openapi('PlatformPayment')

const AddressSchema = z
  .strictObject({
    city: z
      .string()
      .min(3)
      .exactOptional()
      .openapi({
        description:
          'The name of the city.\n\nSupported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \\ |** and Space.\n\n> Required when the `category` is **card**.\n',
      }),
    country: z
      .string()
      .openapi({
        description:
          'The two-character ISO 3166-1 alpha-2 country code. For example, **US**, **NL**, or **GB**.',
      }),
    line1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first line of the street address.\n\nSupported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \\ |** and Space.\n\n> Required when the `category` is **card**.\n',
      }),
    line2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The second line of the street address.\n\nSupported characters: **[a-z] [A-Z] [0-9] . - — / # , ’ ° ( ) : ; [ ] & \\ |** and Space.\n\n> Required when the `category` is **card**.\n',
      }),
    postalCode: z
      .string()
      .min(3)
      .exactOptional()
      .openapi({
        description:
          'The postal code.\nMaximum length:\n* 5 digits for an address in the US.\n* 10 characters for an address in all other countries.\n\nSupported characters: **[a-z] [A-Z] [0-9]** and Space.\n\n> Required for addresses in the US.\n',
      }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '   The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n\n   > Required for the US and Canada.\n',
      }),
  })
  .openapi({ required: ['country'] })
  .openapi('Address')

const PartyIdentificationSchema = z
  .strictObject({
    address: AddressSchema.exactOptional().openapi({
      description: 'The address of the bank account or card owner.',
    }),
    dateOfBirth: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.\n\nAllowed only when `type` is **individual**.',
      }),
    email: z
      .string()
      .max(254)
      .exactOptional()
      .openapi({
        description:
          'The email address of the organization or individual. Maximum length: 254 characters.',
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first name of the individual.\n\nSupported characters: [a-z] [A-Z] - . / — and space.\n\nThis parameter is:\n- Allowed only when `type` is **individual**.\n- Required when `category` is **card**.',
      }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full name of the entity that owns the bank account or card.\n\nSupported characters: [a-z] [A-Z] [0-9] , . ; : - — / \\ + & ! ? @ ( ) " \' and space.\n\nRequired when `category` is **bank**.',
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last name of the individual.\n\nSupported characters: [a-z] [A-Z] - . / — and space.\n\nThis parameter is:\n- Allowed only when `type` is **individual**.\n- Required when `category` is **card**.',
      }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({
        description:
          "A unique reference to identify the party or counterparty involved in the transfer. For example, your client's unique wallet or payee ID.\n\nRequired when you include `cardIdentification.storedPaymentMethodId`.",
      }),
    type: z
      .enum(['individual', 'organization', 'unknown'])
      .default('unknown')
      .exactOptional()
      .openapi({
        description:
          'The type of entity that owns the bank account or card.\n\nPossible values: **individual**, **organization**, or **unknown**.\n\nRequired when `category` is **card**. In this case, the value must be **individual**.',
      }),
    url: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'The URL of the organization or individual. Maximum length: 255 characters.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PartyIdentification')

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
  .openapi({ required: ['accountNumber', 'bsbCode', 'type'] })
  .openapi('AULocalAccountIdentification')

const BRLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(1)
      .max(10)
      .openapi({ description: 'The bank account number, without separators or whitespace.' }),
    bankCode: z
      .string()
      .length(3)
      .openapi({ description: 'The 3-digit bank code, with leading zeros.' }),
    branchNumber: z
      .string()
      .min(1)
      .max(4)
      .openapi({
        description: 'The bank account branch number, without separators or whitespace.',
      }),
    ispb: z
      .string()
      .length(8)
      .exactOptional()
      .openapi({ description: 'The 8-digit ISPB, with leading zeros.' }),
    type: z.literal('brLocal').default('brLocal').openapi({ description: '**brLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'bankCode', 'branchNumber', 'type'] })
  .openapi('BRLocalAccountIdentification')

const CALocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(5)
      .max(12)
      .openapi({
        description: 'The 5- to 12-digit bank account number, without separators or whitespace.',
      }),
    accountType: z
      .enum(['checking', 'savings'])
      .default('checking')
      .exactOptional()
      .openapi({
        description:
          'The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.',
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
  .openapi({ required: ['accountNumber', 'institutionNumber', 'transitNumber', 'type'] })
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
  .openapi({ required: ['accountNumber', 'bankCode', 'type'] })
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
  .openapi({ required: ['accountNumber', 'bankCode', 'type'] })
  .openapi('DKLocalAccountIdentification')

const HKLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(9)
      .max(17)
      .openapi({
        description:
          'The 9- to 17-digit bank account number, without separators or whitespace. Starts with the 3-digit branch code.',
      }),
    clearingCode: z
      .string()
      .length(3)
      .openapi({ description: 'The 3-digit clearing code, without separators or whitespace.' }),
    type: z.literal('hkLocal').default('hkLocal').openapi({ description: '**hkLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'clearingCode', 'type'] })
  .openapi('HKLocalAccountIdentification')

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
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('HULocalAccountIdentification')

const IbanAccountIdentificationSchema = z
  .strictObject({
    bic: z
      .string()
      .exactOptional()
      .openapi({ description: "The bank's 8- or 11-character BIC or SWIFT code." }),
    iban: z
      .string()
      .openapi({
        description:
          'The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.',
      }),
    type: z.literal('iban').default('iban').openapi({ description: '**iban**' }),
  })
  .openapi({ required: ['iban', 'type'] })
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
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('NOLocalAccountIdentification')

const NZLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(15)
      .max(16)
      .openapi({
        description:
          'The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits are the branch number, the next 7 digits are the account number, and the final 2-3 digits are the suffix.',
      }),
    type: z.literal('nzLocal').default('nzLocal').openapi({ description: '**nzLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('NZLocalAccountIdentification')

const AdditionalBankIdentificationSchema = z
  .strictObject({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the additional bank identification.' }),
    type: z
      .enum(['auBsbCode', 'caRoutingNumber', 'gbSortCode', 'usRoutingNumber'])
      .exactOptional()
      .openapi({
        description:
          'The type of additional bank identification, depending on the country.\n\nPossible values:\n\n * **auBsbCode**: The 6-digit [Australian Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or spaces.\n * **caRoutingNumber**: The 9-digit [Canadian routing number](https://en.wikipedia.org/wiki/Routing_number_(Canada)), in EFT format, without separators or spaces.\n * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces\n * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdditionalBankIdentification')

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
  .openapi({ required: ['accountNumber', 'bic', 'type'] })
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
  .openapi({ required: ['accountNumber', 'type'] })
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
  .openapi({ required: ['accountNumber', 'clearingNumber', 'type'] })
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
  .openapi({ required: ['accountNumber', 'sortCode', 'type'] })
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
  .openapi({ required: ['accountNumber', 'routingNumber', 'type'] })
  .openapi('USLocalAccountIdentification')

const BankAccountV3Schema = z
  .strictObject({
    accountHolder: PartyIdentificationSchema.openapi({
      description: 'Information about the owner of the bank account.',
    }),
    accountIdentification: z
      .xor([
        AULocalAccountIdentificationSchema,
        BRLocalAccountIdentificationSchema,
        CALocalAccountIdentificationSchema,
        CZLocalAccountIdentificationSchema,
        DKLocalAccountIdentificationSchema,
        HKLocalAccountIdentificationSchema,
        HULocalAccountIdentificationSchema,
        IbanAccountIdentificationSchema,
        NOLocalAccountIdentificationSchema,
        NZLocalAccountIdentificationSchema,
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
        discriminator: {
          propertyName: 'type',
          mapping: {
            iban: '#/components/schemas/IbanAccountIdentification',
            numberAndBic: '#/components/schemas/NumberAndBicAccountIdentification',
            auLocal: '#/components/schemas/AULocalAccountIdentification',
            czLocal: '#/components/schemas/CZLocalAccountIdentification',
            noLocal: '#/components/schemas/NOLocalAccountIdentification',
            plLocal: '#/components/schemas/PLLocalAccountIdentification',
            huLocal: '#/components/schemas/HULocalAccountIdentification',
            seLocal: '#/components/schemas/SELocalAccountIdentification',
            sgLocal: '#/components/schemas/SGLocalAccountIdentification',
            ukLocal: '#/components/schemas/UKLocalAccountIdentification',
            usLocal: '#/components/schemas/USLocalAccountIdentification',
            brLocal: '#/components/schemas/BRLocalAccountIdentification',
            dkLocal: '#/components/schemas/DKLocalAccountIdentification',
            caLocal: '#/components/schemas/CALocalAccountIdentification',
            nzLocal: '#/components/schemas/NZLocalAccountIdentification',
            hkLocal: '#/components/schemas/HKLocalAccountIdentification',
          },
        },
      }),
    storedPaymentMethodId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique token that identifies the stored bank account details of the counterparty for a payout.',
      }),
  })
  .openapi({ required: ['accountHolder', 'accountIdentification'] })
  .openapi('BankAccountV3')

const CardIdentificationSchema = z
  .strictObject({
    expiryMonth: z
      .string()
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'The expiry month of the card.\n\nFormat: two digits. Add a leading zero for single-digit months. For example:\n* 03 = March\n* 11 = November',
      }),
    expiryYear: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({
        description: 'The expiry year of the card.\n\nFormat: four digits. For example: 2020',
      }),
    issueNumber: z
      .string()
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({
        description: 'The issue number of the card. Applies only to some UK debit cards.',
      }),
    number: z
      .string()
      .min(4)
      .max(19)
      .exactOptional()
      .openapi({
        description:
          'The card number without any separators.\n\nFor security, the response only includes the last four digits of the card number.',
      }),
    startMonth: z
      .string()
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'The month when the card was issued. Applies only to some UK debit cards.\n\nFormat: two digits. Add a leading zero for single-digit months. For example:\n* 03 = March\n* 11 = November',
      }),
    startYear: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({
        description:
          'The year when the card was issued. Applies only to some UK debit cards.\n\nFormat: four digits. For example: 2020',
      }),
    storedPaymentMethodId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique [token](/payouts/payout-service/pay-out-to-cards/manage-card-information#save-card-details) created to identify the counterparty.\n\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('CardIdentification')

const CardSchema = z
  .strictObject({
    cardHolder: PartyIdentificationSchema.openapi({
      description: 'Contains information about the cardholder.',
    }),
    cardIdentification: CardIdentificationSchema.openapi({
      description: 'Contains the identification details of the card.',
    }),
  })
  .openapi({ required: ['cardHolder', 'cardIdentification'] })
  .openapi('Card')

const TransferNotificationMerchantDataSchema = z
  .strictObject({
    acquirerId: z
      .string()
      .exactOptional()
      .openapi({ description: "The unique identifier of the merchant's acquirer." }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city where the merchant is located.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country where the merchant is located.' }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The two-character country code of the merchant's location, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.",
      }),
    mcc: z.string().exactOptional().openapi({ description: 'The merchant category code.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the merchant.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The name of the merchant's shop or service." }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code of the merchant.' }),
  })
  .openapi({ required: [] })
  .openapi('TransferNotificationMerchantData')

const TransferNotificationCounterPartySchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).',
      }),
    bankAccount: BankAccountV3Schema.exactOptional().openapi({
      description: 'Contains information about the counterparty bank account.',
    }),
    card: CardSchema.exactOptional().openapi({
      description: 'Contains information about the counterparty card.',
    }),
    merchant: TransferNotificationMerchantDataSchema.exactOptional().openapi({
      description: 'Contains information about the merchant.',
    }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransferNotificationCounterParty')

const DirectDebitInformationSchema = z
  .strictObject({
    dateOfSignature: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date when the direct debit mandate was accepted by your user, in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format.',
      }),
    dueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: "The date when the funds are deducted from your user's balance account.",
      }),
    mandateId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your unique identifier for the direct debit mandate.' }),
    sequenceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Identifies the direct debit transfer's type.\nPossible values: **OneOff**, **First**, **Recurring**, **Final**.",
      }),
  })
  .openapi({ required: [] })
  .openapi('DirectDebitInformation')

const AmountAdjustmentSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({
      description: 'The adjustment amount.',
      'x-addedInVersion': '3',
    }),
    amountAdjustmentType: z
      .enum(['atmMarkup', 'authHoldReserve', 'exchange', 'forexMarkup'])
      .exactOptional()
      .openapi({
        description:
          'The type of markup that is applied to an authorised payment.\n\nPossible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.',
        'x-addedInVersion': '3',
      }),
    basepoints: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The basepoints associated with the applied markup.',
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: [] })
  .openapi('AmountAdjustment')

const InterchangeDataSchema = z
  .strictObject({
    interchangeAmount: AmountSchema.exactOptional().openapi({
      description: 'The currency and value of the adjusted interchange fee.',
    }),
    interchangeRateIndicator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A 3-character alphanumeric code assigned by Visa that identifies the specific interchange reimbursement program a transaction qualified for. The code is assigned based on the card type, entry mode, and security data provided.',
      }),
    type: z
      .literal('interchangeData')
      .default('interchangeData')
      .openapi({
        description:
          'The type of events data. \n\nPossible values: \n\n - **interchangeData**: information about the interchange fee applied to a transaction.',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('InterchangeData')

const IssuingTransactionDataSchema = z
  .strictObject({
    captureCycleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'captureCycleId associated with transfer event.' }),
    type: z
      .literal('issuingTransactionData')
      .default('issuingTransactionData')
      .openapi({
        description:
          'The type of events data. \n\nPossible values: \n\n - **issuingTransactionData**: issuing transaction data',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('IssuingTransactionData')

const LegSchema = z
  .strictObject({
    arrivalAirportCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IATA 3-letter airport code of the destination airport. This field is required if the airline data includes leg details.',
      }),
    basicFareCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The basic fare code for this leg.' }),
    carrierCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'IATA code of the carrier operating the flight.' }),
    departureAirportCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IATA three-letter airport code of the departure airport. This field is required if the airline data includes leg details',
      }),
    departureDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The flight departure date.' }),
    flightNumber: z.string().exactOptional().openapi({ description: 'The flight identifier.' }),
  })
  .openapi({ required: [] })
  .openapi('Leg')

const AirlineSchema = z
  .strictObject({
    legs: z
      .array(LegSchema)
      .exactOptional()
      .openapi({ description: 'Details about the flight legs for this ticket.' }),
    ticketNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The ticket's unique identifier" }),
  })
  .openapi({ required: [] })
  .openapi('Airline')

const LodgingSchema = z
  .strictObject({
    checkInDate: z.string().exactOptional().openapi({ description: 'The check-in date.' }),
    numberOfNights: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of nights the room is booked for.' }),
  })
  .openapi({ required: [] })
  .openapi('Lodging')

const MerchantPurchaseDataSchema = z
  .strictObject({
    airline: AirlineSchema.exactOptional().openapi({ description: 'Airline information.' }),
    lodging: z
      .array(LodgingSchema)
      .exactOptional()
      .openapi({ description: 'Lodging information.' }),
    type: z
      .literal('merchantPurchaseData')
      .default('merchantPurchaseData')
      .openapi({
        description:
          'The type of events data. \n\nPossible values: \n\n - **merchantPurchaseData**: merchant purchase data',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('MerchantPurchaseData')

const ExternalReasonSchema = z
  .strictObject({
    code: z.string().exactOptional().openapi({ description: 'The reason code.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the reason code.' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'The namespace for the reason code.' }),
  })
  .openapi({ required: [] })
  .openapi('ExternalReason')

const ModificationSchema = z
  .strictObject({
    direction: z
      .string()
      .exactOptional()
      .openapi({ description: 'The direction of the money movement.', 'x-addedInVersion': '3' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Our reference for the modification.', 'x-addedInVersion': '3' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your reference for the modification, used internally within your platform.',
        'x-addedInVersion': '3',
      }),
    status: z
      .enum([
        'approvalPending',
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
        'capturedExternally',
        'chargeback',
        'chargebackExternally',
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
        'interchangeAdjusted',
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
        'pending',
        'pendingApproval',
        'pendingExecution',
        'received',
        'refundPending',
        'refundReversalPending',
        'refundReversed',
        'refunded',
        'refundedExternally',
        'refused',
        'rejected',
        'reserveAdjustment',
        'reserveAdjustmentPending',
        'returned',
        'reversalReceived',
        'reversed',
        'secondChargeback',
        'secondChargebackPending',
        'undefined',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the transfer event.', 'x-addedInVersion': '3' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of transfer modification.', 'x-addedInVersion': '3' }),
  })
  .openapi({ required: [] })
  .openapi('Modification')

const UKFpsTracingDataSchema = z
  .strictObject({
    fpid: z
      .string()
      .openapi({
        description:
          'The FPS trace number. This is a unique identifier assigned to transfers processed by [FPS](https://www.bankofengland.co.uk/payment-systems/services/faster-payments-service).',
      }),
    type: z.literal('ukFps').default('ukFps').openapi({ description: '**ukFps**' }),
  })
  .openapi({ required: ['fpid', 'type'] })
  .openapi('UKFpsTracingData')

const USAchTracingDataSchema = z
  .strictObject({
    traceNumber: z
      .string()
      .openapi({
        description:
          'The ACH trace number. This is a unique 15-digit identifier assigned to transfers processed by [ACH](https://fiscal.treasury.gov/payments-from-government/automated-clearing-house-ach).',
      }),
    type: z.literal('usAch').default('usAch').openapi({ description: '**usAch**' }),
  })
  .openapi({ required: ['traceNumber', 'type'] })
  .openapi('USAchTracingData')

const ConfirmationTrackingDataSchema = z
  .strictObject({
    status: z
      .enum(['credited', 'accepted'])
      .openapi({
        description:
          "The status of the transfer.\n\nPossible values:\n\n - **credited**: the funds are credited to your user's transfer instrument or bank account.- **accepted**: the request is accepted by the integration.",
      }),
    type: z
      .literal('confirmation')
      .default('confirmation')
      .openapi({
        description:
          "The type of the tracking event.\n\nPossible values:\n\n - **confirmation**: the transfer passed Adyen's internal review.",
      }),
  })
  .openapi({ required: ['status', 'type'] })
  .openapi('ConfirmationTrackingData')

const EstimationTrackingDataSchema = z
  .strictObject({
    estimatedArrivalTime: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The estimated time the beneficiary should have access to the funds.',
      }),
    type: z
      .literal('estimation')
      .default('estimation')
      .openapi({
        description:
          'The type of tracking event. \n\nPossible values: \n\n- **estimation**: the estimated date and time of when the funds will be credited has been determined.',
      }),
  })
  .openapi({ required: ['estimatedArrivalTime', 'type'] })
  .openapi('EstimationTrackingData')

const InternalReviewTrackingDataSchema = z
  .strictObject({
    reason: z
      .literal('refusedForRegulatoryReasons')
      .exactOptional()
      .openapi({
        description:
          "The reason why the transfer failed Adyen's internal review. \n\nPossible values:\n\n- **refusedForRegulatoryReasons**: the transfer does not comply with Adyen's risk policy. For more information, [contact the Support Team](https://www.adyen.help/hc/en-us/requests/new). ",
      }),
    status: z
      .enum(['pending', 'failed'])
      .openapi({
        description:
          "The status of the transfer.\n\nPossible values:\n\n - **pending**: the transfer is under internal review by Adyen.\n\n- **failed**: the transfer failed Adyen's internal review. For details, see `reason`.\n\n",
      }),
    type: z
      .literal('internalReview')
      .default('internalReview')
      .openapi({
        description:
          "The type of tracking event. \n\nPossible values: \n\n - **internalReview**: the transfer was flagged because it does not comply with Adyen's risk policy.",
      }),
  })
  .openapi({ required: ['status', 'type'] })
  .openapi('InternalReviewTrackingData')

const TransferEventSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({
      description:
        'The original journal amount. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations.',
      'x-addedInVersion': '3',
    }),
    amountAdjustments: z
      .array(AmountAdjustmentSchema)
      .exactOptional()
      .openapi({
        description:
          'The amount adjustments in this transfer. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations.',
        'x-addedInVersion': '3',
      }),
    arn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Scheme unique arn identifier useful for tracing captures, chargebacks, refunds, etc.',
        'x-addedInVersion': '4',
      }),
    bookingDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date when the transfer request was sent.',
        'x-addedInVersion': '3',
      }),
    estimatedArrivalTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The estimated time when the beneficiary should have access to the funds.',
        'x-addedInVersion': '3',
      }),
    eventsData: z
      .array(
        z
          .discriminatedUnion('type', [
            InterchangeDataSchema,
            IssuingTransactionDataSchema,
            MerchantPurchaseDataSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                merchantPurchaseData: '#/components/schemas/MerchantPurchaseData',
                issuingTransactionData: '#/components/schemas/IssuingTransactionData',
                interchangeData: '#/components/schemas/InterchangeData',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({ description: 'A list of event data.', 'x-addedInVersion': '4' }),
    externalReason: ExternalReasonSchema.exactOptional().openapi({
      description: 'The external reason for the transfer status.',
      'x-addedInVersion': '3',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the transfer event.',
        'x-addedInVersion': '3',
      }),
    modification: ModificationSchema.exactOptional().openapi({
      description:
        'The payment modification. Only applicable for [returned internal transfers](https://docs.adyen.com/platforms/internal-fund-transfers/internal-transfer-webhooks/#returned-internal-transfer).',
      'x-addedInVersion': '3',
    }),
    mutations: z
      .array(BalanceMutationSchema)
      .exactOptional()
      .openapi({
        description: 'The list of balance mutations per event.',
        'x-addedInVersion': '3',
      }),
    originalAmount: AmountSchema.exactOptional().openapi({
      description:
        'The amount in the original currency. Only applicable for [issuing](https://docs.adyen.com/issuing/) integrations. ',
      'x-addedInVersion': '3',
    }),
    reason: z
      .enum([
        'accountHierarchyNotActive',
        'amountLimitExceeded',
        'approvalExpired',
        'approved',
        'avsDeclined',
        'balanceAccountTemporarilyBlockedByTransactionRule',
        'blockCard',
        'callReferral',
        'cancelled',
        'captureCard',
        'cardExpired',
        'cardholderAuthenticationRequired',
        'cashbackAmountExceedsLimit',
        'cavvDeclined',
        'contactlessFallback',
        'contactlessLimitReached',
        'counterpartyAccountBlocked',
        'counterpartyAccountClosed',
        'counterpartyAccountNotFound',
        'counterpartyAddressRequired',
        'counterpartyBankTimedOut',
        'counterpartyBankUnavailable',
        'cryptographicFailure',
        'cvcDeclined',
        'declined',
        'declinedByBapValidation',
        'declinedByTransactionRule',
        'declinedNonGeneric',
        'directDebitNotSupported',
        'doNotHonor',
        'domesticDebitTransactionNotAllowed',
        'duplicateTransmissionDetected',
        'error',
        'formatError',
        'fraud',
        'fraudCancelled',
        'honorWithId',
        'internalTimeout',
        'invalidAccount',
        'invalidAmount',
        'invalidAuthorizationLifeCycle',
        'invalidCard',
        'invalidExpiryDate',
        'invalidFromAccount',
        'invalidIssuer',
        'invalidMerchant',
        'invalidPin',
        'invalidToAccount',
        'invalidTransaction',
        'issuerSuspectedFraud',
        'lostCard',
        'mobilePinRequired',
        'noCheckingAccount',
        'noSavingsAccount',
        'not3dAuthenticated',
        'notEnoughBalance',
        'notSubmitted',
        'notSupported',
        'partiallyApproved',
        'pending',
        'pendingApproval',
        'pendingExecution',
        'pinNotChanged',
        'pinRequired',
        'pinTriesExceeded',
        'pinValidationNotPossible',
        'purchaseAmountOnlyNoCashBack',
        'refusedByCounterpartyBank',
        'refusedByCustomer',
        'restrictedCard',
        'revocationOfAuth',
        'routeNotFound',
        'scaAuthenticationRequired',
        'scaFailed',
        'schemeAdvice',
        'securityViolation',
        'shopperCancelled',
        'stolenCard',
        'threedsDynamicLinkingMismatch',
        'transactionNotPermitted',
        'transferInstrumentDoesNotExist',
        'unableToRouteTransaction',
        'unknown',
        'withdrawalAmountExceeded',
        'withdrawalCountExceeded',
      ])
      .exactOptional()
      .openapi({ description: 'The reason for the transfer status.', 'x-addedInVersion': '3' }),
    status: z
      .enum([
        'approvalPending',
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
        'capturedExternally',
        'chargeback',
        'chargebackExternally',
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
        'interchangeAdjusted',
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
        'pending',
        'pendingApproval',
        'pendingExecution',
        'received',
        'refundPending',
        'refundReversalPending',
        'refundReversed',
        'refunded',
        'refundedExternally',
        'refused',
        'rejected',
        'reserveAdjustment',
        'reserveAdjustmentPending',
        'returned',
        'reversalReceived',
        'reversed',
        'secondChargeback',
        'secondChargebackPending',
        'undefined',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the transfer event.', 'x-addedInVersion': '3' }),
    tracingData: z
      .discriminatedUnion('type', [UKFpsTracingDataSchema, USAchTracingDataSchema])
      .exactOptional()
      .openapi({
        description: 'Additional tracing information for the tracing event.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            usAch: '#/components/schemas/USAchTracingData',
            ukFps: '#/components/schemas/UKFpsTracingData',
          },
        },
        'x-addedInVersion': '4',
      }),
    trackingData: z
      .discriminatedUnion('type', [
        ConfirmationTrackingDataSchema,
        EstimationTrackingDataSchema,
        InternalReviewTrackingDataSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'Additional information for the tracking event.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            estimation: '#/components/schemas/EstimationTrackingData',
            confirmation: '#/components/schemas/ConfirmationTrackingData',
            internalReview: '#/components/schemas/InternalReviewTrackingData',
          },
        },
        'x-addedInVersion': '3',
      }),
    transactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the transaction that is related to this accounting event. Only sent for events of type **accounting** where the balance changes.',
        'x-addedInVersion': '3',
      }),
    type: z
      .enum(['accounting', 'tracing', 'tracking'])
      .exactOptional()
      .openapi({
        description:
          'The type of the transfer event. Possible values: **accounting**, **tracing**, **tracking**.',
        'x-addedInVersion': '3',
      }),
    updateDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date when the tracking status was updated.',
        'x-addedInVersion': '3',
      }),
    valueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date when the funds are expected to be deducted from or credited to the balance account. This date can be in either the past or future.',
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransferEvent')

const ExecutionDateSchema = z
  .strictObject({
    date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date when the transfer will be processed. This date must be:\n* Within 30 days of the current date.\n* In the [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html) **YYYY-MM-DD**. For example: 2025-01-31',
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timezone that applies to the execution date. Use a timezone identifier from the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).\n\nExample: **America/Los_Angeles**.\n Default value: **Europe/Amsterdam**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ExecutionDate')

const NetworkReasonSchema = z
  .strictObject({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The network-specific reason code. Use `namespace` to identify the code set.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable description of the reason code.' }),
    namespace: z
      .enum([
        'iso8583ResponseCode',
        'ukFpsRejectionCode',
        'ukFpsReturnReasonCode',
        'usAchCorrectionReasonCode',
        'usAchReturnReasonCode',
      ])
      .exactOptional()
      .openapi({
        description:
          'The category of codes that `code` belongs to. The `namespace` identifies the payment network and the type of reason\n\nPossible values:\n*  **ukFpsRejectionCode** : Reason code for a rejected Faster Payments transfer.\n*  **ukFpsReturnReasonCode** : Reason code for a returned Faster Payments transfer.\n*  **usAchReturnReasonCode** : Reason code for a returned ACH transfer.\n*  **usAchCorrectionReasonCode** : Reason code for an ACH Notification of Change.\n*  **iso8583ResponseCode** : ISO 8583 response code for a card transfer.\n\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('NetworkReason')

const PaymentInstrumentSchema = z
  .strictObject({
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
        description: 'The type of wallet that the network token is associated with.',
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: [] })
  .openapi('PaymentInstrument')

const TransferReviewSchema = z
  .strictObject({
    numberOfApprovalsRequired: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Shows the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer.',
      }),
    scaOnApproval: z
      .enum(['completed', 'notApplicable', 'required'])
      .exactOptional()
      .openapi({
        description:
          'Shows the status of the Strong Customer Authentication (SCA) process.\n\nPossible values: **required**, **notApplicable**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransferReview')

const TransactionRuleReferenceSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
    outcomeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The outcome type of the rule.', 'x-addedInVersion': '4' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference for the resource.' }),
    score: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The transaction score determined by the rule. Returned only when `outcomeType` is **scoreBased**.',
        'x-addedInVersion': '4',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRuleReference')

const TransactionRuleSourceSchema = z
  .strictObject({
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
  .strictObject({
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'An explanation about why the transaction rule failed.' }),
    transactionRule: TransactionRuleReferenceSchema.exactOptional().openapi({
      description: 'Contains information about the transaction rule.',
    }),
    transactionRuleSource: TransactionRuleSourceSchema.exactOptional().openapi({
      description: 'Contains information about the resource to which the transaction rule applies.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TransactionEventViolation')

const TransactionRulesResultSchema = z
  .strictObject({
    advice: z
      .string()
      .exactOptional()
      .openapi({ description: 'The advice given by the Risk analysis.' }),
    allHardBlockRulesPassed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the transaction passed the evaluation for all hardblock rules',
        'x-addedInVersion': '4',
      }),
    score: z.int32().exactOptional().openapi({ description: 'The score of the Risk analysis.' }),
    triggeredTransactionRules: z
      .array(TransactionEventViolationSchema)
      .exactOptional()
      .openapi({
        description: 'Array containing all the transaction rules that the transaction triggered.',
        'x-addedInVersion': '4',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRulesResult')

const FundingInstrumentSchema = z
  .strictObject({
    cardIdentification: CardIdentificationSchema.exactOptional().openapi({
      description:
        'Card details used for the transfer, such as the Primary Account Number (PAN) or stored payment method ID. Required if `sourceOfFunds` is **DEBIT**. Provide either:\n - `storedPaymentMethodId` or \n - `expiryMonth`, `expiryYear`, and `number`.',
    }),
    networkPaymentReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique reference assigned by the card network for the pay-in transaction.',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your internal reference that identifies this funding instrument. Required if `sourceOfFunds` is **DEPOSIT_ACCOUNT**.',
      }),
    sourceOfFunds: z
      .enum(['DEBIT', 'DEPOSIT_ACCOUNT'])
      .exactOptional()
      .openapi({
        description:
          'Indicates where the funds used for the transfer originated. Possible values are:\n- **DEBIT** for card-to-card transfers.\n- **DEPOSIT_ACCOUNT** for wallet-to-card transfers.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FundingInstrument')

const UltimatePartyIdentificationSchema = z
  .strictObject({
    address: AddressSchema.exactOptional().openapi({
      description: 'The address of the bank account or card owner.',
    }),
    dateOfBirth: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**.\n\nAllowed only when `type` is **individual**.',
      }),
    email: z
      .string()
      .max(254)
      .exactOptional()
      .openapi({
        description:
          'The email address of the organization or individual. Maximum length: 254 characters.',
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first name of the individual.\n\nSupported characters: [a-z] [A-Z] - . / — and space.\n\nThis parameter is:\n- Allowed only when `type` is **individual**.\n- Required when `category` is **card**.',
      }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full name of the entity that owns the bank account or card.\n\nSupported characters: [a-z] [A-Z] [0-9] , . ; : - — / \\ + & ! ? @ ( ) " \' and space.\n\nRequired when `category` is **bank**.',
      }),
    fundingInstrument: FundingInstrumentSchema.exactOptional().openapi({
      description: 'Details of the card or token used to fund the pay-in transaction.',
    }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last name of the individual.\n\nSupported characters: [a-z] [A-Z] - . / — and space.\n\nThis parameter is:\n- Allowed only when `type` is **individual**.\n- Required when `category` is **card**.',
      }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({
        description:
          "A unique reference to identify the party or counterparty involved in the transfer. For example, your client's unique wallet or payee ID.\n\nRequired when you include `cardIdentification.storedPaymentMethodId`.",
      }),
    type: z
      .enum(['individual', 'organization', 'unknown'])
      .default('unknown')
      .exactOptional()
      .openapi({
        description:
          'The type of entity that owns the bank account or card.\n\nPossible values: **individual**, **organization**, or **unknown**.\n\nRequired when `category` is **card**. In this case, the value must be **individual**.',
      }),
    url: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'The URL of the organization or individual. Maximum length: 255 characters.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UltimatePartyIdentification')

type TransferDataType = {
  accountHolder?: z.infer<typeof ResourceReferenceSchema>
  amount: z.infer<typeof AmountSchema>
  balanceAccount?: z.infer<typeof ResourceReferenceSchema>
  balancePlatform?: string
  balances?: z.infer<typeof BalanceMutationSchema>[]
  category: 'bank' | 'card' | 'interest' | 'internal' | 'issuedCard' | 'platformPayment' | 'topUp'
  categoryData?:
    | z.infer<typeof BankCategoryDataSchema>
    | z.infer<typeof InternalCategoryDataSchema>
    | z.infer<typeof IssuedCardSchema>
    | z.infer<typeof PlatformPaymentSchema>
  counterparty?: z.infer<typeof TransferNotificationCounterPartySchema>
  createdAt?: string
  creationDate?: string
  description?: string
  directDebitInformation?: z.infer<typeof DirectDebitInformationSchema>
  direction?: 'incoming' | 'outgoing'
  eventId?: string
  events?: z.infer<typeof TransferEventSchema>[]
  executionDate?: z.infer<typeof ExecutionDateSchema>
  externalReason?: z.infer<typeof ExternalReasonSchema>
  id?: string
  networkReason?: z.infer<typeof NetworkReasonSchema>
  paymentInstrument?: z.infer<typeof PaymentInstrumentSchema>
  reason?:
    | 'accountHierarchyNotActive'
    | 'amountLimitExceeded'
    | 'approvalExpired'
    | 'approved'
    | 'avsDeclined'
    | 'balanceAccountTemporarilyBlockedByTransactionRule'
    | 'blockCard'
    | 'callReferral'
    | 'cancelled'
    | 'captureCard'
    | 'cardExpired'
    | 'cardholderAuthenticationRequired'
    | 'cashbackAmountExceedsLimit'
    | 'cavvDeclined'
    | 'contactlessFallback'
    | 'contactlessLimitReached'
    | 'counterpartyAccountBlocked'
    | 'counterpartyAccountClosed'
    | 'counterpartyAccountNotFound'
    | 'counterpartyAddressRequired'
    | 'counterpartyBankTimedOut'
    | 'counterpartyBankUnavailable'
    | 'cryptographicFailure'
    | 'cvcDeclined'
    | 'declined'
    | 'declinedByBapValidation'
    | 'declinedByTransactionRule'
    | 'declinedNonGeneric'
    | 'directDebitNotSupported'
    | 'doNotHonor'
    | 'domesticDebitTransactionNotAllowed'
    | 'duplicateTransmissionDetected'
    | 'error'
    | 'formatError'
    | 'fraud'
    | 'fraudCancelled'
    | 'honorWithId'
    | 'internalTimeout'
    | 'invalidAccount'
    | 'invalidAmount'
    | 'invalidAuthorizationLifeCycle'
    | 'invalidCard'
    | 'invalidExpiryDate'
    | 'invalidFromAccount'
    | 'invalidIssuer'
    | 'invalidMerchant'
    | 'invalidPin'
    | 'invalidToAccount'
    | 'invalidTransaction'
    | 'issuerSuspectedFraud'
    | 'lostCard'
    | 'mobilePinRequired'
    | 'noCheckingAccount'
    | 'noSavingsAccount'
    | 'not3dAuthenticated'
    | 'notEnoughBalance'
    | 'notSubmitted'
    | 'notSupported'
    | 'partiallyApproved'
    | 'pending'
    | 'pendingApproval'
    | 'pendingExecution'
    | 'pinNotChanged'
    | 'pinRequired'
    | 'pinTriesExceeded'
    | 'pinValidationNotPossible'
    | 'purchaseAmountOnlyNoCashBack'
    | 'refusedByCounterpartyBank'
    | 'refusedByCustomer'
    | 'restrictedCard'
    | 'revocationOfAuth'
    | 'routeNotFound'
    | 'scaAuthenticationRequired'
    | 'scaFailed'
    | 'schemeAdvice'
    | 'securityViolation'
    | 'shopperCancelled'
    | 'stolenCard'
    | 'threedsDynamicLinkingMismatch'
    | 'transactionNotPermitted'
    | 'transferInstrumentDoesNotExist'
    | 'unableToRouteTransaction'
    | 'unknown'
    | 'withdrawalAmountExceeded'
    | 'withdrawalCountExceeded'
  reference?: string
  referenceForBeneficiary?: string
  review?: z.infer<typeof TransferReviewSchema>
  sequenceNumber?: number
  status:
    | 'approvalPending'
    | 'atmWithdrawal'
    | 'atmWithdrawalReversalPending'
    | 'atmWithdrawalReversed'
    | 'authAdjustmentAuthorised'
    | 'authAdjustmentError'
    | 'authAdjustmentRefused'
    | 'authorised'
    | 'bankTransfer'
    | 'bankTransferPending'
    | 'booked'
    | 'bookingPending'
    | 'cancelled'
    | 'capturePending'
    | 'captureReversalPending'
    | 'captureReversed'
    | 'captured'
    | 'capturedExternally'
    | 'chargeback'
    | 'chargebackExternally'
    | 'chargebackPending'
    | 'chargebackReversalPending'
    | 'chargebackReversed'
    | 'credited'
    | 'depositCorrection'
    | 'depositCorrectionPending'
    | 'dispute'
    | 'disputeClosed'
    | 'disputeExpired'
    | 'disputeNeedsReview'
    | 'error'
    | 'expired'
    | 'failed'
    | 'fee'
    | 'feePending'
    | 'interchangeAdjusted'
    | 'internalTransfer'
    | 'internalTransferPending'
    | 'invoiceDeduction'
    | 'invoiceDeductionPending'
    | 'manualCorrectionPending'
    | 'manuallyCorrected'
    | 'matchedStatement'
    | 'matchedStatementPending'
    | 'merchantPayin'
    | 'merchantPayinPending'
    | 'merchantPayinReversed'
    | 'merchantPayinReversedPending'
    | 'miscCost'
    | 'miscCostPending'
    | 'paymentCost'
    | 'paymentCostPending'
    | 'pending'
    | 'pendingApproval'
    | 'pendingExecution'
    | 'received'
    | 'refundPending'
    | 'refundReversalPending'
    | 'refundReversed'
    | 'refunded'
    | 'refundedExternally'
    | 'refused'
    | 'rejected'
    | 'reserveAdjustment'
    | 'reserveAdjustmentPending'
    | 'returned'
    | 'reversalReceived'
    | 'reversed'
    | 'secondChargeback'
    | 'secondChargebackPending'
    | 'undefined'
  tracing?: z.infer<typeof UKFpsTracingDataSchema> | z.infer<typeof USAchTracingDataSchema>
  tracking?:
    | z.infer<typeof ConfirmationTrackingDataSchema>
    | z.infer<typeof EstimationTrackingDataSchema>
    | z.infer<typeof InternalReviewTrackingDataSchema>
  transactionRulesResult?: z.infer<typeof TransactionRulesResultSchema>
  type?:
    | 'payment'
    | 'capture'
    | 'captureReversal'
    | 'refund'
    | 'refundReversal'
    | 'chargeback'
    | 'chargebackCorrection'
    | 'chargebackReversal'
    | 'chargebackReversalCorrection'
    | 'secondChargeback'
    | 'secondChargebackCorrection'
    | 'atmWithdrawal'
    | 'atmWithdrawalReversal'
    | 'internalTransfer'
    | 'internalDirectDebit'
    | 'manualCorrection'
    | 'invoiceDeduction'
    | 'depositCorrection'
    | 'reserveAdjustment'
    | 'bankTransfer'
    | 'bankDirectDebit'
    | 'cardTransfer'
    | 'miscCost'
    | 'paymentCost'
    | 'fee'
    | 'leftover'
    | 'grant'
    | 'capitalFundsCollection'
    | 'cashOutInstruction'
    | 'cashoutFee'
    | 'cashoutRepayment'
    | 'cashoutFunding'
    | 'repayment'
    | 'installment'
    | 'installmentReversal'
    | 'balanceAdjustment'
    | 'balanceRollover'
    | 'balanceMigration'
    | 'interestPayout'
    | 'fxSell'
    | 'fxBuy'
  ultimateParty?: z.infer<typeof UltimatePartyIdentificationSchema>
  updatedAt?: string
}

const TransferDataSchema: z.ZodType<TransferDataType> = z
  .strictObject({
    accountHolder: ResourceReferenceSchema.exactOptional().openapi({
      description:
        'The account holder associated with the balance account involved in the transfer.',
      'x-addedInVersion': '3',
    }),
    amount: AmountSchema.openapi({
      description: 'The amount of the transfer.',
      'x-addedInVersion': '1',
    }),
    balanceAccount: ResourceReferenceSchema.exactOptional().openapi({
      description: 'Contains information about the balance account involved in the transfer.',
      'x-addedInVersion': '3',
    }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    balances: z
      .array(BalanceMutationSchema)
      .exactOptional()
      .openapi({
        description: 'The list of the latest balance statuses in the transfer.',
        'x-addedInVersion': '3',
      }),
    category: z
      .enum(['bank', 'card', 'interest', 'internal', 'issuedCard', 'platformPayment', 'topUp'])
      .openapi({
        description:
          'The category of the transfer.\n\nPossible values:\n\n - **bank**: A transfer involving a [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) or a bank account.\n\n- **card**: A transfer involving a third-party card.\n\n- **interest**: A transfer that settles accrued [interest](https://docs.adyen.com/business-accounts/earn-returns) on a business account.\n\n- **internal**: A transfer between [balance accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id) within your platform.\n\n- **issuedCard**: A transfer initiated by an Adyen-issued card.\n\n- **platformPayment**: Funds movements related to payments that are acquired for your users.\n\n- **topUp**: An incoming transfer initiated by your user to top up their balance account.',
        'x-addedInVersion': '3',
      }),
    categoryData: z
      .xor([
        BankCategoryDataSchema,
        InternalCategoryDataSchema,
        IssuedCardSchema,
        PlatformPaymentSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'The relevant data according to the transfer category.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            issuedCard: '#/components/schemas/IssuedCard',
            platformPayment: '#/components/schemas/PlatformPayment',
            bank: '#/components/schemas/BankCategoryData',
            internal: '#/components/schemas/InternalCategoryData',
          },
        },
        'x-addedInVersion': '4',
      }),
    counterparty: TransferNotificationCounterPartySchema.exactOptional().openapi({
      description: 'The other party in the transfer.',
      'x-addedInVersion': '3',
    }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the transfer was created, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.',
        'x-addedInVersion': '3',
      }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.',
        'x-addedInVersion': '3',
        'x-deprecatedInVersion': '3',
        'x-deprecatedMessage': 'Use createdAt or updatedAt',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.\n\nSupported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**\n\nSupported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' \" ! ?**",
        'x-addedInVersion': '1',
      }),
    directDebitInformation: DirectDebitInformationSchema.exactOptional().openapi({
      description: 'The details of the direct debit.',
      'x-addedInVersion': '3',
    }),
    direction: z
      .enum(['incoming', 'outgoing'])
      .exactOptional()
      .openapi({
        description:
          'The direction of the transfer.\n\nPossible values: **incoming**, **outgoing**.',
        'x-addedInVersion': '2',
      }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the latest transfer event. Included only when the `category` is **issuedCard**.',
        'x-addedInVersion': '4',
      }),
    events: z
      .array(TransferEventSchema)
      .exactOptional()
      .openapi({
        description: 'The list of events leading up to the current status of the transfer.',
        'x-addedInVersion': '3',
      }),
    executionDate: ExecutionDateSchema.exactOptional().openapi({
      description:
        'Contains information about the date when the transfer will be processed. The execution date must be within 30 days of the current date.\n\nUntil the execution date:\n- The `status` of the transfer remains as **received**.\n- The `reason` of the transfer remains as **pending**.\n\n',
      'x-addedInVersion': '3',
    }),
    externalReason: ExternalReasonSchema.exactOptional().openapi({
      description: 'The external reason of this transfer.',
      'x-addedInVersion': '3',
    }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    networkReason: NetworkReasonSchema.exactOptional().openapi({
      description:
        'Contains information that explains why the transfer was rejected or returned by the network.',
      'x-addedInVersion': '4',
    }),
    paymentInstrument: PaymentInstrumentSchema.exactOptional().openapi({
      description: 'Contains information about the payment instrument used in the transfer.',
      'x-addedInVersion': '3',
    }),
    reason: z
      .enum([
        'accountHierarchyNotActive',
        'amountLimitExceeded',
        'approvalExpired',
        'approved',
        'avsDeclined',
        'balanceAccountTemporarilyBlockedByTransactionRule',
        'blockCard',
        'callReferral',
        'cancelled',
        'captureCard',
        'cardExpired',
        'cardholderAuthenticationRequired',
        'cashbackAmountExceedsLimit',
        'cavvDeclined',
        'contactlessFallback',
        'contactlessLimitReached',
        'counterpartyAccountBlocked',
        'counterpartyAccountClosed',
        'counterpartyAccountNotFound',
        'counterpartyAddressRequired',
        'counterpartyBankTimedOut',
        'counterpartyBankUnavailable',
        'cryptographicFailure',
        'cvcDeclined',
        'declined',
        'declinedByBapValidation',
        'declinedByTransactionRule',
        'declinedNonGeneric',
        'directDebitNotSupported',
        'doNotHonor',
        'domesticDebitTransactionNotAllowed',
        'duplicateTransmissionDetected',
        'error',
        'formatError',
        'fraud',
        'fraudCancelled',
        'honorWithId',
        'internalTimeout',
        'invalidAccount',
        'invalidAmount',
        'invalidAuthorizationLifeCycle',
        'invalidCard',
        'invalidExpiryDate',
        'invalidFromAccount',
        'invalidIssuer',
        'invalidMerchant',
        'invalidPin',
        'invalidToAccount',
        'invalidTransaction',
        'issuerSuspectedFraud',
        'lostCard',
        'mobilePinRequired',
        'noCheckingAccount',
        'noSavingsAccount',
        'not3dAuthenticated',
        'notEnoughBalance',
        'notSubmitted',
        'notSupported',
        'partiallyApproved',
        'pending',
        'pendingApproval',
        'pendingExecution',
        'pinNotChanged',
        'pinRequired',
        'pinTriesExceeded',
        'pinValidationNotPossible',
        'purchaseAmountOnlyNoCashBack',
        'refusedByCounterpartyBank',
        'refusedByCustomer',
        'restrictedCard',
        'revocationOfAuth',
        'routeNotFound',
        'scaAuthenticationRequired',
        'scaFailed',
        'schemeAdvice',
        'securityViolation',
        'shopperCancelled',
        'stolenCard',
        'threedsDynamicLinkingMismatch',
        'transactionNotPermitted',
        'transferInstrumentDoesNotExist',
        'unableToRouteTransaction',
        'unknown',
        'withdrawalAmountExceeded',
        'withdrawalCountExceeded',
      ])
      .exactOptional()
      .openapi({
        description: 'Additional information about the status of the transfer.',
        'x-addedInVersion': '2',
      }),
    reference: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description:
          "Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.",
        'x-addedInVersion': '2',
      }),
    referenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          ' A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.\n\n Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.\n\n - **internal**: 80 characters\n\n- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.',
        'x-addedInVersion': '2',
      }),
    review: TransferReviewSchema.exactOptional().openapi({
      description: 'Contains status updates related to additional reviews.',
      'x-addedInVersion': '3',
    }),
    sequenceNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The sequence number of the transfer webhook. The numbers start from 1 and increase with each new webhook for a specific transfer.\n\nThe sequence number can help you restore the correct sequence of events even if they arrive out of order.',
        'x-addedInVersion': '3',
      }),
    status: z
      .enum([
        'approvalPending',
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
        'capturedExternally',
        'chargeback',
        'chargebackExternally',
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
        'interchangeAdjusted',
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
        'pending',
        'pendingApproval',
        'pendingExecution',
        'received',
        'refundPending',
        'refundReversalPending',
        'refundReversed',
        'refunded',
        'refundedExternally',
        'refused',
        'rejected',
        'reserveAdjustment',
        'reserveAdjustmentPending',
        'returned',
        'reversalReceived',
        'reversed',
        'secondChargeback',
        'secondChargebackPending',
        'undefined',
      ])
      .openapi({
        description:
          "The result of the transfer.\n\nFor example:\n\n- **received**: an outgoing transfer request is created.\n- **refused**: the transfer request is rejected by Adyen for one of the following reasons:\n  - Transfer limit exceeded.\n  - Transaction rule requirements violated.\n- **authorised**: the transfer request is authorized and the funds are reserved.\n- **booked**: the funds are deducted from your user's balance account.\n - **failed**: the transfer is rejected by the counterparty's bank.\n- **returned**: the transfer is returned by the counterparty's bank.",
        'x-addedInVersion': '2',
      }),
    tracing: z
      .discriminatedUnion('type', [UKFpsTracingDataSchema, USAchTracingDataSchema])
      .exactOptional()
      .openapi({
        description:
          'Contains information for tracing the transfer after Adyen forwards it to the network.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            usAch: '#/components/schemas/USAchTracingData',
            ukFps: '#/components/schemas/UKFpsTracingData',
          },
        },
        'x-addedInVersion': '4',
      }),
    tracking: z
      .discriminatedUnion('type', [
        ConfirmationTrackingDataSchema,
        EstimationTrackingDataSchema,
        InternalReviewTrackingDataSchema,
      ])
      .exactOptional()
      .openapi({
        description: 'The latest tracking information of the transfer.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            estimation: '#/components/schemas/EstimationTrackingData',
            confirmation: '#/components/schemas/ConfirmationTrackingData',
            internalReview: '#/components/schemas/InternalReviewTrackingData',
          },
        },
        'x-addedInVersion': '3',
      }),
    transactionRulesResult: TransactionRulesResultSchema.exactOptional().openapi({
      description: 'Contains the results of the evaluation of the transaction rules.',
      'x-addedInVersion': '3',
    }),
    type: z
      .enum([
        'payment',
        'capture',
        'captureReversal',
        'refund',
        'refundReversal',
        'chargeback',
        'chargebackCorrection',
        'chargebackReversal',
        'chargebackReversalCorrection',
        'secondChargeback',
        'secondChargebackCorrection',
        'atmWithdrawal',
        'atmWithdrawalReversal',
        'internalTransfer',
        'internalDirectDebit',
        'manualCorrection',
        'invoiceDeduction',
        'depositCorrection',
        'reserveAdjustment',
        'bankTransfer',
        'bankDirectDebit',
        'cardTransfer',
        'miscCost',
        'paymentCost',
        'fee',
        'leftover',
        'grant',
        'capitalFundsCollection',
        'cashOutInstruction',
        'cashoutFee',
        'cashoutRepayment',
        'cashoutFunding',
        'repayment',
        'installment',
        'installmentReversal',
        'balanceAdjustment',
        'balanceRollover',
        'balanceMigration',
        'interestPayout',
        'fxSell',
        'fxBuy',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.',
        'x-addedInVersion': '3',
      }),
    ultimateParty: UltimatePartyIdentificationSchema.exactOptional().openapi({
      description: 'The ultimate sender of the funds of the transfer (ultimate debtor).',
      'x-addedInVersion': '3',
    }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.',
        'x-addedInVersion': '3',
      }),
  })
  .openapi({ required: ['amount', 'category', 'status'] })
  .openapi('TransferData')

type TransferNotificationRequestType = {
  data: z.infer<typeof TransferDataSchema>
  environment: string
  timestamp?: string
  type?: 'balancePlatform.transfer.created' | 'balancePlatform.transfer.updated'
}

const BalancePlatformNotificationResponseSchema = z
  .strictObject({
    notificationResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).',
      }),
  })
  .openapi({ required: [] })
  .openapi('BalancePlatformNotificationResponse')

const NameLocationSchema = z
  .strictObject({
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
  .strictObject({
    acquirerId: z
      .string()
      .exactOptional()
      .openapi({ description: "The unique identifier of the merchant's acquirer." }),
    mcc: z.string().exactOptional().openapi({ description: 'The merchant category code.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the merchant.' }),
    nameLocation: NameLocationSchema.exactOptional().openapi({
      description: 'Contains the name and location of the merchant.',
    }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code of the merchant.' }),
  })
  .openapi({ required: [] })
  .openapi('MerchantData')

const CounterpartyV3Schema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id).',
      }),
    bankAccount: BankAccountV3Schema.exactOptional().openapi({
      description: 'Contains information about the counterparty bank account.',
    }),
    card: CardSchema.exactOptional().openapi({
      description: 'Contains information about the counterparty card.',
    }),
    merchant: MerchantDataSchema.exactOptional().openapi({
      description: 'Contains information about the merchant.',
    }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).',
      }),
  })
  .openapi({ required: [] })
  .openapi('CounterpartyV3')

const ResourceSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('Resource')

const TransferNotificationRequestSchema: z.ZodType<TransferNotificationRequestType> = z
  .strictObject({
    data: TransferDataSchema.openapi({ description: 'Contains details about the event.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum(['balancePlatform.transfer.created', 'balancePlatform.transfer.updated'])
      .exactOptional()
      .openapi({ description: 'The type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment'] })
  .openapi('TransferNotificationRequest')

const PostBalancePlatformTransferCreatedBalancePlatformTransferCreatedIncomingInternalExample = {
  summary: 'Initiated incoming internal transfer',
  description: 'Example webhook for an initiated incoming transfer',
  value: {
    data: {
      id: '2WT1N05XXY7P9XH9',
      type: 'internalTransfer',
      accountHolder: {
        description: 'Your description of the account holder of the target balance account',
        id: 'AH00000000000000000000002',
        reference: 'Your reference of the account holder',
      },
      amount: { currency: 'EUR', value: 1000 },
      balanceAccount: {
        description: 'Your description of the target balance account',
        id: 'BA00000000000000000000002',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ currency: 'EUR', received: 1000 }],
      category: 'internal',
      creationDate: '2023-02-28T13:30:05+02:00',
      description: 'Your description of the transfer',
      direction: 'incoming',
      events: [
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: 1000 }],
          status: 'received',
          type: 'accounting',
        },
      ],
      reason: 'approved',
      reference: 'Your reference of the transfer',
      referenceForBeneficiary: 'Your-reference-for-the-recipient-of-the-transfer-request',
      sequenceNumber: 1,
      status: 'received',
    },
    environment: 'test',
    timestamp: '2023-02-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.created',
  },
}

const PostBalancePlatformTransferCreatedBalancePlatformTransferCreatedInitiatedOnDemandTopUpExample =
  {
    summary: 'Initiated on-demand top-up to a balance account',
    description: 'Example webhook for an initiated on-demand top-up',
    value: {
      data: {
        accountHolder: {
          description: 'Your description for the account holder',
          id: 'AH00000000000000000000001',
          reference: 'Your reference for the account holder',
        },
        amount: { currency: 'EUR', value: 100000 },
        balanceAccount: {
          description: 'Your description for the balance account',
          id: 'BA00000000000000000000001',
          reference: 'Your reference for the balance account',
        },
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        balances: [{ currency: 'EUR', received: 100000 }],
        category: 'topUp',
        categoryData: {
          modificationMerchantReference: 'Your reference for the capture.',
          modificationPspReference: 'WNS7WQ756L2GWR82',
          paymentMerchantReference: 'YOUR_ORDER_NUMBER',
          platformPaymentType: 'TopUp',
          pspPaymentReference: 'M5N7TQ4TG5PFWR50',
          type: 'platformPayment',
        },
        creationDate: '2023-02-28T13:30:05+02:00',
        description: 'Your description for the top-up',
        direction: 'incoming',
        events: [
          {
            bookingDate: '2023-02-28T13:30:18+02:00',
            id: 'SKRL00000000000000000000000001',
            mutations: [{ currency: 'EUR', received: 100000 }],
            status: 'received',
            type: 'accounting',
          },
        ],
        id: 'JN4227222422265',
        reason: 'approved',
        reference: 'Your reference for the top-up',
        sequenceNumber: 1,
        status: 'received',
        type: 'capture',
      },
      environment: 'test',
      timestamp: '2024-12-20T13:51:24.928Z',
      type: 'balancePlatform.transfer.created',
    },
  }

const PostBalancePlatformTransferCreatedBalancePlatformTransferCreatedInitiatedScheduledTopUpExample =
  {
    summary: 'Initiated scheduled top-up to a balance account',
    description: 'Example webhook for an initiated scheduled top-up',
    value: {
      data: {
        accountHolder: { id: 'AH00000000000000000000001' },
        amount: { currency: 'EUR', value: 100000 },
        balanceAccount: { id: 'BA00000000000000000000001' },
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        balances: [{ currency: 'EUR', received: 100000 }],
        category: 'platformPayment',
        categoryData: { pspPaymentReference: 'CWBC43ZX2VTFWR82', type: 'platformPayment' },
        counterparty: { transferInstrumentId: 'SE00000000000000000000001' },
        creationDate: '2023-02-28T13:30:05+02:00',
        direction: 'incoming',
        events: [
          {
            bookingDate: '2023-02-28T13:30:18+02:00',
            id: 'EVJN00000000000000000000000001',
            mutations: [{ currency: 'EUR', received: 100000 }],
            status: 'received',
            type: 'accounting',
          },
        ],
        id: 'JN4227222422265',
        reason: 'approved',
        sequenceNumber: 1,
        transactionRulesResult: { allHardBlockRulesPassed: true },
        status: 'received',
        type: 'capture',
      },
      environment: 'test',
      type: 'balancePlatform.transfer.created',
    },
  }

const PostBalancePlatformTransferCreatedBalancePlatformTransferCreatedOutgoingExternalExample = {
  summary: 'Initiated payout to a transfer instrument',
  description: 'Example webhook for an initiated outgoing bank transfer',
  value: {
    data: {
      accountHolder: {
        description: 'Your description of the account holder',
        id: 'AH00000000000000000000001',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 10000 },
      balanceAccount: {
        description: 'Your description of the balance account from where the amount is debited',
        id: 'BA00000000000000000000001',
        reference: 'Your reference for the balance account',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ currency: 'EUR', received: -10000 }],
      category: 'bank',
      categoryData: { priority: 'regular', type: 'bank' },
      creationDate: '2023-02-28T13:30:05+02:00',
      description: 'Your user description of the transfer',
      direction: 'outgoing',
      events: [
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'EVJN00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: -10000 }],
          status: 'received',
          type: 'accounting',
        },
      ],
      id: '6JKRLZ8LOT47J7RY',
      reason: 'approved',
      reference: 'Your user reference for the transfer',
      referenceForBeneficiary: 'Your user reference for the beneficiary',
      sequenceNumber: 1,
      transactionRulesResult: { allHardBlockRulesPassed: true },
      status: 'received',
      type: 'bankTransfer',
    },
    environment: 'test',
    timestamp: '2023-02-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.created',
  },
}

const PostBalancePlatformTransferUpdated_01PayoutAuthorizedExample = {
  summary: 'Authorized payout to a transfer instrument',
  description: 'Example webhook of an authorised outgoing bank transfer',
  value: {
    data: {
      accountHolder: {
        description: 'Your description of the account holder',
        id: 'AH00000000000000000000001',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 10000 },
      balanceAccount: {
        description: 'Your description of the balance account from where the amount is debited',
        id: 'BA00000000000000000000001',
        reference: 'Your reference for the balance account',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ currency: 'EUR', received: 0, reserved: -10000 }],
      category: 'bank',
      categoryData: { priority: 'regular', type: 'bank' },
      creationDate: '2023-02-28T13:30:05+02:00',
      description: 'Your user description of the transfer',
      direction: 'outgoing',
      events: [
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'EVJN00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: -10000 }],
          status: 'received',
          type: 'accounting',
        },
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'EVJN00000000000000000000000002',
          mutations: [{ currency: 'EUR', received: 10000, reserved: -10000 }],
          status: 'authorised',
          type: 'accounting',
        },
      ],
      id: '6JKRLZ8LOT47J7RY',
      reason: 'approved',
      reference: 'Your user reference for the transfer',
      referenceForBeneficiary: 'Your user reference for the beneficiary',
      sequenceNumber: 2,
      transactionRulesResult: { allHardBlockRulesPassed: true },
      status: 'authorised',
      type: 'bankTransfer',
    },
    environment: 'test',
    timestamp: '2023-02-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.updated',
  },
}

const PostBalancePlatformTransferUpdated_02PayoutBookedExample = {
  summary: 'Booked payout to a transfer instrument',
  description: 'Example webhook of a booked outgoing bank transfer',
  value: {
    data: {
      accountHolder: {
        description: 'Your description of the account holder',
        id: 'AH00000000000000000000001',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 10000 },
      balanceAccount: {
        description: 'Your description of the balance account from where the amount is debited',
        id: 'BA00000000000000000000001',
        reference: 'Your reference for the balance account',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ balance: -10000, currency: 'EUR', received: 0, reserved: 0 }],
      category: 'bank',
      categoryData: { priority: 'regular', type: 'bank' },
      counterparty: { transferInstrumentId: 'SE00000000000000000000001' },
      creationDate: '2023-02-28T13:30:05+02:00',
      description: 'Your user description of the transfer',
      direction: 'outgoing',
      events: [
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'EVJN00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: -10000 }],
          status: 'received',
          type: 'accounting',
        },
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'EVJN00000000000000000000000002',
          mutations: [{ currency: 'EUR', received: 10000, reserved: -10000 }],
          status: 'authorised',
          type: 'accounting',
        },
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'EVJN00000000000000000000000003',
          mutations: [{ balance: -10000, currency: 'EUR', received: 0, reserved: 10000 }],
          status: 'booked',
          transactionId: 'EVJN00000000000000000000000003EUR',
          type: 'accounting',
          valueDate: '2023-03-01T12:58:25+01:00',
        },
      ],
      id: '6JKRLZ8LOT47J7RY',
      reason: 'approved',
      reference: 'Your user reference for the transfer',
      referenceForBeneficiary: 'Your user reference for the beneficiary',
      sequenceNumber: 3,
      transactionRulesResult: { allHardBlockRulesPassed: true },
      status: 'booked',
      type: 'bankTransfer',
    },
    environment: 'test',
    timestamp: '2023-02-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.updated',
  },
}

const PostBalancePlatformTransferUpdated_03InternalAuthorisedExample = {
  summary: 'Authorized incoming internal transfer',
  description: 'Example webhook of an authorised incoming transfer',
  value: {
    data: {
      id: '2WT1N05XXY7P9XH9',
      type: 'internalTransfer',
      accountHolder: {
        description: 'Your description of the account holder of the target balance account',
        id: 'AH00000000000000000000002',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 1000 },
      balanceAccount: {
        description: 'Your description of the target balance account',
        id: 'BA00000000000000000000002',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ currency: 'EUR', received: 0, reserved: 1000 }],
      category: 'internal',
      creationDate: '2023-02-28T13:30:05+02:00',
      description: 'Your description of the transfer',
      direction: 'incoming',
      events: [
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: 1000 }],
          status: 'received',
          type: 'accounting',
        },
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000002',
          mutations: [{ currency: 'EUR', received: -1000, reserved: 1000 }],
          status: 'authorised',
          type: 'accounting',
        },
      ],
      reason: 'approved',
      reference: 'Your reference for the transfer',
      referenceForBeneficiary: 'Your-reference-for-the-recipient-of-the-transfer-request',
      sequenceNumber: 2,
      status: 'authorised',
    },
    environment: 'test',
    timestamp: '2023-02-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.updated',
  },
}

const PostBalancePlatformTransferUpdated_04InternalBookedExample = {
  summary: 'Booked incoming internal transfer',
  description: 'Example webhook of a booked incoming transfer',
  value: {
    data: {
      id: '2WT1N05XXY7P9XH9',
      type: 'internalTransfer',
      accountHolder: {
        description: 'Your description of the account holder of the target balance account',
        id: 'AH00000000000000000000002',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 1000 },
      balanceAccount: {
        description: 'Your description of the target balance account',
        id: 'BA00000000000000000000002',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ balance: 1000, currency: 'EUR', received: 0, reserved: 0 }],
      category: 'internal',
      counterparty: { balanceAccountId: 'BA00000000000000000000001' },
      creationDate: '2023-02-28T13:30:05+02:00',
      description: 'Your description of the transfer',
      direction: 'incoming',
      events: [
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: 1000 }],
          status: 'received',
          type: 'accounting',
        },
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000002',
          mutations: [{ currency: 'EUR', received: -1000, reserved: 1000 }],
          status: 'authorised',
          type: 'accounting',
        },
        {
          bookingDate: '2023-02-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000003',
          mutations: [{ balance: 1000, currency: 'EUR', received: 0, reserved: -1000 }],
          status: 'booked',
          transactionId: 'FWKP42CL8224223D5KKJWD6FXS3VQCEUR',
          type: 'accounting',
          valueDate: '2023-02-28T13:30:18+02:00',
        },
      ],
      reason: 'approved',
      reference: 'Your reference for the transfer',
      referenceForBeneficiary: 'Your-reference-for-the-recipient-of-the-transfer-request',
      sequenceNumber: 3,
      status: 'booked',
    },
    environment: 'test',
    timestamp: '2023-02-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.updated',
  },
}

const PostBalancePlatformTransferUpdated_05DirectDebitBookedExample = {
  summary: 'Business accounts - Successful external direct debit',
  description: 'Example webhook of a booked external direct debit transfer',
  value: {
    data: {
      accountHolder: {
        description: 'Your description of the account holder',
        id: 'AH00000000000000000000002',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 1000 },
      balanceAccount: {
        description: 'Your description of the target balance account',
        id: 'BA00000000000000000000002',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ balance: -1000, currency: 'EUR', received: 0, reserved: 0 }],
      category: 'bank',
      categoryData: { type: 'bank' },
      counterparty: {
        bankAccount: {
          accountHolder: { fullName: 'John Smith', type: 'unknown' },
          accountIdentification: { iban: 'FR0000000000000000000000117', type: 'iban' },
        },
      },
      creationDate: '2024-08-28T13:30:05+02:00',
      directDebitInformation: {
        dateOfSignature: '2023-01-01T01:00:00+01:00',
        dueDate: '2024-08-23T02:00:00+02:00',
        mandateId: 'EBAClearing-MANDAT001',
        sequenceType: 'FRST',
      },
      direction: 'incoming',
      events: [
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: -1000 }],
          status: 'received',
          type: 'accounting',
        },
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000002',
          mutations: [{ currency: 'EUR', received: 1000, reserved: -1000 }],
          status: 'authorised',
          type: 'accounting',
        },
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000003',
          mutations: [{ balance: -1000, currency: 'EUR', received: 0, reserved: 1000 }],
          status: 'booked',
          transactionId: 'JDRF00000000000000000000000MEUR',
          type: 'accounting',
          valueDate: '2024-08-28T14:00:00+02:00',
        },
      ],
      id: '2WT1N05XXY7P9XH9',
      paymentInstrument: {
        description: 'Your reference for the payment instrument',
        id: 'PI00000000000000000000001',
      },
      reason: 'approved',
      reference: 'Your reference for the transfer',
      referenceForBeneficiary: "The sender's reference for the beneficiary",
      sequenceNumber: 3,
      status: 'booked',
      transactionRulesResult: { allHardBlockRulesPassed: true },
      type: 'bankDirectDebit',
    },
    environment: 'test',
    timestamp: '2024-08-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.updated',
  },
}

const PostBalancePlatformTransferUpdated_06DirectDebitCancelledExample = {
  summary: 'Business accounts - Cancelled external direct debit',
  description: 'Example webhook of a cancelled external direct debit transfer',
  value: {
    data: {
      accountHolder: {
        description: 'Your description of the account holder',
        id: 'AH00000000000000000000002',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 1000 },
      balanceAccount: {
        description: 'Your description of the target balance account',
        id: 'BA00000000000000000000002',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ currency: 'EUR', received: -1000 }],
      category: 'bank',
      categoryData: { type: 'bank' },
      counterparty: {
        bankAccount: {
          accountHolder: { fullName: 'John Smith', type: 'unknown' },
          accountIdentification: { iban: 'FR0000000000000000000000117', type: 'iban' },
        },
      },
      creationDate: '2024-08-28T13:30:05+02:00',
      directDebitInformation: {
        dateOfSignature: '2023-01-01T01:00:00+01:00',
        dueDate: '2024-08-23T02:00:00+02:00',
        mandateId: 'EBAClearing-MANDAT001',
        sequenceType: 'FRST',
      },
      direction: 'incoming',
      events: [
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: -1000 }],
          status: 'received',
          type: 'accounting',
        },
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000002',
          mutations: [{ currency: 'EUR', received: 1000 }],
          reason: 'unknown',
          status: 'cancelled',
          type: 'accounting',
        },
      ],
      id: '2WT1N05XXY7P9XH9',
      paymentInstrument: {
        description: 'Your reference for the payment instrument',
        id: 'PI00000000000000000000001',
      },
      reason: 'approved',
      reference: 'Your reference for the transfer',
      referenceForBeneficiary: "The sender's reference for the beneficiary",
      sequenceNumber: 2,
      status: 'refused',
      transactionRulesResult: { allHardBlockRulesPassed: true },
      type: 'bankDirectDebit',
    },
    environment: 'test',
    timestamp: '2024-08-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.updated',
  },
}

const PostBalancePlatformTransferUpdated_07DirectDebitFailedExample = {
  summary: 'Business accounts - Failed external direct debit',
  description: 'Example webhook of a failed external direct debit transfer',
  value: {
    data: {
      accountHolder: {
        description: 'Your description of the account holder',
        id: 'AH00000000000000000000002',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 1000 },
      balanceAccount: {
        description: 'Your description of the target balance account',
        id: 'BA00000000000000000000002',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ currency: 'EUR', received: -1000 }],
      category: 'bank',
      categoryData: { type: 'bank' },
      counterparty: {
        bankAccount: {
          accountHolder: { fullName: 'John Smith', type: 'unknown' },
          accountIdentification: { iban: 'FR0000000000000000000000117', type: 'iban' },
        },
      },
      creationDate: '2024-08-28T13:30:05+02:00',
      directDebitInformation: {
        dateOfSignature: '2023-01-01T01:00:00+01:00',
        dueDate: '2024-08-23T02:00:00+02:00',
        mandateId: 'EBAClearing-MANDAT001',
        sequenceType: 'FRST',
      },
      direction: 'incoming',
      events: [
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: -1000 }],
          status: 'received',
          type: 'accounting',
        },
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000002',
          mutations: [{ currency: 'EUR', received: 1000 }],
          status: 'refused',
          type: 'accounting',
        },
      ],
      id: '2WT1N05XXY7P9XH9',
      paymentInstrument: {
        description: 'Your reference for the payment instrument',
        id: 'PI00000000000000000000001',
      },
      reason: 'unknown',
      reference: 'Your reference for the transfer',
      referenceForBeneficiary: "The sender's reference for the beneficiary",
      sequenceNumber: 2,
      status: 'cancelled',
      transactionRulesResult: { allHardBlockRulesPassed: true },
      type: 'bankDirectDebit',
    },
    environment: 'test',
    timestamp: '2024-08-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.updated',
  },
}

const PostBalancePlatformTransferUpdated_08InternalDirectDebitIncomingBookedExample = {
  summary: 'Business accounts - Successful internal direct debit (incoming)',
  description: 'Example webhook of a booked incoming internal direct debit transfer',
  value: {
    data: {
      accountHolder: {
        id: 'AH00000000000000000000002',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 1000 },
      balanceAccount: {
        description: 'Your description for the balance account',
        id: 'BA00000000000000000000002',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ balance: -1000, currency: 'EUR', received: 0, reserved: 0 }],
      category: 'internal',
      categoryData: { type: 'internal' },
      counterparty: { balanceAccountId: 'BA00000000000000000LIABLE' },
      creationDate: '2024-08-28T13:30:05+02:00',
      direction: 'incoming',
      events: [
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: -1000 }],
          status: 'received',
          type: 'accounting',
        },
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000002',
          mutations: [{ currency: 'EUR', received: 1000, reserved: -1000 }],
          status: 'authorised',
          type: 'accounting',
        },
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000003',
          mutations: [{ balance: -1000, currency: 'EUR', received: 0, reserved: 1000 }],
          status: 'booked',
          transactionId: 'JDRF00000000000000000000000MEUR',
          type: 'accounting',
          valueDate: '2024-08-28T14:00:00+02:00',
        },
      ],
      id: '2WT1N05XXY7P9XH9',
      reason: 'approved',
      reference: 'Your reference for the transfer',
      sequenceNumber: 3,
      status: 'booked',
      type: 'internalDirectDebit',
    },
    environment: 'test',
    timestamp: '2024-08-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.updated',
  },
}

const PostBalancePlatformTransferUpdated_09InternalDirectDebitOutgoingBookedExample = {
  summary: 'Business accounts - Successful internal direct debit (outgoing)',
  description: 'Example webhook of a booked outgoing internal direct debit transfer',
  value: {
    data: {
      accountHolder: {
        id: 'AH000000000000000000LIABLE',
        reference: 'Your reference for the account holder',
      },
      amount: { currency: 'EUR', value: 1000 },
      balanceAccount: {
        description: 'Your description for the balance account',
        id: 'BA000000000000000000LIABLE',
      },
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balances: [{ balance: 1000, currency: 'EUR', received: 0, reserved: 0 }],
      category: 'internal',
      categoryData: { type: 'internal' },
      counterparty: { balanceAccountId: 'BA00000000000000000000002' },
      creationDate: '2024-08-28T13:30:05+02:00',
      direction: 'outgoing',
      events: [
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000001',
          mutations: [{ currency: 'EUR', received: 1000 }],
          status: 'received',
          type: 'accounting',
        },
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000002',
          mutations: [{ currency: 'EUR', received: -1000, reserved: 1000 }],
          status: 'authorised',
          type: 'accounting',
        },
        {
          bookingDate: '2024-08-28T13:30:18+02:00',
          id: 'JDRF00000000000000000000000003',
          mutations: [{ balance: 1000, currency: 'EUR', received: 0, reserved: -1000 }],
          status: 'booked',
          transactionId: 'JDRF00000000000000000000000MEUR',
          type: 'accounting',
          valueDate: '2024-08-28T14:00:00+02:00',
        },
      ],
      id: '2WT1N05XXY7P9XH9',
      reason: 'approved',
      reference: 'Your reference for the transfer',
      sequenceNumber: 3,
      status: 'booked',
      type: 'internalDirectDebit',
    },
    environment: 'test',
    timestamp: '2024-08-28T13:27:05+02:00',
    type: 'balancePlatform.transfer.updated',
  },
}

const PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedAuthorizedOnDemandTopUpExample =
  {
    summary: 'Authorized on-demand top-up to a balance account',
    description: 'Example webhook for an authorized on-demand top-up',
    value: {
      data: {
        accountHolder: {
          description: 'Your description for the account holder',
          id: 'AH00000000000000000000001',
          reference: 'Your reference for the account holder',
        },
        amount: { currency: 'EUR', value: 100000 },
        balanceAccount: {
          description: 'Your description for the balance account',
          id: 'BA00000000000000000000001',
          reference: 'Your reference for the balance account',
        },
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        balances: [{ currency: 'EUR', received: 0, reserved: 100000 }],
        category: 'topUp',
        categoryData: {
          modificationMerchantReference: 'Your reference for the top-up.',
          modificationPspReference: 'WNS7WQ756L2GWR82',
          paymentMerchantReference: 'YOUR_ORDER_NUMBER',
          platformPaymentType: 'TopUp',
          pspPaymentReference: 'M5N7TQ4TG5PFWR50',
          type: 'platformPayment',
        },
        creationDate: '2023-02-28T13:30:05+02:00',
        description: 'Your description for the top-up',
        direction: 'incoming',
        events: [
          {
            bookingDate: '2023-02-28T13:30:18+02:00',
            id: 'SKRL00000000000000000000000001',
            mutations: [{ currency: 'EUR', received: 100000 }],
            status: 'received',
            type: 'accounting',
          },
          {
            bookingDate: '2023-02-28T13:30:18+02:00',
            id: 'SKRL00000000000000000000000002',
            mutations: [{ currency: 'EUR', received: -100000, reserved: 100000 }],
            status: 'authorised',
            type: 'accounting',
          },
        ],
        id: 'JN4227222422265',
        reason: 'approved',
        reference: 'Your reference for the top-up.',
        sequenceNumber: 2,
        status: 'authorised',
        type: 'capture',
      },
      environment: 'test',
      timestamp: '2024-12-20T13:51:24.928Z',
      type: 'balancePlatform.transfer.updated',
    },
  }

const PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedAuthorizedScheduledTopUpExample =
  {
    summary: 'Authorized scheduled top-up to a balance account',
    description: 'Example webhook for an authorized scheduled top-up',
    value: {
      data: {
        accountHolder: { id: 'AH00000000000000000000001' },
        amount: { currency: 'EUR', value: 100000 },
        balanceAccount: { id: 'BA00000000000000000000001' },
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        balances: [{ currency: 'EUR', received: 0, reserved: 100000 }],
        category: 'platformPayment',
        categoryData: { pspPaymentReference: 'CWBC43ZX2VTFWR82', type: 'platformPayment' },
        counterparty: { transferInstrumentId: 'SE00000000000000000000001' },
        creationDate: '2023-02-28T13:30:05+02:00',
        direction: 'incoming',
        events: [
          {
            bookingDate: '2023-02-28T13:30:18+02:00',
            id: 'EVJN00000000000000000000000001',
            mutations: [{ currency: 'EUR', received: 100000 }],
            status: 'received',
            type: 'accounting',
          },
          {
            bookingDate: '2023-02-28T13:30:18+02:00',
            id: 'EVJN00000000000000000000000002',
            mutations: [{ currency: 'EUR', received: -100000, reserved: 100000 }],
            status: 'authorised',
            type: 'accounting',
          },
        ],
        id: 'JN4227222422265',
        reason: 'approved',
        reference: 'Your reference for the top-up.',
        sequenceNumber: 2,
        transactionRulesResult: { allHardBlockRulesPassed: true },
        status: 'authorised',
        type: 'capture',
      },
      environment: 'test',
      timestamp: '2024-12-20T13:51:24.928Z',
      type: 'balancePlatform.transfer.updated',
    },
  }

const PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedCapturedOnDemandTopUpExample =
  {
    summary: 'Captured on-demand top-up to a balance account',
    description: 'Example webhook for a captured on-demand top-up',
    value: {
      data: {
        accountHolder: {
          description: 'Your description for the account holder',
          id: 'AH00000000000000000000001',
          reference: 'Your reference for the account holder',
        },
        amount: { currency: 'EUR', value: 100000 },
        balanceAccount: {
          description: 'Your description for the balance account',
          id: 'BA00000000000000000000001',
          reference: 'Your reference for the balance account',
        },
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        balances: [{ balance: 100000, currency: 'EUR', received: 0, reserved: 0 }],
        category: 'topUp',
        categoryData: {
          modificationMerchantReference: 'Your reference for the top-up.',
          modificationPspReference: 'WNS7WQ756L2GWR82',
          paymentMerchantReference: 'YOUR_ORDER_NUMBER',
          platformPaymentType: 'TopUp',
          pspPaymentReference: 'M5N7TQ4TG5PFWR50',
          type: 'platformPayment',
        },
        creationDate: '2023-02-28T13:30:05+02:00',
        description: 'Your description for the transfer',
        direction: 'incoming',
        events: [
          {
            bookingDate: '2023-02-28T13:30:18+02:00',
            id: 'SKRL00000000000000000000000001',
            mutations: [{ currency: 'EUR', received: 100000 }],
            status: 'received',
            type: 'accounting',
          },
          {
            bookingDate: '2023-02-28T13:30:18+02:00',
            id: 'SKRL00000000000000000000000002',
            mutations: [{ currency: 'EUR', received: -100000, reserved: 100000 }],
            status: 'authorised',
            type: 'accounting',
          },
          {
            bookingDate: '2023-02-28T13:30:20+02:00',
            id: 'SKRL00000000000000000000000003',
            mutations: [{ balance: 100000, currency: 'EUR', received: 0, reserved: -100000 }],
            status: 'captured',
            transactionId: 'EVJN42272224222B5JB8BRC84N686ZEUR',
            type: 'accounting',
            valueDate: '2023-03-01T00:00:00+02:00',
          },
        ],
        id: 'JN4227222422265',
        reason: 'approved',
        reference: 'Your reference for the top-up',
        sequenceNumber: 3,
        status: 'captured',
        type: 'capture',
      },
      environment: 'test',
      timestamp: '2024-12-20T13:51:24.928Z',
      type: 'balancePlatform.transfer.updated',
    },
  }

const PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedCapturedScheduledTopUpExample =
  {
    summary: 'Captured scheduled top-up to a balance account',
    description: 'Example webhook for a captured scheduled top-up',
    value: {
      data: {
        accountHolder: { id: 'AH00000000000000000000001' },
        amount: { currency: 'EUR', value: 100000 },
        balanceAccount: { id: 'BA00000000000000000000001' },
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        balances: [{ balance: 100000, currency: 'EUR', received: 0, reserved: 0 }],
        category: 'platformPayment',
        categoryData: { pspPaymentReference: 'CWBC43ZX2VTFWR82', type: 'platformPayment' },
        counterparty: { transferInstrumentId: 'SE00000000000000000000001' },
        creationDate: '2023-02-28T13:30:05+02:00',
        direction: 'incoming',
        events: [
          {
            bookingDate: '2023-02-28T13:30:18+02:00',
            id: 'EVJN00000000000000000000000001',
            mutations: [{ currency: 'EUR', received: 100000 }],
            status: 'received',
            type: 'accounting',
          },
          {
            bookingDate: '2023-02-28T13:30:18+02:00',
            id: 'EVJN00000000000000000000000002',
            mutations: [{ currency: 'EUR', received: -100000, reserved: 100000 }],
            status: 'authorised',
            type: 'accounting',
          },
          {
            bookingDate: '2023-02-28T13:30:20+02:00',
            id: 'EVJN00000000000000000000000003',
            mutations: [{ balance: 100000, currency: 'EUR', received: 0, reserved: -100000 }],
            status: 'captured',
            transactionId: 'EVJN42272224222B5JB8BRC84N686ZEUR',
            type: 'accounting',
            valueDate: '2023-03-01T00:00:00+02:00',
          },
        ],
        id: 'JN4227222422265',
        reason: 'approved',
        reference: 'Your reference for the top-up.',
        sequenceNumber: 3,
        transactionRulesResult: { allHardBlockRulesPassed: true },
        status: 'captured',
        type: 'capture',
      },
      environment: 'test',
      type: 'balancePlatform.transfer.updated',
    },
  }

const PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedPayoutRefusedNotEnoughBalanceExample =
  {
    summary: 'Refused payout due to insufficient balance',
    description:
      'Example webhook for a payout refused because the balance account does not have enough funds',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2024-01-01T00:00:00Z',
        id: '4VXO00000000000001',
        accountHolder: {
          description: 'Your account holder description',
          id: 'AH00000000000000000000001',
          reference: 'Your account holder reference',
        },
        amount: { currency: 'EUR', value: 10000 },
        balanceAccount: {
          description: 'Your balance account description',
          id: 'BA00000000000000000000001',
        },
        category: 'bank',
        categoryData: { priority: 'crossBorder', type: 'bank' },
        counterparty: {
          bankAccount: {
            accountHolder: {
              address: {
                city: 'Paris',
                country: 'FR',
                line1: '6-8 Boulevard Haussmann',
                postalCode: '75009',
              },
              fullName: 'Jean Dupont',
              type: 'unknown',
            },
            accountIdentification: { type: 'iban', iban: 'FR0000000000000000000000117' },
          },
        },
        description: 'Your description for the transfer',
        direction: 'outgoing',
        reason: 'notEnoughBalance',
        reference: 'Your internal reference for the transfer',
        referenceForBeneficiary: 'Your reference for the beneficiary',
        status: 'refused',
        type: 'bankTransfer',
        balances: [{ currency: 'EUR', received: 0 }],
        events: [
          {
            bookingDate: '2024-01-01T00:00:00Z',
            id: 'EVJN00000000000000000000000001',
            mutations: [{ currency: 'EUR', received: -10000 }],
            status: 'received',
            type: 'accounting',
          },
          {
            bookingDate: '2024-01-01T00:00:00Z',
            id: 'EVJN00000000000000000000000002',
            mutations: [{ currency: 'EUR', received: 10000 }],
            status: 'refused',
            type: 'accounting',
          },
        ],
        sequenceNumber: 2,
      },
      environment: 'test',
      type: 'balancePlatform.transfer.updated',
    },
  }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

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
            'balancePlatform-transfer-created-incoming-internal':
              PostBalancePlatformTransferCreatedBalancePlatformTransferCreatedIncomingInternalExample,
            'balancePlatform-transfer-created-initiated-on-demand-top-up':
              PostBalancePlatformTransferCreatedBalancePlatformTransferCreatedInitiatedOnDemandTopUpExample,
            'balancePlatform-transfer-created-initiated-scheduled-top-up':
              PostBalancePlatformTransferCreatedBalancePlatformTransferCreatedInitiatedScheduledTopUpExample,
            'balancePlatform-transfer-created-outgoing-external':
              PostBalancePlatformTransferCreatedBalancePlatformTransferCreatedOutgoingExternalExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformTransferUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.transfer.updated',
  tags: ['General'],
  summary: 'Transfer updated',
  description:
    'Adyen sends this webhook when the status of a transfer changes. Use the `data.id` to track the original transfer resource in the [balancePlatform.transfer.created](https://docs.adyen.com/api-explorer/transfer-webhooks/1/post/balancePlatform.transfer.created) webhook.\n\nThe `status` field indicates the event that triggered the webhook. \n\n',
  operationId: 'post-balancePlatform.transfer.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TransferNotificationRequestSchema,
          examples: {
            '01.payout-authorized': PostBalancePlatformTransferUpdated_01PayoutAuthorizedExample,
            '02.payout-booked': PostBalancePlatformTransferUpdated_02PayoutBookedExample,
            '03.internal-authorised':
              PostBalancePlatformTransferUpdated_03InternalAuthorisedExample,
            '04.internal-booked': PostBalancePlatformTransferUpdated_04InternalBookedExample,
            '05.directDebit-booked': PostBalancePlatformTransferUpdated_05DirectDebitBookedExample,
            '06.directDebit-cancelled':
              PostBalancePlatformTransferUpdated_06DirectDebitCancelledExample,
            '07.directDebit-failed': PostBalancePlatformTransferUpdated_07DirectDebitFailedExample,
            '08.internalDirectDebit-incoming-booked':
              PostBalancePlatformTransferUpdated_08InternalDirectDebitIncomingBookedExample,
            '09.internalDirectDebit-outgoing-booked':
              PostBalancePlatformTransferUpdated_09InternalDirectDebitOutgoingBookedExample,
            'balancePlatform-transfer-updated-authorized-on-demand-top-up':
              PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedAuthorizedOnDemandTopUpExample,
            'balancePlatform-transfer-updated-authorized-scheduled-top-up':
              PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedAuthorizedScheduledTopUpExample,
            'balancePlatform-transfer-updated-captured-on-demand-top-up':
              PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedCapturedOnDemandTopUpExample,
            'balancePlatform-transfer-updated-captured-scheduled-top-up':
              PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedCapturedScheduledTopUpExample,
            'balancePlatform-transfer-updated-payout-refused-not-enough-balance':
              PostBalancePlatformTransferUpdatedBalancePlatformTransferUpdatedPayoutRefusedNotEnoughBalanceExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

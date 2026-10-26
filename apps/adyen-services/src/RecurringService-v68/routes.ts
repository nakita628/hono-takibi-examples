import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .strictObject({
    city: z
      .string()
      .max(3000)
      .openapi({ description: 'The name of the city. Maximum length: 3000 characters.' }),
    country: z
      .string()
      .openapi({
        description:
          "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.\n> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
      }),
    houseNumberOrName: z
      .string()
      .max(3000)
      .openapi({
        description: 'The number or name of the house. Maximum length: 3000 characters.',
      }),
    postalCode: z
      .string()
      .openapi({
        description:
          'A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.',
      }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n> Required for the US and Canada.',
      }),
    street: z
      .string()
      .max(3000)
      .openapi({
        description:
          'The name of the street. Maximum length: 3000 characters.\n> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.',
      }),
  })
  .openapi({ required: ['city', 'country', 'houseNumberOrName', 'postalCode', 'street'] })
  .openapi('Address')

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

const BankAccountSchema = z
  .strictObject({
    bankAccountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank account number (without separators).' }),
    bankCity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank city.', 'x-addedInVersion': '18' }),
    bankLocationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The location id of the bank. The field value is `nil` in most cases.',
      }),
    bankName: z.string().exactOptional().openapi({ description: 'The name of the bank.' }),
    bic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [Business Identifier Code](https://en.wikipedia.org/wiki/ISO_9362) (BIC) is the SWIFT address assigned to a bank. The field value is `nil` in most cases.',
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Country code where the bank is located.\n\nA valid value is an ISO two-character country code (e.g. 'NL').",
      }),
    iban: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN).',
      }),
    ownerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the bank account holder.\nIf you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:\n* χ12 is converted to ch12.\n* üA is converted to euA.\n* Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.\nAfter replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:\n* John17 - allowed.\n* J17 - allowed.\n* 171 - not allowed.\n* John-7 - allowed.\n> If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'.",
      }),
    taxId: z
      .string()
      .exactOptional()
      .openapi({ description: "The bank account holder's tax ID.", 'x-addedInVersion': '18' }),
  })
  .openapi({ required: [] })
  .openapi('BankAccount')

const CardSchema = z
  .strictObject({
    cvc: z
      .string()
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({
        description:
          'The [card verification code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid) (1-20 characters). Depending on the card brand, it is known also as:\n* CVV2/CVC2 – length: 3 digits\n* CID – length: 4 digits\n> If you are using [Client-Side Encryption](https://docs.adyen.com/classic-integration/cse-integration-ecommerce), the CVC code is present in the encrypted data. You must never post the card details to the server.\n> This field must be always present in a [one-click payment request](https://docs.adyen.com/classic-integration/recurring-payments).\n> When this value is returned in a response, it is always empty because it is not stored.',
      }),
    expiryMonth: z
      .string()
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({
        description:
          'The card expiry month.\nFormat: 2 digits, zero-padded for single digits. For example:\n* 03 = March\n* 11 = November',
      }),
    expiryYear: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({ description: 'The card expiry year.\nFormat: 4 digits. For example: 2020' }),
    holderName: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: 'The name of the cardholder, as printed on the card.' }),
    issueNumber: z
      .string()
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({ description: 'The issue number of the card (for some UK debit cards only).' }),
    number: z
      .string()
      .min(4)
      .max(19)
      .exactOptional()
      .openapi({
        description:
          'The card number (4-19 characters). Do not use any separators.\nWhen this value is returned in a response, only the last 4 digits of the card number are returned.',
      }),
    startMonth: z
      .string()
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({
        description: 'The month component of the start date (for some UK debit cards only).',
      }),
    startYear: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({
        description: 'The year component of the start date (for some UK debit cards only).',
      }),
  })
  .openapi({ required: [] })
  .openapi('Card')

const PermitRestrictionSchema = z
  .strictObject({
    maxAmount: AmountSchema.exactOptional().openapi({
      description:
        'The total sum amount of one or more payments made using this permit may not exceed this amount if set.',
    }),
    singleTransactionLimit: AmountSchema.exactOptional().openapi({
      description:
        'The amount of any single payment using this permit may not exceed this amount if set.',
    }),
    singleUse: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Only a single payment can be made using this permit if set to true, otherwise multiple payments are allowed.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PermitRestriction')

const PermitSchema = z
  .strictObject({
    partnerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Partner ID (when using the permit-per-partner token sharing model).',
      }),
    profileReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The profile to apply to this permit (when using the shared permits model).',
      }),
    restriction: PermitRestrictionSchema.exactOptional().openapi({
      description: 'Permit level restriction overrides.',
    }),
    resultKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key to link permit requests to permit results.' }),
    validTillDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The expiry date for this permit.' }),
  })
  .openapi({ required: [] })
  .openapi('Permit')

const CreatePermitRequestSchema = z
  .strictObject({
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    permits: z
      .array(PermitSchema)
      .openapi({ description: 'The permits to create for this recurring contract.' }),
    recurringDetailReference: z
      .string()
      .openapi({ description: 'The recurring contract the new permits will use.' }),
    shopperReference: z
      .string()
      .openapi({
        description:
          "The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).",
      }),
  })
  .openapi({
    required: ['merchantAccount', 'permits', 'recurringDetailReference', 'shopperReference'],
  })
  .openapi('CreatePermitRequest')

const PermitResultSchema = z
  .strictObject({
    resultKey: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The key to link permit requests to permit results.',
        'x-addedInVersion': '32',
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The permit token which is used to make payments by the partner company.',
        'x-addedInVersion': '32',
      }),
  })
  .openapi({ required: [] })
  .openapi('PermitResult')

const CreatePermitResultSchema = z
  .strictObject({
    permitResultList: z
      .array(PermitResultSchema)
      .exactOptional()
      .openapi({ description: 'List of new permits.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique reference associated with the request. This value is globally unique; quote it when communicating with us about this request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreatePermitResult')

const DisablePermitRequestSchema = z
  .strictObject({
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    token: z.string().openapi({ description: 'The permit token to disable.' }),
  })
  .openapi({ required: ['merchantAccount', 'token'] })
  .openapi('DisablePermitRequest')

const DisablePermitResultSchema = z
  .strictObject({
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique reference associated with the request. This value is globally unique; quote it when communicating with us about this request.',
      }),
    status: z.string().exactOptional().openapi({ description: 'Status of the disable request.' }),
  })
  .openapi({ required: [] })
  .openapi('DisablePermitResult')

const DisableRequestSchema = z
  .strictObject({
    contract: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify the contract if you only want to disable a specific use.\n\nThis field can be set to one of the following values, or to their combination (comma-separated):\n* ONECLICK\n* RECURRING\n* PAYOUT',
        'x-addedInVersion': '3',
      }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier with which you want to process the transaction.',
      }),
    recurringDetailReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID that uniquely identifies the recurring detail reference.\n\nIf it is not provided, the whole recurring contract of the `shopperReference` will be disabled, which includes all recurring details.',
      }),
    shopperReference: z
      .string()
      .openapi({
        description:
          'The ID that uniquely identifies the shopper.\n\nThis `shopperReference` must be the same as the `shopperReference` used in the initial payment.',
      }),
  })
  .openapi({ required: ['merchantAccount', 'shopperReference'] })
  .openapi('DisableRequest')

const DisableResultSchema = z
  .strictObject({
    response: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Depending on whether a specific recurring detail was in the request, result is either [detail-successfully-disabled] or [all-details-successfully-disabled].',
      }),
  })
  .openapi({ required: [] })
  .openapi('DisableResult')

const NameSchema = z
  .strictObject({
    firstName: z.string().max(80).openapi({ description: 'The first name.' }),
    lastName: z.string().max(80).openapi({ description: 'The last name.' }),
  })
  .openapi({ required: ['firstName', 'lastName'] })
  .openapi('Name')

const NotifyShopperRequestSchema = z
  .strictObject({
    amount: AmountSchema.openapi({ description: 'The amount of the upcoming payment.' }),
    billingDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the subscription amount will be debited from the shopper. In YYYY-MM-DD format',
      }),
    billingSequenceNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sequence of the debit. Depends on Frequency and Billing Attempts Rule.',
      }),
    displayedReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reference of Pre-debit notification that is displayed to the shopper. Optional field. Maps to reference if missing',
      }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier with which you want to process the transaction.',
      }),
    recurringDetailReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the `recurringDetailReference` returned in the response when you created the token.',
      }),
    reference: z
      .string()
      .openapi({
        description:
          'Pre-debit notification reference sent by the merchant. This is a mandatory field',
      }),
    shopperReference: z
      .string()
      .openapi({
        description:
          'The ID that uniquely identifies the shopper.\n\nThis `shopperReference` must be the same as the `shopperReference` used in the initial payment.',
      }),
    storedPaymentMethodId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the `recurringDetailReference` returned in the response when you created the token.',
      }),
  })
  .openapi({ required: ['amount', 'merchantAccount', 'reference', 'shopperReference'] })
  .openapi('NotifyShopperRequest')

const NotifyShopperResultSchema = z
  .strictObject({
    displayedReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reference of Pre-debit notification that is displayed to the shopper',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A simple description of the `resultCode`.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique reference that is associated with the request.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reference of Pre-debit notification sent in my the merchant' }),
    resultCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code indicating the status of notification.' }),
    shopperNotificationReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique reference for the request sent downstream.' }),
    storedPaymentMethodId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the recurringDetailReference returned in the response when token was created',
      }),
  })
  .openapi({ required: [] })
  .openapi('NotifyShopperResult')

const RecurringSchema = z
  .strictObject({
    contract: z
      .enum(['ONECLICK', 'ONECLICK,RECURRING', 'RECURRING', 'PAYOUT', 'EXTERNAL'])
      .exactOptional()
      .openapi({
        description:
          'The type of recurring contract to be used.\nPossible values:\n* `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).\n* `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).\n* `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.\n* `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/online-payments/online-payouts).\n* `EXTERNAL` - Use this when you store payment details and send the raw card number or network token directly in your API request.\n',
      }),
    recurringDetailName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A descriptive name for this detail.' }),
    recurringExpiry: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date after which no further authorisations shall be performed. Only for 3D Secure 2.',
        'x-addedInVersion': '40',
      }),
    recurringFrequency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Minimum number of days between authorisations. Only for 3D Secure 2.',
        'x-addedInVersion': '40',
      }),
    tokenService: z
      .enum(['VISATOKENSERVICE', 'MCTOKENSERVICE', 'AMEXTOKENSERVICE', 'TOKEN_SHARING'])
      .exactOptional()
      .openapi({ description: 'The name of the token service.', 'x-addedInVersion': '25' }),
  })
  .openapi({ required: [] })
  .openapi('Recurring')

const TokenDetailsSchema = z
  .strictObject({
    tokenData: z.record(z.string(), z.string()).exactOptional(),
    tokenDataType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TokenDetails')

const RecurringDetailSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be returned in a particular response.\n\nThe additionalData object consists of entries, each of which includes the key and value.',
        'x-addedInVersion': '5',
      }),
    alias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The alias of the credit card number.\n\nApplies only to recurring contracts storing credit card details',
        'x-addedInVersion': '4',
      }),
    aliasType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The alias type of the credit card number.\n\nApplies only to recurring contracts storing credit card details.',
        'x-addedInVersion': '4',
      }),
    bank: BankAccountSchema.exactOptional().openapi({
      description: 'A container for bank account data.',
    }),
    billingAddress: AddressSchema.exactOptional().openapi({
      description: 'The billing address.',
      'x-addedInVersion': '4',
    }),
    card: CardSchema.exactOptional().openapi({ description: 'A container for card data.' }),
    contractTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Types of recurring contracts.', 'x-addedInVersion': '12' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the recurring details were created.' }),
    firstPspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `pspReference` of the first recurring payment that created the recurring detail.',
        'x-addedInVersion': '4',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional descriptive name for this recurring detail.' }),
    networkTxReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.\n\nThis contains either the Mastercard Trace ID or the Visa Transaction ID.',
        'x-addedInVersion': '68',
      }),
    paymentMethodVariant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The  type or sub-brand of a payment method used, e.g. Visa Debit, Visa Corporate, etc. For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).',
        'x-addedInVersion': '2',
      }),
    recurringDetailReference: z
      .string()
      .openapi({ description: 'The reference that uniquely identifies the recurring detail.' }),
    shopperName: NameSchema.exactOptional().openapi({
      description: 'The name of the shopper.',
      'x-addedInVersion': '4',
    }),
    socialSecurityNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A shopper's social security number (only in countries where it is legal to collect).",
        'x-addedInVersion': '4',
      }),
    tokenDetails: TokenDetailsSchema.exactOptional().openapi({ 'x-addedInVersion': '2' }),
    transactionLinkId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the transaction link, used for Mastercard recurring transactions.',
        'x-addedInVersion': '68',
      }),
    variant: z
      .string()
      .openapi({ description: 'The payment method, such as “mc", "visa", "ideal", "paypal".' }),
  })
  .openapi({ required: ['recurringDetailReference', 'variant'] })
  .openapi('RecurringDetail')

const RecurringDetailWrapperSchema = z
  .object({ RecurringDetail: RecurringDetailSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RecurringDetailWrapper')

const RecurringDetailsRequestSchema = z
  .strictObject({
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier you want to process the (transaction) request with.',
      }),
    recurring: RecurringSchema.exactOptional().openapi({
      description:
        "A container for the type of a recurring contract to be retrieved.\n\nThe contract value needs to match the contract value submitted in the payment transaction used to create a recurring contract.\nHowever, if `ONECLICK,RECURRING` is the original contract definition in the initial payment, then `contract` should take either `ONECLICK` or `RECURRING`, depending on whether or not you want the shopper to enter their card's security code when they finalize their purchase.",
    }),
    shopperReference: z
      .string()
      .openapi({
        description:
          'The reference you use to uniquely identify the shopper (e.g. user ID or account ID).',
      }),
  })
  .openapi({ required: ['merchantAccount', 'shopperReference'] })
  .openapi('RecurringDetailsRequest')

const RecurringDetailsResultSchema = z
  .strictObject({
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the recurring details were created.' }),
    details: z
      .array(RecurringDetailWrapperSchema)
      .exactOptional()
      .openapi({ description: 'Payment details stored for recurring payments.' }),
    lastKnownShopperEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The most recent email for this shopper (if available).' }),
    shopperReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference you use to uniquely identify the shopper (e.g. user ID or account ID).',
      }),
  })
  .openapi({ required: [] })
  .openapi('RecurringDetailsResult')

const ScheduleAccountUpdaterRequestSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be required for a particular request.',
      }),
    card: CardSchema.exactOptional().openapi({
      description:
        'Credit card data.\n\nOptional if `shopperReference` and `selectedRecurringDetailReference` are provided.',
    }),
    merchantAccount: z.string().openapi({ description: 'Account of the merchant.' }),
    reference: z
      .string()
      .openapi({ description: 'A reference that merchants can apply for the call.' }),
    selectedRecurringDetailReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The selected detail recurring reference.\n\nOptional if `card` is provided.',
      }),
    shopperReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference of the shopper that owns the recurring contract.\n\nOptional if `card` is provided.',
      }),
  })
  .openapi({ required: ['merchantAccount', 'reference'] })
  .openapi('ScheduleAccountUpdaterRequest')

const ScheduleAccountUpdaterResultSchema = z
  .strictObject({
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character unique reference associated with the transaction. This value is globally unique; quote it when communicating with us about this request.",
      }),
    result: z
      .string()
      .openapi({
        description:
          'The result of scheduling an Account Updater. If scheduling was successful, this field returns **Success**; otherwise it contains the error message.',
      }),
  })
  .openapi({ required: ['pspReference', 'result'] })
  .openapi('ScheduleAccountUpdaterResult')

const ServiceErrorSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Contains additional information about the payment. Some data fields are included only if you select them first. Go to **Customer Area** > **Developers** > **Additional data**.',
        'x-addedInVersion': '46',
      }),
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

const PostDisableDisableARecurringContractExample = {
  summary: 'Disable a recurring contract',
  value: {
    shopperReference: 'YOUR_SHOPPER_REFERENCE',
    recurringDetailReference: '8314442372419167',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  },
}

const PostListRecurringDetailsListAllRecurringDetailsExample = {
  summary: 'List recurring details of the specified contract value',
  value: {
    recurring: { contract: 'RECURRING' },
    shopperReference: 'YOUR_SHOPPER_REFERENCE',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  },
}

const PostNotifyShopperNotifyShopperOfUpcomingRecurringPaymentExample = {
  summary: 'Request issuer to notify shopper of upcoming recurring payment',
  value: {
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    storedPaymentMethodId: '8415995487234100',
    shopperReference: 'YOUR_SHOPPER_REFERENCE',
    amount: { currency: 'INR', value: 1000 },
    billingDate: '2021-03-16',
    reference: 'Example reference',
    displayedReference: 'exampleDisplayedReference',
  },
}

const PostNotifyShopperNotifyShopperOfUpcomingRecurringPayment_200Example = {
  summary: "Example response for request 'notifyShopper'",
  value: {
    message: 'Request Processed Successfully',
    resultCode: 'Success',
    shopperNotificationReference: '9915003646742627',
    storedPaymentMethodId: '8415995487234100',
    pspReference: 'M5N7TQ4TG5PFWR50',
    reference: 'Example reference',
    displayedReference: 'exampleDisplayedReference',
  },
}

const PostScheduleAccountUpdaterScheduleAccountUpdaterWithCardDataExample = {
  summary: 'Schedule AccountUpdater with card data',
  value: {
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    reference: 'YOUR_REFERENCE',
    card: {
      expiryMonth: '03',
      expiryYear: '2030',
      holderName: 'Adyen Test',
      number: '4111111111111111',
    },
  },
}

const PostScheduleAccountUpdaterScheduleAccountUpdaterWithCardData_200Example = {
  summary: 'Scheduled Account Updater with card data',
  value: { pspReference: 'QFQTPCQ8HXSKGK82', result: 'Success' },
}

const PostScheduleAccountUpdaterScheduleAccountUpdaterWithTokenDataExample = {
  summary: 'Schedule AccountUpdater with token data',
  value: {
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    reference: 'YOUR_REFERENCE',
    shopperReference: 'YOUR_SHOPPER_REFERENCE',
    selectedRecurringDetailReference: '8814232895168272',
  },
}

const PostScheduleAccountUpdaterScheduleAccountUpdaterWithTokenData_200Example = {
  summary: 'Scheduled Account Updater with token data',
  value: { pspReference: 'JLCMPCQ8HXSKGK82', result: 'Success' },
}

const PostScheduleAccountUpdaterScheduleAccountUpdaterWithTokenData_422Example = {
  summary: 'Error response for RecurringShopper not found',
  value: {
    status: 422,
    errorCode: '000',
    message: 'RecurringShopper not found',
    errorType: 'validation',
  },
}

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postCreatePermitRoute = createRoute({
  method: 'post',
  path: '/createPermit',
  tags: ['General'],
  summary: 'Create new permits linked to a recurring contract.',
  description:
    'Create permits for a recurring contract, including support for defining restrictions.',
  operationId: 'post-createPermit',
  request: { body: { content: { 'application/json': { schema: CreatePermitRequestSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: CreatePermitResultSchema } },
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
  deprecated: true,
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postDisableRoute = createRoute({
  method: 'post',
  path: '/disable',
  tags: ['General'],
  summary: 'Disable stored payment details',
  description:
    'Disables stored payment details to stop charging a shopper with this particular recurring detail ID.\n\nFor more information, refer to [Disable stored details](https://docs.adyen.com/online-payments/classic-integrations/classic-api-integration/tokenization/disable-stored-details).',
  operationId: 'post-disable',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DisableRequestSchema,
          examples: { disableARecurringContract: PostDisableDisableARecurringContractExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: DisableResultSchema } },
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

export const postDisablePermitRoute = createRoute({
  method: 'post',
  path: '/disablePermit',
  tags: ['General'],
  summary: 'Disable an existing permit.',
  description: 'Disable a permit that was previously linked to a recurringDetailReference.',
  operationId: 'post-disablePermit',
  request: { body: { content: { 'application/json': { schema: DisablePermitRequestSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: DisablePermitResultSchema } },
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
  deprecated: true,
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postListRecurringDetailsRoute = createRoute({
  method: 'post',
  path: '/listRecurringDetails',
  tags: ['General'],
  summary: 'Get stored payment details',
  description:
    'Lists the stored payment details for a shopper, if there are any available. The recurring detail ID can be used with a regular authorisation request to charge the shopper. A summary of the payment detail is returned for presentation to the shopper.\n\nFor more information, refer to [Retrieve stored details](https://docs.adyen.com/classic-integration/recurring-payments/retrieve-stored-details/).',
  operationId: 'post-listRecurringDetails',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RecurringDetailsRequestSchema,
          examples: {
            listAllRecurringDetails: PostListRecurringDetailsListAllRecurringDetailsExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: RecurringDetailsResultSchema } },
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

export const postNotifyShopperRoute = createRoute({
  method: 'post',
  path: '/notifyShopper',
  tags: ['General'],
  summary: 'Ask issuer to notify the shopper',
  description:
    'Sends a request to the issuer so they can inform the shopper about the upcoming recurring payment. This endpoint is used only for local acquiring in India. For more information, refer to [Recurring card payments in India](https://docs.adyen.com/payment-methods/cards/cards-recurring-india).',
  operationId: 'post-notifyShopper',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NotifyShopperRequestSchema,
          examples: {
            notifyShopperOfUpcomingRecurringPayment:
              PostNotifyShopperNotifyShopperOfUpcomingRecurringPaymentExample,
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
          schema: NotifyShopperResultSchema,
          examples: {
            notifyShopperOfUpcomingRecurringPayment:
              PostNotifyShopperNotifyShopperOfUpcomingRecurringPayment_200Example,
          },
        },
      },
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

export const postScheduleAccountUpdaterRoute = createRoute({
  method: 'post',
  path: '/scheduleAccountUpdater',
  tags: ['General'],
  summary: 'Schedule running the Account Updater',
  description:
    'When making the API call, you can submit either the credit card information, or the recurring detail reference and the shopper reference:\n* If the card information is provided, all the sub-fields for `card` are mandatory.\n* If the recurring detail reference is provided, the fields for `shopperReference` and `selectedRecurringDetailReference` are mandatory.',
  operationId: 'post-scheduleAccountUpdater',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ScheduleAccountUpdaterRequestSchema,
          examples: {
            scheduleAccountUpdaterWithCardData:
              PostScheduleAccountUpdaterScheduleAccountUpdaterWithCardDataExample,
            scheduleAccountUpdaterWithTokenData:
              PostScheduleAccountUpdaterScheduleAccountUpdaterWithTokenDataExample,
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
          schema: ScheduleAccountUpdaterResultSchema,
          examples: {
            scheduleAccountUpdaterWithCardData:
              PostScheduleAccountUpdaterScheduleAccountUpdaterWithCardData_200Example,
            scheduleAccountUpdaterWithTokenData:
              PostScheduleAccountUpdaterScheduleAccountUpdaterWithTokenData_200Example,
          },
        },
      },
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
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: {
            scheduleAccountUpdaterWithTokenData:
              PostScheduleAccountUpdaterScheduleAccountUpdaterWithTokenData_422Example,
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

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

const FraudCheckResultSchema = z
  .strictObject({
    accountScore: z
      .int32()
      .openapi({ description: 'The fraud score generated by the risk check.' }),
    checkId: z.int32().openapi({ description: 'The ID of the risk check.' }),
    name: z.string().openapi({ description: 'The name of the risk check.' }),
  })
  .openapi({ required: ['accountScore', 'checkId', 'name'] })
  .openapi('FraudCheckResult')

const FraudCheckResultWrapperSchema = z
  .object({ FraudCheckResult: FraudCheckResultSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FraudCheckResultWrapper')

const FraudResultSchema = z
  .strictObject({
    accountScore: z
      .int32()
      .openapi({ description: 'The total fraud score generated by the risk checks.' }),
    results: z
      .array(FraudCheckResultWrapperSchema)
      .exactOptional()
      .openapi({ description: 'The result of the individual risk checks.' }),
  })
  .openapi({ required: ['accountScore'] })
  .openapi('FraudResult')

const NameSchema = z
  .strictObject({
    firstName: z.string().max(80).openapi({ description: 'The first name.' }),
    lastName: z.string().max(80).openapi({ description: 'The last name.' }),
  })
  .openapi({ required: ['firstName', 'lastName'] })
  .openapi('Name')

const FundSourceSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'A map of name-value pairs for passing additional or industry-specific data.',
      }),
    billingAddress: AddressSchema.exactOptional().openapi({
      description: 'The address where to send the invoice.',
    }),
    card: CardSchema.exactOptional().openapi({
      description:
        'Credit card data.\n\nOptional if `shopperReference` and `selectedRecurringDetailReference` are provided.',
    }),
    shopperEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address of the person.' }),
    shopperName: NameSchema.exactOptional().openapi({ description: 'Name of the person.' }),
    telephoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Phone number of the person' }),
  })
  .openapi({ required: [] })
  .openapi('FundSource')

const ModifyRequestSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be required for a particular payout request.',
      }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    originalReference: z
      .string()
      .openapi({ description: 'The PSP reference received in the `/submitThirdParty` response.' }),
  })
  .openapi({ required: ['merchantAccount', 'originalReference'] })
  .openapi('ModifyRequest')

const ModifyResponseSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be returned in a particular response.',
      }),
    pspReference: z
      .string()
      .openapi({
        description:
          "Adyen's 16-character string reference associated with the transaction. This value is globally unique; quote it when communicating with us about this response.",
      }),
    response: z
      .string()
      .openapi({
        description:
          'The response:\n* In case of success, it is either `payout-confirm-received` or `payout-decline-received`.\n* In case of an error, an informational message is returned.',
      }),
  })
  .openapi({ required: ['pspReference', 'response'] })
  .openapi('ModifyResponse')

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

const PayoutRequestSchema = z
  .strictObject({
    amount: AmountSchema.openapi({
      description:
        'The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).',
    }),
    billingAddress: AddressSchema.exactOptional().openapi({
      description:
        'The address where to send the invoice.\n> The `billingAddress` object is required in the following scenarios. Include all of the fields within this object.\n>* For 3D Secure 2 transactions in all browser-based and mobile implementations.\n>* For cross-border payouts to and from Canada.',
      'x-addedInVersion': '4',
    }),
    card: CardSchema.exactOptional().openapi({
      description:
        'A container for card data.\n> Either `bankAccount` or `card` field must be provided in a payment request.',
    }),
    fraudOffset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer value that is added to the normal fraud score. The value can be either positive or negative.',
      }),
    fundSource: FundSourceSchema.exactOptional().openapi({
      description: 'The person or entity funding the money.',
      'x-addedInVersion': '64',
    }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    recurring: RecurringSchema.exactOptional().openapi({
      description:
        'The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).',
    }),
    reference: z
      .string()
      .openapi({
        description:
          'The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.\nIf you need to provide multiple references for a transaction, separate them with hyphens ("-").\nMaximum length: 80 characters.',
      }),
    selectedRecurringDetailReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.',
      }),
    shopperEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication if you did not include the `telephoneNumber`.",
      }),
    shopperInteraction: z
      .enum(['Ecommerce', 'ContAuth', 'Moto', 'POS'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.\nFor the web service API, Adyen assumes Ecommerce shopper interaction by default.\n\nThis field has the following possible values:\n* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.\n* `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).\n* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.\n* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.',
      }),
    shopperName: NameSchema.exactOptional().openapi({
      description: "The shopper's full name.",
      'x-addedInVersion': '7',
    }),
    shopperReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required for recurring payments. \nYour reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.\n> Your reference must not include personally identifiable information (PII) such as name or email address.',
      }),
    telephoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The shopper's telephone number.\n The phone number must include a plus sign (+) and a country code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not follow the guidelines, we do not submit it for authentication.\n> Required for Visa and JCB transactions that require 3D Secure 2 authentication, if you did not include the `shopperEmail`.",
        'x-addedInVersion': '7',
      }),
  })
  .openapi({ required: ['amount', 'merchantAccount', 'reference'] })
  .openapi('PayoutRequest')

const PayoutResponseSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Developers** > **Additional data**.',
        'x-anyOf': [
          { $ref: '#/components/schemas/ResponseAdditionalData3DSecure' },
          { $ref: '#/components/schemas/ResponseAdditionalDataBillingAddress' },
          { $ref: '#/components/schemas/ResponseAdditionalDataCard' },
          { $ref: '#/components/schemas/ResponseAdditionalDataCommon' },
          { $ref: '#/components/schemas/ResponseAdditionalDataDomesticError' },
          { $ref: '#/components/schemas/ResponseAdditionalDataInstallments' },
          { $ref: '#/components/schemas/ResponseAdditionalDataNetworkTokens' },
          { $ref: '#/components/schemas/ResponseAdditionalDataOpi' },
          { $ref: '#/components/schemas/ResponseAdditionalDataSepa' },
          { $ref: '#/components/schemas/ResponseAdditionalDataSwish' },
        ],
      }),
    authCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Authorisation code:\n* When the payment is authorised successfully, this field holds the authorisation code for the payment.\n* When the payment is not authorised, this field is empty.',
      }),
    dccAmount: AmountSchema.exactOptional().openapi({
      description:
        'Includes the currency of the conversion and the value of the transaction.\n> This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).',
    }),
    dccSignature: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cryptographic signature used to verify `dccQuote`.\n> This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).',
      }),
    fraudResult: FraudResultSchema.exactOptional().openapi({
      description: 'The fraud result properties of the payment.',
    }),
    issuerUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to direct the shopper to.\n> In case of SecurePlus, do not redirect a shopper to this URL.',
      }),
    md: z.string().max(20000).exactOptional().openapi({ description: 'The payment session.' }),
    paRequest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The 3D request data for the issuer.\n\nIf the value is **CUPSecurePlus-CollectSMSVerificationCode**, collect an SMS code from the shopper and pass it in the `/authorise3D` request. For more information, see [3D Secure](https://docs.adyen.com/classic-integration/3d-secure).',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Adyen's 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.",
      }),
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.\n\nFor more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).",
      }),
    resultCode: z
      .enum([
        'AuthenticationFinished',
        'AuthenticationNotRequired',
        'Authorised',
        'Cancelled',
        'ChallengeShopper',
        'Error',
        'IdentifyShopper',
        'PartiallyAuthorised',
        'Pending',
        'PresentToShopper',
        'Received',
        'RedirectShopper',
        'Refused',
        'Success',
      ])
      .exactOptional()
      .openapi({
        description:
          "The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).\n\nPossible values:\n\n* **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.\n* **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only).\n* **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.\n* **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.\n* **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.\n* **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.\n* **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.\n* **PartiallyAuthorised** – The payment has been authorised for a partial amount.\nThis happens for card payments when the merchant supports Partial Authorisations and the cardholder has insufficient funds.\n* **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.\n* **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.\n* **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.\n* **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.\n* **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.",
      }),
  })
  .openapi({ required: [] })
  .openapi('PayoutResponse')

const ResponseAdditionalData3DSecureSchema = z
  .strictObject({
    cardHolderInfo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Information provided by the issuer to the cardholder. If this field is present, you need to display this information to the cardholder. ',
      }),
    cavv: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cardholder Authentication Verification Value (CAVV) for the 3D Secure authentication session, as a Base64-encoded 20-byte array.',
      }),
    cavvAlgorithm: z.string().exactOptional().openapi({ description: 'The CAVV algorithm used.' }),
    scaExemptionRequested: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Shows the [exemption type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that Adyen requested for the payment.\n\n Possible values:\n* **lowValue** \n* **secureCorporate** \n* **trustedBeneficiary** \n* **transactionRiskAnalysis** ',
      }),
    'threeds2.cardEnrolled': z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether a card is enrolled for 3D Secure 2.' }),
  })
  .openapi({ required: [] })
  .openapi('ResponseAdditionalData3DSecure')

const ResponseAdditionalDataBillingAddressSchema = z
  .strictObject({
    'billingAddress.city': z
      .string()
      .exactOptional()
      .openapi({ description: 'The billing address city passed in the payment request.' }),
    'billingAddress.country': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The billing address country passed in the payment request.\n\nExample: NL',
      }),
    'billingAddress.houseNumberOrName': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The billing address house number or name passed in the payment request.',
      }),
    'billingAddress.postalCode': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The billing address postal code passed in the payment request.\n\nExample: 1011 DJ',
      }),
    'billingAddress.stateOrProvince': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The billing address state or province passed in the payment request.\n\nExample: NH',
      }),
    'billingAddress.street': z
      .string()
      .exactOptional()
      .openapi({ description: 'The billing address street passed in the payment request.' }),
  })
  .openapi({ required: [] })
  .openapi('ResponseAdditionalDataBillingAddress')

const ResponseAdditionalDataCardSchema = z
  .strictObject({
    cardAltID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is an ALT ID (alternate ID) mapped to the Card PAN.\n\n> Returned only in case of Ecommerce Card Payment in India',
      }),
    cardBin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first six digits of the card number.\n\nThis is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with a six-digit BIN.\n\nExample: 521234',
      }),
    cardHolderName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cardholder name passed in the payment request.' }),
    cardIssuingBank: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bank or the financial institution granting lines of credit through card association branded payment cards. This information can be included when available.',
      }),
    cardIssuingCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country where the card was issued.\n\nExample: US' }),
    cardIssuingCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency in which the card is issued, if this information is available. Provided as the currency code or currency number from the ISO-4217 standard. \n\nExample: USD',
      }),
    cardPaymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The card payment method used for the transaction.\n\nExample: amex',
      }),
    cardProductId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Card Product ID represents the type of card following card scheme product definitions and can be returned for Adyen Acquiring service level payments.\n\nExample values Visa:\n* **A** - Visa Traditional\n* **B** - Visa Traditional Rewards\n* **C** - Visa Signature\n* **D** - Visa Signature Preferred\n* **F** - Visa Classic\n\nExample values Mastercard:\n* **MCC** - Mastercard Card\n* **MCE** - Mastercard Electronic Card\n* **MCF** - Mastercard Corporate Fleet Card\n* **MCG** - Gold Mastercard Card\n* **MCH** - Mastercard Premium Charge\n* **MCI** - Mastercard Select Debit\n',
      }),
    cardSummary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last four digits of a card number.\n\n> Returned only in case of a card payment.',
      }),
    issuerBin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first eight digits of the card number. Only returned if the card number is 16 digits or more.\n\nThis is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with an eight-digit BIN.\n\nExample: 52123423',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResponseAdditionalDataCard')

const ResponseAdditionalDataCommonSchema = z
  .strictObject({
    acquirerAccountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Adyen acquirer account.\n\nExample: PayPalSandbox_TestAcquirer\n\n> Only relevant for PayPal transactions.',
      }),
    acquirerCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the acquirer processing the payment request.\n\nExample: TestPmmAcquirer',
      }),
    acquirerReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference number that can be used for reconciliation in case a non-Adyen acquirer is used for settlement.\n\nExample: 7C9N3FNBKT9',
      }),
    alias: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Adyen alias of the card.\n\nExample: H167852639363479' }),
    aliasType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the card alias.\n\nExample: Default' }),
    authCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Authorisation code:\n* When the payment is authorised successfully, this field holds the authorisation code for the payment.\n* When the payment is not authorised, this field is empty.\n\nExample: 58747',
      }),
    authorisationMid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Merchant ID known by the acquirer.' }),
    authorisedAmountCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency of the authorised amount, as a three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).',
      }),
    authorisedAmountValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value of the amount authorised.\n\nThis amount is represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).',
      }),
    avsResult: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The AVS result code of the payment, which provides information about the outcome of the AVS check.\n\nFor possible values, see [AVS](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#billing-address-does-not-match-cardholder-address-avs).',
      }),
    avsResultRaw: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Raw AVS result received from the acquirer, where available.\n\nExample: D',
      }),
    bic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'BIC of a bank account.\n\nExample: TESTNL01\n\n> Only relevant for SEPA Direct Debit transactions.',
      }),
    coBrandedWith: z
      .string()
      .exactOptional()
      .openapi({ description: 'Includes the co-branded card information.' }),
    cvcResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'The result of CVC verification.', example: '1 Matches' }),
    cvcResultRaw: z
      .string()
      .exactOptional()
      .openapi({ description: 'The raw result of CVC verification.', example: 'M' }),
    dsTransID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Supported for 3D Secure 2. The unique transaction identifier assigned by the DS to identify a single transaction.',
      }),
    eci: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Electronic Commerce Indicator returned from the schemes for the 3DS payment session.\n\nExample: 02',
      }),
    expiryDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The expiry date on the card.\n\nExample: 6/2016\n\n> Returned only in case of a card payment.',
      }),
    extraCostsCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency of the extra amount charged due to additional amounts set in the skin used in the HPP payment request.\n\nExample: EUR',
      }),
    extraCostsValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the extra amount charged due to additional amounts set in the skin used in the HPP payment request. The amount is in minor units.',
      }),
    'fraudCheck-[itemNr]-[FraudCheckname]': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fraud score due to a particular fraud check. The fraud check name is found in the key of the key-value pair.',
      }),
    fraudManualReview: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if the payment is sent to manual review.' }),
    fraudResultType: z
      .enum(['AMBER', 'GREEN', 'RED'])
      .exactOptional()
      .openapi({
        description:
          'The fraud result properties of the payment. Possible values:\n* AMBER\n* GREEN\n* RED\n\n',
      }),
    fraudRiskLevel: z
      .enum(['veryLow', 'low', 'medium', 'high', 'veryHigh'])
      .exactOptional()
      .openapi({
        description:
          'The risk level of the transaction as classified by the [machine learning](https://docs.adyen.com/risk-management/configure-your-risk-profile/machine-learning-rules/) fraud risk rule. The risk level indicates the likelihood that a transaction will result in a fraudulent dispute. Possible values:\n* veryLow\n* low\n* medium\n* high\n* veryHigh\n\n',
      }),
    fundingSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Information regarding the funding type of the card. The possible return values are:\n* CHARGE\n* CREDIT\n* DEBIT\n* PREPAID\n* PREPAID_RELOADABLE\n\n* PREPAID_NONRELOADABLE\n* DEFFERED_DEBIT\n\n> This functionality requires additional configuration on Adyen's end. To enable it, contact the Support Team.\n\nFor receiving this field in the notification, enable **Include Funding Source** in **Notifications** > **Additional settings**.",
      }),
    fundsAvailability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates availability of funds.\n\nVisa:\n* "I" (fast funds are supported)\n* "N" (otherwise)\n\nMastercard:\n* "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)\n* "N" (otherwise)\n\n> Returned when you verify a card BIN or estimate costs, and only if payoutEligible is "Y" or "D".',
      }),
    inferredRefusalReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provides the more granular indication of why a transaction was refused. When a transaction fails with either "Refused", "Restricted Card", "Transaction Not Permitted", "Not supported" or "DeclinedNon Generic" refusalReason from the issuer, Adyen cross references its PSP-wide data for extra insight into the refusal reason. If an inferred refusal reason is available, the `inferredRefusalReason`, field is populated and the `refusalReason`, is set to "Not Supported".\n\nPossible values:\n\n* 3D Secure Mandated\n* Closed Account\n* ContAuth Not Supported\n* CVC Mandated\n* Ecommerce Not Allowed\n* Crossborder Not Supported\n* Card Updated\n\n* Low Authrate Bin\n* Non-reloadable prepaid card',
      }),
    isCardCommercial: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates if the card is used for business purposes only.' }),
    issuerCountry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The issuing country of the card based on the BIN list that Adyen maintains.\n\nExample: JP',
      }),
    liabilityShift: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Boolean value indicating whether a liability shift was offered for this payment.',
      }),
    mcBankNetReferenceNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `mcBankNetReferenceNumber`, is a minimum of six characters and a maximum of nine characters long.\n\n> Contact Support Team to enable this field.',
      }),
    merchantAdviceCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Merchant Advice Code (MAC) can be returned by Mastercard issuers for refused payments. If present, the MAC contains information about why the payment failed, and whether it can be retried.\n\nFor more information see [Mastercard Merchant Advice Codes](https://docs.adyen.com/development-resources/raw-acquirer-responses#mastercard-merchant-advice-codes).',
      }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference provided for the transaction.' }),
    networkProcessingMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the processing flow.\n\nPossible values:\n* **sale**: You do not need to separately capture the funds, because capture happens automatically as part of the transaction. \n* **auth**: If you have not [configured automatic capture for the transaction](https://docs.adyen.com/online-payments/capture#types-of-capture), you must manually capture the funds.',
      }),
    networkTxReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.\n\nThis contains either the Mastercard Trace ID or the Visa Transaction ID.',
      }),
    ownerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The owner name of a bank account.\n\nOnly relevant for SEPA Direct Debit transactions.',
      }),
    paymentAccountReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Payment Account Reference (PAR) value links a network token with the underlying primary account number (PAN). The PAR value consists of 29 uppercase alphanumeric characters.',
      }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payment method used in the transaction.' }),
    paymentMethodVariant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Adyen sub-variant of the payment method used for the payment request.\n\nFor more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).\n\nExample: mcpro',
      }),
    payoutEligible: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether a payout is eligible or not for this card.\n\nVisa:\n* "Y"\n* "N"\n\nMastercard:\n* "Y" (domestic and cross-border)\n\n* "D" (only domestic)\n* "N" (no MoneySend)\n* "U" (unknown)',
      }),
    realtimeAccountUpdaterStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The response code from the Real Time Account Updater service.\n\nPossible return values are:\n* CardChanged\n* CardExpiryChanged\n* CloseAccount\n\n* ContactCardAccountHolder',
      }),
    receiptFreeText: z
      .string()
      .exactOptional()
      .openapi({ description: 'Message to be displayed on the terminal.' }),
    'recurring.contractTypes': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The recurring contract types applicable to the transaction.',
        'x-addedInVersion': '40',
      }),
    'recurring.firstPspReference': z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The `pspReference`, of the first recurring payment that created the recurring detail.\n\nThis functionality requires additional configuration on Adyen's end. To enable it, contact the Support Team.",
      }),
    'recurring.recurringDetailReference': z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The reference that uniquely identifies the recurring transaction.',
        'x-deprecatedInVersion': '68',
        'x-deprecatedMessage': 'Use tokenization.storedPaymentMethodId instead.',
      }),
    'recurring.shopperReference': z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The provided reference of the shopper for a recurring transaction.',
        'x-addedInVersion': '40',
        'x-deprecatedInVersion': '68',
        'x-deprecatedMessage': 'Use tokenization.shopperReference instead.',
      }),
    recurringProcessingModel: z
      .enum(['CardOnFile', 'Subscription', 'UnscheduledCardOnFile'])
      .exactOptional()
      .openapi({
        description: 'The processing model used for the recurring transaction.',
        'x-addedInVersion': '40',
      }),
    referred: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the payment is referred, this field is set to true.\n\nThis field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.\n\nExample: true',
      }),
    refusalReasonRaw: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Raw refusal reason received from the acquirer, where available.\n\nExample: AUTHORISED',
      }),
    requestAmount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of the payment request.' }),
    requestCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency of the payment request.' }),
    shopperInteraction: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The shopper interaction type of the payment request.\n\nExample: Ecommerce',
      }),
    shopperReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The shopperReference passed in the payment request.\n\nExample: AdyenTestShopperXX',
      }),
    terminalId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The terminal ID used in a point-of-sale payment.\n\nExample: 06022622',
      }),
    threeDAuthenticated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Boolean value indicating whether 3DS authentication was completed on this payment.\n\nExample: true',
      }),
    threeDAuthenticatedResponse: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The raw 3DS authentication result from the card issuer.\n\nExample: N',
      }),
    threeDOffered: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Boolean value indicating whether 3DS was offered for this payment.\n\nExample: true',
      }),
    threeDOfferedResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The raw enrollment result from the 3DS directory services of the card schemes.\n\nExample: Y',
      }),
    threeDSVersion: z.string().exactOptional().openapi({ description: 'The 3D Secure 2 version.' }),
    'tokenization.shopperReference': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference for the shopper that you sent when tokenizing the payment details.',
      }),
    'tokenization.store.operationType': z
      .enum(['created', 'updated', 'alreadyExisting'])
      .exactOptional()
      .openapi({
        description:
          'The operation performed on the token. Possible values:\n\n* **created**: the token has been created.\n* **updated**: the existing token has been updated.\n* **alreadyExisting**: the details have already been stored.\n',
      }),
    'tokenization.storedPaymentMethodId': z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference that uniquely identifies tokenized payment details.',
      }),
    transactionLinkId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Returned in the response for Mastercard payments.\n\nThis contains the Mastercard Transaction Link Identifier (TLID).',
      }),
    visaTransactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `visaTransactionId`, has a fixed length of 15 numeric characters.\n\n> Contact Support Team to enable this field.',
      }),
    xid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. \n\nExample: ODgxNDc2MDg2MDExODk5MAAAAAA=",
      }),
  })
  .openapi({ required: [] })
  .openapi('ResponseAdditionalDataCommon')

const ResponseAdditionalDataDomesticErrorSchema = z
  .strictObject({
    domesticRefusalReasonRaw: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason the transaction was declined, given by the local issuer. \nCurrently available for merchants in Japan.',
      }),
    domesticShopperAdvice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The action the shopper should take, in a local language. \nCurrently available in Japanese, for merchants in Japan.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResponseAdditionalDataDomesticError')

const ResponseAdditionalDataInstallmentsSchema = z
  .strictObject({
    'installmentPaymentData.installmentType': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of installment. The value of `installmentType` should be **IssuerFinanced**.',
      }),
    'installmentPaymentData.option[itemNr].annualPercentageRate': z
      .string()
      .exactOptional()
      .openapi({ description: 'Annual interest rate.' }),
    'installmentPaymentData.option[itemNr].firstInstallmentAmount': z
      .string()
      .exactOptional()
      .openapi({ description: 'First Installment Amount in minor units.' }),
    'installmentPaymentData.option[itemNr].installmentFee': z
      .string()
      .exactOptional()
      .openapi({ description: 'Installment fee amount in minor units.' }),
    'installmentPaymentData.option[itemNr].interestRate': z
      .string()
      .exactOptional()
      .openapi({ description: 'Interest rate for the installment period.' }),
    'installmentPaymentData.option[itemNr].maximumNumberOfInstallments': z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum number of installments possible for this payment.' }),
    'installmentPaymentData.option[itemNr].minimumNumberOfInstallments': z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum number of installments possible for this payment.' }),
    'installmentPaymentData.option[itemNr].numberOfInstallments': z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of installments possible for this payment.' }),
    'installmentPaymentData.option[itemNr].subsequentInstallmentAmount': z
      .string()
      .exactOptional()
      .openapi({ description: 'Subsequent Installment Amount in minor units.' }),
    'installmentPaymentData.option[itemNr].totalAmountDue': z
      .string()
      .exactOptional()
      .openapi({ description: 'Total amount in minor units.' }),
    'installmentPaymentData.paymentOptions': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Possible values:\n* PayInInstallmentsOnly\n* PayInFullOnly\n* PayInFullOrInstallments',
      }),
    'installments.value': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of installments that the payment amount should be charged with.\n\nExample: 5\n> Only relevant for card payments in countries that support installments.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResponseAdditionalDataInstallments')

const ResponseAdditionalDataNetworkTokensSchema = z
  .strictObject({
    'networkToken.available': z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates whether a network token is available for the specified card.',
      }),
    'networkToken.bin': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Bank Identification Number of a tokenized card, which is the first six digits of a card number.',
      }),
    'networkToken.tokenSummary': z
      .string()
      .exactOptional()
      .openapi({ description: 'The last four digits of a network token.' }),
  })
  .openapi({ required: [] })
  .openapi('ResponseAdditionalDataNetworkTokens')

const ResponseAdditionalDataOpiSchema = z
  .strictObject({
    'opi.transToken': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Returned in the response if you included `opi.includeTransToken: true` in an ecommerce payment request. This contains an Oracle Payment Interface token that you can store in your Oracle Opera database to identify tokenized ecommerce transactions. For more information and required settings, see [Oracle Opera](https://docs.adyen.com/plugins/oracle-opera#opi-token-ecommerce).',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResponseAdditionalDataOpi')

const ResponseAdditionalDataSepaSchema = z
  .strictObject({
    'sepadirectdebit.dateOfSignature': z
      .string()
      .exactOptional()
      .openapi({ description: 'The transaction signature date.\n\nFormat: yyyy-MM-dd' }),
    'sepadirectdebit.mandateId': z
      .string()
      .exactOptional()
      .openapi({
        description: 'Its value corresponds to the pspReference value of the transaction.',
      }),
    'sepadirectdebit.sepadirectdebit.dueDate': z
      .string()
      .exactOptional()
      .openapi({ description: "The date that the the shopper's bank account is charged." }),
    'sepadirectdebit.sequenceType': z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field can take one of the following values:\n* OneOff: (OOFF) Direct debit instruction to initiate exactly one direct debit transaction.\n\n* First: (FRST) Initial/first collection in a series of direct debit instructions.\n* Recurring: (RCUR) Direct debit instruction to carry out regular direct debit transactions initiated by the creditor.\n* Final: (FNAL) Last/final collection in a series of direct debit instructions.\n\nExample: OOFF',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResponseAdditionalDataSepa')

const ResponseAdditionalDataSwishSchema = z
  .strictObject({
    'swish.payerAlias': z
      .string()
      .exactOptional()
      .openapi({ description: "A Swish shopper's telephone number." }),
  })
  .openapi({ required: [] })
  .openapi('ResponseAdditionalDataSwish')

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

const StoreDetailAndSubmitRequestSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be required for a particular request.',
      }),
    amount: AmountSchema.openapi({
      description: 'A container object for the payable amount information of the transaction.',
    }),
    bank: BankAccountSchema.exactOptional().openapi({
      description:
        'A container for bank account data.\n> This field is mandatory if `card` is not provided.',
    }),
    billingAddress: AddressSchema.exactOptional().openapi({
      description:
        'The billing address.\n\n> The `billingAddress` object is required for cross-border payouts to and from Canada. Include all of the fields within this object.',
      'x-addedInVersion': '18',
    }),
    card: CardSchema.exactOptional().openapi({
      description:
        'A container for card data.\n> This field is mandatory if `bank` is not provided.',
    }),
    dateOfBirth: z.iso
      .date()
      .openapi({
        description:
          'The date of birth.\nFormat: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD\nFor Paysafecard it must be the same as used when registering the Paysafecard account.\n> This field is mandatory for natural persons.',
        'x-addedInVersion': '24',
      }),
    entityType: z
      .enum(['NaturalPerson', 'Company'])
      .openapi({
        description: 'The type of the entity the payout is processed for.',
        'x-addedInVersion': '24',
      }),
    fraudOffset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer value that is added to the normal fraud score. The value can be either positive or negative.',
      }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    nationality: z
      .string()
      .max(2)
      .openapi({
        description:
          "The shopper's nationality.\n\nA valid value is an ISO 2-character country code (e.g. 'NL').",
        'x-addedInVersion': '24',
      }),
    recurring: RecurringSchema.openapi({
      description:
        'A container for the type of recurring contract to be retrieved.\n\nThe recurring.contract must be set to `PAYOUT`',
    }),
    reference: z
      .string()
      .openapi({
        description:
          'The merchant reference for this payment. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.',
      }),
    selectedBrand: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the brand to make a payout to.\n\nFor Paysafecard it must be set to `paysafecard`.',
        'x-addedInVersion': '24',
      }),
    shopperEmail: z.string().openapi({ description: "The shopper's email address." }),
    shopperName: NameSchema.exactOptional().openapi({
      description:
        "The shopper's name.\n\nWhen the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.",
      'x-addedInVersion': '24',
    }),
    shopperReference: z
      .string()
      .openapi({ description: "The shopper's reference for the payment transaction." }),
    shopperStatement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method).',
        'x-addedInVersion': '2',
      }),
    socialSecurityNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The shopper's social security number.", 'x-addedInVersion': '24' }),
    telephoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The shopper's phone number.", 'x-addedInVersion': '52' }),
  })
  .openapi({
    required: [
      'amount',
      'dateOfBirth',
      'entityType',
      'merchantAccount',
      'nationality',
      'recurring',
      'reference',
      'shopperEmail',
      'shopperReference',
    ],
  })
  .openapi('StoreDetailAndSubmitRequest')

const StoreDetailAndSubmitResponseSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be returned in a particular response.',
      }),
    pspReference: z
      .string()
      .openapi({ description: 'A new reference to uniquely identify this request.' }),
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'In case of refusal, an informational message for the reason.' }),
    resultCode: z
      .string()
      .openapi({
        description:
          'The response:\n\n* In case of success is payout-submit-received.\n* In case of an error, an informational message is returned.',
      }),
  })
  .openapi({ required: ['pspReference', 'resultCode'] })
  .openapi('StoreDetailAndSubmitResponse')

const StoreDetailRequestSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be required for a particular request.',
      }),
    bank: BankAccountSchema.exactOptional().openapi({
      description:
        'A container for bank account data.\n> This field is mandatory if `card` is not provided.',
    }),
    billingAddress: AddressSchema.exactOptional().openapi({
      description:
        'The billing address.\n\n> The `billingAddress` object is required for cross-border payouts to and from Canada. Include all of the fields within this object.',
      'x-addedInVersion': '18',
    }),
    card: CardSchema.exactOptional().openapi({
      description:
        'A container for card data.\n> This field is mandatory if `bank` is not provided.',
    }),
    dateOfBirth: z.iso
      .date()
      .openapi({
        description:
          'The date of birth.\nFormat: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD\nFor Paysafecard it must be the same as used when registering the Paysafecard account.\n> This field is mandatory for natural persons.',
        'x-addedInVersion': '24',
      }),
    entityType: z
      .enum(['NaturalPerson', 'Company'])
      .openapi({
        description: 'The type of the entity the payout is processed for.',
        'x-addedInVersion': '24',
      }),
    fraudOffset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer value that is added to the normal fraud score. The value can be either positive or negative.',
      }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier, with which you want to process the transaction.',
      }),
    nationality: z
      .string()
      .max(2)
      .openapi({
        description:
          "The shopper's nationality.\n\nA valid value is an ISO 2-character country code (e.g. 'NL').",
        'x-addedInVersion': '24',
      }),
    recurring: RecurringSchema.openapi({
      description:
        'A container for the type of recurring contract to be retrieved.\n\nThe recurring.contract must be set to `PAYOUT`',
    }),
    selectedBrand: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the brand to make a payout to.\n\nFor Paysafecard it must be set to `paysafecard`.',
        'x-addedInVersion': '24',
      }),
    shopperEmail: z.string().openapi({ description: "The shopper's email address." }),
    shopperName: NameSchema.exactOptional().openapi({
      description:
        "The shopper's name.\n\nWhen the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.",
      'x-addedInVersion': '24',
    }),
    shopperReference: z
      .string()
      .openapi({ description: "The shopper's reference for the payment transaction." }),
    socialSecurityNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The shopper's social security number.", 'x-addedInVersion': '24' }),
    telephoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The shopper's phone number.", 'x-addedInVersion': '52' }),
  })
  .openapi({
    required: [
      'dateOfBirth',
      'entityType',
      'merchantAccount',
      'nationality',
      'recurring',
      'shopperEmail',
      'shopperReference',
    ],
  })
  .openapi('StoreDetailRequest')

const StoreDetailResponseSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be returned in a particular response.',
      }),
    pspReference: z
      .string()
      .openapi({ description: 'A new reference to uniquely identify this request.' }),
    recurringDetailReference: z
      .string()
      .openapi({ description: 'The token which you can use later on for submitting the payout.' }),
    resultCode: z
      .string()
      .openapi({
        description:
          'The result code of the transaction. `Success` indicates that the details were stored successfully.',
      }),
  })
  .openapi({ required: ['pspReference', 'recurringDetailReference', 'resultCode'] })
  .openapi('StoreDetailResponse')

const SubmitRequestSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be required for a particular request.',
      }),
    amount: AmountSchema.openapi({
      description: 'A container object for the payable amount information of the transaction.',
    }),
    dateOfBirth: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The date of birth.\nFormat: ISO-8601; example: YYYY-MM-DD\n\nFor Paysafecard it must be the same as used when registering the Paysafecard account.\n\n> This field is mandatory for natural persons. \n> This field is required to update the existing `dateOfBirth` that is associated with this recurring contract.',
        'x-addedInVersion': '24',
      }),
    entityType: z
      .enum(['NaturalPerson', 'Company'])
      .exactOptional()
      .openapi({
        description:
          'The type of the entity the payout is processed for.\n\nAllowed values:\n* NaturalPerson\n* Company\n> This field is required to update the existing `entityType` that is associated with this recurring contract.',
        'x-addedInVersion': '24',
      }),
    fraudOffset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer value that is added to the normal fraud score. The value can be either positive or negative.',
      }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier you want to process the transaction request with.',
      }),
    nationality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The shopper's nationality.\n\nA valid value is an ISO 2-character country code (e.g. 'NL').\n\n> This field is required to update the existing nationality that is associated with this recurring contract.",
        'x-addedInVersion': '24',
      }),
    recurring: RecurringSchema.openapi({
      description:
        'A container for the type of recurring contract to be retrieved.\n\nThe `recurring.contract` must be set to "PAYOUT".',
    }),
    reference: z
      .string()
      .openapi({
        description:
          'The merchant reference for this payout. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.',
      }),
    selectedRecurringDetailReference: z
      .string()
      .openapi({
        description:
          'This is the `recurringDetailReference` you want to use for this payout.\n\nYou can use the value LATEST to select the most recently used recurring detail.',
      }),
    shopperEmail: z.string().openapi({ description: "The shopper's email address." }),
    shopperName: NameSchema.exactOptional().openapi({
      description:
        "The shopper's name.\n\nIn case the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.\n\n> This field is required to update the existing `shopperName` associated with a recurring contract.",
      'x-addedInVersion': '24',
    }),
    shopperReference: z
      .string()
      .openapi({ description: "The shopper's reference for the payout transaction." }),
    shopperStatement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method).',
        'x-addedInVersion': '2',
      }),
    socialSecurityNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The shopper's social security number.", 'x-addedInVersion': '24' }),
  })
  .openapi({
    required: [
      'amount',
      'merchantAccount',
      'recurring',
      'reference',
      'selectedRecurringDetailReference',
      'shopperEmail',
      'shopperReference',
    ],
  })
  .openapi('SubmitRequest')

const SubmitResponseSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be returned in a particular response.',
      }),
    pspReference: z
      .string()
      .openapi({ description: 'A new reference to uniquely identify this request.' }),
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'In case of refusal, an informational message for the reason.' }),
    resultCode: z
      .string()
      .openapi({
        description:
          'The response:\n* In case of success, it is `payout-submit-received`.\n* In case of an error, an informational message is returned.',
      }),
  })
  .openapi({ required: ['pspReference', 'resultCode'] })
  .openapi('SubmitResponse')

const Generic_400Example = {
  summary: 'Response code 400. Bad Request.',
  value: { status: 400, errorCode: '702', message: 'Unexpected input: I', errorType: 'validation' },
}

const PostConfirmThirdPartyConfirmThirdPartyExample = {
  summary: 'Confirm a payout',
  description: 'Confirm a previously submitted payout',
  value: { merchantAccount: 'YOUR_MERCHANT_ACCOUNT', originalReference: '9913140798220028' },
}

const PostConfirmThirdPartyConfirmThirdParty_200Example = {
  summary: "Example response for request 'confirmThirdParty'",
  value: { pspReference: '991617894325358C', response: '[payout-confirm-received]' },
}

const PostDeclineThirdPartyDeclineThirdPartyExample = {
  summary: 'Cancel a payout',
  description: 'Cancel a previously submitted payout',
  value: { merchantAccount: 'YOUR_MERCHANT_ACCOUNT', originalReference: '9913140798220028' },
}

const PostDeclineThirdPartyDeclineThirdParty_200Example = {
  summary: "Example response for request 'declineThirdParty'",
  value: { pspReference: '991617894325360J', response: '[payout-decline-received]' },
}

const PostPayoutPayoutB2cExample = {
  summary: 'Instant card payout (B2C)',
  description: 'Pay out to your sellers, customers, freelancers, etc',
  value: {
    amount: { value: 2500, currency: 'USD' },
    card: {
      number: '4111111111111111',
      expiryMonth: '03',
      expiryYear: '2030',
      holderName: 'John Smith',
    },
    billingAddress: {
      houseNumberOrName: '121',
      street: 'Brannan Street',
      city: 'Beverly Hills',
      postalCode: '90210',
      stateOrProvince: 'CA',
      country: 'US',
    },
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    reference: 'P9999999999999999',
    shopperName: { firstName: 'John', lastName: 'Smith' },
  },
}

const PostPayoutPayoutP2pExample = {
  summary: 'Instant card payout (P2P)',
  description: 'Facilitate the transfer of money between two individuals',
  value: {
    amount: { value: 2500, currency: 'USD' },
    card: {
      number: '4111111111111111',
      expiryMonth: '03',
      expiryYear: '2030',
      holderName: 'John Smith',
    },
    billingAddress: {
      houseNumberOrName: '121',
      street: 'Brannan Street',
      city: 'Beverly Hills',
      postalCode: '90210',
      stateOrProvince: 'CA',
      country: 'US',
    },
    fundSource: {
      additionalData: { fundingSource: 'DEBIT' },
      billingAddress: {
        houseNumberOrName: '121',
        street: 'Brannan Street',
        city: 'Beverly Hills',
        postalCode: '90210',
        stateOrProvince: 'CA',
        country: 'US',
      },
      card: {
        expiryMonth: '03',
        expiryYear: '2030',
        holderName: 'Payer Name',
        number: '4400000000000008',
      },
      shopperName: { firstName: 'Payer', lastName: 'Name' },
    },
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    reference: 'P9999999999999999',
    shopperName: { firstName: 'John', lastName: 'Smith' },
  },
}

const PostStoreDetailStoreDetail_200Example = {
  summary: "Example response for request 'storeDetail'",
  value: {
    pspReference: '991617894326362D',
    recurringDetailReference: '9916178936754752',
    resultCode: 'Success',
  },
}

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postConfirmThirdPartyRoute = createRoute({
  method: 'post',
  path: '/confirmThirdParty',
  tags: ['Reviewing'],
  summary: 'Confirm a payout',
  description:
    '> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:\n>- If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.\n> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.\n>\n> With the Transfers API, you can:\n> - Handle multiple payout use cases with a single API.\n> - Use new payout functionalities, such as instant payouts to bank accounts.\n> - Receive webhooks with more details and defined transfer states.\n>\n> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.\n\n\nConfirms a previously submitted payout.\n\nTo cancel a payout, use the `/declineThirdParty` endpoint.',
  operationId: 'post-confirmThirdParty',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ModifyRequestSchema,
          examples: { confirmThirdParty: PostConfirmThirdPartyConfirmThirdPartyExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: ModifyResponseSchema,
          examples: { confirmThirdParty: PostConfirmThirdPartyConfirmThirdParty_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
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

export const postDeclineThirdPartyRoute = createRoute({
  method: 'post',
  path: '/declineThirdParty',
  tags: ['Reviewing'],
  summary: 'Cancel a payout',
  description:
    '> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:\n>- If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.\n> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.\n>\n> With the Transfers API, you can:\n> - Handle multiple payout use cases with a single API.\n> - Use new payout functionalities, such as instant payouts to bank accounts.\n> - Receive webhooks with more details and defined transfer states.\n>\n> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.\n\n\nCancels a previously submitted payout.\n\nTo confirm and send a payout, use the `/confirmThirdParty` endpoint.',
  operationId: 'post-declineThirdParty',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ModifyRequestSchema,
          examples: { declineThirdParty: PostDeclineThirdPartyDeclineThirdPartyExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: ModifyResponseSchema,
          examples: { declineThirdParty: PostDeclineThirdPartyDeclineThirdParty_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
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

export const postPayoutRoute = createRoute({
  method: 'post',
  path: '/payout',
  tags: ['Instant payouts'],
  summary: 'Make an instant card payout',
  description:
    "> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:\n>- If you are building a new integration, use the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint instead.\n> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.\n>\n> With the Transfers API, you can:\n> - Handle multiple payout use cases with a single API.\n> - Use new payout functionalities, such as instant payouts to bank accounts.\n> - Receive webhooks with more details and defined transfer states.\n>\n> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.\n\n\nWith this call, you can pay out to your customers, and funds will be made available within 30 minutes on the cardholder's bank account (this is dependent on whether the issuer supports this functionality). Instant card payouts are only supported for Visa and Mastercard cards.",
  operationId: 'post-payout',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PayoutRequestSchema,
          examples: {
            'payout-b2c': PostPayoutPayoutB2cExample,
            'payout-p2p': PostPayoutPayoutP2pExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: PayoutResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
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

export const postStoreDetailRoute = createRoute({
  method: 'post',
  path: '/storeDetail',
  tags: ['Initialization'],
  summary: 'Store payout details',
  description:
    '> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:\n>- If you are building a new integration, use the [Transfers API](https://docs.adyen.com/api-explorer/transfers/latest/overview) instead.\n> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.\n>\n> With the Transfers API, you can:\n> - Handle multiple payout use cases with a single API.\n> - Use new payout functionalities, such as instant payouts to bank accounts.\n> - Receive webhooks with more details and defined transfer states.\n>\n> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.\n\n\nStores payment details under the `PAYOUT` recurring contract. These payment details can be used later to submit a payout via the `/submitThirdParty` call.',
  operationId: 'post-storeDetail',
  request: { body: { content: { 'application/json': { schema: StoreDetailRequestSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: StoreDetailResponseSchema,
          examples: { storeDetail: PostStoreDetailStoreDetail_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
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

export const postStoreDetailAndSubmitThirdPartyRoute = createRoute({
  method: 'post',
  path: '/storeDetailAndSubmitThirdParty',
  tags: ['Initialization'],
  summary: 'Store details and submit a payout',
  description:
    '> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:\n>- If you are building a new integration, use the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint instead.\n> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.\n>\n> With the Transfers API, you can:\n> - Handle multiple payout use cases with a single API.\n> - Use new payout functionalities, such as instant payouts to bank accounts.\n> - Receive webhooks with more details and defined transfer states.\n>\n> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.\n\n\nSubmits a payout and stores its details for subsequent payouts.\n\nThe submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.',
  operationId: 'post-storeDetailAndSubmitThirdParty',
  request: {
    body: { content: { 'application/json': { schema: StoreDetailAndSubmitRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: StoreDetailAndSubmitResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
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

export const postSubmitThirdPartyRoute = createRoute({
  method: 'post',
  path: '/submitThirdParty',
  tags: ['Initialization'],
  summary: 'Submit a payout',
  description:
    '> This endpoint is **deprecated** and no longer supports new integrations. Do one of the following:\n>- If you are building a new integration, use the POST [/transfers](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) endpoint instead.\n> - If you are already using the Payout API, reach out to your Adyen contact to learn how to migrate to the Transfers API.\n>\n> With the Transfers API, you can:\n> - Handle multiple payout use cases with a single API.\n> - Use new payout functionalities, such as instant payouts to bank accounts.\n> - Receive webhooks with more details and defined transfer states.\n>\n> For more information about the payout features of the Transfers API, see our [Payouts](https://docs.adyen.com/payouts/payout-service) documentation.\n\n\nSubmits a payout using the previously stored payment details. To store payment details, use the `/storeDetail` API call.\n\nThe submitted payout must be confirmed or declined either by a reviewer or via `/confirmThirdParty` or `/declineThirdParty` calls.',
  operationId: 'post-submitThirdParty',
  request: { body: { content: { 'application/json': { schema: SubmitRequestSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: SubmitResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
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

import { createRoute, z } from '@hono/zod-openapi'

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

const BinDetailSchema = z
  .strictObject({
    issuerCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country where the card was issued.' }),
  })
  .openapi({ required: [] })
  .openapi('BinDetail')

const CardBinSchema = z
  .strictObject({
    bin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first 6 digit of the card number. Enable this field via merchant account settings.',
      }),
    commercial: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, it indicates a commercial card. Enable this field via merchant account settings.',
      }),
    fundingSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The card funding source. Valid values are:\n* CHARGE\n* CREDIT\n* DEBIT\n* DEFERRED_DEBIT\n* PREPAID\n* PREPAID_RELOADABLE\n* PREPAID_NONRELOADABLE\n> Enable this field via merchant account settings.',
      }),
    fundsAvailability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates availability of funds.\n\nVisa:\n* "I" (fast funds are supported)\n* "N" (otherwise)\n\nMastercard:\n* "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)\n* "N" (otherwise)\n> Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from "N" or "U".',
      }),
    issuerBin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The first 8 digit of the card number. Enable this field via merchant account settings.',
        'x-addedInVersion': '54',
      }),
    issuingBank: z
      .string()
      .exactOptional()
      .openapi({ description: 'The issuing bank of the card.' }),
    issuingCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country where the card was issued from.' }),
    issuingCurrency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency of the card.' }),
    paymentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment method associated with the card (e.g. visa, mc, or amex).',
      }),
    payoutEligible: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether a payout is eligible or not for this card.\n\nVisa:\n* "Y"\n* "N"\n\nMastercard:\n* "Y" (domestic and cross-border)\n* "D" (only domestic)\n* "N" (no MoneySend)\n* "U" (unknown)\n> Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from "N" or "U".',
      }),
    summary: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last four digits of the card number.' }),
  })
  .openapi({ required: [] })
  .openapi('CardBin')

const CostEstimateAssumptionsSchema = z
  .strictObject({
    assume3DSecureAuthenticated: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, the cardholder is expected to successfully authorise via 3D Secure.',
      }),
    assumeLevel3Data: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the transaction is expected to have valid Level 3 data.' }),
    installments: z
      .int32()
      .exactOptional()
      .openapi({ description: 'If not zero, the number of installments.' }),
  })
  .openapi({ required: [] })
  .openapi('CostEstimateAssumptions')

const MerchantDetailsSchema = z
  .strictObject({
    countryCode: z
      .string()
      .length(2)
      .exactOptional()
      .openapi({
        description:
          "2-letter ISO 3166 country code of the card acceptor location.\n> This parameter is required for the merchants who don't use Adyen as the payment authorisation gateway.",
      }),
    enrolledIn3DSecure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, indicates that the merchant is enrolled in 3D Secure for the card network.',
      }),
    mcc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The merchant category code (MCC) is a four-digit number which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.\n\nThe list of MCCs can be found [here](https://en.wikipedia.org/wiki/Merchant_category_code).',
      }),
  })
  .openapi({ required: [] })
  .openapi('MerchantDetails')

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

const CostEstimateRequestSchema = z
  .strictObject({
    amount: AmountSchema.openapi({
      description: 'The transaction amount used as a base for the cost estimation.',
    }),
    assumptions: CostEstimateAssumptionsSchema.exactOptional().openapi({
      description:
        'Assumptions made for the expected characteristics of the transaction, for which the charges are being estimated.',
    }),
    cardNumber: z
      .string()
      .min(4)
      .max(19)
      .exactOptional()
      .openapi({
        description:
          'The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.\n\n> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.',
      }),
    encryptedCardNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data must be created with the Checkout Card Component or Secured Fields Component, and must contain the `encryptedCardNumber` field.\n\n> Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.',
      }),
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The merchant account identifier you want to process the (transaction) request with.',
      }),
    merchantDetails: MerchantDetailsSchema.exactOptional().openapi({
      description:
        "Additional data for merchants who don't use Adyen as the payment authorisation gateway.",
    }),
    recurring: RecurringSchema.exactOptional().openapi({
      description:
        'The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/online-payments/tokenization).',
    }),
    selectedRecurringDetailReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can be used to select the most recently stored recurring detail.',
      }),
    shopperInteraction: z
      .enum(['Ecommerce', 'ContAuth', 'Moto', 'POS'])
      .exactOptional()
      .openapi({
        description:
          'Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.\nFor the web service API, Adyen assumes Ecommerce shopper interaction by default.\n\nThis field has the following possible values:\n* `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.\n* `ContAuth` - Card on file and/or subscription transactions, where the card holder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).\n* `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.\n* `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.',
      }),
    shopperReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required for recurring payments. \nYour reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters.\n> Your reference must not include personally identifiable information (PII) such as name or email address.',
      }),
  })
  .openapi({ required: ['amount', 'merchantAccount'] })
  .openapi('CostEstimateRequest')

const CostEstimateResponseSchema = z
  .strictObject({
    cardBin: CardBinSchema.exactOptional().openapi({ description: 'Card BIN details.' }),
    costEstimateAmount: AmountSchema.exactOptional().openapi({
      description:
        'The estimated cost (scheme fee + interchange) in the settlement currency. If the settlement currency cannot be determined, the fee in EUR is returned.',
    }),
    costEstimateReference: z
      .string()
      .exactOptional()
      .openapi({
        description: "Adyen's 16-character reference associated with the request.",
        'x-addedInVersion': '52',
      }),
    resultCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The result of the cost estimation.' }),
  })
  .openapi({ required: [] })
  .openapi('CostEstimateResponse')

const DSPublicKeyDetailSchema = z
  .strictObject({
    brand: z.string().exactOptional().openapi({ description: 'Card brand.' }),
    directoryServerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Directory Server (DS) identifier.' }),
    fromSDKVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the mobile 3D Secure 2 SDK. For the possible values, refer to the versions in [Adyen 3DS2 Android](https://github.com/Adyen/adyen-3ds2-android/releases) and [Adyen 3DS2 iOS](https://github.com/Adyen/adyen-3ds2-ios/releases).',
      }),
    publicKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Public key. The 3D Secure 2 SDK encrypts the device information by using the DS public key.',
      }),
    rootCertificates: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Directory Server root certificates. The 3D Secure 2 SDK verifies the ACS signed content using the rootCertificates.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DSPublicKeyDetail')

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

const ThreeDS2CardRangeDetailSchema = z
  .strictObject({
    acsInfoInd: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Provides additional information to the 3DS Server.\nPossible values:\n- 01 (Authentication is available at ACS)\n- 02 (Attempts supported by ACS or DS)\n- 03 (Decoupled authentication supported)\n- 04 (Whitelisting supported)',
        'x-addedInVersion': '51',
      }),
    brandCode: z.string().exactOptional().openapi({ description: 'Card brand.' }),
    endRange: z.string().exactOptional().openapi({ description: 'BIN end range.' }),
    startRange: z.string().exactOptional().openapi({ description: 'BIN start range.' }),
    threeDS2Versions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Supported 3D Secure protocol versions', 'x-addedInVersion': '53' }),
    threeDSMethodURL: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'In a 3D Secure 2 browser-based flow, this is the URL where you should send the device fingerprint to.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ThreeDS2CardRangeDetail')

const ThreeDSAvailabilityRequestSchema = z
  .strictObject({
    additionalData: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'This field contains additional data, which may be required for a particular request.\n\nThe `additionalData` object consists of entries, each of which includes the key and value.',
      }),
    brands: z.array(z.string()).exactOptional().openapi({ description: 'List of brands.' }),
    cardNumber: z.string().exactOptional().openapi({ description: 'Card number or BIN.' }),
    merchantAccount: z.string().openapi({ description: 'The merchant account identifier.' }),
    recurringDetailReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'A recurring detail reference corresponding to a card.' }),
    shopperReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).",
      }),
  })
  .openapi({ required: ['merchantAccount'] })
  .openapi('ThreeDSAvailabilityRequest')

const ThreeDSAvailabilityResponseSchema = z
  .strictObject({
    binDetails: BinDetailSchema.exactOptional().openapi({
      description: 'Bin Group Details',
      'x-addedInVersion': '50',
    }),
    dsPublicKeys: z
      .array(DSPublicKeyDetailSchema)
      .exactOptional()
      .openapi({ description: 'List of Directory Server (DS) public keys.' }),
    threeDS1Supported: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicator if 3D Secure 1 is supported.' }),
    threeDS2CardRangeDetails: z
      .array(ThreeDS2CardRangeDetailSchema)
      .exactOptional()
      .openapi({ description: 'List of brand and card range pairs.' }),
    threeDS2supported: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicator if 3D Secure 2 is supported.' }),
  })
  .openapi({ required: [] })
  .openapi('ThreeDSAvailabilityResponse')

const Generic_400Example = {
  summary: 'Response code 400. Bad Request.',
  value: { status: 400, errorCode: '702', message: 'Unexpected input: I', errorType: 'validation' },
}

const PostGet3dsAvailabilityGet3dsAvailabilityExample = {
  summary: 'Get 3D Secure availability',
  description: 'Example request to check 3D Secure availability',
  value: { merchantAccount: 'YOUR_MERCHANT_ACCOUNT', cardNumber: '4111111111111111' },
}

const PostGet3dsAvailabilityGet3dsAvailability_200Example = {
  summary: "Example response for request 'get3dsAvailability'",
  value: { threeDS1Supported: true, threeDS2CardRangeDetails: [], threeDS2supported: false },
}

const PostGetCostEstimateGetCostEstimateExample = {
  summary: 'Estimate the transaction cost',
  description: 'Example request to get the estimated cost of a transaction',
  value: {
    amount: { value: 1234, currency: 'EUR' },
    assumptions: { assumeLevel3Data: true, assume3DSecureAuthenticated: true },
    cardNumber: '5101180000000007',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    merchantDetails: { countryCode: 'NL', mcc: '7411', enrolledIn3DSecure: true },
    shopperInteraction: 'Ecommerce',
  },
}

const PostGetCostEstimateGetCostEstimate_200Example = {
  summary: "Example response for request 'getCostEstimate'",
  value: { costEstimateAmount: { currency: 'EUR', value: 12 }, resultCode: 'Success' },
}

const PostGetCostEstimateGetCostEstimateEncryptedCardExample = {
  summary: 'Estimate the transaction cost using an encrypted card number',
  description: 'Example request to get the estimated cost of a transaction',
  value: {
    amount: { value: 1234, currency: 'EUR' },
    assumptions: { assumeLevel3Data: true, assume3DSecureAuthenticated: true },
    encryptedCardNumber: 'test_5101180000000007',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    merchantDetails: { countryCode: 'NL', mcc: '7411', enrolledIn3DSecure: true },
    shopperInteraction: 'Ecommerce',
  },
}

const PostGetCostEstimateGetCostEstimateEncryptedCard_200Example = {
  summary: "Example response for request 'getCostEstimateEncryptedCard'",
  value: { costEstimateAmount: { currency: 'EUR', value: 12 }, resultCode: 'Success' },
}

const PostGetCostEstimateGetCostEstimateMinimalExample = {
  summary: 'Estimate the transaction cost (minimal)',
  description: 'Example request to get the estimated cost of a transaction with minimum details',
  value: {
    amount: { value: 1234, currency: 'EUR' },
    cardNumber: '5101180000000007',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  },
}

const PostGetCostEstimateGetCostEstimateMinimal_200Example = {
  summary: "Example response for request 'getCostEstimateMinimal'",
  value: { costEstimateAmount: { currency: 'EUR', value: 12 }, resultCode: 'Success' },
}

const PostGetCostEstimateGetCostEstimateMinimal3DSExample = {
  summary: 'Estimate the transaction cost (minimal with 3DSecure)',
  description:
    'Example request to get the estimated cost of a 3D Secure transaction with minimum details',
  value: {
    amount: { value: 1234, currency: 'EUR' },
    assumptions: { assumeLevel3Data: true, assume3DSecureAuthenticated: true },
    cardNumber: '5101180000000007',
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
  },
}

const PostGetCostEstimateGetCostEstimateMinimal3DS_200Example = {
  summary: "Example response for request 'getCostEstimateMinimal3DS'",
  value: { costEstimateAmount: { currency: 'EUR', value: 12 }, resultCode: 'Success' },
}

const PostGetCostEstimateGetCostEstimateRecurringContractExample = {
  summary: 'Estimate the transaction cost (recurring contract)',
  description: 'Example request to get the estimated cost of a recurring transaction',
  value: {
    amount: { value: 1234, currency: 'EUR' },
    assumptions: { assumeLevel3Data: true, assume3DSecureAuthenticated: true },
    merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
    merchantDetails: { countryCode: 'NL', mcc: '7411', enrolledIn3DSecure: true },
    selectedRecurringDetailReference: '1234567890123456',
    shopperInteraction: 'Ecommerce',
    shopperReference: '123456',
  },
}

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postGet3dsAvailabilityRoute = createRoute({
  method: 'post',
  path: '/get3dsAvailability',
  tags: ['General'],
  summary: 'Check if 3D Secure is available',
  description:
    'Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.\n\nFor more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).',
  operationId: 'post-get3dsAvailability',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ThreeDSAvailabilityRequestSchema,
          examples: { get3dsAvailability: PostGet3dsAvailabilityGet3dsAvailabilityExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: ThreeDSAvailabilityResponseSchema,
          examples: { get3dsAvailability: PostGet3dsAvailabilityGet3dsAvailability_200Example },
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

export const postGetCostEstimateRoute = createRoute({
  method: 'post',
  path: '/getCostEstimate',
  tags: ['General'],
  summary: 'Get a fees cost estimate',
  description:
    '>This API is available only for merchants operating in Australia, the EU, and the UK.\n\nUse the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.\n\nTo retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).\n\n> Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.',
  operationId: 'post-getCostEstimate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CostEstimateRequestSchema,
          examples: {
            getCostEstimate: PostGetCostEstimateGetCostEstimateExample,
            getCostEstimateEncryptedCard: PostGetCostEstimateGetCostEstimateEncryptedCardExample,
            getCostEstimateMinimal: PostGetCostEstimateGetCostEstimateMinimalExample,
            getCostEstimateMinimal3DS: PostGetCostEstimateGetCostEstimateMinimal3DSExample,
            getCostEstimateRecurringContract:
              PostGetCostEstimateGetCostEstimateRecurringContractExample,
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
          schema: CostEstimateResponseSchema,
          examples: {
            getCostEstimate: PostGetCostEstimateGetCostEstimate_200Example,
            getCostEstimateEncryptedCard:
              PostGetCostEstimateGetCostEstimateEncryptedCard_200Example,
            getCostEstimateMinimal: PostGetCostEstimateGetCostEstimateMinimal_200Example,
            getCostEstimateMinimal3DS: PostGetCostEstimateGetCostEstimateMinimal3DS_200Example,
          },
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

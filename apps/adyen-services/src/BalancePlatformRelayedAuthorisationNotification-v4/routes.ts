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

const AmountAdjustmentSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({ description: 'The adjustment amount.' }),
    amountAdjustmentType: z
      .enum(['atmMarkup', 'authHoldReserve', 'exchange', 'forexMarkup'])
      .exactOptional()
      .openapi({
        description:
          'The type of markup that is applied to an authorised payment.\n\nPossible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.',
      }),
    basepoints: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The basepoints associated with the applied markup.' }),
    fixedAmount: AmountSchema.exactOptional().openapi({
      description: 'The specific amount of the adjustment.',
    }),
    floorAmount: AmountSchema.exactOptional().openapi({
      description: 'The minimum amount of the adjustment.',
    }),
    limitAmount: AmountSchema.exactOptional().openapi({
      description: 'The maximum amount of the adjustment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AmountAdjustment')

const PhoneSchema = z
  .strictObject({
    number: z
      .string()
      .openapi({
        description:
          'The full phone number provided as a single string. \nFor example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**, \n\n or **"(0031) 611223344"**.',
      }),
    type: z
      .enum(['landline', 'mobile'])
      .openapi({
        description: 'Type of phone number.\nPossible values: \n**Landline**, **Mobile**.\n',
      }),
  })
  .openapi({ required: ['number', 'type'] })
  .openapi('Phone')

const AuthenticationSchema = z
  .strictObject({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address where the one-time password (OTP) is sent.' }),
    password: z
      .string()
      .min(1)
      .max(30)
      .exactOptional()
      .openapi({
        description:
          'The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.\n\n* Characters between **a-z**, **A-Z**, and **0-9**\n\n* Special characters: **äöüßÄÖÜ+-*/ç%()=?!~#\'",;:$&àùòâôûáúó**',
      }),
    phone: PhoneSchema.exactOptional().openapi({
      description:
        'The phone number where the one-time password (OTP) is sent.\n\nThis object must have:\n\n* A `type` set to **mobile**.\n\n* A `number` with a valid country code.\n\n* A `number` with more than 4 digits, excluding the country code.\n\n>Make sure to verify that the card user owns the phone number.',
    }),
  })
  .openapi({ required: [] })
  .openapi('Authentication')

const AuthorisationDecisionRequestSchema = z
  .strictObject({
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason of the authorization decision.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the authorization decision. Possible values: **Authorised** or **Refused**.',
      }),
    statusCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the authorization decision.' }),
  })
  .openapi({ required: [] })
  .openapi('AuthorisationDecisionRequest')

const AuthorisationDecisionResponseSchema = z
  .strictObject({
    refusalReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason for refusing the authorization.' }),
    status: z
      .enum(['Authorised', 'Refused'])
      .openapi({
        description:
          'The status of the authorization. \n\nPossible values: \n\n* **Authorised** \n\n* **Refused** \n\nFor more information, refer to [Use relayed authorization](https://docs.adyen.com/issuing/authorisation/relayed-authorisation/).',
      }),
  })
  .openapi({ required: ['status'] })
  .openapi('AuthorisationDecisionResponse')

const BalanceMutationSchema = z
  .strictObject({
    balanceAfter: AmountSchema.exactOptional().openapi({
      description: 'The balance amount after the mutation.',
    }),
    balanceBefore: AmountSchema.exactOptional().openapi({
      description: 'The balance amount before the mutation.',
    }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).',
      }),
    mutationAmount: AmountSchema.exactOptional().openapi({
      description: 'The amount of the mutation.',
    }),
    type: z.string().exactOptional().openapi({ description: 'The type of the mutation.' }),
  })
  .openapi({ required: [] })
  .openapi('BalanceMutation')

const BankAccountDetailsSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank account number, without separators or whitespace.' }),
    accountType: z
      .string()
      .default('checking')
      .exactOptional()
      .openapi({
        description:
          'The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.',
      }),
    branchNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank account branch number, without separators or whitespace' }),
    formFactor: z
      .string()
      .default('physical')
      .exactOptional()
      .openapi({
        description:
          'Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts. \n\nAdyen creates a local IBAN for business accounts when the `formFactor` value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.',
      }),
    iban: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.',
      }),
    routingNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.',
      }),
    sortCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.',
      }),
    type: z
      .string()
      .default('iban')
      .openapi({ description: '**iban** or **usLocal** or **ukLocal**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('BankAccountDetails')

const BulkAddressSchema = z
  .strictObject({
    city: z.string().exactOptional().openapi({ description: 'The name of the city.' }),
    company: z.string().exactOptional().openapi({ description: 'The name of the company.' }),
    country: z
      .string()
      .openapi({
        description: 'The two-character ISO-3166-1 alpha-2 country code. For example, **US**.',
      }),
    email: z.string().exactOptional().openapi({ description: 'The email address.' }),
    houseNumberOrName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The house number or name.' }),
    line1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the street and the number of the building.\n\nFor example: **Simon Carmiggeltstraat 6-50**.',
        'x-addedInVersion': '2',
      }),
    line2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information about the delivery address. For example, an apartment number.',
        'x-addedInVersion': '2',
      }),
    line3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information about the delivery address.',
        'x-addedInVersion': '2',
      }),
    mobile: z.string().exactOptional().openapi({ description: 'The full telephone number.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The recipient’s name (person or contact), for example ‘John Doe’.',
        'x-addedInVersion': '2',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code.\n\nMaximum length:\n\n* 5 digits for addresses in the US.\n\n* 10 characters for all other countries.',
      }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter ISO 3166-2 state or province code.\n\nMaximum length: 2 characters for addresses in the US.',
      }),
    street: z.string().exactOptional().openapi({ description: 'The streetname of the house.' }),
  })
  .openapi({ required: ['country'] })
  .openapi('BulkAddress')

const CardConfigurationSchema = z
  .strictObject({
    activation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The activation label attached to the card that contains the activation instructions.\n\nThis field overrides the activation label design ID defined in the card configuration profile.',
      }),
    activationUrl: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          "Your app's URL, if you want to activate cards through your app. For example, **my-app://ref1236a7d**. A QR code is created based on this URL, and is included in the carrier. Before you use this field, reach out to your Adyen contact to set up the QR code process. \n\nMaximum length: 255 characters.",
      }),
    bulkAddress: BulkAddressSchema.exactOptional().openapi({
      description: 'Overrides the shipment bulk address defined in the card configuration profile.',
    }),
    cardImageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the card image. This image is printed on the full front of the card.',
      }),
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The letter or packaging to which the card is attached.\n\nThis field overrides the carrier design ID defined in the card configuration profile. ',
      }),
    carrierImageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the carrier image. This image is printed on the letter to which the card is attached.',
      }),
    configurationProfileId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the card configuration profile that contains the settings that are applied to the card. For example, the envelope and PIN mailer designs or the logistics company handling the shipment.\n\nYou can override some of the existing settings in the configuration profile by providing the corresponding fields in the `configuration` object. For example, send the `shipmentMethod` to override the logistics company defined in the card configuration profile.',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The three-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the card. For example, **EUR**.\n\nThis field overrides the existing currency setting on the card configuration profile.',
      }),
    envelope: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Overrides the envelope design ID defined in the card configuration profile. ',
      }),
    insert: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Any additional material, such as marketing material, that is shipped together with the card.\n\nThis field overrides the insert design ID defined in the card configuration profile.',
      }),
    languages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language codes of the card. For example, **[en,es]**.',
        'x-addedInVersion': '3',
      }),
    logoImageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the logo image. This image is printed on the partial front of the card, for example, a logo on the upper right corner.',
      }),
    pinMailer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The letter on which the PIN of the card is printed.\n\nThis field overrides the PIN mailer design ID defined in the card configuration profile.',
      }),
    printLine: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Print Line.\n\nText printed on the physical card below the cardholder name. You provide the value, which can be up to 26 characters.',
      }),
    shipmentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The logistics company that ships the card.\n\nThis field overrides the logistics company defined in the card configuration profile.',
      }),
  })
  .openapi({ required: ['configurationProfileId'] })
  .openapi('CardConfiguration')

const DeliveryAddressSchema = z
  .strictObject({
    city: z.string().exactOptional().openapi({ description: 'The name of the city.' }),
    country: z
      .string()
      .openapi({
        description:
          "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.\n>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
      }),
    line1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the street and the number of the building.\n\nFor example: **Simon Carmiggeltstraat 6-50**.',
      }),
    line2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information about the delivery address. For example, an apartment number.',
      }),
    line3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information about the delivery address.' }),
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
          'The state or province code, maximum 3 characters. For example, **CA** for California in the US or **ON** for Ontario in Canada.\n> Required for the US and Canada.',
      }),
  })
  .openapi({ required: ['country'] })
  .openapi('DeliveryAddress')

const NameSchema = z
  .strictObject({
    firstName: z.string().max(80).openapi({ description: 'The first name.' }),
    lastName: z.string().max(80).openapi({ description: 'The last name.' }),
  })
  .openapi({ required: ['firstName', 'lastName'] })
  .openapi('Name')

const DeliveryContactSchema = z
  .strictObject({
    address: DeliveryAddressSchema.openapi({ description: 'The address of the contact.' }),
    company: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company name of the contact.', 'x-addedInVersion': '2' }),
    email: z.string().exactOptional().openapi({ description: 'The email address of the contact.' }),
    name: NameSchema.openapi({ description: 'The name of the contact.' }),
    phone: PhoneSchema.exactOptional().openapi({
      description: 'The phone of the contact.',
      'x-addedInVersion': '3',
    }),
    webAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the contact's website." }),
  })
  .openapi({ required: ['address', 'name'] })
  .openapi('DeliveryContact')

const ExpirySchema = z
  .strictObject({
    month: z
      .string()
      .exactOptional()
      .openapi({ description: 'The month in which the card will expire.' }),
    year: z
      .string()
      .exactOptional()
      .openapi({ description: 'The year in which the card will expire.' }),
  })
  .openapi({ required: [] })
  .openapi('Expiry')

const CardSchema = z
  .strictObject({
    authentication: AuthenticationSchema.exactOptional().openapi({
      description:
        "Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information.",
    }),
    bin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank identification number (BIN) of the card number.' }),
    brand: z
      .string()
      .openapi({
        description:
          'The brand of the physical or the virtual card.\nPossible values: **visa**, **mc**.',
      }),
    brandVariant: z
      .string()
      .openapi({
        description:
          'The brand variant of the physical or the virtual card. For example, **visadebit** or **mcprepaid**.\n>Reach out to your Adyen contact to get the values relevant for your integration.',
      }),
    cardholderName: z
      .string()
      .max(26)
      .openapi({ description: 'The name of the cardholder.\n Maximum length: 26 characters.' }),
    configuration: CardConfigurationSchema.exactOptional().openapi({
      description:
        'Contains information about the configuration profile for your cards. The configuration profile consists of settings required when creating a physical or a virtual card. You identify a configuration profile with its `configurationProfileId`.\n\nWhen you provide this field in a request, you can override the settings of an existing configuration profile.\n\nReach out to your Adyen contact to get the values that you can send in this object.',
    }),
    cvc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CVC2 value of the card.\n> The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards.',
      }),
    deliveryContact: DeliveryContactSchema.exactOptional().openapi({
      description: 'The delivery contact (name and address) for physical card delivery.',
      'x-addedInVersion': '2',
    }),
    expiration: ExpirySchema.exactOptional().openapi({
      description: 'The expiration date of the card.',
    }),
    formFactor: z
      .enum(['physical', 'unknown', 'virtual'])
      .openapi({
        description: 'The form factor of the card.\nPossible values: **virtual**, **physical**.',
      }),
    lastFour: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last last four digits of the card number.' }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The primary account number (PAN) of the card.\n> The PAN is masked by default and returned only for single-use virtual cards.',
      }),
    threeDSecure: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The 3DS configuration of the physical or the virtual card. Possible values: **fullySupported**, **secureCorporate**.\n> Reach out to your Adyen contact to get the values relevant for your integration.',
      }),
    usage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies how many times the card can be used. Possible values: **singleUse**, **multiUse**.\n\n> Reach out to your Adyen contact to determine the value relevant for your integration.',
      }),
  })
  .openapi({ required: ['brand', 'brandVariant', 'cardholderName', 'formFactor'] })
  .openapi('Card')

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

const PaymentInstrumentSchema = z
  .strictObject({
    additionalBankAccountIdentifications: z
      .array(
        z
          .xor([IbanAccountIdentificationSchema])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: { iban: '#/components/schemas/IbanAccountIdentification' },
            },
          }),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Contains optional, additional business account details. Returned when you create a payment instrument with `type` **bankAccount**.',
        'x-deprecatedInVersion': '2',
        'x-deprecatedMessage': 'Please use `bankAccount` object instead',
      }),
    balanceAccountId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.',
      }),
    bankAccount: BankAccountDetailsSchema.exactOptional().openapi({
      description:
        'Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.',
    }),
    card: CardSchema.exactOptional().openapi({
      description:
        'Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**.',
    }),
    description: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description: 'Your description for the payment instrument, maximum 300 characters.',
      }),
    id: z.string().openapi({ description: 'The unique identifier of the payment instrument.' }),
    issuingCountryCode: z
      .string()
      .openapi({
        description:
          'The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.',
      }),
    paymentInstrumentGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.',
      }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({
        description: 'Your reference for the payment instrument, maximum 150 characters.',
      }),
    replacedById: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the payment instrument that replaced this payment instrument.',
      }),
    replacementOfId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the payment instrument that is replaced by this payment instrument.',
      }),
    status: z
      .enum(['active', 'closed', 'inactive', 'suspended'])
      .exactOptional()
      .openapi({
        description:
          'The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n',
      }),
    statusComment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status comment provides additional information for the statusReason of the payment instrument.',
        'x-addedInVersion': '2',
      }),
    statusReason: z
      .enum([
        'accountClosure',
        'damaged',
        'endOfLife',
        'expired',
        'lost',
        'other',
        'stolen',
        'suspectedFraud',
        'transactionRule',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reason for the status of the payment instrument.\n\nPossible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.',
        'x-addedInVersion': '2',
      }),
    type: z
      .enum(['bankAccount', 'card'])
      .openapi({
        description:
          'The type of payment instrument.\n\nPossible values: **card**, **bankAccount**.',
      }),
  })
  .openapi({ required: ['balanceAccountId', 'id', 'issuingCountryCode', 'type'] })
  .openapi('PaymentInstrument')

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

const TransactionScoringSchema = z
  .strictObject({
    type: z.string().exactOptional().openapi({ description: 'The type of score.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the score.' }),
  })
  .openapi({ required: [] })
  .openapi('TransactionScoring')

const ThreeDSecureSchema = z
  .strictObject({
    acsTransactionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transaction identifier for the Access Control Server' }),
    authenticationResult: z
      .string()
      .exactOptional()
      .openapi({ description: 'The result from the performed authentication' }),
    authenticationType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the performed authentication' }),
    dsTransactionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transaction identifier for the Directory server' }),
  })
  .openapi({ required: [] })
  .openapi('ThreeDSecure')

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

const ValidationResultSchema = z
  .strictObject({
    result: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The result of the check.\n\nPossible values:\n\n- **valid**: The validation was successful.\n\n- **invalid**: The validation failed.\n\n- **notValidated**: The validation was not performed because some services were unreachable or Adyen does not have the information needed to perform the check.\n\n- **notApplicable**: The validation is not applicable.',
      }),
    type: z.string().exactOptional().openapi({ description: 'Type of check.' }),
  })
  .openapi({ required: [] })
  .openapi('ValidationResult')

const RelayedAuthorisationRequestSchema = z
  .strictObject({
    accountHolder: ResourceReferenceSchema.exactOptional().openapi({
      description: 'The reference of the account holder.',
    }),
    amount: AmountSchema.exactOptional().openapi({ description: 'The amount of the transaction.' }),
    amountAdjustments: z
      .array(AmountAdjustmentSchema)
      .exactOptional()
      .openapi({ description: 'The amount adjustments in the transaction.' }),
    authCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The authorization code for the payment.' }),
    authorisationDecision: AuthorisationDecisionRequestSchema.exactOptional().openapi({
      description: 'The decision of the authorization.',
    }),
    authorisationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The authorization type.\n\nPossible values:\n* **finalAuthorisation**\n* **preAuthorisation**\n* **defaultAuthorisation**',
      }),
    balanceAccount: ResourceReferenceSchema.exactOptional().openapi({
      description: 'The reference of the balance account.',
    }),
    balanceMutations: z
      .array(BalanceMutationSchema)
      .exactOptional()
      .openapi({ description: 'The list of balance mutations per event.' }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    entryMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entry mode of the information of the payment instrument. For example: **contactless**, **chip**, **magstripe**.',
      }),
    environment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The environment from which the webhook originated.\nPossible values: **test**, **live**.\n',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the transfer.' }),
    merchantData: MerchantDataSchema.exactOptional().openapi({
      description: 'The information about the merchant.',
    }),
    originalAmount: AmountSchema.exactOptional().openapi({
      description: 'The amount in the original currency.',
    }),
    paymentInstrument: PaymentInstrumentSchema.exactOptional().openapi({
      description: 'Contains information about the payment instrument.',
    }),
    processingType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The processing type used for this payment. For example: **ecommerce**, **pos**, **moto**.',
      }),
    reference: z.string().exactOptional().openapi({ description: 'The reference of the payment.' }),
    schemeRiskScore: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The risk score provided by the card schemes.' }),
    schemeTraceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the original payment. This ID is provided by the scheme and can be alphanumeric or numeric, depending on the scheme.',
      }),
    schemeUniqueTransactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier created by the scheme. This ID can be alphanumeric or numeric depending on the scheme.',
      }),
    scores: z
      .array(TransactionScoringSchema)
      .exactOptional()
      .openapi({ description: 'The list of transaction scores.' }),
    threeDSecure: ThreeDSecureSchema.exactOptional().openapi({
      description: 'The data of the result from the 3DS authentication.',
    }),
    transactionRulesResult: TransactionRulesResultSchema.exactOptional().openapi({
      description: 'Contains the results of the evaluation of the transaction rules.',
    }),
    type: z
      .literal('balancePlatform.authorisation.relayed')
      .exactOptional()
      .openapi({ description: 'Type of notification.' }),
    validationResult: z
      .array(ValidationResultSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the checks that Adyen performed to validate the payment and the result of each.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RelayedAuthorisationRequest')

const RelayedAuthorisationResponseSchema = z
  .strictObject({
    authorisationDecision: AuthorisationDecisionResponseSchema.exactOptional().openapi({
      description: 'Object representing the authorization decision.',
    }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Object that contains key-value pairs that you can use in your reporting or other business process.',
      }),
    reference: z.string().exactOptional().openapi({ description: 'Reference of the payment.' }),
  })
  .openapi({ required: [] })
  .openapi('RelayedAuthorisationResponse')

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

const WebhookAckExample = {
  summary:
    'Respond with your relayed authorization decision: "Authorised" to continue, "Refused" to refuse',
  value: {
    authorisationDecision: { status: 'Authorised' },
    reference: 'myBalancePlatformPayment_12345',
    metadata: { customId: 'your-own-custom-field-12345' },
  },
}

const PostBalancePlatformAuthorisationRelayedBalancePlatformAuthorisationRelayedExample = {
  summary: 'Relayed authorization request',
  description: 'Example webhook for a request for relayed authorization',
  value: {
    accountHolder: { description: 'Account holder description', id: 'AH123ABCDEFGHIJKLMN456789' },
    amount: { currency: 'EUR', value: -2700 },
    authCode: '123456',
    authorisationDecision: { reasonCode: 'APPROVED', status: 'Authorised', statusCode: 'APPROVED' },
    authorisationType: 'finalAuthorisation',
    balanceAccount: { description: 'Balance Account Description', id: 'BA123ABCDEFGHIJKLMN456789' },
    balanceMutations: [
      {
        balanceAfter: { currency: 'EUR', value: 221163 },
        balanceBefore: { currency: 'EUR', value: 221190 },
        currency: 'EUR',
        mutationAmount: { currency: 'EUR', value: -2700 },
        type: 'AuthorisedOutgoing',
      },
    ],
    balancePlatform: 'TestBalancePlatform',
    entryMode: 'contactless',
    id: '2ABCBA13456ABCDE',
    merchantData: {
      acquirerId: '012345',
      mcc: '5813',
      merchantId: '000123450000123',
      nameLocation: {
        city: 'Amsterdam',
        country: 'NLD',
        name: 'Tea Shop NLD',
        rawData: 'TeaShop_NLD',
      },
      postalCode: '3333AB',
    },
    originalAmount: { currency: 'EUR', value: -2700 },
    paymentInstrument: {
      balanceAccountId: 'BA123ABCDEFGHIJKLMN456789',
      description: 'PaymentInstrument Description',
      issuingCountryCode: 'NL',
      paymentInstrumentGroupId: 'PG3123ABCDEFGHIJKLMN456789',
      reference: '123456789',
      status: 'active',
      type: 'card',
      card: {
        authentication: { email: 'john.doe@provider.com' },
        brand: 'mc',
        brandVariant: 'mc_debit_bpd',
        cardholderName: 'John Doe',
        formFactor: 'virtual',
        bin: '555555',
        expiration: { month: '09', year: '2027' },
        lastFour: '0000',
        number: '12345ABCDE',
      },
      id: 'PI123ABCDEFGHIJKLMN456789',
    },
    processingType: 'token',
    reference: 'ABCDEFGHIJ',
    schemeUniqueTransactionId: 'ABCDEFU2B1305',
    transactionRulesResult: { allHardBlockRulesPassed: true, score: 80 },
    validationResult: [
      { result: 'valid', type: 'TransactionValidation' },
      { result: 'valid', type: 'PaymentInstrumentExpirationCheck' },
      { result: 'valid', type: 'BalanceCheck' },
      { result: 'valid', type: 'Screening' },
      { result: 'valid', type: 'RealBalanceAvailable' },
      { result: 'notValidated', type: 'MITAllowedMerchant' },
      { result: 'valid', type: 'PaymentInstrumentFound' },
      { result: 'valid', type: 'TransactionRules' },
      { result: 'valid', type: 'AccountLookup' },
      { result: 'valid', type: 'PaymentInstrumentActive' },
      { result: 'valid', type: 'CardholderAuthentication' },
      { result: 'valid', type: 'PaymentInstrument' },
      { result: 'valid', type: 'CardAuthentication' },
      { result: 'valid', type: 'PartyScreening' },
      { result: 'valid', type: 'InputExpiryDateCheck' },
    ],
    environment: 'test',
    type: 'balancePlatform.authorisation.relayed',
  },
}

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const balancePlatformAuthorisationRelayedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.authorisation.relayed',
  tags: ['Relayed authorization'],
  summary: 'Relayed authorization requested',
  description:
    'Adyen sends this webhook to allow you to provide [relayed authorization](https://docs.adyen.com/issuing/authorisation/relayed-authorisation/#respond-to-webhook) for a transaction.\n\nTo complete a relayed authorization, respond to this webhook with an **HTTP 200** response. Include the `authorisationDecision` in the response body.\n\nIf we do not receive the response within two seconds, we apply your [fallback logic](https://docs.adyen.com/issuing/authorisation/relayed-authorisation/#fallback).',
  operationId: 'post-balancePlatform.authorisation.relayed',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RelayedAuthorisationRequestSchema,
          examples: {
            'balancePlatform.authorisation.relayed':
              PostBalancePlatformAuthorisationRelayedBalancePlatformAuthorisationRelayedExample,
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
          schema: RelayedAuthorisationResponseSchema,
          examples: { 'balancePlatform.authorisation.relayed': WebhookAckExample },
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
  security: [{ BasicAuth: [] }],
}

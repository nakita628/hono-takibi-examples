import { createRoute, z } from '@hono/zod-openapi'

const AccountIdSchema = z
  .string()
  .regex(/^[2-9A-HJ-NP-Z]{13}$/)
  .length(13)
  .openapi({
    title: 'PayPal Account Identifier',
    description: 'The account identifier for a PayPal account.',
  })
  .openapi('AccountId')

const CardTypeSchema = z
  .enum(['CREDIT', 'DEBIT', 'PREPAID', 'STORE', 'UNKNOWN'])
  .openapi({
    title: 'Card Type',
    description: 'Type of card. i.e Credit, Debit and so on.',
    'x-enumDescriptions': [
      { value: 'CREDIT', description: 'A credit card.' },
      { value: 'DEBIT', description: 'A debit card.' },
      { value: 'PREPAID', description: 'A Prepaid card.' },
      { value: 'STORE', description: 'A store card.' },
      { value: 'UNKNOWN', description: 'Card type cannot be determined.' },
    ],
  })
  .openapi('CardType')

const CardBrandSchema = z
  .enum([
    'VISA',
    'MASTERCARD',
    'DISCOVER',
    'AMEX',
    'SOLO',
    'JCB',
    'STAR',
    'DELTA',
    'SWITCH',
    'MAESTRO',
    'CB_NATIONALE',
    'CONFIGOGA',
    'CONFIDIS',
    'ELECTRON',
    'CETELEM',
    'CHINA_UNION_PAY',
    'DINERS',
    'ELO',
    'HIPER',
    'HIPERCARD',
    'RUPAY',
    'GE',
    'SYNCHRONY',
    'EFTPOS',
    'UNKNOWN',
  ])
  .openapi({
    title: 'Card Brand',
    description: 'The card network or brand. Applies to credit, debit, gift, and payment cards.',
    'x-enumDescriptions': [
      { value: 'VISA', description: 'Visa card.' },
      { value: 'MASTERCARD', description: 'Mastecard card.' },
      { value: 'DISCOVER', description: 'Discover card.' },
      { value: 'AMEX', description: 'American Express card.' },
      { value: 'SOLO', description: 'Solo debit card.' },
      { value: 'JCB', description: 'Japan Credit Bureau card.' },
      { value: 'STAR', description: 'Military Star card.' },
      { value: 'DELTA', description: 'Delta Airlines card.' },
      { value: 'SWITCH', description: 'Switch credit card.' },
      { value: 'MAESTRO', description: 'Maestro credit card.' },
      { value: 'CB_NATIONALE', description: 'Carte Bancaire (CB) credit card.' },
      { value: 'CONFIGOGA', description: 'Configoga credit card.' },
      { value: 'CONFIDIS', description: 'Confidis credit card.' },
      { value: 'ELECTRON', description: 'Visa Electron credit card.' },
      { value: 'CETELEM', description: 'Cetelem credit card.' },
      { value: 'CHINA_UNION_PAY', description: 'China union pay credit card.' },
      {
        value: 'DINERS',
        description:
          'The Diners Club International banking and payment services capability network owned by Discover Financial Services (DFS), one of the most recognized brands in US financial services.',
      },
      { value: 'ELO', description: 'The Brazilian Elo card payment network.' },
      { value: 'HIPER', description: 'The Hiper - Ingenico ePayment network.' },
      {
        value: 'HIPERCARD',
        description:
          "The Brazilian Hipercard payment network that's widely accepted in the retail market.",
      },
      { value: 'RUPAY', description: 'The RuPay payment network.' },
      { value: 'GE', description: 'The GE Credit Union 3Point card payment network.' },
      { value: 'SYNCHRONY', description: 'The Synchrony Financial (SYF) payment network.' },
      {
        value: 'EFTPOS',
        description:
          'The Electronic Fund Transfer At Point of Sale(EFTPOS) Debit card payment network.',
      },
      { value: 'UNKNOWN', description: 'UNKNOWN payment network.' },
    ],
  })
  .openapi('CardBrand')

const CountryCodeSchema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [2-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode')

const ApplePayPaymentTokenResponseSchema = z
  .object({
    card: z
      .object({
        name: z
          .string()
          .regex(/^.{1,300}$/)
          .min(1)
          .max(300)
          .exactOptional()
          .openapi({ description: "The card holder's name as it appears on the card." }),
        last_digits: z
          .string()
          .regex(/^[0-9]{2,4}$/)
          .min(2)
          .max(4)
          .exactOptional()
          .openapi({ description: 'The last digits of the payment card.', readOnly: true }),
        type: CardTypeSchema.exactOptional().openapi({ description: 'The payment card type.' }),
        brand: CardBrandSchema.exactOptional().openapi({
          description: 'The card brand or network. Typically used in the response.',
        }),
        billing_address: z
          .object({
            address_line_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
              }),
            address_line_2: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The second line of the address, for example, a suite or apartment number.',
              }),
            admin_area_2: z
              .string()
              .max(120)
              .exactOptional()
              .openapi({
                description: 'A city, town, or village. Smaller than `admin_area_level_1`.',
              }),
            admin_area_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
              }),
            postal_code: z
              .string()
              .max(60)
              .exactOptional()
              .openapi({
                description:
                  'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
              }),
            country_code: CountryCodeSchema,
          })
          .exactOptional()
          .openapi({
            description:
              'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
            title: 'Portable Postal Address (Medium-Grained)',
            required: ['country_code'],
          }),
      })
      .exactOptional()
      .openapi({
        title: 'Apple Pay Card',
        description:
          'The payment card to be used to fund a payment. Can be a credit or debit card.',
        required: [],
      }),
  })
  .openapi({
    title: 'Apple Pay Response',
    description: 'A resource representing a response for Apple Pay.',
    required: [],
  })
  .openapi('ApplePayPaymentTokenResponse')

const CurrencyCodeSchema = z
  .string()
  .length(3)
  .openapi({
    description:
      'The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.',
    'x-security-classification': { data_class: 'class4', data_category: 'INTRINSIC' },
  })
  .openapi('CurrencyCode')

const MoneySchema = z
  .object({
    currency_code: CurrencyCodeSchema,
    value: z
      .string()
      .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
      .max(32)
      .openapi({
        description:
          'The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).',
      }),
  })
  .openapi({
    title: 'Money',
    description:
      'The currency and amount for a financial transaction, such as a balance or payment due.',
    required: ['currency_code', 'value'],
  })
  .openapi('Money')

const PricingSchemeSchema = z
  .object({
    price: MoneySchema.exactOptional().openapi({
      description: 'The price the customer will be charged based on the pricing model',
    }),
    pricing_model: z.enum(['FIXED', 'VARIABLE', 'AUTO_RELOAD']).openapi({
      description: 'The pricing model for the billing cycle.',
      'x-enumDescriptions': [
        {
          value: 'FIXED',
          description: 'A fixed pricing scheme where the customer is charged a fixed amount.',
        },
        {
          value: 'VARIABLE',
          description: 'A variable pricing scheme where the customer is charged a variable amount.',
        },
        {
          value: 'AUTO_RELOAD',
          description:
            'A auto-reload pricing scheme where the customer is charged a fixed amount for reload.',
        },
      ],
    }),
    reload_threshold_amount: MoneySchema.exactOptional().openapi({
      description:
        'The threshold amount on which the reload charge would be triggered. This will be associated with the account-balance where if the account-balance goes below this amount then customer would incur reload charge.',
    }),
  })
  .openapi({
    title: 'Pricing Scheme',
    description: 'The pricing scheme details.',
    required: ['pricing_model'],
  })
  .openapi('PricingScheme')

const FrequencySchema = z.any().openapi('Frequency')

const DateNoTimeSchema = z
  .string()
  .regex(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)
  .length(10)
  .openapi({
    description:
      'The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.',
  })
  .openapi('DateNoTime')

const BillingCycleSchema = z
  .object({
    tenure_type: z.enum(['REGULAR', 'TRIAL']).openapi({
      description:
        'The tenure type of the billing cycle identifies if the billing cycle is a trial(free or discounted) or regular billing cycle.',
      'x-enumDescriptions': [
        {
          value: 'REGULAR',
          description:
            'A regular billing cycle to identify recurring charges for the billing agreement.',
        },
        {
          value: 'TRIAL',
          description:
            'A trial billing cycle to identify free or discounted charge for the billing agreement. Free trails will not have a price object in pricing scheme where as a discounted trial would have a discounted price compared to regular billing cycle.',
        },
      ],
    }),
    pricing_scheme: PricingSchemeSchema.exactOptional().openapi({
      description:
        'The active pricing scheme for this billing cycle. A free trial billing cycle does not require a pricing scheme.',
    }),
    frequency: FrequencySchema.exactOptional().openapi({
      description: 'The frequency details for this billing cycle.',
    }),
    total_cycles: z
      .int32()
      .min(0)
      .max(999)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>). Regular billing cycles can be executed infinite times (value of <code>0</code> for <code>total_cycles</code>) or a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>).',
      }),
    sequence: z
      .int32()
      .min(1)
      .max(3)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle.',
      }),
    start_date: DateNoTimeSchema.exactOptional().openapi({
      description:
        'The start date for the billing cycle, in YYYY-MM-DD. This field should be not be provided if the billing cycle starts at the time of checkout. When this field is not provided, the billing cycle amount will be included in any data validations confirming that the total provided by the merchant match the sum of individual items due at the time of checkout. Only one billing cycle (with sequence equal to 1) can have a no start date.',
    }),
  })
  .openapi({
    title: 'Billing Cycle',
    description:
      'The billing cycle providing details of the billing frequency, amount, duration and if the billing cycle is a free, discounted or regular billing cycle. The sequence of the billing cycle will be in the following order - free trial billing cycle(s), discounted trial billing cycle(s), regular billing cycle(s).',
    required: ['tenure_type'],
  })
  .openapi('BillingCycle')

const BillingCycleListSchema = z
  .array(BillingCycleSchema)
  .min(1)
  .max(3)
  .openapi({
    description:
      'An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.',
  })
  .openapi('BillingCycleList')

const CountryCode_2Schema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode_2')

const ProductsSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({ description: 'This value provides the category of the BIN.' })
  .openapi('Products')

const ProductsListSchema = z
  .array(ProductsSchema)
  .min(1)
  .max(256)
  .openapi({
    description:
      'The type of card product assigned to the BIN by the issuer. These values are defined by the issuer and may change over time. Some examples include: PREPAID_GIFT, CONSUMER, CORPORATE.',
  })
  .openapi('ProductsList')

const BinDetailsSchema = z
  .object({
    bin: z
      .string()
      .regex(/^[0-9]+$/)
      .min(1)
      .max(25)
      .exactOptional()
      .openapi({
        description:
          'The Bank Identification Number (BIN) signifies the number that is being used to identify the granular level details (except the PII information) of the card.',
      }),
    issuing_bank: z
      .string()
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({ description: 'The issuer of the card instrument.' }),
    bin_country_code: CountryCode_2Schema.exactOptional().openapi({
      description:
        'The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank.',
    }),
    products: ProductsListSchema.exactOptional(),
  })
  .openapi({
    title: 'Bin Details',
    description: 'Bank Identification Number (BIN) details used to fund a payment.',
    required: [],
  })
  .openapi('BinDetails')

const DateYearMonthSchema = z
  .string()
  .regex(/^[0-9]{4}-(0[1-9]|1[0-2])$/)
  .length(7)
  .openapi({
    description:
      'The year and month, in ISO-8601 `YYYY-MM` date format. See [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
  })
  .openapi('DateYearMonth')

const CardVerificationStatusSchema = z
  .enum(['VERIFIED', 'FAILED'])
  .openapi({
    title: 'Card Verification Status',
    description: 'Verification status of Card.',
    'x-enumDescriptions': [
      { value: 'VERIFIED', description: 'Card has been verified ' },
      { value: 'FAILED', description: 'Card verification has failed ' },
    ],
  })
  .openapi('CardVerificationStatus')

const DateTimeSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .openapi({
    description:
      'The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>',
  })
  .openapi('DateTime')

const CardVerificationDetailsSchema = z
  .object({
    network_transaction_id: z
      .string()
      .regex(/^[a-zA-Z0-9-_@.:&+=*^'~#!$%()]+$/)
      .min(1)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          "DEPRECATED. This field is DEPRECATED. Please find the network transaction id data in the 'id' field under the 'network_transaction_reference' object instead of the 'verification' object.",
        deprecated: true,
      }),
    date: z
      .string()
      .regex(/^[0-9]+$/)
      .length(4)
      .exactOptional()
      .openapi({
        description:
          "DEPRECATED. This field is DEPRECATED. Please find the date data in the 'date' field under the 'network_transaction_reference' object instead of the 'verification' object.",
        deprecated: true,
      }),
    network: CardBrandSchema.exactOptional().openapi({
      description:
        "DEPRECATED. This field is DEPRECATED. Please find the network data in the 'network' field under the 'network_transaction_reference' object instead of the 'verification' object.",
      deprecated: true,
    }),
    time: DateTimeSchema.exactOptional().openapi({
      description:
        "DEPRECATED. This field is DEPRECATED. Please find the time data in the 'time' field under the 'network_transaction_reference' object instead of the 'verification' object.",
      readOnly: true,
      deprecated: true,
    }),
    amount: MoneySchema.exactOptional().openapi({
      description: 'The amount used for card verification.',
    }),
    processor_response: z
      .object({
        avs_code: z
          .enum([
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'I',
            'M',
            'N',
            'P',
            'R',
            'S',
            'U',
            'W',
            'X',
            'Y',
            'Z',
            'Null',
            '0',
            '1',
            '2',
            '3',
            '4',
          ])
          .exactOptional()
          .openapi({
            description:
              'The address verification code for Visa, Discover, Mastercard, or American Express transactions.',
            readOnly: true,
            'x-enumDescriptions': [
              {
                value: 'A',
                description:
                  'For Visa, Mastercard, or Discover transactions, the address matches but the zip code does not match. For American Express transactions, the card holder address is correct.',
              },
              {
                value: 'B',
                description:
                  'For Visa, Mastercard, or Discover transactions, the address matches. International A.',
              },
              {
                value: 'C',
                description:
                  'For Visa, Mastercard, or Discover transactions, no values match. International N.',
              },
              {
                value: 'D',
                description:
                  'For Visa, Mastercard, or Discover transactions, the address and postal code match. International X.',
              },
              {
                value: 'E',
                description:
                  'For Visa, Mastercard, or Discover transactions, not allowed for Internet or phone transactions. For American Express card holder, the name is incorrect but the address and postal code match.',
              },
              {
                value: 'F',
                description:
                  'For Visa, Mastercard, or Discover transactions, the address and postal code match. UK-specific X. For American Express card holder, the name is incorrect but the address matches.',
              },
              {
                value: 'G',
                description:
                  'For Visa, Mastercard, or Discover transactions, global is unavailable. Nothing matches.',
              },
              {
                value: 'I',
                description:
                  'For Visa, Mastercard, or Discover transactions, international is unavailable. Not applicable.',
              },
              {
                value: 'M',
                description:
                  'For Visa, Mastercard, or Discover transactions, the address and postal code match. For American Express card holder, the name, address, and postal code match.',
              },
              {
                value: 'N',
                description:
                  'For Visa, Mastercard, or Discover transactions, nothing matches. For American Express card holder, the address and postal code are both incorrect.',
              },
              {
                value: 'P',
                description:
                  'For Visa, Mastercard, or Discover transactions, postal international Z. Postal code only.',
              },
              {
                value: 'R',
                description:
                  'For Visa, Mastercard, or Discover transactions, re-try the request. For American Express, the system is unavailable.',
              },
              {
                value: 'S',
                description:
                  'For Visa, Mastercard, Discover, or American Express, the service is not supported.',
              },
              {
                value: 'U',
                description:
                  'For Visa, Mastercard, or Discover transactions, the service is unavailable. For American Express, information is not available. For Maestro, the address is not checked or the acquirer had no response. The service is not available.',
              },
              {
                value: 'W',
                description:
                  'For Visa, Mastercard, or Discover transactions, whole ZIP code. For American Express, the card holder name, address, and postal code are all incorrect.',
              },
              {
                value: 'X',
                description:
                  'For Visa, Mastercard, or Discover transactions, exact match of the address and the nine-digit ZIP code. For American Express, the card holder name, address, and postal code are all incorrect.',
              },
              {
                value: 'Y',
                description:
                  'For Visa, Mastercard, or Discover transactions, the address and five-digit ZIP code match. For American Express, the card holder address and postal code are both correct.',
              },
              {
                value: 'Z',
                description:
                  'For Visa, Mastercard, or Discover transactions, the five-digit ZIP code matches but no address. For American Express, only the card holder postal code is correct.',
              },
              { value: 'Null', description: 'For Maestro, no AVS response was obtained.' },
              { value: '0', description: 'For Maestro, all address information matches.' },
              { value: '1', description: 'For Maestro, none of the address information matches.' },
              { value: '2', description: 'For Maestro, part of the address information matches.' },
              {
                value: '3',
                description:
                  'For Maestro, the merchant did not provide AVS information. It was not processed.',
              },
              {
                value: '4',
                description:
                  'For Maestro, the address was not checked or the acquirer had no response. The service is not available.',
              },
            ],
          }),
        cvv_code: z
          .enum(['E', 'I', 'M', 'N', 'P', 'S', 'U', 'X', 'All others', '0', '1', '2', '3', '4'])
          .exactOptional()
          .openapi({
            description:
              'The card verification value code for for Visa, Discover, Mastercard, or American Express.',
            readOnly: true,
            'x-enumDescriptions': [
              {
                value: 'E',
                description:
                  'For Visa, Mastercard, Discover, or American Express, error - unrecognized or unknown response.',
              },
              {
                value: 'I',
                description:
                  'For Visa, Mastercard, Discover, or American Express, invalid or null.',
              },
              {
                value: 'M',
                description:
                  'For Visa, Mastercard, Discover, or American Express, the CVV2/CSC matches.',
              },
              {
                value: 'N',
                description:
                  'For Visa, Mastercard, Discover, or American Express, the CVV2/CSC does not match.',
              },
              {
                value: 'P',
                description:
                  'For Visa, Mastercard, Discover, or American Express, it was not processed.',
              },
              {
                value: 'S',
                description:
                  'For Visa, Mastercard, Discover, or American Express, the service is not supported.',
              },
              {
                value: 'U',
                description:
                  'For Visa, Mastercard, Discover, or American Express, unknown - the issuer is not certified.',
              },
              {
                value: 'X',
                description:
                  'For Visa, Mastercard, Discover, or American Express, no response. For Maestro, the service is not available.',
              },
              {
                value: 'All others',
                description: 'For Visa, Mastercard, Discover, or American Express, error.',
              },
              { value: '0', description: 'For Maestro, the CVV2 matched.' },
              { value: '1', description: 'For Maestro, the CVV2 did not match.' },
              {
                value: '2',
                description: 'For Maestro, the merchant has not implemented CVV2 code handling.',
              },
              {
                value: '3',
                description:
                  'For Maestro, the merchant has indicated that CVV2 is not present on card.',
              },
              { value: '4', description: 'For Maestro, the service is not available.' },
            ],
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'The processor response information for payment requests, such as direct credit card transactions.',
        title: 'Processor Response',
        required: [],
      }),
    three_d_secure: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "DEPRECATED. This field is DEPRECATED. Please find the 3D secure authentication data in the 'three_d_secure' object under the 'authentication_result' object instead of the 'verification' object.",
        deprecated: true,
      }),
  })
  .openapi({
    title: 'Card Verification Details',
    description:
      'Card Verification details including the authorization details and 3D SECURE details.',
    required: [],
  })
  .openapi('CardVerificationDetails')

const NetworkTransactionReferenceEntitySchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9-_@.:&+=*^'~#!$%()]+$/)
      .min(9)
      .max(36)
      .openapi({
        description:
          'Transaction reference id returned by the scheme. For Visa and Amex, this is the "Tran id" field in response. For MasterCard, this is the "BankNet reference id" field in response. For Discover, this is the "NRID" field in response. The pattern we expect for this field from Visa/Amex/CB/Discover is numeric, Mastercard/BNPP is alphanumeric and Paysecure is alphanumeric with special character -.',
      }),
    date: z
      .string()
      .regex(/^[0-9]+$/)
      .length(4)
      .exactOptional()
      .openapi({
        description:
          'The date that the transaction was authorized by the scheme. This field may not be returned for all networks. MasterCard refers to this field as "BankNet reference date.',
      }),
    network: CardBrandSchema.exactOptional().openapi({
      description: 'Name of the card network through which the transaction was routed.',
    }),
    time: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time when the instrument was verified.',
      readOnly: true,
    }),
  })
  .openapi({
    title: 'Network Transaction Reference Entity',
    description: 'Previous network transaction reference including id and network.',
    required: ['id'],
  })
  .openapi('NetworkTransactionReferenceEntity')

const NetworkTransactionReferenceResponseSchema = NetworkTransactionReferenceEntitySchema.openapi({
  title: 'Network Transaction Reference Response',
  description: 'Previous network transaction reference including id in response.',
}).openapi('NetworkTransactionReferenceResponse')

const ParesStatusSchema = z
  .enum(['Y', 'N', 'U', 'A', 'C', 'R', 'D', 'I'])
  .openapi({
    description:
      "Transactions status result identifier. The outcome of the issuer's authentication.",
    'x-enumDescriptions': [
      { value: 'Y', description: 'Successful authentication.' },
      {
        value: 'N',
        description: 'Failed authentication / account not verified / transaction denied.',
      },
      { value: 'U', description: 'Unable to complete authentication.' },
      { value: 'A', description: 'Successful attempts transaction.' },
      { value: 'C', description: 'Challenge required for authentication.' },
      {
        value: 'R',
        description: 'Authentication rejected (merchant must not submit for authorization).',
      },
      { value: 'D', description: 'Challenge required; decoupled authentication confirmed.' },
      {
        value: 'I',
        description: 'Informational only; 3DS requestor challenge preference acknowledged.',
      },
    ],
  })
  .openapi('ParesStatus')

const EnrolledSchema = z
  .enum(['Y', 'N', 'U', 'B'])
  .openapi({
    description: 'Status of Authentication eligibility.',
    'x-enumDescriptions': [
      {
        value: 'Y',
        description:
          'Yes. The bank is participating in 3-D Secure protocol and will return the ACSUrl.',
      },
      { value: 'N', description: 'No. The bank is not participating in 3-D Secure protocol.' },
      {
        value: 'U',
        description:
          'Unavailable. The DS or ACS is not available for authentication at the time of the request.',
      },
      {
        value: 'B',
        description:
          'Bypass. The merchant authentication rule is triggered to bypass authentication.',
      },
    ],
  })
  .openapi('Enrolled')

const ThreeDSecureAuthenticationResponseSchema = z
  .object({
    authentication_status: ParesStatusSchema.exactOptional().openapi({
      description: "The outcome of the issuer's authentication.",
    }),
    enrollment_status: EnrolledSchema.exactOptional().openapi({
      description: 'Status of authentication eligibility.',
    }),
  })
  .openapi({
    title: 'Response of 3D Secure Authentication',
    description: 'Results of 3D Secure Authentication.',
    required: [],
  })
  .openapi('ThreeDSecureAuthenticationResponse')

const ThreeDSecureAuthenticationResponse_2Schema = ThreeDSecureAuthenticationResponseSchema.and(
  z
    .object({
      authentication_id: z
        .string()
        .regex(/^[0-9a-zA-Z_-]+$/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'The externally received 3ds authentication id, to be returned in card detokenization response.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'Three D Secure Authentication Response',
    description: 'Results of 3D Secure Authentication.',
  })
  .openapi('ThreeDSecureAuthenticationResponse_2')

const CardResponseEntitySchema = z
  .object({
    name: z
      .string()
      .regex(/^[A-Za-z ]+$/)
      .min(2)
      .max(300)
      .exactOptional()
      .openapi({ description: "The card holder's name as it appears on the card." }),
    last_digits: z
      .string()
      .regex(/[0-9]{2,}/)
      .min(2)
      .max(4)
      .exactOptional()
      .openapi({ description: 'The last digits of the payment card.', readOnly: true }),
    brand: CardBrandSchema.exactOptional().openapi({
      description: 'The card brand or network. Typically used in the response.',
      readOnly: true,
    }),
    expiry: DateYearMonthSchema.exactOptional().openapi({
      description:
        'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    billing_address: z
      .object({
        address_line_1: z
          .string()
          .max(300)
          .exactOptional()
          .openapi({
            description:
              'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
          }),
        address_line_2: z
          .string()
          .max(300)
          .exactOptional()
          .openapi({
            description:
              'The second line of the address, for example, a suite or apartment number.',
          }),
        admin_area_2: z
          .string()
          .max(120)
          .exactOptional()
          .openapi({ description: 'A city, town, or village. Smaller than `admin_area_level_1`.' }),
        admin_area_1: z
          .string()
          .max(300)
          .exactOptional()
          .openapi({
            description:
              'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
          }),
        postal_code: z
          .string()
          .max(60)
          .exactOptional()
          .openapi({
            description:
              'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
          }),
        country_code: CountryCodeSchema,
        id: z
          .string()
          .regex(/^[0-9A-Za-z-_]+$/)
          .min(1)
          .max(36)
          .exactOptional()
          .openapi({ description: 'The resource ID of the address.' }),
      })
      .exactOptional()
      .openapi({
        title: 'Address request details.',
        description: 'Address request details.',
        required: ['country_code'],
      }),
    verification_status: CardVerificationStatusSchema.exactOptional().openapi({
      description: 'Card Verification status.',
    }),
    verification: CardVerificationDetailsSchema.exactOptional(),
    network_transaction_reference: NetworkTransactionReferenceResponseSchema.exactOptional(),
    authentication_result: z
      .object({ three_d_secure: ThreeDSecureAuthenticationResponse_2Schema.exactOptional() })
      .exactOptional()
      .openapi({
        title: 'Authentication Response',
        description: 'Results of Authentication such as 3D Secure.',
        required: [],
      }),
    bin_details: BinDetailsSchema.exactOptional().openapi({
      description: 'Bank Identification Number (BIN) details used to fund a payment.',
    }),
    type: CardTypeSchema.exactOptional().openapi({ description: 'The payment card type.' }),
  })
  .openapi({
    title: 'Card Response Entity',
    description: 'Full representation of a Card Payment Token.',
    required: [],
  })
  .openapi('CardResponseEntity')

const NetworkTokenEntitySchema = z.any().openapi('NetworkTokenEntity')

const CardResponseSchema = CardResponseEntitySchema.and(
  z.object({ network_token: NetworkTokenEntitySchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    title: 'Card Response',
    description: 'Full representation of a Card Payment Token including network token.',
  })
  .openapi('CardResponse')

const CardVerificationMethodSchema = z
  .enum(['SCA_WHEN_REQUIRED', 'SCA_ALWAYS'])
  .openapi({
    title: 'Card Verification Method',
    description: 'The verification method of the card.',
    'x-enumDescriptions': [
      {
        value: 'SCA_WHEN_REQUIRED',
        description:
          'When an authorization or transaction is attempted this option will return a contingency and HATEOAS link only when local regulations require strong customer authentication, (e.g. 3DS in countries and use cases where it is mandated). The API caller should redirect the payer to the link so that they can authenticate themselves. In all cases, when an authorization is requested the AVS/CVV results will be returned in the response.',
      },
      {
        value: 'SCA_ALWAYS',
        description:
          'Selecting this option will attempt to force a strong customer authentication for the authorization/transaction. In countries where SCA has been defined and implemented it will result in a contingency and HATEOAS link being returned.  The API caller should redirect the payer to that link so that they can authenticate themselves against their issuing bank or other entity. As noted, the HATEOAS link is only available in all regions where strong authentication is supported, (e.g. in European countries where 3DS is live). Merchants can use this setting as an additional layer of security if they choose to. In all cases, when an authorization is requested the AVS/CVV results will be returned in the response.',
      },
    ],
  })
  .openapi('CardVerificationMethod')

const MerchantPartnerCustomerIdSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]+$/)
  .min(1)
  .max(22)
  .openapi({ description: 'The unique ID for a customer generated by PayPal.' })
  .openapi('MerchantPartnerCustomerId')

const CustomerSchema = z
  .object({
    id: MerchantPartnerCustomerIdSchema.exactOptional().openapi({
      description: "The unique ID for a customer in merchant's or partner's system of records.",
    }),
    merchant_customer_id: z
      .string()
      .regex(/^[0-9a-zA-Z-_.^*$@#]+$/)
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer.',
      }),
  })
  .openapi({
    title: 'Customer Request',
    description:
      'This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.',
    required: [],
  })
  .openapi('Customer')

const VaultIdSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]+$/)
  .min(1)
  .max(36)
  .openapi({ description: 'The PayPal-generated ID for the vault token.' })
  .openapi('VaultId')

const WalletBaseSchema = z
  .object({
    description: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'The description displayed to the consumer on the approval flow for a digital wallet, as well as on the merchant view of the payment token management experience. exp: PayPal.com.',
      }),
    usage_pattern: z
      .enum([
        'IMMEDIATE',
        'DEFERRED',
        'RECURRING_PREPAID',
        'RECURRING_POSTPAID',
        'THRESHOLD_PREPAID',
        'THRESHOLD_POSTPAID',
        'UNSCHEDULED_POSTPAID',
        'UNSCHEDULED_PREPAID',
        'SUBSCRIPTION_PREPAID',
        'SUBSCRIPTION_POSTPAID',
        'INSTALLMENT_POSTPAID',
        'INSTALLMENT_PREPAID',
      ])
      .exactOptional()
      .openapi({
        description: 'Expected business/charge model for the billing agreement.',
        'x-enumDescriptions': [
          {
            value: 'IMMEDIATE',
            description:
              'On-demand instant payments – non-recurring, pre-paid, variable amount, variable frequency.',
          },
          {
            value: 'DEFERRED',
            description:
              'Pay after use, non-recurring post-paid, variable amount, irregular frequency.',
          },
          {
            value: 'RECURRING_PREPAID',
            description:
              'Pay upfront fixed or variable amount on a fixed date before the goods/service is delivered.',
          },
          {
            value: 'RECURRING_POSTPAID',
            description:
              'Pay on a fixed date based on usage or consumption after the goods/service is delivered.',
          },
          {
            value: 'THRESHOLD_PREPAID',
            description:
              'Charge payer when the set amount is reached or monthly billing cycle, whichever comes first, before the goods/service is delivered.',
          },
          {
            value: 'THRESHOLD_POSTPAID',
            description:
              'Charge payer when the set amount is reached or monthly billing cycle, whichever comes first, after the goods/service is delivered.',
          },
          {
            value: 'UNSCHEDULED_POSTPAID',
            description:
              'Merchant-managed installment plan when the amount to be paid and the billing frequency are fixed, but there is a defined number of payments with the payment due after the goods/services are delivered.',
          },
          {
            value: 'UNSCHEDULED_PREPAID',
            description:
              'Unscheduled card on file plan where the merchant can bill buyer upfront based on an agreed logic, but amount due and frequency can vary. Inclusive of automatic reload plans.',
          },
          {
            value: 'SUBSCRIPTION_PREPAID',
            description:
              'Subscription plan where the amount due and the billing frequency are fixed, and there is no defined duration with the payment due before the good/service is delivered.',
          },
          {
            value: 'SUBSCRIPTION_POSTPAID',
            description:
              'Subscription plan where the amount due and the billing frequency are fixed, and there is no defined duration with the payment due after the goods/services are delivered.',
          },
          {
            value: 'INSTALLMENT_POSTPAID',
            description:
              'Merchant-managed installment plan when the amount to be paid and the billing frequency are fixed, but there is a defined number of payments with the payment due after the goods/services are delivered.',
          },
          {
            value: 'INSTALLMENT_PREPAID',
            description:
              'Merchant-managed installment plan when the amount to be paid and the billing frequency are fixed, but there is a defined number of payments with the payment due before the good/service is delivered.',
          },
        ],
      }),
    shipping: z
      .object({
        name: z
          .object({
            full_name: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({ description: "When the party is a person, the party's full name." }),
          })
          .exactOptional()
          .openapi({ description: 'The name of the party.', title: 'Name', required: [] }),
        phone_number: z
          .object({
            country_code: z
              .string()
              .regex(/^[0-9]{1,3}?$/)
              .min(1)
              .max(3)
              .openapi({
                description:
                  'The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
              }),
            national_number: z
              .string()
              .regex(/^[0-9]{1,14}?$/)
              .min(1)
              .max(14)
              .openapi({
                description:
                  'The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
            title: 'Phone',
            required: ['country_code', 'national_number'],
          }),
        type: z
          .enum(['SHIPPING', 'PICKUP_IN_PERSON', 'PICKUP_IN_STORE', 'PICKUP_FROM_PERSON'])
          .exactOptional()
          .openapi({
            title: 'Fullfillment Type',
            description:
              'A classification for the method of purchase fulfillment (e.g shipping, in-store pickup, etc). Either `type` or `options` may be present, but not both.',
            'x-enumDescriptions': [
              {
                value: 'SHIPPING',
                description: 'The payer intends to receive the items at a specified address.',
                default: true,
              },
              {
                value: 'PICKUP_IN_PERSON',
                description: 'DEPRECATED. Please use "PICKUP_FROM_PERSON" instead.',
              },
              {
                value: 'PICKUP_IN_STORE',
                description:
                  'The payer intends to pick up the item(s) from the payee\'s physical store. Also termed as BOPIS, "Buy Online, Pick-up in Store". Seller protection is provided with this option.',
              },
              {
                value: 'PICKUP_FROM_PERSON',
                description:
                  'The payer intends to pick up the item(s) from the payee in person. Also termed as BOPIP, "Buy Online, Pick-up in Person". Seller protection is not available, since the payer is receiving the item from the payee in person, and can validate the item prior to payment.',
              },
            ],
          }),
        address: z
          .object({
            address_line_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
              }),
            address_line_2: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The second line of the address, for example, a suite or apartment number.',
              }),
            admin_area_2: z
              .string()
              .max(120)
              .exactOptional()
              .openapi({
                description: 'A city, town, or village. Smaller than `admin_area_level_1`.',
              }),
            admin_area_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
              }),
            postal_code: z
              .string()
              .max(60)
              .exactOptional()
              .openapi({
                description:
                  'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
              }),
            country_code: CountryCodeSchema,
          })
          .exactOptional()
          .openapi({
            description:
              'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
            title: 'Portable Postal Address (Medium-Grained)',
            required: ['country_code'],
          }),
      })
      .exactOptional()
      .openapi({ description: 'The shipping details.', title: 'Shipping Details', required: [] }),
    permit_multiple_payment_tokens: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source.',
      }),
    usage_type: z
      .enum(['MERCHANT', 'PLATFORM'])
      .exactOptional()
      .openapi({
        description: 'The usage type associated with a digital wallet payment token.',
        'x-enumDescriptions': [
          {
            value: 'MERCHANT',
            description:
              'The PayPal Payment Token will be used for future transaction directly with a merchant.',
          },
          {
            value: 'PLATFORM',
            description:
              'The PayPal Payment Token will be used for future transaction on a platform. A platform is typically a marketplace or a channel that a payer can purchase goods and services from multiple merchants.',
          },
        ],
      }),
    customer_type: z
      .enum(['CONSUMER', 'BUSINESS'])
      .exactOptional()
      .openapi({
        description:
          'The customer type associated with a digital wallet payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.',
        'x-enumDescriptions': [
          {
            value: 'CONSUMER',
            description:
              'The customer vaulting the PayPal payment token is a consumer on the merchant / platform.',
          },
          {
            value: 'BUSINESS',
            description:
              'The customer vaulting the PayPal payment token is a business on merchant / platform.',
          },
        ],
      }),
  })
  .openapi({
    title: 'Vaulted Digital Wallet Common Attributes',
    description:
      'Resource consolidating common request and response attributes for vaulting a Digital Wallet.',
    required: [],
  })
  .openapi('WalletBase')

const EmailSchema = z
  .string()
  .regex(
    /(?:[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  )
  .min(3)
  .max(254)
  .openapi({
    description:
      'The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>',
  })
  .openapi('Email')

const PayerBaseSchema = z
  .object({
    email_address: EmailSchema.exactOptional().openapi({
      description: 'The email address of the payer.',
    }),
    payer_id: AccountIdSchema.exactOptional().openapi({
      description: 'The PayPal-assigned ID for the payer.',
      readOnly: true,
    }),
  })
  .openapi({
    title: 'Payer Base',
    description:
      'The customer who approves and pays for the order. The customer is also known as the payer.',
    required: [],
  })
  .openapi('PayerBase')

const PhoneTypeSchema = z
  .enum(['FAX', 'HOME', 'MOBILE', 'OTHER', 'PAGER'])
  .openapi({ title: 'Phone Type', description: 'The phone type.' })
  .openapi('PhoneType')

const PhoneWithTypeSchema = z
  .object({
    phone_type: PhoneTypeSchema.exactOptional(),
    phone_number: z
      .object({
        national_number: z
          .string()
          .regex(/^[0-9]{1,14}?$/)
          .min(1)
          .max(14)
          .openapi({
            description:
              'The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
          }),
      })
      .openapi({
        description:
          'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
        title: 'Phone',
        required: ['national_number'],
      }),
  })
  .openapi({
    title: 'Phone With Type',
    description: 'The phone information.',
    required: ['phone_number'],
  })
  .openapi('PhoneWithType')

const PhoneSchema = z
  .object({
    country_code: z
      .string()
      .regex(/^[0-9]{1,3}?$/)
      .min(1)
      .max(3)
      .openapi({
        description:
          'The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
    national_number: z
      .string()
      .regex(/^[0-9]{1,14}?$/)
      .min(1)
      .max(14)
      .openapi({
        description:
          'The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
    extension_number: z
      .string()
      .regex(/^[0-9]{1,15}?$/)
      .min(1)
      .max(15)
      .exactOptional()
      .openapi({ description: 'The extension number.' }),
  })
  .openapi({
    title: 'Phone',
    description:
      'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
    required: ['country_code', 'national_number'],
  })
  .openapi('Phone')

const PaypalWalletResponseSchema = WalletBaseSchema.openapi({
  description:
    'Resource consolidating common request and response attributes for vaulting a Digital Wallet.',
})
  .and(
    z
      .any()
      .openapi({
        description:
          'Resource consolidating common request and response attributes for vaulting a Digital Wallet.',
      }),
  )
  .and(
    z
      .any()
      .openapi({
        description:
          'Resource consolidating common request and response attributes for vaulting a Digital Wallet.',
      }),
  )
  .and(PayerBaseSchema)
  .and(
    z
      .object({
        name: z
          .object({
            given_name: z
              .string()
              .max(140)
              .exactOptional()
              .openapi({
                description: "When the party is a person, the party's given, or first, name.",
              }),
            surname: z
              .string()
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  "When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.",
              }),
          })
          .exactOptional()
          .openapi({ description: 'The name of the party.', title: 'Name', required: [] }),
        phone: PhoneWithTypeSchema.exactOptional().openapi({
          description:
            'The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant\'s PayPal account. The `phone.phone_number` supports only `national_number`.',
        }),
        address: z
          .object({
            address_line_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
              }),
            address_line_2: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The second line of the address, for example, a suite or apartment number.',
              }),
            admin_area_2: z
              .string()
              .max(120)
              .exactOptional()
              .openapi({
                description: 'A city, town, or village. Smaller than `admin_area_level_1`.',
              }),
            admin_area_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
              }),
            postal_code: z
              .string()
              .max(60)
              .exactOptional()
              .openapi({
                description:
                  'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
              }),
            country_code: CountryCodeSchema,
          })
          .exactOptional()
          .openapi({
            description:
              'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
            title: 'Portable Postal Address (Medium-Grained)',
            required: ['country_code'],
          }),
      })
      .openapi({ required: [] }),
  )
  .and(
    z
      .object({})
      .openapi({
        readOnly: true,
        title: 'Payer',
        description:
          'The customer who approves and pays for the order. The customer is also known as the payer.',
      }),
  )
  .and(
    z
      .object({
        account_id: AccountIdSchema.exactOptional().openapi({
          readOnly: true,
          description: 'The account identifier for a PayPal account.',
        }),
        phone_number: PhoneSchema.exactOptional().openapi({
          readOnly: true,
          description:
            'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
        }),
      })
      .openapi({ required: [] }),
  )
  .and(
    z
      .object({})
      .openapi({
        title: 'PayPal Wallet Response',
        description: 'Full representation of a PayPal Payment Token.',
      }),
  )
  .openapi('PaypalWalletResponse')

const VenmoResponseSchema = WalletBaseSchema.openapi({
  description:
    'Resource consolidating common request and response attributes for vaulting a Digital Wallet.',
})
  .and(
    z
      .any()
      .openapi({
        description:
          'Resource consolidating common request and response attributes for vaulting a Digital Wallet.',
      }),
  )
  .and(
    z
      .any()
      .openapi({
        description:
          'Resource consolidating common request and response attributes for vaulting a Digital Wallet.',
      }),
  )
  .and(PayerBaseSchema)
  .and(
    z
      .object({
        name: z
          .object({
            given_name: z
              .string()
              .max(140)
              .exactOptional()
              .openapi({
                description: "When the party is a person, the party's given, or first, name.",
              }),
            surname: z
              .string()
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  "When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.",
              }),
          })
          .exactOptional()
          .openapi({ description: 'The name of the party.', title: 'Name', required: [] }),
        phone: PhoneWithTypeSchema.exactOptional().openapi({
          description:
            'The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant\'s PayPal account. The `phone.phone_number` supports only `national_number`.',
        }),
        address: z
          .object({
            address_line_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
              }),
            address_line_2: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The second line of the address, for example, a suite or apartment number.',
              }),
            admin_area_2: z
              .string()
              .max(120)
              .exactOptional()
              .openapi({
                description: 'A city, town, or village. Smaller than `admin_area_level_1`.',
              }),
            admin_area_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
              }),
            postal_code: z
              .string()
              .max(60)
              .exactOptional()
              .openapi({
                description:
                  'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
              }),
            country_code: CountryCodeSchema,
          })
          .exactOptional()
          .openapi({
            description:
              'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
            title: 'Portable Postal Address (Medium-Grained)',
            required: ['country_code'],
          }),
      })
      .openapi({ required: [] }),
  )
  .and(
    z
      .object({})
      .openapi({
        readOnly: true,
        title: 'Payer',
        description:
          'The customer who approves and pays for the order. The customer is also known as the payer.',
      }),
  )
  .and(
    z
      .object({
        user_name: z
          .string()
          .regex(/^[-a-zA-Z0-9_]*$/)
          .min(1)
          .max(50)
          .exactOptional()
          .openapi({ description: 'The Venmo username, as chosen by the user.' }),
      })
      .openapi({ required: [] }),
  )
  .and(
    z
      .object({})
      .openapi({
        title: 'Venmo Response',
        description: 'Full representation of a Venmo Payment Token.',
      }),
  )
  .openapi('VenmoResponse')

const PaymentSourceSchema = z
  .object({
    card: CardResponseSchema.exactOptional(),
    paypal: PaypalWalletResponseSchema.exactOptional(),
    venmo: VenmoResponseSchema.exactOptional(),
    apple_pay: ApplePayPaymentTokenResponseSchema.exactOptional(),
  })
  .openapi({
    title: 'Payment token response payment source',
    description: 'The vaulted payment method details.',
    required: [],
  })
  .openapi('PaymentSource')

const LinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'CONNECT', 'OPTIONS', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('LinkDescription')

const LinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(1)
  .max(32)
  .openapi({
    description: 'An array of related [HATEOAS links](/api/rest/responses/#hateoas).',
    readOnly: true,
  })
  .openapi('LinkDescriptionList')

const PaymentTokenResponseSchema = z
  .object({
    id: VaultIdSchema.exactOptional().openapi({
      description: 'The PayPal-generated ID for the vault token.',
    }),
    customer: CustomerSchema.exactOptional().openapi({
      description: "Customer in merchant's or partner's system of records.",
    }),
    payment_source: PaymentSourceSchema.exactOptional(),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Payment Token Response',
    description: 'Full representation of a saved payment token.',
    required: [],
  })
  .openapi('PaymentTokenResponse')

const PaymentTokenResponseListSchema = z
  .array(PaymentTokenResponseSchema)
  .min(0)
  .max(64)
  .openapi('PaymentTokenResponseList')

const CustomerVaultPaymentTokensResponseSchema = z
  .object({
    total_items: z
      .int()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: 'Total number of items.' }),
    total_pages: z
      .int()
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({ description: 'Total number of pages.' }),
    customer: z
      .object({
        id: MerchantPartnerCustomerIdSchema.exactOptional().openapi({
          description: "The unique ID for a customer in merchant's or partner's system of records.",
        }),
        merchant_customer_id: z
          .string()
          .regex(/^[0-9a-zA-Z-_.^*$@#]+$/)
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            description:
              'Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer.',
          }),
      })
      .exactOptional()
      .openapi({
        title: 'Customer Request',
        description:
          'This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.',
        required: [],
      }),
    payment_tokens: PaymentTokenResponseListSchema.exactOptional(),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Vault of a customer',
    description: 'Collection of payment tokens saved for a given customer.',
    required: [],
  })
  .openapi('CustomerVaultPaymentTokensResponse')

const DefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(1)
  .max(4)
  .openapi({
    description:
      'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links) that are either relevant to the issue by providing additional information or offering potential resolutions.',
    readOnly: true,
  })
  .openapi('DefinitionsLinkDescriptionList')

const NetworkTransactionReferenceRequestSchema = z
  .any()
  .openapi('NetworkTransactionReferenceRequest')

const TokenIdRequestSchema = z
  .object({
    id: z
      .string()
      .regex(/^[0-9A-Za-z_-]+$/)
      .min(1)
      .max(255)
      .openapi({ description: 'The PayPal-generated ID for the token.' }),
    type: z
      .literal('SETUP_TOKEN')
      .openapi({
        description: 'The tokenization method that generated the ID.',
        'x-enumDescriptions': [
          {
            value: 'SETUP_TOKEN',
            description: 'The setup token, which is a temporary reference to payment source.',
          },
        ],
      }),
  })
  .openapi({
    title: 'Token Request',
    description: 'The Tokenized Payment Source representing a Request to Vault a Token.',
    required: ['id', 'type'],
  })
  .openapi('TokenIdRequest')

const DefinitionsPaymentSourceSchema = z
  .object({
    card: z
      .object({
        name: z
          .string()
          .regex(/^.{1,300}$/)
          .min(1)
          .max(300)
          .exactOptional()
          .openapi({ description: "The card holder's name as it appears on the card." }),
        number: z
          .string()
          .regex(/^[0-9]{13,19}$/)
          .min(13)
          .max(19)
          .exactOptional()
          .openapi({ description: 'The primary account number (PAN) for the payment card.' }),
        expiry: DateYearMonthSchema.exactOptional().openapi({
          description:
            'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
        }),
        security_code: z
          .string()
          .regex(/^[0-9]{3,4}$/)
          .min(3)
          .max(4)
          .exactOptional()
          .openapi({
            description:
              'The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. This parameter cannot be present in the request when `payment_initiator=MERCHANT`.',
          }),
        brand: CardBrandSchema.exactOptional().openapi({
          description: 'The card brand or network. Typically used in the response.',
        }),
        billing_address: z
          .object({
            address_line_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
              }),
            address_line_2: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The second line of the address, for example, a suite or apartment number.',
              }),
            admin_area_2: z
              .string()
              .max(120)
              .exactOptional()
              .openapi({
                description: 'A city, town, or village. Smaller than `admin_area_level_1`.',
              }),
            admin_area_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
              }),
            postal_code: z
              .string()
              .max(60)
              .exactOptional()
              .openapi({
                description:
                  'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
              }),
            country_code: CountryCodeSchema,
          })
          .exactOptional()
          .openapi({
            description:
              'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
            title: 'Portable Postal Address (Medium-Grained)',
            required: ['country_code'],
          }),
        network_transaction_reference: NetworkTransactionReferenceRequestSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        title: 'Card Request',
        description: 'A Resource representing a request to vault a Card.',
        required: [],
      }),
    token: TokenIdRequestSchema.exactOptional(),
  })
  .openapi({
    title: 'Payment source request',
    description: 'The payment method to vault with the instrument details.',
    required: [],
  })
  .openapi('DefinitionsPaymentSource')

const ErrorDetails_2Schema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    location: z
      .string()
      .default('body')
      .exactOptional()
      .openapi({
        description:
          'The location of the field that caused the error. Value is `body`, `path`, or `query`.',
      }),
    issue: z
      .string()
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
    links: DefinitionsLinkDescriptionListSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.',
      }),
  })
  .openapi({
    title: 'Error Details',
    description: 'The error details. Required for client-side `4XX` errors.',
    required: ['issue'],
  })
  .openapi('ErrorDetails_2')

const ErrorDetailsListSchema = z
  .array(ErrorDetails_2Schema)
  .openapi({ description: 'An array of additional details about the error.' })
  .openapi('ErrorDetailsList')

const ErrorDefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .openapi({
    description: 'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('ErrorDefinitionsLinkDescriptionList')

const ErrorSchema = z
  .object({
    name: z.string().openapi({ description: 'The human-readable, unique name of the error.' }),
    message: z.string().openapi({ description: 'The message that describes the error.' }),
    debug_id: z
      .string()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    details: ErrorDetailsListSchema.exactOptional(),
    links: ErrorDefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Error',
    description: 'The error details.',
    required: ['name', 'message', 'debug_id'],
  })
  .openapi('Error')

const ErrorLocationSchema = z
  .enum(['body', 'path', 'query'])
  .default('body')
  .openapi({
    description:
      'The location of the field that caused the error. Value is `body`, `path`, or `query`.',
  })
  .openapi('ErrorLocation')

const ErrorDetailsSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    location: ErrorLocationSchema.exactOptional(),
    issue: z
      .string()
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.',
      }),
  })
  .openapi({
    title: 'Error Details',
    description: 'The error details. Required for client-side `4XX` errors.',
    required: ['issue'],
  })
  .openapi('ErrorDetails')

const ErrorLinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(20000)
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(100)
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('ErrorLinkDescription')

const Error_400Schema = z
  .object({
    name: z.literal('INVALID_REQUEST').exactOptional(),
    message: z
      .literal('Request is not well-formed, syntactically incorrect, or violates schema.')
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Bad Request Error',
    description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
    required: [],
  })
  .openapi('Error_400')

const Error_401Schema = z
  .object({
    name: z.literal('AUTHENTICATION_FAILURE').exactOptional(),
    message: z
      .literal(
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      )
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unauthorized Error',
    description:
      'Authentication failed due to missing Authorization header, or invalid authentication credentials.',
    required: [],
  })
  .openapi('Error_401')

const Error_403Schema = z
  .object({
    name: z.literal('NOT_AUTHORIZED').exactOptional(),
    message: z.literal('Authorization failed due to insufficient permissions.').exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Not Authorized Error',
    description:
      'The client is not authorized to access this resource, although it may have valid credentials. ',
    required: [],
  })
  .openapi('Error_403')

const Error_404Schema = z
  .object({
    name: z.literal('RESOURCE_NOT_FOUND').exactOptional(),
    message: z.literal('The specified resource does not exist.').exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Not found Error',
    description:
      'The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.',
    required: [],
  })
  .openapi('Error_404')

const Error_409Schema = z
  .object({
    name: z.literal('RESOURCE_CONFLICT').exactOptional(),
    message: z
      .literal('The server has detected a conflict while processing this request.')
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Resource Conflict Error',
    description: 'The server has detected a conflict while processing this request.',
    required: [],
  })
  .openapi('Error_409')

const Error_415Schema = z
  .object({
    name: z.literal('UNSUPPORTED_MEDIA_TYPE').exactOptional(),
    message: z
      .literal("The server does not support the request payload's media type.")
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unsupported Media Type Error',
    description: "The server does not support the request payload's media type.",
    required: [],
  })
  .openapi('Error_415')

const Error_422Schema = z
  .object({
    name: z.literal('UNPROCESSABLE_ENTITY').exactOptional(),
    message: z
      .literal(
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      )
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unprocessable Entity Error',
    description:
      'The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.',
    required: [],
  })
  .openapi('Error_422')

const Error_500Schema = z
  .object({
    name: z.literal('INTERNAL_SERVER_ERROR').exactOptional(),
    message: z.literal('An internal server error occurred.').exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Internal Server Error',
    description:
      'This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.',
    example: {
      name: 'INTERNAL_SERVER_ERROR',
      message: 'An internal server error occurred.',
      debug_id: '90957fca61718',
      links: [
        {
          href: 'https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR',
          rel: 'information_link',
        },
      ],
    },
    required: [],
  })
  .openapi('Error_500')

const Error_503Schema = z
  .object({
    name: z.literal('SERVICE_UNAVAILABLE').exactOptional(),
    message: z.literal('Service Unavailable.').exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Service Unavailable Error',
    description:
      'The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.',
    example: {
      name: 'SERVICE_UNAVAILABLE',
      message: 'Service Unavailable.',
      debug_id: '90957fca61718',
      information_link:
        'https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE',
    },
    required: [],
  })
  .openapi('Error_503')

const ErrorDefaultSchema = z
  .xor([
    Error_400Schema,
    Error_401Schema,
    Error_403Schema,
    Error_404Schema,
    Error_409Schema,
    Error_415Schema,
    Error_422Schema,
    Error_500Schema,
    Error_503Schema,
  ])
  .openapi({ description: 'The default error response.' })
  .openapi('ErrorDefault')

const LanguageSchema = z
  .string()
  .regex(/^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}|[0-9]{3}))?$/)
  .min(2)
  .max(10)
  .openapi({
    description:
      'The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/api/rest/reference/country-codes/) or [M49 region code](https://unstats.un.org/unsd/methodology/m49/).',
  })
  .openapi('Language')

const VaultInstructionSchema = z
  .enum(['ON_CREATE_PAYMENT_TOKENS', 'ON_PAYER_APPROVAL'])
  .default('ON_CREATE_PAYMENT_TOKENS')
  .openapi({
    title: 'Vault Instruction',
    description: 'Vault Instruction on action to be performed after a successful payer approval.',
    'x-enumDescriptions': [
      {
        value: 'ON_CREATE_PAYMENT_TOKENS',
        description:
          'Vault the payment method after API caller performs a successful POST on Payment Tokens.',
      },
      {
        value: 'ON_PAYER_APPROVAL',
        description: 'Vault the payment method on successful payer authentication and approval.',
      },
    ],
  })
  .openapi('VaultInstruction')

const ExperienceContextSchema = z
  .object({
    brand_name: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.',
      }),
    locale: LanguageSchema.exactOptional().openapi({
      description:
        'The BCP 47-formatted locale of pages that the PayPal vaulting experience shows. PayPal supports a five-character code. For example, `DA-DK`, `HE-IL`, `ID-ID`, `JA-JP`, `NO-NO`, `PT-BR`, `RU-RU`, `SV-SE`, `TH-TH`, `ZH-CN`, `ZH-HK`, or `ZH-TW`.',
    }),
    return_url: z
      .url()
      .min(1)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'The URL where the customer is redirected after customer approves leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.',
      }),
    cancel_url: z
      .url()
      .min(1)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'The URL where the customer is redirected after customer cancels or leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.',
      }),
    shipping_preference: z
      .enum(['GET_FROM_FILE', 'NO_SHIPPING', 'SET_PROVIDED_ADDRESS'])
      .default('GET_FROM_FILE')
      .exactOptional()
      .openapi({
        description: 'The shipping preference. This only applies to PayPal payment source.',
        'x-enumDescriptions': [
          {
            value: 'GET_FROM_FILE',
            description: 'Use the payer-provided shipping address on the PayPal site.',
          },
          {
            value: 'NO_SHIPPING',
            description:
              'Redact the shipping address from the PayPal site. Recommended for digital goods.',
          },
          {
            value: 'SET_PROVIDED_ADDRESS',
            description:
              'Use the merchant/platform-provided address. The payer cannot change this address on the PayPal site. If the merchant does not pass an address, the customer can choose the address on the PayPal site.',
          },
        ],
      }),
    vault_instruction: VaultInstructionSchema.exactOptional().openapi({
      description: 'Vault Instruction on action to be performed after a successful payer approval.',
    }),
  })
  .openapi({
    title: 'Experience Context',
    description: 'Customizes the Vault creation flow experience for your customers.',
    required: [],
  })
  .openapi('ExperienceContext')

const OneTimeChargesSchema = z
  .object({
    setup_fee: MoneySchema.exactOptional().openapi({
      description: 'The setup fee for the recurring plan.',
    }),
    shipping_amount: MoneySchema.exactOptional().openapi({
      description: 'The shipping amount due at the time of checkout.',
    }),
    taxes: MoneySchema.exactOptional().openapi({
      description: 'The taxes due at the time of checkout.',
    }),
    product_price: MoneySchema.exactOptional().openapi({
      description: 'The product price for any one-time product purchased at the time of checkout.',
    }),
    subtotal: MoneySchema.exactOptional().openapi({
      description:
        'The subtotal at the time of checkout. This is calculated by using the formula x + y + z where x is first-recurring-charge, y is setup-fee and z is item-price.',
      readOnly: true,
    }),
    total_amount: MoneySchema.openapi({
      description:
        'The total amount at the time of checkout. This is calculated by using the formula x + y + z where x is subtotal, y is shipping-amount and z is taxes.',
    }),
  })
  .openapi({
    title: 'One-Time Charges Info',
    description: 'The one-time charge info at the time of checkout.',
    required: ['total_amount'],
  })
  .openapi('OneTimeCharges')

const PaymentTokenRequestSchema = z
  .object({
    customer: z
      .object({
        id: MerchantPartnerCustomerIdSchema.exactOptional().openapi({
          description: "The unique ID for a customer in merchant's or partner's system of records.",
        }),
        merchant_customer_id: z
          .string()
          .regex(/^[0-9a-zA-Z-_.^*$@#]+$/)
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            description:
              'Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.',
        title: 'Customer Request',
        required: [],
      }),
    payment_source: DefinitionsPaymentSourceSchema,
  })
  .openapi({
    title: 'Payment Token Request',
    description:
      'Payment Token Request where the `source` defines the type of instrument to be stored.',
    required: ['payment_source'],
  })
  .openapi('PaymentTokenRequest')

const PaymentTokenStatusSchema = z
  .enum(['CREATED', 'PAYER_ACTION_REQUIRED', 'APPROVED', 'VAULTED', 'TOKENIZED'])
  .default('CREATED')
  .openapi({
    title: 'Payment Token Status',
    description: 'The status of the payment token.',
    'x-enumDescriptions': [
      {
        value: 'CREATED',
        description:
          'A setup token is initialized with minimal information, more data must be added to the setup-token to be vaulted',
      },
      {
        value: 'PAYER_ACTION_REQUIRED',
        description:
          'A contingecy on payer approval is required before the payment method can be saved.',
      },
      {
        value: 'APPROVED',
        description:
          'Setup token is ready to be vaulted. If a buyer approval contigency was returned, it is has been approved.',
      },
      { value: 'VAULTED', description: 'The payment token has been vaulted.' },
      {
        value: 'TOKENIZED',
        description:
          'A vaulted payment method token has been tokenized for short term (one time) use.',
      },
    ],
  })
  .openapi('PaymentTokenStatus')

const ProductOverrideSchema = z.any().openapi('ProductOverride')

const PlanSchema = z
  .object({
    billing_cycles: BillingCycleListSchema,
    product: ProductOverrideSchema.exactOptional().openapi({
      description: 'Product details associated with any one-time product purchase.',
    }),
    one_time_charges: OneTimeChargesSchema.openapi({
      description: 'Price and currency for any one-time charges due at plan signup.',
    }),
    name: z
      .string()
      .regex(/^[A-Za-z0-9() +',.:-]+$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'Name of the recurring plan.' }),
  })
  .openapi({
    title: 'Plan',
    description: 'The merchant level Recurring Billing plan metadata for the Billing Agreement.',
    required: ['billing_cycles', 'one_time_charges'],
  })
  .openapi('Plan')

const PaypalWalletRequestSchema = WalletBaseSchema.and(
  z
    .object({
      billing_plan: PlanSchema.exactOptional(),
      experience_context: ExperienceContextSchema.exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'PayPal Wallet Request',
    description: 'A resource representing a request to vault PayPal Wallet.',
  })
  .openapi('PaypalWalletRequest')

const VenmoRequestSchema = WalletBaseSchema.and(
  z
    .object({
      experience_context: z
        .object({
          brand_name: z
            .string()
            .regex(/^.*$/)
            .min(1)
            .max(300)
            .exactOptional()
            .openapi({
              description:
                'The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.',
            }),
          shipping_preference: z
            .enum(['GET_FROM_FILE', 'NO_SHIPPING', 'SET_PROVIDED_ADDRESS'])
            .default('GET_FROM_FILE')
            .exactOptional()
            .openapi({
              description: 'The shipping preference. This only applies to PayPal payment source.',
              'x-enumDescriptions': [
                {
                  value: 'GET_FROM_FILE',
                  description: 'Use the payer-provided shipping address on the PayPal site.',
                },
                {
                  value: 'NO_SHIPPING',
                  description:
                    'Redact the shipping address from the PayPal site. Recommended for digital goods.',
                },
                {
                  value: 'SET_PROVIDED_ADDRESS',
                  description:
                    'Use the merchant/platform-provided address. The payer cannot change this address on the PayPal site. If the merchant does not pass an address, the customer can choose the address on the PayPal site.',
                },
              ],
            }),
          vault_instruction: VaultInstructionSchema.exactOptional().openapi({
            description:
              'Vault Instruction on action to be performed after a successful payer approval.',
          }),
        })
        .exactOptional()
        .openapi({
          title: 'Experience Context',
          description: 'Customizes the Vault creation flow experience for your customers.',
          required: [],
        }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .object({})
      .openapi({
        title: 'Venmo Request',
        description: 'A resource representing a request to vault Venmo.',
      }),
  )
  .openapi('VenmoRequest')

const SetupTokenRequestSchema = z
  .object({
    customer: z
      .object({
        id: MerchantPartnerCustomerIdSchema.exactOptional().openapi({
          description: "The unique ID for a customer in merchant's or partner's system of records.",
        }),
        merchant_customer_id: z
          .string()
          .regex(/^[0-9a-zA-Z-_.^*$@#]+$/)
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            description:
              'Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.',
        title: 'Customer Request',
        required: [],
      }),
    payment_source: z
      .object({
        card: z
          .object({
            name: z
              .string()
              .regex(/^.{1,300}$/)
              .min(1)
              .max(300)
              .exactOptional()
              .openapi({ description: "The card holder's name as it appears on the card." }),
            number: z
              .string()
              .regex(/^[0-9]{13,19}$/)
              .min(13)
              .max(19)
              .exactOptional()
              .openapi({ description: 'The primary account number (PAN) for the payment card.' }),
            expiry: DateYearMonthSchema.exactOptional().openapi({
              description:
                'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
            }),
            security_code: z
              .string()
              .regex(/^[0-9]{3,4}$/)
              .min(3)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. This parameter cannot be present in the request when `payment_initiator=MERCHANT`.',
              }),
            brand: CardBrandSchema.exactOptional().openapi({
              description: 'The card brand or network. Typically used in the response.',
            }),
            billing_address: z
              .object({
                address_line_1: z
                  .string()
                  .max(300)
                  .exactOptional()
                  .openapi({
                    description:
                      'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
                  }),
                address_line_2: z
                  .string()
                  .max(300)
                  .exactOptional()
                  .openapi({
                    description:
                      'The second line of the address, for example, a suite or apartment number.',
                  }),
                admin_area_2: z
                  .string()
                  .max(120)
                  .exactOptional()
                  .openapi({
                    description: 'A city, town, or village. Smaller than `admin_area_level_1`.',
                  }),
                admin_area_1: z
                  .string()
                  .max(300)
                  .exactOptional()
                  .openapi({
                    description:
                      'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
                  }),
                postal_code: z
                  .string()
                  .max(60)
                  .exactOptional()
                  .openapi({
                    description:
                      'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
                  }),
                country_code: CountryCodeSchema,
              })
              .exactOptional()
              .openapi({
                description:
                  'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
                title: 'Portable Postal Address (Medium-Grained)',
                required: ['country_code'],
              }),
            verification_method: CardVerificationMethodSchema.exactOptional().openapi({
              description:
                'The API caller can opt in to verify the payment token through PayPal offered verification services (e.g. Smart Dollar Auth, 3DS).',
            }),
            experience_context: z
              .object({
                brand_name: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(300)
                  .exactOptional()
                  .openapi({
                    description:
                      'The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.',
                  }),
                locale: LanguageSchema.exactOptional().openapi({
                  description:
                    'The BCP 47-formatted locale of pages that the PayPal vaulting experience shows. PayPal supports a five-character code. For example, `DA-DK`, `HE-IL`, `ID-ID`, `JA-JP`, `NO-NO`, `PT-BR`, `RU-RU`, `SV-SE`, `TH-TH`, `ZH-CN`, `ZH-HK`, or `ZH-TW`.',
                }),
                return_url: z
                  .url()
                  .min(1)
                  .max(4000)
                  .exactOptional()
                  .openapi({
                    description:
                      'The URL where the customer is redirected after customer approves leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.',
                  }),
                cancel_url: z
                  .url()
                  .min(1)
                  .max(4000)
                  .exactOptional()
                  .openapi({
                    description:
                      'The URL where the customer is redirected after customer cancels or leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.',
                  }),
                vault_instruction: VaultInstructionSchema.exactOptional().openapi({
                  description:
                    'Vault Instruction on action to be performed after a successful payer approval.',
                }),
              })
              .exactOptional()
              .openapi({
                title: 'Experience Context',
                description: 'Customizes the Vault creation flow experience for your customers.',
                required: [],
              }),
            network_transaction_reference: NetworkTransactionReferenceRequestSchema.exactOptional(),
          })
          .exactOptional()
          .openapi({
            title: 'Card Request',
            description: 'A Resource representing a request to vault a Card.',
            required: [],
          }),
        paypal: PaypalWalletRequestSchema.exactOptional(),
        venmo: VenmoRequestSchema.exactOptional(),
        token: TokenIdRequestSchema.exactOptional(),
      })
      .openapi({
        description: 'The payment method to vault with the instrument details.',
        required: [],
      }),
  })
  .openapi({
    title: 'Setup Token',
    description:
      'Setup Token Request where the `source` defines the type of instrument to be stored.',
    required: ['payment_source'],
  })
  .openapi('SetupTokenRequest')

const SetupTokenResponseSchema = z
  .object({
    id: VaultIdSchema.exactOptional().openapi({
      description: 'The PayPal-generated ID for the vault token.',
    }),
    customer: z
      .object({
        id: MerchantPartnerCustomerIdSchema.exactOptional().openapi({
          description: "The unique ID for a customer in merchant's or partner's system of records.",
        }),
        merchant_customer_id: z
          .string()
          .regex(/^[0-9a-zA-Z-_.^*$@#]+$/)
          .min(1)
          .max(64)
          .exactOptional()
          .openapi({
            description:
              'Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.',
        title: 'Customer Request',
        required: [],
      }),
    status: PaymentTokenStatusSchema.exactOptional().openapi({
      description: 'The status of the payment token.',
    }),
    payment_source: z
      .object({
        card: CardResponseEntitySchema.and(z.object({}))
          .and(
            z
              .object({})
              .openapi({
                title: 'Card Response',
                description: 'Full representation of a Card Payment Token including network token.',
              }),
          )
          .exactOptional(),
        paypal: PaypalWalletResponseSchema.exactOptional(),
        venmo: VenmoResponseSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'The setup payment method details.', required: [] }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Minimal Setup Token',
    description: 'Minimal representation of a cached setup token.',
    required: [],
  })
  .openapi('SetupTokenResponse')

const PaypalRequestIdParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(1)
  .max(10000)
  .exactOptional()
  .openapi({
    param: {
      name: 'PayPal-Request-Id',
      description: 'The server stores keys for 3 hours.',
      in: 'header',
      required: false,
      schema: { type: 'string', minLength: 1, maxLength: 10000, pattern: '^.*$' },
    },
  })

const CustomerIdParamsSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]+$/)
  .min(7)
  .max(36)
  .openapi({
    param: {
      name: 'customer_id',
      description:
        "A unique identifier representing a specific customer in merchant's/partner's system or records.",
      in: 'query',
      required: true,
      schema: { type: 'string', minLength: 7, maxLength: 36, pattern: '^[0-9a-zA-Z_-]+$' },
    },
  })

const PageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(5),
  )
  .default(5)
  .exactOptional()
  .openapi({
    param: {
      name: 'page_size',
      description:
        'A non-negative, non-zero integer indicating the maximum number of results to return at one time.',
      in: 'query',
      required: false,
      schema: { type: 'integer', minimum: 1, maximum: 5, default: 5 },
    },
  })

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(10),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      name: 'page',
      description: 'A non-negative, non-zero integer representing the page of the results.',
      in: 'query',
      required: false,
      schema: { type: 'integer', minimum: 1, maximum: 10, default: 1 },
    },
  })

const TotalRequiredParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      name: 'total_required',
      description:
        'A boolean indicating total number of items (total_items) and pages (total_pages) are expected to be returned in the response.',
      in: 'query',
      required: false,
      schema: { type: 'boolean', default: false },
    },
  })

const IdParamsSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]+$/)
  .min(7)
  .max(36)
  .openapi({
    param: {
      name: 'id',
      description: 'ID of the setup token.',
      in: 'path',
      required: true,
      schema: { type: 'string', minLength: 7, maxLength: 36, pattern: '^[0-9a-zA-Z_-]+$' },
    },
  })

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: '/v1/oauth2/token',
      scopes: {
        'https://uri.paypal.com/services/vault/payment-tokens/readwrite':
          'Manage payment instruments',
        'https://uri.paypal.com/services/vault/payment-tokens/read':
          'Permission to only read from vault',
        'https://uri.paypal.com/services/vault/customers/read':
          'Permission to read customer information.',
        'https://uri.paypal.com/services/vault/customers/readwrite':
          'Permission to create/update customer information.',
      },
    },
  },
}

export const getV3VaultPaymentTokensRoute = createRoute({
  method: 'get',
  path: '/v3/vault/payment-tokens',
  tags: ['payment-tokens'],
  summary: 'List all payment tokens',
  description: 'Returns all payment tokens for a customer.',
  operationId: 'customer.payment-tokens.get',
  request: {
    query: z.object({
      customer_id: CustomerIdParamsSchema,
      page_size: PageSizeParamsSchema,
      page: PageParamsSchema,
      total_required: TotalRequiredParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful execution.',
      content: {
        'application/json': {
          schema: CustomerVaultPaymentTokensResponseSchema,
          examples: {
            customer_vault_payment_tokens_response: {
              value: {
                customer: { id: 'customer_4029352050' },
                payment_tokens: [
                  {
                    id: '8kk8451t',
                    customer: { id: 'customer_4029352050' },
                    payment_source: {
                      card: {
                        brand: 'VISA',
                        last_digits: '1111',
                        expiry: '2027-02',
                        name: 'John Doe',
                        billing_address: {
                          address_line_1: '2211 N First Street',
                          address_line_2: '17.3.160',
                          admin_area_2: 'San Jose',
                          admin_area_1: 'CA',
                          postal_code: '95131',
                          country_code: 'US',
                        },
                      },
                    },
                    links: [
                      {
                        rel: 'self',
                        href: 'https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t',
                        method: 'GET',
                        encType: 'application/json',
                      },
                      {
                        rel: 'delete',
                        href: 'https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t',
                        method: 'DELETE',
                        encType: 'application/json',
                      },
                    ],
                  },
                  {
                    id: 'fgh6561t',
                    customer: { id: 'customer_4029352050' },
                    payment_source: {
                      paypal: {
                        description: 'Description for PayPal to be shown to PayPal payer',
                        email_address: 'john.doe@example.com',
                        account_id: 'VYYFH3WJ4JPJQ',
                        shipping: {
                          name: { full_name: 'John Doe' },
                          address: {
                            address_line_1: '2211 N First Street',
                            address_line_2: '17.3.160',
                            admin_area_2: 'San Jose',
                            admin_area_1: 'CA',
                            postal_code: '95131',
                            country_code: 'US',
                          },
                        },
                        usage_pattern: 'IMMEDIATE',
                        usage_type: 'MERCHANT',
                        customer_type: 'CONSUMER',
                        name: { given_name: 'John', surname: 'Doe' },
                        address: {
                          address_line_1: '2211 N First Street',
                          address_line_2: '17.3.160',
                          admin_area_2: 'San Jose',
                          admin_area_1: 'CA',
                          postal_code: '95131',
                          country_code: 'US',
                        },
                      },
                    },
                    links: [
                      {
                        rel: 'self',
                        href: 'https://api-m.paypal.com/v3/vault/payment-tokens/fgh6561t',
                        method: 'GET',
                        encType: 'application/json',
                      },
                      {
                        rel: 'delete',
                        href: 'https://api-m.paypal.com/v3/vault/payment-tokens/fgh6561t',
                        method: 'DELETE',
                        encType: 'application/json',
                      },
                    ],
                  },
                  {
                    id: 'hg654s1t',
                    customer: { id: 'customer_4029352050' },
                    payment_source: {
                      venmo: {
                        description: 'Description for Venmo to be shown to Venmo payer',
                        shipping: {
                          name: { full_name: 'John Doe' },
                          address: {
                            address_line_1: '2211 N First Street',
                            address_line_2: '17.3.160',
                            admin_area_2: 'San Jose',
                            admin_area_1: 'CA',
                            postal_code: '95131',
                            country_code: 'US',
                          },
                        },
                        usage_pattern: 'IMMEDIATE',
                        usage_type: 'MERCHANT',
                        customer_type: 'CONSUMER',
                        email_address: 'john.doe@example.com',
                        user_name: 'johndoe',
                        name: { given_name: 'John', surname: 'Doe' },
                        account_id: 'VYYFH3WJ4JPJQ',
                        address: {
                          address_line_1: 'PayPal',
                          address_line_2: '2211 North 1st Street',
                          admin_area_1: 'CA',
                          admin_area_2: 'San Jose',
                          postal_code: '96112',
                          country_code: 'US',
                        },
                      },
                    },
                    links: [
                      {
                        rel: 'self',
                        href: 'https://api-m.paypal.com/v3/vault/payment-tokens/hg654s1t',
                        method: 'GET',
                        encType: 'application/json',
                      },
                      {
                        rel: 'delete',
                        href: 'https://api-m.paypal.com/v3/vault/payment-tokens/hg654s1t',
                        method: 'DELETE',
                        encType: 'application/json',
                      },
                    ],
                  },
                ],
                links: [
                  {
                    rel: 'self',
                    href: 'https://api-m.paypal.com/v3/vault/payment-tokens?customer_id=customer_4029352050&page=1&page_size=5&total_required=false',
                    method: 'GET',
                    encType: 'application/json',
                  },
                  {
                    rel: 'first',
                    href: 'https://api-m.paypal.com/v3/vault/payment-tokens?customer_id=customer_4029352050&page=1&page_size=5&total_required=false',
                    method: 'GET',
                    encType: 'application/json',
                  },
                  {
                    rel: 'last',
                    href: 'https://api-m.paypal.com/v3/vault/payment-tokens?customer_id=customer_4029352050&page=1&page_size=5&total_required=false',
                    method: 'GET',
                    encType: 'application/json',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/vault/payment-tokens/readwrite'] }],
})

export const postV3VaultPaymentTokensRoute = createRoute({
  method: 'post',
  path: '/v3/vault/payment-tokens',
  tags: ['payment-tokens'],
  summary: 'Create payment token for a given payment source',
  description:
    'Creates a Payment Token from the given payment source and adds it to the Vault of the associated customer.',
  operationId: 'payment-tokens.create',
  request: {
    headers: z.object({ 'PayPal-Request-Id': PaypalRequestIdParamsSchema }),
    body: {
      description:
        'Payment Token creation with a financial instrument and an optional customer_id.',
      content: {
        'application/json': {
          schema: PaymentTokenRequestSchema,
          examples: {
            payment_token_request: {
              value: {
                payment_source: { token: { id: '5C991763VB2781612', type: 'BILLING_AGREEMENT' } },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Idempotent response for a successful creation of payment token.',
      content: {
        'application/json': {
          schema: PaymentTokenResponseSchema,
          examples: {
            payment_token_response: {
              value: {
                id: '8kk8451t',
                customer: { id: 'customer_4029352050' },
                payment_source: {
                  card: {
                    last_digits: '1111',
                    expiry: '2027-02',
                    brand: 'VISA',
                    name: 'John Doe',
                    billing_address: {
                      address_line_1: '2211 N First Street',
                      address_line_2: '17.3.160',
                      admin_area_2: 'San Jose',
                      admin_area_1: 'CA',
                      postal_code: '95131',
                      country_code: 'US',
                    },
                  },
                },
                links: [
                  {
                    rel: 'self',
                    href: 'https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t',
                    method: 'GET',
                    encType: 'application/json',
                  },
                  {
                    rel: 'delete',
                    href: 'https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t',
                    method: 'DELETE',
                    encType: 'application/json',
                  },
                ],
              },
            },
          },
        },
      },
    },
    201: {
      description: 'A successful creation of payment token.',
      content: {
        'application/json': {
          schema: PaymentTokenResponseSchema,
          examples: {
            payment_token_response: {
              value: {
                id: '8kk8451t',
                customer: { id: 'customer_4029352050' },
                payment_source: {
                  card: {
                    last_digits: '1111',
                    expiry: '2027-02',
                    brand: 'VISA',
                    name: 'John Doe',
                    billing_address: {
                      address_line_1: '2211 N First Street',
                      address_line_2: '17.3.160',
                      admin_area_2: 'San Jose',
                      admin_area_1: 'CA',
                      postal_code: '95131',
                      country_code: 'US',
                    },
                  },
                },
                links: [
                  {
                    rel: 'self',
                    href: 'https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t',
                    method: 'GET',
                    encType: 'application/json',
                  },
                  {
                    rel: 'delete',
                    href: 'https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t',
                    method: 'DELETE',
                    encType: 'application/json',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Request contains reference to resources that do not exist.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/vault/payment-tokens/readwrite'] }],
})

export const getV3VaultPaymentTokensIdRoute = createRoute({
  method: 'get',
  path: '/v3/vault/payment-tokens/{id}',
  tags: ['payment-tokens'],
  summary: 'Retrieve a payment token',
  description:
    'Returns a readable representation of vaulted payment source associated with the payment token id.',
  operationId: 'payment-tokens.get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description: 'Successful execution.',
      content: { 'application/json': { schema: PaymentTokenResponseSchema } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/vault/payment-tokens/readwrite'] }],
})

export const deleteV3VaultPaymentTokensIdRoute = createRoute({
  method: 'delete',
  path: '/v3/vault/payment-tokens/{id}',
  tags: ['payment-tokens'],
  summary: 'Delete payment token',
  description: 'Delete the payment token associated with the payment token id.',
  operationId: 'payment-tokens.delete',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    204: {
      description:
        'The server has successfully executed the method, but there is no entity body to return.',
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/vault/payment-tokens/readwrite'] }],
})

export const postV3VaultSetupTokensRoute = createRoute({
  method: 'post',
  path: '/v3/vault/setup-tokens',
  tags: ['setup-tokens'],
  summary: 'Create a setup token',
  description:
    'Creates a Setup Token from the given payment source and adds it to the Vault of the associated customer.',
  operationId: 'setup-tokens.create',
  request: {
    headers: z.object({ 'PayPal-Request-Id': PaypalRequestIdParamsSchema }),
    body: {
      description:
        'Setup Token creation with a instrument type optional financial instrument details and customer_id.',
      content: {
        'application/json': {
          schema: SetupTokenRequestSchema,
          examples: {
            setup_token_request: {
              value: {
                payment_source: {
                  card: {
                    number: '4111111111111111',
                    expiry: '2027-02',
                    name: 'John Doe',
                    billing_address: {
                      address_line_1: '2211 N First Street',
                      address_line_2: '17.3.160',
                      admin_area_1: 'CA',
                      admin_area_2: 'San Jose',
                      postal_code: '95131',
                      country_code: 'US',
                    },
                    experience_context: {
                      brand_name: 'YourBrandName',
                      locale: 'en-US',
                      return_url: 'https://example.com/returnUrl',
                      cancel_url: 'https://example.com/cancelUrl',
                    },
                  },
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Idempotent response for a successful creation of setup token.',
      content: {
        'application/json': {
          schema: SetupTokenResponseSchema,
          examples: {
            setup_token_response: {
              value: {
                id: '5C991763VB2781612',
                customer: { id: 'customer_4029352050' },
                status: 'APPROVED',
                payment_source: {
                  card: {
                    last_digits: '1111',
                    expiry: '2027-02',
                    name: 'John Doe',
                    billing_address: {
                      address_line_1: '2211 N First Street',
                      address_line_2: '17.3.160',
                      admin_area_1: 'CA',
                      admin_area_2: 'San Jose',
                      postal_code: '95131',
                      country_code: 'US',
                    },
                  },
                },
                links: [
                  {
                    rel: 'self',
                    href: 'https://api-m.paypal.com/v3/vault/setup-tokens/5C991763VB2781612',
                    method: 'GET',
                    encType: 'application/json',
                  },
                  {
                    rel: 'confirm',
                    href: 'https://api-m.paypal.com/v3/vault/payment-token',
                    method: 'POST',
                    encType: 'application/json',
                  },
                ],
              },
            },
          },
        },
      },
    },
    201: {
      description: 'A successful creation of setup token.',
      content: {
        'application/json': {
          schema: SetupTokenResponseSchema,
          examples: {
            setup_token_response: {
              value: {
                id: '5C991763VB2781612',
                customer: { id: 'customer_4029352050' },
                status: 'APPROVED',
                payment_source: {
                  card: {
                    last_digits: '1111',
                    expiry: '2027-02',
                    name: 'John Doe',
                    billing_address: {
                      address_line_1: '2211 N First Street',
                      address_line_2: '17.3.160',
                      admin_area_1: 'CA',
                      admin_area_2: 'San Jose',
                      postal_code: '95131',
                      country_code: 'US',
                    },
                  },
                },
                links: [
                  {
                    rel: 'self',
                    href: 'https://api-m.paypal.com/v3/vault/setup-tokens/5C991763VB2781612',
                    method: 'GET',
                    encType: 'application/json',
                  },
                  {
                    rel: 'confirm',
                    href: 'https://api-m.paypal.com/v3/vault/payment-token',
                    method: 'POST',
                    encType: 'application/json',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/vault/payment-tokens/read'] }],
})

export const getV3VaultSetupTokensIdRoute = createRoute({
  method: 'get',
  path: '/v3/vault/setup-tokens/{id}',
  tags: ['setup-tokens'],
  summary: 'Retrieve a setup token',
  description:
    'Returns a readable representation of temporarily vaulted payment source associated with the setup token id.',
  operationId: 'setup-tokens.get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description:
        'Found requested setup-token, returned a payment method associated with the token.',
      content: { 'application/json': { schema: SetupTokenResponseSchema } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/vault/payment-tokens/read'] }],
})

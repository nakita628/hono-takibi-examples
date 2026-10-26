import { createRoute, z } from '@hono/zod-openapi'

const StandardHeaderSchemaSchema = z
  .string()
  .regex(/^.*$/)
  .min(1)
  .max(16000)
  .openapi({
    title: 'Schema Object for standard headers',
    description:
      'Standard headers are generally less restrictive in structure due to historical precedent across browsers, etc. This is a common schema for use in defining most standard headers.',
  })
  .openapi('StandardHeaderSchema')

const EmailAddressSchema = z
  .string()
  .regex(
    /^(?:[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  )
  .min(3)
  .max(254)
  .openapi({
    description:
      'The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>',
  })
  .openapi('EmailAddress')

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
    'CARTE_BANCAIRE',
    'STAR_ACCESS',
    'PULSE',
    'NYCE',
    'ACCEL',
    'UNKNOWN',
  ])
  .openapi({
    title: 'card_brand',
    description: 'The card network or brand. Applies to credit, debit, gift, and payment cards.',
  })
  .openapi('CardBrand')

const EmailSchema = z
  .string()
  .regex(
    /^.*(?:[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]).*$/,
  )
  .min(3)
  .max(254)
  .openapi({
    title: 'email',
    description:
      'The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>',
  })
  .openapi('Email')

const NetworkTransactionSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9-_@.:&+=*^'~#!$%()]+$/)
      .min(9)
      .max(36)
      .exactOptional()
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
          'The date that the transaction was authorized by the scheme. This field may not be returned for all networks. MasterCard refers to this field as "BankNet reference date". For some specific networks, such as MasterCard and Discover, this date field is mandatory when the `previous_network_transaction_reference_id` is passed.',
      }),
    network: CardBrandSchema.and(
      z
        .any()
        .openapi({
          description: 'Name of the card network through which the transaction was routed.',
        }),
    ).exactOptional(),
    acquirer_reference_number: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .min(1)
      .max(36)
      .exactOptional()
      .openapi({
        description:
          'Reference ID issued for the card transaction. This ID can be used to track the transaction across processors, card brands and issuing banks.',
      }),
  })
  .openapi({
    title: 'network_transaction',
    description: 'Reference values used by the card network to identify a transaction.',
    required: [],
  })
  .openapi('NetworkTransaction')

const CurrencyCodeSchema = z
  .string()
  .regex(/^[\S\s]*$/)
  .length(3)
  .openapi({
    description:
      'The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.',
  })
  .openapi('CurrencyCode')

const MoneySchema = z
  .object({
    currency_code: CurrencyCodeSchema,
    value: z
      .string()
      .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
      .min(0)
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

const CountryCode_2Schema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode_2')

const Phone_2Schema = z
  .object({
    country_code: z
      .string()
      .regex(/^[0-9]{1,3}?$/)
      .min(1)
      .max(3)
      .openapi({
        title: 'country_calling_code',
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
      'The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
    required: ['country_code', 'national_number'],
  })
  .openapi('Phone_2')

const DiscountWithBreakdownSchema = MoneySchema.and(z.object({}))
  .openapi({
    title: 'discount_with_breakdown',
    description:
      'The discount amount and currency code. For list of supported currencies and decimal precision, see the PayPal REST APIs <a href="/docs/integration/direct/rest/currency-codes/">Currency Codes</a>.',
  })
  .openapi('DiscountWithBreakdown')

const AmountBreakdownSchema = z
  .object({
    item_total: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The subtotal for all items. Required if the request includes `purchase_units[].items[].unit_amount`. Must equal the sum of `(items[].unit_amount * items[].quantity)` for all items. <code>item_total.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    shipping: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The shipping fee for all items within a given `purchase_unit`. <code>shipping.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    handling: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The handling fee for all items within a given `purchase_unit`. <code>handling.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    tax_total: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The total tax for all items. Required if the request includes `purchase_units.items.tax`. Must equal the sum of `(items[].tax * items[].quantity)` for all items. <code>tax_total.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    insurance: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The insurance fee for all items within a given `purchase_unit`. <code>insurance.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    shipping_discount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The shipping discount for all items within a given `purchase_unit`. <code>shipping_discount.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    discount: DiscountWithBreakdownSchema.and(
      z
        .any()
        .openapi({
          description:
            'The discount for all items within a given `purchase_unit`. <code>discount.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'amount_breakdown',
    description:
      'The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.',
    required: [],
  })
  .openapi('AmountBreakdown')

const AmountWithBreakdownSchema = MoneySchema.and(
  z.object({ breakdown: AmountBreakdownSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    title: 'amount_with_breakdown',
    description:
      'The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.<br/>If you specify `amount.breakdown`, the amount equals `item_total` plus `tax_total` plus `shipping` plus `handling` plus `insurance` minus `shipping_discount` minus discount.<br/>The amount must be a positive number. For listed of supported currencies and decimal precision, see the PayPal REST APIs <a href="/docs/integration/direct/rest/currency-codes/">Currency Codes</a>.',
  })
  .openapi('AmountWithBreakdown')

const AccountId_2Schema = z
  .string()
  .regex(/^[2-9A-HJ-NP-Z]{13}$/)
  .length(13)
  .openapi({
    title: 'PayPal Account Identifier',
    description: 'The account identifier for a PayPal account.',
  })
  .openapi('AccountId_2')

const PayeeBaseSchema = z
  .object({
    email_address: EmailSchema.and(
      z.any().openapi({ description: 'The email address of merchant.' }),
    ).exactOptional(),
    merchant_id: AccountId_2Schema.and(
      z.any().openapi({ description: 'The encrypted PayPal account ID of the merchant.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'payee_base',
    description:
      'The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee.',
    required: [],
  })
  .openapi('PayeeBase')

const PayeeSchema = PayeeBaseSchema.and(z.object({}))
  .openapi({
    title: 'payee',
    description:
      'The merchant who receives the funds and fulfills the order. The merchant is also known as the payee.',
  })
  .openapi('Payee')

const LinkSchemaSchema = z
  .object({
    additionalItems: z
      .object({})
      .exactOptional()
      .openapi({ title: 'additional_items', description: 'Any additional items.' }),
    dependencies: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Dependencies', description: 'The dependencies.' }),
    items: z.object({}).exactOptional().openapi({ title: 'Items', description: 'An item.' }),
    definitions: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Definitions', description: 'Definitions.' }),
    patternProperties: z
      .object({})
      .exactOptional()
      .openapi({ title: 'pattern_properties', description: 'The pattern properties.' }),
    properties: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Properties', description: 'The properties.' }),
    allOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'all_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'all_of',
        description: 'An array of sub-schemas. The data must validate against all sub-schemas.',
      }),
    anyOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'any_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'any_of',
        description:
          'An array of sub-schemas. The data must validate against one or more sub-schemas.',
      }),
    oneOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'one_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'one_of',
        description: 'An array of sub-schemas. The data must validate against one sub-schema.',
      }),
    not: z.object({}).exactOptional().openapi({ title: 'Not', description: 'Not.' }),
    links: z
      .array(z.object({}).openapi({ title: 'link', description: 'A link.', readOnly: true }))
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({ description: 'An array of links.', readOnly: true }),
    fragmentResolution: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'fragment_resolution', description: 'The fragment resolution.' }),
    media: z
      .object({
        type: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({
            description:
              'The media type. See [Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types](https://tools.ietf.org/html/rfc2046).',
          }),
        binaryEncoding: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({
            title: 'binary_encoding',
            description:
              'The content-encoding scheme. See [Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet Message Bodies](https://tools.ietf.org/html/rfc2045).',
          }),
      })
      .exactOptional()
      .openapi({
        title: 'Media',
        description: 'The media type and context-encoding scheme.',
        required: [],
      }),
    pathStart: z
      .url()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        title: 'path_start',
        description: "To apply this schema to the instances' URIs, start the URIs with this value.",
      }),
  })
  .openapi({ title: 'Link Schema', description: 'The request data or link target.', required: [] })
  .openapi('LinkSchema')

const LinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'CONNECT', 'OPTIONS', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
    title: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'The link title.' }),
    mediaType: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        title: 'media_type',
        description:
          'The media type, as defined by [RFC 2046](https://www.ietf.org/rfc/rfc2046.txt). Describes the link target.',
      }),
    encType: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .default('application/json')
      .exactOptional()
      .openapi({
        title: 'enc_type',
        description: 'The media type in which to submit the request data.',
      }),
    schema: LinkSchemaSchema.and(
      z.any().openapi({ description: 'The schema that describes the request data.' }),
    ).exactOptional(),
    targetSchema: LinkSchemaSchema.and(
      z
        .any()
        .openapi({
          title: 'target_schema',
          description: 'The schema that describes the link target.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('LinkDescription')

const ErrorDetailsSchema = z
  .object({
    field: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    location: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .default('body')
      .exactOptional()
      .openapi({
        description:
          'The location of the field that caused the error. Value is `body`, `path`, or `query`.',
      }),
    issue: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
    links: z
      .array(
        LinkDescriptionSchema.and(z.any().openapi({ title: 'link_description', readOnly: true })),
      )
      .min(1)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links) that are either relevant to the issue by providing additional information or offering potential resolutions.',
        readOnly: true,
      }),
    description: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
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

const ErrorSchema = z
  .object({
    name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The human-readable, unique name of the error.' }),
    message: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The message that describes the error.' }),
    debug_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    details: z
      .array(ErrorDetailsSchema.and(z.any().openapi({ title: 'error_details' })))
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({ description: 'An array of additional details about the error.' }),
    links: z
      .array(
        LinkDescriptionSchema.and(z.any().openapi({ title: 'link_description', readOnly: true })),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'Error',
    description: 'The error details.',
    required: ['debug_id', 'message', 'name'],
  })
  .openapi('Error')

const AuthorizationStatusDetailsSchema = z
  .object({
    reason: z
      .enum(['PENDING_REVIEW', 'DECLINED_BY_RISK_FRAUD_FILTERS'])
      .exactOptional()
      .openapi({
        title: 'Authorization Incomplete Reason',
        description: 'The reason why the authorized status is `PENDING`.',
      }),
  })
  .openapi({
    title: 'authorization_status_details',
    description: 'The details of the authorized payment status.',
    required: [],
  })
  .openapi('AuthorizationStatusDetails')

const AuthorizationStatusSchema = z
  .object({
    status: z
      .enum(['CREATED', 'CAPTURED', 'DENIED', 'PARTIALLY_CAPTURED', 'VOIDED', 'PENDING'])
      .exactOptional()
      .openapi({
        title: 'Authorization Status',
        description: 'The status for the authorized payment.',
        readOnly: true,
      }),
    status_details: AuthorizationStatusDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the authorized order pending status.',
          readOnly: true,
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'authorization_status',
    description: 'The status fields and status details for an authorized payment.',
    required: [],
  })
  .openapi('AuthorizationStatus')

const SellerProtectionSchema = z
  .object({
    status: z
      .enum(['ELIGIBLE', 'PARTIALLY_ELIGIBLE', 'NOT_ELIGIBLE'])
      .exactOptional()
      .openapi({
        title: 'Seller Protection Status',
        description:
          'Indicates whether the transaction is eligible for seller protection. For information, see [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection).',
        readOnly: true,
      }),
    dispute_categories: z
      .array(
        z
          .enum(['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'])
          .openapi({
            title: 'dispute_category',
            description: 'The condition that is covered for the transaction.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        description: 'An array of conditions that are covered for the transaction.',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'seller_protection',
    description:
      'The level of protection offered as defined by [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection).',
    required: [],
  })
  .openapi('SellerProtection')

const LinkSchema_2Schema = z
  .object({
    additionalItems: z
      .object({})
      .exactOptional()
      .openapi({ title: 'additional_items', description: 'Any additional items.' }),
    dependencies: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Dependencies', description: 'Any Dependencies.' }),
    items: z.object({}).exactOptional().openapi({ title: 'Items', description: 'An item.' }),
    definitions: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Definitions', description: 'Definitions.' }),
    patternProperties: z
      .object({})
      .exactOptional()
      .openapi({ title: 'pattern_properties', description: 'The pattern properties.' }),
    properties: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Properties', description: 'Properties.' }),
    allOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'all_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'all_of',
        description: 'An array of sub-schemas. The data must validate against all sub-schemas.',
      }),
    anyOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'any_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'any_of',
        description:
          'An array of sub-schemas. The data must validate against one or more sub-schemas.',
      }),
    oneOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'one_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'one_of',
        description: 'An array of sub-schemas. The data must validate against one sub-schema.',
      }),
    not: z.object({}).exactOptional().openapi({ title: 'Not', description: 'Not.' }),
    links: z
      .array(z.object({}).openapi({ title: 'link', description: 'A link.', readOnly: true }))
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({ description: 'An array of links.', readOnly: true }),
    fragmentResolution: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'fragment_resolution', description: 'The fragment resolution.' }),
    media: z
      .object({
        type: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({
            description:
              'The media type. See [Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types](https://tools.ietf.org/html/rfc2046).',
          }),
        binaryEncoding: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({
            title: 'binary_encoding',
            description:
              'The content-encoding scheme. See [Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet Message Bodies](https://tools.ietf.org/html/rfc2045).',
          }),
      })
      .exactOptional()
      .openapi({
        title: 'Media',
        description: 'The media type and context-encoding scheme.',
        required: [],
      }),
    pathStart: z
      .url()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        title: 'path_start',
        description: "To apply this schema to the instances' URIs, start the URIs with this value.",
      }),
  })
  .openapi({ title: 'Link Schema', description: 'The request data or link target.', required: [] })
  .openapi('LinkSchema_2')

const LinkDescription_2Schema = z
  .object({
    href: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'CONNECT', 'OPTIONS', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
    title: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'The link title.' }),
    mediaType: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        title: 'media_type',
        description:
          'The media type, as defined by [RFC 2046](https://www.ietf.org/rfc/rfc2046.txt). Describes the link target.',
      }),
    encType: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .default('application/json')
      .exactOptional()
      .openapi({
        title: 'enc_type',
        description: 'The media type in which to submit the request data.',
      }),
    schema: LinkSchema_2Schema.and(
      z.any().openapi({ description: 'The schema that describes the request data.' }),
    ).exactOptional(),
    targetSchema: LinkSchema_2Schema.and(
      z
        .any()
        .openapi({
          title: 'target_schema',
          description: 'The schema that describes the link target.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('LinkDescription_2')

const ActivityTimestampsSchema = z
  .object({
    create_time: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the transaction occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
          readOnly: true,
        }),
    ).exactOptional(),
    update_time: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the transaction was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
          readOnly: true,
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'activity_timestamps',
    description:
      'The date and time stamps that are common to authorized payment, captured payment, and refund transactions.',
    required: [],
  })
  .openapi('ActivityTimestamps')

const AuthorizationSchema = AuthorizationStatusSchema.and(
  z
    .object({
      id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description: 'The PayPal-generated ID for the authorized payment.',
          readOnly: true,
        }),
      amount: AmountWithBreakdownSchema.and(
        z.any().openapi({ description: 'The amount for this authorized payment.', readOnly: true }),
      ).exactOptional(),
      invoice_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description:
            "The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.",
          readOnly: true,
        }),
      custom_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.',
        }),
      network_transaction_reference: NetworkTransactionSchema.exactOptional(),
      seller_protection: SellerProtectionSchema.and(
        z.any().openapi({ readOnly: true }),
      ).exactOptional(),
      expiration_time: DateTimeSchema.and(
        z
          .any()
          .openapi({
            description:
              'The date and time when the authorized payment expires, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
            readOnly: true,
          }),
      ).exactOptional(),
      links: z
        .array(LinkDescription_2Schema.and(z.any().openapi({ title: 'link_description' })))
        .min(0)
        .max(32767)
        .exactOptional()
        .openapi({
          description:
            'An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
)
  .and(ActivityTimestampsSchema)
  .openapi({ title: 'authorization', description: 'The authorized payment transaction.' })
  .openapi('Authorization')

const RelatedIdsSchema = z
  .object({
    order_id: z
      .string()
      .regex(/^[A-Z0-9]+$/)
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({ description: 'Order ID related to the resource.' }),
    authorization_id: z
      .string()
      .regex(/^[A-Z0-9]+$/)
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({ description: 'Authorization ID related to the resource.' }),
    capture_id: z
      .string()
      .regex(/^[A-Z0-9]+$/)
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({ description: 'Capture ID related to the resource.' }),
  })
  .openapi({
    title: 'Related Identifiers',
    description: 'Identifiers related to a specific resource.',
    required: [],
  })
  .openapi('RelatedIds')

const SupplementaryDataSchema = z
  .object({
    related_ids: RelatedIdsSchema.and(z.any().openapi({ readOnly: true })).exactOptional(),
  })
  .openapi({
    title: 'Payment Supplementary Data',
    description: 'The supplementary data.',
    required: [],
  })
  .openapi('SupplementaryData')

const Authorization_2Schema = AuthorizationSchema.and(
  z
    .object({
      supplementary_data: SupplementaryDataSchema.and(
        z.any().openapi({ readOnly: true }),
      ).exactOptional(),
      payee: PayeeBaseSchema.and(z.any().openapi({ readOnly: true })).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Authorization', description: 'The authorized payment transaction.' })
  .openapi('Authorization_2')

const SupplementaryPurchaseDataSchema = z
  .object({
    invoice_id: z
      .string()
      .regex(/^.{1,127}$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          "The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.",
      }),
    note_to_payer: z
      .string()
      .regex(/^.{1,255}$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          "An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.",
      }),
  })
  .openapi({
    title: 'Capture Identifier',
    description:
      'The capture identification-related fields. Includes the invoice ID, custom ID, note to payer, and soft descriptor.',
    required: [],
  })
  .openapi('SupplementaryPurchaseData')

const PlatformFeeSchema = z
  .object({
    amount: MoneySchema.and(
      z.any().openapi({ title: 'amount', description: 'The fee for this transaction.' }),
    ),
    payee: PayeeBaseSchema.and(
      z
        .any()
        .openapi({ title: 'payee', description: 'The recipient of the fee for this transaction.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'platform_fee',
    description:
      'The platform or partner fee, commission, or brokerage fee that is associated with the transaction. Not a separate or isolated transaction leg from the external perspective. The platform fee is limited in scope and is always associated with the original payment for the purchase unit.',
    required: ['amount'],
  })
  .openapi('PlatformFee')

const DisbursementModeSchema = z
  .enum(['INSTANT', 'DELAYED'])
  .default('INSTANT')
  .openapi({
    title: 'disbursement_mode',
    description: 'The funds that are held on behalf of the merchant.',
  })
  .openapi('DisbursementMode')

const PaymentInstructionSchema = z
  .object({
    platform_fees: z
      .array(PlatformFeeSchema.and(z.any().openapi({ title: 'platform_fee' })))
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'An array of various fees, commissions, tips, or donations. This field is only applicable to merchants that been enabled for PayPal Complete Payments Platform for Marketplaces and Platforms capability.',
      }),
    disbursement_mode: DisbursementModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The funds that are held payee by the marketplace/platform. This field is only applicable to merchants that been enabled for PayPal Complete Payments Platform for Marketplaces and Platforms capability.',
        }),
    ).exactOptional(),
    payee_pricing_tier_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({
        description:
          "This field is only enabled for selected merchants/partners to use and provides the ability to trigger a specific pricing rate/plan for a payment transaction. The list of eligible 'payee_pricing_tier_id' would be provided to you by your Account Manager. Specifying values other than the one provided to you by your account manager would result in an error.",
      }),
    payee_receivable_fx_rate_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'FX identifier generated returned by PayPal to be used for payment processing in order to honor FX rate (for eligible integrations) to be used when amount is settled/received into the payee account.',
      }),
  })
  .openapi({
    title: 'payment_instruction',
    description:
      'Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order.',
    required: [],
  })
  .openapi('PaymentInstruction')

const CaptureRequestSchema = SupplementaryPurchaseDataSchema.and(
  z
    .object({
      amount: MoneySchema.and(
        z
          .any()
          .openapi({
            description:
              'The amount to capture. To capture a portion of the full authorized amount, specify an amount. If amount is not specified, the full authorized amount is captured. The amount must be a positive number and in the same currency as the authorization against which the payment is being captured.',
          }),
      ).exactOptional(),
      invoice_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(127)
        .exactOptional()
        .openapi({
          description:
            "The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.",
        }),
      final_capture: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            'Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.',
        }),
      payment_instruction: PaymentInstructionSchema.and(
        z.any().refine(
          (val) =>
            !z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'payee_pricing_tier_id')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['payee_pricing_tier_id'] })
              .safeParse(val).success,
        ),
      ).exactOptional(),
      note_to_payer: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(255)
        .exactOptional()
        .openapi({
          description:
            "An informational note about this settlement. Appears in both the payer's transaction history and the emails that the payer receives.",
        }),
      soft_descriptor: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(22)
        .exactOptional()
        .openapi({ description: "The payment descriptor on the payer's account statement." }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'Capture Request',
    description:
      'Captures either a portion or the full authorized amount of an authorized payment.',
  })
  .openapi('CaptureRequest')

const CaptureStatusDetailsSchema = z
  .object({
    reason: z
      .enum([
        'BUYER_COMPLAINT',
        'CHARGEBACK',
        'ECHECK',
        'INTERNATIONAL_WITHDRAWAL',
        'OTHER',
        'PENDING_REVIEW',
        'RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION',
        'REFUNDED',
        'TRANSACTION_APPROVED_AWAITING_FUNDING',
        'UNILATERAL',
        'VERIFICATION_REQUIRED',
        'DECLINED_BY_RISK_FRAUD_FILTERS',
      ])
      .exactOptional()
      .openapi({
        title: 'Capture Incomplete Reason',
        description: 'The reason why the captured payment status is `PENDING` or `DENIED`.',
      }),
  })
  .openapi({
    title: 'capture_status_details',
    description: 'The details of the captured payment status.',
    required: [],
  })
  .openapi('CaptureStatusDetails')

const CaptureStatusSchema = z
  .object({
    status: z
      .enum(['COMPLETED', 'DECLINED', 'PARTIALLY_REFUNDED', 'PENDING', 'REFUNDED', 'FAILED'])
      .exactOptional()
      .openapi({
        title: 'Capture Status',
        description: 'The status of the captured payment.',
        readOnly: true,
      }),
    status_details: CaptureStatusDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'The details of the captured payment status.', readOnly: true }),
    ).exactOptional(),
  })
  .openapi({
    title: 'capture_status',
    description: 'The status and status details of a captured payment.',
    required: [],
  })
  .openapi('CaptureStatus')

const ExchangeRateSchema = z
  .object({
    source_currency: CurrencyCodeSchema.and(
      z.any().openapi({ description: 'The source currency from which to convert an amount.' }),
    ).exactOptional(),
    target_currency: CurrencyCodeSchema.and(
      z.any().openapi({ description: 'The target currency to which to convert an amount.' }),
    ).exactOptional(),
    value: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The target currency amount. Equivalent to one unit of the source currency. Formatted as integer or decimal value with one to 15 digits to the right of the decimal point.',
      }),
  })
  .openapi({
    title: 'exchange_rate',
    description:
      'The exchange rate that determines the amount to convert from one currency to another currency.',
    readOnly: true,
    required: [],
  })
  .openapi('ExchangeRate')

const SellerReceivableBreakdownSchema = z
  .object({
    gross_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description: 'The amount for this captured payment in the currency of the transaction.',
        }),
    ),
    paypal_fee: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The applicable fee for this captured payment in the currency of the transaction.',
        }),
    ).exactOptional(),
    paypal_fee_in_receivable_currency: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            "The applicable fee for this captured payment in the receivable currency. Returned only in cases the fee is charged in the receivable currency. Example 'CNY'.",
        }),
    ).exactOptional(),
    net_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The net amount that the payee receives for this captured payment in their PayPal account. The net amount is computed as <code>gross_amount</code> minus the <code>paypal_fee</code> minus the <code>platform_fees</code>.',
        }),
    ).exactOptional(),
    receivable_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            "The net amount that is credited to the payee's PayPal account. Returned only when the currency of the captured payment is different from the currency of the PayPal account where the payee wants to credit the funds. The amount is computed as <code>net_amount</code> times <code>exchange_rate</code>.",
        }),
    ).exactOptional(),
    exchange_rate: ExchangeRateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The exchange rate that determines the amount that is credited to the payee's PayPal account. Returned when the currency of the captured payment is different from the currency of the PayPal account where the payee wants to credit the funds.",
        }),
    ).exactOptional(),
    platform_fees: z
      .array(PlatformFeeSchema.and(z.any().openapi({ title: 'platform_fee' })))
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'An array of platform or partner fees, commissions, or brokerage fees that associated with the captured payment.',
      }),
  })
  .openapi({
    title: 'Seller Receivable Breakdown',
    description:
      'The detailed breakdown of the capture activity. This is not available for transactions that are in pending state.',
    required: ['gross_amount'],
  })
  .openapi('SellerReceivableBreakdown')

const ProcessorResponseSchema = z
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
      }),
    cvv_code: z
      .enum(['E', 'I', 'M', 'N', 'P', 'S', 'U', 'X', 'All others', '0', '1', '2', '3', '4'])
      .exactOptional()
      .openapi({
        description:
          'The card verification value code for for Visa, Discover, Mastercard, or American Express.',
        readOnly: true,
      }),
    response_code: z
      .enum([
        '0000',
        '00N7',
        '0100',
        '0390',
        '0500',
        '0580',
        '0800',
        '0880',
        '0890',
        '0960',
        '0R00',
        '1000',
        '10BR',
        '1300',
        '1310',
        '1312',
        '1317',
        '1320',
        '1330',
        '1335',
        '1340',
        '1350',
        '1352',
        '1360',
        '1370',
        '1380',
        '1382',
        '1384',
        '1390',
        '1393',
        '5100',
        '5110',
        '5120',
        '5130',
        '5135',
        '5140',
        '5150',
        '5160',
        '5170',
        '5180',
        '5190',
        '5200',
        '5210',
        '5400',
        '5500',
        '5650',
        '5700',
        '5710',
        '5800',
        '5900',
        '5910',
        '5920',
        '5930',
        '5950',
        '6300',
        '7600',
        '7700',
        '7710',
        '7800',
        '7900',
        '8000',
        '8010',
        '8020',
        '8030',
        '8100',
        '8110',
        '8220',
        '9100',
        '9500',
        '9510',
        '9520',
        '9530',
        '9540',
        '9600',
        'PCNR',
        'PCVV',
        'PP06',
        'PPRN',
        'PPAD',
        'PPAB',
        'PPAE',
        'PPAG',
        'PPAI',
        'PPAR',
        'PPAU',
        'PPAV',
        'PPAX',
        'PPBG',
        'PPC2',
        'PPCE',
        'PPCO',
        'PPCR',
        'PPCT',
        'PPCU',
        'PPD3',
        'PPDC',
        'PPDI',
        'PPDV',
        'PPDT',
        'PPEF',
        'PPEL',
        'PPER',
        'PPEX',
        'PPFE',
        'PPFI',
        'PPFR',
        'PPFV',
        'PPGR',
        'PPH1',
        'PPIF',
        'PPII',
        'PPIM',
        'PPIT',
        'PPLR',
        'PPLS',
        'PPMB',
        'PPMC',
        'PPMD',
        'PPNC',
        'PPNL',
        'PPNM',
        'PPNT',
        'PPPH',
        'PPPI',
        'PPPM',
        'PPQC',
        'PPRE',
        'PPRF',
        'PPRR',
        'PPS0',
        'PPS1',
        'PPS2',
        'PPS3',
        'PPS4',
        'PPS5',
        'PPS6',
        'PPSC',
        'PPSD',
        'PPSE',
        'PPTE',
        'PPTF',
        'PPTI',
        'PPTR',
        'PPTT',
        'PPTV',
        'PPUA',
        'PPUC',
        'PPUE',
        'PPUI',
        'PPUP',
        'PPUR',
        'PPVC',
        'PPVE',
        'PPVT',
      ])
      .exactOptional()
      .openapi({
        description: 'Processor response code for the non-PayPal payment processor errors.',
        readOnly: true,
      }),
    payment_advice_code: z
      .enum([
        '01',
        '02',
        '03',
        '04',
        '21',
        '22',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '40',
        '43',
      ])
      .exactOptional()
      .openapi({
        description:
          'The declined payment transactions might have payment advice codes. The card networks, like Visa and Mastercard, return payment advice codes.',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'processor_response',
    description:
      'The processor response information for payment requests, such as direct credit card transactions.',
    required: [],
  })
  .openapi('ProcessorResponse')

const CaptureSchema = CaptureStatusSchema.and(
  z
    .object({
      id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description: 'The PayPal-generated ID for the captured payment.',
          readOnly: true,
        }),
      amount: AmountWithBreakdownSchema.and(
        z.any().openapi({ description: 'The amount for this captured payment.', readOnly: true }),
      ).exactOptional(),
      invoice_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description:
            "The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.",
          readOnly: true,
        }),
      custom_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.',
        }),
      network_transaction_reference: NetworkTransactionSchema.exactOptional(),
      seller_protection: SellerProtectionSchema.and(
        z.any().openapi({ readOnly: true }),
      ).exactOptional(),
      final_capture: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            'Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.',
          readOnly: true,
        }),
      seller_receivable_breakdown: SellerReceivableBreakdownSchema.and(
        z.any().openapi({ readOnly: true }),
      ).exactOptional(),
      disbursement_mode: DisbursementModeSchema.exactOptional(),
      links: z
        .array(LinkDescription_2Schema.and(z.any().openapi({ title: 'link_description' })))
        .min(0)
        .max(32767)
        .exactOptional()
        .openapi({
          description:
            'An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
          readOnly: true,
        }),
      processor_response: ProcessorResponseSchema.and(
        z
          .any()
          .openapi({
            description:
              'An object that provides additional processor information for a direct credit card transaction.',
          }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .and(ActivityTimestampsSchema)
  .openapi({ title: 'capture', description: 'A captured payment.' })
  .openapi('Capture')

const Capture_2Schema = CaptureSchema.and(
  z
    .object({
      supplementary_data: SupplementaryDataSchema.and(
        z
          .any()
          .openapi({
            description:
              'An object that provides supplementary/additional data related to a payment transaction.',
            readOnly: true,
          }),
      ).exactOptional(),
      payee: PayeeBaseSchema.and(z.any().openapi({ readOnly: true })).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Captured Payment', description: 'A captured payment.' })
  .openapi('Capture_2')

const ReauthorizeRequestSchema = z
  .object({
    amount: MoneySchema.and(
      z.any().openapi({ description: 'The amount to reauthorize for an authorized payment.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Reauthorize Request',
    description:
      'Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize a payment after its initial three-day honor period expires. You can reauthorize a payment only once from days four to 29.<br/><br/>If 30 days have transpired since the date of the original authorization, you must create an authorized payment instead of reauthorizing the original authorized payment.<br/><br/>A reauthorized payment itself has a new honor period of three days.<br/><br/>You can reauthorize an authorized payment once. The allowed amount depends on context and geography, for example in US it is up to 115% of the original authorized amount, not to exceed an increase of $75 USD.<br/><br/>Supports only the `amount` request parameter.',
    required: [],
  })
  .openapi('ReauthorizeRequest')

const PaymentInstruction_2Schema = z
  .object({
    platform_fees: z
      .array(
        PlatformFeeSchema.and(
          z
            .any()
            .refine(
              (val) =>
                !z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'payee')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['payee'] })
                  .safeParse(val).success,
            )
            .openapi({ title: 'platform_fee' }),
        ),
      )
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'Specifies the amount that the API caller will contribute to the refund being processed. The amount needs to be lower than platform_fees amount originally captured or the amount that is remaining if multiple refunds have been processed. This field is only applicable to merchants that have been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability. Please speak to your account manager if you want to use this capability.',
      }),
  })
  .openapi({
    title: 'payment_instruction',
    description:
      'Any additional payments instructions during refund payment processing. This object is only applicable to merchants that have been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability. Please speak to your account manager if you want to use this capability.',
    required: [],
  })
  .openapi('PaymentInstruction_2')

const RefundRequestSchema = z
  .object({
    amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount to refund. To refund a portion of the captured amount, specify an amount. If amount is not specified, an amount equal to <code>captured amount - previous refunds</code> is refunded. The amount must be a positive number and in the same currency as the one in which the payment was captured.',
        }),
    ).exactOptional(),
    custom_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. The pattern is defined by an external party and supports Unicode.',
      }),
    invoice_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The API caller-provided external invoice ID for this order. The pattern is defined by an external party and supports Unicode.',
      }),
    note_to_payer: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          "The reason for the refund. Appears in both the payer's transaction history and the emails that the payer receives. The pattern is defined by an external party and supports Unicode.",
      }),
    payment_instruction: PaymentInstruction_2Schema.and(
      z
        .any()
        .openapi({
          description:
            'Any additional refund instructions to be set during refund payment processing. This object is only applicable to merchants that have been enabled for PayPal Commerce Platform for Marketplaces and Platforms capability. Please speak to your account manager if you want to use this capability.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Refund Request',
    description:
      'Refunds a captured payment, by ID. For a full refund, include an empty request body. For a partial refund, include an <code>amount</code> object in the request body.',
    required: [],
  })
  .openapi('RefundRequest')

const RefundStatusDetailsSchema = z
  .object({
    reason: z
      .literal('ECHECK')
      .exactOptional()
      .openapi({
        title: 'Refund Incomplete Reason',
        description: 'The reason why the refund has the `PENDING` or `FAILED` status.',
      }),
  })
  .openapi({
    title: 'refund_status_details',
    description: 'The details of the refund status.',
    required: [],
  })
  .openapi('RefundStatusDetails')

const RefundStatusSchema = z
  .object({
    status: z
      .enum(['CANCELLED', 'FAILED', 'PENDING', 'COMPLETED'])
      .exactOptional()
      .openapi({
        title: 'Refund Status With Details',
        description: 'The status of the refund.',
        readOnly: true,
      }),
    status_details: RefundStatusDetailsSchema.and(
      z.any().openapi({ description: 'The details of the refund status.', readOnly: true }),
    ).exactOptional(),
  })
  .openapi({ title: 'refund_status', description: 'The refund status with details.', required: [] })
  .openapi('RefundStatus')

const NetAmountBreakdownItemSchema = z
  .object({
    payable_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description: "The net amount debited from the merchant's PayPal account.",
          readOnly: true,
        }),
    ).exactOptional(),
    converted_amount: MoneySchema.and(
      z.any().openapi({ description: 'The converted payable amount.', readOnly: true }),
    ).exactOptional(),
    exchange_rate: ExchangeRateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The exchange rate that determines the amount that was debited from the merchant's PayPal account.",
          readOnly: true,
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'net_amount_breakdown',
    description:
      'The net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the merchant holds their funds.',
    required: [],
  })
  .openapi('NetAmountBreakdownItem')

const RefundSchema = RefundStatusSchema.and(
  z
    .object({
      id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({ description: 'The PayPal-generated ID for the refund.', readOnly: true }),
      amount: MoneySchema.and(
        z
          .any()
          .openapi({
            description: 'The amount that the payee refunded to the payer.',
            readOnly: true,
          }),
      ).exactOptional(),
      invoice_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description:
            "The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.",
          readOnly: true,
        }),
      custom_id: z
        .string()
        .regex(/^[A-Za-z0-9-_.,]*$/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.',
        }),
      acquirer_reference_number: z
        .string()
        .regex(/^[a-zA-Z0-9]+$/)
        .min(1)
        .max(36)
        .exactOptional()
        .openapi({
          description:
            'Reference ID issued for the card transaction. This ID can be used to track the transaction across processors, card brands and issuing banks.',
        }),
      note_to_payer: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description:
            "The reason for the refund. Appears in both the payer's transaction history and the emails that the payer receives.",
          readOnly: true,
        }),
      seller_payable_breakdown: z
        .object({
          gross_amount: MoneySchema.and(
            z
              .any()
              .openapi({
                description: 'The amount that the payee refunded to the payer.',
                readOnly: true,
              }),
          ).exactOptional(),
          paypal_fee: MoneySchema.and(
            z
              .any()
              .openapi({
                description:
                  'The PayPal fee that was refunded to the payer in the currency of the transaction. This fee might not match the PayPal fee that the payee paid when the payment was captured.',
                readOnly: true,
              }),
          ).exactOptional(),
          paypal_fee_in_receivable_currency: MoneySchema.and(
            z
              .any()
              .openapi({
                description:
                  "The PayPal fee that was refunded to the payer in the receivable currency. Returned only in cases when the receivable currency is different from transaction currency. Example 'CNY'.",
                readOnly: true,
              }),
          ).exactOptional(),
          net_amount: MoneySchema.and(
            z
              .any()
              .openapi({
                description:
                  "The net amount that the payee's account is debited in the transaction currency. The net amount is calculated as <code>gross_amount</code> minus <code>paypal_fee</code> minus <code>platform_fees</code>.",
                readOnly: true,
              }),
          ).exactOptional(),
          net_amount_in_receivable_currency: MoneySchema.and(
            z
              .any()
              .openapi({
                description:
                  "The net amount that the payee's account is debited in the receivable currency. Returned only in cases when the receivable currency is different from transaction currency. Example 'CNY'.",
                readOnly: true,
              }),
          ).exactOptional(),
          platform_fees: z
            .array(PlatformFeeSchema.and(z.any().openapi({ title: 'platform_fee' })))
            .min(0)
            .max(1)
            .exactOptional()
            .openapi({
              description:
                'An array of platform or partner fees, commissions, or brokerage fees for the refund.',
            }),
          net_amount_breakdown: z
            .array(
              NetAmountBreakdownItemSchema.and(
                z.any().openapi({ title: 'net_amount_breakdown_item' }),
              ),
            )
            .min(0)
            .max(32767)
            .exactOptional()
            .openapi({
              description:
                'An array of breakdown values for the net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the payee holds their funds.',
              readOnly: true,
            }),
          total_refunded_amount: MoneySchema.and(
            z
              .any()
              .openapi({
                description:
                  'The total amount refunded from the original capture to date. For example, if a payer makes a $100 purchase and was refunded $20 a week ago and was refunded $30 in this refund, the `gross_amount` is $30 for this refund and the `total_refunded_amount` is $50.',
              }),
          ).exactOptional(),
        })
        .exactOptional()
        .openapi({
          title: 'Seller Payable Breakdown',
          description: 'The breakdown of the refund.',
          readOnly: true,
          required: [],
        }),
      payer: PayeeBaseSchema.and(
        z
          .any()
          .openapi({
            description: 'The details associated with the merchant for this transaction.',
            readOnly: true,
          }),
      ).exactOptional(),
      links: z
        .array(LinkDescription_2Schema.and(z.any().openapi({ title: 'link_description' })))
        .min(0)
        .max(32767)
        .exactOptional()
        .openapi({
          description:
            'An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
          readOnly: true,
        }),
    })
    .openapi({
      title: 'Refund Properties',
      description:
        'The detailed properties of the refund transaction, including identifiers, amounts, breakdowns, and associated metadata.',
      required: [],
    }),
)
  .and(ActivityTimestampsSchema)
  .openapi({ title: 'refund', description: 'The refund information.' })
  .openapi('Refund')

const GuidSchema = z
  .string()
  .regex(/^[A-Za-z0-9-{}(),]*$/)
  .min(1)
  .max(68)
  .openapi({ title: 'GUID', description: 'A Globally Unique Identifier (GUID) value.' })
  .openapi('Guid')

const FindEligibleMethodsRequestCustomerChannelSchema = z
  .object({
    browser_type: z
      .string()
      .regex(/^[0-9a-zA-Z_,. -]+$/)
      .min(1)
      .max(30)
      .exactOptional()
      .openapi({ description: 'The browser used by the customer. Example: Safari, Chrome, etc.' }),
    client_os: z
      .string()
      .regex(/^[0-9a-zA-Z_,. -]+$/)
      .min(1)
      .max(30)
      .exactOptional()
      .openapi({
        description:
          'The operating system on the device used by the customer. Example: iOS 16.5, Android 30, etc.',
      }),
    device_type: z
      .string()
      .regex(/^[0-9a-zA-Z_,. -]+$/)
      .min(1)
      .max(30)
      .exactOptional()
      .openapi({
        description:
          'The type of device used by the customer. Example: Mobile, Desktop, Tablet, etc.',
      }),
  })
  .openapi({
    title: 'Customer Channel',
    description: 'Channel through which the request is being posted.',
    required: [],
  })
  .openapi('FindEligibleMethodsRequestCustomerChannel')

const FindEligibleMethodsRequestCustomerSchema = z
  .object({
    country_code: CountryCode_2Schema.and(
      z
        .any()
        .openapi({
          description:
            'Country from which the customer is purchasing products/services from the merchant/partner. Result will factor in local payment methods that are available in the country mentioned. Value should be in the 2-character ISO 3166-1 code format.',
        }),
    ).exactOptional(),
    channel: FindEligibleMethodsRequestCustomerChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'Channel through which the request is being posted. This object intends to collect information such as browser, operating system, device of the buyer. If both channel and User-Agent header are passed, data passed in the channel object takes precedence and User-Agent header will be used for information not provided in channel object.',
        }),
    ).exactOptional(),
    id: z
      .string()
      .regex(/^[0-9a-zA-Z_-]+$/)
      .min(1)
      .max(36)
      .exactOptional()
      .openapi({
        description: "The unique ID for a customer in merchant's or partner's system of records.",
      }),
    email: EmailAddressSchema.exactOptional(),
    phone: Phone_2Schema.and(
      z.any().refine(
        (val) =>
          !z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'extension_number')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['extension_number'] })
            .safeParse(val).success,
      ),
    ).exactOptional(),
  })
  .openapi({
    title: 'Customer',
    description: 'Customer who is making a purchase from the merchant/partner.',
    required: [],
  })
  .openapi('FindEligibleMethodsRequestCustomer')

const EligibilityPurchaseUnitRequestSchema = z
  .object({ amount: AmountWithBreakdownSchema.exactOptional(), payee: PayeeSchema.exactOptional() })
  .openapi({
    title: 'eligibility_purchase_unit_request',
    description: 'Purchase unit for payment eligibility.',
    required: [],
  })
  .openapi('EligibilityPurchaseUnitRequest')

const PaymentMethodSchema = z
  .enum(['PAYPAL', 'VENMO', 'PAYPAL_CREDIT', 'PAYPAL_PAY_LATER'])
  .openapi({ title: 'payment_method', description: 'Set of unique payment methods.' })
  .openapi('PaymentMethod')

const FindEligibleMethodsRequestPreferencesSchema = z
  .object({
    payment_flow: z
      .enum([
        'ONE_TIME_PAYMENT',
        'RECURRING_PAYMENT',
        'VAULT_WITH_PAYMENT',
        'VAULT_WITHOUT_PAYMENT',
      ])
      .exactOptional()
      .openapi({
        title: 'Payment Flow',
        description:
          'This field specifies the payment flow, expected to provide a hint about which payment action the customer is intending to perform.',
      }),
    include_account_details: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If this value is set to true, response will include confirmation if the customer has PayPal and/or Venmo accounts if they are eligible payment methods. Value defaults to false.',
      }),
    include_vault_tokens: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If this value is set to true, response will include vaulted token information if the eligible funding source has any instrument vaulted for the customer. Value defaults to false.',
      }),
    payment_source_constraint: z
      .object({
        constraint_type: z
          .enum(['INCLUDE', 'EXCLUDE'])
          .openapi({
            description:
              'Constraint type defines whether given payment sources needs to be included or excluded.',
          }),
        payment_sources: z
          .array(PaymentMethodSchema)
          .min(1)
          .max(75)
          .openapi({
            description:
              'Set of unique payment methods that will be included/excluded for eligibility assessment.',
          }),
      })
      .exactOptional()
      .openapi({
        title: 'Payment Source Constraint',
        description:
          'Payment source constraint defines the payment methods that needs to be included/excluded for eligibility assessment. If not passed, all payment methods will be assessed for eligibility.',
        required: ['constraint_type', 'payment_sources'],
      }),
  })
  .openapi({
    title: 'Preferences',
    description: 'Preferences of merchant/partner consuming the API.',
    required: [],
  })
  .openapi('FindEligibleMethodsRequestPreferences')

const FindEligibleMethodsRequestSchema = z
  .object({
    customer: FindEligibleMethodsRequestCustomerSchema.exactOptional(),
    purchase_units: z
      .array(EligibilityPurchaseUnitRequestSchema)
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({ description: 'Array of purchase units.' }),
    preferences: FindEligibleMethodsRequestPreferencesSchema.exactOptional(),
  })
  .openapi({
    title: 'Find Eligible Payment Methods Request',
    description: 'Request to get list of eligible payment methods.',
    required: [],
  })
  .openapi('FindEligibleMethodsRequest')

const CreditProductButtonCodeSchema = z
  .enum(['CREDIT', 'PAYLATER', 'PAY_IN_3', 'PAY_IN_4'])
  .openapi({
    title: 'Credit Button Eligibility Button Code',
    description:
      'The button code corresponding to a particular product or set of products. The values followed are defined by the SDK team.',
  })
  .openapi('CreditProductButtonCode')

const PaymentMethodCommonSchema = z
  .object({
    can_be_vaulted: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates if the payment method can be vaulted or not. A true value indicates the payment method can be vaulted using our vaults product. If false, vaulting is not currently supported for this payment method.',
      }),
    country_code: CountryCode_2Schema.and(
      z
        .any()
        .openapi({
          description: "Returns a country_code which is derived from the buyer's country.",
        }),
    ).exactOptional(),
    product_code: CreditProductButtonCodeSchema.and(
      z.any().openapi({ description: 'Returns a product code.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Common response fields',
    description: 'Common response fields for all payment methods.',
    required: [],
  })
  .openapi('PaymentMethodCommon')

const PaymentMethodEligibleInPaypalNetworkSchema = z
  .boolean()
  .openapi({
    title: 'PayPal services member indicator',
    description:
      'Flag that indicates if the customer is in the PayPal network. This value will be included in the response if the include_account_details flag is set to "true" in the API request.',
  })
  .openapi('PaymentMethodEligibleInPaypalNetwork')

const PaypalSchema = PaymentMethodCommonSchema.and(
  z
    .object({
      eligible_in_paypal_network: PaymentMethodEligibleInPaypalNetworkSchema.exactOptional(),
      recommended: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            'Indicates if the payment method is recommended or not. A true value indicates the customer is payment ready and this payment method may be presented upfront.',
        }),
      recommended_priority: z
        .int()
        .min(1)
        .max(3)
        .exactOptional()
        .openapi({
          description:
            'This value is included in the response when recommended is true for a payment method. It indicates the priority of recommendation for payment readiness of eligible payment methods with lowest number taking the highest precedence.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Response for PayPal', description: 'Response for PayPal.' })
  .openapi('Paypal')

const VenmoSchema = PaymentMethodCommonSchema.and(
  z
    .object({
      eligible_in_paypal_network: PaymentMethodEligibleInPaypalNetworkSchema.exactOptional(),
      recommended: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            'Indicates if the payment method is recommended or not. A true value indicates the customer is payment ready and this payment method may be presented upfront.',
        }),
      recommended_priority: z
        .int()
        .min(1)
        .max(3)
        .exactOptional()
        .openapi({
          description:
            'This value is included in the response when recommended is true for a payment method. It indicates the priority of recommendation for payment readiness of eligible payment methods with lowest number taking the highest precedence.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Response for Venmo', description: 'Response for Venmo.' })
  .openapi('Venmo')

const PaymentMethodsSchema = z
  .object({
    paypal: PaypalSchema.and(
      z.any().openapi({ description: 'PayPal payment method.' }),
    ).exactOptional(),
    venmo: VenmoSchema.and(
      z.any().openapi({ description: 'Venmo payment method.' }),
    ).exactOptional(),
    paypal_credit: PaymentMethodCommonSchema.and(
      z.any().openapi({ description: 'PayPal Credit payment method.' }),
    ).exactOptional(),
    paypal_pay_later: PaymentMethodCommonSchema.and(
      z.any().openapi({ description: 'PayPal Pay Later payment method.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'Payment Methods', description: 'List of payment methods.', required: [] })
  .openapi('PaymentMethods')

const PayerBaseSchema = z
  .object({
    email_address: EmailSchema.and(
      z.any().openapi({ description: 'The email address of the payer.' }),
    ).exactOptional(),
    payer_id: AccountId_2Schema.and(
      z.any().openapi({ description: 'The PayPal-assigned ID for the payer.', readOnly: true }),
    ).exactOptional(),
  })
  .openapi({
    title: 'payer_base',
    description:
      'The customer who approves and pays for the order. The customer is also known as the payer.',
    required: [],
  })
  .openapi('PayerBase')

const VenmoPaymentTokenInfoSchema = z
  .object({
    user_name: z
      .string()
      .regex(/^[-a-zA-Z0-9_]*$/)
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: 'The Venmo username, as chosen by the user.' }),
  })
  .openapi({
    title: 'venmo_payment_token',
    description: 'Payment Token info for Venmo payment source.',
    required: [],
  })
  .openapi('VenmoPaymentTokenInfo')

const PaymentTokenSchema = z
  .object({
    id: z
      .string()
      .regex(/^[0-9a-zA-Z_-]+$/)
      .min(7)
      .max(36)
      .exactOptional()
      .openapi({ title: 'id', description: 'The PayPal-generated ID for the vault token.' }),
    payment_source: z
      .object({
        paypal: PayerBaseSchema.and(
          z.any().refine(
            (val) =>
              !z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'payer_id')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['payer_id'] })
                .safeParse(val).success,
          ),
        ).exactOptional(),
        venmo: VenmoPaymentTokenInfoSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        title: 'The vaulted payment method details',
        description: 'The vaulted payment method details.',
        required: [],
      }),
    links: z
      .array(LinkDescriptionSchema)
      .min(1)
      .max(32)
      .exactOptional()
      .openapi({
        description: 'An array of related [HATEOAS links](/api/rest/responses/#hateoas).',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'payment_token',
    description: 'Vaulted instrument for a payment-method.',
    required: [],
  })
  .openapi('PaymentToken')

const FindEligibleMethodsResponseSchema = z
  .object({
    eligible_methods: PaymentMethodsSchema.and(
      z.any().openapi({ description: 'List of payment methods that are eligible.' }),
    ).exactOptional(),
    payment_tokens: z
      .array(PaymentTokenSchema.and(z.any().openapi({ description: 'Payment Token.' })))
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'Payment tokens for vaulted instruments, if available. This object will be included only if include_vault_tokens is set to true in the request.',
      }),
  })
  .openapi({
    title: 'paypal_response',
    description: 'Eligible payment methods along with applicable vault tokens, if requested.',
    required: [],
  })
  .openapi('FindEligibleMethodsResponse')

const DefaultResponseResponse = {
  description: 'Default response.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic: {
          summary: 'Default response.',
          description: 'Example catch all response, should not be encountered in practice.',
          value: {
            name: 'INTERNAL_SERVER_ERROR',
            debug_id: 'b1d1f06c7246c',
            message: 'An internal server error has occurred.',
          },
        },
      },
    },
  },
}

const _401ErrorResponseResponse = {
  description: 'Unauthorized.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic: {
          summary: "Generic 'Unauthorized' error.",
          description: 'Example response for unauthorized request.',
          value: {
            name: 'AUTHENTICATION_FAILURE',
            debug_id: 'b1d1f06c7246c',
            message:
              'Authentication failed due to missing Authorization header, or invalid authentication credentials.',
          },
        },
      },
    },
  },
}

const _403ErrorResponseResponse = {
  description: 'Forbidden.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic: {
          summary: "Generic 'Forbidden' error.",
          description: 'Example response for a forbidden request.',
          value: {
            name: 'NOT_AUTHORIZED',
            debug_id: 'b1d1f06c7246c',
            message: 'Authorization failed due to insufficient permissions.',
          },
        },
      },
    },
  },
}

const _404ErrorResponseResponse = {
  description: 'Not Found.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic: {
          summary: "Generic 'Not Found' error.",
          description: 'Example response for a request to a resource that does not exist.',
          value: {
            name: 'RESOURCE_NOT_FOUND',
            debug_id: 'b1d1f06c7246c',
            message: 'The specified resource does not exist.',
          },
        },
      },
    },
  },
}

const _500ErrorResponseResponse = {
  description: 'Internal Server Error.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic: {
          summary: 'Generic internal server error.',
          description:
            'Example response for a request that fails for reasons internal to the server.',
          value: {
            name: 'INTERNAL_SERVER_ERROR',
            debug_id: 'b1d1f06c7246c',
            message: 'An internal server error has occurred.',
          },
        },
      },
    },
  },
}

const _204ResponseResponse = { description: 'No Content.' }

const PaypalRequestIdParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(1)
  .max(10000)
  .exactOptional()
  .openapi({
    param: {
      name: 'PayPal-Request-Id',
      in: 'header',
      description: 'A unique ID identifying the request header for idempotency purposes.',
      required: false,
      schema: {
        description: 'A unique ID identifying the request header for idempotency purposes.',
        type: 'string',
        minLength: 1,
        maxLength: 10000,
        pattern: '^.*$',
      },
      examples: {
        request_id: {
          summary: 'A request id.',
          description: 'A paypal-request-id header with a randomized value.',
          value: '17e81d06-77ab-11e8-adc0-fa71639ebebc',
        },
      },
    },
    description: 'A unique ID identifying the request header for idempotency purposes.',
  })

const AuthorizationParamsSchema = StandardHeaderSchemaSchema.openapi({
  param: {
    name: 'Authorization',
    in: 'header',
    description: 'Holds authorization information for external API calls.',
    required: false,
    schema: { $ref: '#/components/schemas/standard_header_schema' },
    examples: {
      bearer: {
        summary: 'Bearer authorization.',
        description:
          'An authorization header with information for the Bearer authorization scheme. The authorization parameter value is randomized for this example.',
        value:
          'Bearer A21AAGHr9qtiRRXH4oYcQokQgV99rGqEIfgrr8xHCclP0OzmD9KVgg5ppIIg1jzJgQkV4wd02svIvBJyg6cLFJjFow_SjBhxQ',
      },
    },
  },
}).exactOptional()

const PaypalAuthAssertionParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(1)
  .max(10000)
  .exactOptional()
  .openapi({
    param: {
      name: 'PayPal-Auth-Assertion',
      in: 'header',
      description:
        'Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.',
      required: false,
      schema: {
        description:
          'Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.',
        type: 'string',
        minLength: 1,
        maxLength: 10000,
        pattern: '^.*$',
      },
      examples: {
        auth_assertion: {
          summary: 'An auth assertion.',
          description: 'A paypal-auth-assertion header with a randomized value.',
          value: 'eyJhbGciOiJub25lIn0.eyJlbWFpbCI6Im15QGVtYWlsLmNvbSJ9',
        },
      },
    },
    description:
      'Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.',
  })

const UserAgentParamsSchema = StandardHeaderSchemaSchema.openapi({
  param: {
    name: 'User-Agent',
    in: 'header',
    description:
      'A characteristic string that lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent. API calls made by PayPal SDKs SHOULD be identified using this request header.',
    required: false,
    schema: { $ref: '#/components/schemas/standard_header_schema' },
    examples: {
      safari_on_ipad: {
        summary: 'A user-agent for Safari on iPad.',
        description: 'A user-agent header for Safari on iPad.',
        value:
          'Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405',
      },
    },
  },
}).exactOptional()

const PaypalClientMetadataIdParamsSchema = GuidSchema.openapi({
  param: {
    name: 'PayPal-Client-Metadata-Id',
    in: 'header',
    description:
      'A GUID value originating from Fraudnet and Dyson passed from external API clients via HTTP header. The value is used by Risk decisions to correlate calls which, in turn, might result in lower decline rates..',
    required: false,
    schema: { $ref: '#/components/schemas/guid' },
    examples: {
      guid: {
        summary: 'A GUID.',
        description: 'A paypal-client-metadata-id header with a randomized value.',
        value: '1295065d-6f34-42dc-ac65-fac0c86af250',
      },
    },
  },
}).exactOptional()

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'OAuth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: 'https://api-m.paypal.com/v1/oauth2/token',
      scopes: {
        'https://uri.paypal.com/services/payments/payment/authcapture':
          'Permission to do non-real time payments like capture on authorization',
        'https://uri.paypal.com/services/payments/refund':
          'Permission to initiate a refund on a capture transaction',
        'https://uri.paypal.com/services/payments/non-referenced-credit':
          'Permission to initiate non referenced credit',
        'https://uri.paypal.com/services/payments/realtimepayment':
          'Permission to do any real time payment, with support for sale/authorize/order intents',
        'https://uri.paypal.com/services/payments/reversepayment':
          'Permission to do any reverse payment',
        'https://uri.paypal.com/services/payments/payments-ready':
          'Permission to get information about payment readiness.',
        'Braintree:PaymentsReady': 'Permission to call PaymentsReady via BrainTree SDK.',
        'https://uri.paypal.com/services/payments/client-payments-eligibility':
          "Permission to get information about merchant's eligible payment methods.",
      },
    },
  },
}

const AuthorizationCreatedCallback = {
  'authorizations/{$request.path.authorization_id}': {
    post: {
      summary: 'Authorization created notification',
      description: 'Notification sent when the authorization is created.',
      operationId: 'authorizations.created.callback',
      requestBody: {
        content: {
          'application/json': {
            schema: z
              .object({
                id: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(255)
                  .exactOptional()
                  .openapi({ description: 'The ID of the webhook event notification.' }),
                event_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the event.' }),
                create_time: DateTimeSchema.exactOptional().openapi({
                  description: 'The date and time when the webhook event notification was created.',
                }),
                resource_type: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(100)
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the resource related to the webhook notification event.',
                  }),
                resource_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the resource.' }),
                event_type: z
                  .literal('PAYMENT.AUTHORIZATION.CREATED')
                  .exactOptional()
                  .openapi({
                    description: 'The event that triggered the webhook event notification.',
                  }),
                summary: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({ description: 'A summary description for the event notification.' }),
                resource: Authorization_2Schema.exactOptional(),
                links: z
                  .array(LinkDescription_2Schema)
                  .min(1)
                  .max(10)
                  .exactOptional()
                  .openapi({ description: 'An array of request-related HATEOAS links.' }),
              })
              .openapi({
                title: 'Authorization Created Event',
                description: 'Webhook event notification for authorization created.',
                required: [],
              }),
            examples: {
              authorization_created: {
                summary: 'Authorization created event',
                description: 'Webhook notification when the authorization is created.',
                value: {
                  id: 'WH-5VE77420C3914002P-5G649181HP975980P',
                  event_version: '1.0',
                  create_time: '2022-10-27T22:00:21.590Z',
                  resource_type: 'authorization',
                  resource_version: '2.0',
                  event_type: 'PAYMENT.AUTHORIZATION.CREATED',
                  summary: 'A successful payment authorization was created for $ 10.0 USD',
                  resource: {
                    amount: { value: '10.00', currency_code: 'USD' },
                    seller_protection: {
                      dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                      status: 'ELIGIBLE',
                    },
                    supplementary_data: { related_ids: { order_id: '91A92299SF4077927' } },
                    update_time: '2022-10-27T22:00:17Z',
                    create_time: '2022-10-27T22:00:17Z',
                    expiration_time: '2022-11-25T22:00:17Z',
                    links: [
                      {
                        method: 'GET',
                        rel: 'self',
                        href: 'https://api-m.paypal.com/v2/payments/authorizations/91T13242G72341823',
                      },
                      {
                        method: 'POST',
                        rel: 'capture',
                        href: 'https://api-m.paypal.com/v2/payments/authorizations/91T13242G72341823/capture',
                      },
                      {
                        method: 'POST',
                        rel: 'void',
                        href: 'https://api-m.paypal.com/v2/payments/authorizations/91T13242G72341823/void',
                      },
                      {
                        method: 'POST',
                        rel: 'reauthorize',
                        href: 'https://api-m.paypal.com/v2/payments/authorizations/91T13242G72341823/reauthorize',
                      },
                    ],
                    id: '91T13242G72341823',
                    status: 'CREATED',
                  },
                  links: [
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-5VE77420C3914002P-5G649181HP975980P',
                      rel: 'self',
                      method: 'GET',
                    },
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-5VE77420C3914002P-5G649181HP975980P/resend',
                      rel: 'resend',
                      method: 'POST',
                    },
                  ],
                },
              },
            },
          },
        },
        required: true,
      },
      responses: {
        204: {
          description:
            'Your server implementation should return this HTTP status code if the data was received successfully.',
        },
        400: {
          description:
            'Your server should return this HTTP status code if the request is malformed.',
          content: {
            'application/json': {
              schema: ErrorSchema,
              examples: {
                invalid_request: {
                  summary: 'Invalid webhook request.',
                  description: 'Request with malformed data.',
                  value: {
                    name: 'INVALID_REQUEST',
                    debug_id: 'b1d1f06c7246c',
                    message:
                      'Request is not well-formed, syntactically incorrect, or violates schema.',
                    details: [
                      {
                        field: '/event_type',
                        location: 'body',
                        issue: 'INVALID_PARAMETER_SYNTAX',
                        description:
                          'The value of a field does not conform to the expected format.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        500: _500ErrorResponseResponse,
      },
    },
  },
}

const CaptureCompletedCallback = {
  'captures/{$request.path.capture_id}': {
    post: {
      summary: 'Capture completed notification',
      description: 'Notification sent when the capture is completed.',
      operationId: 'captures.completed.callback',
      requestBody: {
        content: {
          'application/json': {
            schema: z
              .object({
                id: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(255)
                  .exactOptional()
                  .openapi({ description: 'The ID of the webhook event notification.' }),
                event_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the event.' }),
                create_time: DateTimeSchema.exactOptional().openapi({
                  description: 'The date and time when the webhook event notification was created.',
                }),
                resource_type: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(100)
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the resource related to the webhook notification event.',
                  }),
                resource_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the resource.' }),
                event_type: z
                  .literal('PAYMENT.CAPTURE.COMPLETED')
                  .exactOptional()
                  .openapi({
                    description: 'The event that triggered the webhook event notification.',
                  }),
                summary: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({ description: 'A summary description for the event notification.' }),
                resource: Capture_2Schema.exactOptional(),
                links: z
                  .array(LinkDescription_2Schema)
                  .min(1)
                  .max(10)
                  .exactOptional()
                  .openapi({ description: 'An array of request-related HATEOAS links.' }),
              })
              .openapi({
                title: 'Capture Completed Event',
                description: 'Webhook event notification for capture completed.',
                required: [],
              }),
            examples: {
              capture_completed: {
                summary: 'Capture completed event',
                description: 'Webhook notification when the capture is completed.',
                value: {
                  id: 'WH-152442318H6474839-1HN0997948621344U',
                  event_version: '1.0',
                  create_time: '2022-10-27T22:32:49.870Z',
                  resource_type: 'capture',
                  resource_version: '2.0',
                  event_type: 'PAYMENT.CAPTURE.COMPLETED',
                  summary: 'Payment completed for $ 10.0 USD',
                  resource: {
                    amount: { value: '10.00', currency_code: 'USD' },
                    seller_protection: {
                      dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                      status: 'ELIGIBLE',
                    },
                    supplementary_data: { related_ids: { order_id: '28U14622MW998902M' } },
                    update_time: '2022-10-27T22:32:45Z',
                    create_time: '2022-10-27T22:32:45Z',
                    final_capture: true,
                    seller_receivable_breakdown: {
                      paypal_fee: { value: '0.84', currency_code: 'USD' },
                      gross_amount: { value: '10.00', currency_code: 'USD' },
                      net_amount: { value: '9.16', currency_code: 'USD' },
                    },
                    links: [
                      {
                        method: 'GET',
                        rel: 'self',
                        href: 'https://api-m.paypal.com/v2/payments/captures/27C890397M291943E',
                      },
                      {
                        method: 'POST',
                        rel: 'refund',
                        href: 'https://api-m.paypal.com/v2/payments/captures/27C890397M291943E/refund',
                      },
                      {
                        method: 'GET',
                        rel: 'up',
                        href: 'https://api-m.paypal.com/v2/checkout/orders/28U14622MW998902M',
                      },
                    ],
                    id: '27C890397M291943E',
                    status: 'COMPLETED',
                  },
                  links: [
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-152442318H6474839-1HN0997948621344U',
                      rel: 'self',
                      method: 'GET',
                    },
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-152442318H6474839-1HN0997948621344U/resend',
                      rel: 'resend',
                      method: 'POST',
                    },
                  ],
                },
              },
            },
          },
        },
        required: true,
      },
      responses: {
        204: {
          description:
            'Your server implementation should return this HTTP status code if the data was received successfully.',
        },
        400: {
          description:
            'Your server should return this HTTP status code if the request is malformed.',
          content: {
            'application/json': {
              schema: ErrorSchema,
              examples: {
                invalid_request: {
                  summary: 'Invalid webhook request.',
                  description: 'Request with malformed data.',
                  value: {
                    name: 'INVALID_REQUEST',
                    debug_id: 'b1d1f06c7246c',
                    message:
                      'Request is not well-formed, syntactically incorrect, or violates schema.',
                    details: [
                      {
                        field: '/event_type',
                        location: 'body',
                        issue: 'INVALID_PARAMETER_SYNTAX',
                        description:
                          'The value of a field does not conform to the expected format.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        500: _500ErrorResponseResponse,
      },
    },
  },
}

const CaptureDeclinedCallback = {
  'captures/{$request.path.capture_id}/declined': {
    post: {
      summary: 'Capture declined notification',
      description: 'Notification sent when capture for authorization is declined.',
      operationId: 'captures.declined.callback',
      requestBody: {
        content: {
          'application/json': {
            schema: z
              .object({
                id: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(255)
                  .exactOptional()
                  .openapi({ description: 'The ID of the webhook event notification.' }),
                event_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the event.' }),
                create_time: DateTimeSchema.exactOptional().openapi({
                  description: 'The date and time when the webhook event notification was created.',
                }),
                resource_type: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(100)
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the resource related to the webhook notification event.',
                  }),
                resource_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the resource.' }),
                event_type: z
                  .literal('PAYMENT.CAPTURE.DECLINED')
                  .exactOptional()
                  .openapi({
                    description: 'The event that triggered the webhook event notification.',
                  }),
                summary: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({ description: 'A summary description for the event notification.' }),
                resource: Capture_2Schema.exactOptional(),
                links: z
                  .array(LinkDescription_2Schema)
                  .min(1)
                  .max(10)
                  .exactOptional()
                  .openapi({ description: 'An array of request-related HATEOAS links.' }),
              })
              .openapi({
                title: 'Capture Declined Event',
                description: 'Webhook event notification for capture declined.',
                required: [],
              }),
            examples: {
              capture_declined: {
                summary: 'Capture declined event',
                description: 'Webhook notification when capture for authorization is declined.',
                value: {
                  id: 'WH-30Y09481LL7353048-6K675100AV972021E',
                  create_time: '2022-09-21T18:41:07.071Z',
                  event_type: 'PAYMENT.CAPTURE.DECLINED',
                  event_version: '1.0',
                  resource_type: 'capture',
                  resource_version: '2.0',
                  summary: 'A payment capture for $ 50.0 USD was declined.',
                  resource: {
                    id: '40222075YX552741V',
                    status: 'DECLINED',
                    amount: { currency_code: 'USD', value: '50.00' },
                    final_capture: false,
                    seller_protection: {
                      status: 'ELIGIBLE',
                      dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                    },
                    disbursement_mode: 'INSTANT',
                    seller_receivable_breakdown: {
                      gross_amount: { currency_code: 'USD', value: '50.00' },
                      paypal_fee: { currency_code: 'USD', value: '2.24' },
                      net_amount: { currency_code: 'USD', value: '47.76' },
                    },
                    invoice_id: '1663785654',
                    supplementary_data: {
                      related_ids: {
                        order_id: '6AY135578D653613P',
                        authorization_id: '3U5721406T774122W',
                      },
                    },
                    create_time: '2022-09-21T18:40:22Z',
                    update_time: '2022-09-21T18:41:03Z',
                    links: [
                      {
                        href: 'https://api-m.paypal.com/v2/payments/captures/40222075YX552741V',
                        rel: 'self',
                        method: 'GET',
                      },
                      {
                        href: 'https://api-m.paypal.com/v2/payments/authorizations/3U5721406T774122W',
                        rel: 'up',
                        method: 'GET',
                      },
                    ],
                  },
                  links: [
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-30Y09481LL7353048-6K675100AV972021E',
                      rel: 'self',
                      method: 'GET',
                    },
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-30Y09481LL7353048-6K675100AV972021E/resend',
                      rel: 'resend',
                      method: 'POST',
                    },
                  ],
                },
              },
            },
          },
        },
        required: true,
      },
      responses: {
        204: {
          description:
            'Your server implementation should return this HTTP status code if the data was received successfully.',
        },
        400: {
          description:
            'Your server should return this HTTP status code if the request is malformed.',
          content: {
            'application/json': {
              schema: ErrorSchema,
              examples: {
                invalid_request: {
                  summary: 'Invalid webhook request.',
                  description: 'Request with malformed data.',
                  value: {
                    name: 'INVALID_REQUEST',
                    debug_id: 'b1d1f06c7246c',
                    message:
                      'Request is not well-formed, syntactically incorrect, or violates schema.',
                    details: [
                      {
                        field: '/event_type',
                        location: 'body',
                        issue: 'INVALID_PARAMETER_SYNTAX',
                        description:
                          'The value of a field does not conform to the expected format.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        500: _500ErrorResponseResponse,
      },
    },
  },
}

const CapturePendingKycIncompleteCallback = {
  'captures/{$request.path.capture_id}/pending': {
    post: {
      summary: 'Capture pending KYC incomplete notification',
      description:
        'Notification sent when capture a sale order for a merchant with incomplete KYC status, and the partner is enabled for Progressive Onboarding.',
      operationId: 'captures.pending.kyc_incomplete.callback',
      requestBody: {
        content: {
          'application/json': {
            schema: z
              .object({
                id: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(255)
                  .exactOptional()
                  .openapi({ description: 'The ID of the webhook event notification.' }),
                event_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the event.' }),
                create_time: DateTimeSchema.exactOptional().openapi({
                  description: 'The date and time when the webhook event notification was created.',
                }),
                resource_type: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(100)
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the resource related to the webhook notification event.',
                  }),
                resource_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the resource.' }),
                event_type: z
                  .literal('PAYMENT.CAPTURE.PENDING')
                  .exactOptional()
                  .openapi({
                    description: 'The event that triggered the webhook event notification.',
                  }),
                summary: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({ description: 'A summary description for the event notification.' }),
                resource: Capture_2Schema.exactOptional(),
                links: z
                  .array(LinkDescription_2Schema)
                  .min(1)
                  .max(10)
                  .exactOptional()
                  .openapi({ description: 'An array of request-related HATEOAS links.' }),
              })
              .openapi({
                title: 'Capture Pending KYC Incomplete Event',
                description:
                  'Webhook event notification for capture pending due to incomplete KYC.',
                required: [],
              }),
            examples: {
              capture_pending_kyc_incomplete: {
                summary: 'Capture pending KYC incomplete event',
                description:
                  'Webhook notification when capture a sale order for a merchant with incomplete KYC status.',
                value: {
                  id: 'WH-36845715LW9646800-7FJ097926K9003132',
                  event_version: '1.0',
                  create_time: '2025-07-08T22:07:56.096Z',
                  resource_type: 'capture',
                  resource_version: '2.0',
                  event_type: 'PAYMENT.CAPTURE.PENDING',
                  summary: 'Payment pending for $ 80.0 USD',
                  resource: {
                    id: '30N459334R4656637',
                    amount: { currency_code: 'USD', value: '80.00' },
                    final_capture: true,
                    seller_protection: { status: 'NOT_ELIGIBLE' },
                    disbursement_mode: 'INSTANT',
                    status: 'PENDING',
                    status_details: { reason: 'KYC_HOLD' },
                    processor_response: { avs_code: 'A', cvv_code: 'S', response_code: '0000' },
                    supplementary_data: { related_ids: { order_id: '9XF68199B43440616' } },
                    payee: { merchant_id: '972Y8QJUSCK3W' },
                    create_time: '2025-07-08T22:07:50Z',
                    update_time: '2025-07-08T22:07:50Z',
                    links: [
                      {
                        href: 'https://msmaster1intdev52.dev52.cbf.dev.paypalinc.com:25137/v2/payments/captures/30N459334R4656637',
                        rel: 'self',
                        method: 'GET',
                      },
                      {
                        href: 'https://msmaster1intdev52.dev52.cbf.dev.paypalinc.com:25137/v2/payments/captures/30N459334R4656637/refund',
                        rel: 'refund',
                        method: 'POST',
                      },
                      {
                        href: 'https://msmaster1intdev52.dev52.cbf.dev.paypalinc.com:25137/v2/checkout/orders/9XF68199B43440616',
                        rel: 'up',
                        method: 'GET',
                      },
                    ],
                    network_transaction_reference: { id: '752835256460198', network: 'VISA' },
                  },
                  links: [
                    {
                      href: 'https://msmaster1intdev52.dev52.cbf.dev.paypalinc.com:14084/v1/notifications/webhooks-events/WH-36845715LW9646800-7FJ097926K9003132',
                      rel: 'self',
                      method: 'GET',
                    },
                    {
                      href: 'https://msmaster1intdev52.dev52.cbf.dev.paypalinc.com:14084/v1/notifications/webhooks-events/WH-36845715LW9646800-7FJ097926K9003132/resend',
                      rel: 'resend',
                      method: 'POST',
                    },
                  ],
                },
              },
            },
          },
        },
        required: true,
      },
      responses: {
        204: {
          description:
            'Your server implementation should return this HTTP status code if the data was received successfully.',
        },
        400: {
          description:
            'Your server should return this HTTP status code if the request is malformed.',
          content: {
            'application/json': {
              schema: ErrorSchema,
              examples: {
                invalid_request: {
                  summary: 'Invalid webhook request.',
                  description: 'Request with malformed data.',
                  value: {
                    name: 'INVALID_REQUEST',
                    debug_id: 'b1d1f06c7246c',
                    message:
                      'Request is not well-formed, syntactically incorrect, or violates schema.',
                    details: [
                      {
                        field: '/event_type',
                        location: 'body',
                        issue: 'INVALID_PARAMETER_SYNTAX',
                        description:
                          'The value of a field does not conform to the expected format.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        500: _500ErrorResponseResponse,
      },
    },
  },
}

const AuthorizationVoidedCallback = {
  'authorizations/{$request.path.authorization_id}/void': {
    post: {
      summary: 'Authorization voided notification',
      description: 'Notification sent when the authorization is voided.',
      operationId: 'authorizations.voided.callback',
      requestBody: {
        content: {
          'application/json': {
            schema: z
              .object({
                id: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(255)
                  .exactOptional()
                  .openapi({ description: 'The ID of the webhook event notification.' }),
                event_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the event.' }),
                create_time: DateTimeSchema.exactOptional().openapi({
                  description: 'The date and time when the webhook event notification was created.',
                }),
                resource_type: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(100)
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the resource related to the webhook notification event.',
                  }),
                resource_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the resource.' }),
                event_type: z
                  .literal('PAYMENT.AUTHORIZATION.VOIDED')
                  .exactOptional()
                  .openapi({
                    description: 'The event that triggered the webhook event notification.',
                  }),
                summary: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({ description: 'A summary description for the event notification.' }),
                resource: Authorization_2Schema.exactOptional(),
                links: z
                  .array(LinkDescription_2Schema)
                  .min(1)
                  .max(10)
                  .exactOptional()
                  .openapi({ description: 'An array of request-related HATEOAS links.' }),
              })
              .openapi({
                title: 'Authorization Voided Event',
                description: 'Webhook event notification for authorization voided.',
                required: [],
              }),
            examples: {
              authorization_voided: {
                summary: 'Authorization voided event',
                description: 'Webhook notification when the authorization is voided.',
                value: {
                  id: 'WH-30Y09481LL7353048-6K675100AV972020E',
                  create_time: '2022-09-21T18:41:07.071Z',
                  event_type: 'PAYMENT.AUTHORIZATION.VOIDED',
                  event_version: '1.0',
                  resource_type: 'authorization',
                  resource_version: '2.0',
                  summary: 'A payment authorization was voided',
                  resource: {
                    id: '3C679366HH908993F',
                    status: 'VOIDED',
                    amount: { currency_code: 'USD', value: '100.00' },
                    seller_protection: {
                      status: 'ELIGIBLE',
                      dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                    },
                    supplementary_data: { related_ids: { order_id: '6AY135578D653613P' } },
                    expiration_time: '2022-10-20T18:40:22Z',
                    create_time: '2022-09-21T18:40:22Z',
                    update_time: '2022-09-21T18:41:03Z',
                    links: [
                      {
                        href: 'https://api-m.paypal.com/v2/payments/captures/3C679366HH908993F',
                        rel: 'self',
                        method: 'GET',
                      },
                    ],
                  },
                  links: [
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-30Y09481LL7353048-6K675100AV972020E',
                      rel: 'self',
                      method: 'GET',
                    },
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-30Y09481LL7353048-6K675100AV972020E/resend',
                      rel: 'resend',
                      method: 'POST',
                    },
                  ],
                },
              },
            },
          },
        },
        required: true,
      },
      responses: {
        204: {
          description:
            'Your server implementation should return this HTTP status code if the data was received successfully.',
        },
        400: {
          description:
            'Your server should return this HTTP status code if the request is malformed.',
          content: {
            'application/json': {
              schema: ErrorSchema,
              examples: {
                invalid_request: {
                  summary: 'Invalid webhook request.',
                  description: 'Request with malformed data.',
                  value: {
                    name: 'INVALID_REQUEST',
                    debug_id: 'b1d1f06c7246c',
                    message:
                      'Request is not well-formed, syntactically incorrect, or violates schema.',
                    details: [
                      {
                        field: '/event_type',
                        location: 'body',
                        issue: 'INVALID_PARAMETER_SYNTAX',
                        description:
                          'The value of a field does not conform to the expected format.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        500: _500ErrorResponseResponse,
      },
    },
  },
}

const AuthorizationVoidedExpiredCallback = {
  'authorizations/{$request.path.authorization_id}/void-expired': {
    post: {
      summary: 'Authorization voided due to expiry notification',
      description: 'Notification sent when the authorization is voided due to expiry.',
      operationId: 'authorizations.voided.expired.callback',
      requestBody: {
        content: {
          'application/json': {
            schema: z
              .object({
                id: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(255)
                  .exactOptional()
                  .openapi({ description: 'The ID of the webhook event notification.' }),
                event_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the event.' }),
                create_time: DateTimeSchema.exactOptional().openapi({
                  description: 'The date and time when the webhook event notification was created.',
                }),
                resource_type: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(100)
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the resource related to the webhook notification event.',
                  }),
                resource_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the resource.' }),
                event_type: z
                  .literal('PAYMENT.AUTHORIZATION.VOIDED')
                  .exactOptional()
                  .openapi({
                    description: 'The event that triggered the webhook event notification.',
                  }),
                summary: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({ description: 'A summary description for the event notification.' }),
                resource: Authorization_2Schema.exactOptional(),
                links: z
                  .array(LinkDescription_2Schema)
                  .min(1)
                  .max(10)
                  .exactOptional()
                  .openapi({ description: 'An array of request-related HATEOAS links.' }),
              })
              .openapi({
                title: 'Authorization Voided Expired Event',
                description: 'Webhook event notification for authorization voided due to expiry.',
                required: [],
              }),
            examples: {
              authorization_voided_expired: {
                summary: 'Authorization voided due to expiry event',
                description: 'Webhook notification when the authorization is voided due to expiry.',
                value: {
                  id: 'WH-30Y09481LL7353048-6K675100AV972020E',
                  create_time: '2022-09-21T18:41:07.071Z',
                  event_type: 'PAYMENT.AUTHORIZATION.VOIDED',
                  event_version: '1.0',
                  resource_type: 'authorization',
                  resource_version: '2.0',
                  summary: 'A payment authorization was expired',
                  resource: {
                    id: '3C679366HH908993F',
                    status: 'VOIDED',
                    amount: { currency_code: 'USD', value: '100.00' },
                    seller_protection: {
                      status: 'ELIGIBLE',
                      dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                    },
                    supplementary_data: { related_ids: { order_id: '6AY135578D653613P' } },
                    expiration_time: '2022-10-20T18:40:22Z',
                    create_time: '2022-09-21T18:40:22Z',
                    update_time: '2022-09-21T18:41:03Z',
                    links: [
                      {
                        href: 'https://api-m.paypal.com/v2/payments/captures/3C679366HH908993F',
                        rel: 'self',
                        method: 'GET',
                      },
                    ],
                  },
                  links: [
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-30Y09481LL7353048-6K675100AV972020E',
                      rel: 'self',
                      method: 'GET',
                    },
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-30Y09481LL7353048-6K675100AV972020E/resend',
                      rel: 'resend',
                      method: 'POST',
                    },
                  ],
                },
              },
            },
          },
        },
        required: true,
      },
      responses: {
        204: {
          description:
            'Your server implementation should return this HTTP status code if the data was received successfully.',
        },
        400: {
          description:
            'Your server should return this HTTP status code if the request is malformed.',
          content: {
            'application/json': {
              schema: ErrorSchema,
              examples: {
                invalid_request: {
                  summary: 'Invalid webhook request.',
                  description: 'Request with malformed data.',
                  value: {
                    name: 'INVALID_REQUEST',
                    debug_id: 'b1d1f06c7246c',
                    message:
                      'Request is not well-formed, syntactically incorrect, or violates schema.',
                    details: [
                      {
                        field: '/event_type',
                        location: 'body',
                        issue: 'INVALID_PARAMETER_SYNTAX',
                        description:
                          'The value of a field does not conform to the expected format.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        500: _500ErrorResponseResponse,
      },
    },
  },
}

const CaptureRefundedCallback = {
  'captures/{$request.path.capture_id}/refunds': {
    post: {
      summary: 'Capture refunded notification',
      description: 'Notification sent when a capture is refunded.',
      operationId: 'captures.refunded.callback',
      requestBody: {
        content: {
          'application/json': {
            schema: z
              .object({
                id: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(255)
                  .exactOptional()
                  .openapi({ description: 'The ID of the webhook event notification.' }),
                event_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the event.' }),
                create_time: DateTimeSchema.exactOptional().openapi({
                  description: 'The date and time when the webhook event notification was created.',
                }),
                resource_type: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(100)
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the resource related to the webhook notification event.',
                  }),
                resource_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the resource.' }),
                event_type: z
                  .literal('PAYMENT.CAPTURE.REFUNDED')
                  .exactOptional()
                  .openapi({
                    description: 'The event that triggered the webhook event notification.',
                  }),
                summary: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({ description: 'A summary description for the event notification.' }),
                resource: RefundSchema.exactOptional(),
                links: z
                  .array(LinkDescription_2Schema)
                  .min(1)
                  .max(10)
                  .exactOptional()
                  .openapi({ description: 'An array of request-related HATEOAS links.' }),
              })
              .openapi({
                title: 'Capture Refunded Event',
                description: 'Webhook event notification for capture refunded.',
                required: [],
              }),
            examples: {
              capture_refunded: {
                summary: 'Capture refunded event',
                description: 'Webhook notification when a capture is refunded.',
                value: {
                  id: 'WH-3UE850097C805102A-18305212AB1299210',
                  event_version: '1.0',
                  create_time: '2022-10-27T22:34:27.088Z',
                  resource_type: 'refund',
                  resource_version: '2.0',
                  event_type: 'PAYMENT.CAPTURE.REFUNDED',
                  summary: 'A $ 5.0 USD capture payment was refunded',
                  resource: {
                    seller_payable_breakdown: {
                      total_refunded_amount: { value: '5.00', currency_code: 'USD' },
                      paypal_fee: { value: '0.00', currency_code: 'USD' },
                      gross_amount: { value: '5.00', currency_code: 'USD' },
                      net_amount: { value: '5.00', currency_code: 'USD' },
                    },
                    amount: { value: '5.00', currency_code: 'USD' },
                    update_time: '2022-10-27T15:34:22-07:00',
                    create_time: '2022-10-27T15:34:22-07:00',
                    invoice_id: '1666910062',
                    links: [
                      {
                        method: 'GET',
                        rel: 'self',
                        href: 'https://api-m.paypal.com/v2/payments/refunds/3NG36268BJ600681V',
                      },
                      {
                        method: 'GET',
                        rel: 'up',
                        href: 'https://api-m.paypal.com/v2/payments/captures/27C890397M291943E',
                      },
                    ],
                    id: '3NG36268BJ600681V',
                    note_to_payer: 'Defective product',
                    status: 'COMPLETED',
                  },
                  links: [
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-3UE850097C805102A-18305212AB1299210',
                      rel: 'self',
                      method: 'GET',
                    },
                    {
                      href: 'https://api-m.paypal.com/v1/notifications/webhooks-events/WH-3UE850097C805102A-18305212AB1299210/resend',
                      rel: 'resend',
                      method: 'POST',
                    },
                  ],
                },
              },
            },
          },
        },
        required: true,
      },
      responses: {
        204: {
          description:
            'Your server implementation should return this HTTP status code if the data was received successfully.',
        },
        400: {
          description:
            'Your server should return this HTTP status code if the request is malformed.',
          content: {
            'application/json': {
              schema: ErrorSchema,
              examples: {
                invalid_request: {
                  summary: 'Invalid webhook request.',
                  description: 'Request with malformed data.',
                  value: {
                    name: 'INVALID_REQUEST',
                    debug_id: 'b1d1f06c7246c',
                    message:
                      'Request is not well-formed, syntactically incorrect, or violates schema.',
                    details: [
                      {
                        field: '/event_type',
                        location: 'body',
                        issue: 'INVALID_PARAMETER_SYNTAX',
                        description:
                          'The value of a field does not conform to the expected format.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        500: _500ErrorResponseResponse,
      },
    },
  },
}

const RefundCompletedCallback = {
  'refunds/{$request.path.refund_id}': {
    post: {
      summary: 'Refund completed notification',
      description: 'Notification sent when non referenced credit request have been processed.',
      operationId: 'refunds.completed.callback',
      requestBody: {
        content: {
          'application/json': {
            schema: z
              .object({
                id: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(255)
                  .exactOptional()
                  .openapi({ description: 'The ID of the webhook event notification.' }),
                event_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the event.' }),
                create_time: DateTimeSchema.exactOptional().openapi({
                  description: 'The date and time when the webhook event notification was created.',
                }),
                resource_type: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(100)
                  .exactOptional()
                  .openapi({
                    description:
                      'The name of the resource related to the webhook notification event.',
                  }),
                resource_version: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(50)
                  .exactOptional()
                  .openapi({ description: 'The version of the resource.' }),
                event_type: z
                  .literal('PAYMENT.REFUND.COMPLETED')
                  .exactOptional()
                  .openapi({
                    description: 'The event that triggered the webhook event notification.',
                  }),
                summary: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(500)
                  .exactOptional()
                  .openapi({ description: 'A summary description for the event notification.' }),
                resource: RefundSchema.exactOptional(),
                links: z
                  .array(LinkDescription_2Schema)
                  .min(1)
                  .max(10)
                  .exactOptional()
                  .openapi({ description: 'An array of request-related HATEOAS links.' }),
              })
              .openapi({
                title: 'Refund Completed Event',
                description: 'Webhook event notification for refund completed.',
                required: [],
              }),
            examples: {
              refund_completed: {
                summary: 'Refund completed event',
                description:
                  'Webhook notification when non referenced credit request have been processed.',
                value: {
                  id: 'WH-COC11055RA711503B-4YM959094A144403T',
                  create_time: '2019-12-05T21:21:49.000Z',
                  event_type: 'PAYMENT.REFUND.COMPLETED',
                  resource_type: 'refund',
                  resource_version: '2.0',
                  summary: 'Non Referenced Credit Completed',
                  resource: {
                    id: '1JU08902781691411',
                    amount: { value: '10.99', currency_code: 'USD' },
                    status: 'COMPLETED',
                    note_to_payer: 'Defective product',
                    seller_payable_breakdown: {
                      gross_amount: { value: '10.99', currency_code: 'USD' },
                      paypal_fee: { value: '0', currency_code: 'USD' },
                      net_amount: { value: '10.99', currency_code: 'USD' },
                      total_refunded_amount: { value: '10.99', currency_code: 'USD' },
                    },
                    create_time: '2019-11-18T11:24:19Z',
                    update_time: '2018-11-18T11:24:19Z',
                    links: [
                      {
                        rel: 'self',
                        method: 'GET',
                        href: 'https://api.paypal.com/v2/payments/refunds/1JU08902781691411',
                      },
                    ],
                  },
                  links: [
                    {
                      href: 'https://api.paypal.com/v1/notifications/webhooks-events/WH-COC11055RA711503B-4YM959094A144403T',
                      rel: 'self',
                      method: 'GET',
                    },
                    {
                      href: 'https://api.paypal.com/v1/notifications/webhooks-events/WH-COC11055RA711503B-4YM959094A144403T/resend',
                      rel: 'resend',
                      method: 'POST',
                    },
                  ],
                  event_version: '1.0',
                },
              },
            },
          },
        },
        required: true,
      },
      responses: {
        204: {
          description:
            'Your server implementation should return this HTTP status code if the data was received successfully.',
        },
        400: {
          description:
            'Your server should return this HTTP status code if the request is malformed.',
          content: {
            'application/json': {
              schema: ErrorSchema,
              examples: {
                invalid_request: {
                  summary: 'Invalid webhook request.',
                  description: 'Request with malformed data.',
                  value: {
                    name: 'INVALID_REQUEST',
                    debug_id: 'b1d1f06c7246c',
                    message:
                      'Request is not well-formed, syntactically incorrect, or violates schema.',
                    details: [
                      {
                        field: '/event_type',
                        location: 'body',
                        issue: 'INVALID_PARAMETER_SYNTAX',
                        description:
                          'The value of a field does not conform to the expected format.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        500: _500ErrorResponseResponse,
      },
    },
  },
}

const VerificationVerifiedCallback = {
  'verifications/{$request.path.id}': {
    post: {
      summary: 'Payment verification verified notification',
      description: 'Notification sent when payment verification has been verified.',
      operationId: 'verifications.verified.callback',
      requestBody: {
        content: {
          'application/json': {
            schema: z
              .object({
                context_id: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(255)
                  .exactOptional()
                  .openapi({ description: 'The context ID for the payment verification.' }),
                idempotent: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Indicates if the operation is idempotent.' }),
              })
              .openapi({
                title: 'Verification Verified Event',
                description: 'Webhook event notification for payment verification verified.',
                required: [],
              }),
            examples: {
              verification_verified: {
                summary: 'Payment verification verified event',
                description: 'Webhook notification when payment verification has been verified.',
                value: {
                  context_id: '50K38686VU458603L',
                  payment: {
                    payment_id: '50K38686VU458603L',
                    status: 'COMPLETED',
                    intent: 'VERIFICATION',
                    payment_source: {
                      card: {
                        name: '**********',
                        expiry: '2029-02',
                        last_digits: '9107',
                        type: 'DEBIT',
                        bin_details: {
                          bin: '41252417',
                          issuing_bank: 'BPCE',
                          bin_country_code: 'FR',
                          products: [
                            'ELECTRONIC',
                            'GOLD',
                            'CONSUMER',
                            'NON_ELECTRONIC',
                            'CASH_WITHDRAWAL',
                          ],
                        },
                        available_networks: ['VISA'],
                        billing_address: {
                          address_line_1: '**********',
                          admin_area_2: '**********',
                          postal_code: '**********',
                          country_code: 'FR',
                        },
                      },
                    },
                    verification: {
                      verification_status: 'VERIFIED',
                      verification_id: '8P908649EK0538737',
                      network_transaction_reference: { id: '385195638562731', network: 'VISA' },
                    },
                    amount: { currency_code: 'EUR', value: '0.00' },
                    transaction_context: {},
                    links: [
                      {
                        href: 'https://api.paypal.com/v2/payments/payment/50K38686VU458603L',
                        rel: 'self',
                        method: 'GET',
                      },
                      {
                        href: 'https://api.paypal.com/v2/payments/verification/8P908649EK0538737',
                        rel: 'self',
                        method: 'GET',
                      },
                    ],
                  },
                  idempotent: false,
                },
              },
            },
          },
        },
        required: true,
      },
      responses: {
        204: {
          description:
            'Your server implementation should return this HTTP status code if the data was received successfully.',
        },
        400: {
          description:
            'Your server should return this HTTP status code if the request is malformed.',
          content: {
            'application/json': {
              schema: ErrorSchema,
              examples: {
                invalid_request: {
                  summary: 'Invalid webhook request.',
                  description: 'Request with malformed data.',
                  value: {
                    name: 'INVALID_REQUEST',
                    debug_id: 'b1d1f06c7246c',
                    message:
                      'Request is not well-formed, syntactically incorrect, or violates schema.',
                    details: [
                      {
                        field: '/payment',
                        location: 'body',
                        issue: 'INVALID_PARAMETER_SYNTAX',
                        description:
                          'The value of a field does not conform to the expected format.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        500: _500ErrorResponseResponse,
      },
    },
  },
}

const VerificationFailedCallback = {
  'verifications/{$request.path.id}/failed': {
    post: {
      summary: 'Payment verification failed notification',
      description: 'Notification sent when payment verification has failed.',
      operationId: 'verifications.failed.callback',
      requestBody: {
        content: {
          'application/json': {
            schema: z
              .object({
                context_id: z
                  .string()
                  .regex(/^.*$/)
                  .min(1)
                  .max(255)
                  .exactOptional()
                  .openapi({ description: 'The context ID for the payment verification.' }),
                idempotent: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Indicates if the operation is idempotent.' }),
              })
              .openapi({
                title: 'Verification Failed Event',
                description: 'Webhook event notification for payment verification failed.',
                required: [],
              }),
            examples: {
              verification_failed: {
                summary: 'Payment verification failed event',
                description: 'Webhook notification when payment verification has failed.',
                value: {
                  context_id: '3DT72694M7836131K',
                  payment: {
                    payment_id: '3DT72694M7836131K',
                    status: 'COMPLETED',
                    intent: 'VERIFICATION',
                    payment_source: {
                      card: {
                        name: '**********',
                        expiry: '2029-02',
                        last_digits: '6514',
                        type: 'DEBIT',
                        bin_details: {
                          bin: '47666427',
                          issuing_bank: 'CAIXABANK SA',
                          bin_country_code: 'ES',
                          products: ['CONSUMER'],
                        },
                        available_networks: ['VISA'],
                        billing_address: {
                          address_line_1: '**********',
                          admin_area_2: '**********',
                          postal_code: '**********',
                          country_code: 'FR',
                        },
                      },
                    },
                    verification: {
                      verification_status: 'FAILED',
                      verification_id: '3Y969738N8657733W',
                    },
                    amount: { currency_code: 'EUR', value: '0.00' },
                    transaction_context: {},
                    links: [
                      {
                        href: 'https://api.paypal.com/v2/payments/payment/3DT72694M7836131K',
                        rel: 'self',
                        method: 'GET',
                      },
                      {
                        href: 'https://api.paypal.com/v2/payments/verification/3Y969738N8657733W',
                        rel: 'self',
                        method: 'GET',
                      },
                    ],
                  },
                  idempotent: false,
                },
              },
            },
          },
        },
        required: true,
      },
      responses: {
        204: {
          description:
            'Your server implementation should return this HTTP status code if the data was received successfully.',
        },
        400: {
          description:
            'Your server should return this HTTP status code if the request is malformed.',
          content: {
            'application/json': {
              schema: ErrorSchema,
              examples: {
                invalid_request: {
                  summary: 'Invalid webhook request.',
                  description: 'Request with malformed data.',
                  value: {
                    name: 'INVALID_REQUEST',
                    debug_id: 'b1d1f06c7246c',
                    message:
                      'Request is not well-formed, syntactically incorrect, or violates schema.',
                    details: [
                      {
                        field: '/payment',
                        location: 'body',
                        issue: 'INVALID_PARAMETER_SYNTAX',
                        description:
                          'The value of a field does not conform to the expected format.',
                      },
                    ],
                  },
                },
              },
            },
          },
        },
        500: _500ErrorResponseResponse,
      },
    },
  },
}

export const getV2PaymentsAuthorizationsAuthorizationIdRoute = createRoute({
  method: 'get',
  path: '/v2/payments/authorizations/{authorization_id}',
  tags: ['authorizations'],
  summary: 'Show details for authorized payment',
  description: 'Shows details for an authorized payment, by ID.',
  operationId: 'authorizations.get',
  request: {
    params: z.object({
      authorization_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .openapi({
          param: {
            name: 'authorization_id',
            description: 'The ID of the authorized payment for which to show details.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^[\\S\\s]*$' },
            examples: {
              authorizations_get: {
                summary: 'Show Authorized Payment Details',
                description: 'Shows details for an authorized payment, by ID.',
                value: '0VF52814937998046',
              },
              authorizations_get_with_supplementary_data: {
                summary: 'Show Authorized Payment Details',
                description: 'Shows details for an authorized payment, by ID.',
                value: '0T620041CK889853A',
              },
            },
          },
        }),
    }),
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows authorization details.',
      content: {
        'application/json': {
          schema: Authorization_2Schema,
          examples: {
            authorizations_get: {
              summary: 'Show Authorized Payment Details',
              description: 'Shows details for an authorized payment, by ID.',
              value: {
                id: '0VF52814937998046',
                status: 'CREATED',
                amount: { value: '10.99', currency_code: 'USD' },
                invoice_id: 'INVOICE-123',
                seller_protection: {
                  status: 'ELIGIBLE',
                  dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                },
                payee: { email_address: 'merchant@example.com', merchant_id: '7KNGBPH2U58GQ' },
                expiration_time: '2017-10-10T23:23:45Z',
                create_time: '2017-09-11T23:23:45Z',
                update_time: '2017-09-11T23:23:45Z',
                links: [
                  {
                    rel: 'self',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046',
                  },
                  {
                    rel: 'capture',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046/capture',
                  },
                  {
                    rel: 'void',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046/void',
                  },
                  {
                    rel: 'reauthorize',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046/reauthorize',
                  },
                ],
              },
            },
            authorizations_get_with_supplementary_data: {
              summary: 'Show Authorized Payment Details',
              description: 'Shows details for an authorized payment, by ID.',
              value: {
                id: '0T620041CK889853A',
                status: 'CREATED',
                amount: { currency_code: 'USD', value: '100.00' },
                invoice_id: 'OrderInvoice-23_10_2024_12_27_32_pm',
                seller_protection: {
                  status: 'ELIGIBLE',
                  dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                },
                supplementary_data: { related_ids: { order_id: '25M43554V9523650M' } },
                payee: { email_address: 'merchant@example.com', merchant_id: 'YXZY75W2GKDQE' },
                expiration_time: '2024-11-21T17:27:36Z',
                create_time: '2024-10-23T17:27:36Z',
                update_time: '2024-10-23T17:27:36Z',
                links: [
                  {
                    href: 'https://api-m.sandbox.paypal.com/v2/payments/authorizations/0T620041CK889853A',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.sandbox.paypal.com/v2/payments/authorizations/0T620041CK889853A/capture',
                    rel: 'capture',
                    method: 'POST',
                  },
                  {
                    href: 'https://api-m.sandbox.paypal.com/v2/payments/authorizations/0T620041CK889853A/void',
                    rel: 'void',
                    method: 'POST',
                  },
                  {
                    href: 'https://api-m.sandbox.paypal.com/v2/payments/authorizations/0T620041CK889853A/reauthorize',
                    rel: 'reauthorize',
                    method: 'POST',
                  },
                  {
                    href: 'https://api-m.sandbox.paypal.com/v2/checkout/orders/25M43554V9523650M',
                    rel: 'up',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/payments/payment/authcapture'] }],
})

export const postV2PaymentsAuthorizationsAuthorizationIdCaptureRoute = createRoute({
  method: 'post',
  path: '/v2/payments/authorizations/{authorization_id}/capture',
  tags: ['authorizations'],
  summary: 'Capture authorized payment',
  description: 'Captures an authorized payment, by ID.',
  operationId: 'authorizations.capture',
  request: {
    params: z.object({
      authorization_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .openapi({
          param: {
            name: 'authorization_id',
            description: 'The PayPal-generated ID for the authorized payment to capture.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^[\\S\\s]*$' },
            examples: {
              authorizations_capture: {
                summary: 'Capture Authorized Payment',
                description: 'Captures an authorized payment, by ID.',
                value: '0VF52814937998046',
              },
              authorizations_capture_200_idempotent_response: {
                summary: 'Capture Authorized Payment - 200 idempotent response',
                description: 'Captures an authorized payment, by ID.',
                value: '6DR965477U7140544',
              },
              authorizations_capture_empty_request: {
                summary: 'Capture Authorized Payment with an empty request',
                description: 'Captures an authorized payment, by ID.',
                value: '6DR965477U7140544',
              },
              authorizations_capture_with_prefer_header: {
                summary: 'Capture Authorized Payment with Prefer Request Header',
                description:
                  'Captures an authorized payment, by ID. Includes the `Prefer` request header.',
                value: '0VF52814937998046',
              },
            },
          },
        }),
    }),
    headers: z.object({
      'PayPal-Request-Id': PaypalRequestIdParamsSchema,
      Prefer: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .default('return=minimal')
        .exactOptional()
        .openapi({
          param: {
            name: 'Prefer',
            description:
              'The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              minLength: 0,
              maxLength: 2147483647,
              pattern: '^[\\S\\s]*$',
              default: 'return=minimal',
            },
            examples: {
              authorizations_capture_200_idempotent_response: {
                summary: 'Capture Authorized Payment - 200 idempotent response',
                description: 'Captures an authorized payment, by ID.',
                value: 'return=representation',
              },
              authorizations_capture_with_prefer_header: {
                summary: 'Capture Authorized Payment with Prefer Request Header',
                description:
                  'Captures an authorized payment, by ID. Includes the `Prefer` request header.',
                value: 'return=representation',
              },
              authorizations_capture_empty_request: {
                summary: 'Capture Authorized Payment with an empty request',
                description: 'Captures an authorized payment, by ID.',
                value: 'return=representation',
              },
            },
          },
        }),
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: CaptureRequestSchema,
          examples: {
            authorizations_capture: {
              summary: 'Capture Authorized Payment',
              description: 'Captures an authorized payment, by ID.',
              value: {
                amount: { value: '10.99', currency_code: 'USD' },
                invoice_id: 'INVOICE-123',
                final_capture: true,
                note_to_payer:
                  'If the ordered color is not available, we will substitute with a different color free of charge.',
                soft_descriptor: "Bob's Custom Sweaters",
              },
            },
            authorizations_capture_200_idempotent_response: {
              summary: 'Capture Authorized Payment - 200 idempotent response',
              description: 'Captures an authorized payment, by ID.',
              value: {
                amount: { value: '1.00', currency_code: 'USD' },
                invoice_id: 'CaptureInvoice-10142024',
                final_capture: false,
              },
            },
            authorizations_capture_empty_request: {
              summary: 'Capture Authorized Payment with an empty request',
              description: 'Captures an authorized payment, by ID.',
              value: {},
            },
            authorizations_capture_with_prefer_header: {
              summary: 'Capture Authorized Payment with Prefer Request Header',
              description:
                'Captures an authorized payment, by ID. Includes the `Prefer` request header.',
              value: {
                amount: { value: '10.99', currency_code: 'USD' },
                invoice_id: 'INVOICE-123',
                final_capture: true,
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows captured payment details.',
      content: {
        'application/json': {
          schema: Capture_2Schema,
          examples: {
            authorizations_capture_200_idempotent_response: {
              summary: 'Capture Authorized Payment - 200 idempotent response',
              description: 'Captures an authorized payment, by ID.',
              value: {
                id: '23T524207X938445J',
                amount: { currency_code: 'USD', value: '100.00' },
                final_capture: false,
                seller_protection: {
                  status: 'ELIGIBLE',
                  dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                },
                seller_receivable_breakdown: {
                  gross_amount: { currency_code: 'USD', value: '1.00' },
                  paypal_fee: { currency_code: 'USD', value: '0.52' },
                  net_amount: { currency_code: 'USD', value: '0.48' },
                  exchange_rate: {},
                },
                invoice_id: 'OrderInvoice-10_10_2024_12_58_20_pm',
                status: 'COMPLETED',
                create_time: '2024-10-14T21:29:26Z',
                update_time: '2024-10-14T21:29:26Z',
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/payments/captures/23T524207X938445J',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.paypal.com/v2/payments/captures/23T524207X938445J/refund',
                    rel: 'refund',
                    method: 'POST',
                  },
                  {
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/6DR965477U7140544',
                    rel: 'up',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    201: {
      description:
        'A successful request returns the HTTP <code>201 Created</code> status code and a JSON response body that shows captured payment details.',
      content: {
        'application/json': {
          schema: Capture_2Schema,
          examples: {
            authorizations_capture: {
              summary: 'Capture Authorized Payment',
              description: 'Captures an authorized payment, by ID.',
              value: {
                id: '2GG279541U471931P',
                status: 'COMPLETED',
                links: [
                  {
                    rel: 'self',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/captures/2GG279541U471931P',
                  },
                  {
                    rel: 'refund',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/captures/2GG279541U471931P/refund',
                  },
                  {
                    rel: 'up',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046',
                  },
                ],
              },
            },
            authorizations_capture_empty_request: {
              summary: 'Capture Authorized Payment with an empty request',
              description: 'Captures an authorized payment, by ID.',
              value: {
                id: '7TK53561YB803214S',
                amount: { currency_code: 'USD', value: '100.00' },
                final_capture: true,
                seller_protection: {
                  status: 'ELIGIBLE',
                  dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                },
                seller_receivable_breakdown: {
                  gross_amount: { currency_code: 'USD', value: '100.00' },
                  paypal_fee: { currency_code: 'USD', value: '3.98' },
                  net_amount: { currency_code: 'USD', value: '96.02' },
                  exchange_rate: {},
                },
                invoice_id: 'OrderInvoice-10_10_2024_12_58_20_pm',
                status: 'PENDING',
                status_details: { reason: 'OTHER' },
                create_time: '2024-10-14T21:37:10Z',
                update_time: '2024-10-14T21:37:10Z',
                links: [
                  {
                    href: 'https://api.msmaster.qa.paypal.com/v2/payments/captures/7TK53561YB803214S',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://api.msmaster.qa.paypal.com/v2/payments/captures/7TK53561YB803214S/refund',
                    rel: 'refund',
                    method: 'POST',
                  },
                  {
                    href: 'https://api.msmaster.qa.paypal.com/v2/payments/authorizations/6DR965477U7140544',
                    rel: 'up',
                    method: 'GET',
                  },
                ],
              },
            },
            authorizations_capture_with_prefer_header: {
              summary: 'Capture Authorized Payment with Prefer Request Header',
              description:
                'Captures an authorized payment, by ID. Includes the `Prefer` request header.',
              value: {
                id: '2GG279541U471931P',
                status: 'COMPLETED',
                status_details: {},
                amount: { value: '10.99', currency_code: 'USD' },
                final_capture: true,
                seller_protection: {
                  status: 'ELIGIBLE',
                  dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                },
                seller_receivable_breakdown: {
                  gross_amount: { value: '10.99', currency_code: 'USD' },
                  paypal_fee: { value: '0.33', currency_code: 'USD' },
                  net_amount: { value: '10.66', currency_code: 'USD' },
                },
                invoice_id: 'INV-123',
                create_time: '2017-09-11T23:24:01Z',
                update_time: '2017-09-11T23:24:01Z',
                links: [
                  {
                    rel: 'self',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/captures/2GG279541U471931P',
                  },
                  {
                    rel: 'refund',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/captures/2GG279541U471931P/refund',
                  },
                  {
                    rel: 'up',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/0VF52814937998046',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'The request failed because it is not well-formed or is syntactically incorrect or violates schema.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            authorizations_capture_400_validation_error: {
              summary: 'Capture Authorized Payment - 400 Bad Request - Validation Error',
              description:
                'This code sample attempts to capture an authorized payment but the request fails because a validation error occurred.',
              value: {
                name: 'INVALID_REQUEST',
                message: 'Request is not well-formed, syntactically incorrect, or violates schema.',
                debug_id: '90bff07028f7f',
                details: [
                  {
                    field: '/invoice_id',
                    value:
                      'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ_this_invoice_is_too_long',
                    issue: 'INVALID_STRING_MAX_LENGTH',
                    description: 'The value of a field is too long.',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    409: {
      description: 'The server has detected a conflict while processing this request.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            authorizations_capture_409_conflict: {
              summary: 'Capture Authorized Payment - 409 Conflict - Operation in Progress Error',
              description:
                'This code sample attempts to capture an authorized payment but the request fails because a previous call for the given resource is in progress.',
              value: {
                name: 'RESOURCE_CONFLICT',
                debug_id: 'b1d1f06c7246c',
                message: 'The server has detected a conflict while processing this request.',
                details: [
                  {
                    issue: 'PREVIOUS_REQUEST_IN_PROGRESS',
                    description:
                      'A previous request on this resource is currently in progress. Please wait for some time and try again. It is best to space out the initial and the subsequent request(s) to avoid receiving this error.',
                  },
                ],
              },
            },
          },
        },
      },
    },
    422: {
      description:
        'The request failed because it is semantically incorrect or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            authorizations_capture_422_amount_limit_exceeded: {
              summary:
                'Capture Authorized Payment - 422 Unprocessable Entity - Requested Amount Exceeds Limit Error',
              description:
                'This code sample attempts to capture an authorized payment but the request fails because the requested amount exceeds the allowable limit.',
              value: {
                name: 'UNPROCCESSABLE_ENTITY',
                message:
                  'The requested action could not be completed, is semantically incorrect, or failed business validation.',
                debug_id: '90bff07028f7f',
                details: [
                  {
                    field: '/amount/value',
                    value: '10.99',
                    issue: 'MAX_CAPTURE_AMOUNT_EXCEEDED',
                    description:
                      'Capture amount specified exceeded allowable limit. You can only capture up to the original authorization amount.',
                    location: 'body',
                  },
                ],
              },
            },
            authorizations_capture_422_expired: {
              summary:
                'Capture Authorized Payment - 422 Unprocessable Entity - Authorization Expired Error',
              description:
                'This code sample attempts to capture an authorized payment but the request fails because the authorization expired.',
              value: {
                name: 'UNPROCCESSABLE_ENTITY',
                message:
                  'The requested action could not be completed, is semantically incorrect, or failed business validation.',
                debug_id: '90bff07028f7f',
                details: [
                  { issue: 'AUTHORIZATION_EXPIRED', description: 'The authorization has expired.' },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  callbacks: {
    capture_completed: CaptureCompletedCallback,
    capture_declined: CaptureDeclinedCallback,
    capture_pending_kyc_incomplete: CapturePendingKycIncompleteCallback,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/payments/payment/authcapture'] }],
})

export const postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRoute = createRoute({
  method: 'post',
  path: '/v2/payments/authorizations/{authorization_id}/reauthorize',
  tags: ['authorizations'],
  summary: 'Reauthorize authorized payment',
  description:
    'Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize a payment after its initial three-day honor period expires. Within the 29-day authorization period, you can issue multiple re-authorizations after the honor period expires.<br/><br/>If 30 days have transpired since the date of the original authorization, you must create an authorized payment instead of reauthorizing the original authorized payment.<br/><br/>A reauthorized payment itself has a new honor period of three days.<br/><br/>You can reauthorize an authorized payment from 4 to 29 days after the 3-day honor period. The allowed amount depends on context and geography, for example in US it is up to 115% of the original authorized amount, not to exceed an increase of $75 USD.<br/><br/>Supports only the `amount` request parameter.',
  operationId: 'authorizations.reauthorize',
  request: {
    params: z.object({
      authorization_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .openapi({
          param: {
            name: 'authorization_id',
            description: 'The PayPal-generated ID for the authorized payment to reauthorize.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^[\\S\\s]*$' },
            examples: {
              example: {
                summary: 'Reauthorize Authorized Payment',
                description: 'The PayPal-generated ID for the authorized payment to reauthorize.',
                value: '0VF52814937998046',
              },
            },
          },
        }),
    }),
    headers: z.object({
      'PayPal-Request-Id': PaypalRequestIdParamsSchema,
      Prefer: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .default('return=minimal')
        .exactOptional()
        .openapi({
          param: {
            name: 'Prefer',
            description:
              'The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              minLength: 0,
              maxLength: 2147483647,
              pattern: '^[\\S\\s]*$',
              default: 'return=minimal',
            },
            examples: {
              authorizations_reauthorize_with_prefer_header: {
                summary: 'Reauthorize Authorized Payment with Prefer Request Header',
                description:
                  'Reauthorizes an authorized payment, by ID. The honor period for the authorized payment has expired. Includes the `Prefer` request header.',
                value: 'return=representation',
              },
            },
          },
        }),
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: ReauthorizeRequestSchema,
          examples: {
            authorizations_reauthorize: {
              summary: 'Reauthorize Authorized Payment',
              description:
                'Reauthorizes an authorized payment, by ID. The honor period for the authorized payment has expired.',
              value: { amount: { value: '10.99', currency_code: 'USD' } },
            },
            authorizations_reauthorize_200_idempotent_response: {
              summary: 'Reauthorize Authorized Payment - 200 idempotent response',
              description:
                'Reauthorizes an authorized payment, by ID. The honor period for the authorized payment has expired.',
              value: { amount: { value: '10.99', currency_code: 'USD' } },
            },
            authorizations_reauthorize_empty_request: {
              summary: 'Reauthorize Authorized Payment with an empty request',
              description:
                'Reauthorizes an authorized payment, by ID. The honor period for the authorized payment has expired.',
              value: {},
            },
            authorizations_reauthorize_with_prefer_header: {
              summary: 'Reauthorize Authorized Payment with Prefer Request Header',
              description:
                'Reauthorizes an authorized payment, by ID. The honor period for the authorized payment has expired. Includes the `Prefer` request header.',
              value: { amount: { value: '10.99', currency_code: 'USD' } },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows the reauthorized payment details.',
      content: {
        'application/json': {
          schema: Authorization_2Schema,
          examples: {
            authorizations_reauthorize_200_idempotent_response: {
              summary: 'Reauthorize Authorized Payment - 200 idempotent response',
              description:
                'Reauthorizes an authorized payment, by ID. The honor period for the authorized payment has expired.',
              value: {
                id: '8AA831015G517922L',
                status: 'CREATED',
                links: [
                  {
                    rel: 'self',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L',
                  },
                  {
                    rel: 'capture',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/capture',
                  },
                  {
                    rel: 'void',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/void',
                  },
                  {
                    rel: 'reauthorize',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/reauthorize',
                  },
                ],
              },
            },
          },
        },
      },
    },
    201: {
      description:
        'A successful request returns the HTTP <code>201 Created</code> status code and a JSON response body that shows the reauthorized payment details.',
      content: {
        'application/json': {
          schema: Authorization_2Schema,
          examples: {
            authorizations_reauthorize: {
              summary: 'Reauthorize Authorized Payment',
              description:
                'Reauthorizes an authorized payment, by ID. The honor period for the authorized payment has expired.',
              value: {
                id: '8AA831015G517922L',
                status: 'CREATED',
                links: [
                  {
                    rel: 'self',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L',
                  },
                  {
                    rel: 'capture',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/capture',
                  },
                  {
                    rel: 'void',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/void',
                  },
                  {
                    rel: 'reauthorize',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/reauthorize',
                  },
                ],
              },
            },
            authorizations_reauthorize_empty_request: {
              summary: 'Reauthorize Authorized Payment with an empty request',
              description:
                'Reauthorizes an authorized payment, by ID. The honor period for the authorized payment has expired.',
              value: {
                id: '8AA831015G517922L',
                status: 'CREATED',
                links: [
                  {
                    rel: 'self',
                    method: 'GET',
                    href: 'https://api.paypal.com/v2/payments/authorizations/8AA831015G517922L',
                  },
                  {
                    rel: 'capture',
                    method: 'POST',
                    href: 'https://api.paypal.com/v2/payments/authorizations/8AA831015G517922L/capture',
                  },
                  {
                    rel: 'void',
                    method: 'POST',
                    href: 'https://api.paypal.com/v2/payments/authorizations/8AA831015G517922L/void',
                  },
                  {
                    rel: 'reauthorize',
                    method: 'POST',
                    href: 'https://api.paypal.com/v2/payments/authorizations/8AA831015G517922L/reauthorize',
                  },
                ],
              },
            },
            authorizations_reauthorize_with_prefer_header: {
              summary: 'Reauthorize Authorized Payment with Prefer Request Header',
              description:
                'Reauthorizes an authorized payment, by ID. The honor period for the authorized payment has expired. Includes the `Prefer` request header.',
              value: {
                id: '8AA831015G517922L',
                status: 'CREATED',
                amount: { value: '10.99', currency_code: 'USD' },
                invoice_id: 'INVOICE-123',
                seller_protection: {
                  status: 'ELIGIBLE',
                  dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                },
                expiration_time: '2018-10-10T23:23:45Z',
                create_time: '2018-09-11T23:23:45Z',
                update_time: '2018-09-11T23:23:45Z',
                links: [
                  {
                    rel: 'self',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L',
                  },
                  {
                    rel: 'capture',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/capture',
                  },
                  {
                    rel: 'void',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/void',
                  },
                  {
                    rel: 'reauthorize',
                    method: 'POST',
                    href: 'https://api-m.paypal.com/v2/payments/authorizations/8AA831015G517922L/reauthorize',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'The request failed because it is not well-formed or is syntactically incorrect or violates schema.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            authorizations_reauthorize_400_validation_error: {
              summary: 'Reauthorize Authorized Payment - 400 Bad Request - Validation Error',
              description:
                'This code sample attempts to reauthorize an authorized payment but the request fails due to a validation error.',
              value: {
                name: 'INVALID_REQUEST',
                message: 'Request is not well-formed, syntactically incorrect, or violates schema.',
                debug_id: '90bff07028f7f',
                details: [
                  {
                    field: '/amount/value',
                    value: '123456789012345678901234567890123',
                    issue: 'INVALID_STRING_MAX_LENGTH',
                    description: 'the value of a field is too long.',
                    location: 'body',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    422: {
      description:
        'The request failed because it either is semantically incorrect or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            authorizations_reauthorize_422_auth_currency_mismatch: {
              summary:
                'Reauthorize Authorized Payment - 422 Unprocessable Entity - Reauthorization Currency Mismatch',
              description:
                'This code sample attempts to reauthorize an authorized payment but the request fails because reauthorization currency does not matches with the original authorization currency.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: '90bff07028f7f',
                details: [
                  {
                    issue: 'AUTH_CURRENCY_MISMATCH',
                    description:
                      'The currency specified during reauthorization should be the same as the currency specified in the original authorization. Please check the currency of the authorization for which you are trying to reauthorize and try again.',
                  },
                ],
                links: [
                  {
                    href: 'https://developer.paypal.com/docs/api/payments/v2/#error-AUTH_CURRENCY_MISMATCH',
                    rel: 'information_link',
                  },
                ],
              },
            },
            authorizations_reauthorize_422_inside_honor_period: {
              summary:
                'Reauthorize Authorized Payment - 422 Unprocessable Entity - Authorization in Honor Period Error',
              description:
                'This code sample attempts to reauthorize an authorized payment but the request fails because the authorization is still within the honor period.',
              value: {
                name: 'UNPROCCESSABLE_ENTITY',
                message:
                  'The requested action could not be completed, is semantically incorrect, or failed business validation.',
                debug_id: '90bff07028f7f',
                details: [
                  {
                    issue: 'REAUTHORIZATION_TOO_SOON',
                    description:
                      'Re-authorization is not allowed within the three-day honor period.',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/payments/payment/authcapture'] }],
})

export const postV2PaymentsAuthorizationsAuthorizationIdVoidRoute = createRoute({
  method: 'post',
  path: '/v2/payments/authorizations/{authorization_id}/void',
  tags: ['authorizations'],
  summary: 'Void authorized payment',
  description:
    'Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.',
  operationId: 'authorizations.void',
  request: {
    params: z.object({
      authorization_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .openapi({
          param: {
            name: 'authorization_id',
            description: 'The PayPal-generated ID for the authorized payment to void.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^[\\S\\s]*$' },
            examples: {
              authorizations_void: {
                summary: 'Void Authorized Payment',
                description:
                  'Voids an authorized PayPal account payment, by ID. You cannot void an authorized payment that has been fully captured.',
                value: '0VF52814937998046',
              },
              authorizations_void_200_idempotent_response: {
                summary: 'Void Authorized Payment',
                description:
                  'Voids an authorized PayPal account payment, by ID. You cannot void an authorized payment that has been fully captured.',
                value: '5C908745JK343851U',
              },
            },
          },
        }),
    }),
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
      'PayPal-Request-Id': PaypalRequestIdParamsSchema,
      Prefer: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .default('return=minimal')
        .exactOptional()
        .openapi({
          param: {
            name: 'Prefer',
            description:
              'The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              minLength: 0,
              maxLength: 2147483647,
              pattern: '^[\\S\\s]*$',
              default: 'return=minimal',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows authorization details. This response is returned when the Prefer header is set to return=representation.',
      content: {
        'application/json': {
          schema: Authorization_2Schema,
          examples: {
            authorizations_void_200_idempotent_response: {
              summary: 'Void Authorized Payment',
              description:
                'Voids an authorized PayPal account payment, by ID. You cannot void an authorized payment that has been fully captured.',
              value: {
                id: '5C908745JK343851U',
                status: 'VOIDED',
                amount: { currency_code: 'USD', value: '100.00' },
                invoice_id: 'OrderInvoice-10_10_2024_12_06_00_pm',
                seller_protection: {
                  status: 'ELIGIBLE',
                  dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                },
                expiration_time: '2024-11-08T09:06:03-08:00',
                create_time: '2024-10-10T10:06:03-07:00',
                update_time: '2024-10-10T10:06:19-07:00',
                links: [
                  {
                    href: 'https://api.paypal.com/v2/payments/authorizations/5C908745JK343851U',
                    rel: 'self',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    204: _204ResponseResponse,
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    409: {
      description:
        'The request failed because a previous call for the given resource is in progress.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            authorizations_void_409_conflict: {
              summary: 'Void Authorized Payment - 409 Conflict - Operation in Progress Error',
              description:
                'This code sample attempts to void an authorized payment but the request fails because a previous call for the given resource is in progress.',
              value: {
                name: 'RESOURCE_CONFLICT',
                debug_id: 'b1d1f06c7246c',
                message: 'The server has detected a conflict while processing this request.',
                details: [
                  {
                    issue: 'PREVIOUS_REQUEST_IN_PROGRESS',
                    description:
                      'A previous request on this resource is currently in progress. Please wait for sometime and try again. It is best to space out the initial and the subsequent request(s) to avoid receiving this error.',
                  },
                ],
              },
            },
          },
        },
      },
    },
    422: {
      description:
        'The request failed because it either is semantically incorrect or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            authorizations_void_422_already_captured: {
              summary:
                'Void Authorized Payment - 422 Unprocessable Entity - Authorization Previously Captured Error',
              description:
                'This code sample attempts to void an authorized payment but the request fails because has already been captured and cannot be voided.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: 'a7b0de7cb97ad',
                details: [
                  {
                    issue: 'PREVIOUSLY_CAPTURED',
                    description: 'Authorization has been previously captured and cannot be voided.',
                  },
                ],
                links: [
                  {
                    href: 'https://developer.paypal.com/docs/api/payments/v2/#error-PREVIOUSLY_CAPTURED',
                    rel: 'information_link',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  callbacks: {
    authorization_voided: AuthorizationVoidedCallback,
    authorization_voided_expired: AuthorizationVoidedExpiredCallback,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/payments/payment/authcapture'] }],
})

export const getV2PaymentsCapturesCaptureIdRoute = createRoute({
  method: 'get',
  path: '/v2/payments/captures/{capture_id}',
  tags: ['captures'],
  summary: 'Show captured payment details',
  description: 'Shows details for a captured payment, by ID.',
  operationId: 'captures.get',
  request: {
    params: z.object({
      capture_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .openapi({
          param: {
            name: 'capture_id',
            description:
              'The PayPal-generated ID for the captured payment for which to show details.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^[\\S\\s]*$' },
            examples: {
              capture_get_with_paypal_fee_receivable_currency: {
                summary: 'Show Captured Payment Details',
                description: 'Shows details for a captured payment, by ID.',
                value: '74L756601X447022Y',
              },
            },
          },
        }),
    }),
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows captured payment details.',
      content: {
        'application/json': {
          schema: Capture_2Schema,
          examples: {
            capture_get_with_paypal_fee_receivable_currency: {
              summary: 'Show Captured Payment Details',
              description: 'Shows details for a captured payment, by ID.',
              value: {
                id: '74L756601X447022Y',
                amount: { currency_code: 'USD', value: '100.00' },
                final_capture: true,
                seller_protection: {
                  status: 'ELIGIBLE',
                  dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                },
                seller_receivable_breakdown: {
                  gross_amount: { currency_code: 'USD', value: '100.00' },
                  paypal_fee: { currency_code: 'USD', value: '3.98' },
                  net_amount: { currency_code: 'USD', value: '96.02' },
                },
                invoice_id: 'OrderInvoice-23_10_2024_12_27_32_pm',
                status: 'COMPLETED',
                supplementary_data: {
                  related_ids: {
                    order_id: '25M43554V9523650M',
                    authorization_id: '0T620041CK889853A',
                  },
                },
                payee: { email_address: 'merchant@example.com', merchant_id: 'YXZY75W2GKDQE' },
                create_time: '2024-10-23T20:55:19Z',
                update_time: '2024-10-23T20:55:19Z',
                links: [
                  {
                    href: 'https://api-m.sandbox.paypal.com/v2/payments/captures/74L756601X447022Y',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.sandbox.paypal.com/v2/payments/captures/74L756601X447022Y/refund',
                    rel: 'refund',
                    method: 'POST',
                  },
                  {
                    href: 'https://api-m.sandbox.paypal.com/v2/payments/authorizations/0T620041CK889853A',
                    rel: 'up',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/payments/payment/authcapture'] }],
})

export const postV2PaymentsCapturesCaptureIdRefundRoute = createRoute({
  method: 'post',
  path: '/v2/payments/captures/{capture_id}/refund',
  tags: ['captures'],
  summary: 'Refund captured payment',
  description:
    'Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an <code>amount</code> object in the JSON request body.',
  operationId: 'captures.refund',
  request: {
    params: z.object({
      capture_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .openapi({
          param: {
            name: 'capture_id',
            description: 'The PayPal-generated ID for the captured payment to refund.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^[\\S\\s]*$' },
            examples: {
              captures_refund_200_idempotent_response: {
                summary: 'Refund Captured Payment - 200 idempotent response',
                description:
                  'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
                value: '2GG279541U471931P',
              },
              captures_refund_empty_request: {
                summary: 'Refund Captured Payment with an empty request',
                description:
                  'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
                value: '7TK53561YB803214S',
              },
              captures_refund_with_prefer_header: {
                summary: 'Refund Captured Payment',
                description:
                  'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
                value: '2GG279541U471931P',
              },
            },
          },
        }),
    }),
    headers: z.object({
      'PayPal-Request-Id': PaypalRequestIdParamsSchema,
      Prefer: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .default('return=minimal')
        .exactOptional()
        .openapi({
          param: {
            name: 'Prefer',
            description:
              'The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              minLength: 0,
              maxLength: 2147483647,
              pattern: '^[\\S\\s]*$',
              default: 'return=minimal',
            },
            examples: {
              captures_refund_200_idempotent_response: {
                summary: 'Refund Captured Payment - 200 idempotent response',
                description:
                  'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
                value: 'return=representation',
              },
              captures_refund_with_prefer_header: {
                summary: 'Refund Captured Payment',
                description:
                  'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
                value: 'return=representation',
              },
              captures_refund_empty_request: {
                summary: 'Refund Captured Payment with an empty request',
                description:
                  'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
                value: 'return=representation',
              },
            },
          },
        }),
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: RefundRequestSchema,
          examples: {
            captures_refund_200_idempotent_response: {
              summary: 'Refund Captured Payment - 200 idempotent response',
              description:
                'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
              value: {
                amount: { value: '1.00', currency_code: 'USD' },
                invoice_id: 'RefundInvoice-123',
                custom_id: 'RefundCustom-123',
              },
            },
            captures_refund_empty_request: {
              summary: 'Refund Captured Payment with an empty request',
              description:
                'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
              value: {},
            },
            captures_refund_with_prefer_header: {
              summary: 'Refund Captured Payment',
              description:
                'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
              value: {
                amount: { value: '10.99', currency_code: 'USD' },
                invoice_id: 'INVOICE-123',
                note: 'Defective product',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows refund details.',
      content: {
        'application/json': {
          schema: RefundSchema,
          examples: {
            captures_refund_200_idempotent_response: {
              summary: 'Refund Captured Payment - 200 idempotent response',
              description:
                'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
              value: {
                id: '0K35355239430361V',
                amount: { currency_code: 'USD', value: '1.00' },
                seller_payable_breakdown: {
                  gross_amount: { currency_code: 'USD', value: '1.00' },
                  paypal_fee: { currency_code: 'USD', value: '0.00' },
                  net_amount: { currency_code: 'USD', value: '1.00' },
                  total_refunded_amount: { currency_code: 'USD', value: '11.00' },
                },
                invoice_id: 'RefundInvoice-14_10_2024_4_58_32_pm',
                custom_id: 'RefundCustom-14_10_2024_4_58_32_pm',
                status: 'COMPLETED',
                create_time: '2024-10-14T14:58:34-07:00',
                update_time: '2024-10-14T14:58:34-07:00',
                links: [
                  {
                    href: 'https://api.paypal.com/v2/payments/refunds/0K35355239430361V',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://api.paypal.com/v2/payments/captures/7TK53561YB803214S',
                    rel: 'up',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    201: {
      description:
        'A successful request returns the HTTP <code>201 Created</code> status code and a JSON response body that shows refund details.',
      content: {
        'application/json': {
          schema: RefundSchema,
          examples: {
            captures_refund_empty_request: {
              summary: 'Refund Captured Payment with an empty request',
              description:
                'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
              value: {
                id: '58K15806CS993444T',
                amount: { currency_code: 'USD', value: '89.00' },
                seller_payable_breakdown: {
                  gross_amount: { currency_code: 'USD', value: '89.00' },
                  paypal_fee: { currency_code: 'USD', value: '0.00' },
                  net_amount: { currency_code: 'USD', value: '89.00' },
                  total_refunded_amount: { currency_code: 'USD', value: '100.00' },
                },
                invoice_id: 'OrderInvoice-10_10_2024_12_58_20_pm',
                status: 'COMPLETED',
                create_time: '2024-10-14T15:03:29-07:00',
                update_time: '2024-10-14T15:03:29-07:00',
                links: [
                  {
                    href: 'https://api.msmaster.qa.paypal.com/v2/payments/refunds/58K15806CS993444T',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://api.msmaster.qa.paypal.com/v2/payments/captures/7TK53561YB803214S',
                    rel: 'up',
                    method: 'GET',
                  },
                ],
              },
            },
            captures_refund_with_prefer_header: {
              summary: 'Refund Captured Payment',
              description:
                'Refunds a captured payment, by ID. For a full refund, include an empty payload in the request body. For a partial refund, include an `amount` object.',
              value: {
                id: '1JU08902781691411',
                amount: { value: '10.99', currency_code: 'USD' },
                status: 'COMPLETED',
                note: 'Defective product',
                seller_payable_breakdown: {
                  gross_amount: { value: '10.99', currency_code: 'USD' },
                  paypal_fee: { value: '0', currency_code: 'USD' },
                  net_amount: { value: '10.99', currency_code: 'USD' },
                  total_refunded_amount: { value: '10.99', currency_code: 'USD' },
                },
                invoice_id: 'INVOICE-123',
                create_time: '2018-09-11T23:24:19Z',
                update_time: '2018-09-11T23:24:19Z',
                links: [
                  {
                    rel: 'self',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/refunds/1JU08902781691411',
                  },
                  {
                    rel: 'up',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/captures/2GG279541U471931P',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'The request failed because it is not well-formed or is syntactically incorrect or violates schema.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            capture_refund_400_invalid_request: {
              summary: 'Refund Captured Payment - 400 Bad Request - Validation Error',
              description:
                'This code sample attempts to refund a captured payment, but the request fails because a validation error occurred.',
              value: {
                name: 'INVALID_REQUEST',
                message: 'Request is not well-formed, syntactically incorrect, or violates schema',
                debug_id: '78916e688cf7f',
                details: [
                  {
                    issue: 'INVALID_STRING_LENGTH',
                    field: '/invoice_id',
                    value:
                      'Fm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinqFm67fYiinq',
                    description: 'The value of a field is either too short or too long.',
                    location: 'body',
                  },
                ],
                links: [
                  {
                    href: 'https://developer.paypal.com/docs/api/payments/v2/#error-INVALID_STRING_LENGTH',
                    rel: 'information_link',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    409: {
      description:
        'The request failed because a previous call for the given resource is in progress.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            captures_refund_409_conflict: {
              summary: 'Refund Captured Payment - 409 Conflict - Operation in Progress Error',
              description:
                'This code sample attempts to refund a captured payment but the request fails because a previous call for the given resource is in progress.',
              value: {
                name: 'RESOURCE_CONFLICT',
                debug_id: 'b1d1f06c7246c',
                message: 'The server has detected a conflict while processing this request.',
                details: [
                  {
                    issue: 'PREVIOUS_REQUEST_IN_PROGRESS',
                    description:
                      'A previous request on this resource is currently in progress. Please wait for some time and try again. It is best to space out the initial and the subsequent request(s) to avoid receiving this error.',
                  },
                ],
              },
            },
          },
        },
      },
    },
    422: {
      description:
        'The request failed because it either is semantically incorrect or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            captures_refund_422_amount_exceeded: {
              summary:
                'Refund Captured Payment - 422 Unprocessable Entity - Refund Amount Exceeded Error',
              description:
                'This code sample attempts to refund a captured payment, but the request fails because the refund amount has exceeded the capture amount.',
              value: {
                name: 'UNPROCCESSABLE_ENTITY',
                message:
                  'The requested action could not be completed, is semantically incorrect, or failed business validation.',
                debug_id: '90bff07028f7f',
                details: [
                  {
                    issue: 'REFUND_AMOUNT_EXCEEDED',
                    description:
                      'The refund amount must be less than or equal to the capture amount that has not yet been refunded.',
                  },
                ],
              },
            },
            captures_refund_422_transaction_disputed: {
              summary:
                'Refund Captured Payment - 422 Unprocessable Entity - Capture Disputed Partial Refund Error',
              description:
                'This code sample attempts to partially refund a captured payment, but the request fails because the captured payment is currently under dispute.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: '90bff07028f7f',
                details: [
                  {
                    issue: 'TRANSACTION_DISPUTED',
                    description:
                      'Partial refunds cannot be offered at this time because there is an open case on this transaction. Visit the PayPal Resolution Center to review this case.',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  callbacks: { capture_refunded: CaptureRefundedCallback },
  security: [{ Oauth2: ['https://uri.paypal.com/services/payments/refund'] }],
})

export const postV2PaymentsFindEligibleMethodsRoute = createRoute({
  method: 'post',
  path: '/v2/payments/find-eligible-methods',
  tags: ['find-eligible-methods'],
  summary: 'Find a list of eligible payment methods.',
  description: 'Get a list of eligible payment methods based on the input parameters provided.',
  operationId: 'find.eligible.methods',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
      'User-Agent': UserAgentParamsSchema,
      'PayPal-Client-Metadata-Id': PaypalClientMetadataIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: FindEligibleMethodsRequestSchema,
          examples: {
            find_eligible_payment_methods_exclude_payment_sources: {
              summary: 'Eligible Payment Methods - Exclude listed payment methods',
              description: 'Eligible Payment Methods - Exclude listed payment methods',
              value: {
                customer: {
                  country_code: 'US',
                  channel: { browser_type: 'SAFARI', device_type: 'MOBILE', client_os: 'IOS' },
                },
                purchase_units: [{ amount: { currency_code: 'USD', value: '100.00' } }],
                preferences: {
                  payment_source_constraint: {
                    constraint_type: 'EXCLUDE',
                    payment_sources: ['PAYPAL'],
                  },
                },
              },
            },
            find_eligible_payment_methods_for_partner_with_multiple_seller_purchase: {
              summary:
                'Eligible Payment Methods for a customer who is purchasing from multiple sellers',
              description:
                'Eligible Payment Methods for a customer who is purchasing from multiple sellers.',
              value: {
                customer: {
                  country_code: 'US',
                  channel: { browser_type: 'SAFARI', device_type: 'MOBILE', client_os: 'IOS' },
                },
                purchase_units: [
                  {
                    payee: { merchant_id: 'NGHNXQ95SRMUY' },
                    amount: { currency_code: 'USD', value: '200.00' },
                  },
                  {
                    payee: { merchant_id: '2DDJ3PFG2VFFA' },
                    amount: { currency_code: 'USD', value: '300.00' },
                  },
                ],
              },
            },
            find_eligible_payment_methods_merchant_sharing_user_agent_instead_of_channel: {
              summary: 'Eligible Payment Methods with User-Agent header',
              description:
                'Eligible Payment Methods for merchant sharing User-Agent instead of channel.',
              value: {
                customer: { country_code: 'US' },
                purchase_units: [{ amount: { currency_code: 'USD', value: '100.00' } }],
              },
            },
            find_eligible_payment_methods_not_requiring_payment_tokens: {
              summary: 'Eligible Payment Methods without payment token information',
              description: 'Eligible Payment Methods without payment token information.',
              value: {
                customer: {
                  country_code: 'US',
                  channel: { browser_type: 'Safari', device_type: 'Mobile', client_os: 'iOs 16,3' },
                },
                purchase_units: [
                  {
                    payee: { merchant_id: 'NGHNXQ95SRMUY' },
                    amount: { currency_code: 'USD', value: '200.00' },
                  },
                ],
              },
            },
            find_eligible_payment_methods_with_account_details_searchedBy_email_only_honey_account_found:
              {
                summary: 'Customer recognition using customer email and phone number',
                description:
                  'Eligible payment methods along with PayPal and Venmo account confirmation for merchants sharing customer email and phone number.',
                value: {
                  customer: {
                    country_code: 'US',
                    email: 'customer12345@gmail.com',
                    phone: { country_code: '1', national_number: '1234567890' },
                  },
                  purchase_units: [{ amount: { currency_code: 'USD', value: '200.00' } }],
                  preferences: {
                    include_account_details: true,
                    payment_source_constraint: {
                      constraint_type: 'INCLUDE',
                      payment_sources: ['PAYPAL', 'VENMO'],
                    },
                  },
                },
              },
            find_eligible_payment_methods_with_account_details_searchedBy_email_phone_only_paypal_account_found:
              {
                summary: 'Customer recognition using customer email and phone number',
                description:
                  'Eligible payment methods along with PayPal and Venmo account confirmation for merchants sharing customer email and phone number.',
                value: {
                  customer: {
                    country_code: 'US',
                    email: 'customer12345@gmail.com',
                    phone: { country_code: '1', national_number: '1234567890' },
                  },
                  purchase_units: [{ amount: { currency_code: 'USD', value: '200.00' } }],
                  preferences: {
                    include_account_details: true,
                    payment_source_constraint: {
                      constraint_type: 'INCLUDE',
                      payment_sources: ['PAYPAL', 'VENMO'],
                    },
                  },
                },
              },
            find_eligible_payment_methods_with_account_details_searchedBy_email_phone_only_venmo_account_found:
              {
                summary: 'Customer recognition using customer email and phone number',
                description:
                  'Eligible payment methods along with PayPal and Venmo account confirmation for merchants sharing customer email and phone number.',
                value: {
                  customer: {
                    country_code: 'US',
                    email: 'customer12345@gmail.com',
                    phone: { country_code: '1', national_number: '1234567890' },
                  },
                  purchase_units: [{ amount: { currency_code: 'USD', value: '200.00' } }],
                  preferences: {
                    include_account_details: true,
                    payment_source_constraint: {
                      constraint_type: 'INCLUDE',
                      payment_sources: ['PAYPAL', 'VENMO'],
                    },
                  },
                },
              },
            find_eligible_payment_methods_with_account_details_searchedBy_email_phone_paypal_venmo_accounts_found:
              {
                summary: 'Customer recognition using customer email and phone number',
                description:
                  'Eligible payment methods along with PayPal and Venmo account confirmation for merchants sharing customer email and phone number.',
                value: {
                  customer: {
                    country_code: 'US',
                    email: 'customer12345@gmail.com',
                    phone: { country_code: '1', national_number: '1234567890' },
                  },
                  purchase_units: [{ amount: { currency_code: 'USD', value: '200.00' } }],
                  preferences: {
                    include_account_details: true,
                    payment_source_constraint: {
                      constraint_type: 'INCLUDE',
                      payment_sources: ['PAYPAL', 'VENMO'],
                    },
                  },
                },
              },
            find_eligible_payment_methods_with_payment_tokens: {
              summary: 'Eligible Payment Methods - with payment tokens',
              description: 'Eligible Payment Methods for merchant with payment token information.',
              value: {
                customer: {
                  country_code: 'US',
                  id: 'customer_4029352050',
                  channel: { browser_type: 'Safari', device_type: 'Mobile', client_os: 'iOs 16,3' },
                },
                purchase_units: [
                  {
                    payee: { merchant_id: 'NGHNXQ95SRMUY' },
                    amount: { currency_code: 'USD', value: '200.00' },
                  },
                ],
                preferences: {
                  include_vault_tokens: true,
                  payment_source_constraint: {
                    constraint_type: 'INCLUDE',
                    payment_sources: ['PAYPAL', 'VENMO'],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that provides list of eligibile payments.',
      content: {
        'application/json': {
          schema: FindEligibleMethodsResponseSchema,
          examples: {
            find_eligible_payment_methods_exclude_payment_sources: {
              summary: 'Eligible Payment Methods - Exclude listed payment methods',
              description: 'Eligible Payment Methods - Exclude listed payment methods',
              value: { eligible_methods: { venmo: { can_be_vaulted: true } } },
            },
            find_eligible_payment_methods_for_partner_with_multiple_seller_purchase: {
              summary:
                'Eligible Payment Methods for a customer who is purchasing from multiple sellers',
              description:
                'Eligible Payment Methods for a customer who is purchasing from multiple sellers.',
              value: { eligible_methods: { paypal: { can_be_vaulted: true } } },
            },
            find_eligible_payment_methods_merchant_sharing_user_agent_instead_of_channel: {
              summary: 'Eligible Payment Methods with User-Agent header',
              description:
                'Eligible Payment Methods for merchant sharing User-Agent instead of channel.',
              value: {
                eligible_methods: {
                  paypal: { can_be_vaulted: true },
                  venmo: { can_be_vaulted: true },
                },
              },
            },
            find_eligible_payment_methods_not_requiring_payment_tokens: {
              summary: 'Eligible Payment Methods without payment token information',
              description: 'Eligible Payment Methods without payment token information.',
              value: {
                eligible_methods: {
                  paypal: { can_be_vaulted: true },
                  venmo: { can_be_vaulted: true },
                  paypal_pay_later: { can_be_vaulted: false },
                },
              },
            },
            find_eligible_payment_methods_with_account_details_searchedBy_email_only_honey_account_found:
              {
                summary: 'Customer recognition using customer email and phone number',
                description:
                  'Eligible payment methods along with PayPal and Venmo account confirmation for merchants sharing customer email and phone number.',
                value: {
                  eligible_methods: {
                    paypal: {
                      can_be_vaulted: true,
                      eligible_in_paypal_network: true,
                      recommended: false,
                    },
                    venmo: {
                      can_be_vaulted: true,
                      eligible_in_paypal_network: true,
                      recommended: false,
                    },
                  },
                },
              },
            find_eligible_payment_methods_with_account_details_searchedBy_email_phone_only_paypal_account_found:
              {
                summary: 'Customer recognition using customer email and phone number',
                description:
                  'Eligible payment methods along with PayPal and Venmo account confirmation for merchants sharing customer email and phone number.',
                value: {
                  eligible_methods: {
                    paypal: {
                      can_be_vaulted: true,
                      eligible_in_paypal_network: true,
                      recommended: true,
                      recommended_priority: 1,
                    },
                    venmo: {
                      can_be_vaulted: true,
                      eligible_in_paypal_network: true,
                      recommended: false,
                    },
                  },
                },
              },
            find_eligible_payment_methods_with_account_details_searchedBy_email_phone_only_venmo_account_found:
              {
                summary: 'Customer recognition using customer email and phone number',
                description:
                  'Eligible payment methods along with PayPal and Venmo account confirmation for merchants sharing customer email and phone number.',
                value: {
                  eligible_methods: {
                    paypal: {
                      can_be_vaulted: true,
                      eligible_in_paypal_network: true,
                      recommended: false,
                    },
                    venmo: {
                      can_be_vaulted: true,
                      eligible_in_paypal_network: true,
                      recommended: true,
                      recommended_priority: 1,
                    },
                  },
                },
              },
            find_eligible_payment_methods_with_account_details_searchedBy_email_phone_paypal_venmo_accounts_found:
              {
                summary: 'Customer recognition using customer email and phone number',
                description:
                  'Eligible payment methods along with PayPal and Venmo account confirmation for merchants sharing customer email and phone number.',
                value: {
                  eligible_methods: {
                    paypal: {
                      can_be_vaulted: true,
                      eligible_in_paypal_network: true,
                      recommended: true,
                      recommended_priority: 1,
                    },
                    venmo: {
                      can_be_vaulted: true,
                      eligible_in_paypal_network: true,
                      recommended: false,
                    },
                  },
                },
              },
            find_eligible_payment_methods_with_payment_tokens: {
              summary: 'Eligible Payment Methods - with payment tokens',
              description: 'Eligible Payment Methods for merchant with payment token information.',
              value: {
                eligible_methods: {
                  paypal: { can_be_vaulted: true },
                  venmo: { can_be_vaulted: true },
                },
                payment_tokens: [
                  {
                    id: 'fgh6561t',
                    payment_source: { paypal: { email_address: 'john.doe@example.com' } },
                    links: [
                      {
                        rel: 'self',
                        href: 'https://api-m.paypal.com/v3/vault/payment-tokens/fgh656',
                        method: 'GET',
                      },
                      {
                        rel: 'delete',
                        href: 'https://api-m.paypal.com/v3/vault/payment-tokens/fgh656',
                        method: 'DELETE',
                      },
                    ],
                  },
                  {
                    id: 'hg654s1t',
                    payment_source: { venmo: { user_name: 'johndoe' } },
                    links: [
                      {
                        rel: 'self',
                        href: 'https://api-m.paypal.com/v3/vault/payment-tokens/hg654s',
                        method: 'GET',
                      },
                      {
                        rel: 'delete',
                        href: 'https://api-m.paypal.com/v3/vault/payment-tokens/hg654s',
                        method: 'DELETE',
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'The request failed because it is not well-formed or is syntactically incorrect or violates schema.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            find_eligible_payment_methods_400_with_invalid_schema: {
              summary: 'Eligible Payment Methods - 400 Invalid Request.',
              description:
                "This request attempts to get payment methods but the request fails as it has invalid length (3 instead of 2) for customer's country_code.",
              value: {
                name: 'INVALID_REQUEST',
                debug_id: 'b1d1f06c7246c',
                message: 'Request is not well-formed, syntactically incorrect, or violates schema',
                details: [
                  {
                    field: '/customer/country_code',
                    value: 'USA',
                    location: 'body',
                    issue: 'INVALID_STRING_LENGTH',
                    description: 'The value of a field is either too short or too long.',
                  },
                ],
                links: [
                  {
                    href: 'https://developer.paypal.com/docs/api/payments/v2/#errors',
                    rel: 'information_link',
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
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    422: {
      description:
        'The request failed because it either is semantically incorrect or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            find_eligible_payment_methods_422_invalid_currency_code: {
              summary: 'Eligible Payment Methods - 422 Unprocessable Entity',
              description:
                "This request attempts to get payment methods but the request fails because the currency code passed doesn't exist.",
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: '90bff07028f7f',
                details: [
                  {
                    field: '/purchase_units/amount/currency_code',
                    value: 'III',
                    issue: 'INVALID_CURRENCY_CODE',
                    description:
                      'Currency code is invalid. Please refer https://developer.paypal.com/docs/integration/direct/rest/currency-codes/ for list of supported currency codes.',
                  },
                ],
                links: [
                  {
                    href: 'https://developer.paypal.com/docs/api/payments/v2/#errors',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/payments/realtimepayment',
        'https://uri.paypal.com/services/payments/payments-ready',
        'Braintree:PaymentsReady',
        'https://uri.paypal.com/services/payments/client-payments-eligibility',
      ],
    },
  ],
})

export const getV2PaymentsRefundsRefundIdRoute = createRoute({
  method: 'get',
  path: '/v2/payments/refunds/{refund_id}',
  tags: ['refunds'],
  summary: 'Show refund details',
  description: 'Shows details for a refund, by ID.',
  operationId: 'refunds.get',
  request: {
    params: z.object({
      refund_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .openapi({
          param: {
            name: 'refund_id',
            description: 'The PayPal-generated ID for the refund for which to show details.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^[\\S\\s]*$' },
            examples: {
              refunds_get_platform_fees: {
                summary: 'Show Refund Details with Platform Fees',
                description: 'Shows details for a refund, by ID, with platform fees.',
                value: '1JU08902781691411',
              },
            },
          },
        }),
    }),
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that shows refund details.',
      content: {
        'application/json': {
          schema: RefundSchema,
          examples: {
            refunds_get_platform_fees: {
              summary: 'Show Refund Details with Platform Fees',
              description: 'Shows details for a refund, by ID, with platform fees.',
              value: {
                id: '1JU08902781691411',
                amount: { value: '10.99', currency_code: 'USD' },
                status: 'COMPLETED',
                note: 'Defective product',
                seller_payable_breakdown: {
                  gross_amount: { value: '10.99', currency_code: 'USD' },
                  paypal_fee: { value: '0.33', currency_code: 'USD' },
                  platform_fees: [
                    {
                      amount: { currency_code: 'USD', value: '1.00' },
                      payee: { email_address: 'fee@example.com' },
                    },
                  ],
                  net_amount: { value: '9.66', currency_code: 'USD' },
                  total_refunded_amount: { value: '10.99', currency_code: 'USD' },
                },
                invoice_id: 'INVOICE-123',
                create_time: '2018-09-11T23:24:19Z',
                update_time: '2018-09-11T23:24:19Z',
                links: [
                  {
                    rel: 'self',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/refunds/1JU08902781691411',
                  },
                  {
                    rel: 'up',
                    method: 'GET',
                    href: 'https://api-m.paypal.com/v2/payments/captures/2GG279541U471931P',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/payments/refund'] }],
})

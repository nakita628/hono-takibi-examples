import { createRoute, z } from '@hono/zod-openapi'

const AccountIdSchema = z
  .string()
  .regex(/^[2-9A-HJ-NP-Z]{13}$/)
  .length(13)
  .openapi({
    description:
      'The PayPal payer ID, which is a masked version of the PayPal account number intended for use with third parties. The account number is reversibly encrypted and a proprietary variant of Base32 is used to encode the result.',
  })
  .openapi('AccountId')

const CountryCodeSchema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [two-character ISO 3166-1 code](/docs/integration/direct/rest/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode')

const AddressSchema = z
  .object({
    line1: z
      .string()
      .openapi({ description: 'The first line of the address. For example, number or street.' }),
    line2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The second line of the address. For example, suite or apartment number.',
      }),
    city: z.string().openapi({ description: 'The city name.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [code](/docs/api/reference/state-codes/) for a US state or the equivalent for other countries. Required for transactions if the address is in one of these countries: [Argentina](/docs/api/reference/state-codes/#argentina), [Brazil](/docs/api/reference/state-codes/#brazil), [Canada](/docs/api/reference/state-codes/#canada), [China](/docs/api/reference/state-codes/#china), [India](/docs/api/reference/state-codes/#india), [Italy](/docs/api/reference/state-codes/#italy), [Japan](/docs/api/reference/state-codes/#japan), [Mexico](/docs/api/reference/state-codes/#mexico), [Thailand](/docs/api/reference/state-codes/#thailand), or [United States](/docs/api/reference/state-codes/#usa). Maximum length is 40 single-byte characters.',
      }),
    country_code: CountryCodeSchema,
    postal_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
      }),
  })
  .openapi({
    title: 'Simple Postal Address (Coarse-Grained)',
    description:
      'A simple postal address with coarse-grained fields. Do not use for an international address. Use for backward compatibility only. Does not contain phone.',
    required: ['line1', 'city', 'country_code'],
  })
  .openapi('Address')

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

const AuctionInfoSchema = z
  .object({
    auction_site: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(200)
      .exactOptional()
      .openapi({ description: 'The name of the auction site.' }),
    auction_item_site: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(4000)
      .exactOptional()
      .openapi({ description: 'The auction site URL.' }),
    auction_buyer_id: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'The ID of the buyer who makes the purchase in the auction. This ID might be different from the payer ID provided for the payment.',
      }),
    auction_closing_date: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the auction closes, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
  })
  .openapi({ title: 'Auction Information', description: 'The auction information.', required: [] })
  .openapi('AuctionInfo')

const CurrencyCodeSchema = z
  .string()
  .length(3)
  .openapi({
    description:
      'The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.',
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
          'The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/docs/integration/direct/rest/currency-codes/).',
      }),
  })
  .openapi({
    title: 'Money',
    description:
      'The currency and amount for a financial transaction, such as a balance or payment due.',
    required: ['currency_code', 'value'],
  })
  .openapi('Money')

const BalanceDetailSchema = z
  .object({
    currency: CurrencyCodeSchema.openapi({ description: 'Currency Code of the balances listed.' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional field representing if the currency is primary currency or not.',
      }),
    total_balance: MoneySchema.openapi({
      description: 'The total amount in PayPal account. It is the sum of all the other balances.',
    }),
    available_balance: MoneySchema.exactOptional().openapi({
      description:
        "The amount of cash in an Account which is at the customer's disposal. This amount is captured at settlement cutoff time in the user's time zone as defined for the user.",
    }),
    withheld_balance: MoneySchema.exactOptional().openapi({
      description:
        "Balance withheld in the account. The portion of funds that PayPal holds for the customer that is not currently at the customer's disposal.",
    }),
  })
  .openapi({
    title: 'Balance Information',
    description: 'The Balance information.',
    required: ['currency', 'total_balance'],
  })
  .openapi('BalanceDetail')

const BalanceDetailListSchema = z
  .array(BalanceDetailSchema)
  .min(0)
  .max(200)
  .openapi({ description: 'An array of balance detail objects.' })
  .openapi('BalanceDetailList')

const BalancesResponseSchema = z
  .object({
    balances: BalanceDetailListSchema.exactOptional(),
    account_id: AccountIdSchema.exactOptional(),
    as_of_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The requested date and time or the last date and time when the balances can be served, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    last_refresh_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the balances was last refreshed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
  })
  .openapi({
    title: 'Balances Response',
    description: 'The balances response information.',
    required: [],
  })
  .openapi('BalancesResponse')

const PercentageSchema = z
  .string()
  .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
  .openapi({
    description:
      'The percentage, as a fixed-point, signed decimal number. For example, define a 19.99% interest rate as `19.99`.',
  })
  .openapi('Percentage')

const ItemDetailTaxAmountSchema = z
  .object({
    tax_amount: MoneySchema.exactOptional().openapi({
      description: 'The tax levied by a government on the purchase of goods or services.',
    }),
  })
  .openapi({
    title: 'Tax Amount',
    description: 'The tax levied by a government on the purchase of goods or services.',
    required: [],
  })
  .openapi('ItemDetailTaxAmount')

const ItemDetailTaxAmountListSchema = z
  .array(ItemDetailTaxAmountSchema)
  .min(1)
  .max(32767)
  .openapi({
    description:
      'An array of tax amounts levied by a government on the purchase of goods or services.',
  })
  .openapi('ItemDetailTaxAmountList')

const CheckoutOptionSchema = z
  .object({
    checkout_option_name: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(200)
      .exactOptional()
      .openapi({ description: 'The checkout option name, such as `color` or `texture`.' }),
    checkout_option_value: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(200)
      .exactOptional()
      .openapi({
        description:
          'The checkout option value. For example, the checkout option `color` might be `blue` or `red` while the checkout option `texture` might be `smooth` or `rippled`.',
      }),
  })
  .openapi({
    title: 'Checkout Option',
    description: 'A checkout option as a name-and-value pair.',
    required: [],
  })
  .openapi('CheckoutOption')

const CheckoutOptionListSchema = z
  .array(CheckoutOptionSchema)
  .min(1)
  .max(32767)
  .openapi({ description: 'An array of checkout options. Each option has a name and value.' })
  .openapi('CheckoutOptionList')

const ItemDetailSchema = z
  .object({
    item_code: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(1000)
      .exactOptional()
      .openapi({ description: "An item code that identifies a merchant's goods or service." }),
    item_name: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(200)
      .exactOptional()
      .openapi({ description: 'The item name.' }),
    item_description: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The item description.' }),
    item_options: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'The item options. Describes option choices on the purchase of the item in some detail.',
      }),
    item_quantity: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(4000)
      .exactOptional()
      .openapi({ description: 'The number of purchased units of goods or a service.' }),
    item_unit_price: MoneySchema.exactOptional().openapi({
      description: 'The cost for each instance of goods or a service.',
    }),
    item_amount: MoneySchema.exactOptional().openapi({
      description: 'The amount of the payment for the item.',
    }),
    discount_amount: MoneySchema.exactOptional().openapi({
      description: 'The reduction in price associated with goods or a service.',
    }),
    adjustment_amount: MoneySchema.exactOptional().openapi({
      description: 'An increment or decrement to a purchase amount.',
    }),
    gift_wrap_amount: MoneySchema.exactOptional().openapi({
      description: 'The amount of money charged for gift wrapping an item.',
    }),
    tax_percentage: PercentageSchema.exactOptional().openapi({
      description:
        'A rate, expressed in hundreds, that is used to calculate a levy for the purchase of goods or services.',
    }),
    tax_amounts: ItemDetailTaxAmountListSchema.exactOptional(),
    basic_shipping_amount: MoneySchema.exactOptional().openapi({
      description: 'The delivery cost.',
    }),
    extra_shipping_amount: MoneySchema.exactOptional().openapi({
      description: 'The cost for expedited delivery of the goods.',
    }),
    handling_amount: MoneySchema.exactOptional().openapi({
      description: 'A charge for processing the purchase of goods or services.',
    }),
    insurance_amount: MoneySchema.exactOptional().openapi({
      description: 'A charge for guaranteeing the quality of a product or delivery of a product.',
    }),
    total_item_amount: MoneySchema.exactOptional().openapi({
      description:
        'The sum of all factors, item cost, discounts, tax, shipping, and so on, that goes into the cost of an item.',
    }),
    invoice_number: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(200)
      .exactOptional()
      .openapi({
        description:
          'The invoice number. An alphanumeric string that identifies a billing for a merchant.',
      }),
    checkout_options: CheckoutOptionListSchema.exactOptional(),
  })
  .openapi({ title: 'Item Details', description: 'The item details.', required: [] })
  .openapi('ItemDetail')

const ItemDetailListSchema = z
  .array(ItemDetailSchema)
  .min(1)
  .max(32767)
  .openapi({ description: 'An array of item details.' })
  .openapi('ItemDetailList')

const CartInfoSchema = z
  .object({
    item_details: ItemDetailListSchema.exactOptional(),
    tax_inclusive: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the item amount or the shipping amount already includes tax.',
      }),
    paypal_invoice_id: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description: 'The ID of the invoice. Appears for only PayPal-generated invoices.',
      }),
  })
  .openapi({ title: 'Cart Information', description: 'The cart information.', required: [] })
  .openapi('CartInfo')

const EmailAddressSchema = z
  .string()
  .regex(/^.+@[^"\-].+$/)
  .min(3)
  .max(254)
  .openapi({
    description:
      'The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>',
  })
  .openapi('EmailAddress')

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

const IncentiveDetailSchema = z
  .object({
    incentive_type: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: 'The type of incentive, such as a special offer or coupon.' }),
    incentive_code: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(200)
      .exactOptional()
      .openapi({ description: 'The code that identifies an incentive, such as a coupon.' }),
    incentive_amount: MoneySchema.exactOptional().openapi({ description: 'The incentive amount.' }),
    incentive_program_code: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The incentive program code that identifies a merchant loyalty or incentive program.',
      }),
  })
  .openapi({ title: 'Incentive Details', description: 'The incentive details.', required: [] })
  .openapi('IncentiveDetail')

const IncentiveDetailListSchema = z
  .array(IncentiveDetailSchema)
  .min(1)
  .max(32767)
  .openapi({ description: 'An array of incentive details.' })
  .openapi('IncentiveDetailList')

const IncentiveInfoSchema = z
  .object({ incentive_details: IncentiveDetailListSchema.exactOptional() })
  .openapi({ title: 'Incentive Information', description: 'The incentive details.', required: [] })
  .openapi('IncentiveInfo')

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
      'The request-related [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('LinkDescription')

const LinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(1)
  .max(32767)
  .openapi({
    description: 'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('LinkDescriptionList')

const NameSchema = z
  .object({
    prefix: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "The prefix, or title, to the party's name." }),
    given_name: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's given, or first, name." }),
    surname: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.",
      }),
    middle_name: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the party is a person, the party's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.",
      }),
    suffix: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "The suffix for the party's name." }),
    alternate_full_name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          "DEPRECATED. The party's alternate name. Can be a business name, nickname, or any other name that cannot be split into first, last name. Required when the party is a business.",
      }),
    full_name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's full name." }),
  })
  .openapi({ title: 'Name', description: 'The name of the party.', required: [] })
  .openapi('Name')

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

const PayerInfoSchema = z
  .object({
    account_id: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(13)
      .exactOptional()
      .openapi({ description: 'The PayPal` customer account ID.' }),
    email_address: EmailAddressSchema.exactOptional().openapi({
      description: 'The email address of the payer.',
    }),
    phone_number: PhoneSchema.exactOptional().openapi({
      description: 'The primary phone number of the payer.',
    }),
    address_status: z
      .string()
      .regex(/^[N|Y]$/)
      .length(1)
      .exactOptional()
      .openapi({
        description:
          'The address status of the payer. Value is either:<ul><li><code>Y</code>. Verified.</li><li><code>N</code>. Not verified.</li></ul>',
      }),
    payer_status: z
      .string()
      .regex(/^[N|Y]$/)
      .length(1)
      .exactOptional()
      .openapi({ description: 'The status of the payer. Value is `Y` or `N`.' }),
    payer_name: NameSchema.exactOptional().openapi({ description: 'The payer name.' }),
    country_code: CountryCodeSchema.exactOptional().openapi({
      description:
        'The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region of the payer.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
    }),
    address: AddressSchema.exactOptional().openapi({ description: 'The payer address.' }),
  })
  .openapi({ title: 'Payer Information', description: 'The payer information.', required: [] })
  .openapi('PayerInfo')

const TransactionInfoSchema = z
  .object({
    paypal_account_id: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(24)
      .exactOptional()
      .openapi({ description: 'The ID of the PayPal account of the counterparty.' }),
    transaction_id: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(24)
      .exactOptional()
      .openapi({ description: 'The PayPal-generated transaction ID.', readOnly: true }),
    paypal_reference_id: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(24)
      .exactOptional()
      .openapi({
        description:
          'The PayPal-generated base ID. PayPal exclusive. Cannot be altered. Defined as a related, pre-existing transaction or event.',
      }),
    paypal_reference_id_type: z
      .enum(['ODR', 'TXN', 'SUB', 'PAP'])
      .exactOptional()
      .openapi({
        description: 'The PayPal reference ID type.',
        'x-enumDescriptions': [
          { value: 'ODR', description: 'An order ID.' },
          { value: 'TXN', description: 'A transaction ID.' },
          { value: 'SUB', description: 'A subscription ID.' },
          { value: 'PAP', description: 'A pre-approved payment ID.' },
        ],
      }),
    transaction_event_code: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(5)
      .exactOptional()
      .openapi({
        description:
          'A five-digit transaction event code that classifies the transaction type based on money movement and debit or credit. For example, <code>T0001</code>. See [Transaction event codes](/docs/integration/direct/transaction-search/transaction-event-codes/).',
      }),
    transaction_initiation_date: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when work on a transaction began in the PayPal system, as expressed in the time zone of the account on this side of the payment. Specify the value in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    transaction_updated_date: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the transaction was last changed, as expressed in the time zone of the account on this side of the payment. Specify the value in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    transaction_amount: MoneySchema.exactOptional().openapi({
      description:
        'The all-inclusive gross transaction amount that was transferred between the sender and receiver through PayPal.',
    }),
    fee_amount: MoneySchema.exactOptional().openapi({
      description:
        'The PayPal fee amount. All transaction fees are included in this amount, which is the record of fee associated with the transaction.<blockquote><strong>Note:</strong> This field contains a value only when a transaction fee is applied and processed for this transaction.</blockquote>',
    }),
    discount_amount: MoneySchema.exactOptional().openapi({
      description:
        'The reduction in price offered for goods or services purchased.<blockquote><strong>Note:</strong> This discount is for a price reduction that is offered for other than that at a individual item level.</blockquote>',
    }),
    insurance_amount: MoneySchema.exactOptional().openapi({
      description: 'An insurance charge. Guarantees the quality or delivery of a product.',
    }),
    sales_tax_amount: MoneySchema.exactOptional().openapi({
      description: 'The PayPal- or merchant-reported sales tax amount for the transaction.',
    }),
    shipping_amount: MoneySchema.exactOptional().openapi({
      description: 'The PayPal- or merchant-reported shipping amount for the transaction.',
    }),
    shipping_discount_amount: MoneySchema.exactOptional().openapi({
      description: 'The discount on the shipping amount.',
    }),
    shipping_tax_amount: MoneySchema.exactOptional().openapi({
      description: 'The tax on the shipping service.',
    }),
    other_amount: MoneySchema.exactOptional().openapi({
      description: 'The special amount that is added to the transaction.',
    }),
    tip_amount: MoneySchema.exactOptional().openapi({ description: 'The tip.' }),
    transaction_status: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .length(1)
      .exactOptional()
      .openapi({
        description:
          'A code that indicates the transaction status. Value is:<table><thead><tr><th>Status&nbsp;code</th><th>Description</th></tr></thead><tbody><tr><td><code>D</code></td><td>PayPal or merchant rules denied the transaction.</td></tr><tr><td><code>P</code></td><td>The transaction is pending. The transaction was created but waits for another payment process to complete, such as an ACH transaction, before the status changes to <code>S</code>.</td></tr><tr><td><code>S</code></td><td>The transaction successfully completed without a denial and after any pending statuses.</td></tr><tr><td><code>V</code></td><td>A successful transaction was fully reversed and funds were refunded to the original sender.</td></tr></tbody></table>',
      }),
    transaction_subject: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'The subject of payment. The payer passes this value to the payee. The payer controls this data through the interface through which he or she sends the data.',
      }),
    transaction_note: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'A special note that the payer passes to the payee. Might contain special customer requests, such as shipping instructions.',
      }),
    payment_tracking_id: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The payment tracking ID, which is a unique ID that partners specify to either get information about a payment or request a refund.',
      }),
    bank_reference_id: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description: 'The bank reference ID. The bank provides this value for an ACH transaction.',
      }),
    ending_balance: MoneySchema.exactOptional().openapi({
      description:
        'The ending balance.<blockquote><strong>Note:</strong> If you specify one or more optional query parameters, the <code>ending_balance</code> response field is empty.</blockquote>',
    }),
    available_balance: MoneySchema.exactOptional().openapi({
      description:
        'The available amount of transaction currency during the completion of this transaction.',
    }),
    invoice_id: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The invoice ID that is sent by the merchant with the transaction.<blockquote><strong>Note:</strong> If an invoice ID was sent with the capture request, the value is reported. Otherwise, the invoice ID of the authorizing transaction is reported.</blockquote>',
      }),
    custom_field: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The merchant-provided custom text.<blockquote><strong>Note:</strong> Usually, this field includes the unique ID for payments made with MassPay type transaction.</blockquote>',
      }),
    protection_eligibility: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(2)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the transaction is eligible for protection. Value is:<ul><li><code>01</code>. Eligible.</li><li><code>02</code>. Not eligible</li><li><code>03</code>. Partially eligible.</li></ul>',
      }),
    credit_term: z
      .string()
      .regex(/^[a-zA-Z0-9.]*$/)
      .min(1)
      .max(25)
      .exactOptional()
      .openapi({
        description:
          'The credit term. The time span covered by the installment payments as expressed in the term length plus the length time unit code.',
      }),
    credit_transactional_fee: MoneySchema.exactOptional().openapi({
      description: 'The overall amount of the credit transaction fee.',
    }),
    credit_promotional_fee: MoneySchema.exactOptional().openapi({
      description: 'The overall amount of the credit promotional fee.',
    }),
    annual_percentage_rate: PercentageSchema.exactOptional().openapi({
      description:
        'The annual percentage rate (APR). Determines the amount of interest a consumer pays to finance a purchase at a merchant.',
    }),
    payment_method_type: z
      .string()
      .regex(/^[a-zA-Z0-9-]*$/)
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({
        description:
          'The payment method that was used for a transaction. Value is <code>PUI</code>, <code>installment</code>, or <code>mEFT</code>.<blockquote><strong>Note:</strong> Appears only for pay upon invoice (PUI), installment, and mEFT transactions. Merchants and partners in the EMEA region can use this attribute to note transactions that attract turn-over tax.</blockquote>',
      }),
    instrument_type: z
      .string()
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'A high-level classification of the type of financial instrument that was used to fund a payment. The pattern is not provided because the value is defined by an external party. E.g. PAYPAL, CREDIT_CARD, DEBIT_CARD, APPLE_PAY, BANK , VENMO ,Pay Upon Invoice, Pay Later  or <a href="https://developer.paypal.com/docs/checkout/integration-features/alternative-payment-methods/" title="Link to available APM list">Alternative Payment Methods (APM)</a>.',
      }),
    instrument_sub_type: z
      .string()
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'A finer-grained classification of the financial instrument that was used to fund a payment. For example, `Visa card` or a `Mastercard` for a credit card, BANKCARD ,DISCOVER etc. The pattern is not provided because the value is defined by an external party.',
      }),
  })
  .openapi({
    title: 'Transaction Information',
    description: 'The transaction information.',
    required: [],
  })
  .openapi('TransactionInfo')

const ShippingInfoSchema = z
  .object({
    name: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: "The recipient's name." }),
    method: z
      .string()
      .regex(/^[a-zA-Z0-9_'\-., ":;\!?]*$/)
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: 'The shipping method that is associated with this order.' }),
    address: AddressSchema.exactOptional().openapi({
      description: 'The shipping address that is associated with this order.',
    }),
    secondary_shipping_address: AddressSchema.exactOptional().openapi({
      description: 'The secondary shipping address that is associated with this order.',
    }),
  })
  .openapi({
    title: 'Shipping Information',
    description: 'The shipping information.',
    required: [],
  })
  .openapi('ShippingInfo')

const StoreInfoSchema = z
  .object({
    store_id: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({ description: 'The ID of a store for a merchant in the system of record.' }),
    terminal_id: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(60)
      .exactOptional()
      .openapi({ description: 'The terminal ID for the checkout stand in a merchant store.' }),
  })
  .openapi({ title: 'Store Information', description: 'The store information.', required: [] })
  .openapi('StoreInfo')

const TransactionDetailSchema = z
  .object({
    transaction_info: TransactionInfoSchema.exactOptional().openapi({
      description: 'The transaction information.',
    }),
    payer_info: PayerInfoSchema.exactOptional().openapi({ description: 'The payer information.' }),
    shipping_info: ShippingInfoSchema.exactOptional().openapi({
      description: 'The shipping information.',
    }),
    cart_info: CartInfoSchema.exactOptional().openapi({ description: 'The cart information.' }),
    store_info: StoreInfoSchema.exactOptional().openapi({ description: 'The store information.' }),
    auction_info: AuctionInfoSchema.exactOptional().openapi({
      description: 'The auction information.',
    }),
    incentive_info: IncentiveInfoSchema.exactOptional().openapi({
      description: 'The incentive information.',
    }),
  })
  .openapi({ title: 'Transaction Details', description: 'The transaction details.', required: [] })
  .openapi('TransactionDetail')

const TransactionDetailListSchema = z
  .array(TransactionDetailSchema)
  .min(1)
  .max(2147483647)
  .openapi({ description: 'An array of transaction detail objects.' })
  .openapi('TransactionDetailList')

const SearchResponseSchema = z
  .object({
    transaction_details: TransactionDetailListSchema.exactOptional(),
    account_number: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The merchant account number.' }),
    start_date: DateTimeSchema.exactOptional().openapi({
      description:
        'The start date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    end_date: DateTimeSchema.exactOptional().openapi({
      description:
        'The end date and time or the last date when the data can be served, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    last_refreshed_datetime: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the data was last refreshed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    page: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'A zero-relative index of transactions.' }),
    total_items: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The total number of transactions as an integer beginning with the specified `page` in the full result and not just in this response.',
      }),
    total_pages: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The total number of pages, as an `integer`, when the `total_items` is divided into pages of the specified `page_size`.',
      }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Search Response',
    description: 'The search response information.',
    required: [],
  })
  .openapi('SearchResponse')

const DefaultResponse = {
  description: 'The default response.',
  content: { 'application/json': { schema: ErrorDefaultSchema } },
}

const TransactionIdParamsSchema = z
  .string()
  .min(17)
  .max(19)
  .exactOptional()
  .openapi({
    param: {
      name: 'transaction_id',
      in: 'query',
      description:
        'Filters the transactions in the response by a PayPal transaction ID. A valid transaction ID is 17 characters long, except for an <a href="/docs/api/payments/v1/#definition-order">order ID</a>, which is 19 characters long.<blockquote><strong>Note:</strong> A transaction ID is not unique in the reporting system. The response can list two transactions with the same ID. One transaction can be balance affecting while the other is non-balance affecting.</blockquote>',
      schema: { type: 'string', minLength: 17, maxLength: 19 },
      required: false,
    },
  })

const TransactionTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'transaction_type',
      in: 'query',
      description:
        'Filters the transactions in the response by a PayPal transaction event code. See [Transaction event codes](/docs/integration/direct/transaction-search/transaction-event-codes/).',
      schema: { type: 'string' },
      required: false,
    },
  })

const TransactionStatusParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'transaction_status',
      in: 'query',
      description:
        'Filters the transactions in the response by a PayPal transaction status code. Value is:<table><thead><tr><th>Status&nbsp;code</th><th>Description</th></tr></thead><tbody><tr><td><code>D</code></td><td>PayPal or merchant rules denied the transaction.</td></tr><tr><td><code>P</code></td><td>The transaction is pending. The transaction was created but waits for another payment process to complete, such as an ACH transaction, before the status changes to <code>S</code>.</td></tr><tr><td><code>S</code></td><td>The transaction successfully completed without a denial and after any pending statuses.</td></tr><tr><td><code>V</code></td><td>A successful transaction was reversed and funds were refunded to the original sender.</td></tr></tbody></table>',
      schema: { type: 'string' },
      required: false,
    },
  })

const TransactionAmountParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'transaction_amount',
      in: 'query',
      description:
        'Filters the transactions in the response by a gross transaction amount range. Specify the range as `<start-range> TO <end-range>`, where `<start-range>` is the lower limit of the gross PayPal transaction amount and `<end-range>` is the upper limit of the gross transaction amount. Specify the amounts in lower denominations. For example, to search for transactions from $5.00 to $10.05, specify `[500 TO 1005]`.<blockquote><strong>Note:</strong>The values must be URL encoded.</blockquote>',
      schema: { type: 'string' },
      required: false,
    },
  })

const TransactionCurrencyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'transaction_currency',
      in: 'query',
      description:
        'Filters the transactions in the response by a [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) for the PayPal transaction currency.',
      schema: { type: 'string' },
      required: false,
    },
  })

const StartDateParamsSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .openapi({
    param: {
      name: 'start_date',
      in: 'query',
      description:
        'Filters the transactions in the response by a start date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required. Fractional seconds are optional.',
      required: true,
      schema: {
        type: 'string',
        minLength: 20,
        maxLength: 64,
        pattern:
          '^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$',
      },
    },
  })

const EndDateParamsSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .openapi({
    param: {
      name: 'end_date',
      in: 'query',
      description:
        'Filters the transactions in the response by an end date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required. Fractional seconds are optional. The maximum supported range is 31 days.',
      required: true,
      schema: {
        type: 'string',
        minLength: 20,
        maxLength: 64,
        pattern:
          '^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$',
      },
    },
  })

const PaymentInstrumentTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'payment_instrument_type',
      in: 'query',
      description:
        'Filters the transactions in the response by a payment instrument type. Value is either:<ul><li><code>CREDITCARD</code>. Returns a direct credit card transaction with a corresponding value.</li><li><code>DEBITCARD</code>. Returns a debit card transaction with a corresponding value.</li></ul>If you omit this parameter, the API does not apply this filter.',
      required: false,
      schema: { type: 'string' },
    },
  })

const StoreIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'store_id',
      in: 'query',
      description: 'Filters the transactions in the response by a store ID.',
      schema: { type: 'string' },
      required: false,
    },
  })

const TerminalIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'terminal_id',
      in: 'query',
      description: 'Filters the transactions in the response by a terminal ID.',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .default('transaction_info')
  .exactOptional()
  .openapi({
    param: {
      name: 'fields',
      in: 'query',
      description:
        'Indicates which fields appear in the response. Value is a single field or a comma-separated list of fields. The <code>transaction_info</code> value returns only the transaction details in the response. To include all fields in the response, specify <code>fields=all</code>. Valid fields are:<ul><li><a href="/docs/api/transaction-search/v1/#definition-transaction_info"><code>transaction_info</code></a>. The transaction information. Includes the ID of the PayPal account of the payee, the PayPal-generated transaction ID, the PayPal-generated base ID, the PayPal reference ID type, the transaction event code, the date and time when the transaction was initiated and was last updated, the transaction amounts including the PayPal fee, any discounts, insurance, the transaction status, and other information about the transaction.</li><li><a href="/docs/api/transaction-search/v1/#definition-payer_info"><code>payer_info</code></a>. The payer information. Includes the PayPal customer account ID and the payer\'s email address, primary phone number, name, country code, address, and whether the payer is verified or unverified.</li><li><a href="/docs/api/transaction-search/v1/#definition-shipping_info"><code>shipping_info</code></a>. The shipping information. Includes the recipient\'s name, the shipping method for this order, the shipping address for this order, and the secondary address associated with this order.</li><li><a href="/docs/api/transaction-search/v1/#definition-auction_info"><code>auction_info</code></a>. The auction information. Includes the name of the auction site, the auction site URL, the ID of the customer who makes the purchase in the auction, and the date and time when the auction closes.</li><li><a href="/docs/api/transaction-search/v1/#definition-cart_info"><code>cart_info</code></a>. The cart information. Includes an array of item details, whether the item amount or the shipping amount already includes tax, and the ID of the invoice for PayPal-generated invoices.</li><li><a href="/docs/api/transaction-search/v1/#definition-incentive_info"><code>incentive_info</code></a>. An array of incentive detail objects. Each object includes the incentive, such as a special offer or coupon, the incentive amount, and the incentive program code that identifies a merchant loyalty or incentive program.</li><li><a href="/docs/api/transaction-search/v1/#definition-store_info"><code>store_info</code></a>. The store information. Includes the ID of the merchant store and the terminal ID for the checkout stand in the merchant store.</li></ul>',
      schema: { type: 'string', default: 'transaction_info' },
      required: false,
    },
  })

const BalanceAffectingRecordsOnlyParamsSchema = z
  .string()
  .default('Y')
  .exactOptional()
  .openapi({
    param: {
      name: 'balance_affecting_records_only',
      in: 'query',
      description:
        'Indicates whether the response includes only balance-impacting transactions or all transactions. Value is either:<ul><li><code>Y</code>. The default. The response includes only balance transactions.</li><li><code>N</code>. The response includes all transactions.</li></ul>',
      schema: { type: 'string', default: 'Y' },
      required: false,
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
    z.int().min(1).max(500),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      name: 'page_size',
      in: 'query',
      description:
        'The number of items to return in the response. So, the combination of `page=1` and `page_size=20` returns the first 20 items. The combination of `page=2` and `page_size=20` returns the next 20 items.',
      schema: { type: 'integer', minimum: 1, maximum: 500, default: 100 },
      required: false,
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
    z.int().min(1).max(2147483647),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      name: 'page',
      in: 'query',
      description:
        'The zero-relative start index of the entire list of items that are returned in the response. So, the combination of `page=1` and `page_size=20` returns the first 20 items.',
      schema: { type: 'integer', minimum: 1, maximum: 2147483647, default: 1 },
      required: false,
    },
  })

const AsOfTimeParamsSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .exactOptional()
  .openapi({
    param: {
      name: 'as_of_time',
      in: 'query',
      description:
        'List balances in the response at the date time provided, will return the last refreshed balance in the system when not provided.',
      schema: {
        type: 'string',
        minLength: 20,
        maxLength: 64,
        pattern:
          '^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$',
      },
      required: false,
    },
  })

const CurrencyCodeParamsSchema = z
  .string()
  .length(3)
  .exactOptional()
  .openapi({
    param: {
      name: 'currency_code',
      in: 'query',
      description:
        'Filters the transactions in the response by a [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) for the PayPal transaction currency.',
      schema: { type: 'string', minLength: 3, maxLength: 3 },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: '/v1/oauth2/token',
      scopes: {
        'https://uri.paypal.com/services/reporting/search/read': 'Transactions Search',
        'https://uri.paypal.com/services/reporting/balances/read': 'List Balances',
      },
    },
  },
}

export const getV1ReportingTransactionsRoute = createRoute({
  method: 'get',
  path: '/v1/reporting/transactions',
  tags: ['transactions'],
  summary: 'List transactions',
  description:
    'Lists transactions. Specify one or more query parameters to filter the transaction that appear in the response.<blockquote><strong>Notes:</strong> <ul><li>If you specify one or more optional query parameters, the <code>ending_balance</code> response field is empty.</li><li>It takes a maximum of three hours for executed transactions to appear in the list transactions call.</li><li>This call lists transaction for the previous three years.</li></ul></blockquote>',
  operationId: 'search.get',
  request: {
    query: z.object({
      transaction_id: TransactionIdParamsSchema,
      transaction_type: TransactionTypeParamsSchema,
      transaction_status: TransactionStatusParamsSchema,
      transaction_amount: TransactionAmountParamsSchema,
      transaction_currency: TransactionCurrencyParamsSchema,
      start_date: StartDateParamsSchema,
      end_date: EndDateParamsSchema,
      payment_instrument_type: PaymentInstrumentTypeParamsSchema,
      store_id: StoreIdParamsSchema,
      terminal_id: TerminalIdParamsSchema,
      fields: FieldsParamsSchema,
      balance_affecting_records_only: BalanceAffectingRecordsOnlyParamsSchema,
      page_size: PageSizeParamsSchema,
      page: PageParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists transactions .',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/reporting/search/read'] }],
})

export const getV1ReportingBalancesRoute = createRoute({
  method: 'get',
  path: '/v1/reporting/balances',
  tags: ['balances'],
  summary: 'List all balances',
  description:
    'List all balances. Specify date time to list balances for that time that appear in the response.<blockquote><strong>Notes:</strong> <ul><li>It takes a maximum of three hours for balances to appear in the list balances call.</li><li>This call lists balances upto the previous three years.</li></ul></blockquote>',
  operationId: 'balances.get',
  request: {
    query: z.object({ as_of_time: AsOfTimeParamsSchema, currency_code: CurrencyCodeParamsSchema }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists balances .',
      content: { 'application/json': { schema: BalancesResponseSchema } },
    },
    400: {
      description:
        'The request is not well-formed, is syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: Error_400Schema } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema } },
    },
    500: {
      description: 'An internal server error occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/reporting/balances/read'] }],
})

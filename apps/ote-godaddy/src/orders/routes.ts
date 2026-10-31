import { createRoute, z } from '@hono/zod-openapi'

const AddressSchema = z
  .object({
    address1: z.string(),
    address2: z.string().exactOptional(),
    city: z.string(),
    country: z
      .enum([
        'AC',
        'AD',
        'AE',
        'AF',
        'AG',
        'AI',
        'AL',
        'AM',
        'AO',
        'AQ',
        'AR',
        'AS',
        'AT',
        'AU',
        'AW',
        'AX',
        'AZ',
        'BA',
        'BB',
        'BD',
        'BE',
        'BF',
        'BG',
        'BH',
        'BI',
        'BJ',
        'BM',
        'BN',
        'BO',
        'BQ',
        'BR',
        'BS',
        'BT',
        'BV',
        'BW',
        'BY',
        'BZ',
        'CA',
        'CC',
        'CD',
        'CF',
        'CG',
        'CH',
        'CI',
        'CK',
        'CL',
        'CM',
        'CN',
        'CO',
        'CR',
        'CV',
        'CW',
        'CX',
        'CY',
        'CZ',
        'DE',
        'DJ',
        'DK',
        'DM',
        'DO',
        'DZ',
        'EC',
        'EE',
        'EG',
        'EH',
        'ER',
        'ES',
        'ET',
        'FI',
        'FJ',
        'FK',
        'FM',
        'FO',
        'FR',
        'GA',
        'GB',
        'GD',
        'GE',
        'GF',
        'GG',
        'GH',
        'GI',
        'GL',
        'GM',
        'GN',
        'GP',
        'GQ',
        'GR',
        'GS',
        'GT',
        'GU',
        'GW',
        'GY',
        'HK',
        'HM',
        'HN',
        'HR',
        'HT',
        'HU',
        'ID',
        'IE',
        'IL',
        'IM',
        'IN',
        'IO',
        'IQ',
        'IS',
        'IT',
        'JE',
        'JM',
        'JO',
        'JP',
        'KE',
        'KG',
        'KH',
        'KI',
        'KM',
        'KN',
        'KR',
        'KV',
        'KW',
        'KY',
        'KZ',
        'LA',
        'LB',
        'LC',
        'LI',
        'LK',
        'LR',
        'LS',
        'LT',
        'LU',
        'LV',
        'LY',
        'MA',
        'MC',
        'MD',
        'ME',
        'MG',
        'MH',
        'MK',
        'ML',
        'MM',
        'MN',
        'MO',
        'MP',
        'MQ',
        'MR',
        'MS',
        'MT',
        'MU',
        'MV',
        'MW',
        'MX',
        'MY',
        'MZ',
        'NA',
        'NC',
        'NE',
        'NF',
        'NG',
        'NI',
        'NL',
        'NO',
        'NP',
        'NR',
        'NU',
        'NZ',
        'OM',
        'PA',
        'PE',
        'PF',
        'PG',
        'PH',
        'PK',
        'PL',
        'PM',
        'PN',
        'PR',
        'PS',
        'PT',
        'PW',
        'PY',
        'QA',
        'RE',
        'RO',
        'RS',
        'RU',
        'RW',
        'SA',
        'SB',
        'SC',
        'SE',
        'SG',
        'SH',
        'SI',
        'SJ',
        'SK',
        'SL',
        'SM',
        'SN',
        'SO',
        'SR',
        'ST',
        'SV',
        'SX',
        'SZ',
        'TC',
        'TD',
        'TF',
        'TG',
        'TH',
        'TJ',
        'TK',
        'TL',
        'TM',
        'TN',
        'TO',
        'TP',
        'TR',
        'TT',
        'TV',
        'TW',
        'TZ',
        'UA',
        'UG',
        'UM',
        'US',
        'UY',
        'UZ',
        'VA',
        'VC',
        'VE',
        'VG',
        'VI',
        'VN',
        'VU',
        'WF',
        'WS',
        'YE',
        'YT',
        'ZA',
        'ZM',
        'ZW',
      ])
      .default('US')
      .openapi({
        description:
          "Two-letter ISO country code to be used as a hint for target region<br/><br/>\nNOTE: These are sample values, there are many\n<a href='http://www.iso.org/iso/country_codes.htm'>more</a>",
      }),
    postalCode: z.string().openapi({ description: 'Postal or zip code' }),
    state: z.string().openapi({ description: 'State or province or territory' }),
  })
  .openapi({ required: ['address1', 'city', 'state', 'postalCode', 'country'] })
  .openapi('Address')

const ContactSchema = z
  .object({
    addressMailing: AddressSchema,
    email: z.email(),
    fax: z.string().exactOptional(),
    jobTitle: z.string().exactOptional(),
    nameFirst: z.string(),
    nameLast: z.string(),
    nameMiddle: z.string().exactOptional(),
    organization: z.string().exactOptional(),
    phone: z.string(),
  })
  .openapi({ required: ['nameFirst', 'nameLast', 'email', 'phone', 'addressMailing'] })
  .openapi('Contact')

const BillToSchema = z
  .object({
    contact: ContactSchema,
    taxId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Tax id used for calculating the tax the customer is required to pay',
      }),
  })
  .openapi({ required: ['contact'] })
  .openapi('BillTo')

const ErrorFieldSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable, English description of the problem with the contents of the field',
      }),
    path: z
      .string()
      .openapi({
        description:
          "<ul>\n<li style='margin-left: 12px;'>JSONPath referring to a field containing an error</li>\n<strong style='margin-left: 12px;'>OR</strong>\n<li style='margin-left: 12px;'>JSONPath referring to a field that refers to an object containing an error, with more detail in `pathRelated`</li>\n</ul>",
      }),
    pathRelated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSONPath referring to a field containing an error, which is referenced by `path`',
      }),
  })
  .openapi({ required: ['path', 'code'] })
  .openapi('ErrorField')

const ErrorSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    fields: z
      .array(ErrorFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
  })
  .openapi({ required: ['code'] })
  .openapi('Error')

const ErrorLimitSchema = z
  .object({
    code: z
      .string()
      .openapi({
        description:
          'Short identifier for the error, suitable for indicating the specific error within client code',
      }),
    fields: z
      .array(ErrorFieldSchema)
      .exactOptional()
      .openapi({
        description: 'List of the specific fields, and the errors found with their contents',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable, English description of the error' }),
    retryAfterSec: z
      .int()
      .openapi({ description: 'Number of seconds to wait before attempting a similar request' }),
  })
  .openapi({ required: ['retryAfterSec', 'code'] })
  .openapi('ErrorLimit')

const OrderFeeSchema = z
  .object({
    icann: z
      .int()
      .exactOptional()
      .openapi({ description: 'Domain registration transaction fee charged by ICANN' }),
    total: z.int().openapi({ description: 'Sum of all fees' }),
  })
  .openapi({ required: ['total'] })
  .openapi('OrderFee')

const LineItemPricingSchema = z
  .object({
    discount: z
      .int()
      .openapi({
        description:
          'Discount off of sale price for given `quantity` and `period` <pre>`discount` = `sale` - `subtotal`</pre>',
      }),
    fees: OrderFeeSchema,
    list: z.int().openapi({ description: 'List price for given `quantity` and `period`' }),
    sale: z.int().openapi({ description: 'Actual price for the current product' }),
    savings: z
      .int()
      .openapi({
        description:
          'Savings off of list price for given `quantity` and `period` <pre>`savings` = `list` - `subtotal`</pre>',
      }),
    subtotal: z
      .int()
      .openapi({
        description:
          'Price with any discounts and without taxes or fees for given `quantity` and `period`',
      }),
    taxes: z.int().openapi({ description: 'Taxes for given `quantity` and `period`' }),
    unit: z.object({}).openapi({ description: 'Pricing for a single unit of the given item' }),
  })
  .openapi({
    required: ['subtotal', 'list', 'savings', 'sale', 'discount', 'taxes', 'fees', 'unit'],
  })
  .openapi('LineItemPricing')

const LineItemTaxCollectorSchema = z
  .object({ taxCollectorId: z.int().openapi({ description: 'Unique identifier for the company' }) })
  .openapi({ required: ['taxCollectorId'] })
  .openapi('LineItemTaxCollector')

const LineItemSchema = z
  .object({
    domains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A collection of domain names purchased if the current product is domain',
      }),
    label: z.string().openapi({ description: 'Human readable description of the current product' }),
    period: z.float64().default(1).exactOptional(),
    periodUnit: z
      .enum(['MONTH', 'QUARTER', 'SEMI_ANNUAL', 'YEAR', 'ONE_TIME'])
      .default('MONTH')
      .exactOptional()
      .openapi({ description: 'The unit of time that periodCount is measured in' }),
    pfid: z
      .int()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the current product' }),
    pricing: LineItemPricingSchema,
    quantity: z
      .int()
      .openapi({ description: 'Number of the current product included in the specified order' }),
    taxCollector: LineItemTaxCollectorSchema.exactOptional(),
  })
  .openapi({ required: ['label', 'quantity', 'pricing'] })
  .openapi('LineItem')

const LineItemPricingTaxDetailSchema = z
  .object({
    amount: z.int().exactOptional().openapi({ description: 'Tax amount' }),
    rate: z.float64().exactOptional(),
  })
  .openapi({ required: [''] })
  .openapi('LineItemPricingTaxDetail')

const LineItemSummarySchema = z
  .object({ label: z.string().openapi({ description: 'Product label of the current line item' }) })
  .openapi({ required: ['label'] })
  .openapi('LineItemSummary')

const LineItemUnitPricingSchema = z
  .object({
    discount: z
      .int()
      .openapi({ description: 'Discount without consideration of `quantity` and `period`' }),
    fees: OrderFeeSchema,
    list: z
      .int()
      .openapi({ description: 'List price without consideration of `quantity` and `period`' }),
    sale: z
      .int()
      .openapi({ description: 'Sale price without consideration of `quantity` and `period`' }),
    savings: z
      .int()
      .openapi({ description: 'Savings without consideration of `quantity` and `period`' }),
    taxes: z
      .int()
      .openapi({ description: 'Taxes without consideration of `quantity` and `period`' }),
  })
  .openapi({ required: ['discount', 'fees', 'list', 'sale', 'savings', 'taxes'] })
  .openapi('LineItemUnitPricing')

const PaymentSchema = z
  .object({
    amount: z.int().openapi({ description: 'Amount paid by the current payment' }),
    category: z
      .enum(['CREDIT_CARD', 'PAYPAL', 'ACH', 'GIFT_CARD', 'IN_STORE_CREDIT', 'PREPAID'])
      .openapi({
        description:
          'The category of payment method used at the time of purchase.\nMost common values are listed in the enum.',
      }),
    paymentProfileId: z
      .string()
      .openapi({ description: 'Unique identifier of the payment profile used by current payment' }),
    subcategory: z
      .enum([
        'CHECKING_PERSONAL',
        'CHECKING_BUSINESS',
        'VISA',
        'MASTER_CARD',
        'AMEX',
        'JCB',
        'UNIONPAY',
      ])
      .exactOptional()
      .openapi({
        description:
          'The subcategory of payment method used at the time of purchase.\n This field is only set for certain payment categories, such as ACH and CREDIT_CARD.\nMost common values are listed in the enum.',
      }),
  })
  .openapi({ required: ['paymentProfileId', 'amount', 'category'] })
  .openapi('Payment')

const OrderPricingSchema = z
  .object({
    discount: z.int().openapi({ description: 'Discount from promotional pricing' }),
    fees: OrderFeeSchema,
    id: z.float64().exactOptional(),
    list: z.int().openapi({ description: 'Sum of list prices for the entire cart' }),
    savings: z
      .int()
      .openapi({
        description: 'Savings off of list price <pre>`savings` = `list` - `subtotal`</pre>',
      }),
    subtotal: z.int().openapi({ description: 'Price with `discount` and without taxes or fees' }),
    taxDetails: z
      .array(LineItemPricingTaxDetailSchema)
      .exactOptional()
      .openapi({ description: 'A collection of line item tax details' }),
    taxes: z.int().openapi({ description: 'Taxes for the entire cart' }),
    total: z
      .int()
      .openapi({
        description:
          'Price the customer pays <pre>`total` = `subtotal` + `taxes` + `fees.total`</pre>',
      }),
  })
  .openapi({ required: ['total', 'subtotal', 'list', 'savings', 'discount', 'taxes', 'fees'] })
  .openapi('OrderPricing')

const OrderSchema = z
  .object({
    billTo: BillToSchema,
    createdAt: z
      .string()
      .openapi({ description: 'Date and time when the current order is created on' }),
    currency: z.string().openapi({ description: 'Currency in which the order has been placed' }),
    items: z.array(LineItemSchema),
    orderId: z.string().openapi({ description: 'Unique identifier of current order' }),
    parentOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Unique identifier of the parent order. All refund/chargeback orders are tied to the original order.\nThe orginal order's `orderId` is the `parentOrderId` of refund/chargeback orders",
      }),
    payments: z.array(PaymentSchema),
    pricing: OrderPricingSchema,
  })
  .openapi({
    required: ['orderId', 'currency', 'createdAt', 'pricing', 'billTo', 'payments', 'items'],
  })
  .openapi('Order')

const OrderSummaryPricingSchema = z
  .object({
    total: z
      .string()
      .openapi({
        description:
          'Total amount charged for the current order. Negative for Refund and Chargeback',
      }),
  })
  .openapi({ required: ['total'] })
  .openapi('OrderSummaryPricing')

const OrderSummarySchema = z
  .object({
    createdAt: z
      .string()
      .openapi({ description: 'Date and time when the current order was created' }),
    currency: z.string().openapi({ description: 'Currency in which the order was placed' }),
    items: z
      .array(LineItemSummarySchema)
      .openapi({ description: 'Sets of two or more line items in current order' }),
    orderId: z.string().openapi({ description: 'Unique identifier of the current order' }),
    parentOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Unique identifier of the parent order. All refund/chargeback orders are tied to the original order.\nThe orginal order's `orderId` is the `parentOrderId` of refund/chargeback orders",
      }),
    pricing: OrderSummaryPricingSchema,
  })
  .openapi({ required: ['orderId', 'currency', 'createdAt', 'pricing', 'items'] })
  .openapi('OrderSummary')

const PaginationSchema = z
  .object({
    first: z.string().exactOptional().openapi({ description: 'URI to access the first page' }),
    last: z.string().exactOptional().openapi({ description: 'URI to access the last page' }),
    next: z.string().exactOptional().openapi({ description: 'URI to access the next page' }),
    previous: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI to access the previous page' }),
    total: z.int().exactOptional().openapi({ description: 'Number of records available' }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const OrderListSchema = z
  .object({
    orders: z.array(OrderSummarySchema).openapi({ description: 'A collection of orders' }),
    pagination: PaginationSchema,
  })
  .openapi({ required: ['orders', 'pagination'] })
  .openapi('OrderList')

export const getV1OrdersRoute = createRoute({
  method: 'get',
  path: '/v1/orders',
  tags: ['v1'],
  summary:
    'Retrieve a list of orders for the authenticated shopper. Only one filter may be used at a time',
  description:
    '<strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>',
  operationId: 'list',
  request: {
    query: z.object({
      periodStart: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Start of range indicating what time-frame should be returned. Inclusive',
            in: 'query',
            name: 'periodStart',
            required: false,
            schema: { type: 'string' },
          },
        }),
      periodEnd: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'End of range indicating what time-frame should be returned. Inclusive',
            in: 'query',
            name: 'periodEnd',
            required: false,
            schema: { type: 'string' },
          },
        }),
      domain: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Domain name to use as the filter of results',
            in: 'query',
            name: 'domain',
            required: false,
            schema: { type: 'string' },
          },
        }),
      productGroupId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Product group id to use as the filter of results',
            in: 'query',
            name: 'productGroupId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      paymentProfileId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Payment profile id to use as the filter of results',
            in: 'query',
            name: 'paymentProfileId',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      parentOrderId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Parent order id to use as the filter of results',
            in: 'query',
            name: 'parentOrderId',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of results to skip for pagination',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { default: 0, type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(10000),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of items to return',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 25, maximum: 10000, minimum: 1, type: 'integer' },
          },
        }),
      sort: z
        .enum(['createdAt', '-createdAt', 'orderId', '-orderId', 'pricing.total', '-pricing.total'])
        .default('-createdAt')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Property name that will be used to sort results. '-' indicates descending",
            in: 'query',
            name: 'sort',
            required: false,
            schema: {
              default: '-createdAt',
              enum: [
                'createdAt',
                '-createdAt',
                'orderId',
                '-orderId',
                'pricing.total',
                '-pricing.total',
              ],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Shopper ID to be operated on, if different from JWT<br/><b>Reseller subaccounts are not supported</b>',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'X-Market-Id': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            description: 'Unique identifier of the Market in which the request is happening',
            in: 'header',
            name: 'X-Market-Id',
            required: false,
            schema: { default: 'en-US', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: OrderListSchema },
        'application/json': { schema: OrderListSchema },
        'application/xml': { schema: OrderListSchema },
        'text/javascript': { schema: OrderListSchema },
        'text/xml': { schema: OrderListSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

export const getV1OrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/v1/orders/{orderId}',
  tags: ['v1'],
  summary: 'Retrieve details for specified order',
  description:
    '<strong>API Resellers</strong><ul><li>This endpoint does not support subaccounts and therefore API Resellers should not supply an X-Shopper-Id header</li></ul>',
  operationId: 'get',
  request: {
    params: z.object({
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'Order id whose details are to be retrieved',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-Shopper-Id': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Shopper ID to be operated on, if different from JWT<br/><b>Reseller subaccounts are not supported</b>',
            in: 'header',
            name: 'X-Shopper-Id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      'X-Market-Id': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            description: 'Unique identifier of the Market in which the request is happening',
            in: 'header',
            name: 'X-Market-Id',
            required: false,
            schema: { default: 'en-US', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Request was successful',
      content: {
        'application/javascript': { schema: OrderSchema },
        'application/json': { schema: OrderSchema },
        'application/xml': { schema: OrderSchema },
        'text/javascript': { schema: OrderSchema },
        'text/xml': { schema: OrderSchema },
      },
    },
    400: {
      description: 'Request was malformed',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    401: {
      description: 'Authentication info not sent or invalid',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    403: {
      description: 'Authenticated user is not allowed access',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    404: {
      description: 'Resource not found',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    429: {
      description: 'Too many requests received within interval',
      content: {
        'application/javascript': { schema: ErrorLimitSchema },
        'application/json': { schema: ErrorLimitSchema },
        'application/xml': { schema: ErrorLimitSchema },
        'text/javascript': { schema: ErrorLimitSchema },
        'text/xml': { schema: ErrorLimitSchema },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
    504: {
      description: 'Gateway timeout',
      content: {
        'application/javascript': { schema: ErrorSchema },
        'application/json': { schema: ErrorSchema },
        'application/xml': { schema: ErrorSchema },
        'text/javascript': { schema: ErrorSchema },
        'text/xml': { schema: ErrorSchema },
      },
    },
  },
})

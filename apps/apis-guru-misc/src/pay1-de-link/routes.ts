import { createRoute, z } from '@hono/zod-openapi'

const AddressDataDtoSchema = z
  .object({
    addressAddition: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: 'customer additional address line', example: '7th floor' }),
    city: z
      .string()
      .regex(/^[^\u0000\\!=<>?+;"*\d]+$/)
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: 'customer city', example: 'Kiel' }),
    company: z
      .string()
      .min(2)
      .max(50)
      .exactOptional()
      .openapi({ description: 'customer company name', example: 'PAYONE GmbH' }),
    country: z
      .string()
      .regex(/[A-Z]{2}/)
      .length(2)
      .exactOptional()
      .openapi({ description: 'customer country code (2 letter ISO-3166 code)', example: 'DE' }),
    firstName: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: 'customer first name', example: 'John' }),
    lastName: z
      .string()
      .min(2)
      .max(50)
      .exactOptional()
      .openapi({ description: 'customer last name', example: 'Doe' }),
    state: z
      .string()
      .regex(/[A-Z]{2}/)
      .length(2)
      .exactOptional()
      .openapi({ description: 'customer state code' }),
    street: z
      .string()
      .min(2)
      .max(50)
      .exactOptional()
      .openapi({ description: 'customer street name', example: 'Fraunhoferstr. 2-4' }),
    zip: z
      .string()
      .regex(/[0-9A-Za-z_.\-\/]{2,10}/)
      .min(2)
      .max(10)
      .exactOptional()
      .openapi({ description: 'customer postcode', example: '24118' }),
  })
  .openapi({ required: [] })
  .openapi('AddressDataDto')

const CartItemDtoSchema = z
  .object({
    deliveryDateEnd: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'delivery period end date', example: '2021-01-01' }),
    deliveryDateStart: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'delivery date', example: '2021-01-01' }),
    description: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'item description', example: 'Potatoes' }),
    number: z
      .string()
      .regex(/[0-9A-Za-z(){} +\-_#\/:\[\]]{1,32}/)
      .min(1)
      .max(32)
      .openapi({ description: 'item number', example: '73883HFJ' }),
    price: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(-1999999999n).max(1999999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: -1999999999,
        maximum: 1999999999,
        description: 'gross price of single item',
        example: 1999,
      }),
    quantity: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(999999n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 999999,
        description: 'total number of ordered items',
        example: 1,
      }),
    type: z
      .enum(['goods', 'shipment', 'handling', 'voucher'])
      .openapi({ description: 'item type', example: 'goods' }),
    vatRate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(9999n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 9999,
        description: 'vat rate (<100 in %, >=100 in bp)',
        example: 20,
      }),
  })
  .openapi({ required: ['number', 'price', 'quantity', 'type'] })
  .openapi('CartItemDto')

const InvoiceInformationDtoSchema = z
  .object({
    invoiceId: z
      .string()
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({ description: 'id that should be put on the invoice' }),
    invoiceText: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({ description: 'short text that should be put after the invoice' }),
  })
  .openapi({ description: 'relevant information for the invoice module', required: [] })
  .openapi('InvoiceInformationDto')

const LinkCreateRequestSchema = z
  .object({
    accountId: z
      .string()
      .regex(/[0-9]+/)
      .openapi({ description: 'identifier for the subaccount', example: '12345' }),
    active: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'link activation status', example: true }),
    backgroundImage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'backgroundImage css property',
        example: 'linear-gradient(to bottom right, #ffffff, #3295d6)',
      }),
    billing: AddressDataDtoSchema.exactOptional(),
    currency: z
      .enum([
        'ALL',
        'DZD',
        'ARS',
        'AUD',
        'BSD',
        'BHD',
        'BDT',
        'AMD',
        'BBD',
        'BMD',
        'BTN',
        'BOB',
        'BWP',
        'BZD',
        'SBD',
        'BND',
        'MMK',
        'BIF',
        'KHR',
        'CAD',
        'CVE',
        'KYD',
        'LKR',
        'CLP',
        'CNY',
        'COP',
        'KMF',
        'CRC',
        'HRK',
        'CUP',
        'CZK',
        'DKK',
        'DOP',
        'SVC',
        'ETB',
        'ERN',
        'FKP',
        'FJD',
        'DJF',
        'GMD',
        'GIP',
        'GTQ',
        'GNF',
        'GYD',
        'HTG',
        'HNL',
        'HKD',
        'HUF',
        'ISK',
        'INR',
        'IDR',
        'IRR',
        'IQD',
        'ILS',
        'JMD',
        'JPY',
        'KZT',
        'JOD',
        'KES',
        'KPW',
        'KRW',
        'KWD',
        'KGS',
        'LAK',
        'LBP',
        'LSL',
        'LRD',
        'LYD',
        'MOP',
        'MWK',
        'MYR',
        'MVR',
        'MUR',
        'MXN',
        'MNT',
        'MDL',
        'MAD',
        'OMR',
        'NAD',
        'NPR',
        'ANG',
        'AWG',
        'VUV',
        'NZD',
        'NIO',
        'NGN',
        'NOK',
        'PKR',
        'PAB',
        'PGK',
        'PYG',
        'PEN',
        'PHP',
        'QAR',
        'RUB',
        'RWF',
        'SHP',
        'SAR',
        'SCR',
        'SLL',
        'SGD',
        'VND',
        'SOS',
        'ZAR',
        'SSP',
        'SZL',
        'SEK',
        'CHF',
        'SYP',
        'THB',
        'TOP',
        'TTD',
        'AED',
        'TND',
        'UGX',
        'MKD',
        'EGP',
        'GBP',
        'TZS',
        'USD',
        'UYU',
        'UZS',
        'WST',
        'YER',
        'TWD',
        'UYW',
        'VES',
        'MRU',
        'STN',
        'CUC',
        'ZWL',
        'BYN',
        'TMT',
        'GHS',
        'SDG',
        'UYI',
        'RSD',
        'MZN',
        'AZN',
        'RON',
        'CHE',
        'CHW',
        'TRY',
        'XAF',
        'XCD',
        'XOF',
        'XPF',
        'XBA',
        'XBB',
        'XBC',
        'XBD',
        'XAU',
        'XDR',
        'XAG',
        'XPT',
        'XTS',
        'XPD',
        'XUA',
        'ZMW',
        'SRD',
        'MGA',
        'COU',
        'AFN',
        'TJS',
        'AOA',
        'BGN',
        'CDF',
        'BAM',
        'EUR',
        'MXV',
        'UAH',
        'GEL',
        'BOV',
        'PLN',
        'BRL',
        'CLF',
        'XSU',
        'USN',
      ])
      .openapi({ description: 'currency code', example: 'EUR' }),
    description: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: 'free format description of the payment',
        example: 'This payment is awesome!!',
      }),
    email: z
      .string()
      .min(4)
      .max(254)
      .exactOptional()
      .openapi({ description: 'email the invoice should be delivered to' }),
    errorUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'final redirect after a final payment' }),
    expiration: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'link expiration date, the link will only be executable until end of that day',
        example: '2020-02-20',
      }),
    intent: z
      .enum(['authorization', 'preauthorization'])
      .default('authorization')
      .exactOptional()
      .openapi({ description: 'designates the type of transaction that will be created' }),
    invoiceInformation: InvoiceInformationDtoSchema.exactOptional(),
    language: z
      .enum(['de_DE', 'en_US'])
      .exactOptional()
      .openapi({ description: 'link ISO language code', example: 'en_US' }),
    logo: z
      .url()
      .exactOptional()
      .openapi({
        description: 'logo url',
        example: 'https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg',
      }),
    merchantId: z
      .string()
      .regex(/[0-9]+/)
      .openapi({ description: 'identifier for the merchant', example: '12345' }),
    mode: z.enum(['live', 'test']).openapi({ description: 'execution mode', example: 'live' }),
    notifyUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Url where the notification will be send after link was executed' }),
    paymentMethods: z
      .array(
        z
          .enum([
            'visa',
            'mastercard',
            'amex',
            'paypal',
            'sofort',
            'paydirekt',
            'postfinance-e',
            'postfinance-card',
            'bancontact',
            'przelewy24',
            'alipay',
            'ideal',
            'eps',
            'giropay',
            'sepa',
          ])
          .openapi({ description: 'available payment methods', example: 'visa' }),
      )
      .exactOptional()
      .openapi({
        description: 'list of available payment methods',
        example: ['visa', 'mastercard'],
      }),
    portalId: z
      .string()
      .regex(/[0-9]+/)
      .openapi({ description: 'identifier for the portal', example: '1234567' }),
    reference: z
      .string()
      .regex(/[0-9a-zA-Z.\\-_\/]{1,20}/)
      .openapi({
        description: 'payment reference number, has to be unique per merchant and mode',
        example: 'payment_1',
      }),
    shipping: AddressDataDtoSchema.exactOptional(),
    shoppingCart: z.array(CartItemDtoSchema).min(1).max(400),
    successUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'final redirect after a successful payment' }),
    userId: z
      .string()
      .regex(/[0-9]+/)
      .exactOptional()
      .openapi({ description: 'identifier for the user', example: '12345678' }),
  })
  .openapi({
    description: 'a link create request',
    required: [
      'accountId',
      'currency',
      'merchantId',
      'mode',
      'portalId',
      'reference',
      'shoppingCart',
    ],
  })
  .openapi('LinkCreateRequest')

const LinkResponseSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'identifier for the subaccount', example: '12345' }),
    active: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'link activation status', example: true }),
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n).max(1999999999n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 1,
        maximum: 1999999999,
        description: 'total amount of all shopping cart items in lowest denomination',
        example: 799,
      }),
    backgroundImage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'backgroundImage css property',
        example: 'linear-gradient(to bottom right, #ffffff, #3295d6)',
      }),
    billing: AddressDataDtoSchema.exactOptional(),
    created: z
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
        description: 'created time in ISO 8601 format',
      }),
    currency: z
      .enum([
        'ALL',
        'DZD',
        'ARS',
        'AUD',
        'BSD',
        'BHD',
        'BDT',
        'AMD',
        'BBD',
        'BMD',
        'BTN',
        'BOB',
        'BWP',
        'BZD',
        'SBD',
        'BND',
        'MMK',
        'BIF',
        'KHR',
        'CAD',
        'CVE',
        'KYD',
        'LKR',
        'CLP',
        'CNY',
        'COP',
        'KMF',
        'CRC',
        'HRK',
        'CUP',
        'CZK',
        'DKK',
        'DOP',
        'SVC',
        'ETB',
        'ERN',
        'FKP',
        'FJD',
        'DJF',
        'GMD',
        'GIP',
        'GTQ',
        'GNF',
        'GYD',
        'HTG',
        'HNL',
        'HKD',
        'HUF',
        'ISK',
        'INR',
        'IDR',
        'IRR',
        'IQD',
        'ILS',
        'JMD',
        'JPY',
        'KZT',
        'JOD',
        'KES',
        'KPW',
        'KRW',
        'KWD',
        'KGS',
        'LAK',
        'LBP',
        'LSL',
        'LRD',
        'LYD',
        'MOP',
        'MWK',
        'MYR',
        'MVR',
        'MUR',
        'MXN',
        'MNT',
        'MDL',
        'MAD',
        'OMR',
        'NAD',
        'NPR',
        'ANG',
        'AWG',
        'VUV',
        'NZD',
        'NIO',
        'NGN',
        'NOK',
        'PKR',
        'PAB',
        'PGK',
        'PYG',
        'PEN',
        'PHP',
        'QAR',
        'RUB',
        'RWF',
        'SHP',
        'SAR',
        'SCR',
        'SLL',
        'SGD',
        'VND',
        'SOS',
        'ZAR',
        'SSP',
        'SZL',
        'SEK',
        'CHF',
        'SYP',
        'THB',
        'TOP',
        'TTD',
        'AED',
        'TND',
        'UGX',
        'MKD',
        'EGP',
        'GBP',
        'TZS',
        'USD',
        'UYU',
        'UZS',
        'WST',
        'YER',
        'TWD',
        'UYW',
        'VES',
        'MRU',
        'STN',
        'CUC',
        'ZWL',
        'BYN',
        'TMT',
        'GHS',
        'SDG',
        'UYI',
        'RSD',
        'MZN',
        'AZN',
        'RON',
        'CHE',
        'CHW',
        'TRY',
        'XAF',
        'XCD',
        'XOF',
        'XPF',
        'XBA',
        'XBB',
        'XBC',
        'XBD',
        'XAU',
        'XDR',
        'XAG',
        'XPT',
        'XTS',
        'XPD',
        'XUA',
        'ZMW',
        'SRD',
        'MGA',
        'COU',
        'AFN',
        'TJS',
        'AOA',
        'BGN',
        'CDF',
        'BAM',
        'EUR',
        'MXV',
        'UAH',
        'GEL',
        'BOV',
        'PLN',
        'BRL',
        'CLF',
        'XSU',
        'USN',
      ])
      .exactOptional()
      .openapi({ description: 'currency code', example: 'EUR' }),
    description: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description: 'free format description of the payment',
        example: 'This payment is awesome!!',
      }),
    email: z
      .string()
      .min(4)
      .max(254)
      .exactOptional()
      .openapi({ description: 'customer email for invoices or payment notification' }),
    errorUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'final redirect after a failed payment' }),
    expiration: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'link expiration date, the link will only be executable until end of that day',
        example: '2020-02-20',
      }),
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description: 'hash for the client API',
        example: 'a42847abb8bfca62876ca64c0fa981f8',
      }),
    id: z
      .string()
      .length(32)
      .exactOptional()
      .openapi({ description: 'link id', example: 'HUENJ5FY124QHUENJ5FY124QHUENJ5FY' }),
    intent: z
      .enum(['authorization', 'preauthorization'])
      .default('authorization')
      .exactOptional()
      .openapi({ description: 'designates the type of transaction that will be created' }),
    invoiceInformation: InvoiceInformationDtoSchema.exactOptional(),
    language: z
      .enum(['de_DE', 'en_US'])
      .exactOptional()
      .openapi({ description: 'link ISO language code', example: 'en_US' }),
    link: z.string().exactOptional().openapi({ description: 'customer payment link' }),
    logo: z
      .url()
      .exactOptional()
      .openapi({
        description: 'logo url',
        example: 'https://www.payone.com/wp-content/uploads/2018/12/Payone-Logo-2020.jpg',
      }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'identifier for the merchant', example: '12345' }),
    mode: z
      .enum(['live', 'test'])
      .exactOptional()
      .openapi({ description: 'execution mode', example: 'live' }),
    modified: z
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
        description: 'last modified time in ISO 8601 format',
      }),
    notifyUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'notify url. If unset no notification will be send' }),
    paymentMethod: z
      .enum([
        'visa',
        'mastercard',
        'amex',
        'paypal',
        'sofort',
        'paydirekt',
        'postfinance-e',
        'postfinance-card',
        'bancontact',
        'przelewy24',
        'alipay',
        'ideal',
        'eps',
        'giropay',
        'sepa',
      ])
      .exactOptional()
      .openapi({ description: 'available payment methods', example: 'visa' }),
    paymentMethods: z
      .array(
        z
          .enum([
            'visa',
            'mastercard',
            'amex',
            'paypal',
            'sofort',
            'paydirekt',
            'postfinance-e',
            'postfinance-card',
            'bancontact',
            'przelewy24',
            'alipay',
            'ideal',
            'eps',
            'giropay',
            'sepa',
          ])
          .openapi({ description: 'available payment methods', example: 'visa' }),
      )
      .exactOptional()
      .openapi({
        description: 'list of available payment methods',
        example: ['visa', 'mastercard'],
      }),
    paymentProcess: z
      .string()
      .exactOptional()
      .openapi({ description: 'identifier of the created payment process.', example: '347867997' }),
    portalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'identifier for the portal', example: '1234567' }),
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'redirect url. empty if the payment process does not require a redirect.',
      }),
    reference: z
      .string()
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({
        description: 'payment reference number, has to be unique per merchant and mode',
        example: 'payment_1',
      }),
    shipping: AddressDataDtoSchema.exactOptional(),
    shoppingCart: z.array(CartItemDtoSchema).exactOptional(),
    status: z
      .enum(['ready', 'created', 'executed', 'expired', 'deactivated'])
      .exactOptional()
      .openapi({ description: 'link status', example: 'ready' }),
    successUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'final redirect after a successful payment' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'identifier of the created user.', example: '356845874' }),
  })
  .openapi({ required: [] })
  .openapi('LinkResponse')

const SortSchema = z
  .object({
    empty: z.boolean().exactOptional(),
    sorted: z.boolean().exactOptional(),
    unsorted: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Sort')

const PageableSchema = z
  .object({
    offset: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    pageNumber: z.int32().exactOptional(),
    pageSize: z.int32().exactOptional(),
    paged: z.boolean().exactOptional(),
    sort: SortSchema.exactOptional(),
    unpaged: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Pageable')

const PageLinkResponseSchema = z
  .object({
    content: z.array(LinkResponseSchema).exactOptional(),
    empty: z.boolean().exactOptional(),
    first: z.boolean().exactOptional(),
    last: z.boolean().exactOptional(),
    number: z.int32().exactOptional(),
    numberOfElements: z.int32().exactOptional(),
    pageable: PageableSchema.exactOptional(),
    size: z.int32().exactOptional(),
    sort: SortSchema.exactOptional(),
    totalElements: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    totalPages: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PageLinkResponse')

const CreateAuthSecurityScheme = {
  description:
    'Base64 encoded (merchantId + accountId + portalId + mode + reference + totalAmount + currency) signed with Portalkey in HmacSHA256',
  scheme: 'payone-hmac-sha256',
  type: 'http',
}

const GetMultipleAuthSecurityScheme = {
  description:
    'Base64 encoded (merchantId + accountId + portalId + mode) signed with Portalkey in HmacSHA256',
  scheme: 'payone-hmac-sha256',
  type: 'http',
}

const GetSingleAuthSecurityScheme = {
  description: 'Base64 encoded linkId signed with Portalkey in HmacSHA256',
  scheme: 'payone-hmac-sha256',
  type: 'http',
}

export const getV1PaymentLinksRoute = createRoute({
  method: 'get',
  path: '/v1/payment-links',
  tags: ['Link Management'],
  summary: 'List all payment links.',
  operationId: 'getPaymentLinks',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 0, format: 'int32', type: 'integer' },
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
          z.int32(),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 25, format: 'int32', type: 'integer' },
          },
        }),
      merchantId: z
        .string()
        .regex(/[0-9]+/)
        .openapi({
          param: {
            in: 'query',
            name: 'merchantId',
            required: true,
            schema: { pattern: '[0-9]+', type: 'string' },
          },
        }),
      accountId: z
        .string()
        .regex(/[0-9]+/)
        .openapi({
          param: {
            in: 'query',
            name: 'accountId',
            required: true,
            schema: { pattern: '[0-9]+', type: 'string' },
          },
        }),
      portalId: z
        .string()
        .regex(/[0-9]+/)
        .openapi({
          param: {
            in: 'query',
            name: 'portalId',
            required: true,
            schema: { pattern: '[0-9]+', type: 'string' },
          },
        }),
      mode: z
        .string()
        .regex(/live|test/)
        .openapi({
          param: {
            in: 'query',
            name: 'mode',
            required: true,
            schema: { pattern: 'live|test', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'default response',
      content: { 'application/json': { schema: PageLinkResponseSchema } },
    },
  },
  security: [{ getMultipleAuth: [] }],
})

export const postV1PaymentLinksRoute = createRoute({
  method: 'post',
  path: '/v1/payment-links',
  tags: ['Link Management'],
  summary: 'Create a payment link.',
  operationId: 'createPaymentLink',
  request: { body: { content: { 'application/json': { schema: LinkCreateRequestSchema } } } },
  responses: {
    200: {
      description: 'default response',
      content: { 'application/json': { schema: LinkResponseSchema } },
    },
  },
  security: [{ createAuth: [] }],
})

export const getV1PaymentLinksLinkIdRoute = createRoute({
  method: 'get',
  path: '/v1/payment-links/{linkId}',
  tags: ['Link Management'],
  summary: 'Get payment link by id.',
  operationId: 'getPaymentLink',
  request: {
    params: z.object({
      linkId: z
        .string()
        .regex(/[0N1RWU4X6F8Z9ALBQC3EG5HJKM2PS7TVDY]{32}/)
        .openapi({
          param: {
            in: 'path',
            name: 'linkId',
            required: true,
            schema: { pattern: '[0N1RWU4X6F8Z9ALBQC3EG5HJKM2PS7TVDY]{32}', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'default response',
      content: { 'application/json': { schema: LinkResponseSchema } },
    },
  },
  security: [{ getSingleAuth: [] }],
})

export const putV1PaymentLinksLinkIdRoute = createRoute({
  method: 'put',
  path: '/v1/payment-links/{linkId}',
  tags: ['Link Management'],
  summary: 'Update a payment link.',
  operationId: 'updatePaymentLink',
  request: {
    params: z.object({
      linkId: z
        .string()
        .regex(/[0N1RWU4X6F8Z9ALBQC3EG5HJKM2PS7TVDY]{32}/)
        .openapi({
          param: {
            in: 'path',
            name: 'linkId',
            required: true,
            schema: { pattern: '[0N1RWU4X6F8Z9ALBQC3EG5HJKM2PS7TVDY]{32}', type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LinkCreateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'default response',
      content: { 'application/json': { schema: LinkResponseSchema } },
    },
  },
  security: [{ createAuth: [] }],
})

import { createRoute, z } from '@hono/zod-openapi'

const CountrySchema = z
  .enum([
    '',
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
    'BL',
    'BM',
    'BN',
    'BO',
    'BQ',
    'BR',
    'BS',
    'BT',
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
    'CU',
    'CV',
    'CW',
    'CX',
    'CY',
    'CZ',
    'DE',
    'DG',
    'DJ',
    'DK',
    'DM',
    'DO',
    'DZ',
    'EA',
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
    'HN',
    'HR',
    'HT',
    'HU',
    'IC',
    'ID',
    'IE',
    'IL',
    'IM',
    'IN',
    'IO',
    'IQ',
    'IR',
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
    'KP',
    'KR',
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
    'MF',
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
    'SD',
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
    'SS',
    'ST',
    'SV',
    'SX',
    'SY',
    'SZ',
    'TA',
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
    'XA',
    'XB',
    'XK',
    'YE',
    'YT',
    'ZA',
    'ZM',
    'ZW',
  ])
  .openapi('Country')

const AddressSchema = z
  .object({
    address: z.string(),
    city: z.string(),
    country_code: CountrySchema,
    post_code: z.string(),
  })
  .openapi({ required: ['country_code', 'post_code', 'city', 'address'] })
  .openapi('Address')

const CurrencySchema = z
  .enum([
    'AUD',
    'BGN',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'CZK',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'HRK',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'ISK',
    'JPY',
    'KRW',
    'LTL',
    'LVL',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PHP',
    'PLN',
    'RON',
    'RSD',
    'RUB',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'UAH',
    'USD',
    'ZAR',
  ])
  .openapi('Currency')

const BankAccountSchema = z
  .object({
    account_number: z.string(),
    account_number_iban: z.string().exactOptional(),
    currency: CurrencySchema,
    id: z.int().exactOptional().openapi({ readOnly: true }),
    name: z.string(),
    need_qr: z.boolean().default(false).exactOptional(),
    swift: z.string().exactOptional(),
  })
  .openapi({ required: ['name', 'account_number', 'currency'] })
  .openapi('BankAccount')

const BankAccountListSchema = z
  .object({
    current_page: z.int().exactOptional(),
    data: z.array(BankAccountSchema).exactOptional(),
    last_page: z.int().exactOptional(),
    next_page_url: z.string().exactOptional(),
    per_page: z.int().exactOptional(),
    prev_page_url: z.string().exactOptional(),
    total: z.int().exactOptional(),
  })
  .openapi({
    description:
      'A object with a data property that contains an array of up to limit bank accounts. Each entry in the array is a separate bank account object. If no more bank accounts are available, the resulting array will be empty.',
    required: [],
  })
  .openapi('BankAccountList')

const ClientErrorSchema = z
  .object({ message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ClientError')

const ClientErrorResponseSchema = z
  .object({ error: ClientErrorSchema.exactOptional() })
  .openapi({
    example: {
      error: { message: 'Authorization information (Header: %s) is missing or invalid.' },
    },
    required: [],
  })
  .openapi('ClientErrorResponse')

const ConversationRateSchema = z
  .object({
    conversation_rate: z.float32().exactOptional(),
    from_currency: CurrencySchema.exactOptional(),
    to_currency: CurrencySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConversationRate')

const VatSchema = z
  .enum([
    '0%',
    '1%',
    '10%',
    '11%',
    '12%',
    '13%',
    '14%',
    '15%',
    '16%',
    '17%',
    '18%',
    '19%',
    '2%',
    '20%',
    '21%',
    '22%',
    '23%',
    '24%',
    '25%',
    '26%',
    '27%',
    '3%',
    '4%',
    '5%',
    '6%',
    '7%',
    '8%',
    '9%',
    'AAM',
    'AM',
    'EU',
    'EUK',
    'F.AFA',
    'FAD',
    'K.AFA',
    'MAA',
    'TAM',
    'ÁKK',
    'ÁTHK',
  ])
  .openapi('Vat')

const DocumentItemSchema = z
  .object({
    gross_amount: z.float32().exactOptional(),
    name: z.string().exactOptional(),
    net_amount: z.float32().exactOptional(),
    net_unit_amount: z.float32().exactOptional(),
    product_id: z.int().exactOptional(),
    quantity: z.float32().exactOptional(),
    vat: VatSchema.exactOptional(),
    vat_amount: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentItem')

const DocumentLanguageSchema = z
  .enum(['de', 'en', 'fr', 'hr', 'hu', 'it', 'ro', 'sk'])
  .openapi('DocumentLanguage')

const DocumentNotificationStatusSchema = z
  .enum(['closed', 'downloaded', 'failed', 'none', 'opened', 'readed'])
  .openapi('DocumentNotificationStatus')

const DocumentBankAccountSchema = z
  .object({
    account_number: z.string(),
    account_number_iban: z.string().exactOptional(),
    id: z.int().exactOptional().openapi({ readOnly: true }),
    name: z.string(),
    swift: z.string().exactOptional(),
  })
  .openapi({ required: ['name', 'account_number'] })
  .openapi('DocumentBankAccount')

const DocumentOrganizationSchema = z
  .object({
    address: AddressSchema.exactOptional(),
    bank_account: DocumentBankAccountSchema.exactOptional(),
    cash_settled: z.boolean().exactOptional(),
    eu_tax_number: z.string().exactOptional(),
    ev_number: z.string().exactOptional(),
    name: z.string().exactOptional(),
    small_taxpayer: z.boolean().exactOptional(),
    tax_number: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentOrganization')

const PartnerUpsertSchema = z
  .object({
    account_number: z.string().exactOptional(),
    address: AddressSchema,
    emails: z.array(z.string()).exactOptional(),
    general_ledger_number: z.string().exactOptional(),
    iban: z.string().exactOptional(),
    name: z.string(),
    phone: z.string().exactOptional(),
    swift: z.string().exactOptional(),
    taxcode: z.string().exactOptional(),
  })
  .openapi({ required: ['name', 'address'] })
  .openapi('PartnerUpsert')

const PartnerSchema = PartnerUpsertSchema.and(
  z.object({ id: z.int().exactOptional() }).openapi({ required: [] }),
).openapi('Partner')

const PaymentMethodSchema = z
  .enum([
    'aruhitel',
    'bankcard',
    'barion',
    'barter',
    'cash',
    'cash_on_delivery',
    'coupon',
    'elore_utalas',
    'ep_kartya',
    'kompenzacio',
    'levonas',
    'online_bankcard',
    'payoneer',
    'paypal',
    'paypal_utolag',
    'payu',
    'pick_pack_pont',
    'postai_csekk',
    'postautalvany',
    'skrill',
    'szep_card',
    'transferwise',
    'upwork',
    'utalvany',
    'valto',
    'wire_transfer',
  ])
  .openapi('PaymentMethod')

const PaymentStatusSchema = z
  .enum(['expired', 'none', 'outstanding', 'paid', 'partially_paid'])
  .openapi('PaymentStatus')

const OnlinePaymentSchema = z.enum(['', 'Barion', 'SimplePay', 'no']).openapi('OnlinePayment')

const RoundSchema = z.enum(['five', 'none', 'one', 'ten']).openapi('Round')

const DocumentSettingsSchema = z
  .object({
    mediated_service: z.boolean().default(false).exactOptional(),
    online_payment: OnlinePaymentSchema.exactOptional(),
    place_id: z.int().exactOptional(),
    round: RoundSchema.exactOptional(),
    without_financial_fulfillment: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentSettings')

const DocumentVatRateSummarySchema = z
  .object({
    vat_name: z.string().exactOptional(),
    vat_percentage: z.float32().exactOptional(),
    vat_rate_gross_amount: z.float32().exactOptional(),
    vat_rate_net_amount: z.float32().exactOptional(),
    vat_rate_vat_amount: z.float32().exactOptional(),
    vat_rate_vat_amount_local: z.float32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentVatRateSummary')

const DocumentSummarySchema = z
  .object({
    gross_amount_local: z.float32().exactOptional(),
    net_amount: z.float32().exactOptional(),
    net_amount_local: z.float32().exactOptional(),
    vat_amount: z.float32().exactOptional(),
    vat_amount_local: z.float32().exactOptional(),
    vat_rate_summary: z.array(DocumentVatRateSummarySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentSummary')

const DocumentTypeSchema = z
  .enum(['advance', 'canceled', 'cancellation', 'draft', 'invoice', 'proforma'])
  .openapi('DocumentType')

const DocumentSchema = z
  .object({
    block_id: z.int().exactOptional().openapi({ description: "DocumentBlock's identifier." }),
    cancelled: z.boolean().exactOptional(),
    comment: z.string().exactOptional(),
    conversion_rate: z.float32().exactOptional(),
    currency: CurrencySchema.exactOptional(),
    due_date: z.iso.date().exactOptional(),
    electronic: z.boolean().exactOptional(),
    fulfillment_date: z.iso.date().exactOptional(),
    gross_total: z
      .float32()
      .exactOptional()
      .openapi({ description: "The document's gross total price." }),
    id: z.int().exactOptional().openapi({ description: "The document's unique identifier." }),
    invoice_date: z.iso.date().exactOptional(),
    invoice_number: z
      .string()
      .exactOptional()
      .openapi({ description: "The document's invoice number.", example: 'PREFIX / 2020-000001' }),
    items: z.array(DocumentItemSchema).exactOptional(),
    language: DocumentLanguageSchema.exactOptional(),
    notification_status: DocumentNotificationStatusSchema.exactOptional(),
    organization: DocumentOrganizationSchema.exactOptional(),
    paid_date: z.iso.date().exactOptional(),
    partner: PartnerSchema.exactOptional(),
    payment_method: PaymentMethodSchema.exactOptional(),
    payment_status: PaymentStatusSchema.exactOptional(),
    settings: DocumentSettingsSchema.exactOptional(),
    summary: DocumentSummarySchema.exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    type: DocumentTypeSchema.exactOptional(),
  })
  .openapi({ description: 'Document object representing your invoice.', required: [] })
  .openapi('Document')

const DocumentBlockSchema = z
  .object({
    custom_field1: z.string().exactOptional(),
    custom_field2: z.string().exactOptional(),
    id: z.int().exactOptional(),
    name: z.string().exactOptional(),
    prefix: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentBlock')

const DocumentBlockListSchema = z
  .object({
    current_page: z.int().exactOptional(),
    data: z.array(DocumentBlockSchema).exactOptional(),
    last_page: z.int().exactOptional(),
    next_page_url: z.string().exactOptional(),
    per_page: z.int().exactOptional(),
    prev_page_url: z.string().exactOptional(),
    total: z.int().exactOptional(),
  })
  .openapi({
    description:
      'A object with a data property that contains an array of up to limit document blocks. Each entry in the array is a separate document block object. If no more document block are available, the resulting array will be empty.',
    required: [],
  })
  .openapi('DocumentBlockList')

const DocumentItemDataSchema = z
  .object({ product_id: z.int(), quantity: z.float32() })
  .openapi({ required: ['product_id', 'quantity'] })
  .openapi('DocumentItemData')

const UnitPriceTypeSchema = z.enum(['gross', 'net']).openapi('UnitPriceType')

const DocumentProductDataSchema = z
  .object({
    comment: z.string().exactOptional(),
    name: z.string(),
    quantity: z.float32(),
    unit: z.string(),
    unit_price: z.float32(),
    unit_price_type: UnitPriceTypeSchema,
    vat: VatSchema,
  })
  .openapi({ required: ['name', 'unit_price', 'unit_price_type', 'quantity', 'unit', 'vat'] })
  .openapi('DocumentProductData')

const DocumentInsertTypeSchema = z
  .enum(['advance', 'draft', 'invoice', 'proforma'])
  .openapi('DocumentInsertType')

const DocumentInsertSchema = z
  .object({
    bank_account_id: z.int().exactOptional(),
    block_id: z.int(),
    comment: z.string().exactOptional(),
    conversion_rate: z.float32().default(1).exactOptional(),
    currency: CurrencySchema,
    due_date: z.iso.date(),
    electronic: z.boolean().default(false).exactOptional(),
    fulfillment_date: z.iso.date(),
    items: z.array(z.xor([DocumentItemDataSchema, DocumentProductDataSchema])).exactOptional(),
    language: DocumentLanguageSchema,
    paid: z.boolean().default(false).exactOptional(),
    partner_id: z.int(),
    payment_method: PaymentMethodSchema,
    settings: DocumentSettingsSchema.exactOptional(),
    type: DocumentInsertTypeSchema,
    vendor_id: z.string().exactOptional(),
  })
  .openapi({
    required: [
      'partner_id',
      'block_id',
      'type',
      'fulfillment_date',
      'due_date',
      'payment_method',
      'language',
      'currency',
    ],
  })
  .openapi('DocumentInsert')

const DocumentListSchema = z
  .object({
    current_page: z.int().exactOptional(),
    data: z.array(DocumentSchema).exactOptional(),
    last_page: z.int().exactOptional(),
    next_page_url: z.string().exactOptional(),
    per_page: z.int().exactOptional(),
    prev_page_url: z.string().exactOptional(),
    total: z.int().exactOptional(),
  })
  .openapi({
    description:
      'A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty.',
    required: [],
  })
  .openapi('DocumentList')

const DocumentPublicUrlSchema = z
  .object({ public_url: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('DocumentPublicUrl')

const IdSchema = z
  .object({ id: z.int().exactOptional(), legacy_id: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('Id')

const OnlineSzamlaStatusMessageSchema = z
  .object({
    human_readable_message: z.string().exactOptional(),
    validation_error_code: z.string().exactOptional(),
    validation_result_code: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OnlineSzamlaStatusMessage')

const OnlineSzamlaStatusSchema = z
  .object({
    messages: z.array(OnlineSzamlaStatusMessageSchema).exactOptional(),
    status: z.string().exactOptional(),
    transaction_id: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OnlineSzamlaStatus')

const OrganizationDataSchema = z
  .object({ tax_code: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('OrganizationData')

const PartnerListSchema = z
  .object({
    current_page: z.int().exactOptional(),
    data: z.array(PartnerSchema).exactOptional(),
    last_page: z.int().exactOptional(),
    next_page_url: z.string().exactOptional(),
    per_page: z.int().exactOptional(),
    prev_page_url: z.string().exactOptional(),
    total: z.int().exactOptional(),
  })
  .openapi({
    description:
      'A object with a data property that contains an array of up to limit partners. Each entry in the array is a separate partner object. If no more partners are available, the resulting array will be empty.',
    required: [],
  })
  .openapi('PartnerList')

const PaymentHistorySchema = z
  .object({
    conversion_rate: z.float32().exactOptional(),
    date: z.iso.date(),
    payment_method: PaymentMethodSchema,
    price: z.float32(),
    voucher_number: z.string().exactOptional(),
  })
  .openapi({ required: ['date', 'price', 'payment_method'] })
  .openapi('PaymentHistory')

const ProductSchema = z
  .object({
    comment: z.string().exactOptional(),
    currency: CurrencySchema,
    general_ledger_number: z.string().exactOptional(),
    general_ledger_taxcode: z.string().exactOptional(),
    id: z.int().exactOptional().openapi({ readOnly: true }),
    name: z.string(),
    net_unit_price: z.float32().exactOptional(),
    unit: z.string(),
    vat: VatSchema,
  })
  .openapi({ required: ['name', 'currency', 'vat', 'unit'] })
  .openapi('Product')

const ProductListSchema = z
  .object({
    current_page: z.int().exactOptional(),
    data: z.array(ProductSchema).exactOptional(),
    last_page: z.int().exactOptional(),
    next_page_url: z.string().exactOptional(),
    per_page: z.int().exactOptional(),
    prev_page_url: z.string().exactOptional(),
    total: z.int().exactOptional(),
  })
  .openapi({
    description:
      'A object with a data property that contains an array of up to limit products. Each entry in the array is a separate product object. If no more products are available, the resulting array will be empty.',
    required: [],
  })
  .openapi('ProductList')

const SendDocumentSchema = z
  .object({ emails: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('SendDocument')

const ServerErrorSchema = z
  .object({
    message: z.string().exactOptional(),
    trace_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'You should send us this ID to investigate the issue.' }),
  })
  .openapi({ required: [] })
  .openapi('ServerError')

const ServerErrorResponseSchema = z
  .object({ error: ServerErrorSchema.exactOptional() })
  .openapi({
    example: {
      error: { message: 'Internal Server Error.', trace_id: '664b218f93954a3480cb0ddb8f919c3f' },
    },
    required: [],
  })
  .openapi('ServerErrorResponse')

const ValidationErrorSchema = z
  .object({ field: z.string().exactOptional(), message: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ValidationError')

const ValidationErrorResponseSchema = z
  .object({
    errors: z.array(ValidationErrorSchema).exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidationErrorResponse')

const BadRequestResponse = {
  description: 'The request is malformed.',
  content: { 'application/json': { schema: ClientErrorResponseSchema } },
  headers: z.object({
    'Retry-After': {
      description: 'How many seconds you have to wait before making new request.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'How many seconds you have to wait before making new request.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Limit': {
      description: 'Request limit per minute.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({ description: 'Request limit per minute.', param: { required: false } }),
    },
    'X-RateLimit-Remaining': {
      description: 'The number of requests left for the time window.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The number of requests left for the time window.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Reset': {
      description: 'The timestamp at which the current rate limit window resets.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The timestamp at which the current rate limit window resets.',
          param: { required: false },
        }),
    },
  }),
}

const ForbiddenResponse = {
  description: "Authenticated user doesn't have access to the resource.",
  content: { 'application/json': { schema: ClientErrorResponseSchema } },
  headers: z.object({
    'Retry-After': {
      description: 'How many seconds you have to wait before making new request.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'How many seconds you have to wait before making new request.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Limit': {
      description: 'Request limit per minute.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({ description: 'Request limit per minute.', param: { required: false } }),
    },
    'X-RateLimit-Remaining': {
      description: 'The number of requests left for the time window.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The number of requests left for the time window.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Reset': {
      description: 'The timestamp at which the current rate limit window resets.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The timestamp at which the current rate limit window resets.',
          param: { required: false },
        }),
    },
  }),
}

const NotFoundResponse = {
  description: 'Non-existent resource is requested.',
  content: { 'application/json': { schema: ClientErrorResponseSchema } },
  headers: z.object({
    'Retry-After': {
      description: 'How many seconds you have to wait before making new request.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'How many seconds you have to wait before making new request.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Limit': {
      description: 'Request limit per minute.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({ description: 'Request limit per minute.', param: { required: false } }),
    },
    'X-RateLimit-Remaining': {
      description: 'The number of requests left for the time window.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The number of requests left for the time window.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Reset': {
      description: 'The timestamp at which the current rate limit window resets.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The timestamp at which the current rate limit window resets.',
          param: { required: false },
        }),
    },
  }),
}

const ServerErrorResponse = {
  description: 'Internal server error.',
  content: { 'application/json': { schema: ServerErrorResponseSchema } },
  headers: z.object({
    'Retry-After': {
      description: 'How many seconds you have to wait before making new request.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'How many seconds you have to wait before making new request.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Limit': {
      description: 'Request limit per minute.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({ description: 'Request limit per minute.', param: { required: false } }),
    },
    'X-RateLimit-Remaining': {
      description: 'The number of requests left for the time window.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The number of requests left for the time window.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Reset': {
      description: 'The timestamp at which the current rate limit window resets.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The timestamp at which the current rate limit window resets.',
          param: { required: false },
        }),
    },
  }),
}

const UnauthorizedResponse = {
  description: 'Authorization information is missing or invalid.',
  content: { 'application/json': { schema: ClientErrorResponseSchema } },
  headers: z.object({
    'Retry-After': {
      description: 'How many seconds you have to wait before making new request.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'How many seconds you have to wait before making new request.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Limit': {
      description: 'Request limit per minute.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({ description: 'Request limit per minute.', param: { required: false } }),
    },
    'X-RateLimit-Remaining': {
      description: 'The number of requests left for the time window.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The number of requests left for the time window.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Reset': {
      description: 'The timestamp at which the current rate limit window resets.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The timestamp at which the current rate limit window resets.',
          param: { required: false },
        }),
    },
  }),
}

const UnprocessableEntityResponse = {
  description: 'Validation errors occured.',
  content: { 'application/json': { schema: ValidationErrorResponseSchema } },
  headers: z.object({
    'Retry-After': {
      description: 'How many seconds you have to wait before making new request.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'How many seconds you have to wait before making new request.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Limit': {
      description: 'Request limit per minute.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({ description: 'Request limit per minute.', param: { required: false } }),
    },
    'X-RateLimit-Remaining': {
      description: 'The number of requests left for the time window.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The number of requests left for the time window.',
          param: { required: false },
        }),
    },
    'X-RateLimit-Reset': {
      description: 'The timestamp at which the current rate limit window resets.',
      schema: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'The timestamp at which the current rate limit window resets.',
          param: { required: false },
        }),
    },
  }),
}

const ApiKeySecurityScheme = { in: 'header', name: 'X-API-KEY', type: 'apiKey' }

export const getBankAccountsRoute = createRoute({
  method: 'get',
  path: '/bank-accounts',
  tags: ['BankAccount'],
  summary: 'List all bank account',
  description:
    'Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.',
  operationId: 'ListBankAccount',
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
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '1', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 25, maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: BankAccountListSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const postBankAccountsRoute = createRoute({
  method: 'post',
  path: '/bank-accounts',
  tags: ['BankAccount'],
  summary: 'Create a bank account',
  description:
    'Create a new bank account. Returns a bank account object if the create is succeded.',
  operationId: 'CreateBankAccount',
  request: {
    body: {
      description: 'BankAccount object that you would like to store.',
      content: { 'application/json': { schema: BankAccountSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'BankAccount created successfully.',
      content: { 'application/json': { schema: BankAccountSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getBankAccountsIdRoute = createRoute({
  method: 'get',
  path: '/bank-accounts/{id}',
  tags: ['BankAccount'],
  summary: 'Retrieve a bank account',
  description: 'Retrieves the details of an existing bank account.',
  operationId: 'GetBankAccount',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: BankAccountSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const putBankAccountsIdRoute = createRoute({
  method: 'put',
  path: '/bank-accounts/{id}',
  tags: ['BankAccount'],
  summary: 'Update a bank account',
  description:
    'Update an existing bank accounts. Returns a bank account object if the update is succeded.',
  operationId: 'UpdateBankAccount',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Bank account object that you would like to update.',
      content: { 'application/json': { schema: BankAccountSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Bank account updated successfully.',
      content: { 'application/json': { schema: BankAccountSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const deleteBankAccountsIdRoute = createRoute({
  method: 'delete',
  path: '/bank-accounts/{id}',
  tags: ['BankAccount'],
  summary: 'Delete a bank account',
  description: 'Delete an existing bank account.',
  operationId: 'DeleteBankAccount',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Bank account deleted successfully.',
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getCurrenciesRoute = createRoute({
  method: 'get',
  path: '/currencies',
  tags: ['Currency'],
  summary: 'Get currencies exchange rate.',
  description: 'Return with the exchange value of given currencies.',
  operationId: 'GetConversionRate',
  request: {
    query: z.object({
      from: CurrencySchema.openapi({
        param: {
          in: 'query',
          name: 'from',
          required: true,
          schema: { $ref: '#/components/schemas/Currency' },
        },
      }),
      to: CurrencySchema.openapi({
        param: {
          in: 'query',
          name: 'to',
          required: true,
          schema: { $ref: '#/components/schemas/Currency' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Currencies exchange rate returned.',
      content: { 'application/json': { schema: ConversationRateSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getDocumentBlocksRoute = createRoute({
  method: 'get',
  path: '/document-blocks',
  tags: ['DocumentBlock'],
  summary: 'List all document blocks',
  description:
    'Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.',
  operationId: 'ListDocumentBlock',
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
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '1', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 25, maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: DocumentBlockListSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getDocumentsRoute = createRoute({
  method: 'get',
  path: '/documents',
  tags: ['Document'],
  summary: 'List all documents',
  description:
    'Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.',
  operationId: 'ListDocument',
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
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '1', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 25, maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
      block_id: z
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
            description: 'Filter documents by the identifier of your DocumentBlock.',
            in: 'query',
            name: 'block_id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      partner_id: z
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
            description: 'Filter documents by the identifier of your Partner.',
            in: 'query',
            name: 'partner_id',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      payment_method: PaymentMethodSchema.openapi({
        param: {
          description: 'Filter documents by PaymentMethod value.',
          example: 'cash',
          in: 'query',
          name: 'payment_method',
          required: false,
          schema: { $ref: '#/components/schemas/PaymentMethod' },
        },
      }).exactOptional(),
      payment_status: PaymentStatusSchema.openapi({
        param: {
          description: 'Filter documents by PaymentStatus value.',
          example: 'paid',
          in: 'query',
          name: 'payment_status',
          required: false,
          schema: { $ref: '#/components/schemas/PaymentStatus' },
        },
      }).exactOptional(),
      start_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter documents by date.',
            example: '2020-05-15',
            in: 'query',
            name: 'start_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      end_date: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter documents by date.',
            example: '2020-05-15',
            in: 'query',
            name: 'end_date',
            required: false,
            schema: { format: 'date', type: 'string' },
          },
        }),
      start_number: z
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
            description:
              'Starting number of the document, should not contain year or any other formatting. Required if `start_year` given',
            example: '1',
            in: 'query',
            name: 'start_number',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      end_number: z
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
            description:
              'Ending number of the document, should not contain year or any other formatting. Required if `end_year` given',
            example: '10',
            in: 'query',
            name: 'end_number',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      start_year: z
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
            description: 'Year for `start_number` parameter. Required if `start_number` given.',
            example: '2020',
            in: 'query',
            name: 'start_year',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      end_year: z
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
            description: 'Year for `end_number` parameter. Required if `end_number` given.',
            example: '2020',
            in: 'query',
            name: 'end_year',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: DocumentListSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const postDocumentsRoute = createRoute({
  method: 'post',
  path: '/documents',
  tags: ['Document'],
  summary: 'Create a document',
  description: 'Create a new document. Returns a document object if the create is succeded.',
  operationId: 'CreateDocument',
  request: {
    body: {
      description: 'DocumentInsert object that you would like to store.',
      content: { 'application/json': { schema: DocumentInsertSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Document created successfully.',
      content: { 'application/json': { schema: DocumentSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getDocumentsIdRoute = createRoute({
  method: 'get',
  path: '/documents/{id}',
  tags: ['Document'],
  summary: 'Retrieve a document',
  description: 'Retrieves the details of an existing document.',
  operationId: 'GetDocument',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: DocumentSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const postDocumentsIdCancelRoute = createRoute({
  method: 'post',
  path: '/documents/{id}/cancel',
  tags: ['Document'],
  summary: 'Cancel a document',
  description:
    'Cancel a document. Returns a cancellation document object if the cancellation is succeded.',
  operationId: 'CancelDocument',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Document cancellation successfully. Cancel document returned.',
      content: { 'application/json': { schema: DocumentSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const postDocumentsIdCreateFromProformaRoute = createRoute({
  method: 'post',
  path: '/documents/{id}/create-from-proforma',
  tags: ['Document'],
  summary: 'Create a document from proforma.',
  description:
    'Create a new document from proforma. Returns a document object if the create is succeded.',
  operationId: 'CreateDocumentFromProforma',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Document created successfully.',
      content: { 'application/json': { schema: DocumentSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getDocumentsIdDownloadRoute = createRoute({
  method: 'get',
  path: '/documents/{id}/download',
  tags: ['Document'],
  summary: 'Download a document in PDF format.',
  description: 'Download a document. Returns a document in PDF format.',
  operationId: 'DownloadDocument',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Document PDF file.',
      content: {
        'application/pdf': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    202: {
      description: 'Document PDF has not generated yet. You should try to download again later.',
      content: { 'application/json': { schema: ClientErrorSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getDocumentsIdOnlineSzamlaRoute = createRoute({
  method: 'get',
  path: '/documents/{id}/online-szamla',
  tags: ['Document'],
  summary: 'Retrieve a document Online Számla status',
  description: 'Retrieves the details of an existing document status.',
  operationId: 'GetOnlineSzamlaStatus',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: OnlineSzamlaStatusSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getDocumentsIdPaymentsRoute = createRoute({
  method: 'get',
  path: '/documents/{id}/payments',
  tags: ['Document'],
  summary: 'Retrieve a payment histroy',
  description: 'Retrieves the details of payment history an existing document.',
  operationId: 'GetPayment',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: z.array(PaymentHistorySchema) } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const putDocumentsIdPaymentsRoute = createRoute({
  method: 'put',
  path: '/documents/{id}/payments',
  tags: ['Document'],
  summary: 'Update payment history',
  description:
    'Update payment history an existing document. Returns a payment history object if the update is succeded.',
  operationId: 'UpdatePayment',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Payment history object that you would like to update.',
      content: { 'application/json': { schema: z.array(PaymentHistorySchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Payment history updated successfully.',
      content: { 'application/json': { schema: z.array(PaymentHistorySchema) } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const deleteDocumentsIdPaymentsRoute = createRoute({
  method: 'delete',
  path: '/documents/{id}/payments',
  tags: ['Document'],
  summary: 'Delete all payment history on document',
  description: 'Delete all exist payment history on document.',
  operationId: 'DeletePayment',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Payment history deleted successfully.',
      content: { 'application/json': { schema: z.array(PaymentHistorySchema) } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getDocumentsIdPublicUrlRoute = createRoute({
  method: 'get',
  path: '/documents/{id}/public-url',
  tags: ['Document'],
  summary: 'Retrieve a document download public url.',
  description: 'Retrieves public url to download an existing document.',
  operationId: 'GetPublicUrl',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: DocumentPublicUrlSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const postDocumentsIdSendRoute = createRoute({
  method: 'post',
  path: '/documents/{id}/send',
  tags: ['Document'],
  summary: 'Send invoice to given email adresses.',
  description: 'Returns a list of emails, where the invoice is sent.',
  operationId: 'SendDocument',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'List of email-s where you want to send the invoice.',
      content: { 'application/json': { schema: SendDocumentSchema } },
    },
  },
  responses: {
    200: {
      description: 'List of email adresses where the invoice sent.',
      content: { 'application/json': { schema: SendDocumentSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getOrganizationRoute = createRoute({
  method: 'get',
  path: '/organization',
  tags: ['Organization'],
  summary: 'Retrieve a organization data.',
  description: 'Retrieves the data of organization.',
  operationId: 'GetOrganizationData',
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: OrganizationDataSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getPartnersRoute = createRoute({
  method: 'get',
  path: '/partners',
  tags: ['Partner'],
  summary: 'List all partners',
  description:
    'Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.',
  operationId: 'ListPartner',
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
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '1', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 25, maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: PartnerListSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const postPartnersRoute = createRoute({
  method: 'post',
  path: '/partners',
  tags: ['Partner'],
  summary: 'Create a partner',
  description: 'Create a new partner. Returns a partner object if the create is succeded.',
  operationId: 'CreatePartner',
  request: {
    body: {
      description: 'PartnerUpsert object that you would like to store.',
      content: { 'application/json': { schema: PartnerUpsertSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Partner created successfully.',
      content: { 'application/json': { schema: PartnerSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getPartnersIdRoute = createRoute({
  method: 'get',
  path: '/partners/{id}',
  tags: ['Partner'],
  summary: 'Retrieve a partner',
  description: 'Retrieves the details of an existing partner.',
  operationId: 'GetPartner',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: PartnerSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const putPartnersIdRoute = createRoute({
  method: 'put',
  path: '/partners/{id}',
  tags: ['Partner'],
  summary: 'Update a partner',
  description: 'Update an existing partner. Returns a partner object if the update is succeded.',
  operationId: 'UpdatePartner',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Partner object that you would like to update.',
      content: { 'application/json': { schema: PartnerUpsertSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Partner updated successfully.',
      content: { 'application/json': { schema: PartnerSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const deletePartnersIdRoute = createRoute({
  method: 'delete',
  path: '/partners/{id}',
  tags: ['Partner'],
  summary: 'Delete a partner',
  description: 'Delete an existing partner.',
  operationId: 'DeletePartner',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Partner deleted successfully.',
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getProductsRoute = createRoute({
  method: 'get',
  path: '/products',
  tags: ['Product'],
  summary: 'List all product',
  description:
    'Returns a list of your products. The partners are returned sorted by creation date, with the most recent partners appearing first.',
  operationId: 'ListProduct',
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
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '1', type: 'integer' },
          },
        }),
      per_page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'per_page',
            required: false,
            schema: { default: 25, maximum: 100, minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: ProductListSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const postProductsRoute = createRoute({
  method: 'post',
  path: '/products',
  tags: ['Product'],
  summary: 'Create a product',
  description: 'Create a new product. Returns a product object if the create is succeded.',
  operationId: 'CreateProduct',
  request: {
    body: {
      description: 'Product object that you would like to store.',
      content: { 'application/json': { schema: ProductSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Product created successfully.',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const getProductsIdRoute = createRoute({
  method: 'get',
  path: '/products/{id}',
  tags: ['Product'],
  summary: 'Retrieve a product',
  description: 'Retrieves the details of an existing product.',
  operationId: 'GetProduct',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const putProductsIdRoute = createRoute({
  method: 'put',
  path: '/products/{id}',
  tags: ['Product'],
  summary: 'Update a product',
  description: 'Update an existing product. Returns a product object if the update is succeded.',
  operationId: 'UpdateProduct',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Product object that you would like to update.',
      content: { 'application/json': { schema: ProductSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Product updated successfully.',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

export const deleteProductsIdRoute = createRoute({
  method: 'delete',
  path: '/products/{id}',
  tags: ['Product'],
  summary: 'Delete a product',
  description: 'Delete an existing product.',
  operationId: 'DeleteProduct',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Product deleted successfully.',
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: NotFoundResponse,
    500: ServerErrorResponse,
  },
})

export const getUtilsConvertLegacyIdIdRoute = createRoute({
  method: 'get',
  path: '/utils/convert-legacy-id/{id}',
  tags: ['Util'],
  summary: 'Convert legacy ID to v3 ID.',
  description: 'Retrieves the API v3 ID.',
  operationId: 'GetId',
  request: {
    params: z.object({
      id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'id', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      content: { 'application/json': { schema: IdSchema } },
      headers: z.object({
        'Retry-After': {
          description: 'How many seconds you have to wait before making new request.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'How many seconds you have to wait before making new request.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Limit': {
          description: 'Request limit per minute.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Request limit per minute.', param: { required: false } }),
        },
        'X-RateLimit-Remaining': {
          description: 'The number of requests left for the time window.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The number of requests left for the time window.',
              param: { required: false },
            }),
        },
        'X-RateLimit-Reset': {
          description: 'The timestamp at which the current rate limit window resets.',
          schema: z
            .int32()
            .exactOptional()
            .openapi({
              description: 'The timestamp at which the current rate limit window resets.',
              param: { required: false },
            }),
        },
      }),
    },
    400: BadRequestResponse,
    401: UnauthorizedResponse,
    404: NotFoundResponse,
    422: UnprocessableEntityResponse,
    500: ServerErrorResponse,
  },
})

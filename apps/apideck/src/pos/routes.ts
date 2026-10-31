import { createRoute, z } from '@hono/zod-openapi'

const ActiveSchema = z
  .boolean()
  .nullable()
  .openapi({ example: true, title: 'Is active' })
  .openapi('Active')

const RowVersionSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.',
    example: '1-12345',
    title: 'Row version',
  })
  .openapi('RowVersion')

const AddressSchema = z
  .strictObject({
    city: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of city.', example: 'San Francisco' }),
    contact_name: z.string().nullable().exactOptional().openapi({ example: 'Elon Musk' }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'country code according to ISO 3166-1 alpha-2.', example: 'US' }),
    county: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Address field that holds a sublocality, such as a county',
        example: 'Santa Clara',
      }),
    email: z.string().nullable().exactOptional().openapi({ example: 'elon@musk.com' }),
    fax: z.string().nullable().exactOptional().openapi({ example: '122-111-1111' }),
    id: z.string().nullable().exactOptional().openapi({ example: '123' }),
    latitude: z.string().nullable().exactOptional().openapi({ example: '40.759211' }),
    line1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Line 1 of the address e.g. number, street, suite, apt #, etc.',
        example: 'Main street',
      }),
    line2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Line 2 of the address', example: 'apt #' }),
    line3: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Line 3 of the address', example: 'Suite #' }),
    line4: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Line 4 of the address', example: 'delivery instructions' }),
    longitude: z.string().nullable().exactOptional().openapi({ example: '-73.984638' }),
    name: z.string().nullable().exactOptional().openapi({ example: 'HQ US' }),
    phone_number: z.string().nullable().exactOptional().openapi({ example: '111-111-1111' }),
    postal_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Zip code or equivalent.', example: '94104' }),
    row_version: RowVersionSchema.exactOptional(),
    salutation: z.string().nullable().exactOptional().openapi({ example: 'Mr' }),
    state: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of state', example: 'CA' }),
    street_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Street number', example: '25' }),
    string: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        example: '25 Spring Street, Blackburn, VIC 3130',
        title: "The address string. Some APIs don't provide structured address data.",
      }),
    type: z
      .enum(['primary', 'secondary', 'home', 'office', 'shipping', 'billing', 'other'])
      .exactOptional()
      .openapi({
        example: 'primary',
        'x-apideck-enum-id': 'addresses.type',
        'x-graphql-type-name': 'AddressType',
      }),
    website: z.string().nullable().exactOptional().openapi({ example: 'https://elonmusk.com' }),
  })
  .openapi({
    'x-apideck-schema-id': 'Address',
    'x-apideck-weights': {
      city: 'high',
      contact_name: 'edge-case',
      country: 'high',
      county: 'edge-case',
      email: 'edge-case',
      fax: 'edge-case',
      id: 'edge-case',
      latitude: 'low',
      line1: 'high',
      line2: 'low',
      line3: 'edge-case',
      line4: 'edge-case',
      longitude: 'low',
      name: 'edge-case',
      phone_number: 'edge-case',
      postal_code: 'high',
      row_version: 'edge-case',
      salutation: 'edge-case',
      state: 'high',
      street_number: 'low',
      string: 'low',
      type: 'critical',
      website: 'edge-case',
    },
    required: [],
  })
  .openapi('Address')

const AvailableSchema = z
  .boolean()
  .nullable()
  .openapi({ example: true, title: 'Available' })
  .openapi('Available')

const BadRequestResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: 'Missing property foobar' }),
        z.object({}).openapi({ example: { missing: [{ foobar: 'required' }] } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Bad Request',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid Params',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#requestvalidationerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 400 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'RequestValidationError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'BadRequest', required: [] })
  .openapi('BadRequestResponse')

const UnifiedIdSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the resource',
        example: '12345',
        readOnly: true,
        title: 'Id',
      }),
  })
  .openapi({ required: ['id'], title: 'UnifiedId', 'x-apideck-schema-id': 'Id' })
  .openapi('UnifiedId')

const CreateItemResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Items' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateItemResponse',
  })
  .openapi('CreateItemResponse')

const CreateLocationResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Locations' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateLocationResponse',
  })
  .openapi('CreateLocationResponse')

const CreateMerchantResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Merchants' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateMerchantResponse',
  })
  .openapi('CreateMerchantResponse')

const CreateModifierGroupResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ModifierGroups' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateModifierGroupResponse',
  })
  .openapi('CreateModifierGroupResponse')

const CreateModifierResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Modifiers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateModifierResponse',
  })
  .openapi('CreateModifierResponse')

const CreateOrderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'orders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateOrderResponse',
  })
  .openapi('CreateOrderResponse')

const CreateOrderTypeResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'OrderTypes' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateOrderTypeResponse',
  })
  .openapi('CreateOrderTypeResponse')

const CreatePosPaymentResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'PosPayments' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreatePosPaymentResponse',
  })
  .openapi('CreatePosPaymentResponse')

const CreateTenderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Tenders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateTenderResponse',
  })
  .openapi('CreateTenderResponse')

const CreatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'The date and time when the object was created.',
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Created at (timestamp)',
  })
  .openapi('CreatedAt')

const CreatedBySchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The user who created the object.',
    example: '12345',
    readOnly: true,
    title: 'Created by',
  })
  .openapi('CreatedBy')

const CurrencySchema = z
  .enum([
    'UNKNOWN_CURRENCY',
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BOV',
    'BRL',
    'BSD',
    'BTN',
    'BWP',
    'BYR',
    'BZD',
    'CAD',
    'CDF',
    'CHE',
    'CHF',
    'CHW',
    'CLF',
    'CLP',
    'CNY',
    'COP',
    'COU',
    'CRC',
    'CUC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'GBP',
    'GEL',
    'GHS',
    'GIP',
    'GMD',
    'GNF',
    'GTQ',
    'GYD',
    'HKD',
    'HNL',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'KMF',
    'KPW',
    'KRW',
    'KWD',
    'KYD',
    'KZT',
    'LAK',
    'LBP',
    'LKR',
    'LRD',
    'LSL',
    'LTL',
    'LVL',
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRO',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
    'MXV',
    'MYR',
    'MZN',
    'NAD',
    'NGN',
    'NIO',
    'NOK',
    'NPR',
    'NZD',
    'OMR',
    'PAB',
    'PEN',
    'PGK',
    'PHP',
    'PKR',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD',
    'RUB',
    'RWF',
    'SAR',
    'SBD',
    'SCR',
    'SDG',
    'SEK',
    'SGD',
    'SHP',
    'SLL',
    'SOS',
    'SRD',
    'SSP',
    'STD',
    'SVC',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRC',
    'TRY',
    'TTD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'USN',
    'USS',
    'UYI',
    'UYU',
    'UZS',
    'VEF',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XAG',
    'XAU',
    'XBA',
    'XBB',
    'XBC',
    'XBD',
    'XCD',
    'XDR',
    'XOF',
    'XPD',
    'XPF',
    'XPT',
    'XTS',
    'XXX',
    'YER',
    'ZAR',
    'ZMK',
    'ZMW',
    'BTC',
    'ETH',
  ])
  .nullable()
  .openapi({
    description:
      'Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).',
    example: 'USD',
    title: 'Currency',
    'x-apideck-enum-coverage-ignore': true,
    'x-apideck-enum-id': 'currencies',
    'x-enum-elements': [
      { description: 'Unknown currency', name: 'UNKNOWN_CURRENCY' },
      { description: 'United Arab Emirates dirham', name: 'AED' },
      { description: 'Afghan afghani', name: 'AFN' },
      { description: 'Albanian lek', name: 'ALL' },
      { description: 'Armenian dram', name: 'AMD' },
      { description: 'Netherlands Antillean guilder', name: 'ANG' },
      { description: 'Angolan kwanza', name: 'AOA' },
      { description: 'Argentine peso', name: 'ARS' },
      { description: 'Australian dollar', name: 'AUD' },
      { description: 'Aruban florin', name: 'AWG' },
      { description: 'Azerbaijani manat', name: 'AZN' },
      { description: 'Bosnia and Herzegovina convertible mark', name: 'BAM' },
      { description: 'Barbados dollar', name: 'BBD' },
      { description: 'Bangladeshi taka', name: 'BDT' },
      { description: 'Bulgarian lev', name: 'BGN' },
      { description: 'Bahraini dinar', name: 'BHD' },
      { description: 'Burundian franc', name: 'BIF' },
      { description: 'Bermudian dollar', name: 'BMD' },
      { description: 'Brunei dollar', name: 'BND' },
      { description: 'Boliviano', name: 'BOB' },
      { description: 'Bolivian Mvdol', name: 'BOV' },
      { description: 'Brazilian real', name: 'BRL' },
      { description: 'Bahamian dollar', name: 'BSD' },
      { description: 'Bhutanese ngultrum', name: 'BTN' },
      { description: 'Botswana pula', name: 'BWP' },
      { description: 'Belarusian ruble', name: 'BYR' },
      { description: 'Belize dollar', name: 'BZD' },
      { description: 'Canadian dollar', name: 'CAD' },
      { description: 'Congolese franc', name: 'CDF' },
      { description: 'WIR Euro', name: 'CHE' },
      { description: 'Swiss franc', name: 'CHF' },
      { description: 'WIR Franc', name: 'CHW' },
      { description: 'Unidad de Fomento', name: 'CLF' },
      { description: 'Chilean peso', name: 'CLP' },
      { description: 'Chinese yuan', name: 'CNY' },
      { description: 'Colombian peso', name: 'COP' },
      { description: 'Unidad de Valor Real', name: 'COU' },
      { description: 'Costa Rican colon', name: 'CRC' },
      { description: 'Cuban convertible peso', name: 'CUC' },
      { description: 'Cuban peso', name: 'CUP' },
      { description: 'Cape Verdean escudo', name: 'CVE' },
      { description: 'Czech koruna', name: 'CZK' },
      { description: 'Djiboutian franc', name: 'DJF' },
      { description: 'Danish krone', name: 'DKK' },
      { description: 'Dominican peso', name: 'DOP' },
      { description: 'Algerian dinar', name: 'DZD' },
      { description: 'Egyptian pound', name: 'EGP' },
      { description: 'Eritrean nakfa', name: 'ERN' },
      { description: 'Ethiopian birr', name: 'ETB' },
      { description: 'Euro', name: 'EUR' },
      { description: 'Fiji dollar', name: 'FJD' },
      { description: 'Falkland Islands pound', name: 'FKP' },
      { description: 'Pound sterling', name: 'GBP' },
      { description: 'Georgian lari', name: 'GEL' },
      { description: 'Ghanaian cedi', name: 'GHS' },
      { description: 'Gibraltar pound', name: 'GIP' },
      { description: 'Gambian dalasi', name: 'GMD' },
      { description: 'Guinean franc', name: 'GNF' },
      { description: 'Guatemalan quetzal', name: 'GTQ' },
      { description: 'Guyanese dollar', name: 'GYD' },
      { description: 'Hong Kong dollar', name: 'HKD' },
      { description: 'Honduran lempira', name: 'HNL' },
      { description: 'Croatian kuna', name: 'HRK' },
      { description: 'Haitian gourde', name: 'HTG' },
      { description: 'Hungarian forint', name: 'HUF' },
      { description: 'Indonesian rupiah', name: 'IDR' },
      { description: 'Israeli new shekel', name: 'ILS' },
      { description: 'Indian rupee', name: 'INR' },
      { description: 'Iraqi dinar', name: 'IQD' },
      { description: 'Iranian rial', name: 'IRR' },
      { description: 'Icelandic króna', name: 'ISK' },
      { description: 'Jamaican dollar', name: 'JMD' },
      { description: 'Jordanian dinar', name: 'JOD' },
      { description: 'Japanese yen', name: 'JPY' },
      { description: 'Kenyan shilling', name: 'KES' },
      { description: 'Kyrgyzstani som', name: 'KGS' },
      { description: 'Cambodian riel', name: 'KHR' },
      { description: 'Comoro franc', name: 'KMF' },
      { description: 'North Korean won', name: 'KPW' },
      { description: 'South Korean won', name: 'KRW' },
      { description: 'Kuwaiti dinar', name: 'KWD' },
      { description: 'Cayman Islands dollar', name: 'KYD' },
      { description: 'Kazakhstani tenge', name: 'KZT' },
      { description: 'Lao kip', name: 'LAK' },
      { description: 'Lebanese pound', name: 'LBP' },
      { description: 'Sri Lankan rupee', name: 'LKR' },
      { description: 'Liberian dollar', name: 'LRD' },
      { description: 'Lesotho loti', name: 'LSL' },
      { description: 'Lithuanian litas', name: 'LTL' },
      { description: 'Latvian lats', name: 'LVL' },
      { description: 'Libyan dinar', name: 'LYD' },
      { description: 'Moroccan dirham', name: 'MAD' },
      { description: 'Moldovan leu', name: 'MDL' },
      { description: 'Malagasy ariary', name: 'MGA' },
      { description: 'Macedonian denar', name: 'MKD' },
      { description: 'Myanmar kyat', name: 'MMK' },
      { description: 'Mongolian tögrög', name: 'MNT' },
      { description: 'Macanese pataca', name: 'MOP' },
      { description: 'Mauritanian ouguiya', name: 'MRO' },
      { description: 'Mauritian rupee', name: 'MUR' },
      { description: 'Maldivian rufiyaa', name: 'MVR' },
      { description: 'Malawian kwacha', name: 'MWK' },
      { description: 'Mexican peso', name: 'MXN' },
      { description: 'Mexican Unidad de Inversion', name: 'MXV' },
      { description: 'Malaysian ringgit', name: 'MYR' },
      { description: 'Mozambican metical', name: 'MZN' },
      { description: 'Namibian dollar', name: 'NAD' },
      { description: 'Nigerian naira', name: 'NGN' },
      { description: 'Nicaraguan córdoba', name: 'NIO' },
      { description: 'Norwegian krone', name: 'NOK' },
      { description: 'Nepalese rupee', name: 'NPR' },
      { description: 'New Zealand dollar', name: 'NZD' },
      { description: 'Omani rial', name: 'OMR' },
      { description: 'Panamanian balboa', name: 'PAB' },
      { description: 'Peruvian sol', name: 'PEN' },
      { description: 'Papua New Guinean kina', name: 'PGK' },
      { description: 'Philippine peso', name: 'PHP' },
      { description: 'Pakistani rupee', name: 'PKR' },
      { description: 'Polish złoty', name: 'PLN' },
      { description: 'Paraguayan guaraní', name: 'PYG' },
      { description: 'Qatari riyal', name: 'QAR' },
      { description: 'Romanian leu', name: 'RON' },
      { description: 'Serbian dinar', name: 'RSD' },
      { description: 'Russian ruble', name: 'RUB' },
      { description: 'Rwandan franc', name: 'RWF' },
      { description: 'Saudi riyal', name: 'SAR' },
      { description: 'Solomon Islands dollar', name: 'SBD' },
      { description: 'Seychelles rupee', name: 'SCR' },
      { description: 'Sudanese pound', name: 'SDG' },
      { description: 'Swedish krona', name: 'SEK' },
      { description: 'Singapore dollar', name: 'SGD' },
      { description: 'Saint Helena pound', name: 'SHP' },
      { description: 'Sierra Leonean leone', name: 'SLL' },
      { description: 'Somali shilling', name: 'SOS' },
      { description: 'Surinamese dollar', name: 'SRD' },
      { description: 'South Sudanese pound', name: 'SSP' },
      { description: 'São Tomé and Príncipe dobra', name: 'STD' },
      { description: 'Salvadoran colón', name: 'SVC' },
      { description: 'Syrian pound', name: 'SYP' },
      { description: 'Swazi lilangeni', name: 'SZL' },
      { description: 'Thai baht', name: 'THB' },
      { description: 'Tajikstani somoni', name: 'TJS' },
      { description: 'Turkmenistan manat', name: 'TMT' },
      { description: 'Tunisian dinar', name: 'TND' },
      { description: "Tongan pa'anga", name: 'TOP' },
      { description: 'Turkish lira', name: 'TRY' },
      { description: 'Trinidad and Tobago dollar', name: 'TTD' },
      { description: 'New Taiwan dollar', name: 'TWD' },
      { description: 'Tanzanian shilling', name: 'TZS' },
      { description: 'Ukrainian hryvnia', name: 'UAH' },
      { description: 'Ugandan shilling', name: 'UGX' },
      { description: 'United States dollar', name: 'USD' },
      { description: 'United States dollar (next day)', name: 'USN' },
      { description: 'United States dollar (same day)', name: 'USS' },
      { description: 'Uruguay Peso en Unidedades Indexadas', name: 'UYI' },
      { description: 'Uruguyan peso', name: 'UYU' },
      { description: 'Uzbekistan som', name: 'UZS' },
      { description: 'Venezuelan bolívar soberano', name: 'VEF' },
      { description: 'Vietnamese đồng', name: 'VND' },
      { description: 'Vanuatu vatu', name: 'VUV' },
      { description: 'Samoan tala', name: 'WST' },
      { description: 'CFA franc BEAC', name: 'XAF' },
      { description: 'Silver', name: 'XAG' },
      { description: 'Gold', name: 'XAU' },
      { description: 'European Composite Unit', name: 'XBA' },
      { description: 'European Monetary Unit', name: 'XBB' },
      { description: 'European Unit of Account 9', name: 'XBC' },
      { description: 'European Unit of Account 17', name: 'XBD' },
      { description: 'East Caribbean dollar', name: 'XCD' },
      { description: 'Special drawing rights (International Monetary Fund)', name: 'XDR' },
      { description: 'CFA franc BCEAO', name: 'XOF' },
      { description: 'Palladium', name: 'XPD' },
      { description: 'CFP franc', name: 'XPF' },
      { description: 'Platinum', name: 'XPT' },
      { description: 'Code reserved for testing', name: 'XTS' },
      { description: 'No currency', name: 'XXX' },
      { description: 'Yemeni rial', name: 'YER' },
      { description: 'South African rand', name: 'ZAR' },
      { description: 'Zambian kwacha', name: 'ZMK' },
      { description: 'Zambian kwacha', name: 'ZMW' },
      { description: 'Bitcoin', name: 'BTC' },
      { description: 'Ether', name: 'ETH' },
    ],
  })
  .openapi('Currency')

const CustomFieldSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'More information about the custom field',
        example: 'Employee Level',
        title: 'Description',
      }),
    id: z.string().openapi({ example: '2389328923893298', title: 'ID' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the custom field.',
        example: 'employee_level',
        title: 'Name',
      }),
    value: z
      .union([
        z.string().nullable().openapi({ example: 'Uses Salesforce and Marketo' }),
        z.number().nullable().openapi({ example: 10 }),
        z.boolean().nullable().openapi({ example: true }),
        z.array(z.string()),
      ])
      .exactOptional(),
  })
  .openapi({
    required: ['id'],
    'x-apideck-schema-id': 'CustomField',
    'x-apideck-weights': {
      description: 'edge-case',
      id: 'critical',
      name: 'medium',
      value: 'critical',
    },
  })
  .openapi('CustomField')

const DeleteItemResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Items' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteItemResponse',
  })
  .openapi('DeleteItemResponse')

const DeleteLocationResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Locations' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteLocationResponse',
  })
  .openapi('DeleteLocationResponse')

const DeleteMerchantResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Merchants' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteMerchantResponse',
  })
  .openapi('DeleteMerchantResponse')

const DeleteModifierGroupResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ModifierGroups' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteModifierGroupResponse',
  })
  .openapi('DeleteModifierGroupResponse')

const DeleteModifierResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Modifiers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteModifierResponse',
  })
  .openapi('DeleteModifierResponse')

const DeleteOrderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'orders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteOrderResponse',
  })
  .openapi('DeleteOrderResponse')

const DeleteOrderTypeResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'OrderTypes' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteOrderTypeResponse',
  })
  .openapi('DeleteOrderTypeResponse')

const DeletePosPaymentResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'PosPayments' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeletePosPaymentResponse',
  })
  .openapi('DeletePosPaymentResponse')

const DeleteTenderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Tenders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteTenderResponse',
  })
  .openapi('DeleteTenderResponse')

const DeletedSchema = z
  .boolean()
  .nullable()
  .openapi({ example: true, title: 'Deleted' })
  .openapi('Deleted')

const EmailSchema = z
  .strictObject({
    email: z.email().min(1).openapi({ example: 'elon@musk.com' }),
    id: z.string().exactOptional().openapi({ example: '123' }),
    type: z
      .enum(['primary', 'secondary', 'work', 'personal', 'billing', 'other'])
      .exactOptional()
      .openapi({
        example: 'primary',
        'x-apideck-enum-id': 'emails.type',
        'x-graphql-type-name': 'EmailType',
      }),
  })
  .openapi({
    required: ['email'],
    'x-apideck-schema-id': 'Email',
    'x-apideck-weights': { email: 'critical', id: 'edge-case', type: 'critical' },
  })
  .openapi('Email')

const IdSchema = z
  .string()
  .openapi({
    description: 'A unique identifier for an object.',
    example: '12345',
    readOnly: true,
    title: 'ID',
  })
  .openapi('Id')

const HiddenSchema = z
  .boolean()
  .nullable()
  .openapi({ example: true, title: 'Hidden' })
  .openapi('Hidden')

const IdempotencyKeySchema = z
  .string()
  .max(45)
  .openapi({
    description:
      'A value you specify that uniquely identifies this request among requests you have sent.',
    example: 'random_string',
  })
  .openapi('IdempotencyKey')

const UpdatedAtSchema = z.iso
  .datetime({ offset: true })
  .nullable()
  .openapi({
    description: 'The date and time when the object was last updated.',
    example: '2020-09-30T07:43:32.000Z',
    readOnly: true,
    title: 'Updated at (timestamp)',
  })
  .openapi('UpdatedAt')

const UpdatedBySchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The user who last updated the object.',
    example: '12345',
    readOnly: true,
    title: 'Updated by',
  })
  .openapi('UpdatedBy')

const SequenceSchema = z
  .number()
  .nullable()
  .openapi({ example: 1, title: 'Sequence' })
  .openapi('Sequence')

const ItemSchema = z
  .strictObject({
    abbreviation: z.string().exactOptional().openapi({ example: 'Ch', title: 'Abbreviation' }),
    absent_at_location_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated.',
        example: ['12345', '67890'],
      }),
    available: AvailableSchema.exactOptional(),
    available_for_pickup: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        title: "If true, the item can be added to pickup orders from the merchant's online store.",
      }),
    available_online: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        title:
          "If true, the item can be added to shipping orders from the merchant's online store.",
      }),
    categories: z
      .array(
        z
          .object({
            id: IdSchema.exactOptional(),
            image_ids: z.array(IdSchema).exactOptional(),
            name: z.string().exactOptional(),
          })
          .openapi({
            'x-apideck-weights': { id: 'medium', image_ids: 'medium', name: 'medium' },
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        example: [{ id: '12345', image_ids: ['12345', '67890'], name: 'Food' }],
        title: 'Categories',
      }),
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Product code, e.g. UPC or EAN', example: '11910345', title: 'SKU' }),
    cost: z.number().exactOptional().openapi({ example: 2, title: 'Cost' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    deleted: DeletedSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ example: 'Hot Chocolate', title: 'Description' }),
    hidden: HiddenSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ example: '#cocoa' }),
    idempotency_key: IdempotencyKeySchema.exactOptional(),
    modifier_groups: z
      .array(
        z
          .object({ id: IdSchema.exactOptional() })
          .openapi({ 'x-apideck-weights': { id: 'medium' }, required: [] }),
      )
      .exactOptional()
      .openapi({ example: [{ id: '12345' }], title: 'Variations' }),
    name: z.string().openapi({ example: 'Cocoa', title: 'Name' }),
    options: z
      .array(
        z
          .object({
            attribute_id: z
              .string()
              .exactOptional()
              .openapi({ example: '12345', title: 'Attribute ID' }),
            id: z.string().exactOptional().openapi({ example: '12345' }),
            name: z.string().exactOptional().openapi({ example: 'Option 1', title: 'Name' }),
          })
          .openapi({
            'x-apideck-weights': { attribute_id: 'medium', id: 'medium', name: 'medium' },
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: "List of options pertaining to this item's attribute variation" }),
    present_at_all_locations: z
      .boolean()
      .exactOptional()
      .openapi({ example: false, title: 'Present at all locations' }),
    price_amount: z.number().exactOptional().openapi({ example: 10, title: 'Price amount' }),
    price_currency: CurrencySchema.exactOptional(),
    pricing_type: z
      .enum(['fixed', 'variable', 'per_unit', 'other'])
      .exactOptional()
      .openapi({
        example: 'fixed',
        title: 'Pricing type',
        'x-apideck-enum-id': 'items.pricing_type',
      }),
    product_type: z
      .enum(['regular', 'other'])
      .exactOptional()
      .openapi({
        example: 'regular',
        title: 'Product type',
        'x-apideck-enum-id': 'items.product_type',
      }),
    sku: z
      .string()
      .exactOptional()
      .openapi({ description: 'SKU of the item', example: '11910345', title: 'SKU' }),
    tax_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of Tax IDs for the product.',
        example: ['12345', '67890'],
        title: 'Tax IDs',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
    variations: z
      .array(
        z
          .object({
            created_at: CreatedAtSchema.exactOptional(),
            id: IdSchema.exactOptional(),
            item_id: IdSchema.exactOptional(),
            name: z.string().exactOptional().openapi({ example: 'Variation', title: 'Name' }),
            present_at_all_locations: z
              .boolean()
              .exactOptional()
              .openapi({ example: false, title: 'Present at all locations' }),
            price_amount: z
              .number()
              .exactOptional()
              .openapi({ example: 10, title: 'Price amount' }),
            price_currency: CurrencySchema.exactOptional(),
            pricing_type: z
              .enum(['fixed', 'variable', 'other'])
              .exactOptional()
              .openapi({
                example: 'fixed',
                title: 'Pricing type',
                'x-apideck-enum-id': 'items.pricing_type',
              }),
            sequence: SequenceSchema.exactOptional(),
            sku: z.string().exactOptional().openapi({ example: '11910345', title: 'SKU' }),
            stockable: z.boolean().exactOptional().openapi({ example: false, title: 'Stockable' }),
            updated_at: UpdatedAtSchema.exactOptional(),
            version: UpdatedBySchema.exactOptional(),
          })
          .openapi({
            'x-apideck-weights': {
              created_at: 'medium',
              id: 'medium',
              item_id: 'medium',
              name: 'medium',
              present_at_all_locations: 'medium',
              price_amount: 'medium',
              price_currency: 'medium',
              pricing_type: 'medium',
              sequence: 'medium',
              sku: 'medium',
              stockable: 'medium',
              updated_at: 'medium',
              version: 'medium',
            },
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        example: [
          {
            id: '12345',
            image_ids: ['12345', '67890'],
            item_id: '12345',
            name: 'Food',
            price_amount: 10,
            price_currency: 'USD',
            pricing_type: 'fixed',
            sequence: 0,
            sku: '11910345',
          },
        ],
        title: 'Variations',
      }),
    version: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    required: ['name'],
    'x-apideck-schema-id': 'Item',
    'x-apideck-weights': {
      abbreviation: 'low',
      absent_at_location_ids: 'edge-case',
      available: 'high',
      available_for_pickup: 'edge-case',
      available_online: 'edge-case',
      categories: 'low',
      code: 'high',
      cost: 'medium',
      created_at: 'medium',
      created_by: 'edge-case',
      deleted: 'medium',
      description: 'medium',
      hidden: 'medium',
      id: 'critical',
      idempotency_key: 'medium',
      modifier_groups: 'low',
      name: 'critical',
      options: 'low',
      present_at_all_locations: 'low',
      price_amount: 'high',
      price_currency: 'high',
      pricing_type: 'high',
      product_type: 'high',
      sku: 'high',
      tax_ids: 'medium',
      updated_at: 'medium',
      updated_by: 'edge-case',
      variations: 'low',
      version: 'medium',
    },
  })
  .openapi('Item')

const GetItemResponseSchema = z
  .object({
    data: ItemSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Items' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetItemResponse',
    'x-graphql-type-name': 'Item',
  })
  .openapi('GetItemResponse')

const LinksSchema = z
  .object({
    current: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the current page through the API',
        example: 'https://unify.apideck.com/crm/companies',
      }),
    next: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the previous page through the API',
        example: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM',
      }),
    previous: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Link to navigate to the previous page through the API',
        example: 'https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D',
      }),
  })
  .openapi({
    description: 'Links to navigate to previous or next pages through the API',
    'x-apideck-schema-id': 'Links',
    required: [],
  })
  .openapi('Links')

const MetaSchema = z
  .object({
    cursors: z
      .object({
        current: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the current page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjI=',
          }),
        next: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the next page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjM=',
          }),
        previous: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Cursor to navigate to the previous page of results through the API',
            example: 'em9oby1jcm06OnBhZ2U6OjE=',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Cursors to navigate to previous or next pages through the API',
        required: [],
      }),
    items_on_page: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of items returned in the data property of the response',
        example: 50,
      }),
  })
  .openapi({ description: 'Response metadata', 'x-apideck-schema-id': 'Meta', required: [] })
  .openapi('Meta')

const GetItemsResponseSchema = z
  .object({
    data: z.array(ItemSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Items' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetItemsResponse',
    'x-graphql-type-name': 'ItemList',
  })
  .openapi('GetItemsResponse')

const LocationSchema = z
  .strictObject({
    address: AddressSchema.exactOptional(),
    business_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The business name of the location',
        example: 'Dunkin Donuts LLC',
        title: 'name',
      }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    id: IdSchema.exactOptional(),
    merchant_id: z.string().exactOptional().openapi({ example: '12345' }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The name of the location',
        example: 'Dunkin Donuts',
        title: 'name',
      }),
    status: z
      .enum(['active', 'inactive', 'other'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Status of this location.',
        example: 'active',
        title: 'Status',
        'x-apideck-enum-id': 'locations.status',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'Location',
    'x-apideck-weights': {
      address: 'high',
      business_name: 'high',
      created_at: 'medium',
      created_by: 'edge-case',
      currency: 'high',
      id: 'critical',
      merchant_id: 'high',
      name: 'critical',
      status: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('Location')

const GetLocationResponseSchema = z
  .object({
    data: LocationSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Locations' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetLocationResponse',
    'x-graphql-type-name': 'Location',
  })
  .openapi('GetLocationResponse')

const GetLocationsResponseSchema = z
  .object({
    data: z.array(LocationSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Locations' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetLocationsResponse',
    'x-graphql-type-name': 'LocationList',
  })
  .openapi('GetLocationsResponse')

const ServiceChargeSchema = z
  .object({
    active: ActiveSchema.exactOptional(),
    amount: z.number().exactOptional().openapi({ example: 27500, title: 'Amount (in cents)' }),
    currency: CurrencySchema.exactOptional(),
    id: IdSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Service charge name', example: 'Charge for delivery' }),
    percentage: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Service charge percentage. Use this field to calculate the amount of the service charge. Pass a percentage and amount at the same time.',
        example: 12.5,
      }),
    type: z
      .enum(['auto_gratuity', 'custom'])
      .exactOptional()
      .openapi({
        description: 'The type of the service charge.',
        'x-apideck-enum-id': 'service-charges.type',
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'ServiceCharge', required: [] })
  .openapi('ServiceCharge')

const MerchantSchema = z
  .strictObject({
    address: AddressSchema.exactOptional(),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    id: IdSchema.exactOptional(),
    language: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'language code according to ISO 639-1. For the United States - EN',
        example: 'EN',
      }),
    main_location_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The main location ID of the merchant',
        example: '12345',
        title: 'Main location ID',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The name of the merchant',
        example: 'Dunkin Donuts',
        title: 'name',
      }),
    owner_id: z.string().exactOptional().openapi({ example: '12345', title: 'Owner ID' }),
    service_charges: z.array(ServiceChargeSchema).exactOptional(),
    status: z
      .enum(['active', 'inactive', 'other'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Status of this merchant.',
        example: 'active',
        title: 'Status',
        'x-apideck-enum-id': 'merchants.status',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'Merchant',
    'x-apideck-weights': {
      address: 'medium',
      created_at: 'medium',
      created_by: 'edge-case',
      currency: 'medium',
      id: 'critical',
      language: 'medium',
      main_location_id: 'medium',
      name: 'critical',
      owner_id: 'medium',
      status: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('Merchant')

const GetMerchantResponseSchema = z
  .object({
    data: MerchantSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Merchants' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetMerchantResponse',
    'x-graphql-type-name': 'Merchant',
  })
  .openapi('GetMerchantResponse')

const GetMerchantsResponseSchema = z
  .object({
    data: z.array(MerchantSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Merchants' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetMerchantsResponse',
    'x-graphql-type-name': 'MerchantList',
  })
  .openapi('GetMerchantsResponse')

const ModifierGroupSchema = z
  .strictObject({
    alternate_name: z
      .string()
      .exactOptional()
      .openapi({ example: 'Modifier New', title: 'Alternate name' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    deleted: DeletedSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    maximum_allowed: z.int().exactOptional().openapi({ example: 5, title: 'Maximum allowed' }),
    minimum_required: z.int().exactOptional().openapi({ example: 1, title: 'Minimum required' }),
    modifiers: z
      .array(
        z
          .object({
            alternate_name: z
              .string()
              .exactOptional()
              .openapi({ example: 'Modifier New', title: 'Alternate name' }),
            available: AvailableSchema.exactOptional(),
            currency: CurrencySchema.exactOptional(),
            id: z.string().exactOptional().openapi({ example: '12345', title: 'ID' }),
            name: z.string().exactOptional().openapi({ example: 'Modifier', title: 'Name' }),
            price_amount: z
              .number()
              .exactOptional()
              .openapi({ example: 10, title: 'Price amount' }),
          })
          .openapi({
            'x-apideck-weights': {
              alternate_name: 'medium',
              available: 'medium',
              currency: 'medium',
              id: 'medium',
              name: 'medium',
              price_amount: 'medium',
            },
            required: [],
          }),
      )
      .exactOptional(),
    name: z.string().exactOptional().openapi({ example: 'Modifier', title: 'Name' }),
    present_at_all_locations: z
      .boolean()
      .exactOptional()
      .openapi({ example: false, title: 'Present at all locations' }),
    row_version: RowVersionSchema.exactOptional(),
    selection_type: z
      .enum(['single', 'multiple'])
      .exactOptional()
      .openapi({
        example: 'single',
        title:
          'Indicates whether multiple options from the modifier group can be applied to a single or multiple modifiers',
        'x-apideck-enum-id': 'modifier-groups.selection_type',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'ModifierGroup',
    'x-apideck-weights': {
      alternate_name: 'low',
      created_at: 'medium',
      created_by: 'edge-case',
      deleted: 'medium',
      id: 'critical',
      maximum_allowed: 'low',
      minimum_required: 'low',
      modifiers: 'high',
      name: 'critical',
      present_at_all_locations: 'low',
      row_version: 'edge-case',
      selection_type: 'medium',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('ModifierGroup')

const GetModifierGroupResponseSchema = z
  .object({
    data: ModifierGroupSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ModifierGroups' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetModifierGroupResponse',
    'x-graphql-type-name': 'ModifierGroup',
  })
  .openapi('GetModifierGroupResponse')

const GetModifierGroupsResponseSchema = z
  .object({
    data: z.array(ModifierGroupSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ModifierGroups' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetModifierGroupsResponse',
    'x-graphql-type-name': 'ModifierGroupList',
  })
  .openapi('GetModifierGroupsResponse')

const ModifierSchema = z
  .strictObject({
    alternate_name: z
      .string()
      .exactOptional()
      .openapi({ example: 'Modifier New', title: 'Alternate name' }),
    available: AvailableSchema.exactOptional(),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    id: IdSchema.exactOptional(),
    idempotency_key: IdempotencyKeySchema.exactOptional(),
    modifier_group_id: z.string().openapi({ example: '123', title: 'Modifier group ID' }),
    name: z.string().openapi({ example: 'Modifier', title: 'Name' }),
    price_amount: z.number().exactOptional().openapi({ example: 10, title: 'Price amount' }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    required: ['name', 'modifier_group_id'],
    'x-apideck-schema-id': 'Modifier',
    'x-apideck-weights': {
      alternate_name: 'edge-case',
      available: 'high',
      created_at: 'medium',
      created_by: 'edge-case',
      currency: 'high',
      id: 'critical',
      modifier_group_id: 'medium',
      name: 'critical',
      price_amount: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
  })
  .openapi('Modifier')

const GetModifierResponseSchema = z
  .object({
    data: ModifierSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Modifiers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetModifierResponse',
    'x-graphql-type-name': 'Modifier',
  })
  .openapi('GetModifierResponse')

const GetModifiersResponseSchema = z
  .object({
    data: z.array(ModifierSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Modifiers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetModifiersResponse',
    'x-graphql-type-name': 'ModifierList',
  })
  .openapi('GetModifiersResponse')

const PhoneNumberSchema = z
  .strictObject({
    area_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '323', title: 'Area code' }),
    country_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '1', title: 'Country code' }),
    extension: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '105', title: 'Phone extension' }),
    id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    number: z.string().min(1).openapi({ example: '111-111-1111', title: 'Phone number' }),
    type: z
      .enum([
        'primary',
        'secondary',
        'home',
        'work',
        'office',
        'mobile',
        'assistant',
        'fax',
        'direct-dial-in',
        'personal',
        'other',
      ])
      .exactOptional()
      .openapi({
        example: 'primary',
        'x-apideck-enum-id': 'phone_numbers.type',
        'x-graphql-type-name': 'PhoneType',
      }),
  })
  .openapi({
    required: ['number'],
    'x-apideck-schema-id': 'PhoneNumber',
    'x-apideck-weights': {
      area_code: 'edge-case',
      country_code: 'edge-case',
      extension: 'edge-case',
      id: 'edge-case',
      number: 'critical',
      type: 'critical',
    },
  })
  .openapi('PhoneNumber')

const QuantitySchema = z
  .number()
  .nullable()
  .openapi({ example: 1, title: 'Quantity' })
  .openapi('Quantity')

const UnitPriceSchema = z
  .number()
  .nullable()
  .openapi({ example: 27500.5, title: 'Unit price' })
  .openapi('UnitPrice')

const ServiceChargesSchema = z
  .array(ServiceChargeSchema)
  .openapi({
    description: 'Optional service charges or gratuity tip applied to the order.',
    'x-apideck-schema-id': 'ServiceCharges',
    'x-apideck-weights': {
      amount: 'critical',
      currency: 'high',
      name: 'high',
      percentage: 'high',
      type: 'high',
    },
  })
  .openapi('ServiceCharges')

const PercentageSchema = z
  .number()
  .openapi({ example: 15, title: 'Percentage' })
  .openapi('Percentage')

const VersionSchema = z
  .string()
  .nullable()
  .openapi({ example: '230320320320', title: 'Version' })
  .openapi('Version')

const PaymentCardSchema = z
  .strictObject({
    billing_address: AddressSchema.exactOptional(),
    bin: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The first six digits of the card number, known as the Bank Identification Number (BIN).',
        example: '41111',
      }),
    card_brand: z
      .enum([
        'visa',
        'mastercard',
        'amex',
        'discover',
        'discover-diners',
        'jcb',
        'china-unionpay',
        'square-gift-card',
        'square-capital-card',
        'interac',
        'eftpos',
        'felica',
        'ebt',
        'other',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The first six digits of the card number, known as the Bank Identification Number (BIN).',
        'x-apideck-enum-id': 'payment-cards.card_brand',
      }),
    card_type: z
      .enum(['credit', 'debit', 'prepaid', 'other'])
      .nullable()
      .exactOptional()
      .openapi({ example: 'credit', 'x-apideck-enum-id': 'payment-cards.card_type' }),
    cardholder_name: z.string().nullable().exactOptional().openapi({ example: 'John Doe' }),
    customer_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    enabled: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Indicates whether or not a card can be used for payments.',
        example: true,
      }),
    exp_month: z
      .int()
      .min(1)
      .max(12)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The expiration month of the associated card as an integer between 1 and 12.',
        example: 1,
      }),
    exp_year: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({
        description: "The four-digit year of the card's expiration date.",
        example: 2022,
      }),
    fingerprint: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        example:
          ' Intended as a POS-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.',
      }),
    id: IdSchema.exactOptional(),
    last_4: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'The last 4 digits of the card number.' }),
    merchant_id: z.string().exactOptional().openapi({ example: '12345' }),
    prepaid_type: z
      .enum(['non-prepaid', 'prepaid', 'unknown'])
      .nullable()
      .exactOptional()
      .openapi({ example: 'prepaid', 'x-apideck-enum-id': 'payment-cards.prepaid_type' }),
    reference_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.',
        example: 'card-001',
        title: 'Reference ID',
      }),
    version: VersionSchema.exactOptional(),
  })
  .nullable()
  .openapi({
    description: "A card's non-confidential details.",
    'x-apideck-schema-id': 'PaymentCard',
    required: [],
  })
  .openapi('PaymentCard')

const OrderSchema = z
  .strictObject({
    closed_date: z.iso.date().nullable().exactOptional().openapi({ example: '2022-08-13' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    customer_id: z.string().exactOptional().openapi({ example: '12345' }),
    customers: z
      .array(
        z
          .object({
            emails: z.array(EmailSchema).exactOptional(),
            first_name: z.string().nullable().exactOptional().openapi({ example: 'Elon' }),
            id: z.string().exactOptional().openapi({ example: '12345', title: 'Customer ID' }),
            last_name: z.string().nullable().exactOptional().openapi({ example: 'Musk' }),
            middle_name: z.string().nullable().exactOptional().openapi({ example: 'D.' }),
            phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
          })
          .openapi({
            'x-apideck-weights': {
              emails: 'medium',
              first_name: 'medium',
              id: 'medium',
              last_name: 'medium',
              middle_name: 'medium',
              phone_numbers: 'medium',
            },
            required: [],
          }),
      )
      .exactOptional(),
    discounts: z
      .array(
        z
          .object({
            amount: z.int().exactOptional().openapi({ example: 27500, title: 'Amount (in cents)' }),
            currency: CurrencySchema.exactOptional(),
            id: IdSchema.exactOptional(),
            name: z.string().exactOptional().openapi({ example: '10% off' }),
            product_id: IdSchema.exactOptional(),
            scope: z
              .enum(['order', 'line_item'])
              .exactOptional()
              .openapi({ example: 'order', 'x-apideck-enum-id': 'orders.discounts.scope' }),
            type: z
              .enum(['percentage', 'flat_fee'])
              .exactOptional()
              .openapi({ example: 'percentage', 'x-apideck-enum-id': 'orders.discounts.type' }),
          })
          .openapi({
            'x-apideck-weights': {
              amount: 'medium',
              currency: 'medium',
              id: 'medium',
              name: 'medium',
              product_id: 'medium',
              scope: 'medium',
              type: 'medium',
            },
            required: [],
          }),
      )
      .exactOptional(),
    employee_id: z.string().exactOptional().openapi({ example: '12345' }),
    fulfillments: z
      .array(
        z
          .object({
            id: z.string().exactOptional().openapi({ example: '12345' }),
            pickup_details: z
              .object({
                accepted_at: z.iso
                  .datetime({ offset: true })
                  .nullable()
                  .exactOptional()
                  .openapi({
                    example: '2020-09-30T07:43:32.000Z',
                    readOnly: true,
                    title: 'Accepted at (timestamp)',
                  }),
                auto_complete_duration: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      "The duration of time after which an open and accepted pickup fulfillment is automatically moved to the COMPLETED state. The duration must be in RFC 3339 format (for example, 'P1W3D').",
                    example: 'P1W3D',
                  }),
                cancel_reason: z
                  .string()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description: 'A description of why the pickup was canceled.',
                    example: 'Not hungry',
                  }),
                canceled_at: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Indicating when the fulfillment was canceled. The timestamp must be in RFC 3339 format\n(for example, "2016-09-04T23:59:33.123Z").',
                    example: '2016-09-04T23:59:33.123Z',
                  }),
                curbside_pickup_details: z
                  .object({
                    buyer_arrived_at: z.iso
                      .datetime({ offset: true })
                      .exactOptional()
                      .openapi({
                        description:
                          'Indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format\n(for example, "2016-09-04T23:59:33.123Z").',
                        example: '2016-09-04T23:59:33.123Z',
                      }),
                    curbside_details: z
                      .string()
                      .max(250)
                      .exactOptional()
                      .openapi({
                        description:
                          'Specific details for curbside pickup, such as parking number and vehicle model.',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Specific details for curbside pickup.',
                    'x-apideck-weights': { buyer_arrived_at: 'medium', curbside_details: 'medium' },
                    required: [],
                  }),
                expired_at: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Indicating when the fulfillment expired. The timestamp must be in RFC 3339 format\n(for example, "2016-09-04T23:59:33.123Z").',
                    example: '2016-09-04T23:59:33.123Z',
                  }),
                expires_at: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Indicating when this fulfillment expires if it is not accepted. The timestamp must be in RFC 3339 format\n(for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set up to 7 days in the future.\nIf `expires_at` is not set, this pickup fulfillment is automatically accepted when \nplaced.',
                    example: '2016-09-04T23:59:33.123Z',
                  }),
                is_curbside_pickup: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description:
                      'If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup.',
                  }),
                note: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'A note meant to provide additional instructions about the pickup\nfulfillment displayed in the Square Point of Sale application and set by the API.',
                    example: 'Pickup in the back.',
                  }),
                picked_up_at: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Indicating when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format\n(for example, "2016-09-04T23:59:33.123Z").',
                    example: '2016-09-04T23:59:33.123Z',
                  }),
                pickup_at: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g., \n"2016-09-04T23:59:33.123Z".\n\nFor fulfillments with the schedule type `ASAP`, this is automatically set\nto the current time plus the expected duration to prepare the fulfillment.',
                    example: '2016-09-04T23:59:33.123Z',
                  }),
                pickup_window_duration: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The window of time in which the order should be picked up after the `pickup_at` timestamp.\nMust be in RFC 3339 duration format, e.g., "P1W3D". Can be used as an\ninformational guideline for merchants.',
                    example: 'P1W3D',
                  }),
                placed_at: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format\n(for example, "2016-09-04T23:59:33.123Z").',
                    example: '2016-09-04T23:59:33.123Z',
                  }),
                prep_time_duration: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The duration of time it takes to prepare this fulfillment.\nThe duration must be in RFC 3339 format (for example, "P1W3D").',
                    example: 'P1W3D',
                  }),
                ready_at: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Indicating when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format\n(for example, "2016-09-04T23:59:33.123Z").',
                    example: '2016-09-04T23:59:33.123Z',
                  }),
                recipient: z
                  .object({
                    address: AddressSchema.exactOptional(),
                    customer_id: z.string().exactOptional().openapi({ example: '12345' }),
                    display_name: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'Elon Musk', title: 'Display name' }),
                    email: EmailSchema.exactOptional(),
                    phone_number: PhoneNumberSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({
                    'x-apideck-weights': {
                      address: 'medium',
                      customer_id: 'medium',
                      email: 'medium',
                      phone_number: 'medium',
                    },
                    required: [],
                  }),
                rejected_at: z.iso
                  .datetime({ offset: true })
                  .exactOptional()
                  .openapi({
                    description:
                      'Indicating when the fulfillment was rejected. The timestamp must be in RFC 3339 format\n(for example, "2016-09-04T23:59:33.123Z").',
                    example: '2016-09-04T23:59:33.123Z',
                  }),
                schedule_type: z
                  .literal('scheduled')
                  .exactOptional()
                  .openapi({
                    description: 'The schedule type of the pickup fulfillment.',
                    'x-apideck-enum-id': 'orders.pickup_details.schedule_type',
                  }),
              })
              .exactOptional()
              .openapi({
                'x-apideck-weights': {
                  accepted_at: 'medium',
                  auto_complete_duration: 'medium',
                  cancel_reason: 'medium',
                  canceled_at: 'medium',
                  curbside_pickup_details: 'medium',
                  expired_at: 'medium',
                  expires_at: 'medium',
                  is_curbside_pickup: 'medium',
                  note: 'medium',
                  picked_up_at: 'medium',
                  pickup_at: 'medium',
                  pickup_window_duration: 'medium',
                  placed_at: 'medium',
                  prep_time_duration: 'medium',
                  ready_at: 'medium',
                  recipient: 'medium',
                  rejected_at: 'medium',
                  schedule_type: 'medium',
                },
                required: [],
              }),
            shipment_details: z.object({}).exactOptional().openapi({ 'x-apideck-weights': {} }),
            status: z
              .enum([
                'proposed',
                'reserved',
                'prepared',
                'completed',
                'cancelled',
                'failed',
                'other',
              ])
              .exactOptional()
              .openapi({
                description: 'The state of the fulfillment.',
                title: 'Fulfillment status',
                'x-apideck-enum-id': 'orders.fulfillments.status',
              }),
            type: z
              .enum(['pickup', 'shipment'])
              .exactOptional()
              .openapi({ example: 'shipment', 'x-apideck-enum-id': 'orders.fulfillments.type' }),
          })
          .openapi({
            'x-apideck-weights': {
              id: 'medium',
              pickup_details: 'medium',
              shipment_details: 'medium',
              status: 'medium',
              type: 'medium',
            },
            required: [],
          }),
      )
      .exactOptional(),
    id: IdSchema.exactOptional(),
    idempotency_key: IdempotencyKeySchema.exactOptional(),
    line_items: z
      .array(
        z
          .object({
            applied_discounts: z
              .array(
                z
                  .object({
                    amount: z
                      .int()
                      .exactOptional()
                      .openapi({ example: 27500, title: 'Amount (in cents)' }),
                    currency: CurrencySchema.exactOptional(),
                    discount_id: z.string().exactOptional().openapi({ example: '12345' }),
                    id: IdSchema.exactOptional(),
                  })
                  .openapi({
                    'x-apideck-weights': {
                      amount: 'medium',
                      currency: 'medium',
                      discount_id: 'medium',
                      id: 'medium',
                    },
                    required: [],
                  }),
              )
              .exactOptional(),
            applied_taxes: z
              .array(
                z
                  .object({
                    amount: z
                      .int()
                      .exactOptional()
                      .openapi({ example: 27500, title: 'Amount (in cents)' }),
                    currency: CurrencySchema.exactOptional(),
                    id: IdSchema.exactOptional(),
                    tax_id: z.string().exactOptional().openapi({ example: 'sales-tax' }),
                  })
                  .openapi({
                    'x-apideck-weights': {
                      amount: 'medium',
                      currency: 'medium',
                      id: 'medium',
                      tax_id: 'medium',
                    },
                    required: [],
                  }),
              )
              .exactOptional(),
            id: IdSchema.exactOptional(),
            item: z
              .object({ id: IdSchema.exactOptional() })
              .exactOptional()
              .openapi({ 'x-apideck-weights': { id: 'medium' }, required: [] }),
            modifiers: z
              .array(
                z
                  .object({
                    alternate_name: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'Modifier New', title: 'Alternate name' }),
                    amount: z
                      .int()
                      .exactOptional()
                      .openapi({ example: 27500, title: 'Amount (in cents)' }),
                    currency: CurrencySchema.exactOptional(),
                    id: z.string().exactOptional().openapi({ example: '12345' }),
                    modifier_group_id: z
                      .string()
                      .exactOptional()
                      .openapi({ example: '123', title: 'Modifier group ID' }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({ example: 'New York Strip Steak - no cheese' }),
                  })
                  .openapi({
                    'x-apideck-weights': {
                      alternate_name: 'medium',
                      amount: 'medium',
                      currency: 'medium',
                      id: 'medium',
                      modifier_group_id: 'medium',
                      name: 'medium',
                    },
                    required: [],
                  }),
              )
              .exactOptional()
              .openapi({
                description:
                  'Customizable options – toppings, add-ons, or special requests – create item modifiers. Modifiers that are applied to items will display on your customers’ digital receipts',
              }),
            name: z.string().exactOptional().openapi({ example: 'New York Strip Steak' }),
            quantity: QuantitySchema.exactOptional(),
            total_amount: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ example: 27500, title: 'Total amount (in cents)' }),
            total_discount: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ example: 3000, title: 'Total discount amount (in cents)' }),
            total_tax: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ example: 2000, title: 'Tax amount (in cents)' }),
            unit_price: UnitPriceSchema.exactOptional(),
          })
          .openapi({
            'x-apideck-weights': {
              applied_discounts: 'medium',
              applied_taxes: 'medium',
              id: 'medium',
              item: 'medium',
              modifiers: 'medium',
              name: 'medium',
              quantity: 'medium',
              total_amount: 'medium',
              total_discount: 'medium',
              total_tax: 'medium',
              unit_price: 'medium',
            },
            required: [],
          }),
      )
      .exactOptional(),
    location_id: z.string().openapi({ example: '12345' }),
    merchant_id: z.string().openapi({ example: '12345' }),
    note: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A note with information about this order, may be printed on the order receipt and displayed in apps',
        title: 'Note',
      }),
    order_date: z.iso.date().nullable().exactOptional().openapi({ example: '2022-08-12' }),
    order_number: z.string().exactOptional().openapi({ example: '1F' }),
    order_type_id: z.string().exactOptional().openapi({ example: '12345' }),
    payment_status: z
      .enum([
        'open',
        'paid',
        'refunded',
        'credited',
        'partially_paid',
        'partially_refunded',
        'unknown',
      ])
      .exactOptional()
      .openapi({
        description: 'Is this order paid or not?',
        example: 'open',
        title: 'PosPayment status',
        'x-apideck-enum-id': 'orders.payment_status',
      }),
    payments: z
      .array(
        z
          .object({
            amount: z.int().exactOptional().openapi({ example: 27500, title: 'Amount (in cents)' }),
            currency: CurrencySchema.exactOptional(),
            id: IdSchema.exactOptional(),
          })
          .openapi({
            'x-apideck-weights': { amount: 'medium', currency: 'medium', id: 'medium' },
            required: [],
          }),
      )
      .exactOptional(),
    reference_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional user-defined reference ID that associates this record with another entity in an external system. For example, a customer ID from an external customer management system.',
        example: 'my-order-001',
        title: 'Reference ID',
      }),
    refunded: z.boolean().exactOptional().openapi({ example: false }),
    refunds: z
      .array(
        z
          .object({
            amount: z.int().exactOptional().openapi({ example: 27500, title: 'Amount (in cents)' }),
            currency: CurrencySchema.exactOptional(),
            id: IdSchema.exactOptional(),
            location_id: IdSchema.exactOptional(),
            reason: z
              .string()
              .exactOptional()
              .openapi({ example: 'The reason for the refund being issued.' }),
            status: z
              .enum(['pending', 'approved', 'rejected', 'failed'])
              .exactOptional()
              .openapi({ 'x-apideck-enum-id': 'orders.refunds.status' }),
            tender_id: IdSchema.exactOptional(),
            transaction_id: IdSchema.exactOptional(),
          })
          .openapi({
            'x-apideck-weights': {
              amount: 'medium',
              currency: 'medium',
              id: 'medium',
              location_id: 'medium',
              reason: 'medium',
              status: 'medium',
              tender_id: 'medium',
              transaction_id: 'medium',
            },
            required: [],
          }),
      )
      .exactOptional(),
    seat: z.string().exactOptional().openapi({ example: '23F' }),
    service_charges: ServiceChargesSchema.exactOptional(),
    source: z
      .enum(['in-store', 'online', 'opt', 'api', 'kiosk', 'caller-id', 'google', 'invoice'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Source of order. Indicates the way that the order was placed.',
        example: 'api',
        readOnly: true,
        'x-apideck-enum-id': 'orders.source',
      }),
    status: z
      .enum(['open', 'draft', 'delivered', 'delayed', 'voided', 'completed', 'hidden'])
      .exactOptional()
      .openapi({
        description:
          "Order status. Clover specific: If no value is set, the status defaults to hidden, which indicates a hidden order. A hidden order is not displayed in user interfaces and can only be retrieved by its id. When creating an order via the REST API the value must be manually set to 'open'. More info [https://docs.clover.com/reference/orderupdateorder]()",
        example: 'open',
        title: 'Status',
        'x-apideck-enum-id': 'orders.status',
      }),
    table: z.string().exactOptional().openapi({ example: '1F' }),
    taxes: z
      .array(
        z
          .object({
            amount: z.int().exactOptional().openapi({ example: 27500, title: 'Amount (in cents)' }),
            auto_applied: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Square-only: Determines whether the tax was automatically applied to the order based on the catalog configuration. For an example, see Automatically Apply Taxes to an Order. [https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes]()',
                example: true,
              }),
            currency: CurrencySchema.exactOptional(),
            id: z.string().exactOptional().openapi({ example: 'state-sales-tax' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: "The tax's name.", example: 'State Sales Tax' }),
            percentage: PercentageSchema.exactOptional(),
            scope: z
              .enum(['order', 'line_item'])
              .exactOptional()
              .openapi({ 'x-apideck-enum-id': 'orders.taxes.scope' }),
            type: z
              .enum(['unknown', 'additive', 'inclusive'])
              .exactOptional()
              .openapi({ 'x-apideck-enum-id': 'orders.taxes.type' }),
          })
          .openapi({
            'x-apideck-weights': {
              amount: 'medium',
              auto_applied: 'medium',
              currency: 'medium',
              id: 'medium',
              name: 'medium',
              percentage: 'medium',
              scope: 'medium',
              type: 'medium',
            },
            required: [],
          }),
      )
      .exactOptional(),
    tenders: z
      .array(
        z
          .object({
            amount: z
              .number()
              .exactOptional()
              .openapi({ example: 27500, title: 'Amount (in cents)' }),
            buyer_tendered_cash_amount: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The amount (in cents) of cash tendered by the buyer. Only applicable when the tender type is cash.',
                example: 27500,
              }),
            card: PaymentCardSchema.exactOptional(),
            card_entry_method: z
              .enum(['evm', 'swiped', 'keyed', 'on-file', 'contactless'])
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The entry method of the card. Only applicable when the tender type is card.',
                example: 'swiped',
                'x-apideck-enum-id': 'orders.tenders.card_entry_method',
              }),
            card_status: z
              .enum(['authorized', 'captured', 'failed', 'voided'])
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The status of the card. Only applicable when the tender type is card.',
                example: 'authorized',
                'x-apideck-enum-id': 'orders.tenders.card_status',
              }),
            change_back_cash_amount: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The amount (in cents) of cash returned to the buyer. Only applicable when the tender type is cash.',
                example: 27500,
              }),
            currency: CurrencySchema.exactOptional(),
            id: IdSchema.exactOptional(),
            location_id: IdSchema.exactOptional(),
            name: z.string().exactOptional().openapi({ example: '10% off' }),
            note: z
              .string()
              .exactOptional()
              .openapi({
                example: 'An optional note associated with the tender at the time of payment.',
                title: 'Note',
              }),
            payment_id: IdSchema.exactOptional(),
            percentage: z.number().exactOptional().openapi({ example: 10, title: 'Percentage' }),
            total_amount: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ example: 27.5, title: 'Total amount (in cents)' }),
            total_discount: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ example: 3, title: 'Total discount (in cents)' }),
            total_processing_fee: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ example: 0, title: 'Total processing fee (in cents)' }),
            total_refund: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ example: 0, title: 'Total refund (in cents)' }),
            total_service_charge: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ example: 0, title: 'Total service charge (in cents)' }),
            total_tax: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ example: 2.75, title: 'Total tax (in cents)' }),
            total_tip: z
              .int()
              .nullable()
              .exactOptional()
              .openapi({ example: 7, title: 'Total tax (in cents)' }),
            transaction_id: IdSchema.exactOptional(),
            type: z
              .enum(['cash', 'card', 'other'])
              .exactOptional()
              .openapi({ example: 'cash', 'x-apideck-enum-id': 'orders.tenders.type' }),
          })
          .openapi({
            'x-apideck-weights': {
              amount: 'medium',
              buyer_tendered_cash_amount: 'medium',
              card: 'medium',
              card_entry_method: 'medium',
              card_status: 'medium',
              change_back_cash_amount: 'medium',
              currency: 'medium',
              id: 'medium',
              location_id: 'medium',
              name: 'medium',
              note: 'medium',
              payment_id: 'medium',
              total_amount: 'medium',
              total_discount: 'medium',
              total_processing_fee: 'medium',
              total_refund: 'medium',
              total_service_charge: 'medium',
              total_tax: 'medium',
              total_tip: 'medium',
              transaction_id: 'medium',
              type: 'medium',
            },
            required: [],
          }),
      )
      .exactOptional(),
    title: z.string().exactOptional().openapi({ title: 'Title' }),
    total_amount: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ example: 275, title: 'Total amount (in cents)' }),
    total_discount: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ example: 300, title: 'Total discount (in cents)' }),
    total_refund: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ example: 0, title: 'Total refund (in cents)' }),
    total_service_charge: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ example: 0, title: 'Total service charge (in cents)' }),
    total_tax: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ example: 275, title: 'Total tax (in cents)' }),
    total_tip: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ example: 700, title: 'Total tax (in cents)' }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
    version: VersionSchema.exactOptional(),
    voided: z.boolean().exactOptional().openapi({ example: false }),
    voided_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
        title: 'Updated at (timestamp)',
      }),
  })
  .openapi({
    required: ['location_id', 'merchant_id'],
    'x-apideck-schema-id': 'Order',
    'x-apideck-weights': {
      closed_date: 'high',
      created_at: 'medium',
      created_by: 'edge-case',
      currency: 'medium',
      customer_id: 'medium',
      customers: 'medium',
      discounts: 'medium',
      employee_id: 'medium',
      fulfillments: 'medium',
      id: 'critical',
      idempotency_key: 'low',
      line_items: 'medium',
      location_id: 'critical',
      merchant_id: 'critical',
      note: 'medium',
      order_date: 'critical',
      order_number: 'high',
      order_type_id: 'medium',
      payment_status: 'high',
      payments: 'medium',
      reference_id: 'low',
      refunded: 'medium',
      refunds: 'medium',
      seat: 'medium',
      service_charges: 'medium',
      source: 'medium',
      state: 'high',
      status: 'high',
      table: 'medium',
      taxes: 'medium',
      tenders: 'medium',
      title: 'high',
      total_amount: 'high',
      total_discount: 'medium',
      total_refund: 'medium',
      total_service_charge: 'medium',
      total_tax: 'medium',
      total_tip: 'medium',
      updated_at: 'medium',
      updated_by: 'edge-case',
      version: 'low',
      voided: 'medium',
      voided_at: 'medium',
    },
  })
  .openapi('Order')

const GetOrderResponseSchema = z
  .object({
    data: OrderSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'orders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetOrderResponse',
    'x-graphql-type-name': 'Order',
  })
  .openapi('GetOrderResponse')

const OrderTypeSchema = z
  .strictObject({
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    default: z.boolean().exactOptional().openapi({ example: true, title: 'Default' }),
    id: IdSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ example: 'Default order type', title: 'Order type name' }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'OrderType',
    'x-apideck-weights': {
      created_at: 'medium',
      created_by: 'edge-case',
      default: 'medium',
      id: 'medium',
      name: 'medium',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('OrderType')

const GetOrderTypeResponseSchema = z
  .object({
    data: OrderTypeSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'OrderTypes' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetOrderTypeResponse',
    'x-graphql-type-name': 'OrderType',
  })
  .openapi('GetOrderTypeResponse')

const GetOrderTypesResponseSchema = z
  .object({
    data: z.array(OrderTypeSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'OrderTypes' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetOrderTypesResponse',
    'x-graphql-type-name': 'OrderTypeList',
  })
  .openapi('GetOrderTypesResponse')

const GetOrdersResponseSchema = z
  .object({
    data: z.array(OrderSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'orders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetOrdersResponse',
    'x-graphql-type-name': 'OrderList',
  })
  .openapi('GetOrdersResponse')

const PosBankAccountSchema = z
  .object({
    account_ownership_type: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'The ownership type of the bank account performing the transfer.\nThe type can be `INDIVIDUAL`, `COMPANY`, or `UNKNOWN`.',
      }),
    ach_details: z
      .object({
        account_number_suffix: z
          .string()
          .max(4)
          .exactOptional()
          .openapi({ description: 'The last few digits of the bank account number.' }),
        account_type: z
          .string()
          .max(50)
          .exactOptional()
          .openapi({
            description:
              'The type of the bank account performing the transfer. The account type can be `CHECKING`,\n`SAVINGS`, or `UNKNOWN`.',
          }),
        routing_number: z
          .string()
          .max(50)
          .exactOptional()
          .openapi({ description: 'The routing number for the bank account.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.',
        required: [],
      }),
    bank_name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The name of the bank associated with the bank account.' }),
    country: z
      .string()
      .length(2)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Country code according to ISO 3166-1 alpha-2.',
        example: 'US',
        title: 'Country Code',
      }),
    fingerprint: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the bank account for this seller and can be used\nto determine if payments are from the same bank account.',
      }),
    statement_description: z
      .string()
      .max(1000)
      .exactOptional()
      .openapi({ description: 'The statement description as sent to the bank.' }),
    transfer_type: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description: 'The type of the bank transfer. The type can be `ACH` or `UNKNOWN`.',
      }),
  })
  .openapi({
    description:
      'Card details for this payment. This field is currently not available. Reach out to our team for more info.',
    title: 'Bank Account',
    'x-apideck-schema-id': 'PosBankAccount',
    required: [],
  })
  .openapi('PosBankAccount')

const PosPaymentSchema = z
  .strictObject({
    amount: z.number().openapi({ example: 27.5, title: 'Amount (in cents)' }),
    app_fee: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The amount the developer is taking as a fee for facilitating the payment on behalf of the seller.',
        example: 3,
        title: 'App fee',
      }),
    approved: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The initial amount of money approved for this payment.',
        example: 37.5,
        title: 'Approved amount (in cents)',
      }),
    bank_account: PosBankAccountSchema.exactOptional(),
    card_details: z
      .object({ card: PaymentCardSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    cash: z
      .object({
        amount: z
          .any()
          .exactOptional()
          .openapi({ description: 'The amount of cash given by the customer.' }),
        charge_back_amount: z
          .any()
          .exactOptional()
          .openapi({
            description:
              'The amount of change due back to the buyer. For Square: this read-only field is calculated from the amount_money and buyer_supplied_money fields.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Cash details for this payment',
        title: 'Cash details',
        required: [],
      }),
    change_back_cash_amount: z
      .number()
      .exactOptional()
      .openapi({ example: 20, title: 'Change back cash amount (in cents)' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema,
    customer_id: z.string().openapi({ example: '12345' }),
    device_id: z.string().exactOptional().openapi({ example: '12345' }),
    employee_id: z.string().exactOptional().openapi({ example: '12345' }),
    external_details: z
      .object({
        source: z
          .string()
          .max(255)
          .openapi({
            description:
              'A description of the external payment source. For example, \n"Food Delivery Service".',
          }),
        source_fee_amount: z
          .number()
          .exactOptional()
          .openapi({
            description:
              'The fees paid to the source. The amount minus this field is the net amount seller receives.',
            example: 2.5,
            title: 'Source fee',
          }),
        source_id: z
          .string()
          .max(255)
          .exactOptional()
          .openapi({ description: 'An ID to associate the payment to its originating source.' }),
        type: z
          .enum([
            'check',
            'bank_transfer',
            'other_gift_card',
            'crypto',
            'square_cash',
            'social',
            'external',
            'emoney',
            'card',
            'stored_balance',
            'food_voucher',
            'other',
          ])
          .openapi({
            description:
              'The type of external payment the seller received. It can be one of the following:\n- CHECK - Paid using a physical check.\n- BANK_TRANSFER - Paid using external bank transfer.\n- OTHER\\_GIFT\\_CARD - Paid using a non-Square gift card.\n- CRYPTO - Paid using a crypto currency.\n- SQUARE_CASH - Paid using Square Cash App.\n- SOCIAL - Paid using peer-to-peer payment applications.\n- EXTERNAL - A third-party application gathered this payment outside of Square.\n- EMONEY - Paid using an E-money provider.\n- CARD - A credit or debit card that Square does not support.\n- STORED_BALANCE - Use for house accounts, store credit, and so forth.\n- FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals\n- OTHER - A type not listed here.',
            'x-apideck-enum-id': 'pos-payments.external_details.type',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Details about an external payment.', required: ['type', 'source'] }),
    external_payment_id: z.string().exactOptional().openapi({ example: '12345' }),
    id: IdSchema.exactOptional(),
    idempotency_key: IdempotencyKeySchema.exactOptional(),
    location_id: z.string().exactOptional().openapi({ example: '12345' }),
    merchant_id: z.string().exactOptional().openapi({ example: '12345' }),
    order_id: z.string().openapi({ example: '12345' }),
    processing_fees: z
      .array(
        z
          .object({
            amount: z
              .number()
              .exactOptional()
              .openapi({ example: 1.05, title: 'Amount (in cents)' }),
            effective_at: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({ example: '2020-09-30T07:43:32.000Z', title: 'Effective at (timestamp)' }),
            processing_type: z
              .enum(['initial', 'adjustment'])
              .exactOptional()
              .openapi({
                title: 'Type',
                'x-apideck-enum-id': 'pos-payments.processing_fees.processing_type',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        example: [
          { amount: 1.05, effective_at: '2020-09-30T07:43:32.000Z', processing_type: 'initial' },
        ],
      }),
    refunded: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The initial amount of money approved for this payment.',
        example: 37.5,
        title: 'The total amount (in cents) of the payment refunded to date.',
      }),
    service_charges: ServiceChargesSchema.exactOptional(),
    source: z
      .enum(['card', 'bank_account', 'wallet', 'bnpl', 'cash', 'external', 'other'])
      .exactOptional()
      .openapi({
        description: 'Source of this payment.',
        example: 'external',
        'x-apideck-enum-id': 'pos-payments.source',
      }),
    source_id: z
      .string()
      .openapi({
        description:
          'The ID for the source of funds for this payment. Square-only: This can be a payment token (card nonce) generated by the payment form or a card on file made linked to the customer. if recording a payment that the seller received outside of Square, specify either `CASH` or `EXTERNAL`.',
        example: '12345',
      }),
    status: z
      .enum(['approved', 'pending', 'completed', 'canceled', 'failed', 'other'])
      .exactOptional()
      .openapi({
        description: 'Status of this payment.',
        example: 'approved',
        title: 'Status',
        'x-apideck-enum-id': 'pos-payments.status',
        'x-graphql-type-name': 'PosPosPaymentStatus',
      }),
    tax: z.number().exactOptional().openapi({ example: 20, title: 'Tax amount (in cents)' }),
    tender_id: z.string().openapi({ example: '12345' }),
    tip: z.number().exactOptional().openapi({ example: 7, title: 'Tip amount (in cents)' }),
    total: z.number().exactOptional().openapi({ example: 37.5, title: 'Total amount (in cents)' }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
    wallet: z
      .object({
        status: z
          .enum(['authorized', 'captured', 'voided', 'failed', 'other'])
          .exactOptional()
          .openapi({
            description:
              'The status of the wallet payment. The status can be AUTHORIZED, CAPTURED, VOIDED, or FAILED.',
            'x-apideck-enum-id': 'pos-payments.wallet.status',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Wallet details for this payment. This field is currently not available. Reach out to our team for more info.',
        title: 'Wallet details',
        required: [],
      }),
  })
  .openapi({
    required: ['source_id', 'customer_id', 'amount', 'currency', 'order_id', 'tender_id'],
    'x-apideck-schema-id': 'PosPayment',
  })
  .openapi('PosPayment')

const GetPosPaymentResponseSchema = z
  .object({
    data: PosPaymentSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'PosPayments' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetPosPaymentResponse',
    'x-graphql-type-name': 'PosPayment',
  })
  .openapi('GetPosPaymentResponse')

const GetPosPaymentsResponseSchema = z
  .object({
    data: z.array(PosPaymentSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'PosPayments' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetPosPaymentsResponse',
    'x-graphql-type-name': 'PosPaymentList',
  })
  .openapi('GetPosPaymentsResponse')

const TenderSchema = z
  .strictObject({
    active: ActiveSchema.exactOptional(),
    allows_tipping: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Allow tipping on payment from tender' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    editable: HiddenSchema.exactOptional(),
    hidden: HiddenSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    key: z.string().nullable().exactOptional().openapi({ example: 'com.clover.tender.cash' }),
    label: z.string().nullable().exactOptional().openapi({ example: 'Cash' }),
    opens_cash_drawer: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'If this tender opens the cash drawer' }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'Tender',
    'x-apideck-weights': {
      active: 'medium',
      allows_tipping: 'medium',
      created_at: 'medium',
      created_by: 'edge-case',
      editable: 'low',
      hidden: 'low',
      id: 'critical',
      key: 'high',
      label: 'high',
      opens_cash_drawer: 'low',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('Tender')

const GetTenderResponseSchema = z
  .object({
    data: TenderSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Tenders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetTenderResponse',
    'x-graphql-type-name': 'Tender',
  })
  .openapi('GetTenderResponse')

const GetTendersResponseSchema = z
  .object({
    data: z.array(TenderSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Tenders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetTendersResponse',
    'x-graphql-type-name': 'TenderList',
  })
  .openapi('GetTendersResponse')

const ModifierGroupFilterSchema = z
  .strictObject({
    modifier_group_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the job to filter on', example: '1234' }),
  })
  .openapi({
    example: { modifier_group_id: '1234' },
    'x-apideck-schema-id': 'ModifierGroupFilter',
    'x-graphql-type-name': 'ModifierGroupFilter',
    required: [],
  })
  .openapi('ModifierGroupFilter')

const NotFoundResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: "Could not find widget with id: '123'" }),
        z.object({}).openapi({ example: { not_found: { entity: 'widget', id: '123' } } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Not Found',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unknown Widget',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#entitynotfounderror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 404 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'EntityNotFoundError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'NotFound', required: [] })
  .openapi('NotFoundResponse')

const NotImplementedResponseSchema = z
  .object({
    detail: z
      .union([
        z
          .string()
          .openapi({
            example:
              "Failed to retrieve Widget tokenUrl from 'components.securitySchemes.OAuth2.flows'",
          }),
        z.object({}),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Not Implemented',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unmapped Attribute',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#mappingerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 501 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'MappingError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'NotImplemented', required: [] })
  .openapi('NotImplementedResponse')

const PaymentRequiredResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'You have reached your limit of 2000',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Payment Required',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Request Limit Reached',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#requestlimiterror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 402 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'RequestLimitError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'PaymentRequired', required: [] })
  .openapi('PaymentRequiredResponse')

const PosWebhookEventSchema = z
  .object({
    entity_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The service provider's ID of the entity that triggered this event",
        example: '123456ASDF',
      }),
    entity_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type entity that triggered this event', example: 'Company' }),
    entity_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The url to retrieve entity detail.',
        example: 'https://unify.apideck.com/crm/contacts/123456',
      }),
    event_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique reference to this request event',
        example: '9755c355-56c3-4a2f-a2da-86ff4411fccb',
      }),
    execution_attempt: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The current count this request event has been attempted',
        example: 2,
      }),
    occurred_at: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ISO Datetime for when the original event occurred',
        example: '2021-10-01T03:14:55.419Z',
      }),
    service_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Service provider identifier', example: 'close' }),
  })
  .openapi({ 'x-apideck-schema-id': 'WebhookEvent', required: [] })
  .and(
    z
      .object({
        event_type: z
          .enum([
            'pos.order.created',
            'pos.order.updated',
            'pos.order.deleted',
            'pos.payment.created',
            'pos.payment.updated',
            'pos.payment.deleted',
            'pos.merchant.created',
            'pos.merchant.updated',
            'pos.merchant.deleted',
            'pos.location.created',
            'pos.location.updated',
            'pos.location.deleted',
            'pos.item.created',
            'pos.item.updated',
            'pos.item.deleted',
            'pos.modifier.created',
            'pos.modifier.updated',
            'pos.modifier.deleted',
            'pos.modifier-group.created',
            'pos.modifier-group.updated',
            'pos.modifier-group.deleted',
          ])
          .exactOptional()
          .openapi({ example: 'pos.order.created' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({ 'x-sdk-exclude': true })
  .openapi('PosWebhookEvent')

const SocialLinkSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    type: z.string().nullable().exactOptional().openapi({ example: 'twitter' }),
    url: z.string().min(1).openapi({ example: 'https://www.twitter.com/apideck-io' }),
  })
  .openapi({
    required: ['url'],
    'x-apideck-schema-id': 'SocialLink',
    'x-apideck-weights': { id: 'edge-case', type: 'critical', url: 'critical' },
  })
  .openapi('SocialLink')

const TagsSchema = z
  .array(z.string())
  .openapi({ example: ['New'], 'x-apideck-schema-id': 'Tags' })
  .openapi('Tags')

const TooManyRequestsResponseSchema = z
  .object({
    detail: z
      .object({ context: z.string().exactOptional(), error: z.looseObject({}).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 6585)',
        example: 'Too Many Requests',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Connector Rate Limit Error',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#connectorratelimiterror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 429 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'ConnectorRateLimitError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'TooManyRequests', required: [] })
  .openapi('TooManyRequestsResponse')

const UnauthorizedResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'Failed to generate valid JWT Session. Verify applicationId is correct',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Unauthorized',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Unauthorized Request',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#unauthorizederror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 401 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'UnauthorizedError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'Unauthorized', required: [] })
  .openapi('UnauthorizedResponse')

const UnexpectedErrorResponseSchema = z
  .object({
    detail: z
      .union([
        z.string().openapi({ example: 'Missing Header: x-apideck-consumer-id' }),
        z.object({}).openapi({ example: { missing: [{ 'x-apideck-consumer-id': 'required' }] } }),
      ])
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Bad Request',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid Params',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#unauthorizederror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 400 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of error returned',
        example: 'RequestHeadersValidationError',
      }),
  })
  .openapi({ 'x-apideck-schema-id': 'Error', required: [] })
  .openapi('UnexpectedErrorResponse')

const UnprocessableResponseSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains parameter or domain specific information related to the error and why it occurred.',
        example: 'Unprocessable request, please verify your request headers and body.',
      }),
    error: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)',
        example: 'Unprocessable Entity',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable message providing more details about the error.',
        example: 'Invalid State',
      }),
    ref: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to documentation of error type',
        example: 'https://developers.apideck.com/errors#invalidstateerror',
      }),
    status_code: z
      .number()
      .exactOptional()
      .openapi({ description: 'HTTP status code', example: 422 }),
    type_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of error returned', example: 'InvalidStateError' }),
  })
  .openapi({ 'x-apideck-schema-id': 'Unprocessable', required: [] })
  .openapi('UnprocessableResponse')

const UpdateItemResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Items' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateItemResponse',
  })
  .openapi('UpdateItemResponse')

const UpdateLocationResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Locations' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateLocationResponse',
  })
  .openapi('UpdateLocationResponse')

const UpdateMerchantResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Merchants' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateMerchantResponse',
  })
  .openapi('UpdateMerchantResponse')

const UpdateModifierGroupResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ModifierGroups' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateModifierGroupResponse',
  })
  .openapi('UpdateModifierGroupResponse')

const UpdateModifierResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Modifiers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateModifierResponse',
  })
  .openapi('UpdateModifierResponse')

const UpdateOrderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'orders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateOrderResponse',
  })
  .openapi('UpdateOrderResponse')

const UpdateOrderTypeResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'OrderTypes' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateOrderTypeResponse',
  })
  .openapi('UpdateOrderTypeResponse')

const UpdatePosPaymentResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'PosPayments' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'square' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdatePosPaymentResponse',
  })
  .openapi('UpdatePosPaymentResponse')

const UpdateTenderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Tenders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'clover' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateTenderResponse',
  })
  .openapi('UpdateTenderResponse')

const WebsiteSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    type: z
      .enum(['primary', 'secondary', 'work', 'personal', 'other'])
      .exactOptional()
      .openapi({
        example: 'primary',
        'x-apideck-enum-id': 'websites.type',
        'x-graphql-type-name': 'WebsiteType',
      }),
    url: z.string().min(1).openapi({ example: 'http://example.com' }),
  })
  .openapi({
    required: ['url'],
    'x-apideck-schema-id': 'Website',
    'x-apideck-weights': { id: 'edge-case', type: 'critical', url: 'critical' },
  })
  .openapi('Website')

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const CreateItemResponseResponse = {
  description: 'Items',
  content: { 'application/json': { schema: CreateItemResponseSchema } },
}

const CreateLocationResponseResponse = {
  description: 'Locations',
  content: { 'application/json': { schema: CreateLocationResponseSchema } },
}

const CreateMerchantResponseResponse = {
  description: 'Merchants',
  content: { 'application/json': { schema: CreateMerchantResponseSchema } },
}

const CreateModifierGroupResponseResponse = {
  description: 'ModifierGroups',
  content: { 'application/json': { schema: CreateModifierGroupResponseSchema } },
}

const CreateModifierResponseResponse = {
  description: 'Modifiers',
  content: { 'application/json': { schema: CreateModifierResponseSchema } },
}

const CreateOrderResponseResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: CreateOrderResponseSchema } },
}

const CreateOrderTypeResponseResponse = {
  description: 'OrderTypes',
  content: { 'application/json': { schema: CreateOrderTypeResponseSchema } },
}

const CreatePosPaymentResponseResponse = {
  description: 'PosPayments',
  content: { 'application/json': { schema: CreatePosPaymentResponseSchema } },
}

const CreateTenderResponseResponse = {
  description: 'Tenders',
  content: { 'application/json': { schema: CreateTenderResponseSchema } },
}

const DeleteItemResponseResponse = {
  description: 'Items',
  content: { 'application/json': { schema: DeleteItemResponseSchema } },
}

const DeleteLocationResponseResponse = {
  description: 'Locations',
  content: { 'application/json': { schema: DeleteLocationResponseSchema } },
}

const DeleteMerchantResponseResponse = {
  description: 'Merchants',
  content: { 'application/json': { schema: DeleteMerchantResponseSchema } },
}

const DeleteModifierGroupResponseResponse = {
  description: 'ModifierGroups',
  content: { 'application/json': { schema: DeleteModifierGroupResponseSchema } },
}

const DeleteModifierResponseResponse = {
  description: 'Modifiers',
  content: { 'application/json': { schema: DeleteModifierResponseSchema } },
}

const DeleteOrderResponseResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: DeleteOrderResponseSchema } },
}

const DeleteOrderTypeResponseResponse = {
  description: 'OrderTypes',
  content: { 'application/json': { schema: DeleteOrderTypeResponseSchema } },
}

const DeletePosPaymentResponseResponse = {
  description: 'PosPayments',
  content: { 'application/json': { schema: DeletePosPaymentResponseSchema } },
}

const DeleteTenderResponseResponse = {
  description: 'Tenders',
  content: { 'application/json': { schema: DeleteTenderResponseSchema } },
}

const GetItemResponseResponse = {
  description: 'Items',
  content: { 'application/json': { schema: GetItemResponseSchema } },
}

const GetItemsResponseResponse = {
  description: 'Items',
  content: { 'application/json': { schema: GetItemsResponseSchema } },
}

const GetLocationResponseResponse = {
  description: 'Locations',
  content: { 'application/json': { schema: GetLocationResponseSchema } },
}

const GetLocationsResponseResponse = {
  description: 'Locations',
  content: { 'application/json': { schema: GetLocationsResponseSchema } },
}

const GetMerchantResponseResponse = {
  description: 'Merchants',
  content: { 'application/json': { schema: GetMerchantResponseSchema } },
}

const GetMerchantsResponseResponse = {
  description: 'Merchants',
  content: { 'application/json': { schema: GetMerchantsResponseSchema } },
}

const GetModifierGroupResponseResponse = {
  description: 'ModifierGroups',
  content: { 'application/json': { schema: GetModifierGroupResponseSchema } },
}

const GetModifierGroupsResponseResponse = {
  description: 'ModifierGroups',
  content: { 'application/json': { schema: GetModifierGroupsResponseSchema } },
}

const GetModifierResponseResponse = {
  description: 'Modifiers',
  content: { 'application/json': { schema: GetModifierResponseSchema } },
}

const GetModifiersResponseResponse = {
  description: 'Modifiers',
  content: { 'application/json': { schema: GetModifiersResponseSchema } },
}

const GetOrderResponseResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: GetOrderResponseSchema } },
}

const GetOrderTypeResponseResponse = {
  description: 'OrderTypes',
  content: { 'application/json': { schema: GetOrderTypeResponseSchema } },
}

const GetOrderTypesResponseResponse = {
  description: 'OrderTypes',
  content: { 'application/json': { schema: GetOrderTypesResponseSchema } },
}

const GetOrdersResponseResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: GetOrdersResponseSchema } },
}

const GetPosPaymentResponseResponse = {
  description: 'PosPayments',
  content: { 'application/json': { schema: GetPosPaymentResponseSchema } },
}

const GetPosPaymentsResponseResponse = {
  description: 'PosPayments',
  content: { 'application/json': { schema: GetPosPaymentsResponseSchema } },
}

const GetTenderResponseResponse = {
  description: 'Tenders',
  content: { 'application/json': { schema: GetTenderResponseSchema } },
}

const GetTendersResponseResponse = {
  description: 'Tenders',
  content: { 'application/json': { schema: GetTendersResponseSchema } },
}

const ItemResponse = {
  description: 'Items',
  content: { 'application/json': { schema: ItemSchema } },
}

const LocationResponse = {
  description: 'Locations',
  content: { 'application/json': { schema: LocationSchema } },
}

const MerchantResponse = {
  description: 'Merchants',
  content: { 'application/json': { schema: MerchantSchema } },
}

const ModifierResponse = {
  description: 'Modifiers',
  content: { 'application/json': { schema: ModifierSchema } },
}

const ModifierGroupResponse = {
  description: 'ModifierGroups',
  content: { 'application/json': { schema: ModifierGroupSchema } },
}

const NotFoundResponseResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: NotFoundResponseSchema } },
}

const NotImplementedResponseResponse = {
  description: 'Not Implemented',
  content: { 'application/json': { schema: NotImplementedResponseSchema } },
}

const OrderResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: OrderSchema } },
}

const OrderTypeResponse = {
  description: 'OrderTypes',
  content: { 'application/json': { schema: OrderTypeSchema } },
}

const PaymentRequiredResponseResponse = {
  description: 'Payment Required',
  content: { 'application/json': { schema: PaymentRequiredResponseSchema } },
}

const PosPaymentResponse = {
  description: 'PosPayments',
  content: { 'application/json': { schema: PosPaymentSchema } },
}

const TenderResponse = {
  description: 'Tenders',
  content: { 'application/json': { schema: TenderSchema } },
}

const TooManyRequestsResponseResponse = {
  description: 'Too Many Requests',
  content: { 'application/json': { schema: TooManyRequestsResponseSchema } },
}

const UnauthorizedResponseResponse = {
  description: 'Unauthorized',
  content: { 'application/json': { schema: UnauthorizedResponseSchema } },
}

const UnexpectedErrorResponseResponse = {
  description: 'Unexpected error',
  content: { 'application/json': { schema: UnexpectedErrorResponseSchema } },
}

const UnprocessableResponseResponse = {
  description: 'Unprocessable',
  content: { 'application/json': { schema: UnprocessableResponseSchema } },
}

const UpdateItemResponseResponse = {
  description: 'Items',
  content: { 'application/json': { schema: UpdateItemResponseSchema } },
}

const UpdateLocationResponseResponse = {
  description: 'Locations',
  content: { 'application/json': { schema: UpdateLocationResponseSchema } },
}

const UpdateMerchantResponseResponse = {
  description: 'Merchants',
  content: { 'application/json': { schema: UpdateMerchantResponseSchema } },
}

const UpdateModifierGroupResponseResponse = {
  description: 'ModifierGroups',
  content: { 'application/json': { schema: UpdateModifierGroupResponseSchema } },
}

const UpdateModifierResponseResponse = {
  description: 'Modifiers',
  content: { 'application/json': { schema: UpdateModifierResponseSchema } },
}

const UpdateOrderResponseResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: UpdateOrderResponseSchema } },
}

const UpdateOrderTypeResponseResponse = {
  description: 'OrderTypes',
  content: { 'application/json': { schema: UpdateOrderTypeResponseSchema } },
}

const UpdatePosPaymentResponseResponse = {
  description: 'PosPayments',
  content: { 'application/json': { schema: UpdatePosPaymentResponseSchema } },
}

const UpdateTenderResponseResponse = {
  description: 'Tenders',
  content: { 'application/json': { schema: UpdateTenderResponseSchema } },
}

const ApplicationIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'The ID of your Unify application',
      example: 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX',
      in: 'header',
      name: 'x-apideck-app-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const ConsumerIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the consumer which you want to get or push data from',
      in: 'header',
      name: 'x-apideck-consumer-id',
      required: true,
      schema: { type: 'string' },
    },
  })

const CursorParamsSchema = z
  .string()
  .nullable()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.',
      in: 'query',
      name: 'cursor',
      schema: { nullable: true, type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .nullable()
  .exactOptional()
  .openapi({
    param: {
      description:
        'The \'fields\' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.',
      example: 'id,updated_at',
      in: 'query',
      name: 'fields',
      schema: { nullable: true, type: 'string' },
      required: false,
    },
  })

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the record you are acting upon.',
      in: 'path',
      name: 'id',
      required: true,
      schema: { type: 'string' },
    },
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(200),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of results to return. Minimum 1, Maximum 200, Default 20',
      in: 'query',
      name: 'limit',
      schema: { default: 20, maximum: 200, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const LocationIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'ID of the location.',
      in: 'query',
      name: 'location_id',
      required: false,
      schema: { type: 'string' },
    },
  })

const MerchantIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the merchant.',
      in: 'path',
      name: 'merchantId',
      required: true,
      schema: { type: 'string' },
    },
  })

const ModifierGroupFilterParamsSchema = ModifierGroupFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/ModifierGroupFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const RawParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      description: 'Include raw response. Mostly used for debugging purposes',
      in: 'query',
      name: 'raw',
      schema: { default: false, type: 'boolean' },
      required: false,
    },
  })

const ServiceIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.',
      in: 'header',
      name: 'x-apideck-service-id',
      schema: { type: 'string' },
      required: false,
    },
  })

const ApiKeySecurityScheme = {
  description:
    'To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getPosItemsRoute = createRoute({
  method: 'get',
  path: '/pos/items',
  tags: ['Items'],
  summary: 'List Items',
  description: 'List Items',
  operationId: 'itemsAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetItemsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postPosItemsRoute = createRoute({
  method: 'post',
  path: '/pos/items',
  tags: ['Items'],
  summary: 'Create Item',
  description: 'Create Item',
  operationId: 'itemsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: ItemSchema } }, required: true },
  },
  responses: {
    201: CreateItemResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosItemsIdRoute = createRoute({
  method: 'get',
  path: '/pos/items/{id}',
  tags: ['Items'],
  summary: 'Get Item',
  description: 'Get Item',
  operationId: 'itemsOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetItemResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deletePosItemsIdRoute = createRoute({
  method: 'delete',
  path: '/pos/items/{id}',
  tags: ['Items'],
  summary: 'Delete Item',
  description: 'Delete Item',
  operationId: 'itemsDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteItemResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchPosItemsIdRoute = createRoute({
  method: 'patch',
  path: '/pos/items/{id}',
  tags: ['Items'],
  summary: 'Update Item',
  description: 'Update Item',
  operationId: 'itemsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: ItemSchema } }, required: true },
  },
  responses: {
    200: UpdateItemResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosLocationsRoute = createRoute({
  method: 'get',
  path: '/pos/locations',
  tags: ['Locations'],
  summary: 'List Locations',
  description: 'List Locations',
  operationId: 'locationsAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetLocationsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postPosLocationsRoute = createRoute({
  method: 'post',
  path: '/pos/locations',
  tags: ['Locations'],
  summary: 'Create Location',
  description: 'Create Location',
  operationId: 'locationsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: LocationSchema } }, required: true },
  },
  responses: {
    201: CreateLocationResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosLocationsIdRoute = createRoute({
  method: 'get',
  path: '/pos/locations/{id}',
  tags: ['Locations'],
  summary: 'Get Location',
  description: 'Get Location',
  operationId: 'locationsOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetLocationResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deletePosLocationsIdRoute = createRoute({
  method: 'delete',
  path: '/pos/locations/{id}',
  tags: ['Locations'],
  summary: 'Delete Location',
  description: 'Delete Location',
  operationId: 'locationsDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteLocationResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchPosLocationsIdRoute = createRoute({
  method: 'patch',
  path: '/pos/locations/{id}',
  tags: ['Locations'],
  summary: 'Update Location',
  description: 'Update Location',
  operationId: 'locationsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: LocationSchema } }, required: true },
  },
  responses: {
    200: UpdateLocationResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosMerchantsRoute = createRoute({
  method: 'get',
  path: '/pos/merchants',
  tags: ['Merchants'],
  summary: 'List Merchants',
  description: 'List Merchants',
  operationId: 'merchantsAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetMerchantsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postPosMerchantsRoute = createRoute({
  method: 'post',
  path: '/pos/merchants',
  tags: ['Merchants'],
  summary: 'Create Merchant',
  description: 'Create Merchant',
  operationId: 'merchantsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: MerchantSchema } }, required: true },
  },
  responses: {
    201: CreateMerchantResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosMerchantsIdRoute = createRoute({
  method: 'get',
  path: '/pos/merchants/{id}',
  tags: ['Merchants'],
  summary: 'Get Merchant',
  description: 'Get Merchant',
  operationId: 'merchantsOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetMerchantResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deletePosMerchantsIdRoute = createRoute({
  method: 'delete',
  path: '/pos/merchants/{id}',
  tags: ['Merchants'],
  summary: 'Delete Merchant',
  description: 'Delete Merchant',
  operationId: 'merchantsDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteMerchantResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchPosMerchantsIdRoute = createRoute({
  method: 'patch',
  path: '/pos/merchants/{id}',
  tags: ['Merchants'],
  summary: 'Update Merchant',
  description: 'Update Merchant',
  operationId: 'merchantsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: MerchantSchema } }, required: true },
  },
  responses: {
    200: UpdateMerchantResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosModifierGroupsRoute = createRoute({
  method: 'get',
  path: '/pos/modifier-groups',
  tags: ['Modifier Groups'],
  summary: 'List Modifier Groups',
  description: 'List Modifier Groups',
  operationId: 'modifierGroupsAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetModifierGroupsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postPosModifierGroupsRoute = createRoute({
  method: 'post',
  path: '/pos/modifier-groups',
  tags: ['Modifier Groups'],
  summary: 'Create Modifier Group',
  description: 'Create Modifier Group',
  operationId: 'modifierGroupsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: ModifierGroupSchema } }, required: true },
  },
  responses: {
    201: CreateModifierGroupResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosModifierGroupsIdRoute = createRoute({
  method: 'get',
  path: '/pos/modifier-groups/{id}',
  tags: ['Modifier Groups'],
  summary: 'Get Modifier Group',
  description: 'Get Modifier Group',
  operationId: 'modifierGroupsOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetModifierGroupResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deletePosModifierGroupsIdRoute = createRoute({
  method: 'delete',
  path: '/pos/modifier-groups/{id}',
  tags: ['Modifier Groups'],
  summary: 'Delete Modifier Group',
  description: 'Delete Modifier Group',
  operationId: 'modifierGroupsDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteModifierGroupResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchPosModifierGroupsIdRoute = createRoute({
  method: 'patch',
  path: '/pos/modifier-groups/{id}',
  tags: ['Modifier Groups'],
  summary: 'Update Modifier Group',
  description: 'Update Modifier Group',
  operationId: 'modifierGroupsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: ModifierGroupSchema } }, required: true },
  },
  responses: {
    200: UpdateModifierGroupResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosModifiersRoute = createRoute({
  method: 'get',
  path: '/pos/modifiers',
  tags: ['Modifiers'],
  summary: 'List Modifiers',
  description: 'List Modifiers',
  operationId: 'modifiersAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetModifiersResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postPosModifiersRoute = createRoute({
  method: 'post',
  path: '/pos/modifiers',
  tags: ['Modifiers'],
  summary: 'Create Modifier',
  description: 'Create Modifier',
  operationId: 'modifiersAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: ModifierSchema } }, required: true },
  },
  responses: {
    201: CreateModifierResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosModifiersIdRoute = createRoute({
  method: 'get',
  path: '/pos/modifiers/{id}',
  tags: ['Modifiers'],
  summary: 'Get Modifier',
  description: 'Get Modifier',
  operationId: 'modifiersOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(
        z.object({
          raw: RawParamsSchema,
          filter: ModifierGroupFilterParamsSchema,
          fields: FieldsParamsSchema,
        }),
      ),
  },
  responses: {
    200: GetModifierResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deletePosModifiersIdRoute = createRoute({
  method: 'delete',
  path: '/pos/modifiers/{id}',
  tags: ['Modifiers'],
  summary: 'Delete Modifier',
  description: 'Delete Modifier',
  operationId: 'modifiersDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const isGroup = (item: unknown): item is Record<string, unknown> =>
          typeof item === 'object' && item !== null && !Array.isArray(item)
        const lists = new WeakSet<object>()
        const isIndex = (part: string | undefined) => part !== undefined && /^\d*$/.test(part)
        const child = (target: Record<string, unknown>, key: string, asList: boolean) => {
          const held = target[key]
          if (isGroup(held)) return held
          const made: Record<string, unknown> = Object.create(null)
          if (asList) lists.add(made)
          target[key] = made
          return made
        }
        const set = (
          root: Record<string, unknown>,
          path: readonly string[],
          item: unknown,
        ): void => {
          const work: [Record<string, unknown>, number, unknown, boolean][] = [
            [root, 0, item, false],
          ]
          for (let job = work.pop(); job !== undefined; job = work.pop()) {
            const [target, at, value, split] = job
            const head = path[at]
            if (head === undefined) continue
            const next = path[at + 1]
            if (head === '') {
              if (!split && Array.isArray(value)) {
                for (let i = value.length - 1; i >= 0; i -= 1)
                  work.push([target, at, value[i], true])
                continue
              }
              const size = Object.keys(target).length
              if (next === undefined) {
                target[String(size)] = value
                continue
              }
              const free =
                next === ''
                  ? -1
                  : Object.values(target).findIndex((held) => isGroup(held) && !(next in held))
              work.push([
                child(target, String(free < 0 ? size : free), isIndex(next)),
                at + 1,
                value,
                false,
              ])
              continue
            }
            if (next === undefined) {
              target[head] = value
              continue
            }
            work.push([child(target, head, isIndex(next)), at + 1, value, false])
          }
        }
        const settle = (root: unknown): unknown => {
          if (!isGroup(root)) return root
          const found: [Record<string, unknown>, string, Record<string, unknown>][] = []
          const queue: Record<string, unknown>[] = [root]
          for (const node of queue) {
            for (const [key, inner] of Object.entries(node)) {
              if (isGroup(inner)) {
                found.push([node, key, inner])
                queue.push(inner)
              }
            }
          }
          const finish = (group: Record<string, unknown>): unknown =>
            lists.has(group)
              ? Object.entries(group)
                  .sort((a, b) => Number(a[0]) - Number(b[0]))
                  .map(([, inner]) => inner)
              : Object.assign(Object.create(null), group)
          for (const [parent, key, group] of found.reverse()) {
            parent[key] = finish(group)
          }
          return finish(root)
        }
        const deep: string[] = ['filter']
        for (const [key, item] of Object.entries(val)) {
          const match = /^([^\[\]]+)((?:\[[^\[\]]*\])+)$/.exec(key)
          const name = match?.[1]
          const path = match?.[2]
          if (name !== undefined && path !== undefined && deep.includes(name)) {
            const parts = path.slice(1, -1).split('][')
            set(group(name), parts, item)
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([
          ...rest,
          ...[...groups].map(([name, held]) => [name, settle(held)] as const),
        ])
      })
      .pipe(z.object({ raw: RawParamsSchema, filter: ModifierGroupFilterParamsSchema })),
  },
  responses: {
    200: DeleteModifierResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchPosModifiersIdRoute = createRoute({
  method: 'patch',
  path: '/pos/modifiers/{id}',
  tags: ['Modifiers'],
  summary: 'Update Modifier',
  description: 'Update Modifier',
  operationId: 'modifiersUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: ModifierSchema } }, required: true },
  },
  responses: {
    200: UpdateModifierResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosOrderTypesRoute = createRoute({
  method: 'get',
  path: '/pos/order-types',
  tags: ['Order Types'],
  summary: 'List Order Types',
  description: 'List Order Types',
  operationId: 'orderTypesAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetOrderTypesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postPosOrderTypesRoute = createRoute({
  method: 'post',
  path: '/pos/order-types',
  tags: ['Order Types'],
  summary: 'Create Order Type',
  description: 'Create Order Type',
  operationId: 'orderTypesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: OrderTypeSchema } }, required: true },
  },
  responses: {
    201: CreateOrderTypeResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosOrderTypesIdRoute = createRoute({
  method: 'get',
  path: '/pos/order-types/{id}',
  tags: ['Order Types'],
  summary: 'Get Order Type',
  description: 'Get Order Type',
  operationId: 'orderTypesOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetOrderTypeResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deletePosOrderTypesIdRoute = createRoute({
  method: 'delete',
  path: '/pos/order-types/{id}',
  tags: ['Order Types'],
  summary: 'Delete Order Type',
  description: 'Delete Order Type',
  operationId: 'orderTypesDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteOrderTypeResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchPosOrderTypesIdRoute = createRoute({
  method: 'patch',
  path: '/pos/order-types/{id}',
  tags: ['Order Types'],
  summary: 'Update Order Type',
  description: 'Update Order Type',
  operationId: 'orderTypesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: OrderTypeSchema } }, required: true },
  },
  responses: {
    200: UpdateOrderTypeResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosOrdersRoute = createRoute({
  method: 'get',
  path: '/pos/orders',
  tags: ['Orders'],
  summary: 'List Orders',
  description: 'List Orders',
  operationId: 'ordersAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      location_id: LocationIdParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetOrdersResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postPosOrdersRoute = createRoute({
  method: 'post',
  path: '/pos/orders',
  tags: ['Orders'],
  summary: 'Create Order',
  description: 'Create Order',
  operationId: 'ordersAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: OrderSchema } }, required: true },
  },
  responses: {
    201: CreateOrderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosOrdersIdRoute = createRoute({
  method: 'get',
  path: '/pos/orders/{id}',
  tags: ['Orders'],
  summary: 'Get Order',
  description: 'Get Order',
  operationId: 'ordersOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetOrderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deletePosOrdersIdRoute = createRoute({
  method: 'delete',
  path: '/pos/orders/{id}',
  tags: ['Orders'],
  summary: 'Delete Order',
  description: 'Delete Order',
  operationId: 'ordersDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteOrderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchPosOrdersIdRoute = createRoute({
  method: 'patch',
  path: '/pos/orders/{id}',
  tags: ['Orders'],
  summary: 'Update Order',
  description:
    'Updates an open order by adding, replacing, or deleting fields. Square-only: Orders with a `completed` or `canceled` status cannot be updated. To pay for an order, use the [payments endpoint](#tag/Payments).\n',
  operationId: 'ordersUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: OrderSchema } }, required: true },
  },
  responses: {
    200: UpdateOrderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postPosOrdersIdPayRoute = createRoute({
  method: 'post',
  path: '/pos/orders/{id}/pay',
  tags: ['Orders'],
  summary: 'Pay Order',
  description: 'Pay Order',
  operationId: 'ordersPay',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: OrderSchema } }, required: true },
  },
  responses: {
    201: CreateOrderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosPaymentsRoute = createRoute({
  method: 'get',
  path: '/pos/payments',
  tags: ['Payments'],
  summary: 'List Payments',
  description: 'List Payments',
  operationId: 'paymentsAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetPosPaymentsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postPosPaymentsRoute = createRoute({
  method: 'post',
  path: '/pos/payments',
  tags: ['Payments'],
  summary: 'Create Payment',
  description: 'Create Payment',
  operationId: 'paymentsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: PosPaymentSchema } }, required: true },
  },
  responses: {
    201: CreatePosPaymentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosPaymentsIdRoute = createRoute({
  method: 'get',
  path: '/pos/payments/{id}',
  tags: ['Payments'],
  summary: 'Get Payment',
  description: 'Get Payment',
  operationId: 'paymentsOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetPosPaymentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deletePosPaymentsIdRoute = createRoute({
  method: 'delete',
  path: '/pos/payments/{id}',
  tags: ['Payments'],
  summary: 'Delete Payment',
  description: 'Delete Payment',
  operationId: 'paymentsDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeletePosPaymentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchPosPaymentsIdRoute = createRoute({
  method: 'patch',
  path: '/pos/payments/{id}',
  tags: ['Payments'],
  summary: 'Update Payment',
  description: 'Update Payment',
  operationId: 'paymentsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: PosPaymentSchema } }, required: true },
  },
  responses: {
    200: UpdatePosPaymentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosTendersRoute = createRoute({
  method: 'get',
  path: '/pos/tenders',
  tags: ['Tenders'],
  summary: 'List Tenders',
  description: 'List Tenders',
  operationId: 'tendersAll',
  request: {
    query: z.object({
      raw: RawParamsSchema,
      cursor: CursorParamsSchema,
      limit: LimitParamsSchema,
      fields: FieldsParamsSchema,
    }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetTendersResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postPosTendersRoute = createRoute({
  method: 'post',
  path: '/pos/tenders',
  tags: ['Tenders'],
  summary: 'Create Tender',
  description: 'Create Tender',
  operationId: 'tendersAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: TenderSchema } }, required: true },
  },
  responses: {
    201: CreateTenderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getPosTendersIdRoute = createRoute({
  method: 'get',
  path: '/pos/tenders/{id}',
  tags: ['Tenders'],
  summary: 'Get Tender',
  description: 'Get Tender',
  operationId: 'tendersOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetTenderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deletePosTendersIdRoute = createRoute({
  method: 'delete',
  path: '/pos/tenders/{id}',
  tags: ['Tenders'],
  summary: 'Delete Tender',
  description: 'Delete Tender',
  operationId: 'tendersDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
  },
  responses: {
    200: DeleteTenderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchPosTendersIdRoute = createRoute({
  method: 'patch',
  path: '/pos/tenders/{id}',
  tags: ['Tenders'],
  summary: 'Update Tender',
  description: 'Update Tender',
  operationId: 'tendersUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: TenderSchema } }, required: true },
  },
  responses: {
    200: UpdateTenderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

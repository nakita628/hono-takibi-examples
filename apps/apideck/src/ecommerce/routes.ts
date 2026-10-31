import { createRoute, z } from '@hono/zod-openapi'

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

const CreateEcommerceCustomerResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateEcommerceCustomerResponse',
  })
  .openapi('CreateEcommerceCustomerResponse')

const CreateEcommerceOrderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'orders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateEcommerceOrderResponse',
  })
  .openapi('CreateEcommerceOrderResponse')

const CreateProductResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'products' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateProductResponse',
  })
  .openapi('CreateProductResponse')

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

const DeleteEcommerceCustomerResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteEcommerceCustomerResponse',
  })
  .openapi('DeleteEcommerceCustomerResponse')

const DeleteEcommerceOrderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'orders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteEcommerceOrderResponse',
  })
  .openapi('DeleteEcommerceOrderResponse')

const DeleteProductResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'products' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteProductResponse',
  })
  .openapi('DeleteProductResponse')

const IdSchema = z
  .string()
  .openapi({
    description: 'A unique identifier for an object.',
    example: '12345',
    readOnly: true,
    title: 'ID',
  })
  .openapi('Id')

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

const DepartmentSchema = z
  .strictObject({
    code: z.string().nullable().exactOptional().openapi({ example: '2', title: 'Code' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'R&D', title: 'Description' }),
    id: IdSchema.exactOptional(),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Department name', example: 'R&D', title: 'Name' }),
    parent_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Parent ID', example: '22345', readOnly: true }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'Department',
    'x-apideck-weights': {
      code: 'medium',
      created_at: 'medium',
      created_by: 'edge-case',
      description: 'low',
      id: 'critical',
      name: 'critical',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('Department')

const DescriptionSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'A description of the object.',
    example: 'A description',
    title: 'Description',
  })
  .openapi('Description')

const DivisionSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'The division the person is currently in. Usually a collection of departments or teams or regions.',
    example: 'Europe',
    title: 'Division',
  })
  .openapi('Division')

const EcommerceAddressSchema = z
  .object({
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'City of the billing address.', example: 'New York', title: 'City' }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Company name of the customer',
        example: 'Acme Inc.',
        title: 'Company Name',
      }),
    country: z
      .string()
      .max(2)
      .exactOptional()
      .openapi({ description: 'Country of the billing address.', example: 'US', title: 'Country' }),
    line1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Address line 1 of the billing address.',
        example: '123 Main Street',
        title: 'Address line 1',
      }),
    line2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Address line 2 of the billing address.',
        example: 'Apt 1',
        title: 'Address line 2',
      }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Postal/ZIP code of the billing address.',
        example: '10001',
        title: 'Postal code',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description: 'State/province of the billing address.',
        example: 'NY',
        title: 'State',
      }),
  })
  .openapi({
    description: 'An object representing a shipping or billing address.',
    title: 'Ecommerce Address',
    'x-apideck-schema-id': 'EcommerceAddress',
    'x-apideck-strict-required': ['line1', 'city', 'state', 'postal_code', 'country'],
    'x-apideck-weights': {
      city: 'critical',
      company_name: 'low',
      country: 'critical',
      line1: 'critical',
      postal_code: 'critical',
      state: 'critical',
    },
    required: [],
  })
  .openapi('EcommerceAddress')

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

const EcommerceOrderStatusSchema = z
  .enum(['active', 'completed', 'cancelled', 'archived', 'unknown'])
  .openapi({
    description: 'Current status of the order.',
    example: 'active',
    title: 'Order Status',
    'x-apideck-enum-id': 'order.status',
    'x-graphql-type-name': 'EcommerceOrderStatus',
  })
  .openapi('EcommerceOrderStatus')

const LinkedEcommerceOrderSchema = z
  .strictObject({
    id: IdSchema.exactOptional(),
    status: EcommerceOrderStatusSchema.exactOptional(),
    total: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The total amount of the order.',
        example: '199.99',
        title: 'Order Total',
      }),
  })
  .openapi({
    description: 'The order this entity is linked to.',
    title: 'LinkedEcommerceOrder',
    'x-apideck-schema-id': 'LinkedEcommerceOrder',
    'x-apideck-weights': { id: 'critical' },
    required: [],
  })
  .openapi('LinkedEcommerceOrder')

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

const EcommerceCustomerSchema = z
  .strictObject({
    addresses: z
      .array(
        z
          .strictObject({
            city: z
              .string()
              .exactOptional()
              .openapi({ description: 'City of the customer', example: 'Anytown', title: 'City' }),
            country: z
              .string()
              .exactOptional()
              .openapi({ description: 'Country of the customer', example: 'US', title: 'Country' }),
            id: IdSchema.exactOptional(),
            line1: z
              .string()
              .exactOptional()
              .openapi({
                description: 'First line of the street address of the customer',
                example: 'Main street',
                title: 'Address Line 1',
              }),
            line2: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Second line of the street address of the customer',
                example: 'apt #',
                title: 'Address Line 2',
              }),
            postal_code: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Postal code of the customer',
                example: '12345',
                title: 'Postal Code',
              }),
            state: z
              .string()
              .exactOptional()
              .openapi({ description: 'State of the customer', example: 'Ohio', title: 'State' }),
            type: z
              .enum(['billing', 'shipping', 'other'])
              .exactOptional()
              .openapi({
                example: 'billing',
                'x-apideck-enum-id': 'ecommerce.customer.addresses.type',
                'x-graphql-type-name': 'EcommerceCustomerAddressType',
              }),
          })
          .openapi({
            'x-apideck-strict-required': ['line1', 'city', 'state', 'postal_code', 'country'],
            'x-apideck-weights': {
              city: 'critical',
              country: 'critical',
              line1: 'critical',
              postal_code: 'critical',
              state: 'critical',
            },
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: 'An array of addresses for the customer.', title: 'Addresses' }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Company name of the customer',
        example: 'Acme Inc.',
        title: 'Company Name',
      }),
    created_at: CreatedAtSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    emails: z
      .array(EmailSchema)
      .exactOptional()
      .openapi({
        description: 'An array of email addresses for the customer.',
        title: 'Email Addresses',
      }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of the customer', example: 'John', title: 'First Name' }),
    id: IdSchema,
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of the customer', example: 'Doe', title: 'Last Name' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Full name of the customer',
        example: 'John Doe',
        title: 'Full Name',
      }),
    orders: z.array(LinkedEcommerceOrderSchema).exactOptional(),
    phone_numbers: z
      .array(PhoneNumberSchema)
      .exactOptional()
      .openapi({
        description: 'An array of phone numbers for the customer.',
        title: 'Phone Numbers',
      }),
    status: z
      .enum(['active', 'archived'])
      .exactOptional()
      .openapi({
        description: 'The current status of the customer',
        example: 'active',
        title: 'Customer status',
        'x-apideck-enum-id': 'ecommerce.customer.status',
        'x-graphql-type-name': 'EcommerceCustomerStatus',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
  })
  .openapi({
    required: ['id'],
    'x-apideck-schema-id': 'EcommerceCustomer',
    'x-apideck-strict-any-of': [
      { required: ['name', 'first_name', 'last_name'] },
      { required: ['company_name'] },
    ],
    'x-apideck-strict-required': ['emails', 'addresses'],
    'x-apideck-weights': {
      currency: 'edge-case',
      emails: 'critical',
      first_name: 'critical',
      id: 'critical',
      last_name: 'critical',
      name: 'critical',
    },
  })
  .openapi('EcommerceCustomer')

const EcommerceCustomersFilterSchema = z
  .strictObject({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer email address to filter on', example: 'elon@musk.com' }),
    phone_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer phone number to filter on', example: '111-111-1111' }),
  })
  .openapi({
    example: { email: 'elon@musk.com', phone_number: '111-111-1111' },
    'x-apideck-schema-id': 'EcommerceCustomersFilter',
    'x-graphql-type-name': 'EcommerceCustomersFilter',
    required: [],
  })
  .openapi('EcommerceCustomersFilter')

const EcommerceDiscountSchema = z
  .object({
    amount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The fixed amount of the discount.',
        example: '5.99',
        title: 'Discount amount',
      }),
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The code used to apply the discount.',
        example: 'SUMMER20',
        title: 'Discount code',
      }),
    percentage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The percentage of the discount.',
        example: '0.1',
        title: 'Discount percentage',
      }),
  })
  .openapi({
    description: 'An object representing a discount applied to an ecommerce order or product.',
    title: 'Ecommerce Discount',
    'x-apideck-schema-id': 'EcommerceDiscount',
    'x-apideck-strict-one-of': [{ required: ['amount'] }, { required: ['percentage'] }],
    'x-apideck-weights': { code: 'low' },
    required: [],
  })
  .openapi('EcommerceDiscount')

const LinkedEcommerceCustomerSchema = z
  .strictObject({
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Company name of the customer',
        example: 'Acme Inc.',
        title: 'Company Name',
      }),
    emails: z.array(EmailSchema).exactOptional(),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of the customer', example: 'John', title: 'First Name' }),
    id: z
      .string()
      .openapi({
        description: 'The ID of the customer this entity is linked to.',
        example: '12345',
        title: 'Customer ID',
      }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of the customer', example: 'Doe', title: 'Last Name' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Full name of the customer',
        example: 'John Doe',
        title: 'Full Name',
      }),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
  })
  .openapi({
    description: 'The customer this entity is linked to.',
    required: ['id'],
    title: 'LinkedEcommerceCustomer',
    'x-apideck-schema-id': 'LinkedEcommerceCustomer',
    'x-apideck-strict-any-of': [
      { required: ['name', 'first_name', 'last_name'] },
      { required: ['company_name'] },
    ],
    'x-apideck-strict-required': ['emails'],
    'x-apideck-weights': {
      company_name: 'medium',
      emails: 'medium',
      first_name: 'medium',
      id: 'critical',
      last_name: 'medium',
      phone_numbers: 'medium',
    },
    'x-graphql-type-name': 'LinkedEcommerceCustomer',
  })
  .openapi('LinkedEcommerceCustomer')

const EcommerceOrderLineItemSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the product or variant associated with the line item.',
        example:
          'Powerful and portable, the MacBook Pro is perfect for professionals and creatives.',
        title: 'Description',
      }),
    discounts: z.array(EcommerceDiscountSchema).exactOptional(),
    id: IdSchema.exactOptional(),
    name: z
      .string()
      .openapi({
        description: 'The name of the product or variant associated with the line item.',
        example: 'Midnight 16inch MacBook Pro',
        title: 'Name',
      }),
    options: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'A unique identifier for the option.',
                example: 'jkl012',
                title: 'Option identifier',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The name of the option.',
                example: 'Color',
                title: 'Option Name',
              }),
            value: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The value of the option.',
                example: 'Silver',
                title: 'Option Value',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    product_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for the product associated with the line item.',
        example: 'def456',
        title: 'Product ID',
      }),
    quantity: z
      .string()
      .openapi({
        description: 'The quantity of the product or variant associated with the line item.',
        example: '2',
        title: 'Quantity',
      }),
    sku: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The SKU of the product or variant associated with the line item.',
        example: 'MBP123-16GB-SILVER-13',
        title: 'SKU',
      }),
    tax_amount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total tax amount applied to the product or variant associated with the line item.',
        example: '1.6',
        title: 'Tax amount',
      }),
    tax_rate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tax rate applied to the product or variant associated with the line item.',
        example: '0.08',
        title: 'Tax rate',
      }),
    total_amount: z
      .string()
      .openapi({
        description:
          'The total amount for the product(s) or variant associated with the line item, including taxes and discounts.',
        example: '43.18',
        title: 'Total amount',
      }),
    unit_price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit price of the product or variant associated with the line item.',
        example: '19.99',
        title: 'Unit price',
      }),
    variant_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier for the variant of the product associated with the line item, if applicable.',
        example: 'ghi789',
        title: 'Variant ID',
      }),
  })
  .openapi({
    description:
      'A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information.',
    required: ['name', 'quantity', 'total_amount'],
    title: 'Ecommerce Order Line Item',
    'x-apideck-schema-id': 'EcommerceOrderLineItem',
    'x-apideck-strict-any-of': [{ required: ['id'] }, { required: ['product_id'] }],
    'x-apideck-strict-required': ['name', 'quantity', 'total_amount'],
    'x-apideck-weights': {
      name: 'critical',
      quantity: 'critical',
      total_amount: 'critical',
      unit_price: 'critical',
    },
  })
  .openapi('EcommerceOrderLineItem')

const TrackingItemSchema = z
  .object({
    number: z
      .string()
      .nullable()
      .openapi({
        description:
          ' The tracking number associated with the shipment, which can be used to track the progress of the delivery.',
        example: '1Z9999999999999999',
        title: 'Tracking number',
      }),
    provider: z
      .string()
      .nullable()
      .openapi({
        description:
          'The name or code of the carrier or shipping company that is handling the shipment.',
        example: 'UPS',
        title: 'Provider',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "The URL of the carrier's tracking page, which can be used to view detailed information about the shipment's progress.",
        example: 'https://www.ups.com/track?tracknum=1Z9999999999999999',
        title: 'Tracking url',
      }),
  })
  .openapi({
    description: 'Represents the tracking information associated with an ecommerce order.',
    required: ['provider', 'number'],
    title: 'Ecommerce Order Tracking Item',
    'x-apideck-schema-id': 'EcommerceOrderLineItem',
    'x-apideck-strict-required': ['provider', 'number'],
    'x-apideck-weights': {
      number: 'critical',
      provider: 'high',
      updated_at: 'medium',
      url: 'medium',
    },
  })
  .openapi('TrackingItem')

const EcommerceOrderSchema = z
  .strictObject({
    billing_address: EcommerceAddressSchema.exactOptional(),
    created_at: CreatedAtSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    customer: LinkedEcommerceCustomerSchema.exactOptional(),
    discounts: z.array(EcommerceDiscountSchema).exactOptional(),
    fulfillment_status: z
      .enum(['pending', 'shipped', 'partial', 'delivered', 'cancelled', 'returned', 'unknown'])
      .exactOptional()
      .openapi({
        description: 'Current fulfillment status of the order.',
        example: 'shipped',
        title: 'Fulfillment status',
        'x-apideck-enum-id': 'ecommerce.order.fulfillment_status',
        'x-graphql-type-name': 'EcommerceFulfillmentStatus',
      }),
    id: IdSchema,
    line_items: z.array(EcommerceOrderLineItemSchema).exactOptional(),
    note: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Note for the order.',
        example: 'Special instructions for delivery',
        title: 'Note',
      }),
    order_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Order number, if any.',
        example: '123456789',
        title: 'Order number',
      }),
    payment_method: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Payment method used for this order.',
        example: 'credit_card',
        title: 'Payment method',
      }),
    payment_status: z
      .enum(['pending', 'authorized', 'paid', 'partial', 'refunded', 'voided', 'unknown'])
      .exactOptional()
      .openapi({
        description: 'Current payment status of the order.',
        example: 'paid',
        title: 'Payment status',
        'x-apideck-enum-id': 'ecommerce.order.payment_status',
        'x-graphql-type-name': 'EcommercePaymentStatus',
      }),
    shipping_address: EcommerceAddressSchema.exactOptional(),
    shipping_cost: z
      .string()
      .exactOptional()
      .openapi({ description: 'Shipping cost, if any.', example: '5.17', title: 'Shipping cost' }),
    status: EcommerceOrderStatusSchema.exactOptional(),
    sub_total: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Sub-total amount, normally before tax.',
        example: '45.17',
        title: 'Sub-total amount',
      }),
    total_amount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total amount due.', example: '50.17', title: 'Total amount' }),
    total_discount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total discount, if any.', example: '5.5', title: 'Total discount' }),
    total_tax: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total tax, if any.', example: '5.16', title: 'Total tax' }),
    tracking: z.array(TrackingItemSchema).exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
  })
  .openapi({
    required: ['id'],
    'x-apideck-schema-id': 'EcommerceOrder',
    'x-apideck-strict-any-of': [
      { required: ['status'] },
      { required: ['payment_status'] },
      { required: ['fulfillment_status'] },
    ],
    'x-apideck-strict-required': [
      'currency',
      'total_tax',
      'total_amount',
      'customer',
      'billing_address',
      'shipping_address',
      'line_items',
    ],
    'x-apideck-weights': {
      billing_address: 'critical',
      currency: 'critical',
      customer: 'critical',
      fulfillment_status: 'critical',
      id: 'critical',
      line_items: 'critical',
      payment_method: 'critical',
      payment_status: 'critical',
      shipping_address: 'critical',
      status: 'critical',
      total_amount: 'critical',
      total_tax: 'critical',
    },
  })
  .openapi('EcommerceOrder')

const EcommerceOrdersFilterSchema = z
  .strictObject({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer email address to filter on', example: 'elon@musk.com' }),
  })
  .openapi({
    example: { email: 'elon@musk.com' },
    'x-apideck-schema-id': 'EcommerceOrdersFilter',
    'x-graphql-type-name': 'EcommerceOrdersFilter',
    required: [],
  })
  .openapi('EcommerceOrdersFilter')

const EcommerceProductSchema = z
  .strictObject({
    categories: z
      .array(
        z
          .object({
            id: IdSchema.exactOptional(),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The name of the category.',
                example: 'Laptops',
                title: 'Product Category Name',
              }),
          })
          .openapi({
            'x-apideck-strict-required': ['name'],
            'x-graphql-type-name': 'EcommerceProductCategory',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        description: 'An array of categories for the product, used for organization and searching.',
        title: 'Product Categories',
      }),
    created_at: CreatedAtSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A detailed description of the product.',
        example:
          'Powerful and portable, the MacBook Pro is perfect for professionals and creatives.',
        title: 'Product Description',
      }),
    id: IdSchema,
    images: z
      .array(
        z
          .object({
            id: IdSchema.exactOptional(),
            url: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The URL of an image of the product.',
                example: 'https://example.com/macbook-pro.jpg',
                title: 'Image URL',
              }),
          })
          .openapi({
            'x-apideck-strict-required': ['url'],
            'x-graphql-type-name': 'EcommerceProductImage',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: 'An array of image URLs for the product.', title: 'Product Images' }),
    inventory_quantity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The quantity of the product in stock.',
        example: '10',
        title: 'Inventory Quantity',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the product as it should be displayed to customers.',
        example: 'MacBook Pro',
        title: 'Product Name',
      }),
    options: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'A unique identifier for the option of the product.',
                example: '1',
                title: 'Option ID',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The name of the option for the product.',
                example: 'Color',
                title: 'Option Name',
              }),
            values: z
              .array(
                z
                  .string()
                  .openapi({
                    description: 'The possible values of the option for the product.',
                    example: 'Red',
                    title: 'Option Values',
                  }),
              )
              .exactOptional(),
          })
          .openapi({
            'x-apideck-strict-required': ['name', 'values'],
            'x-graphql-type-name': 'EcommerceProductOption',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({ description: 'An array of options for the product.', title: 'Product Options' }),
    price: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The price of the product.',
        example: '1999.99',
        title: 'Product Price',
      }),
    sku: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The stock keeping unit of the product.',
        example: 'MBP123',
        title: 'Product SKU',
      }),
    status: z
      .enum(['active', 'archived'])
      .exactOptional()
      .openapi({
        description: 'The current status of the product (active or archived).',
        example: 'active',
        title: 'Product Status',
        'x-apideck-enum-id': 'ecommerce.products.status',
        'x-graphql-type-name': 'EcommerceProductStatus',
      }),
    tags: z
      .array(z.string().openapi({ example: 'Apple' }))
      .exactOptional()
      .openapi({
        description: 'An array of tags for the product, used for organization and searching.',
        title: 'Product Tags',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    variants: z
      .array(
        z
          .object({
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'A unique identifier for the variant of the product.',
                example: '1',
                title: 'Variant ID',
              }),
            images: z
              .array(
                z
                  .object({
                    id: IdSchema.exactOptional(),
                    url: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The URL of an image of the variant.',
                        example: 'https://example.com/macbook-pro.jpg',
                        title: 'Image URL',
                      }),
                  })
                  .openapi({
                    'x-apideck-strict-required': ['url'],
                    'x-graphql-type-name': 'EcommerceVariantImage',
                    required: [],
                  }),
              )
              .exactOptional(),
            inventory_quantity: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The quantity of the variant in stock.',
                example: '5',
                title: 'Inventory Quantity',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The name for the variant, used for displaying to customers.',
                example: 'Midnight 16inch MacBook Pro',
                title: 'Variant Name',
              }),
            options: z
              .array(
                z
                  .object({
                    id: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'A unique identifier for the option of the variant.',
                        example: '1',
                        title: 'Option ID',
                      }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The name of the option for the variant.',
                        example: 'Color',
                        title: 'Option Name',
                      }),
                    value: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: 'The value of the option for the variant.',
                        example: 'Silver',
                        title: 'Option Value',
                      }),
                  })
                  .openapi({ 'x-graphql-type-name': 'EcommerceVariantOption', required: [] }),
              )
              .exactOptional(),
            price: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The price of the variant.',
                example: '1999.99',
                title: 'Variant Price',
              }),
            sku: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The stock keeping unit of the variant.',
                example: 'MBP123-16GB-SILVER-13',
                title: 'Variant SKU',
              }),
            weight: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The weight of the variant.',
                example: '1.25',
                title: 'Weight',
              }),
            weight_unit: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The unit of measurement for the weight of the variant.',
                example: 'lb',
                title: 'Weight Unit',
              }),
          })
          .openapi({
            'x-apideck-strict-required': ['id', 'name', 'price', 'options'],
            required: [],
          }),
      )
      .exactOptional(),
    weight: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The weight of the product.',
        example: '1.25',
        title: 'Product Weight',
      }),
    weight_unit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unit of measurement for the weight of the product.',
        example: 'lb',
        title: 'Weight Unit',
      }),
  })
  .openapi({
    required: ['id'],
    'x-apideck-schema-id': 'EcommerceProduct',
    'x-apideck-strict-any-of': [{ required: ['price'] }, { required: ['variants'] }],
    'x-apideck-strict-required': ['name'],
    'x-apideck-weights': { id: 'critical', name: 'critical', price: 'critical' },
  })
  .openapi('EcommerceProduct')

const EcommerceStoreSchema = z
  .strictObject({
    admin_url: z
      .url()
      .regex(/^https?:\/\//)
      .exactOptional()
      .openapi({
        description: "The store's admin login URL",
        example: 'https://mybrand.com/admin',
        title: 'Store Admin URL',
      }),
    created_at: CreatedAtSchema.exactOptional(),
    id: IdSchema,
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The store's name", example: 'My Store', title: 'Store name' }),
    store_url: z
      .url()
      .regex(/^https?:\/\//)
      .exactOptional()
      .openapi({
        description: "The store's website URL",
        example: 'https://mybrand.com/shop',
        title: 'Store URL',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
  })
  .openapi({ required: ['id'], 'x-apideck-schema-id': 'EcommerceStore' })
  .openapi('EcommerceStore')

const FirstNameSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The first name of the person.', example: 'Elon', title: 'First name' })
  .openapi('FirstName')

const GenderSchema = z
  .enum(['male', 'female', 'unisex', 'other', 'not_specified'])
  .nullable()
  .openapi({
    description: 'The gender represents the gender identity of a person.',
    example: 'male',
    title: 'Gender',
    'x-apideck-enum-id': 'genders',
  })
  .openapi('Gender')

const GetEcommerceCustomerResponseSchema = z
  .object({
    data: EcommerceCustomerSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetEcommerceCustomerResponse',
    'x-graphql-type-name': 'EcommerceCustomer',
  })
  .openapi('GetEcommerceCustomerResponse')

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

const GetEcommerceCustomersResponseSchema = z
  .object({
    data: z.array(EcommerceCustomerSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetEcommerceCustomersResponse',
    'x-graphql-type-name': 'EcommerceCustomerList',
  })
  .openapi('GetEcommerceCustomersResponse')

const GetEcommerceOrderResponseSchema = z
  .object({
    data: EcommerceOrderSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'orders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetEcommerceOrderResponse',
    'x-graphql-type-name': 'EcommerceOrder',
  })
  .openapi('GetEcommerceOrderResponse')

const GetEcommerceOrdersResponseSchema = z
  .object({
    data: z.array(EcommerceOrderSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'orders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetEcommerceOrdersResponse',
    'x-graphql-type-name': 'EcommerceOrderList',
  })
  .openapi('GetEcommerceOrdersResponse')

const GetProductResponseSchema = z
  .object({
    data: EcommerceProductSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'products' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetProductResponse',
    'x-graphql-type-name': 'EcommerceProduct',
  })
  .openapi('GetProductResponse')

const GetProductsResponseSchema = z
  .object({
    data: z.array(EcommerceProductSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'products' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetProductsResponse',
    'x-graphql-type-name': 'EcommerceProductList',
  })
  .openapi('GetProductsResponse')

const GetStoreResponseSchema = z
  .object({
    data: EcommerceStoreSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'stores' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetStoreResponse',
    'x-graphql-type-name': 'EcommerceStore',
  })
  .openapi('GetStoreResponse')

const GetStoresResponseSchema = z
  .object({
    data: z.array(EcommerceStoreSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'stores' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetStoresResponse',
    'x-graphql-type-name': 'EcommerceStoreList',
  })
  .openapi('GetStoresResponse')

const LanguageSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'language code according to ISO 639-1. For the United States - EN',
    example: 'EN',
  })
  .openapi('Language')

const LastNameSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The last name of the person.', example: 'Musk', title: 'Last name' })
  .openapi('LastName')

const MiddleNameSchema = z
  .string()
  .nullable()
  .openapi({ description: 'Middle name of the person.', example: 'D.', title: 'Middle name' })
  .openapi('MiddleName')

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

const PaymentUnitSchema = z
  .enum(['hour', 'week', 'month', 'year', 'paycheck'])
  .openapi({
    description: 'Unit of measurement for employee compensation.',
    example: 'year',
    title: 'Payment Unit',
    'x-apideck-enum-id': 'payment_unit',
  })
  .openapi('PaymentUnit')

const PhotoUrlSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The URL of the photo of a person.',
    example: 'https://unavatar.io/elon-musk',
    title: 'Photo URL',
  })
  .openapi('PhotoUrl')

const TitleSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The job title of the person.', example: 'CEO', title: 'Job title' })
  .openapi('Title')

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

const UpdateEcommerceCustomerResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateEcommerceCustomerResponse',
  })
  .openapi('UpdateEcommerceCustomerResponse')

const UpdateEcommerceOrderResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'orders' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateEcommerceOrderResponse',
  })
  .openapi('UpdateEcommerceOrderResponse')

const UpdateProductResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'products' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'shopify' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateProductResponse',
  })
  .openapi('UpdateProductResponse')

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

const CreateEcommerceCustomerResponseResponse = {
  description: 'Customers',
  content: { 'application/json': { schema: CreateEcommerceCustomerResponseSchema } },
}

const CreateEcommerceOrderResponseResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: CreateEcommerceOrderResponseSchema } },
}

const CreateProductResponseResponse = {
  description: 'Products',
  content: { 'application/json': { schema: CreateProductResponseSchema } },
}

const DeleteEcommerceCustomerResponseResponse = {
  description: 'Customers',
  content: { 'application/json': { schema: DeleteEcommerceCustomerResponseSchema } },
}

const DeleteEcommerceOrderResponseResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: DeleteEcommerceOrderResponseSchema } },
}

const DeleteProductResponseResponse = {
  description: 'Products',
  content: { 'application/json': { schema: DeleteProductResponseSchema } },
}

const GetEcommerceCustomerResponseResponse = {
  description: 'Customers',
  content: { 'application/json': { schema: GetEcommerceCustomerResponseSchema } },
}

const GetEcommerceCustomersResponseResponse = {
  description: 'Customers',
  content: { 'application/json': { schema: GetEcommerceCustomersResponseSchema } },
}

const GetEcommerceOrderResponseResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: GetEcommerceOrderResponseSchema } },
}

const GetEcommerceOrdersResponseResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: GetEcommerceOrdersResponseSchema } },
}

const GetProductResponseResponse = {
  description: 'Products',
  content: { 'application/json': { schema: GetProductResponseSchema } },
}

const GetProductsResponseResponse = {
  description: 'Products',
  content: { 'application/json': { schema: GetProductsResponseSchema } },
}

const GetStoreResponseResponse = {
  description: 'Stores',
  content: { 'application/json': { schema: GetStoreResponseSchema } },
}

const GetStoresResponseResponse = {
  description: 'Stores',
  content: { 'application/json': { schema: GetStoresResponseSchema } },
}

const NotFoundResponseResponse = {
  description: 'The specified resource was not found',
  content: { 'application/json': { schema: NotFoundResponseSchema } },
}

const NotImplementedResponseResponse = {
  description: 'Not Implemented',
  content: { 'application/json': { schema: NotImplementedResponseSchema } },
}

const PaymentRequiredResponseResponse = {
  description: 'Payment Required',
  content: { 'application/json': { schema: PaymentRequiredResponseSchema } },
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

const UpdateEcommerceCustomerResponseResponse = {
  description: 'Customers',
  content: { 'application/json': { schema: UpdateEcommerceCustomerResponseSchema } },
}

const UpdateEcommerceOrderResponseResponse = {
  description: 'Orders',
  content: { 'application/json': { schema: UpdateEcommerceOrderResponseSchema } },
}

const UpdateProductResponseResponse = {
  description: 'Products',
  content: { 'application/json': { schema: UpdateProductResponseSchema } },
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

const CustomersFilterParamsSchema = EcommerceCustomersFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/EcommerceCustomersFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

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

const OrdersFilterParamsSchema = EcommerceOrdersFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/EcommerceOrdersFilter' },
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

export const getEcommerceCustomersRoute = createRoute({
  method: 'get',
  path: '/ecommerce/customers',
  tags: ['Customers'],
  summary: 'List Customers',
  description: 'List Customers',
  operationId: 'customersAll',
  request: {
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
          cursor: CursorParamsSchema,
          limit: LimitParamsSchema,
          filter: CustomersFilterParamsSchema,
          fields: FieldsParamsSchema,
        }),
      ),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetEcommerceCustomersResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEcommerceCustomersIdRoute = createRoute({
  method: 'get',
  path: '/ecommerce/customers/{id}',
  tags: ['Customers'],
  summary: 'Get Customer',
  description: 'Get Customer',
  operationId: 'customersOne',
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
    200: GetEcommerceCustomerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEcommerceOrdersRoute = createRoute({
  method: 'get',
  path: '/ecommerce/orders',
  tags: ['Orders'],
  summary: 'List Orders',
  description: 'List Orders',
  operationId: 'ordersAll',
  request: {
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
          cursor: CursorParamsSchema,
          limit: LimitParamsSchema,
          filter: OrdersFilterParamsSchema,
          fields: FieldsParamsSchema,
        }),
      ),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetEcommerceOrdersResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEcommerceOrdersIdRoute = createRoute({
  method: 'get',
  path: '/ecommerce/orders/{id}',
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
    200: GetEcommerceOrderResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEcommerceProductsRoute = createRoute({
  method: 'get',
  path: '/ecommerce/products',
  tags: ['Products'],
  summary: 'List Products',
  description: 'List Products',
  operationId: 'productsAll',
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
    200: GetProductsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEcommerceProductsIdRoute = createRoute({
  method: 'get',
  path: '/ecommerce/products/{id}',
  tags: ['Products'],
  summary: 'Get Product',
  description: 'Get Product',
  operationId: 'productsOne',
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
    200: GetProductResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getEcommerceStoreRoute = createRoute({
  method: 'get',
  path: '/ecommerce/store',
  tags: ['Stores'],
  summary: 'Get Store',
  description: 'Get Store',
  operationId: 'storesOne',
  request: {
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
  },
  responses: {
    200: GetStoreResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

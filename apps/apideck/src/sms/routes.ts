import { createRoute, z } from '@hono/zod-openapi'

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

const CreateMessageResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Messages' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'twilio' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateMessageResponse',
  })
  .openapi('CreateMessageResponse')

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

const DeleteMessageResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Messages' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'twilio' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteMessageResponse',
  })
  .openapi('DeleteMessageResponse')

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

const MessageSchema = z
  .strictObject({
    body: z
      .string()
      .max(1600)
      .openapi({
        description: 'The message text.',
        example: 'Hi! How are you doing?',
        title: 'Message Body',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the object was created.',
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
        title: 'Created at (timestamp)',
      }),
    created_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The user who created the object.',
        example: '12345',
        readOnly: true,
        title: 'Created by',
      }),
    direction: z
      .enum(['inbound', 'outbound-api', 'outbound-call', 'outbound-reply', 'unknown'])
      .exactOptional()
      .openapi({
        description: 'The direction of the message.',
        example: 'outbound-api',
        readOnly: true,
        title: 'Direction',
        'x-apideck-enum-id': 'messages.direction',
      }),
    error: z
      .object({
        code: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The error_code provides more information about the failure. If the message was successful, this value is null',
            example: 'X1',
            readOnly: true,
            title: 'Error Code',
          }),
        message: z
          .string()
          .exactOptional()
          .openapi({ example: 'Something went wrong', readOnly: true, title: 'Error Message' }),
      })
      .exactOptional()
      .openapi({
        description: 'The error returned if your message status is failed or undelivered.',
        example: { code: 'X1', message: 'Something went wrong' },
        readOnly: true,
        title: 'Error',
        required: [],
      }),
    from: z
      .string()
      .openapi({
        description: 'The phone number that initiated the message.',
        example: '+15017122661',
        title: 'From',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for an object.',
        example: '12345',
        readOnly: true,
        title: 'ID',
      }),
    messaging_service_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID.',
        example: '123456',
        title: 'Messaging Service ID',
      }),
    number_of_media_files: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of media files associated with the message.',
        example: 1,
        readOnly: true,
        title: 'Number of media files',
      }),
    number_of_units: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of units that make up the complete message. Messages can be split up due to the constraints of the message size.',
        example: 1,
        readOnly: true,
        title: 'Number of units',
      }),
    price: z
      .object({
        currency: CurrencySchema.exactOptional(),
        per_unit: z
          .string()
          .exactOptional()
          .openapi({ description: '', example: '0.01', readOnly: true, title: 'Price per unit' }),
        total_amount: z
          .string()
          .exactOptional()
          .openapi({ description: '', example: '0.01', readOnly: true, title: 'Price Amount' }),
      })
      .exactOptional()
      .openapi({
        description: 'Price of the message.',
        example: { currency: 'USD', per_unit: '0.01', total_amount: '0.01' },
        readOnly: true,
        title: 'Price',
        required: [],
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'A client reference.', example: 'CUST001', title: 'Reference' }),
    scheduled_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The scheduled date and time of the message.',
        example: '2020-09-30T07:43:32.000Z',
      }),
    sent_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time that the message was sent',
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
      }),
    status: z
      .enum([
        'accepted',
        'scheduled',
        'canceled',
        'queued',
        'sending',
        'sent',
        'failed',
        'delivered',
        'undelivered',
        'receiving',
        'received',
        'read',
      ])
      .exactOptional()
      .openapi({
        description: 'Status of the delivery of the message.',
        example: 'sent',
        readOnly: true,
        title: 'Status',
        'x-apideck-enum-id': 'messages.status',
      }),
    subject: z.string().exactOptional().openapi({ example: 'Picture', title: 'Message Subject' }),
    to: z
      .string()
      .openapi({
        description: 'The phone number that received the message.',
        example: '+15017122662',
        title: 'Message Body',
      }),
    type: z
      .enum(['sms', 'mms'])
      .exactOptional()
      .openapi({
        description: 'Set to sms for SMS messages and mms for MMS messages.',
        example: 'sms',
        title: 'Message type',
        'x-apideck-enum-id': 'messages.type',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time when the object was last updated.',
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
        title: 'Updated at (timestamp)',
      }),
    updated_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The user who last updated the object.',
        example: '12345',
        readOnly: true,
        title: 'Updated by',
      }),
    webhook_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Define a webhook to receive delivery notifications.',
        example: 'https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms',
        title: 'Webhook URL',
      }),
  })
  .openapi({
    required: ['from', 'to', 'body'],
    'x-apideck-schema-id': 'Message',
    'x-apideck-weights': {
      body: 'critical',
      error: 'edge-case',
      from: 'critical',
      id: 'critical',
      messaging_service_id: 'edge-case',
      number_of_media_files: 'edge-case',
      number_of_units: 'low',
      price: 'edge-case',
      status: 'high',
      subject: 'medium',
      to: 'critical',
      type: 'high',
      webhook_url: 'low',
    },
  })
  .openapi('Message')

const GetMessageResponseSchema = z
  .object({
    data: MessageSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Messages' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'twilio' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetMessageResponse',
    'x-graphql-type-name': 'Message',
  })
  .openapi('GetMessageResponse')

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

const GetMessagesResponseSchema = z
  .object({
    data: z.array(MessageSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Messages' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'twilio' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetMessagesResponse',
    'x-graphql-type-name': 'MessageList',
  })
  .openapi('GetMessagesResponse')

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

const UpdateMessageResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'Messages' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'twilio' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateMessageResponse',
  })
  .openapi('UpdateMessageResponse')

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const CreateMessageResponseResponse = {
  description: 'Messages',
  content: { 'application/json': { schema: CreateMessageResponseSchema } },
}

const DeleteMessageResponseResponse = {
  description: 'Messages',
  content: { 'application/json': { schema: DeleteMessageResponseSchema } },
}

const GetMessageResponseResponse = {
  description: 'Messages',
  content: { 'application/json': { schema: GetMessageResponseSchema } },
}

const GetMessagesResponseResponse = {
  description: 'Messages',
  content: { 'application/json': { schema: GetMessagesResponseSchema } },
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

const UpdateMessageResponseResponse = {
  description: 'Messages',
  content: { 'application/json': { schema: UpdateMessageResponseSchema } },
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

export const getSmsMessagesRoute = createRoute({
  method: 'get',
  path: '/sms/messages',
  tags: ['Messages'],
  summary: 'List Messages',
  description: 'List Messages',
  operationId: 'messagesAll',
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
    200: GetMessagesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postSmsMessagesRoute = createRoute({
  method: 'post',
  path: '/sms/messages',
  tags: ['Messages'],
  summary: 'Create Message',
  description: 'Create Message',
  operationId: 'messagesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: MessageSchema } }, required: true },
  },
  responses: {
    201: CreateMessageResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getSmsMessagesIdRoute = createRoute({
  method: 'get',
  path: '/sms/messages/{id}',
  tags: ['Messages'],
  summary: 'Get Message',
  description: 'Get Message',
  operationId: 'messagesOne',
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
    200: GetMessageResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteSmsMessagesIdRoute = createRoute({
  method: 'delete',
  path: '/sms/messages/{id}',
  tags: ['Messages'],
  summary: 'Delete Message',
  description: 'Delete Message',
  operationId: 'messagesDelete',
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
    200: DeleteMessageResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchSmsMessagesIdRoute = createRoute({
  method: 'patch',
  path: '/sms/messages/{id}',
  tags: ['Messages'],
  summary: 'Update Message',
  description: 'Update Message',
  operationId: 'messagesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: MessageSchema } }, required: true },
  },
  responses: {
    200: UpdateMessageResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

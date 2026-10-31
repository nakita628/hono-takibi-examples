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

const BankAccountSchema = z
  .strictObject({
    account_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The name which you used in opening your bank account.',
        example: 'SPACEX LLC',
        title: 'Bank Account Name',
      }),
    account_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A bank account number is a number that is tied to your bank account. If you have several bank accounts, such as personal, joint, business (and so on), each account will have a different account number.',
        example: '123465',
        title: 'Bank Account Number',
      }),
    account_type: z
      .enum(['bank_account', 'credit_card', 'other'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The type of bank account.',
        example: 'credit_card',
        title: 'Account Type',
        'x-apideck-enum-id': 'bank-accounts.account_type',
      }),
    bank_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A bank code is a code assigned by a central bank, a bank supervisory body or a Bankers Association in a country to all its licensed member banks or financial institutions.',
        example: 'BNH',
        title: 'Bank Code',
      }),
    bic: z.string().nullable().exactOptional().openapi({ example: 'AUDSCHGGXXX' }),
    branch_identifier: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A branch identifier is a unique identifier for a branch of a bank or financial institution.',
        example: '001',
        title: 'Branch Identifier',
      }),
    bsb_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A BSB is a 6 digit numeric code used for identifying the branch of an Australian or New Zealand bank or financial institution.',
        example: '062-001',
        title: 'BSB Number',
      }),
    currency: CurrencySchema.exactOptional(),
    iban: z.string().nullable().exactOptional().openapi({ example: 'CH2989144532982975332' }),
  })
  .openapi({
    'x-apideck-schema-id': 'BankAccount',
    'x-apideck-weights': {
      account_name: 'medium',
      account_number: 'critical',
      account_type: 'medium',
      bank_code: 'low',
      bic: 'medium',
      branch_identifier: 'low',
      bsb_number: 'edge-case',
      currency: 'medium',
      iban: 'high',
    },
    required: [],
  })
  .openapi('BankAccount')

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

const FirstNameSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The first name of the person.', example: 'Elon', title: 'First name' })
  .openapi('FirstName')

const LastNameSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The last name of the person.', example: 'Musk', title: 'Last name' })
  .openapi('LastName')

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

const CompanySchema = z
  .strictObject({
    abn_branch: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.',
        example: '123',
        title: 'ABN Branch',
      }),
    abn_or_tfn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.',
        example: '46 115 614 695',
        title: 'ABN or TFN',
      }),
    acn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.',
        example: 'XXX XXX XXX',
        title: 'ACN',
      }),
    addresses: z.array(AddressSchema).exactOptional(),
    annual_revenue: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Annual revenue', example: '+$35m' }),
    bank_accounts: z.array(BankAccountSchema).exactOptional(),
    birthday: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date of birth of the person.',
        example: '2000-08-12',
        title: 'Birth Date',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    created_by: z.string().nullable().exactOptional().openapi({ example: '12345', readOnly: true }),
    currency: CurrencySchema.exactOptional(),
    custom_fields: z.array(CustomFieldSchema).exactOptional(),
    deleted: z.boolean().exactOptional().openapi({ example: false, readOnly: true }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        example:
          'Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications company headquartered in Hawthorne, California.',
      }),
    emails: z.array(EmailSchema).exactOptional(),
    fax: z.string().nullable().exactOptional().openapi({ example: '+12129876543' }),
    first_name: FirstNameSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    image: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'https://www.spacex.com/static/images/share.jpg' }),
    industry: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Industry', example: 'Apparel' }),
    interaction_count: z.int().nullable().exactOptional().openapi({ example: 1, readOnly: true }),
    last_activity_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    last_name: LastNameSchema.exactOptional(),
    name: z.string().min(1).openapi({ example: 'SpaceX' }),
    number_of_employees: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of employees', example: '500-1000' }),
    owner_id: z.string().exactOptional().openapi({ example: '12345' }),
    ownership: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Ownership', example: 'Public' }),
    parent_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Parent ID', example: '22345', readOnly: true }),
    payee_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '78932EN', title: 'Payee number' }),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    read_only: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ example: false, title: 'Read-only' }),
    row_type: z
      .object({
        id: z.string().exactOptional().openapi({ example: '12345' }),
        name: z.string().exactOptional().openapi({ example: 'Customer Account' }),
      })
      .exactOptional()
      .openapi({
        title: 'Company Row Type',
        'x-apideck-weights': { id: 'critical', name: 'medium' },
        'x-graphql-type-name': 'CompanyRowType',
        required: [],
      }),
    sales_tax_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '12456EN', title: 'Sales tax number' }),
    salutation: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: "A formal salutation for the person. For example, 'Mr', 'Mrs'",
        example: 'Mr',
      }),
    social_links: z.array(SocialLinkSchema).exactOptional(),
    status: z.string().nullable().exactOptional().openapi({ example: 'Open' }),
    tags: TagsSchema.exactOptional(),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    updated_by: z.string().nullable().exactOptional().openapi({ example: '12345', readOnly: true }),
    vat_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'VAT number', example: 'BE0689615164' }),
    websites: z.array(WebsiteSchema).exactOptional(),
  })
  .openapi({
    required: ['name'],
    'x-apideck-schema-id': 'Company',
    'x-apideck-weights': {
      abn_branch: 'edge-case',
      abn_or_tfn: 'edge-case',
      acn: 'edge-case',
      addresses: 'high',
      annual_revenue: 'low',
      bank_accounts: 'medium',
      birthday: 'edge-case',
      created_at: 'medium',
      created_by: 'edge-case',
      currency: 'medium',
      custom_fields: 'medium',
      deleted: 'medium',
      description: 'medium',
      emails: 'high',
      fax: 'low',
      first_name: 'edge-case',
      id: 'critical',
      image: 'low',
      industry: 'medium',
      interaction_count: 'edge-case',
      last_activity_at: 'low',
      last_name: 'edge-case',
      name: 'critical',
      number_of_employees: 'low',
      owner_id: 'high',
      ownership: 'low',
      parent_id: 'edge-case',
      payee_number: 'edge-case',
      phone_numbers: 'high',
      read_only: 'low',
      row_type: 'edge-case',
      sales_tax_number: 'medium',
      salutation: 'edge-case',
      social_links: 'low',
      status: 'high',
      tags: 'low',
      updated_at: 'high',
      updated_by: 'edge-case',
      vat_number: 'high',
      websites: 'medium',
    },
  })
  .openapi('Company')

const CompanyNameSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The name of the company.', example: 'SpaceX', title: 'Company name' })
  .openapi('CompanyName')

const ContactSchema = z
  .strictObject({
    active: z.boolean().nullable().exactOptional().openapi({ example: true }),
    addresses: z.array(AddressSchema).exactOptional(),
    birthday: z.string().nullable().exactOptional().openapi({ example: '2000-08-12' }),
    company_id: z.string().nullable().exactOptional().openapi({ example: '23456' }),
    company_name: z.string().nullable().exactOptional().openapi({ example: '23456' }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-08-12T20:43:21.291Z', readOnly: true }),
    current_balance: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ example: 10.5, title: 'Current Balance' }),
    custom_fields: z.array(CustomFieldSchema).exactOptional(),
    department: z.string().nullable().exactOptional().openapi({ example: 'Engineering' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'Internal champion', title: 'Description' }),
    email_domain: z.string().nullable().exactOptional().openapi({ example: 'gmail.com' }),
    emails: z.array(EmailSchema).exactOptional(),
    fax: z.string().nullable().exactOptional().openapi({ example: '+12129876543' }),
    first_call_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    first_email_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    first_name: z.string().nullable().exactOptional().openapi({ example: 'Elon' }),
    gender: z
      .enum(['male', 'female', 'unisex'])
      .nullable()
      .exactOptional()
      .openapi({ example: 'female', 'x-apideck-enum-id': 'contacts.gender' }),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    image: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ deprecated: true, example: 'https://unavatar.io/elon-musk' }),
    language: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'language code according to ISO 639-1. For the United States - EN',
        example: 'EN',
      }),
    last_activity_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    last_name: z.string().nullable().exactOptional().openapi({ example: 'Musk' }),
    lead_id: z.string().nullable().exactOptional().openapi({ example: '34567' }),
    lead_source: z.string().nullable().exactOptional().openapi({ example: 'Cold Call' }),
    middle_name: z.string().nullable().exactOptional().openapi({ example: 'D.' }),
    name: z.string().min(1).openapi({ example: 'Elon Musk' }),
    owner_id: z.string().nullable().exactOptional().openapi({ example: '54321' }),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    photo_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The URL of the photo of a person.',
        example: 'https://unavatar.io/elon-musk',
        title: 'Photo URL',
      }),
    prefix: z.string().nullable().exactOptional().openapi({ example: 'Mr.' }),
    social_links: z.array(SocialLinkSchema).exactOptional(),
    status: z.string().nullable().exactOptional().openapi({ example: 'open' }),
    suffix: z.string().nullable().exactOptional().openapi({ example: 'PhD' }),
    tags: TagsSchema.exactOptional(),
    title: z.string().nullable().exactOptional().openapi({ example: 'CEO' }),
    type: z
      .enum(['customer', 'supplier', 'employee', 'personal'])
      .nullable()
      .exactOptional()
      .openapi({ example: 'personal', 'x-apideck-enum-id': 'contacts.type' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-08-12T20:43:21.291Z', readOnly: true }),
    websites: z.array(WebsiteSchema).exactOptional(),
  })
  .openapi({
    required: ['name'],
    'x-apideck-schema-id': 'Contact',
    'x-apideck-weights': {
      active: 'edge-case',
      addresses: 'high',
      birthday: 'medium',
      company_id: 'high',
      company_name: 'medium',
      created_at: 'medium',
      current_balance: 'edge-case',
      custom_fields: 'medium',
      department: 'medium',
      description: 'low',
      email_domain: 'edge-case',
      emails: 'high',
      fax: 'low',
      first_call_at: 'edge-case',
      first_email_at: 'edge-case',
      first_name: 'high',
      gender: 'medium',
      id: 'critical',
      image: 'medium',
      language: 'medium',
      last_activity_at: 'medium',
      last_name: 'high',
      lead_id: 'medium',
      lead_source: 'low',
      middle_name: 'low',
      name: 'critical',
      owner_id: 'medium',
      phone_numbers: 'high',
      photo_url: 'medium',
      prefix: 'low',
      social_links: 'low',
      status: 'edge-case',
      suffix: 'low',
      tags: 'low',
      title: 'medium',
      type: 'medium',
      updated_at: 'high',
      websites: 'medium',
    },
    'x-pii': ['name', 'first_name', 'middle_name', 'last_name', 'email'],
  })
  .openapi('Contact')

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

const CreateCustomerSupportCustomerResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'kustomer' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateCustomerSupportCustomerResponse',
  })
  .openapi('CreateCustomerSupportCustomerResponse')

const CustomerSupportCustomerSchema = z
  .strictObject({
    addresses: z.array(AddressSchema).exactOptional(),
    bank_accounts: BankAccountSchema.exactOptional(),
    company_name: CompanyNameSchema.exactOptional(),
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
    currency: CurrencySchema.exactOptional(),
    emails: z.array(EmailSchema).exactOptional(),
    first_name: FirstNameSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for an object.',
        example: '12345',
        readOnly: true,
        title: 'ID',
      }),
    individual: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ example: true, title: 'Is individual' }),
    last_name: LastNameSchema.exactOptional(),
    notes: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'Some notes about this customer', title: 'Notes' }),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    status: z
      .enum(['active', 'archived', 'gdpr-erasure-request', 'unknown'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Customer status',
        example: 'active',
        title: 'Status',
        'x-apideck-enum-id': 'customers.status',
        'x-graphql-type-name': 'CustomerStatus',
      }),
    tax_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'US123945459', title: 'Tax number' }),
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
  })
  .openapi({
    'x-apideck-schema-id': 'CustomerSupportCustomer',
    'x-apideck-weights': { id: 'critical' },
    required: [],
  })
  .openapi('CustomerSupportCustomer')

const DeleteCustomerSupportCustomerResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'kustomer' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteCustomerSupportCustomerResponse',
  })
  .openapi('DeleteCustomerSupportCustomerResponse')

const GetCustomerSupportCustomerResponseSchema = z
  .object({
    data: CustomerSupportCustomerSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'kustomer' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetCustomerSupportCustomerResponse',
    'x-graphql-type-name': 'CustomerSupportCustomer',
  })
  .openapi('GetCustomerSupportCustomerResponse')

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

const GetCustomerSupportCustomersResponseSchema = z
  .object({
    data: z.array(CustomerSupportCustomerSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'kustomer' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetCustomerSupportCustomersResponse',
    'x-graphql-type-name': 'CustomerSupportCustomerList',
  })
  .openapi('GetCustomerSupportCustomersResponse')

const LeadSchema = z
  .strictObject({
    addresses: z.array(AddressSchema).exactOptional(),
    company_id: z.string().nullable().exactOptional().openapi({ example: '2' }),
    company_name: z.string().nullable().openapi({ example: 'Spacex' }),
    contact_id: z.string().nullable().exactOptional().openapi({ example: '2' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    currency: CurrencySchema.exactOptional(),
    custom_fields: z.array(CustomFieldSchema).exactOptional(),
    description: z.string().nullable().exactOptional().openapi({ example: 'A thinker' }),
    emails: z.array(EmailSchema).exactOptional(),
    fax: z.string().nullable().exactOptional().openapi({ example: '+12129876543' }),
    first_name: z.string().nullable().exactOptional().openapi({ example: 'Elon' }),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    language: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'language code according to ISO 639-1. For the United States - EN',
        example: 'EN',
      }),
    last_name: z.string().nullable().exactOptional().openapi({ example: 'Musk' }),
    lead_source: z.string().nullable().exactOptional().openapi({ example: 'Cold Call' }),
    monetary_amount: z.number().nullable().exactOptional().openapi({ example: 75000 }),
    name: z.string().min(1).openapi({ example: 'Elon Musk' }),
    owner_id: z.string().exactOptional().openapi({ example: '54321' }),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    prefix: z.string().nullable().exactOptional().openapi({ example: 'Sir' }),
    social_links: z.array(SocialLinkSchema).exactOptional(),
    status: z.string().nullable().exactOptional().openapi({ example: 'New' }),
    tags: TagsSchema.exactOptional(),
    title: z.string().nullable().exactOptional().openapi({ example: 'CEO' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    websites: z.array(WebsiteSchema).exactOptional(),
  })
  .openapi({
    required: ['name', 'company_name'],
    'x-apideck-schema-id': 'Lead',
    'x-apideck-weights': {
      addresses: 'high',
      company_id: 'high',
      company_name: 'high',
      contact_id: 'low',
      created_at: 'medium',
      currency: 'low',
      custom_fields: 'medium',
      description: 'low',
      emails: 'high',
      fax: 'low',
      first_name: 'high',
      id: 'critical',
      language: 'medium',
      last_name: 'high',
      lead_source: 'low',
      monetary_amount: 'low',
      name: 'critical',
      owner_id: 'high',
      phone_numbers: 'high',
      prefix: 'low',
      social_links: 'low',
      status: 'high',
      tags: 'low',
      title: 'high',
      updated_at: 'medium',
      websites: 'medium',
    },
    'x-pii': ['name', 'email', 'first_name', 'last_name'],
  })
  .openapi('Lead')

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

const OpportunitySchema = z
  .strictObject({
    close_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The actual closing date for the opportunity. If close_date is null, the opportunity is not closed yet.',
        example: '2020-10-30',
      }),
    company_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the company associated with the opportunity.',
        example: '12345',
      }),
    company_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The name of the company associated with the opportunity.',
        example: 'Copper',
      }),
    contact_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the contact associated with the opportunity.',
        example: '12345',
      }),
    contact_ids: z
      .array(z.string().openapi({ example: '12345' }))
      .exactOptional()
      .openapi({
        description:
          'An array of unique identifiers of all contacts associated with the opportunity.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the opportunity was created.',
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
      }),
    created_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the user who created the opportunity.',
        example: '12345',
        readOnly: true,
      }),
    currency: CurrencySchema.exactOptional(),
    custom_fields: z.array(CustomFieldSchema).exactOptional(),
    date_last_contacted: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time when the opportunity was last contacted.',
        example: '2020-09-30T00:00:00.000Z',
        readOnly: true,
      }),
    date_lead_created: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time when the lead associated with the opportunity was created.',
        example: '2020-09-30T00:00:00.000Z',
        readOnly: true,
      }),
    date_stage_changed: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time when the stage of the opportunity was last changed.',
        example: '2020-09-30T00:00:00.000Z',
        readOnly: true,
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the opportunity has been deleted.',
        example: false,
        readOnly: true,
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A description of the opportunity.',
        example:
          'Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.',
      }),
    expected_revenue: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The expected revenue from the opportunity',
        example: 75000,
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for the opportunity.',
        example: '12345',
        readOnly: true,
      }),
    interaction_count: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The number of interactions with the opportunity.',
        example: 0,
        readOnly: true,
      }),
    last_activity_at: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time of the last activity associated with the opportunity.',
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
      }),
    lead_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the lead associated with the opportunity.',
        example: '12345',
      }),
    lead_source: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The source of the lead associated with the opportunity.',
        example: 'Website',
      }),
    loss_reason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The reason why the opportunity was lost.', example: 'No budget' }),
    loss_reason_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the reason why the opportunity was lost.',
        example: '12345',
      }),
    monetary_amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The monetary value associated with the opportunity',
        example: 75000,
      }),
    owner_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the user who owns the opportunity.',
        example: '12345',
      }),
    pipeline_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the pipeline associated with the opportunity',
        example: '12345',
      }),
    pipeline_stage_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the stage in the pipeline associated with the opportunity.',
        example: '12345',
      }),
    primary_contact_id: z
      .string()
      .nullable()
      .openapi({
        description:
          'The unique identifier of the primary contact associated with the opportunity.',
        example: '12345',
      }),
    priority: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The priority level of the opportunity.', example: 'None' }),
    source_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the source of the opportunity.',
        example: '12345',
      }),
    stage_last_changed_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date and time when the stage of the opportunity was last changed.',
        example: '2020-09-30T07:43:32.000Z',
      }),
    status: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The current status of the opportunity.', example: 'Open' }),
    status_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the current status of the opportunity.',
        example: '12345',
      }),
    tags: TagsSchema.exactOptional(),
    title: z
      .string()
      .min(1)
      .openapi({ description: 'The title or name of the opportunity.', example: 'New Rocket' }),
    type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The type of the opportunity',
        example: 'Existing Customer - Upgrade',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the opportunity was last updated.',
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
      }),
    updated_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the user who last updated the opportunity.',
        example: '12345',
        readOnly: true,
      }),
    win_probability: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The probability of winning the opportunity, expressed as a percentage.',
        example: 40,
      }),
    won_reason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The reason why the opportunity was won.', example: 'Best pitch' }),
    won_reason_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the reason why the opportunity was won.',
        example: '12345',
      }),
  })
  .openapi({
    required: ['title', 'primary_contact_id'],
    'x-apideck-schema-id': 'Opportunity',
    'x-apideck-weights': {
      close_date: 'medium',
      company_id: 'high',
      company_name: 'medium',
      contact_id: 'medium',
      created_at: 'medium',
      created_by: 'edge-case',
      currency: 'high',
      custom_fields: 'medium',
      date_last_contacted: 'medium',
      date_lead_created: 'edge-case',
      date_stage_changed: 'edge-case',
      deleted: 'low',
      description: 'medium',
      expected_revenue: 'medium',
      id: 'critical',
      interaction_count: 'low',
      last_activity_at: 'medium',
      lead_id: 'medium',
      lead_source: 'edge-case',
      loss_reason: 'edge-case',
      loss_reason_id: 'edge-case',
      monetary_amount: 'high',
      owner_id: 'high',
      pipeline_id: 'edge-case',
      pipeline_stage_id: 'edge-case',
      primary_contact_id: 'critical',
      priority: 'medium',
      source_id: 'medium',
      stage_last_changed_at: 'edge-case',
      status: 'high',
      status_id: 'edge-case',
      tags: 'low',
      title: 'critical',
      type: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
      win_probability: 'high',
      won_reason: 'edge-case',
      won_reason_id: 'edge-case',
    },
  })
  .openapi('Opportunity')

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

const UpdateCustomerSupportCustomerResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'kustomer' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateCustomerSupportCustomerResponse',
  })
  .openapi('UpdateCustomerSupportCustomerResponse')

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const CreateCustomerSupportCustomerResponseResponse = {
  description: 'CustomerSupportCustomers',
  content: { 'application/json': { schema: CreateCustomerSupportCustomerResponseSchema } },
}

const DeleteCustomerSupportCustomerResponseResponse = {
  description: 'CustomerSupportCustomers',
  content: { 'application/json': { schema: DeleteCustomerSupportCustomerResponseSchema } },
}

const GetCustomerSupportCustomerResponseResponse = {
  description: 'CustomerSupportCustomers',
  content: { 'application/json': { schema: GetCustomerSupportCustomerResponseSchema } },
}

const GetCustomerSupportCustomersResponseResponse = {
  description: 'CustomerSupportCustomers',
  content: { 'application/json': { schema: GetCustomerSupportCustomersResponseSchema } },
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

const UpdateCustomerSupportCustomerResponseResponse = {
  description: 'CustomerSupportCustomers',
  content: { 'application/json': { schema: UpdateCustomerSupportCustomerResponseSchema } },
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

export const getCustomerSupportCustomersRoute = createRoute({
  method: 'get',
  path: '/customer-support/customers',
  tags: ['Customers'],
  summary: 'List Customer Support Customers',
  description: 'List Customer Support Customers',
  operationId: 'customersAll',
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
    200: GetCustomerSupportCustomersResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postCustomerSupportCustomersRoute = createRoute({
  method: 'post',
  path: '/customer-support/customers',
  tags: ['Customers'],
  summary: 'Create Customer Support Customer',
  description: 'Create Customer Support Customer',
  operationId: 'customersAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: CustomerSupportCustomerSchema } },
      required: true,
    },
  },
  responses: {
    201: CreateCustomerSupportCustomerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCustomerSupportCustomersIdRoute = createRoute({
  method: 'get',
  path: '/customer-support/customers/{id}',
  tags: ['Customers'],
  summary: 'Get Customer Support Customer',
  description: 'Get Customer Support Customer',
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
    200: GetCustomerSupportCustomerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCustomerSupportCustomersIdRoute = createRoute({
  method: 'delete',
  path: '/customer-support/customers/{id}',
  tags: ['Customers'],
  summary: 'Delete Customer Support Customer',
  description: 'Delete Customer Support Customer',
  operationId: 'customersDelete',
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
    200: DeleteCustomerSupportCustomerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchCustomerSupportCustomersIdRoute = createRoute({
  method: 'patch',
  path: '/customer-support/customers/{id}',
  tags: ['Customers'],
  summary: 'Update Customer Support Customer',
  description: 'Update Customer Support Customer',
  operationId: 'customersUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: {
      content: { 'application/json': { schema: CustomerSupportCustomerSchema } },
      required: true,
    },
  },
  responses: {
    200: UpdateCustomerSupportCustomerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

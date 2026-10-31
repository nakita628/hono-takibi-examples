import { createRoute, z } from '@hono/zod-openapi'

type ProfitAndLossRecordType = {
  id?: string | null
  title?: string | null
  type: string
  value?: number | null
}

const ProfitAndLossSectionSchema: z.ZodType<ProfitAndLossSectionType> = z
  .lazy(() =>
    z
      .object({
        id: z.string().nullable().exactOptional().openapi({ example: '123abc' }),
        records: ProfitAndLossRecordsSchema.exactOptional(),
        title: z.string().nullable().exactOptional().openapi({ example: 'Income' }),
        total: z.number().nullable().exactOptional().openapi({ example: 23992.34 }),
        type: z.string().openapi({ example: 'Section' }),
      })
      .openapi({
        example: { total: 200000 },
        required: ['type'],
        'x-apideck-schema-id': 'ProfitAndLossSection',
        'x-apideck-weights': {
          id: 'medium',
          records: 'medium',
          title: 'medium',
          total: 'medium',
          type: 'critical',
        },
        'x-graphql-type-name': 'ProfitAndLossSection',
      }),
  )
  .openapi('ProfitAndLossSection')

const ProfitAndLossRecordSchema: z.ZodType<ProfitAndLossRecordType> = z
  .object({
    id: z.string().nullable().exactOptional().openapi({ example: '123abc' }),
    title: z.string().nullable().exactOptional().openapi({ example: 'Income' }),
    type: z.string().openapi({ example: 'Record' }),
    value: z.number().nullable().exactOptional().openapi({ example: 23992.34 }),
  })
  .openapi({
    example: { type: 'Record' },
    required: ['type'],
    'x-apideck-schema-id': 'ProfitAndLossRecord',
    'x-apideck-weights': { type: 'critical' },
    'x-graphql-type-name': 'ProfitAndLossRecord',
  })
  .openapi('ProfitAndLossRecord')

type ProfitAndLossRecordsType =
  | (z.infer<typeof ProfitAndLossSectionSchema> | z.infer<typeof ProfitAndLossRecordSchema>)[]
  | null

const ProfitAndLossRecordsSchema: z.ZodType<ProfitAndLossRecordsType> = z
  .lazy(() =>
    z
      .array(z.union([ProfitAndLossSectionSchema, ProfitAndLossRecordSchema]))
      .nullable()
      .openapi({
        'x-apideck-schema-id': 'ProfitAndLossRecords',
        'x-graphql-type-name': 'ProfitAndLossRecords',
      }),
  )
  .openapi('ProfitAndLossRecords')

type ProfitAndLossSectionType = {
  id?: string | null
  records?: z.infer<typeof ProfitAndLossRecordsSchema>
  title?: string | null
  total?: number | null
  type: string
}

const LinkedLedgerAccountSchema = z
  .object({
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The code assigned to the account.', example: '453', title: 'Code' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the account.',
        example: '123456',
        title: 'Account ID',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The name of the account.',
        example: 'Bank account',
        readOnly: true,
        title: 'Account Name',
      }),
    nominal_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The nominal code of the account.',
        example: 'N091',
        title: 'Nominal Code',
      }),
  })
  .nullable()
  .openapi({
    'x-apideck-schema-id': 'LinkedLedgerAccount',
    'x-apideck-weights': { code: 'medium', id: 'medium', name: 'medium', nominal_code: 'medium' },
    'x-graphql-type-name': 'LinkedLedgerAccount',
    required: [],
  })
  .openapi('LinkedLedgerAccount')

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

const CompanyNameSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The name of the company.', example: 'SpaceX', title: 'Company name' })
  .openapi('CompanyName')

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

const DownstreamIdSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The third-party API ID of original entity',
    example: '12345',
    readOnly: true,
  })
  .openapi('DownstreamId')

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

const IdSchema = z
  .string()
  .openapi({
    description: 'A unique identifier for an object.',
    example: '12345',
    readOnly: true,
    title: 'ID',
  })
  .openapi('Id')

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

const LinkedParentCustomerSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The parent ID of the customer this entity is linked to.',
        example: '12345',
        title: 'Customer ID',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the parent customer.',
        example: 'Windsurf Shop',
        title: 'Name',
      }),
  })
  .nullable()
  .openapi({
    description: 'The parent customer this entity is linked to.',
    required: ['id'],
    title: 'LinkedParentCustomer',
    'x-apideck-schema-id': 'LinkedParentCustomer',
    'x-apideck-weights': { id: 'critical' },
    'x-graphql-type-name': 'AccountingLinkedParentCustomer',
  })
  .openapi('LinkedParentCustomer')

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

const SuffixSchema = z
  .string()
  .nullable()
  .openapi({ example: 'Jr.', title: 'Suffix' })
  .openapi('Suffix')

const TaxNumberSchema = z
  .string()
  .nullable()
  .openapi({ example: 'US123945459', title: 'Tax number' })
  .openapi('TaxNumber')

const LinkedTaxRateSchema = z
  .object({
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Tax rate code',
        example: 'N-T',
        readOnly: true,
        title: 'Tax rate code',
      }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The ID of the object.',
        example: '123456',
        title: 'The ID of the object.',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Name of the tax rate',
        example: 'GST on Purchases',
        readOnly: true,
        title: 'Name',
      }),
    rate: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Rate of the tax rate', example: 10, readOnly: true, title: 'Rate' }),
  })
  .openapi({
    'x-apideck-schema-id': 'LinkedTaxRate',
    'x-apideck-weights': { code: 'medium', id: 'medium', name: 'medium' },
    'x-graphql-type-name': 'LinkedTaxRate',
    required: [],
  })
  .openapi('LinkedTaxRate')

const TitleSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The job title of the person.', example: 'CEO', title: 'Job title' })
  .openapi('Title')

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

const AccountingCustomerSchema = z
  .strictObject({
    account: LinkedLedgerAccountSchema.exactOptional(),
    addresses: z.array(AddressSchema).exactOptional(),
    bank_accounts: z.array(BankAccountSchema).exactOptional(),
    company_name: CompanyNameSchema.exactOptional(),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    display_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display ID', example: 'EMP00101', title: 'Display ID' }),
    display_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name', example: 'Windsurf Shop', title: 'Display Name' }),
    downstream_id: DownstreamIdSchema.exactOptional(),
    emails: z.array(EmailSchema).exactOptional(),
    first_name: FirstNameSchema.exactOptional(),
    id: IdSchema,
    individual: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Is this an individual or business customer',
        example: true,
        title: 'Is individual',
      }),
    last_name: LastNameSchema.exactOptional(),
    middle_name: MiddleNameSchema.exactOptional(),
    notes: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Some notes about this customer',
        example: 'Some notes about this customer',
        title: 'Notes',
      }),
    parent: LinkedParentCustomerSchema.exactOptional(),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    project: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'If true, indicates this is a Project.',
        example: false,
        title: 'Is project',
      }),
    row_version: RowVersionSchema.exactOptional(),
    status: z
      .enum(['active', 'inactive', 'archived', 'gdpr-erasure-request', 'unknown'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Customer status',
        example: 'active',
        title: 'Status',
        'x-apideck-enum-id': 'customers.status',
        'x-graphql-type-name': 'CustomerStatus',
      }),
    suffix: SuffixSchema.exactOptional(),
    tax_number: TaxNumberSchema.exactOptional(),
    tax_rate: LinkedTaxRateSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
    websites: z.array(WebsiteSchema).exactOptional(),
  })
  .openapi({
    required: ['id'],
    'x-apideck-schema-id': 'Customer',
    'x-apideck-strict-any-of': [
      { required: ['first_name', 'last_name'] },
      { required: ['company_name'] },
    ],
    'x-apideck-strict-required': ['emails', 'addresses', 'phone_numbers', 'status', 'updated_at'],
    'x-apideck-weights': {
      account: 'medium',
      addresses: 'high',
      bank_accounts: 'high',
      company_name: 'high',
      created_at: 'medium',
      created_by: 'edge-case',
      currency: 'medium',
      display_id: 'edge-case',
      display_name: 'edge-case',
      downstream_id: 'edge-case',
      emails: 'high',
      first_name: 'high',
      id: 'critical',
      individual: 'medium',
      last_name: 'high',
      middle_name: 'low',
      notes: 'low',
      phone_numbers: 'high',
      row_version: 'edge-case',
      status: 'high',
      suffix: 'low',
      tax_number: 'medium',
      tax_rate: 'medium',
      title: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
      websites: 'medium',
    },
    'x-graphql-type-name': 'Customer',
  })
  .openapi('AccountingCustomer')

const AccountingEventTypeSchema = z
  .enum([
    '*',
    'accounting.customer.created',
    'accounting.customer.updated',
    'accounting.customer.deleted',
    'accounting.invoice.created',
    'accounting.invoice.updated',
    'accounting.invoice.deleted',
    'accounting.invoice_item.created',
    'accounting.invoice_item.updated',
    'accounting.invoice_item.deleted',
    'accounting.ledger_account.created',
    'accounting.ledger_account.updated',
    'accounting.ledger_account.deleted',
    'accounting.tax_rate.created',
    'accounting.tax_rate.updated',
    'accounting.tax_rate.deleted',
    'accounting.bill.created',
    'accounting.bill.updated',
    'accounting.bill.deleted',
    'accounting.payment.created',
    'accounting.payment.updated',
    'accounting.payment.deleted',
    'accounting.supplier.created',
    'accounting.supplier.updated',
    'accounting.supplier.deleted',
  ])
  .openapi({ 'x-apideck-enum-id': 'accounting.events' })
  .openapi('AccountingEventType')

const AccountingWebhookEventSchema = z
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
    z.object({ event_type: AccountingEventTypeSchema.exactOptional() }).openapi({ required: [] }),
  )
  .openapi({ 'x-sdk-exclude': true })
  .openapi('AccountingWebhookEvent')

const ActiveSchema = z
  .boolean()
  .nullable()
  .openapi({ example: true, title: 'Is active' })
  .openapi('Active')

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

const BalanceSheetSchema = z
  .strictObject({
    assets: z
      .object({
        current_assets: z
          .object({
            accounts: z.array(
              z
                .object({
                  id: IdSchema.exactOptional(),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The name of the current asset account',
                      example: 'Accounts Receivable (A/R)',
                      title: 'Account Name',
                    }),
                  value: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'The value of the current asset',
                      example: 10000,
                      title: 'Value',
                    }),
                })
                .openapi({ 'x-graphql-type-name': 'CurrentAssetAccountsList', required: [] }),
            ),
            total: z
              .number()
              .openapi({
                description: 'Total current assets',
                example: 100000,
                title: 'Total Current Assets',
              }),
          })
          .openapi({
            required: ['total', 'accounts'],
            'x-apideck-weights': { accounts: 'medium', total: 'medium' },
          }),
        fixed_assets: z
          .object({
            accounts: z.array(
              z
                .object({
                  id: IdSchema.exactOptional(),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The name of the fixed asset account',
                      example: 'Accounts Receivable (A/R)',
                      title: 'Account Name',
                    }),
                  value: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'The value of the fixed asset',
                      example: 10000,
                      title: 'Value',
                    }),
                })
                .openapi({
                  'x-apideck-weights': { id: 'medium', name: 'medium', value: 'medium' },
                  'x-graphql-type-name': 'FixedAssetAccountsList',
                  required: [],
                }),
            ),
            total: z
              .number()
              .openapi({
                description: 'Total fixed assets',
                example: 100000,
                title: 'Total Fixed Assets',
              }),
          })
          .openapi({
            required: ['total', 'accounts'],
            'x-apideck-weights': { accounts: 'medium', total: 'medium' },
          }),
        total: z
          .number()
          .openapi({ description: 'Total assets', example: 100000, title: 'Total Assets' }),
      })
      .openapi({
        example: {
          current_assets: {
            accounts: [
              { id: '1', name: 'Accounts Receivable (A/R)', value: 10000 },
              { id: '2', name: 'Accounts Payable (A/P)', value: 10000 },
            ],
            total: 100000,
          },
          fixed_assets: {
            accounts: [
              { id: '1', name: 'Accounts Receivable (A/R)', value: 10000 },
              { id: '2', name: 'Accounts Payable (A/P)', value: 10000 },
            ],
            total: 100000,
          },
          total: 200000,
        },
        required: ['total', 'current_assets', 'fixed_assets'],
        'x-apideck-weights': { current_assets: 'medium', fixed_assets: 'medium', total: 'medium' },
      }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    end_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({
        description: 'The start date of the report',
        example: '2017-01-01',
        title: 'Start Date',
      }),
    equity: z
      .object({
        items: z.array(
          z
            .object({
              id: IdSchema.exactOptional(),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The type of the equity',
                  example: 'Retained Earnings',
                  title: 'Account Name',
                }),
              value: z
                .number()
                .exactOptional()
                .openapi({ description: 'The equity amount', example: 10000, title: 'Value' }),
            })
            .openapi({
              'x-apideck-weights': { id: 'medium', name: 'medium', value: 'medium' },
              'x-graphql-type-name': 'EquityItemsList',
              required: [],
            }),
        ),
        total: z
          .number()
          .openapi({ description: 'Total equity', example: 100000, title: 'Total Equity' }),
      })
      .openapi({
        example: { total: 200000 },
        required: ['total', 'items'],
        'x-apideck-weights': { items: 'medium', total: 'medium' },
      }),
    id: IdSchema.exactOptional(),
    liabilities: z
      .object({
        accounts: z.array(
          z
            .object({
              id: IdSchema.exactOptional(),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The name of the liability account',
                  example: 'Accounts Payable (A/P)',
                  title: 'Account Name',
                }),
              value: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'The value of the liability',
                  example: 10000,
                  title: 'Value',
                }),
            })
            .openapi({
              'x-apideck-weights': { id: 'medium', name: 'medium', value: 'medium' },
              'x-graphql-type-name': 'LiabilityAccountsList',
              required: [],
            }),
        ),
        total: z
          .number()
          .openapi({
            description: 'Total liabilities',
            example: 100000,
            title: 'Total Liabilities',
          }),
      })
      .openapi({
        example: {
          accounts: [{ id: '1', name: 'Accounts Payable (A/P)', value: 10000 }],
          total: 200000,
        },
        required: ['total', 'accounts'],
        'x-apideck-weights': { accounts: 'medium', total: 'medium' },
      }),
    report_name: z
      .string()
      .openapi({
        description: 'The name of the report',
        example: 'BalanceSheet',
        title: 'Report Name',
      }),
    start_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .openapi({
        description: 'The start date of the report',
        example: '2017-01-01',
        title: 'Start Date',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    required: ['report_name', 'start_date', 'assets', 'liabilities', 'equity'],
    'x-apideck-schema-id': 'BalanceSheet',
    'x-apideck-weights': {
      assets: 'critical',
      created_at: 'edge-case',
      created_by: 'edge-case',
      equity: 'critical',
      id: 'medium',
      liabilities: 'critical',
      report_name: 'medium',
      start_date: 'critical',
      updated_at: 'low',
      updated_by: 'edge-case',
    },
  })
  .openapi('BalanceSheet')

const BalanceSheetFilterSchema = z
  .strictObject({
    end_date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Filter by end date. If end date is given, start date is required.',
        example: '2021-12-31',
        title: 'End date',
      }),
    start_date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Filter by start date. If start date is given, end date is required.',
        example: '2021-01-01',
        title: 'Start date',
      }),
  })
  .openapi({
    example: { end_date: '2021-12-31', start_date: '2021-01-01' },
    'x-apideck-schema-id': 'BalanceSheetFilter',
    'x-graphql-type-name': 'BalanceSheetFilter',
    required: [],
  })
  .openapi('BalanceSheetFilter')

const CurrencyRateSchema = z
  .number()
  .nullable()
  .openapi({
    description: 'Currency Exchange Rate at the time entity was recorded/generated.',
    example: 0.69,
    title: 'Currency Exchange Rate',
  })
  .openapi('CurrencyRate')

const LinkedInvoiceItemSchema = z
  .object({
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'User defined item code',
        example: '120-C',
        readOnly: true,
        title: 'Item code',
      }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ID of the linked item. A reference to the [invoice item](https://developers.apideck.com/apis/accounting/reference#tag/Invoice-Items) that was used to create this line item',
        example: '12344',
        title: 'Item ID',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'User defined item name',
        example: 'Model Y',
        readOnly: true,
        title: 'Item name',
      }),
  })
  .openapi({
    'x-apideck-schema-id': 'LinkedInvoiceItem',
    'x-apideck-weights': { code: 'medium', id: 'medium', name: 'medium' },
    'x-graphql-type-name': 'LinkedInvoiceItem',
    required: [],
  })
  .openapi('LinkedInvoiceItem')

const QuantitySchema = z
  .number()
  .nullable()
  .openapi({ example: 1, title: 'Quantity' })
  .openapi('Quantity')

const UnitOfMeasureSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'Description of the unit type the item is sold as, ie: kg, hour.',
    example: 'pc.',
    title: 'Unit of measure',
  })
  .openapi('UnitOfMeasure')

const UnitPriceSchema = z
  .number()
  .nullable()
  .openapi({ example: 27500.5, title: 'Unit price' })
  .openapi('UnitPrice')

const BillLineItemSchema = z
  .strictObject({
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'User defined item code', example: '120-C', title: 'Item code' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    department_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Department id', example: '1234', title: 'Department id' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'User defined description',
        example:
          'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        title: 'Description',
      }),
    discount_percentage: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Discount percentage', example: 0.01, title: 'Discount amount' }),
    id: IdSchema.exactOptional(),
    item: LinkedInvoiceItemSchema.exactOptional(),
    ledger_account: LinkedLedgerAccountSchema.exactOptional(),
    line_number: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Line number in the invoice', example: 1, title: 'Line number' }),
    location_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Location id', example: '1234', title: 'Location id' }),
    quantity: QuantitySchema.exactOptional(),
    row_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Row ID', example: '12345', title: 'Row ID' }),
    row_version: RowVersionSchema.exactOptional(),
    tax_amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Tax amount', example: 27500, title: 'Tax amount' }),
    tax_rate: LinkedTaxRateSchema.exactOptional(),
    total_amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Total amount of the line item',
        example: 27500,
        title: 'Total amount',
      }),
    type: z
      .enum(['expense_item', 'expense_account'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Bill Line Item type',
        example: 'expense_account',
        title: 'Type',
        'x-apideck-enum-id': 'bills.line_items.type',
        'x-graphql-type-name': 'BillLineItemType',
      }),
    unit_of_measure: UnitOfMeasureSchema.exactOptional(),
    unit_price: UnitPriceSchema.exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'BillLineItem',
    'x-apideck-weights': {
      code: 'high',
      created_at: 'edge-case',
      created_by: 'edge-case',
      department_id: 'low',
      description: 'high',
      discount_percentage: 'edge-case',
      id: 'critical',
      item: 'high',
      ledger_account: 'low',
      line_number: 'edge-case',
      location_id: 'low',
      quantity: 'medium',
      row_id: 'edge-case',
      row_version: 'edge-case',
      tax_amount: 'low',
      tax_rate: 'low',
      total_amount: 'critical',
      type: 'high',
      unit_of_measure: 'edge-case',
      unit_price: 'medium',
      updated_at: 'high',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('BillLineItem')

const LinkedSupplierSchema = z
  .object({
    address: AddressSchema.exactOptional(),
    company_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The company name of the supplier.',
        example: 'The boring company',
        readOnly: true,
        title: 'Company Name',
      }),
    display_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The display name of the supplier.',
        example: 'Windsurf Shop',
        title: 'Display Name',
      }),
    id: z
      .string()
      .openapi({
        description: 'The ID of the supplier this entity is linked to.',
        example: '12345',
        title: 'Supplier ID',
      }),
  })
  .nullable()
  .openapi({
    description: 'The supplier this entity is linked to.',
    required: ['id'],
    title: 'LinkedSupplier',
    'x-apideck-schema-id': 'LinkedSupplier',
    'x-apideck-weights': {
      address: 'low',
      company_name: 'edge-case',
      display_name: 'high',
      id: 'medium',
    },
    'x-graphql-type-name': 'AccountingLinkedSupplier',
  })
  .openapi('LinkedSupplier')

const TaxInclusiveSchema = z
  .boolean()
  .nullable()
  .openapi({ description: 'Amounts are including tax', example: true, title: 'Tax inclusive' })
  .openapi('TaxInclusive')

const BillSchema = z
  .strictObject({
    balance: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Balance of bill due.', example: 27500, title: 'Balance' }),
    bill_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'Date bill was issued - YYYY-MM-DD.',
        example: '2020-09-30',
        title: 'Bill date',
      }),
    bill_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '10001', title: 'Bill number' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    currency_rate: CurrencyRateSchema.exactOptional(),
    deposit: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Amount of deposit made to this bill.',
        example: 0,
        title: 'Deposit',
      }),
    downstream_id: DownstreamIdSchema.exactOptional(),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The due date is the date on which a payment is scheduled to be received by the supplier - YYYY-MM-DD.',
        example: '2020-10-30',
        title: 'Due date',
      }),
    id: IdSchema.exactOptional(),
    ledger_account: LinkedLedgerAccountSchema.exactOptional(),
    line_items: z.array(BillLineItemSchema).exactOptional(),
    notes: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'Some notes about this bill.', title: 'Notes' }),
    paid_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The paid date is the date on which a payment was sent to the supplier - YYYY-MM-DD.',
        example: '2020-10-30',
        title: 'Paid date',
      }),
    po_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.',
        example: '90000117',
        title: 'Purchase Order number',
      }),
    reference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional bill reference.',
        example: '123456',
        title: 'Bill reference',
      }),
    row_version: RowVersionSchema.exactOptional(),
    status: z
      .enum([
        'draft',
        'submitted',
        'authorised',
        'partially_paid',
        'paid',
        'void',
        'credit',
        'deleted',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Invoice status',
        example: 'draft',
        title: 'Status',
        'x-apideck-enum-id': 'invoices.status',
      }),
    sub_total: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Sub-total amount, normally before tax.',
        example: 27500,
        title: 'Sub-total amount',
      }),
    supplier: LinkedSupplierSchema.exactOptional(),
    tax_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Applicable tax id/code override if tax is not supplied on a line item basis.',
        example: '1234',
        title: 'Tax Code',
      }),
    tax_inclusive: TaxInclusiveSchema.exactOptional(),
    terms: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Terms of payment.', example: 'Net 30 days', title: 'Terms' }),
    total: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Total amount of bill, including tax.',
        example: 27500,
        title: 'Total amount',
      }),
    total_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Total tax amount applied to this bill.',
        example: 2500,
        title: 'Total tax amount',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'Bill',
    'x-apideck-weights': {
      balance: 'high',
      bill_date: 'critical',
      bill_number: 'high',
      created_at: 'edge-case',
      created_by: 'low',
      currency: 'medium',
      currency_rate: 'low',
      deposit: 'low',
      downstream_id: 'low',
      due_date: 'critical',
      id: 'critical',
      ledger_account: 'low',
      line_items: 'critical',
      notes: 'low',
      paid_date: 'high',
      po_number: 'low',
      reference: 'low',
      row_version: 'edge-case',
      status: 'critical',
      sub_total: 'high',
      supplier: 'high',
      tax_code: 'medium',
      tax_inclusive: 'low',
      terms: 'low',
      total: 'critical',
      total_tax: 'high',
      updated_at: 'high',
      updated_by: 'low',
    },
    required: [],
  })
  .openapi('Bill')

const SortDirectionSchema = z
  .enum(['asc', 'desc'])
  .default('asc')
  .openapi({
    description: 'The direction in which to sort the results',
    'x-apideck-enum-id': 'sort_direction',
    'x-apideck-schema-id': 'SortDirection',
    'x-graphql-type-name': 'SortDirection',
  })
  .openapi('SortDirection')

const BillsSortSchema = z
  .strictObject({
    by: z
      .literal('updated_at')
      .exactOptional()
      .openapi({
        description: 'The field on which to sort the Bills',
        example: 'updated_at',
        'x-apideck-enum-id': 'bills.sort_by',
        'x-graphql-type-name': 'BillsSortBy',
      }),
    direction: SortDirectionSchema.exactOptional(),
  })
  .openapi({
    example: { by: 'updated_at', direction: 'desc' },
    'x-apideck-schema-id': 'BillsSort',
    'x-graphql-type-name': 'BillsSort',
    required: [],
  })
  .openapi('BillsSort')

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

const LanguageSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'language code according to ISO 639-1. For the United States - EN',
    example: 'EN',
  })
  .openapi('Language')

const SalesTaxNumberSchema = z
  .string()
  .nullable()
  .openapi({ example: '111.222.333', title: 'Sales Tax Number' })
  .openapi('SalesTaxNumber')

const CompanyInfoSchema = z
  .strictObject({
    addresses: z.array(AddressSchema).exactOptional(),
    automated_sales_tax: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether sales tax is calculated automatically for the company',
        title: 'Automated sales tax',
      }),
    company_name: CompanyNameSchema.exactOptional(),
    company_start_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'Date when company file was created',
        example: '2015-06-05',
        title: 'Date when company file was created',
      }),
    country: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'country code according to ISO 3166-1 alpha-2.', example: 'US' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    default_sales_tax: LinkedTaxRateSchema.exactOptional(),
    emails: z.array(EmailSchema).exactOptional(),
    fiscal_year_start_month: z
      .enum([
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ])
      .exactOptional()
      .openapi({
        description: 'The start month of fiscal year.',
        example: 'January',
        title: 'The start month of fiscal year.',
        'x-apideck-enum-id': 'company-info.fiscal_year_start_month',
      }),
    id: IdSchema.exactOptional(),
    language: LanguageSchema.exactOptional(),
    legal_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The legal name of the company',
        example: 'SpaceX Inc.',
        title: 'Legal name',
      }),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    row_version: RowVersionSchema.exactOptional(),
    sales_tax_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether sales tax is enabled for the company',
        title: 'Sales tax enabled',
      }),
    sales_tax_number: SalesTaxNumberSchema.exactOptional(),
    status: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({
        description: 'Based on the status some functionality is enabled or disabled.',
        example: 'active',
        title: 'Company status',
        'x-apideck-enum-id': 'company-info.status',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'CompanyInfo',
    'x-apideck-weights': {
      addresses: 'medium',
      automated_sales_tax: 'edge-case',
      company_name: 'critical',
      company_start_date: 'medium',
      created_at: 'low',
      created_by: 'edge-case',
      currency: 'medium',
      default_sales_tax: 'edge-case',
      emails: 'medium',
      fiscal_year_start_month: 'medium',
      id: 'medium',
      language: 'low',
      legal_name: 'medium',
      phone_numbers: 'medium',
      row_version: 'edge-case',
      sales_tax_enabled: 'edge-case',
      sales_tax_number: 'medium',
      status: 'critical',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('CompanyInfo')

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

const CreateBillResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'bills' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateBillResponse',
  })
  .openapi('CreateBillResponse')

const CreateCreditNoteResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'credit-notes' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateCreditNoteResponse',
  })
  .openapi('CreateCreditNoteResponse')

const CreateCustomerResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateCustomerResponse',
  })
  .openapi('CreateCustomerResponse')

const CreateInvoiceItemResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'invoice-items' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateInvoiceItemResponse',
  })
  .openapi('CreateInvoiceItemResponse')

const InvoiceResponseSchema = z
  .object({ downstream_id: DownstreamIdSchema.exactOptional(), id: IdSchema.exactOptional() })
  .openapi({ 'x-apideck-schema-id': 'InvoiceResponse', required: [] })
  .openapi('InvoiceResponse')

const CreateInvoiceResponseSchema = z
  .object({
    data: InvoiceResponseSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'invoices' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateInvoiceResponse',
  })
  .openapi('CreateInvoiceResponse')

const CreateJournalEntryResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'journal-entries' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'quickbooks' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'] })
  .openapi('CreateJournalEntryResponse')

const CreateLedgerAccountResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ledger-accounts' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateLedgerAccountResponse',
  })
  .openapi('CreateLedgerAccountResponse')

const CreatePaymentResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'payments' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreatePaymentResponse',
  })
  .openapi('CreatePaymentResponse')

const CreateSupplierResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'payments' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateSupplierResponse',
  })
  .openapi('CreateSupplierResponse')

const CreateTaxRateResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'tax-rates' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateTaxRateResponse',
  })
  .openapi('CreateTaxRateResponse')

const LinkedCustomerSchema = z
  .object({
    company_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The company name of the customer.',
        example: 'The boring company',
        readOnly: true,
        title: 'Company Name',
      }),
    display_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The display ID of the customer.',
        example: 'CUST00101',
        readOnly: true,
        title: 'Display ID',
      }),
    display_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The display name of the customer.',
        example: 'Windsurf Shop',
        title: 'Display Name',
      }),
    id: z
      .string()
      .openapi({
        description: 'The ID of the customer this entity is linked to.',
        example: '12345',
        title: 'Customer ID',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The name of the customer. Deprecated, use display_name instead.',
        example: 'Windsurf Shop',
        title: 'Name',
      }),
  })
  .nullable()
  .openapi({
    description: 'The customer this entity is linked to.',
    required: ['id'],
    title: 'LinkedCustomer',
    'x-apideck-schema-id': 'LinkedCustomer',
    'x-apideck-weights': {
      company_name: 'medium',
      display_id: 'medium',
      display_name: 'medium',
      id: 'medium',
    },
    'x-graphql-type-name': 'AccountingLinkedCustomer',
  })
  .openapi('LinkedCustomer')

const InvoiceLineItemSchema = z
  .strictObject({
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'User defined item code', example: '120-C', title: 'Item code' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    department_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Department id', example: '1234', title: 'Department id' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'User defined description',
        example:
          'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        title: 'Description',
      }),
    discount_amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Discount amount applied to the line item when supported downstream.',
        example: 19.99,
        title: 'Discount Amount',
      }),
    discount_percentage: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Discount percentage applied to the line item when supported downstream.',
        example: 0.01,
        title: 'Discount Percentage',
      }),
    id: IdSchema.exactOptional(),
    item: LinkedInvoiceItemSchema.exactOptional(),
    ledger_account: LinkedLedgerAccountSchema.exactOptional(),
    line_number: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Line number in the invoice', example: 1, title: 'Line number' }),
    location_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Location id', example: '1234', title: 'Location id' }),
    quantity: QuantitySchema.exactOptional(),
    row_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Row ID', example: '12345', title: 'Row ID' }),
    row_version: RowVersionSchema.exactOptional(),
    tax_amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Tax amount', example: 27500, title: 'Tax amount' }),
    tax_rate: LinkedTaxRateSchema.exactOptional(),
    total_amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Total amount of the line item',
        example: 27500,
        title: 'Total amount',
      }),
    type: z
      .enum(['sales_item', 'discount', 'info', 'sub_total'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Item type',
        example: 'sales_item',
        title: 'Type',
        'x-apideck-enum-id': 'invoices.lines-items.type',
        'x-graphql-type-name': 'InvoiceLineItemType',
      }),
    unit_of_measure: UnitOfMeasureSchema.exactOptional(),
    unit_price: UnitPriceSchema.exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'InvoiceLineItem',
    'x-apideck-weights': {
      code: 'medium',
      created_at: 'edge-case',
      created_by: 'edge-case',
      department_id: 'low',
      description: 'high',
      discount_percentage: 'low',
      id: 'high',
      item: 'high',
      ledger_account: 'low',
      line_number: 'medium',
      location_id: 'low',
      quantity: 'high',
      row_id: 'edge-case',
      row_version: 'edge-case',
      tax_amount: 'high',
      tax_rate: 'medium',
      total_amount: 'critical',
      type: 'medium',
      unit_of_measure: 'edge-case',
      unit_price: 'high',
      updated_at: 'high',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('InvoiceLineItem')

const CreditNoteSchema = z
  .strictObject({
    account: LinkedLedgerAccountSchema.exactOptional(),
    allocations: z
      .array(
        z
          .object({
            amount: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.',
                example: 49.99,
                title: 'Amount',
              }),
            code: z.string().exactOptional().openapi({ example: 'N091', readOnly: true }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Unique identifier of entity this payment should be attributed to.',
                example: '123456',
                title: 'Linked entity ID',
              }),
            type: z
              .enum(['invoice', 'order', 'expense', 'credit_memo', 'over_payment', 'pre_payment'])
              .exactOptional()
              .openapi({
                description: 'Type of entity this payment should be attributed to.',
                title: 'Allocation type',
                'x-apideck-enum-id': 'allocations.type',
                'x-graphql-type-name': 'AllocationType',
              }),
          })
          .openapi({
            'x-apideck-weights': { amount: 'medium', code: 'medium', id: 'medium', type: 'medium' },
            required: [],
          }),
      )
      .exactOptional(),
    balance: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The balance reflecting any payments made against the transaction.',
        example: 27500,
        title: 'Balance',
      }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    currency_rate: CurrencyRateSchema.exactOptional(),
    customer: LinkedCustomerSchema.exactOptional(),
    date_issued: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date credit note issued - YYYY:MM::DDThh:mm:ss.sTZD',
        example: '2021-05-01T12:00:00.000Z',
        title: 'Datetime',
      }),
    date_paid: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Date credit note paid - YYYY:MM::DDThh:mm:ss.sTZD',
        example: '2021-05-01T12:00:00.000Z',
        title: 'Datetime',
      }),
    id: z
      .string()
      .openapi({
        description: 'Unique identifier representing the entity',
        example: '123456',
        readOnly: true,
        title: 'Credit Note identifier',
      }),
    line_items: z.array(InvoiceLineItemSchema).exactOptional(),
    note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional note to be associated with the credit note.',
        example: 'Some notes about this credit note',
        title: 'Note',
      }),
    number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Credit note number.',
        example: 'OIT00546',
        title: 'Credit note number',
      }),
    reference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional reference message ie: Debit remittance detail.',
        example: '123456',
        title: 'Credit Note reference',
      }),
    remaining_credit: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates the total credit amount still available to apply towards the payment.',
        example: 27500,
        title: 'Remaining Credit',
      }),
    row_version: RowVersionSchema.exactOptional(),
    status: z
      .enum(['draft', 'authorised', 'paid', 'voided', 'deleted'])
      .exactOptional()
      .openapi({
        description: 'Status of credit notes',
        example: 'authorised',
        title: 'Credit Note status',
        'x-apideck-enum-id': 'credit-notes.status',
        'x-graphql-type-name': 'CreditNoteStatus',
      }),
    sub_total: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Sub-total amount, normally before tax.',
        example: 27500,
        title: 'Sub-total amount',
      }),
    tax_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Applicable tax id/code override if tax is not supplied on a line item basis.',
        example: '1234',
        title: 'Tax Code',
      }),
    tax_inclusive: TaxInclusiveSchema.exactOptional(),
    terms: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional terms to be associated with the credit note.',
        example: 'Some terms about this credit note',
        title: 'Terms',
      }),
    total_amount: z
      .number()
      .openapi({ description: 'Amount of transaction', example: 49.99, title: 'Total amount' }),
    total_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Total tax amount applied to this invoice.',
        example: 2500,
        title: 'Total tax amount',
      }),
    type: z
      .enum(['accounts_receivable_credit', 'accounts_payable_credit'])
      .exactOptional()
      .openapi({
        description: 'Type of payment',
        example: 'accounts_receivable_credit',
        title: 'Credit Note Type',
        'x-apideck-enum-id': 'credit-notes.type',
        'x-graphql-type-name': 'CreditNoteType',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    required: ['id', 'total_amount'],
    'x-apideck-schema-id': 'CreditNote',
    'x-apideck-strict-required': ['total_amount', 'currency', 'customer'],
    'x-apideck-weights': {
      account: 'critical',
      allocations: 'medium',
      balance: 'critical',
      created_at: 'medium',
      created_by: 'low',
      currency: 'critical',
      currency_rate: 'medium',
      customer: 'high',
      date_issued: 'edge-case',
      date_paid: 'critical',
      id: 'critical',
      line_items: 'medium',
      note: 'low',
      number: 'low',
      reference: 'low',
      remaining_credit: 'edge-case',
      row_version: 'edge-case',
      status: 'high',
      sub_total: 'critical',
      tax_code: 'edge-case',
      tax_inclusive: 'low',
      total_amount: 'critical',
      total_tax: 'edge-case',
      type: 'edge-case',
      updated_at: 'medium',
      updated_by: 'low',
    },
  })
  .openapi('CreditNote')

const CustomersFilterSchema = z
  .strictObject({
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Company Name of customer to search for',
        example: 'SpaceX',
        title: 'Company Name',
      }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Display Name of customer to search for',
        example: 'Techno King',
        title: 'Display Name',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Email of customer to search for',
        example: 'elon@spacex.com',
        title: 'Email',
      }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'First name of customer to search for',
        example: 'Elon',
        title: 'First Name',
      }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Last name of customer to search for',
        example: 'Musk',
        title: 'Last Name',
      }),
  })
  .openapi({
    example: {
      company_name: 'SpaceX',
      display_name: 'Elon Musk',
      email: 'elon@musk.com',
      first_name: 'Elon',
      last_name: 'Musk',
    },
    'x-apideck-schema-id': 'CustomersFilter',
    'x-graphql-type-name': 'CustomersFilter',
    required: [],
  })
  .openapi('CustomersFilter')

const DeleteBillResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'bills' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteBillResponse',
  })
  .openapi('DeleteBillResponse')

const DeleteCreditNoteResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'credit-notes' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteCreditNoteResponse',
  })
  .openapi('DeleteCreditNoteResponse')

const DeleteCustomerResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteCustomerResponse',
  })
  .openapi('DeleteCustomerResponse')

const DeleteTaxRateResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'tax-rates' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteTaxRateResponse',
  })
  .openapi('DeleteTaxRateResponse')

const DeleteInvoiceItemResponseSchema = DeleteTaxRateResponseSchema.openapi(
  'DeleteInvoiceItemResponse',
)

const DeleteInvoiceResponseSchema = z
  .object({
    data: InvoiceResponseSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'invoices' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteInvoiceResponse',
  })
  .openapi('DeleteInvoiceResponse')

const DeleteJournalEntryResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'journal-entries' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'quickbooks' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'] })
  .openapi('DeleteJournalEntryResponse')

const DeleteLedgerAccountResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ledger-accounts' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteLedgerAccountResponse',
  })
  .openapi('DeleteLedgerAccountResponse')

const DeletePaymentResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'payments' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeletePaymentResponse',
  })
  .openapi('DeletePaymentResponse')

const DeleteSupplierResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'suppliers' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteSupplierResponse',
  })
  .openapi('DeleteSupplierResponse')

const GetBalanceSheetResponseSchema = z
  .object({
    data: BalanceSheetSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'BalanceSheets' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'quickbooks' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetBalanceSheetResponse',
    'x-graphql-type-name': 'BalanceSheet',
  })
  .openapi('GetBalanceSheetResponse')

const GetBillResponseSchema = z
  .object({
    data: BillSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'bills' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetBillResponse',
    'x-graphql-type-name': 'Bill',
  })
  .openapi('GetBillResponse')

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

const GetBillsResponseSchema = z
  .object({
    data: z.array(BillSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'bills' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetBillsResponse',
    'x-graphql-type-name': 'BillList',
  })
  .openapi('GetBillsResponse')

const GetCompanyInfoResponseSchema = z
  .object({
    data: CompanyInfoSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'company-info' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetCompanyInfoResponse',
    'x-graphql-type-name': 'CompanyInfo',
  })
  .openapi('GetCompanyInfoResponse')

const GetCreditNoteResponseSchema = z
  .object({
    data: CreditNoteSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'credit-notes' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetCreditNoteResponse',
  })
  .openapi('GetCreditNoteResponse')

const GetCreditNotesResponseSchema = z
  .object({
    data: z.array(CreditNoteSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'credit-notes' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetCreditNotesResponse',
  })
  .openapi('GetCreditNotesResponse')

const GetCustomerResponseSchema = z
  .object({
    data: AccountingCustomerSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetCustomerResponse',
  })
  .openapi('GetCustomerResponse')

const GetCustomersResponseSchema = z
  .object({
    data: z.array(AccountingCustomerSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetCustomersResponse',
    'x-graphql-type-name': 'CustomerList',
  })
  .openapi('GetCustomersResponse')

const InvoiceItemSchema = z
  .strictObject({
    active: ActiveSchema.exactOptional(),
    asset_account: LinkedLedgerAccountSchema.exactOptional(),
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'User defined item code', example: '120-C', title: 'Item code' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A short description of the item',
        example:
          'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        title: 'Description',
      }),
    expense_account: LinkedLedgerAccountSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the item.',
        example: '123456',
        readOnly: true,
        title: 'Item ID',
      }),
    income_account: LinkedLedgerAccountSchema.exactOptional(),
    inventory_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date of opening balance if inventory item is tracked - YYYY-MM-DD.',
        example: '2020-10-30',
        title: 'Inventory date',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Item name', example: 'Model Y', title: 'Item name' }),
    purchase_details: z
      .object({
        tax_inclusive: TaxInclusiveSchema.exactOptional(),
        tax_rate: LinkedTaxRateSchema.exactOptional(),
        unit_of_measure: UnitOfMeasureSchema.exactOptional(),
        unit_price: UnitPriceSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        'x-apideck-weights': {
          tax_inclusive: 'medium',
          tax_rate: 'medium',
          unit_of_measure: 'medium',
          unit_price: 'medium',
        },
        required: [],
      }),
    purchased: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Item is available for purchase transactions',
        example: true,
        title: 'Item purchased',
      }),
    quantity: QuantitySchema.exactOptional(),
    row_version: RowVersionSchema.exactOptional(),
    sales_details: z
      .object({
        tax_inclusive: TaxInclusiveSchema.exactOptional(),
        tax_rate: LinkedTaxRateSchema.exactOptional(),
        unit_of_measure: UnitOfMeasureSchema.exactOptional(),
        unit_price: UnitPriceSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        'x-apideck-weights': {
          tax_inclusive: 'medium',
          tax_rate: 'medium',
          unit_of_measure: 'medium',
          unit_price: 'medium',
        },
        required: [],
      }),
    sold: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Item will be available on sales transactions',
        example: true,
        title: 'Item sold',
      }),
    taxable: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'If true, transactions for this item are taxable',
        example: true,
        title: 'Item taxable',
      }),
    tracked: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Item is inventoried', example: true, title: 'Item tracked' }),
    type: z
      .enum(['inventory', 'service', 'other'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Item type',
        example: 'inventory',
        title: 'Type',
        'x-apideck-enum-id': 'invoice-items.type',
        'x-graphql-type-name': 'InvoiceItemType',
      }),
    unit_price: UnitPriceSchema.exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'InvoiceItem',
    'x-apideck-weights': {
      active: 'medium',
      asset_account: 'medium',
      code: 'high',
      created_at: 'medium',
      created_by: 'edge-case',
      description: 'medium',
      expense_account: 'medium',
      id: 'critical',
      income_account: 'high',
      inventory_date: 'high',
      name: 'critical',
      purchase_details: 'medium',
      purchased: 'edge-case',
      quantity: 'high',
      row_version: 'edge-case',
      sales_details: 'medium',
      sold: 'edge-case',
      taxable: 'edge-case',
      tracked: 'edge-case',
      type: 'high',
      unit_price: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('InvoiceItem')

const GetInvoiceItemResponseSchema = z
  .object({
    data: InvoiceItemSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'invoice-items' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetInvoiceItemResponse',
    'x-graphql-type-name': 'InvoiceItem',
  })
  .openapi('GetInvoiceItemResponse')

const GetInvoiceItemsResponseSchema = z
  .object({
    data: z.array(InvoiceItemSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'invoice-items' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetInvoiceItemsResponse',
    'x-graphql-type-name': 'InvoiceItemList',
  })
  .openapi('GetInvoiceItemsResponse')

const InvoiceSchema = z
  .strictObject({
    balance: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Balance of invoice due.', example: 27500, title: 'Balance' }),
    billing_address: AddressSchema.exactOptional(),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    currency_rate: CurrencyRateSchema.exactOptional(),
    customer: LinkedCustomerSchema.exactOptional(),
    customer_memo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Customer memo',
        example: 'Thank you for your business and have a great day!',
        title: 'Customer memo',
      }),
    deposit: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Amount of deposit made to this invoice.',
        example: 0,
        title: 'Deposit',
      }),
    discount_amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Discount amount applied to this invoice.',
        example: 25,
        title: 'Discount Amount',
      }),
    discount_percentage: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Discount percentage applied to this invoice.',
        example: 5.5,
        title: 'Discount Percent',
      }),
    downstream_id: DownstreamIdSchema.exactOptional(),
    due_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The invoice due date is the date on which a payment or invoice is scheduled to be received by the seller - YYYY-MM-DD.',
        example: '2020-09-30',
        title: 'Due date',
      }),
    id: IdSchema.exactOptional(),
    invoice_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Date invoice was issued - YYYY-MM-DD.',
        example: '2020-09-30',
        title: 'Invoice date',
      }),
    invoice_sent: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Invoice sent to contact/customer.',
        example: true,
        title: 'Invoice Sent',
      }),
    line_items: z.array(InvoiceLineItemSchema).exactOptional(),
    number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Invoice number.', example: 'OIT00546', title: 'Invoice number' }),
    po_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A PO Number uniquely identifies a purchase order and is generally defined by the buyer. The buyer will match the PO number in the invoice to the Purchase Order.',
        example: '90000117',
        title: 'Purchase Order number',
      }),
    reference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional invoice reference.',
        example: '123456',
        title: 'Invoice reference',
      }),
    row_version: RowVersionSchema.exactOptional(),
    shipping_address: AddressSchema.exactOptional(),
    source_document_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "URL link to a source document - shown as 'Go to [appName]' in the downstream app. Currently only supported for Xero.",
        example: 'https://www.invoicesolution.com/invoice/123456',
        title: 'Source document URL',
      }),
    status: z
      .enum([
        'draft',
        'submitted',
        'authorised',
        'partially_paid',
        'paid',
        'void',
        'credit',
        'deleted',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Invoice status',
        example: 'draft',
        title: 'Status',
        'x-apideck-enum-id': 'invoices.status',
      }),
    sub_total: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Sub-total amount, normally before tax.',
        example: 27500,
        title: 'Sub-total amount',
      }),
    tax_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Applicable tax id/code override if tax is not supplied on a line item basis.',
        example: '1234',
        title: 'Tax Code',
      }),
    tax_inclusive: TaxInclusiveSchema.exactOptional(),
    template_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional invoice template', example: '123456', title: 'Template' }),
    terms: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Terms of payment.', example: 'Net 30 days', title: 'Terms' }),
    total: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Total amount of invoice, including tax.',
        example: 27500,
        title: 'Total amount',
      }),
    total_tax: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Total tax amount applied to this invoice.',
        example: 2500,
        title: 'Total tax amount',
      }),
    type: z
      .enum(['standard', 'credit', 'service', 'product', 'supplier', 'other'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Invoice type',
        example: 'service',
        title: 'Invoice type',
        'x-apideck-enum-id': 'invoices.type',
        'x-graphql-type-name': 'InvoiceType',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'Invoice',
    'x-apideck-weights': {
      balance: 'high',
      billing_address: 'high',
      created_at: 'high',
      created_by: 'low',
      currency: 'medium',
      currency_rate: 'low',
      customer: 'high',
      customer_memo: 'low',
      deposit: 'low',
      discount_amount: 'medium',
      discount_percentage: 'medium',
      downstream_id: 'low',
      due_date: 'edge-case',
      id: 'critical',
      invoice_date: 'edge-case',
      invoice_sent: 'low',
      line_items: 'critical',
      number: 'high',
      po_number: 'low',
      reference: 'low',
      row_version: 'edge-case',
      shipping_address: 'medium',
      source_document_url: 'edge-case',
      status: 'critical',
      sub_total: 'high',
      tax_code: 'medium',
      tax_inclusive: 'low',
      template_id: 'edge-case',
      terms: 'low',
      total: 'critical',
      total_tax: 'high',
      type: 'high',
      updated_at: 'high',
      updated_by: 'low',
    },
    required: [],
  })
  .openapi('Invoice')

const GetInvoiceResponseSchema = z
  .object({
    data: InvoiceSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'invoices' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetInvoiceResponse',
    'x-graphql-type-name': 'Invoice',
  })
  .openapi('GetInvoiceResponse')

const GetInvoicesResponseSchema = z
  .object({
    data: z.array(InvoiceSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'invoices' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetInvoicesResponse',
    'x-graphql-type-name': 'InvoiceList',
  })
  .openapi('GetInvoicesResponse')

const LinkedTrackingCategorySchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier for the tracking category.',
        example: '123456',
        title: 'Tracking Category ID',
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The name of the tracking category.',
        example: 'New York',
        title: 'Tracking Category Name',
      }),
  })
  .nullable()
  .openapi({
    'x-apideck-schema-id': 'LinkedTrackingCategory',
    'x-apideck-weights': { id: 'critical' },
    'x-graphql-type-name': 'LinkedTrackingCategory',
    required: [],
  })
  .openapi('LinkedTrackingCategory')

const JournalEntryLineItemSchema = z
  .strictObject({
    department_id: IdSchema.exactOptional(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'User defined description',
        example:
          'Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.',
        title: 'Description',
      }),
    id: IdSchema.exactOptional(),
    ledger_account: LinkedLedgerAccountSchema,
    location_id: IdSchema.exactOptional(),
    tax_amount: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Tax amount', example: 27500, title: 'Tax amount' }),
    tax_rate: LinkedTaxRateSchema.exactOptional(),
    total_amount: z
      .number()
      .nullable()
      .openapi({
        description:
          'Debit entries are considered positive, and credit entries are considered negative.',
        example: 27500,
        title: 'Total amount',
      }),
    tracking_category: LinkedTrackingCategorySchema.exactOptional(),
    type: z
      .enum(['debit', 'credit'])
      .openapi({
        description:
          'Debit entries are considered positive, and credit entries are considered negative.',
        example: 'debit',
        title: 'Type',
        'x-apideck-enum-id': 'JournalEntryLineItemType',
        'x-graphql-type-name': 'JournalEntryLineItemType',
      }),
  })
  .openapi({
    required: ['ledger_account', 'total_amount', 'type'],
    'x-apideck-schema-id': 'JournalEntryLineItem',
    'x-apideck-strict-required': ['ledger_account', 'total_amount', 'type'],
    'x-apideck-weights': {
      id: 'high',
      ledger_account: 'critical',
      tax_amount: 'high',
      tax_rate: 'medium',
      total_amount: 'critical',
      tracking_category: 'low',
      type: 'critical',
    },
  })
  .openapi('JournalEntryLineItem')

const JournalEntrySchema = z
  .strictObject({
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    currency_rate: CurrencyRateSchema.exactOptional(),
    id: IdSchema.exactOptional(),
    journal_symbol: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Journal symbol of the entry. For example IND for indirect costs',
        example: 'IND',
        title: 'Journal symbol',
      }),
    line_items: z
      .array(JournalEntryLineItemSchema)
      .min(2)
      .exactOptional()
      .openapi({ description: 'Requires a minimum of 2 line items that sum to 0' }),
    memo: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Reference for the journal entry.',
        example: 'Thank you for your business and have a great day!',
        title: 'Memo',
      }),
    posted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'This is the date on which the journal entry was added. This can be different from the creation date and can also be backdated.',
        example: '2020-09-30T07:43:32.000Z',
        title: 'Posted at (timestamp)',
      }),
    row_version: RowVersionSchema.exactOptional(),
    title: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Journal entry title',
        example: 'Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry',
        title: 'Journal entry title',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-strict-required': ['line_items'],
    'x-apideck-weights': {
      created_at: 'medium',
      created_by: 'edge-case',
      currency: 'medium',
      currency_rate: 'low',
      id: 'critical',
      journal_symbol: 'edge-case',
      line_items: 'medium',
      memo: 'low',
      posted_at: 'low',
      row_version: 'edge-case',
      title: 'medium',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('JournalEntry')

const GetJournalEntriesResponseSchema = z
  .object({
    data: z.array(JournalEntrySchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'journal-entries' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'quickbooks' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-graphql-type-name': 'JournalEntryList',
  })
  .openapi('GetJournalEntriesResponse')

const GetJournalEntryResponseSchema = z
  .object({
    data: JournalEntrySchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'journal-entries' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'quickbooks' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-graphql-type-name': 'JournalEntry',
  })
  .openapi('GetJournalEntryResponse')

const LedgerAccountSchema = z
  .looseObject({
    active: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether the account is active or not.',
        example: true,
        title: 'Is active',
      }),
    bank_account: BankAccountSchema.exactOptional(),
    categories: z
      .array(
        z
          .object({
            id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The name of the category.',
                example: 'Finance Charges Expense',
                readOnly: true,
                title: 'Category name',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'The categories of the account.',
        readOnly: true,
        title: 'Categories',
      }),
    classification: z
      .enum([
        'asset',
        'equity',
        'expense',
        'liability',
        'revenue',
        'income',
        'other_income',
        'other_expense',
        'costs_of_sales',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The classification of account.',
        example: 'asset',
        title: 'Classification',
        'x-apideck-enum-id': 'ledger-accounts.classification',
      }),
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The code assigned to the account.', example: '453', title: 'Code' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    current_balance: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The current balance of the account.',
        example: 20000,
        title: 'Current balance',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The description of the account.',
        example: 'Main checking account',
        title: 'Description',
      }),
    display_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The human readable display ID used when displaying the account',
        example: '1-12345',
        title: 'Display ID',
      }),
    fully_qualified_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The fully qualified name of the account.',
        example: 'Asset.Bank.Checking_Account',
        title: 'Fully Qualified Name',
      }),
    header: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether the account is a header or not.',
        example: true,
        title: 'Is header',
      }),
    id: IdSchema.exactOptional(),
    last_reconciliation_date: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Reconciliation Date means the last calendar day of each Reconciliation Period.',
        example: '2020-09-30',
        title: 'Last Reconciliation Date',
      }),
    level: z.number().nullable().exactOptional().openapi({ example: 1 }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the account.', example: 'Bank account', title: 'Name' }),
    nominal_code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The nominal code of the ledger account.',
        example: 'N091',
        title: 'Nominal Code',
      }),
    opening_balance: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The opening balance of the account.',
        example: 75000,
        title: 'Opening balance',
      }),
    parent_account: z
      .object({
        display_id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The human readable display ID used when displaying the parent account',
            example: '1-1100',
            title: 'Display ID',
          }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The ID of the parent account.',
            example: '12345',
            title: 'Parent account ID',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The name of the parent account.',
            example: 'Bank Accounts',
            title: 'Name',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    row_version: RowVersionSchema.exactOptional(),
    status: z
      .enum(['active', 'inactive', 'archived'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The status of the account.',
        example: 'active',
        title: 'Account status',
        'x-apideck-enum-id': 'ledger-accounts.status',
        'x-graphql-type-name': 'LedgerAccountStatus',
      }),
    sub_account: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Whether the account is a sub account or not.',
        example: false,
        title: 'Is sub account',
      }),
    sub_accounts: z
      .array(
        z
          .object({
            account_sub_name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The name of the sub account.',
                example: 'Petty Cash',
                readOnly: true,
                title: 'Sub Account Name',
              }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The ID of the sub account.',
                example: '12345',
                readOnly: true,
                title: 'Sub account ID',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'The sub accounts of the account.',
        readOnly: true,
        title: 'Sub accounts',
      }),
    sub_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The sub type of account.',
        example: 'CHECKING_ACCOUNT',
        title: 'Sub Type',
      }),
    tax_rate: LinkedTaxRateSchema.exactOptional(),
    tax_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The tax type of the account.', example: 'NONE', title: 'Tax Type' }),
    type: z
      .enum([
        'accounts_receivable',
        'revenue',
        'sales',
        'other_income',
        'bank',
        'current_asset',
        'fixed_asset',
        'non_current_asset',
        'other_asset',
        'balancesheet',
        'equity',
        'expense',
        'other_expense',
        'costs_of_sales',
        'accounts_payable',
        'credit_card',
        'current_liability',
        'non_current_liability',
        'other_liability',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of account.',
        example: 'bank',
        title: 'Type',
        'x-apideck-enum-id': 'ledger-accounts.type',
        'x-graphql-type-name': 'LedgerAccountType',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'LedgerAccount',
    'x-apideck-weights': {
      active: 'edge-case',
      bank_account: 'high',
      categories: 'high',
      classification: 'edge-case',
      code: 'low',
      created_at: 'low',
      created_by: 'edge-case',
      currency: 'edge-case',
      current_balance: 'edge-case',
      description: 'edge-case',
      display_id: 'low',
      fully_qualified_name: 'edge-case',
      header: 'edge-case',
      id: 'critical',
      last_reconciliation_date: 'edge-case',
      level: 'edge-case',
      name: 'high',
      nominal_code: 'low',
      opening_balance: 'edge-case',
      parent_account: 'high',
      row_version: 'edge-case',
      status: 'medium',
      sub_account: 'medium',
      sub_accounts: 'medium',
      sub_type: 'edge-case',
      tax_rate: 'edge-case',
      tax_type: 'edge-case',
      type: 'high',
      updated_at: 'high',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('LedgerAccount')

const GetLedgerAccountResponseSchema = z
  .object({
    data: LedgerAccountSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ledger-accounts' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetLedgerAccountResponse',
    'x-graphql-type-name': 'LedgerAccount',
  })
  .openapi('GetLedgerAccountResponse')

const GetLedgerAccountsResponseSchema = z
  .object({
    data: z.array(LedgerAccountSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ledger-accounts' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetLedgerAccountsResponse',
    'x-graphql-type-name': 'LedgerAccountList',
  })
  .openapi('GetLedgerAccountsResponse')

const PaymentSchema = z
  .strictObject({
    account: LinkedLedgerAccountSchema.exactOptional(),
    accounts_receivable_account_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Unique identifier for the account to allocate payment to.',
        example: '123456',
        title: 'Accounts receivable account id',
      }),
    accounts_receivable_account_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Type of accounts receivable account.',
        example: 'Account',
        title: 'Type of accounts receivable account',
      }),
    allocations: z
      .array(
        z
          .object({
            amount: z
              .number()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Amount of payment that should be attributed to this allocation. If null, the total_amount will be used.',
                example: 49.99,
                title: 'Amount',
              }),
            code: z.string().exactOptional().openapi({ example: 'N091', readOnly: true }),
            id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Unique identifier of entity this payment should be attributed to.',
                example: '123456',
                title: 'Linked entity ID',
              }),
            type: z
              .enum(['invoice', 'order', 'expense', 'credit_memo', 'over_payment', 'pre_payment'])
              .exactOptional()
              .openapi({
                description: 'Type of entity this payment should be attributed to.',
                title: 'Allocation type',
                'x-apideck-enum-id': 'allocations.type',
                'x-graphql-type-name': 'AllocationType',
              }),
          })
          .openapi({
            'x-apideck-strict-any-of': [{ required: ['id'] }, { required: ['code'] }],
            'x-apideck-strict-required': ['amount'],
            'x-apideck-weights': {
              amount: 'critical',
              code: 'medium',
              id: 'medium',
              type: 'medium',
            },
            'x-graphql-type-name': 'PaymentAllocation',
            required: [],
          }),
      )
      .exactOptional(),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    currency_rate: CurrencyRateSchema.exactOptional(),
    customer: LinkedCustomerSchema.exactOptional(),
    display_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Payment id to be displayed.',
        example: '123456',
        title: 'Display id',
      }),
    downstream_id: DownstreamIdSchema.exactOptional(),
    id: z
      .string()
      .openapi({
        description: 'Unique identifier representing the entity',
        example: '123456',
        readOnly: true,
        title: 'Payment identifier',
      }),
    note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional note to be associated with the payment.',
        example: 'Some notes about this payment',
        title: 'Note',
      }),
    payment_method: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Payment method name',
        example: 'Credit Card',
        title: 'Payment method',
      }),
    payment_method_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the payment method.',
        example: '123456',
        title: 'Payment method id',
      }),
    payment_method_reference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional reference message returned by payment method on processing',
        example: '123456',
        title: 'Payment method reference',
      }),
    reconciled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Payment has been reconciled', example: true, title: 'Reconciled' }),
    reference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Optional payment reference message ie: Debit remittance detail.',
        example: '123456',
        title: 'Payment reference',
      }),
    row_version: RowVersionSchema.exactOptional(),
    status: z
      .enum(['authorised', 'paid', 'voided', 'deleted'])
      .exactOptional()
      .openapi({
        description: 'Status of payment',
        example: 'authorised',
        title: 'Payment status',
        'x-apideck-enum-id': 'payments.status',
        'x-graphql-type-name': 'PaymentStatus',
      }),
    supplier: LinkedSupplierSchema.exactOptional(),
    total_amount: z
      .number()
      .openapi({ description: 'Amount of payment', example: 49.99, title: 'Total amount' }),
    transaction_date: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'Date transaction was entered - YYYY:MM::DDThh:mm:ss.sTZD',
        example: '2021-05-01T12:00:00.000Z',
        title: 'Transaction datetime',
      }),
    type: z
      .enum([
        'accounts_receivable',
        'accounts_payable',
        'accounts_receivable_credit',
        'accounts_payable_credit',
        'accounts_receivable_overpayment',
        'accounts_payable_overpayment',
        'accounts_receivable_prepayment',
        'accounts_payable_prepayment',
      ])
      .exactOptional()
      .openapi({
        description: 'Type of payment',
        example: 'accounts_receivable',
        title: 'Payment Type',
        'x-apideck-enum-id': 'payments.type',
        'x-graphql-type-name': 'PaymentType',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    required: ['id', 'total_amount', 'transaction_date'],
    'x-apideck-schema-id': 'Payment',
    'x-apideck-strict-required': ['total_amount', 'transaction_date', 'allocations'],
    'x-apideck-weights': {
      account: 'critical',
      accounts_receivable_account_id: 'edge-case',
      accounts_receivable_account_type: 'edge-case',
      allocations: 'critical',
      created_at: 'medium',
      created_by: 'edge-case',
      currency: 'critical',
      currency_rate: 'medium',
      customer: 'high',
      display_id: 'low',
      downstream_id: 'medium',
      id: 'critical',
      note: 'low',
      payment_method: 'medium',
      payment_method_id: 'edge-case',
      payment_method_reference: 'medium',
      reconciled: 'low',
      reference: 'medium',
      row_version: 'edge-case',
      status: 'high',
      supplier: 'high',
      total_amount: 'critical',
      transaction_date: 'critical',
      type: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
  })
  .openapi('Payment')

const GetPaymentResponseSchema = z
  .object({
    data: PaymentSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'payments' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetPaymentResponse',
    'x-graphql-type-name': 'Payment',
  })
  .openapi('GetPaymentResponse')

const GetPaymentsResponseSchema = z
  .object({
    data: z.array(PaymentSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'payments' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetPaymentsResponse',
    'x-graphql-type-name': 'PaymentList',
  })
  .openapi('GetPaymentsResponse')

const ProfitAndLossSchema = z
  .strictObject({
    currency: z.string().openapi({ example: 'USD', title: 'Currency' }),
    customer_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer id', example: '123', title: 'Customer Id' }),
    end_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({
        description: 'The start date of the report',
        example: '2017-01-01',
        title: 'Start Date',
      }),
    expenses: z
      .object({
        records: ProfitAndLossRecordsSchema,
        total: z
          .number()
          .nullable()
          .openapi({ description: 'Total expense', example: 100000, title: 'Total expense' }),
      })
      .openapi({
        example: {
          records: [
            { amount: 10000, id: '123', name: 'Expense 1' },
            { amount: 20000, id: '456', name: 'Expense 2' },
          ],
          total: 200000,
        },
        required: ['total', 'records'],
        'x-apideck-weights': { record: 'critical', total: 'critical' },
      }),
    gross_profit: z
      .object({
        records: ProfitAndLossRecordsSchema,
        total: z
          .number()
          .nullable()
          .openapi({
            description: 'Total gross profit',
            example: 100000,
            title: 'Total gross profit',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        example: { total: 200000 },
        required: ['total', 'records'],
        'x-apideck-weights': { record: 'critical', total: 'critical' },
      }),
    id: IdSchema.exactOptional(),
    income: z
      .object({
        records: ProfitAndLossRecordsSchema,
        total: z
          .number()
          .nullable()
          .openapi({ description: 'Total income', example: 100000, title: 'Total income' }),
      })
      .openapi({
        example: {
          records: [
            { amount: 10000, id: '123', name: 'Income 1' },
            { amount: 20000, id: '456', name: 'Income 2' },
          ],
          total: 200000,
        },
        required: ['total', 'records'],
        'x-apideck-weights': { record: 'critical', total: 'critical' },
      }),
    net_income: z
      .object({
        records: ProfitAndLossRecordsSchema,
        total: z
          .number()
          .nullable()
          .openapi({ description: 'Total net income', example: 100000, title: 'Total net income' }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        example: { total: 200000 },
        required: ['total', 'records'],
        'x-apideck-weights': { record: 'critical', total: 'critical' },
      }),
    net_operating_income: z
      .object({
        records: ProfitAndLossRecordsSchema,
        total: z
          .number()
          .nullable()
          .openapi({
            description: 'Total net operating income',
            example: 100000,
            title: 'Total net operating income',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        example: { total: 200000 },
        required: ['total', 'records'],
        'x-apideck-weights': { record: 'critical', total: 'critical' },
      }),
    report_name: z
      .string()
      .openapi({
        description: 'The name of the report',
        example: 'ProfitAndLoss',
        title: 'Report Name',
      }),
    start_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({
        description: 'The start date of the report',
        example: '2017-01-01',
        title: 'Start Date',
      }),
  })
  .openapi({
    required: ['report_name', 'currency', 'income', 'expenses'],
    'x-apideck-circular-ref': true,
    'x-apideck-schema-id': 'ProfitAndLoss',
    'x-apideck-weights': {
      currency: 'critical',
      customer: 'low',
      end_date: 'low',
      expenses: 'critical',
      gross_profit: 'medium',
      id: 'medium',
      income: 'critical',
      net_income: 'medium',
      net_operating_income: 'medium',
      report_name: 'medium',
      start_date: 'low',
    },
  })
  .openapi('ProfitAndLoss')

const GetProfitAndLossResponseSchema = z
  .object({
    data: ProfitAndLossSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ProfitAndLosses' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'quickbooks' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetProfitAndLossResponse',
    'x-graphql-type-name': 'ProfitAndLoss',
  })
  .openapi('GetProfitAndLossResponse')

const SupplierSchema = z
  .strictObject({
    account: LinkedLedgerAccountSchema.exactOptional(),
    addresses: z.array(AddressSchema).exactOptional(),
    bank_accounts: z.array(BankAccountSchema).exactOptional(),
    company_name: CompanyNameSchema.exactOptional(),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    display_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display ID', example: 'EMP00101', title: 'Display ID' }),
    display_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Display name', example: 'Windsurf Shop', title: 'Display Name' }),
    downstream_id: DownstreamIdSchema.exactOptional(),
    emails: z.array(EmailSchema).exactOptional(),
    first_name: FirstNameSchema.exactOptional(),
    id: IdSchema,
    individual: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Is this an individual or business supplier',
        example: true,
        title: 'Is individual',
      }),
    last_name: LastNameSchema.exactOptional(),
    middle_name: MiddleNameSchema.exactOptional(),
    notes: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Some notes about this supplier',
        example: 'Some notes about this supplier',
        title: 'Notes',
      }),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    row_version: RowVersionSchema.exactOptional(),
    status: z
      .enum(['active', 'inactive', 'archived', 'gdpr-erasure-request', 'unknown'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Supplier status',
        example: 'active',
        title: 'Status',
        'x-apideck-enum-id': 'suppliers.status',
        'x-graphql-type-name': 'SupplierStatus',
      }),
    suffix: SuffixSchema.exactOptional(),
    tax_number: TaxNumberSchema.exactOptional(),
    tax_rate: LinkedTaxRateSchema.exactOptional(),
    title: TitleSchema.exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
    websites: z.array(WebsiteSchema).exactOptional(),
  })
  .openapi({
    required: ['id'],
    'x-apideck-schema-id': 'Supplier',
    'x-apideck-strict-any-of': [
      { required: ['first_name', 'last_name'] },
      { required: ['company_name'] },
    ],
    'x-apideck-strict-required': ['emails', 'addresses', 'phone_numbers', 'status', 'updated_at'],
    'x-apideck-weights': {
      account: 'medium',
      addresses: 'high',
      bank_accounts: 'high',
      company_name: 'high',
      created_at: 'medium',
      created_by: 'edge-case',
      currency: 'medium',
      display_id: 'edge-case',
      display_name: 'edge-case',
      downstream_id: 'edge-case',
      emails: 'high',
      first_name: 'high',
      id: 'critical',
      individual: 'medium',
      last_name: 'high',
      middle_name: 'low',
      notes: 'low',
      phone_numbers: 'high',
      row_version: 'edge-case',
      status: 'high',
      suffix: 'low',
      tax_number: 'medium',
      tax_rate: 'medium',
      title: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
      websites: 'medium',
    },
    'x-graphql-type-name': 'Supplier',
  })
  .openapi('Supplier')

const GetSupplierResponseSchema = z
  .object({
    data: SupplierSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'suppliers' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetSupplierResponse',
    'x-graphql-type-name': 'Supplier',
  })
  .openapi('GetSupplierResponse')

const GetSuppliersResponseSchema = z
  .object({
    data: z.array(SupplierSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'suppliers' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetSuppliersResponse',
    'x-graphql-type-name': 'SupplierList',
  })
  .openapi('GetSuppliersResponse')

const TaxRateSchema = z
  .strictObject({
    code: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Tax code assigned to identify this tax rate.',
        example: 'ABN',
        title: 'Tax code',
      }),
    components: z
      .array(
        z
          .object({
            compound: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({ example: true, title: 'Compound' }),
            id: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({ example: '10', title: 'TaxRate Id' }),
            name: z.string().min(1).exactOptional().openapi({ example: 'GST' }),
            rate: z.number().nullable().exactOptional().openapi({ example: 10, title: 'TaxRate' }),
          })
          .openapi({
            'x-apideck-weights': {
              compound: 'medium',
              id: 'medium',
              name: 'medium',
              rate: 'medium',
            },
            required: [],
          }),
      )
      .nullable()
      .exactOptional()
      .openapi({ title: 'Tax components' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Description of tax rate',
        example: 'Reduced rate GST Purchases',
        title: 'Description',
      }),
    effective_tax_rate: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Effective tax rate', example: 10, title: 'Effective tax rate' }),
    id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID assigned to identify this tax rate.', example: '1234' }),
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Name assigned to identify this tax rate.',
        example: 'GST on Purchases',
        title: 'Name',
      }),
    original_tax_rate_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities.',
        example: '12345',
        title: 'Original tax rate ID',
      }),
    report_tax_type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Report Tax type to aggregate tax collected or paid for reporting purposes',
        example: 'NONE',
        title: 'Report Tax Type',
      }),
    row_version: RowVersionSchema.exactOptional(),
    status: z
      .enum(['active', 'inactive', 'archived'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Tax rate status',
        example: 'active',
        title: 'Tax rate status',
        'x-apideck-enum-id': 'tax-rates.status',
        'x-graphql-type-name': 'TaxRateStatus',
      }),
    tax_payable_account_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the account for tax collected.',
        example: '123456',
        title: 'Tax payable account id',
      }),
    tax_remitted_account_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the account for tax remitted.',
        example: '123456',
        title: 'Tax remitted account id',
      }),
    total_tax_rate: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Not compounded sum of the components of a tax rate',
        example: 10,
        title: 'Total tax rate',
      }),
    type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Tax type used to indicate the source of tax collected or paid',
        example: 'NONE',
        title: 'Tax Type',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'TaxRate',
    'x-apideck-strict-any-of': [
      { required: ['id'] },
      { required: ['name'] },
      { required: ['code'] },
    ],
    'x-apideck-strict-required': ['effective_tax_rate'],
    'x-apideck-weights': {
      code: 'edge-case',
      components: 'medium',
      created_at: 'low',
      created_by: 'edge-case',
      description: 'low',
      effective_tax_rate: 'critical',
      id: 'critical',
      name: 'high',
      original_tax_rate_id: 'edge-case',
      report_tax_type: 'edge-case',
      row_version: 'edge-case',
      status: 'high',
      tax_payable_account_id: 'high',
      tax_remitted_account_id: 'medium',
      total_tax_rate: 'high',
      type: 'high',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('TaxRate')

const GetTaxRateResponseSchema = z
  .object({
    data: TaxRateSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'tax-rates' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetTaxRateResponse',
    'x-graphql-type-name': 'TaxRateOne',
  })
  .openapi('GetTaxRateResponse')

const GetTaxRatesResponseSchema = z
  .object({
    data: z.array(TaxRateSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'tax-rates' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetTaxRatesResponse',
    'x-graphql-type-name': 'TaxRateList',
  })
  .openapi('GetTaxRatesResponse')

const InvoiceItemAssetAccountSchema = LinkedLedgerAccountSchema.openapi('InvoiceItemAssetAccount')

const InvoiceItemExpenseAccountSchema = LinkedLedgerAccountSchema.openapi(
  'InvoiceItemExpenseAccount',
)

const InvoiceItemIncomeAccountSchema = LinkedLedgerAccountSchema.openapi('InvoiceItemIncomeAccount')

const InvoiceItemsFilterSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of Invoice Items to search for',
        example: 'Widgets Large',
        title: 'Name',
      }),
  })
  .openapi({
    example: { name: 'Widgets Large' },
    'x-apideck-schema-id': 'InvoiceItemsFilter',
    'x-graphql-type-name': 'InvoiceItemsFilter',
    required: [],
  })
  .openapi('InvoiceItemsFilter')

const InvoicesSortSchema = z
  .strictObject({
    by: z
      .literal('updated_at')
      .exactOptional()
      .openapi({
        description: 'The field on which to sort the Invoices',
        example: 'updated_at',
        'x-apideck-enum-id': 'invoices.sort_by',
        'x-graphql-type-name': 'InvoicesSortBy',
      }),
    direction: SortDirectionSchema.exactOptional(),
  })
  .openapi({
    example: { by: 'updated_at', direction: 'desc' },
    'x-apideck-schema-id': 'InvoicesSort',
    'x-graphql-type-name': 'InvoicesSort',
    required: [],
  })
  .openapi('InvoicesSort')

const LedgerAccountsSchema = z.array(LedgerAccountSchema).openapi('LedgerAccounts')

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

const PassThroughQuerySchema = z
  .looseObject({
    example_downstream_property: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'All passthrough query parameters are passed along to the connector as is (?pass_through[search]=leads becomes ?search=leads)',
      }),
  })
  .openapi({ required: [] })
  .openapi('PassThroughQuery')

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

const ProfitAndLossFilterSchema = z
  .strictObject({
    customer_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Filter by customer id', example: '123abc', title: 'Customer Id' }),
    end_date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Filter by end date. If end date is given, start date is required.',
        example: '2021-12-31',
        title: 'End date',
      }),
    start_date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Filter by start date. If start date is given, end date is required.',
        example: '2021-01-01',
        title: 'Start date',
      }),
  })
  .openapi({
    example: { customer_id: '123abc', end_date: '2021-12-31', start_date: '2021-01-01' },
    'x-apideck-schema-id': 'ProfitAndLossFilter',
    'x-graphql-type-name': 'ProfitAndLossFilter',
    required: [],
  })
  .openapi('ProfitAndLossFilter')

const SuppliersFilterSchema = z
  .strictObject({
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Company Name of supplier to search for',
        example: 'SpaceX',
        title: 'Company Name',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Email of supplier to search for',
        example: 'elon@spacex.com',
        title: 'Email',
      }),
  })
  .openapi({
    example: { company_name: 'SpaceX', email: 'elon@musk.com' },
    'x-apideck-schema-id': 'SuppliersFilter',
    'x-graphql-type-name': 'SuppliersFilter',
    required: [],
  })
  .openapi('SuppliersFilter')

const TaxRatesFilterSchema = z
  .strictObject({
    assets: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean to describe if tax rate can be used for asset accounts',
        example: true,
        title: 'Assets',
      }),
    equity: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean to describe if tax rate can be used for equity accounts',
        example: true,
        title: 'Equity',
      }),
    expenses: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean to describe if tax rate can be used for expense accounts',
        example: true,
        title: 'Expenses',
      }),
    liabilities: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean to describe if tax rate can be used for liability accounts',
        example: true,
        title: 'Liabilities',
      }),
    revenue: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean to describe if tax rate can be used for revenue accounts',
        example: true,
        title: 'Revenue',
      }),
  })
  .openapi({
    example: { assets: true, equity: true, expenses: true, liabilities: true, revenue: true },
    'x-apideck-schema-id': 'TaxRatesFilter',
    'x-graphql-type-name': 'TaxRatesFilter',
    required: [],
  })
  .openapi('TaxRatesFilter')

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

const UpdateBillResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'bills' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateBillResponse',
  })
  .openapi('UpdateBillResponse')

const UpdateCreditNoteResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'credit-notes' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateCreditNoteResponse',
  })
  .openapi('UpdateCreditNoteResponse')

const UpdateCustomerResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'customers' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateCustomerResponse',
  })
  .openapi('UpdateCustomerResponse')

const UpdateInvoiceItemsResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'invoice-items' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateInvoiceItemsResponse',
  })
  .openapi('UpdateInvoiceItemsResponse')

const UpdateInvoiceResponseSchema = z
  .object({
    data: InvoiceResponseSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'invoices' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateInvoiceResponse',
  })
  .openapi('UpdateInvoiceResponse')

const UpdateJournalEntryResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'journal-entries' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'quickbooks' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'] })
  .openapi('UpdateJournalEntryResponse')

const UpdateLedgerAccountResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'ledger-accounts' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateLedgerAccountResponse',
  })
  .openapi('UpdateLedgerAccountResponse')

const UpdatePaymentResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'payments' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdatePaymentResponse',
  })
  .openapi('UpdatePaymentResponse')

const UpdateSupplierResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'suppliers' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateSupplierResponse',
  })
  .openapi('UpdateSupplierResponse')

const UpdateTaxRateResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'tax-rates' }),
    service: z.string().openapi({ description: 'Apideck ID of service provider', example: 'xero' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateTaxRateResponse',
  })
  .openapi('UpdateTaxRateResponse')

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const CompanyInfoResponse = {
  description: 'Company Info',
  content: { 'application/json': { schema: CompanyInfoSchema } },
}

const CreateBillResponseResponse = {
  description: 'Bill created',
  content: { 'application/json': { schema: CreateBillResponseSchema } },
}

const CreateCreditNoteResponseResponse = {
  description: 'Credit Note created',
  content: { 'application/json': { schema: CreateCreditNoteResponseSchema } },
}

const CreateCustomerResponseResponse = {
  description: 'Customers',
  content: { 'application/json': { schema: CreateCustomerResponseSchema } },
}

const CreateInvoiceItemResponseResponse = {
  description: 'InvoiceItems',
  content: { 'application/json': { schema: CreateInvoiceItemResponseSchema } },
}

const CreateInvoiceResponseResponse = {
  description: 'Invoice created',
  content: { 'application/json': { schema: CreateInvoiceResponseSchema } },
}

const CreateJournalEntryResponseResponse = {
  description: 'JournalEntries',
  content: { 'application/json': { schema: CreateJournalEntryResponseSchema } },
}

const CreateLedgerAccountResponseResponse = {
  description: 'LedgerAccount created',
  content: { 'application/json': { schema: CreateLedgerAccountResponseSchema } },
}

const CreatePaymentResponseResponse = {
  description: 'Payment created',
  content: { 'application/json': { schema: CreatePaymentResponseSchema } },
}

const CreateSupplierResponseResponse = {
  description: 'Supplier created',
  content: { 'application/json': { schema: CreateSupplierResponseSchema } },
}

const CreateTaxRateResponseResponse = {
  description: 'TaxRate created',
  content: { 'application/json': { schema: CreateTaxRateResponseSchema } },
}

const DeleteBillResponseResponse = {
  description: 'Bill deleted',
  content: { 'application/json': { schema: DeleteBillResponseSchema } },
}

const DeleteCreditNoteResponseResponse = {
  description: 'Credit Note deleted',
  content: { 'application/json': { schema: DeleteCreditNoteResponseSchema } },
}

const DeleteCustomerResponseResponse = {
  description: 'Customers',
  content: { 'application/json': { schema: DeleteCustomerResponseSchema } },
}

const DeleteInvoiceItemResponseResponse = {
  description: 'InvoiceItems',
  content: { 'application/json': { schema: DeleteTaxRateResponseSchema } },
}

const DeleteInvoiceResponseResponse = {
  description: 'Invoice deleted',
  content: { 'application/json': { schema: DeleteInvoiceResponseSchema } },
}

const DeleteJournalEntryResponseResponse = {
  description: 'JournalEntries',
  content: { 'application/json': { schema: DeleteJournalEntryResponseSchema } },
}

const DeleteLedgerAccountResponseResponse = {
  description: 'LedgerAccount deleted',
  content: { 'application/json': { schema: DeleteLedgerAccountResponseSchema } },
}

const DeletePaymentResponseResponse = {
  description: 'Payment deleted',
  content: { 'application/json': { schema: DeletePaymentResponseSchema } },
}

const DeleteSupplierResponseResponse = {
  description: 'Supplier deleted',
  content: { 'application/json': { schema: DeleteSupplierResponseSchema } },
}

const DeleteTaxRateResponseResponse = {
  description: 'TaxRates deleted',
  content: { 'application/json': { schema: DeleteTaxRateResponseSchema } },
}

const GetBalanceSheetResponseResponse = {
  description: 'BalanceSheet',
  content: { 'application/json': { schema: GetBalanceSheetResponseSchema } },
}

const GetBillResponseResponse = {
  description: 'Bill',
  content: { 'application/json': { schema: GetBillResponseSchema } },
}

const GetBillsResponseResponse = {
  description: 'Bills',
  content: { 'application/json': { schema: GetBillsResponseSchema } },
}

const GetCompanyInfoResponseResponse = {
  description: 'CompanyInfo',
  content: { 'application/json': { schema: GetCompanyInfoResponseSchema } },
}

const GetCreditNoteResponseResponse = {
  description: 'Credit Note',
  content: { 'application/json': { schema: GetCreditNoteResponseSchema } },
}

const GetCreditNotesResponseResponse = {
  description: 'Credit Notes',
  content: { 'application/json': { schema: GetCreditNotesResponseSchema } },
}

const GetCustomerResponseResponse = {
  description: 'Customer',
  content: { 'application/json': { schema: GetCustomerResponseSchema } },
}

const GetCustomersResponseResponse = {
  description: 'Customers',
  content: { 'application/json': { schema: GetCustomersResponseSchema } },
}

const GetInvoiceItemResponseResponse = {
  description: 'InvoiceItems',
  content: { 'application/json': { schema: GetInvoiceItemResponseSchema } },
}

const GetInvoiceItemsResponseResponse = {
  description: 'InvoiceItems',
  content: { 'application/json': { schema: GetInvoiceItemsResponseSchema } },
}

const GetInvoiceResponseResponse = {
  description: 'Invoice',
  content: { 'application/json': { schema: GetInvoiceResponseSchema } },
}

const GetInvoicesResponseResponse = {
  description: 'Invoices',
  content: { 'application/json': { schema: GetInvoicesResponseSchema } },
}

const GetJournalEntriesResponseResponse = {
  description: 'JournalEntry',
  content: { 'application/json': { schema: GetJournalEntriesResponseSchema } },
}

const GetJournalEntryResponseResponse = {
  description: 'JournalEntries',
  content: { 'application/json': { schema: GetJournalEntryResponseSchema } },
}

const GetLedgerAccountResponseResponse = {
  description: 'LedgerAccount',
  content: { 'application/json': { schema: GetLedgerAccountResponseSchema } },
}

const GetLedgerAccountsResponseResponse = {
  description: 'LedgerAccounts',
  content: { 'application/json': { schema: GetLedgerAccountsResponseSchema } },
}

const GetPaymentResponseResponse = {
  description: 'Payment',
  content: { 'application/json': { schema: GetPaymentResponseSchema } },
}

const GetPaymentsResponseResponse = {
  description: 'Payments',
  content: { 'application/json': { schema: GetPaymentsResponseSchema } },
}

const GetProfitAndLossResponseResponse = {
  description: 'Profit & Loss Report',
  content: { 'application/json': { schema: GetProfitAndLossResponseSchema } },
}

const GetSupplierResponseResponse = {
  description: 'Supplier',
  content: { 'application/json': { schema: GetSupplierResponseSchema } },
}

const GetSuppliersResponseResponse = {
  description: 'Suppliers',
  content: { 'application/json': { schema: GetSuppliersResponseSchema } },
}

const GetTaxRateResponseResponse = {
  description: 'TaxRate',
  content: { 'application/json': { schema: GetTaxRateResponseSchema } },
}

const GetTaxRatesResponseResponse = {
  description: 'TaxRates',
  content: { 'application/json': { schema: GetTaxRatesResponseSchema } },
}

const JournalEntryResponse = {
  description: 'JournalEntries',
  content: { 'application/json': { schema: JournalEntrySchema } },
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

const UpdateBillResponseResponse = {
  description: 'Bill Updated',
  content: { 'application/json': { schema: UpdateBillResponseSchema } },
}

const UpdateCreditNoteResponseResponse = {
  description: 'Credit Note updated',
  content: { 'application/json': { schema: UpdateCreditNoteResponseSchema } },
}

const UpdateCustomerResponseResponse = {
  description: 'Customers',
  content: { 'application/json': { schema: UpdateCustomerResponseSchema } },
}

const UpdateInvoiceItemResponseResponse = {
  description: 'InvoiceItems',
  content: { 'application/json': { schema: UpdateInvoiceItemsResponseSchema } },
}

const UpdateInvoiceResponseResponse = {
  description: 'Invoice updated',
  content: { 'application/json': { schema: UpdateInvoiceResponseSchema } },
}

const UpdateJournalEntryResponseResponse = {
  description: 'JournalEntries',
  content: { 'application/json': { schema: UpdateJournalEntryResponseSchema } },
}

const UpdateLedgerAccountResponseResponse = {
  description: 'LedgerAccount updated',
  content: { 'application/json': { schema: UpdateLedgerAccountResponseSchema } },
}

const UpdatePaymentResponseResponse = {
  description: 'Payment Updated',
  content: { 'application/json': { schema: UpdatePaymentResponseSchema } },
}

const UpdateSupplierResponseResponse = {
  description: 'Supplier updated',
  content: { 'application/json': { schema: UpdateSupplierResponseSchema } },
}

const UpdateTaxRateResponseResponse = {
  description: 'TaxRate updated',
  content: { 'application/json': { schema: UpdateTaxRateResponseSchema } },
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

const BalanceSheetFilterParamsSchema = BalanceSheetFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/BalanceSheetFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const BillsSortParamsSchema = BillsSortSchema.openapi({
  param: {
    description: 'Apply sorting',
    explode: true,
    in: 'query',
    name: 'sort',
    schema: { $ref: '#/components/schemas/BillsSort' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

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

const CustomersFilterParamsSchema = CustomersFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/CustomersFilter' },
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

const InvoiceItemsFilterParamsSchema = InvoiceItemsFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/InvoiceItemsFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const InvoicesSortParamsSchema = InvoicesSortSchema.openapi({
  param: {
    description: 'Apply sorting',
    explode: true,
    in: 'query',
    name: 'sort',
    schema: { $ref: '#/components/schemas/InvoicesSort' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

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

const PassThroughParamsSchema = PassThroughQuerySchema.openapi({
  param: {
    description:
      'Optional unmapped key/values that will be passed through to downstream as query parameters',
    explode: true,
    in: 'query',
    name: 'pass_through',
    schema: { $ref: '#/components/schemas/PassThroughQuery' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const ProfitAndLossFilterParamsSchema = ProfitAndLossFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/ProfitAndLossFilter' },
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

const SuppliersFilterParamsSchema = SuppliersFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/SuppliersFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const TaxRatesFilterParamsSchema = z
  .strictObject({
    assets: z
      .preprocess(
        ((read) => (val: unknown) => {
          const result = read.safeParse(val)
          return result.success ? result.data : val
        })(z.stringbool()),
        z.boolean(),
      )
      .exactOptional()
      .openapi({
        description: 'Boolean to describe if tax rate can be used for asset accounts',
        example: true,
        title: 'Assets',
      }),
    equity: z
      .preprocess(
        ((read) => (val: unknown) => {
          const result = read.safeParse(val)
          return result.success ? result.data : val
        })(z.stringbool()),
        z.boolean(),
      )
      .exactOptional()
      .openapi({
        description: 'Boolean to describe if tax rate can be used for equity accounts',
        example: true,
        title: 'Equity',
      }),
    expenses: z
      .preprocess(
        ((read) => (val: unknown) => {
          const result = read.safeParse(val)
          return result.success ? result.data : val
        })(z.stringbool()),
        z.boolean(),
      )
      .exactOptional()
      .openapi({
        description: 'Boolean to describe if tax rate can be used for expense accounts',
        example: true,
        title: 'Expenses',
      }),
    liabilities: z
      .preprocess(
        ((read) => (val: unknown) => {
          const result = read.safeParse(val)
          return result.success ? result.data : val
        })(z.stringbool()),
        z.boolean(),
      )
      .exactOptional()
      .openapi({
        description: 'Boolean to describe if tax rate can be used for liability accounts',
        example: true,
        title: 'Liabilities',
      }),
    revenue: z
      .preprocess(
        ((read) => (val: unknown) => {
          const result = read.safeParse(val)
          return result.success ? result.data : val
        })(z.stringbool()),
        z.boolean(),
      )
      .exactOptional()
      .openapi({
        description: 'Boolean to describe if tax rate can be used for revenue accounts',
        example: true,
        title: 'Revenue',
      }),
  })
  .exactOptional()
  .openapi({
    param: {
      description: 'Apply filters',
      explode: true,
      in: 'query',
      name: 'filter',
      schema: {
        additionalProperties: false,
        example: { assets: true, equity: true, expenses: true, liabilities: true, revenue: true },
        properties: {
          assets: {
            description: 'Boolean to describe if tax rate can be used for asset accounts',
            example: true,
            title: 'Assets',
            type: 'boolean',
          },
          equity: {
            description: 'Boolean to describe if tax rate can be used for equity accounts',
            example: true,
            title: 'Equity',
            type: 'boolean',
          },
          expenses: {
            description: 'Boolean to describe if tax rate can be used for expense accounts',
            example: true,
            title: 'Expenses',
            type: 'boolean',
          },
          liabilities: {
            description: 'Boolean to describe if tax rate can be used for liability accounts',
            example: true,
            title: 'Liabilities',
            type: 'boolean',
          },
          revenue: {
            description: 'Boolean to describe if tax rate can be used for revenue accounts',
            example: true,
            title: 'Revenue',
            type: 'boolean',
          },
        },
        type: 'object',
        'x-apideck-schema-id': 'TaxRatesFilter',
        'x-graphql-type-name': 'TaxRatesFilter',
      },
      style: 'deepObject',
      required: false,
    },
    example: { assets: true, equity: true, expenses: true, liabilities: true, revenue: true },
    'x-apideck-schema-id': 'TaxRatesFilter',
    'x-graphql-type-name': 'TaxRatesFilter',
    required: [],
  })

const ApiKeySecurityScheme = {
  description:
    'To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getAccountingBalanceSheetRoute = createRoute({
  method: 'get',
  path: '/accounting/balance-sheet',
  tags: ['Balance Sheet'],
  summary: 'Get BalanceSheet',
  description: 'Get BalanceSheet',
  operationId: 'balanceSheetOne',
  request: {
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
        const deep: string[] = ['pass_through', 'filter']
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
          pass_through: PassThroughParamsSchema,
          filter: BalanceSheetFilterParamsSchema,
          raw: RawParamsSchema,
        }),
      ),
  },
  responses: {
    200: GetBalanceSheetResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingBillsRoute = createRoute({
  method: 'get',
  path: '/accounting/bills',
  tags: ['Bills'],
  summary: 'List Bills',
  description: 'List Bills',
  operationId: 'billsAll',
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
        const deep: string[] = ['sort', 'pass_through']
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
          sort: BillsSortParamsSchema,
          pass_through: PassThroughParamsSchema,
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
    200: GetBillsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAccountingBillsRoute = createRoute({
  method: 'post',
  path: '/accounting/bills',
  tags: ['Bills'],
  summary: 'Create Bill',
  description: 'Create Bill',
  operationId: 'billsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: BillSchema } }, required: true },
  },
  responses: {
    201: CreateBillResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingBillsIdRoute = createRoute({
  method: 'get',
  path: '/accounting/bills/{id}',
  tags: ['Bills'],
  summary: 'Get Bill',
  description: 'Get Bill',
  operationId: 'billsOne',
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
    200: GetBillResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteAccountingBillsIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/bills/{id}',
  tags: ['Bills'],
  summary: 'Delete Bill',
  description: 'Delete Bill',
  operationId: 'billsDelete',
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
    200: DeleteBillResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchAccountingBillsIdRoute = createRoute({
  method: 'patch',
  path: '/accounting/bills/{id}',
  tags: ['Bills'],
  summary: 'Update Bill',
  description: 'Update Bill',
  operationId: 'billsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: BillSchema } }, required: true },
  },
  responses: {
    200: UpdateBillResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingCompanyInfoRoute = createRoute({
  method: 'get',
  path: '/accounting/company-info',
  tags: ['Company Info'],
  summary: 'Get company info',
  description: 'Get company info',
  operationId: 'companyInfoOne',
  request: {
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetCompanyInfoResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingCreditNotesRoute = createRoute({
  method: 'get',
  path: '/accounting/credit-notes',
  tags: ['Credit Notes'],
  summary: 'List Credit Notes',
  description: 'List Credit Notes',
  operationId: 'creditNotesAll',
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
        const deep: string[] = ['pass_through']
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
          pass_through: PassThroughParamsSchema,
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
    200: GetCreditNotesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAccountingCreditNotesRoute = createRoute({
  method: 'post',
  path: '/accounting/credit-notes',
  tags: ['Credit Notes'],
  summary: 'Create Credit Note',
  description: 'Create Credit Note',
  operationId: 'creditNotesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: CreditNoteSchema } }, required: true },
  },
  responses: {
    201: CreateCreditNoteResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingCreditNotesIdRoute = createRoute({
  method: 'get',
  path: '/accounting/credit-notes/{id}',
  tags: ['Credit Notes'],
  summary: 'Get Credit Note',
  description: 'Get Credit Note',
  operationId: 'creditNotesOne',
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
    200: GetCreditNoteResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteAccountingCreditNotesIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/credit-notes/{id}',
  tags: ['Credit Notes'],
  summary: 'Delete Credit Note',
  description: 'Delete Credit Note',
  operationId: 'creditNotesDelete',
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
    200: DeleteCreditNoteResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchAccountingCreditNotesIdRoute = createRoute({
  method: 'patch',
  path: '/accounting/credit-notes/{id}',
  tags: ['Credit Notes'],
  summary: 'Update Credit Note',
  description: 'Update Credit Note',
  operationId: 'creditNotesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: CreditNoteSchema } }, required: true },
  },
  responses: {
    200: UpdateCreditNoteResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingCustomersRoute = createRoute({
  method: 'get',
  path: '/accounting/customers',
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
        const deep: string[] = ['filter', 'pass_through']
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
          pass_through: PassThroughParamsSchema,
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
    200: GetCustomersResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAccountingCustomersRoute = createRoute({
  method: 'post',
  path: '/accounting/customers',
  tags: ['Customers'],
  summary: 'Create Customer',
  description: 'Create Customer',
  operationId: 'customersAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: AccountingCustomerSchema } }, required: true },
  },
  responses: {
    201: CreateCustomerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingCustomersIdRoute = createRoute({
  method: 'get',
  path: '/accounting/customers/{id}',
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
    200: GetCustomerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteAccountingCustomersIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/customers/{id}',
  tags: ['Customers'],
  summary: 'Delete Customer',
  description: 'Delete Customer',
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
    200: DeleteCustomerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchAccountingCustomersIdRoute = createRoute({
  method: 'patch',
  path: '/accounting/customers/{id}',
  tags: ['Customers'],
  summary: 'Update Customer',
  description: 'Update Customer',
  operationId: 'customersUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: AccountingCustomerSchema } }, required: true },
  },
  responses: {
    200: UpdateCustomerResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingInvoiceItemsRoute = createRoute({
  method: 'get',
  path: '/accounting/invoice-items',
  tags: ['Invoice Items'],
  summary: 'List Invoice Items',
  description: 'List Invoice Items',
  operationId: 'invoiceItemsAll',
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
        const deep: string[] = ['filter', 'pass_through']
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
          filter: InvoiceItemsFilterParamsSchema,
          pass_through: PassThroughParamsSchema,
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
    200: GetInvoiceItemsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAccountingInvoiceItemsRoute = createRoute({
  method: 'post',
  path: '/accounting/invoice-items',
  tags: ['Invoice Items'],
  summary: 'Create Invoice Item',
  description: 'Create Invoice Item',
  operationId: 'invoiceItemsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: InvoiceItemSchema } }, required: true },
  },
  responses: {
    201: CreateInvoiceItemResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingInvoiceItemsIdRoute = createRoute({
  method: 'get',
  path: '/accounting/invoice-items/{id}',
  tags: ['Invoice Items'],
  summary: 'Get Invoice Item',
  description: 'Get Invoice Item',
  operationId: 'invoiceItemsOne',
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
    200: GetInvoiceItemResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteAccountingInvoiceItemsIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/invoice-items/{id}',
  tags: ['Invoice Items'],
  summary: 'Delete Invoice Item',
  description: 'Delete Invoice Item',
  operationId: 'invoiceItemsDelete',
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
    200: DeleteInvoiceItemResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchAccountingInvoiceItemsIdRoute = createRoute({
  method: 'patch',
  path: '/accounting/invoice-items/{id}',
  tags: ['Invoice Items'],
  summary: 'Update Invoice Item',
  description: 'Update Invoice Item',
  operationId: 'invoiceItemsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: InvoiceItemSchema } }, required: true },
  },
  responses: {
    200: UpdateInvoiceItemResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingInvoicesRoute = createRoute({
  method: 'get',
  path: '/accounting/invoices',
  tags: ['Invoices'],
  summary: 'List Invoices',
  description: 'List Invoices',
  operationId: 'invoicesAll',
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
        const deep: string[] = ['sort', 'pass_through']
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
          sort: InvoicesSortParamsSchema,
          pass_through: PassThroughParamsSchema,
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
    200: GetInvoicesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAccountingInvoicesRoute = createRoute({
  method: 'post',
  path: '/accounting/invoices',
  tags: ['Invoices'],
  summary: 'Create Invoice',
  description: 'Create Invoice',
  operationId: 'invoicesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: InvoiceSchema } }, required: true },
  },
  responses: {
    201: CreateInvoiceResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingInvoicesIdRoute = createRoute({
  method: 'get',
  path: '/accounting/invoices/{id}',
  tags: ['Invoices'],
  summary: 'Get Invoice',
  description: 'Get Invoice',
  operationId: 'invoicesOne',
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
    200: GetInvoiceResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteAccountingInvoicesIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/invoices/{id}',
  tags: ['Invoices'],
  summary: 'Delete Invoice',
  description: 'Delete Invoice',
  operationId: 'invoicesDelete',
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
    200: DeleteInvoiceResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchAccountingInvoicesIdRoute = createRoute({
  method: 'patch',
  path: '/accounting/invoices/{id}',
  tags: ['Invoices'],
  summary: 'Update Invoice',
  description: 'Update Invoice',
  operationId: 'invoicesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: InvoiceSchema } }, required: true },
  },
  responses: {
    200: UpdateInvoiceResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingJournalEntriesRoute = createRoute({
  method: 'get',
  path: '/accounting/journal-entries',
  tags: ['Journal Entries'],
  summary: 'List Journal Entries',
  description: 'List Journal Entries',
  operationId: 'journalEntriesAll',
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
        const deep: string[] = ['pass_through']
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
          pass_through: PassThroughParamsSchema,
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
    200: GetJournalEntriesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAccountingJournalEntriesRoute = createRoute({
  method: 'post',
  path: '/accounting/journal-entries',
  tags: ['Journal Entries'],
  summary: 'Create Journal Entry',
  description: 'Create Journal Entry',
  operationId: 'journalEntriesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: JournalEntrySchema } }, required: true },
  },
  responses: {
    201: CreateJournalEntryResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingJournalEntriesIdRoute = createRoute({
  method: 'get',
  path: '/accounting/journal-entries/{id}',
  tags: ['Journal Entries'],
  summary: 'Get Journal Entry',
  description: 'Get Journal Entry',
  operationId: 'journalEntriesOne',
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
    200: GetJournalEntryResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteAccountingJournalEntriesIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/journal-entries/{id}',
  tags: ['Journal Entries'],
  summary: 'Delete Journal Entry',
  description: 'Delete Journal Entry',
  operationId: 'journalEntriesDelete',
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
    200: DeleteJournalEntryResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchAccountingJournalEntriesIdRoute = createRoute({
  method: 'patch',
  path: '/accounting/journal-entries/{id}',
  tags: ['Journal Entries'],
  summary: 'Update Journal Entry',
  description: 'Update Journal Entry',
  operationId: 'journalEntriesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: JournalEntrySchema } }, required: true },
  },
  responses: {
    200: UpdateJournalEntryResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingLedgerAccountsRoute = createRoute({
  method: 'get',
  path: '/accounting/ledger-accounts',
  tags: ['Ledger Accounts'],
  summary: 'List Ledger Accounts',
  description: 'List Ledger Accounts',
  operationId: 'ledgerAccountsAll',
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
        const deep: string[] = ['pass_through']
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
          pass_through: PassThroughParamsSchema,
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
    200: GetLedgerAccountsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAccountingLedgerAccountsRoute = createRoute({
  method: 'post',
  path: '/accounting/ledger-accounts',
  tags: ['Ledger Accounts'],
  summary: 'Create Ledger Account',
  description: 'Create Ledger Account',
  operationId: 'ledgerAccountsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: LedgerAccountSchema } }, required: true },
  },
  responses: {
    201: CreateLedgerAccountResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingLedgerAccountsIdRoute = createRoute({
  method: 'get',
  path: '/accounting/ledger-accounts/{id}',
  tags: ['Ledger Accounts'],
  summary: 'Get Ledger Account',
  description: 'Get Ledger Account',
  operationId: 'ledgerAccountsOne',
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
    200: GetLedgerAccountResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteAccountingLedgerAccountsIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/ledger-accounts/{id}',
  tags: ['Ledger Accounts'],
  summary: 'Delete Ledger Account',
  description: 'Delete Ledger Account',
  operationId: 'ledgerAccountsDelete',
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
    200: DeleteLedgerAccountResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchAccountingLedgerAccountsIdRoute = createRoute({
  method: 'patch',
  path: '/accounting/ledger-accounts/{id}',
  tags: ['Ledger Accounts'],
  summary: 'Update Ledger Account',
  description: 'Update Ledger Account',
  operationId: 'ledgerAccountsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: LedgerAccountSchema } }, required: true },
  },
  responses: {
    200: UpdateLedgerAccountResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingPaymentsRoute = createRoute({
  method: 'get',
  path: '/accounting/payments',
  tags: ['Payments'],
  summary: 'List Payments',
  description: 'List Payments',
  operationId: 'paymentsAll',
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
        const deep: string[] = ['pass_through']
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
          pass_through: PassThroughParamsSchema,
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
    200: GetPaymentsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAccountingPaymentsRoute = createRoute({
  method: 'post',
  path: '/accounting/payments',
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
    body: { content: { 'application/json': { schema: PaymentSchema } }, required: true },
  },
  responses: {
    201: CreatePaymentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingPaymentsIdRoute = createRoute({
  method: 'get',
  path: '/accounting/payments/{id}',
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
    200: GetPaymentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteAccountingPaymentsIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/payments/{id}',
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
    200: DeletePaymentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchAccountingPaymentsIdRoute = createRoute({
  method: 'patch',
  path: '/accounting/payments/{id}',
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
    body: { content: { 'application/json': { schema: PaymentSchema } }, required: true },
  },
  responses: {
    200: UpdatePaymentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingProfitAndLossRoute = createRoute({
  method: 'get',
  path: '/accounting/profit-and-loss',
  tags: ['Profit and Loss'],
  summary: 'Get Profit and Loss',
  description: 'Get Profit and Loss',
  operationId: 'profitAndLossOne',
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
        const deep: string[] = ['filter', 'pass_through']
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
          filter: ProfitAndLossFilterParamsSchema,
          pass_through: PassThroughParamsSchema,
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
    200: GetProfitAndLossResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingSuppliersRoute = createRoute({
  method: 'get',
  path: '/accounting/suppliers',
  tags: ['Suppliers'],
  summary: 'List Suppliers',
  description: 'List Suppliers',
  operationId: 'suppliersAll',
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
        const deep: string[] = ['filter', 'pass_through']
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
          filter: SuppliersFilterParamsSchema,
          pass_through: PassThroughParamsSchema,
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
    200: GetSuppliersResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAccountingSuppliersRoute = createRoute({
  method: 'post',
  path: '/accounting/suppliers',
  tags: ['Suppliers'],
  summary: 'Create Supplier',
  description: 'Create Supplier',
  operationId: 'suppliersAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: SupplierSchema } }, required: true },
  },
  responses: {
    201: CreateSupplierResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingSuppliersIdRoute = createRoute({
  method: 'get',
  path: '/accounting/suppliers/{id}',
  tags: ['Suppliers'],
  summary: 'Get Supplier',
  description: 'Get Supplier',
  operationId: 'suppliersOne',
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
    200: GetSupplierResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteAccountingSuppliersIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/suppliers/{id}',
  tags: ['Suppliers'],
  summary: 'Delete Supplier',
  description: 'Delete Supplier',
  operationId: 'suppliersDelete',
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
    200: DeleteSupplierResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchAccountingSuppliersIdRoute = createRoute({
  method: 'patch',
  path: '/accounting/suppliers/{id}',
  tags: ['Suppliers'],
  summary: 'Update Supplier',
  description: 'Update Supplier',
  operationId: 'suppliersUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: SupplierSchema } }, required: true },
  },
  responses: {
    200: UpdateSupplierResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingTaxRatesRoute = createRoute({
  method: 'get',
  path: '/accounting/tax-rates',
  tags: ['Tax Rates'],
  summary: 'List Tax Rates',
  description:
    'List Tax Rates. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Connectors Affected: Quickbooks\n',
  operationId: 'taxRatesAll',
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
        const deep: string[] = ['filter', 'pass_through']
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
          filter: TaxRatesFilterParamsSchema,
          pass_through: PassThroughParamsSchema,
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
    200: GetTaxRatesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postAccountingTaxRatesRoute = createRoute({
  method: 'post',
  path: '/accounting/tax-rates',
  tags: ['Tax Rates'],
  summary: 'Create Tax Rate',
  description: 'Create Tax Rate',
  operationId: 'taxRatesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: TaxRateSchema } }, required: true },
  },
  responses: {
    201: CreateTaxRateResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getAccountingTaxRatesIdRoute = createRoute({
  method: 'get',
  path: '/accounting/tax-rates/{id}',
  tags: ['Tax Rates'],
  summary: 'Get Tax Rate',
  description:
    'Get Tax Rate. Note: Not all connectors return the actual rate/percentage value. In this case, only the tax code or reference is returned. Support will soon be added to return the actual rate/percentage by doing additional calls in the background to provide the full view of a given tax rate. Connectors Affected: Quickbooks\n',
  operationId: 'taxRatesOne',
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
    200: GetTaxRateResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteAccountingTaxRatesIdRoute = createRoute({
  method: 'delete',
  path: '/accounting/tax-rates/{id}',
  tags: ['Tax Rates'],
  summary: 'Delete Tax Rate',
  description: 'Delete Tax Rate',
  operationId: 'taxRatesDelete',
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
    200: DeleteTaxRateResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchAccountingTaxRatesIdRoute = createRoute({
  method: 'patch',
  path: '/accounting/tax-rates/{id}',
  tags: ['Tax Rates'],
  summary: 'Update Tax Rate',
  description: 'Update Tax Rate',
  operationId: 'taxRatesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: TaxRateSchema } }, required: true },
  },
  responses: {
    200: UpdateTaxRateResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

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

const BenefitSchema = z
  .object({
    employee_deduction: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount deducted for benefit.', example: 142.94 }),
    employer_contribution: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount of employer contribution.', example: 141.14 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the benefit.', example: 'Health Insurance' }),
  })
  .openapi({
    'x-apideck-schema-id': 'Benefit',
    'x-apideck-weights': {
      employee_deduction: 'high',
      employer_contribution: 'high',
      name: 'critical',
    },
    required: [],
  })
  .openapi('Benefit')

const CompanyIdSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The unique identifier of the company.',
    example: '23456',
    title: 'Company ID',
  })
  .openapi('CompanyId')

const CompanyNameSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The name of the company.', example: 'SpaceX', title: 'Company name' })
  .openapi('CompanyName')

const DeductionSchema = z
  .object({
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount deducted.', example: 10.97 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the deduction.', example: 'Company Car' }),
  })
  .openapi({
    'x-apideck-schema-id': 'Deduction',
    'x-apideck-weights': { amount: 'critical', name: 'critical' },
    required: [],
  })
  .openapi('Deduction')

const IdSchema = z
  .string()
  .openapi({
    description: 'A unique identifier for an object.',
    example: '12345',
    readOnly: true,
    title: 'ID',
  })
  .openapi('Id')

const TaxSchema = z
  .object({
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount of the tax.', example: 1.97 }),
    employer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Paid by employer.', example: false }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the tax.', example: 'CA State Income Tax' }),
  })
  .openapi({
    'x-apideck-schema-id': 'Tax',
    'x-apideck-weights': { amount: 'high', employer: 'high', name: 'high' },
    required: [],
  })
  .openapi('Tax')

const CompensationSchema = z
  .strictObject({
    benefits: z
      .array(BenefitSchema)
      .exactOptional()
      .openapi({ description: 'An array of employee benefits for the pay period.' }),
    deductions: z
      .array(DeductionSchema)
      .exactOptional()
      .openapi({ description: 'An array of employee deductions for the pay period.' }),
    employee_id: IdSchema,
    gross_pay: z
      .number()
      .exactOptional()
      .openapi({
        description: "The employee's gross pay. Only available when payroll has been processed",
        example: 3000,
      }),
    net_pay: z
      .number()
      .exactOptional()
      .openapi({
        description: "The employee's net pay. Only available when payroll has been processed",
        example: 2199.93,
      }),
    taxes: z
      .array(TaxSchema)
      .exactOptional()
      .openapi({ description: 'An array of employer and employee taxes for the pay period.' }),
  })
  .openapi({
    required: ['employee_id'],
    'x-apideck-schema-id': 'Compensation',
    'x-apideck-weights': {
      benefits: 'high',
      deductions: 'high',
      employee_id: 'critical',
      gross_pay: 'critical',
      net_pay: 'high',
      taxes: 'high',
    },
  })
  .openapi('Compensation')

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

const CreateDepartmentResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Departments' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'workday' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateDepartmentResponse',
  })
  .openapi('CreateDepartmentResponse')

const CreateEmployeeResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Employees' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateEmployeeResponse',
  })
  .openapi('CreateEmployeeResponse')

const CreateHrisCompanyResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateHrisCompanyResponse',
  })
  .openapi('CreateHrisCompanyResponse')

const CreateTimeOffRequestResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'time-off-requests' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'bamboohr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'] })
  .openapi('CreateTimeOffRequestResponse')

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

const DeleteDepartmentResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Departments' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'workday' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteDepartmentResponse',
  })
  .openapi('DeleteDepartmentResponse')

const DeleteEmployeeResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Employees' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteEmployeeResponse',
  })
  .openapi('DeleteEmployeeResponse')

const DeleteHrisCompanyResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteHrisCompanyResponse',
  })
  .openapi('DeleteHrisCompanyResponse')

const DeleteTimeOffRequestResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'time-off-requests' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'bamboohr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'] })
  .openapi('DeleteTimeOffRequestResponse')

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

const PaymentUnitSchema = z
  .enum(['hour', 'week', 'month', 'year', 'paycheck'])
  .openapi({
    description: 'Unit of measurement for employee compensation.',
    example: 'year',
    title: 'Payment Unit',
    'x-apideck-enum-id': 'payment_unit',
  })
  .openapi('PaymentUnit')

const EmployeeNumberSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      'An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.',
    example: '123456-AB',
    title: 'Employee number',
  })
  .openapi('EmployeeNumber')

const EmploymentStatusSchema = z
  .enum(['active', 'inactive', 'terminated', 'other'])
  .nullable()
  .openapi({
    description:
      'The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.',
    example: 'active',
    title: 'Employment status',
    'x-apideck-enum-id': 'employees.employment_status',
    'x-graphql-type-name': 'EmployeeEmploymentStatus',
  })
  .openapi('EmploymentStatus')

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

const TitleSchema = z
  .string()
  .nullable()
  .openapi({ description: 'The job title of the person.', example: 'CEO', title: 'Job title' })
  .openapi('Title')

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

const PhotoUrlSchema = z
  .string()
  .nullable()
  .openapi({
    description: 'The URL of the photo of a person.',
    example: 'https://unavatar.io/elon-musk',
    title: 'Photo URL',
  })
  .openapi('PhotoUrl')

const EmployeeSchema = z
  .strictObject({
    addresses: z.array(AddressSchema).exactOptional(),
    birthday: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date of birth of the person.',
        example: '2000-08-12',
        title: 'Birth Date',
      }),
    company_id: CompanyIdSchema.exactOptional(),
    company_name: CompanyNameSchema.exactOptional(),
    compensations: z
      .array(
        z
          .object({
            currency: CurrencySchema.exactOptional(),
            effective_date: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The date on which a change to an employee's compensation takes effect.",
                example: '2020-08-12',
                readOnly: false,
                title: 'Effective date',
              }),
            flsa_status: z
              .enum(['exempt', 'salaried-nonexempt', 'nonexempt', 'owner'])
              .exactOptional()
              .openapi({
                description: 'The FLSA status for this compensation.',
                readOnly: false,
                'x-apideck-enum-id': 'employees.compensations.flsa_status',
              }),
            id: IdSchema.exactOptional(),
            job_id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The ID of the job to which the compensation belongs.',
                example: '12345',
                readOnly: true,
                title: 'Job ID',
              }),
            payment_unit: PaymentUnitSchema.exactOptional(),
            rate: z
              .number()
              .exactOptional()
              .openapi({
                description: 'The amount paid per payment unit.',
                example: 72000,
                readOnly: false,
                title: 'Rate',
              }),
          })
          .openapi({
            example: {
              effective_date: '2021-06-11',
              flsa_status: 'nonexempt',
              id: '3404301363494309004',
              job_id: '3490439050957906679',
              payment_unit: 'hour',
              rate: 50,
            },
            'x-apideck-weights': {
              currency: 'high',
              effective_date: 'low',
              flsa_status: 'edge-case',
              id: 'critical',
              job_id: 'medium',
              payment_unit: 'medium',
              rate: 'high',
            },
            required: [],
          }),
      )
      .exactOptional(),
    country_of_birth: z
      .string()
      .length(2)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Country code according to ISO 3166-1 alpha-2.',
        example: 'US',
        title: 'Country Code',
      }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    custom_fields: z.array(CustomFieldSchema).exactOptional(),
    deceased_on: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The date the person deceased.',
        example: '2000-08-12',
        title: 'Deceased Date',
      }),
    deleted: z.boolean().nullable().exactOptional().openapi({ example: true, title: 'Deleted' }),
    department: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The department the person is currently in. [Deprecated](https://developers.apideck.com/changelog) in favor of the dedicated department_id and department_name field.',
        example: 'R&D',
        title: 'Department',
      }),
    department_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the department ID this employee belongs to.',
        example: '12345',
        title: 'Department ID',
      }),
    department_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Name of the department this employee belongs to.',
        example: '12345',
        title: 'Department Name',
      }),
    description: DescriptionSchema.exactOptional(),
    dietary_preference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: "Indicate the employee's dietary preference.",
        example: 'Veggie',
        title: 'Dietary preference',
      }),
    direct_reports: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The direct reports refer to the individuals who report directly to a person in the organizational hierarchy.',
        example: ['a0d636c6-43b3-4bde-8c70-85b707d992f4', 'a98lfd96-43b3-4bde-8c70-85b707d992e6'],
        title: 'Direct reports',
      }),
    display_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name used to display the employee, often a combination of their first and last names.',
        example: 'Technoking',
        title: 'Display name',
      }),
    division: DivisionSchema.exactOptional(),
    division_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the division this employee belongs to.',
        example: '12345',
        title: 'Division ID',
      }),
    emails: z.array(EmailSchema).exactOptional(),
    employee_number: EmployeeNumberSchema.exactOptional(),
    employment_end_date: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An End Date is the date that the employee ended working at the company',
        example: '2028-10-26',
        title: 'Employee end date',
      }),
    employment_role: z
      .object({
        sub_type: z
          .enum(['full_time', 'part_time', 'hourly'])
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The work schedule of the employee.',
            title: 'Employment sub type',
            'x-apideck-enum-id': 'employees.employment_role.sub_type',
          }),
        type: z
          .enum(['contractor', 'employee', 'freelance', 'temp', 'internship', 'other'])
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The type of employment relationship the employee has with the organization.',
            title: 'Employment type',
            'x-apideck-enum-id': 'employees.employment_role.type',
          }),
      })
      .exactOptional()
      .openapi({ 'x-apideck-weights': { sub_type: 'medium', type: 'critical' }, required: [] }),
    employment_start_date: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A Start Date is the date that the employee started working at the company',
        example: '2021-10-26',
        title: 'Employee start date',
      }),
    employment_status: EmploymentStatusSchema.exactOptional(),
    first_name: FirstNameSchema.exactOptional(),
    food_allergies: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: "Indicate the employee's food allergies.",
        example: ['No allergies'],
        title: 'Food allergies',
      }),
    gender: GenderSchema.exactOptional(),
    id: IdSchema,
    initials: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The initials of the person, usually derived from their first, middle, and last names.',
        example: 'EM',
        title: 'Initials',
      }),
    jobs: z
      .array(
        z
          .object({
            compensation_rate: z
              .number()
              .exactOptional()
              .openapi({
                description: 'The rate of pay for the employee in their current job role.',
                example: 72000,
                title: 'The compensation rate of the job.',
              }),
            currency: CurrencySchema.exactOptional(),
            employee_id: IdSchema.exactOptional(),
            end_date: z.iso
              .date()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The date on which the employee leaves or is expected to leave their current job role.',
                example: '2020-08-12',
                title: 'The end date of the job.',
              }),
            hired_at: z.iso
              .date()
              .nullable()
              .exactOptional()
              .openapi({
                description: 'The date on which the employee was hired by the organization',
                example: '2020-08-12',
                title: 'Hired date',
              }),
            id: IdSchema.exactOptional(),
            is_primary: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description: "Indicates whether this the employee's primary job.",
                example: true,
                title: 'Primary',
              }),
            location: AddressSchema.exactOptional(),
            payment_unit: PaymentUnitSchema.exactOptional(),
            role: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The position and responsibilities of the person within the organization.',
                example: 'Sales',
                title: 'Job role',
              }),
            start_date: z.iso
              .date()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The date on which the employee starts working in their current job role.',
                example: '2020-08-12',
                title: 'The start date of the job.',
              }),
            title: TitleSchema.exactOptional(),
          })
          .openapi({
            'x-apideck-weights': {
              compensation_rate: 'medium',
              currency: 'medium',
              employee_id: 'edge-case',
              end_date: 'high',
              hired_at: 'medium',
              id: 'critical',
              is_primary: 'medium',
              location: 'medium',
              payment_unit: 'medium',
              role: 'medium',
              start_date: 'high',
              title: 'critical',
            },
            required: [],
          }),
      )
      .exactOptional(),
    languages: z.array(LanguageSchema).exactOptional(),
    last_name: LastNameSchema.exactOptional(),
    leaving_reason: z
      .enum(['dismissed', 'resigned', 'redundancy', 'other'])
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The reason because the employment ended.',
        example: 'resigned',
        'x-apideck-enum-id': 'employees.leaving_reason',
      }),
    manager: z
      .object({
        email: z
          .email()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'The email address of the manager.',
            example: 'elon@musk.com',
            title: 'Email address',
          }),
        employment_status: EmploymentStatusSchema.exactOptional(),
        first_name: FirstNameSchema.exactOptional(),
        id: IdSchema.exactOptional(),
        last_name: LastNameSchema.exactOptional(),
        name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The name of the manager, often a combination of their first and last names.',
            example: 'Elon Musk',
            title: 'Manager name',
          }),
      })
      .exactOptional()
      .openapi({
        'x-apideck-weights': {
          email: 'medium',
          first_name: 'medium',
          id: 'critical',
          last_name: 'medium',
          name: 'medium',
        },
        required: [],
      }),
    marital_status: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The marital status of the employee.',
        example: 'married',
        title: 'Marital status',
      }),
    middle_name: MiddleNameSchema.exactOptional(),
    nationalities: z
      .array(
        z
          .string()
          .nullable()
          .openapi({
            description:
              'The nationality of the person, represented as a two-letter country code according to ISO 3166-1 alpha-2.',
            example: 'US',
            title: 'Nationality',
          }),
      )
      .exactOptional(),
    partner: z
      .strictObject({
        birthday: z.iso.date().nullable().exactOptional().openapi({ example: '2000-08-12' }),
        deceased_on: z.iso.date().nullable().exactOptional().openapi({ example: '2000-08-12' }),
        first_name: FirstNameSchema.exactOptional(),
        gender: GenderSchema.exactOptional(),
        id: IdSchema.exactOptional(),
        initials: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ example: 'EM', title: 'Initials' }),
        last_name: LastNameSchema.exactOptional(),
        middle_name: MiddleNameSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({
        title: 'Person',
        'x-apideck-schema-id': 'Person',
        'x-apideck-weights': {
          birthday: 'low',
          deceased_on: 'low',
          first_name: 'critical',
          id: 'low',
          initials: 'medium',
          last_name: 'critical',
        },
        required: [],
      }),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    photo_url: PhotoUrlSchema.exactOptional(),
    preferred_language: LanguageSchema.exactOptional(),
    preferred_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name the employee prefers to be addressed by, which may be different from their legal name.',
        example: 'Elon Musk',
        title: 'Preferred name',
      }),
    pronouns: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The preferred pronouns of the person.',
        example: 'she,her',
        title: 'Pronouns',
      }),
    record_url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'https://app.intercom.io/contacts/12345', title: 'Record URL' }),
    row_version: RowVersionSchema.exactOptional(),
    salutation: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: "A formal salutation for the person. For example, 'Mr', 'Mrs'",
        example: 'Mr',
      }),
    social_links: z
      .array(
        z
          .strictObject({
            id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
            type: z.string().nullable().exactOptional().openapi({ example: 'twitter' }),
            url: z.string().min(1).openapi({ example: 'https://www.twitter.com/apideck-io' }),
          })
          .openapi({
            required: ['url'],
            'x-apideck-schema-id': 'SocialLink',
            'x-apideck-weights': { id: 'edge-case', type: 'critical', url: 'critical' },
          }),
      )
      .exactOptional(),
    social_security_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier assigned by the government. This field is considered sensitive information and may be subject to special security and privacy restrictions.',
        example: '123456789',
        title: 'Social Security Number',
      }),
    source: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When the employee is imported as a new hire, this field indicates what system (e.g. the name of the ATS) this employee was imported from.',
        example: 'lever',
        title: 'Source',
      }),
    source_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the employee in the system this employee was imported from (e.g. the ID in the ATS).',
        example: '12345',
        title: 'Source ID',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ example: ['New'], 'x-apideck-schema-id': 'Tags' }),
    tax_code: z.string().nullable().exactOptional().openapi({ example: '1111', title: 'Tax Code' }),
    tax_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '234-32-0000', title: 'Tax ID' }),
    team: z
      .strictObject({
        id: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The unique identifier of the team.', example: '1234' }),
        name: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'The name of the team.', example: 'Full Stack Engineers' }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The team the person is currently in.',
        'x-apideck-schema-id': 'Team',
        required: [],
      }),
    timezone: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The time zone related to the resource. The value is a string containing a standard time zone identifier, e.g. Europe/London.',
        example: 'Europe/London',
        title: 'Timezone',
      }),
    title: TitleSchema.exactOptional(),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
    works_remote: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Indicates if the employee works from a remote location.',
        example: true,
        title: 'Remote',
      }),
  })
  .openapi({
    required: ['id'],
    'x-apideck-schema-id': 'Employee',
    'x-apideck-weights': {
      addresses: 'high',
      birthday: 'high',
      company_id: 'high',
      company_name: 'medium',
      compensations: 'medium',
      country_of_birth: 'high',
      created_at: 'medium',
      created_by: 'edge-case',
      custom_fields: 'edge-case',
      deceased_on: 'low',
      deleted: 'medium',
      department: 'medium',
      description: 'edge-case',
      dietary_preference: 'edge-case',
      direct_reports: 'edge-case',
      display_name: 'edge-case',
      division: 'medium',
      emails: 'high',
      employee_number: 'high',
      employment_end_date: 'high',
      employment_role: 'high',
      employment_start_date: 'high',
      employment_status: 'high',
      first_name: 'critical',
      food_allergies: 'edge-case',
      gender: 'high',
      id: 'medium',
      initials: 'low',
      jobs: 'high',
      languages: 'low',
      last_name: 'critical',
      leaving_reason: 'edge-case',
      manager: 'medium',
      marital_status: 'medium',
      middle_name: 'medium',
      nationalities: 'high',
      partner: 'low',
      phone_numbers: 'high',
      photo_url: 'medium',
      preferred_language: 'high',
      preferred_name: 'medium',
      pronouns: 'medium',
      row_version: 'edge-case',
      salutation: 'medium',
      social_links: 'edge-case',
      social_security_number: 'edge-case',
      source: 'edge-case',
      source_id: 'edge-case',
      tags: 'low',
      tax_code: 'edge-case',
      tax_id: 'edge-case',
      team: 'medium',
      timezone: 'low',
      title: 'critical',
      updated_at: 'high',
      updated_by: 'edge-case',
      works_remote: 'low',
    },
  })
  .openapi('Employee')

const PayrollTotalsSchema = z
  .object({
    check_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total check amount for the payroll.', example: 27966.23 }),
    company_debit: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total company debit for the payroll.', example: 27992.49 }),
    employee_benefit_deductions: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total amount of employee deducted benefits for the payroll.',
        example: 0,
      }),
    employee_taxes: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total amount of employee paid taxes for the payroll.',
        example: 6616.39,
      }),
    employer_benefit_contributions: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total amount of company contributed benefits for the payroll.',
        example: 0,
      }),
    employer_taxes: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The total amount of employer paid taxes for the payroll.',
        example: 2038.93,
      }),
    gross_pay: z
      .number()
      .exactOptional()
      .openapi({ description: 'The gross pay amount for the payroll.', example: 27966.23 }),
    net_pay: z
      .number()
      .exactOptional()
      .openapi({ description: 'The net pay amount for the payroll.', example: 19337.17 }),
    tax_debit: z
      .number()
      .exactOptional()
      .openapi({ description: 'The total tax debit for the payroll.', example: 8655.32 }),
  })
  .openapi({ 'x-apideck-schema-id': 'PayrollTotals', required: [] })
  .openapi('PayrollTotals')

const PayrollSchema = z
  .strictObject({
    check_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .openapi({
        description: 'The date on which employees will be paid for the payroll.',
        example: '2022-04-08',
      }),
    company_id: CompanyIdSchema.exactOptional(),
    compensations: z
      .array(CompensationSchema)
      .exactOptional()
      .openapi({ description: 'An array of compensations for the payroll.' }),
    end_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .openapi({
        description: 'The end date, inclusive, of the pay period.',
        example: '2022-04-21',
      }),
    id: IdSchema,
    processed: z
      .boolean()
      .openapi({
        description:
          'Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated.',
        example: false,
      }),
    processed_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The date the payroll was processed.', example: '2022-04-08' }),
    start_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .openapi({
        description: 'The start date, inclusive, of the pay period.',
        example: '2022-04-08',
      }),
    totals: PayrollTotalsSchema.exactOptional().openapi({
      description: 'The overview of the payroll totals.',
    }),
  })
  .openapi({
    required: ['id', 'processed', 'check_date', 'start_date', 'end_date'],
    'x-apideck-schema-id': 'Payroll',
    'x-apideck-weights': {
      check_date: 'critical',
      company_id: 'high',
      compensations: 'medium',
      end_date: 'critical',
      id: 'critical',
      processed: 'critical',
      processed_date: 'medium',
      start_date: 'critical',
      totals: 'high',
    },
  })
  .openapi('Payroll')

const EmployeePayrollSchema = z
  .object({ employee: EmployeeSchema.exactOptional(), payroll: PayrollSchema.exactOptional() })
  .openapi({
    'x-apideck-schema-id': 'EmployeePayroll',
    'x-apideck-weights': { employee: 'critical', payroll: 'critical' },
    required: [],
  })
  .openapi('EmployeePayroll')

const EmployeePayrollsSchema = z
  .object({
    employee: EmployeeSchema.exactOptional(),
    payrolls: z.array(PayrollSchema).exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'EmployeePayrolls',
    'x-apideck-weights': { employee: 'critical', payrolls: 'critical' },
    required: [],
  })
  .openapi('EmployeePayrolls')

const ScheduleSchema = z
  .strictObject({
    end_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .openapi({
        description: 'The end date, inclusive, of the schedule period.',
        example: '2022-04-21',
      }),
    id: IdSchema,
    start_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .openapi({
        description: 'The start date, inclusive, of the schedule period.',
        example: '2022-04-08',
      }),
    work_pattern: z
      .object({
        even_weeks: z
          .object({
            hours_friday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 4, readOnly: false }),
            hours_monday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 8, readOnly: false }),
            hours_saturday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 0, readOnly: false }),
            hours_sunday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 0, readOnly: false }),
            hours_thursday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 7.5, readOnly: false }),
            hours_tuesday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 8, readOnly: false }),
            hours_wednesday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 4, readOnly: false }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        odd_weeks: z
          .object({
            hours_friday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 4, readOnly: false }),
            hours_monday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 8, readOnly: false }),
            hours_saturday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 0, readOnly: false }),
            hours_sunday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 0, readOnly: false }),
            hours_thursday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 7.5, readOnly: false }),
            hours_tuesday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 8, readOnly: false }),
            hours_wednesday: z
              .float64()
              .min(0)
              .max(24)
              .exactOptional()
              .openapi({ example: 4, readOnly: false }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .openapi({ required: [] }),
  })
  .openapi({
    required: ['id', 'start_date', 'end_date', 'work_pattern'],
    'x-apideck-schema-id': 'Schedule',
    'x-apideck-weights': {
      end_date: 'critical',
      id: 'critical',
      start_date: 'critical',
      work_pattern: 'critical',
    },
  })
  .openapi('Schedule')

const EmployeeSchedulesSchema = z
  .object({
    employee: EmployeeSchema.exactOptional(),
    schedules: z.array(ScheduleSchema).exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'EmployeeSchedules', required: [] })
  .openapi('EmployeeSchedules')

const EmployeesFilterSchema = z
  .strictObject({
    company_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Company ID to filter on', example: '1234' }),
    department_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the department to filter on', example: '1234' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email to filter on', example: 'elon@tesla.com' }),
    employee_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'Employee number to filter on', example: '123456-AB' }),
    employment_status: z
      .enum(['active', 'inactive', 'terminated', 'other'])
      .exactOptional()
      .openapi({
        description: 'Employment status to filter on',
        example: 'active',
        'x-graphql-type-name': 'EmploymentStatusFilter',
      }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'First Name to filter on', example: 'Elon' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last Name to filter on', example: 'Musk' }),
    manager_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Manager id to filter on', example: '1234' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Job title to filter on', example: 'Manager' }),
  })
  .openapi({
    example: {
      company_id: '1234',
      department_id: '1234',
      email: 'elon@tesla.com',
      employee_number: '123456-AB',
      employment_status: 'active',
      first_name: 'Elon',
      last_name: 'Musk',
      manager_id: '1234',
      title: 'Manager',
    },
    'x-apideck-schema-id': 'EmployeesFilter',
    'x-graphql-type-name': 'EmployeesFilter',
    required: [],
  })
  .openapi('EmployeesFilter')

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

const EmployeesSortSchema = z
  .strictObject({
    by: z
      .enum(['first_name', 'last_name', 'created_at', 'updated_at'])
      .exactOptional()
      .openapi({
        description: 'The field on which to sort the Employees',
        example: 'created_at',
        'x-apideck-enum-id': 'Employees.sort_by',
        'x-graphql-type-name': 'EmployeesSortBy',
      }),
    direction: SortDirectionSchema.exactOptional(),
  })
  .openapi({
    example: { by: 'created_at', direction: 'desc' },
    'x-apideck-schema-id': 'EmployeesSort',
    'x-graphql-type-name': 'EmployeesSort',
    required: [],
  })
  .openapi('EmployeesSort')

const GetDepartmentResponseSchema = z
  .object({
    data: DepartmentSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Departments' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'workday' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetDepartmentResponse',
    'x-graphql-type-name': 'Department',
  })
  .openapi('GetDepartmentResponse')

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

const GetDepartmentsResponseSchema = z
  .object({
    data: z.array(DepartmentSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Departments' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'workday' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetDepartmentsResponse',
    'x-graphql-type-name': 'DepartmentList',
  })
  .openapi('GetDepartmentsResponse')

const GetEmployeePayrollResponseSchema = z
  .object({
    data: EmployeePayrollSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetEmployeePayrollResponse',
    'x-graphql-type-name': 'EmployeePayroll',
  })
  .openapi('GetEmployeePayrollResponse')

const GetEmployeePayrollsResponseSchema = z
  .object({
    data: EmployeePayrollsSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Employees' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetEmployeePayrollsResponse',
    'x-graphql-type-name': 'EmployeePayrollList',
  })
  .openapi('GetEmployeePayrollsResponse')

const GetEmployeeResponseSchema = z
  .object({
    data: EmployeeSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Employees' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetEmployeeResponse',
    'x-graphql-type-name': 'Employee',
  })
  .openapi('GetEmployeeResponse')

const GetEmployeeSchedulesResponseSchema = z
  .object({
    data: EmployeeSchedulesSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Employees' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetEmployeeSchedulesResponse',
    'x-graphql-type-name': 'EmployeeSchedulesList',
  })
  .openapi('GetEmployeeSchedulesResponse')

const GetEmployeesResponseSchema = z
  .object({
    data: z.array(EmployeeSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Employees' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetEmployeesResponse',
    'x-graphql-type-name': 'EmployeeList',
  })
  .openapi('GetEmployeesResponse')

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

const HrisCompanySchema = z
  .strictObject({
    addresses: z.array(AddressSchema).exactOptional(),
    company_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An Company Number, Company ID or Company Code, is a unique number that has been assigned to each company.',
        example: '123456-AB',
        title: 'Company number',
      }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    debtor_id: z.string().min(1).exactOptional().openapi({ example: '12345' }),
    deleted: z.boolean().exactOptional().openapi({ example: false, readOnly: true }),
    display_name: z.string().min(1).exactOptional().openapi({ example: 'SpaceX' }),
    emails: z.array(EmailSchema).exactOptional(),
    id: IdSchema.exactOptional(),
    legal_name: z.string().min(1).openapi({ example: 'SpaceX' }),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    status: z
      .enum(['active', 'inactive', 'trial', 'other'])
      .exactOptional()
      .openapi({ example: 'active', 'x-apideck-enum-id': 'companies.status' }),
    subdomain: z.string().min(1).exactOptional().openapi({ example: 'company' }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
    websites: z.array(WebsiteSchema).exactOptional(),
  })
  .openapi({
    required: ['legal_name'],
    'x-apideck-schema-id': 'HrisCompany',
    'x-apideck-weights': {
      company_number: 'high',
      debtor_id: 'edge-case',
      id: 'critical',
      legal_name: 'critical',
      subdomain: 'low',
      updated_at: 'high',
    },
  })
  .openapi('HrisCompany')

const GetHrisCompaniesResponseSchema = z
  .object({
    data: z.array(HrisCompanySchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetHrisCompaniesResponse',
    'x-graphql-type-name': 'HrisCompanyList',
  })
  .openapi('GetHrisCompaniesResponse')

const GetHrisCompanyResponseSchema = z
  .object({
    data: HrisCompanySchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetHrisCompanyResponse',
    'x-graphql-type-name': 'HrisCompany',
  })
  .openapi('GetHrisCompanyResponse')

const HrisJobSchema = z
  .object({
    department: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Department name', example: 'Brussels Office' }),
    employee_id: z.string().exactOptional().openapi({ description: 'Id of the employee' }),
    employment_status: EmploymentStatusSchema.exactOptional(),
    end_date: z.iso.date().nullable().exactOptional().openapi({ example: '2020-08-12' }),
    id: IdSchema.exactOptional(),
    is_primary: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: "Indicates whether this the employee's primary job.",
        example: true,
        title: 'Primary',
      }),
    location: z
      .strictObject({ name: z.string().nullable().exactOptional().openapi({ example: 'HQ US' }) })
      .exactOptional()
      .openapi({ required: [] }),
    start_date: z.iso.date().nullable().exactOptional().openapi({ example: '2020-08-12' }),
    title: TitleSchema.exactOptional(),
  })
  .openapi({
    'x-apideck-schema-id': 'HrisJob',
    'x-apideck-weights': {
      department: 'medium',
      employee_id: 'critical',
      employment_status: 'high',
      end_date: 'high',
      id: 'critical',
      is_primary: 'medium',
      location: 'medium',
      start_date: 'high',
      title: 'critical',
    },
    required: [],
  })
  .openapi('HrisJob')

const GetHrisJobResponseSchema = z
  .object({
    data: HrisJobSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Employees' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetHrisJobResponse',
    'x-graphql-type-name': 'Job',
  })
  .openapi('GetHrisJobResponse')

const HrisJobsSchema = z
  .object({
    employee: EmployeeSchema.exactOptional(),
    jobs: z.array(HrisJobSchema).exactOptional(),
  })
  .openapi({ 'x-apideck-schema-id': 'HrisJobs', required: [] })
  .openapi('HrisJobs')

const GetHrisJobsResponseSchema = z
  .object({
    data: HrisJobsSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Employees' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetHrisJobsResponse',
    'x-graphql-type-name': 'JobsList',
  })
  .openapi('GetHrisJobsResponse')

const GetPayrollResponseSchema = z
  .object({
    data: PayrollSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetPayrollResponse',
    'x-graphql-type-name': 'Payroll',
  })
  .openapi('GetPayrollResponse')

const GetPayrollsResponseSchema = z
  .object({
    data: z.array(PayrollSchema),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Employees' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetPayrollsResponse',
    'x-graphql-type-name': 'PayrollList',
  })
  .openapi('GetPayrollsResponse')

const TimeOffRequestSchema = z
  .strictObject({
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount of time off requested.', example: 3.5 }),
    approval_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({ description: 'The date the request was approved', example: '2022-03-21' }),
    created_at: CreatedAtSchema.exactOptional(),
    created_by: CreatedBySchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the time off request.',
        example: 'Enjoying some sun.',
        title: 'Description',
      }),
    employee_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the employee', example: '12345', title: 'Employee ID' }),
    end_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({ description: 'The end date of the time off request.', example: '2022-04-01' }),
    id: IdSchema.exactOptional(),
    notes: z
      .object({
        employee: z
          .string()
          .exactOptional()
          .openapi({ example: 'Relaxing on the beach for a few hours.', title: 'Employee note' }),
        manager: z.string().exactOptional().openapi({ example: 'Enjoy!', title: 'Manager note' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    policy_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the policy', example: '12345', title: 'Policy ID' }),
    request_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({ description: 'The date the request was made.', example: '2022-03-21' }),
    request_type: z
      .enum(['vacation', 'sick', 'personal', 'jury_duty', 'volunteer', 'bereavement', 'other'])
      .exactOptional()
      .openapi({
        description: 'The type of request',
        example: 'vacation',
        'x-apideck-enum-id': 'time-off-requests.type',
        'x-graphql-type-name': 'TimeOffRequestType',
      }),
    start_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({ description: 'The start date of the time off request.', example: '2022-04-01' }),
    status: z
      .enum(['requested', 'approved', 'declined', 'cancelled', 'deleted', 'other'])
      .exactOptional()
      .openapi({
        description: 'The status of the time off request.',
        example: 'approved',
        title: 'Status',
        'x-apideck-enum-id': 'time-off-requests.status',
        'x-graphql-type-name': 'TimeOffRequestStatus',
      }),
    units: z
      .enum(['days', 'hours', 'other'])
      .exactOptional()
      .openapi({
        description:
          'The unit of time off requested. Possible values include: `hours`, `days`, or `other`.',
        example: 'hours',
        'x-apideck-enum-id': 'time-off-requests.units',
        'x-graphql-type-name': 'TimeOffRequestUnits',
      }),
    updated_at: UpdatedAtSchema.exactOptional(),
    updated_by: UpdatedBySchema.exactOptional(),
  })
  .openapi({
    'x-apideck-weights': {
      amount: 'medium',
      approval_date: 'medium',
      created_at: 'medium',
      created_by: 'edge-case',
      description: 'medium',
      employee_id: 'high',
      end_date: 'high',
      id: 'high',
      notes: 'low',
      policy_id: 'low',
      request_date: 'medium',
      request_type: 'medium',
      start_date: 'high',
      status: 'high',
      units: 'medium',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('TimeOffRequest')

const GetTimeOffRequestResponseSchema = z
  .object({
    data: TimeOffRequestSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'time-off-requests' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'bamboohr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-graphql-type-name': 'TimeOffRequest',
  })
  .openapi('GetTimeOffRequestResponse')

const GetTimeOffRequestsResponseSchema = z
  .object({
    data: z.array(TimeOffRequestSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'time-off-requests' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'bamboohr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-graphql-type-name': 'TimeOffRequestList',
  })
  .openapi('GetTimeOffRequestsResponse')

const HrisEventTypeSchema = z
  .enum([
    '*',
    'hris.employee.created',
    'hris.employee.updated',
    'hris.employee.deleted',
    'hris.company.created',
    'hris.company.updated',
    'hris.company.deleted',
  ])
  .openapi({ example: 'hris.employee.created' })
  .openapi('HrisEventType')

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

const PayrollsFilterSchema = z
  .strictObject({
    end_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({
        description: 'Return payrolls whose pay period is before the end date',
        example: '2022-04-21',
      }),
    start_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({
        description: 'Return payrolls whose pay period is after the start date',
        example: '2022-04-08',
      }),
  })
  .openapi({
    example: { end_date: '2022-04-21', start_date: '2022-04-08' },
    'x-apideck-schema-id': 'PayrollsFilter',
    'x-graphql-type-name': 'PayrollsFilter',
    required: [],
  })
  .openapi('PayrollsFilter')

const TimeOffRequestsFilterSchema = z
  .strictObject({
    employee_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Employee ID', example: '1234' }),
    end_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({ description: 'End date', example: '2022-04-21' }),
    start_date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .exactOptional()
      .openapi({ description: 'Start date', example: '2022-04-08' }),
    time_off_request_status: z
      .enum(['requested', 'approved', 'declined', 'cancelled', 'deleted', 'other'])
      .exactOptional()
      .openapi({
        description: 'Time off request status to filter on',
        example: '',
        'x-graphql-type-name': 'TimeOffStatusFilter',
      }),
  })
  .openapi({
    example: {
      employee_id: '1234',
      end_date: '2022-04-21',
      start_date: '2022-04-08',
      time_off_request_status: 'approved',
    },
    'x-graphql-type-name': 'TimeOffRequestsFilter',
    required: [],
  })
  .openapi('TimeOffRequestsFilter')

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

const UpdateDepartmentResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Departments' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'workday' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateDepartmentResponse',
  })
  .openapi('UpdateDepartmentResponse')

const UpdateEmployeeResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Employees' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'sage-hr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateEmployeeResponse',
  })
  .openapi('UpdateEmployeeResponse')

const UpdateHrisCompanyResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'Companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'undefined' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateHrisCompanyResponse',
  })
  .openapi('UpdateHrisCompanyResponse')

const UpdateTimeOffRequestResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'time-off-requests' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'bamboohr' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({ required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'] })
  .openapi('UpdateTimeOffRequestResponse')

const WebhookEventSchema = z
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
  .and(z.object({ event_type: HrisEventTypeSchema.exactOptional() }).openapi({ required: [] }))
  .openapi({ 'x-sdk-exclude': true })
  .openapi('WebhookEvent')

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const CreateDepartmentResponseResponse = {
  description: 'Departments',
  content: { 'application/json': { schema: CreateDepartmentResponseSchema } },
}

const CreateEmployeeResponseResponse = {
  description: 'Employees',
  content: { 'application/json': { schema: CreateEmployeeResponseSchema } },
}

const CreateHrisCompanyResponseResponse = {
  description: 'Companies',
  content: { 'application/json': { schema: CreateHrisCompanyResponseSchema } },
}

const CreateTimeOffRequestResponseResponse = {
  description: 'TimeOffRequests',
  content: { 'application/json': { schema: CreateTimeOffRequestResponseSchema } },
}

const DeleteDepartmentResponseResponse = {
  description: 'Departments',
  content: { 'application/json': { schema: DeleteDepartmentResponseSchema } },
}

const DeleteEmployeeResponseResponse = {
  description: 'Employees',
  content: { 'application/json': { schema: DeleteEmployeeResponseSchema } },
}

const DeleteHrisCompanyResponseResponse = {
  description: 'Companies',
  content: { 'application/json': { schema: DeleteHrisCompanyResponseSchema } },
}

const DeleteTimeOffRequestResponseResponse = {
  description: 'TimeOffRequests',
  content: { 'application/json': { schema: DeleteTimeOffRequestResponseSchema } },
}

const GetDepartmentResponseResponse = {
  description: 'Departments',
  content: { 'application/json': { schema: GetDepartmentResponseSchema } },
}

const GetDepartmentsResponseResponse = {
  description: 'Departments',
  content: { 'application/json': { schema: GetDepartmentsResponseSchema } },
}

const GetEmployeePayrollResponseResponse = {
  description: 'Payrolls',
  content: { 'application/json': { schema: GetEmployeePayrollResponseSchema } },
}

const GetEmployeePayrollsResponseResponse = {
  description: 'EmployeePayrolls',
  content: { 'application/json': { schema: GetEmployeePayrollsResponseSchema } },
}

const GetEmployeeResponseResponse = {
  description: 'Employees',
  content: { 'application/json': { schema: GetEmployeeResponseSchema } },
}

const GetEmployeeSchedulesResponseResponse = {
  description: 'EmployeeSchedules',
  content: { 'application/json': { schema: GetEmployeeSchedulesResponseSchema } },
}

const GetEmployeesResponseResponse = {
  description: 'Employees',
  content: { 'application/json': { schema: GetEmployeesResponseSchema } },
}

const GetHrisCompaniesResponseResponse = {
  description: 'Companies',
  content: { 'application/json': { schema: GetHrisCompaniesResponseSchema } },
}

const GetHrisCompanyResponseResponse = {
  description: 'Company',
  content: { 'application/json': { schema: GetHrisCompanyResponseSchema } },
}

const GetHrisJobResponseResponse = {
  description: 'Job',
  content: { 'application/json': { schema: GetHrisJobResponseSchema } },
}

const GetHrisJobsResponseResponse = {
  description: 'Jobs',
  content: { 'application/json': { schema: GetHrisJobsResponseSchema } },
}

const GetPayrollResponseResponse = {
  description: 'Payrolls',
  content: { 'application/json': { schema: GetPayrollResponseSchema } },
}

const GetPayrollsResponseResponse = {
  description: 'Payrolls',
  content: { 'application/json': { schema: GetPayrollsResponseSchema } },
}

const GetTimeOffRequestResponseResponse = {
  description: 'TimeOffRequests',
  content: { 'application/json': { schema: GetTimeOffRequestResponseSchema } },
}

const GetTimeOffRequestsResponseResponse = {
  description: 'TimeOffRequests',
  content: { 'application/json': { schema: GetTimeOffRequestsResponseSchema } },
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

const TimeOffRequestResponse = {
  description: 'TimeOffRequests',
  content: { 'application/json': { schema: TimeOffRequestSchema } },
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

const UpdateDepartmentResponseResponse = {
  description: 'Departments',
  content: { 'application/json': { schema: UpdateDepartmentResponseSchema } },
}

const UpdateEmployeeResponseResponse = {
  description: 'Employees',
  content: { 'application/json': { schema: UpdateEmployeeResponseSchema } },
}

const UpdateHrisCompanyResponseResponse = {
  description: 'Companies',
  content: { 'application/json': { schema: UpdateHrisCompanyResponseSchema } },
}

const UpdateTimeOffRequestResponseResponse = {
  description: 'TimeOffRequests',
  content: { 'application/json': { schema: UpdateTimeOffRequestResponseSchema } },
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

const CompanyIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the company you are acting upon.',
      in: 'path',
      name: 'company_id',
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

const EmployeeIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the employee you are acting upon.',
      in: 'path',
      name: 'employee_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const EmployeesFilterParamsSchema = EmployeesFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/EmployeesFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const EmployeesSortParamsSchema = EmployeesSortSchema.openapi({
  param: {
    description: 'Apply sorting',
    explode: true,
    in: 'query',
    name: 'sort',
    schema: { $ref: '#/components/schemas/EmployeesSort' },
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

const JobIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the job you are acting upon.',
      in: 'path',
      name: 'job_id',
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

const PayrollIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ID of the payroll you are acting upon.',
      in: 'path',
      name: 'payroll_id',
      required: true,
      schema: { type: 'string' },
    },
  })

const PayrollsFilterParamsSchema = PayrollsFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/PayrollsFilter' },
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

const TimeOffRequestsFilterParamsSchema = TimeOffRequestsFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/TimeOffRequestsFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const ApiKeySecurityScheme = {
  description:
    'To use API you have to sign up and get your own API key. Unify API accounts have sandbox mode and live mode API keys. \nTo change modes just use the appropriate key to get a live or test object. You can find your API keys on the unify settings of your Apideck app.\nYour Apideck application_id can also be found on the same page.\n\nAuthenticate your API requests by including your test or live secret API key in the request header. \n\n- Bearer authorization header: `Authorization: Bearer <your-apideck-api-key>`\n- Application id header: `x-apideck-app-id: <your-apideck-app-id>`\n\nYou should use the public keys on the SDKs and the secret keys to authenticate API requests.\n\n**Do not share or include your secret API keys on client side code.** Your API keys carry significant privileges. Please ensure to keep them 100% secure and be sure to not share your secret API keys in areas that are publicly accessible like GitHub.\n\nLearn how to set the Authorization header inside Postman https://learning.postman.com/docs/postman/sending-api-requests/authorization/#api-key\n\nGo to Unify to grab your API KEY https://app.apideck.com/unify/api-keys\n',
  in: 'header',
  name: 'Authorization',
  type: 'apiKey',
}

export const getHrisCompaniesRoute = createRoute({
  method: 'get',
  path: '/hris/companies',
  tags: ['Companies'],
  summary: 'List Companies',
  description: 'List Companies',
  operationId: 'companiesAll',
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
    200: GetHrisCompaniesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postHrisCompaniesRoute = createRoute({
  method: 'post',
  path: '/hris/companies',
  tags: ['Companies'],
  summary: 'Create Company',
  description: 'Create Company',
  operationId: 'companiesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: HrisCompanySchema } }, required: true },
  },
  responses: {
    201: CreateHrisCompanyResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisCompaniesIdRoute = createRoute({
  method: 'get',
  path: '/hris/companies/{id}',
  tags: ['Companies'],
  summary: 'Get Company',
  description: 'Get Company',
  operationId: 'companiesOne',
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
    200: GetHrisCompanyResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteHrisCompaniesIdRoute = createRoute({
  method: 'delete',
  path: '/hris/companies/{id}',
  tags: ['Companies'],
  summary: 'Delete Company',
  description: 'Delete Company',
  operationId: 'companiesDelete',
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
    200: DeleteHrisCompanyResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchHrisCompaniesIdRoute = createRoute({
  method: 'patch',
  path: '/hris/companies/{id}',
  tags: ['Companies'],
  summary: 'Update Company',
  description: 'Update Company',
  operationId: 'companiesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: HrisCompanySchema } }, required: true },
  },
  responses: {
    200: UpdateHrisCompanyResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisDepartmentsRoute = createRoute({
  method: 'get',
  path: '/hris/departments',
  tags: ['Departments'],
  summary: 'List Departments',
  description: 'List Departments',
  operationId: 'departmentsAll',
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
    200: GetDepartmentsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postHrisDepartmentsRoute = createRoute({
  method: 'post',
  path: '/hris/departments',
  tags: ['Departments'],
  summary: 'Create Department',
  description: 'Create Department',
  operationId: 'departmentsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: DepartmentSchema } }, required: true },
  },
  responses: {
    201: CreateDepartmentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisDepartmentsIdRoute = createRoute({
  method: 'get',
  path: '/hris/departments/{id}',
  tags: ['Departments'],
  summary: 'Get Department',
  description: 'Get Department',
  operationId: 'departmentsOne',
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
    200: GetDepartmentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteHrisDepartmentsIdRoute = createRoute({
  method: 'delete',
  path: '/hris/departments/{id}',
  tags: ['Departments'],
  summary: 'Delete Department',
  description: 'Delete Department',
  operationId: 'departmentsDelete',
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
    200: DeleteDepartmentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchHrisDepartmentsIdRoute = createRoute({
  method: 'patch',
  path: '/hris/departments/{id}',
  tags: ['Departments'],
  summary: 'Update Department',
  description: 'Update Department',
  operationId: 'departmentsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: DepartmentSchema } }, required: true },
  },
  responses: {
    200: UpdateDepartmentResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisEmployeesRoute = createRoute({
  method: 'get',
  path: '/hris/employees',
  tags: ['Employees'],
  summary: 'List Employees',
  description: 'List Employees',
  operationId: 'employeesAll',
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
        const deep: string[] = ['filter', 'sort']
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
          filter: EmployeesFilterParamsSchema,
          sort: EmployeesSortParamsSchema,
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
    200: GetEmployeesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postHrisEmployeesRoute = createRoute({
  method: 'post',
  path: '/hris/employees',
  tags: ['Employees'],
  summary: 'Create Employee',
  description: 'Create Employee',
  operationId: 'employeesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: EmployeeSchema } }, required: true },
  },
  responses: {
    201: CreateEmployeeResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisEmployeesIdRoute = createRoute({
  method: 'get',
  path: '/hris/employees/{id}',
  tags: ['Employees'],
  summary: 'Get Employee',
  description: 'Get Employee',
  operationId: 'employeesOne',
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
    200: GetEmployeeResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteHrisEmployeesIdRoute = createRoute({
  method: 'delete',
  path: '/hris/employees/{id}',
  tags: ['Employees'],
  summary: 'Delete Employee',
  description: 'Delete Employee',
  operationId: 'employeesDelete',
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
    200: DeleteEmployeeResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchHrisEmployeesIdRoute = createRoute({
  method: 'patch',
  path: '/hris/employees/{id}',
  tags: ['Employees'],
  summary: 'Update Employee',
  description: 'Update Employee',
  operationId: 'employeesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: EmployeeSchema } }, required: true },
  },
  responses: {
    200: UpdateEmployeeResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisJobsEmployeesEmployeeIdRoute = createRoute({
  method: 'get',
  path: '/hris/jobs/employees/{employee_id}',
  tags: ['Jobs'],
  summary: 'List Jobs',
  description: 'List Jobs for employee.',
  operationId: 'jobsAll',
  request: {
    params: z.object({ employee_id: EmployeeIdParamsSchema }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetHrisJobsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisJobsEmployeesEmployeeIdJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/hris/jobs/employees/{employee_id}/jobs/{job_id}',
  tags: ['Jobs'],
  summary: 'One Job',
  description: 'A Job for employee.',
  operationId: 'jobsOne',
  request: {
    params: z.object({ job_id: JobIdParamsSchema, employee_id: EmployeeIdParamsSchema }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetHrisJobResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisPayrollsRoute = createRoute({
  method: 'get',
  path: '/hris/payrolls',
  tags: ['Payrolls'],
  summary: 'List Payroll',
  description: 'List Payroll',
  operationId: 'payrollsAll',
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
          filter: PayrollsFilterParamsSchema,
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
    200: GetPayrollsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisPayrollsEmployeesEmployeeIdRoute = createRoute({
  method: 'get',
  path: '/hris/payrolls/employees/{employee_id}',
  tags: ['Employee Payrolls'],
  summary: 'List Employee Payrolls',
  description: 'List payrolls for employee',
  operationId: 'employeePayrollsAll',
  request: {
    params: z.object({ employee_id: EmployeeIdParamsSchema }),
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
          filter: PayrollsFilterParamsSchema,
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
    200: GetEmployeePayrollsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisPayrollsEmployeesEmployeeIdPayrollsPayrollIdRoute = createRoute({
  method: 'get',
  path: '/hris/payrolls/employees/{employee_id}/payrolls/{payroll_id}',
  tags: ['Employee Payrolls'],
  summary: 'Get Employee Payroll',
  description: 'Get payroll for employee',
  operationId: 'employeePayrollsOne',
  request: {
    params: z.object({ payroll_id: PayrollIdParamsSchema, employee_id: EmployeeIdParamsSchema }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetEmployeePayrollResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisPayrollsPayrollIdRoute = createRoute({
  method: 'get',
  path: '/hris/payrolls/{payroll_id}',
  tags: ['Payrolls'],
  summary: 'Get Payroll',
  description: 'Get Payroll',
  operationId: 'payrollsOne',
  request: {
    params: z.object({ payroll_id: PayrollIdParamsSchema }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetPayrollResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisSchedulesEmployeesEmployeeIdRoute = createRoute({
  method: 'get',
  path: '/hris/schedules/employees/{employee_id}',
  tags: ['Employee Schedules'],
  summary: 'List Employee Schedules',
  description:
    'List schedules for employee, a schedule is a work pattern, not the actual worked hours, for an employee.',
  operationId: 'employeeSchedulesAll',
  request: {
    params: z.object({ employee_id: EmployeeIdParamsSchema }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetEmployeeSchedulesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisTimeOffRequestsRoute = createRoute({
  method: 'get',
  path: '/hris/time-off-requests',
  tags: ['Time Off Requests'],
  summary: 'List Time Off Requests',
  description: 'List Time Off Requests',
  operationId: 'timeOffRequestsAll',
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
          filter: TimeOffRequestsFilterParamsSchema,
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
    200: GetTimeOffRequestsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postHrisTimeOffRequestsRoute = createRoute({
  method: 'post',
  path: '/hris/time-off-requests',
  tags: ['Time Off Requests'],
  summary: 'Create Time Off Request',
  description: 'Create Time Off Request',
  operationId: 'timeOffRequestsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: TimeOffRequestSchema } }, required: true },
  },
  responses: {
    201: CreateTimeOffRequestResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getHrisTimeOffRequestsIdRoute = createRoute({
  method: 'get',
  path: '/hris/time-off-requests/{id}',
  tags: ['Time Off Requests'],
  summary: 'Get Time Off Request',
  description: 'Get Time Off Request',
  operationId: 'timeOffRequestsOne',
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
    200: GetTimeOffRequestResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteHrisTimeOffRequestsIdRoute = createRoute({
  method: 'delete',
  path: '/hris/time-off-requests/{id}',
  tags: ['Time Off Requests'],
  summary: 'Delete Time Off Request',
  description: 'Delete Time Off Request',
  operationId: 'timeOffRequestsDelete',
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
    200: DeleteTimeOffRequestResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchHrisTimeOffRequestsIdRoute = createRoute({
  method: 'patch',
  path: '/hris/time-off-requests/{id}',
  tags: ['Time Off Requests'],
  summary: 'Update Time Off Request',
  description: 'Update Time Off Request',
  operationId: 'timeOffRequestsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: TimeOffRequestSchema } }, required: true },
  },
  responses: {
    200: UpdateTimeOffRequestResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

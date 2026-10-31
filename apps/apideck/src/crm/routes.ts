import { createRoute, z } from '@hono/zod-openapi'

const ActivitiesFilterSchema = z
  .strictObject({
    updated_since: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', title: 'Updated since (timestamp)' }),
  })
  .openapi({
    example: { updated_since: '2020-09-30T07:43:32.000Z' },
    'x-apideck-schema-id': 'ActivitiesFilter',
    'x-graphql-type-name': 'ActivitiesFilter',
    required: [],
  })
  .openapi('ActivitiesFilter')

const ActivityAttendeeSchema = z
  .strictObject({
    contact_id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-08-12T20:43:21.291Z', readOnly: true }),
    email_address: z.string().nullable().exactOptional().openapi({ example: 'elon@musk.com' }),
    first_name: z.string().nullable().exactOptional().openapi({ example: 'Elon' }),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    is_organizer: z.boolean().nullable().exactOptional().openapi({ example: true }),
    last_name: z.string().nullable().exactOptional().openapi({ example: 'Musk' }),
    middle_name: z.string().nullable().exactOptional().openapi({ example: 'D.' }),
    name: z.string().min(1).exactOptional().openapi({ example: 'Elon Musk' }),
    prefix: z.string().nullable().exactOptional().openapi({ example: 'Mr.' }),
    status: z
      .enum(['accepted', 'tentative', 'declined'])
      .nullable()
      .exactOptional()
      .openapi({ example: 'accepted', 'x-apideck-enum-id': 'activity-attendees.status' }),
    suffix: z.string().nullable().exactOptional().openapi({ example: 'PhD' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ example: '2017-08-12T20:43:21.291Z', readOnly: true }),
    user_id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
  })
  .openapi({
    'x-apideck-schema-id': 'ActivityAttendee',
    'x-apideck-weights': {
      email_address: 'medium',
      first_name: 'high',
      id: 'critical',
      is_organizer: 'medium',
      last_name: 'high',
      middle_name: 'low',
      name: 'critical',
      prefix: 'low',
      status: 'medium',
      suffix: 'edge-case',
      user_id: 'low',
    },
    'x-pii': ['name', 'first_name', 'middle_name', 'last_name', 'email_address'],
    required: [],
  })
  .openapi('ActivityAttendee')

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

const ActivitySchema = z
  .strictObject({
    account_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    activity_date: z.string().nullable().exactOptional().openapi({ example: '2021-05-01' }),
    activity_datetime: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2021-05-01T12:00:00.000Z' }),
    all_day_event: z.boolean().exactOptional().openapi({ example: false }),
    archived: z.boolean().exactOptional().openapi({ example: false }),
    asset_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    attendees: z.array(ActivityAttendeeSchema).exactOptional(),
    campaign_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    case_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    child: z.boolean().exactOptional().openapi({ example: false }),
    company_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    contact_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    contract_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    created_by: z.string().nullable().exactOptional().openapi({ example: '12345', readOnly: true }),
    custom_fields: z.array(CustomFieldSchema).exactOptional(),
    custom_object_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    deleted: z.boolean().exactOptional().openapi({ example: false }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'More info about the meeting' }),
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the Activity is done or not',
        example: false,
        title: 'Done',
      }),
    downstream_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The third-party API ID of original entity',
        example: '12345',
        readOnly: true,
      }),
    duration_minutes: z.int().nullable().exactOptional().openapi({ example: 30, readOnly: true }),
    duration_seconds: z.int().min(0).nullable().exactOptional().openapi({ example: 1800 }),
    end_date: z.string().nullable().exactOptional().openapi({ example: '2021-05-01' }),
    end_datetime: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2021-05-01T12:30:00.000Z' }),
    event_sub_type: z.string().nullable().exactOptional().openapi({ example: 'debrief' }),
    group_event: z.boolean().exactOptional().openapi({ example: true }),
    group_event_type: z.string().nullable().exactOptional().openapi({ example: 'Proposed' }),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    lead_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    location: z.string().nullable().exactOptional().openapi({ example: 'Space' }),
    location_address: AddressSchema.exactOptional(),
    note: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'An internal note about the meeting', title: 'Note (internal)' }),
    opportunity_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    owner_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    private: z.boolean().exactOptional().openapi({ example: true }),
    product_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    recurrent: z.boolean().exactOptional().openapi({ example: false }),
    reminder_datetime: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2021-05-01T17:00:00.000Z' }),
    reminder_set: z.boolean().nullable().exactOptional().openapi({ example: false }),
    show_as: z
      .enum(['free', 'busy'])
      .exactOptional()
      .openapi({ example: 'busy', 'x-apideck-enum-id': 'activities.show_as' }),
    solution_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    start_datetime: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: '2021-05-01T12:00:00.000Z' }),
    title: z.string().nullable().exactOptional().openapi({ example: 'Meeting' }),
    type: z
      .enum([
        'call',
        'meeting',
        'email',
        'note',
        'task',
        'deadline',
        'send-letter',
        'send-quote',
        'other',
      ])
      .openapi({
        example: 'meeting',
        'x-apideck-enum-id': 'activities.type',
        'x-graphql-type-name': 'ActivityType',
      }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    updated_by: z.string().nullable().exactOptional().openapi({ example: '12345', readOnly: true }),
    user_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    video_conference_id: z
      .string()
      .exactOptional()
      .openapi({ example: 'zoom:88120759396', title: 'Meeting ID' }),
    video_conference_url: z
      .string()
      .exactOptional()
      .openapi({ example: 'https://us02web.zoom.us/j/88120759396', title: 'Meeting URL' }),
  })
  .openapi({
    required: ['type'],
    'x-apideck-schema-id': 'Activity',
    'x-apideck-weights': {
      account_id: 'edge-case',
      activity_date: 'medium',
      activity_datetime: 'high',
      all_day_event: 'medium',
      archived: 'low',
      asset_id: 'edge-case',
      attendees: 'edge-case',
      campaign_id: 'edge-case',
      case_id: 'edge-case',
      child: 'low',
      company_id: 'edge-case',
      contact_id: 'edge-case',
      contract_id: 'edge-case',
      custom_object_id: 'edge-case',
      deleted: 'low',
      description: 'medium',
      done: 'medium',
      downstream_id: 'edge-case',
      duration_minutes: 'edge-case',
      duration_seconds: 'medium',
      end_date: 'medium',
      end_datetime: 'high',
      event_sub_type: 'medium',
      group_event: 'edge-case',
      group_event_type: 'edge-case',
      id: 'critical',
      lead_id: 'edge-case',
      location: 'medium',
      location_address: 'medium',
      note: 'medium',
      opportunity_id: 'edge-case',
      owner_id: 'high',
      private: 'low',
      product_id: 'edge-case',
      reminder_datetime: 'edge-case',
      reminder_set: 'edge-case',
      show_as: 'edge-case',
      solution_id: 'edge-case',
      start_datetime: 'high',
      title: 'critical',
      type: 'critical',
      updated_at: 'high',
      user_id: 'edge-case',
      video_conference_id: 'edge-case',
      video_conference_url: 'edge-case',
    },
  })
  .openapi('Activity')

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

const CompaniesFilterSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the company to filter on', example: 'SpaceX' }),
  })
  .openapi({
    example: { name: 'SpaceX' },
    'x-apideck-schema-id': 'CompaniesFilter',
    'x-graphql-type-name': 'CompaniesFilter',
    required: [],
  })
  .openapi('CompaniesFilter')

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

const CompaniesSortSchema = z
  .strictObject({
    by: z
      .enum(['created_at', 'updated_at', 'name'])
      .exactOptional()
      .openapi({
        description: 'The field on which to sort the Companies',
        example: 'created_at',
        'x-apideck-enum-id': 'companies.sort_by',
        'x-graphql-type-name': 'CompaniesSortBy',
      }),
    direction: SortDirectionSchema.exactOptional(),
  })
  .openapi({
    example: { by: 'created_at', direction: 'desc' },
    'x-apideck-schema-id': 'CompaniesSort',
    'x-graphql-type-name': 'CompaniesSort',
    required: [],
  })
  .openapi('CompaniesSort')

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

const ContactsFilterSchema = z
  .strictObject({
    company_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the associated company of the contact to filter on',
        example: '12345',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email of the contact to filter on', example: 'elon@tesla.com' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of the contact to filter on', example: 'Elon' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of the contact to filter on', example: 'Musk' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the contact to filter on', example: 'Elon Musk' }),
  })
  .openapi({
    example: {
      company_id: '12345',
      email: 'elon@tesla.com',
      first_name: 'Elon',
      last_name: 'Musk',
    },
    'x-apideck-schema-id': 'ContactsFilter',
    'x-graphql-type-name': 'ContactsFilter',
    required: [],
  })
  .openapi('ContactsFilter')

const ContactsSortSchema = z
  .strictObject({
    by: z
      .enum(['created_at', 'updated_at', 'name', 'first_name', 'last_name', 'email'])
      .exactOptional()
      .openapi({
        description: 'The field on which to sort the Contacts',
        example: 'created_at',
        'x-apideck-enum-id': 'contacts.sort_by',
        'x-graphql-type-name': 'ContactsSortBy',
      }),
    direction: SortDirectionSchema.exactOptional(),
  })
  .openapi({
    example: { by: 'created_at', direction: 'desc' },
    'x-apideck-schema-id': 'ContactsSort',
    'x-graphql-type-name': 'ContactsSort',
    required: [],
  })
  .openapi('ContactsSort')

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

const CreateActivityResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'activities' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateActivityResponse',
  })
  .openapi('CreateActivityResponse')

const CreateCompanyResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateCompanyResponse',
  })
  .openapi('CreateCompanyResponse')

const CreateContactResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'contacts' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateContactResponse',
  })
  .openapi('CreateContactResponse')

const CreateLeadResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateLeadResponse',
  })
  .openapi('CreateLeadResponse')

const CreateNoteResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'notes' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateNoteResponse',
  })
  .openapi('CreateNoteResponse')

const CreateOpportunityResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'opportunities' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateOpportunityResponse',
  })
  .openapi('CreateOpportunityResponse')

const CreatePipelineResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'pipelines' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreatePipelineResponse',
  })
  .openapi('CreatePipelineResponse')

const CreateUserResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'add' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'users' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'CreateUserResponse',
  })
  .openapi('CreateUserResponse')

const CrmEventTypeSchema = z
  .enum([
    '*',
    'crm.activity.created',
    'crm.activity.updated',
    'crm.activity.deleted',
    'crm.company.created',
    'crm.company.updated',
    'crm.company.deleted',
    'crm.contact.created',
    'crm.contact.updated',
    'crm.contact.deleted',
    'crm.lead.created',
    'crm.lead.updated',
    'crm.lead.deleted',
    'crm.note.created',
    'crm.note.updated',
    'crm.note.deleted',
    'crm.opportunity.created',
    'crm.opportunity.updated',
    'crm.opportunity.deleted',
  ])
  .openapi({ example: 'crm.company.created', 'x-apideck-enum-id': 'crm.events' })
  .openapi('CrmEventType')

const CrmWebhookEventSchema = z
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
  .and(z.object({ event_type: CrmEventTypeSchema.exactOptional() }).openapi({ required: [] }))
  .openapi({ 'x-sdk-exclude': true })
  .openapi('CrmWebhookEvent')

const DeleteActivityResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'activities' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteActivityResponse',
  })
  .openapi('DeleteActivityResponse')

const DeleteCompanyResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteCompanyResponse',
  })
  .openapi('DeleteCompanyResponse')

const DeleteContactResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'contacts' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteContactResponse',
  })
  .openapi('DeleteContactResponse')

const DeleteLeadResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteLeadResponse',
  })
  .openapi('DeleteLeadResponse')

const DeleteNoteResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'notes' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteNoteResponse',
  })
  .openapi('DeleteNoteResponse')

const DeleteOpportunityResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteOpportunityResponse',
  })
  .openapi('DeleteOpportunityResponse')

const DeletePipelineResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeletePipelineResponse',
  })
  .openapi('DeletePipelineResponse')

const DeleteUserResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'delete' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'users' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'DeleteUserResponse',
  })
  .openapi('DeleteUserResponse')

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

const GetActivitiesResponseSchema = z
  .object({
    data: z.array(ActivitySchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'activities' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetActivitiesResponse',
    'x-graphql-type-name': 'ActivityList',
  })
  .openapi('GetActivitiesResponse')

const GetActivityResponseSchema = z
  .object({
    data: ActivitySchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'activities' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetActivityResponse',
    'x-graphql-type-name': 'activity',
  })
  .openapi('GetActivityResponse')

const GetCompaniesResponseSchema = z
  .object({
    data: z.array(CompanySchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetCompaniesResponse',
    'x-graphql-type-name': 'CompanyList',
  })
  .openapi('GetCompaniesResponse')

const GetCompanyResponseSchema = z
  .object({
    data: CompanySchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetCompanyResponse',
    'x-graphql-type-name': 'company',
  })
  .openapi('GetCompanyResponse')

const GetContactResponseSchema = z
  .object({
    data: ContactSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetContactResponse',
  })
  .openapi('GetContactResponse')

const GetContactsResponseSchema = z
  .object({
    data: z.array(ContactSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'contacts' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetContactsResponse',
    'x-graphql-type-name': 'ContactList',
  })
  .openapi('GetContactsResponse')

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

const GetLeadResponseSchema = z
  .object({
    data: LeadSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetLeadResponse',
  })
  .openapi('GetLeadResponse')

const GetLeadsResponseSchema = z
  .object({
    data: z.array(LeadSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetLeadsResponse',
    'x-graphql-type-name': 'LeadList',
  })
  .openapi('GetLeadsResponse')

const NoteSchema = z
  .strictObject({
    active: z.boolean().nullable().exactOptional().openapi({ example: true }),
    company_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    contact_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    content: z.string().exactOptional().openapi({ example: 'Office hours are 9AM-6PM' }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    created_by: z.string().nullable().exactOptional().openapi({ example: '12345', readOnly: true }),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    lead_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    opportunity_id: z.string().nullable().exactOptional().openapi({ example: '12345' }),
    owner_id: z.string().exactOptional().openapi({ example: '12345' }),
    title: z.string().exactOptional().openapi({ example: 'Meeting Notes' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ example: '2020-09-30T07:43:32.000Z', readOnly: true }),
    updated_by: z.string().nullable().exactOptional().openapi({ example: '12345', readOnly: true }),
  })
  .openapi({
    'x-apideck-schema-id': 'Note',
    'x-apideck-weights': {
      active: 'low',
      company_id: 'medium',
      contact_id: 'medium',
      content: 'critical',
      created_at: 'medium',
      created_by: 'edge-case',
      id: 'critical',
      lead_id: 'medium',
      opportunity_id: 'medium',
      owner_id: 'high',
      title: 'critical',
      updated_at: 'medium',
      updated_by: 'edge-case',
    },
    required: [],
  })
  .openapi('Note')

const GetNoteResponseSchema = z
  .object({
    data: NoteSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'notes' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetNoteResponse',
    'x-graphql-type-name': 'note',
  })
  .openapi('GetNoteResponse')

const GetNotesResponseSchema = z
  .object({
    data: z.array(NoteSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'notes' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetNotesResponse',
    'x-graphql-type-name': 'NoteList',
  })
  .openapi('GetNotesResponse')

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

const GetOpportunitiesResponseSchema = z
  .object({
    data: z.array(OpportunitySchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'opportunities' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetOpportunitiesResponse',
    'x-graphql-type-name': 'OpportunityList',
  })
  .openapi('GetOpportunitiesResponse')

const GetOpportunityResponseSchema = z
  .object({
    data: OpportunitySchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'opportunities' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetOpportunityResponse',
  })
  .openapi('GetOpportunityResponse')

const PipelineSchema = z
  .strictObject({
    active: z.boolean().exactOptional().openapi({ example: false }),
    archived: z.boolean().exactOptional().openapi({ example: false }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the object was created.',
        example: '2020-09-30T07:43:32.000Z',
        readOnly: true,
        title: 'Created at (timestamp)',
      }),
    currency: CurrencySchema.exactOptional(),
    display_order: z.int().exactOptional().openapi({ example: 1 }),
    id: z.string().exactOptional().openapi({ example: 'default' }),
    name: z.string().min(1).openapi({ example: 'Sales Pipeline' }),
    stages: z
      .array(
        z
          .strictObject({
            display_order: z.int().exactOptional().openapi({ example: 1 }),
            id: z.string().exactOptional().openapi({ example: 'contractsent', readOnly: true }),
            name: z.string().exactOptional().openapi({ example: 'Contract Sent' }),
            value: z.string().exactOptional().openapi({ example: 'CONTRACT_SENT' }),
            win_probability: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'The expected probability of winning an Opportunity in this Pipeline Stage. Valid values are [0-100].',
                example: 50,
              }),
          })
          .openapi({
            'x-apideck-weights': {
              display_order: 'medium',
              id: 'medium',
              name: 'medium',
              value: 'medium',
              win_probability: 'medium',
            },
            required: [],
          }),
      )
      .exactOptional(),
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
    win_probability_enabled: z.boolean().exactOptional().openapi({ example: true }),
  })
  .openapi({
    required: ['name'],
    'x-apideck-schema-id': 'Pipeline',
    'x-apideck-weights': {
      archived: 'low',
      created_at: 'medium',
      currency: 'low',
      display_order: 'edge-case',
      id: 'critical',
      name: 'critical',
      stages: 'high',
      updated_at: 'medium',
      win_probability_enabled: 'edge-case',
    },
    'x-pii': [],
  })
  .openapi('Pipeline')

const GetPipelineResponseSchema = z
  .object({
    data: PipelineSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'pipelines' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetPipelineResponse',
  })
  .openapi('GetPipelineResponse')

const GetPipelinesResponseSchema = z
  .object({
    data: z.array(PipelineSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'pipelines' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetPipelinesResponse',
    'x-graphql-type-name': 'PipelinesList',
  })
  .openapi('GetPipelinesResponse')

const UserSchema = z
  .object({
    addresses: z.array(AddressSchema).exactOptional(),
    company_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The name of the company.',
        example: 'SpaceX',
        title: 'Company name',
      }),
    created_at: z
      .string()
      .exactOptional()
      .openapi({ example: '2017-08-12T20:43:21.291Z', readOnly: true }),
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
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A description of the object.',
        example: 'A description',
        title: 'Description',
      }),
    division: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The division the person is currently in. Usually a collection of departments or teams or regions.',
        example: 'Europe',
        title: 'Division',
      }),
    emails: z.array(EmailSchema),
    employee_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An Employee Number, Employee ID or Employee Code, is a unique number that has been assigned to each individual staff member within a company.',
        example: '123456-AB',
        title: 'Employee number',
      }),
    first_name: FirstNameSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ example: '12345', readOnly: true }),
    image: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'https://logo.clearbit.com/spacex.com?s=128' }),
    language: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'language code according to ISO 639-1. For the United States - EN',
        example: 'EN',
      }),
    last_name: LastNameSchema.exactOptional(),
    parent_id: z.string().nullable().exactOptional().openapi({ example: '54321' }),
    password: z
      .string()
      .exactOptional()
      .openapi({ example: 'supersecretpassword', writeOnly: true }),
    phone_numbers: z.array(PhoneNumberSchema).exactOptional(),
    status: z.string().nullable().exactOptional().openapi({ example: 'active' }),
    title: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The job title of the person.', example: 'CEO', title: 'Job title' }),
    updated_at: z
      .string()
      .exactOptional()
      .openapi({ example: '2017-08-12T20:43:21.291Z', readOnly: true }),
    username: z.string().nullable().exactOptional().openapi({ example: 'masterofcoin' }),
  })
  .openapi({
    required: ['emails'],
    'x-apideck-schema-id': 'User',
    'x-apideck-weights': {
      addresses: 'high',
      company_name: 'medium',
      created_at: 'medium',
      department: 'medium',
      description: 'low',
      division: 'medium',
      emails: 'high',
      employee_number: 'medium',
      first_name: 'high',
      id: 'critical',
      image: 'medium',
      language: 'medium',
      last_name: 'high',
      parent_id: 'edge-case',
      password: 'medium',
      phone_numbers: 'high',
      status: 'high',
      title: 'high',
      updated_at: 'medium',
      username: 'medium',
    },
    'x-pii': ['username', 'first_name', 'last_name', 'email'],
  })
  .openapi('User')

const GetUserResponseSchema = z
  .object({
    data: UserSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'one' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetUserResponse',
  })
  .openapi('GetUserResponse')

const GetUsersResponseSchema = z
  .object({
    data: z.array(UserSchema),
    links: LinksSchema.exactOptional(),
    meta: MetaSchema.exactOptional(),
    operation: z.string().openapi({ description: 'Operation performed', example: 'all' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'users' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'GetUsersResponse',
    'x-graphql-type-name': 'UserList',
  })
  .openapi('GetUsersResponse')

const LeadsFilterSchema = z
  .strictObject({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'E-mail of the lead to filter on', example: 'elon@tesla.com' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of the lead to filter on', example: 'Elon' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of the lead to filter on', example: 'Musk' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the lead to filter on', example: 'Elon Musk' }),
  })
  .openapi({
    example: { email: 'elon@tesla.com', first_name: 'Elon', last_name: 'Musk' },
    'x-apideck-schema-id': 'LeadsFilter',
    'x-graphql-type-name': 'LeadsFilter',
    required: [],
  })
  .openapi('LeadsFilter')

const LeadsSortSchema = z
  .strictObject({
    by: z
      .enum(['created_at', 'updated_at', 'name', 'first_name', 'last_name', 'email'])
      .exactOptional()
      .openapi({
        description: 'The field on which to sort the Leads',
        example: 'created_at',
        'x-apideck-enum-id': 'leads.sort_by',
        'x-graphql-type-name': 'LeadsSortBy',
      }),
    direction: SortDirectionSchema.exactOptional(),
  })
  .openapi({
    example: { by: 'created_at', direction: 'desc' },
    'x-apideck-schema-id': 'LeadsSort',
    'x-graphql-type-name': 'LeadsSort',
    required: [],
  })
  .openapi('LeadsSort')

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

const OpportunitiesFilterSchema = z
  .strictObject({
    company_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Company ID to filter on', example: '1234' }),
    monetary_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Monetary amount to filter on', example: 75000 }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Status to filter on', example: 'Completed' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the opportunity to filter on', example: 'Tesla deal' }),
    win_probability: z
      .number()
      .exactOptional()
      .openapi({ description: 'Win probability to filter on', example: 50 }),
  })
  .openapi({
    example: { monetary_amount: 75000, status: 'Completed' },
    'x-apideck-schema-id': 'OpportunitiesFilter',
    'x-graphql-type-name': 'OpportunitiesFilter',
    required: [],
  })
  .openapi('OpportunitiesFilter')

const OpportunitiesSortSchema = z
  .strictObject({
    by: z
      .enum(['created_at', 'updated_at', 'title', 'win_probability', 'monetary_amount', 'status'])
      .exactOptional()
      .openapi({
        description: 'The field on which to sort the Opportunities',
        example: 'created_at',
        'x-apideck-enum-id': 'opportunities.sort_by',
        'x-graphql-type-name': 'OpportunitiesSortBy',
      }),
    direction: SortDirectionSchema.exactOptional(),
  })
  .openapi({
    example: { by: 'created_at', direction: 'desc' },
    'x-apideck-schema-id': 'OpportunitiesSort',
    'x-graphql-type-name': 'OpportunitiesSort',
    required: [],
  })
  .openapi('OpportunitiesSort')

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

const UpdateActivityResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'activities' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateActivityResponse',
  })
  .openapi('UpdateActivityResponse')

const UpdateCompanyResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateCompanyResponse',
  })
  .openapi('UpdateCompanyResponse')

const UpdateContactResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'contacts' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateContactResponse',
  })
  .openapi('UpdateContactResponse')

const UpdateLeadResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateLeadResponse',
  })
  .openapi('UpdateLeadResponse')

const UpdateNoteResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z.string().openapi({ description: 'Unified API resource name', example: 'notes' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateNoteResponse',
  })
  .openapi('UpdateNoteResponse')

const UpdateOpportunityResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateOpportunityResponse',
  })
  .openapi('UpdateOpportunityResponse')

const UpdatePipelineResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'pipelines' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdatePipelineResponse',
  })
  .openapi('UpdatePipelineResponse')

const UpdateUserResponseSchema = z
  .object({
    data: UnifiedIdSchema,
    operation: z.string().openapi({ description: 'Operation performed', example: 'update' }),
    resource: z
      .string()
      .openapi({ description: 'Unified API resource name', example: 'companies' }),
    service: z
      .string()
      .openapi({ description: 'Apideck ID of service provider', example: 'zoho-crm' }),
    status: z.string().openapi({ description: 'HTTP Response Status', example: 'OK' }),
    status_code: z.int().openapi({ description: 'HTTP Response Status Code', example: 200 }),
  })
  .openapi({
    required: ['status_code', 'status', 'service', 'resource', 'operation', 'data'],
    'x-apideck-schema-id': 'UpdateUserResponse',
  })
  .openapi('UpdateUserResponse')

const BadRequestResponseResponse = {
  description: 'Bad Request',
  content: { 'application/json': { schema: BadRequestResponseSchema } },
}

const CreateActivityResponseResponse = {
  description: 'Activity created',
  content: { 'application/json': { schema: CreateActivityResponseSchema } },
}

const CreateCompanyResponseResponse = {
  description: 'Company created',
  content: { 'application/json': { schema: CreateCompanyResponseSchema } },
}

const CreateContactResponseResponse = {
  description: 'Contact created',
  content: { 'application/json': { schema: CreateContactResponseSchema } },
}

const CreateLeadResponseResponse = {
  description: 'Lead created',
  content: { 'application/json': { schema: CreateLeadResponseSchema } },
}

const CreateNoteResponseResponse = {
  description: 'Note created',
  content: { 'application/json': { schema: CreateNoteResponseSchema } },
}

const CreateOpportunityResponseResponse = {
  description: 'Opportunity created',
  content: { 'application/json': { schema: CreateOpportunityResponseSchema } },
}

const CreatePipelineResponseResponse = {
  description: 'Pipeline created',
  content: { 'application/json': { schema: CreatePipelineResponseSchema } },
}

const CreateUserResponseResponse = {
  description: 'User created',
  content: { 'application/json': { schema: CreateUserResponseSchema } },
}

const DeleteActivityResponseResponse = {
  description: 'Activity deleted',
  content: { 'application/json': { schema: DeleteActivityResponseSchema } },
}

const DeleteCompanyResponseResponse = {
  description: 'Company deleted',
  content: { 'application/json': { schema: DeleteCompanyResponseSchema } },
}

const DeleteContactResponseResponse = {
  description: 'Contact deleted',
  content: { 'application/json': { schema: DeleteContactResponseSchema } },
}

const DeleteLeadResponseResponse = {
  description: 'Lead deleted',
  content: { 'application/json': { schema: DeleteLeadResponseSchema } },
}

const DeleteNoteResponseResponse = {
  description: 'Note deleted',
  content: { 'application/json': { schema: DeleteNoteResponseSchema } },
}

const DeleteOpportunityResponseResponse = {
  description: 'Opportunity deleted',
  content: { 'application/json': { schema: DeleteOpportunityResponseSchema } },
}

const DeletePipelineResponseResponse = {
  description: 'Pipeline deleted',
  content: { 'application/json': { schema: DeletePipelineResponseSchema } },
}

const DeleteUserResponseResponse = {
  description: 'User deleted',
  content: { 'application/json': { schema: DeleteUserResponseSchema } },
}

const GetActivitiesResponseResponse = {
  description: 'Activities',
  content: { 'application/json': { schema: GetActivitiesResponseSchema } },
}

const GetActivityResponseResponse = {
  description: 'Activity',
  content: { 'application/json': { schema: GetActivityResponseSchema } },
  links: {
    company: { operationId: 'companiesOne', parameters: { id: '$response.body#/data/company_id' } },
    contact: { operationId: 'contactsOne', parameters: { id: '$response.body#/data/contact_id' } },
    lead: { operationId: 'leadsOne', parameters: { id: '$response.body#/data/lead_id' } },
    opportunity: {
      operationId: 'opportunitiesOne',
      parameters: { id: '$response.body#/data/opportunity_id' },
    },
    owner: { operationId: 'usersOne', parameters: { id: '$response.body#/data/owner_id' } },
  },
}

const GetCompaniesResponseResponse = {
  description: 'Companies',
  content: { 'application/json': { schema: GetCompaniesResponseSchema } },
}

const GetCompanyResponseResponse = {
  description: 'Company',
  content: { 'application/json': { schema: GetCompanyResponseSchema } },
  links: {
    owner: { operationId: 'usersOne', parameters: { id: '$response.body#/data/owner_id' } },
    parentById: {
      operationId: 'companiesOne',
      parameters: { id: '$response.body#/data/parent_id' },
    },
  },
}

const GetContactResponseResponse = {
  description: 'Contact',
  content: { 'application/json': { schema: GetContactResponseSchema } },
  links: {
    company: { operationId: 'companiesOne', parameters: { id: '$response.body#/data/company_id' } },
    lead: { operationId: 'leadsOne', parameters: { id: '$response.body#/data/lead_id' } },
    owner: { operationId: 'usersOne', parameters: { id: '$response.body#/data/owner_id' } },
  },
}

const GetContactsResponseResponse = {
  description: 'Contacts',
  content: { 'application/json': { schema: GetContactsResponseSchema } },
}

const GetCrmLeadResponseResponse = {
  description: 'Lead',
  content: { 'application/json': { schema: GetLeadResponseSchema } },
  links: {
    company: { operationId: 'companiesOne', parameters: { id: '$response.body#/data/company_id' } },
    contact: { operationId: 'contactsOne', parameters: { id: '$response.body#/data/contact_id' } },
    owner: { operationId: 'usersOne', parameters: { id: '$response.body#/data/owner_id' } },
  },
}

const GetLeadsResponseResponse = {
  description: 'Leads',
  content: { 'application/json': { schema: GetLeadsResponseSchema } },
}

const GetNoteResponseResponse = {
  description: 'Note',
  content: { 'application/json': { schema: GetNoteResponseSchema } },
  links: {
    company: { operationId: 'companiesOne', parameters: { id: '$response.body#/data/company_id' } },
    contact: { operationId: 'contactsOne', parameters: { id: '$response.body#/data/contact_id' } },
    lead: { operationId: 'leadsOne', parameters: { id: '$response.body#/data/lead_id' } },
    opportunity: {
      operationId: 'opportunitiesOne',
      parameters: { id: '$response.body#/data/opportunity_id' },
    },
    owner: { operationId: 'usersOne', parameters: { id: '$response.body#/data/owner_id' } },
  },
}

const GetNotesResponseResponse = {
  description: 'Notes',
  content: { 'application/json': { schema: GetNotesResponseSchema } },
}

const GetOpportunitiesResponseResponse = {
  description: 'Opportunities',
  content: { 'application/json': { schema: GetOpportunitiesResponseSchema } },
}

const GetOpportunityResponseResponse = {
  description: 'Opportunity',
  content: { 'application/json': { schema: GetOpportunityResponseSchema } },
  links: {
    company: { operationId: 'companiesOne', parameters: { id: '$response.body#/data/company_id' } },
    contact: { operationId: 'contactsOne', parameters: { id: '$response.body#/data/contact_id' } },
    lead: { operationId: 'leadsOne', parameters: { id: '$response.body#/data/lead_id' } },
    owner: { operationId: 'usersOne', parameters: { id: '$response.body#/data/owner_id' } },
    pipelineById: {
      operationId: 'pipelinesOne',
      parameters: { id: '$response.body#/data/pipeline_id' },
    },
    primarycontact: {
      operationId: 'contactsOne',
      parameters: { id: '$response.body#/data/primary_contact_id' },
    },
  },
}

const GetPipelineResponseResponse = {
  description: 'Pipeline',
  content: { 'application/json': { schema: GetPipelineResponseSchema } },
}

const GetPipelinesResponseResponse = {
  description: 'Pipelines',
  content: { 'application/json': { schema: GetPipelinesResponseSchema } },
}

const GetUserResponseResponse = {
  description: 'User',
  content: { 'application/json': { schema: GetUserResponseSchema } },
}

const GetUsersResponseResponse = {
  description: 'Users',
  content: { 'application/json': { schema: GetUsersResponseSchema } },
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

const UpdateActivityResponseResponse = {
  description: 'Activity updated',
  content: { 'application/json': { schema: UpdateActivityResponseSchema } },
}

const UpdateCompanyResponseResponse = {
  description: 'Company updated',
  content: { 'application/json': { schema: UpdateCompanyResponseSchema } },
}

const UpdateContactResponseResponse = {
  description: 'Contact updated',
  content: { 'application/json': { schema: UpdateContactResponseSchema } },
}

const UpdateLeadResponseResponse = {
  description: 'Lead updated',
  content: { 'application/json': { schema: UpdateLeadResponseSchema } },
}

const UpdateNoteResponseResponse = {
  description: 'Note updated',
  content: { 'application/json': { schema: UpdateNoteResponseSchema } },
}

const UpdateOpportunityResponseResponse = {
  description: 'Opportunity updated',
  content: { 'application/json': { schema: UpdateOpportunityResponseSchema } },
}

const UpdatePipelineResponseResponse = {
  description: 'Pipeline updated',
  content: { 'application/json': { schema: UpdatePipelineResponseSchema } },
}

const UpdateUserResponseResponse = {
  description: 'User updated',
  content: { 'application/json': { schema: UpdateUserResponseSchema } },
}

const ActivitiesFilterParamsSchema = ActivitiesFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/ActivitiesFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

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

const CompaniesFilterParamsSchema = CompaniesFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/CompaniesFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const CompaniesSortParamsSchema = CompaniesSortSchema.openapi({
  param: {
    description: 'Apply sorting',
    explode: true,
    in: 'query',
    name: 'sort',
    schema: { $ref: '#/components/schemas/CompaniesSort' },
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

const ContactsFilterParamsSchema = ContactsFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/ContactsFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const ContactsSortParamsSchema = ContactsSortSchema.openapi({
  param: {
    description: 'Apply sorting',
    explode: true,
    in: 'query',
    name: 'sort',
    schema: { $ref: '#/components/schemas/ContactsSort' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

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

const LeadsFilterParamsSchema = LeadsFilterSchema.openapi({
  param: {
    description: 'Apply filters',
    explode: true,
    in: 'query',
    name: 'filter',
    schema: { $ref: '#/components/schemas/LeadsFilter' },
    style: 'deepObject',
    required: false,
  },
}).exactOptional()

const LeadsSortParamsSchema = LeadsSortSchema.openapi({
  param: {
    description: 'Apply sorting',
    explode: true,
    in: 'query',
    name: 'sort',
    schema: { $ref: '#/components/schemas/LeadsSort' },
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

const OpportunitiesFilterParamsSchema = z
  .strictObject({
    company_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Company ID to filter on', example: '1234' }),
    monetary_amount: z
      .preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        z.number(),
      )
      .exactOptional()
      .openapi({ description: 'Monetary amount to filter on', example: 75000 }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Status to filter on', example: 'Completed' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of the opportunity to filter on', example: 'Tesla deal' }),
    win_probability: z
      .preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        z.number(),
      )
      .exactOptional()
      .openapi({ description: 'Win probability to filter on', example: 50 }),
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
        example: { monetary_amount: 75000, status: 'Completed' },
        properties: {
          company_id: { description: 'Company ID to filter on', example: '1234', type: 'string' },
          monetary_amount: {
            description: 'Monetary amount to filter on',
            example: 75000,
            type: 'number',
          },
          status: { description: 'Status to filter on', example: 'Completed', type: 'string' },
          title: {
            description: 'Title of the opportunity to filter on',
            example: 'Tesla deal',
            type: 'string',
          },
          win_probability: {
            description: 'Win probability to filter on',
            example: 50,
            type: 'number',
          },
        },
        type: 'object',
        'x-apideck-schema-id': 'OpportunitiesFilter',
        'x-graphql-type-name': 'OpportunitiesFilter',
      },
      style: 'deepObject',
      required: false,
    },
    example: { monetary_amount: 75000, status: 'Completed' },
    'x-apideck-schema-id': 'OpportunitiesFilter',
    'x-graphql-type-name': 'OpportunitiesFilter',
    required: [],
  })

const OpportunitiesSortParamsSchema = OpportunitiesSortSchema.openapi({
  param: {
    description: 'Apply sorting',
    explode: true,
    in: 'query',
    name: 'sort',
    schema: { $ref: '#/components/schemas/OpportunitiesSort' },
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

const ApplicationIdSecurityScheme = {
  description: 'The ID of your Unify application',
  in: 'header',
  name: 'x-apideck-app-id',
  type: 'apiKey',
}

const ConsumerIdSecurityScheme = {
  description: 'The ID of the consumer which you want to get or push data from',
  in: 'header',
  name: 'x-apideck-consumer-id',
  type: 'apiKey',
}

export const getCrmActivitiesRoute = createRoute({
  method: 'get',
  path: '/crm/activities',
  tags: ['Activities'],
  summary: 'List activities',
  description: 'List activities',
  operationId: 'activitiesAll',
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
          filter: ActivitiesFilterParamsSchema,
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
    200: GetActivitiesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postCrmActivitiesRoute = createRoute({
  method: 'post',
  path: '/crm/activities',
  tags: ['Activities'],
  summary: 'Create activity',
  description: 'Create activity',
  operationId: 'activitiesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: ActivitySchema } }, required: true },
  },
  responses: {
    201: CreateActivityResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmActivitiesIdRoute = createRoute({
  method: 'get',
  path: '/crm/activities/{id}',
  tags: ['Activities'],
  summary: 'Get activity',
  description: 'Get activity',
  operationId: 'activitiesOne',
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
    200: GetActivityResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCrmActivitiesIdRoute = createRoute({
  method: 'delete',
  path: '/crm/activities/{id}',
  tags: ['Activities'],
  summary: 'Delete activity',
  description: 'Delete activity',
  operationId: 'activitiesDelete',
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
    200: DeleteActivityResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchCrmActivitiesIdRoute = createRoute({
  method: 'patch',
  path: '/crm/activities/{id}',
  tags: ['Activities'],
  summary: 'Update activity',
  description: 'Update activity',
  operationId: 'activitiesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: ActivitySchema } }, required: true },
  },
  responses: {
    200: UpdateActivityResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmCompaniesRoute = createRoute({
  method: 'get',
  path: '/crm/companies',
  tags: ['Companies'],
  summary: 'List companies',
  description: 'List companies',
  operationId: 'companiesAll',
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
          filter: CompaniesFilterParamsSchema,
          sort: CompaniesSortParamsSchema,
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
    200: GetCompaniesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postCrmCompaniesRoute = createRoute({
  method: 'post',
  path: '/crm/companies',
  tags: ['Companies'],
  summary: 'Create company',
  description: 'Create company',
  operationId: 'companiesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: CompanySchema } }, required: true },
  },
  responses: {
    201: CreateCompanyResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmCompaniesIdRoute = createRoute({
  method: 'get',
  path: '/crm/companies/{id}',
  tags: ['Companies'],
  summary: 'Get company',
  description: 'Get company',
  operationId: 'companiesOne',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ raw: RawParamsSchema, fields: FieldsParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: GetCompanyResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCrmCompaniesIdRoute = createRoute({
  method: 'delete',
  path: '/crm/companies/{id}',
  tags: ['Companies'],
  summary: 'Delete company',
  description: 'Delete company',
  operationId: 'companiesDelete',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
  },
  responses: {
    200: DeleteCompanyResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchCrmCompaniesIdRoute = createRoute({
  method: 'patch',
  path: '/crm/companies/{id}',
  tags: ['Companies'],
  summary: 'Update company',
  description: 'Update company',
  operationId: 'companiesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: CompanySchema } }, required: true },
  },
  responses: {
    200: UpdateCompanyResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmContactsRoute = createRoute({
  method: 'get',
  path: '/crm/contacts',
  tags: ['Contacts'],
  summary: 'List contacts',
  description: 'List contacts',
  operationId: 'contactsAll',
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
          filter: ContactsFilterParamsSchema,
          sort: ContactsSortParamsSchema,
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
    200: GetContactsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postCrmContactsRoute = createRoute({
  method: 'post',
  path: '/crm/contacts',
  tags: ['Contacts'],
  summary: 'Create contact',
  description: 'Create contact',
  operationId: 'contactsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: ContactSchema } }, required: true },
  },
  responses: {
    201: CreateContactResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmContactsIdRoute = createRoute({
  method: 'get',
  path: '/crm/contacts/{id}',
  tags: ['Contacts'],
  summary: 'Get contact',
  description: 'Get contact',
  operationId: 'contactsOne',
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
    200: GetContactResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCrmContactsIdRoute = createRoute({
  method: 'delete',
  path: '/crm/contacts/{id}',
  tags: ['Contacts'],
  summary: 'Delete contact',
  description: 'Delete contact',
  operationId: 'contactsDelete',
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
    200: DeleteContactResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchCrmContactsIdRoute = createRoute({
  method: 'patch',
  path: '/crm/contacts/{id}',
  tags: ['Contacts'],
  summary: 'Update contact',
  description: 'Update contact',
  operationId: 'contactsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: ContactSchema } }, required: true },
  },
  responses: {
    200: UpdateContactResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmLeadsRoute = createRoute({
  method: 'get',
  path: '/crm/leads',
  tags: ['Leads'],
  summary: 'List leads',
  description: 'List leads',
  operationId: 'leadsAll',
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
          filter: LeadsFilterParamsSchema,
          sort: LeadsSortParamsSchema,
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
    200: GetLeadsResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postCrmLeadsRoute = createRoute({
  method: 'post',
  path: '/crm/leads',
  tags: ['Leads'],
  summary: 'Create lead',
  description: 'Create lead',
  operationId: 'leadsAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: LeadSchema } }, required: true },
  },
  responses: {
    201: CreateLeadResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmLeadsIdRoute = createRoute({
  method: 'get',
  path: '/crm/leads/{id}',
  tags: ['Leads'],
  summary: 'Get lead',
  description: 'Get lead',
  operationId: 'leadsOne',
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
    200: GetCrmLeadResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCrmLeadsIdRoute = createRoute({
  method: 'delete',
  path: '/crm/leads/{id}',
  tags: ['Leads'],
  summary: 'Delete lead',
  description: 'Delete lead',
  operationId: 'leadsDelete',
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
    200: DeleteLeadResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchCrmLeadsIdRoute = createRoute({
  method: 'patch',
  path: '/crm/leads/{id}',
  tags: ['Leads'],
  summary: 'Update lead',
  description: 'Update lead',
  operationId: 'leadsUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: LeadSchema } }, required: true },
  },
  responses: {
    200: UpdateLeadResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmNotesRoute = createRoute({
  method: 'get',
  path: '/crm/notes',
  tags: ['Notes'],
  summary: 'List notes',
  description: 'List notes',
  operationId: 'notesAll',
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
    200: GetNotesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postCrmNotesRoute = createRoute({
  method: 'post',
  path: '/crm/notes',
  tags: ['Notes'],
  summary: 'Create note',
  description: 'Create note',
  operationId: 'notesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: NoteSchema } }, required: true },
  },
  responses: {
    201: CreateNoteResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmNotesIdRoute = createRoute({
  method: 'get',
  path: '/crm/notes/{id}',
  tags: ['Notes'],
  summary: 'Get note',
  description: 'Get note',
  operationId: 'notesOne',
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
    200: GetNoteResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCrmNotesIdRoute = createRoute({
  method: 'delete',
  path: '/crm/notes/{id}',
  tags: ['Notes'],
  summary: 'Delete note',
  description: 'Delete note',
  operationId: 'notesDelete',
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
    200: DeleteNoteResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchCrmNotesIdRoute = createRoute({
  method: 'patch',
  path: '/crm/notes/{id}',
  tags: ['Notes'],
  summary: 'Update note',
  description: 'Update note',
  operationId: 'notesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: NoteSchema } }, required: true },
  },
  responses: {
    200: UpdateNoteResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmOpportunitiesRoute = createRoute({
  method: 'get',
  path: '/crm/opportunities',
  tags: ['Opportunities'],
  summary: 'List opportunities',
  description: 'List opportunities',
  operationId: 'opportunitiesAll',
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
          filter: OpportunitiesFilterParamsSchema,
          sort: OpportunitiesSortParamsSchema,
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
    200: GetOpportunitiesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postCrmOpportunitiesRoute = createRoute({
  method: 'post',
  path: '/crm/opportunities',
  tags: ['Opportunities'],
  summary: 'Create opportunity',
  description: 'Create opportunity',
  operationId: 'opportunitiesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: OpportunitySchema } }, required: true },
  },
  responses: {
    201: CreateOpportunityResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmOpportunitiesIdRoute = createRoute({
  method: 'get',
  path: '/crm/opportunities/{id}',
  tags: ['Opportunities'],
  summary: 'Get opportunity',
  description: 'Get opportunity',
  operationId: 'opportunitiesOne',
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
    200: GetOpportunityResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCrmOpportunitiesIdRoute = createRoute({
  method: 'delete',
  path: '/crm/opportunities/{id}',
  tags: ['Opportunities'],
  summary: 'Delete opportunity',
  description: 'Delete opportunity',
  operationId: 'opportunitiesDelete',
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
    200: DeleteOpportunityResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchCrmOpportunitiesIdRoute = createRoute({
  method: 'patch',
  path: '/crm/opportunities/{id}',
  tags: ['Opportunities'],
  summary: 'Update opportunity',
  description: 'Update opportunity',
  operationId: 'opportunitiesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: OpportunitySchema } }, required: true },
  },
  responses: {
    200: UpdateOpportunityResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmPipelinesRoute = createRoute({
  method: 'get',
  path: '/crm/pipelines',
  tags: ['Pipelines'],
  summary: 'List pipelines',
  description: 'List pipelines',
  operationId: 'pipelinesAll',
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
    200: GetPipelinesResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postCrmPipelinesRoute = createRoute({
  method: 'post',
  path: '/crm/pipelines',
  tags: ['Pipelines'],
  summary: 'Create pipeline',
  description: 'Create pipeline',
  operationId: 'pipelinesAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: PipelineSchema } }, required: true },
  },
  responses: {
    201: CreatePipelineResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmPipelinesIdRoute = createRoute({
  method: 'get',
  path: '/crm/pipelines/{id}',
  tags: ['Pipelines'],
  summary: 'Get pipeline',
  description: 'Get pipeline',
  operationId: 'pipelinesOne',
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
    200: GetPipelineResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCrmPipelinesIdRoute = createRoute({
  method: 'delete',
  path: '/crm/pipelines/{id}',
  tags: ['Pipelines'],
  summary: 'Delete pipeline',
  description: 'Delete pipeline',
  operationId: 'pipelinesDelete',
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
    200: DeletePipelineResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchCrmPipelinesIdRoute = createRoute({
  method: 'patch',
  path: '/crm/pipelines/{id}',
  tags: ['Pipelines'],
  summary: 'Update pipeline',
  description: 'Update pipeline',
  operationId: 'pipelinesUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: PipelineSchema } }, required: true },
  },
  responses: {
    200: UpdatePipelineResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmUsersRoute = createRoute({
  method: 'get',
  path: '/crm/users',
  tags: ['Users'],
  summary: 'List users',
  description: 'List users',
  operationId: 'usersAll',
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
    200: GetUsersResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const postCrmUsersRoute = createRoute({
  method: 'post',
  path: '/crm/users',
  tags: ['Users'],
  summary: 'Create user',
  description: 'Create user',
  operationId: 'usersAdd',
  request: {
    query: z.object({ raw: RawParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    body: { content: { 'application/json': { schema: UserSchema } }, required: true },
  },
  responses: {
    201: CreateUserResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const getCrmUsersIdRoute = createRoute({
  method: 'get',
  path: '/crm/users/{id}',
  tags: ['Users'],
  summary: 'Get user',
  description: 'Get user',
  operationId: 'usersOne',
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
    200: GetUserResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const deleteCrmUsersIdRoute = createRoute({
  method: 'delete',
  path: '/crm/users/{id}',
  tags: ['Users'],
  summary: 'Delete user',
  description: 'Delete user',
  operationId: 'usersDelete',
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
    200: DeleteUserResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

export const patchCrmUsersIdRoute = createRoute({
  method: 'patch',
  path: '/crm/users/{id}',
  tags: ['Users'],
  summary: 'Update user',
  description: 'Update user',
  operationId: 'usersUpdate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    headers: z.object({
      'x-apideck-consumer-id': ConsumerIdParamsSchema,
      'x-apideck-app-id': ApplicationIdParamsSchema,
      'x-apideck-service-id': ServiceIdParamsSchema,
    }),
    query: z.object({ raw: RawParamsSchema }),
    body: { content: { 'application/json': { schema: UserSchema } }, required: true },
  },
  responses: {
    200: UpdateUserResponseResponse,
    400: BadRequestResponseResponse,
    401: UnauthorizedResponseResponse,
    402: PaymentRequiredResponseResponse,
    404: NotFoundResponseResponse,
    422: UnprocessableResponseResponse,
    default: UnexpectedErrorResponseResponse,
  },
  security: [{ apiKey: [] }],
})

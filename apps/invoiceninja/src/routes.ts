import { createRoute, z } from '@hono/zod-openapi'

const CreditPaymentableSchema = z
  .object({
    credit_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The credit hashed id', example: 'Opnel5aKBz' }),
    amount: z.string().exactOptional().openapi({ description: 'The credit amount', example: '2' }),
  })
  .openapi({ required: [] })
  .openapi('CreditPaymentable')

const GenericReportSchemaSchema = z
  .object({
    date_range: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The string representation of the date range of data to be returned',
        example: 'last7',
      }),
    date_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date column to search between.', example: 'created_at' }),
    start_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start date to search between', example: '2000-10-31' }),
    end_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end date to search between', example: '2' }),
    report_keys: z
      .array(
        z.string().openapi({ description: 'Array of Keys to export', example: "['name','date']" }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GenericReportSchema')

const GroupSettingSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The group setting hashed id', example: 'Opnel5aKBz' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'Opnel5aKBz' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the group', example: 'A groupies group' }),
    settings: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The settings object', example: {} }),
  })
  .openapi({ required: [] })
  .openapi('GroupSetting')

const InvoicePaymentableSchema = z
  .object({
    invoice_id: z
      .string()
      .exactOptional()
      .openapi({ description: '______', example: 'Opnel5aKBz' }),
    amount: z.string().exactOptional().openapi({ description: '______', example: '2' }),
  })
  .openapi({ required: [] })
  .openapi('InvoicePaymentable')

const TaskSchedulerSchemaSchema = z
  .object({
    paused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The scheduler paused state', example: false }),
    repeat_every: z
      .string()
      .exactOptional()
      .openapi({ description: 'Accepted values (DAY,WEEK,MONTH,3MONTHS,YEAR)', example: 'DAY' }),
    start_from: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Timestamp when we should start the scheduler, default is today',
        example: 1652898504,
      }),
    job: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Job, we can find list of available jobs in Scheduler model',
        example: 'create_credit_report',
      }),
    date_range: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The string representation of the date range of data to be returned',
        example: 'last7',
      }),
    date_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date column to search between.', example: 'created_at' }),
    start_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start date to search between', example: '2022-10-31' }),
    end_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end date to search between', example: '2022-10-31' }),
    report_keys: z
      .array(
        z.string().openapi({ description: 'Array of Keys to export', example: "['name','date']" }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TaskSchedulerSchema')

const UpdateTaskSchedulerSchemaSchema = z
  .object({
    paused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The scheduler paused state', example: false }),
    repeat_every: z
      .string()
      .exactOptional()
      .openapi({ description: 'Accepted values (DAY,WEEK,MONTH,3MONTHS,YEAR)', example: 'DAY' }),
    start_from: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Timestamp when we should start the scheduler, default is today',
        example: 1652898504,
      }),
    job: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Job, we can find list of available jobs in Scheduler model',
        example: 'create_credit_report',
      }),
    date_range: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The string representation of the date range of data to be returned',
        example: 'last7',
      }),
    date_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date column to search between.', example: 'created_at' }),
    start_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start date to search between', example: '2022-10-31' }),
    end_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end date to search between', example: '2022-10-31' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateTaskSchedulerSchema')

const UpdateJobForASchedulerSchemaSchema = z
  .object({
    job: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Set action name, action names can be found in Scheduler Model',
        example: 'create_client_report',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateJobForASchedulerSchema')

const TaskStatusSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task status hashed id', example: 'Opnel5aKBz', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task status name', example: 'Backlog' }),
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task status color - hex value', example: '#000000' }),
    task_status_order: z
      .int()
      .exactOptional()
      .openapi({ description: 'The order of the task status', example: 4 }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean flag determining if the task status has been deleted',
        example: true,
        readOnly: true,
      }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('TaskStatus')

const TaxRateSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Thie hashed id of the tax', example: 'Opnel5aKBz', readOnly: true }),
    name: z.string().exactOptional().openapi({ description: 'The tax name', example: 'GST' }),
    rate: z.number().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the tax has been deleted',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('TaxRate')

const TemplateSchema = z
  .object({
    html: z
      .string()
      .exactOptional()
      .openapi({ description: 'The template HTML', example: '<HTML></HTML>' }),
  })
  .openapi({ required: [] })
  .openapi('Template')

const AuthenticationErrorSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'These credentials do not match our records / Invalid Token',
        example: 'These credentials do not match our records / Invalid Token',
      }),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationError')

const ValidationErrorSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error message', example: 'The given data was invalid.' }),
    errors: z
      .object({ value: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ValidationError')

const AuthorizationErrorSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Insufficient permissions for this resource.',
        example: 'Insufficient permissions for this resource.',
      }),
    errors: z
      .object({ value: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('AuthorizationError')

const RateLimiterErrorSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rate limit exceeded.', example: 'Rate limit exceeded.' }),
    errors: z
      .object({ value: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('RateLimiterError')

const InvalidInputErrorSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Invalid input', example: 'Invalid input' }),
    errors: z
      .object({ value: z.array(z.string()).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('InvalidInputError')

const WebhookSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subscription hashed id', example: 'AS3df3A' }),
    event_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subscription event id', example: 'AS3df3A' }),
    target_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The api endpoint', example: 'AS3df3A' }),
    format: z.string().exactOptional().openapi({ description: 'JSON or UBL', example: 'JSON' }),
  })
  .openapi({ required: [] })
  .openapi('Webhook')

const PaymentTypeSchema = z
  .enum([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
  ])
  .openapi({
    description: 'The payment type used to complete this payment',
    example: '1',
    'x-enumDescriptions': {
      '1': 'Bank Transfer',
      '2': 'Cash',
      '3': 'Debit',
      '4': 'ACH',
      '5': 'Visa Card',
      '6': 'MasterCard',
      '7': 'American Express',
      '8': 'Discover Card',
      '9': 'Diners Card',
      '10': 'EuroCard',
      '11': 'Nova',
      '12': 'Credit Card Other',
      '13': 'PayPal',
      '14': 'Google Wallet',
      '15': 'Check',
      '16': 'Carte Blanche',
      '17': 'UnionPay',
      '18': 'JCB',
      '19': 'Laser',
      '20': 'Maestro',
      '21': 'Solo',
      '22': 'Switch',
      '23': 'iZettle',
      '24': 'Swish',
      '25': 'Venmo',
      '26': 'Money Order',
      '27': 'Alipay',
      '28': 'Sofort',
      '29': 'SEPA Direct Debit',
      '30': 'GoCardless',
      '31': 'Cryptocurrency',
      '32': 'Credit',
      '33': 'Zelle',
    },
  })
  .openapi('PaymentType')

const CurrencyTypeSchema = z
  .xor([
    z
      .int()
      .openapi({
        title: 'Currency Types',
        description:
          'Available currency types:\n- 1: US Dollar\n- 2: British Pound\n- 3: Euro\n- 4: South African Rand\n- 5: Danish Krone\n- 6: Israeli Shekel\n- 7: Swedish Krona\n- 8: Kenyan Shilling\n- 9: Canadian Dollar\n- 10: Philippine Peso\n- 11: Indian Rupee\n- 12: Australian Dollar\n- 13: Singapore Dollar\n- 14: Norske Kroner\n- 15: New Zealand Dollar\n- 16: Vietnamese Dong\n- 17: Swiss Franc\n- 18: Guatemalan Quetzal\n- 19: Malaysian Ringgit\n- 20: Brazilian Real\n- 21: Thai Baht\n- 22: Nigerian Naira\n- 23: Argentine Peso\n- 24: Bangladeshi Taka\n- 25: United Arab Emirates Dirham\n- 26: Hong Kong Dollar\n- 27: Indonesian Rupiah\n- 28: Mexican Peso\n- 29: Egyptian Pound\n- 30: Colombian Peso\n- 31: West African Franc\n- 32: Chinese Renminbi\n- 33: Rwandan Franc\n- 34: Tanzanian Shilling\n- 35: Netherlands Antillean Guilder\n- 36: Trinidad and Tobago Dollar\n- 37: East Caribbean Dollar\n- 38: Ghanaian Cedi\n- 39: Bulgarian Lev\n- 40: Aruban Florin\n- 41: Turkish Lira\n- 42: Romanian New Leu\n- 43: Croatian Kuna\n- 44: Saudi Riyal\n- 45: Japanese Yen\n- 46: Maldivian Rufiyaa\n- 47: Costa Rican Colón\n- 48: Pakistani Rupee\n- 49: Polish Zloty\n- 50: Sri Lankan Rupee\n- 51: Czech Koruna\n- 52: Uruguayan Peso\n- 53: Namibian Dollar\n- 54: Tunisian Dinar\n- 55: Russian Ruble\n- 56: Mozambican Metical\n- 57: Omani Rial\n- 58: Ukrainian Hryvnia\n- 59: Macanese Pataca\n- 60: Taiwan New Dollar\n- 61: Dominican Peso\n- 62: Chilean Peso\n- 63: Icelandic Króna\n- 64: Papua New Guinean Kina\n- 65: Jordanian Dinar\n- 66: Myanmar Kyat\n- 67: Peruvian Sol\n- 68: Botswana Pula\n- 69: Hungarian Forint\n- 70: Ugandan Shilling\n- 71: Barbadian Dollar\n- 72: Brunei Dollar\n- 73: Georgian Lari\n- 74: Qatari Riyal\n- 75: Honduran Lempira\n- 76: Surinamese Dollar\n- 77: Bahraini Dinar\n- 78: Venezuelan Bolivars\n- 79: South Korean Won\n- 80: Moroccan Dirham\n- 81: Jamaican Dollar\n- 82: Angolan Kwanza\n- 83: Haitian Gourde\n- 84: Zambian Kwacha\n- 85: Nepalese Rupee\n- 86: CFP Franc\n- 87: Mauritian Rupee\n- 88: Cape Verdean Escudo\n- 89: Kuwaiti Dinar\n- 90: Algerian Dinar\n- 91: Macedonian Denar\n- 92: Fijian Dollar\n- 93: Bolivian Boliviano\n- 94: Albanian Lek\n- 95: Serbian Dinar\n- 96: Lebanese Pound\n- 97: Armenian Dram\n- 98: Azerbaijan Manat\n- 99: Bosnia and Herzegovina Convertible Mark\n- 100: Belarusian Ruble\n- 101: Gibraltar Pound\n- 102: Moldovan Leu\n- 103: Kazakhstani Tenge\n- 104: Ethiopian Birr\n- 105: Gambia Dalasi\n- 106: Paraguayan Guarani\n- 107: Malawi Kwacha\n- 108: Zimbabwean Dollar\n- 109: Cambodian Riel\n- 110: Vanuatu Vatu\n- 111: Cuban Peso\n- 112: Cayman Island Dollar\n- 113: Swazi lilangeni\n- 114: BZ Dollar\n- 115: Libyan Dinar\n- 116: Silver Troy Ounce\n- 117: Gold Troy Ounce\n- 118: Nicaraguan Córdoba\n- 119: Malagasy ariary\n- 120: Tongan Pa anga\n- 121: Lao kip\n- 122: Bhutan Ngultrum\n- 123: Mauritanian Ouguiya\n- 124: Bermudian Dollar\n- 125: Central African CFA Franc\n- 126: Congolese Franc\n- 127: Djiboutian Franc\n- 128: Eritrean Nakfa\n- 129: Falkland Islands Pound\n- 130: Guinean Franc\n- 131: Iraqi Dinar\n- 132: Lesotho Loti\n- 133: Mongolian Tugrik\n- 134: Seychellois Rupee\n- 135: Solomon Islands Dollar\n- 136: Somali Shilling\n- 137: South Sudanese Pound\n- 138: Sudanese Pound\n- 139: Tajikistani Somoni\n- 140: Turkmenistani Manat\n- 141: Uzbekistani Som\n- 142: Samoan Tala\n',
      }),
  ])
  .openapi('CurrencyType')

const LanguageTypeSchema = z
  .xor([
    z
      .int()
      .openapi({
        title: 'Language Types',
        description:
          'Available language types:\n- 1: English - United States\n- 2: Italian\n- 3: German\n- 4: French\n- 5: Portuguese - Brazilian\n- 6: Dutch\n- 7: Spanish\n- 8: Norwegian\n- 9: Danish\n- 10: Japanese\n- 11: Swedish\n- 12: Spanish - Spain\n- 13: French - Canada\n- 14: Lithuanian\n- 15: Polish\n- 16: Czech\n- 17: Croatian\n- 18: Albanian\n- 19: Greek\n- 20: English - United Kingdom\n- 21: Portuguese - Portugal\n- 22: Slovenian\n- 23: Finnish\n- 24: Romanian\n- 25: Turkish - Turkey\n- 26: Thai\n- 27: Macedonian\n- 28: Chinese - Taiwan\n- 29: Russian (Russia)\n- 30: Arabic\n- 31: Persian\n- 32: Latvian\n- 33: Serbian\n- 34: Slovak\n- 35: Estonian\n- 36: Bulgarian\n- 37: Hebrew\n- 38: Khmer\n- 39: Hungarian\n- 40: French - Swiss\n- 41: Lao\n- 42: Vietnamese\n',
      }),
  ])
  .openapi('LanguageType')

const TimezoneTypeSchema = z
  .xor([
    z
      .int()
      .openapi({
        title: 'Timezone Types',
        description:
          'Available timezone types:\n- 1: Pacific/Midway\n- 2: Pacific/Pago_Pago\n- 3: Pacific/Honolulu\n- 4: America/Anchorage\n- 5: America/Los_Angeles\n- 6: America/Tijuana\n- 7: America/Phoenix\n- 8: America/Denver\n- 9: America/Chihuahua\n- 10: America/Mazatlan\n- 11: America/Mexico_City\n- 12: America/Monterrey\n- 13: America/Regina\n- 14: America/Chicago\n- 15: America/New_York\n- 16: America/Indiana/Indianapolis\n- 17: America/Bogota\n- 18: America/Lima\n- 19: America/Caracas\n- 20: America/Halifax\n- 21: America/La_Paz\n- 22: America/Santiago\n- 23: America/St_Johns\n- 24: America/Argentina/Buenos_Aires\n- 25: America/Godthab\n- 26: America/Sao_Paulo\n- 27: Atlantic/Stanley\n- 28: Atlantic/Azores\n- 29: Atlantic/Cape_Verde\n- 30: Africa/Casablanca\n- 31: Europe/Dublin\n- 32: Europe/Lisbon\n- 33: Europe/London\n- 34: Africa/Monrovia\n- 35: Europe/Amsterdam\n- 36: Europe/Belgrade\n- 37: Europe/Berlin\n- 38: Europe/Bratislava\n- 39: Europe/Brussels\n- 40: Europe/Budapest\n- 41: Europe/Copenhagen\n- 42: Europe/Ljubljana\n- 43: Europe/Madrid\n- 44: Europe/Paris\n- 45: Europe/Prague\n- 46: Europe/Rome\n- 47: Europe/Sarajevo\n- 48: Europe/Skopje\n- 49: Europe/Stockholm\n- 50: Europe/Vienna\n- 51: Europe/Warsaw\n- 52: Europe/Zagreb\n- 53: Europe/Athens\n- 54: Europe/Bucharest\n- 55: Africa/Cairo\n- 56: Africa/Harare\n- 57: Europe/Helsinki\n- 58: Asia/Jerusalem\n- 59: Europe/Kyiv\n- 60: Europe/Minsk\n- 61: Europe/Riga\n- 62: Europe/Sofia\n- 63: Europe/Tallinn\n- 64: Europe/Vilnius\n- 65: Europe/Istanbul\n- 66: Asia/Baghdad\n- 67: Asia/Kuwait\n- 68: Africa/Nairobi\n- 69: Asia/Riyadh\n- 70: Asia/Tehran\n- 71: Europe/Moscow\n- 72: Asia/Baku\n- 73: Europe/Volgograd\n- 74: Asia/Muscat\n- 75: Asia/Tbilisi\n- 76: Asia/Yerevan\n- 77: Asia/Kabul\n- 78: Asia/Karachi\n- 79: Asia/Tashkent\n- 80: Asia/Kolkata\n- 81: Asia/Kathmandu\n- 82: Asia/Yekaterinburg\n- 83: Asia/Almaty\n- 84: Asia/Dhaka\n- 85: Asia/Novosibirsk\n- 86: Asia/Bangkok\n- 87: Asia/Ho_Chi_Minh\n- 88: Asia/Jakarta\n- 89: Asia/Krasnoyarsk\n- 90: Asia/Chongqing\n- 91: Asia/Hong_Kong\n- 92: Asia/Kuala_Lumpur\n- 93: Australia/Perth\n- 94: Asia/Singapore\n- 95: Asia/Taipei\n- 96: Asia/Ulaanbaatar\n- 97: Asia/Urumqi\n- 98: Asia/Irkutsk\n- 99: Asia/Seoul\n- 100: Asia/Tokyo\n- 101: Australia/Adelaide\n- 102: Australia/Darwin\n- 103: Asia/Yakutsk\n- 104: Australia/Brisbane\n- 110: Australia/Sydney\n- 106: Pacific/Guam\n- 107: Australia/Hobart\n- 108: Australia/Melbourne\n- 109: Pacific/Port_Moresby\n- 111: Asia/Vladivostok\n- 112: Asia/Magadan\n- 113: Pacific/Auckland\n- 114: Pacific/Fiji\n- 115: Asia/Dubai\n',
      }),
  ])
  .openapi('TimezoneType')

const CountryTypeSchema = z
  .xor([
    z
      .int()
      .openapi({
        title: 'Country Types',
        description:
          "Available country types:\n- 4: Afghanistan (AF/AFG)\n- 8: Albania (AL/ALB)\n- 10: Antarctica (AQ/ATA)\n- 12: Algeria (DZ/DZA)\n- 16: American Samoa (AS/ASM)\n- 20: Andorra (AD/AND)\n- 24: Angola (AO/AGO)\n- 28: Antigua and Barbuda (AG/ATG)\n- 31: Azerbaijan (AZ/AZE)\n- 32: Argentina (AR/ARG)\n- 36: Australia (AU/AUS)\n- 40: Austria (AT/AUT)\n- 44: Bahamas (BS/BHS)\n- 48: Bahrain (BH/BHR)\n- 50: Bangladesh (BD/BGD)\n- 51: Armenia (AM/ARM)\n- 52: Barbados (BB/BRB)\n- 56: Belgium (BE/BEL)\n- 60: Bermuda (BM/BMU)\n- 64: Bhutan (BT/BTN)\n- 68: Bolivia, Plurinational State of (BO/BOL)\n- 70: Bosnia and Herzegovina (BA/BIH)\n- 72: Botswana (BW/BWA)\n- 74: Bouvet Island (BV/BVT)\n- 76: Brazil (BR/BRA)\n- 84: Belize (BZ/BLZ)\n- 86: British Indian Ocean Territory (IO/IOT)\n- 90: Solomon Islands (SB/SLB)\n- 92: Virgin Islands, British (VG/VGB)\n- 96: Brunei Darussalam (BN/BRN)\n- 100: Bulgaria (BG/BGR)\n- 104: Myanmar (MM/MMR)\n- 108: Burundi (BI/BDI)\n- 112: Belarus (BY/BLR)\n- 116: Cambodia (KH/KHM)\n- 120: Cameroon (CM/CMR)\n- 124: Canada (CA/CAN)\n- 132: Cape Verde (CV/CPV)\n- 136: Cayman Islands (KY/CYM)\n- 140: Central African Republic (CF/CAF)\n- 144: Sri Lanka (LK/LKA)\n- 148: Chad (TD/TCD)\n- 152: Chile (CL/CHL)\n- 156: China (CN/CHN)\n- 158: Taiwan (TW/TWN)\n- 162: Christmas Island (CX/CXR)\n- 166: Cocos (Keeling) Islands (CC/CCK)\n- 170: Colombia (CO/COL)\n- 174: Comoros (KM/COM)\n- 175: Mayotte (YT/MYT)\n- 178: Congo (CG/COG)\n- 180: Congo, the Democratic Republic of the (CD/COD)\n- 184: Cook Islands (CK/COK)\n- 188: Costa Rica (CR/CRI)\n- 191: Croatia (HR/HRV)\n- 192: Cuba (CU/CUB)\n- 196: Cyprus (CY/CYP)\n- 203: Czech Republic (CZ/CZE)\n- 204: Benin (BJ/BEN)\n- 208: Denmark (DK/DNK)\n- 212: Dominica (DM/DMA)\n- 214: Dominican Republic (DO/DOM)\n- 218: Ecuador (EC/ECU)\n- 222: El Salvador (SV/SLV)\n- 226: Equatorial Guinea (GQ/GNQ)\n- 231: Ethiopia (ET/ETH)\n- 232: Eritrea (ER/ERI)\n- 233: Estonia (EE/EST)\n- 234: Faroe Islands (FO/FRO)\n- 238: Falkland Islands (Malvinas) (FK/FLK)\n- 239: South Georgia and the South Sandwich Islands (GS/SGS)\n- 242: Fiji (FJ/FJI)\n- 246: Finland (FI/FIN)\n- 248: Åland Islands (AX/ALA)\n- 250: France (FR/FRA)\n- 254: French Guiana (GF/GUF)\n- 258: French Polynesia (PF/PYF)\n- 260: French Southern Territories (TF/ATF)\n- 262: Djibouti (DJ/DJI)\n- 266: Gabon (GA/GAB)\n- 268: Georgia (GE/GEO)\n- 270: Gambia (GM/GMB)\n- 275: Palestine (PS/PSE)\n- 276: Germany (DE/DEU)\n- 288: Ghana (GH/GHA)\n- 292: Gibraltar (GI/GIB)\n- 296: Kiribati (KI/KIR)\n- 300: Greece (GR/GRC)\n- 304: Greenland (GL/GRL)\n- 308: Grenada (GD/GRD)\n- 312: Guadeloupe (GP/GLP)\n- 316: Guam (GU/GUM)\n- 320: Guatemala (GT/GTM)\n- 324: Guinea (GN/GIN)\n- 328: Guyana (GY/GUY)\n- 332: Haiti (HT/HTI)\n- 334: Heard Island and McDonald Islands (HM/HMD)\n- 336: Holy See (Vatican City State) (VA/VAT)\n- 340: Honduras (HN/HND)\n- 344: Hong Kong (HK/HKG)\n- 348: Hungary (HU/HUN)\n- 352: Iceland (IS/ISL)\n- 356: India (IN/IND)\n- 360: Indonesia (ID/IDN)\n- 364: Iran, Islamic Republic of (IR/IRN)\n- 368: Iraq (IQ/IRQ)\n- 372: Ireland (IE/IRL)\n- 376: Israel (IL/ISR)\n- 380: Italy (IT/ITA)\n- 384: Côte d'Ivoire (CI/CIV)\n- 388: Jamaica (JM/JAM)\n- 392: Japan (JP/JPN)\n- 398: Kazakhstan (KZ/KAZ)\n- 400: Jordan (JO/JOR)\n- 404: Kenya (KE/KEN)\n- 408: Korea, Democratic People's Republic of (KP/PRK)\n- 410: Korea, Republic of (KR/KOR)\n- 414: Kuwait (KW/KWT)\n- 417: Kyrgyzstan (KG/KGZ)\n- 418: Lao People's Democratic Republic (LA/LAO)\n- 422: Lebanon (LB/LBN)\n- 426: Lesotho (LS/LSO)\n- 428: Latvia (LV/LVA)\n- 430: Liberia (LR/LBR)\n- 434: Libya (LY/LBY)\n- 438: Liechtenstein (LI/LIE)\n- 440: Lithuania (LT/LTU)\n- 442: Luxembourg (LU/LUX)\n- 446: Macao (MO/MAC)\n- 450: Madagascar (MG/MDG)\n- 454: Malawi (MW/MWI)\n- 458: Malaysia (MY/MYS)\n- 462: Maldives (MV/MDV)\n- 466: Mali (ML/MLI)\n- 470: Malta (MT/MLT)\n- 474: Martinique (MQ/MTQ)\n- 478: Mauritania (MR/MRT)\n- 480: Mauritius (MU/MUS)\n- 484: Mexico (MX/MEX)\n- 492: Monaco (MC/MCO)\n- 496: Mongolia (MN/MNG)\n- 498: Moldova, Republic of (MD/MDA)\n- 499: Montenegro (ME/MNE)\n- 500: Montserrat (MS/MSR)\n- 504: Morocco (MA/MAR)\n- 508: Mozambique (MZ/MOZ)\n- 512: Oman (OM/OMN)\n- 516: Namibia (NA/NAM)\n- 520: Nauru (NR/NRU)\n- 524: Nepal (NP/NPL)\n- 528: Netherlands (NL/NLD)\n- 531: Curaçao (CW/CUW)\n- 533: Aruba (AW/ABW)\n- 534: Sint Maarten (Dutch part) (SX/SXM)\n- 535: Bonaire, Sint Eustatius and Saba (BQ/BES)\n- 540: New Caledonia (NC/NCL)\n- 548: Vanuatu (VU/VUT)\n- 554: New Zealand (NZ/NZL)\n- 558: Nicaragua (NI/NIC)\n- 562: Niger (NE/NER)\n- 566: Nigeria (NG/NGA)\n- 570: Niue (NU/NIU)\n- 574: Norfolk Island (NF/NFK)\n- 578: Norway (NO/NOR)\n- 580: Northern Mariana Islands (MP/MNP)\n- 581: United States Minor Outlying Islands (UM/UMI)\n- 583: Micronesia, Federated States of (FM/FSM)\n- 584: Marshall Islands (MH/MHL)\n- 585: Palau (PW/PLW)\n- 586: Pakistan (PK/PAK)\n- 591: Panama (PA/PAN)\n- 598: Papua New Guinea (PG/PNG)\n- 600: Paraguay (PY/PRY)\n- 604: Peru (PE/PER)\n- 608: Philippines (PH/PHL)\n- 612: Pitcairn (PN/PCN)\n- 616: Poland (PL/POL)\n- 620: Portugal (PT/PRT)\n- 624: Guinea-Bissau (GW/GNB)\n- 626: Timor-Leste (TL/TLS)\n- 630: Puerto Rico (PR/PRI)\n- 634: Qatar (QA/QAT)\n- 638: Réunion (RE/REU)\n- 642: Romania (RO/ROU)\n- 643: Russian Federation (RU/RUS)\n- 646: Rwanda (RW/RWA)\n- 652: Saint Barthélemy (BL/BLM)\n- 654: Saint Helena, Ascension and Tristan da Cunha (SH/SHN)\n- 659: Saint Kitts and Nevis (KN/KNA)\n- 660: Anguilla (AI/AIA)\n- 662: Saint Lucia (LC/LCA)\n- 663: Saint Martin (French part) (MF/MAF)\n- 666: Saint Pierre and Miquelon (PM/SPM)\n- 670: Saint Vincent and the Grenadines (VC/VCT)\n- 674: San Marino (SM/SMR)\n- 678: Sao Tome and Principe (ST/STP)\n- 682: Saudi Arabia (SA/SAU)\n- 686: Senegal (SN/SEN)\n- 688: Serbia (RS/SRB)\n- 690: Seychelles (SC/SYC)\n- 694: Sierra Leone (SL/SLE)\n- 702: Singapore (SG/SGP)\n- 703: Slovakia (SK/SVK)\n- 704: Viet Nam (VN/VNM)\n- 705: Slovenia (SI/SVN)\n- 706: Somalia (SO/SOM)\n- 710: South Africa (ZA/ZAF)\n- 716: Zimbabwe (ZW/ZWE)\n- 724: Spain (ES/ESP)\n- 728: South Sudan (SS/SSD)\n- 729: Sudan (SD/SDN)\n- 732: Western Sahara (EH/ESH)\n- 740: Suriname (SR/SUR)\n- 744: Svalbard and Jan Mayen (SJ/SJM)\n- 748: Swaziland (SZ/SWZ)\n- 752: Sweden (SE/SWE)\n- 756: Switzerland (CH/CHE)\n- 760: Syrian Arab Republic (SY/SYR)\n- 762: Tajikistan (TJ/TJK)\n- 764: Thailand (TH/THA)\n- 768: Togo (TG/TGO)\n- 772: Tokelau (TK/TKL)\n- 776: Tonga (TO/TON)\n- 780: Trinidad and Tobago (TT/TTO)\n- 784: United Arab Emirates (AE/ARE)\n- 788: Tunisia (TN/TUN)\n- 792: Turkey (TR/TUR)\n- 795: Turkmenistan (TM/TKM)\n- 796: Turks and Caicos Islands (TC/TCA)\n- 798: Tuvalu (TV/TUV)\n- 800: Uganda (UG/UGA)\n- 804: Ukraine (UA/UKR)\n- 807: Macedonia, the former Yugoslav Republic of (MK/MKD)\n- 818: Egypt (EG/EGY)\n- 826: United Kingdom (GB/GBR)\n- 831: Guernsey (GG/GGY)\n- 832: Jersey (JE/JEY)\n- 833: Isle of Man (IM/IMN)\n- 834: Tanzania, United Republic of (TZ/TZA)\n- 840: United States (US/USA)\n- 850: Virgin Islands, U.S. (VI/VIR)\n- 854: Burkina Faso (BF/BFA)\n- 858: Uruguay (UY/URY)\n- 860: Uzbekistan (UZ/UZB)\n- 862: Venezuela, Bolivarian Republic of (VE/VEN)\n- 876: Wallis and Futuna (WF/WLF)\n- 882: Samoa (WS/WSM)\n- 887: Yemen (YE/YEM)\n- 894: Zambia (ZM/ZMB)\n",
      }),
  ])
  .openapi('CountryType')

const PaginationSchema = z
  .object({
    total: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of items', example: 1, readOnly: true }),
    count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of items per page', example: 1, readOnly: true }),
    per_page: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of items per page', example: 1, readOnly: true }),
    current_page: z
      .int()
      .exactOptional()
      .openapi({ description: 'The current page number', example: 1, readOnly: true }),
    total_pages: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of pages', example: 1, readOnly: true }),
    links: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The pagination links', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const MetaSchema = z
  .object({ pagination: PaginationSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Meta')

const TaskRequestSchema = z
  .object({
    description: z
      .string()
      .openapi({ description: 'Task description', example: 'Complete project documentation' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed ID of the client', example: 'D2J234DFA' }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed ID of the project', example: 'P2J234DFA' }),
    time_log: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time logged for the task', example: '2.5' }),
    status_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Status ID of the task', example: 1 }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 1', example: 'Custom value 1' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 2', example: 'Custom value 2' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 3', example: 'Custom value 3' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 4', example: 'Custom value 4' }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the task is deleted', example: false }),
    archived_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamp when task was archived', example: 1640995200 }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Due date for the task', example: '2024-01-31' }),
    priority: z
      .int()
      .exactOptional()
      .openapi({ description: 'Priority level of the task', example: 1 }),
    tags: z
      .array(z.string().openapi({ example: 'Opnel5aKBz' }))
      .exactOptional()
      .openapi({
        description:
          'Full sync array of hashed tag IDs. Omit to leave existing tags unchanged; send [] to detach all tags.',
      }),
  })
  .openapi({ required: ['description'] })
  .openapi('TaskRequest')

const LocationRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location name', example: 'Warehouse A' }),
    address1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first line of the address', example: '123 Business Street' }),
    address2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The second line of the address', example: 'Suite 100' }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city name', example: 'San Francisco' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state or region', example: 'CA' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal or zip code', example: '94107' }),
    country_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the associated country', example: '840' }),
    custom_value1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom field value 1' }),
    custom_value2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom field value 2' }),
    custom_value3: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom field value 3' }),
    custom_value4: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom field value 4' }),
    is_shipping_location: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this is a shipping location', example: true }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: 'Opnel5aKBz' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client hashed id', example: 'Opnel5aKBz' }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The vendor hashed id', example: 'Opnel5aKBz' }),
  })
  .openapi({ required: [] })
  .openapi('LocationRequest')

const InvoiceItemSchema = z
  .object({
    quantity: z
      .number()
      .exactOptional()
      .openapi({
        example: 1,
        description: 'The quantity of the product offered for this line item',
      }),
    cost: z
      .float32()
      .exactOptional()
      .openapi({ example: 10, description: 'The cost of the product offered for this line item' }),
    product_key: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Product key',
        description:
          'The product key of the product offered for this line item (Referred to as Product in the product tab)',
      }),
    tags: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Retail,Priority Customer',
        description: 'A comma-separated snapshot of the product tag names for this line item',
      }),
    product_cost: z
      .float32()
      .exactOptional()
      .openapi({
        example: 10,
        description:
          'The cost of the product offered for this line item (Referred to as Cost in the product tab)',
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Item notes',
        description: 'The notes/description for the product offered for this line item',
      }),
    discount: z
      .float32()
      .exactOptional()
      .openapi({
        example: 5,
        description: 'The discount applied to the product offered for this line item',
      }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        example: false,
        description:
          'Indicates whether the discount applied to the product offered for this line item is a fixed amount or a percentage',
      }),
    tax_name1: z
      .string()
      .exactOptional()
      .openapi({
        example: 'GST',
        description: 'The name of the first tax applied to the product offered for this line item',
      }),
    tax_rate1: z
      .float32()
      .exactOptional()
      .openapi({
        example: 10,
        description: 'The rate of the first tax applied to the product offered for this line item',
      }),
    tax_name2: z
      .string()
      .exactOptional()
      .openapi({
        example: 'VAT',
        description: 'The name of the second tax applied to the product offered for this line item',
      }),
    tax_rate2: z
      .float32()
      .exactOptional()
      .openapi({
        example: 5,
        description: 'The rate of the second tax applied to the product offered for this line item',
      }),
    tax_name3: z
      .string()
      .exactOptional()
      .openapi({
        example: 'CA Sales Tax',
        description: 'The name of the third tax applied to the product offered for this line item',
      }),
    tax_rate3: z
      .float32()
      .exactOptional()
      .openapi({
        example: 3,
        description: 'The rate of the third tax applied to the product offered for this line item',
      }),
    sort_id: z
      .string()
      .exactOptional()
      .openapi({ example: '0', description: 'Deprecated', deprecated: true }),
    line_total: z
      .float32()
      .exactOptional()
      .openapi({
        example: 10,
        description: 'The total amount of the product offered for this line item',
        readOnly: true,
      }),
    gross_line_total: z
      .float32()
      .exactOptional()
      .openapi({
        example: 15,
        description: 'The total amount of the product offered for this line item before discounts',
        readOnly: true,
      }),
    tax_amount: z
      .float32()
      .exactOptional()
      .openapi({
        example: 1,
        description: 'The total amount of tax applied to the product offered for this line item',
        readOnly: true,
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Custom value 1',
        description: 'The first custom value of the product offered for this line item',
      }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Custom value 2',
        description: 'The second custom value of the product offered for this line item',
      }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Custom value 3',
        description: 'The third custom value of the product offered for this line item',
      }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Custom value 4',
        description: 'The fourth custom value of the product offered for this line item',
      }),
    type_id: z
      .string()
      .default('1')
      .exactOptional()
      .openapi({
        example: '1',
        description:
          '1 = product, 2 = service, 3 unpaid gateway fee, 4 paid gateway fee, 5 late fee, 6 expense',
      }),
    tax_id: z
      .string()
      .default('1')
      .exactOptional()
      .openapi({
        example: '1',
        description:
          'The tax ID of the product: 1 product, 2 service, 3 digital, 4 shipping, 5 exempt, 5 reduced tax, 7 override, 8 zero rate, 9 reverse tax',
      }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceItem')

const QuoteRequestSchema = z
  .object({
    client_id: z
      .string()
      .openapi({ description: 'The hashed ID of the client', example: 'D2J234DFA' }),
    date: z.iso.date().openapi({ description: 'Quote date', example: '2024-01-01' }),
    due_date: z.iso
      .date()
      .openapi({ description: 'Due date for the quote', example: '2024-01-31' }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Private notes for the quote',
        example: 'Internal notes about this quote',
      }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Public notes for the quote',
        example: 'Thank you for your business!',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 1', example: 'Custom value 1' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 2', example: 'Custom value 2' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 3', example: 'Custom value 3' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 4', example: 'Custom value 4' }),
    line_items: z
      .array(InvoiceItemSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the line items of the quote' }),
  })
  .openapi({ required: ['client_id', 'date', 'due_date'] })
  .openapi('QuoteRequest')

const DocumentSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The document hashed id', example: 'AS3df3A', readOnly: true }),
    user_id: z.string().exactOptional().openapi({ description: 'The user hashed id', example: '' }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: '' }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project associated with this document', example: '' }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The vendor associated with this documents', example: '' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The document name', example: 'Beauty' }),
    url: z.string().exactOptional().openapi({ description: 'The document url', example: 'Beauty' }),
    preview: z
      .string()
      .exactOptional()
      .openapi({ description: 'The document preview url', example: 'Beauty' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The document type', example: 'Beauty' }),
    disk: z
      .string()
      .exactOptional()
      .openapi({ description: 'The document disk', example: 'Beauty' }),
    hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'The document hashed', example: 'Beauty' }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to determine if the document is deleted', example: true }),
    is_default: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag to determine if the document is a default doc',
        example: true,
      }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
    deleted_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
  })
  .openapi({ required: [] })
  .openapi('Document')

const ErrorSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Something terrible went wrong', example: 'Unexpected error' }),
    code: z
      .int()
      .exactOptional()
      .openapi({ description: 'The HTTP error code, ie 5xx 4xx', example: 500 }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const ExpenseCategorySchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expense hashed id', example: 'Opnel5aKBz', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expense category name', example: 'Accounting' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'XS987sD' }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag determining whether the expense category has been deleted',
        example: true,
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'The updated at timestamp', example: 2 }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'The created at timestamp', example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('ExpenseCategory')

const ClientContactSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed if of the contact',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the user who created the contact',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the client',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the contact', example: 'John' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the contact', example: 'Doe' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number of the contact', example: '555-152-4524' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom field value', example: '' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom field value', example: '' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom field value', example: '' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom field value', example: '' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email of the contact', example: '' }),
    accepted_terms_version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The terms of service which the contact has accpeted',
        example: 'A long set of ToS',
        readOnly: true,
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed password of the contact', example: '*****' }),
    confirmation_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The confirmation code used to authenticate the contacts email address',
        example: '333-sdjkh34gbasd',
        readOnly: true,
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({ description: 'A uuid based token.', example: '333-sdjkh34gbasd', readOnly: true }),
    contact_key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for the contact',
        example: 'JD0X52bkfZlJRiroCJ0tcSiAjsJTntZ5uqKdiZ0a',
        readOnly: true,
      }),
    is_primary: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines is this contact is the primary contact for the client',
        example: true,
      }),
    confirmed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean value confirms the user has confirmed their account.',
        example: true,
      }),
    is_locked: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean value defines if the contact has been locked out.',
        example: true,
      }),
    send_email: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean value determines is this contact should receive emails',
        example: true,
      }),
    cc_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true this contact is only included as a CC recipient on outgoing emails and is not addressed directly.',
        example: false,
      }),
    can_sign: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true this contact is permitted to electronically sign invitations (invoices, quotes, credits, purchase orders, recurring invoices).',
        example: false,
      }),
    failed_logins: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The number of failed logins the contact has had',
        example: 3,
        readOnly: true,
      }),
    email_verified_at: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The date which the contact confirmed their email',
        example: 134341234234,
        readOnly: true,
      }),
    last_login: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    deleted_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('ClientContact')

const ClientSettingsSchema = z
  .object({
    currency_id: z.string().openapi({ description: 'The default currency id', example: '1' }),
    timezone_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timezone id', example: '15' }),
    date_format_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date format id', example: '15' }),
    military_time: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles 12/24 hour time', example: true }),
    language_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language id', example: '1' }),
    show_currency_code: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether the currency symbol or code is shown',
        example: true,
      }),
    payment_terms: z
      .int()
      .exactOptional()
      .openapi({
        description:
          '-1 sets no payment term, 0 sets payment due immediately, positive integers indicates payment terms in days',
        example: 1,
      }),
    company_gateway_ids: z
      .string()
      .exactOptional()
      .openapi({ description: 'A commad separate list of available gateways', example: '1,2,3,4' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom Label', example: 'Custom Label' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom Label', example: 'Custom Label' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom Label', example: 'Custom Label' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom Label', example: 'Custom Label' }),
    default_task_rate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The default task rate', example: 10 }),
    send_reminders: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether reminders are sent', example: true }),
    enable_client_portal_tasks: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Show/hide the tasks panel in the client portal', example: true }),
    email_style: z
      .string()
      .exactOptional()
      .openapi({ description: 'options include plain,light,dark,custom', example: 'light' }),
    reply_to_email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reply to email address', example: 'email@gmail.com' }),
    bcc_email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A comma separate list of BCC emails',
        example: 'email@gmail.com, contact@gmail.com',
      }),
    pdf_email_attachment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether to attach PDF as attachment', example: true }),
    ubl_email_attachment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether to attach UBL as attachment', example: true }),
    email_style_custom: z
      .string()
      .exactOptional()
      .openapi({ description: 'The custom template', example: '<HTML></HTML>' }),
    counter_number_applied: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'enum when the invoice number counter is set, ie when_saved, when_sent, when_paid',
        example: 'when_sent',
      }),
    quote_number_applied: z
      .string()
      .exactOptional()
      .openapi({
        description: 'enum when the quote number counter is set, ie when_saved, when_sent',
        example: 'when_sent',
      }),
    custom_message_dashboard: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom message which is displayed on the dashboard',
        example: 'Please pay invoices immediately',
      }),
    custom_message_unpaid_invoice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A custom message which is displayed in the client portal when a client is viewing a unpaid invoice.',
        example: 'Please pay invoices immediately',
      }),
    custom_message_paid_invoice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A custom message which is displayed in the client portal when a client is viewing a paid invoice.',
        example: 'Thanks for paying this invoice!',
      }),
    custom_message_unapproved_quote: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A custom message which is displayed in the client portal when a client is viewing a unapproved quote.',
        example: 'Please approve quote',
      }),
    lock_invoices: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether invoices are locked once sent and cannot be modified further',
        example: true,
      }),
    auto_archive_invoice: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether a invoice is archived immediately following payment',
        example: true,
      }),
    auto_archive_quote: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether a quote is archived after being converted to a invoice',
        example: true,
      }),
    auto_convert_quote: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether a quote is converted to a invoice when approved',
        example: true,
      }),
    inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining whether inclusive or exclusive taxes are used',
        example: true,
      }),
    task_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the task number pattern',
        example: '{$year}-{$counter}',
      }),
    task_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for tasks', example: 1 }),
    reminder_send_time: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Time from UTC +0 when the email will be sent to the client',
        example: 32400,
      }),
    expense_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the expense number pattern',
        example: '{$year}-{$counter}',
      }),
    expense_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for expenses', example: 1 }),
    vendor_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the vendor number pattern',
        example: '{$year}-{$counter}',
      }),
    vendor_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for vendors', example: 1 }),
    ticket_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the ticket number pattern',
        example: '{$year}-{$counter}',
      }),
    ticket_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for tickets', example: 1 }),
    payment_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the payment number pattern',
        example: '{$year}-{$counter}',
      }),
    payment_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for payments', example: 1 }),
    invoice_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the invoice number pattern',
        example: '{$year}-{$counter}',
      }),
    invoice_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for invoices', example: 1 }),
    quote_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the quote number pattern',
        example: '{$year}-{$counter}',
      }),
    quote_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for quotes', example: 1 }),
    client_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the client number pattern',
        example: '{$year}-{$counter}',
      }),
    client_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for clients', example: 1 }),
    credit_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the credit number pattern',
        example: '{$year}-{$counter}',
      }),
    credit_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for credits', example: 1 }),
    recurring_invoice_number_prefix: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This string is prepended to the recurring invoice number',
        example: 'R',
      }),
    reset_counter_frequency_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'CONSTANT which is used to apply the frequency which the counters are reset',
        example: 1,
      }),
    reset_counter_date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The explicit date which is used to reset counters',
        example: '2019-01-01',
      }),
    counter_padding: z
      .int()
      .exactOptional()
      .openapi({ description: 'Pads the counter with leading zeros', example: 1 }),
    shared_invoice_quote_counter: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flags whether to share the counter for invoices and quotes',
        example: true,
      }),
    update_products: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if client fields are updated from third party APIs',
        example: true,
      }),
    convert_products: z.boolean().exactOptional().openapi({ description: '', example: true }),
    fill_products: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Automatically fill products based on product_key', example: true }),
    invoice_terms: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default invoice terms', example: 'Invoice Terms are...' }),
    quote_terms: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default quote terms', example: 'Quote Terms are...' }),
    invoice_taxes: z
      .number()
      .exactOptional()
      .openapi({ description: 'Taxes can be applied to the invoice', example: 1 }),
    invoice_design_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default design id (invoice, quote etc)', example: '1' }),
    quote_design_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default design id (invoice, quote etc)', example: '1' }),
    invoice_footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default invoice footer', example: '1' }),
    invoice_labels: z
      .string()
      .exactOptional()
      .openapi({ description: 'JSON string of invoice labels', example: '1' }),
    tax_rate1: z
      .number()
      .exactOptional()
      .openapi({ description: 'The tax rate (float)', example: 10 }),
    tax_name1: z.string().exactOptional().openapi({ description: 'The tax name', example: 'GST' }),
    tax_rate2: z
      .number()
      .exactOptional()
      .openapi({ description: 'The tax rate (float)', example: 10 }),
    tax_name2: z.string().exactOptional().openapi({ description: 'The tax name', example: 'GST' }),
    tax_rate3: z
      .number()
      .exactOptional()
      .openapi({ description: 'The tax rate (float)', example: 10 }),
    tax_name3: z.string().exactOptional().openapi({ description: 'The tax name', example: 'GST' }),
    payment_type_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default payment type id', example: '1' }),
    custom_fields: z
      .string()
      .exactOptional()
      .openapi({ description: 'JSON string of custom fields', example: '{}' }),
    email_footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default email footer', example: 'A default email footer' }),
    email_sending_method: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email driver to use to send email, options include default, gmail',
        example: 'default',
      }),
    gmail_sending_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed_id of the user account to send email from',
        example: 'F76sd34D',
      }),
    email_subject_invoice: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'Your Invoice Subject' }),
    email_subject_quote: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'Your Quote Subject' }),
    email_subject_payment: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'Your Payment Subject' }),
    email_template_invoice: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for invoice emails', example: '<HTML></HTML>' }),
    email_template_quote: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for quote emails', example: '<HTML></HTML>' }),
    email_template_payment: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for payment emails', example: '<HTML></HTML>' }),
    email_subject_reminder1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email subject for Reminder', example: '<HTML></HTML>' }),
    email_subject_reminder2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email subject for Reminder', example: '<HTML></HTML>' }),
    email_subject_reminder3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email subject for Reminder', example: '<HTML></HTML>' }),
    email_subject_reminder_endless: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email subject for endless reminders', example: '<HTML></HTML>' }),
    email_template_reminder1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for Reminder 1', example: '<HTML></HTML>' }),
    email_template_reminder2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for Reminder 2', example: '<HTML></HTML>' }),
    email_template_reminder3: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for Reminder 3', example: '<HTML></HTML>' }),
    email_template_reminder_endless: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for enless reminders', example: '<HTML></HTML>' }),
    enable_portal_password: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether a password is required to log into the client portal',
        example: true,
      }),
    show_accept_invoice_terms: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether the terms dialogue is shown to the client',
        example: true,
      }),
    show_accept_quote_terms: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether the terms dialogue is shown to the client',
        example: true,
      }),
    require_invoice_signature: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether a invoice signature is required', example: true }),
    require_quote_signature: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether a quote signature is required', example: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company name', example: 'Acme Co' }),
    company_logo: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The company logo file', example: {} }),
    website: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company website URL', example: 'https://www.acme.com' }),
    address1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company address line 1', example: 'Suite 888' }),
    address2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company address line 2', example: '5 Jimbo Way' }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company city', example: 'Sydney' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company state', example: 'Florisa' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company zip/postal code', example: '90210' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company phone', example: '555-213-3948' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company email', example: 'joe@acme.co' }),
    country_id: z.string().exactOptional().openapi({ description: 'The country ID', example: '1' }),
    vat_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company VAT/TAX ID number', example: '32 120 377 720' }),
    page_size: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default page size', example: 'A4' }),
    font_size: z.number().exactOptional().openapi({ description: 'The font size', example: 9 }),
    primary_font: z
      .string()
      .exactOptional()
      .openapi({ description: 'The primary font', example: 'roboto' }),
    secondary_font: z
      .string()
      .exactOptional()
      .openapi({ description: 'The secondary font', example: 'roboto' }),
    hide_paid_to_date: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flags whether to hide the paid to date field', example: false }),
    embed_documents: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggled whether to embed documents in the PDF', example: false }),
    all_pages_header: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The header for the PDF', example: false }),
    all_pages_footer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The footer for the PDF', example: false }),
    document_email_attachment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether to attach documents in the email', example: false }),
    enable_client_portal_password: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles password protection of the client portal', example: false }),
    enable_email_markup: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles the use of markdown in emails', example: false }),
    enable_client_portal_dashboard: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether the client dashboard is shown in the client portal',
        example: false,
      }),
    enable_client_portal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Toggles whether the entire client portal is displayed to the client, or only the context',
        example: false,
      }),
    email_template_statement: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body of the email for statements', example: 'template matter' }),
    email_subject_statement: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The subject of the email for statements',
        example: 'subject matter',
      }),
    signature_on_pdf: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether the signature (if available) is displayed on the PDF',
        example: false,
      }),
    quote_footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default quote footer', example: 'the quote footer' }),
    email_subject_custom1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template subject', example: 'Custom Subject 1' }),
    email_subject_custom2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template subject', example: 'Custom Subject 2' }),
    email_subject_custom3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template subject', example: 'Custom Subject 3' }),
    email_template_custom1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template body', example: '<HTML>' }),
    email_template_custom2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template body', example: '<HTML>' }),
    email_template_custom3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template body', example: '<HTML>' }),
    enable_reminder1: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether this reminder is enabled', example: false }),
    enable_reminder2: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether this reminder is enabled', example: false }),
    enable_reminder3: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether this reminder is enabled', example: false }),
    num_days_reminder1: z
      .number()
      .exactOptional()
      .openapi({ description: 'The Reminder interval', example: 9 }),
    num_days_reminder2: z
      .number()
      .exactOptional()
      .openapi({ description: 'The Reminder interval', example: 9 }),
    num_days_reminder3: z
      .number()
      .exactOptional()
      .openapi({ description: 'The Reminder interval', example: 9 }),
    schedule_reminder1: z
      .string()
      .exactOptional()
      .openapi({
        description: '(enum: after_invoice_date, before_due_date, after_due_date)',
        example: 'after_invoice_date',
      }),
    schedule_reminder2: z
      .string()
      .exactOptional()
      .openapi({
        description: '(enum: after_invoice_date, before_due_date, after_due_date)',
        example: 'after_invoice_date',
      }),
    schedule_reminder3: z
      .string()
      .exactOptional()
      .openapi({
        description: '(enum: after_invoice_date, before_due_date, after_due_date)',
        example: 'after_invoice_date',
      }),
    late_fee_amount1: z
      .number()
      .exactOptional()
      .openapi({ description: 'The late fee amount for reminder 1', example: 10 }),
    late_fee_amount2: z
      .number()
      .exactOptional()
      .openapi({ description: 'The late fee amount for reminder 2', example: 20 }),
    late_fee_amount3: z
      .number()
      .exactOptional()
      .openapi({ description: 'The late fee amount for reminder 2', example: 100 }),
    endless_reminder_frequency_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The frequency id of the endless reminder', example: '1' }),
    client_online_payment_notification: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if a client should receive the notification for a online payment',
        example: false,
      }),
    client_manual_payment_notification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if a client should receive the notification for a manually entered payment',
        example: false,
      }),
    enable_e_invoice: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if e-invoicing is enabled', example: false }),
    default_expense_payment_type_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default payment type for expenses', example: '0' }),
    e_invoice_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The e-invoice type', example: 'EN16931' }),
    mailgun_endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The mailgun endpoint - used to determine whether US or EU endpoints are used',
        example: 'api.mailgun.net or api.eu.mailgun.net',
      }),
    client_initiated_payments: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if clients can initiate payments directly from the client portal',
        example: false,
      }),
    client_initiated_payments_minimum: z
      .number()
      .exactOptional()
      .openapi({ description: 'The minimum amount a client can pay', example: 10 }),
    sync_invoice_quote_columns: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if invoice and quote columns are synced for the PDF rendering, or if they use their own columns',
        example: false,
      }),
    show_task_item_description: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the task item description is shown on the invoice',
        example: false,
      }),
    allow_billable_task_items: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if task items can be marked as billable',
        example: false,
      }),
    accept_client_input_quote_approval: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if clients can approve quotes and also pass through a PO Number reference',
        example: false,
      }),
    custom_sending_email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When using Mailgun or Postmark, the FROM email address can be customized using this setting.',
        example: 'bob@gmail.com',
      }),
    show_paid_stamp: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the PAID stamp is shown on the invoice',
        example: false,
      }),
    show_shipping_address: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the shipping address is shown on the invoice',
        example: false,
      }),
    company_logo_size: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The size of the company logo on the PDF - percentage value between 0 and 100',
        example: 100,
      }),
    show_email_footer: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the email footer is shown on emails',
        example: false,
      }),
    email_alignment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The alignment of the email body text, options include left / center / right',
        example: 'left',
      }),
    auto_bill_standard_invoices: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if standard invoices are automatically billed when they are created or due',
        example: false,
      }),
    postmark_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Postmark secret API key', example: '123456' }),
    mailgun_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Mailgun secret API key', example: '123456' }),
    mailgun_domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Mailgun domain', example: 'sandbox123456.mailgun.org' }),
    send_email_on_mark_paid: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if an email is sent when an invoice is marked as paid',
        example: false,
      }),
    vendor_portal_enable_uploads: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if vendors can upload files to the portal',
        example: false,
      }),
    besr_id: z.string().exactOptional().openapi({ description: 'The BESR ID', example: '123456' }),
    qr_iban: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IBAN for the QR code', example: 'CH123456' }),
    email_subject_purchase_order: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email subject for purchase orders', example: 'Purchase Order' }),
    email_template_purchase_order: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email template for purchase orders',
        example: 'Please see attached your purchase order.',
      }),
    require_purchase_order_signature: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if a signature is required on purchase orders',
        example: false,
      }),
    purchase_order_public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The public notes for purchase orders',
        example: 'Please see attached your purchase order.',
      }),
    purchase_order_terms: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The terms for purchase orders',
        example: 'Please see attached your purchase order.',
      }),
    purchase_order_footer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The footer for purchase orders',
        example: 'Please see attached your purchase order.',
      }),
    purchase_order_design_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The design id for purchase orders', example: 'hd677df' }),
    purchase_order_number_pattern: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pattern for purchase order numbers', example: 'PO-000000' }),
    purchase_order_number_counter: z
      .number()
      .exactOptional()
      .openapi({ description: 'The counter for purchase order numbers', example: 1 }),
    page_numbering_alignment: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The alignment for page numbering: options include left / center / right',
        example: 'left',
      }),
    page_numbering: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if page numbering is enabled on Document PDFs',
        example: false,
      }),
    auto_archive_invoice_cancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if invoices are automatically archived when they are cancelled',
        example: false,
      }),
    email_from_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The FROM name for emails when using Custom emailers',
        example: 'Bob Smith',
      }),
    show_all_tasks_client_portal: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if all tasks are shown on the client portal',
        example: false,
      }),
    entity_send_time: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The time that emails are sent. The time is localized to the clients locale, integer values from 1 - 24',
        example: 9,
      }),
    shared_invoice_credit_counter: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the invoice and credit counter are shared',
        example: false,
      }),
    reply_to_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reply to name for emails', example: 'Bob Smith' }),
    hide_empty_columns_on_pdf: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if empty columns are hidden on PDFs', example: false }),
    enable_reminder_endless: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if endless reminders are enabled', example: false }),
    use_credits_payment: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if credits can be used as a payment method',
        example: false,
      }),
    recurring_invoice_number_pattern: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pattern for recurring invoice numbers', example: 'R-000000' }),
    recurring_invoice_number_counter: z
      .number()
      .exactOptional()
      .openapi({ description: 'The counter for recurring invoice numbers', example: 1 }),
    client_portal_under_payment_minimum: z
      .number()
      .exactOptional()
      .openapi({ description: 'The minimum payment payment', example: 10 }),
    auto_bill_date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Determines when the invoices are auto billed, options are on_send_date (when the invoice is sent) or on_due_date (when the invoice is due))',
        example: 'on_send_date',
      }),
    primary_color: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The primary color for the client portal / document highlights',
        example: '#ffffff',
      }),
    secondary_color: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The secondary color for the client portal / document highlights',
        example: '#ffffff',
      }),
    client_portal_allow_under_payment: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if clients can pay invoices under the invoice amount due',
        example: false,
      }),
    client_portal_allow_over_payment: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if clients can pay invoices over the invoice amount',
        example: false,
      }),
    auto_bill: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Determines how autobilling is applied for recurring invoices. off (no auto billed), always (always auto bill), optin (The user must opt in to auto billing), optout (The user must opt out of auto billing',
        example: 'off',
      }),
    client_portal_terms: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The terms which are displayed on the client portal',
        example: 'Please see attached your invoice.',
      }),
    client_portal_privacy_policy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The privacy policy which is displayed on the client portal',
        example: 'These are the terms of use for using the client portal.',
      }),
    client_can_register: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if clients can register on the client portal',
        example: false,
      }),
    portal_design_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The design id for the client portal', example: 'hd677df' }),
    late_fee_endless_percent: z
      .number()
      .exactOptional()
      .openapi({ description: 'The late fee percentage for endless late fees', example: 10 }),
    late_fee_endless_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The late fee amount for endless late fees', example: 10 }),
    auto_email_invoice: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if invoices are automatically emailed when they are created',
        example: false,
      }),
    email_signature: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email signature for emails', example: 'Bob Smith' }),
  })
  .openapi({ required: ['currency_id'] })
  .openapi('ClientSettings')

const ClientSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the client',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    contacts: z.array(ClientContactSchema).exactOptional(),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the user who created the client',
        example: 'Ua6Rw4pVbS',
        readOnly: true,
      }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the user who has been assigned the client',
        example: 'Ua6Rw4pVbS',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the client company or organization',
        example: "Jim's Housekeeping",
      }),
    website: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The website URL of the client company or organization',
        example: 'https://www.jims-housekeeping.com',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Notes that are only visible to the user who created the client',
        example: 'Client prefers email communication over phone calls',
      }),
    client_hash: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique hash value for the client',
        example: 'asdfkjhk342hjhbfdvmnfb1',
        readOnly: true,
      }),
    industry_id: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the industry the client operates in',
        example: 5,
      }),
    size_id: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the size category of the client company or organization',
        example: 2,
      }),
    address1: z
      .string()
      .exactOptional()
      .openapi({ description: "First line of the client's address", example: '123 Main St' }),
    address2: z
      .string()
      .exactOptional()
      .openapi({
        description: "Second line of the client's address, if needed",
        example: 'Apt 4B',
      }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city the client is located in', example: 'Beverly Hills' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The state, province, or locality the client is located in',
        example: 'California',
      }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code or ZIP code of the client', example: '90210' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: "The client's phone number", example: '555-3434-3434' }),
    country_id: CountryTypeSchema.exactOptional().openapi({
      description: "The unique identifier of the client's country",
      example: '1',
    }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom field for storing additional information',
        example: 'Preferred contact: Email',
      }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom field for storing additional information',
        example: 'Account manager: John Doe',
      }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom field for storing additional information',
        example: 'VIP client: Yes',
      }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom field for storing additional information',
        example: 'Annual contract value: $50,000',
      }),
    vat_number: z
      .string()
      .exactOptional()
      .openapi({
        description: "The client's VAT (Value Added Tax) number, if applicable",
        example: 'VAT123456',
      }),
    id_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identification number for the client, such as a tax ID or business registration number',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A system-assigned unique number for the client, typically used for invoicing purposes',
        example: 'CL-0001',
      }),
    shipping_address1: z
      .string()
      .exactOptional()
      .openapi({
        description: "First line of the client's shipping address",
        example: '5 Wallaby Way',
      }),
    shipping_address2: z
      .string()
      .exactOptional()
      .openapi({
        description: "Second line of the client's shipping address, if needed",
        example: 'Suite 5',
      }),
    shipping_city: z
      .string()
      .exactOptional()
      .openapi({ description: "The city of the client's shipping address", example: 'Perth' }),
    shipping_state: z
      .string()
      .exactOptional()
      .openapi({
        description: "The state, province, or locality of the client's shipping address",
        example: 'Western Australia',
      }),
    shipping_postal_code: z
      .string()
      .exactOptional()
      .openapi({
        description: "The postal code or ZIP code of the client's shipping address",
        example: '6110',
      }),
    shipping_country_id: z
      .number()
      .exactOptional()
      .openapi({
        description: "The unique identifier of the country for the client's shipping address",
        example: 4,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean value indicating whether the client has been deleted or not',
        example: false,
        readOnly: true,
      }),
    balance: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The outstanding balance the client owes',
        example: 500,
        readOnly: true,
      }),
    paid_to_date: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The total amount the client has paid to date',
        example: 2000,
        readOnly: true,
      }),
    credit_balance: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The available credit balance for the client to use on future purchases',
        example: 100,
        readOnly: true,
      }),
    last_login: z
      .number()
      .exactOptional()
      .openapi({
        description: "The timestamp of the client's last login",
        example: 1628686031,
        readOnly: true,
      }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The timestamp when the client was created',
        example: 1617629031,
        readOnly: true,
      }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The timestamp when the client was last updated',
        example: 1628445631,
        readOnly: true,
      }),
    group_settings_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The group settings assigned to the client', example: 'Opnel5aKBz' }),
    routing_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The routing address id for e-invoicing for this client',
        example: 'Opnel5aKBz3489-dfkiu-2239-sdsd',
      }),
    is_tax_exempt: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag which defines if the client is exempt from taxes',
        example: false,
      }),
    has_valid_vat_number: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag which defines if the client has a valid VAT number',
        example: false,
        readOnly: true,
      }),
    payment_balance: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Defines the payment balance the client has on file (pre payments / over payments / unapplied amounts)',
        example: 100,
        readOnly: true,
      }),
    settings: ClientSettingsSchema.exactOptional(),
    classification: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Classification or category label for organizational purposes',
        example: 'VIP',
      }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Notes that are visible to the client',
        example: 'These are public notes visible to clients',
      }),
  })
  .openapi({ required: [] })
  .openapi('Client')

const CompanySettingsSchema = z
  .object({
    currency_id: z.string().openapi({ description: 'The default currency id', example: '1' }),
    timezone_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timezone id', example: '15' }),
    date_format_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date format id', example: '15' }),
    military_time: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles 12/24 hour time', example: true }),
    language_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language id', example: '1' }),
    show_currency_code: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether the currency symbol or code is shown',
        example: true,
      }),
    payment_terms: z
      .int()
      .exactOptional()
      .openapi({
        description:
          '-1 sets no payment term, 0 sets payment due immediately, positive integers indicates payment terms in days',
        example: 1,
      }),
    company_gateway_ids: z
      .string()
      .exactOptional()
      .openapi({ description: 'A commad separate list of available gateways', example: '1,2,3,4' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom Label', example: 'Custom Label' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom Label', example: 'Custom Label' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom Label', example: 'Custom Label' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom Label', example: 'Custom Label' }),
    default_task_rate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The default task rate', example: 10 }),
    send_reminders: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether reminders are sent', example: true }),
    enable_client_portal_tasks: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Show/hide the tasks panel in the client portal', example: true }),
    email_style: z
      .enum(['plain', 'light', 'dark', 'custom'])
      .exactOptional()
      .openapi({ description: 'options include plain,light,dark,custom', example: 'light' }),
    reply_to_email: z
      .email()
      .exactOptional()
      .openapi({ description: 'The reply to email address', example: 'email@gmail.com' }),
    bcc_email: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A comma separate list of BCC emails',
        example: 'email@gmail.com, contact@gmail.com',
      }),
    pdf_email_attachment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether to attach PDF as attachment', example: true }),
    ubl_email_attachment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether to attach UBL as attachment', example: true }),
    email_style_custom: z
      .string()
      .exactOptional()
      .openapi({ description: 'The custom template', example: '<HTML></HTML>' }),
    counter_number_applied: z
      .enum(['when_saved', 'when_sent', 'when_paid'])
      .exactOptional()
      .openapi({
        description: 'enum when the invoice number counter is set',
        example: 'when_sent',
      }),
    quote_number_applied: z
      .enum(['when_saved', 'when_sent'])
      .exactOptional()
      .openapi({ description: 'enum when the quote number counter is set', example: 'when_sent' }),
    custom_message_dashboard: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom message which is displayed on the dashboard',
        example: 'Please pay invoices immediately',
      }),
    custom_message_unpaid_invoice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A custom message which is displayed in the client portal when a client is viewing a unpaid invoice.',
        example: 'Please pay invoices immediately',
      }),
    custom_message_paid_invoice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A custom message which is displayed in the client portal when a client is viewing a paid invoice.',
        example: 'Thanks for paying this invoice!',
      }),
    custom_message_unapproved_quote: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A custom message which is displayed in the client portal when a client is viewing a unapproved quote.',
        example: 'Please approve quote',
      }),
    lock_invoices: z
      .enum(['off', 'when_sent', 'when_paid', 'end_of_month'])
      .exactOptional()
      .openapi({
        description: 'Toggles whether invoices are locked once sent and cannot be modified further',
        example: 'off',
      }),
    auto_archive_invoice: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether a invoice is archived immediately following payment',
        example: true,
      }),
    auto_archive_quote: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether a quote is archived after being converted to a invoice',
        example: true,
      }),
    auto_convert_quote: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether a quote is converted to a invoice when approved',
        example: true,
      }),
    inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining whether inclusive or exclusive taxes are used',
        example: true,
      }),
    translations: z
      .object({})
      .exactOptional()
      .openapi({ description: 'JSON payload of customized translations', example: {} }),
    task_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the task number pattern',
        example: '{$year}-{$counter}',
      }),
    task_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for tasks', example: 1 }),
    reminder_send_time: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Time from UTC +0 when the email will be sent to the client',
        example: 32400,
      }),
    expense_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the expense number pattern',
        example: '{$year}-{$counter}',
      }),
    expense_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for expenses', example: 1 }),
    vendor_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the vendor number pattern',
        example: '{$year}-{$counter}',
      }),
    vendor_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for vendors', example: 1 }),
    ticket_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the ticket number pattern',
        example: '{$year}-{$counter}',
      }),
    ticket_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for tickets', example: 1 }),
    payment_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the payment number pattern',
        example: '{$year}-{$counter}',
      }),
    payment_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for payments', example: 1 }),
    invoice_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the invoice number pattern',
        example: '{$year}-{$counter}',
      }),
    invoice_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for invoices', example: 1 }),
    quote_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the quote number pattern',
        example: '{$year}-{$counter}',
      }),
    quote_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for quotes', example: 1 }),
    client_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the client number pattern',
        example: '{$year}-{$counter}',
      }),
    client_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for clients', example: 1 }),
    credit_number_pattern: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Allows customisation of the credit number pattern',
        example: '{$year}-{$counter}',
      }),
    credit_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The incrementing counter for credits', example: 1 }),
    recurring_invoice_number_prefix: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This string is prepended to the recurring invoice number',
        example: 'R',
      }),
    reset_counter_frequency_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'CONSTANT which is used to apply the frequency which the counters are reset',
        example: 1,
      }),
    reset_counter_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The explicit date which is used to reset counters',
        example: '2019-01-01',
      }),
    counter_padding: z
      .int()
      .exactOptional()
      .openapi({ description: 'Pads the counter with leading zeros', example: 1 }),
    shared_invoice_quote_counter: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flags whether to share the counter for invoices and quotes',
        example: true,
      }),
    update_products: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if client fields are updated from third party APIs',
        example: true,
      }),
    convert_products: z.boolean().exactOptional().openapi({ description: '', example: true }),
    fill_products: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Automatically fill products based on product_key', example: true }),
    invoice_terms: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default invoice terms', example: 'Invoice Terms are...' }),
    quote_terms: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default quote terms', example: 'Quote Terms are...' }),
    invoice_taxes: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of Taxes that can be applied to the invoice',
        example: 1,
      }),
    invoice_design_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default design id (invoice, quote etc)', example: '1' }),
    quote_design_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default design id (invoice, quote etc)', example: '1' }),
    invoice_footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default invoice footer', example: '1' }),
    invoice_labels: z
      .string()
      .exactOptional()
      .openapi({ description: 'JSON string of invoice labels', example: '1' }),
    tax_rate1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The tax rate (float)', example: 10 }),
    tax_name1: z.string().exactOptional().openapi({ description: 'The tax name', example: 'GST' }),
    tax_rate2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The tax rate (float)', example: 10 }),
    tax_name2: z.string().exactOptional().openapi({ description: 'The tax name', example: 'GST' }),
    tax_rate3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The tax rate (float)', example: 10 }),
    tax_name3: z.string().exactOptional().openapi({ description: 'The tax name', example: 'GST' }),
    payment_type_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default payment type id', example: '1' }),
    custom_fields: z
      .string()
      .exactOptional()
      .openapi({ description: 'JSON string of custom fields', example: '{}' }),
    email_footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default email footer', example: 'A default email footer' }),
    email_sending_method: z
      .enum([
        'default',
        'gmail',
        'office365',
        'client_postmark',
        'client_mailgun',
        'mailgun',
        'client_brevo',
      ])
      .exactOptional()
      .openapi({ description: 'The email driver to use to send email', example: 'default' }),
    gmail_sending_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed_id of the user account to send email from',
        example: 'F76sd34D',
      }),
    email_subject_invoice: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'Your Invoice Subject' }),
    email_subject_quote: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'Your Quote Subject' }),
    email_subject_payment: z
      .string()
      .exactOptional()
      .openapi({ description: '', example: 'Your Payment Subject' }),
    email_template_invoice: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for invoice emails', example: '<HTML></HTML>' }),
    email_template_quote: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for quote emails', example: '<HTML></HTML>' }),
    email_template_payment: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for payment emails', example: '<HTML></HTML>' }),
    email_subject_reminder1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email subject for Reminder', example: '<HTML></HTML>' }),
    email_subject_reminder2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email subject for Reminder', example: '<HTML></HTML>' }),
    email_subject_reminder3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email subject for Reminder', example: '<HTML></HTML>' }),
    email_subject_reminder_endless: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email subject for endless reminders', example: '<HTML></HTML>' }),
    email_template_reminder1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for Reminder 1', example: '<HTML></HTML>' }),
    email_template_reminder2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for Reminder 2', example: '<HTML></HTML>' }),
    email_template_reminder3: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for Reminder 3', example: '<HTML></HTML>' }),
    email_template_reminder_endless: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full template for enless reminders', example: '<HTML></HTML>' }),
    enable_portal_password: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether a password is required to log into the client portal',
        example: true,
      }),
    show_accept_invoice_terms: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether the terms dialogue is shown to the client',
        example: true,
      }),
    show_accept_quote_terms: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether the terms dialogue is shown to the client',
        example: true,
      }),
    require_invoice_signature: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether a invoice signature is required', example: true }),
    require_quote_signature: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether a quote signature is required', example: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company name', example: 'Acme Co' }),
    company_logo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company logo file', example: 'logo.png' }),
    website: z
      .url()
      .exactOptional()
      .openapi({ description: 'The company website URL', example: 'https://www.acme.com' }),
    address1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company address line 1', example: 'Suite 888' }),
    address2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company address line 2', example: '5 Jimbo Way' }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company city', example: 'Sydney' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company state', example: 'Florida' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company zip/postal code', example: '90210' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company phone', example: '555-213-3948' }),
    email: z
      .email()
      .exactOptional()
      .openapi({ description: 'The company email', example: 'joe@acme.co' }),
    country_id: z.string().exactOptional().openapi({ description: 'The country ID', example: '1' }),
    vat_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company VAT/TAX ID number', example: '32 120 377 720' }),
    page_size: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default page size', example: 'A4' }),
    font_size: z.number().exactOptional().openapi({ description: 'The font size', example: 9 }),
    primary_font: z
      .string()
      .exactOptional()
      .openapi({ description: 'The primary font', example: 'roboto' }),
    secondary_font: z
      .string()
      .exactOptional()
      .openapi({ description: 'The secondary font', example: 'roboto' }),
    hide_paid_to_date: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flags whether to hide the paid to date field', example: false }),
    embed_documents: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggled whether to embed documents in the PDF', example: false }),
    all_pages_header: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The header for the PDF', example: false }),
    all_pages_footer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The footer for the PDF', example: false }),
    document_email_attachment: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether to attach documents in the email', example: false }),
    enable_client_portal_password: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles password protection of the client portal', example: false }),
    enable_email_markup: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles the use of markdown in emails', example: false }),
    enable_client_portal_dashboard: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether the client dashboard is shown in the client portal',
        example: false,
      }),
    enable_client_portal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Toggles whether the entire client portal is displayed to the client, or only the context',
        example: false,
      }),
    email_template_statement: z
      .string()
      .exactOptional()
      .openapi({ description: 'The body of the email for statements', example: 'template matter' }),
    email_subject_statement: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The subject of the email for statements',
        example: 'subject matter',
      }),
    signature_on_pdf: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles whether the signature (if available) is displayed on the PDF',
        example: false,
      }),
    quote_footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default quote footer', example: 'the quote footer' }),
    email_subject_custom1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template subject', example: 'Custom Subject 1' }),
    email_subject_custom2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template subject', example: 'Custom Subject 2' }),
    email_subject_custom3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template subject', example: 'Custom Subject 3' }),
    email_template_custom1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template body', example: '<HTML></HTML>' }),
    email_template_custom2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template body', example: '<HTML></HTML>' }),
    email_template_custom3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom reminder template body', example: '<HTML></HTML>' }),
    enable_reminder1: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether this reminder is enabled', example: false }),
    enable_reminder2: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether this reminder is enabled', example: false }),
    enable_reminder3: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggles whether this reminder is enabled', example: false }),
    num_days_reminder1: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Reminder interval', example: 9 }),
    num_days_reminder2: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Reminder interval', example: 9 }),
    num_days_reminder3: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Reminder interval', example: 9 }),
    schedule_reminder1: z
      .enum(['after_invoice_date', 'before_due_date', 'after_due_date'])
      .exactOptional()
      .openapi({
        description: '(enum: after_invoice_date, before_due_date, after_due_date)',
        example: 'after_invoice_date',
      }),
    schedule_reminder2: z
      .enum(['after_invoice_date', 'before_due_date', 'after_due_date'])
      .exactOptional()
      .openapi({
        description: '(enum: after_invoice_date, before_due_date, after_due_date)',
        example: 'after_invoice_date',
      }),
    schedule_reminder3: z
      .enum(['after_invoice_date', 'before_due_date', 'after_due_date'])
      .exactOptional()
      .openapi({
        description: '(enum: after_invoice_date, before_due_date, after_due_date)',
        example: 'after_invoice_date',
      }),
    late_fee_amount1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The late fee amount for reminder 1', example: 10 }),
    late_fee_amount2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The late fee amount for reminder 2', example: 20 }),
    late_fee_amount3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The late fee amount for reminder 2', example: 100 }),
    endless_reminder_frequency_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The frequency id of the endless reminder', example: '1' }),
    client_online_payment_notification: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if a client should receive the notification for a online payment',
        example: false,
      }),
    client_manual_payment_notification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if a client should receive the notification for a manually entered payment',
        example: false,
      }),
    enable_e_invoice: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if e-invoicing is enabled', example: false }),
    default_expense_payment_type_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default payment type for expenses', example: '0' }),
    e_invoice_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The e-invoice type', example: 'EN16931' }),
    mailgun_endpoint: z
      .enum(['api.mailgun.net', 'api.eu.mailgun.net'])
      .exactOptional()
      .openapi({
        description: 'The mailgun endpoint - used to determine whether US or EU endpoints are used',
        example: 'api.mailgun.net',
      }),
    client_initiated_payments: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if clients can initiate payments directly from the client portal',
        example: false,
      }),
    client_initiated_payments_minimum: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The minimum amount a client can pay', example: 10 }),
    sync_invoice_quote_columns: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if invoice and quote columns are synced for the PDF rendering, or if they use their own columns',
        example: false,
      }),
    show_task_item_description: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the task item description is shown on the invoice',
        example: false,
      }),
    allow_billable_task_items: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if task items can be marked as billable',
        example: false,
      }),
    accept_client_input_quote_approval: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if clients can approve quotes and also pass through a PO Number reference',
        example: false,
      }),
    custom_sending_email: z
      .email()
      .exactOptional()
      .openapi({
        description:
          'When using Mailgun or Postmark, the FROM email address can be customized using this setting.',
        example: 'bob@gmail.com',
      }),
    show_paid_stamp: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the PAID stamp is shown on the invoice',
        example: false,
      }),
    show_shipping_address: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the shipping address is shown on the invoice',
        example: false,
      }),
    company_logo_size: z
      .int()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description: 'The size of the company logo on the PDF - percentage value between 0 and 100',
        example: 100,
      }),
    show_email_footer: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the email footer is shown on emails',
        example: false,
      }),
    email_alignment: z
      .enum(['left', 'center', 'right'])
      .exactOptional()
      .openapi({
        description: 'The alignment of the email body text, options include left / center / right',
        example: 'left',
      }),
    auto_bill_standard_invoices: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if standard invoices are automatically billed when they are created or due',
        example: false,
      }),
    postmark_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Postmark secret API key', example: '123456' }),
    mailgun_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Mailgun secret API key', example: '123456' }),
    mailgun_domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Mailgun domain', example: 'sandbox123456.mailgun.org' }),
    send_email_on_mark_paid: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if an email is sent when an invoice is marked as paid',
        example: false,
      }),
    vendor_portal_enable_uploads: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if vendors can upload files to the portal',
        example: false,
      }),
    besr_id: z.string().exactOptional().openapi({ description: 'The BESR ID', example: '123456' }),
    qr_iban: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IBAN for the QR code', example: 'CH123456' }),
    email_subject_purchase_order: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email subject for purchase orders', example: 'Purchase Order' }),
    email_template_purchase_order: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email template for purchase orders',
        example: 'Please see attached your purchase order.',
      }),
    require_purchase_order_signature: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if a signature is required on purchase orders',
        example: false,
      }),
    purchase_order_public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The public notes for purchase orders',
        example: 'Please see attached your purchase order.',
      }),
    purchase_order_terms: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The terms for purchase orders',
        example: 'Please see attached your purchase order.',
      }),
    purchase_order_footer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The footer for purchase orders',
        example: 'Please see attached your purchase order.',
      }),
    purchase_order_design_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The design id for purchase orders', example: 'hd677df' }),
    purchase_order_number_pattern: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pattern for purchase order numbers', example: 'PO-000000' }),
    purchase_order_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The counter for purchase order numbers', example: 1 }),
    page_numbering_alignment: z
      .enum(['left', 'center', 'right'])
      .exactOptional()
      .openapi({
        description: 'The alignment for page numbering: options include left / center / right',
        example: 'left',
      }),
    page_numbering: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if page numbering is enabled on Document PDFs',
        example: false,
      }),
    auto_archive_invoice_cancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if invoices are automatically archived when they are cancelled',
        example: false,
      }),
    email_from_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The FROM name for emails when using Custom emailers',
        example: 'Bob Smith',
      }),
    show_all_tasks_client_portal: z
      .enum(['all', 'uninvoiced', 'invoiced'])
      .exactOptional()
      .openapi({
        description: 'Determines if all tasks are shown on the client portal',
        example: 'all',
      }),
    entity_send_time: z
      .int()
      .min(1)
      .max(24)
      .exactOptional()
      .openapi({
        description:
          'The time that emails are sent. The time is localized to the clients locale, integer values from 1 - 24',
        example: 9,
      }),
    shared_invoice_credit_counter: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the invoice and credit counter are shared',
        example: false,
      }),
    reply_to_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reply to name for emails', example: 'Bob Smith' }),
    hide_empty_columns_on_pdf: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if empty columns are hidden on PDFs', example: false }),
    enable_reminder_endless: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if endless reminders are enabled', example: false }),
    use_credits_payment: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if credits can be used as a payment method',
        example: false,
      }),
    recurring_invoice_number_pattern: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pattern for recurring invoice numbers', example: 'R-000000' }),
    recurring_invoice_number_counter: z
      .int()
      .exactOptional()
      .openapi({ description: 'The counter for recurring invoice numbers', example: 1 }),
    client_portal_under_payment_minimum: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The minimum payment payment', example: 10 }),
    auto_bill_date: z
      .enum(['on_send_date', 'on_due_date'])
      .exactOptional()
      .openapi({
        description: 'Determines when the invoices are auto billed',
        example: 'on_send_date',
      }),
    primary_color: z
      .string()
      .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
      .exactOptional()
      .openapi({
        description: 'The primary color for the client portal / document highlights',
        example: '#ffffff',
      }),
    secondary_color: z
      .string()
      .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
      .exactOptional()
      .openapi({
        description: 'The secondary color for the client portal / document highlights',
        example: '#ffffff',
      }),
    client_portal_allow_under_payment: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if clients can pay invoices under the invoice amount due',
        example: false,
      }),
    client_portal_allow_over_payment: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if clients can pay invoices over the invoice amount',
        example: false,
      }),
    auto_bill: z
      .enum(['off', 'always', 'optin', 'optout'])
      .exactOptional()
      .openapi({
        description: 'Determines how autobilling is applied for recurring invoices',
        example: 'off',
      }),
    client_portal_terms: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The terms which are displayed on the client portal',
        example: 'Please see attached your invoice.',
      }),
    client_portal_privacy_policy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The privacy policy which is displayed on the client portal',
        example: 'These are the terms of use for using the client portal.',
      }),
    client_can_register: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if clients can register on the client portal',
        example: false,
      }),
    portal_design_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The design id for the client portal', example: 'hd677df' }),
    late_fee_endless_percent: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The late fee percentage for endless late fees', example: 10 }),
    late_fee_endless_amount: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The late fee amount for endless late fees', example: 10 }),
    auto_email_invoice: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if invoices are automatically emailed when they are created',
        example: false,
      }),
    email_signature: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email signature for emails', example: 'Bob Smith' }),
    classification: z
      .string()
      .exactOptional()
      .openapi({ description: 'The classification for the company', example: 'individual' }),
    valid_until: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default validity period for quotes', example: '30 days' }),
    credit_terms: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default terms for credit notes', example: 'Credit note terms' }),
    credit_footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default footer for credit notes', example: 'Credit note footer' }),
  })
  .openapi({ required: ['currency_id'] })
  .openapi('CompanySettings')

const QuoteSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed identifier for the quote',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed identifier for the user who created the quote',
        example: '',
      }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed identifier for the user assigned to the quote',
        example: '',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed identifier for the client associated with the quote',
        example: '',
      }),
    status_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status of the quote represented by a unique identifier',
        example: '',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique alpha-numeric quote number for the quote per company',
        example: 'QUOTE_101',
      }),
    po_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The purchase order number associated with the quote',
        example: 'PO-1234',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The terms and conditions for the quote',
        example: 'These are some quote terms. Valid for 14 days.',
      }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Publicly visible notes associated with the quote',
        example: 'These are public notes which the client may see',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Privately visible notes associated with the quote, not disclosed to the client',
        example: 'These are private notes, not to be disclosed to the client',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The footer text of the quote',
        example: 'The text goes in the footer of the quote',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'First custom value field for additional information',
        example: 'A custom value',
      }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Second custom value field for additional information',
        example: 'A custom value',
      }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Third custom value field for additional information',
        example: 'A custom value',
      }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Fourth custom value field for additional information',
        example: 'A custom value',
      }),
    tax_name1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the first tax applied to the quote', example: 'GST' }),
    tax_name2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the second tax applied to the quote', example: 'VAT' }),
    tax_rate1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The rate of the first tax applied to the quote', example: 10 }),
    tax_rate2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The rate of the second tax applied to the quote', example: 10 }),
    tax_name3: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the third tax applied to the quote', example: '' }),
    tax_rate3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The rate of the third tax applied to the quote', example: 10 }),
    total_taxes: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total amount of taxes for the quote', example: 10 }),
    line_items: z
      .array(InvoiceItemSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the line items of the quote' }),
    amount: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The total amount of the quote before taxes and discounts',
        example: 10,
      }),
    balance: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The balance due for the quote after accounting for payments',
        example: 10,
      }),
    paid_to_date: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total amount paid on the quote so far', example: 10 }),
    discount: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The discount amount or percentage applied to the quote',
        example: 10,
      }),
    partial: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The partial or deposit amount for the quote', example: 10 }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag indicating if the discount is a fixed amount or a percentage',
        example: true,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag indicating if the quote has been deleted',
        example: false,
      }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag indicating if the taxes used are inclusive or exclusive',
        example: true,
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date the quote was created', example: '1994-07-30' }),
    last_sent_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The last date the quote was sent to the client',
        example: '1994-07-30',
      }),
    next_send_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The next scheduled date for sending a reminder for the quote',
        example: '1994-07-30',
      }),
    partial_due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the partial or deposit amount',
        example: '1994-07-30',
      }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the total amount of the quote',
        example: '1994-07-30',
      }),
    settings: CompanySettingsSchema.exactOptional(),
    last_viewed: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The timestamp of the last time the quote was viewed',
        example: 1434342123,
      }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The timestamp of the last update to the quote',
        example: 1434342123,
      }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The timestamp of when the quote was archived',
        example: 1434342123,
      }),
    custom_surcharge1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'First custom surcharge amount for the quote', example: 10 }),
    custom_surcharge2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Second custom surcharge amount for the quote', example: 10 }),
    custom_surcharge3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Third custom surcharge amount for the quote', example: 10 }),
    custom_surcharge4: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Fourth custom surcharge amount for the quote', example: 10 }),
    custom_surcharge_tax1: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag indicating if taxes are charged on the first custom surcharge amount',
        example: true,
      }),
    custom_surcharge_tax2: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag indicating if taxes are charged on the second custom surcharge amount',
        example: true,
      }),
    custom_surcharge_tax3: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag indicating if taxes are charged on the third custom surcharge amount',
        example: true,
      }),
    custom_surcharge_tax4: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag indicating if taxes are charged on the fourth custom surcharge amount',
        example: true,
      }),
    location_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The client location id that this invoice relates to',
        example: 'Opnel5aKBz',
      }),
    design_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the design template used for this quote',
        example: 'Opnel5aKBz',
      }),
    exchange_rate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The exchange rate used for currency conversion', example: 1 }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the project associated with this quote',
        example: 'Opnel5aKBz',
      }),
    subscription_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the subscription associated with this quote',
        example: 'Opnel5aKBz',
      }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the vendor associated with this quote',
        example: 'Opnel5aKBz',
      }),
  })
  .openapi({ required: [] })
  .openapi('Quote')

const InvoiceInvitationRequestSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The entity invitation hashed id',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    client_contact_id: z
      .string()
      .openapi({ description: 'The client contact hashed id', example: 'Opnel5aKBz' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invitation key',
        example: 'Opnel5aKBz4343343566236gvbb',
        readOnly: true,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invitation link',
        example: 'https://www.example.com/invitations/Opnel5aKBz4343343566236gvbb',
        readOnly: true,
      }),
    sent_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation sent date', readOnly: true }),
    viewed_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation viewed date', readOnly: true }),
    opened_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation opened date', readOnly: true }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    email_error: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email error', example: 'The email error', readOnly: true }),
    email_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email status', readOnly: true }),
  })
  .openapi({ required: ['client_contact_id'] })
  .openapi('InvoiceInvitationRequest')

const InvoiceRequestSchema = z
  .object({
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'AxP7K9nY5z' }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: 'Bw2M8vR4qL' }),
    client_id: z.string().openapi({ description: 'The client hashed id', example: 'Ht5N9cX3jK' }),
    location_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The location id of the client this request related to',
        example: 'Opnel5aKBz',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The invoice number - is a unique alpha numeric number per invoice per company',
        example: 'INV-2024-0001',
      }),
    po_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The purchase order associated with this invoice',
        example: 'PO-2024-0123',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invoice terms',
        example: 'Net 30 - Payment is due within 30 days of invoice date',
      }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The public notes of the invoice',
        example: 'Thank you for your business. Please include invoice number with payment.',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The private notes of the invoice',
        example: 'Client requested expedited delivery - premium rates apply',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invoice footer notes',
        example: 'Payment accepted via bank transfer or credit card',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Department: Sales' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Region: North America' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Contract: C-2024-156' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Priority: High' }),
    tax_name1: z.string().exactOptional().openapi({ description: 'The tax name', example: 'VAT' }),
    tax_name2: z.string().exactOptional().openapi({ description: 'The tax name', example: 'GST' }),
    tax_rate1: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 20 }),
    tax_rate2: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 5 }),
    tax_name3: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tax name', example: 'State Tax' }),
    tax_rate3: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 8.5 }),
    line_items: z
      .array(InvoiceItemSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the line items of the invoice' }),
    invitations: z
      .array(InvoiceInvitationRequestSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the invitations of the invoice' }),
    discount: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The invoice discount, can be an amount or a percentage',
        example: 15,
      }),
    partial: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The deposit/partial amount', example: 250 }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag determining if the discount is an amount or a percentage',
        example: true,
      }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines the type of taxes used as either inclusive or exclusive',
        example: true,
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The Invoice Date', example: '2024-03-15' }),
    partial_due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the deposit/partial amount',
        example: '2024-03-29',
      }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The due date of the invoice', example: '2024-04-14' }),
    custom_surcharge1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'First Custom Surcharge', example: 25 }),
    custom_surcharge2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Second Custom Surcharge', example: 35 }),
    custom_surcharge3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Third Custom Surcharge', example: 45 }),
    custom_surcharge4: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Fourth Custom Surcharge', example: 55 }),
    custom_surcharge_tax1: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax2: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax3: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax4: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project associated with this invoice', example: 'Opnel5aKBz' }),
  })
  .openapi({ required: ['client_id'] })
  .openapi('InvoiceRequest')

const ProductRequestSchema = z
  .object({
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed ID of the user assigned to this product.',
        example: 'pR0j3',
      }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed ID of the project that this product is associated with.',
        example: 'pR0j3',
      }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed ID of the vendor that this product is associated with.',
        example: 'pR0j3',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field 1.', example: 'Custom value 1' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field 2.', example: 'Custom value 2' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field 3.', example: 'Custom value 3' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field 4.', example: 'Custom value 4' }),
    product_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The product key.', example: '1234' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Notes about the product.',
        example: 'These are some notes about the product.',
      }),
    cost: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The cost of the product.', example: 10 }),
    price: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The price of the product.', example: 20 }),
    quantity: z
      .float64()
      .default(1)
      .exactOptional()
      .openapi({ description: 'The quantity of the product.', example: 5 }),
    tax_name1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The default tax name associated with this product',
        example: 'Tax 1',
      }),
    tax_rate1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The default tax rate for this product', example: 10 }),
    tax_name2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The default tax name associated with this product',
        example: 'Tax 2',
      }),
    tax_rate2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The default tax rate for this product', example: 5 }),
    tax_name3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The default tax name associated with this product',
        example: 'Tax 3',
      }),
    tax_rate3: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The default tax rate for this product', example: 0 }),
    in_stock_quantity: z
      .int32()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The quantity of the product that is currently in stock. \n\n**note** this field is not mutable without passing an extra query parameter which will allow modification of this value.\n\nThe query parameter ?update_in_stock_quantity=true **MUST** be passed if you wish to update this value manually.\n',
      }),
    stock_notification: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Indicates whether stock notifications are enabled for this product',
      }),
    stock_notification_threshold: z
      .int32()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The minimum quantity threshold for which stock notifications will be triggered',
      }),
    max_quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum quantity that can be ordered for this product' }),
    product_image: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the product image' }),
    tax_id: z
      .string()
      .default('1')
      .exactOptional()
      .openapi({
        description:
          "The tax category id for this product.'\n\nThe following constants are available (default = '1')\n\n```\nPRODUCT_TYPE_PHYSICAL = '1'\nPRODUCT_TYPE_SERVICE = '2'\nPRODUCT_TYPE_DIGITAL = '3'\nPRODUCT_TYPE_SHIPPING = '4'\nPRODUCT_TYPE_EXEMPT = '5'\nPRODUCT_TYPE_REDUCED_TAX = '6'\nPRODUCT_TYPE_OVERRIDE_TAX = '7'\nPRODUCT_TYPE_ZERO_RATED = '8'\nPRODUCT_TYPE_REVERSE_TAX = '9'\n```\n",
        example: '1',
      }),
    income_account_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The accounting income account identifier this product maps to (used by external accounting integrations such as QuickBooks).',
        example: '42',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductRequest')

const BankIntegrationSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The bank integration hashed id',
        example: 'AS3df3A',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'AS3df3A' }),
    provider_bank_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The providers bank name', example: 'Chase Bank' }),
    bank_account_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The bank account id', example: 1233434 }),
    bank_account_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the account', example: 'My Checking Acc' }),
    bank_account_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account number', example: '111 234 2332' }),
    bank_account_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of the bank account', example: 'ACTIVE' }),
    bank_account_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of account', example: 'CREDITCARD' }),
    balance: z
      .number()
      .exactOptional()
      .openapi({ description: 'The current bank balance if available', example: 1000000 }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'iso_3166_3 code', example: 'USD' }),
  })
  .openapi({ required: [] })
  .openapi('BankIntegration')

const CompanyTokenSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token name', example: 'Token Name' }),
    token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token value', example: 'AS3df3jUUH765fhfd9KJuidj3JShjA' }),
    is_system: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the token is created by the system rather than a user',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('CompanyToken')

const PurchaseOrderSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed identifier for the purchase order',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed identifier for the user who created the purchase order',
        example: '',
      }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed identifier for the user assigned to the purchase order',
        example: '',
      }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique hashed identifier for the vendor associated with the purchase order',
        example: '',
      }),
    status_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status of the purchase order represented by a unique identifier',
        example: '',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique alpha-numeric purchase order number per company',
        example: 'PO_101',
      }),
    quote_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The quote number associated with this purchase order',
        example: 'QUOTE_101',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The terms and conditions for the purchase order',
        example: 'These are some purchase order terms. Valid for 14 days.',
      }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Publicly visible notes associated with the purchase order',
        example: 'These are public notes which the vendor may see',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Privately visible notes associated with the purchase order, not disclosed to the vendor',
        example: 'These are private notes, not to be disclosed to the vendor',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The footer text of the purchase order',
        example: 'The text goes in the footer of the purchase order',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'First custom value field for additional information',
        example: 'A custom value',
      }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Second custom value field for additional information',
        example: 'A custom value',
      }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Third custom value field for additional information',
        example: 'A custom value',
      }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Fourth custom value field for additional information',
        example: 'A custom value',
      }),
    tax_name1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the first tax applied to the purchase order',
        example: 'GST',
      }),
    tax_name2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the second tax applied to the purchase order',
        example: 'VAT',
      }),
    tax_rate1: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The rate of the first tax applied to the purchase order',
        example: 10,
      }),
    tax_rate2: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The rate of the second tax applied to the purchase order',
        example: 10,
      }),
    tax_name3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the third tax applied to the purchase order',
        example: '',
      }),
    tax_rate3: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The rate of the third tax applied to the purchase order',
        example: 10,
      }),
    total_taxes: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The total amount of taxes applied to the purchase order',
        example: 10,
      }),
    line_items: z
      .array(InvoiceItemSchema)
      .exactOptional()
      .openapi({
        description: 'An array of objects which define the line items of the purchase order',
      }),
    amount: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The total amount of the purchase order before taxes and discounts',
        example: 10,
      }),
    balance: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The balance due for the purchase order after accounting for payments',
        example: 10,
      }),
    paid_to_date: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total amount paid on the purchase order so far', example: 10 }),
    discount: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The discount amount or percentage applied to the purchase order',
        example: 10,
      }),
    partial: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The partial or deposit amount for the purchase order',
        example: 10,
      }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag indicating if the discount is a fixed amount or a percentage',
        example: true,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag indicating if the purchase order has been deleted',
        example: false,
      }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag indicating if the taxes used are inclusive or exclusive',
        example: true,
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date the purchase order was created', example: '1994-07-30' }),
    last_sent_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The last date the purchase order was sent to the vendor',
        example: '1994-07-30',
      }),
    next_send_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The next scheduled date for sending a reminder for the purchase order',
        example: '1994-07-30',
      }),
    partial_due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the partial or deposit amount',
        example: '1994-07-30',
      }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the total amount of the purchase order',
        example: '1994-07-30',
      }),
    settings: CompanySettingsSchema.exactOptional(),
    last_viewed: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    custom_surcharge1: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'First custom surcharge amount for the purchase order',
        example: 10,
      }),
    custom_surcharge2: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Second custom surcharge amount for the purchase order',
        example: 10,
      }),
    custom_surcharge3: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Third custom surcharge amount for the purchase order',
        example: 10,
      }),
    custom_surcharge4: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Fourth custom surcharge amount for the purchase order',
        example: 10,
      }),
    custom_surcharge_tax1: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag indicating if taxes are charged on the first custom surcharge amount',
        example: true,
      }),
    custom_surcharge_tax2: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag indicating if taxes are charged on the second custom surcharge amount',
        example: true,
      }),
    custom_surcharge_tax3: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag indicating if taxes are charged on the third custom surcharge amount',
        example: true,
      }),
    custom_surcharge_tax4: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag indicating if taxes are charged on the fourth custom surcharge amount',
        example: true,
      }),
    backup: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Backup data or file reference for this purchase order',
        example: 'backup_data.json',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the client associated with this purchase order',
        example: 'Opnel5aKBz',
      }),
    currency_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the currency', example: '1' }),
    design_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the design template used for this purchase order',
        example: 'Opnel5aKBz',
      }),
    exchange_rate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The exchange rate used for currency conversion', example: 1 }),
    invoice_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the related invoice',
        example: 'Opnel5aKBz',
      }),
    quote_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the related quote',
        example: 'Opnel5aKBz',
      }),
    location_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the location', example: 'Opnel5aKBz' }),
    po_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The purchase order number', example: 'PO-2024-001' }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the project associated with this purchase order',
        example: 'Opnel5aKBz',
      }),
    recurring_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the recurring schedule',
        example: 'Opnel5aKBz',
      }),
    reminder1_sent: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp when the first reminder was sent', example: 1234567890 }),
    reminder2_sent: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp when the second reminder was sent', example: 1234567890 }),
    reminder3_sent: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp when the third reminder was sent', example: 1234567890 }),
    reminder_last_sent: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp when the last reminder was sent', example: 1234567890 }),
  })
  .openapi({ required: [] })
  .openapi('PurchaseOrder')

const InvoiceInvitationSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The entity invitation hashed id',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    client_contact_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client contact hashed id', example: 'Opnel5aKBz' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invitation key',
        example: 'Opnel5aKBz4343343566236gvbb',
        readOnly: true,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invitation link',
        example: 'https://www.example.com/invitations/Opnel5aKBz4343343566236gvbb',
        readOnly: true,
      }),
    sent_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation sent date', readOnly: true }),
    viewed_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation viewed date', readOnly: true }),
    opened_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation opened date', readOnly: true }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    email_error: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email error', example: 'The email error', readOnly: true }),
    email_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email status', readOnly: true }),
    can_sign: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the recipient contact may electronically sign this invitation. Mirrors the can_sign flag on the linked client contact at the time the invitation was issued.',
        example: false,
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceInvitation')

const VendorContactSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the vendor contact',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the user id',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the vendor',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the contact', example: 'Harry' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the contact', example: 'Windsor' }),
    contact_key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique identifier for the contact',
        example: 'JD0X52bkfZlJRiroCJ0tcSiAjsJTntZ5uqKdiZ0a',
        readOnly: true,
      }),
    confirmation_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The confirmation code used to authenticate the contacts email address',
        example: '333-sdjkh34gbasd',
        readOnly: true,
      }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The contacts phone number', example: '555-123-1234' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '2022-10-10' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '$1000' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The contact email address', example: 'harry@windsor.com' }),
    email_verified_at: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The date which the contact confirmed their email',
        example: 134341234234,
        readOnly: true,
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed password of the contact', example: '*****' }),
    is_primary: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag determining if the contact is the primary contact for the vendor',
        example: true,
      }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    deleted_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    send_email: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating whether to send emails to this contact',
        example: true,
      }),
    cc_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true this contact is only included as a CC recipient on outgoing emails and is not addressed directly.',
        example: false,
      }),
    can_sign: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true this contact is permitted to electronically sign purchase order invitations.',
        example: false,
      }),
  })
  .openapi({ required: [] })
  .openapi('VendorContact')

const ClientGatewayTokenSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the client gateway token',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed_id of the client', example: '2' }),
    token: z.string().exactOptional().openapi({ description: 'The payment token', example: '2' }),
    routing_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'THe bank account routing number', example: '2' }),
    company_gateway_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed id of the company gateway', example: '2' }),
    is_default: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag determining if the token is the default payment method',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('ClientGatewayToken')

const VendorRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'Vendor name', example: 'ABC Supply Company' }),
    address1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Primary address line', example: '123 Main Street' }),
    address2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Secondary address line', example: 'Suite 100' }),
    city: z.string().exactOptional().openapi({ description: 'City', example: 'New York' }),
    state: z.string().exactOptional().openapi({ description: 'State or province', example: 'NY' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code', example: '10001' }),
    country_id: z.string().exactOptional().openapi({ description: 'Country ID', example: '1' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Phone number', example: '+1-555-123-4567' }),
    email: z
      .email()
      .exactOptional()
      .openapi({ description: 'Email address', example: 'contact@abcsupply.com' }),
    website: z
      .url()
      .exactOptional()
      .openapi({ description: 'Website URL', example: 'https://www.abcsupply.com' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 1', example: 'Custom value 1' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 2', example: 'Custom value 2' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 3', example: 'Custom value 3' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 4', example: 'Custom value 4' }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the vendor is deleted', example: false }),
    archived_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamp when vendor was archived', example: 1640995200 }),
    contacts: z
      .array(
        z
          .object({
            first_name: z.string().exactOptional().openapi({ example: 'John' }),
            last_name: z.string().exactOptional().openapi({ example: 'Doe' }),
            email: z.email().exactOptional().openapi({ example: 'john.doe@abcsupply.com' }),
            phone: z.string().exactOptional().openapi({ example: '+1-555-123-4567' }),
            send_email: z.boolean().exactOptional().openapi({ example: true }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of vendor contacts' }),
  })
  .openapi({ required: ['name'] })
  .openapi('VendorRequest')

const CompanySchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed identifier for the company',
        example: 'WJxbojagwO',
        readOnly: true,
      }),
    size_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The unique identifier representing the company's size category",
        example: '2',
      }),
    industry_id: z
      .string()
      .exactOptional()
      .openapi({
        description: "The unique identifier representing the company's industry category",
        example: '5',
      }),
    slack_webhook_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "The URL for the company's Slack webhook notifications",
        example: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
      }),
    google_analytics_key: z
      .string()
      .exactOptional()
      .openapi({
        description: "The company's Google Analytics tracking ID",
        example: 'UA-123456789-1',
      }),
    portal_mode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The mode determining how client-facing URLs are structured (e.g., subdomain, domain, or iframe)',
        example: 'subdomain',
      }),
    subdomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The subdomain prefix for the company's domain (e.g., 'acme' in acme.domain.com)",
        example: 'acme',
      }),
    portal_domain: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The fully qualified domain used for client-facing URLs',
        example: 'https://subdomain.invoicing.co',
      }),
    enabled_tax_rates: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of tax rates used per entity', example: 2 }),
    fill_products: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to auto-fill product descriptions based on the product key',
        example: true,
      }),
    convert_products: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to convert products between different types or units',
        example: true,
      }),
    update_products: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to update product descriptions when the description changes',
        example: true,
      }),
    show_product_details: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to display product details in the user interface',
        example: true,
      }),
    show_product_cost: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to display product cost is shown in the user interface',
        example: true,
      }),
    custom_fields: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'A mapping of custom fields for various objects within the company\n\n**note** \nThe custom fields object is formatted as follows\n\n  key : value\n  entity(integer) : label|type\n\n  for example:\n  "company1": "Number|single_line_text",\n\n  This defines the first company custom field, with label Number which has a custom field type of a single text line\n\n  Supported entity types\n\n  invoice\n  product\n  client\n  contact\n  task\n  user\n  project\n  vendor \n  expense\n  payment     \n\n  Supported input types values\n\n  single_line_text\n  date\n  switch\n\n  For text areas, you only need to supply the label ie "TextArea", the | and type values are not required.\n  For the dropdown the data format is as follows:\n\n  label|your,drop,down,values,in,comma,separated,format\n',
      }),
    enable_product_cost: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to show or hide the product cost field in the user interface',
        example: true,
      }),
    enable_product_quantity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to show or hide the product quantity field in the user interface',
        example: true,
      }),
    default_quantity: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to use a default quantity for products',
        example: true,
      }),
    custom_surcharge_taxes1: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to apply taxes on custom surcharge amounts for the first custom surcharge field',
        example: true,
      }),
    custom_surcharge_taxes2: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to apply taxes on custom surcharge amounts for the second custom surcharge field',
        example: true,
      }),
    custom_surcharge_taxes3: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to apply taxes on custom surcharge amounts for the third custom surcharge field',
        example: true,
      }),
    custom_surcharge_taxes4: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to apply taxes on custom surcharge amounts for the fourth custom',
      }),
    logo: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description: 'The company logo file in binary format',
        example: 'logo.png',
      }),
    company_key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The static company key hash used to identify the Company',
        readOnly: true,
        example: 'Vnb14bRlwiFjc5ckte6cfbygTRkn5IMQ',
      }),
    client_can_register: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether clients can register for the client portal',
        example: true,
      }),
    enabled_modules: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Bitmask representation of the modules that are enabled in the application\n\n```\nself::ENTITY_RECURRING_INVOICE => 1,\nself::ENTITY_CREDIT => 2,\nself::ENTITY_QUOTE => 4,\nself::ENTITY_TASK => 8,\nself::ENTITY_EXPENSE => 16,\nself::ENTITY_PROJECT => 32,\nself::ENTITY_VENDOR => 64,\nself::ENTITY_TICKET => 128,\nself::ENTITY_PROPOSAL => 256,\nself::ENTITY_RECURRING_EXPENSE => 512,\nself::ENTITY_RECURRING_TASK => 1024,\nself::ENTITY_RECURRING_QUOTE => 2048,\n```\n\nThe default per_page value is 20.\n',
        example: 2048,
      }),
    db: z.string().exactOptional().openapi({ readOnly: true, example: 'db-ninja-01' }),
    first_day_of_week: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first day of the week for the company', example: '1' }),
    first_month_of_year: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first month for the company financial year', example: '1' }),
    enabled_item_tax_rates: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of tax rates used per item', example: 2 }),
    is_large: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether the company is considered large',
        example: true,
      }),
    default_auto_bill: z
      .string()
      .exactOptional()
      .openapi({
        example: 'always',
        description:
          'A flag determining whether to auto-bill clients by default\n\nvalues:\n\n- always - Always auto bill\n- disabled - Never auto bill\n- optin - Allow the client to select their auto bill status with the default being disabled\n- optout -Allow the client to select their auto bill status with the default being enabled\n',
      }),
    mark_expenses_invoiceable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to mark expenses as invoiceable by default',
        example: true,
      }),
    mark_expenses_paid: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to mark expenses as paid by default',
        example: true,
      }),
    invoice_expense_documents: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to include expense documents on invoices by default',
        example: true,
      }),
    auto_start_tasks: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to auto-start tasks by default',
        example: true,
      }),
    invoice_task_timelog: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to include task time logs on invoices by default',
        example: true,
      }),
    invoice_task_documents: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to include task documents on invoices by default',
        example: true,
      }),
    show_tasks_table: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to show the tasks table on invoices by default',
        example: true,
      }),
    is_disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether the company is disabled',
        example: true,
      }),
    default_task_is_date_based: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to default tasks to be date-based',
        example: true,
      }),
    enable_product_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to show or hide the product discount field in the user interface',
        example: true,
      }),
    calculate_expense_tax_by_amount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to calculate expense taxes by amount',
        example: true,
      }),
    expense_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to include taxes in the expense amount',
        example: true,
      }),
    session_timeout: z
      .int()
      .exactOptional()
      .openapi({ description: 'The session timeout for the company', example: 60 }),
    oauth_password_required: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to require a password for `dangerous` actions when using OAuth',
        example: true,
      }),
    invoice_task_datelog: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to include task date logs on invoices by default',
        example: true,
      }),
    default_password_timeout: z
      .int()
      .exactOptional()
      .openapi({ description: 'The default password timeout for the company', example: 60 }),
    show_task_end_date: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to show the task end date on invoices by default',
        example: true,
      }),
    markdown_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether markdown is enabled for the company',
        example: true,
      }),
    report_include_drafts: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to include draft invoices in reports',
        example: true,
      }),
    client_registration_fields: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The client registration fields for the company' }),
    stop_on_unpaid_recurring: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to stop recurring invoices when they are unpaid',
        example: true,
      }),
    use_quote_terms_on_conversion: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to use quote terms on conversion to an invoice',
        example: true,
      }),
    enable_applying_payments: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to enable applying payments to invoices',
        example: true,
      }),
    track_inventory: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to track inventory for the company',
        example: true,
      }),
    inventory_notification_threshold: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The inventory notification threshold for the company',
        example: 60,
      }),
    stock_notification: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to send stock notifications for the company',
        example: true,
      }),
    matomo_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Matomo URL for the company',
        example: 'https://matomo.example.com',
      }),
    matomo_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Matomo ID for the company', example: '1' }),
    enabled_expense_tax_rates: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of tax rates used per expense', example: 2 }),
    invoice_task_project: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to include the project on invoices by default',
        example: true,
      }),
    report_include_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to include deleted invoices in reports',
        example: true,
      }),
    invoice_task_lock: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to lock tasks when invoiced',
        example: true,
      }),
    convert_payment_currency: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to convert the payment currency',
        example: true,
      }),
    convert_expense_currency: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to convert the expense currency',
        example: true,
      }),
    notify_vendor_when_paid: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to notify the vendor when an expense is paid',
        example: true,
      }),
    invoice_task_hours: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to include the task hours on invoices by default',
        example: true,
      }),
    calculate_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A flag determining whether to calculate taxes for the company',
        example: true,
      }),
    tax_data: z.object({}).exactOptional().openapi({ description: 'The tax data for the company' }),
    e_invoice_certificate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The e-invoice certificate for the company',
        example: '-----BEGIN CERTIFICATE-----',
      }),
    e_invoice_certificate_passphrase: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The e-invoice certificate passphrase for the company',
        example: 'secret',
      }),
    origin_tax_data: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The origin tax data for the company' }),
    invoice_task_project_header: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to include the project header on invoices by default',
        example: true,
      }),
    invoice_task_item_description: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'A flag determining whether to include the item description on invoices by default',
        example: true,
      }),
    expense_mailbox: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The email address for the expense mailbox',
        example: 'expenses@company.com',
      }),
    expense_mailbox_active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the expense mailbox is active', example: true }),
    inbound_mailbox_allow_company_users: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether company users are allowed to use the inbound mailbox',
        example: true,
      }),
    inbound_mailbox_allow_vendors: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether vendors are allowed to use the inbound mailbox',
        example: false,
      }),
    inbound_mailbox_allow_clients: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether clients are allowed to use the inbound mailbox',
        example: true,
      }),
    inbound_mailbox_allow_unknown: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether unknown senders are allowed to use the inbound mailbox',
        example: false,
      }),
    inbound_mailbox_whitelist: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of whitelisted email addresses for the inbound mailbox',
        example: 'user1@example.com,user2@example.com',
      }),
    inbound_mailbox_blacklist: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Comma-separated list of blacklisted email addresses for the inbound mailbox',
        example: 'spam@example.com,unwanted@example.com',
      }),
    smtp_host: z
      .string()
      .exactOptional()
      .openapi({ description: 'The SMTP host for sending emails', example: 'smtp.gmail.com' }),
    smtp_port: z
      .int()
      .exactOptional()
      .openapi({ description: 'The SMTP port for sending emails', example: 587 }),
    smtp_encryption: z
      .enum(['tls', 'ssl'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The encryption method for SMTP', example: 'tls' }),
    smtp_local_domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The local domain for SMTP', example: 'company.com' }),
    smtp_verify_peer: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to verify the SMTP peer', example: true }),
    e_invoice: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'E-invoice settings for the company' }),
    legal_entity_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The ID of the legal entity associated with the company',
        example: 1234,
      }),
    convert_rate_to_client: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating whether to convert rates to the client currency',
        example: true,
      }),
    e_invoicing_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Authentication token for e-invoicing services',
        example: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
      }),
    enable_shop_api: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag indicating whether the shop API is enabled', example: true }),
    markdown_email_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating whether markdown formatting is enabled in emails',
        example: true,
      }),
    use_comma_as_decimal_place: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating whether to use comma as decimal separator instead of period',
        example: true,
      }),
    settings: CompanySettingsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Company')

const CompanyLedgerSchema = z
  .object({
    entity_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field will reference one of the following entity hashed ID payment_id, invoice_id or credit_id',
        example: 'AS3df3A',
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The notes which reference this entry of the ledger',
        example: 'Credit note for invoice #3212',
      }),
    balance: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The client balance', example: 10 }),
    adjustment: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount the client balance is adjusted by', example: 10 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
  })
  .openapi({ required: [] })
  .openapi('CompanyLedger')

const RecurringInvoiceSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the recurring invoice',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'Opnel5aKBz' }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: 'Opnel5aKBz' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client hashed id', example: 'Opnel5aKBz' }),
    status_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice status variable', example: '4' }),
    frequency_id: z
      .number()
      .exactOptional()
      .openapi({ description: 'The recurring invoice frequency', example: 4 }),
    remaining_cycles: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of invoices left to be generated', example: 4 }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The recurringinvoice number - is a unique alpha numeric number per invoice per company',
        example: 'INV_101',
      }),
    po_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The purchase order associated with this recurring invoice',
        example: 'PO-1234',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice terms', example: 'These are invoice terms' }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The public notes of the invoice',
        example: 'These are some public notes',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The private notes of the invoice',
        example: 'These are some private notes',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice footer notes', example: '' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: '2022-10-01' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Something custom' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: '' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: '' }),
    tax_name1: z.string().exactOptional().openapi({ description: 'The tax name', example: '' }),
    tax_name2: z.string().exactOptional().openapi({ description: 'The tax name', example: '' }),
    tax_rate1: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    tax_rate2: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    tax_name3: z.string().exactOptional().openapi({ description: 'The tax name', example: '' }),
    tax_rate3: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    total_taxes: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total taxes for the invoice', example: 10 }),
    line_items: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An array of objects which define the line items of the invoice',
        example: {},
      }),
    amount: z.float32().exactOptional().openapi({ description: 'The invoice amount', example: 10 }),
    balance: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The invoice balance', example: 10 }),
    paid_to_date: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount paid on the invoice to date', example: 10 }),
    discount: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The invoice discount, can be an amount or a percentage',
        example: 10,
      }),
    partial: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The deposit/partial amount', example: 10 }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag determining if the discount is an amount or a percentage',
        example: true,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the invoice has been deleted', example: true }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines the type of taxes used as either inclusive or exclusive',
        example: true,
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The Invoice Date', example: '1994-07-30' }),
    last_sent_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The last date the invoice was sent out', example: '1994-07-30' }),
    next_send_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The Next date for a reminder to be sent', example: '1994-07-30' }),
    partial_due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the deposit/partial amount',
        example: '1994-07-30',
      }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The due date of the invoice', example: '1994-07-30' }),
    settings: CompanySettingsSchema.exactOptional(),
    last_viewed: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    custom_surcharge1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'First Custom Surcharge', example: 10 }),
    custom_surcharge2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Second Custom Surcharge', example: 10 }),
    custom_surcharge3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Third Custom Surcharge', example: 10 }),
    custom_surcharge4: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Fourth Custom Surcharge', example: 10 }),
    custom_surcharge_tax1: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax2: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax3: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax4: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    location_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The client location id that this invoice relates to',
        example: 'Opnel5aKBz',
      }),
    auto_bill: z
      .string()
      .exactOptional()
      .openapi({ description: 'Auto-billing configuration setting', example: 'always' }),
    auto_bill_enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag indicating whether auto-billing is enabled', example: true }),
    design_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the design template used for this recurring invoice',
        example: 'Opnel5aKBz',
      }),
    due_date_days: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of days until the due date', example: 30 }),
    e_invoice: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'E-invoice configuration and data' }),
    exchange_rate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The exchange rate used for currency conversion', example: 1 }),
    next_send_date_client: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The next scheduled send date for the client',
        example: '2024-12-31',
      }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the project associated with this recurring invoice',
        example: 'Opnel5aKBz',
      }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the vendor associated with this recurring invoice',
        example: 'Opnel5aKBz',
      }),
  })
  .openapi({ required: [] })
  .openapi('RecurringInvoice')

const PurchaseOrderRequestSchema = z
  .object({
    vendor_id: z
      .string()
      .openapi({ description: 'The hashed ID of the vendor', example: 'D2J234DFA' }),
    date: z.iso.date().openapi({ description: 'Purchase order date', example: '2024-01-01' }),
    due_date: z.iso
      .date()
      .openapi({ description: 'Due date for the purchase order', example: '2024-01-31' }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Private notes for the purchase order',
        example: 'Internal notes about this purchase order',
      }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Public notes for the purchase order',
        example: 'Please deliver to our warehouse',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 1', example: 'Custom value 1' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 2', example: 'Custom value 2' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 3', example: 'Custom value 3' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 4', example: 'Custom value 4' }),
    line_items: z
      .array(
        z
          .object({
            quantity: z.number().exactOptional().openapi({ example: 10 }),
            cost: z.number().exactOptional().openapi({ example: 25 }),
            product_key: z.string().exactOptional().openapi({ example: 'PROD_001' }),
            notes: z.string().exactOptional().openapi({ example: 'Office supplies' }),
            discount: z.number().exactOptional().openapi({ example: 0 }),
            is_amount_discount: z.boolean().exactOptional().openapi({ example: true }),
            tax_name1: z.string().exactOptional().openapi({ example: 'Sales Tax' }),
            tax_rate1: z.number().exactOptional().openapi({ example: 8.5 }),
            tax_name2: z.string().exactOptional().openapi({ example: '' }),
            tax_rate2: z.number().exactOptional().openapi({ example: 0 }),
            tax_name3: z.string().exactOptional().openapi({ example: '' }),
            tax_rate3: z.number().exactOptional().openapi({ example: 0 }),
            sort_id: z.string().exactOptional().openapi({ example: '0' }),
            custom_value1: z.string().exactOptional().openapi({ example: 'Department: IT' }),
            custom_value2: z.string().exactOptional().openapi({ example: 'Priority: High' }),
            custom_value3: z.string().exactOptional().openapi({ example: 'Approved by Manager' }),
            custom_value4: z.string().exactOptional().openapi({ example: 'Budget Code: IT-2024' }),
            type_id: z.string().exactOptional().openapi({ example: '1' }),
            tax_id: z.string().exactOptional().openapi({ example: '1' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Array of line items for the purchase order' }),
  })
  .openapi({ required: ['vendor_id', 'date', 'due_date'] })
  .openapi('PurchaseOrderRequest')

const PaymentableSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The paymentable hashed id', example: 'AS3df3A', readOnly: true }),
    invoice_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice hashed id', example: 'AS3df3A' }),
    credit_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The credit hashed id', example: 'AS3df3A' }),
    refunded: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount that has been refunded for this payment', example: 10 }),
    amount: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount that has been applied to the payment', example: 10 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
  })
  .openapi({ required: [] })
  .openapi('Paymentable')

const PaymentSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payment hashed id', example: 'Opnel5aKBz', readOnly: true }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client hashed id', example: 'Opnel5aKBz' }),
    invitation_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invitation hashed id', example: 'Opnel5aKBz' }),
    client_contact_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client contact hashed id', example: 'Opnel5aKBz' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'Opnel5aKBz' }),
    type_id: PaymentTypeSchema.exactOptional(),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Payment date', example: '1-1-2014' }),
    transaction_reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The transaction reference as defined by the payment gateway',
        example: 'xcsSxcs124asd',
      }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: 'Opnel5aKBz' }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The private notes of the payment',
        example: 'The payment was refunded due to error',
      }),
    is_manual: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flags whether the payment was made manually or processed via a gateway',
        example: true,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the payment has been deleted', example: true }),
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount of this payment', example: 10 }),
    refunded: z
      .number()
      .exactOptional()
      .openapi({ description: 'The refunded amount of this payment', example: 10 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    company_gateway_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company gateway id', example: '3' }),
    paymentables: PaymentableSchema.exactOptional(),
    invoices: z.array(InvoicePaymentableSchema).exactOptional().openapi({ description: '' }),
    credits: z.array(CreditPaymentableSchema).exactOptional().openapi({ description: '' }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The payment number - is a unique alpha numeric number per payment per company',
        example: 'PAY_101',
      }),
    category_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the payment category',
        example: 'Opnel5aKBz',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom field for storing additional information',
        example: 'Payment reference 123',
      }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom field for storing additional information',
        example: 'Approved by John',
      }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom field for storing additional information',
        example: 'Urgent payment',
      }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom field for storing additional information',
        example: 'Q1 2024',
      }),
    exchange_currency_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the exchange currency', example: '2' }),
    exchange_rate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The exchange rate used for currency conversion', example: 1 }),
    idempotency_key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique key to ensure idempotent payment processing',
        example: 'key_1234567890abcdef',
      }),
  })
  .openapi({ required: [] })
  .openapi('Payment')

const CreditInvitationSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The entity invitation hashed id',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    client_contact_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client contact hashed id', example: 'Opnel5aKBz' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invitation key',
        example: 'Opnel5aKBz4343343566236gvbb',
        readOnly: true,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invitation link',
        example: 'https://www.example.com/invitations/Opnel5aKBz4343343566236gvbb',
        readOnly: true,
      }),
    sent_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation sent date', readOnly: true }),
    viewed_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation viewed date', readOnly: true }),
    opened_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation opened date', readOnly: true }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    email_error: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email error', example: 'The email error', readOnly: true }),
    email_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email status', readOnly: true }),
    can_sign: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the recipient contact may electronically sign this invitation. Mirrors the can_sign flag on the linked client contact at the time the invitation was issued.',
        example: false,
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('CreditInvitation')

const CreditSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed ID of the credit',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed ID of the user associated with the credit',
        example: '1a2b3c4d5e',
      }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed ID of the assigned user responsible for the credit',
        example: '6f7g8h9i0j',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed ID of the client associated with the credit',
        example: 'p1q2r3s4t5',
      }),
    status_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID representing the current status of the credit',
        example: '3',
      }),
    invoice_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique hashed ID of the linked invoice to which the credit is applied',
        example: 'u1v2w3x4y5',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique alphanumeric credit number per company',
        example: 'QUOTE_101',
      }),
    po_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The purchase order number referred to by the credit',
        example: 'PO_12345',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({ description: 'The terms associated with the credit', example: 'Net 30' }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Public notes for the credit',
        example: 'Thank you for your business.',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Private notes for internal use, not visible to the client',
        example: 'Client is requesting a discount.',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The footer text for the credit',
        example: 'Footer text goes here.',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom value 1 for additional credit information',
        example: 'Custom data 1',
      }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom value 2 for additional credit information',
        example: 'Custom data 2',
      }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom value 3 for additional credit information',
        example: 'Custom data 3',
      }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom value 4 for additional credit information',
        example: 'Custom data 4',
      }),
    tax_name1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the first tax applied to the credit', example: 'VAT' }),
    tax_name2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the second tax applied to the credit', example: 'GST' }),
    tax_rate1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The rate of the first tax applied to the credit', example: 10 }),
    tax_rate2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The rate of the second tax applied to the credit', example: 5 }),
    tax_name3: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the third tax applied to the credit', example: 'PST' }),
    tax_rate3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The rate of the third tax applied to the credit', example: 8 }),
    total_taxes: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total amount of taxes for the credit', example: 23 }),
    line_items: z
      .array(InvoiceItemSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the line items of the credit' }),
    invitations: z
      .array(CreditInvitationSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the invitations of the credit' }),
    amount: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total amount of the credit', example: 100 }),
    balance: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The outstanding balance of the credit', example: 50 }),
    paid_to_date: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total amount paid to date for the credit', example: 50 }),
    discount: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The discount applied to the credit', example: 10 }),
    partial: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The partial amount applied to the credit', example: 20 }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the discount applied is a fixed amount or a percentage',
        example: true,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the credit has been deleted', example: false }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the tax rates applied to the credit are inclusive or exclusive',
        example: true,
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date the credit was issued', example: '1994-07-30' }),
    last_sent_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The date the credit was last sent out', example: '1994-07-30' }),
    next_send_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The next scheduled date for sending a credit reminder',
        example: '1994-07-30',
      }),
    partial_due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the partial amount of the credit',
        example: '1994-07-30',
      }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the total amount of the credit',
        example: '1994-07-30',
      }),
    settings: CompanySettingsSchema.exactOptional(),
    last_viewed: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The timestamp of the last time the credit was viewed',
        example: 1434342123,
      }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The timestamp of the last time the credit was updated',
        example: 1434342123,
      }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The timestamp of the last time the credit was archived',
        example: 1434342123,
      }),
    custom_surcharge1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'First custom surcharge amount', example: 10 }),
    custom_surcharge2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Second Custom Surcharge', example: 10 }),
    custom_surcharge3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Third Custom Surcharge', example: 10 }),
    custom_surcharge4: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Fourth Custom Surcharge', example: 10 }),
    custom_surcharge_tax1: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax2: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax3: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax4: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    location_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The client location id that this invoice relates to',
        example: 'Opnel5aKBz',
      }),
    design_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the design template used for this credit',
        example: 'Opnel5aKBz',
      }),
    exchange_rate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The exchange rate used for currency conversion', example: 1 }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the project associated with this credit',
        example: 'Opnel5aKBz',
      }),
    subscription_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the subscription associated with this credit',
        example: 'Opnel5aKBz',
      }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the vendor associated with this credit',
        example: 'Opnel5aKBz',
      }),
  })
  .openapi({ required: [] })
  .openapi('Credit')

const SubscriptionSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the subscription',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the user associated with the subscription',
        example: 'Ua6Rw4pVbS',
      }),
    product_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the product associated with the subscription',
        example: 'Pr5Ft7yBmC',
      }),
    recurring_invoice_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the recurring invoice associated with the subscription',
        example: 'Ri2Yt8zJkP',
      }),
    is_recurring: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the subscription is recurring', example: true }),
    frequency_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'integer const representation of the frequency', example: '1' }),
    auto_bill: z
      .string()
      .exactOptional()
      .openapi({ description: 'enum setting', example: 'always' }),
    promo_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Promotional code applied to the subscription',
        example: 'PROMOCODE4U',
      }),
    promo_discount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'Discount percentage or amount applied to the subscription',
        example: 10,
      }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the discount is a fixed amount', example: true }),
    allow_cancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the subscription can be cancelled',
        example: true,
      }),
    per_seat_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the subscription pricing is per seat',
        example: true,
      }),
    currency_id: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Unique identifier for the currency used in the subscription',
        example: 1,
      }),
    max_seats_limit: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Maximum number of seats allowed for the subscription',
        example: 100,
      }),
    trial_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the subscription has a trial period',
        example: true,
      }),
    trial_duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'Duration of the trial period in days', example: 14 }),
    allow_query_overrides: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether query overrides are allowed for the subscription',
        example: true,
      }),
    allow_plan_changes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether plan changes are allowed for the subscription',
        example: true,
      }),
    refund_period: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Number of days within which refunds can be requested',
        example: 30,
      }),
    webhook_configuration: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Webhook configuration for the subscription',
        example: 'expand reference for this',
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the subscription has been deleted',
        example: false,
      }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
  })
  .openapi({ required: [] })
  .openapi('Subscription')

const BulkActionSchema = z.array(z.int().openapi({ example: 0 })).openapi('BulkAction')

const TagAssignmentSchema = z
  .object({
    id: z.string().openapi({ description: 'The hashed tag id', example: 'Opnel5aKBz' }),
    name: z.string().openapi({ description: 'The tag name', example: 'Urgent' }),
    color: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The tag color as a hex value, or null when unset',
        example: '#FF0000',
      }),
  })
  .openapi({ description: 'A tag assigned to a task or project.', required: ['id', 'name'] })
  .openapi('TagAssignment')

const ProjectSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The project hashed id', example: 'Opnel5aKBz', readOnly: true }),
    user_id: z.string().openapi({ description: 'The user hashed id', example: 'Opnel5aKBz' }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The assigned user identifier associated with the project',
        example: 'Opnel5aKBz',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Opnel5aKBz',
        description: 'The client identifier associated with the project',
      }),
    name: z.string().openapi({ description: 'The name of the project', example: 'New Project' }),
    task_rate: z
      .float32()
      .openapi({ example: 10, description: 'The default rate per task for the project' }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({ example: '2019-01-01', description: 'The due date for the project' }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Private notes associated with the project' }),
    budgeted_hours: z
      .float32()
      .openapi({ description: 'The number of budgeted hours for the project' }),
    custom_value1: z.string().exactOptional().openapi({ description: 'Custom value field 1' }),
    custom_value2: z.string().exactOptional().openapi({ description: 'Custom value field 2' }),
    custom_value3: z.string().exactOptional().openapi({ description: 'Custom value field 3' }),
    custom_value4: z.string().exactOptional().openapi({ description: 'Custom value field 4' }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ example: 134341234234, description: 'The timestamp of the project creation' }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ example: 134341234234, description: 'The timestamp of the last project update' }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ example: 134341234234, description: 'The timestamp of the project deletion' }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Public notes associated with the project' }),
    is_deleted: z.boolean().openapi({ description: 'A flag indicating if the project is deleted' }),
    number: z.string().exactOptional().openapi({ description: 'The project number' }),
    color: z.string().openapi({ description: 'The color associated with the project' }),
    tags: z
      .array(TagAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'Tags assigned to the project' }),
  })
  .openapi({
    required: ['id', 'user_id', 'name', 'task_rate', 'budgeted_hours', 'is_deleted', 'color'],
  })
  .openapi('Project')

const DesignSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The design hashed id', example: 'AS3df3A', readOnly: true }),
    name: z.string().exactOptional().openapi({ description: 'The design name', example: 'Beauty' }),
    design: z
      .string()
      .exactOptional()
      .openapi({ description: 'The design HTML', example: '<html></html>' }),
    is_custom: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag to determine if the design is a custom user design',
        example: true,
      }),
    is_active: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag to determine if the design is available for use',
        example: true,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to determine if the design is deleted', example: true }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
    deleted_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
  })
  .openapi({ required: [] })
  .openapi('Design')

const BTRulesSchema = z
  .object({
    data_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key to search', example: 'description,amount' }),
    operator: z
      .string()
      .exactOptional()
      .openapi({ description: 'The operator flag of the search', example: '>' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value to search for', example: 'bob' }),
  })
  .openapi({ required: [] })
  .openapi('BTRules')

const AccountSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account hashed id', example: 'AS3df3A', readOnly: true }),
    account_sms_verified: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Boolean flag if the account has been verified by sms',
        example: 'true',
      }),
  })
  .openapi({ required: [] })
  .openapi('Account')

const InvoiceSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice hashed id', example: 'Opnel5aKBz', readOnly: true }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'Opnel5aKBz', readOnly: true }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: 'Opnel5aKBz' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client hashed id', example: 'Opnel5aKBz' }),
    status_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice status variable', example: '4' }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The invoice number - is a unique alpha numeric number per invoice per company',
        example: 'INV_101',
      }),
    po_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The purchase order associated with this invoice',
        example: 'PO-1234',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice terms', example: 'These are invoice terms' }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The public notes of the invoice',
        example: 'These are some public notes',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The private notes of the invoice',
        example: 'These are some private notes',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice footer notes', example: '' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: '2022-10-01' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Something custom' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: '' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: '' }),
    tax_name1: z.string().exactOptional().openapi({ description: 'The tax name', example: '' }),
    tax_name2: z.string().exactOptional().openapi({ description: 'The tax name', example: '' }),
    tax_rate1: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    tax_rate2: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    tax_name3: z.string().exactOptional().openapi({ description: 'The tax name', example: '' }),
    tax_rate3: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    total_taxes: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total taxes for the invoice', example: 10 }),
    line_items: z
      .array(InvoiceItemSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the line items of the invoice' }),
    invitations: z
      .array(InvoiceInvitationSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the invitations of the invoice' }),
    amount: z.float32().exactOptional().openapi({ description: 'The invoice amount', example: 10 }),
    balance: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The invoice balance', example: 10 }),
    paid_to_date: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount paid on the invoice to date', example: 10 }),
    discount: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The invoice discount, can be an amount or a percentage',
        example: 10,
      }),
    partial: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The deposit/partial amount', example: 10 }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag determining if the discount is an amount or a percentage',
        example: true,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the invoice has been deleted', example: true }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines the type of taxes used as either inclusive or exclusive',
        example: true,
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The Invoice Date', example: '1994-07-30' }),
    last_sent_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The last date the invoice was sent out', example: '1994-07-30' }),
    next_send_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The Next date for a reminder to be sent', example: '1994-07-30' }),
    partial_due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the deposit/partial amount',
        example: '1994-07-30',
      }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The due date of the invoice', example: '1994-07-30' }),
    last_viewed: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    custom_surcharge1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'First Custom Surcharge', example: 10 }),
    custom_surcharge2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Second Custom Surcharge', example: 10 }),
    custom_surcharge3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Third Custom Surcharge', example: 10 }),
    custom_surcharge4: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Fourth Custom Surcharge', example: 10 }),
    custom_surcharge_tax1: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax2: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax3: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax4: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project associated with this invoice', example: 'Opnel5aKBz' }),
    auto_bill_tries: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of times the invoice has attempted to be auto billed',
        example: 1,
        readOnly: true,
      }),
    auto_bill_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the invoice is set to auto bill',
        example: true,
      }),
    subscription_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The subscription associated with this invoice',
        example: 'Opnel5aKBz',
      }),
    location_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The client location id that this invoice relates to',
        example: 'Opnel5aKBz',
      }),
    design_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the design template used for this invoice',
        example: 'Opnel5aKBz',
      }),
    e_invoice: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'E-invoice configuration and data' }),
    exchange_rate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The exchange rate used for currency conversion', example: 1 }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the vendor associated with this invoice',
        example: 'Opnel5aKBz',
      }),
  })
  .openapi({ required: [] })
  .openapi('Invoice')

const ClientContactRequestSchema = z
  .object({
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the contact', example: 'Sarah' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the contact', example: 'Johnson' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number of the contact', example: '+1-555-123-4567' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom field value', example: 'Preferred Customer' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom field value', example: 'West Region' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom field value', example: 'Referral: Jane Smith' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A Custom field value', example: 'Account #12345' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email of the contact', example: 'sarah.johnson@example.com' }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed password of the contact',
        example: '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
      }),
    send_email: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag that determines if this contact should receive emails',
        example: true,
      }),
    cc_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When true this contact is only included as a CC recipient on outgoing emails and is not addressed directly.',
        example: false,
      }),
    can_sign: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'When true this contact is permitted to electronically sign invitations.',
        example: false,
      }),
  })
  .openapi({ required: [] })
  .openapi('ClientContactRequest')

const ClientRequestSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the client',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    contacts: z
      .array(ClientContactRequestSchema)
      .openapi({ description: 'A list of contacts associated with the client' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the client company or organization',
        example: 'Bob & Co Housekeeping',
      }),
    website: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The website URL of the client company or organization',
        example: 'https://www.boandco-housekeeping.com',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Notes that are only visible to the user who created the client',
        example: 'Client prefers email communication over phone calls',
      }),
    industry_id: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the industry the client operates in',
        example: 5,
      }),
    size_id: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the size category of the client company or organization',
        example: 2,
      }),
    address1: z
      .string()
      .exactOptional()
      .openapi({ description: "First line of the client's address", example: '123 Main St' }),
    address2: z
      .string()
      .exactOptional()
      .openapi({
        description: "Second line of the client's address, if needed",
        example: 'Apt 4B',
      }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city the client is located in', example: 'Beverly Hills' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The state, province, or locality the client is located in',
        example: 'California',
      }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code or ZIP code of the client', example: '90210' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: "The client's phone number", example: '555-3434-3434' }),
    country_id: CountryTypeSchema.openapi({
      description:
        "The unique identifier of the client's country expressed by the countries ISO number.\n\nOptionally, instead of the country_id you can pass either the iso_3166_2 or iso_3166_3 country code into the country_code property.\n",
      example: 1,
    }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom field for storing additional information',
        example: 'Preferred contact: Email',
      }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom field for storing additional information',
        example: 'Account manager: John Doe',
      }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom field for storing additional information',
        example: 'VIP client: Yes',
      }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A custom field for storing additional information',
        example: 'Annual contract value: $50,000',
      }),
    vat_number: z
      .string()
      .exactOptional()
      .openapi({
        description: "The client's VAT (Value Added Tax) number, if applicable",
        example: 'VAT123456',
      }),
    id_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identification number for the client, such as a tax ID or business registration number',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A system-assigned unique number for the client, typically used for invoicing purposes',
        example: 'CL-0001',
      }),
    shipping_address1: z
      .string()
      .exactOptional()
      .openapi({
        description: "First line of the client's shipping address",
        example: '5 Wallaby Way',
      }),
    shipping_address2: z
      .string()
      .exactOptional()
      .openapi({
        description: "Second line of the client's shipping address, if needed",
        example: 'Suite 5',
      }),
    shipping_city: z
      .string()
      .exactOptional()
      .openapi({ description: "The city of the client's shipping address", example: 'Perth' }),
    shipping_state: z
      .string()
      .exactOptional()
      .openapi({
        description: "The state, province, or locality of the client's shipping address",
        example: 'Western Australia',
      }),
    shipping_postal_code: z
      .string()
      .exactOptional()
      .openapi({
        description: "The postal code or ZIP code of the client's shipping address",
        example: '6110',
      }),
    shipping_country_id: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "The unique identifier of the client's shipping country expressed by the countries ISO number.\n\nOptionally, instead of the shipping_country_id you can pass either the iso_3166_2 or iso_3166_3 country code into the shipping_country_code property.\n",
        example: 4,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'A boolean value indicating whether the client has been deleted or not',
        example: false,
        readOnly: true,
      }),
    group_settings_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The group settings assigned to the client', example: 'Opnel5aKBz' }),
    routing_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The routing address id for e-invoicing for this client',
        example: 'Opnel5aKBz3489-dfkiu-2239-sdsd',
      }),
    is_tax_exempt: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag which defines if the client is exempt from taxes',
        example: false,
      }),
    has_valid_vat_number: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag which defines if the client has a valid VAT number',
        example: false,
      }),
    classification: z
      .string()
      .exactOptional()
      .openapi({ description: 'The classification of the client', example: 'individual' }),
    settings: ClientSettingsSchema.exactOptional(),
  })
  .openapi({ required: ['contacts', 'country_id'] })
  .openapi('ClientRequest')

const PaymentTermSchema = z
  .object({
    num_days: z
      .int()
      .exactOptional()
      .openapi({ description: 'The payment term length in days', example: 1 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payment term length in string format', example: 'NET 1' }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234 }),
  })
  .openapi({ required: [] })
  .openapi('PaymentTerm')

const GenericBulkActionSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        example: 'archive',
        description: 'The action to perform ie. archive / restore / delete',
      }),
    ids: z
      .array(
        z
          .string()
          .openapi({
            example: '2J234DFA,D2J234DFA,D2J234DFA',
            description: 'string array of client hashed ids',
          }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GenericBulkAction')

const BankTransactionRuleSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The bank transaction rules hashed id',
        example: 'AS3df3A',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'AS3df3A' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the transaction', example: 'Rule 1' }),
    rules: z
      .array(BTRulesSchema)
      .exactOptional()
      .openapi({ description: 'A mapped collection of the sub rules for the BankTransactionRule' }),
    auto_convert: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flags whether the rule converts the transaction automatically',
        example: true,
      }),
    matches_on_all: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flags whether all subrules are required for the match',
        example: true,
      }),
    applies_to: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Flags whether the rule applies to a CREDIT or DEBIT',
        example: 'CREDIT',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client hashed id', example: 'AS3df3A' }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The vendor hashed id', example: 'AS3df3A' }),
    category_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category hashed id', example: 'AS3df3A' }),
  })
  .openapi({ required: [] })
  .openapi('BankTransactionRule')

const CreditInvitationRequestSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The entity invitation hashed id',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    client_contact_id: z
      .string()
      .openapi({ description: 'The client contact hashed id', example: 'Opnel5aKBz' }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invitation key',
        example: 'Opnel5aKBz4343343566236gvbb',
        readOnly: true,
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invitation link',
        example: 'https://www.example.com/invitations/Opnel5aKBz4343343566236gvbb',
        readOnly: true,
      }),
    sent_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation sent date', readOnly: true }),
    viewed_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation viewed date', readOnly: true }),
    opened_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The invitation opened date', readOnly: true }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    email_error: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email error', example: 'The email error', readOnly: true }),
    email_status: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email status', readOnly: true }),
  })
  .openapi({ required: ['client_contact_id'] })
  .openapi('CreditInvitationRequest')

const TagSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The hashed tag id', example: 'Opnel5aKBz', readOnly: true }),
    entity_type: z
      .enum(['App\\Models\\Task', 'App\\Models\\Project'])
      .openapi({
        description: 'The fully qualified class name this tag may be assigned to',
        example: 'App\\Models\\Task',
      }),
    name: z
      .string()
      .regex(/^[^,]+$/)
      .max(191)
      .openapi({
        description:
          'The tag name. Commas are not allowed. Unique per company and entity type, including archived tags.',
        example: 'Urgent',
      }),
    color: z
      .string()
      .regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
      .nullable()
      .openapi({
        description: 'The tag color as a 3 or 6 digit hex value, or null when unset',
        example: '#FF0000',
      }),
    is_deleted: z
      .boolean()
      .openapi({
        description: 'A boolean flag determining if the tag has been deleted',
        example: false,
        readOnly: true,
      }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1710410400, readOnly: true }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1710410400, readOnly: true }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 0, readOnly: true }),
  })
  .openapi({ required: ['id', 'entity_type', 'name', 'color', 'is_deleted'] })
  .openapi('Tag')

const TagRequestSchema = z
  .object({
    entity_type: z
      .enum(['App\\Models\\Task', 'App\\Models\\Project'])
      .openapi({
        description: 'Required on create. Immutable after creation.',
        example: 'App\\Models\\Task',
      }),
    name: z
      .string()
      .regex(/^[^,]+$/)
      .max(191)
      .openapi({
        description:
          'The tag name. Commas are not allowed. Unique per company and entity type, including archived tags.',
        example: 'Urgent',
      }),
    color: z
      .string()
      .regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The tag color as a 3 or 6 digit hex value, or null to clear it.',
        example: '#FF0000',
      }),
  })
  .openapi({ required: ['entity_type', 'name'] })
  .openapi('TagRequest')

const TagBulkActionSchema = z
  .object({
    ids: z
      .array(z.string().openapi({ example: 'Opnel5aKBz' }))
      .openapi({ description: 'Array of hashed tag IDs to action' }),
    action: z
      .enum(['archive', 'restore', 'delete'])
      .exactOptional()
      .openapi({
        description: 'Bulk action to perform. May be supplied in the query string or request body.',
        example: 'archive',
      }),
  })
  .openapi({ required: ['ids'] })
  .openapi('TagBulkAction')

const RecurringInvoiceRequestSchema = z
  .object({
    client_id: z
      .string()
      .openapi({ description: 'The hashed ID of the client', example: 'D2J234DFA' }),
    date: z.iso.date().openapi({ description: 'Recurring invoice date', example: '2024-01-01' }),
    due_date: z.iso
      .date()
      .openapi({ description: 'Due date for the recurring invoice', example: '2024-01-31' }),
    frequency_id: z
      .string()
      .openapi({ description: 'Frequency ID for recurring invoice', example: '1' }),
    remaining_cycles: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of remaining cycles', example: '5' }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Private notes for the recurring invoice',
        example: 'Internal notes about this recurring invoice',
      }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Public notes for the recurring invoice',
        example: 'Thank you for your business!',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 1', example: 'Custom value 1' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 2', example: 'Custom value 2' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 3', example: 'Custom value 3' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 4', example: 'Custom value 4' }),
    line_items: z
      .array(InvoiceItemSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the line items of the invoice' }),
  })
  .openapi({ required: ['client_id', 'date', 'due_date', 'frequency_id'] })
  .openapi('RecurringInvoiceRequest')

const ProductSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed product ID.', example: 'eP01N', readOnly: true }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed ID of the user that created this product.',
        example: 'n30m4',
        readOnly: true,
      }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed ID of the user assigned to this product.',
        example: 'pR0j3',
      }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed ID of the project that this product is associated with.',
        example: 'pR0j3',
      }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed ID of the vendor that this product is associated with.',
        example: 'pR0j3',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field 1.', example: 'Custom value 1' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field 2.', example: 'Custom value 2' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field 3.', example: 'Custom value 3' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field 4.', example: 'Custom value 4' }),
    product_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The product key.', example: '1234' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Notes about the product.',
        example: 'These are some notes about the product.',
      }),
    cost: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The cost of the product. (Your purchase price for this product)',
        example: 10,
      }),
    price: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The price of the product that you are charging.', example: 20 }),
    quantity: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The quantity of the product. (used as a default)', example: 5 }),
    tax_name1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of tax 1.', example: 'Tax 1' }),
    tax_rate1: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The rate of tax 1.', example: 10 }),
    tax_name2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of tax 2.', example: 'Tax 2' }),
    tax_rate2: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The rate of tax 2.', example: 5 }),
    tax_name3: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of tax 3.', example: 'Tax 3' }),
    tax_rate3: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The rate of tax 3.', example: 0 }),
    archived_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The timestamp when the product was archived.',
        example: 1647604800,
        readOnly: true,
      }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The timestamp when the product was created.',
        example: 1647604800,
        readOnly: true,
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1647691496, readOnly: true }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the product has been deleted',
        example: false,
        readOnly: true,
      }),
    in_stock_quantity: z
      .int32()
      .default(0)
      .exactOptional()
      .openapi({ description: 'The quantity of the product that is currently in stock' }),
    stock_notification: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Indicates whether stock notifications are enabled for this product',
      }),
    stock_notification_threshold: z
      .int32()
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The minimum quantity threshold for which stock notifications will be triggered',
      }),
    max_quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum quantity that can be ordered for this product' }),
    product_image: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the product image' }),
    tax_id: z
      .string()
      .default('1')
      .exactOptional()
      .openapi({
        description:
          "The tax category id for this product.'\n\nThe following constants are available (default = '1')\n\n```\nPRODUCT_TYPE_PHYSICAL = '1'\nPRODUCT_TYPE_SERVICE = '2'\nPRODUCT_TYPE_DIGITAL = '3'\nPRODUCT_TYPE_SHIPPING = '4'\nPRODUCT_TYPE_EXEMPT = '5'\nPRODUCT_TYPE_REDUCED_TAX = '6'\nPRODUCT_TYPE_OVERRIDE_TAX = '7'\nPRODUCT_TYPE_ZERO_RATED = '8'\nPRODUCT_TYPE_REVERSE_TAX = '9'\n```\n",
        example: '1',
      }),
    income_account_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The accounting income account identifier this product maps to (used by external accounting integrations such as QuickBooks).',
        example: '42',
      }),
  })
  .openapi({ required: [] })
  .openapi('Product')

const PaymentRequestSchema = z
  .object({
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client hashed id', example: 'Opnel5aKBz' }),
    client_contact_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client contact hashed id', example: 'Opnel5aKBz' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'Opnel5aKBz' }),
    type_id: PaymentTypeSchema.exactOptional(),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The Payment date', example: '2024-01-01' }),
    transaction_reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The transaction reference as defined by the payment gateway',
        example: 'xcsSxcs124asd',
      }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: 'Opnel5aKBz' }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The private notes of the payment',
        example: 'The payment was refunded due to error',
      }),
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The amount of this payment', example: 10 }),
    invoices: z.array(InvoicePaymentableSchema).exactOptional().openapi({ description: '' }),
    credits: z.array(CreditPaymentableSchema).exactOptional().openapi({ description: '' }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The payment number - is a unique alpha numeric number per payment per company',
        example: 'PAY_101',
      }),
  })
  .openapi({ required: [] })
  .openapi('PaymentRequest')

const RecurringQuoteSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the recurring quote',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'Opnel5aKBz' }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: 'Opnel5aKBz' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client hashed id', example: 'Opnel5aKBz' }),
    status_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The quote status variable', example: '4' }),
    frequency_id: z
      .number()
      .exactOptional()
      .openapi({ description: 'The recurring quote frequency', example: 4 }),
    remaining_cycles: z
      .number()
      .exactOptional()
      .openapi({ description: 'The number of quotes left to be generated', example: 4 }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The recurringquote number - is a unique alpha numeric number per quote per company',
        example: 'INV_101',
      }),
    po_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The purchase order associated with this recurring quote',
        example: 'PO-1234',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({ description: 'The quote terms', example: 'These are quote terms' }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The public notes of the quote',
        example: 'These are some public notes',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The private notes of the quote',
        example: 'These are some private notes',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The quote footer notes', example: '' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: '2022-10-01' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Something custom' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: '' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: '' }),
    tax_name1: z.string().exactOptional().openapi({ description: 'The tax name', example: '' }),
    tax_name2: z.string().exactOptional().openapi({ description: 'The tax name', example: '' }),
    tax_rate1: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    tax_rate2: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    tax_name3: z.string().exactOptional().openapi({ description: 'The tax name', example: '' }),
    tax_rate3: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    total_taxes: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total taxes for the quote', example: 10 }),
    line_items: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'An array of objects which define the line items of the quote',
        example: {},
      }),
    amount: z.float32().exactOptional().openapi({ description: 'The quote amount', example: 10 }),
    balance: z.float32().exactOptional().openapi({ description: 'The quote balance', example: 10 }),
    paid_to_date: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount paid on the quote to date', example: 10 }),
    discount: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The quote discount, can be an amount or a percentage',
        example: 10,
      }),
    partial: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The deposit/partial amount', example: 10 }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag determining if the discount is an amount or a percentage',
        example: true,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if the quote has been deleted', example: true }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines the type of taxes used as either inclusive or exclusive',
        example: true,
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The quote Date', example: '1994-07-30' }),
    last_sent_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The last date the quote was sent out', example: '1994-07-30' }),
    next_send_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The Next date for a reminder to be sent', example: '1994-07-30' }),
    partial_due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the deposit/partial amount',
        example: '1994-07-30',
      }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The due date of the quote', example: '1994-07-30' }),
    settings: CompanySettingsSchema.exactOptional(),
    last_viewed: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    custom_surcharge1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'First Custom Surcharge', example: 10 }),
    custom_surcharge2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Second Custom Surcharge', example: 10 }),
    custom_surcharge3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Third Custom Surcharge', example: 10 }),
    custom_surcharge4: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Fourth Custom Surcharge', example: 10 }),
    custom_surcharge_tax1: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax2: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax3: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax4: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('RecurringQuote')

const SystemLogSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account hashed id', example: 'AS3df3A', readOnly: true }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user_id hashed id', example: 'AS3df3A' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client_id hashed id', example: 'AS3df3A' }),
    event_id: z.int().exactOptional().openapi({ description: 'The Log Type ID', example: 1 }),
    category_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The Category Type ID', example: 1 }),
    type_id: z.int().exactOptional().openapi({ description: 'The Type Type ID', example: 1 }),
    log: z
      .object({})
      .exactOptional()
      .openapi({ description: 'The json object of the error', example: {} }),
    updated_at: z.string().exactOptional().openapi({ description: 'Timestamp', example: '2' }),
    created_at: z.string().exactOptional().openapi({ description: 'Timestamp', example: '2' }),
  })
  .openapi({ required: [] })
  .openapi('SystemLog')

const BankTransactionSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The bank integration hashed id',
        example: 'AS3df3A',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'AS3df3A' }),
    transaction_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The id of the transaction rule', example: 343434 }),
    amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The transaction amount', example: 10 }),
    currency_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency ID of the currency', example: '1' }),
    account_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account type', example: 'creditCard' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the transaction',
        example: 'Potato purchases for kevin',
      }),
    category_id: z.int().exactOptional().openapi({ description: 'The category id', example: 1 }),
    category_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category description', example: 'Expenses' }),
    base_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Either CREDIT or DEBIT', example: 'CREDIT' }),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of the transaction', example: '2022-09-01' }),
    bank_account_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The ID number of the bank account', example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('BankTransaction')

const ProjectRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'Project name', example: 'Website Redesign Project' }),
    client_id: z
      .string()
      .openapi({ description: 'The hashed ID of the client', example: 'D2J234DFA' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Project description',
        example: 'Complete redesign of company website',
      }),
    budgeted_hours: z
      .number()
      .exactOptional()
      .openapi({ description: 'Budgeted hours for the project', example: 120.5 }),
    task_rate: z
      .number()
      .exactOptional()
      .openapi({ description: 'Hourly rate for tasks in this project', example: 75 }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'Due date for the project', example: '2024-03-31' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 1', example: 'Custom value 1' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 2', example: 'Custom value 2' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 3', example: 'Custom value 3' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom field value 4', example: 'Custom value 4' }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the project is deleted', example: false }),
    archived_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamp when project was archived', example: 1640995200 }),
    color: z
      .string()
      .exactOptional()
      .openapi({ description: 'Project color for UI display', example: '#FF5733' }),
    tags: z
      .array(z.string().openapi({ example: 'Opnel5aKBz' }))
      .exactOptional()
      .openapi({
        description:
          'Full sync array of hashed tag IDs. Omit to leave existing tags unchanged; send [] to detach all tags.',
      }),
  })
  .openapi({ required: ['name', 'client_id'] })
  .openapi('ProjectRequest')

const ProductBulkActionSchema = z
  .object({
    action: z
      .string()
      .openapi({
        example: 'archive',
        description: 'The action to perform ie. archive / restore / delete / set_tax_id',
      }),
    ids: z.array(
      z
        .string()
        .openapi({
          example: '2J234DFA,D2J234DFA,D2J234DFA',
          description: 'string array of client hashed ids',
        }),
    ),
    tax_id: z
      .string()
      .exactOptional()
      .openapi({
        example: '1',
        description:
          "The tax rate id to set on the list of products\n\nThe following constants are available (default = '1')\n\n```\nPRODUCT_TYPE_PHYSICAL = '1'\nPRODUCT_TYPE_SERVICE = '2'\nPRODUCT_TYPE_DIGITAL = '3'\nPRODUCT_TYPE_SHIPPING = '4'\nPRODUCT_TYPE_EXEMPT = '5'\nPRODUCT_TYPE_REDUCED_TAX = '6'\nPRODUCT_TYPE_OVERRIDE_TAX = '7'\nPRODUCT_TYPE_ZERO_RATED = '8'\nPRODUCT_TYPE_REVERSE_TAX = '9'\n```\n",
      }),
  })
  .openapi({ required: ['action', 'ids'] })
  .openapi('ProductBulkAction')

const FillableInvoiceSchema = z
  .object({
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: "The assigned user's hashed ID", example: 'a1b2c3d4' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: "The client's hashed ID", example: 'x1y2z3a4' }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique alphanumeric invoice number for each invoice per company',
        example: 'INV_101',
      }),
    po_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The purchase order number associated with the invoice',
        example: 'PO12345',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({ description: 'The terms and conditions for the invoice', example: 'Net 30' }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Public notes visible to the client on the invoice',
        example: 'Thank you for your business.',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Private notes for internal use only',
        example: 'Client is a slow payer.',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The footer text displayed on the invoice',
        example: 'Authorized Signature',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'First custom value for additional information',
        example: 'Project ABC',
      }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Second custom value for additional information',
        example: 'Department XYZ',
      }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Third custom value for additional information',
        example: 'Location 123',
      }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Fourth custom value for additional information',
        example: 'Currency USD',
      }),
    tax_name1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the first tax applied to the invoice', example: 'VAT' }),
    tax_name2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the second tax applied to the invoice', example: 'GST' }),
    tax_rate1: z
      .number()
      .exactOptional()
      .openapi({ description: 'Rate of the first tax applied to the invoice', example: 10 }),
    tax_rate2: z
      .number()
      .exactOptional()
      .openapi({ description: 'Rate of the second tax applied to the invoice', example: 5 }),
    tax_name3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the third tax applied to the invoice', example: 'PST' }),
    tax_rate3: z
      .number()
      .exactOptional()
      .openapi({ description: 'Rate of the third tax applied to the invoice', example: 8 }),
    line_items: z
      .array(InvoiceItemSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the line items of the invoice' }),
    discount: z
      .number()
      .exactOptional()
      .openapi({ description: 'The discount applied to the invoice', example: 10 }),
    partial: z
      .number()
      .exactOptional()
      .openapi({ description: 'The partial amount applied to the invoice', example: 20 }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the discount applied is a fixed amount or a percentage',
        example: true,
      }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the tax rates applied to the invoice are inclusive or exclusive',
        example: true,
      }),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the invoice was issued', example: '1994-07-30' }),
    partial_due_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The due date for the partial payment', example: '1994-08-15' }),
    due_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The due date for the invoice', example: '1994-08-30' }),
    custom_surcharge1: z
      .number()
      .exactOptional()
      .openapi({ description: 'First custom surcharge applied to the invoice', example: 10 }),
    custom_surcharge2: z
      .number()
      .exactOptional()
      .openapi({ description: 'Second custom surcharge applied to the invoice', example: 15 }),
    custom_surcharge3: z
      .number()
      .exactOptional()
      .openapi({ description: 'Third custom surcharge applied to the invoice', example: 5 }),
    custom_surcharge4: z
      .number()
      .exactOptional()
      .openapi({ description: 'Fourth custom surcharge applied to the invoice', example: 20 }),
  })
  .openapi({ required: [] })
  .openapi('FillableInvoice')

const FeesAndLimitsSchema = z
  .object({
    min_limit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The minimum amount accepted for this gateway', example: '2' }),
    max_limit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The maximum amount accepted for this gateway', example: '2' }),
    fee_amount: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The gateway fee amount', example: 2 }),
    fee_percent: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The gateway fee percentage', example: 2 }),
    fee_tax_name1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fee tax name', example: 'GST' }),
    fee_tax_name2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fee tax name', example: 'VAT' }),
    fee_tax_name3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fee tax name', example: 'CA Sales Tax' }),
    fee_tax_rate1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The tax rate', example: 10 }),
    fee_tax_rate2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The tax rate', example: 17.5 }),
    fee_tax_rate3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The tax rate', example: 25 }),
    fee_cap: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'If set the fee amount will be no higher than this amount',
        example: 2,
      }),
    adjust_fee_percent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Adjusts the fee to match the exact gateway fee.', example: true }),
  })
  .openapi({ required: [] })
  .openapi('FeesAndLimits')

const CompanyGatewaySchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the company gateway',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    gateway_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The gateway key (hash)', example: '2' }),
    accepted_credit_cards: z
      .int()
      .exactOptional()
      .openapi({ description: 'Bitmask representation of cards', example: 32 }),
    require_billing_address: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the the billing address is required prior to payment.',
        example: true,
      }),
    require_shipping_address: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the the billing address is required prior to payment.',
        example: true,
      }),
    config: z
      .string()
      .exactOptional()
      .openapi({ description: 'The configuration map for the gateway', example: 'dfadsfdsafsafd' }),
    update_details: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines if the client details should be updated.',
        example: true,
      }),
    fees_and_limits: z
      .array(FeesAndLimitsSchema)
      .exactOptional()
      .openapi({
        description: 'A mapped collection of the fees and limits for the configured gateway',
      }),
  })
  .openapi({ required: [] })
  .openapi('CompanyGateway')

const UserRefSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed id of the user', example: 'Opnel5aKBz', readOnly: true }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the user', example: 'Brad' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the user', example: 'Pitt' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The users email address', example: 'brad@pitt.com' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The users phone number', example: '555-1233-23232' }),
    signature: z
      .string()
      .exactOptional()
      .openapi({ description: 'The users sign off signature', example: 'Have a nice day!' }),
    avatar: z
      .string()
      .exactOptional()
      .openapi({ description: 'The users avatar', example: 'https://url.to.your/avatar.png' }),
    accepted_terms_version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The version of the invoice ninja terms that has been accepted by the user',
        example: '1.0.1',
        readOnly: true,
      }),
    oauth_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The provider id of the oauth entity',
        example: 'jkhasdf789as6f675sdf768sdfs',
        readOnly: true,
      }),
    oauth_provider_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The oauth entity id', example: 'google', readOnly: true }),
    language_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language id of the user', example: '1' }),
    verified_phone_number: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag if the user has their phone verified. Required to settings up 2FA',
        example: true,
        readOnly: true,
      }),
    sms_verification_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The sms verification code for the user. Required to settings up 2FA',
        example: '123456',
        readOnly: true,
      }),
    oauth_user_token_expiry: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The expiry date of the oauth token',
        example: '2022-10-10',
        readOnly: true,
      }),
    has_password: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the user has a password',
        example: true,
        readOnly: true,
      }),
    last_confirmed_email_address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last confirmed email address of the user',
        example: 'bob@gmail.com',
        readOnly: true,
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: 'Custom value 1' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '$1000' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: 'Custom value 3' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: 'Custom value 4' }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the user has been deleted',
        example: true,
        readOnly: true,
      }),
    google_2fa_secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The google 2fa secret for the user',
        example: '123456',
        readOnly: true,
      }),
    passkey_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag if passkey auth is enabled for this user',
        example: true,
        readOnly: true,
      }),
    passkey_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of registered passkeys for this user',
        example: 2,
        readOnly: true,
      }),
    oauth_user_refresh_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'OAuth refresh token for the user',
        example: 'refresh_token_abc123',
      }),
    oauth_user_token: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'OAuth access token data for the user' }),
    shopify_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the Shopify user', example: '123456789' }),
    user_logged_in_notification: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating whether to send login notifications',
        example: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('UserRef')

const CompanyUserRefSchema = z
  .object({
    permissions: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The user permissions for this company in a comma separated list',
        example: 'create_invoice,create_client,view_client',
      }),
    settings: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Settings that are used for the flutter applications to store user preferences / metadata',
        readOnly: true,
      }),
    react_settings: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Dedicated settings object for the react web application',
        readOnly: true,
      }),
    is_owner: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the user owns this company',
        example: true,
        readOnly: true,
      }),
    is_admin: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the user is the admin of this company',
        example: true,
        readOnly: true,
      }),
    is_locked: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the users access to this company has been locked',
        example: true,
        readOnly: true,
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The last time the record was modified, format Unix Timestamp',
        example: 1231232312321,
      }),
    deleted_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the user was archived, format Unix Timestamp',
        example: 12312312321,
      }),
    account: AccountSchema.exactOptional(),
    company: CompanySchema.exactOptional(),
    user: UserRefSchema.exactOptional(),
    token: CompanyTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyUserRef')

const UserSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed id of the user', example: 'Opnel5aKBz', readOnly: true }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the user', example: 'Brad' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the user', example: 'Pitt' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The users email address', example: 'brad@pitt.com' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The users phone number', example: '555-1233-23232' }),
    signature: z
      .string()
      .exactOptional()
      .openapi({ description: 'The users sign off signature', example: 'Have a nice day!' }),
    avatar: z
      .string()
      .exactOptional()
      .openapi({ description: 'The users avatar', example: 'https://url.to.your/avatar.png' }),
    accepted_terms_version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The version of the invoice ninja terms that has been accepted by the user',
        example: '1.0.1',
        readOnly: true,
      }),
    oauth_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The provider id of the oauth entity',
        example: 'jkhasdf789as6f675sdf768sdfs',
        readOnly: true,
      }),
    oauth_provider_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The oauth entity id', example: 'google', readOnly: true }),
    language_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language id of the user', example: '1' }),
    verified_phone_number: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag if the user has their phone verified. Required to settings up 2FA',
        example: true,
        readOnly: true,
      }),
    sms_verification_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The sms verification code for the user. Required to settings up 2FA',
        example: '123456',
        readOnly: true,
      }),
    oauth_user_token_expiry: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The expiry date of the oauth token',
        example: '2022-10-10',
        readOnly: true,
      }),
    has_password: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the user has a password',
        example: true,
        readOnly: true,
      }),
    last_confirmed_email_address: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The last confirmed email address of the user',
        example: 'bob@gmail.com',
        readOnly: true,
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: 'Custom value 1' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '$1000' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: 'Custom value 3' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: 'Custom value 4' }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the user has been deleted',
        example: true,
        readOnly: true,
      }),
    google_2fa_secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The google 2fa secret for the user',
        example: '123456',
        readOnly: true,
      }),
    passkey_enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag if passkey auth is enabled for this user',
        example: true,
        readOnly: true,
      }),
    passkey_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of registered passkeys for this user',
        example: 2,
        readOnly: true,
      }),
    company_user: CompanyUserRefSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const ExpenseSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expense hashed id', example: 'Opnel5aKBz', readOnly: true }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'Opnel5aKBz' }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: 'Opnel5aKBz' }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The associated project_id', example: 'Opnel5aKBz' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client hashed id', example: 'Opnel5aKBz' }),
    invoice_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The related invoice hashed id', example: 'Opnel5aKBz' }),
    bank_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank id related to this expense', example: '' }),
    invoice_currency_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency id of the related invoice', example: '1' }),
    currency_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency id of the expense', example: '2' }),
    invoice_category_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice category id', example: 'Opnel5aKBz' }),
    payment_type_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payment type id', example: '' }),
    recurring_expense_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The related recurring expense this expense was created from',
        example: 'Opnel5aKBz',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The private notes of the expense', example: '' }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The public notes of the expense', example: '' }),
    transaction_reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transaction references of the expense', example: '' }),
    transcation_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transaction id of the expense', example: '' }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '' }),
    tax_amount: z.number().exactOptional().openapi({ description: 'The tax amount', example: 10 }),
    tax_name1: z.string().exactOptional().openapi({ description: 'Tax Name 1', example: 'GST' }),
    tax_name2: z.string().exactOptional().openapi({ description: 'Tax Name 2', example: 'VAT' }),
    tax_name3: z.string().exactOptional().openapi({ description: 'Tax Name 3', example: 'IVA' }),
    tax_rate1: z.float32().exactOptional().openapi({ description: 'Tax rate 1', example: 10 }),
    tax_rate2: z.float32().exactOptional().openapi({ description: 'Tax rate 2', example: 10 }),
    tax_rate3: z.float32().exactOptional().openapi({ description: 'Tax rate 3', example: 10 }),
    amount: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total expense amont', example: 10 }),
    foreign_amount: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total foreign amount of the expense', example: 10 }),
    exchange_rate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The exchange rate at the time of the expense', example: 0.8 }),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expense date format Y-m-d', example: '2022-12-01' }),
    payment_date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date of payment for the expense, format Y-m-d',
        example: '2022-12-01',
      }),
    should_be_invoiced: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag whether the expense should be invoiced', example: true }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean determining whether the expense has been deleted',
        example: true,
      }),
    invoice_documents: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Passing the expense documents over to the invoice', example: true }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    calculate_tax_by_amount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag indicating whether to calculate tax based on amount rather than percentage',
        example: true,
      }),
    category_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the expense category',
        example: 'Opnel5aKBz',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique number assigned to this expense', example: 'EXP-0001' }),
    purchase_order_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the associated purchase order',
        example: 'Opnel5aKBz',
      }),
    tax_amount1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount of the first tax', example: 10 }),
    tax_amount2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount of the second tax', example: 5 }),
    tax_amount3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount of the third tax', example: 2.5 }),
    transaction_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the transaction',
        example: 'txn_1234567890',
      }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating whether taxes are included in the price',
        example: true,
      }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the vendor associated with this expense',
        example: 'Opnel5aKBz',
      }),
  })
  .openapi({ required: [] })
  .openapi('Expense')

const TaskSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed id of the task', example: 'Opnel5aKBz', readOnly: true }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the user who created the task',
        example: 'Opnel5aKBz',
      }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user of the task', example: 'Opnel5aKBz' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed if of the client', example: 'Opnel5aKBz' }),
    invoice_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the invoice associated with the task',
        example: 'Opnel5aKBz',
      }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the project associated with the task',
        example: 'Opnel5aKBz',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of the task', example: 'TASK-123' }),
    time_log: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An array of unix time stamps defining the start and end times of the task',
        example: '[[1,2],[3,4]]',
      }),
    is_running: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Determines if the task is still running', example: true }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the task has been deleted',
        example: true,
      }),
    task_status_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed id of the task status', example: 'Opnel5aKBz' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task description', example: 'A wonder task to work on' }),
    duration: z
      .int()
      .exactOptional()
      .openapi({ description: 'The task duration in seconds', example: 3600 }),
    task_status_order: z
      .int()
      .exactOptional()
      .openapi({ description: 'The order of the task', example: 4 }),
    rate: z.number().exactOptional().openapi({ description: 'The task rate', example: 10 }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '2022-10-10' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: '$1100' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: 'I need help' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom value', example: 'INV-3343' }),
    is_date_based: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the task is date based',
        example: true,
      }),
    calculated_start_date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The calculated start date of the task',
        example: '2022-10-10',
        readOnly: true,
      }),
    invoice_documents: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flags which determines whether to include the task documents on the invoice',
        example: true,
      }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123, readOnly: true }),
    hash: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique hash identifier for this task', example: 'a1b2c3d4e5f6' }),
    meta: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Metadata associated with this task' }),
    status_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the task status', example: 'Opnel5aKBz' }),
    status_order: z
      .int()
      .exactOptional()
      .openapi({ description: 'Sort order for status display', example: 1 }),
    status_sort_order: z
      .int()
      .exactOptional()
      .openapi({ description: 'Alternative sort order for status', example: 1 }),
    tags: z
      .array(TagAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'Tags assigned to the task' }),
  })
  .openapi({ required: [] })
  .openapi('Task')

const VendorSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the vendor. This is a unique identifier for the vendor.',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hashed id of the user who created the vendor. This is a unique identifier for the user.',
        example: 'Opnel5aKBz',
      }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hashed id of the assigned user to this vendor. This is a unique identifier for the user.',
        example: 'Opnel5aKBz',
      }),
    contacts: z
      .array(VendorContactSchema)
      .exactOptional()
      .openapi({ description: 'An array of contacts associated with the vendor.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the vendor.', example: 'Harry cafe de wheels' }),
    classification: z
      .string()
      .exactOptional()
      .openapi({ description: 'The classification of the vendor.', example: 'individual' }),
    website: z
      .string()
      .exactOptional()
      .openapi({ description: 'The website of the vendor.', example: 'www.harry.com' }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The private notes of the vendor. These notes are only visible to users with appropriate permissions.',
        example: 'Shhh, do not tell the vendor',
      }),
    industry_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The industry id of the vendor. This is a unique identifier for the industry.',
        example: '1',
      }),
    size_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The size id of the vendor. This is a unique identifier for the size of the vendor.',
        example: '',
      }),
    address1: z
      .string()
      .exactOptional()
      .openapi({ description: "The first line of the vendor's address.", example: '' }),
    address2: z
      .string()
      .exactOptional()
      .openapi({ description: "The second line of the vendor's address.", example: '' }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: "The city of the vendor's address.", example: '' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: "The state of the vendor's address.", example: '' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: "The postal code of the vendor's address.", example: '' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number of the vendor.', example: '555-3434-3434' }),
    country_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The country id of the vendor. This is a unique identifier for the country.',
        example: '',
      }),
    currency_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency id of the vendor. This is a unique identifier for the currency.',
        example: '4',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the first custom field for the vendor.', example: '' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The value of the second custom field for the vendor.',
        example: '',
      }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the third custom field for the vendor.', example: '' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The value of the fourth custom field for the vendor.',
        example: '',
      }),
    vat_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The VAT number of the vendor.', example: '' }),
    id_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID number of the vendor.', example: '' }),
    number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of the vendor', example: '11234' }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the vendor has been deleted',
        example: true,
      }),
    language_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The language id of the vendor. This is a unique identifier for the language.',
        example: '1',
      }),
    vendor_hash: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The vendor hash of the vendor. This is a unique identifier for the vendor.',
        example: 'aaa-sss-www',
        readOnly: true,
      }),
    transaction_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transaction name of the vendor.', example: 'aaa-sss-www' }),
    last_login: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    created_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 134341234234, readOnly: true }),
    display_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The display name of the vendor.',
        example: 'Bob the vendor',
        readOnly: true,
      }),
    is_tax_exempt: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating whether the vendor is exempt from taxes',
        example: false,
      }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Notes that are visible to the vendor',
        example: 'These are public notes visible to vendors',
      }),
    routing_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The routing identifier for e-invoicing',
        example: '0088:12345678901',
      }),
  })
  .openapi({ required: [] })
  .openapi('Vendor')

const ActivitySchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id field of the activity',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    activity_type_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The activity type id', example: 'Opnel5aKBz' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client hashed id', example: 'Opnel5aKBz' }),
    company_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company hashed id', example: 'Opnel5aKBz' }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'Opnel5aKBz' }),
    invoice_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice hashed id', example: 'Opnel5aKBz' }),
    payment_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payment hashed id', example: 'Opnel5aKBz' }),
    credit_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The credit hashed id', example: 'Opnel5aKBz' }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Unixtimestamp the last time the record was updated',
        example: 343421434,
      }),
    expense_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expense hashed id', example: 'Opnel5aKBz' }),
    is_system: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines is the activity was performed by the system',
        example: true,
      }),
    contact_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The contact hashed id', example: 'Opnel5aKBz' }),
    task_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task hashed id', example: 'Opnel5aKBz' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Activity Notes', example: 'Opnel5aKBz' }),
    token_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed ID of the token who performed the action',
        example: 'Opnel5aKBz',
      }),
    ip: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The IP Address of the user who performed the action',
        example: '192.168.1.252',
      }),
    user: UserSchema.exactOptional(),
    client: ClientSchema.exactOptional(),
    contact: ClientContactSchema.exactOptional(),
    recurring_invoice: RecurringInvoiceSchema.exactOptional(),
    invoice: InvoiceSchema.exactOptional(),
    credit: CreditSchema.exactOptional(),
    quote: QuoteSchema.exactOptional(),
    payment: PaymentSchema.exactOptional(),
    expense: ExpenseSchema.exactOptional(),
    task: TaskSchema.exactOptional(),
    purchase_order: PurchaseOrderSchema.exactOptional(),
    vendor: VendorSchema.exactOptional(),
    vendor_contact: VendorContactSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Activity')

const CreditRequestSchema = z
  .object({
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'AxP7K9nY5z' }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: 'Bw2M8vR4qL' }),
    client_id: z.string().openapi({ description: 'The client hashed id', example: 'Ht5N9cX3jK' }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The credit number - is a unique alpha numeric number per credit per company',
        example: 'INV-2024-0001',
      }),
    po_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The purchase order associated with this credit',
        example: 'PO-2024-0123',
      }),
    terms: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The credit terms',
        example: 'Net 30 - Payment is due within 30 days of credit date',
      }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The public notes of the credit',
        example: 'Thank you for your business. Please include credit number with payment.',
      }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The private notes of the credit',
        example: 'Client requested expedited delivery - premium rates apply',
      }),
    footer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The credit footer notes',
        example: 'Payment accepted via bank transfer or credit card',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Department: Sales' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Region: North America' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Contract: C-2024-156' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'A custom field value', example: 'Priority: High' }),
    tax_name1: z.string().exactOptional().openapi({ description: 'The tax name', example: 'VAT' }),
    tax_name2: z.string().exactOptional().openapi({ description: 'The tax name', example: 'GST' }),
    tax_rate1: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 20 }),
    tax_rate2: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 5 }),
    tax_name3: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tax name', example: 'State Tax' }),
    tax_rate3: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 8.5 }),
    line_items: z
      .array(InvoiceItemSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the line items of the credit' }),
    invitations: z
      .array(CreditInvitationRequestSchema)
      .exactOptional()
      .openapi({ description: 'An array of objects which define the invitations of the credit' }),
    discount: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The credit discount, can be an amount or a percentage',
        example: 15,
      }),
    partial: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The deposit/partial amount', example: 250 }),
    is_amount_discount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag determining if the discount is an amount or a percentage',
        example: true,
      }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines the type of taxes used as either inclusive or exclusive',
        example: true,
      }),
    date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The credit Date', example: '2024-03-15' }),
    partial_due_date: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The due date for the deposit/partial amount',
        example: '2024-03-29',
      }),
    due_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The due date of the credit', example: '2024-04-14' }),
    custom_surcharge1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'First Custom Surcharge', example: 25 }),
    custom_surcharge2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Second Custom Surcharge', example: 35 }),
    custom_surcharge3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Third Custom Surcharge', example: 45 }),
    custom_surcharge4: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Fourth Custom Surcharge', example: 55 }),
    custom_surcharge_tax1: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax2: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax3: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    custom_surcharge_tax4: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Toggles charging taxes on custom surcharge amounts',
        example: true,
      }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project associated with this credit', example: 'Opnel5aKBz' }),
  })
  .openapi({ required: ['client_id'] })
  .openapi('CreditRequest')

const CompanyUserSchema = z
  .object({
    permissions: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The user permissions for this company in a comma separated list',
        example: 'create_invoice,create_client,view_client',
      }),
    settings: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Settings that are used for the flutter applications to store user preferences / metadata',
        readOnly: true,
      }),
    react_settings: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Dedicated settings object for the react web application',
        readOnly: true,
      }),
    is_owner: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the user owns this company',
        example: true,
        readOnly: true,
      }),
    is_admin: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the user is the admin of this company',
        example: true,
        readOnly: true,
      }),
    is_locked: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Determines whether the users access to this company has been locked',
        example: true,
        readOnly: true,
      }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The last time the record was modified, format Unix Timestamp',
        example: 1231232312321,
      }),
    deleted_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the user was archived, format Unix Timestamp',
        example: 12312312321,
      }),
    account: AccountSchema.exactOptional(),
    company: CompanySchema.exactOptional(),
    user: UserRefSchema.exactOptional(),
    token: CompanyTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompanyUser')

const RecurringExpenseSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the recurring expense',
        example: 'Opnel5aKBz',
        readOnly: true,
      }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the user who created the recurring expense',
        example: 'Opnel5aKBz',
      }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed id of the user assigned to this recurring expense',
        example: 'Opnel5aKBz',
      }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed id of the client', example: 'Opnel5aKBz' }),
    invoice_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hashed id of the invoice', example: 'Opnel5aKBz' }),
    bank_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the bank associated with this recurring expense',
        example: '22',
      }),
    invoice_currency_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency id of the invoice associated with this recurring expense',
        example: '1',
      }),
    expense_currency_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency id of the expense associated with this recurring expense',
        example: '1',
      }),
    invoice_category_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category id of the invoice', example: '1' }),
    payment_type_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The payment type id', example: '1' }),
    private_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The recurring expense private notes',
        example: 'Private and confidential',
      }),
    public_notes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The recurring expense public notes',
        example: 'This is the best client in the world',
      }),
    transaction_reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The recurring expense transaction reference',
        example: 'EXP-1223-2333',
      }),
    transcation_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The transaction id of the recurring expense',
        example: '1233312312',
      }),
    custom_value1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field', example: '$1000' }),
    custom_value2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field', example: '2022-10-10' }),
    custom_value3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field', example: 'short text' }),
    custom_value4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom value field', example: 'very long text' }),
    tax_name1: z.string().exactOptional().openapi({ description: 'The tax name', example: 'GST' }),
    tax_name2: z.string().exactOptional().openapi({ description: 'The tax name', example: 'VAT' }),
    tax_rate1: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    tax_rate2: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    tax_name3: z.string().exactOptional().openapi({ description: 'The tax name', example: '' }),
    tax_rate3: z.float32().exactOptional().openapi({ description: 'The tax rate', example: 10 }),
    amount: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The total amount of the recurring expense', example: 10 }),
    frequency_id: z
      .number()
      .exactOptional()
      .openapi({ description: 'The frequency this recurring expense fires', example: 1 }),
    remaining_cycles: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The number of remaining cycles for this recurring expense',
        example: 1,
      }),
    foreign_amount: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The foreign currency amount of the recurring expense',
        example: 10,
      }),
    exchange_rate: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The exchange rate for the expernse', example: 0.8 }),
    date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of the expense', example: '' }),
    payment_date: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the expense was paid', example: '' }),
    should_be_invoiced: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the expense should be invoiced',
        example: true,
      }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag determining if the recurring expense is deleted',
        example: true,
      }),
    last_sent_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The Date it was sent last', example: '1994-07-30' }),
    next_send_date: z.iso
      .date()
      .exactOptional()
      .openapi({ description: 'The next send date', example: '1994-07-30' }),
    invoice_documents: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag determining if the documents associated with this expense should be passed onto the invoice if it is converted to an invoice',
        example: true,
      }),
    updated_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    archived_at: z
      .number()
      .exactOptional()
      .openapi({ description: 'Timestamp', example: 1434342123 }),
    calculate_tax_by_amount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag indicating whether to calculate tax based on amount rather than percentage',
        example: true,
      }),
    category_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the expense category',
        example: 'Opnel5aKBz',
      }),
    currency_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the currency', example: '1' }),
    next_send_date_client: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The next scheduled send date for the client',
        example: '2024-12-31',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique number assigned to this recurring expense',
        example: 'RE-0001',
      }),
    project_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the project associated with this recurring expense',
        example: 'Opnel5aKBz',
      }),
    tax_amount1: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount of the first tax', example: 10 }),
    tax_amount2: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount of the second tax', example: 5 }),
    tax_amount3: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The amount of the third tax', example: 2.5 }),
    transaction_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the transaction',
        example: 'txn_1234567890',
      }),
    uses_inclusive_taxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag indicating whether taxes are included in the price',
        example: true,
      }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the vendor associated with this recurring expense',
        example: 'Opnel5aKBz',
      }),
  })
  .openapi({ required: [] })
  .openapi('RecurringExpense')

const TaskSortRequestSchema = z
  .object({
    task_ids: z
      .array(z.string().openapi({ example: 'D2J234DFA' }))
      .openapi({ description: 'Array of task IDs to be sorted' }),
    status_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'Status ID to assign to sorted tasks', example: 1 }),
    sort_order: z
      .array(z.string().openapi({ example: 'D2J234DFA' }))
      .exactOptional()
      .openapi({ description: 'Array of task IDs in the desired sort order' }),
  })
  .openapi({ required: ['task_ids'] })
  .openapi('TaskSortRequest')

const LocationSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location hashed id', example: 'Kd5S2M', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location name', example: 'Warehouse A' }),
    address1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first line of the address', example: '123 Business Street' }),
    address2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The second line of the address', example: 'Suite 100' }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city name', example: 'San Francisco' }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state or region', example: 'CA' }),
    postal_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal or zip code', example: '94107' }),
    country_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the associated country', example: '840' }),
    custom_value1: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom field value 1' }),
    custom_value2: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom field value 2' }),
    custom_value3: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom field value 3' }),
    custom_value4: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom field value 4' }),
    is_deleted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the location has been deleted', example: false }),
    is_shipping_location: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this is a shipping location', example: true }),
    user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user hashed id', example: 'Opnel5aKBz', readOnly: true }),
    assigned_user_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The assigned user hashed id', example: 'Opnel5aKBz' }),
    client_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The client hashed id', example: 'Opnel5aKBz' }),
    vendor_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The vendor hashed id', example: 'Opnel5aKBz' }),
    created_at: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timestamp of when the location was created', example: 1623456789 }),
    updated_at: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Timestamp of when the location was last updated',
        example: 1623456999,
      }),
  })
  .openapi({ required: [] })
  .openapi('Location')

const _400Response = {
  description: 'Invalid user input',
  content: { 'application/json': { schema: InvalidInputErrorSchema } },
}

const _401Response = {
  description: 'Authentication error',
  content: { 'application/json': { schema: AuthenticationErrorSchema } },
}

const _403Response = {
  description: 'Authorization error',
  content: { 'application/json': { schema: AuthorizationErrorSchema } },
}

const _422Response = {
  description: 'Validation error',
  content: { 'application/json': { schema: ValidationErrorSchema } },
}

const _429Response = {
  description: 'Rate Limit Exceeded',
  content: { 'application/json': { schema: RateLimiterErrorSchema } },
}

const DefaultResponse = {
  description: 'Unexpected Error',
  content: { 'application/json': { schema: ErrorSchema } },
}

const XAPISECRETParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-API-SECRET',
      in: 'header',
      description:
        'The API secret as defined by the .env variable API_SECRET. Only needed for self hosted users, and only applicable on the login route.',
      required: false,
      schema: { type: 'string', example: 'password' },
    },
    example: 'password',
  })

const XRequestedWithParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-Requested-With',
      in: 'header',
      description: 'Used to send the XMLHttpRequest header',
      required: true,
      schema: { type: 'string', example: 'XMLHttpRequest' },
    },
    example: 'XMLHttpRequest',
  })

const XAPITOKENParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-API-TOKEN',
      in: 'header',
      description: 'The API token to be used for authentication',
      required: true,
      schema: { type: 'string', example: 'TOKEN' },
    },
    example: 'TOKEN',
  })

const XAPIPASSWORDParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-API-PASSWORD',
      in: 'header',
      description: 'The login password when challenged on certain protected routes',
      required: true,
      schema: { type: 'string', example: 'supersecretpassword' },
    },
    example: 'supersecretpassword',
  })

const BankIntegrationIncludeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'include',
      in: 'query',
      description:
        'Include child relations of the BankIntegration object. Format is comma separated.',
      required: false,
      schema: { type: 'string' },
      examples: {
        company: { summary: 'The associated Company', value: 'company' },
        account: { summary: 'The associated Account', value: 'account' },
        bank_transactions: {
          summary: 'The associated Bank Transactions',
          value: 'bank_transactions',
        },
      },
    },
  })

const ClientIncludeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'include',
      in: 'query',
      description:
        'Include child relationships of the Client Object. ie ?include=documents,system_logs\n\n```html\nAvailable includes:\n\ncontacts [All contacts related to the client]\ndocuments [All documents related to the client]\ngateway_tokens [All payment tokens related to the client]\nactivities [All activities related to the client]\nledger [The client ledger]\nsystem_logs [System logs related to the client]\ngroup_settings [The group settings object the client is assigned to]\n\n```\n\nUsage:\n\n```html\n/api/v1/clients?include=contacts,documents,activities\n```\n',
      required: false,
      schema: { type: 'string' },
      examples: {
        activities: {
          summary: 'include=activities will include the activities object in the response',
          value: 'activities',
        },
        ledger: {
          summary: 'include=ledger will include the ledger object in the response',
          value: 'ledger',
        },
        system_logs: {
          summary: 'include=system_logs will include the system_logs object in the response',
          value: 'system_logs',
        },
      },
    },
  })

const ActivityIncludeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'include',
      in: 'query',
      description:
        'Include child relations of the Activity object, format is comma separated. **Note** it is possible to chain multiple includes together, ie. include=account,token',
      required: false,
      schema: { type: 'string' },
      examples: {
        history: {
          summary:
            'include=history will include the history object in the response (This could include references to the backup HTML of the entity)',
          value: 'history',
        },
        user: {
          summary: 'include=user will include the user object in the response',
          value: 'user',
        },
        client: {
          summary: 'include=client will include the client object in the response',
          value: 'client',
        },
        recurring_invoice: {
          summary:
            'include=recurring_invoice will include the recurring_invoice object in the response',
          value: 'recurring_invoice',
        },
        invoice: {
          summary: 'include=invoice will include the invoice object in the response',
          value: 'invoice',
        },
        credit: {
          summary: 'include=credit will include the credit object in the response',
          value: 'credit',
        },
        quote: {
          summary: 'include=quote will include the quote object in the response',
          value: 'quote',
        },
        payment: {
          summary: 'include=payment will include the payment object in the response',
          value: 'payment',
        },
        expense: {
          summary: 'include=expense will include the expense object in the response',
          value: 'expense',
        },
        vendor_contact: {
          summary: 'include=vendor_contact will include the vendor_contact object in the response',
          value: 'vendor_contact',
        },
        vendor: {
          summary: 'include=vendor will include the vendor object in the response',
          value: 'vendor',
        },
        purchase_order: {
          summary: 'include=purchase_order will include the purchase_order object in the response',
          value: 'purchase_order',
        },
        task: {
          summary: 'include=task will include the task object in the response',
          value: 'task',
        },
      },
    },
  })

const LoginIncludeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'include',
      in: 'query',
      description:
        'Include child relations of the CompanyUser object, format is comma separated.    \n\n<br />\n\n> ### **Note**: it is possible to chain multiple includes together, ie. include=account,token\n\n<br />\n\n```html\n\nAvailable includes:\n\n  user\n  company\n  token\n  account\n```\n',
      required: false,
      schema: { type: 'string' },
      examples: {
        user: {
          summary: 'include=user will include the Cser object in the response',
          value: 'user',
        },
        company: {
          summary: 'include=company will include the Company object in the response',
          value: 'company',
        },
        token: {
          summary: 'include=token will include the Company Token object in the response',
          value: 'token',
        },
        account: {
          summary: 'include=account will include the Account object in the response',
          value: 'account',
        },
      },
    },
  })

const PerPageMetaParamsSchema = z
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
      name: 'per_page',
      in: 'query',
      description: 'The number of records to return for each request, default is 20',
      required: false,
      schema: { type: 'integer', example: 20 },
    },
    example: 20,
  })

const PageMetaParamsSchema = z
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
      name: 'page',
      in: 'query',
      description:
        'The page number to return for this request (when performing pagination), default is 1',
      required: false,
      schema: { type: 'integer', example: 1 },
    },
    example: 1,
  })

const IncludeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'include',
      in: 'query',
      description:
        'Includes child relationships in the response, format is comma separated. Check each model for the list of associated includes',
      required: false,
      schema: { type: 'string', example: 'first_load' },
    },
    example: 'first_load',
  })

const IncludeStaticParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'include_static',
      in: 'query',
      description:
        'This include will return the full set of static variables used in the application including:\n  - Currencies\n  - Countries \n  - Languages\n  - Payment Types\n  - Email Templatees\n  - Industries\n',
      required: false,
      schema: { type: 'string', example: 'include_static=true' },
    },
    example: 'include_static=true',
  })

const ClearCacheParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'clear_cache',
      in: 'query',
      description: 'Clears cache\n\nClears (and rebuilds) the static variable cache.  \n',
      required: false,
      schema: { type: 'string', example: 'clear_cache=true' },
    },
    example: 'clear_cache=true',
  })

const IndexParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'index',
      in: 'query',
      description:
        "Replaces the default response index from data to a user specific string\n\nie.\n\n```html\n  ?index=new_index\n```\n\nresponse is wrapped\n\n```json\n  {\n    'new_index' : [\n      .....  \n    ]\n  }\n```\n",
      required: false,
      schema: { type: 'string', example: 'user' },
    },
    example: 'user',
  })

const ApiVersionParamsSchema = z
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
  .openapi({
    param: {
      name: 'api_version',
      in: 'query',
      description: 'The API version',
      required: false,
      schema: { type: 'number', example: 1 },
    },
    example: 1,
  })

const SortClientsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — pass one argument, for example `sort=id|desc`.\n\n**Multiple sorts** — chain ordering with repeated `sort[]` keys. The first is the main sort, the next breaks ties, and so on, for example  \n`sort[]=id|desc&sort[]=number|asc`.\n\nFor clients, the API honors `clients` columns (such as `name`, `balance`, `number`), natural ordering for `number`, plus `contacts`, `contact_email`, and `name` / `display_name` (display name is normalized to `name`). Values that are not supported are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['name|desc', 'balance|asc'] },
    },
    example: ['name|desc', 'balance|asc'],
  })

const SortInvoicesParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=balance|desc`.\n\n**Multiple sorts** — use `sort[]` for each level in priority order, for example  \n`sort[]=id|desc&sort[]=number|asc`.\n\nInvoices accept columns on the `invoices` table, relationship-style keys such as `client.name`, `client_id`, `documents`, `project_id`, and prefixed `client.*` / `contact.*` sorts where the filter supports them. `number` and `status_id` have special handling. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['number|asc', 'balance|desc'] },
    },
    example: ['number|asc', 'balance|desc'],
  })

const SortQuotesParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=date|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=number|asc`.\n\nQuotes follow the same style as invoices: base `quotes` columns plus `client.name`, `client_id`, `documents`, and `client.*` / `contact.*` where implemented. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['number|asc', 'id|desc'] },
    },
    example: ['number|asc', 'id|desc'],
  })

const SortPaymentsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=date|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=amount|asc`.\n\nPayments accept `payments` columns plus client, contact, and document-related sorts defined in the payment filters. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['date|desc', 'amount|asc'] },
    },
    example: ['date|desc', 'amount|asc'],
  })

const SortProductsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=product_key|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=product_key|asc`.\n\nOnly real columns on the `products` table are recognized (for example `id`, `product_key`, `cost`, `price`). Relationship sorts are not available here. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['product_key|asc', 'id|desc'] },
    },
    example: ['product_key|asc', 'id|desc'],
  })

const SortRecurringInvoicesParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=next_send_date|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=number|asc`.\n\nRecurring invoices use the recurring-invoice table columns plus the client/contact-style sorts exposed by `RecurringInvoiceFilters`. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: { type: 'string' },
        example: ['number|asc', 'next_send_date|desc'],
      },
    },
    example: ['number|asc', 'next_send_date|desc'],
  })

const SortLocationsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=name|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=name|asc&sort[]=id|desc`.\n\nLocation ordering is limited by the filter: `name` is the primary supported case; other column names must exist on the locations schema to take effect.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['name|desc'] },
    },
    example: ['name|desc'],
  })

const SortProjectsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=due_date|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=name|asc`.\n\nProjects accept `projects` columns plus `client.name`, `client_id`, `contact.*`, `documents`, and dotted `client.*` / `contact.*` relationship sorts where supported. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['name|asc', 'due_date|desc'] },
    },
    example: ['name|asc', 'due_date|desc'],
  })

const SortCreditsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=balance|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=number|asc&sort[]=date|desc`.\n\nCredits accept credit table columns plus `client.name`, `client_id`, `documents`, and `client.*` / `contact.*` style keys per `CreditFilters`. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['number|asc', 'balance|desc'] },
    },
    example: ['number|asc', 'balance|desc'],
  })

const SortVendorsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=name|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=name|asc`.\n\nVendors use vendor table columns and any relationship sorts implemented in `VendorFilters` (such as `client.name` or document counts where applicable). Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['name|asc', 'id|desc'] },
    },
    example: ['name|asc', 'id|desc'],
  })

const SortTasksParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=due_date|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=status_id|asc&sort[]=id|desc`.\n\nTasks accept `tasks` columns plus `client.name`, `client_id`, `contact.*`, and `documents` where the filter implements them. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['due_date|asc', 'id|desc'] },
    },
    example: ['due_date|asc', 'id|desc'],
  })

const SortPurchaseOrdersParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=date|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=number|asc&sort[]=date|desc`.\n\nPurchase orders use PO table columns and vendor- or client-related sorts as defined in `PurchaseOrderFilters`. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['number|asc', 'date|desc'] },
    },
    example: ['number|asc', 'date|desc'],
  })

const SortBankIntegrationsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=id|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=created_at|asc`.\n\nOnly columns on `bank_integrations` are recognized. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['id|desc'] },
    },
    example: ['id|desc'],
  })

const SortBankTransactionsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=date|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=amount|asc&sort[]=date|desc`.\n\nBank transactions accept columns and relationship sorts exposed by `BankTransactionFilters`. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['date|desc', 'amount|asc'] },
    },
    example: ['date|desc', 'amount|asc'],
  })

const SortBankTransactionRulesParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=id|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=name|asc`.\n\nOnly columns defined for the bank transaction rules model are honored. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['id|desc'] },
    },
    example: ['id|desc'],
  })

const SortCompanyGatewaysParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=label|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=label|asc`.\n\nSorting is limited to columns on the company gateways table (for example `label`, `id`). Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['label|asc'] },
    },
    example: ['label|asc'],
  })

const SortDesignsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=name|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=name|asc`.\n\nOnly `designs` table columns apply. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['name|asc'] },
    },
    example: ['name|asc'],
  })

const SortDocumentsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=created_at|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=created_at|asc`.\n\nDocuments accept base table columns and any extra relationship sorts implemented in `DocumentFilters`. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['created_at|desc'] },
    },
    example: ['created_at|desc'],
  })

const SortExpenseCategoriesParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=name|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=name|asc`.\n\nOnly columns on `expense_categories` are recognized. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['name|asc'] },
    },
    example: ['name|asc'],
  })

const SortExpensesParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=date|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=amount|asc&sort[]=date|desc`.\n\nExpenses accept expense columns plus client, contact, and document-related sorts per `ExpenseFilters`. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['date|desc', 'amount|asc'] },
    },
    example: ['date|desc', 'amount|asc'],
  })

const SortGroupSettingsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=id|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=updated_at|asc`.\n\nOnly `group_settings` columns are honored. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['id|desc'] },
    },
    example: ['id|desc'],
  })

const SortPaymentTermsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=number_of_days|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=name|asc&sort[]=number_of_days|asc`.\n\nSorting follows the payment term table schema. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['number_of_days|asc'] },
    },
    example: ['number_of_days|asc'],
  })

const SortRecurringExpensesParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=next_send_date|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=amount|desc`.\n\nRecurring expenses combine table columns with client- or vendor-related sorts from `RecurringExpenseFilters`. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['next_send_date|asc'] },
    },
    example: ['next_send_date|asc'],
  })

const SortRecurringQuotesParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=next_send_date|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=number|asc&sort[]=id|desc`.\n\nRecurring quotes use their table columns and related sorts from `RecurringQuoteFilters`. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['number|asc'] },
    },
    example: ['number|asc'],
  })

const SortSubscriptionsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=created_at|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=created_at|asc`.\n\nOnly `subscriptions` table columns are recognized. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['created_at|desc'] },
    },
    example: ['created_at|desc'],
  })

const SortSystemLogsParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=created_at|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=created_at|desc`.\n\nLog rows sort by columns exposed through `SystemLogFilters`. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['created_at|desc'] },
    },
    example: ['created_at|desc'],
  })

const SortTaskStatusesParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=sort_order|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=sort_order|asc&sort[]=name|asc`.\n\nOnly `task_statuses` columns are recognized. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['sort_order|asc'] },
    },
    example: ['sort_order|asc'],
  })

const SortTaxRatesParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=name|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=rate|asc&sort[]=name|asc`.\n\nOnly `tax_rates` table columns apply. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['name|asc'] },
    },
    example: ['name|asc'],
  })

const SortTokensParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=name|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=name|asc`.\n\nCompany tokens sort by columns on `company_tokens`. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['name|asc'] },
    },
    example: ['name|asc'],
  })

const SortUsersParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=email|asc`.\n\n**Multiple sorts** — for example  \n`sort[]=last_name|asc&sort[]=first_name|asc`.\n\nOnly `users` table columns are recognized. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: {
        type: 'array',
        items: { type: 'string' },
        example: ['first_name|asc', 'email|asc'],
      },
    },
    example: ['first_name|asc', 'email|asc'],
  })

const SortWebhooksParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'Order the list by choosing a column and direction. Each value uses the form `column|asc` or `column|desc`.\n\n**Single sort** — for example `sort=created_at|desc`.\n\n**Multiple sorts** — for example  \n`sort[]=id|desc&sort[]=created_at|asc`.\n\nOnly `webhooks` table columns apply. Unsupported keys are ignored.\n',
      required: false,
      style: 'form',
      explode: true,
      schema: { type: 'array', items: { type: 'string' }, example: ['created_at|desc'] },
    },
    example: ['created_at|desc'],
  })

const StatusParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'status',
      in: 'query',
      description:
        'Filter the entity based on their status. ie active / archived / deleted. Format is a comma separated string with any of the following options:  \n- active\n- archived\n- deleted  \n\n```html\nGET /api/v1/invoices?status=archived,deleted\nReturns only archived and deleted invoices\n```\n',
      required: false,
      schema: { type: 'string' },
      example: '?status=archived,deleted',
    },
  })

const ClientIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'client_id',
      in: 'query',
      description:
        'Filters the entity list by client_id. Suitable when you only want the entities of a specific client.\n\n```html\nGET /api/v1/invoices?client_id=AxB7Hjk9\nReturns only invoices for the specified client\n```\n',
      required: false,
      schema: { type: 'string' },
      example: '?client_id={client_id}',
    },
  })

const CreatedAtParamsSchema = z
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
      name: 'created_at',
      in: 'query',
      description:
        'Filters the entity list by the created at timestamp. Parameter value can be a datetime string or unix timestamp\n\n```html\nGET /api/v1/invoices?created_at=2022-01-10\nReturns entities created on January 10th, 2022\n```\n',
      required: false,
      schema: { type: 'integer' },
      example: 1641772800,
    },
  })

const UpdatedAtParamsSchema = z
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
      name: 'updated_at',
      in: 'query',
      description:
        'Filters the entity list by the updated at timestamp. Parameter value can be a datetime string or unix timestamp\n\n```html\nGET /api/v1/invoices?updated_at=2022-01-10\nReturns entities last updated on January 10th, 2022\n```\n',
      required: false,
      schema: { type: 'integer' },
      example: 1641772800,
    },
  })

const IsDeletedParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'is_deleted',
      in: 'query',
      description:
        'Filters the entity list by entities that have been deleted.\n\n```html\nGET /api/v1/invoices?is_deleted=true\nReturns only soft-deleted entities\n```\n',
      required: false,
      schema: { type: 'boolean' },
      example: true,
    },
  })

const VendorIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'vendor_id',
      in: 'query',
      description:
        'Filters the entity list by an associated vendor\n\n```html\nGET /api/v1/purchases?vendor_id=AxB7Hjk9\nReturns only purchases for the specified vendor\n```\n',
      required: false,
      schema: { type: 'string' },
      example: '?vendor_id={vendor_id}',
    },
  })

const FilterDeletedClientsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'filter_deleted_clients',
      in: 'query',
      description:
        'Filters the entity list and only returns entities for clients that have not been deleted\n\n```html\nGET /api/v1/invoices?filter_deleted_clients=true\nReturns only invoices for active (non-deleted) clients\n```\n',
      required: false,
      schema: { type: 'string' },
      example: '?filter_deleted_clients=true',
    },
  })

const XMINIMUMCLIENTVERSIONHeaderSchema = z
  .number()
  .exactOptional()
  .openapi({ description: 'The API version', param: { required: false } })

const XRateLimitRemainingHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'The number of requests left for the time window.',
    param: { required: false },
  })

const XRateLimitLimitHeaderSchema = z
  .int()
  .exactOptional()
  .openapi({
    description: 'The total number of requests in a given time window.',
    param: { required: false },
  })

export const postApiV1LoginRoute = createRoute({
  method: 'post',
  path: '/api/v1/login',
  tags: ['auth'],
  summary: 'Login',
  operationId: 'postLogin',
  request: {
    headers: z.object({
      'X-API-SECRET': XAPISECRETParamsSchema,
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: LoginIncludeParamsSchema,
      include_static: IncludeStaticParamsSchema,
      clear_cache: ClearCacheParamsSchema,
    }),
    body: {
      description:
        'User credentials\n\n```json\n{\n  "email" : "fred@flintstonze.com",\n  "password" : "magicpassword123",\n  "one_time_password" : "12345",\n}\n```\n',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({
                  description: 'The users email address.',
                  example: 'demo@invoiceninja.com',
                }),
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The user password. Optional when performing passkey passwordless login.',
                  example: 'Password0',
                }),
              one_time_password: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The one time password if 2FA is enabled',
                  example: '123456',
                }),
              passkey_challenge_token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Challenge token returned by passkey login options or second-factor challenge.',
                  example: 'f8f0cf1f4f6c4de5b6d6c5d4a0f8e5b2b89e1f1a',
                }),
              passkey_authentication: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'WebAuthn assertion payload.' }),
            })
            .openapi({ required: ['email'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the company user object',
      content: { 'application/json': { schema: CompanyUserSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ActivitiesRoute = createRoute({
  method: 'get',
  path: '/api/v1/activities',
  tags: ['activities'],
  summary: 'Returns a list of activities',
  description: 'Lists all activities related to this company',
  operationId: 'getActivities',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: ActivityIncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Returns the list of activities',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ActivitySchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1ActivitiesDownloadEntityActivityIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/activities/download_entity/{activity_id}',
  tags: ['activities'],
  summary: 'Returns a PDF for the given activity',
  description: 'Returns a PDF for the given activity',
  operationId: 'getActivityHistoricalEntityPdf',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: ActivityIncludeParamsSchema }),
    params: z.object({
      activity_id: z
        .string()
        .openapi({
          param: {
            name: 'activity_id',
            in: 'path',
            description: 'The Activity Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'PDF File',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    404: { description: 'No file exists for the given record' },
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ActivitiesEntityRoute = createRoute({
  method: 'post',
  path: '/api/v1/activities/entity',
  tags: ['activities'],
  summary: 'Entity activity',
  description: 'Returns activity for a given entity',
  operationId: 'postActivitiesEntity',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'Entity activity response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ActivitiesNotesRoute = createRoute({
  method: 'post',
  path: '/api/v1/activities/notes',
  tags: ['activities'],
  summary: 'Activity note',
  description: 'Creates or updates an activity note',
  operationId: 'postActivitiesNotes',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'Activity note response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1PasskeysLoginOptionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/passkeys/login/options',
  tags: ['auth'],
  summary: 'Passkey login options',
  operationId: 'postPasskeyLoginOptions',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ email: z.string().openapi({ example: 'demo@invoiceninja.com' }) })
            .openapi({ required: ['email'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Returns passkey authentication options and challenge token' },
    401: _401Response,
    404: {
      description: 'No passkeys registered for this account',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example:
                    'No passkeys registered for this account. Please use password login or register a passkey first.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1SettingsPasskeysRoute = createRoute({
  method: 'get',
  path: '/api/v1/settings/passkeys',
  tags: ['auth'],
  summary: 'List passkeys',
  operationId: 'getSettingsPasskeys',
  request: { headers: z.object({ 'X-API-TOKEN': XAPITOKENParamsSchema }) },
  responses: {
    200: { description: 'Returns passkeys for the current user' },
    401: _401Response,
    default: DefaultResponse,
  },
})

export const postApiV1SettingsPasskeysRoute = createRoute({
  method: 'post',
  path: '/api/v1/settings/passkeys',
  tags: ['auth'],
  summary: 'Create passkey',
  operationId: 'postSettingsPasskeys',
  request: {
    headers: z.object({ 'X-API-TOKEN': XAPITOKENParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              challenge_token: z.string(),
              credential: z.looseObject({}),
              name: z.string().exactOptional(),
            })
            .openapi({ required: ['challenge_token', 'credential'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Passkey added' },
    401: _401Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1SettingsPasskeysOptionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/settings/passkeys/options',
  tags: ['auth'],
  summary: 'Passkey registration options',
  operationId: 'postSettingsPasskeysOptions',
  request: { headers: z.object({ 'X-API-TOKEN': XAPITOKENParamsSchema }) },
  responses: {
    200: { description: 'Returns passkey registration options and challenge token' },
    401: _401Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1SettingsPasskeysPasskeyRoute = createRoute({
  method: 'delete',
  path: '/api/v1/settings/passkeys/{passkey}',
  tags: ['auth'],
  summary: 'Delete passkey',
  operationId: 'deleteSettingsPasskey',
  request: {
    headers: z.object({ 'X-API-TOKEN': XAPITOKENParamsSchema }),
    params: z.object({
      passkey: z
        .string()
        .openapi({
          param: { name: 'passkey', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Passkey removed' },
    401: _401Response,
    403: _403Response,
    default: DefaultResponse,
  },
})

export const postApiV1RefreshRoute = createRoute({
  method: 'post',
  path: '/api/v1/refresh',
  tags: ['refresh'],
  summary: 'Refresh data by timestamp',
  description:
    'Refreshes the dataset.  \n\nThis endpoint can be used if you only need to access the most recent data from a certain point in time. For example, if you only want to retrieve The\nmost recent data from the last time you accessed the system, you would pass the query parameter ?updated_at=1676173763. (unix timestamp)\n',
  operationId: 'postRefresh',
  request: {
    query: z.object({
      updated_at: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            name: 'updated_at',
            in: 'query',
            description:
              'The unix timestamp from which the refreshed data should be sent from, if no value is passed the system will assume you require all data.',
            required: true,
            schema: { type: 'number', format: 'integer' },
            example: 1676173763,
          },
        }),
      include: IncludeParamsSchema,
      include_static: IncludeStaticParamsSchema,
      clear_cache: ClearCacheParamsSchema,
    }),
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The Company User response',
      content: { 'application/json': { schema: CompanyUserSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1YodleeRefreshRoute = createRoute({
  method: 'post',
  path: '/api/v1/yodlee/refresh',
  tags: ['yodlee'],
  summary: 'Yodlee Webhook',
  description:
    'Webhook endpoint for Yodlee. Used to notify the system that a data point can be updated.',
  operationId: 'yodleeRefreshWebhook',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: CreditSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankIntegrationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_integrations',
  tags: ['bank_integrations'],
  summary: 'Returns a list of Bank Integrations',
  description: 'Lists all bank integrations',
  operationId: 'getBankIntegrations',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: BankIntegrationIncludeParamsSchema,
      index: IndexParamsSchema,
      rows: z
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
        .openapi({
          param: {
            name: 'rows',
            in: 'query',
            description: 'The number of bank integrations to return',
            required: false,
            schema: { type: 'number', format: 'integer' },
            example: 50,
          },
        }),
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortBankIntegrationsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of bank integrations',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(BankIntegrationSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1BankIntegrationsRoute = createRoute({
  method: 'post',
  path: '/api/v1/bank_integrations',
  tags: ['bank_integrations'],
  summary: 'Adds a bank_integration',
  description: 'Adds an bank_integration to a company',
  operationId: 'storeBankIntegration',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved bank_integration object',
      content: { 'application/json': { schema: BankIntegrationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankIntegrationsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_integrations/{id}',
  tags: ['bank_integrations'],
  summary: 'Shows a bank_integration',
  description: 'Displays a bank_integration by id',
  operationId: 'showBankIntegration',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The BankIntegration Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the bank_integration object',
      content: { 'application/json': { schema: BankIntegrationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1BankIntegrationsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/bank_integrations/{id}',
  tags: ['bank_integrations'],
  summary: 'Updates a bank_integration',
  description: 'Handles the updating of a bank_integration by id',
  operationId: 'updateBankIntegration',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The BankIntegration Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the bank_integration object',
      content: { 'application/json': { schema: BankIntegrationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1BankIntegrationsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/bank_integrations/{id}',
  tags: ['bank_integrations'],
  summary: 'Deletes a bank_integration',
  description: 'Handles the deletion of a bank_integration by id',
  operationId: 'deleteBankIntegration',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The BankIntegration Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankIntegrationsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_integrations/{id}/edit',
  tags: ['bank_integrations'],
  summary: 'Shows a bank_integration for editing',
  description: 'Displays a bank_integration by id',
  operationId: 'editBankIntegration',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The BankIntegration Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the bank_integration object',
      content: { 'application/json': { schema: BankIntegrationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankIntegrationsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_integrations/create',
  tags: ['bank_integrations'],
  summary: 'Gets a new blank bank_integration object',
  description: 'Returns a blank object with default values',
  operationId: 'getBankIntegrationsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank bank_integration object',
      content: { 'application/json': { schema: BankIntegrationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1BankIntegrationsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/bank_integrations/bulk',
  tags: ['bank_integrations'],
  summary: 'Performs bulk actions on an array of bank_integrations',
  operationId: 'bulkBankIntegrations',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Action paramters',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Bulk Action response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1BankIntegrationsRefreshAccountsRoute = createRoute({
  method: 'post',
  path: '/api/v1/bank_integrations/refresh_accounts',
  tags: ['bank_integrations'],
  summary: 'Gets the list of accounts from the remote server',
  description: 'Adds an bank_integration to a company',
  operationId: 'getRefreshAccounts',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved bank_integration object',
      content: { 'application/json': { schema: BankIntegrationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1BankIntegrationsRemoveAccountAccountIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/bank_integrations/remove_account/account_id',
  tags: ['bank_integrations'],
  summary: 'Removes an account from the integration',
  description: 'Removes an account from the integration',
  operationId: 'getRemoveAccount',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the bank_integration object',
      content: { 'application/json': { schema: BankIntegrationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1BankIntegrationsGetTransactionsAccountIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/bank_integrations/get_transactions/account_id',
  tags: ['bank_integrations'],
  summary: 'Retrieve transactions for a account',
  description: 'Retrieve transactions for a account',
  operationId: 'getAccountTransactions',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Retrieve transactions for a account',
      content: { 'application/json': { schema: BankIntegrationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankTransactionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_transactions',
  tags: ['bank_transactions'],
  summary: 'Gets a list of bank_transactions',
  description: 'Lists all bank integrations',
  operationId: 'getBankTransactions',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      rows: z
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
        .openapi({
          param: {
            name: 'rows',
            in: 'query',
            description: 'The number of bank integrations to return',
            required: false,
            schema: { type: 'number', format: 'integer' },
            example: 50,
          },
        }),
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortBankTransactionsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of bank integrations',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(BankTransactionSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1BankTransactionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/bank_transactions',
  tags: ['bank_transactions'],
  summary: 'Adds a bank_transaction',
  description: 'Adds an bank_transaction to a company',
  operationId: 'storeBankTransaction',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved bank_transaction object',
      content: { 'application/json': { schema: BankTransactionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankTransactionsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_transactions/{id}',
  tags: ['bank_transactions'],
  summary: 'Shows a bank_transaction',
  description: 'Displays a bank_transaction by id',
  operationId: 'showBankTransaction',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The BankTransaction Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the bank_transaction object',
      content: { 'application/json': { schema: BankTransactionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1BankTransactionsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/bank_transactions/{id}',
  tags: ['bank_transactions'],
  summary: 'Updates a bank_transaction',
  description: 'Handles the updating of a bank_transaction by id',
  operationId: 'updateBankTransaction',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The BankTransaction Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the bank_transaction object',
      content: { 'application/json': { schema: BankTransactionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1BankTransactionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/bank_transactions/{id}',
  tags: ['bank_transactions'],
  summary: 'Deletes a bank_transaction',
  description: 'Handles the deletion of a bank_transaction by id',
  operationId: 'deleteBankTransaction',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The BankTransaction Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1BankTransactionsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_transactions/{id}/edit',
  tags: ['bank_transactions'],
  summary: 'Shows a bank_transaction for editing',
  description: 'Displays a bank_transaction by id',
  operationId: 'editBankTransaction',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The BankTransaction Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the bank_transaction object',
      content: { 'application/json': { schema: BankTransactionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankTransactionsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_transactions/create',
  tags: ['bank_transactions'],
  summary: 'Gets a new blank bank_transaction object',
  description: 'Returns a blank object with default values',
  operationId: 'getBankTransactionsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank bank_transaction object',
      content: { 'application/json': { schema: BankTransactionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1BankTransactionsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/bank_transactions/bulk',
  tags: ['bank_transactions'],
  summary: 'Bulk actions',
  operationId: 'bulkBankTransactions',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Action paramters',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Bulk Action response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1BankTransactionsMatchRoute = createRoute({
  method: 'post',
  path: '/api/v1/bank_transactions/match',
  tags: ['bank_transactions'],
  summary: 'Match transactions',
  description:
    'Matching invoices or a payment to a bank transactions.\n\nThe API expects the id of the transaction along with either a comma separated list of invoice ids OR the payment id to associate the transaction to.\n\nExample for matching a transaction to two invoices:\n\n{"transactions":[{"id":"olejRl5ejN","invoice_ids":"JxboYBLegw,JxboYBLeXX"}]}\n\nExample for matching a transaction and a paymente:\n\n{"transactions":[{"id":"olejRl5ejN","payment_id":"JxboYBLeXf"}]}\n\nMatching expenses.\n\nYou can match an existing expense within Invoice Ninja - or - create a new expense using the following:\n\n{"transactions":[{"id":"open5pld7A","vendor_id":"gl9avJnaG1","ninja_category_id":""}]}\n\nTo match to an existing expense:\n\n{"transactions":[{"id":"Jxbo2qKagw","expense_id":"7N1aMM1aWm"}]}\n',
  operationId: 'matchBankTransactions',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Action paramters',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Bulk Action response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankTransactionRulesRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_transaction_rules',
  tags: ['bank_transaction_rules'],
  summary: 'Gets a list of bank_transaction_rules',
  description: 'Lists all bank transaction rules',
  operationId: 'getBankTransactionRules',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      rows: z
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
        .openapi({
          param: {
            name: 'rows',
            in: 'query',
            description: 'The number of bank integrations to return',
            required: false,
            schema: { type: 'number', format: 'integer' },
            example: 50,
          },
        }),
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortBankTransactionRulesParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of bank integrations',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(BankTransactionRuleSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1BankTransactionRulesRoute = createRoute({
  method: 'post',
  path: '/api/v1/bank_transaction_rules',
  tags: ['bank_transaction_rules'],
  summary: 'Adds a bank_transaction rule',
  description: 'Adds an bank_transaction to a company',
  operationId: 'storeBankTransactionRule',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved bank_transaction rule object',
      content: { 'application/json': { schema: BankTransactionRuleSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankTransactionRulesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_transaction_rules/{id}',
  tags: ['bank_transaction_rules'],
  summary: 'Shows a bank_transaction',
  description: 'Displays a bank_transaction by id',
  operationId: 'showBankTransactionRule',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Bank Transaction RuleHashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the bank_transaction rule object',
      content: { 'application/json': { schema: BankTransactionRuleSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1BankTransactionRulesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/bank_transaction_rules/{id}',
  tags: ['bank_transaction_rules'],
  summary: 'Updates a bank_transaction Rule',
  description: 'Handles the updating of a bank_transaction rule by id',
  operationId: 'updateBankTransactionRule',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Bank Transaction Rule Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the bank_transaction rule object',
      content: { 'application/json': { schema: BankTransactionRuleSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1BankTransactionRulesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/bank_transaction_rules/{id}',
  tags: ['bank_transaction_rules'],
  summary: 'Deletes a bank_transaction rule',
  description: 'Handles the deletion of a bank_transaction rule by id',
  operationId: 'deleteBankTransactionRule',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Bank Transaction Rule Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankTransactionRulesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_transaction_rules/{id}/edit',
  tags: ['bank_transaction_rules'],
  summary: 'Shows a bank_transaction for editing',
  description: 'Displays a bank_transaction by id',
  operationId: 'editBankTransactionRule',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Bank Transaction Rule Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the bank_transaction rule object',
      content: { 'application/json': { schema: BankTransactionRuleSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1BankTransactionRulesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/bank_transaction_rules/create',
  tags: ['bank_transaction_rules'],
  summary: 'Gets a new blank bank_transaction rule object',
  description: 'Returns a blank object with default values',
  operationId: 'getBankTransactionRulesCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank bank_transaction rule object',
      content: { 'application/json': { schema: BankTransactionRuleSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1BankTransactionRulesBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/bank_transaction_rules/bulk',
  tags: ['bank_transaction_rules'],
  summary: 'Performs bulk actions on an array of bank_transaction rules',
  operationId: 'bulkBankTransactionRules',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Action paramters',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Bulk Action response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ChartsTotalsRoute = createRoute({
  method: 'post',
  path: '/api/v1/charts/totals',
  tags: ['charts'],
  summary: 'Get chart data',
  description: 'Get chart data',
  operationId: 'getChartTotals',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      rows: z
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
        .openapi({
          param: {
            name: 'rows',
            in: 'query',
            description: 'The chart',
            required: false,
            schema: { type: 'number', format: 'integer' },
            example: 50,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'json dataset of chart data',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ChartsTotalsV2Route = createRoute({
  method: 'post',
  path: '/api/v1/charts/totals_v2',
  tags: ['charts'],
  summary: 'Get chart data v2',
  description: 'Get chart data (v2)',
  operationId: 'getChartTotalsV2',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'json dataset of chart data',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1ChartsChartSummaryV2Route = createRoute({
  method: 'post',
  path: '/api/v1/charts/chart_summary_v2',
  tags: ['charts'],
  summary: 'Get chart summary v2',
  description: 'Get chart summary (v2)',
  operationId: 'getChartSummaryV2',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'json dataset of chart summary',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1ChartsCalculatedFieldsRoute = createRoute({
  method: 'post',
  path: '/api/v1/charts/calculated_fields',
  tags: ['charts'],
  summary: 'Get calculated fields',
  description: 'Get chart calculated fields',
  operationId: 'getChartCalculatedFields',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'json dataset of calculated fields',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1ClientGatewayTokensRoute = createRoute({
  method: 'get',
  path: '/api/v1/client_gateway_tokens',
  tags: ['client_gateway_tokens'],
  summary: 'List of client payment tokens',
  description:
    'Lists client_gateway_tokens, search and filters allow fine grained lists to be generated.\n\n    Query parameters can be added to performed more fine grained filtering of the client_gateway_tokens, these are handled by the ClientGatewayTokenFilters class which defines the methods available',
  operationId: 'getClientGatewayTokens',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of client_gateway_tokens',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ClientGatewayTokenSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ClientGatewayTokensRoute = createRoute({
  method: 'post',
  path: '/api/v1/client_gateway_tokens',
  tags: ['client_gateway_tokens'],
  summary: 'Adds a client payment token',
  description: 'Adds a client payment token to a company',
  operationId: 'storeClientGatewayToken',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved client payment token object',
      content: { 'application/json': { schema: ClientGatewayTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ClientGatewayTokensIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/client_gateway_tokens/{id}',
  tags: ['client_gateway_tokens'],
  summary: 'Shows a client payment token',
  description: 'Displays a client payment token by id',
  operationId: 'showClientGatewayToken',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ClientGatewayToken Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the client payment token object',
      content: { 'application/json': { schema: ClientGatewayTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1ClientGatewayTokensIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/client_gateway_tokens/{id}',
  tags: ['client_gateway_tokens'],
  summary: 'Updates a client payment token',
  description: 'Handles the updating of a client payment token by id',
  operationId: 'updateClientGatewayToken',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ClientGatewayToken Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the client payment token object',
      content: { 'application/json': { schema: ClientGatewayTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1ClientGatewayTokensIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/client_gateway_tokens/{id}',
  tags: ['client_gateway_tokens'],
  summary: 'Deletes a client',
  description: 'Handles the deletion of a client payment token by id',
  operationId: 'deleteClientGatewayToken',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ClientGatewayToken Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ClientGatewayTokensIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/client_gateway_tokens/{id}/edit',
  tags: ['client_gateway_tokens'],
  summary: 'Shows a client payment token for editting',
  description: 'Displays a client by id',
  operationId: 'editClientGatewayToken',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ClientGatewayToken Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the client payment token object',
      content: { 'application/json': { schema: ClientGatewayTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ClientGatewayTokensCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/client_gateway_tokens/create',
  tags: ['client_gateway_tokens'],
  summary: 'Gets a new blank client payment token object',
  description: 'Returns a blank object with default values',
  operationId: 'getClientGatewayTokensCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank client payment token object',
      content: { 'application/json': { schema: ClientGatewayTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1CompaniesRoute = createRoute({
  method: 'get',
  path: '/api/v1/companies',
  tags: ['companies'],
  summary: 'Gets a list of companies',
  description:
    'Lists companies, search and filters allow fine grained lists to be generated.\n\n        Query parameters can be added to performed more fine grained filtering of the companies, these are handled by the CompanyFilters class which defines the methods available',
  operationId: 'getCompanies',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of companies',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(CompanySchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1CompaniesRoute = createRoute({
  method: 'post',
  path: '/api/v1/companies',
  tags: ['companies'],
  summary: 'Adds a company',
  description: 'Adds an company to the system',
  operationId: 'storeCompany',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved company object',
      content: { 'application/json': { schema: CompanySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1CompaniesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/companies/create',
  tags: ['companies'],
  summary: 'Gets a new blank company object',
  description: 'Returns a blank object with default values',
  operationId: 'getCompaniesCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank company object',
      content: { 'application/json': { schema: CompanySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1CompaniesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/companies/{id}',
  tags: ['companies'],
  summary: 'Shows an company',
  description: 'Displays an company by id',
  operationId: 'showCompany',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Company Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the company object',
      content: { 'application/json': { schema: CompanySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1CompaniesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/companies/{id}',
  tags: ['companies'],
  summary: 'Updates an company',
  description: 'Handles the updating of an company by id',
  operationId: 'updateCompany',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Company Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the company object',
      content: { 'application/json': { schema: CompanySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1CompaniesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/companies/{id}',
  tags: ['companies'],
  summary: 'Deletes a company',
  description: 'Handles the deletion of an company by id',
  operationId: 'deleteCompany',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Company Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1CompaniesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/companies/{id}/edit',
  tags: ['companies'],
  summary: 'Shows an company for editting',
  description: 'Displays an company by id',
  operationId: 'editCompany',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Company Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the company object',
      content: { 'application/json': { schema: CompanySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1CompaniesIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/companies/{id}/upload',
  tags: ['companies'],
  summary: 'Uploads a document to a company',
  description: 'Handles the uploading of a document to a company',
  operationId: 'uploadCompanies',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Company Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the client object',
      content: { 'application/json': { schema: CompanySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1CompaniesCompanyDefaultRoute = createRoute({
  method: 'post',
  path: '/api/v1/companies/{company}/default',
  tags: ['companies'],
  summary: 'Sets the company as the default company.',
  description: 'Sets the company as the default company.',
  operationId: 'setDefaultCompany',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      company: z
        .string()
        .openapi({
          param: {
            name: 'company',
            in: 'path',
            description: 'The Company Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the company object',
      content: { 'application/json': { schema: CompanySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1CompaniesCurrentRoute = createRoute({
  method: 'post',
  path: '/api/v1/companies/current',
  tags: ['companies'],
  summary: 'Returns the current comapny',
  description: 'Returns the current company based on the API token passed in',
  operationId: 'showCurrentCompany',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the company object',
      content: { 'application/json': { schema: CompanySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1CompanyGatewaysRoute = createRoute({
  method: 'get',
  path: '/api/v1/company_gateways',
  tags: ['company_gateways'],
  summary: 'Gets a list of company_gateways',
  description:
    'Lists company_gateways, search and filters allow fine grained lists to be generated.\n\n        Query parameters can be added to performed more fine grained filtering of the company_gateways, these are handled by the CompanyGatewayFilters class which defines the methods available',
  operationId: 'getCompanyGateways',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortCompanyGatewaysParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of company_gateways',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(CompanyGatewaySchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1CompanyGatewaysRoute = createRoute({
  method: 'post',
  path: '/api/v1/company_gateways',
  tags: ['company_gateways'],
  summary: 'Adds a CompanyGateway',
  description: 'Adds an CompanyGateway to the system',
  operationId: 'storeCompanyGateway',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved CompanyGateway object',
      content: { 'application/json': { schema: CompanyGatewaySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1CompanyGatewaysCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/company_gateways/create',
  tags: ['company_gateways'],
  summary: 'Gets a new blank CompanyGateway object',
  description: 'Returns a blank object with default values',
  operationId: 'getCompanyGatewaysCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank CompanyGateway object',
      content: { 'application/json': { schema: CompanyGatewaySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1CompanyGatewaysIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/company_gateways/{id}',
  tags: ['company_gateways'],
  summary: 'Shows an CompanyGateway',
  description: 'Displays an CompanyGateway by id',
  operationId: 'showCompanyGateway',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The CompanyGateway Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the CompanyGateway object',
      content: { 'application/json': { schema: CompanyGatewaySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1CompanyGatewaysIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/company_gateways/{id}',
  tags: ['company_gateways'],
  summary: 'Updates an CompanyGateway',
  description: 'Handles the updating of an CompanyGateway by id',
  operationId: 'updateCompanyGateway',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The CompanyGateway Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the CompanyGateway object',
      content: { 'application/json': { schema: CompanyGatewaySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1CompanyGatewaysIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/company_gateways/{id}',
  tags: ['company_gateways'],
  summary: 'Deletes a CompanyGateway',
  description: 'Handles the deletion of an CompanyGateway by id',
  operationId: 'deleteCompanyGateway',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The CompanyGateway Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1CompanyGatewaysIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/company_gateways/{id}/edit',
  tags: ['company_gateways'],
  summary: 'Shows an CompanyGateway for editting',
  description: 'Displays an CompanyGateway by id',
  operationId: 'editCompanyGateway',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The CompanyGateway Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the CompanyGateway object',
      content: { 'application/json': { schema: CompanyGatewaySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1CompanyGatewaysBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/company_gateways/bulk',
  tags: ['company_gateways'],
  summary: 'Performs bulk actions on an array of company_gateways',
  operationId: 'bulkCompanyGateways',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Array of company gateway IDs',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Company Gateways response',
      content: { 'application/json': { schema: CompanyGatewaySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1CompanyLedgerRoute = createRoute({
  method: 'get',
  path: '/api/v1/company_ledger',
  tags: ['company_ledger'],
  summary: 'Gets a list of company_ledger',
  description: 'Lists the company_ledger.',
  operationId: 'getCompanyLedger',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list of company_ledger',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(CompanyLedgerSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1CompanyUsersRoute = createRoute({
  method: 'post',
  path: '/api/v1/company_users',
  tags: ['company_user'],
  summary: 'Update a company user record',
  description:
    'Attempts to update a company user record. A company user can modify only their settings fields. Full access for Admin users',
  operationId: 'updateCompanyUser',
  request: { headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }) },
  responses: {
    200: {
      description: 'The Company User response',
      content: { 'application/json': { schema: CompanyUserSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ConnectedAccountRoute = createRoute({
  method: 'post',
  path: '/api/v1/connected_account',
  tags: ['connected_account'],
  summary: 'Connect an oauth user to an existing user',
  description: 'Refreshes the dataset',
  operationId: 'postConnectedAccount',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      include_static: IncludeStaticParamsSchema,
      clear_cache: ClearCacheParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The Company User response',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1DesignsRoute = createRoute({
  method: 'get',
  path: '/api/v1/designs',
  tags: ['designs'],
  summary: 'Gets a list of designs',
  description: 'Lists designs',
  operationId: 'getDesigns',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortDesignsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of designs',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DesignSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1DesignsRoute = createRoute({
  method: 'post',
  path: '/api/v1/designs',
  tags: ['designs'],
  summary: 'Adds a design',
  description: 'Adds an design to a company',
  operationId: 'storeDesign',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved design object',
      content: { 'application/json': { schema: DesignSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1DesignsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/designs/{id}',
  tags: ['designs'],
  summary: 'Shows a design',
  description: 'Displays a design by id',
  operationId: 'showDesign',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Design Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the expense object',
      content: { 'application/json': { schema: DesignSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1DesignsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/designs/{id}',
  tags: ['designs'],
  summary: 'Updates a design',
  description: 'Handles the updating of a design by id',
  operationId: 'updateDesign',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Design Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the design object',
      content: { 'application/json': { schema: DesignSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1DesignsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/designs/{id}',
  tags: ['designs'],
  summary: 'Deletes a design',
  description: 'Handles the deletion of a design by id',
  operationId: 'deleteDesign',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Design Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1DesignsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/designs/{id}/edit',
  tags: ['designs'],
  summary: 'Shows a design for editting',
  description: 'Displays a design by id',
  operationId: 'editDesign',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Design Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the design object',
      content: { 'application/json': { schema: DesignSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1DesignsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/designs/create',
  tags: ['designs'],
  summary: 'Gets a new blank design object',
  description: 'Returns a blank object with default values',
  operationId: 'getDesignsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank design object',
      content: { 'application/json': { schema: DesignSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1DesignsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/designs/bulk',
  tags: ['designs'],
  summary: 'Performs bulk actions on an array of designs',
  operationId: 'bulkDesigns',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'User credentials',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Design User response',
      content: { 'application/json': { schema: DesignSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1DocumentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/documents',
  tags: ['documents'],
  summary: 'Gets a list of documents',
  description:
    'Lists documents, search and filters allow fine grained lists to be generated.\n\n    Query parameters can be added to performed more fine grained filtering of the documents, these are handled by the DocumentsFilters class which defines the methods available',
  operationId: 'getDocuments',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortDocumentsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of documents',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(DocumentSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1EmailsRoute = createRoute({
  method: 'post',
  path: '/api/v1/emails',
  tags: ['emails'],
  summary: 'Sends an email for an entity',
  description: 'Sends an email for an entity',
  operationId: 'sendEmailTemplate',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      description: 'Required fields to send an email',
      content: {
        'application/json': {
          schema: z
            .object({
              subject: z.string().exactOptional().openapi({ description: 'The email subject' }),
              body: z.string().exactOptional().openapi({ description: 'The email body' }),
              entity: z.string().openapi({ description: 'The entity name' }),
              entity_id: z.string().openapi({ description: 'The entity_id' }),
              cc_email: z
                .string()
                .exactOptional()
                .openapi({ description: "The email address of a user to be CC'd on the email" }),
              template: z
                .enum([
                  'email_template_invoice',
                  'email_template_quote',
                  'email_template_credit',
                  'email_template_payment',
                  'email_template_payment_partial',
                  'email_template_statement',
                  'email_template_reminder1',
                  'email_template_reminder2',
                  'email_template_reminder3',
                  'email_template_reminder_endless',
                  'email_template_custom1',
                  'email_template_custom2',
                  'email_template_custom3',
                  'email_template_purchase_order',
                  'email_quote_template_reminder1',
                ])
                .openapi({
                  description: 'The template required',
                  example: 'email_template_invoice',
                }),
            })
            .openapi({ required: ['entity', 'entity_id', 'template'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: TemplateSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1ExpenseCategoriesRoute = createRoute({
  method: 'get',
  path: '/api/v1/expense_categories',
  tags: ['expense_categories'],
  summary: 'Gets a list of expense_categories',
  description: 'Lists tax rates',
  operationId: 'getExpenseCategorys',
  request: {
    query: z.object({
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortExpenseCategoriesParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of expense_categories',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ExpenseCategorySchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ExpenseCategoriesRoute = createRoute({
  method: 'post',
  path: '/api/v1/expense_categories',
  tags: ['expense_categories'],
  summary: 'Adds a expense category',
  description: 'Adds an expense category to the system',
  operationId: 'storeExpenseCategory',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved invoice object',
      content: { 'application/json': { schema: ExpenseCategorySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1ExpenseCategoriesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/expense_categories/create',
  tags: ['expense_categories'],
  summary: 'Gets a new blank Expens Category object',
  description: 'Returns a blank object with default values',
  operationId: 'getExpenseCategoryCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A blank Expens Category object',
      content: { 'application/json': { schema: ExpenseCategorySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1ExpenseCategoriesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/expense_categories/{id}',
  tags: ['expense_categories'],
  summary: 'Shows a Expens Category',
  description: 'Displays an ExpenseCategory by id',
  operationId: 'showExpenseCategory',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ExpenseCategory Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Expens Category object',
      content: { 'application/json': { schema: ExpenseCategorySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1ExpenseCategoriesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/expense_categories/{id}',
  tags: ['expense_categories'],
  summary: 'Updates a tax rate',
  description: 'Handles the updating of a tax rate by id',
  operationId: 'updateExpenseCategory',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ExpenseCategory Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the ExpenseCategory object',
      content: { 'application/json': { schema: ExpenseCategorySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1ExpenseCategoriesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/expense_categories/{id}',
  tags: ['expense_categories'],
  summary: 'Deletes a ExpenseCategory',
  description: 'Handles the deletion of an ExpenseCategory by id',
  operationId: 'deleteExpenseCategory',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ExpenseCategory Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1ExpenseCategoriesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/expense_categories/{id}/edit',
  tags: ['expense_categories'],
  summary: 'Shows a Expens Category for editting',
  description: 'Displays a Expens Category by id',
  operationId: 'editExpenseCategory',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The ExpenseCategory Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Expens Category object',
      content: { 'application/json': { schema: ExpenseCategorySchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ExpenseCategoriesBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/expense_categories/bulk',
  tags: ['expense_categories'],
  summary: 'Performs bulk actions on an array of ExpenseCategorys',
  operationId: 'bulkExpenseCategorys',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Expens Categorys',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The ExpenseCategory List response',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1ExpensesRoute = createRoute({
  method: 'get',
  path: '/api/v1/expenses',
  tags: ['expenses'],
  summary: 'Gets a list of expenses',
  description:
    'Lists expenses, search and filters allow fine grained lists to be generated.\n\n    Query parameters can be added to performed more fine grained filtering of the expenses, these are handled by the ExpenseFilters class which defines the methods available',
  operationId: 'getExpenses',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortExpensesParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of expenses',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ExpenseSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ExpensesRoute = createRoute({
  method: 'post',
  path: '/api/v1/expenses',
  tags: ['expenses'],
  summary: 'Adds an expense',
  description: 'Adds a expense to a company',
  operationId: 'storeExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved expense object',
      content: { 'application/json': { schema: ExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1ExpensesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/expenses/{id}',
  tags: ['expenses'],
  summary: 'Shows a expense',
  description: 'Displays a expense by id',
  operationId: 'showExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Expense Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the expense object',
      content: { 'application/json': { schema: ExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1ExpensesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/expenses/{id}',
  tags: ['expenses'],
  summary: 'Updates a expense',
  description: 'Handles the updating of a expense by id',
  operationId: 'updateExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Expense Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the expense object',
      content: { 'application/json': { schema: ExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1ExpensesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/expenses/{id}',
  tags: ['expenses'],
  summary: 'Deletes a expense',
  description: 'Handles the deletion of a expense by id',
  operationId: 'deleteExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Expense Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1ExpensesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/expenses/{id}/edit',
  tags: ['expenses'],
  summary: 'Shows a expense for editing',
  description: 'Displays a client by id',
  operationId: 'editExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Expense Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the expense object',
      content: { 'application/json': { schema: ExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1ExpensesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/expenses/create',
  tags: ['expenses'],
  summary: 'Gets a new blank expense object',
  description: 'Returns a blank object with default values',
  operationId: 'getExpensesCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank expense object',
      content: { 'application/json': { schema: ExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ExpensesBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/expenses/bulk',
  tags: ['expenses'],
  summary: 'Performs bulk actions on an array of expenses',
  operationId: 'bulkExpenses',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'User credentials',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Expense User response',
      content: { 'application/json': { schema: ExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ExpensesIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/expenses/{id}/upload',
  tags: ['expense'],
  summary: 'Uploads a document to a expense',
  description: 'Handles the uploading of a document to a expense',
  operationId: 'uploadExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Expense Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Expense object',
      content: { 'application/json': { schema: ExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ExportRoute = createRoute({
  method: 'post',
  path: '/api/v1/export',
  tags: ['export'],
  summary: 'Export data from the system',
  description: 'Export data from the system',
  operationId: 'getExport',
  request: { headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1GroupSettingsRoute = createRoute({
  method: 'get',
  path: '/api/v1/group_settings',
  tags: ['group_settings'],
  summary: 'Gets a list of group_settings',
  description:
    'Lists group_settings, search and filters allow fine grained lists to be generated.\n\n        Query parameters can be added to performed more fine grained filtering of the group_settings, these are handled by the GroupSettingFilters class which defines the methods available',
  operationId: 'getGroupSettings',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortGroupSettingsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of group_settings',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(GroupSettingSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1GroupSettingsRoute = createRoute({
  method: 'post',
  path: '/api/v1/group_settings',
  tags: ['group_settings'],
  summary: 'Adds a GroupSetting',
  description: 'Adds an GroupSetting to the system',
  operationId: 'storeGroupSetting',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved GroupSetting object',
      content: { 'application/json': { schema: GroupSettingSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1GroupSettingsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/group_settings/create',
  tags: ['group_settings'],
  summary: 'Gets a new blank GroupSetting object',
  description: 'Returns a blank object with default values',
  operationId: 'getGroupSettingsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank GroupSetting object',
      content: { 'application/json': { schema: GroupSettingSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1GroupSettingsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/group_settings/{id}',
  tags: ['group_settings'],
  summary: 'Shows an GroupSetting',
  description: 'Displays an GroupSetting by id',
  operationId: 'showGroupSetting',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The GroupSetting Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the GroupSetting object',
      content: { 'application/json': { schema: GroupSettingSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1GroupSettingsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/group_settings/{id}',
  tags: ['group_settings'],
  summary: 'Updates an GroupSetting',
  description: 'Handles the updating of an GroupSetting by id',
  operationId: 'updateGroupSetting',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The GroupSetting Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the GroupSetting object',
      content: { 'application/json': { schema: GroupSettingSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1GroupSettingsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/group_settings/{id}',
  tags: ['group_settings'],
  summary: 'Deletes a GroupSetting',
  description: 'Handles the deletion of an GroupSetting by id',
  operationId: 'deleteGroupSetting',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The GroupSetting Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1GroupSettingsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/group_settings/{id}/edit',
  tags: ['group_settings'],
  summary: 'Shows an GroupSetting for editting',
  description: 'Displays an GroupSetting by id',
  operationId: 'editGroupSetting',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The GroupSetting Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the GroupSetting object',
      content: { 'application/json': { schema: GroupSettingSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1GroupSettingsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/group_settings/bulk',
  tags: ['group_settings'],
  summary: 'Performs bulk actions on an array of group_settings',
  operationId: 'bulkGroupSettings',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'An array of group_settings ids',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Bulk Action response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1GroupSettingsIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/group_settings/{id}/upload',
  tags: ['group_settings'],
  summary: 'Uploads a document to a group setting',
  description: 'Handles the uploading of a document to a group setting',
  operationId: 'uploadGroupSetting',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Group Setting Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Group Setting object',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1PreimportRoute = createRoute({
  method: 'post',
  path: '/api/v1/preimport',
  tags: ['imports'],
  summary: 'Pre Import CSV data',
  description:
    "The preimport endpoint is the first step when importing CSV data into Invoice Ninja. It validates your file(s) and returns the column headers found in each CSV, allowing you to map them to system fields before performing the actual import.\n\n**How it works**\n\n1. Set `import_type` to indicate the entity type (e.g. `invoice`, `quote`, `client`, `product`, `payment`, `vendor`, `expense`).\n2. Attach one or more CSV files using the `files[]` parameter, keyed by entity type:\n   - `files[invoice]` — invoice records\n   - `files[client]` — client records\n   - `files[product]` — product records\n   - `files[payment]` — payment records\n   - `files[vendor]` — vendor records\n   - `files[expense]` — expense records\n3. The response returns the detected column headers for each uploaded file so you can build a field mapping for the subsequent `/api/v1/import` call.\n\nYou may upload multiple entity files in a single request. Only include the entity types relevant to your import.\n\n**Example**\n\n```bash\ncurl -X POST 'https://invoiceninja.com/api/v1/preimport' \\\n  -H 'X-API-TOKEN: YOUR_API_TOKEN_HERE' \\\n  -H 'Accept: application/json' \\\n  -F 'import_type=invoice' \\\n  -F 'files[invoice]=@invoices.csv' \\\n  -F 'files[client]=@clients.csv'\n```\n",
  operationId: 'preimport',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'The CSV file(s) and import type',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              import_type: z
                .string()
                .openapi({ description: 'The type of import being performed', example: 'invoice' }),
              'files[invoice]': z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'CSV file for invoices',
                }),
              'files[client]': z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'CSV file for clients' }),
              'files[product]': z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'CSV file for products',
                }),
              'files[payment]': z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'CSV file for payments',
                }),
              'files[vendor]': z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'CSV file for vendors' }),
              'files[expense]': z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'CSV file for expenses',
                }),
            })
            .openapi({ required: ['import_type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Returns a hash identifying the uploaded file(s) and a mappings object for each entity type submitted.\n\n- **hash** — A unique reference to the uploaded file(s). Pass this to `/api/v1/import` when executing the import.\n- **mappings** — An object keyed by entity type (e.g. `invoice`, `client`). Each entity contains:\n  - **available** — The system fields that can be mapped to for this entity (e.g. `invoice.number`, `client.name`, `item.cost`).\n  - **headers** — A two-dimensional array. The first element contains the column headers detected from your CSV. The second element contains a sample data row, useful for previewing values during field mapping.\n  - **hints** — An array of suggested mappings, one per CSV column. Each value is an index into the `available` array representing the best-guess system field for that column, or `null` when no match could be determined.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              hash: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique reference to the uploaded file(s), required for the subsequent import call.',
                  example: 'MvKeSwMnhAfgkzdYKgxM5ummxGbLIdNm',
                }),
              mappings: z
                .record(
                  z.string(),
                  z
                    .object({
                      available: z
                        .array(z.string())
                        .exactOptional()
                        .openapi({
                          description: 'System fields available for mapping.',
                          example: [
                            'invoice.number',
                            'invoice.amount',
                            'client.name',
                            'item.quantity',
                            'item.cost',
                          ],
                        }),
                      headers: z
                        .array(z.array(z.string()))
                        .exactOptional()
                        .openapi({
                          description:
                            'A two-element array: the first element is the CSV column headers, the second is a sample data row.',
                          example: [
                            ['Client Name', 'Invoice Number', 'Amount'],
                            ['Acme Corp', 'INV-001', '1500.00'],
                          ],
                        }),
                      hints: z
                        .array(z.int().nullable())
                        .exactOptional()
                        .openapi({
                          description:
                            'Suggested mapping indices into the `available` array for each CSV column. A value of null indicates no suggested match.',
                          example: [4, 0, 2],
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'An object keyed by entity type containing field mapping data for each uploaded CSV.',
                }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ImportRoute = createRoute({
  method: 'post',
  path: '/api/v1/import',
  tags: ['imports'],
  summary: 'Import CSV data',
  description:
    'The import endpoint executes the actual data import. Call this after `/api/v1/preimport` has returned the file hash, available fields, and column headers.\n\nUsing the data from the preimport response, construct a `column_map` that tells the system how each CSV column maps to a system field. The import runs asynchronously — you will receive an email notification once it completes.\n\n**Request body**\n\n- **hash** — The unique file reference returned by `/api/v1/preimport`.\n- **import_type** — The source format (e.g. `csv`, `freshbooks`, `invoice2go`, `invoicely`).\n- **skip_header** — Set to `true` to skip the first row of the CSV (the header row).\n- **column_map** — An object keyed by entity type (e.g. `invoice`, `client`). Each entity contains:\n  - **mapping** — An object where each key is the CSV column index (as a string) and each value is the target system field from the `available` array, or an empty string `""` to skip that column.\n\n---\n\n### Available mapping fields\n\nEach mapping value uses the format `entity.property`. The tables below list every available field per entity type.\n\n### Data Matching:\n\n#### Client Matching:\n  Matching a record to a client is performed by using the clients email address (first) or the clients (exact) name. If no match is found, a new client is created.\n\n#### Multi line item invoice/quote/credits/recurring invoice Matching:\n  If you need to import multiple line items into an invoice (other other entity) you will want to assign the same (unique) invoice number to each row in the csv file, the system will group together lines where the invoice number is the same and create line items for each row.\n\n#### Invoice fields (`files[invoice]`)\n\n| Field | Description |\n|---|---|\n| `invoice.number` | Invoice number |\n| `invoice.user_id` | Assigned user |\n| `invoice.amount` | Invoice amount |\n| `invoice.balance` | Outstanding balance |\n| `invoice.discount` | Discount value |\n| `invoice.po_number` | Purchase order number |\n| `invoice.date` | Invoice date |\n| `invoice.due_date` | Due date |\n| `invoice.terms` | Invoice terms |\n| `invoice.status` | Invoice status |\n| `invoice.public_notes` | Public notes (visible to client) |\n| `invoice.is_sent` | Whether the invoice has been sent |\n| `invoice.private_notes` | Private notes (internal only) |\n| `invoice.uses_inclusive_taxes` | Whether tax amounts are inclusive |\n| `invoice.tax_name1` | Tax name (tier 1) |\n| `invoice.tax_rate1` | Tax rate (tier 1) |\n| `invoice.tax_name2` | Tax name (tier 2) |\n| `invoice.tax_rate2` | Tax rate (tier 2) |\n| `invoice.tax_name3` | Tax name (tier 3) |\n| `invoice.tax_rate3` | Tax rate (tier 3) |\n| `invoice.is_amount_discount` | Whether discount is a fixed amount |\n| `invoice.footer` | Invoice footer |\n| `invoice.partial` | Partial/deposit amount |\n| `invoice.partial_due_date` | Partial payment due date |\n| `invoice.custom_value1` | Custom field 1 |\n| `invoice.custom_value2` | Custom field 2 |\n| `invoice.custom_value3` | Custom field 3 |\n| `invoice.custom_value4` | Custom field 4 |\n| `invoice.custom_surcharge1` | Custom surcharge 1 |\n| `invoice.custom_surcharge2` | Custom surcharge 2 |\n| `invoice.custom_surcharge3` | Custom surcharge 3 |\n| `invoice.custom_surcharge4` | Custom surcharge 4 |\n| `invoice.exchange_rate` | Currency exchange rate |\n| `client.name` | Client name |\n| `client.email` | Client email |\n| `payment.date` | Payment date |\n| `payment.amount` | Payment amount |\n| `payment.transaction_reference` | Payment transaction reference |\n| `item.quantity` | Line item quantity |\n| `item.cost` | Line item unit cost |\n| `item.product_key` | Line item product key |\n| `item.notes` | Line item description |\n| `item.discount` | Line item discount |\n| `item.is_amount_discount` | Whether line item discount is a fixed amount |\n| `item.tax_name1` | Line item tax name (tier 1) |\n| `item.tax_rate1` | Line item tax rate (tier 1) |\n| `item.tax_name2` | Line item tax name (tier 2) |\n| `item.tax_rate2` | Line item tax rate (tier 2) |\n| `item.tax_name3` | Line item tax name (tier 3) |\n| `item.tax_rate3` | Line item tax rate (tier 3) |\n| `item.custom_value1` | Line item custom field 1 |\n| `item.custom_value2` | Line item custom field 2 |\n| `item.custom_value3` | Line item custom field 3 |\n| `item.custom_value4` | Line item custom field 4 |\n| `item.type_id` | Line item type |\n\n#### Client fields (`files[client]`)\n\n| Field | Description |\n|---|---|\n| `client.name` | Client name |\n| `client.user_id` | Assigned user |\n| `client.balance` | Account balance |\n| `client.paid_to_date` | Total paid to date |\n| `client.currency_id` | Currency |\n| `client.website` | Website URL |\n| `client.private_notes` | Private notes |\n| `client.industry_id` | Industry |\n| `client.size_id` | Company size |\n| `client.address1` | Address line 1 |\n| `client.address2` | Address line 2 |\n| `client.city` | City |\n| `client.state` | State/province |\n| `client.postal_code` | Postal code |\n| `client.country_id` | Country |\n| `client.custom_value1` | Custom field 1 |\n| `client.custom_value2` | Custom field 2 |\n| `client.custom_value3` | Custom field 3 |\n| `client.custom_value4` | Custom field 4 |\n| `client.shipping_address1` | Shipping address line 1 |\n| `client.shipping_address2` | Shipping address line 2 |\n| `client.shipping_city` | Shipping city |\n| `client.shipping_state` | Shipping state/province |\n| `client.shipping_postal_code` | Shipping postal code |\n| `client.shipping_country_id` | Shipping country |\n| `client.payment_terms` | Default payment terms |\n| `client.vat_number` | VAT/tax number |\n| `client.id_number` | ID number |\n| `client.public_notes` | Public notes |\n| `client.phone` | Phone number |\n| `contact.first_name` | Contact first name |\n| `contact.last_name` | Contact last name |\n| `contact.email` | Contact email |\n| `contact.phone` | Contact phone |\n| `contact.custom_value1` | Contact custom field 1 |\n| `contact.custom_value2` | Contact custom field 2 |\n| `contact.custom_value3` | Contact custom field 3 |\n| `contact.custom_value4` | Contact custom field 4 |\n\n#### Product fields (`files[product]`)\n\n| Field | Description |\n|---|---|\n| `product.product_key` | Product key/name |\n| `product.notes` | Product description |\n| `product.cost` | Product cost |\n| `product.price` | Product price |\n| `product.quantity` | Default quantity |\n| `product.tax_name1` | Tax name (tier 1) |\n| `product.tax_rate1` | Tax rate (tier 1) |\n| `product.tax_name2` | Tax name (tier 2) |\n| `product.tax_rate2` | Tax rate (tier 2) |\n| `product.tax_name3` | Tax name (tier 3) |\n| `product.tax_rate3` | Tax rate (tier 3) |\n| `product.custom_value1` | Custom field 1 |\n| `product.custom_value2` | Custom field 2 |\n| `product.custom_value3` | Custom field 3 |\n| `product.custom_value4` | Custom field 4 |\n| `product.image_url` | Product image URL |\n| `product.in_stock_quantity` | In-stock quantity |\n| `product.tax_category` | Tax category |\n| `product.max_quantity` | Maximum quantity |\n\n#### Payment fields (`files[payment]`)\n\n| Field | Description |\n|---|---|\n| `payment.number` | Payment number |\n| `payment.user_id` | Assigned user |\n| `payment.amount` | Payment amount |\n| `payment.refunded` | Refunded amount |\n| `payment.applied` | Applied amount |\n| `payment.transaction_reference` | Transaction reference |\n| `payment.private_notes` | Private notes |\n| `payment.custom_value1` | Custom field 1 |\n| `payment.custom_value2` | Custom field 2 |\n| `payment.custom_value3` | Custom field 3 |\n| `payment.custom_value4` | Custom field 4 |\n| `payment.client_id` | Client |\n| `payment.invoice_number` | Invoice number |\n| `payment.date` | Payment date |\n| `payment.method` | Payment method |\n\n#### Vendor fields (`files[vendor]`)\n\n| Field | Description |\n|---|---|\n| `vendor.name` | Vendor name |\n| `vendor.phone` | Phone number |\n| `vendor.id_number` | ID number |\n| `vendor.vat_number` | VAT/tax number |\n| `vendor.website` | Website URL |\n| `vendor.first_name` | First name |\n| `vendor.last_name` | Last name |\n| `vendor.email` | Email address |\n| `vendor.currency_id` | Currency |\n| `vendor.public_notes` | Public notes |\n| `vendor.private_notes` | Private notes |\n| `vendor.address1` | Address line 1 |\n| `vendor.address2` | Address line 2 |\n| `vendor.city` | City |\n| `vendor.state` | State/province |\n| `vendor.postal_code` | Postal code |\n| `vendor.country_id` | Country |\n| `vendor.custom_value1` | Custom field 1 |\n| `vendor.custom_value2` | Custom field 2 |\n| `vendor.custom_value3` | Custom field 3 |\n| `vendor.custom_value4` | Custom field 4 |\n| `contact.first_name` | Contact first name |\n| `contact.last_name` | Contact last name |\n| `contact.email` | Contact email |\n| `contact.phone` | Contact phone |\n| `contact.custom_value1` | Contact custom field 1 |\n| `contact.custom_value2` | Contact custom field 2 |\n| `contact.custom_value3` | Contact custom field 3 |\n| `contact.custom_value4` | Contact custom field 4 |\n\n#### Expense fields (`files[expense]`)\n\n| Field | Description |\n|---|---|\n| `expense.vendor` | Vendor name |\n| `expense.client` | Client name |\n| `expense.project` | Project name |\n| `expense.category` | Expense category |\n| `expense.amount` | Expense amount |\n| `expense.currency` | Currency |\n| `expense.date` | Expense date |\n| `expense.payment_type` | Payment type |\n| `expense.payment_date` | Payment date |\n| `expense.transaction_reference` | Transaction reference |\n| `expense.public_notes` | Public notes |\n| `expense.private_notes` | Private notes |\n| `expense.tax_name1` | Tax name (tier 1) |\n| `expense.tax_rate1` | Tax rate (tier 1) |\n| `expense.tax_name2` | Tax name (tier 2) |\n| `expense.tax_rate2` | Tax rate (tier 2) |\n| `expense.tax_name3` | Tax name (tier 3) |\n| `expense.tax_rate3` | Tax rate (tier 3) |\n| `expense.uses_inclusive_taxes` | Whether tax amounts are inclusive |\n| `expense.custom_value1` | Custom field 1 |\n| `expense.custom_value2` | Custom field 2 |\n| `expense.custom_value3` | Custom field 3 |\n| `expense.custom_value4` | Custom field 4 |\n\n#### Quote fields (`files[quote]`)\n\n| Field | Description |\n|---|---|\n| `quote.number` | Quote number |\n| `quote.user_id` | Assigned user |\n| `quote.amount` | Quote amount |\n| `quote.balance` | Outstanding balance |\n| `quote.discount` | Discount value |\n| `quote.po_number` | Purchase order number |\n| `quote.date` | Quote date |\n| `quote.due_date` | Valid until date |\n| `quote.terms` | Quote terms |\n| `quote.status` | Quote status |\n| `quote.public_notes` | Public notes |\n| `quote.is_sent` | Whether the quote has been sent |\n| `quote.private_notes` | Private notes |\n| `quote.uses_inclusive_taxes` | Whether tax amounts are inclusive |\n| `quote.tax_name1` | Tax name (tier 1) |\n| `quote.tax_rate1` | Tax rate (tier 1) |\n| `quote.tax_name2` | Tax name (tier 2) |\n| `quote.tax_rate2` | Tax rate (tier 2) |\n| `quote.tax_name3` | Tax name (tier 3) |\n| `quote.tax_rate3` | Tax rate (tier 3) |\n| `quote.is_amount_discount` | Whether discount is a fixed amount |\n| `quote.footer` | Quote footer |\n| `quote.partial` | Partial/deposit amount |\n| `quote.partial_due_date` | Partial payment due date |\n| `quote.custom_value1` | Custom field 1 |\n| `quote.custom_value2` | Custom field 2 |\n| `quote.custom_value3` | Custom field 3 |\n| `quote.custom_value4` | Custom field 4 |\n| `quote.custom_surcharge1` | Custom surcharge 1 |\n| `quote.custom_surcharge2` | Custom surcharge 2 |\n| `quote.custom_surcharge3` | Custom surcharge 3 |\n| `quote.custom_surcharge4` | Custom surcharge 4 |\n| `quote.exchange_rate` | Currency exchange rate |\n| `client.name` | Client name |\n| `client.email` | Client email |\n| `payment.date` | Payment date |\n| `payment.amount` | Payment amount |\n| `payment.transaction_reference` | Transaction reference |\n| `item.*` | Same line item fields as invoices |\n\n#### Recurring invoice fields (`files[recurring_invoice]`)\n\nSupports all invoice fields above, plus:\n\n| Field | Description |\n|---|---|\n| `invoice.frequency_id` | Recurrence frequency |\n| `invoice.remaining_cycles` | Remaining billing cycles |\n| `invoice.auto_bill` | Auto-bill setting |\n| `invoice.next_send_date` | Next send date (replaces `invoice.date`) |\n\n#### Task fields (`files[task]`)\n\n| Field | Description |\n|---|---|\n| `task.number` | Task number |\n| `task.user_id` | Assigned user |\n| `task.rate` | Hourly rate |\n| `task.description` | Task description |\n| `task.billable` | Whether the task is billable |\n| `task.status` | Task status |\n| `task.start_date` | Start date |\n| `task.end_date` | End date |\n| `task.start_time` | Start time |\n| `task.end_time` | End time |\n| `task.duration` | Duration |\n| `task.custom_value1` | Custom field 1 |\n| `task.custom_value2` | Custom field 2 |\n| `task.custom_value3` | Custom field 3 |\n| `task.custom_value4` | Custom field 4 |\n| `task.notes` | Task notes |\n| `project.name` | Project name |\n| `client.name` | Client name |\n| `client.email` | Client email |\n\n#### Bank transaction fields (`files[bank_transaction]`)\n\n| Field | Description |\n|---|---|\n| `transaction.transaction_id` | Transaction ID |\n| `transaction.amount` | Transaction amount |\n| `transaction.currency` | Currency |\n| `transaction.account_type` | Account type |\n| `transaction.category` | Category |\n| `transaction.category_type` | Category type |\n| `transaction.date` | Transaction date |\n| `transaction.bank_account` | Bank account |\n| `transaction.description` | Description |\n| `transaction.base_type` | Base type |\n| `transaction.payment_type_Credit` | Credit amount |\n| `transaction.payment_type_Debit` | Debit amount |\n| `transaction.participant` | Participant reference |\n| `transaction.participant_name` | Participant name |\n\n---\n\n**Example**\n\n```bash\ncurl -X POST \'https://invoiceninja.com/api/v1/import\' \\\n  -H \'X-API-TOKEN: YOUR_API_TOKEN_HERE\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n    "hash": "MvKeSwMnhAfgkzdYKgxM5ummxGbLIdNm",\n    "import_type": "csv",\n    "skip_header": true,\n    "column_map": {\n      "invoice": {\n        "mapping": {\n          "0": "client.name",\n          "1": "client.email",\n          "2": "",\n          "3": "invoice.number",\n          "4": "invoice.amount"\n        }\n      }\n    }\n  }\'\n```\n',
  operationId: 'postImport',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'The column mapping and file reference for the import',
      content: {
        'application/json': {
          schema: z
            .object({
              hash: z
                .string()
                .openapi({
                  description: 'The unique file reference returned by the preimport endpoint.',
                  example: 'MvKeSwMnhAfgkzdYKgxM5ummxGbLIdNm',
                }),
              import_type: z
                .string()
                .openapi({ description: 'The source format of the import.', example: 'csv' }),
              skip_header: z
                .boolean()
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'When true, the first row of the CSV is treated as a header row and skipped during import.',
                  example: true,
                }),
              column_map: z
                .record(
                  z.string(),
                  z
                    .object({
                      mapping: z
                        .record(z.string(), z.string())
                        .exactOptional()
                        .openapi({
                          description:
                            'Maps CSV column indices (as string keys) to system field names from the `available` array. Use an empty string to skip a column.',
                          example: {
                            '0': 'client.name',
                            '1': 'client.email',
                            '2': '',
                            '3': 'invoice.number',
                            '4': 'invoice.amount',
                          },
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({
                  description:
                    'An object keyed by entity type. Each entity contains a mapping of CSV column indices to system fields.',
                }),
            })
            .openapi({ required: ['hash', 'import_type', 'column_map'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The import has been queued. A notification email will be sent upon completion.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .exactOptional()
                .openapi({
                  example: "Your import has started, we'll send you an email once it completes.",
                }),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ImportJsonRoute = createRoute({
  method: 'post',
  path: '/api/v1/import_json',
  tags: ['import'],
  summary: 'Import data from the system',
  description: 'Import data from the system',
  operationId: 'getImportJson',
  request: { headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1AppleConfirmPurchaseRoute = createRoute({
  method: 'post',
  path: '/api/v1/apple/confirm_purchase',
  tags: ['postmark'],
  summary: 'Processing webhooks from Apple for in app purchases',
  description: 'Adds an credit to the system',
  operationId: 'confirmApplePurchase',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved credit object',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1AppleProcessWebhookRoute = createRoute({
  method: 'post',
  path: '/api/v1/apple/process_webhook',
  tags: ['postmark'],
  summary: 'Processing event webhooks from Apple for in purchase / subscription status update',
  description: 'Adds an credit to the system',
  operationId: 'processAppleWebhook',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved credit object',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1ClaimLicenseRoute = createRoute({
  method: 'get',
  path: '/api/v1/claim_license',
  tags: ['claim_license'],
  summary: 'Attempts to claim a white label license',
  description: 'Attempts to claim a white label license',
  operationId: 'getClaimLicense',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({
      license_key: z
        .string()
        .openapi({
          param: {
            name: 'license_key',
            in: 'query',
            description: 'The license hash',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'd87sh-s755s-s7d76-sdsd8',
          },
        }),
      product_id: z
        .string()
        .openapi({
          param: {
            name: 'product_id',
            in: 'query',
            description: 'The ID of the product purchased.',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: '1',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success!',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1LogoutRoute = createRoute({
  method: 'post',
  path: '/api/v1/logout',
  tags: ['logout'],
  summary: 'Logs the user out of their current session',
  description: 'Logs the user out of their current session',
  operationId: 'getLogout',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema, index: IndexParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success message',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1MigrationPurgeCompanyRoute = createRoute({
  method: 'post',
  path: '/api/v1/migration/purge/{company}',
  tags: ['migration'],
  summary: 'Attempts to purge a company record and all its child records',
  description: 'Attempts to purge a company record and all its child records',
  operationId: 'postPurgeCompany',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      company: z
        .string()
        .openapi({
          param: {
            name: 'company',
            in: 'path',
            description: 'The Company Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1MigrationPurgeSaveSettingsCompanyRoute = createRoute({
  method: 'post',
  path: '/api/v1/migration/purge_save_settings/{company}',
  tags: ['migration'],
  summary:
    'Attempts to purge a companies child records but save the company record and its settings',
  description:
    'Attempts to purge a companies child records but save the company record and its settings',
  operationId: 'postPurgeCompanySaveSettings',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      company: z
        .string()
        .openapi({
          param: {
            name: 'company',
            in: 'path',
            description: 'The Company Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1MigrationStartRoute = createRoute({
  method: 'post',
  path: '/api/v1/migration/start',
  tags: ['migration'],
  summary: 'Starts the migration from previous version of Invoice Ninja',
  description: 'Starts the migration from previous version of Invoice Ninja',
  operationId: 'postStartMigration',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
      'X-API-PASSWORD': XAPIPASSWORDParamsSchema,
    }),
    query: z.object({
      migration: z
        .object({})
        .openapi({
          param: {
            name: 'migration',
            in: 'query',
            description: 'The migraton file',
            required: true,
            schema: { type: 'object', format: 'file' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1OneTimeTokenRoute = createRoute({
  method: 'post',
  path: '/api/v1/one_time_token',
  tags: ['one_time_token'],
  summary: 'Attempts to create a one time token',
  description: 'Attempts to create a one time token',
  operationId: 'postOneTimeToken',
  request: { headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }) },
  responses: {
    200: {
      description: 'The Company User response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1PaymentTermsRoute = createRoute({
  method: 'get',
  path: '/api/v1/payment_terms',
  tags: ['payment_terms'],
  summary: 'Gets a list of payment terms',
  description: 'Lists payment terms',
  operationId: 'getPaymentTerms',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortPaymentTermsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of payment terms',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PaymentTermSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1PaymentTermsRoute = createRoute({
  method: 'post',
  path: '/api/v1/payment_terms',
  tags: ['payment_terms'],
  summary: 'Adds a Payment',
  description: 'Adds a Payment Term to the system',
  operationId: 'storePaymentTerm',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'The payment_terms request',
      content: { 'application/json': { schema: PaymentTermSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved Payment object',
      content: { 'application/json': { schema: PaymentTermSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1PaymentTermsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/payment_terms/create',
  tags: ['payment_terms'],
  summary: 'Gets a new blank PaymentTerm object',
  description: 'Returns a blank object with default values',
  operationId: 'getPaymentTermsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank PaymentTerm object',
      content: { 'application/json': { schema: PaymentSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1PaymentTermsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/payment_terms/{id}',
  tags: ['payment_terms'],
  summary: 'Shows a Payment Term',
  description: 'Displays an Payment Term by id',
  operationId: 'showPaymentTerm',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Payment Term Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Payment Term object',
      content: { 'application/json': { schema: PaymentTermSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1PaymentTermsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/payment_terms/{id}',
  tags: ['payment_terms'],
  summary: 'Updates a Payment Term',
  description: 'Handles the updating of an Payment Termby id',
  operationId: 'updatePaymentTerm',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Payment Term Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Payment Term object',
      content: { 'application/json': { schema: PaymentTermSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1PaymentTermsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/payment_terms/{id}',
  tags: ['payment_termss'],
  summary: 'Deletes a Payment Term',
  description: 'Handles the deletion of an PaymentTerm by id',
  operationId: 'deletePaymentTerm',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Payment Term Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1PaymentTermsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/payment_terms/{id}/edit',
  tags: ['payment_terms'],
  summary: 'Shows an Payment Term for editting',
  description: 'Displays an Payment Term by id',
  operationId: 'editPaymentTerms',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Payment Term Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Payment object',
      content: { 'application/json': { schema: PaymentTermSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1PaymentTermsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/payment_terms/bulk',
  tags: ['payment_terms'],
  summary: 'Performs bulk actions on an array of payment terms',
  operationId: 'bulkPaymentTerms',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Payment Ter,s',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Payment Terms response',
      content: { 'application/json': { schema: PaymentTermSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1PingRoute = createRoute({
  method: 'get',
  path: '/api/v1/ping',
  tags: ['ping'],
  summary: 'Attempts to ping the API',
  description: 'Attempts to ping the API',
  operationId: 'getPing',
  request: { headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }) },
  responses: {
    200: {
      description: 'The company and user name',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
  },
})

export const getApiV1HealthCheckRoute = createRoute({
  method: 'get',
  path: '/api/v1/health_check',
  tags: ['health_check'],
  summary: 'Attempts to get a health check from the API',
  description: 'Attempts to get a health check from the API',
  operationId: 'getHealthCheck',
  request: { headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }) },
  responses: {
    200: {
      description: 'A key/value map of the system health',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
  },
})

export const getApiV1LastErrorRoute = createRoute({
  method: 'get',
  path: '/api/v1/last_error',
  tags: ['ping'],
  summary: 'Returns the last error',
  description: 'Returns the last error from the API',
  operationId: 'getLastError',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Last error response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    default: DefaultResponse,
  },
})

export const postApiV1PostmarkWebhookRoute = createRoute({
  method: 'post',
  path: '/api/v1/postmark_webhook',
  tags: ['postmark'],
  summary: 'Processing webhooks from PostMark',
  description: 'Adds an credit to the system',
  operationId: 'postmarkWebhook',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved credit object',
      content: { 'application/json': { schema: CreditSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1PreviewRoute = createRoute({
  method: 'post',
  path: '/api/v1/preview',
  tags: ['preview'],
  summary: 'Returns a pdf preview',
  description: 'Returns a pdf preview.',
  operationId: 'getPreview',
  request: { headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }) },
  responses: {
    200: {
      description: 'The pdf response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1PreviewPurchaseOrderRoute = createRoute({
  method: 'post',
  path: '/api/v1/preview/purchase_order',
  tags: ['preview'],
  summary: 'Returns a pdf preview for purchase order',
  description: 'Returns a pdf preview for purchase order.',
  operationId: 'getPreviewPurchaseOrder',
  request: { headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }) },
  responses: {
    200: {
      description: 'The pdf response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1RecurringExpensesRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_expenses',
  tags: ['recurring_expenses'],
  summary: 'Gets a list of recurring_expenses',
  description:
    'Lists recurring_expenses, search and filters allow fine grained lists to be generated.\n\n    Query parameters can be added to performed more fine grained filtering of the recurring_expenses, these are handled by the RecurringExpenseFilters class which defines the methods available',
  operationId: 'getRecurringExpenses',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortRecurringExpensesParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of recurring_expenses',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(RecurringExpenseSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1RecurringExpensesRoute = createRoute({
  method: 'post',
  path: '/api/v1/recurring_expenses',
  tags: ['recurring_expenses'],
  summary: 'Adds a recurring expense',
  description: 'Adds a recurring expense to a company',
  operationId: 'storeRecurringExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved recurring expense object',
      content: { 'application/json': { schema: RecurringExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1RecurringExpensesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_expenses/{id}',
  tags: ['recurring_expenses'],
  summary: 'Shows a recurring expense',
  description: 'Displays a recurring expense by id',
  operationId: 'showRecurringExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringExpense Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the recurring_expense object',
      content: { 'application/json': { schema: RecurringExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1RecurringExpensesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/recurring_expenses/{id}',
  tags: ['recurring_expenses'],
  summary: 'Updates a recurring expense',
  description: 'Handles the updating of a recurring expense by id',
  operationId: 'updateRecurringExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringExpense Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the recurring expense object',
      content: { 'application/json': { schema: RecurringExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1RecurringExpensesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/recurring_expenses/{id}',
  tags: ['recurring_expenses'],
  summary: 'Deletes a recurring expense',
  description: 'Handles the deletion of a recurring expense by id',
  operationId: 'deleteRecurringExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringExpense Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1RecurringExpensesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_expenses/{id}/edit',
  tags: ['recurring_expenses'],
  summary: 'Shows a recurring expense for editting',
  description: 'Displays a recurring expense by id',
  operationId: 'editRecurringExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringExpense Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the recurring expense object',
      content: { 'application/json': { schema: RecurringExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1RecurringExpensesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_expenses/create',
  tags: ['recurring_expenses'],
  summary: 'Gets a new blank recurring expense object',
  description: 'Returns a blank object with default values',
  operationId: 'getRecurringExpensesCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank recurring expense object',
      content: { 'application/json': { schema: RecurringExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1RecurringExpensesBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/recurring_expenses/bulk',
  tags: ['recurring_expenses'],
  summary: 'Performs bulk actions on an array of recurring_expenses',
  operationId: 'bulkRecurringExpenses',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'User credentials',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The RecurringExpense User response',
      content: { 'application/json': { schema: RecurringExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1RecurringExpensesIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/recurring_expenses/{id}/upload',
  tags: ['recurring_expense'],
  summary: 'Uploads a document to a recurring_expense',
  description: 'Handles the uploading of a document to a recurring_expense',
  operationId: 'uploadRecurringExpense',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringExpense Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the RecurringExpense object',
      content: { 'application/json': { schema: RecurringExpenseSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1RecurringQuotesRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_quotes',
  tags: ['recurring_quotes'],
  summary: 'Gets a list of recurring_quotes',
  description:
    'Lists recurring_quotes, search and filters allow fine grained lists to be generated.\n\n        Query parameters can be added to performed more fine grained filtering of the recurring_quotes, these are handled by the RecurringQuoteFilters class which defines the methods available',
  operationId: 'getRecurringQuotes',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortRecurringQuotesParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of recurring_quotes',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(RecurringQuoteSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1RecurringQuotesRoute = createRoute({
  method: 'post',
  path: '/api/v1/recurring_quotes',
  tags: ['recurring_quotes'],
  summary: 'Adds a RecurringQuote',
  description: 'Adds an RecurringQuote to the system',
  operationId: 'storeRecurringQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved RecurringQuote object',
      content: { 'application/json': { schema: RecurringQuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1RecurringQuotesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_quotes/create',
  tags: ['recurring_quotes'],
  summary: 'Gets a new blank RecurringQuote object',
  description: 'Returns a blank object with default values',
  operationId: 'getRecurringQuotesCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank RecurringQuote object',
      content: { 'application/json': { schema: RecurringQuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1RecurringQuotesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_quotes/{id}',
  tags: ['recurring_quotes'],
  summary: 'Shows an RecurringQuote',
  description: 'Displays an RecurringQuote by id',
  operationId: 'showRecurringQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringQuote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the RecurringQuote object',
      content: { 'application/json': { schema: RecurringQuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1RecurringQuotesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/recurring_quotes/{id}',
  tags: ['recurring_quotes'],
  summary: 'Updates an RecurringQuote',
  description: 'Handles the updating of an RecurringQuote by id',
  operationId: 'updateRecurringQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringQuote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the RecurringQuote object',
      content: { 'application/json': { schema: RecurringQuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1RecurringQuotesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/recurring_quotes/{id}',
  tags: ['recurring_quotes'],
  summary: 'Deletes a RecurringQuote',
  description: 'Handles the deletion of an RecurringQuote by id',
  operationId: 'deleteRecurringQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringQuote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1RecurringQuotesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_quotes/{id}/edit',
  tags: ['recurring_quotes'],
  summary: 'Shows an RecurringQuote for editting',
  description: 'Displays an RecurringQuote by id',
  operationId: 'editRecurringQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringQuote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the RecurringQuote object',
      content: { 'application/json': { schema: RecurringQuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1RecurringQuotesBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/recurring_quotes/bulk',
  tags: ['recurring_quotes'],
  summary: 'Performs bulk actions on an array of recurring_quotes',
  operationId: 'bulkRecurringQuotes',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Hashed ids',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The RecurringQuote response',
      content: { 'application/json': { schema: RecurringQuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1RecurringQuotesIdActionRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_quotes/{id}/{action}',
  tags: ['recurring_quotes'],
  summary: 'Performs a custom action on an RecurringQuote',
  description:
    'Performs a custom action on an RecurringQuote.\n\n    The current range of actions are as follows\n    - clone_to_RecurringQuote\n    - clone_to_quote\n    - history\n    - delivery_note\n    - mark_paid\n    - download\n    - archive\n    - delete\n    - email',
  operationId: 'actionRecurringQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringQuote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
      action: z
        .string()
        .openapi({
          param: {
            name: 'action',
            in: 'path',
            description: 'The action string to be performed',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'clone_to_quote',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the RecurringQuote object',
      content: { 'application/json': { schema: RecurringQuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsContactsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/contacts',
  tags: ['reports'],
  summary: 'Contact reports',
  description: 'Export contact reports',
  operationId: 'getContactReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsClientsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/clients',
  tags: ['reports'],
  summary: 'Client reports',
  description: 'Export client reports',
  operationId: 'getClientReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsCreditsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/credits',
  tags: ['reports'],
  summary: 'Credit reports',
  description: 'Export credit reports',
  operationId: 'getCreditReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsDocumentsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/documents',
  tags: ['reports'],
  summary: 'Document reports',
  description: 'Export document reports',
  operationId: 'getDocumentReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsExpensesRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/expenses',
  tags: ['reports'],
  summary: 'Expense reports',
  description: 'Export expense reports',
  operationId: 'getExpenseReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsInvoiceItemsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/invoice_items',
  tags: ['reports'],
  summary: 'Invoice item reports',
  description: 'Export invoice item reports',
  operationId: 'getInvoiceItemReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsInvoicesRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/invoices',
  tags: ['reports'],
  summary: 'Invoice reports',
  description: 'Export invoice reports',
  operationId: 'getInvoiceReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsPaymentsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/payments',
  tags: ['reports'],
  summary: 'Payment reports',
  description: 'Export payment reports',
  operationId: 'getPaymentReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsProductsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/products',
  tags: ['reports'],
  summary: 'Product reports',
  description: 'Export product reports',
  operationId: 'getProductReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsProductSalesRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/product_sales',
  tags: ['reports'],
  summary: 'Product Salesreports',
  description: 'Export product sales reports',
  operationId: 'getProductSalesReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsProfitlossRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/profitloss',
  tags: ['reports'],
  summary: 'Profit loss reports',
  description: 'Profit loss report',
  operationId: 'getProfitLossReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsQuoteItemsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/quote_items',
  tags: ['reports'],
  summary: 'Quote item reports',
  description: 'Export Quote item reports',
  operationId: 'getQuoteItemReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsQuotesRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/quotes',
  tags: ['reports'],
  summary: 'Quote reports',
  description: 'Export quote reports',
  operationId: 'getQuoteReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsRecurringInvoicesRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/recurring_invoices',
  tags: ['reports'],
  summary: 'Recurring Invoice reports',
  description: 'Export recurring invoice reports',
  operationId: 'getRecurringInvoiceReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsTasksRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/tasks',
  tags: ['reports'],
  summary: 'Task reports',
  description: 'Export task reports',
  operationId: 'getTaskReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsActivitiesRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/activities',
  tags: ['reports'],
  summary: 'Activity reports',
  description: 'Export activity reports',
  operationId: 'getActivityReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsClientContactsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/client_contacts',
  tags: ['reports'],
  summary: 'Client contact reports',
  description: 'Export client contact reports',
  operationId: 'getClientContactReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsArDetailReportRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/ar_detail_report',
  tags: ['reports'],
  summary: 'AR detail report',
  description: 'Export AR detail report',
  operationId: 'getARDetailReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsArSummaryReportRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/ar_summary_report',
  tags: ['reports'],
  summary: 'AR summary report',
  description: 'Export AR summary report',
  operationId: 'getARSummaryReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsClientBalanceReportRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/client_balance_report',
  tags: ['reports'],
  summary: 'Client balance report',
  description: 'Export client balance report',
  operationId: 'getClientBalanceReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsClientSalesReportRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/client_sales_report',
  tags: ['reports'],
  summary: 'Client sales report',
  description: 'Export client sales report',
  operationId: 'getClientSalesReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsTaxSummaryReportRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/tax_summary_report',
  tags: ['reports'],
  summary: 'Tax summary report',
  description: 'Export tax summary report',
  operationId: 'getTaxSummaryReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsTaxPeriodReportRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/tax_period_report',
  tags: ['reports'],
  summary: 'Tax period report',
  description: 'Export tax period report',
  operationId: 'getTaxPeriodReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsUserSalesReportRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/user_sales_report',
  tags: ['reports'],
  summary: 'User sales report',
  description: 'Export user sales report',
  operationId: 'getUserSalesReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsProjectsRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/projects',
  tags: ['reports'],
  summary: 'Project reports',
  description: 'Export project reports',
  operationId: 'getProjectReport',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    body: {
      content: { 'application/json': { schema: GenericReportSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ReportsPreviewHashRoute = createRoute({
  method: 'post',
  path: '/api/v1/reports/preview/{hash}',
  tags: ['reports'],
  summary: 'Report preview',
  description: 'Preview a report by hash',
  operationId: 'getReportPreview',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      hash: z
        .string()
        .openapi({
          param: {
            name: 'hash',
            in: 'path',
            description: 'The report hash',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1ExportsPreviewHashRoute = createRoute({
  method: 'post',
  path: '/api/v1/exports/preview/{hash}',
  tags: ['reports'],
  summary: 'Export preview',
  description: 'Preview an export by hash',
  operationId: 'getExportPreview',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      hash: z
        .string()
        .openapi({
          param: {
            name: 'hash',
            in: 'path',
            description: 'The export hash',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1SelfUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/self-update',
  tags: ['update'],
  summary: 'Performs a system update',
  description: 'Performs a system update',
  operationId: 'selfUpdate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-API-PASSWORD': XAPIPASSWORDParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: { description: 'Success/failure response' },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1SelfUpdateCheckVersionRoute = createRoute({
  method: 'post',
  path: '/api/v1/self-update/check_version',
  tags: ['update'],
  summary: 'Check for available update',
  description: 'Checks for an available system update',
  operationId: 'selfUpdateCheckVersion',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Version check response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    default: DefaultResponse,
  },
})

export const getApiV1StaticsRoute = createRoute({
  method: 'get',
  path: '/api/v1/statics',
  tags: ['statics'],
  summary: 'Gets a list of statics',
  description: 'Lists all statics',
  operationId: 'getStatics',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list of static data',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1SubscriptionsRoute = createRoute({
  method: 'get',
  path: '/api/v1/subscriptions',
  tags: ['subscriptions'],
  summary: 'Gets a list of subscriptions',
  description: 'Lists subscriptions.',
  operationId: 'getSubscriptions',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortSubscriptionsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of subscriptions',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(SubscriptionSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1SubscriptionsRoute = createRoute({
  method: 'post',
  path: '/api/v1/subscriptions',
  tags: ['subscriptions'],
  summary: 'Adds a subscriptions',
  description: 'Adds an subscriptions to the system',
  operationId: 'storeSubscription',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved subscriptions object',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1SubscriptionsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/subscriptions/create',
  tags: ['subscriptions'],
  summary: 'Gets a new blank subscriptions object',
  description: 'Returns a blank object with default values',
  operationId: 'getSubscriptionsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank subscriptions object',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1SubscriptionsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/subscriptions/{id}',
  tags: ['subscriptions'],
  summary: 'Shows an subscriptions',
  description: 'Displays an subscriptions by id',
  operationId: 'showSubscription',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Subscription Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Subscription object',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1SubscriptionsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/subscriptions/{id}',
  tags: ['subscriptions'],
  summary: 'Updates an subscriptions',
  description: 'Handles the updating of an subscriptions by id',
  operationId: 'updateSubscription',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Subscription Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the subscriptions object',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1SubscriptionsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/subscriptions/{id}',
  tags: ['subscriptions'],
  summary: 'Deletes a subscriptions',
  description: 'Handles the deletion of an subscriptions by id',
  operationId: 'deleteSubscription',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Subscription Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1SubscriptionsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/subscriptions/{id}/edit',
  tags: ['subscriptions'],
  summary: 'Shows an subscriptions for editting',
  description: 'Displays an subscriptions by id',
  operationId: 'editSubscription',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Subscription Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the invoice object',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1SubscriptionsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/subscriptions/bulk',
  tags: ['subscriptions'],
  summary: 'Performs bulk actions on an array of subscriptions',
  operationId: 'bulkSubscriptions',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'User credentials',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Subscription response',
      content: { 'application/json': { schema: SubscriptionSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1SchedulerRoute = createRoute({
  method: 'get',
  path: '/api/v1/scheduler',
  tags: ['scheduler'],
  summary: 'Get scheduler status',
  description: 'Returns the task scheduler status and job list',
  operationId: 'getScheduler',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Scheduler status response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    default: DefaultResponse,
  },
})

export const postApiV1SupportMessagesSendRoute = createRoute({
  method: 'post',
  path: '/api/v1/support/messages/send',
  tags: ['support'],
  summary: 'Sends a support message to Invoice Ninja team',
  description: 'Allows a user to send a support message to the Invoice Ninja Team',
  operationId: 'supportMessage',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    body: {
      description: 'The message',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().exactOptional().openapi({ description: 'The support message' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(
            z.string().openapi({ description: 'Server response', example: 'success' }),
          ),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    400: _400Response,
    401: _401Response,
    default: DefaultResponse,
  },
})

export const getApiV1SystemLogsRoute = createRoute({
  method: 'get',
  path: '/api/v1/system_logs',
  tags: ['system_logs'],
  summary: 'Gets a list of system logs',
  description:
    'Lists system logs, search and filters allow fine grained lists to be generated.\n     *\n     *      Query parameters can be added to performed more fine grained filtering of the system logs, these are handled by the SystemLogFilters class which defines the methods available',
  operationId: 'getSystemLogs',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortSystemLogsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of system logs',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(SystemLogSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1SystemLogsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/system_logs/{id}',
  tags: ['system_logs'],
  summary: 'Shows a system_logs',
  description: 'Displays a system_logs by id',
  operationId: 'showSystemLogs',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The system_logs Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the system_logs object',
      content: { 'application/json': { schema: SystemLogSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaskSchedulersRoute = createRoute({
  method: 'get',
  path: '/api/v1/task_schedulers',
  tags: ['task_schedulers'],
  summary: 'Task Scheduler Index',
  description: 'Get all schedulers with associated jobs',
  operationId: 'getTaskSchedulers',
  request: { headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }) },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    default: DefaultResponse,
  },
})

export const postApiV1TaskSchedulersRoute = createRoute({
  method: 'post',
  path: '/api/v1/task_schedulers',
  tags: ['task_schedulers'],
  summary: 'Create task scheduler with job ',
  description:
    'Create task scheduler with a job (action(job) request should be sent via request also. Example: We want client report to be job which will be run\n     * multiple times, we should send the same parameters in the request as we would send if we wanted to get report, see example',
  operationId: 'createTaskScheduler',
  request: {
    headers: z.object({
      'X-API-SECRET': XAPISECRETParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: TaskSchedulerSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaskSchedulersCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/task_schedulers/create',
  tags: ['task_schedulers'],
  summary: 'Gets a new blank scheduler object',
  description: 'Returns a blank object with default values',
  operationId: 'getTaskScheduler',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A blank scheduler object',
      content: { 'application/json': { schema: TaskSchedulerSchemaSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaskSchedulersIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/task_schedulers/{id}',
  tags: ['task_schedulers'],
  summary: 'Show given scheduler',
  description: 'Get scheduler with associated job',
  operationId: 'showTaskScheduler',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Scheduler Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    default: DefaultResponse,
  },
})

export const putApiV1TaskSchedulersIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/task_schedulers/{id}',
  tags: ['task_schedulers'],
  summary: 'Update task scheduler ',
  description: 'Update task scheduler',
  operationId: 'updateTaskScheduler',
  request: {
    headers: z.object({
      'X-API-SECRET': XAPISECRETParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Scheduler Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: TaskSchedulerSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1TaskSchedulersIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/task_schedulers/{id}',
  tags: ['task_schedulers'],
  summary: 'Destroy Task Scheduler',
  description: 'Destroy task scheduler and its associated job',
  operationId: 'destroyTaskScheduler',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Scheduler Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    default: DefaultResponse,
  },
})

export const postApiV1TaskSchedulersBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/task_schedulers/bulk',
  tags: ['task_schedulers'],
  summary: 'Performs bulk actions on an array of task_schedulers',
  operationId: 'bulkTaskSchedulerActions',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'array of ids',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The TaskSchedule response',
      content: { 'application/json': { schema: TaskSchedulerSchemaSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaskStatusesRoute = createRoute({
  method: 'get',
  path: '/api/v1/task_statuses',
  tags: ['task_status'],
  summary: 'Gets a list of task statuses',
  description: 'Lists task statuses',
  operationId: 'getTaskStatuses',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortTaskStatusesParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of task statuses',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(TaskStatusSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1TaskStatusesRoute = createRoute({
  method: 'post',
  path: '/api/v1/task_statuses',
  tags: ['task_status'],
  summary: 'Adds a TaskStatus',
  description: 'Adds a TaskStatusto the system',
  operationId: 'storeTaskStatus',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'The task_status request',
      content: { 'application/json': { schema: TaskStatusSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved TaskStatus object',
      content: { 'application/json': { schema: TaskStatusSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaskStatusesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/task_statuses/create',
  tags: ['task_status'],
  summary: 'Gets a new blank TaskStatus object',
  description: 'Returns a blank object with default values',
  operationId: 'getTaskStatussCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank TaskStatus object',
      content: { 'application/json': { schema: TaskStatusSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaskStatusesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/task_statuses/{id}',
  tags: ['task_status'],
  summary: 'Shows a TaskStatus Term',
  description: 'Displays an TaskStatusby id',
  operationId: 'showTaskStatus',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The TaskStatusHashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the TaskStatusobject',
      content: { 'application/json': { schema: TaskStatusSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1TaskStatusesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/task_statuses/{id}',
  tags: ['task_status'],
  summary: 'Updates a TaskStatus Term',
  description: 'Handles the updating of an TaskStatus Termby id',
  operationId: 'updateTaskStatus',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The TaskStatusHashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the TaskStatusobject',
      content: { 'application/json': { schema: TaskStatusSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1TaskStatusesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/task_statuses/{id}',
  tags: ['task_status'],
  summary: 'Deletes a TaskStatus Term',
  description: 'Handles the deletion of an TaskStatus by id',
  operationId: 'deleteTaskStatus',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The TaskStatusHashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaskStatusesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/task_statuses/{id}/edit',
  tags: ['task_status'],
  summary: 'Shows an TaskStatusfor editting',
  description: 'Displays an TaskStatusby id',
  operationId: 'editTaskStatuss',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The TaskStatusHashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the TaskStatus object',
      content: { 'application/json': { schema: TaskStatusSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1TaskStatusesBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/task_statuses/bulk',
  tags: ['task_status'],
  summary: 'Performs bulk actions on an array of task statuses',
  operationId: 'bulkTaskStatuss',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'TaskStatus Ter,s',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The TaskStatus Terms response',
      content: { 'application/json': { schema: TaskStatusSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaxRatesRoute = createRoute({
  method: 'get',
  path: '/api/v1/tax_rates',
  tags: ['tax_rates'],
  summary: 'Gets a list of tax_rates',
  description: 'Lists tax rates',
  operationId: 'getTaxRates',
  request: {
    query: z.object({
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortTaxRatesParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of tax_rates',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(TaxRateSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaxRatesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/tax_rates/create',
  tags: ['tax_rates'],
  summary: 'Gets a new blank Tax Rate object',
  description: 'Returns a blank object with default values',
  operationId: 'getTaxRateCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A blank Tax Rate object',
      content: { 'application/json': { schema: TaxRateSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaxRatesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/tax_rates/{id}',
  tags: ['tax_rates'],
  summary: 'Shows a Tax Rate',
  description: 'Displays an TaxRate by id',
  operationId: 'showTaxRate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The TaxRate Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Tax Rate object',
      content: { 'application/json': { schema: TaxRateSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1TaxRatesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/tax_rates/{id}',
  tags: ['tax_rates'],
  summary: 'Updates a tax rate',
  description: 'Handles the updating of a tax rate by id',
  operationId: 'updateTaxRate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The TaxRate Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the TaxRate object',
      content: { 'application/json': { schema: TaxRateSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1TaxRatesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tax_rates/{id}',
  tags: ['tax_rates'],
  summary: 'Deletes a TaxRate',
  description: 'Handles the deletion of an TaxRate by id',
  operationId: 'deleteTaxRate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The TaxRate Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TaxRatesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/tax_rates/{id}/edit',
  tags: ['tax_rates'],
  summary: 'Shows a Tax Rate for editting',
  description: 'Displays a Tax Rate by id',
  operationId: 'editTaxRate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The TaxRate Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Tax Rate object',
      content: { 'application/json': { schema: TaxRateSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1TaxRatesBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/tax_rates/bulk',
  tags: ['tax_rates'],
  summary: 'Performs bulk actions on an array of TaxRates',
  operationId: 'bulkTaxRates',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Tax Rates',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The TaxRate List response',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1TemplatesRoute = createRoute({
  method: 'post',
  path: '/api/v1/templates',
  tags: ['templates'],
  summary: 'Returns a entity template with the template variables replaced with the Entities',
  description: 'Returns a entity template with the template variables replaced with the Entities',
  operationId: 'getShowTemplate',
  request: {
    headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }),
    query: z.object({ per_page: PerPageMetaParamsSchema, page: PageMetaParamsSchema }),
    body: {
      description: 'The template subject and body',
      content: {
        'application/json': {
          schema: z
            .object({
              subject: z
                .string()
                .exactOptional()
                .openapi({ description: 'The email template subject' }),
              body: z.string().exactOptional().openapi({ description: 'The email template body' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The template response',
      content: { 'application/json': { schema: TemplateSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1TemplatesPreviewHashRoute = createRoute({
  method: 'post',
  path: '/api/v1/templates/preview/{hash}',
  tags: ['templates'],
  summary: 'Preview template by hash',
  description: 'Returns a template preview for the given hash',
  operationId: 'getTemplatePreview',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      hash: z
        .string()
        .openapi({
          param: {
            name: 'hash',
            in: 'path',
            description: 'The template hash',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'Template preview response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1SearchRoute = createRoute({
  method: 'post',
  path: '/api/v1/search',
  tags: ['search'],
  summary: 'Search',
  description: 'Performs a search across entities',
  operationId: 'postSearch',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'Search results',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TokensRoute = createRoute({
  method: 'get',
  path: '/api/v1/tokens',
  tags: ['tokens'],
  summary: 'Gets a list of company tokens',
  description:
    'Lists company tokens.\n     *\n     *   Query parameters can be added to performed more fine grained filtering of the tokens, these are handled by the TokenFilters class which defines the methods available',
  operationId: 'getTokens',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortTokensParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of tokens',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(CompanyTokenSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1TokensRoute = createRoute({
  method: 'post',
  path: '/api/v1/tokens',
  tags: ['tokens'],
  summary: 'Adds a token',
  description: 'Adds an token to a company',
  operationId: 'storeToken',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved token object',
      content: { 'application/json': { schema: CompanyTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TokensIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/tokens/{id}',
  tags: ['tokens'],
  summary: 'Shows a token',
  description: 'Displays a token by id',
  operationId: 'showToken',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Token Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the token object',
      content: { 'application/json': { schema: CompanyTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1TokensIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/tokens/{id}',
  tags: ['tokens'],
  summary: 'Updates a token',
  description: 'Handles the updating of a token by id',
  operationId: 'updateToken',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Token Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the token object',
      content: { 'application/json': { schema: CompanyTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1TokensIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tokens/{id}',
  tags: ['tokens'],
  summary: 'Deletes a token',
  description: 'Handles the deletion of a token by id',
  operationId: 'deleteToken',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Token Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TokensIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/tokens/{id}/edit',
  tags: ['tokens'],
  summary: 'Shows a token for editting',
  description: 'Displays a token by id',
  operationId: 'editToken',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Token Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the token object',
      content: { 'application/json': { schema: CompanyTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1TokensCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/tokens/create',
  tags: ['tokens'],
  summary: 'Gets a new blank token object',
  description: 'Returns a blank object with default values',
  operationId: 'getTokensCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank token object',
      content: { 'application/json': { schema: CompanyTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1TokensBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/tokens/bulk',
  tags: ['tokens'],
  summary: 'Performs bulk actions on an array of tokens',
  operationId: 'bulkTokens',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Token ids',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Token response',
      content: { 'application/json': { schema: CompanyTokenSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1UsersRoute = createRoute({
  method: 'get',
  path: '/api/v1/users',
  tags: ['users'],
  summary: 'Gets a list of users',
  description:
    'Lists users, search and filters allow fine grained lists to be generated.\n\n    Query parameters can be added to performed more fine grained filtering of the users, these are handled by the UserFilters class which defines the methods available',
  operationId: 'getUsers',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortUsersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of users',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(UserSchema).exactOptional(), meta: MetaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1UsersRoute = createRoute({
  method: 'post',
  path: '/api/v1/users',
  tags: ['users'],
  summary: 'Adds a User',
  description: 'Adds an User to the system',
  operationId: 'storeUser',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved User object',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1UsersCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/create',
  tags: ['users'],
  summary: 'Gets a new blank User object',
  description: 'Returns a blank object with default values',
  operationId: 'getUsersCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank User object',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1UsersIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/{id}',
  tags: ['users'],
  summary: 'Shows an User',
  description: 'Displays an User by id',
  operationId: 'showUser',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The User Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the User object',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1UsersIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/users/{id}',
  tags: ['users'],
  summary: 'Updates an User',
  description: 'Handles the updating of an User by id',
  operationId: 'updateUser',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The User Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the User object',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1UsersIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/users/{id}',
  tags: ['users'],
  summary: 'Deletes a User',
  description: 'Handles the deletion of an User by id',
  operationId: 'deleteUser',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      token_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token_name',
            in: 'query',
            description: 'Customized name for the Users API Token',
            required: false,
            schema: { type: 'string', format: 'string' },
            example: 'iOS Device 11 iPad',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The User Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1UsersIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/users/{id}/edit',
  tags: ['users'],
  summary: 'Shows an User for editting',
  description: 'Displays an User by id',
  operationId: 'editUser',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The User Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the User object',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1UsersBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/bulk',
  tags: ['users'],
  summary: 'Performs bulk actions on an array of users',
  operationId: 'bulkUsers',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Hashed ids',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The User response',
      content: { 'application/json': { schema: UserSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1UsersUserDetachFromCompanyRoute = createRoute({
  method: 'delete',
  path: '/api/v1/users/{user}/detach_from_company',
  tags: ['users'],
  summary: 'Detach an existing user to a company',
  description: 'Detach an existing user from a company',
  operationId: 'detachUser',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user hashed_id',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'FD767dfd7',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1UsersUserInviteRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{user}/invite',
  tags: ['users'],
  summary: 'Reconfirm an existing user to a company',
  description: 'Reconfirm an existing user from a company',
  operationId: 'inviteUser',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user hashed_id',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'FD767dfd7',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1UsersUserReconfirmRoute = createRoute({
  method: 'post',
  path: '/api/v1/users/{user}/reconfirm',
  tags: ['users'],
  summary: 'Reconfirm an existing user to a company',
  description: 'Reconfirm an existing user from a company',
  operationId: 'inviteUserReconfirm',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user hashed_id',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'FD767dfd7',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1WebcronRoute = createRoute({
  method: 'get',
  path: '/api/v1/webcron',
  tags: ['webcron'],
  summary: 'Executes the task scheduler via a webcron service',
  description: 'Executes the task scheduler via a webcron service',
  operationId: 'getWebcron',
  request: { headers: z.object({ 'X-Requested-With': XRequestedWithParamsSchema }) },
  responses: {
    200: {
      description: 'Success response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1WebhooksRoute = createRoute({
  method: 'get',
  path: '/api/v1/webhooks',
  tags: ['webhooks'],
  summary: 'Gets a list of Webhooks',
  description:
    'Lists Webhooks, search and filters allow fine grained lists to be generated.\n     *\n     *      Query parameters can be added to performed more fine grained filtering of the Webhooks, these are handled by the WebhookFilters class which defines the methods available',
  operationId: 'getWebhooks',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortWebhooksParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of Webhooks',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(WebhookSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1WebhooksRoute = createRoute({
  method: 'post',
  path: '/api/v1/webhooks',
  tags: ['webhooks'],
  summary: 'Adds a Webhook',
  description: 'Adds an Webhook to a company',
  operationId: 'storeWebhook',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Returns the saved Webhook object',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1WebhooksIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Shows a Webhook',
  description: 'Displays a Webhook by id',
  operationId: 'showWebhook',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Webhook Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Webhook object',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const putApiV1WebhooksIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Updates a Webhook',
  description: 'Handles the updating of a Webhook by id',
  operationId: 'updateWebhook',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Webhook Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Webhook object',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1WebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/webhooks/{id}',
  tags: ['Webhooks'],
  summary: 'Deletes a Webhook',
  description: 'Handles the deletion of a Webhook by id',
  operationId: 'deleteWebhook',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Webhook Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1WebhooksIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/webhooks/{id}/edit',
  tags: ['webhooks'],
  summary: 'Shows a Webhook for editting',
  description: 'Displays a Webhook by id',
  operationId: 'editWebhook',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Webhook Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Webhook object',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1WebhooksCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/webhooks/create',
  tags: ['webhooks'],
  summary: 'Gets a new blank Webhook object',
  description: 'Returns a blank object with default values',
  operationId: 'getWebhooksCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank Webhook object',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const postApiV1WebhooksBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/webhooks/bulk',
  tags: ['webhooks'],
  summary: 'Performs bulk actions on an array of Webhooks',
  operationId: 'bulkWebhooks',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'User credentials',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Webhook User response',
      content: { 'application/json': { schema: WebhookSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    default: DefaultResponse,
  },
})

export const getApiV1CreditsRoute = createRoute({
  method: 'get',
  path: '/api/v1/credits',
  tags: ['credits'],
  summary: 'List credits',
  description:
    'Lists credits, search and filters allow fine grained lists to be generated.\n     *\n     *      Query parameters can be added to performed more fine grained filtering of the credits, these are handled by the CreditFilters class which defines the methods available',
  operationId: 'getCredits',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortCreditsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of credits',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(CreditSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1CreditsRoute = createRoute({
  method: 'post',
  path: '/api/v1/credits',
  tags: ['credits'],
  summary: 'Create credit',
  description: 'Adds an credit to the system',
  operationId: 'storeCredit',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: { content: { 'application/json': { schema: CreditRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the saved credit object',
      content: { 'application/json': { schema: CreditSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1CreditsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/credits/{id}',
  tags: ['credits'],
  summary: 'Show credit',
  description: 'Displays an credit by id',
  operationId: 'showCredit',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Credit Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the credit object',
      content: { 'application/json': { schema: CreditSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1CreditsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/credits/{id}',
  tags: ['Credits'],
  summary: 'Update credit',
  description: 'Handles the updating of an Credit by id',
  operationId: 'updateCredit',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Credit Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Credit object',
      content: { 'application/json': { schema: CreditSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1CreditsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/credits/{id}',
  tags: ['credits'],
  summary: 'Delete credit',
  description: 'Handles the deletion of an credit by id',
  operationId: 'deleteCredit',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Credit Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1CreditsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/credits/{id}/edit',
  tags: ['credits'],
  summary: 'Edit credit',
  description: 'Displays an credit by id',
  operationId: 'editCredit',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Invoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the credit object',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1CreditsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/credits/create',
  tags: ['credits'],
  summary: 'Blank credit',
  description: 'Returns a blank object with default values',
  operationId: 'getCreditsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank credit object',
      content: { 'application/json': { schema: CreditSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1CreditsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/credits/bulk',
  tags: ['credits'],
  summary: 'Bulk credit actions',
  operationId: 'bulkCredits',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'User credentials',
      content: {
        'application/json': {
          schema: z.array(
            z
              .string()
              .openapi({
                description: "Array of hashed IDs to be bulk 'actioned",
                example: '[D2J234DFA,D2J234DFA,D2J234DFA]',
              }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Bulk Action response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1CreditInvitationKeyDownloadRoute = createRoute({
  method: 'get',
  path: '/api/v1/credit/{invitation_key}/download',
  tags: ['quotes'],
  summary: 'Download quote PDF',
  description: 'Downloads a specific quote',
  operationId: 'downloadCredit',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      invitation_key: z
        .string()
        .openapi({
          param: {
            name: 'invitation_key',
            in: 'path',
            description: 'The Credit Invitation Key',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the credit pdf',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1CreditsIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/credits/{id}/upload',
  tags: ['credits'],
  summary: 'Upload a credit document',
  description: 'Handles the uploading of a document to a credit',
  operationId: 'uploadCredits',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Credit Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Credit object',
      content: { 'application/json': { schema: CreditSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1TagsRoute = createRoute({
  method: 'get',
  path: '/api/v1/tags',
  tags: ['tags'],
  summary: 'List tags',
  description:
    'Lists company tags for a single taggable entity type.\n\n`entity_type` is required so task tags and project tags never bleed into the same picker.\n',
  operationId: 'getTags',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      entity_type: z
        .enum(['task', 'project'])
        .openapi({
          param: {
            name: 'entity_type',
            in: 'query',
            description: 'Supported values: App\\Models\\Task, App\\Models\\Project',
            required: true,
            schema: { type: 'string', enum: ['task', 'project'] },
            example: 'App\\Models\\Task',
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Search by tag name',
            required: false,
            schema: { type: 'string' },
            example: 'urgent',
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'sort',
            in: 'query',
            description: 'Sort using column|direction, for example name|asc or created_at|desc',
            required: false,
            schema: { type: 'string' },
            example: 'name|asc',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of tags',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TagSchema).exactOptional(), meta: MetaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1TagsRoute = createRoute({
  method: 'post',
  path: '/api/v1/tags',
  tags: ['tags'],
  summary: 'Create tag',
  description: 'Creates a tag catalog entry for a supported entity type.',
  operationId: 'storeTag',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    body: {
      description: 'Tag object that needs to be added to the company catalog',
      content: {
        'application/json': {
          schema: TagRequestSchema,
          example: { entity_type: 'task', name: 'Urgent', color: '#FF0000' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved tag object',
      content: {
        'application/json': {
          schema: z.object({ data: TagSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1TagsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/tags/create',
  tags: ['tags'],
  summary: 'Blank tag',
  description: 'Returns a blank tag object with default values.',
  operationId: 'getTagsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A blank tag object',
      content: {
        'application/json': {
          schema: z.object({ data: TagSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1TagsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/tags/{id}',
  tags: ['tags'],
  summary: 'Show tag',
  description: 'Displays a tag by id.',
  operationId: 'showTag',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The tag hashed ID',
            required: true,
            schema: { type: 'string' },
            example: 'Opnel5aKBz',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the tag object',
      content: {
        'application/json': {
          schema: z.object({ data: TagSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: { description: 'Tag not found' },
    429: _429Response,
    default: DefaultResponse,
  },
})

export const putApiV1TagsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/tags/{id}',
  tags: ['tags'],
  summary: 'Update tag',
  description: 'Updates a tag name or color. `entity_type` is immutable and should not be sent.',
  operationId: 'updateTag',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The tag hashed ID',
            required: true,
            schema: { type: 'string' },
            example: 'Opnel5aKBz',
          },
        }),
    }),
    body: {
      description: 'Tag fields to update',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().max(191).exactOptional().openapi({ example: 'High priority' }),
              color: z
                .string()
                .regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
                .nullable()
                .exactOptional()
                .openapi({ example: '#FF5500' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the updated tag object',
      content: {
        'application/json': {
          schema: z.object({ data: TagSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: { description: 'Tag not found' },
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1TagsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tags/{id}',
  tags: ['tags'],
  summary: 'Delete tag',
  description: 'Soft-deletes a tag catalog entry and cascades its pivot assignments.',
  operationId: 'deleteTag',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The tag hashed ID',
            required: true,
            schema: { type: 'string' },
            example: 'Opnel5aKBz',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the deleted tag object',
      content: {
        'application/json': {
          schema: z.object({ data: TagSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: { description: 'Tag not found' },
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1TagsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/tags/{id}/edit',
  tags: ['tags'],
  summary: 'Edit tag',
  description: 'Displays a tag by id for editing.',
  operationId: 'editTag',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The tag hashed ID',
            required: true,
            schema: { type: 'string' },
            example: 'Opnel5aKBz',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the tag object',
      content: {
        'application/json': {
          schema: z.object({ data: TagSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: { description: 'Tag not found' },
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1TagsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/tags/bulk',
  tags: ['tags'],
  summary: 'Bulk tag actions',
  description: 'Archives, restores, or deletes multiple tags.',
  operationId: 'bulkTags',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      action: z
        .enum(['archive', 'restore', 'delete'])
        .openapi({
          param: {
            name: 'action',
            in: 'query',
            description: 'Action to perform',
            required: true,
            schema: { type: 'string', enum: ['archive', 'restore', 'delete'] },
            example: 'archive',
          },
        }),
    }),
    body: {
      description: 'Bulk tag action payload',
      content: {
        'application/json': { schema: TagBulkActionSchema, example: { ids: ['Opnel5aKBz'] } },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the affected tag objects',
      content: {
        'application/json': {
          schema: z.object({ data: z.array(TagSchema).exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1LocationsRoute = createRoute({
  method: 'get',
  path: '/api/v1/locations',
  tags: ['locations'],
  summary: 'List locations',
  description:
    '##  GET /api/v1/locations\n\nLocations are additional addresses that are applicable to a client. This is useful when a client has multiple addresses for shipping, billing, etc.\n\nWhen retrieving a list of locations you can chain query parameters to filter the dataset. For example:\n\n```html\n/api/v1/locations?name=warehouse*\n```\n\nSorting uses `column|asc` or `column|desc`. Use a single `sort` parameter for one column, or repeated `sort[]` parameters for multi-level ordering (first is primary):\n\n```html\n/api/v1/locations?sort=id|desc\n/api/v1/locations?sort[]=id|desc&sort[]=name|asc\n```\n\nFor pagination, use per_page and page parameters:\n\n```html\n/api/v1/locations?per_page=15&page=2\n```\n\nThe default per_page value is 20.\n',
  operationId: 'getLocations',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortLocationsParamsSchema,
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter by location name\n\n```html\n?name=warehouse\n```\n',
            required: false,
            schema: { type: 'string' },
            example: 'warehouse',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of locations',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(LocationSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1LocationsRoute = createRoute({
  method: 'post',
  path: '/api/v1/locations',
  tags: ['locations'],
  summary: 'Create location',
  description: '##  POST /api/v1/locations\n\nAdds a location to a company\n',
  operationId: 'storeLocation',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Location object that needs to be added to the company',
      content: { 'application/json': { schema: LocationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved location object',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1LocationsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/locations/{id}',
  tags: ['locations'],
  summary: 'Show location',
  description: '##  GET /api/v1/locations/{id}\n\nDisplays a location by id\n',
  operationId: 'showLocation',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Location Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the location object',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const putApiV1LocationsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/locations/{id}',
  tags: ['locations'],
  summary: 'Update location',
  description: '##  PUT /api/v1/locations/{id}\n\nHandles the updating of a location by id\n',
  operationId: 'updateLocation',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Location Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'Location object that needs to be updated',
      content: { 'application/json': { schema: LocationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the location object',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1LocationsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/locations/{id}',
  tags: ['locations'],
  summary: 'Delete location',
  description: '##  DELETE /api/v1/locations/{id}\n\nHandles the deletion of a location by id\n',
  operationId: 'deleteLocation',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Location Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1LocationsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/locations/create',
  tags: ['locations'],
  summary: 'Blank Location',
  description: '##  GET /api/v1/locations/create\n\nReturns a blank object with default values\n',
  operationId: 'getLocationsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank location object',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1LocationsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/locations/bulk',
  tags: ['locations'],
  summary: 'Bulk location actions',
  description:
    "##  POST /api/v1/locations/bulk\n\nBulk actions allow to make changes to multiple locations in a single request. The following actions are supported:\n\n- archive\n- restore\n- delete\n\nAll of these actions require an array of location ids to perform the requested action on ie.\n\n\"ids\":['id1','id2']\n",
  operationId: 'bulkLocations',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Bulk action array',
      content: { 'application/json': { schema: GenericBulkActionSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Location list Response of the updated locations that were bulk updated',
      content: { 'application/json': { schema: LocationSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1RecurringInvoicesRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_invoices',
  tags: ['Recurring Invoices'],
  summary: 'List recurring invoices',
  description:
    '## GET /api/v1/recurring_invoices\n\nLists invoices with the option to chain multiple query parameters allowing fine grained filtering of the list.  \n',
  operationId: 'getRecurringInvoices',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortRecurringInvoicesParamsSchema,
      client_id: ClientIdParamsSchema,
      created_at: CreatedAtParamsSchema,
      updated_at: UpdatedAtParamsSchema,
      is_deleted: IsDeletedParamsSchema,
      filter_deleted_clients: FilterDeletedClientsParamsSchema,
      vendor_id: VendorIdParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Searches across a range of columns including:  \n- custom_value1  \n- custom_value2  \n- custom_value3  \n- custom_value4\n',
            required: false,
            schema: { type: 'string' },
            example: '?filter=bob',
          },
        }),
      client_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client_status',
            in: 'query',
            description:
              'A comma separated list of invoice status strings. Valid options include:  \n- all\n- active  \n- paused  \n- completed  \n',
            required: false,
            schema: { type: 'string' },
            example: '?client_status=active,paused',
          },
        }),
      number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'number',
            in: 'query',
            description: 'Filters the list by number.\n',
            required: false,
            schema: { type: 'string' },
            example: '?number=123',
          },
        }),
      product_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'product_key',
            in: 'query',
            description: 'Filters the list by product_key.\n',
            required: false,
            schema: { type: 'string' },
            example: '?product_key=123',
          },
        }),
      next_send_between: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'next_send_between',
            in: 'query',
            description: 'Filters the list by next_send_between.\n',
            required: false,
            schema: { type: 'string' },
            example: '?next_send_between=2025-01-01|2025-01-31',
          },
        }),
      frequency_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'frequency_id',
            in: 'query',
            description: 'Filters the list by frequency_id.\n',
            required: false,
            schema: { type: 'string' },
            example: '?frequency_id=1,2,3',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of recurring_invoices',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(RecurringInvoiceSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1RecurringInvoicesRoute = createRoute({
  method: 'post',
  path: '/api/v1/recurring_invoices',
  tags: ['Recurring Invoices'],
  summary: 'Create recurring invoice',
  description: '## POST /api/v1/recurring_invoices\n\nAdds a Recurring Invoice to the system\n',
  operationId: 'storeRecurringInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'Recurring invoice object that needs to be added to the company',
      content: { 'application/json': { schema: RecurringInvoiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved RecurringInvoice object',
      content: { 'application/json': { schema: RecurringInvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1RecurringInvoicesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_invoices/{id}',
  tags: ['Recurring Invoices'],
  summary: 'Show recurring invoice',
  description: 'Displays an RecurringInvoice by id',
  operationId: 'showRecurringInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringInvoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the RecurringInvoice object',
      content: { 'application/json': { schema: RecurringInvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1RecurringInvoicesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/recurring_invoices/{id}',
  tags: ['Recurring Invoices'],
  summary: 'Update recurring invoice',
  description: 'Handles the updating of an RecurringInvoice by id',
  operationId: 'updateRecurringInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringInvoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the RecurringInvoice object',
      content: { 'application/json': { schema: RecurringInvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1RecurringInvoicesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/recurring_invoices/{id}',
  tags: ['Recurring Invoices'],
  summary: 'Delete recurring invoice',
  description: 'Handles the deletion of an RecurringInvoice by id',
  operationId: 'deleteRecurringInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringInvoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1RecurringInvoicesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_invoices/{id}/edit',
  tags: ['Recurring Invoices'],
  summary: 'Edit recurring invoice',
  description: 'Displays an RecurringInvoice by id',
  operationId: 'editRecurringInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringInvoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the RecurringInvoice object',
      content: { 'application/json': { schema: RecurringInvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1RecurringInvoicesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_invoices/create',
  tags: ['Recurring Invoices'],
  summary: 'Blank recurring invoice',
  description: 'Returns a blank object with default values',
  operationId: 'getRecurringInvoicesCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank RecurringInvoice object',
      content: { 'application/json': { schema: RecurringInvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1RecurringInvoicesBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/recurring_invoices/bulk',
  tags: ['Recurring Invoices'],
  summary: 'Bulk recurring invoice actions',
  description: 'There are multiple actions that are available including:\n',
  operationId: 'bulkRecurringInvoices',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Bulk action details',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The action to be performed, options include:  \n- `start`  \n  Starts (or restarts) the recurring invoice. **note** if the recurring invoice has been stopped for a long time, it will attempt to catch back up firing a new Invoice every hour per interval that has been missed.  \n  If you do not wish to have the recurring invoice catch up, you should set the next_send_date to the correct date you wish the recurring invoice to commence from.\n- `stop`  \n  Stops the recurring invoice. \n- `send_now`  \n  Force sends the recurring invoice - this option is only available when the recurring invoice is in a draft state.  \n- `restore`  \n  Restores the recurring invoice from an archived or deleted state.\n- `archive`  \n  Archives the recurring invoice. The recurring invoice will not fire in this state.\n- `delete`  \n  Deletes a recurring invoice.  \n',
                }),
              ids: z
                .array(
                  z
                    .string()
                    .openapi({
                      description:
                        "Array of hashed IDs to be bulk 'actioned - ['D2J234DFA','D2J234DFA','D2J234DFA']",
                    }),
                )
                .exactOptional(),
            })
            .openapi({
              example: { action: 'start', ids: ['D2J234DFA', 'D2J234DFA', 'D2J234DFA'] },
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The RecurringInvoice response',
      content: { 'application/json': { schema: RecurringInvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1RecurringInvoicesIdActionRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_invoices/{id}/{action}',
  tags: ['Recurring Invoices'],
  summary: 'Custom recurring invoice action',
  description:
    'Performs a custom action on an RecurringInvoice.\n\n    The current range of actions are as follows\n    - clone_to_RecurringInvoice\n    - clone_to_quote\n    - history\n    - delivery_note\n    - mark_paid\n    - download\n    - archive\n    - delete\n    - email',
  operationId: 'actionRecurringInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringInvoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
      action: z
        .string()
        .openapi({
          param: {
            name: 'action',
            in: 'path',
            description: 'The action string to be performed',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'clone_to_quote',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the RecurringInvoice object',
      content: { 'application/json': { schema: RecurringInvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
  deprecated: true,
})

export const getApiV1RecurringInvoiceInvitationKeyDownloadRoute = createRoute({
  method: 'get',
  path: '/api/v1/recurring_invoice/{invitation_key}/download',
  tags: ['Recurring Invoices'],
  summary: 'Download recurring invoice PDF',
  description: 'Downloads a specific invoice',
  operationId: 'downloadRecurringInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      invitation_key: z
        .string()
        .openapi({
          param: {
            name: 'invitation_key',
            in: 'path',
            description: 'The Recurring Invoice Invitation Key',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the recurring invoice pdf',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1RecurringInvoicesIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/recurring_invoices/{id}/upload',
  tags: ['Recurring Invoices'],
  summary: 'Add recurring invoice document',
  description: 'Handles the uploading of a document to a recurring_invoice',
  operationId: 'uploadRecurringInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The RecurringInvoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the RecurringInvoice object',
      content: { 'application/json': { schema: RecurringInvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1TasksRoute = createRoute({
  method: 'get',
  path: '/api/v1/tasks',
  tags: ['tasks'],
  summary: 'List tasks',
  description:
    'Lists tasks, search and filters allow fine grained lists to be generated.\n     *\n     *   Query parameters can be added to performed more fine grained filtering of the tasks, these are handled by the TaskFilters class which defines the methods available',
  operationId: 'getTasks',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortTasksParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of tasks',
      content: {
        'application/json': {
          schema: z
            .object({ data: z.array(TaskSchema).exactOptional(), meta: MetaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1TasksRoute = createRoute({
  method: 'post',
  path: '/api/v1/tasks',
  tags: ['tasks'],
  summary: 'Create task',
  description: 'Adds an task to a company',
  operationId: 'storeTask',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'Task object that needs to be added to the company',
      content: { 'application/json': { schema: TaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved task object',
      content: { 'application/json': { schema: TaskSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1TasksIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/tasks/{id}',
  tags: ['tasks'],
  summary: 'Show task',
  description: 'Displays a task by id',
  operationId: 'showTask',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Task Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the task object',
      content: { 'application/json': { schema: TaskSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1TasksIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/tasks/{id}',
  tags: ['tasks'],
  summary: 'Update task',
  description: 'Handles the updating of a task by id',
  operationId: 'updateTask',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The task Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'Task object that needs to be updated',
      content: { 'application/json': { schema: TaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the task object',
      content: { 'application/json': { schema: TaskSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1TasksIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/tasks/{id}',
  tags: ['tasks'],
  summary: 'Delete task',
  description: 'Handles the deletion of a task by id',
  operationId: 'deleteTask',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Task Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1TasksIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/tasks/{id}/edit',
  tags: ['tasks'],
  summary: 'Edit task',
  description: 'Displays a task by id',
  operationId: 'editTask',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Task Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the client object',
      content: { 'application/json': { schema: TaskSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1TasksCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/tasks/create',
  tags: ['tasks'],
  summary: 'Blank task',
  description: 'Returns a blank task with default values',
  operationId: 'getTasksCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank task object',
      content: { 'application/json': { schema: TaskSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1TasksBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/tasks/bulk',
  tags: ['tasks'],
  summary: 'Bulk task actions',
  operationId: 'bulkTasks',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'User credentials',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Task User response',
      content: { 'application/json': { schema: TaskSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1TasksIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/tasks/{id}/upload',
  tags: ['tasks'],
  summary: 'Uploads a task document',
  description: 'Handles the uploading of a document to a task',
  operationId: 'uploadTask',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Task Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Task object',
      content: { 'application/json': { schema: TaskSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1TasksSortRoute = createRoute({
  method: 'post',
  path: '/api/v1/tasks/sort',
  tags: ['tasks'],
  summary: 'Sort tasks on KanBan',
  description: 'Sorts tasks after drag and drop on the KanBan.',
  operationId: 'sortTasks',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'Task sort order data',
      content: { 'application/json': { schema: TaskSortRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns an Ok, 200 HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1QuotesRoute = createRoute({
  method: 'get',
  path: '/api/v1/quotes',
  tags: ['quotes'],
  summary: 'List quotes',
  description:
    '## GET /api/v1/quotes\n\nLists quotes, search and filters allow fine grained lists to be generated.\n\nQuery parameters can be added to performed more fine grained filtering of the quotes, these are handled by the QuoteFilters class which defines the methods available\n',
  operationId: 'getQuotes',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortQuotesParamsSchema,
      status: StatusParamsSchema,
      client_id: ClientIdParamsSchema,
      created_at: CreatedAtParamsSchema,
      updated_at: UpdatedAtParamsSchema,
      is_deleted: IsDeletedParamsSchema,
      filter_deleted_clients: FilterDeletedClientsParamsSchema,
      vendor_id: VendorIdParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Searches across a range of columns including:  \n- number  \n- custom_value1  \n- custom_value2  \n- custom_value3  \n- custom_value4\n',
            required: false,
            schema: { type: 'string' },
            example: '?filter=bob',
          },
        }),
      client_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client_status',
            in: 'query',
            description:
              'A comma separated list of quote status strings. Valid options include:  \n- all\n- draft  \n- sent  \n- approved\n- expired\n- upcoming   \n',
            required: false,
            schema: { type: 'string' },
            example: '?client_status=paid,unpaid',
          },
        }),
      number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'number',
            in: 'query',
            description: 'Search quote by quote number \n',
            required: false,
            schema: { type: 'string' },
            example: '?number=Q-001',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of quotes',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(QuoteSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1QuotesRoute = createRoute({
  method: 'post',
  path: '/api/v1/quotes',
  tags: ['quotes'],
  summary: 'Create quote',
  description:
    '## POST /api/v1/quotes\nCreates an quote for a client.\n\nTriggered actions are available when updating or creating an quote.\n\nThese are query parameters that can be chained in order to perform additional actions on the entity, these include:\n\n```\n?send_email=true [Saves and sends the quote]\n?mark_sent=true [Saves and marks the quote as sent]\n?approve=true [Saves and approves the quote]\n?convert=true [Saves and converts the quote to an invoice]\n?save_default_footer=true [Saves the current footer as the default footer]\n?save_default_terms=true [Saves the current terms as the default terms]\n\n```\n',
  operationId: 'storeQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'Quote object that needs to be added to the company',
      content: { 'application/json': { schema: QuoteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved Quote object',
      content: { 'application/json': { schema: QuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1QuotesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/quotes/{id}',
  tags: ['quotes'],
  summary: 'Show quote',
  description: '## GET /api/v1/quotes/{id}\n\nDisplays an Quote by id\n',
  operationId: 'showQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Quote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Quote object',
      content: { 'application/json': { schema: QuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1QuotesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/quotes/{id}',
  tags: ['quotes'],
  summary: 'Update quote',
  description:
    '## PUT /api/v1/quotes/{id}\n\nHandles the updating of an Quote by id.\n\nTriggered actions are available when updating or creating an quote.\n\nThese are query parameters that can be chained in order to perform additional actions on the entity, these include:\n\n```\n?send_email=true [Saves and sends the quote]\n?mark_sent=true [Saves and marks the quote as sent]\n?approve=true [Saves and approves the quote]\n?convert=true [Saves and converts the quote to an invoice]\n?save_default_footer=true [Saves the current footer as the default footer]\n?save_default_terms=true [Saves the current terms as the default terms]\n\n```\n',
  operationId: 'updateQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Quote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'Quote object that needs to be updated',
      content: { 'application/json': { schema: QuoteRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Quote object',
      content: { 'application/json': { schema: QuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1QuotesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/quotes/{id}',
  tags: ['quotes'],
  summary: 'Delete quote',
  description: '## DELETE /api/v1/quotes/{id}\n\nHandles the deletion of an Quote by id.\n',
  operationId: 'deleteQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Quote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1QuotesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/quotes/{id}/edit',
  tags: ['quotes'],
  summary: 'Edit quote',
  description: '## GET /api/v1/quotes/{id}/edit\n\nDisplays an Quote by id for editting\n',
  operationId: 'editQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Quote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Quote object',
      content: { 'application/json': { schema: QuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1QuotesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/quotes/create',
  tags: ['quotes'],
  summary: 'Blank quote',
  description: '## GET /api/v1/quotes/create\n\nReturns a blank object with default values\n',
  operationId: 'getQuotesCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank Quote object',
      content: { 'application/json': { schema: QuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1QuotesBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/quotes/bulk',
  tags: ['quotes'],
  summary: 'Bulk quote actions',
  description: '## POST /api/v1/quotes/bulk\n\nPerforms bulk actions on an array of quotes\n',
  operationId: 'bulkQuotes',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Bulk action details',
      content: {
        'application/json': {
          schema: z
            .object({
              action: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The action to be performed, options include:  \n- `approve`  \n  Bulk approve an array of quotes  \n- `convert`  \n  Bulk convert an array of quotes to invoices  \n- `send_email`  \n  Bulk send an array of quotes as emails  \n- `mark_sent`  \n  Bulk mark an array of quotes as sent  \n- `restore`  \n  Restores an array of quotes  \n- `delete`  \n  Deletes an array of invoices  \n- `archive`  \n  Archives an array of invoices  \n',
                }),
              ids: z
                .array(
                  z
                    .string()
                    .openapi({
                      description:
                        "Array of hashed IDs to be bulk 'actioned - ['D2J234DFA','D2J234DFA','D2J234DFA']",
                    }),
                )
                .exactOptional(),
            })
            .openapi({
              example: { action: 'convert', ids: ['D2J234DFA', 'D2J234DFA', 'D2J234DFA'] },
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Quote response',
      content: { 'application/json': { schema: QuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1QuotesIdActionRoute = createRoute({
  method: 'get',
  path: '/api/v1/quotes/{id}/{action}',
  tags: ['quotes'],
  summary: 'Performs a custom action on an Quote',
  description:
    'Performs a custom action on an Quote.\n\n    The current range of actions are as follows\n    - clone_to_quote\n    - history\n    - delivery_note\n    - mark_paid\n    - download\n    - archive\n    - delete\n    - convert\n    - convert_to_invoice\n    - email',
  operationId: 'actionQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Quote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
      action: z
        .string()
        .openapi({
          param: {
            name: 'action',
            in: 'path',
            description: 'The action string to be performed',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'clone_to_quote',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Quote object',
      content: { 'application/json': { schema: QuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
  deprecated: true,
})

export const getApiV1QuoteInvitationKeyDownloadRoute = createRoute({
  method: 'get',
  path: '/api/v1/quote/{invitation_key}/download',
  tags: ['quotes'],
  summary: 'Download quote PDF',
  description: 'Downloads a specific quote',
  operationId: 'downloadQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      invitation_key: z
        .string()
        .openapi({
          param: {
            name: 'invitation_key',
            in: 'path',
            description: 'The Quote Invitation Key',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the quote pdf',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1QuotesIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/quotes/{id}/upload',
  tags: ['quotes'],
  summary: 'Upload a quote document',
  description: 'Handles the uploading of a document to a quote',
  operationId: 'uploadQuote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Quote Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Quote object',
      content: { 'application/json': { schema: QuoteSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1InvoicesRoute = createRoute({
  method: 'get',
  path: '/api/v1/invoices',
  tags: ['invoices'],
  summary: 'List invoices',
  description:
    '##  GET /api/v1/invoices\n\nLists invoices with the option to chain multiple query parameters allowing fine grained filtering of the list.  \n',
  operationId: 'getInvoices',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortInvoicesParamsSchema,
      status: StatusParamsSchema,
      client_id: ClientIdParamsSchema,
      created_at: CreatedAtParamsSchema,
      updated_at: UpdatedAtParamsSchema,
      is_deleted: IsDeletedParamsSchema,
      filter_deleted_clients: FilterDeletedClientsParamsSchema,
      vendor_id: VendorIdParamsSchema,
      client_status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client_status',
            in: 'query',
            description:
              'A comma separated list of invoice status strings. Valid options include:  \n- all\n- paid  \n- unpaid  \n- overdue   \n',
            required: false,
            schema: { type: 'string' },
            example: '?client_status=paid,unpaid',
          },
        }),
      number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'number',
            in: 'query',
            description: 'Search invoices by invoice number \n',
            required: false,
            schema: { type: 'string' },
            example: '?number=INV-001',
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Searches across a range of columns including:  \n- number  \n- po_number  \n- date  \n- amount  \n- balance  \n- custom_value1  \n- custom_value2  \n- custom_value3  \n- custom_value4\n- client.name\n- client.contacts.[first_name, last_name, email]\n- line_items.[product_key, notes]\n',
            required: false,
            schema: { type: 'string' },
            example: '?filter=bob',
          },
        }),
      without_deleted_clients: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'without_deleted_clients',
            in: 'query',
            description: 'Returns the invoice list without the invoices of deleted clients.\n',
            required: false,
            schema: { type: 'string' },
            example: '?without_deleted_clients=',
          },
        }),
      overdue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'overdue',
            in: 'query',
            description: 'Returns the list of invoices that are overdue\n',
            required: false,
            schema: { type: 'string' },
            example: '?overdue=',
          },
        }),
      payable: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'payable',
            in: 'query',
            description:
              'Returns the invoice list that are payable for a defined client. Please note, you must pass the client_id as the value for this query parameter\n',
            required: false,
            schema: { type: 'string' },
            example: '?payable={client_id}',
          },
        }),
      private_notes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'private_notes',
            in: 'query',
            description: 'Searches on the private_notes field of the invoices\n',
            required: false,
            schema: { type: 'string' },
            example: '?private_notes=super secret',
          },
        }),
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            description:
              'Filters the invoices by invoice date returns a list of invoices after (and including) the date\n',
            required: false,
            schema: { type: 'string' },
            example: '?date=2022-01-01',
          },
        }),
      date_range: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'date_range',
            in: 'query',
            description:
              'Filters the invoices by invoice date returns a list of invoices between two dates\n',
            required: false,
            schema: { type: 'string' },
            example: '?date_range=2022-01-01,2022-01-31',
          },
        }),
      status_id: z
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
            name: 'status_id',
            in: 'query',
            description:
              'Filters the invoices by status id\n\n```html\n  STATUS_DRAFT = 1;\n  STATUS_SENT = 2;\n  STATUS_PARTIAL = 3;\n  STATUS_PAID = 4;\n  STATUS_CANCELLED = 5;\n  STATUS_REVERSED = 6;\n```\n',
            required: false,
            schema: { type: 'integer' },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of invoices',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(InvoiceSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1InvoicesRoute = createRoute({
  method: 'post',
  path: '/api/v1/invoices',
  tags: ['invoices'],
  summary: 'Create invoice',
  description:
    '## POST /api/v1/invoices\nCreates an invoice for a client.\n\nTriggered actions are available when updating or creating an invoice.\n\nThese are query parameters that can be chained in order to perform additional actions on the entity, these include:\n\n  ```\n  ?send_email=true [Saves and sends the invoice]\n  ?mark_sent=true [Saves and marks the invoice as sent]\n  ?paid=true [Saves and marks the invoice as paid]\n  ?amount_paid=100 [Saves and marks the invoice as paid with the given amount]\n  ?cancel=true [Saves and marks the invoice as cancelled]\n  ?save_default_footer=true [Saves the current footer as the default footer]\n  ?save_default_terms=true [Saves the current terms as the default terms]\n  ?retry_e_send=true [Saves and retries the e-send for the invoice]\n  ?redirect=https://example.com [Saves and redirects to the given url]\n  ```\n',
  operationId: 'storeInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: { content: { 'application/json': { schema: InvoiceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the saved invoice entity',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1InvoicesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/invoices/{id}',
  tags: ['invoices'],
  summary: 'Show invoice',
  description: '## GET /api/v1/invoices/{id}\n\nDisplays an invoice by id\n',
  operationId: 'showInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Invoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the invoice object',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1InvoicesIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/invoices/{id}',
  tags: ['invoices'],
  summary: 'Update invoice',
  description:
    '## PUT /api/v1/invoices/{id}\nHandles the updating of an invoice by id.\n\nTriggered actions are available when updating or creating an invoice.  \nThese are query parameters that can be chained in order to perform additional actions on the entity, these include:\n\n  ```\n  ?send_email=true [Saves and sends the invoice]\n  ?mark_sent=true [Saves and marks the invoice as sent]\n  ?paid=true [Saves and marks the invoice as paid]\n  ?amount_paid=100 [Saves and marks the invoice as paid with the given amount]\n  ?cancel=true [Saves and marks the invoice as cancelled]\n  ?save_default_footer=true [Saves the current footer as the default footer]\n  ?save_default_terms=true [Saves the current terms as the default terms]\n  ?retry_e_send=true [Saves and retries the e-send for the invoice]\n  ?redirect=https://example.com [Saves and redirects to the given url]\n  ```\n',
  operationId: 'updateInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Invoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the invoice object',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1InvoicesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/invoices/{id}',
  tags: ['invoices'],
  summary: 'Delete invoice',
  description: '## DELETE /api/v1/invoices/{id}\n\nHandles the deletion of an invoice by id.\n',
  operationId: 'deleteInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Invoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1InvoicesIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/invoices/{id}/edit',
  tags: ['invoices'],
  summary: 'Edit invoice',
  description: '## GET /api/v1/invoices/{id}/edit\n\nDisplays an invoice by id for editting\n',
  operationId: 'editInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Invoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the invoice object',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1InvoicesCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/invoices/create',
  tags: ['invoices'],
  summary: 'Blank invoice',
  description: '## GET /api/v1/invoices/create\n\nReturns a blank object with default values\n',
  operationId: 'getInvoiceCreate',
  responses: {
    200: {
      description: 'A blank invoice object',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1InvoicesBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/invoices/bulk',
  tags: ['invoices'],
  summary: 'Bulk invoice actions',
  description:
    '## POST /api/v1/invoices/bulk\n\nThere are multiple actions that are available including:  \n',
  operationId: 'bulkInvoices',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Bulk action details',
      content: {
        'application/json': {
          schema: z
            .object({
              email_type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The email type to be sent, when bulk emailing invoices options include:\n- `invoice` (default)\n- `quote`\n- `credit`\n- `payment`\n- `payment_partial`\n- `statement`\n- `reminder1`\n- `reminder2`\n- `reminder3`\n- `reminder_endless`\n- `custom1`\n- `custom2`\n- `custom3`\n- `purchase_order`\n- `email_quote_template_reminder1`\n',
                }),
              action: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The action to be performed, options include:  \n- `bulk_download`  \n  Bulk download an array of invoice PDFs (These are sent to the admin via email.)  \n- `download`  \n  Download a single PDF. (Returns a single PDF object)  \n- `bulk_print`  \n  Merges an array of Invoice PDFs for easy one click printing.  \n- `auto_bill`  \n  Attempts to automatically bill the invoices with the payment method on file.  \n- `clone_to_invoice`  \n  Returns a clone of the invoice.  \n- `clone_to_quote`  \n  Returns a quote cloned using the properties of the given invoice.  \n- `mark_paid`  \n  Marks an array of invoices as paid.  \n- `mark_sent`  \n  Marks an array of invoices as sent.  \n- `restore`  \n  Restores an array of invoices  \n- `delete`  \n  Deletes an array of invoices  \n- `archive`  \n  Archives an array of invoices  \n- `cancel`  \n  Cancels an array of invoices  \n- `email`  \n  Emails an array of invoices  \n- `send_email`  \n  Emails an array of invoices. Requires additional properties to be sent. `email_type`  \n',
                }),
              ids: z
                .array(
                  z
                    .string()
                    .openapi({
                      description:
                        "Array of hashed IDs to be bulk 'actioned - ['D2J234DFA','D2J234DFA','D2J234DFA']",
                    }),
                )
                .exactOptional(),
            })
            .openapi({
              example: { action: 'bulk_download', ids: ['D2J234DFA', 'D2J234DFA', 'D2J234DFA'] },
              required: [],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Bulk Action response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1InvoicesIdActionRoute = createRoute({
  method: 'get',
  path: '/api/v1/invoices/{id}/{action}',
  tags: ['invoices'],
  summary: 'Custom invoice action',
  description:
    'Performs a custom action on an invoice.  \nThe current range of actions are as follows  \n- clone_to_invoice  \n- clone_to_quote  \n- history  \n- delivery_note  \n- mark_paid  \n- download  \n- archive  \n- delete  \n- email  \n',
  operationId: 'actionInvoice',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Invoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
      action: z
        .string()
        .openapi({
          param: {
            name: 'action',
            in: 'path',
            description: 'The action string to be performed',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'clone_to_quote',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the invoice object',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
  deprecated: true,
})

export const getApiV1InvoiceInvitationKeyDownloadRoute = createRoute({
  method: 'get',
  path: '/api/v1/invoice/{invitation_key}/download',
  tags: ['invoices'],
  summary: 'Download invoice PDF',
  description: '## GET /api/v1/invoice/{invitation_key}/download\n\nDownloads a specific invoice\n',
  operationId: 'downloadInvoiceByInvitation',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      invitation_key: z
        .string()
        .openapi({
          param: {
            name: 'invitation_key',
            in: 'path',
            description: 'The Invoice Invitation Key',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the invoice pdf',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1InvoicesIdDeliveryNoteRoute = createRoute({
  method: 'get',
  path: '/api/v1/invoices/{id}/delivery_note',
  tags: ['invoices'],
  summary: 'Download delivery note',
  description:
    '## GET /api/v1/invoices/{id}/delivery_note\n\nDownloads a specific invoice delivery notes\n',
  operationId: 'getInvoiceDeliveryNote',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Invoice Hahsed Id',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the invoice delivery note pdf',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1InvoicesIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/invoices/{id}/upload',
  tags: ['invoices'],
  summary: 'Add invoice document',
  description:
    '## POST /api/v1/invoices/{id}/upload\n\nHandles the uploading of a document to a invoice\n',
  operationId: 'uploadInvoiceDocument',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Invoice Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Invoice object',
      content: { 'application/json': { schema: InvoiceSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ProjectsRoute = createRoute({
  method: 'get',
  path: '/api/v1/projects',
  tags: ['projects'],
  summary: 'List projects',
  description: 'Lists projects',
  operationId: 'getProjects',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortProjectsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of projects',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ProjectSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ProjectsRoute = createRoute({
  method: 'post',
  path: '/api/v1/projects',
  tags: ['projects'],
  summary: 'Create project',
  description: 'Adds an project to a company',
  operationId: 'storeProject',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'Project object that needs to be added to the company',
      content: { 'application/json': { schema: ProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved project object',
      content: { 'application/json': { schema: ProjectSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ProjectsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/projects/{id}',
  tags: ['projects'],
  summary: 'Show project',
  description: 'Displays a project by id',
  operationId: 'showProject',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Project Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the expense object',
      content: { 'application/json': { schema: ProjectSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1ProjectsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/projects/{id}',
  tags: ['projects'],
  summary: 'Update project',
  description: 'Handles the updating of a project by id',
  operationId: 'updateProject',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Project Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'Project object that needs to be updated',
      content: { 'application/json': { schema: ProjectRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the project object',
      content: { 'application/json': { schema: ProjectSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1ProjectsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/projects/{id}',
  tags: ['projects'],
  summary: 'Delete project',
  description: 'Handles the deletion of a project by id',
  operationId: 'deleteProject',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Project Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ProjectsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/projects/{id}/edit',
  tags: ['projects'],
  summary: 'Edit project',
  description: 'Displays a project by id',
  operationId: 'editProject',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Project Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the project object',
      content: { 'application/json': { schema: ProjectSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ProjectsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/projects/create',
  tags: ['projects'],
  summary: 'Blank project',
  description: 'Returns a blank object with default values',
  operationId: 'getProjectsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank project object',
      content: { 'application/json': { schema: ProjectSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ProjectsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/projects/bulk',
  tags: ['projects'],
  summary: 'Bulk project actions',
  operationId: 'bulkProjects',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'User credentials',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Project User response',
      content: { 'application/json': { schema: ProjectSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ProjectsIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/projects/{id}/upload',
  tags: ['projects'],
  summary: 'Uploads a project document',
  description: 'Handles the uploading of a document to a project',
  operationId: 'uploadProject',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Project Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Project object',
      content: { 'application/json': { schema: ProjectSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1VendorsRoute = createRoute({
  method: 'get',
  path: '/api/v1/vendors',
  tags: ['vendors'],
  summary: 'List vendors',
  description:
    'Lists vendors, search and filters allow fine grained lists to be generated.\n\n    Query parameters can be added to performed more fine grained filtering of the vendors, these are handled by the VendorFilters class which defines the methods available',
  operationId: 'getVendors',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortVendorsParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of vendors',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(VendorSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1VendorsRoute = createRoute({
  method: 'post',
  path: '/api/v1/vendors',
  tags: ['vendors'],
  summary: 'Create vendor',
  description: 'Adds a vendor to a company',
  operationId: 'storeVendor',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'Vendor object that needs to be added to the company',
      content: { 'application/json': { schema: VendorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved vendor object',
      content: { 'application/json': { schema: VendorSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1VendorsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/vendors/{id}',
  tags: ['vendors'],
  summary: 'Show vendor',
  description: 'Displays a vendor by id',
  operationId: 'showVendor',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The vendor Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the vendor object',
      content: { 'application/json': { schema: VendorSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1VendorsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/vendors/{id}',
  tags: ['vendors'],
  summary: 'Update vendor',
  description: 'Handles the updating of a vendor by id',
  operationId: 'updateVendor',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Vendor Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'Vendor object that needs to be updated',
      content: { 'application/json': { schema: VendorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the vendor object',
      content: { 'application/json': { schema: VendorSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1VendorsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/vendors/{id}',
  tags: ['vendors'],
  summary: 'Delete vendor',
  description: 'Handles the deletion of a vendor by id',
  operationId: 'deleteVendor',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Vendor Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1VendorsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/vendors/{id}/edit',
  tags: ['vendors'],
  summary: 'Edit vendor',
  description: 'Displays a vendor by id',
  operationId: 'editVendor',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Vendor Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the vendor object',
      content: { 'application/json': { schema: VendorSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1VendorsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/vendors/create',
  tags: ['vendors'],
  summary: 'Blank vendor',
  description: 'Returns a blank vendor with default values',
  operationId: 'getVendorsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank vendor object',
      content: { 'application/json': { schema: VendorSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1VendorsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/vendors/bulk',
  tags: ['vendors'],
  summary: 'Bulk vendor actions',
  operationId: 'bulkVendors',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'User credentials',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Vendor User response',
      content: { 'application/json': { schema: VendorSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1VendorsIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/vendors/{id}/upload',
  tags: ['vendors'],
  summary: 'Uploads a vendor document',
  description: 'Handles the uploading of a document to a vendor',
  operationId: 'uploadVendor',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Vendor Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Vendor object',
      content: { 'application/json': { schema: VendorSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PaymentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/payments',
  tags: ['payments'],
  summary: 'List payments',
  description:
    'Lists payments, search and filters allow fine grained lists to be generated.\n\n        Query parameters can be added to performed more fine grained filtering of the payments, these are handled by the PaymentFilters class which defines the methods available',
  operationId: 'getPayments',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortPaymentsParamsSchema,
      status: StatusParamsSchema,
      client_id: ClientIdParamsSchema,
      created_at: CreatedAtParamsSchema,
      updated_at: UpdatedAtParamsSchema,
      is_deleted: IsDeletedParamsSchema,
      filter_deleted_clients: FilterDeletedClientsParamsSchema,
      vendor_id: VendorIdParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Searches across a range of columns including:  \n- amount  \n- date  \n- custom_value1  \n- custom_value2  \n- custom_value3  \n- custom_value4\n',
            required: false,
            schema: { type: 'string' },
            example: '?filter=10',
          },
        }),
      number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'number',
            in: 'query',
            description: 'Search payments by payment number \n',
            required: false,
            schema: { type: 'string' },
            example: '?number=0001',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of payments',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PaymentSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1PaymentsRoute = createRoute({
  method: 'post',
  path: '/api/v1/payments',
  tags: ['payments'],
  summary: 'Create payment',
  description: 'Adds an Payment to the system',
  operationId: 'storePayment',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      email_receipt: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'email_receipt',
            in: 'query',
            description:
              'If true, the payment will be emailed to the client. If false, no email will be sent. This will override any other email settings for payments.\n',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      description:
        'The payment request can be as simple as a client id and amount, or as complex as a full payment with invoices and associated credits that should be applied.',
      content: { 'application/json': { schema: PaymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved Payment object',
      content: { 'application/json': { schema: PaymentSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PaymentsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/payments/{id}',
  tags: ['payments'],
  summary: 'Show payment',
  description: 'Displays an Payment by id',
  operationId: 'showPayment',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Payment Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Payment object',
      content: { 'application/json': { schema: PaymentSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1PaymentsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/payments/{id}',
  tags: ['payments'],
  summary: 'Update payment',
  description: 'Handles the updating of an Payment by id',
  operationId: 'updatePayment',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Payment Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Payment object',
      content: { 'application/json': { schema: PaymentSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1PaymentsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/payments/{id}',
  tags: ['payments'],
  summary: 'Delete payment',
  description: 'Handles the deletion of an Payment by id',
  operationId: 'deletePayment',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Payment Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PaymentsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/payments/{id}/edit',
  tags: ['payments'],
  summary: 'Edit payment',
  description: 'Displays an Payment by id',
  operationId: 'editPayment',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Payment Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Payment object',
      content: { 'application/json': { schema: PaymentSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PaymentsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/payments/create',
  tags: ['payments'],
  summary: 'Blank payment',
  description: 'Returns a blank object with default values',
  operationId: 'getPaymentsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank Payment object',
      content: { 'application/json': { schema: PaymentSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1PaymentsRefundRoute = createRoute({
  method: 'post',
  path: '/api/v1/payments/refund',
  tags: ['payments'],
  summary: 'Refund payment',
  description: 'Adds an Refund to the system',
  operationId: 'storeRefund',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'The refund request',
      content: { 'application/json': { schema: PaymentSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved Payment object',
      content: { 'application/json': { schema: PaymentSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1PaymentsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/payments/bulk',
  tags: ['payments'],
  summary: 'Bulk payment actions',
  operationId: 'bulkPayments',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'User credentials',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Payment response',
      content: { 'application/json': { schema: PaymentSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PaymentsIdActionRoute = createRoute({
  method: 'get',
  path: '/api/v1/payments/{id}/{action}',
  tags: ['payments'],
  summary: 'Custom payment actions',
  description:
    'Performs a custom action on an Payment.\n\n    The current range of actions are as follows\n    - clone_to_Payment\n    - clone_to_quote\n    - history\n    - delivery_note\n    - mark_paid\n    - download\n    - archive\n    - delete\n    - email',
  operationId: 'actionPayment',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Payment Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
      action: z
        .string()
        .openapi({
          param: {
            name: 'action',
            in: 'path',
            description: 'The action string to be performed',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'clone_to_quote',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Payment object',
      content: { 'application/json': { schema: PaymentSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
  deprecated: true,
})

export const postApiV1PaymentsIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/payments/{id}/upload',
  tags: ['payments'],
  summary: 'Upload a payment document',
  description: 'Handles the uploading of a document to a payment',
  operationId: 'uploadPayment',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Payment Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Payment object',
      content: { 'application/json': { schema: PaymentSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ClientsRoute = createRoute({
  method: 'get',
  path: '/api/v1/clients',
  tags: ['clients'],
  summary: 'List clients\n',
  description:
    '###  GET /api/v1/clients  \nWhen retrieving a list of clients you can also chain query parameters in order to filter the dataset that is returned. For example, you can send a request to the following URL to retrieve clients that have a balance greater than 1000\n  \n```\n/api/v1/clients?balance=gt:1000\n``` \n\nYou can also sort the results by adding a sort parameter. The following example will sort the results by the client name in descending order\n\n```\n/api/v1/clients?sort=name|desc\n```\n\nYou can also combine multiple filters together. The following example will return clients that have a balance greater than 1000 and are not deleted and have a name that starts with "Bob"\n\n```\n/api/v1/clients?balance=gt:1000&name=Bob\n```\n\nIf you wish to retrieve child relations, you can also combine the query parameter `?include=` with a comma separated list of relationships\n\n```\n/api/v1/clients?include=activities,ledger,system_logs\'\n```\n\nThe per_page and page variables allow pagination of the list of clients. The following example will return the second page of clients with 15 clients per page\n\n```\n/api/v1/clients?per_page=15&page=2\n```\n\nThe default per_page value is 20.\n',
  operationId: 'getClients',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: ClientIncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortClientsParamsSchema,
      status: StatusParamsSchema,
      created_at: CreatedAtParamsSchema,
      updated_at: UpdatedAtParamsSchema,
      is_deleted: IsDeletedParamsSchema,
      filter_deleted_clients: FilterDeletedClientsParamsSchema,
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter by client name  \n\n```html\n?name=bob\n```\n',
            required: false,
            schema: { type: 'string' },
            example: 'Acme Corporation',
          },
        }),
      balance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'balance',
            in: 'query',
            description:
              'Filter by client balance, format uses an operator and value separated by a colon. lt,lte, gt, gte, eq\n\n```html\n?balance=lt:10\n```\n\nie all clients whose balance is less than 10\n',
            required: false,
            schema: { type: 'string' },
            example: 'lt:10',
          },
        }),
      between_balance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'between_balance',
            in: 'query',
            description:
              'Filter between client balances, format uses two values separated by a colon\n\n```html\n?between_balance=10:100\n```\n',
            required: false,
            schema: { type: 'string' },
            example: '10:100',
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            description: 'Filter by client email\n\n```html\n?email=jane.doe@acme.com\n```\n',
            required: false,
            schema: { type: 'string' },
            example: 'jane.doe@acme.com',
          },
        }),
      id_number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'id_number',
            in: 'query',
            description: 'Filter by client id_number\n\n```html\n?id_number=ACME-0001\n```\n',
            required: false,
            schema: { type: 'string' },
            example: 'ACME-0001',
          },
        }),
      number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'number',
            in: 'query',
            description: 'Filter by client number\n\n```html\n?number=0002\n```\n',
            required: false,
            schema: { type: 'string' },
            example: '0002',
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Broad filter which targets multiple client columns:\n  \n  ```html\n    name, \n    id_number, \n    contact.first_name \n    contact.last_name, \n    contact.email, \n    contact.phone\n    custom_value1,\n    custom_value2,\n    custom_value3,\n    custom_value4,\n  ```\n\n  ```html\n  ?filter=Bobby\n  ```\n',
            required: false,
            schema: { type: 'string' },
            example: 'Bobby',
          },
        }),
      group: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'group',
            in: 'query',
            description:
              'Returns the list of clients assigned to {group_id}\n\n```html\n  ?group=Wpmbk5ezJn\n```\n',
            required: false,
            schema: { type: 'string' },
            example: 'Wpmbk5ezJn',
          },
        }),
      client_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            description:
              'Returns the list of clients with {client_id} - proxy call to retrieve a client_id wrapped in an array\n\n```html\n  ?client_id=Opnel5aKBz\n```\n',
            required: false,
            schema: { type: 'string' },
            example: 'Opnel5aKBz',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of clients',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ClientSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1ClientsRoute = createRoute({
  method: 'post',
  path: '/api/v1/clients',
  tags: ['clients'],
  summary: 'Create client',
  description:
    '\n##  POST /api/v1/clients  \nAdds a client to a company\n  \n> 🚨 Important    \nWhen creating (or updating) a client you must include the child contacts with all mutating requests. Client contacts cannot be modified in isolation.\n',
  operationId: 'storeClient',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
    body: { content: { 'application/json': { schema: ClientRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the saved client object',
      content: { 'application/json': { schema: ClientSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1ClientsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/clients/{id}',
  tags: ['clients'],
  summary: 'Show client',
  description: '##  GET /api/v1/clients/{id}\n\nDisplays a client by id\n',
  operationId: 'showClient',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Client Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the client object',
      content: { 'application/json': { schema: ClientSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const putApiV1ClientsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/clients/{id}',
  tags: ['clients'],
  summary: 'Update client',
  description:
    '##  PUT /api/v1/clients/{id}\n\nHandles the updating of a client by id\n\n> 🚨 Important    \nWhen creating (or updating) a client you must include the child contacts with all mutating requests. Client contacts cannot be modified in isolation.\n',
  operationId: 'updateClient',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Client Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'Client object that needs to be updated',
      content: { 'application/json': { schema: ClientRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the client object',
      content: { 'application/json': { schema: ClientSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const deleteApiV1ClientsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/clients/{id}',
  tags: ['clients'],
  summary: 'Delete client',
  description:
    '##  DELETE /api/v1/clients/{id}\n\nHandles the deletion of a client by id\n\n> ❗ Note\nDeleting a client does not purge the client from the system. The delete action will remove the clients data from all \nviews in the application but keep it on file in case it needs to be restored.\n\nA Client can be later restored reversing this action.  \n\nTo permanently wipe a client and all of their records from the system, use the [/purge route](/#tag/clients/POST/api/v1/clients/{id}/purge)\n',
  operationId: 'deleteClient',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Client Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1ClientsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/clients/{id}/edit',
  tags: ['clients'],
  summary: 'Edit Client',
  description:
    '##  GET /api/v1/clients/{id}/edit\nDisplays a client by id, essentially an alias of the show route\n',
  operationId: 'editClient',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Client Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the client object',
      content: { 'application/json': { schema: ClientSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const getApiV1ClientsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/clients/create',
  tags: ['clients'],
  summary: 'Blank Client',
  description: '##  GET /api/v1/clients/create  \n\nReturns a blank object with default values\n',
  operationId: 'getClientsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank client object',
      content: { 'application/json': { schema: ClientSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1ClientsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/clients/bulk',
  tags: ['clients'],
  summary: 'Bulk client actions',
  description:
    "##  POST /api/v1/clients/bulk\n\nBulk actions allow to make changes to multiple clients in a single request the following actions are supported\n\n- archive\n- restore\n- delete\n- template _requires template,template_id properties also_\n- assign_group _requires group_settings_id also_\n- bulk_update _requires column,new_value also_\n\nAll of these actions require an array of client ids to perform the requested action on ie.\n\n\"ids\":['id1','id2']\n\nactions such as template, assign_group and bulk_update also require additional properties to be passed in the request\n\n- template\n\nThe template bulk action allows the creation of a custom template using the provided template_id to be run against the array of clients provided.\n\n- assign_group\n\nAllows setting multiple clients to a single group\n\n- bulk_update\n\nAllows updating certain columns on the client model in bulk. the current list of supported columns that can be updated archived_at:\n\n- public_notes\n- industry_id\n- size_id\n- country_id\n- custom_value1\n- custom_value2\n- custom_value3\n- custom_value4\n",
  operationId: 'bulkClients',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
    body: {
      description: 'Bulk action array',
      content: { 'application/json': { schema: GenericBulkActionSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Client list Response of the updated clients that were bulk updated',
      content: { 'application/json': { schema: ClientSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1ClientsIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/clients/{id}/upload',
  tags: ['clients'],
  summary: 'Add client document',
  description:
    '##  POST /api/v1/clients/{id}/upload\n\nHandles the uploading of a document to a client, please note due to a quirk in REST you will need to use a _method parameter with value of POST\n',
  operationId: 'uploadClient',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Client Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'POST' }),
              'documents[]': z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'The file contents',
                      }),
                  ),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Array of files to upload. The files should be sent with the key name 'documents[]'.\n\nSupported file types:\n- PDF (.pdf)\n- Word (.doc, .docx)\n- Excel (.xls, .xlsx)\n- Images (.jpg, .jpeg, .png)\n- Text (.txt)\n\nMaximum file size: 20MB per file\n",
                  example: ['@/path/to/document.pdf'],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the client object',
      content: { 'application/json': { schema: ClientSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1ClientsIdPurgeRoute = createRoute({
  method: 'post',
  path: '/api/v1/clients/{id}/purge',
  tags: ['clients'],
  summary: 'Purge client',
  description:
    '##  POST /api/v1/clients/{id}/purge\n\nHandles purging a client.\n\n> ❗ Note\nThis is a destructive action.\nThis action will remove all data associated with the client and cannot be undone.\n',
  operationId: 'purgeClient',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
      'X-API-PASSWORD': XAPIPASSWORDParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Client Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the client object',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1ClientsIdMergeableClientHashedIdMergeRoute = createRoute({
  method: 'post',
  path: '/api/v1/clients/{id}/{mergeable_client_hashed_id}/merge',
  tags: ['clients'],
  summary: 'Merge client',
  description:
    '##  POST /api/v1/clients/{id}/{mergeable_client_hashed_id}/merge\n\nHandles merging 2 clients\n\nThe id parameter is the client that will be the primary client after the merge has completed. \n\nThe mergeable_client_hashed_id is the client that will be merged into the primary client, this clients records will be updated and associated with the primary client.\n\n> 🚨 **Important**    \nThis action requires elevated permissions, please note the X-API-PASSWORD header requirements for this route.\n',
  operationId: 'mergeClient',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
      'X-API-PASSWORD': XAPIPASSWORDParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Client Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
      mergeable_client_hashed_id: z
        .string()
        .openapi({
          param: {
            name: 'mergeable_client_hashed_id',
            in: 'path',
            description: 'The Mergeable Client Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the client object',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    default: DefaultResponse,
  },
})

export const postApiV1ClientStatementRoute = createRoute({
  method: 'post',
  path: '/api/v1/client_statement',
  tags: ['clients'],
  summary: 'Client statement PDF',
  description:
    '##  POST /api/v1/client_statement\n\nReturn a PDF of the client statement\n\nYou may also pass the query parameter `?send_email=true` to send the statement via email to the client.\n',
  operationId: 'clientStatement',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      index: IndexParamsSchema,
      include: ClientIncludeParamsSchema,
      send_email: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'send_email',
            in: 'query',
            description:
              'When set to true, the statement will also be sent via email to the client.',
            required: false,
            schema: { type: 'boolean', default: false },
          },
        }),
    }),
    body: {
      description: 'Statement Options',
      content: {
        'application/json': {
          schema: z
            .object({
              start_date: z
                .string()
                .exactOptional()
                .openapi({ description: 'The start date of the statement period - format Y-m-d' }),
              end_date: z
                .string()
                .exactOptional()
                .openapi({ description: 'The start date of the statement period - format Y-m-d' }),
              client_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The hashed ID of the client' }),
              show_payments_table: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Flag which determines if the payments table is shown' }),
              show_credits_table: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Flag which determines if the credits table is shown' }),
              show_aging_table: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Flag which determines if the aging table is shown' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the client object',
      content: { 'application/json': { schema: ClientSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ReactivateEmailBounceIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/reactivate_email/{bounce_id}',
  tags: ['clients'],
  summary: 'Removes email suppression of a user in the system',
  description:
    '##  POST /api/v1/reactivate_email/{bounce_id}\n\nEmails are suppressed by PostMark, when they receive a Hard bounce / Spam Complaint. This endpoint allows you to remove the suppression and send emails to the user again.\n',
  operationId: 'reactivateEmail',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
    params: z.object({
      bounce_id: z
        .string()
        .openapi({
          param: {
            name: 'bounce_id',
            in: 'path',
            description: 'The postmark Bounce ID reference',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: '123243',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    400: {
      description:
        'Postmark exception - generated if the suppression cannot be removed for any reason',
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ClientsClientUpdateTaxDataRoute = createRoute({
  method: 'post',
  path: '/api/v1/clients/{client}/updateTaxData',
  tags: ['clients'],
  summary: 'Update tax data',
  description:
    '##  POST /api/v1/clients/{client}/updateTaxData\n\nUpdates the clients tax data - if their address has changed\n',
  operationId: 'updateClientTaxData',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema, include: ClientIncludeParamsSchema }),
    params: z.object({
      client: z
        .string()
        .openapi({
          param: {
            name: 'client',
            in: 'path',
            description: 'The Client Hashed ID reference',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'V2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    400: {
      description:
        'Postmark exception - generated if the suppression cannot be removed for any reason',
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PurchaseOrdersRoute = createRoute({
  method: 'get',
  path: '/api/v1/purchase_orders',
  tags: ['Purchase Orders'],
  summary: 'List purchase orders',
  description:
    'Lists purchase orders, search and filters allow fine grained lists to be generated.\n     *\n     *      Query parameters can be added to performed more fine grained filtering of the purchase orders, these are handled by the PurchaseOrderFilters class which defines the methods available',
  operationId: 'getPurchaseOrders',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortPurchaseOrdersParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A list of purchase orders',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(PurchaseOrderSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1PurchaseOrdersRoute = createRoute({
  method: 'post',
  path: '/api/v1/purchase_orders',
  tags: ['Purchase Orders'],
  summary: 'Create purchase order',
  description: 'Adds a purchase order to the system',
  operationId: 'storePurchaseOrder',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'Purchase order object that needs to be added to the company',
      content: { 'application/json': { schema: PurchaseOrderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved purchase order object',
      content: { 'application/json': { schema: PurchaseOrderSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PurchaseOrdersIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/purchase_orders/{id}',
  tags: ['Purchase Orders'],
  summary: 'Show purchase order',
  description: 'Displays an purchase order by id',
  operationId: 'showPurchaseOrder',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Purchase order Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the purchase order object',
      content: { 'application/json': { schema: PurchaseOrderSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1PurchaseOrderIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/purchase_order/{id}',
  tags: ['Purchase Orders'],
  summary: 'Update purchase order',
  description: 'Handles the updating of a purchase order by id',
  operationId: 'updatePurchaseOrder',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The purchase order Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'Purchase order object that needs to be updated',
      content: { 'application/json': { schema: PurchaseOrderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the purchase order object',
      content: { 'application/json': { schema: PurchaseOrderSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1PurchaseOrderIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/purchase_order/{id}',
  tags: ['Purchase Orders'],
  summary: 'Delete purchase order',
  description: 'Handles the deletion of an purchase orders by id',
  operationId: 'deletePurchaseOrder',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The purhcase order Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PurchaseOrdersIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/purchase_orders/{id}/edit',
  tags: ['Purchase Orders'],
  summary: 'Edit purchase order',
  description: 'Displays an purchase order by id',
  operationId: 'editPurchaseOrder',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The purchase order Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the purchase order object',
      content: { 'application/json': { schema: PurchaseOrderSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PurchaseOrdersCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/purchase_orders/create',
  tags: ['Purchase Orders'],
  summary: 'Blank purchase order',
  description: 'Returns a blank object with default values',
  operationId: 'getPurchaseOrderCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank purchase order object',
      content: { 'application/json': { schema: PurchaseOrderSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1PurchaseOrdersBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/purchase_orders/bulk',
  tags: ['Purchase Orders'],
  summary: 'Bulk purchase order action',
  operationId: 'bulkPurchaseOrderss',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Purchase Order IDS',
      content: {
        'application/json': {
          schema: z.array(
            z
              .int()
              .openapi({ description: "Array of hashed IDs to be bulk 'actioned", example: 0 }),
          ),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Bulk Action response',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PurchaseOrdersIdActionRoute = createRoute({
  method: 'get',
  path: '/api/v1/purchase_orders/{id}/{action}',
  tags: ['Purchase Orders'],
  summary: 'Custom purchase order actions',
  description:
    'Performs a custom action on an purchase order.\n     *\n     *        The current range of actions are as follows\n     *        - mark_paid\n     *        - download\n     *        - archive\n     *        - delete\n     *        - email',
  operationId: 'actionPurchaseOrder',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Purchase Order Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
      action: z
        .string()
        .openapi({
          param: {
            name: 'action',
            in: 'path',
            description: 'The action string to be performed',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'clone_to_quote',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the purchase order object',
      content: { 'application/json': { schema: PurchaseOrderSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
  deprecated: true,
})

export const postApiV1PurchaseOrdersIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/purchase_orders/{id}/upload',
  tags: ['Purchase Orders'],
  summary: 'Uploads a purchase order document',
  description: 'Handles the uploading of a document to a purchase_order',
  operationId: 'uploadPurchaseOrder',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Purchase Order Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'File Upload Body',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'PUT' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    z
                      .file()
                      .openapi({
                        type: 'string',
                        format: 'binary',
                        description: 'Array of binary documents for upload',
                      }),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Purchase Order object',
      content: { 'application/json': { schema: PurchaseOrderSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1PurchaseOrderInvitationKeyDownloadRoute = createRoute({
  method: 'get',
  path: '/api/v1/purchase_order/{invitation_key}/download',
  tags: ['Purchase Orders'],
  summary: 'Download a purchase order PDF',
  description: 'Downloads a specific purchase order',
  operationId: 'downloadPurchaseOrder',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      invitation_key: z
        .string()
        .openapi({
          param: {
            name: 'invitation_key',
            in: 'path',
            description: 'The Purchase Order Invitation Key',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Purchase Order pdf',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ProductsRoute = createRoute({
  method: 'get',
  path: '/api/v1/products',
  tags: ['products'],
  summary: 'List products',
  description:
    '##  GET /api/v1/products\nLists products within your company.\n\nYou can search and filter the result set using query parameters. These can be chained together allowing fine grained lists to be generated.    \n',
  operationId: 'getProducts',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({
      include: IncludeParamsSchema,
      index: IndexParamsSchema,
      per_page: PerPageMetaParamsSchema,
      page: PageMetaParamsSchema,
      sort: SortProductsParamsSchema,
      status: StatusParamsSchema,
      client_id: ClientIdParamsSchema,
      created_at: CreatedAtParamsSchema,
      updated_at: UpdatedAtParamsSchema,
      is_deleted: IsDeletedParamsSchema,
      filter_deleted_clients: FilterDeletedClientsParamsSchema,
      vendor_id: VendorIdParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Filter by product name',
            required: false,
            schema: { type: 'string' },
            example: 'bob',
          },
        }),
      product_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'product_key',
            in: 'query',
            description: 'Filter by product key',
            required: false,
            schema: { type: 'string' },
            example: 'bob',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A list of products',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.array(ProductSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ProductsRoute = createRoute({
  method: 'post',
  path: '/api/v1/products',
  tags: ['products'],
  summary: 'Create Product',
  description: '##  POST /api/v1/products\nAdds a product to a company\n',
  operationId: 'storeProduct',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    body: {
      description: 'Product object that needs to be added to the company',
      content: { 'application/json': { schema: ProductRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the saved product object',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ProductsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/products/{id}',
  tags: ['products'],
  summary: 'Show product',
  description: '##  GET /api/v1/products/{id}\nDisplays a product by id\n',
  operationId: 'showProduct',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Product Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the product object',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const putApiV1ProductsIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/products/{id}',
  tags: ['products'],
  summary: 'Update product',
  description: '##  PUT /api/v1/products/{id}\nHandles the updating of a product by id\n',
  operationId: 'updateProduct',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Product Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      description: 'Product object that needs to be added to the company',
      content: { 'application/json': { schema: ProductRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Product object',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const deleteApiV1ProductsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/products/{id}',
  tags: ['products'],
  summary: 'Delete product',
  description: '##  DELETE /api/v1/products/{id}\nHandles the deletion of a product by id\n',
  operationId: 'deleteProduct',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Product Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns a HTTP status',
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ProductsIdEditRoute = createRoute({
  method: 'get',
  path: '/api/v1/products/{id}/edit',
  tags: ['products'],
  summary: 'Edit product',
  description: '##  GET /api/v1/products/{id}/edit\nDisplays an Product by id\n',
  operationId: 'editProduct',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Product Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns the Product object',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const getApiV1ProductsCreateRoute = createRoute({
  method: 'get',
  path: '/api/v1/products/create',
  tags: ['products'],
  summary: 'Blank product',
  description:
    '##  GET /api/v1/products/create\nReturns a blank product object with default values\n',
  operationId: 'getProductsCreate',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: IncludeParamsSchema }),
  },
  responses: {
    200: {
      description: 'A blank Product object',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ProductsBulkRoute = createRoute({
  method: 'post',
  path: '/api/v1/products/bulk',
  tags: ['products'],
  summary: 'Bulk product actions',
  description: '##  POST /api/v1/products/bulk\nArchive / Restore / Delete  / Set tax id in bulk\n',
  operationId: 'bulkProducts',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ index: IndexParamsSchema }),
    body: {
      description: 'Bulk action array',
      content: { 'application/json': { schema: ProductBulkActionSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The Product response',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

export const postApiV1ProductsIdUploadRoute = createRoute({
  method: 'post',
  path: '/api/v1/products/{id}/upload',
  tags: ['products'],
  summary: 'Add product document',
  description:
    '##  POST /api/v1/products/{id}/upload\nHandles the uploading of a document to a product"\n',
  operationId: 'uploadProduct',
  request: {
    headers: z.object({
      'X-API-TOKEN': XAPITOKENParamsSchema,
      'X-Requested-With': XRequestedWithParamsSchema,
    }),
    query: z.object({ include: ClientIncludeParamsSchema }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The Product Hashed ID',
            required: true,
            schema: { type: 'string', format: 'string' },
            example: 'D2J234DFA',
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              _method: z.string().exactOptional().openapi({ example: 'POST' }),
              documents: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(
                    ((schema) =>
                      z.union([
                        schema,
                        z.preprocess((val) => (val === 'null' ? null : val), schema),
                      ]))(z.any()),
                  ),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Returns the Product object',
      content: { 'application/json': { schema: ProductSchema } },
      headers: z.object({
        'X-MINIMUM-CLIENT-VERSION': XMINIMUMCLIENTVERSIONHeaderSchema,
        'X-RateLimit-Remaining': XRateLimitRemainingHeaderSchema,
        'X-RateLimit-Limit': XRateLimitLimitHeaderSchema,
      }),
    },
    401: _401Response,
    403: _403Response,
    422: _422Response,
    429: _429Response,
    '5XX': { description: 'Server error' },
    default: DefaultResponse,
  },
})

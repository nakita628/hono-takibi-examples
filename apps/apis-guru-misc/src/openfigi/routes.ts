import { createRoute, z } from '@hono/zod-openapi'

const NullableNumberIntervalSchema = z
  .array(z.number().nullable())
  .length(2)
  .nullable()
  .openapi({ description: 'At least one entry should be non-null.' })
  .openapi('NullableNumberInterval')

const NullableDateIntervalSchema = z
  .array(z.iso.date().nullable())
  .length(2)
  .nullable()
  .openapi({ description: 'At least one entry should be non-null.' })
  .openapi('NullableDateInterval')

const MappingJobSchema = z
  .object({
    contractSize: NullableNumberIntervalSchema.exactOptional(),
    coupon: NullableNumberIntervalSchema.exactOptional(),
    currency: z.string().nullable().exactOptional(),
    exchCode: z.string().nullable().exactOptional(),
    expiration: NullableDateIntervalSchema.exactOptional(),
    idType: z.enum([
      'ID_ISIN',
      'ID_BB_UNIQUE',
      'ID_SEDOL',
      'ID_COMMON',
      'ID_WERTPAPIER',
      'ID_CUSIP',
      'ID_BB',
      'ID_ITALY',
      'ID_EXCH_SYMBOL',
      'ID_FULL_EXCHANGE_SYMBOL',
      'COMPOSITE_ID_BB_GLOBAL',
      'ID_BB_GLOBAL_SHARE_CLASS_LEVEL',
      'ID_BB_SEC_NUM_DES',
      'ID_BB_GLOBAL',
      'TICKER',
      'ID_CUSIP_8_CHR',
      'OCC_SYMBOL',
      'UNIQUE_ID_FUT_OPT',
      'OPRA_SYMBOL',
      'TRADING_SYSTEM_IDENTIFIER',
      'ID_CINS',
      'ID_SHORT_CODE',
      'BASE_TICKER',
      'VENDOR_INDEX_CODE',
    ]),
    idValue: z.xor([z.string(), z.int()]).default('string'),
    includeUnlistedEquities: z.boolean().nullable().exactOptional(),
    marketSecDes: z.string().nullable().exactOptional(),
    maturity: NullableDateIntervalSchema.exactOptional(),
    micCode: z.string().nullable().exactOptional(),
    optionType: z.enum(['Put', 'Call']).nullable().exactOptional(),
    securityType: z.string().nullable().exactOptional(),
    securityType2: z.string().nullable().exactOptional(),
    stateCode: z
      .enum([
        'AB',
        'AC',
        'AC',
        'AH',
        'AK',
        'AL',
        'AM',
        'AR',
        'AS',
        'AT',
        'AZ',
        'BC',
        'BJ',
        'CA',
        'CB',
        'CO',
        'CQ',
        'CT',
        'CZ',
        'DC',
        'DE',
        'EH',
        'FH',
        'FI',
        'FJ',
        'FL',
        'FO',
        'FS',
        'GA',
        'GD',
        'GF',
        'GM',
        'GS',
        'GU',
        'GX',
        'GZ',
        'HA',
        'HB',
        'HE',
        'HG',
        'HI',
        'HI',
        'HL',
        'HN',
        'HO',
        'HS',
        'IA',
        'ID',
        'IG',
        'IK',
        'IL',
        'IN',
        'IT',
        'JL',
        'JS',
        'JX',
        'KA',
        'KC',
        'KN',
        'KO',
        'KS',
        'KT',
        'KU',
        'KY',
        'LA',
        'LN',
        'MA',
        'MB',
        'MD',
        'ME',
        'ME',
        'MG',
        'MI',
        'MN',
        'MO',
        'MS',
        'MT',
        'MZ',
        'NB',
        'NC',
        'ND',
        'NE',
        'NG',
        'NH',
        'NJ',
        'NL',
        'NM',
        'NM',
        'NN',
        'NR',
        'NS',
        'NS',
        'NS',
        'NT',
        'NU',
        'NV',
        'NW',
        'NX',
        'NY',
        'OH',
        'OK',
        'ON',
        'ON',
        'OR',
        'OS',
        'OT',
        'OT',
        'OY',
        'PA',
        'PE',
        'PR',
        'QC',
        'QH',
        'QL',
        'RI',
        'SA',
        'SA',
        'SC',
        'SC',
        'SD',
        'SD',
        'SH',
        'SI',
        'SK',
        'SN',
        'SN',
        'ST',
        'SX',
        'SZ',
        'TA',
        'TG',
        'TJ',
        'TK',
        'TN',
        'TS',
        'TT',
        'TT',
        'TX',
        'TY',
        'UT',
        'VA',
        'VI',
        'VI',
        'VT',
        'WA',
        'WA',
        'WI',
        'WK',
        'WV',
        'WY',
        'XJ',
        'XZ',
        'YA',
        'YN',
        'YN',
        'YT',
        'YU',
        'ZJ',
      ])
      .nullable()
      .exactOptional(),
    strike: NullableNumberIntervalSchema.exactOptional(),
  })
  .openapi({
    description:
      'For V3: securityType2 is required when idType is BASE_TICKER or ID_EXCH_SYMBOL.  expiration is required when securityType2 is Option or Warrant.  maturity is required when securityType2 is Pool.',
    required: ['idType', 'idValue'],
  })
  .openapi('MappingJob')

const BulkMappingJobSchema = z.array(MappingJobSchema).openapi('BulkMappingJob')

const FigiResultSchema = z
  .object({
    compositeFIGI: z.string().nullable().exactOptional(),
    exchCode: z.string().nullable().exactOptional(),
    figi: z.string().exactOptional(),
    marketSector: z.string().nullable().exactOptional(),
    metadata: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Exists when API is unable to show non-FIGI fields.' }),
    name: z.string().nullable().exactOptional(),
    securityDescription: z.string().nullable().exactOptional(),
    securityType: z.string().nullable().exactOptional(),
    securityType2: z.string().nullable().exactOptional(),
    shareClassFIGI: z.string().nullable().exactOptional(),
    ticker: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FigiResult')

const MappingJobResultFigiListSchema = z
  .object({ data: z.array(FigiResultSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('MappingJobResultFigiList')

const MappingJobResultFigiNotFoundSchema = z
  .object({ warning: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('MappingJobResultFigiNotFound')

const MappingJobResultSchema = z
  .xor([MappingJobResultFigiListSchema, MappingJobResultFigiNotFoundSchema])
  .openapi('MappingJobResult')

const BulkMappingJobResultSchema = z.array(MappingJobResultSchema).openapi('BulkMappingJobResult')

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-OPENFIGI-APIKEY', type: 'apiKey' }

export const postMappingRoute = createRoute({
  method: 'post',
  path: '/mapping',
  description: 'Allows mapping from third-party identifiers to FIGIs.',
  request: {
    body: {
      description: 'A list of third-party identifiers and extra filters.',
      content: { 'application/json': { schema: BulkMappingJobSchema } },
    },
  },
  responses: {
    200: {
      description: 'A list of FIGIs and their metadata.',
      content: { 'application/json': { schema: BulkMappingJobResultSchema } },
    },
    400: { description: 'Invalid request (body).', content: { '*/*': { schema: z.string() } } },
    401: { description: 'API Key is invalid.', content: { '*/*': { schema: z.string() } } },
    406: { description: "Unsupported 'Accept' type.", content: { '*/*': { schema: z.string() } } },
    413: {
      description: 'Too many mapping jobs in request.',
      content: { '*/*': { schema: z.string() } },
    },
    500: { description: 'Internal server error.', content: { '*/*': { schema: z.string() } } },
  },
})

export const getMappingValuesKeyRoute = createRoute({
  method: 'get',
  path: '/mapping/values/{key}',
  description: 'Get values for enum-like fields.',
  request: {
    params: z.object({
      key: z
        .enum([
          'idType',
          'exchCode',
          'micCode',
          'currency',
          'marketSecDes',
          'securityType',
          'securityType2',
        ])
        .openapi({
          param: {
            description: 'Key of MappingJob for which to get possible values.',
            in: 'path',
            name: 'key',
            required: true,
            schema: {
              enum: [
                'idType',
                'exchCode',
                'micCode',
                'currency',
                'marketSecDes',
                'securityType',
                'securityType2',
              ],
              type: 'string',
            },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of values.',
      content: {
        'application/json': {
          schema: z
            .object({ values: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'Invalid request (key).', content: { '*/*': { schema: z.string() } } },
    500: { description: 'Internal server error.', content: { '*/*': { schema: z.string() } } },
  },
})

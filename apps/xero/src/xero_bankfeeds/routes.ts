import { createRoute, z } from '@hono/zod-openapi'

const PaginationSchema = z
  .object({
    page: z
      .int()
      .exactOptional()
      .openapi({
        example: 1,
        description:
          'Page number which specifies the set of records to retrieve. Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?page=2 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.',
      }),
    pageSize: z
      .int()
      .exactOptional()
      .openapi({
        example: 10,
        description:
          'Page size which specifies how many records per page will be returned (default 50). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100.',
      }),
    pageCount: z
      .int()
      .exactOptional()
      .openapi({ example: 1, description: 'Number of pages available' }),
    itemCount: z
      .int()
      .exactOptional()
      .openapi({ example: 2, description: 'Number of items returned' }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const CurrencyCodeSchema = z
  .enum([
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
    'BRL',
    'BSD',
    'BTN',
    'BWP',
    'BYN',
    'BZD',
    'CAD',
    'CDF',
    'CHF',
    'CLP',
    'CNY',
    'COP',
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
    'GGP',
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
    'IMP',
    'INR',
    'IQD',
    'IRR',
    'ISK',
    'JEP',
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
    'LYD',
    'MAD',
    'MDL',
    'MGA',
    'MKD',
    'MMK',
    'MNT',
    'MOP',
    'MRU',
    'MUR',
    'MVR',
    'MWK',
    'MXN',
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
    'SPL',
    'SRD',
    'STN',
    'SVC',
    'SYP',
    'SZL',
    'THB',
    'TJS',
    'TMT',
    'TND',
    'TOP',
    'TRY',
    'TTD',
    'TVD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'USD',
    'UYU',
    'UZS',
    'VEF',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XCD',
    'XDR',
    'XOF',
    'XPF',
    'YER',
    'ZAR',
    'ZMW',
    'ZMK',
    'ZWD',
  ])
  .openapi({
    description: '3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD.',
    example: 'AUD',
  })
  .openapi('CurrencyCode')

const CountryCodeSchema = z
  .enum([
    'AD',
    'AE',
    'AF',
    'AG',
    'AI',
    'AL',
    'AM',
    'AN',
    'AO',
    'AQ',
    'AR',
    'AS',
    'AT',
    'AU',
    'AW',
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
    'DJ',
    'DK',
    'DM',
    'DO',
    'DZ',
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
    'GG',
    'GH',
    'GI',
    'GL',
    'GM',
    'GN',
    'GQ',
    'GR',
    'GT',
    'GU',
    'GW',
    'GY',
    'HK',
    'HN',
    'HR',
    'HT',
    'HU',
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
    'TC',
    'TD',
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
    'XK',
    'YE',
    'YT',
    'ZA',
    'ZM',
    'ZW',
  ])
  .openapi({
    example: 'GB',
    description:
      'ISO-3166 alpha-2 country code, e.g. US, AU This element is required only when the Application supports multi-region. Talk to your Partner Manager to confirm if this is the case.',
  })
  .openapi('CountryCode')

const ErrorSchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable high level error description.',
        example: 'Invalid Application',
      }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'The numeric HTTP Status Code, e.g. 404', example: 403 }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable detailed error description.',
        example: 'The application has not been configured to use these API endpoints.',
      }),
    type: z
      .enum([
        'invalid-request',
        'invalid-application',
        'invalid-feed-connection',
        'duplicate-statement',
        'invalid-end-balance',
        'invalid-start-and-end-date',
        'invalid-start-date',
        'internal-error',
        'feed-already-connected-in-current-organisation',
        'invalid-end-date',
        'statement-not-found',
        'feed-connected-in-different-organisation',
        'feed-already-connected-in-different-organisation',
        'bank-feed-not-found',
        'invalid-country-specified',
        'invalid-organisation-bank-feeds',
        'invalid-organisation-multi-currency',
        'invalid-feed-connection-for-organisation',
        'invalid-user-role',
        'account-not-valid',
        'feed-not-found-or-already-deleted',
      ])
      .exactOptional()
      .openapi({ description: 'Identifies the type of error.', example: 'invalid-application' }),
  })
  .openapi({
    description:
      'On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.',
    required: [],
  })
  .openapi('Error')

const FeedConnectionSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '0d3cf8d-95dc-4466-8dc0-47e6d1197e28',
        description: 'GUID used to identify the Account.',
      }),
    accountToken: z
      .string()
      .exactOptional()
      .openapi({
        example: '10000123',
        description:
          'This account identifier is generated by the financial institute (FI). This must be unique for your financial institute.',
      }),
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({
        example: '3809087654321500',
        description:
          'String(40) when AccountType is BANK String(4) when AccountType is CREDITCARD The Account Number is used to match the feed to a Xero Bank Account. The API will create a new Xero Bank Account if a match to an existing Xero Bank Account is not found. Only the last 4 digits must be supplied for Credit Card numbers. Must be included if AccountId is not specified.',
      }),
    accountName: z
      .string()
      .exactOptional()
      .openapi({
        example: "Joe's Savings Account",
        description:
          'The Account Name will be used for the creation of a new Xero Bank Account if a matching Xero Bank Account is not found.',
      }),
    accountId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '079a88ea-276d-41fb-a1f1-366ef3e22921',
        description:
          'Xero identifier for a bank account in Xero. Must be included if AccountNumber is not specified.',
      }),
    accountType: z
      .enum(['BANK', 'CREDITCARD'])
      .exactOptional()
      .openapi({
        example: 'BANK',
        description:
          'High level bank account type - BANK CREDITCARD BANK encompasses all bank account types other than credit cards.',
      }),
    currency: CurrencyCodeSchema.exactOptional(),
    country: CountryCodeSchema.exactOptional(),
    status: z
      .enum(['PENDING', 'REJECTED'])
      .exactOptional()
      .openapi({ example: 'REJECTED', description: 'the current status of the feed connection' }),
    error: ErrorSchema.exactOptional(),
  })
  .openapi({
    externalDocs: {
      url: 'https://developer.xero.com/documentation/bank-feeds-api/feed-connections',
    },
    required: [],
  })
  .openapi('FeedConnection')

const FeedConnectionsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    items: z.array(FeedConnectionSchema).exactOptional(),
  })
  .openapi({
    externalDocs: {
      url: 'https://developer.xero.com/documentation/bank-feeds-api/feed-connections',
    },
    required: [],
  })
  .openapi('FeedConnections')

const CreditDebitIndicatorSchema = z
  .enum(['CREDIT', 'DEBIT'])
  .openapi({
    description:
      'If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer.',
  })
  .openapi('CreditDebitIndicator')

const StartBalanceSchema = z
  .object({
    amount: z
      .float64()
      .exactOptional()
      .openapi({
        'x-is-money': true,
        example: '9.0000',
        description: 'decimal(19,4) unsigned Opening/closing balance amount.',
      }),
    creditDebitIndicator: CreditDebitIndicatorSchema.exactOptional(),
  })
  .openapi({ description: 'The starting balance of the statement', required: [] })
  .openapi('StartBalance')

const EndBalanceSchema = z
  .object({
    amount: z.float64().exactOptional().openapi({ 'x-is-money': true, example: '10.1340' }),
    creditDebitIndicator: CreditDebitIndicatorSchema.exactOptional(),
  })
  .openapi({
    description:
      'The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.',
    required: [],
  })
  .openapi('EndBalance')

const StatementLineSchema = z
  .object({
    postedDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        example: '2018-06-10',
        description:
          'The date that the transaction was processed or cleared as seen in internet banking ISO-8601 YYYY-MM-DD',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Description for statement line 2',
        description: 'Transaction description',
      }),
    amount: z
      .float64()
      .exactOptional()
      .openapi({ 'x-is-money': true, example: '5.00', description: 'Transaction amount' }),
    creditDebitIndicator: CreditDebitIndicatorSchema.exactOptional(),
    transactionId: z
      .string()
      .exactOptional()
      .openapi({
        example: 'transaction-id-2',
        description:
          "Financial institute's internal transaction identifier. If provided this field is factored into duplicate detection.",
      }),
    payeeName: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Payee name for statement line 2',
        description: 'Typically the merchant or payee name',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        example: 'Reference for statement line 2',
        description: 'Optional field to enhance the Description',
      }),
    chequeNumber: z
      .string()
      .exactOptional()
      .openapi({ example: '021', description: 'The cheque/check number' }),
    transactionType: z
      .string()
      .exactOptional()
      .openapi({ example: 'Refund', description: 'Descriptive transaction type' }),
  })
  .openapi({ description: 'the lines details for a statement', required: [] })
  .openapi('StatementLine')

const StatementLinesSchema = z.array(StatementLineSchema).openapi('StatementLines')

const StatementSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        example: 'ba4f3127-5e46-427d-80ea-dea2fcd26afe',
        description: 'GUID used to identify the Statement.',
      }),
    feedConnectionId: z
      .uuid()
      .exactOptional()
      .openapi({
        example: '87cb0dc8-fa32-409c-b622-19f8de8dcc83',
        description:
          'The Xero generated feed connection Id that identifies the Xero Bank Account Container into which the statement should be delivered. This is obtained by calling GET FeedConnections.',
      }),
    status: z
      .enum(['PENDING', 'REJECTED', 'DELIVERED'])
      .exactOptional()
      .openapi({ example: 'PENDING', description: 'Current status of statements' }),
    startDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        example: '2018-07-27',
        description:
          'Opening balance date (can be no older than one year from the current date) ISO-8601 YYYY-MM-DD',
      }),
    endDate: z.iso
      .date()
      .exactOptional()
      .openapi({ example: '2018-07-27', description: 'Closing balance date ISO-8601 YYYY-MM-DD' }),
    startBalance: StartBalanceSchema.exactOptional(),
    endBalance: EndBalanceSchema.exactOptional(),
    statementLines: StatementLinesSchema.exactOptional(),
    errors: z.array(ErrorSchema).exactOptional(),
    statementLineCount: z.int().exactOptional().openapi({ example: 1 }),
  })
  .openapi({ required: [] })
  .openapi('Statement')

const StatementsSchema = z
  .object({
    pagination: PaginationSchema.exactOptional(),
    items: z.array(StatementSchema).exactOptional(),
  })
  .openapi({
    externalDocs: { url: 'https://developer.xero.com/documentation/bank-feeds-api/statements' },
    required: [],
  })
  .openapi('Statements')

const RequiredHeaderParamsSchema = z
  .string()
  .openapi({
    param: {
      in: 'header',
      name: 'Xero-Tenant-Id',
      description: 'Xero identifier for Tenant',
      schema: { type: 'string' },
      required: true,
    },
  })

const IdempotencyKeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      in: 'header',
      name: 'Idempotency-Key',
      'x-snake': 'idempotency_key',
      description:
        'This allows you to safely retry requests without the risk of duplicate processing. 128 character max.',
      example: 'KEY_VALUE',
      schema: { type: 'string' },
      required: false,
    },
  })

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description:
    'For more information visit https://developer.xero.com/documentation/oauth2/overview',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://login.xero.com/identity/connect/authorize',
      tokenUrl: 'https://identity.xero.com/connect/token',
      scopes: {
        email: 'Grant read-only access to your email',
        openid: 'Grant read-only access to your open id',
        profile: 'your profile information',
        bankfeeds: 'Grant read-write access to bankfeeds',
      },
    },
  },
}

export const getFeedConnectionsRoute = createRoute({
  method: 'get',
  path: '/FeedConnections',
  tags: ['BankFeeds'],
  summary: 'Searches for feed connections',
  description:
    'By passing in the appropriate options, you can search for available feed connections in the system.',
  operationId: 'getFeedConnections',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
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
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            description:
              'Page number which specifies the set of records to retrieve. By default the number of the records per set is 10. Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?page=1 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.',
            schema: { type: 'integer', example: 1 },
            required: false,
          },
          example: 1,
        }),
      pageSize: z
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
            name: 'pageSize',
            in: 'query',
            description:
              'Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?pageSize=100 to specify page size of 100.',
            schema: { type: 'integer', example: 100 },
            required: false,
          },
          example: 100,
        }),
    }),
  },
  responses: {
    202: {
      description: 'search results matching criteria returned with pagination and items array',
      content: {
        'application/json': {
          schema: FeedConnectionsSchema,
          example: {
            pagination: { page: 1, pageCount: 1, pageSize: 87654321, itemCount: 39 },
            items: [
              {
                id: 'c0eb97b5-4f97-465a-8268-276513c14396',
                accountToken: 'foobar31306',
                accountType: 'BANK',
                accountNumber: '123496842',
                accountName: 'SDK Bank 95921',
                accountId: 'aefbf6be-4285-4ca5-bf39-0f486c8515c7',
                currency: 'GBP',
                country: 'GB',
              },
              {
                id: '3b44b539-4e39-4d53-9334-d8ba01674752',
                accountToken: 'foobar74770',
                accountType: 'BANK',
                accountNumber: '123481122',
                accountName: 'SDK Bank 11272',
                accountId: 'fc2f3cc2-126e-40d7-9fc1-12e52d0a71f1',
                currency: 'GBP',
                country: 'GB',
              },
            ],
          },
        },
      },
    },
    400: { description: 'validation error response' },
  },
  security: [{ OAuth2: ['bankfeeds'] }],
})

export const postFeedConnectionsRoute = createRoute({
  method: 'post',
  path: '/FeedConnections',
  tags: ['BankFeeds'],
  summary: 'Create one or more new feed connection',
  description:
    'By passing in the FeedConnections array object in the body, you can create one or more new feed connections',
  operationId: 'createFeedConnections',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'Feed Connection(s) array object in the body',
      content: {
        'application/json': {
          schema: FeedConnectionsSchema,
          example: {
            items: [
              {
                accountToken: 'foobar71760',
                accountNumber: '123458637',
                accountName: 'SDK Bank 90861',
                accountType: 'BANK',
                currency: 'GBP',
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'success new feed connection(s)response',
      content: {
        'application/json': {
          schema: FeedConnectionsSchema,
          example: {
            items: [
              {
                id: '2a19d46c-2a92-4e50-9401-dcf2cb895be7',
                accountToken: 'foobar71760',
                status: 'PENDING',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'failed to create new feed connection(s)response',
      content: {
        'application/json': {
          schema: FeedConnectionsSchema,
          example: {
            items: [
              {
                accountToken: 'foobar71760',
                status: 'REJECTED',
                error: {
                  type: 'invalid-request',
                  title: 'Invalid Request',
                  status: 400,
                  detail:
                    "For the request field 'AccountNumber' exceeded the maximum length of 40.",
                },
              },
            ],
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['bankfeeds'] }],
})

export const getFeedConnectionsIdRoute = createRoute({
  method: 'get',
  path: '/FeedConnections/{id}',
  tags: ['BankFeeds'],
  summary: 'Retrieve single feed connection based on a unique id provided',
  description:
    'By passing in a FeedConnection Id options, you can search for matching feed connections',
  operationId: 'getFeedConnection',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            required: true,
            in: 'path',
            name: 'id',
            description: 'Unique identifier for retrieving single object',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success returns a FeedConnection object matching the id in response',
      content: {
        'application/json': {
          schema: FeedConnectionSchema,
          example: {
            id: 'b58b685a-1bee-4904-91f1-fee30bb6ea52',
            accountToken: 'foobar84778',
            accountType: 'BANK',
            accountNumber: '123434859',
            accountName: 'SDK Bank 5517',
            accountId: 'f4c4d595-da94-493b-999a-19d1ae1f508a',
            currency: 'GBP',
            country: 'GB',
          },
        },
      },
    },
    400: { description: 'bad input parameter' },
  },
  security: [{ OAuth2: ['bankfeeds'] }],
})

export const postFeedConnectionsDeleteRequestsRoute = createRoute({
  method: 'post',
  path: '/FeedConnections/DeleteRequests',
  tags: ['BankFeeds'],
  summary: 'Delete an existing feed connection',
  description:
    'By passing in FeedConnections array object in the body, you can delete a feed connection.',
  operationId: 'deleteFeedConnections',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'Feed Connections array object in the body',
      content: {
        'application/json': {
          schema: FeedConnectionsSchema,
          example: { items: [{ id: 'b4cc693b-24d9-42ec-a6d4-2943d253ff63' }] },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success response for deleted feed connection',
      content: {
        'application/json': {
          schema: FeedConnectionsSchema,
          example: {
            items: [
              { id: 'b4cc693b-24d9-42ec-a6d4-2943d253ff63', status: 'PENDING' },
              {
                accountToken: '10000125',
                status: 'REJECTED',
                error: {
                  type: 'feed-connected-in-different-organisation',
                  title: 'Feed connected in different organisation',
                  detail:
                    'The AccountToken is connected to another Xero Bank Account associated with this bank. This Xero Bank Account belongs to a different Xero Organisation.',
                },
              },
            ],
          },
        },
      },
    },
    400: { description: 'bad input parameter' },
  },
  security: [{ OAuth2: ['bankfeeds'] }],
})

export const getStatementsRoute = createRoute({
  method: 'get',
  path: '/Statements',
  tags: ['BankFeeds'],
  summary: 'Retrieve all statements',
  description: 'By passing in parameters, you can search for matching statements',
  operationId: 'getStatements',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Xero-Application-Id': z
        .string()
        .default('00000000-0000-0000-0000-0000000010000')
        .exactOptional()
        .openapi({
          param: {
            name: 'Xero-Application-Id',
            in: 'header',
            required: false,
            schema: { type: 'string', default: '00000000-0000-0000-0000-0000000010000' },
          },
        }),
      'Xero-User-Id': z
        .string()
        .default('00000000-0000-0000-0000-0000030000000')
        .exactOptional()
        .openapi({
          param: {
            name: 'Xero-User-Id',
            in: 'header',
            required: false,
            schema: { type: 'string', default: '00000000-0000-0000-0000-0000030000000' },
          },
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            description: 'unique id for single object',
            required: false,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'pageSize',
            description:
              'Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100.',
            required: false,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success returns Statements array of objects response',
      content: {
        'application/json': {
          schema: StatementsSchema,
          example: {
            pagination: { page: 1, pageCount: 210, pageSize: 3, itemCount: 3 },
            items: [
              {
                id: '9817e4b8-82b3-4526-91f7-040bd278053f',
                feedConnectionId: '6a4b9ff5-3a5f-4321-936b-4796163550f6',
                status: 'REJECTED',
                startDate: '2019-08-01',
                endDate: '2019-08-15',
                startBalance: { amount: '100.0000', creditDebitIndicator: 'CREDIT' },
                endBalance: { amount: '150.0000', creditDebitIndicator: 'CREDIT' },
                statementLineCount: '1',
                errors: [
                  {
                    type: 'duplicate-statement',
                    title: 'Duplicate Statement Received',
                    status: 409,
                    detail: 'The received statement was marked as a duplicate.',
                  },
                ],
              },
              {
                id: '2fc57bac-7aa7-4981-a5cd-8aee83fe698c',
                feedConnectionId: '6a4b9ff5-3a5f-4321-936b-4796163550f6',
                status: 'DELIVERED',
                startDate: '2019-08-01',
                endDate: '2019-08-15',
                startBalance: { amount: '100.0000', creditDebitIndicator: 'CREDIT' },
                endBalance: { amount: '150.0000', creditDebitIndicator: 'CREDIT' },
                statementLineCount: '1',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'bad input parameter',
      content: {
        'application/problem+json': {
          schema: StatementsSchema,
          example: {
            type: 'invalid-request',
            title: 'Invalid Request',
            status: 400,
            detail: 'For the request field missing parameter.',
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['bankfeeds'] }],
})

export const postStatementsRoute = createRoute({
  method: 'post',
  path: '/Statements',
  tags: ['BankFeeds'],
  summary: 'Creates one or more new statements',
  operationId: 'createStatements',
  request: {
    headers: z.object({
      'Xero-Tenant-Id': RequiredHeaderParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      description: 'Statements array of objects in the body',
      content: {
        'application/json': {
          schema: StatementsSchema,
          example: {
            items: [
              {
                feedConnectionId: '6a4b9ff5-3a5f-4321-936b-4796163550f6',
                startDate: '2019-08-11',
                endDate: '2019-08-11',
                startBalance: { amount: '100', creditDebitIndicator: 'CREDIT' },
                endBalance: { amount: '150', creditDebitIndicator: 'CREDIT' },
                statementLines: [
                  {
                    postedDate: '2019-08-11',
                    description: 'My new line',
                    amount: '50',
                    creditDebitIndicator: 'CREDIT',
                    transactionId: '123446422',
                    payeeName: 'StarLord90315',
                    reference: 'Foobar95578',
                    chequeNumber: '12379009',
                    transactionType: 'Refund',
                  },
                ],
              },
              {
                feedConnectionId: '2ebe6393-f3bb-48ab-9a0e-b04fa8585a70',
                startDate: '2019-08-11',
                endDate: '2019-08-11',
                startBalance: { amount: '100', creditDebitIndicator: 'CREDIT' },
                endBalance: { amount: '150', creditDebitIndicator: 'CREDIT' },
                statementLines: [
                  {
                    postedDate: '2019-08-11',
                    description: 'My new line',
                    amount: '50',
                    creditDebitIndicator: 'CREDIT',
                    transactionId: '123449402',
                    payeeName: 'StarLord56705',
                    reference: 'Foobar67355',
                    chequeNumber: '12379350',
                    transactionType: 'Currency Conversion Fee',
                  },
                ],
              },
            ],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Success returns Statements array of objects in response',
      content: {
        'application/json': {
          schema: StatementsSchema,
          example: {
            items: [
              {
                id: 'd69b02b7-a30c-464a-99cf-ba9770373c61',
                feedConnectionId: '6a4b9ff5-3a5f-4321-936b-4796163550f6',
                status: 'PENDING',
              },
              {
                id: '598f255c-015b-4138-93df-2e06c64565b3',
                feedConnectionId: '2ebe6393-f3bb-48ab-9a0e-b04fa8585a70',
                status: 'PENDING',
              },
            ],
          },
        },
      },
    },
    400: {
      description: 'Statement failed validation',
      content: {
        'application/problem+json': {
          schema: StatementsSchema,
          example: {
            type: 'invalid-request',
            title: 'Invalid Request',
            status: 400,
            detail:
              "For the request field 'StatementLine.ChequeNumber' exceeded the maximum length of 20.",
          },
        },
      },
    },
    403: {
      description: 'Invalid application or feed connection',
      content: {
        'application/problem+json': {
          schema: ErrorSchema,
          example: {
            type: 'invalid-application',
            title: 'Invalid Application',
            status: 403,
            detail: 'The application has not been configured to use these API endpoints.',
          },
        },
      },
    },
    409: {
      description: 'Duplicate statement received',
      content: {
        'application/problem+json': {
          schema: StatementsSchema,
          example: {
            items: [
              {
                id: '29fefeb6-f449-470d-9179-f1d8900930d6',
                feedConnectionId: '6a4b9ff5-3a5f-4321-936b-4796163550f6',
                status: 'REJECTED',
                errors: [
                  {
                    type: 'duplicate-statement',
                    title: 'Duplicate Statement Received',
                    status: 409,
                    detail: 'The received statement was marked as a duplicate.',
                  },
                ],
              },
            ],
          },
        },
      },
    },
    413: {
      description: 'Statement exceeds size limit',
      content: {
        'application/problem+json': {
          schema: StatementsSchema,
          example: {
            type: 'invalid-request',
            title: 'Request too large',
            status: 413,
            detail: 'Request size of 3500000 bytes exceeds the limit of 3000000 bytes.',
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity',
      content: {
        'application/problem+json': {
          schema: StatementsSchema,
          example: {
            type: 'invalid-end-balance',
            title: 'Invalid End Balance',
            status: 422,
            detail: 'End balance does not match start balance +/- statement line amounts.',
          },
        },
      },
    },
    500: {
      description: 'Intermittent Xero Error',
      content: {
        'application/problem+json': {
          schema: StatementsSchema,
          example: {
            type: 'internal-error',
            title: 'Intermittent Internal Xero Error',
            status: 500,
            detail:
              'The request should be retried. If the error persists, a Xero support issue should be raised.',
          },
        },
      },
    },
  },
  security: [{ OAuth2: ['bankfeeds'] }],
})

export const getStatementsStatementIdRoute = createRoute({
  method: 'get',
  path: '/Statements/{statementId}',
  tags: ['BankFeeds'],
  summary: 'Retrieve single statement based on unique id provided',
  description: 'By passing in a statement id, you can search for matching statements',
  operationId: 'getStatement',
  request: {
    headers: z.object({ 'Xero-Tenant-Id': RequiredHeaderParamsSchema }),
    params: z.object({
      statementId: z
        .uuid()
        .openapi({
          param: {
            name: 'statementId',
            description: 'statement id for single object',
            in: 'path',
            required: true,
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'search results matching id for single statement',
      content: {
        'application/json': {
          schema: StatementSchema,
          example: {
            id: '97aca24a-dd10-4cda-98c7-1084a048257b',
            feedConnectionId: '6a4b9ff5-3a5f-4321-936b-4796163550f6',
            status: 'DELIVERED',
            startDate: '2019-08-11',
            endDate: '2019-10-11',
            startBalance: { amount: '100.0000', creditDebitIndicator: 'CREDIT' },
            endBalance: { amount: '150.0000', creditDebitIndicator: 'CREDIT' },
            statementLineCount: '1',
          },
        },
      },
    },
    404: { description: 'Statement not found' },
  },
  security: [{ OAuth2: ['bankfeeds'] }],
})

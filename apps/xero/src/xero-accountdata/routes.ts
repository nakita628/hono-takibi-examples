import { createRoute, z } from '@hono/zod-openapi'

const LedgerDecimalSchema = z
  .object({
    value: z.float64().openapi({ description: 'Amount value (always positive).' }),
    type: z.enum(['DEBIT', 'CREDIT']),
  })
  .openapi({ required: ['value', 'type'] })
  .openapi('LedgerDecimal')

const AccountSchema = z
  .object({
    code: z.string().nullable().exactOptional(),
    name: z.string(),
    class: z.enum(['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE']),
    type: z
      .string()
      .openapi({
        description:
          "Account type (e.g. `BANK`, `CURRENT`). Reported as `INVENTORY` for inventory\nasset accounts, regardless of the account's underlying type.\n",
      }),
    status: z.enum(['ACTIVE', 'ARCHIVED', 'DELETED']),
    systemAccountCode: z
      .string()
      .openapi({
        description: 'System account code, or `NONE` if the account has no system account code.',
      }),
  })
  .openapi({ required: ['name', 'class', 'type', 'status', 'systemAccountCode'] })
  .openapi('Account')

const AccountBalanceSchema = z
  .object({
    accountId: z.uuid().openapi({ description: 'The account this balance is for.' }),
    date: z.iso.date().openapi({ description: 'The date this balance applies to (YYYY-MM-DD).' }),
    balance: LedgerDecimalSchema,
    signedBalance: z
      .float64()
      .openapi({
        description: 'Balance as a signed number (positive for debit, negative for credit).',
      }),
    account: AccountSchema,
  })
  .openapi({ required: ['accountId', 'date', 'balance', 'signedBalance', 'account'] })
  .openapi('AccountBalance')

const AccountBalancesResponseSchema = z
  .object({ accountBalances: z.array(AccountBalanceSchema) })
  .openapi({ required: ['accountBalances'] })
  .openapi('AccountBalancesResponse')

const ProblemDetailsSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI reference identifying the problem type.' }),
    title: z.string().openapi({ description: 'Short, human-readable summary.' }),
    status: z.int().openapi({ description: 'HTTP status code.' }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed explanation of the problem.' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI reference identifying the specific occurrence.' }),
  })
  .openapi({
    description: 'Problem details for HTTP APIs, in the style of RFC 7807.',
    required: ['title', 'status'],
  })
  .openapi('ProblemDetails')

const AccountingDateRangeSchema = z
  .object({ startDate: z.iso.date(), endDate: z.iso.date() })
  .openapi({ required: ['startDate', 'endDate'] })
  .openapi('AccountingDateRange')

const AccountMovementSchema = z
  .object({
    accountId: z.uuid().openapi({ description: 'The account this movement is for.' }),
    dateRange: AccountingDateRangeSchema,
    debits: z
      .float64()
      .openapi({ description: 'Total debits posted to this account within the date range.' }),
    credits: z
      .float64()
      .openapi({ description: 'Total credits posted to this account within the date range.' }),
    movement: LedgerDecimalSchema,
    signedMovement: z
      .float64()
      .openapi({
        description: 'Movement as a signed number (positive for debit, negative for credit).',
      }),
    taxDebits: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total tax debits within the date range. Omitted from the response when tax values are not available.',
      }),
    taxCredits: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Total tax credits within the date range. Omitted from the response when tax values are not available.',
      }),
    signedTaxMovement: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Tax movement as a signed number (positive for debit, negative for credit). Omitted from the response when tax values are not available.',
      }),
    account: AccountSchema,
  })
  .openapi({
    required: [
      'accountId',
      'dateRange',
      'debits',
      'credits',
      'movement',
      'signedMovement',
      'account',
    ],
  })
  .openapi('AccountMovement')

const AccountMovementsResponseSchema = z
  .object({ accountMovements: z.array(AccountMovementSchema) })
  .openapi({ required: ['accountMovements'] })
  .openapi('AccountMovementsResponse')

const TransactionAccountSchema = z
  .object({
    id: z.uuid(),
    code: z.string().nullable().exactOptional(),
    name: z.string(),
    class: z.enum(['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE']),
    type: z
      .string()
      .openapi({
        description:
          "Account type (e.g. `BANK`, `CURRENT`). Reported as `INVENTORY` for inventory\nasset accounts, regardless of the account's underlying type.\n",
      }),
    status: z.enum(['ACTIVE', 'ARCHIVED', 'DELETED']),
    systemAccountCode: z
      .string()
      .openapi({
        description: 'System account code, or `NONE` if the account has no system account code.',
      }),
  })
  .openapi({ required: ['id', 'name', 'class', 'type', 'status', 'systemAccountCode'] })
  .openapi('TransactionAccount')

const LineSourceSchema = z
  .object({
    documentId: z.uuid().nullable().exactOptional(),
    documentType: z.string().nullable().exactOptional(),
    eventType: z.string().nullable().exactOptional(),
    contactId: z.uuid().nullable().exactOptional(),
    contactName: z.string().nullable().exactOptional(),
    reference: z.string().nullable().exactOptional(),
  })
  .openapi({
    description:
      'The originating document/event for this transaction line. Always present; its fields are null when the source is unknown.',
    required: [],
  })
  .openapi('LineSource')

const LineTaxRateSchema = z
  .object({
    code: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    percentage: z.float64().nullable().exactOptional(),
  })
  .openapi({
    description:
      'The tax rate applied to this transaction line. Always present; its fields are null when no tax rate applies.',
    required: [],
  })
  .openapi('LineTaxRate')

const TrackingItemDetailsSchema = z
  .object({ categoryName: z.string(), optionId: z.uuid(), optionName: z.string() })
  .openapi({ required: ['categoryName', 'optionId', 'optionName'] })
  .openapi('TrackingItemDetails')

const AccountTransactionLineSchema = z
  .object({
    journalNumber: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'Unique journal number for this transaction.',
      }),
    journalDate: z.iso
      .date()
      .openapi({ description: 'Accounting date of the transaction (YYYY-MM-DD).' }),
    description: z
      .string()
      .openapi({
        description:
          'Line description, falling back to the journal narration. Empty if neither is set.',
      }),
    account: TransactionAccountSchema,
    netAmount: LedgerDecimalSchema,
    signedNetAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Net amount as a signed number (positive for debit, negative for credit).',
      }),
    taxAmount: LedgerDecimalSchema.exactOptional(),
    signedTaxAmount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Tax amount as a signed number (positive for debit, negative for credit).',
      }),
    source: LineSourceSchema,
    taxRate: LineTaxRateSchema,
    trackingCategories: z
      .record(z.string(), TrackingItemDetailsSchema)
      .exactOptional()
      .openapi({
        description:
          'Present only when `include=trackingCategories` was requested, and omitted otherwise. Keys are\ntracking category IDs (UUIDs); values describe the selected tracking option. The object is empty\nwhen the line has no tracking.\n',
      }),
  })
  .openapi({
    required: [
      'journalNumber',
      'journalDate',
      'account',
      'netAmount',
      'description',
      'source',
      'taxRate',
    ],
  })
  .openapi('AccountTransactionLine')

const AccountTransactionsResponseSchema = z
  .object({
    currencyCode: z
      .string()
      .openapi({ description: "Organisation's base currency code (ISO 4217).", example: 'USD' }),
    maxJournalNumber: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Maximum journal number included in this result set. Captured at the first\nrequest and held constant across all pages for consistency.\n',
        example: 546,
      }),
    lines: z
      .array(AccountTransactionLineSchema)
      .openapi({ description: 'Transaction lines for this page (max 200).' }),
    pagination: z
      .object({
        pageSize: z.int32().openapi({ example: 200 }),
        nextToken: z
          .string()
          .openapi({
            description:
              'Opaque continuation token for the next page. Send it as the `token` query parameter to retrieve the next page.',
            example: 'ZXhhbXBsZS1jb250aW51YXRpb24tdG9rZW4',
          }),
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Pagination metadata. `null` on the last page, including when there are no results.',
        required: ['pageSize', 'nextToken'],
      }),
  })
  .openapi({ required: ['currencyCode', 'maxJournalNumber', 'lines'] })
  .openapi('AccountTransactionsResponse')

const FieldProblemSchema = z
  .object({
    fieldName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of the offending parameter, or an empty string when the failure is not tied to one parameter.',
      }),
    type: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    status: z.int32().nullable().exactOptional(),
    detail: z.string().nullable().exactOptional(),
    instance: z.string().nullable().exactOptional(),
  })
  .openapi({ description: 'A single validation failure.', required: [] })
  .openapi('FieldProblem')

const ValidationProblemSchema = z
  .object({
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI reference identifying the problem type.' }),
    title: z.string().exactOptional().openapi({ description: 'Short, human-readable summary.' }),
    status: z.int().exactOptional().openapi({ description: 'HTTP status code.' }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Detailed explanation of the problem.' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({ description: 'URI reference identifying the specific occurrence.' }),
    fieldValidationErrors: z.array(FieldProblemSchema).exactOptional(),
  })
  .openapi({
    description: 'Returned with `400 Bad Request` when the request fails validation.',
    required: [],
  })
  .openapi('ValidationProblem')

const GatewayProblemSchema = z
  .object({
    Type: z.string().nullable().exactOptional(),
    Title: z.string().openapi({ example: 'Unauthorized' }),
    Status: z.int32(),
    Detail: z.string().exactOptional(),
    Instance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The correlation ID of the request, also returned in the `Xero-Correlation-Id` header.',
      }),
    Extensions: z.looseObject({}).exactOptional(),
  })
  .openapi({
    required: ['Title', 'Status'],
    description:
      'Error body produced by the Xero API gateway (authentication, authorisation and tenant checks). Note the PascalCase property names.',
  })
  .openapi('GatewayProblem')

const UnauthorisedResponse = {
  description:
    '**Unauthorized** - Returned by the gateway when the access token is missing, invalid or expired (`Detail` is `AuthenticationUnsuccessful`), or does not include the scope this endpoint requires (`Detail` is `AuthorizationUnsuccessful` and `WWW-Authenticate` is `insufficient_scope`).\n',
  content: {
    'application/json': {
      schema: GatewayProblemSchema,
      examples: {
        invalidToken: {
          summary: 'Missing, invalid or expired token',
          value: {
            Type: null,
            Title: 'Unauthorized',
            Status: 401,
            Detail: 'AuthenticationUnsuccessful',
            Instance: '76295f13-127d-4464-adde-18f181faf38c',
            Extensions: {},
          },
        },
        insufficientScope: {
          summary: 'Token lacks the required scope',
          value: {
            Type: null,
            Title: 'Unauthorized',
            Status: 401,
            Detail: 'AuthorizationUnsuccessful',
            Instance: '69b16318-fe7c-481e-9c4d-ad7d6286cc50',
            Extensions: {},
          },
        },
      },
    },
  },
  headers: z.object({
    'WWW-Authenticate': {
      description: '`Bearer`, or `insufficient_scope` when the token lacks the required scope.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: '`Bearer`, or `insufficient_scope` when the token lacks the required scope.',
          param: { required: false },
        }),
    },
    'Xero-Correlation-Id': {
      description: 'The correlation ID of the request.',
      schema: z
        .uuid()
        .exactOptional()
        .openapi({ description: 'The correlation ID of the request.', param: { required: false } }),
    },
  }),
}

const TooManyRequestsResponse = {
  description:
    '**Too Many Requests** - Returned by the gateway when the app has exceeded a rate limit. The response has no body. Wait the number of seconds in `Retry-After` before retrying; `X-Rate-Limit-Problem` says which limit was exceeded (for example `day` for the daily limit).\n',
  headers: z.object({
    'Retry-After': {
      description: 'Number of seconds to wait before retrying.',
      example: 33155,
      schema: z
        .int()
        .exactOptional()
        .openapi({
          description: 'Number of seconds to wait before retrying.',
          example: 33155,
          param: { required: false },
        }),
    },
    'X-Rate-Limit-Problem': {
      description: 'The limit that was exceeded, for example `day`.',
      example: 'day',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The limit that was exceeded, for example `day`.',
          example: 'day',
          param: { required: false },
        }),
    },
    'X-DayLimit-Remaining': {
      description: 'Calls remaining for the app and organisation today.',
      example: 0,
      schema: z
        .int()
        .exactOptional()
        .openapi({
          description: 'Calls remaining for the app and organisation today.',
          param: { required: false },
        }),
    },
    'Xero-Correlation-Id': {
      description: 'The correlation ID of the request.',
      schema: z
        .uuid()
        .exactOptional()
        .openapi({ description: 'The correlation ID of the request.', param: { required: false } }),
    },
  }),
}

const InternalErrorResponse = {
  description:
    '**Internal Server Error** - An unexpected error occurred. The request can be retried. The response body is not guaranteed to follow a particular format.\n',
}

const XeroTenantIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'Xero-Tenant-Id',
      in: 'header',
      required: true,
      description: 'The ID of the Xero organisation to query.',
      schema: { type: 'string', format: 'uuid' },
      example: '2ae32d9e-4711-4201-9f2a-ac80e5318359',
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
        'accountdata.balances.read': 'Read general ledger account balances',
        'accountdata.movements.read': 'Read general ledger account movements',
        'accountdata.transactions.read': 'Read general ledger account transactions',
      },
    },
  },
}

export const getAccountBalancesRoute = createRoute({
  method: 'get',
  path: '/account-balances',
  tags: ['AccountData'],
  summary: 'Get the balance of each general ledger account as at a given date',
  description:
    'Retrieves account balances as at `date`, optionally including balances for one or\nmore prior comparison periods, and optionally filtered by account class, type,\naccount IDs, system account code, or tracking item.\n\n### Filtering\n\n- Filter by `class`, `type`, `accountIds`, and/or `systemAccountCodes`. These can be\n  combined freely — when more than one is supplied, the server returns only accounts\n  that match **all** of the supplied filters (an intersection, not a union).\n- `type` values are matched case-sensitively, so use uppercase (for example `BANK`). Inventory\n  asset accounts are reported as, and can only be filtered by, `INVENTORY`; filtering by\n  their underlying account type does not match them.\n- `trackingItemIds` and `unassignedToTrackingCategoryIds` can be used independently of\n  the filters above to further narrow which accounts are returned.\n\n### Comparison periods\n\n- Supplying `comparisonPeriodCount` together with `comparisonPeriodSize` returns\n  additional balances at prior points in time, in addition to the balance at `date`.\n- The n-th comparison date is `date` shifted back n times `comparisonPeriodSize`. For `MONTH`,\n  `QUARTER`, and `YEAR` sizes, a `date` that falls on the last day of its month keeps landing\n  on the last day of the shifted month (so comparisons across February behave correctly).\n- `comparisonPeriodCount` and `comparisonPeriodSize` must be supplied together.\n\n### Bank accounts\n\nBank account data is only available to users with bank account view permission for the\norganisation.\n\n- If the request would include bank accounts and the user lacks this permission, it is\n  rejected with `403 Forbidden`. A request is treated as including bank accounts when it\n  has no account filters, filters by all five `class` values and nothing else, includes\n  `BANK` in `type`, or lists a bank account in `accountIds`.\n- For other requests (for example `class=ASSET`), bank accounts are silently excluded from\n  the response for users without this permission, instead of the request being rejected.\n\n### Results\n\nOnly accounts with a non-zero balance at a given date are returned; accounts and comparison\ndates with a net-zero balance are omitted, so the response can be empty.\n\n### Pagination\n\nThis endpoint does not paginate — all matching account balances are returned in a single\nresponse.\n',
  operationId: 'getAccountBalances',
  request: {
    query: z.object({
      accountingBasis: z
        .enum(['ACCRUAL', 'CASH'])
        .openapi({
          param: {
            name: 'accountingBasis',
            in: 'query',
            required: true,
            description: 'Accounting basis for the balance calculation.',
            schema: { type: 'string', enum: ['ACCRUAL', 'CASH'] },
            example: 'ACCRUAL',
          },
        }),
      date: z.iso
        .date()
        .openapi({
          param: {
            name: 'date',
            in: 'query',
            required: true,
            description:
              'The date to calculate account balances as at, in ISO 8601 format (YYYY-MM-DD).\n',
            schema: { type: 'string', format: 'date' },
            example: '2024-12-31',
          },
        }),
      comparisonPeriodCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'comparisonPeriodCount',
            in: 'query',
            required: false,
            description:
              'Number of additional comparison balances to return, each one further back in\ntime than the last. Must be supplied together with `comparisonPeriodSize`.\n\n- **Minimum**: 1\n- **Maximum**: 100\n',
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100 },
            example: 3,
          },
        }),
      comparisonPeriodSize: z
        .enum(['DAY', 'WEEK', 'MONTH', 'QUARTER', 'YEAR'])
        .exactOptional()
        .openapi({
          param: {
            name: 'comparisonPeriodSize',
            in: 'query',
            required: false,
            description:
              'The unit of time each comparison period steps back by. Must be supplied\ntogether with `comparisonPeriodCount`.\n',
            schema: { type: 'string', enum: ['DAY', 'WEEK', 'MONTH', 'QUARTER', 'YEAR'] },
            example: 'MONTH',
          },
        }),
      accountIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'accountIds',
            in: 'query',
            required: false,
            description:
              'Filter to specific account IDs (GUIDs). Repeat the parameter for multiple\naccounts.\n\n- **Maximum**: 50 account IDs\n- **Validation**: Returns 404 if any ID does not exist for the organisation\n',
            schema: { type: 'array', items: { type: 'string', format: 'uuid' }, maxItems: 50 },
            style: 'form',
            explode: true,
          },
        }),
      class: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'class',
            in: 'query',
            required: false,
            description: 'Account classes to filter by. Can be combined with other filters.',
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'],
              },
            },
            style: 'form',
            explode: true,
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description:
              'Account types to filter by (e.g. `BANK`, `CURRENT`, etc). Use `INVENTORY` to\nmatch inventory asset accounts, regardless of their underlying account type.\nCan be combined with other filters.\n',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: true,
          },
        }),
      systemAccountCodes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'systemAccountCodes',
            in: 'query',
            required: false,
            description:
              'System account codes to filter by (e.g. `RETAINEDEARNINGS`,\n`UNREALISEDGAINS`). Can be combined with other filters.\n',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: true,
          },
        }),
      trackingItemIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'trackingItemIds',
            in: 'query',
            required: false,
            description: 'Filter to accounts assigned to any of the given tracking item IDs.',
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
            style: 'form',
            explode: true,
          },
        }),
      unassignedToTrackingCategoryIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'unassignedToTrackingCategoryIds',
            in: 'query',
            required: false,
            description:
              'Filter to accounts that are not assigned to any tracking option within the\ngiven tracking category IDs.\n',
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
            style: 'form',
            explode: true,
          },
        }),
    }),
    headers: z.object({ 'Xero-Tenant-Id': XeroTenantIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - returns account balances as at `date`.',
      content: {
        'application/json': {
          schema: AccountBalancesResponseSchema,
          example: {
            accountBalances: [
              {
                accountId: '88ed287a-d039-4dca-b3e9-b5f7b125e39b',
                date: '2024-12-31',
                balance: { value: 5230, type: 'DEBIT' },
                signedBalance: 5230,
                account: {
                  code: '630',
                  name: 'Inventory',
                  class: 'ASSET',
                  type: 'INVENTORY',
                  status: 'ACTIVE',
                  systemAccountCode: 'NONE',
                },
              },
            ],
          },
        },
      },
    },
    400: {
      description:
        '**Bad Request** - The request failed validation. The body is a `ValidationProblem` with a\n`fieldValidationErrors` array.\n\nCommon causes:\n- A required parameter (`accountingBasis`, `date`) is missing, or a value is not a valid date or enum value\n- `comparisonPeriodCount` supplied without `comparisonPeriodSize` (or vice versa)\n- `comparisonPeriodCount` outside the 1-100 range\n- More than 50 `accountIds` specified\n- An empty value in `type` or `systemAccountCodes`\n- The organisation is not active\n',
      content: {
        'application/problem+json': {
          schema: ValidationProblemSchema,
          examples: {
            missingPair: {
              summary: 'comparisonPeriodCount without comparisonPeriodSize',
              value: {
                fieldValidationErrors: [
                  {
                    fieldName: '',
                    detail:
                      "'comparisonPeriodCount' and 'comparisonPeriodSize' must be provided together.",
                  },
                ],
                title: 'Invalid Request',
                status: 400,
                detail:
                  "Validation errors:\r\n'comparisonPeriodCount' and 'comparisonPeriodSize' must be provided together.\r\n",
              },
            },
          },
        },
      },
    },
    401: UnauthorisedResponse,
    403: {
      description:
        "**Forbidden** - Returned by the gateway when `Xero-Tenant-Id` is missing, or the token is not authorised for that organisation (a `GatewayProblem` body).\n\nThe service also returns `403` with no response body when the user's role does not allow reading account balances, or when the request would include bank accounts and the user lacks bank account view permission (see Bank accounts above).\n",
      content: {
        'application/json': {
          schema: GatewayProblemSchema,
          example: {
            Type: null,
            Title: 'Forbidden',
            Status: 403,
            Detail: 'AuthenticationUnsuccessful',
            Instance: '07b4c7cd-b60d-4d8b-bd03-96a1244d1d3d',
            Extensions: {},
          },
        },
      },
    },
    404: {
      description:
        '**Not Found** - One or more requested `accountIds` or `systemAccountCodes` do not exist for this organisation, or the organisation was not found.\n',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: { title: 'Not found', status: 404, detail: 'Account not found.' },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalErrorResponse,
  },
  security: [{ OAuth2: ['accountdata.balances.read'] }],
})

export const getAccountMovementsRoute = createRoute({
  method: 'get',
  path: '/account-movements',
  tags: ['AccountData'],
  summary: 'Get the net movement of each general ledger account over a date range',
  description:
    'Retrieves account movements between `startDate` and `endDate`, optionally\nincluding movements for one or more prior comparison periods of the same length,\nand optionally filtered by account class, type, account IDs, system account code,\nor tracking item.\n\n### Filtering\n\n- Filter by `class`, `type`, `accountIds`, and/or `systemAccountCodes`. These can be\n  combined freely — when more than one is supplied, the server returns only accounts\n  that match **all** of the supplied filters (an intersection, not a union).\n- `type` values are matched case-sensitively, so use uppercase (for example `BANK`). Inventory\n  asset accounts are reported as, and can only be filtered by, `INVENTORY`; filtering by\n  their underlying account type does not match them.\n- `trackingItemIds` and `unassignedToTrackingCategoryIds` can be used independently of\n  the filters above to further narrow which accounts are returned.\n\n### Comparison periods\n\n- Supplying `comparisonPeriodCount` together with `comparisonPeriodSize` returns\n  additional movements for prior date ranges of the same length, in addition to the\n  movement between `startDate` and `endDate`.\n- Each comparison range is calculated by moving the primary range back by\n  `comparisonPeriodSize`, `comparisonPeriodCount` times. For `MONTH`, `QUARTER`, and\n  `YEAR` sizes, range boundaries that fall on the last day of a month keep landing on\n  the last day of the shifted month.\n- `comparisonPeriodCount` and `comparisonPeriodSize` must be supplied together.\n- The primary range and every comparison range must not overlap each other. A request\n  whose periods would overlap is rejected with `400 Bad Request`. Ranges that share a single boundary day count as\n  overlapping, which month-end adjustment can cause when shifting by `MONTH`, `QUARTER`, or\n  `YEAR`.\n\n### Bank accounts\n\nBank account data is only available to users with bank account view permission for the\norganisation.\n\n- If the request would include bank accounts and the user lacks this permission, it is\n  rejected with `403 Forbidden`. A request is treated as including bank accounts when it\n  has no account filters, filters by all five `class` values and nothing else, includes\n  `BANK` in `type`, or lists a bank account in `accountIds`.\n- For other requests (for example `class=ASSET`), bank accounts are silently excluded from\n  the response for users without this permission, instead of the request being rejected.\n\n### Pagination\n\nThis endpoint does not paginate — the full set of matching account movements is\nreturned in a single response.\n\n### Results\n\nOnly combinations of account and date range with non-zero movement are returned; comparison\nranges are not zero-filled. The response is a flat list with no guaranteed ordering.\n',
  operationId: 'getAccountMovements',
  request: {
    query: z.object({
      accountingBasis: z
        .enum(['ACCRUAL', 'CASH'])
        .openapi({
          param: {
            name: 'accountingBasis',
            in: 'query',
            required: true,
            description: 'Accounting basis for the movement calculation.',
            schema: { type: 'string', enum: ['ACCRUAL', 'CASH'] },
            example: 'ACCRUAL',
          },
        }),
      startDate: z.iso
        .date()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            required: true,
            description: 'Start date of the movement range, in ISO 8601 format (YYYY-MM-DD).',
            schema: { type: 'string', format: 'date' },
            example: '2024-01-01',
          },
        }),
      endDate: z.iso
        .date()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            required: true,
            description: 'End date of the movement range, in ISO 8601 format (YYYY-MM-DD).',
            schema: { type: 'string', format: 'date' },
            example: '2024-12-31',
          },
        }),
      comparisonPeriodCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'comparisonPeriodCount',
            in: 'query',
            required: false,
            description:
              'Number of additional comparison movements to return, each covering a range\nfurther back in time than the last. Must be supplied together with\n`comparisonPeriodSize`.\n\n- **Minimum**: 1\n- **Maximum**: 100\n',
            schema: { type: 'integer', format: 'int32', minimum: 1, maximum: 100 },
            example: 3,
          },
        }),
      comparisonPeriodSize: z
        .enum(['DAY', 'WEEK', 'MONTH', 'QUARTER', 'YEAR'])
        .exactOptional()
        .openapi({
          param: {
            name: 'comparisonPeriodSize',
            in: 'query',
            required: false,
            description:
              'The unit of time each comparison range steps back by. Must be supplied\ntogether with `comparisonPeriodCount`.\n',
            schema: { type: 'string', enum: ['DAY', 'WEEK', 'MONTH', 'QUARTER', 'YEAR'] },
            example: 'MONTH',
          },
        }),
      accountIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'accountIds',
            in: 'query',
            required: false,
            description:
              'Filter to specific account IDs (GUIDs). Repeat the parameter for multiple\naccounts.\n\n- **Maximum**: 50 account IDs\n- **Validation**: Returns 404 if any ID does not exist for the organisation\n',
            schema: { type: 'array', items: { type: 'string', format: 'uuid' }, maxItems: 50 },
            style: 'form',
            explode: true,
          },
        }),
      class: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'class',
            in: 'query',
            required: false,
            description: 'Account classes to filter by. Can be combined with other filters.',
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'],
              },
            },
            style: 'form',
            explode: true,
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description:
              'Account types to filter by (e.g. `BANK`, `CURRENT`, etc). Use `INVENTORY` to\nmatch inventory asset accounts, regardless of their underlying account type.\nCan be combined with other filters.\n',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: true,
          },
        }),
      systemAccountCodes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'systemAccountCodes',
            in: 'query',
            required: false,
            description:
              'System account codes to filter by (e.g. `RETAINEDEARNINGS`,\n`UNREALISEDGAINS`). Can be combined with other filters.\n',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: true,
          },
        }),
      trackingItemIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'trackingItemIds',
            in: 'query',
            required: false,
            description: 'Filter to accounts assigned to any of the given tracking item IDs.',
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
            style: 'form',
            explode: true,
          },
        }),
      unassignedToTrackingCategoryIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'unassignedToTrackingCategoryIds',
            in: 'query',
            required: false,
            description:
              'Filter to accounts that are not assigned to any tracking option within the\ngiven tracking category IDs.\n',
            schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
            style: 'form',
            explode: true,
          },
        }),
    }),
    headers: z.object({ 'Xero-Tenant-Id': XeroTenantIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success - returns account movements for the requested range(s).',
      content: {
        'application/json': {
          schema: AccountMovementsResponseSchema,
          example: {
            accountMovements: [
              {
                accountId: '88ed287a-d039-4dca-b3e9-b5f7b125e39b',
                dateRange: { startDate: '2024-01-01', endDate: '2024-12-31' },
                debits: 1200,
                credits: 300,
                movement: { value: 900, type: 'DEBIT' },
                signedMovement: 900,
                taxDebits: 120,
                taxCredits: 30,
                signedTaxMovement: 90,
                account: {
                  code: '630',
                  name: 'Inventory',
                  class: 'ASSET',
                  type: 'INVENTORY',
                  status: 'ACTIVE',
                  systemAccountCode: 'NONE',
                },
              },
            ],
          },
        },
      },
    },
    400: {
      description:
        '**Bad Request** - The request failed validation. The body is a `ValidationProblem` with a\n`fieldValidationErrors` array.\n\nCommon causes:\n- A required parameter (`accountingBasis`, `startDate`, `endDate`) is missing, or a value is not a valid date or enum value\n- `comparisonPeriodCount` supplied without `comparisonPeriodSize` (or vice versa)\n- `comparisonPeriodCount` outside the 1-100 range\n- The primary range and one or more comparison ranges overlap\n- `startDate` after `endDate`\n- More than 50 `accountIds` specified\n- An empty value in `type` or `systemAccountCodes`\n- The organisation is not active\n',
      content: {
        'application/problem+json': {
          schema: ValidationProblemSchema,
          examples: {
            overlappingPeriods: {
              summary: 'Overlapping comparison periods',
              value: {
                fieldValidationErrors: [
                  {
                    fieldName: '',
                    detail:
                      "The requested comparison periods overlap. Adjust the date range, 'comparisonPeriodSize', or 'comparisonPeriodCount' so the periods do not overlap.",
                  },
                ],
                title: 'Invalid Request',
                status: 400,
                detail:
                  "Validation errors:\r\nThe requested comparison periods overlap. Adjust the date range, 'comparisonPeriodSize', or 'comparisonPeriodCount' so the periods do not overlap.\r\n",
              },
            },
            missingPair: {
              summary: 'comparisonPeriodCount without comparisonPeriodSize',
              value: {
                fieldValidationErrors: [
                  {
                    fieldName: '',
                    detail:
                      "'comparisonPeriodCount' and 'comparisonPeriodSize' must be provided together.",
                  },
                ],
                title: 'Invalid Request',
                status: 400,
                detail:
                  "Validation errors:\r\n'comparisonPeriodCount' and 'comparisonPeriodSize' must be provided together.\r\n",
              },
            },
          },
        },
      },
    },
    401: UnauthorisedResponse,
    403: {
      description:
        "**Forbidden** - Returned by the gateway when `Xero-Tenant-Id` is missing, or the token is not authorised for that organisation (a `GatewayProblem` body).\n\nThe service also returns `403` with no response body when the user's role does not allow reading account movements, or when the request would include bank accounts and the user lacks bank account view permission (see Bank accounts above).\n",
      content: {
        'application/json': {
          schema: GatewayProblemSchema,
          example: {
            Type: null,
            Title: 'Forbidden',
            Status: 403,
            Detail: 'AuthenticationUnsuccessful',
            Instance: '07b4c7cd-b60d-4d8b-bd03-96a1244d1d3d',
            Extensions: {},
          },
        },
      },
    },
    404: {
      description:
        '**Not Found** - One or more requested `accountIds` or `systemAccountCodes` do not exist for this organisation, or the organisation was not found.\n',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: { title: 'Not found', status: 404, detail: 'Account not found.' },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalErrorResponse,
  },
  security: [{ OAuth2: ['accountdata.movements.read'] }],
})

export const getAccountTransactionsRoute = createRoute({
  method: 'get',
  path: '/account-transactions',
  tags: ['AccountData'],
  summary:
    'Get general ledger account transactions between two dates, with pagination and filtering',
  description:
    "Retrieves transactions posted between `startDate` and `endDate` (inclusive),\noptionally filtered by account IDs, class, type, or system account code, with\ncursor-based pagination for large result sets.\n\n**First call:** omit `token`. Supply `accountingBasis`, `startDate`, and\n`endDate` (all required), plus any optional filters.\n\n**Continuation calls:** supply only `token`, taken from the previous response's\n`pagination.nextToken`. Do not send any other query parameters — they are\nignored if present, since the original request is captured by the token.\n\n### Pagination\n\n- Results are returned in pages of 200 lines.\n- Use `pagination.nextToken` from the response as the `token` query parameter to fetch\n  the next page. Send only the `token` query parameter on continuation requests — all\n  other query parameters are\n  ignored on a continuation call, since the original request's parameters are already\n  captured by the token.\n- The `token` value is an opaque string. Treat it as an opaque string only — do not\n  parse, modify, or construct it yourself. Tokens may expire.\n- When `pagination` is `null`, you've reached the last page.\n- The API captures a consistent snapshot at the time of the first request (via\n  `maxJournalNumber`), so transactions added while you are paginating through a\n  result set won't appear partway through, and won't cause duplicates or gaps.\n\n### Filtering\n\n- Filter by `accountIds`, `class`, `type`, and/or `systemAccountCodes`. These can be\n  combined freely — when more than one is supplied, the server returns only\n  transactions for accounts that match **all** of the supplied filters (an\n  intersection, not a union).\n- `type` values are matched case-sensitively, so use uppercase (for example `BANK`). Inventory\n  asset accounts are reported as, and can only be filtered by, `INVENTORY`; filtering by\n  their underlying account type does not match them.\n- Use `systemAccountCodes=NONE` to match accounts that have no system account code.\n- Filters are only read from the first request in a pagination sequence — see\n  Pagination above.\n\n### Bank accounts\n\nBank account transactions are only available to users with bank account view permission for\nthe organisation.\n\n- If the user lacks this permission and the request includes `BANK` in `type`, or lists a\n  bank account in `accountIds`, it is rejected with `403 Forbidden`.\n- For all other requests, including unfiltered requests, bank account transactions are\n  silently excluded from the results for users without this permission.\n",
  operationId: 'getAccountTransactions',
  request: {
    query: z.object({
      accountingBasis: z
        .enum(['ACCRUAL', 'CASH'])
        .exactOptional()
        .openapi({
          param: {
            name: 'accountingBasis',
            in: 'query',
            required: false,
            description:
              'Accounting basis for the transaction query. Required on the first call;\nnot used (and ignored) on continuation calls made with `token`.\n',
            schema: { type: 'string', enum: ['ACCRUAL', 'CASH'] },
            example: 'ACCRUAL',
          },
        }),
      startDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'startDate',
            in: 'query',
            required: false,
            description:
              'Start date in ISO 8601 format (YYYY-MM-DD). Required on the first call; not\nused (and ignored) on continuation calls made with `token`.\n',
            schema: { type: 'string', format: 'date' },
            example: '2024-01-01',
          },
        }),
      endDate: z.iso
        .date()
        .exactOptional()
        .openapi({
          param: {
            name: 'endDate',
            in: 'query',
            required: false,
            description:
              'End date in ISO 8601 format (YYYY-MM-DD). Required on the first call; not\nused (and ignored) on continuation calls made with `token`.\n',
            schema: { type: 'string', format: 'date' },
            example: '2024-12-31',
          },
        }),
      accountIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.uuid()).min(1).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'accountIds',
            in: 'query',
            required: false,
            description:
              'Filter to specific account IDs (GUIDs). Repeat the parameter for multiple\naccounts. Only used on the first call.\n\n- **Maximum**: 20 account IDs\n- **Validation**: Returns 404 if any ID does not exist for the organisation\n',
            schema: {
              type: 'array',
              items: { type: 'string', format: 'uuid' },
              maxItems: 20,
              minItems: 1,
            },
            style: 'form',
            explode: true,
          },
        }),
      class: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'])),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'class',
            in: 'query',
            required: false,
            description:
              'Account classes to filter by. Can be combined with other filters. Only used\non the first call.\n',
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['ASSET', 'LIABILITY', 'EQUITY', 'REVENUE', 'EXPENSE'],
              },
            },
            style: 'form',
            explode: true,
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            description:
              'Account types to filter by (e.g. `BANK`, `CURRENT`, etc). Use `INVENTORY` to\nmatch inventory asset accounts, regardless of their underlying account type.\nCan be combined with other filters. Only used on the first call.\n',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: true,
          },
        }),
      systemAccountCodes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'systemAccountCodes',
            in: 'query',
            required: false,
            description:
              'System account codes to filter by (e.g. `RETAINEDEARNINGS`,\n`UNREALISEDGAINS`). Use `NONE` to match accounts with no system account code.\nCan be combined with other filters. Only used on the first call.\n',
            schema: { type: 'array', items: { type: 'string' } },
            style: 'form',
            explode: true,
          },
        }),
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('trackingCategories')),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'include',
            in: 'query',
            required: false,
            description:
              'Additional data to include in the response. Only used on the first call.\n',
            schema: { type: 'array', items: { type: 'string', enum: ['trackingCategories'] } },
            style: 'form',
            explode: true,
            example: ['trackingCategories'],
          },
        }),
      maxJournalNumber: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64().min(0n))
        .exactOptional()
        .openapi({
          param: {
            name: 'maxJournalNumber',
            in: 'query',
            required: false,
            description:
              'Maximum journal number to include in results, for point-in-time queries. If\nomitted, the server captures the current maximum journal number at the time\nof the first request and reuses it for every subsequent page, so the whole\npaginated result set is consistent as at the moment you started. Only used on\nthe first call.\n',
            schema: { type: 'integer', format: 'int64', minimum: 0 },
            example: 999999,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            required: false,
            description:
              "Continuation token from a previous response's `pagination.nextToken`. When\npresent, all other query parameters are ignored. Opaque — do not parse,\nmodify, or construct it.\n",
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Xero-Tenant-Id': XeroTenantIdParamsSchema }),
  },
  responses: {
    200: {
      description:
        "Success - returns account transactions with pagination.\n\n- `lines`: transaction lines for this page (max 200)\n- `pagination.nextToken`: token for the next page (`pagination` is `null` on the last page)\n- `currencyCode`: organisation's base currency\n- `maxJournalNumber`: the snapshot boundary used for pagination consistency\n",
      content: {
        'application/json': {
          schema: AccountTransactionsResponseSchema,
          examples: {
            firstPage: {
              summary: 'First page with more data available',
              value: {
                currencyCode: 'USD',
                maxJournalNumber: 546,
                lines: [
                  {
                    journalNumber: 546,
                    journalDate: '2024-12-31',
                    description: 'Inventory Opening Balance',
                    account: {
                      id: '88ed287a-d039-4dca-b3e9-b5f7b125e39b',
                      code: '630',
                      name: 'Inventory',
                      class: 'ASSET',
                      type: 'INVENTORY',
                      status: 'ACTIVE',
                      systemAccountCode: 'NONE',
                    },
                    netAmount: { value: 80, type: 'CREDIT' },
                    signedNetAmount: -80,
                    taxAmount: { value: 0, type: 'CREDIT' },
                    signedTaxAmount: 0,
                    source: {
                      documentId: '4dbbb217-b8a6-42c1-acef-dc35ba440683',
                      documentType: 'PURCHASE_ORDER',
                      eventType: 'CREATE',
                      contactId: '1f2bdcdf-1c10-42b0-a6cc-f08ecd768a73',
                      contactName: 'Acme Supplies',
                      reference: 'PO-1042',
                    },
                    taxRate: { code: 'OUTPUT', name: 'GST on Sales', percentage: 10 },
                  },
                ],
                pagination: { pageSize: 200, nextToken: 'ZXhhbXBsZS1jb250aW51YXRpb24tdG9rZW4' },
              },
            },
            lastPage: {
              summary: 'Last page (no further pages)',
              value: {
                currencyCode: 'USD',
                maxJournalNumber: 546,
                lines: [
                  {
                    journalNumber: 102,
                    journalDate: '2024-01-15',
                    description: 'Initial Inventory Stock',
                    account: {
                      id: '88ed287a-d039-4dca-b3e9-b5f7b125e39b',
                      code: '630',
                      name: 'Inventory',
                      class: 'ASSET',
                      type: 'INVENTORY',
                      status: 'ACTIVE',
                      systemAccountCode: 'NONE',
                    },
                    netAmount: { value: 5000, type: 'DEBIT' },
                    signedNetAmount: 5000,
                    taxAmount: { value: 0, type: 'DEBIT' },
                    signedTaxAmount: 0,
                    source: {
                      documentId: null,
                      documentType: null,
                      eventType: null,
                      contactId: null,
                      contactName: null,
                      reference: null,
                    },
                    taxRate: { code: null, name: null, percentage: null },
                  },
                ],
                pagination: null,
              },
            },
          },
        },
      },
    },
    400: {
      description:
        '**Bad Request** - The request failed validation. The body is a `ValidationProblem` with a\n`fieldValidationErrors` array.\n\nCommon causes:\n- A required first-call parameter (`accountingBasis`, `startDate`, `endDate`) is missing, or a value is not a valid date or enum value\n- `endDate` before `startDate`\n- More than 20, or no, `accountIds` specified\n- An empty value in `type` or `systemAccountCodes`\n- `include` has a value other than `trackingCategories`\n- `maxJournalNumber` is negative\n- Invalid `token`, or a `token` that is no longer valid\n- The organisation is not active\n',
      content: {
        'application/problem+json': {
          schema: ValidationProblemSchema,
          examples: {
            invalidToken: {
              summary: 'Invalid continuation token',
              value: {
                fieldValidationErrors: [
                  {
                    fieldName: 'token',
                    detail: "The value for the 'token' parameter was invalid.",
                  },
                ],
                title: 'Invalid Request',
                status: 400,
                detail:
                  "Validation errors:\r\nThe value for the 'token' parameter was invalid.\r\n",
              },
            },
          },
        },
      },
    },
    401: UnauthorisedResponse,
    403: {
      description:
        "**Forbidden** - Returned by the gateway when `Xero-Tenant-Id` is missing, or the token is not authorised for that organisation (a `GatewayProblem` body).\n\nThe service also returns `403` with no response body when the user's role does not allow reading account transactions, or when the request would include bank accounts and the user lacks bank account view permission (see Bank accounts above).\n",
      content: {
        'application/json': {
          schema: GatewayProblemSchema,
          example: {
            Type: null,
            Title: 'Forbidden',
            Status: 403,
            Detail: 'AuthenticationUnsuccessful',
            Instance: '07b4c7cd-b60d-4d8b-bd03-96a1244d1d3d',
            Extensions: {},
          },
        },
      },
    },
    404: {
      description:
        '**Not Found** - One or more requested `accountIds` do not exist for this organisation, or the organisation was not found.\n',
      content: {
        'application/problem+json': {
          schema: ProblemDetailsSchema,
          example: {
            title: 'Account could not be found',
            status: 404,
            detail: 'One or more of the specified account IDs could not be found.',
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalErrorResponse,
  },
  security: [{ OAuth2: ['accountdata.transactions.read'] }],
})

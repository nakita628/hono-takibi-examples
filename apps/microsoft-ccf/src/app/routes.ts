import { createRoute, z } from '@hono/zod-openapi'

const CCFErrorSchema = z
  .object({
    error: z
      .object({
        code: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Response error code. CCF error codes: https://microsoft.github.io/CCF/main/operations/troubleshooting.html#error-codes',
          }),
        message: z.string().exactOptional().openapi({ description: 'Response error message' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('CCFError')

const CoseSchema = z.file().openapi({ type: 'string', format: 'binary' }).openapi('Cose')

const TransactionIdSchema = z
  .string()
  .regex(/^[0-9]+\.[0-9]+$/)
  .openapi('TransactionId')

const TransactionIdArraySchema = z.array(TransactionIdSchema).openapi('TransactionIdArray')

const GetCommitOutSchema = z
  .object({
    transaction_id: TransactionIdSchema,
    view_history: TransactionIdArraySchema.exactOptional(),
  })
  .openapi({ required: ['transaction_id'] })
  .openapi('GetCommitOut')

const TxStatusSchema = z.enum(['Unknown', 'Pending', 'Committed', 'Invalid']).openapi('TxStatus')

const GetTxStatusOutSchema = z
  .object({ status: TxStatusSchema, transaction_id: TransactionIdSchema })
  .openapi({ required: ['transaction_id', 'status'] })
  .openapi('GetTxStatusOut')

const Base64stringSchema = z.base64().openapi('Base64string')

const Base64stringArraySchema = z.array(Base64stringSchema).openapi('Base64stringArray')

const LoggingGetCoseEndorsementsOutSchema = z
  .object({ endorsements: z.union([Base64stringArraySchema, z.literal(null).nullable()]) })
  .openapi({ required: ['endorsements'] })
  .openapi('LoggingGetCoseEndorsementsOut')

const LoggingGetCoseSignatureOutSchema = z
  .object({ cose_signature: Base64stringSchema })
  .openapi({ required: ['cose_signature'] })
  .openapi('LoggingGetCoseSignatureOut')

const Uint64Schema = z.int().min(0).max(18446744073709552000).openapi('Uint64')

const StringSchema = z.string().openapi('String')

const LoggingGetHistoricalRangeEntrySchema = z
  .object({ id: Uint64Schema, msg: StringSchema, seqno: Uint64Schema })
  .openapi({ required: ['seqno', 'id', 'msg'] })
  .openapi('LoggingGetHistoricalRangeEntry')

const LoggingGetHistoricalRangeEntryArraySchema = z
  .array(LoggingGetHistoricalRangeEntrySchema)
  .openapi('LoggingGetHistoricalRangeEntryArray')

const LoggingGetHistoricalRangeOutSchema = z
  .object({
    '@nextLink': StringSchema.exactOptional(),
    entries: LoggingGetHistoricalRangeEntryArraySchema,
  })
  .openapi({ required: ['entries'] })
  .openapi('LoggingGetHistoricalRangeOut')

const JsonSchema = z.any().openapi('Json')

const LoggingGetReceiptOutSchema = z
  .object({ msg: StringSchema, receipt: JsonSchema })
  .openapi({ required: ['msg', 'receipt'] })
  .openapi('LoggingGetReceiptOut')

const LoggingGetOutSchema = z
  .object({ msg: StringSchema })
  .openapi({ required: ['msg'] })
  .openapi('LoggingGetOut')

const BooleanSchema = z.boolean().openapi('Boolean')

const LoggingPutOutSchema = z
  .object({ success: BooleanSchema, tx_id: StringSchema })
  .openapi({ required: ['success', 'tx_id'] })
  .openapi('LoggingPutOut')

const LoggingRecordInSchema = z
  .object({ id: Uint64Schema, msg: StringSchema, record_claim: BooleanSchema.exactOptional() })
  .openapi({ required: ['id', 'msg'] })
  .openapi('LoggingRecordIn')

const DefaultResponse = {
  description: 'An error occurred',
  content: { 'application/json': { schema: CCFErrorSchema } },
}

const JwtSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

const MemberCoseSign1SecurityScheme = {
  description:
    'Request payload must be a COSE Sign1 document, with expected protected headers. Signer must be a member identity registered with this service.',
  scheme: 'cose_sign1',
  type: 'http',
}

const UserCoseSign1SecurityScheme = {
  description:
    'Request payload must be a COSE Sign1 document, with expected protected headers. Signer must be a user identity registered with this service.',
  scheme: 'cose_sign1',
  type: 'http',
}

export const getAppApiRoute = createRoute({
  method: 'get',
  path: '/app/api',
  summary: 'OpenAPI schema',
  operationId: 'GetAppApi',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JsonSchema } },
    },
    default: DefaultResponse,
  },
})

export const getAppCommitRoute = createRoute({
  method: 'get',
  path: '/app/commit',
  summary: 'Current commit level',
  description: 'Latest transaction ID that has been committed on the service',
  operationId: 'GetAppCommit',
  request: {
    query: z.object({
      view_history: z
        .preprocess(
          ((read) => (val: unknown) => {
            const result = read.safeParse(val)
            return result.success ? result.data : val
          })(z.stringbool()),
          BooleanSchema.openapi({
            param: {
              in: 'query',
              name: 'view_history',
              required: false,
              schema: { $ref: '#/components/schemas/boolean' },
            },
          }),
        )
        .exactOptional(),
      view_history_since: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          Uint64Schema.openapi({
            param: {
              in: 'query',
              name: 'view_history_since',
              required: false,
              schema: { $ref: '#/components/schemas/uint64' },
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetCommitOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getAppCoseSignaturesConfigRoute = createRoute({
  method: 'get',
  path: '/app/cose_signatures_config',
  operationId: 'GetAppCoseSignaturesConfig',
  responses: { 204: { description: 'Default response description' }, default: DefaultResponse },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppCustomAuthRoute = createRoute({
  method: 'get',
  path: '/app/custom_auth',
  operationId: 'GetAppCustomAuth',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JsonSchema } },
    },
    default: DefaultResponse,
  },
})

export const getAppLogBlockingPrivateRoute = createRoute({
  method: 'get',
  path: '/app/log/blocking/private',
  operationId: 'GetAppLogBlockingPrivate',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const postAppLogBlockingPrivateRoute = createRoute({
  method: 'post',
  path: '/app/log/blocking/private',
  operationId: 'PostAppLogBlockingPrivate',
  request: {
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/json': { schema: LoggingRecordInSchema } },
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const postAppLogBlockingPrivateReceiptRoute = createRoute({
  method: 'post',
  path: '/app/log/blocking/private/receipt',
  operationId: 'PostAppLogBlockingPrivateReceipt',
  responses: { 200: { description: 'Default response description' }, default: DefaultResponse },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const postAppLogCoseSignedContentRoute = createRoute({
  method: 'post',
  path: '/app/log/cose_signed_content',
  operationId: 'PostAppLogCoseSignedContent',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'text/plain': { schema: StringSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ member_cose_sign1: [] }],
})

export const getAppLogPrivateRoute = createRoute({
  method: 'get',
  path: '/app/log/private',
  operationId: 'GetAppLogPrivate',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const postAppLogPrivateRoute = createRoute({
  method: 'post',
  path: '/app/log/private',
  operationId: 'PostAppLogPrivate',
  request: {
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/json': { schema: LoggingRecordInSchema } },
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const deleteAppLogPrivateRoute = createRoute({
  method: 'delete',
  path: '/app/log/private',
  operationId: 'DeleteAppLogPrivate',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const postAppLogPrivateAdminOnlyRoute = createRoute({
  method: 'post',
  path: '/app/log/private/admin_only',
  operationId: 'PostAppLogPrivateAdminOnly',
  request: {
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/json': { schema: LoggingRecordInSchema } },
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
})

export const deleteAppLogPrivateAllRoute = createRoute({
  method: 'delete',
  path: '/app/log/private/all',
  operationId: 'DeleteAppLogPrivateAll',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const postAppLogPrivateAnonymousRoute = createRoute({
  method: 'post',
  path: '/app/log/private/anonymous',
  operationId: 'PostAppLogPrivateAnonymous',
  request: {
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/json': { schema: LoggingRecordInSchema } },
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
})

export const postAppLogPrivateAnonymousV2Route = createRoute({
  method: 'post',
  path: '/app/log/private/anonymous/v2',
  operationId: 'PostAppLogPrivateAnonymousV2',
  request: {
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/json': { schema: LoggingRecordInSchema } },
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingPutOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getAppLogPrivateBackupRoute = createRoute({
  method: 'get',
  path: '/app/log/private/backup',
  operationId: 'GetAppLogPrivateBackup',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPrivateCommittedRoute = createRoute({
  method: 'get',
  path: '/app/log/private/committed',
  operationId: 'GetAppLogPrivateCommitted',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetOutSchema } },
    },
    default: DefaultResponse,
  },
})

export const getAppLogPrivateCountRoute = createRoute({
  method: 'get',
  path: '/app/log/private/count',
  operationId: 'GetAppLogPrivateCount',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: Uint64Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPrivateHistoricalRoute = createRoute({
  method: 'get',
  path: '/app/log/private/historical',
  operationId: 'GetAppLogPrivateHistorical',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPrivateHistoricalHandleRoute = createRoute({
  method: 'get',
  path: '/app/log/private/historical/handle',
  operationId: 'GetAppLogPrivateHistoricalHandle',
  request: {
    query: z.object({
      handle: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'handle',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
      seqno: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'seqno',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JsonSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPrivateHistoricalSparseRoute = createRoute({
  method: 'get',
  path: '/app/log/private/historical/sparse',
  operationId: 'GetAppLogPrivateHistoricalSparse',
  request: {
    query: z.object({
      seqnos: StringSchema.openapi({
        param: {
          in: 'query',
          name: 'seqnos',
          required: true,
          schema: { $ref: '#/components/schemas/string' },
        },
      }),
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetHistoricalRangeOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPrivateHistoricalReceiptRoute = createRoute({
  method: 'get',
  path: '/app/log/private/historical_receipt',
  operationId: 'GetAppLogPrivateHistoricalReceipt',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetReceiptOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const postAppLogPrivateInstallCommittedIndexRoute = createRoute({
  method: 'post',
  path: '/app/log/private/install_committed_index',
  operationId: 'PostAppLogPrivateInstallCommittedIndex',
  responses: { 204: { description: 'Default response description' }, default: DefaultResponse },
})

export const postAppLogPrivateOptionalCommitRoute = createRoute({
  method: 'post',
  path: '/app/log/private/optional_commit',
  operationId: 'PostAppLogPrivateOptionalCommit',
  request: {
    query: z.object({
      wait_for_commit: z
        .preprocess(
          ((read) => (val: unknown) => {
            const result = read.safeParse(val)
            return result.success ? result.data : val
          })(z.stringbool()),
          BooleanSchema.openapi({
            param: {
              in: 'query',
              name: 'wait_for_commit',
              required: false,
              schema: { $ref: '#/components/schemas/boolean' },
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/json': { schema: LoggingRecordInSchema } },
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const postAppLogPrivatePrefixCertRoute = createRoute({
  method: 'post',
  path: '/app/log/private/prefix_cert',
  operationId: 'PostAppLogPrivatePrefixCert',
  request: {
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/json': { schema: LoggingRecordInSchema } },
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
})

export const postAppLogPrivateRawTextIdRoute = createRoute({
  method: 'post',
  path: '/app/log/private/raw_text/{id}',
  operationId: 'PostAppLogPrivateRawTextId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Default response description' }, default: DefaultResponse },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const postAppLogPrivateUninstallCommittedIndexRoute = createRoute({
  method: 'post',
  path: '/app/log/private/uninstall_committed_index',
  operationId: 'PostAppLogPrivateUninstallCommittedIndex',
  responses: { 204: { description: 'Default response description' }, default: DefaultResponse },
})

export const getAppLogPublicRoute = createRoute({
  method: 'get',
  path: '/app/log/public',
  operationId: 'GetAppLogPublic',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const postAppLogPublicRoute = createRoute({
  method: 'post',
  path: '/app/log/public',
  operationId: 'PostAppLogPublic',
  request: {
    body: {
      description: 'Auto-generated request body schema',
      content: { 'application/json': { schema: LoggingRecordInSchema } },
    },
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const deleteAppLogPublicRoute = createRoute({
  method: 'delete',
  path: '/app/log/public',
  operationId: 'DeleteAppLogPublic',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const deleteAppLogPublicAllRoute = createRoute({
  method: 'delete',
  path: '/app/log/public/all',
  operationId: 'DeleteAppLogPublicAll',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: BooleanSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPublicBackupRoute = createRoute({
  method: 'get',
  path: '/app/log/public/backup',
  operationId: 'GetAppLogPublicBackup',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPublicCoseEndorsementsRoute = createRoute({
  method: 'get',
  path: '/app/log/public/cose_endorsements',
  operationId: 'GetAppLogPublicCoseEndorsements',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetCoseEndorsementsOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPublicCoseReceiptRoute = createRoute({
  method: 'get',
  path: '/app/log/public/cose_receipt',
  operationId: 'GetAppLogPublicCoseReceipt',
  responses: { 204: { description: 'Default response description' }, default: DefaultResponse },
})

export const getAppLogPublicCoseSignatureRoute = createRoute({
  method: 'get',
  path: '/app/log/public/cose_signature',
  operationId: 'GetAppLogPublicCoseSignature',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetCoseSignatureOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPublicCountRoute = createRoute({
  method: 'get',
  path: '/app/log/public/count',
  operationId: 'GetAppLogPublicCount',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: Uint64Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPublicHistoricalRangeRoute = createRoute({
  method: 'get',
  path: '/app/log/public/historical/range',
  operationId: 'GetAppLogPublicHistoricalRange',
  request: {
    query: z.object({
      from_seqno: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          Uint64Schema.openapi({
            param: {
              in: 'query',
              name: 'from_seqno',
              required: false,
              schema: { $ref: '#/components/schemas/uint64' },
            },
          }),
        )
        .exactOptional(),
      to_seqno: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          Uint64Schema.openapi({
            param: {
              in: 'query',
              name: 'to_seqno',
              required: false,
              schema: { $ref: '#/components/schemas/uint64' },
            },
          }),
        )
        .exactOptional(),
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetHistoricalRangeOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPublicHistoricalReceiptRoute = createRoute({
  method: 'get',
  path: '/app/log/public/historical_receipt',
  operationId: 'GetAppLogPublicHistoricalReceipt',
  request: {
    query: z.object({
      id: z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        Uint64Schema.openapi({
          param: {
            in: 'query',
            name: 'id',
            required: true,
            schema: { $ref: '#/components/schemas/uint64' },
          },
        }),
      ),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: LoggingGetReceiptOutSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }],
})

export const getAppLogPublicTrustedKeysRoute = createRoute({
  method: 'get',
  path: '/app/log/public/trusted_keys',
  operationId: 'GetAppLogPublicTrustedKeys',
  responses: { 204: { description: 'Default response description' }, default: DefaultResponse },
})

export const getAppLogPublicVerifyCoseReceiptRoute = createRoute({
  method: 'get',
  path: '/app/log/public/verify_cose_receipt',
  operationId: 'GetAppLogPublicVerifyCoseReceipt',
  responses: { 204: { description: 'Default response description' }, default: DefaultResponse },
})

export const getAppLogRequestQueryRoute = createRoute({
  method: 'get',
  path: '/app/log/request_query',
  operationId: 'GetAppLogRequestQuery',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'text/plain': { schema: StringSchema } },
    },
    default: DefaultResponse,
  },
})

export const postAppLogSignedStatementRoute = createRoute({
  method: 'post',
  path: '/app/log/signed_statement',
  operationId: 'PostAppLogSignedStatement',
  responses: { 204: { description: 'Default response description' }, default: DefaultResponse },
})

export const getAppLogTransparentStatementRoute = createRoute({
  method: 'get',
  path: '/app/log/transparent_statement',
  operationId: 'GetAppLogTransparentStatement',
  responses: { 204: { description: 'Default response description' }, default: DefaultResponse },
})

export const postAppMultiAuthRoute = createRoute({
  method: 'post',
  path: '/app/multi_auth',
  operationId: 'PostAppMultiAuth',
  responses: {
    200: {
      description: 'Default response description',
      content: { 'text/plain': { schema: StringSchema } },
    },
    default: DefaultResponse,
  },
  security: [{ jwt: [] }, { user_cose_sign1: [] }, {}],
})

export const getAppReceiptRoute = createRoute({
  method: 'get',
  path: '/app/receipt',
  summary: 'Receipt for a transaction',
  description: 'A signed statement from the service over a transaction entry in the ledger',
  operationId: 'GetAppReceipt',
  request: {
    query: z.object({
      transaction_id: TransactionIdSchema.openapi({
        param: {
          in: 'query',
          name: 'transaction_id',
          required: true,
          schema: { $ref: '#/components/schemas/TransactionId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: JsonSchema } },
    },
    202: {
      description:
        'The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.',
      content: { 'text/plain': { schema: StringSchema } },
    },
    default: DefaultResponse,
  },
})

export const getAppReceiptCoseRoute = createRoute({
  method: 'get',
  path: '/app/receipt/cose',
  summary: 'COSE receipt for a transaction',
  description:
    'A COSE Sign1 envelope containing a signed statement from the service over a transaction entry in the ledger, with a Merkle proof in the unprotected header. See https://datatracker.ietf.org/doc/draft-ietf-scitt-receipts-ccf-profile/ for a complete description.',
  operationId: 'GetAppReceiptCose',
  request: {
    query: z.object({
      transaction_id: TransactionIdSchema.openapi({
        param: {
          in: 'query',
          name: 'transaction_id',
          required: true,
          schema: { $ref: '#/components/schemas/TransactionId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/cose': { schema: CoseSchema } },
    },
    202: {
      description:
        'The transaction is not yet available. The response describes why and the Retry-After header indicates when to retry.',
      content: { 'text/plain': { schema: StringSchema } },
    },
    default: DefaultResponse,
  },
})

export const getAppTxRoute = createRoute({
  method: 'get',
  path: '/app/tx',
  summary: 'Current status of a transaction',
  description: 'Possible statuses returned are Unknown, Pending, Committed or Invalid.',
  operationId: 'GetAppTx',
  request: {
    query: z.object({
      transaction_id: TransactionIdSchema.openapi({
        param: {
          in: 'query',
          name: 'transaction_id',
          required: true,
          schema: { $ref: '#/components/schemas/TransactionId' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Default response description',
      content: { 'application/json': { schema: GetTxStatusOutSchema } },
    },
    default: DefaultResponse,
  },
})

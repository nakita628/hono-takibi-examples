import { createRoute, z } from '@hono/zod-openapi'

const WireRowFieldSchema: z.ZodType<WireRowFieldType> = z
  .lazy(() =>
    z
      .strictObject({
        description: z.string().exactOptional(),
        field_type: WireDataTypeSchema,
        name: z.string(),
      })
      .openapi({
        description: 'One `ROW` field. Server-assigned field IDs are not exposed.',
        required: ['name', 'field_type'],
      }),
  )
  .openapi('WireRowField')

type WireDataTypeType =
  | { nullable?: boolean; type: 'BOOLEAN' }
  | { nullable?: boolean; type: 'TINYINT' }
  | { nullable?: boolean; type: 'SMALLINT' }
  | { nullable?: boolean; type: 'INTEGER' }
  | { nullable?: boolean; type: 'BIGINT' }
  | { nullable?: boolean; type: 'FLOAT' }
  | { nullable?: boolean; type: 'DOUBLE' }
  | { length: number; nullable?: boolean; type: 'CHAR' }
  | { nullable?: boolean; type: 'STRING' }
  | { nullable?: boolean; precision: number; scale: number; type: 'DECIMAL' }
  | { nullable?: boolean; type: 'DATE' }
  | { nullable?: boolean; precision: number; type: 'TIME_WITHOUT_TIME_ZONE' }
  | { nullable?: boolean; precision: number; type: 'TIMESTAMP_WITHOUT_TIME_ZONE' }
  | { nullable?: boolean; precision: number; type: 'TIMESTAMP_WITH_LOCAL_TIME_ZONE' }
  | { nullable?: boolean; type: 'BYTES' }
  | { length: number; nullable?: boolean; type: 'BINARY' }
  | { element_type: WireDataTypeType; nullable?: boolean; type: 'ARRAY' }
  | { key_type: WireDataTypeType; nullable?: boolean; type: 'MAP'; value_type: WireDataTypeType }
  | { fields: z.infer<typeof WireRowFieldSchema>[]; nullable?: boolean; type: 'ROW' }

const WireDataTypeSchema: z.ZodType<WireDataTypeType> = z
  .lazy(() =>
    z
      .xor([
        z
          .strictObject({ nullable: z.boolean().exactOptional(), type: z.literal('BOOLEAN') })
          .openapi({ required: ['type'] }),
        z
          .strictObject({ nullable: z.boolean().exactOptional(), type: z.literal('TINYINT') })
          .openapi({ required: ['type'] }),
        z
          .strictObject({ nullable: z.boolean().exactOptional(), type: z.literal('SMALLINT') })
          .openapi({ required: ['type'] }),
        z
          .strictObject({ nullable: z.boolean().exactOptional(), type: z.literal('INTEGER') })
          .openapi({ required: ['type'] }),
        z
          .strictObject({ nullable: z.boolean().exactOptional(), type: z.literal('BIGINT') })
          .openapi({ required: ['type'] }),
        z
          .strictObject({ nullable: z.boolean().exactOptional(), type: z.literal('FLOAT') })
          .openapi({ required: ['type'] }),
        z
          .strictObject({ nullable: z.boolean().exactOptional(), type: z.literal('DOUBLE') })
          .openapi({ required: ['type'] }),
        z
          .strictObject({
            length: z.int32().min(0),
            nullable: z.boolean().exactOptional(),
            type: z.literal('CHAR'),
          })
          .openapi({ required: ['length', 'type'] }),
        z
          .strictObject({ nullable: z.boolean().exactOptional(), type: z.literal('STRING') })
          .openapi({ required: ['type'] }),
        z
          .strictObject({
            nullable: z.boolean().exactOptional(),
            precision: z.int32().min(1).max(38),
            scale: z.int32().min(0).max(38),
            type: z.literal('DECIMAL'),
          })
          .openapi({ required: ['precision', 'scale', 'type'] }),
        z
          .strictObject({ nullable: z.boolean().exactOptional(), type: z.literal('DATE') })
          .openapi({ required: ['type'] }),
        z
          .strictObject({
            nullable: z.boolean().exactOptional(),
            precision: z.int32().min(0).max(9),
            type: z.literal('TIME_WITHOUT_TIME_ZONE'),
          })
          .openapi({ required: ['precision', 'type'] }),
        z
          .strictObject({
            nullable: z.boolean().exactOptional(),
            precision: z.int32().min(0).max(9),
            type: z.literal('TIMESTAMP_WITHOUT_TIME_ZONE'),
          })
          .openapi({ required: ['precision', 'type'] }),
        z
          .strictObject({
            nullable: z.boolean().exactOptional(),
            precision: z.int32().min(0).max(9),
            type: z.literal('TIMESTAMP_WITH_LOCAL_TIME_ZONE'),
          })
          .openapi({ required: ['precision', 'type'] }),
        z
          .strictObject({ nullable: z.boolean().exactOptional(), type: z.literal('BYTES') })
          .openapi({ required: ['type'] }),
        z
          .strictObject({
            length: z.int().min(0),
            nullable: z.boolean().exactOptional(),
            type: z.literal('BINARY'),
          })
          .openapi({ required: ['length', 'type'] }),
        z
          .strictObject({
            element_type: WireDataTypeSchema,
            nullable: z.boolean().exactOptional(),
            type: z.literal('ARRAY'),
          })
          .openapi({ required: ['element_type', 'type'] }),
        z
          .strictObject({
            key_type: WireDataTypeSchema,
            nullable: z.boolean().exactOptional(),
            type: z.literal('MAP'),
            value_type: WireDataTypeSchema,
          })
          .openapi({ required: ['key_type', 'value_type', 'type'] }),
        z
          .strictObject({
            fields: z.array(WireRowFieldSchema),
            nullable: z.boolean().exactOptional(),
            type: z.literal('ROW'),
          })
          .openapi({ required: ['fields', 'type'] }),
      ])
      .openapi({ description: 'The exact recursive Fluss type as it appears on the wire.' }),
  )
  .openapi('WireDataType')

type WireRowFieldType = {
  description?: string
  field_type: z.infer<typeof WireDataTypeSchema>
  name: string
}

const ColumnDataTypeSchema = z
  .xor([
    z.strictObject({ type: z.literal('BOOLEAN') }).openapi({ required: ['type'] }),
    z.strictObject({ type: z.literal('TINYINT') }).openapi({ required: ['type'] }),
    z.strictObject({ type: z.literal('SMALLINT') }).openapi({ required: ['type'] }),
    z.strictObject({ type: z.literal('INTEGER') }).openapi({ required: ['type'] }),
    z.strictObject({ type: z.literal('BIGINT') }).openapi({ required: ['type'] }),
    z.strictObject({ type: z.literal('FLOAT') }).openapi({ required: ['type'] }),
    z.strictObject({ type: z.literal('DOUBLE') }).openapi({ required: ['type'] }),
    z
      .strictObject({ length: z.int32().min(0), type: z.literal('CHAR') })
      .openapi({ required: ['length', 'type'] }),
    z.strictObject({ type: z.literal('STRING') }).openapi({ required: ['type'] }),
    z
      .strictObject({
        precision: z.int32().min(1).max(38),
        scale: z.int32().min(0).max(38),
        type: z.literal('DECIMAL'),
      })
      .openapi({ required: ['precision', 'scale', 'type'] }),
    z.strictObject({ type: z.literal('DATE') }).openapi({ required: ['type'] }),
    z
      .strictObject({
        precision: z.int32().min(0).max(9),
        type: z.literal('TIME_WITHOUT_TIME_ZONE'),
      })
      .openapi({ required: ['precision', 'type'] }),
    z
      .strictObject({
        precision: z.int32().min(0).max(9),
        type: z.literal('TIMESTAMP_WITHOUT_TIME_ZONE'),
      })
      .openapi({ required: ['precision', 'type'] }),
    z
      .strictObject({
        precision: z.int32().min(0).max(9),
        type: z.literal('TIMESTAMP_WITH_LOCAL_TIME_ZONE'),
      })
      .openapi({ required: ['precision', 'type'] }),
    z.strictObject({ type: z.literal('BYTES') }).openapi({ required: ['type'] }),
    z
      .strictObject({ length: z.int().min(0), type: z.literal('BINARY') })
      .openapi({ required: ['length', 'type'] }),
    z
      .strictObject({ element_type: WireDataTypeSchema, type: z.literal('ARRAY') })
      .openapi({ required: ['element_type', 'type'] }),
    z
      .strictObject({
        key_type: WireDataTypeSchema,
        type: z.literal('MAP'),
        value_type: WireDataTypeSchema,
      })
      .openapi({ required: ['key_type', 'value_type', 'type'] }),
    z
      .strictObject({ fields: z.array(WireRowFieldSchema), type: z.literal('ROW') })
      .openapi({ required: ['fields', 'type'] }),
  ])
  .openapi({ description: 'A Fluss column type; top-level nullability is declared by the column.' })
  .openapi('ColumnDataType')

const TableChangeBodySchema = z
  .xor([
    z
      .object({
        comment: z.string().nullable().exactOptional(),
        data_type: ColumnDataTypeSchema,
        kind: z.literal('add_column'),
        name: z.string(),
      })
      .openapi({
        description: 'An added column must be nullable: existing rows have no value for it.',
        required: ['name', 'data_type', 'kind'],
      }),
    z
      .object({ key: z.string(), kind: z.literal('set_config'), value: z.string() })
      .openapi({ required: ['key', 'value', 'kind'] }),
    z
      .object({ key: z.string(), kind: z.literal('reset_config') })
      .openapi({
        description: 'Removes the explicitly configured value.',
        required: ['key', 'kind'],
      }),
  ])
  .openapi({
    description:
      'One supported table change. Config keys under `table.` address Fluss table properties;\nother keys address custom properties.',
  })
  .openapi('TableChangeBody')

const AlterTableBodySchema = z
  .strictObject({
    changes: z
      .array(TableChangeBodySchema)
      .openapi({ description: 'The server currently rejects mixing schema and config changes.' }),
  })
  .openapi({
    description: 'Body of `PATCH /v1/clusters/{cluster}/databases/{database}/tables/{table}`.',
    required: ['changes'],
  })
  .openapi('AlterTableBody')

const ClustersResponseSchema = z
  .object({ clusters: z.array(z.string()) })
  .openapi({
    description:
      'Response of `GET /v1/clusters`: the IDs used in the cluster-scoped paths of the other APIs.',
    required: ['clusters'],
  })
  .openapi('ClustersResponse')

const ColumnBodySchema = z
  .strictObject({
    comment: z.string().nullable().exactOptional(),
    data_type: ColumnDataTypeSchema,
    name: z.string(),
    nullable: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Primary-key columns default to false and reject true; other columns default to true.',
      }),
  })
  .openapi({
    description: 'One column; top-level nullability belongs here, not inside `data_type`.',
    required: ['name', 'data_type'],
  })
  .openapi('ColumnBody')

const ColumnResponseSchema = z
  .object({
    comment: z.string().exactOptional(),
    data_type: ColumnDataTypeSchema,
    name: z.string(),
    nullable: z.boolean(),
  })
  .openapi({
    description: 'One column of a table schema.',
    required: ['name', 'data_type', 'nullable'],
  })
  .openapi('ColumnResponse')

const CreateDatabaseBodySchema = z
  .strictObject({ database: z.string() })
  .openapi({
    description: 'Body of `POST /v1/clusters/{cluster}/databases`.',
    required: ['database'],
  })
  .openapi('CreateDatabaseBody')

const CreatePartitionBodySchema = z
  .strictObject({ partition: z.record(z.string(), z.string()) })
  .openapi({
    description: 'Body of `POST .../tables/{table}/partitions`.',
    required: ['partition'],
  })
  .openapi('CreatePartitionBody')

const DistributionBodySchema = z
  .strictObject({ bucket_count: z.int32().min(1), bucket_keys: z.array(z.string()) })
  .openapi({
    description: 'The bucket distribution of a table definition.',
    required: ['bucket_count', 'bucket_keys'],
  })
  .openapi('DistributionBody')

const CreateTableBodySchema = z
  .strictObject({
    columns: z.array(ColumnBodySchema),
    comment: z.string().nullable().exactOptional(),
    configs: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Fluss table properties, validated by the server.' }),
    custom_properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Custom table metadata; keys must not use the reserved `table.` prefix.',
      }),
    distribution: z.xor([z.null().nullable(), DistributionBodySchema]).exactOptional(),
    partitioned_by: z.array(z.string()).exactOptional(),
    primary_key: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Primary-key columns; omit for a log table.' }),
    table_name: z.string(),
    validate_only: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Build and validate the definition locally without creating anything.',
      }),
  })
  .openapi({
    description: 'Body of `POST /v1/clusters/{cluster}/databases/{database}/tables`.',
    required: ['table_name', 'columns'],
  })
  .openapi('CreateTableBody')

const DatabaseResponseSchema = z
  .object({ database: z.string() })
  .openapi({ description: 'Response of a database creation.', required: ['database'] })
  .openapi('DatabaseResponse')

const DatabasesResponseSchema = z
  .object({
    databases: z.array(z.string()),
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Present only while more entries follow.' }),
  })
  .openapi({
    description: 'Response of `GET /v1/clusters/{cluster}/databases`.',
    required: ['databases'],
  })
  .openapi('DatabasesResponse')

const DistributionResponseSchema = z
  .object({ bucket_count: z.int32().min(1), bucket_keys: z.array(z.string()) })
  .openapi({
    description: 'The bucket distribution of a table.',
    required: ['bucket_count', 'bucket_keys'],
  })
  .openapi('DistributionResponse')

const ErrorCodeSchema = z
  .enum([
    'already_exists',
    'backend',
    'cancelled',
    'cluster_already_exists',
    'cluster_not_found',
    'database_already_exists',
    'database_not_empty',
    'database_not_found',
    'failed_precondition',
    'internal',
    'invalid_argument',
    'limit_exceeded',
    'method_not_allowed',
    'not_acceptable',
    'not_found',
    'partition_already_exists',
    'partition_not_found',
    'resource_exhausted',
    'storage_backpressure',
    'table_already_exists',
    'table_not_found',
    'timeout',
    'unauthenticated',
    'unauthorized',
    'unavailable',
    'unsupported',
    'unsupported_media_type',
  ])
  .openapi({
    description: 'Stable error code, resource-specific where the error names a resource.',
  })
  .openapi('ErrorCode')

const ErrorBodySchema = z
  .object({
    code: ErrorCodeSchema,
    message: z.string(),
    request_id: z
      .uuid()
      .openapi({
        description: 'Correlates the response with the `x-request-id` header and the access log.',
      }),
  })
  .openapi({
    description: 'Body of the REST error envelope.',
    required: ['code', 'message', 'request_id'],
  })
  .openapi('ErrorBody')

const ErrorEnvelopeSchema = z
  .object({ error: ErrorBodySchema })
  .openapi({
    description: 'REST error envelope: `{"error": {"code", "message", "request_id"}}`.',
    examples: [
      {
        error: {
          code: 'table_not_found',
          message: 'table `mydb.orders` does not exist',
          request_id: '8f6c7f4a-f9b8-4c71-91ec-6e5578d7a913',
        },
      },
    ],
    required: ['error'],
  })
  .openapi('ErrorEnvelope')

const HealthResponseSchema = z
  .object({
    status: z.string(),
    uptime_ms: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'Milliseconds since the gateway process started.',
      }),
  })
  .openapi({
    description: 'Response of `GET /health`: liveness plus process uptime.',
    required: ['status', 'uptime_ms'],
  })
  .openapi('HealthResponse')

const PartitionEntrySchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'Native partition name; percent-encode it as a path segment when deleting.',
      }),
    partition: z.record(z.string(), z.string()),
  })
  .openapi({ description: 'One partition in a listing.', required: ['name', 'partition'] })
  .openapi('PartitionEntry')

const PartitionResponseSchema = z
  .object({ database: z.string(), partition: z.record(z.string(), z.string()), table: z.string() })
  .openapi({
    description: 'Response of a partition creation.',
    required: ['database', 'table', 'partition'],
  })
  .openapi('PartitionResponse')

const PartitionsResponseSchema = z
  .object({
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Present only while more entries follow.' }),
    partitions: z.array(PartitionEntrySchema),
  })
  .openapi({
    description:
      'Response of `GET /v1/clusters/{cluster}/databases/{database}/tables/{table}/partitions`.',
    required: ['partitions'],
  })
  .openapi('PartitionsResponse')

const ReadyResponseSchema = z
  .object({ status: z.string() })
  .openapi({
    description: 'Response of `GET /ready`: the gateway accepts application traffic.',
    required: ['status'],
  })
  .openapi('ReadyResponse')

const TableResponseSchema = z
  .object({
    columns: z.array(ColumnResponseSchema),
    comment: z.string().exactOptional(),
    configs: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Fluss table properties.' }),
    custom_properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Custom table metadata.' }),
    database: z.string(),
    distribution: DistributionResponseSchema.exactOptional(),
    partitioned_by: z.array(z.string()).exactOptional(),
    primary_key: z.array(z.string()).exactOptional(),
    table: z.string(),
  })
  .openapi({
    description: 'Response of `GET /v1/clusters/{cluster}/databases/{database}/tables/{table}`.',
    required: ['database', 'table', 'columns'],
  })
  .openapi('TableResponse')

const TablesResponseSchema = z
  .object({
    next_page_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Present only while more entries follow.' }),
    tables: z.array(z.string()),
  })
  .openapi({
    description: 'Response of `GET /v1/clusters/{cluster}/databases/{database}/tables`.',
    required: ['tables'],
  })
  .openapi('TablesResponse')

const ValidateOnlyResponseSchema = z
  .object({
    column_count: z.int().min(0),
    database: z.string(),
    primary_key: z.array(z.string()),
    table: z.string(),
    validate_only: z.boolean(),
  })
  .openapi({
    description: 'The result of a successful local `validate_only` dry run.',
    required: ['validate_only', 'database', 'table', 'column_count', 'primary_key'],
  })
  .openapi('ValidateOnlyResponse')

const WriteBodyEntryValueSchema = z
  .strictObject({
    append: z.looseObject({}).exactOptional(),
    delete: z.looseObject({}).exactOptional(),
    id: z
      .string()
      .openapi({
        description:
          'Opaque caller correlation value, unique within the request, echoed by every outcome.',
      }),
    upsert: z.looseObject({}).exactOptional(),
  })
  .openapi({
    description:
      'One request entry. Exactly one of `append`, `upsert`, or `delete` is required, and its value is\nthe row object.',
    required: ['id'],
  })
  .openapi('WriteBodyEntryValue')

const WriteBodyValueSchema = z
  .strictObject({
    entries: z.array(WriteBodyEntryValueSchema).min(1),
    partial_update_columns: z
      .array(z.string())
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Columns targeted by every entry in this batch. KV tables only.\n\nEvery primary-key column must be included, and every non-primary-key,\nnon-auto-increment column in the table must be nullable. Missing or explicit-null nullable\ntargets are written as null; untargeted columns are preserved. Deletes require only\nprimary-key values and clear the targeted non-key columns; the row is removed when all\nnon-key columns become null.',
      }),
  })
  .openapi({
    description:
      'The write request body.\n\nThe row objects stay as raw JSON so that number lexemes survive to schema-aware decoding: a\nBIGINT or DECIMAL sent as a base-10 string must not pass through an `f64`.',
    required: ['entries'],
  })
  .openapi('WriteBodyValue')

const WriteFailureResponseSchema = z
  .object({
    error_code: z
      .string()
      .openapi({
        description:
          'A stable error code, plus `storage_backpressure` — a KV write the store refused under\nbackpressure. `timeout` marks an indeterminate outcome: the row may already be applied.',
      }),
    id: z.string(),
    message: z.string(),
  })
  .openapi({ required: ['id', 'error_code', 'message'] })
  .openapi('WriteFailureResponse')

const WriteSuccessResponseSchema = z
  .object({ id: z.string() })
  .openapi({ required: ['id'] })
  .openapi('WriteSuccessResponse')

const WriteResponseSchema = z
  .object({
    error_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
    failures: z
      .array(WriteFailureResponseSchema)
      .openapi({
        description:
          'Failures in input order. A verdict can be shared by entries that landed in one accumulator\nbatch.',
      }),
    row_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
    success_count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 0 }),
    successes: z
      .array(WriteSuccessResponseSchema)
      .openapi({ description: 'Successes in input order.' }),
  })
  .openapi({
    description: 'Ordered, entry-correlated outcomes of one batch.',
    required: ['row_count', 'success_count', 'error_count', 'successes', 'failures'],
  })
  .openapi('WriteResponse')

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['health'],
  summary: 'Returns process liveness and uptime without a backend RPC.',
  operationId: 'getHealth',
  responses: {
    200: {
      description: 'Gateway liveness and uptime',
      content: { 'application/json': { schema: HealthResponseSchema } },
    },
    400: {
      description: 'This operation accepts no query parameters',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    405: {
      description: 'Wrong method for this route',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const getReadyRoute = createRoute({
  method: 'get',
  path: '/ready',
  tags: ['health'],
  summary: 'Readiness for load balancers and readiness probes.',
  description:
    '`/health` is liveness and stays 200 while the process answers, so a liveness probe never\nrestarts a draining process; this route reports acceptance instead. Readiness covers the process\nlifecycle only: Fluss cluster availability surfaces through request errors and metrics, not by\nunloading every gateway instance at once.',
  operationId: 'getReady',
  responses: {
    200: {
      description: 'The gateway accepts application traffic',
      content: { 'application/json': { schema: ReadyResponseSchema } },
    },
    400: {
      description: 'This operation accepts no query parameters',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    405: {
      description: 'Wrong method for this route',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'The gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const getV1ClustersRoute = createRoute({
  method: 'get',
  path: '/v1/clusters',
  tags: ['metadata'],
  summary: 'Lists the configured clusters.',
  description:
    'This is a configuration echo: it touches no connection, so it answers at the same speed whether\nFluss is up or down, and a caller polling it cannot turn into a burst of connection attempts. It\ndeliberately carries **no** reachability field — the gateway has no background probe, so any such\nfield would report the outcome of some earlier request rather than the current state. Whether a\ncluster can be served shows up in the errors of its own requests and in the `connections_*` metrics.',
  operationId: 'listClusters',
  responses: {
    200: {
      description: 'Configured cluster IDs in lexical order',
      content: { 'application/json': { schema: ClustersResponseSchema } },
    },
    400: {
      description: 'This operation accepts no query parameters',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    405: {
      description: 'Wrong method for this route',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Gateway starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const getV1ClustersClusterDatabasesRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{cluster}/databases',
  tags: ['metadata'],
  summary: 'Lists the databases of one configured cluster.',
  operationId: 'listDatabases',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum entries to return. Defaults to 100, capped at 1000.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Opaque token from the `next_page_token` of the previous response.',
            in: 'query',
            name: 'page_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Databases in lexical order',
      content: { 'application/json': { schema: DatabasesResponseSchema } },
    },
    400: {
      description: 'Invalid page parameter or page token',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description: 'Metadata concurrency limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Fluss is unavailable, or the gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const postV1ClustersClusterDatabasesRoute = createRoute({
  method: 'post',
  path: '/v1/clusters/{cluster}/databases',
  tags: ['ddl'],
  summary: 'Creates one database.',
  operationId: 'createDatabase',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateDatabaseBodySchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The created database',
      content: { 'application/json': { schema: DatabaseResponseSchema } },
      headers: z.object({
        Location: z
          .string()
          .exactOptional()
          .openapi({ description: 'Created database URL', param: { required: false } }),
      }),
    },
    400: {
      description: 'Malformed body or invalid definition',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    409: {
      description: 'The database already exists',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    415: {
      description: 'The body is not JSON',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description: 'Metadata concurrency limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Fluss is unavailable, or the gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const deleteV1ClustersClusterDatabasesDatabaseRoute = createRoute({
  method: 'delete',
  path: '/v1/clusters/{cluster}/databases/{database}',
  tags: ['ddl'],
  summary: 'Drops a database only if it contains no tables.',
  operationId: 'dropDatabase',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Database name',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The database was dropped' },
    400: {
      description: 'Unsupported query parameter',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster or database',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    409: {
      description: 'The database still holds tables',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description: 'Metadata concurrency limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Fluss is unavailable, or the gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const getV1ClustersClusterDatabasesDatabaseTablesRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{cluster}/databases/{database}/tables',
  tags: ['metadata'],
  summary: 'Lists the tables of one database.',
  operationId: 'listTables',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Database name',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum entries to return. Defaults to 100, capped at 1000.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Opaque token from the `next_page_token` of the previous response.',
            in: 'query',
            name: 'page_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tables in lexical order',
      content: { 'application/json': { schema: TablesResponseSchema } },
    },
    400: {
      description: 'Invalid page parameter or page token',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster or database',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description: 'Metadata concurrency limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Fluss is unavailable, or the gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const postV1ClustersClusterDatabasesDatabaseTablesRoute = createRoute({
  method: 'post',
  path: '/v1/clusters/{cluster}/databases/{database}/tables',
  tags: ['ddl'],
  summary: 'Creates one table, or validates its definition without creating it.',
  operationId: 'createTable',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Database name',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateTableBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Dry run: fluss-rs accepted the definition and nothing was created',
      content: { 'application/json': { schema: ValidateOnlyResponseSchema } },
    },
    201: {
      description: 'The table was created; GET Location to read its metadata',
      headers: z.object({
        Location: z
          .string()
          .exactOptional()
          .openapi({ description: 'Created table URL', param: { required: false } }),
      }),
    },
    400: {
      description: 'Malformed body or invalid definition',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster or database',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    409: {
      description: 'The table already exists',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    415: {
      description: 'The body is not JSON',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description: 'Metadata concurrency limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Fluss is unavailable, or the gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const getV1ClustersClusterDatabasesDatabaseTablesTableRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{cluster}/databases/{database}/tables/{table}',
  tags: ['metadata'],
  summary: 'Describes one table: its schema, keys, distribution, partitioning, and properties.',
  operationId: 'describeTable',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Database name',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
      table: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The table metadata',
      content: { 'application/json': { schema: TableResponseSchema } },
    },
    400: {
      description: 'Unsupported query parameter',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster, database, or table',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description: 'Metadata concurrency limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Fluss is unavailable, or the gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const deleteV1ClustersClusterDatabasesDatabaseTablesTableRoute = createRoute({
  method: 'delete',
  path: '/v1/clusters/{cluster}/databases/{database}/tables/{table}',
  tags: ['ddl'],
  summary: 'Drops one table.',
  operationId: 'dropTable',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Database name',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
      table: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The table was dropped' },
    400: {
      description: 'Unsupported query parameter',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster, database, or table',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description: 'Metadata concurrency limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Fluss is unavailable, or the gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const patchV1ClustersClusterDatabasesDatabaseTablesTableRoute = createRoute({
  method: 'patch',
  path: '/v1/clusters/{cluster}/databases/{database}/tables/{table}',
  tags: ['ddl'],
  summary: 'Applies one group of schema or config changes to a table.',
  operationId: 'alterTable',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Database name',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
      table: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AlterTableBodySchema } }, required: true },
  },
  responses: {
    204: { description: 'The table was altered; GET the same URL to read its metadata' },
    400: {
      description: 'Malformed body or invalid change',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster, database, or table',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    415: {
      description: 'The body is not JSON',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description: 'Metadata concurrency limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Fluss is unavailable, or the gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const getV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute = createRoute({
  method: 'get',
  path: '/v1/clusters/{cluster}/databases/{database}/tables/{table}/partitions',
  tags: ['metadata'],
  summary: 'Lists the partitions of one partitioned table.',
  operationId: 'listPartitions',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Database name',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
      table: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum entries to return. Defaults to 100, capped at 1000.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      page_token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Opaque token from the `next_page_token` of the previous response.',
            in: 'query',
            name: 'page_token',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Partitions in partition-name order',
      content: { 'application/json': { schema: PartitionsResponseSchema } },
    },
    400: {
      description: 'Invalid page parameter or page token',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster, database, or table',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description: 'Metadata concurrency limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Fluss is unavailable, or the gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const postV1ClustersClusterDatabasesDatabaseTablesTablePartitionsRoute = createRoute({
  method: 'post',
  path: '/v1/clusters/{cluster}/databases/{database}/tables/{table}/partitions',
  tags: ['ddl'],
  summary: 'Creates one partition of a partitioned table.',
  operationId: 'createPartition',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Database name',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
      table: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePartitionBodySchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The created partition',
      content: { 'application/json': { schema: PartitionResponseSchema } },
      headers: z.object({
        Location: z
          .string()
          .exactOptional()
          .openapi({ description: 'Created partition URL', param: { required: false } }),
      }),
    },
    400: {
      description: 'Malformed body, or a spec that does not match the partition keys',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster, database, or table',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    409: {
      description: "The partition already exists or the table's partition limit was reached",
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    415: {
      description: 'The body is not JSON',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description: 'Metadata concurrency limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Fluss is unavailable, or the gateway is starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const deleteV1ClustersClusterDatabasesDatabaseTablesTablePartitionsPartitionRoute =
  createRoute({
    method: 'delete',
    path: '/v1/clusters/{cluster}/databases/{database}/tables/{table}/partitions/{partition}',
    tags: ['ddl'],
    summary: 'Drops one partition by its Fluss name.',
    operationId: 'dropPartition',
    request: {
      params: z.object({
        cluster: z
          .string()
          .openapi({
            param: {
              description: 'Configured cluster ID',
              in: 'path',
              name: 'cluster',
              required: true,
              schema: { type: 'string' },
            },
          }),
        database: z
          .string()
          .openapi({
            param: {
              description: 'Database name',
              in: 'path',
              name: 'database',
              required: true,
              schema: { type: 'string' },
            },
          }),
        table: z
          .string()
          .openapi({
            param: {
              description: 'Table name',
              in: 'path',
              name: 'table',
              required: true,
              schema: { type: 'string' },
            },
          }),
        partition: z
          .string()
          .openapi({
            param: {
              description:
                'Fluss partition name; values follow partition-key order and are joined by `$`',
              in: 'path',
              name: 'partition',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'The partition was dropped' },
      400: {
        description:
          'Unsupported query parameter, or a name that does not match the partition keys',
        content: { 'application/json': { schema: ErrorEnvelopeSchema } },
      },
      404: {
        description: 'Unknown cluster, database, table, or partition',
        content: { 'application/json': { schema: ErrorEnvelopeSchema } },
      },
      413: {
        description: 'Request body above the configured limit',
        content: { 'application/json': { schema: ErrorEnvelopeSchema } },
      },
      429: {
        description: 'Metadata concurrency limit exceeded',
        content: { 'application/json': { schema: ErrorEnvelopeSchema } },
      },
      500: {
        description: 'Fluss backend failure',
        content: { 'application/json': { schema: ErrorEnvelopeSchema } },
      },
      501: {
        description: 'Fluss does not support the operation or API version',
        content: { 'application/json': { schema: ErrorEnvelopeSchema } },
      },
      503: {
        description: 'Fluss is unavailable, or the gateway is starting or shutting down',
        content: { 'application/json': { schema: ErrorEnvelopeSchema } },
      },
      504: {
        description: 'Request deadline exceeded',
        content: { 'application/json': { schema: ErrorEnvelopeSchema } },
      },
    },
  })

export const postV1ClustersClusterDatabasesDatabaseTablesTableRecordsRoute = createRoute({
  method: 'post',
  path: '/v1/clusters/{cluster}/databases/{database}/tables/{table}/records',
  tags: ['records'],
  summary: 'Writes a batch of records to a table',
  description:
    "Writes a batch in input order after validating every row against the table schema. A validation failure rejects the whole batch with 400 before anything is submitted. Delivery is at least once from the caller's perspective: the gateway never resubmits after submission, but client retries and caller retries can duplicate log appends. An entry whose code is `timeout` may have been applied, and entries sharing one accumulator batch can share a verdict.",
  operationId: 'writeRecords',
  request: {
    params: z.object({
      cluster: z
        .string()
        .openapi({
          param: {
            description: 'Configured cluster ID',
            in: 'path',
            name: 'cluster',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Exact database name',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
      table: z
        .string()
        .openapi({
          param: {
            description: 'Exact table name',
            in: 'path',
            name: 'table',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WriteBodyValueSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Ordered entry outcomes; completion can be indeterminate after submission',
      content: { 'application/json': { schema: WriteResponseSchema } },
    },
    400: {
      description: 'Malformed request, or preflight rejected the whole batch',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    404: {
      description: 'Unknown cluster or table',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    406: {
      description: 'A JSON response is not acceptable',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Body or row limit exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    415: {
      description: 'Unsupported request media type',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    429: {
      description:
        'The write concurrency gate or rate limit is exhausted; retry after the `Retry-After` pause',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    500: {
      description: 'Fluss backend failure',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    501: {
      description: 'Fluss does not support the operation or API version',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description:
        'Fluss is unavailable, the gateway is starting or shutting down, or the table/schema changed before submission',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'The request deadline passed; writes may still complete after submission',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

export const getV1OpenapiJsonRoute = createRoute({
  method: 'get',
  path: '/v1/openapi.json',
  tags: ['metadata'],
  summary: 'Serves the generated OpenAPI 3.1 document as JSON.',
  operationId: 'getOpenApi',
  responses: {
    200: { description: 'OpenAPI 3.1 document' },
    400: {
      description: 'This operation accepts no query parameters',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    405: {
      description: 'Wrong method for this route',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    413: {
      description: 'Request body above the configured limit',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    503: {
      description: 'Gateway starting or shutting down',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
    504: {
      description: 'Request deadline exceeded',
      content: { 'application/json': { schema: ErrorEnvelopeSchema } },
    },
  },
})

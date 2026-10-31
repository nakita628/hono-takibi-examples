import { createRoute, z } from '@hono/zod-openapi'

const QueryV1QueryNodeTypeSchema = z
  .enum(['UNKNOWN', 'MERGE', 'READ'])
  .openapi({ title: 'Type' })
  .openapi('QueryV1QueryNodeType')

const QueryV1BlockExecutionSchema = z
  .strictObject({
    blockId: z.string().exactOptional().openapi({ title: 'block_id' }),
    startTimeNs: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'start_time_ns' }),
    endTimeNs: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'end_time_ns' }),
    datasetsProcessed: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'datasets_processed' }),
    size: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'size' }),
    shard: z.int().exactOptional().openapi({ title: 'shard' }),
    compactionLevel: z.int().exactOptional().openapi({ title: 'compaction_level' }),
  })
  .openapi({
    title: 'BlockExecution',
    description: 'BlockExecution captures execution details for a single block.',
    required: [],
  })
  .openapi('QueryV1BlockExecution')

const QueryV1ExecutionStatsSchema = z
  .strictObject({
    blocksRead: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'blocks_read' }),
    datasetsProcessed: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'datasets_processed' }),
    blockExecutions: z
      .array(QueryV1BlockExecutionSchema)
      .exactOptional()
      .openapi({ title: 'block_executions' }),
    bytesFetched: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'bytes_fetched',
        description:
          'bytes_fetched is the total number of bytes requested from object storage\n during this invocation. It counts only the bytes from this single,\n successful Invoke call: retried or hedged calls that did not produce a\n response are not included, so the value is deterministic across retries.',
      }),
    processingDurationNs: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'processing_duration_ns',
        description:
          'processing_duration_ns is the critical-path time (in nanoseconds) spent\n executing successful invocations on query-backend nodes, including local\n aggregation but excluding client-side retry backoff and unaccounted time.',
      }),
    backoffDurationNs: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'backoff_duration_ns',
        description:
          'backoff_duration_ns is the critical-path time (in nanoseconds) spent waiting\n between query-backend RPC attempts (e.g. concurrency-limiter retry backoff).',
      }),
    unaccountedDurationNs: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'unaccounted_duration_ns',
        description:
          'unaccounted_duration_ns is the remaining critical-path client-observed time\n not classified as processing or backoff. It includes transport, connection\n waits, and failed attempts whose backend timings were not returned.',
      }),
  })
  .openapi({
    title: 'ExecutionStats',
    description: 'ExecutionStats captures statistics for READ and MERGE node execution.',
    required: [],
  })
  .openapi('QueryV1ExecutionStats')

type QueryV1ExecutionNodeType = {
  type?: z.infer<typeof QueryV1QueryNodeTypeSchema>
  executor?: string
  startTimeNs?: bigint | string
  endTimeNs?: bigint | string
  children?: QueryV1ExecutionNodeType[]
  stats?: z.infer<typeof QueryV1ExecutionStatsSchema>
  error?: string
}

const MetastoreV1DatasetSchema = z
  .strictObject({
    format: z.int().exactOptional().openapi({ title: 'format' }),
    tenant: z.int32().exactOptional().openapi({ title: 'tenant' }),
    name: z.int32().exactOptional().openapi({ title: 'name' }),
    minTime: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'min_time' }),
    maxTime: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'max_time' }),
    tableOfContents: z
      .array(
        z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        title: 'table_of_contents',
        description:
          'Table of contents lists data sections within the tenant\n service region. The offsets are absolute.\n\n The interpretation of the table of contents is specific\n to the format.\n\n By default (format 0), the sections are:\n  - 0: profiles.parquet\n  - 1: index.tsdb\n  - 2: symbols.symdb\n\n Format 1 corresponds to the tenant-wide index:\n  - 0: index.tsdb (dataset index)',
      }),
    size: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'size',
        description: 'Size of the dataset in bytes.',
      }),
    labels: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        title: 'labels',
        description:
          "Length prefixed label key-value pairs.\n\n Multiple label sets can be associated with a dataset to denote relationships\n across multiple dimensions. For example, each dataset currently stores data\n for multiple profile types:\n   - service_name=A, profile_type=cpu\n   - service_name=A, profile_type=memory\n\n Labels are primarily used to filter datasets based on their attributes.\n For instance, labels can be used to select datasets containing a specific\n service.\n\n The set of attributes is extensible and can grow over time. For example, a\n namespace attribute could be added to datasets:\n   - service_name=A, profile_type=cpu\n   - service_name=A, profile_type=memory\n   - service_name=B, namespace=N, profile_type=cpu\n   - service_name=B, namespace=N, profile_type=memory\n   - service_name=C, namespace=N, profile_type=cpu\n   - service_name=C, namespace=N, profile_type=memory\n\n This organization enables querying datasets by namespace without accessing\n the block contents, which significantly improves performance.\n\n Metadata labels are not required to be included in the block's TSDB index\n and may be orthogonal to the data dimensions. Generally, attributes serve\n two primary purposes:\n   - To create data scopes that span multiple service, reducing the need to\n     scan the entire set of block satisfying the query expression, i.e.,\n     the time range and tenant ID.\n   - To provide additional information about datasets without altering the\n     storage schema or access methods.\n\n For example, this approach can support cost attribution or similar breakdown\n analyses. It can also handle data dependencies (e.g., links to external data)\n using labels.\n\n The cardinality of the labels is expected to remain relatively low (fewer\n than a million unique combinations globally). However, this depends on the\n metadata storage system.\n\n Metadata labels are represented as a slice of `int32` values that refer to\n strings in the metadata entry's string table. The slice is a sequence of\n length-prefixed key-value (KV) pairs:\n\n len(2) | k1 | v1 | k2 | v2 | len(3) | k1 | v3 | k2 | v4 | k3 | v5\n\n The order of KV pairs is not defined. The format is optimized for indexing\n rather than querying, and it is not intended to be the most space-efficient\n representation. Since entries are supposed to be indexed, the redundancy of\n denormalized relationships is not a concern.",
      }),
  })
  .openapi({ title: 'Dataset', required: [] })
  .openapi('MetastoreV1Dataset')

const MetastoreV1BlockMetaSchema = z
  .strictObject({
    formatVersion: z.int().exactOptional().openapi({ title: 'format_version' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        title: 'id',
        description:
          'Block ID is a unique identifier for the block.\n This is the only field that is not included into\n the string table.',
      }),
    tenant: z
      .int32()
      .exactOptional()
      .openapi({ title: 'tenant', description: 'If empty, datasets belong to distinct tenants.' }),
    shard: z.int().exactOptional().openapi({ title: 'shard' }),
    compactionLevel: z.int().exactOptional().openapi({ title: 'compaction_level' }),
    minTime: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'min_time' }),
    maxTime: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'max_time' }),
    createdBy: z.int32().exactOptional().openapi({ title: 'created_by' }),
    metadataOffset: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'metadata_offset' }),
    size: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'size' }),
    datasets: z.array(MetastoreV1DatasetSchema).exactOptional().openapi({ title: 'datasets' }),
    stringTable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'string_table',
        description:
          'String table contains strings of the block.\n By convention, the first string is always an empty string.',
      }),
  })
  .openapi({
    title: 'BlockMeta',
    description:
      "BlockMeta is a metadata entry that describes the block's contents. A block\n is a collection of datasets that share certain properties, such as shard ID,\n compaction level, tenant ID, time range, creation time, and more.\n\n The block content's format denotes the binary format of the datasets and the\n metadata entry (to address logical dependencies). Each dataset has its own\n table of contents that lists the sections within the dataset. Each dataset\n has its own set of attributes (labels) that describe its specific contents.",
    required: [],
  })
  .openapi('MetastoreV1BlockMeta')

type QueryV1QueryNodeType = {
  type?: z.infer<typeof QueryV1QueryNodeTypeSchema>
  children?: QueryV1QueryNodeType[]
  blocks?: z.infer<typeof MetastoreV1BlockMetaSchema>[]
}

const ConnectProtocolVersionSchema = z
  .literal(1)
  .openapi({
    title: 'Connect-Protocol-Version',
    description: 'Define the version of the Connect protocol',
  })
  .openapi('ConnectProtocolVersion')

const ConnectTimeoutHeaderSchema = z
  .number()
  .openapi({ title: 'Connect-Timeout-Ms', description: 'Define the timeout, in ms' })
  .openapi('ConnectTimeoutHeader')

const ConnectErrorDetailsAnySchema = z
  .looseObject({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL that acts as a globally unique identifier for the type of the serialized message. For example: `type.googleapis.com/google.rpc.ErrorInfo`. This is used to determine the schema of the data in the `value` field and is the discriminator for the `debug` field.',
      }),
    value: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'The Protobuf message, serialized as bytes and base64-encoded. The specific message type is identified by the `type` field.',
      }),
    debug: z
      .xor([
        z.looseObject({}).openapi({ title: 'Any', description: 'Detailed error information.' }),
      ])
      .exactOptional()
      .openapi({
        discriminator: { propertyName: 'type' },
        title: 'Debug',
        description:
          "Deserialized error detail payload. The 'type' field indicates the schema. This field is for easier debugging and should not be relied upon for application logic.",
      }),
  })
  .openapi({
    description:
      'Contains an arbitrary serialized message along with a @type that describes the type of the serialized message, with an additional debug field for ConnectRPC error details.',
    required: [],
  })
  .openapi('ConnectErrorDetailsAny')

const ConnectErrorSchema = z
  .looseObject({
    code: z
      .enum([
        'canceled',
        'unknown',
        'invalid_argument',
        'deadline_exceeded',
        'not_found',
        'already_exists',
        'permission_denied',
        'resource_exhausted',
        'failed_precondition',
        'aborted',
        'out_of_range',
        'unimplemented',
        'internal',
        'unavailable',
        'data_loss',
        'unauthenticated',
      ])
      .exactOptional()
      .openapi({
        examples: ['not_found'],
        description:
          'The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.',
      }),
    details: z
      .array(ConnectErrorDetailsAnySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is no limit on the number of messages.',
      }),
  })
  .openapi({
    title: 'Connect Error',
    description:
      'Error type returned by Connect: https://connectrpc.com/docs/go/errors/#http-representation',
    required: [],
  })
  .openapi('ConnectError')

const GoogleV1FunctionSchema = z
  .strictObject({
    id: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'id',
        description: 'Unique nonzero id for the function.',
      }),
    name: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'name',
        description:
          'Name of the function, in human-readable form if available. Index into string table',
      }),
    systemName: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'system_name',
        description:
          'Name of the function, as identified by the system.\n For instance, it can be a C++ mangled name. Index into string table',
      }),
    filename: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'filename',
        description: 'Source file containing the function. Index into string table',
      }),
    startLine: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'start_line',
        description: 'Line number in source file.',
      }),
  })
  .openapi({ title: 'Function', required: [] })
  .openapi('GoogleV1Function')

const GoogleV1LineSchema = z
  .strictObject({
    functionId: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'function_id',
        description: 'The id of the corresponding profile.Function for this line.',
      }),
    line: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'line',
        description: 'Line number in source code.',
      }),
  })
  .openapi({ title: 'Line', required: [] })
  .openapi('GoogleV1Line')

const GoogleV1LocationSchema = z
  .strictObject({
    id: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'id',
        description:
          'Unique nonzero id for the location.  A profile could use\n instruction addresses or any integer sequence as ids.',
      }),
    mappingId: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'mapping_id',
        description:
          'The id of the corresponding profile.Mapping for this location.\n It can be unset if the mapping is unknown or not applicable for\n this profile type.',
      }),
    address: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'address',
        description:
          'The instruction address for this location, if available.  It\n should be within [Mapping.memory_start...Mapping.memory_limit]\n for the corresponding mapping. A non-leaf address may be in the\n middle of a call instruction. It is up to display tools to find\n the beginning of the instruction if necessary.',
      }),
    line: z
      .array(GoogleV1LineSchema)
      .exactOptional()
      .openapi({
        title: 'line',
        description:
          'Multiple line indicates this location has inlined functions,\n where the last entry represents the caller into which the\n preceding entries were inlined.\n\n E.g., if memcpy() is inlined into printf:\n    line[0].function_name == "memcpy"\n    line[1].function_name == "printf"',
      }),
    isFolded: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'is_folded',
        description:
          "Provides an indication that multiple symbols map to this location's\n address, for example due to identical code folding by the linker. In that\n case the line information above represents one of the multiple\n symbols. This field must be recomputed when the symbolization state of the\n profile changes.",
      }),
  })
  .openapi({
    title: 'Location',
    description: 'Describes function and line table debug information.',
    required: [],
  })
  .openapi('GoogleV1Location')

const GoogleV1MappingSchema = z
  .strictObject({
    id: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'id',
        description: 'Unique nonzero id for the mapping.',
      }),
    memoryStart: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'memory_start',
        description: 'Address at which the binary (or DLL) is loaded into memory.',
      }),
    memoryLimit: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'memory_limit',
        description: 'The limit of the address range occupied by this mapping.',
      }),
    fileOffset: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'file_offset',
        description: 'Offset in the binary that corresponds to the first mapped address.',
      }),
    filename: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'filename',
        description:
          'The object this entry is loaded from.  This can be a filename on\n disk for the main binary and shared libraries, or virtual\n abstractions like "[vdso]". Index into string table',
      }),
    buildId: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'build_id',
        description:
          'A string that uniquely identifies a particular program version\n with high probability. E.g., for binaries generated by GNU tools,\n it could be the contents of the .note.gnu.build-id field. Index into string table',
      }),
    hasFunctions: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'has_functions',
        description: 'The following fields indicate the resolution of symbolic info.',
      }),
    hasFilenames: z.boolean().exactOptional().openapi({ title: 'has_filenames' }),
    hasLineNumbers: z.boolean().exactOptional().openapi({ title: 'has_line_numbers' }),
    hasInlineFrames: z.boolean().exactOptional().openapi({ title: 'has_inline_frames' }),
  })
  .openapi({ title: 'Mapping', required: [] })
  .openapi('GoogleV1Mapping')

const QuerierV1HeatmapQueryTypeSchema = z
  .enum([
    'HEATMAP_QUERY_TYPE_UNSPECIFIED',
    'HEATMAP_QUERY_TYPE_INDIVIDUAL',
    'HEATMAP_QUERY_TYPE_SPAN',
  ])
  .openapi({ title: 'HeatmapQueryType' })
  .openapi('QuerierV1HeatmapQueryType')

const QuerierV1TimeSeriesAnomalyTypeSchema = z
  .enum([
    'TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED',
    'TIME_SERIES_ANOMALY_TYPE_SPIKE',
    'TIME_SERIES_ANOMALY_TYPE_DROP',
    'TIME_SERIES_ANOMALY_TYPE_INCREASE',
    'TIME_SERIES_ANOMALY_TYPE_DECREASE',
  ])
  .openapi({ title: 'TimeSeriesAnomalyType' })
  .openapi('QuerierV1TimeSeriesAnomalyType')

const TypesV1LabelPairSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({ examples: ['service_name'], title: 'name', description: 'Label name' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ examples: ['my_service'], title: 'value', description: 'Label value' }),
  })
  .openapi({ title: 'LabelPair', required: [] })
  .openapi('TypesV1LabelPair')

const QuerierV1TimeSeriesAnomalySchema = z
  .strictObject({
    type: QuerierV1TimeSeriesAnomalyTypeSchema.exactOptional().openapi({ title: 'type' }),
    labels: z.array(TypesV1LabelPairSchema).exactOptional().openapi({ title: 'labels' }),
    timestampStart: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'timestamp_start',
        description: 'Milliseconds since epoch.',
      }),
    timestampEnd: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'timestamp_end',
        description: 'Milliseconds since epoch.',
      }),
    timestampPeak: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'timestamp_peak',
        description: 'Milliseconds since epoch.',
      }),
    baseline: z.float64().exactOptional().openapi({ title: 'baseline' }),
    peakValue: z.float64().exactOptional().openapi({ title: 'peak_value' }),
    relativeChange: z.float64().exactOptional().openapi({ title: 'relative_change' }),
    score: z
      .float64()
      .exactOptional()
      .openapi({
        title: 'score',
        description: 'Statistical anomaly score relative to pre-event baseline variability.',
      }),
    priorityScore: z
      .float64()
      .exactOptional()
      .openapi({
        title: 'priority_score',
        description:
          'Statistical score weighted by resource usage relative to the largest input\n series (including series without anomalies). Used to rank series for limits.\n Usage is the sum of non-negative finite buckets across the selected window.',
      }),
  })
  .openapi({ title: 'TimeSeriesAnomaly', required: [] })
  .openapi('QuerierV1TimeSeriesAnomaly')

const QueryV1AttributeTableSchema = z
  .strictObject({
    keys: z.array(z.string()).exactOptional().openapi({ title: 'keys' }),
    values: z.array(z.string()).exactOptional().openapi({ title: 'values' }),
  })
  .openapi({ title: 'AttributeTable', required: [] })
  .openapi('QueryV1AttributeTable')

const QueryV1QueryNodeSchema: z.ZodType<QueryV1QueryNodeType> = z
  .lazy(() =>
    z
      .strictObject({
        type: QueryV1QueryNodeTypeSchema.exactOptional().openapi({ title: 'type' }),
        children: z.array(QueryV1QueryNodeSchema).exactOptional().openapi({ title: 'children' }),
        blocks: z.array(MetastoreV1BlockMetaSchema).exactOptional().openapi({ title: 'blocks' }),
      })
      .openapi({ title: 'QueryNode', required: [] }),
  )
  .openapi('QueryV1QueryNode')

const QueryV1QueryPlanSchema = z
  .strictObject({ root: QueryV1QueryNodeSchema.exactOptional().openapi({ title: 'root' }) })
  .openapi({
    title: 'QueryPlan',
    description:
      'A query plan is represented by a directed acyclic graph (DAG),\n where each node is either a "merge" node or a "read" node.\n\n Merge nodes reference other nodes in the plan as their "children".\n Read nodes reference the blocks which contain the actual data to be processed.',
    required: [],
  })
  .openapi('QueryV1QueryPlan')

const QueryV1ExecutionNodeSchema: z.ZodType<QueryV1ExecutionNodeType> = z
  .lazy(() =>
    z
      .strictObject({
        type: QueryV1QueryNodeTypeSchema.exactOptional().openapi({ title: 'type' }),
        executor: z.string().exactOptional().openapi({ title: 'executor' }),
        startTimeNs: z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64', title: 'start_time_ns' }),
        endTimeNs: z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64', title: 'end_time_ns' }),
        children: z
          .array(QueryV1ExecutionNodeSchema)
          .exactOptional()
          .openapi({ title: 'children' }),
        stats: QueryV1ExecutionStatsSchema.exactOptional().openapi({ title: 'stats' }),
        error: z.string().exactOptional().openapi({ title: 'error' }),
      })
      .openapi({
        title: 'ExecutionNode',
        description: 'ExecutionNode captures how a query plan node was actually executed.',
        required: [],
      }),
  )
  .openapi('QueryV1ExecutionNode')

const QueryV1DiagnosticsSchema = z
  .strictObject({
    queryPlan: QueryV1QueryPlanSchema.exactOptional().openapi({ title: 'query_plan' }),
    executionNode: QueryV1ExecutionNodeSchema.exactOptional().openapi({ title: 'execution_node' }),
  })
  .openapi({
    title: 'Diagnostics',
    description: 'Diagnostic messages, events, statistics, analytics, etc.',
    required: [],
  })
  .openapi('QueryV1Diagnostics')

const QueryV1ExemplarSchema = z
  .strictObject({
    timestamp: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'timestamp',
        description: 'Milliseconds unix timestamp',
      }),
    profileId: z.string().exactOptional().openapi({ title: 'profile_id' }),
    spanId: z.string().exactOptional().openapi({ title: 'span_id' }),
    value: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'value' }),
    attributeRefs: z
      .array(
        z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ title: 'attribute_refs' }),
  })
  .openapi({ title: 'Exemplar', required: [] })
  .openapi('QueryV1Exemplar')

const QueryV1HeatmapPointSchema = z
  .strictObject({
    timestamp: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'timestamp',
        description: 'Milliseconds since epoch when the profile was captured.',
      }),
    profileId: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'profile_id',
        description:
          'Unique identifier for the profile (UUID), reference into AttributeTable with only value set',
      }),
    spanId: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'span_id',
        description: 'Span ID if this profile was split by span during ingestion',
      }),
    value: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'value',
        description:
          'Total sample value for this profile (e.g., CPU nanoseconds, bytes allocated).',
      }),
    attributeRefs: z
      .array(
        z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        title: 'attribute_refs',
        description: 'labels as references into AttributeTable',
      }),
    traceId: z
      .string()
      .exactOptional()
      .openapi({
        title: 'trace_id',
        description: 'Trace ID associated with the span, if present.',
      }),
  })
  .openapi({ title: 'HeatmapPoint', required: [] })
  .openapi('QueryV1HeatmapPoint')

const TypesV1ExemplarTypeSchema = z
  .enum([
    'EXEMPLAR_TYPE_UNSPECIFIED',
    'EXEMPLAR_TYPE_NONE',
    'EXEMPLAR_TYPE_INDIVIDUAL',
    'EXEMPLAR_TYPE_SPAN',
  ])
  .openapi({ title: 'ExemplarType' })
  .openapi('TypesV1ExemplarType')

const QueryV1HeatmapQuerySchema = z
  .strictObject({
    step: z.float64().exactOptional().openapi({ title: 'step' }),
    groupBy: z.array(z.string()).exactOptional().openapi({ title: 'group_by' }),
    queryType: QuerierV1HeatmapQueryTypeSchema.exactOptional().openapi({ title: 'query_type' }),
    limit: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'limit' }),
    exemplarType: TypesV1ExemplarTypeSchema.exactOptional().openapi({ title: 'exemplar_type' }),
  })
  .openapi({ title: 'HeatmapQuery', required: [] })
  .openapi('QueryV1HeatmapQuery')

const QueryV1HeatmapSeriesSchema = z
  .strictObject({
    attributeRefs: z
      .array(
        z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ title: 'attribute_refs' }),
    points: z
      .array(QueryV1HeatmapPointSchema)
      .exactOptional()
      .openapi({
        title: 'points',
        description: 'Points are timestamp, then span_id, then porfile_id ordered',
      }),
  })
  .openapi({ title: 'HeatmapSeries', required: [] })
  .openapi('QueryV1HeatmapSeries')

const QueryV1HeatmapReportSchema = z
  .strictObject({
    query: QueryV1HeatmapQuerySchema.exactOptional().openapi({ title: 'query' }),
    heatmapSeries: z
      .array(QueryV1HeatmapSeriesSchema)
      .exactOptional()
      .openapi({ title: 'heatmap_series' }),
    attributeTable: QueryV1AttributeTableSchema.exactOptional().openapi({
      title: 'attribute_table',
    }),
  })
  .openapi({ title: 'HeatmapReport', required: [] })
  .openapi('QueryV1HeatmapReport')

const QueryV1InvokeOptionsSchema = z
  .strictObject({
    sanitizeOnMerge: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'sanitize_on_merge',
        description:
          'Query workers might not have access to the tenant\n overrides, therefore all the necessary options should\n be listed in the request explicitly.',
      }),
    collectDiagnostics: z.boolean().exactOptional().openapi({ title: 'collect_diagnostics' }),
    finalize: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'finalize',
        description:
          'Run final report processing after this invocation completes. Set only for\n the root invocation; child invocations must clear this flag.',
      }),
  })
  .openapi({ title: 'InvokeOptions', required: [] })
  .openapi('QueryV1InvokeOptions')

const QueryV1QueryTypeSchema = z
  .enum([
    'QUERY_UNSPECIFIED',
    'QUERY_LABEL_NAMES',
    'QUERY_LABEL_VALUES',
    'QUERY_SERIES_LABELS',
    'QUERY_TIME_SERIES',
    'QUERY_TREE',
    'QUERY_PPROF',
    'QUERY_HEATMAP',
    'QUERY_TIME_SERIES_COMPACT',
    'QUERY_PROFILE_PRESENCE',
    'QUERY_TIME_SERIES_ANALYSIS',
  ])
  .openapi({ title: 'QueryType' })
  .openapi('QueryV1QueryType')

const QueryV1LabelNamesQuerySchema = z
  .strictObject({})
  .openapi({ title: 'LabelNamesQuery' })
  .openapi('QueryV1LabelNamesQuery')

const QueryV1LabelValuesQuerySchema = z
  .strictObject({ labelName: z.string().exactOptional().openapi({ title: 'label_name' }) })
  .openapi({ title: 'LabelValuesQuery', required: [] })
  .openapi('QueryV1LabelValuesQuery')

const QueryV1SeriesLabelsQuerySchema = z
  .strictObject({
    labelNames: z.array(z.string()).exactOptional().openapi({ title: 'label_names' }),
  })
  .openapi({ title: 'SeriesLabelsQuery', required: [] })
  .openapi('QueryV1SeriesLabelsQuery')

const QueryV1TimeSeriesQuerySchema = z
  .strictObject({
    step: z.float64().exactOptional().openapi({ title: 'step' }),
    groupBy: z.array(z.string()).exactOptional().openapi({ title: 'group_by' }),
    limit: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'limit' }),
    exemplarType: TypesV1ExemplarTypeSchema.exactOptional().openapi({ title: 'exemplar_type' }),
  })
  .openapi({ title: 'TimeSeriesQuery', required: [] })
  .openapi('QueryV1TimeSeriesQuery')

const TypesV1LocationSchema = z
  .strictObject({ name: z.string().exactOptional().openapi({ title: 'name' }) })
  .openapi({ title: 'Location', required: [] })
  .openapi('TypesV1Location')

const TypesV1GoPGOSchema = z
  .strictObject({
    keepLocations: z
      .int()
      .exactOptional()
      .openapi({
        title: 'keep_locations',
        description: 'Specifies the number of leaf locations to keep.',
      }),
    aggregateCallees: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'aggregate_callees',
        description:
          'Aggregate callees causes the leaf location line number to be ignored,\n thus aggregating all callee samples (but not callers).',
      }),
  })
  .openapi({ title: 'GoPGO', required: [] })
  .openapi('TypesV1GoPGO')

const TypesV1StackTraceSelectorSchema = z
  .strictObject({
    callSite: z
      .array(TypesV1LocationSchema)
      .exactOptional()
      .openapi({
        title: 'call_site',
        description:
          'Stack trace of the call site. Root at call_site[0].\n Only stack traces having the prefix provided will be selected.\n If empty, the filter is ignored.',
      }),
    goPgo: TypesV1GoPGOSchema.exactOptional().openapi({
      title: 'go_pgo',
      description:
        'Stack trace selector for profiles purposed for Go PGO.\n If set, call_site is ignored.',
    }),
  })
  .openapi({
    title: 'StackTraceSelector',
    description: 'StackTraceSelector is used for filtering stack traces by locations.',
    required: [],
  })
  .openapi('TypesV1StackTraceSelector')

const QueryV1TreeQuerySchema = z
  .strictObject({
    maxNodes: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'max_nodes' }),
    spanSelector: z.array(z.string()).exactOptional().openapi({ title: 'span_selector' }),
    stackTraceSelector: TypesV1StackTraceSelectorSchema.nullable()
      .exactOptional()
      .openapi({ title: 'stack_trace_selector' }),
    profileIdSelector: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'profile_id_selector' }),
    fullSymbols: z.boolean().exactOptional().openapi({ title: 'full_symbols' }),
    traceIdSelector: z.array(z.string()).exactOptional().openapi({ title: 'trace_id_selector' }),
  })
  .openapi({ title: 'TreeQuery', required: [] })
  .openapi('QueryV1TreeQuery')

const QueryV1PprofQuerySchema = z
  .strictObject({
    maxNodes: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'max_nodes' }),
    stackTraceSelector: TypesV1StackTraceSelectorSchema.nullable()
      .exactOptional()
      .openapi({ title: 'stack_trace_selector' }),
    profileIdSelector: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'profile_id_selector' }),
    spanSelector: z.array(z.string()).exactOptional().openapi({ title: 'span_selector' }),
    traceIdSelector: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'trace_id_selector', description: 'TODO(kolesnikovae): Go PGO options.' }),
  })
  .openapi({ title: 'PprofQuery', required: [] })
  .openapi('QueryV1PprofQuery')

const QueryV1ProfilePresenceQuerySchema = z
  .strictObject({
    profileIdSelector: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'profile_id_selector' }),
  })
  .openapi({
    title: 'ProfilePresenceQuery',
    description:
      '(Experimental) ProfilePresenceQuery checks which of profile_id_selector are actually\n present in the queried data (matching the label selector and time range), without\n resolving symbols or building a merged profile.',
    required: [],
  })
  .openapi('QueryV1ProfilePresenceQuery')

const QueryV1TimeSeriesAnalysisConfigSchema = z
  .strictObject({
    baselineWindow: z
      .int()
      .exactOptional()
      .openapi({
        title: 'baseline_window',
        description: 'Number of preceding observed points used to calculate the baseline.',
      }),
    confirmationWindow: z
      .int()
      .exactOptional()
      .openapi({
        title: 'confirmation_window',
        description: 'Number of subsequent observed points used to classify an event.',
      }),
    minimumSustainedPoints: z
      .int()
      .exactOptional()
      .openapi({
        title: 'minimum_sustained_points',
        description: 'Number of elevated points required for an event to be sustained.',
      }),
    minimumRelativeChange: z
      .float64()
      .exactOptional()
      .openapi({
        title: 'minimum_relative_change',
        description: 'Minimum absolute fractional deviation from the baseline.',
      }),
    scoreThreshold: z
      .float64()
      .exactOptional()
      .openapi({
        title: 'score_threshold',
        description: 'Minimum robust score, based on median absolute deviation.',
      }),
    recoveryThresholdRatio: z
      .float64()
      .exactOptional()
      .openapi({
        title: 'recovery_threshold_ratio',
        description: 'Fraction of minimum_relative_change used to decide recovery.',
      }),
    flatnessThreshold: z
      .float64()
      .exactOptional()
      .openapi({
        title: 'flatness_threshold',
        description: 'Maximum normalized range for a series to be considered flat.',
      }),
  })
  .openapi({ title: 'TimeSeriesAnalysisConfig', required: [] })
  .openapi('QueryV1TimeSeriesAnalysisConfig')

const QueryV1TimeSeriesAnalysisQuerySchema = z
  .strictObject({
    step: z.float64().exactOptional().openapi({ title: 'step' }),
    groupBy: z.array(z.string()).exactOptional().openapi({ title: 'group_by' }),
    limit: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'limit' }),
    config: QueryV1TimeSeriesAnalysisConfigSchema.exactOptional().openapi({ title: 'config' }),
  })
  .openapi({ title: 'TimeSeriesAnalysisQuery', required: [] })
  .openapi('QueryV1TimeSeriesAnalysisQuery')

const QueryV1QuerySchema = z
  .strictObject({
    queryType: QueryV1QueryTypeSchema.exactOptional().openapi({ title: 'query_type' }),
    labelNames: QueryV1LabelNamesQuerySchema.exactOptional().openapi({
      title: 'label_names',
      description:
        'Exactly one of the following fields should be set,\n depending on the query type.',
    }),
    labelValues: QueryV1LabelValuesQuerySchema.exactOptional().openapi({ title: 'label_values' }),
    seriesLabels: QueryV1SeriesLabelsQuerySchema.exactOptional().openapi({
      title: 'series_labels',
    }),
    timeSeries: QueryV1TimeSeriesQuerySchema.exactOptional().openapi({ title: 'time_series' }),
    tree: QueryV1TreeQuerySchema.exactOptional().openapi({ title: 'tree' }),
    pprof: QueryV1PprofQuerySchema.exactOptional().openapi({ title: 'pprof' }),
    heatmap: QueryV1HeatmapQuerySchema.exactOptional().openapi({ title: 'heatmap' }),
    timeSeriesCompact: QueryV1TimeSeriesQuerySchema.exactOptional().openapi({
      title: 'time_series_compact',
    }),
    profilePresence: QueryV1ProfilePresenceQuerySchema.exactOptional().openapi({
      title: 'profile_presence',
    }),
    timeSeriesAnalysis: QueryV1TimeSeriesAnalysisQuerySchema.exactOptional().openapi({
      title: 'time_series_analysis',
      description: 'function_details\n call_graph\n top_table\n ...',
    }),
  })
  .openapi({ title: 'Query', required: [] })
  .openapi('QueryV1Query')

const QueryV1InvokeRequestSchema = z
  .strictObject({
    tenant: z.array(z.string()).exactOptional().openapi({ title: 'tenant' }),
    startTime: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'start_time' }),
    endTime: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'end_time' }),
    labelSelector: z.string().exactOptional().openapi({ title: 'label_selector' }),
    query: z.array(QueryV1QuerySchema).exactOptional().openapi({ title: 'query' }),
    queryPlan: QueryV1QueryPlanSchema.exactOptional().openapi({ title: 'query_plan' }),
    options: QueryV1InvokeOptionsSchema.exactOptional().openapi({ title: 'options' }),
  })
  .openapi({ title: 'InvokeRequest', required: [] })
  .openapi('QueryV1InvokeRequest')

const QueryV1ReportTypeSchema = z
  .enum([
    'REPORT_UNSPECIFIED',
    'REPORT_LABEL_NAMES',
    'REPORT_LABEL_VALUES',
    'REPORT_SERIES_LABELS',
    'REPORT_TIME_SERIES',
    'REPORT_TREE',
    'REPORT_PPROF',
    'REPORT_HEATMAP',
    'REPORT_TIME_SERIES_COMPACT',
    'REPORT_PROFILE_PRESENCE',
    'REPORT_TIME_SERIES_ANALYSIS',
  ])
  .openapi({ title: 'ReportType' })
  .openapi('QueryV1ReportType')

const QueryV1LabelNamesReportSchema = z
  .strictObject({
    query: QueryV1LabelNamesQuerySchema.exactOptional().openapi({ title: 'query' }),
    labelNames: z.array(z.string()).exactOptional().openapi({ title: 'label_names' }),
  })
  .openapi({ title: 'LabelNamesReport', required: [] })
  .openapi('QueryV1LabelNamesReport')

const QueryV1LabelValuesReportSchema = z
  .strictObject({
    query: QueryV1LabelValuesQuerySchema.exactOptional().openapi({ title: 'query' }),
    labelValues: z.array(z.string()).exactOptional().openapi({ title: 'label_values' }),
  })
  .openapi({ title: 'LabelValuesReport', required: [] })
  .openapi('QueryV1LabelValuesReport')

const TypesV1LabelsSchema = z
  .strictObject({
    labels: z
      .array(TypesV1LabelPairSchema)
      .exactOptional()
      .openapi({
        title: 'labels',
        description: 'LabelPair is the key value pairs to identify the corresponding profile',
      }),
  })
  .openapi({ title: 'Labels', required: [] })
  .openapi('TypesV1Labels')

const QueryV1SeriesLabelsReportSchema = z
  .strictObject({
    query: QueryV1SeriesLabelsQuerySchema.exactOptional().openapi({ title: 'query' }),
    seriesLabels: z.array(TypesV1LabelsSchema).exactOptional().openapi({ title: 'series_labels' }),
  })
  .openapi({ title: 'SeriesLabelsReport', required: [] })
  .openapi('QueryV1SeriesLabelsReport')

const TypesV1ProfileAnnotationSchema = z
  .strictObject({
    key: z
      .string()
      .exactOptional()
      .openapi({ title: 'key', description: 'Annotation key [hidden]' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ title: 'value', description: 'Annotation value [hidden]' }),
  })
  .openapi({
    title: 'ProfileAnnotation',
    description:
      "Annotations provide additional metadata for a profile.\n\n The main differences between labels and annotations are:\n   - annotations cannot be used in query selectors\n   - annotation keys don't have to be unique\n\n Currently annotations are applied internally by distributors,\n any annotation passed via the push API will be dropped.",
    required: [],
  })
  .openapi('TypesV1ProfileAnnotation')

const TypesV1ExemplarSchema = z
  .strictObject({
    timestamp: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        examples: ['1730000023000'],
        title: 'timestamp',
        description: 'Milliseconds since epoch when the profile was captured.',
      }),
    profileId: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['7c9e6679-7425-40de-944b-e07fc1f90ae7'],
        title: 'profile_id',
        description: 'Unique identifier for the profile (UUID).',
      }),
    spanId: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['00f067aa0ba902b7'],
        title: 'span_id',
        description: 'Span ID if this profile was split by span during ingestion.',
      }),
    value: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        examples: ['2450000000'],
        title: 'value',
        description:
          'Total sample value for this profile (e.g., CPU nanoseconds, bytes allocated).',
      }),
    labels: z
      .array(TypesV1LabelPairSchema)
      .exactOptional()
      .openapi({
        title: 'labels',
        description:
          'Labels specific to this exemplar (e.g., pod name, node name). When an exemplar\n label overlaps with the series label, it is not included here.',
      }),
    traceId: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['4bf92f3577b34da6a3ce929d0e0e4736'],
        title: 'trace_id',
        description:
          'Trace ID associated with the span, encoded as 32 lowercase hexadecimal characters.',
      }),
  })
  .openapi({
    title: 'Exemplar',
    description:
      'Exemplar represents metadata for an individual profile sample.\n Exemplars allow users to drill down from aggregated timeline views\n to specific profile instances.',
    required: [],
  })
  .openapi('TypesV1Exemplar')

const TypesV1PointSchema = z
  .strictObject({
    value: z.float64().exactOptional().openapi({ title: 'value' }),
    timestamp: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'timestamp',
        description: 'Milliseconds unix timestamp',
      }),
    annotations: z
      .array(TypesV1ProfileAnnotationSchema)
      .exactOptional()
      .openapi({ title: 'annotations' }),
    exemplars: z
      .array(TypesV1ExemplarSchema)
      .exactOptional()
      .openapi({
        title: 'exemplars',
        description:
          'Exemplars are samples of individual profiles that contributed to this aggregated point',
      }),
  })
  .openapi({ title: 'Point', required: [] })
  .openapi('TypesV1Point')

const TypesV1SeriesSchema = z
  .strictObject({
    labels: z.array(TypesV1LabelPairSchema).exactOptional().openapi({ title: 'labels' }),
    points: z.array(TypesV1PointSchema).exactOptional().openapi({ title: 'points' }),
  })
  .openapi({ title: 'Series', required: [] })
  .openapi('TypesV1Series')

const QueryV1TimeSeriesReportSchema = z
  .strictObject({
    query: QueryV1TimeSeriesQuerySchema.exactOptional().openapi({ title: 'query' }),
    timeSeries: z.array(TypesV1SeriesSchema).exactOptional().openapi({ title: 'time_series' }),
  })
  .openapi({ title: 'TimeSeriesReport', required: [] })
  .openapi('QueryV1TimeSeriesReport')

const QueryV1TreeSymbolsSchema = z
  .strictObject({
    mappings: z.array(GoogleV1MappingSchema).exactOptional().openapi({ title: 'mappings' }),
    locations: z.array(GoogleV1LocationSchema).exactOptional().openapi({ title: 'locations' }),
    functions: z.array(GoogleV1FunctionSchema).exactOptional().openapi({ title: 'functions' }),
    strings: z.array(z.string()).exactOptional().openapi({ title: 'strings' }),
    mappingHashes: z
      .array(
        z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ title: 'mapping_hashes' }),
    locationHashes: z
      .array(
        z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ title: 'location_hashes' }),
    functionHashes: z
      .array(
        z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ title: 'function_hashes' }),
    stringHashes: z
      .array(
        z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({ title: 'string_hashes' }),
  })
  .openapi({ title: 'TreeSymbols', required: [] })
  .openapi('QueryV1TreeSymbols')

const QueryV1TreeReportSchema = z
  .strictObject({
    query: QueryV1TreeQuerySchema.exactOptional().openapi({ title: 'query' }),
    tree: z.string().exactOptional().openapi({ title: 'tree' }),
    symbols: QueryV1TreeSymbolsSchema.nullable().exactOptional().openapi({ title: 'symbols' }),
  })
  .openapi({ title: 'TreeReport', required: [] })
  .openapi('QueryV1TreeReport')

const QueryV1PprofReportSchema = z
  .strictObject({
    query: QueryV1PprofQuerySchema.exactOptional().openapi({ title: 'query' }),
    pprof: z.string().exactOptional().openapi({ title: 'pprof' }),
  })
  .openapi({ title: 'PprofReport', required: [] })
  .openapi('QueryV1PprofReport')

const QueryV1PointSchema = z
  .strictObject({
    value: z.float64().exactOptional().openapi({ title: 'value' }),
    timestamp: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'timestamp',
        description: 'Milliseconds unix timestamp',
      }),
    annotationRefs: z
      .array(
        z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        title: 'annotation_refs',
        description: 'Annotations as references into AttributeTable',
      }),
    exemplars: z
      .array(QueryV1ExemplarSchema)
      .exactOptional()
      .openapi({
        title: 'exemplars',
        description:
          'Exemplars are samples of individual profiles that contributed to this aggregated point',
      }),
  })
  .openapi({ title: 'Point', required: [] })
  .openapi('QueryV1Point')

const QueryV1SeriesSchema = z
  .strictObject({
    attributeRefs: z
      .array(
        z
          .union([
            z
              .preprocess(
                (val) =>
                  typeof val === 'number' && Number.isSafeInteger(val)
                    ? BigInt(val)
                    : typeof val === 'string' && /^-?\d+$/.test(val)
                      ? BigInt(val)
                      : val,
                z.int64(),
              )
              .openapi({ type: 'integer', format: 'int64' }),
            z.string(),
          ])
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        title: 'attribute_refs',
        description:
          'References to label key-value pairs in the AttributeTable that identify this series.',
      }),
    points: z
      .array(QueryV1PointSchema)
      .exactOptional()
      .openapi({
        title: 'points',
        description:
          'Time series data points. Each point may contain exemplars with their own attribute_refs.',
      }),
  })
  .openapi({
    title: 'Series',
    description:
      'Series represents a time series with optimized label storage using attribute references.',
    required: [],
  })
  .openapi('QueryV1Series')

const QueryV1TimeSeriesCompactReportSchema = z
  .strictObject({
    query: QueryV1TimeSeriesQuerySchema.exactOptional().openapi({ title: 'query' }),
    timeSeries: z.array(QueryV1SeriesSchema).exactOptional().openapi({ title: 'time_series' }),
    attributeTable: QueryV1AttributeTableSchema.exactOptional().openapi({
      title: 'attribute_table',
    }),
  })
  .openapi({ title: 'TimeSeriesCompactReport', required: [] })
  .openapi('QueryV1TimeSeriesCompactReport')

const QueryV1ProfilePresenceEntrySchema = z
  .strictObject({
    profileId: z.string().exactOptional().openapi({ title: 'profile_id' }),
    labels: z
      .array(TypesV1LabelPairSchema)
      .exactOptional()
      .openapi({
        title: 'labels',
        description:
          "The profile's own labels (e.g. pod, instance), same convention as\n types.v1.Exemplar.labels.",
      }),
    timestamp: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'timestamp',
        description: "Milliseconds since epoch: the profile's own timestamp.",
      }),
  })
  .openapi({ title: 'ProfilePresenceEntry', required: [] })
  .openapi('QueryV1ProfilePresenceEntry')

const QueryV1ProfilePresenceReportSchema = z
  .strictObject({
    query: QueryV1ProfilePresenceQuerySchema.exactOptional().openapi({ title: 'query' }),
    profiles: z
      .array(QueryV1ProfilePresenceEntrySchema)
      .exactOptional()
      .openapi({
        title: 'profiles',
        description:
          'The subset of query.profile_id_selector found present, one entry per profile.',
      }),
  })
  .openapi({ title: 'ProfilePresenceReport', required: [] })
  .openapi('QueryV1ProfilePresenceReport')

const QueryV1TimeSeriesAnalysisReportSchema = z
  .strictObject({
    query: QueryV1TimeSeriesAnalysisQuerySchema.exactOptional().openapi({ title: 'query' }),
    timeSeries: z
      .array(TypesV1SeriesSchema)
      .exactOptional()
      .openapi({
        title: 'time_series',
        description:
          'Intermediate series retained so parent query-plan nodes can merge and\n analyze the complete series.',
      }),
    events: z.array(QuerierV1TimeSeriesAnomalySchema).exactOptional().openapi({ title: 'events' }),
  })
  .openapi({ title: 'TimeSeriesAnalysisReport', required: [] })
  .openapi('QueryV1TimeSeriesAnalysisReport')

const QueryV1ReportSchema = z
  .strictObject({
    reportType: QueryV1ReportTypeSchema.exactOptional().openapi({ title: 'report_type' }),
    labelNames: QueryV1LabelNamesReportSchema.exactOptional().openapi({
      title: 'label_names',
      description:
        'Exactly one of the following fields should be set,\n depending on the report type.',
    }),
    labelValues: QueryV1LabelValuesReportSchema.exactOptional().openapi({ title: 'label_values' }),
    seriesLabels: QueryV1SeriesLabelsReportSchema.exactOptional().openapi({
      title: 'series_labels',
    }),
    timeSeries: QueryV1TimeSeriesReportSchema.exactOptional().openapi({ title: 'time_series' }),
    tree: QueryV1TreeReportSchema.exactOptional().openapi({ title: 'tree' }),
    pprof: QueryV1PprofReportSchema.exactOptional().openapi({ title: 'pprof' }),
    heatmap: QueryV1HeatmapReportSchema.exactOptional().openapi({ title: 'heatmap' }),
    timeSeriesCompact: QueryV1TimeSeriesCompactReportSchema.exactOptional().openapi({
      title: 'time_series_compact',
    }),
    profilePresence: QueryV1ProfilePresenceReportSchema.exactOptional().openapi({
      title: 'profile_presence',
    }),
    timeSeriesAnalysis: QueryV1TimeSeriesAnalysisReportSchema.exactOptional().openapi({
      title: 'time_series_analysis',
    }),
  })
  .openapi({ title: 'Report', required: [] })
  .openapi('QueryV1Report')

const QueryV1InvokeResponseSchema = z
  .strictObject({
    reports: z.array(QueryV1ReportSchema).exactOptional().openapi({ title: 'reports' }),
    diagnostics: QueryV1DiagnosticsSchema.exactOptional().openapi({ title: 'diagnostics' }),
  })
  .openapi({ title: 'InvokeResponse', required: [] })
  .openapi('QueryV1InvokeResponse')

const QueryV1QueryRequestSchema = z
  .strictObject({
    startTime: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'start_time' }),
    endTime: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', title: 'end_time' }),
    labelSelector: z.string().exactOptional().openapi({ title: 'label_selector' }),
    query: z.array(QueryV1QuerySchema).exactOptional().openapi({ title: 'query' }),
  })
  .openapi({ title: 'QueryRequest', required: [] })
  .openapi('QueryV1QueryRequest')

const QueryV1QueryResponseSchema = z
  .strictObject({
    reports: z.array(QueryV1ReportSchema).exactOptional().openapi({ title: 'reports' }),
  })
  .openapi({ title: 'QueryResponse', required: [] })
  .openapi('QueryV1QueryResponse')

export const postQueryV1QueryBackendServiceInvokeRoute = createRoute({
  method: 'post',
  path: '/query.v1.QueryBackendService/Invoke',
  tags: ['query.v1.QueryBackendService'],
  summary: 'Invoke',
  operationId: 'query.v1.QueryBackendService.Invoke',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: QueryV1InvokeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QueryV1InvokeResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postQueryV1QueryFrontendServiceQueryRoute = createRoute({
  method: 'post',
  path: '/query.v1.QueryFrontendService/Query',
  tags: ['query.v1.QueryFrontendService'],
  summary: 'Query',
  operationId: 'query.v1.QueryFrontendService.Query',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: QueryV1QueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QueryV1QueryResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

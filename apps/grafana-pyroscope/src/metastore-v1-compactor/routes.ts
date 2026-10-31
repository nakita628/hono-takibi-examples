import { createRoute, z } from '@hono/zod-openapi'

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

const MetastoreV1BlockDeletionSummarySchema = z
  .strictObject({
    blockId: z.string().exactOptional().openapi({ title: 'block_id' }),
    tenant: z.string().exactOptional().openapi({ title: 'tenant' }),
    shard: z.int().exactOptional().openapi({ title: 'shard' }),
    compactionLevel: z.int().exactOptional().openapi({ title: 'compaction_level' }),
    blockMinTime: z
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
        title: 'block_min_time',
        description: 'Full block bounds in Unix nanoseconds.',
      }),
    blockMaxTime: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'block_max_time' }),
    matchedMinTime: z
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
        title: 'matched_min_time',
        description: 'Matched dataset bounds in Unix nanoseconds, potentially outside the request.',
      }),
    matchedMaxTime: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'matched_max_time' }),
    fullBlockPlanned: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'full_block_planned',
        description: 'True when all service datasets match and the whole block will be removed.',
      }),
    matchedDatasetsCount: z.int().exactOptional().openapi({ title: 'matched_datasets_count' }),
    remainingDatasetsCount: z.int().exactOptional().openapi({ title: 'remaining_datasets_count' }),
    matchedServices: z.array(z.string()).exactOptional().openapi({ title: 'matched_services' }),
    matchedBytes: z
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
        title: 'matched_bytes',
        description: 'Sum of matched dataset sizes, not reclaimed object-storage bytes.',
      }),
  })
  .openapi({ title: 'BlockDeletionSummary', required: [] })
  .openapi('MetastoreV1BlockDeletionSummary')

const MetastoreV1BlockListSchema = z
  .strictObject({
    tenant: z.string().exactOptional().openapi({ title: 'tenant' }),
    shard: z.int().exactOptional().openapi({ title: 'shard' }),
    blocks: z.array(z.string()).exactOptional().openapi({ title: 'blocks' }),
  })
  .openapi({ title: 'BlockList', required: [] })
  .openapi('MetastoreV1BlockList')

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

const MetastoreV1BlockTombstonesSchema = z
  .strictObject({
    name: z.string().exactOptional().openapi({ title: 'name' }),
    shard: z.int().exactOptional().openapi({ title: 'shard' }),
    tenant: z.string().exactOptional().openapi({ title: 'tenant' }),
    compactionLevel: z.int().exactOptional().openapi({ title: 'compaction_level' }),
    blocks: z.array(z.string()).exactOptional().openapi({ title: 'blocks' }),
  })
  .openapi({ title: 'BlockTombstones', required: [] })
  .openapi('MetastoreV1BlockTombstones')

const MetastoreV1CompactedBlocksSchema = z
  .strictObject({
    sourceBlocks: MetastoreV1BlockListSchema.exactOptional().openapi({ title: 'source_blocks' }),
    newBlocks: z.array(MetastoreV1BlockMetaSchema).exactOptional().openapi({ title: 'new_blocks' }),
  })
  .openapi({ title: 'CompactedBlocks', required: [] })
  .openapi('MetastoreV1CompactedBlocks')

const MetastoreV1ShardTombstoneSchema = z
  .strictObject({
    name: z.string().exactOptional().openapi({ title: 'name' }),
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
        description: 'Lower time boundary. Unix epoch in nanoseconds.',
      }),
    duration: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'duration' }),
    shard: z.int().exactOptional().openapi({ title: 'shard' }),
    tenant: z.string().exactOptional().openapi({ title: 'tenant' }),
  })
  .openapi({ title: 'ShardTombstone', required: [] })
  .openapi('MetastoreV1ShardTombstone')

const MetastoreV1TombstonesSchema = z
  .strictObject({
    blocks: MetastoreV1BlockTombstonesSchema.exactOptional().openapi({ title: 'blocks' }),
    shard: MetastoreV1ShardTombstoneSchema.exactOptional().openapi({ title: 'shard' }),
  })
  .openapi({
    title: 'Tombstones',
    description: 'Tombstones represent objects removed from the index but still stored.',
    required: [],
  })
  .openapi('MetastoreV1Tombstones')

const MetastoreV1DeleteFilterSchema = z
  .strictObject({
    serviceNameRegex: z.string().exactOptional().openapi({ title: 'service_name_regex' }),
  })
  .openapi({
    title: 'DeleteFilter',
    description:
      'Go/RE2 regular expression, matched against the entire dataset service_name.\n An empty regex matches only an empty service name, not all services.\n Use ".*" to match all services. Datasets without a service name are skipped.',
    required: [],
  })
  .openapi('MetastoreV1DeleteFilter')

const MetastoreV1CompactionJobSchema = z
  .strictObject({
    name: z.string().exactOptional().openapi({ title: 'name' }),
    shard: z.int().exactOptional().openapi({ title: 'shard' }),
    tenant: z.string().exactOptional().openapi({ title: 'tenant' }),
    compactionLevel: z.int().exactOptional().openapi({ title: 'compaction_level' }),
    sourceBlocks: z.array(z.string()).exactOptional().openapi({ title: 'source_blocks' }),
    tombstones: z
      .array(MetastoreV1TombstonesSchema)
      .exactOptional()
      .openapi({ title: 'tombstones' }),
    deleteFilter: MetastoreV1DeleteFilterSchema.exactOptional().openapi({ title: 'delete_filter' }),
  })
  .openapi({ title: 'CompactionJob', required: [] })
  .openapi('MetastoreV1CompactionJob')

const MetastoreV1CompactionJobAssignmentSchema = z
  .strictObject({
    name: z.string().exactOptional().openapi({ title: 'name' }),
    token: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'token' }),
    leaseExpiresAt: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'lease_expires_at' }),
  })
  .openapi({ title: 'CompactionJobAssignment', required: [] })
  .openapi('MetastoreV1CompactionJobAssignment')

const MetastoreV1CompactionJobStatusSchema = z
  .enum([
    'COMPACTION_STATUS_UNSPECIFIED',
    'COMPACTION_STATUS_IN_PROGRESS',
    'COMPACTION_STATUS_SUCCESS',
  ])
  .openapi({ title: 'CompactionJobStatus' })
  .openapi('MetastoreV1CompactionJobStatus')

const MetastoreV1CompactionJobInfoSchema = z
  .strictObject({
    job: MetastoreV1CompactionJobSchema.exactOptional().openapi({ title: 'job' }),
    status: MetastoreV1CompactionJobStatusSchema.exactOptional().openapi({ title: 'status' }),
    addedAt: z
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
        title: 'added_at',
        description: 'Unix nanoseconds.',
      }),
    leaseExpiresAt: z
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
        title: 'lease_expires_at',
        description: 'Unix nanoseconds; zero when not leased.',
      }),
    failures: z.int().exactOptional().openapi({ title: 'failures' }),
  })
  .openapi({ title: 'CompactionJobInfo', required: [] })
  .openapi('MetastoreV1CompactionJobInfo')

const MetastoreV1CompactionJobStatusUpdateSchema = z
  .strictObject({
    name: z.string().exactOptional().openapi({ title: 'name' }),
    token: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'token' }),
    status: MetastoreV1CompactionJobStatusSchema.exactOptional().openapi({ title: 'status' }),
    compactedBlocks: MetastoreV1CompactedBlocksSchema.exactOptional().openapi({
      title: 'compacted_blocks',
      description: 'Only present if the job completed successfully.',
    }),
  })
  .openapi({ title: 'CompactionJobStatusUpdate', required: [] })
  .openapi('MetastoreV1CompactionJobStatusUpdate')

const MetastoreV1DeleteDatasetsRequestSchema = z
  .strictObject({
    tenant: z
      .string()
      .exactOptional()
      .openapi({
        title: 'tenant',
        description: 'Required, non-blank tenant. Cross-tenant deletion is not supported.',
      }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'min_time',
        description:
          'Inclusive Unix nanosecond time window. Entire matching datasets in\n overlapping blocks are removed, including data outside this window.\n min_time must not exceed max_time; zero is the Unix epoch.',
      }),
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
    filter: MetastoreV1DeleteFilterSchema.exactOptional().openapi({
      title: 'filter',
      description: 'Required selection filter.',
    }),
    dryRun: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'dry_run',
        description: 'Report planned work without scheduling jobs or changing state.',
      }),
    minCompactionLevel: z
      .int()
      .exactOptional()
      .openapi({
        title: 'min_compaction_level',
        description:
          'Minimum compaction level of blocks to consider (0 by default).\n Note that L0 multi-tenant segments are never eligible.',
      }),
  })
  .openapi({ title: 'DeleteDatasetsRequest', required: [] })
  .openapi('MetastoreV1DeleteDatasetsRequest')

const MetastoreV1DeleteDatasetsResponseSchema = z
  .strictObject({
    dryRun: z.boolean().exactOptional().openapi({ title: 'dry_run' }),
    matchedBlocksCount: z.int().exactOptional().openapi({ title: 'matched_blocks_count' }),
    plannedFullBlockDeletionsCount: z
      .int()
      .exactOptional()
      .openapi({ title: 'planned_full_block_deletions_count' }),
    plannedBlockRewritesCount: z
      .int()
      .exactOptional()
      .openapi({ title: 'planned_block_rewrites_count' }),
    matchedDatasetsCount: z.int().exactOptional().openapi({ title: 'matched_datasets_count' }),
    matchedBytes: z
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
        title: 'matched_bytes',
        description: 'Sum of matched dataset sizes, not reclaimed object-storage bytes.',
      }),
    effectiveMatchedMinTime: z
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
        title: 'effective_matched_min_time',
        description: 'Overall matched dataset bounds in Unix nanoseconds; both zero if no matches.',
      }),
    effectiveMatchedMaxTime: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'effective_matched_max_time' }),
    blocks: z
      .array(MetastoreV1BlockDeletionSummarySchema)
      .exactOptional()
      .openapi({ title: 'blocks' }),
    scheduledJobNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'scheduled_job_names',
        description: 'Non-dry-run jobs are asynchronous; this is not a completion acknowledgement.',
      }),
  })
  .openapi({
    title: 'DeleteDatasetsResponse',
    description:
      'Impact plan, not a completion acknowledgement. Counts describe selected work\n for both dry runs and scheduled deletions. Only single-tenant compacted blocks\n are eligible; L0/multi-tenant blocks and already tombstoned blocks are skipped.',
    required: [],
  })
  .openapi('MetastoreV1DeleteDatasetsResponse')

const MetastoreV1ListCompactionJobsRequestSchema = z
  .strictObject({
    tenant: z
      .string()
      .exactOptional()
      .openapi({ title: 'tenant', description: 'Empty selects all tenants.' }),
  })
  .openapi({ title: 'ListCompactionJobsRequest', required: [] })
  .openapi('MetastoreV1ListCompactionJobsRequest')

const MetastoreV1ListCompactionJobsResponseSchema = z
  .strictObject({
    jobs: z.array(MetastoreV1CompactionJobInfoSchema).exactOptional().openapi({ title: 'jobs' }),
  })
  .openapi({ title: 'ListCompactionJobsResponse', required: [] })
  .openapi('MetastoreV1ListCompactionJobsResponse')

const MetastoreV1PollCompactionJobsRequestSchema = z
  .strictObject({
    statusUpdates: z
      .array(MetastoreV1CompactionJobStatusUpdateSchema)
      .exactOptional()
      .openapi({ title: 'status_updates' }),
    jobCapacity: z
      .int()
      .exactOptional()
      .openapi({
        title: 'job_capacity',
        description: 'How many new jobs a worker can be assigned to.',
      }),
  })
  .openapi({ title: 'PollCompactionJobsRequest', required: [] })
  .openapi('MetastoreV1PollCompactionJobsRequest')

const MetastoreV1PollCompactionJobsResponseSchema = z
  .strictObject({
    compactionJobs: z
      .array(MetastoreV1CompactionJobSchema)
      .exactOptional()
      .openapi({ title: 'compaction_jobs' }),
    assignments: z
      .array(MetastoreV1CompactionJobAssignmentSchema)
      .exactOptional()
      .openapi({ title: 'assignments' }),
  })
  .openapi({ title: 'PollCompactionJobsResponse', required: [] })
  .openapi('MetastoreV1PollCompactionJobsResponse')

export const postMetastoreV1CompactionServiceDeleteDatasetsRoute = createRoute({
  method: 'post',
  path: '/metastore.v1.CompactionService/DeleteDatasets',
  tags: ['metastore.v1.CompactionService'],
  summary: 'Plans whole-dataset deletion; dry runs are read-only, non-dry runs require the leader.',
  description:
    'Plans whole-dataset deletion; dry runs are read-only, non-dry runs require the leader.',
  operationId: 'metastore.v1.CompactionService.DeleteDatasets',
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
      content: { 'application/json': { schema: MetastoreV1DeleteDatasetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MetastoreV1DeleteDatasetsResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postMetastoreV1CompactionServiceListCompactionJobsRoute = createRoute({
  method: 'post',
  path: '/metastore.v1.CompactionService/ListCompactionJobs',
  tags: ['metastore.v1.CompactionService'],
  summary: 'Read-only snapshot of queued and assigned jobs.',
  description: 'Read-only snapshot of queued and assigned jobs.',
  operationId: 'metastore.v1.CompactionService.ListCompactionJobs',
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
      content: { 'application/json': { schema: MetastoreV1ListCompactionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MetastoreV1ListCompactionJobsResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postMetastoreV1CompactionServicePollCompactionJobsRoute = createRoute({
  method: 'post',
  path: '/metastore.v1.CompactionService/PollCompactionJobs',
  tags: ['metastore.v1.CompactionService'],
  summary: 'Used to both retrieve jobs and update the jobs status at the same time.',
  description: 'Used to both retrieve jobs and update the jobs status at the same time.',
  operationId: 'metastore.v1.CompactionService.PollCompactionJobs',
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
      content: { 'application/json': { schema: MetastoreV1PollCompactionJobsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MetastoreV1PollCompactionJobsResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

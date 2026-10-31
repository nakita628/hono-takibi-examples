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

const MetastoreV1AddBlockRequestSchema = z
  .strictObject({ block: MetastoreV1BlockMetaSchema.exactOptional().openapi({ title: 'block' }) })
  .openapi({ title: 'AddBlockRequest', required: [] })
  .openapi('MetastoreV1AddBlockRequest')

const MetastoreV1AddBlockResponseSchema = z
  .strictObject({})
  .openapi({ title: 'AddBlockResponse' })
  .openapi('MetastoreV1AddBlockResponse')

const MetastoreV1BlockListSchema = z
  .strictObject({
    tenant: z.string().exactOptional().openapi({ title: 'tenant' }),
    shard: z.int().exactOptional().openapi({ title: 'shard' }),
    blocks: z.array(z.string()).exactOptional().openapi({ title: 'blocks' }),
  })
  .openapi({ title: 'BlockList', required: [] })
  .openapi('MetastoreV1BlockList')

const MetastoreV1GetBlockMetadataRequestSchema = z
  .strictObject({ blocks: MetastoreV1BlockListSchema.exactOptional().openapi({ title: 'blocks' }) })
  .openapi({ title: 'GetBlockMetadataRequest', required: [] })
  .openapi('MetastoreV1GetBlockMetadataRequest')

const MetastoreV1GetBlockMetadataResponseSchema = z
  .strictObject({
    blocks: z.array(MetastoreV1BlockMetaSchema).exactOptional().openapi({ title: 'blocks' }),
  })
  .openapi({ title: 'GetBlockMetadataResponse', required: [] })
  .openapi('MetastoreV1GetBlockMetadataResponse')

export const postMetastoreV1IndexServiceAddBlockRoute = createRoute({
  method: 'post',
  path: '/metastore.v1.IndexService/AddBlock',
  tags: ['metastore.v1.IndexService'],
  summary: 'AddBlock',
  operationId: 'metastore.v1.IndexService.AddBlock',
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
      content: { 'application/json': { schema: MetastoreV1AddBlockRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MetastoreV1AddBlockResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postMetastoreV1IndexServiceGetBlockMetadataRoute = createRoute({
  method: 'post',
  path: '/metastore.v1.IndexService/GetBlockMetadata',
  tags: ['metastore.v1.IndexService'],
  summary: 'GetBlockMetadata',
  operationId: 'metastore.v1.IndexService.GetBlockMetadata',
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
      content: { 'application/json': { schema: MetastoreV1GetBlockMetadataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: MetastoreV1GetBlockMetadataResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

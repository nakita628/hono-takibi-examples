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

const IngesterV1BlockHintsSchema = z
  .strictObject({
    ulids: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'ulids', description: 'The ULID of blocks to query' }),
    deduplication: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'deduplication',
        description:
          'When all blocks are compacted, there is no effect of the replication factor, hence we do not need to run deduplication.',
      }),
  })
  .openapi({ title: 'BlockHints', required: [] })
  .openapi('IngesterV1BlockHints')

const IngesterV1BlockMetadataRequestSchema = z
  .strictObject({
    start: z
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
        title: 'start',
        description:
          'Milliseconds since epoch. If missing or zero, only the ingesters will be\n queried.',
      }),
    end: z
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
        title: 'end',
        description:
          'Milliseconds since epoch. If missing or zero, only the ingesters will be\n queried.',
      }),
  })
  .openapi({ title: 'BlockMetadataRequest', required: [] })
  .openapi('IngesterV1BlockMetadataRequest')

const TypesV1BlockCompactionSchema = z
  .strictObject({
    level: z.int32().exactOptional().openapi({ title: 'level' }),
    sources: z.array(z.string()).exactOptional().openapi({ title: 'sources' }),
    parents: z.array(z.string()).exactOptional().openapi({ title: 'parents' }),
  })
  .openapi({ title: 'BlockCompaction', required: [] })
  .openapi('TypesV1BlockCompaction')

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

const TypesV1BlockInfoSchema = z
  .strictObject({
    ulid: z.string().exactOptional().openapi({ title: 'ulid' }),
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
    compaction: TypesV1BlockCompactionSchema.exactOptional().openapi({ title: 'compaction' }),
    labels: z.array(TypesV1LabelPairSchema).exactOptional().openapi({ title: 'labels' }),
  })
  .openapi({ title: 'BlockInfo', required: [] })
  .openapi('TypesV1BlockInfo')

const IngesterV1BlockMetadataResponseSchema = z
  .strictObject({
    blocks: z
      .array(TypesV1BlockInfoSchema)
      .exactOptional()
      .openapi({
        title: 'blocks',
        description: 'Blocks that are present on the instance for the start to end period',
      }),
  })
  .openapi({ title: 'BlockMetadataResponse', required: [] })
  .openapi('IngesterV1BlockMetadataResponse')

const IngesterV1BlockStatsSchema = z
  .strictObject({
    seriesCount: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'series_count' }),
    profileCount: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'profile_count' }),
    sampleCount: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'sample_count' }),
    indexBytes: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'index_bytes' }),
    profileBytes: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'profile_bytes' }),
    symbolBytes: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'symbol_bytes' }),
  })
  .openapi({ title: 'BlockStats', required: [] })
  .openapi('IngesterV1BlockStats')

const IngesterV1FlushRequestSchema = z
  .strictObject({})
  .openapi({ title: 'FlushRequest' })
  .openapi('IngesterV1FlushRequest')

const IngesterV1FlushResponseSchema = z
  .strictObject({})
  .openapi({ title: 'FlushResponse' })
  .openapi('IngesterV1FlushResponse')

const IngesterV1GetBlockStatsRequestSchema = z
  .strictObject({ ulids: z.array(z.string()).exactOptional().openapi({ title: 'ulids' }) })
  .openapi({ title: 'GetBlockStatsRequest', required: [] })
  .openapi('IngesterV1GetBlockStatsRequest')

const IngesterV1GetBlockStatsResponseSchema = z
  .strictObject({
    blockStats: z
      .array(IngesterV1BlockStatsSchema)
      .exactOptional()
      .openapi({ title: 'block_stats' }),
  })
  .openapi({ title: 'GetBlockStatsResponse', required: [] })
  .openapi('IngesterV1GetBlockStatsResponse')

const IngesterV1HintsSchema = z
  .strictObject({ block: IngesterV1BlockHintsSchema.exactOptional().openapi({ title: 'block' }) })
  .openapi({
    title: 'Hints',
    description: 'Hints are used to propagate information about querying',
    required: [],
  })
  .openapi('IngesterV1Hints')

const TypesV1ProfileTypeSchema = z
  .strictObject({
    ID: z.string().exactOptional().openapi({ title: 'ID' }),
    name: z.string().exactOptional().openapi({ title: 'name' }),
    sampleType: z.string().exactOptional().openapi({ title: 'sample_type' }),
    sampleUnit: z.string().exactOptional().openapi({ title: 'sample_unit' }),
    periodType: z.string().exactOptional().openapi({ title: 'period_type' }),
    periodUnit: z.string().exactOptional().openapi({ title: 'period_unit' }),
  })
  .openapi({ title: 'ProfileType', required: [] })
  .openapi('TypesV1ProfileType')

const TypesV1TimeSeriesAggregationTypeSchema = z
  .enum(['TIME_SERIES_AGGREGATION_TYPE_SUM', 'TIME_SERIES_AGGREGATION_TYPE_AVERAGE'])
  .openapi({ title: 'TimeSeriesAggregationType' })
  .openapi('TypesV1TimeSeriesAggregationType')

const IngesterV1SelectProfilesRequestSchema = z
  .strictObject({
    labelSelector: z.string().exactOptional().openapi({ title: 'label_selector' }),
    type: TypesV1ProfileTypeSchema.exactOptional().openapi({ title: 'type' }),
    start: z
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
        title: 'start',
        description: 'Milliseconds since epoch.',
      }),
    end: z
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
        title: 'end',
        description: 'Milliseconds since epoch.',
      }),
    hints: IngesterV1HintsSchema.nullable()
      .exactOptional()
      .openapi({ title: 'hints', description: 'Optional: Hints for querying' }),
    aggregation: TypesV1TimeSeriesAggregationTypeSchema.nullable()
      .exactOptional()
      .openapi({ title: 'aggregation', description: 'Optional: Aggregation' }),
  })
  .openapi({ title: 'SelectProfilesRequest', required: [] })
  .openapi('IngesterV1SelectProfilesRequest')

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

const IngesterV1MergeProfilesLabelsRequestSchema = z
  .strictObject({
    request: IngesterV1SelectProfilesRequestSchema.exactOptional().openapi({
      title: 'request',
      description:
        'The client starts the stream with a request containing the profile type and the labels.',
    }),
    by: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'by', description: 'The labels to merge by' }),
    stackTraceSelector: TypesV1StackTraceSelectorSchema.nullable()
      .exactOptional()
      .openapi({
        title: 'stack_trace_selector',
        description: 'Select stack traces that match the provided selector.',
      }),
    profiles: z
      .array(z.boolean())
      .exactOptional()
      .openapi({
        title: 'profiles',
        description: 'On a batch of profiles, the client sends the profiles to keep for merging.',
      }),
  })
  .openapi({ title: 'MergeProfilesLabelsRequest', required: [] })
  .openapi('IngesterV1MergeProfilesLabelsRequest')

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

const IngesterV1SeriesProfileSchema = z
  .strictObject({
    labelIndex: z
      .int32()
      .exactOptional()
      .openapi({ title: 'labelIndex', description: 'The labels index of the series' }),
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
        description: 'timestamp in milliseconds',
      }),
  })
  .openapi({ title: 'SeriesProfile', required: [] })
  .openapi('IngesterV1SeriesProfile')

const IngesterV1ProfileSetsSchema = z
  .strictObject({
    labelsSets: z
      .array(TypesV1LabelsSchema)
      .exactOptional()
      .openapi({ title: 'labelsSets', description: 'DEPRECATED: Use fingerprints instead.' }),
    profiles: z.array(IngesterV1SeriesProfileSchema).exactOptional().openapi({ title: 'profiles' }),
    fingerprints: z
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
      .openapi({ title: 'fingerprints' }),
  })
  .openapi({ title: 'ProfileSets', required: [] })
  .openapi('IngesterV1ProfileSets')

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

const IngesterV1MergeProfilesLabelsResponseSchema = z
  .strictObject({
    selectedProfiles: IngesterV1ProfileSetsSchema.exactOptional().openapi({
      title: 'selectedProfiles',
      description:
        'The server replies batch of profiles.\n A last message without profiles signals the next message will be the result of the merge.',
    }),
    series: z
      .array(TypesV1SeriesSchema)
      .exactOptional()
      .openapi({
        title: 'series',
        description: 'The list of series for the profile with their respective value',
      }),
  })
  .openapi({ title: 'MergeProfilesLabelsResponse', required: [] })
  .openapi('IngesterV1MergeProfilesLabelsResponse')

const IngesterV1MergeProfilesPprofRequestSchema = z
  .strictObject({
    request: IngesterV1SelectProfilesRequestSchema.exactOptional().openapi({
      title: 'request',
      description:
        'The client starts the stream with a request containing the profile type and the labels.',
    }),
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
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        title: 'max_nodes',
        description: 'Max nodes in the resulting profile.',
      }),
    stackTraceSelector: TypesV1StackTraceSelectorSchema.nullable()
      .exactOptional()
      .openapi({
        title: 'stack_trace_selector',
        description: 'Select stack traces that match the provided selector.',
      }),
    profiles: z
      .array(z.boolean())
      .exactOptional()
      .openapi({
        title: 'profiles',
        description: 'On a batch of profiles, the client sends the profiles to keep for merging.',
      }),
  })
  .openapi({ title: 'MergeProfilesPprofRequest', required: [] })
  .openapi('IngesterV1MergeProfilesPprofRequest')

const IngesterV1MergeProfilesPprofResponseSchema = z
  .strictObject({
    selectedProfiles: IngesterV1ProfileSetsSchema.exactOptional().openapi({
      title: 'selectedProfiles',
      description:
        'The server replies batch of profiles.\n A last message without profiles signals the next message will be the result of the merge.',
    }),
    result: z
      .string()
      .exactOptional()
      .openapi({ title: 'result', description: 'The merge result in the pprof format.' }),
  })
  .openapi({ title: 'MergeProfilesPprofResponse', required: [] })
  .openapi('IngesterV1MergeProfilesPprofResponse')

const IngesterV1MergeProfilesStacktracesRequestSchema = z
  .strictObject({
    request: IngesterV1SelectProfilesRequestSchema.exactOptional().openapi({
      title: 'request',
      description:
        'The client starts the stream with a request containing the profile type and the labels.',
    }),
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
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        title: 'max_nodes',
        description: 'Max nodes in the resulting tree.',
      }),
    profiles: z
      .array(z.boolean())
      .exactOptional()
      .openapi({
        title: 'profiles',
        description: 'On a batch of profiles, the client sends the profiles to keep for merging.',
      }),
  })
  .openapi({ title: 'MergeProfilesStacktracesRequest', required: [] })
  .openapi('IngesterV1MergeProfilesStacktracesRequest')

const IngesterV1StacktracesMergeFormatSchema = z
  .enum(['MERGE_FORMAT_UNSPECIFIED', 'MERGE_FORMAT_STACKTRACES', 'MERGE_FORMAT_TREE'])
  .openapi({ title: 'StacktracesMergeFormat' })
  .openapi('IngesterV1StacktracesMergeFormat')

const IngesterV1StacktraceSampleSchema = z
  .strictObject({
    functionIds: z.array(z.int32()).exactOptional().openapi({ title: 'function_ids' }),
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
  })
  .openapi({ title: 'StacktraceSample', required: [] })
  .openapi('IngesterV1StacktraceSample')

const IngesterV1MergeProfilesStacktracesResultSchema = z
  .strictObject({
    format: IngesterV1StacktracesMergeFormatSchema.exactOptional().openapi({ title: 'format' }),
    stacktraces: z
      .array(IngesterV1StacktraceSampleSchema)
      .exactOptional()
      .openapi({
        title: 'stacktraces',
        description: 'The list of stracktraces with their respective value',
      }),
    functionNames: z.array(z.string()).exactOptional().openapi({ title: 'function_names' }),
    treeBytes: z
      .string()
      .exactOptional()
      .openapi({
        title: 'tree_bytes',
        description: 'Merge result marshaled to pyroscope tree bytes.',
      }),
  })
  .openapi({ title: 'MergeProfilesStacktracesResult', required: [] })
  .openapi('IngesterV1MergeProfilesStacktracesResult')

const IngesterV1MergeProfilesStacktracesResponseSchema = z
  .strictObject({
    selectedProfiles: IngesterV1ProfileSetsSchema.exactOptional().openapi({
      title: 'selectedProfiles',
      description:
        'The server replies batch of profiles.\n A last message without profiles signals the next message will be the result of the merge.',
    }),
    result: IngesterV1MergeProfilesStacktracesResultSchema.exactOptional().openapi({
      title: 'result',
      description: 'The list of stracktraces for the profile with their respective value',
    }),
  })
  .openapi({ title: 'MergeProfilesStacktracesResponse', required: [] })
  .openapi('IngesterV1MergeProfilesStacktracesResponse')

const IngesterV1SelectSpanProfileRequestSchema = z
  .strictObject({
    labelSelector: z.string().exactOptional().openapi({ title: 'label_selector' }),
    type: TypesV1ProfileTypeSchema.exactOptional().openapi({ title: 'type' }),
    start: z
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
        title: 'start',
        description: 'Milliseconds since epoch.',
      }),
    end: z
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
        title: 'end',
        description: 'Milliseconds since epoch.',
      }),
    spanSelector: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'span_selector', description: 'List of span identifiers.' }),
    hints: IngesterV1HintsSchema.nullable()
      .exactOptional()
      .openapi({ title: 'hints', description: 'Optional: Hints for querying' }),
  })
  .openapi({ title: 'SelectSpanProfileRequest', required: [] })
  .openapi('IngesterV1SelectSpanProfileRequest')

const IngesterV1MergeSpanProfileRequestSchema = z
  .strictObject({
    request: IngesterV1SelectSpanProfileRequestSchema.exactOptional().openapi({
      title: 'request',
      description:
        'The client starts the stream with a request containing the profile type and the labels.',
    }),
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
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        title: 'max_nodes',
        description: 'Max nodes in the resulting tree.',
      }),
    profiles: z
      .array(z.boolean())
      .exactOptional()
      .openapi({
        title: 'profiles',
        description: 'On a batch of profiles, the client sends the profiles to keep for merging.',
      }),
  })
  .openapi({ title: 'MergeSpanProfileRequest', required: [] })
  .openapi('IngesterV1MergeSpanProfileRequest')

const IngesterV1MergeSpanProfileResultSchema = z
  .strictObject({ treeBytes: z.string().exactOptional().openapi({ title: 'tree_bytes' }) })
  .openapi({ title: 'MergeSpanProfileResult', required: [] })
  .openapi('IngesterV1MergeSpanProfileResult')

const IngesterV1MergeSpanProfileResponseSchema = z
  .strictObject({
    selectedProfiles: IngesterV1ProfileSetsSchema.exactOptional().openapi({
      title: 'selectedProfiles',
      description:
        'The server replies batch of profiles.\n A last message without profiles signals the next message will be the result of the merge.',
    }),
    result: IngesterV1MergeSpanProfileResultSchema.exactOptional().openapi({
      title: 'result',
      description: 'The list of stracktraces for the profile with their respective value',
    }),
  })
  .openapi({ title: 'MergeSpanProfileResponse', required: [] })
  .openapi('IngesterV1MergeSpanProfileResponse')

const IngesterV1ProfileTypesRequestSchema = z
  .strictObject({
    start: z
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
        title: 'start',
        description: 'Milliseconds since epoch.',
      }),
    end: z
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
        title: 'end',
        description: 'Milliseconds since epoch.',
      }),
  })
  .openapi({ title: 'ProfileTypesRequest', required: [] })
  .openapi('IngesterV1ProfileTypesRequest')

const IngesterV1ProfileTypesResponseSchema = z
  .strictObject({
    profileTypes: z
      .array(TypesV1ProfileTypeSchema)
      .exactOptional()
      .openapi({ title: 'profile_types' }),
  })
  .openapi({ title: 'ProfileTypesResponse', required: [] })
  .openapi('IngesterV1ProfileTypesResponse')

const IngesterV1SeriesRequestSchema = z
  .strictObject({
    matchers: z.array(z.string()).exactOptional().openapi({ title: 'matchers' }),
    labelNames: z.array(z.string()).exactOptional().openapi({ title: 'label_names' }),
    start: z
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
        title: 'start',
        description:
          'Milliseconds since epoch. If missing or zero, only the ingesters will be\n queried.',
      }),
    end: z
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
        title: 'end',
        description:
          'Milliseconds since epoch. If missing or zero, only the ingesters will be\n queried.',
      }),
  })
  .openapi({ title: 'SeriesRequest', required: [] })
  .openapi('IngesterV1SeriesRequest')

const IngesterV1SeriesResponseSchema = z
  .strictObject({
    labelsSet: z.array(TypesV1LabelsSchema).exactOptional().openapi({ title: 'labels_set' }),
  })
  .openapi({ title: 'SeriesResponse', required: [] })
  .openapi('IngesterV1SeriesResponse')

const PushV1RawSampleSchema = z
  .strictObject({
    rawProfile: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['PROFILE_BASE64'],
        title: 'raw_profile',
        description: 'raw_profile is the set of bytes of the pprof profile',
      }),
    ID: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['734FD599-6865-419E-9475-932762D8F469'],
        title: 'ID',
        description: 'UUID of the profile',
      }),
  })
  .openapi({
    title: 'RawSample',
    description: 'RawSample is the set of bytes that correspond to a pprof profile',
    required: [],
  })
  .openapi('PushV1RawSample')

const PushV1RawProfileSeriesSchema = z
  .strictObject({
    labels: z
      .array(TypesV1LabelPairSchema)
      .exactOptional()
      .openapi({
        title: 'labels',
        description: 'LabelPair is the key value pairs to identify the corresponding profile',
      }),
    samples: z
      .array(PushV1RawSampleSchema)
      .exactOptional()
      .openapi({ title: 'samples', description: 'samples are the set of profile bytes' }),
    annotations: z
      .array(TypesV1ProfileAnnotationSchema)
      .exactOptional()
      .openapi({
        title: 'annotations',
        description:
          "Annotations provide additional metadata for a profile.\n\n The main differences between labels and annotations are:\n  - annotations cannot be used in query selectors\n  - annotation keys don't have to be unique\n\n Currently annotations are applied internally by distributors,\n any annotation passed via the push API will be dropped.",
      }),
  })
  .openapi({
    title: 'RawProfileSeries',
    description: 'RawProfileSeries represents the pprof profile and its associated labels',
    required: [],
  })
  .openapi('PushV1RawProfileSeries')

const PushV1PushRequestSchema = z
  .strictObject({
    series: z
      .array(PushV1RawProfileSeriesSchema)
      .exactOptional()
      .openapi({
        title: 'series',
        description: 'series is a set raw pprof profiles and accompanying labels',
      }),
  })
  .openapi({
    title: 'PushRequest',
    description: 'WriteRawRequest writes a pprof profile',
    required: [],
  })
  .openapi('PushV1PushRequest')

const PushV1PushResponseSchema = z
  .strictObject({})
  .openapi({ title: 'PushResponse' })
  .openapi('PushV1PushResponse')

const TypesV1GetProfileStatsRequestSchema = z
  .strictObject({})
  .openapi({ title: 'GetProfileStatsRequest' })
  .openapi('TypesV1GetProfileStatsRequest')

const TypesV1GetProfileStatsResponseSchema = z
  .strictObject({
    dataIngested: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'data_ingested',
        description: 'Whether we received any data at any time in the past.',
      }),
    oldestProfileTime: z
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
        title: 'oldest_profile_time',
        description: 'Milliseconds since epoch.',
      }),
    newestProfileTime: z
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
        title: 'newest_profile_time',
        description: 'Milliseconds since epoch.',
      }),
  })
  .openapi({ title: 'GetProfileStatsResponse', required: [] })
  .openapi('TypesV1GetProfileStatsResponse')

const TypesV1LabelNamesRequestSchema = z
  .strictObject({
    matchers: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'matchers', description: 'List of Label selectors' }),
    start: z
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
        examples: ['1676282400000'],
        title: 'start',
        description: 'Query from this point in time, given in Milliseconds since epoch.',
      }),
    end: z
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
        examples: ['1676289600000'],
        title: 'end',
        description: 'Query to this point in time, given in Milliseconds since epoch.',
      }),
  })
  .openapi({ title: 'LabelNamesRequest', required: [] })
  .openapi('TypesV1LabelNamesRequest')

const TypesV1LabelNamesResponseSchema = z
  .strictObject({ names: z.array(z.string()).exactOptional().openapi({ title: 'names' }) })
  .openapi({ title: 'LabelNamesResponse', required: [] })
  .openapi('TypesV1LabelNamesResponse')

const TypesV1LabelValuesRequestSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({ examples: ['service_name'], title: 'name', description: 'Name of the label' }),
    matchers: z
      .array(z.string())
      .exactOptional()
      .openapi({ title: 'matchers', description: 'List of Label selectors' }),
    start: z
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
        examples: ['1676282400000'],
        title: 'start',
        description: 'Query from this point in time, given in Milliseconds since epoch.',
      }),
    end: z
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
        examples: ['1676289600000'],
        title: 'end',
        description: 'Query to this point in time, given in Milliseconds since epoch.',
      }),
  })
  .openapi({ title: 'LabelValuesRequest', required: [] })
  .openapi('TypesV1LabelValuesRequest')

const TypesV1LabelValuesResponseSchema = z
  .strictObject({ names: z.array(z.string()).exactOptional().openapi({ title: 'names' }) })
  .openapi({ title: 'LabelValuesResponse', required: [] })
  .openapi('TypesV1LabelValuesResponse')

export const postIngesterV1IngesterServiceBlockMetadataRoute = createRoute({
  method: 'post',
  path: '/ingester.v1.IngesterService/BlockMetadata',
  tags: ['ingester.v1.IngesterService'],
  summary: 'BlockMetadata',
  operationId: 'ingester.v1.IngesterService.BlockMetadata',
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
      content: { 'application/json': { schema: IngesterV1BlockMetadataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IngesterV1BlockMetadataResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postIngesterV1IngesterServiceFlushRoute = createRoute({
  method: 'post',
  path: '/ingester.v1.IngesterService/Flush',
  tags: ['ingester.v1.IngesterService'],
  summary: 'Flush',
  operationId: 'ingester.v1.IngesterService.Flush',
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
      content: { 'application/json': { schema: IngesterV1FlushRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IngesterV1FlushResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postIngesterV1IngesterServiceGetBlockStatsRoute = createRoute({
  method: 'post',
  path: '/ingester.v1.IngesterService/GetBlockStats',
  tags: ['ingester.v1.IngesterService'],
  summary: 'GetBlockStats',
  operationId: 'ingester.v1.IngesterService.GetBlockStats',
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
      content: { 'application/json': { schema: IngesterV1GetBlockStatsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IngesterV1GetBlockStatsResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postIngesterV1IngesterServiceGetProfileStatsRoute = createRoute({
  method: 'post',
  path: '/ingester.v1.IngesterService/GetProfileStats',
  tags: ['ingester.v1.IngesterService'],
  summary: 'GetProfileStats returns profile stats for the current tenant.',
  description: 'GetProfileStats returns profile stats for the current tenant.',
  operationId: 'ingester.v1.IngesterService.GetProfileStats',
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
      content: { 'application/json': { schema: TypesV1GetProfileStatsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TypesV1GetProfileStatsResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postIngesterV1IngesterServiceLabelNamesRoute = createRoute({
  method: 'post',
  path: '/ingester.v1.IngesterService/LabelNames',
  tags: ['ingester.v1.IngesterService'],
  summary: 'LabelNames',
  operationId: 'ingester.v1.IngesterService.LabelNames',
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
      content: { 'application/json': { schema: TypesV1LabelNamesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TypesV1LabelNamesResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postIngesterV1IngesterServiceLabelValuesRoute = createRoute({
  method: 'post',
  path: '/ingester.v1.IngesterService/LabelValues',
  tags: ['ingester.v1.IngesterService'],
  summary: 'LabelValues',
  operationId: 'ingester.v1.IngesterService.LabelValues',
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
      content: { 'application/json': { schema: TypesV1LabelValuesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TypesV1LabelValuesResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postIngesterV1IngesterServiceProfileTypesRoute = createRoute({
  method: 'post',
  path: '/ingester.v1.IngesterService/ProfileTypes',
  tags: ['ingester.v1.IngesterService'],
  summary:
    'Deprecated: ProfileType call is deprecated in the store components  TODO: Remove this call in release v1.4',
  description:
    'Deprecated: ProfileType call is deprecated in the store components\n TODO: Remove this call in release v1.4',
  operationId: 'ingester.v1.IngesterService.ProfileTypes',
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
      content: { 'application/json': { schema: IngesterV1ProfileTypesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IngesterV1ProfileTypesResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postIngesterV1IngesterServicePushRoute = createRoute({
  method: 'post',
  path: '/ingester.v1.IngesterService/Push',
  tags: ['ingester.v1.IngesterService'],
  summary: 'Push',
  operationId: 'ingester.v1.IngesterService.Push',
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
    body: { content: { 'application/json': { schema: PushV1PushRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PushV1PushResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postIngesterV1IngesterServiceSeriesRoute = createRoute({
  method: 'post',
  path: '/ingester.v1.IngesterService/Series',
  tags: ['ingester.v1.IngesterService'],
  summary: 'Series',
  operationId: 'ingester.v1.IngesterService.Series',
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
      content: { 'application/json': { schema: IngesterV1SeriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: IngesterV1SeriesResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

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

const GoogleV1LabelSchema = z
  .strictObject({
    key: z
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
        title: 'key',
        description: 'Index into string table',
      }),
    str: z
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
        title: 'str',
        description: 'At most one of the following must be present Index into string table',
      }),
    num: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'num' }),
    numUnit: z
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
        title: 'num_unit',
        description:
          'Should only be present when num is present.\n Specifies the units of num.\n Use arbitrary string (for example, "requests") as a custom count unit.\n If no unit is specified, consumer may apply heuristic to deduce the unit.\n Consumers may also  interpret units like "bytes" and "kilobytes" as memory\n units and units like "seconds" and "nanoseconds" as time units,\n and apply appropriate unit conversions to these. Index into string table',
      }),
  })
  .openapi({ title: 'Label', required: [] })
  .openapi('GoogleV1Label')

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

const GoogleV1ValueTypeSchema = z
  .strictObject({
    type: z
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
        title: 'type',
        description: 'Index into string table.',
      }),
    unit: z
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
        title: 'unit',
        description: 'Index into string table.',
      }),
  })
  .openapi({
    title: 'ValueType',
    description: 'ValueType describes the semantics and measurement units of a value.',
    required: [],
  })
  .openapi('GoogleV1ValueType')

const GoogleV1SampleSchema = z
  .strictObject({
    locationId: z
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
        title: 'location_id',
        description:
          'The ids recorded here correspond to a Profile.location.id.\n The leaf is at location_id[0].',
      }),
    value: z
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
        title: 'value',
        description:
          'The type and unit of each value is defined by the corresponding\n entry in Profile.sample_type. All samples must have the same\n number of values, the same as the length of Profile.sample_type.\n When aggregating multiple samples into a single sample, the\n result has a list of values that is the element-wise sum of the\n lists of the originals.',
      }),
    label: z
      .array(GoogleV1LabelSchema)
      .exactOptional()
      .openapi({
        title: 'label',
        description:
          'label includes additional context for this sample. It can include\n things like a thread id, allocation size, etc',
      }),
  })
  .openapi({
    title: 'Sample',
    description:
      'Each Sample records values encountered in some program\n context. The program context is typically a stack trace, perhaps\n augmented with auxiliary information like the thread-id, some\n indicator of a higher level request being handled etc.',
    required: [],
  })
  .openapi('GoogleV1Sample')

const GoogleV1ProfileSchema = z
  .strictObject({
    sampleType: z
      .array(GoogleV1ValueTypeSchema)
      .exactOptional()
      .openapi({
        title: 'sample_type',
        description:
          'A description of the samples associated with each Sample.value.\n For a cpu profile this might be:\n   [["cpu","nanoseconds"]] or [["wall","seconds"]] or [["syscall","count"]]\n For a heap profile, this might be:\n   [["allocations","count"], ["space","bytes"]],\n If one of the values represents the number of events represented\n by the sample, by convention it should be at index 0 and use\n sample_type.unit == "count".',
      }),
    sample: z
      .array(GoogleV1SampleSchema)
      .exactOptional()
      .openapi({ title: 'sample', description: 'The set of samples recorded in this profile.' }),
    mapping: z
      .array(GoogleV1MappingSchema)
      .exactOptional()
      .openapi({
        title: 'mapping',
        description:
          'Mapping from address ranges to the image/binary/library mapped\n into that address range.  mapping[0] will be the main binary.',
      }),
    location: z
      .array(GoogleV1LocationSchema)
      .exactOptional()
      .openapi({ title: 'location', description: 'Useful program location' }),
    function: z
      .array(GoogleV1FunctionSchema)
      .exactOptional()
      .openapi({ title: 'function', description: 'Functions referenced by locations' }),
    stringTable: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'string_table',
        description:
          'A common table for strings referenced by various messages.\n string_table[0] must always be "".',
      }),
    dropFrames: z
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
        title: 'drop_frames',
        description:
          'frames with Function.function_name fully matching the following\n regexp will be dropped from the samples, along with their successors. Index into string table.',
      }),
    keepFrames: z
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
        title: 'keep_frames',
        description:
          'frames with Function.function_name fully matching the following\n regexp will be kept, even if it matches drop_frames. Index into string table.',
      }),
    timeNanos: z
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
        title: 'time_nanos',
        description: 'Time of collection (UTC) represented as nanoseconds past the epoch.',
      }),
    durationNanos: z
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
        title: 'duration_nanos',
        description: 'Duration of the profile, if a duration makes sense.',
      }),
    periodType: GoogleV1ValueTypeSchema.exactOptional().openapi({
      title: 'period_type',
      description:
        'The kind of events between sampled ocurrences.\n e.g [ "cpu","cycles" ] or [ "heap","bytes" ]',
    }),
    period: z
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
        title: 'period',
        description: 'The number of events between sampled occurrences.',
      }),
    comment: z
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
        title: 'comment',
        description: 'Freeform text associated to the profile. Indices into string table.',
      }),
    defaultSampleType: z
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
        title: 'default_sample_type',
        description:
          'Index into the string table of the type of the preferred sample\n value. If unset, clients should default to the last sample value.',
      }),
  })
  .openapi({ title: 'Profile', required: [] })
  .openapi('GoogleV1Profile')

const QuerierV1AnalyzeQueryRequestSchema = z
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
      .openapi({ type: 'integer', format: 'int64', title: 'start' }),
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
      .openapi({ type: 'integer', format: 'int64', title: 'end' }),
    query: z.string().exactOptional().openapi({ title: 'query' }),
  })
  .openapi({ title: 'AnalyzeQueryRequest', required: [] })
  .openapi('QuerierV1AnalyzeQueryRequest')

const QuerierV1QueryScopeSchema = z
  .strictObject({
    componentType: z
      .string()
      .exactOptional()
      .openapi({
        title: 'component_type',
        description: 'a descriptive high level name of the component processing one part',
      }),
    componentCount: z
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
        title: 'component_count',
        description:
          'of the query (e.g., "short term storage") how many components of this type will process',
      }),
    blockCount: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'block_count' }),
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
  .openapi({ title: 'QueryScope', required: [] })
  .openapi('QuerierV1QueryScope')

const QuerierV1QueryImpactSchema = z
  .strictObject({
    totalBytesInTimeRange: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'total_bytes_in_time_range' }),
    totalQueriedSeries: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'total_queried_series' }),
    deduplicationNeeded: z.boolean().exactOptional().openapi({ title: 'deduplication_needed' }),
  })
  .openapi({ title: 'QueryImpact', required: [] })
  .openapi('QuerierV1QueryImpact')

const QuerierV1AnalyzeQueryResponseSchema = z
  .strictObject({
    queryScopes: z
      .array(QuerierV1QueryScopeSchema)
      .exactOptional()
      .openapi({
        title: 'query_scopes',
        description: 'detailed view of what the query will require',
      }),
    queryImpact: QuerierV1QueryImpactSchema.exactOptional().openapi({
      title: 'query_impact',
      description: 'summary of the query impact / performance',
    }),
  })
  .openapi({ title: 'AnalyzeQueryResponse', required: [] })
  .openapi('QuerierV1AnalyzeQueryResponse')

const QuerierV1AnomalyTimeSeriesRequestSchema = z
  .strictObject({
    groupBy: z
      .array(z.string().openapi({ examples: [['pod']] }))
      .exactOptional()
      .openapi({
        examples: [['pod']],
        title: 'group_by',
        description:
          'Labels used to group matching profiles into series.\n If empty, all matching profiles are aggregated into a single series.',
      }),
    step: z
      .float64()
      .exactOptional()
      .openapi({
        title: 'step',
        description:
          'Query resolution step width in seconds. Must be at least 0.001 (1 ms).\n Unset or zero is invalid; there is no default.',
      }),
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
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        title: 'limit',
        description:
          'Retain all anomalies from the top N series by highest event priority_score.\n If unset, zero, or negative, no limit is applied.',
      }),
  })
  .openapi({ title: 'AnomalyTimeSeriesRequest', required: [] })
  .openapi('QuerierV1AnomalyTimeSeriesRequest')

const QuerierV1AnomalyTypeSchema = z
  .enum(['ANOMALY_TYPE_UNSPECIFIED', 'ANOMALY_TYPE_STACKTRACE', 'ANOMALY_TYPE_TIME_SERIES'])
  .openapi({ title: 'AnomalyType' })
  .openapi('QuerierV1AnomalyType')

const QuerierV1AsyncQueryTypeSchema = z
  .enum(['ASYNC_QUERY_TYPE_DISABLED', 'ASYNC_QUERY_TYPE_FORCE'])
  .openapi({ title: 'AsyncQueryType' })
  .openapi('QuerierV1AsyncQueryType')

const QuerierV1AsyncQueryRequestSchema = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ title: 'request_id', description: 'If set, this is a polling request.' }),
    type: QuerierV1AsyncQueryTypeSchema.exactOptional().openapi({
      title: 'type',
      description: 'Sets the kind of async query.',
    }),
  })
  .openapi({ title: 'AsyncQueryRequest', required: [] })
  .openapi('QuerierV1AsyncQueryRequest')

const QuerierV1AsyncQueryStatusSchema = z
  .enum([
    'ASYNC_QUERY_STATUS_UNKNOWN',
    'ASYNC_QUERY_STATUS_IN_PROGRESS',
    'ASYNC_QUERY_STATUS_SUCCESS',
    'ASYNC_QUERY_STATUS_FAILURE',
  ])
  .openapi({ title: 'AsyncQueryStatus' })
  .openapi('QuerierV1AsyncQueryStatus')

const QuerierV1AsyncQueryResponseSchema = z
  .strictObject({
    requestId: z
      .string()
      .exactOptional()
      .openapi({ title: 'request_id', description: 'Id of the async query.' }),
    status: QuerierV1AsyncQueryStatusSchema.exactOptional().openapi({
      title: 'status',
      description: 'Status of the query: unknown, in_progress, success, failed',
    }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ title: 'error_message', description: 'Populated on FAILURE.' }),
  })
  .openapi({ title: 'AsyncQueryResponse', required: [] })
  .openapi('QuerierV1AsyncQueryResponse')

const QuerierV1ProfileFormatSchema = z
  .enum([
    'PROFILE_FORMAT_UNSPECIFIED',
    'PROFILE_FORMAT_FLAMEGRAPH',
    'PROFILE_FORMAT_TREE',
    'PROFILE_FORMAT_DOT',
    'PROFILE_FORMAT_PPROF',
  ])
  .openapi({ title: 'ProfileFormat' })
  .openapi('QuerierV1ProfileFormat')

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

const QuerierV1SelectMergeStacktracesRequestSchema = z
  .strictObject({
    profileTypeID: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['process_cpu:cpu:nanoseconds:cpu:nanoseconds'],
        title: 'profile_typeID',
        description:
          'Profile Type ID string in the form\n <name>:<type>:<unit>:<period_type>:<period_unit>.',
      }),
    labelSelector: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['{namespace="my-namespace"}'],
        title: 'label_selector',
        description: 'Label selector string',
      }),
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
        examples: ['1676289600000'],
        title: 'end',
        description: 'Milliseconds since epoch.',
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
        description:
          "Limit the nodes returned to only show the node with the max_node's biggest\n total",
      }),
    format: QuerierV1ProfileFormatSchema.exactOptional().openapi({
      title: 'format',
      description:
        'Profile format specifies the format of profile to be returned.\n If not specified, the profile will be returned in flame graph format.',
    }),
    stackTraceSelector: TypesV1StackTraceSelectorSchema.nullable()
      .exactOptional()
      .openapi({
        title: 'stack_trace_selector',
        description: 'Select stack traces that match the provided selector.',
      }),
    profileIdSelector: z
      .array(z.string().openapi({ examples: [['7c9e6679-7425-40de-944b-e07fc1f90ae7']] }))
      .exactOptional()
      .openapi({
        examples: [['7c9e6679-7425-40de-944b-e07fc1f90ae7']],
        title: 'profile_id_selector',
        description: 'List of Profile UUIDs to query',
      }),
    async: QuerierV1AsyncQueryRequestSchema.nullable()
      .exactOptional()
      .openapi({
        title: 'async',
        description: '(experimental) Used for making and polling async queries.',
      }),
    traceIdSelector: z
      .array(z.string().openapi({ examples: [['7c9e66797425440de944be07fc1f90ae']] }))
      .exactOptional()
      .openapi({
        examples: [['7c9e66797425440de944be07fc1f90ae']],
        title: 'trace_id_selector',
        description: 'List of trace IDs (32 hex characters, 128-bit) to filter samples by.',
      }),
    spanSelector: z
      .array(z.string().openapi({ examples: [['9a517183f26a089d', '5a4fe264a9c987fe']] }))
      .exactOptional()
      .openapi({
        examples: [['9a517183f26a089d', '5a4fe264a9c987fe']],
        title: 'span_selector',
        description: 'List of span IDs (16 hex characters, 64-bit) to filter samples by.',
      }),
  })
  .openapi({ title: 'SelectMergeStacktracesRequest', required: [] })
  .openapi('QuerierV1SelectMergeStacktracesRequest')

const QuerierV1DiffRequestSchema = z
  .strictObject({
    left: QuerierV1SelectMergeStacktracesRequestSchema.exactOptional().openapi({
      title: 'left',
      description: 'The format of each request is ignored; diff queries always compare trees.',
    }),
    right: QuerierV1SelectMergeStacktracesRequestSchema.exactOptional().openapi({ title: 'right' }),
  })
  .openapi({ title: 'DiffRequest', required: [] })
  .openapi('QuerierV1DiffRequest')

const QuerierV1LevelSchema = z
  .strictObject({
    values: z
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
      .openapi({ title: 'values' }),
  })
  .openapi({ title: 'Level', required: [] })
  .openapi('QuerierV1Level')

const QuerierV1FlameGraphDiffSchema = z
  .strictObject({
    names: z.array(z.string()).exactOptional().openapi({ title: 'names' }),
    levels: z.array(QuerierV1LevelSchema).exactOptional().openapi({ title: 'levels' }),
    total: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'total' }),
    maxSelf: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'max_self' }),
    leftTicks: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'leftTicks' }),
    rightTicks: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'rightTicks' }),
  })
  .openapi({ title: 'FlameGraphDiff', required: [] })
  .openapi('QuerierV1FlameGraphDiff')

const QuerierV1DiffResponseSchema = z
  .strictObject({
    flamegraph: QuerierV1FlameGraphDiffSchema.exactOptional().openapi({ title: 'flamegraph' }),
  })
  .openapi({ title: 'DiffResponse', required: [] })
  .openapi('QuerierV1DiffResponse')

const QuerierV1FlameGraphSchema = z
  .strictObject({
    names: z.array(z.string()).exactOptional().openapi({ title: 'names' }),
    levels: z.array(QuerierV1LevelSchema).exactOptional().openapi({ title: 'levels' }),
    total: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'total' }),
    maxSelf: z
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
      .openapi({ type: 'integer', format: 'int64', title: 'max_self' }),
  })
  .openapi({ title: 'FlameGraph', required: [] })
  .openapi('QuerierV1FlameGraph')

const QuerierV1HeatmapQueryTypeSchema = z
  .enum([
    'HEATMAP_QUERY_TYPE_UNSPECIFIED',
    'HEATMAP_QUERY_TYPE_INDIVIDUAL',
    'HEATMAP_QUERY_TYPE_SPAN',
  ])
  .openapi({ title: 'HeatmapQueryType' })
  .openapi('QuerierV1HeatmapQueryType')

const QuerierV1PprofProfileSchema = z
  .strictObject({ profile: GoogleV1ProfileSchema.exactOptional().openapi({ title: 'profile' }) })
  .openapi({
    title: 'PprofProfile',
    description: 'PprofProfile contains pprof output and related response metadata.',
    required: [],
  })
  .openapi('QuerierV1PprofProfile')

const QuerierV1ProfileTypesRequestSchema = z
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
        examples: ['1676282400000'],
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
        examples: ['1676289600000'],
        title: 'end',
        description:
          'Milliseconds since epoch. If missing or zero, only the ingesters will be\n queried.',
      }),
  })
  .openapi({ title: 'ProfileTypesRequest', required: [] })
  .openapi('QuerierV1ProfileTypesRequest')

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

const QuerierV1ProfileTypesResponseSchema = z
  .strictObject({
    profileTypes: z
      .array(TypesV1ProfileTypeSchema)
      .exactOptional()
      .openapi({ title: 'profile_types' }),
  })
  .openapi({ title: 'ProfileTypesResponse', required: [] })
  .openapi('QuerierV1ProfileTypesResponse')

const QuerierV1QueryAnomaliesRequestSchema = z
  .strictObject({
    profileTypeID: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['process_cpu:cpu:nanoseconds:cpu:nanoseconds'],
        title: 'profile_typeID',
        description:
          'Profile Type ID string in the form\n <name>:<type>:<unit>:<period_type>:<period_unit>.',
      }),
    labelSelector: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['{namespace="my-namespace"}'],
        title: 'label_selector',
        description: 'Label selector string',
      }),
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
        examples: ['1676289600000'],
        title: 'end',
        description: 'Milliseconds since epoch.',
      }),
    anomalyTypes: z
      .array(QuerierV1AnomalyTypeSchema)
      .exactOptional()
      .openapi({ title: 'anomaly_types', description: 'Which anomaly sources to consult.' }),
    timeSeries: QuerierV1AnomalyTimeSeriesRequestSchema.nullable()
      .exactOptional()
      .openapi({
        title: 'time_series',
        description:
          'Required when ANOMALY_TYPE_TIME_SERIES is requested; there is no default step.\n Ignored when ANOMALY_TYPE_TIME_SERIES is not requested.',
      }),
  })
  .openapi({ title: 'QueryAnomaliesRequest', required: [] })
  .openapi('QuerierV1QueryAnomaliesRequest')

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

const QuerierV1StacktraceAnomalySchema = z
  .strictObject({
    profileId: z
      .string()
      .exactOptional()
      .openapi({ title: 'profile_id', description: 'Profile ID (UUID).' }),
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
        examples: ['1676282400000'],
        title: 'timestamp',
        description: "Milliseconds since epoch: the profile's own timestamp.",
      }),
    labels: z
      .array(TypesV1LabelPairSchema)
      .exactOptional()
      .openapi({
        title: 'labels',
        description:
          "The profile's own labels (e.g. pod, instance), same convention as\n types.v1.Exemplar.labels.",
      }),
    score: z
      .float64()
      .exactOptional()
      .openapi({ title: 'score', description: "The anomaly source's score for this profile." }),
  })
  .openapi({ title: 'StacktraceAnomaly', required: [] })
  .openapi('QuerierV1StacktraceAnomaly')

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

const QuerierV1QueryAnomaliesResponseSchema = z
  .strictObject({
    stacktraceAnomalies: z
      .array(QuerierV1StacktraceAnomalySchema)
      .exactOptional()
      .openapi({
        title: 'stacktrace_anomalies',
        description:
          'Profiles flagged by the stacktrace anomaly source and confirmed present for the given\n label selector and time range. Populated when ANOMALY_TYPE_STACKTRACE is requested.',
      }),
    timeSeriesAnomalies: z
      .array(QuerierV1TimeSeriesAnomalySchema)
      .exactOptional()
      .openapi({
        title: 'time_series_anomalies',
        description:
          'Detected time-series changes, populated when ANOMALY_TYPE_TIME_SERIES is requested.',
      }),
  })
  .openapi({ title: 'QueryAnomaliesResponse', required: [] })
  .openapi('QuerierV1QueryAnomaliesResponse')

const TypesV1ExemplarTypeSchema = z
  .enum([
    'EXEMPLAR_TYPE_UNSPECIFIED',
    'EXEMPLAR_TYPE_NONE',
    'EXEMPLAR_TYPE_INDIVIDUAL',
    'EXEMPLAR_TYPE_SPAN',
  ])
  .openapi({ title: 'ExemplarType' })
  .openapi('TypesV1ExemplarType')

const QuerierV1SelectHeatmapRequestSchema = z
  .strictObject({
    profileTypeID: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['process_cpu:cpu:nanoseconds:cpu:nanoseconds'],
        title: 'profile_typeID',
        description:
          'Profile Type ID string in the form\n <name>:<type>:<unit>:<period_type>:<period_unit>.',
      }),
    labelSelector: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['{namespace="my-namespace"}'],
        title: 'label_selector',
        description: 'Label selector string',
      }),
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
        examples: ['1676289600000'],
        title: 'end',
        description: 'Milliseconds since epoch.',
      }),
    step: z
      .float64()
      .exactOptional()
      .openapi({ title: 'step', description: 'Query resolution step width in seconds' }),
    groupBy: z
      .array(z.string().openapi({ examples: [['pod']] }))
      .exactOptional()
      .openapi({ examples: [['pod']], title: 'group_by', description: 'Group by labels' }),
    queryType: QuerierV1HeatmapQueryTypeSchema.exactOptional().openapi({
      examples: ['HEATMAP_QUERY_TYPE_SPAN'],
      title: 'query_type',
      description: 'Query type: individual profiles or span profiles',
    }),
    exemplarType: TypesV1ExemplarTypeSchema.exactOptional().openapi({
      examples: ['EXEMPLAR_TYPE_SPAN'],
      title: 'exemplar_type',
      description:
        'Type of exemplars to include in the response. Needs to matching query_type or be NONE',
    }),
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
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        title: 'limit',
        description: 'Select the top N series by total value.',
      }),
  })
  .openapi({ title: 'SelectHeatmapRequest', required: [] })
  .openapi('QuerierV1SelectHeatmapRequest')

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

const TypesV1HeatmapSlotSchema = z
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
        description:
          'Milliseconds unix timestamp of the right edge (x_max) of this slot.\n The slot covers the half-open interval (timestamp - step, timestamp].',
      }),
    yMin: z
      .array(z.float64())
      .exactOptional()
      .openapi({ title: 'y_min', description: 'Minimum y value' }),
    counts: z
      .array(z.int32())
      .exactOptional()
      .openapi({ title: 'counts', description: 'How many matches' }),
    exemplars: z
      .array(TypesV1ExemplarSchema)
      .exactOptional()
      .openapi({ title: 'exemplars', description: 'Provide exemplars' }),
  })
  .openapi({ title: 'HeatmapSlot', required: [] })
  .openapi('TypesV1HeatmapSlot')

const TypesV1HeatmapSeriesSchema = z
  .strictObject({
    labels: z.array(TypesV1LabelPairSchema).exactOptional().openapi({ title: 'labels' }),
    slots: z.array(TypesV1HeatmapSlotSchema).exactOptional().openapi({ title: 'slots' }),
  })
  .openapi({ title: 'HeatmapSeries', required: [] })
  .openapi('TypesV1HeatmapSeries')

const QuerierV1SelectHeatmapResponseSchema = z
  .strictObject({
    series: z.array(TypesV1HeatmapSeriesSchema).exactOptional().openapi({ title: 'series' }),
  })
  .openapi({ title: 'SelectHeatmapResponse', required: [] })
  .openapi('QuerierV1SelectHeatmapResponse')

const QuerierV1SelectMergeProfileRequestSchema = z
  .strictObject({
    profileTypeID: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['process_cpu:cpu:nanoseconds:cpu:nanoseconds'],
        title: 'profile_typeID',
        description:
          'Profile Type ID string in the form\n <name>:<type>:<unit>:<period_type>:<period_unit>.',
      }),
    labelSelector: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['{namespace="my-namespace"}'],
        title: 'label_selector',
        description: 'Label selector string',
      }),
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
        examples: ['1676289600000'],
        title: 'end',
        description: 'Milliseconds since epoch.',
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
        description:
          "Limit the nodes returned to only show the node with the max_node's biggest\n total",
      }),
    stackTraceSelector: TypesV1StackTraceSelectorSchema.nullable()
      .exactOptional()
      .openapi({
        title: 'stack_trace_selector',
        description: 'Select stack traces that match the provided selector.',
      }),
    profileIdSelector: z
      .array(z.string().openapi({ examples: [['7c9e6679-7425-40de-944b-e07fc1f90ae7']] }))
      .exactOptional()
      .openapi({
        examples: [['7c9e6679-7425-40de-944b-e07fc1f90ae7']],
        title: 'profile_id_selector',
        description: 'List of Profile UUIDs to query',
      }),
    traceIdSelector: z
      .array(z.string().openapi({ examples: [['7c9e66797425440de944be07fc1f90ae']] }))
      .exactOptional()
      .openapi({
        examples: [['7c9e66797425440de944be07fc1f90ae']],
        title: 'trace_id_selector',
        description: 'List of trace IDs (32 hex characters, 128-bit) to filter samples by.',
      }),
  })
  .openapi({ title: 'SelectMergeProfileRequest', required: [] })
  .openapi('QuerierV1SelectMergeProfileRequest')

const QuerierV1SelectMergeSpanProfileRequestSchema = z
  .strictObject({
    profileTypeID: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['process_cpu:cpu:nanoseconds:cpu:nanoseconds'],
        title: 'profile_typeID',
        description:
          'Profile Type ID string in the form\n <name>:<type>:<unit>:<period_type>:<period_unit>.',
      }),
    labelSelector: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['{namespace="my-namespace"}'],
        title: 'label_selector',
        description: 'Label selector string',
      }),
    spanSelector: z
      .array(z.string().openapi({ examples: [['9a517183f26a089d', '5a4fe264a9c987fe']] }))
      .exactOptional()
      .openapi({
        examples: [['9a517183f26a089d', '5a4fe264a9c987fe']],
        title: 'span_selector',
        description: 'List of Span IDs to query',
      }),
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
        examples: ['1676289600000'],
        title: 'end',
        description: 'Milliseconds since epoch.',
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
        description:
          "Limit the nodes returned to only show the node with the max_node's biggest\n total",
      }),
    format: QuerierV1ProfileFormatSchema.exactOptional().openapi({
      title: 'format',
      description:
        'Profile format specifies the format of profile to be returned.\n If not specified, the profile will be returned in flame graph format.',
    }),
  })
  .openapi({ title: 'SelectMergeSpanProfileRequest', required: [] })
  .openapi('QuerierV1SelectMergeSpanProfileRequest')

const QuerierV1SelectMergeSpanProfileResponseSchema = z
  .strictObject({
    flamegraph: QuerierV1FlameGraphSchema.exactOptional().openapi({ title: 'flamegraph' }),
    tree: z
      .string()
      .exactOptional()
      .openapi({ title: 'tree', description: 'Pyroscope tree bytes.' }),
  })
  .openapi({ title: 'SelectMergeSpanProfileResponse', required: [] })
  .openapi('QuerierV1SelectMergeSpanProfileResponse')

const QuerierV1SelectMergeStacktracesResponseSchema = z
  .strictObject({
    flamegraph: QuerierV1FlameGraphSchema.exactOptional().openapi({ title: 'flamegraph' }),
    tree: z
      .string()
      .exactOptional()
      .openapi({ title: 'tree', description: 'Pyroscope tree bytes.' }),
    dot: z
      .string()
      .exactOptional()
      .openapi({ title: 'dot', description: 'DOT graph representation.' }),
    async: QuerierV1AsyncQueryResponseSchema.nullable()
      .exactOptional()
      .openapi({
        title: 'async',
        description: '(experimental) Used for responding to async queries.',
      }),
    pprof: QuerierV1PprofProfileSchema.exactOptional().openapi({
      title: 'pprof',
      description: 'Profile in pprof format.',
    }),
  })
  .openapi({ title: 'SelectMergeStacktracesResponse', required: [] })
  .openapi('QuerierV1SelectMergeStacktracesResponse')

const TypesV1TimeSeriesAggregationTypeSchema = z
  .enum(['TIME_SERIES_AGGREGATION_TYPE_SUM', 'TIME_SERIES_AGGREGATION_TYPE_AVERAGE'])
  .openapi({ title: 'TimeSeriesAggregationType' })
  .openapi('TypesV1TimeSeriesAggregationType')

const QuerierV1SelectSeriesRequestSchema = z
  .strictObject({
    profileTypeID: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['process_cpu:cpu:nanoseconds:cpu:nanoseconds'],
        title: 'profile_typeID',
        description:
          'Profile Type ID string in the form\n <name>:<type>:<unit>:<period_type>:<period_unit>.',
      }),
    labelSelector: z
      .string()
      .exactOptional()
      .openapi({
        examples: ['{namespace="my-namespace"}'],
        title: 'label_selector',
        description: 'Label selector string',
      }),
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
        examples: ['1676289600000'],
        title: 'end',
        description: 'Milliseconds since epoch.',
      }),
    groupBy: z
      .array(z.string().openapi({ examples: [['pod']] }))
      .exactOptional()
      .openapi({ examples: [['pod']], title: 'group_by' }),
    step: z.float64().exactOptional().openapi({ title: 'step' }),
    aggregation: TypesV1TimeSeriesAggregationTypeSchema.nullable()
      .exactOptional()
      .openapi({ title: 'aggregation', description: 'Query resolution step width in seconds' }),
    stackTraceSelector: TypesV1StackTraceSelectorSchema.nullable()
      .exactOptional()
      .openapi({
        title: 'stack_trace_selector',
        description: 'Select stack traces that match the provided selector.',
      }),
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
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        title: 'limit',
        description: 'Select the top N series by total value.',
      }),
    exemplarType: TypesV1ExemplarTypeSchema.exactOptional().openapi({
      title: 'exemplar_type',
      description: 'Type of exemplars to include in the response.',
    }),
  })
  .openapi({ title: 'SelectSeriesRequest', required: [] })
  .openapi('QuerierV1SelectSeriesRequest')

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

const QuerierV1SelectSeriesResponseSchema = z
  .strictObject({
    series: z.array(TypesV1SeriesSchema).exactOptional().openapi({ title: 'series' }),
  })
  .openapi({ title: 'SelectSeriesResponse', required: [] })
  .openapi('QuerierV1SelectSeriesResponse')

const QuerierV1SeriesRequestSchema = z
  .strictObject({
    matchers: z
      .array(z.string().openapi({ examples: [['{namespace="my-namespace"}']] }))
      .exactOptional()
      .openapi({
        examples: [['{namespace="my-namespace"}']],
        title: 'matchers',
        description: 'List of label selector to apply to the result.',
      }),
    labelNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'label_names',
        description:
          'List of label_names to request. If empty will return all label names in the\n result.',
      }),
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
        examples: ['1676289600000'],
        title: 'end',
        description: 'queried.',
      }),
  })
  .openapi({ title: 'SeriesRequest', required: [] })
  .openapi('QuerierV1SeriesRequest')

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

const QuerierV1SeriesResponseSchema = z
  .strictObject({
    labelsSet: z.array(TypesV1LabelsSchema).exactOptional().openapi({ title: 'labels_set' }),
  })
  .openapi({ title: 'SeriesResponse', required: [] })
  .openapi('QuerierV1SeriesResponse')

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

export const postQuerierV1QuerierServiceAnalyzeQueryRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/AnalyzeQuery',
  tags: ['scope/internal', 'querier.v1.QuerierService'],
  summary: 'AnalyzeQuery',
  operationId: 'querier.v1.QuerierService.AnalyzeQuery',
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
      content: { 'application/json': { schema: QuerierV1AnalyzeQueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QuerierV1AnalyzeQueryResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postQuerierV1QuerierServiceDiffRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/Diff',
  tags: ['scope/public', 'querier.v1.QuerierService'],
  summary: 'Diff returns a diff of two profiles',
  description: 'Diff returns a diff of two profiles',
  operationId: 'querier.v1.QuerierService.Diff',
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
      content: { 'application/json': { schema: QuerierV1DiffRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QuerierV1DiffResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postQuerierV1QuerierServiceGetProfileStatsRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/GetProfileStats',
  tags: ['scope/internal', 'querier.v1.QuerierService'],
  summary: 'GetProfileStats returns profile stats for the current tenant.',
  description: 'GetProfileStats returns profile stats for the current tenant.',
  operationId: 'querier.v1.QuerierService.GetProfileStats',
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

export const postQuerierV1QuerierServiceLabelNamesRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/LabelNames',
  tags: ['scope/public', 'querier.v1.QuerierService'],
  summary: 'LabelNames returns a list of the existing label names.',
  description: 'LabelNames returns a list of the existing label names.',
  operationId: 'querier.v1.QuerierService.LabelNames',
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

export const postQuerierV1QuerierServiceLabelValuesRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/LabelValues',
  tags: ['scope/public', 'querier.v1.QuerierService'],
  summary: 'LabelValues returns the existing label values for the provided label names.',
  description: 'LabelValues returns the existing label values for the provided label names.',
  operationId: 'querier.v1.QuerierService.LabelValues',
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

export const postQuerierV1QuerierServiceProfileTypesRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/ProfileTypes',
  tags: ['scope/public', 'querier.v1.QuerierService'],
  summary: 'ProfileType returns a list of the existing profile types.',
  description: 'ProfileType returns a list of the existing profile types.',
  operationId: 'querier.v1.QuerierService.ProfileTypes',
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
      content: { 'application/json': { schema: QuerierV1ProfileTypesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QuerierV1ProfileTypesResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postQuerierV1QuerierServiceQueryAnomaliesRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/QueryAnomalies',
  tags: ['scope/internal', 'querier.v1.QuerierService'],
  summary:
    '(Experimental) QueryAnomalies returns stacktrace anomalies and detected  time-series changes for matching profiles, according to anomaly_types.',
  description:
    '(Experimental) QueryAnomalies returns stacktrace anomalies and detected\n time-series changes for matching profiles, according to anomaly_types.',
  operationId: 'querier.v1.QuerierService.QueryAnomalies',
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
      content: { 'application/json': { schema: QuerierV1QueryAnomaliesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QuerierV1QueryAnomaliesResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postQuerierV1QuerierServiceSelectHeatmapRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/SelectHeatmap',
  tags: ['scope/public', 'querier.v1.QuerierService'],
  summary:
    'SelectHeatmap returns a heatmap visualization for the requested profiles.  Note: This endpoint is only available in the v2 storage layer',
  description:
    'SelectHeatmap returns a heatmap visualization for the requested profiles.\n Note: This endpoint is only available in the v2 storage layer',
  operationId: 'querier.v1.QuerierService.SelectHeatmap',
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
      content: { 'application/json': { schema: QuerierV1SelectHeatmapRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QuerierV1SelectHeatmapResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postQuerierV1QuerierServiceSelectMergeProfileRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/SelectMergeProfile',
  tags: ['scope/public', 'querier.v1.QuerierService'],
  summary:
    'Deprecated: Use SelectMergeStacktraces with PROFILE_FORMAT_PPROF instead.  This RPC will remain supported in querier.v1 for backward compatibility;  future breaking API changes may be introduced in querier.v2.  SelectMergeProfile returns matching profiles aggregated in pprof format. It  will contain all information stored (so including filenames and line  number, if ingested).',
  description:
    'Deprecated: Use SelectMergeStacktraces with PROFILE_FORMAT_PPROF instead.\n This RPC will remain supported in querier.v1 for backward compatibility;\n future breaking API changes may be introduced in querier.v2.\n SelectMergeProfile returns matching profiles aggregated in pprof format. It\n will contain all information stored (so including filenames and line\n number, if ingested).',
  operationId: 'querier.v1.QuerierService.SelectMergeProfile',
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
      content: { 'application/json': { schema: QuerierV1SelectMergeProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GoogleV1ProfileSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postQuerierV1QuerierServiceSelectMergeSpanProfileRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/SelectMergeSpanProfile',
  tags: ['scope/public', 'querier.v1.QuerierService'],
  summary:
    'Deprecated: Use SelectMergeStacktraces with span_selector instead.  This RPC will remain supported in querier.v1 for backward compatibility;  future breaking API changes may be introduced in querier.v2.  SelectMergeSpanProfile returns matching profiles aggregated in a flamegraph  format. It will combine samples from within the same callstack, with each  element being grouped by its function name.',
  description:
    'Deprecated: Use SelectMergeStacktraces with span_selector instead.\n This RPC will remain supported in querier.v1 for backward compatibility;\n future breaking API changes may be introduced in querier.v2.\n SelectMergeSpanProfile returns matching profiles aggregated in a flamegraph\n format. It will combine samples from within the same callstack, with each\n element being grouped by its function name.',
  operationId: 'querier.v1.QuerierService.SelectMergeSpanProfile',
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
      content: { 'application/json': { schema: QuerierV1SelectMergeSpanProfileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QuerierV1SelectMergeSpanProfileResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postQuerierV1QuerierServiceSelectMergeStacktracesRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/SelectMergeStacktraces',
  tags: ['scope/public', 'querier.v1.QuerierService'],
  summary:
    'SelectMergeStacktraces returns matching profiles aggregated in a flamegraph  format. It will combine samples from within the same callstack, with each  element being grouped by its function name.',
  description:
    'SelectMergeStacktraces returns matching profiles aggregated in a flamegraph\n format. It will combine samples from within the same callstack, with each\n element being grouped by its function name.',
  operationId: 'querier.v1.QuerierService.SelectMergeStacktraces',
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
      content: { 'application/json': { schema: QuerierV1SelectMergeStacktracesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QuerierV1SelectMergeStacktracesResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postQuerierV1QuerierServiceSelectSeriesRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/SelectSeries',
  tags: ['scope/public', 'querier.v1.QuerierService'],
  summary: 'SelectSeries returns a time series for the total sum of the requested  profiles.',
  description: 'SelectSeries returns a time series for the total sum of the requested\n profiles.',
  operationId: 'querier.v1.QuerierService.SelectSeries',
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
      content: { 'application/json': { schema: QuerierV1SelectSeriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QuerierV1SelectSeriesResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postQuerierV1QuerierServiceSeriesRoute = createRoute({
  method: 'post',
  path: '/querier.v1.QuerierService/Series',
  tags: ['scope/public', 'querier.v1.QuerierService'],
  summary: 'Series returns profiles series matching the request. A series is a unique  label set.',
  description:
    'Series returns profiles series matching the request. A series is a unique\n label set.',
  operationId: 'querier.v1.QuerierService.Series',
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
      content: { 'application/json': { schema: QuerierV1SeriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: QuerierV1SeriesResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

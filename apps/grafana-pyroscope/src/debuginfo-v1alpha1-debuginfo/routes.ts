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

const DebuginfoV1alpha1DeleteDebuginfoRequestSchema = z
  .strictObject({ gnuBuildId: z.string().exactOptional().openapi({ title: 'gnu_build_id' }) })
  .openapi({ title: 'DeleteDebuginfoRequest', required: [] })
  .openapi('DebuginfoV1alpha1DeleteDebuginfoRequest')

const DebuginfoV1alpha1DeleteDebuginfoResponseSchema = z
  .strictObject({})
  .openapi({ title: 'DeleteDebuginfoResponse' })
  .openapi('DebuginfoV1alpha1DeleteDebuginfoResponse')

const DebuginfoV1alpha1FileMetadataTypeSchema = z
  .enum(['TYPE_UNSPECIFIED', 'TYPE_EXECUTABLE_FULL', 'TYPE_EXECUTABLE_NO_TEXT'])
  .openapi({ title: 'Type' })
  .openapi('DebuginfoV1alpha1FileMetadataType')

const DebuginfoV1alpha1FileMetadataSchema = z
  .strictObject({
    gnuBuildId: z
      .string()
      .exactOptional()
      .openapi({ title: 'gnu_build_id', description: 'GNU build ID of the executable.' }),
    goBuildId: z
      .string()
      .exactOptional()
      .openapi({ title: 'go_build_id', description: 'Go build ID of the executable.' }),
    otelFileId: z
      .string()
      .exactOptional()
      .openapi({
        title: 'otel_file_id',
        description: 'Optional libpf.FileID from the otel profiler.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ title: 'name', description: 'Original file name of the executable.' }),
    type: DebuginfoV1alpha1FileMetadataTypeSchema.exactOptional().openapi({
      title: 'type',
      description: 'Type of the debug info.',
    }),
  })
  .openapi({ title: 'FileMetadata', required: [] })
  .openapi('DebuginfoV1alpha1FileMetadata')

const DebuginfoV1alpha1ListDebuginfoRequestSchema = z
  .strictObject({})
  .openapi({ title: 'ListDebuginfoRequest' })
  .openapi('DebuginfoV1alpha1ListDebuginfoRequest')

const DebuginfoV1alpha1ObjectMetadataStateSchema = z
  .enum(['STATE_UPLOADING', 'STATE_UPLOADED'])
  .openapi({ title: 'State' })
  .openapi('DebuginfoV1alpha1ObjectMetadataState')

const GoogleProtobufTimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    examples: ['2023-01-15T01:30:15.01Z', '2024-12-25T12:00:00Z'],
    description:
      'A Timestamp represents a point in time independent of any time zone or local\n calendar, encoded as a count of seconds and fractions of seconds at\n nanosecond resolution. The count is relative to an epoch at UTC midnight on\n January 1, 1970, in the proleptic Gregorian calendar which extends the\n Gregorian calendar backwards to year one.\n\n All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap\n second table is needed for interpretation, using a [24-hour linear\n smear](https://developers.google.com/time/smear).\n\n The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By\n restricting to that range, we ensure that we can convert to and from [RFC\n 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.\n\n # Examples\n\n Example 1: Compute Timestamp from POSIX `time()`.\n\n     Timestamp timestamp;\n     timestamp.set_seconds(time(NULL));\n     timestamp.set_nanos(0);\n\n Example 2: Compute Timestamp from POSIX `gettimeofday()`.\n\n     struct timeval tv;\n     gettimeofday(&tv, NULL);\n\n     Timestamp timestamp;\n     timestamp.set_seconds(tv.tv_sec);\n     timestamp.set_nanos(tv.tv_usec * 1000);\n\n Example 3: Compute Timestamp from Win32 `GetSystemTimeAsFileTime()`.\n\n     FILETIME ft;\n     GetSystemTimeAsFileTime(&ft);\n     UINT64 ticks = (((UINT64)ft.dwHighDateTime) << 32) | ft.dwLowDateTime;\n\n     // A Windows tick is 100 nanoseconds. Windows epoch 1601-01-01T00:00:00Z\n     // is 11644473600 seconds before Unix epoch 1970-01-01T00:00:00Z.\n     Timestamp timestamp;\n     timestamp.set_seconds((INT64) ((ticks / 10000000) - 11644473600LL));\n     timestamp.set_nanos((INT32) ((ticks % 10000000) * 100));\n\n Example 4: Compute Timestamp from Java `System.currentTimeMillis()`.\n\n     long millis = System.currentTimeMillis();\n\n     Timestamp timestamp = Timestamp.newBuilder().setSeconds(millis / 1000)\n         .setNanos((int) ((millis % 1000) * 1000000)).build();\n\n Example 5: Compute Timestamp from Java `Instant.now()`.\n\n     Instant now = Instant.now();\n\n     Timestamp timestamp =\n         Timestamp.newBuilder().setSeconds(now.getEpochSecond())\n             .setNanos(now.getNano()).build();\n\n Example 6: Compute Timestamp from current time in Python.\n\n     timestamp = Timestamp()\n     timestamp.GetCurrentTime()\n\n # JSON Mapping\n\n In JSON format, the Timestamp type is encoded as a string in the\n [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. That is, the\n format is "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z"\n where {year} is always expressed using four digits while {month}, {day},\n {hour}, {min}, and {sec} are zero-padded to two digits each. The fractional\n seconds, which can go up to 9 digits (i.e. up to 1 nanosecond resolution),\n are optional. The "Z" suffix indicates the timezone ("UTC"); the timezone\n is required. A proto3 JSON serializer should always use UTC (as indicated by\n "Z") when printing the Timestamp type and a proto3 JSON parser should be\n able to accept both UTC and other timezones (as indicated by an offset).\n\n For example, "2017-01-15T01:30:15.01Z" encodes 15.01 seconds past\n 01:30 UTC on January 15, 2017.\n\n In JavaScript, one can convert a Date object to this format using the\n standard\n [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)\n method. In Python, a standard `datetime.datetime` object can be converted\n to this format using\n [`strftime`](https://docs.python.org/2/library/time.html#time.strftime) with\n the time format spec \'%Y-%m-%dT%H:%M:%S.%fZ\'. Likewise, in Java, one can use\n the Joda Time\'s [`ISODateTimeFormat.dateTime()`](\n http://joda-time.sourceforge.net/apidocs/org/joda/time/format/ISODateTimeFormat.html#dateTime()\n ) to obtain a formatter capable of generating timestamps in this format.',
  })
  .openapi('GoogleProtobufTimestamp')

const DebuginfoV1alpha1ObjectMetadataSchema = z
  .strictObject({
    file: DebuginfoV1alpha1FileMetadataSchema.exactOptional().openapi({ title: 'file' }),
    state: DebuginfoV1alpha1ObjectMetadataStateSchema.exactOptional().openapi({ title: 'state' }),
    startedAt: GoogleProtobufTimestampSchema.exactOptional().openapi({ title: 'started_at' }),
    finishedAt: GoogleProtobufTimestampSchema.exactOptional().openapi({ title: 'finished_at' }),
    sizeBytes: z
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
        title: 'size_bytes',
        description: 'Size of the uploaded ELF file in bytes.',
      }),
  })
  .openapi({
    title: 'ObjectMetadata',
    description:
      'This is stored in buckets at "debug-info/$tenant/$gnu_build_id/metadata"\n Along with the actual uploaded file at "debug-info/$tenant/$gnu_build_id/exe"',
    required: [],
  })
  .openapi('DebuginfoV1alpha1ObjectMetadata')

const DebuginfoV1alpha1ListDebuginfoResponseSchema = z
  .strictObject({
    object: z
      .array(DebuginfoV1alpha1ObjectMetadataSchema)
      .exactOptional()
      .openapi({ title: 'object' }),
  })
  .openapi({ title: 'ListDebuginfoResponse', required: [] })
  .openapi('DebuginfoV1alpha1ListDebuginfoResponse')

const DebuginfoV1alpha1ShouldInitiateUploadRequestSchema = z
  .strictObject({
    file: DebuginfoV1alpha1FileMetadataSchema.exactOptional().openapi({ title: 'file' }),
  })
  .openapi({ title: 'ShouldInitiateUploadRequest', required: [] })
  .openapi('DebuginfoV1alpha1ShouldInitiateUploadRequest')

const DebuginfoV1alpha1ShouldInitiateUploadResponseSchema = z
  .strictObject({
    shouldInitiateUpload: z.boolean().exactOptional().openapi({ title: 'should_initiate_upload' }),
    reason: z.string().exactOptional().openapi({ title: 'reason' }),
  })
  .openapi({ title: 'ShouldInitiateUploadResponse', required: [] })
  .openapi('DebuginfoV1alpha1ShouldInitiateUploadResponse')

const DebuginfoV1alpha1UploadFinishedRequestSchema = z
  .strictObject({ gnuBuildId: z.string().exactOptional().openapi({ title: 'gnu_build_id' }) })
  .openapi({ title: 'UploadFinishedRequest', required: [] })
  .openapi('DebuginfoV1alpha1UploadFinishedRequest')

const DebuginfoV1alpha1UploadFinishedResponseSchema = z
  .strictObject({})
  .openapi({ title: 'UploadFinishedResponse' })
  .openapi('DebuginfoV1alpha1UploadFinishedResponse')

export const postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfoRoute = createRoute({
  method: 'post',
  path: '/debuginfo.v1alpha1.DebuginfoService/DeleteDebuginfo',
  tags: ['debuginfo.v1alpha1.DebuginfoService'],
  summary: 'DeleteDebuginfo',
  operationId: 'debuginfo.v1alpha1.DebuginfoService.DeleteDebuginfo',
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
      content: { 'application/json': { schema: DebuginfoV1alpha1DeleteDebuginfoRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DebuginfoV1alpha1DeleteDebuginfoResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postDebuginfoV1alpha1DebuginfoServiceListDebuginfoRoute = createRoute({
  method: 'post',
  path: '/debuginfo.v1alpha1.DebuginfoService/ListDebuginfo',
  tags: ['debuginfo.v1alpha1.DebuginfoService'],
  summary: 'ListDebuginfo',
  operationId: 'debuginfo.v1alpha1.DebuginfoService.ListDebuginfo',
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
      content: { 'application/json': { schema: DebuginfoV1alpha1ListDebuginfoRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DebuginfoV1alpha1ListDebuginfoResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUploadRoute = createRoute({
  method: 'post',
  path: '/debuginfo.v1alpha1.DebuginfoService/ShouldInitiateUpload',
  tags: ['debuginfo.v1alpha1.DebuginfoService'],
  summary: 'ShouldInitiateUpload',
  operationId: 'debuginfo.v1alpha1.DebuginfoService.ShouldInitiateUpload',
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
      content: {
        'application/json': { schema: DebuginfoV1alpha1ShouldInitiateUploadRequestSchema },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DebuginfoV1alpha1ShouldInitiateUploadResponseSchema },
      },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postDebuginfoV1alpha1DebuginfoServiceUploadFinishedRoute = createRoute({
  method: 'post',
  path: '/debuginfo.v1alpha1.DebuginfoService/UploadFinished',
  tags: ['debuginfo.v1alpha1.DebuginfoService'],
  summary: 'UploadFinished',
  operationId: 'debuginfo.v1alpha1.DebuginfoService.UploadFinished',
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
      content: { 'application/json': { schema: DebuginfoV1alpha1UploadFinishedRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DebuginfoV1alpha1UploadFinishedResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

import { z } from '@hono/zod-openapi'

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

const DebuginfoV1FileMetadataDebuginfoTypeSchema = z
  .enum(['DEBUGINFO_TYPE_EXECUTABLE_FULL', 'DEBUGINFO_TYPE_EXECUTABLE_NO_TEXT'])
  .openapi({ title: 'DebuginfoType' })
  .openapi('DebuginfoV1FileMetadataDebuginfoType')

const DebuginfoV1FileMetadataSchema = z
  .strictObject({
    GNU: z.string().exactOptional().openapi({ title: 'GNU' }),
    Golang: z.string().exactOptional().openapi({ title: 'Golang' }),
    OpenTelemetry: z
      .string()
      .exactOptional()
      .openapi({
        title: 'OpenTelemetry',
        description: 'optional libpf.FileID rom the otel profiler',
      }),
    Name: z.string().exactOptional().openapi({ title: 'Name' }),
    type: DebuginfoV1FileMetadataDebuginfoTypeSchema.exactOptional().openapi({ title: 'type' }),
  })
  .openapi({ title: 'FileMetadata', required: [] })
  .openapi('DebuginfoV1FileMetadata')

const DebuginfoV1ShouldInitiateUploadRequestSchema = z
  .strictObject({
    file: DebuginfoV1FileMetadataSchema.exactOptional().openapi({
      title: 'file',
      description: 'bool force = ;',
    }),
  })
  .openapi({ title: 'ShouldInitiateUploadRequest', required: [] })
  .openapi('DebuginfoV1ShouldInitiateUploadRequest')

const DebuginfoV1ShouldInitiateUploadResponseSchema = z
  .strictObject({
    shouldInitiateUpload: z.boolean().exactOptional().openapi({ title: 'should_initiate_upload' }),
    reason: z.string().exactOptional().openapi({ title: 'reason' }),
  })
  .openapi({ title: 'ShouldInitiateUploadResponse', required: [] })
  .openapi('DebuginfoV1ShouldInitiateUploadResponse')

const DebuginfoV1UploadChunkSchema = z
  .strictObject({ chunk: z.string().exactOptional().openapi({ title: 'chunk' }) })
  .openapi({ title: 'UploadChunk', required: [] })
  .openapi('DebuginfoV1UploadChunk')

const DebuginfoV1UploadRequestSchema = z
  .xor([
    z
      .object({ chunk: DebuginfoV1UploadChunkSchema.openapi({ title: 'chunk' }) })
      .openapi({ title: 'chunk', required: ['chunk'] }),
    z
      .object({ init: DebuginfoV1ShouldInitiateUploadRequestSchema.openapi({ title: 'init' }) })
      .openapi({ title: 'init', required: ['init'] }),
  ])
  .openapi({ title: 'UploadRequest' })
  .openapi('DebuginfoV1UploadRequest')

const DebuginfoV1UploadResponseSchema = z
  .xor([
    z
      .object({ init: DebuginfoV1ShouldInitiateUploadResponseSchema.openapi({ title: 'init' }) })
      .openapi({ title: 'init', required: ['init'] }),
  ])
  .openapi({ title: 'UploadResponse' })
  .openapi('DebuginfoV1UploadResponse')

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

export const postPushV1PusherServicePushRoute = createRoute({
  method: 'post',
  path: '/push.v1.PusherService/Push',
  tags: ['scope/public', 'push.v1.PusherService'],
  summary: 'Push',
  operationId: 'push.v1.PusherService.Push',
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

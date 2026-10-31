import { createRoute, z } from '@hono/zod-openapi'

const CapabilitiesV1FeatureFlagSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({ title: 'name', description: 'Name of the feature, please use lower camel case.' }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        title: 'enabled',
        description: 'Wether the feature flag is enabled or disabled.',
      }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ title: 'description', description: 'Optional description of the feature flag.' }),
    documentationUrl: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        title: 'documentation_url',
        description: 'Optional URL to the documentation page of the feature flag.',
      }),
  })
  .openapi({
    title: 'FeatureFlag',
    description: 'FeatureParameters contains the per feature flag parameters.',
    required: [],
  })
  .openapi('CapabilitiesV1FeatureFlag')

const CapabilitiesV1GetFeatureFlagsRequestSchema = z
  .strictObject({})
  .openapi({ title: 'GetFeatureFlagsRequest' })
  .openapi('CapabilitiesV1GetFeatureFlagsRequest')

const CapabilitiesV1GetFeatureFlagsResponseSchema = z
  .strictObject({
    featureFlags: z
      .array(CapabilitiesV1FeatureFlagSchema)
      .exactOptional()
      .openapi({
        title: 'feature_flags',
        description: 'Map containing all features, also disable features are returned',
      }),
  })
  .openapi({ title: 'GetFeatureFlagsResponse', required: [] })
  .openapi('CapabilitiesV1GetFeatureFlagsResponse')

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

export const postCapabilitiesV1FeatureFlagsServiceGetFeatureFlagsRoute = createRoute({
  method: 'post',
  path: '/capabilities.v1.FeatureFlagsService/GetFeatureFlags',
  tags: ['capabilities.v1.FeatureFlagsService'],
  summary: 'Retrieve feature flags that are enabled for a particular tenant',
  description: 'Retrieve feature flags that are enabled for a particular tenant',
  operationId: 'capabilities.v1.FeatureFlagsService.GetFeatureFlags',
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
      content: { 'application/json': { schema: CapabilitiesV1GetFeatureFlagsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CapabilitiesV1GetFeatureFlagsResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

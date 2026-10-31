import { createRoute, z } from '@hono/zod-openapi'

const AdhocprofilesV1AdHocProfilesDiffRequestSchema = z
  .strictObject({
    leftId: z.string().exactOptional().openapi({ title: 'left_id' }),
    rightId: z.string().exactOptional().openapi({ title: 'right_id' }),
    profileType: z.string().nullable().exactOptional().openapi({ title: 'profile_type' }),
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
      .openapi({ type: ['integer', 'null'], format: 'int64', title: 'max_nodes' }),
  })
  .openapi({ title: 'AdHocProfilesDiffRequest', required: [] })
  .openapi('AdhocprofilesV1AdHocProfilesDiffRequest')

const AdhocprofilesV1AdHocProfilesDiffResponseSchema = z
  .strictObject({
    profileTypes: z.array(z.string()).exactOptional().openapi({ title: 'profile_types' }),
    flamebearerProfile: z.string().exactOptional().openapi({ title: 'flamebearer_profile' }),
  })
  .openapi({ title: 'AdHocProfilesDiffResponse', required: [] })
  .openapi('AdhocprofilesV1AdHocProfilesDiffResponse')

const AdhocprofilesV1AdHocProfilesGetRequestSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({ title: 'id', description: 'The unique identifier of the profile.' }),
    profileType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        title: 'profile_type',
        description:
          'The desired profile type (e.g., cpu, samples) for the returned flame graph. If omitted the first profile is returned.',
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
        description: 'Max nodes can be used to truncate the response.',
      }),
  })
  .openapi({ title: 'AdHocProfilesGetRequest', required: [] })
  .openapi('AdhocprofilesV1AdHocProfilesGetRequest')

const AdhocprofilesV1AdHocProfilesGetResponseSchema = z
  .strictObject({
    id: z.string().exactOptional().openapi({ title: 'id' }),
    name: z.string().exactOptional().openapi({ title: 'name' }),
    uploadedAt: z
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
        title: 'uploaded_at',
        description: 'timestamp in milliseconds',
      }),
    profileType: z.string().exactOptional().openapi({ title: 'profile_type' }),
    profileTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        title: 'profile_types',
        description:
          'Some profiles formats (like pprof) can contain multiple profile (sample) types inside. One of these can be passed\n in the Get request using the profile_type field.',
      }),
    flamebearerProfile: z.string().exactOptional().openapi({ title: 'flamebearer_profile' }),
  })
  .openapi({ title: 'AdHocProfilesGetResponse', required: [] })
  .openapi('AdhocprofilesV1AdHocProfilesGetResponse')

const AdhocprofilesV1AdHocProfilesListRequestSchema = z
  .strictObject({})
  .openapi({ title: 'AdHocProfilesListRequest' })
  .openapi('AdhocprofilesV1AdHocProfilesListRequest')

const AdhocprofilesV1AdHocProfilesProfileMetadataSchema = z
  .strictObject({
    id: z.string().exactOptional().openapi({ title: 'id' }),
    name: z.string().exactOptional().openapi({ title: 'name' }),
    uploadedAt: z
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
        title: 'uploaded_at',
        description: 'timestamp in milliseconds',
      }),
  })
  .openapi({ title: 'AdHocProfilesProfileMetadata', required: [] })
  .openapi('AdhocprofilesV1AdHocProfilesProfileMetadata')

const AdhocprofilesV1AdHocProfilesListResponseSchema = z
  .strictObject({
    profiles: z
      .array(AdhocprofilesV1AdHocProfilesProfileMetadataSchema)
      .exactOptional()
      .openapi({ title: 'profiles' }),
  })
  .openapi({ title: 'AdHocProfilesListResponse', required: [] })
  .openapi('AdhocprofilesV1AdHocProfilesListResponse')

const AdhocprofilesV1AdHocProfilesUploadRequestSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({
        title: 'name',
        description:
          'This is typically the file name and it serves as a human readable name for the profile.',
      }),
    profile: z
      .string()
      .exactOptional()
      .openapi({
        title: 'profile',
        description:
          'This is the profile encoded in base64. The supported formats are pprof, json, collapsed and perf-script.',
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
        description: 'Max nodes can be used to truncate the response.',
      }),
  })
  .openapi({ title: 'AdHocProfilesUploadRequest', required: [] })
  .openapi('AdhocprofilesV1AdHocProfilesUploadRequest')

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

export const postAdhocprofilesV1AdHocProfileServiceDiffRoute = createRoute({
  method: 'post',
  path: '/adhocprofiles.v1.AdHocProfileService/Diff',
  tags: ['adhocprofiles.v1.AdHocProfileService'],
  summary: 'Computes a diff flamegraph from two previously uploaded profiles.',
  description: 'Computes a diff flamegraph from two previously uploaded profiles.',
  operationId: 'adhocprofiles.v1.AdHocProfileService.Diff',
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
      content: { 'application/json': { schema: AdhocprofilesV1AdHocProfilesDiffRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdhocprofilesV1AdHocProfilesDiffResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postAdhocprofilesV1AdHocProfileServiceGetRoute = createRoute({
  method: 'post',
  path: '/adhocprofiles.v1.AdHocProfileService/Get',
  tags: ['adhocprofiles.v1.AdHocProfileService'],
  summary:
    'Retrieves a profile from the underlying store by id and an optional sample type. The response is similar to the one  for the upload method.',
  description:
    'Retrieves a profile from the underlying store by id and an optional sample type. The response is similar to the one\n for the upload method.',
  operationId: 'adhocprofiles.v1.AdHocProfileService.Get',
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
      content: { 'application/json': { schema: AdhocprofilesV1AdHocProfilesGetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdhocprofilesV1AdHocProfilesGetResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postAdhocprofilesV1AdHocProfileServiceListRoute = createRoute({
  method: 'post',
  path: '/adhocprofiles.v1.AdHocProfileService/List',
  tags: ['adhocprofiles.v1.AdHocProfileService'],
  summary: 'Retrieves a list of profiles found in the underlying store.',
  description: 'Retrieves a list of profiles found in the underlying store.',
  operationId: 'adhocprofiles.v1.AdHocProfileService.List',
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
      content: { 'application/json': { schema: AdhocprofilesV1AdHocProfilesListRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdhocprofilesV1AdHocProfilesListResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postAdhocprofilesV1AdHocProfileServiceUploadRoute = createRoute({
  method: 'post',
  path: '/adhocprofiles.v1.AdHocProfileService/Upload',
  tags: ['adhocprofiles.v1.AdHocProfileService'],
  summary:
    'Upload a profile to the underlying store. The request contains a name and a base64 encoded pprof file. The response  contains a generated unique identifier, a flamegraph and a list of found sample types within the profile.',
  description:
    'Upload a profile to the underlying store. The request contains a name and a base64 encoded pprof file. The response\n contains a generated unique identifier, a flamegraph and a list of found sample types within the profile.',
  operationId: 'adhocprofiles.v1.AdHocProfileService.Upload',
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
      content: { 'application/json': { schema: AdhocprofilesV1AdHocProfilesUploadRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AdhocprofilesV1AdHocProfilesGetResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

import { createRoute, z } from '@hono/zod-openapi'

const GoogleProtobufAnySchema = z
  .looseObject({
    type: z.string().exactOptional(),
    value: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
  })
  .openapi({
    description:
      'Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.',
    required: [],
  })
  .openapi('GoogleProtobufAny')

const GoogleApiHttpBodySchema = z
  .strictObject({
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        title: 'content_type',
        description: 'The HTTP Content-Type header value specifying the content type of the body.',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({ title: 'data', description: 'The HTTP request/response body as raw binary.' }),
    extensions: z
      .array(GoogleProtobufAnySchema)
      .exactOptional()
      .openapi({
        title: 'extensions',
        description:
          'Application specific response metadata. Must be set in the first response\n for streaming APIs.',
      }),
  })
  .openapi({
    title: 'HttpBody',
    description:
      "Message that represents an arbitrary HTTP body. It should only be used for\n payload formats that can't be represented as JSON, such as raw binary or\n an HTML page.\n\n\n This message can be used both in streaming and non-streaming API methods in\n the request as well as the response.\n\n It can be used as a top-level request field, which is convenient if one\n wants to extract parameters from either the URL or HTTP template into the\n request fields and also want access to the raw HTTP body.\n\n Example:\n\n     message GetResourceRequest {\n       // A unique request id.\n       string request_id = 1;\n\n       // The raw HTTP body is bound to this field.\n       google.api.HttpBody http_body = 2;\n\n     }\n\n     service ResourceService {\n       rpc GetResource(GetResourceRequest)\n         returns (google.api.HttpBody);\n       rpc UpdateResource(google.api.HttpBody)\n         returns (google.protobuf.Empty);\n\n     }\n\n Example with streaming methods:\n\n     service CaldavService {\n       rpc GetCalendar(stream google.api.HttpBody)\n         returns (stream google.api.HttpBody);\n       rpc UpdateCalendar(stream google.api.HttpBody)\n         returns (stream google.api.HttpBody);\n\n     }\n\n Use of this type only changes how the request and response bodies are\n handled, all other features will continue to work unchanged.",
    required: [],
  })
  .openapi('GoogleApiHttpBody')

const StatusV1GetBuildInfoDataSchema = z
  .strictObject({
    version: z.string().exactOptional().openapi({ title: 'version' }),
    revision: z.string().exactOptional().openapi({ title: 'revision' }),
    branch: z.string().exactOptional().openapi({ title: 'branch' }),
    buildUser: z.string().exactOptional().openapi({ title: 'build_user' }),
    buildDate: z.string().exactOptional().openapi({ title: 'build_date' }),
    goVersion: z.string().exactOptional().openapi({ title: 'go_version' }),
  })
  .openapi({ title: 'GetBuildInfoData', required: [] })
  .openapi('StatusV1GetBuildInfoData')

const StatusV1GetBuildInfoRequestSchema = z
  .strictObject({})
  .openapi({ title: 'GetBuildInfoRequest' })
  .openapi('StatusV1GetBuildInfoRequest')

const StatusV1GetBuildInfoResponseSchema = z
  .strictObject({
    status: z.string().exactOptional().openapi({ title: 'status' }),
    data: StatusV1GetBuildInfoDataSchema.exactOptional().openapi({ title: 'data' }),
  })
  .openapi({ title: 'GetBuildInfoResponse', required: [] })
  .openapi('StatusV1GetBuildInfoResponse')

const StatusV1GetConfigRequestSchema = z
  .strictObject({})
  .openapi({ title: 'GetConfigRequest' })
  .openapi('StatusV1GetConfigRequest')

export const getApiV1StatusBuildinfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/status/buildinfo',
  tags: ['status.v1.StatusService'],
  summary: 'GetBuildInfo',
  description: 'Retrieve build information about the binary',
  operationId: 'status.v1.StatusService.GetBuildInfo',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StatusV1GetBuildInfoResponseSchema } },
    },
  },
})

export const getApiV1StatusConfigRoute = createRoute({
  method: 'get',
  path: '/api/v1/status/config',
  tags: ['status.v1.StatusService'],
  summary: 'GetConfig',
  description: 'Retrieve the running config',
  operationId: 'status.v1.StatusService.GetConfig',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GoogleApiHttpBodySchema } },
    },
  },
})

export const getApiV1StatusConfigDefaultRoute = createRoute({
  method: 'get',
  path: '/api/v1/status/config/default',
  tags: ['status.v1.StatusService'],
  summary: 'GetDefaultConfig',
  operationId: 'status.v1.StatusService.GetDefaultConfig',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GoogleApiHttpBodySchema } },
    },
  },
})

export const getApiV1StatusConfigDiffRoute = createRoute({
  method: 'get',
  path: '/api/v1/status/config/diff',
  tags: ['status.v1.StatusService'],
  summary: 'GetDiffConfig',
  description: 'Retrieve the diff config to the defaults',
  operationId: 'status.v1.StatusService.GetDiffConfig',
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GoogleApiHttpBodySchema } },
    },
  },
})

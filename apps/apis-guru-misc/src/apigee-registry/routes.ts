import { createRoute, z } from '@hono/zod-openapi'

const ApiSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.',
      }),
    availability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g. "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".',
      }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Output only. Creation timestamp.', readOnly: true }),
    description: z.string().exactOptional().openapi({ description: 'A detailed description.' }),
    displayName: z.string().exactOptional().openapi({ description: 'Human-meaningful name.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Resource name.' }),
    recommendedDeployment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The recommended deployment of the API. Format: apis/{api}/deployments/{deployment}',
      }),
    recommendedVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The recommended version of the API. Format: apis/{api}/versions/{version}',
      }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Output only. Last update timestamp.', readOnly: true }),
  })
  .openapi({
    description:
      'An Api is a top-level description of an API. Apis are produced by producers and are commitments to provide services.',
    required: [],
  })
  .openapi('Api')

const ApiDeploymentSchema = z
  .object({
    accessGuidance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.',
      }),
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.',
      }),
    apiSpecRevision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full resource name (including revision id) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: apis/{api}/deployments/{deployment}',
      }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Output only. Creation timestamp; when the deployment resource was created.',
        readOnly: true,
      }),
    description: z.string().exactOptional().openapi({ description: 'A detailed description.' }),
    displayName: z.string().exactOptional().openapi({ description: 'Human-meaningful name.' }),
    endpointUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The address where the deployment is serving. Changes to this value will update the revision.',
      }),
    externalChannelUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The address of the external channel of the API (e.g. the Developer Portal). Changes to this value will not affect the revision.',
      }),
    intendedAudience: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Resource name.' }),
    revisionCreateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Output only. Revision creation timestamp; when the represented revision was created.',
        readOnly: true,
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The revision ID of the deployment. A new revision is committed whenever the deployment contents are changed. The format is an 8-character hexadecimal string.',
        readOnly: true,
      }),
    revisionUpdateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Output only. Last update timestamp: when the represented revision was last modified.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An ApiDeployment describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.',
    required: [],
  })
  .openapi('ApiDeployment')

const ApiSpecSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.',
      }),
    contents: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.',
        writeOnly: true,
      }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Output only. Creation timestamp; when the spec resource was created.',
        readOnly: true,
      }),
    description: z.string().exactOptional().openapi({ description: 'A detailed description.' }),
    filename: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A possibly-hierarchical name used to refer to the spec from other specs.',
      }),
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. A SHA-256 hash of the spec's contents. If the spec is gzipped, this is the hash of the uncompressed spec.",
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.',
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A style (format) descriptor for this spec that is specified as a Media Type (https://en.wikipedia.org/wiki/Media_type). Possible values include "application/vnd.apigee.proto", "application/vnd.apigee.openapi", and "application/vnd.apigee.graphql", with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").',
      }),
    name: z.string().exactOptional().openapi({ description: 'Resource name.' }),
    revisionCreateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Output only. Revision creation timestamp; when the represented revision was created.',
        readOnly: true,
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The revision ID of the spec. A new revision is committed whenever the spec contents are changed. The format is an 8-character hexadecimal string.',
        readOnly: true,
      }),
    revisionUpdateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Output only. Last update timestamp: when the represented revision was last modified.',
        readOnly: true,
      }),
    sizeBytes: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The size of the spec file in bytes. If the spec is gzipped, this is the size of the uncompressed spec.',
        readOnly: true,
      }),
    sourceUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved.',
      }),
  })
  .openapi({
    description:
      'An ApiSpec describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g. in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.',
    required: [],
  })
  .openapi('ApiSpec')

const ApiVersionSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.',
      }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Output only. Creation timestamp.', readOnly: true }),
    description: z.string().exactOptional().openapi({ description: 'A detailed description.' }),
    displayName: z.string().exactOptional().openapi({ description: 'Human-meaningful name.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "apigeeregistry.googleapis.com/" and cannot be changed.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Resource name.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g. "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED".',
      }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Output only. Last update timestamp.', readOnly: true }),
  })
  .openapi({
    description:
      'An ApiVersion describes a particular version of an API. ApiVersions are what consumers actually use.',
    required: [],
  })
  .openapi('ApiVersion')

const ArtifactSchema = z
  .object({
    contents: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.',
        writeOnly: true,
      }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Output only. Creation timestamp.', readOnly: true }),
    hash: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact.",
        readOnly: true,
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").',
      }),
    name: z.string().exactOptional().openapi({ description: 'Resource name.' }),
    sizeBytes: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.',
        readOnly: true,
      }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Output only. Last update timestamp.', readOnly: true }),
  })
  .openapi({
    description:
      'Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e. not for display in primary views of the resource but perhaps displayed or downloaded upon request. The ListArtifacts method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.',
    required: [],
  })
  .openapi('Artifact')

const GoogleProtobufAnySchema = z
  .looseObject({
    '@type': z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the serialized message.' }),
  })
  .openapi({
    description:
      'Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.',
    required: [],
  })
  .openapi('GoogleProtobufAny')

const ListApiDeploymentRevisionsResponseSchema = z
  .object({
    apiDeployments: z
      .array(ApiDeploymentSchema)
      .exactOptional()
      .openapi({ description: 'The revisions of the deployment.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({
    description: 'Response message for ListApiDeploymentRevisionsResponse.',
    required: [],
  })
  .openapi('ListApiDeploymentRevisionsResponse')

const ListApiDeploymentsResponseSchema = z
  .object({
    apiDeployments: z
      .array(ApiDeploymentSchema)
      .exactOptional()
      .openapi({ description: 'The deployments from the specified publisher.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListApiDeployments.', required: [] })
  .openapi('ListApiDeploymentsResponse')

const ListApiSpecRevisionsResponseSchema = z
  .object({
    apiSpecs: z
      .array(ApiSpecSchema)
      .exactOptional()
      .openapi({ description: 'The revisions of the spec.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListApiSpecRevisionsResponse.', required: [] })
  .openapi('ListApiSpecRevisionsResponse')

const ListApiSpecsResponseSchema = z
  .object({
    apiSpecs: z
      .array(ApiSpecSchema)
      .exactOptional()
      .openapi({ description: 'The specs from the specified publisher.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListApiSpecs.', required: [] })
  .openapi('ListApiSpecsResponse')

const ListApiVersionsResponseSchema = z
  .object({
    apiVersions: z
      .array(ApiVersionSchema)
      .exactOptional()
      .openapi({ description: 'The versions from the specified publisher.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListApiVersions.', required: [] })
  .openapi('ListApiVersionsResponse')

const ListApisResponseSchema = z
  .object({
    apis: z
      .array(ApiSchema)
      .exactOptional()
      .openapi({ description: 'The APIs from the specified publisher.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListApis.', required: [] })
  .openapi('ListApisResponse')

const ListArtifactsResponseSchema = z
  .object({
    artifacts: z
      .array(ArtifactSchema)
      .exactOptional()
      .openapi({ description: 'The artifacts from the specified publisher.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListArtifacts.', required: [] })
  .openapi('ListArtifactsResponse')

const RollbackApiDeploymentRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'Required. The deployment being rolled back.' }),
    revisionId: z
      .string()
      .openapi({
        description:
          'Required. The revision ID to roll back to. It must be a revision of the same deployment.   Example: c7cfa2a8',
      }),
  })
  .openapi({
    description: 'Request message for RollbackApiDeployment.',
    required: ['name', 'revisionId'],
  })
  .openapi('RollbackApiDeploymentRequest')

const RollbackApiSpecRequestSchema = z
  .object({
    name: z.string().openapi({ description: 'Required. The spec being rolled back.' }),
    revisionId: z
      .string()
      .openapi({
        description:
          'Required. The revision ID to roll back to. It must be a revision of the same spec.   Example: c7cfa2a8',
      }),
  })
  .openapi({
    description: 'Request message for RollbackApiSpec.',
    required: ['name', 'revisionId'],
  })
  .openapi('RollbackApiSpecRequest')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].',
      }),
    details: z
      .array(GoogleProtobufAnySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details.  There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const TagApiDeploymentRevisionRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'Required. The name of the deployment to be tagged, including the revision ID.',
      }),
    tag: z
      .string()
      .openapi({
        description:
          'Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.',
      }),
  })
  .openapi({
    description: 'Request message for TagApiDeploymentRevision.',
    required: ['name', 'tag'],
  })
  .openapi('TagApiDeploymentRevisionRequest')

const TagApiSpecRevisionRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'Required. The name of the spec to be tagged, including the revision ID.',
      }),
    tag: z
      .string()
      .openapi({
        description:
          'Required. The tag to apply. The tag should be at most 40 characters, and match `[a-z][a-z0-9-]{3,39}`.',
      }),
  })
  .openapi({ description: 'Request message for TagApiSpecRevision.', required: ['name', 'tag'] })
  .openapi('TagApiSpecRevisionRequest')

export const getV1ProjectsProjectLocationsLocationApisRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project}/locations/{location}/apis',
  tags: ['Registry'],
  description: 'ListApis returns matching APIs.',
  operationId: 'Registry_ListApis',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of APIs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApis` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ListApisResponseSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postV1ProjectsProjectLocationsLocationApisRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project}/locations/{location}/apis',
  tags: ['Registry'],
  description: 'CreateApi creates a specified API.',
  operationId: 'Registry_CreateApi',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      apiId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the api, which will become the final component of the api's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.",
            in: 'query',
            name: 'apiId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getV1ProjectsProjectLocationsLocationApisApiRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}',
  tags: ['Registry'],
  description: 'GetApi returns a specified API.',
  operationId: 'Registry_GetApi',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteV1ProjectsProjectLocationsLocationApisApiRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}',
  tags: ['Registry'],
  description: 'DeleteApi removes a specified API and all of the resources that it\n owns.',
  operationId: 'Registry_DeleteApi',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchV1ProjectsProjectLocationsLocationApisApiRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}',
  tags: ['Registry'],
  description: 'UpdateApi can be used to modify a specified API.',
  operationId: 'Registry_UpdateApi',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.',
            in: 'query',
            name: 'updateMask',
            schema: { format: 'field-mask', type: 'string' },
            required: false,
          },
        }),
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, and the api is not found, a new api_versions will be created. In this situation, `update_mask` is ignored.',
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getV1ProjectsProjectLocationsLocationApisApiDeploymentsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}/deployments',
  tags: ['Registry'],
  description: 'ListApiDeployments returns matching deployments.',
  operationId: 'Registry_ListApiDeployments',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListApiDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiDeployments` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListApiDeploymentsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postV1ProjectsProjectLocationsLocationApisApiDeploymentsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}/deployments',
  tags: ['Registry'],
  description: 'CreateApiDeployment creates a specified deployment.',
  operationId: 'Registry_CreateApiDeployment',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      apiDeploymentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the deployment, which will become the final component of the deployment's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.",
            in: 'query',
            name: 'apiDeploymentId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiDeploymentSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiDeploymentSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}',
  tags: ['Registry'],
  description: 'GetApiDeployment returns a specified deployment.',
  operationId: 'Registry_GetApiDeployment',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deployment: z
        .string()
        .openapi({
          param: {
            description: 'The deployment id.',
            in: 'path',
            name: 'deployment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiDeploymentSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRoute =
  createRoute({
    method: 'delete',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}',
    tags: ['Registry'],
    description:
      'DeleteApiDeployment removes a specified deployment, all revisions, and all\n child resources (e.g. artifacts).',
    operationId: 'Registry_DeleteApiDeployment',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The deployment id.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        force: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)',
              in: 'query',
              name: 'force',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: {} },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const patchV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRoute = createRoute(
  {
    method: 'patch',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}',
    tags: ['Registry'],
    description: 'UpdateApiDeployment can be used to modify a specified deployment.',
    operationId: 'Registry_UpdateApiDeployment',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The deployment id.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        updateMask: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.',
              in: 'query',
              name: 'updateMask',
              schema: { format: 'field-mask', type: 'string' },
              required: false,
            },
          }),
        allowMissing: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'If set to true, and the deployment is not found, a new deployment will be created. In this situation, `update_mask` is ignored.',
              in: 'query',
              name: 'allowMissing',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ApiDeploymentSchema } }, required: true },
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: ApiDeploymentSchema } } },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  },
)

export const deleteV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentDeleteRevisionRoute =
  createRoute({
    method: 'delete',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:deleteRevision',
    tags: ['Registry'],
    description: 'DeleteApiDeploymentRevision deletes a revision of a deployment.',
    operationId: 'Registry_DeleteApiDeploymentRevision',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The deployment id.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: ApiDeploymentSchema } } },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentListRevisionsRoute =
  createRoute({
    method: 'get',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:listRevisions',
    tags: ['Registry'],
    description:
      'ListApiDeploymentRevisions lists all revisions of a deployment.\n Revisions are returned in descending order of revision creation time.',
    operationId: 'Registry_ListApiDeploymentRevisions',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The deployment id.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        pageSize: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .exactOptional()
          .openapi({
            param: {
              description: 'The maximum number of revisions to return per page.',
              in: 'query',
              name: 'pageSize',
              schema: { format: 'int32', type: 'integer' },
              required: false,
            },
          }),
        pageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The page token, received from a previous ListApiDeploymentRevisions call. Provide this to retrieve the subsequent page.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ListApiDeploymentRevisionsResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentRollbackRoute =
  createRoute({
    method: 'post',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:rollback',
    tags: ['Registry'],
    description:
      'RollbackApiDeployment sets the current revision to a specified prior\n revision. Note that this creates a new revision with a new revision ID.',
    operationId: 'Registry_RollbackApiDeployment',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The deployment id.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RollbackApiDeploymentRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: ApiDeploymentSchema } } },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postV1ProjectsProjectLocationsLocationApisApiDeploymentsDeploymentTagRevisionRoute =
  createRoute({
    method: 'post',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/deployments/{deployment}:tagRevision',
    tags: ['Registry'],
    description: 'TagApiDeploymentRevision adds a tag to a specified revision of a\n deployment.',
    operationId: 'Registry_TagApiDeploymentRevision',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        deployment: z
          .string()
          .openapi({
            param: {
              description: 'The deployment id.',
              in: 'path',
              name: 'deployment',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: TagApiDeploymentRevisionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: ApiDeploymentSchema } } },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getV1ProjectsProjectLocationsLocationApisApiVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions',
  tags: ['Registry'],
  description: 'ListApiVersions returns matching versions.',
  operationId: 'Registry_ListApiVersions',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListApiVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiVersions` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListApiVersionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postV1ProjectsProjectLocationsLocationApisApiVersionsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions',
  tags: ['Registry'],
  description: 'CreateApiVersion creates a specified version.',
  operationId: 'Registry_CreateApiVersion',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      apiVersionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the version, which will become the final component of the version's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.",
            in: 'query',
            name: 'apiVersionId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiVersionSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiVersionSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getV1ProjectsProjectLocationsLocationApisApiVersionsVersionRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}',
  tags: ['Registry'],
  description: 'GetApiVersion returns a specified version.',
  operationId: 'Registry_GetApiVersion',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The version id.',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiVersionSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}',
  tags: ['Registry'],
  description:
    'DeleteApiVersion removes a specified version and all of the resources that\n it owns.',
  operationId: 'Registry_DeleteApiVersion',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The version id.',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchV1ProjectsProjectLocationsLocationApisApiVersionsVersionRoute = createRoute({
  method: 'patch',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}',
  tags: ['Registry'],
  description: 'UpdateApiVersion can be used to modify a specified version.',
  operationId: 'Registry_UpdateApiVersion',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The version id.',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.',
            in: 'query',
            name: 'updateMask',
            schema: { format: 'field-mask', type: 'string' },
            required: false,
          },
        }),
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, and the version is not found, a new version will be created. In this situation, `update_mask` is ignored.',
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiVersionSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiVersionSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs',
  tags: ['Registry'],
  description: 'ListApiSpecs returns matching specs.',
  operationId: 'Registry_ListApiSpecs',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The version id.',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListApiSpecs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiSpecs` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListApiSpecsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs',
  tags: ['Registry'],
  description: 'CreateApiSpec creates a specified spec.',
  operationId: 'Registry_CreateApiSpec',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      api: z
        .string()
        .openapi({
          param: {
            description: 'The api id.',
            in: 'path',
            name: 'api',
            required: true,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .openapi({
          param: {
            description: 'The version id.',
            in: 'path',
            name: 'version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      apiSpecId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the spec, which will become the final component of the spec's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.",
            in: 'query',
            name: 'apiSpecId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApiSpecSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ApiSpecSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRoute =
  createRoute({
    method: 'get',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}',
    tags: ['Registry'],
    description: 'GetApiSpec returns a specified spec.',
    operationId: 'Registry_GetApiSpec',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        version: z
          .string()
          .openapi({
            param: {
              description: 'The version id.',
              in: 'path',
              name: 'version',
              required: true,
              schema: { type: 'string' },
            },
          }),
        spec: z
          .string()
          .openapi({
            param: {
              description: 'The spec id.',
              in: 'path',
              name: 'spec',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: ApiSpecSchema } } },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const deleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRoute =
  createRoute({
    method: 'delete',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}',
    tags: ['Registry'],
    description:
      'DeleteApiSpec removes a specified spec, all revisions, and all child\n resources (e.g. artifacts).',
    operationId: 'Registry_DeleteApiSpec',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        version: z
          .string()
          .openapi({
            param: {
              description: 'The version id.',
              in: 'path',
              name: 'version',
              required: true,
              schema: { type: 'string' },
            },
          }),
        spec: z
          .string()
          .openapi({
            param: {
              description: 'The spec id.',
              in: 'path',
              name: 'spec',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        force: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)',
              in: 'query',
              name: 'force',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: {} },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const patchV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRoute =
  createRoute({
    method: 'patch',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}',
    tags: ['Registry'],
    description: 'UpdateApiSpec can be used to modify a specified spec.',
    operationId: 'Registry_UpdateApiSpec',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        version: z
          .string()
          .openapi({
            param: {
              description: 'The version id.',
              in: 'path',
              name: 'version',
              required: true,
              schema: { type: 'string' },
            },
          }),
        spec: z
          .string()
          .openapi({
            param: {
              description: 'The spec id.',
              in: 'path',
              name: 'spec',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        updateMask: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.',
              in: 'query',
              name: 'updateMask',
              schema: { format: 'field-mask', type: 'string' },
              required: false,
            },
          }),
        allowMissing: z
          .stringbool()
          .exactOptional()
          .openapi({
            param: {
              description:
                'If set to true, and the spec is not found, a new spec will be created. In this situation, `update_mask` is ignored.',
              in: 'query',
              name: 'allowMissing',
              schema: { type: 'boolean' },
              required: false,
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ApiSpecSchema } }, required: true },
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: ApiSpecSchema } } },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const deleteV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecDeleteRevisionRoute =
  createRoute({
    method: 'delete',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:deleteRevision',
    tags: ['Registry'],
    description: 'DeleteApiSpecRevision deletes a revision of a spec.',
    operationId: 'Registry_DeleteApiSpecRevision',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        version: z
          .string()
          .openapi({
            param: {
              description: 'The version id.',
              in: 'path',
              name: 'version',
              required: true,
              schema: { type: 'string' },
            },
          }),
        spec: z
          .string()
          .openapi({
            param: {
              description: 'The spec id.',
              in: 'path',
              name: 'spec',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: ApiSpecSchema } } },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecGetContentsRoute =
  createRoute({
    method: 'get',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:getContents',
    tags: ['Registry'],
    description:
      'GetApiSpecContents returns the contents of a specified spec.\n If specs are stored with GZip compression, the default behavior\n is to return the spec uncompressed (the mime_type response field\n indicates the exact format returned).',
    operationId: 'Registry_GetApiSpecContents',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        version: z
          .string()
          .openapi({
            param: {
              description: 'The version id.',
              in: 'path',
              name: 'version',
              required: true,
              schema: { type: 'string' },
            },
          }),
        spec: z
          .string()
          .openapi({
            param: {
              description: 'The spec id.',
              in: 'path',
              name: 'spec',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: { description: 'OK', content: {} },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecListRevisionsRoute =
  createRoute({
    method: 'get',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:listRevisions',
    tags: ['Registry'],
    description:
      'ListApiSpecRevisions lists all revisions of a spec.\n Revisions are returned in descending order of revision creation time.',
    operationId: 'Registry_ListApiSpecRevisions',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        version: z
          .string()
          .openapi({
            param: {
              description: 'The version id.',
              in: 'path',
              name: 'version',
              required: true,
              schema: { type: 'string' },
            },
          }),
        spec: z
          .string()
          .openapi({
            param: {
              description: 'The spec id.',
              in: 'path',
              name: 'spec',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        pageSize: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .exactOptional()
          .openapi({
            param: {
              description: 'The maximum number of revisions to return per page.',
              in: 'query',
              name: 'pageSize',
              schema: { format: 'int32', type: 'integer' },
              required: false,
            },
          }),
        pageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'The page token, received from a previous ListApiSpecRevisions call. Provide this to retrieve the subsequent page.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK',
        content: { 'application/json': { schema: ListApiSpecRevisionsResponseSchema } },
      },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecRollbackRoute =
  createRoute({
    method: 'post',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:rollback',
    tags: ['Registry'],
    description:
      'RollbackApiSpec sets the current revision to a specified prior revision.\n Note that this creates a new revision with a new revision ID.',
    operationId: 'Registry_RollbackApiSpec',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        version: z
          .string()
          .openapi({
            param: {
              description: 'The version id.',
              in: 'path',
              name: 'version',
              required: true,
              schema: { type: 'string' },
            },
          }),
        spec: z
          .string()
          .openapi({
            param: {
              description: 'The spec id.',
              in: 'path',
              name: 'spec',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RollbackApiSpecRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: ApiSpecSchema } } },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const postV1ProjectsProjectLocationsLocationApisApiVersionsVersionSpecsSpecTagRevisionRoute =
  createRoute({
    method: 'post',
    path: '/v1/projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}:tagRevision',
    tags: ['Registry'],
    description: 'TagApiSpecRevision adds a tag to a specified revision of a spec.',
    operationId: 'Registry_TagApiSpecRevision',
    request: {
      params: z.object({
        project: z
          .string()
          .openapi({
            param: {
              description: 'The project id.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        location: z
          .string()
          .openapi({
            param: {
              description: 'The location id.',
              in: 'path',
              name: 'location',
              required: true,
              schema: { type: 'string' },
            },
          }),
        api: z
          .string()
          .openapi({
            param: {
              description: 'The api id.',
              in: 'path',
              name: 'api',
              required: true,
              schema: { type: 'string' },
            },
          }),
        version: z
          .string()
          .openapi({
            param: {
              description: 'The version id.',
              in: 'path',
              name: 'version',
              required: true,
              schema: { type: 'string' },
            },
          }),
        spec: z
          .string()
          .openapi({
            param: {
              description: 'The spec id.',
              in: 'path',
              name: 'spec',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: TagApiSpecRevisionRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: { description: 'OK', content: { 'application/json': { schema: ApiSpecSchema } } },
      default: {
        description: 'Default error response',
        content: { 'application/json': { schema: StatusSchema } },
      },
    },
  })

export const getV1ProjectsProjectLocationsLocationArtifactsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project}/locations/{location}/artifacts',
  tags: ['Registry'],
  description: 'ListArtifacts returns matching artifacts.',
  operationId: 'Registry_ListArtifacts',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListArtifactsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postV1ProjectsProjectLocationsLocationArtifactsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{project}/locations/{location}/artifacts',
  tags: ['Registry'],
  description: 'CreateArtifact creates a specified artifact.',
  operationId: 'Registry_CreateArtifact',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      artifactId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.",
            in: 'query',
            name: 'artifactId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ArtifactSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ArtifactSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getV1ProjectsProjectLocationsLocationArtifactsArtifactRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project}/locations/{location}/artifacts/{artifact}',
  tags: ['Registry'],
  description: 'GetArtifact returns a specified artifact.',
  operationId: 'Registry_GetArtifact',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      artifact: z
        .string()
        .openapi({
          param: {
            description: 'The artifact id.',
            in: 'path',
            name: 'artifact',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ArtifactSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const putV1ProjectsProjectLocationsLocationArtifactsArtifactRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{project}/locations/{location}/artifacts/{artifact}',
  tags: ['Registry'],
  description: 'ReplaceArtifact can be used to replace a specified artifact.',
  operationId: 'Registry_ReplaceArtifact',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      artifact: z
        .string()
        .openapi({
          param: {
            description: 'The artifact id.',
            in: 'path',
            name: 'artifact',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ArtifactSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ArtifactSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteV1ProjectsProjectLocationsLocationArtifactsArtifactRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{project}/locations/{location}/artifacts/{artifact}',
  tags: ['Registry'],
  description: 'DeleteArtifact removes a specified artifact.',
  operationId: 'Registry_DeleteArtifact',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      artifact: z
        .string()
        .openapi({
          param: {
            description: 'The artifact id.',
            in: 'path',
            name: 'artifact',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getV1ProjectsProjectLocationsLocationArtifactsArtifactGetContentsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{project}/locations/{location}/artifacts/{artifact}:getContents',
  tags: ['Registry'],
  description:
    'GetArtifactContents returns the contents of a specified artifact.\n If artifacts are stored with GZip compression, the default behavior\n is to return the artifact uncompressed (the mime_type response field\n indicates the exact format returned).',
  operationId: 'Registry_GetArtifactContents',
  request: {
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'The project id.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'The location id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      artifact: z
        .string()
        .openapi({
          param: {
            description: 'The artifact id.',
            in: 'path',
            name: 'artifact',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

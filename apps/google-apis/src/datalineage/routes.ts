import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequestSchema = z
  .object({
    links: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. An array of links to check for their associated LineageProcesses. The maximum number of items in this array is 100. If the request contains more than 100 links, it returns the `INVALID_ARGUMENT` error. Format: `projects/{project}/locations/{location}/links/{link}`.',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of processes to return in a single page of the response. A page may contain fewer results than this value.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token received from a previous `BatchSearchLinkProcesses` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request.',
      }),
  })
  .openapi({ description: 'Request message for BatchSearchLinkProcesses.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest')

const GoogleCloudDatacatalogLineageV1ProcessLinkInfoSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end of the last event establishing this link-process tuple.' }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the link in the format of `projects/{project}/locations/{location}/links/{link}`.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The start of the first event establishing this link-process tuple.',
      }),
  })
  .openapi({ description: 'Link details.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1ProcessLinkInfo')

const GoogleCloudDatacatalogLineageV1ProcessLinksSchema = z
  .object({
    links: z
      .array(GoogleCloudDatacatalogLineageV1ProcessLinkInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'An array containing link details objects of the links provided in the original request. A single process can result in creating multiple links. If any of the links you provide in the request are created by the same process, they all are included in this array.',
      }),
    process: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The process name in the format of `projects/{project}/locations/{location}/processes/{process}`.',
      }),
  })
  .openapi({ description: 'Links associated with a specific process.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1ProcessLinks')

const GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response.',
      }),
    processLinks: z
      .array(GoogleCloudDatacatalogLineageV1ProcessLinksSchema)
      .exactOptional()
      .openapi({ description: 'An array of processes associated with the specified links.' }),
  })
  .openapi({ description: 'Response message for BatchSearchLinkProcesses.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse')

const GoogleCloudDatacatalogLineageV1EntityReferenceSchema = z
  .object({
    fullyQualifiedName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Fully Qualified Name of the entity. Useful for referencing entities that aren't represented as Google Cloud resources, for example, tables in Dataproc Metastore API. Examples: * `bigquery:dataset.project_id.dataset_id` * `bigquery:table.project_id.dataset_id.table_id` * `pubsub:project_id.topic_id` * `dataproc_metastore:projectId.locationId.instanceId.databaseId.tableId`",
      }),
  })
  .openapi({
    description: 'The soft reference to everything you can attach a lineage event to.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogLineageV1EntityReference')

const GoogleCloudDatacatalogLineageV1EventLinkSchema = z
  .object({
    source: GoogleCloudDatacatalogLineageV1EntityReferenceSchema.exactOptional().openapi({
      description: 'Required. Reference to the source entity',
    }),
    target: GoogleCloudDatacatalogLineageV1EntityReferenceSchema.exactOptional().openapi({
      description: 'Required. Reference to the target entity',
    }),
  })
  .openapi({ description: 'A lineage between source and target entities.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1EventLink')

const GoogleCloudDatacatalogLineageV1LineageEventSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported.',
      }),
    links: z
      .array(GoogleCloudDatacatalogLineageV1EventLinkSchema)
      .exactOptional()
      .openapi({
        description: "Optional. List of source-target pairs. Can't contain more than 100 tuples.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the lineage event. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}/lineageEvents/{lineage_event}`. Can be specified or auto-assigned. {lineage_event} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported.',
      }),
  })
  .openapi({
    description:
      'A lineage event represents an operation on assets. Within the operation, the data flows from the source to the target defined in the links field.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogLineageV1LineageEvent')

const GoogleCloudDatacatalogLineageV1LinkSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end of the last event establishing this link.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The name of the link. Format: `projects/{project}/locations/{location}/links/{link}`.',
        readOnly: true,
      }),
    source: GoogleCloudDatacatalogLineageV1EntityReferenceSchema.exactOptional().openapi({
      description: 'The pointer to the entity that is the **source** of this link.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start of the first event establishing this link.' }),
    target: GoogleCloudDatacatalogLineageV1EntityReferenceSchema.exactOptional().openapi({
      description: 'The pointer to the entity that is the **target** of this link.',
    }),
  })
  .openapi({
    description:
      'Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are created when LineageEvents record data transformation between related assets.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogLineageV1Link')

const GoogleCloudDatacatalogLineageV1ListLineageEventsResponseSchema = z
  .object({
    lineageEvents: z
      .array(GoogleCloudDatacatalogLineageV1LineageEventSchema)
      .exactOptional()
      .openapi({ description: 'Lineage events from the specified project and location.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListLineageEvents.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1ListLineageEventsResponse')

const GoogleCloudDatacatalogLineageV1OriginSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the source_type isn\'t CUSTOM, the value of this field should be a Google Cloud resource name of the system, which reports lineage. The project and location parts of the resource name must match the project and location of the lineage resource being created. Examples: - `{source_type: COMPOSER, name: "projects/foo/locations/us/environments/bar"}` - `{source_type: BIGQUERY, name: "projects/foo/locations/eu"}` - `{source_type: CUSTOM, name: "myCustomIntegration"}`',
      }),
    sourceType: z
      .enum([
        'SOURCE_TYPE_UNSPECIFIED',
        'CUSTOM',
        'BIGQUERY',
        'DATA_FUSION',
        'COMPOSER',
        'LOOKER_STUDIO',
        'DATAPROC',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the source.' }),
  })
  .openapi({ description: 'Origin of a process.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1Origin')

const GoogleCloudDatacatalogLineageV1ProcessSchema = z
  .object({
    attributes: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Optional. The attributes of the process. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the process). Up to 100 attributes are allowed.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`',
      }),
    origin: GoogleCloudDatacatalogLineageV1OriginSchema.exactOptional().openapi({
      description: 'Optional. The origin of this process and its runs and lineage events.',
    }),
  })
  .openapi({
    description: 'A process is the definition of a data transformation operation.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogLineageV1Process')

const GoogleCloudDatacatalogLineageV1ListProcessesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.',
      }),
    processes: z
      .array(GoogleCloudDatacatalogLineageV1ProcessSchema)
      .exactOptional()
      .openapi({ description: 'The processes from the specified project and location.' }),
  })
  .openapi({ description: 'Response message for ListProcesses.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1ListProcessesResponse')

const GoogleCloudDatacatalogLineageV1RunSchema = z
  .object({
    attributes: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Optional. The attributes of the run. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the run). Up to 100 attributes are allowed.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A human-readable name you can set to display in a user interface. Must be not longer than 1024 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.`',
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The timestamp of the end of the run.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The timestamp of the start of the run.' }),
    state: z
      .enum(['UNKNOWN', 'STARTED', 'COMPLETED', 'FAILED', 'ABORTED'])
      .exactOptional()
      .openapi({ description: 'Required. The state of the run.' }),
  })
  .openapi({
    description: 'A lineage run represents an execution of a process that creates lineage events.',
    required: [],
  })
  .openapi('GoogleCloudDatacatalogLineageV1Run')

const GoogleCloudDatacatalogLineageV1ListRunsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.',
      }),
    runs: z
      .array(GoogleCloudDatacatalogLineageV1RunSchema)
      .exactOptional()
      .openapi({ description: 'The runs from the specified project and location.' }),
  })
  .openapi({ description: 'Response message for ListRuns.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1ListRunsResponse')

const GoogleCloudDatacatalogLineageV1OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp of the operation submission to the server.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp of the operation termination, regardless of its success. This field is unset if the operation is still ongoing.',
        readOnly: true,
      }),
    operationType: z
      .enum(['TYPE_UNSPECIFIED', 'DELETE'])
      .exactOptional()
      .openapi({
        description: 'Output only. The type of the operation being performed.',
        readOnly: true,
      }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The [relative name] (https://cloud.google.com//apis/design/resource_names#relative_resource_name) of the resource being operated on.',
        readOnly: true,
      }),
    resourceUuid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The UUID of the resource being operated on.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'RUNNING', 'SUCCEEDED', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'Output only. The current operation state.', readOnly: true }),
  })
  .openapi({ description: 'Metadata describing the operation.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1OperationMetadata')

const GoogleCloudDatacatalogLineageV1SearchLinksRequestSchema = z
  .object({
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of links to return in a single page of the response. A page may contain fewer links than this value. If unspecified, at most 10 links are returned. Maximum value is 100; values greater than 100 are reduced to 100.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The page token received from a previous `SearchLinksRequest` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request.',
      }),
    source: GoogleCloudDatacatalogLineageV1EntityReferenceSchema.exactOptional().openapi({
      description:
        'Optional. Send asset information in the **source** field to retrieve all links that lead from the specified asset to downstream assets.',
    }),
    target: GoogleCloudDatacatalogLineageV1EntityReferenceSchema.exactOptional().openapi({
      description:
        'Optional. Send asset information in the **target** field to retrieve all links that lead from upstream assets to the specified asset.',
    }),
  })
  .openapi({ description: 'Request message for SearchLinks.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1SearchLinksRequest')

const GoogleCloudDatacatalogLineageV1SearchLinksResponseSchema = z
  .object({
    links: z
      .array(GoogleCloudDatacatalogLineageV1LinkSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of links for a given asset. Can be empty if the asset has no relations of requested type (source or target).',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response.',
      }),
  })
  .openapi({ description: 'Response message for SearchLinks.', required: [] })
  .openapi('GoogleCloudDatacatalogLineageV1SearchLinksResponse')

const GoogleLongrunningCancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('GoogleLongrunningCancelOperationRequest')

const GoogleRpcStatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('GoogleLongrunningOperation')

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Gets details of a specified lineage event.',
  operationId: 'datalineage.projects.locations.processes.runs.lineageEvents.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the lineage event to get.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatacatalogLineageV1LineageEventSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Deletes the lineage event with the specified name.',
  operationId: 'datalineage.projects.locations.processes.runs.lineageEvents.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If set to true and the lineage event is not found, the request succeeds but the server doesn't perform any actions.",
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the lineage event to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Updates a run.',
  operationId: 'datalineage.projects.locations.processes.runs.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set to true and the run is not found, the request creates it.',
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of fields to update. Currently not used. The whole message is updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDatacatalogLineageV1RunSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogLineageV1RunSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'datalineage.projects.locations.operations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'datalineage.projects.locations.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleLongrunningCancelOperationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentLineageEventsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/lineageEvents',
  tags: ['projects'],
  description:
    'Lists lineage events in the given project and location. The list order is not defined.',
  operationId: 'datalineage.projects.locations.processes.runs.lineageEvents.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of lineage events to return. The service may return fewer events than this value. If unspecified, at most 50 events are returned. The maximum value is 100; values greater than 100 are cut to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The page token received from a previous `ListLineageEvents` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the run that owns the collection of lineage events to get.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDatacatalogLineageV1ListLineageEventsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentLineageEventsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/lineageEvents',
  tags: ['projects'],
  description: 'Creates a new lineage event.',
  operationId: 'datalineage.projects.locations.processes.runs.lineageEvents.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the run that should own the lineage event.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatacatalogLineageV1LineageEventSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatacatalogLineageV1LineageEventSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentProcessesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/processes',
  tags: ['projects'],
  description:
    'List processes in the given project and location. List order is descending by insertion time.',
  operationId: 'datalineage.projects.locations.processes.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of processes to return. The service may return fewer than this value. If unspecified, at most 50 processes are returned. The maximum value is 100; values greater than 100 are cut to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The page token received from a previous `ListProcesses` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project and its location that owns this collection of processes.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatacatalogLineageV1ListProcessesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentProcessesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/processes',
  tags: ['projects'],
  description: 'Creates a new process.',
  operationId: 'datalineage.projects.locations.processes.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project and its location that should own the process.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudDatacatalogLineageV1ProcessSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogLineageV1ProcessSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentRunsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/runs',
  tags: ['projects'],
  description:
    'Lists runs in the given project and location. List order is descending by `start_time`.',
  operationId: 'datalineage.projects.locations.processes.runs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of runs to return. The service may return fewer than this value. If unspecified, at most 50 runs are returned. The maximum value is 100; values greater than 100 are cut to 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The page token received from a previous `ListRuns` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of process that owns this collection of runs.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatacatalogLineageV1ListRunsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentRunsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/runs',
  tags: ['projects'],
  description: 'Creates a new run.',
  operationId: 'datalineage.projects.locations.processes.runs.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the process that should own the run.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudDatacatalogLineageV1RunSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudDatacatalogLineageV1RunSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentBatchSearchLinkProcessesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:batchSearchLinkProcesses',
  tags: ['projects'],
  description:
    'Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.',
  operationId: 'datalineage.projects.locations.batchSearchLinkProcesses',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The project and location where you want to search.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentSearchLinksRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:searchLinks',
  tags: ['projects'],
  description:
    'Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.',
  operationId: 'datalineage.projects.locations.searchLinks',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The project and location you want search in.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudDatacatalogLineageV1SearchLinksRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudDatacatalogLineageV1SearchLinksResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

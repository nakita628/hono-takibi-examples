import { createRoute, z } from '@hono/zod-openapi'

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GoogleFirestoreAdminV1CreateDatabaseMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata related to the create database operation.' })
  .openapi('GoogleFirestoreAdminV1CreateDatabaseMetadata')

const GoogleFirestoreAdminV1DeleteDatabaseMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata related to the delete database operation.' })
  .openapi('GoogleFirestoreAdminV1DeleteDatabaseMetadata')

const GoogleFirestoreAdminV1ProgressSchema = z
  .object({
    completedWork: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of work completed.' }),
    estimatedWork: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of work estimated.' }),
  })
  .openapi({
    description:
      'Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1Progress')

const GoogleFirestoreAdminV1RestoreDatabaseMetadataSchema = z
  .object({
    backup: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the backup restoring from.' }),
    database: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the database being restored to.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the restore finished, unset for ongoing restores.' }),
    operationState: z
      .enum([
        'OPERATION_STATE_UNSPECIFIED',
        'INITIALIZING',
        'PROCESSING',
        'CANCELLING',
        'FINALIZING',
        'SUCCESSFUL',
        'FAILED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'The operation state of the restore.' }),
    progressPercentage: GoogleFirestoreAdminV1ProgressSchema.exactOptional().openapi({
      description: 'How far along the restore is as an estimated percentage of remaining time.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the restore was started.' }),
  })
  .openapi({
    description: 'Metadata for the long-running operation from the RestoreDatabase request.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1RestoreDatabaseMetadata')

const GoogleFirestoreAdminV1UpdateDatabaseMetadataSchema = z
  .object({})
  .openapi({ description: 'Metadata related to the update database operation.' })
  .openapi('GoogleFirestoreAdminV1UpdateDatabaseMetadata')

const GoogleFirestoreAdminV1beta2ProgressSchema = z
  .object({
    completedWork: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of work completed.' }),
    estimatedWork: z
      .string()
      .exactOptional()
      .openapi({ description: 'The amount of work estimated.' }),
  })
  .openapi({
    description:
      'Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1beta2Progress')

const GoogleFirestoreAdminV1beta2ExportDocumentsMetadataSchema = z
  .object({
    collectionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Which collection ids are being exported.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time this operation completed. Will be unset if operation still in progress.',
      }),
    operationState: z
      .enum([
        'OPERATION_STATE_UNSPECIFIED',
        'INITIALIZING',
        'PROCESSING',
        'CANCELLING',
        'FINALIZING',
        'SUCCESSFUL',
        'FAILED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the export operation.' }),
    outputUriPrefix: z
      .string()
      .exactOptional()
      .openapi({ description: 'Where the entities are being exported to.' }),
    progressBytes: GoogleFirestoreAdminV1beta2ProgressSchema.exactOptional().openapi({
      description: 'The progress, in bytes, of this operation.',
    }),
    progressDocuments: GoogleFirestoreAdminV1beta2ProgressSchema.exactOptional().openapi({
      description: 'The progress, in documents, of this operation.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time this operation started.' }),
  })
  .openapi({
    description:
      'Metadata for google.longrunning.Operation results from FirestoreAdmin.ExportDocuments.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1beta2ExportDocumentsMetadata')

const GoogleFirestoreAdminV1beta2ExportDocumentsRequestSchema = z
  .object({
    collectionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Which collection ids to export. Unspecified means all collections.',
      }),
    outputUriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time.',
      }),
  })
  .openapi({ description: 'The request for FirestoreAdmin.ExportDocuments.', required: [] })
  .openapi('GoogleFirestoreAdminV1beta2ExportDocumentsRequest')

const GoogleFirestoreAdminV1beta2ExportDocumentsResponseSchema = z
  .object({
    outputUriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully.',
      }),
  })
  .openapi({
    description: 'Returned in the google.longrunning.Operation response field.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1beta2ExportDocumentsResponse')

const GoogleFirestoreAdminV1beta2IndexFieldSchema = z
  .object({
    arrayConfig: z
      .enum(['ARRAY_CONFIG_UNSPECIFIED', 'CONTAINS'])
      .exactOptional()
      .openapi({ description: 'Indicates that this field supports operations on `array_value`s.' }),
    fieldPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Can be __name__. For single field indexes, this must match the name of the field or may be omitted.',
      }),
    order: z
      .enum(['ORDER_UNSPECIFIED', 'ASCENDING', 'DESCENDING'])
      .exactOptional()
      .openapi({
        description:
          'Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.',
      }),
  })
  .openapi({
    description:
      'A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1beta2IndexField')

const GoogleFirestoreAdminV1beta2IndexSchema = z
  .object({
    fields: z
      .array(GoogleFirestoreAdminV1beta2IndexFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'The fields supported by this index. For composite indexes, this is always 2 or more fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty.',
      }),
    queryScope: z
      .enum(['QUERY_SCOPE_UNSPECIFIED', 'COLLECTION', 'COLLECTION_GROUP'])
      .exactOptional()
      .openapi({
        description:
          'Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'READY', 'NEEDS_REPAIR'])
      .exactOptional()
      .openapi({ description: 'Output only. The serving state of the index.' }),
  })
  .openapi({
    description:
      'Cloud Firestore indexes enable simple and complex queries against documents in a database.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1beta2Index')

const GoogleFirestoreAdminV1beta2IndexConfigSchema = z
  .object({
    ancestorField: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Specifies the resource name of the `Field` from which this field's index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false).",
      }),
    indexes: z
      .array(GoogleFirestoreAdminV1beta2IndexSchema)
      .exactOptional()
      .openapi({ description: 'The indexes supported for this field.' }),
    reverting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only When true, the `Field`'s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`.",
      }),
    usesAncestorConfig: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. When true, the `Field`'s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`'s index configuration is defined explicitly.",
      }),
  })
  .openapi({ description: 'The index configuration for this field.', required: [] })
  .openapi('GoogleFirestoreAdminV1beta2IndexConfig')

const GoogleFirestoreAdminV1beta2FieldSchema = z
  .object({
    indexConfig: GoogleFirestoreAdminV1beta2IndexConfigSchema.exactOptional().openapi({
      description:
        'The index configuration for this field. If unset, field indexing will revert to the configuration defined by the `ancestor_field`. To explicitly remove all indexes for this field, specify an index config with an empty list of indexes.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\\`address.city\\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\\`*\\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.",
      }),
  })
  .openapi({
    description:
      'Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1beta2Field')

const GoogleFirestoreAdminV1beta2IndexConfigDeltaSchema = z
  .object({
    changeType: z
      .enum(['CHANGE_TYPE_UNSPECIFIED', 'ADD', 'REMOVE'])
      .exactOptional()
      .openapi({ description: 'Specifies how the index is changing.' }),
    index: GoogleFirestoreAdminV1beta2IndexSchema.exactOptional().openapi({
      description: 'The index being changed.',
    }),
  })
  .openapi({ description: 'Information about an index configuration change.', required: [] })
  .openapi('GoogleFirestoreAdminV1beta2IndexConfigDelta')

const GoogleFirestoreAdminV1beta2FieldOperationMetadataSchema = z
  .object({
    bytesProgress: GoogleFirestoreAdminV1beta2ProgressSchema.exactOptional().openapi({
      description: 'The progress, in bytes, of this operation.',
    }),
    documentProgress: GoogleFirestoreAdminV1beta2ProgressSchema.exactOptional().openapi({
      description: 'The progress, in documents, of this operation.',
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time this operation completed. Will be unset if operation still in progress.',
      }),
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The field resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`',
      }),
    indexConfigDeltas: z
      .array(GoogleFirestoreAdminV1beta2IndexConfigDeltaSchema)
      .exactOptional()
      .openapi({
        description: 'A list of IndexConfigDelta, which describe the intent of this operation.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time this operation started.' }),
    state: z
      .enum([
        'OPERATION_STATE_UNSPECIFIED',
        'INITIALIZING',
        'PROCESSING',
        'CANCELLING',
        'FINALIZING',
        'SUCCESSFUL',
        'FAILED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the operation.' }),
  })
  .openapi({
    description:
      'Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1beta2FieldOperationMetadata')

const GoogleFirestoreAdminV1beta2ImportDocumentsMetadataSchema = z
  .object({
    collectionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Which collection ids are being imported.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time this operation completed. Will be unset if operation still in progress.',
      }),
    inputUriPrefix: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location of the documents being imported.' }),
    operationState: z
      .enum([
        'OPERATION_STATE_UNSPECIFIED',
        'INITIALIZING',
        'PROCESSING',
        'CANCELLING',
        'FINALIZING',
        'SUCCESSFUL',
        'FAILED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the import operation.' }),
    progressBytes: GoogleFirestoreAdminV1beta2ProgressSchema.exactOptional().openapi({
      description: 'The progress, in bytes, of this operation.',
    }),
    progressDocuments: GoogleFirestoreAdminV1beta2ProgressSchema.exactOptional().openapi({
      description: 'The progress, in documents, of this operation.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time this operation started.' }),
  })
  .openapi({
    description:
      'Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1beta2ImportDocumentsMetadata')

const GoogleFirestoreAdminV1beta2ImportDocumentsRequestSchema = z
  .object({
    collectionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Which collection ids to import. Unspecified means all collections included in the import.',
      }),
    inputUriPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta2.ExportDocumentsResponse.output_uri_prefix.',
      }),
  })
  .openapi({ description: 'The request for FirestoreAdmin.ImportDocuments.', required: [] })
  .openapi('GoogleFirestoreAdminV1beta2ImportDocumentsRequest')

const GoogleFirestoreAdminV1beta2IndexOperationMetadataSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time this operation completed. Will be unset if operation still in progress.',
      }),
    index: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`',
      }),
    progressBytes: GoogleFirestoreAdminV1beta2ProgressSchema.exactOptional().openapi({
      description: 'The progress, in bytes, of this operation.',
    }),
    progressDocuments: GoogleFirestoreAdminV1beta2ProgressSchema.exactOptional().openapi({
      description: 'The progress, in documents, of this operation.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time this operation started.' }),
    state: z
      .enum([
        'OPERATION_STATE_UNSPECIFIED',
        'INITIALIZING',
        'PROCESSING',
        'CANCELLING',
        'FINALIZING',
        'SUCCESSFUL',
        'FAILED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'The state of the operation.' }),
  })
  .openapi({
    description:
      'Metadata for google.longrunning.Operation results from FirestoreAdmin.CreateIndex.',
    required: [],
  })
  .openapi('GoogleFirestoreAdminV1beta2IndexOperationMetadata')

const GoogleFirestoreAdminV1beta2ListFieldsResponseSchema = z
  .object({
    fields: z
      .array(GoogleFirestoreAdminV1beta2FieldSchema)
      .exactOptional()
      .openapi({ description: 'The requested fields.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A page token that may be used to request another page of results. If blank, this is the last page.',
      }),
  })
  .openapi({ description: 'The response for FirestoreAdmin.ListFields.', required: [] })
  .openapi('GoogleFirestoreAdminV1beta2ListFieldsResponse')

const GoogleFirestoreAdminV1beta2ListIndexesResponseSchema = z
  .object({
    indexes: z
      .array(GoogleFirestoreAdminV1beta2IndexSchema)
      .exactOptional()
      .openapi({ description: 'The requested indexes.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A page token that may be used to request another page of results. If blank, this is the last page.',
      }),
  })
  .openapi({ description: 'The response for FirestoreAdmin.ListIndexes.', required: [] })
  .openapi('GoogleFirestoreAdminV1beta2ListIndexesResponse')

const StatusSchema = z
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
  .openapi('Status')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
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
          'The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('GoogleLongrunningOperation')

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
        'https://www.googleapis.com/auth/datastore':
          'View and manage your Google Cloud Datastore data',
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
        'https://www.googleapis.com/auth/datastore':
          'View and manage your Google Cloud Datastore data',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta2NameRoute = createRoute({
  method: 'get',
  path: '/v1beta2/{name}',
  tags: ['projects'],
  description: 'Gets a composite index.',
  operationId: 'firestore.projects.databases.collectionGroups.indexes.get',
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
            description:
              'A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`',
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
      content: { 'application/json': { schema: GoogleFirestoreAdminV1beta2IndexSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/datastore'],
      Oauth2c: ['https://www.googleapis.com/auth/datastore'],
    },
  ],
})

export const deleteV1beta2NameRoute = createRoute({
  method: 'delete',
  path: '/v1beta2/{name}',
  tags: ['projects'],
  description: 'Deletes a composite index.',
  operationId: 'firestore.projects.databases.collectionGroups.indexes.delete',
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
            description:
              'A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/datastore'],
      Oauth2c: ['https://www.googleapis.com/auth/datastore'],
    },
  ],
})

export const patchV1beta2NameRoute = createRoute({
  method: 'patch',
  path: '/v1beta2/{name}',
  tags: ['projects'],
  description:
    'Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn\'t aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.',
  operationId: 'firestore.projects.databases.collectionGroups.fields.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.',
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
              "A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\\`address.city\\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\\`*\\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleFirestoreAdminV1beta2FieldSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/datastore'],
      Oauth2c: ['https://www.googleapis.com/auth/datastore'],
    },
  ],
})

export const postV1beta2NameExportDocumentsRoute = createRoute({
  method: 'post',
  path: '/v1beta2/{name}:exportDocuments',
  tags: ['projects'],
  description:
    'Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.',
  operationId: 'firestore.projects.databases.exportDocuments',
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
            description:
              'Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirestoreAdminV1beta2ExportDocumentsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/datastore'],
      Oauth2c: ['https://www.googleapis.com/auth/datastore'],
    },
  ],
})

export const postV1beta2NameImportDocumentsRoute = createRoute({
  method: 'post',
  path: '/v1beta2/{name}:importDocuments',
  tags: ['projects'],
  description:
    'Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.',
  operationId: 'firestore.projects.databases.importDocuments',
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
            description:
              'Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirestoreAdminV1beta2ImportDocumentsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/datastore'],
      Oauth2c: ['https://www.googleapis.com/auth/datastore'],
    },
  ],
})

export const getV1beta2ParentFieldsRoute = createRoute({
  method: 'get',
  path: '/v1beta2/{parent}/fields',
  tags: ['projects'],
  description:
    'Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.',
  operationId: 'firestore.projects.databases.collectionGroups.fields.list',
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
            description:
              'The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.',
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
            description: 'The number of results to return.',
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
              'A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.',
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
              'A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`',
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
        'application/json': { schema: GoogleFirestoreAdminV1beta2ListFieldsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/datastore'],
      Oauth2c: ['https://www.googleapis.com/auth/datastore'],
    },
  ],
})

export const getV1beta2ParentIndexesRoute = createRoute({
  method: 'get',
  path: '/v1beta2/{parent}/indexes',
  tags: ['projects'],
  description: 'Lists composite indexes.',
  operationId: 'firestore.projects.databases.collectionGroups.indexes.list',
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
            description: 'The filter to apply to list results.',
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
            description: 'The number of results to return.',
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
              'A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.',
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
              'A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`',
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
        'application/json': { schema: GoogleFirestoreAdminV1beta2ListIndexesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/datastore'],
      Oauth2c: ['https://www.googleapis.com/auth/datastore'],
    },
  ],
})

export const postV1beta2ParentIndexesRoute = createRoute({
  method: 'post',
  path: '/v1beta2/{parent}/indexes',
  tags: ['projects'],
  description:
    'Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.',
  operationId: 'firestore.projects.databases.collectionGroups.indexes.create',
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
            description:
              'A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleFirestoreAdminV1beta2IndexSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/datastore'],
      Oauth2c: ['https://www.googleapis.com/auth/datastore'],
    },
  ],
})

import { createRoute, z } from '@hono/zod-openapi'

const GoogleDatastoreAdminV1CommonMetadataSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation ended, either successfully or otherwise.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The client-assigned labels which were provided when the operation was created. May also include additional labels.',
      }),
    operationType: z
      .enum([
        'OPERATION_TYPE_UNSPECIFIED',
        'EXPORT_ENTITIES',
        'IMPORT_ENTITIES',
        'CREATE_INDEX',
        'DELETE_INDEX',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of the operation. Can be used as a filter in ListOperationsRequest.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time that work began on the operation.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'INITIALIZING',
        'PROCESSING',
        'CANCELLING',
        'FINALIZING',
        'SUCCESSFUL',
        'FAILED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'The current state of the Operation.' }),
  })
  .openapi({ description: 'Metadata common to all Datastore Admin operations.', required: [] })
  .openapi('GoogleDatastoreAdminV1CommonMetadata')

const GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadataSchema = z
  .object({
    migrationState: z
      .enum(['MIGRATION_STATE_UNSPECIFIED', 'RUNNING', 'PAUSED', 'COMPLETE'])
      .exactOptional()
      .openapi({
        description:
          'The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode.',
      }),
    migrationStep: z
      .enum([
        'MIGRATION_STEP_UNSPECIFIED',
        'PREPARE',
        'START',
        'APPLY_WRITES_SYNCHRONOUSLY',
        'COPY_AND_VERIFY',
        'REDIRECT_EVENTUALLY_CONSISTENT_READS',
        'REDIRECT_STRONGLY_CONSISTENT_READS',
        'REDIRECT_WRITES',
      ])
      .exactOptional()
      .openapi({
        description:
          'The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode.',
      }),
  })
  .openapi({
    description:
      'Metadata for Datastore to Firestore migration operations. The DatastoreFirestoreMigration operation is not started by the end-user via an explicit "creation" method. This is an intentional deviation from the LRO design pattern. This singleton resource can be accessed at: "projects/{project_id}/operations/datastore-firestore-migration"',
    required: [],
  })
  .openapi('GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata')

const GoogleDatastoreAdminV1EntityFilterSchema = z
  .object({
    kinds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'If empty, then this represents all kinds.' }),
    namespaceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.",
      }),
  })
  .openapi({
    description:
      "Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']",
    required: [],
  })
  .openapi('GoogleDatastoreAdminV1EntityFilter')

const GoogleDatastoreAdminV1ProgressSchema = z
  .object({
    workCompleted: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The amount of work that has been completed. Note that this may be greater than work_estimated.',
      }),
    workEstimated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable.',
      }),
  })
  .openapi({ description: 'Measures the progress of a particular metric.', required: [] })
  .openapi('GoogleDatastoreAdminV1Progress')

const GoogleDatastoreAdminV1ExportEntitiesMetadataSchema = z
  .object({
    common: GoogleDatastoreAdminV1CommonMetadataSchema.exactOptional().openapi({
      description: 'Metadata common to all Datastore Admin operations.',
    }),
    entityFilter: GoogleDatastoreAdminV1EntityFilterSchema.exactOptional().openapi({
      description: 'Description of which entities are being exported.',
    }),
    outputUrlPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url.',
      }),
    progressBytes: GoogleDatastoreAdminV1ProgressSchema.exactOptional().openapi({
      description: 'An estimate of the number of bytes processed.',
    }),
    progressEntities: GoogleDatastoreAdminV1ProgressSchema.exactOptional().openapi({
      description: 'An estimate of the number of entities processed.',
    }),
  })
  .openapi({ description: 'Metadata for ExportEntities operations.', required: [] })
  .openapi('GoogleDatastoreAdminV1ExportEntitiesMetadata')

const GoogleDatastoreAdminV1ExportEntitiesResponseSchema = z
  .object({
    outputUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully.',
      }),
  })
  .openapi({
    description: 'The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.',
    required: [],
  })
  .openapi('GoogleDatastoreAdminV1ExportEntitiesResponse')

const GoogleDatastoreAdminV1ImportEntitiesMetadataSchema = z
  .object({
    common: GoogleDatastoreAdminV1CommonMetadataSchema.exactOptional().openapi({
      description: 'Metadata common to all Datastore Admin operations.',
    }),
    entityFilter: GoogleDatastoreAdminV1EntityFilterSchema.exactOptional().openapi({
      description: 'Description of which entities are being imported.',
    }),
    inputUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field.',
      }),
    progressBytes: GoogleDatastoreAdminV1ProgressSchema.exactOptional().openapi({
      description: 'An estimate of the number of bytes processed.',
    }),
    progressEntities: GoogleDatastoreAdminV1ProgressSchema.exactOptional().openapi({
      description: 'An estimate of the number of entities processed.',
    }),
  })
  .openapi({ description: 'Metadata for ImportEntities operations.', required: [] })
  .openapi('GoogleDatastoreAdminV1ImportEntitiesMetadata')

const GoogleDatastoreAdminV1IndexOperationMetadataSchema = z
  .object({
    common: GoogleDatastoreAdminV1CommonMetadataSchema.exactOptional().openapi({
      description: 'Metadata common to all Datastore Admin operations.',
    }),
    indexId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The index resource ID that this operation is acting on.' }),
    progressEntities: GoogleDatastoreAdminV1ProgressSchema.exactOptional().openapi({
      description: 'An estimate of the number of entities processed.',
    }),
  })
  .openapi({ description: 'Metadata for Index operations.', required: [] })
  .openapi('GoogleDatastoreAdminV1IndexOperationMetadata')

const GoogleDatastoreAdminV1PrepareStepDetailsSchema = z
  .object({
    concurrencyMode: z
      .enum([
        'CONCURRENCY_MODE_UNSPECIFIED',
        'PESSIMISTIC',
        'OPTIMISTIC',
        'OPTIMISTIC_WITH_ENTITY_GROUPS',
      ])
      .exactOptional()
      .openapi({
        description:
          'The concurrency mode this database will use when it reaches the `REDIRECT_WRITES` step.',
      }),
  })
  .openapi({ description: 'Details for the `PREPARE` step.', required: [] })
  .openapi('GoogleDatastoreAdminV1PrepareStepDetails')

const GoogleDatastoreAdminV1RedirectWritesStepDetailsSchema = z
  .object({
    concurrencyMode: z
      .enum([
        'CONCURRENCY_MODE_UNSPECIFIED',
        'PESSIMISTIC',
        'OPTIMISTIC',
        'OPTIMISTIC_WITH_ENTITY_GROUPS',
      ])
      .exactOptional()
      .openapi({ description: 'Ths concurrency mode for this database.' }),
  })
  .openapi({ description: 'Details for the `REDIRECT_WRITES` step.', required: [] })
  .openapi('GoogleDatastoreAdminV1RedirectWritesStepDetails')

const GoogleDatastoreAdminV1MigrationProgressEventSchema = z
  .object({
    prepareStepDetails: GoogleDatastoreAdminV1PrepareStepDetailsSchema.exactOptional().openapi({
      description: 'Details for the `PREPARE` step.',
    }),
    redirectWritesStepDetails:
      GoogleDatastoreAdminV1RedirectWritesStepDetailsSchema.exactOptional().openapi({
        description: 'Details for the `REDIRECT_WRITES` step.',
      }),
    step: z
      .enum([
        'MIGRATION_STEP_UNSPECIFIED',
        'PREPARE',
        'START',
        'APPLY_WRITES_SYNCHRONOUSLY',
        'COPY_AND_VERIFY',
        'REDIRECT_EVENTUALLY_CONSISTENT_READS',
        'REDIRECT_STRONGLY_CONSISTENT_READS',
        'REDIRECT_WRITES',
      ])
      .exactOptional()
      .openapi({
        description:
          'The step that is starting. An event with step set to `START` indicates that the migration has been reverted back to the initial pre-migration state.',
      }),
  })
  .openapi({
    description:
      'An event signifying the start of a new step in a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore).',
    required: [],
  })
  .openapi('GoogleDatastoreAdminV1MigrationProgressEvent')

const GoogleDatastoreAdminV1MigrationStateEventSchema = z
  .object({
    state: z
      .enum(['MIGRATION_STATE_UNSPECIFIED', 'RUNNING', 'PAUSED', 'COMPLETE'])
      .exactOptional()
      .openapi({ description: 'The new state of the migration.' }),
  })
  .openapi({
    description:
      'An event signifying a change in state of a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore).',
    required: [],
  })
  .openapi('GoogleDatastoreAdminV1MigrationStateEvent')

const GoogleDatastoreAdminV1beta1CommonMetadataSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation ended, either successfully or otherwise.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The client-assigned labels which were provided when the operation was created. May also include additional labels.',
      }),
    operationType: z
      .enum(['OPERATION_TYPE_UNSPECIFIED', 'EXPORT_ENTITIES', 'IMPORT_ENTITIES'])
      .exactOptional()
      .openapi({
        description: 'The type of the operation. Can be used as a filter in ListOperationsRequest.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time that work began on the operation.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'INITIALIZING',
        'PROCESSING',
        'CANCELLING',
        'FINALIZING',
        'SUCCESSFUL',
        'FAILED',
        'CANCELLED',
      ])
      .exactOptional()
      .openapi({ description: 'The current state of the Operation.' }),
  })
  .openapi({ description: 'Metadata common to all Datastore Admin operations.', required: [] })
  .openapi('GoogleDatastoreAdminV1beta1CommonMetadata')

const GoogleDatastoreAdminV1beta1EntityFilterSchema = z
  .object({
    kinds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'If empty, then this represents all kinds.' }),
    namespaceIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique.",
      }),
  })
  .openapi({
    description:
      "Identifies a subset of entities in a project. This is specified as combinations of kinds and namespaces (either or both of which may be all, as described in the following examples). Example usage: Entire project: kinds=[], namespace_ids=[] Kinds Foo and Bar in all namespaces: kinds=['Foo', 'Bar'], namespace_ids=[] Kinds Foo and Bar only in the default namespace: kinds=['Foo', 'Bar'], namespace_ids=[''] Kinds Foo and Bar in both the default and Baz namespaces: kinds=['Foo', 'Bar'], namespace_ids=['', 'Baz'] The entire Baz namespace: kinds=[], namespace_ids=['Baz']",
    required: [],
  })
  .openapi('GoogleDatastoreAdminV1beta1EntityFilter')

const GoogleDatastoreAdminV1beta1ProgressSchema = z
  .object({
    workCompleted: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The amount of work that has been completed. Note that this may be greater than work_estimated.',
      }),
    workEstimated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable.',
      }),
  })
  .openapi({ description: 'Measures the progress of a particular metric.', required: [] })
  .openapi('GoogleDatastoreAdminV1beta1Progress')

const GoogleDatastoreAdminV1beta1ExportEntitiesMetadataSchema = z
  .object({
    common: GoogleDatastoreAdminV1beta1CommonMetadataSchema.exactOptional().openapi({
      description: 'Metadata common to all Datastore Admin operations.',
    }),
    entityFilter: GoogleDatastoreAdminV1beta1EntityFilterSchema.exactOptional().openapi({
      description: 'Description of which entities are being exported.',
    }),
    outputUrlPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.',
      }),
    progressBytes: GoogleDatastoreAdminV1beta1ProgressSchema.exactOptional().openapi({
      description: 'An estimate of the number of bytes processed.',
    }),
    progressEntities: GoogleDatastoreAdminV1beta1ProgressSchema.exactOptional().openapi({
      description: 'An estimate of the number of entities processed.',
    }),
  })
  .openapi({ description: 'Metadata for ExportEntities operations.', required: [] })
  .openapi('GoogleDatastoreAdminV1beta1ExportEntitiesMetadata')

const GoogleDatastoreAdminV1beta1ExportEntitiesRequestSchema = z
  .object({
    entityFilter: GoogleDatastoreAdminV1beta1EntityFilterSchema.exactOptional().openapi({
      description: 'Description of what data from the project is included in the export.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Client-assigned labels.' }),
    outputUrlPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict.',
      }),
  })
  .openapi({
    description: 'The request for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.',
    required: [],
  })
  .openapi('GoogleDatastoreAdminV1beta1ExportEntitiesRequest')

const GoogleDatastoreAdminV1beta1ExportEntitiesResponseSchema = z
  .object({
    outputUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully.',
      }),
  })
  .openapi({
    description: 'The response for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.',
    required: [],
  })
  .openapi('GoogleDatastoreAdminV1beta1ExportEntitiesResponse')

const GoogleDatastoreAdminV1beta1ImportEntitiesMetadataSchema = z
  .object({
    common: GoogleDatastoreAdminV1beta1CommonMetadataSchema.exactOptional().openapi({
      description: 'Metadata common to all Datastore Admin operations.',
    }),
    entityFilter: GoogleDatastoreAdminV1beta1EntityFilterSchema.exactOptional().openapi({
      description: 'Description of which entities are being imported.',
    }),
    inputUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field.',
      }),
    progressBytes: GoogleDatastoreAdminV1beta1ProgressSchema.exactOptional().openapi({
      description: 'An estimate of the number of bytes processed.',
    }),
    progressEntities: GoogleDatastoreAdminV1beta1ProgressSchema.exactOptional().openapi({
      description: 'An estimate of the number of entities processed.',
    }),
  })
  .openapi({ description: 'Metadata for ImportEntities operations.', required: [] })
  .openapi('GoogleDatastoreAdminV1beta1ImportEntitiesMetadata')

const GoogleDatastoreAdminV1beta1ImportEntitiesRequestSchema = z
  .object({
    entityFilter: GoogleDatastoreAdminV1beta1EntityFilterSchema.exactOptional().openapi({
      description:
        'Optionally specify which kinds/namespaces are to be imported. If provided, the list must be a subset of the EntityFilter used in creating the export, otherwise a FAILED_PRECONDITION error will be returned. If no filter is specified then all entities from the export are imported.',
    }),
    inputUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input_url should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). For more information, see google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Client-assigned labels.' }),
  })
  .openapi({
    description: 'The request for google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities.',
    required: [],
  })
  .openapi('GoogleDatastoreAdminV1beta1ImportEntitiesRequest')

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
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
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

export const postV1beta1ProjectsProjectIdExportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}:export',
  tags: ['projects'],
  description:
    'Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.',
  operationId: 'datastore.projects.export',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID against which to make the request.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleDatastoreAdminV1beta1ExportEntitiesRequestSchema },
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

export const postV1beta1ProjectsProjectIdImportRoute = createRoute({
  method: 'post',
  path: '/v1beta1/projects/{projectId}:import',
  tags: ['projects'],
  description:
    'Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.',
  operationId: 'datastore.projects.import',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID against which to make the request.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleDatastoreAdminV1beta1ImportEntitiesRequestSchema },
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

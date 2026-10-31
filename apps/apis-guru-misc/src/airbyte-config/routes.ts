import { createRoute, z } from '@hono/zod-openapi'

const ActorCatalogWithUpdatedAtSchema = z
  .object({
    catalog: z.object({}).exactOptional(),
    updatedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({
    description: 'A source actor catalog with the timestamp it was mostly recently updated',
    required: [],
  })
  .openapi('ActorCatalogWithUpdatedAt')

const ResourceRequirementsSchema = z
  .object({
    cpu_limit: z.string().exactOptional(),
    cpu_request: z.string().exactOptional(),
    memory_limit: z.string().exactOptional(),
    memory_request: z.string().exactOptional(),
  })
  .openapi({
    description: 'optional resource requirements to run workers (blank for unbounded allocations)',
    required: [],
  })
  .openapi('ResourceRequirements')

const JobTypeSchema = z
  .enum([
    'get_spec',
    'check_connection',
    'discover_schema',
    'sync',
    'reset_connection',
    'connection_updater',
    'replicate',
  ])
  .openapi({
    description: 'enum that describes the different types of jobs that the platform runs.',
  })
  .openapi('JobType')

const JobTypeResourceLimitSchema = z
  .strictObject({ jobType: JobTypeSchema, resourceRequirements: ResourceRequirementsSchema })
  .openapi({
    description:
      'sets resource requirements for a specific job type for an actor definition. these values override the default, if both are set.',
    required: ['jobType', 'resourceRequirements'],
  })
  .openapi('JobTypeResourceLimit')

const ActorDefinitionResourceRequirementsSchema = z
  .strictObject({
    default: ResourceRequirementsSchema.exactOptional(),
    jobSpecific: z.array(JobTypeResourceLimitSchema).exactOptional(),
  })
  .openapi({
    description:
      'actor definition specific resource requirements. if default is set, these are the requirements that should be set for ALL jobs run for this actor definition. it is overriden by the job type specific configurations. if not set, the platform will use defaults. these values will be overriden by configuration at the connection level.',
    required: [],
  })
  .openapi('ActorDefinitionResourceRequirements')

const OAuthConfigurationSchema = z
  .any()
  .openapi({
    description:
      'The values required to configure OAuth flows. The schema for this must match the `OAuthConfigSpecification.oauthUserInputFromConnectorConfigSpecification` schema.',
  })
  .openapi('OAuthConfiguration')

const OAuthConfigSpecificationSchema = z
  .object({
    completeOAuthOutputSpecification: OAuthConfigurationSchema.exactOptional().openapi({
      description:
        "OAuth specific blob. This is a Json Schema used to validate Json configurations produced by the OAuth flows as they are\nreturned by the distant OAuth APIs.\nMust be a valid JSON describing the fields to merge back to `ConnectorSpecification.connectionSpecification`.\nFor each field, a special annotation `path_in_connector_config` can be specified to determine where to merge it,\n\nExamples:\n\n    complete_oauth_output_specification={\n      refresh_token: {\n        type: string,\n        path_in_connector_config: ['credentials', 'refresh_token']\n      }\n    }",
    }),
    completeOAuthServerInputSpecification: OAuthConfigurationSchema.exactOptional().openapi({
      description:
        'OAuth specific blob. This is a Json Schema used to validate Json configurations persisted as Airbyte Server configurations.\nMust be a valid non-nested JSON describing additional fields configured by the Airbyte Instance or Workspace Admins to be used by the\nserver when completing an OAuth flow (typically exchanging an auth code for refresh token).\n\nExamples:\n\n    complete_oauth_server_input_specification={\n      client_id: {\n        type: string\n      },\n      client_secret: {\n        type: string\n      }\n    }',
    }),
    completeOAuthServerOutputSpecification: OAuthConfigurationSchema.exactOptional().openapi({
      description:
        "OAuth specific blob. This is a Json Schema used to validate Json configurations persisted as Airbyte Server configurations that\nalso need to be merged back into the connector configuration at runtime.\nThis is a subset configuration of `complete_oauth_server_input_specification` that filters fields out to retain only the ones that\nare necessary for the connector to function with OAuth. (some fields could be used during oauth flows but not needed afterwards, therefore\nthey would be listed in the `complete_oauth_server_input_specification` but not `complete_oauth_server_output_specification`)\nMust be a valid non-nested JSON describing additional fields configured by the Airbyte Instance or Workspace Admins to be used by the\nconnector when using OAuth flow APIs.\nThese fields are to be merged back to `ConnectorSpecification.connectionSpecification`.\nFor each field, a special annotation `path_in_connector_config` can be specified to determine where to merge it,\n\nExamples:\n\n      complete_oauth_server_output_specification={\n        client_id: {\n          type: string,\n          path_in_connector_config: ['credentials', 'client_id']\n        },\n        client_secret: {\n          type: string,\n          path_in_connector_config: ['credentials', 'client_secret']\n        }\n      }",
    }),
    oauthUserInputFromConnectorConfigSpecification:
      OAuthConfigurationSchema.exactOptional().openapi({
        description:
          "OAuth specific blob. This is a Json Schema used to validate Json configurations used as input to OAuth.\nMust be a valid non-nested JSON that refers to properties from ConnectorSpecification.connectionSpecification\nusing special annotation 'path_in_connector_config'.\nThese are input values the user is entering through the UI to authenticate to the connector, that might also shared\nas inputs for syncing data via the connector.\n\nExamples:\n\nif no connector values is shared during oauth flow, oauth_user_input_from_connector_config_specification=[]\nif connector values such as 'app_id' inside the top level are used to generate the API url for the oauth flow,\n  oauth_user_input_from_connector_config_specification={\n    app_id: {\n      type: string\n      path_in_connector_config: ['app_id']\n    }\n  }\nif connector values such as 'info.app_id' nested inside another object are used to generate the API url for the oauth flow,\n  oauth_user_input_from_connector_config_specification={\n    app_id: {\n      type: string\n      path_in_connector_config: ['info', 'app_id']\n    }\n  }",
      }),
  })
  .openapi({ required: [] })
  .openapi('OAuthConfigSpecification')

const AdvancedAuthSchema = z
  .object({
    authFlowType: z.enum(['oauth2.0', 'oauth1.0']).exactOptional(),
    oauthConfigSpecification: OAuthConfigSpecificationSchema.exactOptional(),
    predicateKey: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Json Path to a field in the connectorSpecification that should exist for the advanced auth to be applicable.',
      }),
    predicateValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value of the predicate_key fields for the advanced auth to be applicable.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdvancedAuth')

const AirbyteArchiveSchema = z
  .file()
  .openapi({
    type: 'string',
    format: 'binary',
    description: 'Tarball Archive (.tar.gz) of Airbyte Configuration and Database',
  })
  .openapi('AirbyteArchive')

const DestinationSyncModeSchema = z
  .enum(['append', 'overwrite', 'append_dedup'])
  .openapi('DestinationSyncMode')

const SelectedFieldInfoSchema = z
  .object({ fieldPath: z.array(z.string()).exactOptional() })
  .openapi({
    description:
      'Path to a field/column/property in a stream to be selected. For example, if the field to be selected is a database column called "foo", this will be ["foo"]. Use multiple path elements for nested schemas.',
    required: [],
  })
  .openapi('SelectedFieldInfo')

const SyncModeSchema = z.enum(['full_refresh', 'incremental']).openapi('SyncMode')

const AirbyteStreamConfigurationSchema = z
  .strictObject({
    aliasName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Alias name to the stream to be used in the destination' }),
    cursorField: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if `sync_mode` is `incremental`. Otherwise it is ignored.',
      }),
    destinationSyncMode: DestinationSyncModeSchema,
    fieldSelectionEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether field selection should be enabled. If this is true, only the properties in `selectedFields` will be included.',
      }),
    primaryKey: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'Paths to the fields that will be used as primary key. This field is REQUIRED if `destination_sync_mode` is `*_dedup`. Otherwise it is ignored.',
      }),
    selected: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If this is true, the stream is selected with all of its properties. For new connections, this considers if the stream is suggested or not',
      }),
    selectedFields: z
      .array(SelectedFieldInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Paths to the fields that will be included in the configured catalog. This must be set if `fieldSelectedEnabled` is set. An empty list indicates that no properties will be included.',
      }),
    suggested: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Does the connector suggest that this stream be enabled by default?',
      }),
    syncMode: SyncModeSchema,
  })
  .openapi({
    description: 'the mutable part of the stream to configure the destination',
    required: ['syncMode', 'destinationSyncMode'],
  })
  .openapi('AirbyteStreamConfiguration')

const StreamJsonSchemaSchema = z
  .object({})
  .openapi({ description: 'Stream schema using Json Schema specs.' })
  .openapi('StreamJsonSchema')

const AirbyteStreamSchema = z
  .strictObject({
    defaultCursorField: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Path to the field that will be used to determine if a record is new or modified since the last sync. If not provided by the source, the end user will have to specify the comparable themselves.',
      }),
    jsonSchema: StreamJsonSchemaSchema.exactOptional(),
    name: z.string().openapi({ description: "Stream's name." }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional Source-defined namespace. Airbyte streams from the same sources should have the same namespace. Currently only used by JDBC destinations to determine what schema to write to.',
      }),
    sourceDefinedCursor: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the source defines the cursor field, then any other cursor field inputs will be ignored. If it does not, either the user_provided one is used, or the default one is used as a backup.',
      }),
    sourceDefinedPrimaryKey: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'If the source defines the primary key, paths to the fields that will be used as a primary key. If not provided by the source, the end user will have to specify the primary key themselves.',
      }),
    supportedSyncModes: z.array(SyncModeSchema).exactOptional(),
  })
  .openapi({
    description: 'the immutable schema defined by the source',
    required: ['name', 'json_schema'],
  })
  .openapi('AirbyteStream')

const AirbyteStreamAndConfigurationSchema = z
  .strictObject({
    config: AirbyteStreamConfigurationSchema.exactOptional(),
    stream: AirbyteStreamSchema.exactOptional(),
  })
  .openapi({
    description:
      'each stream is split in two parts; the immutable schema from source and mutable configuration for destination',
    required: [],
  })
  .openapi('AirbyteStreamAndConfiguration')

const AirbyteCatalogSchema = z
  .object({ streams: z.array(AirbyteStreamAndConfigurationSchema) })
  .openapi({ description: 'describes the available schema (catalog).', required: ['streams'] })
  .openapi('AirbyteCatalog')

const AttemptFailureOriginSchema = z
  .enum([
    'source',
    'destination',
    'replication',
    'persistence',
    'normalization',
    'dbt',
    'airbyte_platform',
    'unknown',
  ])
  .openapi({
    description:
      'Indicates where the error originated. If not set, the origin of error is not well known.',
  })
  .openapi('AttemptFailureOrigin')

const AttemptFailureTypeSchema = z
  .enum(['config_error', 'system_error', 'manual_cancellation', 'refresh_schema'])
  .openapi({
    description:
      'Categorizes well known errors into types for programmatic handling. If not set, the type of error is not well known.',
  })
  .openapi('AttemptFailureType')

const AttemptFailureReasonSchema = z
  .object({
    externalMessage: z.string().exactOptional(),
    failureOrigin: AttemptFailureOriginSchema.exactOptional(),
    failureType: AttemptFailureTypeSchema.exactOptional(),
    internalMessage: z.string().exactOptional(),
    retryable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if it is known that retrying may succeed, e.g. for a transient failure. False if it is known that a retry will not succeed, e.g. for a configuration issue. If not set, retryable status is not well known.',
      }),
    stacktrace: z.string().exactOptional(),
    timestamp: z
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
  })
  .openapi({ required: ['timestamp'] })
  .openapi('AttemptFailureReason')

const AttemptFailureSummarySchema = z
  .object({
    failures: z.array(AttemptFailureReasonSchema),
    partialSuccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the number of committed records for this attempt was greater than 0. False if 0 records were committed. If not set, the number of committed records is unknown.',
      }),
  })
  .openapi({ required: ['failures'] })
  .openapi('AttemptFailureSummary')

const AttemptStatusSchema = z.enum(['running', 'failed', 'succeeded']).openapi('AttemptStatus')

const AttemptStatsSchema = z
  .object({
    bytesEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    estimatedBytes: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    estimatedRecords: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    recordsEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    stateMessagesEmitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('AttemptStats')

const AttemptStreamStatsSchema = z
  .object({
    stats: AttemptStatsSchema,
    streamName: z.string(),
    streamNamespace: z.string().exactOptional(),
  })
  .openapi({ required: ['streamName', 'stats'] })
  .openapi('AttemptStreamStats')

const AttemptReadSchema = z
  .object({
    bytesSynced: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    createdAt: z
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
    endedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    failureSummary: AttemptFailureSummarySchema.exactOptional(),
    id: z
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
    recordsSynced: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    status: AttemptStatusSchema,
    streamStats: z.array(AttemptStreamStatsSchema).exactOptional(),
    totalStats: AttemptStatsSchema.exactOptional(),
    updatedAt: z
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
  })
  .openapi({ required: ['id', 'status', 'createdAt', 'updatedAt'] })
  .openapi('AttemptRead')

const LogReadSchema = z
  .object({ logLines: z.array(z.string()) })
  .openapi({ required: ['logLines'] })
  .openapi('LogRead')

const AttemptInfoReadSchema = z
  .object({ attempt: AttemptReadSchema, logs: LogReadSchema })
  .openapi({ required: ['attempt', 'logs'] })
  .openapi('AttemptInfoRead')

const AttemptNumberSchema = z.int32().openapi('AttemptNumber')

const AttemptNormalizationStatusReadSchema = z
  .object({
    attemptNumber: AttemptNumberSchema.exactOptional(),
    hasNormalizationFailed: z.boolean().exactOptional(),
    hasRecordsCommitted: z.boolean().exactOptional(),
    recordsCommitted: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('AttemptNormalizationStatusRead')

const AttemptNormalizationStatusReadListSchema = z
  .object({
    attemptNormalizationStatuses: z.array(AttemptNormalizationStatusReadSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AttemptNormalizationStatusReadList')

const DestinationConfigurationSchema = z
  .any()
  .openapi({
    description:
      'The values required to configure the destination. The schema for this must match the schema return by destination_definition_specifications/get for the destinationDefinition.',
    example: { user: 'charles' },
  })
  .openapi('DestinationConfiguration')

const SourceConfigurationSchema = z
  .any()
  .openapi({
    description:
      'The values required to configure the source. The schema for this must match the schema return by source_definition_specifications/get for the source.',
    example: { user: 'charles' },
  })
  .openapi('SourceConfiguration')

const ConnectionIdSchema = z.uuid().openapi('ConnectionId')

const StateBlobSchema = z.object({}).openapi('StateBlob')

const StreamDescriptorSchema = z
  .object({ name: z.string(), namespace: z.string().exactOptional() })
  .openapi({ required: ['name'] })
  .openapi('StreamDescriptor')

const StreamStateSchema = z
  .object({
    streamDescriptor: StreamDescriptorSchema,
    streamState: StateBlobSchema.exactOptional(),
  })
  .openapi({ required: ['streamDescriptor'] })
  .openapi('StreamState')

const GlobalStateSchema = z
  .object({
    shared_state: StateBlobSchema.exactOptional(),
    streamStates: z.array(StreamStateSchema),
  })
  .openapi({ required: ['streamStates'] })
  .openapi('GlobalState')

const ConnectionStateTypeSchema = z
  .enum(['global', 'stream', 'legacy', 'not_set'])
  .openapi('ConnectionStateType')

const ConnectionStateSchema = z
  .object({
    connectionId: ConnectionIdSchema,
    globalState: GlobalStateSchema.exactOptional(),
    state: StateBlobSchema.exactOptional(),
    stateType: ConnectionStateTypeSchema,
    streamState: z.array(StreamStateSchema).exactOptional(),
  })
  .openapi({
    description:
      'Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.',
    required: ['connectionId', 'stateType'],
  })
  .openapi('ConnectionState')

const AttemptSyncConfigSchema = z
  .object({
    destinationConfiguration: DestinationConfigurationSchema,
    sourceConfiguration: SourceConfigurationSchema,
    state: ConnectionStateSchema.exactOptional(),
  })
  .openapi({ required: ['sourceConfiguration', 'destinationConfiguration'] })
  .openapi('AttemptSyncConfig')

const OAuth2SpecificationSchema = z
  .object({
    oauthFlowInitParameters: z
      .array(
        z
          .array(z.string())
          .openapi({
            description:
              'A list of strings denoting a pointer into the rootObject for where to find this property',
          }),
      )
      .openapi({
        description:
          "Pointers to the fields in the rootObject needed to obtain the initial refresh/access tokens for the OAuth flow. Each inner array represents the path in the rootObject of the referenced field. For example. Assume the rootObject contains params 'app_secret', 'app_id' which are needed to get the initial refresh token. If they are not nested in the rootObject, then the array would look like this [['app_secret'], ['app_id']] If they are nested inside an object called 'auth_params' then this array would be [['auth_params', 'app_secret'], ['auth_params', 'app_id']]",
      }),
    oauthFlowOutputParameters: z
      .array(
        z
          .array(z.string())
          .openapi({
            description:
              'A list of strings denoting a pointer into the rootObject for where to find this property',
          }),
      )
      .openapi({
        description:
          'Pointers to the fields in the rootObject which can be populated from successfully completing the oauth flow using the init parameters. This is typically a refresh/access token. Each inner array represents the path in the rootObject of the referenced field.',
      }),
    rootObject: z
      .array(z.any())
      .openapi({
        description:
          "A list of strings representing a pointer to the root object which contains any oauth parameters in the ConnectorSpecification.\nExamples:\nif oauth parameters were contained inside the top level, rootObject=[] If they were nested inside another object {'credentials': {'app_id' etc...}, rootObject=['credentials'] If they were inside a oneOf {'switch': {oneOf: [{client_id...}, {non_oauth_param]}},  rootObject=['switch', 0] ",
        example: ['path', 1],
      }),
  })
  .openapi({
    description: "An object containing any metadata needed to describe this connector's Oauth flow",
    required: ['rootObject', 'oauthFlowInitParameters', 'oauthFlowOutputParameters'],
  })
  .openapi('OAuth2Specification')

const AuthSpecificationSchema = z
  .object({
    auth_type: z.literal('oauth2.0').exactOptional(),
    oauth2Specification: OAuth2SpecificationSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AuthSpecification')

const FieldSchemaSchema = z
  .object({})
  .openapi({ description: 'JSONSchema representation of the field' })
  .openapi('FieldSchema')

const FieldAddSchema = z
  .object({ schema: FieldSchemaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FieldAdd')

const FieldNameSchema = z
  .array(z.string())
  .openapi({ description: 'A field name is a list of strings that form the path to the field.' })
  .openapi('FieldName')

const FieldRemoveSchema = z
  .object({ schema: FieldSchemaSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FieldRemove')

const FieldSchemaUpdateSchema = z
  .object({ newSchema: FieldSchemaSchema, oldSchema: FieldSchemaSchema })
  .openapi({ required: ['oldSchema', 'newSchema'] })
  .openapi('FieldSchemaUpdate')

const FieldTransformSchema = z
  .object({
    addField: FieldAddSchema.exactOptional(),
    breaking: z.boolean(),
    fieldName: FieldNameSchema,
    removeField: FieldRemoveSchema.exactOptional(),
    transformType: z.enum(['add_field', 'remove_field', 'update_field_schema']),
    updateFieldSchema: FieldSchemaUpdateSchema.exactOptional(),
  })
  .openapi({
    description: 'Describes the difference between two Streams.',
    required: ['transformType', 'fieldName', 'breaking'],
  })
  .openapi('FieldTransform')

const StreamTransformSchema = z
  .object({
    streamDescriptor: StreamDescriptorSchema,
    transformType: z.enum(['add_stream', 'remove_stream', 'update_stream']),
    updateStream: z
      .array(FieldTransformSchema)
      .exactOptional()
      .openapi({ description: 'list of field transformations. order does not matter.' }),
  })
  .openapi({ required: ['transformType', 'streamDescriptor'] })
  .openapi('StreamTransform')

const CatalogDiffSchema = z
  .object({
    transforms: z
      .array(StreamTransformSchema)
      .openapi({ description: 'list of stream transformations. order does not matter.' }),
  })
  .openapi({
    description: 'Describes the difference between two Airbyte catalogs.',
    required: ['transforms'],
  })
  .openapi('CatalogDiff')

const JobConfigTypeSchema = z
  .enum([
    'check_connection_source',
    'check_connection_destination',
    'discover_schema',
    'get_spec',
    'sync',
    'reset_connection',
  ])
  .openapi('JobConfigType')

const SynchronousJobReadSchema = z
  .object({
    configId: z
      .string()
      .exactOptional()
      .openapi({ description: 'only present if a config id was provided.' }),
    configType: JobConfigTypeSchema,
    connectorConfigurationUpdated: z.boolean().default(false).exactOptional(),
    createdAt: z
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
    endedAt: z
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
    id: z.uuid(),
    logs: LogReadSchema.exactOptional(),
    succeeded: z.boolean(),
  })
  .openapi({ required: ['id', 'configType', 'createdAt', 'endedAt', 'succeeded'] })
  .openapi('SynchronousJobRead')

const CheckConnectionReadSchema = z
  .object({
    jobInfo: SynchronousJobReadSchema,
    message: z.string().exactOptional(),
    status: z.enum(['succeeded', 'failed']),
  })
  .openapi({ required: ['status', 'jobInfo'] })
  .openapi('CheckConnectionRead')

const CheckOperationReadSchema = z
  .object({ message: z.string().exactOptional(), status: z.enum(['succeeded', 'failed']) })
  .openapi({ required: ['status'] })
  .openapi('CheckOperationRead')

const DestinationDefinitionIdSchema = z.uuid().openapi('DestinationDefinitionId')

const DestinationIdSchema = z.uuid().openapi('DestinationId')

const WorkspaceIdSchema = z.uuid().openapi('WorkspaceId')

const CompleteDestinationOAuthRequestSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    destinationId: DestinationIdSchema.exactOptional(),
    oAuthInputConfiguration: OAuthConfigurationSchema.exactOptional(),
    queryParams: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'The query parameters present in the redirect URL after a user granted consent e.g auth code',
      }),
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.',
      }),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['destinationDefinitionId', 'workspaceId'] })
  .openapi('CompleteDestinationOAuthRequest')

const CompleteOAuthResponseSchema = z.looseObject({}).openapi('CompleteOAuthResponse')

const SourceDefinitionIdSchema = z.uuid().openapi('SourceDefinitionId')

const SourceIdSchema = z.uuid().openapi('SourceId')

const CompleteSourceOauthRequestSchema = z
  .object({
    oAuthInputConfiguration: OAuthConfigurationSchema.exactOptional(),
    queryParams: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'The query parameters present in the redirect URL after a user granted consent e.g auth code',
      }),
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When completing OAuth flow to gain an access token, some API sometimes requires to verify that the app re-send the redirectUrl that was used when consent was given.',
      }),
    sourceDefinitionId: SourceDefinitionIdSchema,
    sourceId: SourceIdSchema.exactOptional(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['sourceDefinitionId', 'workspaceId'] })
  .openapi('CompleteSourceOauthRequest')

const GeographySchema = z.enum(['auto', 'us', 'eu']).openapi('Geography')

const NamespaceDefinitionTypeSchema = z
  .enum(['source', 'destination', 'customformat'])
  .openapi({ description: 'Method used for computing final namespace in destination' })
  .openapi('NamespaceDefinitionType')

const NonBreakingChangesPreferenceSchema = z
  .enum(['ignore', 'disable'])
  .openapi('NonBreakingChangesPreference')

const OperationIdSchema = z.uuid().openapi('OperationId')

const ConnectionScheduleSchema = z
  .object({
    timeUnit: z.enum(['minutes', 'hours', 'days', 'weeks', 'months']),
    units: z
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
  })
  .openapi({ description: 'if null, then no schedule is set.', required: ['units', 'timeUnit'] })
  .openapi('ConnectionSchedule')

const ConnectionScheduleDataSchema = z
  .object({
    basicSchedule: z
      .object({
        timeUnit: z.enum(['minutes', 'hours', 'days', 'weeks', 'months']),
        units: z
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
      })
      .exactOptional()
      .openapi({ required: ['timeUnit', 'units'] }),
    cron: z
      .object({ cronExpression: z.string(), cronTimeZone: z.string() })
      .exactOptional()
      .openapi({ required: ['cronExpression', 'cronTimeZone'] }),
  })
  .openapi({
    description: 'schedule for when the the connection should run, per the schedule type',
    required: [],
  })
  .openapi('ConnectionScheduleData')

const ConnectionScheduleTypeSchema = z
  .enum(['manual', 'basic', 'cron'])
  .openapi({ description: 'determine how the schedule data should be interpreted' })
  .openapi('ConnectionScheduleType')

const ConnectionStatusSchema = z
  .enum(['active', 'inactive', 'deprecated'])
  .openapi({
    description:
      'Active means that data is flowing through the connection. Inactive means it is not. Deprecated means the connection is off and cannot be re-activated. the schema field describes the elements of the schema that will be synced.',
  })
  .openapi('ConnectionStatus')

const ConnectionCreateSchema = z
  .object({
    destinationId: DestinationIdSchema,
    geography: GeographySchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Optional name of the connection' }),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema.exactOptional(),
    notifySchemaChanges: z.boolean().exactOptional(),
    operationIds: z.array(OperationIdSchema).exactOptional(),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    sourceCatalogId: z.uuid().exactOptional(),
    sourceId: SourceIdSchema,
    status: ConnectionStatusSchema,
    syncCatalog: AirbyteCatalogSchema.exactOptional(),
  })
  .openapi({ required: ['sourceId', 'destinationId', 'status'] })
  .openapi('ConnectionCreate')

const ConnectionIdRequestBodySchema = z
  .object({ connectionId: ConnectionIdSchema })
  .openapi({ required: ['connectionId'] })
  .openapi('ConnectionIdRequestBody')

const ConnectionReadSchema = z
  .object({
    breakingChange: z.boolean(),
    connectionId: ConnectionIdSchema,
    destinationId: DestinationIdSchema,
    geography: GeographySchema.exactOptional(),
    name: z.string(),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema.exactOptional(),
    notifySchemaChanges: z.boolean().exactOptional(),
    operationIds: z.array(OperationIdSchema).exactOptional(),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    sourceCatalogId: z.uuid().exactOptional(),
    sourceId: SourceIdSchema,
    status: ConnectionStatusSchema,
    syncCatalog: AirbyteCatalogSchema,
  })
  .openapi({
    required: [
      'connectionId',
      'name',
      'sourceId',
      'destinationId',
      'syncCatalog',
      'status',
      'breakingChange',
    ],
  })
  .openapi('ConnectionRead')

const ConnectionReadListSchema = z
  .object({ connections: z.array(ConnectionReadSchema) })
  .openapi({ required: ['connections'] })
  .openapi('ConnectionReadList')

const DestinationSearchSchema = z
  .object({
    connectionConfiguration: DestinationConfigurationSchema.exactOptional(),
    destinationDefinitionId: DestinationDefinitionIdSchema.exactOptional(),
    destinationId: DestinationIdSchema.exactOptional(),
    destinationName: z.string().exactOptional(),
    name: z.string().exactOptional(),
    workspaceId: WorkspaceIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DestinationSearch')

const SourceSearchSchema = z
  .object({
    connectionConfiguration: SourceConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
    sourceDefinitionId: SourceDefinitionIdSchema.exactOptional(),
    sourceId: SourceIdSchema.exactOptional(),
    sourceName: z.string().exactOptional(),
    workspaceId: WorkspaceIdSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SourceSearch')

const ConnectionSearchSchema = z
  .object({
    connectionId: ConnectionIdSchema.exactOptional(),
    destination: DestinationSearchSchema.exactOptional(),
    destinationId: DestinationIdSchema.exactOptional(),
    name: z.string().exactOptional(),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    source: SourceSearchSchema.exactOptional(),
    sourceId: SourceIdSchema.exactOptional(),
    status: ConnectionStatusSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ConnectionSearch')

const ConnectionStateCreateOrUpdateSchema = z
  .object({ connectionId: ConnectionIdSchema, connectionState: ConnectionStateSchema })
  .openapi({ required: ['connectionId', 'connectionState'] })
  .openapi('ConnectionStateCreateOrUpdate')

const ConnectionUpdateSchema = z
  .object({
    breakingChange: z.boolean().exactOptional(),
    connectionId: ConnectionIdSchema,
    geography: GeographySchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name that will be set to this connection' }),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema.exactOptional(),
    notifySchemaChanges: z.boolean().exactOptional(),
    operationIds: z.array(OperationIdSchema).exactOptional(),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    sourceCatalogId: z.uuid().exactOptional(),
    status: ConnectionStatusSchema.exactOptional(),
    syncCatalog: AirbyteCatalogSchema.exactOptional(),
  })
  .openapi({
    description:
      'Used to apply a patch-style update to a connection, which means that null properties remain unchanged',
    required: ['connectionId'],
  })
  .openapi('ConnectionUpdate')

const DestinationDefinitionCreateSchema = z
  .object({
    dockerImageTag: z.string(),
    dockerRepository: z.string(),
    documentationUrl: z.url(),
    icon: z.string().exactOptional(),
    name: z.string(),
    resourceRequirements: ActorDefinitionResourceRequirementsSchema.exactOptional(),
  })
  .openapi({ required: ['name', 'dockerRepository', 'dockerImageTag', 'documentationUrl'] })
  .openapi('DestinationDefinitionCreate')

const CustomDestinationDefinitionCreateSchema = z
  .object({
    destinationDefinition: DestinationDefinitionCreateSchema,
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['workspaceId', 'destinationDefinition'] })
  .openapi('CustomDestinationDefinitionCreate')

const SourceDefinitionCreateSchema = z
  .object({
    dockerImageTag: z.string(),
    dockerRepository: z.string(),
    documentationUrl: z.url(),
    icon: z.string().exactOptional(),
    name: z.string(),
    resourceRequirements: ActorDefinitionResourceRequirementsSchema.exactOptional(),
  })
  .openapi({ required: ['name', 'dockerRepository', 'dockerImageTag', 'documentationUrl'] })
  .openapi('SourceDefinitionCreate')

const CustomSourceDefinitionCreateSchema = z
  .object({ sourceDefinition: SourceDefinitionCreateSchema, workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['workspaceId', 'sourceDefinition'] })
  .openapi('CustomSourceDefinitionCreate')

const CustomerIdSchema = z.uuid().openapi('CustomerId')

const CustomerioNotificationConfigurationSchema = z
  .object({})
  .openapi('CustomerioNotificationConfiguration')

const DataTypeSchema = z
  .enum(['string', 'number', 'boolean', 'object', 'array'])
  .openapi('DataType')

const DbMigrationStateSchema = z
  .enum([
    'pending',
    'above_target',
    'below_baseline',
    'baseline',
    'ignored',
    'missing_success',
    'missing_failed',
    'success',
    'undone',
    'available',
    'failed',
    'out_of_order',
    'future_success',
    'future_failed',
    'outdated',
    'superseded',
    'deleted',
  ])
  .openapi('DbMigrationState')

const DbMigrationReadSchema = z
  .object({
    migratedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    migratedBy: z.string().exactOptional(),
    migrationDescription: z.string(),
    migrationScript: z.string().exactOptional(),
    migrationState: DbMigrationStateSchema.exactOptional(),
    migrationType: z.string(),
    migrationVersion: z.string(),
  })
  .openapi({ required: ['migrationType', 'migrationVersion', 'migrationDescription'] })
  .openapi('DbMigrationRead')

const DbMigrationExecutionReadSchema = z
  .object({
    executedMigrations: z.array(DbMigrationReadSchema).exactOptional(),
    initialVersion: z.string().exactOptional(),
    targetVersion: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DbMigrationExecutionRead')

const DbMigrationReadListSchema = z
  .object({ migrations: z.array(DbMigrationReadSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('DbMigrationReadList')

const DbMigrationRequestBodySchema = z
  .object({ database: z.string() })
  .openapi({ required: ['database'] })
  .openapi('DbMigrationRequestBody')

const DestinationAuthSpecificationSchema = AuthSpecificationSchema.openapi(
  'DestinationAuthSpecification',
)

const DestinationCloneConfigurationSchema = z
  .object({
    connectionConfiguration: DestinationConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DestinationCloneConfiguration')

const DestinationCloneRequestBodySchema = z
  .object({
    destinationCloneId: DestinationIdSchema,
    destinationConfiguration: DestinationCloneConfigurationSchema.exactOptional(),
  })
  .openapi({
    description:
      'The values required to configure the destination. The schema for this should have an id of the existing destination along with the configuration you want to change in case.',
    required: ['destinationCloneId'],
  })
  .openapi('DestinationCloneRequestBody')

const DestinationCoreConfigSchema = z
  .object({
    connectionConfiguration: DestinationConfigurationSchema,
    destinationDefinitionId: DestinationDefinitionIdSchema,
    destinationId: DestinationIdSchema.exactOptional(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['workspaceId', 'destinationDefinitionId', 'connectionConfiguration'] })
  .openapi('DestinationCoreConfig')

const DestinationCreateSchema = z
  .object({
    connectionConfiguration: DestinationConfigurationSchema,
    destinationDefinitionId: DestinationDefinitionIdSchema,
    name: z.string(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({
    required: ['name', 'workspaceId', 'destinationDefinitionId', 'connectionConfiguration'],
  })
  .openapi('DestinationCreate')

const DestinationDefinitionIdRequestBodySchema = z
  .object({ destinationDefinitionId: DestinationDefinitionIdSchema })
  .openapi({ required: ['destinationDefinitionId'] })
  .openapi('DestinationDefinitionIdRequestBody')

const DestinationDefinitionIdWithWorkspaceIdSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['destinationDefinitionId', 'workspaceId'] })
  .openapi('DestinationDefinitionIdWithWorkspaceId')

const NormalizationDestinationDefinitionConfigSchema = z
  .strictObject({
    normalizationIntegrationType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'a field indicating the type of integration dialect to use for normalization.',
      }),
    normalizationRepository: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'a field indicating the name of the repository to be used for normalization. If the value of the flag is NULL - normalization is not used.',
      }),
    normalizationTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'a field indicating the tag of the docker repository to be used for normalization.',
      }),
    supported: z
      .boolean()
      .default(false)
      .openapi({ description: 'whether the destination definition supports normalization.' }),
  })
  .openapi({
    description: 'describes a normalization config for destination definition',
    required: ['supported'],
  })
  .openapi('NormalizationDestinationDefinitionConfig')

const ReleaseStageSchema = z
  .enum(['alpha', 'beta', 'generally_available', 'custom'])
  .openapi('ReleaseStage')

const DestinationDefinitionReadSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    dockerImageTag: z.string(),
    dockerRepository: z.string(),
    documentationUrl: z.url(),
    icon: z.string().exactOptional(),
    name: z.string(),
    normalizationConfig: NormalizationDestinationDefinitionConfigSchema,
    protocolVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Airbyte Protocol version supported by the connector' }),
    releaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The date when this connector was first released, in yyyy-mm-dd format.',
      }),
    releaseStage: ReleaseStageSchema.exactOptional(),
    resourceRequirements: ActorDefinitionResourceRequirementsSchema.exactOptional(),
    supportsDbt: z
      .boolean()
      .openapi({
        description:
          'an optional flag indicating whether DBT is used in the normalization. If the flag value is NULL - DBT is not used.',
      }),
  })
  .openapi({
    required: [
      'destinationDefinitionId',
      'name',
      'dockerRepository',
      'dockerImageTag',
      'documentationUrl',
      'supportsDbt',
      'normalizationConfig',
    ],
  })
  .openapi('DestinationDefinitionRead')

const DestinationDefinitionReadListSchema = z
  .object({ destinationDefinitions: z.array(DestinationDefinitionReadSchema) })
  .openapi({ required: ['destinationDefinitions'] })
  .openapi('DestinationDefinitionReadList')

const DestinationDefinitionSpecificationSchema = z
  .any()
  .openapi({
    description:
      'The specification for what values are required to configure the destinationDefinition.',
    example: { user: { type: 'string' } },
  })
  .openapi('DestinationDefinitionSpecification')

const DestinationDefinitionSpecificationReadSchema = z
  .object({
    advancedAuth: AdvancedAuthSchema.exactOptional(),
    authSpecification: AuthSpecificationSchema.exactOptional(),
    connectionSpecification: DestinationDefinitionSpecificationSchema.exactOptional(),
    destinationDefinitionId: DestinationDefinitionIdSchema,
    documentationUrl: z.string().exactOptional(),
    jobInfo: SynchronousJobReadSchema,
    supportedDestinationSyncModes: z.array(DestinationSyncModeSchema).exactOptional(),
  })
  .openapi({ required: ['destinationDefinitionId', 'jobInfo'] })
  .openapi('DestinationDefinitionSpecificationRead')

const DestinationDefinitionUpdateSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    dockerImageTag: z.string().exactOptional(),
    resourceRequirements: ActorDefinitionResourceRequirementsSchema.exactOptional(),
  })
  .openapi({ required: ['destinationDefinitionId', 'dockerImageag'] })
  .openapi('DestinationDefinitionUpdate')

const DestinationIdRequestBodySchema = z
  .object({ destinationId: DestinationIdSchema })
  .openapi({ required: ['destinationId'] })
  .openapi('DestinationIdRequestBody')

const DestinationOauthConsentRequestSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    destinationId: DestinationIdSchema.exactOptional(),
    oAuthInputConfiguration: OAuthConfigurationSchema.exactOptional(),
    redirectUrl: z
      .string()
      .openapi({ description: 'The url to redirect to after getting the user consent' }),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['destinationDefinitionId', 'workspaceId', 'redirectUrl'] })
  .openapi('DestinationOauthConsentRequest')

const DestinationReadSchema = z
  .object({
    connectionConfiguration: DestinationConfigurationSchema,
    destinationDefinitionId: DestinationDefinitionIdSchema,
    destinationId: DestinationIdSchema,
    destinationName: z.string(),
    icon: z.string().exactOptional(),
    name: z.string(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({
    required: [
      'destinationDefinitionId',
      'destinationId',
      'workspaceId',
      'connectionConfiguration',
      'name',
      'destinationName',
    ],
  })
  .openapi('DestinationRead')

const DestinationReadListSchema = z
  .object({ destinations: z.array(DestinationReadSchema) })
  .openapi({ required: ['destinations'] })
  .openapi('DestinationReadList')

const DestinationSnippetReadSchema = z
  .object({
    destinationDefinitionId: DestinationDefinitionIdSchema,
    destinationId: DestinationIdSchema,
    destinationName: z.string(),
    icon: z.string().exactOptional(),
    name: z.string(),
  })
  .openapi({ required: ['destinationId', 'name', 'destinationDefinitionId', 'destinationName'] })
  .openapi('DestinationSnippetRead')

const DestinationUpdateSchema = z
  .object({
    connectionConfiguration: DestinationConfigurationSchema,
    destinationId: DestinationIdSchema,
    name: z.string(),
  })
  .openapi({ required: ['destinationId', 'connectionConfiguration', 'name'] })
  .openapi('DestinationUpdate')

const DiscoverCatalogResultSchema = z
  .object({ catalogId: z.uuid() })
  .openapi({ required: ['catalogId'] })
  .openapi('DiscoverCatalogResult')

const HealthCheckReadSchema = z
  .object({ available: z.boolean() })
  .openapi({ required: ['available'] })
  .openapi('HealthCheckRead')

const ImportReadSchema = z
  .object({ reason: z.string().exactOptional(), status: z.enum(['succeeded', 'failed']) })
  .openapi({ required: ['status'] })
  .openapi('ImportRead')

const ResourceIdSchema = z.uuid().openapi('ResourceId')

const ImportRequestBodySchema = z
  .object({ resourceId: ResourceIdSchema, workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['resourceId', 'workspaceId'] })
  .openapi('ImportRequestBody')

const InternalOperationResultSchema = z
  .object({ succeeded: z.boolean() })
  .openapi({ required: ['succeeded'] })
  .openapi('InternalOperationResult')

const InvalidInputPropertySchema = z
  .object({
    invalidValue: z.string().exactOptional(),
    message: z.string().exactOptional(),
    propertyPath: z.string(),
  })
  .openapi({ required: ['propertyPath'] })
  .openapi('InvalidInputProperty')

const InvalidInputExceptionInfoSchema = z
  .object({
    exceptionClassName: z.string().exactOptional(),
    exceptionStack: z.array(z.string()).exactOptional(),
    message: z.string(),
    validationErrors: z.array(InvalidInputPropertySchema),
  })
  .openapi({ required: ['message', 'validationErrors'] })
  .openapi('InvalidInputExceptionInfo')

const JobCreatedAtSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    description: 'epoch time of the latest sync job. null if no sync job has taken place.',
  })
  .openapi('JobCreatedAt')

const JobIdSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64(),
  )
  .openapi({ type: 'integer', format: 'int64' })
  .openapi('JobId')

const SourceDefinitionReadSchema = z
  .object({
    dockerImageTag: z.string(),
    dockerRepository: z.string(),
    documentationUrl: z.url().exactOptional(),
    icon: z.string().exactOptional(),
    name: z.string(),
    protocolVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Airbyte Protocol version supported by the connector' }),
    releaseDate: z.iso
      .date()
      .exactOptional()
      .openapi({
        description: 'The date when this connector was first released, in yyyy-mm-dd format.',
      }),
    releaseStage: ReleaseStageSchema.exactOptional(),
    resourceRequirements: ActorDefinitionResourceRequirementsSchema.exactOptional(),
    sourceDefinitionId: SourceDefinitionIdSchema,
    sourceType: z.enum(['api', 'file', 'database', 'custom']).exactOptional(),
  })
  .openapi({ required: ['sourceDefinitionId', 'name', 'dockerRepository', 'dockerImageTag'] })
  .openapi('SourceDefinitionRead')

const JobStatusSchema = z
  .enum(['pending', 'running', 'incomplete', 'failed', 'succeeded', 'cancelled'])
  .openapi('JobStatus')

const JobDebugReadSchema = z
  .object({
    airbyteVersion: z.string(),
    configId: z.string(),
    configType: JobConfigTypeSchema,
    destinationDefinition: DestinationDefinitionReadSchema,
    id: JobIdSchema,
    sourceDefinition: SourceDefinitionReadSchema,
    status: JobStatusSchema,
  })
  .openapi({
    required: [
      'id',
      'configType',
      'configId',
      'status',
      'airbyteVersion',
      'sourceDefinition',
      'destinationDefinition',
    ],
  })
  .openapi('JobDebugRead')

const WorkflowStateReadSchema = z
  .object({ running: z.boolean() })
  .openapi({ required: ['running'] })
  .openapi('WorkflowStateRead')

const JobDebugInfoReadSchema = z
  .object({
    attempts: z.array(AttemptInfoReadSchema),
    job: JobDebugReadSchema,
    workflowState: WorkflowStateReadSchema.exactOptional(),
  })
  .openapi({ required: ['job', 'attempts'] })
  .openapi('JobDebugInfoRead')

const JobIdRequestBodySchema = z
  .object({ id: JobIdSchema })
  .openapi({ required: ['id'] })
  .openapi('JobIdRequestBody')

const ResetConfigSchema = z
  .object({ streamsToReset: z.array(StreamDescriptorSchema).exactOptional() })
  .openapi({
    description:
      'contains information about how a reset was configured. only populated if the job was a reset.',
    required: [],
  })
  .openapi('ResetConfig')

const JobReadSchema = z
  .object({
    configId: z.string(),
    configType: JobConfigTypeSchema,
    createdAt: z
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
    id: JobIdSchema,
    resetConfig: ResetConfigSchema.exactOptional(),
    startedAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    status: JobStatusSchema,
    updatedAt: z
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
  })
  .openapi({ required: ['id', 'configType', 'configId', 'createdAt', 'updatedAt', 'status'] })
  .openapi('JobRead')

const JobInfoLightReadSchema = z
  .object({ job: JobReadSchema })
  .openapi({ required: ['job'] })
  .openapi('JobInfoLightRead')

const JobInfoReadSchema = z
  .object({ attempts: z.array(AttemptInfoReadSchema), job: JobReadSchema })
  .openapi({ required: ['job', 'attempts'] })
  .openapi('JobInfoRead')

const PaginationSchema = z
  .object({ pageSize: z.int().exactOptional(), rowOffset: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('Pagination')

const JobListRequestBodySchema = z
  .object({
    configId: z.string(),
    configTypes: z.array(JobConfigTypeSchema),
    includingJobId: JobIdSchema.exactOptional().openapi({
      description:
        'If the job with this ID exists for the specified connection, returns the number of pages of jobs necessary to include this job. Returns an empty list if this job is specified and cannot be found in this connection.',
    }),
    pagination: PaginationSchema.exactOptional(),
  })
  .openapi({ required: ['configTypes', 'configId'] })
  .openapi('JobListRequestBody')

const JobOptionalReadSchema = z
  .object({ job: JobReadSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('JobOptionalRead')

const JobWithAttemptsReadSchema = z
  .object({
    attempts: z.array(AttemptReadSchema).exactOptional(),
    job: JobReadSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('JobWithAttemptsRead')

const JobReadListSchema = z
  .object({
    jobs: z.array(JobWithAttemptsReadSchema),
    totalJobCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'the total count of jobs for the specified connection',
      }),
  })
  .openapi({ required: ['jobs', 'totalJobCount'] })
  .openapi('JobReadList')

const KnownExceptionInfoSchema = z
  .object({
    exceptionClassName: z.string().exactOptional(),
    exceptionStack: z.array(z.string()).exactOptional(),
    message: z.string(),
    rootCauseExceptionClassName: z.string().exactOptional(),
    rootCauseExceptionStack: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: ['message'] })
  .openapi('KnownExceptionInfo')

const LogTypeSchema = z
  .enum(['server', 'scheduler'])
  .openapi({ description: 'type/source of logs produced' })
  .openapi('LogType')

const LogsRequestBodySchema = z
  .object({ logType: LogTypeSchema })
  .openapi({ required: ['logType'] })
  .openapi('LogsRequestBody')

const NotFoundKnownExceptionInfoSchema = z
  .object({
    exceptionClassName: z.string().exactOptional(),
    exceptionStack: z.array(z.string()).exactOptional(),
    id: z.string().exactOptional(),
    message: z.string(),
    rootCauseExceptionClassName: z.string().exactOptional(),
    rootCauseExceptionStack: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: ['message'] })
  .openapi('NotFoundKnownExceptionInfo')

const NotificationTypeSchema = z.enum(['slack', 'customerio']).openapi('NotificationType')

const SlackNotificationConfigurationSchema = z
  .object({ webhook: z.string() })
  .openapi({ required: ['webhook'] })
  .openapi('SlackNotificationConfiguration')

const NotificationSchema = z
  .object({
    customerioConfiguration: CustomerioNotificationConfigurationSchema.exactOptional(),
    notificationType: NotificationTypeSchema,
    sendOnFailure: z.boolean().default(true),
    sendOnSuccess: z.boolean().default(false),
    slackConfiguration: SlackNotificationConfigurationSchema.exactOptional(),
  })
  .openapi({ required: ['notificationType', 'sendOnSuccess', 'sendOnFailure'] })
  .openapi('Notification')

const NotificationReadSchema = z
  .object({ message: z.string().exactOptional(), status: z.enum(['succeeded', 'failed']) })
  .openapi({ required: ['status'] })
  .openapi('NotificationRead')

const OAuthConsentReadSchema = z
  .object({ consentUrl: z.string() })
  .openapi({ required: ['consentUrl'] })
  .openapi('OAuthConsentRead')

const OAuthInputConfigurationSchema = OAuthConfigurationSchema.openapi('OAuthInputConfiguration')

const OperatorDbtSchema = z
  .object({
    dbtArguments: z.string().exactOptional(),
    dockerImage: z.string().exactOptional(),
    gitRepoBranch: z.string().exactOptional(),
    gitRepoUrl: z.string(),
  })
  .openapi({ required: ['gitRepoUrl'] })
  .openapi('OperatorDbt')

const OperatorNormalizationSchema = z
  .object({ option: z.literal('basic').exactOptional() })
  .openapi({ required: [] })
  .openapi('OperatorNormalization')

const OperatorTypeSchema = z.enum(['normalization', 'dbt', 'webhook']).openapi('OperatorType')

const OperatorWebhookSchema = z
  .object({
    dbtCloud: z
      .object({
        accountId: z.int().openapi({ description: 'The account id associated with the job' }),
        jobId: z.int().openapi({ description: 'The job id associated with the job' }),
      })
      .exactOptional()
      .openapi({ required: ['accountId', 'jobId'] }),
    executionBody: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'DEPRECATED. Populate dbtCloud instead.' }),
    executionUrl: z
      .string()
      .exactOptional()
      .openapi({ deprecated: true, description: 'DEPRECATED. Populate dbtCloud instead.' }),
    webhookConfigId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The id of the webhook configs to use from the workspace.' }),
    webhookType: z.literal('dbtCloud').exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OperatorWebhook')

const OperatorConfigurationSchema = z
  .object({
    dbt: OperatorDbtSchema.exactOptional(),
    normalization: OperatorNormalizationSchema.exactOptional(),
    operatorType: OperatorTypeSchema,
    webhook: OperatorWebhookSchema.exactOptional(),
  })
  .openapi({ required: ['operatorType'] })
  .openapi('OperatorConfiguration')

const OperationCreateSchema = z
  .object({
    name: z.string(),
    operatorConfiguration: OperatorConfigurationSchema,
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['name', 'operatorConfiguration', 'workspaceId'] })
  .openapi('OperationCreate')

const OperationIdRequestBodySchema = z
  .object({ operationId: OperationIdSchema })
  .openapi({ required: ['operationId'] })
  .openapi('OperationIdRequestBody')

const OperationReadSchema = z
  .object({
    name: z.string(),
    operationId: OperationIdSchema,
    operatorConfiguration: OperatorConfigurationSchema,
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['operationId', 'name', 'operatorConfiguration', 'workspaceId'] })
  .openapi('OperationRead')

const OperationReadListSchema = z
  .object({ operations: z.array(OperationReadSchema) })
  .openapi({ required: ['operations'] })
  .openapi('OperationReadList')

const OperationUpdateSchema = z
  .object({
    name: z.string(),
    operationId: OperationIdSchema,
    operatorConfiguration: OperatorConfigurationSchema,
  })
  .openapi({ required: ['operationId', 'name', 'operatorConfiguration'] })
  .openapi('OperationUpdate')

const PrivateDestinationDefinitionReadSchema = z
  .object({ destinationDefinition: DestinationDefinitionReadSchema, granted: z.boolean() })
  .openapi({ required: ['destinationDefinition', 'granted'] })
  .openapi('PrivateDestinationDefinitionRead')

const PrivateDestinationDefinitionReadListSchema = z
  .object({ destinationDefinitions: z.array(PrivateDestinationDefinitionReadSchema) })
  .openapi({ required: ['destinationDefinitions'] })
  .openapi('PrivateDestinationDefinitionReadList')

const PrivateSourceDefinitionReadSchema = z
  .object({ granted: z.boolean(), sourceDefinition: SourceDefinitionReadSchema })
  .openapi({ required: ['sourceDefinition', 'granted'] })
  .openapi('PrivateSourceDefinitionRead')

const PrivateSourceDefinitionReadListSchema = z
  .object({ sourceDefinitions: z.array(PrivateSourceDefinitionReadSchema) })
  .openapi({ required: ['sourceDefinitions'] })
  .openapi('PrivateSourceDefinitionReadList')

const SaveAttemptSyncConfigRequestBodySchema = z
  .object({
    attemptNumber: AttemptNumberSchema,
    jobId: JobIdSchema,
    syncConfig: AttemptSyncConfigSchema,
  })
  .openapi({ required: ['jobId', 'attemptNumber', 'syncConfig'] })
  .openapi('SaveAttemptSyncConfigRequestBody')

const SaveStatsRequestBodySchema = z
  .object({
    attemptNumber: AttemptNumberSchema,
    jobId: JobIdSchema,
    stats: AttemptStatsSchema,
    streamStats: z.array(AttemptStreamStatsSchema).exactOptional(),
  })
  .openapi({ required: ['jobId', 'attemptNumber', 'stats'] })
  .openapi('SaveStatsRequestBody')

const SchemaChangeSchema = z.enum(['no_change', 'non_breaking', 'breaking']).openapi('SchemaChange')

const SetInstancewideDestinationOauthParamsRequestBodySchema = z
  .object({ destinationDefinitionId: DestinationDefinitionIdSchema, params: z.looseObject({}) })
  .openapi({ required: ['destinationDefinitionId', 'params'] })
  .openapi('SetInstancewideDestinationOauthParamsRequestBody')

const SetInstancewideSourceOauthParamsRequestBodySchema = z
  .object({ params: z.looseObject({}), sourceDefinitionId: SourceDefinitionIdSchema })
  .openapi({ required: ['sourceDefinitionId', 'params'] })
  .openapi('SetInstancewideSourceOauthParamsRequestBody')

const WorkflowIdSchema = z.string().openapi('WorkflowId')

const SetWorkflowInAttemptRequestBodySchema = z
  .object({
    attemptNumber: AttemptNumberSchema,
    jobId: JobIdSchema,
    processingTaskQueue: z.string().default('').exactOptional(),
    workflowId: WorkflowIdSchema,
  })
  .openapi({ required: ['jobId', 'attemptNumber', 'workflowId'] })
  .openapi('SetWorkflowInAttemptRequestBody')

const SlugRequestBodySchema = z
  .object({ slug: z.string() })
  .openapi({ required: ['slug'] })
  .openapi('SlugRequestBody')

const SourceAuthSpecificationSchema = AuthSpecificationSchema.openapi('SourceAuthSpecification')

const SourceCloneConfigurationSchema = z
  .object({
    connectionConfiguration: SourceConfigurationSchema.exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SourceCloneConfiguration')

const SourceCloneRequestBodySchema = z
  .object({
    sourceCloneId: SourceIdSchema,
    sourceConfiguration: SourceCloneConfigurationSchema.exactOptional(),
  })
  .openapi({
    description:
      'The values required to configure the source. The schema for this should have an id of the existing source along with the configuration you want to change in case.',
    required: ['sourceCloneId'],
  })
  .openapi('SourceCloneRequestBody')

const SourceCoreConfigSchema = z
  .object({
    connectionConfiguration: SourceConfigurationSchema,
    sourceDefinitionId: SourceDefinitionIdSchema,
    sourceId: SourceIdSchema.exactOptional(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['sourceDefinitionId', 'connectionConfiguration', 'workspaceId'] })
  .openapi('SourceCoreConfig')

const SourceCreateSchema = z
  .object({
    connectionConfiguration: SourceConfigurationSchema,
    name: z.string(),
    sourceDefinitionId: SourceDefinitionIdSchema,
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['workspaceId', 'name', 'sourceDefinitionId', 'connectionConfiguration'] })
  .openapi('SourceCreate')

const SourceDefinitionIdRequestBodySchema = z
  .object({ sourceDefinitionId: SourceDefinitionIdSchema })
  .openapi({ required: ['sourceDefinitionId'] })
  .openapi('SourceDefinitionIdRequestBody')

const SourceDefinitionIdWithWorkspaceIdSchema = z
  .object({ sourceDefinitionId: SourceDefinitionIdSchema, workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['sourceDefinitionId', 'workspaceId'] })
  .openapi('SourceDefinitionIdWithWorkspaceId')

const SourceDefinitionReadListSchema = z
  .object({ sourceDefinitions: z.array(SourceDefinitionReadSchema) })
  .openapi({ required: ['sourceDefinitions'] })
  .openapi('SourceDefinitionReadList')

const SourceDefinitionSpecificationSchema = z
  .object({})
  .openapi({
    description:
      'The specification for what values are required to configure the sourceDefinition.',
    example: { user: { type: 'string' } },
  })
  .openapi('SourceDefinitionSpecification')

const SourceDefinitionSpecificationReadSchema = z
  .object({
    advancedAuth: AdvancedAuthSchema.exactOptional(),
    authSpecification: AuthSpecificationSchema.exactOptional(),
    connectionSpecification: SourceDefinitionSpecificationSchema.exactOptional(),
    documentationUrl: z.string().exactOptional(),
    jobInfo: SynchronousJobReadSchema,
    sourceDefinitionId: SourceDefinitionIdSchema,
  })
  .openapi({ required: ['sourceDefinitionId', 'jobInfo'] })
  .openapi('SourceDefinitionSpecificationRead')

const SourceDefinitionUpdateSchema = z
  .object({
    dockerImageTag: z.string(),
    resourceRequirements: ActorDefinitionResourceRequirementsSchema.exactOptional(),
    sourceDefinitionId: SourceDefinitionIdSchema,
  })
  .openapi({
    description:
      'Update the SourceDefinition. Currently, the only allowed attribute to update is the default docker image version.',
    required: ['sourceDefinitionId', 'dockerImageTag'],
  })
  .openapi('SourceDefinitionUpdate')

const SourceDiscoverSchemaReadSchema = z
  .object({
    breakingChange: z.boolean().exactOptional(),
    catalog: AirbyteCatalogSchema.exactOptional(),
    catalogDiff: CatalogDiffSchema.exactOptional(),
    catalogId: z.uuid().exactOptional(),
    connectionStatus: ConnectionStatusSchema.exactOptional(),
    jobInfo: SynchronousJobReadSchema,
  })
  .openapi({
    description:
      'Returns the results of a discover catalog job. If the job was not successful, the catalog field will not be present. jobInfo will aways be present and its status be used to determine if the job was successful or not.',
    required: ['jobInfo'],
  })
  .openapi('SourceDiscoverSchemaRead')

const SourceDiscoverSchemaRequestBodySchema = z
  .object({
    connectionId: z.uuid().exactOptional(),
    disable_cache: z.boolean().exactOptional(),
    notifySchemaChange: z.boolean().exactOptional(),
    sourceId: SourceIdSchema,
  })
  .openapi({ required: ['sourceId'] })
  .openapi('SourceDiscoverSchemaRequestBody')

const SourceDiscoverSchemaWriteRequestBodySchema = z
  .object({
    catalog: AirbyteCatalogSchema,
    configurationHash: z.string().exactOptional(),
    connectorVersion: z.string().exactOptional(),
    sourceId: SourceIdSchema.exactOptional(),
  })
  .openapi({ description: 'to write this requested object to database.', required: ['catalog'] })
  .openapi('SourceDiscoverSchemaWriteRequestBody')

const SourceIdRequestBodySchema = z
  .object({ sourceId: SourceIdSchema })
  .openapi({ required: ['sourceId'] })
  .openapi('SourceIdRequestBody')

const SourceOauthConsentRequestSchema = z
  .object({
    oAuthInputConfiguration: OAuthConfigurationSchema.exactOptional(),
    redirectUrl: z
      .string()
      .openapi({ description: 'The url to redirect to after getting the user consent' }),
    sourceDefinitionId: SourceDefinitionIdSchema,
    sourceId: SourceIdSchema.exactOptional(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['sourceDefinitionId', 'workspaceId', 'redirectUrl'] })
  .openapi('SourceOauthConsentRequest')

const SourceReadSchema = z
  .object({
    connectionConfiguration: SourceConfigurationSchema,
    icon: z.string().exactOptional(),
    name: z.string(),
    sourceDefinitionId: SourceDefinitionIdSchema,
    sourceId: SourceIdSchema,
    sourceName: z.string(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({
    required: [
      'sourceDefinitionId',
      'sourceId',
      'workspaceId',
      'connectionConfiguration',
      'name',
      'sourceName',
    ],
  })
  .openapi('SourceRead')

const SourceReadListSchema = z
  .object({ sources: z.array(SourceReadSchema) })
  .openapi({ required: ['sources'] })
  .openapi('SourceReadList')

const SourceSnippetReadSchema = z
  .object({
    icon: z.string().exactOptional(),
    name: z.string(),
    sourceDefinitionId: SourceDefinitionIdSchema,
    sourceId: SourceIdSchema,
    sourceName: z.string(),
  })
  .openapi({ required: ['sourceId', 'name', 'sourceDefinitionId', 'sourceName'] })
  .openapi('SourceSnippetRead')

const SourceUpdateSchema = z
  .object({
    connectionConfiguration: SourceConfigurationSchema,
    name: z.string(),
    sourceId: SourceIdSchema,
  })
  .openapi({ required: ['sourceId', 'connectionConfiguration', 'name'] })
  .openapi('SourceUpdate')

const UploadReadSchema = z
  .object({ resourceId: ResourceIdSchema.exactOptional(), status: z.enum(['succeeded', 'failed']) })
  .openapi({ required: ['status'] })
  .openapi('UploadRead')

const WebBackendCheckUpdatesReadSchema = z
  .object({ destinationDefinitions: z.int(), sourceDefinitions: z.int() })
  .openapi({
    description: 'Summary of source and destination definitions that could be updated',
    required: ['destinationDefinitions', 'sourceDefinitions'],
  })
  .openapi('WebBackendCheckUpdatesRead')

const WebBackendConnectionCreateSchema = z
  .object({
    destinationId: DestinationIdSchema,
    geography: GeographySchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Optional name of the connection' }),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema.exactOptional(),
    operationIds: z.array(OperationIdSchema).exactOptional(),
    operations: z.array(OperationCreateSchema).exactOptional(),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    sourceCatalogId: z.uuid().exactOptional(),
    sourceId: SourceIdSchema,
    status: ConnectionStatusSchema,
    syncCatalog: AirbyteCatalogSchema.exactOptional(),
  })
  .openapi({ required: ['sourceId', 'destinationId', 'status'] })
  .openapi('WebBackendConnectionCreate')

const WebBackendConnectionListItemSchema = z
  .object({
    connectionId: ConnectionIdSchema,
    destination: DestinationSnippetReadSchema,
    isSyncing: z.boolean(),
    latestSyncJobCreatedAt: JobCreatedAtSchema.exactOptional(),
    latestSyncJobStatus: JobStatusSchema.exactOptional(),
    name: z.string(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    schemaChange: SchemaChangeSchema,
    source: SourceSnippetReadSchema,
    status: ConnectionStatusSchema,
  })
  .openapi({
    description: 'Information about a connection that shows up in the connection list view.',
    required: [
      'connectionId',
      'name',
      'source',
      'destination',
      'status',
      'isSyncing',
      'schemaChange',
    ],
  })
  .openapi('WebBackendConnectionListItem')

const WebBackendConnectionListRequestBodySchema = z
  .object({
    destinationId: z.array(DestinationIdSchema).exactOptional(),
    sourceId: z.array(SourceIdSchema).exactOptional(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['workspaceId'] })
  .openapi('WebBackendConnectionListRequestBody')

const WebBackendConnectionReadSchema = z
  .object({
    catalogDiff: CatalogDiffSchema.exactOptional(),
    catalogId: z.uuid().exactOptional(),
    connectionId: ConnectionIdSchema,
    destination: DestinationReadSchema,
    destinationId: DestinationIdSchema,
    geography: GeographySchema.exactOptional(),
    isSyncing: z.boolean(),
    latestSyncJobCreatedAt: JobCreatedAtSchema.exactOptional(),
    latestSyncJobStatus: JobStatusSchema.exactOptional(),
    name: z.string(),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema,
    notifySchemaChanges: z.boolean(),
    operationIds: z.array(OperationIdSchema).exactOptional(),
    operations: z.array(OperationReadSchema).exactOptional(),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    schemaChange: SchemaChangeSchema,
    source: SourceReadSchema,
    sourceId: SourceIdSchema,
    status: ConnectionStatusSchema,
    syncCatalog: AirbyteCatalogSchema,
  })
  .openapi({
    required: [
      'connectionId',
      'name',
      'sourceId',
      'destinationId',
      'syncCatalog',
      'status',
      'source',
      'destination',
      'isSyncing',
      'schemaChange',
      'notifySchemaChanges',
      'nonBreakingChangesPreference',
    ],
  })
  .openapi('WebBackendConnectionRead')

const WebBackendConnectionReadListSchema = z
  .object({ connections: z.array(WebBackendConnectionListItemSchema) })
  .openapi({ required: ['connections'] })
  .openapi('WebBackendConnectionReadList')

const WebBackendConnectionRequestBodySchema = z
  .object({ connectionId: ConnectionIdSchema, withRefreshedCatalog: z.boolean().exactOptional() })
  .openapi({ required: ['connectionId'] })
  .openapi('WebBackendConnectionRequestBody')

const WebBackendOperationCreateOrUpdateSchema = z
  .object({
    name: z.string(),
    operationId: OperationIdSchema.exactOptional(),
    operatorConfiguration: OperatorConfigurationSchema,
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['name', 'operatorConfiguration', 'workspaceId'] })
  .openapi('WebBackendOperationCreateOrUpdate')

const WebBackendConnectionUpdateSchema = z
  .object({
    connectionId: ConnectionIdSchema,
    geography: GeographySchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name that will be set to the connection' }),
    namespaceDefinition: NamespaceDefinitionTypeSchema.exactOptional(),
    namespaceFormat: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Used when namespaceDefinition is 'customformat'. If blank then behaves like namespaceDefinition = 'destination'. If \"${SOURCE_NAMESPACE}\" then behaves like namespaceDefinition = 'source'.",
        example: '${SOURCE_NAMESPACE}',
      }),
    nonBreakingChangesPreference: NonBreakingChangesPreferenceSchema.exactOptional(),
    notifySchemaChanges: z.boolean().exactOptional(),
    operations: z.array(WebBackendOperationCreateOrUpdateSchema).exactOptional(),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Prefix that will be prepended to the name of each stream when it is written to the destination.',
      }),
    resourceRequirements: ResourceRequirementsSchema.exactOptional(),
    schedule: ConnectionScheduleSchema.exactOptional(),
    scheduleData: ConnectionScheduleDataSchema.exactOptional(),
    scheduleType: ConnectionScheduleTypeSchema.exactOptional(),
    skipReset: z.boolean().exactOptional(),
    sourceCatalogId: z.uuid().exactOptional(),
    status: ConnectionStatusSchema.exactOptional(),
    syncCatalog: AirbyteCatalogSchema.exactOptional(),
  })
  .openapi({
    description:
      'Used to apply a patch-style update to a connection, which means that null properties remain unchanged',
    required: ['connectionId'],
  })
  .openapi('WebBackendConnectionUpdate')

const WebBackendGeographiesListResultSchema = z
  .object({ geographies: z.array(GeographySchema) })
  .openapi({ required: ['geographies'] })
  .openapi('WebBackendGeographiesListResult')

const WebBackendWorkspaceStateSchema = z
  .object({ workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['workspaceId'] })
  .openapi('WebBackendWorkspaceState')

const WebBackendWorkspaceStateResultSchema = z
  .object({ hasConnections: z.boolean(), hasDestinations: z.boolean(), hasSources: z.boolean() })
  .openapi({ required: ['hasConnections', 'hasSources', 'hasDestinations'] })
  .openapi('WebBackendWorkspaceStateResult')

const WebhookConfigReadSchema = z
  .object({
    id: z.uuid(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'human-readable name e.g. for display in UI' }),
  })
  .openapi({
    description: 'the readable info for a webhook config; omits sensitive info e.g. auth token',
    required: ['id'],
  })
  .openapi('WebhookConfigRead')

const WebhookConfigWriteSchema = z
  .object({
    authToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'an auth token, to be passed as the value for an HTTP Authorization header.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'human readable name for this webhook e.g. for UI display.' }),
    validationUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'if supplied, the webhook config will be validated by checking that this URL returns a 2xx response.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WebhookConfigWrite')

const WorkspaceCreateSchema = z
  .object({
    anonymousDataCollection: z.boolean().exactOptional(),
    defaultGeography: GeographySchema.exactOptional(),
    displaySetupWizard: z.boolean().exactOptional(),
    email: z.email().exactOptional(),
    name: z.string(),
    news: z.boolean().exactOptional(),
    notifications: z.array(NotificationSchema).exactOptional(),
    securityUpdates: z.boolean().exactOptional(),
    webhookConfigs: z.array(WebhookConfigWriteSchema).exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('WorkspaceCreate')

const WorkspaceGiveFeedbackSchema = z
  .object({ workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['workspaceId'] })
  .openapi('WorkspaceGiveFeedback')

const WorkspaceIdRequestBodySchema = z
  .object({ workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['workspaceId'] })
  .openapi('WorkspaceIdRequestBody')

const WorkspaceReadSchema = z
  .object({
    anonymousDataCollection: z.boolean().exactOptional(),
    customerId: CustomerIdSchema,
    defaultGeography: GeographySchema.exactOptional(),
    displaySetupWizard: z.boolean().exactOptional(),
    email: z.email().exactOptional(),
    feedbackDone: z.boolean().exactOptional(),
    firstCompletedSync: z.boolean().exactOptional(),
    initialSetupComplete: z.boolean(),
    name: z.string(),
    news: z.boolean().exactOptional(),
    notifications: z.array(NotificationSchema).exactOptional(),
    securityUpdates: z.boolean().exactOptional(),
    slug: z.string(),
    webhookConfigs: z.array(WebhookConfigReadSchema).exactOptional(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({ required: ['workspaceId', 'customerId', 'name', 'slug', 'initialSetupComplete'] })
  .openapi('WorkspaceRead')

const WorkspaceReadListSchema = z
  .object({ workspaces: z.array(WorkspaceReadSchema) })
  .openapi({ required: ['workspaces'] })
  .openapi('WorkspaceReadList')

const WorkspaceUpdateSchema = z
  .object({
    anonymousDataCollection: z.boolean().exactOptional(),
    defaultGeography: GeographySchema.exactOptional(),
    displaySetupWizard: z.boolean().exactOptional(),
    email: z.email().exactOptional(),
    initialSetupComplete: z.boolean().exactOptional(),
    news: z.boolean().exactOptional(),
    notifications: z.array(NotificationSchema).exactOptional(),
    securityUpdates: z.boolean().exactOptional(),
    webhookConfigs: z.array(WebhookConfigWriteSchema).exactOptional(),
    workspaceId: WorkspaceIdSchema,
  })
  .openapi({
    description:
      'Used to apply a patch-style update to a workspace, which means that null properties remain unchanged',
    required: ['workspaceId'],
  })
  .openapi('WorkspaceUpdate')

const WorkspaceUpdateNameSchema = z
  .object({ name: z.string(), workspaceId: WorkspaceIdSchema })
  .openapi({ required: ['workspaceId', 'name'] })
  .openapi('WorkspaceUpdateName')

const ExceptionResponseResponse = {
  description: 'Exception occurred; see message for details.',
  content: { 'application/json': { schema: KnownExceptionInfoSchema } },
}

const InvalidInputResponseResponse = {
  description: 'Input failed validation',
  content: { 'application/json': { schema: InvalidInputExceptionInfoSchema } },
}

const NotFoundResponseResponse = {
  description: 'Object with given id was not found.',
  content: { 'application/json': { schema: NotFoundKnownExceptionInfoSchema } },
}

const BearerAuthSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const postV1AttemptSaveStatsRoute = createRoute({
  method: 'post',
  path: '/v1/attempt/save_stats',
  tags: ['attempt', 'internal'],
  summary: 'For worker to set sync stats of a running attempt.',
  operationId: 'saveStats',
  request: {
    body: {
      content: { 'application/json': { schema: SaveStatsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1AttemptSaveSyncConfigRoute = createRoute({
  method: 'post',
  path: '/v1/attempt/save_sync_config',
  tags: ['attempt', 'internal'],
  summary: 'For worker to save the AttemptSyncConfig for an attempt.',
  operationId: 'saveSyncConfig',
  request: {
    body: {
      content: { 'application/json': { schema: SaveAttemptSyncConfigRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1AttemptSetWorkflowInAttemptRoute = createRoute({
  method: 'post',
  path: '/v1/attempt/set_workflow_in_attempt',
  tags: ['attempt', 'internal'],
  summary: 'For worker to register the workflow id in attempt.',
  operationId: 'setWorkflowInAttempt',
  request: {
    body: {
      content: { 'application/json': { schema: SetWorkflowInAttemptRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: InternalOperationResultSchema } },
    },
  },
})

export const postV1ConnectionsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/connections/create',
  tags: ['connection'],
  summary: 'Create a connection between a source and a destination',
  operationId: 'createConnection',
  request: {
    body: { content: { 'application/json': { schema: ConnectionCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/connections/delete',
  tags: ['connection'],
  summary: 'Delete a connection',
  operationId: 'deleteConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsGetRoute = createRoute({
  method: 'post',
  path: '/v1/connections/get',
  tags: ['connection'],
  summary: 'Get a connection',
  operationId: 'getConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsListRoute = createRoute({
  method: 'post',
  path: '/v1/connections/list',
  tags: ['connection'],
  summary: 'Returns all connections for a workspace.',
  description: 'List connections for workspace. Does not return deleted connections.',
  operationId: 'listConnectionsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsListAllRoute = createRoute({
  method: 'post',
  path: '/v1/connections/list_all',
  tags: ['connection'],
  summary: 'Returns all connections for a workspace, including deleted connections.',
  description: 'List connections for workspace, including deleted connections.',
  operationId: 'listAllConnectionsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsResetRoute = createRoute({
  method: 'post',
  path: '/v1/connections/reset',
  tags: ['connection'],
  summary:
    'Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.',
  operationId: 'resetConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsSearchRoute = createRoute({
  method: 'post',
  path: '/v1/connections/search',
  tags: ['connection'],
  summary: 'Search connections',
  operationId: 'searchConnections',
  request: {
    body: { content: { 'application/json': { schema: ConnectionSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadListSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsSyncRoute = createRoute({
  method: 'post',
  path: '/v1/connections/sync',
  tags: ['connection'],
  summary: 'Trigger a manual sync of the connection',
  operationId: 'syncConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1ConnectionsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/connections/update',
  tags: ['connection'],
  summary: 'Update a connection',
  description:
    "Apply a patch-style update to a connection. Only fields present on the update request body will be updated.\nNote that if a catalog is present in the request body, the connection's entire catalog will be replaced\nwith the catalog from the request. This means that to modify a single stream, the entire new catalog\ncontaining the updated stream needs to be sent.\n",
  operationId: 'updateConnection',
  request: {
    body: { content: { 'application/json': { schema: ConnectionUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionSpecificationsGetRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definition_specifications/get',
  tags: ['destination_definition_specification'],
  summary: 'Get specification for a destinationDefinition',
  operationId: 'getDestinationDefinitionSpecification',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionSpecificationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsCreateCustomRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/create_custom',
  tags: ['destination_definition'],
  summary: 'Creates a custom destinationDefinition for the given workspace',
  operationId: 'createCustomDestinationDefinition',
  request: {
    body: { content: { 'application/json': { schema: CustomDestinationDefinitionCreateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/delete',
  tags: ['destination_definition'],
  summary: 'Delete a destination definition',
  operationId: 'deleteDestinationDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsGetRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/get',
  tags: ['destination_definition'],
  summary: 'Get destinationDefinition',
  operationId: 'getDestinationDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsGetForWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/get_for_workspace',
  tags: ['destination_definition'],
  summary: 'Get a destinationDefinition that is configured for the given workspace',
  operationId: 'getDestinationDefinitionForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsGrantDefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/grant_definition',
  tags: ['destination_definition'],
  summary: 'grant a private, non-custom destinationDefinition to a given workspace',
  operationId: 'grantDestinationDefinitionToWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateDestinationDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsListRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/list',
  tags: ['destination_definition'],
  summary:
    'List all the destinationDefinitions the current Airbyte deployment is configured to use',
  operationId: 'listDestinationDefinitions',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadListSchema } },
    },
  },
})

export const postV1DestinationDefinitionsListForWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/list_for_workspace',
  tags: ['destination_definition'],
  summary: 'List all the destinationDefinitions the given workspace is configured to use',
  operationId: 'listDestinationDefinitionsForWorkspace',
  request: { body: { content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadListSchema } },
    },
  },
})

export const postV1DestinationDefinitionsListLatestRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/list_latest',
  tags: ['destination_definition'],
  summary: 'List the latest destinationDefinitions Airbyte supports',
  description: 'Guaranteed to retrieve the latest information on supported destinations.',
  operationId: 'listLatestDestinationDefinitions',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadListSchema } },
    },
  },
})

export const postV1DestinationDefinitionsListPrivateRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/list_private',
  tags: ['destination_definition'],
  summary:
    "List all private, non-custom destinationDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.",
  operationId: 'listPrivateDestinationDefinitions',
  request: { body: { content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateDestinationDefinitionReadListSchema } },
    },
  },
})

export const postV1DestinationDefinitionsRevokeDefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/revoke_definition',
  tags: ['destination_definition'],
  summary: 'revoke a grant to a private, non-custom destinationDefinition from a given workspace',
  operationId: 'revokeDestinationDefinitionFromWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationDefinitionsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/destination_definitions/update',
  tags: ['destination_definition'],
  summary: 'Update destinationDefinition',
  operationId: 'updateDestinationDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationDefinitionUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationOauthsCompleteOauthRoute = createRoute({
  method: 'post',
  path: '/v1/destination_oauths/complete_oauth',
  tags: ['destination_oauth'],
  summary: 'Given a destination def ID generate an access/refresh token etc.',
  operationId: 'completeDestinationOAuth',
  request: {
    body: {
      content: { 'application/json': { schema: CompleteDestinationOAuthRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CompleteOAuthResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationOauthsGetConsentUrlRoute = createRoute({
  method: 'post',
  path: '/v1/destination_oauths/get_consent_url',
  tags: ['destination_oauth'],
  summary:
    'Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.',
  operationId: 'getDestinationOAuthConsent',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationOauthConsentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OAuthConsentReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationOauthsOauthParamsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/destination_oauths/oauth_params/create',
  tags: ['destination_oauth'],
  summary:
    "Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.\n",
  operationId: 'setInstancewideDestinationOauthParams',
  request: {
    body: {
      content: {
        'application/json': { schema: SetInstancewideDestinationOauthParamsRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful' },
    400: ExceptionResponseResponse,
    404: NotFoundResponseResponse,
  },
})

export const postV1DestinationsCheckConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/check_connection',
  tags: ['destination'],
  summary: 'Check connection to the destination',
  operationId: 'checkConnectionToDestination',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsCheckConnectionForUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/check_connection_for_update',
  tags: ['destination'],
  summary: 'Check connection for a proposed update to a destination',
  operationId: 'checkConnectionToDestinationForUpdate',
  request: {
    body: { content: { 'application/json': { schema: DestinationUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsCloneRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/clone',
  tags: ['destination'],
  summary: 'Clone destination',
  operationId: 'cloneDestination',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationCloneRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/create',
  tags: ['destination'],
  summary: 'Create a destination',
  operationId: 'createDestination',
  request: {
    body: { content: { 'application/json': { schema: DestinationCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/delete',
  tags: ['destination'],
  summary: 'Delete the destination',
  operationId: 'deleteDestination',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsGetRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/get',
  tags: ['destination'],
  summary: 'Get configured destination',
  operationId: 'getDestination',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsListRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/list',
  tags: ['destination'],
  summary: 'List configured destinations for a workspace',
  operationId: 'listDestinationsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsSearchRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/search',
  tags: ['destination'],
  summary: 'Search destinations',
  operationId: 'searchDestinations',
  request: {
    body: { content: { 'application/json': { schema: DestinationSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadListSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1DestinationsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/destinations/update',
  tags: ['destination'],
  summary: 'Update a destination',
  operationId: 'updateDestination',
  request: {
    body: { content: { 'application/json': { schema: DestinationUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: DestinationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const getV1HealthRoute = createRoute({
  method: 'get',
  path: '/v1/health',
  tags: ['health'],
  summary: 'Health Check',
  operationId: 'getHealthCheck',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: HealthCheckReadSchema } },
    },
  },
  security: [],
})

export const postV1JobsCancelRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/cancel',
  tags: ['jobs'],
  summary: 'Cancels a job',
  operationId: 'cancelJob',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get',
  tags: ['jobs'],
  summary: 'Get information about a job',
  operationId: 'getJobInfo',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetDebugInfoRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get_debug_info',
  tags: ['jobs'],
  summary: 'Gets all information needed to debug this job',
  operationId: 'getJobDebugInfo',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobDebugInfoReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetLastReplicationJobRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get_last_replication_job',
  tags: ['jobs'],
  operationId: 'getLastReplicationJob',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobOptionalReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetLightRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get_light',
  tags: ['jobs'],
  summary: 'Get information about a job excluding attempt info and logs',
  operationId: 'getJobInfoLight',
  request: {
    body: { content: { 'application/json': { schema: JobIdRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobInfoLightReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1JobsGetNormalizationStatusRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/get_normalization_status',
  tags: ['jobs', 'internal'],
  summary: 'Get normalization status to determine if we can bypass normalization phase',
  operationId: 'getAttemptNormalizationStatusesForJob',
  request: { body: { content: { 'application/json': { schema: JobIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: AttemptNormalizationStatusReadListSchema } },
    },
  },
})

export const postV1JobsListRoute = createRoute({
  method: 'post',
  path: '/v1/jobs/list',
  tags: ['jobs'],
  summary:
    'Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.',
  operationId: 'listJobsFor',
  request: {
    body: { content: { 'application/json': { schema: JobListRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: JobReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1LogsGetRoute = createRoute({
  method: 'post',
  path: '/v1/logs/get',
  tags: ['logs'],
  summary: 'Get logs',
  operationId: 'getLogs',
  request: {
    body: { content: { 'application/json': { schema: LogsRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Returns the log file',
      content: { 'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1NotificationsTryRoute = createRoute({
  method: 'post',
  path: '/v1/notifications/try',
  tags: ['notifications'],
  summary: 'Try sending a notifications',
  operationId: 'tryNotificationConfig',
  request: {
    body: { content: { 'application/json': { schema: NotificationSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: NotificationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const getV1OpenapiRoute = createRoute({
  method: 'get',
  path: '/v1/openapi',
  tags: ['openapi'],
  summary: 'Returns the openapi specification',
  operationId: 'getOpenApiSpec',
  responses: {
    200: {
      description: 'Returns the openapi specification file',
      content: { 'text/plain': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
  },
})

export const postV1OperationsCheckRoute = createRoute({
  method: 'post',
  path: '/v1/operations/check',
  tags: ['operation'],
  summary: 'Check if an operation to be created is valid',
  operationId: 'checkOperation',
  request: {
    body: {
      content: { 'application/json': { schema: OperatorConfigurationSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckOperationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/operations/create',
  tags: ['operation'],
  summary: 'Create an operation to be applied as part of a connection pipeline',
  operationId: 'createOperation',
  request: {
    body: { content: { 'application/json': { schema: OperationCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/operations/delete',
  tags: ['operation'],
  summary: 'Delete an operation',
  operationId: 'deleteOperation',
  request: {
    body: {
      content: { 'application/json': { schema: OperationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsGetRoute = createRoute({
  method: 'post',
  path: '/v1/operations/get',
  tags: ['operation'],
  summary: 'Returns an operation',
  operationId: 'getOperation',
  request: {
    body: {
      content: { 'application/json': { schema: OperationIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsListRoute = createRoute({
  method: 'post',
  path: '/v1/operations/list',
  tags: ['operation'],
  summary: 'Returns all operations for a connection.',
  description: 'List operations for connection.',
  operationId: 'listOperationsForConnection',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1OperationsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/operations/update',
  tags: ['operation'],
  summary: 'Update an operation',
  operationId: 'updateOperation',
  request: {
    body: { content: { 'application/json': { schema: OperationUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OperationReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SchedulerDestinationsCheckConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/scheduler/destinations/check_connection',
  tags: ['scheduler'],
  summary: 'Run check connection for a given destination configuration',
  operationId: 'executeDestinationCheckConnection',
  request: {
    body: {
      content: { 'application/json': { schema: DestinationCoreConfigSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SchedulerSourcesCheckConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/scheduler/sources/check_connection',
  tags: ['scheduler'],
  summary: 'Run check connection for a given source configuration',
  operationId: 'executeSourceCheckConnection',
  request: {
    body: { content: { 'application/json': { schema: SourceCoreConfigSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SchedulerSourcesDiscoverSchemaRoute = createRoute({
  method: 'post',
  path: '/v1/scheduler/sources/discover_schema',
  tags: ['scheduler'],
  summary: 'Run discover schema for a given source a source configuration',
  operationId: 'executeSourceDiscoverSchema',
  request: {
    body: { content: { 'application/json': { schema: SourceCoreConfigSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDiscoverSchemaReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionSpecificationsGetRoute = createRoute({
  method: 'post',
  path: '/v1/source_definition_specifications/get',
  tags: ['source_definition_specification'],
  summary: 'Get specification for a SourceDefinition.',
  operationId: 'getSourceDefinitionSpecification',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionSpecificationReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsCreateCustomRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/create_custom',
  tags: ['source_definition'],
  summary: 'Creates a custom sourceDefinition for the given workspace',
  operationId: 'createCustomSourceDefinition',
  request: {
    body: { content: { 'application/json': { schema: CustomSourceDefinitionCreateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/delete',
  tags: ['source_definition'],
  summary: 'Delete a source definition',
  operationId: 'deleteSourceDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDefinitionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsGetRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/get',
  tags: ['source_definition'],
  summary: 'Get source',
  operationId: 'getSourceDefinition',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDefinitionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsGetForWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/get_for_workspace',
  tags: ['source_definition'],
  summary: 'Get a sourceDefinition that is configured for the given workspace',
  operationId: 'getSourceDefinitionForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsGrantDefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/grant_definition',
  tags: ['source_definition'],
  summary: 'grant a private, non-custom sourceDefinition to a given workspace',
  operationId: 'grantSourceDefinitionToWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateSourceDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsListRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/list',
  tags: ['source_definition'],
  summary: 'List all the sourceDefinitions the current Airbyte deployment is configured to use',
  operationId: 'listSourceDefinitions',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadListSchema } },
    },
  },
})

export const postV1SourceDefinitionsListForWorkspaceRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/list_for_workspace',
  tags: ['source_definition'],
  summary: 'List all the sourceDefinitions the given workspace is configured to use',
  operationId: 'listSourceDefinitionsForWorkspace',
  request: { body: { content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadListSchema } },
    },
  },
})

export const postV1SourceDefinitionsListLatestRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/list_latest',
  tags: ['source_definition'],
  summary: 'List the latest sourceDefinitions Airbyte supports',
  description: 'Guaranteed to retrieve the latest information on supported sources.',
  operationId: 'listLatestSourceDefinitions',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadListSchema } },
    },
  },
})

export const postV1SourceDefinitionsListPrivateRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/list_private',
  tags: ['source_definition'],
  summary:
    "List all private, non-custom sourceDefinitions, and for each indicate whether the given workspace has a grant for using the definition. Used by admins to view and modify a given workspace's grants.",
  operationId: 'listPrivateSourceDefinitions',
  request: { body: { content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: PrivateSourceDefinitionReadListSchema } },
    },
  },
})

export const postV1SourceDefinitionsRevokeDefinitionRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/revoke_definition',
  tags: ['source_definition'],
  summary: 'revoke a grant to a private, non-custom sourceDefinition from a given workspace',
  operationId: 'revokeSourceDefinitionFromWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDefinitionIdWithWorkspaceIdSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceDefinitionsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/source_definitions/update',
  tags: ['source_definition'],
  summary: 'Update a sourceDefinition',
  operationId: 'updateSourceDefinition',
  request: { body: { content: { 'application/json': { schema: SourceDefinitionUpdateSchema } } } },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDefinitionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceOauthsCompleteOauthRoute = createRoute({
  method: 'post',
  path: '/v1/source_oauths/complete_oauth',
  tags: ['source_oauth'],
  summary: 'Given a source def ID generate an access/refresh token etc.',
  operationId: 'completeSourceOAuth',
  request: {
    body: {
      content: { 'application/json': { schema: CompleteSourceOauthRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CompleteOAuthResponseSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceOauthsGetConsentUrlRoute = createRoute({
  method: 'post',
  path: '/v1/source_oauths/get_consent_url',
  tags: ['source_oauth'],
  summary:
    'Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.',
  operationId: 'getSourceOAuthConsent',
  request: {
    body: {
      content: { 'application/json': { schema: SourceOauthConsentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: OAuthConsentReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourceOauthsOauthParamsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/source_oauths/oauth_params/create',
  tags: ['source_oauth'],
  summary:
    "Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.\n",
  operationId: 'setInstancewideSourceOauthParams',
  request: {
    body: {
      content: {
        'application/json': { schema: SetInstancewideSourceOauthParamsRequestBodySchema },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Successful' },
    400: ExceptionResponseResponse,
    404: NotFoundResponseResponse,
  },
})

export const postV1SourcesCheckConnectionRoute = createRoute({
  method: 'post',
  path: '/v1/sources/check_connection',
  tags: ['source'],
  summary: 'Check connection to the source',
  operationId: 'checkConnectionToSource',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesCheckConnectionForUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/sources/check_connection_for_update',
  tags: ['source'],
  summary: 'Check connection for a proposed update to a source',
  operationId: 'checkConnectionToSourceForUpdate',
  request: {
    body: { content: { 'application/json': { schema: SourceUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: CheckConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesCloneRoute = createRoute({
  method: 'post',
  path: '/v1/sources/clone',
  tags: ['source'],
  summary: 'Clone source',
  operationId: 'cloneSource',
  request: {
    body: {
      content: { 'application/json': { schema: SourceCloneRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesCreateRoute = createRoute({
  method: 'post',
  path: '/v1/sources/create',
  tags: ['source'],
  summary: 'Create a source',
  operationId: 'createSource',
  request: {
    body: { content: { 'application/json': { schema: SourceCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/sources/delete',
  tags: ['source'],
  summary: 'Delete a source',
  operationId: 'deleteSource',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesDiscoverSchemaRoute = createRoute({
  method: 'post',
  path: '/v1/sources/discover_schema',
  tags: ['source'],
  summary: 'Discover the schema catalog of the source',
  operationId: 'discoverSchemaForSource',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDiscoverSchemaRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceDiscoverSchemaReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesGetRoute = createRoute({
  method: 'post',
  path: '/v1/sources/get',
  tags: ['source'],
  summary: 'Get source',
  operationId: 'getSource',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesListRoute = createRoute({
  method: 'post',
  path: '/v1/sources/list',
  tags: ['source'],
  summary: 'List sources for workspace',
  description: 'List sources for workspace. Does not return deleted sources.',
  operationId: 'listSourcesForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesMostRecentSourceActorCatalogRoute = createRoute({
  method: 'post',
  path: '/v1/sources/most_recent_source_actor_catalog',
  tags: ['source'],
  summary: 'Get most recent ActorCatalog for source',
  operationId: 'getMostRecentSourceActorCatalog',
  request: {
    body: {
      content: { 'application/json': { schema: SourceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ActorCatalogWithUpdatedAtSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesSearchRoute = createRoute({
  method: 'post',
  path: '/v1/sources/search',
  tags: ['source'],
  summary: 'Search sources',
  operationId: 'searchSources',
  request: {
    body: { content: { 'application/json': { schema: SourceSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadListSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/sources/update',
  tags: ['source'],
  summary: 'Update a source',
  operationId: 'updateSource',
  request: {
    body: { content: { 'application/json': { schema: SourceUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: SourceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1SourcesWriteDiscoverCatalogResultRoute = createRoute({
  method: 'post',
  path: '/v1/sources/write_discover_catalog_result',
  tags: ['source', 'internal'],
  summary: 'Should only called from worker, to write result from discover activity back to DB.',
  operationId: 'writeDiscoverCatalogResult',
  request: {
    body: {
      content: { 'application/json': { schema: SourceDiscoverSchemaWriteRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful Operation',
      content: { 'application/json': { schema: DiscoverCatalogResultSchema } },
    },
  },
})

export const postV1StateCreateOrUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/state/create_or_update',
  tags: ['state', 'internal'],
  summary: 'Create or update the state for a connection.',
  operationId: 'createOrUpdateState',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionStateCreateOrUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionStateSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1StateGetRoute = createRoute({
  method: 'post',
  path: '/v1/state/get',
  tags: ['state'],
  summary: 'Fetch the current state for a connection.',
  operationId: 'getState',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionStateSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendCheckUpdatesRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/check_updates',
  tags: ['web_backend'],
  summary: 'Returns a summary of source and destination definitions that could be updated.',
  operationId: 'webBackendCheckUpdates',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendCheckUpdatesReadSchema } },
    },
  },
})

export const postV1WebBackendConnectionsCreateRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/connections/create',
  tags: ['web_backend'],
  summary: 'Create a connection',
  operationId: 'webBackendCreateConnection',
  request: {
    body: {
      content: { 'application/json': { schema: WebBackendConnectionCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendConnectionsGetRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/connections/get',
  tags: ['web_backend'],
  summary: 'Get a connection',
  operationId: 'webBackendGetConnection',
  request: {
    body: {
      content: { 'application/json': { schema: WebBackendConnectionRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendConnectionReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendConnectionsListRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/connections/list',
  tags: ['web_backend'],
  summary: 'Returns all non-deleted connections for a workspace.',
  operationId: 'webBackendListConnectionsForWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WebBackendConnectionListRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendConnectionReadListSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendConnectionsUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/connections/update',
  tags: ['web_backend'],
  summary: 'Update a connection',
  description:
    "Apply a patch-style update to a connection. Only fields present on the update request body will be updated.\nAny operations that lack an ID will be created. Then, the newly created operationId will be applied to the\nconnection along with the rest of the operationIds in the request body.\nApply a patch-style update to a connection. Only fields present on the update request body will be updated.\nNote that if a catalog is present in the request body, the connection's entire catalog will be replaced\nwith the catalog from the request. This means that to modify a single stream, the entire new catalog\ncontaining the updated stream needs to be sent.\n",
  operationId: 'webBackendUpdateConnection',
  request: {
    body: {
      content: { 'application/json': { schema: WebBackendConnectionUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendConnectionReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendGeographiesListRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/geographies/list',
  tags: ['web_backend'],
  summary:
    "Returns available geographies can be selected to run data syncs in a particular geography.\nThe 'auto' entry indicates that the sync will be automatically assigned to a geography according\nto the platform default behavior. Entries other than 'auto' are two-letter country codes that\nfollow the ISO 3166-1 alpha-2 standard.\n",
  description: 'Returns all available geographies in which a data sync can run.',
  operationId: 'webBackendListGeographies',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendGeographiesListResultSchema } },
    },
  },
})

export const postV1WebBackendStateGetTypeRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/state/get_type',
  tags: ['web_backend'],
  summary: 'Fetch the current state type for a connection.',
  operationId: 'getStateType',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: ConnectionStateTypeSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WebBackendWorkspaceStateRoute = createRoute({
  method: 'post',
  path: '/v1/web_backend/workspace/state',
  tags: ['web_backend'],
  summary: 'Returns the current state of a workspace',
  operationId: 'webBackendGetWorkspaceState',
  request: {
    body: { content: { 'application/json': { schema: WebBackendWorkspaceStateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WebBackendWorkspaceStateResultSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesCreateRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/create',
  tags: ['workspace'],
  summary: 'Creates a workspace',
  operationId: 'createWorkspace',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceCreateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/delete',
  tags: ['workspace'],
  summary: 'Deletes a workspace',
  operationId: 'deleteWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The resource was deleted successfully.' },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesGetRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get',
  tags: ['workspace'],
  summary: 'Find workspace by ID',
  operationId: 'getWorkspace',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesGetByConnectionIdRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get_by_connection_id',
  tags: ['workspace'],
  summary: 'Find workspace by connection id',
  operationId: 'getWorkspaceByConnectionId',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectionIdRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesGetBySlugRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/get_by_slug',
  tags: ['workspace'],
  summary: 'Find workspace by slug',
  operationId: 'getWorkspaceBySlug',
  request: {
    body: { content: { 'application/json': { schema: SlugRequestBodySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesListRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/list',
  tags: ['workspace'],
  summary: 'List all workspaces registered in the current Airbyte deployment',
  operationId: 'listWorkspaces',
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadListSchema } },
    },
  },
})

export const postV1WorkspacesTagFeedbackStatusAsDoneRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/tag_feedback_status_as_done',
  tags: ['workspace'],
  summary: 'Update workspace feedback state',
  operationId: 'updateWorkspaceFeedback',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceGiveFeedbackSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The feedback state has been properly updated' },
    404: NotFoundResponseResponse,
  },
})

export const postV1WorkspacesUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/update',
  tags: ['workspace'],
  summary: 'Update workspace state',
  operationId: 'updateWorkspace',
  request: {
    body: { content: { 'application/json': { schema: WorkspaceUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

export const postV1WorkspacesUpdateNameRoute = createRoute({
  method: 'post',
  path: '/v1/workspaces/update_name',
  tags: ['workspace'],
  summary: 'Update workspace name',
  operationId: 'updateWorkspaceName',
  request: {
    body: {
      content: { 'application/json': { schema: WorkspaceUpdateNameSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: { 'application/json': { schema: WorkspaceReadSchema } },
    },
    404: NotFoundResponseResponse,
    422: InvalidInputResponseResponse,
  },
})

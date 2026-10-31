import { createRoute, z } from '@hono/zod-openapi'

const InputParameterSchema = z
  .object({
    dataType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'INT',
        'SMALLINT',
        'DOUBLE',
        'DATE',
        'DATETIME',
        'TIME',
        'STRING',
        'LONG',
        'BOOLEAN',
        'DECIMAL',
        'UUID',
        'BLOB',
        'BIT',
        'TINYINT',
        'INTEGER',
        'BIGINT',
        'FLOAT',
        'REAL',
        'NUMERIC',
        'CHAR',
        'VARCHAR',
        'LONGVARCHAR',
        'TIMESTAMP',
        'NCHAR',
        'NVARCHAR',
        'LONGNVARCHAR',
        'NULL',
        'OTHER',
        'JAVA_OBJECT',
        'DISTINCT',
        'STRUCT',
        'ARRAY',
        'CLOB',
        'REF',
        'DATALINK',
        'ROWID',
        'BINARY',
        'VARBINARY',
        'LONGVARBINARY',
        'NCLOB',
        'SQLXML',
        'REF_CURSOR',
        'TIME_WITH_TIMEZONE',
        'TIMESTAMP_WITH_TIMEZONE',
      ])
      .exactOptional()
      .openapi({ description: 'The data type of the Parameter' }),
    defaultValue: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The following field specifies the default value of the Parameter provided by the external system if a value is not provided.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A brief description of the Parameter.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the Parameter.' }),
    nullable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies whether a null value is allowed.' }),
  })
  .openapi({
    description:
      'Input Parameter message contains metadata about the parameters required for executing an Action.',
    required: [],
  })
  .openapi('InputParameter')

const ResultMetadataSchema = z
  .object({
    dataType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'INT',
        'SMALLINT',
        'DOUBLE',
        'DATE',
        'DATETIME',
        'TIME',
        'STRING',
        'LONG',
        'BOOLEAN',
        'DECIMAL',
        'UUID',
        'BLOB',
        'BIT',
        'TINYINT',
        'INTEGER',
        'BIGINT',
        'FLOAT',
        'REAL',
        'NUMERIC',
        'CHAR',
        'VARCHAR',
        'LONGVARCHAR',
        'TIMESTAMP',
        'NCHAR',
        'NVARCHAR',
        'LONGNVARCHAR',
        'NULL',
        'OTHER',
        'JAVA_OBJECT',
        'DISTINCT',
        'STRUCT',
        'ARRAY',
        'CLOB',
        'REF',
        'DATALINK',
        'ROWID',
        'BINARY',
        'VARBINARY',
        'LONGVARBINARY',
        'NCLOB',
        'SQLXML',
        'REF_CURSOR',
        'TIME_WITH_TIMEZONE',
        'TIMESTAMP_WITH_TIMEZONE',
      ])
      .exactOptional()
      .openapi({ description: 'The data type of the metadata field' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A brief description of the metadata field.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the metadata field.' }),
  })
  .openapi({
    description:
      'Result Metadata message contains metadata about the result returned after executing an Action.',
    required: [],
  })
  .openapi('ResultMetadata')

const ActionSchema = z
  .object({
    inputParameters: z
      .array(InputParameterSchema)
      .exactOptional()
      .openapi({ description: 'List containing input parameter metadata.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the action.' }),
    resultMetadata: z
      .array(ResultMetadataSchema)
      .exactOptional()
      .openapi({ description: 'List containing the metadata of result fields.' }),
  })
  .openapi({
    description:
      'Action message contains metadata information about a single action present in the external system.',
    required: [],
  })
  .openapi('Action')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const EntitySchema = z
  .object({
    fields: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({
        description:
          'Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}',
        readOnly: true,
      }),
  })
  .openapi({
    description: "'Entity row'/ 'Entity' refers to a single row of an entity type.",
    required: [],
  })
  .openapi('Entity')

const ReferenceSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the reference field.' }),
    type: z.string().exactOptional().openapi({ description: 'Name of reference entity type.' }),
  })
  .openapi({ required: [] })
  .openapi('Reference')

const FieldSchema = z
  .object({
    additionalDetails: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields.',
      }),
    dataType: z
      .enum([
        'DATA_TYPE_UNSPECIFIED',
        'INT',
        'SMALLINT',
        'DOUBLE',
        'DATE',
        'DATETIME',
        'TIME',
        'STRING',
        'LONG',
        'BOOLEAN',
        'DECIMAL',
        'UUID',
        'BLOB',
        'BIT',
        'TINYINT',
        'INTEGER',
        'BIGINT',
        'FLOAT',
        'REAL',
        'NUMERIC',
        'CHAR',
        'VARCHAR',
        'LONGVARCHAR',
        'TIMESTAMP',
        'NCHAR',
        'NVARCHAR',
        'LONGNVARCHAR',
        'NULL',
        'OTHER',
        'JAVA_OBJECT',
        'DISTINCT',
        'STRUCT',
        'ARRAY',
        'CLOB',
        'REF',
        'DATALINK',
        'ROWID',
        'BINARY',
        'VARBINARY',
        'LONGVARBINARY',
        'NCLOB',
        'SQLXML',
        'REF_CURSOR',
        'TIME_WITH_TIMEZONE',
        'TIMESTAMP_WITH_TIMEZONE',
      ])
      .exactOptional()
      .openapi({ description: 'The data type of the Field.' }),
    defaultValue: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The following field specifies the default value of the Field provided by the external system if a value is not provided.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A brief description of the Field.' }),
    key: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the Field.' }),
    nullable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies whether a null value is allowed.' }),
    reference: ReferenceSchema.exactOptional().openapi({
      description:
        'Reference captures the association between two different entity types. Value links to the reference of another entity type.',
    }),
  })
  .openapi({ description: "Message contains EntityType's Field metadata.", required: [] })
  .openapi('Field')

const EntityTypeSchema = z
  .object({
    fields: z
      .array(FieldSchema)
      .exactOptional()
      .openapi({
        description: 'List containing metadata information about each field of the entity type.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the entity type.' }),
  })
  .openapi({
    description:
      'EntityType message contains metadata information about a single entity type present in the external system.',
    required: [],
  })
  .openapi('EntityType')

const ExecuteActionRequestSchema = z
  .object({
    parameters: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Parameters for executing the action. The parameters can be key/value pairs or nested structs.',
      }),
  })
  .openapi({ description: 'Request message for ActionService.ExecuteAction', required: [] })
  .openapi('ExecuteActionRequest')

const ExecuteActionResponseSchema = z
  .object({
    results: z
      .array(z.record(z.string(), z.any().openapi({ description: 'Properties of the object.' })))
      .exactOptional()
      .openapi({
        description:
          "In the case of successful invocation of the specified action, the results Struct contains values based on the response of the action invoked. 1. If the action execution produces any entities as a result, they are returned as an array of Structs with the 'key' being the field name and the 'value' being the value of that field in each result row. { 'results': [{'key': 'value'}, ...] }",
      }),
  })
  .openapi({ description: 'Response message for ActionService.ExecuteAction', required: [] })
  .openapi('ExecuteActionResponse')

const QuerySchema = z
  .object({
    query: z.string().exactOptional().openapi({ description: 'Required. Sql query to execute.' }),
  })
  .openapi({
    description:
      'A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`.',
    required: [],
  })
  .openapi('Query')

const ExecuteSqlQueryRequestSchema = z
  .object({
    query: QuerySchema.exactOptional().openapi({
      description:
        'Required. SQL statement passed by clients like Integration Platform, the query is passed as-is to the driver used for interfacing with external systems.',
    }),
  })
  .openapi({
    description:
      'An execute sql query request containing the query and the connection to execute it on.',
    required: [],
  })
  .openapi('ExecuteSqlQueryRequest')

const ExecuteSqlQueryResponseSchema = z
  .object({
    results: z
      .array(z.record(z.string(), z.any().openapi({ description: 'Properties of the object.' })))
      .exactOptional()
      .openapi({
        description:
          'In the case of successful execution of the query the response contains results returned by the external system. For example, the result rows of the query are contained in the \'results\' Struct list - "results": [ { "field1": "val1", "field2": "val2",.. },.. ] Each Struct row can contain fields any type of like nested Structs or lists.',
      }),
  })
  .openapi({
    description: 'A response returned by the connection after executing the sql query.',
    required: [],
  })
  .openapi('ExecuteSqlQueryResponse')

const ListActionsResponseSchema = z
  .object({
    actions: z
      .array(ActionSchema)
      .exactOptional()
      .openapi({ description: 'List of action metadata.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Next page token if more actions available.' }),
    unsupportedActionNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of actions which contain unsupported Datatypes. Check datatype.proto for more information.',
      }),
  })
  .openapi({ description: 'Response message for ActionService.ListActions', required: [] })
  .openapi('ListActionsResponse')

const ListEntitiesResponseSchema = z
  .object({
    entities: z
      .array(EntitySchema)
      .exactOptional()
      .openapi({ description: 'List containing entity rows.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Next page token if more records are available.' }),
  })
  .openapi({ description: 'Response message for EntityService.ListEntities', required: [] })
  .openapi('ListEntitiesResponse')

const ListEntityTypesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Next page token if more entity types available.' }),
    types: z
      .array(EntityTypeSchema)
      .exactOptional()
      .openapi({ description: 'List of metadata related to all entity types.' }),
    unsupportedTypeNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of entity type names which contain unsupported Datatypes. Check datatype.proto for more information.',
      }),
  })
  .openapi({ description: 'Response message for EntityService.ListEntityTypes', required: [] })
  .openapi('ListEntityTypesResponse')

const UpdateEntitiesWithConditionsResponseSchema = z
  .object({
    response: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'Response returned by the external system.' }),
  })
  .openapi({
    description: 'Response message for EntityService.UpdateEntitiesWithConditions',
    required: [],
  })
  .openapi('UpdateEntitiesWithConditionsResponse')

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

export const postV2ConnectionExecuteSqlQueryRoute = createRoute({
  method: 'post',
  path: '/v2/{connection}:executeSqlQuery',
  tags: ['projects'],
  description:
    "Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.",
  operationId: 'connectors.projects.locations.connections.executeSqlQuery',
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
      connection: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection}',
            in: 'path',
            name: 'connection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExecuteSqlQueryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExecuteSqlQueryResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2EntityTypeEntitiesDeleteEntitiesWithConditionsRoute = createRoute({
  method: 'post',
  path: '/v2/{entityType}/entities:deleteEntitiesWithConditions',
  tags: ['projects'],
  description:
    'Deletes entities based on conditions specified in the request and not on entity id.',
  operationId:
    'connectors.projects.locations.connections.entityTypes.entities.deleteEntitiesWithConditions',
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
      conditions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. Conditions to be used when deleting entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.",
            in: 'query',
            name: 'conditions',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      entityType: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}',
            in: 'path',
            name: 'entityType',
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
  ],
})

export const postV2EntityTypeEntitiesUpdateEntitiesWithConditionsRoute = createRoute({
  method: 'post',
  path: '/v2/{entityType}/entities:updateEntitiesWithConditions',
  tags: ['projects'],
  description:
    'Updates entities based on conditions specified in the request and not on entity id.',
  operationId:
    'connectors.projects.locations.connections.entityTypes.entities.updateEntitiesWithConditions',
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
      conditions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. Conditions to be used when updating entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.",
            in: 'query',
            name: 'conditions',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      entityType: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}',
            in: 'path',
            name: 'entityType',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntitySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpdateEntitiesWithConditionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2NameRoute = createRoute({
  method: 'get',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Gets a single entity row matching the entity type and entity id specified in the request.',
  operationId: 'connectors.projects.locations.connections.entityTypes.entities.get',
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
              'Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}',
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
      content: { 'application/json': { schema: EntitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV2NameRoute = createRoute({
  method: 'delete',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Deletes an existing entity row matching the entity type and entity id specified in the request.',
  operationId: 'connectors.projects.locations.connections.entityTypes.entities.delete',
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
              'Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}',
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
  ],
})

export const patchV2NameRoute = createRoute({
  method: 'patch',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.',
  operationId: 'connectors.projects.locations.connections.entityTypes.entities.patch',
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
              'Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntitySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EntitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameExecuteRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:execute',
  tags: ['projects'],
  description:
    'Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.',
  operationId: 'connectors.projects.locations.connections.actions.execute',
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
              'Required. Resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}/actions/{action}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExecuteActionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExecuteActionResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentActionsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/actions',
  tags: ['projects'],
  description: 'Gets the schema of all the actions supported by the connector.',
  operationId: 'connectors.projects.locations.connections.actions.list',
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
            description: 'Number of Actions to return. Defaults to 25.',
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
              'Page token, return from a previous ListActions call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of actions.',
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
              'Required. Parent resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}',
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
      content: { 'application/json': { schema: ListActionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentEntitiesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/entities',
  tags: ['projects'],
  description:
    "Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.",
  operationId: 'connectors.projects.locations.connections.entityTypes.entities.list',
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
      conditions: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Conditions to be used when listing entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported.',
            in: 'query',
            name: 'conditions',
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
            description:
              'Number of entity rows to return. Defaults page size = 25. Max page size = 200.',
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
            description: 'Page token value if available from a previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortBy: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "List of 'sort_by' columns to use when returning the results.",
            explode: true,
            in: 'query',
            name: 'sortBy',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
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
              'Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}',
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
      content: { 'application/json': { schema: ListEntitiesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentEntitiesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/entities',
  tags: ['projects'],
  description:
    'Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.',
  operationId: 'connectors.projects.locations.connections.entityTypes.entities.create',
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
              'Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EntitySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EntitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentEntityTypesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/entityTypes',
  tags: ['projects'],
  description: 'Lists metadata related to all entity types present in the external system.',
  operationId: 'connectors.projects.locations.connections.entityTypes.list',
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
            description: 'Number of entity types to return. Defaults to 25.',
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
              'Page token, return from a previous ListEntityTypes call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of entity types.',
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
              'Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}',
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
      content: { 'application/json': { schema: ListEntityTypesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

type Query = { query?: string | undefined }
type ExecuteSqlQueryRequest = { query?: Query | undefined }
type ExecuteSqlQueryResponse = { results?: { [x: string]: { [x: string]: unknown } }[] | undefined }
type Empty = { [x: string]: unknown }
type Entity = {
  fields?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type UpdateEntitiesWithConditionsResponse = {
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ExecuteActionRequest = { parameters?: { [x: string]: { [x: string]: unknown } } | undefined }
type ExecuteActionResponse = { results?: { [x: string]: { [x: string]: unknown } }[] | undefined }
type InputParameter = {
  dataType?:
    | 'DATA_TYPE_UNSPECIFIED'
    | 'INT'
    | 'SMALLINT'
    | 'DOUBLE'
    | 'DATE'
    | 'DATETIME'
    | 'TIME'
    | 'STRING'
    | 'LONG'
    | 'BOOLEAN'
    | 'DECIMAL'
    | 'UUID'
    | 'BLOB'
    | 'BIT'
    | 'TINYINT'
    | 'INTEGER'
    | 'BIGINT'
    | 'FLOAT'
    | 'REAL'
    | 'NUMERIC'
    | 'CHAR'
    | 'VARCHAR'
    | 'LONGVARCHAR'
    | 'TIMESTAMP'
    | 'NCHAR'
    | 'NVARCHAR'
    | 'LONGNVARCHAR'
    | 'NULL'
    | 'OTHER'
    | 'JAVA_OBJECT'
    | 'DISTINCT'
    | 'STRUCT'
    | 'ARRAY'
    | 'CLOB'
    | 'REF'
    | 'DATALINK'
    | 'ROWID'
    | 'BINARY'
    | 'VARBINARY'
    | 'LONGVARBINARY'
    | 'NCLOB'
    | 'SQLXML'
    | 'REF_CURSOR'
    | 'TIME_WITH_TIMEZONE'
    | 'TIMESTAMP_WITH_TIMEZONE'
    | undefined
  defaultValue?: { [x: string]: unknown } | undefined
  description?: string | undefined
  name?: string | undefined
  nullable?: boolean | undefined
}
type ResultMetadata = {
  dataType?:
    | 'DATA_TYPE_UNSPECIFIED'
    | 'INT'
    | 'SMALLINT'
    | 'DOUBLE'
    | 'DATE'
    | 'DATETIME'
    | 'TIME'
    | 'STRING'
    | 'LONG'
    | 'BOOLEAN'
    | 'DECIMAL'
    | 'UUID'
    | 'BLOB'
    | 'BIT'
    | 'TINYINT'
    | 'INTEGER'
    | 'BIGINT'
    | 'FLOAT'
    | 'REAL'
    | 'NUMERIC'
    | 'CHAR'
    | 'VARCHAR'
    | 'LONGVARCHAR'
    | 'TIMESTAMP'
    | 'NCHAR'
    | 'NVARCHAR'
    | 'LONGNVARCHAR'
    | 'NULL'
    | 'OTHER'
    | 'JAVA_OBJECT'
    | 'DISTINCT'
    | 'STRUCT'
    | 'ARRAY'
    | 'CLOB'
    | 'REF'
    | 'DATALINK'
    | 'ROWID'
    | 'BINARY'
    | 'VARBINARY'
    | 'LONGVARBINARY'
    | 'NCLOB'
    | 'SQLXML'
    | 'REF_CURSOR'
    | 'TIME_WITH_TIMEZONE'
    | 'TIMESTAMP_WITH_TIMEZONE'
    | undefined
  description?: string | undefined
  name?: string | undefined
}
type Action = {
  inputParameters?: InputParameter[] | undefined
  name?: string | undefined
  resultMetadata?: ResultMetadata[] | undefined
}
type ListActionsResponse = {
  actions?: Action[] | undefined
  nextPageToken?: string | undefined
  unsupportedActionNames?: string[] | undefined
}
type ListEntitiesResponse = { entities?: Entity[] | undefined; nextPageToken?: string | undefined }
type Reference = { name?: string | undefined; type?: string | undefined }
type Field = {
  additionalDetails?: { [x: string]: { [x: string]: unknown } } | undefined
  dataType?:
    | 'DATA_TYPE_UNSPECIFIED'
    | 'INT'
    | 'SMALLINT'
    | 'DOUBLE'
    | 'DATE'
    | 'DATETIME'
    | 'TIME'
    | 'STRING'
    | 'LONG'
    | 'BOOLEAN'
    | 'DECIMAL'
    | 'UUID'
    | 'BLOB'
    | 'BIT'
    | 'TINYINT'
    | 'INTEGER'
    | 'BIGINT'
    | 'FLOAT'
    | 'REAL'
    | 'NUMERIC'
    | 'CHAR'
    | 'VARCHAR'
    | 'LONGVARCHAR'
    | 'TIMESTAMP'
    | 'NCHAR'
    | 'NVARCHAR'
    | 'LONGNVARCHAR'
    | 'NULL'
    | 'OTHER'
    | 'JAVA_OBJECT'
    | 'DISTINCT'
    | 'STRUCT'
    | 'ARRAY'
    | 'CLOB'
    | 'REF'
    | 'DATALINK'
    | 'ROWID'
    | 'BINARY'
    | 'VARBINARY'
    | 'LONGVARBINARY'
    | 'NCLOB'
    | 'SQLXML'
    | 'REF_CURSOR'
    | 'TIME_WITH_TIMEZONE'
    | 'TIMESTAMP_WITH_TIMEZONE'
    | undefined
  defaultValue?: { [x: string]: unknown } | undefined
  description?: string | undefined
  key?: boolean | undefined
  name?: string | undefined
  nullable?: boolean | undefined
  reference?: Reference | undefined
}
type EntityType = { fields?: Field[] | undefined; name?: string | undefined }
type ListEntityTypesResponse = {
  nextPageToken?: string | undefined
  types?: EntityType[] | undefined
  unsupportedTypeNames?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/:connection:executeSqlQuery': {
      $post: {
        input: { param: { connection: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ExecuteSqlQueryRequest }
        output: ExecuteSqlQueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:entityType/entities:deleteEntitiesWithConditions': {
      $post: {
        input: { param: { entityType: string } } & {
          query: {
            conditions?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:entityType/entities:updateEntitiesWithConditions': {
      $post: {
        input: { param: { entityType: string } } & {
          query: {
            conditions?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Entity }
        output: UpdateEntitiesWithConditionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Entity
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Entity }
        output: Entity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:execute': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ExecuteActionRequest }
        output: ExecuteActionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/actions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListActionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/entities': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            conditions?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            sortBy?: string[] | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Entity }
        output: Entity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/entityTypes': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListEntityTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

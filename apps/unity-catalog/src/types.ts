type SecurablePropertiesMap = { [x: string]: string }
type CreateCatalog = {
  name: string
  comment?: string | undefined
  properties?: SecurablePropertiesMap | undefined
  storage_root?: string | undefined
}
type CatalogInfo = {
  browse_only?: boolean | undefined
  name?: string | undefined
  comment?: string | undefined
  properties?: SecurablePropertiesMap | undefined
  owner?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  updated_at?: bigint | undefined
  updated_by?: string | undefined
  id?: string | undefined
  storage_root?: string | undefined
  storage_location?: string | undefined
}
type ListCatalogsResponse = {
  catalogs?: CatalogInfo[] | undefined
  next_page_token?: string | undefined
}
type UpdateCatalog = {
  owner?: string | undefined
  comment?: string | undefined
  properties?: SecurablePropertiesMap | undefined
  new_name?: string | undefined
}
type CreateSchema = {
  name: string
  catalog_name: string
  comment?: string | undefined
  properties?: SecurablePropertiesMap | undefined
  storage_root?: string | undefined
}
type SchemaInfo = {
  browse_only?: boolean | undefined
  name?: string | undefined
  catalog_name?: string | undefined
  comment?: string | undefined
  properties?: SecurablePropertiesMap | undefined
  full_name?: string | undefined
  owner?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  updated_at?: bigint | undefined
  updated_by?: string | undefined
  schema_id?: string | undefined
  storage_root?: string | undefined
  storage_location?: string | undefined
}
type ListSchemasResponse = {
  schemas?: SchemaInfo[] | undefined
  next_page_token?: string | undefined
}
type UpdateSchema = {
  owner?: string | undefined
  comment?: string | undefined
  properties?: SecurablePropertiesMap | undefined
  new_name?: string | undefined
}
type CreateStagingTable = { name: string; catalog_name: string; schema_name: string }
type StagingTableInfo = {
  name?: string | undefined
  catalog_name?: string | undefined
  schema_name?: string | undefined
  id?: string | undefined
  staging_location?: string | undefined
}
type TableType =
  | 'MANAGED'
  | 'EXTERNAL'
  | 'STREAMING_TABLE'
  | 'MATERIALIZED_VIEW'
  | 'METRIC_VIEW'
  | 'VIEW'
type DataSourceFormat = 'DELTA' | 'ICEBERG' | 'CSV' | 'JSON' | 'AVRO' | 'PARQUET' | 'ORC' | 'TEXT'
type ColumnTypeName =
  | 'BOOLEAN'
  | 'BYTE'
  | 'SHORT'
  | 'INT'
  | 'LONG'
  | 'FLOAT'
  | 'DOUBLE'
  | 'DATE'
  | 'TIMESTAMP'
  | 'TIMESTAMP_NTZ'
  | 'STRING'
  | 'BINARY'
  | 'DECIMAL'
  | 'INTERVAL'
  | 'ARRAY'
  | 'STRUCT'
  | 'MAP'
  | 'VARIANT'
  | 'CHAR'
  | 'NULL'
  | 'USER_DEFINED_TYPE'
  | 'TABLE_TYPE'
type ColumnInfo = {
  name?: string | undefined
  type_text?: string | undefined
  type_json?: string | undefined
  type_name?: ColumnTypeName | undefined
  type_precision?: number | undefined
  type_scale?: number | undefined
  type_interval_type?: string | undefined
  position?: number | undefined
  comment?: string | undefined
  nullable?: boolean | undefined
  partition_index?: number | undefined
}
type TableDependency = { table_full_name: string }
type FunctionDependency = { function_full_name: string }
type Dependency = { table?: TableDependency | undefined; function?: FunctionDependency | undefined }
type DependencyList = { dependencies?: Dependency[] | undefined }
type CreateTable = {
  name: string
  catalog_name: string
  schema_name: string
  table_type: TableType
  data_source_format?: DataSourceFormat | undefined
  columns: ColumnInfo[]
  storage_location?: string | undefined
  comment?: string | undefined
  properties?: SecurablePropertiesMap | undefined
  view_definition?: string | undefined
  view_dependencies?: DependencyList | undefined
}
type TableInfo = {
  browse_only?: boolean | undefined
  name?: string | undefined
  catalog_name?: string | undefined
  schema_name?: string | undefined
  table_type?: TableType | undefined
  data_source_format?: DataSourceFormat | undefined
  columns?: ColumnInfo[] | undefined
  storage_location?: string | undefined
  comment?: string | undefined
  properties?: SecurablePropertiesMap | undefined
  owner?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  updated_at?: bigint | undefined
  updated_by?: string | undefined
  table_id?: string | undefined
  view_definition?: string | undefined
  view_dependencies?: DependencyList | undefined
}
type ListTablesResponse = { tables?: TableInfo[] | undefined; next_page_token?: string | undefined }
type UpdateTable = { owner: string }
type VolumeType = 'MANAGED' | 'EXTERNAL'
type CreateVolumeRequestContent = {
  catalog_name: string
  schema_name: string
  name: string
  volume_type: VolumeType
  comment?: string | undefined
  storage_location?: string | undefined
}
type VolumeInfo = {
  browse_only?: boolean | undefined
  catalog_name?: string | undefined
  schema_name?: string | undefined
  name?: string | undefined
  comment?: string | undefined
  owner?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  updated_at?: bigint | undefined
  updated_by?: string | undefined
  volume_id?: string | undefined
  volume_type?: VolumeType | undefined
  storage_location?: string | undefined
  full_name?: string | undefined
}
type ListVolumesResponseContent = {
  volumes?: VolumeInfo[] | undefined
  next_page_token?: string | undefined
}
type UpdateVolumeRequestContent = {
  owner?: string | undefined
  comment?: string | undefined
  new_name?: string | undefined
}
type ModelVersionOperation =
  | 'UNKNOWN_MODEL_VERSION_OPERATION'
  | 'READ_MODEL_VERSION'
  | 'READ_WRITE_MODEL_VERSION'
type GenerateTemporaryModelVersionCredential = {
  catalog_name: string
  schema_name: string
  model_name: string
  version: bigint
  operation: ModelVersionOperation
}
type AwsCredentials = {
  access_key_id?: string | undefined
  secret_access_key?: string | undefined
  session_token?: string | undefined
  s3_endpoint?: string | undefined
  s3_region?: string | undefined
}
type AzureUserDelegationSAS = { sas_token?: string | undefined }
type GcpOauthToken = { oauth_token?: string | undefined }
type TemporaryCredentials = {
  aws_temp_credentials?: AwsCredentials | undefined
  azure_user_delegation_sas?: AzureUserDelegationSAS | undefined
  gcp_oauth_token?: GcpOauthToken | undefined
  expiration_time?: bigint | undefined
  url?: string | undefined
}
type TableOperation = 'UNKNOWN_TABLE_OPERATION' | 'READ' | 'READ_WRITE'
type GenerateTemporaryTableCredential = { table_id: string; operation: TableOperation }
type VolumeOperation = 'UNKNOWN_VOLUME_OPERATION' | 'READ_VOLUME' | 'WRITE_VOLUME'
type GenerateTemporaryVolumeCredential = { volume_id: string; operation: VolumeOperation }
type FunctionParameterMode = 'IN'
type FunctionParameterType = 'PARAM' | 'COLUMN'
type FunctionParameterInfo = {
  name: string
  type_text: string
  type_json: string
  type_name: ColumnTypeName
  type_precision?: number | undefined
  type_scale?: number | undefined
  type_interval_type?: string | undefined
  position: number
  parameter_mode?: FunctionParameterMode | undefined
  parameter_type?: FunctionParameterType | undefined
  parameter_default?: string | undefined
  comment?: string | undefined
}
type FunctionParameterInfos = { parameters?: FunctionParameterInfo[] | undefined }
type CreateFunction = {
  name: string
  catalog_name: string
  schema_name: string
  input_params: FunctionParameterInfos
  data_type: ColumnTypeName
  full_data_type: string
  return_params?: FunctionParameterInfos | undefined
  routine_body: 'SQL' | 'EXTERNAL'
  routine_definition: string
  routine_dependencies?: DependencyList | undefined
  parameter_style: 'S'
  is_deterministic: boolean
  sql_data_access: 'CONTAINS_SQL' | 'READS_SQL_DATA' | 'NO_SQL'
  is_null_call: boolean
  security_type: 'DEFINER'
  specific_name: string
  comment?: string | undefined
  properties?: string | undefined
  external_language?: string | undefined
}
type CreateFunctionRequest = { function_info: CreateFunction }
type FunctionInfo = {
  browse_only?: boolean | undefined
  name?: string | undefined
  catalog_name?: string | undefined
  schema_name?: string | undefined
  input_params?: FunctionParameterInfos | undefined
  data_type?: ColumnTypeName | undefined
  full_data_type?: string | undefined
  return_params?: FunctionParameterInfos | undefined
  routine_body?: 'SQL' | 'EXTERNAL' | undefined
  routine_definition?: string | undefined
  routine_dependencies?: DependencyList | undefined
  parameter_style?: 'S' | undefined
  is_deterministic?: boolean | undefined
  sql_data_access?: 'CONTAINS_SQL' | 'READS_SQL_DATA' | 'NO_SQL' | undefined
  is_null_call?: boolean | undefined
  security_type?: 'DEFINER' | undefined
  specific_name?: string | undefined
  comment?: string | undefined
  properties?: string | undefined
  full_name?: string | undefined
  owner?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  updated_at?: bigint | undefined
  updated_by?: string | undefined
  function_id?: string | undefined
  external_language?: string | undefined
}
type ListFunctionsResponse = {
  functions?: FunctionInfo[] | undefined
  next_page_token?: string | undefined
}
type UpdateFunction = { owner: string }
type CreateRegisteredModel = {
  name: string
  catalog_name: string
  schema_name: string
  comment?: string | undefined
}
type RegisteredModelInfo = {
  browse_only?: boolean | undefined
  name?: string | undefined
  catalog_name?: string | undefined
  schema_name?: string | undefined
  storage_location?: string | undefined
  full_name?: string | undefined
  comment?: string | undefined
  owner?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  updated_at?: bigint | undefined
  updated_by?: string | undefined
  id?: string | undefined
}
type ListRegisteredModelsResponse = {
  registered_models?: RegisteredModelInfo[] | undefined
  next_page_token?: string | undefined
}
type UpdateRegisteredModel = {
  owner?: string | undefined
  comment?: string | undefined
  new_name?: string | undefined
}
type CreateModelVersion = {
  model_name: string
  catalog_name: string
  schema_name: string
  source: string
  run_id?: string | undefined
  comment?: string | undefined
}
type ModelVersionStatus =
  | 'MODEL_VERSION_STATUS_UNKNOWN'
  | 'PENDING_REGISTRATION'
  | 'FAILED_REGISTRATION'
  | 'READY'
type ModelVersionInfo = {
  model_name?: string | undefined
  catalog_name?: string | undefined
  schema_name?: string | undefined
  version?: bigint | undefined
  source?: string | undefined
  run_id?: string | undefined
  status?: ModelVersionStatus | undefined
  storage_location?: string | undefined
  comment?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  updated_at?: bigint | undefined
  updated_by?: string | undefined
  id?: string | undefined
}
type ListModelVersionsResponse = {
  model_versions?: ModelVersionInfo[] | undefined
  next_page_token?: string | undefined
}
type UpdateModelVersion = { comment?: string | undefined }
type FinalizeModelVersion = { full_name: string; version: bigint }
type PathOperation =
  | 'UNKNOWN_PATH_OPERATION'
  | 'PATH_READ'
  | 'PATH_READ_WRITE'
  | 'PATH_CREATE_TABLE'
type GenerateTemporaryPathCredential = { url: string; operation: PathOperation }
type SecurableType =
  | 'metastore'
  | 'catalog'
  | 'schema'
  | 'table'
  | 'function'
  | 'volume'
  | 'registered_model'
  | 'external_location'
  | 'credential'
type Privilege =
  | 'CREATE CATALOG'
  | 'USE CATALOG'
  | 'CREATE SCHEMA'
  | 'USE SCHEMA'
  | 'CREATE TABLE'
  | 'SELECT'
  | 'MODIFY'
  | 'CREATE FUNCTION'
  | 'EXECUTE'
  | 'CREATE VOLUME'
  | 'READ VOLUME'
  | 'CREATE MODEL'
  | 'CREATE EXTERNAL LOCATION'
  | 'READ FILES'
  | 'WRITE FILES'
  | 'CREATE EXTERNAL TABLE'
  | 'CREATE EXTERNAL VOLUME'
  | 'CREATE MANAGED STORAGE'
  | 'CREATE STORAGE CREDENTIAL'
  | 'BROWSE'
  | 'MANAGE'
  | 'WRITE VOLUME'
  | 'CREATE MODEL VERSION'
  | 'READ METADATA'
type PrivilegeAssignment = { principal: string; privileges: Privilege[] }
type PermissionsList = { privilege_assignments: PrivilegeAssignment[] }
type PermissionsChange = { principal: string; add: Privilege[]; remove: Privilege[] }
type UpdatePermissions = { changes: PermissionsChange[] }
type GetMetastoreSummaryResponse = { metastore_id?: string | undefined }
type AwsIamRoleArn = string
type AwsIamRoleRequest = { role_arn: AwsIamRoleArn }
type S3CompatibleS3Endpoint = string
type S3AssumeRole = {
  sts_endpoint?: string | undefined
  role_arn: string
  sts_region?: string | undefined
}
type S3CompatibleRequest = {
  s3_endpoint: S3CompatibleS3Endpoint
  access_key_id: string
  secret_access_key: string
  assume_role?: S3AssumeRole | undefined
}
type CredentialPurpose = 'STORAGE'
type CreateCredentialRequest = {
  name: string
  comment?: string | undefined
  aws_iam_role?: AwsIamRoleRequest | undefined
  s3_compatible?: S3CompatibleRequest | undefined
  purpose?: CredentialPurpose | undefined
}
type AwsIamRoleResponse = {
  role_arn: AwsIamRoleArn
  unity_catalog_iam_arn?: string | undefined
  external_id?: string | undefined
}
type S3CompatibleResponse = {
  s3_endpoint: S3CompatibleS3Endpoint
  access_key_id: string
  assume_role?: S3AssumeRole | undefined
}
type CredentialInfo = {
  name?: string | undefined
  aws_iam_role?: AwsIamRoleResponse | undefined
  s3_compatible?: S3CompatibleResponse | undefined
  comment?: string | undefined
  owner?: string | undefined
  full_name?: string | undefined
  id?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  updated_at?: bigint | undefined
  updated_by?: string | undefined
  purpose?: CredentialPurpose | undefined
}
type ListCredentialsResponse = {
  credentials?: CredentialInfo[] | undefined
  next_page_token?: string | undefined
}
type UpdateCredentialRequest = {
  comment?: string | undefined
  owner?: string | undefined
  aws_iam_role?: AwsIamRoleRequest | undefined
  s3_compatible?: S3CompatibleRequest | undefined
  new_name?: string | undefined
}
type CreateExternalLocation = {
  name: string
  url: string
  credential_name: string
  comment?: string | undefined
}
type ExternalLocationInfo = {
  browse_only?: boolean | undefined
  name?: string | undefined
  id?: string | undefined
  url?: string | undefined
  credential_name?: string | undefined
  comment?: string | undefined
  owner?: string | undefined
  credential_id?: string | undefined
  created_at?: bigint | undefined
  created_by?: string | undefined
  updated_at?: bigint | undefined
  updated_by?: string | undefined
}
type ListExternalLocationsResponse = {
  external_locations?: ExternalLocationInfo[] | undefined
  next_page_token?: string | undefined
}
type UpdateExternalLocation = {
  url?: string | undefined
  credential_name?: string | undefined
  comment?: string | undefined
  owner?: string | undefined
  new_name?: string | undefined
  force?: boolean | undefined
}
type DeltaGetCommits = {
  table_id: string
  table_uri: string
  start_version: bigint
  end_version?: bigint | undefined
}
type DeltaCommitInfo = {
  version: bigint
  timestamp: bigint
  file_name: string
  file_size: bigint
  file_modification_timestamp: bigint
}
type DeltaGetCommitsResponse = { commits: DeltaCommitInfo[]; latest_table_version: bigint }
type ColumnInfos = { columns?: ColumnInfo[] | undefined }
type DeltaCommitMetadataProperties = { properties?: SecurablePropertiesMap | undefined }
type DeltaMetadata = {
  description?: string | undefined
  schema?: ColumnInfos | undefined
  properties?: DeltaCommitMetadataProperties | undefined
}
type DeltaUniformIceberg = {
  metadata_location: string
  converted_delta_version: bigint
  converted_delta_timestamp: string
  base_converted_delta_version?: bigint | undefined
}
type DeltaUniform = { iceberg: DeltaUniformIceberg }
type DeltaCommit = {
  table_id: string
  table_uri: string
  commit_info?: DeltaCommitInfo | undefined
  latest_backfilled_version?: bigint | undefined
  metadata?: DeltaMetadata | undefined
  uniform?: DeltaUniform | undefined
}
type DeltaCommitResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/catalogs': {
      $post: {
        input: { json: CreateCatalog }
        output: CatalogInfo
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            page_token?: string | undefined
            max_results?: number | undefined
            include_browse?: boolean | undefined
          }
        }
        output: ListCatalogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/catalogs/:name': {
      $get: {
        input: { param: { name: string } } & { query: { include_browse?: boolean | undefined } }
        output: CatalogInfo
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & { json: UpdateCatalog }
        output: CatalogInfo
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } } & { query: { force?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schemas': {
      $post: {
        input: { json: CreateSchema }
        output: SchemaInfo
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            catalog_name: string
            max_results?: number | undefined
            page_token?: string | undefined
            include_browse?: boolean | undefined
          }
        }
        output: ListSchemasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schemas/:full_name': {
      $get: {
        input: { param: { full_name: string } } & {
          query: { include_browse?: boolean | undefined }
        }
        output: SchemaInfo
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { full_name: string } } & { json: UpdateSchema }
        output: SchemaInfo
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { full_name: string } } & { query: { force?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/staging-tables': {
      $post: {
        input: { json: CreateStagingTable }
        output: StagingTableInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tables': {
      $post: { input: { json: CreateTable }; output: TableInfo; outputFormat: 'json'; status: 200 }
      $get: {
        input: {
          query: {
            catalog_name: string
            schema_name: string
            max_results?: number | undefined
            page_token?: string | undefined
            include_browse?: boolean | undefined
          }
        }
        output: ListTablesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tables/:full_name': {
      $get: {
        input: { param: { full_name: string } } & {
          query: {
            read_streaming_table_as_managed?: boolean | undefined
            read_materialized_view_as_managed?: boolean | undefined
            include_browse?: boolean | undefined
          }
        }
        output: TableInfo
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { full_name: string } } & { json: UpdateTable }
        output: TableInfo
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { full_name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/volumes': {
      $post: {
        input: { json: CreateVolumeRequestContent }
        output: VolumeInfo
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            catalog_name: string
            schema_name: string
            max_results?: number | undefined
            page_token?: string | undefined
            include_browse?: boolean | undefined
          }
        }
        output: ListVolumesResponseContent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/volumes/:name': {
      $get: {
        input: { param: { name: string } } & { query: { include_browse?: boolean | undefined } }
        output: VolumeInfo
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & { json: UpdateVolumeRequestContent }
        output: VolumeInfo
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/temporary-model-version-credentials': {
      $post: {
        input: { json: GenerateTemporaryModelVersionCredential }
        output: TemporaryCredentials
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/temporary-table-credentials': {
      $post: {
        input: { json: GenerateTemporaryTableCredential }
        output: TemporaryCredentials
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/temporary-volume-credentials': {
      $post: {
        input: { json: GenerateTemporaryVolumeCredential }
        output: TemporaryCredentials
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/functions': {
      $post: {
        input: { json: CreateFunctionRequest }
        output: FunctionInfo
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            catalog_name: string
            schema_name: string
            max_results?: number | undefined
            page_token?: string | undefined
            include_browse?: boolean | undefined
          }
        }
        output: ListFunctionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/functions/:name': {
      $get: {
        input: { param: { name: string } } & { query: { include_browse?: boolean | undefined } }
        output: FunctionInfo
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & { json: UpdateFunction }
        output: FunctionInfo
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models': {
      $post: {
        input: { json: CreateRegisteredModel }
        output: RegisteredModelInfo
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            catalog_name?: string | undefined
            schema_name?: string | undefined
            max_results?: number | undefined
            page_token?: string | undefined
            include_browse?: boolean | undefined
          }
        }
        output: ListRegisteredModelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models/:full_name': {
      $get: {
        input: { param: { full_name: string } } & {
          query: { include_browse?: boolean | undefined }
        }
        output: RegisteredModelInfo
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { full_name: string } } & { json: UpdateRegisteredModel }
        output: RegisteredModelInfo
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { full_name: string } } & { query: { force?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models/versions': {
      $post: {
        input: { json: CreateModelVersion }
        output: ModelVersionInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models/:full_name/versions': {
      $get: {
        input: { param: { full_name: string } } & {
          query: { max_results?: number | undefined; page_token?: string | undefined }
        }
        output: ListModelVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models/:full_name/versions/:version': {
      $get: {
        input: { param: { full_name: string; version: bigint } }
        output: ModelVersionInfo
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { full_name: string; version: bigint } } & { json: UpdateModelVersion }
        output: ModelVersionInfo
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { full_name: string; version: bigint } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/models/:full_name/versions/:version/finalize': {
      $patch: {
        input: { param: { full_name: string; version: bigint } } & { json: FinalizeModelVersion }
        output: ModelVersionInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/temporary-path-credentials': {
      $post: {
        input: { json: GenerateTemporaryPathCredential }
        output: TemporaryCredentials
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/permissions/:securable_type/:full_name': {
      $get: {
        input: { param: { securable_type: SecurableType; full_name: string } } & {
          query: { principal?: string | undefined }
        }
        output: PermissionsList
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { securable_type: SecurableType; full_name: string } } & {
          json: UpdatePermissions
        }
        output: PermissionsList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/metastore_summary': {
      $get: { input: {}; output: GetMetastoreSummaryResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/credentials': {
      $post: {
        input: { json: CreateCredentialRequest }
        output: CredentialInfo
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            max_results?: number | undefined
            page_token?: string | undefined
            purpose?: CredentialPurpose | undefined
          }
        }
        output: ListCredentialsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credentials/:name': {
      $get: {
        input: { param: { name: string } }
        output: CredentialInfo
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & { json: UpdateCredentialRequest }
        output: CredentialInfo
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } } & { query: { force?: boolean | undefined } }
        output: { [x: string]: unknown }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/external-locations': {
      $post: {
        input: { json: CreateExternalLocation }
        output: ExternalLocationInfo
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            max_results?: number | undefined
            page_token?: string | undefined
            include_browse?: boolean | undefined
          }
        }
        output: ListExternalLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/external-locations/:name': {
      $get: {
        input: { param: { name: string } } & { query: { include_browse?: boolean | undefined } }
        output: ExternalLocationInfo
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { name: string } } & { query: { force?: boolean | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & { json: UpdateExternalLocation }
        output: ExternalLocationInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/delta/preview/commits': {
      $get:
        | {
            input: { json: DeltaGetCommits }
            output: DeltaGetCommitsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DeltaGetCommits }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DeltaGetCommits }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: DeltaGetCommits }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: DeltaGetCommits }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: DeltaGetCommits }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: DeltaCommit }
            output: DeltaCommitResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DeltaCommit }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DeltaCommit }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: DeltaCommit }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: DeltaCommit }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: DeltaCommit }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: DeltaCommit }; output: {}; outputFormat: string; status: 429 }
        | { input: { json: DeltaCommit }; output: {}; outputFormat: string; status: 500 }
        | { input: { json: DeltaCommit }; output: {}; outputFormat: string; status: 501 }
    }
  },
  '/'
>
export default routes

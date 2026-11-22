type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type DatabaseDump = {
  databaseType?: 'DATABASE_TYPE_UNSPECIFIED' | 'MYSQL' | undefined
  gcsUri?: string | undefined
  sourceDatabase?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'MYSQL' | 'AVRO' | undefined
}
type MetadataImport = {
  createTime?: string | undefined
  databaseDump?: DatabaseDump | undefined
  description?: string | undefined
  endTime?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'RUNNING' | 'SUCCEEDED' | 'UPDATING' | 'FAILED' | undefined
  updateTime?: string | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type Empty = { [x: string]: unknown }
type EncryptionConfig = { kmsKey?: string | undefined }
type Consumer = { endpointUri?: string | undefined; subnetwork?: string | undefined }
type NetworkConfig = {
  consumers?: Consumer[] | undefined
  customRoutesEnabled?: boolean | undefined
}
type AuxiliaryVersionConfig = {
  configOverrides?: { [x: string]: string } | undefined
  networkConfig?: NetworkConfig | undefined
  version?: string | undefined
}
type Secret = { cloudSecret?: string | undefined }
type KerberosConfig = {
  keytab?: Secret | undefined
  krb5ConfigGcsUri?: string | undefined
  principal?: string | undefined
}
type HiveMetastoreConfig = {
  auxiliaryVersions?: { [x: string]: AuxiliaryVersionConfig } | undefined
  configOverrides?: { [x: string]: string } | undefined
  endpointProtocol?: 'ENDPOINT_PROTOCOL_UNSPECIFIED' | 'THRIFT' | 'GRPC' | undefined
  kerberosConfig?: KerberosConfig | undefined
  version?: string | undefined
}
type MaintenanceWindow = {
  dayOfWeek?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  hourOfDay?: number | undefined
}
type DataCatalogConfig = { enabled?: boolean | undefined }
type Lake = { name?: string | undefined }
type DataplexConfig = { lakeResources?: { [x: string]: Lake } | undefined }
type MetadataIntegration = {
  dataCatalogConfig?: DataCatalogConfig | undefined
  dataplexConfig?: DataplexConfig | undefined
}
type MetadataExport = {
  databaseDumpType?: 'TYPE_UNSPECIFIED' | 'MYSQL' | 'AVRO' | undefined
  destinationGcsUri?: string | undefined
  endTime?: string | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | undefined
}
type Restore = {
  backup?: string | undefined
  details?: string | undefined
  endTime?: string | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'CANCELLED' | undefined
  type?: 'RESTORE_TYPE_UNSPECIFIED' | 'FULL' | 'METADATA_ONLY' | undefined
}
type MetadataManagementActivity = {
  metadataExports?: MetadataExport[] | undefined
  restores?: Restore[] | undefined
}
type ScalingConfig = {
  instanceSize?:
    | 'INSTANCE_SIZE_UNSPECIFIED'
    | 'EXTRA_SMALL'
    | 'SMALL'
    | 'MEDIUM'
    | 'LARGE'
    | 'EXTRA_LARGE'
    | undefined
  scalingFactor?: number | undefined
}
type TelemetryConfig = { logFormat?: 'LOG_FORMAT_UNSPECIFIED' | 'LEGACY' | 'JSON' | undefined }
type Service = {
  artifactGcsUri?: string | undefined
  createTime?: string | undefined
  databaseType?: 'DATABASE_TYPE_UNSPECIFIED' | 'MYSQL' | 'SPANNER' | undefined
  encryptionConfig?: EncryptionConfig | undefined
  endpointUri?: string | undefined
  hiveMetastoreConfig?: HiveMetastoreConfig | undefined
  labels?: { [x: string]: string } | undefined
  maintenanceWindow?: MaintenanceWindow | undefined
  metadataIntegration?: MetadataIntegration | undefined
  metadataManagementActivity?: MetadataManagementActivity | undefined
  name?: string | undefined
  network?: string | undefined
  networkConfig?: NetworkConfig | undefined
  port?: number | undefined
  releaseChannel?: 'RELEASE_CHANNEL_UNSPECIFIED' | 'CANARY' | 'STABLE' | undefined
  scalingConfig?: ScalingConfig | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'ACTIVE'
    | 'SUSPENDING'
    | 'SUSPENDED'
    | 'UPDATING'
    | 'DELETING'
    | 'ERROR'
    | undefined
  stateMessage?: string | undefined
  telemetryConfig?: TelemetryConfig | undefined
  tier?: 'TIER_UNSPECIFIED' | 'DEVELOPER' | 'ENTERPRISE' | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type Backup = {
  createTime?: string | undefined
  description?: string | undefined
  endTime?: string | undefined
  name?: string | undefined
  restoringServices?: string[] | undefined
  serviceRevision?: Service | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'DELETING'
    | 'ACTIVE'
    | 'FAILED'
    | 'RESTORING'
    | undefined
}
type ListBackupsResponse = {
  backups?: Backup[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type BackendMetastore = {
  metastoreType?:
    | 'METASTORE_TYPE_UNSPECIFIED'
    | 'DATAPLEX'
    | 'BIGQUERY'
    | 'DATAPROC_METASTORE'
    | undefined
  name?: string | undefined
}
type Federation = {
  backendMetastores?: { [x: string]: BackendMetastore } | undefined
  createTime?: string | undefined
  endpointUri?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'ACTIVE'
    | 'UPDATING'
    | 'DELETING'
    | 'ERROR'
    | undefined
  stateMessage?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
  version?: string | undefined
}
type ListFederationsResponse = {
  federations?: Federation[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ListMetadataImportsResponse = {
  metadataImports?: MetadataImport[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ListServicesResponse = {
  nextPageToken?: string | undefined
  services?: Service[] | undefined
  unreachable?: string[] | undefined
}
type AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type AuditConfig = { auditLogConfigs?: AuditLogConfig[] | undefined; service?: string | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  auditConfigs?: AuditConfig[] | undefined
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type RemoveIamPolicyRequest = { asynchronous?: boolean | undefined }
type RemoveIamPolicyResponse = { success?: boolean | undefined }
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
type AlterMetadataResourceLocationRequest = {
  locationUri?: string | undefined
  resourceName?: string | undefined
}
type ExportMetadataRequest = {
  databaseDumpType?: 'TYPE_UNSPECIFIED' | 'MYSQL' | 'AVRO' | undefined
  destinationGcsFolder?: string | undefined
  requestId?: string | undefined
}
type MoveTableToDatabaseRequest = {
  dbName?: string | undefined
  destinationDbName?: string | undefined
  tableName?: string | undefined
}
type QueryMetadataRequest = { query?: string | undefined }
type RestoreServiceRequest = {
  backup?: string | undefined
  requestId?: string | undefined
  restoreType?: 'RESTORE_TYPE_UNSPECIFIED' | 'FULL' | 'METADATA_ONLY' | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            requestId?: string | undefined
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
        output: Operation
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
        output: MetadataImport
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            requestId?: string | undefined
            updateMask?: string | undefined
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
        } & { json: MetadataImport }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
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
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:cancel': {
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
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/backups': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListBackupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            backupId?: string | undefined
            requestId?: string | undefined
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
        } & { json: Backup }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/federations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListFederationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            federationId?: string | undefined
            requestId?: string | undefined
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
        } & { json: Federation }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/metadataImports': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListMetadataImportsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            metadataImportId?: string | undefined
            requestId?: string | undefined
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
        } & { json: MetadataImport }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/services': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListServicesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
            serviceId?: string | undefined
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
        } & { json: Service }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
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
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:resource:removeIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: RemoveIamPolicyRequest }
        output: RemoveIamPolicyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:service:alterLocation': {
      $post: {
        input: { param: { service: string } } & {
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
        } & { json: AlterMetadataResourceLocationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:service:exportMetadata': {
      $post: {
        input: { param: { service: string } } & {
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
        } & { json: ExportMetadataRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:service:moveTableToDatabase': {
      $post: {
        input: { param: { service: string } } & {
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
        } & { json: MoveTableToDatabaseRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:service:queryMetadata': {
      $post: {
        input: { param: { service: string } } & {
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
        } & { json: QueryMetadataRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:service:restore': {
      $post: {
        input: { param: { service: string } } & {
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
        } & { json: RestoreServiceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

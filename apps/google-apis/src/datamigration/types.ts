type VmCreationConfig = {
  subnet?: string | undefined
  vmMachineType?: string | undefined
  vmZone?: string | undefined
}
type VmSelectionConfig = { vmZone?: string | undefined }
type GenerateSshScriptRequest = {
  vm?: string | undefined
  vmCreationConfig?: VmCreationConfig | undefined
  vmPort?: number | undefined
  vmSelectionConfig?: VmSelectionConfig | undefined
}
type SshScript = { script?: string | undefined }
type Empty = { [x: string]: unknown }
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
type DatabaseType = {
  engine?: 'DATABASE_ENGINE_UNSPECIFIED' | 'MYSQL' | undefined
  provider?: 'DATABASE_PROVIDER_UNSPECIFIED' | 'CLOUDSQL' | 'RDS' | undefined
}
type ReverseSshConnectivity = {
  vm?: string | undefined
  vmIp?: string | undefined
  vmPort?: number | undefined
  vpc?: string | undefined
}
type StaticIpConnectivity = { [x: string]: unknown }
type VpcPeeringConnectivity = { vpc?: string | undefined }
type MigrationJob = {
  createTime?: string | undefined
  destination?: string | undefined
  destinationDatabase?: DatabaseType | undefined
  displayName?: string | undefined
  dumpPath?: string | undefined
  duration?: string | undefined
  endTime?: string | undefined
  error?: Status | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  phase?:
    | 'PHASE_UNSPECIFIED'
    | 'FULL_DUMP'
    | 'CDC'
    | 'PROMOTE_IN_PROGRESS'
    | 'WAITING_FOR_SOURCE_WRITES_TO_STOP'
    | 'PREPARING_THE_DUMP'
    | undefined
  reverseSshConnectivity?: ReverseSshConnectivity | undefined
  source?: string | undefined
  sourceDatabase?: DatabaseType | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'MAINTENANCE'
    | 'DRAFT'
    | 'CREATING'
    | 'NOT_STARTED'
    | 'RUNNING'
    | 'FAILED'
    | 'COMPLETED'
    | 'DELETING'
    | 'STOPPING'
    | 'STOPPED'
    | 'DELETED'
    | 'UPDATING'
    | 'STARTING'
    | 'RESTARTING'
    | 'RESUMING'
    | undefined
  staticIpConnectivity?: StaticIpConnectivity | undefined
  type?: 'TYPE_UNSPECIFIED' | 'ONE_TIME' | 'CONTINUOUS' | undefined
  updateTime?: string | undefined
  vpcPeeringConnectivity?: VpcPeeringConnectivity | undefined
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
type PromoteMigrationJobRequest = { [x: string]: unknown }
type RestartMigrationJobRequest = { [x: string]: unknown }
type ResumeMigrationJobRequest = { [x: string]: unknown }
type StartMigrationJobRequest = { [x: string]: unknown }
type StopMigrationJobRequest = { [x: string]: unknown }
type VerifyMigrationJobRequest = { [x: string]: unknown }
type SqlAclEntry = {
  expireTime?: string | undefined
  label?: string | undefined
  ttl?: string | undefined
  value?: string | undefined
}
type SqlIpConfig = {
  authorizedNetworks?: SqlAclEntry[] | undefined
  enableIpv4?: boolean | undefined
  privateNetwork?: string | undefined
  requireSsl?: boolean | undefined
}
type CloudSqlSettings = {
  activationPolicy?: 'SQL_ACTIVATION_POLICY_UNSPECIFIED' | 'ALWAYS' | 'NEVER' | undefined
  autoStorageIncrease?: boolean | undefined
  dataDiskSizeGb?: string | undefined
  dataDiskType?: 'SQL_DATA_DISK_TYPE_UNSPECIFIED' | 'PD_SSD' | 'PD_HDD' | undefined
  databaseFlags?: { [x: string]: string } | undefined
  databaseVersion?:
    | 'SQL_DATABASE_VERSION_UNSPECIFIED'
    | 'MYSQL_5_6'
    | 'MYSQL_5_7'
    | 'MYSQL_8_0'
    | undefined
  ipConfig?: SqlIpConfig | undefined
  rootPassword?: string | undefined
  rootPasswordSet?: boolean | undefined
  sourceId?: string | undefined
  storageAutoResizeLimit?: string | undefined
  tier?: string | undefined
  userLabels?: { [x: string]: string } | undefined
  zone?: string | undefined
}
type CloudSqlConnectionProfile = {
  cloudSqlId?: string | undefined
  privateIp?: string | undefined
  publicIp?: string | undefined
  settings?: CloudSqlSettings | undefined
}
type SslConfig = {
  caCertificate?: string | undefined
  clientCertificate?: string | undefined
  clientKey?: string | undefined
  type?: 'SSL_TYPE_UNSPECIFIED' | 'SERVER_ONLY' | 'SERVER_CLIENT' | undefined
}
type MySqlConnectionProfile = {
  cloudSqlId?: string | undefined
  host?: string | undefined
  password?: string | undefined
  passwordSet?: boolean | undefined
  port?: number | undefined
  ssl?: SslConfig | undefined
  username?: string | undefined
}
type ConnectionProfile = {
  cloudsql?: CloudSqlConnectionProfile | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  error?: Status | undefined
  labels?: { [x: string]: string } | undefined
  mysql?: MySqlConnectionProfile | undefined
  name?: string | undefined
  provider?: 'DATABASE_PROVIDER_UNSPECIFIED' | 'CLOUDSQL' | 'RDS' | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'DRAFT'
    | 'CREATING'
    | 'READY'
    | 'UPDATING'
    | 'DELETING'
    | 'DELETED'
    | 'FAILED'
    | undefined
  updateTime?: string | undefined
}
type ListConnectionProfilesResponse = {
  connectionProfiles?: ConnectionProfile[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ListMigrationJobsResponse = {
  migrationJobs?: MigrationJob[] | undefined
  nextPageToken?: string | undefined
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
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:migrationJob:generateSshScript': {
      $post: {
        input: { param: { migrationJob: string } } & {
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
        } & { json: GenerateSshScriptRequest }
        output: SshScript
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
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
        output: Operation
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
        } & { json: MigrationJob }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/locations': {
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
    '/v1beta1/:name/operations': {
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
    '/v1beta1/:name:cancel': {
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
    '/v1beta1/:name:promote': {
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
        } & { json: PromoteMigrationJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:restart': {
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
        } & { json: RestartMigrationJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:resume': {
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
        } & { json: ResumeMigrationJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:start': {
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
        } & { json: StartMigrationJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:stop': {
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
        } & { json: StopMigrationJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:verify': {
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
        } & { json: VerifyMigrationJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/connectionProfiles': {
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
        output: ListConnectionProfilesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            connectionProfileId?: string | undefined
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
        } & { json: ConnectionProfile }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/migrationJobs': {
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
        output: ListMigrationJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            migrationJobId?: string | undefined
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
        } & { json: MigrationJob }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
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
    '/v1beta1/:resource:setIamPolicy': {
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
    '/v1beta1/:resource:testIamPermissions': {
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
  },
  '/'
>
export default routes

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
type Error = {
  details?: { [x: string]: string } | undefined
  errorTime?: string | undefined
  errorUuid?: string | undefined
  message?: string | undefined
  reason?: string | undefined
}
type BackfillJob = {
  errors?: Error[] | undefined
  lastEndTime?: string | undefined
  lastStartTime?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'NOT_STARTED'
    | 'PENDING'
    | 'ACTIVE'
    | 'STOPPED'
    | 'FAILED'
    | 'COMPLETED'
    | 'UNSUPPORTED'
    | undefined
  trigger?: 'TRIGGER_UNSPECIFIED' | 'AUTOMATIC' | 'MANUAL' | undefined
}
type MysqlObjectIdentifier = { database?: string | undefined; table?: string | undefined }
type OracleObjectIdentifier = { schema?: string | undefined; table?: string | undefined }
type PostgresqlObjectIdentifier = { schema?: string | undefined; table?: string | undefined }
type SourceObjectIdentifier = {
  mysqlIdentifier?: MysqlObjectIdentifier | undefined
  oracleIdentifier?: OracleObjectIdentifier | undefined
  postgresqlIdentifier?: PostgresqlObjectIdentifier | undefined
}
type StreamObject = {
  backfillJob?: BackfillJob | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  errors?: Error[] | undefined
  name?: string | undefined
  sourceObject?: SourceObjectIdentifier | undefined
  updateTime?: string | undefined
}
type MysqlColumn = {
  collation?: string | undefined
  column?: string | undefined
  dataType?: string | undefined
  length?: number | undefined
  nullable?: boolean | undefined
  ordinalPosition?: number | undefined
  primaryKey?: boolean | undefined
}
type MysqlTable = { mysqlColumns?: MysqlColumn[] | undefined; table?: string | undefined }
type MysqlDatabase = { database?: string | undefined; mysqlTables?: MysqlTable[] | undefined }
type MysqlRdbms = { mysqlDatabases?: MysqlDatabase[] | undefined }
type OracleColumn = {
  column?: string | undefined
  dataType?: string | undefined
  encoding?: string | undefined
  length?: number | undefined
  nullable?: boolean | undefined
  ordinalPosition?: number | undefined
  precision?: number | undefined
  primaryKey?: boolean | undefined
  scale?: number | undefined
}
type OracleTable = { oracleColumns?: OracleColumn[] | undefined; table?: string | undefined }
type OracleSchema = { oracleTables?: OracleTable[] | undefined; schema?: string | undefined }
type OracleRdbms = { oracleSchemas?: OracleSchema[] | undefined }
type PostgresqlColumn = {
  column?: string | undefined
  dataType?: string | undefined
  length?: number | undefined
  nullable?: boolean | undefined
  ordinalPosition?: number | undefined
  precision?: number | undefined
  primaryKey?: boolean | undefined
  scale?: number | undefined
}
type PostgresqlTable = {
  postgresqlColumns?: PostgresqlColumn[] | undefined
  table?: string | undefined
}
type PostgresqlSchema = {
  postgresqlTables?: PostgresqlTable[] | undefined
  schema?: string | undefined
}
type PostgresqlRdbms = { postgresqlSchemas?: PostgresqlSchema[] | undefined }
type BackfillAllStrategy = {
  mysqlExcludedObjects?: MysqlRdbms | undefined
  oracleExcludedObjects?: OracleRdbms | undefined
  postgresqlExcludedObjects?: PostgresqlRdbms | undefined
}
type BackfillNoneStrategy = { [x: string]: unknown }
type SingleTargetDataset = { datasetId?: string | undefined }
type DatasetTemplate = {
  datasetIdPrefix?: string | undefined
  kmsKeyName?: string | undefined
  location?: string | undefined
}
type SourceHierarchyDatasets = { datasetTemplate?: DatasetTemplate | undefined }
type BigQueryDestinationConfig = {
  dataFreshness?: string | undefined
  singleTargetDataset?: SingleTargetDataset | undefined
  sourceHierarchyDatasets?: SourceHierarchyDatasets | undefined
}
type AvroFileFormat = { [x: string]: unknown }
type JsonFileFormat = {
  compression?: 'JSON_COMPRESSION_UNSPECIFIED' | 'NO_COMPRESSION' | 'GZIP' | undefined
  schemaFileFormat?:
    | 'SCHEMA_FILE_FORMAT_UNSPECIFIED'
    | 'NO_SCHEMA_FILE'
    | 'AVRO_SCHEMA_FILE'
    | undefined
}
type GcsDestinationConfig = {
  avroFileFormat?: AvroFileFormat | undefined
  fileRotationInterval?: string | undefined
  fileRotationMb?: number | undefined
  jsonFileFormat?: JsonFileFormat | undefined
  path?: string | undefined
}
type DestinationConfig = {
  bigqueryDestinationConfig?: BigQueryDestinationConfig | undefined
  destinationConnectionProfile?: string | undefined
  gcsDestinationConfig?: GcsDestinationConfig | undefined
}
type MysqlSourceConfig = {
  excludeObjects?: MysqlRdbms | undefined
  includeObjects?: MysqlRdbms | undefined
  maxConcurrentBackfillTasks?: number | undefined
  maxConcurrentCdcTasks?: number | undefined
}
type DropLargeObjects = { [x: string]: unknown }
type StreamLargeObjects = { [x: string]: unknown }
type OracleSourceConfig = {
  dropLargeObjects?: DropLargeObjects | undefined
  excludeObjects?: OracleRdbms | undefined
  includeObjects?: OracleRdbms | undefined
  maxConcurrentBackfillTasks?: number | undefined
  maxConcurrentCdcTasks?: number | undefined
  streamLargeObjects?: StreamLargeObjects | undefined
}
type PostgresqlSourceConfig = {
  excludeObjects?: PostgresqlRdbms | undefined
  includeObjects?: PostgresqlRdbms | undefined
  maxConcurrentBackfillTasks?: number | undefined
  publication?: string | undefined
  replicationSlot?: string | undefined
}
type SourceConfig = {
  mysqlSourceConfig?: MysqlSourceConfig | undefined
  oracleSourceConfig?: OracleSourceConfig | undefined
  postgresqlSourceConfig?: PostgresqlSourceConfig | undefined
  sourceConnectionProfile?: string | undefined
}
type Stream = {
  backfillAll?: BackfillAllStrategy | undefined
  backfillNone?: BackfillNoneStrategy | undefined
  createTime?: string | undefined
  customerManagedEncryptionKey?: string | undefined
  destinationConfig?: DestinationConfig | undefined
  displayName?: string | undefined
  errors?: Error[] | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  sourceConfig?: SourceConfig | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'NOT_STARTED'
    | 'RUNNING'
    | 'PAUSED'
    | 'MAINTENANCE'
    | 'FAILED'
    | 'FAILED_PERMANENTLY'
    | 'STARTING'
    | 'DRAINING'
    | undefined
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
type FetchStaticIpsResponse = {
  nextPageToken?: string | undefined
  staticIps?: string[] | undefined
}
type StartBackfillJobRequest = { [x: string]: unknown }
type StartBackfillJobResponse = { object?: StreamObject | undefined }
type StopBackfillJobRequest = { [x: string]: unknown }
type StopBackfillJobResponse = { object?: StreamObject | undefined }
type BigQueryProfile = { [x: string]: unknown }
type ForwardSshTunnelConnectivity = {
  hostname?: string | undefined
  password?: string | undefined
  port?: number | undefined
  privateKey?: string | undefined
  username?: string | undefined
}
type GcsProfile = { bucket?: string | undefined; rootPath?: string | undefined }
type MysqlSslConfig = {
  caCertificate?: string | undefined
  caCertificateSet?: boolean | undefined
  clientCertificate?: string | undefined
  clientCertificateSet?: boolean | undefined
  clientKey?: string | undefined
  clientKeySet?: boolean | undefined
}
type MysqlProfile = {
  hostname?: string | undefined
  password?: string | undefined
  port?: number | undefined
  sslConfig?: MysqlSslConfig | undefined
  username?: string | undefined
}
type OracleProfile = {
  connectionAttributes?: { [x: string]: string } | undefined
  databaseService?: string | undefined
  hostname?: string | undefined
  password?: string | undefined
  port?: number | undefined
  username?: string | undefined
}
type PostgresqlProfile = {
  database?: string | undefined
  hostname?: string | undefined
  password?: string | undefined
  port?: number | undefined
  username?: string | undefined
}
type PrivateConnectivity = { privateConnection?: string | undefined }
type StaticServiceIpConnectivity = { [x: string]: unknown }
type ConnectionProfile = {
  bigqueryProfile?: BigQueryProfile | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  forwardSshConnectivity?: ForwardSshTunnelConnectivity | undefined
  gcsProfile?: GcsProfile | undefined
  labels?: { [x: string]: string } | undefined
  mysqlProfile?: MysqlProfile | undefined
  name?: string | undefined
  oracleProfile?: OracleProfile | undefined
  postgresqlProfile?: PostgresqlProfile | undefined
  privateConnectivity?: PrivateConnectivity | undefined
  staticServiceIpConnectivity?: StaticServiceIpConnectivity | undefined
  updateTime?: string | undefined
}
type ListConnectionProfilesResponse = {
  connectionProfiles?: ConnectionProfile[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type DiscoverConnectionProfileRequest = {
  connectionProfile?: ConnectionProfile | undefined
  connectionProfileName?: string | undefined
  fullHierarchy?: boolean | undefined
  hierarchyDepth?: number | undefined
  mysqlRdbms?: MysqlRdbms | undefined
  oracleRdbms?: OracleRdbms | undefined
  postgresqlRdbms?: PostgresqlRdbms | undefined
}
type DiscoverConnectionProfileResponse = {
  mysqlRdbms?: MysqlRdbms | undefined
  oracleRdbms?: OracleRdbms | undefined
  postgresqlRdbms?: PostgresqlRdbms | undefined
}
type ListStreamObjectsResponse = {
  nextPageToken?: string | undefined
  streamObjects?: StreamObject[] | undefined
}
type LookupStreamObjectRequest = { sourceObjectIdentifier?: SourceObjectIdentifier | undefined }
type VpcPeeringConfig = { subnet?: string | undefined; vpc?: string | undefined }
type PrivateConnection = {
  createTime?: string | undefined
  displayName?: string | undefined
  error?: Error | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'CREATED'
    | 'FAILED'
    | 'DELETING'
    | 'FAILED_TO_DELETE'
    | undefined
  updateTime?: string | undefined
  vpcPeeringConfig?: VpcPeeringConfig | undefined
}
type ListPrivateConnectionsResponse = {
  nextPageToken?: string | undefined
  privateConnections?: PrivateConnection[] | undefined
  unreachable?: string[] | undefined
}
type Route = {
  createTime?: string | undefined
  destinationAddress?: string | undefined
  destinationPort?: number | undefined
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type ListRoutesResponse = {
  nextPageToken?: string | undefined
  routes?: Route[] | undefined
  unreachable?: string[] | undefined
}
type ListStreamsResponse = {
  nextPageToken?: string | undefined
  streams?: Stream[] | undefined
  unreachable?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
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
        output: StreamObject
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            requestId?: string | undefined
            updateMask?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: Stream }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/locations': {
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
    '/v1/:name/operations': {
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
    '/v1/:name:cancel': {
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
    '/v1/:name:fetchStaticIps': {
      $get: {
        input: { param: { name: string } } & {
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
        output: FetchStaticIpsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:object:startBackfillJob': {
      $post: {
        input: { param: { object: string } } & {
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
        } & { json: StartBackfillJobRequest }
        output: StartBackfillJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:object:stopBackfillJob': {
      $post: {
        input: { param: { object: string } } & {
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
        } & { json: StopBackfillJobRequest }
        output: StopBackfillJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/connectionProfiles': {
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
            force?: boolean | undefined
            requestId?: string | undefined
            validateOnly?: boolean | undefined
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
    '/v1/:parent/connectionProfiles:discover': {
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
        } & { json: DiscoverConnectionProfileRequest }
        output: DiscoverConnectionProfileResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/objects': {
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
        output: ListStreamObjectsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/objects:lookup': {
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
        } & { json: LookupStreamObjectRequest }
        output: StreamObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/privateConnections': {
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
        output: ListPrivateConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            force?: boolean | undefined
            privateConnectionId?: string | undefined
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
        } & { json: PrivateConnection }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/routes': {
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
        output: ListRoutesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
            routeId?: string | undefined
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
        } & { json: Route }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/streams': {
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
        output: ListStreamsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            force?: boolean | undefined
            requestId?: string | undefined
            streamId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: Stream }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

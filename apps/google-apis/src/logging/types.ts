type CopyLogEntriesRequest = {
  destination?: string | undefined
  filter?: string | undefined
  name?: string | undefined
}
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
type ListLogEntriesRequest = {
  filter?: string | undefined
  orderBy?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  projectIds?: string[] | undefined
  resourceNames?: string[] | undefined
}
type LogErrorGroup = { id?: string | undefined }
type HttpRequest = {
  cacheFillBytes?: string | undefined
  cacheHit?: boolean | undefined
  cacheLookup?: boolean | undefined
  cacheValidatedWithOriginServer?: boolean | undefined
  latency?: string | undefined
  protocol?: string | undefined
  referer?: string | undefined
  remoteIp?: string | undefined
  requestMethod?: string | undefined
  requestSize?: string | undefined
  requestUrl?: string | undefined
  responseSize?: string | undefined
  serverIp?: string | undefined
  status?: number | undefined
  userAgent?: string | undefined
}
type MonitoredResourceMetadata = {
  systemLabels?: { [x: string]: { [x: string]: unknown } } | undefined
  userLabels?: { [x: string]: string } | undefined
}
type LogEntryOperation = {
  first?: boolean | undefined
  id?: string | undefined
  last?: boolean | undefined
  producer?: string | undefined
}
type MonitoredResource = { labels?: { [x: string]: string } | undefined; type?: string | undefined }
type LogEntrySourceLocation = {
  file?: string | undefined
  function?: string | undefined
  line?: string | undefined
}
type LogSplit = {
  index?: number | undefined
  totalSplits?: number | undefined
  uid?: string | undefined
}
type LogEntry = {
  errorGroups?: LogErrorGroup[] | undefined
  httpRequest?: HttpRequest | undefined
  insertId?: string | undefined
  jsonPayload?: { [x: string]: { [x: string]: unknown } } | undefined
  labels?: { [x: string]: string } | undefined
  logName?: string | undefined
  metadata?: MonitoredResourceMetadata | undefined
  operation?: LogEntryOperation | undefined
  protoPayload?: { [x: string]: { [x: string]: unknown } } | undefined
  receiveTimestamp?: string | undefined
  resource?: MonitoredResource | undefined
  severity?:
    | 'DEFAULT'
    | 'DEBUG'
    | 'INFO'
    | 'NOTICE'
    | 'WARNING'
    | 'ERROR'
    | 'CRITICAL'
    | 'ALERT'
    | 'EMERGENCY'
    | undefined
  sourceLocation?: LogEntrySourceLocation | undefined
  spanId?: string | undefined
  split?: LogSplit | undefined
  textPayload?: string | undefined
  timestamp?: string | undefined
  trace?: string | undefined
  traceSampled?: boolean | undefined
}
type ListLogEntriesResponse = {
  entries?: LogEntry[] | undefined
  nextPageToken?: string | undefined
}
type TailLogEntriesRequest = {
  bufferWindow?: string | undefined
  filter?: string | undefined
  resourceNames?: string[] | undefined
}
type SuppressionInfo = {
  reason?: 'REASON_UNSPECIFIED' | 'RATE_LIMIT' | 'NOT_CONSUMED' | undefined
  suppressedCount?: number | undefined
}
type TailLogEntriesResponse = {
  entries?: LogEntry[] | undefined
  suppressionInfo?: SuppressionInfo[] | undefined
}
type WriteLogEntriesRequest = {
  dryRun?: boolean | undefined
  entries?: LogEntry[] | undefined
  labels?: { [x: string]: string } | undefined
  logName?: string | undefined
  partialSuccess?: boolean | undefined
  resource?: MonitoredResource | undefined
}
type WriteLogEntriesResponse = { [x: string]: unknown }
type LabelDescriptor = {
  description?: string | undefined
  key?: string | undefined
  valueType?: 'STRING' | 'BOOL' | 'INT64' | undefined
}
type MonitoredResourceDescriptor = {
  description?: string | undefined
  displayName?: string | undefined
  labels?: LabelDescriptor[] | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  name?: string | undefined
  type?: string | undefined
}
type ListMonitoredResourceDescriptorsResponse = {
  nextPageToken?: string | undefined
  resourceDescriptors?: MonitoredResourceDescriptor[] | undefined
}
type Empty = { [x: string]: unknown }
type Explicit = { bounds?: number[] | undefined }
type Exponential = {
  growthFactor?: number | undefined
  numFiniteBuckets?: number | undefined
  scale?: number | undefined
}
type Linear = {
  numFiniteBuckets?: number | undefined
  offset?: number | undefined
  width?: number | undefined
}
type BucketOptions = {
  explicitBuckets?: Explicit | undefined
  exponentialBuckets?: Exponential | undefined
  linearBuckets?: Linear | undefined
}
type MetricDescriptorMetadata = {
  ingestDelay?: string | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  samplePeriod?: string | undefined
}
type MetricDescriptor = {
  description?: string | undefined
  displayName?: string | undefined
  labels?: LabelDescriptor[] | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  metadata?: MetricDescriptorMetadata | undefined
  metricKind?: 'METRIC_KIND_UNSPECIFIED' | 'GAUGE' | 'DELTA' | 'CUMULATIVE' | undefined
  monitoredResourceTypes?: string[] | undefined
  name?: string | undefined
  type?: string | undefined
  unit?: string | undefined
  valueType?:
    | 'VALUE_TYPE_UNSPECIFIED'
    | 'BOOL'
    | 'INT64'
    | 'DOUBLE'
    | 'STRING'
    | 'DISTRIBUTION'
    | 'MONEY'
    | undefined
}
type LogMetric = {
  bucketName?: string | undefined
  bucketOptions?: BucketOptions | undefined
  createTime?: string | undefined
  description?: string | undefined
  disabled?: boolean | undefined
  filter?: string | undefined
  labelExtractors?: { [x: string]: string } | undefined
  metricDescriptor?: MetricDescriptor | undefined
  name?: string | undefined
  updateTime?: string | undefined
  valueExtractor?: string | undefined
  version?: 'V2' | 'V1' | undefined
}
type LogView = {
  createTime?: string | undefined
  description?: string | undefined
  filter?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type CmekSettings = {
  kmsKeyName?: string | undefined
  kmsKeyVersionName?: string | undefined
  name?: string | undefined
  serviceAccountId?: string | undefined
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
type LogExclusion = {
  createTime?: string | undefined
  description?: string | undefined
  disabled?: boolean | undefined
  filter?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type DefaultSinkConfig = {
  exclusions?: LogExclusion[] | undefined
  filter?: string | undefined
  mode?: 'FILTER_WRITE_MODE_UNSPECIFIED' | 'APPEND' | 'OVERWRITE' | undefined
}
type Settings = {
  defaultSinkConfig?: DefaultSinkConfig | undefined
  disableDefaultSink?: boolean | undefined
  kmsKeyName?: string | undefined
  kmsServiceAccountId?: string | undefined
  loggingServiceAccountId?: string | undefined
  name?: string | undefined
  storageLocation?: string | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type UndeleteBucketRequest = { [x: string]: unknown }
type IndexConfig = {
  createTime?: string | undefined
  fieldPath?: string | undefined
  type?: 'INDEX_TYPE_UNSPECIFIED' | 'INDEX_TYPE_STRING' | 'INDEX_TYPE_INTEGER' | undefined
}
type LogBucket = {
  analyticsEnabled?: boolean | undefined
  cmekSettings?: CmekSettings | undefined
  createTime?: string | undefined
  description?: string | undefined
  indexConfigs?: IndexConfig[] | undefined
  lifecycleState?:
    | 'LIFECYCLE_STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'DELETE_REQUESTED'
    | 'UPDATING'
    | 'CREATING'
    | 'FAILED'
    | undefined
  locked?: boolean | undefined
  name?: string | undefined
  restrictedFields?: string[] | undefined
  retentionDays?: number | undefined
  updateTime?: string | undefined
}
type ListBucketsResponse = { buckets?: LogBucket[] | undefined; nextPageToken?: string | undefined }
type ListExclusionsResponse = {
  exclusions?: LogExclusion[] | undefined
  nextPageToken?: string | undefined
}
type BigQueryDataset = { datasetId?: string | undefined }
type Link = {
  bigqueryDataset?: BigQueryDataset | undefined
  createTime?: string | undefined
  description?: string | undefined
  lifecycleState?:
    | 'LIFECYCLE_STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'DELETE_REQUESTED'
    | 'UPDATING'
    | 'CREATING'
    | 'FAILED'
    | undefined
  name?: string | undefined
}
type ListLinksResponse = { links?: Link[] | undefined; nextPageToken?: string | undefined }
type ListLogsResponse = { logNames?: string[] | undefined; nextPageToken?: string | undefined }
type ListLogMetricsResponse = {
  metrics?: LogMetric[] | undefined
  nextPageToken?: string | undefined
}
type SummaryField = { field?: string | undefined }
type LoggingQuery = {
  filter?: string | undefined
  summaryFieldEnd?: number | undefined
  summaryFieldStart?: number | undefined
  summaryFields?: SummaryField[] | undefined
}
type OpsAnalyticsQuery = { sqlQueryText?: string | undefined }
type RecentQuery = {
  lastRunTime?: string | undefined
  loggingQuery?: LoggingQuery | undefined
  name?: string | undefined
  opsAnalyticsQuery?: OpsAnalyticsQuery | undefined
}
type ListRecentQueriesResponse = {
  nextPageToken?: string | undefined
  recentQueries?: RecentQuery[] | undefined
  unreachable?: string[] | undefined
}
type SavedQuery = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  loggingQuery?: LoggingQuery | undefined
  name?: string | undefined
  opsAnalyticsQuery?: OpsAnalyticsQuery | undefined
  updateTime?: string | undefined
  visibility?: 'VISIBILITY_UNSPECIFIED' | 'PRIVATE' | 'SHARED' | undefined
}
type ListSavedQueriesResponse = {
  nextPageToken?: string | undefined
  savedQueries?: SavedQuery[] | undefined
  unreachable?: string[] | undefined
}
type BigQueryOptions = {
  usePartitionedTables?: boolean | undefined
  usesTimestampColumnPartitioning?: boolean | undefined
}
type LogSink = {
  bigqueryOptions?: BigQueryOptions | undefined
  createTime?: string | undefined
  description?: string | undefined
  destination?: string | undefined
  disabled?: boolean | undefined
  exclusions?: LogExclusion[] | undefined
  filter?: string | undefined
  includeChildren?: boolean | undefined
  name?: string | undefined
  outputVersionFormat?: 'VERSION_FORMAT_UNSPECIFIED' | 'V2' | 'V1' | undefined
  updateTime?: string | undefined
  writerIdentity?: string | undefined
}
type ListSinksResponse = { nextPageToken?: string | undefined; sinks?: LogSink[] | undefined }
type ListViewsResponse = { nextPageToken?: string | undefined; views?: LogView[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/entries:copy': {
      $post: {
        input: {
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
        } & { json: CopyLogEntriesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/entries:list': {
      $post: {
        input: {
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
        } & { json: ListLogEntriesRequest }
        output: ListLogEntriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/entries:tail': {
      $post: {
        input: {
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
        } & { json: TailLogEntriesRequest }
        output: TailLogEntriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/entries:write': {
      $post: {
        input: {
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
        } & { json: WriteLogEntriesRequest }
        output: WriteLogEntriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/monitoredResourceDescriptors': {
      $get: {
        input: {
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
        output: ListMonitoredResourceDescriptorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:logName': {
      $delete: {
        input: { param: { logName: string } } & {
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
    }
  } & {
    '/v2/:metricName': {
      $delete: {
        input: { param: { metricName: string } } & {
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
        input: { param: { metricName: string } } & {
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
        output: LogMetric
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { metricName: string } } & {
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
        } & { json: LogMetric }
        output: LogMetric
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
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
        } & { json: LogView }
        output: LogView
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name/cmekSettings': {
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
        output: CmekSettings
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
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
        } & { json: CmekSettings }
        output: CmekSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name/locations': {
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
    '/v2/:name/operations': {
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
    '/v2/:name/settings': {
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
        output: Settings
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
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
        } & { json: Settings }
        output: Settings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:cancel': {
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
    '/v2/:name:undelete': {
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
        } & { json: UndeleteBucketRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:updateAsync': {
      $post: {
        input: { param: { name: string } } & {
          query: {
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
        } & { json: LogBucket }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/buckets': {
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
        output: ListBucketsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            bucketId?: string | undefined
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
        } & { json: LogBucket }
        output: LogBucket
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/buckets:createAsync': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            bucketId?: string | undefined
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
        } & { json: LogBucket }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/exclusions': {
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
        output: ListExclusionsResponse
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
        } & { json: LogExclusion }
        output: LogExclusion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/links': {
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
        output: ListLinksResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            linkId?: string | undefined
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
        } & { json: Link }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/logs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            resourceNames?: string[] | undefined
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
        output: ListLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/metrics': {
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
        output: ListLogMetricsResponse
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
        } & { json: LogMetric }
        output: LogMetric
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/recentQueries': {
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
        output: ListRecentQueriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/savedQueries': {
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
        output: ListSavedQueriesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            savedQueryId?: string | undefined
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
        } & { json: SavedQuery }
        output: SavedQuery
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/sinks': {
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
        output: ListSinksResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            customWriterIdentity?: string | undefined
            uniqueWriterIdentity?: boolean | undefined
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
        } & { json: LogSink }
        output: LogSink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/views': {
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
        output: ListViewsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            viewId?: string | undefined
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
        } & { json: LogView }
        output: LogView
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:sinkName': {
      $delete: {
        input: { param: { sinkName: string } } & {
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
        input: { param: { sinkName: string } } & {
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
        output: LogSink
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { sinkName: string } } & {
          query: {
            customWriterIdentity?: string | undefined
            uniqueWriterIdentity?: boolean | undefined
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
        } & { json: LogSink }
        output: LogSink
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { sinkName: string } } & {
          query: {
            customWriterIdentity?: string | undefined
            uniqueWriterIdentity?: boolean | undefined
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
        } & { json: LogSink }
        output: LogSink
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

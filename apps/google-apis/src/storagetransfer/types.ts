type GoogleServiceAccount = { accountEmail?: string | undefined; subjectId?: string | undefined }
type BandwidthLimit = { limitMbps?: string | undefined }
type AgentPool = {
  bandwidthLimit?: BandwidthLimit | undefined
  displayName?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'CREATED' | 'DELETING' | undefined
}
type ListAgentPoolsResponse = {
  agentPools?: AgentPool[] | undefined
  nextPageToken?: string | undefined
}
type EventStream = {
  eventStreamExpirationTime?: string | undefined
  eventStreamStartTime?: string | undefined
  name?: string | undefined
}
type LoggingConfig = {
  enableOnpremGcsTransferLogs?: boolean | undefined
  logActionStates?: ('LOGGABLE_ACTION_STATE_UNSPECIFIED' | 'SUCCEEDED' | 'FAILED')[] | undefined
  logActions?: ('LOGGABLE_ACTION_UNSPECIFIED' | 'FIND' | 'DELETE' | 'COPY')[] | undefined
}
type NotificationConfig = {
  eventTypes?:
    | (
        | 'EVENT_TYPE_UNSPECIFIED'
        | 'TRANSFER_OPERATION_SUCCESS'
        | 'TRANSFER_OPERATION_FAILED'
        | 'TRANSFER_OPERATION_ABORTED'
      )[]
    | undefined
  payloadFormat?: 'PAYLOAD_FORMAT_UNSPECIFIED' | 'NONE' | 'JSON' | undefined
  pubsubTopic?: string | undefined
}
type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type Schedule = {
  endTimeOfDay?: TimeOfDay | undefined
  repeatInterval?: string | undefined
  scheduleEndDate?: Date | undefined
  scheduleStartDate?: Date | undefined
  startTimeOfDay?: TimeOfDay | undefined
}
type S3CompatibleMetadata = {
  authMethod?:
    | 'AUTH_METHOD_UNSPECIFIED'
    | 'AUTH_METHOD_AWS_SIGNATURE_V4'
    | 'AUTH_METHOD_AWS_SIGNATURE_V2'
    | undefined
  listApi?: 'LIST_API_UNSPECIFIED' | 'LIST_OBJECTS_V2' | 'LIST_OBJECTS' | undefined
  protocol?:
    | 'NETWORK_PROTOCOL_UNSPECIFIED'
    | 'NETWORK_PROTOCOL_HTTPS'
    | 'NETWORK_PROTOCOL_HTTP'
    | undefined
  requestModel?:
    | 'REQUEST_MODEL_UNSPECIFIED'
    | 'REQUEST_MODEL_VIRTUAL_HOSTED_STYLE'
    | 'REQUEST_MODEL_PATH_STYLE'
    | undefined
}
type AwsS3CompatibleData = {
  bucketName?: string | undefined
  endpoint?: string | undefined
  path?: string | undefined
  region?: string | undefined
  s3Metadata?: S3CompatibleMetadata | undefined
}
type AwsAccessKey = { accessKeyId?: string | undefined; secretAccessKey?: string | undefined }
type AwsS3Data = {
  awsAccessKey?: AwsAccessKey | undefined
  bucketName?: string | undefined
  path?: string | undefined
  roleArn?: string | undefined
}
type AzureCredentials = { sasToken?: string | undefined }
type AzureBlobStorageData = {
  azureCredentials?: AzureCredentials | undefined
  container?: string | undefined
  path?: string | undefined
  storageAccount?: string | undefined
}
type GcsData = { bucketName?: string | undefined; path?: string | undefined }
type HttpData = { listUrl?: string | undefined }
type ObjectConditions = {
  excludePrefixes?: string[] | undefined
  includePrefixes?: string[] | undefined
  lastModifiedBefore?: string | undefined
  lastModifiedSince?: string | undefined
  maxTimeElapsedSinceLastModification?: string | undefined
  minTimeElapsedSinceLastModification?: string | undefined
}
type PosixFilesystem = { rootDirectory?: string | undefined }
type TransferManifest = { location?: string | undefined }
type MetadataOptions = {
  acl?: 'ACL_UNSPECIFIED' | 'ACL_DESTINATION_BUCKET_DEFAULT' | 'ACL_PRESERVE' | undefined
  gid?: 'GID_UNSPECIFIED' | 'GID_SKIP' | 'GID_NUMBER' | undefined
  kmsKey?:
    | 'KMS_KEY_UNSPECIFIED'
    | 'KMS_KEY_DESTINATION_BUCKET_DEFAULT'
    | 'KMS_KEY_PRESERVE'
    | undefined
  mode?: 'MODE_UNSPECIFIED' | 'MODE_SKIP' | 'MODE_PRESERVE' | undefined
  storageClass?:
    | 'STORAGE_CLASS_UNSPECIFIED'
    | 'STORAGE_CLASS_DESTINATION_BUCKET_DEFAULT'
    | 'STORAGE_CLASS_PRESERVE'
    | 'STORAGE_CLASS_STANDARD'
    | 'STORAGE_CLASS_NEARLINE'
    | 'STORAGE_CLASS_COLDLINE'
    | 'STORAGE_CLASS_ARCHIVE'
    | undefined
  symlink?: 'SYMLINK_UNSPECIFIED' | 'SYMLINK_SKIP' | 'SYMLINK_PRESERVE' | undefined
  temporaryHold?:
    | 'TEMPORARY_HOLD_UNSPECIFIED'
    | 'TEMPORARY_HOLD_SKIP'
    | 'TEMPORARY_HOLD_PRESERVE'
    | undefined
  timeCreated?:
    | 'TIME_CREATED_UNSPECIFIED'
    | 'TIME_CREATED_SKIP'
    | 'TIME_CREATED_PRESERVE_AS_CUSTOM_TIME'
    | undefined
  uid?: 'UID_UNSPECIFIED' | 'UID_SKIP' | 'UID_NUMBER' | undefined
}
type TransferOptions = {
  deleteObjectsFromSourceAfterTransfer?: boolean | undefined
  deleteObjectsUniqueInSink?: boolean | undefined
  metadataOptions?: MetadataOptions | undefined
  overwriteObjectsAlreadyExistingInSink?: boolean | undefined
  overwriteWhen?: 'OVERWRITE_WHEN_UNSPECIFIED' | 'DIFFERENT' | 'NEVER' | 'ALWAYS' | undefined
}
type TransferSpec = {
  awsS3CompatibleDataSource?: AwsS3CompatibleData | undefined
  awsS3DataSource?: AwsS3Data | undefined
  azureBlobStorageDataSource?: AzureBlobStorageData | undefined
  gcsDataSink?: GcsData | undefined
  gcsDataSource?: GcsData | undefined
  gcsIntermediateDataLocation?: GcsData | undefined
  httpDataSource?: HttpData | undefined
  objectConditions?: ObjectConditions | undefined
  posixDataSink?: PosixFilesystem | undefined
  posixDataSource?: PosixFilesystem | undefined
  sinkAgentPoolName?: string | undefined
  sourceAgentPoolName?: string | undefined
  transferManifest?: TransferManifest | undefined
  transferOptions?: TransferOptions | undefined
}
type TransferJob = {
  creationTime?: string | undefined
  deletionTime?: string | undefined
  description?: string | undefined
  eventStream?: EventStream | undefined
  lastModificationTime?: string | undefined
  latestOperationName?: string | undefined
  loggingConfig?: LoggingConfig | undefined
  name?: string | undefined
  notificationConfig?: NotificationConfig | undefined
  projectId?: string | undefined
  schedule?: Schedule | undefined
  status?: 'STATUS_UNSPECIFIED' | 'ENABLED' | 'DISABLED' | 'DELETED' | undefined
  transferSpec?: TransferSpec | undefined
}
type ListTransferJobsResponse = {
  nextPageToken?: string | undefined
  transferJobs?: TransferJob[] | undefined
}
type Empty = { [x: string]: unknown }
type UpdateTransferJobRequest = {
  projectId?: string | undefined
  transferJob?: TransferJob | undefined
  updateTransferJobFieldMask?: string | undefined
}
type RunTransferJobRequest = { projectId?: string | undefined }
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
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type PauseTransferOperationRequest = { [x: string]: unknown }
type ResumeTransferOperationRequest = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/googleServiceAccounts/:projectId': {
      $get: {
        input: { param: { projectId: string } } & {
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
        output: GoogleServiceAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/agentPools': {
      $get: {
        input: { param: { projectId: string } } & {
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
        output: ListAgentPoolsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string } } & {
          query: {
            agentPoolId?: string | undefined
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
        } & { json: AgentPool }
        output: AgentPool
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/transferJobs': {
      $get: {
        input: {
          query: {
            filter: string
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
        output: ListTransferJobsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: TransferJob }
        output: TransferJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:jobName': {
      $delete: {
        input: { param: { jobName: string } } & {
          query: {
            projectId: string
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
        input: { param: { jobName: string } } & {
          query: {
            projectId: string
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
        output: TransferJob
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { jobName: string } } & {
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
        } & { json: UpdateTransferJobRequest }
        output: TransferJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:jobName:run': {
      $post: {
        input: { param: { jobName: string } } & {
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
        } & { json: RunTransferJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
            filter: string
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
        } & { json: AgentPool }
        output: AgentPool
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
    '/v1/:name:pause': {
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
        } & { json: PauseTransferOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:resume': {
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
        } & { json: ResumeTransferOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

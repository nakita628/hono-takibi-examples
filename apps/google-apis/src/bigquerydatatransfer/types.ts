type Empty = { [x: string]: unknown }
type EmailPreferences = { enableFailureEmail?: boolean | undefined }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type TransferRun = {
  dataSourceId?: string | undefined
  destinationDatasetId?: string | undefined
  emailPreferences?: EmailPreferences | undefined
  endTime?: string | undefined
  errorStatus?: Status | undefined
  name?: string | undefined
  notificationPubsubTopic?: string | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
  runTime?: string | undefined
  schedule?: string | undefined
  scheduleTime?: string | undefined
  startTime?: string | undefined
  state?:
    | 'TRANSFER_STATE_UNSPECIFIED'
    | 'PENDING'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'CANCELLED'
    | undefined
  updateTime?: string | undefined
  userId?: string | undefined
}
type UserInfo = { email?: string | undefined }
type ScheduleOptions = {
  disableAutoScheduling?: boolean | undefined
  endTime?: string | undefined
  startTime?: string | undefined
}
type TransferConfig = {
  dataRefreshWindowDays?: number | undefined
  dataSourceId?: string | undefined
  datasetRegion?: string | undefined
  destinationDatasetId?: string | undefined
  disabled?: boolean | undefined
  displayName?: string | undefined
  emailPreferences?: EmailPreferences | undefined
  name?: string | undefined
  nextRunTime?: string | undefined
  notificationPubsubTopic?: string | undefined
  ownerInfo?: UserInfo | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
  schedule?: string | undefined
  scheduleOptions?: ScheduleOptions | undefined
  state?:
    | 'TRANSFER_STATE_UNSPECIFIED'
    | 'PENDING'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'CANCELLED'
    | undefined
  updateTime?: string | undefined
  userId?: string | undefined
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
type CheckValidCredsRequest = { [x: string]: unknown }
type CheckValidCredsResponse = { hasValidCreds?: boolean | undefined }
type EnrollDataSourcesRequest = { dataSourceIds?: string[] | undefined }
type DataSourceParameter = {
  allowedValues?: string[] | undefined
  deprecated?: boolean | undefined
  description?: string | undefined
  displayName?: string | undefined
  fields?: DataSourceParameter[] | undefined
  immutable?: boolean | undefined
  maxValue?: number | undefined
  minValue?: number | undefined
  paramId?: string | undefined
  recurse?: boolean | undefined
  repeated?: boolean | undefined
  required?: boolean | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'STRING'
    | 'INTEGER'
    | 'DOUBLE'
    | 'BOOLEAN'
    | 'RECORD'
    | 'PLUS_PAGE'
    | undefined
  validationDescription?: string | undefined
  validationHelpUrl?: string | undefined
  validationRegex?: string | undefined
}
type DataSource = {
  authorizationType?:
    | 'AUTHORIZATION_TYPE_UNSPECIFIED'
    | 'AUTHORIZATION_CODE'
    | 'GOOGLE_PLUS_AUTHORIZATION_CODE'
    | 'FIRST_PARTY_OAUTH'
    | undefined
  clientId?: string | undefined
  dataRefreshType?:
    | 'DATA_REFRESH_TYPE_UNSPECIFIED'
    | 'SLIDING_WINDOW'
    | 'CUSTOM_SLIDING_WINDOW'
    | undefined
  dataSourceId?: string | undefined
  defaultDataRefreshWindowDays?: number | undefined
  defaultSchedule?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  helpUrl?: string | undefined
  manualRunsDisabled?: boolean | undefined
  minimumScheduleInterval?: string | undefined
  name?: string | undefined
  parameters?: DataSourceParameter[] | undefined
  scopes?: string[] | undefined
  supportsCustomSchedule?: boolean | undefined
  supportsMultipleTransfers?: boolean | undefined
  transferType?: 'TRANSFER_TYPE_UNSPECIFIED' | 'BATCH' | 'STREAMING' | undefined
  updateDeadlineSeconds?: number | undefined
}
type ListDataSourcesResponse = {
  dataSources?: DataSource[] | undefined
  nextPageToken?: string | undefined
}
type ListTransferRunsResponse = {
  nextPageToken?: string | undefined
  transferRuns?: TransferRun[] | undefined
}
type ListTransferConfigsResponse = {
  nextPageToken?: string | undefined
  transferConfigs?: TransferConfig[] | undefined
}
type TransferMessage = {
  messageText?: string | undefined
  messageTime?: string | undefined
  severity?: 'MESSAGE_SEVERITY_UNSPECIFIED' | 'INFO' | 'WARNING' | 'ERROR' | undefined
}
type ListTransferLogsResponse = {
  nextPageToken?: string | undefined
  transferMessages?: TransferMessage[] | undefined
}
type ScheduleTransferRunsRequest = { endTime?: string | undefined; startTime?: string | undefined }
type ScheduleTransferRunsResponse = { runs?: TransferRun[] | undefined }
type TimeRange = { endTime?: string | undefined; startTime?: string | undefined }
type StartManualTransferRunsRequest = {
  requestedRunTime?: string | undefined
  requestedTimeRange?: TimeRange | undefined
}
type StartManualTransferRunsResponse = { runs?: TransferRun[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
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
        output: TransferRun
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            authorizationCode?: string | undefined
            serviceAccountName?: string | undefined
            updateMask?: string | undefined
            versionInfo?: string | undefined
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
        } & { json: TransferConfig }
        output: TransferConfig
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
    '/v1/:name:checkValidCreds': {
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
        } & { json: CheckValidCredsRequest }
        output: CheckValidCredsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:enrollDataSources': {
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
        } & { json: EnrollDataSourcesRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/dataSources': {
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
        output: ListDataSourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/runs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            runAttempt?: 'RUN_ATTEMPT_UNSPECIFIED' | 'LATEST' | undefined
            states?:
              | (
                  | 'TRANSFER_STATE_UNSPECIFIED'
                  | 'PENDING'
                  | 'RUNNING'
                  | 'SUCCEEDED'
                  | 'FAILED'
                  | 'CANCELLED'
                )[]
              | undefined
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
        output: ListTransferRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/transferConfigs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            dataSourceIds?: string[] | undefined
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
        output: ListTransferConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            authorizationCode?: string | undefined
            serviceAccountName?: string | undefined
            versionInfo?: string | undefined
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
        } & { json: TransferConfig }
        output: TransferConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/transferLogs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            messageTypes?:
              | ('MESSAGE_SEVERITY_UNSPECIFIED' | 'INFO' | 'WARNING' | 'ERROR')[]
              | undefined
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
        output: ListTransferLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:scheduleRuns': {
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
        } & { json: ScheduleTransferRunsRequest }
        output: ScheduleTransferRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:startManualRuns': {
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
        } & { json: StartManualTransferRunsRequest }
        output: StartManualTransferRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

type AgentDeviceId = { id?: string | undefined }
type QueryRequestPayload = { devices?: AgentDeviceId[] | undefined }
type QueryRequestInput = { payload?: QueryRequestPayload | undefined }
type QueryRequest = {
  agentUserId?: string | undefined
  inputs?: QueryRequestInput[] | undefined
  requestId?: string | undefined
}
type QueryResponsePayload = {
  devices?: { [x: string]: { [x: string]: { [x: string]: unknown } } } | undefined
}
type QueryResponse = { payload?: QueryResponsePayload | undefined; requestId?: string | undefined }
type ReportStateAndNotificationDevice = {
  notifications?: { [x: string]: { [x: string]: unknown } } | undefined
  states?: { [x: string]: { [x: string]: unknown } } | undefined
}
type StateAndNotificationPayload = { devices?: ReportStateAndNotificationDevice | undefined }
type ReportStateAndNotificationRequest = {
  agentUserId?: string | undefined
  eventId?: string | undefined
  followUpToken?: string | undefined
  payload?: StateAndNotificationPayload | undefined
  requestId?: string | undefined
}
type ReportStateAndNotificationResponse = { requestId?: string | undefined }
type RequestSyncDevicesRequest = { agentUserId?: string | undefined; async?: boolean | undefined }
type RequestSyncDevicesResponse = { [x: string]: unknown }
type SyncRequest = { agentUserId?: string | undefined; requestId?: string | undefined }
type DeviceInfo = {
  hwVersion?: string | undefined
  manufacturer?: string | undefined
  model?: string | undefined
  swVersion?: string | undefined
}
type DeviceNames = {
  defaultNames?: string[] | undefined
  name?: string | undefined
  nicknames?: string[] | undefined
}
type AgentOtherDeviceId = { agentId?: string | undefined; deviceId?: string | undefined }
type Device = {
  attributes?: { [x: string]: { [x: string]: unknown } } | undefined
  customData?: { [x: string]: { [x: string]: unknown } } | undefined
  deviceInfo?: DeviceInfo | undefined
  id?: string | undefined
  name?: DeviceNames | undefined
  notificationSupportedByAgent?: boolean | undefined
  otherDeviceIds?: AgentOtherDeviceId[] | undefined
  roomHint?: string | undefined
  structureHint?: string | undefined
  traits?: string[] | undefined
  type?: string | undefined
  willReportState?: boolean | undefined
}
type SyncResponsePayload = { agentUserId?: string | undefined; devices?: Device[] | undefined }
type SyncResponse = { payload?: SyncResponsePayload | undefined; requestId?: string | undefined }
type Empty = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/devices:query': {
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
        } & { json: QueryRequest }
        output: QueryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/devices:reportStateAndNotification': {
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
        } & { json: ReportStateAndNotificationRequest }
        output: ReportStateAndNotificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/devices:requestSync': {
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
        } & { json: RequestSyncDevicesRequest }
        output: RequestSyncDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/devices:sync': {
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
        } & { json: SyncRequest }
        output: SyncResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:agentUserId': {
      $delete: {
        input: { param: { agentUserId: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

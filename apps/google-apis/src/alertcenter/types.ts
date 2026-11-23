type AlertMetadata = {
  alertId?: string | undefined
  assignee?: string | undefined
  customerId?: string | undefined
  etag?: string | undefined
  severity?: string | undefined
  status?: string | undefined
  updateTime?: string | undefined
}
type Alert = {
  alertId?: string | undefined
  createTime?: string | undefined
  customerId?: string | undefined
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  deleted?: boolean | undefined
  endTime?: string | undefined
  etag?: string | undefined
  metadata?: AlertMetadata | undefined
  securityInvestigationToolLink?: string | undefined
  source?: string | undefined
  startTime?: string | undefined
  type?: string | undefined
  updateTime?: string | undefined
}
type ListAlertsResponse = { alerts?: Alert[] | undefined; nextPageToken?: string | undefined }
type Empty = { [x: string]: unknown }
type AlertFeedback = {
  alertId?: string | undefined
  createTime?: string | undefined
  customerId?: string | undefined
  email?: string | undefined
  feedbackId?: string | undefined
  type?:
    | 'ALERT_FEEDBACK_TYPE_UNSPECIFIED'
    | 'NOT_USEFUL'
    | 'SOMEWHAT_USEFUL'
    | 'VERY_USEFUL'
    | undefined
}
type ListAlertFeedbackResponse = { feedback?: AlertFeedback[] | undefined }
type UndeleteAlertRequest = { customerId?: string | undefined }
type BatchDeleteAlertsRequest = { alertId?: string[] | undefined; customerId?: string | undefined }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type BatchDeleteAlertsResponse = {
  failedAlertStatus?: { [x: string]: Status } | undefined
  successAlertIds?: string[] | undefined
}
type BatchUndeleteAlertsRequest = {
  alertId?: string[] | undefined
  customerId?: string | undefined
}
type BatchUndeleteAlertsResponse = {
  failedAlertStatus?: { [x: string]: Status } | undefined
  successAlertIds?: string[] | undefined
}
type CloudPubsubTopic = {
  payloadFormat?: 'PAYLOAD_FORMAT_UNSPECIFIED' | 'JSON' | undefined
  topicName?: string | undefined
}
type Notification = { cloudPubsubTopic?: CloudPubsubTopic | undefined }
type Settings = { notifications?: Notification[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/alerts': {
      $get: {
        input: {
          query: {
            customerId?: string | undefined
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
        output: ListAlertsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/alerts/:alertId': {
      $delete: {
        input: { param: { alertId: string } } & {
          query: {
            customerId?: string | undefined
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
        input: { param: { alertId: string } } & {
          query: {
            customerId?: string | undefined
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
        output: Alert
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/alerts/:alertId/feedback': {
      $get: {
        input: { param: { alertId: string } } & {
          query: {
            customerId?: string | undefined
            filter?: string | undefined
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
        output: ListAlertFeedbackResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { alertId: string } } & {
          query: {
            customerId?: string | undefined
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
        } & { json: AlertFeedback }
        output: AlertFeedback
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/alerts/:alertId/metadata': {
      $get: {
        input: { param: { alertId: string } } & {
          query: {
            customerId?: string | undefined
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
        output: AlertMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/alerts/:alertId:undelete': {
      $post: {
        input: { param: { alertId: string } } & {
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
        } & { json: UndeleteAlertRequest }
        output: Alert
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/alerts:batchDelete': {
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
        } & { json: BatchDeleteAlertsRequest }
        output: BatchDeleteAlertsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/alerts:batchUndelete': {
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
        } & { json: BatchUndeleteAlertsRequest }
        output: BatchUndeleteAlertsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/settings': {
      $get: {
        input: {
          query: {
            customerId?: string | undefined
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
        input: {
          query: {
            customerId?: string | undefined
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
  },
  '/'
>
export default routes

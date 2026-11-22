type GoogleCloudAdvisorynotificationsV1CsvCsvRow = { entries?: string[] | undefined }
type GoogleCloudAdvisorynotificationsV1Csv = {
  dataRows?: GoogleCloudAdvisorynotificationsV1CsvCsvRow[] | undefined
  headers?: string[] | undefined
}
type GoogleCloudAdvisorynotificationsV1Attachment = {
  csv?: GoogleCloudAdvisorynotificationsV1Csv | undefined
  displayName?: string | undefined
}
type GoogleCloudAdvisorynotificationsV1Text = {
  enText?: string | undefined
  localizationState?:
    | 'LOCALIZATION_STATE_UNSPECIFIED'
    | 'LOCALIZATION_STATE_NOT_APPLICABLE'
    | 'LOCALIZATION_STATE_PENDING'
    | 'LOCALIZATION_STATE_COMPLETED'
    | undefined
  localizedText?: string | undefined
}
type GoogleCloudAdvisorynotificationsV1MessageBody = {
  text?: GoogleCloudAdvisorynotificationsV1Text | undefined
}
type GoogleCloudAdvisorynotificationsV1Message = {
  attachments?: GoogleCloudAdvisorynotificationsV1Attachment[] | undefined
  body?: GoogleCloudAdvisorynotificationsV1MessageBody | undefined
  createTime?: string | undefined
  localizationTime?: string | undefined
}
type GoogleCloudAdvisorynotificationsV1Subject = {
  text?: GoogleCloudAdvisorynotificationsV1Text | undefined
}
type GoogleCloudAdvisorynotificationsV1Notification = {
  createTime?: string | undefined
  messages?: GoogleCloudAdvisorynotificationsV1Message[] | undefined
  name?: string | undefined
  notificationType?:
    | 'NOTIFICATION_TYPE_UNSPECIFIED'
    | 'NOTIFICATION_TYPE_SECURITY_PRIVACY_ADVISORY'
    | 'NOTIFICATION_TYPE_SENSITIVE_ACTIONS'
    | undefined
  subject?: GoogleCloudAdvisorynotificationsV1Subject | undefined
}
type GoogleCloudAdvisorynotificationsV1ListNotificationsResponse = {
  nextPageToken?: string | undefined
  notifications?: GoogleCloudAdvisorynotificationsV1Notification[] | undefined
  totalSize?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            languageCode?: string | undefined
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
        output: GoogleCloudAdvisorynotificationsV1Notification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/notifications': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'NOTIFICATION_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: GoogleCloudAdvisorynotificationsV1ListNotificationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

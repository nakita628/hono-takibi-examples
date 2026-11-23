type UrlNotification = {
  notifyTime?: string | undefined
  type?: 'URL_NOTIFICATION_TYPE_UNSPECIFIED' | 'URL_UPDATED' | 'URL_DELETED' | undefined
  url?: string | undefined
}
type UrlNotificationMetadata = {
  latestRemove?: UrlNotification | undefined
  latestUpdate?: UrlNotification | undefined
  url?: string | undefined
}
type PublishUrlNotificationResponse = {
  urlNotificationMetadata?: UrlNotificationMetadata | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3/urlNotifications/metadata': {
      $get: {
        input: {
          query: {
            url?: string | undefined
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
        output: UrlNotificationMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/urlNotifications:publish': {
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
        } & { json: UrlNotification }
        output: PublishUrlNotificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

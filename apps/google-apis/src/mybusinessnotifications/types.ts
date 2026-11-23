type NotificationSetting = {
  name?: string | undefined
  notificationTypes?:
    | (
        | 'NOTIFICATION_TYPE_UNSPECIFIED'
        | 'GOOGLE_UPDATE'
        | 'NEW_REVIEW'
        | 'UPDATED_REVIEW'
        | 'NEW_CUSTOMER_MEDIA'
        | 'NEW_QUESTION'
        | 'UPDATED_QUESTION'
        | 'NEW_ANSWER'
        | 'UPDATED_ANSWER'
        | 'DUPLICATE_LOCATION'
        | 'LOSS_OF_VOICE_OF_MERCHANT'
        | 'VOICE_OF_MERCHANT_UPDATED'
      )[]
    | undefined
  pubsubTopic?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
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
        output: NotificationSetting
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
        } & { json: NotificationSetting }
        output: NotificationSetting
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

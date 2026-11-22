type AndroidFcmOptions = { analyticsLabel?: string | undefined }
type Color = {
  alpha?: number | undefined
  blue?: number | undefined
  green?: number | undefined
  red?: number | undefined
}
type LightSettings = {
  color?: Color | undefined
  lightOffDuration?: string | undefined
  lightOnDuration?: string | undefined
}
type AndroidNotification = {
  body?: string | undefined
  bodyLocArgs?: string[] | undefined
  bodyLocKey?: string | undefined
  bypassProxyNotification?: boolean | undefined
  channelId?: string | undefined
  clickAction?: string | undefined
  color?: string | undefined
  defaultLightSettings?: boolean | undefined
  defaultSound?: boolean | undefined
  defaultVibrateTimings?: boolean | undefined
  eventTime?: string | undefined
  icon?: string | undefined
  image?: string | undefined
  lightSettings?: LightSettings | undefined
  localOnly?: boolean | undefined
  notificationCount?: number | undefined
  notificationPriority?:
    | 'PRIORITY_UNSPECIFIED'
    | 'PRIORITY_MIN'
    | 'PRIORITY_LOW'
    | 'PRIORITY_DEFAULT'
    | 'PRIORITY_HIGH'
    | 'PRIORITY_MAX'
    | undefined
  sound?: string | undefined
  sticky?: boolean | undefined
  tag?: string | undefined
  ticker?: string | undefined
  title?: string | undefined
  titleLocArgs?: string[] | undefined
  titleLocKey?: string | undefined
  vibrateTimings?: string[] | undefined
  visibility?: 'VISIBILITY_UNSPECIFIED' | 'PRIVATE' | 'PUBLIC' | 'SECRET' | undefined
}
type AndroidConfig = {
  collapseKey?: string | undefined
  data?: { [x: string]: string } | undefined
  directBootOk?: boolean | undefined
  fcmOptions?: AndroidFcmOptions | undefined
  notification?: AndroidNotification | undefined
  priority?: 'NORMAL' | 'HIGH' | undefined
  restrictedPackageName?: string | undefined
  ttl?: string | undefined
}
type ApnsFcmOptions = { analyticsLabel?: string | undefined; image?: string | undefined }
type ApnsConfig = {
  fcmOptions?: ApnsFcmOptions | undefined
  headers?: { [x: string]: string } | undefined
  payload?: { [x: string]: { [x: string]: unknown } } | undefined
}
type FcmOptions = { analyticsLabel?: string | undefined }
type Notification = {
  body?: string | undefined
  image?: string | undefined
  title?: string | undefined
}
type WebpushFcmOptions = { analyticsLabel?: string | undefined; link?: string | undefined }
type WebpushConfig = {
  data?: { [x: string]: string } | undefined
  fcmOptions?: WebpushFcmOptions | undefined
  headers?: { [x: string]: string } | undefined
  notification?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Message = {
  android?: AndroidConfig | undefined
  apns?: ApnsConfig | undefined
  condition?: string | undefined
  data?: { [x: string]: string } | undefined
  fcmOptions?: FcmOptions | undefined
  name?: string | undefined
  notification?: Notification | undefined
  token?: string | undefined
  topic?: string | undefined
  webpush?: WebpushConfig | undefined
}
type SendMessageRequest = { message?: Message | undefined; validateOnly?: boolean | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:parent/messages:send': {
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
        } & { json: SendMessageRequest }
        output: Message
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

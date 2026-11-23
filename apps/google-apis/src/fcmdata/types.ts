type GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents = {
  delayedDeviceDoze?: number | undefined
  delayedDeviceOffline?: number | undefined
  delayedMessageThrottled?: number | undefined
  delayedUserStopped?: number | undefined
  deliveredNoDelay?: number | undefined
}
type GoogleFirebaseFcmDataV1beta1MessageInsightPercents = { priorityLowered?: number | undefined }
type GoogleFirebaseFcmDataV1beta1MessageOutcomePercents = {
  delivered?: number | undefined
  droppedAppForceStopped?: number | undefined
  droppedDeviceInactive?: number | undefined
  droppedTooManyPendingMessages?: number | undefined
  pending?: number | undefined
}
type GoogleFirebaseFcmDataV1beta1Data = {
  countMessagesAccepted?: string | undefined
  deliveryPerformancePercents?: GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents | undefined
  messageInsightPercents?: GoogleFirebaseFcmDataV1beta1MessageInsightPercents | undefined
  messageOutcomePercents?: GoogleFirebaseFcmDataV1beta1MessageOutcomePercents | undefined
}
type GoogleTypeDate = {
  day?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type GoogleFirebaseFcmDataV1beta1AndroidDeliveryData = {
  analyticsLabel?: string | undefined
  appId?: string | undefined
  data?: GoogleFirebaseFcmDataV1beta1Data | undefined
  date?: GoogleTypeDate | undefined
}
type GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse = {
  androidDeliveryData?: GoogleFirebaseFcmDataV1beta1AndroidDeliveryData[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:parent/deliveryData': {
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
        output: GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes

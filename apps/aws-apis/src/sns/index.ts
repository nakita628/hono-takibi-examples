import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAddPermissionHandler,
  actionCheckIfPhoneNumberIsOptedOutHandler,
  actionConfirmSubscriptionHandler,
  actionCreatePlatformApplicationHandler,
  actionCreatePlatformEndpointHandler,
  actionCreateSmsSandboxPhoneNumberHandler,
  actionCreateTopicHandler,
  actionDeleteEndpointHandler,
  actionDeletePlatformApplicationHandler,
  actionDeleteSmsSandboxPhoneNumberHandler,
  actionDeleteTopicHandler,
  actionGetDataProtectionPolicyHandler,
  actionGetEndpointAttributesHandler,
  actionGetPlatformApplicationAttributesHandler,
  actionGetSmsAttributesHandler,
  actionGetSmsSandboxAccountStatusHandler,
  actionGetSubscriptionAttributesHandler,
  actionGetTopicAttributesHandler,
  actionListEndpointsByPlatformApplicationHandler,
  actionListOriginationNumbersHandler,
  actionListPhoneNumbersOptedOutHandler,
  actionListPlatformApplicationsHandler,
  actionListSmsSandboxPhoneNumbersHandler,
  actionListSubscriptionsByTopicHandler,
  actionListSubscriptionsHandler,
  actionListTagsForResourceHandler,
  actionListTopicsHandler,
  actionOptInPhoneNumberHandler,
  actionPublishBatchHandler,
  actionPublishHandler,
  actionPutDataProtectionPolicyHandler,
  actionRemovePermissionHandler,
  actionSetEndpointAttributesHandler,
  actionSetPlatformApplicationAttributesHandler,
  actionSetSmsAttributesHandler,
  actionSetSubscriptionAttributesHandler,
  actionSetTopicAttributesHandler,
  actionSubscribeHandler,
  actionTagResourceHandler,
  actionUnsubscribeHandler,
  actionUntagResourceHandler,
  actionVerifySmsSandboxPhoneNumberHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAddPermissionHandler)
  .route('/', actionCheckIfPhoneNumberIsOptedOutHandler)
  .route('/', actionConfirmSubscriptionHandler)
  .route('/', actionCreatePlatformApplicationHandler)
  .route('/', actionCreatePlatformEndpointHandler)
  .route('/', actionCreateSmsSandboxPhoneNumberHandler)
  .route('/', actionCreateTopicHandler)
  .route('/', actionDeleteEndpointHandler)
  .route('/', actionDeletePlatformApplicationHandler)
  .route('/', actionDeleteSmsSandboxPhoneNumberHandler)
  .route('/', actionDeleteTopicHandler)
  .route('/', actionGetDataProtectionPolicyHandler)
  .route('/', actionGetEndpointAttributesHandler)
  .route('/', actionGetPlatformApplicationAttributesHandler)
  .route('/', actionGetSmsAttributesHandler)
  .route('/', actionGetSmsSandboxAccountStatusHandler)
  .route('/', actionGetSubscriptionAttributesHandler)
  .route('/', actionGetTopicAttributesHandler)
  .route('/', actionListEndpointsByPlatformApplicationHandler)
  .route('/', actionListOriginationNumbersHandler)
  .route('/', actionListPhoneNumbersOptedOutHandler)
  .route('/', actionListPlatformApplicationsHandler)
  .route('/', actionListSmsSandboxPhoneNumbersHandler)
  .route('/', actionListSubscriptionsHandler)
  .route('/', actionListSubscriptionsByTopicHandler)
  .route('/', actionListTagsForResourceHandler)
  .route('/', actionListTopicsHandler)
  .route('/', actionOptInPhoneNumberHandler)
  .route('/', actionPublishHandler)
  .route('/', actionPublishBatchHandler)
  .route('/', actionPutDataProtectionPolicyHandler)
  .route('/', actionRemovePermissionHandler)
  .route('/', actionSetEndpointAttributesHandler)
  .route('/', actionSetPlatformApplicationAttributesHandler)
  .route('/', actionSetSmsAttributesHandler)
  .route('/', actionSetSubscriptionAttributesHandler)
  .route('/', actionSetTopicAttributesHandler)
  .route('/', actionSubscribeHandler)
  .route('/', actionTagResourceHandler)
  .route('/', actionUnsubscribeHandler)
  .route('/', actionUntagResourceHandler)
  .route('/', actionVerifySmsSandboxPhoneNumberHandler)

export default app

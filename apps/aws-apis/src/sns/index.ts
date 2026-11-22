import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAddPermissionHandler,
  ActionCheckIfPhoneNumberIsOptedOutHandler,
  ActionConfirmSubscriptionHandler,
  ActionCreatePlatformApplicationHandler,
  ActionCreatePlatformEndpointHandler,
  ActionCreateSMSSandboxPhoneNumberHandler,
  ActionCreateTopicHandler,
  ActionDeleteEndpointHandler,
  ActionDeletePlatformApplicationHandler,
  ActionDeleteSMSSandboxPhoneNumberHandler,
  ActionDeleteTopicHandler,
  ActionGetDataProtectionPolicyHandler,
  ActionGetEndpointAttributesHandler,
  ActionGetPlatformApplicationAttributesHandler,
  ActionGetSMSAttributesHandler,
  ActionGetSMSSandboxAccountStatusHandler,
  ActionGetSubscriptionAttributesHandler,
  ActionGetTopicAttributesHandler,
  ActionListEndpointsByPlatformApplicationHandler,
  ActionListOriginationNumbersHandler,
  ActionListPhoneNumbersOptedOutHandler,
  ActionListPlatformApplicationsHandler,
  ActionListSMSSandboxPhoneNumbersHandler,
  ActionListSubscriptionsByTopicHandler,
  ActionListSubscriptionsHandler,
  ActionListTagsForResourceHandler,
  ActionListTopicsHandler,
  ActionOptInPhoneNumberHandler,
  ActionPublishBatchHandler,
  ActionPublishHandler,
  ActionPutDataProtectionPolicyHandler,
  ActionRemovePermissionHandler,
  ActionSetEndpointAttributesHandler,
  ActionSetPlatformApplicationAttributesHandler,
  ActionSetSMSAttributesHandler,
  ActionSetSubscriptionAttributesHandler,
  ActionSetTopicAttributesHandler,
  ActionSubscribeHandler,
  ActionTagResourceHandler,
  ActionUnsubscribeHandler,
  ActionUntagResourceHandler,
  ActionVerifySMSSandboxPhoneNumberHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAddPermissionHandler)
  .route('/', ActionCheckIfPhoneNumberIsOptedOutHandler)
  .route('/', ActionConfirmSubscriptionHandler)
  .route('/', ActionCreatePlatformApplicationHandler)
  .route('/', ActionCreatePlatformEndpointHandler)
  .route('/', ActionCreateSMSSandboxPhoneNumberHandler)
  .route('/', ActionCreateTopicHandler)
  .route('/', ActionDeleteEndpointHandler)
  .route('/', ActionDeletePlatformApplicationHandler)
  .route('/', ActionDeleteSMSSandboxPhoneNumberHandler)
  .route('/', ActionDeleteTopicHandler)
  .route('/', ActionGetDataProtectionPolicyHandler)
  .route('/', ActionGetEndpointAttributesHandler)
  .route('/', ActionGetPlatformApplicationAttributesHandler)
  .route('/', ActionGetSMSAttributesHandler)
  .route('/', ActionGetSMSSandboxAccountStatusHandler)
  .route('/', ActionGetSubscriptionAttributesHandler)
  .route('/', ActionGetTopicAttributesHandler)
  .route('/', ActionListEndpointsByPlatformApplicationHandler)
  .route('/', ActionListOriginationNumbersHandler)
  .route('/', ActionListPhoneNumbersOptedOutHandler)
  .route('/', ActionListPlatformApplicationsHandler)
  .route('/', ActionListSMSSandboxPhoneNumbersHandler)
  .route('/', ActionListSubscriptionsHandler)
  .route('/', ActionListSubscriptionsByTopicHandler)
  .route('/', ActionListTagsForResourceHandler)
  .route('/', ActionListTopicsHandler)
  .route('/', ActionOptInPhoneNumberHandler)
  .route('/', ActionPublishHandler)
  .route('/', ActionPublishBatchHandler)
  .route('/', ActionPutDataProtectionPolicyHandler)
  .route('/', ActionRemovePermissionHandler)
  .route('/', ActionSetEndpointAttributesHandler)
  .route('/', ActionSetPlatformApplicationAttributesHandler)
  .route('/', ActionSetSMSAttributesHandler)
  .route('/', ActionSetSubscriptionAttributesHandler)
  .route('/', ActionSetTopicAttributesHandler)
  .route('/', ActionSubscribeHandler)
  .route('/', ActionTagResourceHandler)
  .route('/', ActionUnsubscribeHandler)
  .route('/', ActionUntagResourceHandler)
  .route('/', ActionVerifySMSSandboxPhoneNumberHandler)

export default app

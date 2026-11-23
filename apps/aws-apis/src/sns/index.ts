import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddPermissionRoute,
  getActionCheckIfPhoneNumberIsOptedOutRoute,
  getActionConfirmSubscriptionRoute,
  getActionCreatePlatformApplicationRoute,
  getActionCreatePlatformEndpointRoute,
  getActionCreateSMSSandboxPhoneNumberRoute,
  getActionCreateTopicRoute,
  getActionDeleteEndpointRoute,
  getActionDeletePlatformApplicationRoute,
  getActionDeleteSMSSandboxPhoneNumberRoute,
  getActionDeleteTopicRoute,
  getActionGetDataProtectionPolicyRoute,
  getActionGetEndpointAttributesRoute,
  getActionGetPlatformApplicationAttributesRoute,
  getActionGetSMSAttributesRoute,
  getActionGetSMSSandboxAccountStatusRoute,
  getActionGetSubscriptionAttributesRoute,
  getActionGetTopicAttributesRoute,
  getActionListEndpointsByPlatformApplicationRoute,
  getActionListOriginationNumbersRoute,
  getActionListPhoneNumbersOptedOutRoute,
  getActionListPlatformApplicationsRoute,
  getActionListSMSSandboxPhoneNumbersRoute,
  getActionListSubscriptionsByTopicRoute,
  getActionListSubscriptionsRoute,
  getActionListTagsForResourceRoute,
  getActionListTopicsRoute,
  getActionOptInPhoneNumberRoute,
  getActionPublishBatchRoute,
  getActionPublishRoute,
  getActionPutDataProtectionPolicyRoute,
  getActionRemovePermissionRoute,
  getActionSetEndpointAttributesRoute,
  getActionSetPlatformApplicationAttributesRoute,
  getActionSetSMSAttributesRoute,
  getActionSetSubscriptionAttributesRoute,
  getActionSetTopicAttributesRoute,
  getActionSubscribeRoute,
  getActionTagResourceRoute,
  getActionUnsubscribeRoute,
  getActionUntagResourceRoute,
  getActionVerifySMSSandboxPhoneNumberRoute,
  postActionAddPermissionRoute,
  postActionCheckIfPhoneNumberIsOptedOutRoute,
  postActionConfirmSubscriptionRoute,
  postActionCreatePlatformApplicationRoute,
  postActionCreatePlatformEndpointRoute,
  postActionCreateSMSSandboxPhoneNumberRoute,
  postActionCreateTopicRoute,
  postActionDeleteEndpointRoute,
  postActionDeletePlatformApplicationRoute,
  postActionDeleteSMSSandboxPhoneNumberRoute,
  postActionDeleteTopicRoute,
  postActionGetDataProtectionPolicyRoute,
  postActionGetEndpointAttributesRoute,
  postActionGetPlatformApplicationAttributesRoute,
  postActionGetSMSAttributesRoute,
  postActionGetSMSSandboxAccountStatusRoute,
  postActionGetSubscriptionAttributesRoute,
  postActionGetTopicAttributesRoute,
  postActionListEndpointsByPlatformApplicationRoute,
  postActionListOriginationNumbersRoute,
  postActionListPhoneNumbersOptedOutRoute,
  postActionListPlatformApplicationsRoute,
  postActionListSMSSandboxPhoneNumbersRoute,
  postActionListSubscriptionsByTopicRoute,
  postActionListSubscriptionsRoute,
  postActionListTagsForResourceRoute,
  postActionListTopicsRoute,
  postActionOptInPhoneNumberRoute,
  postActionPublishBatchRoute,
  postActionPublishRoute,
  postActionPutDataProtectionPolicyRoute,
  postActionRemovePermissionRoute,
  postActionSetEndpointAttributesRoute,
  postActionSetPlatformApplicationAttributesRoute,
  postActionSetSMSAttributesRoute,
  postActionSetSubscriptionAttributesRoute,
  postActionSetTopicAttributesRoute,
  postActionSubscribeRoute,
  postActionTagResourceRoute,
  postActionUnsubscribeRoute,
  postActionUntagResourceRoute,
  postActionVerifySMSSandboxPhoneNumberRoute,
} from './routes'
import {
  getActionAddPermissionRouteHandler,
  getActionCheckIfPhoneNumberIsOptedOutRouteHandler,
  getActionConfirmSubscriptionRouteHandler,
  getActionCreatePlatformApplicationRouteHandler,
  getActionCreatePlatformEndpointRouteHandler,
  getActionCreateSMSSandboxPhoneNumberRouteHandler,
  getActionCreateTopicRouteHandler,
  getActionDeleteEndpointRouteHandler,
  getActionDeletePlatformApplicationRouteHandler,
  getActionDeleteSMSSandboxPhoneNumberRouteHandler,
  getActionDeleteTopicRouteHandler,
  getActionGetDataProtectionPolicyRouteHandler,
  getActionGetEndpointAttributesRouteHandler,
  getActionGetPlatformApplicationAttributesRouteHandler,
  getActionGetSMSAttributesRouteHandler,
  getActionGetSMSSandboxAccountStatusRouteHandler,
  getActionGetSubscriptionAttributesRouteHandler,
  getActionGetTopicAttributesRouteHandler,
  getActionListEndpointsByPlatformApplicationRouteHandler,
  getActionListOriginationNumbersRouteHandler,
  getActionListPhoneNumbersOptedOutRouteHandler,
  getActionListPlatformApplicationsRouteHandler,
  getActionListSMSSandboxPhoneNumbersRouteHandler,
  getActionListSubscriptionsByTopicRouteHandler,
  getActionListSubscriptionsRouteHandler,
  getActionListTagsForResourceRouteHandler,
  getActionListTopicsRouteHandler,
  getActionOptInPhoneNumberRouteHandler,
  getActionPublishBatchRouteHandler,
  getActionPublishRouteHandler,
  getActionPutDataProtectionPolicyRouteHandler,
  getActionRemovePermissionRouteHandler,
  getActionSetEndpointAttributesRouteHandler,
  getActionSetPlatformApplicationAttributesRouteHandler,
  getActionSetSMSAttributesRouteHandler,
  getActionSetSubscriptionAttributesRouteHandler,
  getActionSetTopicAttributesRouteHandler,
  getActionSubscribeRouteHandler,
  getActionTagResourceRouteHandler,
  getActionUnsubscribeRouteHandler,
  getActionUntagResourceRouteHandler,
  getActionVerifySMSSandboxPhoneNumberRouteHandler,
  postActionAddPermissionRouteHandler,
  postActionCheckIfPhoneNumberIsOptedOutRouteHandler,
  postActionConfirmSubscriptionRouteHandler,
  postActionCreatePlatformApplicationRouteHandler,
  postActionCreatePlatformEndpointRouteHandler,
  postActionCreateSMSSandboxPhoneNumberRouteHandler,
  postActionCreateTopicRouteHandler,
  postActionDeleteEndpointRouteHandler,
  postActionDeletePlatformApplicationRouteHandler,
  postActionDeleteSMSSandboxPhoneNumberRouteHandler,
  postActionDeleteTopicRouteHandler,
  postActionGetDataProtectionPolicyRouteHandler,
  postActionGetEndpointAttributesRouteHandler,
  postActionGetPlatformApplicationAttributesRouteHandler,
  postActionGetSMSAttributesRouteHandler,
  postActionGetSMSSandboxAccountStatusRouteHandler,
  postActionGetSubscriptionAttributesRouteHandler,
  postActionGetTopicAttributesRouteHandler,
  postActionListEndpointsByPlatformApplicationRouteHandler,
  postActionListOriginationNumbersRouteHandler,
  postActionListPhoneNumbersOptedOutRouteHandler,
  postActionListPlatformApplicationsRouteHandler,
  postActionListSMSSandboxPhoneNumbersRouteHandler,
  postActionListSubscriptionsByTopicRouteHandler,
  postActionListSubscriptionsRouteHandler,
  postActionListTagsForResourceRouteHandler,
  postActionListTopicsRouteHandler,
  postActionOptInPhoneNumberRouteHandler,
  postActionPublishBatchRouteHandler,
  postActionPublishRouteHandler,
  postActionPutDataProtectionPolicyRouteHandler,
  postActionRemovePermissionRouteHandler,
  postActionSetEndpointAttributesRouteHandler,
  postActionSetPlatformApplicationAttributesRouteHandler,
  postActionSetSMSAttributesRouteHandler,
  postActionSetSubscriptionAttributesRouteHandler,
  postActionSetTopicAttributesRouteHandler,
  postActionSubscribeRouteHandler,
  postActionTagResourceRouteHandler,
  postActionUnsubscribeRouteHandler,
  postActionUntagResourceRouteHandler,
  postActionVerifySMSSandboxPhoneNumberRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionAddPermissionRoute, getActionAddPermissionRouteHandler)
  .openapi(postActionAddPermissionRoute, postActionAddPermissionRouteHandler)
  .openapi(
    getActionCheckIfPhoneNumberIsOptedOutRoute,
    getActionCheckIfPhoneNumberIsOptedOutRouteHandler,
  )
  .openapi(
    postActionCheckIfPhoneNumberIsOptedOutRoute,
    postActionCheckIfPhoneNumberIsOptedOutRouteHandler,
  )
  .openapi(getActionConfirmSubscriptionRoute, getActionConfirmSubscriptionRouteHandler)
  .openapi(postActionConfirmSubscriptionRoute, postActionConfirmSubscriptionRouteHandler)
  .openapi(getActionCreatePlatformApplicationRoute, getActionCreatePlatformApplicationRouteHandler)
  .openapi(
    postActionCreatePlatformApplicationRoute,
    postActionCreatePlatformApplicationRouteHandler,
  )
  .openapi(getActionCreatePlatformEndpointRoute, getActionCreatePlatformEndpointRouteHandler)
  .openapi(postActionCreatePlatformEndpointRoute, postActionCreatePlatformEndpointRouteHandler)
  .openapi(
    getActionCreateSMSSandboxPhoneNumberRoute,
    getActionCreateSMSSandboxPhoneNumberRouteHandler,
  )
  .openapi(
    postActionCreateSMSSandboxPhoneNumberRoute,
    postActionCreateSMSSandboxPhoneNumberRouteHandler,
  )
  .openapi(getActionCreateTopicRoute, getActionCreateTopicRouteHandler)
  .openapi(postActionCreateTopicRoute, postActionCreateTopicRouteHandler)
  .openapi(getActionDeleteEndpointRoute, getActionDeleteEndpointRouteHandler)
  .openapi(postActionDeleteEndpointRoute, postActionDeleteEndpointRouteHandler)
  .openapi(getActionDeletePlatformApplicationRoute, getActionDeletePlatformApplicationRouteHandler)
  .openapi(
    postActionDeletePlatformApplicationRoute,
    postActionDeletePlatformApplicationRouteHandler,
  )
  .openapi(
    getActionDeleteSMSSandboxPhoneNumberRoute,
    getActionDeleteSMSSandboxPhoneNumberRouteHandler,
  )
  .openapi(
    postActionDeleteSMSSandboxPhoneNumberRoute,
    postActionDeleteSMSSandboxPhoneNumberRouteHandler,
  )
  .openapi(getActionDeleteTopicRoute, getActionDeleteTopicRouteHandler)
  .openapi(postActionDeleteTopicRoute, postActionDeleteTopicRouteHandler)
  .openapi(getActionGetDataProtectionPolicyRoute, getActionGetDataProtectionPolicyRouteHandler)
  .openapi(postActionGetDataProtectionPolicyRoute, postActionGetDataProtectionPolicyRouteHandler)
  .openapi(getActionGetEndpointAttributesRoute, getActionGetEndpointAttributesRouteHandler)
  .openapi(postActionGetEndpointAttributesRoute, postActionGetEndpointAttributesRouteHandler)
  .openapi(
    getActionGetPlatformApplicationAttributesRoute,
    getActionGetPlatformApplicationAttributesRouteHandler,
  )
  .openapi(
    postActionGetPlatformApplicationAttributesRoute,
    postActionGetPlatformApplicationAttributesRouteHandler,
  )
  .openapi(getActionGetSMSAttributesRoute, getActionGetSMSAttributesRouteHandler)
  .openapi(postActionGetSMSAttributesRoute, postActionGetSMSAttributesRouteHandler)
  .openapi(
    getActionGetSMSSandboxAccountStatusRoute,
    getActionGetSMSSandboxAccountStatusRouteHandler,
  )
  .openapi(
    postActionGetSMSSandboxAccountStatusRoute,
    postActionGetSMSSandboxAccountStatusRouteHandler,
  )
  .openapi(getActionGetSubscriptionAttributesRoute, getActionGetSubscriptionAttributesRouteHandler)
  .openapi(
    postActionGetSubscriptionAttributesRoute,
    postActionGetSubscriptionAttributesRouteHandler,
  )
  .openapi(getActionGetTopicAttributesRoute, getActionGetTopicAttributesRouteHandler)
  .openapi(postActionGetTopicAttributesRoute, postActionGetTopicAttributesRouteHandler)
  .openapi(
    getActionListEndpointsByPlatformApplicationRoute,
    getActionListEndpointsByPlatformApplicationRouteHandler,
  )
  .openapi(
    postActionListEndpointsByPlatformApplicationRoute,
    postActionListEndpointsByPlatformApplicationRouteHandler,
  )
  .openapi(getActionListOriginationNumbersRoute, getActionListOriginationNumbersRouteHandler)
  .openapi(postActionListOriginationNumbersRoute, postActionListOriginationNumbersRouteHandler)
  .openapi(getActionListPhoneNumbersOptedOutRoute, getActionListPhoneNumbersOptedOutRouteHandler)
  .openapi(postActionListPhoneNumbersOptedOutRoute, postActionListPhoneNumbersOptedOutRouteHandler)
  .openapi(getActionListPlatformApplicationsRoute, getActionListPlatformApplicationsRouteHandler)
  .openapi(postActionListPlatformApplicationsRoute, postActionListPlatformApplicationsRouteHandler)
  .openapi(
    getActionListSMSSandboxPhoneNumbersRoute,
    getActionListSMSSandboxPhoneNumbersRouteHandler,
  )
  .openapi(
    postActionListSMSSandboxPhoneNumbersRoute,
    postActionListSMSSandboxPhoneNumbersRouteHandler,
  )
  .openapi(getActionListSubscriptionsRoute, getActionListSubscriptionsRouteHandler)
  .openapi(postActionListSubscriptionsRoute, postActionListSubscriptionsRouteHandler)
  .openapi(getActionListSubscriptionsByTopicRoute, getActionListSubscriptionsByTopicRouteHandler)
  .openapi(postActionListSubscriptionsByTopicRoute, postActionListSubscriptionsByTopicRouteHandler)
  .openapi(getActionListTagsForResourceRoute, getActionListTagsForResourceRouteHandler)
  .openapi(postActionListTagsForResourceRoute, postActionListTagsForResourceRouteHandler)
  .openapi(getActionListTopicsRoute, getActionListTopicsRouteHandler)
  .openapi(postActionListTopicsRoute, postActionListTopicsRouteHandler)
  .openapi(getActionOptInPhoneNumberRoute, getActionOptInPhoneNumberRouteHandler)
  .openapi(postActionOptInPhoneNumberRoute, postActionOptInPhoneNumberRouteHandler)
  .openapi(getActionPublishRoute, getActionPublishRouteHandler)
  .openapi(postActionPublishRoute, postActionPublishRouteHandler)
  .openapi(getActionPublishBatchRoute, getActionPublishBatchRouteHandler)
  .openapi(postActionPublishBatchRoute, postActionPublishBatchRouteHandler)
  .openapi(getActionPutDataProtectionPolicyRoute, getActionPutDataProtectionPolicyRouteHandler)
  .openapi(postActionPutDataProtectionPolicyRoute, postActionPutDataProtectionPolicyRouteHandler)
  .openapi(getActionRemovePermissionRoute, getActionRemovePermissionRouteHandler)
  .openapi(postActionRemovePermissionRoute, postActionRemovePermissionRouteHandler)
  .openapi(getActionSetEndpointAttributesRoute, getActionSetEndpointAttributesRouteHandler)
  .openapi(postActionSetEndpointAttributesRoute, postActionSetEndpointAttributesRouteHandler)
  .openapi(
    getActionSetPlatformApplicationAttributesRoute,
    getActionSetPlatformApplicationAttributesRouteHandler,
  )
  .openapi(
    postActionSetPlatformApplicationAttributesRoute,
    postActionSetPlatformApplicationAttributesRouteHandler,
  )
  .openapi(getActionSetSMSAttributesRoute, getActionSetSMSAttributesRouteHandler)
  .openapi(postActionSetSMSAttributesRoute, postActionSetSMSAttributesRouteHandler)
  .openapi(getActionSetSubscriptionAttributesRoute, getActionSetSubscriptionAttributesRouteHandler)
  .openapi(
    postActionSetSubscriptionAttributesRoute,
    postActionSetSubscriptionAttributesRouteHandler,
  )
  .openapi(getActionSetTopicAttributesRoute, getActionSetTopicAttributesRouteHandler)
  .openapi(postActionSetTopicAttributesRoute, postActionSetTopicAttributesRouteHandler)
  .openapi(getActionSubscribeRoute, getActionSubscribeRouteHandler)
  .openapi(postActionSubscribeRoute, postActionSubscribeRouteHandler)
  .openapi(getActionTagResourceRoute, getActionTagResourceRouteHandler)
  .openapi(postActionTagResourceRoute, postActionTagResourceRouteHandler)
  .openapi(getActionUnsubscribeRoute, getActionUnsubscribeRouteHandler)
  .openapi(postActionUnsubscribeRoute, postActionUnsubscribeRouteHandler)
  .openapi(getActionUntagResourceRoute, getActionUntagResourceRouteHandler)
  .openapi(postActionUntagResourceRoute, postActionUntagResourceRouteHandler)
  .openapi(
    getActionVerifySMSSandboxPhoneNumberRoute,
    getActionVerifySMSSandboxPhoneNumberRouteHandler,
  )
  .openapi(
    postActionVerifySMSSandboxPhoneNumberRoute,
    postActionVerifySMSSandboxPhoneNumberRouteHandler,
  )

export default app

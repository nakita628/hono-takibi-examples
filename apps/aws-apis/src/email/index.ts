import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCloneReceiptRuleSetRoute,
  getActionCreateConfigurationSetEventDestinationRoute,
  getActionCreateConfigurationSetRoute,
  getActionCreateConfigurationSetTrackingOptionsRoute,
  getActionCreateCustomVerificationEmailTemplateRoute,
  getActionCreateReceiptFilterRoute,
  getActionCreateReceiptRuleRoute,
  getActionCreateReceiptRuleSetRoute,
  getActionCreateTemplateRoute,
  getActionDeleteConfigurationSetEventDestinationRoute,
  getActionDeleteConfigurationSetRoute,
  getActionDeleteConfigurationSetTrackingOptionsRoute,
  getActionDeleteCustomVerificationEmailTemplateRoute,
  getActionDeleteIdentityPolicyRoute,
  getActionDeleteIdentityRoute,
  getActionDeleteReceiptFilterRoute,
  getActionDeleteReceiptRuleRoute,
  getActionDeleteReceiptRuleSetRoute,
  getActionDeleteTemplateRoute,
  getActionDeleteVerifiedEmailAddressRoute,
  getActionDescribeActiveReceiptRuleSetRoute,
  getActionDescribeConfigurationSetRoute,
  getActionDescribeReceiptRuleRoute,
  getActionDescribeReceiptRuleSetRoute,
  getActionGetAccountSendingEnabledRoute,
  getActionGetCustomVerificationEmailTemplateRoute,
  getActionGetIdentityDkimAttributesRoute,
  getActionGetIdentityMailFromDomainAttributesRoute,
  getActionGetIdentityNotificationAttributesRoute,
  getActionGetIdentityPoliciesRoute,
  getActionGetIdentityVerificationAttributesRoute,
  getActionGetSendQuotaRoute,
  getActionGetSendStatisticsRoute,
  getActionGetTemplateRoute,
  getActionListConfigurationSetsRoute,
  getActionListCustomVerificationEmailTemplatesRoute,
  getActionListIdentitiesRoute,
  getActionListIdentityPoliciesRoute,
  getActionListReceiptFiltersRoute,
  getActionListReceiptRuleSetsRoute,
  getActionListTemplatesRoute,
  getActionListVerifiedEmailAddressesRoute,
  getActionPutConfigurationSetDeliveryOptionsRoute,
  getActionPutIdentityPolicyRoute,
  getActionReorderReceiptRuleSetRoute,
  getActionSendBounceRoute,
  getActionSendBulkTemplatedEmailRoute,
  getActionSendCustomVerificationEmailRoute,
  getActionSendEmailRoute,
  getActionSendRawEmailRoute,
  getActionSendTemplatedEmailRoute,
  getActionSetActiveReceiptRuleSetRoute,
  getActionSetIdentityDkimEnabledRoute,
  getActionSetIdentityFeedbackForwardingEnabledRoute,
  getActionSetIdentityHeadersInNotificationsEnabledRoute,
  getActionSetIdentityMailFromDomainRoute,
  getActionSetIdentityNotificationTopicRoute,
  getActionSetReceiptRulePositionRoute,
  getActionTestRenderTemplateRoute,
  getActionUpdateAccountSendingEnabledRoute,
  getActionUpdateConfigurationSetEventDestinationRoute,
  getActionUpdateConfigurationSetReputationMetricsEnabledRoute,
  getActionUpdateConfigurationSetSendingEnabledRoute,
  getActionUpdateConfigurationSetTrackingOptionsRoute,
  getActionUpdateCustomVerificationEmailTemplateRoute,
  getActionUpdateReceiptRuleRoute,
  getActionUpdateTemplateRoute,
  getActionVerifyDomainDkimRoute,
  getActionVerifyDomainIdentityRoute,
  getActionVerifyEmailAddressRoute,
  getActionVerifyEmailIdentityRoute,
  postActionCloneReceiptRuleSetRoute,
  postActionCreateConfigurationSetEventDestinationRoute,
  postActionCreateConfigurationSetRoute,
  postActionCreateConfigurationSetTrackingOptionsRoute,
  postActionCreateCustomVerificationEmailTemplateRoute,
  postActionCreateReceiptFilterRoute,
  postActionCreateReceiptRuleRoute,
  postActionCreateReceiptRuleSetRoute,
  postActionCreateTemplateRoute,
  postActionDeleteConfigurationSetEventDestinationRoute,
  postActionDeleteConfigurationSetRoute,
  postActionDeleteConfigurationSetTrackingOptionsRoute,
  postActionDeleteCustomVerificationEmailTemplateRoute,
  postActionDeleteIdentityPolicyRoute,
  postActionDeleteIdentityRoute,
  postActionDeleteReceiptFilterRoute,
  postActionDeleteReceiptRuleRoute,
  postActionDeleteReceiptRuleSetRoute,
  postActionDeleteTemplateRoute,
  postActionDeleteVerifiedEmailAddressRoute,
  postActionDescribeActiveReceiptRuleSetRoute,
  postActionDescribeConfigurationSetRoute,
  postActionDescribeReceiptRuleRoute,
  postActionDescribeReceiptRuleSetRoute,
  postActionGetAccountSendingEnabledRoute,
  postActionGetCustomVerificationEmailTemplateRoute,
  postActionGetIdentityDkimAttributesRoute,
  postActionGetIdentityMailFromDomainAttributesRoute,
  postActionGetIdentityNotificationAttributesRoute,
  postActionGetIdentityPoliciesRoute,
  postActionGetIdentityVerificationAttributesRoute,
  postActionGetSendQuotaRoute,
  postActionGetSendStatisticsRoute,
  postActionGetTemplateRoute,
  postActionListConfigurationSetsRoute,
  postActionListCustomVerificationEmailTemplatesRoute,
  postActionListIdentitiesRoute,
  postActionListIdentityPoliciesRoute,
  postActionListReceiptFiltersRoute,
  postActionListReceiptRuleSetsRoute,
  postActionListTemplatesRoute,
  postActionListVerifiedEmailAddressesRoute,
  postActionPutConfigurationSetDeliveryOptionsRoute,
  postActionPutIdentityPolicyRoute,
  postActionReorderReceiptRuleSetRoute,
  postActionSendBounceRoute,
  postActionSendBulkTemplatedEmailRoute,
  postActionSendCustomVerificationEmailRoute,
  postActionSendEmailRoute,
  postActionSendRawEmailRoute,
  postActionSendTemplatedEmailRoute,
  postActionSetActiveReceiptRuleSetRoute,
  postActionSetIdentityDkimEnabledRoute,
  postActionSetIdentityFeedbackForwardingEnabledRoute,
  postActionSetIdentityHeadersInNotificationsEnabledRoute,
  postActionSetIdentityMailFromDomainRoute,
  postActionSetIdentityNotificationTopicRoute,
  postActionSetReceiptRulePositionRoute,
  postActionTestRenderTemplateRoute,
  postActionUpdateAccountSendingEnabledRoute,
  postActionUpdateConfigurationSetEventDestinationRoute,
  postActionUpdateConfigurationSetReputationMetricsEnabledRoute,
  postActionUpdateConfigurationSetSendingEnabledRoute,
  postActionUpdateConfigurationSetTrackingOptionsRoute,
  postActionUpdateCustomVerificationEmailTemplateRoute,
  postActionUpdateReceiptRuleRoute,
  postActionUpdateTemplateRoute,
  postActionVerifyDomainDkimRoute,
  postActionVerifyDomainIdentityRoute,
  postActionVerifyEmailAddressRoute,
  postActionVerifyEmailIdentityRoute,
} from './routes'
import {
  getActionCloneReceiptRuleSetRouteHandler,
  getActionCreateConfigurationSetEventDestinationRouteHandler,
  getActionCreateConfigurationSetRouteHandler,
  getActionCreateConfigurationSetTrackingOptionsRouteHandler,
  getActionCreateCustomVerificationEmailTemplateRouteHandler,
  getActionCreateReceiptFilterRouteHandler,
  getActionCreateReceiptRuleRouteHandler,
  getActionCreateReceiptRuleSetRouteHandler,
  getActionCreateTemplateRouteHandler,
  getActionDeleteConfigurationSetEventDestinationRouteHandler,
  getActionDeleteConfigurationSetRouteHandler,
  getActionDeleteConfigurationSetTrackingOptionsRouteHandler,
  getActionDeleteCustomVerificationEmailTemplateRouteHandler,
  getActionDeleteIdentityPolicyRouteHandler,
  getActionDeleteIdentityRouteHandler,
  getActionDeleteReceiptFilterRouteHandler,
  getActionDeleteReceiptRuleRouteHandler,
  getActionDeleteReceiptRuleSetRouteHandler,
  getActionDeleteTemplateRouteHandler,
  getActionDeleteVerifiedEmailAddressRouteHandler,
  getActionDescribeActiveReceiptRuleSetRouteHandler,
  getActionDescribeConfigurationSetRouteHandler,
  getActionDescribeReceiptRuleRouteHandler,
  getActionDescribeReceiptRuleSetRouteHandler,
  getActionGetAccountSendingEnabledRouteHandler,
  getActionGetCustomVerificationEmailTemplateRouteHandler,
  getActionGetIdentityDkimAttributesRouteHandler,
  getActionGetIdentityMailFromDomainAttributesRouteHandler,
  getActionGetIdentityNotificationAttributesRouteHandler,
  getActionGetIdentityPoliciesRouteHandler,
  getActionGetIdentityVerificationAttributesRouteHandler,
  getActionGetSendQuotaRouteHandler,
  getActionGetSendStatisticsRouteHandler,
  getActionGetTemplateRouteHandler,
  getActionListConfigurationSetsRouteHandler,
  getActionListCustomVerificationEmailTemplatesRouteHandler,
  getActionListIdentitiesRouteHandler,
  getActionListIdentityPoliciesRouteHandler,
  getActionListReceiptFiltersRouteHandler,
  getActionListReceiptRuleSetsRouteHandler,
  getActionListTemplatesRouteHandler,
  getActionListVerifiedEmailAddressesRouteHandler,
  getActionPutConfigurationSetDeliveryOptionsRouteHandler,
  getActionPutIdentityPolicyRouteHandler,
  getActionReorderReceiptRuleSetRouteHandler,
  getActionSendBounceRouteHandler,
  getActionSendBulkTemplatedEmailRouteHandler,
  getActionSendCustomVerificationEmailRouteHandler,
  getActionSendEmailRouteHandler,
  getActionSendRawEmailRouteHandler,
  getActionSendTemplatedEmailRouteHandler,
  getActionSetActiveReceiptRuleSetRouteHandler,
  getActionSetIdentityDkimEnabledRouteHandler,
  getActionSetIdentityFeedbackForwardingEnabledRouteHandler,
  getActionSetIdentityHeadersInNotificationsEnabledRouteHandler,
  getActionSetIdentityMailFromDomainRouteHandler,
  getActionSetIdentityNotificationTopicRouteHandler,
  getActionSetReceiptRulePositionRouteHandler,
  getActionTestRenderTemplateRouteHandler,
  getActionUpdateAccountSendingEnabledRouteHandler,
  getActionUpdateConfigurationSetEventDestinationRouteHandler,
  getActionUpdateConfigurationSetReputationMetricsEnabledRouteHandler,
  getActionUpdateConfigurationSetSendingEnabledRouteHandler,
  getActionUpdateConfigurationSetTrackingOptionsRouteHandler,
  getActionUpdateCustomVerificationEmailTemplateRouteHandler,
  getActionUpdateReceiptRuleRouteHandler,
  getActionUpdateTemplateRouteHandler,
  getActionVerifyDomainDkimRouteHandler,
  getActionVerifyDomainIdentityRouteHandler,
  getActionVerifyEmailAddressRouteHandler,
  getActionVerifyEmailIdentityRouteHandler,
  postActionCloneReceiptRuleSetRouteHandler,
  postActionCreateConfigurationSetEventDestinationRouteHandler,
  postActionCreateConfigurationSetRouteHandler,
  postActionCreateConfigurationSetTrackingOptionsRouteHandler,
  postActionCreateCustomVerificationEmailTemplateRouteHandler,
  postActionCreateReceiptFilterRouteHandler,
  postActionCreateReceiptRuleRouteHandler,
  postActionCreateReceiptRuleSetRouteHandler,
  postActionCreateTemplateRouteHandler,
  postActionDeleteConfigurationSetEventDestinationRouteHandler,
  postActionDeleteConfigurationSetRouteHandler,
  postActionDeleteConfigurationSetTrackingOptionsRouteHandler,
  postActionDeleteCustomVerificationEmailTemplateRouteHandler,
  postActionDeleteIdentityPolicyRouteHandler,
  postActionDeleteIdentityRouteHandler,
  postActionDeleteReceiptFilterRouteHandler,
  postActionDeleteReceiptRuleRouteHandler,
  postActionDeleteReceiptRuleSetRouteHandler,
  postActionDeleteTemplateRouteHandler,
  postActionDeleteVerifiedEmailAddressRouteHandler,
  postActionDescribeActiveReceiptRuleSetRouteHandler,
  postActionDescribeConfigurationSetRouteHandler,
  postActionDescribeReceiptRuleRouteHandler,
  postActionDescribeReceiptRuleSetRouteHandler,
  postActionGetAccountSendingEnabledRouteHandler,
  postActionGetCustomVerificationEmailTemplateRouteHandler,
  postActionGetIdentityDkimAttributesRouteHandler,
  postActionGetIdentityMailFromDomainAttributesRouteHandler,
  postActionGetIdentityNotificationAttributesRouteHandler,
  postActionGetIdentityPoliciesRouteHandler,
  postActionGetIdentityVerificationAttributesRouteHandler,
  postActionGetSendQuotaRouteHandler,
  postActionGetSendStatisticsRouteHandler,
  postActionGetTemplateRouteHandler,
  postActionListConfigurationSetsRouteHandler,
  postActionListCustomVerificationEmailTemplatesRouteHandler,
  postActionListIdentitiesRouteHandler,
  postActionListIdentityPoliciesRouteHandler,
  postActionListReceiptFiltersRouteHandler,
  postActionListReceiptRuleSetsRouteHandler,
  postActionListTemplatesRouteHandler,
  postActionListVerifiedEmailAddressesRouteHandler,
  postActionPutConfigurationSetDeliveryOptionsRouteHandler,
  postActionPutIdentityPolicyRouteHandler,
  postActionReorderReceiptRuleSetRouteHandler,
  postActionSendBounceRouteHandler,
  postActionSendBulkTemplatedEmailRouteHandler,
  postActionSendCustomVerificationEmailRouteHandler,
  postActionSendEmailRouteHandler,
  postActionSendRawEmailRouteHandler,
  postActionSendTemplatedEmailRouteHandler,
  postActionSetActiveReceiptRuleSetRouteHandler,
  postActionSetIdentityDkimEnabledRouteHandler,
  postActionSetIdentityFeedbackForwardingEnabledRouteHandler,
  postActionSetIdentityHeadersInNotificationsEnabledRouteHandler,
  postActionSetIdentityMailFromDomainRouteHandler,
  postActionSetIdentityNotificationTopicRouteHandler,
  postActionSetReceiptRulePositionRouteHandler,
  postActionTestRenderTemplateRouteHandler,
  postActionUpdateAccountSendingEnabledRouteHandler,
  postActionUpdateConfigurationSetEventDestinationRouteHandler,
  postActionUpdateConfigurationSetReputationMetricsEnabledRouteHandler,
  postActionUpdateConfigurationSetSendingEnabledRouteHandler,
  postActionUpdateConfigurationSetTrackingOptionsRouteHandler,
  postActionUpdateCustomVerificationEmailTemplateRouteHandler,
  postActionUpdateReceiptRuleRouteHandler,
  postActionUpdateTemplateRouteHandler,
  postActionVerifyDomainDkimRouteHandler,
  postActionVerifyDomainIdentityRouteHandler,
  postActionVerifyEmailAddressRouteHandler,
  postActionVerifyEmailIdentityRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionCloneReceiptRuleSetRoute, getActionCloneReceiptRuleSetRouteHandler)
  .openapi(postActionCloneReceiptRuleSetRoute, postActionCloneReceiptRuleSetRouteHandler)
  .openapi(getActionCreateConfigurationSetRoute, getActionCreateConfigurationSetRouteHandler)
  .openapi(postActionCreateConfigurationSetRoute, postActionCreateConfigurationSetRouteHandler)
  .openapi(
    getActionCreateConfigurationSetEventDestinationRoute,
    getActionCreateConfigurationSetEventDestinationRouteHandler,
  )
  .openapi(
    postActionCreateConfigurationSetEventDestinationRoute,
    postActionCreateConfigurationSetEventDestinationRouteHandler,
  )
  .openapi(
    getActionCreateConfigurationSetTrackingOptionsRoute,
    getActionCreateConfigurationSetTrackingOptionsRouteHandler,
  )
  .openapi(
    postActionCreateConfigurationSetTrackingOptionsRoute,
    postActionCreateConfigurationSetTrackingOptionsRouteHandler,
  )
  .openapi(
    getActionCreateCustomVerificationEmailTemplateRoute,
    getActionCreateCustomVerificationEmailTemplateRouteHandler,
  )
  .openapi(
    postActionCreateCustomVerificationEmailTemplateRoute,
    postActionCreateCustomVerificationEmailTemplateRouteHandler,
  )
  .openapi(getActionCreateReceiptFilterRoute, getActionCreateReceiptFilterRouteHandler)
  .openapi(postActionCreateReceiptFilterRoute, postActionCreateReceiptFilterRouteHandler)
  .openapi(getActionCreateReceiptRuleRoute, getActionCreateReceiptRuleRouteHandler)
  .openapi(postActionCreateReceiptRuleRoute, postActionCreateReceiptRuleRouteHandler)
  .openapi(getActionCreateReceiptRuleSetRoute, getActionCreateReceiptRuleSetRouteHandler)
  .openapi(postActionCreateReceiptRuleSetRoute, postActionCreateReceiptRuleSetRouteHandler)
  .openapi(getActionCreateTemplateRoute, getActionCreateTemplateRouteHandler)
  .openapi(postActionCreateTemplateRoute, postActionCreateTemplateRouteHandler)
  .openapi(getActionDeleteConfigurationSetRoute, getActionDeleteConfigurationSetRouteHandler)
  .openapi(postActionDeleteConfigurationSetRoute, postActionDeleteConfigurationSetRouteHandler)
  .openapi(
    getActionDeleteConfigurationSetEventDestinationRoute,
    getActionDeleteConfigurationSetEventDestinationRouteHandler,
  )
  .openapi(
    postActionDeleteConfigurationSetEventDestinationRoute,
    postActionDeleteConfigurationSetEventDestinationRouteHandler,
  )
  .openapi(
    getActionDeleteConfigurationSetTrackingOptionsRoute,
    getActionDeleteConfigurationSetTrackingOptionsRouteHandler,
  )
  .openapi(
    postActionDeleteConfigurationSetTrackingOptionsRoute,
    postActionDeleteConfigurationSetTrackingOptionsRouteHandler,
  )
  .openapi(
    getActionDeleteCustomVerificationEmailTemplateRoute,
    getActionDeleteCustomVerificationEmailTemplateRouteHandler,
  )
  .openapi(
    postActionDeleteCustomVerificationEmailTemplateRoute,
    postActionDeleteCustomVerificationEmailTemplateRouteHandler,
  )
  .openapi(getActionDeleteIdentityRoute, getActionDeleteIdentityRouteHandler)
  .openapi(postActionDeleteIdentityRoute, postActionDeleteIdentityRouteHandler)
  .openapi(getActionDeleteIdentityPolicyRoute, getActionDeleteIdentityPolicyRouteHandler)
  .openapi(postActionDeleteIdentityPolicyRoute, postActionDeleteIdentityPolicyRouteHandler)
  .openapi(getActionDeleteReceiptFilterRoute, getActionDeleteReceiptFilterRouteHandler)
  .openapi(postActionDeleteReceiptFilterRoute, postActionDeleteReceiptFilterRouteHandler)
  .openapi(getActionDeleteReceiptRuleRoute, getActionDeleteReceiptRuleRouteHandler)
  .openapi(postActionDeleteReceiptRuleRoute, postActionDeleteReceiptRuleRouteHandler)
  .openapi(getActionDeleteReceiptRuleSetRoute, getActionDeleteReceiptRuleSetRouteHandler)
  .openapi(postActionDeleteReceiptRuleSetRoute, postActionDeleteReceiptRuleSetRouteHandler)
  .openapi(getActionDeleteTemplateRoute, getActionDeleteTemplateRouteHandler)
  .openapi(postActionDeleteTemplateRoute, postActionDeleteTemplateRouteHandler)
  .openapi(
    getActionDeleteVerifiedEmailAddressRoute,
    getActionDeleteVerifiedEmailAddressRouteHandler,
  )
  .openapi(
    postActionDeleteVerifiedEmailAddressRoute,
    postActionDeleteVerifiedEmailAddressRouteHandler,
  )
  .openapi(
    getActionDescribeActiveReceiptRuleSetRoute,
    getActionDescribeActiveReceiptRuleSetRouteHandler,
  )
  .openapi(
    postActionDescribeActiveReceiptRuleSetRoute,
    postActionDescribeActiveReceiptRuleSetRouteHandler,
  )
  .openapi(getActionDescribeConfigurationSetRoute, getActionDescribeConfigurationSetRouteHandler)
  .openapi(postActionDescribeConfigurationSetRoute, postActionDescribeConfigurationSetRouteHandler)
  .openapi(getActionDescribeReceiptRuleRoute, getActionDescribeReceiptRuleRouteHandler)
  .openapi(postActionDescribeReceiptRuleRoute, postActionDescribeReceiptRuleRouteHandler)
  .openapi(getActionDescribeReceiptRuleSetRoute, getActionDescribeReceiptRuleSetRouteHandler)
  .openapi(postActionDescribeReceiptRuleSetRoute, postActionDescribeReceiptRuleSetRouteHandler)
  .openapi(getActionGetAccountSendingEnabledRoute, getActionGetAccountSendingEnabledRouteHandler)
  .openapi(postActionGetAccountSendingEnabledRoute, postActionGetAccountSendingEnabledRouteHandler)
  .openapi(
    getActionGetCustomVerificationEmailTemplateRoute,
    getActionGetCustomVerificationEmailTemplateRouteHandler,
  )
  .openapi(
    postActionGetCustomVerificationEmailTemplateRoute,
    postActionGetCustomVerificationEmailTemplateRouteHandler,
  )
  .openapi(getActionGetIdentityDkimAttributesRoute, getActionGetIdentityDkimAttributesRouteHandler)
  .openapi(
    postActionGetIdentityDkimAttributesRoute,
    postActionGetIdentityDkimAttributesRouteHandler,
  )
  .openapi(
    getActionGetIdentityMailFromDomainAttributesRoute,
    getActionGetIdentityMailFromDomainAttributesRouteHandler,
  )
  .openapi(
    postActionGetIdentityMailFromDomainAttributesRoute,
    postActionGetIdentityMailFromDomainAttributesRouteHandler,
  )
  .openapi(
    getActionGetIdentityNotificationAttributesRoute,
    getActionGetIdentityNotificationAttributesRouteHandler,
  )
  .openapi(
    postActionGetIdentityNotificationAttributesRoute,
    postActionGetIdentityNotificationAttributesRouteHandler,
  )
  .openapi(getActionGetIdentityPoliciesRoute, getActionGetIdentityPoliciesRouteHandler)
  .openapi(postActionGetIdentityPoliciesRoute, postActionGetIdentityPoliciesRouteHandler)
  .openapi(
    getActionGetIdentityVerificationAttributesRoute,
    getActionGetIdentityVerificationAttributesRouteHandler,
  )
  .openapi(
    postActionGetIdentityVerificationAttributesRoute,
    postActionGetIdentityVerificationAttributesRouteHandler,
  )
  .openapi(getActionGetSendQuotaRoute, getActionGetSendQuotaRouteHandler)
  .openapi(postActionGetSendQuotaRoute, postActionGetSendQuotaRouteHandler)
  .openapi(getActionGetSendStatisticsRoute, getActionGetSendStatisticsRouteHandler)
  .openapi(postActionGetSendStatisticsRoute, postActionGetSendStatisticsRouteHandler)
  .openapi(getActionGetTemplateRoute, getActionGetTemplateRouteHandler)
  .openapi(postActionGetTemplateRoute, postActionGetTemplateRouteHandler)
  .openapi(getActionListConfigurationSetsRoute, getActionListConfigurationSetsRouteHandler)
  .openapi(postActionListConfigurationSetsRoute, postActionListConfigurationSetsRouteHandler)
  .openapi(
    getActionListCustomVerificationEmailTemplatesRoute,
    getActionListCustomVerificationEmailTemplatesRouteHandler,
  )
  .openapi(
    postActionListCustomVerificationEmailTemplatesRoute,
    postActionListCustomVerificationEmailTemplatesRouteHandler,
  )
  .openapi(getActionListIdentitiesRoute, getActionListIdentitiesRouteHandler)
  .openapi(postActionListIdentitiesRoute, postActionListIdentitiesRouteHandler)
  .openapi(getActionListIdentityPoliciesRoute, getActionListIdentityPoliciesRouteHandler)
  .openapi(postActionListIdentityPoliciesRoute, postActionListIdentityPoliciesRouteHandler)
  .openapi(getActionListReceiptFiltersRoute, getActionListReceiptFiltersRouteHandler)
  .openapi(postActionListReceiptFiltersRoute, postActionListReceiptFiltersRouteHandler)
  .openapi(getActionListReceiptRuleSetsRoute, getActionListReceiptRuleSetsRouteHandler)
  .openapi(postActionListReceiptRuleSetsRoute, postActionListReceiptRuleSetsRouteHandler)
  .openapi(getActionListTemplatesRoute, getActionListTemplatesRouteHandler)
  .openapi(postActionListTemplatesRoute, postActionListTemplatesRouteHandler)
  .openapi(
    getActionListVerifiedEmailAddressesRoute,
    getActionListVerifiedEmailAddressesRouteHandler,
  )
  .openapi(
    postActionListVerifiedEmailAddressesRoute,
    postActionListVerifiedEmailAddressesRouteHandler,
  )
  .openapi(
    getActionPutConfigurationSetDeliveryOptionsRoute,
    getActionPutConfigurationSetDeliveryOptionsRouteHandler,
  )
  .openapi(
    postActionPutConfigurationSetDeliveryOptionsRoute,
    postActionPutConfigurationSetDeliveryOptionsRouteHandler,
  )
  .openapi(getActionPutIdentityPolicyRoute, getActionPutIdentityPolicyRouteHandler)
  .openapi(postActionPutIdentityPolicyRoute, postActionPutIdentityPolicyRouteHandler)
  .openapi(getActionReorderReceiptRuleSetRoute, getActionReorderReceiptRuleSetRouteHandler)
  .openapi(postActionReorderReceiptRuleSetRoute, postActionReorderReceiptRuleSetRouteHandler)
  .openapi(getActionSendBounceRoute, getActionSendBounceRouteHandler)
  .openapi(postActionSendBounceRoute, postActionSendBounceRouteHandler)
  .openapi(getActionSendBulkTemplatedEmailRoute, getActionSendBulkTemplatedEmailRouteHandler)
  .openapi(postActionSendBulkTemplatedEmailRoute, postActionSendBulkTemplatedEmailRouteHandler)
  .openapi(
    getActionSendCustomVerificationEmailRoute,
    getActionSendCustomVerificationEmailRouteHandler,
  )
  .openapi(
    postActionSendCustomVerificationEmailRoute,
    postActionSendCustomVerificationEmailRouteHandler,
  )
  .openapi(getActionSendEmailRoute, getActionSendEmailRouteHandler)
  .openapi(postActionSendEmailRoute, postActionSendEmailRouteHandler)
  .openapi(getActionSendRawEmailRoute, getActionSendRawEmailRouteHandler)
  .openapi(postActionSendRawEmailRoute, postActionSendRawEmailRouteHandler)
  .openapi(getActionSendTemplatedEmailRoute, getActionSendTemplatedEmailRouteHandler)
  .openapi(postActionSendTemplatedEmailRoute, postActionSendTemplatedEmailRouteHandler)
  .openapi(getActionSetActiveReceiptRuleSetRoute, getActionSetActiveReceiptRuleSetRouteHandler)
  .openapi(postActionSetActiveReceiptRuleSetRoute, postActionSetActiveReceiptRuleSetRouteHandler)
  .openapi(getActionSetIdentityDkimEnabledRoute, getActionSetIdentityDkimEnabledRouteHandler)
  .openapi(postActionSetIdentityDkimEnabledRoute, postActionSetIdentityDkimEnabledRouteHandler)
  .openapi(
    getActionSetIdentityFeedbackForwardingEnabledRoute,
    getActionSetIdentityFeedbackForwardingEnabledRouteHandler,
  )
  .openapi(
    postActionSetIdentityFeedbackForwardingEnabledRoute,
    postActionSetIdentityFeedbackForwardingEnabledRouteHandler,
  )
  .openapi(
    getActionSetIdentityHeadersInNotificationsEnabledRoute,
    getActionSetIdentityHeadersInNotificationsEnabledRouteHandler,
  )
  .openapi(
    postActionSetIdentityHeadersInNotificationsEnabledRoute,
    postActionSetIdentityHeadersInNotificationsEnabledRouteHandler,
  )
  .openapi(getActionSetIdentityMailFromDomainRoute, getActionSetIdentityMailFromDomainRouteHandler)
  .openapi(
    postActionSetIdentityMailFromDomainRoute,
    postActionSetIdentityMailFromDomainRouteHandler,
  )
  .openapi(
    getActionSetIdentityNotificationTopicRoute,
    getActionSetIdentityNotificationTopicRouteHandler,
  )
  .openapi(
    postActionSetIdentityNotificationTopicRoute,
    postActionSetIdentityNotificationTopicRouteHandler,
  )
  .openapi(getActionSetReceiptRulePositionRoute, getActionSetReceiptRulePositionRouteHandler)
  .openapi(postActionSetReceiptRulePositionRoute, postActionSetReceiptRulePositionRouteHandler)
  .openapi(getActionTestRenderTemplateRoute, getActionTestRenderTemplateRouteHandler)
  .openapi(postActionTestRenderTemplateRoute, postActionTestRenderTemplateRouteHandler)
  .openapi(
    getActionUpdateAccountSendingEnabledRoute,
    getActionUpdateAccountSendingEnabledRouteHandler,
  )
  .openapi(
    postActionUpdateAccountSendingEnabledRoute,
    postActionUpdateAccountSendingEnabledRouteHandler,
  )
  .openapi(
    getActionUpdateConfigurationSetEventDestinationRoute,
    getActionUpdateConfigurationSetEventDestinationRouteHandler,
  )
  .openapi(
    postActionUpdateConfigurationSetEventDestinationRoute,
    postActionUpdateConfigurationSetEventDestinationRouteHandler,
  )
  .openapi(
    getActionUpdateConfigurationSetReputationMetricsEnabledRoute,
    getActionUpdateConfigurationSetReputationMetricsEnabledRouteHandler,
  )
  .openapi(
    postActionUpdateConfigurationSetReputationMetricsEnabledRoute,
    postActionUpdateConfigurationSetReputationMetricsEnabledRouteHandler,
  )
  .openapi(
    getActionUpdateConfigurationSetSendingEnabledRoute,
    getActionUpdateConfigurationSetSendingEnabledRouteHandler,
  )
  .openapi(
    postActionUpdateConfigurationSetSendingEnabledRoute,
    postActionUpdateConfigurationSetSendingEnabledRouteHandler,
  )
  .openapi(
    getActionUpdateConfigurationSetTrackingOptionsRoute,
    getActionUpdateConfigurationSetTrackingOptionsRouteHandler,
  )
  .openapi(
    postActionUpdateConfigurationSetTrackingOptionsRoute,
    postActionUpdateConfigurationSetTrackingOptionsRouteHandler,
  )
  .openapi(
    getActionUpdateCustomVerificationEmailTemplateRoute,
    getActionUpdateCustomVerificationEmailTemplateRouteHandler,
  )
  .openapi(
    postActionUpdateCustomVerificationEmailTemplateRoute,
    postActionUpdateCustomVerificationEmailTemplateRouteHandler,
  )
  .openapi(getActionUpdateReceiptRuleRoute, getActionUpdateReceiptRuleRouteHandler)
  .openapi(postActionUpdateReceiptRuleRoute, postActionUpdateReceiptRuleRouteHandler)
  .openapi(getActionUpdateTemplateRoute, getActionUpdateTemplateRouteHandler)
  .openapi(postActionUpdateTemplateRoute, postActionUpdateTemplateRouteHandler)
  .openapi(getActionVerifyDomainDkimRoute, getActionVerifyDomainDkimRouteHandler)
  .openapi(postActionVerifyDomainDkimRoute, postActionVerifyDomainDkimRouteHandler)
  .openapi(getActionVerifyDomainIdentityRoute, getActionVerifyDomainIdentityRouteHandler)
  .openapi(postActionVerifyDomainIdentityRoute, postActionVerifyDomainIdentityRouteHandler)
  .openapi(getActionVerifyEmailAddressRoute, getActionVerifyEmailAddressRouteHandler)
  .openapi(postActionVerifyEmailAddressRoute, postActionVerifyEmailAddressRouteHandler)
  .openapi(getActionVerifyEmailIdentityRoute, getActionVerifyEmailIdentityRouteHandler)
  .openapi(postActionVerifyEmailIdentityRoute, postActionVerifyEmailIdentityRouteHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionCloneReceiptRuleSetHandler,
  actionCreateConfigurationSetEventDestinationHandler,
  actionCreateConfigurationSetHandler,
  actionCreateConfigurationSetTrackingOptionsHandler,
  actionCreateCustomVerificationEmailTemplateHandler,
  actionCreateReceiptFilterHandler,
  actionCreateReceiptRuleHandler,
  actionCreateReceiptRuleSetHandler,
  actionCreateTemplateHandler,
  actionDeleteConfigurationSetEventDestinationHandler,
  actionDeleteConfigurationSetHandler,
  actionDeleteConfigurationSetTrackingOptionsHandler,
  actionDeleteCustomVerificationEmailTemplateHandler,
  actionDeleteIdentityHandler,
  actionDeleteIdentityPolicyHandler,
  actionDeleteReceiptFilterHandler,
  actionDeleteReceiptRuleHandler,
  actionDeleteReceiptRuleSetHandler,
  actionDeleteTemplateHandler,
  actionDeleteVerifiedEmailAddressHandler,
  actionDescribeActiveReceiptRuleSetHandler,
  actionDescribeConfigurationSetHandler,
  actionDescribeReceiptRuleHandler,
  actionDescribeReceiptRuleSetHandler,
  actionGetAccountSendingEnabledHandler,
  actionGetCustomVerificationEmailTemplateHandler,
  actionGetIdentityDkimAttributesHandler,
  actionGetIdentityMailFromDomainAttributesHandler,
  actionGetIdentityNotificationAttributesHandler,
  actionGetIdentityPoliciesHandler,
  actionGetIdentityVerificationAttributesHandler,
  actionGetSendQuotaHandler,
  actionGetSendStatisticsHandler,
  actionGetTemplateHandler,
  actionListConfigurationSetsHandler,
  actionListCustomVerificationEmailTemplatesHandler,
  actionListIdentitiesHandler,
  actionListIdentityPoliciesHandler,
  actionListReceiptFiltersHandler,
  actionListReceiptRuleSetsHandler,
  actionListTemplatesHandler,
  actionListVerifiedEmailAddressesHandler,
  actionPutConfigurationSetDeliveryOptionsHandler,
  actionPutIdentityPolicyHandler,
  actionReorderReceiptRuleSetHandler,
  actionSendBounceHandler,
  actionSendBulkTemplatedEmailHandler,
  actionSendCustomVerificationEmailHandler,
  actionSendEmailHandler,
  actionSendRawEmailHandler,
  actionSendTemplatedEmailHandler,
  actionSetActiveReceiptRuleSetHandler,
  actionSetIdentityDkimEnabledHandler,
  actionSetIdentityFeedbackForwardingEnabledHandler,
  actionSetIdentityHeadersInNotificationsEnabledHandler,
  actionSetIdentityMailFromDomainHandler,
  actionSetIdentityNotificationTopicHandler,
  actionSetReceiptRulePositionHandler,
  actionTestRenderTemplateHandler,
  actionUpdateAccountSendingEnabledHandler,
  actionUpdateConfigurationSetEventDestinationHandler,
  actionUpdateConfigurationSetReputationMetricsEnabledHandler,
  actionUpdateConfigurationSetSendingEnabledHandler,
  actionUpdateConfigurationSetTrackingOptionsHandler,
  actionUpdateCustomVerificationEmailTemplateHandler,
  actionUpdateReceiptRuleHandler,
  actionUpdateTemplateHandler,
  actionVerifyDomainDkimHandler,
  actionVerifyDomainIdentityHandler,
  actionVerifyEmailAddressHandler,
  actionVerifyEmailIdentityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionCloneReceiptRuleSetHandler)
  .route('/', actionCreateConfigurationSetHandler)
  .route('/', actionCreateConfigurationSetEventDestinationHandler)
  .route('/', actionCreateConfigurationSetTrackingOptionsHandler)
  .route('/', actionCreateCustomVerificationEmailTemplateHandler)
  .route('/', actionCreateReceiptFilterHandler)
  .route('/', actionCreateReceiptRuleHandler)
  .route('/', actionCreateReceiptRuleSetHandler)
  .route('/', actionCreateTemplateHandler)
  .route('/', actionDeleteConfigurationSetHandler)
  .route('/', actionDeleteConfigurationSetEventDestinationHandler)
  .route('/', actionDeleteConfigurationSetTrackingOptionsHandler)
  .route('/', actionDeleteCustomVerificationEmailTemplateHandler)
  .route('/', actionDeleteIdentityHandler)
  .route('/', actionDeleteIdentityPolicyHandler)
  .route('/', actionDeleteReceiptFilterHandler)
  .route('/', actionDeleteReceiptRuleHandler)
  .route('/', actionDeleteReceiptRuleSetHandler)
  .route('/', actionDeleteTemplateHandler)
  .route('/', actionDeleteVerifiedEmailAddressHandler)
  .route('/', actionDescribeActiveReceiptRuleSetHandler)
  .route('/', actionDescribeConfigurationSetHandler)
  .route('/', actionDescribeReceiptRuleHandler)
  .route('/', actionDescribeReceiptRuleSetHandler)
  .route('/', actionGetAccountSendingEnabledHandler)
  .route('/', actionGetCustomVerificationEmailTemplateHandler)
  .route('/', actionGetIdentityDkimAttributesHandler)
  .route('/', actionGetIdentityMailFromDomainAttributesHandler)
  .route('/', actionGetIdentityNotificationAttributesHandler)
  .route('/', actionGetIdentityPoliciesHandler)
  .route('/', actionGetIdentityVerificationAttributesHandler)
  .route('/', actionGetSendQuotaHandler)
  .route('/', actionGetSendStatisticsHandler)
  .route('/', actionGetTemplateHandler)
  .route('/', actionListConfigurationSetsHandler)
  .route('/', actionListCustomVerificationEmailTemplatesHandler)
  .route('/', actionListIdentitiesHandler)
  .route('/', actionListIdentityPoliciesHandler)
  .route('/', actionListReceiptFiltersHandler)
  .route('/', actionListReceiptRuleSetsHandler)
  .route('/', actionListTemplatesHandler)
  .route('/', actionListVerifiedEmailAddressesHandler)
  .route('/', actionPutConfigurationSetDeliveryOptionsHandler)
  .route('/', actionPutIdentityPolicyHandler)
  .route('/', actionReorderReceiptRuleSetHandler)
  .route('/', actionSendBounceHandler)
  .route('/', actionSendBulkTemplatedEmailHandler)
  .route('/', actionSendCustomVerificationEmailHandler)
  .route('/', actionSendEmailHandler)
  .route('/', actionSendRawEmailHandler)
  .route('/', actionSendTemplatedEmailHandler)
  .route('/', actionSetActiveReceiptRuleSetHandler)
  .route('/', actionSetIdentityDkimEnabledHandler)
  .route('/', actionSetIdentityFeedbackForwardingEnabledHandler)
  .route('/', actionSetIdentityHeadersInNotificationsEnabledHandler)
  .route('/', actionSetIdentityMailFromDomainHandler)
  .route('/', actionSetIdentityNotificationTopicHandler)
  .route('/', actionSetReceiptRulePositionHandler)
  .route('/', actionTestRenderTemplateHandler)
  .route('/', actionUpdateAccountSendingEnabledHandler)
  .route('/', actionUpdateConfigurationSetEventDestinationHandler)
  .route('/', actionUpdateConfigurationSetReputationMetricsEnabledHandler)
  .route('/', actionUpdateConfigurationSetSendingEnabledHandler)
  .route('/', actionUpdateConfigurationSetTrackingOptionsHandler)
  .route('/', actionUpdateCustomVerificationEmailTemplateHandler)
  .route('/', actionUpdateReceiptRuleHandler)
  .route('/', actionUpdateTemplateHandler)
  .route('/', actionVerifyDomainDkimHandler)
  .route('/', actionVerifyDomainIdentityHandler)
  .route('/', actionVerifyEmailAddressHandler)
  .route('/', actionVerifyEmailIdentityHandler)

export default app

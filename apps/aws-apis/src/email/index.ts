import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionCloneReceiptRuleSetHandler,
  ActionCreateConfigurationSetEventDestinationHandler,
  ActionCreateConfigurationSetHandler,
  ActionCreateConfigurationSetTrackingOptionsHandler,
  ActionCreateCustomVerificationEmailTemplateHandler,
  ActionCreateReceiptFilterHandler,
  ActionCreateReceiptRuleHandler,
  ActionCreateReceiptRuleSetHandler,
  ActionCreateTemplateHandler,
  ActionDeleteConfigurationSetEventDestinationHandler,
  ActionDeleteConfigurationSetHandler,
  ActionDeleteConfigurationSetTrackingOptionsHandler,
  ActionDeleteCustomVerificationEmailTemplateHandler,
  ActionDeleteIdentityHandler,
  ActionDeleteIdentityPolicyHandler,
  ActionDeleteReceiptFilterHandler,
  ActionDeleteReceiptRuleHandler,
  ActionDeleteReceiptRuleSetHandler,
  ActionDeleteTemplateHandler,
  ActionDeleteVerifiedEmailAddressHandler,
  ActionDescribeActiveReceiptRuleSetHandler,
  ActionDescribeConfigurationSetHandler,
  ActionDescribeReceiptRuleHandler,
  ActionDescribeReceiptRuleSetHandler,
  ActionGetAccountSendingEnabledHandler,
  ActionGetCustomVerificationEmailTemplateHandler,
  ActionGetIdentityDkimAttributesHandler,
  ActionGetIdentityMailFromDomainAttributesHandler,
  ActionGetIdentityNotificationAttributesHandler,
  ActionGetIdentityPoliciesHandler,
  ActionGetIdentityVerificationAttributesHandler,
  ActionGetSendQuotaHandler,
  ActionGetSendStatisticsHandler,
  ActionGetTemplateHandler,
  ActionListConfigurationSetsHandler,
  ActionListCustomVerificationEmailTemplatesHandler,
  ActionListIdentitiesHandler,
  ActionListIdentityPoliciesHandler,
  ActionListReceiptFiltersHandler,
  ActionListReceiptRuleSetsHandler,
  ActionListTemplatesHandler,
  ActionListVerifiedEmailAddressesHandler,
  ActionPutConfigurationSetDeliveryOptionsHandler,
  ActionPutIdentityPolicyHandler,
  ActionReorderReceiptRuleSetHandler,
  ActionSendBounceHandler,
  ActionSendBulkTemplatedEmailHandler,
  ActionSendCustomVerificationEmailHandler,
  ActionSendEmailHandler,
  ActionSendRawEmailHandler,
  ActionSendTemplatedEmailHandler,
  ActionSetActiveReceiptRuleSetHandler,
  ActionSetIdentityDkimEnabledHandler,
  ActionSetIdentityFeedbackForwardingEnabledHandler,
  ActionSetIdentityHeadersInNotificationsEnabledHandler,
  ActionSetIdentityMailFromDomainHandler,
  ActionSetIdentityNotificationTopicHandler,
  ActionSetReceiptRulePositionHandler,
  ActionTestRenderTemplateHandler,
  ActionUpdateAccountSendingEnabledHandler,
  ActionUpdateConfigurationSetEventDestinationHandler,
  ActionUpdateConfigurationSetReputationMetricsEnabledHandler,
  ActionUpdateConfigurationSetSendingEnabledHandler,
  ActionUpdateConfigurationSetTrackingOptionsHandler,
  ActionUpdateCustomVerificationEmailTemplateHandler,
  ActionUpdateReceiptRuleHandler,
  ActionUpdateTemplateHandler,
  ActionVerifyDomainDkimHandler,
  ActionVerifyDomainIdentityHandler,
  ActionVerifyEmailAddressHandler,
  ActionVerifyEmailIdentityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionCloneReceiptRuleSetHandler)
  .route('/', ActionCreateConfigurationSetHandler)
  .route('/', ActionCreateConfigurationSetEventDestinationHandler)
  .route('/', ActionCreateConfigurationSetTrackingOptionsHandler)
  .route('/', ActionCreateCustomVerificationEmailTemplateHandler)
  .route('/', ActionCreateReceiptFilterHandler)
  .route('/', ActionCreateReceiptRuleHandler)
  .route('/', ActionCreateReceiptRuleSetHandler)
  .route('/', ActionCreateTemplateHandler)
  .route('/', ActionDeleteConfigurationSetHandler)
  .route('/', ActionDeleteConfigurationSetEventDestinationHandler)
  .route('/', ActionDeleteConfigurationSetTrackingOptionsHandler)
  .route('/', ActionDeleteCustomVerificationEmailTemplateHandler)
  .route('/', ActionDeleteIdentityHandler)
  .route('/', ActionDeleteIdentityPolicyHandler)
  .route('/', ActionDeleteReceiptFilterHandler)
  .route('/', ActionDeleteReceiptRuleHandler)
  .route('/', ActionDeleteReceiptRuleSetHandler)
  .route('/', ActionDeleteTemplateHandler)
  .route('/', ActionDeleteVerifiedEmailAddressHandler)
  .route('/', ActionDescribeActiveReceiptRuleSetHandler)
  .route('/', ActionDescribeConfigurationSetHandler)
  .route('/', ActionDescribeReceiptRuleHandler)
  .route('/', ActionDescribeReceiptRuleSetHandler)
  .route('/', ActionGetAccountSendingEnabledHandler)
  .route('/', ActionGetCustomVerificationEmailTemplateHandler)
  .route('/', ActionGetIdentityDkimAttributesHandler)
  .route('/', ActionGetIdentityMailFromDomainAttributesHandler)
  .route('/', ActionGetIdentityNotificationAttributesHandler)
  .route('/', ActionGetIdentityPoliciesHandler)
  .route('/', ActionGetIdentityVerificationAttributesHandler)
  .route('/', ActionGetSendQuotaHandler)
  .route('/', ActionGetSendStatisticsHandler)
  .route('/', ActionGetTemplateHandler)
  .route('/', ActionListConfigurationSetsHandler)
  .route('/', ActionListCustomVerificationEmailTemplatesHandler)
  .route('/', ActionListIdentitiesHandler)
  .route('/', ActionListIdentityPoliciesHandler)
  .route('/', ActionListReceiptFiltersHandler)
  .route('/', ActionListReceiptRuleSetsHandler)
  .route('/', ActionListTemplatesHandler)
  .route('/', ActionListVerifiedEmailAddressesHandler)
  .route('/', ActionPutConfigurationSetDeliveryOptionsHandler)
  .route('/', ActionPutIdentityPolicyHandler)
  .route('/', ActionReorderReceiptRuleSetHandler)
  .route('/', ActionSendBounceHandler)
  .route('/', ActionSendBulkTemplatedEmailHandler)
  .route('/', ActionSendCustomVerificationEmailHandler)
  .route('/', ActionSendEmailHandler)
  .route('/', ActionSendRawEmailHandler)
  .route('/', ActionSendTemplatedEmailHandler)
  .route('/', ActionSetActiveReceiptRuleSetHandler)
  .route('/', ActionSetIdentityDkimEnabledHandler)
  .route('/', ActionSetIdentityFeedbackForwardingEnabledHandler)
  .route('/', ActionSetIdentityHeadersInNotificationsEnabledHandler)
  .route('/', ActionSetIdentityMailFromDomainHandler)
  .route('/', ActionSetIdentityNotificationTopicHandler)
  .route('/', ActionSetReceiptRulePositionHandler)
  .route('/', ActionTestRenderTemplateHandler)
  .route('/', ActionUpdateAccountSendingEnabledHandler)
  .route('/', ActionUpdateConfigurationSetEventDestinationHandler)
  .route('/', ActionUpdateConfigurationSetReputationMetricsEnabledHandler)
  .route('/', ActionUpdateConfigurationSetSendingEnabledHandler)
  .route('/', ActionUpdateConfigurationSetTrackingOptionsHandler)
  .route('/', ActionUpdateCustomVerificationEmailTemplateHandler)
  .route('/', ActionUpdateReceiptRuleHandler)
  .route('/', ActionUpdateTemplateHandler)
  .route('/', ActionVerifyDomainDkimHandler)
  .route('/', ActionVerifyDomainIdentityHandler)
  .route('/', ActionVerifyEmailAddressHandler)
  .route('/', ActionVerifyEmailIdentityHandler)

export default app

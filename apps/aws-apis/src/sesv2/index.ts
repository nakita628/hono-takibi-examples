import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
  deleteV2EmailConfigurationSetsConfigurationSetNameRoute,
  deleteV2EmailContactListsContactListNameContactsEmailAddressRoute,
  deleteV2EmailContactListsContactListNameRoute,
  deleteV2EmailCustomVerificationEmailTemplatesTemplateNameRoute,
  deleteV2EmailDedicatedIpPoolsPoolNameRoute,
  deleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute,
  deleteV2EmailIdentitiesEmailIdentityRoute,
  deleteV2EmailSuppressionAddressesEmailAddressRoute,
  deleteV2EmailTagsResourceArnTagKeysRoute,
  deleteV2EmailTemplatesTemplateNameRoute,
  getV2EmailAccountRoute,
  getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute,
  getV2EmailConfigurationSetsConfigurationSetNameRoute,
  getV2EmailConfigurationSetsRoute,
  getV2EmailContactListsContactListNameContactsEmailAddressRoute,
  getV2EmailContactListsContactListNameContactsRoute,
  getV2EmailContactListsContactListNameRoute,
  getV2EmailContactListsRoute,
  getV2EmailCustomVerificationEmailTemplatesRoute,
  getV2EmailCustomVerificationEmailTemplatesTemplateNameRoute,
  getV2EmailDedicatedIpPoolsPoolNameRoute,
  getV2EmailDedicatedIpPoolsRoute,
  getV2EmailDedicatedIpsIPRoute,
  getV2EmailDedicatedIpsRoute,
  getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRoute,
  getV2EmailDeliverabilityDashboardCampaignsCampaignIdRoute,
  getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRoute,
  getV2EmailDeliverabilityDashboardRoute,
  getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRoute,
  getV2EmailDeliverabilityDashboardTestReportsReportIdRoute,
  getV2EmailDeliverabilityDashboardTestReportsRoute,
  getV2EmailIdentitiesEmailIdentityPoliciesRoute,
  getV2EmailIdentitiesEmailIdentityRoute,
  getV2EmailIdentitiesRoute,
  getV2EmailImportJobsJobIdRoute,
  getV2EmailImportJobsRoute,
  getV2EmailSuppressionAddressesEmailAddressRoute,
  getV2EmailSuppressionAddressesRoute,
  getV2EmailTagsResourceArnRoute,
  getV2EmailTemplatesRoute,
  getV2EmailTemplatesTemplateNameRoute,
  postV2EmailAccountDetailsRoute,
  postV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute,
  postV2EmailConfigurationSetsRoute,
  postV2EmailContactListsContactListNameContactsRoute,
  postV2EmailContactListsRoute,
  postV2EmailCustomVerificationEmailTemplatesRoute,
  postV2EmailDedicatedIpPoolsRoute,
  postV2EmailDeliverabilityDashboardTestRoute,
  postV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute,
  postV2EmailIdentitiesRoute,
  postV2EmailImportJobsRoute,
  postV2EmailMetricsBatchRoute,
  postV2EmailOutboundBulkEmailsRoute,
  postV2EmailOutboundCustomVerificationEmailsRoute,
  postV2EmailOutboundEmailsRoute,
  postV2EmailTagsRoute,
  postV2EmailTemplatesRoute,
  postV2EmailTemplatesTemplateNameRenderRoute,
  postV2EmailVdmRecommendationsRoute,
  putV1EmailIdentitiesEmailIdentityDkimSigningRoute,
  putV2EmailAccountDedicatedIpsWarmupRoute,
  putV2EmailAccountSendingRoute,
  putV2EmailAccountSuppressionRoute,
  putV2EmailAccountVdmRoute,
  putV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRoute,
  putV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
  putV2EmailConfigurationSetsConfigurationSetNameReputationOptionsRoute,
  putV2EmailConfigurationSetsConfigurationSetNameSendingRoute,
  putV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsRoute,
  putV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsRoute,
  putV2EmailConfigurationSetsConfigurationSetNameVdmOptionsRoute,
  putV2EmailContactListsContactListNameContactsEmailAddressRoute,
  putV2EmailContactListsContactListNameRoute,
  putV2EmailCustomVerificationEmailTemplatesTemplateNameRoute,
  putV2EmailDedicatedIpPoolsPoolNameScalingRoute,
  putV2EmailDedicatedIpsIPPoolRoute,
  putV2EmailDedicatedIpsIPWarmupRoute,
  putV2EmailDeliverabilityDashboardRoute,
  putV2EmailIdentitiesEmailIdentityConfigurationSetRoute,
  putV2EmailIdentitiesEmailIdentityDkimRoute,
  putV2EmailIdentitiesEmailIdentityFeedbackRoute,
  putV2EmailIdentitiesEmailIdentityMailFromRoute,
  putV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute,
  putV2EmailSuppressionAddressesRoute,
  putV2EmailTemplatesTemplateNameRoute,
} from './routes'
import {
  deleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRouteHandler,
  deleteV2EmailConfigurationSetsConfigurationSetNameRouteHandler,
  deleteV2EmailContactListsContactListNameContactsEmailAddressRouteHandler,
  deleteV2EmailContactListsContactListNameRouteHandler,
  deleteV2EmailCustomVerificationEmailTemplatesTemplateNameRouteHandler,
  deleteV2EmailDedicatedIpPoolsPoolNameRouteHandler,
  deleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRouteHandler,
  deleteV2EmailIdentitiesEmailIdentityRouteHandler,
  deleteV2EmailSuppressionAddressesEmailAddressRouteHandler,
  deleteV2EmailTagsResourceArnTagKeysRouteHandler,
  deleteV2EmailTemplatesTemplateNameRouteHandler,
  getV2EmailAccountRouteHandler,
  getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRouteHandler,
  getV2EmailConfigurationSetsConfigurationSetNameRouteHandler,
  getV2EmailConfigurationSetsRouteHandler,
  getV2EmailContactListsContactListNameContactsEmailAddressRouteHandler,
  getV2EmailContactListsContactListNameContactsRouteHandler,
  getV2EmailContactListsContactListNameRouteHandler,
  getV2EmailContactListsRouteHandler,
  getV2EmailCustomVerificationEmailTemplatesRouteHandler,
  getV2EmailCustomVerificationEmailTemplatesTemplateNameRouteHandler,
  getV2EmailDedicatedIpPoolsPoolNameRouteHandler,
  getV2EmailDedicatedIpPoolsRouteHandler,
  getV2EmailDedicatedIpsIPRouteHandler,
  getV2EmailDedicatedIpsRouteHandler,
  getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRouteHandler,
  getV2EmailDeliverabilityDashboardCampaignsCampaignIdRouteHandler,
  getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRouteHandler,
  getV2EmailDeliverabilityDashboardRouteHandler,
  getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRouteHandler,
  getV2EmailDeliverabilityDashboardTestReportsReportIdRouteHandler,
  getV2EmailDeliverabilityDashboardTestReportsRouteHandler,
  getV2EmailIdentitiesEmailIdentityPoliciesRouteHandler,
  getV2EmailIdentitiesEmailIdentityRouteHandler,
  getV2EmailIdentitiesRouteHandler,
  getV2EmailImportJobsJobIdRouteHandler,
  getV2EmailImportJobsRouteHandler,
  getV2EmailSuppressionAddressesEmailAddressRouteHandler,
  getV2EmailSuppressionAddressesRouteHandler,
  getV2EmailTagsResourceArnRouteHandler,
  getV2EmailTemplatesRouteHandler,
  getV2EmailTemplatesTemplateNameRouteHandler,
  postV2EmailAccountDetailsRouteHandler,
  postV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRouteHandler,
  postV2EmailConfigurationSetsRouteHandler,
  postV2EmailContactListsContactListNameContactsRouteHandler,
  postV2EmailContactListsRouteHandler,
  postV2EmailCustomVerificationEmailTemplatesRouteHandler,
  postV2EmailDedicatedIpPoolsRouteHandler,
  postV2EmailDeliverabilityDashboardTestRouteHandler,
  postV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRouteHandler,
  postV2EmailIdentitiesRouteHandler,
  postV2EmailImportJobsRouteHandler,
  postV2EmailMetricsBatchRouteHandler,
  postV2EmailOutboundBulkEmailsRouteHandler,
  postV2EmailOutboundCustomVerificationEmailsRouteHandler,
  postV2EmailOutboundEmailsRouteHandler,
  postV2EmailTagsRouteHandler,
  postV2EmailTemplatesRouteHandler,
  postV2EmailTemplatesTemplateNameRenderRouteHandler,
  postV2EmailVdmRecommendationsRouteHandler,
  putV1EmailIdentitiesEmailIdentityDkimSigningRouteHandler,
  putV2EmailAccountDedicatedIpsWarmupRouteHandler,
  putV2EmailAccountSendingRouteHandler,
  putV2EmailAccountSuppressionRouteHandler,
  putV2EmailAccountVdmRouteHandler,
  putV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRouteHandler,
  putV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRouteHandler,
  putV2EmailConfigurationSetsConfigurationSetNameReputationOptionsRouteHandler,
  putV2EmailConfigurationSetsConfigurationSetNameSendingRouteHandler,
  putV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsRouteHandler,
  putV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsRouteHandler,
  putV2EmailConfigurationSetsConfigurationSetNameVdmOptionsRouteHandler,
  putV2EmailContactListsContactListNameContactsEmailAddressRouteHandler,
  putV2EmailContactListsContactListNameRouteHandler,
  putV2EmailCustomVerificationEmailTemplatesTemplateNameRouteHandler,
  putV2EmailDedicatedIpPoolsPoolNameScalingRouteHandler,
  putV2EmailDedicatedIpsIPPoolRouteHandler,
  putV2EmailDedicatedIpsIPWarmupRouteHandler,
  putV2EmailDeliverabilityDashboardRouteHandler,
  putV2EmailIdentitiesEmailIdentityConfigurationSetRouteHandler,
  putV2EmailIdentitiesEmailIdentityDkimRouteHandler,
  putV2EmailIdentitiesEmailIdentityFeedbackRouteHandler,
  putV2EmailIdentitiesEmailIdentityMailFromRouteHandler,
  putV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRouteHandler,
  putV2EmailSuppressionAddressesRouteHandler,
  putV2EmailTemplatesTemplateNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2EmailMetricsBatchRoute, postV2EmailMetricsBatchRouteHandler)
  .openapi(postV2EmailConfigurationSetsRoute, postV2EmailConfigurationSetsRouteHandler)
  .openapi(getV2EmailConfigurationSetsRoute, getV2EmailConfigurationSetsRouteHandler)
  .openapi(
    postV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute,
    postV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRouteHandler,
  )
  .openapi(
    getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute,
    getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRouteHandler,
  )
  .openapi(
    postV2EmailContactListsContactListNameContactsRoute,
    postV2EmailContactListsContactListNameContactsRouteHandler,
  )
  .openapi(
    getV2EmailContactListsContactListNameContactsRoute,
    getV2EmailContactListsContactListNameContactsRouteHandler,
  )
  .openapi(postV2EmailContactListsRoute, postV2EmailContactListsRouteHandler)
  .openapi(getV2EmailContactListsRoute, getV2EmailContactListsRouteHandler)
  .openapi(
    postV2EmailCustomVerificationEmailTemplatesRoute,
    postV2EmailCustomVerificationEmailTemplatesRouteHandler,
  )
  .openapi(
    getV2EmailCustomVerificationEmailTemplatesRoute,
    getV2EmailCustomVerificationEmailTemplatesRouteHandler,
  )
  .openapi(postV2EmailDedicatedIpPoolsRoute, postV2EmailDedicatedIpPoolsRouteHandler)
  .openapi(getV2EmailDedicatedIpPoolsRoute, getV2EmailDedicatedIpPoolsRouteHandler)
  .openapi(
    postV2EmailDeliverabilityDashboardTestRoute,
    postV2EmailDeliverabilityDashboardTestRouteHandler,
  )
  .openapi(postV2EmailIdentitiesRoute, postV2EmailIdentitiesRouteHandler)
  .openapi(getV2EmailIdentitiesRoute, getV2EmailIdentitiesRouteHandler)
  .openapi(
    postV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute,
    postV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRouteHandler,
  )
  .openapi(
    deleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute,
    deleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRouteHandler,
  )
  .openapi(
    putV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute,
    putV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRouteHandler,
  )
  .openapi(postV2EmailTemplatesRoute, postV2EmailTemplatesRouteHandler)
  .openapi(getV2EmailTemplatesRoute, getV2EmailTemplatesRouteHandler)
  .openapi(postV2EmailImportJobsRoute, postV2EmailImportJobsRouteHandler)
  .openapi(getV2EmailImportJobsRoute, getV2EmailImportJobsRouteHandler)
  .openapi(
    deleteV2EmailConfigurationSetsConfigurationSetNameRoute,
    deleteV2EmailConfigurationSetsConfigurationSetNameRouteHandler,
  )
  .openapi(
    getV2EmailConfigurationSetsConfigurationSetNameRoute,
    getV2EmailConfigurationSetsConfigurationSetNameRouteHandler,
  )
  .openapi(
    deleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
    deleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRouteHandler,
  )
  .openapi(
    putV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
    putV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRouteHandler,
  )
  .openapi(
    deleteV2EmailContactListsContactListNameContactsEmailAddressRoute,
    deleteV2EmailContactListsContactListNameContactsEmailAddressRouteHandler,
  )
  .openapi(
    getV2EmailContactListsContactListNameContactsEmailAddressRoute,
    getV2EmailContactListsContactListNameContactsEmailAddressRouteHandler,
  )
  .openapi(
    putV2EmailContactListsContactListNameContactsEmailAddressRoute,
    putV2EmailContactListsContactListNameContactsEmailAddressRouteHandler,
  )
  .openapi(
    deleteV2EmailContactListsContactListNameRoute,
    deleteV2EmailContactListsContactListNameRouteHandler,
  )
  .openapi(
    getV2EmailContactListsContactListNameRoute,
    getV2EmailContactListsContactListNameRouteHandler,
  )
  .openapi(
    putV2EmailContactListsContactListNameRoute,
    putV2EmailContactListsContactListNameRouteHandler,
  )
  .openapi(
    deleteV2EmailCustomVerificationEmailTemplatesTemplateNameRoute,
    deleteV2EmailCustomVerificationEmailTemplatesTemplateNameRouteHandler,
  )
  .openapi(
    getV2EmailCustomVerificationEmailTemplatesTemplateNameRoute,
    getV2EmailCustomVerificationEmailTemplatesTemplateNameRouteHandler,
  )
  .openapi(
    putV2EmailCustomVerificationEmailTemplatesTemplateNameRoute,
    putV2EmailCustomVerificationEmailTemplatesTemplateNameRouteHandler,
  )
  .openapi(
    deleteV2EmailDedicatedIpPoolsPoolNameRoute,
    deleteV2EmailDedicatedIpPoolsPoolNameRouteHandler,
  )
  .openapi(getV2EmailDedicatedIpPoolsPoolNameRoute, getV2EmailDedicatedIpPoolsPoolNameRouteHandler)
  .openapi(
    deleteV2EmailIdentitiesEmailIdentityRoute,
    deleteV2EmailIdentitiesEmailIdentityRouteHandler,
  )
  .openapi(getV2EmailIdentitiesEmailIdentityRoute, getV2EmailIdentitiesEmailIdentityRouteHandler)
  .openapi(deleteV2EmailTemplatesTemplateNameRoute, deleteV2EmailTemplatesTemplateNameRouteHandler)
  .openapi(getV2EmailTemplatesTemplateNameRoute, getV2EmailTemplatesTemplateNameRouteHandler)
  .openapi(putV2EmailTemplatesTemplateNameRoute, putV2EmailTemplatesTemplateNameRouteHandler)
  .openapi(
    deleteV2EmailSuppressionAddressesEmailAddressRoute,
    deleteV2EmailSuppressionAddressesEmailAddressRouteHandler,
  )
  .openapi(
    getV2EmailSuppressionAddressesEmailAddressRoute,
    getV2EmailSuppressionAddressesEmailAddressRouteHandler,
  )
  .openapi(getV2EmailAccountRoute, getV2EmailAccountRouteHandler)
  .openapi(
    getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRoute,
    getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRouteHandler,
  )
  .openapi(getV2EmailDedicatedIpsIPRoute, getV2EmailDedicatedIpsIPRouteHandler)
  .openapi(getV2EmailDedicatedIpsRoute, getV2EmailDedicatedIpsRouteHandler)
  .openapi(getV2EmailDeliverabilityDashboardRoute, getV2EmailDeliverabilityDashboardRouteHandler)
  .openapi(putV2EmailDeliverabilityDashboardRoute, putV2EmailDeliverabilityDashboardRouteHandler)
  .openapi(
    getV2EmailDeliverabilityDashboardTestReportsReportIdRoute,
    getV2EmailDeliverabilityDashboardTestReportsReportIdRouteHandler,
  )
  .openapi(
    getV2EmailDeliverabilityDashboardCampaignsCampaignIdRoute,
    getV2EmailDeliverabilityDashboardCampaignsCampaignIdRouteHandler,
  )
  .openapi(
    getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRoute,
    getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRouteHandler,
  )
  .openapi(
    getV2EmailIdentitiesEmailIdentityPoliciesRoute,
    getV2EmailIdentitiesEmailIdentityPoliciesRouteHandler,
  )
  .openapi(getV2EmailImportJobsJobIdRoute, getV2EmailImportJobsJobIdRouteHandler)
  .openapi(
    getV2EmailDeliverabilityDashboardTestReportsRoute,
    getV2EmailDeliverabilityDashboardTestReportsRouteHandler,
  )
  .openapi(
    getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRoute,
    getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRouteHandler,
  )
  .openapi(postV2EmailVdmRecommendationsRoute, postV2EmailVdmRecommendationsRouteHandler)
  .openapi(getV2EmailSuppressionAddressesRoute, getV2EmailSuppressionAddressesRouteHandler)
  .openapi(putV2EmailSuppressionAddressesRoute, putV2EmailSuppressionAddressesRouteHandler)
  .openapi(getV2EmailTagsResourceArnRoute, getV2EmailTagsResourceArnRouteHandler)
  .openapi(
    putV2EmailAccountDedicatedIpsWarmupRoute,
    putV2EmailAccountDedicatedIpsWarmupRouteHandler,
  )
  .openapi(postV2EmailAccountDetailsRoute, postV2EmailAccountDetailsRouteHandler)
  .openapi(putV2EmailAccountSendingRoute, putV2EmailAccountSendingRouteHandler)
  .openapi(putV2EmailAccountSuppressionRoute, putV2EmailAccountSuppressionRouteHandler)
  .openapi(putV2EmailAccountVdmRoute, putV2EmailAccountVdmRouteHandler)
  .openapi(
    putV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRoute,
    putV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRouteHandler,
  )
  .openapi(
    putV2EmailConfigurationSetsConfigurationSetNameReputationOptionsRoute,
    putV2EmailConfigurationSetsConfigurationSetNameReputationOptionsRouteHandler,
  )
  .openapi(
    putV2EmailConfigurationSetsConfigurationSetNameSendingRoute,
    putV2EmailConfigurationSetsConfigurationSetNameSendingRouteHandler,
  )
  .openapi(
    putV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsRoute,
    putV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsRouteHandler,
  )
  .openapi(
    putV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsRoute,
    putV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsRouteHandler,
  )
  .openapi(
    putV2EmailConfigurationSetsConfigurationSetNameVdmOptionsRoute,
    putV2EmailConfigurationSetsConfigurationSetNameVdmOptionsRouteHandler,
  )
  .openapi(putV2EmailDedicatedIpsIPPoolRoute, putV2EmailDedicatedIpsIPPoolRouteHandler)
  .openapi(
    putV2EmailDedicatedIpPoolsPoolNameScalingRoute,
    putV2EmailDedicatedIpPoolsPoolNameScalingRouteHandler,
  )
  .openapi(putV2EmailDedicatedIpsIPWarmupRoute, putV2EmailDedicatedIpsIPWarmupRouteHandler)
  .openapi(
    putV2EmailIdentitiesEmailIdentityConfigurationSetRoute,
    putV2EmailIdentitiesEmailIdentityConfigurationSetRouteHandler,
  )
  .openapi(
    putV2EmailIdentitiesEmailIdentityDkimRoute,
    putV2EmailIdentitiesEmailIdentityDkimRouteHandler,
  )
  .openapi(
    putV1EmailIdentitiesEmailIdentityDkimSigningRoute,
    putV1EmailIdentitiesEmailIdentityDkimSigningRouteHandler,
  )
  .openapi(
    putV2EmailIdentitiesEmailIdentityFeedbackRoute,
    putV2EmailIdentitiesEmailIdentityFeedbackRouteHandler,
  )
  .openapi(
    putV2EmailIdentitiesEmailIdentityMailFromRoute,
    putV2EmailIdentitiesEmailIdentityMailFromRouteHandler,
  )
  .openapi(postV2EmailOutboundBulkEmailsRoute, postV2EmailOutboundBulkEmailsRouteHandler)
  .openapi(
    postV2EmailOutboundCustomVerificationEmailsRoute,
    postV2EmailOutboundCustomVerificationEmailsRouteHandler,
  )
  .openapi(postV2EmailOutboundEmailsRoute, postV2EmailOutboundEmailsRouteHandler)
  .openapi(postV2EmailTagsRoute, postV2EmailTagsRouteHandler)
  .openapi(
    postV2EmailTemplatesTemplateNameRenderRoute,
    postV2EmailTemplatesTemplateNameRenderRouteHandler,
  )
  .openapi(
    deleteV2EmailTagsResourceArnTagKeysRoute,
    deleteV2EmailTagsResourceArnTagKeysRouteHandler,
  )

export default app

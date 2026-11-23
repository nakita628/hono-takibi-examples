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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2EmailMetricsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailConfigurationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailConfigurationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailContactListsContactListNameContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailContactListsContactListNameContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailContactListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailContactListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailCustomVerificationEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailCustomVerificationEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailDedicatedIpPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailDedicatedIpPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailDeliverabilityDashboardTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailIdentitiesEmailIdentityPoliciesPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailImportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailImportJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmailConfigurationSetsConfigurationSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailConfigurationSetsConfigurationSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV2EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV2EmailContactListsContactListNameContactsEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailContactListsContactListNameContactsEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailContactListsContactListNameContactsEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmailContactListsContactListNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailContactListsContactListNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailContactListsContactListNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmailCustomVerificationEmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailCustomVerificationEmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailCustomVerificationEmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmailDedicatedIpPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailDedicatedIpPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmailIdentitiesEmailIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailIdentitiesEmailIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmailSuppressionAddressesEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailSuppressionAddressesEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailDedicatedIpsIPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailDedicatedIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailDeliverabilityDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailDeliverabilityDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailDeliverabilityDashboardTestReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailDeliverabilityDashboardCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailIdentitiesEmailIdentityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailImportJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailDeliverabilityDashboardTestReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2EmailVdmRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailSuppressionAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailSuppressionAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2EmailTagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailAccountDedicatedIpsWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailAccountDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailAccountSendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailAccountSuppressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailAccountVdmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailConfigurationSetsConfigurationSetNameReputationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailConfigurationSetsConfigurationSetNameSendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailConfigurationSetsConfigurationSetNameSuppressionOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailConfigurationSetsConfigurationSetNameTrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailConfigurationSetsConfigurationSetNameVdmOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailDedicatedIpsIPPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailDedicatedIpPoolsPoolNameScalingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailDedicatedIpsIPWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailIdentitiesEmailIdentityConfigurationSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailIdentitiesEmailIdentityDkimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailIdentitiesEmailIdentityFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2EmailIdentitiesEmailIdentityMailFromRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailOutboundBulkEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailOutboundCustomVerificationEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailOutboundEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2EmailTemplatesTemplateNameRenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2EmailTagsResourceArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })

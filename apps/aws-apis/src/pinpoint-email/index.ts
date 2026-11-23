import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
  deleteV1EmailConfigurationSetsConfigurationSetNameRoute,
  deleteV1EmailDedicatedIpPoolsPoolNameRoute,
  deleteV1EmailIdentitiesEmailIdentityRoute,
  deleteV1EmailTagsResourceArnTagKeysRoute,
  getV1EmailAccountRoute,
  getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute,
  getV1EmailConfigurationSetsConfigurationSetNameRoute,
  getV1EmailConfigurationSetsRoute,
  getV1EmailDedicatedIpPoolsRoute,
  getV1EmailDedicatedIpsIPRoute,
  getV1EmailDedicatedIpsRoute,
  getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRoute,
  getV1EmailDeliverabilityDashboardCampaignsCampaignIdRoute,
  getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRoute,
  getV1EmailDeliverabilityDashboardRoute,
  getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRoute,
  getV1EmailDeliverabilityDashboardTestReportsReportIdRoute,
  getV1EmailDeliverabilityDashboardTestReportsRoute,
  getV1EmailIdentitiesEmailIdentityRoute,
  getV1EmailIdentitiesRoute,
  getV1EmailTagsResourceArnRoute,
  postV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute,
  postV1EmailConfigurationSetsRoute,
  postV1EmailDedicatedIpPoolsRoute,
  postV1EmailDeliverabilityDashboardTestRoute,
  postV1EmailIdentitiesRoute,
  postV1EmailOutboundEmailsRoute,
  postV1EmailTagsRoute,
  putV1EmailAccountDedicatedIpsWarmupRoute,
  putV1EmailAccountSendingRoute,
  putV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRoute,
  putV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
  putV1EmailConfigurationSetsConfigurationSetNameReputationOptionsRoute,
  putV1EmailConfigurationSetsConfigurationSetNameSendingRoute,
  putV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsRoute,
  putV1EmailDedicatedIpsIPPoolRoute,
  putV1EmailDedicatedIpsIPWarmupRoute,
  putV1EmailDeliverabilityDashboardRoute,
  putV1EmailIdentitiesEmailIdentityDkimRoute,
  putV1EmailIdentitiesEmailIdentityFeedbackRoute,
  putV1EmailIdentitiesEmailIdentityMailFromRoute,
} from './routes'
import {
  deleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRouteHandler,
  deleteV1EmailConfigurationSetsConfigurationSetNameRouteHandler,
  deleteV1EmailDedicatedIpPoolsPoolNameRouteHandler,
  deleteV1EmailIdentitiesEmailIdentityRouteHandler,
  deleteV1EmailTagsResourceArnTagKeysRouteHandler,
  getV1EmailAccountRouteHandler,
  getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRouteHandler,
  getV1EmailConfigurationSetsConfigurationSetNameRouteHandler,
  getV1EmailConfigurationSetsRouteHandler,
  getV1EmailDedicatedIpPoolsRouteHandler,
  getV1EmailDedicatedIpsIPRouteHandler,
  getV1EmailDedicatedIpsRouteHandler,
  getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRouteHandler,
  getV1EmailDeliverabilityDashboardCampaignsCampaignIdRouteHandler,
  getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRouteHandler,
  getV1EmailDeliverabilityDashboardRouteHandler,
  getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRouteHandler,
  getV1EmailDeliverabilityDashboardTestReportsReportIdRouteHandler,
  getV1EmailDeliverabilityDashboardTestReportsRouteHandler,
  getV1EmailIdentitiesEmailIdentityRouteHandler,
  getV1EmailIdentitiesRouteHandler,
  getV1EmailTagsResourceArnRouteHandler,
  postV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRouteHandler,
  postV1EmailConfigurationSetsRouteHandler,
  postV1EmailDedicatedIpPoolsRouteHandler,
  postV1EmailDeliverabilityDashboardTestRouteHandler,
  postV1EmailIdentitiesRouteHandler,
  postV1EmailOutboundEmailsRouteHandler,
  postV1EmailTagsRouteHandler,
  putV1EmailAccountDedicatedIpsWarmupRouteHandler,
  putV1EmailAccountSendingRouteHandler,
  putV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRouteHandler,
  putV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRouteHandler,
  putV1EmailConfigurationSetsConfigurationSetNameReputationOptionsRouteHandler,
  putV1EmailConfigurationSetsConfigurationSetNameSendingRouteHandler,
  putV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsRouteHandler,
  putV1EmailDedicatedIpsIPPoolRouteHandler,
  putV1EmailDedicatedIpsIPWarmupRouteHandler,
  putV1EmailDeliverabilityDashboardRouteHandler,
  putV1EmailIdentitiesEmailIdentityDkimRouteHandler,
  putV1EmailIdentitiesEmailIdentityFeedbackRouteHandler,
  putV1EmailIdentitiesEmailIdentityMailFromRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1EmailConfigurationSetsRoute, postV1EmailConfigurationSetsRouteHandler)
  .openapi(getV1EmailConfigurationSetsRoute, getV1EmailConfigurationSetsRouteHandler)
  .openapi(
    postV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute,
    postV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRouteHandler,
  )
  .openapi(
    getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute,
    getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRouteHandler,
  )
  .openapi(postV1EmailDedicatedIpPoolsRoute, postV1EmailDedicatedIpPoolsRouteHandler)
  .openapi(getV1EmailDedicatedIpPoolsRoute, getV1EmailDedicatedIpPoolsRouteHandler)
  .openapi(
    postV1EmailDeliverabilityDashboardTestRoute,
    postV1EmailDeliverabilityDashboardTestRouteHandler,
  )
  .openapi(postV1EmailIdentitiesRoute, postV1EmailIdentitiesRouteHandler)
  .openapi(getV1EmailIdentitiesRoute, getV1EmailIdentitiesRouteHandler)
  .openapi(
    deleteV1EmailConfigurationSetsConfigurationSetNameRoute,
    deleteV1EmailConfigurationSetsConfigurationSetNameRouteHandler,
  )
  .openapi(
    getV1EmailConfigurationSetsConfigurationSetNameRoute,
    getV1EmailConfigurationSetsConfigurationSetNameRouteHandler,
  )
  .openapi(
    deleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
    deleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRouteHandler,
  )
  .openapi(
    putV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
    putV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRouteHandler,
  )
  .openapi(
    deleteV1EmailDedicatedIpPoolsPoolNameRoute,
    deleteV1EmailDedicatedIpPoolsPoolNameRouteHandler,
  )
  .openapi(
    deleteV1EmailIdentitiesEmailIdentityRoute,
    deleteV1EmailIdentitiesEmailIdentityRouteHandler,
  )
  .openapi(getV1EmailIdentitiesEmailIdentityRoute, getV1EmailIdentitiesEmailIdentityRouteHandler)
  .openapi(getV1EmailAccountRoute, getV1EmailAccountRouteHandler)
  .openapi(
    getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRoute,
    getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRouteHandler,
  )
  .openapi(getV1EmailDedicatedIpsIPRoute, getV1EmailDedicatedIpsIPRouteHandler)
  .openapi(getV1EmailDedicatedIpsRoute, getV1EmailDedicatedIpsRouteHandler)
  .openapi(getV1EmailDeliverabilityDashboardRoute, getV1EmailDeliverabilityDashboardRouteHandler)
  .openapi(putV1EmailDeliverabilityDashboardRoute, putV1EmailDeliverabilityDashboardRouteHandler)
  .openapi(
    getV1EmailDeliverabilityDashboardTestReportsReportIdRoute,
    getV1EmailDeliverabilityDashboardTestReportsReportIdRouteHandler,
  )
  .openapi(
    getV1EmailDeliverabilityDashboardCampaignsCampaignIdRoute,
    getV1EmailDeliverabilityDashboardCampaignsCampaignIdRouteHandler,
  )
  .openapi(
    getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRoute,
    getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRouteHandler,
  )
  .openapi(
    getV1EmailDeliverabilityDashboardTestReportsRoute,
    getV1EmailDeliverabilityDashboardTestReportsRouteHandler,
  )
  .openapi(
    getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRoute,
    getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRouteHandler,
  )
  .openapi(getV1EmailTagsResourceArnRoute, getV1EmailTagsResourceArnRouteHandler)
  .openapi(
    putV1EmailAccountDedicatedIpsWarmupRoute,
    putV1EmailAccountDedicatedIpsWarmupRouteHandler,
  )
  .openapi(putV1EmailAccountSendingRoute, putV1EmailAccountSendingRouteHandler)
  .openapi(
    putV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRoute,
    putV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRouteHandler,
  )
  .openapi(
    putV1EmailConfigurationSetsConfigurationSetNameReputationOptionsRoute,
    putV1EmailConfigurationSetsConfigurationSetNameReputationOptionsRouteHandler,
  )
  .openapi(
    putV1EmailConfigurationSetsConfigurationSetNameSendingRoute,
    putV1EmailConfigurationSetsConfigurationSetNameSendingRouteHandler,
  )
  .openapi(
    putV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsRoute,
    putV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsRouteHandler,
  )
  .openapi(putV1EmailDedicatedIpsIPPoolRoute, putV1EmailDedicatedIpsIPPoolRouteHandler)
  .openapi(putV1EmailDedicatedIpsIPWarmupRoute, putV1EmailDedicatedIpsIPWarmupRouteHandler)
  .openapi(
    putV1EmailIdentitiesEmailIdentityDkimRoute,
    putV1EmailIdentitiesEmailIdentityDkimRouteHandler,
  )
  .openapi(
    putV1EmailIdentitiesEmailIdentityFeedbackRoute,
    putV1EmailIdentitiesEmailIdentityFeedbackRouteHandler,
  )
  .openapi(
    putV1EmailIdentitiesEmailIdentityMailFromRoute,
    putV1EmailIdentitiesEmailIdentityMailFromRouteHandler,
  )
  .openapi(postV1EmailOutboundEmailsRoute, postV1EmailOutboundEmailsRouteHandler)
  .openapi(postV1EmailTagsRoute, postV1EmailTagsRouteHandler)
  .openapi(
    deleteV1EmailTagsResourceArnTagKeysRoute,
    deleteV1EmailTagsResourceArnTagKeysRouteHandler,
  )

export default app

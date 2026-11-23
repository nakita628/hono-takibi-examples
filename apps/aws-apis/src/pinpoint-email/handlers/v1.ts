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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1EmailConfigurationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailConfigurationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailConfigurationSetsConfigurationSetNameEventDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailDedicatedIpPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailDedicatedIpPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailDeliverabilityDashboardTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EmailConfigurationSetsConfigurationSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailConfigurationSetsConfigurationSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1EmailConfigurationSetsConfigurationSetNameEventDestinationsEventDestinationNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV1EmailDedicatedIpPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EmailIdentitiesEmailIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailIdentitiesEmailIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailDeliverabilityDashboardBlacklistReportBlacklistItemNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailDedicatedIpsIPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailDedicatedIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailDeliverabilityDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailDeliverabilityDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailDeliverabilityDashboardTestReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailDeliverabilityDashboardCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailDeliverabilityDashboardStatisticsReportDomainStartDateEndDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EmailDeliverabilityDashboardTestReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1EmailDeliverabilityDashboardDomainsSubscribedDomainCampaignsStartDateEndDateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1EmailTagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailAccountDedicatedIpsWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailAccountSendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailConfigurationSetsConfigurationSetNameDeliveryOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailConfigurationSetsConfigurationSetNameReputationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailConfigurationSetsConfigurationSetNameSendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailConfigurationSetsConfigurationSetNameTrackingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailDedicatedIpsIPPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailDedicatedIpsIPWarmupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailIdentitiesEmailIdentityDkimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailIdentitiesEmailIdentityFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EmailIdentitiesEmailIdentityMailFromRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailOutboundEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EmailTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EmailTagsResourceArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })

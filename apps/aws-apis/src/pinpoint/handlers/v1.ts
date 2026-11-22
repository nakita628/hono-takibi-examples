import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppsApplicationIdCampaignsCampaignIdRoute,
  deleteV1AppsApplicationIdChannelsAdmRoute,
  deleteV1AppsApplicationIdChannelsApnsRoute,
  deleteV1AppsApplicationIdChannelsApnsSandboxRoute,
  deleteV1AppsApplicationIdChannelsApnsVoipRoute,
  deleteV1AppsApplicationIdChannelsApnsVoipSandboxRoute,
  deleteV1AppsApplicationIdChannelsBaiduRoute,
  deleteV1AppsApplicationIdChannelsEmailRoute,
  deleteV1AppsApplicationIdChannelsGcmRoute,
  deleteV1AppsApplicationIdChannelsSmsRoute,
  deleteV1AppsApplicationIdChannelsVoiceRoute,
  deleteV1AppsApplicationIdEndpointsEndpointIdRoute,
  deleteV1AppsApplicationIdEventstreamRoute,
  deleteV1AppsApplicationIdJourneysJourneyIdRoute,
  deleteV1AppsApplicationIdRoute,
  deleteV1AppsApplicationIdSegmentsSegmentIdRoute,
  deleteV1AppsApplicationIdUsersUserIdRoute,
  deleteV1RecommendersRecommenderIdRoute,
  deleteV1TagsResourceArnTagKeysRoute,
  deleteV1TemplatesTemplateNameEmailRoute,
  deleteV1TemplatesTemplateNameInappRoute,
  deleteV1TemplatesTemplateNamePushRoute,
  deleteV1TemplatesTemplateNameSmsRoute,
  deleteV1TemplatesTemplateNameVoiceRoute,
  getV1AppsApplicationIdCampaignsCampaignIdActivitiesRoute,
  getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameRoute,
  getV1AppsApplicationIdCampaignsCampaignIdRoute,
  getV1AppsApplicationIdCampaignsCampaignIdVersionsRoute,
  getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionRoute,
  getV1AppsApplicationIdCampaignsRoute,
  getV1AppsApplicationIdChannelsAdmRoute,
  getV1AppsApplicationIdChannelsApnsRoute,
  getV1AppsApplicationIdChannelsApnsSandboxRoute,
  getV1AppsApplicationIdChannelsApnsVoipRoute,
  getV1AppsApplicationIdChannelsApnsVoipSandboxRoute,
  getV1AppsApplicationIdChannelsBaiduRoute,
  getV1AppsApplicationIdChannelsEmailRoute,
  getV1AppsApplicationIdChannelsGcmRoute,
  getV1AppsApplicationIdChannelsRoute,
  getV1AppsApplicationIdChannelsSmsRoute,
  getV1AppsApplicationIdChannelsVoiceRoute,
  getV1AppsApplicationIdEndpointsEndpointIdInappmessagesRoute,
  getV1AppsApplicationIdEndpointsEndpointIdRoute,
  getV1AppsApplicationIdEventstreamRoute,
  getV1AppsApplicationIdJobsExportJobIdRoute,
  getV1AppsApplicationIdJobsExportRoute,
  getV1AppsApplicationIdJobsImportJobIdRoute,
  getV1AppsApplicationIdJobsImportRoute,
  getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsRoute,
  getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsRoute,
  getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameRoute,
  getV1AppsApplicationIdJourneysJourneyIdRoute,
  getV1AppsApplicationIdJourneysRoute,
  getV1AppsApplicationIdKpisDaterangeKpiNameRoute,
  getV1AppsApplicationIdRoute,
  getV1AppsApplicationIdSegmentsRoute,
  getV1AppsApplicationIdSegmentsSegmentIdJobsExportRoute,
  getV1AppsApplicationIdSegmentsSegmentIdJobsImportRoute,
  getV1AppsApplicationIdSegmentsSegmentIdRoute,
  getV1AppsApplicationIdSegmentsSegmentIdVersionsRoute,
  getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionRoute,
  getV1AppsApplicationIdSettingsRoute,
  getV1AppsApplicationIdUsersUserIdRoute,
  getV1AppsRoute,
  getV1RecommendersRecommenderIdRoute,
  getV1RecommendersRoute,
  getV1TagsResourceArnRoute,
  getV1TemplatesRoute,
  getV1TemplatesTemplateNameEmailRoute,
  getV1TemplatesTemplateNameInappRoute,
  getV1TemplatesTemplateNamePushRoute,
  getV1TemplatesTemplateNameSmsRoute,
  getV1TemplatesTemplateNameTemplateTypeVersionsRoute,
  getV1TemplatesTemplateNameVoiceRoute,
  postV1AppsApplicationIdCampaignsRoute,
  postV1AppsApplicationIdEventsRoute,
  postV1AppsApplicationIdEventstreamRoute,
  postV1AppsApplicationIdJobsExportRoute,
  postV1AppsApplicationIdJobsImportRoute,
  postV1AppsApplicationIdJourneysRoute,
  postV1AppsApplicationIdMessagesRoute,
  postV1AppsApplicationIdOtpRoute,
  postV1AppsApplicationIdSegmentsRoute,
  postV1AppsApplicationIdUsersMessagesRoute,
  postV1AppsApplicationIdVerifyOtpRoute,
  postV1AppsRoute,
  postV1PhoneNumberValidateRoute,
  postV1RecommendersRoute,
  postV1TagsResourceArnRoute,
  postV1TemplatesTemplateNameEmailRoute,
  postV1TemplatesTemplateNameInappRoute,
  postV1TemplatesTemplateNamePushRoute,
  postV1TemplatesTemplateNameSmsRoute,
  postV1TemplatesTemplateNameVoiceRoute,
  putV1AppsApplicationIdAttributesAttributeTypeRoute,
  putV1AppsApplicationIdCampaignsCampaignIdRoute,
  putV1AppsApplicationIdChannelsAdmRoute,
  putV1AppsApplicationIdChannelsApnsRoute,
  putV1AppsApplicationIdChannelsApnsSandboxRoute,
  putV1AppsApplicationIdChannelsApnsVoipRoute,
  putV1AppsApplicationIdChannelsApnsVoipSandboxRoute,
  putV1AppsApplicationIdChannelsBaiduRoute,
  putV1AppsApplicationIdChannelsEmailRoute,
  putV1AppsApplicationIdChannelsGcmRoute,
  putV1AppsApplicationIdChannelsSmsRoute,
  putV1AppsApplicationIdChannelsVoiceRoute,
  putV1AppsApplicationIdEndpointsEndpointIdRoute,
  putV1AppsApplicationIdEndpointsRoute,
  putV1AppsApplicationIdJourneysJourneyIdRoute,
  putV1AppsApplicationIdJourneysJourneyIdStateRoute,
  putV1AppsApplicationIdSegmentsSegmentIdRoute,
  putV1AppsApplicationIdSettingsRoute,
  putV1RecommendersRecommenderIdRoute,
  putV1TemplatesTemplateNameEmailRoute,
  putV1TemplatesTemplateNameInappRoute,
  putV1TemplatesTemplateNamePushRoute,
  putV1TemplatesTemplateNameSmsRoute,
  putV1TemplatesTemplateNameTemplateTypeActiveVersionRoute,
  putV1TemplatesTemplateNameVoiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TemplatesTemplateNameEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TemplatesTemplateNameEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TemplatesTemplateNameEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TemplatesTemplateNameEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdJobsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdJobsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdJobsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdJobsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TemplatesTemplateNameInappRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TemplatesTemplateNameInappRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TemplatesTemplateNameInappRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TemplatesTemplateNameInappRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdJourneysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdJourneysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TemplatesTemplateNamePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TemplatesTemplateNamePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TemplatesTemplateNamePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TemplatesTemplateNamePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RecommendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RecommendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TemplatesTemplateNameSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TemplatesTemplateNameSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TemplatesTemplateNameSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TemplatesTemplateNameSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TemplatesTemplateNameVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TemplatesTemplateNameVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TemplatesTemplateNameVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TemplatesTemplateNameVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdChannelsAdmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsAdmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdChannelsAdmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdChannelsApnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsApnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdChannelsApnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdChannelsApnsSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsApnsSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdChannelsApnsSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdChannelsApnsVoipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsApnsVoipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdChannelsApnsVoipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdChannelsApnsVoipSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsApnsVoipSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdChannelsApnsVoipSandboxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdChannelsBaiduRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsBaiduRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdChannelsBaiduRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdChannelsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdChannelsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdEventstreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdEventstreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdEventstreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdChannelsGcmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsGcmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdChannelsGcmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdJourneysJourneyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdJourneysJourneyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdJourneysJourneyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RecommendersRecommenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RecommendersRecommenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1RecommendersRecommenderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdChannelsSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdChannelsSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppsApplicationIdChannelsVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdChannelsVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdKpisDaterangeKpiNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdCampaignsCampaignIdActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdCampaignsCampaignIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdJobsExportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdJobsImportJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdEndpointsEndpointIdInappmessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdSegmentsSegmentIdJobsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdSegmentsSegmentIdJobsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppsApplicationIdSegmentsSegmentIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TemplatesTemplateNameTemplateTypeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PhoneNumberValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdAttributesAttributeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdUsersMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TagsResourceArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AppsApplicationIdJourneysJourneyIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TemplatesTemplateNameTemplateTypeActiveVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppsApplicationIdVerifyOtpRoute, (c) => {
    throw new Error('Not implemented')
  })

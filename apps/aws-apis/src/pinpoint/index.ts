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
} from './routes'
import {
  deleteV1AppsApplicationIdCampaignsCampaignIdRouteHandler,
  deleteV1AppsApplicationIdChannelsAdmRouteHandler,
  deleteV1AppsApplicationIdChannelsApnsRouteHandler,
  deleteV1AppsApplicationIdChannelsApnsSandboxRouteHandler,
  deleteV1AppsApplicationIdChannelsApnsVoipRouteHandler,
  deleteV1AppsApplicationIdChannelsApnsVoipSandboxRouteHandler,
  deleteV1AppsApplicationIdChannelsBaiduRouteHandler,
  deleteV1AppsApplicationIdChannelsEmailRouteHandler,
  deleteV1AppsApplicationIdChannelsGcmRouteHandler,
  deleteV1AppsApplicationIdChannelsSmsRouteHandler,
  deleteV1AppsApplicationIdChannelsVoiceRouteHandler,
  deleteV1AppsApplicationIdEndpointsEndpointIdRouteHandler,
  deleteV1AppsApplicationIdEventstreamRouteHandler,
  deleteV1AppsApplicationIdJourneysJourneyIdRouteHandler,
  deleteV1AppsApplicationIdRouteHandler,
  deleteV1AppsApplicationIdSegmentsSegmentIdRouteHandler,
  deleteV1AppsApplicationIdUsersUserIdRouteHandler,
  deleteV1RecommendersRecommenderIdRouteHandler,
  deleteV1TagsResourceArnTagKeysRouteHandler,
  deleteV1TemplatesTemplateNameEmailRouteHandler,
  deleteV1TemplatesTemplateNameInappRouteHandler,
  deleteV1TemplatesTemplateNamePushRouteHandler,
  deleteV1TemplatesTemplateNameSmsRouteHandler,
  deleteV1TemplatesTemplateNameVoiceRouteHandler,
  getV1AppsApplicationIdCampaignsCampaignIdActivitiesRouteHandler,
  getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameRouteHandler,
  getV1AppsApplicationIdCampaignsCampaignIdRouteHandler,
  getV1AppsApplicationIdCampaignsCampaignIdVersionsRouteHandler,
  getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionRouteHandler,
  getV1AppsApplicationIdCampaignsRouteHandler,
  getV1AppsApplicationIdChannelsAdmRouteHandler,
  getV1AppsApplicationIdChannelsApnsRouteHandler,
  getV1AppsApplicationIdChannelsApnsSandboxRouteHandler,
  getV1AppsApplicationIdChannelsApnsVoipRouteHandler,
  getV1AppsApplicationIdChannelsApnsVoipSandboxRouteHandler,
  getV1AppsApplicationIdChannelsBaiduRouteHandler,
  getV1AppsApplicationIdChannelsEmailRouteHandler,
  getV1AppsApplicationIdChannelsGcmRouteHandler,
  getV1AppsApplicationIdChannelsRouteHandler,
  getV1AppsApplicationIdChannelsSmsRouteHandler,
  getV1AppsApplicationIdChannelsVoiceRouteHandler,
  getV1AppsApplicationIdEndpointsEndpointIdInappmessagesRouteHandler,
  getV1AppsApplicationIdEndpointsEndpointIdRouteHandler,
  getV1AppsApplicationIdEventstreamRouteHandler,
  getV1AppsApplicationIdJobsExportJobIdRouteHandler,
  getV1AppsApplicationIdJobsExportRouteHandler,
  getV1AppsApplicationIdJobsImportJobIdRouteHandler,
  getV1AppsApplicationIdJobsImportRouteHandler,
  getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsRouteHandler,
  getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsRouteHandler,
  getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameRouteHandler,
  getV1AppsApplicationIdJourneysJourneyIdRouteHandler,
  getV1AppsApplicationIdJourneysRouteHandler,
  getV1AppsApplicationIdKpisDaterangeKpiNameRouteHandler,
  getV1AppsApplicationIdRouteHandler,
  getV1AppsApplicationIdSegmentsRouteHandler,
  getV1AppsApplicationIdSegmentsSegmentIdJobsExportRouteHandler,
  getV1AppsApplicationIdSegmentsSegmentIdJobsImportRouteHandler,
  getV1AppsApplicationIdSegmentsSegmentIdRouteHandler,
  getV1AppsApplicationIdSegmentsSegmentIdVersionsRouteHandler,
  getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionRouteHandler,
  getV1AppsApplicationIdSettingsRouteHandler,
  getV1AppsApplicationIdUsersUserIdRouteHandler,
  getV1AppsRouteHandler,
  getV1RecommendersRecommenderIdRouteHandler,
  getV1RecommendersRouteHandler,
  getV1TagsResourceArnRouteHandler,
  getV1TemplatesRouteHandler,
  getV1TemplatesTemplateNameEmailRouteHandler,
  getV1TemplatesTemplateNameInappRouteHandler,
  getV1TemplatesTemplateNamePushRouteHandler,
  getV1TemplatesTemplateNameSmsRouteHandler,
  getV1TemplatesTemplateNameTemplateTypeVersionsRouteHandler,
  getV1TemplatesTemplateNameVoiceRouteHandler,
  postV1AppsApplicationIdCampaignsRouteHandler,
  postV1AppsApplicationIdEventsRouteHandler,
  postV1AppsApplicationIdEventstreamRouteHandler,
  postV1AppsApplicationIdJobsExportRouteHandler,
  postV1AppsApplicationIdJobsImportRouteHandler,
  postV1AppsApplicationIdJourneysRouteHandler,
  postV1AppsApplicationIdMessagesRouteHandler,
  postV1AppsApplicationIdOtpRouteHandler,
  postV1AppsApplicationIdSegmentsRouteHandler,
  postV1AppsApplicationIdUsersMessagesRouteHandler,
  postV1AppsApplicationIdVerifyOtpRouteHandler,
  postV1AppsRouteHandler,
  postV1PhoneNumberValidateRouteHandler,
  postV1RecommendersRouteHandler,
  postV1TagsResourceArnRouteHandler,
  postV1TemplatesTemplateNameEmailRouteHandler,
  postV1TemplatesTemplateNameInappRouteHandler,
  postV1TemplatesTemplateNamePushRouteHandler,
  postV1TemplatesTemplateNameSmsRouteHandler,
  postV1TemplatesTemplateNameVoiceRouteHandler,
  putV1AppsApplicationIdAttributesAttributeTypeRouteHandler,
  putV1AppsApplicationIdCampaignsCampaignIdRouteHandler,
  putV1AppsApplicationIdChannelsAdmRouteHandler,
  putV1AppsApplicationIdChannelsApnsRouteHandler,
  putV1AppsApplicationIdChannelsApnsSandboxRouteHandler,
  putV1AppsApplicationIdChannelsApnsVoipRouteHandler,
  putV1AppsApplicationIdChannelsApnsVoipSandboxRouteHandler,
  putV1AppsApplicationIdChannelsBaiduRouteHandler,
  putV1AppsApplicationIdChannelsEmailRouteHandler,
  putV1AppsApplicationIdChannelsGcmRouteHandler,
  putV1AppsApplicationIdChannelsSmsRouteHandler,
  putV1AppsApplicationIdChannelsVoiceRouteHandler,
  putV1AppsApplicationIdEndpointsEndpointIdRouteHandler,
  putV1AppsApplicationIdEndpointsRouteHandler,
  putV1AppsApplicationIdJourneysJourneyIdRouteHandler,
  putV1AppsApplicationIdJourneysJourneyIdStateRouteHandler,
  putV1AppsApplicationIdSegmentsSegmentIdRouteHandler,
  putV1AppsApplicationIdSettingsRouteHandler,
  putV1RecommendersRecommenderIdRouteHandler,
  putV1TemplatesTemplateNameEmailRouteHandler,
  putV1TemplatesTemplateNameInappRouteHandler,
  putV1TemplatesTemplateNamePushRouteHandler,
  putV1TemplatesTemplateNameSmsRouteHandler,
  putV1TemplatesTemplateNameTemplateTypeActiveVersionRouteHandler,
  putV1TemplatesTemplateNameVoiceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1AppsRoute, postV1AppsRouteHandler)
  .openapi(getV1AppsRoute, getV1AppsRouteHandler)
  .openapi(postV1AppsApplicationIdCampaignsRoute, postV1AppsApplicationIdCampaignsRouteHandler)
  .openapi(getV1AppsApplicationIdCampaignsRoute, getV1AppsApplicationIdCampaignsRouteHandler)
  .openapi(postV1TemplatesTemplateNameEmailRoute, postV1TemplatesTemplateNameEmailRouteHandler)
  .openapi(deleteV1TemplatesTemplateNameEmailRoute, deleteV1TemplatesTemplateNameEmailRouteHandler)
  .openapi(getV1TemplatesTemplateNameEmailRoute, getV1TemplatesTemplateNameEmailRouteHandler)
  .openapi(putV1TemplatesTemplateNameEmailRoute, putV1TemplatesTemplateNameEmailRouteHandler)
  .openapi(postV1AppsApplicationIdJobsExportRoute, postV1AppsApplicationIdJobsExportRouteHandler)
  .openapi(getV1AppsApplicationIdJobsExportRoute, getV1AppsApplicationIdJobsExportRouteHandler)
  .openapi(postV1AppsApplicationIdJobsImportRoute, postV1AppsApplicationIdJobsImportRouteHandler)
  .openapi(getV1AppsApplicationIdJobsImportRoute, getV1AppsApplicationIdJobsImportRouteHandler)
  .openapi(postV1TemplatesTemplateNameInappRoute, postV1TemplatesTemplateNameInappRouteHandler)
  .openapi(deleteV1TemplatesTemplateNameInappRoute, deleteV1TemplatesTemplateNameInappRouteHandler)
  .openapi(getV1TemplatesTemplateNameInappRoute, getV1TemplatesTemplateNameInappRouteHandler)
  .openapi(putV1TemplatesTemplateNameInappRoute, putV1TemplatesTemplateNameInappRouteHandler)
  .openapi(postV1AppsApplicationIdJourneysRoute, postV1AppsApplicationIdJourneysRouteHandler)
  .openapi(getV1AppsApplicationIdJourneysRoute, getV1AppsApplicationIdJourneysRouteHandler)
  .openapi(postV1TemplatesTemplateNamePushRoute, postV1TemplatesTemplateNamePushRouteHandler)
  .openapi(deleteV1TemplatesTemplateNamePushRoute, deleteV1TemplatesTemplateNamePushRouteHandler)
  .openapi(getV1TemplatesTemplateNamePushRoute, getV1TemplatesTemplateNamePushRouteHandler)
  .openapi(putV1TemplatesTemplateNamePushRoute, putV1TemplatesTemplateNamePushRouteHandler)
  .openapi(postV1RecommendersRoute, postV1RecommendersRouteHandler)
  .openapi(getV1RecommendersRoute, getV1RecommendersRouteHandler)
  .openapi(postV1AppsApplicationIdSegmentsRoute, postV1AppsApplicationIdSegmentsRouteHandler)
  .openapi(getV1AppsApplicationIdSegmentsRoute, getV1AppsApplicationIdSegmentsRouteHandler)
  .openapi(postV1TemplatesTemplateNameSmsRoute, postV1TemplatesTemplateNameSmsRouteHandler)
  .openapi(deleteV1TemplatesTemplateNameSmsRoute, deleteV1TemplatesTemplateNameSmsRouteHandler)
  .openapi(getV1TemplatesTemplateNameSmsRoute, getV1TemplatesTemplateNameSmsRouteHandler)
  .openapi(putV1TemplatesTemplateNameSmsRoute, putV1TemplatesTemplateNameSmsRouteHandler)
  .openapi(postV1TemplatesTemplateNameVoiceRoute, postV1TemplatesTemplateNameVoiceRouteHandler)
  .openapi(deleteV1TemplatesTemplateNameVoiceRoute, deleteV1TemplatesTemplateNameVoiceRouteHandler)
  .openapi(getV1TemplatesTemplateNameVoiceRoute, getV1TemplatesTemplateNameVoiceRouteHandler)
  .openapi(putV1TemplatesTemplateNameVoiceRoute, putV1TemplatesTemplateNameVoiceRouteHandler)
  .openapi(
    deleteV1AppsApplicationIdChannelsAdmRoute,
    deleteV1AppsApplicationIdChannelsAdmRouteHandler,
  )
  .openapi(getV1AppsApplicationIdChannelsAdmRoute, getV1AppsApplicationIdChannelsAdmRouteHandler)
  .openapi(putV1AppsApplicationIdChannelsAdmRoute, putV1AppsApplicationIdChannelsAdmRouteHandler)
  .openapi(
    deleteV1AppsApplicationIdChannelsApnsRoute,
    deleteV1AppsApplicationIdChannelsApnsRouteHandler,
  )
  .openapi(getV1AppsApplicationIdChannelsApnsRoute, getV1AppsApplicationIdChannelsApnsRouteHandler)
  .openapi(putV1AppsApplicationIdChannelsApnsRoute, putV1AppsApplicationIdChannelsApnsRouteHandler)
  .openapi(
    deleteV1AppsApplicationIdChannelsApnsSandboxRoute,
    deleteV1AppsApplicationIdChannelsApnsSandboxRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdChannelsApnsSandboxRoute,
    getV1AppsApplicationIdChannelsApnsSandboxRouteHandler,
  )
  .openapi(
    putV1AppsApplicationIdChannelsApnsSandboxRoute,
    putV1AppsApplicationIdChannelsApnsSandboxRouteHandler,
  )
  .openapi(
    deleteV1AppsApplicationIdChannelsApnsVoipRoute,
    deleteV1AppsApplicationIdChannelsApnsVoipRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdChannelsApnsVoipRoute,
    getV1AppsApplicationIdChannelsApnsVoipRouteHandler,
  )
  .openapi(
    putV1AppsApplicationIdChannelsApnsVoipRoute,
    putV1AppsApplicationIdChannelsApnsVoipRouteHandler,
  )
  .openapi(
    deleteV1AppsApplicationIdChannelsApnsVoipSandboxRoute,
    deleteV1AppsApplicationIdChannelsApnsVoipSandboxRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdChannelsApnsVoipSandboxRoute,
    getV1AppsApplicationIdChannelsApnsVoipSandboxRouteHandler,
  )
  .openapi(
    putV1AppsApplicationIdChannelsApnsVoipSandboxRoute,
    putV1AppsApplicationIdChannelsApnsVoipSandboxRouteHandler,
  )
  .openapi(deleteV1AppsApplicationIdRoute, deleteV1AppsApplicationIdRouteHandler)
  .openapi(getV1AppsApplicationIdRoute, getV1AppsApplicationIdRouteHandler)
  .openapi(
    deleteV1AppsApplicationIdChannelsBaiduRoute,
    deleteV1AppsApplicationIdChannelsBaiduRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdChannelsBaiduRoute,
    getV1AppsApplicationIdChannelsBaiduRouteHandler,
  )
  .openapi(
    putV1AppsApplicationIdChannelsBaiduRoute,
    putV1AppsApplicationIdChannelsBaiduRouteHandler,
  )
  .openapi(
    deleteV1AppsApplicationIdCampaignsCampaignIdRoute,
    deleteV1AppsApplicationIdCampaignsCampaignIdRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdCampaignsCampaignIdRoute,
    getV1AppsApplicationIdCampaignsCampaignIdRouteHandler,
  )
  .openapi(
    putV1AppsApplicationIdCampaignsCampaignIdRoute,
    putV1AppsApplicationIdCampaignsCampaignIdRouteHandler,
  )
  .openapi(
    deleteV1AppsApplicationIdChannelsEmailRoute,
    deleteV1AppsApplicationIdChannelsEmailRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdChannelsEmailRoute,
    getV1AppsApplicationIdChannelsEmailRouteHandler,
  )
  .openapi(
    putV1AppsApplicationIdChannelsEmailRoute,
    putV1AppsApplicationIdChannelsEmailRouteHandler,
  )
  .openapi(
    deleteV1AppsApplicationIdEndpointsEndpointIdRoute,
    deleteV1AppsApplicationIdEndpointsEndpointIdRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdEndpointsEndpointIdRoute,
    getV1AppsApplicationIdEndpointsEndpointIdRouteHandler,
  )
  .openapi(
    putV1AppsApplicationIdEndpointsEndpointIdRoute,
    putV1AppsApplicationIdEndpointsEndpointIdRouteHandler,
  )
  .openapi(
    deleteV1AppsApplicationIdEventstreamRoute,
    deleteV1AppsApplicationIdEventstreamRouteHandler,
  )
  .openapi(getV1AppsApplicationIdEventstreamRoute, getV1AppsApplicationIdEventstreamRouteHandler)
  .openapi(postV1AppsApplicationIdEventstreamRoute, postV1AppsApplicationIdEventstreamRouteHandler)
  .openapi(
    deleteV1AppsApplicationIdChannelsGcmRoute,
    deleteV1AppsApplicationIdChannelsGcmRouteHandler,
  )
  .openapi(getV1AppsApplicationIdChannelsGcmRoute, getV1AppsApplicationIdChannelsGcmRouteHandler)
  .openapi(putV1AppsApplicationIdChannelsGcmRoute, putV1AppsApplicationIdChannelsGcmRouteHandler)
  .openapi(
    deleteV1AppsApplicationIdJourneysJourneyIdRoute,
    deleteV1AppsApplicationIdJourneysJourneyIdRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdJourneysJourneyIdRoute,
    getV1AppsApplicationIdJourneysJourneyIdRouteHandler,
  )
  .openapi(
    putV1AppsApplicationIdJourneysJourneyIdRoute,
    putV1AppsApplicationIdJourneysJourneyIdRouteHandler,
  )
  .openapi(deleteV1RecommendersRecommenderIdRoute, deleteV1RecommendersRecommenderIdRouteHandler)
  .openapi(getV1RecommendersRecommenderIdRoute, getV1RecommendersRecommenderIdRouteHandler)
  .openapi(putV1RecommendersRecommenderIdRoute, putV1RecommendersRecommenderIdRouteHandler)
  .openapi(
    deleteV1AppsApplicationIdSegmentsSegmentIdRoute,
    deleteV1AppsApplicationIdSegmentsSegmentIdRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdSegmentsSegmentIdRoute,
    getV1AppsApplicationIdSegmentsSegmentIdRouteHandler,
  )
  .openapi(
    putV1AppsApplicationIdSegmentsSegmentIdRoute,
    putV1AppsApplicationIdSegmentsSegmentIdRouteHandler,
  )
  .openapi(
    deleteV1AppsApplicationIdChannelsSmsRoute,
    deleteV1AppsApplicationIdChannelsSmsRouteHandler,
  )
  .openapi(getV1AppsApplicationIdChannelsSmsRoute, getV1AppsApplicationIdChannelsSmsRouteHandler)
  .openapi(putV1AppsApplicationIdChannelsSmsRoute, putV1AppsApplicationIdChannelsSmsRouteHandler)
  .openapi(
    deleteV1AppsApplicationIdUsersUserIdRoute,
    deleteV1AppsApplicationIdUsersUserIdRouteHandler,
  )
  .openapi(getV1AppsApplicationIdUsersUserIdRoute, getV1AppsApplicationIdUsersUserIdRouteHandler)
  .openapi(
    deleteV1AppsApplicationIdChannelsVoiceRoute,
    deleteV1AppsApplicationIdChannelsVoiceRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdChannelsVoiceRoute,
    getV1AppsApplicationIdChannelsVoiceRouteHandler,
  )
  .openapi(
    putV1AppsApplicationIdChannelsVoiceRoute,
    putV1AppsApplicationIdChannelsVoiceRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdKpisDaterangeKpiNameRoute,
    getV1AppsApplicationIdKpisDaterangeKpiNameRouteHandler,
  )
  .openapi(getV1AppsApplicationIdSettingsRoute, getV1AppsApplicationIdSettingsRouteHandler)
  .openapi(putV1AppsApplicationIdSettingsRoute, putV1AppsApplicationIdSettingsRouteHandler)
  .openapi(
    getV1AppsApplicationIdCampaignsCampaignIdActivitiesRoute,
    getV1AppsApplicationIdCampaignsCampaignIdActivitiesRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameRoute,
    getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionRoute,
    getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdCampaignsCampaignIdVersionsRoute,
    getV1AppsApplicationIdCampaignsCampaignIdVersionsRouteHandler,
  )
  .openapi(getV1AppsApplicationIdChannelsRoute, getV1AppsApplicationIdChannelsRouteHandler)
  .openapi(
    getV1AppsApplicationIdJobsExportJobIdRoute,
    getV1AppsApplicationIdJobsExportJobIdRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdJobsImportJobIdRoute,
    getV1AppsApplicationIdJobsImportJobIdRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdEndpointsEndpointIdInappmessagesRoute,
    getV1AppsApplicationIdEndpointsEndpointIdInappmessagesRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameRoute,
    getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsRoute,
    getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsRoute,
    getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdSegmentsSegmentIdJobsExportRoute,
    getV1AppsApplicationIdSegmentsSegmentIdJobsExportRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdSegmentsSegmentIdJobsImportRoute,
    getV1AppsApplicationIdSegmentsSegmentIdJobsImportRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionRoute,
    getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionRouteHandler,
  )
  .openapi(
    getV1AppsApplicationIdSegmentsSegmentIdVersionsRoute,
    getV1AppsApplicationIdSegmentsSegmentIdVersionsRouteHandler,
  )
  .openapi(getV1TagsResourceArnRoute, getV1TagsResourceArnRouteHandler)
  .openapi(postV1TagsResourceArnRoute, postV1TagsResourceArnRouteHandler)
  .openapi(
    getV1TemplatesTemplateNameTemplateTypeVersionsRoute,
    getV1TemplatesTemplateNameTemplateTypeVersionsRouteHandler,
  )
  .openapi(getV1TemplatesRoute, getV1TemplatesRouteHandler)
  .openapi(postV1PhoneNumberValidateRoute, postV1PhoneNumberValidateRouteHandler)
  .openapi(postV1AppsApplicationIdEventsRoute, postV1AppsApplicationIdEventsRouteHandler)
  .openapi(
    putV1AppsApplicationIdAttributesAttributeTypeRoute,
    putV1AppsApplicationIdAttributesAttributeTypeRouteHandler,
  )
  .openapi(postV1AppsApplicationIdMessagesRoute, postV1AppsApplicationIdMessagesRouteHandler)
  .openapi(postV1AppsApplicationIdOtpRoute, postV1AppsApplicationIdOtpRouteHandler)
  .openapi(
    postV1AppsApplicationIdUsersMessagesRoute,
    postV1AppsApplicationIdUsersMessagesRouteHandler,
  )
  .openapi(deleteV1TagsResourceArnTagKeysRoute, deleteV1TagsResourceArnTagKeysRouteHandler)
  .openapi(putV1AppsApplicationIdEndpointsRoute, putV1AppsApplicationIdEndpointsRouteHandler)
  .openapi(
    putV1AppsApplicationIdJourneysJourneyIdStateRoute,
    putV1AppsApplicationIdJourneysJourneyIdStateRouteHandler,
  )
  .openapi(
    putV1TemplatesTemplateNameTemplateTypeActiveVersionRoute,
    putV1TemplatesTemplateNameTemplateTypeActiveVersionRouteHandler,
  )
  .openapi(postV1AppsApplicationIdVerifyOtpRoute, postV1AppsApplicationIdVerifyOtpRouteHandler)

export default app

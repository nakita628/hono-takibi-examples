import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const postV1AppsRouteHandler: RouteHandler<typeof postV1AppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsRouteHandler: RouteHandler<typeof getV1AppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdCampaignsRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdCampaignsRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdCampaignsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TemplatesTemplateNameEmailRouteHandler: RouteHandler<
  typeof postV1TemplatesTemplateNameEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TemplatesTemplateNameEmailRouteHandler: RouteHandler<
  typeof deleteV1TemplatesTemplateNameEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TemplatesTemplateNameEmailRouteHandler: RouteHandler<
  typeof getV1TemplatesTemplateNameEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TemplatesTemplateNameEmailRouteHandler: RouteHandler<
  typeof putV1TemplatesTemplateNameEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdJobsExportRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdJobsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdJobsExportRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdJobsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdJobsImportRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdJobsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdJobsImportRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdJobsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TemplatesTemplateNameInappRouteHandler: RouteHandler<
  typeof postV1TemplatesTemplateNameInappRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TemplatesTemplateNameInappRouteHandler: RouteHandler<
  typeof deleteV1TemplatesTemplateNameInappRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TemplatesTemplateNameInappRouteHandler: RouteHandler<
  typeof getV1TemplatesTemplateNameInappRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TemplatesTemplateNameInappRouteHandler: RouteHandler<
  typeof putV1TemplatesTemplateNameInappRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdJourneysRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdJourneysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdJourneysRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdJourneysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TemplatesTemplateNamePushRouteHandler: RouteHandler<
  typeof postV1TemplatesTemplateNamePushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TemplatesTemplateNamePushRouteHandler: RouteHandler<
  typeof deleteV1TemplatesTemplateNamePushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TemplatesTemplateNamePushRouteHandler: RouteHandler<
  typeof getV1TemplatesTemplateNamePushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TemplatesTemplateNamePushRouteHandler: RouteHandler<
  typeof putV1TemplatesTemplateNamePushRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RecommendersRouteHandler: RouteHandler<typeof postV1RecommendersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1RecommendersRouteHandler: RouteHandler<typeof getV1RecommendersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdSegmentsRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdSegmentsRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TemplatesTemplateNameSmsRouteHandler: RouteHandler<
  typeof postV1TemplatesTemplateNameSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TemplatesTemplateNameSmsRouteHandler: RouteHandler<
  typeof deleteV1TemplatesTemplateNameSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TemplatesTemplateNameSmsRouteHandler: RouteHandler<
  typeof getV1TemplatesTemplateNameSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TemplatesTemplateNameSmsRouteHandler: RouteHandler<
  typeof putV1TemplatesTemplateNameSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TemplatesTemplateNameVoiceRouteHandler: RouteHandler<
  typeof postV1TemplatesTemplateNameVoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TemplatesTemplateNameVoiceRouteHandler: RouteHandler<
  typeof deleteV1TemplatesTemplateNameVoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TemplatesTemplateNameVoiceRouteHandler: RouteHandler<
  typeof getV1TemplatesTemplateNameVoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TemplatesTemplateNameVoiceRouteHandler: RouteHandler<
  typeof putV1TemplatesTemplateNameVoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdChannelsAdmRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdChannelsAdmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsAdmRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsAdmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdChannelsAdmRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdChannelsAdmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdChannelsApnsRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdChannelsApnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsApnsRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsApnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdChannelsApnsRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdChannelsApnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdChannelsApnsSandboxRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdChannelsApnsSandboxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsApnsSandboxRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsApnsSandboxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdChannelsApnsSandboxRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdChannelsApnsSandboxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdChannelsApnsVoipRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdChannelsApnsVoipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsApnsVoipRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsApnsVoipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdChannelsApnsVoipRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdChannelsApnsVoipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdChannelsApnsVoipSandboxRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdChannelsApnsVoipSandboxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsApnsVoipSandboxRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsApnsVoipSandboxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdChannelsApnsVoipSandboxRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdChannelsApnsVoipSandboxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdChannelsBaiduRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdChannelsBaiduRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsBaiduRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsBaiduRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdChannelsBaiduRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdChannelsBaiduRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdCampaignsCampaignIdRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdCampaignsCampaignIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdChannelsEmailRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdChannelsEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsEmailRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdChannelsEmailRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdChannelsEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdEndpointsEndpointIdRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdEndpointsEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdEventstreamRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdEventstreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdEventstreamRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdEventstreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdEventstreamRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdEventstreamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdChannelsGcmRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdChannelsGcmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsGcmRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsGcmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdChannelsGcmRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdChannelsGcmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdJourneysJourneyIdRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdJourneysJourneyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdJourneysJourneyIdRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdJourneysJourneyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdJourneysJourneyIdRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdJourneysJourneyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1RecommendersRecommenderIdRouteHandler: RouteHandler<
  typeof deleteV1RecommendersRecommenderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1RecommendersRecommenderIdRouteHandler: RouteHandler<
  typeof getV1RecommendersRecommenderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1RecommendersRecommenderIdRouteHandler: RouteHandler<
  typeof putV1RecommendersRecommenderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdChannelsSmsRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdChannelsSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsSmsRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdChannelsSmsRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdChannelsSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdUsersUserIdRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdUsersUserIdRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdUsersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AppsApplicationIdChannelsVoiceRouteHandler: RouteHandler<
  typeof deleteV1AppsApplicationIdChannelsVoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsVoiceRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsVoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdChannelsVoiceRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdChannelsVoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdKpisDaterangeKpiNameRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdKpisDaterangeKpiNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdSettingsRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdSettingsRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdCampaignsCampaignIdActivitiesRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdCampaignsCampaignIdActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdCampaignsCampaignIdKpisDaterangeKpiNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdCampaignsCampaignIdVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdCampaignsCampaignIdVersionsRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdCampaignsCampaignIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdChannelsRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdJobsExportJobIdRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdJobsExportJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdJobsImportJobIdRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdJobsImportJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdEndpointsEndpointIdInappmessagesRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdEndpointsEndpointIdInappmessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdJourneysJourneyIdKpisDaterangeKpiNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdJourneysJourneyIdActivitiesJourneyActivityIdExecutionMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdJourneysJourneyIdExecutionMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdSegmentsSegmentIdJobsExportRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdSegmentsSegmentIdJobsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdSegmentsSegmentIdJobsImportRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdSegmentsSegmentIdJobsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdSegmentsSegmentIdVersionsVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AppsApplicationIdSegmentsSegmentIdVersionsRouteHandler: RouteHandler<
  typeof getV1AppsApplicationIdSegmentsSegmentIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TagsResourceArnRouteHandler: RouteHandler<
  typeof getV1TagsResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TagsResourceArnRouteHandler: RouteHandler<
  typeof postV1TagsResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TemplatesTemplateNameTemplateTypeVersionsRouteHandler: RouteHandler<
  typeof getV1TemplatesTemplateNameTemplateTypeVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TemplatesRouteHandler: RouteHandler<typeof getV1TemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1PhoneNumberValidateRouteHandler: RouteHandler<
  typeof postV1PhoneNumberValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdEventsRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdAttributesAttributeTypeRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdAttributesAttributeTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdMessagesRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdOtpRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdOtpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdUsersMessagesRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdUsersMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TagsResourceArnTagKeysRouteHandler: RouteHandler<
  typeof deleteV1TagsResourceArnTagKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdEndpointsRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AppsApplicationIdJourneysJourneyIdStateRouteHandler: RouteHandler<
  typeof putV1AppsApplicationIdJourneysJourneyIdStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TemplatesTemplateNameTemplateTypeActiveVersionRouteHandler: RouteHandler<
  typeof putV1TemplatesTemplateNameTemplateTypeActiveVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AppsApplicationIdVerifyOtpRouteHandler: RouteHandler<
  typeof postV1AppsApplicationIdVerifyOtpRoute
> = async (c) => {
  throw new Error('Not implemented')
}

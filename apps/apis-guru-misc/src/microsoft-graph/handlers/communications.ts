import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCommunicationsCallRecordsCallRecordIdRoute,
  deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute,
  deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute,
  deleteCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute,
  deleteCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
  deleteCommunicationsCallsCallIdOperationsCommsOperationIdRoute,
  deleteCommunicationsCallsCallIdParticipantsParticipantIdRoute,
  deleteCommunicationsCallsCallIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  deleteCommunicationsPresencesPresenceIdRoute,
  getCommunicationsCallRecordsCallRecordIdRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsCountRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsCountRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRoute,
  getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute,
  getCommunicationsCallRecordsCountRoute,
  getCommunicationsCallRecordsMicrosoftGraphCallRecordsGetDirectRoutingCallsFromDateTimeFromDateTimeToDateTimeToDateTimeRoute,
  getCommunicationsCallRecordsMicrosoftGraphCallRecordsGetPstnCallsFromDateTimeFromDateTimeToDateTimeToDateTimeRoute,
  getCommunicationsCallRecordsRoute,
  getCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute,
  getCommunicationsCallsCallIdAudioRoutingGroupsCountRoute,
  getCommunicationsCallsCallIdAudioRoutingGroupsRoute,
  getCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
  getCommunicationsCallsCallIdContentSharingSessionsCountRoute,
  getCommunicationsCallsCallIdContentSharingSessionsRoute,
  getCommunicationsCallsCallIdOperationsCommsOperationIdRoute,
  getCommunicationsCallsCallIdOperationsCountRoute,
  getCommunicationsCallsCallIdOperationsRoute,
  getCommunicationsCallsCallIdParticipantsCountRoute,
  getCommunicationsCallsCallIdParticipantsParticipantIdRoute,
  getCommunicationsCallsCallIdParticipantsRoute,
  getCommunicationsCallsCallIdRoute,
  getCommunicationsCallsCountRoute,
  getCommunicationsCallsRoute,
  getCommunicationsOnlineMeetingsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  getCommunicationsOnlineMeetingsRoute,
  getCommunicationsPresencesCountRoute,
  getCommunicationsPresencesPresenceIdRoute,
  getCommunicationsPresencesRoute,
  getCommunicationsRoute,
  patchCommunicationsCallRecordsCallRecordIdRoute,
  patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute,
  patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute,
  patchCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute,
  patchCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
  patchCommunicationsCallsCallIdOperationsCommsOperationIdRoute,
  patchCommunicationsCallsCallIdParticipantsParticipantIdRoute,
  patchCommunicationsCallsCallIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  patchCommunicationsPresencesPresenceIdRoute,
  patchCommunicationsRoute,
  postCommunicationsCallRecordsCallRecordIdSessionsRoute,
  postCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRoute,
  postCommunicationsCallRecordsRoute,
  postCommunicationsCallsCallIdAudioRoutingGroupsRoute,
  postCommunicationsCallsCallIdContentSharingSessionsRoute,
  postCommunicationsCallsCallIdMicrosoftGraphAddLargeGalleryViewRoute,
  postCommunicationsCallsCallIdMicrosoftGraphAnswerRoute,
  postCommunicationsCallsCallIdMicrosoftGraphCancelMediaProcessingRoute,
  postCommunicationsCallsCallIdMicrosoftGraphChangeScreenSharingRoleRoute,
  postCommunicationsCallsCallIdMicrosoftGraphKeepAliveRoute,
  postCommunicationsCallsCallIdMicrosoftGraphMuteRoute,
  postCommunicationsCallsCallIdMicrosoftGraphPlayPromptRoute,
  postCommunicationsCallsCallIdMicrosoftGraphRecordResponseRoute,
  postCommunicationsCallsCallIdMicrosoftGraphRedirectRoute,
  postCommunicationsCallsCallIdMicrosoftGraphRejectRoute,
  postCommunicationsCallsCallIdMicrosoftGraphSubscribeToToneRoute,
  postCommunicationsCallsCallIdMicrosoftGraphTransferRoute,
  postCommunicationsCallsCallIdMicrosoftGraphUnmuteRoute,
  postCommunicationsCallsCallIdMicrosoftGraphUpdateRecordingStatusRoute,
  postCommunicationsCallsCallIdOperationsRoute,
  postCommunicationsCallsCallIdParticipantsMicrosoftGraphInviteRoute,
  postCommunicationsCallsCallIdParticipantsParticipantIdMicrosoftGraphMuteRoute,
  postCommunicationsCallsCallIdParticipantsParticipantIdMicrosoftGraphStartHoldMusicRoute,
  postCommunicationsCallsCallIdParticipantsParticipantIdMicrosoftGraphStopHoldMusicRoute,
  postCommunicationsCallsCallIdParticipantsRoute,
  postCommunicationsCallsMicrosoftGraphLogTeleconferenceDeviceQualityRoute,
  postCommunicationsCallsRoute,
  postCommunicationsMicrosoftGraphGetPresencesByUserIdRoute,
  postCommunicationsOnlineMeetingsMicrosoftGraphCreateOrGetRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  postCommunicationsOnlineMeetingsRoute,
  postCommunicationsPresencesPresenceIdMicrosoftGraphClearPresenceRoute,
  postCommunicationsPresencesPresenceIdMicrosoftGraphClearUserPreferredPresenceRoute,
  postCommunicationsPresencesPresenceIdMicrosoftGraphSetPresenceRoute,
  postCommunicationsPresencesPresenceIdMicrosoftGraphSetUserPreferredPresenceRoute,
  postCommunicationsPresencesRoute,
  putCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
} from '../routes'

export const getCommunicationsRouteHandler: RouteHandler<typeof getCommunicationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsRouteHandler: RouteHandler<
  typeof patchCommunicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallRecordsRouteHandler: RouteHandler<
  typeof postCommunicationsCallRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsMicrosoftGraphCallRecordsGetDirectRoutingCallsFromDateTimeFromDateTimeToDateTimeToDateTimeRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsMicrosoftGraphCallRecordsGetDirectRoutingCallsFromDateTimeFromDateTimeToDateTimeToDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsMicrosoftGraphCallRecordsGetPstnCallsFromDateTimeFromDateTimeToDateTimeToDateTimeRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsMicrosoftGraphCallRecordsGetPstnCallsFromDateTimeFromDateTimeToDateTimeToDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsCallRecordsCallRecordIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallRecordsCallRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsCallRecordsCallRecordIdRouteHandler: RouteHandler<
  typeof patchCommunicationsCallRecordsCallRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdSessionsRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallRecordsCallRecordIdSessionsRouteHandler: RouteHandler<
  typeof postCommunicationsCallRecordsCallRecordIdSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdSessionsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdSessionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdSessionsSessionIdRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdRouteHandler: RouteHandler<
  typeof patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRouteHandler: RouteHandler<
  typeof postCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsRouteHandler: RouteHandler<
  typeof getCommunicationsCallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsRouteHandler: RouteHandler<
  typeof postCommunicationsCallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsMicrosoftGraphLogTeleconferenceDeviceQualityRouteHandler: RouteHandler<
  typeof postCommunicationsCallsMicrosoftGraphLogTeleconferenceDeviceQualityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsCallsCallIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallsCallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsCallsCallIdRouteHandler: RouteHandler<
  typeof patchCommunicationsCallsCallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdAudioRoutingGroupsRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdAudioRoutingGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdAudioRoutingGroupsRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdAudioRoutingGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdAudioRoutingGroupsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdAudioRoutingGroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRouteHandler: RouteHandler<
  typeof patchCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdContentSharingSessionsRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdContentSharingSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdContentSharingSessionsRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdContentSharingSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdContentSharingSessionsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdContentSharingSessionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRouteHandler: RouteHandler<
  typeof patchCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphAddLargeGalleryViewRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphAddLargeGalleryViewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphAnswerRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphAnswerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphCancelMediaProcessingRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphCancelMediaProcessingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphChangeScreenSharingRoleRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphChangeScreenSharingRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphKeepAliveRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphKeepAliveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphMuteRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphPlayPromptRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphPlayPromptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphRecordResponseRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphRecordResponseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphRedirectRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphRedirectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphRejectRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphSubscribeToToneRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphSubscribeToToneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphTransferRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphUnmuteRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphUnmuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMicrosoftGraphUpdateRecordingStatusRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMicrosoftGraphUpdateRecordingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdOperationsRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdOperationsRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdOperationsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdOperationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsCallsCallIdOperationsCommsOperationIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallsCallIdOperationsCommsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdOperationsCommsOperationIdRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdOperationsCommsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsCallsCallIdOperationsCommsOperationIdRouteHandler: RouteHandler<
  typeof patchCommunicationsCallsCallIdOperationsCommsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdParticipantsRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdParticipantsRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdParticipantsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdParticipantsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdParticipantsMicrosoftGraphInviteRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdParticipantsMicrosoftGraphInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsCallsCallIdParticipantsParticipantIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallsCallIdParticipantsParticipantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdParticipantsParticipantIdRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdParticipantsParticipantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsCallsCallIdParticipantsParticipantIdRouteHandler: RouteHandler<
  typeof patchCommunicationsCallsCallIdParticipantsParticipantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdParticipantsParticipantIdMicrosoftGraphMuteRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdParticipantsParticipantIdMicrosoftGraphMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdParticipantsParticipantIdMicrosoftGraphStartHoldMusicRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdParticipantsParticipantIdMicrosoftGraphStartHoldMusicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdParticipantsParticipantIdMicrosoftGraphStopHoldMusicRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdParticipantsParticipantIdMicrosoftGraphStopHoldMusicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsMicrosoftGraphGetPresencesByUserIdRouteHandler: RouteHandler<
  typeof postCommunicationsMicrosoftGraphGetPresencesByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingsMicrosoftGraphCreateOrGetRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingsMicrosoftGraphCreateOrGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingsOnlineMeetingIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingsOnlineMeetingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRouteHandler: RouteHandler<
  typeof putCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsPresencesRouteHandler: RouteHandler<
  typeof getCommunicationsPresencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsPresencesCountRouteHandler: RouteHandler<
  typeof getCommunicationsPresencesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsPresencesPresenceIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsPresencesPresenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsPresencesPresenceIdRouteHandler: RouteHandler<
  typeof getCommunicationsPresencesPresenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsPresencesPresenceIdRouteHandler: RouteHandler<
  typeof patchCommunicationsPresencesPresenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdMicrosoftGraphClearPresenceRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdMicrosoftGraphClearPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdMicrosoftGraphClearUserPreferredPresenceRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdMicrosoftGraphClearUserPreferredPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdMicrosoftGraphSetPresenceRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdMicrosoftGraphSetPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdMicrosoftGraphSetUserPreferredPresenceRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdMicrosoftGraphSetUserPreferredPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

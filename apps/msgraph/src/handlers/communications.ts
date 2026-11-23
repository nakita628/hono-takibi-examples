import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  deleteCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  deleteCommunicationsAdhocCallsAdhocCallIdRoute,
  deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
  deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  deleteCommunicationsCallRecordsCallRecordIdOrganizerV2Route,
  deleteCommunicationsCallRecordsCallRecordIdParticipantsV2ParticipantIdRoute,
  deleteCommunicationsCallRecordsCallRecordIdRoute,
  deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute,
  deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute,
  deleteCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute,
  deleteCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
  deleteCommunicationsCallsCallIdOperationsCommsOperationIdRoute,
  deleteCommunicationsCallsCallIdParticipantsParticipantIdRoute,
  deleteCommunicationsCallsCallIdRoute,
  deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute,
  deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsEngagementConversationMessageReactionIdRoute,
  deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1Route,
  deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRoute,
  deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingAttendeeReportRoute,
  deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdRoute,
  deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsEngagementConversationMessageReactionIdRoute,
  deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute,
  deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdRoute,
  deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
  deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  deleteCommunicationsPresencesPresenceIdRoute,
  getCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  getCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  getCommunicationsAdhocCallsAdhocCallIdRecordingsCountRoute,
  getCommunicationsAdhocCallsAdhocCallIdRecordingsDeltaRoute,
  getCommunicationsAdhocCallsAdhocCallIdRecordingsRoute,
  getCommunicationsAdhocCallsAdhocCallIdRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsCountRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsDeltaRoute,
  getCommunicationsAdhocCallsAdhocCallIdTranscriptsRoute,
  getCommunicationsAdhocCallsCountRoute,
  getCommunicationsAdhocCallsGetAllRecordingsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getCommunicationsAdhocCallsGetAllTranscriptsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getCommunicationsAdhocCallsRoute,
  getCommunicationsCallRecordsCallRecordIdOrganizerV2Route,
  getCommunicationsCallRecordsCallRecordIdParticipantsV2CountRoute,
  getCommunicationsCallRecordsCallRecordIdParticipantsV2ParticipantIdRoute,
  getCommunicationsCallRecordsCallRecordIdParticipantsV2Route,
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
  getCommunicationsGetAllOnlineMeetingMessagesRoute,
  getCommunicationsOnlineMeetingConversationsCountRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesCountRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdConversationRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsCountRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesCountRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ConversationRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsCountRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsEngagementConversationMessageReactionIdRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReplyToRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1Route,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReplyToRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingAttendeeReportRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterConversationRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsCountRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsEngagementConversationMessageReactionIdRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesCountRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdConversationRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsCountRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReplyToRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReplyToRoute,
  getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRoute,
  getCommunicationsOnlineMeetingConversationsRoute,
  getCommunicationsOnlineMeetingsCountRoute,
  getCommunicationsOnlineMeetingsGetAllRecordingsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getCommunicationsOnlineMeetingsGetAllTranscriptsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdGetVirtualAppointmentJoinWebUrlRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsDeltaRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCountRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsDeltaRoute,
  getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsRoute,
  getCommunicationsOnlineMeetingsRoute,
  getCommunicationsPresencesCountRoute,
  getCommunicationsPresencesPresenceIdRoute,
  getCommunicationsPresencesRoute,
  getCommunicationsRoute,
  patchCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute,
  patchCommunicationsAdhocCallsAdhocCallIdRoute,
  patchCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute,
  patchCommunicationsCallRecordsCallRecordIdOrganizerV2Route,
  patchCommunicationsCallRecordsCallRecordIdParticipantsV2ParticipantIdRoute,
  patchCommunicationsCallRecordsCallRecordIdRoute,
  patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute,
  patchCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute,
  patchCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute,
  patchCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
  patchCommunicationsCallsCallIdOperationsCommsOperationIdRoute,
  patchCommunicationsCallsCallIdParticipantsParticipantIdRoute,
  patchCommunicationsCallsCallIdRoute,
  patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute,
  patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsEngagementConversationMessageReactionIdRoute,
  patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1Route,
  patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRoute,
  patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdRoute,
  patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsEngagementConversationMessageReactionIdRoute,
  patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute,
  patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdRoute,
  patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdRoute,
  patchCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute,
  patchCommunicationsPresencesPresenceIdRoute,
  patchCommunicationsRoute,
  postCommunicationsAdhocCallsAdhocCallIdRecordingsRoute,
  postCommunicationsAdhocCallsAdhocCallIdTranscriptsRoute,
  postCommunicationsAdhocCallsRoute,
  postCommunicationsCallRecordsCallRecordIdParticipantsV2Route,
  postCommunicationsCallRecordsCallRecordIdSessionsRoute,
  postCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsRoute,
  postCommunicationsCallRecordsRoute,
  postCommunicationsCallsCallIdAddLargeGalleryViewRoute,
  postCommunicationsCallsCallIdAnswerRoute,
  postCommunicationsCallsCallIdAudioRoutingGroupsRoute,
  postCommunicationsCallsCallIdCancelMediaProcessingRoute,
  postCommunicationsCallsCallIdChangeScreenSharingRoleRoute,
  postCommunicationsCallsCallIdContentSharingSessionsRoute,
  postCommunicationsCallsCallIdKeepAliveRoute,
  postCommunicationsCallsCallIdMuteRoute,
  postCommunicationsCallsCallIdOperationsRoute,
  postCommunicationsCallsCallIdParticipantsInviteRoute,
  postCommunicationsCallsCallIdParticipantsParticipantIdMuteRoute,
  postCommunicationsCallsCallIdParticipantsParticipantIdStartHoldMusicRoute,
  postCommunicationsCallsCallIdParticipantsParticipantIdStopHoldMusicRoute,
  postCommunicationsCallsCallIdParticipantsRoute,
  postCommunicationsCallsCallIdPlayPromptRoute,
  postCommunicationsCallsCallIdRecordResponseRoute,
  postCommunicationsCallsCallIdRedirectRoute,
  postCommunicationsCallsCallIdRejectRoute,
  postCommunicationsCallsCallIdSendDtmfTonesRoute,
  postCommunicationsCallsCallIdSubscribeToToneRoute,
  postCommunicationsCallsCallIdTransferRoute,
  postCommunicationsCallsCallIdUnmuteRoute,
  postCommunicationsCallsCallIdUpdateRecordingStatusRoute,
  postCommunicationsCallsLogTeleconferenceDeviceQualityRoute,
  postCommunicationsCallsRoute,
  postCommunicationsGetPresencesByUserIdRoute,
  postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsRoute,
  postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsRoute,
  postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesRoute,
  postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesRoute,
  postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsRoute,
  postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsRoute,
  postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesRoute,
  postCommunicationsOnlineMeetingConversationsRoute,
  postCommunicationsOnlineMeetingsCreateOrGetRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentReminderSmsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentSmsRoute,
  postCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsRoute,
  postCommunicationsOnlineMeetingsRoute,
  postCommunicationsPresencesPresenceIdClearAutomaticLocationRoute,
  postCommunicationsPresencesPresenceIdClearLocationRoute,
  postCommunicationsPresencesPresenceIdClearPresenceRoute,
  postCommunicationsPresencesPresenceIdClearUserPreferredPresenceRoute,
  postCommunicationsPresencesPresenceIdSetAutomaticLocationRoute,
  postCommunicationsPresencesPresenceIdSetManualLocationRoute,
  postCommunicationsPresencesPresenceIdSetPresenceRoute,
  postCommunicationsPresencesPresenceIdSetStatusMessageRoute,
  postCommunicationsPresencesPresenceIdSetUserPreferredPresenceRoute,
  postCommunicationsPresencesRoute,
  putCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute,
  putCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute,
  putCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute,
  putCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingAttendeeReportRoute,
  putCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute,
  putCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute,
  putCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute,
  putCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute,
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

export const getCommunicationsAdhocCallsRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsAdhocCallsRouteHandler: RouteHandler<
  typeof postCommunicationsAdhocCallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsAdhocCallsAdhocCallIdRouteHandler: RouteHandler<
  typeof patchCommunicationsAdhocCallsAdhocCallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsAdhocCallsAdhocCallIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsAdhocCallsAdhocCallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdRecordingsRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdRecordingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsAdhocCallsAdhocCallIdRecordingsRouteHandler: RouteHandler<
  typeof postCommunicationsAdhocCallsAdhocCallIdRecordingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRouteHandler: RouteHandler<
  typeof patchCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRouteHandler: RouteHandler<
  typeof putCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRouteHandler: RouteHandler<
  typeof deleteCommunicationsAdhocCallsAdhocCallIdRecordingsCallRecordingIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdRecordingsCountRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdRecordingsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdRecordingsDeltaRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdRecordingsDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdTranscriptsRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdTranscriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsAdhocCallsAdhocCallIdTranscriptsRouteHandler: RouteHandler<
  typeof postCommunicationsAdhocCallsAdhocCallIdTranscriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRouteHandler: RouteHandler<
  typeof patchCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRouteHandler: RouteHandler<
  typeof putCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRouteHandler: RouteHandler<
  typeof deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRouteHandler: RouteHandler<
  typeof putCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRouteHandler: RouteHandler<
  typeof deleteCommunicationsAdhocCallsAdhocCallIdTranscriptsCallTranscriptIdMetadataContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdTranscriptsCountRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdTranscriptsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsAdhocCallIdTranscriptsDeltaRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsAdhocCallIdTranscriptsDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsCountRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsGetAllRecordingsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsGetAllRecordingsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsAdhocCallsGetAllTranscriptsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRouteHandler: RouteHandler<
  typeof getCommunicationsAdhocCallsGetAllTranscriptsUserIdUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute
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

export const deleteCommunicationsCallRecordsCallRecordIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallRecordsCallRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdOrganizerV2RouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdOrganizerV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsCallRecordsCallRecordIdOrganizerV2RouteHandler: RouteHandler<
  typeof patchCommunicationsCallRecordsCallRecordIdOrganizerV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsCallRecordsCallRecordIdOrganizerV2RouteHandler: RouteHandler<
  typeof deleteCommunicationsCallRecordsCallRecordIdOrganizerV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdParticipantsV2RouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdParticipantsV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallRecordsCallRecordIdParticipantsV2RouteHandler: RouteHandler<
  typeof postCommunicationsCallRecordsCallRecordIdParticipantsV2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdParticipantsV2ParticipantIdRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdParticipantsV2ParticipantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsCallRecordsCallRecordIdParticipantsV2ParticipantIdRouteHandler: RouteHandler<
  typeof patchCommunicationsCallRecordsCallRecordIdParticipantsV2ParticipantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsCallRecordsCallRecordIdParticipantsV2ParticipantIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallRecordsCallRecordIdParticipantsV2ParticipantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdParticipantsV2CountRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdParticipantsV2CountRoute
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

export const deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdRoute
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

export const deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdSessionsSessionIdSegmentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallRecordsCallRecordIdSessionsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallRecordsCallRecordIdSessionsCountRoute
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

export const deleteCommunicationsCallsCallIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallsCallIdRoute
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

export const deleteCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdAudioRoutingGroupsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdAudioRoutingGroupsCountRoute
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

export const deleteCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdContentSharingSessionsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdContentSharingSessionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdAddLargeGalleryViewRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdAddLargeGalleryViewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdAnswerRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdAnswerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdCancelMediaProcessingRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdCancelMediaProcessingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdChangeScreenSharingRoleRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdChangeScreenSharingRoleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdKeepAliveRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdKeepAliveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdMuteRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdPlayPromptRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdPlayPromptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdRecordResponseRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdRecordResponseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdRedirectRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdRedirectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdRejectRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdSendDtmfTonesRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdSendDtmfTonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdSubscribeToToneRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdSubscribeToToneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdTransferRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdUnmuteRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdUnmuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdUpdateRecordingStatusRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdUpdateRecordingStatusRoute
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

export const deleteCommunicationsCallsCallIdOperationsCommsOperationIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallsCallIdOperationsCommsOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdOperationsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdOperationsCountRoute
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

export const deleteCommunicationsCallsCallIdParticipantsParticipantIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsCallsCallIdParticipantsParticipantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdParticipantsParticipantIdMuteRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdParticipantsParticipantIdMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdParticipantsParticipantIdStartHoldMusicRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdParticipantsParticipantIdStartHoldMusicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdParticipantsParticipantIdStopHoldMusicRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdParticipantsParticipantIdStopHoldMusicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCallIdParticipantsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCallIdParticipantsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsCallIdParticipantsInviteRouteHandler: RouteHandler<
  typeof postCommunicationsCallsCallIdParticipantsInviteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsCallsCountRouteHandler: RouteHandler<
  typeof getCommunicationsCallsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsCallsLogTeleconferenceDeviceQualityRouteHandler: RouteHandler<
  typeof postCommunicationsCallsLogTeleconferenceDeviceQualityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsGetAllOnlineMeetingMessagesRouteHandler: RouteHandler<
  typeof getCommunicationsGetAllOnlineMeetingMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsGetPresencesByUserIdRouteHandler: RouteHandler<
  typeof postCommunicationsGetPresencesByUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingConversationsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingConversationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdConversationRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdConversationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReactionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1RouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1RouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1RouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ConversationRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ConversationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReactionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReplyToRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesEngagementConversationMessageId1ReplyToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdRepliesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReplyToRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesEngagementConversationMessageIdReplyToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdMessagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingAttendeeReportRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingAttendeeReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingAttendeeReportRouteHandler: RouteHandler<
  typeof putCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingAttendeeReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingAttendeeReportRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdOnlineMeetingAttendeeReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterConversationRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterConversationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReactionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdConversationRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdConversationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsEngagementConversationMessageReactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReactionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReplyToRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesEngagementConversationMessageIdReplyToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterRepliesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReplyToRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsOnlineMeetingEngagementConversationIdStarterReplyToRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingConversationsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingConversationsCountRoute
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

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdRoute
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

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdRoute
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

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsAttendanceRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsMeetingAttendanceReportIdAttendanceRecordsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdAttendanceReportsCountRoute
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

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdAttendeeReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdGetVirtualAppointmentJoinWebUrlRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdGetVirtualAppointmentJoinWebUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentReminderSmsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentReminderSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentSmsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingsOnlineMeetingIdSendVirtualAppointmentSmsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRouteHandler: RouteHandler<
  typeof putCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCallRecordingIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsDeltaRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdRecordingsDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRouteHandler: RouteHandler<
  typeof patchCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRouteHandler: RouteHandler<
  typeof putCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRouteHandler: RouteHandler<
  typeof putCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRouteHandler: RouteHandler<
  typeof deleteCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCallTranscriptIdMetadataContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsDeltaRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsOnlineMeetingIdTranscriptsDeltaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsCountRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsOnlineMeetingsCreateOrGetRouteHandler: RouteHandler<
  typeof postCommunicationsOnlineMeetingsCreateOrGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsGetAllRecordingsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsGetAllRecordingsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsOnlineMeetingsGetAllTranscriptsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRouteHandler: RouteHandler<
  typeof getCommunicationsOnlineMeetingsGetAllTranscriptsMeetingOrganizerUserIdMeetingOrganizerUserIdStartDateTimeStartDateTimeEndDateTimeEndDateTimeRoute
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

export const deleteCommunicationsPresencesPresenceIdRouteHandler: RouteHandler<
  typeof deleteCommunicationsPresencesPresenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdClearAutomaticLocationRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdClearAutomaticLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdClearLocationRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdClearLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdClearPresenceRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdClearPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdClearUserPreferredPresenceRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdClearUserPreferredPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdSetAutomaticLocationRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdSetAutomaticLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdSetManualLocationRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdSetManualLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdSetPresenceRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdSetPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdSetStatusMessageRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdSetStatusMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCommunicationsPresencesPresenceIdSetUserPreferredPresenceRouteHandler: RouteHandler<
  typeof postCommunicationsPresencesPresenceIdSetUserPreferredPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommunicationsPresencesCountRouteHandler: RouteHandler<
  typeof getCommunicationsPresencesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute,
  deleteCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
  deleteCommunicationsCallsCallIdOperationsCommsOperationIdRoute,
  deleteCommunicationsCallsCallIdParticipantsParticipantIdRoute,
  deleteCommunicationsCallsCallIdRoute,
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
  patchCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute,
  patchCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
  patchCommunicationsCallsCallIdOperationsCommsOperationIdRoute,
  patchCommunicationsCallsCallIdParticipantsParticipantIdRoute,
  patchCommunicationsCallsCallIdRoute,
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
} from '../routes'

const app = new OpenAPIHono()

export const communicationsCallHandler = app
  .openapi(getCommunicationsCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsCallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsCallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdAudioRoutingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdAudioRoutingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsCallsCallIdAudioRoutingGroupsAudioRoutingGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdAudioRoutingGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdContentSharingSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdContentSharingSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteCommunicationsCallsCallIdContentSharingSessionsContentSharingSessionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCommunicationsCallsCallIdContentSharingSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdAddLargeGalleryViewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdAnswerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdCancelMediaProcessingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdChangeScreenSharingRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdKeepAliveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdPlayPromptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdRecordResponseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdRedirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdSendDtmfTonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdSubscribeToToneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdUnmuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdUpdateRecordingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdOperationsCommsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsCallsCallIdOperationsCommsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsCallsCallIdOperationsCommsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdParticipantsParticipantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommunicationsCallsCallIdParticipantsParticipantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommunicationsCallsCallIdParticipantsParticipantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdParticipantsParticipantIdMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdParticipantsParticipantIdStartHoldMusicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdParticipantsParticipantIdStopHoldMusicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCallIdParticipantsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsCallIdParticipantsInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationsCallsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommunicationsCallsLogTeleconferenceDeviceQualityRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCallsCallControlIdActionsAiAssistantAddMessagesRoute,
  postCallsCallControlIdActionsAiAssistantJoinRoute,
  postCallsCallControlIdActionsAiAssistantStartRoute,
  postCallsCallControlIdActionsAiAssistantStopRoute,
  postCallsCallControlIdActionsAnswerRoute,
  postCallsCallControlIdActionsBridgeRoute,
  postCallsCallControlIdActionsConversationRelayStartRoute,
  postCallsCallControlIdActionsConversationRelayStopRoute,
  postCallsCallControlIdActionsEnqueueRoute,
  postCallsCallControlIdActionsForkStartRoute,
  postCallsCallControlIdActionsForkStopRoute,
  postCallsCallControlIdActionsGatherRoute,
  postCallsCallControlIdActionsGatherStopRoute,
  postCallsCallControlIdActionsGatherUsingAiRoute,
  postCallsCallControlIdActionsGatherUsingAudioRoute,
  postCallsCallControlIdActionsGatherUsingSpeakRoute,
  postCallsCallControlIdActionsHangupRoute,
  postCallsCallControlIdActionsLeaveQueueRoute,
  postCallsCallControlIdActionsPayRoute,
  postCallsCallControlIdActionsPlaybackStartRoute,
  postCallsCallControlIdActionsPlaybackStopRoute,
  postCallsCallControlIdActionsRecordPauseRoute,
  postCallsCallControlIdActionsRecordResumeRoute,
  postCallsCallControlIdActionsRecordStartRoute,
  postCallsCallControlIdActionsRecordStopRoute,
  postCallsCallControlIdActionsReferRoute,
  postCallsCallControlIdActionsRejectRoute,
  postCallsCallControlIdActionsSendDtmfRoute,
  postCallsCallControlIdActionsSendSipInfoRoute,
  postCallsCallControlIdActionsSiprecStartRoute,
  postCallsCallControlIdActionsSiprecStopRoute,
  postCallsCallControlIdActionsSpeakRoute,
  postCallsCallControlIdActionsStreamingStartRoute,
  postCallsCallControlIdActionsStreamingStopRoute,
  postCallsCallControlIdActionsSuppressionStartRoute,
  postCallsCallControlIdActionsSuppressionStopRoute,
  postCallsCallControlIdActionsSwitchSupervisorRoleRoute,
  postCallsCallControlIdActionsTranscriptionStartRoute,
  postCallsCallControlIdActionsTranscriptionStopRoute,
  postCallsCallControlIdActionsTransferRoute,
  postCallsRoute,
  putCallsCallControlIdActionsClientStateUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callCommandsHandler = app
  .openapi(postCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsAiAssistantAddMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsAiAssistantJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsAiAssistantStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsAiAssistantStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsAnswerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsBridgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCallsCallControlIdActionsClientStateUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsConversationRelayStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsConversationRelayStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsEnqueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsForkStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsForkStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsGatherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsGatherStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsGatherUsingAiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsGatherUsingAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsGatherUsingSpeakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsHangupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsLeaveQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsPayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsPlaybackStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsPlaybackStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsRecordPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsRecordResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsRecordStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsRecordStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsReferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsSendDtmfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsSendSipInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsSiprecStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsSiprecStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsSpeakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsStreamingStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsStreamingStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsSuppressionStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsSuppressionStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsSwitchSupervisorRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsTranscriptionStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsTranscriptionStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsTransferRoute, (c) => {
    throw new Error('Not implemented')
  })

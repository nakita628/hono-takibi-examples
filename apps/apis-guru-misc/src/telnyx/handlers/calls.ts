import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCallsCallControlIdRoute,
  postCallsCallControlIdActionsAnswerRoute,
  postCallsCallControlIdActionsBridgeRoute,
  postCallsCallControlIdActionsEnqueueRoute,
  postCallsCallControlIdActionsForkStartRoute,
  postCallsCallControlIdActionsForkStopRoute,
  postCallsCallControlIdActionsGatherStopRoute,
  postCallsCallControlIdActionsGatherUsingAudioRoute,
  postCallsCallControlIdActionsGatherUsingSpeakRoute,
  postCallsCallControlIdActionsHangupRoute,
  postCallsCallControlIdActionsLeaveQueueRoute,
  postCallsCallControlIdActionsPlaybackStartRoute,
  postCallsCallControlIdActionsPlaybackStopRoute,
  postCallsCallControlIdActionsRecordPauseRoute,
  postCallsCallControlIdActionsRecordResumeRoute,
  postCallsCallControlIdActionsRecordStartRoute,
  postCallsCallControlIdActionsRecordStopRoute,
  postCallsCallControlIdActionsReferRoute,
  postCallsCallControlIdActionsRejectRoute,
  postCallsCallControlIdActionsSendDtmfRoute,
  postCallsCallControlIdActionsSpeakRoute,
  postCallsCallControlIdActionsTranscriptionStartRoute,
  postCallsCallControlIdActionsTranscriptionStopRoute,
  postCallsCallControlIdActionsTransferRoute,
  postCallsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callsHandler = app
  .openapi(postCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallsCallControlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsAnswerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsCallControlIdActionsBridgeRoute, (c) => {
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
  .openapi(postCallsCallControlIdActionsGatherStopRoute, (c) => {
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
  .openapi(postCallsCallControlIdActionsSpeakRoute, (c) => {
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

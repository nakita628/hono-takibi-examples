import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConferencesConferenceIdParticipantsRoute,
  getConferencesIdParticipantsParticipantIdRoute,
  getConferencesIdRoute,
  getConferencesRoute,
  patchConferencesIdParticipantsParticipantIdRoute,
  postConferencesIdActionsEndRoute,
  postConferencesIdActionsGatherUsingAudioRoute,
  postConferencesIdActionsHoldRoute,
  postConferencesIdActionsJoinRoute,
  postConferencesIdActionsLeaveRoute,
  postConferencesIdActionsMuteRoute,
  postConferencesIdActionsPlayRoute,
  postConferencesIdActionsRecordPauseRoute,
  postConferencesIdActionsRecordResumeRoute,
  postConferencesIdActionsRecordStartRoute,
  postConferencesIdActionsRecordStopRoute,
  postConferencesIdActionsSendDtmfRoute,
  postConferencesIdActionsSpeakRoute,
  postConferencesIdActionsStopRoute,
  postConferencesIdActionsUnholdRoute,
  postConferencesIdActionsUnmuteRoute,
  postConferencesIdActionsUpdateRoute,
  postConferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conferenceCommandsHandler = app
  .openapi(getConferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConferencesConferenceIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsGatherUsingAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsPlayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsRecordPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsRecordResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsRecordStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsRecordStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsSendDtmfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsSpeakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsUnholdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsUnmuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConferencesIdParticipantsParticipantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchConferencesIdParticipantsParticipantIdRoute, (c) => {
    throw new Error('Not implemented')
  })

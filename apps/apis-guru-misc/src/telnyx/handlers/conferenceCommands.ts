import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConferencesConferenceIdParticipantsRoute,
  getConferencesIdRoute,
  getConferencesRoute,
  postConferencesIdActionsDialParticipantRoute,
  postConferencesIdActionsHoldRoute,
  postConferencesIdActionsJoinRoute,
  postConferencesIdActionsLeaveRoute,
  postConferencesIdActionsMuteRoute,
  postConferencesIdActionsPlayRoute,
  postConferencesIdActionsRecordStartRoute,
  postConferencesIdActionsRecordStopRoute,
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
  .openapi(postConferencesIdActionsDialParticipantRoute, (c) => {
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
  .openapi(postConferencesIdActionsRecordStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConferencesIdActionsRecordStopRoute, (c) => {
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

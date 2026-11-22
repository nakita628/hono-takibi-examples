import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMeetingSessionsIdActionsSendChatRoute,
  postMeetingSessionsIdActionsSpeakRoute,
  postMeetingSessionsIdActionsStopSpeakingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meetingSessionActionsHandler = app
  .openapi(postMeetingSessionsIdActionsSendChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingSessionsIdActionsSpeakRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingSessionsIdActionsStopSpeakingRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeetingSessionsIdRecordingMediaRoute,
  getMeetingSessionsIdEventsRoute,
  getMeetingSessionsIdRecordingsRoute,
  getMeetingSessionsIdTranscriptRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meetingSessionDataHandler = app
  .openapi(getMeetingSessionsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeetingSessionsIdRecordingMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingSessionsIdRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingSessionsIdTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })

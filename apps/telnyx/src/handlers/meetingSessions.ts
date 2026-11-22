import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeetingSessionsIdRoute,
  getMeetingSessionsIdRoute,
  getMeetingSessionsRoute,
  patchMeetingSessionsIdRoute,
  postMeetingSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meetingSessionsHandler = app
  .openapi(getMeetingSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeetingSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeetingSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMeetingSessionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

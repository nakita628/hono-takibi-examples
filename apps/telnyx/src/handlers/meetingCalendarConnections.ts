import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCalendarConnectionsIdRoute,
  getCalendarConnectionsIdMeetingsRoute,
  getCalendarConnectionsIdRoute,
  getCalendarConnectionsRoute,
  getMeetingBotCalendarOauthCallbackRoute,
  patchCalendarConnectionsIdMeetingsMeetingIdRoute,
  patchCalendarConnectionsIdRoute,
  postCalendarConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meetingCalendarConnectionsHandler = app
  .openapi(getCalendarConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalendarConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCalendarConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCalendarConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarConnectionsIdMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCalendarConnectionsIdMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeetingBotCalendarOauthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })

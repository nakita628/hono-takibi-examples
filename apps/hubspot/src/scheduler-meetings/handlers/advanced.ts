import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postScheduler202609MeetingsCalendarRoute,
  postScheduler202609MeetingsMeetingLinksBookRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postScheduler202609MeetingsCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScheduler202609MeetingsMeetingLinksBookRoute, (c) => {
    throw new Error('Not implemented')
  })

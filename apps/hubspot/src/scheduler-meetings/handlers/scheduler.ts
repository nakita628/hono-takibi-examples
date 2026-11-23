import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugRoute,
  getScheduler202609MeetingsMeetingLinksBookSlugRoute,
  getScheduler202609MeetingsMeetingLinksRoute,
  postScheduler202609MeetingsCalendarRoute,
  postScheduler202609MeetingsMeetingLinksBookRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulerHandler = app
  .openapi(postScheduler202609MeetingsCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduler202609MeetingsMeetingLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScheduler202609MeetingsMeetingLinksBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduler202609MeetingsMeetingLinksBookSlugRoute, (c) => {
    throw new Error('Not implemented')
  })

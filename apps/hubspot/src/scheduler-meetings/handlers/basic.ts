import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugRoute,
  getScheduler202609MeetingsMeetingLinksBookSlugRoute,
  getScheduler202609MeetingsMeetingLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getScheduler202609MeetingsMeetingLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduler202609MeetingsMeetingLinksBookSlugRoute, (c) => {
    throw new Error('Not implemented')
  })

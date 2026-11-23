import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugRoute,
  getScheduler202609MeetingsMeetingLinksBookSlugRoute,
  getScheduler202609MeetingsMeetingLinksRoute,
  postScheduler202609MeetingsCalendarRoute,
  postScheduler202609MeetingsMeetingLinksBookRoute,
} from './routes'
import {
  getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugRouteHandler,
  getScheduler202609MeetingsMeetingLinksBookSlugRouteHandler,
  getScheduler202609MeetingsMeetingLinksRouteHandler,
  postScheduler202609MeetingsCalendarRouteHandler,
  postScheduler202609MeetingsMeetingLinksBookRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postScheduler202609MeetingsCalendarRoute,
    postScheduler202609MeetingsCalendarRouteHandler,
  )
  .openapi(
    getScheduler202609MeetingsMeetingLinksRoute,
    getScheduler202609MeetingsMeetingLinksRouteHandler,
  )
  .openapi(
    postScheduler202609MeetingsMeetingLinksBookRoute,
    postScheduler202609MeetingsMeetingLinksBookRouteHandler,
  )
  .openapi(
    getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugRoute,
    getScheduler202609MeetingsMeetingLinksBookAvailabilityPageSlugRouteHandler,
  )
  .openapi(
    getScheduler202609MeetingsMeetingLinksBookSlugRoute,
    getScheduler202609MeetingsMeetingLinksBookSlugRouteHandler,
  )

export default app

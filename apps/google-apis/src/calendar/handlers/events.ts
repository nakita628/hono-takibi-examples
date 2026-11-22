import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCalendarsCalendarIdEventsEventIdRoute,
  getCalendarsCalendarIdEventsEventIdInstancesRoute,
  getCalendarsCalendarIdEventsEventIdRoute,
  getCalendarsCalendarIdEventsRoute,
  patchCalendarsCalendarIdEventsEventIdRoute,
  postCalendarsCalendarIdEventsEventIdMoveRoute,
  postCalendarsCalendarIdEventsImportRoute,
  postCalendarsCalendarIdEventsQuickAddRoute,
  postCalendarsCalendarIdEventsRoute,
  postCalendarsCalendarIdEventsWatchRoute,
  putCalendarsCalendarIdEventsEventIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(getCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalendarsCalendarIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalendarsCalendarIdEventsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalendarsCalendarIdEventsQuickAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalendarsCalendarIdEventsWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCalendarsCalendarIdEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsCalendarIdEventsEventIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalendarsCalendarIdEventsEventIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })

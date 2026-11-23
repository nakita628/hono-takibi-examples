import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCalendarsCalendarIdAclRuleIdRoute,
  deleteCalendarsCalendarIdEventsEventIdRoute,
  deleteCalendarsCalendarIdRoute,
  getCalendarsCalendarIdAclRoute,
  getCalendarsCalendarIdAclRuleIdRoute,
  getCalendarsCalendarIdEventsEventIdInstancesRoute,
  getCalendarsCalendarIdEventsEventIdRoute,
  getCalendarsCalendarIdEventsRoute,
  getCalendarsCalendarIdRoute,
  patchCalendarsCalendarIdAclRuleIdRoute,
  patchCalendarsCalendarIdEventsEventIdRoute,
  patchCalendarsCalendarIdRoute,
  postCalendarsCalendarIdAclRoute,
  postCalendarsCalendarIdAclWatchRoute,
  postCalendarsCalendarIdClearRoute,
  postCalendarsCalendarIdEventsEventIdMoveRoute,
  postCalendarsCalendarIdEventsImportRoute,
  postCalendarsCalendarIdEventsQuickAddRoute,
  postCalendarsCalendarIdEventsRoute,
  postCalendarsCalendarIdEventsWatchRoute,
  postCalendarsRoute,
  putCalendarsCalendarIdAclRuleIdRoute,
  putCalendarsCalendarIdEventsEventIdRoute,
  putCalendarsCalendarIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarsHandler = app
  .openapi(postCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCalendarsCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsCalendarIdAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalendarsCalendarIdAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalendarsCalendarIdAclWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCalendarsCalendarIdAclRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCalendarsCalendarIdAclRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCalendarsCalendarIdAclRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCalendarsCalendarIdAclRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalendarsCalendarIdClearRoute, (c) => {
    throw new Error('Not implemented')
  })
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

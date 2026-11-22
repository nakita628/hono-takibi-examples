import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCalendarsCalendarIdAclRuleIdRoute,
  getCalendarsCalendarIdAclRoute,
  getCalendarsCalendarIdAclRuleIdRoute,
  patchCalendarsCalendarIdAclRuleIdRoute,
  postCalendarsCalendarIdAclRoute,
  postCalendarsCalendarIdAclWatchRoute,
  putCalendarsCalendarIdAclRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aclHandler = app
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

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCalendarsCalendarIdRoute,
  getCalendarsCalendarIdRoute,
  patchCalendarsCalendarIdRoute,
  postCalendarsCalendarIdClearRoute,
  postCalendarsRoute,
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
  .openapi(postCalendarsCalendarIdClearRoute, (c) => {
    throw new Error('Not implemented')
  })

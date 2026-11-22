import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CalendarEventsInfoRoute,
  getApiV1CalendarEventsListRoute,
  postApiV1CalendarEventsCreateRoute,
  postApiV1CalendarEventsDeleteRoute,
  postApiV1CalendarEventsImportRoute,
  postApiV1CalendarEventsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarEventsHandler = app
  .openapi(getApiV1CalendarEventsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CalendarEventsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CalendarEventsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CalendarEventsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CalendarEventsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CalendarEventsImportRoute, (c) => {
    throw new Error('Not implemented')
  })

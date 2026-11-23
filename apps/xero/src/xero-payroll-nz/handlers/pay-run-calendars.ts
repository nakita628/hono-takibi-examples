import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPayRunCalendarsPayrollCalendarIDRoute,
  getPayRunCalendarsRoute,
  postPayRunCalendarsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payRunCalendarsHandler = app
  .openapi(getPayRunCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayRunCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayRunCalendarsPayrollCalendarIDRoute, (c) => {
    throw new Error('Not implemented')
  })

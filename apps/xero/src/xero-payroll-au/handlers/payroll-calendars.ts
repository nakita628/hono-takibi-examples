import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPayrollCalendarsPayrollCalendarIDRoute,
  getPayrollCalendarsRoute,
  postPayrollCalendarsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollCalendarsHandler = app
  .openapi(getPayrollCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPayrollCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPayrollCalendarsPayrollCalendarIDRoute, (c) => {
    throw new Error('Not implemented')
  })

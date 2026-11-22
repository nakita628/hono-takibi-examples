import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarAbsencesRoute,
  getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarAvailablehoursRoute,
  getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarLeaverequestsRoute,
  getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarLeaveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarHandler = app
  .openapi(getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarAbsencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarAvailablehoursRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesEmploymentsCalendarLeaverequestsRoute, (c) => {
    throw new Error('Not implemented')
  })

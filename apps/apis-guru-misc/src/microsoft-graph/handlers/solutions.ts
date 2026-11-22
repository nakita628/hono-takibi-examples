import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSolutionsBookingBusinessesBookingBusinessIdAppointmentsCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCalendarViewCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCustomersCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdServicesCountRoute,
  getSolutionsBookingBusinessesBookingBusinessIdStaffMembersCountRoute,
  getSolutionsBookingBusinessesCountRoute,
  getSolutionsBookingCurrenciesCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const solutionsHandler = app
  .openapi(getSolutionsBookingBusinessesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdAppointmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdCalendarViewCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdCustomQuestionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdCustomersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdServicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingBusinessesBookingBusinessIdStaffMembersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingCurrenciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })

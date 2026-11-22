import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSolutionsBookingBusinessesBookingBusinessIdAppointmentsBookingAppointmentIdMicrosoftGraphCancelRoute,
  postSolutionsBookingBusinessesBookingBusinessIdCalendarViewBookingAppointmentIdMicrosoftGraphCancelRoute,
  postSolutionsBookingBusinessesBookingBusinessIdMicrosoftGraphGetStaffAvailabilityRoute,
  postSolutionsBookingBusinessesBookingBusinessIdMicrosoftGraphPublishRoute,
  postSolutionsBookingBusinessesBookingBusinessIdMicrosoftGraphUnpublishRoute,
} from '../routes'

const app = new OpenAPIHono()

export const solutionsActionsHandler = app
  .openapi(
    postSolutionsBookingBusinessesBookingBusinessIdAppointmentsBookingAppointmentIdMicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBookingBusinessesBookingBusinessIdCalendarViewBookingAppointmentIdMicrosoftGraphCancelRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postSolutionsBookingBusinessesBookingBusinessIdMicrosoftGraphGetStaffAvailabilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdMicrosoftGraphPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingBusinessesBookingBusinessIdMicrosoftGraphUnpublishRoute, (c) => {
    throw new Error('Not implemented')
  })

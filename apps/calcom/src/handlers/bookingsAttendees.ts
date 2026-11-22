import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2BookingsBookingUidAttendeesAttendeeIdRoute,
  getV2BookingsBookingUidAttendeesAttendeeIdRoute,
  getV2BookingsBookingUidAttendeesRoute,
  postV2BookingsBookingUidAttendeesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookingsAttendeesHandler = app
  .openapi(getV2BookingsBookingUidAttendeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidAttendeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidAttendeesAttendeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2BookingsBookingUidAttendeesAttendeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBookingsBookingIdRoute,
  getBookingsBookingIdRoute,
  getBookingsRoute,
  postBookingsRoute,
  putBookingsBookingIdBookingContactRoute,
  putBookingsBookingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookingsHandler = app
  .openapi(getBookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBookingsBookingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookingsBookingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBookingsBookingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBookingsBookingIdBookingContactRoute, (c) => {
    throw new Error('Not implemented')
  })

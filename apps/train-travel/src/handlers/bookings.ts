import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBookingsBookingIdRoute,
  getBookingsBookingIdRoute,
  getBookingsRoute,
  postBookingsBookingIdPaymentRoute,
  postBookingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookingsHandler = app
  .openapi(getBookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookingsBookingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBookingsBookingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingsBookingIdPaymentRoute, (c) => {
    throw new Error('Not implemented')
  })

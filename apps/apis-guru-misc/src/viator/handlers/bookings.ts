import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBookingsBookingReferenceCancelQuoteRoute,
  getBookingsCancelReasonsRoute,
  postBookingsBookingReferenceCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookingsHandler = app
  .openapi(getBookingsCancelReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookingsBookingReferenceCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookingsBookingReferenceCancelQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })

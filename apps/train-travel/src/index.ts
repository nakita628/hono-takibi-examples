import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBookingsBookingIdRoute,
  getBookingsBookingIdRoute,
  getBookingsRoute,
  getStationsRoute,
  getTripsRoute,
  postBookingsBookingIdPaymentRoute,
  postBookingsRoute,
} from './routes'
import {
  deleteBookingsBookingIdRouteHandler,
  getBookingsBookingIdRouteHandler,
  getBookingsRouteHandler,
  getStationsRouteHandler,
  getTripsRouteHandler,
  postBookingsBookingIdPaymentRouteHandler,
  postBookingsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getStationsRoute, getStationsRouteHandler)
  .openapi(getTripsRoute, getTripsRouteHandler)
  .openapi(getBookingsRoute, getBookingsRouteHandler)
  .openapi(postBookingsRoute, postBookingsRouteHandler)
  .openapi(getBookingsBookingIdRoute, getBookingsBookingIdRouteHandler)
  .openapi(deleteBookingsBookingIdRoute, deleteBookingsBookingIdRouteHandler)
  .openapi(postBookingsBookingIdPaymentRoute, postBookingsBookingIdPaymentRouteHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBookingsBookingIdRoute,
  getBookingsBookingIdRoute,
  getBookingsRoute,
  getHotelsHotelIdRatePlansRatePlanIdRoute,
  getHotelsHotelIdRatePlansRoute,
  getHotelsHotelIdRoute,
  getHotelsRoute,
  postBookingsRoute,
  putBookingsBookingIdBookingContactRoute,
  putBookingsBookingIdRoute,
} from './routes'
import {
  deleteBookingsBookingIdRouteHandler,
  getBookingsBookingIdRouteHandler,
  getBookingsRouteHandler,
  getHotelsHotelIdRatePlansRatePlanIdRouteHandler,
  getHotelsHotelIdRatePlansRouteHandler,
  getHotelsHotelIdRouteHandler,
  getHotelsRouteHandler,
  postBookingsRouteHandler,
  putBookingsBookingIdBookingContactRouteHandler,
  putBookingsBookingIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBookingsRoute, getBookingsRouteHandler)
  .openapi(postBookingsRoute, postBookingsRouteHandler)
  .openapi(deleteBookingsBookingIdRoute, deleteBookingsBookingIdRouteHandler)
  .openapi(getBookingsBookingIdRoute, getBookingsBookingIdRouteHandler)
  .openapi(putBookingsBookingIdRoute, putBookingsBookingIdRouteHandler)
  .openapi(putBookingsBookingIdBookingContactRoute, putBookingsBookingIdBookingContactRouteHandler)
  .openapi(getHotelsRoute, getHotelsRouteHandler)
  .openapi(getHotelsHotelIdRoute, getHotelsHotelIdRouteHandler)
  .openapi(getHotelsHotelIdRatePlansRoute, getHotelsHotelIdRatePlansRouteHandler)
  .openapi(
    getHotelsHotelIdRatePlansRatePlanIdRoute,
    getHotelsHotelIdRatePlansRatePlanIdRouteHandler,
  )

export default app

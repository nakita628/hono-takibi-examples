import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSpecialEventsEventIdRoute,
  getMuseumHoursRoute,
  getSpecialEventsEventIdRoute,
  getSpecialEventsRoute,
  getTicketsTicketIdQrRoute,
  patchSpecialEventsEventIdRoute,
  postSpecialEventsRoute,
  postTicketsRoute,
} from './routes'
import {
  deleteSpecialEventsEventIdRouteHandler,
  getMuseumHoursRouteHandler,
  getSpecialEventsEventIdRouteHandler,
  getSpecialEventsRouteHandler,
  getTicketsTicketIdQrRouteHandler,
  patchSpecialEventsEventIdRouteHandler,
  postSpecialEventsRouteHandler,
  postTicketsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getMuseumHoursRoute, getMuseumHoursRouteHandler)
  .openapi(postSpecialEventsRoute, postSpecialEventsRouteHandler)
  .openapi(getSpecialEventsRoute, getSpecialEventsRouteHandler)
  .openapi(getSpecialEventsEventIdRoute, getSpecialEventsEventIdRouteHandler)
  .openapi(patchSpecialEventsEventIdRoute, patchSpecialEventsEventIdRouteHandler)
  .openapi(deleteSpecialEventsEventIdRoute, deleteSpecialEventsEventIdRouteHandler)
  .openapi(postTicketsRoute, postTicketsRouteHandler)
  .openapi(getTicketsTicketIdQrRoute, getTicketsTicketIdQrRouteHandler)

export default app

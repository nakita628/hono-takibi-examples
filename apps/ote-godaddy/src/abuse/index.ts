import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AbuseTicketsRoute,
  getV1AbuseTicketsTicketIdRoute,
  postV1AbuseTicketsRoute,
} from './routes'
import {
  getV1AbuseTicketsRouteHandler,
  getV1AbuseTicketsTicketIdRouteHandler,
  postV1AbuseTicketsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AbuseTicketsRoute, getV1AbuseTicketsRouteHandler)
  .openapi(postV1AbuseTicketsRoute, postV1AbuseTicketsRouteHandler)
  .openapi(getV1AbuseTicketsTicketIdRoute, getV1AbuseTicketsTicketIdRouteHandler)

export default app

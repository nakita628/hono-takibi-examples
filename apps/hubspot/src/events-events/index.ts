import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventsEventOccurrences202609EventTypesRoute,
  getEventsEventOccurrences202609Route,
} from './routes'
import {
  getEventsEventOccurrences202609EventTypesRouteHandler,
  getEventsEventOccurrences202609RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEventsEventOccurrences202609Route, getEventsEventOccurrences202609RouteHandler)
  .openapi(
    getEventsEventOccurrences202609EventTypesRoute,
    getEventsEventOccurrences202609EventTypesRouteHandler,
  )

export default app

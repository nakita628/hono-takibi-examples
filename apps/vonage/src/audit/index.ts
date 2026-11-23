import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsIdRoute, getEventsRoute, optionsEventsRoute } from './routes'
import {
  getEventsIdRouteHandler,
  getEventsRouteHandler,
  optionsEventsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(optionsEventsRoute, optionsEventsRouteHandler)
  .openapi(getEventsIdRoute, getEventsIdRouteHandler)

export default app

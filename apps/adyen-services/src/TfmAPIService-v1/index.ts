import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAssignTerminalsRoute,
  postFindTerminalRoute,
  postGetStoresUnderAccountRoute,
  postGetTerminalDetailsRoute,
  postGetTerminalsUnderAccountRoute,
} from './routes'
import {
  postAssignTerminalsRouteHandler,
  postFindTerminalRouteHandler,
  postGetStoresUnderAccountRouteHandler,
  postGetTerminalDetailsRouteHandler,
  postGetTerminalsUnderAccountRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAssignTerminalsRoute, postAssignTerminalsRouteHandler)
  .openapi(postFindTerminalRoute, postFindTerminalRouteHandler)
  .openapi(postGetStoresUnderAccountRoute, postGetStoresUnderAccountRouteHandler)
  .openapi(postGetTerminalDetailsRoute, postGetTerminalDetailsRouteHandler)
  .openapi(postGetTerminalsUnderAccountRoute, postGetTerminalsUnderAccountRouteHandler)

export default app

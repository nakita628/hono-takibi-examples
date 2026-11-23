import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHumanLoopsHumanLoopNameRoute,
  getHumanLoopsFlowDefinitionArnRoute,
  getHumanLoopsHumanLoopNameRoute,
  postHumanLoopsRoute,
  postHumanLoopsStopRoute,
} from './routes'
import {
  deleteHumanLoopsHumanLoopNameRouteHandler,
  getHumanLoopsFlowDefinitionArnRouteHandler,
  getHumanLoopsHumanLoopNameRouteHandler,
  postHumanLoopsRouteHandler,
  postHumanLoopsStopRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteHumanLoopsHumanLoopNameRoute, deleteHumanLoopsHumanLoopNameRouteHandler)
  .openapi(getHumanLoopsHumanLoopNameRoute, getHumanLoopsHumanLoopNameRouteHandler)
  .openapi(getHumanLoopsFlowDefinitionArnRoute, getHumanLoopsFlowDefinitionArnRouteHandler)
  .openapi(postHumanLoopsRoute, postHumanLoopsRouteHandler)
  .openapi(postHumanLoopsStopRoute, postHumanLoopsStopRouteHandler)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeploymentsDeploymentIdChatCompletionsRoute } from './routes'
import { postDeploymentsDeploymentIdChatCompletionsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postDeploymentsDeploymentIdChatCompletionsRoute,
  postDeploymentsDeploymentIdChatCompletionsRouteHandler,
)

export default app

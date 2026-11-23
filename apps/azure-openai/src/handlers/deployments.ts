import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeploymentsDeploymentIdChatCompletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const deploymentsHandler = app.openapi(
  postDeploymentsDeploymentIdChatCompletionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

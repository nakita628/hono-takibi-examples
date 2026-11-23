import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeployementstrategiesDeploymentStrategyIdRoute } from '../routes'

const app = new OpenAPIHono()

export const deployementstrategiesHandler = app.openapi(
  deleteDeployementstrategiesDeploymentStrategyIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

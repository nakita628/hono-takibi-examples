import { OpenAPIHono } from '@hono/zod-openapi'
import { postStartSimulationJobBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const startSimulationJobBatchHandler = app.openapi(postStartSimulationJobBatchRoute, (c) => {
  throw new Error('Not implemented')
})

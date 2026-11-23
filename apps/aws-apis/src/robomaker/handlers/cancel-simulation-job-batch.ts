import { OpenAPIHono } from '@hono/zod-openapi'
import { postCancelSimulationJobBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelSimulationJobBatchHandler = app.openapi(
  postCancelSimulationJobBatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

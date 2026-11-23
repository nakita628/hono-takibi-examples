import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSimulationJobBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const describeSimulationJobBatchHandler = app.openapi(
  postDescribeSimulationJobBatchRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

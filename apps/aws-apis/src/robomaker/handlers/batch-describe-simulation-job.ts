import { OpenAPIHono } from '@hono/zod-openapi'
import { postBatchDescribeSimulationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const batchDescribeSimulationJobHandler = app.openapi(
  postBatchDescribeSimulationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

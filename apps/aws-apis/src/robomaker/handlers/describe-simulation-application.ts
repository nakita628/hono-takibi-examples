import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSimulationApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeSimulationApplicationHandler = app.openapi(
  postDescribeSimulationApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeSimulationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const describeSimulationJobHandler = app.openapi(postDescribeSimulationJobRoute, (c) => {
  throw new Error('Not implemented')
})

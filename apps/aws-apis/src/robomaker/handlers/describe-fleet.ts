import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeFleetRoute } from '../routes'

const app = new OpenAPIHono()

export const describeFleetHandler = app.openapi(postDescribeFleetRoute, (c) => {
  throw new Error('Not implemented')
})

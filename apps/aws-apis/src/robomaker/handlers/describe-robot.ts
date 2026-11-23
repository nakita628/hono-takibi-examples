import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeRobotRoute } from '../routes'

const app = new OpenAPIHono()

export const describeRobotHandler = app.openapi(postDescribeRobotRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeRobotApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeRobotApplicationHandler = app.openapi(
  postDescribeRobotApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

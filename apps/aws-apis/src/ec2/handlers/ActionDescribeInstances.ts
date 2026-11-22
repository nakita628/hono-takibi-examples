import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeInstancesRoute, postActionDescribeInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeInstancesHandler = app
  .openapi(getActionDescribeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeDBInstancesRoute, postActionDescribeDBInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBInstancesHandler = app
  .openapi(getActionDescribeDBInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })

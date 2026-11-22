import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeDBClustersRoute, postActionDescribeDBClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBClustersHandler = app
  .openapi(getActionDescribeDBClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBClustersRoute, (c) => {
    throw new Error('Not implemented')
  })

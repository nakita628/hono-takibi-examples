import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeDBClustersRoute, postActionDescribeDBClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbClustersHandler = app
  .openapi(getActionDescribeDBClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBClustersRoute, (c) => {
    throw new Error('Not implemented')
  })

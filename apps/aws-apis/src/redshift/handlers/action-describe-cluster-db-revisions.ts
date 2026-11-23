import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClusterDbRevisionsRoute,
  postActionDescribeClusterDbRevisionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeClusterDbRevisionsHandler = app
  .openapi(getActionDescribeClusterDbRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClusterDbRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })

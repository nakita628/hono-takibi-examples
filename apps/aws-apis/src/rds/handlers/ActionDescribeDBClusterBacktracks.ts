import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBClusterBacktracksRoute,
  postActionDescribeDBClusterBacktracksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBClusterBacktracksHandler = app
  .openapi(getActionDescribeDBClusterBacktracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBClusterBacktracksRoute, (c) => {
    throw new Error('Not implemented')
  })

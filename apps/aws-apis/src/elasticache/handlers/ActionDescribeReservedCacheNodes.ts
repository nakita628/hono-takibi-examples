import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedCacheNodesRoute,
  postActionDescribeReservedCacheNodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeReservedCacheNodesHandler = app
  .openapi(getActionDescribeReservedCacheNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedCacheNodesRoute, (c) => {
    throw new Error('Not implemented')
  })

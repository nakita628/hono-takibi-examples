import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedNodesRoute,
  postActionDescribeReservedNodesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeReservedNodesHandler = app
  .openapi(getActionDescribeReservedNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedNodesRoute, (c) => {
    throw new Error('Not implemented')
  })

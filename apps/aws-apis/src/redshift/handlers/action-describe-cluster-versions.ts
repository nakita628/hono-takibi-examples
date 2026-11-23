import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClusterVersionsRoute,
  postActionDescribeClusterVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeClusterVersionsHandler = app
  .openapi(getActionDescribeClusterVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClusterVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })

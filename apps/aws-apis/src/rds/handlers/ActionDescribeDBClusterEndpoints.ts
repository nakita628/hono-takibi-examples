import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBClusterEndpointsRoute,
  postActionDescribeDBClusterEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBClusterEndpointsHandler = app
  .openapi(getActionDescribeDBClusterEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBClusterEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })

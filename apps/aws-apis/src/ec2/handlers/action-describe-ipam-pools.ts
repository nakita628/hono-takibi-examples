import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeIpamPoolsRoute, postActionDescribeIpamPoolsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeIpamPoolsHandler = app
  .openapi(getActionDescribeIpamPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIpamPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })

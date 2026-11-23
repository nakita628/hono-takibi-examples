import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeIpv6PoolsRoute, postActionDescribeIpv6PoolsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeIpv6PoolsHandler = app
  .openapi(getActionDescribeIpv6PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIpv6PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })

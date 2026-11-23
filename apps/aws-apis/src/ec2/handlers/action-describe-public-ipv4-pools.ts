import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribePublicIpv4PoolsRoute,
  postActionDescribePublicIpv4PoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribePublicIpv4PoolsHandler = app
  .openapi(getActionDescribePublicIpv4PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribePublicIpv4PoolsRoute, (c) => {
    throw new Error('Not implemented')
  })

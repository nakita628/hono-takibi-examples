import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeIpamResourceDiscoveriesRoute,
  postActionDescribeIpamResourceDiscoveriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeIpamResourceDiscoveriesHandler = app
  .openapi(getActionDescribeIpamResourceDiscoveriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIpamResourceDiscoveriesRoute, (c) => {
    throw new Error('Not implemented')
  })

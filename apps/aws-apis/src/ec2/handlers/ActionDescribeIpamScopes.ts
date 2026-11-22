import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeIpamScopesRoute, postActionDescribeIpamScopesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeIpamScopesHandler = app
  .openapi(getActionDescribeIpamScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIpamScopesRoute, (c) => {
    throw new Error('Not implemented')
  })

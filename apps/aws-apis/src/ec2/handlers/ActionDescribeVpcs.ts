import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeVpcsRoute, postActionDescribeVpcsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVpcsHandler = app
  .openapi(getActionDescribeVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcsRoute, (c) => {
    throw new Error('Not implemented')
  })

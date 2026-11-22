import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeResizeRoute, postActionDescribeResizeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeResizeHandler = app
  .openapi(getActionDescribeResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeResizeRoute, (c) => {
    throw new Error('Not implemented')
  })

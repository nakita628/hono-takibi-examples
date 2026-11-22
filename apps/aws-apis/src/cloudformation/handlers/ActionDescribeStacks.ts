import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeStacksRoute, postActionDescribeStacksRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeStacksHandler = app
  .openapi(getActionDescribeStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStacksRoute, (c) => {
    throw new Error('Not implemented')
  })

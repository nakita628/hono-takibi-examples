import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeStacksRoute, postActionDescribeStacksRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeStacksHandler = app
  .openapi(getActionDescribeStacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStacksRoute, (c) => {
    throw new Error('Not implemented')
  })

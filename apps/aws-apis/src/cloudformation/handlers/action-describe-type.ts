import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeTypeRoute, postActionDescribeTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTypeHandler = app
  .openapi(getActionDescribeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

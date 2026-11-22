import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeEnvironmentsRoute, postActionDescribeEnvironmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeEnvironmentsHandler = app
  .openapi(getActionDescribeEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })

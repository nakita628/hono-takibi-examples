import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeExpressionsRoute, postActionDescribeExpressionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeExpressionsHandler = app
  .openapi(getActionDescribeExpressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeExpressionsRoute, (c) => {
    throw new Error('Not implemented')
  })

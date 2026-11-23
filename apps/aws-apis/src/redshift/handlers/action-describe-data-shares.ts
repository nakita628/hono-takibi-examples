import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeDataSharesRoute, postActionDescribeDataSharesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDataSharesHandler = app
  .openapi(getActionDescribeDataSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDataSharesRoute, (c) => {
    throw new Error('Not implemented')
  })

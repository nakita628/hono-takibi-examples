import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeCoipPoolsRoute, postActionDescribeCoipPoolsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeCoipPoolsHandler = app
  .openapi(getActionDescribeCoipPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCoipPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })

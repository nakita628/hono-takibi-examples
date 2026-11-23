import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeWarmPoolRoute, postActionDescribeWarmPoolRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeWarmPoolHandler = app
  .openapi(getActionDescribeWarmPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeWarmPoolRoute, (c) => {
    throw new Error('Not implemented')
  })

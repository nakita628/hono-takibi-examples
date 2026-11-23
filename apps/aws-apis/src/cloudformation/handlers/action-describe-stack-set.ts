import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeStackSetRoute, postActionDescribeStackSetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeStackSetHandler = app
  .openapi(getActionDescribeStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })

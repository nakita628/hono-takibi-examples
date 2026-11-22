import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeStackSetRoute, postActionDescribeStackSetRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeStackSetHandler = app
  .openapi(getActionDescribeStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })

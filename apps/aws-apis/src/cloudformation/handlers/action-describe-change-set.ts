import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeChangeSetRoute, postActionDescribeChangeSetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeChangeSetHandler = app
  .openapi(getActionDescribeChangeSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeChangeSetRoute, (c) => {
    throw new Error('Not implemented')
  })

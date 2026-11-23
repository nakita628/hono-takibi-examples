import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeStackEventsRoute, postActionDescribeStackEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeStackEventsHandler = app
  .openapi(getActionDescribeStackEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStackEventsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeEventsRoute, postActionDescribeEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeEventsHandler = app
  .openapi(getActionDescribeEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEventsRoute, (c) => {
    throw new Error('Not implemented')
  })

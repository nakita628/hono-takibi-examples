import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeListenersRoute, postActionDescribeListenersRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeListenersHandler = app
  .openapi(getActionDescribeListenersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeListenersRoute, (c) => {
    throw new Error('Not implemented')
  })

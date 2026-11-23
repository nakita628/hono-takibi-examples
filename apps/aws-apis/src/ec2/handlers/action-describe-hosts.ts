import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeHostsRoute, postActionDescribeHostsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeHostsHandler = app
  .openapi(getActionDescribeHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeHostsRoute, (c) => {
    throw new Error('Not implemented')
  })

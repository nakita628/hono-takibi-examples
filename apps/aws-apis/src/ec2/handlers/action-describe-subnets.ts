import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeSubnetsRoute, postActionDescribeSubnetsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSubnetsHandler = app
  .openapi(getActionDescribeSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })

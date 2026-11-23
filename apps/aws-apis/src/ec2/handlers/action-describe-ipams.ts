import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeIpamsRoute, postActionDescribeIpamsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeIpamsHandler = app
  .openapi(getActionDescribeIpamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeIpamsRoute, (c) => {
    throw new Error('Not implemented')
  })

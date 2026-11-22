import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeUsageLimitsRoute, postActionDescribeUsageLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeUsageLimitsHandler = app
  .openapi(getActionDescribeUsageLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeUsageLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeTargetGroupsRoute, postActionDescribeTargetGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTargetGroupsHandler = app
  .openapi(getActionDescribeTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTargetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTargetGroupAttributesRoute,
  postActionDescribeTargetGroupAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeTargetGroupAttributesHandler = app
  .openapi(getActionDescribeTargetGroupAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTargetGroupAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })

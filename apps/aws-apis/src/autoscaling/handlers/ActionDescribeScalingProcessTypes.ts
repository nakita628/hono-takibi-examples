import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeScalingProcessTypesRoute,
  postActionDescribeScalingProcessTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeScalingProcessTypesHandler = app
  .openapi(getActionDescribeScalingProcessTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeScalingProcessTypesRoute, (c) => {
    throw new Error('Not implemented')
  })

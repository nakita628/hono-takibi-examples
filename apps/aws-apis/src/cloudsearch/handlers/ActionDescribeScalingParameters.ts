import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeScalingParametersRoute,
  postActionDescribeScalingParametersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeScalingParametersHandler = app
  .openapi(getActionDescribeScalingParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeScalingParametersRoute, (c) => {
    throw new Error('Not implemented')
  })

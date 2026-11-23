import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAutoScalingInstancesRoute,
  postActionDescribeAutoScalingInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAutoScalingInstancesHandler = app
  .openapi(getActionDescribeAutoScalingInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAutoScalingInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })

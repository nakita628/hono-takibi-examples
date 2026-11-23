import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAutoScalingGroupsRoute,
  postActionDescribeAutoScalingGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAutoScalingGroupsHandler = app
  .openapi(getActionDescribeAutoScalingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAutoScalingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })

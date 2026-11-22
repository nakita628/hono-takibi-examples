import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionTerminateInstanceInAutoScalingGroupRoute,
  postActionTerminateInstanceInAutoScalingGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionTerminateInstanceInAutoScalingGroupHandler = app
  .openapi(getActionTerminateInstanceInAutoScalingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTerminateInstanceInAutoScalingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })

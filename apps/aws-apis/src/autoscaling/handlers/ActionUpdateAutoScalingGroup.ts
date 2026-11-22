import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateAutoScalingGroupRoute,
  postActionUpdateAutoScalingGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateAutoScalingGroupHandler = app
  .openapi(getActionUpdateAutoScalingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateAutoScalingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })

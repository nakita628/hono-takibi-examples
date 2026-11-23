import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteAutoScalingGroupRoute,
  postActionDeleteAutoScalingGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteAutoScalingGroupHandler = app
  .openapi(getActionDeleteAutoScalingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteAutoScalingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateAutoScalingGroupRoute,
  postActionCreateAutoScalingGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateAutoScalingGroupHandler = app
  .openapi(getActionCreateAutoScalingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateAutoScalingGroupRoute, (c) => {
    throw new Error('Not implemented')
  })

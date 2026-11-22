import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeScalingActivitiesRoute,
  postActionDescribeScalingActivitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeScalingActivitiesHandler = app
  .openapi(getActionDescribeScalingActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeScalingActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })

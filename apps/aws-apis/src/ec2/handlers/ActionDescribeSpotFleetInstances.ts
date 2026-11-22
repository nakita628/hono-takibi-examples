import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSpotFleetInstancesRoute,
  postActionDescribeSpotFleetInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeSpotFleetInstancesHandler = app
  .openapi(getActionDescribeSpotFleetInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSpotFleetInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSpotFleetRequestsRoute,
  postActionDescribeSpotFleetRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeSpotFleetRequestsHandler = app
  .openapi(getActionDescribeSpotFleetRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSpotFleetRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })

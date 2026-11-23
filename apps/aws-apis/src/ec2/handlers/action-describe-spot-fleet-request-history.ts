import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSpotFleetRequestHistoryRoute,
  postActionDescribeSpotFleetRequestHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSpotFleetRequestHistoryHandler = app
  .openapi(getActionDescribeSpotFleetRequestHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSpotFleetRequestHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })

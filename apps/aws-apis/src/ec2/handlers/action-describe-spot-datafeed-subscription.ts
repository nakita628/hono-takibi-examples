import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSpotDatafeedSubscriptionRoute,
  postActionDescribeSpotDatafeedSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSpotDatafeedSubscriptionHandler = app
  .openapi(getActionDescribeSpotDatafeedSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSpotDatafeedSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })

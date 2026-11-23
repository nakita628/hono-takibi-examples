import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAwsNetworkPerformanceMetricSubscriptionsRoute,
  postActionDescribeAwsNetworkPerformanceMetricSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAwsNetworkPerformanceMetricSubscriptionsHandler = app
  .openapi(getActionDescribeAwsNetworkPerformanceMetricSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAwsNetworkPerformanceMetricSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

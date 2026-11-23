import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableAwsNetworkPerformanceMetricSubscriptionRoute,
  postActionEnableAwsNetworkPerformanceMetricSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionEnableAwsNetworkPerformanceMetricSubscriptionHandler = app
  .openapi(getActionEnableAwsNetworkPerformanceMetricSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableAwsNetworkPerformanceMetricSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })

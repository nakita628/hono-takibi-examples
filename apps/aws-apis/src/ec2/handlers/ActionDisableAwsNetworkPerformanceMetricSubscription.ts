import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableAwsNetworkPerformanceMetricSubscriptionRoute,
  postActionDisableAwsNetworkPerformanceMetricSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDisableAwsNetworkPerformanceMetricSubscriptionHandler = app
  .openapi(getActionDisableAwsNetworkPerformanceMetricSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableAwsNetworkPerformanceMetricSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })

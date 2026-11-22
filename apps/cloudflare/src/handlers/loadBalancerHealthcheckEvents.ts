import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserLoadBalancingAnalyticsEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const loadBalancerHealthcheckEventsHandler = app.openapi(
  getUserLoadBalancingAnalyticsEventsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

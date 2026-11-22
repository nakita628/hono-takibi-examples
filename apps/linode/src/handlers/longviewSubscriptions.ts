import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionLongviewSubscriptionsRoute,
  getApiVersionLongviewSubscriptionsSubscriptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const longviewSubscriptionsHandler = app
  .openapi(getApiVersionLongviewSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLongviewSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

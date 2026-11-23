import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventSubscriptionsEventSubscriptionIdRoute,
  getEventSubscriptionsRoute,
  patchEventSubscriptionsEventSubscriptionIdRoute,
  postEventSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventSubscriptionsHandler = app
  .openapi(getEventSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEventSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventSubscriptionsEventSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEventSubscriptionsEventSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBusV1SubscriptionsSubscriptionIdEventsRoute,
  postBusV1EventsRoute,
  putBusV1SubscriptionsSubscriptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const busHandler = app
  .openapi(postBusV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBusV1SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusV1SubscriptionsSubscriptionIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })

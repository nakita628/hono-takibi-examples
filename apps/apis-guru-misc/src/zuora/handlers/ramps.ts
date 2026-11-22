import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OrdersOrderNumberRampMetricsRoute,
  getV1RampsRampNumberRampMetricsRoute,
  getV1RampsRampNumberRoute,
  getV1SubscriptionsSubscriptionKeyRampMetricsRoute,
  getV1SubscriptionsSubscriptionKeyRampsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rampsHandler = app
  .openapi(getV1OrdersOrderNumberRampMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampsRampNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RampsRampNumberRampMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubscriptionKeyRampMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubscriptionKeyRampsRoute, (c) => {
    throw new Error('Not implemented')
  })

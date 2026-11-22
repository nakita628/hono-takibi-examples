import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SubscriptionsSubIdRoute,
  getV1SubscriptionsPlansPlanIdRoute,
  getV1SubscriptionsPlansRoute,
  getV1SubscriptionsRoute,
  getV1SubscriptionsSubIdRoute,
  patchV1SubscriptionsPlansPlanIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recurringPaymentsAPIEmailSubscriptionsFeatureHandler = app
  .openapi(getV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsPlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SubscriptionsPlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SubscriptionsSubIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubIdRoute, (c) => {
    throw new Error('Not implemented')
  })

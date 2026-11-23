import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1SubscriptionsSubscriptionIdRoute,
  getV1SubscriptionsProductGroupsRoute,
  getV1SubscriptionsRoute,
  getV1SubscriptionsSubscriptionIdRoute,
  patchV1SubscriptionsSubscriptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsProductGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05SubscriptionRequestsCmInitRoute,
  postV05SubscriptionRequestsCmOnInitRoute,
  postV05SubscriptionRequestsHiuNotifyRoute,
  postV05SubscriptionRequestsHiuOnNotifyRoute,
  postV05SubscriptionsHiuNotifyRoute,
  postV05SubscriptionsHiuOnNotifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postV05SubscriptionRequestsCmInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsCmOnInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsHiuNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionsHiuNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })

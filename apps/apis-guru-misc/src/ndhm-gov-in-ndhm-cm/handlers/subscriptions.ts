import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05SubscriptionRequestsCmInitRoute,
  postV05SubscriptionRequestsHiuOnNotifyRoute,
  postV05SubscriptionsHiuOnNotifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postV05SubscriptionRequestsCmInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })

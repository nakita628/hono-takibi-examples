import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05SubscriptionRequestsHiuNotifyRoute,
  postV05SubscriptionRequestsHiuOnInitRoute,
  postV05SubscriptionsHiuNotifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postV05SubscriptionRequestsHiuNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsHiuOnInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionsHiuNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })

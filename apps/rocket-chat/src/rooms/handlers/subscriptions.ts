import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SubscriptionsGetOneRoute,
  getApiV1SubscriptionsGetRoute,
  postApiV1SubscriptionsReadRoute,
  postApiV1SubscriptionsUnreadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getApiV1SubscriptionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsGetOneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserSubscriptionsIdentifierRoute,
  getUserSubscriptionsRoute,
  postUserSubscriptionsRoute,
  putUserSubscriptionsIdentifierRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userSubscriptionHandler = app
  .openapi(getUserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserSubscriptionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserSubscriptionsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactsContactIdSubscriptionsSubscriptionIdRoute,
  getSubscriptionTypesIdRoute,
  getSubscriptionTypesRoute,
  postContactsContactIdSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionTypesHandler = app
  .openapi(postContactsContactIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsContactIdSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

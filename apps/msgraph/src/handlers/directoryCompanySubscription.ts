import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute,
  deleteDirectorySubscriptionsCompanySubscriptionIdRoute,
  getDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute,
  getDirectorySubscriptionsCompanySubscriptionIdRoute,
  getDirectorySubscriptionsCountRoute,
  getDirectorySubscriptionsRoute,
  patchDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute,
  patchDirectorySubscriptionsCompanySubscriptionIdRoute,
  postDirectorySubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryCompanySubscriptionHandler = app
  .openapi(getDirectorySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectorySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectorySubscriptionsCompanySubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectorySubscriptionsCompanySubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectorySubscriptionsCompanySubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectorySubscriptionsCommerceSubscriptionIdCommerceSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectorySubscriptionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

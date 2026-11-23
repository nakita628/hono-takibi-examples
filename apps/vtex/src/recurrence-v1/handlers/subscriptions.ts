import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsMeRoute,
  getSubscriptionsRecurrenceidAccountsRoute,
  getSubscriptionsRecurrenceIdAddressesRoute,
  getSubscriptionsRecurrenceIdRoute,
  getSubscriptionsRoute,
  getSubscriptionsSettingsRoute,
  patchSubscriptionsRecurrenceIdReindexRoute,
  patchSubscriptionsRecurrenceIdRoute,
  postSubscriptionsRecurrenceIdItemsRoute,
  putSubscriptionsRoute,
  putSubscriptionsSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsRecurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscriptionsRecurrenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsRecurrenceIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsRecurrenceIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubscriptionsRecurrenceIdReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsRecurrenceidAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })

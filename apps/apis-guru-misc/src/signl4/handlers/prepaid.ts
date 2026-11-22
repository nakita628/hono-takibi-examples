import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPrepaidBalanceRoute,
  getPrepaidSettingsRoute,
  getPrepaidTransactionsRoute,
  getSubscriptionsSubscriptionIdPrepaidBalanceRoute,
  getSubscriptionsSubscriptionIdPrepaidSettingsRoute,
  getSubscriptionsSubscriptionIdPrepaidTransactionsRoute,
  putPrepaidSettingsRoute,
  putSubscriptionsSubscriptionIdPrepaidSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prepaidHandler = app
  .openapi(getPrepaidBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrepaidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPrepaidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrepaidTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdPrepaidBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdPrepaidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSubscriptionsSubscriptionIdPrepaidSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdPrepaidTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })

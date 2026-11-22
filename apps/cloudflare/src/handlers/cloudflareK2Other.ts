import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdK2StreamsStreamIdRoute,
  deleteSubscriptionsSubscriptionIdRoute,
  getAccountsAccountIdK2StreamsRoute,
  getAccountsAccountIdK2StreamsStreamIdRoute,
  getAccountsAccountIdK2StreamsStreamIdSubscriptionsRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdRoute,
  patchAccountsAccountIdK2StreamsStreamIdRoute,
  postAccountsAccountIdK2StreamsRoute,
  postProduceRoute,
  postSubscriptionsRoute,
  postSubscriptionsSubscriptionIdBatchesBatchIdAckRoute,
  postSubscriptionsSubscriptionIdBatchesBatchIdExtendRoute,
  postSubscriptionsSubscriptionIdBatchesBatchIdNackRoute,
  postSubscriptionsSubscriptionIdConsumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudflareK2OtherHandler = app
  .openapi(getAccountsAccountIdK2StreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdK2StreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdK2StreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdK2StreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdK2StreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdK2StreamsStreamIdSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProduceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdBatchesBatchIdAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdBatchesBatchIdExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdBatchesBatchIdNackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdConsumeRoute, (c) => {
    throw new Error('Not implemented')
  })

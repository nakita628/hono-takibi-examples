import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdEventSubscriptionsSubscriptionsSubscriptionIdRoute,
  deleteAccountsAccountIdQueuesQueueIdConsumersConsumerIdRoute,
  deleteAccountsAccountIdQueuesQueueIdRoute,
  getAccountsAccountIdEventSubscriptionsSubscriptionsRoute,
  getAccountsAccountIdEventSubscriptionsSubscriptionsSubscriptionIdRoute,
  getAccountsAccountIdQueuesQueueIdConsumersConsumerIdRoute,
  getAccountsAccountIdQueuesQueueIdConsumersRoute,
  getAccountsAccountIdQueuesQueueIdMetricsRoute,
  getAccountsAccountIdQueuesQueueIdPurgeRoute,
  getAccountsAccountIdQueuesQueueIdRoute,
  getAccountsAccountIdQueuesRoute,
  patchAccountsAccountIdEventSubscriptionsSubscriptionsSubscriptionIdRoute,
  patchAccountsAccountIdQueuesQueueIdRoute,
  postAccountsAccountIdEventSubscriptionsSubscriptionsRoute,
  postAccountsAccountIdQueuesQueueIdConsumersRoute,
  postAccountsAccountIdQueuesQueueIdMessagesAckRoute,
  postAccountsAccountIdQueuesQueueIdMessagesBatchRoute,
  postAccountsAccountIdQueuesQueueIdMessagesExtendRoute,
  postAccountsAccountIdQueuesQueueIdMessagesPeekRoute,
  postAccountsAccountIdQueuesQueueIdMessagesPreviewAckRoute,
  postAccountsAccountIdQueuesQueueIdMessagesPreviewRoute,
  postAccountsAccountIdQueuesQueueIdMessagesPullRoute,
  postAccountsAccountIdQueuesQueueIdMessagesPurgeRoute,
  postAccountsAccountIdQueuesQueueIdMessagesRoute,
  postAccountsAccountIdQueuesQueueIdPurgeRoute,
  postAccountsAccountIdQueuesRoute,
  putAccountsAccountIdQueuesQueueIdConsumersConsumerIdRoute,
  putAccountsAccountIdQueuesQueueIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queueHandler = app
  .openapi(getAccountsAccountIdEventSubscriptionsSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEventSubscriptionsSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEventSubscriptionsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEventSubscriptionsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdEventSubscriptionsSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdQueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdQueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdQueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdQueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdQueuesQueueIdConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdConsumersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdQueuesQueueIdConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdQueuesQueueIdConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdQueuesQueueIdConsumersConsumerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdMessagesAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdMessagesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdMessagesExtendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdMessagesPeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdMessagesPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdMessagesPreviewAckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdMessagesPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdMessagesPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdQueuesQueueIdMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdQueuesQueueIdPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdQueuesQueueIdPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })

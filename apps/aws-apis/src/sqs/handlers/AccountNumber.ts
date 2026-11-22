import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountNumberQueueNameActionAddPermissionRoute,
  getAccountNumberQueueNameActionChangeMessageVisibilityBatchRoute,
  getAccountNumberQueueNameActionChangeMessageVisibilityRoute,
  getAccountNumberQueueNameActionDeleteMessageBatchRoute,
  getAccountNumberQueueNameActionDeleteMessageRoute,
  getAccountNumberQueueNameActionDeleteQueueRoute,
  getAccountNumberQueueNameActionGetQueueAttributesRoute,
  getAccountNumberQueueNameActionListDeadLetterSourceQueuesRoute,
  getAccountNumberQueueNameActionListQueueTagsRoute,
  getAccountNumberQueueNameActionPurgeQueueRoute,
  getAccountNumberQueueNameActionReceiveMessageRoute,
  getAccountNumberQueueNameActionRemovePermissionRoute,
  getAccountNumberQueueNameActionSendMessageBatchRoute,
  getAccountNumberQueueNameActionSendMessageRoute,
  getAccountNumberQueueNameActionSetQueueAttributesRoute,
  getAccountNumberQueueNameActionTagQueueRoute,
  getAccountNumberQueueNameActionUntagQueueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const AccountNumberHandler = app
  .openapi(getAccountNumberQueueNameActionAddPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionChangeMessageVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionChangeMessageVisibilityBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionDeleteMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionDeleteMessageBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionDeleteQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionGetQueueAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionListDeadLetterSourceQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionListQueueTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionPurgeQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionReceiveMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionRemovePermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionSendMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionSendMessageBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionSetQueueAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionTagQueueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumberQueueNameActionUntagQueueRoute, (c) => {
    throw new Error('Not implemented')
  })

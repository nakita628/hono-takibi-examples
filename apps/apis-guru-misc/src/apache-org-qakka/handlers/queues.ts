import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueuesQueueNameMessagesQueueMessageIdRoute,
  deleteQueuesQueueNameRoute,
  getQueuesQueueNameConfigRoute,
  getQueuesQueueNameDataQueueMessageIdRoute,
  getQueuesQueueNameMessagesRoute,
  getQueuesRoute,
  postQueuesQueueNameMessagesRoute,
  postQueuesRoute,
  putQueuesQueueNameConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queuesHandler = app
  .openapi(getQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueuesQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesQueueNameConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQueuesQueueNameConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesQueueNameDataQueueMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesQueueNameMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesQueueNameMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueuesQueueNameMessagesQueueMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })

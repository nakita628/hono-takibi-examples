import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueuesQueueNameCallsCallControlIdRoute,
  deleteQueuesQueueNameRoute,
  getQueuesQueueNameCallsCallControlIdRoute,
  getQueuesQueueNameCallsRoute,
  getQueuesQueueNameRoute,
  getQueuesRoute,
  patchQueuesQueueNameCallsCallControlIdRoute,
  postQueuesQueueNameRoute,
  postQueuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queueCommandsHandler = app
  .openapi(getQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueuesQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQueuesQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesQueueNameCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQueuesQueueNameCallsCallControlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesQueueNameCallsCallControlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchQueuesQueueNameCallsCallControlIdRoute, (c) => {
    throw new Error('Not implemented')
  })

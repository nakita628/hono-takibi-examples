import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getQueuesQueueNameCallsCallControlIdRoute,
  getQueuesQueueNameCallsRoute,
  getQueuesQueueNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queueCommandsHandler = app
  .openapi(getQueuesQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesQueueNameCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueuesQueueNameCallsCallControlIdRoute, (c) => {
    throw new Error('Not implemented')
  })

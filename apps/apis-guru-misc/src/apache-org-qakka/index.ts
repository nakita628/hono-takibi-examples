import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQueuesQueueNameMessagesQueueMessageIdRoute,
  deleteQueuesQueueNameRoute,
  getQueuesQueueNameConfigRoute,
  getQueuesQueueNameDataQueueMessageIdRoute,
  getQueuesQueueNameMessagesRoute,
  getQueuesRoute,
  getStatusRoute,
  postQueuesQueueNameMessagesRoute,
  postQueuesRoute,
  putQueuesQueueNameConfigRoute,
} from './routes'
import {
  deleteQueuesQueueNameMessagesQueueMessageIdRouteHandler,
  deleteQueuesQueueNameRouteHandler,
  getQueuesQueueNameConfigRouteHandler,
  getQueuesQueueNameDataQueueMessageIdRouteHandler,
  getQueuesQueueNameMessagesRouteHandler,
  getQueuesRouteHandler,
  getStatusRouteHandler,
  postQueuesQueueNameMessagesRouteHandler,
  postQueuesRouteHandler,
  putQueuesQueueNameConfigRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getQueuesRoute, getQueuesRouteHandler)
  .openapi(postQueuesRoute, postQueuesRouteHandler)
  .openapi(deleteQueuesQueueNameRoute, deleteQueuesQueueNameRouteHandler)
  .openapi(getQueuesQueueNameConfigRoute, getQueuesQueueNameConfigRouteHandler)
  .openapi(putQueuesQueueNameConfigRoute, putQueuesQueueNameConfigRouteHandler)
  .openapi(
    getQueuesQueueNameDataQueueMessageIdRoute,
    getQueuesQueueNameDataQueueMessageIdRouteHandler,
  )
  .openapi(getQueuesQueueNameMessagesRoute, getQueuesQueueNameMessagesRouteHandler)
  .openapi(postQueuesQueueNameMessagesRoute, postQueuesQueueNameMessagesRouteHandler)
  .openapi(
    deleteQueuesQueueNameMessagesQueueMessageIdRoute,
    deleteQueuesQueueNameMessagesQueueMessageIdRouteHandler,
  )
  .openapi(getStatusRoute, getStatusRouteHandler)

export default app

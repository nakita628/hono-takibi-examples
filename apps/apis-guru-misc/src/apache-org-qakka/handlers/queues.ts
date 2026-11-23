import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getQueuesRouteHandler: RouteHandler<typeof getQueuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueuesRouteHandler: RouteHandler<typeof postQueuesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteQueuesQueueNameRouteHandler: RouteHandler<
  typeof deleteQueuesQueueNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueuesQueueNameConfigRouteHandler: RouteHandler<
  typeof getQueuesQueueNameConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putQueuesQueueNameConfigRouteHandler: RouteHandler<
  typeof putQueuesQueueNameConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueuesQueueNameDataQueueMessageIdRouteHandler: RouteHandler<
  typeof getQueuesQueueNameDataQueueMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueuesQueueNameMessagesRouteHandler: RouteHandler<
  typeof getQueuesQueueNameMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQueuesQueueNameMessagesRouteHandler: RouteHandler<
  typeof postQueuesQueueNameMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteQueuesQueueNameMessagesQueueMessageIdRouteHandler: RouteHandler<
  typeof deleteQueuesQueueNameMessagesQueueMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

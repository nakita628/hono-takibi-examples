import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQueuesQueueNameCallsCallControlIdRoute,
  getQueuesQueueNameCallsRoute,
  getQueuesQueueNameRoute,
} from '../routes'

export const getQueuesQueueNameRouteHandler: RouteHandler<typeof getQueuesQueueNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getQueuesQueueNameCallsRouteHandler: RouteHandler<
  typeof getQueuesQueueNameCallsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQueuesQueueNameCallsCallControlIdRouteHandler: RouteHandler<
  typeof getQueuesQueueNameCallsCallControlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

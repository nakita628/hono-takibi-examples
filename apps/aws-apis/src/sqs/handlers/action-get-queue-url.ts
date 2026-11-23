import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetQueueUrlRoute, postActionGetQueueUrlRoute } from '../routes'

export const getActionGetQueueUrlRouteHandler: RouteHandler<
  typeof getActionGetQueueUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetQueueUrlRouteHandler: RouteHandler<
  typeof postActionGetQueueUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateQueueRoute, postActionCreateQueueRoute } from '../routes'

export const getActionCreateQueueRouteHandler: RouteHandler<
  typeof getActionCreateQueueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateQueueRouteHandler: RouteHandler<
  typeof postActionCreateQueueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

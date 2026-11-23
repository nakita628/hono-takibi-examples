import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPublishBatchRoute, postActionPublishBatchRoute } from '../routes'

export const getActionPublishBatchRouteHandler: RouteHandler<
  typeof getActionPublishBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPublishBatchRouteHandler: RouteHandler<
  typeof postActionPublishBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getContentSearchRoute, postContentBulkActionsRoute } from '../routes'

export const postContentBulkActionsRouteHandler: RouteHandler<
  typeof postContentBulkActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContentSearchRouteHandler: RouteHandler<typeof getContentSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

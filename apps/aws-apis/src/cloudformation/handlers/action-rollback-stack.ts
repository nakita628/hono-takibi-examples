import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRollbackStackRoute, postActionRollbackStackRoute } from '../routes'

export const getActionRollbackStackRouteHandler: RouteHandler<
  typeof getActionRollbackStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRollbackStackRouteHandler: RouteHandler<
  typeof postActionRollbackStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

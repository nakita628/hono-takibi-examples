import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRebuildEnvironmentRoute, postActionRebuildEnvironmentRoute } from '../routes'

export const getActionRebuildEnvironmentRouteHandler: RouteHandler<
  typeof getActionRebuildEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRebuildEnvironmentRouteHandler: RouteHandler<
  typeof postActionRebuildEnvironmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

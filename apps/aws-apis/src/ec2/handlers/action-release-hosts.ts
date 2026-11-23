import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionReleaseHostsRoute, postActionReleaseHostsRoute } from '../routes'

export const getActionReleaseHostsRouteHandler: RouteHandler<
  typeof getActionReleaseHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionReleaseHostsRouteHandler: RouteHandler<
  typeof postActionReleaseHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

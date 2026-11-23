import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsBuildExternalAppRequestRoute, getAppsCountRoute } from '../routes'

export const getAppsCountRouteHandler: RouteHandler<typeof getAppsCountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsBuildExternalAppRequestRouteHandler: RouteHandler<
  typeof getAppsBuildExternalAppRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

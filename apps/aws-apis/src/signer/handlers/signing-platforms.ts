import type { RouteHandler } from '@hono/zod-openapi'
import type { getSigningPlatformsPlatformIdRoute, getSigningPlatformsRoute } from '../routes'

export const getSigningPlatformsPlatformIdRouteHandler: RouteHandler<
  typeof getSigningPlatformsPlatformIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSigningPlatformsRouteHandler: RouteHandler<
  typeof getSigningPlatformsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

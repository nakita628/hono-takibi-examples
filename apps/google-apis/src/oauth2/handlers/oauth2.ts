import type { RouteHandler } from '@hono/zod-openapi'
import type { getOauth2V2UserinfoRoute, postOauth2V2TokeninfoRoute } from '../routes'

export const postOauth2V2TokeninfoRouteHandler: RouteHandler<
  typeof postOauth2V2TokeninfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauth2V2UserinfoRouteHandler: RouteHandler<
  typeof getOauth2V2UserinfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

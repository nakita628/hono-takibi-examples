import type { RouteHandler } from '@hono/zod-openapi'
import type { getOauthGrantsRoute, deleteOauthGrantsOauthGrantIdRoute } from '../routes'

export const getOauthGrantsRouteHandler: RouteHandler<typeof getOauthGrantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOauthGrantsOauthGrantIdRouteHandler: RouteHandler<
  typeof deleteOauthGrantsOauthGrantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteOauthGrantsOauthGrantIdRoute, getOauthGrantsRoute } from '../routes'

export const getOauthGrantsRouteHandler: RouteHandler<typeof getOauthGrantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOauthGrantsOauthGrantIdRouteHandler: RouteHandler<
  typeof deleteOauthGrantsOauthGrantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

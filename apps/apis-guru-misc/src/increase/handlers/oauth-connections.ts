import type { RouteHandler } from '@hono/zod-openapi'
import type { getOauthConnectionsOauthConnectionIdRoute, getOauthConnectionsRoute } from '../routes'

export const getOauthConnectionsRouteHandler: RouteHandler<
  typeof getOauthConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthConnectionsOauthConnectionIdRouteHandler: RouteHandler<
  typeof getOauthConnectionsOauthConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

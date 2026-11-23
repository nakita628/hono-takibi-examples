import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthClientsCreateRoute } from '../routes'

export const postOauthClientsCreateRouteHandler: RouteHandler<
  typeof postOauthClientsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

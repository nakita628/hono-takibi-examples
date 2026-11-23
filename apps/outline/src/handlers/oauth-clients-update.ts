import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthClientsUpdateRoute } from '../routes'

export const postOauthClientsUpdateRouteHandler: RouteHandler<
  typeof postOauthClientsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthClientsInfoRoute } from '../routes'

export const postOauthClientsInfoRouteHandler: RouteHandler<
  typeof postOauthClientsInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

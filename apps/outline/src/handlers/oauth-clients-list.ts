import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthClientsListRoute } from '../routes'

export const postOauthClientsListRouteHandler: RouteHandler<
  typeof postOauthClientsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

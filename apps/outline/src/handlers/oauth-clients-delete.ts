import type { RouteHandler } from '@hono/zod-openapi'
import type { postOauthClientsDeleteRoute } from '../routes'

export const postOauthClientsDeleteRouteHandler: RouteHandler<
  typeof postOauthClientsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteHostFactoryTokensTokenRoute, postHostFactoryTokensRoute } from '../routes'

export const postHostFactoryTokensRouteHandler: RouteHandler<
  typeof postHostFactoryTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteHostFactoryTokensTokenRouteHandler: RouteHandler<
  typeof deleteHostFactoryTokensTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

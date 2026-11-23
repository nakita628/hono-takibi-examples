import type { RouteHandler } from '@hono/zod-openapi'
import type { putInvalidateAllTokensRoute } from '../routes'

export const putInvalidateAllTokensRouteHandler: RouteHandler<
  typeof putInvalidateAllTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

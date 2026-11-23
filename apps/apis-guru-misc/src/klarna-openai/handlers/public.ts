import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublicOpenaiV0ProductsRoute } from '../routes'

export const getPublicOpenaiV0ProductsRouteHandler: RouteHandler<
  typeof getPublicOpenaiV0ProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

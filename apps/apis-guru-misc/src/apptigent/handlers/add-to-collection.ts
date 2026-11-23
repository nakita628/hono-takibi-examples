import type { RouteHandler } from '@hono/zod-openapi'
import type { postAddToCollectionRoute } from '../routes'

export const postAddToCollectionRouteHandler: RouteHandler<
  typeof postAddToCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

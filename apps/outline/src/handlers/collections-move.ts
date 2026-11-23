import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsMoveRoute } from '../routes'

export const postCollectionsMoveRouteHandler: RouteHandler<
  typeof postCollectionsMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

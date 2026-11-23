import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsDuplicateRoute } from '../routes'

export const postCollectionsDuplicateRouteHandler: RouteHandler<
  typeof postCollectionsDuplicateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

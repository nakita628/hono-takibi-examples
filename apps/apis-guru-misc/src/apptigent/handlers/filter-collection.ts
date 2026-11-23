import type { RouteHandler } from '@hono/zod-openapi'
import type { postFilterCollectionRoute } from '../routes'

export const postFilterCollectionRouteHandler: RouteHandler<
  typeof postFilterCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsMembershipsRoute } from '../routes'

export const postCollectionsMembershipsRouteHandler: RouteHandler<
  typeof postCollectionsMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

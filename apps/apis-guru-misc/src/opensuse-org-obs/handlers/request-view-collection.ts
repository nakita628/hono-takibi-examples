import type { RouteHandler } from '@hono/zod-openapi'
import type { getRequestViewCollectionRoute } from '../routes'

export const getRequestViewCollectionRouteHandler: RouteHandler<
  typeof getRequestViewCollectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

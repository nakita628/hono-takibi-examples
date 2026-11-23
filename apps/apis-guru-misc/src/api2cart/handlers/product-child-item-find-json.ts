import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductChildItemFindJsonRoute } from '../routes'

export const getProductChildItemFindJsonRouteHandler: RouteHandler<
  typeof getProductChildItemFindJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

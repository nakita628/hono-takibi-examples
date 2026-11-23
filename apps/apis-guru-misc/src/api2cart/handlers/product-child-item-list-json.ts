import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductChildItemListJsonRoute } from '../routes'

export const getProductChildItemListJsonRouteHandler: RouteHandler<
  typeof getProductChildItemListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

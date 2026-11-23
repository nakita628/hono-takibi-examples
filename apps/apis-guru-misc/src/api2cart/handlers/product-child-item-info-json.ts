import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductChildItemInfoJsonRoute } from '../routes'

export const getProductChildItemInfoJsonRouteHandler: RouteHandler<
  typeof getProductChildItemInfoJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductSearchFacetsRoute } from '../routes'

export const getProductSearchFacetsRouteHandler: RouteHandler<
  typeof getProductSearchFacetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

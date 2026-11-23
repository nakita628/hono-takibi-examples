import type { RouteHandler } from '@hono/zod-openapi'
import type { getFacetsFacetsRoute } from '../routes'

export const getFacetsFacetsRouteHandler: RouteHandler<typeof getFacetsFacetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

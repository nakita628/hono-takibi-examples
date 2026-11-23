import type { RouteHandler } from '@hono/zod-openapi'
import type { getTaxonomiesIndexRoute, getTaxonomiesTaxonomyIdIndexRoute } from '../routes'

export const getTaxonomiesIndexRouteHandler: RouteHandler<typeof getTaxonomiesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTaxonomiesTaxonomyIdIndexRouteHandler: RouteHandler<
  typeof getTaxonomiesTaxonomyIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

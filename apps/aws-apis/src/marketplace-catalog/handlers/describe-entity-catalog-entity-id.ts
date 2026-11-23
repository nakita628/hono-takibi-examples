import type { RouteHandler } from '@hono/zod-openapi'
import type { getDescribeEntityCatalogEntityIdRoute } from '../routes'

export const getDescribeEntityCatalogEntityIdRouteHandler: RouteHandler<
  typeof getDescribeEntityCatalogEntityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

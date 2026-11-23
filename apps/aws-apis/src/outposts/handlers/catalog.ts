import type { RouteHandler } from '@hono/zod-openapi'
import type { getCatalogItemCatalogItemIdRoute, getCatalogItemsRoute } from '../routes'

export const getCatalogItemCatalogItemIdRouteHandler: RouteHandler<
  typeof getCatalogItemCatalogItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCatalogItemsRouteHandler: RouteHandler<typeof getCatalogItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}

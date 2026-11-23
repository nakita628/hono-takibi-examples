import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCatalogueCatalogueIdAssetAssetIdRoute,
  getCatalogueCatalogueIdAssetRoute,
  getCatalogueCatalogueIdRoute,
  getCatalogueRoute,
} from '../routes'

export const getCatalogueRouteHandler: RouteHandler<typeof getCatalogueRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCatalogueCatalogueIdRouteHandler: RouteHandler<
  typeof getCatalogueCatalogueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCatalogueCatalogueIdAssetRouteHandler: RouteHandler<
  typeof getCatalogueCatalogueIdAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCatalogueCatalogueIdAssetAssetIdRouteHandler: RouteHandler<
  typeof getCatalogueCatalogueIdAssetAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

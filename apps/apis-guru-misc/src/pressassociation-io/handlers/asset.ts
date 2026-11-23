import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAssetAssetIdContributorRoute,
  getAssetAssetIdRoute,
  getAssetRoute,
} from '../routes'

export const getAssetRouteHandler: RouteHandler<typeof getAssetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetAssetIdRouteHandler: RouteHandler<typeof getAssetAssetIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetAssetIdContributorRouteHandler: RouteHandler<
  typeof getAssetAssetIdContributorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHoldingsAssetClassificationListRoute,
  getHoldingsHoldingTypeListRoute,
  getHoldingsRoute,
  getHoldingsSecuritiesRoute,
} from '../routes'

export const getHoldingsRouteHandler: RouteHandler<typeof getHoldingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHoldingsAssetClassificationListRouteHandler: RouteHandler<
  typeof getHoldingsAssetClassificationListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHoldingsHoldingTypeListRouteHandler: RouteHandler<
  typeof getHoldingsHoldingTypeListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHoldingsSecuritiesRouteHandler: RouteHandler<
  typeof getHoldingsSecuritiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

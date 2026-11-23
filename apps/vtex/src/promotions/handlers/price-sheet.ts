import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePriceSheetSkuIdRoute,
  getPriceSheetAllPagePageSizeRoute,
  getPriceSheetSkuIdRoute,
  getPriceSheetSkuIdTradePolicyRoute,
  postPriceSheetContextRoute,
  postPriceSheetRoute,
} from '../routes'

export const postPriceSheetRouteHandler: RouteHandler<typeof postPriceSheetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPriceSheetAllPagePageSizeRouteHandler: RouteHandler<
  typeof getPriceSheetAllPagePageSizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPriceSheetContextRouteHandler: RouteHandler<
  typeof postPriceSheetContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePriceSheetSkuIdRouteHandler: RouteHandler<
  typeof deletePriceSheetSkuIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPriceSheetSkuIdRouteHandler: RouteHandler<typeof getPriceSheetSkuIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPriceSheetSkuIdTradePolicyRouteHandler: RouteHandler<
  typeof getPriceSheetSkuIdTradePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

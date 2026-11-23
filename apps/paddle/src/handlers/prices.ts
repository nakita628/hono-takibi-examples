import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPricesPriceIdRoute,
  getPricesRoute,
  patchPricesPriceIdRoute,
  postPricesRoute,
} from '../routes'

export const getPricesRouteHandler: RouteHandler<typeof getPricesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPricesRouteHandler: RouteHandler<typeof postPricesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPricesPriceIdRouteHandler: RouteHandler<typeof getPricesPriceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchPricesPriceIdRouteHandler: RouteHandler<typeof patchPricesPriceIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

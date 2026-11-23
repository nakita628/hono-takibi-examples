import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDifferentialPricesDifferentialPriceIdRoute,
  getDifferentialPricesRoute,
  postDifferentialPricesDifferentialPriceIdDeleteRoute,
  postDifferentialPricesDifferentialPriceIdRoute,
} from '../routes'

export const postDifferentialPricesDifferentialPriceIdDeleteRouteHandler: RouteHandler<
  typeof postDifferentialPricesDifferentialPriceIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDifferentialPricesRouteHandler: RouteHandler<
  typeof getDifferentialPricesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDifferentialPricesDifferentialPriceIdRouteHandler: RouteHandler<
  typeof getDifferentialPricesDifferentialPriceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDifferentialPricesDifferentialPriceIdRouteHandler: RouteHandler<
  typeof postDifferentialPricesDifferentialPriceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

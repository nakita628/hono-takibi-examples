import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPriceRampsPriceRampIdRoute,
  getPriceRampsRoute,
  postPriceRampsPriceRampIdDeleteRoute,
  postPriceRampsPriceRampIdRoute,
  postPriceRampsRoute,
} from '../routes'

export const getPriceRampsRouteHandler: RouteHandler<typeof getPriceRampsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPriceRampsRouteHandler: RouteHandler<typeof postPriceRampsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPriceRampsPriceRampIdDeleteRouteHandler: RouteHandler<
  typeof postPriceRampsPriceRampIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPriceRampsPriceRampIdRouteHandler: RouteHandler<
  typeof getPriceRampsPriceRampIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPriceRampsPriceRampIdRouteHandler: RouteHandler<
  typeof postPriceRampsPriceRampIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

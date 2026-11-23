import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPredictCarPriceRoute,
  getPredictCarUkFmvRoute,
  getPredictCarUkPriceRoute,
} from '../routes'

export const getPredictCarPriceRouteHandler: RouteHandler<typeof getPredictCarPriceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPredictCarUkFmvRouteHandler: RouteHandler<typeof getPredictCarUkFmvRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPredictCarUkPriceRouteHandler: RouteHandler<
  typeof getPredictCarUkPriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRatesRateGidRoute,
  getRatesRateGidRoute,
  getRatesRoute,
  postRatesRoute,
  putRatesRateGidRoute,
} from '../routes'

export const getRatesRouteHandler: RouteHandler<typeof getRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRatesRouteHandler: RouteHandler<typeof postRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRatesRateGidRouteHandler: RouteHandler<typeof getRatesRateGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putRatesRateGidRouteHandler: RouteHandler<typeof putRatesRateGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRatesRateGidRouteHandler: RouteHandler<typeof deleteRatesRateGidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

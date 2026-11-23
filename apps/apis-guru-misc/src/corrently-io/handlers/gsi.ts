import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGsiBestHourRoute,
  getGsiDispatchRoute,
  getGsiMarketdataRoute,
  getGsiPredictionRoute,
} from '../routes'

export const getGsiBestHourRouteHandler: RouteHandler<typeof getGsiBestHourRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGsiDispatchRouteHandler: RouteHandler<typeof getGsiDispatchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGsiMarketdataRouteHandler: RouteHandler<typeof getGsiMarketdataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGsiPredictionRouteHandler: RouteHandler<typeof getGsiPredictionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

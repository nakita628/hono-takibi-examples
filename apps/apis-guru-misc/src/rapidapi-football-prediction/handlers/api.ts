import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiV2ListFederationsRoute,
  getApiV2ListMarketsRoute,
  getApiV2PerformanceStatsRoute,
  getApiV2PredictionsIdRoute,
  getApiV2PredictionsRoute,
} from '../routes'

export const getApiV2ListFederationsRouteHandler: RouteHandler<
  typeof getApiV2ListFederationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2ListMarketsRouteHandler: RouteHandler<
  typeof getApiV2ListMarketsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PerformanceStatsRouteHandler: RouteHandler<
  typeof getApiV2PerformanceStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PredictionsRouteHandler: RouteHandler<
  typeof getApiV2PredictionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2PredictionsIdRouteHandler: RouteHandler<
  typeof getApiV2PredictionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

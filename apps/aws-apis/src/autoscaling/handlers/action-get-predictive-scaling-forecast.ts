import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetPredictiveScalingForecastRoute,
  postActionGetPredictiveScalingForecastRoute,
} from '../routes'

export const getActionGetPredictiveScalingForecastRouteHandler: RouteHandler<
  typeof getActionGetPredictiveScalingForecastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetPredictiveScalingForecastRouteHandler: RouteHandler<
  typeof postActionGetPredictiveScalingForecastRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnalystRatingsLightRoute, getAnalystRatingsUsEquitiesRoute } from '../routes'

export const getAnalystRatingsLightRouteHandler: RouteHandler<
  typeof getAnalystRatingsLightRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalystRatingsUsEquitiesRouteHandler: RouteHandler<
  typeof getAnalystRatingsUsEquitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

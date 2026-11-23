import type { RouteHandler } from '@hono/zod-openapi'
import type { getWorkerFeaturesIndexRoute, getWorkerFeaturesUserIdIndexRoute } from '../routes'

export const getWorkerFeaturesIndexRouteHandler: RouteHandler<
  typeof getWorkerFeaturesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkerFeaturesUserIdIndexRouteHandler: RouteHandler<
  typeof getWorkerFeaturesUserIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

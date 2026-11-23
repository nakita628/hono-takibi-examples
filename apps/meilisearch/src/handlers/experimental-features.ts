import type { RouteHandler } from '@hono/zod-openapi'
import type { getExperimentalFeaturesRoute, patchExperimentalFeaturesRoute } from '../routes'

export const getExperimentalFeaturesRouteHandler: RouteHandler<
  typeof getExperimentalFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchExperimentalFeaturesRouteHandler: RouteHandler<
  typeof patchExperimentalFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeatureFeatureIdRoute, getFeatureRoute } from '../routes'

export const getFeatureRouteHandler: RouteHandler<typeof getFeatureRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFeatureFeatureIdRouteHandler: RouteHandler<
  typeof getFeatureFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

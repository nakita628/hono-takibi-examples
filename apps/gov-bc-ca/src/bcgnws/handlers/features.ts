import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeaturesFeatureIdRoute } from '../routes'

export const getFeaturesFeatureIdRouteHandler: RouteHandler<
  typeof getFeaturesFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

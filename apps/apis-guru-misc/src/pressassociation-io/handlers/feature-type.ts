import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeatureTypeRoute } from '../routes'

export const getFeatureTypeRouteHandler: RouteHandler<typeof getFeatureTypeRoute> = async (c) => {
  throw new Error('Not implemented')
}

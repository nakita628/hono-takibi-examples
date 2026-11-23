import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeatureTypesRoute } from '../routes'

export const getFeatureTypesRouteHandler: RouteHandler<typeof getFeatureTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeatureClassesRoute } from '../routes'

export const getFeatureClassesRouteHandler: RouteHandler<typeof getFeatureClassesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeatureCategoriesRoute } from '../routes'

export const getFeatureCategoriesRouteHandler: RouteHandler<
  typeof getFeatureCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

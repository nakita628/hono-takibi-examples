import type { RouteHandler } from '@hono/zod-openapi'
import type { getCategoriesSlugDocsRoute, getCategoriesSlugRoute } from '../routes'

export const getCategoriesSlugRouteHandler: RouteHandler<typeof getCategoriesSlugRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCategoriesSlugDocsRouteHandler: RouteHandler<
  typeof getCategoriesSlugDocsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

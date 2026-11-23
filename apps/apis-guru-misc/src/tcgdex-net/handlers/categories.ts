import type { RouteHandler } from '@hono/zod-openapi'
import type { getCategoriesCategoryRoute, getCategoriesRoute } from '../routes'

export const getCategoriesRouteHandler: RouteHandler<typeof getCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesCategoryRouteHandler: RouteHandler<
  typeof getCategoriesCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCategoriesFlatRoute,
  getCategoriesProductTypeCategoryRoute,
  getCategoriesRoute,
  getCategoriesTaxonomyRoute,
  getCategoriesUuidRoute,
} from '../routes'

export const getCategoriesRouteHandler: RouteHandler<typeof getCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesFlatRouteHandler: RouteHandler<typeof getCategoriesFlatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCategoriesTaxonomyRouteHandler: RouteHandler<
  typeof getCategoriesTaxonomyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesProductTypeCategoryRouteHandler: RouteHandler<
  typeof getCategoriesProductTypeCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesUuidRouteHandler: RouteHandler<typeof getCategoriesUuidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCategoriesSlugRoute,
  getCategoriesRoute,
  getCategoriesSlugDocsRoute,
  getCategoriesSlugRoute,
  postCategoriesRoute,
  putCategoriesSlugRoute,
} from '../routes'

export const getCategoriesRouteHandler: RouteHandler<typeof getCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCategoriesRouteHandler: RouteHandler<typeof postCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesSlugRouteHandler: RouteHandler<typeof getCategoriesSlugRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putCategoriesSlugRouteHandler: RouteHandler<typeof putCategoriesSlugRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCategoriesSlugRouteHandler: RouteHandler<
  typeof deleteCategoriesSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesSlugDocsRouteHandler: RouteHandler<
  typeof getCategoriesSlugDocsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

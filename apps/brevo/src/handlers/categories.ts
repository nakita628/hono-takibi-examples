import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCategoriesIdRoute,
  getCategoriesRoute,
  postCategoriesBatchRoute,
  postCategoriesRoute,
} from '../routes'

export const getCategoriesRouteHandler: RouteHandler<typeof getCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCategoriesRouteHandler: RouteHandler<typeof postCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCategoriesBatchRouteHandler: RouteHandler<
  typeof postCategoriesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesIdRouteHandler: RouteHandler<typeof getCategoriesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getArticlesCategoriesRoute, getArticlesRoute } from '../routes'

export const getArticlesRouteHandler: RouteHandler<typeof getArticlesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesCategoriesRouteHandler: RouteHandler<
  typeof getArticlesCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

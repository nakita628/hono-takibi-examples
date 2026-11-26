import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInternalArticlesRoute,
  postInternalArticlesRoute,
  getInternalArticlesInternalArticleIdRoute,
  putInternalArticlesInternalArticleIdRoute,
  deleteInternalArticlesInternalArticleIdRoute,
  postInternalArticlesInternalArticleIdTagsRoute,
  deleteInternalArticlesInternalArticleIdTagsIdRoute,
  getInternalArticlesSearchRoute,
} from '../routes'

export const getInternalArticlesRouteHandler: RouteHandler<
  typeof getInternalArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInternalArticlesRouteHandler: RouteHandler<
  typeof postInternalArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternalArticlesInternalArticleIdRouteHandler: RouteHandler<
  typeof getInternalArticlesInternalArticleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putInternalArticlesInternalArticleIdRouteHandler: RouteHandler<
  typeof putInternalArticlesInternalArticleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInternalArticlesInternalArticleIdRouteHandler: RouteHandler<
  typeof deleteInternalArticlesInternalArticleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInternalArticlesInternalArticleIdTagsRouteHandler: RouteHandler<
  typeof postInternalArticlesInternalArticleIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInternalArticlesInternalArticleIdTagsIdRouteHandler: RouteHandler<
  typeof deleteInternalArticlesInternalArticleIdTagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInternalArticlesSearchRouteHandler: RouteHandler<
  typeof getInternalArticlesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

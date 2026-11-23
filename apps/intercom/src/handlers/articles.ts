import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteArticlesArticleIdRoute,
  deleteArticlesArticleIdTagsIdRoute,
  getArticlesArticleIdRoute,
  getArticlesArticleIdVersionsIdRoute,
  getArticlesArticleIdVersionsRoute,
  getArticlesIdDraftRoute,
  getArticlesRoute,
  getArticlesSearchRoute,
  postArticlesArticleIdTagsRoute,
  postArticlesIdDraftPublishRoute,
  postArticlesRoute,
  putArticlesArticleIdRoute,
  putArticlesIdDraftRoute,
} from '../routes'

export const getArticlesRouteHandler: RouteHandler<typeof getArticlesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postArticlesRouteHandler: RouteHandler<typeof postArticlesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesArticleIdRouteHandler: RouteHandler<
  typeof getArticlesArticleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putArticlesArticleIdRouteHandler: RouteHandler<
  typeof putArticlesArticleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteArticlesArticleIdRouteHandler: RouteHandler<
  typeof deleteArticlesArticleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesIdDraftRouteHandler: RouteHandler<typeof getArticlesIdDraftRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putArticlesIdDraftRouteHandler: RouteHandler<typeof putArticlesIdDraftRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postArticlesIdDraftPublishRouteHandler: RouteHandler<
  typeof postArticlesIdDraftPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postArticlesArticleIdTagsRouteHandler: RouteHandler<
  typeof postArticlesArticleIdTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteArticlesArticleIdTagsIdRouteHandler: RouteHandler<
  typeof deleteArticlesArticleIdTagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesArticleIdVersionsRouteHandler: RouteHandler<
  typeof getArticlesArticleIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesArticleIdVersionsIdRouteHandler: RouteHandler<
  typeof getArticlesArticleIdVersionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesSearchRouteHandler: RouteHandler<typeof getArticlesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

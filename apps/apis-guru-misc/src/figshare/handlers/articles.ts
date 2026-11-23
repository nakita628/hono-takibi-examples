import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getArticlesArticleIdFilesFileIdRoute,
  getArticlesArticleIdFilesRoute,
  getArticlesArticleIdRoute,
  getArticlesArticleIdVersionsRoute,
  getArticlesArticleIdVersionsVNumberConfidentialityRoute,
  getArticlesArticleIdVersionsVNumberEmbargoRoute,
  getArticlesArticleIdVersionsVNumberRoute,
  getArticlesRoute,
  postArticlesSearchRoute,
} from '../routes'

export const getArticlesRouteHandler: RouteHandler<typeof getArticlesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postArticlesSearchRouteHandler: RouteHandler<typeof postArticlesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getArticlesArticleIdRouteHandler: RouteHandler<
  typeof getArticlesArticleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesArticleIdFilesRouteHandler: RouteHandler<
  typeof getArticlesArticleIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesArticleIdFilesFileIdRouteHandler: RouteHandler<
  typeof getArticlesArticleIdFilesFileIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesArticleIdVersionsRouteHandler: RouteHandler<
  typeof getArticlesArticleIdVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesArticleIdVersionsVNumberRouteHandler: RouteHandler<
  typeof getArticlesArticleIdVersionsVNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesArticleIdVersionsVNumberConfidentialityRouteHandler: RouteHandler<
  typeof getArticlesArticleIdVersionsVNumberConfidentialityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticlesArticleIdVersionsVNumberEmbargoRouteHandler: RouteHandler<
  typeof getArticlesArticleIdVersionsVNumberEmbargoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

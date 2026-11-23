import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getArticleArticleIdContentRoute,
  getArticleArticleIdFansRoute,
  getArticleArticleIdMarkdownRoute,
  getArticleArticleIdRelatedRoute,
  getArticleArticleIdResponsesRoute,
  getArticleArticleIdRoute,
} from '../routes'

export const getArticleArticleIdRouteHandler: RouteHandler<
  typeof getArticleArticleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticleArticleIdContentRouteHandler: RouteHandler<
  typeof getArticleArticleIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticleArticleIdFansRouteHandler: RouteHandler<
  typeof getArticleArticleIdFansRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticleArticleIdMarkdownRouteHandler: RouteHandler<
  typeof getArticleArticleIdMarkdownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticleArticleIdRelatedRouteHandler: RouteHandler<
  typeof getArticleArticleIdRelatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArticleArticleIdResponsesRouteHandler: RouteHandler<
  typeof getArticleArticleIdResponsesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

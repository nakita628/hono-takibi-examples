import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFormatRotoBallerArticlesByDateDateRoute,
  getFormatRotoBallerArticlesByPlayerIDPlayeridRoute,
  getFormatRotoBallerArticlesRoute,
} from '../routes'

export const getFormatRotoBallerArticlesRouteHandler: RouteHandler<
  typeof getFormatRotoBallerArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatRotoBallerArticlesByDateDateRouteHandler: RouteHandler<
  typeof getFormatRotoBallerArticlesByDateDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatRotoBallerArticlesByPlayerIDPlayeridRouteHandler: RouteHandler<
  typeof getFormatRotoBallerArticlesByPlayerIDPlayeridRoute
> = async (c) => {
  throw new Error('Not implemented')
}

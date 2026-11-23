import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getComicSeriesRoute,
  getComicSeriesSearchRoute,
  postComicSeriesSearchRoute,
} from '../routes'

export const getComicSeriesRouteHandler: RouteHandler<typeof getComicSeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getComicSeriesSearchRouteHandler: RouteHandler<
  typeof getComicSeriesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postComicSeriesSearchRouteHandler: RouteHandler<
  typeof postComicSeriesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

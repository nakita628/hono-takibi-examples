import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBookSeriesRoute,
  getBookSeriesSearchRoute,
  postBookSeriesSearchRoute,
} from '../routes'

export const getBookSeriesRouteHandler: RouteHandler<typeof getBookSeriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookSeriesSearchRouteHandler: RouteHandler<
  typeof getBookSeriesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookSeriesSearchRouteHandler: RouteHandler<
  typeof postBookSeriesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

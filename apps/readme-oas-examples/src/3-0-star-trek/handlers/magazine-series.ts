import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMagazineSeriesRoute,
  getMagazineSeriesSearchRoute,
  postMagazineSeriesSearchRoute,
} from '../routes'

export const getMagazineSeriesRouteHandler: RouteHandler<typeof getMagazineSeriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMagazineSeriesSearchRouteHandler: RouteHandler<
  typeof getMagazineSeriesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMagazineSeriesSearchRouteHandler: RouteHandler<
  typeof postMagazineSeriesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCategoriesRoute,
  getCategoriesStatsRoute,
  getCategoriesStatsSumsRoute,
} from '../routes'

export const getCategoriesRouteHandler: RouteHandler<typeof getCategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCategoriesStatsRouteHandler: RouteHandler<typeof getCategoriesStatsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCategoriesStatsSumsRouteHandler: RouteHandler<
  typeof getCategoriesStatsSumsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

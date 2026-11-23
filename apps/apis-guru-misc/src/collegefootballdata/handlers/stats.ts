import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatsCategoriesRoute,
  getStatsGameAdvancedRoute,
  getStatsPlayerSeasonRoute,
  getStatsSeasonAdvancedRoute,
  getStatsSeasonRoute,
} from '../routes'

export const getStatsCategoriesRouteHandler: RouteHandler<typeof getStatsCategoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStatsGameAdvancedRouteHandler: RouteHandler<
  typeof getStatsGameAdvancedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsPlayerSeasonRouteHandler: RouteHandler<
  typeof getStatsPlayerSeasonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsSeasonRouteHandler: RouteHandler<typeof getStatsSeasonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatsSeasonAdvancedRouteHandler: RouteHandler<
  typeof getStatsSeasonAdvancedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

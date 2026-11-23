import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSeasonsNowRoute,
  getSeasonsRoute,
  getSeasonsUpcomingRoute,
  getSeasonsYearSeasonRoute,
} from '../routes'

export const getSeasonsNowRouteHandler: RouteHandler<typeof getSeasonsNowRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeasonsYearSeasonRouteHandler: RouteHandler<
  typeof getSeasonsYearSeasonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeasonsRouteHandler: RouteHandler<typeof getSeasonsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeasonsUpcomingRouteHandler: RouteHandler<typeof getSeasonsUpcomingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

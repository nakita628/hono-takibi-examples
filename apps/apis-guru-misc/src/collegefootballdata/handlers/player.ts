import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPlayerPortalRoute,
  getPlayerReturningRoute,
  getPlayerSearchRoute,
  getPlayerUsageRoute,
} from '../routes'

export const getPlayerPortalRouteHandler: RouteHandler<typeof getPlayerPortalRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlayerReturningRouteHandler: RouteHandler<typeof getPlayerReturningRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPlayerSearchRouteHandler: RouteHandler<typeof getPlayerSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlayerUsageRouteHandler: RouteHandler<typeof getPlayerUsageRoute> = async (c) => {
  throw new Error('Not implemented')
}

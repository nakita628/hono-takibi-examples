import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlayStatsRoute, getPlayStatTypesRoute, getPlayTypesRoute } from '../routes'

export const getPlayStatTypesRouteHandler: RouteHandler<typeof getPlayStatTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPlayStatsRouteHandler: RouteHandler<typeof getPlayStatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlayTypesRouteHandler: RouteHandler<typeof getPlayTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

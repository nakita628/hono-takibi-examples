import type { RouteHandler } from '@hono/zod-openapi'
import type { getRetreatsRetreatRoute, getRetreatsRoute } from '../routes'

export const getRetreatsRouteHandler: RouteHandler<typeof getRetreatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRetreatsRetreatRouteHandler: RouteHandler<typeof getRetreatsRetreatRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

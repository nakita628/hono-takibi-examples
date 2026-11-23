import type { RouteHandler } from '@hono/zod-openapi'
import type { getHackathonsComingJsonRoute, getHackathonsIdJsonRoute } from '../routes'

export const getHackathonsComingJsonRouteHandler: RouteHandler<
  typeof getHackathonsComingJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHackathonsIdJsonRouteHandler: RouteHandler<
  typeof getHackathonsIdJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getWaybackV1AvailableRoute, postWaybackV1AvailableRoute } from '../routes'

export const getWaybackV1AvailableRouteHandler: RouteHandler<
  typeof getWaybackV1AvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWaybackV1AvailableRouteHandler: RouteHandler<
  typeof postWaybackV1AvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

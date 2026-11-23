import type { RouteHandler } from '@hono/zod-openapi'
import type { getTaskEventTracksIdIndexRoute, getTaskEventTracksIndexRoute } from '../routes'

export const getTaskEventTracksIndexRouteHandler: RouteHandler<
  typeof getTaskEventTracksIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskEventTracksIdIndexRouteHandler: RouteHandler<
  typeof getTaskEventTracksIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

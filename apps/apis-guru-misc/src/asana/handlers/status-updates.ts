import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStatusUpdatesStatusGidRoute,
  getStatusUpdatesRoute,
  getStatusUpdatesStatusGidRoute,
  postStatusUpdatesRoute,
} from '../routes'

export const getStatusUpdatesRouteHandler: RouteHandler<typeof getStatusUpdatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postStatusUpdatesRouteHandler: RouteHandler<typeof postStatusUpdatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteStatusUpdatesStatusGidRouteHandler: RouteHandler<
  typeof deleteStatusUpdatesStatusGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatusUpdatesStatusGidRouteHandler: RouteHandler<
  typeof getStatusUpdatesStatusGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

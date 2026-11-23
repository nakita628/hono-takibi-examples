import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteStatusUpdatesStatusUpdateGidRoute,
  getStatusUpdatesRoute,
  getStatusUpdatesStatusUpdateGidRoute,
  postStatusUpdatesRoute,
} from '../routes'

export const getStatusUpdatesStatusUpdateGidRouteHandler: RouteHandler<
  typeof getStatusUpdatesStatusUpdateGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteStatusUpdatesStatusUpdateGidRouteHandler: RouteHandler<
  typeof deleteStatusUpdatesStatusUpdateGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

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

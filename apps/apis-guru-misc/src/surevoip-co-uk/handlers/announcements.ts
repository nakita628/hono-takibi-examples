import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnnouncementsRoute, postAnnouncementsRoute } from '../routes'

export const getAnnouncementsRouteHandler: RouteHandler<typeof getAnnouncementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAnnouncementsRouteHandler: RouteHandler<typeof postAnnouncementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

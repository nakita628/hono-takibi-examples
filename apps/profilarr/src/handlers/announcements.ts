import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnnouncementsIdRoute, getAnnouncementsRoute } from '../routes'

export const getAnnouncementsRouteHandler: RouteHandler<typeof getAnnouncementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAnnouncementsIdRouteHandler: RouteHandler<typeof getAnnouncementsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

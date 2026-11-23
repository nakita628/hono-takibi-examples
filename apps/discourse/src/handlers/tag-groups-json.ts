import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagGroupsJsonRoute, postTagGroupsJsonRoute } from '../routes'

export const getTagGroupsJsonRouteHandler: RouteHandler<typeof getTagGroupsJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTagGroupsJsonRouteHandler: RouteHandler<typeof postTagGroupsJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

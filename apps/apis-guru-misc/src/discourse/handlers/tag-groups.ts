import type { RouteHandler } from '@hono/zod-openapi'
import type { getTagGroupsIdJsonRoute, putTagGroupsIdJsonRoute } from '../routes'

export const getTagGroupsIdJsonRouteHandler: RouteHandler<typeof getTagGroupsIdJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putTagGroupsIdJsonRouteHandler: RouteHandler<typeof putTagGroupsIdJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

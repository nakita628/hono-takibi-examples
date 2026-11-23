import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsGroupMembershipsRoute } from '../routes'

export const postCollectionsGroupMembershipsRouteHandler: RouteHandler<
  typeof postCollectionsGroupMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

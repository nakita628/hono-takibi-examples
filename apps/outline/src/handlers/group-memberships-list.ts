import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupMembershipsListRoute } from '../routes'

export const postGroupMembershipsListRouteHandler: RouteHandler<
  typeof postGroupMembershipsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

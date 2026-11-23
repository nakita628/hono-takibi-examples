import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserMembershipsListRoute } from '../routes'

export const postUserMembershipsListRouteHandler: RouteHandler<
  typeof postUserMembershipsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

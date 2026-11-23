import type { RouteHandler } from '@hono/zod-openapi'
import type { postUserMembershipsUpdateRoute } from '../routes'

export const postUserMembershipsUpdateRouteHandler: RouteHandler<
  typeof postUserMembershipsUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

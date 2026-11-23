import type { RouteHandler } from '@hono/zod-openapi'
import type { getChannelsScopeAppInstanceUserMembershipsRoute } from '../routes'

export const getChannelsScopeAppInstanceUserMembershipsRouteHandler: RouteHandler<
  typeof getChannelsScopeAppInstanceUserMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

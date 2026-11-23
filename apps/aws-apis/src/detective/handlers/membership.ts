import type { RouteHandler } from '@hono/zod-openapi'
import type { postMembershipDatasourcesGetRoute, postMembershipRemovalRoute } from '../routes'

export const postMembershipDatasourcesGetRouteHandler: RouteHandler<
  typeof postMembershipDatasourcesGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMembershipRemovalRouteHandler: RouteHandler<
  typeof postMembershipRemovalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

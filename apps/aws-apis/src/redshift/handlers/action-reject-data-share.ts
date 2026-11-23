import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRejectDataShareRoute, postActionRejectDataShareRoute } from '../routes'

export const getActionRejectDataShareRouteHandler: RouteHandler<
  typeof getActionRejectDataShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRejectDataShareRouteHandler: RouteHandler<
  typeof postActionRejectDataShareRoute
> = async (c) => {
  throw new Error('Not implemented')
}

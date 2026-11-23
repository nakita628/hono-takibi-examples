import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyFleetRoute, postActionModifyFleetRoute } from '../routes'

export const getActionModifyFleetRouteHandler: RouteHandler<
  typeof getActionModifyFleetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyFleetRouteHandler: RouteHandler<
  typeof postActionModifyFleetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

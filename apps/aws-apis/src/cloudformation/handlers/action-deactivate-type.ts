import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeactivateTypeRoute, postActionDeactivateTypeRoute } from '../routes'

export const getActionDeactivateTypeRouteHandler: RouteHandler<
  typeof getActionDeactivateTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeactivateTypeRouteHandler: RouteHandler<
  typeof postActionDeactivateTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

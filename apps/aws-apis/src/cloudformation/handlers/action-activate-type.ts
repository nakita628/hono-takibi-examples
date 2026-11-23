import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionActivateTypeRoute, postActionActivateTypeRoute } from '../routes'

export const getActionActivateTypeRouteHandler: RouteHandler<
  typeof getActionActivateTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionActivateTypeRouteHandler: RouteHandler<
  typeof postActionActivateTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

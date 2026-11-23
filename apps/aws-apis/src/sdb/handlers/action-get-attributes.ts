import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetAttributesRoute, postActionGetAttributesRoute } from '../routes'

export const getActionGetAttributesRouteHandler: RouteHandler<
  typeof getActionGetAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetAttributesRouteHandler: RouteHandler<
  typeof postActionGetAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

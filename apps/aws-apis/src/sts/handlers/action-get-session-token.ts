import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetSessionTokenRoute, postActionGetSessionTokenRoute } from '../routes'

export const getActionGetSessionTokenRouteHandler: RouteHandler<
  typeof getActionGetSessionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetSessionTokenRouteHandler: RouteHandler<
  typeof postActionGetSessionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

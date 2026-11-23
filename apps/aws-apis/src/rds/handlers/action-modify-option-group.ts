import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyOptionGroupRoute, postActionModifyOptionGroupRoute } from '../routes'

export const getActionModifyOptionGroupRouteHandler: RouteHandler<
  typeof getActionModifyOptionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyOptionGroupRouteHandler: RouteHandler<
  typeof postActionModifyOptionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteOptionGroupRoute, postActionDeleteOptionGroupRoute } from '../routes'

export const getActionDeleteOptionGroupRouteHandler: RouteHandler<
  typeof getActionDeleteOptionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteOptionGroupRouteHandler: RouteHandler<
  typeof postActionDeleteOptionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

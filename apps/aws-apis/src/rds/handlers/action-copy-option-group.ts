import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCopyOptionGroupRoute, postActionCopyOptionGroupRoute } from '../routes'

export const getActionCopyOptionGroupRouteHandler: RouteHandler<
  typeof getActionCopyOptionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCopyOptionGroupRouteHandler: RouteHandler<
  typeof postActionCopyOptionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

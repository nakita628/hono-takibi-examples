import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateGroupRoute, postActionUpdateGroupRoute } from '../routes'

export const getActionUpdateGroupRouteHandler: RouteHandler<
  typeof getActionUpdateGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateGroupRouteHandler: RouteHandler<
  typeof postActionUpdateGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

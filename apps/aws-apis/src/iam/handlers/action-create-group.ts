import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateGroupRoute, postActionCreateGroupRoute } from '../routes'

export const getActionCreateGroupRouteHandler: RouteHandler<
  typeof getActionCreateGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateGroupRouteHandler: RouteHandler<
  typeof postActionCreateGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateOptionGroupRoute, postActionCreateOptionGroupRoute } from '../routes'

export const getActionCreateOptionGroupRouteHandler: RouteHandler<
  typeof getActionCreateOptionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateOptionGroupRouteHandler: RouteHandler<
  typeof postActionCreateOptionGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

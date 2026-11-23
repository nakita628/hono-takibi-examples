import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteStackRoute, postActionDeleteStackRoute } from '../routes'

export const getActionDeleteStackRouteHandler: RouteHandler<
  typeof getActionDeleteStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteStackRouteHandler: RouteHandler<
  typeof postActionDeleteStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

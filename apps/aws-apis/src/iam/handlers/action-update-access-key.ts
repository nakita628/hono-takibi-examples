import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateAccessKeyRoute, postActionUpdateAccessKeyRoute } from '../routes'

export const getActionUpdateAccessKeyRouteHandler: RouteHandler<
  typeof getActionUpdateAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateAccessKeyRouteHandler: RouteHandler<
  typeof postActionUpdateAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

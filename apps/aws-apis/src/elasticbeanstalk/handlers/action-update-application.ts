import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateApplicationRoute, postActionUpdateApplicationRoute } from '../routes'

export const getActionUpdateApplicationRouteHandler: RouteHandler<
  typeof getActionUpdateApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateApplicationRouteHandler: RouteHandler<
  typeof postActionUpdateApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

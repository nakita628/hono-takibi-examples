import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteApplicationRoute, postActionDeleteApplicationRoute } from '../routes'

export const getActionDeleteApplicationRouteHandler: RouteHandler<
  typeof getActionDeleteApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteApplicationRouteHandler: RouteHandler<
  typeof postActionDeleteApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

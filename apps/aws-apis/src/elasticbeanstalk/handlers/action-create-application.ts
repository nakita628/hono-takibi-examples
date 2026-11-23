import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateApplicationRoute, postActionCreateApplicationRoute } from '../routes'

export const getActionCreateApplicationRouteHandler: RouteHandler<
  typeof getActionCreateApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateApplicationRouteHandler: RouteHandler<
  typeof postActionCreateApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

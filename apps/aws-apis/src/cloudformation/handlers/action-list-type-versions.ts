import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListTypeVersionsRoute, postActionListTypeVersionsRoute } from '../routes'

export const getActionListTypeVersionsRouteHandler: RouteHandler<
  typeof getActionListTypeVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListTypeVersionsRouteHandler: RouteHandler<
  typeof postActionListTypeVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

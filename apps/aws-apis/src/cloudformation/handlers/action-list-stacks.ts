import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListStacksRoute, postActionListStacksRoute } from '../routes'

export const getActionListStacksRouteHandler: RouteHandler<
  typeof getActionListStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListStacksRouteHandler: RouteHandler<
  typeof postActionListStacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

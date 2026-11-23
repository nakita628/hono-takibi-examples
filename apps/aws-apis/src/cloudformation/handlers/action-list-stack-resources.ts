import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListStackResourcesRoute, postActionListStackResourcesRoute } from '../routes'

export const getActionListStackResourcesRouteHandler: RouteHandler<
  typeof getActionListStackResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListStackResourcesRouteHandler: RouteHandler<
  typeof postActionListStackResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

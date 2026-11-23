import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateStackRoute, postActionUpdateStackRoute } from '../routes'

export const getActionUpdateStackRouteHandler: RouteHandler<
  typeof getActionUpdateStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateStackRouteHandler: RouteHandler<
  typeof postActionUpdateStackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateLoginProfileRoute, postActionUpdateLoginProfileRoute } from '../routes'

export const getActionUpdateLoginProfileRouteHandler: RouteHandler<
  typeof getActionUpdateLoginProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateLoginProfileRouteHandler: RouteHandler<
  typeof postActionUpdateLoginProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

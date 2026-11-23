import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetInstanceProfileRoute, postActionGetInstanceProfileRoute } from '../routes'

export const getActionGetInstanceProfileRouteHandler: RouteHandler<
  typeof getActionGetInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetInstanceProfileRouteHandler: RouteHandler<
  typeof postActionGetInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

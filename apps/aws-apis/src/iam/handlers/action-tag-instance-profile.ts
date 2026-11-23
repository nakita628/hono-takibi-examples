import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTagInstanceProfileRoute, postActionTagInstanceProfileRoute } from '../routes'

export const getActionTagInstanceProfileRouteHandler: RouteHandler<
  typeof getActionTagInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTagInstanceProfileRouteHandler: RouteHandler<
  typeof postActionTagInstanceProfileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

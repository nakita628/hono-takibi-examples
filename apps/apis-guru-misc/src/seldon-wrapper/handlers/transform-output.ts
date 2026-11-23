import type { RouteHandler } from '@hono/zod-openapi'
import type { getTransformOutputRoute, postTransformOutputRoute } from '../routes'

export const getTransformOutputRouteHandler: RouteHandler<typeof getTransformOutputRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTransformOutputRouteHandler: RouteHandler<
  typeof postTransformOutputRoute
> = async (c) => {
  throw new Error('Not implemented')
}

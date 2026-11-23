import type { RouteHandler } from '@hono/zod-openapi'
import type { getTransformInputRoute, postTransformInputRoute } from '../routes'

export const getTransformInputRouteHandler: RouteHandler<typeof getTransformInputRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTransformInputRouteHandler: RouteHandler<typeof postTransformInputRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

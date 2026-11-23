import type { RouteHandler } from '@hono/zod-openapi'
import type { getSetPublicStatusRoute, postSetPublicStatusRoute } from '../routes'

export const getSetPublicStatusRouteHandler: RouteHandler<typeof getSetPublicStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSetPublicStatusRouteHandler: RouteHandler<
  typeof postSetPublicStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

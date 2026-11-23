import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetPublicStatusRoute, postGetPublicStatusRoute } from '../routes'

export const getGetPublicStatusRouteHandler: RouteHandler<typeof getGetPublicStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGetPublicStatusRouteHandler: RouteHandler<
  typeof postGetPublicStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

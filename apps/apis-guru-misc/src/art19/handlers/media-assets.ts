import type { RouteHandler } from '@hono/zod-openapi'
import type { getMediaAssetsIdRoute, getMediaAssetsRoute } from '../routes'

export const getMediaAssetsRouteHandler: RouteHandler<typeof getMediaAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMediaAssetsIdRouteHandler: RouteHandler<typeof getMediaAssetsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

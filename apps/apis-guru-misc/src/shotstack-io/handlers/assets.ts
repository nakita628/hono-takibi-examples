import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteAssetsIdRoute, getAssetsIdRoute, getAssetsRenderIdRoute } from '../routes'

export const getAssetsRenderIdRouteHandler: RouteHandler<typeof getAssetsRenderIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAssetsIdRouteHandler: RouteHandler<typeof deleteAssetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsIdRouteHandler: RouteHandler<typeof getAssetsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

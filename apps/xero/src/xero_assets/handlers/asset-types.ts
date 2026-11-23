import type { RouteHandler } from '@hono/zod-openapi'
import type { getAssetTypesRoute, postAssetTypesRoute } from '../routes'

export const getAssetTypesRouteHandler: RouteHandler<typeof getAssetTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAssetTypesRouteHandler: RouteHandler<typeof postAssetTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getSamlMetadataRoute, postSamlAcsRoute } from '../routes'

export const getSamlMetadataRouteHandler: RouteHandler<typeof getSamlMetadataRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSamlAcsRouteHandler: RouteHandler<typeof postSamlAcsRoute> = async (c) => {
  throw new Error('Not implemented')
}

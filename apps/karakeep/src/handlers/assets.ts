import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAssetsAssetIdRoute,
  getAssetsAssetIdSignedUrlRoute,
  postAssetsRoute,
} from '../routes'

export const postAssetsRouteHandler: RouteHandler<typeof postAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsAssetIdRouteHandler: RouteHandler<typeof getAssetsAssetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAssetsAssetIdSignedUrlRouteHandler: RouteHandler<
  typeof getAssetsAssetIdSignedUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

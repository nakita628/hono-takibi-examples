import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAssetsAssetIdRoute,
  getAssetsAssetIdRoute,
  getAssetsRoute,
  optionsAssetsAssetIdRoute,
  optionsAssetsRoute,
  patchAssetsAssetIdRoute,
  postAssetsRoute,
} from '../routes'

export const getAssetsRouteHandler: RouteHandler<typeof getAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsAssetsRouteHandler: RouteHandler<typeof optionsAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAssetsRouteHandler: RouteHandler<typeof postAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAssetsAssetIdRouteHandler: RouteHandler<
  typeof deleteAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsAssetIdRouteHandler: RouteHandler<typeof getAssetsAssetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const optionsAssetsAssetIdRouteHandler: RouteHandler<
  typeof optionsAssetsAssetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAssetsAssetIdRouteHandler: RouteHandler<typeof patchAssetsAssetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

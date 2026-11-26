import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAssetFilesRoute,
  deleteAssetFilesIdRoute,
  getAssetFilesIdRoute,
  getAssetFilesIdDownloadRoute,
} from '../routes'

export const getAssetFilesRouteHandler: RouteHandler<typeof getAssetFilesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAssetFilesIdRouteHandler: RouteHandler<typeof deleteAssetFilesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAssetFilesIdRouteHandler: RouteHandler<typeof getAssetFilesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetFilesIdDownloadRouteHandler: RouteHandler<
  typeof getAssetFilesIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

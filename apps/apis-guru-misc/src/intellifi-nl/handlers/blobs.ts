import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBlobsIdRoute,
  getBlobsIdDownloadFilenameRoute,
  getBlobsIdRoute,
  getBlobsRoute,
  postBlobsIdUploadRoute,
  postBlobsRoute,
} from '../routes'

export const getBlobsRouteHandler: RouteHandler<typeof getBlobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlobsRouteHandler: RouteHandler<typeof postBlobsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteBlobsIdRouteHandler: RouteHandler<typeof deleteBlobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlobsIdRouteHandler: RouteHandler<typeof getBlobsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlobsIdDownloadFilenameRouteHandler: RouteHandler<
  typeof getBlobsIdDownloadFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBlobsIdUploadRouteHandler: RouteHandler<typeof postBlobsIdUploadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

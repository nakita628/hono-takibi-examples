import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFileRequestsFileRequestIdRoute,
  getFileRequestsFileRequestIdRoute,
  postFileRequestsFileRequestIdCopyRoute,
  putFileRequestsFileRequestIdRoute,
} from '../routes'

export const getFileRequestsFileRequestIdRouteHandler: RouteHandler<
  typeof getFileRequestsFileRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putFileRequestsFileRequestIdRouteHandler: RouteHandler<
  typeof putFileRequestsFileRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFileRequestsFileRequestIdRouteHandler: RouteHandler<
  typeof deleteFileRequestsFileRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFileRequestsFileRequestIdCopyRouteHandler: RouteHandler<
  typeof postFileRequestsFileRequestIdCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteImagesImageIdRoute,
  getImagesImageIdRoute,
  getImagesRoute,
  postImagesRoute,
  postImagesUploadRoute,
  putImagesImageIdRoute,
} from '../routes'

export const getImagesRouteHandler: RouteHandler<typeof getImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postImagesRouteHandler: RouteHandler<typeof postImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postImagesUploadRouteHandler: RouteHandler<typeof postImagesUploadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteImagesImageIdRouteHandler: RouteHandler<
  typeof deleteImagesImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesImageIdRouteHandler: RouteHandler<typeof getImagesImageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putImagesImageIdRouteHandler: RouteHandler<typeof putImagesImageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

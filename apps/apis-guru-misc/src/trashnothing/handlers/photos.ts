import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePhotosPhotoIdRoute,
  getPhotosMultipleRoute,
  postPhotosPhotoIdRotateRoute,
  postPhotosRoute,
} from '../routes'

export const postPhotosRouteHandler: RouteHandler<typeof postPhotosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPhotosMultipleRouteHandler: RouteHandler<typeof getPhotosMultipleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deletePhotosPhotoIdRouteHandler: RouteHandler<
  typeof deletePhotosPhotoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPhotosPhotoIdRotateRouteHandler: RouteHandler<
  typeof postPhotosPhotoIdRotateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

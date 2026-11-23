import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postUploadsRoute,
  postUploadsUploadIdCancelRoute,
  postUploadsUploadIdCompleteRoute,
  postUploadsUploadIdPartsRoute,
} from '../routes'

export const postUploadsRouteHandler: RouteHandler<typeof postUploadsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsUploadIdCancelRouteHandler: RouteHandler<
  typeof postUploadsUploadIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsUploadIdCompleteRouteHandler: RouteHandler<
  typeof postUploadsUploadIdCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsUploadIdPartsRouteHandler: RouteHandler<
  typeof postUploadsUploadIdPartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

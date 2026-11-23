import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postUploadsAbortMultipartJsonRoute,
  postUploadsBatchPresignMultipartPartsJsonRoute,
  postUploadsCompleteExternalUploadJsonRoute,
  postUploadsCompleteMultipartJsonRoute,
  postUploadsCreateMultipartJsonRoute,
  postUploadsGeneratePresignedPutJsonRoute,
} from '../routes'

export const postUploadsAbortMultipartJsonRouteHandler: RouteHandler<
  typeof postUploadsAbortMultipartJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsBatchPresignMultipartPartsJsonRouteHandler: RouteHandler<
  typeof postUploadsBatchPresignMultipartPartsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsCompleteExternalUploadJsonRouteHandler: RouteHandler<
  typeof postUploadsCompleteExternalUploadJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsCompleteMultipartJsonRouteHandler: RouteHandler<
  typeof postUploadsCompleteMultipartJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsCreateMultipartJsonRouteHandler: RouteHandler<
  typeof postUploadsCreateMultipartJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUploadsGeneratePresignedPutJsonRouteHandler: RouteHandler<
  typeof postUploadsGeneratePresignedPutJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

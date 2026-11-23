import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAnythingImagePngRoute,
  postAnythingMultipartFormdataRoute,
  putAnythingMultipartFormdataRoute,
} from '../routes'

export const postAnythingImagePngRouteHandler: RouteHandler<
  typeof postAnythingImagePngRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingMultipartFormdataRouteHandler: RouteHandler<
  typeof postAnythingMultipartFormdataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAnythingMultipartFormdataRouteHandler: RouteHandler<
  typeof putAnythingMultipartFormdataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

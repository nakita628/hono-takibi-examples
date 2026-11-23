import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getImageJpegRoute,
  getImagePngRoute,
  getImageRoute,
  getImageSvgRoute,
  getImageWebpRoute,
} from '../routes'

export const getImageRouteHandler: RouteHandler<typeof getImageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImageJpegRouteHandler: RouteHandler<typeof getImageJpegRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagePngRouteHandler: RouteHandler<typeof getImagePngRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImageSvgRouteHandler: RouteHandler<typeof getImageSvgRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImageWebpRouteHandler: RouteHandler<typeof getImageWebpRoute> = async (c) => {
  throw new Error('Not implemented')
}

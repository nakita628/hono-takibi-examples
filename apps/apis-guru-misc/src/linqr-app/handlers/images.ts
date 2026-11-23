import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteImagesIdRoute,
  getImagesIdRoute,
  getImagesRoute,
  postImagesRoute,
} from '../routes'

export const getImagesRouteHandler: RouteHandler<typeof getImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postImagesRouteHandler: RouteHandler<typeof postImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteImagesIdRouteHandler: RouteHandler<typeof deleteImagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesIdRouteHandler: RouteHandler<typeof getImagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

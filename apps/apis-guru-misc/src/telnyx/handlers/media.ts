import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMediaMediaNameRoute,
  getMediaMediaNameDownloadRoute,
  getMediaMediaNameRoute,
  getMediaRoute,
  postMediaRoute,
  putMediaMediaNameRoute,
} from '../routes'

export const getMediaRouteHandler: RouteHandler<typeof getMediaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMediaRouteHandler: RouteHandler<typeof postMediaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMediaMediaNameRouteHandler: RouteHandler<
  typeof deleteMediaMediaNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMediaMediaNameRouteHandler: RouteHandler<typeof getMediaMediaNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putMediaMediaNameRouteHandler: RouteHandler<typeof putMediaMediaNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMediaMediaNameDownloadRouteHandler: RouteHandler<
  typeof getMediaMediaNameDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

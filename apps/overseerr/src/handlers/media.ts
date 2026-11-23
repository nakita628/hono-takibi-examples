import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMediaMediaIdRoute,
  getMediaMediaIdWatchDataRoute,
  getMediaRoute,
  postMediaMediaIdStatusRoute,
} from '../routes'

export const getMediaRouteHandler: RouteHandler<typeof getMediaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMediaMediaIdRouteHandler: RouteHandler<typeof deleteMediaMediaIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMediaMediaIdStatusRouteHandler: RouteHandler<
  typeof postMediaMediaIdStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMediaMediaIdWatchDataRouteHandler: RouteHandler<
  typeof getMediaMediaIdWatchDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

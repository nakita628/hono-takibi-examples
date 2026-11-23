import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMediaSyncCurrentRoute,
  getMediaSyncStatusJobIdRoute,
  postMediaSyncRoute,
} from '../routes'

export const postMediaSyncRouteHandler: RouteHandler<typeof postMediaSyncRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMediaSyncCurrentRouteHandler: RouteHandler<
  typeof getMediaSyncCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMediaSyncStatusJobIdRouteHandler: RouteHandler<
  typeof getMediaSyncStatusJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

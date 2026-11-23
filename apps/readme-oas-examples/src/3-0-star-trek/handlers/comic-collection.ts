import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getComicCollectionRoute,
  getComicCollectionSearchRoute,
  postComicCollectionSearchRoute,
} from '../routes'

export const getComicCollectionRouteHandler: RouteHandler<typeof getComicCollectionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getComicCollectionSearchRouteHandler: RouteHandler<
  typeof getComicCollectionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postComicCollectionSearchRouteHandler: RouteHandler<
  typeof postComicCollectionSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

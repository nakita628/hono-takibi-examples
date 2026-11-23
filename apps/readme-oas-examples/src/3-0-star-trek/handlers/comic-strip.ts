import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getComicStripRoute,
  getComicStripSearchRoute,
  postComicStripSearchRoute,
} from '../routes'

export const getComicStripRouteHandler: RouteHandler<typeof getComicStripRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getComicStripSearchRouteHandler: RouteHandler<
  typeof getComicStripSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postComicStripSearchRouteHandler: RouteHandler<
  typeof postComicStripSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVideoReleaseRoute,
  getVideoReleaseSearchRoute,
  postVideoReleaseSearchRoute,
} from '../routes'

export const getVideoReleaseRouteHandler: RouteHandler<typeof getVideoReleaseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideoReleaseSearchRouteHandler: RouteHandler<
  typeof getVideoReleaseSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVideoReleaseSearchRouteHandler: RouteHandler<
  typeof postVideoReleaseSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

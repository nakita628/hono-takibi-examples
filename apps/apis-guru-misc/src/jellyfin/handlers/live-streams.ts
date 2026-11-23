import type { RouteHandler } from '@hono/zod-openapi'
import type { postLiveStreamsCloseRoute, postLiveStreamsOpenRoute } from '../routes'

export const postLiveStreamsCloseRouteHandler: RouteHandler<
  typeof postLiveStreamsCloseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLiveStreamsOpenRouteHandler: RouteHandler<
  typeof postLiveStreamsOpenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

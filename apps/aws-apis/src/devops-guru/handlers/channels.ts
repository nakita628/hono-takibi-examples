import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteChannelsIdRoute, postChannelsRoute, putChannelsRoute } from '../routes'

export const putChannelsRouteHandler: RouteHandler<typeof putChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelsRouteHandler: RouteHandler<typeof postChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChannelsIdRouteHandler: RouteHandler<typeof deleteChannelsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteDefaultStreamsRoute, postDefaultStreamsRoute } from '../routes'

export const postDefaultStreamsRouteHandler: RouteHandler<typeof postDefaultStreamsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDefaultStreamsRouteHandler: RouteHandler<
  typeof deleteDefaultStreamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

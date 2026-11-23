import type { RouteHandler } from '@hono/zod-openapi'
import type { postConnKickRoute, postConnRemoveRoute } from '../routes'

export const postConnRemoveRouteHandler: RouteHandler<typeof postConnRemoveRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnKickRouteHandler: RouteHandler<typeof postConnKickRoute> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { postPinsChangeRoute, postPinsRevealRoute } from '../routes'

export const postPinsChangeRouteHandler: RouteHandler<typeof postPinsChangeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPinsRevealRouteHandler: RouteHandler<typeof postPinsRevealRoute> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { postURLEncodeRoute } from '../routes'

export const postURLEncodeRouteHandler: RouteHandler<typeof postURLEncodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

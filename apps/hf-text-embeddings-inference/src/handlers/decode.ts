import type { RouteHandler } from '@hono/zod-openapi'
import type { postDecodeRoute } from '../routes'

export const postDecodeRouteHandler: RouteHandler<typeof postDecodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

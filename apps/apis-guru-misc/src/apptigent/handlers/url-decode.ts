import type { RouteHandler } from '@hono/zod-openapi'
import type { postURLDecodeRoute } from '../routes'

export const postURLDecodeRouteHandler: RouteHandler<typeof postURLDecodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

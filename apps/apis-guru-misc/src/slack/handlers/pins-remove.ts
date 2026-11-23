import type { RouteHandler } from '@hono/zod-openapi'
import type { postPinsRemoveRoute } from '../routes'

export const postPinsRemoveRouteHandler: RouteHandler<typeof postPinsRemoveRoute> = async (c) => {
  throw new Error('Not implemented')
}

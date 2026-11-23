import type { RouteHandler } from '@hono/zod-openapi'
import type { postPinsCreateRoute } from '../routes'

export const postPinsCreateRouteHandler: RouteHandler<typeof postPinsCreateRoute> = async (c) => {
  throw new Error('Not implemented')
}

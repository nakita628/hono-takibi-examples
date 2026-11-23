import type { RouteHandler } from '@hono/zod-openapi'
import type { postPinsListRoute } from '../routes'

export const postPinsListRouteHandler: RouteHandler<typeof postPinsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

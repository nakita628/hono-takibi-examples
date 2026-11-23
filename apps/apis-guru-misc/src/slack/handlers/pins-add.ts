import type { RouteHandler } from '@hono/zod-openapi'
import type { postPinsAddRoute } from '../routes'

export const postPinsAddRouteHandler: RouteHandler<typeof postPinsAddRoute> = async (c) => {
  throw new Error('Not implemented')
}

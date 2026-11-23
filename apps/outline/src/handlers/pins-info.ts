import type { RouteHandler } from '@hono/zod-openapi'
import type { postPinsInfoRoute } from '../routes'

export const postPinsInfoRouteHandler: RouteHandler<typeof postPinsInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

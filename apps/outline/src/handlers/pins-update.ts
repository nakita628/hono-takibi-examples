import type { RouteHandler } from '@hono/zod-openapi'
import type { postPinsUpdateRoute } from '../routes'

export const postPinsUpdateRouteHandler: RouteHandler<typeof postPinsUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}

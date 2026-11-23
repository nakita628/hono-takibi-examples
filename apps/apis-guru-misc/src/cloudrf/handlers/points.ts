import type { RouteHandler } from '@hono/zod-openapi'
import type { postPointsRoute } from '../routes'

export const postPointsRouteHandler: RouteHandler<typeof postPointsRoute> = async (c) => {
  throw new Error('Not implemented')
}

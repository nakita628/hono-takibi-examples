import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthRoute } from '../routes'

export const getAuthRouteHandler: RouteHandler<typeof getAuthRoute> = async (c) => {
  throw new Error('Not implemented')
}

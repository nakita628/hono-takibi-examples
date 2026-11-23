import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrgsRoute } from '../routes'

export const getOrgsRouteHandler: RouteHandler<typeof getOrgsRoute> = async (c) => {
  throw new Error('Not implemented')
}

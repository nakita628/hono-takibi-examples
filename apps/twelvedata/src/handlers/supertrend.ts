import type { RouteHandler } from '@hono/zod-openapi'
import type { getSupertrendRoute } from '../routes'

export const getSupertrendRouteHandler: RouteHandler<typeof getSupertrendRoute> = async (c) => {
  throw new Error('Not implemented')
}

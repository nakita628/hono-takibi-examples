import type { RouteHandler } from '@hono/zod-openapi'
import type { getEpsTrendRoute } from '../routes'

export const getEpsTrendRouteHandler: RouteHandler<typeof getEpsTrendRoute> = async (c) => {
  throw new Error('Not implemented')
}

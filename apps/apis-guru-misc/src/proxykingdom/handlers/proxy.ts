import type { RouteHandler } from '@hono/zod-openapi'
import type { getProxyRoute } from '../routes'

export const getProxyRouteHandler: RouteHandler<typeof getProxyRoute> = async (c) => {
  throw new Error('Not implemented')
}

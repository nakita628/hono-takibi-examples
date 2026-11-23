import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpInfoRoute } from '../routes'

export const getIpInfoRouteHandler: RouteHandler<typeof getIpInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

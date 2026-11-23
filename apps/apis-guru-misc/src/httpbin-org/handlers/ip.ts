import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpRoute } from '../routes'

export const getIpRouteHandler: RouteHandler<typeof getIpRoute> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getUdprnUdprnRoute } from '../routes'

export const getUdprnUdprnRouteHandler: RouteHandler<typeof getUdprnUdprnRoute> = async (c) => {
  throw new Error('Not implemented')
}

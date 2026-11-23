import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpBlocklistRoute } from '../routes'

export const getIpBlocklistRouteHandler: RouteHandler<typeof getIpBlocklistRoute> = async (c) => {
  throw new Error('Not implemented')
}

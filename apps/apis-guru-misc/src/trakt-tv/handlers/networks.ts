import type { RouteHandler } from '@hono/zod-openapi'
import type { getNetworksRoute } from '../routes'

export const getNetworksRouteHandler: RouteHandler<typeof getNetworksRoute> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getPeersListRoute } from '../routes'

export const getPeersListRouteHandler: RouteHandler<typeof getPeersListRoute> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthRevokeRoute } from '../routes'

export const getAuthRevokeRouteHandler: RouteHandler<typeof getAuthRevokeRoute> = async (c) => {
  throw new Error('Not implemented')
}

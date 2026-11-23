import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecoveryRoute } from '../routes'

export const getRecoveryRouteHandler: RouteHandler<typeof getRecoveryRoute> = async (c) => {
  throw new Error('Not implemented')
}

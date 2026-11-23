import type { RouteHandler } from '@hono/zod-openapi'
import type { getSigningKeysKeysRoute } from '../routes'

export const getSigningKeysKeysRouteHandler: RouteHandler<typeof getSigningKeysKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

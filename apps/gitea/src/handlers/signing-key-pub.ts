import type { RouteHandler } from '@hono/zod-openapi'
import type { getSigningKeyPubRoute } from '../routes'

export const getSigningKeyPubRouteHandler: RouteHandler<typeof getSigningKeyPubRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

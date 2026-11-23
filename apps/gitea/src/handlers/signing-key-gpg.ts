import type { RouteHandler } from '@hono/zod-openapi'
import type { getSigningKeyGpgRoute } from '../routes'

export const getSigningKeyGpgRouteHandler: RouteHandler<typeof getSigningKeyGpgRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

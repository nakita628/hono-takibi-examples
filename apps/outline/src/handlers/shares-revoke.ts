import type { RouteHandler } from '@hono/zod-openapi'
import type { postSharesRevokeRoute } from '../routes'

export const postSharesRevokeRouteHandler: RouteHandler<typeof postSharesRevokeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

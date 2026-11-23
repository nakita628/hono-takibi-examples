import type { RouteHandler } from '@hono/zod-openapi'
import type { postCredentialsRevokeRoute } from '../routes'

export const postCredentialsRevokeRouteHandler: RouteHandler<
  typeof postCredentialsRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

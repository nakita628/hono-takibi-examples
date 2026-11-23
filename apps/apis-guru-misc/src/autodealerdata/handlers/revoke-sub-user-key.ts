import type { RouteHandler } from '@hono/zod-openapi'
import type { putRevokeSubUserKeyRoute } from '../routes'

export const putRevokeSubUserKeyRouteHandler: RouteHandler<
  typeof putRevokeSubUserKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

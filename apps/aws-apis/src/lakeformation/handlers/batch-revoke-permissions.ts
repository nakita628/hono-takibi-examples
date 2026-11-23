import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchRevokePermissionsRoute } from '../routes'

export const postBatchRevokePermissionsRouteHandler: RouteHandler<
  typeof postBatchRevokePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

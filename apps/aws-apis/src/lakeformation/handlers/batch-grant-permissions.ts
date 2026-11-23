import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchGrantPermissionsRoute } from '../routes'

export const postBatchGrantPermissionsRouteHandler: RouteHandler<
  typeof postBatchGrantPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

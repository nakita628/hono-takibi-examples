import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateDeletionProtectionRoute } from '../routes'

export const postUpdateDeletionProtectionRouteHandler: RouteHandler<
  typeof postUpdateDeletionProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

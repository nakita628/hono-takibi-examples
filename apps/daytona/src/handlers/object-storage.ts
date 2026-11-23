import type { RouteHandler } from '@hono/zod-openapi'
import type { getObjectStoragePushAccessRoute } from '../routes'

export const getObjectStoragePushAccessRouteHandler: RouteHandler<
  typeof getObjectStoragePushAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

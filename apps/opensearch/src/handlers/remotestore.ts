import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemotestoreRestoreRoute } from '../routes'

export const postRemotestoreRestoreRouteHandler: RouteHandler<
  typeof postRemotestoreRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

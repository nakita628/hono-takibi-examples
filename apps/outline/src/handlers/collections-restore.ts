import type { RouteHandler } from '@hono/zod-openapi'
import type { postCollectionsRestoreRoute } from '../routes'

export const postCollectionsRestoreRouteHandler: RouteHandler<
  typeof postCollectionsRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

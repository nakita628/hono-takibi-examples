import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemplatesRestoreRoute } from '../routes'

export const postTemplatesRestoreRouteHandler: RouteHandler<
  typeof postTemplatesRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

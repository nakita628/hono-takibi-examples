import type { RouteHandler } from '@hono/zod-openapi'
import type { postRestoreRoute } from '../routes'

export const postRestoreRouteHandler: RouteHandler<typeof postRestoreRoute> = async (c) => {
  throw new Error('Not implemented')
}

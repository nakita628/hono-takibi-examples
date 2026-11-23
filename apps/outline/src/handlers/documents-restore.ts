import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsRestoreRoute } from '../routes'

export const postDocumentsRestoreRouteHandler: RouteHandler<
  typeof postDocumentsRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

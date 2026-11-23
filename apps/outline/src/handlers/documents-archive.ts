import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsArchiveRoute } from '../routes'

export const postDocumentsArchiveRouteHandler: RouteHandler<
  typeof postDocumentsArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

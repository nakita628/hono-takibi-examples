import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsExportRoute } from '../routes'

export const postDocumentsExportRouteHandler: RouteHandler<
  typeof postDocumentsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

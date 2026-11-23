import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocumentsImportRoute } from '../routes'

export const postDocumentsImportRouteHandler: RouteHandler<
  typeof postDocumentsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

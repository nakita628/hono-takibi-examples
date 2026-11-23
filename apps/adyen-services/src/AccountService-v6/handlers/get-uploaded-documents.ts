import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetUploadedDocumentsRoute } from '../routes'

export const postGetUploadedDocumentsRouteHandler: RouteHandler<
  typeof postGetUploadedDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { postUploadDocumentRoute } from '../routes'

export const postUploadDocumentRouteHandler: RouteHandler<typeof postUploadDocumentRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

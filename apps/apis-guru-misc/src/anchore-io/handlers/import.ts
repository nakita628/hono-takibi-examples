import type { RouteHandler } from '@hono/zod-openapi'
import type { postImportImagesRoute } from '../routes'

export const postImportImagesRouteHandler: RouteHandler<typeof postImportImagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

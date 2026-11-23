import type { RouteHandler } from '@hono/zod-openapi'
import type { postFilesUploadRoute } from '../routes'

export const postFilesUploadRouteHandler: RouteHandler<typeof postFilesUploadRoute> = async (c) => {
  throw new Error('Not implemented')
}

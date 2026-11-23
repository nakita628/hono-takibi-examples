import type { RouteHandler } from '@hono/zod-openapi'
import type { putUploadUrlRoute } from '../routes'

export const putUploadUrlRouteHandler: RouteHandler<typeof putUploadUrlRoute> = async (c) => {
  throw new Error('Not implemented')
}

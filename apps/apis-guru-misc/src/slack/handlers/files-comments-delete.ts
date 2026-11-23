import type { RouteHandler } from '@hono/zod-openapi'
import type { postFilesCommentsDeleteRoute } from '../routes'

export const postFilesCommentsDeleteRouteHandler: RouteHandler<
  typeof postFilesCommentsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

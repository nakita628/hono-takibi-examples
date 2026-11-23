import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttachmentsDeleteRoute } from '../routes'

export const postAttachmentsDeleteRouteHandler: RouteHandler<
  typeof postAttachmentsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

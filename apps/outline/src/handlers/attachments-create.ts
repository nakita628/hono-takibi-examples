import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttachmentsCreateRoute } from '../routes'

export const postAttachmentsCreateRouteHandler: RouteHandler<
  typeof postAttachmentsCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttachmentsCreateFromUrlRoute } from '../routes'

export const postAttachmentsCreateFromUrlRouteHandler: RouteHandler<
  typeof postAttachmentsCreateFromUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttachmentsRedirectRoute } from '../routes'

export const postAttachmentsRedirectRouteHandler: RouteHandler<
  typeof postAttachmentsRedirectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

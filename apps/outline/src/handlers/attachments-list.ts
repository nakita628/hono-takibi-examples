import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttachmentsListRoute } from '../routes'

export const postAttachmentsListRouteHandler: RouteHandler<
  typeof postAttachmentsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
